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
import { $ } from './_helpers.ts';
/**
 * Run Prettier on all the files, updating their contents with the fixed prettified version.
 *
 * @hidden
 */
await $`prettier --no-error-on-unmatched-pattern --write ./.husky/*[^_]`;
await $`prettier --no-error-on-unmatched-pattern --write ./{.github,.vscode,src,test}/{**,.}/*.{js,jsx,cjs,mjs,ts,tsx,mts,cts,yml,md,json,js}`;
await $`prettier --no-error-on-unmatched-pattern --write {.czrc,.editorconfig,.gitignore,.npmignore,.npmrc,.prettierrc}`;
await $`prettier --no-error-on-unmatched-pattern --write ./*.{js,jsx,cjs,mjs,ts,tsx,mts,cts,yml,md,json,js}`;
