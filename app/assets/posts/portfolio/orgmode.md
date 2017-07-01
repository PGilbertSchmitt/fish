** About
VS Code Org Mode is an extension for Visual Studio Code inspired by the venerable [[http://orgmode.org/][Org mode for Emacs]]. Org lets you keep notes, maintain TODO lists, and author documents, all in plain text.

This wiki is meant to document the functionality provided by the extension. In designing the extension, the intention was to stick as close as possible to the original functionality and phraseology of Emacs Org mode. In keeping with that decision, these docs follow a similar structure to [[http://orgmode.org/manual/index.html][the Org Manual]] and borrow some descriptions.

For each action in VS Code Org Mode, we provide the title, the command, and the key. The *title* is the human readable text used to access the action from the command palette. The *command* is the name of the TypeScript function used in defining custom keyboard shortcuts. The *key* is the default keybinding for invoking the action.

For specifics, see the pages listed to the right (=-->=).

The Extension is available on the [[https://marketplace.visualstudio.com/items?itemName=tootone.org-mode][VS Code Marketplace]].
** Installation
Org Mode can be installed in a number of ways:
  - Launch VS Code Quick Open (=⌘+P= or =^+P=) and type ~ext install org-mode~.
  - Search for =org mode= in the =Extensions= view in VS Code.
** Activation
After installation, the extension can be activated in two ways:
1. Save a file with the extension =.org=. 
2. Change the language mode to =Org= by either
    - Clicking in the lower right corner to the left of the smiley face and selecting =Org=.
    - Typing =change language mode= into the command palette.
    - Using the default shortcut
        - Linux / Windows: =^+k m=
        - Mac: =⌘+k m=
** Feedback
VS Code Org Mode is an open-source project. We welcome contributions and feature requests. See the [[https://github.com/jsonreeder/vscode-org-mode][repo]] for contribution guidelines.