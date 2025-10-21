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
import { argv, fs, path } from 'zx';
import { projectRootPath, script } from './_helpers.ts';

/**
 * Generate the project documentation which is the
 * same as running dev (if intended to serve the documentation)
 * or building the project.
 */
if (argv.serve) {
    await script('dev');
} else {
    await script('build');
    fs.moveSync(path.join(projectRootPath, 'dist'), path.join(projectRootPath, 'docs'));
}
