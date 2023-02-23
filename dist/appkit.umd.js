(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["appkit"] = factory(require("vue"));
	else
		root["appkit"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__203__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 744:
/***/ (function(__unused_webpack_module, exports) {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ 203:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__203__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(203);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ButtonSpinner.vue?vue&type=template&id=36255136

const _hoisted_1 = ["disabled"];
const _hoisted_2 = {
  key: 0,
  class: "animate-spin mr-2 h-4 w-4",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
};
const _hoisted_3 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("circle", {
  class: "opacity-25",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1);
const _hoisted_4 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1);
const _hoisted_5 = [_hoisted_3, _hoisted_4];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("button", {
    class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)(["btn", {
      'cursor-not-allowed': $props.loading
    }]),
    disabled: $props.loading
  }, [$props.loading ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("svg", _hoisted_2, _hoisted_5)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "default")], 10, _hoisted_1);
}
;// CONCATENATED MODULE: ./src/components/ButtonSpinner.vue?vue&type=template&id=36255136

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ButtonSpinner.vue?vue&type=script&lang=js
/* harmony default export */ var ButtonSpinnervue_type_script_lang_js = ({
  name: 'ButtonSpinner',
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  }
});
;// CONCATENATED MODULE: ./src/components/ButtonSpinner.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(744);
;// CONCATENATED MODULE: ./src/components/ButtonSpinner.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(ButtonSpinnervue_type_script_lang_js, [['render',render]])

/* harmony default export */ var ButtonSpinner = (__exports__);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Panel.vue?vue&type=template&id=1676e290

const Panelvue_type_template_id_1676e290_hoisted_1 = {
  class: "absolute inset-0 overflow-hidden"
};
const Panelvue_type_template_id_1676e290_hoisted_2 = {
  class: "fixed inset-y-0 right-0 max-w-full flex"
};
function Panelvue_type_template_id_1676e290_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DialogOverlay = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("DialogOverlay");
  const _component_TransitionChild = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("TransitionChild");
  const _component_Dialog = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("Dialog");
  const _component_TransitionRoot = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("TransitionRoot");
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_TransitionRoot, {
    as: "template",
    show: $props.open
  }, {
    default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_Dialog, {
      as: "div",
      class: "fixed z-10 inset-0 overflow-hidden",
      onClose: _cache[0] || (_cache[0] = $event => _ctx.$emit('update:open', false))
    }, {
      default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", Panelvue_type_template_id_1676e290_hoisted_1, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_TransitionChild, {
        as: "template",
        enter: "ease-in-out duration-500",
        "enter-from": "opacity-0",
        "enter-to": "opacity-100",
        leave: "ease-in-out duration-500",
        "leave-from": "opacity-100",
        "leave-to": "opacity-0"
      }, {
        default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_DialogOverlay, {
          class: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        })]),
        _: 1
      }), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", Panelvue_type_template_id_1676e290_hoisted_2, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_TransitionChild, {
        as: "template",
        enter: "transform transition ease-in-out duration-500 sm:duration-700",
        "enter-from": "translate-x-full",
        "enter-to": "translate-x-0",
        leave: "transform transition ease-in-out duration-500 sm:duration-700",
        "leave-from": "translate-x-0",
        "leave-to": "translate-x-full"
      }, {
        default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
          class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)(["w-screen", $options.sizeClass])
        }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "default")], 2)]),
        _: 3
      })])])]),
      _: 3
    })]),
    _: 3
  }, 8, ["show"]);
}
;// CONCATENATED MODULE: ./src/components/Panel.vue?vue&type=template&id=1676e290

;// CONCATENATED MODULE: ./node_modules/@headlessui/vue/dist/utils/match.js
function match_u(r,n,...a){if(r in n){let e=n[r];return typeof e=="function"?e(...a):e}let t=new Error(`Tried to handle "${r}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,match_u),t}

;// CONCATENATED MODULE: ./node_modules/@headlessui/vue/dist/utils/render.js
var N=(o=>(o[o.None=0]="None",o[o.RenderStrategy=1]="RenderStrategy",o[o.Static=2]="Static",o))(N||{}),render_S=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(render_S||{});function render_H({visible:r=!0,features:t=0,ourProps:e,theirProps:o,...i}){var a;let n=j(o,e),l=Object.assign(i,{props:n});if(r||t&2&&n.static)return y(l);if(t&1){let d=(a=n.unmount)==null||a?0:1;return match_u(d,{[0](){return null},[1](){return y({...i,props:{...n,hidden:!0,style:{display:"none"}}})}})}return y(l)}function y({props:r,attrs:t,slots:e,slot:o,name:i}){var m,h;let{as:n,...l}=T(r,["unmount","static"]),a=(m=e.default)==null?void 0:m.call(e,o),d={};if(o){let u=!1,c=[];for(let[p,f]of Object.entries(o))typeof f=="boolean"&&(u=!0),f===!0&&c.push(p);u&&(d["data-headlessui-state"]=c.join(" "))}if(n==="template"){if(a=render_b(a!=null?a:[]),Object.keys(l).length>0||Object.keys(t).length>0){let[u,...c]=a!=null?a:[];if(!v(u)||c.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${i} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(l).concat(Object.keys(t)).map(s=>s.trim()).filter((s,g,R)=>R.indexOf(s)===g).sort((s,g)=>s.localeCompare(g)).map(s=>`  - ${s}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(s=>`  - ${s}`).join(`
`)].join(`
`));let p=j((h=u.props)!=null?h:{},l),f=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.cloneVNode)(u,p);for(let s in p)s.startsWith("on")&&(f.props||(f.props={}),f.props[s]=p[s]);return f}return Array.isArray(a)&&a.length===1?a[0]:a}return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.h)(n,Object.assign({},l,d),{default:()=>a})}function render_b(r){return r.flatMap(t=>t.type===external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment?render_b(t.children):[t])}function j(...r){var o;if(r.length===0)return{};if(r.length===1)return r[0];let t={},e={};for(let i of r)for(let n in i)n.startsWith("on")&&typeof i[n]=="function"?((o=e[n])!=null||(e[n]=[]),e[n].push(i[n])):t[n]=i[n];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(e).map(i=>[i,void 0])));for(let i in e)Object.assign(t,{[i](n,...l){let a=e[i];for(let d of a){if(n instanceof Event&&n.defaultPrevented)return;d(n,...l)}}});return t}function K(r){let t=Object.assign({},r);for(let e in t)t[e]===void 0&&delete t[e];return t}function T(r,t=[]){let e=Object.assign({},r);for(let o of t)o in e&&delete e[o];return e}function v(r){return r==null?!1:typeof r.type=="string"||typeof r.type=="object"||typeof r.type=="function"}

;// CONCATENATED MODULE: ./node_modules/@headlessui/vue/dist/keyboard.js
var o=(r=>(r.Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r))(o||{});

;// CONCATENATED MODULE: ./node_modules/@headlessui/vue/dist/hooks/use-id.js
let e=0;function n(){return++e}function use_id_t(){return n()}

;// CONCATENATED MODULE: ./node_modules/@headlessui/vue/dist/internal/hidden.js
var hidden_a=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(hidden_a||{});let hidden_f=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(r,{slots:t,attrs:d}){return()=>{let{features:e,...o}=r,n={"aria-hidden":(e&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(e&4)===4&&(e&2)!==2&&{display:"none"}}};return render_H({ourProps:n,theirProps:o,slot:{},attrs:d,slots:t,name:"Hidden"})}}});

;// CONCATENATED MODULE: ./node_modules/@headlessui/vue/dist/utils/dom.js
function dom_o(n){var l;return n==null||n.value==null?null:(l=n.value.$el)!=null?l:n.value}

