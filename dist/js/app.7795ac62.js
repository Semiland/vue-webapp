(function(e){function t(t){for(var r,c,i=t[0],l=t[1],s=t[2],u=0,m=[];u<i.length;u++)c=i[u],a[c]&&m.push(a[c][0]),a[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(t);while(m.length)m.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var l=n[c];0!==a[l]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function c(e){return i.p+"js/"+({contact:"contact"}[e]||e)+"."+{contact:"4079306b"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=a[e]=[t,r]});t.push(n[2]=r);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e),o=function(t){l.onerror=l.onload=null,clearTimeout(s);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");c.type=r,c.request=o,n[1](c)}a[e]=void 0}};var s=setTimeout(function(){o({type:"timeout",target:l})},12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2ac3":function(e,t,n){},"31c0":function(e,t,n){e.exports=n.p+"img/SemilandLOGO.c7c1c8e7.jpg"},"49f8":function(e,t,n){var r={"./en.json":"edd4","./fr.json":"f693","./ru.json":"7704"};function a(e){var t=o(e);return n(t)}function o(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="49f8"},"4d79":function(e,t,n){"use strict";var r=n("2ac3"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=n("dc96"),o=n.n(a),c=n("1881"),i=n.n(c),l=n("f206"),s=n.n(l),u=n("0a63"),d=n.n(u),m=n("bd0c"),f=n.n(m),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"font-sans text-gray-800",attrs:{id:"app"}},[r("header",{staticClass:"border-t-4 border-blue-100 bg-white z-10 absolute w-full shadow-md"},[r("nav",{staticClass:"container mx-auto px-2 flex flex-wrap justify-between items-center py-1"},[r("div",{staticClass:"mb-0 lg:mb-6 xl:mb-0 pt-0"},[r("router-link",{staticClass:"font-bold text-xl flex items-end",attrs:{to:"/"+e.$i18n.locale}},[r("img",{staticClass:"w-16",attrs:{src:n("31c0"),alt:"logo"}})])],1),r("div",{staticClass:"block lg:hidden"},[r("button",{staticClass:"flex items-center px-3 py-2 border rounded border-gray-500 hover:text-gray-600 hover:border-gray-600",on:{click:e.toggleMenu}},[r("svg",{staticClass:"current-color h-3 w-3",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z",fill:"gray"}})])])]),r("ul",{staticClass:"uppercase tracking-wide font-bold w-full block flex-grow lg:flex lg:flex-initial lg:w-auto items-center mt-8 lg:mt-0",class:e.menuOpen?"block":"hidden"},[r("li",{staticClass:"mr-8 mb-6 lg:mb-0"}),r("li",{staticClass:"mr-8 mb-6 lg:mb-0"},[r("router-link",{staticClass:"text-copy-primary hover:text-gray-600",attrs:{to:"/"+e.$i18n.locale+"/home"}},[e._v(e._s(e.$t("nav.home")))])],1),r("li",{staticClass:"mr-8 mb-6 lg:mb-0"},[r("router-link",{staticClass:"text-copy-primary hover:text-gray-600",attrs:{to:"/"+e.$i18n.locale+"/services"}},[e._v(e._s(e.$t("nav.services")))])],1),r("li",{staticClass:"mr-8 mb-6 lg:mb-0"},[r("router-link",{staticClass:"text-copy-primary hover:text-gray-600",attrs:{to:"/"+e.$i18n.locale+"/career"}},[e._v(e._s(e.$t("nav.career")))])],1),r("li",{staticClass:"mr-8 mb-6 lg:mb-0"},[r("router-link",{staticClass:"text-copy-primary hover:text-gray-600",attrs:{to:"/"+e.$i18n.locale+"/contact"}},[e._v(e._s(e.$t("nav.contact")))])],1),r("li",{staticClass:"mr-8 mb-6 lg:mb-0"},[r("router-link",{staticClass:"text-copy-primary hover:text-gray-600",attrs:{to:"/"+e.$i18n.locale+"/blog"}},[e._v(e._s(e.$t("nav.blog")))])],1),r("li",{staticClass:"mb-4 lg:mb-0 lg:mr-8"})])])]),r("div",{staticClass:"bg-gray-100 min-h-screen pt-20 text-lg"},[r("router-view")],1)])},h=[],b={name:"app",components:{},data:function(){return{menuOpen:!1}},methods:{toggleMenu:function(){this.menuOpen=!this.menuOpen}}},v=b,g=(n("4d79"),n("2877")),y=n("b8b0"),x=n.n(y),w=Object(g["a"])(v,p,h,!1,null,null,null);"function"===typeof x.a&&x()(w);var C=w.exports,S=n("8c4f"),k=(n("4917"),n("ac6a"),n("a925"));function P(){var e=n("49f8"),t={};return e.keys().forEach(function(n){var r=n.match(/([A-Za-z0-9-_]+)\./i);if(r&&r.length>1){var a=r[1];t[a]=e(n)}}),t}r["a"].use(k["a"]);var E=new k["a"]({locale:"en",fallbackLocale:"en",messages:P()});r["a"].use(S["a"]);var _=new S["a"]({mode:"history",base:"/",routes:[{path:"/",redirect:"/".concat(E.locale,"/home")},{path:"/:lang",component:{render:function(e){return e("router-view")}},children:[{path:"home",name:"home",component:function(){return n.e("contact").then(n.bind(null,"bb51"))}},{path:"services",name:"services",component:function(){return n.e("contact").then(n.bind(null,"f23e"))}},{path:"career",name:"career",component:function(){return n.e("contact").then(n.bind(null,"6990"))}},{path:"contact",name:"contact",component:function(){return n.e("contact").then(n.bind(null,"b8fa"))}},{path:"blog",name:"blog",component:function(){return n.e("contact").then(n.bind(null,"fd3f"))}},{path:"220658PDE",name:"220658PDE",component:function(){return n.e("contact").then(n.bind(null,"21b9"))}},{path:"220758PDE",name:"220758PDE",component:function(){return n.e("contact").then(n.bind(null,"b105"))}},{path:"220858PDE",name:"220858PDE",component:function(){return n.e("contact").then(n.bind(null,"fad2"))}},{path:"220958PDE",name:"220958PDE",component:function(){return n.e("contact").then(n.bind(null,"6f67"))}},{path:"221058PDE",name:"221058PDE",component:function(){return n.e("contact").then(n.bind(null,"4c55"))}},{path:"222058PDE",name:"222058PDE",component:function(){return n.e("contact").then(n.bind(null,"27fd"))}},{path:"223058PDE",name:"223058PDE",component:function(){return n.e("contact").then(n.bind(null,"e19c"))}},{path:"224058PDE",name:"224058PDE",component:function(){return n.e("contact").then(n.bind(null,"da42"))}},{path:"225058PDE",name:"225058PDE",component:function(){return n.e("contact").then(n.bind(null,"327e"))}},{path:"324656-bl-1",name:"324656-bl-1",component:function(){return n.e("contact").then(n.bind(null,"897f"))}},{path:"324656-bl-2",name:"324656-bl-2",component:function(){return n.e("contact").then(n.bind(null,"189d"))}},{path:"324656-bl-3",name:"324656-bl-3",component:function(){return n.e("contact").then(n.bind(null,"107d"))}},{path:"324656-bl-4",name:"324656-bl-4",component:function(){return n.e("contact").then(n.bind(null,"6c43"))}},{path:"324656-bl-5",name:"324656-bl-5",component:function(){return n.e("contact").then(n.bind(null,"7312"))}},{path:"324656-bl-6",name:"324656-bl-6",component:function(){return n.e("contact").then(n.bind(null,"3337"))}},{path:"324656-bl-7",name:"324656-bl-7",component:function(){return n.e("contact").then(n.bind(null,"374d"))}}]}],data:function(){return{}},scrollBehavior:function(e,t,n){return e.hash?{selector:e.hash}:n||{x:0,y:0}},methods:{}}),O=n("89fb"),D=n("ecee"),j=n("c074"),$=n("ad3d");D["c"].add(j["b"]),D["c"].add(j["a"]),r["a"].component("font-awesome-icon",$["a"]),r["a"].use(s.a),r["a"].use(o.a),r["a"].use(i.a),r["a"].use(O["a"]),r["a"].use(d.a),r["a"].use(f.a,{ak:"DD279b2a90afdf0ae7a3796787a0742e"}),r["a"].config.productionTip=!1,_.beforeEach(function(e,t,n){var r=e.params.lang;r||(r="en"),E.locale=r,n()}),new r["a"]({router:_,i18n:E,render:function(e){return e(C)}}).$mount("#app")},7704:function(e){e.exports={message:"bonjour i18n !!",nav:{home:"ruHome",services:"ruServices",career:"ruCareer",contact:"ruContact",blog:"ruBlog",careerresearch:"Research Scientist"},about:{title:"frAbout",content:"We offer a diverse, flexible and highly supportive working environment that allows you to explore your interests and promotes professional integrity, innovation and teamwork. Please email your latest CV to us:  <a href='#' class='text-blue-500'>career@semiland.com</a> ."}}},"89fb":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"border-box-semi"},[n("div",{staticClass:"slider-wrapper"},[e._m(0),n("div",{staticClass:"buttons"},[n("button",{attrs:{id:"prev"},on:{click:e.btnClickSlidPrev}},[n("font-awesome-icon",{attrs:{icon:"arrow-circle-left"}})],1),n("button",{attrs:{id:"next"},on:{click:e.btnClickSlidNx}},[n("font-awesome-icon",{attrs:{icon:"arrow-circle-right"}})],1)])])])])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"slider"},[n("div",{staticClass:"slide current"},[n("div",{staticClass:"content"},[n("h1",[e._v("Semiland")]),n("p",[e._v("\r\n            Power the World with our technology!\r\n          ")])])]),n("div",{staticClass:"slide"},[n("div",{staticClass:"content"},[n("h1"),n("p",[e._v("\r\n            Semiland is headquarted in Yangzhong, China.\r\n          ")])])]),n("div",{staticClass:"slide"},[n("div",{staticClass:"content"},[n("h1"),n("p",[e._v("\r\n            Semiland R&D center is located in Jubao park.\r\n          ")])])]),n("div",{staticClass:"slide"},[n("div",{staticClass:"content"},[n("h1"),n("p",[e._v("\r\n            Semiland, expert in making advanced WBG power modules!\r\n          ")])])])])}],o=(n("c5f6"),{components:{},data:function(){return{activePlan:"",slides:document.querySelectorAll(".slide"),current:document.querySelector(".current"),intervalTime:5e3,sliderInterval:0,auto:!0,counter:0}},props:{interval:{type:Number,default:0}},computed:{slidrQuerySel:function(){var e={selcOneCurr:document.querySelector(".current")};return e},slidrQuerySlide:function(){var e={selcOneItm:document.querySelectorAll(".slide")};return e}},methods:{nextSld:function(){var e=document.querySelector(".current"),t=this.slidrQuerySlide.selcOneItm;e.classList.remove("current"),e.nextElementSibling?e.nextElementSibling.classList.add("current"):t[0].classList.add("current")},prevSld:function(){var e=document.querySelector(".current"),t=this.slidrQuerySlide.selcOneItm;e.classList.remove("current"),e.previousElementSibling?e.previousElementSibling.classList.add("current"):t[t.length-1].classList.add("current")},btnClickSlidNx:function(){this.nextSld()},btnClickSlidPrev:function(){this.prevSld()}}}),c=o,i=n("2877"),l=Object(i["a"])(c,r,a,!1,null,null,null);t["a"]=l.exports},b8b0:function(e,t){},edd4:function(e){e.exports={message:"bonjour i18n !!",nav:{home:"Home",services:"Services",career:"Career",contact:"Contact",blog:"Blog",careerresearch:"Research Scientist"},about:{title:"frAbout",content:"We offer a diverse, flexible and highly supportive working environment that allows you to explore your interests and promotes professional integrity, innovation and teamwork. Please email your latest CV to us:  <a href='#' class='text-blue-500'>career@semiland.com</a> ."}}},f693:function(e){e.exports={message:"bonjour i18n !!",nav:{home:"frHome",services:"frServices",career:"frCareer",contact:"frContact",blog:"frBlog",careerresearch:"Research Scientist"},about:{title:"frAbout",content:"We offer a diverse, flexible and highly supportive working environment that allows you to explore your interests and promotes professional integrity, innovation and teamwork. Please email your latest CV to us:  <a href='#' class='text-blue-500'>career@semiland.com</a> ."}}}});
//# sourceMappingURL=app.7795ac62.js.map