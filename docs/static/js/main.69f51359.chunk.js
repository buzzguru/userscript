(this["webpackJsonp@lskjs/cra"]=this["webpackJsonp@lskjs/cra"]||[]).push([[0],{249:function(e,t,n){"use strict";var r=n(7),a=r(n(76)),o=r(n(77)),s=r(n(250)),u=r(n(438)),i=r(n(1)),p=r(n(442)),c=n(446),l=n(657),d=n(663),f=n(664),h=n(665);(0,s.default)();var v=["https://cdn.jsdelivr.net/npm/siiimple-toast/dist/siiimple-toast.min.js"],m=["https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css","https://cdn.jsdelivr.net/npm/siiimple-toast/dist/style.css"];(function(){var e=(0,o.default)(a.default.mark((function e(){var t;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.default.map(v,(function(e){return(0,h.injectJs)(e)}));case 3:return e.next=5,u.default.map(m,(function(e){return(0,h.injectCss)(e)}));case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:t=document.createElement("div"),p.default.render(i.default.createElement(c.App),t),document.body.appendChild(t),(0,l.runAppannie)().then((function(e){console.log("[runAppannie] ok",e)})).catch((function(e){console.error("[runAppannie] err",e)})),(0,d.runInstagramIntercept)().then((function(e){console.log("[runInstagramIntercept] ok",e)})).catch((function(e){console.error("[runInstagramIntercept] err",e)})),(0,f.runModashIntercept)().then((function(e){console.log("[runModashIntercept] ok",e)})).catch((function(e){console.error("[runModashIntercept] err",e)}));case 16:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()},446:function(e,t,n){"use strict";var r=n(7);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.App=void 0;var a=r(n(132)),o=r(n(133)),s=r(n(134)),u=r(n(135)),i=r(n(136)),p=(r(n(448)),n(653)),c=r(n(1));function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,i.default)(e);if(t){var a=(0,i.default)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,u.default)(this,n)}}var d=function(e){(0,s.default)(n,e);var t=l(n);function n(e){var r;return(0,a.default)(this,n),(r=t.call(this,e)).state={seconds:0},r}return(0,o.default)(n,[{key:"tick",value:function(){this.setState((function(e){return{seconds:e.seconds+1}}))}},{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return c.default.createElement("div",null,"Seconds: ",this.state.seconds)}}]),n}(c.default.Component),f={position:"fixed",zIndex:99999,bottom:0,left:0,background:"gray",color:"white",width:"100%"},h=function(e){e.children;return c.default.createElement("div",{style:f},c.default.createElement(p.Container,null,c.default.createElement(p.Row,null,c.default.createElement(p.Col,{md:6},c.default.createElement(d,null)),c.default.createElement(p.Col,{md:3},c.default.createElement("img",{src:"https://buzzguru.github.io/userscript/logo.png"})))))};t.App=h;var v=h;t.default=v},657:function(e,t,n){"use strict";var r=n(7);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.getObjectValue=i,t.getShortMarketName=p,t.runAppannie=l,t.toast=c;var a=r(n(76)),o=r(n(77)),s=r(n(52)),u=r(n(162));function i(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if("string"===typeof e)return i(e.split(/\./),t,n);if(!Array.isArray(e)||0===e.length)return n;var r=(0,u.default)(e,1),a=r[0],o=e.slice(1);return t&&"object"===(0,s.default)(t)&&Object.hasOwnProperty.call(t,a)?0===o.length?t[a]:i(o,t[a],n):n}function p(e){return"google-play"===e?"gp":e}function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.type,r=void 0===n?"message":n;console.log("[toast]",e),window.siiimpleToast&&(window.siiimpleToast[r](e),fetch("/i18n/activate/en/").then((function(){setTimeout((function(){window.location.reload()}),2e3)})))}function l(){return d.apply(this,arguments)}function d(){return(d=(0,o.default)(a.default.mark((function e(){var t,n,r,o,s,l,d,f,h,v,m,b,y,g,_,w,j,k,P,O,M,q,R,x,H,E,A,L,T,X,S;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((r=(null===(t=document)||void 0===t||null===(n=t.location)||void 0===n?void 0:n.href)||"").includes("://www.appannie.com")){e.next=3;break}return e.abrupt("return",{status:"ignoreDomain"});case 3:if(new RegExp("://www.appannie.com/.*apps/.+/app/.+/details").test(r)){e.next=6;break}return e.abrupt("return",{status:"ignore"});case 6:if(o=window,s=o.__NEXT_DATA__,(l=document.body.innerText.startsWith("Oops! 404"))||"en-US"===i("props.pageProps.locale.language",s)){e.next=12;break}return e.next=11,c("\u042f\u0437\u044b\u043a \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u043d\u0435 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439, \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0430\u0435\u043c \u043d\u0430 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439");case 11:return e.abrupt("return",{status:"changeLocale"});case 12:if(d={location:window.location.href},f=i("props.pageProps.app.id",s),h=i("props.pageProps.app.name",s),!(l||!f||h&&"Unknown Product"===h)){e.next=21;break}return e.next=18,fetch("https://worker.buzz.guru/api/appannie/notFound?location=".concat(document.location.pathname),{method:"POST",mode:"no-cors"});case 18:return c("\u0421\u043f\u0430\u0440\u0448\u0435\u043d\u043e 404",{type:"alert"}),console.log("\u041e\u0442\u0440\u0435\u043f\u043e\u0440\u0442\u0438 \u044d\u0442\u0443 \u0441\u0441\u044b\u043b\u043a\u0443 \u0432 \u0447\u0430\u0442\u0438\u043a"),e.abrupt("return",{status:"404"});case 21:return v=i("props.pageProps.market",s),f&&(d.app_id=String(f)),v&&(d.market_name=v),m=i("props.pageProps.company.id",s),b=i("props.pageProps.company.name",s),(m||b)&&(d.obj_nav||(d.obj_nav={}),d.obj_nav.company||(d.obj_nav.company={},m&&(d.obj_nav.company.id=String(m)),b&&(d.obj_nav.company.name=b))),y=p(v),g=i("props.pageProps.unifiedApp.id",s),(f||y||g)&&(d.obj_nav||(d.obj_nav={}),d.obj_nav.product||(d.obj_nav.product={},f&&(d.obj_nav.product.id=String(f)),y&&(d.obj_nav.product.market=y),g&&(d.obj_nav.product.universal_product_id=String(g)))),_=i("props.pageProps.unifiedApp.id",s),w=i("props.pageProps.unifiedApp.name",s),j=i("props.pageProps.unifiedApp.icon",s),(_||w||j)&&(d.obj_nav||(d.obj_nav={}),d.obj_nav.universal_product||(d.obj_nav.universal_product={},_&&(d.obj_nav.universal_product.id=String(_)),w&&(d.obj_nav.universal_product.name=w),j&&(d.obj_nav.universal_product.icon=j))),(k=i("props.pageProps.publisher",s))&&(d.publisher=k),P=i("props.pageProps.app.name",s),O=i("props.pageProps.app.icon",s),M=i("props.pageProps.app.market",s),q=i("props.pageProps.app.status",s),"google-play"===M&&(R="gp"),"apple-store"===M&&(R="ios"),x=i("props.pageProps.app.url",s),"ios"===R&&(E=/\/id(\d+)/.exec(x),A=(0,u.default)(E,2),L=A[1],H=L),"gp"===R&&(T=new URL(x),X=new URLSearchParams(T.search),H=X.get("id")),d.meta_data={},P&&(d.meta_data.name=P),O&&(d.meta_data.icon=O),R&&(d.meta_data.market=R),H&&(d.meta_data.marketId=H),"number"===typeof q&&(d.meta_data.status=q),e.prev=51,e.next=54,fetch("https://worker.buzz.guru/api/appannie/updateOne",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(d)});case 54:if(e.t0=e.sent,e.t0){e.next=57;break}e.t0={};case 57:S=e.t0,console.log({status:S.status,statusText:S.statusText}),window.siiimpleToast.success("\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0441\u043f\u0430\u0440\u0448\u0435\u043d\u043e"),e.next=65;break;case 62:e.prev=62,e.t1=e.catch(51),window.siiimpleToast.alert("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u043a \u0432\u043e\u0440\u043a\u0435\u0440\u0443");case 65:return e.abrupt("return",{status:"ok"});case 66:case"end":return e.stop()}}),e,null,[[51,62]])})))).apply(this,arguments)}var f=l;t.default=f},663:function(e,t,n){"use strict";var r=n(7);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.runInstagramIntercept=f;var a=r(n(76)),o=r(n(162)),s=r(n(77)),u=r(n(99));function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,u.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c={method:"POST",url:"".concat("https://worker.buzz.guru","/api/instagram/intercept"),headers:{Accept:"application/json","Content-Type":"application/json"}};function l(){if(window._sharedData&&window._sharedData.entry_data&&window._sharedData.entry_data.ProfilePage&&Array.isArray(window._sharedData.entry_data.ProfilePage)&&window._sharedData.entry_data.ProfilePage.length){var e=window._sharedData.entry_data.ProfilePage[0];if(e.graphql&&e.graphql.user){var t=e.graphql.user,n={url:"/".concat(t.username,"/?__a=1"),request:{method:"GET"},response:{text:JSON.stringify(e)}};window.__lskjs.GM_xmlhttpRequest(p(p({},c),{},{data:JSON.stringify(n)}))}}}function d(e){var t,n,r,a;XMLHttpRequest.callbacks?XMLHttpRequest.callbacks.push(e):(XMLHttpRequest.callbacks=[e],t=XMLHttpRequest.prototype.send,n=XMLHttpRequest.prototype.setRequestHeader,r=XMLHttpRequest.prototype.open,XMLHttpRequest.prototype.send=function(e){this.meta.body=e,t.apply(this,arguments)},XMLHttpRequest.prototype.open=function(e,t,n,o,s){this.meta={method:e,url:t,async:n,user:o,password:s},this.addEventListener("load",(function(){for(a=0;a<XMLHttpRequest.callbacks.length;a+=1)XMLHttpRequest.callbacks[a](this)})),r.apply(this,arguments)},XMLHttpRequest.prototype.setRequestHeader=function(e,t){this.requestHeaders||(this.requestHeaders={}),this.requestHeaders[e]=t,n.apply(this,arguments)})}function f(){return h.apply(this,arguments)}function h(){return(h=(0,s.default)(a.default.mark((function e(){var t,n;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(((null===(t=document)||void 0===t||null===(n=t.location)||void 0===n?void 0:n.href)||"").includes("://www.instagram.com")){e.next=3;break}return e.abrupt("return",{status:"ignoreDomain"});case 3:return l(),d(function(){var e=(0,s.default)(a.default.mark((function e(t){var n,r;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n={},t.getAllResponseHeaders().split("\n").filter((function(e){return e})).forEach((function(e){var t=e.split(/: (.+)/),r=(0,o.default)(t,2),a=r[0],s=r[1];n[a]=s})),r={url:t.meta.url,request:{method:t.meta.method,headers:t.requestHeaders,body:t.meta.body},response:{headers:n,text:t.responseText}},console.log("[R]",r),window.__lskjs.GM_xmlhttpRequest(p(p({},c),{},{data:JSON.stringify(r)}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.abrupt("return",{status:"success"});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=f;t.default=v},664:function(e,t,n){"use strict";var r=n(7);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.runModashIntercept=l;var a=r(n(76)),o=r(n(162)),s=r(n(77)),u="https://worker.buzz.guru";function i(e){var t="";return/^.*\/api\/discovery\/show-profile.*$/.test(e)&&(t="web_overview"),/^.*\/api\/discovery\/report.*$/.test(e)&&(t="web_full"),t}function p(e){var t=e.profileType,n="/";return"YOUTUBE"===t&&(n="youtube"),"INSTAGRAM"===t&&(n="instagram"),"TIKTOK"===t&&(n="tiktok"),"".concat(n,"_channel_modash_events/")}function c(e){var t,n,r,a;XMLHttpRequest.callbacks?XMLHttpRequest.callbacks.push(e):(XMLHttpRequest.callbacks=[e],t=XMLHttpRequest.prototype.send,n=XMLHttpRequest.prototype.setRequestHeader,r=XMLHttpRequest.prototype.open,XMLHttpRequest.prototype.send=function(e){this.meta.body=e,t.apply(this,arguments)},XMLHttpRequest.prototype.open=function(e,t,n,o,s){this.meta={method:e,url:t,async:n,user:o,password:s},this.addEventListener("load",(function(){for(a=0;a<XMLHttpRequest.callbacks.length;a+=1)XMLHttpRequest.callbacks[a](this)})),r.apply(this,arguments)},XMLHttpRequest.prototype.setRequestHeader=function(e,t){this.requestHeaders||(this.requestHeaders={}),this.requestHeaders[e]=t,n.apply(this,arguments)})}function l(){return d.apply(this,arguments)}function d(){return(d=(0,s.default)(a.default.mark((function e(){var t,n;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(((null===(t=document)||void 0===t||null===(n=t.location)||void 0===n?void 0:n.href)||"").includes("marketer.modash.io")){e.next=3;break}return e.abrupt("return",{status:"ignoreDomain"});case 3:return c(function(){var e=(0,s.default)(a.default.mark((function e(t){var n,r,s,c,l,d,f;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n={},t.getAllResponseHeaders().split("\n").filter((function(e){return e})).forEach((function(e){var t=e.split(/: (.+)/),r=(0,o.default)(t,2),a=r[0],s=r[1];n[a]=s})),r={url:t.meta.url,request:{method:t.meta.method,headers:t.requestHeaders,body:t.meta.body},response:{headers:n,text:t.responseText}},s=i(r.url)){e.next=7;break}return e.abrupt("return");case 7:if(c=JSON.parse(r.response.text)||{},l=c.error,d=c.profile,!l&&d){e.next=10;break}return e.abrupt("return");case 10:if(f=p(d)){e.next=13;break}return e.abrupt("return");case 13:console.log("[R]",r),window.__lskjs.GM_xmlhttpRequest({method:"POST",url:"".concat(u,"/api/").concat(f),headers:{Accept:"application/json","Content-Type":"application/json"},type:s,data:JSON.stringify(d.profileData)});case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.abrupt("return",{status:"success"});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f=l;t.default=f},665:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(666);Object.keys(r).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===r[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}}))}));var a=n(667);Object.keys(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===a[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}}))}));var o=n(668);Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===o[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}}))}))},666:function(e,t,n){"use strict";function r(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("type","text/css"),n.setAttribute("href",e),t.appendChild(n)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.injectCss=r;var a=r;t.default=a},667:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.injectJs=u;var r=window.__lskjs||{},a=r.env,o=r.log,s=(a||{}).isDev;function u(e){return s&&o.trace("[injectJs] start",e),new Promise((function(t,n){try{if("undefined"!==typeof GM_addElement)GM_addElement("script",{src:e,type:"text/javascript"});else{var r=document.createElement("script");r.src=e,r.onload=t,r.error=function(){return o.error("[injectJs] err",arguments.length<=0?void 0:arguments[0]),n.apply(void 0,arguments)},document.body.appendChild(r)}t()}catch(a){n(a)}s&&o.trace("[injectJs] success",e)}))}var i=u;t.default=i},668:function(e,t,n){"use strict";function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.timeout,r=void 0===n?6e4:n;return new Promise((function(t){var n=window.open(e,"_blank");setTimeout((function(){n.close(),t()}),r)}))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.openTab=r;var a=r;t.default=a}},[[249,1,2]]]);
//# sourceMappingURL=main.69f51359.chunk.js.map