(window.webpackJsonp=window.webpackJsonp||[]).push([[2],[function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(1);const i=(e,t,n={OK:"ok"})=>{const i=document.querySelectorAll("dialog"),r=i[i.length-1];i.forEach(e=>{e.setAttribute("class","sent-back")});const s=document.createElement("dialog");o.a.registerDialog(s),document.body.appendChild(s);const a=document.createElement("form");s.appendChild(a),a.setAttribute("method","dialog");const c=document.createElement("p");a.appendChild(c),c.setAttribute("class","title"),c.innerText=e;const l=document.createElement("button");l.innerText="cancel",l.setAttribute("value","cancel"),c.appendChild(l),t.forEach(e=>{const t=document.createElement("p");if("string"==typeof e){let n=document.createElement("label");t.appendChild(n),n.innerText=e}else e instanceof HTMLElement&&t.appendChild(e);a.appendChild(t)});const d=document.createElement("menu");a.appendChild(d);for(const e in n){const t=document.createElement("button");t.innerHTML=e,d.appendChild(t),t.setAttribute("value",n[e]),t.setAttribute("type","submit")}return new Promise(e=>{s.addEventListener("close",()=>{setTimeout(()=>s.remove(),500),r&&r.removeAttribute("class"),e(s.returnValue)}),setTimeout(()=>s.showModal(),100)})},r=e=>{var t=document.createElement("div");return t.innerHTML=e.trim(),t.firstChild};function s(e){e.popup=i,e.createElementFromHTML=r}},,,function(e,t,n){"use strict";n.p},,,,,,function(e,t){document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector("#startup");window.addEventListener("load",t=>{e.setAttribute("class","clear"),setTimeout(()=>{e.remove()},3e3)})})},function(e,t,n){"use strict";n.r(t);n(9);var o=n(0),i=n(2),r=n.n(i);var s=e=>{e.isPWA=window.matchMedia("(display-mode: standalone)").matches||window.matchMedia("(display-mode: fullscreen)").matches||window.navigator.standalone||document.referrer.includes("android-app://"),e.portMain;const t=e=>{const{type:t,content:n}=e.data;switch(t){case"consoleLog":console.log("sw:",n)}portMain.start()};"serviceWorker"in navigator&&(r.a.register().then((function(n){if(console.log("sucsessed"),n.active){console.log("sw is active");const{port1:o,port2:i}=new MessageChannel;n.active.postMessage({type:"init"},[i]),e.portMain=o,o.onmessage=t}else console.log("sw is NOT active")})).catch((function(e){console.error("error:",e)})),e.isPWA?console.log("this is in PWA"):(console.log("Not PWA: going to /install.html"),location.href="./install.html"))},a=n(6),c=n(7);const l=new a.Terminal,d=new c.FitAddon;l.loadAddon(d),l.open(document.querySelector("#xterm_container")),d.fit(),window.addEventListener("resize",e=>{d.fit(),l.write("resized...\n[1G")}),window.addEventListener("DOMContentLoaded",()=>{(e=>{const t=e.log,n=e.warn,o=e.error;e.log=(...e)=>{t(e.join(" ")),l.write(e.join(" ")+"\n[1G")},e.warn=(...e)=>{n(e.join(" ")),l.write("[33m"+e.join(" ")+"[37m\n[1G")},e.error=(...e)=>{o(e.join(" ")),l.write("[31m"+e.join(" ")+"[37m\n[1G")}})(globalThis.console)});n(3),n.p;Object(o.a)(window),s(window)}],[[10,0,1]]]);