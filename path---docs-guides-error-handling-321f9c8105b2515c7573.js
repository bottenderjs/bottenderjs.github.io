webpackJsonp([0x82b1da1934dc],{633:function(n,a){n.exports={data:{markdownRemark:{html:'<p>When you develop a bot using Bottender, you can use the following approaches for error handling:</p>\n<ul>\n<li><a href="#try-catch">Try Catch</a></li>\n<li><a href="#onerror">onError</a></li>\n</ul>\n<h3 id="try-catch"><a href="#try-catch" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Try Catch</h3>\n<p>Bottender leverages one of the JS features <code class="language-text">async/await</code>. It means that you can use <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch"><code class="language-text">try...catch</code></a> to handle error.</p>\n<p>Put the <code class="language-text">try block</code> inside the handler function, and the error will be caught.</p>\n<p>For example:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">bot<span class="token punctuation">.</span><span class="token function">onEvent</span><span class="token punctuation">(</span><span class="token keyword">async</span> context <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">try</span> <span class="token punctuation">{</span>\n    <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">sendText</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// handle errors here...</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2 id="onerror"><a href="#onerror" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>onError</h2>\n<p>Bottender also supports builder approaches to handle error. Use <code class="language-text">builder.onError</code> and pass the error handler function. You will get the error at the second parameter in the handler function.</p>\n<p>For example:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// you can choose other supported handler accroding to the platform</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> MessengerHandler <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'bottender\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> handler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MessengerHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">onEvent</span><span class="token punctuation">(</span><span class="token keyword">async</span> context <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">\'An error happened!\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">onError</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span>context<span class="token punctuation">,</span> err<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token comment">// handle errors here...</span>\n    <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">sendText</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nbot<span class="token punctuation">.</span><span class="token function">onEvent</span><span class="token punctuation">(</span>handler<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><a href="https://github.com/Yoctol/bottender/tree/master/examples/messenger-builder">Here</a> is the full example of Messenger builder.</p>',frontmatter:{title:"Error Handling",date:"October 13, 2017",author:null},fields:{path:"docs/Guides-ErrorHandling.md"}},site:{siteMetadata:{title:"Bottender"}}},pathContext:{slug:"/docs/Guides-ErrorHandling/"}}}});
//# sourceMappingURL=path---docs-guides-error-handling-321f9c8105b2515c7573.js.map