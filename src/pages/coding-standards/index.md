---
title: Coding Standards
eleventyNavigation:
    key: Coding Standards
    parent: Overview
    order: 5
---
# Coding standards and workflow for **GobstonesWeb2**

If you are going to start developing code you need to understand how projects are organized, how to push code, and what coding standards we use. If you are joining the **Core Team**, or are planning to collaborate as an external developer, you should be sure to understand this section fully.

## Project organization

You should first understand how our projects are organized, what files are there, and what are they for, and how we organize different files in folders. Be sure to read the [**Project organization**](./project-organization) section before starting.

## Naming conventions

No guideline is complete without a proper way to explain how the names of files, variables, classes and others is chosen. Please be ure to read the [**Naming conventions**](./naming-conventions) section before going any further.

## Workflow

You now understand how projects are organized, great, now what? How do I add new features or correct new bugs? We have detail steps on how to contribute, depending on who you are. If you are an external developer, wanting to contribute to the project, please read the [**Coding as an External Contributor**](./coding-contributor) section. If you have join the **Core Team**, pleade be sure to read the [**Coding as a Team Member**](./coding-team) section.
In either case you should read about [**Commit conventions**](./commit-conventions).

## Testing

No contribution or work can be properly finished without proper testing. We use `Jest` to test our code, but we a special way of writing tests altogether. Please be sure to read the section dedicated to [**Testing**](./testing) in order to understand how we write tests.

## Documentation

And of course, if you contribute new code, it has to be documented properly. Please read the section dedicated to [**Documentation**](./documentation) before sending any pull request.


### Module creation

**TO BE DONE:** how to create a module

### Module cloning
In order to start working on a module, you first has to clone it to your local machine.
Then you run

     npm install

in order to install the different packages the module uses.

### Working on an issue
If you want to work on an issue on the package, and it is not already in the issue-tracker,
create the new issue in the organization as your first step.
You must take care of:
  * defining the right assignees and labels,
  * associating the issue with the corresponding project, and
  * giving the right status to the issue (usually: _"Todo"_).
Be also sure of give the issue a proper name and to describe the tasks required.

Once the issue is on the issue-tracker, its status is _"Todo"_, and it was not assigned to someone else:
  * assign the issue to yourself,
  * change the status to _"In Progress"_, and
  * create a branch for the issue.

In your local clone checkout the new issue-branch, and work on the change.
When committing, in the message describe briefly the things you modified.

When you finish your changes, and before doing a pull-request, you must:
  * be sure all tests pass, and the test coverage is enough

          npm run test

  * generate the documentation, taking care that no warnings for wrong links are produced

          npm run doc

  * build your module.

          npm run build

After that, you made the pull-request, and ask for revision.
Remember to indicate in the pull-request subject that it closes the corresponding issue, and change the status of the issue to _"Requested for revision"_.



## **TO BE DEVELOPED:** Notes to write about
About Github flow.
https://docs.github.com/en/get-started/quickstart/github-flow
The only exception is that merging of branches is done by the Technical Committee.
Will we use it?

Document all your code using [Typedoc](https://typedoc.org/guides/overview/), and generate the documentation.

Please follow this conventions for filenames.
 * Names should be descriptive and in english.
 * All lowercase with kebab-case should be used for filenames, with no spaces
   (Except README, CONTRIBUTING and LICENSE that are all uppercase).
 * Only use CamelCase for classes in TS, not documentation files.

 Kebab case -- or kebab-case -- is a programming variable naming convention where a developer replaces the spaces between words with a dash.
 Programming variable names should be descriptive.

_< TO BE DONE: expand >_
