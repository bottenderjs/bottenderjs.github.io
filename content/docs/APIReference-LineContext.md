---
title: LineContext
date: "2018-03-15"
---

* [Reply API](#reply-api)
  * [Imagemap Message](#reply-imagemap-message)
  * [Template Messages](#reply-template-messages)
* [Push API](#push-api)
  * [Imagemap Message](#push-imagemap-message)
  * [Template Messages](#push-template-messages)
* [Content API](#content-api)
* [Profile API](#profile-api)
* [Group/Room Member Profile API](#grouproom-member-profile-api)
* [Group/Room Member IDs API](#grouproom-member-ids-api)
* [Leave API](#leave-api)
* [Rich Menu API](#rich-menu-api)

<a id="reply-api" />

### Reply API - [Official Docs](https://devdocs.line.me/en/#reply-message)

Responds to events from users, groups, and rooms.

## `reply(messages)`

Responds messages to the receiver using reply token.

| Param    | Type            | Description                                                             |
| -------- | --------------- | ----------------------------------------------------------------------- |
| messages | `Array<Object>` | Array of objects which contains the contents of the message to be sent. |

Example:

```js
context.reply([
  {
    type: 'text',
    text: 'Hello!',
  },
]);
```

`replyToken` can only be used once, but you can send up to 5 messages using the same token.

```js
const { Line } = require('messaging-api-line');

context.reply([
  Line.createText('Hello'),
  Line.createImage(
    'https://example.com/original.jpg',
    'https://example.com/preview.jpg'
  ),
  Line.createText('End'),
]);
```

<br />

## `replyText(text)`

Responds text message to the receiver using reply token.

<img src="https://developers.line.me/media/messaging-api/messages/text-bf530b30.png" width="250px" />

You can include LINE original emoji in text messages using character codes. For a list of LINE emoji that can be sent in LINE chats, see the [emoji list](https://developers.line.me/media/messaging-api/emoji-list.pdf).

<img src="https://developers.line.me/media/messaging-api/messages/emoji-b3285d27.png" width="250px" />

| Param | Type     | Description                     |
| ----- | -------- | ------------------------------- |
| text  | `String` | Text of the message to be sent. |

Example:

```js
context.reply('Hello!');
```

<br />

## `replyImage(imageUrl, previewImageUrl)`

Responds image message to the receiver using reply token.

<img src="https://developers.line.me/media/messaging-api/messages/image-167efb33.png" width="250px" /><img src="https://developers.line.me/media/messaging-api/messages/image-full-04fbba55.png" width="250px" />

| Param           | Type     | Description        |
| --------------- | -------- | ------------------ |
| imageUrl        | `String` | Image URL.         |
| previewImageUrl | `String` | Preview image URL. |

Example:

```js
context.replyImage(
  'https://example.com/original.jpg',
  'https://example.com/preview.jpg'
);
```

<br />

## `replyVideo(videoUrl, previewImageUrl)`

Responds video message to the receiver using reply token.

<img src="https://developers.line.me/media/messaging-api/messages/video-a1bc08a4.png" width="250px" />

| Param           | Type     | Description           |
| --------------- | -------- | --------------------- |
| videoUrl        | `String` | URL of video file.    |
| previewImageUrl | `String` | URL of preview image. |

Example:

```js
context.replyVideo(
  'https://example.com/original.mp4',
  'https://example.com/preview.jpg'
);
```

<br />

## `replyAudio(audioUrl, duration)`

Responds audio message to the receiver using reply token.

<img src="https://developers.line.me/media/messaging-api/messages/audio-6290d91b.png" width="250px" />

| Param    | Type     | Description           |
| -------- | -------- | --------------------- |
| audioUrl | `String` | URL of audio file.    |
| duration | `Number` | Length of audio file. |

Example:

```js
context.replyAudio('https://example.com/original.m4a', 240000);
```

<br />

## `replyLocation(location)`

Responds location message to the receiver using reply token.

<img src="https://developers.line.me/media/messaging-api/messages/location-8f9b6b79.png" width="250px" />

| Param              | Type     | Description                            |
| ------------------ | -------- | -------------------------------------- |
| location           | `Object` | Object contains location's parameters. |
| location.title     | `String` | Title of the location.                 |
| location.address   | `String` | Address of the location.               |
| location.latitude  | `Number` | Latitude of the location.              |
| location.longitude | `Number` | Longitude of the location.             |

Example:

```js
context.replyLocation({
  title: 'my location',
  address: '〒150-0002 東京都渋谷区渋谷２丁目２１−１',
  latitude: 35.65910807942215,
  longitude: 139.70372892916203,
});
```

<br />

## `replySticker(packageId, stickerId)`

Responds sticker message to the receiver using reply token.  
For a list of stickers that can be sent with the Messaging API, see the [sticker list](https://developers.line.me/media/messaging-api/messages/sticker_list.pdf).

<img src="https://developers.line.me/media/messaging-api/messages/sticker-cb1a6a3a.png" width="250px" />

| Param     | Type     | Description |
| --------- | -------- | ----------- |
| packageId | `String` | Package ID. |
| stickerId | `String` | Sticker ID. |

Example:

```js
context.replySticker('1', '1');
```

<br />

### Reply Imagemap Message

## `replyImagemap(altText, imagemap)`

Responds imagemap message to the receiver using reply token.

<img src="https://developers.line.me/media/messaging-api/messages/imagemap-dd854fa7.png" width="250px" />

| Param                    | Type            | Description                            |
| ------------------------ | --------------- | -------------------------------------- |
| altText                  | `String`        | Alternative text.                      |
| imagemap                 | `Object`        | Object contains imagemap's parameters. |
| imagemap.baseUrl         | `String`        | Base URL of image.                     |
| imagemap.baseSize        | `Object`        | Base size object.                      |
| imagemap.baseSize.width  | `Number`        | Width of base image.                   |
| imagemap.baseSize.height | `Number`        | Height of base image.                  |
| imagemap.actions         | `Array<Object>` | Action when tapped.                    |

Example:

```js
context.replyImagemap('this is an imagemap', {
  baseUrl: 'https://example.com/bot/images/rm001',
  baseSize: {
    width: 1040,
    height: 1040,
  },
  actions: [
    {
      type: 'uri',
      linkUri: 'https://example.com/',
      area: {
        x: 0,
        y: 0,
        width: 520,
        height: 1040,
      },
    },
    {
      type: 'message',
      text: 'hello',
      area: {
        x: 520,
        y: 0,
        width: 520,
        height: 1040,
      },
    },
  ],
});
```

<br />

### Reply Template Messages

## `replyTemplate(altText, template)`

Responds template message to the receiver using reply token.

| Param    | Type     | Description                               |
| -------- | -------- | ----------------------------------------- |
| altText  | `String` | Alternative text.                         |
| template | `Object` | Object with the contents of the template. |

Example:

```js
context.replyTemplate('this is a template', {
  type: 'buttons',
  thumbnailImageUrl: 'https://example.com/bot/images/image.jpg',
  title: 'Menu',
  text: 'Please select',
  actions: [
    {
      type: 'postback',
      label: 'Buy',
      data: 'action=buy&itemid=123',
    },
    {
      type: 'postback',
      label: 'Add to cart',
      data: 'action=add&itemid=123',
    },
    {
      type: 'uri',
      label: 'View detail',
      uri: 'http://example.com/page/123',
    },
  ],
});
```

<br />

## `replyButtonTemplate(altText, buttonTemplate)`

Responds button template message to the receiver using reply token.

<img src="https://developers.line.me/media/messaging-api/messages/buttons-86e14165.png" width="250px" />

| Param                               | Type            | Description                                                                                   |
| ----------------------------------- | --------------- | --------------------------------------------------------------------------------------------- |
| altText                             | `String`        | Alternative text.                                                                             |
| buttonTemplate                      | `Object`        | Object contains buttonTemplate's parameters.                                                  |
| buttonTemplate.thumbnailImageUrl    | `String`        | Image URL of buttonTemplate.                                                                  |
| buttonTemplate.imageAspectRatio     | `String`        | Aspect ratio of the image. Specify one of the following values: `rectangle`, `square`         |
| buttonTemplate.imageSize            | `String`        | Size of the image. Specify one of the following values: `cover`, `contain`                    |
| buttonTemplate.imageBackgroundColor | `String`        | Background color of image. Specify a RGB color value. The default value is `#FFFFFF` (white). |
| buttonTemplate.title                | `String`        | Title of buttonTemplate.                                                                      |
| buttonTemplate.text                 | `String`        | Message text of buttonTemplate.                                                               |
| buttonTemplate.actions              | `Array<Object>` | Action when tapped.                                                                           |

Example:

```js
context.replyButtonTemplate('this is a template', {
  thumbnailImageUrl: 'https://example.com/bot/images/image.jpg',
  title: 'Menu',
  text: 'Please select',
  actions: [
    {
      type: 'postback',
      label: 'Buy',
      data: 'action=buy&itemid=123',
    },
    {
      type: 'postback',
      label: 'Add to cart',
      data: 'action=add&itemid=123',
    },
    {
      type: 'uri',
      label: 'View detail',
      uri: 'http://example.com/page/123',
    },
  ],
});
```

<br />

## `replyConfirmTemplate(altText, confirmTemplate)`

Responds confirm template message to the receiver using reply token.

<img src="https://developers.line.me/media/messaging-api/messages/confirm-444aead5.png" width="250px" />

| Param                   | Type            | Description                                   |
| ----------------------- | --------------- | --------------------------------------------- |
| altText                 | `String`        | Alternative text.                             |
| confirmTemplate         | `Object`        | Object contains confirmTemplate's parameters. |
| confirmTemplate.text    | `String`        | Message text of confirmTemplate.              |
| confirmTemplate.actions | `Array<Object>` | Action when tapped.                           |

Example:

```js
context.replyConfirmTemplate('this is a confirm template', {
  text: 'Are you sure?',
  actions: [
    {
      type: 'message',
      label: 'Yes',
      text: 'yes',
    },
    {
      type: 'message',
      label: 'No',
      text: 'no',
    },
  ],
});
```

<br />

## `replyCarouselTemplate(altText, carouselItems, options)`

Responds carousel template message to the receiver using reply token.

<img src="https://developers.line.me/media/messaging-api/messages/carousel-c59baef6.png" width="250px" />

| Param                    | Type            | Description                                                                           |
| ------------------------ | --------------- | ------------------------------------------------------------------------------------- |
| altText                  | `String`        | Alternative text.                                                                     |
| carouselItems            | `Array<Object>` | Array of columns which contains object for carousel.                                  |
| options                  | `Object`        | Object contains options.                                                              |
| options.imageAspectRatio | `String`        | Aspect ratio of the image. Specify one of the following values: `rectangle`, `square` |
| options.imageSize        | `String`        | Size of the image. Specify one of the following values: `cover`, `contain`            |

Example:

```js
context.replyCarouselTemplate('this is a carousel template', [
  {
    thumbnailImageUrl: 'https://example.com/bot/images/item1.jpg',
    title: 'this is menu',
    text: 'description',
    actions: [
      {
        type: 'postback',
        label: 'Buy',
        data: 'action=buy&itemid=111',
      },
      {
        type: 'postback',
        label: 'Add to cart',
        data: 'action=add&itemid=111',
      },
      {
        type: 'uri',
        label: 'View detail',
        uri: 'http://example.com/page/111',
      },
    ],
  },
  {
    thumbnailImageUrl: 'https://example.com/bot/images/item2.jpg',
    title: 'this is menu',
    text: 'description',
    actions: [
      {
        type: 'postback',
        label: 'Buy',
        data: 'action=buy&itemid=222',
      },
      {
        type: 'postback',
        label: 'Add to cart',
        data: 'action=add&itemid=222',
      },
      {
        type: 'uri',
        label: 'View detail',
        uri: 'http://example.com/page/222',
      },
    ],
  },
]);
```

<br />

## `replyImageCarouselTemplate(altText, carouselItems)`

Responds image carousel template message to the receiver using reply token.

<img src="https://developers.line.me/media/messaging-api/messages/image-carousel-301701f6.png" width="250px" />

| Param         | Type            | Description                                                |
| ------------- | --------------- | ---------------------------------------------------------- |
| altText       | `String`        | Alternative text.                                          |
| carouselItems | `Array<Object>` | Array of columns which contains object for image carousel. |

Example:

```js
context.replyImageCarouselTemplate('this is an image carousel template', [
  {
    imageUrl: 'https://example.com/bot/images/item1.jpg',
    action: {
      type: 'postback',
      label: 'Buy',
      data: 'action=buy&itemid=111',
    },
  },
  {
    imageUrl: 'https://example.com/bot/images/item2.jpg',
    action: {
      type: 'message',
      label: 'Yes',
      text: 'yes',
    },
  },
  {
    imageUrl: 'https://example.com/bot/images/item3.jpg',
    action: {
      type: 'uri',
      label: 'View detail',
      uri: 'http://example.com/page/222',
    },
  },
]);
```

<br />

<a id="push-api" />

### Push API - [Official Docs](https://devdocs.line.me/en/#push-message)

Sends messages to the user, group, or room at any time.

## `push(messages)`

Sends messages to the receiver using ID.

| Param    | Type            | Description                                                             |
| -------- | --------------- | ----------------------------------------------------------------------- |
| messages | `Array<Object>` | Array of objects which contains the contents of the message to be sent. |

Example:

```js
context.push([
  {
    type: 'text',
    text: 'Hello!',
  },
]);
```

<br />

## `pushText(text)`

Alias: `sendText`.

Sends text message to the receiver using ID.

<img src="https://developers.line.me/media/messaging-api/messages/text-bf530b30.png" width="250px" />

You can include LINE original emoji in text messages using character codes. For a list of LINE emoji that can be sent in LINE chats, see the [emoji list](https://developers.line.me/media/messaging-api/emoji-list.pdf).

<img src="https://developers.line.me/media/messaging-api/messages/emoji-b3285d27.png" width="250px" />

| Param | Type     | Description                     |
| ----- | -------- | ------------------------------- |
| text  | `String` | Text of the message to be sent. |

Example:

```js
context.pushText('Hello!');
```

<br />

## `pushImage(imageUrl, previewImageUrl)`

Alias: `sendImage`.

Sends image message to the receiver using ID.

<img src="https://developers.line.me/media/messaging-api/messages/image-167efb33.png" width="250px" /><img src="https://developers.line.me/media/messaging-api/messages/image-full-04fbba55.png" width="250px" />

| Param           | Type     | Description        |
| --------------- | -------- | ------------------ |
| imageUrl        | `String` | Image URL.         |
| previewImageUrl | `String` | Preview image URL. |

Example:

```js
context.pushImage(
  'https://example.com/original.jpg',
  'https://example.com/preview.jpg'
);
```

<br />

## `pushVideo(videoUrl, previewImageUrl)`

Alias: `sendVideo`.

Sends video message to the receiver using ID.

<img src="https://developers.line.me/media/messaging-api/messages/video-a1bc08a4.png" width="250px" />

| Param           | Type     | Description           |
| --------------- | -------- | --------------------- |
| videoUrl        | `String` | URL of video file.    |
| previewImageUrl | `String` | URL of preview image. |

Example:

```js
context.pushVideo(
  'https://example.com/original.mp4',
  'https://example.com/preview.jpg'
);
```

<br />

## `pushAudio(audioUrl, duration)`

Alias: `sendAudio`.

Sends audio message to the receiver using ID.

<img src="https://developers.line.me/media/messaging-api/messages/audio-6290d91b.png" width="250px" />

| Param    | Type     | Description           |
| -------- | -------- | --------------------- |
| audioUrl | `String` | URL of audio file.    |
| duration | `Number` | Length of audio file. |

Example:

```js
context.pushAudio('https://example.com/original.m4a', 240000);
```

<br />

## `pushLocation(location)`

Alias: `sendLocation`.

Sends location message to the receiver using ID.

<img src="https://developers.line.me/media/messaging-api/messages/location-8f9b6b79.png" width="250px" />

| Param              | Type     | Description                            |
| ------------------ | -------- | -------------------------------------- |
| location           | `Object` | Object contains location's parameters. |
| location.title     | `String` | Title of the location.                 |
| location.address   | `String` | Address of the location.               |
| location.latitude  | `Number` | Latitude of the location.              |
| location.longitude | `Number` | Longitude of the location.             |

Example:

```js
context.pushLocation({
  title: 'my location',
  address: '〒150-0002 東京都渋谷区渋谷２丁目２１−１',
  latitude: 35.65910807942215,
  longitude: 139.70372892916203,
});
```

<br />

## `pushSticker(packageId, stickerId)`

Alias: `sendSticker`.

Sends sticker message to the receiver using ID.
For a list of stickers that can be sent with the Messaging API, see the [sticker list](https://developers.line.me/media/messaging-api/messages/sticker_list.pdf).

<img src="https://developers.line.me/media/messaging-api/messages/sticker-cb1a6a3a.png" width="250px" />

| Param     | Type     | Description |
| --------- | -------- | ----------- |
| packageId | `String` | Package ID. |
| stickerId | `String` | Sticker ID. |

Example:

```js
context.pushSticker('1', '1');
```

<br />

### Push Imagemap Message

## `pushImagemap(altText, imagemap)`

Alias: `sendImagemap`.

Sends imagemap message to the receiver using ID.

<img src="https://developers.line.me/media/messaging-api/messages/imagemap-dd854fa7.png" width="250px" />

| Param                    | Type            | Description                            |
| ------------------------ | --------------- | -------------------------------------- |
| altText                  | `String`        | Alternative text.                      |
| imagemap                 | `Object`        | Object contains imagemap's parameters. |
| imagemap.baseUrl         | `String`        | Base URL of image.                     |
| imagemap.baseSize        | `Object`        | Base size object.                      |
| imagemap.baseSize.width  | `Number`        | Width of base image.                   |
| imagemap.baseSize.height | `Number`        | Height of base image.                  |
| imagemap.actions         | `Array<Object>` | Action when tapped.                    |

Example:

```js
context.pushImagemap('this is an imagemap', {
  baseUrl: 'https://example.com/bot/images/rm001',
  baseSize: {
    width: 1040,
    height: 1040,
  },
  actions: [
    {
      type: 'uri',
      linkUri: 'https://example.com/',
      area: {
        x: 0,
        y: 0,
        width: 520,
        height: 1040,
      },
    },
    {
      type: 'message',
      text: 'hello',
      area: {
        x: 520,
        y: 0,
        width: 520,
        height: 1040,
      },
    },
  ],
});
```

<br />

### Push Template Messages

## `pushTemplate(altText, template)`

Alias: `sendTemplate`.

Sends template message to the receiver using ID.

| Param    | Type     | Description                               |
| -------- | -------- | ----------------------------------------- |
| altText  | `String` | Alternative text.                         |
| template | `Object` | Object with the contents of the template. |

Example:

```js
context.pushTemplate('this is a template', {
  type: 'buttons',
  thumbnailImageUrl: 'https://example.com/bot/images/image.jpg',
  title: 'Menu',
  text: 'Please select',
  actions: [
    {
      type: 'postback',
      label: 'Buy',
      data: 'action=buy&itemid=123',
    },
    {
      type: 'postback',
      label: 'Add to cart',
      data: 'action=add&itemid=123',
    },
    {
      type: 'uri',
      label: 'View detail',
      uri: 'http://example.com/page/123',
    },
  ],
});
```

<br />

## `pushButtonTemplate(altText, buttonTemplate)`

Alias: `sendButtonTemplate`.

Sends button template message to the receiver using ID.

<img src="https://developers.line.me/media/messaging-api/messages/buttons-86e14165.png" width="250px" />

| Param                               | Type            | Description                                                                                   |
| ----------------------------------- | --------------- | --------------------------------------------------------------------------------------------- |
| altText                             | `String`        | Alternative text.                                                                             |
| buttonTemplate                      | `Object`        | Object contains buttonTemplate's parameters.                                                  |
| buttonTemplate.thumbnailImageUrl    | `String`        | Image URL of buttonTemplate.                                                                  |
| buttonTemplate.imageAspectRatio     | `String`        | Aspect ratio of the image. Specify one of the following values: `rectangle`, `square`         |
| buttonTemplate.imageSize            | `String`        | Size of the image. Specify one of the following values: `cover`, `contain`                    |
| buttonTemplate.imageBackgroundColor | `String`        | Background color of image. Specify a RGB color value. The default value is `#FFFFFF` (white). |
| buttonTemplate.title                | `String`        | Title of buttonTemplate.                                                                      |
| buttonTemplate.text                 | `String`        | Message text of buttonTemplate.                                                               |
| buttonTemplate.actions              | `Array<Object>` | Action when tapped.                                                                           |

Example:

```js
context.pushButtonTemplate('this is a template', {
  thumbnailImageUrl: 'https://example.com/bot/images/image.jpg',
  title: 'Menu',
  text: 'Please select',
  actions: [
    {
      type: 'postback',
      label: 'Buy',
      data: 'action=buy&itemid=123',
    },
    {
      type: 'postback',
      label: 'Add to cart',
      data: 'action=add&itemid=123',
    },
    {
      type: 'uri',
      label: 'View detail',
      uri: 'http://example.com/page/123',
    },
  ],
});
```

<br />

## `pushConfirmTemplate(altText, confirmTemplate)`

Alias: `sendConfirmTemplate`.

Sends confirm template message to the receiver using ID.

<img src="https://developers.line.me/media/messaging-api/messages/confirm-444aead5.png" width="250px" />

| Param                   | Type            | Description                                   |
| ----------------------- | --------------- | --------------------------------------------- |
| altText                 | `String`        | Alternative text.                             |
| confirmTemplate         | `Object`        | Object contains confirmTemplate's parameters. |
| confirmTemplate.text    | `String`        | Message text of confirmTemplate.              |
| confirmTemplate.actions | `Array<Object>` | Action when tapped.                           |

Example:

```js
context.pushConfirmTemplate('this is a confirm template', {
  text: 'Are you sure?',
  actions: [
    {
      type: 'message',
      label: 'Yes',
      text: 'yes',
    },
    {
      type: 'message',
      label: 'No',
      text: 'no',
    },
  ],
});
```

<br />

## `pushCarouselTemplate(altText, carouselItems, options)`

Alias: `sendCarouselTemplate`.

Sends carousel template message to the receiver using ID.

<img src="https://developers.line.me/media/messaging-api/messages/carousel-c59baef6.png" width="250px" />

| Param                    | Type            | Description                                                                           |
| ------------------------ | --------------- | ------------------------------------------------------------------------------------- |
| altText                  | `String`        | Alternative text.                                                                     |
| carouselItems            | `Array<Object>` | Array of columns which contains object for carousel.                                  |
| options                  | `Object`        | Object contains options.                                                              |
| options.imageAspectRatio | `String`        | Aspect ratio of the image. Specify one of the following values: `rectangle`, `square` |
| options.imageSize        | `String`        | Size of the image. Specify one of the following values: `cover`, `contain`            |

Example:

```js
context.pushCarouselTemplate('this is a carousel template', [
  {
    thumbnailImageUrl: 'https://example.com/bot/images/item1.jpg',
    title: 'this is menu',
    text: 'description',
    actions: [
      {
        type: 'postback',
        label: 'Buy',
        data: 'action=buy&itemid=111',
      },
      {
        type: 'postback',
        label: 'Add to cart',
        data: 'action=add&itemid=111',
      },
      {
        type: 'uri',
        label: 'View detail',
        uri: 'http://example.com/page/111',
      },
    ],
  },
  {
    thumbnailImageUrl: 'https://example.com/bot/images/item2.jpg',
    title: 'this is menu',
    text: 'description',
    actions: [
      {
        type: 'postback',
        label: 'Buy',
        data: 'action=buy&itemid=222',
      },
      {
        type: 'postback',
        label: 'Add to cart',
        data: 'action=add&itemid=222',
      },
      {
        type: 'uri',
        label: 'View detail',
        uri: 'http://example.com/page/222',
      },
    ],
  },
]);
```

<br />

## `pushImageCarouselTemplate(altText, carouselItems)`

Alias: `sendImageCarouselTemplate`.

Sends image carousel template message to the receiver using ID.

<img src="https://developers.line.me/media/messaging-api/messages/image-carousel-301701f6.png" width="250px" />

| Param         | Type            | Description                                                |
| ------------- | --------------- | ---------------------------------------------------------- |
| altText       | `String`        | Alternative text.                                          |
| carouselItems | `Array<Object>` | Array of columns which contains object for image carousel. |

Example:

```js
context.pushImageCarouselTemplate('this is an image carousel template', [
  {
    imageUrl: 'https://example.com/bot/images/item1.jpg',
    action: {
      type: 'postback',
      label: 'Buy',
      data: 'action=buy&itemid=111',
    },
  },
  {
    imageUrl: 'https://example.com/bot/images/item2.jpg',
    action: {
      type: 'message',
      label: 'Yes',
      text: 'yes',
    },
  },
  {
    imageUrl: 'https://example.com/bot/images/item3.jpg',
    action: {
      type: 'uri',
      label: 'View detail',
      uri: 'http://example.com/page/222',
    },
  },
]);
```

<br />

<a id="profile-api" />

### Profile API - [Official Docs](https://devdocs.line.me/en/#bot-api-get-profile)

Coming soon.

<!--

## `getUserProfile()`

Gets user profile information.

Example:

```js
context.getUserProfile().then(profile => {
  console.log(profile);
  // {
  //   displayName: 'LINE taro',
  //   userId: USER_ID,
  //   pictureUrl: 'http://obs.line-apps.com/...',
  //   statusMessage: 'Hello, LINE!',
  // }
});
```

-->

<br />

<a id="grouproom-member-profile-api" />

### Group/Room Member Profile API - [Official Docs](https://devdocs.line.me/en/#get-group-room-member-profile)

Coming soon.

<!--

## `getMemberProfile(userId)`

Gets the user profile of a member of the group/room that the bot is in. This includes the user IDs of users who has not added the bot as a friend or has blocked the bot.

| Param  | Type     | Description     |
| ------ | -------- | --------------- |
| userId | `String` | ID of the user. |

Example:

```js
context.getMemberProfile(USER_ID).then(member => {
  console.log(member);
  // {
  //   "displayName":"LINE taro",
  //   "userId":"Uxxxxxxxxxxxxxx...",
  //   "pictureUrl":"http://obs.line-apps.com/..."
  // }
});
```

-->

<br />

<a id="grouproom-member-ids-api" />

### Group/Room Member IDs API - [Official Docs](https://devdocs.line.me/en/#get-group-room-member-ids)

Coming soon.

<!--

## `getMemberIds(start)`

Gets the ID of the users of the members of the group/room that the bot is in. This includes the user IDs of users who have not added the bot as a friend or has blocked the bot.  
This feature is only available for LINE@ Approved accounts or official accounts.

| Param | Type     | Description          |
| ----- | -------- | -------------------- |
| start | `String` | `continuationToken`. |

Example:

```js
context.getMemberIds(CURSOR).then(res => {
  console.log(res);
  // {
  //   memberIds: [
  //     'Uxxxxxxxxxxxxxx...',
  //     'Uxxxxxxxxxxxxxx...',
  //     'Uxxxxxxxxxxxxxx...'
  //   ],
  //   next: 'jxEWCEEP...'
  // }
});
```

<br />

## `getAllMemberIds()`

Recursively gets the ID of the users of the members of the group/room that the bot is in using cursors.  
This feature is only available for LINE@ Approved accounts or official accounts.

Example:

```js
context.getAllMemberIds().then(ids => {
  console.log(ids);
  // [
  //   'Uxxxxxxxxxxxxxx..1',
  //   'Uxxxxxxxxxxxxxx..2',
  //   'Uxxxxxxxxxxxxxx..3',
  //   'Uxxxxxxxxxxxxxx..4',
  //   'Uxxxxxxxxxxxxxx..5',
  //   'Uxxxxxxxxxxxxxx..6',
  // ]
});
```

-->

<br />

<a id="leave-api" />

### Leave API - [Official Docs](https://devdocs.line.me/en/#leave)

## `leave()`

Leave from the group or room.

Example:

```js
context.leave();
```

<br />

<a id="rich-menu-api" />

### Rich Menu API - [Official Docs](https://developers.line.me/en/docs/messaging-api/reference/#rich-menu)

<br />

## `getLinkedRichMenu()`

Gets the ID of the rich menu linked to the user.

Example:

```js
context.getLinkedRichMenu().then(richMenu => {
  console.log(richMenu);
  // {
  //   richMenuId: "{richMenuId}"
  // }
});
```

<br />

## `linkRichMenu(richMenuId)`

Links a rich menu to the user.

| Param      | Type     | Description                  |
| ---------- | -------- | ---------------------------- |
| richMenuId | `String` | ID of an uploaded rich menu. |

Example:

```js
context.linkRichMenu(RICH_MENU_ID);
```

<br />

## `unlinkRichMenu()`

Unlinks a rich menu from the user.

Example:

```js
context.unlinkRichMenu();
```
