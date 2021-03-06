# build-iced

[![apm](https://img.shields.io/apm/l/build-iced.svg?style=flat-square)](https://atom.io/packages/build-iced)
[![apm](https://img.shields.io/apm/v/build-iced.svg?style=flat-square)](https://atom.io/packages/build-iced)
[![apm](https://img.shields.io/apm/dm/build-iced.svg?style=flat-square)](https://atom.io/packages/build-iced)
[![Travis](https://img.shields.io/travis/idleberg/atom-build-iced.svg?style=flat-square)](https://travis-ci.org/idleberg/atom-build-iced)
[![David](https://img.shields.io/david/idleberg/atom-build-iced.svg?style=flat-square)](https://david-dm.org/idleberg/atom-build-iced)
[![David](https://img.shields.io/david/dev/idleberg/atom-build-iced.svg?style=flat-square)](https://david-dm.org/idleberg/atom-build-iced?type=dev)

[Atom Build](https://atombuild.github.io/) provider for `iced`, compiles IcedCoffeeScript into JavaScript. Supports the [linter](https://atom.io/packages/linter) package for error highlighting.

## Installation

### apm

Install `build-iced` from Atom's [Package Manager](http://flight-manual.atom.io/using-atom/sections/atom-packages/) or the command-line equivalent:

`$ apm install build-iced`

### Using Git

Change to your Atom packages directory:

```bash
# Windows
$ cd %USERPROFILE%\.atom\packages

# Linux & macOS
$ cd ~/.atom/packages/
```

Clone repository as `build-iced`:

```bash
$ git clone https://github.com/idleberg/atom-build-iced build-iced
```

Inside the cloned directory, install Node dependencies:

```bash
$ yarn || npm install
```

## Usage

### Build

Before you can build, select an active target with your preferred build option.

Available targets:

* `IcedCoffeeScript` — compile script (<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>B</kbd>)
* `IcedCoffeeScript --map` — compile script and create a map (<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Cmd</kbd>+<kbd>B</kbd>)
* `IcedCoffeeScript --bare` — compile script without the top-level function safety wrapper (<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd>)
* `IcedCoffeeScript (user)` — compile script with arguments specified in the package settings

### Shortcuts

Here's a reminder of the default shortcuts you can use with this package:

**Select active target**

<kbd>Cmd</kbd>+<kbd>Alt</kbd>+<kbd>T</kbd> or <kbd>F7</kbd>

**Build script**

<kbd>Cmd</kbd>+<kbd>Alt</kbd>+<kbd>B</kbd> or <kbd>F9</kbd>

**Jump to error**

<kbd>Cmd</kbd>+<kbd>Alt</kbd>+<kbd>G</kbd> or <kbd>F4</kbd>

**Toggle build panel**

<kbd>Cmd</kbd>+<kbd>Alt</kbd>+<kbd>V</kbd> or <kbd>F8</kbd>

## License

This work is licensed under the [The MIT License](LICENSE.md).
