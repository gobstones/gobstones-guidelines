# **Architecture of **GobstonesWeb2****
The architecture of **GobstonesWeb2** combines several modules providing different functionalities
For each module, there will be a repository in the organization.
The guidelines ask for all repositories to share a basic configuration structure, and in order to ensure it, there is a special module, in repository [gobstones-scripts](https://github.com/gobstones/gobstones-scripts),that all repositories of **GobstonesWeb2** must depend on and be created by, providing the means to automate such sharing.
In this way, when the team decide to change something on the common configuration, all repositories can be easily updated.

The architecture of **GobstonesWeb2** is established by the dependencies between the modules provided by the different repositories belonging to the project, as presented in the following diagram:

![GobstonesWeb2 Architecture Diagram](./diagram-of-components.svg)

We are currently working in redesigning some of the modules into new grouping. Expect changes on this graphic in the future.

## Details about repositories of GobstonesWeb2

<details>
    <summary>
        <b>Expand full list</b>
    </summary>
    <p>
    The complete list of repositories to be used on **GobstonesWeb2** (either planned or under development).
    </p>

* [`gobstones-admin-dashboard`](https://github.com/gobstones/gobstones-admin-dashboard), a dashboard for the Gobstones server,
* [`gobstones-assertions`](https://github.com/gobstones/gobstones-assertions), a static and semantic code analyzer for Gobstones language,
* [`gobstones-blocks`](https://github.com/gobstones/gobstones-blocks), a framework agnostic Gobstones Blockly component,
* [`gobstones-blocks-react`](https://github.com/gobstones/gobstones-blocks-react), the REACT layer over gobstones-blocks,
* [`gobstones-board`](https://github.com/gobstones/gobstones-board), a representation for Gobstones boards,
* [`gobstones-board-react`](https://github.com/gobstones/gobstones-board-react), the REACT layer over the gobstones-board,
* [`gobstones-code-editor`](https://github.com/gobstones/gobstones-code-editor), a code editor to use with Gobstones,
* [`gobstones-core`](https://github.com/gobstones/gobstones-core), a set of utility tools used through all GobstonesWeb2 repositories,
* [`gobstones-ide`](https://github.com/gobstones/gobstones-ide), the IDE component, with the actual environment,
* [`gobstones-gbb-parser`](https://github.com/gobstones/gobstones-gbb-parser), a parser/printer for GBB (Gobstones Board) file format,
* [`gobstones-guidelines`](https://github.com/gobstones/gobstones-guidelines), fundamental documentation to contribute to GobstonesWeb2,
* [`gobstones-lang`](https://github.com/gobstones/gobstones-lang), a compiler for Gobstones language,
* [`gobstones-lang-def`](https://github.com/gobstones/gobstones-lang-def), a new module that will replace `gobstones-lang-intl` and `gobstones-parser` (currently not in the diagram).
* [`gobstones-lang-intl`](https://github.com/gobstones/gobstones-lang-intl), translation for Gobstones language built-ins and keywords,
* [`gobstones-lint`](https://github.com/gobstones/gobstones-lint), a linter for Gobstones language,
* [`gobstones-markdown-view`](https://github.com/gobstones/gobstones-markdown-view), a markdown viewer for Gobstones,
* [`gobstones-parser`](https://github.com/gobstones/gobstones-parser), a parser for Gobstones language v3.12,
* [`gobstones-refactors`](https://github.com/gobstones/gobstones-refactors), a refactoring tool for Gobstones language
* [`gobstones-scripts`](https://github.com/gobstones/gobstones-scripts), common configuration for all GobstonesWeb2 repositories
* [`gobstones-server`](https://github.com/gobstones/gobstones-server), the Gobstones server,
* [`gobstones-test`](https://github.com/gobstones/gobstones-test), a unit testing framework for Gobstones language,
* [`gobstones-typechecker`](https://github.com/gobstones/gobstones-typechecker), a typechecker for Gobstones language.

</details>

## Repositories configuration

The [`gobstones-scripts`](https://github.com/gobstones/gobstones-scripts) module is used to create other modules for the [GobstonesWeb2] platform, and to abstract away configuration details in all the projects.

The module can be used as a command line program that allows to create new modules, through the subcommands `create` or `init`. It provides several template for projects, such as creating simple libraries, command line applications and libraries, react components, and simple web components.

The project's created have tools such as `typescript`, `rollup`, `nps`, `jest`, `typedoc` and others a development dependencies. In that sense, the modules created do not have dependencies for all those tools, having a dev-dependency only on `gobstones-scripts`, which in itself have dependencies on the tools. In that sense the module assumes a flat `node-modules` organization.

Some configuration files needed by the tooling, such as `tsconfig.js` or `rollup.config.js`, are abstracted away by the `gobstones-script` module, which holds the configuration files. These configuration files have a default version, but, in case some module requires a particular configuration, these configuration files can be overwritten in the projects, by the subcommand `eject`.

Other configuration files for some tooling, such as `.prettierc` used by `prettier`, or `.eslintrc` used by `ESLint`, are automatically created in the root of the created projects. Those files may require some sort of update as versions of the tooling are updated, or changed, and a such, the subcommand `update` allows for updating such files.

Finally, the tool allows to run different actions defined through `nps`, by running the `run` subcommand.

You can read more about the tool, configuration files, and tooling in the [Technologies we use](/../technologies/technologies.md) section.

## Basic functionalities

Another useful project is [`gobstones-core`](https://github.com/gobstones/gobstones-core), that provides some basic utilities used through different projects.

The project includes things such as the idea for `Event`'s that have typechecking, for throwing events that objects can subscribe to; some particular data structures or types, such as `BiMap` or `Subset`.

Another utility provided is the `Expectations` module, that allows for setting up expectations to validate user inputs and other stuff.

The `SourceReader` module provides a class that allows to provide source files and process them as a stream, reading one or more character at a time. This is useful for tokenizing inputs.

This module is required by default in projects created by `gobstones-scripts`, and is required by most projects in used in [GobstonesWeb2].

You can read more about the things the module exports in the [`gobstones-core's README`](https://github.com/gobstones/gobstones-core).


[Back to Introduction](../introduction.md).

[Back to Guidelines](../../README.md).