---
title: "First post"
date: "2017-10-24"
author: [yoctol]
---

We're excited to announce the release of Bottender v0.x!

## Changelog

- TBD

## Example

```js
const { ConsoleBot } = require('bottender');

const bot = new ConsoleBot();

bot.onEvent(async context => {
  await context.sendText('Hello World');
});

bot.createRuntime();
```
