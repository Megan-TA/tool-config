!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=11)}([function(t,e){t.exports=Vue},function(t,e){t.exports=VueRouter},function(t,e,r){t.exports=r(6)},function(t,e,r){var n=r(9);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,r(12).default)("cb31fa48",n,!0,{})},function(t,e){function r(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}t.exports=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function u(t){r(a,o,i,u,c,"next",t)}function c(t){r(a,o,i,u,c,"throw",t)}u(void 0)}))}}},function(t,e){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var o=e&&e.prototype instanceof l?e:l,i=Object.create(o.prototype),a=new _(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return O()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=w(a,r);if(u){if(u===f)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=s(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var f={};function l(){}function p(){}function h(){}var d={};d[o]=function(){return this};var v=Object.getPrototypeOf,y=v&&v(v(E([])));y&&y!==e&&r.call(y,o)&&(d=y);var g=h.prototype=l.prototype=Object.create(d);function m(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var n;this._invoke=function(o,i){function a(){return new e((function(n,a){!function n(o,i,a,u){var c=s(t[o],t,i);if("throw"!==c.type){var f=c.arg,l=f.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,a,u)}),(function(t){n("throw",t,a,u)})):e.resolve(l).then((function(t){f.value=t,a(f)}),(function(t){return n("throw",t,a,u)}))}u(c.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function E(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:O}}function O(){return{value:void 0,done:!0}}return p.prototype=g.constructor=h,h.constructor=p,p.displayName=u(h,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,u(t,a,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},m(b.prototype),b.prototype[i]=function(){return this},t.AsyncIterator=b,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new b(c(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},m(g),u(g,a,"Generator"),g[o]=function(){return this},g.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=E,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAYAAADjVADoAAAAAXNSR0IArs4c6QAAAXJJREFUeAHtl8ttwzAQRK2kmNylBnxwDWkkdaQR15BDGpDuLsZQSGCRvQgcwKLH+TwCAhYacJf7RJOew4EBAQhAAAIQgAAEIAABCEAAAhCAgInAYKrzXWZd1+dlWd7Ki9fyvJTnUp7zOI7vwzBcS/yQYQVRIczz/FE6PW50+zlN0+lRMJ42FnS3V7ETtiDUmsfQ71a/ldgKoiyk/hxaQ+mtubs0N4h6JrSG0ltzd2luEPVgbA2lt+bu0twgzmK1ShfTb5e5NYKdFUSt+VP/R9y+l5gJAQhAAAL/jwDXZ3xzKwhseFDHhueRo2y20jNT58htupTNVnrn9jOdG4Sy2UrPlXeO3CCUzVZ65/YzHbdGsLCCqDWx4bkLiSAAAQhA4LcS4PqML2cFgQ0P6tjwPDiUzVZ6ZuocuU2XstlK79x+pnODUDZb6bnyzpEbhLLZSu/cfqbj1ggWVhC1JjY8dyERBCAAAQhAAAIQgAAEIPD3CXwBc0CQ2WIzSt4AAAAASUVORK5CYII="},function(t,e,r){"use strict";r(3)},function(t,e,r){},function(t,e,r){t.exports=r.p+"asserts/success.png"},function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),i=r(1),a=r.n(i),u=r(2),c=r.n(u),s=r(4),f=r.n(s),l=r(5),p=r.n(l);function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t,e,r,n,o,i,a,u){var c,s="function"==typeof t?t.options:t;if(e&&(s.render=e,s.staticRenderFns=r,s._compiled=!0),n&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},s._ssrRegister=c):o&&(c=u?function(){o.call(this,(s.functional?this.parent:this).$root.$options.shadowRoot)}:o),c)if(s.functional){s._injectStyles=c;var f=s.render;s.render=function(t,e){return c.call(e),f(t,e)}}else{var l=s.beforeCreate;s.beforeCreate=l?[].concat(l,c):[c]}return{exports:t,options:s}}var v=d({components:{},props:{},data:function(){return{info:{}}},computed:{},created:function(){},mounted:function(){this.info=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){p()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({age:10},{name:1}),this.init()},methods:{init:function(){return f()(c.a.mark((function t(){var e;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,setTimeout((function(){return 22222}),1e3);case 2:e=t.sent,console.log(e);case 4:case"end":return t.stop()}}),t)})))()}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-view")],1)}),[],!1,null,"5f4e2243",null).exports,y={components:{},props:{},data:function(){return{}},computed:{},created:function(){},mounted:function(){},methods:{}},g=(r(8),d(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"red"},[t._v("这是Home页面")]),t._v(" "),n("button",{on:{click:function(e){return t.$router.push({path:"about"})}}},[t._v("跳去About页面")]),t._v(" "),n("img",{attrs:{src:r(7),alt:"",width:"66"}})])}),[],!1,null,"6d3048d6",null).exports),m=d({components:{},props:{},data:function(){return{}},computed:{},created:function(){},mounted:function(){},methods:{}},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v("这是about页面")]),t._v(" "),n("button",{on:{click:function(e){return t.$router.push({path:"/"})}}},[t._v("跳去Home页面")]),t._v(" "),n("img",{attrs:{src:r(10),alt:"",width:"120"}})])}),[],!1,null,"befadd48",null).exports;o.a.use(a.a);var b=new a.a({mode:"history",routes:[{path:"/",component:g},{path:"/about",component:m}]});new o.a({el:"#app",router:b,render:function(t){return t(v)}})},function(t,e,r){"use strict";function n(t,e){for(var r=[],n={},o=0;o<e.length;o++){var i=e[o],a=i[0],u={id:t+":"+o,css:i[1],media:i[2],sourceMap:i[3]};n[a]?n[a].parts.push(u):r.push(n[a]={id:a,parts:[u]})}return r}r.r(e),r.d(e,"default",(function(){return h}));var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},a=o&&(document.head||document.getElementsByTagName("head")[0]),u=null,c=0,s=!1,f=function(){},l=null,p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(t,e,r,o){s=r,l=o||{};var a=n(t,e);return d(a),function(e){for(var r=[],o=0;o<a.length;o++){var u=a[o];(c=i[u.id]).refs--,r.push(c)}e?d(a=n(t,e)):a=[];for(o=0;o<r.length;o++){var c;if(0===(c=r[o]).refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete i[c.id]}}}}function d(t){for(var e=0;e<t.length;e++){var r=t[e],n=i[r.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](r.parts[o]);for(;o<r.parts.length;o++)n.parts.push(y(r.parts[o]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{var a=[];for(o=0;o<r.parts.length;o++)a.push(y(r.parts[o]));i[r.id]={id:r.id,refs:1,parts:a}}}}function v(){var t=document.createElement("style");return t.type="text/css",a.appendChild(t),t}function y(t){var e,r,n=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(n){if(s)return f;n.parentNode.removeChild(n)}if(p){var o=c++;n=u||(u=v()),e=b.bind(null,n,o,!1),r=b.bind(null,n,o,!0)}else n=v(),e=w.bind(null,n),r=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else r()}}var g,m=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function b(t,e,r,n){var o=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=m(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function w(t,e){var r=e.css,n=e.media,o=e.sourceMap;if(n&&t.setAttribute("media",n),l.ssrId&&t.setAttribute("data-vue-ssr-id",e.id),o&&(r+="\n/*# sourceURL="+o.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}}]);