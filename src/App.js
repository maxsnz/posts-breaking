import React from 'react';
import Article from './Article';
import './App.css';

const post1 = `
<div data-ui-id="post" class="bfg-post"><div class="bfg-prison"><div data-col-width="3" class="bfg-machine-gun bfg-machine-gun_last"><p class="bfg-destroy">One of the most enjoyable parts of working on the web is that you get to work in such a visual medium. I big part of the visual aspect is obviously the way it looks. Styling a web page has come along way from its early roots of adding markup and attributes to change things like fonts and colors, to Cascading Style Sheets of today. Now in our world of Web applications and JS Frameworks, the web has evolved and so have best practices. This is especially true when working in a framework like React.</p></div><div data-col-width="1" class="bfg-machine-gun bfg-machine-gun_empty"><p class="bfg-destroy ce-element--empty bfg-element_no-text"></p></div></div><div class="bfg-prison"><div data-col-width="3" class="bfg-machine-gun bfg-machine-gun_last"><h2 class="bfg-destroy bfg-theme__style_large_header">How Does One “Style” Your Web Page Using React?</h2></div><div data-col-width="1" class="bfg-machine-gun bfg-machine-gun_empty"><p class="bfg-destroy ce-element--empty bfg-element_no-text"></p></div></div><div class="bfg-prison"><div data-col-width="3" class="bfg-machine-gun bfg-machine-gun_last"><p class="bfg-destroy ">React, on its own and without any other tool, support two ways to style elements: the style prop, the style tag, and CSS style sheets. The style prop takes a JS object of CSS properties and values and ultimately translates that to inlines styles of an element, like this:</p></div><div data-col-width="1" class="bfg-machine-gun bfg-machine-gun_empty"><p class="bfg-destroy ce-element--empty bfg-element_no-text"></p></div></div><div class="bfg-prison"><div data-col-width="3" class="bfg-machine-gun bfg-machine-gun_last"><p class="bfg-destroy small-text">// JSX<br>&lt;div style={{ color:'red'}}&gt;<br>   Red Text<br>&lt;/div&gt;<br> <br>//DOM <br>&lt;div style="color:red;"&gt;<br>   Red Text<br>&lt;/div&gt;</p></div><div data-col-width="1" class="bfg-machine-gun bfg-machine-gun_empty"><p class="bfg-destroy ce-element--empty bfg-element_no-text"></p></div></div><div class="bfg-prison"><div data-col-width="3" class="bfg-machine-gun bfg-machine-gun_last"><p class="bfg-destroy ">Since it’s just inline styles, you still get the highest specificity but you are limited on what you have access to style.</p></div><div data-col-width="1" class="bfg-machine-gun bfg-machine-gun_empty"><p class="bfg-destroy ce-element--empty bfg-element_no-text"></p></div></div><div class="bfg-prison"><div data-col-width="3" class="bfg-machine-gun bfg-machine-gun_last"><figure class="bfg-destroy bfg-embed-figure bfg-embed_rendered" data-rocket-launcher="embed"><code class="bfg-destroy bfg-code" style="--bfg-embed-height-ratio:null;padding-top:null"><div data-smurf="hmurf" data-id="42">smhf embed</div></code><figcaption class="bfg-destroy bfg-description" data-rocket-launcher="description"></figcaption></figure></div><div data-col-width="1" class="bfg-machine-gun bfg-machine-gun_empty"><p class="bfg-destroy ce-element--empty bfg-element_no-text"></p></div></div><div class="bfg-prison"><div data-col-width="3" class="bfg-machine-gun bfg-machine-gun_last"><p class="bfg-destroy ">The style tag and CSS style sheets work just the same as working with pure HTML markup. The biggest difference is that you have to use theclassNameprop instead of class. Both the id prop and className prop take either a string or an expression the evaluates to a string, like this:</p></div><div data-col-width="1" class="bfg-machine-gun bfg-machine-gun_empty"><p class="bfg-destroy ce-element--empty bfg-element_no-text"></p></div></div><div class="bfg-prison"><div data-col-width="3" class="bfg-machine-gun bfg-machine-gun_last"><p class="bfg-destroy small-text">//JSX<br>&lt;div <br>  id="side-bar" <br>  className={isSmall ? 'side-bar--small' : 'side-bar'}<br>DOM<br>&lt;div id="side-bar" class="side-bar"/&gt;</p></div><div data-col-width="1" class="bfg-machine-gun bfg-machine-gun_empty"><p class="bfg-destroy ce-element--empty bfg-element_no-text"></p></div></div><div class="bfg-prison"><div data-col-width="3" class="bfg-machine-gun bfg-machine-gun_last"><p class="bfg-destroy ">Maintaining CSS at scale can become very challenging so the React community has built tools that improve the developer experience in maintaining CSS at scale. There are several that have been created, but the two biggest are probably CSS modules and CSS-in-JS( and more specifically styled-components/emotion).</p></div><div data-col-width="1" class="bfg-machine-gun bfg-machine-gun_empty"><p class="bfg-destroy ce-element--empty bfg-element_no-text"></p></div></div><div class="bfg-container bfg-theme__spec bfg-theme__card" data-rocket-launcher="container" data-container-name="Card"><p class="small-text bfg-theme__mb_0 bfg-destroy">
<strong class="bfg-destroy">SUBJECT</strong>
</p><hr class="bfg-destroy"><h3 class="bfg-destroy bfg-theme__style_medium_header">
Header
</h3><p class="small-text bfg-theme__mb_15 bfg-destroy">
<em class="bfg-destroy">Short optional lead</em>
</p><p class="small-text bfg-destroy">
A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart
</p><p class="small-text bfg-destroy">
<img class="bfg-theme__symbol bfg-icon" src="https://miro.medium.com/fit/c/64/64/0*TijqmrJna-i8bUWW.">&nbsp;<a href="http://example.com" target="_blank" class="bfg-destroy">Website</a>
</p></div><div class="bfg-prison"><div data-col-width="3" class="bfg-machine-gun bfg-machine-gun_last"><p class="bfg-destroy ">CSS Modules allow you to treat a CSS file like a JS Module. You import a CSS file and the classes in the CSS file are treated like properties on a JS object, like this:</p></div><div data-col-width="1" class="bfg-machine-gun bfg-machine-gun_empty"><p class="bfg-destroy ce-element--empty bfg-element_no-text"></p></div></div><div class="bfg-prison"><div data-col-width="3" class="bfg-machine-gun bfg-machine-gun_last"><p class="bfg-destroy small-text">import css from './index.css';&lt;div className={css.gridLayout}/&gt;//DOM<br>&lt;div class="gridLayout-5xyn87oq5x"/&gt;</p></div><div data-col-width="1" class="bfg-machine-gun bfg-machine-gun_empty"><p class="bfg-destroy ce-element--empty bfg-element_no-text"></p></div></div><div class="bfg-prison"><div data-col-width="3" class="bfg-machine-gun bfg-machine-gun_last"><p class="bfg-destroy ">You’ll notice that the class that was ultimately used was the name of the class plus a hash. This hash is added to the class to ensure that it is unique in our app.</p></div><div data-col-width="1" class="bfg-machine-gun bfg-machine-gun_empty"><p class="bfg-destroy ce-element--empty bfg-element_no-text"></p></div></div><div class="bfg-prison"><div data-col-width="3" class="bfg-machine-gun bfg-machine-gun_last"><figure class="bfg-destroy bfg-embed-figure bfg-embed_rendered" data-rocket-launcher="embed"><code class="bfg-destroy bfg-code"><div data-smurf="hmurf" data-id="43">smhf 2 embed</div></code><figcaption class="bfg-destroy bfg-description" data-rocket-launcher="description"></figcaption></figure></div><div data-col-width="1" class="bfg-machine-gun bfg-machine-gun_empty"><p class="bfg-destroy ce-element--empty bfg-element_no-text"></p></div></div><div class="bfg-prison"><div data-col-width="3" class="bfg-machine-gun bfg-machine-gun_last"><p class="bfg-destroy ">This allows the developer to not need to know the whole scope of the app and how the CSS that we are writing is going to impact the rest of the Cascade. In fact, it’s typical for each component to have its own CSS file associated with it when you are using CSS modules. CSS Modules needs to be enabled as part of a build process, for example in Webpack to be able to take advantage of the tool.</p></div><div data-col-width="1" class="bfg-machine-gun bfg-machine-gun_empty"><p class="bfg-destroy ce-element--empty bfg-element_no-text"></p></div></div><div class="bfg-prison"><div data-col-width="3" class="bfg-machine-gun bfg-machine-gun_last"><p class="bfg-destroy ">Styled-Component and Emotion are two very popular libraries that fulfill the same goal as CSS modules but goes about it in a different way. Both libraries take advantage of the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates" target="_blank" class="bfg-destroy">tagged template literals</a> syntax, introduced in ES6. Simply put, tagged template literals are functions that are invoked with a template literal strings. The function parses the template literals and can act accordingly.</p></div><div data-col-width="1" class="bfg-machine-gun bfg-machine-gun_empty"><p class="bfg-destroy ce-element--empty bfg-element_no-text"></p></div></div><div class="bfg-prison"><div data-col-width="3" class="bfg-machine-gun bfg-machine-gun_last"><p class="bfg-destroy ">How these libraries work is you write CSS as a template string, the function parses the template string, injects it into a style tag of the document, and returns a component with the appropriate class injected into it already. Here is an example of how it works (the example is using styled-components, but emotion uses an almost identical API):</p></div><div data-col-width="1" class="bfg-machine-gun bfg-machine-gun_empty"><p class="bfg-destroy ce-element--empty bfg-element_no-text"></p></div></div><div class="bfg-prison"><div data-col-width="3" class="bfg-machine-gun bfg-machine-gun_last"><p class="bfg-destroy small-text"></p></div><div data-col-width="1" class="bfg-machine-gun bfg-machine-gun_empty"><p class="bfg-destroy ce-element--empty bfg-element_no-text"></p></div></div><div class="bfg-prison"><div data-col-width="3" class="bfg-machine-gun bfg-machine-gun_last"><p class="bfg-destroy ">As you can see, it reaches the same goal as CSS Module, but rather than creating the scoped class at build time, it builds the CSS at runtime. This allows for many cool features that are beyond the scope of this post, but I would encourage you to check them out the docs for <a href="https://www.styled-components.com/docs" target="_blank" class="bfg-destroy">styled-components</a> and <a href="https://emotion.sh/docs/introduction" target="_blank" class="bfg-destroy">emotion</a>.</p></div><div data-col-width="1" class="bfg-machine-gun bfg-machine-gun_empty"><p class="bfg-destroy ce-element--empty bfg-element_no-text"></p></div></div><div class="bfg-prison"><div data-col-width="3" class="bfg-machine-gun bfg-machine-gun_last"><p class="bfg-destroy ">With all these ways to style, what is the best way to style? Much is subjective and really depends on the developer or developer teams preference. That said, there are some best practices that have emerged.</p></div><div data-col-width="1" class="bfg-machine-gun bfg-machine-gun_empty"><p class="bfg-destroy ce-element--empty bfg-element_no-text"></p></div></div><div class="bfg-prison"><div data-col-width="3" class="bfg-machine-gun bfg-machine-gun_last"><h3 class="bfg-destroy bfg-theme__style_medium_header">Inline Styles are No Longer “Bad”</h3></div><div data-col-width="1" class="bfg-machine-gun bfg-machine-gun_empty"><p class="bfg-destroy ce-element--empty bfg-element_no-text"></p></div></div><div class="bfg-prison"><div data-col-width="3" class="bfg-machine-gun bfg-machine-gun_last"><p class="bfg-destroy ">One of the first things I learned when learning CSS was that inline styles were bad, didn’t scale well, and should be avoided at all cost. But it’s important to understand the reasons why they are considered “bad”.</p></div><div data-col-width="1" class="bfg-machine-gun bfg-machine-gun_empty"><p class="bfg-destroy ce-element--empty bfg-element_no-text"></p></div></div><div class="bfg-prison"><div data-col-width="3" class="bfg-machine-gun bfg-machine-gun_last"><p class="bfg-destroy ">Inline styles are considered bad because inline styles only apply to that specific element. If you need to reproduce that same style, such as a primary button, you have to copy and paste from one part of your app to another. Now when you factor in sweeping style changes and styles that are only partially the same across two elements, you have a nightmare to maintain.</p></div><div data-col-width="1" class="bfg-machine-gun bfg-machine-gun_empty"><p class="bfg-destroy ce-element--empty bfg-element_no-text"></p></div></div><div class="bfg-prison"><div data-col-width="3" class="bfg-machine-gun bfg-machine-gun_last"><p class="bfg-destroy ">In a component-based framework, like React, this is not a factor anymore. If you have a need for a styled element in more than one place, you use the same component in both places. If the style changes for both elements, you still only have one component to update so it doesn’t have the same scaling issues as when you work with HTML directly.</p></div><div data-col-width="1" class="bfg-machine-gun bfg-machine-gun_empty"><p class="bfg-destroy ce-element--empty bfg-element_no-text"></p></div></div></div>
`;

