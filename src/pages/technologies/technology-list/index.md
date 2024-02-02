---
title: Technology List
eleventyNavigation:
    key: Technology List
    parent: Technologies
    order: 1
---
# Technology List

**GobstonesWeb2** is based on several technologies. If you want to contribute to the project with code, is mandatory for you to know some of these technologies, such as the programming language **TypeScript**, the **Node.js** platform or the **Git** version control system. For other technologies you may find configuration files at the root of the project, or you will run commands that actually run those tools under the hood, but you will probably not interact with them every-day. Although a deep knowledge on such tools is not required in order to contribute, being at least aware of the technologies in use is a must.

Most of these technologies and their configuration are totally or partially abstracted away through the [`gobstones-scripts`](https://github.com/gobstones/gobstones-scripts) module. You should read and understand how that module hides the configuration for some tools, allowing you to override the default in each project by _ejecting_ the configuration files, as well as how it provides default configuration files that must be in the root of each project, but that are not meant to be modified, as we expect them to only be changed through the tool by _updating_ the files as a tool action.

---------------------------------------------------------------------

## Language and basic environment setup

These technologies are a must if you want to contribute with code in any way or are required to understand the code.

### TypeScript

We use **TypeScript** as the default language for most of the development of new packages.

**TypeScript** is a programming language based on **JavaScript**, with the addition of types, effectively transforming JavaScript into a strongly typed language that performs static type checking. **TypeScript** has structural typing, parametric typing, null types, dynamic type detection, type transformations, and many other features of advanced type systems that you should be aware of when working with it. A good starting point to know the basics on TypeScript is [typescriptlang.org](https://www.typescriptlang.org/docs/).

**TypeScript code compiles to JavaScript** (in a process known as **transpilation**), and the code produced is then run through a **JavaScript Engine**. The **API** of the language is, in effect, the same as the one of **JavaScript**, so **by learning TypeScript you are also learning JavaScript**. More important, many sources of TypeScript assume knowledge of JavaScript, and do not explain the API or basic elements of the language. If you are completely new to web development, you should start by reading [developer.mozilla.org](https://developer.mozilla.org/es/docs/Web/JavaScript) to know more on **JavaScript**.

As we mention, the code executes on a **JavaScript Engine** using a **JavaScript API**, which, depending on the type of code produced, may be different. Web applications, such as React based applications and libraries run on the **Web Browser's embedded engine**, such as **Google's V8** or **Mozilla SpiderMonkey**, and have access to typical browser elements, such as the **DOM**, but cannot make use of the underlying computer hardware, such as accessing the filesystem. Applications that run on a server, or work as a CLI application will run on **Node.js**, which works as the **JavaScript Engine** (it uses Google's V8 as engine), and these do not have access to browser elements, but can access the filesystem and hardware (through the provided **Node.js common API**). The former type is what we refer to as **Client Side Code**, while the later is **Server Side Code**, and it's important to know the difference, as each have their own available APIs. Attempting to use unavailable elements will end up in ugly and unexpected errors. Moreover, some projects, such as libraries, may produce code that can be used on the **Client Side** or the **Server Side**, so the code produces should be **Universal**. Understanding the **Client-Server Architecture** and getting acquainted with the APIs for both the browser and **Node.js** is important if you are going to start development in any of the **GobstonesWeb2** projects.

Going back to **TypeScript** and the transpilation process, it's important to know that, to transpile **TypeScript** code you will need a **TypeScript Compiler** and then you will require an environment to run the produced **JavaScript** code, which may be the browser, **Node.js** or other. The **TypeScript Compiler** itself is usually executed through **Node.js**, thus making it mandatory to count with the platform on our machine, even if we are going to produce **Client Side Code**. This implies that you do not need to install the compiler itself, as all the **TypeScript** compilation, dependencies and management process is handled through `gobstones-scripts`.

Usually projects using **TypeScript** expect a configuration file for instructing the compiler how to produce the output (named as `tsconfig.json` and placed at the root of the project). You will not find this file at most of the projects of **GobstonesWeb2**, as the configuration is held and maintained internally by the `gobstones-scripts` library. Some projects may have the file, if they require a particular configuration that is different from the default, thus overriding the one in `gobstones-scripts`.

### Node.js

We use **Node.js** to run **Server Side Code** and the run the tooling of projects.

**Node.js** is a **JavaScript engine**, that is, it allows you to run **JavaScript** code. It also provides an **API for Server Side Code**. We use **Node.js** to run the transpiled code produced by the **TypeScript** compiler.

Most of the tooling (such as the **TypeScript compiler** itself) is provided as **JavaScript** modules, that require **Node.js** or a compatible platform to run. In that sense, **Node.js** is needed to execute, not only the compiler, but also the rest of the tooling, like the test runner, documentation generator, etc.

All **Server Side Applications** run using **Node.js** as the base server, thus making the platform not only useful for tooling, but also in deployment scenarios.

You **MUST** have the latest version installed in your system in order to contribute with code or run the projects from scratch.

You will find that each project have it's own `package.json` file, that will be used by **Node.js** and other tools. Most of the contributions should not touch such file.

If you want to know more on **Node.js** there are a lot of good books and tutorials on it. A good starting point to know the basics on **Node.js** is [nodejs.org](https://nodejs.org/en/about/).

### npm

The **npm** package manager is used for managing dependencies and publishing libraries.

The `npm` command line tool is typically installed on your system when you install **Node.js** and it's a fundamental part of the tooling when developing in **TypeScript** or **JavaScript**. It's what is known as a **Package Manager**, that is to say, it allows your project to make use of third party libraries, frameworks and code in general, by declaring the dependencies needed, downloading them and managing them. It also allows your library to be published so it can be used by others, even members of the **GobstonesWeb2** project.

> Although `npm` is the default package manager, others may be use, such
> as `yarn`. Nonetheless, the project's architecture assumes a
> **flat hierarchy `node-modules`**, so tools such as `pnpm` may not
> work as expected without proper configuration.
>
> We recommend sticking with `npm` as it's the officially supported
> package manager.

You **MUST** have the latest version installed in your system in order to code.

You may find files such as `.npmrc` and `.npmignore` in the root of most projects. The files are meant to be updated only by `gobstones-scripts`.

You may need to understand how to work with **npm**. A good starting point to know the basics on `npm` command is [npmjs.com](https://docs.npmjs.com/about-npm).

### Visual Studio Code

We use **Visual Studio Code** (**VSCode**) as the default IDE.

One important addition for helping on the development is the IDE (Integrated Development Environment). There are many good ones, but we mostly make use of **VSCode**.

Most projects include a `.vscode` folder that, once a project is open in the IDE, some extensions and configurations are recommended by the environment.

You **MAY** choose to use any IDE of your choice, but we recommend sticking with IDEs that integrate with **Prettier** or at least understand the configuration provided through **EditorConfig**. If on doubt, we recommend you stick with `VSCode`.

A good starting point to know the basics on **VSCode** is [code.visualstudio.com](https://code.visualstudio.com/docs).

### Git and GitHub

We use **Git** as the code's **VCS** and **GitHub** as server and platform.

A **VCS** (**Version Control System**) allows for code history tracking and management, as well as simplifying code sharing, publishing and others. We use **Git**, which is one of the most popular choices.

The `git` command line is the main command for **Git**. Git bases itself in the concept of repositories, and one such repository acts as the single source of truth for any project. We use [**GitHub**](https://github.com) as a hosting platform to publish such repositories for all our projects.

You **MUST** have `git` installed on your system in order to contribute, as well as a **GitHub** account.

If you do not have a GitHub account, you may create one at [github.com](https://github.com). If you do not know what **Git** is, there are many books available, but you may start at [Git-scm.com](https://git-scm.com)

Configuration for `git`, with files such as `.gitignore` is already present in all projects, and it's handled through updates of `gobstones-scripts`, so you should not modify such file.

In addition to basic **Git** management through the command, we make use of features provided by **GitHub**, such as the **GitHub Actions** (for Continuous Integration) and **GitHub Pages** (For Documentation publishing), as well a handling **Issues** and **Pull Requests** through their platform. You may read more about it in the [Services List Section](../services-list/).

You may also find a `.github` folder at the root of mot projects, that holds configuration for some of these platform's tools.

Also, if you have been using the `git` command in the past, you may find a slightly different behavior in how it works on our project. This is explained by the addition of some tools added to enforce **semantic-commits**. For more information, read about **Husky**, **Commit Lint** and **Commitizen** in the **Git Control** subsection of this document, and then read the [Commit Conventions Section](../../coding/commit-conventions).

---------------------------------------------------------------------

## Building and automating

The tools in this section are used for either orchestrating the execution of development actions, generating binary or exportable builds.

### nps

We use `nps` command as the task manager.

To define and execute custom scripts within **Node.js**, and running all the tooling in a simple fashion, we use **nps** (**Node Package Scripts**), the `nps` command line tool. **nps** is a task manager or task executor (in the same fashion as `grunt` or `gulp`). It's a little dated, but we found elegance in it's simplicity.

The good thing about nps is that it does not require knowledge of complex models and tools, as it uses the same principle that it's embedded in npm through the `scripts` section declared in the `package.json` file. The `nps` tool just takes it one step further, allowing to configure the scripts to run in a separate file. `nps` is useful when the scripts needed to run exceed some simple strings, or when there are too many of them. It additionally provides a way to list all commands, declare documentation for them, etc. In all projects of the **GobstonesWeb2** platform, running `npm start` runs the help on all defined `nps` commands that you may execute.

The configuration file for `nps`, `package-scripts.js` is, by default, abstracted away by `gobstones-scripts`, although you can eject it if you need to change the behavior of any task. This is a simple js file that exports a single object declaring the configuration of all the possible scripts to run, and the code each of them will execute on the terminal.

The default file included in `gobstones-scripts` provides some basic actions, such as executing in development mode, building the application, running the tests, building and serving the documentation, linting the files, etc. You may run any task using `npm start` followed by the task to run, or simply run `npm start` to get the full list of scripts available.

Additionally, if you find ejected configuration files in any project, you may observe that the file makes use of some helper tasks exported by the `gobstones-scripts` module, such as `serially` or `concurrently`. The `gobstones-scripts` module provides such tasks as to simplify the declaration of these files.

Again, basic configuration has already been provided, and there is not much you need to do to start using it other than downloading the projects and installing the dependencies. Nonetheless, you may read more about **nps** at [their npmjs page](https://www.npmjs.com/package/nps).

### Rollup

We rely on **Rollup.js** to bundle the code of the project libraries.

Most modern projects rely in what is known as a **bundler** that packages all the code into a single distributable file. There are many bundlers you may be aware of, like `webpack`, `esm` or others. We chose **Rollup** because it can create efficient and optimized bundles for both the web and CLI applications, and it's specially useful for libraries.

The `rollup` command also has many plugins that extend it's capabilities. Some allow us to pack additional filetypes, such as JSON, CSS, images, etc., others allow to minify or obfuscate the produced code. One such plugin calls the **TypeScript compiler**, and compiles the code. This avoids the need to call the compiler directly, and you will find that most projects in **GobstonesWeb2** use this configuration instead of calling the compiler manually as a first step

You do not need to know `rollup`` in detail unless you need to change the way a project is bundled or compiled. The configuration file,`rollup.config.js` is hidden by the `Gobstones-scripts` module. You may always overwrite the default by **ejecting** the configuration files.

A good starting point to know the basics on **Rollup.js** is [rollupjs.org](https://rollupjs.org/).

### Vite

We rely on **Vite** to bundle the code of the project's React libraries.

The `vite` tool is another **bundler**. It's focused on bundling web applications (not libraries), and uses Rollup under the hood. We use Vite to execute other tooling, such as **StoryBook** for developing **React** libraries. The final bundling for distribution is still performed by **Rollup**.

You may find a `vite.config.ts` file with the configuration in the root of the React library projects. You should not change these configuration files, unless through the **update** command of `gobstones-scripts`.

You will probably not need to know much about `vite`, as we barely make use of it, but if interested, you may read about it in [`vitejs.dev`](https://vitejs.dev).

---------------------------------------------------------------------

## Code format and style

The tools in this section are used to guarantee the format and style consistency of the code along all projects.

### Prettier

We use **Prettier** to provide a uniform coding formatting through all projects.

To ensure uniformity in coding format, we integrate the opinionated code formatter **Prettier**. It allows to set a standardized set of formatting rules, such as indentation type, max length of lines, line endings and others.

Note that prettier does not enforce the format, but rather allows you to reformat your code using the provided configuration. The IDE uses this to automatically reformat your code on saving a file. Also, **ESlint** integrates with **Prettier** to verify that the format is compliant with the Prettier configuration.

The **Prettier configuration files** are present at the root of each project, as `.prettierrc` and `.prettierignore`, and should only be modified through the use of the **update** command of `gobstones-scripts`, as we aspire that all projects share a common format.

You do not need to know much about **Prettier** to start using it in the project, as all the configuration has already been done for you, and any good code editor will detect the configuration and use it automatically. If you want to learn more about the tool, you may read [`prettier.io`](https://prettier.io/).

### EditorConfig

We also include an **EditorConfig** file in every project.

Although **Prettier** is a great tool for code formatting, some IDEs do not play along with Prettier, or they do not do it by default. To support more IDEs and code editors we have included an **EditorConfig** file in each project.

The **EditorConfig** file, `.editorconfig` contains basic formatting configuration to tell the code editor how you require your files to be treated, such as line endings, tab width and so on. This configuration should always match the one in your **Prettier configuration files**, and should be the same through all projects, and as such, only should be changed through the **update** command of `gobstones-scripts`.

Again, you don't need to know much about **EditorConfig**, but it's a simple enough tool to understand by reading the provided documentation at [`editorconfig.org`](https://editorconfig.org/).

### ESLint

**ESLint** as a linter for maintaining coding standards.

Although **Prettier** provides formatting configuration, code styling is enforced through **ESLint**. This linter provides configuration that determine things such as the order in which methods should be declared, which are valid identifiers for a variable, where you should open and close your braces and other language aware style configuration.

It statically analyzes the code for common errors, stylistic issues, and potential pitfalls, thus providing actionable feedback to fix such problems, ensuring the code's quality and reliability.

**ESLint** uses the concept of plugins and templates, of which we use many to enforce some particular configuration. By default, the linter is run by default before any test, and in case of style errors, the tests process fails. The linter can also be executed on it's own.

You will find the **ESLint configuration file**, `.eslintrc` at the root of every project. Again, it should not be changed except through the **update** command of `gobstones-scripts`.

You will usually not require changing these rules, but to understand the basic idea behind the linter you may read the documentation at [`eslint.org`](https://eslint.org/).

---------------------------------------------------------------------

## Documentation and Testing

This tools are used to test code through unit testing or functional testing, or to generate project documentation.

### TypeDoc

We use **TypeDoc** to generate the project documentation.

As a way to generate documentation, the `typedoc` tool reads the TypeScript source files, parses comments contained within them, and creates API documentation for a more comprehensive and well-structured documentation of the project.

You **SHOULD** be aware of basic practices for documentation, as code without documentation will not be accepted as contribution. You can read more about it at the [Writing Documentation Section](../../coding/writing-documentation).

You may find that the configuration file `typedoc.config.js` is not present at the root of most projects, as it has been abstracted by the `gobstones-scripts` tool. If you require some particular configuration, you may **eject** the file into the project root.

A good starting point to know the basics on `TypeDoc` is [`typedoc.org`](https://typedoc.org/guides/overview/).

### StoryBook

We use **StoryBook** to generate a runnable version of React components.

**StoryBook** is a tool for generating a testing/visualization page for a web component or React components. It allows you to visualize, modify and test a component easily.

We use **StoryBook** to run in development mode when developing components, as well as generating a demo of the component for the documentation page published.

You will see a `.storybook` folder, as well as a `stories` folder in each project containing components. That last folder requires user modification if new components are added or if current components are modified.

In that sense, you **SHOULD** be aware of how these stories work. We recommend you to start by reading the documentation at [StoryBook.js.org](https://storybook.js.org).

### Jest

We use **Jest** for testing.

**Jest** will handle running, and managing test suites. It works with TypeScript code, providing a comprehensive set of tools and features to simplify the process of writing and maintaining tests.

You **SHOULD** learn how to properly create and run tests, as code that is not properly tested or breaks existing tests will not be accepted. Also, you need to be aware of the styling practices we use when writing tests, so you should check the [Testing Section](../../coding/testing).

You will fin that the `jest.config.js` file is not at the root of the library for most projects, as it's abstracted away by the `gobstones-scripts` module. You can always overwrite the configuration by **ejecting** the file.

A good starting point to know the basics on `Jest` is [`jestjs.io`](https://jestjs.io/).

---------------------------------------------------------------------

## Git control

This tools are used to manage the code's version control, Git, by providing Git hooks and validating commit messages.

### Husky

**Husky** is used to provide and trigger **Git Hooks**.

**Git Hooks** are a way to provide automatic behavior when some particular Git action is performed, such as a commit or a push. **Husky** provides a way to create such hooks in our projects in an easy fashion.

In most projects you will find a `.husky` folder that contains the hooks to execute, as well as some other configurations. We use the hooks to validate commits and ensure **Conventional Commits**, as well as to automatically generate some files, such as the `CHANGELOG.md` file. You will not likely have to change this, as it's intended to be changed through the **update** command of `gobstones-scripts`.

You will usually not need to know much about `Husky`, but you may find their documentation useful by going to [typicode.github.io/husky](https://typicode.github.io/husky). It may also be useful to know more about the **Git hooks**, which you can read about at [The Git Book](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) and get a full list of the hooks available at [The Git Docs for githooks](https://git-scm.com/docs/githooks).

### Commitizen

**Commitizen** is used to enforce a particular format in commit messages.

When having to write a commit message it's tempting to provide a minimal description and just push the code. We attempt to follow **conventional commits**, and to help enforce proper messages, we use `Commitizen`.
This tool runs through a `Husky` hook whenever there's a commit (except the `--no-verify` flag is used or you are amending a commit). `Commitizen` provides a simple prompt with different questions, and once all are answered it will present you the fully generated commit message.
The questions presented will guide you through defining a proper conventional commit message. You may always modify the message at the end of the process if needed.

You will find a `.czrc` file with the **Commitizen** configuration at the root of most projects, although changing the defaults is not recommended, as it's intended to be changed through updates of `gobstones-scripts`.

You do not need to know much about **Commitizen**, but you can read their documentation at [their npmjs page](https://www.npmjs.com/package/commitizen)

### CommitLint

**CommitLint** is used to lint the commit messages and ensure they follow the **Conventional Commit** structure.

As **Commitizen** only guides you through creating a commit message with proper conventional commit style, but you are allowed to modify the message later, **CommitLint** is used to validate that the commit message actually uses the conventional commit style.

This tool runs as a **Husky** hook after a commit message has been redacted, and just before the actual commit. If it finds any error in the style of the commit, it will abort the commit, else, the commit will pass and be performed.

You will find a `commitlint.config.js` file with the **CommitLint** configuration at the root of most projects, although changing the defaults is not recommended, as it's intended to be changed through the **update** command of `gobstones-scripts`.

You do not need to know much about CommitLint, but you can read their documentation at [commitlint.js.org](https://commitlint.js.org/#/)

---------------------------------------------------------------------

To learn about the coding standards and workflow for the mentioned technologies and **GobstonesWeb2** in general you may read the [Coding Section](../../coding).
