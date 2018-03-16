webpackJsonp([29402239515122],{654:function(n,e){n.exports={data:{markdownRemark:{html:'<p>This guide will give you some basic concepts of LINE bots. For more information, check <a href="https://developers.line.me/en/docs/messaging-api/building-bot/">official docs</a>.</p>\n<h2 id="requirements"><a href="#requirements" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Requirements</h2>\n<ul>\n<li>LINE@ account</li>\n<li>\n<p>LINE Messaging API channel</p>\n<ul>\n<li>access token</li>\n<li>channel secret</li>\n</ul>\n</li>\n</ul>\n<p>You need a <a href="http://at.line.me/">LINE@</a> account and a <strong>channel</strong> connected to that account to develop a LINE bot. You need the channel\'s <strong>access token</strong> and <strong>channel secret</strong> when you start.</p>\n<h3 id="line"><a href="#line" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>LINE@</h3>\n<p>You need an <a href="http://at.line.me/">LINE@</a> account for your bot to connect to. You can register a <strong>standard account</strong> or an <strong>approved account</strong> <a href="https://entry-at.line.me/">here</a>.</p>\n<p>After that, you can manage your LINE@ accounts at <a href="https://admin-official.line.me/">LINE@ MANAGER</a> and set them up to use <strong>Messaging API</strong> for bots to connect to.</p>\n<h3 id="line-developers"><a href="#line-developers" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>LINE developers</h3>\n<p>After setting up LINE@ accounts to use Messaging API, further setup such as <strong>webhook</strong>, <strong>access token</strong> can be found at <a href="https://developers.line.me">LINE developers</a>. A  <strong>LINE Login</strong> app or a <strong>Messaging API</strong> app is called a <strong>channel</strong> here.</p>\n<h2 id="build-your-first-line-bot"><a href="#build-your-first-line-bot" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Build your first LINE bot</h2>\n<p>Check out your channel\'s <strong>access token</strong> and <strong>channel secret</strong> at <a href="https://developers.line.me">LINE developers</a> then fill them in <a href="https://github.com/Yoctol/bottender/blob/master/examples/line-hello-world/index.js">line-hello-world</a> example:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> LineBot <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'bottender\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LineBot</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  channelSecret<span class="token punctuation">:</span> <span class="token string">\'__FILL_YOUR_SECRET_HERE__\'</span><span class="token punctuation">,</span>\n  accessToken<span class="token punctuation">:</span> <span class="token string">\'__FILL_YOUR_TOKEN_HERE__\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Then run your server and try it out by talking to your LINE@ account!</p>\n<h2 id="event-types"><a href="#event-types" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Event Types</h2>\n<p>There are 7 types of events your bot may receive from LINE. In Bottender, you can access them via <code>context.event</code>. For more information, check <a href="./APIReference-Event">Event Reference</a> and <a href="https://developers.line.me/en/docs/messaging-api/reference/#webhook-event-objects">official docs</a>.</p>\n<ul>\n<li>\n<p>Message event</p>\n<ul>\n<li>Text</li>\n<li>Image</li>\n<li>Video</li>\n<li>Audio</li>\n<li>File</li>\n<li>Location</li>\n<li>Sticker</li>\n</ul>\n</li>\n<li>Follow event</li>\n<li>Unfollow event</li>\n<li>Join event</li>\n<li>Leave event</li>\n<li>Postback event</li>\n<li>Beacon event</li>\n</ul>\n<p>For example:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>bot<span class="token punctuation">.</span><span class="token function">onEvent</span><span class="token punctuation">(</span><span class="token keyword">async</span> context <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>context<span class="token punctuation">.</span>event<span class="token punctuation">.</span>isFollow<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">sendText</span><span class="token punctuation">(</span><span class="token string">\'Hello, welcome to this bot!\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>context<span class="token punctuation">.</span>event<span class="token punctuation">.</span>isText <span class="token operator">&amp;&amp;</span> context<span class="token punctuation">.</span>event<span class="token punctuation">.</span>text <span class="token operator">===</span> <span class="token string">\'How are you?\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">sendText</span><span class="token punctuation">(</span><span class="token string">\'I am fine.\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">sentText</span><span class="token punctuation">(</span><span class="token string">\'I do not understand.\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2 id="message-types"><a href="#message-types" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Message Types</h2>\n<p>There are 8 types of messages you can send from your bot. In Bottender, you can use functions like <code>context.sendText()</code>, <code>context.sendButtonTemplate()</code> to send messages. For more information, check <a href="./APIReference-Context">Context Reference</a> and <a href="https://developers.line.me/en/docs/messaging-api/message-types/">official docs</a>.</p>\n<ul>\n<li>Text</li>\n<li>Sticker</li>\n<li>Image</li>\n<li>Video</li>\n<li>Audio</li>\n<li>Location</li>\n<li>Imagemap</li>\n<li>\n<p>Template</p>\n<ul>\n<li>Buttons</li>\n<li>Confirm</li>\n<li>Carousel</li>\n<li>Image carousel</li>\n</ul>\n</li>\n</ul>\n<h2 id="line-specific"><a href="#line-specific" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>LINE specific</h2>\n<h3 id="group-chats"><a href="#group-chats" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Group chats</h3>\n<p>LINE has 2 types of group chats, <strong>groups</strong> and <strong>rooms</strong>. For more information, check <a href="https://developers.line.me/en/docs/messaging-api/group-chats/">official docs</a>.</p>\n<p>You can invite your bot account into a group or a room. By doing so, the events will create <strong>group/room sessions</strong>. Send methods like <code>context.sendText()</code> will send to the group/room rather than to the private message to the sender in these context. You can still get the sender\'s profile with <code>context.session.user</code>.</p>\n<p>If your LINE bot is connected to a <strong>LINE@ Approved account</strong> or an <strong>official account</strong>, you can access the group/room member IDs in <code>context.session.group</code> or <code>context.session.room</code>. If not, these properties will return an empty array <code>[]</code>.</p>\n<h3 id="beacons"><a href="#beacons" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Beacons</h3>\n<p>With <strong>LINE Beacon</strong>, your bot can receive beacon webhook events whenever a LINE user enters or leaves the proximity of a beacon. Using beacons, you can customize your bot to interact with users in specific contexts. For more information, check <a href="https://developers.line.me/en/docs/messaging-api/using-beacons/">official docs</a>.</p>\n<h3 id="signature-verification"><a href="#signature-verification" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Signature Verification</h3>\n<p>To ensure that the request is sent from the LINE Platform, you should provide your <strong>channel secret</strong> so that Bottender can do signature validation for you. For more information, check <a href="https://developers.line.me/en/docs/messaging-api/reference/#signature-validation">official docs</a>.</p>\n<h2 id="references"><a href="#references" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>References</h2>\n<ul>\n<li><a href="https://developers.line.me/en/docs/messaging-api/overview/">official docs</a>: official docs of LINE messaging API.</li>\n<li><a href="https://admin-official.line.me/">LINE@ MANAGER</a></li>\n<li><a href="https://developers.line.me">LINE developers</a></li>\n<li><a href="https://github.com/Yoctol/messaging-apis/tree/master/packages/messaging-api-line">messaging-api-line</a></li>\n<li><a href="https://github.com/Yoctol/bottender/blob/master/examples/line-hello-world/index.js">line-hello-world</a> example.</li>\n</ul>',frontmatter:{title:"LINE",date:"October 09, 2017",author:null},fields:{path:"docs/Platforms-LINE.md"}},site:{siteMetadata:{title:"Bottender"}}},pathContext:{slug:"/docs/Platforms-LINE/",_PARENT:"SOURCE"}}}});
//# sourceMappingURL=path---docs-platforms-line-e24fc9934ba4852f49c5.js.map