;// CONCATENATED MODULE: ./node_modules/@headlessui/vue/dist/utils/env.js
class t{constructor(){this.current=this.detect();this.currentId=0}set(e){this.current!==e&&(this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window=="undefined"||typeof document=="undefined"?"server":"client"}}let env_n=new t;

;// CONCATENATED MODULE: ./node_modules/@headlessui/vue/dist/utils/owner.js
function owner_m(r){if(env_n.isServer)return null;if(r instanceof Node)return r.ownerDocument;if(r!=null&&r.hasOwnProperty("value")){let n=dom_o(r);if(n)return n.ownerDocument}return document}

;// CONCATENATED MODULE: ./node_modules/@headlessui/vue/dist/utils/focus-management.js
let f=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var focus_management_N=(r=>(r[r.First=1]="First",r[r.Previous=2]="Previous",r[r.Next=4]="Next",r[r.Last=8]="Last",r[r.WrapAround=16]="WrapAround",r[r.NoScroll=32]="NoScroll",r))(focus_management_N||{}),focus_management_T=(o=>(o[o.Error=0]="Error",o[o.Overflow=1]="Overflow",o[o.Success=2]="Success",o[o.Underflow=3]="Underflow",o))(focus_management_T||{}),h=(n=>(n[n.Previous=-1]="Previous",n[n.Next=1]="Next",n))(h||{});function d(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(f)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var F=(n=>(n[n.Strict=0]="Strict",n[n.Loose=1]="Loose",n))(F||{});function S(e,t=0){var n;return e===((n=owner_m(e))==null?void 0:n.body)?!1:match_u(t,{[0](){return e.matches(f)},[1](){let l=e;for(;l!==null;){if(l.matches(f))return!0;l=l.parentElement}return!1}})}function focus_management_v(e){let t=E(e);b(()=>{t&&!S(t.activeElement,0)&&H(e)})}function H(e){e==null||e.focus({preventScroll:!0})}let w=["textarea","input"].join(",");function A(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,w))!=null?n:!1}function I(e,t=n=>n){return e.slice().sort((n,l)=>{let o=t(n),i=t(l);if(o===null||i===null)return 0;let r=o.compareDocumentPosition(i);return r&Node.DOCUMENT_POSITION_FOLLOWING?-1:r&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function D(e,t){return O(d(),t,{relativeTo:e})}function O(e,t,{sorted:n=!0,relativeTo:l=null,skipElements:o=[]}={}){var m;let i=(m=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?m:document,r=Array.isArray(e)?n?I(e):e:d(e);o.length>0&&r.length>1&&(r=r.filter(s=>!o.includes(s))),l=l!=null?l:i.activeElement;let x=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),p=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,r.indexOf(l))-1;if(t&4)return Math.max(0,r.indexOf(l))+1;if(t&8)return r.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),M=t&32?{preventScroll:!0}:{},c=0,a=r.length,u;do{if(c>=a||c+a<=0)return 0;let s=p+c;if(t&16)s=(s+a)%a;else{if(s<0)return 3;if(s>=a)return 1}u=r[s],u==null||u.focus(M),c+=x}while(u!==i.activeElement);return t&6&&A(u)&&u.select(),u.hasAttribute("tabindex")||u.setAttribute("tabindex","0"),2}

;// CONCATENATED MODULE: ./node_modules/@headlessui/vue/dist/hooks/use-window-event.js
function use_window_event_w(e,n,t){env_n.isServer||(0,external_commonjs_vue_commonjs2_vue_root_Vue_.watchEffect)(o=>{window.addEventListener(e,n,t),o(()=>window.removeEventListener(e,n,t))})}

;// CONCATENATED MODULE: ./node_modules/@headlessui/vue/dist/hooks/use-tab-direction.js
var use_tab_direction_d=(r=>(r[r.Forwards=0]="Forwards",r[r.Backwards=1]="Backwards",r))(use_tab_direction_d||{});function use_tab_direction_n(){let o=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(0);return use_window_event_w("keydown",e=>{e.key==="Tab"&&(o.value=e.shiftKey?1:0)}),o}

;// CONCATENATED MODULE: ./node_modules/@headlessui/vue/dist/hooks/use-event-listener.js
function use_event_listener_E(n,e,o,r){env_n.isServer||(0,external_commonjs_vue_commonjs2_vue_root_Vue_.watchEffect)(t=>{n=n!=null?n:window,n.addEventListener(e,o,r),t(()=>n.removeEventListener(e,o,r))})}

;// CONCATENATED MODULE: ./node_modules/@headlessui/vue/dist/utils/micro-task.js
function micro_task_t(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(o=>setTimeout(()=>{throw o}))}

;// CONCATENATED MODULE: ./node_modules/@headlessui/vue/dist/components/focus-trap/focus-trap.js
var P=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(P||{});let le=Object.assign((0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:Object,default:(0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(new Set)}},inheritAttrs:!1,setup(l,{attrs:i,slots:n,expose:r}){let t=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(null);r({el:t,$el:t});let o=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(()=>owner_m(t));U({ownerDocument:o},(0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(()=>Boolean(l.features&16)));let e=_({ownerDocument:o,container:t,initialFocus:(0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(()=>l.initialFocus)},(0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(()=>Boolean(l.features&2)));q({ownerDocument:o,container:t,containers:l.containers,previousActiveElement:e},(0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(()=>Boolean(l.features&8)));let s=use_tab_direction_n();function c(a){let m=dom_o(t);if(!m)return;(p=>p())(()=>{match_u(s.value,{[use_tab_direction_d.Forwards]:()=>{O(m,focus_management_N.First,{skipElements:[a.relatedTarget]})},[use_tab_direction_d.Backwards]:()=>{O(m,focus_management_N.Last,{skipElements:[a.relatedTarget]})}})})}let u=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(!1);function f(a){a.key==="Tab"&&(u.value=!0,requestAnimationFrame(()=>{u.value=!1}))}function L(a){var p;let m=new Set((p=l.containers)==null?void 0:p.value);m.add(t);let d=a.relatedTarget;d instanceof HTMLElement&&d.dataset.headlessuiFocusGuard!=="true"&&(B(m,d)||(u.value?O(dom_o(t),match_u(s.value,{[use_tab_direction_d.Forwards]:()=>focus_management_N.Next,[use_tab_direction_d.Backwards]:()=>focus_management_N.Previous})|focus_management_N.WrapAround,{relativeTo:a.target}):a.target instanceof HTMLElement&&H(a.target)))}return()=>{let a={},m={ref:t,onKeydown:f,onFocusout:L},{features:d,initialFocus:p,containers:G,...S}=l;return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.h)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment,[Boolean(d&4)&&(0,external_commonjs_vue_commonjs2_vue_root_Vue_.h)(hidden_f,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:c,features:hidden_a.Focusable}),render_H({ourProps:m,theirProps:{...i,...S},slot:a,attrs:i,slots:n,name:"FocusTrap"}),Boolean(d&4)&&(0,external_commonjs_vue_commonjs2_vue_root_Vue_.h)(hidden_f,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:c,features:hidden_a.Focusable})])}}}),{features:P});function U({ownerDocument:l},i){let n=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(null);function r(){var o;n.value||(n.value=(o=l.value)==null?void 0:o.activeElement)}function t(){!n.value||(H(n.value),n.value=null)}(0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(()=>{(0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(i,(o,e)=>{o!==e&&(o?r():t())},{immediate:!0})}),(0,external_commonjs_vue_commonjs2_vue_root_Vue_.onUnmounted)(t)}function _({ownerDocument:l,container:i,initialFocus:n},r){let t=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(null),o=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(!1);return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(()=>o.value=!0),(0,external_commonjs_vue_commonjs2_vue_root_Vue_.onUnmounted)(()=>o.value=!1),(0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(()=>{(0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)([i,n,r],(e,s)=>{if(e.every((u,f)=>(s==null?void 0:s[f])===u)||!r.value)return;let c=dom_o(i);!c||micro_task_t(()=>{var L,a;if(!o.value)return;let u=dom_o(n),f=(L=l.value)==null?void 0:L.activeElement;if(u){if(u===f){t.value=f;return}}else if(c.contains(f)){t.value=f;return}u?H(u):O(c,focus_management_N.First|focus_management_N.NoScroll)===focus_management_T.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),t.value=(a=l.value)==null?void 0:a.activeElement})},{immediate:!0,flush:"post"})}),t}function q({ownerDocument:l,container:i,containers:n,previousActiveElement:r},t){var o;use_event_listener_E((o=l.value)==null?void 0:o.defaultView,"focus",e=>{if(!t.value)return;let s=new Set(n==null?void 0:n.value);s.add(i);let c=r.value;if(!c)return;let u=e.target;u&&u instanceof HTMLElement?B(s,u)?(r.value=u,H(u)):(e.preventDefault(),e.stopPropagation(),H(c)):H(r.value)},!0)}function B(l,i){var n;for(let r of l)if((n=r.value)!=null&&n.contains(i))return!0;return!1}

;// CONCATENATED MODULE: ./node_modules/@headlessui/vue/dist/hooks/use-inert-others.js
let l="body > *",i=new Set,r=new Map;function u(t){t.setAttribute("aria-hidden","true"),t.inert=!0}function s(t){let n=r.get(t);!n||(n["aria-hidden"]===null?t.removeAttribute("aria-hidden"):t.setAttribute("aria-hidden",n["aria-hidden"]),t.inert=n.inert)}function use_inert_others_g(t,n=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(!0)){(0,external_commonjs_vue_commonjs2_vue_root_Vue_.watchEffect)(d=>{if(!n.value||!t.value)return;let a=t.value,o=owner_m(a);if(!!o){i.add(a);for(let e of r.keys())e.contains(a)&&(s(e),r.delete(e));o.querySelectorAll(l).forEach(e=>{if(e instanceof HTMLElement){for(let f of i)if(e.contains(f))return;i.size===1&&(r.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),u(e))}}),d(()=>{if(i.delete(a),i.size>0)o.querySelectorAll(l).forEach(e=>{if(e instanceof HTMLElement&&!r.has(e)){for(let f of i)if(e.contains(f))return;r.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),u(e)}});else for(let e of r.keys())s(e),r.delete(e)})}})}

;// CONCATENATED MODULE: ./node_modules/@headlessui/vue/dist/internal/portal-force-root.js
let portal_force_root_e=Symbol("ForcePortalRootContext");function portal_force_root_u(){return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.inject)(portal_force_root_e,!1)}let portal_force_root_P=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(o,{slots:t,attrs:r}){return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.provide)(portal_force_root_e,o.force),()=>{let{force:f,...n}=o;return render_H({theirProps:n,ourProps:{},slot:{},slots:t,attrs:r,name:"ForcePortalRoot"})}}});

