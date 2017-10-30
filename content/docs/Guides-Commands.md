---
title: Commands
date: "2017-10-17"
---

# Commands

The command-line interface included within bottender provides a number of helpful commands.

```sh
bottender
```

Or using `btd` shorthand:

```sh
btd
```

To see all of the available commands, simply use the `--help` option:

```sh
bottender --help
```

Every command has a "help" screen which displays and describes the command's available arguments and options. To view them, simply precede the name of the command with `--help`:

```sh
bottender init --help
```

## Setup

To use Bottender cli tools, you need to install `bottender` globally:

```sh
npm install -g bottender
```

Or using `npx` to get local `bottender` installation:

```sh
npx bottender 
```

Some commands will need a `bottender.config.js` to be properly configured.

## Create Bot

You can use interactive cli to create your bots:

```sh
bottender init
```

After answer a few questions, a new bot will be ready for you. 

## Platform Specific Commands

To use platfrom specific commands, just type name of platform behind the `bottender` command.

For example, to set messenger profile for your bots:

```sh
bottender messenger profile set
```

Or to get telegram webhook information:

```sh
bottender telegram webhook get
```

Provide `--help` to see the details.
