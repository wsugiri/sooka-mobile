(function(e){function n(n){for(var r,o,u=n[0],c=n[1],f=n[2],s=0,l=[];s<u.length;s++)o=u[s],a[o]&&l.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(n);while(l.length)l.shift()();return i.push.apply(i,f||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,o=1;o<t.length;o++){var u=t[o];0!==a[u]&&(r=!1)}r&&(i.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},o={app:0},a={app:0},i=[];function u(e){return c.p+"js/"+({}[e]||e)+"."+{"1981fd63":"86b7d411","2d0e2517":"4909f7d6","2d2178fa":"59738259","4b467f1d":"705ce026","4fe2ef3b":"88b8cc45","85bc3674":"40081645"}[e]+".js"}function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t={"1981fd63":1,"4fe2ef3b":1,"85bc3674":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise(function(n,t){for(var r="css/"+({}[e]||e)+"."+{"1981fd63":"a9f08588","2d0e2517":"31d6cfe0","2d2178fa":"31d6cfe0","4b467f1d":"31d6cfe0","4fe2ef3b":"a7a37ecc","85bc3674":"4798b6d9"}[e]+".css",o=c.p+r,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var u=a[i],f=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(f===r||f===o))return n()}var s=document.getElementsByTagName("style");for(i=0;i<s.length;i++){u=s[i],f=u.getAttribute("data-href");if(f===r||f===o)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var r=n&&n.target&&n.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.request=r,t(a)},l.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(l)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)n.push(r[2]);else{var i=new Promise(function(n,t){r=a[e]=[n,t]});n.push(r[2]=i);var f,s=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(e),f=function(n){l.onerror=l.onload=null,clearTimeout(d);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,t[1](i)}a[e]=void 0}};var d=setTimeout(function(){f({type:"timeout",target:l})},12e4);l.onerror=l.onload=f,s.appendChild(l)}return Promise.all(n)},c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="",c.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],s=f.push.bind(f);f.push=n,f=f.slice();for(var l=0;l<f.length;l++)n(f[l]);var d=s;i.push([0,"vendor"]),t()})({0:function(e,n,t){e.exports=t("2f39")},"034f":function(e,n,t){"use strict";var r=t("fb1c"),o=t.n(r);o.a},"1e5d":function(e,n,t){},"2f39":function(e,n,t){"use strict";t.r(n);t("ac6a"),t("a114"),t("d14b"),t("df75"),t("1e5d"),t("7e6d");var r=t("2b0e"),o=t("e84f"),a=t("7051"),i=t("2040"),u=t("cf12"),c=t("46a9"),f=t("32a1"),s=t("f30c"),l=t("ce67"),d=t("482e"),p=t("52b5"),h=t("1180"),b=t("1e55"),v=t("506f"),g=t("b8d9"),m=t("7d43"),y=t("e57e"),w=t("91c8"),Q=t("79e9"),P=t("5d8b"),S=t("6dd4"),j=t("1526"),E=t("133b");r["a"].use(o["a"],{config:{},components:{QLayout:a["a"],QLayoutHeader:i["a"],QLayoutDrawer:u["a"],QPageContainer:c["a"],QPage:f["a"],QToolbar:s["a"],QToolbarTitle:l["a"],QBtn:d["a"],QIcon:p["a"],QList:h["a"],QListHeader:b["a"],QItem:v["a"],QItemMain:g["a"],QItemSide:m["a"],QChipsInput:y["a"],QItemSeparator:w["a"],QField:Q["a"],QInput:P["a"],QVideo:S["a"]},directives:{Ripple:j["a"]},plugins:{Notify:E["a"]}});var O=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},k=[];O._withStripped=!0;var x={name:"App"},A=x,T=(t("034f"),t("2877")),_=Object(T["a"])(A,O,k,!1,null,null,null);_.options.__file="App.vue";var L=_.exports,C=t("2f62"),N={},I=t("a709"),M=t("8d6f"),B=t("5781"),q={namespaced:!0,state:N,getters:I,mutations:M,actions:B};r["a"].use(C["a"]);var V=function(){var e=new C["a"].Store({modules:{example:q}});return e},$=t("8c4f"),D=[{path:"/",component:function(){return t.e("85bc3674").then(t.bind(null,"6005"))},children:[{path:"",component:function(){return t.e("4fe2ef3b").then(t.bind(null,"9261"))}},{path:"login",component:function(){return t.e("2d2178fa").then(t.bind(null,"c6f7"))}},{path:"camera",component:function(){return t.e("1981fd63").then(t.bind(null,"1449"))}},{path:"about",component:function(){return t.e("2d0e2517").then(t.bind(null,"7dd8"))}}]}];D.push({path:"*",component:function(){return t.e("4b467f1d").then(t.bind(null,"c634"))}});var H=D;r["a"].use($["a"]);var J=function(){var e=new $["a"]({scrollBehavior:function(){return{y:0}},routes:H,mode:"hash",base:""});return e},F=function(){var e="function"===typeof V?V():V,n="function"===typeof J?J({store:e}):J;e.$router=n;var t={el:"#q-app",router:n,store:e,render:function(e){return e(L)}};return{app:t,store:e,router:n}},R=t("9483");Object(R["a"])("service-worker.js",{ready:function(){console.log("App is being served from cache by a service worker.")},registered:function(e){console.log("Service worker has been registered.")},cached:function(e){console.log("Content has been cached for offline use.")},updatefound:function(e){console.log("New content is downloading.")},updated:function(e){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var z=t("a925"),G={failed:"Action failed",success:"Action was successful"},K={"en-us":G},U=function(e){var n=e.app,t=e.Vue;t.use(z["a"]),n.i18n=new z["a"]({locale:"en-us",fallbackLocale:"en-us",messages:K})},W=t("bc3a"),X=t.n(W),Y=function(e){var n=e.Vue;n.prototype.$axios=X.a},Z=t("fe3c"),ee=t.n(Z),ne=F(),te=ne.app,re=ne.store,oe=ne.router;/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&document.addEventListener("DOMContentLoaded",function(){ee.a.attach(document.body)},!1),[U,Y].forEach(function(e){e({app:te,router:oe,store:re,Vue:r["a"],ssrContext:null})}),new r["a"](te)},5781:function(e,n){},"7e6d":function(e,n,t){},"8d6f":function(e,n){},a709:function(e,n){},fb1c:function(e,n,t){}});