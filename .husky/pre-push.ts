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
 * This hook is called by git-push and can be used to prevent a
 * push from taking place. The hook is called with two parameters
 * which provide the name and location of the destination remote,
 * if a named remote is not being used both values will be the same.
 *
 * Information about what is to be pushed is provided on the hook's
 * standard input with lines of the form:
 * <local ref> SP <local object name> SP <remote ref> SP <remote object name> LF
 *
 * For instance, if the command git push origin master:foreign were
 * run the hook would receive a line like the following:
 * refs/heads/master 67890 refs/heads/foreign 12345
 *
 * although the full object name would be supplied. If the foreign ref
 * does not yet exist the <remote object name> will be the all-zeroes
 * object name. If a ref is to be deleted, the <local ref> will be
 * supplied as (delete) and the <local object name> will be the
 * all-zeroes object name. If the local commit was specified by
 * something other than a name which could be expanded
 * (such as HEAD~, or an object name) it will be supplied as it was
 * originally given.
 *
 * If this hook exits with a non-zero status, git push will abort without
 * pushing anything. Information about why the push is rejected may be
 * sent to the user by writing to standard error.
 *
 * We currently use this hook to verify that any commit (to any branch)
 * passes the tests configured.
 * If a tag is being pushed, then, we generate the documentation
 * and publish the generated folder to the corresponding docs branch
 * on the origin remote.
 * This particular project also updated the version of the library
 * to match that of the tag.
 *
 * @author Alan Rodas Bonjour <alanrodas@gmail.com>
 */
import process from 'process';
import { echo, path } from 'zx';
import { fileURLToPath } from 'url';
import { script } from '../.scripts/_helpers.ts';

const HOOKS_DIRECTORY = __dirname || path.dirname(fileURLToPath(import.meta.url));
const SCRIPTS_DIRECTORY = path.join(path.dirname(HOOKS_DIRECTORY), '.scripts');

echo(`
**************************
Running pre push hooks
**************************
`);

echo(`Add license text to code files`);
await script('test', '--silent', {
    scriptsDirectory: SCRIPTS_DIRECTORY
});

process.exit(0);
