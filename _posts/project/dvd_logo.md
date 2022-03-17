---
layout: project
name: DVD Logo
short_description: Animação da logo de DVD
category: Desenvolvimento
tags:
  - svelte
  - javascript
icon: https://jorgen-jr.github.io/dvd-logo/assets/dvd_logo.svg
link: dvd_logo
theme_color_primary: "#f0a1bd"
theme_color_fontcolor: ""
active: true
---
# DVD Logo

> Just playing a little bit with svelte. Made the DVD Logo animation.

### Usage

You can access [through this link](https://jorgen-jr.github.io/dvd-logo/), where you can set up your own logo, set the speed, size and toggle fullscreen.

### Preview

[![](https://github.com/Jorgen-Jr/dvd-logo/raw/main/preview.png)](https://jorgen-jr.github.io/dvd-logo/)

### Options

You can do the following. Nothing will be saved.

* Speed up the animation
* Set your own image
* Toggle fullscreen
* Set the size of the logo

## Running Locally

Download the repository and install the dependencies...

```bash
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:8080](http://localhost:8080). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).