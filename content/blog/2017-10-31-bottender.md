---
title: "Bottender"
date: "2017-10-31"
author: [chentsulin, tw0517tw]
---

We're very proud to open-source [Bottender](https://github.com/yoctol/bottender), a JavaScript framework for cross-platform bots, built on top of [Messaging-APIs](https://github.com/Yoctol/messaging-apis) and lots of great tools from the JavaScript community!

![bottender logo](../images/blog/logo-600x600.png)

To start using it, install `bottender` globally from the npm registry:

```sh
npm install -g bottender
```

And enter interactive bot creation process with: 

```sh
bottender init
```

After answering a few questions, a new bot will be created for you.

![bottender init screenshot](../images/blog/init-screenshot.png)

<br />

## Motivation

JavaScript's event-based mechanism is good at developing dialogue system, but the callback-based development approach is a disaster for asynchronous state maintenance and error handling. However, the JavaScript ecosystem has been improved a lot. Thanks to Babel, Node.js and V8 engine, we have modern and async friendly way to handle all the stuff.

In recent years, many messaging platforms have emerged. Each platform has its own characteristics and features, but some of them are not friendly for developers. Therefore, we decide to create a consistent development experience in a transparent, extensible and fully controlled way.

Here comes Bottender.

<br />

## Only JavaScript. Handler is a function

The advantages of this approach over similar models is that you can do whatever you want in your function. And because of that, your entire system remains highly composable and testable. 

```js
bot.onEvent(context => {
  if (context.event.isText) {
    console.log('Cool. You sent a text to me.');
  } 
});
```

Furthermore, this handler function are fully testable without pain. Your test suite can simply import and test it.

<br />

## Control Asynchronous Flow using Async Functions

When it comes to database queries or asynchronous API calls, modern async/await syntax give you great advantage to control your logic. Bottender's first class async/await support let you simply pass in any `async` handler. Farewell to callback hells.

```js
bot.onEvent(async context => {
  if (context.event.text === 'you shoull call api') {
    const result = await callSomeAsyncAPI(context.event.text);
    await context.sendText(result);
  } 
});
```

<br />

## Keep Conversation State at Session Store

Conversation state can be initially defined with `bot.setInitialState()`, and can be modified during conversation using `context.setState()`. The state control is handled by underlying session store.

```js
bot.setInitialState({
  todos: [],
});

bot.onEvent(context => {
  if (context.event.isText) {
    context.setState({
      todos: context.state.todos.concat(
        context.event.text
      ),
    });
  }
});
```

You can use `memory` session store in development, and replace it with persistence session stores on production.

```js
const { FileSessionStore } = require('bottender');

const bot = new MessengerBot({
  sessionStore: new FileSessionStore(),
});
```

We provide not only `file` session store but also `redis` and `mongo` session stores. You can even submit your session store by following the interface implementation.

<br />

## Simple deployment

To put your bot logic online, you need a HTTP server. Bottender provides simple `createServer()` function that do the trick for you, the server created can be extended as well.

```js
const createServer = require('bottender/express');

const server = createServer(bot);

server.listen(3000, () => {
  console.log('bot server is running on 3000 port');
});
```

Bottender supports four Node.js server frameworks, simply require corresponding `createServer()` from submodules.

```js
// import from express
const createServer = require('bottender/express');

// import from koa
const createServer = require('bottender/koa');

// import from micro
const createServer = require('bottender/micro');

// import from restify
const createServer = require('bottender/restify');
```

Since Bottender works as a Node.js HTTP server, you can easily deploy your bots to PaaS like [Heroku](https://www.heroku.com/) or [Now](https://zeit.co/now). For more details, check out the [Deployment](./docs/Guides-Deployment) guide.

