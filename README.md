# SolarStats Plugin Template

Template code for a [SolarStats](https://github.com/Solar-Tweaks/SolarStats) plugin

## Setup

```bash
$ npm install
```

## Build

```bash
$ npm run build
```

## Watching

For developement purposes you might need to automatically
build the project every time you make a change. This is possible
by using the following command

```bash
$ npm run watch
```

You also might need to automatically copy the built plugin to your SolarStats plugins folder for testing. You can do so by specifing the `devPath` key (inside `solarstats` key inside the `package.json` file). Everytime the webpack compiles your plugin it'll also move the built plugin to the folder you specified.
