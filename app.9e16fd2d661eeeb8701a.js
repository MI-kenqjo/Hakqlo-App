(window.webpackJsonp=window.webpackJsonp||[]).push([[2],[,function(module,__webpack_exports__,__webpack_require__){"use strict";(function(global){__webpack_require__.d(__webpack_exports__,"a",(function(){return format}));var dialog_polyfill__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0);window.anime=animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_1__.a;var isInStandaloneMode=function(){return window.matchMedia("(display-mode: standalone)").matches||window.matchMedia("(display-mode: fullscreen)").matches||window.navigator.standalone||document.referrer.includes("android-app://")};function format(t){var e=/(%?)(%([jds]))/g,n=Array.prototype.slice.call(arguments,1);t=t.toString();return n.length&&(t=t.replace(e,(function(t,e,o,i){var r=n.shift();switch(i){case"s":r=""+r;break;case"d":r=Number(r);break;case"j":r=JSON.stringify(r)}return e?(n.unshift(r),t):r}))),n.length&&(t+=" "+n.join(" ")),""+(t=t.replace(/%{2,2}/g,"%"))}global.isPWA=isInStandaloneMode(),window.runExternal=function(url){var fetch_option=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{method:"GET",headers:{"Content-Type":"text/javascript"},mode:"cors"};return new Promise((function(resolve,reject){fetch(url,fetch_option).then((function(t){return t.text()})).then((function(t){return resolve(eval(t))})).catch((function(t){return reject(t)}))}))},window.popup=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{OK:"ok"};"string"==typeof e&&(e=[e]);var o=document.querySelectorAll("dialog"),i=o[o.length-1];o.forEach((function(t){t.setAttribute("class","sent-back")}));var r=document.createElement("dialog");dialog_polyfill__WEBPACK_IMPORTED_MODULE_0__.a.registerDialog(r),document.body.appendChild(r);var a=document.createElement("form");r.appendChild(a),a.setAttribute("method","dialog");var c=document.createElement("p");a.appendChild(c),c.setAttribute("class","title"),c.innerText=t;var l=document.createElement("button");l.innerText="cancel",l.setAttribute("value","cancel"),c.appendChild(l),e.forEach((function(t){var e=document.createElement("p");if("string"==typeof t){var n=document.createElement("label");e.appendChild(n),n.innerText=t}else t instanceof HTMLElement&&e.appendChild(t);a.appendChild(e)}));var s=document.createElement("menu");for(var u in a.appendChild(s),n){var d=document.createElement("button");d.innerHTML=u,s.appendChild(d),d.setAttribute("value",n[u]),d.setAttribute("type","submit")}return new Promise((function(t){r.addEventListener("close",(function(){setTimeout((function(){return r.remove()}),500),i&&i.removeAttribute("class"),t(r.returnValue)})),setTimeout((function(){return r.showModal()}),100)}))},window.createElementFromHTML=function(t){var e=document.createElement("div");return e.innerHTML=t.trim(),e.firstChild},window.secretizeFunc=function(t){t.name?t.toString=function(){return"".concat(t.name,"(){ [ secret code ] }")}:t.toString=function(){return"()=>{ [ secret code ] }"}}}).call(this,__webpack_require__(6))},,,,function(t,e,n){"use strict";n.p},,,,,,function(t,e){var n=document.querySelector("#startup"),o=17.32050807568877;document.addEventListener("DOMContentLoaded",(function(){var t=document.body.clientWidth,e=document.body.clientHeight,i=Math.max(t,e),r=t/2,a=e/2;anime({targets:"svg#logo_anime path#centri",d:[{value:["M 0 0 l 0 0 l 0 0 z","M 0 0 l 0 0 l 0 0 z"],duration:5200/6},{value:"M ".concat(r," ").concat(a-4/3*o," l 20 34.64101615137754 l -40 0 z"),duration:0}],duration:1300}),anime({targets:"svg#logo_anime path#around",d:[{value:[" M ".concat(.34641016151377546*i-20+r,"  ").concat(.6*i-57.73502691896257+a," l -10 17.32050807568877 l 10 17.32050807568877 l 20 0 z m ").concat(40-.6928203230275509*i,"  ").concat(34.64101615137754-1.2*i," l 20 0 l -20 -34.64101615137754 l -20 0 z M ").concat(59.999999999999986+.34641016151377546*i*-.4999999999999998-.6*i*.8660254037844387+r,"  ").concat(11.547005383792495+.34641016151377546*i*.8660254037844387+.6*i*-.4999999999999998+a," l -10.000000000000002 -17.32050807568877 l -20 5.329070518200751e-15 l -9.999999999999996 17.320508075688775 z m ").concat(-49.99999999999999-.6928203230275509*i*-.4999999999999998+1.2*i*.8660254037844387,"  ").concat(17.320508075688785-.6928203230275509*i*.8660254037844387-1.2*i*-.4999999999999998," l -9.999999999999996 17.320508075688775 l 40 -1.0658141036401503e-14 l 9.999999999999996 -17.320508075688775 z M ").concat(.34641016151377546*i*-.5000000000000004-39.99999999999998-.6*i*-.8660254037844385+r,"  ").concat(46.18802153517008+.34641016151377546*i*-.8660254037844385+.6*i*-.5000000000000004+a," l 20 -7.105427357601002e-15 l 9.999999999999993 -17.320508075688778 l -10.000000000000009 -17.32050807568877 z m ").concat(9.999999999999975-.6928203230275509*i*-.5000000000000004+1.2*i*-.8660254037844385,"  ").concat(-51.96152422706633-.6928203230275509*i*-.8660254037844385-1.2*i*-.5000000000000004," l -10.000000000000009 -17.32050807568877 l -19.999999999999986 34.641016151377556 l 10.000000000000009 17.32050807568877 z")," M ".concat(.34641016151377546*i-20+r,"  ").concat(.6*i-57.73502691896257+a," l -10 17.32050807568877 l 10 17.32050807568877 l 20 0 z m ").concat(40-.6928203230275509*i,"  ").concat(34.64101615137754-1.2*i," l 20 0 l -20 -34.64101615137754 l -20 0 z M ").concat(59.999999999999986+.34641016151377546*i*-.4999999999999998-.6*i*.8660254037844387+r,"  ").concat(11.547005383792495+.34641016151377546*i*.8660254037844387+.6*i*-.4999999999999998+a," l -10.000000000000002 -17.32050807568877 l -20 5.329070518200751e-15 l -9.999999999999996 17.320508075688775 z m ").concat(-49.99999999999999-.6928203230275509*i*-.4999999999999998+1.2*i*.8660254037844387,"  ").concat(17.320508075688785-.6928203230275509*i*.8660254037844387-1.2*i*-.4999999999999998," l -9.999999999999996 17.320508075688775 l 40 -1.0658141036401503e-14 l 9.999999999999996 -17.320508075688775 z M ").concat(.34641016151377546*i*-.5000000000000004-39.99999999999998-.6*i*-.8660254037844385+r,"  ").concat(46.18802153517008+.34641016151377546*i*-.8660254037844385+.6*i*-.5000000000000004+a," l 20 -7.105427357601002e-15 l 9.999999999999993 -17.320508075688778 l -10.000000000000009 -17.32050807568877 z m ").concat(9.999999999999975-.6928203230275509*i*-.5000000000000004+1.2*i*-.8660254037844385,"  ").concat(-51.96152422706633-.6928203230275509*i*-.8660254037844385-1.2*i*-.5000000000000004," l -10.000000000000009 -17.32050807568877 l -19.999999999999986 34.641016151377556 l 10.000000000000009 17.32050807568877 z")]},{value:" M ".concat(i/6.928203230275509-20+r,"  ").concat(i/4-57.73502691896257+a," l -10 17.32050807568877 l 70 121.2435565298214 l 20 0 z m ").concat(40-i/3.4641016151377544,"  ").concat(34.64101615137754-i/2," l 20 0 l -140 -242.4871130596428 l -20 0 z M ").concat(59.999999999999986+i/6.928203230275509*-.4999999999999998-i/4*.8660254037844387+r,"  ").concat(11.547005383792495+i/6.928203230275509*.8660254037844387+i/4*-.4999999999999998+a," l -10.000000000000002 -17.32050807568877 l -140 3.552713678800501e-14 l -9.999999999999996 17.320508075688775 z m ").concat(-49.99999999999999-i/3.4641016151377544*-.4999999999999998+i/2*.8660254037844387,"  ").concat(17.320508075688785-i/3.4641016151377544*.8660254037844387-i/2*-.4999999999999998," l -9.999999999999996 17.320508075688775 l 280 -7.105427357601002e-14 l 9.999999999999996 -17.320508075688775 z M ").concat(i/6.928203230275509*-.5000000000000004-39.99999999999998-i/4*-.8660254037844385+r,"  ").concat(46.18802153517008+i/6.928203230275509*-.8660254037844385+i/4*-.5000000000000004+a," l 20 -7.105427357601002e-15 l 69.99999999999994 -121.24355652982146 l -10.000000000000009 -17.32050807568877 z m ").concat(9.999999999999975-i/3.4641016151377544*-.5000000000000004+i/2*-.8660254037844385,"  ").concat(-51.96152422706633-i/3.4641016151377544*-.8660254037844385-i/2*-.5000000000000004," l -10.000000000000009 -17.32050807568877 l -139.9999999999999 242.48711305964292 l 10.000000000000009 17.32050807568877 z"),duration:325,easing:"easeInCubic"},{value:" M ".concat(0+r,"  ").concat(-23.094010767585026+a," l -10 17.32050807568877 l 15 25.980762113533157 l 20 0 z m 0 -34.64101615137754 l 20 0 l -30 -51.96152422706631 l -20 0 z M ").concat(19.999999999999996+r,"  ").concat(11.547005383792508+a," l -10.000000000000002 -17.32050807568877 l -29.999999999999996 7.105427357601002e-15 l -9.999999999999996 17.320508075688775 z m 30 17.320508075688764 l -9.999999999999996 17.320508075688775 l 59.99999999999999 -1.4210854715202004e-14 l 9.999999999999996 -17.320508075688775 z M ").concat(-19.999999999999993+r,"  ").concat(11.547005383792524+a," l 20 -7.105427357601002e-15 l 14.999999999999986 -25.980762113533167 l -10.000000000000009 -17.32050807568877 z m -29.999999999999993 17.320508075688785 l -10.000000000000009 -17.32050807568877 l -29.99999999999997 51.961524227066334 l 10.000000000000009 17.32050807568877 z"),duration:1300/6,easing:"linear"},{value:" M ".concat(-20+r,"  ").concat(-57.73502691896257+a," l -10 17.32050807568877 l 10 17.32050807568877 l 20 0 z m 40 34.64101615137754 l 20 0 l -20 -34.64101615137754 l -20 0 z M ").concat(59.999999999999986+r,"  ").concat(11.547005383792495+a," l -10.000000000000002 -17.32050807568877 l -20 5.329070518200751e-15 l -9.999999999999996 17.320508075688775 z m -49.99999999999999 17.320508075688785 l -9.999999999999996 17.320508075688775 l 40 -1.0658141036401503e-14 l 9.999999999999996 -17.320508075688775 z M ").concat(-39.99999999999998+r,"  ").concat(46.18802153517008+a," l 20 -7.105427357601002e-15 l 9.999999999999993 -17.320508075688778 l -10.000000000000009 -17.32050807568877 z m 9.999999999999975 -51.96152422706633 l -10.000000000000009 -17.32050807568877 l -19.999999999999986 34.641016151377556 l 10.000000000000009 17.32050807568877 z"),easing:"easeOutCubic"}],duration:1300}),anime({targets:'svg#logo_anime stop[offset="1"]',"stop-color":[{value:"#01fdff"},{value:"#dc00ff"}],easing:"easeInCubic",delay:400,duration:1500}),l=document.querySelector("svg#logo_anime #logo_grad"),l.setAttribute("x1",t/2-20+"px"),l.setAttribute("x2",t/2+20+"px"),l.setAttribute("y1",e/2-10*o/3+"px"),l.setAttribute("y2",e/2+10*o/3+"px"),anime({targets:"svg#logo_anime",filter:[{value:"drop-shadow(0px 0px 0px #8fd0ff)"},{value:"drop-shadow(0px 0px 15px #8fd0ff)"},{value:"drop-shadow(0px 0px 5px #8fd0ff)"},{value:"drop-shadow(0px 0px 0px #8fd0ff)"}],easing:"easeInOutCubic",delay:1300,duration:800}),setTimeout((function(){n.style.transition="0.7s",n.style.opacity=0,WindowSystem.listView=!0,window.WindowSystem.away=!1,setTimeout((function(){n.remove(),WindowSystem.listView=!1}),700)}),3e3)}))},function(t,e){addEventListener("DOMContentLoaded",(function(){var t=new URLSearchParams(location.search);if("shortcut"===t.get("call"))switch(t.get("content")){case"shortcut1":popup("hi","opened by shortcut 1!");break;case"shortcut2":popup("hi",["opened by shortcut 1!","yay"])}}))},function(t,e,n){"use strict";n.r(e);n(2);var o=n(1),i=n(4),r=n.n(i);function a(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var l=function(t){t.portMain;var e=function(t){var e,n=t.data,o=n.type,i=n.content;switch(o){case"consoleLog":(e=console).log.apply(e,["sw:"].concat(a(i)))}portMain.start()};"serviceWorker"in navigator&&(r.a.register().then((function(n){if(console.log("succeeded"),n.active){console.log("sw is active");var o=new MessageChannel,i=o.port1,r=o.port2;n.active.postMessage({type:"init"},[r]),t.portMain=i,i.onmessage=e}else console.log("sw is NOT active")})).catch((function(t){console.error("error:",t)})),t.isPWA?console.log("this is in PWA"):(console.log("Not PWA: going to /install.html"),location.href="./install.html"))},s=n(9),u=n(10),d=function(){globalThis.safeAreaTop=getComputedStyle(document.documentElement).getPropertyValue("--safe-area-top"),globalThis.safeAreaLeft=getComputedStyle(document.documentElement).getPropertyValue("--safe-area-left"),globalThis.safeAreaBottom=getComputedStyle(document.documentElement).getPropertyValue("--safe-area-bottom"),globalThis.safeAreaRight=getComputedStyle(document.documentElement).getPropertyValue("--safe-area-right")};window.term=new s.Terminal,window.hakqloApp={print:function(){return term.write(o.a.apply(void 0,arguments).replace(/\n/g,"\r\n"))},println:function(){return term.writeln(o.a.apply(void 0,arguments).replace(/\n/g,"\r\n"))}};var p=new u.FitAddon;term.loadAddon(p),term.open(document.querySelector("#xterm_container")),p.fit(),d(),window.addEventListener("resize",(function(t){p.fit(),d(),hakqloApp.println("resized...")})),window.addEventListener("DOMContentLoaded",(function(){!function(t){var e=t.log,n=t.warn,o=t.error,i=function(){var t=Math.ceil(safeAreaTop/term.getOption("lineHeight")),e=Math.ceil(2*safeAreaLeft/term.getOption("lineHeight"));term.buffer.baseY<=t&&term.write("[".concat(t,";").concat(e+1,"H"))};t.log=function(){var t;e.apply(void 0,arguments),i(),hakqloApp.print("[39m"),(t=hakqloApp).println.apply(t,arguments)},t.warn=function(){var t;n.apply(void 0,arguments),i(),hakqloApp.print("[33m"),(t=hakqloApp).println.apply(t,arguments)},t.error=function(){var t;o.apply(void 0,arguments),i(),hakqloApp.print("[31m"),(t=hakqloApp).println.apply(t,arguments)},secretizeFunc(t.log),secretizeFunc(t.warn),secretizeFunc(t.error)}(globalThis.console)}));var f;n(11),n(5),n.p;"ja"!=navigator.language&&"ja-JP"!=navigator.language||(f="ja",document.body.setAttribute("lang",f));var h=n(0);function m(t){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function w(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function y(t,e){return!e||"object"!==m(e)&&"function"!=typeof e?v(t):e}function v(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function g(t){var e="function"==typeof Map?new Map:void 0;return(g=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,o)}function o(){return b(t,arguments,M(this).constructor)}return o.prototype=Object.create(t.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),L(o,t)})(t)}function b(t,e,n){return(b=_()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var i=new(Function.bind.apply(t,o));return n&&L(i,n.prototype),i}).apply(null,arguments)}function _(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function L(t,e){return(L=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function M(t){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function E(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}window.WindowSystem={windowList:[],currentWin:0,container:document.querySelector("#windowsContainer"),scrollLength:0,_away:!1,_listView:!0,init:function(){},add:function(t){var e=document.createElement("app-window");return this.windowList.push(e),this.container.appendChild(e),t&&e.appendChild(t),this.moveTo(e.winIndex),e},moveTo:function(t){var e=this;if(t>=this.windowList.length)return 0;this.listView=!0,this.currentWin=t,setTimeout((function(){WindowSystem.container.classList.add("scrolling"),Object(h.a)({targets:e,scrollLength:t,duration:300,easing:"easeInOutQuint"}),setTimeout((function(){e.listView=!1,WindowSystem.container.classList.remove("scrolling")}),300)}),200)},draw:function(){},scrollTo:function(t){var e=t%this.windowList.length;this.scrollLength=e},bringToCenter:function(){this.scrollLength=Math.round(this.scrollLength)},get away(){return this._away},set away(t){t?this.container.classList.add("away"):this.container.classList.remove("away"),this._away=t},set listView(t){if(t)for(var e in this.scrollLength=this.currentWin,this.windowList)e==this.currentWin?this.windowList[e].classList.remove("focus"):this.windowList[e].classList.remove("away");else for(var n in this.windowList)n==this.currentWin?this.windowList[n].classList.add("focus"):this.windowList[n].classList.add("away");this._listView=t},get listView(){return this._listView}},WindowSystem.away=!0;var S=0,A=100/screen.width/.6/50,x=0;window.addEventListener("resize",(function(){A=100/screen.width/.6/50}));var T=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&L(t,e)}(c,t);var e,n,o,i,r,a=(e=c,n=_(),function(){var t,o=M(e);if(n){var i=M(this).constructor;t=Reflect.construct(o,arguments,i)}else t=o.apply(this,arguments);return y(this,t)});function c(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),E(v(t=a.call(this)),"winIndex",void 0),E(v(t),"ws",window.WindowSystem),E(v(t),"ready",!1),E(v(t),"cover",document.createElement("div")),t}return o=c,(i=[{key:"connectedCallback",value:function(){var t=this;this.ready=!0,this.updateIndex(),this.appendChild(this.cover),this.cover.setAttribute("class","cover"),requestAnimationFrame(this.draw.bind(this));var e={},n=function(e){t.ws.listView&&e.stopPropagation()};this.cover.addEventListener("touchstart",(function(t){n(t),S=t.changedTouches[0].screenX*A,x=WindowSystem.scrollLength,WindowSystem.container.classList.add("scrolling")}),e),this.cover.addEventListener("touchmove",(function(t){n(t);var e=S-t.changedTouches[0].screenX*A+x;if(1===WindowSystem.windowList.length&&(e>.4||e<-.4))return 0;WindowSystem.scrollTo(e)}),e),this.cover.addEventListener("touchend",(function(t){n(t),WindowSystem.container.classList.remove("scrolling"),WindowSystem.bringToCenter()}),e),this.cover.addEventListener("click",(function(e){n(e),t.focus()}),e)}},{key:"focus",value:function(){WindowSystem.currentWin=this.winIndex,WindowSystem.listView=!1}},{key:"updateIndex",value:function(){this.winIndex=this.ws.windowList.indexOf(this)}},{key:"draw",value:function(){if(!1===this.ready)return console.log("not ready"),0;if(this.classList.contains("focus"))this.style.transform=null,this.style.opacity=1;else if(this.classList.contains("away"))this.style.opacity=0,this.style.transform="translateZ(-100px)";else{var t=(n=this.winIndex,o=this.ws.scrollLength,i=this.ws.windowList.length,r=n-o,(Math.abs(r)>Math.abs(r+i)?r+i:Math.abs(r)>Math.abs(r-i)?r-i:r)*Math.PI/4),e=Math.cos(t);this.style.transform="scale(".concat(.6,", ").concat(.6,") translateZ(").concat(70*e,"px) translateX(").concat(50*Math.sin(t),"%)"),this.style.opacity=Math.pow(e,1.5)}var n,o,i,r;requestAnimationFrame(this.draw.bind(this))}}])&&w(o.prototype,i),r&&w(o,r),c}(g(HTMLElement));customElements.define("app-window",T),window.nativeOpen=window.open;WindowSystem.add();WindowSystem.add();var z=document.createElement("div");z.classList.add("testing"),z.onclick=function(){return WindowSystem.listView=1},z.innerText="cfghejkdnbhs\nvgjckanbdsjwb\nhsdsjk",WindowSystem.add(z);n(12);l(window)}],[[13,0,1]]]);