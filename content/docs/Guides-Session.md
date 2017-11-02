---
title: Conversation Session
date: "2017-10-11"
---

A session is a place to store data that you want to access to across requests. Each user that talks to your bot has a unique session. You can use sessions to store and access user data as they talk to your bot.

## Usage

### bot.setInitialState(Object)

To set the initial state of coversation.

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
})
```

See more details at [example](https://github.com/Yoctol/bottender/tree/master/examples/with-state)

## Session Expiration

You are able to set expired time for session optionally. The default value of expiration is **one year** after `SessionStore` object is created.  
The expiration should be sent as a **Number of seconds** when you are initializing a `SessionStore` object.

Here is an example for creating a `MongoSessionStore` object with expired time:
```js
// Session will expire after 10 seconds
const { ConsoleBot, MongoSessionStore } = require('bottender');

const bot = new ConsoleBot({
  sessionStore: new MongoSessionStore(
    'mongodb://localhost:27017/',
    {
      collectionName: 'session',
    },
    10
  ),
});
```

## Use Different Session Store

Session store is a place where session data is being stored on server.

We implement following kinds of session store. All kinds of bots will use memory session store as default.

- **memory** - sessions are stored in memory with [LRU cache](https://github.com/isaacs/node-lru-cache) and will not be persisted. See [example](https://github.com/Yoctol/bottender/tree/master/examples/with-memory-session)
- **file** - sessions are stored in `.sessions` by default. See
  [example](https://github.com/Yoctol/bottender/tree/master/examples/with-file-session)
- **mongo** - sessions are stored in a mongo database. See
  [example](https://github.com/Yoctol/bottender/tree/master/examples/with-mongo-session)
- **redis** - sessions are stored in redis based stores. See
  [example](https://github.com/Yoctol/bottender/tree/master/examples/with-redis-session)


## Adding Custom Session Drivers

Your custom session driver should implement the `SessionStore` interface. This interface contains just a few simple methods you need to implement. A stubbed store implementation looks something like this:

```js
// @flow

class Store implements SessionStore {
  init(): Promise<SessionStore> { /* ... */ }
  read(sessionId: string): Promise<Session | null> { /* ... */ }
  write(sessionId: string, data): Promise<void> { /* ... */ }
  destroy(sessionId: string): Promise<void> { /* ... */ }
}
```
