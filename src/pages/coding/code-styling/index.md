---
title: Code Styling
eleventyNavigation:
    key: Code Styling
    parent: Coding
    order: 2
---
# Code Styling

In big open source project's is difficult to allow multiple people contribute letting everyone have their own style. Thus, we try to enforce many styling conventions in out projects, as well as make use of some design patterns, as to make the experience of coding more pleasant to everyone.

---------------------------------------------------------------------

## Code style

For the most part, we try to follow the [Styleguide from the TypeScript Book](https://github.com/basarat/typescript-book/blob/master/docs/styleguide/styleguide.md), but we find some of the recommendations vary relaxed or simply not fittable to our project and processes, so we follow the guide with some modifications. In this section we will discuss most of the styling changes we adopted, but we expect you to be familiar with the language and the aforementioned styling guide.

You will find also that many of the styling rules are enforced by the linter, thus, ending in an error when attempting to run the same (which is done a the first step of our testing process).

### Variables, Parameters, Functions and Method names

We use `camelCase` for all our variables, parameters, functions and method identifiers, for the most part. We have some particular cases needed to be considered.

We expect you to use the appropriate visibility modifiers, either `private`, `protected` or `private` in class methods and attributes. In non class elements, remember that each file is treated a module on their own, so only exported members will be visible. TypeScript does not provide a module/package level visibility modifier, but you can mark a particular element as internal through the use of documentation. By default, the TypeScript compiler configuration we use will strip all internal elements so they cannot be used by third party users of our library.

```ts
/** @internal */
public doSomething() {
    return name;
}
```

By making use of this, and the Barrel Pattern, you can ensure that package level elements only live withing the expected sub-modules.

Although the [Underscore Dangle](https://eslint.org/docs/latest/rules/no-underscore-dangle) is discouraged in today's standards for the most part, we do tend to use it in some places.

An undercore identifier can be used to reflect that a variable or parameter is not relevant (e.g. after a destructuring assignment, or when multiple parameters are expected in callbacks or similar cases).

Also, some of our code do use underscore dangles in their names for private or protected level fields, with a single underscore at the beginning to reflect the visibility level.

### Class, Interfaces, Types, Enums and Namespace

For all, use `PascalCase` as per stated in the book. Do not use prefixes such as "I" for interfaces, or suffixes like "Impl" for concrete classes (e.g. avoid names like "IEnumerable" or "StackImpl").

Do use the "Abstract" word in some part of the name when defining abstract classes, when on complex multiple level hierarchies (e.g. do use "AbstractSourcePosition" instead of "SourcePosition" if the hierarchy is complex).

We prefer interfaces over types when describing type that are composed of properties only. Also, do use interfaces over classes to decouple implementation when the interface i one of the main parts of the API exposed.

In the case of classes that represent runtime error, use the "Error" as a suffix (e.g. `InvalidUserInputError`).

Names for classes, interfaces, types and enums should be singular, except for the case of utility classes.

### Formatting and spacing

For the most part, we use the formatting described in the book, leaving a space before and after expression symbols, using only single quotes whenever possible and recurring to double quotes only for cases when there is a single quote character as part of the string.

Semicolons are mandatory and we make use of `===` comparison, instead of simple `==`.

Regarding spacing, we make use of 4 spaces instead of 2.

### Files and folders naming conventions

We use the following conventions:

#### For folders

* Folders at top level folders such as `src`, `test`, `stories`, and similar, are always named starting in lowercase, and using `kebab-case` if needed (e.g. `project-types`).
* Folders other than top level folders represent modules. Thus, they should be named with `PascalCase`.

#### For filenames

* If your file exposes a single function, name the file as the function, using `camelCase` (e.g. `isEmptyArray.ts`).
* If your file exposes a single class, name the file as the class, using `PascalCase` (e.g. `DataReader.ts`). Use singular for such names.
* If your file exposes multiple elements, use `PascalCase` (e.g. `StringUtils.ts`). Prefer plural for such files when possible.

#### For React components

* React components are always named after the component, thus, using `PascalCase` (e.g. `ContactCard.tsx`). Use singular for such names.
* React components adjacent file (such as the component style or similar) should be name as per the component  (e.g. `ContactCard.scss` if the component is named `ContactCard.tsx`).
* In the case of React components, use a folder per component, with the name of the component in `PascalCase`.

#### Others

Some projects may have more specific conventions, such as the
`gobstones-guidelines` project, that requires the use of `kebab-case`
for folders to match URLs. Read each project documentation to check
if there is any additional expectation on the conventions applied.

---------------------------------------------------------------------

## Design patterns

We also make use of ome design patterns as to organize our code in a simple, effective and easy to expect manner. We recommend that you read [the TypeScript Book tips section](https://github.com/basarat/typescript-book/tree/master/docs/tips) that explains many patterns that we do follow, their whys and shortcomings.

### Barrel pattern

The **barrel pattern** it's a common organizational pattern in JavaScript and TypeScript. It consists of adding an `index.js` or `index.ts` (we will use this one, as we use TypeScript) in each folder. This transforms the folder itself into a module. Then, instead of having to import the individual files of the folder, you import the folder itself.

The `index.ts` file is in charge of also orchestrating the elements exposed from that module, by re-exporting elements, or generating a cohesive folder that exposes everything.

This pattern is really useful and allows for isolation of sub-modules even from inside a project itself. Consider the case where inside a folder of a project there are multiple files, each exposing multiple things, like classes and functions. Each file is required to expose all those elements, because other files inside the folder do import and make use of those elements. However, some of those functions and classes are not expected to be used from outside the folder itself (we want to have package/module level visibility). But users can always import any file, and use any function, because they have to be public in order to be used from within other files. The `index.ts` file inside the folder will expose only the functions and classes that are actually expected to be used from outside of the folder. Used of the elements inside the folder are expected to always import the folder itself, and not the individual files. Although the pattern does not enforce visibility, it does generate a usage expectation, thus clearly marking boundaries of different folders, each acting as a sub-module inside the same project.

We make heavy use of the Barrel pattern in all of our projects, and we encourage following the same.

### Use of property setters and getters

The tips section of the TypeScript book says that using the property setters should be limited, possibly because a lot of people do ue this feature erroneously. Knowing when to use a variable, which visibility to give, and when to ue the property getters and setters is not alway easy if you come from other languages, so this section expects to be a guide to newcomers, and also shed some light on the decisions we take when exposing attributes.

* If a property is read-write and no special actions should be taken when such an event happens, use a `public` access attribute instead of a private variable with public getter and setter. This is easier, reduces code, and can always be modified in the future.
* If you want a readonly property, use the `readonly` modifier on a public variable whenever possible. You may find that this is possible most of the times, except in cases where the variable does need to be modified internally, in which case, follow the next point.
* Use property getters to expose read-only variables that cannot be `public readonly` as they require internal modification after some actions.
* Use property getters to expose simplify the API if desired, as to expose elements that are immutable in context, and that may be obtained by other means, but are uncomfortable to do so in code (e.g. `get last() { return this.elementAt(this.length -1); }`).
* Do NOT use property getters for elements that are CPU or memory intensive or require hard calculations. Use a method instead.
* Property setters should only be used when there is an associated private variable (or multiple variables that do change in a simple expected manner). If there is an associated getter, then calling the getter, after the setter had been used, should retrieve the same value used with the setter.
* Property setter should only modify the associated object and should modify other objects. They should not have side effects.
* Use property setters only in cases where:
    * Before changing the associate private variable, some validations should be performed as to throw custom errors.
    * The action of setting the variable should be logged.
    * An event should be thrown after changing the value.

### Constructors

Classes in TypeScript only allow one constructor. Some people coming from other languages also find this problematic. Here are some patterns to follow when working with constructors and initializing objects.

* Only define a constructor if your class expects initialization values, otherwise, do not define a constructor (do not define empty constructors).
* If your class do not expect external initialization values, but some initial values should be provided to some internal private attributes, set the values at definition time, and avoid defining a constructor.
* If your class expects some initialization values that will match some attributes, use the attribute definition shortcut in the constructor, thus, defining the attributes in the constructor itself.
* If your constructor expects a big configuration, expect an object holding the configuration, instead of endless parameters. Unless really needed, avoid really deep configurations, and rely on one level objects.

---------------------------------------------------------------------

## Others

This are the basic idea behind our styling, and as mention, some of this rules are enforced, while others are left to you. If you are in doubt about the style to use, first let the linter tell you, read exiting code to see the style used, and if no answer arises, ask to the core team what style should be best fit for such a particular problem.

Also, note that some particular elements, such as tests and documentation have their own styling expectations. Read the [Testing Section](../testing/) or the [Writing Documentation Section](../writing-documentation) to know more about it.
