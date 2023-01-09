/**
 * ## Installing on **WSL** for use with **VSCode** on **Windows**
 * 
 * This brief tutorial is an explanation for beginners on how to use 
 * **VSCode**, using **WSL** on **Windows**. 
 * You may read about [**VSCode** and **WSL**](https://code.visualstudio.com/docs) 
 * if you are not familiar with them, where a clear explanation of how to 
 * install both **VSCode** and **WSL** from scratch is given.
 * 
 * You may test the packaged either using **VSCode** from **Windows** or 
 * on a new **WSL** window, but to be able to debug it, it is best to use a 
 * new **WSL** window.
 * 
 * Let's go to the installation. Skip any steps that you already performed.
 * 
 * 1. Install **VSCode** and **WSL** on your machine.
 * 
 * 2. Then you will need to install `Node.js` on **WSL**. 
 *    For that, run 
 * 
 *     ```sudo apt install npm``` 
 * 
 *    (after updating your `apt` with `sudo apt-get update`) on a **WSL** terminal. 
 *    Check the success of installation with `node -v`.
 * 
 * 3. As you will also use `Typescript`, you will need to install it as well, by running 
 * 
 *    ```npm install -g typescript```
 * 
 *    Check the success of installation with `tsc -v`.
 * 
 * 4. Then clone (or fork) the repository you want to work with. 
 *    If you are not going to debug, you may use any **Windows** directory, 
 *    but if you want to debug, you will need to clone on the **WSL** file 
 *    system (usually `\\wsl.localhost\Ubuntu\home\<username>`).   
 *    The tool to manage `git` repositories is built-in inside WSL, but if 
 *    you are using **Windows**, you may need to install and configure a 
 *    [**GIT manager for Windows**](https://gitforwindows.org/).
 * 
 *     **NOTE:** I tried to debug the component from inside **VSCode** running 
 *               it directly on **Windows**, but I failed, so I went for the 
 *               conservative approach.
 * 
 *    Remember to follow the guidelines described in 
 *    [**Code standards and workflow**](./code-standards-and-workflow.md) 
 *    regarding the use of branches and pull-requests if you are going to experiment.
 * 
 * 5. The next step is to open **VSCode**, and connect to a remote host to be able to run it inside **WSL**. 
 *    For that you use the `><` icon on the lower left corner of the window, and select `New WSL Window`. 
 *    The icon on the lower left corner should change to `>< WSL: Ubuntu`.
 * 
 * 6. The following step is to open the package folder using `Open Folder` (either from the `File` menu, the button on the `Explorer`, the link in the `Getting started` window, or by using the keyboard shortcut -- by default, `CTRL-K CTRL-O`).
 * 
 * 7. Perhaps before proceeding with the final step, you may want to perform an update, running first 
 *    
 *    ```npm update```
 * 
 * 8. The final step is installing the component, by fetching all the dependencies. 
 *    For that, open a console (`CTRL-%60`), and run 
 *    
 *    ```npm install```
 * 
 * Voilà. You are now ready to start exploring the package.
 * 
 * [Back to Technologies Used](./technologies-used.md).
 * [Back to Guidelines](../README.md).
 * 
 * @module 02_01-Instructions-to-install-a-repository-from-scratch
 * 
 */
export class installation_tutorial {
   name: string = 'installation-tutorial';
   type: string = 'section';
   parent: string = 'technologies-used';
   children: any[] = [ ];
};
