---
title: Installation Tutorial
eleventyNavigation:
    key: Installation Tutorial
    parent: Technologies
    order: 1
---
# Instructions to install a repository, for newcomers

## Windows for non WSL users

You can install the required software through their corresponding website.
* [Download Visual Studio Code]()
    * You may also opt for downloading through the **Microsoft Store**.
* [Download git](https://git-scm.com/download/win)
    * Select Destination Location
        * You may select any folder to install Git on. By default is usually `C:\Program Files\Git`, which is more than good.
    * Select Components
        * Be sure to check the "Add a Git Bash Profile to Windows Terminal" option. Leave rest as default.
    * Select Start Menu Folder
        * You may choose any Start Menu name for the folder, but the default `Git` will suffice.
    * Choosing the default editor used by Git.
        * When choosing the editor for commit messages, we recommend to use the Vim editor, or at most, Visual Studio Code, but you may choose your preferred one.
    * Adjusting the name of the initial branch in new repositories.
        * When choosing the default branch name, be sure to select "main" as the default.
    * Adjust your PATH environment
        * Select the option to "Use Git and optional Unix tools from the Command Prompt".
    * Choosing the SSH executable
        * Select "Use bundled OpenSSH".
    * Choosing HTTPS transport backend
        * Select "Use the OpenSSL library".
    * Configuring the line ending conversions
        * Select "Checkout as-is, commit Unix-style line endings"
    * Configuring the terminal emulator to use with Git Bash.
        * Select "Use Windows default console window" as the terminal emulator to use with Git Bash.
    * Choose the default behavior on `git pull`
        * Select "Only ever fast-forward" as the default behavior for `git pull`.
    * Choose a credential helper
        * Select "Git Credential Manager".
    * Configuring extra options
        * Select both the "Enable file-system caching" and the "Enable symbolic links" options.
    * Configuring experimental options
        * Do not select any of the options.
    Hit install and wait for the operation to finish. When prompted, you can skip the option to view the readme file and click the Finish button.

* [Download Node.js](https://nodejs.org/en)
    * Select the latest LTS build.

    * Accept the agreement and continue to select the installation folder, you may choose any folder you like, but we recommend to stick with the default `C:\Program Files\nodejs`
    * When prompted for Custom Setup, leave everything as default.
    * Tools for Native Module
        * Be sure to select the "Automatically install the necessary tools" option.
    Hit on install.

    Thi will not only install Node.js, but other additional needed tools, such as Chocolatey, Python and a C/C++ compiler. A secondary installation prompt may be open for you to install thee tools.

    A terminal window will open to install the Tools, simply select the window and press any key. The windows will refresh, changing the text and explaining the tools being installed. It will prompt multiple times to install all tools.
    A "Do you want to allow changes in the system" prompt may appear, choose "Yes" if that i the case.

     When prompted, always stick to defaults.


Set your execution policy
Set-ExecutionPolicy Bypass -Scope LocalMachine
Set-ExecutionPolicy Bypass -Scope CurrentUser


## Installing on **WSL** for use with **VSCode** on **Windows**

This brief tutorial is an explanation for beginners on how to use **VSCode**, using **WSL** on **Windows**.
You may read about [**VSCode** and **WSL**](https://code.visualstudio.com/docs) if you are not familiar with them, where a clear explanation of how to install both **VSCode** and **WSL** from scratch is given.

You may test the packaged either using **VSCode** from **Windows** or on a new **WSL** window, but to be able to debug it, it is best to use a new **WSL** window.

Let's go to the installation. Skip any steps that you already performed.

1. Install **VSCode** and **WSL** on your machine.

2. Then you will need to install `Node.js` on **WSL**.
   For that, run

    ```sudo apt install npm```

   (after updating your `apt` with `sudo apt-get update`, if needed) on a **WSL** terminal.
   Check the success of installation with `node -v`.

3. As you will also use `Typescript`, you will need to install it as well, by running

   ```npm install -g typescript```

   Check the success of installation with `tsc -v`.

4. Then clone (or fork) the repository you want to work with.
   If you are not going to debug, you may use any **Windows** directory, but if you want to debug, you will need to clone on the **WSL** file system (usually `\\wsl.localhost\Ubuntu\home\<username>`).
   The tool to manage `git` repositories is built-in inside WSL, but if you are using **Windows**, you may need to install and configure a [**GIT manager for Windows**](https://gitforwindows.org/).

    **NOTE:** I tried to debug the component from inside **VSCode** running it directly on **Windows**, but I failed, so I went for the conservative approach.

    Remember to follow the guidelines described in [**Coding standards and workflow**](../../coding-standards) regarding the use of branches and pull-requests if you are going to experiment.

5. The next step is to open **VSCode**, and connect to a remote host to be able to run it inside **WSL**.
   For that you use the `><` icon on the lower left corner of the window, and select `New WSL Window`.
   The icon on the lower left corner should change to `>< WSL: Ubuntu`.

6. The following step is to open the package folder using `Open Folder` (either from the `File` menu, the button on the `Explorer`, the link in the `Getting started` window, or by using the keyboard shortcut -- by default, `CTRL-K CTRL-O`).

7. If needed, before proceeding with the final step, you may want to perform an update, running first

   ```npm update```

8. The final step is installing the component, by fetching all the dependencies.
   For that, open a console (`Console -> New Console`), and run

   ```npm install```

Voilà. You are now ready to start exploring the package.
