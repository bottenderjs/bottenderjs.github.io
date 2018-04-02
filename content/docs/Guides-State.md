---
title: State
date: "2018-04-02"
---

A state is an object inside [session](./Guides-Session). You can manipulate the state by the following APIs.

## Usage

### bot.setInitialState(Object)

To set the initial state of conversation.

### context.state

To get session data.

### context.setState(Object)

To store data into session which is (generally) serialized as JSON by the store, so nested objects are typically fine.

### context.resetState()

To reset all data in session to initial state.

For example, we can put user's nickname in session and call it later:

```
User > Hi
Bot  > Hi, what's your nickname?
User > Tim
Bot  > Hello Tim
```

```js
// Bot will use memory session store as default if you don't assign sessionStore.
bot.setInitialState({
  asking: false,
  nickname: null,
});

bot.onEvent(async context => {
  if (context.state.asking) {
    context.setState({ nickname: context.event.text, asking: false });
    await context.sendText(`Hello ${context.state.nickname}`);
  } else {
    context.resetState();
    context.setState({ asking: true });
    await context.sendText("Hi, what's your nickname?");
  }
});
```

See more details at the [with-state example](https://github.com/Yoctol/bottender/tree/master/examples/with-state).
