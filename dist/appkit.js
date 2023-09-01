import { openBlock as R, createElementBlock as oe, normalizeClass as le, createCommentVNode as Ie, renderSlot as it, createElementVNode as h, createBlock as ye, resolveDynamicComponent as gt, withCtx as j, Fragment as Pt, renderList as Zr, createVNode as U, Transition as fr, withDirectives as pr, vShow as vr, cloneVNode as en, h as M, inject as ee, provide as ue, watchEffect as ae, ref as $, computed as k, defineComponent as X, onMounted as V, onUnmounted as ie, watch as Xe, Teleport as tn, reactive as rn, unref as ne, shallowRef as nn, nextTick as on, toDisplayString as Ee, render as mr, resolveComponent as Re, createTextVNode as Jt } from "vue";
const an = ["disabled"], ln = {
  key: 0,
  class: "animate-spin mr-2 h-4 w-4",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, sn = /* @__PURE__ */ h("circle", {
  class: "opacity-25",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), un = /* @__PURE__ */ h("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), cn = [
  sn,
  un
], hr = {
  __name: "ButtonSubmit",
  props: {
    loading: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (t, r) => (R(), oe("button", {
      class: le({ "cursor-not-allowed": e.loading }),
      disabled: e.loading
    }, [
      e.loading ? (R(), oe("svg", ln, cn)) : Ie("", !0),
      it(t.$slots, "default")
    ], 10, an));
  }
}, dn = {
  key: 0,
  class: "flex justify-between items-center"
}, fn = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-4 h-4 mr-1"
}, [
  /* @__PURE__ */ h("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M15.75 19.5L8.25 12l7.5-7.5"
  })
], -1), pn = /* @__PURE__ */ h("span", null, "Prev", -1), vn = /* @__PURE__ */ h("span", null, "Next", -1), mn = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-4 h-4 ml-1"
}, [
  /* @__PURE__ */ h("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M8.25 4.5l7.5 7.5-7.5 7.5"
  })
], -1), hn = {
  key: 1,
  class: "relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
}, gn = {
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
    return (t, r) => e.simple ? (R(), oe("nav", dn, [
      (R(), ye(gt(e.links.prev ? "Link" : "div"), {
        href: e.links.prev,
        class: le(["relative inline-flex items-center px-3.5 py-1.5 border text-sm font-medium rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800", e.links.prev ? " hover:bg-gray-50 hover:dark:bg-gray-700 text-gray-800 dark:text-gray-200" : "cursor-not-allowed bg-gray-50 border-gray-200 text-gray-400 dark:text-gray-600"])
      }, {
        default: j(() => [
          fn,
          pn
        ]),
        _: 1
      }, 8, ["href", "class"])),
      (R(), ye(gt(e.links.next ? "Link" : "div"), {
        href: e.links.next,
        class: le(["ml-3 relative inline-flex items-center px-3.5 py-1.5 border text-sm font-medium rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800", e.links.next ? "hover:bg-gray-50 hover:dark:bg-gray-700 text-gray-800 dark:text-gray-200" : "cursor-not-allowed bg-gray-50 border-gray-200 text-gray-400 dark:text-gray-600"])
      }, {
        default: j(() => [
          vn,
          mn
        ]),
        _: 1
      }, 8, ["href", "class"]))
    ])) : (R(), oe("nav", hn, [
      (R(!0), oe(Pt, null, Zr(e.links, (n, o) => (R(), ye(gt(n.url ? "Link" : "span"), {
        key: o,
        href: n.url,
        innerHTML: n.label,
        class: le(["first:rounded-l-md last:rounded-r-md bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 inline-flex relative items-center px-3.5 py-1.5 border text-sm font-medium", [n.url ? "hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200" : "cursor-not-allowed text-gray-400 dark:text-gray-600", n.active ? "z-10 !bg-primary-50 border-primary-500 text-primary-600" : ""]])
      }, null, 8, ["href", "innerHTML", "class"]))), 128))
    ]));
  }
};
var q = "top", te = "bottom", re = "right", Y = "left", _t = "auto", Ge = [q, te, re, Y], _e = "start", qe = "end", yn = "clippingParents", gr = "viewport", Ne = "popper", wn = "reference", Zt = /* @__PURE__ */ Ge.reduce(function(e, t) {
  return e.concat([t + "-" + _e, t + "-" + qe]);
}, []), yr = /* @__PURE__ */ [].concat(Ge, [_t]).reduce(function(e, t) {
  return e.concat([t, t + "-" + _e, t + "-" + qe]);
}, []), bn = "beforeRead", xn = "read", On = "afterRead", En = "beforeMain", kn = "main", $n = "afterMain", Sn = "beforeWrite", Cn = "write", An = "afterWrite", Tn = [bn, xn, On, En, kn, $n, Sn, Cn, An];
function ce(e) {
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
function Ae(e) {
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
function Pn(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, o = t.attributes[r] || {}, a = t.elements[r];
    !Z(a) || !ce(a) || (Object.assign(a.style, n), Object.keys(o).forEach(function(l) {
      var i = o[l];
      i === !1 ? a.removeAttribute(l) : a.setAttribute(l, i === !0 ? "" : i);
    }));
  });
}
function _n(e) {
  var t = e.state, r = {
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
  return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow), function() {
    Object.keys(t.elements).forEach(function(n) {
      var o = t.elements[n], a = t.attributes[n] || {}, l = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), i = l.reduce(function(s, u) {
        return s[u] = "", s;
      }, {});
      !Z(o) || !ce(o) || (Object.assign(o.style, i), Object.keys(a).forEach(function(s) {
        o.removeAttribute(s);
      }));
    });
  };
}
const Ln = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Pn,
  effect: _n,
  requires: ["computeStyles"]
};
function se(e) {
  return e.split("-")[0];
}
var Se = Math.max, lt = Math.min, Le = Math.round;
function xt() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function wr() {
  return !/^((?!chrome|android).)*safari/i.test(xt());
}
function De(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), o = 1, a = 1;
  t && Z(e) && (o = e.offsetWidth > 0 && Le(n.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Le(n.height) / e.offsetHeight || 1);
  var l = Ae(e) ? Q(e) : window, i = l.visualViewport, s = !wr() && r, u = (n.left + (s && i ? i.offsetLeft : 0)) / o, c = (n.top + (s && i ? i.offsetTop : 0)) / a, f = n.width / o, p = n.height / a;
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
function Dt(e) {
  var t = De(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function br(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && Lt(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function fe(e) {
  return Q(e).getComputedStyle(e);
}
function Dn(e) {
  return ["table", "td", "th"].indexOf(ce(e)) >= 0;
}
function we(e) {
  return ((Ae(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function ct(e) {
  return ce(e) === "html" ? e : (
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
function er(e) {
  return !Z(e) || // https://github.com/popperjs/popper-core/issues/837
  fe(e).position === "fixed" ? null : e.offsetParent;
}
function Bn(e) {
  var t = /firefox/i.test(xt()), r = /Trident/i.test(xt());
  if (r && Z(e)) {
    var n = fe(e);
    if (n.position === "fixed")
      return null;
  }
  var o = ct(e);
  for (Lt(o) && (o = o.host); Z(o) && ["html", "body"].indexOf(ce(o)) < 0; ) {
    var a = fe(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Ke(e) {
  for (var t = Q(e), r = er(e); r && Dn(r) && fe(r).position === "static"; )
    r = er(r);
  return r && (ce(r) === "html" || ce(r) === "body" && fe(r).position === "static") ? t : r || Bn(e) || t;
}
function Bt(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ve(e, t, r) {
  return Se(e, lt(t, r));
}
function jn(e, t, r) {
  var n = Ve(e, t, r);
  return n > r ? r : n;
}
function xr() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Or(e) {
  return Object.assign({}, xr(), e);
}
function Er(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var Fn = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, Or(typeof t != "number" ? t : Er(t, Ge));
};
function Mn(e) {
  var t, r = e.state, n = e.name, o = e.options, a = r.elements.arrow, l = r.modifiersData.popperOffsets, i = se(r.placement), s = Bt(i), u = [Y, re].indexOf(i) >= 0, c = u ? "height" : "width";
  if (!(!a || !l)) {
    var f = Fn(o.padding, r), p = Dt(a), d = s === "y" ? q : Y, m = s === "y" ? te : re, v = r.rects.reference[c] + r.rects.reference[s] - l[s] - r.rects.popper[c], g = l[s] - r.rects.reference[s], O = Ke(a), b = O ? s === "y" ? O.clientHeight || 0 : O.clientWidth || 0 : 0, C = v / 2 - g / 2, y = f[d], E = b - p[c] - f[m], x = b / 2 - p[c] / 2 + C, A = Ve(y, x, E), _ = s;
    r.modifiersData[n] = (t = {}, t[_] = A, t.centerOffset = A - x, t);
  }
}
function Rn(e) {
  var t = e.state, r = e.options, n = r.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || br(t.elements.popper, o) && (t.elements.arrow = o));
}
const Nn = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Mn,
  effect: Rn,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Be(e) {
  return e.split("-")[1];
}
var Hn = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Wn(e, t) {
  var r = e.x, n = e.y, o = t.devicePixelRatio || 1;
  return {
    x: Le(r * o) / o || 0,
    y: Le(n * o) / o || 0
  };
}
function tr(e) {
  var t, r = e.popper, n = e.popperRect, o = e.placement, a = e.variation, l = e.offsets, i = e.position, s = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, f = e.isFixed, p = l.x, d = p === void 0 ? 0 : p, m = l.y, v = m === void 0 ? 0 : m, g = typeof c == "function" ? c({
    x: d,
    y: v
  }) : {
    x: d,
    y: v
  };
  d = g.x, v = g.y;
  var O = l.hasOwnProperty("x"), b = l.hasOwnProperty("y"), C = Y, y = q, E = window;
  if (u) {
    var x = Ke(r), A = "clientHeight", _ = "clientWidth";
    if (x === Q(r) && (x = we(r), fe(x).position !== "static" && i === "absolute" && (A = "scrollHeight", _ = "scrollWidth")), x = x, o === q || (o === Y || o === re) && a === qe) {
      y = te;
      var L = f && x === E && E.visualViewport ? E.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        x[A]
      );
      v -= L - n.height, v *= s ? 1 : -1;
    }
    if (o === Y || (o === q || o === te) && a === qe) {
      C = re;
      var T = f && x === E && E.visualViewport ? E.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        x[_]
      );
      d -= T - n.width, d *= s ? 1 : -1;
    }
  }
  var D = Object.assign({
    position: i
  }, u && Hn), H = c === !0 ? Wn({
    x: d,
    y: v
  }, Q(r)) : {
    x: d,
    y: v
  };
  if (d = H.x, v = H.y, s) {
    var S;
    return Object.assign({}, D, (S = {}, S[y] = b ? "0" : "", S[C] = O ? "0" : "", S.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + v + "px)" : "translate3d(" + d + "px, " + v + "px, 0)", S));
  }
  return Object.assign({}, D, (t = {}, t[y] = b ? v + "px" : "", t[C] = O ? d + "px" : "", t.transform = "", t));
}
function In(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, o = n === void 0 ? !0 : n, a = r.adaptive, l = a === void 0 ? !0 : a, i = r.roundOffsets, s = i === void 0 ? !0 : i, u = {
    placement: se(t.placement),
    variation: Be(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, tr(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: l,
    roundOffsets: s
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, tr(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const zn = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: In,
  data: {}
};
var tt = {
  passive: !0
};
function Vn(e) {
  var t = e.state, r = e.instance, n = e.options, o = n.scroll, a = o === void 0 ? !0 : o, l = n.resize, i = l === void 0 ? !0 : l, s = Q(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(c) {
    c.addEventListener("scroll", r.update, tt);
  }), i && s.addEventListener("resize", r.update, tt), function() {
    a && u.forEach(function(c) {
      c.removeEventListener("scroll", r.update, tt);
    }), i && s.removeEventListener("resize", r.update, tt);
  };
}
const Un = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Vn,
  data: {}
};
var qn = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ot(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return qn[t];
  });
}
var Yn = {
  start: "end",
  end: "start"
};
function rr(e) {
  return e.replace(/start|end/g, function(t) {
    return Yn[t];
  });
}
function jt(e) {
  var t = Q(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function Ft(e) {
  return De(we(e)).left + jt(e).scrollLeft;
}
function Xn(e, t) {
  var r = Q(e), n = we(e), o = r.visualViewport, a = n.clientWidth, l = n.clientHeight, i = 0, s = 0;
  if (o) {
    a = o.width, l = o.height;
    var u = wr();
    (u || !u && t === "fixed") && (i = o.offsetLeft, s = o.offsetTop);
  }
  return {
    width: a,
    height: l,
    x: i + Ft(e),
    y: s
  };
}
function Gn(e) {
  var t, r = we(e), n = jt(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = Se(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), l = Se(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), i = -n.scrollLeft + Ft(e), s = -n.scrollTop;
  return fe(o || r).direction === "rtl" && (i += Se(r.clientWidth, o ? o.clientWidth : 0) - a), {
    width: a,
    height: l,
    x: i,
    y: s
  };
}
function Mt(e) {
  var t = fe(e), r = t.overflow, n = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function kr(e) {
  return ["html", "body", "#document"].indexOf(ce(e)) >= 0 ? e.ownerDocument.body : Z(e) && Mt(e) ? e : kr(ct(e));
}
function Ue(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = kr(e), o = n === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Q(n), l = o ? [a].concat(a.visualViewport || [], Mt(n) ? n : []) : n, i = t.concat(l);
  return o ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(Ue(ct(l)))
  );
}
function Ot(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Kn(e, t) {
  var r = De(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function nr(e, t, r) {
  return t === gr ? Ot(Xn(e, r)) : Ae(t) ? Kn(t, r) : Ot(Gn(we(e)));
}
function Qn(e) {
  var t = Ue(ct(e)), r = ["absolute", "fixed"].indexOf(fe(e).position) >= 0, n = r && Z(e) ? Ke(e) : e;
  return Ae(n) ? t.filter(function(o) {
    return Ae(o) && br(o, n) && ce(o) !== "body";
  }) : [];
}
function Jn(e, t, r, n) {
  var o = t === "clippingParents" ? Qn(e) : [].concat(t), a = [].concat(o, [r]), l = a[0], i = a.reduce(function(s, u) {
    var c = nr(e, u, n);
    return s.top = Se(c.top, s.top), s.right = lt(c.right, s.right), s.bottom = lt(c.bottom, s.bottom), s.left = Se(c.left, s.left), s;
  }, nr(e, l, n));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function $r(e) {
  var t = e.reference, r = e.element, n = e.placement, o = n ? se(n) : null, a = n ? Be(n) : null, l = t.x + t.width / 2 - r.width / 2, i = t.y + t.height / 2 - r.height / 2, s;
  switch (o) {
    case q:
      s = {
        x: l,
        y: t.y - r.height
      };
      break;
    case te:
      s = {
        x: l,
        y: t.y + t.height
      };
      break;
    case re:
      s = {
        x: t.x + t.width,
        y: i
      };
      break;
    case Y:
      s = {
        x: t.x - r.width,
        y: i
      };
      break;
    default:
      s = {
        x: t.x,
        y: t.y
      };
  }
  var u = o ? Bt(o) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (a) {
      case _e:
        s[u] = s[u] - (t[c] / 2 - r[c] / 2);
        break;
      case qe:
        s[u] = s[u] + (t[c] / 2 - r[c] / 2);
        break;
    }
  }
  return s;
}
function Ye(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = n === void 0 ? e.placement : n, a = r.strategy, l = a === void 0 ? e.strategy : a, i = r.boundary, s = i === void 0 ? yn : i, u = r.rootBoundary, c = u === void 0 ? gr : u, f = r.elementContext, p = f === void 0 ? Ne : f, d = r.altBoundary, m = d === void 0 ? !1 : d, v = r.padding, g = v === void 0 ? 0 : v, O = Or(typeof g != "number" ? g : Er(g, Ge)), b = p === Ne ? wn : Ne, C = e.rects.popper, y = e.elements[m ? b : p], E = Jn(Ae(y) ? y : y.contextElement || we(e.elements.popper), s, c, l), x = De(e.elements.reference), A = $r({
    reference: x,
    element: C,
    strategy: "absolute",
    placement: o
  }), _ = Ot(Object.assign({}, C, A)), L = p === Ne ? _ : x, T = {
    top: E.top - L.top + O.top,
    bottom: L.bottom - E.bottom + O.bottom,
    left: E.left - L.left + O.left,
    right: L.right - E.right + O.right
  }, D = e.modifiersData.offset;
  if (p === Ne && D) {
    var H = D[o];
    Object.keys(T).forEach(function(S) {
      var G = [re, te].indexOf(S) >= 0 ? 1 : -1, W = [q, te].indexOf(S) >= 0 ? "y" : "x";
      T[S] += H[W] * G;
    });
  }
  return T;
}
function Zn(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = r.boundary, a = r.rootBoundary, l = r.padding, i = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? yr : s, c = Be(n), f = c ? i ? Zt : Zt.filter(function(m) {
    return Be(m) === c;
  }) : Ge, p = f.filter(function(m) {
    return u.indexOf(m) >= 0;
  });
  p.length === 0 && (p = f);
  var d = p.reduce(function(m, v) {
    return m[v] = Ye(e, {
      placement: v,
      boundary: o,
      rootBoundary: a,
      padding: l
    })[se(v)], m;
  }, {});
  return Object.keys(d).sort(function(m, v) {
    return d[m] - d[v];
  });
}
function eo(e) {
  if (se(e) === _t)
    return [];
  var t = ot(e);
  return [rr(e), t, rr(t)];
}
function to(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var o = r.mainAxis, a = o === void 0 ? !0 : o, l = r.altAxis, i = l === void 0 ? !0 : l, s = r.fallbackPlacements, u = r.padding, c = r.boundary, f = r.rootBoundary, p = r.altBoundary, d = r.flipVariations, m = d === void 0 ? !0 : d, v = r.allowedAutoPlacements, g = t.options.placement, O = se(g), b = O === g, C = s || (b || !m ? [ot(g)] : eo(g)), y = [g].concat(C).reduce(function(ve, me) {
      return ve.concat(se(me) === _t ? Zn(t, {
        placement: me,
        boundary: c,
        rootBoundary: f,
        padding: u,
        flipVariations: m,
        allowedAutoPlacements: v
      }) : me);
    }, []), E = t.rects.reference, x = t.rects.popper, A = /* @__PURE__ */ new Map(), _ = !0, L = y[0], T = 0; T < y.length; T++) {
      var D = y[T], H = se(D), S = Be(D) === _e, G = [q, te].indexOf(H) >= 0, W = G ? "width" : "height", B = Ye(t, {
        placement: D,
        boundary: c,
        rootBoundary: f,
        altBoundary: p,
        padding: u
      }), w = G ? S ? re : Y : S ? te : q;
      E[W] > x[W] && (w = ot(w));
      var P = ot(w), F = [];
      if (a && F.push(B[H] <= 0), i && F.push(B[w] <= 0, B[P] <= 0), F.every(function(ve) {
        return ve;
      })) {
        L = D, _ = !1;
        break;
      }
      A.set(D, F);
    }
    if (_)
      for (var I = m ? 3 : 1, pe = function(me) {
        var Me = y.find(function(Ze) {
          var be = A.get(Ze);
          if (be)
            return be.slice(0, me).every(function(vt) {
              return vt;
            });
        });
        if (Me)
          return L = Me, "break";
      }, z = I; z > 0; z--) {
        var Pe = pe(z);
        if (Pe === "break")
          break;
      }
    t.placement !== L && (t.modifiersData[n]._skip = !0, t.placement = L, t.reset = !0);
  }
}
const ro = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: to,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function or(e, t, r) {
  return r === void 0 && (r = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - r.y,
    right: e.right - t.width + r.x,
    bottom: e.bottom - t.height + r.y,
    left: e.left - t.width - r.x
  };
}
function ar(e) {
  return [q, re, te, Y].some(function(t) {
    return e[t] >= 0;
  });
}
function no(e) {
  var t = e.state, r = e.name, n = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, l = Ye(t, {
    elementContext: "reference"
  }), i = Ye(t, {
    altBoundary: !0
  }), s = or(l, n), u = or(i, o, a), c = ar(s), f = ar(u);
  t.modifiersData[r] = {
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
  fn: no
};
function ao(e, t, r) {
  var n = se(e), o = [Y, q].indexOf(n) >= 0 ? -1 : 1, a = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, l = a[0], i = a[1];
  return l = l || 0, i = (i || 0) * o, [Y, re].indexOf(n) >= 0 ? {
    x: i,
    y: l
  } : {
    x: l,
    y: i
  };
}
function io(e) {
  var t = e.state, r = e.options, n = e.name, o = r.offset, a = o === void 0 ? [0, 0] : o, l = yr.reduce(function(c, f) {
    return c[f] = ao(f, t.rects, a), c;
  }, {}), i = l[t.placement], s = i.x, u = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += s, t.modifiersData.popperOffsets.y += u), t.modifiersData[n] = l;
}
const lo = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: io
};
function so(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = $r({
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
  var t = e.state, r = e.options, n = e.name, o = r.mainAxis, a = o === void 0 ? !0 : o, l = r.altAxis, i = l === void 0 ? !1 : l, s = r.boundary, u = r.rootBoundary, c = r.altBoundary, f = r.padding, p = r.tether, d = p === void 0 ? !0 : p, m = r.tetherOffset, v = m === void 0 ? 0 : m, g = Ye(t, {
    boundary: s,
    rootBoundary: u,
    padding: f,
    altBoundary: c
  }), O = se(t.placement), b = Be(t.placement), C = !b, y = Bt(O), E = co(y), x = t.modifiersData.popperOffsets, A = t.rects.reference, _ = t.rects.popper, L = typeof v == "function" ? v(Object.assign({}, t.rects, {
    placement: t.placement
  })) : v, T = typeof L == "number" ? {
    mainAxis: L,
    altAxis: L
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, L), D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, H = {
    x: 0,
    y: 0
  };
  if (x) {
    if (a) {
      var S, G = y === "y" ? q : Y, W = y === "y" ? te : re, B = y === "y" ? "height" : "width", w = x[y], P = w + g[G], F = w - g[W], I = d ? -_[B] / 2 : 0, pe = b === _e ? A[B] : _[B], z = b === _e ? -_[B] : -A[B], Pe = t.elements.arrow, ve = d && Pe ? Dt(Pe) : {
        width: 0,
        height: 0
      }, me = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : xr(), Me = me[G], Ze = me[W], be = Ve(0, A[B], ve[B]), vt = C ? A[B] / 2 - I - be - Me - T.mainAxis : pe - be - Me - T.mainAxis, Yr = C ? -A[B] / 2 + I + be + Ze + T.mainAxis : z + be + Ze + T.mainAxis, mt = t.elements.arrow && Ke(t.elements.arrow), Xr = mt ? y === "y" ? mt.clientTop || 0 : mt.clientLeft || 0 : 0, zt = (S = D == null ? void 0 : D[y]) != null ? S : 0, Gr = w + vt - zt - Xr, Kr = w + Yr - zt, Vt = Ve(d ? lt(P, Gr) : P, w, d ? Se(F, Kr) : F);
      x[y] = Vt, H[y] = Vt - w;
    }
    if (i) {
      var Ut, Qr = y === "x" ? q : Y, Jr = y === "x" ? te : re, xe = x[E], et = E === "y" ? "height" : "width", qt = xe + g[Qr], Yt = xe - g[Jr], ht = [q, Y].indexOf(O) !== -1, Xt = (Ut = D == null ? void 0 : D[E]) != null ? Ut : 0, Gt = ht ? qt : xe - A[et] - _[et] - Xt + T.altAxis, Kt = ht ? xe + A[et] + _[et] - Xt - T.altAxis : Yt, Qt = d && ht ? jn(Gt, xe, Kt) : Ve(d ? Gt : qt, xe, d ? Kt : Yt);
      x[E] = Qt, H[E] = Qt - xe;
    }
    t.modifiersData[n] = H;
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
  return e === Q(e) || !Z(e) ? jt(e) : vo(e);
}
function ho(e) {
  var t = e.getBoundingClientRect(), r = Le(t.width) / e.offsetWidth || 1, n = Le(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function go(e, t, r) {
  r === void 0 && (r = !1);
  var n = Z(t), o = Z(t) && ho(t), a = we(t), l = De(e, o, r), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((ce(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Mt(a)) && (i = mo(t)), Z(t) ? (s = De(t, !0), s.x += t.clientLeft, s.y += t.clientTop) : a && (s.x = Ft(a))), {
    x: l.left + i.scrollLeft - s.x,
    y: l.top + i.scrollTop - s.y,
    width: l.width,
    height: l.height
  };
}
function yo(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function o(a) {
    r.add(a.name);
    var l = [].concat(a.requires || [], a.requiresIfExists || []);
    l.forEach(function(i) {
      if (!r.has(i)) {
        var s = t.get(i);
        s && o(s);
      }
    }), n.push(a);
  }
  return e.forEach(function(a) {
    r.has(a.name) || o(a);
  }), n;
}
function wo(e) {
  var t = yo(e);
  return Tn.reduce(function(r, n) {
    return r.concat(t.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
function bo(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function xo(e) {
  var t = e.reduce(function(r, n) {
    var o = r[n.name];
    return r[n.name] = o ? Object.assign({}, o, n, {
      options: Object.assign({}, o.options, n.options),
      data: Object.assign({}, o.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
var ir = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function lr() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Oo(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, o = t.defaultOptions, a = o === void 0 ? ir : o;
  return function(i, s, u) {
    u === void 0 && (u = a);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, ir, a),
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
          reference: Ae(i) ? Ue(i) : i.contextElement ? Ue(i.contextElement) : [],
          popper: Ue(s)
        };
        var C = wo(xo([].concat(n, c.options.modifiers)));
        return c.orderedModifiers = C.filter(function(y) {
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
          var O = c.elements, b = O.reference, C = O.popper;
          if (lr(b, C)) {
            c.rects = {
              reference: go(b, Ke(C), c.options.strategy === "fixed"),
              popper: Dt(C)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(T) {
              return c.modifiersData[T.name] = Object.assign({}, T.data);
            });
            for (var y = 0; y < c.orderedModifiers.length; y++) {
              if (c.reset === !0) {
                c.reset = !1, y = -1;
                continue;
              }
              var E = c.orderedModifiers[y], x = E.fn, A = E.options, _ = A === void 0 ? {} : A, L = E.name;
              typeof x == "function" && (c = x({
                state: c,
                options: _,
                name: L,
                instance: d
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: bo(function() {
        return new Promise(function(g) {
          d.forceUpdate(), g(c);
        });
      }),
      destroy: function() {
        v(), p = !0;
      }
    };
    if (!lr(i, s))
      return d;
    d.setOptions(u).then(function(g) {
      !p && u.onFirstUpdate && u.onFirstUpdate(g);
    });
    function m() {
      c.orderedModifiers.forEach(function(g) {
        var O = g.name, b = g.options, C = b === void 0 ? {} : b, y = g.effect;
        if (typeof y == "function") {
          var E = y({
            state: c,
            name: O,
            instance: d,
            options: C
          }), x = function() {
          };
          f.push(E || x);
        }
      });
    }
    function v() {
      f.forEach(function(g) {
        return g();
      }), f = [];
    }
    return d;
  };
}
var Eo = [Un, uo, zn, Ln, lo, ro, po, Nn, oo], ko = /* @__PURE__ */ Oo({
  defaultModifiers: Eo
});
const Rt = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, o] of t)
    r[n] = o;
  return r;
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
}, So = {
  class: "z-10",
  ref: "contentRef"
}, Co = { class: "w-56 bg-white dark:bg-gray-800 rounded-md drop-shadow ring-1 ring-black ring-opacity-5" };
function Ao(e, t, r, n, o, a) {
  return R(), oe("div", null, [
    h("div", {
      onClick: t[0] || (t[0] = (l) => a.toggle()),
      ref: "triggerRef"
    }, [
      it(e.$slots, "trigger")
    ], 512),
    h("div", So, [
      U(fr, {
        "enter-active-class": "transition ease-out duration-100",
        "enter-from-class": "transform opacity-0 scale-95",
        "enter-to-class": "transform opacity-100 scale-100",
        "leave-active-class": "transition ease-in duration-75",
        "leave-from-class": "transform opacity-100 scale-100",
        "leave-to-class": "transform opacity-0 scale-95"
      }, {
        default: j(() => [
          pr(h("div", Co, [
            it(e.$slots, "default")
          ], 512), [
            [vr, o.isOpen]
          ])
        ]),
        _: 3
      })
    ], 512)
  ]);
}
const To = /* @__PURE__ */ Rt($o, [["render", Ao]]);
function de(e, t, ...r) {
  if (e in t) {
    let o = t[e];
    return typeof o == "function" ? o(...r) : o;
  }
  let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((o) => `"${o}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, de), n;
}
var st = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(st || {}), ge = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(ge || {});
function J({ visible: e = !0, features: t = 0, ourProps: r, theirProps: n, ...o }) {
  var a;
  let l = Cr(n, r), i = Object.assign(o, { props: l });
  if (e || t & 2 && l.static)
    return yt(i);
  if (t & 1) {
    let s = (a = l.unmount) == null || a ? 0 : 1;
    return de(s, { [0]() {
      return null;
    }, [1]() {
      return yt({ ...o, props: { ...l, hidden: !0, style: { display: "none" } } });
    } });
  }
  return yt(i);
}
function yt({ props: e, attrs: t, slots: r, slot: n, name: o }) {
  var a, l;
  let { as: i, ...s } = Ar(e, ["unmount", "static"]), u = (a = r.default) == null ? void 0 : a.call(r, n), c = {};
  if (n) {
    let f = !1, p = [];
    for (let [d, m] of Object.entries(n))
      typeof m == "boolean" && (f = !0), m === !0 && p.push(d);
    f && (c["data-headlessui-state"] = p.join(" "));
  }
  if (i === "template") {
    if (u = Sr(u ?? []), Object.keys(s).length > 0 || Object.keys(t).length > 0) {
      let [f, ...p] = u ?? [];
      if (!Po(f) || p.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${o} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(s).concat(Object.keys(t)).map((v) => v.trim()).filter((v, g, O) => O.indexOf(v) === g).sort((v, g) => v.localeCompare(g)).map((v) => `  - ${v}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((v) => `  - ${v}`).join(`
`)].join(`
`));
      let d = Cr((l = f.props) != null ? l : {}, s), m = en(f, d);
      for (let v in d)
        v.startsWith("on") && (m.props || (m.props = {}), m.props[v] = d[v]);
      return m;
    }
    return Array.isArray(u) && u.length === 1 ? u[0] : u;
  }
  return M(i, Object.assign({}, s, c), { default: () => u });
}
function Sr(e) {
  return e.flatMap((t) => t.type === Pt ? Sr(t.children) : [t]);
}
function Cr(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, r = {};
  for (let n of e)
    for (let o in n)
      o.startsWith("on") && typeof n[o] == "function" ? (r[o] != null || (r[o] = []), r[o].push(n[o])) : t[o] = n[o];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(r).map((n) => [n, void 0])));
  for (let n in r)
    Object.assign(t, { [n](o, ...a) {
      let l = r[n];
      for (let i of l) {
        if (o instanceof Event && o.defaultPrevented)
          return;
        i(o, ...a);
      }
    } });
  return t;
}
function Ar(e, t = []) {
  let r = Object.assign({}, e);
  for (let n of t)
    n in r && delete r[n];
  return r;
}
function Po(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let _o = 0;
function Lo() {
  return ++_o;
}
function Te() {
  return Lo();
}
var Tr = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Tr || {});
function N(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let Pr = Symbol("Context");
var K = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(K || {});
function Do() {
  return Nt() !== null;
}
function Nt() {
  return ee(Pr, null);
}
function Bo(e) {
  ue(Pr, e);
}
var jo = Object.defineProperty, Fo = (e, t, r) => t in e ? jo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, sr = (e, t, r) => (Fo(e, typeof t != "symbol" ? t + "" : t, r), r);
class Mo {
  constructor() {
    sr(this, "current", this.detect()), sr(this, "currentId", 0);
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
let Qe = new Mo();
function Fe(e) {
  if (Qe.isServer)
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
let Et = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var he = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(he || {}), _r = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(_r || {}), Ro = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Ro || {});
function No(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Et)).sort((t, r) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (r.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Lr = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Lr || {});
function Ho(e, t = 0) {
  var r;
  return e === ((r = Fe(e)) == null ? void 0 : r.body) ? !1 : de(t, { [0]() {
    return e.matches(Et);
  }, [1]() {
    let n = e;
    for (; n !== null; ) {
      if (n.matches(Et))
        return !0;
      n = n.parentElement;
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
function Ce(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Io = ["textarea", "input"].join(",");
function zo(e) {
  var t, r;
  return (r = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Io)) != null ? r : !1;
}
function Vo(e, t = (r) => r) {
  return e.slice().sort((r, n) => {
    let o = t(r), a = t(n);
    if (o === null || a === null)
      return 0;
    let l = o.compareDocumentPosition(a);
    return l & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : l & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function at(e, t, { sorted: r = !0, relativeTo: n = null, skipElements: o = [] } = {}) {
  var a;
  let l = (a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? a : document, i = Array.isArray(e) ? r ? Vo(e) : e : No(e);
  o.length > 0 && i.length > 1 && (i = i.filter((m) => !o.includes(m))), n = n ?? l.activeElement;
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
      return Math.max(0, i.indexOf(n)) - 1;
    if (t & 4)
      return Math.max(0, i.indexOf(n)) + 1;
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
function ur(e, t, r) {
  Qe.isServer || ae((n) => {
    document.addEventListener(e, t, r), n(() => document.removeEventListener(e, t, r));
  });
}
function Dr(e, t, r) {
  Qe.isServer || ae((n) => {
    window.addEventListener(e, t, r), n(() => window.removeEventListener(e, t, r));
  });
}
function Uo(e, t, r = k(() => !0)) {
  function n(a, l) {
    if (!r.value || a.defaultPrevented)
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
    return !Ho(i, Lr.Loose) && i.tabIndex !== -1 && a.preventDefault(), t(a, i);
  }
  let o = $(null);
  ur("mousedown", (a) => {
    var l, i;
    r.value && (o.value = ((i = (l = a.composedPath) == null ? void 0 : l.call(a)) == null ? void 0 : i[0]) || a.target);
  }, !0), ur("click", (a) => {
    o.value && (n(a, () => o.value), o.value = null);
  }, !0), Dr("blur", (a) => n(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var ut = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(ut || {});
let kt = X({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: r }) {
  return () => {
    let { features: n, ...o } = e, a = { "aria-hidden": (n & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
    return J({ ourProps: a, theirProps: o, slot: {}, attrs: r, slots: t, name: "Hidden" });
  };
} });
function qo() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function dt() {
  let e = [], t = { addEventListener(r, n, o, a) {
    return r.addEventListener(n, o, a), t.add(() => r.removeEventListener(n, o, a));
  }, requestAnimationFrame(...r) {
    let n = requestAnimationFrame(...r);
    t.add(() => cancelAnimationFrame(n));
  }, nextFrame(...r) {
    t.requestAnimationFrame(() => {
      t.requestAnimationFrame(...r);
    });
  }, setTimeout(...r) {
    let n = setTimeout(...r);
    t.add(() => clearTimeout(n));
  }, style(r, n, o) {
    let a = r.style.getPropertyValue(n);
    return Object.assign(r.style, { [n]: o }), this.add(() => {
      Object.assign(r.style, { [n]: a });
    });
  }, group(r) {
    let n = dt();
    return r(n), this.add(() => n.dispose());
  }, add(r) {
    return e.push(r), () => {
      let n = e.indexOf(r);
      if (n >= 0)
        for (let o of e.splice(n, 1))
          o();
    };
  }, dispose() {
    for (let r of e.splice(0))
      r();
  } };
  return t;
}
var ze = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(ze || {});
function Yo() {
  let e = $(0);
  return Dr("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Br(e, t, r, n) {
  Qe.isServer || ae((o) => {
    e = e ?? window, e.addEventListener(t, r, n), o(() => e.removeEventListener(t, r, n));
  });
}
function jr(e) {
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
function Fr(e) {
  if (!e)
    return /* @__PURE__ */ new Set();
  if (typeof e == "function")
    return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let r of e.value) {
    let n = N(r);
    n instanceof HTMLElement && t.add(n);
  }
  return t;
}
var Mr = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Mr || {});
let He = Object.assign(X({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: $(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let o = $(null);
  n({ el: o, $el: o });
  let a = k(() => Fe(o)), l = $(!1);
  V(() => l.value = !0), ie(() => l.value = !1), Ko({ ownerDocument: a }, k(() => l.value && !!(e.features & 16)));
  let i = Qo({ ownerDocument: a, container: o, initialFocus: k(() => e.initialFocus) }, k(() => l.value && !!(e.features & 2)));
  Jo({ ownerDocument: a, container: o, containers: e.containers, previousActiveElement: i }, k(() => l.value && !!(e.features & 8)));
  let s = Yo();
  function u(d) {
    let m = N(o);
    m && ((v) => v())(() => {
      de(s.value, { [ze.Forwards]: () => {
        at(m, he.First, { skipElements: [d.relatedTarget] });
      }, [ze.Backwards]: () => {
        at(m, he.Last, { skipElements: [d.relatedTarget] });
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
    let m = Fr(e.containers);
    N(o) instanceof HTMLElement && m.add(N(o));
    let v = d.relatedTarget;
    v instanceof HTMLElement && v.dataset.headlessuiFocusGuard !== "true" && (Rr(m, v) || (c.value ? at(N(o), de(s.value, { [ze.Forwards]: () => he.Next, [ze.Backwards]: () => he.Previous }) | he.WrapAround, { relativeTo: d.target }) : d.target instanceof HTMLElement && Ce(d.target)));
  }
  return () => {
    let d = {}, m = { ref: o, onKeydown: f, onFocusout: p }, { features: v, initialFocus: g, containers: O, ...b } = e;
    return M(Pt, [!!(v & 4) && M(kt, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: u, features: ut.Focusable }), J({ ourProps: m, theirProps: { ...t, ...b }, slot: d, attrs: t, slots: r, name: "FocusTrap" }), !!(v & 4) && M(kt, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: u, features: ut.Focusable })]);
  };
} }), { features: Mr }), ke = [];
Xo(() => {
  function e(t) {
    t.target instanceof HTMLElement && t.target !== document.body && ke[0] !== t.target && (ke.unshift(t.target), ke = ke.filter((r) => r != null && r.isConnected), ke.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function Go(e) {
  let t = $(ke.slice());
  return Xe([e], ([r], [n]) => {
    n === !0 && r === !1 ? jr(() => {
      t.value.splice(0);
    }) : n === !1 && r === !0 && (t.value = ke.slice());
  }, { flush: "post" }), () => {
    var r;
    return (r = t.value.find((n) => n != null && n.isConnected)) != null ? r : null;
  };
}
function Ko({ ownerDocument: e }, t) {
  let r = Go(t);
  V(() => {
    ae(() => {
      var n, o;
      t.value || ((n = e.value) == null ? void 0 : n.activeElement) === ((o = e.value) == null ? void 0 : o.body) && Ce(r());
    }, { flush: "post" });
  }), ie(() => {
    t.value && Ce(r());
  });
}
function Qo({ ownerDocument: e, container: t, initialFocus: r }, n) {
  let o = $(null), a = $(!1);
  return V(() => a.value = !0), ie(() => a.value = !1), V(() => {
    Xe([t, r, n], (l, i) => {
      if (l.every((u, c) => (i == null ? void 0 : i[c]) === u) || !n.value)
        return;
      let s = N(t);
      s && jr(() => {
        var u, c;
        if (!a.value)
          return;
        let f = N(r), p = (u = e.value) == null ? void 0 : u.activeElement;
        if (f) {
          if (f === p) {
            o.value = p;
            return;
          }
        } else if (s.contains(p)) {
          o.value = p;
          return;
        }
        f ? Ce(f) : at(s, he.First | he.NoScroll) === _r.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), o.value = (c = e.value) == null ? void 0 : c.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), o;
}
function Jo({ ownerDocument: e, container: t, containers: r, previousActiveElement: n }, o) {
  var a;
  Br((a = e.value) == null ? void 0 : a.defaultView, "focus", (l) => {
    if (!o.value)
      return;
    let i = Fr(r);
    N(t) instanceof HTMLElement && i.add(N(t));
    let s = n.value;
    if (!s)
      return;
    let u = l.target;
    u && u instanceof HTMLElement ? Rr(i, u) ? (n.value = u, Ce(u)) : (l.preventDefault(), l.stopPropagation(), Ce(s)) : Ce(n.value);
  }, !0);
}
function Rr(e, t) {
  for (let r of e)
    if (r.contains(t))
      return !0;
  return !1;
}
let wt = /* @__PURE__ */ new Map(), We = /* @__PURE__ */ new Map();
function cr(e, t = $(!0)) {
  ae((r) => {
    var n;
    if (!t.value)
      return;
    let o = N(e);
    if (!o)
      return;
    r(function() {
      var l;
      if (!o)
        return;
      let i = (l = We.get(o)) != null ? l : 1;
      if (i === 1 ? We.delete(o) : We.set(o, i - 1), i !== 1)
        return;
      let s = wt.get(o);
      s && (s["aria-hidden"] === null ? o.removeAttribute("aria-hidden") : o.setAttribute("aria-hidden", s["aria-hidden"]), o.inert = s.inert, wt.delete(o));
    });
    let a = (n = We.get(o)) != null ? n : 0;
    We.set(o, a + 1), a === 0 && (wt.set(o, { "aria-hidden": o.getAttribute("aria-hidden"), inert: o.inert }), o.setAttribute("aria-hidden", "true"), o.inert = !0);
  });
}
let Nr = Symbol("ForcePortalRootContext");
function Zo() {
  return ee(Nr, !1);
}
let $t = X({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: r }) {
  return ue(Nr, e.force), () => {
    let { force: n, ...o } = e;
    return J({ theirProps: o, ourProps: {}, slot: {}, slots: t, attrs: r, name: "ForcePortalRoot" });
  };
} });
function ea(e) {
  let t = Fe(e);
  if (!t) {
    if (e === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`);
  }
  let r = t.getElementById("headlessui-portal-root");
  if (r)
    return r;
  let n = t.createElement("div");
  return n.setAttribute("id", "headlessui-portal-root"), t.body.appendChild(n);
}
let Hr = X({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: r }) {
  let n = $(null), o = k(() => Fe(n)), a = Zo(), l = ee(Wr, null), i = $(a === !0 || l == null ? ea(n.value) : l.resolveTarget());
  ae(() => {
    a || l != null && (i.value = l.resolveTarget());
  });
  let s = ee(St, null);
  return V(() => {
    let u = N(n);
    u && s && ie(s.register(u));
  }), ie(() => {
    var u, c;
    let f = (u = o.value) == null ? void 0 : u.getElementById("headlessui-portal-root");
    f && i.value === f && i.value.children.length <= 0 && ((c = i.value.parentElement) == null || c.removeChild(i.value));
  }), () => {
    if (i.value === null)
      return null;
    let u = { ref: n, "data-headlessui-portal": "" };
    return M(tn, { to: i.value }, J({ ourProps: u, theirProps: e, slot: {}, attrs: r, slots: t, name: "Portal" }));
  };
} }), St = Symbol("PortalParentContext");
function ta() {
  let e = ee(St, null), t = $([]);
  function r(a) {
    return t.value.push(a), e && e.register(a), () => n(a);
  }
  function n(a) {
    let l = t.value.indexOf(a);
    l !== -1 && t.value.splice(l, 1), e && e.unregister(a);
  }
  let o = { register: r, unregister: n, portals: t };
  return [t, X({ name: "PortalWrapper", setup(a, { slots: l }) {
    return ue(St, o), () => {
      var i;
      return (i = l.default) == null ? void 0 : i.call(l);
    };
  } })];
}
let Wr = Symbol("PortalGroupContext"), ra = X({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: r }) {
  let n = rn({ resolveTarget() {
    return e.target;
  } });
  return ue(Wr, n), () => {
    let { target: o, ...a } = e;
    return J({ theirProps: a, ourProps: {}, slot: {}, attrs: t, slots: r, name: "PortalGroup" });
  };
} }), Ir = Symbol("StackContext");
var Ct = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(Ct || {});
function na() {
  return ee(Ir, () => {
  });
}
function oa({ type: e, enabled: t, element: r, onUpdate: n }) {
  let o = na();
  function a(...l) {
    n == null || n(...l), o(...l);
  }
  V(() => {
    Xe(t, (l, i) => {
      l ? a(0, e, r) : i === !0 && a(1, e, r);
    }, { immediate: !0, flush: "sync" });
  }), ie(() => {
    t.value && a(1, e, r);
  }), ue(Ir, a);
}
let zr = Symbol("DescriptionContext");
function aa() {
  let e = ee(zr, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function ia({ slot: e = $({}), name: t = "Description", props: r = {} } = {}) {
  let n = $([]);
  function o(a) {
    return n.value.push(a), () => {
      let l = n.value.indexOf(a);
      l !== -1 && n.value.splice(l, 1);
    };
  }
  return ue(zr, { register: o, slot: e, name: t, props: r }), k(() => n.value.length > 0 ? n.value.join(" ") : void 0);
}
X({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${Te()}` } }, setup(e, { attrs: t, slots: r }) {
  let n = aa();
  return V(() => ie(n.register(e.id))), () => {
    let { name: o = "Description", slot: a = $({}), props: l = {} } = n, { id: i, ...s } = e, u = { ...Object.entries(l).reduce((c, [f, p]) => Object.assign(c, { [f]: ne(p) }), {}), id: i };
    return J({ ourProps: u, theirProps: s, slot: a.value, attrs: t, slots: r, name: o });
  };
} });
function la(e) {
  let t = nn(e.getSnapshot());
  return ie(e.subscribe(() => {
    t.value = e.getSnapshot();
  })), t;
}
function sa(e, t) {
  let r = e(), n = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return r;
  }, subscribe(o) {
    return n.add(o), () => n.delete(o);
  }, dispatch(o, ...a) {
    let l = t[o].call(r, ...a);
    l && (r = l, n.forEach((i) => i()));
  } };
}
function ua() {
  let e;
  return { before({ doc: t }) {
    var r;
    let n = t.documentElement;
    e = ((r = t.defaultView) != null ? r : window).innerWidth - n.clientWidth;
  }, after({ doc: t, d: r }) {
    let n = t.documentElement, o = n.clientWidth - n.offsetWidth, a = e - o;
    r.style(n, "paddingRight", `${a}px`);
  } };
}
function ca() {
  if (!qo())
    return {};
  let e;
  return { before() {
    e = window.pageYOffset;
  }, after({ doc: t, d: r, meta: n }) {
    function o(l) {
      return n.containers.flatMap((i) => i()).some((i) => i.contains(l));
    }
    r.style(t.body, "marginTop", `-${e}px`), window.scrollTo(0, 0);
    let a = null;
    r.addEventListener(t, "click", (l) => {
      if (l.target instanceof HTMLElement)
        try {
          let i = l.target.closest("a");
          if (!i)
            return;
          let { hash: s } = new URL(i.href), u = t.querySelector(s);
          u && !o(u) && (a = u);
        } catch {
        }
    }, !0), r.addEventListener(t, "touchmove", (l) => {
      l.target instanceof HTMLElement && !o(l.target) && l.preventDefault();
    }, { passive: !1 }), r.add(() => {
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
  for (let r of e)
    Object.assign(t, r(t));
  return t;
}
let $e = sa(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var r;
  let n = (r = this.get(e)) != null ? r : { doc: e, count: 0, d: dt(), meta: /* @__PURE__ */ new Set() };
  return n.count++, n.meta.add(t), this.set(e, n), this;
}, POP(e, t) {
  let r = this.get(e);
  return r && (r.count--, r.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: r }) {
  let n = { doc: e, d: t, meta: fa(r) }, o = [ca(), ua(), da()];
  o.forEach(({ before: a }) => a == null ? void 0 : a(n)), o.forEach(({ after: a }) => a == null ? void 0 : a(n));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
$e.subscribe(() => {
  let e = $e.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [r] of e)
    t.set(r, r.documentElement.style.overflow);
  for (let r of e.values()) {
    let n = t.get(r.doc) === "hidden", o = r.count !== 0;
    (o && !n || !o && n) && $e.dispatch(r.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", r), r.count === 0 && $e.dispatch("TEARDOWN", r);
  }
});
function pa(e, t, r) {
  let n = la($e), o = k(() => {
    let a = e.value ? n.value.get(e.value) : void 0;
    return a ? a.count > 0 : !1;
  });
  return Xe([e, t], ([a, l], [i], s) => {
    if (!a || !l)
      return;
    $e.dispatch("PUSH", a, r);
    let u = !1;
    s(() => {
      u || ($e.dispatch("POP", i ?? a, r), u = !0);
    });
  }, { immediate: !0 }), o;
}
function va({ defaultContainers: e = [], portals: t } = {}) {
  let r = $(null), n = Fe(r);
  function o() {
    var a;
    let l = [];
    for (let i of e)
      i !== null && (i instanceof HTMLElement ? l.push(i) : "value" in i && i.value instanceof HTMLElement && l.push(i.value));
    if (t != null && t.value)
      for (let i of t.value)
        l.push(i);
    for (let i of (a = n == null ? void 0 : n.querySelectorAll("html > *, body > *")) != null ? a : [])
      i !== document.body && i !== document.head && i instanceof HTMLElement && i.id !== "headlessui-portal-root" && (i.contains(N(r)) || l.some((s) => i.contains(s)) || l.push(i));
    return l;
  }
  return { resolveContainers: o, contains(a) {
    return o().some((l) => l.contains(a));
  }, mainTreeNodeRef: r, MainTreeNode() {
    return M(kt, { features: ut.Hidden, ref: r });
  } };
}
var ma = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(ma || {});
let At = Symbol("DialogContext");
function Je(e) {
  let t = ee(At, null);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Je), r;
  }
  return t;
}
let rt = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", Ht = X({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: rt }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${Te()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: o }) {
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
  let p = k(() => l.value && u.value ? 0 : 1), d = k(() => p.value === 0), m = k(() => i.value > 1), v = ee(At, null) !== null, [g, O] = ta(), { resolveContainers: b, mainTreeNodeRef: C, MainTreeNode: y } = va({ portals: g, defaultContainers: [k(() => {
    var w;
    return (w = S.panelRef.value) != null ? w : c.value;
  })] }), E = k(() => m.value ? "parent" : "leaf"), x = k(() => s !== null ? (s.value & K.Closing) === K.Closing : !1), A = k(() => v || x.value ? !1 : d.value), _ = k(() => {
    var w, P, F;
    return (F = Array.from((P = (w = f.value) == null ? void 0 : w.querySelectorAll("body > *")) != null ? P : []).find((I) => I.id === "headlessui-portal-root" ? !1 : I.contains(N(C)) && I instanceof HTMLElement)) != null ? F : null;
  });
  cr(_, A);
  let L = k(() => m.value ? !0 : d.value), T = k(() => {
    var w, P, F;
    return (F = Array.from((P = (w = f.value) == null ? void 0 : w.querySelectorAll("[data-headlessui-portal]")) != null ? P : []).find((I) => I.contains(N(C)) && I instanceof HTMLElement)) != null ? F : null;
  });
  cr(T, L), oa({ type: "Dialog", enabled: k(() => p.value === 0), element: c, onUpdate: (w, P) => {
    if (P === "Dialog")
      return de(w, { [Ct.Add]: () => i.value += 1, [Ct.Remove]: () => i.value -= 1 });
  } });
  let D = ia({ name: "DialogDescription", slot: k(() => ({ open: u.value })) }), H = $(null), S = { titleId: H, panelRef: $(null), dialogState: p, setTitleId(w) {
    H.value !== w && (H.value = w);
  }, close() {
    t("close", !1);
  } };
  ue(At, S);
  let G = k(() => !(!d.value || m.value));
  Uo(b, (w, P) => {
    S.close(), on(() => P == null ? void 0 : P.focus());
  }, G);
  let W = k(() => !(m.value || p.value !== 0));
  Br((a = f.value) == null ? void 0 : a.defaultView, "keydown", (w) => {
    W.value && (w.defaultPrevented || w.key === Tr.Escape && (w.preventDefault(), w.stopPropagation(), S.close()));
  });
  let B = k(() => !(x.value || p.value !== 0 || v));
  return pa(f, B, (w) => {
    var P;
    return { containers: [...(P = w.containers) != null ? P : [], b] };
  }), ae((w) => {
    if (p.value !== 0)
      return;
    let P = N(c);
    if (!P)
      return;
    let F = new ResizeObserver((I) => {
      for (let pe of I) {
        let z = pe.target.getBoundingClientRect();
        z.x === 0 && z.y === 0 && z.width === 0 && z.height === 0 && S.close();
      }
    });
    F.observe(P), w(() => F.disconnect());
  }), () => {
    let { id: w, open: P, initialFocus: F, ...I } = e, pe = { ...r, ref: c, id: w, role: "dialog", "aria-modal": p.value === 0 ? !0 : void 0, "aria-labelledby": H.value, "aria-describedby": D.value }, z = { open: p.value === 0 };
    return M($t, { force: !0 }, () => [M(Hr, () => M(ra, { target: c.value }, () => M($t, { force: !1 }, () => M(He, { initialFocus: F, containers: b, features: d.value ? de(E.value, { parent: He.features.RestoreFocus, leaf: He.features.All & ~He.features.FocusLock }) : He.features.None }, () => M(O, {}, () => J({ ourProps: pe, theirProps: { ...I, ...r }, slot: z, attrs: r, slots: n, visible: p.value === 0, features: st.RenderStrategy | st.Static, name: "Dialog" })))))), M(y)]);
  };
} }), ha = X({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${Te()}` } }, setup(e, { attrs: t, slots: r }) {
  let n = Je("DialogOverlay");
  function o(a) {
    a.target === a.currentTarget && (a.preventDefault(), a.stopPropagation(), n.close());
  }
  return () => {
    let { id: a, ...l } = e;
    return J({ ourProps: { id: a, "aria-hidden": !0, onClick: o }, theirProps: l, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogOverlay" });
  };
} });
X({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${Te()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let o = Je("DialogBackdrop"), a = $(null);
  return n({ el: a, $el: a }), V(() => {
    if (o.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: l, ...i } = e, s = { id: l, ref: a, "aria-hidden": !0 };
    return M($t, { force: !0 }, () => M(Hr, () => J({ ourProps: s, theirProps: { ...t, ...i }, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogBackdrop" })));
  };
} });
let Vr = X({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${Te()}` } }, setup(e, { attrs: t, slots: r, expose: n }) {
  let o = Je("DialogPanel");
  n({ el: o.panelRef, $el: o.panelRef });
  function a(l) {
    l.stopPropagation();
  }
  return () => {
    let { id: l, ...i } = e, s = { id: l, ref: o.panelRef, onClick: a };
    return J({ ourProps: s, theirProps: i, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogPanel" });
  };
} });
X({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${Te()}` } }, setup(e, { attrs: t, slots: r }) {
  let n = Je("DialogTitle");
  return V(() => {
    n.setTitleId(e.id), ie(() => n.setTitleId(null));
  }), () => {
    let { id: o, ...a } = e;
    return J({ ourProps: { id: o }, theirProps: a, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogTitle" });
  };
} });
function ga(e) {
  let t = { called: !1 };
  return (...r) => {
    if (!t.called)
      return t.called = !0, e(...r);
  };
}
function bt(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function nt(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var Tt = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(Tt || {});
function ya(e, t) {
  let r = dt();
  if (!e)
    return r.dispose;
  let { transitionDuration: n, transitionDelay: o } = getComputedStyle(e), [a, l] = [n, o].map((i) => {
    let [s = 0] = i.split(",").filter(Boolean).map((u) => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, c) => c - u);
    return s;
  });
  return a !== 0 ? r.setTimeout(() => t("finished"), a + l) : t("finished"), r.add(() => t("cancelled")), r.dispose;
}
function dr(e, t, r, n, o, a) {
  let l = dt(), i = a !== void 0 ? ga(a) : () => {
  };
  return nt(e, ...o), bt(e, ...t, ...r), l.nextFrame(() => {
    nt(e, ...r), bt(e, ...n), l.add(ya(e, (s) => (nt(e, ...n, ...t), bt(e, ...o), i(s))));
  }), l.add(() => nt(e, ...t, ...r, ...n, ...o)), l.add(() => i("cancelled")), l.dispose;
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
function ft(e) {
  return "children" in e ? ft(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Ur(e) {
  let t = $([]), r = $(!1);
  V(() => r.value = !0), ie(() => r.value = !1);
  function n(a, l = ge.Hidden) {
    let i = t.value.findIndex(({ id: s }) => s === a);
    i !== -1 && (de(l, { [ge.Unmount]() {
      t.value.splice(i, 1);
    }, [ge.Hidden]() {
      t.value[i].state = "hidden";
    } }), !ft(t) && r.value && (e == null || e()));
  }
  function o(a) {
    let l = t.value.find(({ id: i }) => i === a);
    return l ? l.state !== "visible" && (l.state = "visible") : t.value.push({ id: a, state: "visible" }), () => n(a, ge.Unmount);
  }
  return { children: t, register: o, unregister: n };
}
let qr = st.RenderStrategy, je = X({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: o }) {
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
  if (!ba() && Do())
    return () => M(pt, { ...e, onBeforeEnter: l, onAfterEnter: i, onBeforeLeave: s, onAfterLeave: u }, n);
  let c = $(null), f = k(() => e.unmount ? ge.Unmount : ge.Hidden);
  o({ el: c, $el: c });
  let { show: p, appear: d } = xa(), { register: m, unregister: v } = Oa(), g = $(p.value ? "visible" : "hidden"), O = { value: !0 }, b = Te(), C = { value: !1 }, y = Ur(() => {
    !C.value && g.value !== "hidden" && (g.value = "hidden", v(b), u());
  });
  V(() => {
    let S = m(b);
    ie(S);
  }), ae(() => {
    if (f.value === ge.Hidden && b) {
      if (p.value && g.value !== "visible") {
        g.value = "visible";
        return;
      }
      de(g.value, { hidden: () => v(b), visible: () => m(b) });
    }
  });
  let E = Oe(e.enter), x = Oe(e.enterFrom), A = Oe(e.enterTo), _ = Oe(e.entered), L = Oe(e.leave), T = Oe(e.leaveFrom), D = Oe(e.leaveTo);
  V(() => {
    ae(() => {
      if (g.value === "visible") {
        let S = N(c);
        if (S instanceof Comment && S.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function H(S) {
    let G = O.value && !d.value, W = N(c);
    !W || !(W instanceof HTMLElement) || G || (C.value = !0, p.value && l(), p.value || s(), S(p.value ? dr(W, E, x, A, _, (B) => {
      C.value = !1, B === Tt.Finished && i();
    }) : dr(W, L, T, D, _, (B) => {
      C.value = !1, B === Tt.Finished && (ft(y) || (g.value = "hidden", v(b), u()));
    })));
  }
  return V(() => {
    Xe([p], (S, G, W) => {
      H(W), O.value = !1;
    }, { immediate: !0 });
  }), ue(It, y), Bo(k(() => de(g.value, { visible: K.Open, hidden: K.Closed }) | a.value)), () => {
    let { appear: S, show: G, enter: W, enterFrom: B, enterTo: w, entered: P, leave: F, leaveFrom: I, leaveTo: pe, ...z } = e, Pe = { ref: c }, ve = { ...z, ...d.value && p.value && Qe.isServer ? { class: le([r.class, z.class, ...E, ...x]) } : {} };
    return J({ theirProps: ve, ourProps: Pe, slot: {}, slots: n, attrs: r, features: qr, visible: g.value === "visible", name: "TransitionChild" });
  };
} }), Ea = je, pt = X({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n }) {
  let o = Nt(), a = k(() => e.show === null && o !== null ? (o.value & K.Open) === K.Open : e.show);
  ae(() => {
    if (![!0, !1].includes(a.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let l = $(a.value ? "visible" : "hidden"), i = Ur(() => {
    l.value = "hidden";
  }), s = $(!0), u = { show: a, appear: k(() => e.appear || !s.value) };
  return V(() => {
    ae(() => {
      s.value = !1, a.value ? l.value = "visible" : ft(i) || (l.value = "hidden");
    });
  }), ue(It, i), ue(Wt, u), () => {
    let c = Ar(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), f = { unmount: e.unmount };
    return J({ ourProps: { ...f, as: "template" }, theirProps: {}, slot: {}, slots: { ...n, default: () => [M(Ea, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...r, ...f, ...c }, n.default)] }, attrs: {}, features: qr, visible: l.value === "visible", name: "Transition" });
  };
} });
const ka = /* @__PURE__ */ h("div", { class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" }, null, -1), $a = { class: "flex items-center justify-center min-h-full p-4 sm:p-0" }, Sa = { class: "p-4 sm:p-6" }, Ca = { class: "block absolute top-0 right-0 pt-4 pr-4" }, Aa = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, [
  /* @__PURE__ */ h("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), Ta = [
  Aa
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
    const r = e, n = $(""), o = k({
      get() {
        return r.size ? r.size : "sm:max-w-xl";
      }
    }), a = () => {
      if (r.backdropClose)
        return t("update:open", !r.open);
      n.value = "scale-105", setTimeout(() => {
        n.value = "";
      }, 300);
    };
    return (l, i) => (R(), ye(ne(pt), {
      as: "template",
      show: e.open
    }, {
      default: j(() => [
        U(ne(Ht), {
          as: "div",
          class: "relative z-10",
          onClose: a
        }, {
          default: j(() => [
            U(ne(je), {
              as: "template",
              enter: "ease-out duration-300",
              "enter-from": "opacity-0",
              "enter-to": "opacity-100",
              leave: "ease-in duration-200",
              "leave-from": "opacity-100",
              "leave-to": "opacity-0"
            }, {
              default: j(() => [
                ka
              ]),
              _: 1
            }),
            h("div", {
              class: le(["fixed z-10 inset-0 overflow-y-auto ease-out duration-300", n.value])
            }, [
              h("div", $a, [
                U(ne(je), {
                  as: "template",
                  enter: "ease-out duration-300",
                  "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                  "enter-to": "opacity-100 translate-y-0 sm:scale-100",
                  leave: "ease-in duration-200",
                  "leave-from": "opacity-100 translate-y-0 sm:scale-100",
                  "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                }, {
                  default: j(() => [
                    U(ne(Vr), {
                      class: le([o.value, "w-full relative bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all"])
                    }, {
                      default: j(() => [
                        h("div", Sa, [
                          h("div", Ca, [
                            h("button", {
                              tabindex: "-1",
                              type: "button",
                              class: "bg-white dark:bg-gray-800 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none",
                              onClick: i[0] || (i[0] = (s) => l.$emit("update:open", !e.open))
                            }, Ta)
                          ]),
                          h("h3", Pa, Ee(e.title), 1)
                        ]),
                        it(l.$slots, "default")
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
}, La = /* @__PURE__ */ h("div", { class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" }, null, -1), Da = { class: "fixed inset-0 overflow-hidden" }, Ba = { class: "absolute inset-0 overflow-hidden" }, ja = { class: "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10" }, Fa = /* @__PURE__ */ h("div", { class: "flex h-full flex-col overflow-y-scroll bg-white shadow-xl" }, null, -1), Ma = {
  __name: "Panel",
  props: {
    open: {
      type: Boolean,
      default: !1
    },
    size: String
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = e, n = k({
      get() {
        return r.size ? r.size : " max-w-md";
      }
    });
    return (o, a) => (R(), ye(ne(pt), {
      as: "template",
      show: e.open
    }, {
      default: j(() => [
        U(ne(Ht), {
          as: "div",
          class: "relative z-10",
          onClose: a[0] || (a[0] = (l) => o.$emit("update:open", !e.open))
        }, {
          default: j(() => [
            U(ne(je), {
              as: "template",
              enter: "ease-in-out duration-500",
              "enter-from": "opacity-0",
              "enter-to": "opacity-100",
              leave: "ease-in-out duration-500",
              "leave-from": "opacity-100",
              "leave-to": "opacity-0"
            }, {
              default: j(() => [
                La
              ]),
              _: 1
            }),
            h("div", Da, [
              h("div", Ba, [
                h("div", ja, [
                  U(ne(je), {
                    as: "template",
                    enter: "transform transition ease-in-out duration-500 sm:duration-700",
                    "enter-from": "translate-x-full",
                    "enter-to": "translate-x-0",
                    leave: "transform transition ease-in-out duration-500 sm:duration-700",
                    "leave-from": "translate-x-0",
                    "leave-to": "translate-x-full"
                  }, {
                    default: j(() => [
                      U(ne(Vr), {
                        class: le(["pointer-events-auto w-screen", n.value])
                      }, {
                        default: j(() => [
                          Fa
                        ]),
                        _: 1
                      }, 8, ["class"])
                    ]),
                    _: 1
                  })
                ])
              ])
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["show"]));
  }
};
class Ra {
  constructor(t, r) {
    this.startedAt = Date.now(), this.callback = t, this.delay = r, this.timer = setTimeout(t, r);
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
const Na = {
  success: "border-green-500",
  info: "border-blue-400",
  warning: "border-yellow-400",
  error: "border-red-500"
}, Ha = {
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
      return Na[this.type];
    }
  },
  methods: {
    createWrapperDiv() {
      this.divWrapper = document.querySelector(".dtc-alert-wrapper"), !this.divWrapper && (this.divWrapper = document.createElement("div"), this.divWrapper.className = "dtc-alert-wrapper fixed flex flex-col overflow-hidden top-0 bottom-0 left-0 right-0 z-50 pointer-events-none px-4 pt-3", document.body.appendChild(this.divWrapper));
    },
    showAlert() {
      this.divWrapper.insertAdjacentElement("afterbegin", this.$el), this.isActive = !0, this.timer = this.duration !== !1 ? new Ra(this.closeAlert, this.duration) : null;
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
}, Wa = { class: "p-4" }, Ia = { class: "flex items-start items-center" }, za = { class: "flex-shrink-0" }, Va = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-7 w-7 text-blue-400",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, Ua = /* @__PURE__ */ h("path", {
  "fill-rule": "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
  "clip-rule": "evenodd"
}, null, -1), qa = [
  Ua
], Ya = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-7 w-7 text-yellow-400",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, Xa = /* @__PURE__ */ h("path", {
  "fill-rule": "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
  "clip-rule": "evenodd"
}, null, -1), Ga = [
  Xa
], Ka = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-7 w-7 text-red-500",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, Qa = /* @__PURE__ */ h("path", {
  "fill-rule": "evenodd",
  d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
  "clip-rule": "evenodd"
}, null, -1), Ja = [
  Qa
], Za = {
  key: 3,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-7 w-7 text-green-500",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, ei = /* @__PURE__ */ h("path", {
  "fill-rule": "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
  "clip-rule": "evenodd"
}, null, -1), ti = [
  ei
], ri = { class: "ml-3 w-0 flex-1" }, ni = { class: "text-sm text-gray-700" }, oi = { class: "ml-4 flex-shrink-0 flex" }, ai = /* @__PURE__ */ h("span", { class: "sr-only" }, "Close", -1), ii = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-4 w-4",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ h("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), li = [
  ai,
  ii
];
function si(e, t, r, n, o, a) {
  return R(), ye(fr, {
    "enter-active-class": "transform ease-out duration-300 transition",
    "enter-from-class": "opacity-0 translate-x-0 translate-y-2",
    "enter-to-class": "opacity-100 translate-y-0",
    "leave-active-class": "transition ease-in duration-100",
    "leave-from-class": "opacity-100",
    "leave-to-class": "opacity-0"
  }, {
    default: j(() => [
      pr(h("div", {
        class: le([a.borderColor, "border-l-4 grid my-1.5 self-center max-w-sm w-full bg-white shadow-lg rounded pointer-events-auto ring-1 ring-black ring-opacity-5"]),
        onMouseover: t[1] || (t[1] = (l) => a.toggleTimer(!0)),
        onMouseleave: t[2] || (t[2] = (l) => a.toggleTimer(!1))
      }, [
        h("div", Wa, [
          h("div", Ia, [
            h("div", za, [
              r.type === "info" ? (R(), oe("svg", Va, qa)) : Ie("", !0),
              r.type === "warning" ? (R(), oe("svg", Ya, Ga)) : Ie("", !0),
              r.type === "error" ? (R(), oe("svg", Ka, Ja)) : Ie("", !0),
              r.type === "success" ? (R(), oe("svg", Za, ti)) : Ie("", !0)
            ]),
            h("div", ri, [
              h("p", ni, Ee(r.message), 1)
            ]),
            h("div", oi, [
              h("button", {
                onClick: t[0] || (t[0] = (...l) => a.closeAlert && a.closeAlert(...l)),
                class: "bg-white inline-flex text-gray-400 hover:text-gray-500 focus:outline-none"
              }, li)
            ])
          ])
        ])
      ], 34), [
        [vr, o.isActive]
      ])
    ]),
    _: 1
  });
}
const ui = /* @__PURE__ */ Rt(Ha, [["render", si]]), Oi = () => {
  const e = function(t, r = {}) {
    let n = { message: t, ...r }, o = M(ui, { ...n });
    mr(o, typeof document < "u" && document.createElement("div"));
  };
  return {
    success(t, r = {}) {
      return r.type = "success", e(t, r);
    },
    error(t, r = {}) {
      return r.type = "error", e(t, r);
    },
    info(t, r = {}) {
      return r.type = "info", e(t, r);
    },
    warning(t, r = {}) {
      return r.type = "warning", e(t, r);
    }
  };
}, ci = {
  name: "Confirm",
  components: {
    Dialog: Ht,
    DialogOverlay: ha,
    TransitionChild: je,
    TransitionRoot: pt,
    ButtonSubmit: hr
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
}, di = { class: "flex items-center justify-center min-h-screen p-4 text-center" }, fi = /* @__PURE__ */ h("span", {
  class: "hidden sm:inline-block sm:align-middle sm:h-screen",
  "aria-hidden": "true"
}, "​", -1), pi = { class: "inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6" }, vi = /* @__PURE__ */ h("div", { class: "mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-yellow-100" }, [
  /* @__PURE__ */ h("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-9 w-9 text-yellow-500",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, [
    /* @__PURE__ */ h("path", {
      "fill-rule": "evenodd",
      d: "M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z",
      "clip-rule": "evenodd"
    })
  ])
], -1), mi = { class: "mt-3 text-center sm:mt-5" }, hi = { class: "text-lg font-medium text-gray-800 dark:text-gray-100" }, gi = { class: "text-sm text-gray-500 dark:text-gray-300" }, yi = { class: "mt-5 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense" };
function wi(e, t, r, n, o, a) {
  const l = Re("DialogOverlay"), i = Re("TransitionChild"), s = Re("ButtonSubmit"), u = Re("Dialog"), c = Re("TransitionRoot");
  return R(), ye(c, {
    as: "template",
    show: o.open
  }, {
    default: j(() => [
      U(u, {
        as: "div",
        class: le(["fixed z-10 inset-0 overflow-y-auto ease-out duration-300", o.backdropClickAnimate]),
        onClose: t[1] || (t[1] = (f) => a.handleBackdropClose())
      }, {
        default: j(() => [
          h("div", di, [
            U(i, {
              as: "template",
              enter: "ease-out duration-300",
              "enter-from": "opacity-0",
              "enter-to": "opacity-100",
              leave: "ease-in duration-200",
              "leave-from": "opacity-100",
              "leave-to": "opacity-0"
            }, {
              default: j(() => [
                U(l, { class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" })
              ]),
              _: 1
            }),
            fi,
            U(i, {
              as: "template",
              enter: "ease-out duration-300",
              "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
              "enter-to": "opacity-100 translate-y-0 sm:scale-100",
              leave: "ease-in duration-200",
              "leave-from": "opacity-100 translate-y-0 sm:scale-100",
              "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            }, {
              default: j(() => [
                h("div", pi, [
                  h("div", null, [
                    vi,
                    h("div", mi, [
                      h("h3", hi, Ee(r.title), 1),
                      h("p", gi, Ee(r.message), 1)
                    ])
                  ]),
                  h("div", yi, [
                    r.cancelAction ? (R(), ye(s, {
                      key: 0,
                      type: "button",
                      class: "btn-light mb-3 sm:mb-0 w-full justify-center py-2.5 sm:col-start-1",
                      onClick: a.onCancel,
                      loading: o.cancelButtonLoading
                    }, {
                      default: j(() => [
                        Jt(Ee(r.cancelButtonText), 1)
                      ]),
                      _: 1
                    }, 8, ["onClick", "loading"])) : (R(), oe("button", {
                      key: 1,
                      type: "button",
                      class: "btn btn-light mb-3 sm:mb-0 w-full justify-center py-2.5 sm:col-start-1",
                      onClick: t[0] || (t[0] = (f) => o.open = !1)
                    }, Ee(r.cancelButtonText), 1)),
                    U(s, {
                      type: "button",
                      class: "btn btn-primary w-full justify-center py-2.5 sm:col-start-2",
                      onClick: a.onConfirm,
                      loading: o.confirmButtonLoading
                    }, {
                      default: j(() => [
                        Jt(Ee(r.confirmButtonText), 1)
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
const bi = /* @__PURE__ */ Rt(ci, [["render", wi]]), Ei = (e = {}) => {
  let t = { ...e }, r = M(bi, { ...t });
  mr(r, typeof document < "u" && document.createElement("div"));
}, ki = {
  install: (e) => {
    e.component("ButtonSubmit", hr), e.component("Pagination", gn), e.component("Dropdown", To), e.component("Modal", _a), e.component("Panel", Ma);
  }
};
export {
  hr as ButtonSubmit,
  To as Dropdown,
  _a as Modal,
  gn as Pagination,
  Ma as Panel,
  Ei as confirm,
  ki as default,
  Oi as notify
};
