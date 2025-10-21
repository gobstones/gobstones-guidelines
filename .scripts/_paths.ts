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
/* eslint-disable */
import { config as gbsConfig } from '@gobstones/gobstones-scripts';

gbsConfig.init();

export const projectRootPath: string = gbsConfig.locations.projectRoot;
export const licenseHeaderConfigPath: string = gbsConfig.projectType.licenseHeader.toolingFiles.main;
