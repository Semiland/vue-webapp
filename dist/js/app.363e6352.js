(function(e){function t(t){for(var r,o,s=t[0],i=t[1],c=t[2],u=0,d=[];u<s.length;u++)o=s[u],a[o]&&d.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);y&&y(t);while(d.length)d.shift()();return l.push.apply(l,c||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(l.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},l=[];function o(e){return s.p+"js/"+({contact:"contact"}[e]||e)+"."+{contact:"46449963"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=a[e]=[t,r]});t.push(n[2]=r);var l,i=document.createElement("script");i.charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.src=o(e),l=function(t){i.onerror=i.onload=null,clearTimeout(c);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),l=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+r+": "+l+")");o.type=r,o.request=l,n[1](o)}a[e]=void 0}};var c=setTimeout(function(){l({type:"timeout",target:i})},12e4);i.onerror=i.onload=l,document.head.appendChild(i)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var y=c;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0597":function(e,t,n){},2610:function(e,t,n){},"2ac3":function(e,t,n){},"31c0":function(e,t,n){e.exports=n.p+"img/SemilandLOGO.c7c1c8e7.jpg"},"3bcc":function(e,t,n){"use strict";var r=n("0597"),a=n.n(r);a.a},"49f8":function(e,t,n){var r={"./en.json":"edd4","./fr.json":"f693","./ru.json":"7704"};function a(e){var t=l(e);return n(t)}function l(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(r)},a.resolve=l,e.exports=a,a.id="49f8"},"4d79":function(e,t,n){"use strict";var r=n("2ac3"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=n("dc96"),l=n.n(a),o=n("1881"),s=n.n(o),i=n("f206"),c=n.n(i),u=n("0a63"),y=n.n(u),d=n("bd0c"),f=n.n(d),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"font-sans text-gray-800",attrs:{id:"app"}},[r("header",{staticClass:"border-t-4 border-blue-100 bg-white z-10 absolute w-full shadow-md"},[r("nav",{staticClass:"container mx-auto px-2 flex flex-wrap justify-between items-center py-1"},[r("div",{staticClass:"mb-0 lg:mb-6 xl:mb-0 pt-0"},[r("router-link",{staticClass:"font-bold text-xl flex items-end",attrs:{to:"/"+e.$i18n.locale}},[r("img",{staticClass:"w-16",attrs:{src:n("31c0"),alt:"logo"}})])],1),r("div",{staticClass:"block lg:hidden"},[r("button",{staticClass:"flex items-center px-3 py-2 border rounded border-gray-500 hover:text-gray-600 hover:border-gray-600",on:{click:e.toggleMenu}},[r("svg",{staticClass:"current-color h-3 w-3",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z",fill:"gray"}})])])]),r("ul",{staticClass:"uppercase tracking-wide font-bold w-full block flex-grow lg:flex lg:flex-initial lg:w-auto items-center mt-8 lg:mt-0",class:e.menuOpen?"block":"hidden"},[r("li",{staticClass:"mr-8 mb-6 lg:mb-0"}),r("li",{staticClass:"mr-8 mb-6 lg:mb-0"},[r("router-link",{staticClass:"text-copy-primary hover:text-gray-600",attrs:{to:"/"+e.$i18n.locale+"/home"}},[e._v(e._s(e.$t("nav.home")))])],1),r("li",{staticClass:"mr-8 mb-6 lg:mb-0"},[r("router-link",{staticClass:"text-copy-primary hover:text-gray-600",attrs:{to:"/"+e.$i18n.locale+"/services"}},[e._v(e._s(e.$t("nav.services")))])],1),r("li",{staticClass:"mr-8 mb-6 lg:mb-0"},[r("router-link",{staticClass:"text-copy-primary hover:text-gray-600",attrs:{to:"/"+e.$i18n.locale+"/career"}},[e._v(e._s(e.$t("nav.career")))])],1),r("li",{staticClass:"mr-8 mb-6 lg:mb-0"},[r("router-link",{staticClass:"text-copy-primary hover:text-gray-600",attrs:{to:"/"+e.$i18n.locale+"/contact"}},[e._v(e._s(e.$t("nav.contact")))])],1),r("li",{staticClass:"mr-8 mb-6 lg:mb-0"},[r("router-link",{staticClass:"text-copy-primary hover:text-gray-600",attrs:{to:"/"+e.$i18n.locale+"/blog"}},[e._v(e._s(e.$t("nav.blog")))])],1),r("li",{staticClass:"mr-8 mb-6 lg:mb-0"},[r("modal-login")],1),r("li",{staticClass:"mr-8 mb-6 lg:mb-0"},[r("modal-register")],1),r("li",{staticClass:"mb-4 lg:mb-0 lg:mr-8"},[r("language-switcher")],1),r("li",[r("dropdown-menu")],1)])])]),r("div",{staticClass:"bg-gray-100 min-h-screen pt-20 text-lg"},[r("router-view")],1)])},h=[],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"relative"},[n("button",{staticClass:"flex items-center",attrs:{href:"#"},on:{click:e.toggleVisibility,keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"space",32,t.key,[" ","Spacebar"])?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:(t.preventDefault(),e.toggleVisibility(t))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.hideDropdown(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:t.shiftKey?e.hideDropdown(t):null},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:(t.preventDefault(),e.startArrowKeys(t))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:(t.preventDefault(),e.startArrowKeys(t))}]}},[n("img",{staticClass:"w-8 h-8 rounded-full",attrs:{src:"/avatar.jpg",alt:"avatar"}}),n("svg",{attrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"}},[n("path",{staticClass:"heroicon-ui",attrs:{d:"M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"}})])]),n("transition",{attrs:{name:"dropdown-fade"}},[e.isVisible?n("ul",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:e.hideDropdown,expression:"hideDropdown"}],ref:"dropdown",staticClass:"absolute normal-case font-normal xs:left-0 lg:right-0 bg-white shadow overflow-hidden rounded w-48 border mt-2 py-1 lg:z-20"},[n("li",[n("a",{ref:"account",staticClass:"flex items-center px-3 py-3 hover:bg-gray-200",attrs:{href:"#"},on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:void t.preventDefault()},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.focusNext(!1)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:(t.preventDefault(),e.focusNext(!0))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.hideDropdown(t)}]}},[n("svg",{staticClass:"text-gray-600",attrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"}},[n("path",{staticClass:"heroicon-ui",attrs:{d:"M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"}})]),n("span",{staticClass:"ml-2"},[e._v("Account")])])]),n("li",[n("a",{staticClass:"flex items-center px-3 py-3 hover:bg-gray-200",attrs:{href:"#"},on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.focusNext(!1)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:t.shiftKey?e.focusPrevious(!1):null},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:(t.preventDefault(),e.focusPrevious(!0))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:(t.preventDefault(),e.focusNext(!0))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.hideDropdown(t)}]}},[n("svg",{staticClass:"text-gray-600",attrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"}},[n("path",{staticClass:"heroicon-ui",attrs:{d:"M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-11v2h1a3 3 0 0 1 0 6h-1v1a1 1 0 0 1-2 0v-1H8a1 1 0 0 1 0-2h3v-2h-1a3 3 0 0 1 0-6h1V6a1 1 0 0 1 2 0v1h3a1 1 0 0 1 0 2h-3zm-2 0h-1a1 1 0 1 0 0 2h1V9zm2 6h1a1 1 0 0 0 0-2h-1v2z"}})]),n("span",{staticClass:"ml-2"},[e._v("Billing")])])]),n("li",[n("a",{staticClass:"flex items-center px-3 py-3 hover:bg-gray-200",attrs:{href:"https://google.ca"},on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.focusNext(!1)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:t.shiftKey?e.focusPrevious(!1):null},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:(t.preventDefault(),e.focusPrevious(!0))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:(t.preventDefault(),e.focusNext(!0))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.hideDropdown(t)}]}},[n("svg",{staticClass:"text-gray-600",attrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"}},[n("path",{staticClass:"heroicon-ui",attrs:{d:"M20 22H4a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h4V8c0-1.1.9-2 2-2h4V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2zM14 8h-4v12h4V8zm-6 4H4v8h4v-8zm8-8v16h4V4h-4z"}})]),n("span",{staticClass:"ml-2"},[e._v("Analytics")])])]),n("li",{staticClass:"border-b border-gray-400"},[n("a",{staticClass:"flex items-center px-3 py-3 hover:bg-gray-200",attrs:{href:"#"},on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.focusNext(!1)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:t.shiftKey?e.focusPrevious(!1):null},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:(t.preventDefault(),e.focusPrevious(!0))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:(t.preventDefault(),e.focusNext(!0))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.hideDropdown(t)}]}},[n("svg",{staticClass:"text-gray-600",attrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"}},[n("path",{staticClass:"heroicon-ui",attrs:{d:"M9 4.58V4c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v.58a8 8 0 0 1 1.92 1.11l.5-.29a2 2 0 0 1 2.74.73l1 1.74a2 2 0 0 1-.73 2.73l-.5.29a8.06 8.06 0 0 1 0 2.22l.5.3a2 2 0 0 1 .73 2.72l-1 1.74a2 2 0 0 1-2.73.73l-.5-.3A8 8 0 0 1 15 19.43V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.58a8 8 0 0 1-1.92-1.11l-.5.29a2 2 0 0 1-2.74-.73l-1-1.74a2 2 0 0 1 .73-2.73l.5-.29a8.06 8.06 0 0 1 0-2.22l-.5-.3a2 2 0 0 1-.73-2.72l1-1.74a2 2 0 0 1 2.73-.73l.5.3A8 8 0 0 1 9 4.57zM7.88 7.64l-.54.51-1.77-1.02-1 1.74 1.76 1.01-.17.73a6.02 6.02 0 0 0 0 2.78l.17.73-1.76 1.01 1 1.74 1.77-1.02.54.51a6 6 0 0 0 2.4 1.4l.72.2V20h2v-2.04l.71-.2a6 6 0 0 0 2.41-1.4l.54-.51 1.77 1.02 1-1.74-1.76-1.01.17-.73a6.02 6.02 0 0 0 0-2.78l-.17-.73 1.76-1.01-1-1.74-1.77 1.02-.54-.51a6 6 0 0 0-2.4-1.4l-.72-.2V4h-2v2.04l-.71.2a6 6 0 0 0-2.41 1.4zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}})]),n("span",{staticClass:"ml-2"},[e._v("Settings")])])]),n("li",[n("a",{staticClass:"flex items-center px-3 py-3 hover:bg-gray-200",attrs:{href:"#"},on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.focusNext(!1)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:t.shiftKey?e.focusPrevious(!1):null},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:(t.preventDefault(),e.focusPrevious(!0))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:(t.preventDefault(),e.focusNext(!0))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.hideDropdown(t)}]}},[n("svg",{staticClass:"text-gray-600",attrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"}},[n("path",{staticClass:"heroicon-ui",attrs:{d:"M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM10.59 8.59a1 1 0 1 1-1.42-1.42 4 4 0 1 1 5.66 5.66l-2.12 2.12a1 1 0 1 1-1.42-1.42l2.12-2.12A2 2 0 0 0 10.6 8.6zM12 18a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"}})]),n("span",{staticClass:"ml-2"},[e._v("Help")])])]),n("li",[n("a",{staticClass:"flex items-center px-3 py-3 hover:bg-gray-200",attrs:{href:"#"},on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.focusNext(!1)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:t.shiftKey?e.focusPrevious(!1):null},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:(t.preventDefault(),e.focusPrevious(!0))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:(t.preventDefault(),e.focusNext(!0))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.hideDropdown(t)}]}},[n("svg",{staticClass:"text-gray-600",attrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"}},[n("path",{staticClass:"heroicon-ui",attrs:{d:"M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM10.59 8.59a1 1 0 1 1-1.42-1.42 4 4 0 1 1 5.66 5.66l-2.12 2.12a1 1 0 1 1-1.42-1.42l2.12-2.12A2 2 0 0 0 10.6 8.6zM12 18a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"}})]),n("span",{staticClass:"ml-2"},[e._v("Another")])])]),n("li",[n("a",{staticClass:"flex items-center px-3 py-3 hover:bg-gray-200",attrs:{href:"#"},on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:t.shiftKey?e.focusPrevious(!1):null},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:(t.preventDefault(),e.focusPrevious(!0))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:void t.preventDefault()},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.hideDropdown(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.hideDropdown(t)}]}},[n("svg",{staticClass:"text-gray-600",attrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),n("path",{attrs:{d:"M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}})]),n("span",{staticClass:"ml-2"},[e._v("Logout")])])])]):e._e()])],1)},v=[],k=n("c7db"),w={mixins:[k["mixin"]],data:function(){return{isVisible:!1,focusedIndex:0}},methods:{toggleVisibility:function(){this.isVisible=!this.isVisible},hideDropdown:function(){this.isVisible=!1,this.focusedIndex=0},startArrowKeys:function(){this.isVisible&&this.$refs.dropdown.children[0].children[0].focus()},focusPrevious:function(e){this.focusedIndex=this.focusedIndex-1,e&&this.focusItem()},focusNext:function(e){this.focusedIndex=this.focusedIndex+1,e&&this.focusItem()},focusItem:function(){this.$refs.dropdown.children[this.focusedIndex].children[0].focus()}}},b=w,g=(n("b1ca"),n("2877")),x=Object(g["a"])(b,m,v,!1,null,"87e5eef2",null),K=x.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"relative"},[n("button",{staticClass:"flex items-center",attrs:{href:"#"},on:{click:e.toggleVisibility,keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"space",32,t.key,[" ","Spacebar"])?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:(t.preventDefault(),e.toggleVisibility(t))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.hideDropdown(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:t.shiftKey?e.hideDropdown(t):null},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:(t.preventDefault(),e.startArrowKeys(t))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:(t.preventDefault(),e.startArrowKeys(t))}]}},[n("img",{staticClass:"w-8 h-8",attrs:{src:"/flag_"+e.$i18n.locale+".svg",alt:"flag"}}),n("span",{staticClass:"ml-2"},[e._v(e._s(e.$i18n.locale.toUpperCase()))]),n("svg",{attrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"}},[n("path",{staticClass:"heroicon-ui",attrs:{d:"M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"}})])]),n("transition",{attrs:{name:"dropdown-fade"}},[e.isVisible?n("ul",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:e.hideDropdown,expression:"hideDropdown"}],ref:"dropdown",staticClass:"absolute normal-case z-30 font-normal xs:left-0 lg:right-0 bg-white shadow overflow-hidden rounded w-48 border mt-2 py-1 lg:z-20"},[n("li",[n("a",{ref:"account",staticClass:"flex items-center px-3 py-3 hover:bg-gray-200",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.setLocale("en")},keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:void t.preventDefault()},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.focusNext(!1)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:(t.preventDefault(),e.focusNext(!0))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.hideDropdown(t)}]}},[n("img",{staticClass:"h-8 w-8",attrs:{src:"/flag_en.svg",alt:"english flag"}}),n("span",{staticClass:"ml-2"},[e._v("English")])])]),n("li",[n("a",{staticClass:"flex items-center px-3 py-3 hover:bg-gray-200",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.setLocale("fr")},keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:t.shiftKey?e.focusPrevious(!1):null},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:(t.preventDefault(),e.focusPrevious(!0))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:void t.preventDefault()},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.hideDropdown(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.hideDropdown(t)}]}},[n("img",{staticClass:"h-8 w-8",attrs:{src:"/flag_fr.svg",alt:"english flag"}}),n("span",{staticClass:"ml-2"},[e._v("French")])])]),n("li",[n("a",{staticClass:"flex items-center px-3 py-3 hover:bg-gray-200",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.setLocale("ru")},keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:t.shiftKey?e.focusPrevious(!1):null},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:(t.preventDefault(),e.focusPrevious(!0))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:void t.preventDefault()},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.hideDropdown(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.hideDropdown(t)}]}},[n("img",{staticClass:"h-8 w-8",attrs:{src:"/flag_ru.svg",alt:"russian flag"}}),n("span",{staticClass:"ml-2"},[e._v("Russian")])])])]):e._e()])],1)},_=[],D={mixins:[k["mixin"]],data:function(){return{isVisible:!1,focusedIndex:0}},methods:{toggleVisibility:function(){this.isVisible=!this.isVisible},hideDropdown:function(){this.isVisible=!1,this.focusedIndex=0},startArrowKeys:function(){this.isVisible&&this.$refs.dropdown.children[0].children[0].focus()},focusPrevious:function(e){this.focusedIndex=this.focusedIndex-1,e&&this.focusItem()},focusNext:function(e){this.focusedIndex=this.focusedIndex+1,e&&this.focusItem()},focusItem:function(){this.$refs.dropdown.children[this.focusedIndex].children[0].focus()},setLocale:function(e){this.$i18n.locale=e,this.$router.push({params:{lang:e}}),this.hideDropdown()}}},O=D,E=(n("3bcc"),Object(g["a"])(O,C,_,!1,null,"f8c87e2c",null)),P=E.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"normal-case tracking-normal"},[n("a",{staticClass:"text-copy-primary uppercase hover:text-gray-600",attrs:{href:"/#login"},on:{click:function(t){return t.preventDefault(),e.show(t)}}},[e._v("Login")]),n("modal",{attrs:{name:"modal-login",adaptive:!0,height:440,width:400},on:{opened:e.opened}},[n("div",{staticClass:"px-10 py-8"},[n("h2",{staticClass:"mb-4 uppercase tracking-wide text-xl"},[e._v("Login")]),n("form",{attrs:{action:"#",method:"post"}},[n("div",{staticClass:"form-group mb-4"},[n("label",{staticClass:"block font-normal uppercase tracking-wide text-xs mb-1",attrs:{for:"email"}},[e._v("Email")]),n("input",{ref:"email",staticClass:"border px-4 py-2 w-full rounded bg-gray-200",attrs:{type:"email",id:"email",name:"email"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:t.shiftKey?void t.preventDefault():null}}})]),n("div",{staticClass:"form-group mb-4"},[n("label",{staticClass:"block font-normal uppercase tracking-wide text-xs mb-1",attrs:{for:"password"}},[e._v("Password")]),n("input",{staticClass:"border px-4 py-2 w-full rounded bg-gray-200",attrs:{type:"password",id:"password",name:"password"}})]),n("div",{staticClass:"form-group mb-8"},[n("label",{staticClass:"text-sm font-normal"},[n("input",{staticClass:"mr-2",attrs:{type:"checkbox",name:"remember"}}),e._v("Keep me signed in")])]),n("div",{staticClass:"form-group mb-4"},[n("button",{staticClass:"bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded w-full",attrs:{type:"submit"}},[e._v("Login")])])]),n("div",{staticClass:"text-sm font-normal text-center"},[n("p",[e._v("Don't have an account? "),n("a",{staticClass:"text-blue-600 hover:text-blue-800",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.showRegister(t)},keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:void t.preventDefault()}}},[e._v("Register")])])])])])],1)},A=[],z={methods:{show:function(){this.$modal.show("modal-login")},showRegister:function(){this.$modal.show("modal-register"),this.$modal.hide("modal-login")},opened:function(){this.$refs.email.focus()},hide:function(){this.$modal.hide("modal-login")}}},$=z,T=Object(g["a"])($,S,A,!1,null,null,null),V=T.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"normal-case tracking-normal"},[n("a",{staticClass:"text-copy-primary uppercase hover:text-gray-600",attrs:{href:"/#register"},on:{click:function(t){return t.preventDefault(),e.show(t)}}},[e._v("Register")]),n("modal",{attrs:{name:"modal-register",adaptive:!0,height:460,width:400},on:{opened:e.opened}},[n("div",{staticClass:"px-10 py-8"},[n("h2",{staticClass:"mb-4 uppercase tracking-wide text-xl"},[e._v("Register")]),n("form",{attrs:{action:"#",method:"post"}},[n("div",{staticClass:"form-group mb-4"},[n("label",{staticClass:"block font-normal uppercase tracking-wide text-xs mb-1",attrs:{for:"email"}},[e._v("Email")]),n("input",{ref:"email",staticClass:"border px-4 py-2 w-full rounded bg-gray-200",attrs:{type:"email",id:"email",name:"email"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:t.shiftKey?void t.preventDefault():null}}})]),n("div",{staticClass:"form-group mb-4"},[n("label",{staticClass:"block font-normal uppercase tracking-wide text-xs mb-1",attrs:{for:"password"}},[e._v("Password")]),n("input",{staticClass:"border px-4 py-2 w-full rounded bg-gray-200",attrs:{type:"password",id:"password",name:"password"}})]),n("div",{staticClass:"form-group mb-8"},[n("label",{staticClass:"block font-normal uppercase tracking-wide text-xs mb-1",attrs:{for:"confirm_password"}},[e._v("Confirm Password")]),n("input",{staticClass:"border px-4 py-2 w-full rounded bg-gray-200",attrs:{type:"password",id:"confirm_password",name:"confirm_password"}})]),n("div",{staticClass:"form-group mb-4"},[n("button",{staticClass:"bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded w-full",attrs:{type:"submit"}},[e._v("Register")])])]),n("div",{staticClass:"text-sm font-normal text-center"},[n("p",[e._v("Already have an account? "),n("a",{staticClass:"text-blue-600 hover:text-blue-800",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.showLogin(t)},keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:void t.preventDefault()}}},[e._v("Login")])])])])])],1)},j=[],M={methods:{show:function(){this.$modal.show("modal-register")},showLogin:function(){this.$modal.show("modal-login"),this.$modal.hide("modal-register")},opened:function(){this.$refs.email.focus()},hide:function(){this.$modal.hide("modal-register")}}},L=M,U=Object(g["a"])(L,I,j,!1,null,null,null),N=U.exports,H={name:"app",components:{DropdownMenu:K,ModalLogin:V,ModalRegister:N,LanguageSwitcher:P},data:function(){return{menuOpen:!1}},methods:{toggleMenu:function(){this.menuOpen=!this.menuOpen}}},B=H,R=(n("4d79"),Object(g["a"])(B,p,h,!1,null,null,null)),q=R.exports,Q=n("8c4f"),W=(n("4917"),n("ac6a"),n("a925"));function F(){var e=n("49f8"),t={};return e.keys().forEach(function(n){var r=n.match(/([A-Za-z0-9-_]+)\./i);if(r&&r.length>1){var a=r[1];t[a]=e(n)}}),t}r["default"].use(W["a"]);var J=new W["a"]({locale:"en",fallbackLocale:"en",messages:F()});r["default"].use(Q["a"]);var G=new Q["a"]({mode:"history",base:"/",routes:[{path:"/",redirect:"/".concat(J.locale,"/home")},{path:"/:lang",component:{render:function(e){return e("router-view")}},children:[{path:"home",name:"home",component:function(){return n.e("contact").then(n.bind(null,"bb51"))}},{path:"services",name:"services",component:function(){return n.e("contact").then(n.bind(null,"f23e"))}},{path:"career",name:"career",component:function(){return n.e("contact").then(n.bind(null,"6990"))}},{path:"contact",name:"contact",component:function(){return n.e("contact").then(n.bind(null,"b8fa"))}},{path:"blog",name:"blog",component:function(){return n.e("contact").then(n.bind(null,"fd3f"))}},{path:"220658PDE",name:"220658PDE",component:function(){return n.e("contact").then(n.bind(null,"21b9"))}},{path:"220758PDE",name:"220758PDE",component:function(){return n.e("contact").then(n.bind(null,"b105"))}},{path:"220858PDE",name:"220858PDE",component:function(){return n.e("contact").then(n.bind(null,"fad2"))}},{path:"220958PDE",name:"220958PDE",component:function(){return n.e("contact").then(n.bind(null,"6f67"))}},{path:"221058PDE",name:"221058PDE",component:function(){return n.e("contact").then(n.bind(null,"4c55"))}},{path:"222058PDE",name:"222058PDE",component:function(){return n.e("contact").then(n.bind(null,"27fd"))}},{path:"223058PDE",name:"223058PDE",component:function(){return n.e("contact").then(n.bind(null,"e19c"))}},{path:"224058PDE",name:"224058PDE",component:function(){return n.e("contact").then(n.bind(null,"da42"))}},{path:"225058PDE",name:"225058PDE",component:function(){return n.e("contact").then(n.bind(null,"327e"))}}]}]}),Z=n("89fb"),X=n("ecee"),Y=n("c074"),ee=n("ad3d");X["c"].add(Y["b"]),X["c"].add(Y["a"]),r["default"].component("font-awesome-icon",ee["a"]),r["default"].use(c.a),r["default"].use(l.a),r["default"].use(s.a),r["default"].use(Z["a"]),r["default"].use(y.a),r["default"].use(f.a,{ak:"DD279b2a90afdf0ae7a3796787a0742e"}),r["default"].config.productionTip=!1,G.beforeEach(function(e,t,n){var r=e.params.lang;r||(r="en"),J.locale=r,n()}),new r["default"]({router:G,i18n:J,render:function(e){return e(q)}}).$mount("#app")},7704:function(e){e.exports={message:"bonjour i18n !!",nav:{home:"ruHome",services:"ruServices",career:"ruCareer",contact:"ruContact",blog:"ruBlog",careerresearch:"Research Scientist"},about:{title:"frAbout",content:"We offer a diverse, flexible and highly supportive working environment that allows you to explore your interests and promotes professional integrity, innovation and teamwork. Please email your latest CV to us:  <a href='#' class='text-blue-500'>career@semiland.com</a> ."}}},"89fb":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"border-box-semi"},[n("div",{staticClass:"slider-wrapper"},[e._m(0),n("div",{staticClass:"buttons"},[n("button",{attrs:{id:"prev"},on:{click:e.btnClickSlidPrev}},[n("font-awesome-icon",{attrs:{icon:"arrow-circle-left"}})],1),n("button",{attrs:{id:"next"},on:{click:e.btnClickSlidNx}},[n("font-awesome-icon",{attrs:{icon:"arrow-circle-right"}})],1)])])])])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"slider"},[n("div",{staticClass:"slide current"},[n("div",{staticClass:"content"},[n("h1",[e._v("Slide One")]),n("p",[e._v("\r\n            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit hic\r\n            maxime, voluptatibus labore doloremque vero!\r\n          ")])])]),n("div",{staticClass:"slide"},[n("div",{staticClass:"content"},[n("h1",[e._v("Slide Two")]),n("p",[e._v("\r\n            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit hic\r\n            maxime, voluptatibus labore doloremque vero!\r\n          ")])])]),n("div",{staticClass:"slide"},[n("div",{staticClass:"content"},[n("h1",[e._v("Slide Three")]),n("p",[e._v("\r\n            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit hic\r\n            maxime, voluptatibus labore doloremque vero!\r\n          ")])])])])}],l=n("5118"),o={components:{},data:function(){return{activePlan:"",slides:document.querySelectorAll(".slide"),current:document.querySelector(".current"),intervalTime:5e3,sliderInterval:0,auto:!0,counter:0}},computed:{slidrQuerySel:function(){var e={selcOneCurr:document.querySelector(".current")};return e},slidrQuerySlide:function(){var e={selcOneItm:document.querySelectorAll(".slide")};return e}},methods:{nextSld:function(){var e=document.querySelector(".current"),t=this.slidrQuerySlide.selcOneItm;e.classList.remove("current"),e.nextElementSibling?e.nextElementSibling.classList.add("current"):t[0].classList.add("current")},prevSld:function(){var e=document.querySelector(".current"),t=this.slidrQuerySlide.selcOneItm;e.classList.remove("current"),e.previousElementSibling?e.previousElementSibling.classList.add("current"):t[t.length-1].classList.add("current")},btnClickSlidNx:function(){this.nextSld(),Object(l["clearInterval"])(this.slideInterval),this.slideInterval=Object(l["setInterval"])(this.nextSlide,this.intervalTime)},btnClickSlidPrev:function(){this.prevSld(),Object(l["clearInterval"])(this.slideInterval),this.slideInterval=Object(l["setInterval"])(this.nextSlide,this.intervalTime)}}},s=o,i=n("2877"),c=Object(i["a"])(s,r,a,!1,null,null,null);t["a"]=c.exports},b1ca:function(e,t,n){"use strict";var r=n("2610"),a=n.n(r);a.a},edd4:function(e){e.exports={message:"bonjour i18n !!",nav:{home:"Home",services:"Services",career:"Career",contact:"Contact",blog:"Blog",careerresearch:"Research Scientist"},about:{title:"frAbout",content:"We offer a diverse, flexible and highly supportive working environment that allows you to explore your interests and promotes professional integrity, innovation and teamwork. Please email your latest CV to us:  <a href='#' class='text-blue-500'>career@semiland.com</a> ."}}},f693:function(e){e.exports={message:"bonjour i18n !!",nav:{home:"frHome",services:"frServices",career:"frCareer",contact:"frContact",blog:"frBlog",careerresearch:"Research Scientist"},about:{title:"frAbout",content:"We offer a diverse, flexible and highly supportive working environment that allows you to explore your interests and promotes professional integrity, innovation and teamwork. Please email your latest CV to us:  <a href='#' class='text-blue-500'>career@semiland.com</a> ."}}}});
//# sourceMappingURL=app.363e6352.js.map