const post2 = `
<div>
<div data-col-width="4" class="stk-grid-col stk-grid-col_last stk-theme_30067__pad_ver_1 stk-theme_30067__pad_default-m" data-ce-tag="grid-col">
<h4 class="stk-reset stk-theme_30067__mb_0 stk-theme_30067__style_small_header"><strong class="stk-reset">Daunt Books - Marylebone</strong></h4>
<p class="stk-reset stk-mobile-hidden stk-theme_30067__style_small_text stk-theme_30067__mb_05">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas.</p>
<p class="stk-reset stk-theme_30067__mb_0 stk-mobile-hidden stk-theme_30067__style_small_text"><img class="stk-reset stk-theme_30067__symbol_custom_image_2910776 stk-icon" src="https://ceditor.setka.io/clients/JVSGbtRWkHoAtPS7dl6QzGIuggfZXzhz/css/assets/30067/img/1_QDj5yg.svg" data-gtm-vis-has-fired-10171822_255="1">&nbsp;Lorem ipsum dolor sit, E117AX</p>
<p class="stk-reset stk-theme_30067__mb_0 stk-mobile-hidden stk-theme_30067__style_small_text"><img class="stk-reset stk-theme_30067__symbol_custom_image_2910775 stk-icon" src="https://ceditor.setka.io/clients/JVSGbtRWkHoAtPS7dl6QzGIuggfZXzhz/css/assets/30067/img/2_71l5cw.svg">&nbsp;16:00−02:00; вс.: 16:00−00:00</p>
<p class="stk-reset stk-mobile-hidden stk-theme_30067__style_small_text"><img class="stk-reset stk-theme_30067__symbol_custom_image_2910777 stk-icon" src="https://ceditor.setka.io/clients/JVSGbtRWkHoAtPS7dl6QzGIuggfZXzhz/css/assets/30067/img/3_GazwAw.svg">&nbsp;<a class="stk-reset" href="http://www.dauntbooks.co.uk/" target="_blank">dauntbooks.co.uk</a></p>
</div>
</div>
<div data-col-width="4" class="stk-grid-col stk-grid-col_last stk-theme_30067__pad_ver_1 stk-theme_30067__pad_default-m" data-ce-tag="grid-col">
<h4 class="stk-reset stk-theme_30067__mb_0 stk-theme_30067__style_small_header"><strong class="stk-reset">Daunt Books - Marylebone</strong></h4>
<p class="stk-reset stk-mobile-hidden stk-theme_30067__style_small_text stk-theme_30067__mb_05">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas.</p>
<p class="stk-reset stk-theme_30067__mb_0 stk-mobile-hidden stk-theme_30067__style_small_text"><img class="stk-reset stk-theme_30067__symbol_custom_image_2910776 stk-icon" src="https://ceditor.setka.io/clients/JVSGbtRWkHoAtPS7dl6QzGIuggfZXzhz/css/assets/30067/img/1_QDj5yg.svg" data-gtm-vis-has-fired-10171822_255="1">&nbsp;Lorem ipsum dolor sit, E117AX</p>
<p class="stk-reset stk-theme_30067__mb_0 stk-mobile-hidden stk-theme_30067__style_small_text"><img class="stk-reset stk-theme_30067__symbol_custom_image_2910775 stk-icon" src="https://ceditor.setka.io/clients/JVSGbtRWkHoAtPS7dl6QzGIuggfZXzhz/css/assets/30067/img/2_71l5cw.svg">&nbsp;16:00−02:00; вс.: 16:00−00:00</p>
<p class="stk-reset stk-mobile-hidden stk-theme_30067__style_small_text"><img class="stk-reset stk-theme_30067__symbol_custom_image_2910777 stk-icon" src="https://ceditor.setka.io/clients/JVSGbtRWkHoAtPS7dl6QzGIuggfZXzhz/css/assets/30067/img/3_GazwAw.svg">&nbsp;<a class="stk-reset" href="http://www.dauntbooks.co.uk/" target="_blank">dauntbooks.co.uk</a></p>
</div>
<div>
<h1>1</h1>
</div>
`;

