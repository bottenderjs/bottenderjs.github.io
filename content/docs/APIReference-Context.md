---
title: Context
date: "2017-12-04"
---

A Bottender Context encapsulates many helpful methods into a single object like session, client from [messaging-apis](https://github.com/Yoctol/messaging-apis), event, etc., which makes you easier to develop a chatbot system on different platform.

## General Methods

|             Property              |                                                                                                                                                                                                                                                                                                Return                                                                                                                                                                                                                                                                                                |                           Description                           |
| :-------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------: |
|             platform              |                                                                                                                                                                                                                                                                                                string                                                                                                                                                                                                                                                                                                |                    The name of the platform.                    |
|              client               | Messenger: [MessengerClient](https://github.com/Yoctol/messaging-apis/tree/master/packages/messaging-api-messenger)<br> LINE: [LineClient](https://github.com/Yoctol/messaging-apis/tree/master/packages/messaging-api-line)<br> Slack: [SlackClient](https://github.com/Yoctol/messaging-apis/tree/master/packages/messaging-api-slack)<br> Telegram: [TelegramClient](https://github.com/Yoctol/messaging-apis/tree/master/packages/messaging-api-telegram)<br> Viber: [ViberClient](https://github.com/Yoctol/messaging-apis/tree/master/packages/messaging-api-viber)<br> Console: ConsoleClient | The client instance.<br> Return value depends on your platform. |
|               event               |                                                                                                                                                                                                                           Messenger: MessengerEvent<br> LINE: LineEvent<br> Slack: SlackEvent<br> Telegram: TelegramEvent<br> Viber: ViberEvent<br> Console: ConsoleEvent                                                                                                                                                                                                                            | The event instance.<br> Return value depends on your platform.  |
|              session              |                                                                                                                                                                                                                                                                                                Object                                                                                                                                                                                                                                                                                                |                The session state of the context.                |
|   [typing](#typingmilliseconds)   |                                                                                                                                                                                                                                                                                               Promise                                                                                                                                                                                                                                                                                                |           Delay and show indicators for milliseconds.           |
| [sendText](#sendtexttext-options) |                                                                                                                                                                                                                                                                                               Promise                                                                                                                                                                                                                                                                                                |             Send text to the owner of the session.              |

## Messenger

These are other methods on Messenger. See more details at [APIReference-MessengerContext](https://bottender.js.org/docs/APIReference-MessengerContext).

## LINE

These are other methods on LINE. See more details at [APIReference-LineContext](https://bottender.js.org/docs/APIReference-LineContext).

## Slack

These are other methods on Slack. See more details at [APIReference-SlackContext](https://bottender.js.org/docs/APIReference-SlackContext).

## Telegram

These are other methods on Telegram. See more details at [[APIReference-TelegramContext](https://bottender.js.org/docs/APIReference-TelegramContext).

## Viber

These are other methods on Telegram. See more details at [[APIReference-TelegramContext](https://bottender.js.org/docs/APIReference-TelegramContext).

## Example

Let's use [example](https://github.com/Yoctol/bottender/blob/master/examples/messenger-hello-world/index.js) with Messenger platform.

```js
bot.onEvent(async context => {
  // platform
  console.log(context.platform); // Messenger

  // send text message to user
  await context.sendText('Hello World');
});
```

### `typing(milliseconds)`

| Param        | Type     | Description                                                                                           |
| ------------ | -------- | ----------------------------------------------------------------------------------------------------- |
| milliseconds | `Number` | First, User will see bot is typing. Second, wait for milliseconds. Then bot's typing mode will close. |

```js
bot.onEvent(async context => {
  await context.typing(100); // bot turn on typing mode and wait 0.1 secs then close.
  await context.sendText('Hello World');
});
```

### `sendText(text, options)`

similar as [client.sendText(userId, text [, options])](https://github.com/Yoctol/messaging-apis/tree/master/packages/messaging-api-messenger#sendtextuserid-text--options)

```js
// MessengerBot
bot.onEvent(async context => {
  const userId = context.session.user.id;

  // they are doing same things
  await context.sendText('Hello Messenger');
  await context.client.sendText(userId, 'Goodbye Messenger');
});
```

```js
// LineBot
bot.onEvent(async context => {
  const userId = context.session.user.id;

  // they are doing same things
  await context.sendText('Hello LINE');
  await context.client.pushText(userId, 'Goodbye LINE');
});
```
