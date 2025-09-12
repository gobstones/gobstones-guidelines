---
title: Writing Documentation
eleventyNavigation:
    key: Writing Documentation
    parent: Coding
    order: 6
---
# Writing Documentation

An important aspect about any code is it's documentation. We know that writing test cases and documentation usually takes even more time than writing the code itself, but we aim to produce a premium quality software. In that sense, we encourage all of our developers to produce documentation that is accurate, understandable and up to date.

> Previous versions of **GobstonesWeb** had poor to none documentation
> nor testing, and mainlining it was a real problem, specially in a project
> where collaborators are changing all the time.

We make use of [**TypeDoc**](https://typedoc.org) for generating the documentation. You should get familiar with the technology before starting to write code for the project. If you have used other documentation tools in the past, like JavaDocs or JSDocs, you will find the syntax quite familiar.

---------------------------------------------------------------------

## Documentation considerations

There is not much to say about how to write good documentation, other than that it should be clear, succinct and be up to date with the code. But please do consider the following.

* When documenting functions or methods, be sure to add a `@param` tag for each parameter and document it appropriately. This goes for both public and private methods.
* Use the `@return` tag to clarify the expected return value.
* Ue the `@throws` tag to declare situations in which the function or method may fail, and link to the appropriate error type if necessary.
* Be sure to add the `@internal` tag to all elements that are public, but are module internal (e.g. module level elements or package level visibility).
* Do use the `@group` tag to set an appropriate group fro the elements. We use the following conventions:
    * `API` group is for elements that the module exports and that others are expected to use from outside the module. Use sub-grouping to differentiate by element type or functionality, such as **API: Types**, **API: Functions**, **API: Accessors**, etc.
    * `Internal` group is for elements that are internal to the module and should not be used from outside. Use sub-grouping to differentiate by element type or functionality, such as **Internal: Helpers**, **Internal: Types**, etc.
* Use the header of the document to declare the file author and the module it belongs by using the `@author` and the `@module` tags.
* Document modules/sub-modules in their corresponding `index.ts` file only, as the per the barrel pattern, all files in the module should belong to the same module.
* Use appropriate module names following the same convention than the one used for elements: `API` for modules that may be used externally (e.g. are exported to the full module user) and `Internal` for modules that are not going to be exported.
* Use the `@link` tag when mentioning other classes or attributes a to generate a pleasant navigation experience to the reader of the docs.

Bear this in mind and you will end up writing great documentation.

## Building and checking the documentation

All our projects (except the guidelines itself) have an `nps` task to generate the documentation. You can run it by executing

```sh
npm start doc
```

Ensure that there are no warnings or errors when building. Once you are sure everything is building Ok, you may still verify manually that everything looks as expected by navigating the documentation locally. Run the tak to generate the documentation and start a local server with the output.

```sh
npm start doc.serve
```

You should see the documentation at your `localhost:3000` port.

Remember that the documentation is not uploaded to the sources of the project and that it will be automatically generated when a new version of the project is released (a new tag is created).
