---
title: Viber
date: "2017-12-14"
---

# Build your first Viber bot

After setting up and getting the authorization token, you should fill it in [viber-hello-world](https://github.com/Yoctol/bottender/tree/master/examples/viber-hello-world/index.js). The following is part of sample code.

```js
const url = '__FILL_URL_HERE__';

const bot = new ViberBot({
  accessToken: '__FILL_YOUR_TOKEN_HERE__',
});
```

Run your server and talk to the Viber bot. It works!

### Full example

Here is the complete example for [viber-hello-world](https://github.com/Yoctol/bottender/tree/master/examples/viber-hello-world/index.js).

```js
const { ViberBot } = require('bottender');
const { createServer } = require('bottender/express');

const bot = new ViberBot({
  accessToken: '__FILL_YOUR_TOKEN_HERE__',
});

bot.onEvent(async context => {
  await context.sendText('Hello World');
});

const server = createServer(bot);

server.listen(5000, () => {
  console.log('server is running on 5000 port...');
});
```

## Events

Bottender supplies several types of event. You are able to access them via `context.event`.  
For more information, check [Event Reference](./APIReference-Event).

### Viber-specific context event

* isMessage
* isText
* isPicture
* isVideo
* isFile
* isSticker
* isContact
* isLocation
* isSubscribed
* isUnsubscribed
* isConversationStarted
* isDelivered
* isSeen
* isFailed
* text
* picture
* ...

more on [Event Reference](./APIReference-Event).

Example:

```js
bot.onEvent(async context => {
  if (context.event.isText) {
    await context.sendText(`I know this is a text: ${event.text}.`);
  } else if (context.event.isPicture) {
    await context.sendText('I know this is a picture.');
  } else {
    await context.sendText('I do not understand.');
  }
});
```

## Send APIs

After your bot receives the request from Viber, you can use context send APIs to interact with users.

### Viber-specific context send API

* sendMessage
* sendText
* sendPicture
* sendVideo
* sendFile
* sendContact
* sendLocation
* sendURL
* sendSticker
* sendCarouselContent

more on [ViberContext Reference](./APIReference-ViberContext).

Example:

```js
bot.onEvent(async context => {
  await context.sendText('Hello World!');
  await context.sendPicture({
    text: 'Photo description',
    media: 'http://www.images.com/img.jpg',
    thumbnail: 'http://www.images.com/thumb.jpg',
  });
  await context.sendContact({
    name: 'Itamar',
    phone_number: '+972511123123',
  });
  await context.sendURL('http://developers.viber.com');
  await context.sendSticker(46105);
});
```

## References

* [Messaging-apis-viber](https://github.com/Yoctol/messaging-apis/tree/master/packages/messaging-api-viber)
* [Official Viber Page](https://www.viber.com/)
* [Official Viber Bot API](https://developers.viber.com/docs/api/rest-bot-api/)