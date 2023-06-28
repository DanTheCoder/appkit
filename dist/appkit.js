import { openBlock as M, createElementBlock as re, normalizeClass as ie, createCommentVNode as We, renderSlot as Ue, createElementVNode as g, createBlock as ye, resolveDynamicComponent as yt, withCtx as R, Fragment as _t, renderList as er, createVNode as U, Transition as pn, withDirectives as vn, vShow as mn, cloneVNode as tr, h as F, inject as ee, provide as se, watchEffect as oe, ref as $, computed as k, defineComponent as X, onMounted as V, onUnmounted as ae, watch as Ge, Teleport as nr, reactive as rr, unref as _e, shallowRef as or, nextTick as ar, toDisplayString as Ee, resolveComponent as de, render as hn, createTextVNode as Jt } from "vue";
const ir = ["disabled"], lr = {
  key: 0,
  class: "animate-spin mr-2 h-4 w-4",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, sr = /* @__PURE__ */ g("circle", {
  class: "opacity-25",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), ur = /* @__PURE__ */ g("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), cr = [
  sr,
  ur
], gn = {
  __name: "ButtonSubmit",
  props: {
    loading: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (t, n) => (M(), re("button", {
      class: ie({ "cursor-not-allowed": e.loading }),
      disabled: e.loading
    }, [
      e.loading ? (M(), re("svg", lr, cr)) : We("", !0),
      Ue(t.$slots, "default")
    ], 10, ir));
  }
}, dr = {
  key: 0,
  class: "flex justify-between items-center"
}, fr = /* @__PURE__ */ g("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-4 h-4 mr-1"
}, [
  /* @__PURE__ */ g("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M15.75 19.5L8.25 12l7.5-7.5"
  })
], -1), pr = /* @__PURE__ */ g("span", null, "Prev", -1), vr = /* @__PURE__ */ g("span", null, "Next", -1), mr = /* @__PURE__ */ g("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-4 h-4 ml-1"
}, [
  /* @__PURE__ */ g("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M8.25 4.5l7.5 7.5-7.5 7.5"
  })
], -1), hr = {
  key: 1,
  class: "relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
}, gr = {
  __name: "Pagination",
  props: {
    // Laravel pagination data - meta.links for full and .links for simple
    links: Object,
    // Only next and previous buttons
    simple: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (t, n) => e.simple ? (M(), re("nav", dr, [
      (M(), ye(yt(e.links.prev ? "Link" : "div"), {
        href: e.links.prev,
        class: ie(["relative inline-flex items-center px-3.5 py-1.5 border text-sm font-medium rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800", e.links.prev ? " hover:bg-gray-50 hover:dark:bg-gray-700 text-gray-800 dark:text-gray-200" : "cursor-not-allowed bg-gray-50 border-gray-200 text-gray-400 dark:text-gray-600"])
      }, {
        default: R(() => [
          fr,
          pr
        ]),
        _: 1
      }, 8, ["href", "class"])),
      (M(), ye(yt(e.links.next ? "Link" : "div"), {
        href: e.links.next,
        class: ie(["ml-3 relative inline-flex items-center px-3.5 py-1.5 border text-sm font-medium rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800", e.links.next ? "hover:bg-gray-50 hover:dark:bg-gray-700 text-gray-800 dark:text-gray-200" : "cursor-not-allowed bg-gray-50 border-gray-200 text-gray-400 dark:text-gray-600"])
      }, {
        default: R(() => [
          vr,
          mr
        ]),
        _: 1
      }, 8, ["href", "class"]))
    ])) : (M(), re("nav", hr, [
      (M(!0), re(_t, null, er(e.links, (r, o) => (M(), ye(yt(r.url ? "Link" : "span"), {
        key: o,
        href: r.url,
        innerHTML: r.label,
        class: ie(["first:rounded-l-md last:rounded-r-md bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 inline-flex relative items-center px-3.5 py-1.5 border text-sm font-medium", [r.url ? "hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200" : "cursor-not-allowed text-gray-400 dark:text-gray-600", r.active ? "z-10 !bg-primary-50 border-primary-500 text-primary-600" : ""]])
      }, null, 8, ["href", "innerHTML", "class"]))), 128))
    ]));
  }
};
var q = "top", te = "bottom", ne = "right", Y = "left", Dt = "auto", Ke = [q, te, ne, Y], De = "start", qe = "end", yr = "clippingParents", yn = "viewport", Re = "popper", wr = "reference", Zt = /* @__PURE__ */ Ke.reduce(function(e, t) {
  return e.concat([t + "-" + De, t + "-" + qe]);
}, []), wn = /* @__PURE__ */ [].concat(Ke, [Dt]).reduce(function(e, t) {
  return e.concat([t, t + "-" + De, t + "-" + qe]);
}, []), br = "beforeRead", xr = "read", Or = "afterRead", Er = "beforeMain", kr = "main", $r = "afterMain", Cr = "beforeWrite", Sr = "write", Tr = "afterWrite", Ar = [br, xr, Or, Er, kr, $r, Cr, Sr, Tr];
function ue(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Q(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Te(e) {
  var t = Q(e).Element;
  return e instanceof t || e instanceof Element;
}
function Z(e) {
  var t = Q(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Lt(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Q(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Pr(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, a = t.elements[n];
    !Z(a) || !ue(a) || (Object.assign(a.style, r), Object.keys(o).forEach(function(l) {
      var i = o[l];
      i === !1 ? a.removeAttribute(l) : a.setAttribute(l, i === !0 ? "" : i);
    }));
  });
}
function _r(e) {
  var t = e.state, n = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var o = t.elements[r], a = t.attributes[r] || {}, l = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), i = l.reduce(function(s, u) {
        return s[u] = "", s;
      }, {});
      !Z(o) || !ue(o) || (Object.assign(o.style, i), Object.keys(a).forEach(function(s) {
        o.removeAttribute(s);
      }));
    });
  };
}
const Dr = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Pr,
  effect: _r,
  requires: ["computeStyles"]
};
function le(e) {
  return e.split("-")[0];
}
var Ce = Math.max, lt = Math.min, Le = Math.round;
function Ot() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function bn() {
  return !/^((?!chrome|android).)*safari/i.test(Ot());
}
function Be(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, a = 1;
  t && Z(e) && (o = e.offsetWidth > 0 && Le(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Le(r.height) / e.offsetHeight || 1);
  var l = Te(e) ? Q(e) : window, i = l.visualViewport, s = !bn() && n, u = (r.left + (s && i ? i.offsetLeft : 0)) / o, c = (r.top + (s && i ? i.offsetTop : 0)) / a, f = r.width / o, p = r.height / a;
  return {
    width: f,
    height: p,
    top: c,
    right: u + f,
    bottom: c + p,
    left: u,
    x: u,
    y: c
  };
}
function Bt(e) {
  var t = Be(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function xn(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Lt(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function fe(e) {
  return Q(e).getComputedStyle(e);
}
function Lr(e) {
  return ["table", "td", "th"].indexOf(ue(e)) >= 0;
}
function we(e) {
  return ((Te(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function ct(e) {
  return ue(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Lt(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    we(e)
  );
}
function en(e) {
  return !Z(e) || // https://github.com/popperjs/popper-core/issues/837
  fe(e).position === "fixed" ? null : e.offsetParent;
}
function Br(e) {
  var t = /firefox/i.test(Ot()), n = /Trident/i.test(Ot());
  if (n && Z(e)) {
    var r = fe(e);
    if (r.position === "fixed")
      return null;
  }
  var o = ct(e);
  for (Lt(o) && (o = o.host); Z(o) && ["html", "body"].indexOf(ue(o)) < 0; ) {
    var a = fe(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Qe(e) {
  for (var t = Q(e), n = en(e); n && Lr(n) && fe(n).position === "static"; )
    n = en(n);
  return n && (ue(n) === "html" || ue(n) === "body" && fe(n).position === "static") ? t : n || Br(e) || t;
}
function jt(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ze(e, t, n) {
  return Ce(e, lt(t, n));
}
function jr(e, t, n) {
  var r = ze(e, t, n);
  return r > n ? n : r;
}
function On() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function En(e) {
  return Object.assign({}, On(), e);
}
function kn(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var Fr = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, En(typeof t != "number" ? t : kn(t, Ke));
};
function Mr(e) {
  var t, n = e.state, r = e.name, o = e.options, a = n.elements.arrow, l = n.modifiersData.popperOffsets, i = le(n.placement), s = jt(i), u = [Y, ne].indexOf(i) >= 0, c = u ? "height" : "width";
  if (!(!a || !l)) {
    var f = Fr(o.padding, n), p = Bt(a), d = s === "y" ? q : Y, m = s === "y" ? te : ne, v = n.rects.reference[c] + n.rects.reference[s] - l[s] - n.rects.popper[c], h = l[s] - n.rects.reference[s], O = Qe(a), b = O ? s === "y" ? O.clientHeight || 0 : O.clientWidth || 0 : 0, S = v / 2 - h / 2, y = f[d], E = b - p[c] - f[m], x = b / 2 - p[c] / 2 + S, T = ze(y, x, E), _ = s;
    n.modifiersData[r] = (t = {}, t[_] = T, t.centerOffset = T - x, t);
  }
}
function Rr(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || xn(t.elements.popper, o) && (t.elements.arrow = o));
}
const Nr = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Mr,
  effect: Rr,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function je(e) {
  return e.split("-")[1];
}
var Hr = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Wr(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return {
    x: Le(n * o) / o || 0,
    y: Le(r * o) / o || 0
  };
}
function tn(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, a = e.variation, l = e.offsets, i = e.position, s = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, f = e.isFixed, p = l.x, d = p === void 0 ? 0 : p, m = l.y, v = m === void 0 ? 0 : m, h = typeof c == "function" ? c({
    x: d,
    y: v
  }) : {
    x: d,
    y: v
  };
  d = h.x, v = h.y;
  var O = l.hasOwnProperty("x"), b = l.hasOwnProperty("y"), S = Y, y = q, E = window;
  if (u) {
    var x = Qe(n), T = "clientHeight", _ = "clientWidth";
    if (x === Q(n) && (x = we(n), fe(x).position !== "static" && i === "absolute" && (T = "scrollHeight", _ = "scrollWidth")), x = x, o === q || (o === Y || o === ne) && a === qe) {
      y = te;
      var D = f && x === E && E.visualViewport ? E.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        x[T]
      );
      v -= D - r.height, v *= s ? 1 : -1;
    }
    if (o === Y || (o === q || o === te) && a === qe) {
      S = ne;
      var A = f && x === E && E.visualViewport ? E.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        x[_]
      );
      d -= A - r.width, d *= s ? 1 : -1;
    }
  }
  var L = Object.assign({
    position: i
  }, u && Hr), H = c === !0 ? Wr({
    x: d,
    y: v
  }, Q(n)) : {
    x: d,
    y: v
  };
  if (d = H.x, v = H.y, s) {
    var C;
    return Object.assign({}, L, (C = {}, C[y] = b ? "0" : "", C[S] = O ? "0" : "", C.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + v + "px)" : "translate3d(" + d + "px, " + v + "px, 0)", C));
  }
  return Object.assign({}, L, (t = {}, t[y] = b ? v + "px" : "", t[S] = O ? d + "px" : "", t.transform = "", t));
}
function Ir(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, a = n.adaptive, l = a === void 0 ? !0 : a, i = n.roundOffsets, s = i === void 0 ? !0 : i, u = {
    placement: le(t.placement),
    variation: je(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, tn(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: l,
    roundOffsets: s
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, tn(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const zr = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Ir,
  data: {}
};
var nt = {
  passive: !0
};
function Vr(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, a = o === void 0 ? !0 : o, l = r.resize, i = l === void 0 ? !0 : l, s = Q(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(c) {
    c.addEventListener("scroll", n.update, nt);
  }), i && s.addEventListener("resize", n.update, nt), function() {
    a && u.forEach(function(c) {
      c.removeEventListener("scroll", n.update, nt);
    }), i && s.removeEventListener("resize", n.update, nt);
  };
}
const Ur = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Vr,
  data: {}
};
var qr = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function at(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return qr[t];
  });
}
var Yr = {
  start: "end",
  end: "start"
};
function nn(e) {
  return e.replace(/start|end/g, function(t) {
    return Yr[t];
  });
}
function Ft(e) {
  var t = Q(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Mt(e) {
  return Be(we(e)).left + Ft(e).scrollLeft;
}
function Xr(e, t) {
  var n = Q(e), r = we(e), o = n.visualViewport, a = r.clientWidth, l = r.clientHeight, i = 0, s = 0;
  if (o) {
    a = o.width, l = o.height;
    var u = bn();
    (u || !u && t === "fixed") && (i = o.offsetLeft, s = o.offsetTop);
  }
  return {
    width: a,
    height: l,
    x: i + Mt(e),
    y: s
  };
}
function Gr(e) {
  var t, n = we(e), r = Ft(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = Ce(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), l = Ce(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), i = -r.scrollLeft + Mt(e), s = -r.scrollTop;
  return fe(o || n).direction === "rtl" && (i += Ce(n.clientWidth, o ? o.clientWidth : 0) - a), {
    width: a,
    height: l,
    x: i,
    y: s
  };
}
function Rt(e) {
  var t = fe(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function $n(e) {
  return ["html", "body", "#document"].indexOf(ue(e)) >= 0 ? e.ownerDocument.body : Z(e) && Rt(e) ? e : $n(ct(e));
}
function Ve(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = $n(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = Q(r), l = o ? [a].concat(a.visualViewport || [], Rt(r) ? r : []) : r, i = t.concat(l);
  return o ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(Ve(ct(l)))
  );
}
function Et(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Kr(e, t) {
  var n = Be(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function rn(e, t, n) {
  return t === yn ? Et(Xr(e, n)) : Te(t) ? Kr(t, n) : Et(Gr(we(e)));
}
function Qr(e) {
  var t = Ve(ct(e)), n = ["absolute", "fixed"].indexOf(fe(e).position) >= 0, r = n && Z(e) ? Qe(e) : e;
  return Te(r) ? t.filter(function(o) {
    return Te(o) && xn(o, r) && ue(o) !== "body";
  }) : [];
}
function Jr(e, t, n, r) {
  var o = t === "clippingParents" ? Qr(e) : [].concat(t), a = [].concat(o, [n]), l = a[0], i = a.reduce(function(s, u) {
    var c = rn(e, u, r);
    return s.top = Ce(c.top, s.top), s.right = lt(c.right, s.right), s.bottom = lt(c.bottom, s.bottom), s.left = Ce(c.left, s.left), s;
  }, rn(e, l, r));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function Cn(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? le(r) : null, a = r ? je(r) : null, l = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, s;
  switch (o) {
    case q:
      s = {
        x: l,
        y: t.y - n.height
      };
      break;
    case te:
      s = {
        x: l,
        y: t.y + t.height
      };
      break;
    case ne:
      s = {
        x: t.x + t.width,
        y: i
      };
      break;
    case Y:
      s = {
        x: t.x - n.width,
        y: i
      };
      break;
    default:
      s = {
        x: t.x,
        y: t.y
      };
  }
  var u = o ? jt(o) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (a) {
      case De:
        s[u] = s[u] - (t[c] / 2 - n[c] / 2);
        break;
      case qe:
        s[u] = s[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return s;
}
function Ye(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, a = n.strategy, l = a === void 0 ? e.strategy : a, i = n.boundary, s = i === void 0 ? yr : i, u = n.rootBoundary, c = u === void 0 ? yn : u, f = n.elementContext, p = f === void 0 ? Re : f, d = n.altBoundary, m = d === void 0 ? !1 : d, v = n.padding, h = v === void 0 ? 0 : v, O = En(typeof h != "number" ? h : kn(h, Ke)), b = p === Re ? wr : Re, S = e.rects.popper, y = e.elements[m ? b : p], E = Jr(Te(y) ? y : y.contextElement || we(e.elements.popper), s, c, l), x = Be(e.elements.reference), T = Cn({
    reference: x,
    element: S,
    strategy: "absolute",
    placement: o
  }), _ = Et(Object.assign({}, S, T)), D = p === Re ? _ : x, A = {
    top: E.top - D.top + O.top,
    bottom: D.bottom - E.bottom + O.bottom,
    left: E.left - D.left + O.left,
    right: D.right - E.right + O.right
  }, L = e.modifiersData.offset;
  if (p === Re && L) {
    var H = L[o];
    Object.keys(A).forEach(function(C) {
      var G = [ne, te].indexOf(C) >= 0 ? 1 : -1, W = [q, te].indexOf(C) >= 0 ? "y" : "x";
      A[C] += H[W] * G;
    });
  }
  return A;
}
function Zr(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, a = n.rootBoundary, l = n.padding, i = n.flipVariations, s = n.allowedAutoPlacements, u = s === void 0 ? wn : s, c = je(r), f = c ? i ? Zt : Zt.filter(function(m) {
    return je(m) === c;
  }) : Ke, p = f.filter(function(m) {
    return u.indexOf(m) >= 0;
  });
  p.length === 0 && (p = f);
  var d = p.reduce(function(m, v) {
    return m[v] = Ye(e, {
      placement: v,
      boundary: o,
      rootBoundary: a,
      padding: l
    })[le(v)], m;
  }, {});
  return Object.keys(d).sort(function(m, v) {
    return d[m] - d[v];
  });
}
function eo(e) {
  if (le(e) === Dt)
    return [];
  var t = at(e);
  return [nn(e), t, nn(t)];
}
function to(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, a = o === void 0 ? !0 : o, l = n.altAxis, i = l === void 0 ? !0 : l, s = n.fallbackPlacements, u = n.padding, c = n.boundary, f = n.rootBoundary, p = n.altBoundary, d = n.flipVariations, m = d === void 0 ? !0 : d, v = n.allowedAutoPlacements, h = t.options.placement, O = le(h), b = O === h, S = s || (b || !m ? [at(h)] : eo(h)), y = [h].concat(S).reduce(function(ve, me) {
      return ve.concat(le(me) === Dt ? Zr(t, {
        placement: me,
        boundary: c,
        rootBoundary: f,
        padding: u,
        flipVariations: m,
        allowedAutoPlacements: v
      }) : me);
    }, []), E = t.rects.reference, x = t.rects.popper, T = /* @__PURE__ */ new Map(), _ = !0, D = y[0], A = 0; A < y.length; A++) {
      var L = y[A], H = le(L), C = je(L) === De, G = [q, te].indexOf(H) >= 0, W = G ? "width" : "height", B = Ye(t, {
        placement: L,
        boundary: c,
        rootBoundary: f,
        altBoundary: p,
        padding: u
      }), w = G ? C ? ne : Y : C ? te : q;
      E[W] > x[W] && (w = at(w));
      var P = at(w), j = [];
      if (a && j.push(B[H] <= 0), i && j.push(B[w] <= 0, B[P] <= 0), j.every(function(ve) {
        return ve;
      })) {
        D = L, _ = !1;
        break;
      }
      T.set(L, j);
    }
    if (_)
      for (var I = m ? 3 : 1, pe = function(me) {
        var Me = y.find(function(et) {
          var be = T.get(et);
          if (be)
            return be.slice(0, me).every(function(mt) {
              return mt;
            });
        });
        if (Me)
          return D = Me, "break";
      }, z = I; z > 0; z--) {
        var Pe = pe(z);
        if (Pe === "break")
          break;
      }
    t.placement !== D && (t.modifiersData[r]._skip = !0, t.placement = D, t.reset = !0);
  }
}
const no = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: to,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function on(e, t, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - n.y,
    right: e.right - t.width + n.x,
    bottom: e.bottom - t.height + n.y,
    left: e.left - t.width - n.x
  };
}
function an(e) {
  return [q, ne, te, Y].some(function(t) {
    return e[t] >= 0;
  });
}
function ro(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, l = Ye(t, {
    elementContext: "reference"
  }), i = Ye(t, {
    altBoundary: !0
  }), s = on(l, r), u = on(i, o, a), c = an(s), f = an(u);
  t.modifiersData[n] = {
    referenceClippingOffsets: s,
    popperEscapeOffsets: u,
    isReferenceHidden: c,
    hasPopperEscaped: f
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": c,
    "data-popper-escaped": f
  });
}
const oo = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: ro
};
function ao(e, t, n) {
  var r = le(e), o = [Y, q].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, l = a[0], i = a[1];
  return l = l || 0, i = (i || 0) * o, [Y, ne].indexOf(r) >= 0 ? {
    x: i,
    y: l
  } : {
    x: l,
    y: i
  };
}
function io(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, a = o === void 0 ? [0, 0] : o, l = wn.reduce(function(c, f) {
    return c[f] = ao(f, t.rects, a), c;
  }, {}), i = l[t.placement], s = i.x, u = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += s, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = l;
}
const lo = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: io
};
function so(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Cn({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const uo = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: so,
  data: {}
};
function co(e) {
  return e === "x" ? "y" : "x";
}
function fo(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, a = o === void 0 ? !0 : o, l = n.altAxis, i = l === void 0 ? !1 : l, s = n.boundary, u = n.rootBoundary, c = n.altBoundary, f = n.padding, p = n.tether, d = p === void 0 ? !0 : p, m = n.tetherOffset, v = m === void 0 ? 0 : m, h = Ye(t, {
    boundary: s,
    rootBoundary: u,
    padding: f,
    altBoundary: c
  }), O = le(t.placement), b = je(t.placement), S = !b, y = jt(O), E = co(y), x = t.modifiersData.popperOffsets, T = t.rects.reference, _ = t.rects.popper, D = typeof v == "function" ? v(Object.assign({}, t.rects, {
    placement: t.placement
  })) : v, A = typeof D == "number" ? {
    mainAxis: D,
    altAxis: D
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, D), L = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, H = {
    x: 0,
    y: 0
  };
  if (x) {
    if (a) {
      var C, G = y === "y" ? q : Y, W = y === "y" ? te : ne, B = y === "y" ? "height" : "width", w = x[y], P = w + h[G], j = w - h[W], I = d ? -_[B] / 2 : 0, pe = b === De ? T[B] : _[B], z = b === De ? -_[B] : -T[B], Pe = t.elements.arrow, ve = d && Pe ? Bt(Pe) : {
        width: 0,
        height: 0
      }, me = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : On(), Me = me[G], et = me[W], be = ze(0, T[B], ve[B]), mt = S ? T[B] / 2 - I - be - Me - A.mainAxis : pe - be - Me - A.mainAxis, Xn = S ? -T[B] / 2 + I + be + et + A.mainAxis : z + be + et + A.mainAxis, ht = t.elements.arrow && Qe(t.elements.arrow), Gn = ht ? y === "y" ? ht.clientTop || 0 : ht.clientLeft || 0 : 0, zt = (C = L == null ? void 0 : L[y]) != null ? C : 0, Kn = w + mt - zt - Gn, Qn = w + Xn - zt, Vt = ze(d ? lt(P, Kn) : P, w, d ? Ce(j, Qn) : j);
      x[y] = Vt, H[y] = Vt - w;
    }
    if (i) {
      var Ut, Jn = y === "x" ? q : Y, Zn = y === "x" ? te : ne, xe = x[E], tt = E === "y" ? "height" : "width", qt = xe + h[Jn], Yt = xe - h[Zn], gt = [q, Y].indexOf(O) !== -1, Xt = (Ut = L == null ? void 0 : L[E]) != null ? Ut : 0, Gt = gt ? qt : xe - T[tt] - _[tt] - Xt + A.altAxis, Kt = gt ? xe + T[tt] + _[tt] - Xt - A.altAxis : Yt, Qt = d && gt ? jr(Gt, xe, Kt) : ze(d ? Gt : qt, xe, d ? Kt : Yt);
      x[E] = Qt, H[E] = Qt - xe;
    }
    t.modifiersData[r] = H;
  }
}
const po = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: fo,
  requiresIfExists: ["offset"]
};
function vo(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function mo(e) {
  return e === Q(e) || !Z(e) ? Ft(e) : vo(e);
}
function ho(e) {
  var t = e.getBoundingClientRect(), n = Le(t.width) / e.offsetWidth || 1, r = Le(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function go(e, t, n) {
  n === void 0 && (n = !1);
  var r = Z(t), o = Z(t) && ho(t), a = we(t), l = Be(e, o, n), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((ue(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Rt(a)) && (i = mo(t)), Z(t) ? (s = Be(t, !0), s.x += t.clientLeft, s.y += t.clientTop) : a && (s.x = Mt(a))), {
    x: l.left + i.scrollLeft - s.x,
    y: l.top + i.scrollTop - s.y,
    width: l.width,
    height: l.height
  };
}
function yo(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function o(a) {
    n.add(a.name);
    var l = [].concat(a.requires || [], a.requiresIfExists || []);
    l.forEach(function(i) {
      if (!n.has(i)) {
        var s = t.get(i);
        s && o(s);
      }
    }), r.push(a);
  }
  return e.forEach(function(a) {
    n.has(a.name) || o(a);
  }), r;
}
function wo(e) {
  var t = yo(e);
  return Ar.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function bo(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function xo(e) {
  var t = e.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, {
      options: Object.assign({}, o.options, r.options),
      data: Object.assign({}, o.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var ln = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function sn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Oo(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, a = o === void 0 ? ln : o;
  return function(i, s, u) {
    u === void 0 && (u = a);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, ln, a),
      modifiersData: {},
      elements: {
        reference: i,
        popper: s
      },
      attributes: {},
      styles: {}
    }, f = [], p = !1, d = {
      state: c,
      setOptions: function(O) {
        var b = typeof O == "function" ? O(c.options) : O;
        v(), c.options = Object.assign({}, a, c.options, b), c.scrollParents = {
          reference: Te(i) ? Ve(i) : i.contextElement ? Ve(i.contextElement) : [],
          popper: Ve(s)
        };
        var S = wo(xo([].concat(r, c.options.modifiers)));
        return c.orderedModifiers = S.filter(function(y) {
          return y.enabled;
        }), m(), d.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!p) {
          var O = c.elements, b = O.reference, S = O.popper;
          if (sn(b, S)) {
            c.rects = {
              reference: go(b, Qe(S), c.options.strategy === "fixed"),
              popper: Bt(S)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(A) {
              return c.modifiersData[A.name] = Object.assign({}, A.data);
            });
            for (var y = 0; y < c.orderedModifiers.length; y++) {
              if (c.reset === !0) {
                c.reset = !1, y = -1;
                continue;
              }
              var E = c.orderedModifiers[y], x = E.fn, T = E.options, _ = T === void 0 ? {} : T, D = E.name;
              typeof x == "function" && (c = x({
                state: c,
                options: _,
                name: D,
                instance: d
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: bo(function() {
        return new Promise(function(h) {
          d.forceUpdate(), h(c);
        });
      }),
      destroy: function() {
        v(), p = !0;
      }
    };
    if (!sn(i, s))
      return d;
    d.setOptions(u).then(function(h) {
      !p && u.onFirstUpdate && u.onFirstUpdate(h);
    });
    function m() {
      c.orderedModifiers.forEach(function(h) {
        var O = h.name, b = h.options, S = b === void 0 ? {} : b, y = h.effect;
        if (typeof y == "function") {
          var E = y({
            state: c,
            name: O,
            instance: d,
            options: S
          }), x = function() {
          };
          f.push(E || x);
        }
      });
    }
    function v() {
      f.forEach(function(h) {
        return h();
      }), f = [];
    }
    return d;
  };
}
var Eo = [Ur, uo, zr, Dr, lo, no, po, Nr, oo], ko = /* @__PURE__ */ Oo({
  defaultModifiers: Eo
});
const dt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, $o = {
  name: "Dropdown",
  data() {
    return {
      isOpen: !1,
      popperInstance: null
    };
  },
  methods: {
    close(e) {
      this.$el.contains(e.target) || (this.isOpen = !1);
    },
    toggle() {
      this.isOpen = !this.isOpen, this.popperInstance.update();
    }
  },
  mounted() {
    document.addEventListener("click", this.close), this.popperInstance = ko(this.$refs.triggerRef, this.$refs.contentRef, {
      placement: "bottom-end",
      modifiers: [{
        name: "offset",
        options: {
          offset: [0, 4]
        }
      }]
    });
  },
  beforeUnmount() {
    document.removeEventListener("click", this.close), this.popperInstance && (this.popperInstance.destroy(), this.popperInstance = null);
  }
}, Co = {
  class: "z-10",
  ref: "contentRef"
}, So = { class: "w-56 bg-white dark:bg-gray-800 rounded-md drop-shadow ring-1 ring-black ring-opacity-5" };
function To(e, t, n, r, o, a) {
  return M(), re("div", null, [
    g("div", {
      onClick: t[0] || (t[0] = (l) => a.toggle()),
      ref: "triggerRef"
    }, [
      Ue(e.$slots, "trigger")
    ], 512),
    g("div", Co, [
      U(pn, {
        "enter-active-class": "transition ease-out duration-100",
        "enter-from-class": "transform opacity-0 scale-95",
        "enter-to-class": "transform opacity-100 scale-100",
        "leave-active-class": "transition ease-in duration-75",
        "leave-from-class": "transform opacity-100 scale-100",
        "leave-to-class": "transform opacity-0 scale-95"
      }, {
        default: R(() => [
          vn(g("div", So, [
            Ue(e.$slots, "default")
          ], 512), [
            [mn, o.isOpen]
          ])
        ]),
        _: 3
      })
    ], 512)
  ]);
}
const Ao = /* @__PURE__ */ dt($o, [["render", To]]);
function ce(e, t, ...n) {
  if (e in t) {
    let o = t[e];
    return typeof o == "function" ? o(...n) : o;
  }
  let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((o) => `"${o}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(r, ce), r;
}
var st = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(st || {}), ge = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(ge || {});
function J({ visible: e = !0, features: t = 0, ourProps: n, theirProps: r, ...o }) {
  var a;
  let l = Tn(r, n), i = Object.assign(o, { props: l });
  if (e || t & 2 && l.static)
    return wt(i);
  if (t & 1) {
    let s = (a = l.unmount) == null || a ? 0 : 1;
    return ce(s, { [0]() {
      return null;
    }, [1]() {
      return wt({ ...o, props: { ...l, hidden: !0, style: { display: "none" } } });
    } });
  }
  return wt(i);
}
function wt({ props: e, attrs: t, slots: n, slot: r, name: o }) {
  var a, l;
  let { as: i, ...s } = An(e, ["unmount", "static"]), u = (a = n.default) == null ? void 0 : a.call(n, r), c = {};
  if (r) {
    let f = !1, p = [];
    for (let [d, m] of Object.entries(r))
      typeof m == "boolean" && (f = !0), m === !0 && p.push(d);
    f && (c["data-headlessui-state"] = p.join(" "));
  }
  if (i === "template") {
    if (u = Sn(u ?? []), Object.keys(s).length > 0 || Object.keys(t).length > 0) {
      let [f, ...p] = u ?? [];
      if (!Po(f) || p.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${o} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(s).concat(Object.keys(t)).map((v) => v.trim()).filter((v, h, O) => O.indexOf(v) === h).sort((v, h) => v.localeCompare(h)).map((v) => `  - ${v}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((v) => `  - ${v}`).join(`
`)].join(`
`));
      let d = Tn((l = f.props) != null ? l : {}, s), m = tr(f, d);
      for (let v in d)
        v.startsWith("on") && (m.props || (m.props = {}), m.props[v] = d[v]);
      return m;
    }
    return Array.isArray(u) && u.length === 1 ? u[0] : u;
  }
  return F(i, Object.assign({}, s, c), { default: () => u });
}
function Sn(e) {
  return e.flatMap((t) => t.type === _t ? Sn(t.children) : [t]);
}
function Tn(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, n = {};
  for (let r of e)
    for (let o in r)
      o.startsWith("on") && typeof r[o] == "function" ? (n[o] != null || (n[o] = []), n[o].push(r[o])) : t[o] = r[o];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(n).map((r) => [r, void 0])));
  for (let r in n)
    Object.assign(t, { [r](o, ...a) {
      let l = n[r];
      for (let i of l) {
        if (o instanceof Event && o.defaultPrevented)
          return;
        i(o, ...a);
      }
    } });
  return t;
}
function An(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t)
    r in n && delete n[r];
  return n;
}
function Po(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let _o = 0;
function Do() {
  return ++_o;
}
function Ae() {
  return Do();
}
var Pn = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Pn || {});
function N(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let _n = Symbol("Context");
var K = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(K || {});
function Lo() {
  return Nt() !== null;
}
function Nt() {
  return ee(_n, null);
}
function Bo(e) {
  se(_n, e);
}
var jo = Object.defineProperty, Fo = (e, t, n) => t in e ? jo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, un = (e, t, n) => (Fo(e, typeof t != "symbol" ? t + "" : t, n), n);
class Mo {
  constructor() {
    un(this, "current", this.detect()), un(this, "currentId", 0);
  }
  set(t) {
    this.current !== t && (this.currentId = 0, this.current = t);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
}
let Je = new Mo();
function Fe(e) {
  if (Je.isServer)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = N(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
let kt = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var he = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(he || {}), Dn = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Dn || {}), Ro = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Ro || {});
function No(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(kt)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Ln = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Ln || {});
function Ho(e, t = 0) {
  var n;
  return e === ((n = Fe(e)) == null ? void 0 : n.body) ? !1 : ce(t, { [0]() {
    return e.matches(kt);
  }, [1]() {
    let r = e;
    for (; r !== null; ) {
      if (r.matches(kt))
        return !0;
      r = r.parentElement;
    }
    return !1;
  } });
}
var Wo = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(Wo || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function Se(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Io = ["textarea", "input"].join(",");
function zo(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Io)) != null ? n : !1;
}
function Vo(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let o = t(n), a = t(r);
    if (o === null || a === null)
      return 0;
    let l = o.compareDocumentPosition(a);
    return l & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : l & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function it(e, t, { sorted: n = !0, relativeTo: r = null, skipElements: o = [] } = {}) {
  var a;
  let l = (a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? a : document, i = Array.isArray(e) ? n ? Vo(e) : e : No(e);
  o.length > 0 && i.length > 1 && (i = i.filter((m) => !o.includes(m))), r = r ?? l.activeElement;
  let s = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), u = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, i.indexOf(r)) - 1;
    if (t & 4)
      return Math.max(0, i.indexOf(r)) + 1;
    if (t & 8)
      return i.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), c = t & 32 ? { preventScroll: !0 } : {}, f = 0, p = i.length, d;
  do {
    if (f >= p || f + p <= 0)
      return 0;
    let m = u + f;
    if (t & 16)
      m = (m + p) % p;
    else {
      if (m < 0)
        return 3;
      if (m >= p)
        return 1;
    }
    d = i[m], d == null || d.focus(c), f += s;
  } while (d !== l.activeElement);
  return t & 6 && zo(d) && d.select(), 2;
}
function cn(e, t, n) {
  Je.isServer || oe((r) => {
    document.addEventListener(e, t, n), r(() => document.removeEventListener(e, t, n));
  });
}
function Bn(e, t, n) {
  Je.isServer || oe((r) => {
    window.addEventListener(e, t, n), r(() => window.removeEventListener(e, t, n));
  });
}
function Uo(e, t, n = k(() => !0)) {
  function r(a, l) {
    if (!n.value || a.defaultPrevented)
      return;
    let i = l(a);
    if (i === null || !i.getRootNode().contains(i))
      return;
    let s = function u(c) {
      return typeof c == "function" ? u(c()) : Array.isArray(c) || c instanceof Set ? c : [c];
    }(e);
    for (let u of s) {
      if (u === null)
        continue;
      let c = u instanceof HTMLElement ? u : N(u);
      if (c != null && c.contains(i) || a.composed && a.composedPath().includes(c))
        return;
    }
    return !Ho(i, Ln.Loose) && i.tabIndex !== -1 && a.preventDefault(), t(a, i);
  }
  let o = $(null);
  cn("mousedown", (a) => {
    var l, i;
    n.value && (o.value = ((i = (l = a.composedPath) == null ? void 0 : l.call(a)) == null ? void 0 : i[0]) || a.target);
  }, !0), cn("click", (a) => {
    o.value && (r(a, () => o.value), o.value = null);
  }, !0), Bn("blur", (a) => r(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var ut = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(ut || {});
let $t = X({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: n }) {
  return () => {
    let { features: r, ...o } = e, a = { "aria-hidden": (r & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
    return J({ ourProps: a, theirProps: o, slot: {}, attrs: n, slots: t, name: "Hidden" });
  };
} });
function qo() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function ft() {
  let e = [], t = { addEventListener(n, r, o, a) {
    return n.addEventListener(r, o, a), t.add(() => n.removeEventListener(r, o, a));
  }, requestAnimationFrame(...n) {
    let r = requestAnimationFrame(...n);
    t.add(() => cancelAnimationFrame(r));
  }, nextFrame(...n) {
    t.requestAnimationFrame(() => {
      t.requestAnimationFrame(...n);
    });
  }, setTimeout(...n) {
    let r = setTimeout(...n);
    t.add(() => clearTimeout(r));
  }, style(n, r, o) {
    let a = n.style.getPropertyValue(r);
    return Object.assign(n.style, { [r]: o }), this.add(() => {
      Object.assign(n.style, { [r]: a });
    });
  }, group(n) {
    let r = ft();
    return n(r), this.add(() => r.dispose());
  }, add(n) {
    return e.push(n), () => {
      let r = e.indexOf(n);
      if (r >= 0)
        for (let o of e.splice(r, 1))
          o();
    };
  }, dispose() {
    for (let n of e.splice(0))
      n();
  } };
  return t;
}
var Ie = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(Ie || {});
function Yo() {
  let e = $(0);
  return Bn("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function jn(e, t, n, r) {
  Je.isServer || oe((o) => {
    e = e ?? window, e.addEventListener(t, n, r), o(() => e.removeEventListener(t, n, r));
  });
}
function Fn(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function Xo(e) {
  function t() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t());
}
function Mn(e) {
  if (!e)
    return /* @__PURE__ */ new Set();
  if (typeof e == "function")
    return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let n of e.value) {
    let r = N(n);
    r instanceof HTMLElement && t.add(r);
  }
  return t;
}
var Rn = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Rn || {});
let Ne = Object.assign(X({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: $(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: n, expose: r }) {
  let o = $(null);
  r({ el: o, $el: o });
  let a = k(() => Fe(o)), l = $(!1);
  V(() => l.value = !0), ae(() => l.value = !1), Ko({ ownerDocument: a }, k(() => l.value && !!(e.features & 16)));
  let i = Qo({ ownerDocument: a, container: o, initialFocus: k(() => e.initialFocus) }, k(() => l.value && !!(e.features & 2)));
  Jo({ ownerDocument: a, container: o, containers: e.containers, previousActiveElement: i }, k(() => l.value && !!(e.features & 8)));
  let s = Yo();
  function u(d) {
    let m = N(o);
    m && ((v) => v())(() => {
      ce(s.value, { [Ie.Forwards]: () => {
        it(m, he.First, { skipElements: [d.relatedTarget] });
      }, [Ie.Backwards]: () => {
        it(m, he.Last, { skipElements: [d.relatedTarget] });
      } });
    });
  }
  let c = $(!1);
  function f(d) {
    d.key === "Tab" && (c.value = !0, requestAnimationFrame(() => {
      c.value = !1;
    }));
  }
  function p(d) {
    if (!l.value)
      return;
    let m = Mn(e.containers);
    N(o) instanceof HTMLElement && m.add(N(o));
    let v = d.relatedTarget;
    v instanceof HTMLElement && v.dataset.headlessuiFocusGuard !== "true" && (Nn(m, v) || (c.value ? it(N(o), ce(s.value, { [Ie.Forwards]: () => he.Next, [Ie.Backwards]: () => he.Previous }) | he.WrapAround, { relativeTo: d.target }) : d.target instanceof HTMLElement && Se(d.target)));
  }
  return () => {
    let d = {}, m = { ref: o, onKeydown: f, onFocusout: p }, { features: v, initialFocus: h, containers: O, ...b } = e;
    return F(_t, [!!(v & 4) && F($t, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: u, features: ut.Focusable }), J({ ourProps: m, theirProps: { ...t, ...b }, slot: d, attrs: t, slots: n, name: "FocusTrap" }), !!(v & 4) && F($t, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: u, features: ut.Focusable })]);
  };
} }), { features: Rn }), ke = [];
Xo(() => {
  function e(t) {
    t.target instanceof HTMLElement && t.target !== document.body && ke[0] !== t.target && (ke.unshift(t.target), ke = ke.filter((n) => n != null && n.isConnected), ke.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function Go(e) {
  let t = $(ke.slice());
  return Ge([e], ([n], [r]) => {
    r === !0 && n === !1 ? Fn(() => {
      t.value.splice(0);
    }) : r === !1 && n === !0 && (t.value = ke.slice());
  }, { flush: "post" }), () => {
    var n;
    return (n = t.value.find((r) => r != null && r.isConnected)) != null ? n : null;
  };
}
function Ko({ ownerDocument: e }, t) {
  let n = Go(t);
  V(() => {
    oe(() => {
      var r, o;
      t.value || ((r = e.value) == null ? void 0 : r.activeElement) === ((o = e.value) == null ? void 0 : o.body) && Se(n());
    }, { flush: "post" });
  }), ae(() => {
    t.value && Se(n());
  });
}
function Qo({ ownerDocument: e, container: t, initialFocus: n }, r) {
  let o = $(null), a = $(!1);
  return V(() => a.value = !0), ae(() => a.value = !1), V(() => {
    Ge([t, n, r], (l, i) => {
      if (l.every((u, c) => (i == null ? void 0 : i[c]) === u) || !r.value)
        return;
      let s = N(t);
      s && Fn(() => {
        var u, c;
        if (!a.value)
          return;
        let f = N(n), p = (u = e.value) == null ? void 0 : u.activeElement;
        if (f) {
          if (f === p) {
            o.value = p;
            return;
          }
        } else if (s.contains(p)) {
          o.value = p;
          return;
        }
        f ? Se(f) : it(s, he.First | he.NoScroll) === Dn.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), o.value = (c = e.value) == null ? void 0 : c.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), o;
}
function Jo({ ownerDocument: e, container: t, containers: n, previousActiveElement: r }, o) {
  var a;
  jn((a = e.value) == null ? void 0 : a.defaultView, "focus", (l) => {
    if (!o.value)
      return;
    let i = Mn(n);
    N(t) instanceof HTMLElement && i.add(N(t));
    let s = r.value;
    if (!s)
      return;
    let u = l.target;
    u && u instanceof HTMLElement ? Nn(i, u) ? (r.value = u, Se(u)) : (l.preventDefault(), l.stopPropagation(), Se(s)) : Se(r.value);
  }, !0);
}
function Nn(e, t) {
  for (let n of e)
    if (n.contains(t))
      return !0;
  return !1;
}
let bt = /* @__PURE__ */ new Map(), He = /* @__PURE__ */ new Map();
function dn(e, t = $(!0)) {
  oe((n) => {
    var r;
    if (!t.value)
      return;
    let o = N(e);
    if (!o)
      return;
    n(function() {
      var l;
      if (!o)
        return;
      let i = (l = He.get(o)) != null ? l : 1;
      if (i === 1 ? He.delete(o) : He.set(o, i - 1), i !== 1)
        return;
      let s = bt.get(o);
      s && (s["aria-hidden"] === null ? o.removeAttribute("aria-hidden") : o.setAttribute("aria-hidden", s["aria-hidden"]), o.inert = s.inert, bt.delete(o));
    });
    let a = (r = He.get(o)) != null ? r : 0;
    He.set(o, a + 1), a === 0 && (bt.set(o, { "aria-hidden": o.getAttribute("aria-hidden"), inert: o.inert }), o.setAttribute("aria-hidden", "true"), o.inert = !0);
  });
}
let Hn = Symbol("ForcePortalRootContext");
function Zo() {
  return ee(Hn, !1);
}
let Ct = X({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: n }) {
  return se(Hn, e.force), () => {
    let { force: r, ...o } = e;
    return J({ theirProps: o, ourProps: {}, slot: {}, slots: t, attrs: n, name: "ForcePortalRoot" });
  };
} });
function ea(e) {
  let t = Fe(e);
  if (!t) {
    if (e === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`);
  }
  let n = t.getElementById("headlessui-portal-root");
  if (n)
    return n;
  let r = t.createElement("div");
  return r.setAttribute("id", "headlessui-portal-root"), t.body.appendChild(r);
}
let Wn = X({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: n }) {
  let r = $(null), o = k(() => Fe(r)), a = Zo(), l = ee(In, null), i = $(a === !0 || l == null ? ea(r.value) : l.resolveTarget());
  oe(() => {
    a || l != null && (i.value = l.resolveTarget());
  });
  let s = ee(St, null);
  return V(() => {
    let u = N(r);
    u && s && ae(s.register(u));
  }), ae(() => {
    var u, c;
    let f = (u = o.value) == null ? void 0 : u.getElementById("headlessui-portal-root");
    f && i.value === f && i.value.children.length <= 0 && ((c = i.value.parentElement) == null || c.removeChild(i.value));
  }), () => {
    if (i.value === null)
      return null;
    let u = { ref: r, "data-headlessui-portal": "" };
    return F(nr, { to: i.value }, J({ ourProps: u, theirProps: e, slot: {}, attrs: n, slots: t, name: "Portal" }));
  };
} }), St = Symbol("PortalParentContext");
function ta() {
  let e = ee(St, null), t = $([]);
  function n(a) {
    return t.value.push(a), e && e.register(a), () => r(a);
  }
  function r(a) {
    let l = t.value.indexOf(a);
    l !== -1 && t.value.splice(l, 1), e && e.unregister(a);
  }
  let o = { register: n, unregister: r, portals: t };
  return [t, X({ name: "PortalWrapper", setup(a, { slots: l }) {
    return se(St, o), () => {
      var i;
      return (i = l.default) == null ? void 0 : i.call(l);
    };
  } })];
}
let In = Symbol("PortalGroupContext"), na = X({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: n }) {
  let r = rr({ resolveTarget() {
    return e.target;
  } });
  return se(In, r), () => {
    let { target: o, ...a } = e;
    return J({ theirProps: a, ourProps: {}, slot: {}, attrs: t, slots: n, name: "PortalGroup" });
  };
} }), zn = Symbol("StackContext");
var Tt = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(Tt || {});
function ra() {
  return ee(zn, () => {
  });
}
function oa({ type: e, enabled: t, element: n, onUpdate: r }) {
  let o = ra();
  function a(...l) {
    r == null || r(...l), o(...l);
  }
  V(() => {
    Ge(t, (l, i) => {
      l ? a(0, e, n) : i === !0 && a(1, e, n);
    }, { immediate: !0, flush: "sync" });
  }), ae(() => {
    t.value && a(1, e, n);
  }), se(zn, a);
}
let Vn = Symbol("DescriptionContext");
function aa() {
  let e = ee(Vn, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function ia({ slot: e = $({}), name: t = "Description", props: n = {} } = {}) {
  let r = $([]);
  function o(a) {
    return r.value.push(a), () => {
      let l = r.value.indexOf(a);
      l !== -1 && r.value.splice(l, 1);
    };
  }
  return se(Vn, { register: o, slot: e, name: t, props: n }), k(() => r.value.length > 0 ? r.value.join(" ") : void 0);
}
X({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${Ae()}` } }, setup(e, { attrs: t, slots: n }) {
  let r = aa();
  return V(() => ae(r.register(e.id))), () => {
    let { name: o = "Description", slot: a = $({}), props: l = {} } = r, { id: i, ...s } = e, u = { ...Object.entries(l).reduce((c, [f, p]) => Object.assign(c, { [f]: _e(p) }), {}), id: i };
    return J({ ourProps: u, theirProps: s, slot: a.value, attrs: t, slots: n, name: o });
  };
} });
function la(e) {
  let t = or(e.getSnapshot());
  return ae(e.subscribe(() => {
    t.value = e.getSnapshot();
  })), t;
}
function sa(e, t) {
  let n = e(), r = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return n;
  }, subscribe(o) {
    return r.add(o), () => r.delete(o);
  }, dispatch(o, ...a) {
    let l = t[o].call(n, ...a);
    l && (n = l, r.forEach((i) => i()));
  } };
}
function ua() {
  let e;
  return { before({ doc: t }) {
    var n;
    let r = t.documentElement;
    e = ((n = t.defaultView) != null ? n : window).innerWidth - r.clientWidth;
  }, after({ doc: t, d: n }) {
    let r = t.documentElement, o = r.clientWidth - r.offsetWidth, a = e - o;
    n.style(r, "paddingRight", `${a}px`);
  } };
}
function ca() {
  if (!qo())
    return {};
  let e;
  return { before() {
    e = window.pageYOffset;
  }, after({ doc: t, d: n, meta: r }) {
    function o(l) {
      return r.containers.flatMap((i) => i()).some((i) => i.contains(l));
    }
    n.style(t.body, "marginTop", `-${e}px`), window.scrollTo(0, 0);
    let a = null;
    n.addEventListener(t, "click", (l) => {
      if (l.target instanceof HTMLElement)
        try {
          let i = l.target.closest("a");
          if (!i)
            return;
          let { hash: s } = new URL(i.href), u = t.querySelector(s);
          u && !o(u) && (a = u);
        } catch {
        }
    }, !0), n.addEventListener(t, "touchmove", (l) => {
      l.target instanceof HTMLElement && !o(l.target) && l.preventDefault();
    }, { passive: !1 }), n.add(() => {
      window.scrollTo(0, window.pageYOffset + e), a && a.isConnected && (a.scrollIntoView({ block: "nearest" }), a = null);
    });
  } };
}
function da() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function fa(e) {
  let t = {};
  for (let n of e)
    Object.assign(t, n(t));
  return t;
}
let $e = sa(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var n;
  let r = (n = this.get(e)) != null ? n : { doc: e, count: 0, d: ft(), meta: /* @__PURE__ */ new Set() };
  return r.count++, r.meta.add(t), this.set(e, r), this;
}, POP(e, t) {
  let n = this.get(e);
  return n && (n.count--, n.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
  let r = { doc: e, d: t, meta: fa(n) }, o = [ca(), ua(), da()];
  o.forEach(({ before: a }) => a == null ? void 0 : a(r)), o.forEach(({ after: a }) => a == null ? void 0 : a(r));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
$e.subscribe(() => {
  let e = $e.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [n] of e)
    t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden", o = n.count !== 0;
    (o && !r || !o && r) && $e.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && $e.dispatch("TEARDOWN", n);
  }
});
function pa(e, t, n) {
  let r = la($e), o = k(() => {
    let a = e.value ? r.value.get(e.value) : void 0;
    return a ? a.count > 0 : !1;
  });
  return Ge([e, t], ([a, l], [i], s) => {
    if (!a || !l)
      return;
    $e.dispatch("PUSH", a, n);
    let u = !1;
    s(() => {
      u || ($e.dispatch("POP", i ?? a, n), u = !0);
    });
  }, { immediate: !0 }), o;
}
function va({ defaultContainers: e = [], portals: t } = {}) {
  let n = $(null), r = Fe(n);
  function o() {
    var a;
    let l = [];
    for (let i of e)
      i !== null && (i instanceof HTMLElement ? l.push(i) : "value" in i && i.value instanceof HTMLElement && l.push(i.value));
    if (t != null && t.value)
      for (let i of t.value)
        l.push(i);
    for (let i of (a = r == null ? void 0 : r.querySelectorAll("html > *, body > *")) != null ? a : [])
      i !== document.body && i !== document.head && i instanceof HTMLElement && i.id !== "headlessui-portal-root" && (i.contains(N(n)) || l.some((s) => i.contains(s)) || l.push(i));
    return l;
  }
  return { resolveContainers: o, contains(a) {
    return o().some((l) => l.contains(a));
  }, mainTreeNodeRef: n, MainTreeNode() {
    return F($t, { features: ut.Hidden, ref: n });
  } };
}
var ma = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(ma || {});
let At = Symbol("DialogContext");
function Ze(e) {
  let t = ee(At, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Ze), n;
  }
  return t;
}
let rt = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", Ht = X({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: rt }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${Ae()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: n, slots: r, expose: o }) {
  var a;
  let l = $(!1);
  V(() => {
    l.value = !0;
  });
  let i = $(0), s = Nt(), u = k(() => e.open === rt && s !== null ? (s.value & K.Open) === K.Open : e.open), c = $(null), f = k(() => Fe(c));
  if (o({ el: c, $el: c }), !(e.open !== rt || s !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof u.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u.value === rt ? void 0 : e.open}`);
  let p = k(() => l.value && u.value ? 0 : 1), d = k(() => p.value === 0), m = k(() => i.value > 1), v = ee(At, null) !== null, [h, O] = ta(), { resolveContainers: b, mainTreeNodeRef: S, MainTreeNode: y } = va({ portals: h, defaultContainers: [k(() => {
    var w;
    return (w = C.panelRef.value) != null ? w : c.value;
  })] }), E = k(() => m.value ? "parent" : "leaf"), x = k(() => s !== null ? (s.value & K.Closing) === K.Closing : !1), T = k(() => v || x.value ? !1 : d.value), _ = k(() => {
    var w, P, j;
    return (j = Array.from((P = (w = f.value) == null ? void 0 : w.querySelectorAll("body > *")) != null ? P : []).find((I) => I.id === "headlessui-portal-root" ? !1 : I.contains(N(S)) && I instanceof HTMLElement)) != null ? j : null;
  });
  dn(_, T);
  let D = k(() => m.value ? !0 : d.value), A = k(() => {
    var w, P, j;
    return (j = Array.from((P = (w = f.value) == null ? void 0 : w.querySelectorAll("[data-headlessui-portal]")) != null ? P : []).find((I) => I.contains(N(S)) && I instanceof HTMLElement)) != null ? j : null;
  });
  dn(A, D), oa({ type: "Dialog", enabled: k(() => p.value === 0), element: c, onUpdate: (w, P) => {
    if (P === "Dialog")
      return ce(w, { [Tt.Add]: () => i.value += 1, [Tt.Remove]: () => i.value -= 1 });
  } });
  let L = ia({ name: "DialogDescription", slot: k(() => ({ open: u.value })) }), H = $(null), C = { titleId: H, panelRef: $(null), dialogState: p, setTitleId(w) {
    H.value !== w && (H.value = w);
  }, close() {
    t("close", !1);
  } };
  se(At, C);
  let G = k(() => !(!d.value || m.value));
  Uo(b, (w, P) => {
    C.close(), ar(() => P == null ? void 0 : P.focus());
  }, G);
  let W = k(() => !(m.value || p.value !== 0));
  jn((a = f.value) == null ? void 0 : a.defaultView, "keydown", (w) => {
    W.value && (w.defaultPrevented || w.key === Pn.Escape && (w.preventDefault(), w.stopPropagation(), C.close()));
  });
  let B = k(() => !(x.value || p.value !== 0 || v));
  return pa(f, B, (w) => {
    var P;
    return { containers: [...(P = w.containers) != null ? P : [], b] };
  }), oe((w) => {
    if (p.value !== 0)
      return;
    let P = N(c);
    if (!P)
      return;
    let j = new ResizeObserver((I) => {
      for (let pe of I) {
        let z = pe.target.getBoundingClientRect();
        z.x === 0 && z.y === 0 && z.width === 0 && z.height === 0 && C.close();
      }
    });
    j.observe(P), w(() => j.disconnect());
  }), () => {
    let { id: w, open: P, initialFocus: j, ...I } = e, pe = { ...n, ref: c, id: w, role: "dialog", "aria-modal": p.value === 0 ? !0 : void 0, "aria-labelledby": H.value, "aria-describedby": L.value }, z = { open: p.value === 0 };
    return F(Ct, { force: !0 }, () => [F(Wn, () => F(na, { target: c.value }, () => F(Ct, { force: !1 }, () => F(Ne, { initialFocus: j, containers: b, features: d.value ? ce(E.value, { parent: Ne.features.RestoreFocus, leaf: Ne.features.All & ~Ne.features.FocusLock }) : Ne.features.None }, () => F(O, {}, () => J({ ourProps: pe, theirProps: { ...I, ...n }, slot: z, attrs: n, slots: r, visible: p.value === 0, features: st.RenderStrategy | st.Static, name: "Dialog" })))))), F(y)]);
  };
} }), Un = X({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${Ae()}` } }, setup(e, { attrs: t, slots: n }) {
  let r = Ze("DialogOverlay");
  function o(a) {
    a.target === a.currentTarget && (a.preventDefault(), a.stopPropagation(), r.close());
  }
  return () => {
    let { id: a, ...l } = e;
    return J({ ourProps: { id: a, "aria-hidden": !0, onClick: o }, theirProps: l, slot: { open: r.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogOverlay" });
  };
} });
X({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${Ae()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: n, expose: r }) {
  let o = Ze("DialogBackdrop"), a = $(null);
  return r({ el: a, $el: a }), V(() => {
    if (o.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: l, ...i } = e, s = { id: l, ref: a, "aria-hidden": !0 };
    return F(Ct, { force: !0 }, () => F(Wn, () => J({ ourProps: s, theirProps: { ...t, ...i }, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogBackdrop" })));
  };
} });
let ha = X({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${Ae()}` } }, setup(e, { attrs: t, slots: n, expose: r }) {
  let o = Ze("DialogPanel");
  r({ el: o.panelRef, $el: o.panelRef });
  function a(l) {
    l.stopPropagation();
  }
  return () => {
    let { id: l, ...i } = e, s = { id: l, ref: o.panelRef, onClick: a };
    return J({ ourProps: s, theirProps: i, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogPanel" });
  };
} });
X({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${Ae()}` } }, setup(e, { attrs: t, slots: n }) {
  let r = Ze("DialogTitle");
  return V(() => {
    r.setTitleId(e.id), ae(() => r.setTitleId(null));
  }), () => {
    let { id: o, ...a } = e;
    return J({ ourProps: { id: o }, theirProps: a, slot: { open: r.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogTitle" });
  };
} });
function ga(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called)
      return t.called = !0, e(...n);
  };
}
function xt(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function ot(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var Pt = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(Pt || {});
function ya(e, t) {
  let n = ft();
  if (!e)
    return n.dispose;
  let { transitionDuration: r, transitionDelay: o } = getComputedStyle(e), [a, l] = [r, o].map((i) => {
    let [s = 0] = i.split(",").filter(Boolean).map((u) => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, c) => c - u);
    return s;
  });
  return a !== 0 ? n.setTimeout(() => t("finished"), a + l) : t("finished"), n.add(() => t("cancelled")), n.dispose;
}
function fn(e, t, n, r, o, a) {
  let l = ft(), i = a !== void 0 ? ga(a) : () => {
  };
  return ot(e, ...o), xt(e, ...t, ...n), l.nextFrame(() => {
    ot(e, ...n), xt(e, ...r), l.add(ya(e, (s) => (ot(e, ...r, ...t), xt(e, ...o), i(s))));
  }), l.add(() => ot(e, ...t, ...n, ...r, ...o)), l.add(() => i("cancelled")), l.dispose;
}
function Oe(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let Wt = Symbol("TransitionContext");
var wa = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(wa || {});
function ba() {
  return ee(Wt, null) !== null;
}
function xa() {
  let e = ee(Wt, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function Oa() {
  let e = ee(It, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let It = Symbol("NestingContext");
function pt(e) {
  return "children" in e ? pt(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function qn(e) {
  let t = $([]), n = $(!1);
  V(() => n.value = !0), ae(() => n.value = !1);
  function r(a, l = ge.Hidden) {
    let i = t.value.findIndex(({ id: s }) => s === a);
    i !== -1 && (ce(l, { [ge.Unmount]() {
      t.value.splice(i, 1);
    }, [ge.Hidden]() {
      t.value[i].state = "hidden";
    } }), !pt(t) && n.value && (e == null || e()));
  }
  function o(a) {
    let l = t.value.find(({ id: i }) => i === a);
    return l ? l.state !== "visible" && (l.state = "visible") : t.value.push({ id: a, state: "visible" }), () => r(a, ge.Unmount);
  }
  return { children: t, register: o, unregister: r };
}
let Yn = st.RenderStrategy, Xe = X({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: n, slots: r, expose: o }) {
  let a = $(0);
  function l() {
    a.value |= K.Opening, t("beforeEnter");
  }
  function i() {
    a.value &= ~K.Opening, t("afterEnter");
  }
  function s() {
    a.value |= K.Closing, t("beforeLeave");
  }
  function u() {
    a.value &= ~K.Closing, t("afterLeave");
  }
  if (!ba() && Lo())
    return () => F(vt, { ...e, onBeforeEnter: l, onAfterEnter: i, onBeforeLeave: s, onAfterLeave: u }, r);
  let c = $(null), f = k(() => e.unmount ? ge.Unmount : ge.Hidden);
  o({ el: c, $el: c });
  let { show: p, appear: d } = xa(), { register: m, unregister: v } = Oa(), h = $(p.value ? "visible" : "hidden"), O = { value: !0 }, b = Ae(), S = { value: !1 }, y = qn(() => {
    !S.value && h.value !== "hidden" && (h.value = "hidden", v(b), u());
  });
  V(() => {
    let C = m(b);
    ae(C);
  }), oe(() => {
    if (f.value === ge.Hidden && b) {
      if (p.value && h.value !== "visible") {
        h.value = "visible";
        return;
      }
      ce(h.value, { hidden: () => v(b), visible: () => m(b) });
    }
  });
  let E = Oe(e.enter), x = Oe(e.enterFrom), T = Oe(e.enterTo), _ = Oe(e.entered), D = Oe(e.leave), A = Oe(e.leaveFrom), L = Oe(e.leaveTo);
  V(() => {
    oe(() => {
      if (h.value === "visible") {
        let C = N(c);
        if (C instanceof Comment && C.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function H(C) {
    let G = O.value && !d.value, W = N(c);
    !W || !(W instanceof HTMLElement) || G || (S.value = !0, p.value && l(), p.value || s(), C(p.value ? fn(W, E, x, T, _, (B) => {
      S.value = !1, B === Pt.Finished && i();
    }) : fn(W, D, A, L, _, (B) => {
      S.value = !1, B === Pt.Finished && (pt(y) || (h.value = "hidden", v(b), u()));
    })));
  }
  return V(() => {
    Ge([p], (C, G, W) => {
      H(W), O.value = !1;
    }, { immediate: !0 });
  }), se(It, y), Bo(k(() => ce(h.value, { visible: K.Open, hidden: K.Closed }) | a.value)), () => {
    let { appear: C, show: G, enter: W, enterFrom: B, enterTo: w, entered: P, leave: j, leaveFrom: I, leaveTo: pe, ...z } = e, Pe = { ref: c }, ve = { ...z, ...d.value && p.value && Je.isServer ? { class: ie([n.class, z.class, ...E, ...x]) } : {} };
    return J({ theirProps: ve, ourProps: Pe, slot: {}, slots: r, attrs: n, features: Yn, visible: h.value === "visible", name: "TransitionChild" });
  };
} }), Ea = Xe, vt = X({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: n, slots: r }) {
  let o = Nt(), a = k(() => e.show === null && o !== null ? (o.value & K.Open) === K.Open : e.show);
  oe(() => {
    if (![!0, !1].includes(a.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let l = $(a.value ? "visible" : "hidden"), i = qn(() => {
    l.value = "hidden";
  }), s = $(!0), u = { show: a, appear: k(() => e.appear || !s.value) };
  return V(() => {
    oe(() => {
      s.value = !1, a.value ? l.value = "visible" : pt(i) || (l.value = "hidden");
    });
  }), se(It, i), se(Wt, u), () => {
    let c = An(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), f = { unmount: e.unmount };
    return J({ ourProps: { ...f, as: "template" }, theirProps: {}, slot: {}, slots: { ...r, default: () => [F(Ea, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...n, ...f, ...c }, r.default)] }, attrs: {}, features: Yn, visible: l.value === "visible", name: "Transition" });
  };
} });
const ka = /* @__PURE__ */ g("div", { class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" }, null, -1), $a = { class: "flex items-center justify-center min-h-full p-4 sm:p-0" }, Ca = { class: "p-4 sm:p-6" }, Sa = { class: "block absolute top-0 right-0 pt-4 pr-4" }, Ta = /* @__PURE__ */ g("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, [
  /* @__PURE__ */ g("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), Aa = [
  Ta
], Pa = { class: "text-xl font-semibold text-gray-800 dark:text-gray-100" }, _a = {
  __name: "Modal",
  props: {
    open: {
      type: Boolean,
      default: !1
    },
    backdropClose: {
      type: Boolean,
      default: !1
    },
    title: String,
    size: String
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, r = $(""), o = k({
      get() {
        return n.size ? n.size : "sm:max-w-xl";
      }
    }), a = () => {
      if (n.backdropClose)
        return t("update:open", !n.open);
      r.value = "scale-105", setTimeout(() => {
        r.value = "";
      }, 300);
    };
    return (l, i) => (M(), ye(_e(vt), {
      as: "template",
      show: e.open
    }, {
      default: R(() => [
        U(_e(Ht), {
          as: "div",
          class: "relative z-10",
          onClose: a
        }, {
          default: R(() => [
            U(_e(Xe), {
              as: "template",
              enter: "ease-out duration-300",
              "enter-from": "opacity-0",
              "enter-to": "opacity-100",
              leave: "ease-in duration-200",
              "leave-from": "opacity-100",
              "leave-to": "opacity-0"
            }, {
              default: R(() => [
                ka
              ]),
              _: 1
            }),
            g("div", {
              class: ie(["fixed z-10 inset-0 overflow-y-auto ease-out duration-300", r.value])
            }, [
              g("div", $a, [
                U(_e(Xe), {
                  as: "template",
                  enter: "ease-out duration-300",
                  "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                  "enter-to": "opacity-100 translate-y-0 sm:scale-100",
                  leave: "ease-in duration-200",
                  "leave-from": "opacity-100 translate-y-0 sm:scale-100",
                  "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                }, {
                  default: R(() => [
                    U(_e(ha), {
                      class: ie([o.value, "w-full relative bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all"])
                    }, {
                      default: R(() => [
                        g("div", Ca, [
                          g("div", Sa, [
                            g("button", {
                              tabindex: "-1",
                              type: "button",
                              class: "bg-white dark:bg-gray-800 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none",
                              onClick: i[0] || (i[0] = (s) => l.$emit("update:open", !e.open))
                            }, Aa)
                          ]),
                          g("h3", Pa, Ee(e.title), 1)
                        ]),
                        Ue(l.$slots, "default")
                      ]),
                      _: 3
                    }, 8, ["class"])
                  ]),
                  _: 3
                })
              ])
            ], 2)
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["show"]));
  }
}, Da = {
  name: "Panel",
  components: {
    Dialog: Ht,
    DialogOverlay: Un,
    TransitionChild: Xe,
    TransitionRoot: vt
  },
  props: {
    open: {
      type: Boolean,
      default: !1
    },
    size: String
  },
  computed: {
    sizeClass() {
      return this.size ? this.size : "max-w-md";
    }
  }
}, La = { class: "absolute inset-0 overflow-hidden" }, Ba = { class: "fixed inset-y-0 right-0 max-w-full flex" };
function ja(e, t, n, r, o, a) {
  const l = de("DialogOverlay"), i = de("TransitionChild"), s = de("Dialog"), u = de("TransitionRoot");
  return M(), ye(u, {
    as: "template",
    show: n.open
  }, {
    default: R(() => [
      U(s, {
        as: "div",
        class: "fixed z-10 inset-0 overflow-hidden",
        onClose: t[0] || (t[0] = (c) => e.$emit("update:open", !1))
      }, {
        default: R(() => [
          g("div", La, [
            U(i, {
              as: "template",
              enter: "ease-in-out duration-500",
              "enter-from": "opacity-0",
              "enter-to": "opacity-100",
              leave: "ease-in-out duration-500",
              "leave-from": "opacity-100",
              "leave-to": "opacity-0"
            }, {
              default: R(() => [
                U(l, { class: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" })
              ]),
              _: 1
            }),
            g("div", Ba, [
              U(i, {
                as: "template",
                enter: "transform transition ease-in-out duration-500 sm:duration-700",
                "enter-from": "translate-x-full",
                "enter-to": "translate-x-0",
                leave: "transform transition ease-in-out duration-500 sm:duration-700",
                "leave-from": "translate-x-0",
                "leave-to": "translate-x-full"
              }, {
                default: R(() => [
                  g("div", {
                    class: ie(["w-screen", a.sizeClass])
                  }, [
                    Ue(e.$slots, "default")
                  ], 2)
                ]),
                _: 3
              })
            ])
          ])
        ]),
        _: 3
      })
    ]),
    _: 3
  }, 8, ["show"]);
}
const Fa = /* @__PURE__ */ dt(Da, [["render", ja]]);
class Ma {
  constructor(t, n) {
    this.startedAt = Date.now(), this.callback = t, this.delay = n, this.timer = setTimeout(t, n);
  }
  pause() {
    this.stop(), this.delay -= Date.now() - this.startedAt;
  }
  resume() {
    this.stop(), this.startedAt = Date.now(), this.timer = setTimeout(this.callback, this.delay);
  }
  stop() {
    clearTimeout(this.timer);
  }
}
const Ra = {
  success: "border-green-500",
  info: "border-blue-400",
  warning: "border-yellow-400",
  error: "border-red-500"
}, Na = {
  props: {
    message: {
      type: String,
      required: !0
    },
    type: String,
    // Visibility in milliseconds or false to disable
    duration: {
      type: [Number, Boolean],
      default: 5e3
    }
  },
  data() {
    return {
      divWrapper: null,
      isActive: !1,
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
      return Ra[this.type];
    }
  },
  methods: {
    createWrapperDiv() {
      this.divWrapper = document.querySelector(".dtc-alert-wrapper"), !this.divWrapper && (this.divWrapper = document.createElement("div"), this.divWrapper.className = "dtc-alert-wrapper fixed flex flex-col overflow-hidden top-0 bottom-0 left-0 right-0 z-50 pointer-events-none px-4 pt-3", document.body.appendChild(this.divWrapper));
    },
    showAlert() {
      this.divWrapper.insertAdjacentElement("afterbegin", this.$el), this.isActive = !0, this.timer = this.duration !== !1 ? new Ma(this.closeAlert, this.duration) : null;
    },
    toggleTimer(e) {
      this.timer && (e ? this.timer.pause() : this.timer.resume());
    },
    closeAlert() {
      this.timer && this.timer.stop(), this.isActive = !1, setTimeout(() => {
        typeof this.$el.remove < "u" ? this.$el.remove() : this.$el.parentNode.removeChild(this.$el);
      }, 150);
    }
  }
}, Ha = { class: "p-4" }, Wa = { class: "flex items-start items-center" }, Ia = { class: "flex-shrink-0" }, za = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-7 w-7 text-blue-400",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, Va = /* @__PURE__ */ g("path", {
  "fill-rule": "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
  "clip-rule": "evenodd"
}, null, -1), Ua = [
  Va
], qa = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-7 w-7 text-yellow-400",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, Ya = /* @__PURE__ */ g("path", {
  "fill-rule": "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
  "clip-rule": "evenodd"
}, null, -1), Xa = [
  Ya
], Ga = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-7 w-7 text-red-500",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, Ka = /* @__PURE__ */ g("path", {
  "fill-rule": "evenodd",
  d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
  "clip-rule": "evenodd"
}, null, -1), Qa = [
  Ka
], Ja = {
  key: 3,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-7 w-7 text-green-500",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, Za = /* @__PURE__ */ g("path", {
  "fill-rule": "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
  "clip-rule": "evenodd"
}, null, -1), ei = [
  Za
], ti = { class: "ml-3 w-0 flex-1" }, ni = { class: "text-sm text-gray-700" }, ri = { class: "ml-4 flex-shrink-0 flex" }, oi = /* @__PURE__ */ g("span", { class: "sr-only" }, "Close", -1), ai = /* @__PURE__ */ g("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-4 w-4",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ g("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), ii = [
  oi,
  ai
];
function li(e, t, n, r, o, a) {
  return M(), ye(pn, {
    "enter-active-class": "transform ease-out duration-300 transition",
    "enter-from-class": "opacity-0 translate-x-0 translate-y-2",
    "enter-to-class": "opacity-100 translate-y-0",
    "leave-active-class": "transition ease-in duration-100",
    "leave-from-class": "opacity-100",
    "leave-to-class": "opacity-0"
  }, {
    default: R(() => [
      vn(g("div", {
        class: ie([a.borderColor, "border-l-4 grid my-1.5 self-center max-w-sm w-full bg-white shadow-lg rounded pointer-events-auto ring-1 ring-black ring-opacity-5"]),
        onMouseover: t[1] || (t[1] = (l) => a.toggleTimer(!0)),
        onMouseleave: t[2] || (t[2] = (l) => a.toggleTimer(!1))
      }, [
        g("div", Ha, [
          g("div", Wa, [
            g("div", Ia, [
              n.type === "info" ? (M(), re("svg", za, Ua)) : We("", !0),
              n.type === "warning" ? (M(), re("svg", qa, Xa)) : We("", !0),
              n.type === "error" ? (M(), re("svg", Ga, Qa)) : We("", !0),
              n.type === "success" ? (M(), re("svg", Ja, ei)) : We("", !0)
            ]),
            g("div", ti, [
              g("p", ni, Ee(n.message), 1)
            ]),
            g("div", ri, [
              g("button", {
                onClick: t[0] || (t[0] = (...l) => a.closeAlert && a.closeAlert(...l)),
                class: "bg-white inline-flex text-gray-400 hover:text-gray-500 focus:outline-none"
              }, ii)
            ])
          ])
        ])
      ], 34), [
        [mn, o.isActive]
      ])
    ]),
    _: 1
  });
}
const si = /* @__PURE__ */ dt(Na, [["render", li]]), xi = () => {
  const e = function(t, n = {}) {
    let r = { message: t, ...n }, o = F(si, { ...r });
    hn(o, typeof document < "u" && document.createElement("div"));
  };
  return {
    success(t, n = {}) {
      return n.type = "success", e(t, n);
    },
    error(t, n = {}) {
      return n.type = "error", e(t, n);
    },
    info(t, n = {}) {
      return n.type = "info", e(t, n);
    },
    warning(t, n = {}) {
      return n.type = "warning", e(t, n);
    }
  };
}, ui = {
  name: "Confirm",
  components: {
    Dialog: Ht,
    DialogOverlay: Un,
    TransitionChild: Xe,
    TransitionRoot: vt,
    ButtonSubmit: gn
  },
  props: {
    title: {
      type: String,
      required: !0
    },
    message: {
      type: String,
      required: !0
    },
    cancelAction: {
      type: Boolean,
      default: !1
    },
    cancelButtonText: {
      type: String,
      default: "Cancel"
    },
    confirmButtonText: {
      type: String,
      default: "Confirm"
    },
    confirmCallback: {
      type: Function,
      default: () => {
      }
    },
    cancelCallback: {
      type: Function,
      default: () => {
      }
    }
  },
  data() {
    return {
      open: !1,
      confirmButtonLoading: !1,
      cancelButtonLoading: !1,
      backdropClickAnimate: ""
    };
  },
  mounted() {
    this.open = !0;
  },
  methods: {
    handleBackdropClose() {
      this.backdropClickAnimate = "scale-105", setTimeout(() => {
        this.backdropClickAnimate = "";
      }, 300);
    },
    onConfirm() {
      this.confirmCallback(this);
    },
    onCancel() {
      this.cancelCallback(this);
    }
  }
}, ci = { class: "flex items-center justify-center min-h-screen p-4 text-center" }, di = /* @__PURE__ */ g("span", {
  class: "hidden sm:inline-block sm:align-middle sm:h-screen",
  "aria-hidden": "true"
}, "​", -1), fi = { class: "inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6" }, pi = /* @__PURE__ */ g("div", { class: "mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-yellow-100" }, [
  /* @__PURE__ */ g("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-9 w-9 text-yellow-500",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, [
    /* @__PURE__ */ g("path", {
      "fill-rule": "evenodd",
      d: "M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z",
      "clip-rule": "evenodd"
    })
  ])
], -1), vi = { class: "mt-3 text-center sm:mt-5" }, mi = { class: "text-lg font-medium text-gray-800 dark:text-gray-100" }, hi = { class: "text-sm text-gray-500 dark:text-gray-300" }, gi = { class: "mt-5 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense" };
function yi(e, t, n, r, o, a) {
  const l = de("DialogOverlay"), i = de("TransitionChild"), s = de("ButtonSubmit"), u = de("Dialog"), c = de("TransitionRoot");
  return M(), ye(c, {
    as: "template",
    show: o.open
  }, {
    default: R(() => [
      U(u, {
        as: "div",
        class: ie(["fixed z-10 inset-0 overflow-y-auto ease-out duration-300", o.backdropClickAnimate]),
        onClose: t[1] || (t[1] = (f) => a.handleBackdropClose())
      }, {
        default: R(() => [
          g("div", ci, [
            U(i, {
              as: "template",
              enter: "ease-out duration-300",
              "enter-from": "opacity-0",
              "enter-to": "opacity-100",
              leave: "ease-in duration-200",
              "leave-from": "opacity-100",
              "leave-to": "opacity-0"
            }, {
              default: R(() => [
                U(l, { class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" })
              ]),
              _: 1
            }),
            di,
            U(i, {
              as: "template",
              enter: "ease-out duration-300",
              "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
              "enter-to": "opacity-100 translate-y-0 sm:scale-100",
              leave: "ease-in duration-200",
              "leave-from": "opacity-100 translate-y-0 sm:scale-100",
              "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            }, {
              default: R(() => [
                g("div", fi, [
                  g("div", null, [
                    pi,
                    g("div", vi, [
                      g("h3", mi, Ee(n.title), 1),
                      g("p", hi, Ee(n.message), 1)
                    ])
                  ]),
                  g("div", gi, [
                    n.cancelAction ? (M(), ye(s, {
                      key: 0,
                      type: "button",
                      class: "btn-light mb-3 sm:mb-0 w-full justify-center py-2.5 sm:col-start-1",
                      onClick: a.onCancel,
                      loading: o.cancelButtonLoading
                    }, {
                      default: R(() => [
                        Jt(Ee(n.cancelButtonText), 1)
                      ]),
                      _: 1
                    }, 8, ["onClick", "loading"])) : (M(), re("button", {
                      key: 1,
                      type: "button",
                      class: "btn btn-light mb-3 sm:mb-0 w-full justify-center py-2.5 sm:col-start-1",
                      onClick: t[0] || (t[0] = (f) => o.open = !1)
                    }, Ee(n.cancelButtonText), 1)),
                    U(s, {
                      type: "button",
                      class: "btn btn-primary w-full justify-center py-2.5 sm:col-start-2",
                      onClick: a.onConfirm,
                      loading: o.confirmButtonLoading
                    }, {
                      default: R(() => [
                        Jt(Ee(n.confirmButtonText), 1)
                      ]),
                      _: 1
                    }, 8, ["onClick", "loading"])
                  ])
                ])
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      }, 8, ["class"])
    ]),
    _: 1
  }, 8, ["show"]);
}
const wi = /* @__PURE__ */ dt(ui, [["render", yi]]), Oi = (e = {}) => {
  let t = { ...e }, n = F(wi, { ...t });
  hn(n, typeof document < "u" && document.createElement("div"));
}, Ei = {
  install: (e) => {
    e.component("ButtonSubmit", gn), e.component("Pagination", gr), e.component("Dropdown", Ao), e.component("Modal", _a), e.component("Panel", Fa);
  }
};
export {
  gn as ButtonSubmit,
  Ao as Dropdown,
  _a as Modal,
  gr as Pagination,
  Fa as Panel,
  Oi as confirm,
  Ei as default,
  xi as notify
};
