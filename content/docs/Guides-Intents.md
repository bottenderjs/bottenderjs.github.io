---
title: Intents
date: "2017-10-13"
---

# Intents

## Events

// Todo:  
// explain event
// event list links ...Message, Postback

Every time the handler is called with an incoming request, parsed event instance will be attached to context so that you can access it via `context.event`.

## Pattern Matching

### String Comparison

Here's an example handler which only handles specific commands:

```js
bot.onEvent(async context => {
  if (context.event.isText) {
    switch (context.event.text) {
      case '/start':
        await context.sendText('Running....');
        break;
      case '/help':
        await context.sendText(`
/start   start to run
/help    quick help on <command>
        `);
        break;
      default:
        await context.sendText(`${context.event.text} is not a valid command.`);
    }
  }
})
```

### Regular Expression

Exactly matching looks a little rigid. Consider using some equality operators to determine whether receiving greeting words or not:

```js
bot.onEvent(async context => {
  if (context.event.isText) {
    const { text } = context.event.message;
    if (text === 'hello' || text === 'hi') {
      // ...
    }
  }
});
```

It only matches `hello` and `hi`. Neither `Hello` nor `hi~` would work in the above example.

We can use [regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) for more general pattern matching. It will be helpful when building rule-based logic.

```js
bot.onEvent(async context => {
  if (context.event.isText) {
    if (/^h(ello|i)/i) {
      // ...
    }
  }
});
```

Now, not only `hello`, `hi` but also `Hello`, `hi~` will be matched.

## Leverage NLU Technologies

Microsoft's [LUIS](https://www.luis.ai/)
