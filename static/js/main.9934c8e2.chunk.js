(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(5),o=c.n(r),s=c(3),i=c(0);function l(e){var t=e.onSubmit,c=Object(n.useState)(""),a=Object(s.a)(c,2),r=a[0],o=a[1];return Object(i.jsx)("header",{className:"Searchbar",children:Object(i.jsxs)("form",{className:"SearchForm",onSubmit:function(e){e.preventDefault(),t(r),o("")},children:[Object(i.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(i.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(i.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){var t=e.currentTarget.value.toLowerCase().trim();o(t)},value:r})]})})}var j=c(8),u=document.querySelector("#modal-root");function b(e){var t=e.onClose,c=e.children,a=function(e){"Escape"===e.code&&t()};return Object(n.useEffect)((function(){return window.addEventListener("keydown",a),function(){window.removeEventListener("keydown",a)}})),Object(r.createPortal)(Object(i.jsx)("div",{className:"Overlay",onClick:function(e){e.currentTarget===e.target&&t()},children:Object(i.jsx)("div",{className:"Modal",children:c})}),u)}function d(e){var t=e.littleImage,c=e.largeImage,a=e.id,r=e.tags,o=Object(n.useState)(""),l=Object(s.a)(o,2),j=l[0],u=l[1],d=Object(n.useState)(!1),m=Object(s.a)(d,2),h=m[0],O=m[1],g=function(){O((function(e){return!e}))};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("li",{className:"ImageGalleryItem",id:a,onClick:function(){return u(c),void g()},children:Object(i.jsx)("img",{src:t,alt:r,className:"ImageGalleryItem-image"})},a),h&&Object(i.jsx)(b,{onClose:g,children:Object(i.jsx)("img",{src:j,alt:""})})]})}var m=function(e){var t=e.onClick;return Object(i.jsx)("button",{onClick:t,type:"button",className:"Button",children:"Load more"})};var h={handleApi:function(e,t){return fetch("".concat("https://pixabay.com/api/","?q=").concat(e,"&page=").concat(t,"&key=").concat("21844309-0bdc8d8d935c894ec75615f09","&image_type=photo&orientation=horizontal&per_page=12")).then((function(t){return t.ok?t.json():Promise.reject(new Error("\u041d\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f ".concat(e)))}))}};function O(e){var t=e.message;return Object(i.jsx)("div",{role:"alert",children:Object(i.jsx)("p",{children:t})})}var g=c(9),f=c.n(g);function p(){return Object(i.jsx)("div",{className:"wrapperLoader",children:Object(i.jsx)(f.a,{type:"ThreeDots",color:"#00BFFF",height:100,width:100,timeout:3e3})})}var v="idle",x="pending",S="resolved",w="rejected";function y(e){var t=e.searchImages,c=Object(n.useState)(""),a=Object(s.a)(c,2),r=a[0],o=a[1],l=Object(n.useState)(1),u=Object(s.a)(l,2),b=u[0],g=u[1],f=Object(n.useState)([]),y=Object(s.a)(f,2),N=y[0],k=y[1],I=Object(n.useState)(null),C=Object(s.a)(I,2),F=C[0],E=C[1],L=Object(n.useState)(v),T=Object(s.a)(L,2),A=T[0],B=T[1];t!==r&&(o(t),g(1),k([])),Object(n.useEffect)((function(){r&&(B(x),h.handleApi(r,b).then((function(e){k((function(t){return[].concat(Object(j.a)(t),Object(j.a)(e.hits))})),B(S)})).catch((function(e){E(e),B(w)})))}),[b,t,r]),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"});return"idle"===A?Object(i.jsx)("div",{className:"startMessage",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0442\u043e-\u0442\u043e \u0432 \u043f\u043e\u0438\u0441\u043a\u043e\u0432\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0435"}):"resolved"===A?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("ul",{className:"ImageGallery",children:N.map((function(e){return Object(i.jsx)(d,{littleImage:e.webformatURL,largeImage:e.largeImageURL,id:e.id,tags:e.tags},e.webformatURL)}))}),N.length>0&&Object(i.jsx)(m,{onClick:function(){g((function(e){return e+1}))}})]}):"pending"===A?Object(i.jsx)(p,{}):"rejected"===A?Object(i.jsx)(O,{message:F.message}):void 0}c(35);var N=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),c=t[0],a=t[1];return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(l,{onSubmit:a}),Object(i.jsx)(y,{searchImages:c})]})};o.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(N,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.9934c8e2.chunk.js.map