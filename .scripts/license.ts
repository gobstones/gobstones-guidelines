#!/usr/bin/env zx
/*
 * *****************************************************************************
 * Copyright (C) National University of Quilmes 2018-2024
 * Gobstones (TM) is a trademark of the National University of Quilmes.
 *
 * This program is free software distributed under the terms of the
 * GNU Affero General Public License version 3.
 * Additional terms added in compliance to section 7 of such license apply.
 *
 * You may read the full license at https://gobstones.github.io/gobstones-guidelines/LICENSE.
 * *****************************************************************************
 */
import { argv, fs, tmpfile } from 'zx';
import { $, licenseHeaderConfigPath, script } from './_helpers.ts';

/**
 * Add license information to all code files in the project.
 * Use --remove to remove the license from files.
 *
 * @hidden
 */
await script('build');

const config = {
    license: licenseHeaderConfigPath,
    // Configuration works by exclusion, which is weird
    ignore: [
        // Exclude docs and tests
        'docs/',
        'test/',
        // Exclude every file in project-types for gobstones-scripts
        // Except the typescript files in their src folders.
        'project-types/**/src/**/!(*.ts|*.tsx)',
        // Exclude the tests in the project-types for gobstones-scripts
        'project-types/**/test/**/*',
        // Every file in dist is excluded except the javascript and typescript files.
        'dist/**/!(*.d.ts|*.js|*.cjs|*.mjs)',
        // Every file in project, except the typescript files.
        '**/!(*.ts|*.tsx)'
    ],
    defaultFormat: {
        prepend: '/*',
        append: '*/'
    },
    licenseFormats: {
        'ts|tsx|js|jsx': {
            prepend: '/*',
            append: ' */',
            eachLine: {
                prepend: ' * '
            }
        }
    },
    trailingWhitespace: 'TRIM'
};

const tempConfigFile = tmpfile();
fs.writeFileSync(tempConfigFile, JSON.stringify(config, undefined, 2));

await $`license-check-and-add ${argv.remove ? 'remove' : 'add'} -f ${tempConfigFile}`;

fs.unlinkSync(tempConfigFile);