;// CONCATENATED MODULE: ./node_modules/@headlessui/vue/dist/components/portal/portal.js
function c(t){let r=owner_m(t);if(!r){if(t===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${t}`)}let o=r.getElementById("headlessui-portal-root");if(o)return o;let e=r.createElement("div");return e.setAttribute("id","headlessui-portal-root"),r.body.appendChild(e)}let portal_R=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(t,{slots:r,attrs:o}){let e=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(null),p=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(()=>owner_m(e)),n=portal_force_root_u(),u=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.inject)(g,null),l=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(n===!0||u==null?c(e.value):u.resolveTarget());return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watchEffect)(()=>{n||u!=null&&(l.value=u.resolveTarget())}),(0,external_commonjs_vue_commonjs2_vue_root_Vue_.onUnmounted)(()=>{var i,m;let a=(i=p.value)==null?void 0:i.getElementById("headlessui-portal-root");!a||l.value===a&&l.value.children.length<=0&&((m=l.value.parentElement)==null||m.removeChild(l.value))}),()=>{if(l.value===null)return null;let a={ref:e,"data-headlessui-portal":""};return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.h)(external_commonjs_vue_commonjs2_vue_root_Vue_.Teleport,{to:l.value},render_H({ourProps:a,theirProps:t,slot:{},attrs:o,slots:r,name:"Portal"}))}}}),g=Symbol("PortalGroupContext"),L=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(t,{attrs:r,slots:o}){let e=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.reactive)({resolveTarget(){return t.target}});return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.provide)(g,e),()=>{let{target:p,...n}=t;return render_H({theirProps:n,ourProps:{},slot:{},attrs:r,slots:o,name:"PortalGroup"})}}});

;// CONCATENATED MODULE: ./node_modules/@headlessui/vue/dist/internal/stack-context.js
let stack_context_u=Symbol("StackContext");var p=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(p||{});function stack_context_v(){return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.inject)(stack_context_u,()=>{})}function stack_context_S({type:o,enabled:r,element:e,onUpdate:i}){let a=stack_context_v();function t(...n){i==null||i(...n),a(...n)}(0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(()=>{(0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(r,(n,d)=>{n?t(0,o,e):d===!0&&t(1,o,e)},{immediate:!0,flush:"sync"})}),(0,external_commonjs_vue_commonjs2_vue_root_Vue_.onUnmounted)(()=>{r.value&&t(1,o,e)}),(0,external_commonjs_vue_commonjs2_vue_root_Vue_.provide)(stack_context_u,t)}

;// CONCATENATED MODULE: ./node_modules/@headlessui/vue/dist/components/description/description.js
let description_p=Symbol("DescriptionContext");function description_b(){let t=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.inject)(description_p,null);if(t===null)throw new Error("Missing parent");return t}function M({slot:t=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)({}),name:i="Description",props:o={}}={}){let e=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)([]);function s(n){return e.value.push(n),()=>{let r=e.value.indexOf(n);r!==-1&&e.value.splice(r,1)}}return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.provide)(description_p,{register:s,slot:t,name:i,props:o}),(0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(()=>e.value.length>0?e.value.join(" "):void 0)}let description_E=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({name:"Description",props:{as:{type:[Object,String],default:"p"},id:{type:String,default:()=>`headlessui-description-${use_id_t()}`}},setup(t,{attrs:i,slots:o}){let e=description_b();return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(()=>(0,external_commonjs_vue_commonjs2_vue_root_Vue_.onUnmounted)(e.register(t.id))),()=>{let{name:s="Description",slot:n=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)({}),props:r={}}=e,{id:d,...l}=t,c={...Object.entries(r).reduce((f,[a,g])=>Object.assign(f,{[a]:(0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(g)}),{}),id:d};return render_H({ourProps:c,theirProps:l,slot:n.value,attrs:i,slots:o,name:s})}}});

;// CONCATENATED MODULE: ./node_modules/@headlessui/vue/dist/internal/open-closed.js
let open_closed_n=Symbol("Context");var open_closed_l=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(open_closed_l||{});function C(){return open_closed_p()!==null}function open_closed_p(){return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.inject)(open_closed_n,null)}function open_closed_c(o){(0,external_commonjs_vue_commonjs2_vue_root_Vue_.provide)(open_closed_n,o)}

;// CONCATENATED MODULE: ./node_modules/@headlessui/vue/dist/hooks/use-document-event.js
function use_document_event_u(e,t,n){env_n.isServer||(0,external_commonjs_vue_commonjs2_vue_root_Vue_.watchEffect)(o=>{document.addEventListener(e,t,n),o(()=>document.removeEventListener(e,t,n))})}

;// CONCATENATED MODULE: ./node_modules/@headlessui/vue/dist/hooks/use-outside-click.js
function use_outside_click_y(f,m,i=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(()=>!0)){function a(e,u){if(!i.value||e.defaultPrevented)return;let n=u(e);if(n===null||!n.getRootNode().contains(n))return;let c=function o(t){return typeof t=="function"?o(t()):Array.isArray(t)||t instanceof Set?t:[t]}(f);for(let o of c){if(o===null)continue;let t=o instanceof HTMLElement?o:dom_o(o);if(t!=null&&t.contains(n)||e.composed&&e.composedPath().includes(t))return}return!S(n,F.Loose)&&n.tabIndex!==-1&&e.preventDefault(),m(e,n)}let r=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(null);use_document_event_u("mousedown",e=>{var u,n;i.value&&(r.value=((n=(u=e.composedPath)==null?void 0:u.call(e))==null?void 0:n[0])||e.target)},!0),use_document_event_u("click",e=>{!r.value||(a(e,()=>r.value),r.value=null)},!0),use_document_event_u("blur",e=>a(e,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}

;// CONCATENATED MODULE: ./node_modules/@headlessui/vue/dist/hooks/use-store.js
function m(t){let e=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.shallowRef)(t.getSnapshot());return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onUnmounted)(t.subscribe(()=>{e.value=t.getSnapshot()})),e}

;// CONCATENATED MODULE: ./node_modules/@headlessui/vue/dist/utils/disposables.js
function disposables_o(){let i=[],r=[],n={enqueue(e){r.push(e)},addEventListener(e,t,a,s){return e.addEventListener(t,a,s),n.add(()=>e.removeEventListener(t,a,s))},requestAnimationFrame(...e){let t=requestAnimationFrame(...e);n.add(()=>cancelAnimationFrame(t))},nextFrame(...e){n.requestAnimationFrame(()=>{n.requestAnimationFrame(...e)})},setTimeout(...e){let t=setTimeout(...e);n.add(()=>clearTimeout(t))},add(e){i.push(e)},style(e,t,a){let s=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:a}),this.add(()=>{Object.assign(e.style,{[t]:s})})},dispose(){for(let e of i.splice(0))e()},async workQueue(){for(let e of r.splice(0))await e()}};return n}

;// CONCATENATED MODULE: ./node_modules/@headlessui/vue/dist/utils/store.js
function a(o,r){let t=o(),n=new Set;return{getSnapshot(){return t},subscribe(e){return n.add(e),()=>n.delete(e)},dispatch(e,...s){let i=r[e].call(t,...s);i&&(t=i,n.forEach(c=>c()))}}}

;// CONCATENATED MODULE: ./node_modules/@headlessui/vue/dist/hooks/document-overflow/adjust-scrollbar-padding.js
function adjust_scrollbar_padding_c(){let o;return{before({doc:e}){var l;let n=e.documentElement;o=((l=e.defaultView)!=null?l:window).innerWidth-n.clientWidth},after({doc:e,d:n}){let t=e.documentElement,l=t.clientWidth-t.offsetWidth,r=o-l;n.style(t,"paddingRight",`${r}px`)}}}

;// CONCATENATED MODULE: ./node_modules/@headlessui/vue/dist/utils/platform.js
function platform_t(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function platform_i(){return/Android/gi.test(window.navigator.userAgent)}function platform_n(){return platform_t()||platform_i()}

;// CONCATENATED MODULE: ./node_modules/@headlessui/vue/dist/hooks/document-overflow/handle-ios-locking.js
function handle_ios_locking_p(){if(!platform_t())return{};let o;return{before(){o=window.pageYOffset},after({doc:r,d:l,meta:s}){function i(e){return s.containers.flatMap(t=>t()).some(t=>t.contains(e))}l.style(r.body,"marginTop",`-${o}px`),window.scrollTo(0,0);let n=null;l.addEventListener(r,"click",e=>{if(e.target instanceof HTMLElement)try{let t=e.target.closest("a");if(!t)return;let{hash:c}=new URL(t.href),a=r.querySelector(c);a&&!i(a)&&(n=a)}catch{}},!0),l.addEventListener(r,"touchmove",e=>{e.target instanceof HTMLElement&&!i(e.target)&&e.preventDefault()},{passive:!1}),l.add(()=>{window.scrollTo(0,window.pageYOffset+o),n&&n.isConnected&&(n.scrollIntoView({block:"nearest"}),n=null)})}}}

;// CONCATENATED MODULE: ./node_modules/@headlessui/vue/dist/hooks/document-overflow/prevent-scroll.js
function prevent_scroll_l(){return{before({doc:e,d:o}){o.style(e.documentElement,"overflow","hidden")}}}

;// CONCATENATED MODULE: ./node_modules/@headlessui/vue/dist/hooks/document-overflow/overflow-store.js
function overflow_store_m(e){let n={};for(let t of e)Object.assign(n,t(n));return n}let overflow_store_a=a(()=>new Map,{PUSH(e,n){var o;let t=(o=this.get(e))!=null?o:{doc:e,count:0,d:disposables_o(),meta:new Set};return t.count++,t.meta.add(n),this.set(e,t),this},POP(e,n){let t=this.get(e);return t&&(t.count--,t.meta.delete(n)),this},SCROLL_PREVENT({doc:e,d:n,meta:t}){let o={doc:e,d:n,meta:overflow_store_m(t)},c=[handle_ios_locking_p(),adjust_scrollbar_padding_c(),prevent_scroll_l()];c.forEach(({before:r})=>r==null?void 0:r(o)),c.forEach(({after:r})=>r==null?void 0:r(o))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});overflow_store_a.subscribe(()=>{let e=overflow_store_a.getSnapshot(),n=new Map;for(let[t]of e)n.set(t,t.documentElement.style.overflow);for(let t of e.values()){let o=n.get(t.doc)==="hidden",c=t.count!==0;(c&&!o||!c&&o)&&overflow_store_a.dispatch(t.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",t),t.count===0&&overflow_store_a.dispatch("TEARDOWN",t)}});

;// CONCATENATED MODULE: ./node_modules/@headlessui/vue/dist/hooks/document-overflow/use-document-overflow.js
function use_document_overflow_d(t,a,n){let i=m(overflow_store_a),l=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(()=>{let e=t.value?i.value.get(t.value):void 0;return e?e.count>0:!1});return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)([t,a],([e,m],[r],o)=>{if(!e||!m)return;overflow_store_a.dispatch("PUSH",e,n);let f=!1;o(()=>{f||(overflow_store_a.dispatch("POP",r!=null?r:e,n),f=!0)})},{immediate:!0}),l}

;// CONCATENATED MODULE: ./node_modules/@headlessui/vue/dist/components/dialog/dialog.js
var ve=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ve||{});let dialog_L=Symbol("DialogContext");function dialog_P(t){let r=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.inject)(dialog_L,null);if(r===null){let e=new Error(`<${t} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(e,dialog_P),e}return r}let k="DC8F892D-2EBD-447C-A4C8-A03058436FF4",je=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:k},initialFocus:{type:Object,default:null},id:{type:String,default:()=>`headlessui-dialog-${use_id_t()}`}},emits:{close:t=>!0},setup(t,{emit:r,attrs:e,slots:u,expose:n}){var $;let l=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(!1);(0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(()=>{l.value=!0});let s=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(0),f=open_closed_p(),m=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(()=>t.open===k&&f!==null?(f.value&open_closed_l.Open)===open_closed_l.Open:t.open),w=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(new Set),c=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(null),A=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(null),x=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(()=>owner_m(c));if(n({el:c,$el:c}),!(t.open!==k||f!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof m.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${m.value===k?void 0:t.open}`);let g=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(()=>l.value&&m.value?0:1),F=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(()=>g.value===0),R=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(()=>s.value>1),q=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.inject)(dialog_L,null)!==null,G=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(()=>R.value?"parent":"leaf"),B=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(()=>f!==null?(f.value&open_closed_l.Closing)===open_closed_l.Closing:!1),V=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(()=>!R.value||B.value?!1:F.value);use_inert_others_g(c,V),stack_context_S({type:"Dialog",enabled:(0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(()=>g.value===0),element:c,onUpdate:(a,o,d)=>{if(o==="Dialog")return match_u(a,{[p.Add](){w.value.add(d),s.value+=1},[p.Remove](){w.value.delete(d),s.value-=1}})}});let z=M({name:"DialogDescription",slot:(0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(()=>({open:m.value}))}),E=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(null),S={titleId:E,panelRef:(0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(null),dialogState:g,setTitleId(a){E.value!==a&&(E.value=a)},close(){r("close",!1)}};(0,external_commonjs_vue_commonjs2_vue_root_Vue_.provide)(dialog_L,S);function H(){var o,d,h;return[...Array.from((d=(o=x.value)==null?void 0:o.querySelectorAll("html > *, body > *, [data-headlessui-portal]"))!=null?d:[]).filter(p=>!(p===document.body||p===document.head||!(p instanceof HTMLElement)||p.contains(dom_o(A))||S.panelRef.value&&p.contains(S.panelRef.value))),(h=S.panelRef.value)!=null?h:c.value]}let J=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(()=>!(!F.value||R.value));use_outside_click_y(()=>H(),(a,o)=>{S.close(),(0,external_commonjs_vue_commonjs2_vue_root_Vue_.nextTick)(()=>o==null?void 0:o.focus())},J);let Q=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(()=>!(R.value||g.value!==0));use_event_listener_E(($=x.value)==null?void 0:$.defaultView,"keydown",a=>{!Q.value||a.defaultPrevented||a.key===o.Escape&&(a.preventDefault(),a.stopPropagation(),S.close())});let W=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(()=>!(B.value||g.value!==0||q));return use_document_overflow_d(x,W,a=>{var o;return{containers:[...(o=a.containers)!=null?o:[],H]}}),(0,external_commonjs_vue_commonjs2_vue_root_Vue_.watchEffect)(a=>{if(g.value!==0)return;let o=dom_o(c);if(!o)return;let d=new IntersectionObserver(h=>{for(let p of h)p.boundingClientRect.x===0&&p.boundingClientRect.y===0&&p.boundingClientRect.width===0&&p.boundingClientRect.height===0&&S.close()});d.observe(o),a(()=>d.disconnect())}),()=>{let{id:a,open:o,initialFocus:d,...h}=t,p={...e,ref:c,id:a,role:"dialog","aria-modal":g.value===0?!0:void 0,"aria-labelledby":E.value,"aria-describedby":z.value},X={open:g.value===0};return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.h)(portal_force_root_P,{force:!0},()=>[(0,external_commonjs_vue_commonjs2_vue_root_Vue_.h)(portal_R,()=>(0,external_commonjs_vue_commonjs2_vue_root_Vue_.h)(L,{target:c.value},()=>(0,external_commonjs_vue_commonjs2_vue_root_Vue_.h)(portal_force_root_P,{force:!1},()=>(0,external_commonjs_vue_commonjs2_vue_root_Vue_.h)(le,{initialFocus:d,containers:w,features:F.value?match_u(G.value,{parent:le.features.RestoreFocus,leaf:le.features.All&~le.features.FocusLock}):le.features.None},()=>render_H({ourProps:p,theirProps:h,slot:X,attrs:e,slots:u,visible:g.value===0,features:N.RenderStrategy|N.Static,name:"Dialog"}))))),(0,external_commonjs_vue_commonjs2_vue_root_Vue_.h)(hidden_f,{features:hidden_a.Hidden,ref:A})])}}}),Ke=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({name:"DialogOverlay",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:()=>`headlessui-dialog-overlay-${use_id_t()}`}},setup(t,{attrs:r,slots:e}){let u=dialog_P("DialogOverlay");function n(l){l.target===l.currentTarget&&(l.preventDefault(),l.stopPropagation(),u.close())}return()=>{let{id:l,...s}=t;return render_H({ourProps:{id:l,"aria-hidden":!0,onClick:n},theirProps:s,slot:{open:u.dialogState.value===0},attrs:r,slots:e,name:"DialogOverlay"})}}}),Ne=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({name:"DialogBackdrop",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:()=>`headlessui-dialog-backdrop-${use_id_t()}`}},inheritAttrs:!1,setup(t,{attrs:r,slots:e,expose:u}){let n=dialog_P("DialogBackdrop"),l=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(null);return u({el:l,$el:l}),(0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(()=>{if(n.panelRef.value===null)throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.")}),()=>{let{id:s,...f}=t,m={id:s,ref:l,"aria-hidden":!0};return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.h)(portal_force_root_P,{force:!0},()=>(0,external_commonjs_vue_commonjs2_vue_root_Vue_.h)(portal_R,()=>render_H({ourProps:m,theirProps:{...r,...f},slot:{open:n.dialogState.value===0},attrs:r,slots:e,name:"DialogBackdrop"})))}}}),_e=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:()=>`headlessui-dialog-panel-${use_id_t()}`}},setup(t,{attrs:r,slots:e,expose:u}){let n=dialog_P("DialogPanel");u({el:n.panelRef,$el:n.panelRef});function l(s){s.stopPropagation()}return()=>{let{id:s,...f}=t,m={id:s,ref:n.panelRef,onClick:l};return render_H({ourProps:m,theirProps:f,slot:{open:n.dialogState.value===0},attrs:r,slots:e,name:"DialogPanel"})}}}),Ue=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({name:"DialogTitle",props:{as:{type:[Object,String],default:"h2"},id:{type:String,default:()=>`headlessui-dialog-title-${use_id_t()}`}},setup(t,{attrs:r,slots:e}){let u=dialog_P("DialogTitle");return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(()=>{u.setTitleId(t.id),(0,external_commonjs_vue_commonjs2_vue_root_Vue_.onUnmounted)(()=>u.setTitleId(null))}),()=>{let{id:n,...l}=t;return render_H({ourProps:{id:n},theirProps:l,slot:{open:u.dialogState.value===0},attrs:r,slots:e,name:"DialogTitle"})}}}),Ye=(/* unused pure expression or super */ null && (ie));

;// CONCATENATED MODULE: ./node_modules/@headlessui/vue/dist/utils/once.js
function once_l(r){let e={called:!1};return(...t)=>{if(!e.called)return e.called=!0,r(...t)}}

;// CONCATENATED MODULE: ./node_modules/@headlessui/vue/dist/components/transitions/utils/transition.js
function transition_m(e,...t){e&&t.length>0&&e.classList.add(...t)}function transition_d(e,...t){e&&t.length>0&&e.classList.remove(...t)}var transition_g=(i=>(i.Finished="finished",i.Cancelled="cancelled",i))(transition_g||{});function transition_F(e,t){let i=disposables_o();if(!e)return i.dispose;let{transitionDuration:n,transitionDelay:a}=getComputedStyle(e),[l,s]=[n,a].map(o=>{let[u=0]=o.split(",").filter(Boolean).map(r=>r.includes("ms")?parseFloat(r):parseFloat(r)*1e3).sort((r,c)=>c-r);return u});return l!==0?i.setTimeout(()=>t("finished"),l+s):t("finished"),i.add(()=>t("cancelled")),i.dispose}function transition_L(e,t,i,n,a,l){let s=disposables_o(),o=l!==void 0?once_l(l):()=>{};return transition_d(e,...a),transition_m(e,...t,...i),s.nextFrame(()=>{transition_d(e,...i),transition_m(e,...n),s.add(transition_F(e,u=>(transition_d(e,...n,...t),transition_m(e,...a),o(u))))}),s.add(()=>transition_d(e,...t,...i,...n,...a)),s.add(()=>o("cancelled")),s.dispose}

;// CONCATENATED MODULE: ./node_modules/@headlessui/vue/dist/components/transitions/transition.js
function transition_T(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let transition_O=Symbol("TransitionContext");var pe=(l=>(l.Visible="visible",l.Hidden="hidden",l))(pe||{});function me(){return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.inject)(transition_O,null)!==null}function Te(){let e=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.inject)(transition_O,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function ge(){let e=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.inject)(R,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let R=Symbol("NestingContext");function x(e){return"children"in e?x(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function J(e){let t=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)([]),l=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(!1);(0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(()=>l.value=!0),(0,external_commonjs_vue_commonjs2_vue_root_Vue_.onUnmounted)(()=>l.value=!1);function s(n,r=render_S.Hidden){let i=t.value.findIndex(({id:f})=>f===n);i!==-1&&(match_u(r,{[render_S.Unmount](){t.value.splice(i,1)},[render_S.Hidden](){t.value[i].state="hidden"}}),!x(t)&&l.value&&(e==null||e()))}function g(n){let r=t.value.find(({id:i})=>i===n);return r?r.state!=="visible"&&(r.state="visible"):t.value.push({id:n,state:"visible"}),()=>s(n,render_S.Unmount)}return{children:t,register:g,unregister:s}}let Q=N.RenderStrategy,he=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:l,slots:s,expose:g}){let n=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(0);function r(){n.value|=open_closed_l.Opening,t("beforeEnter")}function i(){n.value&=~open_closed_l.Opening,t("afterEnter")}function f(){n.value|=open_closed_l.Closing,t("beforeLeave")}function S(){n.value&=~open_closed_l.Closing,t("afterLeave")}if(!me()&&C())return()=>(0,external_commonjs_vue_commonjs2_vue_root_Vue_.h)(Se,{...e,onBeforeEnter:r,onAfterEnter:i,onBeforeLeave:f,onAfterLeave:S},s);let d=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(null),a=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)("visible"),W=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(()=>e.unmount?render_S.Unmount:render_S.Hidden);g({el:d,$el:d});let{show:h,appear:N}=Te(),{register:A,unregister:L}=ge(),D={value:!0},c=use_id_t(),b={value:!1},I=J(()=>{!b.value&&a.value!=="hidden"&&(a.value="hidden",L(c),S())});(0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(()=>{let o=A(c);(0,external_commonjs_vue_commonjs2_vue_root_Vue_.onUnmounted)(o)}),(0,external_commonjs_vue_commonjs2_vue_root_Vue_.watchEffect)(()=>{if(W.value===render_S.Hidden&&!!c){if(h&&a.value!=="visible"){a.value="visible";return}match_u(a.value,{["hidden"]:()=>L(c),["visible"]:()=>A(c)})}});let P=transition_T(e.enter),j=transition_T(e.enterFrom),X=transition_T(e.enterTo),M=transition_T(e.entered),Y=transition_T(e.leave),Z=transition_T(e.leaveFrom),ee=transition_T(e.leaveTo);(0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(()=>{(0,external_commonjs_vue_commonjs2_vue_root_Vue_.watchEffect)(()=>{if(a.value==="visible"){let o=dom_o(d);if(o instanceof Comment&&o.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function te(o){let y=D.value&&!N.value,v=dom_o(d);!v||!(v instanceof HTMLElement)||y||(b.value=!0,h.value&&r(),h.value||f(),o(h.value?transition_L(v,P,j,X,M,E=>{b.value=!1,E===transition_g.Finished&&i()}):transition_L(v,Y,Z,ee,M,E=>{b.value=!1,E===transition_g.Finished&&(x(I)||(a.value="hidden",L(c),S()))})))}return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(()=>{(0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)([h],(o,y,v)=>{te(v),D.value=!1},{immediate:!0})}),(0,external_commonjs_vue_commonjs2_vue_root_Vue_.provide)(R,I),open_closed_c((0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(()=>match_u(a.value,{["visible"]:open_closed_l.Open,["hidden"]:open_closed_l.Closed})|n.value)),()=>{let{appear:o,show:y,enter:v,enterFrom:E,enterTo:Ce,entered:be,leave:ye,leaveFrom:Ee,leaveTo:Ve,..._}=e,ne={ref:d},re={..._,...N&&h&&env_n.isServer?{class:(0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)([_.class,...P,...j])}:{}};return render_H({theirProps:re,ourProps:ne,slot:{},slots:s,attrs:l,features:Q,visible:a.value==="visible",name:"TransitionChild"})}}}),ce=he,Se=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:l,slots:s}){let g=open_closed_p(),n=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(()=>e.show===null&&g!==null?(g.value&open_closed_l.Open)===open_closed_l.Open:e.show);(0,external_commonjs_vue_commonjs2_vue_root_Vue_.watchEffect)(()=>{if(![!0,!1].includes(n.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let r=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(n.value?"visible":"hidden"),i=J(()=>{r.value="hidden"}),f=(0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(!0),S={show:n,appear:(0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(()=>e.appear||!f.value)};return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(()=>{(0,external_commonjs_vue_commonjs2_vue_root_Vue_.watchEffect)(()=>{f.value=!1,n.value?r.value="visible":x(i)||(r.value="hidden")})}),(0,external_commonjs_vue_commonjs2_vue_root_Vue_.provide)(R,i),(0,external_commonjs_vue_commonjs2_vue_root_Vue_.provide)(transition_O,S),()=>{let d=T(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),a={unmount:e.unmount};return render_H({ourProps:{...a,as:"template"},theirProps:{},slot:{},slots:{...s,default:()=>[(0,external_commonjs_vue_commonjs2_vue_root_Vue_.h)(ce,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...l,...a,...d},s.default)]},attrs:{},features:Q,visible:r.value==="visible",name:"Transition"})}}});

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Panel.vue?vue&type=script&lang=js

/* harmony default export */ var Panelvue_type_script_lang_js = ({
  name: 'Panel',
  components: {
    Dialog: je,
    DialogOverlay: Ke,
    TransitionChild: he,
    TransitionRoot: Se
  },
  props: {
    open: {
      type: Boolean,
      default: false
    },
    size: String
  },
  computed: {
    sizeClass() {
      return this.size ? this.size : 'max-w-md';
    }
  }
});
;// CONCATENATED MODULE: ./src/components/Panel.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/components/Panel.vue




;
const Panel_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Panelvue_type_script_lang_js, [['render',Panelvue_type_template_id_1676e290_render]])

/* harmony default export */ var Panel = (Panel_exports_);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Modal.vue?vue&type=template&id=83fd973a

const Modalvue_type_template_id_83fd973a_hoisted_1 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
  class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
}, null, -1);
const Modalvue_type_template_id_83fd973a_hoisted_2 = {
  class: "flex items-center justify-center min-h-full p-4 sm:p-0"
};
const Modalvue_type_template_id_83fd973a_hoisted_3 = {
  class: "p-4 sm:p-6"
};
const Modalvue_type_template_id_83fd973a_hoisted_4 = {
  class: "block absolute top-0 right-0 pt-4 pr-4"
};
const Modalvue_type_template_id_83fd973a_hoisted_5 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M6 18L18 6M6 6l12 12"
})], -1);
const _hoisted_6 = [Modalvue_type_template_id_83fd973a_hoisted_5];
const _hoisted_7 = {
  class: "text-xl font-semibold text-gray-800 dark:text-gray-100"
};
function Modalvue_type_template_id_83fd973a_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_TransitionChild = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("TransitionChild");
  const _component_DialogPanel = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("DialogPanel");
  const _component_Dialog = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("Dialog");
  const _component_TransitionRoot = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("TransitionRoot");
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_TransitionRoot, {
    as: "template",
    show: $props.open
  }, {
    default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_Dialog, {
      as: "div",
      class: "relative z-10",
      onClose: _cache[1] || (_cache[1] = $event => $options.handleBackdropClose())
    }, {
      default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_TransitionChild, {
        as: "template",
        enter: "ease-out duration-300",
        "enter-from": "opacity-0",
        "enter-to": "opacity-100",
        leave: "ease-in duration-200",
        "leave-from": "opacity-100",
        "leave-to": "opacity-0"
      }, {
        default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [Modalvue_type_template_id_83fd973a_hoisted_1]),
        _: 1
      }), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
        class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)(["fixed z-10 inset-0 overflow-y-auto ease-out duration-300", $data.backdropClickAnimate])
      }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", Modalvue_type_template_id_83fd973a_hoisted_2, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_TransitionChild, {
        as: "template",
        enter: "ease-out duration-300",
        "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
        "enter-to": "opacity-100 translate-y-0 sm:scale-100",
        leave: "ease-in duration-200",
        "leave-from": "opacity-100 translate-y-0 sm:scale-100",
        "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      }, {
        default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_DialogPanel, {
          class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)([$options.sizeClass, "w-full relative bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all"])
        }, {
          default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", Modalvue_type_template_id_83fd973a_hoisted_3, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", Modalvue_type_template_id_83fd973a_hoisted_4, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("button", {
            tabindex: "-1",
            type: "button",
            class: "bg-white dark:bg-gray-800 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none",
            onClick: _cache[0] || (_cache[0] = $event => _ctx.$emit('update:open', false))
          }, _hoisted_6)]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("h3", _hoisted_7, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)($props.title), 1)]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "default")]),
          _: 3
        }, 8, ["class"])]),
        _: 3
      })])], 2)]),
      _: 3
    })]),
    _: 3
  }, 8, ["show"]);
}
;// CONCATENATED MODULE: ./src/components/Modal.vue?vue&type=template&id=83fd973a

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Modal.vue?vue&type=script&lang=js

/* harmony default export */ var Modalvue_type_script_lang_js = ({
  name: 'Modal',
  components: {
    Dialog: je,
    DialogPanel: _e,
    TransitionChild: he,
    TransitionRoot: Se
  },
  props: {
    open: {
      type: Boolean,
      default: false
    },
    backdropClose: {
      type: Boolean,
      default: false
    },
    title: String,
    size: String
  },
  data() {
    return {
      backdropClickAnimate: ""
    };
  },
  computed: {
    sizeClass() {
      return this.size ? this.size : 'sm:max-w-xl';
    }
  },
  methods: {
    handleBackdropClose() {
      if (this.backdropClose) {
        return this.$emit('update:open', false);
      }
      this.backdropClickAnimate = "scale-105";
      setTimeout(() => {
        this.backdropClickAnimate = "";
      }, 300);
    }
  }
});
;// CONCATENATED MODULE: ./src/components/Modal.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/components/Modal.vue




;
const Modal_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Modalvue_type_script_lang_js, [['render',Modalvue_type_template_id_83fd973a_render]])

/* harmony default export */ var Modal = (Modal_exports_);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Dropdown.vue?vue&type=template&id=772672eb

const Dropdownvue_type_template_id_772672eb_hoisted_1 = {
  class: "z-10",
  ref: "contentRef"
};
const Dropdownvue_type_template_id_772672eb_hoisted_2 = {
  class: "w-56 bg-white dark:bg-gray-800 rounded-md drop-shadow ring-1 ring-black ring-opacity-5"
};
function Dropdownvue_type_template_id_772672eb_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", null, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
    onClick: _cache[0] || (_cache[0] = $event => $options.toggle()),
    ref: "triggerRef"
  }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "trigger")], 512), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", Dropdownvue_type_template_id_772672eb_hoisted_1, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(external_commonjs_vue_commonjs2_vue_root_Vue_.Transition, {
    "enter-active-class": "transition ease-out duration-100",
    "enter-from-class": "transform opacity-0 scale-95",
    "enter-to-class": "transform opacity-100 scale-100",
    "leave-active-class": "transition ease-in duration-75",
    "leave-from-class": "transform opacity-100 scale-100",
    "leave-to-class": "transform opacity-0 scale-95"
  }, {
    default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.withDirectives)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", Dropdownvue_type_template_id_772672eb_hoisted_2, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "default")], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_.vShow, $data.isOpen]])]),
    _: 3
  })], 512)]);
}
;// CONCATENATED MODULE: ./src/components/Dropdown.vue?vue&type=template&id=772672eb

;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js


function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}


;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/math.js
var math_max = Math.max;
var math_min = Math.min;
var round = Math.round;
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/userAgent.js
function getUAString() {
  var uaData = navigator.userAgentData;

  if (uaData != null && uaData.brands) {
    return uaData.brands.map(function (item) {
      return item.brand + "/" + item.version;
    }).join(' ');
  }

  return navigator.userAgent;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js

function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js




function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }

  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }

  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;

  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }

  var _ref = isElement(element) ? getWindow(element) : window,
      visualViewport = _ref.visualViewport;

  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width: width,
    height: height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x: x,
    y: y
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js




function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js



function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js

function getComputedStyle_getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle_getComputedStyle(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js









function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
 // Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js



function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js




function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js




/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js








function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle_getComputedStyle(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());

  if (isIE && isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = getComputedStyle_getComputedStyle(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = getParentNode(element);

  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle_getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle_getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle_getComputedStyle(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/enums.js
var enums_top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [enums_top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var enums_placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/orderModifiers.js
 // source: https://stackoverflow.com/questions/49875255

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/debounce.js
function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/mergeByName.js
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/createPopper.js














var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if (false) { var _getComputedStyle, marginTop, marginRight, marginBottom, marginLeft, flipModifier, modifiers; }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if (false) {}

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (false) {}

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      if (false) {}

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}
var createPopper = /*#__PURE__*/(/* unused pure expression or super */ null && (popperGenerator())); // eslint-disable-next-line import/no-unused-modules


;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/eventListeners.js
 // eslint-disable-next-line import/no-unused-modules

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var eventListeners = ({
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getBasePlacement.js

function getBasePlacement(placement) {
  return placement.split('-')[0];
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation(placement) {
  return placement.split('-')[1];
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/computeOffsets.js




function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case enums_top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;

      default:
    }
  }

  return offsets;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js


function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_popperOffsets = ({
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/computeStyles.js







 // eslint-disable-next-line import/no-unused-modules

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      variation = _ref2.variation,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets,
      isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x,
      x = _offsets$x === void 0 ? 0 : _offsets$x,
      _offsets$y = offsets.y,
      y = _offsets$y === void 0 ? 0 : _offsets$y;

  var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = enums_top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);

      if (getComputedStyle_getComputedStyle(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === enums_top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : // $FlowFixMe[prop-missing]
      offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left || (placement === enums_top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : // $FlowFixMe[prop-missing]
      offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref4.x;
  y = _ref4.y;

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref5) {
  var state = _ref5.state,
      options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  if (false) { var transitionProperty; }

  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration,
    isFixed: state.options.strategy === 'fixed'
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_computeStyles = ({
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/applyStyles.js

 // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function applyStyles_effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_applyStyles = ({
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: applyStyles_effect,
  requires: ['computeStyles']
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/offset.js

 // eslint-disable-next-line import/no-unused-modules

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, enums_top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = enums_placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_offset = ({
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var getOppositeVariationPlacement_hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return getOppositeVariationPlacement_hash[matched];
  });
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js




function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();

    if (layoutViewport || !layoutViewport && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js




 // Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = math_max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = math_max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle_getComputedStyle(body || html).direction === 'rtl') {
    x += math_max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/contains.js

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js















function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === 'fixed');
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle_getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = math_max(rect.top, accRect.top);
    accRect.right = math_min(rect.right, accRect.right);
    accRect.bottom = math_min(rect.bottom, accRect.bottom);
    accRect.left = math_max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js

function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/detectOverflow.js








 // eslint-disable-next-line import/no-unused-modules

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$strategy = _options.strategy,
      strategy = _options$strategy === void 0 ? state.strategy : _options$strategy,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [enums_top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js




function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? enums_placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements;

    if (false) {}
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/flip.js






 // eslint-disable-next-line import/no-unused-modules

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [enums_top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : enums_top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_flip = ({
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/within.js

function within(min, value, max) {
  return math_max(min, math_min(value, max));
}
function withinMaxClamp(min, value, max) {
  var v = within(min, value, max);
  return v > max ? max : v;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js












function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var _offsetModifierState$;

    var mainSide = mainAxis === 'y' ? enums_top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = offset + overflow[mainSide];
    var max = offset - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? math_min(min, tetherMin) : min, offset, tether ? math_max(max, tetherMax) : max);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _offsetModifierState$2;

    var _mainSide = mainAxis === 'x' ? enums_top : left;

    var _altSide = mainAxis === 'x' ? bottom : right;

    var _offset = popperOffsets[altAxis];

    var _len = altAxis === 'y' ? 'height' : 'width';

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var isOriginSide = [enums_top, left].indexOf(basePlacement) !== -1;

    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;

    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;

    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;

    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_preventOverflow = ({
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/arrow.js









 // eslint-disable-next-line import/no-unused-modules

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? enums_top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function arrow_effect(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (false) {}

  if (!contains(state.elements.popper, arrowElement)) {
    if (false) {}

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_arrow = ({
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: arrow_effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/hide.js



function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [enums_top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_hide = ({
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/popper.js










var defaultModifiers = [eventListeners, modifiers_popperOffsets, modifiers_computeStyles, modifiers_applyStyles, modifiers_offset, modifiers_flip, modifiers_preventOverflow, modifiers_arrow, modifiers_hide];
var popper_createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules


;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Dropdown.vue?vue&type=script&lang=js

/* harmony default export */ var Dropdownvue_type_script_lang_js = ({
  name: "Dropdown",
  data() {
    return {
      isOpen: false,
      popperInstance: null
    };
  },
  methods: {
    close(event) {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false;
      }
    },
    toggle() {
      this.isOpen = !this.isOpen;
      this.popperInstance.update();
    }
  },
  mounted() {
    document.addEventListener('click', this.close);
    this.popperInstance = popper_createPopper(this.$refs["triggerRef"], this.$refs["contentRef"], {
      placement: 'bottom-end',
      modifiers: [{
        name: 'offset',
        options: {
          offset: [0, 4]
        }
      }]
    });
  },
  beforeUnmount() {
    document.removeEventListener('click', this.close);
    if (this.popperInstance) {
      this.popperInstance.destroy();
      this.popperInstance = null;
    }
  }
});
;// CONCATENATED MODULE: ./src/components/Dropdown.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/components/Dropdown.vue




;
const Dropdown_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Dropdownvue_type_script_lang_js, [['render',Dropdownvue_type_template_id_772672eb_render]])

/* harmony default export */ var Dropdown = (Dropdown_exports_);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Pagination.vue?vue&type=template&id=7bf51d9e

const Paginationvue_type_template_id_7bf51d9e_hoisted_1 = {
  class: "relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
};
function Paginationvue_type_template_id_7bf51d9e_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("nav", Paginationvue_type_template_id_7bf51d9e_hoisted_1, [((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)($props.links, (link, index) => {
    return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveDynamicComponent)(link.url ? 'Link' : 'span'), {
      key: index,
      href: link.url,
      innerHTML: link.label,
      class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)(["first:rounded-l-md last:rounded-r-md bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 inline-flex relative items-center px-3.5 py-1.5 border text-sm font-medium", [link.url ? 'hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-200' : 'cursor-not-allowed text-gray-400 dark:text-gray-600', link.active ? 'z-10 bg-primary-50 border-primary-500 text-primary-600' : '']])
    }, null, 8, ["href", "innerHTML", "class"]);
  }), 128))]);
}
;// CONCATENATED MODULE: ./src/components/Pagination.vue?vue&type=template&id=7bf51d9e

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Pagination.vue?vue&type=script&lang=js
/* harmony default export */ var Paginationvue_type_script_lang_js = ({
  name: 'Pagination',
  props: {
    links: Object
  }
});
;// CONCATENATED MODULE: ./src/components/Pagination.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/components/Pagination.vue




;
const Pagination_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Paginationvue_type_script_lang_js, [['render',Paginationvue_type_template_id_7bf51d9e_render]])

/* harmony default export */ var Pagination = (Pagination_exports_);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/PaginationSimple.vue?vue&type=template&id=26e02975

const PaginationSimplevue_type_template_id_26e02975_hoisted_1 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("svg", {
  class: "h-5 w-5",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
  "clip-rule": "evenodd"
})], -1);
const PaginationSimplevue_type_template_id_26e02975_hoisted_2 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", null, "Previous", -1);
const PaginationSimplevue_type_template_id_26e02975_hoisted_3 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", null, "Next", -1);
const PaginationSimplevue_type_template_id_26e02975_hoisted_4 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("svg", {
  class: "h-5 w-5",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
  "clip-rule": "evenodd"
})], -1);
function PaginationSimplevue_type_template_id_26e02975_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, [((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveDynamicComponent)($props.links.prev ? 'Link' : 'div'), {
    href: $props.links.prev,
    class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)(["relative inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800", $props.links.prev ? ' hover:bg-gray-50 hover:dark:bg-gray-700 text-gray-700 dark:text-gray-200' : 'cursor-not-allowed bg-gray-50 border-gray-200 text-gray-400 dark:text-gray-600'])
  }, {
    default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [PaginationSimplevue_type_template_id_26e02975_hoisted_1, PaginationSimplevue_type_template_id_26e02975_hoisted_2]),
    _: 1
  }, 8, ["href", "class"])), ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveDynamicComponent)($props.links.next ? 'Link' : 'div'), {
    href: $props.links.next,
    class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)(["ml-3 relative inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800", $props.links.next ? 'hover:bg-gray-50 hover:dark:bg-gray-700 text-gray-700 dark:text-gray-200' : 'cursor-not-allowed bg-gray-50 border-gray-200 text-gray-400 dark:text-gray-600'])
  }, {
    default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [PaginationSimplevue_type_template_id_26e02975_hoisted_3, PaginationSimplevue_type_template_id_26e02975_hoisted_4]),
    _: 1
  }, 8, ["href", "class"]))], 64);
}
;// CONCATENATED MODULE: ./src/components/PaginationSimple.vue?vue&type=template&id=26e02975

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/PaginationSimple.vue?vue&type=script&lang=js
/* harmony default export */ var PaginationSimplevue_type_script_lang_js = ({
  name: 'PaginationSimple',
  props: {
    links: Object
  }
});
;// CONCATENATED MODULE: ./src/components/PaginationSimple.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/components/PaginationSimple.vue




;
const PaginationSimple_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(PaginationSimplevue_type_script_lang_js, [['render',PaginationSimplevue_type_template_id_26e02975_render]])

/* harmony default export */ var PaginationSimple = (PaginationSimple_exports_);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/alert/Main.vue?vue&type=template&id=20881c48

const Mainvue_type_template_id_20881c48_hoisted_1 = {
  class: "p-4"
};
const Mainvue_type_template_id_20881c48_hoisted_2 = {
  class: "flex items-start items-center"
};
const Mainvue_type_template_id_20881c48_hoisted_3 = {
  class: "flex-shrink-0"
};
const Mainvue_type_template_id_20881c48_hoisted_4 = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-7 w-7 text-blue-400",
  viewBox: "0 0 20 20",
  fill: "currentColor"
};
const Mainvue_type_template_id_20881c48_hoisted_5 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
  "clip-rule": "evenodd"
}, null, -1);
const Mainvue_type_template_id_20881c48_hoisted_6 = [Mainvue_type_template_id_20881c48_hoisted_5];
const Mainvue_type_template_id_20881c48_hoisted_7 = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-7 w-7 text-yellow-400",
  viewBox: "0 0 20 20",
  fill: "currentColor"
};
const _hoisted_8 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
  "clip-rule": "evenodd"
}, null, -1);
const _hoisted_9 = [_hoisted_8];
const _hoisted_10 = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-7 w-7 text-red-500",
  viewBox: "0 0 20 20",
  fill: "currentColor"
};
const _hoisted_11 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
  "clip-rule": "evenodd"
}, null, -1);
const _hoisted_12 = [_hoisted_11];
const _hoisted_13 = {
  key: 3,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-7 w-7 text-green-500",
  viewBox: "0 0 20 20",
  fill: "currentColor"
};
const _hoisted_14 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
  "clip-rule": "evenodd"
}, null, -1);
const _hoisted_15 = [_hoisted_14];
const _hoisted_16 = {
  class: "ml-3 w-0 flex-1"
};
const _hoisted_17 = {
  class: "text-sm text-gray-700"
};
const _hoisted_18 = {
  class: "ml-4 flex-shrink-0 flex"
};
const _hoisted_19 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", {
  class: "sr-only"
}, "Close", -1);
const _hoisted_20 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-4 w-4",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M6 18L18 6M6 6l12 12"
})], -1);
const _hoisted_21 = [_hoisted_19, _hoisted_20];
function Mainvue_type_template_id_20881c48_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Transition, {
    "enter-active-class": "transform ease-out duration-300 transition",
    "enter-from-class": "opacity-0 translate-x-0 translate-y-2",
    "enter-to-class": "opacity-100 translate-y-0",
    "leave-active-class": "transition ease-in duration-100",
    "leave-from-class": "opacity-100",
    "leave-to-class": "opacity-0"
  }, {
    default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.withDirectives)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
      class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)([$options.borderColor, "border-l-4 grid my-1.5 self-center max-w-sm w-full bg-white shadow-lg rounded pointer-events-auto ring-1 ring-black ring-opacity-5"]),
      onMouseover: _cache[1] || (_cache[1] = $event => $options.toggleTimer(true)),
      onMouseleave: _cache[2] || (_cache[2] = $event => $options.toggleTimer(false))
    }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", Mainvue_type_template_id_20881c48_hoisted_1, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", Mainvue_type_template_id_20881c48_hoisted_2, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", Mainvue_type_template_id_20881c48_hoisted_3, [$props.type === 'info' ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("svg", Mainvue_type_template_id_20881c48_hoisted_4, Mainvue_type_template_id_20881c48_hoisted_6)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), $props.type === 'warning' ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("svg", Mainvue_type_template_id_20881c48_hoisted_7, _hoisted_9)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), $props.type === 'error' ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("svg", _hoisted_10, _hoisted_12)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), $props.type === 'success' ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("svg", _hoisted_13, _hoisted_15)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true)]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_16, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("p", _hoisted_17, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)($props.message), 1)]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_18, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("button", {
      onClick: _cache[0] || (_cache[0] = (...args) => $options.closeAlert && $options.closeAlert(...args)),
      class: "bg-white inline-flex text-gray-400 hover:text-gray-500 focus:outline-none"
    }, _hoisted_21)])])])], 34), [[external_commonjs_vue_commonjs2_vue_root_Vue_.vShow, $data.isActive]])]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/components/alert/Main.vue?vue&type=template&id=20881c48

;// CONCATENATED MODULE: ./src/components/alert/timeout.js
// https://stackoverflow.com/a/3969760
class Timeout {
  constructor(callback, delay) {
    this.startedAt = Date.now();
    this.callback = callback;
    this.delay = delay;
    this.timer = setTimeout(callback, delay);
  }
  pause() {
    this.stop();
    this.delay -= Date.now() - this.startedAt;
  }
  resume() {
    this.stop();
    this.startedAt = Date.now();
    this.timer = setTimeout(this.callback, this.delay);
  }
  stop() {
    clearTimeout(this.timer);
  }
}
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/alert/Main.vue?vue&type=script&lang=js
const borderTypeMap = {
  success: 'border-green-500',
  info: 'border-blue-400',
  warning: 'border-yellow-400',
  error: 'border-red-500'
};

/* harmony default export */ var Mainvue_type_script_lang_js = ({
  name: 'Alert',
  props: {
    message: {
      type: String,
      required: true
    },
    type: String,
    // Visibility in milliseconds or false to disable
    duration: {
      type: [Number, Boolean],
      default: 5000
    }
  },
  data() {
    return {
      divWrapper: null,
      isActive: false,
      timer: null
    };
  },
  beforeMount() {
    this.createWrapperDiv();
  },
  mounted() {
    this.showAlert();
  },
  computed: {
    borderColor() {
      return borderTypeMap[this.type];
    }
  },
  methods: {
    createWrapperDiv() {
      this.divWrapper = document.querySelector('.dtc-alert-wrapper');
      if (this.divWrapper) return;

      // Create the div
      this.divWrapper = document.createElement('div');
      this.divWrapper.className = 'dtc-alert-wrapper fixed flex flex-col overflow-hidden top-0 bottom-0 left-0 right-0 z-50 pointer-events-none px-4 pt-3';

      // Add the div to the DOM
      document.body.appendChild(this.divWrapper);
    },
    showAlert() {
      this.divWrapper.insertAdjacentElement('afterbegin', this.$el);
      this.isActive = true;
      this.timer = this.duration !== false ? new Timeout(this.closeAlert, this.duration) : null;
    },
    toggleTimer(newVal) {
      if (this.timer) {
        newVal ? this.timer.pause() : this.timer.resume();
      }
    },
    closeAlert() {
      // Stop the timer
      this.timer && this.timer.stop();
      this.isActive = false;
      setTimeout(() => {
        // Remove the element
        if (typeof this.$el.remove !== 'undefined') {
          this.$el.remove();
        } else {
          this.$el.parentNode.removeChild(this.$el);
        }
      }, 150);
    }
  }
});
;// CONCATENATED MODULE: ./src/components/alert/Main.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/components/alert/Main.vue




;
const Main_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Mainvue_type_script_lang_js, [['render',Mainvue_type_template_id_20881c48_render]])

/* harmony default export */ var Main = (Main_exports_);
;// CONCATENATED MODULE: ./src/components/alert/index.js


/* harmony default export */ var components_alert = (() => {
  const showAlert = function (message, options = {}) {
    let props = {
      message,
      ...options
    };
    let vNode = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.h)(Main, {
      ...props
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.render)(vNode, typeof document !== 'undefined' && document.createElement('div'));
  };
  return {
    success(message, options = {}) {
      options.type = 'success';
      return showAlert(message, options);
    },
    error(message, options = {}) {
      options.type = 'error';
      return showAlert(message, options);
    },
    info(message, options = {}) {
      options.type = 'info';
      return showAlert(message, options);
    },
    warning(message, options = {}) {
      options.type = 'warning';
      return showAlert(message, options);
    }
  };
});
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/confirm/Main.vue?vue&type=template&id=02053aea

const Mainvue_type_template_id_02053aea_hoisted_1 = {
  class: "flex items-center justify-center min-h-screen p-4 text-center"
};
const Mainvue_type_template_id_02053aea_hoisted_2 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", {
  class: "hidden sm:inline-block sm:align-middle sm:h-screen",
  "aria-hidden": "true"
}, "​", -1);
const Mainvue_type_template_id_02053aea_hoisted_3 = {
  class: "inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
};
const Mainvue_type_template_id_02053aea_hoisted_4 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
  class: "mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-yellow-100"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-9 w-9 text-yellow-500",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z",
  "clip-rule": "evenodd"
})])], -1);
const Mainvue_type_template_id_02053aea_hoisted_5 = {
  class: "mt-3 text-center sm:mt-5"
};
const Mainvue_type_template_id_02053aea_hoisted_6 = {
  class: "text-lg font-medium text-gray-800"
};
const Mainvue_type_template_id_02053aea_hoisted_7 = {
  class: "text-sm text-gray-500"
};
const Mainvue_type_template_id_02053aea_hoisted_8 = {
  class: "mt-5 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense"
};
function Mainvue_type_template_id_02053aea_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DialogOverlay = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("DialogOverlay");
  const _component_TransitionChild = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("TransitionChild");
  const _component_ButtonSpinner = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("ButtonSpinner");
  const _component_Dialog = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("Dialog");
  const _component_TransitionRoot = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("TransitionRoot");
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_TransitionRoot, {
    as: "template",
    show: $data.open
  }, {
    default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_Dialog, {
      as: "div",
      class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)(["fixed z-10 inset-0 overflow-y-auto ease-out duration-300", $data.backdropClickAnimate]),
      onClose: _cache[1] || (_cache[1] = $event => $options.handleBackdropClose())
    }, {
      default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", Mainvue_type_template_id_02053aea_hoisted_1, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_TransitionChild, {
        as: "template",
        enter: "ease-out duration-300",
        "enter-from": "opacity-0",
        "enter-to": "opacity-100",
        leave: "ease-in duration-200",
        "leave-from": "opacity-100",
        "leave-to": "opacity-0"
      }, {
        default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_DialogOverlay, {
          class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        })]),
        _: 1
      }), Mainvue_type_template_id_02053aea_hoisted_2, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_TransitionChild, {
        as: "template",
        enter: "ease-out duration-300",
        "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
        "enter-to": "opacity-100 translate-y-0 sm:scale-100",
        leave: "ease-in duration-200",
        "leave-from": "opacity-100 translate-y-0 sm:scale-100",
        "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      }, {
        default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", Mainvue_type_template_id_02053aea_hoisted_3, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", null, [Mainvue_type_template_id_02053aea_hoisted_4, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", Mainvue_type_template_id_02053aea_hoisted_5, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("h3", Mainvue_type_template_id_02053aea_hoisted_6, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)($props.title), 1), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("p", Mainvue_type_template_id_02053aea_hoisted_7, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)($props.message), 1)])]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", Mainvue_type_template_id_02053aea_hoisted_8, [$props.cancelAction ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_ButtonSpinner, {
          key: 0,
          type: "button",
          class: "btn-light mb-3 sm:mb-0 w-full justify-center py-2.5 sm:col-start-1",
          onClick: $options.onCancel,
          loading: $data.cancelButtonLoading
        }, {
          default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)($props.cancelButtonText), 1)]),
          _: 1
        }, 8, ["onClick", "loading"])) : ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("button", {
          key: 1,
          type: "button",
          class: "btn btn-light mb-3 sm:mb-0 w-full justify-center py-2.5 sm:col-start-1",
          onClick: _cache[0] || (_cache[0] = $event => $data.open = false)
        }, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)($props.cancelButtonText), 1)), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_ButtonSpinner, {
          type: "button",
          class: "btn-primary w-full justify-center py-2.5 sm:col-start-2",
          onClick: $options.onConfirm,
          loading: $data.confirmButtonLoading
        }, {
          default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)($props.confirmButtonText), 1)]),
          _: 1
        }, 8, ["onClick", "loading"])])])]),
        _: 1
      })])]),
      _: 1
    }, 8, ["class"])]),
    _: 1
  }, 8, ["show"]);
}
;// CONCATENATED MODULE: ./src/components/confirm/Main.vue?vue&type=template&id=02053aea

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/confirm/Main.vue?vue&type=script&lang=js


/* harmony default export */ var confirm_Mainvue_type_script_lang_js = ({
  name: 'Confirm',
  components: {
    Dialog: je,
    DialogOverlay: Ke,
    TransitionChild: he,
    TransitionRoot: Se,
    ButtonSpinner: ButtonSpinner
  },
  props: {
    title: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    cancelAction: {
      type: Boolean,
      default: false
    },
    cancelButtonText: {
      type: String,
      default: 'Cancel'
    },
    confirmButtonText: {
      type: String,
      default: 'Confirm'
    },
    confirmCallback: {
      type: Function,
      default: () => {}
    },
    cancelCallback: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      open: false,
      confirmButtonLoading: false,
      cancelButtonLoading: false,
      backdropClickAnimate: ""
    };
  },
  mounted() {
    this.open = true;
  },
  methods: {
    handleBackdropClose() {
      this.backdropClickAnimate = "scale-105";
      setTimeout(() => {
        this.backdropClickAnimate = "";
      }, 300);
    },
    onConfirm() {
      // Provide instance access
      this.confirmCallback(this);
    },
    onCancel() {
      // Provide instance access
      this.cancelCallback(this);
    }
  }
});
;// CONCATENATED MODULE: ./src/components/confirm/Main.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/components/confirm/Main.vue




;
const confirm_Main_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(confirm_Mainvue_type_script_lang_js, [['render',Mainvue_type_template_id_02053aea_render]])

/* harmony default export */ var confirm_Main = (confirm_Main_exports_);
;// CONCATENATED MODULE: ./src/components/confirm/index.js


/* harmony default export */ var components_confirm = (() => {
  return function (options = {}) {
    let props = {
      ...options
    };
    let vNode = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.h)(confirm_Main, {
      ...props
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.render)(vNode, typeof document !== 'undefined' && document.createElement('div'));
  };
});
;// CONCATENATED MODULE: ./src/index.js
// Components







// Properties



// Components array
const components = [ButtonSpinner, Panel, Modal, Dropdown, Pagination, PaginationSimple];

// Vuejs Install
/* harmony default export */ var src_0 = ({
  install(app) {
    // Register components from array 
    components.map(component => {
      app.component(component.name, component);
    });

    // Add properties that are accessible in all components
    app.config.globalProperties.$alert = components_alert();
    app.config.globalProperties.$confirm = components_confirm();
  }
});
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (src_0);


}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=appkit.umd.js.map