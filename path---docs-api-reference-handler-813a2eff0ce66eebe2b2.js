webpackJsonp([0x5df309b8a5ee],{645:function(n,t){n.exports={data:{markdownRemark:{html:'<p>A Bottender Handler includes many helpful methods and lets you easily handle different kinds of events from platforms.\nWhen an event comes in, the handler will choose the first method matched the condition to handle event.</p>\n<h2 id="api-reference"><a href="#api-reference" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>API Reference</h2>\n<p>All methods return handler itself.</p>\n<p>See more details about <a href="./APIReference-Event">event</a> and <a href="./APIReference-Context">context</a>.</p>\n<h3 id="onxxxhandler"><a href="#onxxxhandler" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>onXXX(handler)</code></h3>\n<ul>\n<li>not includes <code>onEvent</code>, <code>onUnhandled</code>, <code>onError</code></li>\n</ul>\n<p>It will always trigger handler function if <code>event.isXXX</code> is true and <strong>just have one parameter</strong>.</p>\n<table>\n<thead>\n<tr>\n<th align="center">Param</th>\n<th align="center">Type</th>\n<th align="center">Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="center">handler</td>\n<td align="center"><code>function</code></td>\n<td align="center">This is a callback function receiving \n<a href="./APIReference-Context">context</a>\n as first parameter.</td>\n</tr>\n</tbody>\n</table>\n<h3 id="onxxxpredicate-handler"><a href="#onxxxpredicate-handler" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>onXXX(predicate, handler)</code></h3>\n<ul>\n<li>not includes <code>onEvent</code>, <code>onUnhandled</code>, <code>onError</code></li>\n</ul>\n<p>It will trigger handler function if <code>event.isXXX</code> is true and predicate function return true.</p>\n<table>\n<thead>\n<tr>\n<th align="center">Param</th>\n<th align="center">Type</th>\n<th align="center">Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="center">predicate</td>\n<td align="center"><code>function</code></td>\n<td align="center">This is a callback function receiving two parameters. Handler function will be triggered if it \n<strong>returns true</strong>\n. \n<br>\n \n<code>function predicate(XXX, context) { /* ... */ }</code></td>\n</tr>\n<tr>\n<td align="center">handler</td>\n<td align="center"><code>function</code></td>\n<td align="center">This is a callback function receiving \n<a href="./APIReference-Context">context</a>\n as first parameter. \n<br>\n \n<code>function handler(context) { /* ... */ }</code></td>\n</tr>\n</tbody>\n</table>\n<ul>\n<li>Notices: <code>onText</code>, <code>onPayload</code> also support first parameter to be <strong>string</strong> type or <strong>RegExp</strong>. See more details from <a href="#ontext">example</a> below.</li>\n</ul>\n<h3 id="oneventhandler"><a href="#oneventhandler" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>onEvent(handler)</code></h3>\n<p>It will trigger handler function from <strong>any event</strong>.</p>\n<table>\n<thead>\n<tr>\n<th align="center">Param</th>\n<th align="center">Type</th>\n<th align="center">Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="center">handler</td>\n<td align="center"><code>function</code></td>\n<td align="center">This is a callback function receiving \n<a href="./APIReference-Context">context</a>\n as first parameter. \n<br>\n \n<code>function handler(context) { /* ... */ }</code></td>\n</tr>\n</tbody>\n</table>\n<h3 id="onunhandledhandler"><a href="#onunhandledhandler" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>onUnhandled(handler)</code></h3>\n<p>It will trigger handler function if any <code>onXXX</code> function don\'t send any things back to user.</p>\n<table>\n<thead>\n<tr>\n<th align="center">Param</th>\n<th align="center">Type</th>\n<th align="center">Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="center">handler</td>\n<td align="center"><code>function</code></td>\n<td align="center">This is a callback function receiving \n<a href="./APIReference-Context">context</a>\n as first parameter. \n<br>\n \n<code>function handler(context) { /* ... */ }</code></td>\n</tr>\n</tbody>\n</table>\n<h3 id="onerrorhandler"><a href="#onerrorhandler" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>onError(handler)</code></h3>\n<p>It will trigger handler function if any Error is thrown.</p>\n<table>\n<thead>\n<tr>\n<th align="center">Param</th>\n<th align="center">Type</th>\n<th align="center">Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="center">handler</td>\n<td align="center"><code>function</code></td>\n<td align="center">This is a callback function receiving \n<a href="./APIReference-Context">context</a>\n as first parameter and \n<strong>error as second parameter</strong>\n. \n<br>\n \n<code>function handler(context, error) { /* ... */ }</code></td>\n</tr>\n</tbody>\n</table>\n<h3 id="methods-table"><a href="#methods-table" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Methods table</h3>\n<table>\n<thead>\n<tr>\n<th align="center">Name</th>\n<th align="center">Messenger</th>\n<th align="center">LINE</th>\n<th align="center">Slack</th>\n<th align="center">Telegram</th>\n<th align="center">Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="center">on</td>\n<td align="center">✅</td>\n<td align="center">✅</td>\n<td align="center">✅</td>\n<td align="center">✅</td>\n<td align="center">it will trigger function from second parameter if function from first parameter return true.</td>\n</tr>\n<tr>\n<td align="center">onEvent</td>\n<td align="center">✅</td>\n<td align="center">✅</td>\n<td align="center">✅</td>\n<td align="center">✅</td>\n<td align="center">it will always trigger function from parameter. \n<br>\n<br>\n<strong>Notice: This method will handle all event. Make sure this is the last method.</strong></td>\n</tr>\n<tr>\n<td align="center">onMessage</td>\n<td align="center">✅</td>\n<td align="center">✅</td>\n<td align="center">✅</td>\n<td align="center">✅</td>\n<td align="center">it will trigger function from parameter if \n<strong>context.event.isMessage</strong>\n is true and function from first parameter return true.</td>\n</tr>\n<tr>\n<td align="center">onText</td>\n<td align="center">✅</td>\n<td align="center">✅</td>\n<td align="center">✅</td>\n<td align="center">✅</td>\n<td align="center">it will trigger function from parameter if \n<strong>context.event.isText</strong>\n is true and function from first parameter return true.</td>\n</tr>\n<tr>\n<td align="center">onUnhandled</td>\n<td align="center">✅</td>\n<td align="center">✅</td>\n<td align="center">✅</td>\n<td align="center">✅</td>\n<td align="center">it will trigger function from parameter if event is not handled.</td>\n</tr>\n<tr>\n<td align="center">onError</td>\n<td align="center">✅</td>\n<td align="center">✅</td>\n<td align="center">✅</td>\n<td align="center">✅</td>\n<td align="center">it will trigger function from parameter if error happens.</td>\n</tr>\n<tr>\n<td align="center">onPostback</td>\n<td align="center">✅</td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">it will trigger function from parameter if \n<strong>context.event.isPostback</strong>\n is true and function from first parameter return true.</td>\n</tr>\n<tr>\n<td align="center">onPayload</td>\n<td align="center">✅</td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center">✅</td>\n<td align="center">it will trigger function from parameter if \n<strong>context.event.isPostback</strong>\n or \n<strong>context.event.isQuickReply</strong>\n is true and function from first parameter return true.</td>\n</tr>\n<tr>\n<td align="center">onLocation</td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">✅</td>\n<td align="center">it will trigger function from parameter if \n<strong>context.event.isLocation</strong>\n is true and function from first parameter return true.</td>\n</tr>\n<tr>\n<td align="center">onAudio</td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">✅</td>\n<td align="center">it will trigger function from parameter if \n<strong>context.event.isAudio</strong>\n is true and function from first parameter return true.</td>\n</tr>\n<tr>\n<td align="center">onVideo</td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">✅</td>\n<td align="center">it will trigger function from parameter if \n<strong>context.event.isVideo</strong>\n is true and function from first parameter return true.</td>\n</tr>\n<tr>\n<td align="center">onPayment</td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">it will trigger function from parameter if \n<strong>context.event.isPayment</strong>\n is true and function from first parameter return true.</td>\n</tr>\n<tr>\n<td align="center">onOptin</td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">it will trigger function from parameter if \n<strong>context.event.isOptin</strong>\n is true and function from first parameter return true.</td>\n</tr>\n<tr>\n<td align="center">onCheckoutUpdate</td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">it will trigger function from parameter if \n<strong>context.event.isCheckoutUpdate</strong>\n is true and function from first parameter return true.</td>\n</tr>\n<tr>\n<td align="center">onPreCheckout</td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">it will trigger function from parameter if \n<strong>context.event.isPreCheckout</strong>\n is true and function from first parameter return true.</td>\n</tr>\n<tr>\n<td align="center">onQuickReply</td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">it will trigger function from parameter if \n<strong>context.event.isQuickReply</strong>\n is true and function from first parameter return true.</td>\n</tr>\n<tr>\n<td align="center">onEcho</td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">it will trigger function from parameter if \n<strong>context.event.isEcho</strong>\n is true and function from first parameter return true.</td>\n</tr>\n<tr>\n<td align="center">onRead</td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">it will trigger function from parameter if \n<strong>context.event.isRead</strong>\n is true and function from first parameter return true.</td>\n</tr>\n<tr>\n<td align="center">onDelivery</td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">it will trigger function from parameter if \n<strong>context.event.isDelivery</strong>\n is true and function from first parameter return true.</td>\n</tr>\n<tr>\n<td align="center">onImage</td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">it will trigger function from parameter if \n<strong>context.event.isImage</strong>\n is true and function from first parameter return true.</td>\n</tr>\n<tr>\n<td align="center">onFile</td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">it will trigger function from parameter if \n<strong>context.event.isFile</strong>\n is true and function from first parameter return true.</td>\n</tr>\n<tr>\n<td align="center">onFallback</td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">it will trigger function from parameter if \n<strong>context.event.isFallback</strong>\n is true and function from first parameter return true.</td>\n</tr>\n<tr>\n<td align="center">onFollow</td>\n<td align="center"></td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">it will trigger function from parameter if \n<strong>context.event.isFollow</strong>\n is true and function from first parameter return true.</td>\n</tr>\n<tr>\n<td align="center">onUnfollow</td>\n<td align="center"></td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">it will trigger function from parameter if \n<strong>context.event.isUnfollow</strong>\n is true and function from first parameter return true.</td>\n</tr>\n<tr>\n<td align="center">onJoin</td>\n<td align="center"></td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">it will trigger function from parameter if \n<strong>context.event.isJoin</strong>\n is true and function from first parameter return true.</td>\n</tr>\n<tr>\n<td align="center">onLeave</td>\n<td align="center"></td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">it will trigger function from parameter if \n<strong>context.event.isLeave</strong>\n is true and function from first parameter return true.</td>\n</tr>\n<tr>\n<td align="center">onBeacon</td>\n<td align="center"></td>\n<td align="center">✅</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">it will trigger function from parameter if \n<strong>context.event.isBeacon</strong>\n is true and function from first parameter return true.</td>\n</tr>\n<tr>\n<td align="center">onCallbackQuery</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">✅</td>\n<td align="center">it will trigger function from parameter if \n<strong>context.event.isCallbackQuery</strong>\n is true and function from first parameter return true.</td>\n</tr>\n<tr>\n<td align="center">onPhoto</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">✅</td>\n<td align="center">it will trigger function from parameter if \n<strong>context.event.isPhoto</strong>\n is true and function from first parameter return true.</td>\n</tr>\n<tr>\n<td align="center">onDocument</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">✅</td>\n<td align="center">it will trigger function from parameter if \n<strong>context.event.isDocument</strong>\n is true and function from first parameter return true.</td>\n</tr>\n<tr>\n<td align="center">onGame</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">✅</td>\n<td align="center">it will trigger function from parameter if \n<strong>context.event.isGame</strong>\n is true and function from first parameter return true.</td>\n</tr>\n<tr>\n<td align="center">onSticker</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">✅</td>\n<td align="center">it will trigger function from parameter if \n<strong>context.event.isSticker</strong>\n is true and function from first parameter return true.</td>\n</tr>\n<tr>\n<td align="center">onVoice</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">✅</td>\n<td align="center">it will trigger function from parameter if \n<strong>context.event.isVoice</strong>\n is true and function from first parameter return true.</td>\n</tr>\n<tr>\n<td align="center">onVideoNote</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">✅</td>\n<td align="center">it will trigger function from parameter if \n<strong>context.event.isVideoNote</strong>\n is true and function from first parameter return true.</td>\n</tr>\n<tr>\n<td align="center">onContact</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">✅</td>\n<td align="center">it will trigger function from parameter if \n<strong>context.event.isContact</strong>\n is true and function from first parameter return true.</td>\n</tr>\n<tr>\n<td align="center">onVenue</td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center"></td>\n<td align="center">✅</td>\n<td align="center">it will trigger function from parameter if \n<strong>context.event.isVenue</strong>\n is true and function from first parameter return true.</td>\n</tr>\n</tbody>\n</table>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n<ul>\n<li><a href="https://github.com/Yoctol/bottender/tree/master/examples/messenger-builder/index.js">MessengerHandler</a></li>\n<li><a href="https://github.com/Yoctol/bottender/tree/master/examples/line-builder/index.js">LineHandler</a></li>\n<li><a href="https://github.com/Yoctol/bottender/tree/master/examples/slack-builder/index.js">SlackHandler</a></li>\n<li><a href="https://github.com/Yoctol/bottender/tree/master/examples/telegram-builder/index.js">TelegramHandler</a></li>\n</ul>\n<p>Let\'s use MessengerHandler as an example.</p>\n<h3 id="ontext"><a href="#ontext" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>onText</code></h3>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>User > yee\nMessengerBot > yee.\nUser > yooooooo~\nMessengerBot > Hi there!\nUser > I am going to sing a song for you.\nMessengerBot > You talk too much!\nUser > yeeeeeee~\nMessengerBot > I do not know what you said.</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> handler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MessengerHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">onText</span><span class="token punctuation">(</span><span class="token string">\'yee\'</span><span class="token punctuation">,</span> <span class="token keyword">async</span> context <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">sendText</span><span class="token punctuation">(</span><span class="token string">\'yee.\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">onText</span><span class="token punctuation">(</span><span class="token regex">/yo/i</span><span class="token punctuation">,</span> <span class="token keyword">async</span> context <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">sendText</span><span class="token punctuation">(</span><span class="token string">\'Hi there!\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">onText</span><span class="token punctuation">(</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> context<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> text<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">20</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">async</span> context <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">sendText</span><span class="token punctuation">(</span><span class="token string">\'You talk too much!\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">onText</span><span class="token punctuation">(</span><span class="token keyword">async</span> context <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">sendText</span><span class="token punctuation">(</span><span class="token string">\'I do not know what you said.\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h3 id="onunhandled"><a href="#onunhandled" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>onUnhandled</code></h3>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>User > yooooooo~\nMessengerBot > Oops. I do nothing.</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> handler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MessengerHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">onText</span><span class="token punctuation">(</span><span class="token keyword">async</span> context <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// event will come here first</span>\n    <span class="token comment" spellcheck="true">// but you do nothing</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">onUnhandled</span><span class="token punctuation">(</span><span class="token keyword">async</span> context <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">sendText</span><span class="token punctuation">(</span><span class="token string">"Oops. I do nothing."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h3 id="onerror"><a href="#onerror" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>onError</code></h3>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>User > yooooooo~\nMessengerBot > Oops. Error happens.</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> handler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MessengerHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">onText</span><span class="token punctuation">(</span>context <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">\'Here comes error!\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">onError</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span>context<span class="token punctuation">,</span> err<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// Here comes error!</span>\n    <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">sendText</span><span class="token punctuation">(</span><span class="token string">"Oops. Error happens."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>',frontmatter:{title:"Handler",date:"October 26, 2017",author:null},fields:{path:"docs/APIReference-Handler.md"}},site:{siteMetadata:{title:"Bottender"}}},pathContext:{slug:"/docs/APIReference-Handler/",_PARENT:"SOURCE"}}}});
//# sourceMappingURL=path---docs-api-reference-handler-813a2eff0ce66eebe2b2.js.map