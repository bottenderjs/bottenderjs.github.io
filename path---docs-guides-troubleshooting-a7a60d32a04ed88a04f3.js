webpackJsonp([78373065714196],{660:function(e,t){e.exports={data:{markdownRemark:{html:'<h2 id="general"><a href="#general" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>General</h2>\n<h3 id="i-want-to-know-if-therere-incoming-requests-to-my-bot"><a href="#i-want-to-know-if-therere-incoming-requests-to-my-bot" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>I want to know if there\'re incoming requests to my bot.</h3>\n<p>To show every incoming request, simply set your <code>DEBUG</code> environment variable to <code>bottender/bot/Bot</code> when you start the bot server. You will get something like below when new requests come.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>$ DEBUG=bottender/bot/Bot npm start\nserver is running on 5000 port...\n\n  bottender/bot/Bot {\n  bottender/bot/Bot   "object": "page",\n  bottender/bot/Bot   "entry": [\n  bottender/bot/Bot     {\n  bottender/bot/Bot       "id": "000000000000000",\n  bottender/bot/Bot       "time": 1516089458463,\n  bottender/bot/Bot       "messaging": [\n  bottender/bot/Bot         {\n  bottender/bot/Bot           "sender": {\n  bottender/bot/Bot             "id": "0000000000000000"\n  bottender/bot/Bot           },\n  bottender/bot/Bot           "recipient": {\n  bottender/bot/Bot             "id": "000000000000000"\n  bottender/bot/Bot           },\n  bottender/bot/Bot           "timestamp": 1516089458006,\n  bottender/bot/Bot           "message": {\n  bottender/bot/Bot             "mid": "mid.$cAALZpXYlSS1nLz6FVlg_00000000",\n  bottender/bot/Bot             "seq": 119080,\n  bottender/bot/Bot             "text": "Hi",\n  bottender/bot/Bot             "nlp": {\n  bottender/bot/Bot               "entities": {}\n  bottender/bot/Bot             }\n  bottender/bot/Bot           }\n  bottender/bot/Bot         }\n  bottender/bot/Bot       ]\n  bottender/bot/Bot     }\n  bottender/bot/Bot   ]\n  bottender/bot/Bot } +0ms</code></pre>\n      </div>\n<h2 id="messenger"><a href="#messenger" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Messenger</h2>\n<h3 id="my-bot-keeps-spamming-with-no-error-log-until-server-stops"><a href="#my-bot-keeps-spamming-with-no-error-log-until-server-stops" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>My bot keeps spamming with no error log until server stops.</h3>\n<p>It could be that you have subscribed to <code>message_echoes</code> events and not filtering them out. Check <a href="https://github.com/Yoctol/bottender/issues/134">this issue</a> for more information.</p>\n<h3 id="i-cant-receive-persistent-menu-or-get-started-button-events"><a href="#i-cant-receive-persistent-menu-or-get-started-button-events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>I can\'t receive persistent menu or get started button events.</h3>\n<h4 id="make-sure-you-have-subscribed-to-correct-events"><a href="#make-sure-you-have-subscribed-to-correct-events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Make sure you have subscribed to correct events.</h4>\n<p>You have to check to subscribe <code>messaging_postbacks</code> events in the <code>Messenger</code> tab, <code>Webhooks</code> block of your Facebook App at <a href="https://developers.facebook.com/">Facebook for Developers</a>.</p>\n<p><img src="https://user-images.githubusercontent.com/1003146/34977945-88a32732-fad7-11e7-8896-70a88cb6dfd1.PNG" alt="check messaging_postbacks"></p>\n<h4 id="make-sure-the-persistent-menu-or-get-started-button-is-created-by-you-current-facebook-app"><a href="#make-sure-the-persistent-menu-or-get-started-button-is-created-by-you-current-facebook-app" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Make sure the persistent menu or get started button is created by you current Facebook App.</h4>\n<p>If your page was previously connected to other bot services and they created persistent menu or get started button for your page, you can not receive the events. You have to recreate new persistent menu or get started button to make them functioning to the new Facebook App.</p>',frontmatter:{title:"Troubleshooting",date:"January 16, 2018",author:null},fields:{path:"docs/Guides-Troubleshooting.md"}},site:{siteMetadata:{title:"Bottender"}}},pathContext:{slug:"/docs/Guides-Troubleshooting/",_PARENT:"SOURCE"}}}});
//# sourceMappingURL=path---docs-guides-troubleshooting-a7a60d32a04ed88a04f3.js.map