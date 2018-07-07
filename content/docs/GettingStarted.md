---
title: Getting Started
date: "2017-10-17"
---

## Requirements

Bottender highly depends on [async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) syntax, so you must make sure your runtime meets the following requirements:

- node >= 7.6

## Installing Bottender

To start using it, install `bottender` globally from the npm registry:

```sh
npm install -g bottender
```

or install by yarn:

```sh
yarn global add bottender
```

## Initialize

After installed, we can start to create new bot with `bottender init` command:

![](https://user-images.githubusercontent.com/3382565/32279006-6a537d14-bee5-11e7-9b23-48289bd29641.png)

This will create a folder with a `bottender.config.js` file within:

```js
const { ConsoleBot } = require('bottender');

const bot = new ConsoleBot();

bot.handle(async context => {
  await context.sendText('Hello World');
});

bot.createRuntime();
```

We can skip over this file and jump to see the result of the execution:

```sh
npm run dev
```

![](https://user-images.githubusercontent.com/3382565/31601791-abf0746a-b220-11e7-893a-fba68923920e.png)

As you can see, we just got a bot that always reply "Hello World" in the console.

## Teach Bot to Echo

Open the file and edit the following lines of code:

```diff
bot.handle(async context => {
- await context.sendText('Hello World');
+ if (context.event.isText) {
+   await context.sendText(context.event.text);
+ }
});
```

And the server will be restarted automatically.

![](https://user-images.githubusercontent.com/3382565/31601795-ac3f1f02-b220-11e7-99d0-513accf40460.png)

That's it!

## Next Steps

You just created your first bot with Bottender! To dive deeper into bot development, you may want to determine the intents behind the user saying. For more information on intent understanding, [check out its documentation](./Guides-Intents).
