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
import { argv, echo, spinner } from 'zx';
import { $ } from './_helpers.ts';

/**
 * Delete all automatically generated files and folders.
 * Use --dist or --docs to delete only a specific subfolder.
 *
 * @hidden
 */
const shouldDeleteAll = !argv.dist && !argv.docs && !argv.coverage;

if (shouldDeleteAll || argv.dist) {
    await spinner('Cleaning dist folder...', () => $`rimraf ./dist`);
}
if (shouldDeleteAll || argv.docs) {
    await spinner('Cleaning docs folder...', () => $`rimraf ./docs`);
}
if (shouldDeleteAll || argv.coverage) {
    await spinner('Cleaning coverage folder...', () => $`rimraf ./coverage`);
}
echo(`Cleaned`);
