(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(16)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(3),l=a.n(i),o=(a(11),a(1));function c(e,t){var a=t,s=null,n=e.length-1;do{++a===n?s=n:">"===e[a]&&(s=a)}while(!s);return s}var d=function e(t,a){var s=function e(t){if("<"!==t[0]){var a=t.indexOf("<");return a>-1?a-1:t.length-1}var s=0,n=null;do{"<"!==t[++s]&&"/"!==t[s]||(s>=t.length-1?n=t.length-1:"</"===t.substr(s,2)?n=c(t,s+1):"/>"===t.substr(s,2)?n=s+1:"<br>"===t.substr(s,4)?s+=4:"<img"===t.substr(s,4)||"<hr"===t.substr(s,3)?s=c(t,s+4):"<"===t[s]&&(s+=e(t.substr(s,t.length-s))))}while(!n);return n}(a)+1,n=a.substr(0,s),i=[].concat(Object(o.a)(t),[n]);return s<a.length?e(i,a.substr(s,a.length-s)):i},r=function(e){console.time("cleanPost");var t=e.replace(/(?:\r\n|\r|\n)/g,"");console.timeEnd("cleanPost"),console.time("childNodes via DOM");var a=document.createElement("DIV");a.insertAdjacentHTML("beforeend",t);var s=Object(o.a)(a.childNodes[0].childNodes).map(function(e){return function(e){var t=document.createElement("div");t.appendChild(e.cloneNode(!0));var a=t.innerHTML;return t=e=null,a}(e)});console.timeEnd("childNodes via DOM"),console.time("childNodes via text");var n=t.substring(t.indexOf(">")+1,t.lastIndexOf("<")),i=d([],n);return console.timeEnd("childNodes via text"),s.map(function(e,t){e!==i[t]&&console.error("Text parser has defference in node index ".concat(t),{dom:e,text:i[t]})}),i},g=a(4),m=function(e){var t=e.html,a=Object(g.a)(e,["html"]),i=n.a.createRef();return Object(s.useEffect)(function(){Object(o.a)(i.current.getElementsByTagName("script")).map(function(e){var t=document.createElement("script");return e.src?t.src=e.src:e.textContent?t.textContent=e.textContent:e.innerText&&(t.innerText=e.innerText),document.body.appendChild(t),e.parentNode.removeChild(e),e})}),n.a.createElement("div",Object.assign({ref:i,dangerouslySetInnerHTML:{__html:t}},a))},h=(a(12),function(e){var t=e.code;return n.a.createElement(m,{html:t,className:"banner"})}),f=(a(13),function(e){var t=e.code;return n.a.createElement(m,{html:t,className:"sideBanner"})}),b=(a(14),function(e){var t=e.post,a=e.banner,i=t.substr(0,t.indexOf(">")+1),l=function(e){return"".concat(i).concat(e,"</div>")},c=r(t),d=Math.floor(c.length/5)+1,g=Object(o.a)(Array(d).keys()).map(function(e){return c.slice(5*e,5*(e+1)).join("")});return n.a.createElement("div",{className:"articleContainer"},g.map(function(e,t){return n.a.createElement(s.Fragment,{key:t},t>0&&n.a.createElement(h,{code:a}),n.a.createElement("div",{className:"articleGrid"},n.a.createElement("div",{className:"articleSideColumn"},n.a.createElement(f,{code:a})),n.a.createElement("div",{className:"articleContentColumn"},n.a.createElement(m,{html:l(e)})),n.a.createElement("div",{className:"articleSideColumn"},n.a.createElement(f,{code:a}))))}))}),p=(a(15),function(){return n.a.createElement("div",{className:"App"},n.a.createElement(b,{post:'<div data-ui-id="post" class="bfg-post"><div class="bfg-prison"><div data-col-width="3" class="bfg-machine-gun bfg-machine-gun_last"><p class="bfg-destroy">One of the most enjoyable parts of working on the web is that you get to work in such a visual medium. I big part of the visual aspect is obviously the way it looks. Styling a web page has come along way from its early roots of adding markup and attributes to change things like fonts and colors, to Cascading Style Sheets of today. Now in our world of Web applications and JS Frameworks, the web has evolved and so have best practices. This is especially true when working in a framework like React.</p></div><div data-col-width="1" class="bfg-machine-gun bfg-machine-gun_empty"><p class="bfg-destroy ce-element--empty bfg-element_no-text"></p></div></div><div class="bfg-prison"><div data-col-width="3" class="bfg-machine-gun bfg-machine-gun_last"><h2 class="bfg-destroy bfg-theme__style_large_header">How Does One \u201cStyle\u201d Your Web Page Using React?</h2></div><div data-col-width="1" class="bfg-machine-gun bfg-machine-gun_empty"><p class="bfg-destroy ce-element--empty bfg-element_no-text"></p></div></div><div class="bfg-prison"><div data-col-width="3" class="bfg-machine-gun bfg-machine-gun_last"><p class="bfg-destroy ">React, on its own and without any other tool, support two ways to style elements: the style prop, the style tag, and CSS style sheets. The style prop takes a JS object of CSS properties and values and ultimately translates that to inlines styles of an element, like this:</p></div><div data-col-width="1" class="bfg-machine-gun bfg-machine-gun_empty"><p class="bfg-destroy ce-element--empty bfg-element_no-text"></p></div></div><div class="bfg-prison"><div data-col-width="3" class="bfg-machine-gun bfg-machine-gun_last"><p class="bfg-destroy small-text">// JSX<br>&lt;div style={{ color:\'red\'}}&gt;<br>   Red Text<br>&lt;/div&gt;<br> <br>//DOM <br>&lt;div style="color:red;"&gt;<br>   Red Text<br>&lt;/div&gt;</p></div><div data-col-width="1" class="bfg-machine-gun bfg-machine-gun_empty"><p class="bfg-destroy ce-element--empty bfg-element_no-text"></p></div></div><div class="bfg-prison"><div data-col-width="3" class="bfg-machine-gun bfg-machine-gun_last"><p class="bfg-destroy ">Since it\u2019s just inline styles, you still get the highest specificity but you are limited on what you have access to style.</p></div><div data-col-width="1" class="bfg-machine-gun bfg-machine-gun_empty"><p class="bfg-destroy ce-element--empty bfg-element_no-text"></p></div></div><div class="bfg-prison"><div data-col-width="3" class="bfg-machine-gun bfg-machine-gun_last"><figure class="bfg-destroy bfg-embed-figure bfg-embed_rendered" data-rocket-launcher="embed"><code class="bfg-destroy bfg-code" style="--bfg-embed-height-ratio:null;padding-top:null"><div data-smurf="hmurf" data-id="42">smhf embed</div></code><figcaption class="bfg-destroy bfg-description" data-rocket-launcher="description"></figcaption></figure></div><div data-col-width="1" class="bfg-machine-gun bfg-machine-gun_empty"><p class="bfg-destroy ce-element--empty bfg-element_no-text"></p></div></div><div class="bfg-prison"><div data-col-width="3" class="bfg-machine-gun bfg-machine-gun_last"><p class="bfg-destroy ">The style tag and CSS style sheets work just the same as working with pure HTML markup. The biggest difference is that you have to use theclassNameprop instead of class. Both the id prop and className prop take either a string or an expression the evaluates to a string, like this:</p></div><div data-col-width="1" class="bfg-machine-gun bfg-machine-gun_empty"><p class="bfg-destroy ce-element--empty bfg-element_no-text"></p></div></div><div class="bfg-prison"><div data-col-width="3" class="bfg-machine-gun bfg-machine-gun_last"><p class="bfg-destroy small-text">//JSX<br>&lt;div <br>  id="side-bar" <br>  className={isSmall ? \'side-bar--small\' : \'side-bar\'}<br>DOM<br>&lt;div id="side-bar" class="side-bar"/&gt;</p></div><div data-col-width="1" class="bfg-machine-gun bfg-machine-gun_empty"><p class="bfg-destroy ce-element--empty bfg-element_no-text"></p></div></div><div class="bfg-prison"><div data-col-width="3" class="bfg-machine-gun bfg-machine-gun_last"><p class="bfg-destroy ">Maintaining CSS at scale can become very challenging so the React community has built tools that improve the developer experience in maintaining CSS at scale. There are several that have been created, but the two biggest are probably CSS modules and CSS-in-JS( and more specifically styled-components/emotion).</p></div><div data-col-width="1" class="bfg-machine-gun bfg-machine-gun_empty"><p class="bfg-destroy ce-element--empty bfg-element_no-text"></p></div></div><div class="bfg-container bfg-theme__spec bfg-theme__card" data-rocket-launcher="container" data-container-name="Card"><p class="small-text bfg-theme__mb_0 bfg-destroy">\n    <strong class="bfg-destroy">SUBJECT</strong>\n  </p><hr class="bfg-destroy"><h3 class="bfg-destroy bfg-theme__style_medium_header">\n    Header\n  </h3><p class="small-text bfg-theme__mb_15 bfg-destroy">\n    <em class="bfg-destroy">Short optional lead</em>\n  </p><p class="small-text bfg-destroy">\n    A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart\n  </p><p class="small-text bfg-destroy">\n    <img class="bfg-theme__symbol bfg-icon" src="https://miro.medium.com/fit/c/64/64/0*TijqmrJna-i8bUWW.">&nbsp;<a href="http://example.com" target="_blank" class="bfg-destroy">Website</a>\n  </p></div><div class="bfg-prison"><div data-col-width="3" class="bfg-machine-gun bfg-machine-gun_last"><p class="bfg-destroy ">CSS Modules allow you to treat a CSS file like a JS Module. You import a CSS file and the classes in the CSS file are treated like properties on a JS object, like this:</p></div><div data-col-width="1" class="bfg-machine-gun bfg-machine-gun_empty"><p class="bfg-destroy ce-element--empty bfg-element_no-text"></p></div></div><div class="bfg-prison"><div data-col-width="3" class="bfg-machine-gun bfg-machine-gun_last"><p class="bfg-destroy small-text">import css from \'./index.css\';&lt;div className={css.gridLayout}/&gt;//DOM<br>&lt;div class="gridLayout-5xyn87oq5x"/&gt;</p></div><div data-col-width="1" class="bfg-machine-gun bfg-machine-gun_empty"><p class="bfg-destroy ce-element--empty bfg-element_no-text"></p></div></div><div class="bfg-prison"><div data-col-width="3" class="bfg-machine-gun bfg-machine-gun_last"><p class="bfg-destroy ">You\u2019ll notice that the class that was ultimately used was the name of the class plus a hash. This hash is added to the class to ensure that it is unique in our app.</p></div><div data-col-width="1" class="bfg-machine-gun bfg-machine-gun_empty"><p class="bfg-destroy ce-element--empty bfg-element_no-text"></p></div></div><div class="bfg-prison"><div data-col-width="3" class="bfg-machine-gun bfg-machine-gun_last"><figure class="bfg-destroy bfg-embed-figure bfg-embed_rendered" data-rocket-launcher="embed"><code class="bfg-destroy bfg-code"><div data-smurf="hmurf" data-id="43">smhf 2 embed</div></code><figcaption class="bfg-destroy bfg-description" data-rocket-launcher="description"></figcaption></figure></div><div data-col-width="1" class="bfg-machine-gun bfg-machine-gun_empty"><p class="bfg-destroy ce-element--empty bfg-element_no-text"></p></div></div><div class="bfg-prison"><div data-col-width="3" class="bfg-machine-gun bfg-machine-gun_last"><p class="bfg-destroy ">This allows the developer to not need to know the whole scope of the app and how the CSS that we are writing is going to impact the rest of the Cascade. In fact, it\u2019s typical for each component to have its own CSS file associated with it when you are using CSS modules. CSS Modules needs to be enabled as part of a build process, for example in Webpack to be able to take advantage of the tool.</p></div><div data-col-width="1" class="bfg-machine-gun bfg-machine-gun_empty"><p class="bfg-destroy ce-element--empty bfg-element_no-text"></p></div></div><div class="bfg-prison"><div data-col-width="3" class="bfg-machine-gun bfg-machine-gun_last"><p class="bfg-destroy ">Styled-Component and Emotion are two very popular libraries that fulfill the same goal as CSS modules but goes about it in a different way. Both libraries take advantage of the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates" target="_blank" class="bfg-destroy">tagged template literals</a> syntax, introduced in ES6. Simply put, tagged template literals are functions that are invoked with a template literal strings. The function parses the template literals and can act accordingly.</p></div><div data-col-width="1" class="bfg-machine-gun bfg-machine-gun_empty"><p class="bfg-destroy ce-element--empty bfg-element_no-text"></p></div></div><div class="bfg-prison"><div data-col-width="3" class="bfg-machine-gun bfg-machine-gun_last"><p class="bfg-destroy ">How these libraries work is you write CSS as a template string, the function parses the template string, injects it into a style tag of the document, and returns a component with the appropriate class injected into it already. Here is an example of how it works (the example is using styled-components, but emotion uses an almost identical API):</p></div><div data-col-width="1" class="bfg-machine-gun bfg-machine-gun_empty"><p class="bfg-destroy ce-element--empty bfg-element_no-text"></p></div></div><div class="bfg-prison"><div data-col-width="3" class="bfg-machine-gun bfg-machine-gun_last"><p class="bfg-destroy small-text"></p></div><div data-col-width="1" class="bfg-machine-gun bfg-machine-gun_empty"><p class="bfg-destroy ce-element--empty bfg-element_no-text"></p></div></div><div class="bfg-prison"><div data-col-width="3" class="bfg-machine-gun bfg-machine-gun_last"><p class="bfg-destroy ">As you can see, it reaches the same goal as CSS Module, but rather than creating the scoped class at build time, it builds the CSS at runtime. This allows for many cool features that are beyond the scope of this post, but I would encourage you to check them out the docs for <a href="https://www.styled-components.com/docs" target="_blank" class="bfg-destroy">styled-components</a> and <a href="https://emotion.sh/docs/introduction" target="_blank" class="bfg-destroy">emotion</a>.</p></div><div data-col-width="1" class="bfg-machine-gun bfg-machine-gun_empty"><p class="bfg-destroy ce-element--empty bfg-element_no-text"></p></div></div><div class="bfg-prison"><div data-col-width="3" class="bfg-machine-gun bfg-machine-gun_last"><p class="bfg-destroy ">With all these ways to style, what is the best way to style? Much is subjective and really depends on the developer or developer teams preference. That said, there are some best practices that have emerged.</p></div><div data-col-width="1" class="bfg-machine-gun bfg-machine-gun_empty"><p class="bfg-destroy ce-element--empty bfg-element_no-text"></p></div></div><div class="bfg-prison"><div data-col-width="3" class="bfg-machine-gun bfg-machine-gun_last"><h3 class="bfg-destroy bfg-theme__style_medium_header">Inline Styles are No Longer \u201cBad\u201d</h3></div><div data-col-width="1" class="bfg-machine-gun bfg-machine-gun_empty"><p class="bfg-destroy ce-element--empty bfg-element_no-text"></p></div></div><div class="bfg-prison"><div data-col-width="3" class="bfg-machine-gun bfg-machine-gun_last"><p class="bfg-destroy ">One of the first things I learned when learning CSS was that inline styles were bad, didn\u2019t scale well, and should be avoided at all cost. But it\u2019s important to understand the reasons why they are considered \u201cbad\u201d.</p></div><div data-col-width="1" class="bfg-machine-gun bfg-machine-gun_empty"><p class="bfg-destroy ce-element--empty bfg-element_no-text"></p></div></div><div class="bfg-prison"><div data-col-width="3" class="bfg-machine-gun bfg-machine-gun_last"><p class="bfg-destroy ">Inline styles are considered bad because inline styles only apply to that specific element. If you need to reproduce that same style, such as a primary button, you have to copy and paste from one part of your app to another. Now when you factor in sweeping style changes and styles that are only partially the same across two elements, you have a nightmare to maintain.</p></div><div data-col-width="1" class="bfg-machine-gun bfg-machine-gun_empty"><p class="bfg-destroy ce-element--empty bfg-element_no-text"></p></div></div><div class="bfg-prison"><div data-col-width="3" class="bfg-machine-gun bfg-machine-gun_last"><p class="bfg-destroy ">In a component-based framework, like React, this is not a factor anymore. If you have a need for a styled element in more than one place, you use the same component in both places. If the style changes for both elements, you still only have one component to update so it doesn\u2019t have the same scaling issues as when you work with HTML directly.</p></div><div data-col-width="1" class="bfg-machine-gun bfg-machine-gun_empty"><p class="bfg-destroy ce-element--empty bfg-element_no-text"></p></div></div></div>',banner:'<h1 class="banner-text">banner</h1><script>console.log("banner inited", new Date().getTime());<\/script>'}))});l.a.render(n.a.createElement(p,null),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.b8adab99.chunk.js.map