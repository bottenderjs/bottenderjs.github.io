---
title: Troubleshooting
date: "2018-01-16"
---

## General

### I want to know if there're incoming requests to my bot.

To show every incoming request, simply set your `DEBUG` environment variable to `bottender/bot/Bot` when you start the bot server. You will get something like below when new requests come.

```
$ DEBUG=bottender/bot/Bot npm start
server is running on 5000 port...

  bottender/bot/Bot {
  bottender/bot/Bot   "object": "page",
  bottender/bot/Bot   "entry": [
  bottender/bot/Bot     {
  bottender/bot/Bot       "id": "000000000000000",
  bottender/bot/Bot       "time": 1516089458463,
  bottender/bot/Bot       "messaging": [
  bottender/bot/Bot         {
  bottender/bot/Bot           "sender": {
  bottender/bot/Bot             "id": "0000000000000000"
  bottender/bot/Bot           },
  bottender/bot/Bot           "recipient": {
  bottender/bot/Bot             "id": "000000000000000"
  bottender/bot/Bot           },
  bottender/bot/Bot           "timestamp": 1516089458006,
  bottender/bot/Bot           "message": {
  bottender/bot/Bot             "mid": "mid.$cAALZpXYlSS1nLz6FVlg_00000000",
  bottender/bot/Bot             "seq": 119080,
  bottender/bot/Bot             "text": "Hi",
  bottender/bot/Bot             "nlp": {
  bottender/bot/Bot               "entities": {}
  bottender/bot/Bot             }
  bottender/bot/Bot           }
  bottender/bot/Bot         }
  bottender/bot/Bot       ]
  bottender/bot/Bot     }
  bottender/bot/Bot   ]
  bottender/bot/Bot } +0ms
```

## Messenger

### I can't receive persistent menu or get started button events.

#### Make sure you have subscribed to correct events.

You have to check to subscribe `messaging_postbacks` events in the `Messenger` tab, `Webhooks` block of your Facebook App at [Facebook for Developers](https://developers.facebook.com/).

![check messaging_postbacks](https://user-images.githubusercontent.com/1003146/34977945-88a32732-fad7-11e7-8896-70a88cb6dfd1.PNG)

#### Make sure the persistent menu or get started button is created by you current Facebook App.

If your page was previously connected to other bot services and they created persistent menu or get started button for your page, you can not receive the events. You have to recreate new persistent menu or get started button to make them functioning to the new Facebook App.
