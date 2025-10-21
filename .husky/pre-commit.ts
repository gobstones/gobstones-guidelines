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

/**
 * This hook is invoked by git-commit, and can be bypassed with the
 * --no-verify option. It takes no parameters, and is invoked before
 * obtaining the proposed commit log message and making a commit.
 * Exiting with a non-zero status from this script causes the git
 * commit command to abort before creating a commit.
 *
 * The default pre-commit hook, when enabled, catches introduction of
 * lines with trailing whitespaces and aborts the commit when such a
 * line is found.
 *
 * All the git commit hooks are invoked with the environment variable
 * GIT_EDITOR=: if the command will not bring up an editor to modify
 * the commit message.
 *
 * The default pre-commit hook, when enabled and with the hooks.allownonascii
 * config option unset or set to false prevents the use of non-ASCII filenames.
 * We currently use this hook to update the changelog of the project
 * and make sure all files are prettified before sending them to the commit.
 *
 * Generated files are added to the commit.
 *
 * @author Alan Rodas Bonjour <alanrodas@gmail.com>
 */
import process from 'process';
import { echo, fs, path } from 'zx';
import { fileURLToPath } from 'url';
import { $, script } from '../.scripts/_helpers.ts';

const HOOKS_DIRECTORY = __dirname || path.dirname(fileURLToPath(import.meta.url));
const SCRIPTS_DIRECTORY = path.join(path.dirname(HOOKS_DIRECTORY), '.scripts');

echo(`
**************************
Running pre commit hooks
**************************
`);

echo(`Add license text to code files`);
await script('license', '--silent', {
    scriptsDirectory: SCRIPTS_DIRECTORY
});

echo(`Update changelog`);
if (fs.existsSync('git-log')) {
    await script('changelog', '--silent', {
        scriptsDirectory: SCRIPTS_DIRECTORY
    });
}

echo(`Prettify all files`);
await script('prettify', '--silent', {
    scriptsDirectory: SCRIPTS_DIRECTORY
});

echo(`Add updated files`);
await $`git add --all`;

process.exit(0);
