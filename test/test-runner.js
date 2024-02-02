const fs = require('fs');
const path = require('path');
const process = require('process');
const { rimraf } = require('rimraf');
const { execSync } = require('child_process');
const chalk = require('ansi-colors');

const verifyLinks = require('./verify-links.test');

function switchCurrentLocationToProjectRoot() {
    let dir = process.cwd();
    let previousDir;
    while (dir !== previousDir && !fs.existsSync(path.join(dir, 'package.json'))) {
        previousDir = dir;
        dir = path.basename(dir);
    }
    if (dir !== previousDir) {
        process.chdir(dir);
    }
}

function buildProject() {
    rimraf(verifyLinks.distFolder);
    execSync('npx @11ty/eleventy');
    execSync(`npx linkinator "${verifyLinks.distFolder}/**/*${verifyLinks.distFileExtension}" --format json > ${verifyLinks.fileLocation}`);
    execSync('sleep 1');
}

function cleanProject() {
    rimraf(verifyLinks.distFolder);
}

function generateLinkinatorReport() {
    const results = JSON.parse(fs.readFileSync(verifyLinks.fileLocation));
    let allPassed = true;
    const linksPerDoc = {};
    const documents = [];
    for (const link of results.links) {
        const distNoStarting = verifyLinks.distFolder.replace('./', '');

        // Avoid unnamed file links
        if (!link.parent) continue;
        // Avoid navigation links, global style and others to be considered
        if (
            link.parent === `${distNoStarting}/index.html` &&
            !link.url.startsWith(distNoStarting) &&
            !link.url.match(/^(?:[a-z+]+:)?\/\//i)
        ) {
            continue;
        }
        // Process link
        const docName =
            link.parent
                .replace(`${distNoStarting}/`, `${verifyLinks.srcFolder}/`)
                .replace(verifyLinks.distFileExtension, verifyLinks.srcFileExtension);
        let url = link.url;
        if (!url.match(/^(?:[a-z+]+:)?\/\//i)) {
            url = path.relative(path.dirname(link.parent), link.url);
            if (!url.startsWith('.')) {
                url = `./${url}`;
            }
        }
        // Eliminate excluded urls
        let isExcluded = false;
        for (const exclusion of verifyLinks.excludedUrls) {
            if (url.startsWith(exclusion)) {
                isExcluded = true;
                break;
            }
        }
        if (isExcluded) {
            continue;
        }

        // Add to the results
        if (!linksPerDoc[docName]) {
            linksPerDoc[docName] = { passed: true, links: [] };
        }
        documents.push(docName)
        linksPerDoc[docName].links.push({
            url: url,
            status: link.status,
            state: link.state
        });

        // Ignored links are always marked as 200
        let isIgnoredError = false;
        for (const exclusion of verifyLinks.ignoreErrorUrls) {
            if (url.startsWith(exclusion)) {
                isIgnoredError = true;
                break;
            }
        }

        if (isIgnoredError && link.status !== 200) {
            linksPerDoc[docName].links[ linksPerDoc[docName].links.length-1].status = 200;
            linksPerDoc[docName].links[ linksPerDoc[docName].links.length-1].state = 'OK';
        } else {
            if (link.state !== 'OK') {
                linksPerDoc[docName].passed = false;
                allPassed = false;
            }
        }
    }

    // We are going to add them in a sorted manner
    documents.sort();
    const sortedValues = {}
    for (const file of documents) {
        sortedValues[file] = linksPerDoc[file];
    }
    return {
        passed: allPassed,
        documents: sortedValues
    };
}

function printLinksStatusForDocument(documentName, documentStatus) {
    let brokenLinks = 0;
    let statusString = `Links of: ${chalk['underline'](documentName)}\n`;
    for (const link of documentStatus) {
        if (link.state === 'OK') {
            statusString += `  ${chalk['green']('ok')}\t`;
        } else {
            brokenLinks++;
            statusString += `  ${chalk['red']('error')}\t`;
        }
        const url = link.url.length > 76 ? `${link.url.substring(0, 76)}...` : link.url;
        const paceSeparator = ' '.repeat(80 - url.length);
        statusString += `${url}${paceSeparator}${chalk['gray'](link.status)}\n`;
    }
    console.log(statusString);
    return brokenLinks;
}

function printTestResults(testStatus) {
    let passed = testStatus.passed;
    let pagesAmount = 0;
    let pagesBroken = 0;
    let brokenLinks = 0;
    for (const docName of Object.keys(testStatus.documents)) {
        const doc = testStatus.documents[docName];
        pagesAmount++;
        if (doc.passed) {
            console.log(`${chalk['bgGreen']['black']['bold']('PASS')}  ${docName}`);
        } else {
            pagesBroken++;
            console.log(`${chalk['bgRed']['white']['bold']('FAIL')}  ${docName}`);
            brokenLinks += printLinksStatusForDocument(docName, doc.links);
            console.log('');
        }
    }

    console.log('');
    console.log(`Documents analyzed: ${pagesAmount}`);
    console.log(`Broken documents: ${pagesBroken}`);
    console.log(`Broken links: ${brokenLinks}`);
    console.log(`Status: ${passed ? 'PASS': 'FAIL'}`);
}

function runTests() {
    switchCurrentLocationToProjectRoot();
    buildProject();

    let testStatus = generateLinkinatorReport();
    printTestResults(testStatus);
    cleanProject();
    process.exitCode = testStatus.passed ? 0 : 1;
}

runTests();
