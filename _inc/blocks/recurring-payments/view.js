(()=>{var e={63166:(e,t,o)=>{"use strict";o.d(t,{fc:()=>i});let r="";function n(e){if("https://subscribe.wordpress.com"===e.origin&&e.data){const t=JSON.parse(e.data);if(t&&t.result&&t.result.jwt_token&&(r=t.result.jwt_token,a(r)),t&&"close"===t.action&&r)window.location.reload();else if(t&&"close"===t.action){window.removeEventListener("message",n);document.getElementById("memberships-modal-window").close(),document.body.classList.remove("modal-open")}}}function s(e){e.addEventListener("click",(t=>(t.preventDefault(),function(e){window.scrollTo(0,0),document.body.classList.add("modal-open");const t=document.getElementById("memberships-modal-window");t&&document.body.removeChild(t);const o=document.createElement("dialog");o.setAttribute("id","memberships-modal-window");const r=document.createElement("iframe"),s=document.querySelector('input[name="lang"]').value;r.setAttribute("id","memberships-modal-iframe"),r.innerText="This feature requires inline frames. You have iframes disabled or your browser does not support them.",r.src=e+"&display=alternate&lang="+s+"&jwt_token="+c(),r.setAttribute("frameborder","0"),r.setAttribute("allowtransparency","true"),r.setAttribute("allowfullscreen","true"),o.classList.add("jetpack-memberships-modal"),document.body.appendChild(o),o.appendChild(r),window.addEventListener("message",n,!1),o.showModal(),window.scrollTo(0,0)}(e.getAttribute("href")),this.blur(),!1)))}const i=e=>{Array.prototype.slice.call(document.querySelectorAll(e)).forEach((e=>{if("true"!==e.getAttribute("data-jetpack-memberships-button-initialized")){try{s(e)}catch(e){console.error("Problem setting up Modal",e)}e.setAttribute("data-jetpack-memberships-button-initialized","true")}}))},c=function(){const e=`; ${document.cookie}`.split("; jp-premium-content-session = ");if(2===e.length)return e.pop().split(";").shift()},a=function(e){const t="."+window.location.hostname;document.cookie="jp-premium-content-session="+e+"; expires=0; path=/; domain="+t}},80425:(e,t,o)=>{"object"==typeof window&&window.Jetpack_Block_Assets_Base_Url&&(o.p=window.Jetpack_Block_Assets_Base_Url)},47701:e=>{"use strict";e.exports=window.wp.domReady}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,o),s.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e+"../"})(),(()=>{"use strict";o(80425)})(),(()=>{"use strict";var e=o(47701),t=o.n(e),r=o(63166);const n=[{querySelector:".wp-block-premium-content-container",blockType:"paid-content"},{querySelector:".wp-block-jetpack-payment-buttons",blockType:"payment-button"},{querySelector:".jetpack-subscribe-paywall",blockType:"paywall"},{querySelector:".wp-block-jetpack-donations",blockType:"donations"}];"undefined"!=typeof window&&t()((()=>{(0,r.fc)(".wp-block-jetpack-recurring-payments a"),setTimeout((()=>{const e=new URL(window.location.href);if(document.querySelectorAll(".wp-block-button__link").forEach((e=>{if(e.href){const t=new URL(e.href),o=n.filter((t=>e.closest(t.querySelector)?.contains(e)));1===o.length&&(t.searchParams.set("block_type",o[0].blockType),e.href=t.toString())}})),e.searchParams.has("recurring_payments")&&window.history.replaceState){const t=`recurring-payments-${e.searchParams.get("recurring_payments")}`;e.searchParams.delete("recurring_payments"),window.history.replaceState({},"",e),document.getElementById(t)?.click()}}),100)}))})()})();