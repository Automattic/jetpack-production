(()=>{var e={79366:(e,t,r)=>{if("object"==typeof window&&window.Jetpack_Block_Assets_Base_Url)r.p=window.Jetpack_Block_Assets_Base_Url},98490:e=>{"use strict";e.exports=window.wp.domReady}},t={};function r(i){var o=t[i];if(void 0!==o)return o.exports;var n=t[i]={exports:{}};return e[i](n,n.exports,r),n.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var i in t)if(r.o(t,i)&&!r.o(e,i))Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;if(r.g.importScripts)e=r.g.location+"";var t=r.g.document;if(!e&&t){if(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase())e=t.currentScript.src;if(!e){var i=t.getElementsByTagName("script");if(i.length)for(var o=i.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=i[o--].src}}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e+"../"})(),(()=>{"use strict";r(79366)})(),(()=>{"use strict";var e=r(98490);let t;function i(e){if(!navigator||"function"!=typeof navigator.share||"function"!=typeof navigator.canShare)return!1;else return navigator.canShare(e)}if("undefined"!=typeof window)r.n(e)()((()=>{const e=document.getElementsByClassName("wp-block-jetpack-sharing-buttons");for(const r of e)r.addEventListener("click",(e=>{const r=e.target.closest("a"),o=r?.dataset?.service;if(r&&r.classList.contains(`share-${o}`))if("mail"!==o)if(e.preventDefault(),e.stopPropagation(),"share"!==o)if("print"!==o){if(t)t.close();if(t=window.open(r.getAttribute("href"),`wpcom${o}`,"menubar=1,resizable=1,width=600,height=400"),t)t.focus()}else window.print();else if(r?.href&&i({url:r.href}))navigator.share({url:r.href});else{const[e]=document.getElementsByClassName("tooltiptext");if(e&&e.style)e.style.display="initial",setTimeout((()=>{e.style.display="none"}),2e3);navigator?.clipboard?.writeText(r.href)}}))}))})()})();