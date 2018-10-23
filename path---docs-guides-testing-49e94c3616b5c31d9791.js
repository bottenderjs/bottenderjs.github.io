webpackJsonp([0xc472dbdae3f8],{527:function(n,s){n.exports={data:{markdownRemark:{html:'<p>Bottender is built with testing in mind. Your tests could be run with any JavaScript test runners, such as <a href="https://facebook.github.io/jest/">Jest</a>, <a href="https://mochajs.org/">Mocha</a>, <a href="https://github.com/avajs/ava">AVA</a>, and so on.</p>\n<h2 id="unit-test"><a href="#unit-test" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Unit Test</h2>\n<p>Unit tests are tests that focus on the isolated portion of your code, and you can find bugs efficiently when the complexity of code grows as time goes on.</p>\n<p>When creating bots using Bottender, the primary logic of bot is inside your event handler.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// bot.js</span>\n<span class="token keyword">const</span> handler <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./handler\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nbot<span class="token punctuation">.</span><span class="token function">onEvent</span><span class="token punctuation">(</span>handler<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// handler.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token keyword">async</span> context <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>context<span class="token punctuation">.</span>event<span class="token punctuation">.</span>isText<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">sendText</span><span class="token punctuation">(</span><span class="token string">\'You say: \'</span> <span class="token operator">+</span> context<span class="token punctuation">.</span>event<span class="token punctuation">.</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>context<span class="token punctuation">.</span>event<span class="token punctuation">.</span>isMessage<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">sendText</span><span class="token punctuation">(</span><span class="token string">\'Sorry, I only read text messages.\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Then, we can start to test it with a mock context.</p>\n<h3 id="context-mocking"><a href="#context-mocking" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Context Mocking</h3>\n<p>Handlers are just async functions that accept a single context argument. Now, we can use fake ones in the unit tests.</p>\n<p>Here is an example test written with <a href="https://facebook.github.io/jest/">Jest</a>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// __tests__/handler.spec.js</span>\n<span class="token keyword">const</span> handler <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'../handler\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">\'should work\'</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> context <span class="token operator">=</span> <span class="token punctuation">{</span>\n    event<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      isMessage<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      isText<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      text<span class="token punctuation">:</span> <span class="token string">\'Awesome\'</span><span class="token punctuation">,</span>\n      message<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        text<span class="token punctuation">:</span> <span class="token string">\'Awesome\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    sendText<span class="token punctuation">:</span> jest<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">await</span> <span class="token function">handler</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token function">expect</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>sendText<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeCalledWith</span><span class="token punctuation">(</span><span class="token string">\'You say: Awesome\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>After calling the async handler, we can write some assertions to make sure that everything works as expected.</p>\n<blockquote>\n<p>Note: We use <code class="language-text">jest.fn</code> in the example but feel free to use <a href="http://sinonjs.org/">Sinon</a> or any other mocking libraries.</p>\n</blockquote>\n<h3 id="test-utils"><a href="#test-utils" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Test Utils</h3>\n<p>We provide some test utils in the package for convenience purpose. It\'s worth mentioning <code class="language-text">ContextSimulator</code> here, and you can import it from <code class="language-text">bottender/test-utils</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token punctuation">{</span> ContextSimulator <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'bottender/test-utils\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>After simulator instantiated with a specific platform, you can create a mocking context with several helper methods:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> simulator <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ContextSimulator</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  platform<span class="token punctuation">:</span> <span class="token string">\'messenger\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> context <span class="token operator">=</span> simulator<span class="token punctuation">.</span><span class="token function">createTextContext</span><span class="token punctuation">(</span><span class="token string">\'Awesome\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>And we can use created context same way as the above example:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// __tests__/handler.spec.js</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> ContextSimulator <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'bottender/test-utils\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> handler <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'../handler\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> simulator <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ContextSimulator</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  platform<span class="token punctuation">:</span> <span class="token string">\'messenger\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">\'should work\'</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> context <span class="token operator">=</span> simulator<span class="token punctuation">.</span><span class="token function">createTextContext</span><span class="token punctuation">(</span><span class="token string">\'Awesome\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">await</span> <span class="token function">handler</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token function">expect</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>sendText<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeCalledWith</span><span class="token punctuation">(</span><span class="token string">\'You say: Awesome\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h2 id="e2e-test"><a href="#e2e-test" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>E2E Test</h2>\n<p>Coming Soon. We are working on a brand-new end-to-end testing library for bots. We will release it in the near future.</p>',frontmatter:{title:"Testing",date:"October 15, 2017",author:null},fields:{path:"docs/Guides-Testing.md"}},site:{siteMetadata:{title:"Bottender"}}},pathContext:{slug:"/docs/Guides-Testing/"}}}});
//# sourceMappingURL=path---docs-guides-testing-49e94c3616b5c31d9791.js.map