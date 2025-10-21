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
import { argv, spinner } from 'zx';
import { $, hasStoryBook } from './_helpers.ts';

/**
 * Run eleventy and serve the result
 */
await $`npx @11ty/eleventy --serve --port=3000`;
