(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{302:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return h});var n=a(2),c=a.n(n),i=a(105),r=a(1),s=a.n(r),l=a(0),o=a.n(l),m=a(162),d=a(321),p=a(327),y=a(430),u=a(314),f=function(e){var t=e.data,a=t.posts.edges,n=t.site.siteMetadata.facebook,r={};a.forEach(function(e){var t=e.node.frontmatter.category;t&&null!=t&&(r[t]||(r[t]=[]),r[t].push(e))});var s=[];for(var l in r)s.push([l,r[l]]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(m.ThemeContext.Consumer,null,function(e){return o.a.createElement(d.a,{theme:e},o.a.createElement("header",{className:c.a.dynamic([["3401059523",[e.color.brand.primary]]])},o.a.createElement(p.a,{title:"Posts by categories",theme:e})),s.map(function(t){return o.a.createElement("section",{key:t[0],className:c.a.dynamic([["3401059523",[e.color.brand.primary]]])},o.a.createElement("h2",{className:c.a.dynamic([["3401059523",[e.color.brand.primary]]])},o.a.createElement(i.e,null)," ",t[0]),o.a.createElement(y.a,{edges:t[1],theme:e}))}),o.a.createElement(c.a,{styleId:"3401059523",css:["h2.__jsx-style-dynamic-selector{margin:0 0 0.5em;}","h2.__jsx-style-dynamic-selector svg{height:0.8em;fill:"+e.color.brand.primary+";}"],dynamic:[e.color.brand.primary]}))}),o.a.createElement(u.a,{facebook:n}))};f.propTypes={data:s.a.object.isRequired},t.default=f;var h="3044607180"},314:function(e,t,a){"use strict";var n=a(0),c=a.n(n),i=a(1),r=a.n(i),s=a(335),l=a.n(s),o=a(29),m=a.n(o),d=function(e){var t=e.data,a=e.facebook,n=((t||{}).frontmatter||{}).title,i=((t||{}).frontmatter||{}).description,r=((t||{}).frontmatter||{}).siteImage,s=((t||{}).fields||{}).slug,o=n?n+" - "+m.a.shortSiteTitle:m.a.siteTitle,d=i||m.a.siteDescription,p=r||m.a.siteImage,y=m.a.siteUrl+m.a.pathPrefix+s;return c.a.createElement(l.a,{htmlAttributes:{lang:m.a.siteLanguage,prefix:"og: http://ogp.me/ns#"}},c.a.createElement("title",null,o),c.a.createElement("meta",{name:"description",content:d}),c.a.createElement("meta",{property:"og:url",content:y}),c.a.createElement("meta",{property:"og:title",content:o}),c.a.createElement("meta",{property:"og:site_name",content:o}),c.a.createElement("meta",{property:"og:description",content:d}),c.a.createElement("meta",{property:"og:image",content:p}),c.a.createElement("meta",{property:"og:type",content:"website"}),c.a.createElement("meta",{property:"fb:app_id",content:a.appId}),c.a.createElement("meta",{name:"twitter:card",content:"summary"}),c.a.createElement("meta",{name:"twitter:site",content:m.a.authorTwitterAccount?m.a.authorTwitterAccount:""}),c.a.createElement("meta",{name:"twitter:image",content:p}))};d.propTypes={data:r.a.object,facebook:r.a.object.isRequired};var p=d;a.d(t,"a",function(){return p})},321:function(e,t,a){"use strict";var n=a(2),c=a.n(n),i=a(0),r=a.n(i),s=a(1),l=a.n(s),o=function(e){var t=e.children,a=e.theme;return r.a.createElement(r.a.Fragment,null,r.a.createElement("article",{className:c.a.dynamic([["1716771457",[a.space.inset.default,"calc("+a.space.default+") calc("+a.space.default+" * 2)",a.text.maxWidth.tablet,"calc("+a.space.default+" * 2 + 90px) 0 calc("+a.space.default+" * 2)",a.text.maxWidth.desktop]]])+" article"},t),r.a.createElement(c.a,{styleId:"1716771457",css:[".article.__jsx-style-dynamic-selector{padding:"+a.space.inset.default+";margin:0 auto;}","@media screen and (min-width:600px){.article.__jsx-style-dynamic-selector{padding:calc("+a.space.default+") calc("+a.space.default+" * 2);max-width:"+a.text.maxWidth.tablet+";}}","@media screen and (min-width:1024px){.article.__jsx-style-dynamic-selector{padding:calc("+a.space.default+" * 2 + 90px) 0 calc("+a.space.default+" * 2);max-width:"+a.text.maxWidth.desktop+";}}"],dynamic:[a.space.inset.default,"calc("+a.space.default+") calc("+a.space.default+" * 2)",a.text.maxWidth.tablet,"calc("+a.space.default+" * 2 + 90px) 0 calc("+a.space.default+" * 2)",a.text.maxWidth.desktop]}))};o.propTypes={children:l.a.node.isRequired,theme:l.a.object.isRequired};var m=o;a.d(t,"a",function(){return m})},327:function(e,t,a){"use strict";var n=a(2),c=a.n(n),i=a(0),r=a.n(i),s=a(1),l=a.n(s),o=function(e){var t=e.title,a=e.children,n=e.theme;return r.a.createElement(r.a.Fragment,null,t?r.a.createElement("h1",{className:c.a.dynamic([["1826841480",[n.font.size.xxl,n.space.stack.l,n.time.duration.long,n.font.weight.standard,n.space.stack.xs,n.color.brand.primary,"calc("+n.font.size.xl+" * 1.2)","calc("+n.font.size.xl+" * 1.4)"]]])},t):r.a.createElement("h1",{className:c.a.dynamic([["1826841480",[n.font.size.xxl,n.space.stack.l,n.time.duration.long,n.font.weight.standard,n.space.stack.xs,n.color.brand.primary,"calc("+n.font.size.xl+" * 1.2)","calc("+n.font.size.xl+" * 1.4)"]]])},a),r.a.createElement(c.a,{styleId:"1826841480",css:["h1.__jsx-style-dynamic-selector{font-size:"+n.font.size.xxl+";margin:"+n.space.stack.l+";-webkit-animation-name:headlineEntry;-webkit-animation-name:headlineEntry-__jsx-style-dynamic-selector;animation-name:headlineEntry-__jsx-style-dynamic-selector;-webkit-animation-duration:"+n.time.duration.long+";-webkit-animation-duration:"+n.time.duration.long+";animation-duration:"+n.time.duration.long+";}","h1.__jsx-style-dynamic-selector span{font-weight:"+n.font.weight.standard+";display:block;font-size:0.5em;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;margin:"+n.space.stack.xs+";}","h1.__jsx-style-dynamic-selector svg{height:0.75em;fill:"+n.color.brand.primary+";}","@-webkit-keyframes headlineEntry{from.__jsx-style-dynamic-selector{opacity:0.5;}to.__jsx-style-dynamic-selector{opacity:1;}}","@-webkit-keyframes headlineEntry-__jsx-style-dynamic-selector{from{opacity:0.5;}to{opacity:1;}}","@keyframes headlineEntry-__jsx-style-dynamic-selector{from{opacity:0.5;}to{opacity:1;}}","@media screen and (min-width:600px){h1.__jsx-style-dynamic-selector{font-size:calc("+n.font.size.xl+" * 1.2);}}","@media screen and (min-width:1024px){h1.__jsx-style-dynamic-selector{font-size:calc("+n.font.size.xl+" * 1.4);}}"],dynamic:[n.font.size.xxl,n.space.stack.l,n.time.duration.long,n.font.weight.standard,n.space.stack.xs,n.color.brand.primary,"calc("+n.font.size.xl+" * 1.2)","calc("+n.font.size.xl+" * 1.4)"]}))};o.propTypes={title:l.a.string,children:l.a.node,theme:l.a.object.isRequired},t.a=o},430:function(e,t,a){"use strict";var n=a(2),c=a.n(n),i=a(0),r=a.n(i),s=a(1),l=a.n(s),o=a(19),m=function(e){var t=e.edges,a=e.theme;return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:c.a.dynamic([["132031231",[a.space.stack.m,a.space.m,a.space.xs,a.font.size.s,a.font.lineHeight.l]]])},t.map(function(e){var t=e.node,n=t.frontmatter.title,i=t.fields.slug;return r.a.createElement("li",{key:i,className:c.a.dynamic([["132031231",[a.space.stack.m,a.space.m,a.space.xs,a.font.size.s,a.font.lineHeight.l]]])},r.a.createElement(o.Link,{to:i},n))})),r.a.createElement(c.a,{styleId:"132031231",css:["ul.__jsx-style-dynamic-selector{margin:"+a.space.stack.m+";padding:"+a.space.m+";list-style:circle;}","li.__jsx-style-dynamic-selector{padding:"+a.space.xs+" 0;font-size:"+a.font.size.s+";line-height:"+a.font.lineHeight.l+";}"],dynamic:[a.space.stack.m,a.space.m,a.space.xs,a.font.size.s,a.font.lineHeight.l]}))};m.propTypes={edges:l.a.array.isRequired,theme:l.a.object.isRequired};var d=m;a.d(t,"a",function(){return d})}}]);