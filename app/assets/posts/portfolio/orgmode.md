## Org(anization) Mode
VS Code Org Mode is an extension for Visual Studio Code inspired by the venerable [Org mode for Emacs](http://orgmode.org/). Org lets you keep notes, maintain TODO lists, and author documents, all in plain text.

## Concept
My good buddy Jason Reeder, a prominent Emacs and Org mode user in our circle, was the one who conceived of this project. Being comfortable with Visual Studio Code and wanting to extend it myself, I was more than excited to work on this project. While the extension isn't completed, it contains enough functionality to be useful. It currently has over a thousand downloads from the VS Marketplace, which makes it the largest project I've contributed to so far. It appears the reach of Org mode is much further than I thought.

## What it can do
There's no point describing it in detail here if Jason's already done a [bang up job](https://jsonreeder.github.io/vscode-org-mode/) of that already.

## What I did
I had two major contributions to this project.

### Getting off the ground
The first was getting started in the first place. With none of us having any experience making extensions for anything, we had nothing to go on. While I do think the Visual Studio docs are helpful, there's a lot of information that's either left out or really difficult to find for one reason or another. I discovered Yeoman which can scaffold a VSCode extension, as well as using the `vsce` tool to publish the extension to the store. There was a lot of trial and error, much of which was spent directly in the project's `package.json` file, where a lot of initial configuration and triggers are set.

### Date-Time
The second contribution was directly involved with the code: Dates. One really cool feature of Org mode is the ability to create a date-time string wrapped in brackets, and if it's formatted correctly, it gets its own syntax highlighting. But that's not the cool part. Using a single action (or keystroke), the date-time text under the cursor can be incremented or decremented by a single day and keeps track of the proper weekday. While one idea floating around was to allow the section of date-time under the cursor to be specifically what is modified, it wouldn't be exactly what the Org mode spec specifies.

I'm very proud of this project. It was my first work done in TypeScript, my first extension, my first successful group endeavor, and is actually used by other people. This sucked up a week of my life, and to watch it being used by hundreds of nerds around the world makes my heart sing.