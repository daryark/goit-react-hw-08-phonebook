"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[676],{4676:function(n,e,t){t.r(e),t.d(e,{default:function(){return $}});var r=t(2791),o=t(9434),i=t(9135),u="NOT_FOUND";var a=function(n,e){return n===e};function c(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,o=void 0===r?a:r,i=t.maxSize,c=void 0===i?1:i,s=t.resultEqualityCheck,l=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,o=0;o<r;o++)if(!n(e[o],t[o]))return!1;return!0}}(o),f=1===c?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:u},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(l):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var o=t[r];return r>0&&(t.splice(r,1),t.unshift(o)),o.value}return u}return{get:r,put:function(e,o){r(e)===u&&(t.unshift({key:e,value:o}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(c,l);function p(){var e=f.get(arguments);if(e===u){if(e=n.apply(null,arguments),s){var t=f.getEntries(),r=t.find((function(n){return s(n.value,e)}));r&&(e=r.value)}f.put(arguments,e)}return e}return p.clearCache=function(){return f.clear()},p}function s(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function l(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var o=function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var i,u=0,a={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(a=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var l=a,f=l.memoizeOptions,p=void 0===f?t:f,d=Array.isArray(p)?p:[p],h=s(r),m=n.apply(void 0,[function(){return u++,c.apply(null,arguments)}].concat(d)),x=n((function(){for(var n=[],e=h.length,t=0;t<e;t++)n.push(h[t].apply(null,arguments));return i=m.apply(null,n)}));return Object.assign(x,{resultFunc:c,memoizedResultFunc:m,dependencies:h,lastResult:function(){return i},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),x};return o}var f,p,d,h,m,x,v,g,b,y=l(c),j=function(n){return n.contactsData.contacts.items},w=function(n){return n.contactsData.contacts.isLoading},Z=y([j,function(n){return n.contactsData.filter}],(function(n,e){return n.filter((function(n){return n.name.trim().toLowerCase().includes(e.trim().toLowerCase())})).sort((function(n,e){return n.name.localeCompare(e.name)}))})),k=t(3634),z=t(168),C=t(7691),A=C.ZP.p(f||(f=(0,z.Z)(["\n  font-size: ","px;\n  margin-right: ","px;\n  display: inline-block;\n"])),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.spaces[4]})),S=C.ZP.li(p||(p=(0,z.Z)(["\n  border-bottom: 1px solid ",";\n  padding: 0 ","px;\n\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"])),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.spaces[5]})),F=C.ZP.button(d||(d=(0,z.Z)(["\n  padding: ","px;\n  color: ",";\n  border: none;\n  background-color: transparent;\n\n  svg {\n    width: ","px;\n    height: auto;\n    display: block;\n    transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  &:hover svg {\n    color: ",";\n  }\n"])),(function(n){return n.theme.spaces[4]}),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.colors.delete})),P=C.ZP.p(h||(h=(0,z.Z)(["\n  font-size: ","px;\n  font-weight: ",";\n  margin-top: ","px;\n  padding-left: ","px;\n  color: ",";\n"])),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.fontWeights.semiBold}),(function(n){return n.theme.spaces[5]}),(function(n){return n.theme.spaces[5]}),(function(n){return n.theme.colors.delete})),_=t(184),E=function(){var n=(0,o.v9)(Z),e=(0,o.I0)();return(0,_.jsx)(_.Fragment,{children:Boolean(n.length)?(0,_.jsx)("ul",{children:n.map((function(n){var t=n.name,r=n.phone,o=n.id;return(0,_.jsxs)(S,{children:[(0,_.jsxs)("div",{children:[(0,_.jsx)(A,{children:t}),(0,_.jsx)(A,{children:r})]}),(0,_.jsx)(F,{type:"button",onClick:function(){return function(n){e((0,k.GK)(n))}(o)},children:(0,_.jsx)(i.lp8,{})})]},o)}))}):(0,_.jsx)(P,{children:"Sorry, no matches found"})})},q=t(9439),D=C.ZP.form(m||(m=(0,z.Z)(["\n  padding: 0 ","px ","px;\n  position: relative;\n"])),(function(n){return n.theme.spaces[5]}),(function(n){return n.theme.spaces[5]})),I=C.ZP.button(x||(x=(0,z.Z)(["\n  padding: ","px\n    ","px;\n  padding-bottom: ","px;\n\n  font-size: ","px;\n  color: ",";\n  background-color: ",";\n\n  border: none;\n  border-radius: 3px;\n  box-shadow: none;\n  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    box-shadow: 0px -20px 15px inset rgba(14, 16, 21, 0.1);\n  }\n"])),(function(n){return n.theme.spaces[1]}),(function(n){return n.theme.spaces[3]}),(function(n){return n.theme.spaces[2]}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.colors.inverse}),(function(n){return n.theme.colors.accent})),L=C.ZP.input(v||(v=(0,z.Z)(["\n  margin: 0 ","px\n    ","px 0;\n  padding: ","px;\n  padding-left: ","px;\n  width: 130px;\n\n  border: 1px solid ",";\n  border-radius: 2px;\n\n  &:focus {\n    outline: 2px solid ",";\n    outline-offset: -2px;\n  }\n\n  &:disabled {\n    background-color: #efefef;\n    border-color: ",";\n  }\n"])),(function(n){return n.theme.spaces[2]}),(function(n){return n.theme.spaces[2]}),(function(n){return n.theme.spaces[2]}),(function(n){return n.theme.spaces[5]}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.secondary})),O=C.ZP.label(g||(g=(0,z.Z)(["\n  position: absolute;\n  transform: translate(-7px, 3px);\n\n  margin-left: ","px;\n\n  svg {\n    width: 14px;\n    color: ",";\n  }\n"])),(function(n){return n.theme.spaces[4]}),(function(n){return n.theme.colors.secondary})),B=(0,C.ZP)(O)(b||(b=(0,z.Z)(["\n  transform: translate(-8px, 13px);\n"])));function N(){var n=(0,r.useState)(""),e=(0,q.Z)(n,2),t=e[0],u=e[1],a=(0,r.useState)(""),c=(0,q.Z)(a,2),s=c[0],l=c[1],f=(0,o.v9)(j),p=(0,o.I0)(),d=function(n){var e=n.target;"name"===e.name&&u(e.value),"number"===e.name&&l(e.value)};return(0,_.jsxs)(D,{onSubmit:function(n){n.preventDefault(),f.some((function(n){return n.name.toLowerCase()===t.toLowerCase()}))?alert("".concat(t," is already in your contacts! Try to find in search.")):(p((0,k.uK)({name:t,phone:s})),u(""),l(""))},children:[(0,_.jsx)(O,{htmlFor:"name",children:(0,_.jsx)(i.q1E,{})}),(0,_.jsx)(L,{onChange:d,value:t,type:"text",name:"name",id:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,_.jsx)(O,{htmlFor:"number",children:(0,_.jsx)(i.DNl,{})}),(0,_.jsx)(L,{onChange:d,value:s,type:"tel",name:"number",id:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,_.jsx)(I,{type:"submit",children:"Add contact"})]})}var K=t(1538);function R(){var n=(0,o.v9)(j),e=(0,o.I0)();return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(B,{htmlFor:"filter",children:(0,_.jsx)(i.U41,{})}),(0,_.jsx)(L,{type:"text",name:"filter",id:"filter",onChange:function(n){return e((0,K.h)(n.target.value))},disabled:!n.length})]})}var T=t(9759),U=t(2512),W=t(1552);function $(){var n=(0,o.v9)(j),e=(0,o.v9)(w),t=(0,o.I0)();return(0,r.useEffect)((function(){t((0,k.K2)())}),[t]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(W.$0,{children:(0,_.jsxs)(W.W2,{children:[(0,_.jsx)(N,{}),(0,_.jsx)(U.z,{children:"Contacts"}),(0,_.jsx)(R,{}),!n.length&&!e&&(0,_.jsx)(P,{children:"You don't have contacts yet, add somebody!"}),Boolean(n.length)&&(0,_.jsx)(E,{})]})}),e&&(0,_.jsx)(T.a,{})]})}}}]);
//# sourceMappingURL=676.bd79e6b7.chunk.js.map