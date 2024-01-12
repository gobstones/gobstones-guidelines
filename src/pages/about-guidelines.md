---
title: About the guidelines
permalink: /about-guidelines/
eleventyNavigation:
    key: About the guidelines
    order: 2
---
# About the gobstones-guidelines project

The gobstones-guidelines repository contains documentation on the platform architecture, design guidelines, ways to contribute, and standards used, related to the development of **GobstonesWeb2**.

[![License](https://img.shields.io/github/license/gobstones/gobstones-guidelines?style=plastic&label=License&logo=open-source-initiative&logoColor=white&color=olivegreen)](https://github.com/gobstones/gobstones-guidelines/blob/main/LICENSE)
[![Version](https://img.shields.io/github/package-json/v/gobstones/gobstones-guidelines?style=plastic&label=Version&logo=git-lfs&logoColor=white&color=crimson)](https://github.com/gobstones/gobstones-guidelines)

Although structured as any other project in the Gobstones Platform, and containing a `package.json` and other files, this project's focus is documentation of the whole platform. The project is structured as a generated static webpage using `eleventy` ([11ty.dev](https://www.11ty.dev)). The basic structure and styles were copied from the [TypeDoc site](https://github.com/TypeStrong/typedoc-site), although a lot of changes had been done on top of the original source.

---------------------------------------------------------------------

## About eleventy and the project structure

You should not need to know much about `eleventy`, the plugins we use or how the site is structured in order to contribute and write guidelines. Nonetheless you should at least have a grasp of what a **front matter** is, and how it works.

On the root of the project you will find general files, such as `package.json`, `.prettierrc`, `commitlint.config.js` and others, along with the `.husky` and `.github`. If you do not know what they are, you should read the [Technologies](./technologies) section on this same guidelines.

Beside the aforementioned files, the file `eleventy.config.js` is required for `eleventy` to work. This file holds the configuration of `eleventy` as JavaScript code, and exports a single function, that takes the user configuration object (named `el`) that may be modified as a side effect to add particular requirements to the configuration. The function returns an object, containing mainly the `dir` attribute, specifying the basic directories that `eleventy` will work upon, and the `pathPrefix`, that specifies a possible sub-folder in your hosting.

The code for the site itself is located at the `src` folder. Subfolder `src/templates` contains the basic structure of the site that `eleventy` will use when generating the static pages to be served, while the folders `src/css`, `src/img` and `src/js`, along with the file `src/favicon.ico` are static content that will be served in the site, and compose the site's style.

If you want to update the guidelines, or contribute new ones, you should only focus on the `Markdown` files (`.md` extension) that live on the `src/pages` folder. Other directories in `src` contain the basic HTML templates, styles, scripts and images used through the site once it's generated and published. The files used for site generation are rarely updated. A special mention should be main to the `.scss` files inside the `src/css` folder. These files contain [Sass styles](https://sass-lang.com) instead of regular CSS, and are compiled before being served as regular `.css` files.

The site contents are written in Markdown (If you don't know what Markdown is, you may read [this site](https://www.markdownguide.org)) and they live in the `src/pages` subdirectory and sub-folders within it (sub-folders are there for organizational purposes). If you already know Markdown, you may find strange that the content in those files start with three dashes, contains some content, and then is followed by other three dashes, before containing proper Markdown. Those three dashes and the content inside it (Which is composed of [YAML](https://yaml.org) code) is known as a **front matter**. The following is an example:

```yaml
---
title: About the guidelines - gobstones-guidelines
permalink: /about-guidelines
eleventyNavigation:
    key: About the guidelines
    order: 2
---
```

The **front matter** provides information to `eleventy` on how to process and publish the page contents of that file. Contents declared in the front matter are used later on in the templates and other places by `eleventy` itself, and also by some plugins, so each expect different information. The ones we use are:
* `title` - A string used as the title of the page
* `permalink` - The relative url to use for accessing this page.
* `eleventyNavigation` - An object containing information on how to showcase links to this page in the navigation left sidebar. It includes:
    * `key` - A string used as text to show as a link.
    * `parent` - If present, the link will be shown as a sub-element of the parent in the list.
    * `order` - The order in which the element will be shown on the list or sub-list.

The site's pages usually use the `doc`layout which, besides of a main header, structures the contents in three sections:
* Central section - Contains the contents the page itself, that is, the contents written in the markdown file.
* Left sidebar - Contains the navigation through the site, that is, links to all other pages in the site that declared an `eleventyNavigation` section in their front matter.
* Right sidebar - Contains the navigation through the current page. That is, links that scrolls down the view to a particular heading in the page. All heading declared in the markdown using # symbols are identified and added to the navigation list.

If the need arises to modify the site's structure, styles or scripts, you will need to understand not only the structure, but also the associated technologies. For the most part, you just need to know about Markdown and the **front matter** to be able to modify and add new content.

---------------------------------------------------------------------

## Modifying or adding guidelines contents

As explained in the previous section, contents themselves are stored at `src/pages` in the form of Markdown files. The contain the text to be display on each page, along with a front matter at the top of the content. Those files are the only ones to modify and care about when working with content.

> In this section we will mention `<hostname>` in some urls.
> We refer to the hostname of the page as the location in which
> the site is hosted. For the published site such url is
> `http://gobstones.github.io/gobstones-guidelines`. While testing
> on your local machine, the hostname takes the form of a local url,
> `https:localhost:8080`, and changes in configuration may give
> different host names.

If you want to modify the contents of a particular page, then you should open the corresponding file in `src/pages`. Files have a name that matches the url they represent, that is, the file `src/pages/introduction.md` is the one for the url `<hostname>/introduction`, and
`src/pages/technologies/installation-tutorial.md` is the one for the url `<hostname>/technologies/installation-tutorial`.

A special mention is worth for the files named `index.md`, which correspond to urls that match the folder in which they are in. That is, the file `src/pages/index.md` corresponds to `<hostname>/` (the home page), while the file `src/pages/technologies/index.md` corresponds to `<hostname>/technologies`. Below we explain the decision behind this.

As you can observe in all front matters the title of the page is always a semantic title. We expect this title to match the one used as `key` in
`eleventyNavigation`. Also, even though the `eleventyNavigation` can be edited and presented in any way, we expect all content regarding the guidelines, except for this file and the index file, to be a child of `Overview`. The hierarchy of the navigation should match the hierarchy of URLs, that is, the entry for `Installation Tutorial` should be a child of `Technologies`, as the URL for the tutorial is `<hostname>/technologies/installation-tutorial`, while `Technologies` itself should be a child of `Overview` as, it's url is only `<hostname>/technologies`. Also, be sure to use a different `order` number than the ones in use, or edit all other numbers accordingly.

If you want to add a new page, is enough to create a new markdown file in the `src/pages` folder or any sub-folder, and start the file with a proper **front matter**. You can copy an existing front matter an edit it for ease, but be sure to properly change all the fields required.Although you can specify any `permalink` in the front matter, we expect the permalink to follow the conventions based on the file name and location. Regarding the `eleventyNavigation` be sure that the navigation also follows on the url convention.

**Files and folders naming conventions**

* Use all lowercase filenames and dash (-) as a separator when the file contains multiple words.
* Choose simple 1 or 2 word names instead of long names, that is, prefer `about-guidelines` over `about-the-gobstones-guidelines-project`.
* Use folders and an `index.md` file if there is going to be a highly related content associated to the page you are creating or if the page is likely to have sub-pages.
* Store images and other related assets of a page in the folder of that page, and not in the `src/img` folder, that should contain only element regarding the global template and layout.
* Avoid multiple level nesting of folders, preferring only one or two level deep content whenever possible.

---------------------------------------------------------------------

## Viewing and publishing the contents

Although for the most part your markdown will be shown 'as is', so what you mean is what you get, you may want to preview the page before uploading the contents. In that case, be sure to install all the dependencies of the project by running the following command at the root of the project:

```sh
npm install
```

Once that is done, you can run the server in local development mode by running

```sh
npm start
```

This will start the server at `localhost:8080/<pathPrefix>` which you can access to see the contents. Remember that the actual `pathPrefix` is configured in your `eleventy.config.js`. Currently it's set as `gobstones-guidelines` as this subfolder is used in the remote deployment page in GitHub pages.

The server will run in watch mode, so every change that you perform to the files will immediately be reflected on the page.

When the code is committed to the `main` branch of the GitHub repository, a GitHub Action workflow is triggered, `on-commit-publish`. This action automatically publishes the latest changes committed to the `gobstones-guidelines` documentation live page.

---------------------------------------------------------------------

## Contributing

Just remember to read the full [Contributions Guidelines](https://gobstones.github.io/gobstones-guidelines) to contribute.




