(()=>{var e={79366:(e,t,r)=>{if("object"==typeof window&&window.Jetpack_Block_Assets_Base_Url)r.p=window.Jetpack_Block_Assets_Base_Url},98490:e=>{"use strict";e.exports=window.wp.domReady}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)if(r.o(t,o)&&!r.o(e,o))Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;if(r.g.importScripts)e=r.g.location+"";var t=r.g.document;if(!e&&t){if(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase())e=t.currentScript.src;if(!e){var o=t.getElementsByTagName("script");if(o.length)for(var n=o.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=o[n--].src}}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e+"../"})(),(()=>{"use strict";r(79366)})(),(()=>{"use strict";var e=r(98490);r.n(e)()((function(){const e=document.querySelector(".wp-block-jetpack-cookie-consent"),t=e.querySelector("span"),r=parseInt(t.textContent),o=new Date(Date.now()+864e5*r),n=e.querySelector(".wp-block-button a");n.setAttribute("role","button"),n.setAttribute("href","#"),n.addEventListener("click",(e=>{if(n.closest(".wp-block-jetpack-cookie-consent"))e.preventDefault()})),n.addEventListener("click",(function(){try{document.cookie=`eucookielaw=${o.getTime()};path=/;expires=${o.toGMTString()}`,e.classList.add("is-dismissed"),e.addEventListener("transitionend",(()=>e.remove()));const t=new Event("eucookielaw-dismissed");document.dispatchEvent(t)}catch(e){}}))}))})()})();