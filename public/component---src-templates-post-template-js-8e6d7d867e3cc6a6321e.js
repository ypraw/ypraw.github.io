(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"+pfR":function(e,t,n){},"18Kf":function(e,t,n){"use strict";var o=n("MX0m"),a=n.n(o),r=n("q1tI"),i=n.n(r);t.a=function(e){var t=e.html,n=e.theme;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{dangerouslySetInnerHTML:{__html:t},className:a.a.dynamic([["1418140013",[n.time.duration.long,n.font.lineHeight.s,n.font.size.l,n.font.size.m,n.font.lineHeight.m,n.font.size.s,n.font.lineHeight.xxl,n.font.weight.bold,n.color.brand.primary,n.size.radius.default,n.line.color,n.color.neutral.gray.c]]])+" bodytext"}),i.a.createElement(a.a,{styleId:"1418140013",css:[".bodytext.__jsx-style-dynamic-selector{-webkit-animation-name:bodytextEntry;-webkit-animation-name:bodytextEntry-__jsx-style-dynamic-selector;animation-name:bodytextEntry-__jsx-style-dynamic-selector;-webkit-animation-duration:"+n.time.duration.long+";-webkit-animation-duration:"+n.time.duration.long+";animation-duration:"+n.time.duration.long+";}",".bodytext.__jsx-style-dynamic-selector h2,.bodytext.__jsx-style-dynamic-selector h3{margin:1.5em 0 1em;}",".bodytext.__jsx-style-dynamic-selector h2{line-height:"+n.font.lineHeight.s+";font-size:"+n.font.size.l+";}",".bodytext.__jsx-style-dynamic-selector h3{font-size:"+n.font.size.m+";line-height:"+n.font.lineHeight.m+";}",".bodytext.__jsx-style-dynamic-selector p{font-size:"+n.font.size.s+";line-height:"+n.font.lineHeight.xxl+";margin:0 0 1.5em;}",".bodytext.__jsx-style-dynamic-selector ul{list-style:circle;margin:0 0 1.5em;padding:0 0 0 1.5em;}",".bodytext.__jsx-style-dynamic-selector li{margin:0.7em 0;line-height:1.5;}",".bodytext.__jsx-style-dynamic-selector a{font-weight:"+n.font.weight.bold+";color:"+n.color.brand.primary+";-webkit-text-decoration:underline;text-decoration:underline;}",".bodytext.__jsx-style-dynamic-selector a.gatsby-resp-image-link{border:0;display:block;margin:2.5em 0;border-radius:"+n.size.radius.default+";overflow:hidden;border:1px solid "+n.line.color+";}",".bodytext.__jsx-style-dynamic-selector code.language-text{background:"+n.color.neutral.gray.c+";text-shadow:none;color:inherit;padding:0.1em 0.3em 0.2em;border-radius:0.1em;}","@-webkit-keyframes bodytextEntry{from.__jsx-style-dynamic-selector{opacity:0;}to.__jsx-style-dynamic-selector{opacity:1;}}","@-webkit-keyframes bodytextEntry-__jsx-style-dynamic-selector{from{opacity:0;}to{opacity:1;}}","@keyframes bodytextEntry-__jsx-style-dynamic-selector{from{opacity:0;}to{opacity:1;}}"],dynamic:[n.time.duration.long,n.font.lineHeight.s,n.font.size.l,n.font.size.m,n.font.lineHeight.m,n.font.size.s,n.font.lineHeight.xxl,n.font.weight.bold,n.color.brand.primary,n.size.radius.default,n.line.color,n.color.neutral.gray.c]}))}},"7evw":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"CommentCount",{enumerable:!0,get:function(){return o.CommentCount}}),Object.defineProperty(t,"CommentEmbed",{enumerable:!0,get:function(){return a.CommentEmbed}}),Object.defineProperty(t,"DiscussionEmbed",{enumerable:!0,get:function(){return r.DiscussionEmbed}}),t.default=void 0;var o=n("UZsz"),a=n("Bp/N"),r=n("HhXV"),i={CommentCount:o.CommentCount,CommentEmbed:a.CommentEmbed,DiscussionEmbed:r.DiscussionEmbed};t.default=i},"Bp/N":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var o=r(n("q1tI")),a=r(n("17x9"));function r(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=m(e);if(t){var a=m(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(i,e);var t,n,a,r=u(i);function i(){return l(this,i),r.apply(this,arguments)}return t=i,(n=[{key:"getSrc",value:function(){var e=Number(this.props.commentId).toString(36),t=this.props.showParentComment?"1":"0",n=this.props.showMedia?"1":"0";return"https://embed.disqus.com/p/".concat(e,"?p=").concat(t,"&m=").concat(n)}},{key:"render",value:function(){return o.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}])&&s(t.prototype,n),a&&s(t,a),i}(o.default.Component);t.CommentEmbed=f,f.defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320},f.propTypes={commentId:a.default.string.isRequired,showMedia:a.default.bool,showParentComment:a.default.bool,width:a.default.number,height:a.default.number}},CnBM:function(e,t,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n("q1tI"),s=n("17x9"),c=[],u=[];function d(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}function m(e){var t={loading:!1,loaded:{},error:null},n=[];try{Object.keys(e).forEach((function(o){var a=d(e[o]);a.loading?t.loading=!0:(t.loaded[o]=a.loaded,t.error=a.error),n.push(a.promise),a.promise.then((function(e){t.loaded[o]=e})).catch((function(e){t.error=e}))}))}catch(o){t.error=o}return t.promise=Promise.all(n).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function f(e,t){return l.createElement((n=e)&&n.__esModule?n.default:n,t);var n}function p(e,t){var d,m;if(!t.loading)throw new Error("react-loadable requires a `loading` component");var p=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:f,webpack:null,modules:null},t),y=null;function h(){return y||(y=e(p.loader)),y.promise}return c.push(h),"function"==typeof p.webpack&&u.push((function(){if(e=p.webpack,"object"===o(n.m)&&e().every((function(e){return void 0!==e&&void 0!==n.m[e]})))return h();var e})),m=d=function(t){function n(o){a(this,n);var i=r(this,t.call(this,o));return i.retry=function(){i.setState({error:null,loading:!0,timedOut:!1}),y=e(p.loader),i._loadModule()},h(),i.state={error:y.error,pastDelay:!1,timedOut:!1,loading:y.loading,loaded:y.loaded},i}return i(n,t),n.preload=function(){return h()},n.prototype.componentWillMount=function(){this._mounted=!0,this._loadModule()},n.prototype._loadModule=function(){var e=this;if(this.context.loadable&&Array.isArray(p.modules)&&p.modules.forEach((function(t){e.context.loadable.report(t)})),y.loading){"number"==typeof p.delay&&(0===p.delay?this.setState({pastDelay:!0}):this._delay=setTimeout((function(){e.setState({pastDelay:!0})}),p.delay)),"number"==typeof p.timeout&&(this._timeout=setTimeout((function(){e.setState({timedOut:!0})}),p.timeout));var t=function(){e._mounted&&(e.setState({error:y.error,loaded:y.loaded,loading:y.loading}),e._clearTimeouts())};y.promise.then((function(){t()})).catch((function(e){t()}))}},n.prototype.componentWillUnmount=function(){this._mounted=!1,this._clearTimeouts()},n.prototype._clearTimeouts=function(){clearTimeout(this._delay),clearTimeout(this._timeout)},n.prototype.render=function(){return this.state.loading||this.state.error?l.createElement(p.loading,{isLoading:this.state.loading,pastDelay:this.state.pastDelay,timedOut:this.state.timedOut,error:this.state.error,retry:this.retry}):this.state.loaded?p.render(this.state.loaded,this.props):null},n}(l.Component),d.contextTypes={loadable:s.shape({report:s.func.isRequired})},m}function y(e){return p(d,e)}y.Map=function(e){if("function"!=typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return p(m,e)};var h=function(e){function t(){return a(this,t),r(this,e.apply(this,arguments))}return i(t,e),t.prototype.getChildContext=function(){return{loadable:{report:this.props.report}}},t.prototype.render=function(){return l.Children.only(this.props.children)},t}(l.Component);function b(e){for(var t=[];e.length;){var n=e.pop();t.push(n())}return Promise.all(t).then((function(){if(e.length)return b(e)}))}h.propTypes={report:s.func.isRequired},h.childContextTypes={loadable:s.shape({report:s.func.isRequired}).isRequired},y.Capture=h,y.preloadAll=function(){return new Promise((function(e,t){b(c).then(e,t)}))},y.preloadReady=function(){return new Promise((function(e,t){b(u).then(e,e)}))},e.exports=y},Gw0d:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n("MX0m"),a=n.n(o),r=n("q1tI"),i=n.n(r),l=function(e){var t=e.children,n=e.theme;return i.a.createElement(i.a.Fragment,null,i.a.createElement("article",{className:a.a.dynamic([["972832107",[n.space.inset.default,"calc("+n.space.default+") calc("+n.space.default+" * 2)",n.text.maxWidth.tablet,"calc("+n.space.default+" * 2 + 90px) 0 calc("+n.space.default+" * 2)",n.text.maxWidth.desktop]]])+" article"},t),i.a.createElement(a.a,{styleId:"972832107",css:[".article.__jsx-style-dynamic-selector{padding:"+n.space.inset.default+";margin:0 auto;}","@media screen and (min-width:600px){.article.__jsx-style-dynamic-selector{padding:calc("+n.space.default+") calc("+n.space.default+" * 2);max-width:"+n.text.maxWidth.tablet+";}}","@media screen and (min-width:1024px){.article.__jsx-style-dynamic-selector{padding:calc("+n.space.default+" * 2 + 90px) 0 calc("+n.space.default+" * 2);max-width:"+n.text.maxWidth.desktop+";}}"],dynamic:[n.space.inset.default,"calc("+n.space.default+") calc("+n.space.default+" * 2)",n.text.maxWidth.tablet,"calc("+n.space.default+" * 2 + 90px) 0 calc("+n.space.default+" * 2)",n.text.maxWidth.desktop]}))}},HhXV:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var o=i(n("q1tI")),a=i(n("17x9")),r=n("ZMnY");function i(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=p(e);if(t){var a=p(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return f(this,n)}}function f(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=["preData","preInit","onInit","onReady","afterRender","preReset","onIdentify","beforeComment","onNewComment","onPaginate"],h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(l,e);var t,n,a,i=m(l);function l(){return c(this,l),i.apply(this,arguments)}return t=l,(n=[{key:"componentDidMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,r.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,r.insertScript)("https://".concat(this.props.shortname,".disqus.com/embed.js"),"dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,r.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){var t=this;this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.category_id=e.categoryID,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,e.language&&(this.language=e.language),y.forEach((function(n){t.callbacks[n]=[e[n]]}))}}},{key:"render",value:function(){return o.default.createElement("div",s({},this.props,{id:"disqus_thread"}))}}])&&u(t.prototype,n),a&&u(t,a),l}(o.default.Component);t.DiscussionEmbed=h,h.propTypes={shortname:a.default.string.isRequired,config:a.default.shape({identifier:a.default.string,url:a.default.string,title:a.default.string,language:a.default.string,categoryID:a.default.string,remoteAuthS3:a.default.string,apiKey:a.default.string,preData:a.default.func,preInit:a.default.func,onInit:a.default.func,onReady:a.default.func,afterRender:a.default.func,preReset:a.default.func,onIdentify:a.default.func,beforeComment:a.default.func,onNewComment:a.default.func,onPaginate:a.default.func}).isRequired}},Pc3Y:function(e,t,n){e.exports=n.p+"static/ava-94df5f1799a23d1371a8c88a3e1eb9f4.webp"},UZsz:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var o=i(n("q1tI")),a=i(n("17x9")),r=n("ZMnY");function i(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=f(e);if(t){var a=f(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=(0,r.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(l,e);var t,n,a,i=d(l);function l(){return s(this,l),i.apply(this,arguments)}return t=l,(n=[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,r.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?p():(0,r.insertScript)("https://".concat(this.props.shortname,".disqus.com/count.js"),"dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,r.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return o.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}])&&c(t.prototype,n),a&&c(t,a),l}(o.default.Component);t.CommentCount=y,y.propTypes={shortname:a.default.string.isRequired,config:a.default.shape({identifier:a.default.string,url:a.default.string,title:a.default.string}).isRequired}},YvhC:function(e,t,n){"use strict";var o=n("MX0m"),a=n.n(o),r=n("q1tI"),i=n.n(r);t.a=function(e){var t=e.title,n=e.children,o=e.theme;return i.a.createElement(i.a.Fragment,null,t?i.a.createElement("h1",{className:a.a.dynamic([["1826841480",[o.font.size.xxl,o.space.stack.l,o.time.duration.long,o.font.weight.standard,o.space.stack.xs,o.color.brand.primary,"calc("+o.font.size.xl+" * 1.2)","calc("+o.font.size.xl+" * 1.4)"]]])},t):i.a.createElement("h1",{className:a.a.dynamic([["1826841480",[o.font.size.xxl,o.space.stack.l,o.time.duration.long,o.font.weight.standard,o.space.stack.xs,o.color.brand.primary,"calc("+o.font.size.xl+" * 1.2)","calc("+o.font.size.xl+" * 1.4)"]]])},n),i.a.createElement(a.a,{styleId:"1826841480",css:["h1.__jsx-style-dynamic-selector{font-size:"+o.font.size.xxl+";margin:"+o.space.stack.l+";-webkit-animation-name:headlineEntry;-webkit-animation-name:headlineEntry-__jsx-style-dynamic-selector;animation-name:headlineEntry-__jsx-style-dynamic-selector;-webkit-animation-duration:"+o.time.duration.long+";-webkit-animation-duration:"+o.time.duration.long+";animation-duration:"+o.time.duration.long+";}","h1.__jsx-style-dynamic-selector span{font-weight:"+o.font.weight.standard+";display:block;font-size:0.5em;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;margin:"+o.space.stack.xs+";}","h1.__jsx-style-dynamic-selector svg{height:0.75em;fill:"+o.color.brand.primary+";}","@-webkit-keyframes headlineEntry{from.__jsx-style-dynamic-selector{opacity:0.5;}to.__jsx-style-dynamic-selector{opacity:1;}}","@-webkit-keyframes headlineEntry-__jsx-style-dynamic-selector{from{opacity:0.5;}to{opacity:1;}}","@keyframes headlineEntry-__jsx-style-dynamic-selector{from{opacity:0.5;}to{opacity:1;}}","@media screen and (min-width:600px){h1.__jsx-style-dynamic-selector{font-size:calc("+o.font.size.xl+" * 1.2);}}","@media screen and (min-width:1024px){h1.__jsx-style-dynamic-selector{font-size:calc("+o.font.size.xl+" * 1.4);}}"],dynamic:[o.font.size.xxl,o.space.stack.l,o.time.duration.long,o.font.weight.standard,o.space.stack.xs,o.color.brand.primary,"calc("+o.font.size.xl+" * 1.2)","calc("+o.font.size.xl+" * 1.4)"]}))}},ZMnY:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var o=window.document.createElement("script");return o.async=!0,o.src=e,o.id=t,n.appendChild(o),o},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var o;return function(){var a=this,r=arguments,i=function(){o=null,n||e.apply(a,r)},l=n&&!o;window.clearTimeout(o),o=setTimeout(i,t),l&&e.apply(a,r)}},t.isReactElement=l,t.shallowComparison=function e(t,n){var o,a=function(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a,r=!0,l=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return r=e.done,e},e:function(e){l=!0,a=e},f:function(){try{r||null==o.return||o.return()}finally{if(l)throw a}}}}(new Set(Object.keys(t),Object.keys(n)));try{for(a.s();!(o=a.n()).done;){var s=o.value;if("object"===r(t[s])){if(e(t[s],n[s]))return!0}else if(t[s]!==n[s]&&!l(t[s]))return!0}}catch(c){a.e(c)}finally{a.f()}return!1};var o,a=(o=n("q1tI"))&&o.__esModule?o:{default:o};function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function l(e){return!!a.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return a.default.isValidElement(e)}))}},"hL/g":function(e,t,n){},z6Ng:function(e,t,n){"use strict";n.r(t);var o=n("17x9"),a=n.n(o),r=n("q1tI"),i=n.n(r),l=n("hkyM"),s=n("Gw0d"),c=(n("hL/g"),n("CnBM")),u=n.n(c),d=n("YvhC"),m=n("18Kf"),f=n("MX0m"),p=n.n(f),y=n("Wbzz"),h=n("ma3e"),b=function(e){var t=e.prefix,n=e.author,o=e.category,a=e.theme;return i.a.createElement("p",{className:p.a.dynamic([["3306900361",[a.space.m,a.color.neutral.black,a.icon.color,a.space.inline.xs,a.space.xs,a.space.s,a.space.xs,"calc("+a.space.m+" * 1.5) 0 "+a.space.m]]])+" meta"},i.a.createElement("span",{className:p.a.dynamic([["3306900361",[a.space.m,a.color.neutral.black,a.icon.color,a.space.inline.xs,a.space.xs,a.space.s,a.space.xs,"calc("+a.space.m+" * 1.5) 0 "+a.space.m]]])},i.a.createElement(h.d,{size:18})," ",t),i.a.createElement("span",{className:p.a.dynamic([["3306900361",[a.space.m,a.color.neutral.black,a.icon.color,a.space.inline.xs,a.space.xs,a.space.s,a.space.xs,"calc("+a.space.m+" * 1.5) 0 "+a.space.m]]])},i.a.createElement(h.f,{size:18})," ",n),o&&i.a.createElement("span",{className:p.a.dynamic([["3306900361",[a.space.m,a.color.neutral.black,a.icon.color,a.space.inline.xs,a.space.xs,a.space.s,a.space.xs,"calc("+a.space.m+" * 1.5) 0 "+a.space.m]]])},i.a.createElement(h.e,{size:18}),i.a.createElement(y.Link,{to:"/category/"+o.split(" ").join("-")},o)),i.a.createElement(p.a,{styleId:"3306900361",css:[".meta.__jsx-style-dynamic-selector{display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;font-size:0.8em;margin:"+a.space.m+" 0;background:transparent;}",".meta.__jsx-style-dynamic-selector a{color:"+a.color.neutral.black+";}",".meta.__jsx-style-dynamic-selector svg{fill:"+a.icon.color+";margin:"+a.space.inline.xs+";}",".meta.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;text-transform:uppercase;margin:"+a.space.xs+" "+a.space.s+" "+a.space.xs+" 0;}","@media screen and (min-width:600px){.meta.__jsx-style-dynamic-selector{margin:calc("+a.space.m+" * 1.5) 0 "+a.space.m+";}}"],dynamic:[a.space.m,a.color.neutral.black,a.icon.color,a.space.inline.xs,a.space.xs,a.space.s,a.space.xs,"calc("+a.space.m+" * 1.5) 0 "+a.space.m]}))},x=n("3765"),g=n.n(x),w=n("Pc3Y"),_=n.n(w),v=function(e){var t=e.note,n=e.theme;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:p.a.dynamic([["1199344449",[n.space.l,n.space.l,n.line.color,n.line.color,n.line.color]]])+" author"},i.a.createElement("div",{className:p.a.dynamic([["1199344449",[n.space.l,n.space.l,n.line.color,n.line.color,n.line.color]]])+" avatar"},i.a.createElement("img",{src:""===g.a.gravatarImgMd5?_.a:g.a.gravatarImgMd5,alt:g.a.siteTitle,className:p.a.dynamic([["1199344449",[n.space.l,n.space.l,n.line.color,n.line.color,n.line.color]]])})),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:t},className:p.a.dynamic([["1199344449",[n.space.l,n.space.l,n.line.color,n.line.color,n.line.color]]])+" note"})),i.a.createElement(p.a,{styleId:"1199344449",css:[".author.__jsx-style-dynamic-selector{margin:"+n.space.l+" 0;padding:"+n.space.l+" 0;border-top:1px solid "+n.line.color+";border-bottom:1px solid "+n.line.color+";}",".avatar.__jsx-style-dynamic-selector{float:left;border-radius:65% 75%;border:1px solid "+n.line.color+";display:inline-block;height:50px;margin:5px 20px 0 0;overflow:hidden;width:50px;}",".avatar.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:100%;}",".note.__jsx-style-dynamic-selector{font-size:0.9em;line-height:1.6;}","@media screen and (min-width:600px){.author.__jsx-style-dynamic-selector{display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.avatar.__jsx-style-dynamic-selector{-webkit-box-flex:0;-ms-flex:0 0 auto;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;}}"],dynamic:[n.space.l,n.space.l,n.line.color,n.line.color,n.line.color]}))},k=n("7evw"),E=function(e){var t=(e||{}).theme,n=e.article?{url:e.article.url,identifier:e.article.id,title:e.article.title}:null;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{id:"post-comments",className:p.a.dynamic([["2015691128",[t.space.default]]])+" comments"},i.a.createElement(k.DiscussionEmbed,{shortname:g.a.disqusShortname,config:n})),i.a.createElement(p.a,{styleId:"2015691128",css:[".comments.__jsx-style-dynamic-selector{margin:0 -8px "+t.space.default+";}"],dynamic:[t.space.default]}))},j=function(e){var t=e.theme,n=e.next,o=(n=void 0===n?{}:n).fields,a=(o=void 0===o?{}:o).prefix,r=o.slug,l=n.frontmatter,s=(l=void 0===l?{}:l).title,c=e.prev,u=(c=void 0===c?{}:c).fields,d=(u=void 0===u?{}:u).prefix,m=u.slug,f=c.frontmatter,b=(f=void 0===f?{}:f).title;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:p.a.dynamic([["782681884",[t.space.m,t.space.l,t.line.color,t.space.stack.l,t.space.default,t.color.special.attention,t.space.m,t.space.m,t.space.inline.m,t.color.neutral.gray.g,t.space.inline.s]]])+" links"},r&&i.a.createElement(y.Link,{to:r},i.a.createElement(h.c,null),i.a.createElement("h4",{className:p.a.dynamic([["782681884",[t.space.m,t.space.l,t.line.color,t.space.stack.l,t.space.default,t.color.special.attention,t.space.m,t.space.m,t.space.inline.m,t.color.neutral.gray.g,t.space.inline.s]]])},s," ",i.a.createElement("time",{className:p.a.dynamic([["782681884",[t.space.m,t.space.l,t.line.color,t.space.stack.l,t.space.default,t.color.special.attention,t.space.m,t.space.m,t.space.inline.m,t.color.neutral.gray.g,t.space.inline.s]]])},a," "))),m&&i.a.createElement(y.Link,{to:m},i.a.createElement(h.b,null),i.a.createElement("h4",{className:p.a.dynamic([["782681884",[t.space.m,t.space.l,t.line.color,t.space.stack.l,t.space.default,t.color.special.attention,t.space.m,t.space.m,t.space.inline.m,t.color.neutral.gray.g,t.space.inline.s]]])},b," ",i.a.createElement("time",{className:p.a.dynamic([["782681884",[t.space.m,t.space.l,t.line.color,t.space.stack.l,t.space.default,t.color.special.attention,t.space.m,t.space.m,t.space.inline.m,t.color.neutral.gray.g,t.space.inline.s]]])},d)))),i.a.createElement(p.a,{styleId:"782681884",css:[".links.__jsx-style-dynamic-selector{display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0 "+t.space.m+" "+t.space.l+";border-bottom:1px solid "+t.line.color+";margin:"+t.space.stack.l+";}",".links.__jsx-style-dynamic-selector a{display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}",".links.__jsx-style-dynamic-selector a:nth-child(2){margin:"+t.space.default+" 0 0;}",".links.__jsx-style-dynamic-selector svg{fill:"+t.color.special.attention+";width:"+t.space.m+";height:"+t.space.m+";-ms-flex-negative:0;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-box-flex:0;-ms-flex-positive:0;-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;margin:"+t.space.inline.m+";}","h4.__jsx-style-dynamic-selector{font-weight:600;margin:0;font-size:1.1em;}","time.__jsx-style-dynamic-selector{color:"+t.color.neutral.gray.g+";display:block;font-weight:400;font-size:0.8em;margin-top:0.5em;}","@media screen and (min-width:1024px){.links.__jsx-style-dynamic-selector{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.links.__jsx-style-dynamic-selector a{-ms-flex-preferred-size:50%;-webkit-flex-basis:50%;-ms-flex-preferred-size:50%;flex-basis:50%;}.links.__jsx-style-dynamic-selector a:nth-child(2){margin:0;}.links.__jsx-style-dynamic-selector svg{-webkit-transition:all 0.5s;-webkit-transition:all 0.5s;transition:all 0.5s;margin:"+t.space.inline.s+";}@media (hover:hover){.links.__jsx-style-dynamic-selector a:hover svg{-webkit-transform:scale(1.5);-webkit-transform:scale(1.5);-ms-transform:scale(1.5);transform:scale(1.5);}}}"],dynamic:[t.space.m,t.space.l,t.line.color,t.space.stack.l,t.space.default,t.color.special.attention,t.space.m,t.space.m,t.space.inline.m,t.color.neutral.gray.g,t.space.inline.s]}))},S=function(){return i.a.createElement("div",{className:"jsx-4122883224 loading"},"loading...",i.a.createElement(p.a,{styleId:"4122883224",css:[".loading.jsx-4122883224{display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100px;}"]}))},C=u()({loader:function(){return n.e(15).then(n.bind(null,"B52/"))},loading:function(){return i.a.createElement(S,null)}}),I=function(e){var t=e.post,n=e.post,o=n.html,a=n.fields,r=a.prefix,l=a.slug,s=n.frontmatter,c=s.title,u=s.author,f=s.category,p=e.authornote,y=e.facebook,h=e.next,x=e.prev,g=e.theme;return i.a.createElement(i.a.Fragment,null,i.a.createElement("header",null,i.a.createElement(d.a,{title:c,theme:g}),i.a.createElement(b,{prefix:r,author:u,category:f,theme:g})),i.a.createElement(m.a,{html:o,theme:g}),i.a.createElement("footer",null,i.a.createElement(C,{post:t,theme:g}),i.a.createElement(v,{note:p,theme:g}),i.a.createElement(j,{next:h,prev:x,theme:g}),i.a.createElement(E,{slug:l,facebook:y,theme:g})))},O=n("aArQ");n("+pfR");var z=function(e){var t=e.data,n=t.post,o=t.authornote.html,a=t.site.siteMetadata.facebook,r=e.pageContext,c=r.next,u=r.prev;return i.a.createElement(i.a.Fragment,null,i.a.createElement(O.ThemeContext.Consumer,null,(function(e){return i.a.createElement(s.a,{theme:e},i.a.createElement(I,{post:n,next:c,prev:u,authornote:o,facebook:a,theme:e}))})),i.a.createElement(l.a,{data:n,facebook:a}))};z.prototype={data:a.a.object.isRequired,pageContext:a.a.object.isRequired};t.default=z}}]);