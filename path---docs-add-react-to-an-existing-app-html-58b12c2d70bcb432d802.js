webpackJsonp([0x60315cc1a1fa],{832:function(e,a){e.exports={data:{markdownRemark:{html:'<p>You don’t need to rewrite your app to start using React.</p>\n<p>We recommend adding React to a small part of your application, such as an individual widget, so you can see if it works well for your use case.</p>\n<p>While React <a href="/docs/react-without-es6.html">can be used</a> without a build pipeline, we recommend setting it up so you can be more productive. A modern build pipeline typically consists of:</p>\n<ul>\n<li>A <strong>package manager</strong>, such as <a href="https://yarnpkg.com/">Yarn</a> or <a href="https://www.npmjs.com/">npm</a>. It lets you take advantage of a vast ecosystem of third-party packages, and easily install or update them.</li>\n<li>A <strong>bundler</strong>, such as <a href="https://webpack.js.org/">webpack</a> or <a href="http://browserify.org/">Browserify</a>. It lets you write modular code and bundle it together into small packages to optimize load time.</li>\n<li>A <strong>compiler</strong> such as <a href="http://babeljs.io/">Babel</a>. It lets you write modern JavaScript code that still works in older browsers.</li>\n</ul>\n<h3 id="installing-react"><a href="#installing-react" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installing React</h3>\n<blockquote>\n<p><strong>Note:</strong></p>\n<p>Once installed, we strongly recommend setting up a <a href="/docs/optimizing-performance.html#use-the-production-build">production build process</a> to ensure you’re using the fast version of React in production.</p>\n</blockquote>\n<p>We recommend using <a href="https://yarnpkg.com/">Yarn</a> or <a href="https://www.npmjs.com/">npm</a> for managing front-end dependencies. If you’re new to package managers, the <a href="https://yarnpkg.com/en/docs/getting-started">Yarn documentation</a> is a good place to get started.</p>\n<p>To install React with Yarn, run:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code class="gatsby-code-bash">yarn init\nyarn add react react-dom\n</code></pre>\n      </div>\n<p>To install React with npm, run:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code class="gatsby-code-bash"><span class="token function">npm</span> init\n<span class="token function">npm</span> <span class="token function">install</span> --save react react-dom\n</code></pre>\n      </div>\n<p>Both Yarn and npm download packages from the <a href="http://npmjs.com/">npm registry</a>.</p>\n<blockquote>\n<p> Note:</p>\n<p> To prevent potential incompatibilities, all react packages should use the same version. (This includes <code class="gatsby-code-text">react</code>, <code class="gatsby-code-text">react-dom</code>, <code class="gatsby-code-text">react-test-renderer</code>, etc.)</p>\n</blockquote>\n<h3 id="enabling-es6-and-jsx"><a href="#enabling-es6-and-jsx" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Enabling ES6 and JSX</h3>\n<p>We recommend using React with <a href="http://babeljs.io/">Babel</a> to let you use ES6 and JSX in your JavaScript code. ES6 is a set of modern JavaScript features that make development easier, and JSX is an extension to the JavaScript language that works nicely with React.</p>\n<p>The <a href="https://babeljs.io/docs/setup/">Babel setup instructions</a> explain how to configure Babel in many different build environments. Make sure you install <a href="http://babeljs.io/docs/plugins/preset-react/#basic-setup-with-the-cli-"><code class="gatsby-code-text">babel-preset-react</code></a> and <a href="http://babeljs.io/docs/plugins/preset-env/"><code class="gatsby-code-text">babel-preset-env</code></a> and enable them in your <a href="http://babeljs.io/docs/usage/babelrc/"><code class="gatsby-code-text">.babelrc</code> configuration</a>, and you’re good to go.</p>\n<h3 id="hello-world-with-es6-and-jsx"><a href="#hello-world-with-es6-and-jsx" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Hello World with ES6 and JSX</h3>\n<p>We recommend using a bundler like <a href="https://webpack.js.org/">webpack</a> or <a href="http://browserify.org/">Browserify</a>, so you can write modular code and bundle it together into small packages to optimize load time.</p>\n<p>The smallest React example looks like this:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">\'react-dom\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Hello<span class="token punctuation">,</span> world<span class="token operator">!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'root\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>This code renders into a DOM element with the id of <code class="gatsby-code-text">root</code>, so you need <code class="gatsby-code-text">&lt;div id=&quot;root&quot;&gt;&lt;/div&gt;</code> somewhere in your HTML file.</p>\n<p>Similarly, you can render a React component inside a DOM element somewhere inside your existing app written with any other JavaScript UI library.</p>\n<p><a href="/docs/integrating-with-other-libraries.html#integrating-with-other-view-libraries">Learn more about integrating React with existing code.</a></p>\n<h3 id="development-and-production-versions"><a href="#development-and-production-versions" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Development and Production Versions</h3>\n<p>By default, React includes many helpful warnings. These warnings are very useful in development.</p>\n<p><strong>However, they make the development version of React larger and slower so you should use the production version when you deploy the app.</strong></p>\n<p>Learn <a href="/docs/optimizing-performance.html#use-the-production-build">how to tell if your website is serving the right version of React</a>, and how to configure the production build process most efficiently:</p>\n<ul>\n<li><a href="/docs/optimizing-performance.html#create-react-app">Creating a Production Build with Create React App</a></li>\n<li><a href="/docs/optimizing-performance.html#single-file-builds">Creating a Production Build with Single-File Builds</a></li>\n<li><a href="/docs/optimizing-performance.html#brunch">Creating a Production Build with Brunch</a></li>\n<li><a href="/docs/optimizing-performance.html#browserify">Creating a Production Build with Browserify</a></li>\n<li><a href="/docs/optimizing-performance.html#rollup">Creating a Production Build with Rollup</a></li>\n<li><a href="/docs/optimizing-performance.html#webpack">Creating a Production Build with webpack</a></li>\n</ul>\n<h3 id="using-a-cdn"><a href="#using-a-cdn" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using a CDN</h3>\n<p>If you don’t want to use npm to manage client packages, the <code class="gatsby-code-text">react</code> and <code class="gatsby-code-text">react-dom</code> npm packages also provide single-file distributions in <code class="gatsby-code-text">umd</code> folders. See the <a href="/docs/cdn-links.html">CDN</a> page for links.</p>',frontmatter:{title:"Add React to an Existing Application",next:"cdn-links.html",prev:"add-react-to-a-new-app.html"},fields:{path:"docs/add-react-to-an-existing-app.md",slug:"docs/add-react-to-an-existing-app.html"}}},pathContext:{slug:"docs/add-react-to-an-existing-app.html"}}}});
//# sourceMappingURL=path---docs-add-react-to-an-existing-app-html-58b12c2d70bcb432d802.js.map