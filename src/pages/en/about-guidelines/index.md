---
title: About guidelines
lang: en
eleventyNavigation:
    key: About guidelines
    order: 3
---

# About guidelines

The `gobstones-guidelines` repository contains documentation on the platform architecture, design guidelines, ways to contribute, and standards used, related to the development of **GobstonesWeb2**.

[![Licence](https://img.shields.io/badge/AGPL--3.0_with_additional_terms-olivegreen?style=plastic&label=License&logo=open-source-initiative&logoColor=white&color=olivegreen)](https://github.com/gobstones/gobstones-guidelines/blob/main/LICENSE)
[![Version](https://img.shields.io/github/package-json/v/gobstones/gobstones-guidelines?style=plastic&label=Version&logo=git-lfs&logoColor=white&color=crimson)](https://github.com/gobstones/gobstones-guidelines)

---------------------------------------------------------------------

Although structured as any other project in the Gobstones Platform, and containing a `package.json` and other files, this project's focus is documentation of the whole platform. The project is structured as a generated static webpage using `eleventy` ([11ty.dev](https://www.11ty.dev)). The basic structure and styles were copied from the [TypeDoc site](https://github.com/TypeStrong/typedoc-site), although a lot of changes had been done on top of the original source.

## About eleventy and the project structure

You should not need to know much about `eleventy`, the plugins we use or how the site is structured in order to contribute and write guidelines. Nonetheless you should at least have a grasp of what a **front matter** is, and how it works.

On the root of the project you will find general files, such as `package.json`, `package-scripts.js`, `.prettierrc`, `commitlint.config.js` and others, along with the `.husky`, `.github` and `.vscode` folder. If you do not know what they are, you should read the [Technologies](../technologies) section on this same guidelines.

Beside the aforementioned files, the file `eleventy.config.js` is required for `eleventy` to work. This file holds the configuration of `eleventy` as JavaScript code, and exports a single function, that takes the user configuration object (named `el`) that may be modified as a side effect to add particular requirements to the configuration. The function returns an object, containing mainly the `dir` attribute, specifying the basic directories that `eleventy` will work upon, and the `pathPrefix`, that specifies a possible sub-folder in your hosting (and that we set accordingly to host in **GitHub Pages**).

The code for the site itself is located at the `src` folder. Subfolder `src/templates` contains the basic structure of the site that `eleventy` will use when generating the static pages to be served, that is, the basic HTML templates. The folders `src/css`, `src/img` and `src/js`, along with the file `src/favicon.ico` are static content that will be served on the site, styles (using [Sass styles](https://sass-lang.com) and compiled before served), scripts and images used through the site once it's generated and published. These comprehend the files used for site generation, and make up the site's style and behavior. These file are rarely updated.

If you want to update the guidelines, or contribute new ones, you should only focus on the `Markdown` files (`.md` extension) that live under the `src/pages` folder and sub-folders. This is the folder that holds the actual content of the site, and they are written in Markdown (If you don't know what Markdown is, you may read [this site](https://www.markdownguide.org)).

If you already know Markdown, you may find strange that the content in those files start with three dashes, contains some content, followed by another three dashes, before containing proper Markdown. Those three dashes and the content inside it (Which is composed of [YAML](https://yaml.org) code) is known as a **front matter**. The following is an example:

```yaml
---
title: About guidelines
eleventyNavigation:
    key: About guidelines
    order: 2
---
```

The **front matter** provides information to `eleventy` on how to process and publish the page contents of that file. Contents declared in the front matter are used later on in the templates and other places by `eleventy` itself, and also by some plugins, so each expect different information. The ones we use are:

* `title` - A string used as the title of the page
* `eleventyNavigation` - An object containing information on how to showcase links to this page in the navigation left sidebar. It includes:
    * `key` - A string used as text to show as a link.
    * `parent` - If present, the link will be shown as a sub-element of the parent in the list.
    * `order` - The order in which the element will be shown on the list or sub-list.

The elements declared in the **front matter** are used when generating the site. Some of these are automatically assigned to all pages in the `eleventy.config.js` file, such as the layout or the permalink, and they may be overwritten by different files, although these is not expected. Regarding the `layout`, by default all pages will use the `doc` layout which, besides of a main header, structures the contents in three sections:

* **Main content** - Contains the contents the page itself, that is, the contents written in the markdown file. It's presented on the center of the site.
* **Navigation sidebar** - Contains the navigation through the site, that is, links to all other pages in the site that declared an `eleventyNavigation` section in their front matter. It's presented on the left side of the site.
* **Local page navigation** - Contains the navigation through the current page. That is, links that scrolls down the view to a particular heading in the page. All heading declared in the markdown are identified and added to the navigation list automatically. It's presented on the right side of the site.

If the need arises to modify the site's structure, styles or scripts, you will need to understand not only the structure, but also the associated technologies. For the most part, you just need to know about Markdown and the **front matter** to be able to modify and add new content.

---------------------------------------------------------------------

## Modifying or adding guidelines contents

As explained in the previous section, contents themselves are stored at `src/pages` in the form of Markdown files. They contain the text to be display on each page as main content, along with a front matter at the top of the file. Those files are the only ones to modify and care about when working with site guidelines contents.

> In this section we will mention `<hostname>` in some urls.
> We refer to the hostname of the page as the location in which
> the site is hosted. For the published site, such url is
> `http://gobstones.github.io/gobstones-guidelines`. While testing
> on your local machine, the hostname takes the form of a local url,
> `https:localhost:8080`. Changes in configuration may give
> different host names, so be sure to understand the implications of possible configuration changes.

If you want to modify the contents of a particular page, then you should open the corresponding file in `src/pages`. Files are always named `index.md` and live in a folder that matches the url they represent, that is, the file `src/pages/introduction/index.md` is the one for the url `<hostname>/introduction`, and `src/pages/technologies/technology-list/index.md` is the one for the url `<hostname>/technologies/technology-list`.

You may wonder why do we use only `index.md` files and folders, and not files with other names. We follow this model as to comply with the idea behind [W3C's Cool URIs don't change](https://www.w3.org/Provider/Style/URI), and so that the files in `src/pages` live in the same location as the HTML generated content on the `./dist` output folder.

As you can observe in all **front matters** the title of the page is always a semantic title. We expect this title to match the one used as `key` in `eleventyNavigation`. Also, even though the `eleventyNavigation` can be edited and presented in any way, we expect all content regarding the guidelines, except for this file and the index file, to be a child of `Overview`. The hierarchy of the navigation should match the hierarchy of URLs, that is, the entry for `Technology List` should be a child of `Technologies`, as the URL for the list is `<hostname>/technologies/technology-list`, while `Technologies` itself should be a child of `Overview` as, it's url is only `<hostname>/technologies`. Also, be sure to use a different `order` number than the ones in use, or edit all other numbers accordingly.

If you want to add a new page, is enough to create a new markdown file in the `src/pages` folder or any sub-folder, and start the file with a proper **front matter**. You can copy an existing **front matter** and edit it for ease, but be sure to properly change all the fields required. Regarding the `eleventyNavigation` be sure that the navigation also follows on the url convention.

### Files and folders naming conventions

* Always name your file `index.md` and place the file in the appropriate folder.
* For folder names, use all lowercase filenames and dash (-) as a separator when the name contains multiple words.
* Choose simple 1 or 2 word names instead of long names, that is, prefer `about-guidelines` over `about-the-gobstones-guidelines-project`.
* Avoid multiple level nesting of folders, preferring only one or two level deep content whenever possible.
* Place a page's related static content into the same folder structure for such a page. That is, an image `something.png` that is going to be used only at `src/pages/architecture/index.md` should be placed at `src/img/architecture/something.png`.

---------------------------------------------------------------------

## Viewing and publishing the contents

Although for the most part your markdown will be shown 'as is', so what you mean is what you get, you may want to preview the page before uploading the contents. In that case, be sure to install all the dependencies of the project by running the following command at the root of the project:

```sh
npm install
```

This package uses `nps` as most other **GobstonesWeb2** projects. You can list all possible commands by running:

```sh
npm start
```

To run the local development server and see your changes reflected in the guidelines as a webpage, run:

```sh
npm start dev
```

This will start the server at `localhost:8080` which you can access to see the contents. The server will run in watch mode, so every change that you perform to the files will immediately be reflected on the page.

You can also run tests, which does two things. First, it runs a linter in your markdown files, and next, it verifies that the links (to other files in the site) used in those files are correct.

```sh
npm start test
```

When the code is committed to the `main` branch of the GitHub repository, a GitHub Action workflow is triggered, `on-commit-publish`. This action automatically publishes the latest changes committed to the `gobstones-guidelines` documentation live page.

---------------------------------------------------------------------

## Contributing

Just remember to read the full [Contributions Guidelines](https://gobstones.github.io/gobstones-guidelines) to contribute.
