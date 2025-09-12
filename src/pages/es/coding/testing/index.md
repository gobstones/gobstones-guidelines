---
title: Testing
eleventyNavigation:
    key: Testing
    parent: Coding
    order: 5
---
# Testing **GobstonesWeb2** projects

One of the important aspects of the code you add to any project implies complying with existing tests, as well as adapting or developing new tests if there is significant new functionality added.

This section explains how to run the tests, as well as how tests are organized and how to write new tests.

---------------------------------------------------------------------

## Running tests

Every project includes a `test` task in their `nps` configuration. Running the tests is as easy as executing the `gobstones-scripts run` command for the `test` task through `npm` by running:

```sh
npm start test
```

The actual tool running the tests is `jest`, which by default executes all the tests in the `./test` folder that have a name ending with the `.test.ts` extension.

Each file is a **Test Suite** containing one or more **Tests**. In itself, each **Test** should consist in one or more **Assertions**. When running through the previous commands, all tests in all tests suites are executed.

We say that the tests **Pass** when all the assertions in all tests in all test suites are satisfied. If any is not, we say that the test containing the unsatisfied assertion **Fails**, and thus the corresponding test suite containing the failed test also fails, and of course, overall, the tests fail.

Besides the assertion, the different parts of the source code covered by the tests are tracked when running the tests to generate a **Coverage** rating, expressed as a percentage. All the code in `./src` should be covered at a **100%** (ideally), although it may be less, with no lesser than **80%**. If the test do not cover 80% of the code, or 80% of any file, then the tests are marked as **Failed** due too **Low coverage**.

When running the tests in your terminal, results are outputted to the standard output in the terminal, but other options can be selected. Tests may be run to generate results and coverage reports in _HTML_ form. This _HTML_ can then be served in a static page for easier navigation. You can run tests and serve the _HTML_ result by running:

```sh
npm start test.serve
```

Static files for the site are always saved in the `./coverage` folder when running the tests, and are deleted and recreated from scratch every time the tests are run. This folder is not preserved anywhere, and only serves the purpose of temporary serving for easier test result navigation.

---------------------------------------------------------------------

## Test Types in use

There are different types of test currently in the platform, **unit tests**, **functional tests** and **integration tests**, although others may be added later on. Be sure to get a grasp of what each test is for.

### Unit tests

Unit tests are the most common type of test that we include in our projects. Unit tests ensure that the code is doing things right. They are written from a programmer's perspective, and ensure that a particular method of a class or a particular function works as expected. Each test confirms a method produces the expected result when given a particular input.

### Functional tests

Functional tests are written from the end user's perspective. If unit tests ensure the code is doing things right, functional tests verify that the code is doing the right thing. This type of tests ensure that the module or system under testing is behaving as the user is expecting to, that is, it complies with the functional description of the module.

### Integration tests

Integration tests ensure that different modules are working together appropriately. In the more complex modules of the system, there is a need to ensure that different sub-modules are integrated in such a way that the whole expected behavior is met. In such cases, integration tests are used.

---------------------------------------------------------------------

## Test Suite Organization

How are the tests organized in a project, both at a file system level and internally in terms of code, is one of the important aspects that we have taken a particular approach on. The present section explains such an organization.

### Tests at a file system level

We organize tests as files as follows:

