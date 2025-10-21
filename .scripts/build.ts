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
import { spinner, echo } from 'zx';
import { $, script } from './_helpers.ts';

/**
 * Build the application for deployment.
 * Outputs the contents into "dist" folder.
 */
await script('clean', `--dist`);
await spinner('Compiling...', () => $`npx @11ty/eleventy`);
echo(`Compiled`);
