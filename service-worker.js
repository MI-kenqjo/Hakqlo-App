!function(e){var t={};function n(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(s,r,function(t){return e[t]}.bind(null,r));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="./",n.h="30fe8c376d2973d8cf25",n.cn="InjectManifest",n(n.s=4)}([function(e,t,n){"use strict";try{self["workbox:precaching:5.1.4"]&&_()}catch(e){}},function(e,t,n){"use strict";try{self["workbox:core:5.1.4"]&&_()}catch(e){}},function(e,t,n){"use strict";try{self["workbox:routing:5.1.4"]&&_()}catch(e){}},function(e,t,n){"use strict";try{self["workbox:strategies:5.1.4"]&&_()}catch(e){}},function(e,t,n){"use strict";n.r(t);n(0);const s=[],r={get:()=>s,add(e){s.push(...e)}};n(1);const c={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},a=e=>[c.prefix,e,c.suffix].filter(e=>e&&e.length>0).join("-"),o=e=>e||a(c.precache),i=e=>new URL(String(e),location.href).href.replace(new RegExp("^"+location.origin),""),l=(e,...t)=>{let n=e;return t.length>0&&(n+=" :: "+JSON.stringify(t)),n};class h extends Error{constructor(e,t){super(l(e,t)),this.name=e,this.details=t}}const u=new Set;const f=(e,t)=>e.filter(e=>t in e),d=async({request:e,mode:t,plugins:n=[]})=>{const s=f(n,"cacheKeyWillBeUsed");let r=e;for(const e of s)r=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:r}),"string"==typeof r&&(r=new Request(r));return r},p=async({cacheName:e,request:t,event:n,matchOptions:s,plugins:r=[]})=>{const c=await self.caches.open(e),a=await d({plugins:r,request:t,mode:"read"});let o=await c.match(a,s);for(const t of r)if("cachedResponseWillBeUsed"in t){const r=t.cachedResponseWillBeUsed;o=await r.call(t,{cacheName:e,event:n,matchOptions:s,cachedResponse:o,request:a})}return o},y=async({cacheName:e,request:t,response:n,event:s,plugins:r=[],matchOptions:c})=>{const a=await d({plugins:r,request:t,mode:"write"});if(!n)throw new h("cache-put-with-no-response",{url:i(a.url)});const o=await(async({request:e,response:t,event:n,plugins:s=[]})=>{let r=t,c=!1;for(const t of s)if("cacheWillUpdate"in t){c=!0;const s=t.cacheWillUpdate;if(r=await s.call(t,{request:e,response:r,event:n}),!r)break}return c||(r=r&&200===r.status?r:void 0),r||null})({event:s,plugins:r,response:n,request:a});if(!o)return void 0;const l=await self.caches.open(e),y=f(r,"cacheDidUpdate"),w=y.length>0?await p({cacheName:e,matchOptions:c,request:a}):null;try{await l.put(a,o)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of u)await e()}(),e}for(const t of y)await t.cacheDidUpdate.call(t,{cacheName:e,event:s,oldResponse:w,newResponse:o,request:a})},w=async({request:e,fetchOptions:t,event:n,plugins:s=[]})=>{if("string"==typeof e&&(e=new Request(e)),n instanceof FetchEvent&&n.preloadResponse){const e=await n.preloadResponse;if(e)return e}const r=f(s,"fetchDidFail"),c=r.length>0?e.clone():null;try{for(const t of s)if("requestWillFetch"in t){const s=t.requestWillFetch,r=e.clone();e=await s.call(t,{request:r,event:n})}}catch(e){throw new h("plugin-error-request-will-fetch",{thrownError:e})}const a=e.clone();try{let r;r="navigate"===e.mode?await fetch(e):await fetch(e,t);for(const e of s)"fetchDidSucceed"in e&&(r=await e.fetchDidSucceed.call(e,{event:n,request:a,response:r}));return r}catch(e){0;for(const t of r)await t.fetchDidFail.call(t,{error:e,event:n,originalRequest:c.clone(),request:a.clone()});throw e}};let g;async function m(e,t){const n=e.clone(),s={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=t?t(s):s,c=function(){if(void 0===g){const e=new Response("");if("body"in e)try{new Response(e.body),g=!0}catch(e){g=!1}g=!1}return g}()?n.body:await n.blob();return new Response(c,r)}function v(e){if(!e)throw new h("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:n}=e;if(!n)throw new h("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const s=new URL(n,location.href),r=new URL(n,location.href);return s.searchParams.set("__WB_REVISION__",t),{cacheKey:s.href,url:r.href}}class R{constructor(e){this._cacheName=o(e),this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map}addToCacheList(e){const t=[];for(const n of e){"string"==typeof n?t.push(n):n&&void 0===n.revision&&t.push(n.url);const{cacheKey:e,url:s}=v(n),r="string"!=typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(s)&&this._urlsToCacheKeys.get(s)!==e)throw new h("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(s),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==n.integrity)throw new h("add-to-cache-list-conflicting-integrities",{url:s});this._cacheKeysToIntegrities.set(e,n.integrity)}if(this._urlsToCacheKeys.set(s,e),this._urlsToCacheModes.set(s,r),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}async install({event:e,plugins:t}={}){const n=[],s=[],r=await self.caches.open(this._cacheName),c=await r.keys(),a=new Set(c.map(e=>e.url));for(const[e,t]of this._urlsToCacheKeys)a.has(t)?s.push(e):n.push({cacheKey:t,url:e});const o=n.map(({cacheKey:n,url:s})=>{const r=this._cacheKeysToIntegrities.get(n),c=this._urlsToCacheModes.get(s);return this._addURLToCache({cacheKey:n,cacheMode:c,event:e,integrity:r,plugins:t,url:s})});await Promise.all(o);return{updatedURLs:n.map(e=>e.url),notUpdatedURLs:s}}async activate(){const e=await self.caches.open(this._cacheName),t=await e.keys(),n=new Set(this._urlsToCacheKeys.values()),s=[];for(const r of t)n.has(r.url)||(await e.delete(r),s.push(r.url));return{deletedURLs:s}}async _addURLToCache({cacheKey:e,url:t,cacheMode:n,event:s,plugins:r,integrity:c}){const a=new Request(t,{integrity:c,cache:n,credentials:"same-origin"});let o,i=await w({event:s,plugins:r,request:a});for(const e of r||[])"cacheWillUpdate"in e&&(o=e);if(!(o?await o.cacheWillUpdate({event:s,request:a,response:i}):i.status<400))throw new h("bad-precaching-response",{url:t,status:i.status});i.redirected&&(i=await m(i)),await y({event:s,plugins:r,response:i,request:e===t?a:new Request(e),cacheName:this._cacheName,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,n=this.getCacheKeyForURL(t);if(n){return(await self.caches.open(this._cacheName)).match(n)}}createHandler(e=!0){return async({request:t})=>{try{const e=await this.matchPrecache(t);if(e)return e;throw new h("missing-precache-entry",{cacheName:this._cacheName,url:t instanceof Request?t.url:t})}catch(n){if(e)return fetch(t);throw n}}}createHandlerBoundToURL(e,t=!0){if(!this.getCacheKeyForURL(e))throw new h("non-precached-url",{url:e});const n=this.createHandler(t),s=new Request(e);return()=>n({request:s})}}let _;const U=()=>(_||(_=new R),_);const L=(e,t)=>{const n=U().getURLsToCacheKeys();for(const s of function*(e,{ignoreURLParametersMatching:t,directoryIndex:n,cleanURLs:s,urlManipulation:r}={}){const c=new URL(e,location.href);c.hash="",yield c.href;const a=function(e,t=[]){for(const n of[...e.searchParams.keys()])t.some(e=>e.test(n))&&e.searchParams.delete(n);return e}(c,t);if(yield a.href,n&&a.pathname.endsWith("/")){const e=new URL(a.href);e.pathname+=n,yield e.href}if(s){const e=new URL(a.href);e.pathname+=".html",yield e.href}if(r){const e=r({url:c});for(const t of e)yield t.href}}(e,t)){const e=n.get(s);if(e)return e}};let q=!1;function T(e){q||((({ignoreURLParametersMatching:e=[/^utm_/],directoryIndex:t="index.html",cleanURLs:n=!0,urlManipulation:s}={})=>{const r=o();self.addEventListener("fetch",c=>{const a=L(c.request.url,{cleanURLs:n,directoryIndex:t,ignoreURLParametersMatching:e,urlManipulation:s});if(!a)return void 0;let o=self.caches.open(r).then(e=>e.match(a)).then(e=>e||fetch(a));c.respondWith(o)})})(e),q=!0)}const K=e=>{const t=U(),n=r.get();e.waitUntil(t.install({event:e,plugins:n}).catch(e=>{throw e}))},b=e=>{const t=U();e.waitUntil(t.activate())};n(2);n(3);var x;(function(e){U().addToCacheList(e),e.length>0&&(self.addEventListener("install",K),self.addEventListener("activate",b))})([{'revision':'505c0cf1effddffef5647c779e1bff39','url':'./0e3295e4662107e65d1f8f13f4ba967c.svg'},{'revision':'e79c5c4c731b786dd54a2b9ef382a990','url':'./2169919dec52ee59e0066c7042d4e7cf.png'},{'revision':'3e5baba37cb12b0a9dcf31c5cb400943','url':'./2bfa27340655858f8ebb60b791e8debb.svg'},{'revision':'83c8bca1a5ad16e5cf9968250651e351','url':'./78492f0a1915464b90c8acc9c91b67cb.scss'},{'revision':'f63b0f705e800ea8cb51b742b2547f9a','url':'./7d9900f92548b333e12c1a86962381b6.svg'},{'revision':'d871f97683da444ec9a85d87bf3e4576','url':'./app.921acf8c91240ad7b309.js'},{'revision':'c34ddb1239e15e515453909aa9b1c658','url':'./app.css'},{'revision':'8a9959519d70070a08b35621b15b81e1','url':'./icon_192x192.8a9959519d70070a08b35621b15b81e1.png'},{'revision':'221356235fd9702aea3f8325894b4ad8','url':'./icon_256x256.221356235fd9702aea3f8325894b4ad8.svg'},{'revision':'1a2cedfce476d482cbb5b12cba7e4146','url':'./icon_512x512.1a2cedfce476d482cbb5b12cba7e4146.png'},{'revision':'73fbab8e9993fa3f04b8c4405091125b','url':'./icon_96x96.73fbab8e9993fa3f04b8c4405091125b.png'},{'revision':'0bfa1c5a6b3fc792ce2c2b6e0df3542c','url':'./index.html'},{'revision':'a20468e24a8e5ca9ecf2a1265020e327','url':'./manifest.webmanifest'},{'revision':'003729f742f29749668bc864bd82b634','url':'./runtime.921acf8c91240ad7b309.js'},{'revision':'49f599db54feda2914410ccdd449d74f','url':'./vendors.921acf8c91240ad7b309.js'}]),T(x),self.portSW,self.addEventListener("message",(function(e){var t=e.data.type;switch(console.log(t),t){case"init":self.portSW=e.ports[0],console.log("initialized sw")}self.portSW&&portSW.start()})),console.log=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];self.portSW&&portSW.postMessage({type:"consoleLog",content:t})}}]);