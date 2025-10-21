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
import { type ProcessOutput, echo, fs, path, $ as zx$ } from 'zx';
import { fileURLToPath } from 'url';
import { projectRootPath } from './_paths.ts';
export * from './_paths.ts';

// GLOBALS
const SCRIPTS_DIRECTORY = __dirname || path.dirname(fileURLToPath(import.meta.url));
const SCRIPTS_FILE_EXT = '.ts';
const SCRIPTS_IGNORE_STARTING = '_';

// STRINGS
const UNKNOWN_COMMAND = (command: string): string => `❌ Unknown command: ${command}`;
const USE_HELP_WARNING = (): string => 'Call with no arguments to see all available commands.';

export const $ = zx$({ stdio: 'inherit' });

export const script = async (
    command: string,
    args: string = '',
    options: Partial<{
        scriptsDirectory: string;
        scriptsFileExtension: string;
        scriptsIgnoreStarting: string;
    }> = {}
): Promise<ProcessOutput> => {
    const loadedOptions = {
        scriptsDirectory: options.scriptsDirectory || SCRIPTS_DIRECTORY,
        scriptsFileExtension: options.scriptsFileExtension || SCRIPTS_FILE_EXT,
        scriptsIgnoreStarting: options.scriptsIgnoreStarting || SCRIPTS_IGNORE_STARTING
    };
    const commandPath = path.join(loadedOptions.scriptsDirectory, `${command}${loadedOptions.scriptsFileExtension}`);

    const exists = fs.existsSync(commandPath);
    if (!exists || command.startsWith(loadedOptions.scriptsIgnoreStarting)) {
        echo(UNKNOWN_COMMAND(command));
        echo(USE_HELP_WARNING());
        process.exit(1);
    }

    // Call the subscript with all arguments
    return $`zx ${commandPath} ${args}`;
};

/**
 * The definition for a concurrently run script.
 */
export interface ConcurrentScriptDefinition {
    /**
     * The actual bash script command to run.
     */
    script: string;
    /**
     * The color to use when prefixing this script.
     */
    color?: string;
}

/**
 * Represent a concurrent script to run.
 */
export type ConcurrentScript = ConcurrentScriptDefinition | string;

/**
 * Generates a bash command that uses `concurrently` to run
 * scripts concurrently. Adds a few flags to make it
 * behave as you probably want (like --kill-others-on-fail).
 * In addition, it adds color and labels where the color
 * can be specified or is defaulted and the label is based
 * on the key for the script.
 *
 * @param scripts - The scripts to run.
 *
 * @example
 * // returns a bit of a long script that can vary slightly
 * // based on your environment...
 * concurrent({
 *   lint: {
 *     script: 'eslint .',
 *     color: 'bgGreen.white.dim',
 *   },
 *   test: 'jest',
 *   build: {
 *     script: 'webpack'
 *   }
 * })
 *
 * @return The bash command string.
 */
export const concurrently = async (scripts: Record<string, ConcurrentScript>): Promise<ProcessOutput> => {
    if (typeof scripts !== 'object') {
        throw new Error(`concurrently expects an object with names as keys, and commands as values.`);
    }

    interface ReducedScriptDefinition {
        colors: string[];
        scripts: string[];
        names: string[];
    }

    const reduceScripts = (
        accumulator: ReducedScriptDefinition,
        scriptName: string,
        index: number
    ): ReducedScriptDefinition => {
        if (!scripts[scriptName] || (typeof scripts[scriptName] === 'object' && !scripts[scriptName].script)) {
            return accumulator;
        }

        const defaultColors = [
            'bgBlue.bold',
            'bgMagenta.bold',
            'bgGreen.bold',
            'bgBlack.bold',
            'bgCyan.bold',
            'bgRed.bold',
            'bgWhite.bold',
            'bgYellow.bold'
        ];

        const scriptObj: ConcurrentScriptDefinition =
            typeof scripts[scriptName] === 'object' ? scripts[scriptName] : { script: scripts[scriptName] };

        scriptObj.color = scriptObj.color ?? defaultColors[index % defaultColors.length];

        accumulator.names.push(scriptName);
        accumulator.colors.push(scriptObj.color);
        accumulator.scripts.push(scriptObj.script);
        return accumulator;
    };

    const Object$keys$reduce = Object.keys(scripts).reduce(reduceScripts, {
        colors: [],
        scripts: [],
        names: []
    });
    const colors = Object$keys$reduce.colors;
    const quotedScripts = Object$keys$reduce.scripts;
    const names = Object$keys$reduce.names;

    const flags = [
        '--kill-others-on-fail',
        `--prefix-colors`,
        colors.join(','),
        `--names`,
        names.join(','),
        ...quotedScripts
    ];
    return $({ stdio: 'inherit' })`concurrently ${flags}`;
};

export const hasStoryBook = (): boolean => {
    const storyBookDir = path.join(projectRootPath, '.storybook');
    const storiesDir = path.join(projectRootPath, 'stories');

    return fs.existsSync(storyBookDir) || fs.existsSync(storiesDir);
};
