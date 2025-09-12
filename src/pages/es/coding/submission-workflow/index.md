---
title: Submission Workflow
eleventyNavigation:
    key: Submission Workflow
    parent: Coding
    order: 4
---
# Submission Workflow

In order to submit code, you should be aware of the process to be assigned with tasks, generate code and submit it for addition into the main code base. This is a simple process, yet it's important to follow it in order to avoid multiple people working in the same task, or generate work that is not going to be considered for addition, as well as to keep a proper communication between the developers that contribute to the projects.

---------------------------------------------------------------------

## Task assignment and management

The project bases the organizational process through the use of **GitHub Issues** and **GitHub Projects** as explained in the [Service List Section](../../technologies/services-list/).

How you get tasks assigned depends on whether you are an external contributor, or if you are an internal **Core Team** developer. Some things apply to either member of the development team, and you should be aware of them

### The Gobstones Projects Boards

In order to organize ourselves we make use of the **GitHub Projects** feature that allows us to display a board with all pending tasks to perform. No mather if you are part of the internal development team, or an external developer, you should check regularly the [Gobstones Organization Project's Page](https://github.com/orgs/gobstones/projects) in order to check what the pending tasks are. Select one of the projects and you will be presented with a tasks board.

> Currently many projects are private, so only internal members of the team
> can see them. Once the project reaches a mature state, these project
> will be made public so anyone can easily contribute.

In the board you will find 5 columns, named:

* **Backlog**: Contains all the issues that comprise the product. This are not necessarily ready to start working on them, and some of them may even be simple desirable features, with no planned roadmap or consideration if they are actually doable, or which actual repository they will affect. You may expect to see a "Draft" status in many of them.
* **Pending**: Contains all the issues that have been assessed as doable, and desirable in the short term. This are issues nobody is working on yet, but that someone might claim to start work on. All of this tasks are already matched to an issue in a particular module and may even have people assigned to (even if they are not yet working on the task).
* **In Progress**: This are the tasks that developers are currently working on. Each task on this list will have someone assigned to, and will be mapped to an issue in a particular repository.
* **Requested for Revision**: This are the tasks that developers considered finished or require help with. When a developer finishes a task it will send a pull request to the main branch of the repository (more on this later). He can also do the same if it gets stuck with the task and requires help. It's expected that members of the **Core Team** check the code of this requests, and either approve the code, or help out the developer in need.
* **Done**: This are the tasks that have already been finished and approved.

If you are panning on contributing you should focus on the **Pending** columns. Enter to the particular issue, see the description and discussion and either take the task (if you are an internal member of the team) or offer to do the task in the comments (if you are an external contributor). Once the task is assigned to you, you can move it to the **In Progress** column and start working on it.

Once you are done and pushed code for the feature, it will be automatically moved to the **Requested for Revision**, and once approved, it should move automatically to the **Done** column. The process is explained in detail in the next sections.

### Task creation

Members of a project can create new tasks in the **Backlog** which will be assessed and moved to the **Pending** column by the team members or by the **Core Team**. External contributors cannot create tasks in this fashion.

Once a task is created, some tags may be assigned to it, such as:

* **Feature**: For tasks that involve adding new features.
* **Bug**: For tasks that involve correcting a bug.
* **Style**: For tasks that involve changing style or documentation.
Others may be used in the future and will be documented appropriately here if that is the case.

In the case of external contributors, they cannot create tasks directly in the project, but they can report issues in any of the repositories the project is comprised of. Once an issue is reported, the members of the internal team will move the issue to an appropriate column, if it's an issue that should be regarded as important, or discard the issue completely (many issued reported are not actual feature request or bug reports, but request for help in the tool's usage or simple discussions about the tool).

If you have a feature proposal and are en external contributor, be sure to create an issue in the corresponding (or the better matching) repository.

---------------------------------------------------------------------

## Working with code

Before embarking on any task, it's recommended that you have a working environment for the repository you are planning to work on. If you do not know how to configure an environment, please read the [Environment Setup Section](../../technologies/environment-setup) and be sure to clone the repository and test that everything is working.

Once you have everything up and running and proved to work, you can follow the previous step to assign yourself a task. The you can start working on the feature or bug fix.

### Working on a task (internal members of the team)

The first step is to open the repository you cloned with you IDE, ideally VSCode, and open an embedded terminal. Run the `git branch` command to verify that you are in the main branch. You should see something like the following.

```sh
$ git branch
* main
```

Other branches may be listed depending on the project, but you should ensure that you are on the `main` branch.

Here, you should create and move to a new branch that will be used for the feature or bug fix you are working on. Use a relevant name that resembles the task name. You can do so by running

```sh
git checkout -b add-some-feature
```

You can check you are in the created branch by running `git branch` again.

At this point, you can write your code. Be sure to fulfill the expectations of the task, generate documentation for the code added or update it if something changed and that your code pass all the tests.

Once everything is done, add all your files, commit and push to your branch.

