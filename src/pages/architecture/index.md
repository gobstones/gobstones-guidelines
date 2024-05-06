---
title: Architecture
eleventyNavigation:
    key: Architecture
    parent: Overview
    order: 3
---
# **Architecture of **GobstonesWeb2****

The architecture of **GobstonesWeb2** combines several modules providing different functionalities. They all interrelate to conform what is known as the **GobstonesWeb2**, and together with the contents, pedagogic proposals and others conform the **Gobstones Platform**. This section lists all the different modules that compose the architecture, their current status, and how they interrelate.

---------------------------------------------------------------------

## Basic overview of the architecture

For each module, there will be a repository in the organization, that is to say, a GitHub project will be present for the module.

Some modules depend on another, generating a dependency tree. Modules at the bottom of the tree are usually projects that provide utilities and general behavior, while the full application will be at the top of the tree.

> You may be wondering why we chose a polyrepo approach instead of a
> monorepo one. You may read [A Monorepo vs. polyrepo Summary](https://github.com/joelparkerhenderson/monorepo-vs-polyrepo)
> if you don't know what we are talking about.
>
> In summary, we believe that polyrepo requires simpler tooling, less
> mental effort, and allows for new developers to jump in to a project
> easily. Additionally, not all project of **GobstonesWeb2** are released
> as the same single package. With that in mind, we reached for a
> polyrepo approach, and wrote specialized tooling when needed.

Som of the modules are currently available or under development, while others are just stubs because they are planned, but no particular release date is yet defined.

The following is an overview of the projects and their dependencies.

![GobstonesWeb2 Architecture Diagram](../assets/img/architecture/diagram-of-components.svg)

We are currently working in redesigning some of the modules into new grouping. Expect changes on this graphic in the future.

Most of the modules share a common structure, regarding files present at the root, the tooling used, how you can work with them, etc. Some files such as the "LICENSE" file, or the ".vscode" folder with recommended add-ons for the Visual Studio Code editor are required to live at the root of every project, but they are actually shared across all the modules. To ensure easy management of this, the [`gobstones-scripts`](https://github.com/gobstones/gobstones-scripts) module was created. Most modules in **GobstonesWeb2** depend on the `gobstones-scripts` module.

---------------------------------------------------------------------

## List of Active Projects

This is the list of projects of **GobstonesWeb2** that are either published under a stable release, or are under active development.

### ⦿ Gobstones-board

A representation for Gobstones boards.

[![Gobstones-board project page](https://img.shields.io/badge/pp-gobstones--board-blue?style=plastic&label=Repository&logo=github&logoColor=white)](https://github.com/gobstones/gobstones-board) [![License](https://img.shields.io/github/license/gobstones/gobstones-board?style=plastic&label=License&logo=open-source-initiative&logoColor=white&color=olivegreen)](https://github.com/gobstones/gobstones-board/blob/main/LICENSE) [![Version](https://img.shields.io/github/package-json/v/gobstones/gobstones-board?style=plastic&label=Version&logo=git-lfs&logoColor=white&color=crimson)](https://github.com/gobstones/gobstones-board) [![API Docs](https://img.shields.io/github/package-json/homepage/gobstones/gobstones-board?color=blue&label=API%20Docs&logo=gitbook&logoColor=white&style=plastic)](https://gobstones.github.io/gobstones-board)

### ⦿ Gobstones-board-React

The React layer over the Gobstones-board.

[![Gobstones-board-React project page](https://img.shields.io/badge/pp-gobstones--board--react-blue?style=plastic&label=Repository&logo=github&logoColor=white)](https://github.com/gobstones/gobstones-board-react) [![License](https://img.shields.io/github/license/gobstones/gobstones-board-react?style=plastic&label=License&logo=open-source-initiative&logoColor=white&color=olivegreen)](https://github.com/gobstones/gobstones-board-react/blob/main/LICENSE) [![Version](https://img.shields.io/github/package-json/v/gobstones/gobstones-board-react?style=plastic&label=Version&logo=git-lfs&logoColor=white&color=crimson)](https://github.com/gobstones/gobstones-board-react) [![API Docs](https://img.shields.io/github/package-json/homepage/gobstones/gobstones-board-react?color=blue&label=API%20Docs&logo=gitbook&logoColor=white&style=plastic)](https://gobstones.github.io/gobstones-board-react)

### ⦿ Gobstones-code-editor

A code editor to use with Gobstones.

[![Gobstones-code-editor project page](https://img.shields.io/badge/pp-gobstones--code--editor-blue?style=plastic&label=Repository&logo=github&logoColor=white)](https://github.com/gobstones/gobstones-code-editor) [![License](https://img.shields.io/github/license/gobstones/gobstones-code-editor?style=plastic&label=License&logo=open-source-initiative&logoColor=white&color=olivegreen)](https://github.com/gobstones/gobstones-code-editor/blob/main/LICENSE) [![Version](https://img.shields.io/github/package-json/v/gobstones/gobstones-code-editor?style=plastic&label=Version&logo=git-lfs&logoColor=white&color=crimson)](https://github.com/gobstones/gobstones-code-editor) [![API Docs](https://img.shields.io/github/package-json/homepage/gobstones/gobstones-code-editor?color=blue&label=API%20Docs&logo=gitbook&logoColor=white&style=plastic)](https://gobstones.github.io/gobstones-code-editor)

### ⦿ Gobstones-core

A set of utility tools used through all GobstonesWeb2 repositories.

[![Gobstones-core project page](https://img.shields.io/badge/pp-gobstones--core-blue?style=plastic&label=Repository&logo=github&logoColor=white)](https://github.com/gobstones/gobstones-core) [![License](https://img.shields.io/github/license/gobstones/gobstones-core?style=plastic&label=License&logo=open-source-initiative&logoColor=white&color=olivegreen)](https://github.com/gobstones/gobstones-core/blob/main/LICENSE) [![Version](https://img.shields.io/github/package-json/v/gobstones/gobstones-core?style=plastic&label=Version&logo=git-lfs&logoColor=white&color=crimson)](https://github.com/gobstones/gobstones-core) [![API Docs](https://img.shields.io/github/package-json/homepage/gobstones/gobstones-core?color=blue&label=API%20Docs&logo=gitbook&logoColor=white&style=plastic)](https://gobstones.github.io/gobstones-core)

### ⦿ Gobstones-ide

The IDE component, with the actual environment.

[![Gobstones-ide project page](https://img.shields.io/badge/pp-gobstones--ide-blue?style=plastic&label=Repository&logo=github&logoColor=white)](https://github.com/gobstones/gobstones-ide) [![License](https://img.shields.io/github/license/gobstones/gobstones-ide?style=plastic&label=License&logo=open-source-initiative&logoColor=white&color=olivegreen)](https://github.com/gobstones/gobstones-ide/blob/main/LICENSE) [![Version](https://img.shields.io/github/package-json/v/gobstones/gobstones-ide?style=plastic&label=Version&logo=git-lfs&logoColor=white&color=crimson)](https://github.com/gobstones/gobstones-ide) [![API Docs](https://img.shields.io/github/package-json/homepage/gobstones/gobstones-ide?color=blue&label=API%20Docs&logo=gitbook&logoColor=white&style=plastic)](https://gobstones.github.io/gobstones-ide)

### ⦿ Gobstones-gbb-parser

A parser/printer for GBB (Gobstones Board) file format.

[![Gobstones-gbb-parser project page](https://img.shields.io/badge/pp-gobstones--gbb--parser-blue?style=plastic&label=Repository&logo=github&logoColor=white)](https://github.com/gobstones/gobstones-gbb-parser) [![License](https://img.shields.io/github/license/gobstones/gobstones-gbb-parser`?style=plastic&label=License&logo=open-source-initiative&logoColor=white&color=olivegreen)](https://github.com/gobstones/gobstones-gbb-parser`/blob/main/LICENSE) [![Version](https://img.shields.io/github/package-json/v/gobstones/gobstones-gbb-parser`?style=plastic&label=Version&logo=git-lfs&logoColor=white&color=crimson)](https://github.com/gobstones/gobstones-gbb-parser`) [![API Docs](https://img.shields.io/github/package-json/homepage/gobstones/gobstones-gbb-parser`?color=blue&label=API%20Docs&logo=gitbook&logoColor=white&style=plastic)](https://gobstones.github.io/gobstones-gbb-parser`)

### ⦿ Gobstones-guidelines

Fundamental documentation to contribute to GobstonesWeb2.

[![Gobstones-guidelines project page](https://img.shields.io/badge/pp-gobstones--guidelines-blue?style=plastic&label=Repository&logo=github&logoColor=white)](https://github.com/gobstones/gobstones-guidelines) [![License](https://img.shields.io/github/license/gobstones/gobstones-guidelines?style=plastic&label=License&logo=open-source-initiative&logoColor=white&color=olivegreen)](https://github.com/gobstones/gobstones-guidelines/blob/main/LICENSE) [![Version](https://img.shields.io/github/package-json/v/gobstones/gobstones-guidelines?style=plastic&label=Version&logo=git-lfs&logoColor=white&color=crimson)](https://github.com/gobstones/gobstones-guidelines) [![API Docs](https://img.shields.io/github/package-json/homepage/gobstones/gobstones-guidelines?color=blue&label=API%20Docs&logo=gitbook&logoColor=white&style=plastic)](https://gobstones.github.io/gobstones-guidelines)

### ⦿ Gobstones-lang

A compiler for Gobstones language.

[![Gobstones-lang project page](https://img.shields.io/badge/pp-gobstones--lang-blue?style=plastic&label=Repository&logo=github&logoColor=white)](https://github.com/gobstones/gobstones-lang) [![License](https://img.shields.io/github/license/gobstones/gobstones-lang?style=plastic&label=License&logo=open-source-initiative&logoColor=white&color=olivegreen)](https://github.com/gobstones/gobstones-lang/blob/main/LICENSE) [![Version](https://img.shields.io/github/package-json/v/gobstones/gobstones-lang?style=plastic&label=Version&logo=git-lfs&logoColor=white&color=crimson)](https://github.com/gobstones/gobstones-lang) [![API Docs](https://img.shields.io/github/package-json/homepage/gobstones/gobstones-lang?color=blue&label=API%20Docs&logo=gitbook&logoColor=white&style=plastic)](https://gobstones.github.io/gobstones-lang)

### ⦿ Gobstones-lang-def

A new module that will replace `gobstones-lang-intl` and `gobstones-parser` (currently not in the diagram).

[![Gobstones-lang-def project page](https://img.shields.io/badge/pp-gobstones--lang--def-blue?style=plastic&label=Repository&logo=github&logoColor=white)](https://github.com/gobstones/gobstones-lang-def) [![License](https://img.shields.io/github/license/gobstones/gobstones-lang-def?style=plastic&label=License&logo=open-source-initiative&logoColor=white&color=olivegreen)](https://github.com/gobstones/gobstones-lang-def/blob/main/LICENSE) [![Version](https://img.shields.io/github/package-json/v/gobstones/gobstones-lang-def?style=plastic&label=Version&logo=git-lfs&logoColor=white&color=crimson)](https://github.com/gobstones/gobstones-lang-def) [![API Docs](https://img.shields.io/github/package-json/homepage/gobstones/gobstones-lang-def?color=blue&label=API%20Docs&logo=gitbook&logoColor=white&style=plastic)](https://gobstones.github.io/gobstones-lang-def)

### ⦿ Gobstones-lang-intl

Translation for Gobstones language built-ins and keywords.

[![Gobstones-lang-intl project page](https://img.shields.io/badge/pp-gobstones--lang--intl-blue?style=plastic&label=Repository&logo=github&logoColor=white)](https://github.com/gobstones/gobstones-lang-intl) [![License](https://img.shields.io/github/license/gobstones/gobstones-lang-intl?style=plastic&label=License&logo=open-source-initiative&logoColor=white&color=olivegreen)](https://github.com/gobstones/gobstones-lang-intl/blob/main/LICENSE) [![Version](https://img.shields.io/github/package-json/v/gobstones/gobstones-lang-intl?style=plastic&label=Version&logo=git-lfs&logoColor=white&color=crimson)](https://github.com/gobstones/gobstones-lang-intl) [![API Docs](https://img.shields.io/github/package-json/homepage/gobstones/gobstones-lang-intl?color=blue&label=API%20Docs&logo=gitbook&logoColor=white&style=plastic)](https://gobstones.github.io/gobstones-lang-intl)

### ⦿ Gobstones-markdown-view

A markdown viewer for Gobstones.

[![Gobstones-markdown-view project page](https://img.shields.io/badge/pp-gobstones--markdown--view-blue?style=plastic&label=Repository&logo=github&logoColor=white)](https://github.com/gobstones/gobstones-markdown-view) [![License](https://img.shields.io/github/license/gobstones/gobstones-markdown-view?style=plastic&label=License&logo=open-source-initiative&logoColor=white&color=olivegreen)](https://github.com/gobstones/gobstones-markdown-view/blob/main/LICENSE) [![Version](https://img.shields.io/github/package-json/v/gobstones/gobstones-markdown-view?style=plastic&label=Version&logo=git-lfs&logoColor=white&color=crimson)](https://github.com/gobstones/gobstones-markdown-view) [![API Docs](https://img.shields.io/github/package-json/homepage/gobstones/gobstones-markdown-view?color=blue&label=API%20Docs&logo=gitbook&logoColor=white&style=plastic)](https://gobstones.github.io/gobstones-markdown-view)

### ⦿ Gobstones-parser

A parser for Gobstones language v3.12.

[![Gobstones-parser project page](https://img.shields.io/badge/pp-gobstones--parser-blue?style=plastic&label=Repository&logo=github&logoColor=white)](https://github.com/gobstones/gobstones-parser) [![License](https://img.shields.io/github/license/gobstones/gobstones-parser?style=plastic&label=License&logo=open-source-initiative&logoColor=white&color=olivegreen)](https://github.com/gobstones/gobstones-parser/blob/main/LICENSE) [![Version](https://img.shields.io/github/package-json/v/gobstones/gobstones-parser?style=plastic&label=Version&logo=git-lfs&logoColor=white&color=crimson)](https://github.com/gobstones/gobstones-parser) [![API Docs](https://img.shields.io/github/package-json/homepage/gobstones/gobstones-parser?color=blue&label=API%20Docs&logo=gitbook&logoColor=white&style=plastic)](https://gobstones.github.io/gobstones-parser)

### ⦿ Gobstones-scripts

Common configuration for all GobstonesWeb2 repositories.

[![Gobstones-scripts project page](https://img.shields.io/badge/pp-gobstones--scripts-blue?style=plastic&label=Repository&logo=github&logoColor=white)](https://github.com/gobstones/gobstones-scripts) [![License](https://img.shields.io/github/license/gobstones/gobstones-scripts?style=plastic&label=License&logo=open-source-initiative&logoColor=white&color=olivegreen)](https://github.com/gobstones/gobstones-scripts/blob/main/LICENSE) [![Version](https://img.shields.io/github/package-json/v/gobstones/gobstones-scripts?style=plastic&label=Version&logo=git-lfs&logoColor=white&color=crimson)](https://github.com/gobstones/gobstones-scripts) [![API Docs](https://img.shields.io/github/package-json/homepage/gobstones/gobstones-scripts?color=blue&label=API%20Docs&logo=gitbook&logoColor=white&style=plastic)](https://gobstones.github.io/gobstones-scripts)

---------------------------------------------------------------------

## List of Planned Projects

This is the list of projects of **GobstonesWeb2** that are planned or on the roadmap, but that do not yet have a particular release date, nor anyone is currently working on them.

### ⦿ Gobstones-admin-dashboard

A dashboard for the Gobstones server.

[![Gobstones-admin-dashboard project page](https://img.shields.io/badge/pp-gobstones--admin--dashboard-blue?style=plastic&label=Repository&logo=github&logoColor=white)](https://github.com/gobstones/gobstones-admin-dashboard)

### ⦿ Gobstones-assertions

A static and semantic code analyzer for Gobstones language.

[![Gobstones-assertions project page](https://img.shields.io/badge/pp-gobstones--assertions-blue?style=plastic&label=Repository&logo=github&logoColor=white)](https://github.com/gobstones/gobstones-assertions)

### ⦿ Gobstones-blocks

A framework agnostic Gobstones Blockly component.

[![Gobstones-blocks project page](https://img.shields.io/badge/pp-gobstones--blocks-blue?style=plastic&label=Repository&logo=github&logoColor=white)](https://github.com/gobstones/gobstones-blocks)

### ⦿ Gobstones-blocks-React

The React layer over Gobstones-blocks.

[![Gobstones-blocks-React project page](https://img.shields.io/badge/pp-gobstones--blocks--react-blue?style=plastic&label=Repository&logo=github&logoColor=white)](https://github.com/gobstones/gobstones-blocks-react)

### ⦿ Gobstones-lint

A linter for Gobstones language.

[![Gobstones-lint project page](https://img.shields.io/badge/pp-gobstones--lint-blue?style=plastic&label=Repository&logo=github&logoColor=white)](https://github.com/gobstones/gobstones-lint)

### ⦿ Gobstones-refactors

A refactoring tool for Gobstones language.

[![Gobstones-refactors project page](https://img.shields.io/badge/pp-gobstones--refactors-blue?style=plastic&label=Repository&logo=github&logoColor=white)](https://github.com/gobstones/gobstones-refactors)

### ⦿ Gobstones-server

The Gobstones server.

[![Gobstones-server project page](https://img.shields.io/badge/pp-gobstones--server-blue?style=plastic&label=Repository&logo=github&logoColor=white)](https://github.com/gobstones/gobstones-server)

### ⦿ Gobstones-test

A unit testing framework for Gobstones language.

[![Gobstones-test project page](https://img.shields.io/badge/pp-gobstones--test-blue?style=plastic&label=Repository&logo=github&logoColor=white)](https://github.com/gobstones/gobstones-test)

### ⦿ Gobstones-typechecker

A typechecker for Gobstones language.

[![Gobstones-typechecker project page](https://img.shields.io/badge/pp-gobstones--typechecker-blue?style=plastic&label=Repository&logo=github&logoColor=white)](https://github.com/gobstones/gobstones-typechecker)

---------------------------------------------------------------------

## Repositories configuration

The [`gobstones-scripts`](https://github.com/gobstones/gobstones-scripts) module is used to create other modules for the **GobstonesWeb2** platform, to abstract away configuration details in all the projects and to maintain a common structure of files in all repositories, thus, partially aiding the polyrepo approach and helping in the scaffolding process.

The module can be used as a command line program that allows to create new modules, through the subcommands `create` or `init`. It provides several templates for different types of projects, such as creating simple libraries, command line applications that can be also used as libraries, React components, simple web components, and others.

Most of the project's created require tools such as `typescript`, `rollup`, `nps`, `jest`, `typedoc` and others. In that sense, the modules created do not have direct dependencies for all those tools in their declaration file (`package.json``), instead having a dev-dependency only on`Gobstones-scripts`, which in itself have the dependencies on the tools. This allows for a centralized version management of all the tooling, that can be easily overwritten if needed by any project by just adding a different version of the tool into their own declarations.

Some configuration files needed by the tooling, such as `tsconfig.js` or `rollup.config.js`, are abstracted away by the `gobstones-scripts` module, which holds the configuration files. This allows for a less cluttered root for the projects, and also to centralize the process of building, style of the documentation, etc. In case some project requires a particular configuration, these configuration files can be overwritten in the projects, by the subcommand `eject`, which will copy the abstracted files to the project root.

Other configuration files for some tooling, such as `.prettierc` used by `prettier`, or `.eslintrc` used by `ESLint`, are required unfortunately to be in the project root, as editors such as Visual Studio Code or others expect to find the declaration file in order to provide meaningful hints, code completion and refactoring. This files are usually all the same for every project, and it's cumbersome to create and maintain them all. The `gobstones-scripts` package generate those files when creating new project and can help maintain the same version through the different project through the `update` command, that updates those files if needed. Changes to the files can be made tgo provide customization if any project requires it.

Finally, mot projects will require to execute scripts as to automate processes that help in the development, such as starting up a development server, build the project, generate the documentation webpage, run the tests and so on. We make use of `nps`, a task runner that is elegant in it's simplicity. This tool provides just one step over the simple `scripts` section of a `package.json` file, but allowing to declare the scripts into a separate file, usually called `package-scripts.js`. The tool also provides things such as listing the commands, print help, etc. When executing scripts from `nps`, many tools will expect to find the configuration files in the root of the project, instead of the abstracted configuration files provided by `gobstones-scripts`. To make it easy to run and execute the tooling, `gobstones-scripts` provides the `run` subcommand, that executes `nps` commands, but loading the configuration for each tool from the appropriate location (considering also that it may be abstracted, overwritten by the user, etc.).

Alongside the `run` command, the `gobstones-scripts` module may be used as a library, from which you may obtain the `tasks` object. This object is useful if you so decide to `eject` the configuration file for `nps`, as it provides a simpler way to execute the most common tools, such as `rollup` or `typescript`, and even other `nps` commands, running tasks in parallel or serially, etc.

You can read more about the `gobstones-scripts` project in the [`gobstones-scripts`' repository](https://github.com/gobstones/gobstones-scripts). If you want to know more about the different configuration files and tooling we use, you can read about it in the [Technologies Section](../technologies).

---------------------------------------------------------------------

## Basic functionalities

Another useful project is [`gobstones-core`](https://github.com/gobstones/gobstones-core), that provides some basic utilities used through different projects.

The project includes things such as the idea for `Event`'s that have typechecking, for throwing events that objects can subscribe to, and some particular data structures or types, such as `BiMap` or `Subset`.

Another utility provided is the `Expectations` module, that allows for setting up expectations to validate user inputs and data.

The `SourceReader` module provides a class that allows to read code agnostic source files and process them as a stream, reading one or more character at a time. This is useful for tokenizing inputs.

This module is required by default in projects created by `gobstones-scripts`, and is required by most projects in used in **GobstonesWeb2**, although it's usage is not mandatory at all.

You can read more about the things the module exports in the [`gobstones-core`'s repository](https://github.com/gobstones/gobstones-core).
