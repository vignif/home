(self.webpackChunk_vignif_home=self.webpackChunk_vignif_home||[]).push([[159],{9662:function(t,n,r){var e=r(614),o=r(6330),i=TypeError;t.exports=function(t){if(e(t))return t;throw i(o(t)+" is not a function")}},1223:function(t,n,r){var e=r(5112),o=r(30),i=r(3070).f,u=e("unscopables"),c=Array.prototype;null==c[u]&&i(c,u,{configurable:!0,value:o(null)}),t.exports=function(t){c[u][t]=!0}},9670:function(t,n,r){var e=r(111),o=String,i=TypeError;t.exports=function(t){if(e(t))return t;throw i(o(t)+" is not an object")}},1318:function(t,n,r){var e=r(5656),o=r(1400),i=r(6244),u=function(t){return function(n,r,u){var c,a=e(n),f=i(a),s=o(u,f);if(t&&r!=r){for(;f>s;)if((c=a[s++])!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},4326:function(t,n,r){var e=r(1702),o=e({}.toString),i=e("".slice);t.exports=function(t){return i(o(t),8,-1)}},3072:function(t,n,r){var e=r(7854),o=Object.defineProperty;t.exports=function(t,n){try{o(e,t,{value:n,configurable:!0,writable:!0})}catch(r){e[t]=n}return n}},9781:function(t,n,r){var e=r(7293);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(t){var n="object"==typeof document&&document.all,r=void 0===n&&void 0!==n;t.exports={all:n,IS_HTMLDDA:r}},317:function(t,n,r){var e=r(7854),o=r(111),i=e.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},8113:function(t,n,r){var e=r(5005);t.exports=e("navigator","userAgent")||""},7392:function(t,n,r){var e,o,i=r(7854),u=r(8113),c=i.process,a=i.Deno,f=c&&c.versions||a&&a.version,s=f&&f.v8;s&&(o=(e=s.split("."))[0]>0&&e[0]<4?1:+(e[0]+e[1])),!o&&u&&(!(e=u.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=u.match(/Chrome\/(\d+)/))&&(o=+e[1]),t.exports=o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},7293:function(t){t.exports=function(t){try{return!!t()}catch(n){return!0}}},4374:function(t,n,r){var e=r(7293);t.exports=!e((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},1460:function(t,n,r){var e=r(4374),o=Function.prototype.call;t.exports=e?o.bind(o):function(){return o.apply(o,arguments)}},1702:function(t,n,r){var e=r(4374),o=Function.prototype,i=o.call,u=e&&o.bind.bind(i,i);t.exports=e?u:function(t){return function(){return i.apply(t,arguments)}}},5005:function(t,n,r){var e=r(7854),o=r(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,n){return arguments.length<2?i(e[t]):e[t]&&e[t][n]}},8173:function(t,n,r){var e=r(9662),o=r(8554);t.exports=function(t,n){var r=t[n];return o(r)?void 0:e(r)}},7854:function(t,n,r){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},2597:function(t,n,r){var e=r(1702),o=r(7908),i=e({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,n){return i(o(t),n)}},3501:function(t){t.exports={}},490:function(t,n,r){var e=r(5005);t.exports=e("document","documentElement")},4664:function(t,n,r){var e=r(9781),o=r(7293),i=r(317);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,n,r){var e=r(1702),o=r(7293),i=r(4326),u=Object,c=e("".split);t.exports=o((function(){return!u("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?c(t,""):u(t)}:u},614:function(t,n,r){var e=r(4154),o=e.all;t.exports=e.IS_HTMLDDA?function(t){return"function"==typeof t||t===o}:function(t){return"function"==typeof t}},8554:function(t){t.exports=function(t){return null==t}},111:function(t,n,r){var e=r(614),o=r(4154),i=o.all;t.exports=o.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:e(t)||t===i}:function(t){return"object"==typeof t?null!==t:e(t)}},1913:function(t){t.exports=!1},2190:function(t,n,r){var e=r(5005),o=r(614),i=r(7976),u=r(3307),c=Object;t.exports=u?function(t){return"symbol"==typeof t}:function(t){var n=e("Symbol");return o(n)&&i(n.prototype,c(t))}},6244:function(t,n,r){var e=r(7466);t.exports=function(t){return e(t.length)}},8631:function(t){var n=Math.ceil,r=Math.floor;t.exports=Math.trunc||function(t){var e=+t;return(e>0?r:n)(e)}},30:function(t,n,r){var e,o=r(9670),i=r(6048),u=r(748),c=r(3501),a=r(490),f=r(317),s=r(6200),p="prototype",l="script",v=s("IE_PROTO"),b=function(){},h=function(t){return"<"+l+">"+t+"</"+l+">"},y=function(t){t.write(h("")),t.close();var n=t.parentWindow.Object;return t=null,n},x=function(){try{e=new ActiveXObject("htmlfile")}catch(i){}var t,n,r;x="undefined"!=typeof document?document.domain&&e?y(e):(n=f("iframe"),r="java"+l+":",n.style.display="none",a.appendChild(n),n.src=String(r),(t=n.contentWindow.document).open(),t.write(h("document.F=Object")),t.close(),t.F):y(e);for(var o=u.length;o--;)delete x[p][u[o]];return x()};c[v]=!0,t.exports=Object.create||function(t,n){var r;return null!==t?(b[p]=o(t),r=new b,b[p]=null,r[v]=t):r=x(),void 0===n?r:i.f(r,n)}},6048:function(t,n,r){var e=r(9781),o=r(3353),i=r(3070),u=r(9670),c=r(5656),a=r(1956);n.f=e&&!o?Object.defineProperties:function(t,n){u(t);for(var r,e=c(n),o=a(n),f=o.length,s=0;f>s;)i.f(t,r=o[s++],e[r]);return t}},3070:function(t,n,r){var e=r(9781),o=r(4664),i=r(3353),u=r(9670),c=r(2685),a=TypeError,f=Object.defineProperty,s=Object.getOwnPropertyDescriptor,p="enumerable",l="configurable",v="writable";n.f=e?i?function(t,n,r){if(u(t),n=c(n),u(r),"function"==typeof t&&"prototype"===n&&"value"in r&&v in r&&!r[v]){var e=s(t,n);e&&e[v]&&(t[n]=r.value,r={configurable:l in r?r[l]:e[l],enumerable:p in r?r[p]:e[p],writable:!1})}return f(t,n,r)}:f:function(t,n,r){if(u(t),n=c(n),u(r),o)try{return f(t,n,r)}catch(e){}if("get"in r||"set"in r)throw a("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},7976:function(t,n,r){var e=r(1702);t.exports=e({}.isPrototypeOf)},6324:function(t,n,r){var e=r(1702),o=r(2597),i=r(5656),u=r(1318).indexOf,c=r(3501),a=e([].push);t.exports=function(t,n){var r,e=i(t),f=0,s=[];for(r in e)!o(c,r)&&o(e,r)&&a(s,r);for(;n.length>f;)o(e,r=n[f++])&&(~u(s,r)||a(s,r));return s}},1956:function(t,n,r){var e=r(6324),o=r(748);t.exports=Object.keys||function(t){return e(t,o)}},2140:function(t,n,r){var e=r(1460),o=r(614),i=r(111),u=TypeError;t.exports=function(t,n){var r,c;if("string"===n&&o(r=t.toString)&&!i(c=e(r,t)))return c;if(o(r=t.valueOf)&&!i(c=e(r,t)))return c;if("string"!==n&&o(r=t.toString)&&!i(c=e(r,t)))return c;throw u("Can't convert object to primitive value")}},4488:function(t,n,r){var e=r(8554),o=TypeError;t.exports=function(t){if(e(t))throw o("Can't call method on "+t);return t}},6200:function(t,n,r){var e=r(2309),o=r(9711),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,n,r){var e=r(7854),o=r(3072),i="__core-js_shared__",u=e[i]||o(i,{});t.exports=u},2309:function(t,n,r){var e=r(1913),o=r(5465);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.27.1",mode:e?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.27.1/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(t,n,r){var e=r(7392),o=r(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&e&&e<41}))},1400:function(t,n,r){var e=r(9303),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},5656:function(t,n,r){var e=r(8361),o=r(4488);t.exports=function(t){return e(o(t))}},9303:function(t,n,r){var e=r(8631);t.exports=function(t){var n=+t;return n!=n||0===n?0:e(n)}},7466:function(t,n,r){var e=r(9303),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},7908:function(t,n,r){var e=r(4488),o=Object;t.exports=function(t){return o(e(t))}},7593:function(t,n,r){var e=r(1460),o=r(111),i=r(2190),u=r(8173),c=r(2140),a=r(5112),f=TypeError,s=a("toPrimitive");t.exports=function(t,n){if(!o(t)||i(t))return t;var r,a=u(t,s);if(a){if(void 0===n&&(n="default"),r=e(a,t,n),!o(r)||i(r))return r;throw f("Can't convert object to primitive value")}return void 0===n&&(n="number"),c(t,n)}},2685:function(t,n,r){var e=r(7593),o=r(2190);t.exports=function(t){var n=e(t,"string");return o(n)?n:n+""}},6330:function(t){var n=String;t.exports=function(t){try{return n(t)}catch(r){return"Object"}}},9711:function(t,n,r){var e=r(1702),o=0,i=Math.random(),u=e(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+u(++o+i,36)}},3307:function(t,n,r){var e=r(6293);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,n,r){var e=r(9781),o=r(7293);t.exports=e&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(t,n,r){var e=r(7854),o=r(2309),i=r(2597),u=r(9711),c=r(6293),a=r(3307),f=o("wks"),s=e.Symbol,p=s&&s.for,l=a?s:s&&s.withoutSetter||u;t.exports=function(t){if(!i(f,t)||!c&&"string"!=typeof f[t]){var n="Symbol."+t;c&&i(s,t)?f[t]=s[t]:f[t]=a&&p?p(n):l(n)}return f[t]}},3792:function(t,n,r){r(1223)("flat")},6301:function(t,n,r){"use strict";r.d(n,{Z:function(){return f}});var e=r(7294),o=r(1883);const i=t=>{let{isCurrent:n}=t;return n?{className:"nav-link active"}:{className:"nav-link"}},u=t=>e.createElement(o.Link,Object.assign({getProps:i},t)),c=t=>{let{siteTitle:n}=t;return e.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-primary container"},e.createElement("div",{className:"container-fluid"},e.createElement(o.Link,{to:"/",className:"navbar-brand",href:"#"},n),e.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#main-navbar","aria-controls":"main-navbar","aria-expanded":"false","aria-label":"Toggle navigation"},e.createElement("span",{className:"navbar-toggler-icon"})),e.createElement("div",{className:"collapse navbar-collapse",id:"main-navbar"},e.createElement("ul",{className:"navbar-nav ms-auto mb-2 mb-md-0"},e.createElement("li",{className:"nav-item"},e.createElement(u,{to:"/"},"Home")),e.createElement("li",{className:"nav-item"},e.createElement(u,{to:"/blog"},"Blog")),e.createElement("li",{className:"nav-item"},e.createElement(u,{to:"/publications"},"Publications")),e.createElement("li",{className:"nav-item"},e.createElement(u,{to:"/about"},"About"))))))};c.defaultProps={siteTitle:""};var a=c;var f=t=>{var n;let{children:r}=t;const i=(0,o.useStaticQuery)("3649515864");var u=(new Date).getFullYear();return e.createElement("div",{className:"container-fluid p-0"},e.createElement(a,{siteTitle:(null===(n=i.site.siteMetadata)||void 0===n?void 0:n.title)||"Title"}),e.createElement("main",null,r),e.createElement("footer",{className:"footer mt-auto py-3"},e.createElement("div",{className:"container"},e.createElement("span",{className:"text-muted"}," © Francesco Vigni ",u," "))))}},1325:function(t,n,r){"use strict";r.r(n);var e=r(9995),o=r.n(e),i=(r(3792),r(7294)),u=r(1883),c=r(6301);n.default=t=>{let{data:n}=t;const r=o()(n.allPublicationsJson.edges.map((t=>t.node.tags)).flat()),e=Object.keys(r).sort();return i.createElement(c.Z,null,i.createElement("section",{className:"py-5 text-center container own_container"},i.createElement("div",{className:"row py-lg-5"},i.createElement("div",{className:"col-lg-6 col-md-8 mx-auto"},i.createElement("h1",{className:"fw-light"},"All Tags"),i.createElement("p",{className:"lead text-muted"}))),i.createElement("div",{className:"row"},i.createElement("div",{className:"col-md-12"},i.createElement("hr",{className:"hr-text","data-content":""}))),i.createElement("div",{className:"row pb-5"},i.createElement("div",{className:"col"},e.map((t=>i.createElement("div",{key:t,className:"authors_list fw-light"},i.createElement(u.Link,{className:"btn btn-warning m-2",to:"/tags/"+t},t," (",r[t],")")))))),i.createElement("center",null,i.createElement(u.Link,{to:"/"},"Go back to the homepage"))))}},8552:function(t,n,r){var e=r(852)(r(5639),"DataView");t.exports=e},1989:function(t,n,r){var e=r(1789),o=r(401),i=r(7667),u=r(1327),c=r(1866);function a(t){var n=-1,r=null==t?0:t.length;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}a.prototype.clear=e,a.prototype.delete=o,a.prototype.get=i,a.prototype.has=u,a.prototype.set=c,t.exports=a},8407:function(t,n,r){var e=r(7040),o=r(4125),i=r(2117),u=r(7529),c=r(4705);function a(t){var n=-1,r=null==t?0:t.length;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}a.prototype.clear=e,a.prototype.delete=o,a.prototype.get=i,a.prototype.has=u,a.prototype.set=c,t.exports=a},7071:function(t,n,r){var e=r(852)(r(5639),"Map");t.exports=e},3369:function(t,n,r){var e=r(4785),o=r(1285),i=r(6e3),u=r(9916),c=r(5265);function a(t){var n=-1,r=null==t?0:t.length;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}a.prototype.clear=e,a.prototype.delete=o,a.prototype.get=i,a.prototype.has=u,a.prototype.set=c,t.exports=a},3818:function(t,n,r){var e=r(852)(r(5639),"Promise");t.exports=e},8525:function(t,n,r){var e=r(852)(r(5639),"Set");t.exports=e},8668:function(t,n,r){var e=r(3369),o=r(619),i=r(2385);function u(t){var n=-1,r=null==t?0:t.length;for(this.__data__=new e;++n<r;)this.add(t[n])}u.prototype.add=u.prototype.push=o,u.prototype.has=i,t.exports=u},6384:function(t,n,r){var e=r(8407),o=r(7465),i=r(3779),u=r(7599),c=r(4758),a=r(4309);function f(t){var n=this.__data__=new e(t);this.size=n.size}f.prototype.clear=o,f.prototype.delete=i,f.prototype.get=u,f.prototype.has=c,f.prototype.set=a,t.exports=f},2705:function(t,n,r){var e=r(5639).Symbol;t.exports=e},1149:function(t,n,r){var e=r(5639).Uint8Array;t.exports=e},577:function(t,n,r){var e=r(852)(r(5639),"WeakMap");t.exports=e},4174:function(t){t.exports=function(t,n,r,e){for(var o=-1,i=null==t?0:t.length;++o<i;){var u=t[o];n(e,u,r(u),t)}return e}},4963:function(t){t.exports=function(t,n){for(var r=-1,e=null==t?0:t.length,o=0,i=[];++r<e;){var u=t[r];n(u,r,t)&&(i[o++]=u)}return i}},4636:function(t,n,r){var e=r(2545),o=r(5694),i=r(1469),u=r(4144),c=r(5776),a=r(6719),f=Object.prototype.hasOwnProperty;t.exports=function(t,n){var r=i(t),s=!r&&o(t),p=!r&&!s&&u(t),l=!r&&!s&&!p&&a(t),v=r||s||p||l,b=v?e(t.length,String):[],h=b.length;for(var y in t)!n&&!f.call(t,y)||v&&("length"==y||p&&("offset"==y||"parent"==y)||l&&("buffer"==y||"byteLength"==y||"byteOffset"==y)||c(y,h))||b.push(y);return b}},9932:function(t){t.exports=function(t,n){for(var r=-1,e=null==t?0:t.length,o=Array(e);++r<e;)o[r]=n(t[r],r,t);return o}},2488:function(t){t.exports=function(t,n){for(var r=-1,e=n.length,o=t.length;++r<e;)t[o+r]=n[r];return t}},2908:function(t){t.exports=function(t,n){for(var r=-1,e=null==t?0:t.length;++r<e;)if(n(t[r],r,t))return!0;return!1}},8470:function(t,n,r){var e=r(7813);t.exports=function(t,n){for(var r=t.length;r--;)if(e(t[r][0],n))return r;return-1}},1119:function(t,n,r){var e=r(9881);t.exports=function(t,n,r,o){return e(t,(function(t,e,i){n(o,t,r(t),i)})),o}},9465:function(t,n,r){var e=r(8777);t.exports=function(t,n,r){"__proto__"==n&&e?e(t,n,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[n]=r}},9881:function(t,n,r){var e=r(7816),o=r(9291)(e);t.exports=o},8483:function(t,n,r){var e=r(5063)();t.exports=e},7816:function(t,n,r){var e=r(8483),o=r(3674);t.exports=function(t,n){return t&&e(t,n,o)}},7786:function(t,n,r){var e=r(1811),o=r(327);t.exports=function(t,n){for(var r=0,i=(n=e(n,t)).length;null!=t&&r<i;)t=t[o(n[r++])];return r&&r==i?t:void 0}},8866:function(t,n,r){var e=r(2488),o=r(1469);t.exports=function(t,n,r){var i=n(t);return o(t)?i:e(i,r(t))}},4239:function(t,n,r){var e=r(2705),o=r(9607),i=r(2333),u=e?e.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":u&&u in Object(t)?o(t):i(t)}},13:function(t){t.exports=function(t,n){return null!=t&&n in Object(t)}},9454:function(t,n,r){var e=r(4239),o=r(7005);t.exports=function(t){return o(t)&&"[object Arguments]"==e(t)}},939:function(t,n,r){var e=r(2492),o=r(7005);t.exports=function t(n,r,i,u,c){return n===r||(null==n||null==r||!o(n)&&!o(r)?n!=n&&r!=r:e(n,r,i,u,t,c))}},2492:function(t,n,r){var e=r(6384),o=r(7114),i=r(8351),u=r(6096),c=r(4160),a=r(1469),f=r(4144),s=r(6719),p="[object Arguments]",l="[object Array]",v="[object Object]",b=Object.prototype.hasOwnProperty;t.exports=function(t,n,r,h,y,x){var d=a(t),m=a(n),g=d?l:c(t),_=m?l:c(n),j=(g=g==p?v:g)==v,O=(_=_==p?v:_)==v,w=g==_;if(w&&f(t)){if(!f(n))return!1;d=!0,j=!1}if(w&&!j)return x||(x=new e),d||s(t)?o(t,n,r,h,y,x):i(t,n,g,r,h,y,x);if(!(1&r)){var E=j&&b.call(t,"__wrapped__"),S=O&&b.call(n,"__wrapped__");if(E||S){var A=E?t.value():t,P=S?n.value():n;return x||(x=new e),y(A,P,r,h,x)}}return!!w&&(x||(x=new e),u(t,n,r,h,y,x))}},2958:function(t,n,r){var e=r(6384),o=r(939);t.exports=function(t,n,r,i){var u=r.length,c=u,a=!i;if(null==t)return!c;for(t=Object(t);u--;){var f=r[u];if(a&&f[2]?f[1]!==t[f[0]]:!(f[0]in t))return!1}for(;++u<c;){var s=(f=r[u])[0],p=t[s],l=f[1];if(a&&f[2]){if(void 0===p&&!(s in t))return!1}else{var v=new e;if(i)var b=i(p,l,s,t,n,v);if(!(void 0===b?o(l,p,3,i,v):b))return!1}}return!0}},8458:function(t,n,r){var e=r(3560),o=r(5346),i=r(3218),u=r(346),c=/^\[object .+?Constructor\]$/,a=Function.prototype,f=Object.prototype,s=a.toString,p=f.hasOwnProperty,l=RegExp("^"+s.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!i(t)||o(t))&&(e(t)?l:c).test(u(t))}},8749:function(t,n,r){var e=r(4239),o=r(1780),i=r(7005),u={};u["[object Float32Array]"]=u["[object Float64Array]"]=u["[object Int8Array]"]=u["[object Int16Array]"]=u["[object Int32Array]"]=u["[object Uint8Array]"]=u["[object Uint8ClampedArray]"]=u["[object Uint16Array]"]=u["[object Uint32Array]"]=!0,u["[object Arguments]"]=u["[object Array]"]=u["[object ArrayBuffer]"]=u["[object Boolean]"]=u["[object DataView]"]=u["[object Date]"]=u["[object Error]"]=u["[object Function]"]=u["[object Map]"]=u["[object Number]"]=u["[object Object]"]=u["[object RegExp]"]=u["[object Set]"]=u["[object String]"]=u["[object WeakMap]"]=!1,t.exports=function(t){return i(t)&&o(t.length)&&!!u[e(t)]}},7206:function(t,n,r){var e=r(1573),o=r(6432),i=r(6557),u=r(1469),c=r(9601);t.exports=function(t){return"function"==typeof t?t:null==t?i:"object"==typeof t?u(t)?o(t[0],t[1]):e(t):c(t)}},280:function(t,n,r){var e=r(5726),o=r(6916),i=Object.prototype.hasOwnProperty;t.exports=function(t){if(!e(t))return o(t);var n=[];for(var r in Object(t))i.call(t,r)&&"constructor"!=r&&n.push(r);return n}},1573:function(t,n,r){var e=r(2958),o=r(1499),i=r(2634);t.exports=function(t){var n=o(t);return 1==n.length&&n[0][2]?i(n[0][0],n[0][1]):function(r){return r===t||e(r,t,n)}}},6432:function(t,n,r){var e=r(939),o=r(7361),i=r(9095),u=r(5403),c=r(9162),a=r(2634),f=r(327);t.exports=function(t,n){return u(t)&&c(n)?a(f(t),n):function(r){var u=o(r,t);return void 0===u&&u===n?i(r,t):e(n,u,3)}}},371:function(t){t.exports=function(t){return function(n){return null==n?void 0:n[t]}}},9152:function(t,n,r){var e=r(7786);t.exports=function(t){return function(n){return e(n,t)}}},2545:function(t){t.exports=function(t,n){for(var r=-1,e=Array(t);++r<t;)e[r]=n(r);return e}},531:function(t,n,r){var e=r(2705),o=r(9932),i=r(1469),u=r(3448),c=e?e.prototype:void 0,a=c?c.toString:void 0;t.exports=function t(n){if("string"==typeof n)return n;if(i(n))return o(n,t)+"";if(u(n))return a?a.call(n):"";var r=n+"";return"0"==r&&1/n==-Infinity?"-0":r}},7518:function(t){t.exports=function(t){return function(n){return t(n)}}},4757:function(t){t.exports=function(t,n){return t.has(n)}},1811:function(t,n,r){var e=r(1469),o=r(5403),i=r(5514),u=r(9833);t.exports=function(t,n){return e(t)?t:o(t,n)?[t]:i(u(t))}},4429:function(t,n,r){var e=r(5639)["__core-js_shared__"];t.exports=e},5189:function(t,n,r){var e=r(4174),o=r(1119),i=r(7206),u=r(1469);t.exports=function(t,n){return function(r,c){var a=u(r)?e:o,f=n?n():{};return a(r,t,i(c,2),f)}}},9291:function(t,n,r){var e=r(8612);t.exports=function(t,n){return function(r,o){if(null==r)return r;if(!e(r))return t(r,o);for(var i=r.length,u=n?i:-1,c=Object(r);(n?u--:++u<i)&&!1!==o(c[u],u,c););return r}}},5063:function(t){t.exports=function(t){return function(n,r,e){for(var o=-1,i=Object(n),u=e(n),c=u.length;c--;){var a=u[t?c:++o];if(!1===r(i[a],a,i))break}return n}}},8777:function(t,n,r){var e=r(852),o=function(){try{var t=e(Object,"defineProperty");return t({},"",{}),t}catch(n){}}();t.exports=o},7114:function(t,n,r){var e=r(8668),o=r(2908),i=r(4757);t.exports=function(t,n,r,u,c,a){var f=1&r,s=t.length,p=n.length;if(s!=p&&!(f&&p>s))return!1;var l=a.get(t),v=a.get(n);if(l&&v)return l==n&&v==t;var b=-1,h=!0,y=2&r?new e:void 0;for(a.set(t,n),a.set(n,t);++b<s;){var x=t[b],d=n[b];if(u)var m=f?u(d,x,b,n,t,a):u(x,d,b,t,n,a);if(void 0!==m){if(m)continue;h=!1;break}if(y){if(!o(n,(function(t,n){if(!i(y,n)&&(x===t||c(x,t,r,u,a)))return y.push(n)}))){h=!1;break}}else if(x!==d&&!c(x,d,r,u,a)){h=!1;break}}return a.delete(t),a.delete(n),h}},8351:function(t,n,r){var e=r(2705),o=r(1149),i=r(7813),u=r(7114),c=r(8776),a=r(1814),f=e?e.prototype:void 0,s=f?f.valueOf:void 0;t.exports=function(t,n,r,e,f,p,l){switch(r){case"[object DataView]":if(t.byteLength!=n.byteLength||t.byteOffset!=n.byteOffset)return!1;t=t.buffer,n=n.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=n.byteLength||!p(new o(t),new o(n)));case"[object Boolean]":case"[object Date]":case"[object Number]":return i(+t,+n);case"[object Error]":return t.name==n.name&&t.message==n.message;case"[object RegExp]":case"[object String]":return t==n+"";case"[object Map]":var v=c;case"[object Set]":var b=1&e;if(v||(v=a),t.size!=n.size&&!b)return!1;var h=l.get(t);if(h)return h==n;e|=2,l.set(t,n);var y=u(v(t),v(n),e,f,p,l);return l.delete(t),y;case"[object Symbol]":if(s)return s.call(t)==s.call(n)}return!1}},6096:function(t,n,r){var e=r(8234),o=Object.prototype.hasOwnProperty;t.exports=function(t,n,r,i,u,c){var a=1&r,f=e(t),s=f.length;if(s!=e(n).length&&!a)return!1;for(var p=s;p--;){var l=f[p];if(!(a?l in n:o.call(n,l)))return!1}var v=c.get(t),b=c.get(n);if(v&&b)return v==n&&b==t;var h=!0;c.set(t,n),c.set(n,t);for(var y=a;++p<s;){var x=t[l=f[p]],d=n[l];if(i)var m=a?i(d,x,l,n,t,c):i(x,d,l,t,n,c);if(!(void 0===m?x===d||u(x,d,r,i,c):m)){h=!1;break}y||(y="constructor"==l)}if(h&&!y){var g=t.constructor,_=n.constructor;g==_||!("constructor"in t)||!("constructor"in n)||"function"==typeof g&&g instanceof g&&"function"==typeof _&&_ instanceof _||(h=!1)}return c.delete(t),c.delete(n),h}},1957:function(t,n,r){var e="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;t.exports=e},8234:function(t,n,r){var e=r(8866),o=r(9551),i=r(3674);t.exports=function(t){return e(t,i,o)}},5050:function(t,n,r){var e=r(7019);t.exports=function(t,n){var r=t.__data__;return e(n)?r["string"==typeof n?"string":"hash"]:r.map}},1499:function(t,n,r){var e=r(9162),o=r(3674);t.exports=function(t){for(var n=o(t),r=n.length;r--;){var i=n[r],u=t[i];n[r]=[i,u,e(u)]}return n}},852:function(t,n,r){var e=r(8458),o=r(7801);t.exports=function(t,n){var r=o(t,n);return e(r)?r:void 0}},9607:function(t,n,r){var e=r(2705),o=Object.prototype,i=o.hasOwnProperty,u=o.toString,c=e?e.toStringTag:void 0;t.exports=function(t){var n=i.call(t,c),r=t[c];try{t[c]=void 0;var e=!0}catch(a){}var o=u.call(t);return e&&(n?t[c]=r:delete t[c]),o}},9551:function(t,n,r){var e=r(4963),o=r(479),i=Object.prototype.propertyIsEnumerable,u=Object.getOwnPropertySymbols,c=u?function(t){return null==t?[]:(t=Object(t),e(u(t),(function(n){return i.call(t,n)})))}:o;t.exports=c},4160:function(t,n,r){var e=r(8552),o=r(7071),i=r(3818),u=r(8525),c=r(577),a=r(4239),f=r(346),s="[object Map]",p="[object Promise]",l="[object Set]",v="[object WeakMap]",b="[object DataView]",h=f(e),y=f(o),x=f(i),d=f(u),m=f(c),g=a;(e&&g(new e(new ArrayBuffer(1)))!=b||o&&g(new o)!=s||i&&g(i.resolve())!=p||u&&g(new u)!=l||c&&g(new c)!=v)&&(g=function(t){var n=a(t),r="[object Object]"==n?t.constructor:void 0,e=r?f(r):"";if(e)switch(e){case h:return b;case y:return s;case x:return p;case d:return l;case m:return v}return n}),t.exports=g},7801:function(t){t.exports=function(t,n){return null==t?void 0:t[n]}},222:function(t,n,r){var e=r(1811),o=r(5694),i=r(1469),u=r(5776),c=r(1780),a=r(327);t.exports=function(t,n,r){for(var f=-1,s=(n=e(n,t)).length,p=!1;++f<s;){var l=a(n[f]);if(!(p=null!=t&&r(t,l)))break;t=t[l]}return p||++f!=s?p:!!(s=null==t?0:t.length)&&c(s)&&u(l,s)&&(i(t)||o(t))}},1789:function(t,n,r){var e=r(4536);t.exports=function(){this.__data__=e?e(null):{},this.size=0}},401:function(t){t.exports=function(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n}},7667:function(t,n,r){var e=r(4536),o=Object.prototype.hasOwnProperty;t.exports=function(t){var n=this.__data__;if(e){var r=n[t];return"__lodash_hash_undefined__"===r?void 0:r}return o.call(n,t)?n[t]:void 0}},1327:function(t,n,r){var e=r(4536),o=Object.prototype.hasOwnProperty;t.exports=function(t){var n=this.__data__;return e?void 0!==n[t]:o.call(n,t)}},1866:function(t,n,r){var e=r(4536);t.exports=function(t,n){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=e&&void 0===n?"__lodash_hash_undefined__":n,this}},5776:function(t){var n=/^(?:0|[1-9]\d*)$/;t.exports=function(t,r){var e=typeof t;return!!(r=null==r?9007199254740991:r)&&("number"==e||"symbol"!=e&&n.test(t))&&t>-1&&t%1==0&&t<r}},5403:function(t,n,r){var e=r(1469),o=r(3448),i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,u=/^\w*$/;t.exports=function(t,n){if(e(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!o(t))||(u.test(t)||!i.test(t)||null!=n&&t in Object(n))}},7019:function(t){t.exports=function(t){var n=typeof t;return"string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==t:null===t}},5346:function(t,n,r){var e,o=r(4429),i=(e=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+e:"";t.exports=function(t){return!!i&&i in t}},5726:function(t){var n=Object.prototype;t.exports=function(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||n)}},9162:function(t,n,r){var e=r(3218);t.exports=function(t){return t==t&&!e(t)}},7040:function(t){t.exports=function(){this.__data__=[],this.size=0}},4125:function(t,n,r){var e=r(8470),o=Array.prototype.splice;t.exports=function(t){var n=this.__data__,r=e(n,t);return!(r<0)&&(r==n.length-1?n.pop():o.call(n,r,1),--this.size,!0)}},2117:function(t,n,r){var e=r(8470);t.exports=function(t){var n=this.__data__,r=e(n,t);return r<0?void 0:n[r][1]}},7529:function(t,n,r){var e=r(8470);t.exports=function(t){return e(this.__data__,t)>-1}},4705:function(t,n,r){var e=r(8470);t.exports=function(t,n){var r=this.__data__,o=e(r,t);return o<0?(++this.size,r.push([t,n])):r[o][1]=n,this}},4785:function(t,n,r){var e=r(1989),o=r(8407),i=r(7071);t.exports=function(){this.size=0,this.__data__={hash:new e,map:new(i||o),string:new e}}},1285:function(t,n,r){var e=r(5050);t.exports=function(t){var n=e(this,t).delete(t);return this.size-=n?1:0,n}},6e3:function(t,n,r){var e=r(5050);t.exports=function(t){return e(this,t).get(t)}},9916:function(t,n,r){var e=r(5050);t.exports=function(t){return e(this,t).has(t)}},5265:function(t,n,r){var e=r(5050);t.exports=function(t,n){var r=e(this,t),o=r.size;return r.set(t,n),this.size+=r.size==o?0:1,this}},8776:function(t){t.exports=function(t){var n=-1,r=Array(t.size);return t.forEach((function(t,e){r[++n]=[e,t]})),r}},2634:function(t){t.exports=function(t,n){return function(r){return null!=r&&(r[t]===n&&(void 0!==n||t in Object(r)))}}},4523:function(t,n,r){var e=r(8306);t.exports=function(t){var n=e(t,(function(t){return 500===r.size&&r.clear(),t})),r=n.cache;return n}},4536:function(t,n,r){var e=r(852)(Object,"create");t.exports=e},6916:function(t,n,r){var e=r(5569)(Object.keys,Object);t.exports=e},1167:function(t,n,r){t=r.nmd(t);var e=r(1957),o=n&&!n.nodeType&&n,i=o&&t&&!t.nodeType&&t,u=i&&i.exports===o&&e.process,c=function(){try{var t=i&&i.require&&i.require("util").types;return t||u&&u.binding&&u.binding("util")}catch(n){}}();t.exports=c},2333:function(t){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},5569:function(t){t.exports=function(t,n){return function(r){return t(n(r))}}},5639:function(t,n,r){var e=r(1957),o="object"==typeof self&&self&&self.Object===Object&&self,i=e||o||Function("return this")();t.exports=i},619:function(t){t.exports=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this}},2385:function(t){t.exports=function(t){return this.__data__.has(t)}},1814:function(t){t.exports=function(t){var n=-1,r=Array(t.size);return t.forEach((function(t){r[++n]=t})),r}},7465:function(t,n,r){var e=r(8407);t.exports=function(){this.__data__=new e,this.size=0}},3779:function(t){t.exports=function(t){var n=this.__data__,r=n.delete(t);return this.size=n.size,r}},7599:function(t){t.exports=function(t){return this.__data__.get(t)}},4758:function(t){t.exports=function(t){return this.__data__.has(t)}},4309:function(t,n,r){var e=r(8407),o=r(7071),i=r(3369);t.exports=function(t,n){var r=this.__data__;if(r instanceof e){var u=r.__data__;if(!o||u.length<199)return u.push([t,n]),this.size=++r.size,this;r=this.__data__=new i(u)}return r.set(t,n),this.size=r.size,this}},5514:function(t,n,r){var e=r(4523),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i=/\\(\\)?/g,u=e((function(t){var n=[];return 46===t.charCodeAt(0)&&n.push(""),t.replace(o,(function(t,r,e,o){n.push(e?o.replace(i,"$1"):r||t)})),n}));t.exports=u},327:function(t,n,r){var e=r(3448);t.exports=function(t){if("string"==typeof t||e(t))return t;var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n}},346:function(t){var n=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return n.call(t)}catch(r){}try{return t+""}catch(r){}}return""}},9995:function(t,n,r){var e=r(9465),o=r(5189),i=Object.prototype.hasOwnProperty,u=o((function(t,n,r){i.call(t,r)?++t[r]:e(t,r,1)}));t.exports=u},7813:function(t){t.exports=function(t,n){return t===n||t!=t&&n!=n}},7361:function(t,n,r){var e=r(7786);t.exports=function(t,n,r){var o=null==t?void 0:e(t,n);return void 0===o?r:o}},9095:function(t,n,r){var e=r(13),o=r(222);t.exports=function(t,n){return null!=t&&o(t,n,e)}},6557:function(t){t.exports=function(t){return t}},5694:function(t,n,r){var e=r(9454),o=r(7005),i=Object.prototype,u=i.hasOwnProperty,c=i.propertyIsEnumerable,a=e(function(){return arguments}())?e:function(t){return o(t)&&u.call(t,"callee")&&!c.call(t,"callee")};t.exports=a},1469:function(t){var n=Array.isArray;t.exports=n},8612:function(t,n,r){var e=r(3560),o=r(1780);t.exports=function(t){return null!=t&&o(t.length)&&!e(t)}},4144:function(t,n,r){t=r.nmd(t);var e=r(5639),o=r(5062),i=n&&!n.nodeType&&n,u=i&&t&&!t.nodeType&&t,c=u&&u.exports===i?e.Buffer:void 0,a=(c?c.isBuffer:void 0)||o;t.exports=a},3560:function(t,n,r){var e=r(4239),o=r(3218);t.exports=function(t){if(!o(t))return!1;var n=e(t);return"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n}},1780:function(t){t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},3218:function(t){t.exports=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}},7005:function(t){t.exports=function(t){return null!=t&&"object"==typeof t}},3448:function(t,n,r){var e=r(4239),o=r(7005);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==e(t)}},6719:function(t,n,r){var e=r(8749),o=r(7518),i=r(1167),u=i&&i.isTypedArray,c=u?o(u):e;t.exports=c},3674:function(t,n,r){var e=r(4636),o=r(280),i=r(8612);t.exports=function(t){return i(t)?e(t):o(t)}},8306:function(t,n,r){var e=r(3369);function o(t,n){if("function"!=typeof t||null!=n&&"function"!=typeof n)throw new TypeError("Expected a function");var r=function(){var e=arguments,o=n?n.apply(this,e):e[0],i=r.cache;if(i.has(o))return i.get(o);var u=t.apply(this,e);return r.cache=i.set(o,u)||i,u};return r.cache=new(o.Cache||e),r}o.Cache=e,t.exports=o},9601:function(t,n,r){var e=r(371),o=r(9152),i=r(5403),u=r(327);t.exports=function(t){return i(t)?e(u(t)):o(t)}},479:function(t){t.exports=function(){return[]}},5062:function(t){t.exports=function(){return!1}},9833:function(t,n,r){var e=r(531);t.exports=function(t){return null==t?"":e(t)}}}]);
//# sourceMappingURL=component---src-pages-tags-js-0edcd630d8ff404ed1fa.js.map