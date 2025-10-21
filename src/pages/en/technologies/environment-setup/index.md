---
title: Environment Setup
lang: en
eleventyNavigation:
    key: Environment Setup
    parent: Technologies
    order: 3
---

# Environment Setup

Setting up a working environment for coding is not always easy, so this section is intended to guide you through such setup. We provide guides for different operating systems, and then some additional steps that are common to all systems.

---------------------------------------------------------------------

## Installation guide for different operating systems

### Linux based systems

To install on a Linux system you should probably delegate into your system's package manager, such as `apt`, `dnf` or `pacman`.

You need to install **Git**, **Node.js** and **npm** (which usually comes bundled with Node.js, but in some systems comes as a separate package) through your package manager. You can find instructions for many different distributions in the **[official Node.JS installation instructions](https://nodejs.org/en/download/package-manager)**.

In Ubuntu and derivatives you can run:

```sh
sudp apt update
sudo apt install git Node.js npm
```

Depending on the version, you may need to download a **snap** version of it.

On Fedora, RHEL or CentOS you can:

```sh
dnf module install nodejs:<stream>
```

where _< stream >_ corresponds to the major version of Node.js. To see a list of available streams you can run `dnf module list nodejs`. Always choose the latest version.

### macOS

On macOS the recommended way to install is through [Homebrew](https://brew.sh).
If you don't have Homebrew already installed, follow the setup process explained on their website. The just launch a Terminal and run:

```sh
brew install git node
```

This will install **Git**, **Node.js** and **npm**, which you will be able to use from any terminal. Be sure that you are using the latest version of **Git** as per the one installed with Homebrew, and not the **macOS built-in Git version**.

### Windows for non WSL users

You can install the required software through their corresponding website. But for **Git** installation, you should carefully select the components to install in the installation wizard, so we will describe each step of the installation process.

#### Installing Git

* Download Git from the [Official Git Website](https://git-scm.com/download/win) and start the installation wizard.
* Select Destination Location
    * The first tep of the wizard will ask you for the destination location in which you wish to install Git. Select the one you like, or leave the default one, `C:\Program Files\Git`.
* Select Components
    * In the component selection, be sure to check "Add a Git Bash Profile to Windows Terminal" option. You should leave the rest as default.
* Select Start Menu Folder
    * As the menu folder name, you may choose whatever you please, but you may leave the default `Git` option.
* Choosing the default editor used by Git.
    * When choosing the editor for commit messages, we recommend to use the `Vim editor`, which runs on the terminal. If you want a visual editor, you may choose `Visual Studio Code`, but be sure to install it beforehand.
* Adjusting the name of the initial branch in new repositories.
    * When choosing the default branch name, be sure to select "main" as the default.
* Adjust your PATH environment
    * Select the option "Use Git and optional Unix tools from the Command Prompt".
* Choosing the SSH executable
    * Select the option "Use bundled OpenSSH".
* Choosing HTTPS transport backend
    * Select the option "Use the OpenSSL library".
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

You should now be able to use `git`.

#### Installing Node.js

* Download Node.js from the [Official Node.js page](https://nodejs.org/en). Select the latest version, not the LTS version. Then run the installation wizard.
* Accept the agreement and continue to select the installation folder, you may choose any folder you like, but we recommend to stick with the default `C:\Program Files\nodejs`.
* When prompted for Custom Setup, leave everything as default.
* Tools for Native Module
    * On the window to install native tools, be sure to select the "Automatically install the necessary tools" option. And hit install.

This will not only install Node.js but also additional tools, including the `chocolatey` package manager, a `C/C++ compiler` and `python`. This will be installed later in a terminal window. When prompted in the terminal window, be sure to press the ENTER key every time. If the "Do you want to allow changes in the system" prompt appears, choose "Yes".

### Set the execution policy level

You will be using Windows PowerShell to execute scripts and others. In order to be able to execute everything you will need to set up your execution policy level as to bypass the signature requirements.

Open a PowerShell terminal and execute:

```sh
Set-ExecutionPolicy Bypass -Scope LocalMachine
Set-ExecutionPolicy Bypass -Scope CurrentUser
```

### Windows for WSL users

If you are using **Windows Subsystem for Linux (WSL)**, you should install in the same way as a Linux user using the WSL terminal.

We recommend to install the **Ubuntu** version for WSL, as it's proven to work.

---------------------------------------------------------------------

## Common steps

This steps should be followed in any system. You should be able to execute the presented commands from the shell, Terminal or PowerShell (according CLI depending on your system). In case any of them cannot run, you should re-install the corresponding tool, or verify your `PATH` variable to check that the installation has included the binaries into the `PATH`.

### Verify installation and setup

* Verify that `git` is installed:

```sh
git --version
```

* Verify that `node` is installed:

```sh
node --version
```

* Verify that `npm` is installed:

```sh
npm --version
```

Then, configure the global information for Git:

```sh
git config --global user.name "John Doe"
git config --global user.email "john-doe@company.com"
```

Then you can install the rest of the environment.

### Install Visual Studio Code

Visual Studio Code (VSCode for short) is a text editor that can be extended to transform it into a full fledge IDE. Although you may use any IDE that you want, most of us make use of VSCode, and most project's include configurations for setting up the VSCode environment automatically when you open the folder.

Some systems include VSCode in their software store (You can find it in the Windows Store if you are using Windows, in some Software applications on Linux, and the App Store on macOS). The easiest way however is to download the binaries from the [Official Visual Studio Code Download Page](https://code.visualstudio.com/download) which provides binaries for most of the operating systems and architectures.

Follow the installation wizard with default setup if prompted.

### Install n

`n` is a tool that allows to manage the version of `Node.js` installed, and switch to different versions, update and others. `n` is installed through `npm`. Install it globally by running:

```sh
npm install --global n
```

After that, you should be able to execute the `n` command in your terminal.

### Be sure to always use latest versions of Node.js and npm

You should be sure to run the latest versions of `npm` and `Node.js`. This can be executed every now and then, and usually `npm` will warn you when there is a new version of the tool to install.

Run the following to update `node`:

```sh
n latest
```

You should now have the latest version of node that you can verify through `node --version`.

You may also need to update `npm`, which you can do:

```sh
npm update --global npm
```

### Installing Gobstones-scripts globally

If you need to create new projects from scratch, you may want to delegate the process into `gobstones-scripts`. For that, you may need to install the tool globally. You can do it by running the following command:

```sh
npm install --global @gobstones/gobstones-scripts
```

Note that you may not require this if you are not needed to create new projects.

---------------------------------------------------------------------

## Downloading existing projects

To download and execute existing projects from **GobstonesWeb2** you should clone the repository from **GitHub**. Go to [Gobstones organization at GitHub's](https://github.com/gobstones) and choose the repository you want to download.

Then clone it using your terminal. Navigate to the location you want to download the project and execute:

```sh
git clone git@github.com:gobstones/ < project-name > .git
```

Replacing _< project-name >_ with the corresponding project name.

> If you are using WSL you should open a WSL terminal, not a simple
> PowerShell terminal. If you are using Windows without WSL you can
> open a PowerShell terminal.
>
> In WSL the folder where the project is downloaded is mapped to a
> older in your file system. Be sure to register which folder it is,
> as you may need it later.

Then move to the project folder in your terminal and download the dependencies by running:

```sh
npm install
```

You can now start running the project, but you may want to open it with **Visual Studio Code**. Open VSCode and then select the option to **Open folder**. Select the folder in which you have downloaded the project and open it.

> If this is the first time opening a **GobstonesWeb2** project in VSCode, you may be prompted to install several add-ons on your editor. Do install them all.

When working on VSCode it's way easier to use the integrated terminal console to work with your project. We recommend you select the option "Terminal -> New Terminal" or "Console -> New Console" from the menu, to use the bottom drawer as a terminal.

> If using WSL you should use the `><` icon on the lower left corner
> of the window, and select `New WSL Window`. The icon on the lower
> left corner should change to `>< WSL: <system-name>`.

---------------------------------------------------------------------

## Testing that projects are working correctly

You may check that all commands run properly on the new project. On the VSCode terminal, execute the following commands and verify that everything produces a satisfactory output.

```sh
npm start dev
npm start build
npm start test
npm start doc
```

If something is not working, be sure to contact us by [Creating a new issue on the Gobstones-guidelines project](https://github.com/gobstones/gobstones-guidelines/issues) so we can improve this guide.

---------------------------------------------------------------------

## Toggle debug mode

You may require to debug your code. This can be easily achieved in VSCode by setting breakpoints, which can be done by clicking on the gutter of any file.

Then, just toggle the \_"Debug: Toggle Auto Attach" option, which you can do by accessing the **Command Palette** (Ctrl+Shift+P or Cmd+Shift+P) and selecting the option. You can run it again to disable the auto connect feature.

If you select the "Always" option, then you will need to reload your built-in terminal (this will be marked by a yellow warning sign in your terminal icon). After that, any command you execute through npm will be ready to be debugged.
