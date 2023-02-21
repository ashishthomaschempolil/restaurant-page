(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>p});var r=t(537),a=t.n(r),o=t(645),i=t.n(o),c=t(667),s=t.n(c),d=new URL(t(614),t.b),A=i()(a()),l=s()(d);A.push([e.id,":root {\n    --black: #171717;\n    --white: #fafafa;\n    --dark-white: #d4d4d4;\n}\n\n/* Path: src/styles.css */\nbody {\n    margin: 0;\n    padding: 0;\n    color: var(--black); /* font color */\n    font-family: 'Cinzel Decorative', cursive;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    /* Resize the image to be full 100% */\n}\n\n#header {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 1rem;\n    justify-content: center;\n    align-items: center;\n    padding: 1rem;\n    background-color: var(--black);\n    color: var(--white);\n    font-size: 1.5rem;\n}\n\n.btn {\n    cursor: pointer;\n    padding: .5rem 1rem;\n}\n\n#main {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    background: url("+l+") no-repeat center center fixed;\n    background-size: cover;\n}\n\n#main .home-title {\n    color: var(--white);\n    font-size: 3rem;\n    position: relative;\n    top: -5rem;\n    background-color: var(--black);\n    opacity: 1;\n    padding: 2rem 2rem;\n    border-radius: 0.5rem;\n    text-shadow: 0 0 0.2rem var(--dark-white);\n}\n\n#bg-menu {\n    background-color: var(--white);\n    opacity: .95;\n    padding: 1rem;\n    width: 80%;\n    height: 80%;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    grid-gap: 1rem;\n}\n\n.menu-card {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    padding: 1rem;\n    border-radius: 0.5rem;\n    background-color: var(--white);\n    box-shadow: 0 0 0.2rem var(--dark-white);\n    margin: 1rem;\n    width: 100%;\n    max-width: 250px;\n}\n\n.menu-card img {\n    width: 100%;\n    max-width: 300px;\n    border-radius: 0.5rem;\n}\n\n/* .menu-card  */","",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,qBAAqB;AACzB;;AAEA,yBAAyB;AACzB;IACI,SAAS;IACT,UAAU;IACV,mBAAmB,EAAE,eAAe;IACpC,yCAAyC;AAC7C;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,qCAAqC;AACzC;;AAEA;IACI,aAAa;IACb,eAAe;IACf,SAAS;IACT,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,iFAA4D;IAC5D,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;IACnB,eAAe;IACf,kBAAkB;IAClB,UAAU;IACV,8BAA8B;IAC9B,UAAU;IACV,kBAAkB;IAClB,qBAAqB;IACrB,yCAAyC;AAC7C;;AAEA;IACI,8BAA8B;IAC9B,YAAY;IACZ,aAAa;IACb,UAAU;IACV,WAAW;IACX,aAAa;IACb,2DAA2D;IAC3D,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,aAAa;IACb,qBAAqB;IACrB,8BAA8B;IAC9B,wCAAwC;IACxC,YAAY;IACZ,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,gBAAgB;IAChB,qBAAqB;AACzB;;AAEA,gBAAgB",sourcesContent:[":root {\n    --black: #171717;\n    --white: #fafafa;\n    --dark-white: #d4d4d4;\n}\n\n/* Path: src/styles.css */\nbody {\n    margin: 0;\n    padding: 0;\n    color: var(--black); /* font color */\n    font-family: 'Cinzel Decorative', cursive;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    /* Resize the image to be full 100% */\n}\n\n#header {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 1rem;\n    justify-content: center;\n    align-items: center;\n    padding: 1rem;\n    background-color: var(--black);\n    color: var(--white);\n    font-size: 1.5rem;\n}\n\n.btn {\n    cursor: pointer;\n    padding: .5rem 1rem;\n}\n\n#main {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    background: url(assets/bg.jpg) no-repeat center center fixed;\n    background-size: cover;\n}\n\n#main .home-title {\n    color: var(--white);\n    font-size: 3rem;\n    position: relative;\n    top: -5rem;\n    background-color: var(--black);\n    opacity: 1;\n    padding: 2rem 2rem;\n    border-radius: 0.5rem;\n    text-shadow: 0 0 0.2rem var(--dark-white);\n}\n\n#bg-menu {\n    background-color: var(--white);\n    opacity: .95;\n    padding: 1rem;\n    width: 80%;\n    height: 80%;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    grid-gap: 1rem;\n}\n\n.menu-card {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    padding: 1rem;\n    border-radius: 0.5rem;\n    background-color: var(--white);\n    box-shadow: 0 0 0.2rem var(--dark-white);\n    margin: 1rem;\n    width: 100%;\n    max-width: 250px;\n}\n\n.menu-card img {\n    width: 100%;\n    max-width: 300px;\n    border-radius: 0.5rem;\n}\n\n/* .menu-card  */"],sourceRoot:""}]);const p=A},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var A=[].concat(e[d]);r&&i[A[0]]||(void 0!==o&&(void 0===A[5]||(A[1]="@layer".concat(A[5].length>0?" ".concat(A[5]):""," {").concat(A[1],"}")),A[5]=o),t&&(A[2]?(A[1]="@media ".concat(A[2]," {").concat(A[1],"}"),A[2]=t):A[2]=t),a&&(A[4]?(A[1]="@supports (".concat(A[4],") {").concat(A[1],"}"),A[4]=a):A[4]="".concat(a)),n.push(A))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},537:e=>{e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),o="/*# ".concat(a," */");return[n].concat([o]).join("\n")}return[n].join("\n")}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],A=o[d]||0,l="".concat(d," ").concat(A);o[d]=A+1;var p=t(l),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(u);else{var m=a(u,r);r.byIndex=c,n.splice(c,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=t(o[i]);n[c].references--}for(var s=r(e,a),d=0;d<o.length;d++){var A=t(o[d]);0===n[A].references&&(n[A].updater(),n.splice(A,1))}o=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},614:(e,n,t)=>{e.exports=t.p+"2ff0e6b86d53425b6e3b.jpg"}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{class e{constructor(e){document.getElementById(e)?this.element=document.getElementById(e):(this.element=document.createElement("div"),this.element.id=e)}createAndAppendHTML(e="div",n,t,r){const a=document.createElement(e);t&&a.classList.add(t),r&&(a.id=r),n&&(a.textContent=n),this.element.appendChild(a)}appendChild(e){this.element.appendChild(e)}get elementCurrent(){return this.element}set elementCurrent(e){this.element=e}}class n{constructor(e,n,t,r){this.title=e,this.description=n,this.price=t,this.image=r,this.card=null}createCard(){const e=document.createElement("div");e.classList.add("menu-card");const n=document.createElement("img");n.src=this.image,n.alt=this.title,e.appendChild(n);const t=document.createElement("div");t.classList.add("menu-content");const r=document.createElement("h2");r.textContent=this.title;const a=document.createElement("p");a.textContent=this.description;const o=document.createElement("h3");o.textContent=this.price,t.appendChild(r),t.appendChild(a),t.appendChild(o),e.appendChild(t),this.card=e}}var r=t(379),a=t.n(r),o=t(795),i=t.n(o),c=t(569),s=t.n(c),d=t(565),A=t.n(d),l=t(216),p=t.n(l),u=t(589),m=t.n(u),h=t(28),g={};g.styleTagTransform=m(),g.setAttributes=A(),g.insert=s().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=p(),a()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;const f=t.p+"images/6d89fa94675e32f091c41d304d2b4131-classic-cheeseburger.png",C=t.p+"images/00e977bc937e387b5210dd3627aab7ab-bacon-burger.png",b=t.p+"images/313f36e63cfad5fb46b38afa23920223-veggie-burger.png",B=t.p+"images/38c0c3e9abcb4dc68fd440809ed54496-loaded-fries.png",v=new e("content"),I=new e("header");I.createAndAppendHTML("div","Home","btn","home"),I.createAndAppendHTML("div","Menu","btn","menu"),I.createAndAppendHTML("div","Contact","btn","contact"),I.createAndAppendHTML("div","About","btn","about"),v.appendChild(I.elementCurrent);const y=()=>{const n=new e("main");n.createAndAppendHTML("h1","Welcome to Brigg's Burgers","home-title"),v.appendChild(n.elementCurrent)};y(),console.log(v.elementCurrent),document.querySelectorAll(".btn").forEach((t=>{t.addEventListener("click",(()=>{const r=t.id;v.elementCurrent.removeChild(v.elementCurrent.lastChild),"home"===r?y():"menu"===r&&(()=>{const t=new e("main"),r=new e("bg-menu");let a="Classic CheeseBurger",o="100% beef patty, American cheese, lettuce, tomato, onion, and pickles, served on a sesame seed bun",i="$8.99",c=f;const s=new n(a,o,i,c);s.createCard(),r.appendChild(s.card),a="Bacon BBQ Burger",o="100% beef patty, crispy bacon, cheddar cheese, onion rings, lettuce, and smoky BBQ sauce, served on a brioche bun",i="$10.99",c=C;const d=new n(a,o,i,c);d.createCard(),r.appendChild(d.card),a="Veggie Burger",o="Grilled portobello mushroom, roasted red peppers, avocado, lettuce, tomato, and hummus, served on a multigrain bun",i="$9.99",c=b;const A=new n(a,o,i,c);A.createCard(),r.appendChild(A.card),a="Loaded Fries",o="Crispy French fries topped with melted cheddar cheese, crispy bacon, green onions, and a drizzle of ranch dressing",i="$6.99",c=B;const l=new n(a,o,i,c);l.createCard(),r.appendChild(l.card),t.appendChild(r.elementCurrent),console.log(r.elementCurrent),console.log(t.elementCurrent),v.appendChild(t.elementCurrent),console.log(v.elementCurrent)})()}))}))})()})();
//# sourceMappingURL=main.js.map