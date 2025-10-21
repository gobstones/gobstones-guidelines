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
 * This hook is invoked by git-commit right after preparing
 * the default log message, and before the editor is started.
 *
 * It takes one to three parameters.
 *
 * The first is the name of the file that contains the commit log message.
 * The second is the source of the commit message, and can be:
 *   * message (if a -m or -F option was given);
 *   * template (if a -t option was given or the configuration option
 *               commit.template is set);
 *   * merge (if the commit is a merge or a .git/MERGE_MSG file exists);
 *   * squash (if a .git/SQUASH_MSG file exists);
 *   * commit (if a -c, -C or --amend option was given)
 * The third is a commit object name if source is commit.
 *
 * If the exit status is non-zero, git commit will abort.
 * The purpose of the hook is to edit the message file in place,
 * and it is not suppressed by the --no-verify option. A non-zero
 * exit means a failure of the hook and aborts the commit. It
 * should not be used as a replacement for the pre-commit hook.
 *
 * The sample prepare-commit-msg hook that comes with Git removes
 * the help message found in the commented portion of the commit template.
 *
 * We use this hook to run "cz", that forces the build of a
 * semantic commit message through a prompt.
 *
 * @author Alan Rodas Bonjour <alanrodas@gmail.com>
 */
import process from 'process';
import {
    argv,
    echo
    // path
} from 'zx';
// import { fileURLToPath } from 'url';
import { $ } from '../.scripts/_helpers.ts';

// const HOOKS_DIRECTORY = __dirname || path.dirname(fileURLToPath(import.meta.url));
// const SCRIPTS_DIRECTORY = path.join(path.dirname(HOOKS_DIRECTORY), '.scripts');

// const COMMIT_MSG_FILE = argv._.length > 0 ? argv._[0] : undefined;
const COMMIT_SOURCE = argv._.length > 1 ? argv._[1] : undefined;
const SHA1 = argv._.length > 2 ? argv._[2] : undefined;

echo(`
**************************
Generate commit message
**************************
`);

if (COMMIT_SOURCE === 'commit' && SHA1 === 'HEAD') {
    // This is an amend
    process.exit(0);
}
if (COMMIT_SOURCE === 'squash' || COMMIT_SOURCE === 'merge') {
    // squash and merge should not trigger cz
    process.exit(0);
}
if (COMMIT_SOURCE === 'template') {
    // cannot use templates, warn the user and fail.
    echo(
        `Setting a template through -t or commit.template in this project ` +
            `has been disabled. Please run a simple commit.`
    );
    process.exit(0);
}
if (COMMIT_SOURCE === 'message') {
    // cannot use templates, warn the user and fail.
    echo(`Setting a message through -m or -F option in this project has been disabled. Please run a simple commit.`);
    process.exit(0);
}
// Run cz
await $`exec < /dev/tty && npx cz --hook || true`;

process.exit(0);
