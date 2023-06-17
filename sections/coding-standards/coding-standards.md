# Coding standards and workflow for **GobstonesWeb2**

## Workflow

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
When commiting, in the message describe briefly the things you modified.

When you finish your changes, and before doing a pull-request, you must:
  * be sure all tests pass, and the test coverage is enough (with `npm run test`),
  * generate the documentation (with `npm run doc` -- take care no warnings for wrong links are produced), and
  * build your module (with `npm run build`).
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

[Back to Introduction](../introduction.md).

[Back to Guidelines](../../README.md).