* All tests live in a `./test` folder.
* For unit testing, there should be one test suite for each non-abstract class or module in `./src`, in the same sub-path than the module has in `./src` (e.g. the class at `./src/Module1/Module2/MyClass.ts` should have it's test at `./test/Module1/Module2/MyClass.test.ts`).
* If the same file exports multiple classes or elements to test, you may provide only one file to test them all, following the above pattern, and add different descriptions to each (see next section), or you may choose to provide a different file for each, naming it according to the class name.
* If a class or function is exported as part of the `index.ts` file, your test should be named after the module (e.g. to test elements at `./src/Module1/Module2/index.ts` tests should live at `./test/Module1/Module2/Module2.test.ts`).
* Functional tests should test a full module, and the corresponding test suite should be located in the same sub-folder as the module to test, with the name of the module, followed and with the `.func` suffix. (e.g. the module at `./src/Module1/Module2` should have it's functional test at `./test/Module1/Module2/Module2.func.test.ts`).
* Integration test suites should live in the root of the test folder, with an `.int` suffix, and a semantically meaning name. (e.g. `./test/ApplicationStyles.int.test.ts`).

### Functions from Jest and aliases we use

Tests suites code organize their contents (tests) in a particular way also. We got inspiration from the [Gherkin language](https://cucumber.io/docs/gherkin/reference/) and BDD, and we wrote our tests in such a way that they are human readable and can be used as part of the documentation of features and the expected interface. In that sense, we do not use Gherkin nor any domain specific language, but we do exploit **Jest**'s `describe` in order to write more meaningful test suites.

We use the following three exported functions from `@jest/globals`:

* `it`: Used for defining a particular test case. We use it to describe what should happen when a particular method is called, sometimes with a particular input.
* `expect`: Used to define assertions over a particular value or action. They are used inside tests as to to assert the state in which the system ends after executing some code.
* `describe`: Used for grouping tests into a cohesive unit. We use it to describe the module or class under test. Defines a test group.
* `beforeEach`: Used to setup a particular state in the system or objects under a test group before each test is run.

But, we also make use of some aliases of `describe` that allows for more human readable and meaningful tests.

* `given`: Allows us to define a grouping of tests that require a particular initial state. It groups multiple tests, and usually contains a `beforeEach` definition, that sets the state in a particular fashion. It's an alias for `describe`.
* `when`: Allows us to specify the method or function to test. It's an alias for `describe`.
* `withInput`: Allows us to specify input data for the particular test or function. It's an alias for `describe`.

Full tests should be read in such a way that combining all the describes, given, when, on and it, makes a coherent text that explains the feature or scenario under testing.

Here is an example:

> **DESCRIBE** Stack
> **GIVEN** an instance with multiple elements
> **WHEN** pop
> **IT** returns the element at the top of the stack
>
> ```ts
> describe('Stack', () => {
>     given('an instance with multiple elements', () => {
>         ...
>         when('pop', () => {
>             it('returns the element at the top of the stack', () => {
>                 ...
>             })
>         });
>     });
> });
> ```

And another one:

> **DESCRIBE** Stack
> **GIVEN** an instance with multiple elements
> **WHEN** push **WITH INPUT** "X"
> **IT** has the "X" element at the top of the stack
>
> **DESCRIBE** Stack
> **GIVEN** an instance with multiple elements
> **WHEN** push **WITH INPUT** "X"
> **IT** has one more element than before
>
> ```ts
> describe('Stack', () => {
>     given('an instance with multiple elements', () => {
>         ...
>         when('push', () => {
>             withInput('"X"', () => {
>                 it('has the "X" element at the top of the stack', () => {
>                     ...
>                 });
>                 it('has one more element than before', () => {
>                     ...
>                 })
>         });
>     });
> });

You can import all of them as follows:

```ts
import {
    it, expect, describe,
    describe as given,
    describe as when,
    describe as withInput
} from '@jest/globals';
```

### General guidelines when writing tests

The following are common guidelines that you should follow when writing test suites:

* Avoid creating auxiliary functions or complex code that abstracts away multiple assertions. Tests should be able to be understood on the spot, and you should avoid people the need to debug or struggle to understand the tests.
* Prefer repetition. That is, even if two tests look too similar, do prefer repeating code to provide clarity in what is being tested.
* The least asserts the better. The theory says that one assert per test should be used, we don't go that far, but the leas amount that you ue, the better.
* Avoid "should" in your test descriptions. That is, prefer "returns 5" over "should return 5".
* Use present simple over present continuous. That is, prefer "returns 5" over "returning 5".
* When doing unit testing, if your module or class is intertwined with others, be sure to use **mocks** to simplify testing and test a single module at a time. Only tet the full behavior if impossible to mock, or if the element under test cannot live without an instance of the other.

### Test examples for particular scenarios

Of course some of this test rules have their oun interpretation when testing different elements in the code. Let's see some particular common examples of tests:

#### Unit test of a class

* When testing a class, the class name to test should be the top description with `describe`. If there are multiple classes to test in the same file, each one should have it's own description.
* If the class has state that it's relevant to the output produced by the elements to test, then a `given` context should be provided next. Each of this `given` should probably start with a `beforeEach`.
* Each method to be tested, against one or more input arguments, should be described with it's name in a `when`.
* If the method to test expects arguments, and the results vary significantly between different values of input, then a group with a particular input should be defined with a `withInput` element.
* There should be one or more outputs tested, each defined through an `it` clause. Inside each, there should be at least one assertion through the use of `expect`.

An example would be

```ts
describe('Stack', () => {
    given('an instance that is empty', () => {
        when('pop', () => {
            it('throws EmptyStackException', () => {
                ...
            });
        });
        when('length', () => {
            it('returns 0', () => {
                ...
            });
        });
        when('push', () => {
            withInput('"X"', () => {
                it('has "X" at the top of the stack', () => {
                    ...
                });
                it('has a length increased in 1', () => {
                    ...
                });
            });
        });
    });

    given('an instance with multiple elements', () => {
        when('pop', () => {
            it('returns the element at the top of the stack', () => {
                ...
            });
            it('throws EmptyStackException if executed as many times as the number of elements', () => {
                ...
            });
        });
        when('length', () => {
            it('returns the number of elements in the stack', () => {
                ...
            });
        });
        when('push', () => {
            withInput('"X"', () => {
                it('has "X" at the top of the stack', () => {
                    ...
                });
                it('has a length increased in 1', () => {
                    ...
                });
            });
        });
    });
});
```

In most occasions you will need an instance with some preloaded state in order to test. You can use the `beforeEach` definition on `@jest/globals`, and define one on each context case. Variables holding the values for testing should be declared inside the context itself.

Here is the same example above, with the beforeEach added:

```ts
describe('Stack', () => {
    given('an instance that is empty', () => {
        let s: Stack;
        beforeEach(() => {
            s = new Stack();
        });
        when('pop', () => {
            it('throws EmptyStackException', () => {
                ...
            });
        });
        when('length', () => {
            it('returns 0', () => {
                ...
            });
        });
        when('push', () => {
            withInput('"X"', () => {
                it('has "X" at the top of the stack', () => {
                    ...
                });
                it('has a length increased in 1', () => {
                    ...
                });
            });
        });
    });

    given('an instance with multiple elements', () => {
        let s: Stack;
        let numElements: number;
        beforeEach(() => {
            s = new Stack();
            s.push('A');
            s.push('B');
            s.push('C');
            numElements = 3;
        });
        when('pop', () => {
            it('returns the element at the top of the stack', () => {
                ...
            });
            it('throws EmptyStackException if executed as many times as the number of elements', () => {
                ...
            });
        });
        when('length', () => {
            it('returns the number of elements in the stack', () => {
                ...
            });
        });
        when('push', () => {
            withInput('"X"', () => {
                it('has "X" at the top of the stack', () => {
                    ...
                });
                it('has a length increased in 1', () => {
                    ...
                });
            });
        });
    });
});
```

The same applies for cleaning up values or others, using `afterEach`.
Be sure to define `beforeEach` and `afterEach` at the top of the context, before any method testing.

In some cases, the test could be written in such a way that any instance can pass the test. In such case, repeating the test for each context or state of the object is unnecessary, and you may choose to use the `any instance` context.

The problem with this approach is that, as tests should work with any instance, it's not possible to create a single variable holding a particular state. Instead, the instance to test should be created on-the-fly in the test itself.

In the above example, testing that you can only pop as many elements as the length before incurring into an exception can be tested in such a way. Let's see the example:

```ts
describe('Stack', () => {
    given('an instance that is empty', () => {
        ...
    });

    given('an instance with multiple elements', () => {
        ...
    });

    given('any instance', () => {
        when('pop', () => {
            it('throws EmptyStackException if executed as many times as the number of elements', () => {
                const s = new Stack();
                // Add N elements
                s.push('A');
                s.push('B');
                s.push('C');

                // perform N pops
                let length = s.length();
                for (let i = 0; i < length; i++) {
                    s.pop();
                }

                // Perform N+1 pop
                expect(() => s.pop()).toThrow(new EmptyStackException());
            });
        });
    });
});
```

As we can see, the problem with this approach is that we are only truly testing one case, that is, a stack with three elements. Are we sure that this works with stacks that are empty? What happens with stacks of more elements? If you find yourself in the situation when you need to test again the exact same test, but with a different value for your instance, maybe it's not an `any instance` test, and it should be written in each context.

Finally, let's consider the case when you have static functions and properties. This can be tested in a special `statically` context, as the topmost context of the test suite.

```ts
describe('Stack', () => {
    given('statically', () => {
        ...
    });
    given('an instance that is empty', () => {
        ...
    });

    given('an instance with multiple elements', () => {
        ...
    });

    given('any instance', () => {
        ...
    });
});
```

### Unit test of modules with functions

Testing modules that contain only functions is similar to testing classes. As function will not have state, there's no `given` in these scenarios, and, as there is no class, we use the module name as the topmost description.

The `withInput` may still hold when testing functions that require multiple argument, and of course, there should be `it` clauses.
Let's see a simple example:

```ts
describe('reverse', () => {
    withInput('an empty string', () => {
        it('returns an empty string', () => {
            ...
        });
    });
    withInput('a one character string', () => {
        it('returns the same string', () => {
            ...
        });
    });
    withInput('an even amount of characters string', () => {
        it('returns a string of the same length as input', () => {
            ...
        });
        it('returns a string that has as first letter the last of input', () => {
            ...
        });
        ...
    });
    ...
});
```

How to test React components

### Unit test of modules with static objects

Usually, when a module returns an object, that object contains no state that can or should be modified from the exterior. In such cases, we will test the object in a similar way as we test classes, except that there will be no `given` clause, as there are no states that are relevant for the object.

An example of this would be something like:

```ts
describe('stringUtilities', () => {
    when('equalsIgnoringCase', () => {
        ...
    });
    when('toKebabCase', () => {
        ...
    });
    ...
});
```

In some particular scenarios, the state of the object may be important, and may be changed from outside. If that is the case, then you may use `given` clauses to specify a particular state for the object. Do note that, if the object is global, the object will not go back to it's original state after every test run. You should have this in mind when writing such tests, and use the `beforeEach` and `afterEach` or `beforeAll` and `afterAll` in each `given` context to set up the object in a well known state.

An example of this particular case will look like the following:

```ts
describe('globalStack', () => {
    given('global stack has two elements', () => {
        beforeEach(() => {
            globalStack.empty();
            globalStack.push('A');
            globalStack.push('B');
        });
        ...
    });
    ...
});
```

### Functional tests of modules

Functional tests are a little different than unit tests, as they assert the behavior of a full module, from the perspective of a user, and not the developer. In this tests we will not validate individual methods, but overall interface behavior, thus, ensuring that the overall module behaves as required in a realistic use case scenario.

```ts
describe('Stack', () => {
    given('a newly created stack', () => {
        beforeEach(() => {
            ...
        })
        it('can push as many elements as we want, even if they are repeated in the stack', () => {
            ...
        });
        it('pop always pops the elements in the inverse order they where pushed', () => {
            ...
        });
    });
    given('a stack that has 5 elements when created', () => {
        beforeEach(() => {
            ...
        })
        it('can pop up to 5 times, and break at the 6th time', () => {
            ...
        });
        it('can pop up to 5 times, plus the number of times a push has been made before the last pop', () => {
            ...
        });
    });
});
```

Each `given` still represents a particular initial known state. This are in a way, example of particular inputs that the uer may have given, or we have reached by some mean. After that, each test explains a particular condition or set of conditions that should be met once some actions have been taken. Tests in this scenarios will probably consist of longer code, and may contain multiple asserts that test the overall state of the object after multiple actions, or test intermediate states or return values for particular actions. This makes it unlikely that you will have `when` or `withInput` in such tests.