```sh
git add --all
git commit
git push origin add-some-feature
```

Go to **GitHub** and navigate to the repository of the module you are working on, you will be warned about changes in the new branch, and will be offered to generate a new pull request. Create one, and be sure that it points to `main` branch.

> You may take your time to write your code, don't worry.
> You may even create partial commits, and upload the code to
> the branch before sending the pull request, nobody will touch
> that branch but you.
>
> Just be sure that your commits are clean before sending the
> pull request.

Wait for other members of the project to review your code. If
improvements are requested address them by creating new commits and pushing to the same branch. Once the other members approve your code, it will be merged with the `main` branch.

> It may happen that you are not finished with the feature you are working on,
> but you require help or review from other members of the team. In that
> case, just create a pull request in the same fashion you would to ask you
> merging, but be sure to let other members know that you are seeking help
> through the use of the pull request description.

Now, switch to the `main` branch again in your local repository, by executing

```sh
git checkout main
```

Fetch the latest changes from the `origin` remote by running:

```sh
git pull origin main
```

You are now in `main` with the latest changes, including your newly approved task code already merged. You can repeat the process to address other tasks. But first, be sure to delete the branch you used for the previous issue, both from the local repository, as from the remote `origin`.

```sh
git push origin :add-some-feature
git branch -D add-some-feature
```

> Be sure to always start new branches from `main`, and not from another
> feature branch.
>

### Working on a task (external collaborators)

If you are an external collaborator, the process for contributing is similar to the one for internal members of the team, but you will have to **fork** the repository, and work with two remotes instead.

First, go to **GitHub** and seek for the repository you are going to work on. You will not have permissions on this repository, so you cannot add code to it. So what you need is to create a **fork** of the repository into your own user account. You will have all permissions in your fork, and you will be able to contribute code through it.

Once the fork is done, open a terminal and clone the project from your user account. Do use SSH and not HTTPS.

```sh
git clone git@github.com:<your-username>/<project-name>.git
```

Then, navigate to the project folder from your terminal and add the Gobstones organization repository as a new remote by the `upstream` name.

```sh
git remote add upstream git@github.com:gobstones/<project-name>.git
```

Now you should be able to execute the following command and see the output:

```sh
$ git remote -v
origin git@github.com:<your-username>/<project-name>.git
upstream git@github.com:gobstones/<project-name>.git
```

Now you should follow the same steps as an **internal team member**, with some slight differences. Please consider that, when generating a pull request, the target of the request should be the `main` branch of the original Gobstones organization repository, and not the one in your user account. That is, you should target `main` at `gobstones` not `main` at `your-username`.

Also, once the feature is merged, you will want to update your repository with the latest changes in the `upstream`, and not the `origin`. Run the following commands.

```sh
git checkout main
git pull upstream main
git push origin main
```

Now you should be in the main branch, and your `upstream` and `origin` should be synchronized with the latest changes. You are ready to repeat the process to take on new tasks.

> If you happened to have the repository already in your machine because you
> worked on tasks on it a while ago, you should always sync with the upstream
> repository before starting a new feature, as new code might have been added
> to the `upstream`` but your`origin` will not reflect it.

### Some considerations

The are some final consideration to take into account when developing and before submitting code.

* Be sure that the code can be built successfully by running

```sh
npm start build
```

* Make sure that there are no linting errors and that all tests pass, with sufficient coverage by running

```sh
npm start test
```

* Be sure that the generated documentation reports no errors or warnings about wrong links or unused properties by executing

```sh
npm start doc
```

If everything is successful, then proceed on performing the pull request. Most of this check will also be automatically performed when attempting to push code, such as running the tests, and you will be blocked from pushing if the tests fail.

Another thing to consider is that **Comitizen** will be triggered when attempting to generate a commit, providing you a wizard in the terminal that will guide you through the generation of a **conventional commit**. Be sure to add the information about what issue is being closed upon the code you are writing.

Finally, please be sure to not left traces of dead code or debug code in your submission.

---------------------------------------------------------------------

## Release process

The release process is perform by a member of the **Core Team** with privileges to create tags in the repository.

When a new tag with the format `v< semVer >` is created and published, a **GitHub Action** workflow will be triggered and the project will be published to both **npmjs** and **GitHub releases**.

The release process will also trigger the generation of a the `CHANGELOG.md` file in your local machine, before pushing the new tag. So there is no need to updated the changelog manually.

Publishing a new version of a library or component will not make the Gobstones application make use of it immediately. The application's dependencies should instead be updated to reflect the version change. Then, a new version of the application should be released and published in order for the changes to have effect under the actual productive application.

This implies that, updating a library that everyone is dependant upon will spawn a version increase on many libraries, so the team should carefully plan the release process. This is one of the downsides of the **polyrepo** model. Yet, it's expected that, once libraries are mature enough, they will not likely change over and over, specially the core components.

As a contributor you should be aware that you additions, once approved, will be incorporated soon enough to the productive environment.
