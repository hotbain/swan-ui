!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.swan=t():e.swan=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=120)}({0:function(e,t){e.exports=function(e,t,n,r,o){var u,s=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(u=e,s=e.default);var a="function"==typeof s?s.options:s;t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),r&&(a._scopeId=r);var l;if(o?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},a._ssrRegister=l):n&&(l=n),l){var c=a.functional,f=c?a.render:a.beforeCreate;c?a.render=function(e,t){return l.call(t),f(e,t)}:a.beforeCreate=f?[].concat(f,l):[l]}return{esModule:u,exports:s,options:a}}},1:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),o=n.n(r),u=n(0),s=u(o.a,null,null,null,null);s.options.__file="src/modules/Base.vue",s.esModule&&Object.keys(s.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),t.default=s.exports},11:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),u=r(o),s=n(6),i=r(s);t.default={name:"SwButton",extends:u.default,components:{SwIcon:i.default},methods:{handleClick:function(e){this.$emit("click",e)}},props:{classPrefix:{type:String,default:"button"},phSize:{type:String,default:"sm"},phStyle:{type:String,default:"primary"},block:Boolean,radius:Boolean,hollow:Boolean,disabled:Boolean,active:Boolean,phIcon:String,stable:Boolean}}},12:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{class:e.classObject,on:{click:e.handleClick}},[e.phIcon?n("sw-icon",{attrs:{phIcon:e.phIcon,phSize:-1!=e.phIcon.indexOf("loading")?"sm":""}}):e._e(),e._v(" "),e._t("default")],2)},o=[];r._withStripped=!0;var u={render:r,staticRenderFns:o};t.a=u},120:function(e,t,n){e.exports=n(9)},2:function(e,t,n){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];e.unshift("");var o={};return e.forEach(function(e){r?o[f+u(e,t,n)]=!0:o[u(e,n)]=!0}),o}function o(e){var t=[],n={};for(var r in e){var o=e[r],u=c.default[r];if(o&&u)switch(void 0===u?"undefined":a(u)){case"boolean":o&&t.push(i(e,r));break;case"function":var s=u.call(this,o);"string"==typeof s?t.push(i(e,s)):n.push(i(e,s));break;default:t.push(i(e,u))}}return{classProps:t,styleObject:n}}function u(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=[];return n&&t&&r.push(t),e&&e!=t&&r.push(e),r.join(r.length>1?"-":"")}function s(e){return"ph-"+e}function i(e,t){if(!e.classMapping)return t;var n="string"==typeof t?e.classMapping[t]:t;return n||t}Object.defineProperty(t,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.getClassObject=r,t.getStyleProps=o,t.setPrefix=u,t.setPhPrefix=s;var l=n(5),c=function(e){return e&&e.__esModule?e:{default:e}}(l),f="ph-"},3:function(e,t,n){"use strict";function r(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(void 0===e)throw new Error("`warning(format, ...args)` requires a warning message argument");var o=0,u="Warning: "+e.replace(/%s/g,function(){return n[o++]});"undefined"!=typeof console&&console.warn(u)}function o(){return"BackCompat"===document.compatMode?document.body.clientHeight:document.documentElement.clientHeight}function u(e){var t=0;if(e.offsetParent)do{t+=e.offsetTop,e=e.offsetParent}while(e);return t>=0?t:0}Object.defineProperty(t,"__esModule",{value:!0}),t.warning=r,t.getClientHeight=o,t.getOffsetTop=u},4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);t.default={name:"SwBase",computed:{styleProps:function(){return(0,r.getStyleProps)(this.$props)},classObject:function(){return(0,r.getClassObject)(this.styleProps.classProps,this.$props.classPrefix)},styleObject:function(){return this.styleProps.styleObject}}}},5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),o=function(e,t){var n=null!=(e.join(",")+",").match(t.toLowerCase()+",")?t:"";return n||(0,r.warning)("属性的取值 %s 不在设定集合 %s 里",t,e.join(",")),n};t.default={phType:function(e){return o(["default","tacked","justify","segmente"],e)},phSize:function(e){return o(["default","lg","md","sm","xs","cover","contain"],e)},phStyle:function(e){return o(["default","primary","info","success","error","warning","danger","link","gray","light","positive","calm","balanced","energized","assertive","lightbrown","lightgray"],e)},phStatus:function(e){o(["diabled","active","enable"],e)},align:function(e){return o(["center","left","middle","auto","top","right","bottom","stretch","baseline"],e)},placement:function(e){return o(["top","bottom","right","left","left-full","right-full","full-screen"],e)},disabled:!0,active:!0,radius:!0,round:!0,clearfix:!0,clear:!0,phHref:!0,show:!0,hide:!0,block:!0,hollow:!0,error:!0,heading:!0,tail:!0,required:!0,stable:!0,visible:!0,zIndex:function(e){return"string"==typeof e?{zIndex:e}:"zindex"},border:function(e){return"string"==typeof e?{border:e}:"border"},padding:function(e){return"string"==typeof e?{padding:e}:"padding"},margin:function(e){return"string"==typeof e?{margin:e}:"margin"},radiusSize:function(e){return{WebkitBorderRadius:e,borderRadius:e}},width:function(e){return""+e},offset:function(e){return"offset-"+e}}},6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(7),o=n.n(r),u=n(8),s=n(0),i=s(o.a,u.a,null,null,null);i.options.__file="src/modules/icon/Icon.vue",i.esModule&&Object.keys(i.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] Icon.vue: functional components are not supported with templates, they should use render functions."),t.default=i.exports},7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default={name:"SwIcon",extends:o.default,props:{classPrefix:{type:String,default:"icon"},phIcon:{type:String,default:""},phStyle:{type:String,default:"primary"},phSize:{type:String,default:"sm"}}}},8:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("span",{class:["gfs-icon",(n={},n[e.classPrefix+"-"+e.phIcon]=e.phIcon,n),e.classObject]},[e._t("default")],2);var n},o=[];r._withStripped=!0;var u={render:r,staticRenderFns:o};t.a=u},9:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(11),o=n.n(r),u=n(12),s=n(0),i=s(o.a,u.a,null,null,null);i.options.__file="src/modules/button/Button.vue",i.esModule&&Object.keys(i.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] Button.vue: functional components are not supported with templates, they should use render functions."),t.default=i.exports}})});