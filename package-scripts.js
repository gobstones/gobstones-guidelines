/* eslint-disable @typescript-eslint/no-var-requires */
const { tasks } = require('@gobstones/gobstones-scripts');

const defaultConfiguration = {
    options: {
        scripts: false,
        logLevel: 'warn',
        'help-style': 'basic'
    },
    scripts: {
        default: {
            script: tasks.nps('help'),
            hiddenFromHelp: true
        },

        dev: {
            script: tasks.serially(
                tasks.nps('clean.dist'),
                tasks.npx('@11ty/eleventy --serve')
            ),
            description: 'Run the eleventy server in development mode'
        },

        test: {
            script: tasks.serially(
                tasks.nps('lint'),
                tasks.node('./test/test-runner.js')
            ),
            description: 'Run the linter and verify all links'
        },

        build: {
            script: tasks.serially(
                tasks.nps('clean.dist'),
                tasks.npx('@11ty/eleventy')
            ),
            description: 'Build the application into "dist" folder'
        },

        clean: {
            script: tasks.nps('clean.dist'),
            description: 'Remove all automatically generated files and folders',
            hiddenFromHelp: true,
            dist: {
                script: tasks.remove({ files: './dist' }),
                description: 'Delete the dist folder',
                hiddenFromHelp: true
            }
        },

        lint: {
            script: tasks.npx('markdownlint-cli --config markdownlint.config.js "./src/pages/**/*.md"'),
            description: 'Run the linter on all the pages (src/pages)',
            fix: {
                script: tasks.npx('markdownlint-cli --config markdownlint.config.js --fix "./src/pages/**/*.md"'),
                description: 'Run the linter on all the pages (src/pages) fixing all auto-fixable errors'
            }
        },

        prettify: {
            script: tasks.nps('lint'),
            description: 'Run the linter attempting to fix all errors'
        },

        changelog: {
            script: tasks.npx('conventional-changelog -p angular -i CHANGELOG.md -s'),
            description: 'Generate changelog based on tags',
            hiddenFromHelp: true,
            scratch: {
                script: tasks.npx('conventional-changelog -p angular -i CHANGELOG.md -s -r 0'),
                description: 'Generate changelog based on tags, starting from scratch',
                hiddenFromHelp: true
            },
        }
    }
};

module.exports = defaultConfiguration;