const post3 = `
<div class="stk-grid" data-ce-tag="grid">
  <div data-col-width="6" class="stk-grid-col stk-grid-col_last" data-ce-tag="grid-col">
    <h2 class="stk-reset stk-theme_30067__style_large_header stk-theme_30067__mb_05"><strong class="stk-reset">Rupi Kaur</strong></h2>
    <p class="stk-reset">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque felis eget arcu egestas tincidunt. Phasellus aliquet est est, a faucibus justo gravida sodales. Cras in arcu sit amet odio condimentum dignissim non sit amet tortor. Vivamus consectetur mi ante. Mauris enim velit, fermentum eget ante et, sodales aliquet ipsum. Nunc quis faucibus turpis. Donec at felis sed lacus convallis sollicitudin sed ac ipsum. Nullam id augue facilisis, gravida dolor non, congue lacus. Quisque at ex nulla.</p>
    <figure class="stk-reset stk-image-figure" data-ce-tag="image-figure">
      <div data-ce-tag="mask" class="stk-mask"><img src="https://ceditor.setka.io/clients/JVSGbtRWkHoAtPS7dl6QzGIuggfZXzhz/post_images/4AKaFKLae2y1TpD0KsZbFA.jpg" data-image-id="9462" alt="" class="stk-reset stk-image" /></div>
      <figcaption class="stk-reset stk-description" data-ce-tag="description" style="display:block"><strong class="stk-reset">Buy the book </strong> <a class="stk-reset" href="http://Rupi Kaur - Milk and Honey" target="_blank">Rupi Kaur - Milk and Honey</a></figcaption>
    </figure>
    <div class="stk-grid" data-ce-tag="grid" style="background-color:rgba(246, 246, 246, 1)">
      <div data-col-width="6" class="stk-grid-col stk-theme_30067__pad_round_1-m stk-grid-col_last" data-ce-tag="grid-col">
        <div class="stk-grid stk-grid__layout_matrix stk-theme_30067__mb_0 stk-theme_30067__mb_05-m" data-ce-tag="grid">
          <div data-col-width="2" class="stk-grid-col" data-ce-tag="grid-col">
            <figure class="stk-reset stk-image-figure" data-ce-tag="image-figure">
              <div data-ce-tag="mask" class="stk-mask"><a href="http://www.dauntbooks.co.uk/" class="stk-reset stk-link" target="_blank"><img src="https://ceditor.setka.io/clients/JVSGbtRWkHoAtPS7dl6QzGIuggfZXzhz/post_images/6jiJPKNx2tNhtaurpIqNhg.jpg" data-image-id="9466" alt="" class="stk-reset stk-image" /></a></div>
            </figure>
          </div>
          <div data-col-width="4" class="stk-grid-col stk-grid-col_last stk-theme_30067__pad_ver_1 stk-theme_30067__pad_default-m" data-ce-tag="grid-col">
            <h4 class="stk-reset stk-theme_30067__mb_0 stk-theme_30067__style_small_header"><strong class="stk-reset">Daunt Books - Marylebone</strong></h4>
            <p class="stk-reset stk-mobile-hidden stk-theme_30067__style_small_text stk-theme_30067__mb_05">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas.</p>
            <p class="stk-reset stk-theme_30067__mb_0 stk-mobile-hidden stk-theme_30067__style_small_text"><img class="stk-reset stk-theme_30067__symbol_custom_image_2910776 stk-icon" src="https://ceditor.setka.io/clients/JVSGbtRWkHoAtPS7dl6QzGIuggfZXzhz/css/assets/30067/img/1_QDj5yg.svg" data-gtm-vis-has-fired-10171822_255="1">&nbsp;Lorem ipsum dolor sit, E117AX</p>
            <p class="stk-reset stk-theme_30067__mb_0 stk-mobile-hidden stk-theme_30067__style_small_text"><img class="stk-reset stk-theme_30067__symbol_custom_image_2910775 stk-icon" src="https://ceditor.setka.io/clients/JVSGbtRWkHoAtPS7dl6QzGIuggfZXzhz/css/assets/30067/img/2_71l5cw.svg">&nbsp;16:00−02:00; вс.: 16:00−00:00</p>
            <p class="stk-reset stk-mobile-hidden stk-theme_30067__style_small_text"><img class="stk-reset stk-theme_30067__symbol_custom_image_2910777 stk-icon" src="https://ceditor.setka.io/clients/JVSGbtRWkHoAtPS7dl6QzGIuggfZXzhz/css/assets/30067/img/3_GazwAw.svg">&nbsp;<a class="stk-reset" href="http://www.dauntbooks.co.uk/" target="_blank">dauntbooks.co.uk</a></p>
          </div>
        </div>
        <p class="stk-reset stk-theme_30067__style_small_text stk-desktop-hidden stk-theme_30067__mb_05">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas.</p>
        <p class="stk-reset stk-theme_30067__mb_0 stk-theme_30067__style_small_text stk-desktop-hidden"><img class="stk-reset stk-theme_30067__symbol_custom_image_2910776 stk-icon" src="https://ceditor.setka.io/clients/JVSGbtRWkHoAtPS7dl6QzGIuggfZXzhz/css/assets/30067/img/1_QDj5yg.svg">&nbsp;Lorem ipsum dolor sit, E117AX</p>
        <p class="stk-reset stk-theme_30067__mb_0 stk-theme_30067__style_small_text stk-desktop-hidden"><img class="stk-reset stk-theme_30067__symbol_custom_image_2910775 stk-icon" src="https://ceditor.setka.io/clients/JVSGbtRWkHoAtPS7dl6QzGIuggfZXzhz/css/assets/30067/img/2_71l5cw.svg">&nbsp;16:00−02:00; вс.: 16:00−00:00</p>
        <p class="stk-reset stk-theme_30067__style_small_text stk-desktop-hidden"><img class="stk-reset stk-theme_30067__symbol_custom_image_2910777 stk-icon" data-gtm-vis-has-fired-10171822_255="1" src="https://ceditor.setka.io/clients/JVSGbtRWkHoAtPS7dl6QzGIuggfZXzhz/css/assets/30067/img/3_GazwAw.svg">&nbsp;<a class="stk-reset" href="http://www.dauntbooks.co.uk/" target="_blank">dauntbooks.co.uk</a></p>
      </div>
    </div>
  </div>
</div>
<div class="stk-grid" data-ce-tag="grid">
  <div data-col-width="6" class="stk-grid-col stk-grid-col_last" data-ce-tag="grid-col">
    <h2 class="stk-reset stk-theme_30067__style_large_header stk-theme_30067__mb_05"><strong class="stk-reset">Kate Tempest</strong></h2>
    <p class="stk-reset">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque felis eget arcu egestas tincidunt. Phasellus aliquet est est, a faucibus justo gravida sodales. Cras in arcu sit amet odio condimentum dignissim non sit amet tortor. Vivamus consectetur mi ante. Mauris enim velit, fermentum eget ante et, sodales aliquet ipsum. Nunc quis faucibus turpis. Donec at felis sed lacus convallis sollicitudin sed ac ipsum. Nullam id augue facilisis, gravida dolor non, congue lacus. Quisque at ex nulla.</p>
    <figure class="stk-reset stk-image-figure" data-ce-tag="image-figure">
      <div data-ce-tag="mask" class="stk-mask"><img src="https://ceditor.setka.io/clients/JVSGbtRWkHoAtPS7dl6QzGIuggfZXzhz/post_images/udmTBVEfv5gYtflnGoD_MA.jpg" data-image-id="9463" alt="" class="stk-reset stk-image" /></div>
      <figcaption class="stk-reset stk-description" data-ce-tag="description"><a class="stk-reset" href="http://Kate Tempest - Hold your own" target="_blank">Kate Tempest - Hold your own</a></figcaption>
    </figure><a data-ce-tag="container" class="stk-container stk-container-link stk-reset stk-mobile-hidden" href="http://example.com" target="_blank" style="text-decoration:none">
      <div class="stk-grid stk-theme_30067__mb_0" data-ce-tag="grid" style="background-color:rgba(246, 246, 246, 1)">
        <div data-col-width="6" class="stk-grid-col stk-grid-col_last align-left stk-theme_30067__pad_round_1" data-ce-tag="grid-col" style="background-color:rgba(246, 246, 246, 1)">
          <div class="stk-grid stk-grid__layout_matrix" data-ce-tag="grid">
            <div data-col-width="1" class="stk-grid-col align-left" data-ce-tag="grid-col">
              <figure class="stk-reset stk-image-figure" data-ce-tag="image-figure">
                <div data-ce-tag="mask" class="stk-mask"><img src="https://ceditor.setka.io/clients/JVSGbtRWkHoAtPS7dl6QzGIuggfZXzhz/post_images/_kjU4d6agKLwQhT2CbreKQ.jpg" data-image-id="9460" alt="" class="stk-reset stk-image" /></div>
              </figure>
            </div>
            <div data-col-width="5" class="stk-grid-col stk-grid-col_last" data-ce-tag="grid-col">
              <p class="stk-reset stk-theme_30067__mb_0 stk-theme_30067__style_font_style-1563539614858 stk-theme_30067__style_small_text">RECOMMENDED ARTICLE</p>
              <h4 class="stk-reset stk-theme_30067__style_small_header"><strong class="stk-reset">London’s newest Michelin Star restaurants reviewed by&nbsp;fashion buyer and insta-foodie Bryant Lee </strong></h4>
            </div>
          </div>
        </div>
      </div>
    </a><a data-ce-tag="container" class="stk-container stk-container-link stk-reset stk-desktop-hidden" href="http://example.com" target="_blank" style="text-decoration:none">
      <div class="stk-grid stk-theme_30067__mb_0" data-ce-tag="grid" style="background-color:rgba(246, 246, 246, 1)">
        <div data-col-width="6" class="stk-grid-col stk-grid-col_last align-left stk-theme_30067__pad_round_1" data-ce-tag="grid-col" style="background-color:rgba(246, 246, 246, 1)">
          <div class="stk-grid stk-grid__layout_matrix" data-ce-tag="grid" style="--stk-cols:4">
            <div data-col-width="1" class="stk-grid-col align-left" data-ce-tag="grid-col">
              <figure class="stk-reset stk-image-figure" data-ce-tag="image-figure">
                <div data-ce-tag="mask" class="stk-mask"><img src="https://ceditor.setka.io/clients/JVSGbtRWkHoAtPS7dl6QzGIuggfZXzhz/post_images/_kjU4d6agKLwQhT2CbreKQ.jpg" data-image-id="9460" alt="" class="stk-reset stk-image" /></div>
              </figure>
            </div>
            <div data-col-width="5" class="stk-grid-col stk-grid-col_last" data-ce-tag="grid-col" style="grid-column:span 3">
              <p class="stk-reset stk-theme_30067__mb_0 stk-theme_30067__style_font_style-1563539614858 stk-theme_30067__style_small_text">RECOMMENDED ARTICLE</p>
              <h4 class="stk-reset stk-theme_30067__style_small_header"><strong class="stk-reset">London’s newest Michelin Star restaurants reviewed by fashion buyer and insta-foodie Bryant Lee</strong><strong class="stk-reset">2Sam McKnight: Garden State</strong> </h4>
            </div>
          </div>
        </div>
      </div>
    </a><a data-ce-tag="container" class="stk-container stk-container-link stk-reset" href="http://example.com" target="_blank"></a><a data-ce-tag="container" class="stk-container stk-container-link stk-reset stk-mobile-hidden" href="http://example.com" target="_blank"></a>
  </div>
</div><a data-ce-tag="container" class="stk-container stk-container-link stk-reset" href="http://example.com" target="_blank" style="text-decoration:none"></a>
<div class="stk-grid" data-ce-tag="grid">
  <div data-col-width="6" class="stk-grid-col stk-grid-col_last" data-ce-tag="grid-col">
    <h2 class="stk-reset stk-theme_30067__style_large_header stk-theme_30067__mb_05"><strong class="stk-reset">Hera Lindsay Bird</strong></h2>
    <p class="stk-reset">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque felis eget arcu egestas tincidunt. Phasellus aliquet est est, a faucibus justo gravida sodales. Cras in arcu sit amet odio condimentum dignissim non sit amet tortor. Vivamus consectetur mi ante. Mauris enim velit, fermentum eget ante et, sodales aliquet ipsum. Nunc quis faucibus turpis. Donec at felis sed lacus convallis sollicitudin sed ac ipsum. Nullam id augue facilisis, gravida dolor non, congue lacus. Quisque at ex nulla.</p>
    <figure class="stk-reset stk-image-figure" data-ce-tag="image-figure">
      <div data-ce-tag="mask" class="stk-mask"><img src="https://ceditor.setka.io/clients/JVSGbtRWkHoAtPS7dl6QzGIuggfZXzhz/post_images/V9vjZ3qv_asuZaoTdxgjsQ.jpg" data-image-id="9464" alt="" class="stk-reset stk-image" /></div>
      <figcaption class="stk-reset stk-description" data-ce-tag="description"><a class="stk-reset" href="http://Hera Lindsay Bird - Pamper me to hell and back" target="_blank">Hera Lindsay Bird - Pamper me to hell and back</a></figcaption>
    </figure><a data-ce-tag="container" class="stk-container stk-container-link stk-reset stk-mobile-hidden" href="http://example.com" target="_blank" style="text-decoration:none">
      <div class="stk-grid" data-ce-tag="grid" style="background-color:rgba(246, 246, 246, 1)">
        <div data-col-width="6" class="stk-grid-col stk-grid-col_last align-left stk-theme_30067__pad_round_1" data-ce-tag="grid-col" style="background-color:rgba(246, 246, 246, 1)">
          <div class="stk-grid stk-grid__layout_matrix" data-ce-tag="grid">
            <div data-col-width="1" class="stk-grid-col align-left" data-ce-tag="grid-col">
              <figure class="stk-reset stk-image-figure" data-ce-tag="image-figure">
                <div data-ce-tag="mask" class="stk-mask"><img src="https://ceditor.setka.io/clients/JVSGbtRWkHoAtPS7dl6QzGIuggfZXzhz/post_images/iCAni6sgmAkdal_0rfNM7A.jpg" data-image-id="9459" alt="" class="stk-reset stk-image" /></div>
              </figure>
            </div>
            <div data-col-width="5" class="stk-grid-col stk-grid-col_last" data-ce-tag="grid-col">
              <p class="stk-reset stk-theme_30067__mb_0 stk-theme_30067__style_font_style-1563539614858 stk-theme_30067__style_small_text">RECOMMENDED ARTICLE</p>
              <h4 class="stk-reset stk-theme_30067__style_small_header"><strong class="stk-reset">Sam McKnight: Garden State </strong></h4>
            </div>
          </div>
        </div>
      </div>
    </a><a data-ce-tag="container" class="stk-container stk-container-link stk-reset" href="http://example.com" target="_blank" style="text-decoration:none">
      <div class="stk-grid stk-desktop-hidden stk-theme_30067__mb_0" data-ce-tag="grid" style="background-color:rgba(246, 246, 246, 1)">
        <div data-col-width="6" class="stk-grid-col stk-grid-col_last align-left stk-theme_30067__pad_round_1" data-ce-tag="grid-col" style="background-color:rgba(246, 246, 246, 1)">
          <div class="stk-grid stk-grid__layout_matrix" data-ce-tag="grid" style="--stk-cols:4">
            <div data-col-width="1" class="stk-grid-col align-left" data-ce-tag="grid-col">
              <figure class="stk-reset stk-image-figure" data-ce-tag="image-figure">
                <div data-ce-tag="mask" class="stk-mask"><img src="https://ceditor.setka.io/clients/JVSGbtRWkHoAtPS7dl6QzGIuggfZXzhz/post_images/iCAni6sgmAkdal_0rfNM7A.jpg" data-image-id="9459" alt="" class="stk-reset stk-image" /></div>
              </figure>
            </div>
            <div data-col-width="5" class="stk-grid-col stk-grid-col_last" data-ce-tag="grid-col" style="grid-column:span 3">
              <p class="stk-reset stk-theme_30067__mb_0 stk-theme_30067__style_font_style-1563539614858 stk-theme_30067__style_small_text">RECOMMENDED ARTICLE</p>
              <h4 class="stk-reset stk-theme_30067__style_small_header"><strong class="stk-reset" data-gtm-vis-has-fired-10171822_255="1">Sam McKnight: Garden State&lt;</strong></h4>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
</div><a data-ce-tag="container" class="stk-container stk-container-link stk-reset stk-mobile-hidden" href="http://example.com" target="_blank" style="text-decoration:none"></a><a data-ce-tag="container" class="stk-container stk-container-link stk-reset" href="http://example.com" target="_blank" style="text-decoration:none"></a>
<div class="stk-grid" data-ce-tag="grid">
  <div data-col-width="6" class="stk-grid-col stk-grid-col_last" data-ce-tag="grid-col">
    <figure class="stk-reset stk-embed-figure stk-embed_rendered stk-theme_30067__mb_15" data-ce-tag="embed"><code class="stk-reset stk-code"><div style="max-width: 540px; margin: 0 auto;"><blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/Bz9q87wlxGl/" data-instgrm-version="12" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 0px auto; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/Bz9q87wlxGl/" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;"> View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/Bz9q87wlxGl/" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Lady Gaga (@ladygaga)</a> on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2019-07-16T04:06:20+00:00">Jul 15, 2019 at 9:06pm PDT</time></p></div></blockquote> <script async="" src="//www.instagram.com/embed.js"></script></div></code>
      <figcaption class="stk-reset stk-description" data-ce-tag="description"></figcaption>
    </figure>
    <p class="stk-reset ce-element--empty stk-element_no-text"></p>
  </div>
</div>
<div class="stk-grid" data-ce-tag="grid">
  <div data-col-width="6" class="stk-grid-col stk-grid-col_last" data-ce-tag="grid-col">
    <h2 class="stk-reset stk-theme_30067__style_large_header stk-theme_30067__mb_05"><strong class="stk-reset">Fatimah Asghar</strong></h2>
    <p class="stk-reset">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque felis eget arcu egestas tincidunt. Phasellus aliquet est est, a faucibus justo gravida sodales. Cras in arcu sit amet odio condimentum dignissim non sit amet tortor. Vivamus consectetur mi ante. Mauris enim velit, fermentum eget ante et, sodales aliquet ipsum. Nunc quis faucibus turpis. Donec at felis sed lacus convallis sollicitudin sed ac ipsum. Nullam id augue facilisis, gravida dolor non, congue lacus. Quisque at ex nulla.</p>
    <figure class="stk-reset stk-image-figure" data-ce-tag="image-figure">
      <div data-ce-tag="mask" class="stk-mask"><img src="https://ceditor.setka.io/clients/JVSGbtRWkHoAtPS7dl6QzGIuggfZXzhz/post_images/Id-OfsXmXLQHDoVAMmTKZQ.jpg" data-image-id="9465" alt="" class="stk-reset stk-image" /></div>
      <figcaption class="stk-reset stk-description" data-ce-tag="description">Fatimah Asghar - <a class="stk-reset" href="http://If they come for us" target="_blank">If they come for us</a></figcaption>
    </figure>
  </div>
</div>
<div class="stk-grid stk-mobile_no-bg" data-ce-tag="grid" style="height:290px;background-image:url(&#x27;https://ceditor.setka.io/clients/JVSGbtRWkHoAtPS7dl6QzGIuggfZXzhz/post_images/E9VNe0BMIujKww92TqItTw.png&#x27;);background-position:50% 50%;background-repeat:no-repeat;background-size:contain">
  <div data-col-width="6" class="stk-grid-col valign-middle align-center stk-theme_30067__pad_round_1 stk-grid-col_last" data-ce-tag="grid-col">
    <div class="stk-grid" data-ce-tag="grid">
      <div data-col-width="1" class="stk-grid-col stk-grid-col_empty" data-ce-tag="grid-col">
        <p class="stk-reset ce-element--empty stk-element_no-text"></p>
      </div>
      <div data-col-width="4" class="stk-grid-col stk-grid-col_last" data-ce-tag="grid-col">
        <h3 class="stk-reset align-center stk-theme_30067__color_30067_custom_color_0 stk-theme_30067__mb_05 stk-theme_30067__style_medium_header stk-theme_30067__color_default-m"><strong class="stk-reset" data-gtm-vis-has-fired-10171822_255="1">“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dantium”</strong></h3>
        <p class="stk-reset align-center stk-theme_30067__color_30067_custom_color_0 stk-theme_30067__style_font_style-1563539614858 stk-theme_30067__color_default-m">- Kate Stephens, Editor in Chief</p>
      </div>
      <div data-col-width="1" class="stk-grid-col stk-grid-col_empty" data-ce-tag="grid-col">
        <p class="stk-reset ce-element--empty stk-element_no-text"></p>
      </div>
    </div>
  </div>
</div>
<div class="stk-grid" data-ce-tag="grid">
  <div data-col-width="6" class="stk-grid-col stk-grid-col_last" data-ce-tag="grid-col">
    <figure class="stk-reset stk-image-figure stk-theme_30067__mb_0 stk-theme_30067__mb_default-m-disabled" data-ce-tag="image-figure">
      <div data-ce-tag="mask" class="stk-mask"><img src="https://ceditor.setka.io/clients/JVSGbtRWkHoAtPS7dl6QzGIuggfZXzhz/post_images/t4w8hNnIGXhrnzDFbnyEVQ.jpg" data-image-id="9461" alt="" class="stk-reset stk-image" /></div>
    </figure>
    <div class="stk-grid" data-ce-tag="grid">
      <div data-col-width="6" class="stk-grid-col stk-grid-col_last stk-theme_30067__pad_round_1" data-ce-tag="grid-col" style="background-color:rgba(246, 246, 246, 1)">
        <h4 class="stk-reset stk-theme_30067__style_small_header"><strong class="stk-reset">Shop it</strong></h4>
        <div class="stk-grid stk-grid__layout_matrix" data-ce-tag="grid">
          <div data-col-width="2" class="stk-grid-col" data-ce-tag="grid-col">
            <div class="stk-grid" data-ce-tag="grid" data-anim-zoom="100" data-anim-shift="30" data-anim-rotation="0" data-anim-opacity="0" data-anim-direction="bottom" data-anim-duration="1" data-anim-delay="0" data-anim-trigger="scroll" data-anim-name="ApTKf" data-anim="true">
              <div data-col-width="2" class="stk-grid-col stk-grid-col_last" data-ce-tag="grid-col">
                <div class="stk-grid stk-theme_30067__mb_05-m" data-ce-tag="grid">
                  <div data-col-width="2" class="stk-grid-col stk-theme_30067__pad_hor_1-m stk-grid-col_last" data-ce-tag="grid-col">
                    <figure class="stk-reset stk-image-figure" data-ce-tag="image-figure">
                      <div data-ce-tag="mask" class="stk-mask"><a href="https://www.ssense.com/en-nl/women/product/isabel-marant/taupe-archenn-boots/3995331" class="stk-reset stk-link" target="_blank"><img src="https://ceditor.setka.io/clients/JVSGbtRWkHoAtPS7dl6QzGIuggfZXzhz/post_images/YF0IRKsrnpUe-syA5EDLNg.jpg" data-image-id="9347" alt="" class="stk-reset stk-image" /></a></div>
                    </figure>
                  </div>
                </div>
                <h4 class="stk-reset stk-theme_30067__style_small_header stk-theme_30067__mb_0 align-center-m"><strong class="stk-reset">Isabel Marant</strong></h4>
                <p class="stk-reset stk-theme_30067__style_small_text stk-theme_30067__mb_0 align-center-m">Lurrey high heel boots</p>
                <p class="stk-reset stk-theme_30067__style_small_text align-center-m">£442</p>
              </div>
            </div>
          </div>
          <div data-col-width="2" class="stk-grid-col stk-grid-col_last" data-ce-tag="grid-col">
            <div class="stk-grid" data-ce-tag="grid" data-anim-zoom="100" data-anim-shift="30" data-anim-rotation="0" data-anim-opacity="0" data-anim-direction="bottom" data-anim-duration="1" data-anim-delay="0" data-anim-trigger="scroll" data-anim-name="flwgD" data-anim="true">
              <div data-col-width="2" class="stk-grid-col stk-grid-col_last" data-ce-tag="grid-col">
                <div class="stk-grid stk-theme_30067__mb_05-m" data-ce-tag="grid">
                  <div data-col-width="2" class="stk-grid-col stk-theme_30067__pad_hor_1-m stk-grid-col_last" data-ce-tag="grid-col">
                    <figure class="stk-reset stk-image-figure" data-ce-tag="image-figure">
                      <div data-ce-tag="mask" class="stk-mask"><a href="https://www.ssense.com/en-nl/women/product/isabel-marant/black-dythey-boots/3994401" class="stk-reset stk-link" target="_blank"><img src="https://ceditor.setka.io/clients/JVSGbtRWkHoAtPS7dl6QzGIuggfZXzhz/post_images/LpYaNqPuFpr7yy_6gqK4Gw.jpg" data-image-id="9348" alt="" class="stk-reset stk-image" /></a></div>
                    </figure>
                  </div>
                </div>
                <h4 class="stk-reset stk-theme_30067__style_small_header stk-theme_30067__mb_0 align-center-m"><strong class="stk-reset">Isabel Marant</strong></h4>
                <p class="stk-reset stk-theme_30067__style_small_text stk-theme_30067__mb_0 align-center-m">Sinky new bag</p>
                <p class="stk-reset stk-theme_30067__style_small_text align-center-m">£775</p>
              </div>
            </div>
          </div>
          <div data-col-width="2" class="stk-grid-col stk-grid-col_empty" data-ce-tag="grid-col">
            <p class="stk-reset ce-element--empty stk-element_no-text"></p>
          </div>
        </div>
      </div>
    </div>
    <figure class="stk-reset stk-embed-figure stk-embed_rendered" data-ce-tag="embed"><code class="stk-reset stk-code"><script type="application/json" data-anim-name="ApTKf">
  {
    "keyframes": [{
      "transform": "translateY(-30px)",
      "opacity": "0.01"
    }, {
      "transform": "none",
      "opacity": "1"
    }],
    "options": {
      "id": "ApTKf",
      "delay": 0,
      "duration": 1000
    }
  }
</script>
<script type="application/json" data-anim-name="flwgD">
  {
    "keyframes": [{
      "transform": "translateY(-30px)",
      "opacity": "0.01"
    }, {
      "transform": "none",
      "opacity": "1"
    }],
    "options": {
      "id": "flwgD",
      "delay": 0,
      "duration": 1000
    }
  }
</script></code>
      <figcaption class="stk-reset stk-description" data-ce-tag="description"></figcaption>
    </figure>
  </div>
</div>
`;

