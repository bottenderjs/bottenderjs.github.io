webpackJsonp([23354955480257],{519:function(n,s){n.exports={data:{markdownRemark:{html:'<p>To create a custom connector, you must implement the following classes: </p>\n<ul>\n<li><code class="language-text">CustomConnector</code> </li>\n<li><code class="language-text">CustomContext</code> </li>\n<li><code class="language-text">CustomEvent</code> </li>\n<li><code class="language-text">CustomClient</code> (optional) </li>\n</ul>\n<h2 id="customevent"><a href="#customevent" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>CustomEvent</h2>\n<p>The event is a parser for the platform raw event. For example, if text messages have the following format on the custom platform:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token punctuation">{</span>\n  user<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    id<span class="token punctuation">:</span> <span class="token string">\'123456\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  message<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    text<span class="token punctuation">:</span> <span class="token string">\'Hello, world\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>You can write a <code class="language-text">CustomEvent</code> class to hide the underlying complex raw event detail:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">class</span> <span class="token class-name">CustomEvent</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>rawEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>_rawEvent <span class="token operator">=</span> rawEvent<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">get</span> <span class="token function">rawEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_rawEvent<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">get</span> <span class="token function">isText</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token operator">!</span><span class="token operator">!</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_rawEvent<span class="token punctuation">.</span>message <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_rawEvent<span class="token punctuation">.</span>message<span class="token punctuation">.</span>text<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">get</span> <span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>isText<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_rawEvent<span class="token punctuation">.</span>message<span class="token punctuation">.</span>text<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Following getters are commonly cross-platform implemented:</p>\n<ul>\n<li><code class="language-text">rawEvent</code></li>\n<li><code class="language-text">isMessage</code></li>\n<li><code class="language-text">message</code></li>\n<li><code class="language-text">isText</code></li>\n<li><code class="language-text">text</code></li>\n<li><code class="language-text">isPayload</code></li>\n<li><code class="language-text">payload</code></li>\n</ul>\n<p>Feel free to implement platform only getter on it.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">class</span> <span class="token class-name">CustomEvent</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  <span class="token keyword">get</span> <span class="token function">isSuperCoolSomething</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h2 id="customcontext"><a href="#customcontext" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>CustomContext</h2>\n<p>The context is an abstraction of the current conversation context. Every context instance includes event, session, state, and all available context methods:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token punctuation">{</span>\n  event<span class="token punctuation">,</span>\n  session<span class="token punctuation">,</span>\n  state<span class="token punctuation">,</span>\n  <span class="token operator">...</span>contextMethods<span class="token punctuation">,</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>You can write those context side effect methods directly or wrap another <code class="language-text">CustomClient</code> class to do the job.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">class</span> <span class="token class-name">CustomContext</span> <span class="token keyword">extends</span> <span class="token class-name">Context</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    event<span class="token punctuation">,</span>\n    session<span class="token punctuation">,</span>\n    initialState<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">{</span> event<span class="token punctuation">,</span> session<span class="token punctuation">,</span> initialState <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">get</span> <span class="token function">platform</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token string">\'custom\'</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">async</span> <span class="token function">sendText</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">async</span> <span class="token function">typing</span><span class="token punctuation">(</span>milliseconds<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Following methods are commonly cross-platform implemented:</p>\n<ul>\n<li><code class="language-text">sendText</code></li>\n<li><code class="language-text">typing</code></li>\n</ul>\n<h2 id="customconnector"><a href="#customconnector" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>CustomConnector</h2>\n<p>The connector is a bridge between bot and platform. You need to implement the following methods to tell bot how to find session key from the request and create conversation context.</p>\n<h3 id="getuniquesessionkey"><a href="#getuniquesessionkey" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>getUniqueSessionKey</h3>\n<p>Find a unique session identifier, for example, user id, group id, channel id...and so on.</p>\n<h3 id="updatesession"><a href="#updatesession" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>updateSession</h3>\n<p>If you need to prefetch something data or do some check for the session, you can put the logic here.</p>\n<h3 id="maprequesttoevents"><a href="#maprequesttoevents" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>mapRequestToEvents</h3>\n<p>One request may have one or more than one raw events. For example, Messenger and LINE batch events into one request in some situation. Accordingly, you must return an array of event instances in this method.  </p>\n<h3 id="createcontext"><a href="#createcontext" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>createContext</h3>\n<p>Context factory.</p>\n<p>Basic reference implementation:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">class</span> <span class="token class-name">CustomConnector</span> <span class="token punctuation">{</span>\n  <span class="token keyword">get</span> <span class="token function">platform</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token string">\'custom\'</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">getUniqueSessionKey</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> body<span class="token punctuation">.</span>user<span class="token punctuation">.</span>id<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">updateSession</span><span class="token punctuation">(</span>session<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// do nothing</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">mapRequestToEvents</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">CustomEvent</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">createContext</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    event<span class="token punctuation">,</span>\n    session<span class="token punctuation">,</span>\n    initialState<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">CustomContext</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      event<span class="token punctuation">,</span>\n      session<span class="token punctuation">,</span>\n      initialState<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Finally, you can use <code class="language-text">CustomConnector</code> as a connector to create your bot:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token punctuation">{</span> Bot <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'bottender\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bot</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  connector<span class="token punctuation">:</span> <span class="token keyword">new</span> <span class="token class-name">CustomConnector</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token comment">/* */</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>That\'s it!</p>',frontmatter:{title:"CustomConnector",date:"July 09, 2018",author:null},fields:{path:"docs/Guides-CustomConnector.md"}},site:{siteMetadata:{title:"Bottender"}}},pathContext:{slug:"/docs/Guides-CustomConnector/"}}}});
//# sourceMappingURL=path---docs-guides-custom-connector-de278fcf27bb09cfef7a.js.map