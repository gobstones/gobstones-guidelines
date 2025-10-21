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
 * This hook is invoked by git-commit and git-merge, and can be
 * bypassed with the --no-verify option. It takes a single
 * parameter, the name of the file that holds the proposed commit
 * log message.
 *
 * Exiting with a non-zero status causes the command to abort.
 *
 * The hook is allowed to edit the message file in place, and can
 * be used to normalize the message into some project standard format.
 * It can also be used to refuse the commit after inspecting the
 * message file.
 *
 * The default commit-msg hook, when enabled, detects duplicate
 * Signed-off-by trailers, and aborts the commit if one is found.
 *
 * We use this hook to run "commitlint", that verifies that the
 * message sent has the correct format for the project, aborting otherwise.
 *
 *
 * @author Alan Rodas Bonjour <alanrodas@gmail.com>
 */
import process from 'process';
import {
    argv,
    echo
    //  path
} from 'zx';

// import { fileURLToPath } from 'url';
import { $ } from '../.scripts/_helpers.ts';

// const HOOKS_DIRECTORY = __dirname || path.dirname(fileURLToPath(import.meta.url));
// const SCRIPTS_DIRECTORY = path.join(path.dirname(HOOKS_DIRECTORY), '.scripts');

const COMMIT_MSG_FILE = argv._.length > 0 ? argv._[0] : undefined;

echo(`
**************************
Linting the commit message
**************************
`);

// Run commitlint
await $`npx --no -- commitlint --edit "${COMMIT_MSG_FILE}"`;

process.exit(0);
