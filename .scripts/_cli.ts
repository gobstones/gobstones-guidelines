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
import process from 'process';
import { $, argv, cd, chalk, echo, fs, os, path, useBash, usePowerShell } from 'zx';
import { fileURLToPath } from 'url';
import { script } from './_helpers.ts';

// GLOBALS
const SCRIPTS_DIRECTORY = __dirname || path.dirname(fileURLToPath(import.meta.url));
const SCRIPTS_FILE_EXT = '.ts';
const SCRIPTS_IGNORE_STARTING = '_';
const SHELL_POWERSHELL_NAME = 'powershell';
const SHELL_BASH_NAME = 'bash';
const SHELL = os.platform().startsWith('win') ? SHELL_POWERSHELL_NAME : SHELL_BASH_NAME;
const COMMANDS_PADDING = 25;

// STRINGS
const HELP_HEADER = (): string => 'Available commands:\n';
const USE_HELP_FOOTER = (): string => '\nUse: npm start <command> [args...]';

// GLOBAL SETUP
if (SHELL === SHELL_POWERSHELL_NAME) {
    usePowerShell();
}
if (SHELL === SHELL_BASH_NAME) {
    useBash();
}

// DEFINITIONS

/** Display the cli help, with all available commands */
const showHelp = (showHidden = false): void => {
    echo(HELP_HEADER());
    const files = fs.readdirSync(SCRIPTS_DIRECTORY);
    const scripts = files.filter((f) => f.endsWith(SCRIPTS_FILE_EXT) && !f.startsWith(SCRIPTS_IGNORE_STARTING));

    for (const file of scripts.sort()) {
        const content = fs.readFileSync(path.join(SCRIPTS_DIRECTORY, file), 'utf8');
        const docBlocks = content.match(/\/\*\*([\s\S]*?)\*\//g);
        const firstDocBlock = (docBlocks ? docBlocks[0] : '')
            .split('\n')
            .map((line) =>
                line
                    .trim()
                    .replace(/\*\/$/, '')
                    .replace(/^\/?\*+ */, '')
            )
            .filter((line) => line.length > 0);

        const isHidden = firstDocBlock.find((line) => line === '@hidden');
        const colorizeFunction = isHidden ? chalk.red : chalk.blue;
        if (isHidden && !showHidden) continue;
        const doc = firstDocBlock.filter((line) => line !== '@hidden').join(' ');

        const name = path.basename(file, SCRIPTS_FILE_EXT);
        echo(`  ${colorizeFunction(name).padEnd(COMMANDS_PADDING)} ${doc}`);
    }

    echo(USE_HELP_FOOTER());
    process.exit(0);
};

/** Call the matching subcommand, if exists, or show help if needed */
const main = async (): Promise<void> => {
    if (argv._.length === 0 || argv.help || argv.h || argv['full-help']) {
        showHelp(argv['full-help'] as boolean);
    }

    const command = argv._[0];
    const passthroughArgs = process.argv.slice(process.argv.indexOf(argv._[0]) + 1).join(' ');
    await script(command, passthroughArgs);
};

/* CONFIGURE $ GLOBALLY */
$.stdio = 'inherit';
$.preferLocal = true;
cd(path.dirname(SCRIPTS_DIRECTORY));

/* ENTRYPOINT */
await main();