const post4 = `
<div id="1">
<div id="2">
<code>
<div id="3">smhf embed</div>
</code>
</div>
</div>
<div id="1">
<div id="2" data="s">
<div id="3">3</div>
</div>
</div>
<div id="1">
<div id="2">
<div id="3">
<div id="4">4</div>
<p class="bfg-destroy small-text">import css from './index.css';&lt;div className={css.gridLayout}/&gt;//DOM<br>&lt;div class="gridLayout-5xyn87oq5x"/&gt;</p>
</div>
</div>
</div>
`;

const post5 = `
<div id="1">
<div id="2">
<code>
<div id="3">smhf embed</div>
</code>
</div>
</div>
<div id="1">
<div id="2" data="s">
<div id="3">3</div>
</div>
</div>
<div id="1">
<div id="2">
<div id="3">
<div id="4">4</div>
<p class="bfg-destroy small-text">import css from './index.css';&lt;div className={css.gridLayout}/&gt;//DOM<br>&lt;div class="gridLayout-5xyn87oq5x"/&gt;</p>
</div>
</div>
`;

const post6 = `

`;

const wrap = str => `<div class="group">${str}</div>`;
const banner = '<h1 class="banner-text">banner</h1>';

const App = () => (
  <div className="App">
    <Article post={wrap(post1)} banner={banner} />
  </div>
);

export default App;
