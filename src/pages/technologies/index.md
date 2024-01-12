---
title: Technologies
permalink: /technologies/
eleventyNavigation:
    key: Technologies
    parent: Overview
    order: 4
---
# Technologies used in **GobstonesWeb2**

**GobstonesWeb2** is based on several technologies. Knowledge on some of these technologies, such as the programming language `TypeScript`, `Node.js` or `git` is mandatory, if you want to contribute to the project with code. For others you may find configuration files at the root of the project, or automatically performed actions, and although a deep knowledge on such tools is not required in order to contribute, being at least aware of the technologies in use is a must.

Most of these technologies and their configuration are totally or partially abstracted away through the [`gobstones-scripts`](https://github.com/gobstones/gobstones-scripts) module. You should read and understand how that module hides the configuration for some tools, allowing you to override the default in each project by **ejecting** the configuration files, as well as how it provides default configuration files that must be in the root of each project, but that are not meant to be modified, as we expect they are only changed through the tool by **updating** the files as a tool's action.

If you need help configuring the development environment, you may read the [Installation tutorial](./installation-tutorial.md).

-----------------------------------------------------

## Language and basic environment setup

These technologies are a must if you want to contribute with code in any way or are required to understand the code.

<!------------------------>
<!-- #region TypeScript -->
<!------------------------>
### Typescript

We use `TypeScript` as the default language for most of the development of new packages.

`TypeScript` is a programming language based on `JavaScript`, with the addition of types, thus providing a type error detection mechanism.

A good starting point to know the basics on `Typescript` is [`typescriptlang.org`](https://www.typescriptlang.org/docs/).

`TypeScript` code compiles to `JavaScript` (in a process known as transpilation), and the code produced is then run through `Node.js` (i.e. if it runs on the server or as a CLI application) or in a Web Browser (i.e. such as libraries, web libraries or react-libraries). So you need to understand the underlying way in which `JavaScript` programs execute and it's API.

You may read [`developer.mozilla.org`](https://developer.mozilla.org/es/docs/Web/JavaScript) to know more on `JavaScript`.

To transpile `TypeScript` code you will need the **TypeScript compiler** and then you will require an environment to run the produced `JavaScript` code, which may be the browser, `Node.js` or other.

Note that you may not need to install anything, as all the typescript configuration is handled by the configuration provided through the `gobstones-script` configuration and the project itself.

Usually projects using `TypeScript` expect a configuration file for instructing the compiler how to produce the output, usually named as `tsconfig.json` and put at the root of the project. You will not find this file at most of the project, as the configuration is held and maintained internally by the `gobstones-script` library. Some projects may have the file, if they require a particular configuration that is different from the default, thus overriding the one in `gobstones-scripts`.
<!--------------------------->
<!-- #endregion TypeScript -->
<!--------------------------->

<!--------------------->
<!-- #region Node.js -->
<!--------------------->
### Node.js

We use `Node.js` to run code locally and the tooling.

`Node.js` is a `JavaScript` engine, that is, it allows you to run `JavaScript` code. We use `Node.js` to run the transpiled code produced by the `TypeScript` compiler.

Not only that, but mot of the tooling (such as the TypeScript compiler itself) is provided as `JavaScript` modules, that require `Node.js` or a compatible platform to run. In that sense, `Node.js` is additionally needed. So `Node.js` is needed for running tests, generating documentation, compiling the code, and so on.

Finally, all server side applications run using `Node.js` as the base server.

You **MUST** have the latest version installed in your system in order to code.

You will find that each project have it's own `package.json` file, that will be used by `Node.js` and other tools. Most of the contributions should not touch such file.

If you want to know more on `Node.js` there are a lot of good books and tutorials on it.
A good starting point to know the basics on `Node.js` is [`nodejs.org`](https://nodejs.org/en/about/).
<!------------------------>
<!-- #endregion Node.js -->
<!------------------------>

<!----------------->
<!-- #region npm -->
<!----------------->
### npm

The `npm` package manager is used for managing dependencies and publishing libraries.

`npm` is installed on your system when you install `Node.js` and it's a fundamental part of the tooling when developing in `TypeScript` or `JavaScript`.

Although `npm` is the default package manager, others may be use, such as `yarn`. Nonetheless, the project's architecture assumes a **flat hierarchy `node-modules`**. We recommend sticking with `npm` as it's the officially supported package manager.

`npm` is used to manage dependencies that the project needs for running, as well as the ones needed to build or test the project. Also, `npm` and the default `npm registry` are used to publish the packages.

You **MUST** have the latest version installed in your system in order to code.

You may find files such as `.npmrc` and `.npmignore` in the root of most projects. The files are ment to be updated only by `gobstones-scripts`.

You may need to understand how to work with `npm`. A good starting point to know the basics on `npm` is [`npmjs.com`](https://docs.npmjs.com/about-npm).
<!-------------------->
<!-- #endregion npm -->
<!-------------------->

<!-------------------->
<!-- #region VSCode -->
<!-------------------->
### Visual Studio Code

We use **Visual Studio Code** (`VSCode`) as the default IDE.

One important addition for helping on the development is the IDE (Integrated Development Environment). There are many good ones, but we mostly make use of `VSCode`.

Most projects include a `.vscode` folder that, once a project is open in the IDE, some extensions and configurations are recommended by the environment.

You **MAY** choose to use any IDE of your choice, as long as the IDE, but we recommend sticking with IDEs that integrate with `Prettier` or at least understand the configuration provided through `EditorConfig`. If on doubt, we recommend you stick with `VSCode`.

A good starting point to know the basics on `VSCode` is [`code.visualstudio.com`](https://code.visualstudio.com/docs).
<!----------------------->
<!-- #endregion VSCode -->
<!----------------------->

<!----------------->
<!-- #region git -->
<!----------------->
### git and GitHub

We use *git** as the code's VCS and GitHub as server and platform.

A VCS (Version Control System) allows for code history tracking and management, as well as simplifying code sharing, publishing and others. We use `git`, which is one of the most popular choices.

The `git` tool bases itself in the concept of repositories, and one such repository acts as the single source of truth for any project. We use `GitHub` as a server to publish such a repository for all our projects.

You **MUST** have `git` installed on your system in order to contribute, as well as a `GitHub`'s account.

If you do not have a GitHub account, you may create one at [github.com](https://github.com). If you do not know what `git` is, there are many books available, but you may start at [git-scm.com](https://git-scm.com)

Configuration for `git`, with files such as `.gitignore` is already present in all projects, and it's handled through updates of `gobstones-scripts`, so you should not modify such file.

In addition to basic `git`, we make use of features provided by `GitHub`, such as the `GitHub Actions` (for Continuous Integration) and `GitHub Pages` (For Documentation publishing), as well a handling **Issues** and **Pull Requests** through their platform.

You may also find a `.github` folder at the root of mot projects, that holds configuration for some of these platform's tools.

Also, if you have been using `git` in the past, you may find a slight different behavior in how it works on our project. This is explain by the addition of some tools added to enforce **semantic-commits**. For more information, read about `Husky`, `Commit Lint` and `Commitizen` in the **Git control** subsection of this document.
<!-------------------->
<!-- #endregion git -->
<!-------------------->

-----------------------------------------------------


## Building and automating

The tools in this section are used for either orchestrating the execution of development actions, generating binary or exportable builds.

<!----------------->
<!-- #region nps -->
<!----------------->

### nps

We use `nps` as the task manager.

To define and execute custom scripts within `Node.js`, running all the tooling in a simple fashion, we use `nps` (Node Package Scripts).
`nps` it's a task manager or task executor (in the same fashion as `grunt` or `gulp`).

The good thing about `nps` is that it does not require knowledge of complex models and tools, but it's just a one step up on manually running the command through the terminal one by one. `npm run` runs the commands in "scripts" defined in package.json. `nps` is useful when the commands needed to run exceed some simple commands. In all projects, running `npm start` runs the help on all defined `nps` commands.

The configuration file for `nps`, `package-scripts.json` is abstracted away by `gobstones-scripts` by default, although you can eject it if you need to change the behavior of any task. This is a simple json file, listing all the possible tasks to run, and the code each of them will run on the terminal, along some description.

Some predefined tasks are configured, such as building the application, running the tests, building and serving the documentation, and linting. Most simple calls are also present in the `scripts` section of each project's `package.json`, but you may run any task using `npm start` followed by the task to run.

Additionally, tasks in the configuration for most of the projects make use of some helper tasks exported by the `gobstones-scripts` module, such as `serially` or `concurrently`.

Again, basic configuration has already been provided, and there is not much you need to do to start using it than downloading the projects and installing the dependencies. Nonetheless, you may read more about `nps` in [`nps at npmjs`](https://www.npmjs.com/package/nps).
<!-------------------->
<!-- #endregion nps -->
<!-------------------->

<!-------------------->
<!-- #region Rollup -->
<!-------------------->
### Rollup

We rely on `rollup.js` to bundle the code of the project libraries.

Most modern projects rely in some bundler that packages all the code into a single distributable file. There are many bundlers you may be aware of, like `webpack`, `esm` or others. We chose `rollup` because it's can create efficient and optimized bundles for both the web and CLI applications, and it's specially useful for libraries.

`rollup` also has many plugins, useful to allow code to pack additional filetypes, such as JSON, css, images or others, minifying or obfuscating the code. One such plugin calls the `TypeScript compiler`, and compile the code, avoiding the need to call the compiler directly. You will find that most project use this configuration instead of calling the compiler.

You do not need to know rollup in detail unless you need to change the way a project is bundled or compiled. The configuration file, `rollup.config.js` is hidden by the `gobstones-script` module. You may always overwrite the default by **ejecting** the configuration files.

A good starting point to know the basics on `rollup.js` is [`rollupjs.org`](https://rollupjs.org/).
<!----------------------->
<!-- #endregion Rollup -->
<!----------------------->

<!------------------>
<!-- #region Vite -->
<!------------------>
### Vite

We rely on `Vite` to bundle the code of the project react libraries.

`vite` is another bundler. It's focused on bundling web applications (not libraries), and we use it to bundle the react libraries as full application for testing and development. The final bundling for distribution is still performed by `Rollup`.

You may find a `vite.config.ts` file with the configuration in the root of the react library projects. You should not change these configuration files, unless through updated of `gobstones-scripts`.

You will probably not need to know much about may read about Vite in [`vitejs.dev`](https://vitejs.dev).
<!----------------------->
<!-- #endregion Rollup -->
<!----------------------->

-----------------------------------------------------


## Code format and style

The tools in this section are used to guarantee the format and style consistency of the code along all projects.

<!---------------------->
<!-- #region Prettier -->
<!---------------------->

### Prettier

We use `Prettier` to provide a uniform coding formatting through all projects.

To ensure uniformity in coding format, we integrate the opinionated code formatter `Prettier`. It allows to set a standardized set of formatting rules, such as indentation type, max length of lines, line endings and others.

Note that prettier does not enforce the format, but rather allows you to reformat your code using the provided configuration. The IDE uses this to automatically reformat your code on saving a file. Also, `ESlint` integrates with `Prettier`, to verify that the format is compliant with the prettier configuration.

The `Prettier` configuration files are present at the root of each project, as `.prettierrc` and `.prettierignore`, and should only be modified for all projects, through an update of `gobstones-scripts`.

You do not need to know much about `Prettier` to start using it in the project, as all the configuration has already been done for you, that is, unless you use a different IDE than `VSCode`. If you want to learn more about the tool, you may read [`prettier.io`](https://prettier.io/).
<!------------------------->
<!-- #endregion Prettier -->
<!------------------------->

<!-------------------------->
<!-- #region EditorConfig -->
<!-------------------------->
### EditorConfig

We also include an `EditorConfig` file in every project.

Although `Prettier` is a great tool for code formatting, some IDEs do not play along with prettier, or they do not do it by default. To support more IDEs and code editors we have included an `EditorConfig` file in each project.

The `EditorConfig` file, `.editorconfig` contains basic formatting configuration to tell the code editor how you require your files to be treated, such as line endings, tab width and so on.

This configuration should always match the one in your `Prettier` configuration, and should be the same through all projects, and as such, only should be changed through an update of `gobstones-scripts`.

Again, you don't need to know much about `EditorConfig`, but it's a simple enough tool to understand by reading the provided documentation at [`editorconfig.org`](https://editorconfig.org/).
<!----------------------------->
<!-- #endregion EditorConfig -->
<!----------------------------->

<!-------------------->
<!-- #region ESLint -->
<!-------------------->
### ESLint

`ESLint` as a linter for maintaining coding standards.

Although `Prettier` provides formatting configuration, code styling is enforced through `ESLint`. This linter provides configuration that determine things such as the order in which methods should be declared, which are valid identifiers for a variable, where you should open and close your braces and other language aware style configuration.

It statically analyzes the code for common errors, stylistic issues, and potential pitfalls, thus providing actionable feedback to fix such problems, ensuring the code's quality and reliability.

`ESLint` uses the concept of plugins and templates, of which we use many to enforce some particular configuration. The linter is run by default before any test, and in case of style errors, the tests cannot pass.

You will find the `ESLint` configuration file, `.eslintrc` at the root of every project. Again, it should not be changed except through updates of `gobstones-scripts`.

You will usually not require changing these rules, but to understand the basic idea behind the linter you may read the documentation at [`eslint.org`](https://eslint.org/).
<!----------------------->
<!-- #endregion ESLint -->
<!----------------------->

-----------------------------------------------------

## Documentation and Testing

This tools are used to test code through unit testing or functional testing, or to generate project documentation.

<!--------------------->
<!-- #region TypeDoc -->
<!--------------------->
### TypeDoc

We use `TypeDoc` to generate the project documentation.

As a way to generate documentation, the `TypeDoc` tool reads the `TypeScript` source files, parses comments contained within them, and creates API documentation for a more comprehensive and well-structured documentation of the project.

You **SHOULD** be aware of basic practices for documentation, as code without documentation will not be accepted as contribution.

You may find that the configuration file `typedoc.js` is not present at the root of most projects, as it has been abstracted by the `gobstones-scripts` tool. If you require some particular configuration, you may **eject** the file into the project root.

A good starting point to know the basics on `TypeDoc` is [`typedoc.org`](https://typedoc.org/guides/overview/).
<!------------------------>
<!-- #endregion TypeDoc -->
<!------------------------>

<!----------------------->
<!-- #region StoryBook -->
<!----------------------->
### StoryBook

We use `StoryBook` to generate a runnable version of react components.

`StoryBook` is a tool for generating a testing/visualization page for a web component or react components. It allows you to visualize, modify and test a component easily.

We use `StoryBook` to run in development mode when developing components, as well as generating a demo of the component for the documentation page published.

You will see a `.storybook` folder, as well as a `stories` folder in each project containing components. That last folder requires user modification if new components are added or if current components are modified.

In that sense, you **SHOULD** be aware of how these stories work. We recomend you to start by reading the documentation at [storybook.js.org](https://storybook.js.org).
<!-------------------------->
<!-- #endregion StoryBook -->
<!-------------------------->

<!------------------>
<!-- #region Jest -->
<!------------------>
### Jest

We use `Jest` for testing.

`Jest` will handle running, and managing test suites. It works with `TypeScript` code, providing a comprehensive set of tools and features to simplify the process of writing and maintaining tests.

You **SHOULD** learn how to properly create and run tests, as code that is not properly tested or breaks existing tests will not be accepted.

You will fin that the `jest.config.js` file is not at the root of the library for most projects, as it's abstracted away by the `gobstones-scripts` module. You can always overwrite the configuration by **ejecting** the file.

A good starting point to know the basics on `Jest` is [`jestjs.io`](https://jestjs.io/).
<!--------------------->
<!-- #endregion Jest -->
<!--------------------->


-----------------------------------------------------

## Git control

This tools are used to manage the code's version control, git, by providing git hooks and validating commit messages.

<!------------------->
<!-- #region Husky -->
<!------------------->
### Husky

`Husky` is used to provide and trigger `git hooks`.

Git hooks are a way to provide automatic behavior when some particular git action is performed, such as a commit or a push. `Husky` provides a way to create such hooks in our projects in an eay fashion.

In most projects you will find a `.husky` folder that contains the hooks to execute, as well as some other configurations. We use the hooks to validate commits and ensure **conventional commits**, as well as to automatically generate some files, such as the CHANGELOG. You will not likely have to change this, as it's intended to be changed through updates of `gobstones-scripts`.

You will usually not need to know much about `Husky`, but you may find their documentation useful by going to [typicode.github.io/husky](https://typicode.github.io/husky)
</details>
<!---------------------->
<!-- #endregion Husky -->
<!---------------------->

<!------------------------>
<!-- #region Commitizen -->
<!------------------------>
### Commitizen

`Commitizen` is used to enforce a particular format in commit messages.

When having to write a commit message it's tempting to provide a minimal description and just push the code. We attempt to follow **conventional commits**, and to help enforce proper messages, we use `Commitizen`.
This tool runs through a `Husky` hook whenever there's a commit (except the `--no-verify` flag is used or you are amending a commit). `Commitizen` provides a simple prompt with different questions, and once all are answered it will present you the fully generated commit message.
The questions presented will guide you through defining a proper conventional commit message. You may always modify the message at the end of the process if needed.

You will find a `.czrc` file with the `Commitizen` configuration at the root of most projects, although changing the defaults is not recommended, as it's intended to be changed through updates of `gobstones-scripts`.

You do not need to know much about `Commitizen`, but you can read their documentation at [commitizen at npmjs](https://www.npmjs.com/package/commitizen)
</details>
<!--------------------------->
<!-- #endregion Commitizen -->
<!--------------------------->

<!------------------------>
<!-- #region CommitLint -->
<!------------------------>
### CommitLint

`CommitLint` is used to lint the commit messages and ensure they follow the conventional commit structure.

As `Commitizen` only guides you through creating a commit message with proper conventional commit style, but you are allowed to modify the message later, `CommitLint` is used to validate that the commit message actually uses the conventional commit style.

This tool runs as a `Husky` hook after a commit message has been redacted, and just before the actual commit. If it finds any error in the style of the commit, it will abort the commit, else, the commit will pass and be performed.

You will find a `commitlint.config.js` file with the `CommitLint` configuration at the root of most projects, although changing the defaults is not recommended, as it's intended to be changed through updates of `gobstones-scripts`.

You do not need to know much about `CommitLint`, but you can read their documentation at [commitlint.js.org](https://commitlint.js.org/#/)

<!--------------------------->
<!-- #endregion CommitLint -->
<!--------------------------->

-----------------------------------------------------

To learn about the coding standards and workflow for the mentioned technologies and GobstonesWeb2 in general [consult coding standards and workflow section](../coding-standards/coding-standards.md).
