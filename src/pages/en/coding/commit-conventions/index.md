---
title: Commit Conventions
eleventyNavigation:
    key: Commit Conventions
    parent: Coding
    order: 3
---
# Commit conventions of the **GobstonesWeb2** projects

We have decided to embrace [GitHub Flow](https://githubflow.github.io) with some modifications, as well as [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) in all our projects. This section describes such conventions and will help you to understand how to work in a collaborative environment in the **GobstonesWeb2** projects.

---------------------------------------------------------------------

## GitHubFlow and our branches model

**GitHub Flow** is a lightweight workflow for team collaboration using `git`. You don't actually need to be using `GitHub` to follow it, it just happens that we use it also. If you have work with other workflows, such as **Git-flow**, you will find **GitHub Flow** a breeze to work on.

We recommend you to read the official page at [GitHub Flow](https://githubflow.github.io) to know a little bit of the reasons behind why **GitHub Flow** exists and what is the main idea behind it. Nonetheless, the following is a breakdown of our takeout in the workflow.

* We have a branch named **main** at every project. That branch contains deploys or is deploy ready.
* **main** is protected (on stable projects) and you cannot commit to main branch directly.
* We do not make continuous deployment with the **main** branch, but we do produce tags based on main with deployments, named **v< semVer >**.
* Every other branch besides **main** contains ongoing work by one or more members of the core team.
* When working on a new feature, bugfix or hotfix, a new branch should be created. All development of the feature or bugfix should happen in that branch. We call these **feature branches**.
* All commits to a **feature branch** are temporal, and you can commit in any way you please, as long as you do not perform a **pull request**, you can even perform partial commits.
* When your feature is ready, you can create a **pull request** from the **feature branch** to the branch **main**.
* A **pull request** will be commented upon by other member of the team. Be sure to address all comments by sending new commit to the branch.
* After the **pull request** have been approved, passes all the tests, and it's ready for merging, one of the core members of the team will merged the **feature branch** with the **main** branch.
* The **feature branch** should then be deleted from the central repository to avoid overhead of branches when managing the repository.

Be sure to:

* Always create a **feature branch** based on **main**.
* Only start the development of a feature or bugfix after discussing that you are going to do it, to avoid multiple people working on the same issue.

---------------------------------------------------------------------

## Realeases

We make use of [Semantic Versioning 2.0.0](https://semver.org) format to label our releases. That is, three numbers separated by dots that comply with the "< MAJOR >.< MINOR >.< PATCH >" format, so that they update in the following way:

* MAJOR version when you make incompatible API changes.
* MINOR version when you add functionality in a backward compatible manner.
* PATCH version when you make backward compatible bug fixes.

Major version zero (0.y.z) is for initial development. Anything MAY change at any time. The public API SHOULD NOT be considered stable.

As long as "< MAJOR >" is "0" we consider the releases to be a **initial development** and as such, major changes in the API may occur in any version change. Once a stable version is ready (the team will decide upon it) a 1.0.0 version will be published, and API is expected to be backwards compatible as long as "< MAJOR >" don't change.

Releases are automatically performed when a tag on the **main** branch is created with a name that matches **v< semVer >**, where "< semVer >" is a semantic versioning number. Creating such a tag releases the version in several platforms, updates the documentation, and more. For this, tags in the repository should only be managed by internal members of the team, and you should not attempt to create tags on any project.

Although we do not perform continuous deploy, we do perform a deploys regularly, a we expect that **GobstonesWeb2** takes the form of a rolling release on the web. That is, we do not expect to have multiple versions of **GobstonesWeb2** deployed at the same time, but always have the latest version as the deployed one.

---------------------------------------------------------------------

## Commit messages and changelog

We follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) in our commit messages. This is desirable so changes in code can be traced through the development process in the Git tree. This also ensures that we can easily create a `CHANGELOG` file stating contributors and all important changes.

The basic idea behind conventional commits is that commit messages should convey meaning, and thus, should follow a particular structure. The basic structure is:

<!-- markdownlint-disable fenced-code-language -->
```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```
<!-- markdownlint-enable fenced-code-language -->

The `type` is meant to explain what the main purpose of the commit is, and may be any of:

* **feat**: a commit that introduces a new feature to the codebase (this correlates with MINOR in Semantic Versioning).
* **fix**: a commit that patches a bug in your codebase (this correlates with PATCH in Semantic Versioning).
* **docs**: a commit that only adds or fixes documentation.
* **style**: a commit that only changes style (like formatting, white spacing, etc.)
* **refactor**: a commit that does not change the API, but performs a change in how the code is structured.
* **perf**: a commit that does not change the API, but it's intended to provide a more performant version of exiting code.
* **test**: a commit that adds or fixes tests.

**feat** and **fix** have higher precedence over the others. That is, if one of your commits involves creating a new feature, and also creating it's corresponding documentation and tests, then you should use **feat**, if it corrects a bug while performing a refactor, choose **fix**. In cases where there is no higher precedence, such as a refactor that involves writing new tests, choose the one that is more relevant according to the code you intended. In all cases, attempt to stick to one single feature/fix per commit whenever possible.

If a commit creates incompatible changes with the existing API, that is, it makes the code non backwards compatible, you should add a **BREAKING CHANGE** footer, and in that case, add a description of what changed in your body.

The `scope`` should be used in case where there are clearly defined submodules in the system, and your code affects only one of such modules. The`description` should be no longer than 80 characters, and be as clear and concise as possible. Use the `body` to further explain the meaning of the commit if needed.

Ideally, you are creating code because you have previously stated the work to be done to the rest of the team and the community, and as such, there is a corresponding **Issue** in the project assigned to you. In such a case, you should state in your commit message that the commit resolves a particular feature, or fixes a particular bug. This is achieved by using the word `fix` followed by a hah and the number of the issue being solved (e.g. `fix #71`). Do use this convention in order to automatically close issues and simplify development process.

The projects of **GobtonesWeb2** enforce the use of conventional commit through various tools in the development process, such as **Commitizen**, **CommitLint** and **Conventional Changelog**. This tools are triggered automatically through **Git Hooks** as explained in the next section.

---------------------------------------------------------------------

## Git Hooks

**Git Hooks** are a way to trigger automatic actions when a Git action is performed. We achieve this using the amazing [Husky](https://typicode.github.io/husky).

**Husky** triggers actions stored in the `.husky` folder at the root of the project.
