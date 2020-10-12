(()=>{"use strict";var e={913:()=>{try{self["workbox:core:5.1.4"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:5.1.4"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:5.1.4"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:5.1.4"]&&_()}catch(e){}}},t={};function s(n){if(t[n])return t[n].exports;var a=t[n]={exports:{}};return e[n](a,a.exports,s),a.exports}(()=>{s(977);const e=[],t={get:()=>e,add(t){e.push(...t)}};s(913);const n={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},a=e=>{return e||(t=n.precache,[n.prefix,t,n.suffix].filter((e=>e&&e.length>0)).join("-"));var t};class r extends Error{constructor(e,t){super(((e,...t)=>{let s=e;return t.length>0&&(s+=" :: "+JSON.stringify(t)),s})(e,t)),this.name=e,this.details=t}}const c=new Set,o=(e,t)=>e.filter((e=>t in e)),i=async({request:e,mode:t,plugins:s=[]})=>{const n=o(s,"cacheKeyWillBeUsed");let a=e;for(const e of n)a=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:a}),"string"==typeof a&&(a=new Request(a));return a},h=async({cacheName:e,request:t,response:s,event:n,plugins:a=[],matchOptions:h})=>{const l=await i({plugins:a,request:t,mode:"write"});if(!s)throw new r("cache-put-with-no-response",{url:(u=l.url,new URL(String(u),location.href).href.replace(new RegExp("^"+location.origin),""))});var u;const f=await(async({request:e,response:t,event:s,plugins:n=[]})=>{let a=t,r=!1;for(const t of n)if("cacheWillUpdate"in t){r=!0;const n=t.cacheWillUpdate;if(a=await n.call(t,{request:e,response:a,event:s}),!a)break}return r||(a=a&&200===a.status?a:void 0),a||null})({event:n,plugins:a,response:s,request:l});if(!f)return;const p=await self.caches.open(e),d=o(a,"cacheDidUpdate"),w=d.length>0?await(async({cacheName:e,request:t,event:s,matchOptions:n,plugins:a=[]})=>{const r=await self.caches.open(e),c=await i({plugins:a,request:t,mode:"read"});let o=await r.match(c,n);for(const t of a)if("cachedResponseWillBeUsed"in t){const a=t.cachedResponseWillBeUsed;o=await a.call(t,{cacheName:e,event:s,matchOptions:n,cachedResponse:o,request:c})}return o})({cacheName:e,matchOptions:h,request:l}):null;try{await p.put(l,f)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of c)await e()}(),e}for(const t of d)await t.cacheDidUpdate.call(t,{cacheName:e,event:n,oldResponse:w,newResponse:f,request:l})};let l,u;function f(e){if(!e)throw new r("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:s}=e;if(!s)throw new r("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(s,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(s,location.href),a=new URL(s,location.href);return n.searchParams.set("__WB_REVISION__",t),{cacheKey:n.href,url:a.href}}class p{constructor(e){this._cacheName=a(e),this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map}addToCacheList(e){const t=[];for(const s of e){"string"==typeof s?t.push(s):s&&void 0===s.revision&&t.push(s.url);const{cacheKey:e,url:n}=f(s),a="string"!=typeof s&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new r("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof s&&s.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==s.integrity)throw new r("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,s.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,a),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}async install({event:e,plugins:t}={}){const s=[],n=[],a=await self.caches.open(this._cacheName),r=await a.keys(),c=new Set(r.map((e=>e.url)));for(const[e,t]of this._urlsToCacheKeys)c.has(t)?n.push(e):s.push({cacheKey:t,url:e});const o=s.map((({cacheKey:s,url:n})=>{const a=this._cacheKeysToIntegrities.get(s),r=this._urlsToCacheModes.get(n);return this._addURLToCache({cacheKey:s,cacheMode:r,event:e,integrity:a,plugins:t,url:n})}));return await Promise.all(o),{updatedURLs:s.map((e=>e.url)),notUpdatedURLs:n}}async activate(){const e=await self.caches.open(this._cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),n=[];for(const a of t)s.has(a.url)||(await e.delete(a),n.push(a.url));return{deletedURLs:n}}async _addURLToCache({cacheKey:e,url:t,cacheMode:s,event:n,plugins:a,integrity:c}){const i=new Request(t,{integrity:c,cache:s,credentials:"same-origin"});let u,f=await(async({request:e,fetchOptions:t,event:s,plugins:n=[]})=>{if("string"==typeof e&&(e=new Request(e)),s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const a=o(n,"fetchDidFail"),c=a.length>0?e.clone():null;try{for(const t of n)if("requestWillFetch"in t){const n=t.requestWillFetch,a=e.clone();e=await n.call(t,{request:a,event:s})}}catch(e){throw new r("plugin-error-request-will-fetch",{thrownError:e})}const i=e.clone();try{let a;a="navigate"===e.mode?await fetch(e):await fetch(e,t);for(const e of n)"fetchDidSucceed"in e&&(a=await e.fetchDidSucceed.call(e,{event:s,request:i,response:a}));return a}catch(e){for(const t of a)await t.fetchDidFail.call(t,{error:e,event:s,originalRequest:c.clone(),request:i.clone()});throw e}})({event:n,plugins:a,request:i});for(const e of a||[])"cacheWillUpdate"in e&&(u=e);if(!(u?await u.cacheWillUpdate({event:n,request:i,response:f}):f.status<400))throw new r("bad-precaching-response",{url:t,status:f.status});f.redirected&&(f=await async function(e,t){const s=e.clone(),n={headers:new Headers(s.headers),status:s.status,statusText:s.statusText},a=t?t(n):n,r=function(){if(void 0===l){const e=new Response("");if("body"in e)try{new Response(e.body),l=!0}catch(e){l=!1}l=!1}return l}()?s.body:await s.blob();return new Response(r,a)}(f)),await h({event:n,plugins:a,response:f,request:e===t?i:new Request(e),cacheName:this._cacheName,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s)return(await self.caches.open(this._cacheName)).match(s)}createHandler(e=!0){return async({request:t})=>{try{const e=await this.matchPrecache(t);if(e)return e;throw new r("missing-precache-entry",{cacheName:this._cacheName,url:t instanceof Request?t.url:t})}catch(s){if(e)return fetch(t);throw s}}}createHandlerBoundToURL(e,t=!0){if(!this.getCacheKeyForURL(e))throw new r("non-precached-url",{url:e});const s=this.createHandler(t),n=new Request(e);return()=>s({request:n})}}const d=()=>(u||(u=new p),u);let w=!1;const y=e=>{const s=d(),n=t.get();e.waitUntil(s.install({event:e,plugins:n}).catch((e=>{throw e})))},g=e=>{const t=d();e.waitUntil(t.activate())};var m;s(80),s(873),m=[{'revision':'505c0cf1effddffef5647c779e1bff39','url':'./0e3295e4662107e65d1f8f13f4ba967c.svg'},{'revision':'e79c5c4c731b786dd54a2b9ef382a990','url':'./2169919dec52ee59e0066c7042d4e7cf.png'},{'revision':'3e5baba37cb12b0a9dcf31c5cb400943','url':'./2bfa27340655858f8ebb60b791e8debb.svg'},{'revision':'83c8bca1a5ad16e5cf9968250651e351','url':'./78492f0a1915464b90c8acc9c91b67cb.scss'},{'revision':'f63b0f705e800ea8cb51b742b2547f9a','url':'./7d9900f92548b333e12c1a86962381b6.svg'},{'revision':'818c5b66a96c4d3660fe0a4302dc755e','url':'./app.0bdc1abbf70071ea027f.js'},{'revision':'cbba7d3f8fd8ec4712b965d5ba6c6a99','url':'./app.css'},{'revision':'8a9959519d70070a08b35621b15b81e1','url':'./icon_192x192.8a9959519d70070a08b35621b15b81e1.png'},{'revision':'221356235fd9702aea3f8325894b4ad8','url':'./icon_256x256.221356235fd9702aea3f8325894b4ad8.svg'},{'revision':'1a2cedfce476d482cbb5b12cba7e4146','url':'./icon_512x512.1a2cedfce476d482cbb5b12cba7e4146.png'},{'revision':'73fbab8e9993fa3f04b8c4405091125b','url':'./icon_96x96.73fbab8e9993fa3f04b8c4405091125b.png'},{'revision':'53658ff00d8b3cbebd6398f3595bba77','url':'./index.html'},{'revision':'a20468e24a8e5ca9ecf2a1265020e327','url':'./manifest.webmanifest'},{'revision':'324411c4130e16d0e266ca27d7f1820c','url':'./runtime.0c1168a6cf3797354796.js'},{'revision':'6d3ee81a6fce994bf1626f44572b6cc1','url':'./vendors.2b9101a5b50a8d01ec99.js'}],d().addToCacheList(m),m.length>0&&(self.addEventListener("install",y),self.addEventListener("activate",g)),function(e){w||((({ignoreURLParametersMatching:e=[/^utm_/],directoryIndex:t="index.html",cleanURLs:s=!0,urlManipulation:n}={})=>{const r=a();self.addEventListener("fetch",(a=>{const c=((e,t)=>{const s=d().getURLsToCacheKeys();for(const n of function*(e,{ignoreURLParametersMatching:t,directoryIndex:s,cleanURLs:n,urlManipulation:a}={}){const r=new URL(e,location.href);r.hash="",yield r.href;const c=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some((e=>e.test(s)))&&e.searchParams.delete(s);return e}(r,t);if(yield c.href,s&&c.pathname.endsWith("/")){const e=new URL(c.href);e.pathname+=s,yield e.href}if(n){const e=new URL(c.href);e.pathname+=".html",yield e.href}if(a){const e=a({url:r});for(const t of e)yield t.href}}(e,t)){const e=s.get(n);if(e)return e}})(a.request.url,{cleanURLs:s,directoryIndex:t,ignoreURLParametersMatching:e,urlManipulation:n});if(!c)return;let o=self.caches.open(r).then((e=>e.match(c))).then((e=>e||fetch(c)));a.respondWith(o)}))})(e),w=!0)}(undefined),self.portSW,self.addEventListener("message",(function(e){var t=e.data.type;switch(console.log(t),t){case"init":self.portSW=e.ports[0],console.log("initialized sw")}self.portSW&&portSW.start()})),console.log=function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];self.portSW&&portSW.postMessage({type:"consoleLog",content:t})}})()})();