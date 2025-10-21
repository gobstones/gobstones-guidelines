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
import { echo, which } from 'zx';
import { $ } from './_helpers.ts';

/**
 * Generate changelog based on git commit history.
 *
 * @hidden
 */
const pathOrNull = await which('git', { nothrow: true });
if (pathOrNull) {
    echo('Not in a git repository');
    process.exit(1);
}
const log = await $({ stdio: 'ignore' })`git log`;

await $`conventional-changelog -p angular -i CHANGELOG.md -s ${log.exitCode !== 0 ? ['-r 0'] : []}`;
