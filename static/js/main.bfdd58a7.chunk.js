(this["webpackJsonpra-comps-store-func"]=this["webpackJsonpra-comps-store-func"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(8),i=n.n(a),r=(n(13),n(6)),o=n(7),j=n(3),u=n(0);function l(e){var t=e.item,n=e.getUserIdHandler;return Object(u.jsx)("li",{className:"list_item "+(t.active?"active":""),onClick:function(){n(t.id)},children:t.name})}function d(e){var t=e.list,n=e.getUserIdHandler;return Object(u.jsx)("div",{className:"list_container",children:Object(u.jsx)("ul",{className:"list",children:t.map((function(e){return Object(u.jsx)(l,{item:e,getUserIdHandler:n},e.id)}))})})}function b(e){var t=e.userInfo;if(!t)return Object(u.jsx)(u.Fragment,{});var n=t.id,c=t.name,s=t.avatar,a=t.details,i=a.city,r=a.company,o=a.position;return Object(u.jsxs)("div",{className:"container_details","data-id":n,children:[Object(u.jsx)("img",{src:s,alt:"avatar"}),Object(u.jsx)("span",{className:"container_details-name",children:c}),Object(u.jsxs)("span",{children:["City: ",i]}),Object(u.jsxs)("span",{children:["Company: ",r]}),Object(u.jsxs)("span",{children:["Position: ",o]})]})}function f(){return Object(u.jsx)("div",{className:"Loading",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})}var O="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/";function h(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(null),i=Object(j.a)(a,2),l=i[0],h=i[1],m=Object(c.useState)(null),x=Object(j.a)(m,2),v=x[0],p=x[1],g=Object(c.useState)(!1),N=Object(j.a)(g,2),I=N[0],y=N[1];Object(c.useEffect)((function(){y(!0),fetch(O+"users.json").then((function(e){return e.json()})).then((function(e){return s((function(t){return[].concat(Object(o.a)(t),Object(o.a)(e))}))})).then((function(){y(!1)}))}),[]),Object(c.useEffect)((function(){l&&(y(!0),fetch("".concat(O).concat(l,".json")).then((function(e){return e.json()})).then((function(e){p((function(t){return Object(r.a)(Object(r.a)({},t),e)}))})).then((function(){y(!1)})))}),[l]);return Object(u.jsx)("div",{className:"wrapper",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"container_column",children:[I&&!n.length&&Object(u.jsx)(f,{}),n.length&&Object(u.jsx)(d,{list:n,getUserIdHandler:function(e){s((function(t){return t.map((function(t){return t.id===e?t.active=!0:t.active=!1,t}))})),h(e)}})]}),Object(u.jsxs)("div",{className:"container_column",children:[l&&I&&Object(u.jsx)(f,{}),!I&&v&&Object(u.jsx)(b,{userInfo:v})]})]})})}var m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root")),m()}},[[15,1,2]]]);
//# sourceMappingURL=main.bfdd58a7.chunk.js.map