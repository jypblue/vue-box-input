!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("VueBoxInput",[],t):"object"==typeof exports?exports.VueBoxInput=t():e.VueBoxInput=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(e,t,n){"use strict";var r=n(9);t.a={name:"vue-box-input",props:{delayTime:{type:Number,default:100},emoji:{type:String,default:""}},data:function(){return{lastEditRange:null}},watch:{emoji:function(e){this.insertText(e)}},methods:{handleKeydown:function(e){13!==e.keyCode||e.shiftKey||(e.returnValue=!1,this.handleSend())},handlePaste:function(e){if(e.preventDefault(),!e.clipboardData||!e.clipboardData.items)throw new Error("浏览器不支持剪贴板粘贴");for(var t=e.clipboardData.items,n=0;n<t.length;n++)if(-1!==t[n].type.indexOf("image")){var o=t[n].getAsFile(),i=window.URL||window.webkitURL,a=i.createObjectURL(o);return console.log(a),0===o.size?!1:(console.log(o),this.$emit("image-paste",o),!1)}var s=e.clipboardData.getData("text/plain")||"";document.execCommand("insertText",!1,r.a(s))},handleBlur:function(){this.getCursorPos()},getCursorPos:function(){this.lastEditRange=window.getSelection().getRangeAt(0)},setBoxInputCursorPos:function(e){var t=this.$refs.inputbox,n=e;t.focus();var o=window.getSelection();if(this.lastEditRange&&(o.removeAllRanges(),o.addRange(this.lastEditRange)),"#text"!==o.anchorNode.nodeName){var i=document.createTextNode(n),a=o.anchorOffset,s=t.childNodes.length;s>0?"Number"===r.b(a)&&s>=a&&t.insertBefore(i,t.childNodes[a]):t.appendChild(i);var u=document.createRange();u.selectNodeContents(i),u.setStart(i,i.length),u.collapse(!0),o.removeAllRanges(),o.addRange(u)}else{var c=o.getRangeAt(0),d=c.startContainer,l=c.startOffset;d.insertData(l,n),c.setStart(d,l+n.length),c.collapse(!0),o.removeAllRanges(),o.addRange(c)}this.lastEditRange=o.getRangeAt(0)},insertText:function(e){this.setBoxInputCursorPos(e)},handleInput:function(){var e=this.$refs.inputbox.innerHTML;this.$emit("input",e)},clearMessage:function(){this.$refs.inputbox.innerHTML=""},handleSend:function(){this.$emit("message-send",this.$refs.inputbox.innerHTML)},handleScrollToEnd:function(){var e=this.$refs.inputbox;window.setTimeout(function(){e.scrollTop=e.scrollHeight},0)},handleFocusToEnd:function(){var e=this.$refs.inputbox;if(window.getSelection){e.focus();var t=window.getSelection();t.selectAllChildren(e),t.collapseToEnd()}else if(document.selection){var n=document.selection.createRange();n.moveToElementText(e),n.collapse(!1),n.select()}this.handleScrollToEnd()}}}},function(e,t,n){"use strict";function r(e,t){if(r.installed)return!1;e.component(o.a.name,o.a)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2);"undefined"!=typeof window&&window.Vue&&window.Vue.use(r),t.default=r},function(e,t,n){"use strict";function r(e){n(3)}var o=n(0),i=n(10),a=n(8),s=r,u=a(o.a,i.a,!1,s,null,null);t.a=u.exports},function(e,t,n){var r=n(4);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(6)("5243a9d6",r,!0,{})},function(e,t,n){t=e.exports=n(5)(!1),t.push([e.i,".vue-box-input{width:100%;height:auto;min-height:200px;border:1px solid #dadada;text-align:left;padding:5px 10px;outline:none;box-sizing:border-box}",""])},function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=d[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],o=0;o<n.parts.length;o++)a.push(i(n.parts[o]));d[n.id]={id:n.id,refs:1,parts:a}}}}function o(){var e=document.createElement("style");return e.type="text/css",l.appendChild(e),e}function i(e){var t,n,r=document.querySelector("style["+m+'~="'+e.id+'"]');if(r){if(h)return g;r.parentNode.removeChild(r)}if(x){var i=p++;r=f||(f=o()),t=a.bind(null,r,i,!1),n=a.bind(null,r,i,!0)}else r=o(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function a(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function s(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),v.ssrId&&e.setAttribute(m,t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(7),d={},l=u&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,h=!1,g=function(){},v=null,m="data-vue-ssr-id",x="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,o){h=n,v=o||{};var i=c(e,t);return r(i),function(t){for(var n=[],o=0;o<i.length;o++){var a=i[o],s=d[a.id];s.refs--,n.push(s)}t?(i=c(e,t),r(i)):i=[];for(var o=0;o<n.length;o++){var s=n[o];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete d[s.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=i[0],s=i[1],u=i[2],c=i[3],d={id:e+":"+o,css:s,media:u,sourceMap:c};r[a]?r[a].parts.push(d):n.push(r[a]={id:a,parts:[d]})}return n}},function(e,t){e.exports=function(e,t,n,r,o,i){var a,s=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(a=e,s=e.default);var c="function"==typeof s?s.options:s;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),o&&(c._scopeId=o);var d;if(i?(d=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=d):r&&(d=r),d){var l=c.functional,f=l?c.render:c.beforeCreate;l?(c._injectStyles=d,c.render=function(e,t){return d.call(t),f(e,t)}):c.beforeCreate=f?[].concat(f,d):[d]}return{esModule:a,exports:s,options:c}}},function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o});var r=function(e){return e.replace(/[<>]/g,function(e,t,n){switch(e){case"<":return"&lt;";case">":return"&gt;"}})},o=function(e){return void 0===e||null===e?e:e.constructor&&e.constructor.toString().match(/function\s*([^(]*)/)[1]}},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{ref:"inputbox",staticClass:"vue-box-input",attrs:{contenteditable:"true"},on:{keydown:e.handleKeydown,paste:e.handlePaste,blur:e.handleBlur,input:e.handleInput}})},o=[],i={render:r,staticRenderFns:o};t.a=i}])});
//# sourceMappingURL=vue-box-input.js.map