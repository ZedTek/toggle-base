# Toggle Bot Framework

Toggle is the new bot framework that aims to make bot development easy. Built on discord.js, Toggle is not only stable, but is also very powerful. 

**Note:** This is the CLI-only version of Toggle. If you want a GUI, check out [toggle-gui](https://github.com/ZedTek/toggle-gui) (coming soon)

```
DISCLAIMER! PLEASE READ!:

Toggle (OSS and proprietary versions) is provided AS-IS, with no warranty, express or implied, under ANY circumstances. Support may be given, however it is not guaranteed.

Toggle gives users the option to import arbitrary code and run it alongside Toggle (Toggle Modules). To ensure the security of your system, ensure the following:

* Make sure that you trust the developer of said module(s).
* Read through the code of the module(s) to ensure there is no malicious intent.
* If your module does things that you don't know how to do or undo yourself, you shouldn't probably be using it.
* BEST PRACTICE: Run Toggle on a device separate from your main working computer. We suggest a Raspberry Pi for this.

ZedTek, its affiliates, and its contributors assume no responsibility for any damages caused by your use of Toggle. You use the software at your own risk, and you agree not to hold the developers of Toggle liable for any damages, including, but not limited to: System Corruption, Data Loss, Data Leaking, Stolen Documents, or Physical Damages. We hope none of these happen to you, however we aren't in control of third-party developers.
```

Awesome. Now that we have that out of the way, lets get into the fun stuff.

## What is Toggle?

Toggle is a Discord bot framework. You can use the Toggle code to build your own Discord bots using the discord.js library. 

## How is Toggle different than any other Discord bot made with discord.js?

On a fundamental level, it really isn't. Toggle is built on discord.js. The main purpose for Toggle is to help with the following:

1. People who don't want to do all of the basic setup.
2. People who aren't experienced with coding, who still want their own Discord bot.
3. People who want to distribute their own bot-related content or functionality, but it doesn't really constitute making a dedicated bot.

## What do I need to know in order to use Toggle?

1. A fundamental level of how computers work is essential.
2. The basic understanding of the command line, such as tools like `cd`, `mkdir`, `ls`, as well as other tools like `git` and `npm`.
   1. Don't worry if you don't understand some of these. We will show you exactly what to do later.

## How can I get started with Toggle?

Getting started with Toggle is actually pretty simple. Just open a terminal to your directory of choice, and then run this line:

```
git clone https://github.com/ZedTek/toggle-base; cd toggle-base
```

BOOM. You now have your own copy of the Toggle base code, and you can start adding to it. 

### Getting started with Modules.

Toggle is pretty boring on it's own. There really isn't much to do, unless running an example command is your jam. 

ZedTek provides a set of starter modules for you, located at [zedtek-modules](https://github.com/ZedTek/zedtek-modules).

Other developers are encouraged to make their own Toggle Modules. Use the ZedTek Example Module to get started. 

Please be wary of any Modules you download. *(see the disclaimer above)*

**To import Modules:**

1. Find the `module.json` file in the module files.
2. Download the file to the `toggle-base/modules` directory.
3. Start Toggle.

Toggle will use the information from the `module.json` file to automatically download commands from the internet.

**To delete modules:**

Make sure that Toggle is not running. 

1. Open your File Manager of choice, and navigate to the `toggle-base` directory.
2. Delete the module info file from `/modules`.
3. Delete the module directory from `/commands/ext`.
4. Open your terminal and run `npm cache clear --force` to make sure that there are no cached versions of the command files left on your machine.

**To update modules:**

Download the new `module.json` file and follow the same steps as you did to install it the first time.

*Note: You may need to run `npm cache clear --force` before running Toggle to clear any old versions from the cache.*

## Ready to get started?

Awesome. There's a little bit of tweaking we need to do first.

1. Open the `global-template.json` file.
2. Edit the fields using the directions provided.
3. Close the file and rename it to `global.json`.

Great! Let's start Toggle.

1. Open your terminal of choice
2. Navigate to the `toggle-base` directory.
3. Run `npm start`.

That's it! Toggle should be running now! To stop Toggle, just press `Ctrl + C` in the terminal window.

## HELP! I've summoned the antichrist! Get me some holy water!

First of all, calm down Janet. You'll be fine.

If you're referring to your Toggle bot needing to be deleted, you can do that by simply deleting the `toggle-base` directory, and running `npm cache clear --force`.

## I want to run multiple Toggle bots. Is that possible?

Absolutely! just rename the first bot you downloaded to something other than `toggle-base`. Then, rerun the download commands! 

You can run them at the same time as well!

Just open a second terminal window, and follow the start instructions.





(c) ZedTek 2021

No offense to religious people who may or may not be named Janet.

We are not affiliated with the Raspberry Pi Foundation, and reference to their hardware was not sponsored in any way.

