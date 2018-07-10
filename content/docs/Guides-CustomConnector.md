---
title: CustomConnector
date: "2018-07-09"
---

To create a custom connector, you must implement following classes: 

- `CustomConnector` 
- `CustomContext` 
- `CustomEvent` 
- `CustomClient` (optional) 

## CustomEvent

Event is a parser for the platform raw event. For example, if text messages have following format on the custom platform:

```js
{
  user: {
    id: '123456',
  },
  message: {
    text: 'Hello, world',
  },
}
```

You can write a `CustomEvent` class to hide the underlying complex raw event detail:

```js
class CustomEvent {
  constructor(rawEvent) {
    this._rawEvent = rawEvent;
  }

  get rawEvent() {
    return this._rawEvent;
  }

  get isText() {
    return !!(this._rawEvent.message && this._rawEvent.message.text)
  }

  get text() {
    if (this.isText) {
      return this._rawEvent.message.text;
    }
    return null;
  }
}
```

Following getters are commonly cross-platform implemented:

- `rawEvent`
- `isMessage`
- `message`
- `isText`
- `text`
- `isPayload`
- `payload`

Feel free to implement platform only getter on it.

```js
class CustomEvent {
  // ...
  get isSuperCoolSomething () {}
}
```

## CustomContext

Context is an abstraction of current conversation context. Every context instance includes event, session, state, and all available context methods:

```js
{
  event,
  session,
  state,
  ...contextMethods,
}
```

You can write those context side effect methods directly or wrap another `CustomClient` class to do the job.

```js
class CustomContext extends Context {
  constructor({
    event,
    session,
    initialState,
  }) {
    super({ event, session, initialState });
  }

  get platform() {
    return 'custom';
  }

  async sendText(text) {
    // ...
  }

  async typing(milliseconds) {
    // ...
  }
}
```

Following methods are commonly cross-platform implemented:

- `sendText`
- `typing`

## CustomConnector

Connector is a bridge between bot and platform. You need to implement following methods to tell bot how to find session key from request and create conversation context.

### getUniqueSessionKey

Find unique session identifier, for example, user id, group id, channel id...and so on.

### updateSession

If you need to prefetch something data or do some check for the session, you can put the logic here.

### mapRequestToEvents

One request may have one or more than one raw events. For example, Messenger and LINE batch events into one request in some situation. Accordingly, you must return array of event instances in this method.  

### createContext

Context factory.

Basic reference implementation:

```js
class CustomConnector {
  get platform() {
    return 'custom';
  }

  getUniqueSessionKey(body) {
    return body.user.id;
  }

  updateSession(session) {
    // do nothing
  }

  mapRequestToEvents(body) {
    return [new CustomEvent(body)];
  }

  createContext({
    event,
    session,
    initialState,
  }) {
    return new CustomContext({
      event,
      session,
      initialState,
    });
  }
}
```

Finally you can use `CustomConnector` as connector to create your bot:

```js
const { Bot } = require('bottender');

const bot = new Bot({
  connector: new CustomConnector({ /* */ }),
})
```

That's it!