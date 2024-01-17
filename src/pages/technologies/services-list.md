---
title: List of Services
permalink: /technologies/services-list
eleventyNavigation:
    key: List of Services
    parent: Technology
    order: 4
---
# Technologies used in **GobstonesWeb2**

**GobstonesWeb2** makes use of several services provided by third party companies, mainly **GitHub**. This attempts to be a list of such ervices for reference.

-----------------------------------------------------

## Code Management

This is a list of services that we use to manage code, automate processes, perform continuous integration, publish artifacts and documentation and organize issues and development.

### Version Control: GitHub

All the development happens in **GitHub**, and we take advantage of both their services and their community.
Every module on the project lives in a repository at GitHub. All the repositories live under the **gobstones organization**. All the source code of the projects can be found at **GitHub**, and we expect all our contributors to have an account the platform.

### Team Management and Issue Tracking: GitHub Issues and Project Boards

**GitHub**, comes with it's own issue tracker built in. We make use of the feature by allowing not only users to report issues, but also as a tool to internally organize the development of new features, perform bug fixing and others.
Every task to perform by the team is loaded as an issue in the corresponding repository. Issues can be commented and reviewed before being worked upon. Later, one or more members of the **Core Team** are assigned to the issue for solving it.
Additionally, **GitHub** provides a feature called **GJitHub Projects**, that allows to combine several repositories and their issues into a single cohesive place, and provides a working board with all the tasks to perform, that can be adapted to be used in Scrum or Kanban methodologies. We also make heavy use of such boards to internally organize the work.

### Tasks Automation and CI/CD: GitHub Actions

Also as a part of **GitHub** projects can make use of **GitHub Actions** in order to perform task automation. Most modules include workflows that are automatically executed when a new commit is pushed to the repository.
Among the different actions are:
* Verifying that the artifact can be build on every push.
* Running the tests on every push.
* Publishing the artifact to npmjs when a new tag is created.
* Publishing the artifact to GitHub when a new tag is created.
* Publishing the documentation to GitHub Pages when a new tag is created.
Although different projects may provide different actions.
This actions are part of our efforts to perform Continuous Integration (CI) and Continuous Deployment (CD) of all our projects.

### Publishing artifacts: Npmjs / GitHub

The default repository for all artifacts in the web development ecosystem is **Npmjs**, which is integrated with **Node.js** and **npm**, but also used by default for all dependency managers of the platform.
Every time a tag starting with the "v" name (such as "v1.2.4") the project is built and the generated artifact is automatically published to **Npmjs**.
In addition to that, extra artifact are published to **GitHub** itself, as to appear in the "releases" page of the repository. Although we expect that artifacts are fetched from **Npmjs**, the **GitHub** artifacts are there as a mean for backup in case of emergencies.

### Documentation publishing: GitHub Pages

We make use of the free **GitHub Pages** feature to publish websites for the organization repositories, and publish the documentation for each module in them.
Every time a tag for a new version is created in the repository, onw of the workflows builds the documentation page and publishes it.

-----------------------------------------------------

## Communication

Tools we use to keep in touch through the team.

## Community gathering: Discord

All the communication through the **Gobstones Community** happens officially at our [**Discord Server**](http://bit.ly/ComunidadGobstones). Although proprietary, we found Discord to be a really useful platform for communication and gathering, so we expect people to have an account at the platform if they want to join the community. Creating accounts and participating is completely free, and the Discord application can be installed at desktop computers, mobile devices, or work from as a web browser application without any installation required.

## Meeting Platform: Google Meet

For all internal meeting of the **Core Team** we use **Google Meet**. Although recently the platform provides only limited amount of time, we found that this enforces us to properly use the time on our meetings. Additionally, one is required to have a **gmail.com** account in order to join, something at all member of the team can satisfy and accept.
