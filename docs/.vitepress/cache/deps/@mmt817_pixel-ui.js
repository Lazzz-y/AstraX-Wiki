import {
  Fragment,
  Transition,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  defineComponent,
  getCurrentInstance,
  h,
  inject,
  isRef,
  isVNode,
  mergeProps,
  nextTick,
  normalizeClass,
  normalizeStyle,
  onBeforeUnmount,
  onMounted,
  onUnmounted,
  openBlock,
  provide,
  reactive,
  ref,
  render,
  renderList,
  renderSlot,
  resolveDynamicComponent,
  shallowReactive,
  shallowRef,
  toDisplayString,
  toHandlers,
  toRef,
  unref,
  useAttrs,
  useSlots,
  vModelDynamic,
  vModelText,
  vShow,
  watch,
  watchEffect,
  withCtx,
  withDirectives,
  withKeys,
  withModifiers
} from "./chunk-XQNPNIQJ.js";
import "./chunk-JVWSFFO4.js";

// node_modules/.pnpm/@mmt817+pixel-ui@1.6.0_vue@3.5.17_typescript@5.8.3_/node_modules/@mmt817/pixel-ui/dist/es/vendor-DvCor0B6.js
var e = "object" == typeof global && global && global.Object === Object && global;
var r = "object" == typeof self && self && self.Object === Object && self;
var n = e || r || Function("return this")();
var o = n.Symbol;
var i = Object.prototype;
var a = i.hasOwnProperty;
var s = i.toString;
var u = o ? o.toStringTag : void 0;
var c = Object.prototype.toString;
var l = o ? o.toStringTag : void 0;
function f(t2) {
  return null == t2 ? void 0 === t2 ? "[object Undefined]" : "[object Null]" : l && l in Object(t2) ? function(t3) {
    var e22 = a.call(t3, u), r22 = t3[u];
    try {
      t3[u] = void 0;
      var n22 = true;
    } catch (t4) {
    }
    var o22 = s.call(t3);
    return n22 && (e22 ? t3[u] = r22 : delete t3[u]), o22;
  }(t2) : function(t3) {
    return c.call(t3);
  }(t2);
}
function h2(t2) {
  return null != t2 && "object" == typeof t2;
}
function p(t2) {
  return "symbol" == typeof t2 || h2(t2) && "[object Symbol]" == f(t2);
}
function d(t2, e22) {
  for (var r22 = -1, n22 = null == t2 ? 0 : t2.length, o22 = Array(n22); ++r22 < n22; ) o22[r22] = e22(t2[r22], r22, t2);
  return o22;
}
var v = Array.isArray;
var y = o ? o.prototype : void 0;
var g = y ? y.toString : void 0;
function b(t2) {
  if ("string" == typeof t2) return t2;
  if (v(t2)) return d(t2, b) + "";
  if (p(t2)) return g ? g.call(t2) : "";
  var e22 = t2 + "";
  return "0" == e22 && 1 / t2 == -1 / 0 ? "-0" : e22;
}
var m = /\s/;
var _ = /^\s+/;
function w(t2) {
  var e22 = typeof t2;
  return null != t2 && ("object" == e22 || "function" == e22);
}
var j = /^[-+]0x[0-9a-f]+$/i;
var x = /^0b[01]+$/i;
var S = /^0o[0-7]+$/i;
var O = parseInt;
function C(t2) {
  if ("number" == typeof t2) return t2;
  if (p(t2)) return NaN;
  if (w(t2)) {
    var e22 = "function" == typeof t2.valueOf ? t2.valueOf() : t2;
    t2 = w(e22) ? e22 + "" : e22;
  }
  if ("string" != typeof t2) return 0 === t2 ? t2 : +t2;
  var r22;
  t2 = (r22 = t2) ? r22.slice(0, function(t3) {
    for (var e32 = t3.length; e32-- && m.test(t3.charAt(e32)); ) ;
    return e32;
  }(r22) + 1).replace(_, "") : r22;
  var n22 = x.test(t2);
  return n22 || S.test(t2) ? O(t2.slice(2), n22 ? 2 : 8) : j.test(t2) ? NaN : +t2;
}
var A = 1 / 0;
function I(t2) {
  var e22 = function(t3) {
    return t3 ? (t3 = C(t3)) === A || t3 === -1 / 0 ? 17976931348623157e292 * (t3 < 0 ? -1 : 1) : t3 == t3 ? t3 : 0 : 0 === t3 ? t3 : 0;
  }(t2), r22 = e22 % 1;
  return e22 == e22 ? r22 ? e22 - r22 : e22 : 0;
}
function E(t2) {
  return t2;
}
function P(t2) {
  if (!w(t2)) return false;
  var e22 = f(t2);
  return "[object Function]" == e22 || "[object GeneratorFunction]" == e22 || "[object AsyncFunction]" == e22 || "[object Proxy]" == e22;
}
var T;
var F = n["__core-js_shared__"];
var B = (T = /[^.]+$/.exec(F && F.keys && F.keys.IE_PROTO || "")) ? "Symbol(src)_1." + T : "";
var k = Function.prototype.toString;
function M(t2) {
  if (null != t2) {
    try {
      return k.call(t2);
    } catch (t3) {
    }
    try {
      return t2 + "";
    } catch (t3) {
    }
  }
  return "";
}
var z = /^\[object .+?Constructor\]$/;
var U = Function.prototype;
var N = Object.prototype;
var D = U.toString;
var G = N.hasOwnProperty;
var L = RegExp("^" + D.call(G).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function R(t2, e22) {
  var r22 = function(t3, e32) {
    return null == t3 ? void 0 : t3[e32];
  }(t2, e22);
  return function(t3) {
    return !(!w(t3) || (e32 = t3, B && B in e32)) && (P(t3) ? L : z).test(M(t3));
    var e32;
  }(r22) ? r22 : void 0;
}
var W = R(n, "WeakMap");
var $ = W && new W();
var H = $ ? function(t2, e22) {
  return $.set(t2, e22), t2;
} : E;
var V = Object.create;
var q = /* @__PURE__ */ function() {
  function t2() {
  }
  return function(e22) {
    if (!w(e22)) return {};
    if (V) return V(e22);
    t2.prototype = e22;
    var r22 = new t2();
    return t2.prototype = void 0, r22;
  };
}();
function K(t2) {
  return function() {
    var e22 = arguments;
    switch (e22.length) {
      case 0:
        return new t2();
      case 1:
        return new t2(e22[0]);
      case 2:
        return new t2(e22[0], e22[1]);
      case 3:
        return new t2(e22[0], e22[1], e22[2]);
      case 4:
        return new t2(e22[0], e22[1], e22[2], e22[3]);
      case 5:
        return new t2(e22[0], e22[1], e22[2], e22[3], e22[4]);
      case 6:
        return new t2(e22[0], e22[1], e22[2], e22[3], e22[4], e22[5]);
      case 7:
        return new t2(e22[0], e22[1], e22[2], e22[3], e22[4], e22[5], e22[6]);
    }
    var r22 = q(t2.prototype), n22 = t2.apply(r22, e22);
    return w(n22) ? n22 : r22;
  };
}
function X(t2, e22, r22) {
  switch (r22.length) {
    case 0:
      return t2.call(e22);
    case 1:
      return t2.call(e22, r22[0]);
    case 2:
      return t2.call(e22, r22[0], r22[1]);
    case 3:
      return t2.call(e22, r22[0], r22[1], r22[2]);
  }
  return t2.apply(e22, r22);
}
var Z = Math.max;
function J(t2, e22, r22, n22) {
  for (var o22 = -1, i22 = t2.length, a22 = r22.length, s2 = -1, u22 = e22.length, c22 = Z(i22 - a22, 0), l22 = Array(u22 + c22), f22 = !n22; ++s2 < u22; ) l22[s2] = e22[s2];
  for (; ++o22 < a22; ) (f22 || o22 < i22) && (l22[r22[o22]] = t2[o22]);
  for (; c22--; ) l22[s2++] = t2[o22++];
  return l22;
}
var Q = Math.max;
function Y(t2, e22, r22, n22) {
  for (var o22 = -1, i22 = t2.length, a22 = -1, s2 = r22.length, u22 = -1, c22 = e22.length, l22 = Q(i22 - s2, 0), f22 = Array(l22 + c22), h22 = !n22; ++o22 < l22; ) f22[o22] = t2[o22];
  for (var p2 = o22; ++u22 < c22; ) f22[p2 + u22] = e22[u22];
  for (; ++a22 < s2; ) (h22 || o22 < i22) && (f22[p2 + r22[a22]] = t2[o22++]);
  return f22;
}
function tt() {
}
function et(t2) {
  this.__wrapped__ = t2, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = false, this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = [];
}
function rt() {
}
et.prototype = q(tt.prototype), et.prototype.constructor = et;
var nt = $ ? function(t2) {
  return $.get(t2);
} : rt;
var ot = {};
var it = Object.prototype.hasOwnProperty;
function at(t2, e22) {
  this.__wrapped__ = t2, this.__actions__ = [], this.__chain__ = !!e22, this.__index__ = 0, this.__values__ = void 0;
}
function st(t2, e22) {
  var r22 = -1, n22 = t2.length;
  for (e22 || (e22 = Array(n22)); ++r22 < n22; ) e22[r22] = t2[r22];
  return e22;
}
at.prototype = q(tt.prototype), at.prototype.constructor = at;
var ut = Object.prototype.hasOwnProperty;
function ct(t2) {
  if (h2(t2) && !v(t2) && !(t2 instanceof et)) {
    if (t2 instanceof at) return t2;
    if (ut.call(t2, "__wrapped__")) return function(t3) {
      if (t3 instanceof et) return t3.clone();
      var e22 = new at(t3.__wrapped__, t3.__chain__);
      return e22.__actions__ = st(t3.__actions__), e22.__index__ = t3.__index__, e22.__values__ = t3.__values__, e22;
    }(t2);
  }
  return new at(t2);
}
ct.prototype = tt.prototype, ct.prototype.constructor = ct;
var lt = Date.now;
function ft(t2) {
  var e22 = 0, r22 = 0;
  return function() {
    var n22 = lt(), o22 = 16 - (n22 - r22);
    if (r22 = n22, o22 > 0) {
      if (++e22 >= 800) return arguments[0];
    } else e22 = 0;
    return t2.apply(void 0, arguments);
  };
}
var ht = ft(H);
var pt = /\{\n\/\* \[wrapped with (.+)\] \*/;
var dt = /,? & /;
var vt = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
var yt = function() {
  try {
    var t2 = R(Object, "defineProperty");
    return t2({}, "", {}), t2;
  } catch (t3) {
  }
}();
var gt = yt ? function(t2, e22) {
  return yt(t2, "toString", { configurable: true, enumerable: false, value: (r22 = e22, function() {
    return r22;
  }), writable: true });
  var r22;
} : E;
var bt = ft(gt);
function mt(t2, e22) {
  for (var r22 = -1, n22 = null == t2 ? 0 : t2.length; ++r22 < n22 && false !== e22(t2[r22], r22, t2); ) ;
  return t2;
}
function _t(t2, e22, r22, n22) {
  for (var o22 = t2.length, i22 = r22 + -1; ++i22 < o22; ) if (e22(t2[i22], i22, t2)) return i22;
  return -1;
}
function wt(t2) {
  return t2 != t2;
}
var jt = [["ary", 128], ["bind", 1], ["bindKey", 2], ["curry", 8], ["curryRight", 16], ["flip", 512], ["partial", 32], ["partialRight", 64], ["rearg", 256]];
function xt(t2, e22, r22) {
  var n22 = e22 + "";
  return bt(t2, function(t3, e32) {
    var r32 = e32.length;
    if (!r32) return t3;
    var n32 = r32 - 1;
    return e32[n32] = (r32 > 1 ? "& " : "") + e32[n32], e32 = e32.join(r32 > 2 ? ", " : " "), t3.replace(vt, "{\n/* [wrapped with " + e32 + "] */\n");
  }(n22, function(t3, e32) {
    return mt(jt, function(r32) {
      var n32 = "_." + r32[0];
      e32 & r32[1] && !function(t4, e4) {
        return !(null == t4 || !t4.length) && function(t5, e5) {
          return e5 == e5 ? function(t6, e6) {
            for (var r4 = -1, n42 = t6.length; ++r4 < n42; ) if (t6[r4] === e6) return r4;
            return -1;
          }(t5, e5) : _t(t5, wt, 0);
        }(t4, e4) > -1;
      }(t3, n32) && t3.push(n32);
    }), t3.sort();
  }(function(t3) {
    var e32 = t3.match(pt);
    return e32 ? e32[1].split(dt) : [];
  }(n22), r22)));
}
function St(t2, e22, r22, n22, o22, i22, a22, s2, u22, c22) {
  var l22 = 8 & e22;
  e22 |= l22 ? 32 : 64, 4 & (e22 &= ~(l22 ? 64 : 32)) || (e22 &= -4);
  var f22 = [t2, e22, o22, l22 ? i22 : void 0, l22 ? a22 : void 0, l22 ? void 0 : i22, l22 ? void 0 : a22, s2, u22, c22], h22 = r22.apply(void 0, f22);
  return function(t3) {
    var e32 = function(t4) {
      for (var e4 = t4.name + "", r4 = ot[e4], n42 = it.call(ot, e4) ? r4.length : 0; n42--; ) {
        var o32 = r4[n42], i32 = o32.func;
        if (null == i32 || i32 == t4) return o32.name;
      }
      return e4;
    }(t3), r32 = ct[e32];
    if ("function" != typeof r32 || !(e32 in et.prototype)) return false;
    if (t3 === r32) return true;
    var n32 = nt(r32);
    return !!n32 && t3 === n32[0];
  }(t2) && ht(h22, f22), h22.placeholder = n22, xt(h22, t2, e22);
}
function Ot(t2) {
  return t2.placeholder;
}
var Ct = /^(?:0|[1-9]\d*)$/;
function At(t2, e22) {
  var r22 = typeof t2;
  return !!(e22 = null == e22 ? 9007199254740991 : e22) && ("number" == r22 || "symbol" != r22 && Ct.test(t2)) && t2 > -1 && t2 % 1 == 0 && t2 < e22;
}
var It = Math.min;
var Et = "__lodash_placeholder__";
function Pt(t2, e22) {
  for (var r22 = -1, n22 = t2.length, o22 = 0, i22 = []; ++r22 < n22; ) {
    var a22 = t2[r22];
    a22 !== e22 && a22 !== Et || (t2[r22] = Et, i22[o22++] = r22);
  }
  return i22;
}
function Tt(t2, e22, r22, o22, i22, a22, s2, u22, c22, l22) {
  var f22 = 128 & e22, h22 = 1 & e22, p2 = 2 & e22, d22 = 24 & e22, v22 = 512 & e22, y22 = p2 ? void 0 : K(t2);
  return function g22() {
    for (var b22 = arguments.length, m22 = Array(b22), _22 = b22; _22--; ) m22[_22] = arguments[_22];
    if (d22) var w22 = Ot(g22), j22 = function(t3, e32) {
      for (var r32 = t3.length, n22 = 0; r32--; ) t3[r32] === e32 && ++n22;
      return n22;
    }(m22, w22);
    if (o22 && (m22 = J(m22, o22, i22, d22)), a22 && (m22 = Y(m22, a22, s2, d22)), b22 -= j22, d22 && b22 < l22) {
      var x22 = Pt(m22, w22);
      return St(t2, e22, Tt, g22.placeholder, r22, m22, x22, u22, c22, l22 - b22);
    }
    var S22 = h22 ? r22 : this, O22 = p2 ? S22[t2] : t2;
    return b22 = m22.length, u22 ? m22 = function(t3, e32) {
      for (var r32 = t3.length, n22 = It(e32.length, r32), o32 = st(t3); n22--; ) {
        var i32 = e32[n22];
        t3[n22] = At(i32, r32) ? o32[i32] : void 0;
      }
      return t3;
    }(m22, u22) : v22 && b22 > 1 && m22.reverse(), f22 && c22 < b22 && (m22.length = c22), this && this !== n && this instanceof g22 && (O22 = y22 || K(O22)), O22.apply(S22, m22);
  };
}
var Ft = "__lodash_placeholder__";
var Bt = Math.min;
var kt = Math.max;
function Mt(t2, e22, r22) {
  "__proto__" == e22 && yt ? yt(t2, e22, { configurable: true, enumerable: true, value: r22, writable: true }) : t2[e22] = r22;
}
function zt(t2, e22) {
  return t2 === e22 || t2 != t2 && e22 != e22;
}
var Ut = Object.prototype.hasOwnProperty;
function Nt(t2, e22, r22) {
  var n22 = t2[e22];
  Ut.call(t2, e22) && zt(n22, r22) && (void 0 !== r22 || e22 in t2) || Mt(t2, e22, r22);
}
function Dt(t2, e22, r22, n22) {
  var o22 = !r22;
  r22 || (r22 = {});
  for (var i22 = -1, a22 = e22.length; ++i22 < a22; ) {
    var s2 = e22[i22], u22 = void 0;
    void 0 === u22 && (u22 = t2[s2]), o22 ? Mt(r22, s2, u22) : Nt(r22, s2, u22);
  }
  return r22;
}
var Gt = Math.max;
function Lt(t2, e22, r22) {
  return e22 = Gt(void 0 === e22 ? t2.length - 1 : e22, 0), function() {
    for (var n22 = arguments, o22 = -1, i22 = Gt(n22.length - e22, 0), a22 = Array(i22); ++o22 < i22; ) a22[o22] = n22[e22 + o22];
    o22 = -1;
    for (var s2 = Array(e22 + 1); ++o22 < e22; ) s2[o22] = n22[o22];
    return s2[e22] = r22(a22), X(t2, this, s2);
  };
}
function Rt(t2, e22) {
  return bt(Lt(t2, e22, E), t2 + "");
}
function Wt(t2) {
  return "number" == typeof t2 && t2 > -1 && t2 % 1 == 0 && t2 <= 9007199254740991;
}
function $t(t2) {
  return null != t2 && Wt(t2.length) && !P(t2);
}
function Ht(t2) {
  return Rt(function(e22, r22) {
    var n22 = -1, o22 = r22.length, i22 = o22 > 1 ? r22[o22 - 1] : void 0, a22 = o22 > 2 ? r22[2] : void 0;
    for (i22 = t2.length > 3 && "function" == typeof i22 ? (o22--, i22) : void 0, a22 && function(t3, e32, r32) {
      if (!w(r32)) return false;
      var n32 = typeof e32;
      return !!("number" == n32 ? $t(r32) && At(e32, r32.length) : "string" == n32 && e32 in r32) && zt(r32[e32], t3);
    }(r22[0], r22[1], a22) && (i22 = o22 < 3 ? void 0 : i22, o22 = 1), e22 = Object(e22); ++n22 < o22; ) {
      var s2 = r22[n22];
      s2 && t2(e22, s2, n22, i22);
    }
    return e22;
  });
}
var Vt = Object.prototype;
function qt(t2) {
  var e22 = t2 && t2.constructor;
  return t2 === ("function" == typeof e22 && e22.prototype || Vt);
}
function Kt(t2) {
  return h2(t2) && "[object Arguments]" == f(t2);
}
var Xt = Object.prototype;
var Zt = Xt.hasOwnProperty;
var Jt = Xt.propertyIsEnumerable;
var Qt = Kt(/* @__PURE__ */ function() {
  return arguments;
}()) ? Kt : function(t2) {
  return h2(t2) && Zt.call(t2, "callee") && !Jt.call(t2, "callee");
};
var Yt = "object" == typeof exports && exports && !exports.nodeType && exports;
var te = Yt && "object" == typeof module && module && !module.nodeType && module;
var ee = te && te.exports === Yt ? n.Buffer : void 0;
var re = (ee ? ee.isBuffer : void 0) || function() {
  return false;
};
var ne = {};
function oe(t2) {
  return function(e22) {
    return t2(e22);
  };
}
ne["[object Float32Array]"] = ne["[object Float64Array]"] = ne["[object Int8Array]"] = ne["[object Int16Array]"] = ne["[object Int32Array]"] = ne["[object Uint8Array]"] = ne["[object Uint8ClampedArray]"] = ne["[object Uint16Array]"] = ne["[object Uint32Array]"] = true, ne["[object Arguments]"] = ne["[object Array]"] = ne["[object ArrayBuffer]"] = ne["[object Boolean]"] = ne["[object DataView]"] = ne["[object Date]"] = ne["[object Error]"] = ne["[object Function]"] = ne["[object Map]"] = ne["[object Number]"] = ne["[object Object]"] = ne["[object RegExp]"] = ne["[object Set]"] = ne["[object String]"] = ne["[object WeakMap]"] = false;
var ie = "object" == typeof exports && exports && !exports.nodeType && exports;
var ae = ie && "object" == typeof module && module && !module.nodeType && module;
var se = ae && ae.exports === ie && e.process;
var ue = function() {
  try {
    return ae && ae.require && ae.require("util").types || se && se.binding && se.binding("util");
  } catch (t2) {
  }
}();
var ce = ue && ue.isTypedArray;
var le = ce ? oe(ce) : function(t2) {
  return h2(t2) && Wt(t2.length) && !!ne[f(t2)];
};
var fe = Object.prototype.hasOwnProperty;
function he(t2, e22) {
  var r22 = v(t2), n22 = !r22 && Qt(t2), o22 = !r22 && !n22 && re(t2), i22 = !r22 && !n22 && !o22 && le(t2), a22 = r22 || n22 || o22 || i22, s2 = a22 ? function(t3, e32) {
    for (var r32 = -1, n32 = Array(t3); ++r32 < t3; ) n32[r32] = e32(r32);
    return n32;
  }(t2.length, String) : [], u22 = s2.length;
  for (var c22 in t2) !e22 && !fe.call(t2, c22) || a22 && ("length" == c22 || o22 && ("offset" == c22 || "parent" == c22) || i22 && ("buffer" == c22 || "byteLength" == c22 || "byteOffset" == c22) || At(c22, u22)) || s2.push(c22);
  return s2;
}
function pe(t2, e22) {
  return function(r22) {
    return t2(e22(r22));
  };
}
var de = pe(Object.keys, Object);
var ve = Object.prototype.hasOwnProperty;
function ye(t2) {
  return $t(t2) ? he(t2) : function(t3) {
    if (!qt(t3)) return de(t3);
    var e22 = [];
    for (var r22 in Object(t3)) ve.call(t3, r22) && "constructor" != r22 && e22.push(r22);
    return e22;
  }(t2);
}
var ge = Object.prototype.hasOwnProperty;
var be = Ht(function(t2, e22) {
  if (qt(e22) || $t(e22)) Dt(e22, ye(e22), t2);
  else for (var r22 in e22) ge.call(e22, r22) && Nt(t2, r22, e22[r22]);
});
var me = Object.prototype.hasOwnProperty;
function _e(t2) {
  return $t(t2) ? he(t2, true) : function(t3) {
    if (!w(t3)) return function(t4) {
      var e32 = [];
      if (null != t4) for (var r32 in Object(t4)) e32.push(r32);
      return e32;
    }(t3);
    var e22 = qt(t3), r22 = [];
    for (var n22 in t3) ("constructor" != n22 || !e22 && me.call(t3, n22)) && r22.push(n22);
    return r22;
  }(t2);
}
var we = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var je = /^\w*$/;
function xe(t2, e22) {
  if (v(t2)) return false;
  var r22 = typeof t2;
  return !("number" != r22 && "symbol" != r22 && "boolean" != r22 && null != t2 && !p(t2)) || je.test(t2) || !we.test(t2) || null != e22 && t2 in Object(e22);
}
var Se = R(Object, "create");
var Oe = Object.prototype.hasOwnProperty;
var Ce = Object.prototype.hasOwnProperty;
function Ae(t2) {
  var e22 = -1, r22 = null == t2 ? 0 : t2.length;
  for (this.clear(); ++e22 < r22; ) {
    var n22 = t2[e22];
    this.set(n22[0], n22[1]);
  }
}
function Ie(t2, e22) {
  for (var r22 = t2.length; r22--; ) if (zt(t2[r22][0], e22)) return r22;
  return -1;
}
Ae.prototype.clear = function() {
  this.__data__ = Se ? Se(null) : {}, this.size = 0;
}, Ae.prototype.delete = function(t2) {
  var e22 = this.has(t2) && delete this.__data__[t2];
  return this.size -= e22 ? 1 : 0, e22;
}, Ae.prototype.get = function(t2) {
  var e22 = this.__data__;
  if (Se) {
    var r22 = e22[t2];
    return "__lodash_hash_undefined__" === r22 ? void 0 : r22;
  }
  return Oe.call(e22, t2) ? e22[t2] : void 0;
}, Ae.prototype.has = function(t2) {
  var e22 = this.__data__;
  return Se ? void 0 !== e22[t2] : Ce.call(e22, t2);
}, Ae.prototype.set = function(t2, e22) {
  var r22 = this.__data__;
  return this.size += this.has(t2) ? 0 : 1, r22[t2] = Se && void 0 === e22 ? "__lodash_hash_undefined__" : e22, this;
};
var Ee = Array.prototype.splice;
function Pe(t2) {
  var e22 = -1, r22 = null == t2 ? 0 : t2.length;
  for (this.clear(); ++e22 < r22; ) {
    var n22 = t2[e22];
    this.set(n22[0], n22[1]);
  }
}
Pe.prototype.clear = function() {
  this.__data__ = [], this.size = 0;
}, Pe.prototype.delete = function(t2) {
  var e22 = this.__data__, r22 = Ie(e22, t2);
  return !(r22 < 0 || (r22 == e22.length - 1 ? e22.pop() : Ee.call(e22, r22, 1), --this.size, 0));
}, Pe.prototype.get = function(t2) {
  var e22 = this.__data__, r22 = Ie(e22, t2);
  return r22 < 0 ? void 0 : e22[r22][1];
}, Pe.prototype.has = function(t2) {
  return Ie(this.__data__, t2) > -1;
}, Pe.prototype.set = function(t2, e22) {
  var r22 = this.__data__, n22 = Ie(r22, t2);
  return n22 < 0 ? (++this.size, r22.push([t2, e22])) : r22[n22][1] = e22, this;
};
var Te = R(n, "Map");
function Fe(t2, e22) {
  var r22, n22, o22 = t2.__data__;
  return ("string" == (n22 = typeof (r22 = e22)) || "number" == n22 || "symbol" == n22 || "boolean" == n22 ? "__proto__" !== r22 : null === r22) ? o22["string" == typeof e22 ? "string" : "hash"] : o22.map;
}
function Be(t2) {
  var e22 = -1, r22 = null == t2 ? 0 : t2.length;
  for (this.clear(); ++e22 < r22; ) {
    var n22 = t2[e22];
    this.set(n22[0], n22[1]);
  }
}
function ke(t2, e22) {
  if ("function" != typeof t2 || null != e22 && "function" != typeof e22) throw new TypeError("Expected a function");
  var r22 = function() {
    var n22 = arguments, o22 = e22 ? e22.apply(this, n22) : n22[0], i22 = r22.cache;
    if (i22.has(o22)) return i22.get(o22);
    var a22 = t2.apply(this, n22);
    return r22.cache = i22.set(o22, a22) || i22, a22;
  };
  return r22.cache = new (ke.Cache || Be)(), r22;
}
Be.prototype.clear = function() {
  this.size = 0, this.__data__ = { hash: new Ae(), map: new (Te || Pe)(), string: new Ae() };
}, Be.prototype.delete = function(t2) {
  var e22 = Fe(this, t2).delete(t2);
  return this.size -= e22 ? 1 : 0, e22;
}, Be.prototype.get = function(t2) {
  return Fe(this, t2).get(t2);
}, Be.prototype.has = function(t2) {
  return Fe(this, t2).has(t2);
}, Be.prototype.set = function(t2, e22) {
  var r22 = Fe(this, t2), n22 = r22.size;
  return r22.set(t2, e22), this.size += r22.size == n22 ? 0 : 1, this;
}, ke.Cache = Be;
var Me;
var ze;
var Ue;
var Ne = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var De = /\\(\\)?/g;
var Ge = (Me = function(t2) {
  var e22 = [];
  return 46 === t2.charCodeAt(0) && e22.push(""), t2.replace(Ne, function(t3, r22, n22, o22) {
    e22.push(n22 ? o22.replace(De, "$1") : r22 || t3);
  }), e22;
}, ze = ke(Me, function(t2) {
  return 500 === Ue.size && Ue.clear(), t2;
}), Ue = ze.cache, ze);
function Le(t2, e22) {
  return v(t2) ? t2 : xe(t2, e22) ? [t2] : Ge(function(t3) {
    return null == t3 ? "" : b(t3);
  }(t2));
}
function Re(t2) {
  if ("string" == typeof t2 || p(t2)) return t2;
  var e22 = t2 + "";
  return "0" == e22 && 1 / t2 == -1 / 0 ? "-0" : e22;
}
function We(t2, e22) {
  for (var r22 = 0, n22 = (e22 = Le(e22, t2)).length; null != t2 && r22 < n22; ) t2 = t2[Re(e22[r22++])];
  return r22 && r22 == n22 ? t2 : void 0;
}
function $e(t2, e22, r22) {
  var n22 = null == t2 ? void 0 : We(t2, e22);
  return void 0 === n22 ? r22 : n22;
}
function He(t2, e22) {
  for (var r22 = -1, n22 = e22.length, o22 = t2.length; ++r22 < n22; ) t2[o22 + r22] = e22[r22];
  return t2;
}
var Ve = o ? o.isConcatSpreadable : void 0;
function qe(t2) {
  return v(t2) || Qt(t2) || !!(Ve && t2 && t2[Ve]);
}
function Ke(t2) {
  return null != t2 && t2.length ? function(t3, e22, r22, n22, o22) {
    var i22 = -1, a22 = t3.length;
    for (r22 || (r22 = qe), o22 || (o22 = []); ++i22 < a22; ) {
      var s2 = t3[i22];
      r22(s2) ? He(o22, s2) : o22[o22.length] = s2;
    }
    return o22;
  }(t2) : [];
}
var Xe = pe(Object.getPrototypeOf, Object);
var Ze = Function.prototype;
var Je = Object.prototype;
var Qe = Ze.toString;
var Ye = Je.hasOwnProperty;
var tr = Qe.call(Object);
function er(t2) {
  if (!h2(t2) || "[object Object]" != f(t2)) return false;
  var e22 = Xe(t2);
  if (null === e22) return true;
  var r22 = Ye.call(e22, "constructor") && e22.constructor;
  return "function" == typeof r22 && r22 instanceof r22 && Qe.call(r22) == tr;
}
var rr = Rt(function(t2, e22, r22) {
  var o22 = 1;
  if (r22.length) {
    var i22 = Pt(r22, Ot(rr));
    o22 |= 32;
  }
  return function(t3, e32, r32, o32, i32, a22, s2, u22) {
    var c22 = 2 & e32;
    if (!c22 && "function" != typeof t3) throw new TypeError("Expected a function");
    var l22 = o32 ? o32.length : 0;
    if (l22 || (e32 &= -97, o32 = i32 = void 0), s2 = void 0 === s2 ? s2 : kt(I(s2), 0), u22 = void 0 === u22 ? u22 : I(u22), l22 -= i32 ? i32.length : 0, 64 & e32) {
      var f22 = o32, h22 = i32;
      o32 = i32 = void 0;
    }
    var p2 = c22 ? void 0 : nt(t3), d22 = [t3, e32, r32, o32, i32, f22, h22, void 0, s2, u22];
    if (p2 && function(t4, e4) {
      var r4 = t4[1], n22 = e4[1], o4 = r4 | n22, i4 = o4 < 131, a32 = 128 == n22 && 8 == r4 || 128 == n22 && 256 == r4 && t4[7].length <= e4[8] || 384 == n22 && e4[7].length <= e4[8] && 8 == r4;
      if (!i4 && !a32) return t4;
      1 & n22 && (t4[2] = e4[2], o4 |= 1 & r4 ? 0 : 4);
      var s3 = e4[3];
      if (s3) {
        var u32 = t4[3];
        t4[3] = u32 ? J(u32, s3, e4[4]) : s3, t4[4] = u32 ? Pt(t4[3], Ft) : e4[4];
      }
      (s3 = e4[5]) && (u32 = t4[5], t4[5] = u32 ? Y(u32, s3, e4[6]) : s3, t4[6] = u32 ? Pt(t4[5], Ft) : e4[6]), (s3 = e4[7]) && (t4[7] = s3), 128 & n22 && (t4[8] = null == t4[8] ? e4[8] : Bt(t4[8], e4[8])), null == t4[9] && (t4[9] = e4[9]), t4[0] = e4[0], t4[1] = o4;
    }(d22, p2), t3 = d22[0], e32 = d22[1], r32 = d22[2], o32 = d22[3], i32 = d22[4], !(u22 = d22[9] = void 0 === d22[9] ? c22 ? 0 : t3.length : kt(d22[9] - l22, 0)) && 24 & e32 && (e32 &= -25), e32 && 1 != e32) v22 = 8 == e32 || 16 == e32 ? function(t4, e4, r4) {
      var o4 = K(t4);
      return function i4() {
        for (var a32 = arguments.length, s3 = Array(a32), u32 = a32, c32 = Ot(i4); u32--; ) s3[u32] = arguments[u32];
        var l32 = a32 < 3 && s3[0] !== c32 && s3[a32 - 1] !== c32 ? [] : Pt(s3, c32);
        return (a32 -= l32.length) < r4 ? St(t4, e4, Tt, i4.placeholder, void 0, s3, l32, void 0, void 0, r4 - a32) : X(this && this !== n && this instanceof i4 ? o4 : t4, this, s3);
      };
    }(t3, e32, u22) : 32 != e32 && 33 != e32 || i32.length ? Tt.apply(void 0, d22) : function(t4, e4, r4, o4) {
      var i4 = 1 & e4, a32 = K(t4);
      return function e5() {
        for (var s3 = -1, u32 = arguments.length, c32 = -1, l32 = o4.length, f32 = Array(l32 + u32), h32 = this && this !== n && this instanceof e5 ? a32 : t4; ++c32 < l32; ) f32[c32] = o4[c32];
        for (; u32--; ) f32[c32++] = arguments[++s3];
        return X(h32, i4 ? r4 : this, f32);
      };
    }(t3, e32, r32, o32);
    else var v22 = function(t4, e4, r4) {
      var o4 = 1 & e4, i4 = K(t4);
      return function e5() {
        return (this && this !== n && this instanceof e5 ? i4 : t4).apply(o4 ? r4 : this, arguments);
      };
    }(t3, e32, r32);
    return xt((p2 ? H : ht)(v22, d22), t3, e32);
  }(t2, o22, e22, r22, i22);
});
function nr(t2) {
  var e22 = this.__data__ = new Pe(t2);
  this.size = e22.size;
}
rr.placeholder = {}, nr.prototype.clear = function() {
  this.__data__ = new Pe(), this.size = 0;
}, nr.prototype.delete = function(t2) {
  var e22 = this.__data__, r22 = e22.delete(t2);
  return this.size = e22.size, r22;
}, nr.prototype.get = function(t2) {
  return this.__data__.get(t2);
}, nr.prototype.has = function(t2) {
  return this.__data__.has(t2);
}, nr.prototype.set = function(t2, e22) {
  var r22 = this.__data__;
  if (r22 instanceof Pe) {
    var n22 = r22.__data__;
    if (!Te || n22.length < 199) return n22.push([t2, e22]), this.size = ++r22.size, this;
    r22 = this.__data__ = new Be(n22);
  }
  return r22.set(t2, e22), this.size = r22.size, this;
};
var or = "object" == typeof exports && exports && !exports.nodeType && exports;
var ir = or && "object" == typeof module && module && !module.nodeType && module;
var ar = ir && ir.exports === or ? n.Buffer : void 0;
var sr = ar ? ar.allocUnsafe : void 0;
function ur(t2, e22) {
  if (e22) return t2.slice();
  var r22 = t2.length, n22 = sr ? sr(r22) : new t2.constructor(r22);
  return t2.copy(n22), n22;
}
function cr() {
  return [];
}
var lr = Object.prototype.propertyIsEnumerable;
var fr = Object.getOwnPropertySymbols;
var hr = fr ? function(t2) {
  return null == t2 ? [] : (t2 = Object(t2), function(e22) {
    for (var r22 = -1, n22 = null == e22 ? 0 : e22.length, o22 = 0, i22 = []; ++r22 < n22; ) {
      var a22 = e22[r22];
      s2 = a22, lr.call(t2, s2) && (i22[o22++] = a22);
    }
    var s2;
    return i22;
  }(fr(t2)));
} : cr;
var pr = Object.getOwnPropertySymbols ? function(t2) {
  for (var e22 = []; t2; ) He(e22, hr(t2)), t2 = Xe(t2);
  return e22;
} : cr;
function dr(t2, e22, r22) {
  var n22 = e22(t2);
  return v(t2) ? n22 : He(n22, r22(t2));
}
function vr(t2) {
  return dr(t2, ye, hr);
}
function yr(t2) {
  return dr(t2, _e, pr);
}
var gr = R(n, "DataView");
var br = R(n, "Promise");
var mr = R(n, "Set");
var _r = "[object Map]";
var wr = "[object Promise]";
var jr = "[object Set]";
var xr = "[object WeakMap]";
var Sr = "[object DataView]";
var Or = M(gr);
var Cr = M(Te);
var Ar = M(br);
var Ir = M(mr);
var Er = M(W);
var Pr = f;
(gr && Pr(new gr(new ArrayBuffer(1))) != Sr || Te && Pr(new Te()) != _r || br && Pr(br.resolve()) != wr || mr && Pr(new mr()) != jr || W && Pr(new W()) != xr) && (Pr = function(t2) {
  var e22 = f(t2), r22 = "[object Object]" == e22 ? t2.constructor : void 0, n22 = r22 ? M(r22) : "";
  if (n22) switch (n22) {
    case Or:
      return Sr;
    case Cr:
      return _r;
    case Ar:
      return wr;
    case Ir:
      return jr;
    case Er:
      return xr;
  }
  return e22;
});
var Tr = Object.prototype.hasOwnProperty;
var Fr = n.Uint8Array;
function Br(t2) {
  var e22 = new t2.constructor(t2.byteLength);
  return new Fr(e22).set(new Fr(t2)), e22;
}
var kr = /\w*$/;
var Mr = o ? o.prototype : void 0;
var zr = Mr ? Mr.valueOf : void 0;
function Ur(t2, e22) {
  var r22 = e22 ? Br(t2.buffer) : t2.buffer;
  return new t2.constructor(r22, t2.byteOffset, t2.length);
}
function Nr(t2) {
  return "function" != typeof t2.constructor || qt(t2) ? {} : q(Xe(t2));
}
var Dr = ue && ue.isMap;
var Gr = Dr ? oe(Dr) : function(t2) {
  return h2(t2) && "[object Map]" == Pr(t2);
};
var Lr = ue && ue.isSet;
var Rr = Lr ? oe(Lr) : function(t2) {
  return h2(t2) && "[object Set]" == Pr(t2);
};
var Wr = "[object Arguments]";
var $r = "[object Function]";
var Hr = "[object Object]";
var Vr = {};
function qr(t2, e22, r22, n22, o22, i22) {
  var a22, s2 = 1 & e22, u22 = 2 & e22, c22 = 4 & e22;
  if (r22 && (a22 = o22 ? r22(t2, n22, o22, i22) : r22(t2)), void 0 !== a22) return a22;
  if (!w(t2)) return t2;
  var l22 = v(t2);
  if (l22) {
    if (a22 = function(t3) {
      var e32 = t3.length, r32 = new t3.constructor(e32);
      return e32 && "string" == typeof t3[0] && Tr.call(t3, "index") && (r32.index = t3.index, r32.input = t3.input), r32;
    }(t2), !s2) return st(t2, a22);
  } else {
    var f22 = Pr(t2), h22 = f22 == $r || "[object GeneratorFunction]" == f22;
    if (re(t2)) return ur(t2, s2);
    if (f22 == Hr || f22 == Wr || h22 && !o22) {
      if (a22 = u22 || h22 ? {} : Nr(t2), !s2) return u22 ? function(t3, e32) {
        return Dt(t3, pr(t3), e32);
      }(t2, function(t3, e32) {
        return t3 && Dt(e32, _e(e32), t3);
      }(a22, t2)) : function(t3, e32) {
        return Dt(t3, hr(t3), e32);
      }(t2, function(t3, e32) {
        return t3 && Dt(e32, ye(e32), t3);
      }(a22, t2));
    } else {
      if (!Vr[f22]) return o22 ? t2 : {};
      a22 = function(t3, e32, r32) {
        var n32, o32 = t3.constructor;
        switch (e32) {
          case "[object ArrayBuffer]":
            return Br(t3);
          case "[object Boolean]":
          case "[object Date]":
            return new o32(+t3);
          case "[object DataView]":
            return function(t4, e4) {
              var r4 = e4 ? Br(t4.buffer) : t4.buffer;
              return new t4.constructor(r4, t4.byteOffset, t4.byteLength);
            }(t3, r32);
          case "[object Float32Array]":
          case "[object Float64Array]":
          case "[object Int8Array]":
          case "[object Int16Array]":
          case "[object Int32Array]":
          case "[object Uint8Array]":
          case "[object Uint8ClampedArray]":
          case "[object Uint16Array]":
          case "[object Uint32Array]":
            return Ur(t3, r32);
          case "[object Map]":
          case "[object Set]":
            return new o32();
          case "[object Number]":
          case "[object String]":
            return new o32(t3);
          case "[object RegExp]":
            return function(t4) {
              var e4 = new t4.constructor(t4.source, kr.exec(t4));
              return e4.lastIndex = t4.lastIndex, e4;
            }(t3);
          case "[object Symbol]":
            return n32 = t3, zr ? Object(zr.call(n32)) : {};
        }
      }(t2, f22, s2);
    }
  }
  i22 || (i22 = new nr());
  var p2 = i22.get(t2);
  if (p2) return p2;
  i22.set(t2, a22), Rr(t2) ? t2.forEach(function(n32) {
    a22.add(qr(n32, e22, r22, n32, t2, i22));
  }) : Gr(t2) && t2.forEach(function(n32, o32) {
    a22.set(o32, qr(n32, e22, r22, o32, t2, i22));
  });
  var d22 = l22 ? void 0 : (c22 ? u22 ? yr : vr : u22 ? _e : ye)(t2);
  return mt(d22 || t2, function(n32, o32) {
    d22 && (n32 = t2[o32 = n32]), Nt(a22, o32, qr(n32, e22, r22, o32, t2, i22));
  }), a22;
}
function Kr(t2) {
  return qr(t2, 5);
}
function Xr(t2) {
  var e22 = -1, r22 = null == t2 ? 0 : t2.length;
  for (this.__data__ = new Be(); ++e22 < r22; ) this.add(t2[e22]);
}
function Zr(t2, e22) {
  for (var r22 = -1, n22 = null == t2 ? 0 : t2.length; ++r22 < n22; ) if (e22(t2[r22], r22, t2)) return true;
  return false;
}
function Jr(t2, e22) {
  return t2.has(e22);
}
function Qr(t2, e22, r22, n22, o22, i22) {
  var a22 = 1 & r22, s2 = t2.length, u22 = e22.length;
  if (s2 != u22 && !(a22 && u22 > s2)) return false;
  var c22 = i22.get(t2), l22 = i22.get(e22);
  if (c22 && l22) return c22 == e22 && l22 == t2;
  var f22 = -1, h22 = true, p2 = 2 & r22 ? new Xr() : void 0;
  for (i22.set(t2, e22), i22.set(e22, t2); ++f22 < s2; ) {
    var d22 = t2[f22], v22 = e22[f22];
    if (n22) var y22 = a22 ? n22(v22, d22, f22, e22, t2, i22) : n22(d22, v22, f22, t2, e22, i22);
    if (void 0 !== y22) {
      if (y22) continue;
      h22 = false;
      break;
    }
    if (p2) {
      if (!Zr(e22, function(t3, e32) {
        if (!Jr(p2, e32) && (d22 === t3 || o22(d22, t3, r22, n22, i22))) return p2.push(e32);
      })) {
        h22 = false;
        break;
      }
    } else if (d22 !== v22 && !o22(d22, v22, r22, n22, i22)) {
      h22 = false;
      break;
    }
  }
  return i22.delete(t2), i22.delete(e22), h22;
}
function Yr(t2) {
  var e22 = -1, r22 = Array(t2.size);
  return t2.forEach(function(t3, n22) {
    r22[++e22] = [n22, t3];
  }), r22;
}
function tn(t2) {
  var e22 = -1, r22 = Array(t2.size);
  return t2.forEach(function(t3) {
    r22[++e22] = t3;
  }), r22;
}
Vr[Wr] = Vr["[object Array]"] = Vr["[object ArrayBuffer]"] = Vr["[object DataView]"] = Vr["[object Boolean]"] = Vr["[object Date]"] = Vr["[object Float32Array]"] = Vr["[object Float64Array]"] = Vr["[object Int8Array]"] = Vr["[object Int16Array]"] = Vr["[object Int32Array]"] = Vr["[object Map]"] = Vr["[object Number]"] = Vr[Hr] = Vr["[object RegExp]"] = Vr["[object Set]"] = Vr["[object String]"] = Vr["[object Symbol]"] = Vr["[object Uint8Array]"] = Vr["[object Uint8ClampedArray]"] = Vr["[object Uint16Array]"] = Vr["[object Uint32Array]"] = true, Vr["[object Error]"] = Vr[$r] = Vr["[object WeakMap]"] = false, Xr.prototype.add = Xr.prototype.push = function(t2) {
  return this.__data__.set(t2, "__lodash_hash_undefined__"), this;
}, Xr.prototype.has = function(t2) {
  return this.__data__.has(t2);
};
var en = o ? o.prototype : void 0;
var rn = en ? en.valueOf : void 0;
var nn = Object.prototype.hasOwnProperty;
var on = "[object Arguments]";
var an = "[object Array]";
var sn = "[object Object]";
var un = Object.prototype.hasOwnProperty;
function cn(t2, e22, r22, n22, o22) {
  return t2 === e22 || (null == t2 || null == e22 || !h2(t2) && !h2(e22) ? t2 != t2 && e22 != e22 : function(t3, e32, r32, n32, o32, i22) {
    var a22 = v(t3), s2 = v(e32), u22 = a22 ? an : Pr(t3), c22 = s2 ? an : Pr(e32), l22 = (u22 = u22 == on ? sn : u22) == sn, f22 = (c22 = c22 == on ? sn : c22) == sn, h22 = u22 == c22;
    if (h22 && re(t3)) {
      if (!re(e32)) return false;
      a22 = true, l22 = false;
    }
    if (h22 && !l22) return i22 || (i22 = new nr()), a22 || le(t3) ? Qr(t3, e32, r32, n32, o32, i22) : function(t4, e4, r4, n42, o4, i32, a32) {
      switch (r4) {
        case "[object DataView]":
          if (t4.byteLength != e4.byteLength || t4.byteOffset != e4.byteOffset) return false;
          t4 = t4.buffer, e4 = e4.buffer;
        case "[object ArrayBuffer]":
          return !(t4.byteLength != e4.byteLength || !i32(new Fr(t4), new Fr(e4)));
        case "[object Boolean]":
        case "[object Date]":
        case "[object Number]":
          return zt(+t4, +e4);
        case "[object Error]":
          return t4.name == e4.name && t4.message == e4.message;
        case "[object RegExp]":
        case "[object String]":
          return t4 == e4 + "";
        case "[object Map]":
          var s3 = Yr;
        case "[object Set]":
          var u32 = 1 & n42;
          if (s3 || (s3 = tn), t4.size != e4.size && !u32) return false;
          var c32 = a32.get(t4);
          if (c32) return c32 == e4;
          n42 |= 2, a32.set(t4, e4);
          var l32 = Qr(s3(t4), s3(e4), n42, o4, i32, a32);
          return a32.delete(t4), l32;
        case "[object Symbol]":
          if (rn) return rn.call(t4) == rn.call(e4);
      }
      return false;
    }(t3, e32, u22, r32, n32, o32, i22);
    if (!(1 & r32)) {
      var p2 = l22 && un.call(t3, "__wrapped__"), d22 = f22 && un.call(e32, "__wrapped__");
      if (p2 || d22) {
        var y22 = p2 ? t3.value() : t3, g22 = d22 ? e32.value() : e32;
        return i22 || (i22 = new nr()), o32(y22, g22, r32, n32, i22);
      }
    }
    return !!h22 && (i22 || (i22 = new nr()), function(t4, e4, r4, n42, o4, i32) {
      var a32 = 1 & r4, s3 = vr(t4), u32 = s3.length;
      if (u32 != vr(e4).length && !a32) return false;
      for (var c32 = u32; c32--; ) {
        var l32 = s3[c32];
        if (!(a32 ? l32 in e4 : nn.call(e4, l32))) return false;
      }
      var f32 = i32.get(t4), h32 = i32.get(e4);
      if (f32 && h32) return f32 == e4 && h32 == t4;
      var p3 = true;
      i32.set(t4, e4), i32.set(e4, t4);
      for (var d32 = a32; ++c32 < u32; ) {
        var v22 = t4[l32 = s3[c32]], y32 = e4[l32];
        if (n42) var g32 = a32 ? n42(y32, v22, l32, e4, t4, i32) : n42(v22, y32, l32, t4, e4, i32);
        if (!(void 0 === g32 ? v22 === y32 || o4(v22, y32, r4, n42, i32) : g32)) {
          p3 = false;
          break;
        }
        d32 || (d32 = "constructor" == l32);
      }
      if (p3 && !d32) {
        var b22 = t4.constructor, m22 = e4.constructor;
        b22 == m22 || !("constructor" in t4) || !("constructor" in e4) || "function" == typeof b22 && b22 instanceof b22 && "function" == typeof m22 && m22 instanceof m22 || (p3 = false);
      }
      return i32.delete(t4), i32.delete(e4), p3;
    }(t3, e32, r32, n32, o32, i22));
  }(t2, e22, r22, n22, cn, o22));
}
function ln(t2) {
  return t2 == t2 && !w(t2);
}
function fn(t2, e22) {
  return function(r22) {
    return null != r22 && r22[t2] === e22 && (void 0 !== e22 || t2 in Object(r22));
  };
}
function hn(t2, e22) {
  return null != t2 && e22 in Object(t2);
}
var pn;
var dn = function(t2, e22, r22) {
  for (var n22 = -1, o22 = Object(t2), i22 = r22(t2), a22 = i22.length; a22--; ) {
    var s2 = i22[++n22];
    if (false === e22(o22[s2], s2, o22)) break;
  }
  return t2;
};
var vn = (pn = function(t2, e22) {
  return t2 && dn(t2, e22, ye);
}, function(t2, e22) {
  if (null == t2) return t2;
  if (!$t(t2)) return pn(t2, e22);
  for (var r22 = t2.length, n22 = -1, o22 = Object(t2); ++n22 < r22 && false !== e22(o22[n22], n22, o22); ) ;
  return t2;
});
var yn = function() {
  return n.Date.now();
};
var gn = Math.max;
var bn = Math.min;
function mn(t2, e22, r22) {
  var n22, o22, i22, a22, s2, u22, c22 = 0, l22 = false, f22 = false, h22 = true;
  if ("function" != typeof t2) throw new TypeError("Expected a function");
  function p2(e32) {
    var r32 = n22, i32 = o22;
    return n22 = o22 = void 0, c22 = e32, a22 = t2.apply(i32, r32);
  }
  function d22(t3) {
    var r32 = t3 - u22;
    return void 0 === u22 || r32 >= e22 || r32 < 0 || f22 && t3 - c22 >= i22;
  }
  function v22() {
    var t3 = yn();
    if (d22(t3)) return y22(t3);
    s2 = setTimeout(v22, function(t4) {
      var r32 = e22 - (t4 - u22);
      return f22 ? bn(r32, i22 - (t4 - c22)) : r32;
    }(t3));
  }
  function y22(t3) {
    return s2 = void 0, h22 && n22 ? p2(t3) : (n22 = o22 = void 0, a22);
  }
  function g22() {
    var t3 = yn(), r32 = d22(t3);
    if (n22 = arguments, o22 = this, u22 = t3, r32) {
      if (void 0 === s2) return function(t4) {
        return c22 = t4, s2 = setTimeout(v22, e22), l22 ? p2(t4) : a22;
      }(u22);
      if (f22) return clearTimeout(s2), s2 = setTimeout(v22, e22), p2(u22);
    }
    return void 0 === s2 && (s2 = setTimeout(v22, e22)), a22;
  }
  return e22 = C(e22) || 0, w(r22) && (l22 = !!r22.leading, i22 = (f22 = "maxWait" in r22) ? gn(C(r22.maxWait) || 0, e22) : i22, h22 = "trailing" in r22 ? !!r22.trailing : h22), g22.cancel = function() {
    void 0 !== s2 && clearTimeout(s2), c22 = 0, n22 = u22 = o22 = s2 = void 0;
  }, g22.flush = function() {
    return void 0 === s2 ? a22 : y22(yn());
  }, g22;
}
function _n(t2, e22, r22) {
  (void 0 !== r22 && !zt(t2[e22], r22) || void 0 === r22 && !(e22 in t2)) && Mt(t2, e22, r22);
}
function wn(t2, e22) {
  if (("constructor" !== e22 || "function" != typeof t2[e22]) && "__proto__" != e22) return t2[e22];
}
function jn(t2, e22, r22, n22, o22) {
  t2 !== e22 && dn(e22, function(i22, a22) {
    if (o22 || (o22 = new nr()), w(i22)) !function(t3, e32, r32, n32, o32, i32, a32) {
      var s3 = wn(t3, r32), u22 = wn(e32, r32), c22 = a32.get(u22);
      if (c22) _n(t3, r32, c22);
      else {
        var l22, f22 = i32 ? i32(s3, u22, r32 + "", t3, e32, a32) : void 0, p2 = void 0 === f22;
        if (p2) {
          var d22 = v(u22), y22 = !d22 && re(u22), g22 = !d22 && !y22 && le(u22);
          f22 = u22, d22 || y22 || g22 ? v(s3) ? f22 = s3 : h2(l22 = s3) && $t(l22) ? f22 = st(s3) : y22 ? (p2 = false, f22 = ur(u22, true)) : g22 ? (p2 = false, f22 = Ur(u22, true)) : f22 = [] : er(u22) || Qt(u22) ? (f22 = s3, Qt(s3) ? f22 = function(t4) {
            return Dt(t4, _e(t4));
          }(s3) : w(s3) && !P(s3) || (f22 = Nr(u22))) : p2 = false;
        }
        p2 && (a32.set(u22, f22), o32(f22, u22, n32, i32, a32), a32.delete(u22)), _n(t3, r32, f22);
      }
    }(t2, e22, a22, r22, jn, n22, o22);
    else {
      var s2 = n22 ? n22(wn(t2, a22), i22, a22 + "", t2, e22, o22) : void 0;
      void 0 === s2 && (s2 = i22), _n(t2, a22, s2);
    }
  }, _e);
}
var xn = Rt(function(t2, e22, r22) {
  return function(t3, e32, r32) {
    if ("function" != typeof t3) throw new TypeError("Expected a function");
    return setTimeout(function() {
      t3.apply(void 0, r32);
    }, e32);
  }(t2, C(e22) || 0, r22);
});
function Sn(t2, e22) {
  var r22;
  return (v(t2) ? mt : vn)(t2, "function" == typeof (r22 = e22) ? r22 : E);
}
function On(t2, e22, r22) {
  return null != t2 && t2.length ? _t(t2, "function" == typeof (n22 = e22) ? n22 : null == n22 ? E : "object" == typeof n22 ? v(n22) ? (a22 = n22[0], s2 = n22[1], xe(a22) && ln(s2) ? fn(Re(a22), s2) : function(t3) {
    var e32 = $e(t3, a22);
    return void 0 === e32 && e32 === s2 ? function(t4, e4) {
      return null != t4 && function(t5, e5, r32) {
        for (var n32 = -1, o32 = (e5 = Le(e5, t5)).length, i32 = false; ++n32 < o32; ) {
          var a32 = Re(e5[n32]);
          if (!(i32 = null != t5 && r32(t5, a32))) break;
          t5 = t5[a32];
        }
        return i32 || ++n32 != o32 ? i32 : !!(o32 = null == t5 ? 0 : t5.length) && Wt(o32) && At(a32, o32) && (v(t5) || Qt(t5));
      }(t4, e4, hn);
    }(t3, a22) : cn(s2, e32, 3);
  }) : (i22 = function(t3) {
    for (var e32 = ye(t3), r32 = e32.length; r32--; ) {
      var n32 = e32[r32], o32 = t3[n32];
      e32[r32] = [n32, o32, ln(o32)];
    }
    return e32;
  }(o22 = n22), 1 == i22.length && i22[0][2] ? fn(i22[0][0], i22[0][1]) : function(t3) {
    return t3 === o22 || function(t4, e32, r32) {
      var n32 = r32.length, o32 = n32;
      if (null == t4) return !o32;
      for (t4 = Object(t4); n32--; ) {
        var i32 = r32[n32];
        if (i32[2] ? i32[1] !== t4[i32[0]] : !(i32[0] in t4)) return false;
      }
      for (; ++n32 < o32; ) {
        var a32 = (i32 = r32[n32])[0], s3 = t4[a32], u22 = i32[1];
        if (i32[2]) {
          if (void 0 === s3 && !(a32 in t4)) return false;
        } else if (!cn(u22, s3, 3, void 0, new nr())) return false;
      }
      return true;
    }(t3, 0, i22);
  }) : function(t3) {
    return xe(t3) ? (e32 = Re(t3), function(t4) {
      return null == t4 ? void 0 : t4[e32];
    }) : /* @__PURE__ */ function(t4) {
      return function(e4) {
        return We(e4, t4);
      };
    }(t3);
    var e32;
  }(n22), 0) : -1;
  var n22, o22, i22, a22, s2;
}
function Cn(t2) {
  return "string" == typeof t2 || !v(t2) && h2(t2) && "[object String]" == f(t2);
}
function An(t2) {
  return h2(t2) && 1 === t2.nodeType && !er(t2);
}
function In(t2) {
  return "number" == typeof t2 || h2(t2) && "[object Number]" == f(t2);
}
function En(t2) {
  return null == t2;
}
function Pn(t2) {
  return void 0 === t2;
}
var Tn = Ht(function(t2, e22, r22) {
  jn(t2, e22, r22);
});
function Fn(t2, e22) {
  return null == (t2 = function(t3, e32) {
    return e32.length < 2 ? t3 : We(t3, function(t4, e4, r32) {
      var n32 = -1, o22 = t4.length;
      e4 < 0 && (e4 = -e4 > o22 ? 0 : o22 + e4), (r32 = r32 > o22 ? o22 : r32) < 0 && (r32 += o22), o22 = e4 > r32 ? 0 : r32 - e4 >>> 0, e4 >>>= 0;
      for (var i22 = Array(o22); ++n32 < o22; ) i22[n32] = t4[n32 + e4];
      return i22;
    }(e32, 0, -1));
  }(t2, e22 = Le(e22, t2))) || delete t2[Re((r22 = e22, n22 = null == r22 ? 0 : r22.length, n22 ? r22[n22 - 1] : void 0))];
  var r22, n22;
}
function Bn(t2) {
  return er(t2) ? void 0 : t2;
}
var kn = function(t2) {
  return bt(Lt(t2, void 0, Ke), t2 + "");
}(function(t2, e22) {
  var r22 = {};
  if (null == t2) return r22;
  var n22 = false;
  e22 = d(e22, function(e32) {
    return e32 = Le(e32, t2), n22 || (n22 = e32.length > 1), e32;
  }), Dt(t2, yr(t2), r22), n22 && (r22 = qr(r22, 7, Bn));
  for (var o22 = e22.length; o22--; ) Fn(r22, e22[o22]);
  return r22;
});
function Mn(t2, e22, r22) {
  return null == t2 ? t2 : function(t3, e32, r32) {
    if (!w(t3)) return t3;
    for (var n22 = -1, o22 = (e32 = Le(e32, t3)).length, i22 = o22 - 1, a22 = t3; null != a22 && ++n22 < o22; ) {
      var s2 = Re(e32[n22]), u22 = r32;
      if ("__proto__" === s2 || "constructor" === s2 || "prototype" === s2) return t3;
      if (n22 != i22) {
        var c22 = a22[s2];
        void 0 === (u22 = void 0) && (u22 = w(c22) ? c22 : At(e32[n22 + 1]) ? [] : {});
      }
      Nt(a22, s2, u22), a22 = a22[s2];
    }
    return t3;
  }(t2, e22, r22);
}
function zn(t2, e22, r22) {
  var n22 = true, o22 = true;
  if ("function" != typeof t2) throw new TypeError("Expected a function");
  return w(r22) && (n22 = "leading" in r22 ? !!r22.leading : n22, o22 = !("trailing" in r22) && o22), mn(t2, e22, { leading: n22, maxWait: e22, trailing: o22 });
}
var Un = Symbol("i18n");
var Nn = (t2, e22, r22) => {
  const n22 = t2[0];
  if (~n22.indexOf("[")) {
    const [o22, i22] = n22.split("["), a22 = parseInt(i22.replace("]", ""));
    if (a22 > -1) {
      if (!e22[o22] && e22[o22].length > 0 && e22[o22][a22] && "" !== e22[o22][a22]) throw new Error("Not Found");
      return 1 === t2.length ? "string" == typeof e22[o22][a22] ? e22[o22][a22] : "" : Nn(t2.slice(1), e22[o22][a22], r22);
    }
    throw new Error(`Not Found: ${n22}`);
  }
  if (e22[t2[0]] || "" === e22[t2[0]]) {
    if (1 === t2.length) {
      let n32 = "string" == typeof e22[t2[0]] ? e22[t2[0]] : "";
      return r22 && (n32 = ((t3, e32) => {
        const r32 = /{(\w*)}/g;
        let n42, o22 = t3;
        for (; null !== (n42 = r32.exec(t3)); ) {
          if (!Object.prototype.hasOwnProperty.call(e32, n42[1])) throw new Error(`Not Found Params: ${n42[1]}`);
          o22 = o22.replace(n42[0], e32[n42[1]]);
        }
        return o22;
      })(n32, r22)), n32;
    }
    return Nn(t2.slice(1), e22[t2[0]], r22);
  }
  throw new Error("Not Found");
};
var Dn = (e22) => {
  const r22 = ref(e22.locale || "en"), n22 = e22.messages;
  return { messages: n22, t: (t2, e32) => {
    const o22 = n22[r22.value] || n22.en;
    if ("string" != typeof t2) return console.warn("Warn(i18n):", "keypath must be a type of string"), "";
    try {
      return Nn(t2.split("."), o22, e32);
    } catch (e4) {
      return console.warn(`Warn(i18n): the keypath '${t2}' not found`), "";
    }
  }, setLocale: (t2) => {
    n22[t2] || console.warn(`Warn(i18n): the '${t2}' language pack not found, fall back to English language pack`), r22.value = t2;
  }, getLocale: () => r22.value, install(t2) {
    const e32 = this;
    t2.provide(Un, e32), t2.config.globalProperties.$t = e32.t, t2.config.globalProperties.$i18n = e32;
  } };
};
var Gn = {};
var Ln = {};
var Rn = {};
Object.defineProperty(Rn, "__esModule", { value: true }), Rn.SuperGifUtils = void 0;
var Wn = function() {
  function t2() {
  }
  return t2.bitsToNum = function(t3) {
    return t3.reduce(function(t4, e22) {
      return 2 * t4 + e22;
    }, 0);
  }, t2.byteToBitArr = function(t3) {
    for (var e22 = [], r22 = 7; r22 >= 0; r22--) e22.push(!!(t3 & 1 << r22));
    return e22;
  }, t2.lzwDecode = function(t3, e22) {
    for (var r22, n22, o22 = 0, i22 = function(t4) {
      for (var r32 = 0, n32 = 0; n32 < t4; n32++) e22.charCodeAt(o22 >> 3) & 1 << (7 & o22) && (r32 |= 1 << n32), o22++;
      return r32;
    }, a22 = [], s2 = 1 << t3, u22 = s2 + 1, c22 = t3 + 1, l22 = [], f22 = function() {
      l22 = [], c22 = t3 + 1;
      for (var e32 = 0; e32 < s2; e32++) l22[e32] = [e32];
      l22[s2] = [], l22[u22] = null;
    }; ; ) if (n22 = r22, (r22 = i22(c22)) !== s2) {
      if (r22 === u22) break;
      if (r22 < l22.length) n22 !== s2 && l22.push(l22[n22].concat(l22[r22][0]));
      else {
        if (r22 !== l22.length) throw new Error("Invalid LZW code.");
        l22.push(l22[n22].concat(l22[n22][0]));
      }
      a22.push.apply(a22, l22[r22]), l22.length === 1 << c22 && c22 < 12 && c22++;
    } else f22();
    return a22;
  }, t2;
}();
Rn.SuperGifUtils = Wn, Object.defineProperty(Ln, "__esModule", { value: true }), Ln.SuperGifParser = void 0;
var $n = Rn;
var Hn = function() {
  function t2(t3, e22) {
    this.stream = t3, this.handler = e22;
  }
  return t2.prototype.parseCT = function(t3) {
    for (var e22 = [], r22 = 0; r22 < t3; r22++) e22.push(this.stream.readBytes(3));
    return e22;
  }, t2.prototype.readSubBlocks = function() {
    var t3, e22;
    e22 = "";
    do {
      t3 = this.stream.readByte(), e22 += this.stream.read(t3);
    } while (0 !== t3);
    return e22;
  }, t2.prototype.parseHeader = function() {
    var t3 = {};
    if (t3.sig = this.stream.read(3), t3.ver = this.stream.read(3), "GIF" !== t3.sig) throw new Error("Not a GIF file.");
    t3.width = this.stream.readUnsigned(), t3.height = this.stream.readUnsigned();
    var e22 = $n.SuperGifUtils.byteToBitArr(this.stream.readByte());
    t3.gctFlag = e22.shift(), t3.colorRes = $n.SuperGifUtils.bitsToNum(e22.splice(0, 3)), t3.sorted = e22.shift(), t3.gctSize = $n.SuperGifUtils.bitsToNum(e22.splice(0, 3)), t3.bgColor = this.stream.readByte(), t3.pixelAspectRatio = this.stream.readByte(), t3.gctFlag && (t3.gct = this.parseCT(1 << t3.gctSize + 1)), this.handler.hdr && this.handler.hdr(t3);
  }, t2.prototype.parseExt = function(t3) {
    var e22 = this;
    switch (t3.label = this.stream.readByte(), t3.label) {
      case 249:
        t3.extType = "gce", function(t4) {
          e22.stream.readByte();
          var r22 = $n.SuperGifUtils.byteToBitArr(e22.stream.readByte());
          t4.reserved = r22.splice(0, 3), t4.disposalMethod = $n.SuperGifUtils.bitsToNum(r22.splice(0, 3)), t4.userInput = r22.shift(), t4.transparencyGiven = r22.shift(), t4.delayTime = e22.stream.readUnsigned(), t4.transparencyIndex = e22.stream.readByte(), t4.terminator = e22.stream.readByte(), e22.handler.gce && e22.handler.gce(t4);
        }(t3);
        break;
      case 254:
        t3.extType = "com", function(t4) {
          t4.comment = e22.readSubBlocks(), e22.handler.com && e22.handler.com(t4);
        }(t3);
        break;
      case 1:
        t3.extType = "pte", function(t4) {
          e22.stream.readByte(), t4.ptHeader = e22.stream.readBytes(12), t4.ptData = e22.readSubBlocks(), e22.handler.pte && e22.handler.pte(t4);
        }(t3);
        break;
      case 255:
        t3.extType = "app", function(t4) {
          e22.stream.readByte(), t4.identifier = e22.stream.read(8), t4.authCode = e22.stream.read(3), "NETSCAPE" === t4.identifier ? function(t5) {
            e22.stream.readByte(), t5.unknown = e22.stream.readByte(), t5.iterations = e22.stream.readUnsigned(), t5.terminator = e22.stream.readByte(), e22.handler.app && e22.handler.app.NETSCAPE && e22.handler.app.NETSCAPE(t5);
          }(t4) : function(t5) {
            t5.appData = e22.readSubBlocks(), e22.handler.app && e22.handler.app[t5.identifier] && e22.handler.app[t5.identifier](t5);
          }(t4);
        }(t3);
        break;
      default:
        t3.extType = "unknown", function(t4) {
          t4.data = e22.readSubBlocks(), e22.handler.unknown && e22.handler.unknown(t4);
        }(t3);
    }
  }, t2.prototype.parseImg = function(t3) {
    t3.leftPos = this.stream.readUnsigned(), t3.topPos = this.stream.readUnsigned(), t3.width = this.stream.readUnsigned(), t3.height = this.stream.readUnsigned();
    var e22 = $n.SuperGifUtils.byteToBitArr(this.stream.readByte());
    t3.lctFlag = e22.shift(), t3.interlaced = e22.shift(), t3.sorted = e22.shift(), t3.reserved = e22.splice(0, 2), t3.lctSize = $n.SuperGifUtils.bitsToNum(e22.splice(0, 3)), t3.lctFlag && (t3.lct = this.parseCT(1 << t3.lctSize + 1)), t3.lzwMinCodeSize = this.stream.readByte();
    var r22 = this.readSubBlocks();
    t3.pixels = $n.SuperGifUtils.lzwDecode(t3.lzwMinCodeSize, r22), t3.interlaced && (t3.pixels = function(t4, e32) {
      for (var r32 = new Array(t4.length), n22 = t4.length / e32, o22 = function(n32, o32) {
        var i32 = t4.slice(o32 * e32, (o32 + 1) * e32);
        r32.splice.apply(r32, [n32 * e32, e32].concat(i32));
      }, i22 = [0, 4, 2, 1], a22 = [8, 8, 4, 2], s2 = 0, u22 = 0; u22 < 4; u22++) for (var c22 = i22[u22]; c22 < n22; c22 += a22[u22]) o22(c22, s2), s2++;
      return r32;
    }(t3.pixels, t3.width)), this.handler.img && this.handler.img(t3);
  }, t2.prototype.parseBlock = function() {
    var t3 = {};
    switch (t3.sentinel = this.stream.readByte(), String.fromCharCode(t3.sentinel)) {
      case "!":
        t3.type = "ext", this.parseExt(t3);
        break;
      case ",":
        t3.type = "img", this.parseImg(t3);
        break;
      case ";":
        t3.type = "eof", this.handler.eof && this.handler.eof(t3);
        break;
      default:
        throw new Error("Unknown block: 0x" + t3.sentinel.toString(16));
    }
    "eof" !== t3.type && setTimeout(this.parseBlock.bind(this), 0);
  }, t2.prototype.parse = function() {
    this.parseHeader(), setTimeout(this.parseBlock.bind(this), 0);
  }, t2;
}();
Ln.SuperGifParser = Hn;
var Vn = {};
Object.defineProperty(Vn, "__esModule", { value: true }), Vn.SuperGifStream = void 0;
var qn = function() {
  function t2(t3) {
    this.data = t3, this.position = 0;
  }
  return t2.prototype.readByte = function() {
    if (this.position >= this.data.length) throw new Error("Attempted to read past end of stream.");
    return this.data instanceof Uint8Array ? this.data[this.position++] : 255 & this.data.charCodeAt(this.position++);
  }, t2.prototype.readBytes = function(t3) {
    for (var e22 = [], r22 = 0; r22 < t3; r22++) e22.push(this.readByte());
    return e22;
  }, t2.prototype.read = function(t3) {
    for (var e22 = "", r22 = 0; r22 < t3; r22++) e22 += String.fromCharCode(this.readByte());
    return e22;
  }, t2.prototype.readUnsigned = function() {
    var t3 = this.readBytes(2);
    return (t3[1] << 8) + t3[0];
  }, t2;
}();
Vn.SuperGifStream = qn, Object.defineProperty(Gn, "__esModule", { value: true });
var Kn = Gn.SuperGif = void 0;
var Xn = Ln;
var Zn = Vn;
var Jn = function() {
  function t2(t3, e22, r22) {
    var n22 = this;
    for (var o22 in this.gifImgElement = t3, this.externalCanvas = r22, this.options = { autoPlay: true }, this.loading = false, this.ready = false, this.transparency = null, this.delay = null, this.disposalMethod = null, this.disposalRestoreFromIdx = null, this.lastDisposalMethod = null, this.frame = null, this.lastImg = null, this.playing = true, this.forward = true, this.ctxScaled = false, this.frames = [], this.frameOffsets = [], this.initialized = false, this.currentFrameIndex = -1, this.iterationCount = 0, this.stepping = false, this.handler = { hdr: this.withProgress(this.doHdr.bind(this)), gce: this.withProgress(this.doGCE.bind(this)), com: this.withProgress(this.doNothing.bind(this)), app: { NETSCAPE: this.withProgress(this.doNothing.bind(this)) }, img: this.withProgress(this.doImg.bind(this)), eof: function() {
      n22.pushFrame(), n22.canvas.width = n22.hdr.width * n22.getCanvasScale(), n22.canvas.height = n22.hdr.height * n22.getCanvasScale(), n22.playerInit(), n22.loading = false, n22.ready = true, n22.loadCallback && n22.loadCallback(n22.gifImgElement);
    } }, e22) this.options[o22] = e22[o22];
    this.onEndListener = e22.onEnd, this.loopDelay = e22.loopDelay || 0, this.overrideLoopMode = null != e22.loopMode ? e22.loopMode : "auto", this.drawWhileLoading = null == e22.drawWhileLoading || e22.drawWhileLoading;
  }
  return t2.prototype.init = function() {
    if (this.externalCanvas) this.canvas = this.externalCanvas, this.canvasContext = this.canvas.getContext("2d");
    else {
      var t3 = this.gifImgElement.parentNode, e22 = document.createElement("div");
      this.canvas = document.createElement("canvas"), this.canvasContext = this.canvas.getContext("2d"), e22.className = this.options.enclosingClass || "super-gif", e22.appendChild(this.canvas), t3 && (t3.insertBefore(e22, this.gifImgElement), t3.removeChild(this.gifImgElement));
    }
    this.tmpCanvas = document.createElement("canvas"), this.initialized = true;
  }, t2.prototype.loadSetup = function(t3) {
    return !this.loading && (t3 && (this.loadCallback = t3), this.loading = true, this.frames = [], this.clear(), this.disposalRestoreFromIdx = null, this.lastDisposalMethod = null, this.frame = null, this.lastImg = null, true);
  }, t2.prototype.completeLoop = function() {
    this.onEndListener && this.onEndListener(this.gifImgElement), this.iterationCount++, false !== this.overrideLoopMode || this.iterationCount < 0 ? this.doStep() : (this.stepping = false, this.playing = false);
  }, t2.prototype.doStep = function() {
    if (this.stepping = this.playing, this.stepping) {
      this.stepFrame(1);
      var t3 = 10 * this.frames[this.currentFrameIndex].delay;
      t3 || (t3 = 100), 0 === this.getNextFrameNo() ? (t3 += this.loopDelay, setTimeout(this.completeLoop.bind(this), t3)) : setTimeout(this.doStep.bind(this), t3);
    }
  }, t2.prototype.step = function() {
    this.stepping || setTimeout(this.doStep.bind(this), 0);
  }, t2.prototype.putFrame = function() {
    var t3;
    this.currentFrameIndex = parseInt(this.currentFrameIndex.toString(), 10), this.currentFrameIndex > this.frames.length - 1 && (this.currentFrameIndex = 0), this.currentFrameIndex < 0 && (this.currentFrameIndex = 0), t3 = this.frameOffsets[this.currentFrameIndex], this.tmpCanvas.getContext("2d").putImageData(this.frames[this.currentFrameIndex].data, t3.x, t3.y), this.canvasContext.globalCompositeOperation = "copy", this.canvasContext.drawImage(this.tmpCanvas, 0, 0);
  }, t2.prototype.playerInit = function() {
    this.loadErrorCause || (this.canvasContext.scale(this.getCanvasScale(), this.getCanvasScale()), this.options.autoPlay ? this.step() : (this.currentFrameIndex = 0, this.putFrame()));
  }, t2.prototype.clear = function() {
    this.transparency = null, this.delay = null, this.lastDisposalMethod = this.disposalMethod, this.disposalMethod = null, this.frame = null;
  }, t2.prototype.parseStream = function(t3) {
    try {
      new Xn.SuperGifParser(t3, this.handler).parse();
    } catch (t4) {
      this.handleError("parse");
    }
  }, t2.prototype.setSizes = function(t3, e22) {
    this.canvas.width = t3 * this.getCanvasScale(), this.canvas.height = e22 * this.getCanvasScale(), this.tmpCanvas.width = t3, this.tmpCanvas.height = e22, this.tmpCanvas.style.width = t3 + "px", this.tmpCanvas.style.height = e22 + "px", this.tmpCanvas.getContext("2d").setTransform(1, 0, 0, 1, 0, 0);
  }, t2.prototype.drawError = function() {
    this.canvasContext.fillStyle = "black", this.canvasContext.fillRect(0, 0, this.hdr.width, this.hdr.height), this.canvasContext.strokeStyle = "red", this.canvasContext.lineWidth = 3, this.canvasContext.moveTo(0, 0), this.canvasContext.lineTo(this.hdr.width, this.hdr.height), this.canvasContext.moveTo(0, this.hdr.height), this.canvasContext.lineTo(this.hdr.width, 0), this.canvasContext.stroke();
  }, t2.prototype.handleError = function(t3) {
    this.loadErrorCause = t3, this.hdr = { width: this.gifImgElement.width, height: this.gifImgElement.height }, this.frames = [], this.drawError();
  }, t2.prototype.doHdr = function(t3) {
    this.hdr = t3, this.setSizes(this.hdr.width, this.hdr.height);
  }, t2.prototype.doGCE = function(t3) {
    this.pushFrame(), this.clear(), this.transparency = t3.transparencyGiven ? t3.transparencyIndex : null, this.delay = t3.delayTime, this.disposalMethod = t3.disposalMethod;
  }, t2.prototype.pushFrame = function() {
    this.frame && (this.frames.push({ data: this.frame.getImageData(0, 0, this.hdr.width, this.hdr.height), delay: this.delay }), this.frameOffsets.push({ x: 0, y: 0 }));
  }, t2.prototype.doImg = function(t3) {
    var e22 = this;
    this.frame || (this.frame = this.tmpCanvas.getContext("2d"));
    var r22 = this.frames.length, n22 = t3.lctFlag ? t3.lct : this.hdr.gct;
    r22 > 0 && (3 === this.lastDisposalMethod ? null !== this.disposalRestoreFromIdx ? this.frame.putImageData(frames[this.disposalRestoreFromIdx].data, 0, 0) : this.frame.clearRect(this.lastImg.leftPos, this.lastImg.topPos, this.lastImg.width, this.lastImg.height) : this.disposalRestoreFromIdx = r22 - 1, 2 === this.lastDisposalMethod && this.frame.clearRect(this.lastImg.leftPos, this.lastImg.topPos, this.lastImg.width, this.lastImg.height));
    var o22 = this.frame.getImageData(t3.leftPos, t3.topPos, t3.width, t3.height);
    t3.pixels.forEach(function(t4, r32) {
      t4 !== e22.transparency && (o22.data[4 * r32 + 0] = n22[t4][0], o22.data[4 * r32 + 1] = n22[t4][1], o22.data[4 * r32 + 2] = n22[t4][2], o22.data[4 * r32 + 3] = 255);
    }), this.frame.putImageData(o22, t3.leftPos, t3.topPos), this.ctxScaled || (this.canvasContext.scale(this.getCanvasScale(), this.getCanvasScale()), this.ctxScaled = true), this.drawWhileLoading && (this.canvasContext.drawImage(this.tmpCanvas, 0, 0), this.drawWhileLoading = this.options.autoPlay), this.lastImg = t3;
  }, t2.prototype.doNothing = function() {
  }, t2.prototype.withProgress = function(t3) {
    return function(e22) {
      t3(e22);
    };
  }, t2.prototype.getNextFrameNo = function() {
    var t3 = this.forward ? 1 : -1;
    return (this.currentFrameIndex + t3 + this.frames.length) % this.frames.length;
  }, t2.prototype.stepFrame = function(t3) {
    this.currentFrameIndex = this.currentFrameIndex + t3, this.putFrame();
  }, t2.prototype.getCanvasScale = function() {
    return this.options.maxWidth && this.hdr && this.hdr.width > this.options.maxWidth ? this.options.maxWidth / this.hdr.width : window.devicePixelRatio || 1;
  }, t2.prototype.play = function() {
    this.playing = true, this.step();
  }, t2.prototype.pause = function() {
    this.playing = false;
  }, t2.prototype.isPlaying = function() {
    return this.playing;
  }, t2.prototype.getCanvas = function() {
    return this.canvas;
  }, t2.prototype.isLoading = function() {
    return this.loading;
  }, t2.prototype.isReady = function() {
    return this.ready;
  }, t2.prototype.isAutoPlay = function() {
    return this.options.autoPlay;
  }, t2.prototype.getLength = function() {
    return this.frames.length;
  }, t2.prototype.getCurrentFrame = function() {
    return this.currentFrameIndex;
  }, t2.prototype.moveTo = function(t3) {
    this.currentFrameIndex = t3, this.putFrame();
  }, t2.prototype.loadURL = function(t3, e22) {
    var r22 = this;
    if (this.loadSetup(e22)) {
      var n22 = new XMLHttpRequest();
      n22.open("GET", t3, true), "overrideMimeType" in n22 ? n22.overrideMimeType("text/plain; charset=x-user-defined") : "responseType" in n22 ? n22.responseType = "arraybuffer" : n22.setRequestHeader("Accept-Charset", "x-user-defined"), n22.onloadstart = function() {
        r22.initialized || r22.init();
      }, n22.onload = function() {
        if (200 === n22.status) {
          var t4 = n22.response;
          t4.toString().indexOf("ArrayBuffer") > 0 && (t4 = new Uint8Array(t4));
          var e32 = new Zn.SuperGifStream(t4);
          setTimeout(function() {
            r22.parseStream(e32);
          }, 0);
        } else r22.handleError("xhr - response");
      }, n22.onerror = function() {
        r22.handleError("xhr");
      }, n22.send();
    }
  }, t2.prototype.load = function(t3) {
    this.loadURL(this.gifImgElement.src, t3);
  }, t2;
}();
Kn = Gn.SuperGif = Jn;

// node_modules/.pnpm/@mmt817+pixel-ui@1.6.0_vue@3.5.17_typescript@5.8.3_/node_modules/@mmt817/pixel-ui/dist/es/hooks-nEtVu-xV.js
function y2(o22, s2, i22) {
  isRef(o22) ? watch(o22, (e22, t2) => {
    null == t2 || t2.removeEventListener(s2, i22), null == e22 || e22.addEventListener(s2, i22);
  }) : onMounted(() => null == o22 ? void 0 : o22.addEventListener(s2, i22)), onBeforeUnmount(() => {
    var e22;
    return null == (e22 = unref(o22)) ? void 0 : e22.removeEventListener(s2, i22);
  });
}
function k2(e22, t2) {
  y2(document, "click", (r22) => {
    e22.value && r22.target && (e22.value.contains(r22.target) || t2(r22));
  });
}
var M2 = { prefix: Math.floor(1e4 * Math.random()), current: 0 };
var S2 = (e22 = "px") => computed(() => `${e22}-${M2.prefix}-${M2.current++}}`);
var $2 = (e22, t2) => Sn(e22, (e32) => {
  P(t2) && t2(e32), e32.children && $2(e32.children, t2);
});
var A2 = () => {
  var e22, t2;
  const r22 = /* @__PURE__ */ new Map(), a22 = getCurrentInstance(), n22 = null == (t2 = null == (e22 = useSlots()) ? void 0 : e22.default) ? void 0 : t2.call(e22);
  watchEffect(() => {
    (null == a22 ? void 0 : a22.props.disabled) ? $2(n22 ?? [], (e32) => {
      (null == e32 ? void 0 : e32.props) && (r22.set(e32, Kr(e32.props)), e32.props = be(null == e32 ? void 0 : e32.props, { style: { cursor: "not-allowed", color: "var(--px-color-info)" } }));
    }) : $2(n22 ?? [], (e32) => {
      r22.has(e32) && (e32.props = r22.get(e32));
    });
  });
};
var N2 = { name: "en", el: { colorpicker: { confirm: "OK", clear: "Clear", defaultLabel: "color picker", description: "current color is {color}. press enter to select a new color." }, datepicker: { now: "Now", today: "Today", cancel: "Cancel", clear: "Clear", confirm: "OK", dateTablePrompt: "Use the arrow keys and enter to select the day of the month", monthTablePrompt: "Use the arrow keys and enter to select the month", yearTablePrompt: "Use the arrow keys and enter to select the year", selectedDate: "Selected date", selectDate: "Select date", selectTime: "Select time", startDate: "Start Date", startTime: "Start Time", endDate: "End Date", endTime: "End Time", prevYear: "Previous Year", nextYear: "Next Year", prevMonth: "Previous Month", nextMonth: "Next Month", year: "", month1: "January", month2: "February", month3: "March", month4: "April", month5: "May", month6: "June", month7: "July", month8: "August", month9: "September", month10: "October", month11: "November", month12: "December", week: "week", weeks: { sun: "Sun", mon: "Mon", tue: "Tue", wed: "Wed", thu: "Thu", fri: "Fri", sat: "Sat" }, weeksFull: { sun: "Sunday", mon: "Monday", tue: "Tuesday", wed: "Wednesday", thu: "Thursday", fri: "Friday", sat: "Saturday" }, months: { jan: "Jan", feb: "Feb", mar: "Mar", apr: "Apr", may: "May", jun: "Jun", jul: "Jul", aug: "Aug", sep: "Sep", oct: "Oct", nov: "Nov", dec: "Dec" } }, inputNumber: { decrease: "decrease number", increase: "increase number" }, select: { loading: "Loading", noMatch: "No matching data", noData: "No data", placeholder: "Select" }, dropdown: { toggleDropdown: "Toggle Dropdown" }, cascader: { noMatch: "No matching data", loading: "Loading", placeholder: "Select", noData: "No data" }, pagination: { goto: "Go to", pagesize: "/page", total: "Total {total}", pageClassifier: "", page: "Page", prev: "Go to previous page", next: "Go to next page", currentPage: "page {pager}", prevPages: "Previous {pager} pages", nextPages: "Next {pager} pages", deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details" }, dialog: { close: "Close this dialog" }, drawer: { close: "Close this dialog" }, messagebox: { title: "Message", confirm: "OK", cancel: "Cancel", error: "Illegal input", close: "Close this dialog" }, upload: { deleteTip: "press delete to remove", delete: "Delete", preview: "Preview", continue: "Continue" }, slider: { defaultLabel: "slider between {min} and {max}", defaultRangeStartLabel: "pick start value", defaultRangeEndLabel: "pick end value" }, table: { emptyText: "No Data", confirmFilter: "Confirm", resetFilter: "Reset", clearFilter: "All", sumText: "Sum" }, tour: { next: "Next", previous: "Previous", finish: "Finish" }, tree: { emptyText: "No Data" }, transfer: { noMatch: "No matching data", noData: "No data", titles: ["List 1", "List 2"], filterPlaceholder: "Enter keyword", noCheckedFormat: "{total} items", hasCheckedFormat: "{checked}/{total} checked" }, image: { error: "FAILED" }, pageHeader: { title: "Back" }, popconfirm: { confirmButtonText: "Yes", cancelButtonText: "No" }, carousel: { leftArrow: "Carousel arrow left", rightArrow: "Carousel arrow right", indicator: "Carousel switch to index {index}" } } };
var H2 = (e22) => {
  {
    const e32 = inject(Un) ?? ref(Dn({ locale: N2.name, messages: { en: N2 } }));
    return computed(() => ((e4) => kn(e4, ["install"]))(unref(e32)));
  }
};
var F2 = (e22) => {
  const t2 = computed(() => e22.getLastBottomOffset()), r22 = computed(() => e22.offset + t2.value), a22 = computed(() => r22.value + e22.boxHeight.value);
  return { topOffset: r22, bottomOffset: a22 };
};
var E2 = ref(0);
var R2 = (e22 = 2e3) => {
  const t2 = ref(e22), r22 = computed(() => E2.value + t2.value);
  return { initialValue: t2, currentZIndex: r22, nextZIndex: () => (E2.value += 1, r22.value) };
};
function T2(e22, { afterBlur: t2, beforeBlur: r22, afterFocus: a22 } = {}) {
  const n22 = getCurrentInstance(), { emit: o22 } = n22, i22 = ref(), l22 = ref(false);
  return y2(i22, "click", () => {
    var t3;
    null == (t3 = e22.value) || t3.focus();
  }), { wrapperRef: i22, isFocused: l22, handleFocus: (e32) => {
    l22.value || (l22.value = true, o22("focus", e32), null == a22 || a22());
  }, handleBlur: (e32) => {
    var a32;
    P(r22) && r22(e32) || e32.relatedTarget && (null == (a32 = i22.value) ? void 0 : a32.contains(e32.relatedTarget)) || (l22.value = false, o22("blur", e32), null == t2 || t2());
  } };
}
var C2 = class extends Error {
  constructor(e22) {
    super(Cn(e22) ? e22 : e22.message), this.name = "PxUIError";
  }
};
var L2 = (e22, t2 = "px") => e22 ? In(e22) || ((e32) => !!Cn(e32) && !Number.isNaN(Number(e32)))(e22) ? `${e22}${t2}` : Cn(e22) ? e22 : void function(e32) {
  if (true) {
    const t3 = Cn(e32) ? ((e4) => new C2(`[${e4}]: binding value must be a string or number`))(e32) : e32;
    console.warn(t3);
  }
}("utils/style") : "";
defineComponent({ props: { vNode: { type: [String, Object, Function], required: true } }, setup: (e22) => () => P(e22.vNode) ? e22.vNode() : e22.vNode });
var D2 = (e22, t2, n22, o22) => {
  const s2 = { offsetX: 0, offsetY: 0 }, i22 = (t3, r22) => {
    if (e22.value) {
      const { offsetX: a22, offsetY: n32 } = s2, i32 = e22.value.getBoundingClientRect(), l22 = i32.left, h32 = i32.top, c32 = i32.width, u32 = i32.height, d22 = document.documentElement.clientWidth, f22 = document.documentElement.clientHeight, g22 = -l22 + a22, m22 = -h32 + n32, b22 = d22 - l22 - c32 + a22, p2 = f22 - h32 - (u32 < f22 ? u32 : 0) + n32;
      (null == o22 ? void 0 : o22.value) || (t3 = Math.min(Math.max(t3, g22), b22), r22 = Math.min(Math.max(r22, m22), p2)), s2.offsetX = t3, s2.offsetY = r22, e22.value.style.transform = `translate(${L2(t3)}, ${L2(r22)})`;
    }
  }, h22 = (e32) => {
    const t3 = e32.clientX, r22 = e32.clientY, { offsetX: a22, offsetY: n32 } = s2, o32 = (e4) => {
      const o4 = a22 + e4.clientX - t3, s3 = n32 + e4.clientY - r22;
      i22(o4, s3);
    }, l22 = () => {
      document.removeEventListener("mousemove", o32), document.removeEventListener("mouseup", l22);
    };
    document.addEventListener("mousemove", o32), document.addEventListener("mouseup", l22);
  }, c22 = () => {
    t2.value && e22.value && (t2.value.removeEventListener("mousedown", h22), window.removeEventListener("resize", u22));
  }, u22 = () => {
    const { offsetX: e32, offsetY: t3 } = s2;
    i22(e32, t3);
  };
  return onMounted(() => {
    watchEffect(() => {
      n22.value ? t2.value && e22.value && (t2.value.addEventListener("mousedown", h22), window.addEventListener("resize", u22)) : c22();
    });
  }), onBeforeUnmount(() => {
    c22();
  }), { resetPosition: () => {
    s2.offsetX = 0, s2.offsetY = 0, e22.value && (e22.value.style.transform = "");
  }, updatePosition: u22 };
};
function P2(e22, t2) {
  (function(e32) {
    return "string" == typeof e32 && -1 !== e32.indexOf(".") && 1 === parseFloat(e32);
  })(e22) && (e22 = "100%");
  const r22 = function(e32) {
    return "string" == typeof e32 && -1 !== e32.indexOf("%");
  }(e22);
  return e22 = 360 === t2 ? e22 : Math.min(t2, Math.max(0, parseFloat(e22))), r22 && (e22 = parseInt(String(e22 * t2), 10) / 100), Math.abs(e22 - t2) < 1e-6 ? 1 : e22 = 360 === t2 ? (e22 < 0 ? e22 % t2 + t2 : e22 % t2) / parseFloat(String(t2)) : e22 % t2 / parseFloat(String(t2));
}
function O2(e22) {
  return Math.min(1, Math.max(0, e22));
}
function j2(e22) {
  return e22 = parseFloat(e22), (isNaN(e22) || e22 < 0 || e22 > 1) && (e22 = 1), e22;
}
function Y2(e22) {
  return Number(e22) <= 1 ? 100 * Number(e22) + "%" : e22;
}
function B2(e22) {
  return 1 === e22.length ? "0" + e22 : String(e22);
}
function W2(e22, t2, r22) {
  e22 = P2(e22, 255), t2 = P2(t2, 255), r22 = P2(r22, 255);
  const a22 = Math.max(e22, t2, r22), n22 = Math.min(e22, t2, r22);
  let o22 = 0, s2 = 0;
  const i22 = (a22 + n22) / 2;
  if (a22 === n22) s2 = 0, o22 = 0;
  else {
    const l22 = a22 - n22;
    switch (s2 = i22 > 0.5 ? l22 / (2 - a22 - n22) : l22 / (a22 + n22), a22) {
      case e22:
        o22 = (t2 - r22) / l22 + (t2 < r22 ? 6 : 0);
        break;
      case t2:
        o22 = (r22 - e22) / l22 + 2;
        break;
      case r22:
        o22 = (e22 - t2) / l22 + 4;
    }
    o22 /= 6;
  }
  return { h: o22, s: s2, l: i22 };
}
function q2(e22, t2, r22) {
  return r22 < 0 && (r22 += 1), r22 > 1 && (r22 -= 1), r22 < 1 / 6 ? e22 + 6 * r22 * (t2 - e22) : r22 < 0.5 ? t2 : r22 < 2 / 3 ? e22 + (t2 - e22) * (2 / 3 - r22) * 6 : e22;
}
function I2(e22, t2, r22) {
  e22 = P2(e22, 255), t2 = P2(t2, 255), r22 = P2(r22, 255);
  const a22 = Math.max(e22, t2, r22), n22 = Math.min(e22, t2, r22);
  let o22 = 0;
  const s2 = a22, i22 = a22 - n22, l22 = 0 === a22 ? 0 : i22 / a22;
  if (a22 === n22) o22 = 0;
  else {
    switch (a22) {
      case e22:
        o22 = (t2 - r22) / i22 + (t2 < r22 ? 6 : 0);
        break;
      case t2:
        o22 = (r22 - e22) / i22 + 2;
        break;
      case r22:
        o22 = (e22 - t2) / i22 + 4;
    }
    o22 /= 6;
  }
  return { h: o22, s: l22, v: s2 };
}
function X2(e22, t2, r22, a22) {
  const n22 = [B2(Math.round(e22).toString(16)), B2(Math.round(t2).toString(16)), B2(Math.round(r22).toString(16))];
  return a22 && n22[0].startsWith(n22[0].charAt(1)) && n22[1].startsWith(n22[1].charAt(1)) && n22[2].startsWith(n22[2].charAt(1)) ? n22[0].charAt(0) + n22[1].charAt(0) + n22[2].charAt(0) : n22.join("");
}
function J2(e22, t2, r22) {
  let a22 = 1 - e22 / 255, n22 = 1 - t2 / 255, o22 = 1 - r22 / 255, s2 = Math.min(a22, n22, o22);
  return 1 === s2 ? (a22 = 0, n22 = 0, o22 = 0) : (a22 = (a22 - s2) / (1 - s2) * 100, n22 = (n22 - s2) / (1 - s2) * 100, o22 = (o22 - s2) / (1 - s2) * 100), s2 *= 100, { c: Math.round(a22), m: Math.round(n22), y: Math.round(o22), k: Math.round(s2) };
}
function U2(e22) {
  return V2(e22) / 255;
}
function V2(e22) {
  return parseInt(e22, 16);
}
var z2 = { aliceblue: "#f0f8ff", antiquewhite: "#faebd7", aqua: "#00ffff", aquamarine: "#7fffd4", azure: "#f0ffff", beige: "#f5f5dc", bisque: "#ffe4c4", black: "#000000", blanchedalmond: "#ffebcd", blue: "#0000ff", blueviolet: "#8a2be2", brown: "#a52a2a", burlywood: "#deb887", cadetblue: "#5f9ea0", chartreuse: "#7fff00", chocolate: "#d2691e", coral: "#ff7f50", cornflowerblue: "#6495ed", cornsilk: "#fff8dc", crimson: "#dc143c", cyan: "#00ffff", darkblue: "#00008b", darkcyan: "#008b8b", darkgoldenrod: "#b8860b", darkgray: "#a9a9a9", darkgreen: "#006400", darkgrey: "#a9a9a9", darkkhaki: "#bdb76b", darkmagenta: "#8b008b", darkolivegreen: "#556b2f", darkorange: "#ff8c00", darkorchid: "#9932cc", darkred: "#8b0000", darksalmon: "#e9967a", darkseagreen: "#8fbc8f", darkslateblue: "#483d8b", darkslategray: "#2f4f4f", darkslategrey: "#2f4f4f", darkturquoise: "#00ced1", darkviolet: "#9400d3", deeppink: "#ff1493", deepskyblue: "#00bfff", dimgray: "#696969", dimgrey: "#696969", dodgerblue: "#1e90ff", firebrick: "#b22222", floralwhite: "#fffaf0", forestgreen: "#228b22", fuchsia: "#ff00ff", gainsboro: "#dcdcdc", ghostwhite: "#f8f8ff", goldenrod: "#daa520", gold: "#ffd700", gray: "#808080", green: "#008000", greenyellow: "#adff2f", grey: "#808080", honeydew: "#f0fff0", hotpink: "#ff69b4", indianred: "#cd5c5c", indigo: "#4b0082", ivory: "#fffff0", khaki: "#f0e68c", lavenderblush: "#fff0f5", lavender: "#e6e6fa", lawngreen: "#7cfc00", lemonchiffon: "#fffacd", lightblue: "#add8e6", lightcoral: "#f08080", lightcyan: "#e0ffff", lightgoldenrodyellow: "#fafad2", lightgray: "#d3d3d3", lightgreen: "#90ee90", lightgrey: "#d3d3d3", lightpink: "#ffb6c1", lightsalmon: "#ffa07a", lightseagreen: "#20b2aa", lightskyblue: "#87cefa", lightslategray: "#778899", lightslategrey: "#778899", lightsteelblue: "#b0c4de", lightyellow: "#ffffe0", lime: "#00ff00", limegreen: "#32cd32", linen: "#faf0e6", magenta: "#ff00ff", maroon: "#800000", mediumaquamarine: "#66cdaa", mediumblue: "#0000cd", mediumorchid: "#ba55d3", mediumpurple: "#9370db", mediumseagreen: "#3cb371", mediumslateblue: "#7b68ee", mediumspringgreen: "#00fa9a", mediumturquoise: "#48d1cc", mediumvioletred: "#c71585", midnightblue: "#191970", mintcream: "#f5fffa", mistyrose: "#ffe4e1", moccasin: "#ffe4b5", navajowhite: "#ffdead", navy: "#000080", oldlace: "#fdf5e6", olive: "#808000", olivedrab: "#6b8e23", orange: "#ffa500", orangered: "#ff4500", orchid: "#da70d6", palegoldenrod: "#eee8aa", palegreen: "#98fb98", paleturquoise: "#afeeee", palevioletred: "#db7093", papayawhip: "#ffefd5", peachpuff: "#ffdab9", peru: "#cd853f", pink: "#ffc0cb", plum: "#dda0dd", powderblue: "#b0e0e6", purple: "#800080", rebeccapurple: "#663399", red: "#ff0000", rosybrown: "#bc8f8f", royalblue: "#4169e1", saddlebrown: "#8b4513", salmon: "#fa8072", sandybrown: "#f4a460", seagreen: "#2e8b57", seashell: "#fff5ee", sienna: "#a0522d", silver: "#c0c0c0", skyblue: "#87ceeb", slateblue: "#6a5acd", slategray: "#708090", slategrey: "#708090", snow: "#fffafa", springgreen: "#00ff7f", steelblue: "#4682b4", tan: "#d2b48c", teal: "#008080", thistle: "#d8bfd8", tomato: "#ff6347", turquoise: "#40e0d0", violet: "#ee82ee", wheat: "#f5deb3", white: "#ffffff", whitesmoke: "#f5f5f5", yellow: "#ffff00", yellowgreen: "#9acd32" };
var G2 = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)";
var K2 = "[\\s|\\(]+(" + G2 + ")[,|\\s]+(" + G2 + ")[,|\\s]+(" + G2 + ")\\s*\\)?";
var _2 = "[\\s|\\(]+(" + G2 + ")[,|\\s]+(" + G2 + ")[,|\\s]+(" + G2 + ")[,|\\s]+(" + G2 + ")\\s*\\)?";
var Z2 = { CSS_UNIT: new RegExp(G2), rgb: new RegExp("rgb" + K2), rgba: new RegExp("rgba" + _2), hsl: new RegExp("hsl" + K2), hsla: new RegExp("hsla" + _2), hsv: new RegExp("hsv" + K2), hsva: new RegExp("hsva" + _2), cmyk: new RegExp("cmyk" + _2), hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/, hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/ };
function Q2(e22) {
  return "number" == typeof e22 ? !Number.isNaN(e22) : Z2.CSS_UNIT.test(e22);
}
var ee2 = class _ee {
  constructor(e22 = "", t2 = {}) {
    if (e22 instanceof _ee) return e22;
    "number" == typeof e22 && (e22 = function(e32) {
      return { r: e32 >> 16, g: (65280 & e32) >> 8, b: 255 & e32 };
    }(e22)), this.originalInput = e22;
    const r22 = function(e32) {
      let t3 = { r: 0, g: 0, b: 0 }, r32 = 1, a22 = null, n22 = null, o22 = null, s2 = false, i22 = false;
      var l22, h22, c22;
      return "string" == typeof e32 && (e32 = function(e4) {
        if (0 === (e4 = e4.trim().toLowerCase()).length) return false;
        let t4 = false;
        if (z2[e4]) e4 = z2[e4], t4 = true;
        else if ("transparent" === e4) return { r: 0, g: 0, b: 0, a: 0, format: "name" };
        let r4 = Z2.rgb.exec(e4);
        return r4 ? { r: r4[1], g: r4[2], b: r4[3] } : (r4 = Z2.rgba.exec(e4), r4 ? { r: r4[1], g: r4[2], b: r4[3], a: r4[4] } : (r4 = Z2.hsl.exec(e4), r4 ? { h: r4[1], s: r4[2], l: r4[3] } : (r4 = Z2.hsla.exec(e4), r4 ? { h: r4[1], s: r4[2], l: r4[3], a: r4[4] } : (r4 = Z2.hsv.exec(e4), r4 ? { h: r4[1], s: r4[2], v: r4[3] } : (r4 = Z2.hsva.exec(e4), r4 ? { h: r4[1], s: r4[2], v: r4[3], a: r4[4] } : (r4 = Z2.cmyk.exec(e4), r4 ? { c: r4[1], m: r4[2], y: r4[3], k: r4[4] } : (r4 = Z2.hex8.exec(e4), r4 ? { r: V2(r4[1]), g: V2(r4[2]), b: V2(r4[3]), a: U2(r4[4]), format: t4 ? "name" : "hex8" } : (r4 = Z2.hex6.exec(e4), r4 ? { r: V2(r4[1]), g: V2(r4[2]), b: V2(r4[3]), format: t4 ? "name" : "hex" } : (r4 = Z2.hex4.exec(e4), r4 ? { r: V2(r4[1] + r4[1]), g: V2(r4[2] + r4[2]), b: V2(r4[3] + r4[3]), a: U2(r4[4] + r4[4]), format: t4 ? "name" : "hex8" } : (r4 = Z2.hex3.exec(e4), !!r4 && { r: V2(r4[1] + r4[1]), g: V2(r4[2] + r4[2]), b: V2(r4[3] + r4[3]), format: t4 ? "name" : "hex" }))))))))));
      }(e32)), "object" == typeof e32 && (Q2(e32.r) && Q2(e32.g) && Q2(e32.b) ? (l22 = e32.r, h22 = e32.g, c22 = e32.b, t3 = { r: 255 * P2(l22, 255), g: 255 * P2(h22, 255), b: 255 * P2(c22, 255) }, s2 = true, i22 = "%" === String(e32.r).substr(-1) ? "prgb" : "rgb") : Q2(e32.h) && Q2(e32.s) && Q2(e32.v) ? (a22 = Y2(e32.s), n22 = Y2(e32.v), t3 = function(e4, t4, r4) {
        e4 = 6 * P2(e4, 360), t4 = P2(t4, 100), r4 = P2(r4, 100);
        const a32 = Math.floor(e4), n32 = e4 - a32, o32 = r4 * (1 - t4), s3 = r4 * (1 - n32 * t4), i32 = r4 * (1 - (1 - n32) * t4), l32 = a32 % 6;
        return { r: 255 * [r4, s3, o32, o32, i32, r4][l32], g: 255 * [i32, r4, r4, s3, o32, o32][l32], b: 255 * [o32, o32, i32, r4, r4, s3][l32] };
      }(e32.h, a22, n22), s2 = true, i22 = "hsv") : Q2(e32.h) && Q2(e32.s) && Q2(e32.l) ? (a22 = Y2(e32.s), o22 = Y2(e32.l), t3 = function(e4, t4, r4) {
        let a32, n32, o32;
        if (e4 = P2(e4, 360), t4 = P2(t4, 100), r4 = P2(r4, 100), 0 === t4) n32 = r4, o32 = r4, a32 = r4;
        else {
          const s3 = r4 < 0.5 ? r4 * (1 + t4) : r4 + t4 - r4 * t4, i32 = 2 * r4 - s3;
          a32 = q2(i32, s3, e4 + 1 / 3), n32 = q2(i32, s3, e4), o32 = q2(i32, s3, e4 - 1 / 3);
        }
        return { r: 255 * a32, g: 255 * n32, b: 255 * o32 };
      }(e32.h, a22, o22), s2 = true, i22 = "hsl") : Q2(e32.c) && Q2(e32.m) && Q2(e32.y) && Q2(e32.k) && (t3 = function(e4, t4, r4, a32) {
        const n32 = a32 / 100;
        return { r: 255 * (1 - e4 / 100) * (1 - n32), g: 255 * (1 - t4 / 100) * (1 - n32), b: 255 * (1 - r4 / 100) * (1 - n32) };
      }(e32.c, e32.m, e32.y, e32.k), s2 = true, i22 = "cmyk"), Object.prototype.hasOwnProperty.call(e32, "a") && (r32 = e32.a)), r32 = j2(r32), { ok: s2, format: e32.format || i22, r: Math.min(255, Math.max(t3.r, 0)), g: Math.min(255, Math.max(t3.g, 0)), b: Math.min(255, Math.max(t3.b, 0)), a: r32 };
    }(e22);
    this.originalInput = e22, this.r = r22.r, this.g = r22.g, this.b = r22.b, this.a = r22.a, this.roundA = Math.round(100 * this.a) / 100, this.format = t2.format ?? r22.format, this.gradientType = t2.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = r22.ok;
  }
  isDark() {
    return this.getBrightness() < 128;
  }
  isLight() {
    return !this.isDark();
  }
  getBrightness() {
    const e22 = this.toRgb();
    return (299 * e22.r + 587 * e22.g + 114 * e22.b) / 1e3;
  }
  getLuminance() {
    const e22 = this.toRgb();
    let t2, r22, a22;
    const n22 = e22.r / 255, o22 = e22.g / 255, s2 = e22.b / 255;
    return t2 = n22 <= 0.03928 ? n22 / 12.92 : Math.pow((n22 + 0.055) / 1.055, 2.4), r22 = o22 <= 0.03928 ? o22 / 12.92 : Math.pow((o22 + 0.055) / 1.055, 2.4), a22 = s2 <= 0.03928 ? s2 / 12.92 : Math.pow((s2 + 0.055) / 1.055, 2.4), 0.2126 * t2 + 0.7152 * r22 + 0.0722 * a22;
  }
  getAlpha() {
    return this.a;
  }
  setAlpha(e22) {
    return this.a = j2(e22), this.roundA = Math.round(100 * this.a) / 100, this;
  }
  isMonochrome() {
    const { s: e22 } = this.toHsl();
    return 0 === e22;
  }
  toHsv() {
    const e22 = I2(this.r, this.g, this.b);
    return { h: 360 * e22.h, s: e22.s, v: e22.v, a: this.a };
  }
  toHsvString() {
    const e22 = I2(this.r, this.g, this.b), t2 = Math.round(360 * e22.h), r22 = Math.round(100 * e22.s), a22 = Math.round(100 * e22.v);
    return 1 === this.a ? `hsv(${t2}, ${r22}%, ${a22}%)` : `hsva(${t2}, ${r22}%, ${a22}%, ${this.roundA})`;
  }
  toHsl() {
    const e22 = W2(this.r, this.g, this.b);
    return { h: 360 * e22.h, s: e22.s, l: e22.l, a: this.a };
  }
  toHslString() {
    const e22 = W2(this.r, this.g, this.b), t2 = Math.round(360 * e22.h), r22 = Math.round(100 * e22.s), a22 = Math.round(100 * e22.l);
    return 1 === this.a ? `hsl(${t2}, ${r22}%, ${a22}%)` : `hsla(${t2}, ${r22}%, ${a22}%, ${this.roundA})`;
  }
  toHex(e22 = false) {
    return X2(this.r, this.g, this.b, e22);
  }
  toHexString(e22 = false) {
    return "#" + this.toHex(e22);
  }
  toHex8(e22 = false) {
    return function(e32, t2, r22, a22, n22) {
      const o22 = [B2(Math.round(e32).toString(16)), B2(Math.round(t2).toString(16)), B2(Math.round(r22).toString(16)), B2((s2 = a22, Math.round(255 * parseFloat(s2)).toString(16)))];
      var s2;
      return n22 && o22[0].startsWith(o22[0].charAt(1)) && o22[1].startsWith(o22[1].charAt(1)) && o22[2].startsWith(o22[2].charAt(1)) && o22[3].startsWith(o22[3].charAt(1)) ? o22[0].charAt(0) + o22[1].charAt(0) + o22[2].charAt(0) + o22[3].charAt(0) : o22.join("");
    }(this.r, this.g, this.b, this.a, e22);
  }
  toHex8String(e22 = false) {
    return "#" + this.toHex8(e22);
  }
  toHexShortString(e22 = false) {
    return 1 === this.a ? this.toHexString(e22) : this.toHex8String(e22);
  }
  toRgb() {
    return { r: Math.round(this.r), g: Math.round(this.g), b: Math.round(this.b), a: this.a };
  }
  toRgbString() {
    const e22 = Math.round(this.r), t2 = Math.round(this.g), r22 = Math.round(this.b);
    return 1 === this.a ? `rgb(${e22}, ${t2}, ${r22})` : `rgba(${e22}, ${t2}, ${r22}, ${this.roundA})`;
  }
  toPercentageRgb() {
    const e22 = (e32) => `${Math.round(100 * P2(e32, 255))}%`;
    return { r: e22(this.r), g: e22(this.g), b: e22(this.b), a: this.a };
  }
  toPercentageRgbString() {
    const e22 = (e32) => Math.round(100 * P2(e32, 255));
    return 1 === this.a ? `rgb(${e22(this.r)}%, ${e22(this.g)}%, ${e22(this.b)}%)` : `rgba(${e22(this.r)}%, ${e22(this.g)}%, ${e22(this.b)}%, ${this.roundA})`;
  }
  toCmyk() {
    return { ...J2(this.r, this.g, this.b) };
  }
  toCmykString() {
    const { c: e22, m: t2, y: r22, k: a22 } = J2(this.r, this.g, this.b);
    return `cmyk(${e22}, ${t2}, ${r22}, ${a22})`;
  }
  toName() {
    if (0 === this.a) return "transparent";
    if (this.a < 1) return false;
    const e22 = "#" + X2(this.r, this.g, this.b, false);
    for (const [t2, r22] of Object.entries(z2)) if (e22 === r22) return t2;
    return false;
  }
  toString(e22) {
    const t2 = Boolean(e22);
    e22 = e22 ?? this.format;
    let r22 = false;
    const a22 = this.a < 1 && this.a >= 0;
    return t2 || !a22 || !e22.startsWith("hex") && "name" !== e22 ? ("rgb" === e22 && (r22 = this.toRgbString()), "prgb" === e22 && (r22 = this.toPercentageRgbString()), "hex" !== e22 && "hex6" !== e22 || (r22 = this.toHexString()), "hex3" === e22 && (r22 = this.toHexString(true)), "hex4" === e22 && (r22 = this.toHex8String(true)), "hex8" === e22 && (r22 = this.toHex8String()), "name" === e22 && (r22 = this.toName()), "hsl" === e22 && (r22 = this.toHslString()), "hsv" === e22 && (r22 = this.toHsvString()), "cmyk" === e22 && (r22 = this.toCmykString()), r22 || this.toHexString()) : "name" === e22 && 0 === this.a ? this.toName() : this.toRgbString();
  }
  toNumber() {
    return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
  }
  clone() {
    return new _ee(this.toString());
  }
  lighten(e22 = 10) {
    const t2 = this.toHsl();
    return t2.l += e22 / 100, t2.l = O2(t2.l), new _ee(t2);
  }
  brighten(e22 = 10) {
    const t2 = this.toRgb();
    return t2.r = Math.max(0, Math.min(255, t2.r - Math.round(-e22 / 100 * 255))), t2.g = Math.max(0, Math.min(255, t2.g - Math.round(-e22 / 100 * 255))), t2.b = Math.max(0, Math.min(255, t2.b - Math.round(-e22 / 100 * 255))), new _ee(t2);
  }
  darken(e22 = 10) {
    const t2 = this.toHsl();
    return t2.l -= e22 / 100, t2.l = O2(t2.l), new _ee(t2);
  }
  tint(e22 = 10) {
    return this.mix("white", e22);
  }
  shade(e22 = 10) {
    return this.mix("black", e22);
  }
  desaturate(e22 = 10) {
    const t2 = this.toHsl();
    return t2.s -= e22 / 100, t2.s = O2(t2.s), new _ee(t2);
  }
  saturate(e22 = 10) {
    const t2 = this.toHsl();
    return t2.s += e22 / 100, t2.s = O2(t2.s), new _ee(t2);
  }
  greyscale() {
    return this.desaturate(100);
  }
  spin(e22) {
    const t2 = this.toHsl(), r22 = (t2.h + e22) % 360;
    return t2.h = r22 < 0 ? 360 + r22 : r22, new _ee(t2);
  }
  mix(e22, t2 = 50) {
    const r22 = this.toRgb(), a22 = new _ee(e22).toRgb(), n22 = t2 / 100, o22 = { r: (a22.r - r22.r) * n22 + r22.r, g: (a22.g - r22.g) * n22 + r22.g, b: (a22.b - r22.b) * n22 + r22.b, a: (a22.a - r22.a) * n22 + r22.a };
    return new _ee(o22);
  }
  analogous(e22 = 6, t2 = 30) {
    const r22 = this.toHsl(), a22 = 360 / t2, n22 = [this];
    for (r22.h = (r22.h - (a22 * e22 >> 1) + 720) % 360; --e22; ) r22.h = (r22.h + a22) % 360, n22.push(new _ee(r22));
    return n22;
  }
  complement() {
    const e22 = this.toHsl();
    return e22.h = (e22.h + 180) % 360, new _ee(e22);
  }
  monochromatic(e22 = 6) {
    const t2 = this.toHsv(), { h: r22 } = t2, { s: a22 } = t2;
    let { v: n22 } = t2;
    const o22 = [], s2 = 1 / e22;
    for (; e22--; ) o22.push(new _ee({ h: r22, s: a22, v: n22 })), n22 = (n22 + s2) % 1;
    return o22;
  }
  splitcomplement() {
    const e22 = this.toHsl(), { h: t2 } = e22;
    return [this, new _ee({ h: (t2 + 72) % 360, s: e22.s, l: e22.l }), new _ee({ h: (t2 + 216) % 360, s: e22.s, l: e22.l })];
  }
  onBackground(e22) {
    const t2 = this.toRgb(), r22 = new _ee(e22).toRgb(), a22 = t2.a + r22.a * (1 - t2.a);
    return new _ee({ r: (t2.r * t2.a + r22.r * r22.a * (1 - t2.a)) / a22, g: (t2.g * t2.a + r22.g * r22.a * (1 - t2.a)) / a22, b: (t2.b * t2.a + r22.b * r22.a * (1 - t2.a)) / a22, a: a22 });
  }
  triad() {
    return this.polyad(3);
  }
  tetrad() {
    return this.polyad(4);
  }
  polyad(e22) {
    const t2 = this.toHsl(), { h: r22 } = t2, a22 = [this], n22 = 360 / e22;
    for (let o22 = 1; o22 < e22; o22++) a22.push(new _ee({ h: (r22 + o22 * n22) % 360, s: t2.s, l: t2.l }));
    return a22;
  }
  equals(e22) {
    const t2 = new _ee(e22);
    return "cmyk" === this.format || "cmyk" === t2.format ? this.toCmykString() === t2.toCmykString() : this.toRgbString() === t2.toRgbString();
  }
};
function te2(e22) {
  return `--px-${e22}`;
}
function re2(e22, t2) {
  const r22 = computed(() => (null == t2 ? void 0 : t2.value) || e22.color);
  return computed(() => {
    const t3 = {};
    if (!r22.value) return t3;
    let a22 = r22.value;
    const n22 = a22.match(/var\((--[^)]+)\)/);
    n22 && (a22 = getComputedStyle(document.documentElement).getPropertyValue(n22[1]).trim());
    const o22 = new ee2(a22), s2 = o22.clone().desaturate(12).darken(12).toHexString(), i22 = o22.isDark() ? "var(--px-color-white)" : "var(--px-color-base)";
    if (e22.plain) Object.assign(t3, { [te2("plain-bg-color")]: o22.tint(90).toString(), [te2("text-color")]: a22, [te2("plain-border-color")]: o22.tint(50).toString(), [te2("hover-bg-color")]: a22, [te2("hover-text-color")]: i22, [te2("plain-bg-shadow-color")]: s2 }), e22.disabled && (t3[te2("disabled-bg-color")] = o22.tint(90).toString(), t3[te2("disabled-text-color")] = o22.tint(50).toString());
    else {
      const e32 = o22.clone().desaturate(3).darken(3).toHexString();
      Object.assign(t3, { [te2("bg-color")]: a22, [te2("text-color")]: i22, [te2("hover-bg-color")]: e32, [te2("hover-text-color")]: i22, [te2("bg-shadow-color")]: s2 });
    }
    return e22.disabled && Object.assign(t3, { [te2("disabled-bg-color")]: o22.tint(50).toString(), [te2("disabled-text-color")]: "var(--px-color-white)" }), t3;
  });
}
function ae2(e22) {
  const t2 = computed(() => e22.color);
  return computed(() => {
    const e32 = {};
    if (!t2.value) return e32;
    let r22 = t2.value;
    const a22 = r22.match(/var\((--[^)]+)\)/);
    a22 && (r22 = getComputedStyle(document.documentElement).getPropertyValue(a22[1]).trim());
    const n22 = new ee2(r22), o22 = n22.clone().desaturate(12).darken(12).toHexString(), s2 = n22.isDark() ? "var(--px-color-white)" : "var(--px-color-base)";
    return Object.assign(e32, { [te2("badge-text-color")]: s2, [te2("custom-bg-color")]: r22, [te2("custom-bg-shadow-color")]: o22 }), e32;
  });
}

// node_modules/.pnpm/@mmt817+pixel-ui@1.6.0_vue@3.5.17_typescript@5.8.3_/node_modules/@mmt817/pixel-ui/dist/es/utils-L7-yrz1R.js
var r2 = (s2, t2) => {
  const o22 = s2.__vccOpts || s2;
  for (const [s3, n22] of t2) o22[s3] = n22;
  return o22;
};
var e2 = (s2) => (s2.install = (t2) => {
  const o22 = s2.name;
  t2.component(o22, s2);
}, s2);
var a2 = (s2, t2) => (s2.install = (o22) => {
  o22.config.globalProperties[t2] = s2;
}, s2);
function i2(s2) {
  const t2 = parseInt(s2.slice(1, 3), 16) / 255, o22 = parseInt(s2.slice(3, 5), 16) / 255, n22 = parseInt(s2.slice(5, 7), 16) / 255, r22 = Math.max(t2, o22, n22), e22 = Math.min(t2, o22, n22);
  let a22, i22 = 0;
  const l22 = (r22 + e22) / 2;
  if (r22 !== e22) {
    const s3 = r22 - e22;
    switch (a22 = l22 > 0.5 ? s3 / (2 - r22 - e22) : s3 / (r22 + e22), r22) {
      case t2:
        i22 = (o22 - n22) / s3 + (o22 < n22 ? 6 : 0);
        break;
      case o22:
        i22 = (n22 - t2) / s3 + 2;
        break;
      case n22:
        i22 = (t2 - o22) / s3 + 4;
    }
    i22 = Math.round(60 * i22);
  } else a22 = 0;
  return { h: i22, s: Math.round(100 * a22), l: Math.round(100 * l22) };
}
function l2(s2, t2) {
  const o22 = i2(s2);
  return o22.l = Math.max(0, Math.min(100, o22.l + (t2.lightness ?? 0))), o22.s = Math.max(0, Math.min(100, o22.s + (t2.saturation ?? 0))), function(s3) {
    const { h: t3, s: o32, l: n22 } = s3, r22 = o32 / 100, e22 = n22 / 100, a22 = (1 - Math.abs(2 * e22 - 1)) * r22, i22 = a22 * (1 - Math.abs(t3 / 60 % 2 - 1)), l22 = e22 - a22 / 2;
    let c22 = 0, u22 = 0, h22 = 0;
    return t3 < 60 ? (c22 = a22, u22 = i22) : t3 < 120 ? (c22 = i22, u22 = a22) : t3 < 180 ? (u22 = a22, h22 = i22) : t3 < 240 ? (u22 = i22, h22 = a22) : t3 < 300 ? (c22 = i22, h22 = a22) : (c22 = a22, h22 = i22), `#${[c22, u22, h22].map((s4) => Math.round(255 * (s4 + l22)).toString(16).padStart(2, "0")).join("")}`;
  }(o22);
}
var c2 = (s2) => {
  const t2 = i2(s2).l < 50;
  return { bgColor: s2, lightColor: l2(s2, { lightness: t2 ? 60 : 40, saturation: -50 }), lightColor2: l2(s2, { lightness: t2 ? 30 : 20, saturation: -30 }), bgShadowColor: l2(s2, { lightness: -20, saturation: t2 ? 20 : 10 }), textColor: s2, fillHoverColor: l2(s2, { lightness: -10 }), borderColor: l2(s2, { lightness: -10 }) };
};
var u2 = class extends Error {
  constructor(t2) {
    super(Cn(t2) ? t2 : t2.message), this.name = "PxUIError";
  }
};
function h3(t2, o22) {
  if (true) {
    const n22 = Cn(t2) ? ((s2, t3) => new u2(`[${s2}]: ${t3}`))(t2, o22) : t2;
    console.warn(n22);
  }
}
var d2 = (o22, n22 = "px") => o22 ? In(o22) || ((t2) => !!Cn(t2) && !Number.isNaN(Number(t2)))(o22) ? `${o22}${n22}` : Cn(o22) ? o22 : void h3("utils/style", "binding value must be a string or number") : "";
var m2 = defineComponent({ props: { vNode: { type: [String, Object, Function], required: true } }, setup: (s2) => () => P(s2.vNode) ? s2.vNode() : s2.vNode });
var g2 = /* @__PURE__ */ new Map([["info", "info-circle-solid"], ["success", "check-circle-solid"], ["warning", "exclamation-triangle-solid"], ["danger", "times-circle-solid"], ["error", "times-circle-solid"]]);

// node_modules/.pnpm/@mmt817+pixel-ui@1.6.0_vue@3.5.17_typescript@5.8.3_/node_modules/@mmt817/pixel-ui/dist/es/Icon-C_EOJ_Sp.js
var c3 = r2(defineComponent({ name: "PxIcon", __name: "Icon", props: { icon: {}, size: { default: 14 }, type: {}, color: {}, flip: {}, rotation: {}, spin: { type: Boolean }, bounce: { type: Boolean }, shake: { type: Boolean }, beat: { type: Boolean } }, setup(o22) {
  const t2 = o22, p2 = computed(() => ({ "--px-icon-color": t2.color ?? void 0, fontSize: `${t2.size}px`, rotate: t2.rotation ? `${t2.rotation}deg` : void 0 }));
  return (o32, e22) => (openBlock(), createElementBlock("i", { class: normalizeClass(["px-icon hn", { [`px-icon--${o32.type}`]: o32.type, [`hn-${o32.icon}`]: o32.icon, [`px-icon--${o32.flip}`]: o32.flip, "is-spin": o32.spin, "is-bounce": o32.bounce, "is-shake": o32.shake, "is-beat": o32.beat }]), style: normalizeStyle(p2.value) }, null, 6));
} }), [["__scopeId", "data-v-55b6e6cd"]]);
var r3 = ["primary", "success", "warning", "danger", "base", "sakura"];
var l3 = e2(c3);

// node_modules/.pnpm/@mmt817+pixel-ui@1.6.0_vue@3.5.17_typescript@5.8.3_/node_modules/@mmt817/pixel-ui/dist/es/Button-BRSpj0F6.js
var $3 = Symbol("BUTTON_GROUP_CTX_KEY");
var I3 = { key: 2 };
var P3 = r2(defineComponent({ name: "PxButton", __name: "Button", props: { size: {}, type: {}, plain: { type: Boolean }, round: { type: Boolean }, circle: { type: Boolean }, chubby: { type: Boolean }, loading: { type: Boolean }, loadingIcon: { default: "spinner" }, disabled: { type: Boolean }, icon: {}, autofocus: { type: Boolean }, nativeType: { default: "button" }, label: {}, tag: { default: "button" }, useThrottle: { type: Boolean, default: true }, throttleDuration: { default: 500 }, color: {} }, emits: ["click"], setup(e22, { expose: g22, emit: B22 }) {
  const _22 = e22, z22 = inject($3, void 0), T22 = computed(() => (z22 == null ? void 0 : z22.size) ?? (_22 == null ? void 0 : _22.size) ?? ""), P22 = computed(() => (z22 == null ? void 0 : z22.type) ?? (_22 == null ? void 0 : _22.type) ?? ""), j22 = computed(() => (z22 == null ? void 0 : z22.disabled) || (_22 == null ? void 0 : _22.disabled) || false), G22 = computed(() => (z22 == null ? void 0 : z22.round) || (_22 == null ? void 0 : _22.round) || false), w22 = computed(() => (z22 == null ? void 0 : z22.circle) || (_22 == null ? void 0 : _22.circle) || false), C22 = computed(() => (z22 == null ? void 0 : z22.color) || (_22 == null ? void 0 : _22.color) || void 0), D22 = useSlots(), O22 = ref(), R6 = B22, U5 = computed(() => ({ marginRight: _22.label || D22.default ? "6px" : "0px" })), E5 = re2(_22, C22), K5 = (e32) => R6("click", e32), N5 = zn(K5, _22.throttleDuration, { trailing: false });
  return g22({ ref: O22, disabled: j22, size: T22, type: P22 }), (e32, o22) => (openBlock(), createBlock(resolveDynamicComponent(e32.tag), { ref_key: "_ref", ref: O22, class: normalizeClass(["px-button", { [`px-button--${P22.value}`]: P22.value, [`px-button--${T22.value}`]: T22.value, "is-plain": e32.plain, "is-round": G22.value, "is-circle": w22.value, "is-chubby": e32.chubby, "is-disabled": j22.value, "is-loading": e32.loading, "is-custom": C22.value }]), autofocus: e32.autofocus, type: "button" === e32.tag ? e32.nativeType : void 0, disabled: !(!j22.value && !e32.loading) || void 0, style: normalizeStyle(unref(E5)), onClick: o22[0] || (o22[0] = (o32) => e32.useThrottle ? unref(N5)(o32) : K5(o32)) }, { default: withCtx(() => [e32.loading ? renderSlot(e32.$slots, "loading", { key: 0 }, () => [createVNode(c3, { class: "loading-icon", spin: "", icon: e32.loadingIcon, style: normalizeStyle(U5.value) }, null, 8, ["icon", "style"])], true) : createCommentVNode("", true), e32.icon && !e32.loading ? (openBlock(), createBlock(c3, { key: 1, icon: e32.icon, style: normalizeStyle(U5.value) }, null, 8, ["icon", "style"])) : createCommentVNode("", true), e32.label || e32.$slots.default ? (openBlock(), createElementBlock("span", I3, [renderSlot(e32.$slots, "default", {}, () => [createTextVNode(toDisplayString(e32.label), 1)], true)])) : createCommentVNode("", true)]), _: 3 }, 8, ["autofocus", "type", "disabled", "class", "style"]));
} }), [["__scopeId", "data-v-fc039d94"]]);
var j3 = r2(defineComponent({ name: "PxButtonGroup", __name: "ButtonGroup", props: { size: {}, type: { default: "base" }, disabled: { type: Boolean }, round: { type: Boolean }, circle: { type: Boolean }, color: {} }, setup(e22) {
  const o22 = e22;
  return provide($3, reactive({ size: toRef(o22, "size"), type: toRef(o22, "type"), disabled: toRef(o22, "disabled"), round: toRef(o22, "round"), circle: toRef(o22, "circle"), color: toRef(o22, "color") })), (e32, o32) => (openBlock(), createElementBlock("div", { class: normalizeClass(["px-button-group", { [`px-button-group--${e32.type}`]: e32.type }]) }, [renderSlot(e32.$slots, "default", {}, void 0, true)], 2));
} }), [["__scopeId", "data-v-8556e744"]]);
var G3 = ["primary", "success", "warning", "danger", "base", "sakura"];
var w2 = ["button", "submit", "reset"];
var C3 = ["large", "default", "small"];
var D3 = e2(P3);
var O3 = e2(j3);

// node_modules/.pnpm/@mmt817+pixel-ui@1.6.0_vue@3.5.17_typescript@5.8.3_/node_modules/@mmt817/pixel-ui/dist/es/Card-1NhASDqc.js
var c4 = { key: 0, class: "px-card__icon" };
var i3 = { class: "px-card__content" };
var n2 = { key: 0, class: "px-card__header" };
var v2 = { key: 1, class: "px-card__body" };
var _3 = { key: 2, class: "px-card__footer" };
var x2 = { key: 1, class: "px-card__append" };
var y3 = e2(r2(defineComponent({ name: "PxCard", __name: "Card", props: { hoverable: { type: Boolean }, round: { type: Boolean }, circle: { type: Boolean }, stamp: { type: Boolean } }, setup: (s2) => (s3, t2) => (openBlock(), createElementBlock("div", { class: normalizeClass(["px-card", { "px-card--hover": s3.hoverable, "is-round": s3.round, "is-circle": s3.circle, "is-stamp": s3.stamp }]) }, [s3.$slots.prepend ? (openBlock(), createElementBlock("div", c4, [renderSlot(s3.$slots, "prepend", {}, void 0, true)])) : createCommentVNode("", true), createBaseVNode("div", i3, [s3.$slots.header ? (openBlock(), createElementBlock("div", n2, [renderSlot(s3.$slots, "header", {}, void 0, true)])) : createCommentVNode("", true), s3.$slots.default ? (openBlock(), createElementBlock("div", v2, [renderSlot(s3.$slots, "default", {}, void 0, true)])) : createCommentVNode("", true), s3.$slots.footer ? (openBlock(), createElementBlock("div", _3, [renderSlot(s3.$slots, "footer", {}, void 0, true)])) : createCommentVNode("", true)]), s3.$slots.append ? (openBlock(), createElementBlock("div", x2, [renderSlot(s3.$slots, "append", {}, void 0, true)])) : createCommentVNode("", true)], 2)) }), [["__scopeId", "data-v-f14958e3"]]));

// node_modules/.pnpm/@mmt817+pixel-ui@1.6.0_vue@3.5.17_typescript@5.8.3_/node_modules/@mmt817/pixel-ui/dist/es/Text-BPv-DsA9.js
var d3 = ["primary", "success", "warning", "danger", "base", "sakura"];
var u3 = ["left", "center", "right"];
var f2 = e2(r2(defineComponent({ name: "PxText", __name: "Text", props: { size: { default: 14 }, type: {}, color: {}, bold: { type: Boolean, default: false }, align: {}, tag: { default: "span" }, compact: { type: Boolean, default: false } }, setup(t2) {
  const r22 = t2, n22 = computed(() => ({ color: r22.color ?? void 0, fontSize: `${r22.size}px`, fontWeight: r22.bold ? "bold" : void 0, textAlign: r22.align ?? void 0 }));
  return (t3, e22) => (openBlock(), createBlock(resolveDynamicComponent(t3.tag), { class: normalizeClass(["px-text", { [`px-text--${t3.type}`]: t3.type, "is-compact": t3.compact }]), style: normalizeStyle(n22.value) }, { default: withCtx(() => [renderSlot(t3.$slots, "default", {}, void 0, true)]), _: 3 }, 8, ["class", "style"]));
} }), [["__scopeId", "data-v-8f3c6b54"]]));

// node_modules/.pnpm/@mmt817+pixel-ui@1.6.0_vue@3.5.17_typescript@5.8.3_/node_modules/@mmt817/pixel-ui/dist/es/Collapse-CYD6y1su.js
var V3 = Symbol("COLLAPSE_CTX_KEY");
var w3 = { class: "px-collapse" };
var E3 = "PxCollapse";
var L3 = r2(defineComponent({ name: E3, __name: "Collapse", props: { modelValue: {}, accordion: { type: Boolean } }, emits: ["update:modelValue", "change"], setup(e22, { emit: n22 }) {
  const c22 = e22, p2 = n22, r22 = ref(c22.modelValue);
  watchEffect(() => {
    c22.accordion && r22.value.length > 1 && h3(E3, "accordion mode only support one active item");
  });
  const m22 = (e32) => {
    r22.value = e32, p2("update:modelValue", e32), p2("change", e32);
  };
  return watch(() => c22.modelValue, (e32) => m22(e32)), provide(V3, { activeNames: r22, handleItemClick: (e32) => {
    let a22 = [...r22.value];
    if (c22.accordion) return a22 = [a22[0] === e32 ? "" : e32], void m22(a22);
    const l22 = a22.indexOf(e32);
    l22 > -1 ? a22.splice(l22, 1) : a22.push(e32), m22(a22);
  } }), (e32, a22) => (openBlock(), createElementBlock("div", w3, [renderSlot(e32.$slots, "default", {}, void 0, true)]));
} }), [["__scopeId", "data-v-2e9a6939"]]);
var k3 = (e22) => e22.style.height = "0px";
var j4 = (e22) => e22.style.height = `${e22.scrollHeight}px`;
var B3 = (e22) => e22.style.height = "";
var N3 = (e22) => e22.style.overflow = "hidden";
var O4 = (e22) => e22.style.overflow = "";
var S3 = { beforeEnter(e22) {
  k3(e22), N3(e22);
}, enter: (e22) => j4(e22), afterEnter(e22) {
  B3(e22), O4(e22);
}, beforeLeave(e22) {
  j4(e22), N3(e22);
}, leave: (e22) => k3(e22), afterLeave(e22) {
  B3(e22), O4(e22);
} };
var z3 = ["id"];
var A3 = { class: "px-collapse-item__title" };
var H3 = { class: "px-collapse-item__wrapper" };
var K3 = ["id"];
var T3 = r2(defineComponent({ name: "PxCollapseItem", __name: "CollapseItem", props: { name: {}, title: {}, icon: {}, disabled: { type: Boolean } }, setup(e22) {
  const a22 = e22, l22 = inject(V3, void 0), o22 = computed(() => {
    var _a;
    return (_a = l22 == null ? void 0 : l22.activeNames.value) == null ? void 0 : _a.includes(a22.name);
  }), s2 = () => {
    a22.disabled || (l22 == null ? void 0 : l22.handleItemClick(a22.name));
  };
  return (e32, a32) => (openBlock(), createElementBlock("div", { class: normalizeClass(["px-collapse-item", { "is-disabled": e32.disabled }]) }, [createBaseVNode("div", { class: normalizeClass(["px-collapse-item__header", { "is-disabled": e32.disabled, "is-active": o22.value }]), id: `item-header-${e32.name}`, onClick: s2 }, [createBaseVNode("span", A3, [renderSlot(e32.$slots, "title", {}, () => [createTextVNode(toDisplayString(e32.title), 1)], true)]), createVNode(c3, { icon: e32.icon || "angle-right", class: "header-angle", size: "20", color: e32.disabled ? "var(--px-color-info)" : "var(--px-color-base)" }, null, 8, ["icon", "color"])], 10, z3), createVNode(Transition, mergeProps({ name: "slide" }, toHandlers(unref(S3))), { default: withCtx(() => [withDirectives(createBaseVNode("div", H3, [createBaseVNode("div", { class: "px-collapse-item__content", id: `item-content-${e32.name}` }, [renderSlot(e32.$slots, "default", {}, void 0, true)], 8, K3)], 512), [[vShow, o22.value]])]), _: 3 }, 16)], 2));
} }), [["__scopeId", "data-v-ba98dbaa"]]);
var X3 = e2(L3);
var Y3 = e2(T3);

// node_modules/.pnpm/@mmt817+pixel-ui@1.6.0_vue@3.5.17_typescript@5.8.3_/node_modules/@mmt817/pixel-ui/dist/es/Alert-DWOHtosT.js
var $4 = { class: "px-alert__content" };
var b2 = { class: "px-alert__description" };
var k4 = { key: 0, class: "px-alert__close" };
var P4 = ["info", "success", "warning", "danger", "sakura"];
var j5 = e2(r2(defineComponent({ name: "PxAlert", __name: "Alert", props: { title: {}, type: { default: "info" }, description: {}, effect: { default: "light" }, closable: { type: Boolean, default: true }, center: { type: Boolean }, showIcon: { type: Boolean }, iron: { type: Boolean } }, emits: ["close"], setup(e22, { expose: h22, emit: I22 }) {
  const P22 = e22, j22 = I22, A7 = useSlots(), C7 = ref(true), q5 = computed(() => g2.get(P22.type) ?? "info-circle-solid"), z5 = computed(() => P22.description || A7.default), D5 = () => {
    C7.value = false, j22("close");
  };
  return h22({ open: () => {
    C7.value = true;
  }, close: D5 }), (e32, t2) => (openBlock(), createBlock(Transition, { name: "px-alert-fade" }, { default: withCtx(() => [withDirectives(createBaseVNode("div", { class: normalizeClass(["px-alert", { [`px-alert--${e32.type}`]: e32.type, [`px-alert--${e32.effect}`]: e32.effect, "text-center": e32.center, "is-iron": e32.iron }]), role: "alert" }, [withDirectives(createVNode(c3, { class: normalizeClass(["px-alert__icon", { "big-icon": z5.value }]), icon: q5.value }, null, 8, ["icon", "class"]), [[vShow, e32.showIcon]]), createBaseVNode("div", $4, [createBaseVNode("span", { class: normalizeClass(["px-alert__title", { "with-desc": z5.value }]), style: normalizeStyle({ display: e32.center && !e32.showIcon ? "flow" : "inline" }) }, [renderSlot(e32.$slots, "title", {}, () => [createTextVNode(toDisplayString(e32.title), 1)], true)], 6), createBaseVNode("p", b2, [renderSlot(e32.$slots, "default", {}, () => [createTextVNode(toDisplayString(e32.description), 1)], true)]), e32.closable ? (openBlock(), createElementBlock("div", k4, [createVNode(c3, { class: "px-alert__close-icon", icon: "times-solid", onClick: withModifiers(D5, ["stop"]) })])) : createCommentVNode("", true)])], 2), [[vShow, C7.value]])]), _: 3 }));
} }), [["__scopeId", "data-v-8c179052"]]));

// node_modules/.pnpm/@mmt817+pixel-ui@1.6.0_vue@3.5.17_typescript@5.8.3_/node_modules/@mmt817/pixel-ui/dist/es/AnimationFrame-DeBGW4x-.js
var u4 = { class: "px-animation-frame" };
var g3 = ["loop", "once"];
var v3 = e2(r2(defineComponent({ name: "PxAnimationFrame", __name: "AnimationFrame", props: { src: {}, stages: { default: () => [{ type: "loop", start: 0, end: 0 }] }, loop: { type: Boolean, default: false }, width: {}, height: {}, draggable: { type: Boolean, default: true }, overflow: { type: Boolean } }, setup(e22) {
  const m22 = e22, c22 = ref();
  D2(c22, c22, computed(() => m22.draggable), computed(() => m22.overflow));
  let g22 = null, v22 = null, f4 = 0, h5 = 0, y6 = false;
  const w4 = () => {
    null !== v22 && (clearInterval(v22), v22 = null);
  }, _6 = (e32, o22) => {
    w4(), h5 = e32, v22 = window.setInterval(() => {
      g22 == null ? void 0 : g22.moveTo(h5), h5++, h5 > o22 && (h5 = e32);
    }, 100);
  }, x5 = () => {
    const e32 = m22.stages[f4];
    var o22, t2, a22;
    e32 && ("loop" === e32.type ? (_6(e32.start, e32.end), y6 = false) : "once" === e32.type && (y6 = true, o22 = e32.start, t2 = e32.end, a22 = () => {
      y6 = false, f4++, f4 %= m22.stages.length, x5();
    }, w4(), h5 = o22, v22 = window.setInterval(() => {
      g22 == null ? void 0 : g22.moveTo(h5), h5++, h5 > t2 && (w4(), a22 == null ? void 0 : a22());
    }, 100)));
  }, I7 = () => {
    y6 || m22.loop || (f4++, f4 %= m22.stages.length, x5());
  };
  return onMounted(async () => {
    await nextTick();
    const e32 = document.createElement("img");
    e32.src = m22.src, e32.style.display = "none", document.body.appendChild(e32), e32.onload = () => {
      g22 = new Kn(e32, { autoPlay: false }, c22.value), g22.load(() => {
        m22.loop ? _6(0, g22.getLength() - 1) : x5();
      });
    };
  }), (e32, o22) => (openBlock(), createElementBlock("div", u4, [createBaseVNode("canvas", { class: "super-gif", ref_key: "canvasRef", ref: c22, onClick: I7, style: normalizeStyle({ width: `${m22.width}px`, height: `${m22.height}px` }) }, null, 4)]));
} }), [["__scopeId", "data-v-073d6d04"]]));

// node_modules/.pnpm/@mmt817+pixel-ui@1.6.0_vue@3.5.17_typescript@5.8.3_/node_modules/@mmt817/pixel-ui/dist/es/Badge-BUsneyzX.js
var g4 = { class: "px-badge" };
var y4 = ["primary", "success", "warning", "danger", "info", "sakura"];
var $5 = e2(r2(defineComponent({ name: "PxBadge", __name: "Badge", props: { value: {}, max: { default: 99 }, isDot: { type: Boolean, default: false }, hidden: { type: Boolean, default: false }, type: { default: "danger" }, showZero: { type: Boolean, default: true }, color: {}, offset: {} }, setup(e22) {
  const c22 = e22, x22 = computed(() => c22.isDot || In(c22.value) && 0 === c22.value && !c22.showZero ? "" : In(c22.value) && In(c22.max) && c22.value > c22.max ? `${c22.max}+` : `${c22.value}`), y22 = ae2(c22), $22 = computed(() => {
    if (!c22.offset) return {};
    const [e32, a22] = c22.offset;
    return { marginRight: -e32 + "px", marginTop: `${a22}px` };
  });
  return (e32, a22) => (openBlock(), createElementBlock("div", g4, [renderSlot(e32.$slots, "default", {}, void 0, true), withDirectives(createBaseVNode("sup", { class: normalizeClass(["px-badge__content", { [`px-badge--${e32.type}`]: e32.type, "is-dot": e32.isDot, "is-fixed": !!e32.$slots.default, "is-custom": e32.color }]), style: normalizeStyle({ ...unref(y22), ...$22.value }) }, [renderSlot(e32.$slots, "content", { value: x22.value }, () => [createTextVNode(toDisplayString(x22.value), 1)], true)], 6), [[vShow, !e32.hidden && (x22.value || e32.isDot || e32.$slots.content)]])]));
} }), [["__scopeId", "data-v-fdad5a0b"]]));

// node_modules/.pnpm/@mmt817+pixel-ui@1.6.0_vue@3.5.17_typescript@5.8.3_/node_modules/@mmt817/pixel-ui/dist/es/Progress-C1jkLFEk.js
var b3 = ["width", "height", "viewBox"];
var k5 = ["x", "y", "width", "height"];
var m3 = ["x", "y", "width", "height", "fill"];
var _4 = ["x", "y", "width", "height"];
var $6 = { key: 0, class: "px-progress-circle__text" };
var P5 = r2(defineComponent({ __name: "ProgressRing", props: { width: {}, percentage: {}, status: {}, strokeWidth: {}, showText: { type: Boolean }, color: {}, content: {}, pixelSize: { default: 3 } }, setup(e22) {
  const c22 = e22, d22 = computed(() => c22.width), h22 = computed(() => c22.pixelSize), g22 = computed(() => d22.value / 2), x22 = computed(() => d22.value / 2), v22 = computed(() => Math.floor(d22.value / 2 * 0.9)), f22 = computed(() => v22.value - c22.strokeWidth), w22 = { primary: "var(--px-color-primary, #209cee)", success: "var(--px-color-success, #92cc41)", warning: "var(--px-color-warning, #f7d51d)", danger: "var(--px-color-danger, #e76e55)", sakura: "var(--px-color-sakura, #f06595)" }, y22 = computed(() => c22.color ?? w22[c22.status]), P22 = computed(() => {
    const e32 = { borderPoints: [], backgroundPoints: [], progressPoints: [] }, r22 = c22.percentage / 100 * Math.PI * 2, t2 = h22.value, a22 = Math.max(1, Math.floor(0.8 * t2));
    for (let s2 = 0; s2 < d22.value; s2 += t2) for (let o22 = 0; o22 < d22.value; o22 += t2) {
      const l22 = s2 + t2 / 2, i22 = o22 + t2 / 2, n22 = Math.sqrt(Math.pow(l22 - g22.value, 2) + Math.pow(i22 - x22.value, 2)), p2 = Math.abs(n22 - f22.value), u22 = Math.abs(n22 - v22.value), c32 = p2 <= a22 && n22 <= f22.value + a22, d32 = u22 <= a22 && n22 >= v22.value - a22;
      if (c32 || d32) e32.borderPoints.push({ x: s2, y: o22 });
      else if (n22 > f22.value + a22 && n22 < v22.value - a22) {
        let t3 = Math.atan2(i22 - x22.value, l22 - g22.value) + Math.PI / 2;
        t3 < 0 && (t3 += 2 * Math.PI), t3 <= r22 ? e32.progressPoints.push({ x: s2, y: o22 }) : e32.backgroundPoints.push({ x: s2, y: o22 });
      }
    }
    return e32;
  });
  return (e32, r22) => (openBlock(), createElementBlock("div", { class: "px-progress-circle", style: normalizeStyle({ width: `${e32.width}px`, height: `${e32.width}px` }) }, [(openBlock(), createElementBlock("svg", { width: e32.width, height: e32.width, viewBox: `0 0 ${e32.width} ${e32.width}` }, [createBaseVNode("g", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(P22.value.backgroundPoints, (e4, r32) => (openBlock(), createElementBlock("rect", { key: `bg-${r32}`, x: e4.x, y: e4.y, width: h22.value, height: h22.value, fill: "#eceef5" }, null, 8, k5))), 128))]), createBaseVNode("g", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(P22.value.progressPoints, (e4, r32) => (openBlock(), createElementBlock("rect", { key: `progress-${r32}`, x: e4.x, y: e4.y, width: h22.value, height: h22.value, fill: y22.value }, null, 8, m3))), 128))]), createBaseVNode("g", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(P22.value.borderPoints, (e4, r32) => (openBlock(), createElementBlock("rect", { key: `border-${r32}`, x: e4.x, y: e4.y, width: h22.value, height: h22.value, fill: "#000000" }, null, 8, _4))), 128))])], 8, b3)), e32.showText ? (openBlock(), createElementBlock("div", $6, [renderSlot(e32.$slots, "default", {}, () => [createBaseVNode("span", null, toDisplayString(e32.content), 1)], true)])) : createCommentVNode("", true)], 4));
} }), [["__scopeId", "data-v-8a003463"]]);
var M3 = ["aria-valuenow"];
var B4 = { class: "px-progress-bar" };
var I4 = { class: "px-progress-bar-gap" };
var T4 = { key: 0, class: "px-progress-bar__inner-text" };
var W3 = { key: 0, class: "px-progress__text" };
var C4 = ["primary", "success", "warning", "danger", "sakura"];
var F3 = e2(r2(defineComponent({ name: "PxProgress", __name: "Progress", props: { type: { default: "line" }, percentage: { default: 0 }, status: { default: "primary" }, strokeWidth: { default: 16 }, textInside: { type: Boolean, default: false }, indeterminate: { type: Boolean, default: false }, duration: { default: 4 }, color: {}, showText: { type: Boolean, default: true }, striped: { type: Boolean, default: false }, stripedFlow: { type: Boolean, default: false }, checker: { type: Boolean, default: false }, blockSize: { default: 4 }, format: {}, width: { default: 126 } }, setup(e22) {
  const n22 = e22, f22 = computed(() => n22.format ? n22.format(n22.percentage) : `${n22.percentage}%`), y22 = computed(() => Math.max(n22.strokeWidth, 16)), b22 = { primary: "var(--px-color-primary, #209cee)", success: "var(--px-color-success, #92cc41)", warning: "var(--px-color-warning, #f7d51d)", danger: "var(--px-color-danger, #e76e55)", sakura: "var(--px-color-sakura, #f06595)" }, k22 = computed(() => {
    const e32 = Math.max(y22.value / 6, 4);
    return { "--px-progress-bar-height": `${y22.value}px`, "--px-progress-bar-gap": `${e32}px` };
  }), m22 = computed(() => {
    const e32 = { width: `${n22.percentage}%`, "--px-progress-bar-duration": `${n22.duration}s`, "--px-stripe-size": `${n22.blockSize}`, transition: "width .4s ease" };
    if (n22.color) {
      const r22 = _22(n22.color);
      e32["--px-progress-bar-bg-color"] = r22.bgColor, e32["--px-progress-bar-bg-shadow-color"] = r22.fillHoverColor;
    } else e32["--px-progress-bar-bg-color"] = b22[n22.status];
    return (n22.striped || n22.stripedFlow) && (e32["--px-progress-bar-striped"] = "1"), e32;
  }), _22 = (e32) => {
    const r22 = c2(e32);
    return { bgColor: r22.bgColor, fillHoverColor: r22.fillHoverColor };
  }, $22 = ref();
  let C22 = 0, F22 = 0;
  const z5 = () => {
    var _a;
    const e32 = n22.duration;
    C22 = (C22 - 16 / e32 / 8 + 16) % 16, (_a = $22.value) == null ? void 0 : _a.style.setProperty("--px-stripe-offset", `${C22}px`), F22 = requestAnimationFrame(z5);
  };
  return onMounted(async () => {
    n22.stripedFlow && z5();
  }), onBeforeUnmount(() => {
    cancelAnimationFrame(F22);
  }), (e32, r22) => (openBlock(), createElementBlock("div", { class: normalizeClass(["px-progress", { "is-circle": "circle" === e32.type }]), role: "progressbar", "aria-valuenow": e32.percentage, "aria-valuemin": "0", "aria-valuemax": "100" }, ["line" === e32.type ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createBaseVNode("div", B4, [createBaseVNode("div", { class: "px-progress-bar__outer", style: normalizeStyle(k22.value) }, [createBaseVNode("div", I4, [createBaseVNode("div", { class: normalizeClass(["px-progress-bar__inner", { "is-striped": e32.striped, "is-striped-flow": e32.stripedFlow, "is-indeterminate": e32.indeterminate, "is-checker": e32.checker, [`is-${e32.status}`]: e32.status }]), style: normalizeStyle(m22.value), ref_key: "progressBarInnerRef", ref: $22 }, [e32.showText && e32.textInside ? (openBlock(), createElementBlock("div", T4, [renderSlot(e32.$slots, "default", { percentage: e32.percentage }, () => [createBaseVNode("span", null, toDisplayString(f22.value), 1)], true)])) : createCommentVNode("", true)], 6)])], 4)]), e32.showText && !e32.textInside ? (openBlock(), createElementBlock("div", W3, [renderSlot(e32.$slots, "default", { percentage: e32.percentage }, () => [createBaseVNode("span", null, toDisplayString(f22.value), 1)], true)])) : createCommentVNode("", true)], 64)) : "circle" === e32.type ? (openBlock(), createBlock(P5, { key: 1, width: n22.width, percentage: e32.percentage, status: e32.status, strokeWidth: n22.strokeWidth, showText: e32.showText, color: e32.color, content: f22.value }, { default: withCtx(() => [renderSlot(e32.$slots, "default", { percentage: e32.percentage }, void 0, true)]), _: 3 }, 8, ["width", "percentage", "status", "strokeWidth", "showText", "color", "content"])) : createCommentVNode("", true)], 10, M3));
} }), [["__scopeId", "data-v-16e2b80f"]]));

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/enums.js
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/applyStyles.js
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles_default = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect,
  requires: ["computeStyles"]
};

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getBasePlacement.js
function getBasePlacement(placement) {
  return placement.split("-")[0];
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/math.js
var max = Math.max;
var min = Math.min;
var round = Math.round;

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/userAgent.js
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
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
  var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x5 = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y6 = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y6,
    right: x5 + width,
    bottom: y6 + height,
    left: x5,
    x: x5,
    y: y6
  };
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
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
    width,
    height
  };
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/contains.js
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || window.document).documentElement;
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle2(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle2(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle2(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle2(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle2(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/within.js
function within(min2, value, max2) {
  return max(min2, min(value, max2));
}
function withinMaxClamp(min2, value, max2) {
  var v5 = within(min2, value, max2);
  return v5 > max2 ? max2 : v5;
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/arrow.js
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect2(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow_default = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect2,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation(placement) {
  return placement.split("-")[1];
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref, win) {
  var x5 = _ref.x, y6 = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x5 * dpr) / dpr || 0,
    y: round(y6 * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x5 = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y6 = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x: x5,
    y: y6
  }) : {
    x: x5,
    y: y6
  };
  x5 = _ref3.x;
  y6 = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle2(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y6 -= offsetY - popperRect.height;
      y6 *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x5 -= offsetX - popperRect.width;
      x5 *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x5,
    y: y6
  }, getWindow(popper2)) : {
    x: x5,
    y: y6
  };
  x5 = _ref4.x;
  y6 = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x5 + "px, " + y6 + "px)" : "translate3d(" + x5 + "px, " + y6 + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y6 + "px" : "", _Object$assign2[sideX] = hasX ? x5 + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles_default = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/eventListeners.js
var passive = {
  passive: true
};
function effect3(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners_default = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn2() {
  },
  effect: effect3,
  data: {}
};

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash[matched];
  });
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var hash2 = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash2[matched];
  });
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x5 = 0;
  var y6 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x5 = visualViewport.offsetLeft;
      y6 = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x5 + getWindowScrollBarX(element),
    y: y6
  };
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x5 = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y6 = -winScroll.scrollTop;
  if (getComputedStyle2(body || html).direction === "rtl") {
    x5 += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x: x5,
    y: y6
  };
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle2(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
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
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)))
  );
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
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
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle2(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/computeOffsets.js
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
      default:
    }
  }
  return offsets;
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/detectOverflow.js
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements2 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements2.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements2;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a4, b7) {
    return overflows[a4] - overflows[b7];
  });
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/flip.js
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i4 = 0; i4 < placements2.length; i4++) {
    var placement = placements2[i4];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
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
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
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
}
var flip_default = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/hide.js
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
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide_default = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/offset.js
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
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
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x5 = _data$state$placement.x, y6 = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x5;
    state.modifiersData.popperOffsets.y += y6;
  }
  state.modifiersData[name] = data;
}
var offset_default = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets_default = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
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
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min2 = offset2 + overflow[mainSide];
    var max2 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min2, tetherMin) : min2, offset2, tether ? max(max2, tetherMax) : max2);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
var preventOverflow_default = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
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
    if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
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

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/orderModifiers.js
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/debounce.js
function debounce(fn3) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn3());
        });
      });
    }
    return pending;
  };
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/mergeByName.js
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/createPopper.js
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers3 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper4(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers3, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m7) {
          return m7.enabled;
        });
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
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn3 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn3 === "function") {
            state = fn3({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref) {
        var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect4 = _ref.effect;
        if (typeof effect4 === "function") {
          var cleanupFn = effect4({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn3) {
        return fn3();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var createPopper = popperGenerator();

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/popper-lite.js
var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default];
var createPopper2 = popperGenerator({
  defaultModifiers
});

// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/popper.js
var defaultModifiers2 = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default];
var createPopper3 = popperGenerator({
  defaultModifiers: defaultModifiers2
});

// node_modules/.pnpm/@mmt817+pixel-ui@1.6.0_vue@3.5.17_typescript@5.8.3_/node_modules/@mmt817/pixel-ui/dist/es/Tooltip-lzfHQ3WA.js
var B5 = r2(defineComponent({ name: "PxTooltip", __name: "Tooltip", props: { virtualRef: {}, virtualTriggering: { type: Boolean }, content: {}, trigger: { default: "hover" }, placement: { default: "bottom" }, manual: { type: Boolean }, disabled: { type: Boolean }, popperOptions: {}, effect: { default: "light" }, transition: { default: "fade" }, showTimeout: { default: 0 }, hideTimeout: { default: 200 } }, emits: ["visible-change", "click-outside"], setup(o22, { expose: j22, emit: $22 }) {
  const B22 = o22, L22 = $22, N22 = ref(false), E22 = ref({}), M5 = ref({}), O6 = ref({}), P9 = ref(), R6 = ref(), z5 = ref(), A7 = computed(() => B22.virtualTriggering ? B22.virtualRef ?? z5.value : z5.value), D5 = computed(() => ({ placement: B22.placement, modifiers: [{ name: "offset", options: { offset: [0, 9] } }], ...B22.popperOptions })), I7 = computed(() => "hover" === B22.trigger ? B22.showTimeout : 0), q5 = computed(() => "hover" === B22.trigger ? B22.hideTimeout : 0);
  let C7, F6;
  function G6() {
    F6 == null ? void 0 : F6.cancel(), C7 == null ? void 0 : C7();
  }
  function H5() {
    C7 == null ? void 0 : C7.cancel(), F6 == null ? void 0 : F6();
  }
  function J4() {
    N22.value ? H5() : G6();
  }
  function K5(e22) {
    B22.disabled || (N22.value = e22, L22("visible-change", e22));
  }
  const Q4 = /* @__PURE__ */ new Map();
  function S5() {
    var _a;
    B22.disabled || B22.manual || ((_a = Q4.get(B22.trigger)) == null ? void 0 : _a());
  }
  let U5;
  function V6() {
    U5 == null ? void 0 : U5.destroy(), U5 = null;
  }
  function W4() {
    E22.value = {}, M5.value = {}, O6.value = {}, S5();
  }
  return Q4.set("hover", () => {
    E22.value.mouseenter = G6, M5.value.mouseleave = H5, O6.value.mouseenter = G6;
  }), Q4.set("click", () => {
    E22.value.click = J4;
  }), Q4.set("contextmenu", () => {
    E22.value.contextmenu = (e22) => {
      e22.preventDefault(), G6();
    };
  }), watch(N22, (e22) => {
    e22 && A7.value && R6.value && (U5 = createPopper3(A7.value, R6.value, D5.value));
  }, { flush: "post" }), watch(() => B22.manual, (e22) => {
    e22 ? W4() : S5();
  }), watch(() => B22.trigger, () => {
    C7 == null ? void 0 : C7.cancel(), N22.value = false, L22("visible-change", false), W4();
  }), watchEffect(() => {
    B22.manual || S5(), C7 = mn(rr(K5, null, true), I7.value), F6 = mn(rr(K5, null, false), q5.value);
  }), k2(P9, () => {
    L22("click-outside"), "hover" === B22.trigger || B22.manual || N22.value && H5();
  }), function(o32, l22, i22, n22) {
    let r22, u22;
    const s2 = /* @__PURE__ */ new Map(), v22 = () => {
      const e22 = l22.value;
      An(e22) && Sn(i22.value, (t2, a22) => {
        s2.set(a22, t2), e22 == null ? void 0 : e22.addEventListener(a22, t2);
      });
    };
    onMounted(() => {
      u22 = watch(l22, () => o32.virtualTriggering && v22(), { immediate: true }), r22 = watch(i22, () => {
        o32.virtualTriggering && ((() => {
          const e22 = l22.value;
          An(e22) && Sn(["mouseenter", "click", "contextmenu"], (t2) => s2.has(t2) && (e22 == null ? void 0 : e22.removeEventListener(t2, s2.get(t2))));
        })(), v22(), n22());
      }, { deep: true });
    }), onUnmounted(() => {
      u22 == null ? void 0 : u22(), r22 == null ? void 0 : r22();
    });
  }(B22, A7, E22, H5), j22({ show: G6, hide: () => {
    C7 == null ? void 0 : C7.cancel(), K5(false);
  } }), onUnmounted(() => {
    V6();
  }), (e22, t2) => (openBlock(), createElementBlock("div", mergeProps({ class: "px-tooltip", ref_key: "containerNode", ref: P9 }, toHandlers(M5.value, true)), [e22.virtualTriggering ? renderSlot(e22.$slots, "default", { key: 1 }, void 0, true) : (openBlock(), createElementBlock("div", mergeProps({ key: 0, class: "px-tooltip__trigger", ref_key: "_triggerNode", ref: z5 }, toHandlers(E22.value, true)), [renderSlot(e22.$slots, "default", {}, void 0, true)], 16)), createVNode(Transition, { name: e22.transition, onAfterLeave: V6 }, { default: withCtx(() => [N22.value ? (openBlock(), createElementBlock("div", mergeProps({ key: 0, class: ["px-tooltip__popper", `is-${e22.effect}`], ref_key: "popperNode", ref: R6 }, toHandlers(O6.value, true)), [renderSlot(e22.$slots, "content", {}, () => [createTextVNode(toDisplayString(e22.content), 1)], true), t2[0] || (t2[0] = createBaseVNode("div", { id: "arrow", "data-popper-arrow": "" }, null, -1))], 16)) : createCommentVNode("", true)]), _: 3 }, 8, ["name"])], 16));
} }), [["__scopeId", "data-v-40bcedff"]]);
var L4 = ["hover", "click", "contextmenu"];
var N4 = ["dark", "light", "customized"];
var E4 = e2(B5);

// node_modules/.pnpm/@mmt817+pixel-ui@1.6.0_vue@3.5.17_typescript@5.8.3_/node_modules/@mmt817/pixel-ui/dist/es/Popconfirm-CpB12FLf.js
var v4 = { class: "px-popconfirm__main" };
var k6 = { class: "px-popconfirm__action" };
var P6 = e2(r2(defineComponent({ name: "PxPopconfirm", __name: "Popconfirm", props: { title: {}, confirmButtonText: {}, cancelButtonText: {}, confirmButtonType: { default: "primary" }, cancelButtonType: {}, icon: { default: "question-solid" }, iconColor: { default: "#f90" }, hideIcon: { type: Boolean }, hideAfter: { default: 200 }, width: { default: 200 } }, emits: ["confirm", "cancel"], setup(o22, { emit: _22 }) {
  const y22 = o22, P22 = H2(), j8 = _22, $7 = ref(), w4 = computed(() => ({ width: d2(y22.width) })), C7 = () => {
    var _a;
    (_a = $7.value) == null ? void 0 : _a.hide();
  }, I7 = (o32) => {
    j8("confirm", o32), C7();
  }, z5 = (o32) => {
    j8("cancel", o32), C7();
  };
  return (o32, t2) => (openBlock(), createBlock(B5, { ref_key: "tooltipRef", ref: $7, trigger: "click", "hide-timeout": o32.hideAfter }, { content: withCtx(() => [createBaseVNode("div", { class: "px-popconfirm", style: normalizeStyle(w4.value) }, [createBaseVNode("div", v4, [!o32.hideIcon && o32.icon ? (openBlock(), createBlock(c3, { key: 0, icon: o32.icon, color: o32.iconColor, size: 20 }, null, 8, ["icon", "color"])) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(o32.title), 1)]), createBaseVNode("div", k6, [renderSlot(o32.$slots, "actions", { confirm: I7, cancel: z5 }, () => [createVNode(P3, { class: "px-popconfirm__cancel", size: "small", type: o32.cancelButtonType, onClick: z5 }, { default: withCtx(() => [createTextVNode(toDisplayString(o32.cancelButtonText || unref(P22).t("el.popconfirm.cancelButtonText")), 1)]), _: 1 }, 8, ["type"]), createVNode(P3, { class: "px-popconfirm__confirm", size: "small", type: o32.confirmButtonType, onClick: I7 }, { default: withCtx(() => [createTextVNode(toDisplayString(o32.confirmButtonText || unref(P22).t("el.popconfirm.confirmButtonText")), 1)]), _: 1 }, 8, ["type"])], true)])], 4)]), default: withCtx(() => [o32.$slots.default ? renderSlot(o32.$slots, "default", { key: 0 }, void 0, true) : createCommentVNode("", true), o32.$slots.reference ? renderSlot(o32.$slots, "reference", { key: 1 }, void 0, true) : createCommentVNode("", true)]), _: 3 }, 8, ["hide-timeout"]));
} }), [["__scopeId", "data-v-c32368f9"]]));

// node_modules/.pnpm/@mmt817+pixel-ui@1.6.0_vue@3.5.17_typescript@5.8.3_/node_modules/@mmt817/pixel-ui/dist/es/Dropdown-DaiA-2Nr.js
var I5 = Symbol("DROPDOWN_CTX_KEY");
var P7 = { key: 0, role: "separator", class: "divided-placeholder" };
var j6 = ["id"];
var O5 = r2(defineComponent({ name: "PxDropdownItem", __name: "DropdownItem", props: { command: { default: S2().value }, label: {}, disabled: { type: Boolean, default: false }, divided: { type: Boolean, default: false } }, setup(e22) {
  const c22 = e22, f22 = inject(I5), v22 = computed(() => f22 == null ? void 0 : f22.size.value), _22 = () => {
    c22.disabled || (f22 == null ? void 0 : f22.handleItemClick(c22));
  };
  return (e32, i22) => (openBlock(), createElementBlock(Fragment, null, [e32.divided ? (openBlock(), createElementBlock("li", P7)) : createCommentVNode("", true), createBaseVNode("li", { id: `dropdown-item-${e32.command ?? unref(S2)().value}`, class: normalizeClass({ "px-dropdown__item": true, [`px-dropdown__item--${v22.value}`]: v22.value, "is-disabled": e32.disabled, "is-divided": e32.divided }), onClick: _22 }, [renderSlot(e32.$slots, "default", {}, () => [createTextVNode(toDisplayString(e32.label), 1)], true)], 10, j6)], 64));
} }), [["__scopeId", "data-v-4528daa3"]]);
var T5 = { class: "px-dropdown__menu" };
var R3 = e2(r2(defineComponent({ name: "PxDropdown", inheritAttrs: false, __name: "Dropdown", props: { type: {}, size: {}, items: { default: () => [] }, disabled: { type: Boolean }, trigger: {}, placement: {}, hideOnClick: { type: Boolean, default: true }, splitButton: { type: Boolean }, popperOptions: {}, effect: {}, transition: {}, showTimeout: {}, hideTimeout: {} }, emits: ["visible-change", "command", "click"], setup(e22, { expose: i22, emit: a22 }) {
  const m22 = e22, u22 = a22, k22 = ref(), C22 = ref(), z22 = computed(() => kn(m22, ["items", "hideAfterClick", "size", "type", "splitButton"])), P22 = (e32) => {
    u22("visible-change", e32);
  }, j22 = (e32) => {
    u22("click", e32);
  };
  return A2(), provide(I5, { handleItemClick: (e32) => {
    var _a;
    m22.hideOnClick && ((_a = k22.value) == null ? void 0 : _a.hide()), !En(e32.command) && u22("command", e32.command);
  }, size: computed(() => m22.size) }), i22({ open: () => {
    var _a;
    return (_a = k22.value) == null ? void 0 : _a.show();
  }, close: () => {
    var _a;
    return (_a = k22.value) == null ? void 0 : _a.hide();
  } }), (e32, i32) => {
    var _a;
    return openBlock(), createElementBlock("div", { class: normalizeClass(["px-dropdown", { "is-disabled": e32.disabled, [`px-dropdown--${e32.type}`]: e32.type, [`is-${e32.effect}`]: e32.effect }]) }, [createVNode(B5, mergeProps({ ref_key: "tooltipRef", ref: k22 }, z22.value, { "virtual-triggering": e32.splitButton, "virtual-ref": (_a = C22.value) == null ? void 0 : _a.ref, onVisibleChange: P22 }), { content: withCtx(() => [createBaseVNode("div", T5, [renderSlot(e32.$slots, "dropdown", {}, () => [(openBlock(true), createElementBlock(Fragment, null, renderList(e32.items, (e4) => (openBlock(), createBlock(O5, mergeProps({ key: e4.command, ref_for: true }, e4), null, 16))), 128))], true)])]), default: withCtx(() => [e32.splitButton ? (openBlock(), createBlock(unref(O3), { key: 0, type: e32.type, size: e32.size, disabled: e32.disabled }, { default: withCtx(() => [createVNode(unref(D3), { onClick: j22 }, { default: withCtx(() => [renderSlot(e32.$slots, "default", {}, void 0, true)]), _: 3 }), createVNode(unref(D3), { ref_key: "triggerRef", ref: C22, icon: "angle-down-solid" }, null, 512)]), _: 3 }, 8, ["type", "size", "disabled"])) : renderSlot(e32.$slots, "default", { key: 1 }, void 0, true)]), _: 3 }, 16, ["virtual-triggering", "virtual-ref"])], 2);
  };
} }), [["__scopeId", "data-v-0dd3e742"]]));
var A4 = e2(O5);

// node_modules/.pnpm/@mmt817+pixel-ui@1.6.0_vue@3.5.17_typescript@5.8.3_/node_modules/@mmt817/pixel-ui/dist/es/Image-i6kK8skF.js
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var h4 = { class: "px-image" };
var c5 = e2(r2(defineComponent({ name: "PxImage", __name: "Image", props: { width: {}, height: {}, src: {}, blockSize: { default: 2 }, colorCount: { default: 32 }, showGrid: { type: Boolean, default: false }, scale: { default: 1 } }, emits: ["ready"], setup(t2, { expose: r22, emit: i22 }) {
  const c22 = t2, u5 = ref(null), g9 = /* @__PURE__ */ function() {
    const t3 = (t4, e32, o32 = 1) => {
      const a22 = Math.min(1, o32);
      return { width: t4 * a22 | 0, height: e32 * a22 | 0 };
    };
    class e22 {
      constructor(t4, e32 = 0) {
        __publicField(this, "splitChannel", 0);
        this._pixels = t4, this._level = e32, this.compute();
      }
      compute() {
        const t4 = [255, 255, 255, 255], e32 = [0, 0, 0, 0];
        for (const o4 of this._pixels) for (let a22 = 0; a22 < 4; a22++) t4[a22] = Math.min(t4[a22], o4[a22]), e32[a22] = Math.max(e32[a22], o4[a22]);
        const o32 = e32.map((e4, o4) => e4 - t4[o4]);
        this.splitChannel = o32.indexOf(Math.max(...o32));
      }
      split() {
        if (this._pixels.length < 2) return null;
        const t4 = this.splitChannel, o32 = this._pixels.sort((e32, o4) => e32[t4] - o4[t4]), a22 = Math.floor(o32.length / 2);
        return [new e22(o32.slice(0, a22), this._level + 1), new e22(o32.slice(a22), this._level + 1)];
      }
      getAverageColor() {
        const t4 = [0, 0, 0, 0], e32 = this._pixels.length;
        for (const e4 of this._pixels) for (let o32 = 0; o32 < 4; o32++) t4[o32] += e4[o32];
        return t4.map((t5) => Math.round(t5 / e32));
      }
    }
    const o22 = (t4, e32, o32, a22, s2, l22) => {
      const { data: n22 } = t4, r32 = /* @__PURE__ */ new Map(), i32 = Math.min(o32 + l22, s2), h22 = Math.min(e32 + l22, a22);
      for (let t5 = o32; t5 < i32; t5++) for (let o4 = e32; o4 < h22; o4++) {
        const e4 = 4 * (t5 * a22 + o4), s3 = n22[e4], l32 = n22[e4 + 1], i4 = n22[e4 + 2], h32 = n22[e4 + 3], c42 = s3 << 24 | l32 << 16 | i4 << 8 | h32;
        r32.has(c42) ? r32.get(c42).count++ : r32.set(c42, { count: 1, rgba: [s3, l32, i4, h32] });
      }
      let c32 = 0, u22 = [0, 0, 0, 0];
      for (const { count: t5, rgba: e4 } of r32.values()) t5 > c32 && (c32 = t5, u22 = e4);
      return u22;
    };
    return { loadImage: (t4) => new Promise((e32, o32) => {
      const a22 = new Image();
      a22.crossOrigin = "anonymous", a22.onload = () => e32(a22), a22.onerror = o32, a22.crossOrigin = "anonymous", a22.src = t4;
    }), processImage: (a22, s2, l22) => {
      const { blockSize: n22, colorCount: r32, showGrid: i32, cwidth: h22, cheight: c32, scale: u22 } = l22, g22 = a22.getContext("2d"), { width: d22, height: m22 } = t3(h22 || s2.width, c32 || s2.height, u22);
      a22.width = d22, a22.height = m22, g22.imageSmoothingEnabled = false, g22.drawImage(s2, 0, 0, d22, m22);
      const f22 = g22.getImageData(0, 0, d22, m22), p2 = ((t4) => {
        const { data: e32, width: o32, height: a32 } = t4, s3 = [0, 4 * (o32 - 1), (a32 - 1) * o32 * 4, 4 * (o32 * a32 - 1), 4 * (Math.floor(a32 / 2) * o32 + Math.floor(o32 / 2))], l32 = [0, 0, 0, 0];
        for (const t5 of s3) for (let o4 = 0; o4 < 4; o4++) l32[o4] += e32[t5 + o4];
        return l32.map((t5) => t5 / s3.length | 0);
      })(f22);
      for (let t4 = 0; t4 < m22; t4 += n22) for (let e32 = 0; e32 < d22; e32 += n22) {
        const a32 = o22(f22, e32, t4, d22, m22, n22);
        for (let o32 = 0; o32 < n22 && t4 + o32 < m22; o32++) for (let s3 = 0; s3 < n22 && e32 + s3 < d22; s3++) {
          const l32 = 4 * ((t4 + o32) * d22 + (e32 + s3));
          f22.data[l32] = a32[0], f22.data[l32 + 1] = a32[1], f22.data[l32 + 2] = a32[2], f22.data[l32 + 3] = a32[3];
        }
      }
      ((t4, e32, o32 = 40) => {
        const { data: a32 } = t4, s3 = o32 * o32;
        for (let t5 = 0; t5 < a32.length; t5 += 4) {
          const o4 = a32[t5], l32 = a32[t5 + 1], n32 = a32[t5 + 2], r4 = a32[t5 + 3];
          (o4 - e32[0]) ** 2 + (l32 - e32[1]) ** 2 + (n32 - e32[2]) ** 2 < s3 && r4 < 255 && a32.set(e32, t5);
        }
      })(f22, p2), ((t4, o32) => {
        const { data: a32 } = t4, s3 = new Array(a32.length / 4);
        for (let t5 = 0; t5 < a32.length; t5 += 4) s3[t5 >> 2] = [a32[t5], a32[t5 + 1], a32[t5 + 2], a32[t5 + 3]];
        const l32 = [new e22(s3)];
        let n32 = 0;
        for (; l32.length < o32 && n32++ < 1e3; ) {
          l32.sort((t6, e4) => e4._pixels.length - t6._pixels.length);
          const t5 = l32.shift(), e32 = t5.split();
          e32 ? l32.push(...e32) : l32.push(t5);
        }
        const r4 = l32.map((t5) => t5.getAverageColor());
        for (let t5 = 0; t5 < a32.length; t5 += 4) {
          let e32 = 1 / 0, o4 = r4[0];
          for (const s4 of r4) {
            let l42 = 0;
            for (let e4 = 0; e4 < 4; e4++) l42 += (a32[t5 + e4] - s4[e4]) ** 2;
            l42 < e32 && (e32 = l42, o4 = s4);
          }
          a32.set(o4, t5);
        }
      })(f22, r32), g22.putImageData(f22, 0, 0), i32 && ((t4, e32, o32, a32) => {
        t4.strokeStyle = "rgba(0,0,0,0.2)", t4.lineWidth = 1;
        for (let s3 = 0; s3 < o32; s3 += a32) for (let o4 = 0; o4 < e32; o4 += a32) t4.strokeRect(o4 + 0.5, s3 + 0.5, a32, a32);
      })(g22, d22, m22, n22);
    }, calculateScaledDimensions: t3 };
  }(), d5 = i22, m7 = ref({ width: 0, height: 0 }), f4 = async () => {
    if (!u5.value || !c22.src) return;
    const t3 = u5.value, e22 = await g9.loadImage(c22.src);
    g9.processImage(t3, e22, { blockSize: Math.max(2, Number(c22.blockSize)), colorCount: Math.max(2, Number(c22.colorCount)), showGrid: c22.showGrid, cwidth: Number(c22.width) || e22.naturalWidth, cheight: Number(c22.height) || e22.naturalHeight, scale: Number(c22.scale) }), m7.value = g9.calculateScaledDimensions(Number(c22.width) || e22.naturalWidth, Number(c22.height) || e22.naturalHeight, Number(c22.scale)), d5("ready", m7.value);
  };
  return onMounted(f4), watch(() => c22.src, f4), watch(() => [c22.blockSize, c22.colorCount, c22.showGrid], f4), watch(() => [c22.width, c22.height, c22.scale], f4), r22({ getSize: () => m7.value, render: f4 }), (t3, e22) => (openBlock(), createElementBlock("div", h4, [createBaseVNode("canvas", { ref_key: "canvasRef", ref: u5 }, null, 512)]));
} }), [["__scopeId", "data-v-7b05016e"]]));

// node_modules/.pnpm/@mmt817+pixel-ui@1.6.0_vue@3.5.17_typescript@5.8.3_/node_modules/@mmt817/pixel-ui/dist/es/PixelIt-CDxbV3pS.js
var __defProp2 = Object.defineProperty;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField2 = (obj, key, value) => __defNormalProp2(obj, typeof key !== "symbol" ? key + "" : key, value);
var o2 = class {
  constructor(t2) {
    __publicField2(this, "from");
    __publicField2(this, "to");
    __publicField2(this, "scale");
    __publicField2(this, "palette");
    __publicField2(this, "ctx");
    __publicField2(this, "width");
    __publicField2(this, "height");
    this.from = t2.from, this.to = t2.to, this.scale = t2.scale ?? 8, this.palette = t2.palette ?? null, this.ctx = this.to.getContext("2d"), this.width = Math.floor(t2.width || this.from.naturalWidth) * t2.aspectRatio, this.height = Math.floor(t2.height || this.from.naturalHeight) * t2.aspectRatio;
  }
  draw() {
    return this.to.width = this.width, this.to.height = this.height, this.ctx.clearRect(0, 0, this.width, this.height), this.ctx.drawImage(this.from, 0, 0, this.width, this.height), this;
  }
  pixelate() {
    const t2 = Math.ceil(this.width / this.scale), e22 = Math.ceil(this.height / this.scale), i22 = document.createElement("canvas");
    return i22.width = t2, i22.height = e22, i22.getContext("2d").drawImage(this.to, 0, 0, t2, e22), this.ctx.imageSmoothingEnabled = false, this.ctx.clearRect(0, 0, this.width, this.height), this.ctx.drawImage(i22, 0, 0, t2, e22, 0, 0, this.width, this.height), this;
  }
  convertGrayscale() {
    const t2 = this.ctx.getImageData(0, 0, this.width, this.height), e22 = t2.data;
    for (let t3 = 0; t3 < e22.length; t3 += 4) {
      const i22 = 0.299 * e22[t3] + 0.587 * e22[t3 + 1] + 0.114 * e22[t3 + 2];
      e22[t3] = e22[t3 + 1] = e22[t3 + 2] = i22;
    }
    return this.ctx.putImageData(t2, 0, 0), this;
  }
  convertPalette() {
    if (!this.palette) return this;
    const t2 = this.ctx.getImageData(0, 0, this.width, this.height), e22 = t2.data;
    for (let t3 = 0; t3 < e22.length; t3 += 4) {
      const [i22, a22, h22] = [e22[t3], e22[t3 + 1], e22[t3 + 2]], s2 = this._findNearestColor([i22, a22, h22]);
      e22[t3] = s2[0], e22[t3 + 1] = s2[1], e22[t3 + 2] = s2[2];
    }
    return this.ctx.putImageData(t2, 0, 0), this;
  }
  getSize() {
    return { width: this.width, height: this.height };
  }
  _findNearestColor(t2) {
    let e22 = 1 / 0, i22 = t2;
    for (const a22 of this.palette) {
      const h22 = this._colorDistance(t2, a22);
      h22 < e22 && (e22 = h22, i22 = a22);
    }
    return i22;
  }
  _colorDistance(t2, e22) {
    return (t2[0] - e22[0]) ** 2 + (t2[1] - e22[1]) ** 2 + (t2[2] - e22[2]) ** 2;
  }
};
var n3 = { class: "px-pixel-it" };
var g5 = ["src"];
var d4 = e2(r2(defineComponent({ name: "PxPixelIt", __name: "PixelIt", props: { src: { default: "" }, scale: { default: 4 }, palette: { default: null }, grayscale: { type: Boolean, default: false }, width: {}, height: {}, aspectRatio: { default: 1 } }, setup(t2, { expose: l22 }) {
  const c22 = t2, d22 = ref(), u5 = ref(), p2 = ref({ width: 0, height: 0 }), f4 = async () => {
    if (!d22.value || !u5.value) return;
    const t3 = new o2({ from: d22.value, to: u5.value, scale: c22.scale, palette: c22.palette, width: Number(c22.width), height: Number(c22.height), aspectRatio: Number(c22.aspectRatio) });
    t3.draw().pixelate(), c22.grayscale && t3.convertGrayscale(), c22.palette && t3.convertPalette(), p2.value = t3.getSize();
  };
  return l22({ render: f4, originRef: d22, canvasRef: u5, getSize: () => p2.value }), watch(() => [c22.src, c22.scale, c22.palette, c22.grayscale, c22.width, c22.height, c22.aspectRatio], f4), onMounted(() => {
    var _a;
    ((_a = d22.value) == null ? void 0 : _a.complete) && f4();
  }), (t3, e22) => (openBlock(), createElementBlock("div", n3, [createBaseVNode("img", { ref_key: "originRef", ref: d22, src: t3.src, alt: "source", class: "px-pixel-it__origin", onLoad: f4 }, null, 40, g5), createBaseVNode("canvas", { ref_key: "canvasRef", ref: u5 }, null, 512)]));
} }), [["__scopeId", "data-v-a372c7f6"]]));

// node_modules/.pnpm/@mmt817+pixel-ui@1.6.0_vue@3.5.17_typescript@5.8.3_/node_modules/@mmt817/pixel-ui/dist/es/Tag-PSUnqUK9.js
var m4 = { class: "px-tag__content" };
var b4 = { key: 0, class: "px-tag__close" };
var g6 = ["primary", "success", "warning", "danger", "info", "sakura"];
var x3 = ["large", "default", "small"];
var y5 = ["light", "dark", "plain"];
var _5 = e2(r2(defineComponent({ name: "PxTag", __name: "Tag", props: { size: { default: "default" }, type: {}, closable: { type: Boolean, default: false }, color: {}, effect: { default: "light" }, disabled: { type: Boolean, default: false }, round: { type: Boolean, default: false }, circle: { type: Boolean, default: false }, chubby: { type: Boolean, default: false } }, emits: ["close", "click"], setup(e22, { emit: d22 }) {
  const f22 = e22, g22 = computed(() => (f22 == null ? void 0 : f22.type) && ["primary", "success", "warning", "danger", "info", "sakura"].includes(f22.type) ? f22.type : "primary"), x22 = d22, y22 = () => {
    f22.disabled || x22("close");
  }, _22 = (e32) => {
    f22.disabled || x22("click", e32);
  }, k7 = computed(() => {
    if (!f22.color) return {};
    const e32 = f22.color;
    return "plain" === f22.effect ? { "--px-custom-text-color": e32, "--px-custom-bg-color": "transparent", "--px-custom-border-color": e32 } : { "--px-custom-text-color": "#FFFFFF", "--px-custom-bg-color": e32, "--px-custom-border-color": e32 };
  });
  return (e32, o22) => (openBlock(), createElementBlock("span", { class: normalizeClass(["px-tag", [{ [`px-tag--${e32.size}`]: e32.size, [`px-tag--${e32.effect}`]: e32.effect, [`px-tag--${g22.value}`]: g22.value, "is-disabled": e32.disabled, "is-custom": e32.color, "is-round": e32.round, "is-circle": e32.circle, "is-chubby": e32.chubby }]]), style: normalizeStyle(k7.value), onClick: _22 }, [createBaseVNode("span", m4, [renderSlot(e32.$slots, "default", {}, void 0, true)]), e32.closable ? (openBlock(), createElementBlock("span", b4, [createVNode(c3, { class: "px-tag__close-icon", icon: "times-solid", size: "10", onClick: withModifiers(y22, ["stop"]) })])) : createCommentVNode("", true)], 6));
} }), [["__scopeId", "data-v-6b9cc6d1"]]));

// node_modules/.pnpm/@mmt817+pixel-ui@1.6.0_vue@3.5.17_typescript@5.8.3_/node_modules/@mmt817/pixel-ui/dist/es/locale-sJISIFcr.js
var e3 = { name: "en", el: { colorpicker: { confirm: "OK", clear: "Clear", defaultLabel: "color picker", description: "current color is {color}. press enter to select a new color." }, datepicker: { now: "Now", today: "Today", cancel: "Cancel", clear: "Clear", confirm: "OK", dateTablePrompt: "Use the arrow keys and enter to select the day of the month", monthTablePrompt: "Use the arrow keys and enter to select the month", yearTablePrompt: "Use the arrow keys and enter to select the year", selectedDate: "Selected date", selectDate: "Select date", selectTime: "Select time", startDate: "Start Date", startTime: "Start Time", endDate: "End Date", endTime: "End Time", prevYear: "Previous Year", nextYear: "Next Year", prevMonth: "Previous Month", nextMonth: "Next Month", year: "", month1: "January", month2: "February", month3: "March", month4: "April", month5: "May", month6: "June", month7: "July", month8: "August", month9: "September", month10: "October", month11: "November", month12: "December", week: "week", weeks: { sun: "Sun", mon: "Mon", tue: "Tue", wed: "Wed", thu: "Thu", fri: "Fri", sat: "Sat" }, weeksFull: { sun: "Sunday", mon: "Monday", tue: "Tuesday", wed: "Wednesday", thu: "Thursday", fri: "Friday", sat: "Saturday" }, months: { jan: "Jan", feb: "Feb", mar: "Mar", apr: "Apr", may: "May", jun: "Jun", jul: "Jul", aug: "Aug", sep: "Sep", oct: "Oct", nov: "Nov", dec: "Dec" } }, inputNumber: { decrease: "decrease number", increase: "increase number" }, select: { loading: "Loading", noMatch: "No matching data", noData: "No data", placeholder: "Select" }, dropdown: { toggleDropdown: "Toggle Dropdown" }, cascader: { noMatch: "No matching data", loading: "Loading", placeholder: "Select", noData: "No data" }, pagination: { goto: "Go to", pagesize: "/page", total: "Total {total}", pageClassifier: "", page: "Page", prev: "Go to previous page", next: "Go to next page", currentPage: "page {pager}", prevPages: "Previous {pager} pages", nextPages: "Next {pager} pages", deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details" }, dialog: { close: "Close this dialog" }, drawer: { close: "Close this dialog" }, messagebox: { title: "Message", confirm: "OK", cancel: "Cancel", error: "Illegal input", close: "Close this dialog" }, upload: { deleteTip: "press delete to remove", delete: "Delete", preview: "Preview", continue: "Continue" }, slider: { defaultLabel: "slider between {min} and {max}", defaultRangeStartLabel: "pick start value", defaultRangeEndLabel: "pick end value" }, table: { emptyText: "No Data", confirmFilter: "Confirm", resetFilter: "Reset", clearFilter: "All", sumText: "Sum" }, tour: { next: "Next", previous: "Previous", finish: "Finish" }, tree: { emptyText: "No Data" }, transfer: { noMatch: "No matching data", noData: "No data", titles: ["List 1", "List 2"], filterPlaceholder: "Enter keyword", noCheckedFormat: "{total} items", hasCheckedFormat: "{checked}/{total} checked" }, image: { error: "FAILED" }, pageHeader: { title: "Back" }, popconfirm: { confirmButtonText: "Yes", cancelButtonText: "No" }, carousel: { leftArrow: "Carousel arrow left", rightArrow: "Carousel arrow right", indicator: "Carousel switch to index {index}" } } };
var t = { name: "zh-cn", el: { colorpicker: { confirm: "确定", clear: "清空" }, datepicker: { now: "此刻", today: "今天", cancel: "取消", clear: "清空", confirm: "确定", selectDate: "选择日期", selectTime: "选择时间", startDate: "开始日期", startTime: "开始时间", endDate: "结束日期", endTime: "结束时间", prevYear: "前一年", nextYear: "后一年", prevMonth: "上个月", nextMonth: "下个月", year: "年", month1: "1 月", month2: "2 月", month3: "3 月", month4: "4 月", month5: "5 月", month6: "6 月", month7: "7 月", month8: "8 月", month9: "9 月", month10: "10 月", month11: "11 月", month12: "12 月", weeks: { sun: "日", mon: "一", tue: "二", wed: "三", thu: "四", fri: "五", sat: "六" }, months: { jan: "一月", feb: "二月", mar: "三月", apr: "四月", may: "五月", jun: "六月", jul: "七月", aug: "八月", sep: "九月", oct: "十月", nov: "十一月", dec: "十二月" } }, select: { loading: "加载中", noMatch: "无匹配数据", noData: "无数据", placeholder: "请选择" }, cascader: { noMatch: "无匹配数据", loading: "加载中", placeholder: "请选择", noData: "暂无数据" }, pagination: { goto: "前往", pagesize: "条/页", total: "共 {total} 条", pageClassifier: "页", page: "页", prev: "上一页", next: "下一页", currentPage: "第 {pager} 页", prevPages: "向前 {pager} 页", nextPages: "向后 {pager} 页", deprecationWarning: "你使用了一些已被废弃的用法，请参考 el-pagination 的官方文档" }, messagebox: { title: "提示", confirm: "确定", cancel: "取消", error: "输入的数据不合法!" }, upload: { deleteTip: "按 delete 键可删除", delete: "删除", preview: "查看图片", continue: "继续上传" }, table: { emptyText: "暂无数据", confirmFilter: "筛选", resetFilter: "重置", clearFilter: "全部", sumText: "合计" }, tour: { next: "下一步", previous: "上一步", finish: "结束导览" }, tree: { emptyText: "暂无数据" }, transfer: { noMatch: "无匹配数据", noData: "无数据", titles: ["列表 1", "列表 2"], filterPlaceholder: "请输入搜索内容", noCheckedFormat: "共 {total} 项", hasCheckedFormat: "已选 {checked}/{total} 项" }, image: { error: "加载失败" }, pageHeader: { title: "返回" }, popconfirm: { confirmButtonText: "确定", cancelButtonText: "取消" }, carousel: { leftArrow: "上一张幻灯片", rightArrow: "下一张幻灯片", indicator: "幻灯片切换至索引 {index}" } } };
var a3 = { name: "zh-tw", el: { colorpicker: { confirm: "確認", clear: "清空", defaultLabel: "色彩選擇器", description: "目前色彩為 {color}。按一下 Enter 以選擇新色彩。" }, datepicker: { now: "現在", today: "今天", cancel: "取消", clear: "清空", confirm: "確認", dateTablePrompt: "使用方向鍵與 Enter 鍵以選擇日期", monthTablePrompt: "使用方向鍵與 Enter 鍵以選擇月份", yearTablePrompt: "使用方向鍵與 Enter 鍵以選擇年份", selectedDate: "已選日期", selectDate: "選擇日期", selectTime: "選擇時間", startDate: "開始日期", startTime: "開始時間", endDate: "結束日期", endTime: "結束時間", prevYear: "前一年", nextYear: "後一年", prevMonth: "上個月", nextMonth: "下個月", year: "年", month1: "1 月", month2: "2 月", month3: "3 月", month4: "4 月", month5: "5 月", month6: "6 月", month7: "7 月", month8: "8 月", month9: "9 月", month10: "10 月", month11: "11 月", month12: "12 月", weeks: { sun: "日", mon: "一", tue: "二", wed: "三", thu: "四", fri: "五", sat: "六" }, weeksFull: { sun: "星期日", mon: "星期一", tue: "星期二", wed: "星期三", thu: "星期四", fri: "星期五", sat: "星期六" }, months: { jan: "一月", feb: "二月", mar: "三月", apr: "四月", may: "五月", jun: "六月", jul: "七月", aug: "八月", sep: "九月", oct: "十月", nov: "十一月", dec: "十二月" } }, inputNumber: { decrease: "減少數值", increase: "增加數值" }, select: { loading: "載入中", noMatch: "無相符資料", noData: "無資料", placeholder: "請選擇" }, dropdown: { toggleDropdown: "切換下拉選單" }, cascader: { noMatch: "無相符資料", loading: "載入中", placeholder: "請選擇", noData: "無資料" }, pagination: { goto: "前往", pagesize: "項/頁", total: "共 {total} 項", pageClassifier: "頁", page: "頁", prev: "上一頁", next: "下一頁", currentPage: "第 {pager} 頁", prevPages: "向前 {pager} 頁", nextPages: "向后 {pager} 頁", deprecationWarning: "偵測到已過時的使用方式，請參閱 el-pagination 說明文件以了解更多資訊" }, dialog: { close: "關閉此對話框" }, drawer: { close: "關閉此對話框" }, messagebox: { title: "提示", confirm: "確定", cancel: "取消", error: "輸入的資料不符規定!", close: "關閉此對話框" }, upload: { deleteTip: "按一下 Delete 鍵以刪除", delete: "刪除", preview: "查看圖片", continue: "繼續上傳" }, slider: { defaultLabel: "滑桿介於 {min} 至 {max}", defaultRangeStartLabel: "選擇起始值", defaultRangeEndLabel: "選擇結束值" }, table: { emptyText: "暫無資料", confirmFilter: "篩選", resetFilter: "重置", clearFilter: "全部", sumText: "合計" }, tour: { next: "下一步", previous: "上一步", finish: "結束導覽" }, tree: { emptyText: "暫無資料" }, transfer: { noMatch: "無相符資料", noData: "無資料", titles: ["列表 1", "列表 2"], filterPlaceholder: "請輸入搜尋內容", noCheckedFormat: "共 {total} 項", hasCheckedFormat: "已選 {checked}/{total} 項" }, image: { error: "載入失敗" }, pageHeader: { title: "返回" }, popconfirm: { confirmButtonText: "確認", cancelButtonText: "取消" }, carousel: { leftArrow: "上一張投影片", rightArrow: "下一張投影片", indicator: "投影片切換至索引 {index}" } } };
var o3 = { name: "ja", el: { breadcrumb: { label: "Breadcrumb" }, colorpicker: { confirm: "OK", clear: "クリア" }, datepicker: { now: "現在", today: "今日", cancel: "キャンセル", clear: "クリア", confirm: "OK", selectDate: "日付を選択", selectTime: "時間を選択", startDate: "開始日", startTime: "開始時間", endDate: "終了日", endTime: "終了時間", prevYear: "前年", nextYear: "翌年", prevMonth: "前月", nextMonth: "翌月", year: "年", month1: "1月", month2: "2月", month3: "3月", month4: "4月", month5: "5月", month6: "6月", month7: "7月", month8: "8月", month9: "9月", month10: "10月", month11: "11月", month12: "12月", weeks: { sun: "日", mon: "月", tue: "火", wed: "水", thu: "木", fri: "金", sat: "土" }, months: { jan: "1月", feb: "2月", mar: "3月", apr: "4月", may: "5月", jun: "6月", jul: "7月", aug: "8月", sep: "9月", oct: "10月", nov: "11月", dec: "12月" } }, select: { loading: "ロード中", noMatch: "データなし", noData: "データなし", placeholder: "選択してください" }, mention: { loading: "ロード中" }, cascader: { noMatch: "データなし", loading: "ロード中", placeholder: "選択してください", noData: "データなし" }, pagination: { goto: "", pagesize: "件/ページ", total: "総計 {total} 件", pageClassifier: "ページ目へ", page: "Page", prev: "Go to previous page", next: "Go to next page", currentPage: "page {pager}", prevPages: "Previous {pager} pages", nextPages: "Next {pager} pages" }, messagebox: { title: "メッセージ", confirm: "OK", cancel: "キャンセル", error: "正しくない入力" }, upload: { deleteTip: "Delキーを押して削除する", delete: "削除する", preview: "プレビュー", continue: "続行する" }, table: { emptyText: "データなし", confirmFilter: "確認", resetFilter: "初期化", clearFilter: "すべて", sumText: "合計" }, tour: { next: "次へ", previous: "前へ", finish: "ツアー終了" }, tree: { emptyText: "データなし" }, transfer: { noMatch: "データなし", noData: "データなし", titles: ["リスト 1", "リスト 2"], filterPlaceholder: "キーワードを入力", noCheckedFormat: "総計 {total} 件", hasCheckedFormat: "{checked}/{total} を選択した" }, image: { error: "失敗" }, pageHeader: { title: "戻る" }, popconfirm: { confirmButtonText: "はい", cancelButtonText: "いいえ" }, carousel: { leftArrow: "Carousel arrow left", rightArrow: "Carousel arrow right", indicator: "Carousel switch to index {index}" } } };

// node_modules/.pnpm/@mmt817+pixel-ui@1.6.0_vue@3.5.17_typescript@5.8.3_/node_modules/@mmt817/pixel-ui/dist/es/ConfigProvider-X2aqaPDz.js
var f3 = Symbol();
var g7 = ref();
function b5(e22, n22 = void 0) {
  const s2 = getCurrentInstance() ? inject(f3, g7) : g7;
  return e22 ? computed(() => {
    var _a;
    return ((_a = s2.value) == null ? void 0 : _a[e22]) ?? n22;
  }) : s2;
}
var x4 = (e22) => {
  var _a, _b;
  const o22 = (o32) => Tn(o32, (e22 == null ? void 0 : e22.extendsI18nMsg) ?? {});
  return Dn((e22 == null ? void 0 : e22.locale) ? { locale: ((_a = e22.locale) == null ? void 0 : _a.name) || "en", messages: o22({ en: e3, [(_b = e22.locale) == null ? void 0 : _b.name]: e22.locale }) } : { locale: "en", messages: o22({ en: e3 }) });
};
function C5(a22 = { locale: e3 }, r22, t2 = false) {
  const u22 = getCurrentInstance(), v22 = u22 ? b5() : void 0, p2 = (r22 == null ? void 0 : r22.provide) ?? (u22 ? provide : void 0);
  if (!p2) return void h3("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup()");
  const C22 = ref(unref(a22));
  watch(() => a22, (e22) => {
    const o22 = unref(e22);
    if (!(v22 == null ? void 0 : v22.value)) return o22;
    C22.value = Tn(v22.value, o22);
  }, { deep: true });
  const P22 = ref(x4(C22.value));
  return watch(() => C22.value, (e22) => P22.value = x4(e22), { deep: true }), p2(f3, C22), p2(Un, P22), r22 && r22.use(P22.value), !t2 && g7.value || (g7.value = C22.value), C22;
}
var P8 = e2(defineComponent({ name: "PxConfigProvider", __name: "ConfigProvider", props: { locale: {}, extendsI18nMsg: {} }, setup(e22) {
  const o22 = C5(e22);
  return (e32, s2) => renderSlot(e32.$slots, "default", { config: unref(o22) });
} }));

// node_modules/.pnpm/@mmt817+pixel-ui@1.6.0_vue@3.5.17_typescript@5.8.3_/node_modules/@mmt817/pixel-ui/dist/es/Overlay-DQI05AAU.js
var n4 = r2(defineComponent({ name: "PxOverlay", __name: "Overlay", props: { mask: { type: Boolean, default: true }, zIndex: { default: 2e3 }, overlayClass: {}, lockScroll: { type: Boolean, default: true }, color: {}, grid: { type: Boolean }, matte: { type: Boolean }, preset1: { type: Boolean } }, emits: ["click"], setup(e22, { emit: i22 }) {
  const c22 = e22, n22 = i22, m22 = (e32) => {
    n22("click", e32);
  };
  let p2 = 0;
  const y6 = () => {
    p2--, p2 <= 0 && (document.body.style.overflow = "");
  };
  return watch(() => c22.mask, (e32) => {
    return o22 = e32, void (c22.lockScroll && (o22 ? (p2++, 1 === p2 && (document.body.style.overflow = "hidden")) : y6()));
    var o22;
  }, { immediate: true }), onBeforeUnmount(() => {
    c22.lockScroll && y6();
  }), (e32, o22) => (openBlock(), createElementBlock("div", { class: normalizeClass(["px-overlay", [e32.overlayClass, { "is-grid-basic": e32.grid, "is-transparent": !e32.mask, "is-matte": e32.matte, "is-grid-preset-1": e32.preset1 }]]), style: normalizeStyle({ zIndex: e32.zIndex, backgroundColor: e32.color }), onClick: m22 }, [renderSlot(e32.$slots, "default", {}, void 0, true)], 6));
} }), [["__scopeId", "data-v-7317fb96"]]);
var m5 = e2(n4);

// node_modules/.pnpm/@mmt817+pixel-ui@1.6.0_vue@3.5.17_typescript@5.8.3_/node_modules/@mmt817/pixel-ui/dist/es/Input-CZvJmuwg.js
var j7 = { key: 0, class: "px-input__prepend" };
var F4 = { key: 0, class: "px-input__prefix" };
var R4 = ["id", "type", "disabled", "readonly", "autocomplete", "placeholder", "autofocus", "form"];
var z4 = { key: 1, class: "px-input__suffix" };
var M4 = { key: 1, class: "px-input__append" };
var U3 = ["id", "disabled", "readonly", "autocomplete", "placeholder", "autofocus", "form"];
var A5 = r2(defineComponent({ name: "PxInput", inheritAttrs: false, __name: "Input", props: { id: {}, modelValue: {}, type: { default: "text" }, size: { default: "default" }, disabled: { type: Boolean }, clearable: { type: Boolean }, showPassword: { type: Boolean }, placeholder: {}, readonly: { type: Boolean }, autocomplete: { default: "off" }, autofocus: { type: Boolean }, form: {} }, emits: ["update:modelValue", "input", "change", "focus", "blur", "clear"], setup(e22, { expose: P22, emit: C22 }) {
  const A22 = e22, q22 = C22, D22 = ref(A22.modelValue), E5 = ref(false), G6 = shallowRef(), H5 = shallowRef(), J4 = useAttrs(), K5 = computed(() => [J4.style]), L5 = computed(() => J4.class), N5 = computed(() => kn(J4, ["style", "class"])), O6 = computed(() => G6.value || H5.value), Q4 = computed(() => A22.disabled), { wrapperRef: S5, isFocused: T7, handleFocus: W4, handleBlur: X6 } = T2(O6, { afterBlur() {
  } }), Y6 = computed(() => A22.clearable && !!D22.value && !Q4.value && T7.value), Z5 = computed(() => "password" === A22.type && A22.showPassword && !Q4.value && !!D22.value), ee3 = function() {
    D22.value = "", Sn(["input", "change", "update:modelValue"], (e32) => q22(e32, "")), q22("clear");
  }, ae4 = () => {
    q22("update:modelValue", D22.value), q22("input", D22.value);
  }, le3 = () => {
    q22("change", D22.value);
  }, oe2 = () => {
    E5.value = !E5.value;
  };
  return watch(() => A22.modelValue, (e32) => {
    D22.value = e32;
  }), P22({ ref: O6, focus: async function() {
    var _a;
    await nextTick(), (_a = O6.value) == null ? void 0 : _a.focus();
  }, blur: function() {
    var _a;
    (_a = O6.value) == null ? void 0 : _a.blur();
  }, select: function() {
    var _a;
    (_a = O6.value) == null ? void 0 : _a.select();
  }, clear: ee3 }), (e32, a22) => (openBlock(), createElementBlock("div", { class: normalizeClass(["px-input", { [`px-input--${e32.type}`]: e32.type, [`px-input--${e32.size}`]: e32.size, "is-disabled": Q4.value, "is-prepend": e32.$slots.prepend, "is-append": e32.$slots.append, "is-prefix": e32.$slots.prefix, "is-suffix": e32.$slots.suffix, "is-focus": unref(T7), [`${L5.value}`]: L5.value }]), style: normalizeStyle(K5.value) }, ["textarea" !== e32.type ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [e32.$slots.prepend ? (openBlock(), createElementBlock("div", j7, [renderSlot(e32.$slots, "prepend", {}, void 0, true)])) : createCommentVNode("", true), createBaseVNode("div", { class: "px-input__wrapper", ref_key: "wrapperRef", ref: S5 }, [e32.$slots.prefix ? (openBlock(), createElementBlock("span", F4, [renderSlot(e32.$slots, "prefix", {}, void 0, true)])) : createCommentVNode("", true), withDirectives(createBaseVNode("input", mergeProps({ class: "px-input__inner", ref_key: "inputRef", ref: G6, id: unref(S2)().value, type: e32.showPassword ? E5.value ? "text" : "password" : e32.type, disabled: Q4.value, readonly: e32.readonly, autocomplete: e32.autocomplete, placeholder: e32.placeholder, autofocus: e32.autofocus, form: e32.form, "onUpdate:modelValue": a22[0] || (a22[0] = (e4) => D22.value = e4) }, N5.value, { onInput: ae4, onChange: le3, onFocus: a22[1] || (a22[1] = (...e4) => unref(W4) && unref(W4)(...e4)), onBlur: a22[2] || (a22[2] = (...e4) => unref(X6) && unref(X6)(...e4)) }), null, 16, R4), [[vModelDynamic, D22.value]]), e32.$slots.suffix || Y6.value || Z5.value ? (openBlock(), createElementBlock("span", z4, [renderSlot(e32.$slots, "suffix", {}, void 0, true), Y6.value ? (openBlock(), createBlock(c3, { key: 0, icon: "times-circle", class: "px-input__clear", onClick: ee3, onMousedown: withModifiers(unref(rt), ["prevent"]) }, null, 8, ["onMousedown"])) : createCommentVNode("", true), Z5.value && E5.value ? (openBlock(), createBlock(c3, { key: 1, icon: "eye", class: "px-input__password", onClick: oe2 })) : createCommentVNode("", true), Z5.value && !E5.value ? (openBlock(), createBlock(c3, { key: 2, icon: "eye-cross", class: "px-input__password", onClick: oe2 })) : createCommentVNode("", true)])) : createCommentVNode("", true)], 512), e32.$slots.append ? (openBlock(), createElementBlock("div", M4, [renderSlot(e32.$slots, "append", {}, void 0, true)])) : createCommentVNode("", true)], 64)) : withDirectives((openBlock(), createElementBlock("textarea", mergeProps({ key: 1, class: "px-textarea__wrapper", ref_key: "textareaRef", ref: H5, id: unref(S2)().value, disabled: Q4.value, readonly: e32.readonly, autocomplete: e32.autocomplete, placeholder: e32.placeholder, autofocus: e32.autofocus, form: e32.form, "onUpdate:modelValue": a22[3] || (a22[3] = (e4) => D22.value = e4) }, N5.value, { onInput: ae4, onChange: le3, onFocus: a22[4] || (a22[4] = (...e4) => unref(W4) && unref(W4)(...e4)), onBlur: a22[5] || (a22[5] = (...e4) => unref(X6) && unref(X6)(...e4)) }), null, 16, U3)), [[vModelText, D22.value]])], 6));
} }), [["__scopeId", "data-v-33d697f2"]]);
var q3 = ["small", "default", "large"];
var D4 = e2(A5);

// node_modules/.pnpm/@mmt817+pixel-ui@1.6.0_vue@3.5.17_typescript@5.8.3_/node_modules/@mmt817/pixel-ui/dist/es/Message-9rb4JaA-.js
var se2 = ["info", "primary", "success", "warning", "danger", "sakura", "error", "iron", "stamp"];
var ae3 = { class: "px-message__content" };
var ne2 = { key: 0, class: "px-message__close" };
var le2 = r2(defineComponent({ name: "PxMessage", __name: "Message", props: { id: {}, message: {}, type: { default: "info" }, icon: {}, duration: { default: 3e3 }, showClose: { type: Boolean }, center: { type: Boolean }, offset: { default: 10 }, zIndex: {}, transitionName: { default: "fade-up" }, onDestory: {} }, setup(e22, { expose: _22 }) {
  const B22 = e22, h22 = ref(false), k22 = ref(), C22 = computed(() => B22.icon ?? g2.get(B22.type) ?? "info-circle-solid"), w22 = ref(0), { topOffset: I22, bottomOffset: P22 } = F2({ getLastBottomOffset: rr(ue2, B22), offset: B22.offset, boxHeight: w22 }), T22 = computed(() => ({ top: d2(I22.value), zIndex: B22.zIndex }));
  let $22;
  const z22 = () => {
    0 !== B22.duration && ($22 = xn(L22, B22.duration));
  }, A22 = () => {
    clearTimeout($22);
  }, L22 = () => {
    h22.value = false;
  };
  return watch(h22, (e32) => {
    e32 || (w22.value = -B22.offset);
  }), y2(document, "keydown", (e32) => {
    const { code: o22 } = e32;
    "Escape" === o22 && L22();
  }), onMounted(() => {
    h22.value = true, z22();
  }), _22({ bottomOffset: P22, close: L22 }), (e32, o22) => (openBlock(), createBlock(Transition, { name: e32.transitionName, onEnter: o22[0] || (o22[0] = () => w22.value = k22.value.getBoundingClientRect().height), onAfterLeave: o22[1] || (o22[1] = (o32) => !h22.value && e32.onDestory()) }, { default: withCtx(() => [withDirectives(createBaseVNode("div", { class: normalizeClass(["px-message", { [`px-message--${e32.type}`]: e32.type, "is-close": e32.showClose, "text-center": e32.center }]), ref_key: "messageRef", ref: k22, style: normalizeStyle(T22.value), role: "alert", onMouseenter: A22, onMouseleave: z22 }, [createVNode(c3, { class: "px-message__icon", icon: C22.value }, null, 8, ["icon"]), createBaseVNode("div", ae3, [renderSlot(e32.$slots, "default", {}, () => [e32.message ? (openBlock(), createBlock(unref(m2), { key: 0, vNode: e32.message }, null, 8, ["vNode"])) : createCommentVNode("", true)], true)]), e32.showClose ? (openBlock(), createElementBlock("div", ne2, [createVNode(c3, { icon: "times-solid", onClick: withModifiers(L22, ["stop"]) })])) : createCommentVNode("", true)], 38), [[vShow, h22.value]])]), _: 3 }, 8, ["name"]));
} }), [["__scopeId", "data-v-28557a2c"]]);
var re3 = shallowReactive([]);
var { nextZIndex: ce2 } = R2();
var ie2 = { type: "info", duration: 3e3, offset: 10, transitionName: "fade-up" };
var pe2 = (e22) => {
  const o22 = !e22 || isVNode(e22) || Cn(e22) ? { message: e22 } : e22;
  return { ...ie2, ...o22 };
};
function ue2() {
  const e22 = On(re3, { id: this.id });
  return e22 <= 0 ? 0 : $e(re3, [e22 - 1, "vm", "exposed", "bottomOffset", "value"]);
}
var de2 = (e22 = {}) => ((e32) => {
  const o22 = S2().value, t2 = document.createElement("div"), s2 = { ...e32, id: o22, zIndex: ce2(), onDestory: () => {
    const e4 = On(re3, { id: o22 });
    -1 !== e4 && (re3.splice(e4, 1), render(null, t2));
  } }, a22 = h(le2, s2);
  render(a22, t2), document.body.appendChild(t2.firstElementChild);
  const n22 = a22.component, l22 = { close: () => n22.exposed.close() }, r22 = { props: s2, id: o22, vm: n22, vnode: a22, handler: l22 };
  return re3.push(r22), r22;
})(pe2(e22)).handler;
Sn(se2, (e22) => {
  Mn(de2, e22, (o22) => {
    const t2 = pe2(o22);
    return de2({ ...t2, type: e22 });
  });
}), de2.closeAll = (e22) => {
  Sn(re3, (o22) => {
    e22 ? o22.props.type === e22 && o22.handler.close() : o22.handler.close();
  });
};
var me2 = a2(de2, "$message");
var fe2 = { class: "px-message-box__title" };
var ge2 = { class: "px-message-box__content" };
var ye2 = { key: 1, class: "px-message-box__message" };
var xe2 = { class: "px-message-box__input" };
var ve2 = { class: "px-message-box__footer" };
var be2 = defineComponent({ name: "PxMessageBox", inheritAttrs: false, __name: "MessageBox", props: { visible: {}, doClose: {}, doAction: {}, destroy: {}, title: {}, message: {}, type: {}, boxType: { default: "" }, icon: {}, callback: {}, showClose: { type: Boolean, default: true }, beforeClose: {}, lockScroll: { type: Boolean, default: true }, showCancelButton: { type: Boolean }, showConfirmButton: { type: Boolean, default: true }, cancelButtonText: {}, confirmButtonText: {}, cancelButtonLoading: { type: Boolean }, confirmButtonLoading: { type: Boolean }, cancelButtonDisabled: { type: Boolean }, confirmButtonDisabled: { type: Boolean }, cancelButtonType: {}, confirmButtonType: { default: "primary" }, buttonSize: {}, roundButton: { type: Boolean, default: false }, showInput: { type: Boolean }, inputPlaceholder: { default: "Please input..." }, inputValue: { default: "" }, inputType: {}, center: { type: Boolean }, closeOnClickModal: { type: Boolean, default: true }, draggable: { type: Boolean }, overflow: { type: Boolean }, mask: { type: Boolean }, zIndex: {}, overlayClass: {}, color: {}, grid: { type: Boolean }, matte: { type: Boolean }, preset1: { type: Boolean } }, setup(e22) {
  const a22 = H2(), u22 = e22, { doAction: _22 } = u22, { nextZIndex: B22 } = R2(), h22 = ref(), k22 = ref(), M22 = ref(), O22 = S2();
  D2(h22, k22, computed(() => u22.draggable), computed(() => u22.overflow));
  const A22 = reactive({ ...u22, zIndex: B22() }), L22 = computed(() => !!A22.message), V22 = computed(() => A22.icon ?? g2.get(A22.type ?? "") ?? "info-circle-solid");
  watch(() => {
    var _a;
    return (_a = u22.visible) == null ? void 0 : _a.value;
  }, (e32) => {
    e32 && (A22.zIndex = B22()), "prompt" === u22.boxType && e32 && nextTick(() => {
      M22.value && M22.value.focus();
    });
  });
  const E22 = (e32) => {
    P(u22.beforeClose) ? u22.beforeClose(e32, A22, () => _22(e32, A22.inputValue)) : _22(e32, A22.inputValue);
  }, H22 = () => {
    u22.closeOnClickModal && E22("close");
  }, U22 = (e32) => {
    if ("textarea" !== A22.inputType) return e32.preventDefault(), E22("confirm");
  }, F22 = () => {
    E22("close");
  };
  return (e32, o22) => (openBlock(), createBlock(Transition, { name: "fade-in-linear", onAfterLeave: e32.destroy }, { default: withCtx(() => [withDirectives(createVNode(n4, { mask: "", "z-index": A22.zIndex, "overlay-class": A22.overlayClass, "lock-scroll": A22.lockScroll, color: A22.color, grid: A22.grid, matte: A22.matte, preset1: A22.preset1 }, { default: withCtx(() => [createBaseVNode("div", { role: "dialog", class: "px-overlay-message-box", onClick: H22 }, [createBaseVNode("div", { ref_key: "rootRef", ref: h22, class: normalizeClass(["px-message-box", { "is-center": A22.center, "is-draggable": A22.draggable, [`px-message-box--${A22.type}`]: A22.type }]), onClick: o22[5] || (o22[5] = withModifiers(() => {
  }, ["stop"])) }, [unref(En)(A22.title) ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", { key: 0, ref_key: "headerRef", ref: k22, class: normalizeClass(["px-message-box__header", { "show-close": A22.showClose }]) }, [createBaseVNode("div", fe2, [V22.value && A22.center ? (openBlock(), createBlock(c3, { key: 0, class: normalizeClass(["px-message-box__icon", { [`px-icon--${A22.type}`]: A22.type }]), icon: V22.value }, null, 8, ["class", "icon"])) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(A22.title), 1)]), e32.showClose ? (openBlock(), createElementBlock("button", { key: 0, class: "px-message-box__header-btn", onClick: withModifiers(F22, ["stop"]) }, [createVNode(c3, { icon: "times-solid" })])) : createCommentVNode("", true)], 2)), createBaseVNode("div", ge2, [V22.value && !A22.center && L22.value ? (openBlock(), createBlock(c3, { key: 0, class: normalizeClass(["px-message-box__icon", { [`px-icon--${A22.type}`]: A22.type }]), icon: V22.value }, null, 8, ["class", "icon"])) : createCommentVNode("", true), L22.value ? (openBlock(), createElementBlock("div", ye2, [renderSlot(e32.$slots, "default", {}, () => [(openBlock(), createBlock(resolveDynamicComponent(A22.showInput ? "label" : "p"), { for: A22.showInput ? unref(O22) : void 0 }, { default: withCtx(() => [createTextVNode(toDisplayString(A22.message), 1)]), _: 1 }, 8, ["for"]))], true)])) : createCommentVNode("", true)]), withDirectives(createBaseVNode("div", xe2, [createVNode(A5, { modelValue: A22.inputValue, "onUpdate:modelValue": o22[0] || (o22[0] = (e4) => A22.inputValue = e4), ref_key: "inputRef", ref: M22, placeholder: A22.inputPlaceholder, type: A22.inputType, onKeyup: withKeys(U22, ["enter"]) }, null, 8, ["modelValue", "placeholder", "type"])], 512), [[vShow, A22.showInput]]), createBaseVNode("div", ve2, [A22.showCancelButton ? (openBlock(), createBlock(P3, { key: 0, class: "px-message-box__footer-btn px-message-box__cancel-btn", type: A22.cancelButtonType, round: A22.roundButton, loading: A22.cancelButtonLoading, onClick: o22[1] || (o22[1] = (e4) => E22("cancel")), onKeydown: o22[2] || (o22[2] = withKeys(withModifiers((e4) => E22("cancel"), ["prevent"]), ["enter"])) }, { default: withCtx(() => [createTextVNode(toDisplayString(A22.cancelButtonText || unref(a22).t("el.messagebox.cancel")), 1)]), _: 1 }, 8, ["type", "round", "loading"])) : createCommentVNode("", true), withDirectives(createVNode(P3, { class: "px-message-box__footer-btn px-message-box__confirm-btn", type: A22.confirmButtonType ?? "primary", round: A22.roundButton, loading: A22.confirmButtonLoading, onClick: o22[3] || (o22[3] = (e4) => E22("confirm")), onKeydown: o22[4] || (o22[4] = withKeys(withModifiers((e4) => E22("confirm"), ["prevent"]), ["enter"])) }, { default: withCtx(() => [createTextVNode(toDisplayString(A22.confirmButtonText || unref(a22).t("el.messagebox.confirm")), 1)]), _: 1 }, 8, ["type", "round", "loading"]), [[vShow, A22.showConfirmButton]])])], 2)])]), _: 3 }, 8, ["z-index", "overlay-class", "lock-scroll", "color", "grid", "matte", "preset1"]), [[vShow, e32.visible.value]])]), _: 3 }, 8, ["onAfterLeave"]));
} });
var _e2 = r2(be2, [["__scopeId", "data-v-4138202f"]]);
var Be2 = /* @__PURE__ */ new Map();
function he2(e22) {
  let t2;
  return Cn(e22) || isVNode(e22) ? e22 = { message: e22 } : t2 = e22.callback, new Promise((s2, a22) => {
    const n22 = ((e32) => {
      const t3 = document.createElement("div"), s3 = ((e4, t4) => {
        const s4 = ref(false), a4 = P(e4 == null ? void 0 : e4.message) || isVNode(e4 == null ? void 0 : e4.message), n32 = createVNode(_e2, { ...e4, visible: s4 }, a4 ? { default: (l22 = e4.message, P(l22) ? l22 : () => l22) } : void 0);
        var l22;
        return render(n32, t4), document.body.appendChild(t4.firstElementChild), n32.component;
      })({ ...e32, doClose: () => {
        a32.visible.value = false;
      }, doAction: (o22, t4) => {
        const s4 = Be2.get(a32);
        let n32;
        nextTick(() => a32.doClose()), n32 = e32.showInput ? { value: t4, action: o22 } : o22, e32.callback ? e32.callback(n32) : "cancel" !== o22 && "close" !== o22 ? s4 == null ? void 0 : s4.resolve(n32) : s4 == null ? void 0 : s4.reject(o22);
      }, destroy: () => {
        render(null, t3), Be2.delete(a32);
      } }, t3), a32 = s3 == null ? void 0 : s3.proxy;
      return a32.visible.value = true, a32;
    })(e22);
    Be2.set(n22, { options: e22, callback: t2, resolve: s2, reject: a22 });
  });
}
var ke2 = { alert: { closeOnClickModal: false }, confirm: { showCancelButton: true }, prompt: { showCancelButton: true, showInput: true } };
Sn(["alert", "confirm", "prompt"], (e22) => {
  return Mn(he2, e22, (o22 = e22, (e32, t2, s2) => {
    let a22 = "";
    return w(t2) ? (s2 = t2, a22 = "") : a22 = Pn(t2) ? "" : t2, he2(be({ title: a22, message: e32, type: "", boxType: o22, ...ke2[o22] }, s2));
  }));
  var o22;
}), Mn(he2, "close", () => {
  Be2.forEach((e22, o22) => {
    o22.doClose();
  }), Be2.clear();
});
var Ce2 = ["confirm", "cancel", "close"];
var we2 = ["", "prompt", "alert", "confirm"];
var Ie2 = he2;
Mn(Ie2, "install", (e22) => {
  e22.config.globalProperties.$msgbox = he2, e22.config.globalProperties.$messagebox = he2, e22.config.globalProperties.$alert = he2.alert, e22.config.globalProperties.$confirm = he2.confirm, e22.config.globalProperties.$prompt = he2.prompt;
});

// node_modules/.pnpm/@mmt817+pixel-ui@1.6.0_vue@3.5.17_typescript@5.8.3_/node_modules/@mmt817/pixel-ui/dist/es/Notification-LNaHBKFd.js
var H4 = ["info", "primary", "success", "warning", "danger", "sakura", "error", "iron", "stamp"];
var T6 = ["top-right", "top-left", "bottom-right", "bottom-left"];
var Z3 = { class: "px-notification__text" };
var q4 = { class: "px-notification__title" };
var F5 = { class: "px-notification__content" };
var G4 = { key: 0, class: "px-notification__close" };
var J3 = r2(defineComponent({ name: "PxNotification", __name: "Notification", props: { title: {}, id: {}, zIndex: {}, position: { default: "top-right" }, type: { default: "info" }, message: {}, duration: { default: 3e3 }, showClose: { type: Boolean, default: true }, offset: { default: 20 }, transitionName: { default: "fade" }, icon: {}, onClick: {}, onClose: {}, onDestory: {} }, setup(t2, { expose: _22 }) {
  const C22 = t2, b22 = ref(false), k22 = ref(), N22 = computed(() => C22.icon ?? g2.get(C22.type) ?? "info-circle-solid"), w22 = ref(0), { topOffset: E22, bottomOffset: B22 } = F2({ getLastBottomOffset: rr(X4, C22), offset: C22.offset, boxHeight: w22 }), R22 = computed(() => C22.position.endsWith("right") ? "right" : "left"), $22 = computed(() => C22.position.startsWith("top") ? "top" : "bottom"), A22 = computed(() => ({ [$22.value]: d2(E22.value), zIndex: C22.zIndex }));
  let L22;
  function W22() {
    0 !== C22.duration && (L22 = xn(T22, C22.duration));
  }
  function H22() {
    clearTimeout(L22);
  }
  function T22() {
    var _a;
    b22.value = false, (_a = C22.onClose) == null ? void 0 : _a.call(C22);
  }
  return onMounted(() => {
    b22.value = true, W22();
  }), _22({ bottomOffset: B22, close: T22 }), (t3, o22) => (openBlock(), createBlock(Transition, { name: t3.transitionName, onEnter: o22[1] || (o22[1] = () => w22.value = k22.value.getBoundingClientRect().height), onAfterLeave: o22[2] || (o22[2] = (o32) => !b22.value && t3.onDestory()) }, { default: withCtx(() => [withDirectives(createBaseVNode("div", { class: normalizeClass(["px-notification", { [`px-notification--${t3.type}`]: t3.type, [R22.value]: true, "is-close": t3.showClose }]), ref_key: "notifyRef", ref: k22, style: normalizeStyle(A22.value), role: "alert", onClick: o22[0] || (o22[0] = (...o32) => t3.onClick && t3.onClick(...o32)), onMouseenter: H22, onMouseleave: W22 }, [createVNode(c3, { class: "px-notification__icon", icon: N22.value }, null, 8, ["icon"]), createBaseVNode("div", Z3, [createBaseVNode("div", q4, toDisplayString(t3.title), 1), createBaseVNode("div", F5, [renderSlot(t3.$slots, "default", {}, () => [t3.message ? (openBlock(), createBlock(unref(m2), { key: 0, vNode: t3.message }, null, 8, ["vNode"])) : createCommentVNode("", true)], true)])]), t3.showClose ? (openBlock(), createElementBlock("div", G4, [createVNode(c3, { icon: "times-solid", onClick: withModifiers(T22, ["stop"]) })])) : createCommentVNode("", true)], 38), [[vShow, b22.value]])]), _: 3 }, 8, ["name"]));
} }), [["__scopeId", "data-v-9b4ab871"]]);
var K4 = /* @__PURE__ */ new Map();
Sn(T6, (t2) => {
  K4.set(t2, shallowReactive([]));
});
var { nextZIndex: Q3 } = R2();
var S4 = { type: "info", duration: 3e3, offset: 20, transitionName: "fade", showClose: true };
var U4 = (t2) => {
  const o22 = !t2 || isVNode(t2) || Cn(t2) ? { message: t2 } : t2;
  return { ...S4, ...o22 };
};
var V4 = (t2) => K4.get(t2);
function X4() {
  const t2 = V4(this.position || "top-right"), o22 = On(t2, { id: this.id });
  return o22 <= 0 ? 0 : $e(t2, [o22 - 1, "vm", "exposed", "bottomOffset", "value"]);
}
var Y4 = function(t2 = {}) {
  return ((t3) => {
    const o22 = S2().value, e22 = document.createElement("div"), s2 = V4(t3.position || "top-right"), n22 = { ...t3, id: o22, zIndex: Q3(), onDestory: () => {
      const t4 = On(s2, { id: o22 });
      -1 !== t4 && (s2.splice(t4, 1), render(null, e22));
    } }, i22 = h(J3, n22);
    render(i22, e22), document.body.appendChild(e22.firstElementChild);
    const a22 = i22.component, l22 = { close: () => a22.exposed.close() }, r22 = { props: n22, id: o22, vm: a22, vnode: i22, handler: l22 };
    return s2.push(r22), r22;
  })(U4(t2)).handler;
};
Sn(H4, (t2) => {
  Mn(Y4, t2, (o22) => {
    const e22 = U4(o22);
    return Y4({ ...e22, type: t2 });
  });
}), Y4.closeAll = (t2) => {
  K4.forEach((o22) => {
    Sn(o22, (o32) => {
      t2 ? o32.props.type === t2 && o32.handler.close() : o32.handler.close();
    });
  });
};
var tt2 = a2(Y4, "$notify");

// node_modules/.pnpm/@mmt817+pixel-ui@1.6.0_vue@3.5.17_typescript@5.8.3_/node_modules/@mmt817/pixel-ui/dist/es/worklets-D1uttkWg.js
var g8 = "data:text/javascript;base64,Y29uc3QgZ2V0SW50ID0gKHByb3BzLCBuYW1lLCBmYWxsYmFjayA9IDApID0+IHsKICAgIHJldHVybiBwYXJzZUludChwcm9wcy5nZXQobmFtZSk/LnRvU3RyaW5nKCkgfHwgYCR7ZmFsbGJhY2t9YCk7Cn07CmNvbnN0IGdldFN0ciA9IChwcm9wcywgbmFtZSwgZmFsbGJhY2sgPSAnJykgPT4gewogICAgcmV0dXJuIHByb3BzLmdldChuYW1lKT8udG9TdHJpbmcoKS50cmltKCkgfHwgZmFsbGJhY2s7Cn07CmNvbnN0IFBJWEVMX0JPQVJEX1BST1BTID0gWwogICAgJy0tcHgtY29ybmVyLXNpemUnLAogICAgJy0tcHgtYm9hcmQtY29sb3InLAogICAgJy0tcHgtc2hhZG93LWNvbG9yJywKICAgICctLXB4LWNvbG9yLTEnLAogICAgJy0tcHgtY29sb3ItMicsCiAgICAnLS1weC1ibG9jay1zaXplJywKICAgICctLXB4LWJvcmRlci1jb2xvcicKXTsKZXhwb3J0IGNsYXNzIFBpeGVsQm9hcmQgewogICAgc3RhdGljIGdldCBpbnB1dFByb3BlcnRpZXMoKSB7CiAgICAgICAgcmV0dXJuIFBJWEVMX0JPQVJEX1BST1BTOwogICAgfQogICAgcGFpbnQoY3R4LCBzaXplLCBwcm9wcykgewogICAgICAgIGNvbnN0IGNvcm5lclNpemUgPSBnZXRJbnQocHJvcHMsICctLXB4LWNvcm5lci1zaXplJywgNik7CiAgICAgICAgY29uc3QgYm9hcmRDb2xvciA9IGdldFN0cihwcm9wcywgJy0tcHgtYm9hcmQtY29sb3InLCAnIzNBNDU2NycpOwogICAgICAgIGNvbnN0IHNoYWRvd0NvbG9yID0gZ2V0U3RyKHByb3BzLCAnLS1weC1zaGFkb3ctY29sb3InLCAnIzI1MkQ0NicpOwogICAgICAgIGNvbnN0IGNvbG9yMSA9IGdldFN0cihwcm9wcywgJy0tcHgtY29sb3ItMScsICcjOEY5REI1Jyk7CiAgICAgICAgY29uc3QgY29sb3IyID0gZ2V0U3RyKHByb3BzLCAnLS1weC1jb2xvci0yJywgJyNCNEMwRDInKTsKICAgICAgICBjb25zdCBibG9ja1NpemUgPSBnZXRJbnQocHJvcHMsICctLXB4LWJsb2NrLXNpemUnLCA5KTsKICAgICAgICBjb25zdCBib3JkZXJDb2xvciA9IGdldFN0cihwcm9wcywgJy0tcHgtYm9yZGVyLWNvbG9yJywgJyMwMDAwMDAnKTsKICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHNpemU7CiAgICAgICAgLy8gYm9hcmQg5YaF6YOo6ImyCiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGJvYXJkQ29sb3I7CiAgICAgICAgY3R4LmZpbGxSZWN0KDQgKiBibG9ja1NpemUsIDQgKiBibG9ja1NpemUsIHdpZHRoIC0gOCAqIGJsb2NrU2l6ZSwgaGVpZ2h0IC0gOCAqIGJsb2NrU2l6ZSk7CiAgICAgICAgLy8g5Zub6KeS57uY5Yi2CiAgICAgICAgY29uc3QgY29ybmVySW5uZXIgPSBjb3JuZXJTaXplIC0gMTsKICAgICAgICAvLyDlt6bkuIoKICAgICAgICBjdHguZmlsbFN0eWxlID0gYm9yZGVyQ29sb3I7CiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIGNvcm5lclNpemUgKiBibG9ja1NpemUsIGJsb2NrU2l6ZSk7CiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIGJsb2NrU2l6ZSwgY29ybmVyU2l6ZSAqIGJsb2NrU2l6ZSk7CiAgICAgICAgY3R4LmZpbGxSZWN0KGJsb2NrU2l6ZSwgY29ybmVyU2l6ZSAqIGJsb2NrU2l6ZSwgY29ybmVyU2l6ZSAqIGJsb2NrU2l6ZSwgYmxvY2tTaXplKTsKICAgICAgICBjdHguZmlsbFJlY3QoY29ybmVyU2l6ZSAqIGJsb2NrU2l6ZSwgYmxvY2tTaXplLCBibG9ja1NpemUsIGNvcm5lclNpemUgKiBibG9ja1NpemUpOwogICAgICAgIC8vIOWGheinkue7mOWItgogICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjI7CiAgICAgICAgY3R4LmZpbGxSZWN0KGJsb2NrU2l6ZSwgYmxvY2tTaXplLCBjb3JuZXJJbm5lciAqIGJsb2NrU2l6ZSwgY29ybmVySW5uZXIgKiBibG9ja1NpemUpOwogICAgICAgIGN0eC5maWxsU3R5bGUgPSBib2FyZENvbG9yOwogICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGNvcm5lcklubmVyOyBpKyspIHsKICAgICAgICAgICAgY3R4LmZpbGxSZWN0KGkgKiBibG9ja1NpemUsIGkgKiBibG9ja1NpemUsIGJsb2NrU2l6ZSwgYmxvY2tTaXplKTsKICAgICAgICB9CiAgICAgICAgY3R4LmZpbGxSZWN0KGNvcm5lcklubmVyICogYmxvY2tTaXplLCBibG9ja1NpemUsIGJsb2NrU2l6ZSwgYmxvY2tTaXplKTsKICAgICAgICBjdHguZmlsbFN0eWxlID0gY29sb3IxOwogICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGNvcm5lcklubmVyIC0gMTsgaSsrKSB7CiAgICAgICAgICAgIGN0eC5maWxsUmVjdChpICogYmxvY2tTaXplLCAoaSArIDEpICogYmxvY2tTaXplLCBibG9ja1NpemUsIGJsb2NrU2l6ZSk7CiAgICAgICAgICAgIGN0eC5maWxsUmVjdCgoaSArIDEpICogYmxvY2tTaXplLCBpICogYmxvY2tTaXplLCBibG9ja1NpemUsIGJsb2NrU2l6ZSk7CiAgICAgICAgfQogICAgICAgIGN0eC5maWxsUmVjdChibG9ja1NpemUsIGNvcm5lcklubmVyICogYmxvY2tTaXplLCBibG9ja1NpemUsIGJsb2NrU2l6ZSk7CiAgICAgICAgLy8g5Y+z5LiKCiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGJvcmRlckNvbG9yOwogICAgICAgIGN0eC5maWxsUmVjdCh3aWR0aCAtIGNvcm5lclNpemUgKiBibG9ja1NpemUsIDAsIGNvcm5lclNpemUgKiBibG9ja1NpemUsIGJsb2NrU2l6ZSk7CiAgICAgICAgY3R4LmZpbGxSZWN0KHdpZHRoIC0gYmxvY2tTaXplLCAwLCBibG9ja1NpemUsIGNvcm5lclNpemUgKiBibG9ja1NpemUpOwogICAgICAgIGN0eC5maWxsUmVjdCh3aWR0aCAtIGNvcm5lclNpemUgKiBibG9ja1NpemUgLSBibG9ja1NpemUsIGNvcm5lclNpemUgKiBibG9ja1NpemUsIGNvcm5lclNpemUgKiBibG9ja1NpemUsIGJsb2NrU2l6ZSk7CiAgICAgICAgY3R4LmZpbGxSZWN0KHdpZHRoIC0gY29ybmVyU2l6ZSAqIGJsb2NrU2l6ZSAtIGJsb2NrU2l6ZSwgYmxvY2tTaXplLCBibG9ja1NpemUsIGNvcm5lclNpemUgKiBibG9ja1NpemUpOwogICAgICAgIC8vIOWGheinkue7mOWItgogICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjI7CiAgICAgICAgY3R4LmZpbGxSZWN0KHdpZHRoIC0gY29ybmVyU2l6ZSAqIGJsb2NrU2l6ZSwgYmxvY2tTaXplLCBjb3JuZXJJbm5lciAqIGJsb2NrU2l6ZSwgY29ybmVySW5uZXIgKiBibG9ja1NpemUpOwogICAgICAgIGN0eC5maWxsU3R5bGUgPSBib2FyZENvbG9yOwogICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGNvcm5lcklubmVyOyBpKyspIHsKICAgICAgICAgICAgY3R4LmZpbGxSZWN0KHdpZHRoIC0gKGkgKyAxKSAqIGJsb2NrU2l6ZSwgaSAqIGJsb2NrU2l6ZSwgYmxvY2tTaXplLCBibG9ja1NpemUpOwogICAgICAgIH0KICAgICAgICBjdHguZmlsbFJlY3Qod2lkdGggLSBjb3JuZXJTaXplICogYmxvY2tTaXplLCBibG9ja1NpemUsIGJsb2NrU2l6ZSwgYmxvY2tTaXplKTsKICAgICAgICBjdHguZmlsbFN0eWxlID0gY29sb3IxOwogICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGNvcm5lcklubmVyIC0gMTsgaSsrKSB7CiAgICAgICAgICAgIGN0eC5maWxsUmVjdCh3aWR0aCAtIChpICsgMikgKiBibG9ja1NpemUsIGkgKiBibG9ja1NpemUsIGJsb2NrU2l6ZSwgYmxvY2tTaXplKTsKICAgICAgICAgICAgY3R4LmZpbGxSZWN0KHdpZHRoIC0gKGkgKyAxKSAqIGJsb2NrU2l6ZSwgKGkgKyAxKSAqIGJsb2NrU2l6ZSwgYmxvY2tTaXplLCBibG9ja1NpemUpOwogICAgICAgIH0KICAgICAgICBjdHguZmlsbFJlY3Qod2lkdGggLSAyICogYmxvY2tTaXplLCBjb3JuZXJJbm5lciAqIGJsb2NrU2l6ZSwgYmxvY2tTaXplLCBibG9ja1NpemUpOwogICAgICAgIC8vIOW3puS4iwogICAgICAgIGN0eC5maWxsU3R5bGUgPSBib3JkZXJDb2xvcjsKICAgICAgICBjdHguZmlsbFJlY3QoMCwgaGVpZ2h0IC0gYmxvY2tTaXplLCBjb3JuZXJTaXplICogYmxvY2tTaXplLCBibG9ja1NpemUpOwogICAgICAgIGN0eC5maWxsUmVjdCgwLCBoZWlnaHQgLSBjb3JuZXJTaXplICogYmxvY2tTaXplLCBibG9ja1NpemUsIGNvcm5lclNpemUgKiBibG9ja1NpemUpOwogICAgICAgIGN0eC5maWxsUmVjdChibG9ja1NpemUsIGhlaWdodCAtIGNvcm5lclNpemUgKiBibG9ja1NpemUgLSBibG9ja1NpemUsIGNvcm5lclNpemUgKiBibG9ja1NpemUsIGJsb2NrU2l6ZSk7CiAgICAgICAgY3R4LmZpbGxSZWN0KGNvcm5lclNpemUgKiBibG9ja1NpemUsIGhlaWdodCAtIGNvcm5lclNpemUgKiBibG9ja1NpemUgLSBibG9ja1NpemUsIGJsb2NrU2l6ZSwgY29ybmVyU2l6ZSAqIGJsb2NrU2l6ZSk7CiAgICAgICAgLy8g5YaF6KeS57uY5Yi2CiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yMjsKICAgICAgICBjdHguZmlsbFJlY3QoYmxvY2tTaXplLCBoZWlnaHQgLSBjb3JuZXJTaXplICogYmxvY2tTaXplLCBjb3JuZXJJbm5lciAqIGJsb2NrU2l6ZSwgY29ybmVySW5uZXIgKiBibG9ja1NpemUpOwogICAgICAgIGN0eC5maWxsU3R5bGUgPSBib2FyZENvbG9yOwogICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGNvcm5lcklubmVyOyBpKyspIHsKICAgICAgICAgICAgY3R4LmZpbGxSZWN0KGkgKiBibG9ja1NpemUsIGhlaWdodCAtIChpICsgMSkgKiBibG9ja1NpemUsIGJsb2NrU2l6ZSwgYmxvY2tTaXplKTsKICAgICAgICB9CiAgICAgICAgY3R4LmZpbGxSZWN0KGNvcm5lcklubmVyICogYmxvY2tTaXplLCBoZWlnaHQgLSAyICogYmxvY2tTaXplLCBibG9ja1NpemUsIGJsb2NrU2l6ZSk7CiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yMTsKICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBjb3JuZXJJbm5lciAtIDE7IGkrKykgewogICAgICAgICAgICBjdHguZmlsbFJlY3QoaSAqIGJsb2NrU2l6ZSwgaGVpZ2h0IC0gKGkgKyAyKSAqIGJsb2NrU2l6ZSwgYmxvY2tTaXplLCBibG9ja1NpemUpOwogICAgICAgICAgICBjdHguZmlsbFJlY3QoKGkgKyAxKSAqIGJsb2NrU2l6ZSwgaGVpZ2h0IC0gKGkgKyAxKSAqIGJsb2NrU2l6ZSwgYmxvY2tTaXplLCBibG9ja1NpemUpOwogICAgICAgIH0KICAgICAgICBjdHguZmlsbFJlY3QoYmxvY2tTaXplLCBoZWlnaHQgLSBjb3JuZXJTaXplICogYmxvY2tTaXplLCBibG9ja1NpemUsIGJsb2NrU2l6ZSk7CiAgICAgICAgLy8g5Y+z5LiLCiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGJvcmRlckNvbG9yOwogICAgICAgIGN0eC5maWxsUmVjdCh3aWR0aCAtIGNvcm5lclNpemUgKiBibG9ja1NpemUsIGhlaWdodCAtIGJsb2NrU2l6ZSwgY29ybmVyU2l6ZSAqIGJsb2NrU2l6ZSwgYmxvY2tTaXplKTsKICAgICAgICBjdHguZmlsbFJlY3Qod2lkdGggLSBibG9ja1NpemUsIGhlaWdodCAtIGNvcm5lclNpemUgKiBibG9ja1NpemUsIGJsb2NrU2l6ZSwgY29ybmVyU2l6ZSAqIGJsb2NrU2l6ZSk7CiAgICAgICAgY3R4LmZpbGxSZWN0KHdpZHRoIC0gY29ybmVyU2l6ZSAqIGJsb2NrU2l6ZSAtIGJsb2NrU2l6ZSwgaGVpZ2h0IC0gY29ybmVyU2l6ZSAqIGJsb2NrU2l6ZSAtIGJsb2NrU2l6ZSwgY29ybmVyU2l6ZSAqIGJsb2NrU2l6ZSwgYmxvY2tTaXplKTsKICAgICAgICBjdHguZmlsbFJlY3Qod2lkdGggLSBjb3JuZXJTaXplICogYmxvY2tTaXplIC0gYmxvY2tTaXplLCBoZWlnaHQgLSBjb3JuZXJTaXplICogYmxvY2tTaXplIC0gYmxvY2tTaXplLCBibG9ja1NpemUsIGNvcm5lclNpemUgKiBibG9ja1NpemUpOwogICAgICAgIC8vIOWGheinkue7mOWItgogICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjI7CiAgICAgICAgY3R4LmZpbGxSZWN0KHdpZHRoIC0gY29ybmVyU2l6ZSAqIGJsb2NrU2l6ZSwgaGVpZ2h0IC0gY29ybmVyU2l6ZSAqIGJsb2NrU2l6ZSwgY29ybmVySW5uZXIgKiBibG9ja1NpemUsIGNvcm5lcklubmVyICogYmxvY2tTaXplKTsKICAgICAgICBjdHguZmlsbFN0eWxlID0gYm9hcmRDb2xvcjsKICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBjb3JuZXJJbm5lcjsgaSsrKSB7CiAgICAgICAgICAgIGN0eC5maWxsUmVjdCh3aWR0aCAtIChpICsgMSkgKiBibG9ja1NpemUsIGhlaWdodCAtIChpICsgMSkgKiBibG9ja1NpemUsIGJsb2NrU2l6ZSwgYmxvY2tTaXplKTsKICAgICAgICB9CiAgICAgICAgY3R4LmZpbGxSZWN0KHdpZHRoIC0gY29ybmVyU2l6ZSAqIGJsb2NrU2l6ZSwgaGVpZ2h0IC0gMiAqIGJsb2NrU2l6ZSwgYmxvY2tTaXplLCBibG9ja1NpemUpOwogICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjE7CiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gY29ybmVySW5uZXIgLSAxOyBpKyspIHsKICAgICAgICAgICAgY3R4LmZpbGxSZWN0KHdpZHRoIC0gKGkgKyAyKSAqIGJsb2NrU2l6ZSwgaGVpZ2h0IC0gKGkgKyAxKSAqIGJsb2NrU2l6ZSwgYmxvY2tTaXplLCBibG9ja1NpemUpOwogICAgICAgICAgICBjdHguZmlsbFJlY3Qod2lkdGggLSAoaSArIDEpICogYmxvY2tTaXplLCBoZWlnaHQgLSAoaSArIDIpICogYmxvY2tTaXplLCBibG9ja1NpemUsIGJsb2NrU2l6ZSk7CiAgICAgICAgfQogICAgICAgIGN0eC5maWxsUmVjdCh3aWR0aCAtIDIgKiBibG9ja1NpemUsIGhlaWdodCAtIGNvcm5lclNpemUgKiBibG9ja1NpemUsIGJsb2NrU2l6ZSwgYmxvY2tTaXplKTsKICAgICAgICAvLyDovrnmoYbnu5jliLYKICAgICAgICAvLyDkuIrovrnmoYYKICAgICAgICBjdHguZmlsbFN0eWxlID0gYm9yZGVyQ29sb3I7CiAgICAgICAgY3R4LmZpbGxSZWN0KGNvcm5lclNpemUgKiBibG9ja1NpemUsIGJsb2NrU2l6ZSwgd2lkdGggLSAyICogY29ybmVyU2l6ZSAqIGJsb2NrU2l6ZSwgYmxvY2tTaXplKTsKICAgICAgICBjdHguZmlsbFJlY3QoY29ybmVyU2l6ZSAqIGJsb2NrU2l6ZSwgMyAqIGJsb2NrU2l6ZSwgd2lkdGggLSAyICogY29ybmVyU2l6ZSAqIGJsb2NrU2l6ZSwgYmxvY2tTaXplKTsKICAgICAgICBjdHguZmlsbFN0eWxlID0gY29sb3IxOwogICAgICAgIGN0eC5maWxsUmVjdCgoY29ybmVyU2l6ZSArIDEpICogYmxvY2tTaXplLCAyICogYmxvY2tTaXplLCB3aWR0aCAtIDIgKiAoY29ybmVyU2l6ZSArIDEpICogYmxvY2tTaXplLCBibG9ja1NpemUpOwogICAgICAgIGNvbnN0IGdhcFNpemUgPSAzICogYmxvY2tTaXplOwogICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjI7CiAgICAgICAgZm9yIChsZXQgeCA9IChjb3JuZXJTaXplICsgMSkgKiBibG9ja1NpemU7IHggPCB3aWR0aCAtIChjb3JuZXJTaXplICsgMSkgKiBibG9ja1NpemU7IHggKz0gZ2FwU2l6ZSAqIDIpIHsKICAgICAgICAgICAgY3R4LmZpbGxSZWN0KHgsIDIgKiBibG9ja1NpemUsIGdhcFNpemUsIGJsb2NrU2l6ZSk7CiAgICAgICAgfQogICAgICAgIGN0eC5maWxsU3R5bGUgPSBib3JkZXJDb2xvcjsKICAgICAgICBjdHguZmlsbFJlY3Qod2lkdGggLSBjb3JuZXJTaXplICogYmxvY2tTaXplIC0gYmxvY2tTaXplLCBibG9ja1NpemUsIGJsb2NrU2l6ZSwgY29ybmVyU2l6ZSAqIGJsb2NrU2l6ZSk7CiAgICAgICAgLy8g5LiL6L655qGGCiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGJvcmRlckNvbG9yOwogICAgICAgIGN0eC5maWxsUmVjdChjb3JuZXJTaXplICogYmxvY2tTaXplLCBoZWlnaHQgLSAyICogYmxvY2tTaXplLCB3aWR0aCAtIDIgKiBjb3JuZXJTaXplICogYmxvY2tTaXplLCBibG9ja1NpemUpOwogICAgICAgIGN0eC5maWxsUmVjdChjb3JuZXJTaXplICogYmxvY2tTaXplLCBoZWlnaHQgLSA0ICogYmxvY2tTaXplLCB3aWR0aCAtIDIgKiBjb3JuZXJTaXplICogYmxvY2tTaXplLCBibG9ja1NpemUpOwogICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjE7CiAgICAgICAgY3R4LmZpbGxSZWN0KChjb3JuZXJTaXplICsgMSkgKiBibG9ja1NpemUsIGhlaWdodCAtIDMgKiBibG9ja1NpemUsIHdpZHRoIC0gMiAqIChjb3JuZXJTaXplICsgMSkgKiBibG9ja1NpemUsIGJsb2NrU2l6ZSk7CiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yMjsKICAgICAgICBmb3IgKGxldCB4ID0gKGNvcm5lclNpemUgKyAxKSAqIGJsb2NrU2l6ZTsgeCA8IHdpZHRoIC0gKGNvcm5lclNpemUgKyAxKSAqIGJsb2NrU2l6ZTsgeCArPSBnYXBTaXplICogMikgewogICAgICAgICAgICBjdHguZmlsbFJlY3QoeCwgaGVpZ2h0IC0gMyAqIGJsb2NrU2l6ZSwgZ2FwU2l6ZSwgYmxvY2tTaXplKTsKICAgICAgICB9CiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGJvcmRlckNvbG9yOwogICAgICAgIGN0eC5maWxsUmVjdCh3aWR0aCAtIGNvcm5lclNpemUgKiBibG9ja1NpemUgLSBibG9ja1NpemUsIGhlaWdodCAtIGNvcm5lclNpemUgKiBibG9ja1NpemUgLSBibG9ja1NpemUsIGJsb2NrU2l6ZSwgY29ybmVyU2l6ZSAqIGJsb2NrU2l6ZSk7CiAgICAgICAgLy8g5bem6L655qGGCiAgICAgICAgY29uc3Qgc2lkZWJvcmRlckxlbiA9IGhlaWdodCAtIDIgKiAoY29ybmVyU2l6ZSArIDEpICogYmxvY2tTaXplOwogICAgICAgIGNvbnN0IHNob3J0UGFydCA9IE1hdGgubWF4KDMgKiBibG9ja1NpemUsIE1hdGguZmxvb3Ioc2lkZWJvcmRlckxlbiAvIDcpKTsKICAgICAgICBjb25zdCBsb25nUGFydCA9IHNpZGVib3JkZXJMZW4gLSAyICogc2hvcnRQYXJ0OwogICAgICAgIGN0eC5maWxsU3R5bGUgPSBib3JkZXJDb2xvcjsKICAgICAgICBjdHguZmlsbFJlY3QoMCwgKGNvcm5lclNpemUgKyAxKSAqIGJsb2NrU2l6ZSArIHNob3J0UGFydCwgYmxvY2tTaXplLCBsb25nUGFydCk7CiAgICAgICAgY3R4LmZpbGxSZWN0KDIgKiBibG9ja1NpemUsIChjb3JuZXJTaXplICsgMSkgKiBibG9ja1NpemUgKyBzaG9ydFBhcnQsIGJsb2NrU2l6ZSwgbG9uZ1BhcnQpOwogICAgICAgIGN0eC5maWxsUmVjdChibG9ja1NpemUsIChjb3JuZXJTaXplICsgMSkgKiBibG9ja1NpemUsIGJsb2NrU2l6ZSwgc2hvcnRQYXJ0KTsKICAgICAgICBjdHguZmlsbFJlY3QoMyAqIGJsb2NrU2l6ZSwgKGNvcm5lclNpemUgKyAxKSAqIGJsb2NrU2l6ZSwgYmxvY2tTaXplLCBzaG9ydFBhcnQpOwogICAgICAgIGN0eC5maWxsUmVjdChibG9ja1NpemUsIGhlaWdodCAtIChjb3JuZXJTaXplICsgMSkgKiBibG9ja1NpemUgLSBzaG9ydFBhcnQsIGJsb2NrU2l6ZSwgc2hvcnRQYXJ0KTsKICAgICAgICBjdHguZmlsbFJlY3QoMyAqIGJsb2NrU2l6ZSwgaGVpZ2h0IC0gKGNvcm5lclNpemUgKyAxKSAqIGJsb2NrU2l6ZSAtIHNob3J0UGFydCwgYmxvY2tTaXplLCBzaG9ydFBhcnQpOwogICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjE7CiAgICAgICAgY3R4LmZpbGxSZWN0KDIgKiBibG9ja1NpemUsIChjb3JuZXJTaXplICsgMSkgKiBibG9ja1NpemUsIGJsb2NrU2l6ZSwgc2hvcnRQYXJ0KTsKICAgICAgICBjdHguZmlsbFJlY3QoMiAqIGJsb2NrU2l6ZSwgaGVpZ2h0IC0gKGNvcm5lclNpemUgKyAxKSAqIGJsb2NrU2l6ZSAtIHNob3J0UGFydCwgYmxvY2tTaXplLCBzaG9ydFBhcnQpOwogICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjI7CiAgICAgICAgY3R4LmZpbGxSZWN0KGJsb2NrU2l6ZSwgKGNvcm5lclNpemUgKyAxKSAqIGJsb2NrU2l6ZSArIHNob3J0UGFydCwgYmxvY2tTaXplLCBsb25nUGFydCk7CiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yMTsKICAgICAgICBsZXQgeVN0YXJ0ID0gKGNvcm5lclNpemUgKyAxKSAqIGJsb2NrU2l6ZSArIHNob3J0UGFydDsKICAgICAgICBmb3IgKGxldCB5ID0geVN0YXJ0OyB5IDwgeVN0YXJ0ICsgbG9uZ1BhcnQ7IHkgKz0gZ2FwU2l6ZSAqIDIpIHsKICAgICAgICAgICAgY3R4LmZpbGxSZWN0KGJsb2NrU2l6ZSwgeSwgYmxvY2tTaXplLCBnYXBTaXplKTsKICAgICAgICB9CiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGJvcmRlckNvbG9yOwogICAgICAgIGN0eC5maWxsUmVjdChibG9ja1NpemUsIGhlaWdodCAtIChjb3JuZXJTaXplICsgMSkgKiBibG9ja1NpemUgLSBzaG9ydFBhcnQsIGJsb2NrU2l6ZSwgc2hvcnRQYXJ0KTsKICAgICAgICAvLyDlj7PovrnmoYYKICAgICAgICBjdHguZmlsbFN0eWxlID0gYm9yZGVyQ29sb3I7CiAgICAgICAgY3R4LmZpbGxSZWN0KHdpZHRoIC0gYmxvY2tTaXplLCAoY29ybmVyU2l6ZSArIDEpICogYmxvY2tTaXplICsgc2hvcnRQYXJ0LCBibG9ja1NpemUsIGxvbmdQYXJ0KTsKICAgICAgICBjdHguZmlsbFJlY3Qod2lkdGggLSAzICogYmxvY2tTaXplLCAoY29ybmVyU2l6ZSArIDEpICogYmxvY2tTaXplICsgc2hvcnRQYXJ0LCBibG9ja1NpemUsIGxvbmdQYXJ0KTsKICAgICAgICBjdHguZmlsbFJlY3Qod2lkdGggLSAyICogYmxvY2tTaXplLCAoY29ybmVyU2l6ZSArIDEpICogYmxvY2tTaXplLCBibG9ja1NpemUsIHNob3J0UGFydCk7CiAgICAgICAgY3R4LmZpbGxSZWN0KHdpZHRoIC0gNCAqIGJsb2NrU2l6ZSwgKGNvcm5lclNpemUgKyAxKSAqIGJsb2NrU2l6ZSwgYmxvY2tTaXplLCBzaG9ydFBhcnQpOwogICAgICAgIGN0eC5maWxsUmVjdCh3aWR0aCAtIDIgKiBibG9ja1NpemUsIGhlaWdodCAtIChjb3JuZXJTaXplICsgMSkgKiBibG9ja1NpemUgLSBzaG9ydFBhcnQsIGJsb2NrU2l6ZSwgc2hvcnRQYXJ0KTsKICAgICAgICBjdHguZmlsbFJlY3Qod2lkdGggLSA0ICogYmxvY2tTaXplLCBoZWlnaHQgLSAoY29ybmVyU2l6ZSArIDEpICogYmxvY2tTaXplIC0gc2hvcnRQYXJ0LCBibG9ja1NpemUsIHNob3J0UGFydCk7CiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yMTsKICAgICAgICBjdHguZmlsbFJlY3Qod2lkdGggLSAzICogYmxvY2tTaXplLCAoY29ybmVyU2l6ZSArIDEpICogYmxvY2tTaXplLCBibG9ja1NpemUsIHNob3J0UGFydCk7CiAgICAgICAgY3R4LmZpbGxSZWN0KHdpZHRoIC0gMyAqIGJsb2NrU2l6ZSwgaGVpZ2h0IC0gKGNvcm5lclNpemUgKyAxKSAqIGJsb2NrU2l6ZSAtIHNob3J0UGFydCwgYmxvY2tTaXplLCBzaG9ydFBhcnQpOwogICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjI7CiAgICAgICAgY3R4LmZpbGxSZWN0KHdpZHRoIC0gMiAqIGJsb2NrU2l6ZSwgKGNvcm5lclNpemUgKyAxKSAqIGJsb2NrU2l6ZSArIHNob3J0UGFydCwgYmxvY2tTaXplLCBsb25nUGFydCk7CiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yMTsKICAgICAgICB5U3RhcnQgPSAoY29ybmVyU2l6ZSArIDEpICogYmxvY2tTaXplICsgc2hvcnRQYXJ0OwogICAgICAgIGZvciAobGV0IHkgPSB5U3RhcnQ7IHkgPCB5U3RhcnQgKyBsb25nUGFydDsgeSArPSBnYXBTaXplICogMikgewogICAgICAgICAgICBjdHguZmlsbFJlY3Qod2lkdGggLSAyICogYmxvY2tTaXplLCB5LCBibG9ja1NpemUsIGdhcFNpemUpOwogICAgICAgIH0KICAgICAgICBjdHguZmlsbFN0eWxlID0gYm9yZGVyQ29sb3I7CiAgICAgICAgY3R4LmZpbGxSZWN0KHdpZHRoIC0gMiAqIGJsb2NrU2l6ZSwgaGVpZ2h0IC0gKGNvcm5lclNpemUgKyAxKSAqIGJsb2NrU2l6ZSAtIHNob3J0UGFydCwgYmxvY2tTaXplLCBzaG9ydFBhcnQpOwogICAgICAgIC8vIOmYtOW9see7mOWItgogICAgICAgIGN0eC5maWxsU3R5bGUgPSBzaGFkb3dDb2xvcjsKICAgICAgICAvLyDkuIrkvqcKICAgICAgICBjdHguZmlsbFJlY3QoKGNvcm5lclNpemUgKyAxKSAqIGJsb2NrU2l6ZSwgNCAqIGJsb2NrU2l6ZSwgd2lkdGggLSAyICogKGNvcm5lclNpemUgKyAxKSAqIGJsb2NrU2l6ZSwgYmxvY2tTaXplKTsKICAgICAgICAvLyDkuIvkvqcKICAgICAgICBjdHguZmlsbFJlY3QoKGNvcm5lclNpemUgKyAxKSAqIGJsb2NrU2l6ZSwgaGVpZ2h0IC0gNSAqIGJsb2NrU2l6ZSwgd2lkdGggLSAyICogKGNvcm5lclNpemUgKyAxKSAqIGJsb2NrU2l6ZSwgYmxvY2tTaXplKTsKICAgICAgICAvLyDlt6bkvqcKICAgICAgICBjdHguZmlsbFJlY3QoNCAqIGJsb2NrU2l6ZSwgKGNvcm5lclNpemUgKyAxKSAqIGJsb2NrU2l6ZSwgYmxvY2tTaXplLCBzaG9ydFBhcnQpOwogICAgICAgIGN0eC5maWxsUmVjdCg0ICogYmxvY2tTaXplLCBoZWlnaHQgLSAoY29ybmVyU2l6ZSArIDEpICogYmxvY2tTaXplIC0gc2hvcnRQYXJ0LCBibG9ja1NpemUsIHNob3J0UGFydCk7CiAgICAgICAgY3R4LmZpbGxSZWN0KDMgKiBibG9ja1NpemUsIChjb3JuZXJTaXplICsgMSkgKiBibG9ja1NpemUgKyBzaG9ydFBhcnQsIGJsb2NrU2l6ZSwgbG9uZ1BhcnQpOwogICAgICAgIC8vIOWPs+S+pwogICAgICAgIGN0eC5maWxsUmVjdCh3aWR0aCAtIDUgKiBibG9ja1NpemUsIChjb3JuZXJTaXplICsgMSkgKiBibG9ja1NpemUsIGJsb2NrU2l6ZSwgc2hvcnRQYXJ0KTsKICAgICAgICBjdHguZmlsbFJlY3Qod2lkdGggLSA1ICogYmxvY2tTaXplLCBoZWlnaHQgLSAoY29ybmVyU2l6ZSArIDEpICogYmxvY2tTaXplIC0gc2hvcnRQYXJ0LCBibG9ja1NpemUsIHNob3J0UGFydCk7CiAgICAgICAgY3R4LmZpbGxSZWN0KHdpZHRoIC0gNCAqIGJsb2NrU2l6ZSwgKGNvcm5lclNpemUgKyAxKSAqIGJsb2NrU2l6ZSArIHNob3J0UGFydCwgYmxvY2tTaXplLCBsb25nUGFydCk7CiAgICAgICAgLy8g6L656KeS6Zi05b2x5aSE55CGCiAgICAgICAgY3R4LmZpbGxSZWN0KDQgKiBibG9ja1NpemUsIChjb3JuZXJTaXplICsgMSkgKiBibG9ja1NpemUsIChjb3JuZXJTaXplIC0gMikgKiBibG9ja1NpemUsIGJsb2NrU2l6ZSk7CiAgICAgICAgY3R4LmZpbGxSZWN0KDQgKiBibG9ja1NpemUsIGhlaWdodCAtIChjb3JuZXJTaXplICsgMikgKiBibG9ja1NpemUsIChjb3JuZXJTaXplIC0gMikgKiBibG9ja1NpemUsIGJsb2NrU2l6ZSk7CiAgICAgICAgY3R4LmZpbGxSZWN0KChjb3JuZXJTaXplICsgMSkgKiBibG9ja1NpemUsIDQgKiBibG9ja1NpemUsIGJsb2NrU2l6ZSwgKGNvcm5lclNpemUgLSAyKSAqIGJsb2NrU2l6ZSk7CiAgICAgICAgY3R4LmZpbGxSZWN0KChjb3JuZXJTaXplICsgMSkgKiBibG9ja1NpemUsIGhlaWdodCAtIChjb3JuZXJTaXplICsgMikgKiBibG9ja1NpemUsIGJsb2NrU2l6ZSwgKGNvcm5lclNpemUgLSAyKSAqIGJsb2NrU2l6ZSk7CiAgICAgICAgY3R4LmZpbGxSZWN0KHdpZHRoIC0gKGNvcm5lclNpemUgKyAyKSAqIGJsb2NrU2l6ZSwgNCAqIGJsb2NrU2l6ZSwgYmxvY2tTaXplLCAoY29ybmVyU2l6ZSAtIDIpICogYmxvY2tTaXplKTsKICAgICAgICBjdHguZmlsbFJlY3Qod2lkdGggLSAoY29ybmVyU2l6ZSArIDIpICogYmxvY2tTaXplLCBoZWlnaHQgLSAoY29ybmVyU2l6ZSArIDIpICogYmxvY2tTaXplLCBibG9ja1NpemUsIChjb3JuZXJTaXplIC0gMikgKiBibG9ja1NpemUpOwogICAgICAgIGN0eC5maWxsUmVjdCh3aWR0aCAtIChjb3JuZXJTaXplICsgMikgKiBibG9ja1NpemUsIChjb3JuZXJTaXplICsgMSkgKiBibG9ja1NpemUsIChjb3JuZXJTaXplIC0gMikgKiBibG9ja1NpemUsIGJsb2NrU2l6ZSk7CiAgICAgICAgY3R4LmZpbGxSZWN0KHdpZHRoIC0gKGNvcm5lclNpemUgKyAyKSAqIGJsb2NrU2l6ZSwgaGVpZ2h0IC0gKGNvcm5lclNpemUgKyAyKSAqIGJsb2NrU2l6ZSwgKGNvcm5lclNpemUgLSAyKSAqIGJsb2NrU2l6ZSwgYmxvY2tTaXplKTsKICAgIH0KfQpleHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJQaXhlbEJvYXJkKCkgewogICAgaWYgKHR5cGVvZiByZWdpc3RlclBhaW50ICE9PSAndW5kZWZpbmVkJykgewogICAgICAgIHJlZ2lzdGVyUGFpbnQoJ3BpeGVsYm9hcmQnLCBQaXhlbEJvYXJkKTsKICAgIH0KfQpyZWdpc3RlclBpeGVsQm9hcmQoKTsK";
var I6 = "data:text/javascript;base64,Y29uc3QgZ2V0SW50ID0gKHByb3BzLCBuYW1lLCBmYWxsYmFjayA9IDApID0+IHsKICAgIHJldHVybiBwYXJzZUludChwcm9wcy5nZXQobmFtZSk/LnRvU3RyaW5nKCkgfHwgYCR7ZmFsbGJhY2t9YCk7Cn07CmNvbnN0IGdldFN0ciA9IChwcm9wcywgbmFtZSwgZmFsbGJhY2sgPSAnJykgPT4gewogICAgcmV0dXJuIHByb3BzLmdldChuYW1lKT8udG9TdHJpbmcoKS50cmltKCkgfHwgZmFsbGJhY2s7Cn07CmNvbnN0IFBJWEVMX0JPWF9QUk9QUyA9IFsKICAgIGAtLXB4LWJvcmRlcmAsCiAgICBgLS1weC1ib3JkZXItdGAsCiAgICBgLS1weC1ib3JkZXItcmAsCiAgICBgLS1weC1ib3JkZXItYmAsCiAgICBgLS1weC1ib3JkZXItbGAsCiAgICBgLS1weC1ib3JkZXItcmFkaXVzYCwKICAgIGAtLXB4LWJvcmRlci1yYWRpdXMtbHRgLAogICAgYC0tcHgtYm9yZGVyLXJhZGl1cy1ydGAsCiAgICBgLS1weC1ib3JkZXItcmFkaXVzLWxiYCwKICAgIGAtLXB4LWJvcmRlci1yYWRpdXMtcmJgLAogICAgYC0tcHgtYm9yZGVyLWNvbG9yYCwKICAgIGAtLXB4LWJnLWNvbG9yYCwKICAgIGAtLXB4LWJnLXNoYWRvdy1ib3JkZXJgLAogICAgYC0tcHgtYmctc2hhZG93LWNvbG9yYCwKICAgIGAtLXB4LWJnLXNoYWRvdy1wb3NpdGlvbmAsCiAgICBgLS1weC1idXR0b24tZ3JvdXAtZmxhZ2AsCiAgICBgLS1weC1idXR0b24tZ3JvdXAtZmlyc3RgLAogICAgYC0tcHgtYnV0dG9uLWdyb3VwLWxhc3RgLAogICAgYC0tcHgtYnV0dG9uLXNpbmdsZWAKXTsKZXhwb3J0IGNsYXNzIFBpeGVsQm94IHsKICAgIHN0YXRpYyBnZXQgaW5wdXRQcm9wZXJ0aWVzKCkgewogICAgICAgIHJldHVybiBQSVhFTF9CT1hfUFJPUFM7CiAgICB9CiAgICBwYWludChjdHgsIHNpemUsIHByb3BzKSB7CiAgICAgICAgY29uc3QgcGJCb3JkZXIgPSBnZXRJbnQocHJvcHMsICctLXB4LWJvcmRlcicpICogMjsKICAgICAgICBsZXQgcGJCb3JkZXJSYWRpdXMgPSBnZXRJbnQocHJvcHMsICctLXB4LWJvcmRlci1yYWRpdXMnKTsKICAgICAgICBjb25zdCBwYkJhY2tncm91bmRTaGFkb3dCb3JkZXIgPSBnZXRJbnQocHJvcHMsICctLXB4LWJnLXNoYWRvdy1ib3JkZXInKSAqIDI7CiAgICAgICAgY29uc3QgcGJCYWNrZ3JvdW5kU2hhZG93UG9zaXRpb24gPSBnZXRTdHIocHJvcHMsICctLXB4LWJnLXNoYWRvdy1wb3NpdGlvbicpOwogICAgICAgIGNvbnN0IHBiQm9yZGVyQ29sb3IgPSBnZXRTdHIocHJvcHMsICctLXB4LWJvcmRlci1jb2xvcicpOwogICAgICAgIGNvbnN0IHBiQmFja2dyb3VuZENvbG9yID0gZ2V0U3RyKHByb3BzLCAnLS1weC1iZy1jb2xvcicpOwogICAgICAgIGNvbnN0IHBiQmFja2dyb3VuZFNoYWRvd0NvbG9yID0gZ2V0U3RyKHByb3BzLCAnLS1weC1iZy1zaGFkb3ctY29sb3InKTsKICAgICAgICAvLyBidXR0b24tZ3JvdXAgYm9yZGVyLXJhZGl1cyBjb250cm9sCiAgICAgICAgY29uc3QgbHQgPSBnZXRJbnQocHJvcHMsICctLXB4LWJvcmRlci1yYWRpdXMtbHQnKTsKICAgICAgICBjb25zdCBydCA9IGdldEludChwcm9wcywgJy0tcHgtYm9yZGVyLXJhZGl1cy1ydCcpOwogICAgICAgIGNvbnN0IGxiID0gZ2V0SW50KHByb3BzLCAnLS1weC1ib3JkZXItcmFkaXVzLWxiJyk7CiAgICAgICAgY29uc3QgcmIgPSBnZXRJbnQocHJvcHMsICctLXB4LWJvcmRlci1yYWRpdXMtcmInKTsKICAgICAgICAvLyBidXR0b24tZ3JvdXAgYm9yZGVyLXdpZHRoIGNvbnRyb2wKICAgICAgICBjb25zdCBwYkJvcmRlclQgPSBnZXRJbnQocHJvcHMsICctLXB4LWJvcmRlci10Jyk7CiAgICAgICAgY29uc3QgcGJCb3JkZXJSID0gZ2V0SW50KHByb3BzLCAnLS1weC1ib3JkZXItcicpOwogICAgICAgIGNvbnN0IHBiQm9yZGVyQiA9IGdldEludChwcm9wcywgJy0tcHgtYm9yZGVyLWInKTsKICAgICAgICBjb25zdCBwYkJvcmRlckwgPSBnZXRJbnQocHJvcHMsICctLXB4LWJvcmRlci1sJyk7CiAgICAgICAgY29uc3QgYnV0dG9uR3JvdXBGbGFnID0gZ2V0SW50KHByb3BzLCAnLS1weC1idXR0b24tZ3JvdXAtZmxhZycpOwogICAgICAgIGNvbnN0IGJ1dHRvbkdyb3VwRmlyc3QgPSBnZXRJbnQocHJvcHMsICctLXB4LWJ1dHRvbi1ncm91cC1maXJzdCcpOwogICAgICAgIGNvbnN0IGJ1dHRvbkdyb3VwTGFzdCA9IGdldEludChwcm9wcywgJy0tcHgtYnV0dG9uLWdyb3VwLWxhc3QnKTsKICAgICAgICBjb25zdCBidXR0b25TaW5nbGUgPSBnZXRJbnQocHJvcHMsICctLXB4LWJ1dHRvbi1zaW5nbGUnKTsKICAgICAgICBjdHguZmlsbFN0eWxlID0gcGJCYWNrZ3JvdW5kQ29sb3I7CiAgICAgICAgY29uc3Qgc3RhcnRZID0gcGJCb3JkZXIgLyAyOwogICAgICAgIGNvbnN0IGNvbnRlbnRIZWlnaHQgPSBzaXplLmhlaWdodCAtIHBiQm9yZGVyOwogICAgICAgIC8vIGJ1dHRvbiDmlbTkvZPog4zmma/ljLrln58KICAgICAgICBsZXQgc3RhcnRYOwogICAgICAgIGxldCBjb250ZW50V2lkdGg7CiAgICAgICAgaWYgKGJ1dHRvbkdyb3VwRmxhZyB8fCBidXR0b25Hcm91cExhc3QpIHsKICAgICAgICAgICAgc3RhcnRYID0gMDsKICAgICAgICAgICAgY29udGVudFdpZHRoID0gc2l6ZS53aWR0aCAtIHBiQm9yZGVyIC8gMjsKICAgICAgICB9CiAgICAgICAgZWxzZSB7CiAgICAgICAgICAgIHN0YXJ0WCA9IHBiQm9yZGVyIC8gMjsKICAgICAgICAgICAgY29udGVudFdpZHRoID0gc2l6ZS53aWR0aCAtIHBiQm9yZGVyOwogICAgICAgIH0KICAgICAgICBjdHguZmlsbFJlY3Qoc3RhcnRYLCBzdGFydFksIGNvbnRlbnRXaWR0aCwgY29udGVudEhlaWdodCk7CiAgICAgICAgY3R4LmZpbGwoKTsKICAgICAgICAvLyBidXR0b24g5L6n6L656Zi05b2xCiAgICAgICAgaWYgKHBiQmFja2dyb3VuZFNoYWRvd0JvcmRlciAhPSAwKSB7CiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTsKICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gcGJCYWNrZ3JvdW5kU2hhZG93Q29sb3I7CiAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSBwYkJhY2tncm91bmRTaGFkb3dCb3JkZXIgLyAyOwogICAgICAgICAgICBpZiAocGJCb3JkZXJSYWRpdXMgPiAyICYmIE1hdGguZmxvb3Ioc2l6ZS5oZWlnaHQpIDw9IDQwKSB7CiAgICAgICAgICAgICAgICBzd2l0Y2ggKHBiQmFja2dyb3VuZFNoYWRvd1Bvc2l0aW9uKSB7CiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYm90dG9tLXJpZ2h0JzoKICAgICAgICAgICAgICAgICAgICAgICAgLyogQm90dG9tIExpbmUgICovCiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5tb3ZlVG8oMCwgc2l6ZS5oZWlnaHQgLQogICAgICAgICAgICAgICAgICAgICAgICAgICAgcGJCb3JkZXIgLyAyIC0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBiQmFja2dyb3VuZFNoYWRvd0JvcmRlciAvIDIgKwogICAgICAgICAgICAgICAgICAgICAgICAgICAgcGJCYWNrZ3JvdW5kU2hhZG93Qm9yZGVyIC8gNCk7CiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5saW5lVG8oc2l6ZS53aWR0aCAtIHBiQm9yZGVyIC8gMiwgc2l6ZS5oZWlnaHQgLQogICAgICAgICAgICAgICAgICAgICAgICAgICAgcGJCb3JkZXIgLyAyIC0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBiQmFja2dyb3VuZFNoYWRvd0JvcmRlciAvIDIgKwogICAgICAgICAgICAgICAgICAgICAgICAgICAgcGJCYWNrZ3JvdW5kU2hhZG93Qm9yZGVyIC8gNCk7CiAgICAgICAgICAgICAgICAgICAgICAgIC8qIFJpZ2h0IExpbmUgKi8KICAgICAgICAgICAgICAgICAgICAgICAgY3R4Lm1vdmVUbyhzaXplLndpZHRoIC0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBiQm9yZGVyIC0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBiQmFja2dyb3VuZFNoYWRvd0JvcmRlciAvIDIgKwogICAgICAgICAgICAgICAgICAgICAgICAgICAgcGJCYWNrZ3JvdW5kU2hhZG93Qm9yZGVyIC8gNCwgcGJCb3JkZXIgLyAyKTsKICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVUbyhzaXplLndpZHRoIC0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBiQm9yZGVyIC0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBiQmFja2dyb3VuZFNoYWRvd0JvcmRlciAvIDIgKwogICAgICAgICAgICAgICAgICAgICAgICAgICAgcGJCYWNrZ3JvdW5kU2hhZG93Qm9yZGVyIC8gNCwgc2l6ZS5oZWlnaHQgLSBwYkJvcmRlciAvIDIpOwogICAgICAgICAgICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgICAgICAgICBjYXNlICdib3R0b20tbGVmdCc6CiAgICAgICAgICAgICAgICAgICAgICAgIC8qIEJvdHRvbSBMaW5lICAqLwogICAgICAgICAgICAgICAgICAgICAgICBjdHgubW92ZVRvKHBiQm9yZGVyIC8gMiwgc2l6ZS5oZWlnaHQgLQogICAgICAgICAgICAgICAgICAgICAgICAgICAgcGJCb3JkZXIgLyAyIC0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBiQmFja2dyb3VuZFNoYWRvd0JvcmRlciAvIDIgKwogICAgICAgICAgICAgICAgICAgICAgICAgICAgcGJCYWNrZ3JvdW5kU2hhZG93Qm9yZGVyIC8gNCk7CiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5saW5lVG8oc2l6ZS53aWR0aCAtIHBiQm9yZGVyIC8gMiwgc2l6ZS5oZWlnaHQgLQogICAgICAgICAgICAgICAgICAgICAgICAgICAgcGJCb3JkZXIgLyAyIC0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBiQmFja2dyb3VuZFNoYWRvd0JvcmRlciAvIDIgKwogICAgICAgICAgICAgICAgICAgICAgICAgICAgcGJCYWNrZ3JvdW5kU2hhZG93Qm9yZGVyIC8gNCk7CiAgICAgICAgICAgICAgICAgICAgICAgIC8qIExlZnQgTGluZSAqLwogICAgICAgICAgICAgICAgICAgICAgICBjdHgubW92ZVRvKChidXR0b25Hcm91cEZpcnN0IHx8IGJ1dHRvblNpbmdsZSA/IHBiQm9yZGVyIDogMCkgKwogICAgICAgICAgICAgICAgICAgICAgICAgICAgcGJCYWNrZ3JvdW5kU2hhZG93Qm9yZGVyIC8gMiAtCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYkJhY2tncm91bmRTaGFkb3dCb3JkZXIgLyA0LCBwYkJvcmRlciAvIDIpOwogICAgICAgICAgICAgICAgICAgICAgICBjdHgubGluZVRvKChidXR0b25Hcm91cEZpcnN0IHx8IGJ1dHRvblNpbmdsZSA/IHBiQm9yZGVyIDogMCkgKwogICAgICAgICAgICAgICAgICAgICAgICAgICAgcGJCYWNrZ3JvdW5kU2hhZG93Qm9yZGVyIC8gMiAtCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYkJhY2tncm91bmRTaGFkb3dCb3JkZXIgLyA0LCBzaXplLmhlaWdodCAtIHBiQm9yZGVyIC8gMik7CiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RvcC1yaWdodCc6CiAgICAgICAgICAgICAgICAgICAgICAgIC8qIHRvcCBMaW5lICAqLwogICAgICAgICAgICAgICAgICAgICAgICBjdHgubW92ZVRvKDAsIHBiQm9yZGVyIC8gMiArCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYkJhY2tncm91bmRTaGFkb3dCb3JkZXIgLyAyIC0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBiQmFja2dyb3VuZFNoYWRvd0JvcmRlciAvIDQpOwogICAgICAgICAgICAgICAgICAgICAgICBjdHgubGluZVRvKHNpemUud2lkdGggLSBwYkJvcmRlciAvIDIsIHBiQm9yZGVyIC8gMiArCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYkJhY2tncm91bmRTaGFkb3dCb3JkZXIgLyAyIC0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBiQmFja2dyb3VuZFNoYWRvd0JvcmRlciAvIDQpOwogICAgICAgICAgICAgICAgICAgICAgICAvKiBSaWdodCBMaW5lICovCiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5tb3ZlVG8oc2l6ZS53aWR0aCAtCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYkJvcmRlciAtCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYkJhY2tncm91bmRTaGFkb3dCb3JkZXIgLyAyICsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBiQmFja2dyb3VuZFNoYWRvd0JvcmRlciAvIDQsIHBiQm9yZGVyIC8gMik7CiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5saW5lVG8oc2l6ZS53aWR0aCAtCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYkJvcmRlciAtCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYkJhY2tncm91bmRTaGFkb3dCb3JkZXIgLyAyICsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBiQmFja2dyb3VuZFNoYWRvd0JvcmRlciAvIDQsIHNpemUuaGVpZ2h0IC0gcGJCb3JkZXIgLyAyKTsKICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgICAgICAgICAgY2FzZSAndG9wLWxlZnQnOgogICAgICAgICAgICAgICAgICAgICAgICAvKiB0b3AgTGluZSAgKi8KICAgICAgICAgICAgICAgICAgICAgICAgY3R4Lm1vdmVUbygwLCBwYkJvcmRlciAvIDIgKwogICAgICAgICAgICAgICAgICAgICAgICAgICAgcGJCYWNrZ3JvdW5kU2hhZG93Qm9yZGVyIC8gMiAtCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYkJhY2tncm91bmRTaGFkb3dCb3JkZXIgLyA0KTsKICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVUbyhzaXplLndpZHRoIC0gcGJCb3JkZXIgLyAyLCBwYkJvcmRlciAvIDIgKwogICAgICAgICAgICAgICAgICAgICAgICAgICAgcGJCYWNrZ3JvdW5kU2hhZG93Qm9yZGVyIC8gMiAtCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYkJhY2tncm91bmRTaGFkb3dCb3JkZXIgLyA0KTsKICAgICAgICAgICAgICAgICAgICAgICAgLyogTGVmdCBMaW5lICovCiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5tb3ZlVG8oKGJ1dHRvbkdyb3VwRmlyc3QgfHwgYnV0dG9uU2luZ2xlID8gcGJCb3JkZXIgOiAwKSArCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYkJhY2tncm91bmRTaGFkb3dCb3JkZXIgLyAyIC0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBiQmFja2dyb3VuZFNoYWRvd0JvcmRlciAvIDQsIHBiQm9yZGVyIC8gMik7CiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5saW5lVG8oKGJ1dHRvbkdyb3VwRmlyc3QgfHwgYnV0dG9uU2luZ2xlID8gcGJCb3JkZXIgOiAwKSArCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYkJhY2tncm91bmRTaGFkb3dCb3JkZXIgLyAyIC0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBiQmFja2dyb3VuZFNoYWRvd0JvcmRlciAvIDQsIHNpemUuaGVpZ2h0IC0gcGJCb3JkZXIgLyAyKTsKICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDoKICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgICAgZWxzZSB7CiAgICAgICAgICAgICAgICBzd2l0Y2ggKHBiQmFja2dyb3VuZFNoYWRvd1Bvc2l0aW9uKSB7CiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYm90dG9tLXJpZ2h0JzoKICAgICAgICAgICAgICAgICAgICAgICAgLyogQm90dG9tIExpbmUgICovCiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5tb3ZlVG8oMCwgc2l6ZS5oZWlnaHQgLQogICAgICAgICAgICAgICAgICAgICAgICAgICAgcGJCb3JkZXIgLyAyIC0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBiQmFja2dyb3VuZFNoYWRvd0JvcmRlciAvIDIgKwogICAgICAgICAgICAgICAgICAgICAgICAgICAgcGJCYWNrZ3JvdW5kU2hhZG93Qm9yZGVyIC8gNCk7CiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5saW5lVG8oc2l6ZS53aWR0aCAtIHBiQm9yZGVyIC8gMiwgc2l6ZS5oZWlnaHQgLQogICAgICAgICAgICAgICAgICAgICAgICAgICAgcGJCb3JkZXIgLyAyIC0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBiQmFja2dyb3VuZFNoYWRvd0JvcmRlciAvIDIgKwogICAgICAgICAgICAgICAgICAgICAgICAgICAgcGJCYWNrZ3JvdW5kU2hhZG93Qm9yZGVyIC8gNCk7CiAgICAgICAgICAgICAgICAgICAgICAgIC8qIFJpZ2h0IExpbmUgKi8KICAgICAgICAgICAgICAgICAgICAgICAgY3R4Lm1vdmVUbyhzaXplLndpZHRoIC0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBiQm9yZGVyIC8gMiAtCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYkJhY2tncm91bmRTaGFkb3dCb3JkZXIgLyAyICsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBiQmFja2dyb3VuZFNoYWRvd0JvcmRlciAvIDQsIHBiQm9yZGVyIC8gMik7CiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5saW5lVG8oc2l6ZS53aWR0aCAtCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYkJvcmRlciAvIDIgLQogICAgICAgICAgICAgICAgICAgICAgICAgICAgcGJCYWNrZ3JvdW5kU2hhZG93Qm9yZGVyIC8gMiArCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYkJhY2tncm91bmRTaGFkb3dCb3JkZXIgLyA0LCBzaXplLmhlaWdodCAtIHBiQm9yZGVyIC8gMik7CiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICAgICAgICAgIGNhc2UgJ2JvdHRvbS1sZWZ0JzoKICAgICAgICAgICAgICAgICAgICAgICAgLyogQm90dG9tIExpbmUgICovCiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5tb3ZlVG8ocGJCb3JkZXIgLyAyLCBzaXplLmhlaWdodCAtCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYkJvcmRlciAvIDIgLQogICAgICAgICAgICAgICAgICAgICAgICAgICAgcGJCYWNrZ3JvdW5kU2hhZG93Qm9yZGVyIC8gMiArCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYkJhY2tncm91bmRTaGFkb3dCb3JkZXIgLyA0KTsKICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVUbyhzaXplLndpZHRoIC0gcGJCb3JkZXIgLyAyLCBzaXplLmhlaWdodCAtCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYkJvcmRlciAvIDIgLQogICAgICAgICAgICAgICAgICAgICAgICAgICAgcGJCYWNrZ3JvdW5kU2hhZG93Qm9yZGVyIC8gMiArCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYkJhY2tncm91bmRTaGFkb3dCb3JkZXIgLyA0KTsKICAgICAgICAgICAgICAgICAgICAgICAgLyogTGVmdCBMaW5lICovCiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5tb3ZlVG8oKGJ1dHRvbkdyb3VwRmlyc3QgfHwgYnV0dG9uU2luZ2xlID8gcGJCb3JkZXIgLyAyIDogMCkgKwogICAgICAgICAgICAgICAgICAgICAgICAgICAgcGJCYWNrZ3JvdW5kU2hhZG93Qm9yZGVyIC8gMiAtCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYkJhY2tncm91bmRTaGFkb3dCb3JkZXIgLyA0LCBwYkJvcmRlciAvIDIpOwogICAgICAgICAgICAgICAgICAgICAgICBjdHgubGluZVRvKChidXR0b25Hcm91cEZpcnN0IHx8IGJ1dHRvblNpbmdsZSA/IHBiQm9yZGVyIC8gMiA6IDApICsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBiQmFja2dyb3VuZFNoYWRvd0JvcmRlciAvIDIgLQogICAgICAgICAgICAgICAgICAgICAgICAgICAgcGJCYWNrZ3JvdW5kU2hhZG93Qm9yZGVyIC8gNCwgc2l6ZS5oZWlnaHQgLSBwYkJvcmRlciAvIDIpOwogICAgICAgICAgICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgICAgICAgICBjYXNlICd0b3AtcmlnaHQnOgogICAgICAgICAgICAgICAgICAgICAgICAvKiB0b3AgTGluZSAgKi8KICAgICAgICAgICAgICAgICAgICAgICAgY3R4Lm1vdmVUbygwLCBwYkJvcmRlciAvIDIgKwogICAgICAgICAgICAgICAgICAgICAgICAgICAgcGJCYWNrZ3JvdW5kU2hhZG93Qm9yZGVyIC8gMiAtCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYkJhY2tncm91bmRTaGFkb3dCb3JkZXIgLyA0KTsKICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVUbyhzaXplLndpZHRoIC0gcGJCb3JkZXIgLyAyLCBwYkJvcmRlciAvIDIgKwogICAgICAgICAgICAgICAgICAgICAgICAgICAgcGJCYWNrZ3JvdW5kU2hhZG93Qm9yZGVyIC8gMiAtCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYkJhY2tncm91bmRTaGFkb3dCb3JkZXIgLyA0KTsKICAgICAgICAgICAgICAgICAgICAgICAgLyogUmlnaHQgTGluZSAqLwogICAgICAgICAgICAgICAgICAgICAgICBjdHgubW92ZVRvKHNpemUud2lkdGggLQogICAgICAgICAgICAgICAgICAgICAgICAgICAgcGJCb3JkZXIgLyAyIC0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBiQmFja2dyb3VuZFNoYWRvd0JvcmRlciAvIDIgKwogICAgICAgICAgICAgICAgICAgICAgICAgICAgcGJCYWNrZ3JvdW5kU2hhZG93Qm9yZGVyIC8gNCwgcGJCb3JkZXIgLyAyKTsKICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVUbyhzaXplLndpZHRoIC0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBiQm9yZGVyIC8gMiAtCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYkJhY2tncm91bmRTaGFkb3dCb3JkZXIgLyAyICsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBiQmFja2dyb3VuZFNoYWRvd0JvcmRlciAvIDQsIHNpemUuaGVpZ2h0IC0gcGJCb3JkZXIgLyAyKTsKICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgICAgICAgICAgY2FzZSAndG9wLWxlZnQnOgogICAgICAgICAgICAgICAgICAgICAgICAvKiB0b3AgTGluZSAgKi8KICAgICAgICAgICAgICAgICAgICAgICAgY3R4Lm1vdmVUbygwLCBwYkJvcmRlciAvIDIgKwogICAgICAgICAgICAgICAgICAgICAgICAgICAgcGJCYWNrZ3JvdW5kU2hhZG93Qm9yZGVyIC8gMiAtCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYkJhY2tncm91bmRTaGFkb3dCb3JkZXIgLyA0KTsKICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVUbyhzaXplLndpZHRoIC0gcGJCb3JkZXIgLyAyLCBwYkJvcmRlciAvIDIgKwogICAgICAgICAgICAgICAgICAgICAgICAgICAgcGJCYWNrZ3JvdW5kU2hhZG93Qm9yZGVyIC8gMiAtCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYkJhY2tncm91bmRTaGFkb3dCb3JkZXIgLyA0KTsKICAgICAgICAgICAgICAgICAgICAgICAgLyogTGVmdCBMaW5lICovCiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5tb3ZlVG8oKGJ1dHRvbkdyb3VwRmlyc3QgfHwgYnV0dG9uU2luZ2xlID8gcGJCb3JkZXIgLyAyIDogMCkgKwogICAgICAgICAgICAgICAgICAgICAgICAgICAgcGJCYWNrZ3JvdW5kU2hhZG93Qm9yZGVyIC8gMiAtCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYkJhY2tncm91bmRTaGFkb3dCb3JkZXIgLyA0LCBwYkJvcmRlciAvIDIpOwogICAgICAgICAgICAgICAgICAgICAgICBjdHgubGluZVRvKChidXR0b25Hcm91cEZpcnN0IHx8IGJ1dHRvblNpbmdsZSA/IHBiQm9yZGVyIC8gMiA6IDApICsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBiQmFja2dyb3VuZFNoYWRvd0JvcmRlciAvIDIgLQogICAgICAgICAgICAgICAgICAgICAgICAgICAgcGJCYWNrZ3JvdW5kU2hhZG93Qm9yZGVyIC8gNCwgc2l6ZS5oZWlnaHQgLSBwYkJvcmRlciAvIDIpOwogICAgICAgICAgICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OgogICAgICAgICAgICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQogICAgICAgICAgICBjdHguc3Ryb2tlKCk7CiAgICAgICAgfQogICAgICAgIC8vIGJ1dHRvbiDlnIbop5LkvqfovrnpmLTlvbEKICAgICAgICBpZiAocGJCb3JkZXJSYWRpdXMgPiAwKSB7CiAgICAgICAgICAgIGlmIChwYkJhY2tncm91bmRTaGFkb3dCb3JkZXIgIT0gMCkgewogICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpOwogICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHBiQmFja2dyb3VuZFNoYWRvd0NvbG9yOwogICAgICAgICAgICAgICAgaWYgKHBiQm9yZGVyUmFkaXVzID4gMikgewogICAgICAgICAgICAgICAgICAgIHBiQm9yZGVyUmFkaXVzID0gNDsKICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA0OyBpKyspIHsKICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gTWF0aC5mbG9vcigoaSArIDEpIC8gMik7CiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9mZnNldFlSID0gb2Zmc2V0ID09PSAxID8gMiA6IGk7CiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9mZnNldFhSID0gaSA9PT0gcGJCb3JkZXJSYWRpdXMgPyAzIDogaTsKICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChwYkJhY2tncm91bmRTaGFkb3dQb3NpdGlvbikgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnYm90dG9tLXJpZ2h0JzoKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3Qoc2l6ZS53aWR0aCAtCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBiQm9yZGVyIC8gMiAtCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwYkJvcmRlciAqIChvZmZzZXRZUiAtIDEpKSAvIDIgLQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYkJhY2tncm91bmRTaGFkb3dCb3JkZXIgLyAyLCBzaXplLmhlaWdodCAtCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwYkJvcmRlciAqIChyYiAtIG9mZnNldFhSKSkgLyAyIC0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGJCYWNrZ3JvdW5kU2hhZG93Qm9yZGVyIC8gMiwgcGJCYWNrZ3JvdW5kU2hhZG93Qm9yZGVyIC8gMiwgcGJCYWNrZ3JvdW5kU2hhZG93Qm9yZGVyIC8gMik7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdib3R0b20tbGVmdCc6CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KChwYkJvcmRlciAqIG9mZnNldFlSKSAvIDIsIHNpemUuaGVpZ2h0IC0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHBiQm9yZGVyICogKGxiIC0gb2Zmc2V0WFIpKSAvIDIgLQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYkJhY2tncm91bmRTaGFkb3dCb3JkZXIgLyAyLCBwYkJhY2tncm91bmRTaGFkb3dCb3JkZXIgLyAyLCBwYkJhY2tncm91bmRTaGFkb3dCb3JkZXIgLyAyKTsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RvcC1yaWdodCc6CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KHNpemUud2lkdGggLQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocGJCb3JkZXIgKiAocnQgLSBvZmZzZXRYUikpIC8gMiAtCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBiQmFja2dyb3VuZFNoYWRvd0JvcmRlciAvIDIsIChwYkJvcmRlciAqIG9mZnNldFlSKSAvIDIsIHBiQmFja2dyb3VuZFNoYWRvd0JvcmRlciAvIDIsIHBiQmFja2dyb3VuZFNoYWRvd0JvcmRlciAvIDIpOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAndG9wLWxlZnQnOgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdCgocGJCb3JkZXIgKiAobHQgLSBvZmZzZXRYUikpIC8gMiwgKHBiQm9yZGVyICogb2Zmc2V0WVIpIC8gMiwgcGJCYWNrZ3JvdW5kU2hhZG93Qm9yZGVyIC8gMiwgcGJCYWNrZ3JvdW5kU2hhZG93Qm9yZGVyIC8gMik7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5zdHJva2UoKTsKICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBwYkJvcmRlclJhZGl1cyArIDE7IGkrKykgewogICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHBiQmFja2dyb3VuZFNoYWRvd1Bvc2l0aW9uKSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdib3R0b20tcmlnaHQnOgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdChzaXplLndpZHRoIC0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGJCb3JkZXIgLyAyIC0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHBiQm9yZGVyICogKGkgLSAxKSkgLyAyIC0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGJCYWNrZ3JvdW5kU2hhZG93Qm9yZGVyIC8gMiwgc2l6ZS5oZWlnaHQgLQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocGJCb3JkZXIgKiAocmIgLSBpICsgMikpIC8gMiAtCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBiQmFja2dyb3VuZFNoYWRvd0JvcmRlciAvIDIsIHBiQmFja2dyb3VuZFNoYWRvd0JvcmRlciAvIDIsIHBiQmFja2dyb3VuZFNoYWRvd0JvcmRlciAvIDIpOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnYm90dG9tLWxlZnQnOgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdCgocGJCb3JkZXIgKiBpKSAvIDIsIHNpemUuaGVpZ2h0IC0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHBiQm9yZGVyICogKGxiIC0gaSArIDIpKSAvIDIgLQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYkJhY2tncm91bmRTaGFkb3dCb3JkZXIgLyAyLCBwYkJhY2tncm91bmRTaGFkb3dCb3JkZXIgLyAyLCBwYkJhY2tncm91bmRTaGFkb3dCb3JkZXIgLyAyKTsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RvcC1yaWdodCc6CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KHNpemUud2lkdGggLQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocGJCb3JkZXIgKiAocnQgLSBpICsgMikpIC8gMiAtCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBiQmFja2dyb3VuZFNoYWRvd0JvcmRlciAvIDIsIChwYkJvcmRlciAqIGkpIC8gMiwgcGJCYWNrZ3JvdW5kU2hhZG93Qm9yZGVyIC8gMiwgcGJCYWNrZ3JvdW5kU2hhZG93Qm9yZGVyIC8gMik7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd0b3AtbGVmdCc6CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KChwYkJvcmRlciAqIChsdCAtIGkgKyAyKSkgLyAyLCAocGJCb3JkZXIgKiBpKSAvIDIsIHBiQmFja2dyb3VuZFNoYWRvd0JvcmRlciAvIDIsIHBiQmFja2dyb3VuZFNoYWRvd0JvcmRlciAvIDIpOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDoKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICBjdHguc3Ryb2tlKCk7CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgfQogICAgICAgICAgICB9CiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBwYkJvcmRlckNvbG9yOwogICAgICAgICAgICAvLyDlnIbop5LovrnmoYYKICAgICAgICAgICAgaWYgKHBiQm9yZGVyUmFkaXVzID4gMikgewogICAgICAgICAgICAgICAgcGJCb3JkZXJSYWRpdXMgPSA0OwogICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHsKICAgICAgICAgICAgICAgICAgICBjb25zdCBsdFhGYWN0b3IgPSBpIDwgcGJCb3JkZXJSYWRpdXMgPyBwYkJvcmRlclJhZGl1cyAtIGkgOiAxOwogICAgICAgICAgICAgICAgICAgIGNvbnN0IHJ0WEZhY3RvciA9IGkgPCBwYkJvcmRlclJhZGl1cyA/IHBiQm9yZGVyUmFkaXVzIC0gaSArIDEgOiAyOwogICAgICAgICAgICAgICAgICAgIGNvbnN0IGxiWEZhY3RvciA9IGkgPiAwID8gaSA6IDE7CiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmJYRmFjdG9yID0gaSA8IDIgPyAxIDogaTsKICAgICAgICAgICAgICAgICAgICBjb25zdCB5RmFjdG9yID0gaSA8IDIgPyAxIDogaTsKICAgICAgICAgICAgICAgICAgICBjb25zdCBsdFggPSAocGJCb3JkZXIgKiBsdFhGYWN0b3IpIC8gMjsKICAgICAgICAgICAgICAgICAgICBjb25zdCBydFggPSBzaXplLndpZHRoIC0gKHBiQm9yZGVyICogcnRYRmFjdG9yKSAvIDI7CiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGJYID0gKHBiQm9yZGVyICogbGJYRmFjdG9yKSAvIDI7CiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmJYID0gc2l6ZS53aWR0aCAtIHBiQm9yZGVyIC8gMiAtIChwYkJvcmRlciAqIHJiWEZhY3RvcikgLyAyOwogICAgICAgICAgICAgICAgICAgIGNvbnN0IHkgPSAocGJCb3JkZXIgKiB5RmFjdG9yKSAvIDI7CiAgICAgICAgICAgICAgICAgICAgY29uc3QgYm90dG9tWSA9IHNpemUuaGVpZ2h0IC0gKHBiQm9yZGVyICogcnRYRmFjdG9yKSAvIDI7CiAgICAgICAgICAgICAgICAgICAgaWYgKGx0KQogICAgICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QobHRYLCB5LCBwYkJvcmRlciAvIDIsIHBiQm9yZGVyIC8gMik7CiAgICAgICAgICAgICAgICAgICAgaWYgKHJ0KQogICAgICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QocnRYLCB5LCBwYkJvcmRlciAvIDIsIHBiQm9yZGVyIC8gMik7CiAgICAgICAgICAgICAgICAgICAgaWYgKGxiKQogICAgICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QobGJYLCBib3R0b21ZLCBwYkJvcmRlciAvIDIsIHBiQm9yZGVyIC8gMik7CiAgICAgICAgICAgICAgICAgICAgaWYgKHJiKQogICAgICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QocmJYLCBib3R0b21ZLCBwYkJvcmRlciAvIDIsIHBiQm9yZGVyIC8gMik7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICBjdHguZmlsbCgpOwogICAgICAgICAgICAgICAgLy8gYnV0dG9uIOWchuinkui+ueahhiAtIOa4heeQhuWkmuS9meiDjOaZr+WMuuWdlwogICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNTsgaSsrKSB7CiAgICAgICAgICAgICAgICAgICAgLy8gTEVGVCBUT1AgUkFESVVTCiAgICAgICAgICAgICAgICAgICAgaWYgKGx0KSB7CiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgKHBiQm9yZGVyICogKHBiQm9yZGVyUmFkaXVzIC0gaSArIDEpKSAvIDIsIChwYkJvcmRlciAqIGkpIC8gMik7CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgIC8vIFJJR0hUIFRPUCBSQURJVVMKICAgICAgICAgICAgICAgICAgICBpZiAocnQpIHsKICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmNsZWFyUmVjdChzaXplLndpZHRoIC0gKHBiQm9yZGVyICogKHBiQm9yZGVyUmFkaXVzIC0gaSkpIC8gMiwgKHBiQm9yZGVyICogaSkgLyAyLCBzaXplLndpZHRoLCBwYkJvcmRlciAvIDIpOwogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAvLyBMRUZUIEJPVFRPTSBSQURJVVMKICAgICAgICAgICAgICAgICAgICBpZiAobGIpIHsKICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCBzaXplLmhlaWdodCAtIChwYkJvcmRlciAqIChwYkJvcmRlclJhZGl1cyAtIGkgKyAyKSkgLyAyLCAocGJCb3JkZXIgKiAoaSAtIDEpKSAvIDIsIHNpemUuaGVpZ2h0IC0gKHBiQm9yZGVyICogKHBiQm9yZGVyUmFkaXVzIC0gaSkpIC8gMik7CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgIC8vIFJJR0hUIEJPVFRPTSBSQURJVVMKICAgICAgICAgICAgICAgICAgICBpZiAocmIpIHsKICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmNsZWFyUmVjdChzaXplLndpZHRoIC0gcGJCb3JkZXIgLyAyIC0gKHBiQm9yZGVyICogKGkgLSAxKSkgLyAyLCBzaXplLmhlaWdodCAtIChwYkJvcmRlciAqIChwYkJvcmRlclJhZGl1cyAtIGkgKyAxKSkgLyAyLCBzaXplLndpZHRoLCBzaXplLmhlaWdodCk7CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgfQogICAgICAgICAgICB9CiAgICAgICAgICAgIGVsc2UgewogICAgICAgICAgICAgICAgLy8gYnV0dG9uIOWchuinkui+ueahhgogICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gcGJCb3JkZXJSYWRpdXM7IGkrKykgewogICAgICAgICAgICAgICAgICAgIC8vIExFRlQgVE9QIFJBRElVUwogICAgICAgICAgICAgICAgICAgIGlmIChsdCkgewogICAgICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QoKHBiQm9yZGVyICogKHBiQm9yZGVyUmFkaXVzIC0gaSArIDEpKSAvIDIsIChwYkJvcmRlciAqIGkpIC8gMiwgcGJCb3JkZXIgLyAyLCBwYkJvcmRlciAvIDIpOwogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAvLyBSSUdIVCBUT1AgUkFESVVTCiAgICAgICAgICAgICAgICAgICAgaWYgKHJ0KSB7CiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdChzaXplLndpZHRoIC0gKHBiQm9yZGVyICogKHBiQm9yZGVyUmFkaXVzIC0gaSArIDIpKSAvIDIsIChwYkJvcmRlciAqIGkpIC8gMiwgcGJCb3JkZXIgLyAyLCBwYkJvcmRlciAvIDIpOwogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAvLyBMRUZUIEJPVFRPTSBSQURJVVMKICAgICAgICAgICAgICAgICAgICBpZiAobGIpIHsKICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KChwYkJvcmRlciAqIGkpIC8gMiwgc2l6ZS5oZWlnaHQgLSAocGJCb3JkZXIgKiAocGJCb3JkZXJSYWRpdXMgLSBpICsgMikpIC8gMiwgcGJCb3JkZXIgLyAyLCBwYkJvcmRlciAvIDIpOwogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAvLyBSSUdIVCBCT1RUT00gUkFESVVTCiAgICAgICAgICAgICAgICAgICAgaWYgKHJiKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdChzaXplLndpZHRoIC0gcGJCb3JkZXIgLyAyIC0gKHBiQm9yZGVyICogaSkgLyAyLCBzaXplLmhlaWdodCAtIChwYkJvcmRlciAqIChwYkJvcmRlclJhZGl1cyAtIGkgKyAyKSkgLyAyLCBwYkJvcmRlciAvIDIsIHBiQm9yZGVyIC8gMik7CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgY3R4LmZpbGwoKTsKICAgICAgICAgICAgICAgIC8vIGJ1dHRvbiDlnIbop5LovrnmoYYgLSDmuIXnkIblpJrkvZnog4zmma/ljLrlnZcKICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHBiQm9yZGVyUmFkaXVzICsgMTsgaSsrKSB7CiAgICAgICAgICAgICAgICAgICAgLy8gTEVGVCBUT1AgUkFESVVTCiAgICAgICAgICAgICAgICAgICAgaWYgKGx0KSB7CiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgKHBiQm9yZGVyICogKHBiQm9yZGVyUmFkaXVzIC0gaSArIDIpKSAvIDIsIChwYkJvcmRlciAqIGkpIC8gMik7CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgIC8vIFJJR0hUIFRPUCBSQURJVVMKICAgICAgICAgICAgICAgICAgICBpZiAocnQpIHsKICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmNsZWFyUmVjdChzaXplLndpZHRoIC0gKHBiQm9yZGVyICogKHBiQm9yZGVyUmFkaXVzIC0gaSArIDEpKSAvIDIsIChwYkJvcmRlciAqIGkpIC8gMiwgc2l6ZS53aWR0aCwgcGJCb3JkZXIgLyAyKTsKICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgLy8gTEVGVCBCT1RUT00gUkFESVVTCiAgICAgICAgICAgICAgICAgICAgaWYgKGxiKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgc2l6ZS5oZWlnaHQgLSAocGJCb3JkZXIgKiAocGJCb3JkZXJSYWRpdXMgLSBpICsgMikpIC8gMiwgKHBiQm9yZGVyICogaSkgLyAyLCBzaXplLmhlaWdodCAtIChwYkJvcmRlciAqIChwYkJvcmRlclJhZGl1cyAtIGkpKSAvIDIpOwogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAvLyBSSUdIVCBCT1RUT00gUkFESVVTCiAgICAgICAgICAgICAgICAgICAgaWYgKHJiKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5jbGVhclJlY3Qoc2l6ZS53aWR0aCAtIHBiQm9yZGVyIC8gMiAtIChwYkJvcmRlciAqIGkpIC8gMiwgc2l6ZS5oZWlnaHQgLSAocGJCb3JkZXIgKiAocGJCb3JkZXJSYWRpdXMgLSBpICsgMSkpIC8gMiwgc2l6ZS53aWR0aCwgc2l6ZS5oZWlnaHQpOwogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQogICAgICAgIH0KICAgICAgICAvLyBidXR0b24gYm9yZGVyIOi+ueahhgogICAgICAgIGNvbnN0IHBiUmFkaXVzID0gKHBiQm9yZGVyUmFkaXVzICogcGJCb3JkZXIpIC8gMjsKICAgICAgICBjdHguYmVnaW5QYXRoKCk7CiAgICAgICAgLyogVVAgTGVmdCAqLwogICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHBiQm9yZGVyQ29sb3I7CiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IHBiQm9yZGVyOwogICAgICAgIC8qIFVQIExJTkUgKi8KICAgICAgICBpZiAocGJCb3JkZXJUKSB7CiAgICAgICAgICAgIGlmIChidXR0b25Hcm91cEZsYWcpIHsKICAgICAgICAgICAgICAgIGN0eC5tb3ZlVG8ocGJCb3JkZXJMLCAwKTsKICAgICAgICAgICAgICAgIGN0eC5saW5lVG8oc2l6ZS53aWR0aCAtIHBiQm9yZGVyUiwgMCk7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgZWxzZSBpZiAoYnV0dG9uR3JvdXBGaXJzdCkgewogICAgICAgICAgICAgICAgY3R4Lm1vdmVUbyhwYkJvcmRlciAvIDIgKyBwYlJhZGl1cywgMCk7CiAgICAgICAgICAgICAgICBjdHgubGluZVRvKHNpemUud2lkdGggLSBwYkJvcmRlclIsIDApOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGVsc2UgaWYgKGJ1dHRvbkdyb3VwTGFzdCkgewogICAgICAgICAgICAgICAgY3R4Lm1vdmVUbyhwYkJvcmRlckwsIDApOwogICAgICAgICAgICAgICAgY3R4LmxpbmVUbyhzaXplLndpZHRoIC0gcGJCb3JkZXIgLyAyIC0gcGJSYWRpdXMsIDApOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGVsc2UgewogICAgICAgICAgICAgICAgY3R4Lm1vdmVUbyhwYkJvcmRlciAvIDIgKyBwYlJhZGl1cywgMCk7CiAgICAgICAgICAgICAgICBjdHgubGluZVRvKHNpemUud2lkdGggLSBwYkJvcmRlciAvIDIgLSBwYlJhZGl1cywgMCk7CiAgICAgICAgICAgIH0KICAgICAgICB9CiAgICAgICAgLyogTEVGVCBMSU5FICovCiAgICAgICAgaWYgKHBiQm9yZGVyTCkgewogICAgICAgICAgICBjdHgubW92ZVRvKDAsIHBiQm9yZGVyIC8gMiArIHBiUmFkaXVzKTsKICAgICAgICAgICAgY3R4LmxpbmVUbygwLCBzaXplLmhlaWdodCAtIHBiQm9yZGVyIC8gMiAtIHBiUmFkaXVzKTsKICAgICAgICB9CiAgICAgICAgLyogRG93biBMSU5FICovCiAgICAgICAgaWYgKHBiQm9yZGVyQikgewogICAgICAgICAgICBjdHgubW92ZVRvKHBiQm9yZGVyIC8gMiArIHBiUmFkaXVzLCBzaXplLmhlaWdodCk7CiAgICAgICAgICAgIGN0eC5saW5lVG8oc2l6ZS53aWR0aCAtIHBiQm9yZGVyIC8gMiAtIHBiUmFkaXVzLCBzaXplLmhlaWdodCk7CiAgICAgICAgICAgIGlmIChidXR0b25Hcm91cEZsYWcpIHsKICAgICAgICAgICAgICAgIGN0eC5tb3ZlVG8ocGJCb3JkZXJMLCBzaXplLmhlaWdodCk7CiAgICAgICAgICAgICAgICBjdHgubGluZVRvKHNpemUud2lkdGggLSBwYkJvcmRlclIsIHNpemUuaGVpZ2h0KTsKICAgICAgICAgICAgfQogICAgICAgICAgICBlbHNlIGlmIChidXR0b25Hcm91cEZpcnN0KSB7CiAgICAgICAgICAgICAgICBjdHgubW92ZVRvKHBiQm9yZGVyIC8gMiArIHBiUmFkaXVzLCBzaXplLmhlaWdodCk7CiAgICAgICAgICAgICAgICBjdHgubGluZVRvKHNpemUud2lkdGggLSBwYkJvcmRlclIsIHNpemUuaGVpZ2h0KTsKICAgICAgICAgICAgfQogICAgICAgICAgICBlbHNlIGlmIChidXR0b25Hcm91cExhc3QpIHsKICAgICAgICAgICAgICAgIGN0eC5tb3ZlVG8ocGJCb3JkZXJMLCBzaXplLmhlaWdodCk7CiAgICAgICAgICAgICAgICBjdHgubGluZVRvKHNpemUud2lkdGggLSBwYkJvcmRlciAvIDIgLSBwYlJhZGl1cywgc2l6ZS5oZWlnaHQpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGVsc2UgewogICAgICAgICAgICAgICAgY3R4Lm1vdmVUbyhwYkJvcmRlciAvIDIgKyBwYlJhZGl1cywgc2l6ZS5oZWlnaHQpOwogICAgICAgICAgICAgICAgY3R4LmxpbmVUbyhzaXplLndpZHRoIC0gcGJCb3JkZXIgLyAyIC0gcGJSYWRpdXMsIHNpemUuaGVpZ2h0KTsKICAgICAgICAgICAgfQogICAgICAgIH0KICAgICAgICAvLyAvKiBSaWdodCBMSU5FICovCiAgICAgICAgaWYgKHBiQm9yZGVyUikgewogICAgICAgICAgICBjdHgubW92ZVRvKHNpemUud2lkdGgsIHBiQm9yZGVyIC8gMiArIHBiUmFkaXVzKTsKICAgICAgICAgICAgY3R4LmxpbmVUbyhzaXplLndpZHRoLCBzaXplLmhlaWdodCAtIHBiQm9yZGVyIC8gMiAtIHBiUmFkaXVzKTsKICAgICAgICB9CiAgICAgICAgY3R4LnN0cm9rZSgpOwogICAgICAgIGN0eC5jbG9zZVBhdGgoKTsKICAgIH0KfQovLyByZWdpc3RlclBhaW50KCdwaXhlbGJveCcsIFBpeGVsQm94KQpleHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJQaXhlbEJveCgpIHsKICAgIGlmICh0eXBlb2YgcmVnaXN0ZXJQYWludCAhPT0gJ3VuZGVmaW5lZCcpIHsKICAgICAgICByZWdpc3RlclBhaW50KCdwaXhlbGJveCcsIFBpeGVsQm94KTsKICAgIH0KfQpyZWdpc3RlclBpeGVsQm94KCk7Cg==";
var C6 = "data:text/javascript;base64,Y29uc3QgZ2V0SW50ID0gKHByb3BzLCBuYW1lLCBmYWxsYmFjayA9IDApID0+IHsKICAgIHJldHVybiBwYXJzZUludChwcm9wcy5nZXQobmFtZSk/LnRvU3RyaW5nKCkgfHwgYCR7ZmFsbGJhY2t9YCk7Cn07CmNvbnN0IGdldFN0ciA9IChwcm9wcywgbmFtZSwgZmFsbGJhY2sgPSAnJykgPT4gewogICAgcmV0dXJuIHByb3BzLmdldChuYW1lKT8udG9TdHJpbmcoKS50cmltKCkgfHwgZmFsbGJhY2s7Cn07CmNvbnN0IFBJWEVMX0JPWF9PUk5BTUVOVF9QUk9QUyA9IFsKICAgICctLXB4LWNvcm5lci1zaXplJywKICAgICctLXB4LW1haW4tY29sb3InLAogICAgJy0tcHgtYmxvY2stc2l6ZScsCiAgICAnLS1weC1jb250ZW50LWNvbG9yJwpdOwpleHBvcnQgY2xhc3MgUGl4ZWxCb3hPcm5hbWVudCB7CiAgICBzdGF0aWMgZ2V0IGlucHV0UHJvcGVydGllcygpIHsKICAgICAgICByZXR1cm4gUElYRUxfQk9YX09STkFNRU5UX1BST1BTOwogICAgfQogICAgcGFpbnQoY3R4LCBzaXplLCBwcm9wcykgewogICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gc2l6ZTsKICAgICAgICBjb25zdCBjb3JuZXJTaXplID0gZ2V0SW50KHByb3BzLCAnLS1weC1jb3JuZXItc2l6ZScsIDMpOwogICAgICAgIGNvbnN0IG1haW5Db2xvciA9IGdldFN0cihwcm9wcywgJy0tcHgtbWFpbi1jb2xvcicsICcjMjA5Y2VlJyk7CiAgICAgICAgY29uc3QgYmxvY2tTaXplID0gZ2V0SW50KHByb3BzLCAnLS1weC1ibG9jay1zaXplJywgNSk7CiAgICAgICAgY29uc3QgY29udGVudENvbG9yID0gZ2V0U3RyKHByb3BzLCAnLS1weC1jb250ZW50LWNvbG9yJywgJyNhMGNmZmYnKTsKICAgICAgICAvLyDkuLvljLrln58KICAgICAgICAvLyBjdHguZmlsbFN0eWxlID0gbWFpbkNvbG9yCiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbnRlbnRDb2xvcjsKICAgICAgICBjdHguZmlsbFJlY3QoY29ybmVyU2l6ZSAqIGJsb2NrU2l6ZSwgY29ybmVyU2l6ZSAqIGJsb2NrU2l6ZSwgd2lkdGggLSAyICogY29ybmVyU2l6ZSAqIGJsb2NrU2l6ZSwgaGVpZ2h0IC0gMiAqIGNvcm5lclNpemUgKiBibG9ja1NpemUpOwogICAgICAgIC8vIOi+ueahhue7mOWItgogICAgICAgIGNvbnN0IGRyYXdCb3JkZXIgPSAoY3R4LCBkeCwgZHksIGZsaXBYLCBmbGlwWSkgPT4gewogICAgICAgICAgICBjdHguc2F2ZSgpOwogICAgICAgICAgICBjdHgudHJhbnNsYXRlKGR4LCBkeSk7CiAgICAgICAgICAgIGN0eC5zY2FsZShmbGlwWCA/IC0xIDogMSwgZmxpcFkgPyAtMSA6IDEpOwogICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gbWFpbkNvbG9yOwogICAgICAgICAgICAvLyDkuIrovrnmoYYKICAgICAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBibG9ja1NpemUpOwogICAgICAgICAgICAvLyDlt6bovrnmoYYKICAgICAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIGJsb2NrU2l6ZSwgaGVpZ2h0KTsKICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTsKICAgICAgICB9OwogICAgICAgIGRyYXdCb3JkZXIoY3R4LCAwLCAwLCBmYWxzZSwgZmFsc2UpOwogICAgICAgIGRyYXdCb3JkZXIoY3R4LCB3aWR0aCwgaGVpZ2h0LCB0cnVlLCB0cnVlKTsKICAgICAgICAvLyDlm5vop5LmuIXnkIYKICAgICAgICBjb25zdCBjbGVhclNpemUgPSAoY29ybmVyU2l6ZSArIDEpICogYmxvY2tTaXplOwogICAgICAgIGNvbnN0IGNsZWFyQ29ybmVyID0gKGN0eCwgZHgsIGR5LCBzaXplKSA9PiB7CiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoZHgsIGR5LCBzaXplLCBzaXplKTsKICAgICAgICB9OwogICAgICAgIGNsZWFyQ29ybmVyKGN0eCwgMCwgMCwgY2xlYXJTaXplKTsKICAgICAgICBjbGVhckNvcm5lcihjdHgsIHdpZHRoIC0gY2xlYXJTaXplLCAwLCBjbGVhclNpemUpOwogICAgICAgIGNsZWFyQ29ybmVyKGN0eCwgMCwgaGVpZ2h0IC0gY2xlYXJTaXplLCBjbGVhclNpemUpOwogICAgICAgIGNsZWFyQ29ybmVyKGN0eCwgd2lkdGggLSBjbGVhclNpemUsIGhlaWdodCAtIGNsZWFyU2l6ZSwgY2xlYXJTaXplKTsKICAgICAgICAvLyDlrp7pmYXop5LokL3nu5jliLblpKflsI8KICAgICAgICBjb25zdCBkcmF3Q29ybmVyID0gKGN0eCwgZHgsIGR5LCBmbGlwWCwgZmxpcFkpID0+IHsKICAgICAgICAgICAgY3R4LnNhdmUoKTsKICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZShkeCwgZHkpOwogICAgICAgICAgICBjdHguc2NhbGUoZmxpcFggPyAtMSA6IDEsIGZsaXBZID8gLTEgOiAxKTsKICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IG1haW5Db2xvcjsKICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3JuZXJTaXplOyBpKyspIHsKICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29ybmVyU2l6ZTsgaisrKSB7CiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNEaWFnb25hbCA9IGkgPT09IGo7CiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNBbnRpRGlhZ29uYWwgPSBpICsgaiA9PT0gY29ybmVyU2l6ZSAtIDE7CiAgICAgICAgICAgICAgICAgICAgaWYgKGlzRGlhZ29uYWwgfHwgaXNBbnRpRGlhZ29uYWwpIHsKICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KGogKiBibG9ja1NpemUsIGkgKiBibG9ja1NpemUsIGJsb2NrU2l6ZSwgYmxvY2tTaXplKTsKICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTsKICAgICAgICB9OwogICAgICAgIGRyYXdDb3JuZXIoY3R4LCAwLCAwLCBmYWxzZSwgZmFsc2UpOwogICAgICAgIGRyYXdDb3JuZXIoY3R4LCB3aWR0aCwgaGVpZ2h0LCB0cnVlLCB0cnVlKTsKICAgICAgICBkcmF3Q29ybmVyKGN0eCwgMCwgaGVpZ2h0LCBmYWxzZSwgdHJ1ZSk7CiAgICAgICAgZHJhd0Nvcm5lcihjdHgsIHdpZHRoLCAwLCB0cnVlLCBmYWxzZSk7CiAgICB9Cn0KZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyUGl4ZWxCb3hPcm5hbWVudCgpIHsKICAgIGlmICh0eXBlb2YgcmVnaXN0ZXJQYWludCAhPT0gJ3VuZGVmaW5lZCcpIHsKICAgICAgICByZWdpc3RlclBhaW50KCdwaXhlbGJveE9ybmFtZW50JywgUGl4ZWxCb3hPcm5hbWVudCk7CiAgICB9Cn0KcmVnaXN0ZXJQaXhlbEJveE9ybmFtZW50KCk7Cg==";
var A6 = "data:text/javascript;base64,Y29uc3QgZ2V0SW50ID0gKHByb3BzLCBuYW1lLCBmYWxsYmFjayA9IDApID0+IHsKICAgIHJldHVybiBwYXJzZUludChwcm9wcy5nZXQobmFtZSk/LnRvU3RyaW5nKCkgfHwgYCR7ZmFsbGJhY2t9YCk7Cn07CmNvbnN0IGdldFN0ciA9IChwcm9wcywgbmFtZSwgZmFsbGJhY2sgPSAnJykgPT4gewogICAgcmV0dXJuIHByb3BzLmdldChuYW1lKT8udG9TdHJpbmcoKS50cmltKCkgfHwgZmFsbGJhY2s7Cn07CmNvbnN0IFBJWEVMX0JPWF9TVEFNUF9QUk9QUyA9IFsKICAgICctLXB4LWNvcm5lci1zaXplJywKICAgICctLXB4LW1haW4tY29sb3InLAogICAgJy0tcHgtYmxvY2stc2l6ZScsCiAgICAnLS1weC1zaGFkb3ctY29sb3InLAogICAgJy0tcHgtY29udGVudC1jb2xvcicsCiAgICAnLS1weC1nYXAtYmxvY2snCl07CmV4cG9ydCBjbGFzcyBQaXhlbEJveFN0YW1wIHsKICAgIHN0YXRpYyBnZXQgaW5wdXRQcm9wZXJ0aWVzKCkgewogICAgICAgIHJldHVybiBQSVhFTF9CT1hfU1RBTVBfUFJPUFM7CiAgICB9CiAgICBwYWludChjdHgsIHNpemUsIHByb3BzKSB7CiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBzaXplOwogICAgICAgIGNvbnN0IGNvcm5lclNpemUgPSBnZXRJbnQocHJvcHMsICctLXB4LWNvcm5lci1zaXplJywgNCk7CiAgICAgICAgY29uc3QgbWFpbkNvbG9yID0gZ2V0U3RyKHByb3BzLCAnLS1weC1tYWluLWNvbG9yJywgJyMyMDljZWUnKTsKICAgICAgICBjb25zdCBibG9ja1NpemUgPSBnZXRJbnQocHJvcHMsICctLXB4LWJsb2NrLXNpemUnLCA0KTsKICAgICAgICBjb25zdCBnYXBCbG9jayA9IGdldEludChwcm9wcywgJy0tcHgtZ2FwLWJsb2NrJywgMSk7CiAgICAgICAgY29uc3Qgc2hhZG93Q29sb3IgPSBnZXRTdHIocHJvcHMsICctLXB4LXNoYWRvdy1jb2xvcicsICcjMDA2YmIzJyk7CiAgICAgICAgY29uc3QgY29udGVudENvbG9yID0gZ2V0U3RyKHByb3BzLCAnLS1weC1jb250ZW50LWNvbG9yJywgJyNlNWYwZjEnKTsKICAgICAgICAvLyDovrnmoYbmlbDorqHnrpcKICAgICAgICBjb25zdCBzdGFtcFNpemUgPSAyICogYmxvY2tTaXplOwogICAgICAgIGNvbnN0IHZTdGFtcENvdW50ID0gTWF0aC5mbG9vcigoaGVpZ2h0IC0gMiAqIHN0YW1wU2l6ZSkgLyBibG9ja1NpemUpOwogICAgICAgIGNvbnN0IGhTdGFtcENvdW50ID0gTWF0aC5mbG9vcigod2lkdGggLSAyICogc3RhbXBTaXplKSAvIGJsb2NrU2l6ZSk7CiAgICAgICAgLy8g5YaF5a655Yy65Z+fCiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IG1haW5Db2xvcjsKICAgICAgICBjdHguZmlsbFJlY3QoMiAqIGJsb2NrU2l6ZSwgMiAqIGJsb2NrU2l6ZSwgd2lkdGggLSA1ICogYmxvY2tTaXplLCBoZWlnaHQgLSA0ICogYmxvY2tTaXplKTsKICAgICAgICAvLyDmsLTlubPmlrnlkJHnu5jliLYKICAgICAgICBjb25zdCBkcmF3SFN0YW1wID0gKGN0eCwgZHgsIGR5LCBmbGlwWSkgPT4gewogICAgICAgICAgICBjdHguc2F2ZSgpOwogICAgICAgICAgICBjdHgudHJhbnNsYXRlKGR4LCBkeSk7CiAgICAgICAgICAgIGN0eC5zY2FsZSgxLCBmbGlwWSA/IC0xIDogMSk7CiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBtYWluQ29sb3I7CiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaFN0YW1wQ291bnQ7IGkrKykgewogICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gKGNvcm5lclNpemUgKyAxKSAqIGJsb2NrU2l6ZSAqIGk7CiAgICAgICAgICAgICAgICAvLyDkuLvkvZPoibLlnZcKICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBtYWluQ29sb3I7CiAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3Qob2Zmc2V0LCAwLCBjb3JuZXJTaXplICogYmxvY2tTaXplLCAyICogYmxvY2tTaXplKTsKICAgICAgICAgICAgICAgIC8vIOa4hemZpOS4pOerr+inkuiQve+8iOS4remXtOmDqOWIhumVguepuu+8iQogICAgICAgICAgICAgICAgY3R4LmNsZWFyUmVjdChvZmZzZXQsIDAsIGJsb2NrU2l6ZSwgYmxvY2tTaXplKTsKICAgICAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoKGNvcm5lclNpemUgLSAxKSAqIGJsb2NrU2l6ZSArIG9mZnNldCwgMCwgYmxvY2tTaXplLCBibG9ja1NpemUpOwogICAgICAgICAgICAgICAgLy8g6Zi05b2x5Z2XCiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gc2hhZG93Q29sb3I7CiAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QoKGNvcm5lclNpemUgLSAxKSAqIGJsb2NrU2l6ZSArIG9mZnNldCwgMCwgYmxvY2tTaXplLCBibG9ja1NpemUpOwogICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KGNvcm5lclNpemUgKiBibG9ja1NpemUgKyBvZmZzZXQsIGJsb2NrU2l6ZSwgYmxvY2tTaXplLCBibG9ja1NpemUpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7CiAgICAgICAgfTsKICAgICAgICBkcmF3SFN0YW1wKGN0eCwgMiAqIGJsb2NrU2l6ZSwgMCwgZmFsc2UpOwogICAgICAgIGRyYXdIU3RhbXAoY3R4LCAyICogYmxvY2tTaXplLCBoZWlnaHQsIHRydWUpOwogICAgICAgIC8vIOW3pui+ueahhue7mOWItgogICAgICAgIGNvbnN0IGRyYXdMZWZ0U3RhbXAgPSAoY3R4LCBkeCwgZHkpID0+IHsKICAgICAgICAgICAgY3R4LnNhdmUoKTsKICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZShkeCwgZHkpOwogICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gbWFpbkNvbG9yOwogICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZTdGFtcENvdW50OyBpKyspIHsKICAgICAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IChjb3JuZXJTaXplICsgMSkgKiBibG9ja1NpemUgKiBpOwogICAgICAgICAgICAgICAgLy8g5Li75L2T6Imy5Z2XCiAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QoMCwgb2Zmc2V0LCAyICogYmxvY2tTaXplLCBjb3JuZXJTaXplICogYmxvY2tTaXplKTsKICAgICAgICAgICAgICAgIC8vIOmVguepuuS4remXtOWwj+WdlwogICAgICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCBvZmZzZXQsIGJsb2NrU2l6ZSwgYmxvY2tTaXplKTsKICAgICAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgKGNvcm5lclNpemUgLSAxKSAqIGJsb2NrU2l6ZSArIG9mZnNldCwgYmxvY2tTaXplLCBibG9ja1NpemUpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7CiAgICAgICAgfTsKICAgICAgICBkcmF3TGVmdFN0YW1wKGN0eCwgMCwgMiAqIGJsb2NrU2l6ZSk7CiAgICAgICAgLy8g5Y+z6L655qGG57uY5Yi2CiAgICAgICAgY29uc3QgZHJhd1JpZ2h0U3RhbXAgPSAoY3R4LCBkeCwgZHkpID0+IHsKICAgICAgICAgICAgY3R4LnNhdmUoKTsKICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZShkeCAtIGJsb2NrU2l6ZSwgZHkpOwogICAgICAgICAgICBjdHguc2NhbGUoLTEsIDEpOwogICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZTdGFtcENvdW50OyBpKyspIHsKICAgICAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IChjb3JuZXJTaXplICsgMSkgKiBibG9ja1NpemUgKiBpOwogICAgICAgICAgICAgICAgLy8g5Li75L2T6Imy5Z2X77yI6Z2g5Y+z57uY5Yi277yJCiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gbWFpbkNvbG9yOwogICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KC0yICogYmxvY2tTaXplLCBvZmZzZXQsIDIgKiBibG9ja1NpemUsIGNvcm5lclNpemUgKiBibG9ja1NpemUpOwogICAgICAgICAgICAgICAgLy8g6ZWC56m65Lit6Ze05bCP5Z2XCiAgICAgICAgICAgICAgICBjdHguY2xlYXJSZWN0KC0yICogYmxvY2tTaXplLCBvZmZzZXQsIGJsb2NrU2l6ZSwgYmxvY2tTaXplKTsKICAgICAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoLTIgKiBibG9ja1NpemUsIChjb3JuZXJTaXplIC0gMSkgKiBibG9ja1NpemUgKyBvZmZzZXQsIGJsb2NrU2l6ZSwgYmxvY2tTaXplKTsKICAgICAgICAgICAgICAgIC8vIOmYtOW9seWdlwogICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHNoYWRvd0NvbG9yOwogICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KC1ibG9ja1NpemUsIG9mZnNldCAtIGJsb2NrU2l6ZSwgYmxvY2tTaXplLCBibG9ja1NpemUpOwogICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KC0yICogYmxvY2tTaXplLCBvZmZzZXQsIGJsb2NrU2l6ZSwgYmxvY2tTaXplKTsKICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdCgtMiAqIGJsb2NrU2l6ZSwgKGNvcm5lclNpemUgLSAxKSAqIGJsb2NrU2l6ZSArIG9mZnNldCwgYmxvY2tTaXplLCBibG9ja1NpemUpOwogICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KC0zICogYmxvY2tTaXplLCBvZmZzZXQgKyBibG9ja1NpemUsIGJsb2NrU2l6ZSwgKGNvcm5lclNpemUgLSAyKSAqIGJsb2NrU2l6ZSk7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTsKICAgICAgICB9OwogICAgICAgIGRyYXdSaWdodFN0YW1wKGN0eCwgd2lkdGggLSAyICogYmxvY2tTaXplLCAyICogYmxvY2tTaXplKTsKICAgICAgICAvLyDpnZ7mlbTpmaTkuKrmlbDovrnop5LlpITnkIYKICAgICAgICBjb25zdCBjbGVhclNpemUgPSAyICogYmxvY2tTaXplOwogICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2xlYXJTaXplLCBjbGVhclNpemUpOwogICAgICAgIGN0eC5jbGVhclJlY3Qod2lkdGggLSBjbGVhclNpemUgLSBibG9ja1NpemUsIDAsIGNsZWFyU2l6ZSArIGJsb2NrU2l6ZSwgY2xlYXJTaXplKTsKICAgICAgICBjdHguY2xlYXJSZWN0KDAsIGhlaWdodCAtIGNsZWFyU2l6ZSAtIGJsb2NrU2l6ZSwgY2xlYXJTaXplLCBjbGVhclNpemUgKyBibG9ja1NpemUpOwogICAgICAgIGN0eC5jbGVhclJlY3Qod2lkdGggLSBjbGVhclNpemUgLSBibG9ja1NpemUsIGhlaWdodCAtIGNsZWFyU2l6ZSAtIGJsb2NrU2l6ZSwgY2xlYXJTaXplICsgYmxvY2tTaXplLCBjbGVhclNpemUgKyBibG9ja1NpemUpOwogICAgICAgIC8vIOWGheWuueWMuuWfnwogICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb250ZW50Q29sb3I7CiAgICAgICAgY3R4LmZpbGxSZWN0KHN0YW1wU2l6ZSArIGdhcEJsb2NrICogYmxvY2tTaXplLCBzdGFtcFNpemUgKyBnYXBCbG9jayAqIGJsb2NrU2l6ZSwgd2lkdGggLSBibG9ja1NpemUgLSAyICogKHN0YW1wU2l6ZSArIGdhcEJsb2NrICogYmxvY2tTaXplKSwgaGVpZ2h0IC0gMiAqIChzdGFtcFNpemUgKyBnYXBCbG9jayAqIGJsb2NrU2l6ZSkpOwogICAgICAgIC8vIOaKoOe7huiKggogICAgICAgIGN0eC5maWxsU3R5bGUgPSBzaGFkb3dDb2xvcjsKICAgICAgICBjdHguZmlsbFJlY3QoYmxvY2tTaXplLCBibG9ja1NpemUsIGJsb2NrU2l6ZSwgYmxvY2tTaXplKTsKICAgIH0KfQpleHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJQaXhlbEJveFN0YW1wKCkgewogICAgaWYgKHR5cGVvZiByZWdpc3RlclBhaW50ICE9PSAndW5kZWZpbmVkJykgewogICAgICAgIHJlZ2lzdGVyUGFpbnQoJ3BpeGVsYm94U3RhbXAnLCBQaXhlbEJveFN0YW1wKTsKICAgIH0KfQpyZWdpc3RlclBpeGVsQm94U3RhbXAoKTsK";
var G5 = "data:text/javascript;base64,Y29uc3QgZ2V0SW50ID0gKHByb3BzLCBuYW1lLCBmYWxsYmFjayA9IDApID0+IHsKICAgIHJldHVybiBwYXJzZUludChwcm9wcy5nZXQobmFtZSk/LnRvU3RyaW5nKCkgfHwgYCR7ZmFsbGJhY2t9YCk7Cn07CmNvbnN0IGdldFN0ciA9IChwcm9wcywgbmFtZSwgZmFsbGJhY2sgPSAnJykgPT4gewogICAgcmV0dXJuIHByb3BzLmdldChuYW1lKT8udG9TdHJpbmcoKS50cmltKCkgfHwgZmFsbGJhY2s7Cn07CmNvbnN0IFBJWEVMX0NPTlRFTlRfUFJPUFMgPSBbCiAgICAnLS1weC1ib3JkZXInLAogICAgJy0tcHgtYm9yZGVyLWNvbG9yJywKICAgICctLXB4LWJnLWNvbG9yJywKICAgICctLXB4LWNvcm5lci1zaXplJywKICAgICctLXB4LWJnLXNoYWRvdy1jb2xvcicsCiAgICAnLS1weC1ib3JkZXItc2hhZG93JwpdOwpleHBvcnQgY2xhc3MgUGl4ZWxDb250ZW50IHsKICAgIHN0YXRpYyBnZXQgaW5wdXRQcm9wZXJ0aWVzKCkgewogICAgICAgIHJldHVybiBQSVhFTF9DT05URU5UX1BST1BTOwogICAgfQogICAgcGFpbnQoY3R4LCBzaXplLCBwcm9wcykgewogICAgICAgIGNvbnN0IGJvcmRlciA9IGdldEludChwcm9wcywgJy0tcHgtYm9yZGVyJyk7CiAgICAgICAgY29uc3QgYm9yZGVyQ29sb3IgPSBnZXRTdHIocHJvcHMsICctLXB4LWJvcmRlci1jb2xvcicpOwogICAgICAgIGNvbnN0IGJnQ29sb3IgPSBnZXRTdHIocHJvcHMsICctLXB4LWJnLWNvbG9yJywgJ3RyYW5zcGFyZW50Jyk7CiAgICAgICAgY29uc3QgY29ybmVyU2l6ZSA9IGdldEludChwcm9wcywgJy0tcHgtY29ybmVyLXNpemUnLCBib3JkZXIpOwogICAgICAgIGNvbnN0IGJnU2hhZG93Q29sb3IgPSBnZXRTdHIocHJvcHMsICctLXB4LWJnLXNoYWRvdy1jb2xvcicpOwogICAgICAgIGNvbnN0IGJvcmRlclNoYWRvdyA9IGdldEludChwcm9wcywgJy0tcHgtYm9yZGVyLXNoYWRvdycsIGJvcmRlcik7CiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICd0cmFuc3BhcmVudCc7CiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIHNpemUud2lkdGgsIHNpemUuaGVpZ2h0KTsKICAgICAgICBpZiAoYm9yZGVyIDw9IDApCiAgICAgICAgICAgIHJldHVybjsKICAgICAgICAvLyDnu5jliLbovrnmoYYKICAgICAgICBjdHguYmVnaW5QYXRoKCk7CiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gYm9yZGVyQ29sb3I7CiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IGJvcmRlcjsKICAgICAgICBjdHgubGluZUNhcCA9ICdidXR0JzsKICAgICAgICBjb25zdCBoYWxmQm9yZGVyID0gYm9yZGVyIC8gMjsKICAgICAgICAvLyBib3R0b20gbGluZQogICAgICAgIGN0eC5tb3ZlVG8oY29ybmVyU2l6ZSArIGhhbGZCb3JkZXIsIHNpemUuaGVpZ2h0IC0gY29ybmVyU2l6ZSAtIGhhbGZCb3JkZXIpOwogICAgICAgIGN0eC5saW5lVG8oY29ybmVyU2l6ZSArIGhhbGZCb3JkZXIsIHNpemUuaGVpZ2h0IC0gaGFsZkJvcmRlcik7CiAgICAgICAgY3R4Lm1vdmVUbyhjb3JuZXJTaXplLCBzaXplLmhlaWdodCAtIGhhbGZCb3JkZXIpOwogICAgICAgIGN0eC5saW5lVG8oc2l6ZS53aWR0aCAtIGNvcm5lclNpemUsIHNpemUuaGVpZ2h0IC0gaGFsZkJvcmRlcik7CiAgICAgICAgY3R4Lm1vdmVUbyhzaXplLndpZHRoIC0gY29ybmVyU2l6ZSAtIGhhbGZCb3JkZXIsIHNpemUuaGVpZ2h0IC0gaGFsZkJvcmRlcik7CiAgICAgICAgY3R4LmxpbmVUbyhzaXplLndpZHRoIC0gY29ybmVyU2l6ZSAtIGhhbGZCb3JkZXIsIHNpemUuaGVpZ2h0IC0gY29ybmVyU2l6ZSAtIGhhbGZCb3JkZXIpOwogICAgICAgIC8vIGxlZnQgbGluZQogICAgICAgIGN0eC5tb3ZlVG8oaGFsZkJvcmRlciwgMCk7CiAgICAgICAgY3R4LmxpbmVUbyhoYWxmQm9yZGVyLCBzaXplLmhlaWdodCAtIGNvcm5lclNpemUpOwogICAgICAgIGN0eC5tb3ZlVG8oMCwgc2l6ZS5oZWlnaHQgLSBjb3JuZXJTaXplKTsKICAgICAgICBjdHgubGluZVRvKGNvcm5lclNpemUgKyBoYWxmQm9yZGVyLCBzaXplLmhlaWdodCAtIGNvcm5lclNpemUpOwogICAgICAgIC8vIHJpZ2h0IGxpbmUKICAgICAgICBjdHgubW92ZVRvKHNpemUud2lkdGggLSBoYWxmQm9yZGVyLCAwKTsKICAgICAgICBjdHgubGluZVRvKHNpemUud2lkdGggLSBoYWxmQm9yZGVyLCBzaXplLmhlaWdodCAtIGNvcm5lclNpemUpOwogICAgICAgIGN0eC5tb3ZlVG8oc2l6ZS53aWR0aCwgc2l6ZS5oZWlnaHQgLSBjb3JuZXJTaXplKTsKICAgICAgICBjdHgubGluZVRvKHNpemUud2lkdGggLSBjb3JuZXJTaXplLCBzaXplLmhlaWdodCAtIGNvcm5lclNpemUpOwogICAgICAgIC8vIOWGheWxgui+ueahhgogICAgICAgIC8vIGxlZnQKICAgICAgICBjdHgubW92ZVRvKGNvcm5lclNpemUgKyBoYWxmQm9yZGVyLCBjb3JuZXJTaXplIC0gaGFsZkJvcmRlcik7CiAgICAgICAgY3R4LmxpbmVUbyhjb3JuZXJTaXplICsgaGFsZkJvcmRlciwgc2l6ZS5oZWlnaHQgLSBjb3JuZXJTaXplIC0gaGFsZkJvcmRlcik7CiAgICAgICAgLy8gcmlnaHQKICAgICAgICBjdHgubW92ZVRvKHNpemUud2lkdGggLSBjb3JuZXJTaXplIC0gaGFsZkJvcmRlciwgY29ybmVyU2l6ZSAtIGhhbGZCb3JkZXIpOwogICAgICAgIGN0eC5saW5lVG8oc2l6ZS53aWR0aCAtIGNvcm5lclNpemUgLSBoYWxmQm9yZGVyLCBzaXplLmhlaWdodCAtIGNvcm5lclNpemUgLSBoYWxmQm9yZGVyKTsKICAgICAgICAvLyBib3R0b20KICAgICAgICBjdHgubW92ZVRvKGNvcm5lclNpemUgKyBoYWxmQm9yZGVyLCBzaXplLmhlaWdodCAtIGJvcmRlclNoYWRvdyAtIGhhbGZCb3JkZXIgLSBib3JkZXIpOwogICAgICAgIGN0eC5saW5lVG8oc2l6ZS53aWR0aCAtIGNvcm5lclNpemUgLSBoYWxmQm9yZGVyLCBzaXplLmhlaWdodCAtIGJvcmRlclNoYWRvdyAtIGhhbGZCb3JkZXIgLSBib3JkZXIpOwogICAgICAgIGN0eC5zdHJva2UoKTsKICAgICAgICBjdHguY2xvc2VQYXRoKCk7CiAgICAgICAgLy8g57uY5Yi26Zi05b2xCiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGJnU2hhZG93Q29sb3I7CiAgICAgICAgLy8gdG9wCiAgICAgICAgY3R4LmZpbGxSZWN0KGNvcm5lclNpemUgKyBib3JkZXIsIGJvcmRlclNoYWRvdywgc2l6ZS53aWR0aCAtIGNvcm5lclNpemUgKiAyIC0gYm9yZGVyICogMiwgYm9yZGVyU2hhZG93KTsKICAgICAgICAvLyByaWdodAogICAgICAgIGN0eC5maWxsUmVjdChzaXplLndpZHRoIC0gY29ybmVyU2l6ZSAtIGJvcmRlciArIGJvcmRlclNoYWRvdywgMCwgY29ybmVyU2l6ZSArIGJvcmRlciAtIDIgKiBib3JkZXJTaGFkb3csIHNpemUuaGVpZ2h0IC0gYm9yZGVyICogMik7CiAgICAgICAgLy8gbGVmdAogICAgICAgIGN0eC5maWxsUmVjdChib3JkZXJTaGFkb3csIDAsIGNvcm5lclNpemUgKyBib3JkZXIgLSAyICogYm9yZGVyU2hhZG93LCBzaXplLmhlaWdodCAtIGJvcmRlciAqIDIpOwogICAgICAgIC8vIGJvdHRvbQogICAgICAgIGN0eC5maWxsUmVjdChib3JkZXJTaGFkb3csIHNpemUuaGVpZ2h0IC0gYm9yZGVyICogMiwgc2l6ZS53aWR0aCAtIDIgKiBib3JkZXJTaGFkb3csIGJvcmRlclNoYWRvdyAvIDIpOwogICAgICAgIGN0eC5maWxsUmVjdChjb3JuZXJTaXplICsgYm9yZGVyU2hhZG93LCBzaXplLmhlaWdodCAtIDIgKiBib3JkZXIsIHNpemUud2lkdGggLSAyICogY29ybmVyU2l6ZSAtIDIgKiBib3JkZXJTaGFkb3csIDIgKiBib3JkZXIgLSBib3JkZXJTaGFkb3cpOwogICAgICAgIC8vIGNvbnRlbnQg5Yy65Z+f5aGr5YWF6ImyCiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGJnQ29sb3I7CiAgICAgICAgY3R4LmZpbGxSZWN0KGNvcm5lclNpemUgKyBib3JkZXIsIDIgKiBib3JkZXJTaGFkb3csIHNpemUud2lkdGggLSAyICogY29ybmVyU2l6ZSAtIDIgKiBib3JkZXIsIHNpemUuaGVpZ2h0IC0gMiAqIGJvcmRlciAtIDMgKiBib3JkZXJTaGFkb3cpOwogICAgfQp9Ci8vIHJlZ2lzdGVyUGFpbnQoJ3BpeGVsY29udGVudCcsIFBpeGVsQ29udGVudCkKZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyUGl4ZWxDb250ZW50KCkgewogICAgaWYgKHR5cGVvZiByZWdpc3RlclBhaW50ICE9PSAndW5kZWZpbmVkJykgewogICAgICAgIHJlZ2lzdGVyUGFpbnQoJ3BpeGVsY29udGVudCcsIFBpeGVsQ29udGVudCk7CiAgICB9Cn0KcmVnaXN0ZXJQaXhlbENvbnRlbnQoKTsK";
var m6 = "data:text/javascript;base64,Y29uc3QgZ2V0SW50ID0gKHByb3BzLCBuYW1lLCBmYWxsYmFjayA9IDApID0+IHsKICAgIHJldHVybiBwYXJzZUludChwcm9wcy5nZXQobmFtZSk/LnRvU3RyaW5nKCkgfHwgYCR7ZmFsbGJhY2t9YCk7Cn07CmNvbnN0IGdldFN0ciA9IChwcm9wcywgbmFtZSwgZmFsbGJhY2sgPSAnJykgPT4gewogICAgcmV0dXJuIHByb3BzLmdldChuYW1lKT8udG9TdHJpbmcoKS50cmltKCkgfHwgZmFsbGJhY2s7Cn07CmNvbnN0IFBJWEVMX1BBTkVMX1BST1BTID0gWwogICAgJy0tcHgtYm9yZGVyJywKICAgICctLXB4LWJvcmRlci1jb2xvcicsCiAgICAnLS1weC1iZy1jb2xvcicsCiAgICAnLS1weC1jb3JuZXItc2l6ZScsCiAgICAnLS1weC1iZy1zaGFkb3ctY29sb3InLAogICAgJy0tcHgtYm9yZGVyLXNoYWRvdycKXTsKZXhwb3J0IGNsYXNzIFBpeGVsUGFuZWwgewogICAgc3RhdGljIGdldCBpbnB1dFByb3BlcnRpZXMoKSB7CiAgICAgICAgcmV0dXJuIFBJWEVMX1BBTkVMX1BST1BTOwogICAgfQogICAgcGFpbnQoY3R4LCBzaXplLCBwcm9wcykgewogICAgICAgIGNvbnN0IGJvcmRlciA9IGdldEludChwcm9wcywgJy0tcHgtYm9yZGVyJyk7CiAgICAgICAgY29uc3QgYm9yZGVyQ29sb3IgPSBnZXRTdHIocHJvcHMsICctLXB4LWJvcmRlci1jb2xvcicsICcjMDAwJyk7CiAgICAgICAgY29uc3QgYmdDb2xvciA9IGdldFN0cihwcm9wcywgJy0tcHgtYmctY29sb3InLCAnI2ZmZicpOwogICAgICAgIGNvbnN0IGNvcm5lclNpemUgPSBnZXRJbnQocHJvcHMsICctLXB4LWNvcm5lci1zaXplJywgYm9yZGVyKTsKICAgICAgICBjb25zdCBiZ1NoYWRvd0NvbG9yID0gZ2V0U3RyKHByb3BzLCAnLS1weC1iZy1zaGFkb3ctY29sb3InLCAndHJhbnNwYXJlbnQnKTsKICAgICAgICBjb25zdCBib3JkZXJTaGFkb3cgPSBnZXRJbnQocHJvcHMsICctLXB4LWJvcmRlci1zaGFkb3cnLCBib3JkZXIpOwogICAgICAgIGN0eC5maWxsU3R5bGUgPSBiZ0NvbG9yOwogICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBzaXplLndpZHRoLCBzaXplLmhlaWdodCk7CiAgICAgICAgaWYgKGJvcmRlciA8PSAwKQogICAgICAgICAgICByZXR1cm47CiAgICAgICAgY3R4LmJlZ2luUGF0aCgpOwogICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGJvcmRlckNvbG9yOwogICAgICAgIGN0eC5saW5lV2lkdGggPSBib3JkZXI7CiAgICAgICAgY3R4LmxpbmVDYXAgPSAnYnV0dCc7CiAgICAgICAgY29uc3QgaGFsZkJvcmRlciA9IGJvcmRlciAvIDI7CiAgICAgICAgLy8gVG9wCiAgICAgICAgY3R4Lm1vdmVUbyhjb3JuZXJTaXplICsgaGFsZkJvcmRlciwgY29ybmVyU2l6ZSArIGhhbGZCb3JkZXIpOwogICAgICAgIGN0eC5saW5lVG8oY29ybmVyU2l6ZSArIGhhbGZCb3JkZXIsIGhhbGZCb3JkZXIpOwogICAgICAgIGN0eC5tb3ZlVG8oY29ybmVyU2l6ZSwgaGFsZkJvcmRlcik7CiAgICAgICAgY3R4LmxpbmVUbyhzaXplLndpZHRoIC0gY29ybmVyU2l6ZSwgaGFsZkJvcmRlcik7CiAgICAgICAgY3R4Lm1vdmVUbyhzaXplLndpZHRoIC0gY29ybmVyU2l6ZSAtIGhhbGZCb3JkZXIsIGhhbGZCb3JkZXIpOwogICAgICAgIGN0eC5saW5lVG8oc2l6ZS53aWR0aCAtIGNvcm5lclNpemUgLSBoYWxmQm9yZGVyLCBjb3JuZXJTaXplICsgaGFsZkJvcmRlcik7CiAgICAgICAgLy8gQm90dG9tCiAgICAgICAgY3R4Lm1vdmVUbyhjb3JuZXJTaXplICsgaGFsZkJvcmRlciwgc2l6ZS5oZWlnaHQgLSBjb3JuZXJTaXplIC0gaGFsZkJvcmRlcik7CiAgICAgICAgY3R4LmxpbmVUbyhjb3JuZXJTaXplICsgaGFsZkJvcmRlciwgc2l6ZS5oZWlnaHQgLSBoYWxmQm9yZGVyKTsKICAgICAgICBjdHgubW92ZVRvKGNvcm5lclNpemUsIHNpemUuaGVpZ2h0IC0gaGFsZkJvcmRlcik7CiAgICAgICAgY3R4LmxpbmVUbyhzaXplLndpZHRoIC0gY29ybmVyU2l6ZSwgc2l6ZS5oZWlnaHQgLSBoYWxmQm9yZGVyKTsKICAgICAgICBjdHgubW92ZVRvKHNpemUud2lkdGggLSBjb3JuZXJTaXplIC0gaGFsZkJvcmRlciwgc2l6ZS5oZWlnaHQgLSBoYWxmQm9yZGVyKTsKICAgICAgICBjdHgubGluZVRvKHNpemUud2lkdGggLSBjb3JuZXJTaXplIC0gaGFsZkJvcmRlciwgc2l6ZS5oZWlnaHQgLSBjb3JuZXJTaXplIC0gaGFsZkJvcmRlcik7CiAgICAgICAgLy8gTGVmdAogICAgICAgIGN0eC5tb3ZlVG8oY29ybmVyU2l6ZSArIGhhbGZCb3JkZXIsIGNvcm5lclNpemUpOwogICAgICAgIGN0eC5saW5lVG8oMCwgY29ybmVyU2l6ZSk7CiAgICAgICAgY3R4Lm1vdmVUbyhoYWxmQm9yZGVyLCBjb3JuZXJTaXplKTsKICAgICAgICBjdHgubGluZVRvKGhhbGZCb3JkZXIsIHNpemUuaGVpZ2h0IC0gY29ybmVyU2l6ZSk7CiAgICAgICAgY3R4Lm1vdmVUbygwLCBzaXplLmhlaWdodCAtIGNvcm5lclNpemUpOwogICAgICAgIGN0eC5saW5lVG8oY29ybmVyU2l6ZSArIGhhbGZCb3JkZXIsIHNpemUuaGVpZ2h0IC0gY29ybmVyU2l6ZSk7CiAgICAgICAgLy8gUmlnaHQKICAgICAgICBjdHgubW92ZVRvKHNpemUud2lkdGggLSBjb3JuZXJTaXplIC0gaGFsZkJvcmRlciwgY29ybmVyU2l6ZSk7CiAgICAgICAgY3R4LmxpbmVUbyhzaXplLndpZHRoLCBjb3JuZXJTaXplKTsKICAgICAgICBjdHgubW92ZVRvKHNpemUud2lkdGggLSBoYWxmQm9yZGVyLCBjb3JuZXJTaXplKTsKICAgICAgICBjdHgubGluZVRvKHNpemUud2lkdGggLSBoYWxmQm9yZGVyLCBzaXplLmhlaWdodCAtIGNvcm5lclNpemUpOwogICAgICAgIGN0eC5tb3ZlVG8oc2l6ZS53aWR0aCwgc2l6ZS5oZWlnaHQgLSBjb3JuZXJTaXplKTsKICAgICAgICBjdHgubGluZVRvKHNpemUud2lkdGggLSBjb3JuZXJTaXplLCBzaXplLmhlaWdodCAtIGNvcm5lclNpemUpOwogICAgICAgIGN0eC5zdHJva2UoKTsKICAgICAgICBjdHguY2xvc2VQYXRoKCk7CiAgICAgICAgLy8gU2hhZG93CiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGJnU2hhZG93Q29sb3I7CiAgICAgICAgY3R4LmZpbGxSZWN0KHNpemUud2lkdGggLSBib3JkZXIsIGNvcm5lclNpemUgKyBoYWxmQm9yZGVyLCBib3JkZXJTaGFkb3csIHNpemUuaGVpZ2h0IC0gY29ybmVyU2l6ZSAqIDIgLSBib3JkZXIpOwogICAgICAgIGN0eC5maWxsUmVjdChjb3JuZXJTaXplICsgYm9yZGVyLCBzaXplLmhlaWdodCAtIGNvcm5lclNpemUgLSBib3JkZXJTaGFkb3cgLyAyLCBzaXplLndpZHRoIC0gY29ybmVyU2l6ZSAqIDIgLSBib3JkZXIgKiAyLCBib3JkZXJTaGFkb3cgLyAyKTsKICAgICAgICAvLyBDbGVhciBjb3JuZXJzCiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjb3JuZXJTaXplLCBjb3JuZXJTaXplIC0gaGFsZkJvcmRlcik7CiAgICAgICAgY3R4LmNsZWFyUmVjdChzaXplLndpZHRoIC0gY29ybmVyU2l6ZSwgMCwgY29ybmVyU2l6ZSwgY29ybmVyU2l6ZSAtIGhhbGZCb3JkZXIpOwogICAgICAgIGN0eC5jbGVhclJlY3QoMCwgc2l6ZS5oZWlnaHQgLSBjb3JuZXJTaXplICsgaGFsZkJvcmRlciwgY29ybmVyU2l6ZSwgY29ybmVyU2l6ZSAtIGhhbGZCb3JkZXIpOwogICAgICAgIGN0eC5jbGVhclJlY3Qoc2l6ZS53aWR0aCAtIGNvcm5lclNpemUsIHNpemUuaGVpZ2h0IC0gY29ybmVyU2l6ZSArIGhhbGZCb3JkZXIsIGNvcm5lclNpemUsIGNvcm5lclNpemUgLSBoYWxmQm9yZGVyKTsKICAgIH0KfQovLyBpZiAodHlwZW9mIHJlZ2lzdGVyUGFpbnQgIT09ICd1bmRlZmluZWQnKSB7Ci8vICAgcmVnaXN0ZXJQYWludCgncGl4ZWxwYW5lbCcsIFBpeGVsUGFuZWwpCi8vIH0KZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyUGl4ZWxQYW5lbCgpIHsKICAgIGlmICh0eXBlb2YgcmVnaXN0ZXJQYWludCAhPT0gJ3VuZGVmaW5lZCcpIHsKICAgICAgICByZWdpc3RlclBhaW50KCdwaXhlbHBhbmVsJywgUGl4ZWxQYW5lbCk7CiAgICB9Cn0KcmVnaXN0ZXJQaXhlbFBhbmVsKCk7Cg==";
var Z4 = "data:text/javascript;base64,Y29uc3QgZ2V0RmxvYXQgPSAocHJvcHMsIG5hbWUsIGZhbGxiYWNrID0gMCkgPT4gewogICAgcmV0dXJuIHBhcnNlRmxvYXQocHJvcHMuZ2V0KG5hbWUpPy50b1N0cmluZygpIHx8IGAke2ZhbGxiYWNrfWApOwp9Owpjb25zdCBnZXRJbnQgPSAocHJvcHMsIG5hbWUsIGZhbGxiYWNrID0gMCkgPT4gewogICAgY29uc3QgdmFsID0gcGFyc2VJbnQocHJvcHMuZ2V0KG5hbWUpPy50b1N0cmluZygpIHx8ICcnKTsKICAgIHJldHVybiBpc05hTih2YWwpID8gZmFsbGJhY2sgOiB2YWw7Cn07CmNvbnN0IGdldFN0ciA9IChwcm9wcywgbmFtZSwgZmFsbGJhY2sgPSAnJykgPT4gewogICAgcmV0dXJuIHByb3BzLmdldChuYW1lKT8udG9TdHJpbmcoKS50cmltKCkgfHwgZmFsbGJhY2s7Cn07CmNvbnN0IFBJWEVMX1NUUklQRV9QUk9QUyA9IFsKICAgICctLXB4LXN0cmlwZS1zaXplJywKICAgICctLXB4LXN0cmlwZS1vZmZzZXQnLAogICAgJy0tcHgtc3RyaXBlLWNvbG9yLTEnLAogICAgJy0tcHgtc3RyaXBlLWNvbG9yLTInLAogICAgJy0tcHgtc3RyaXBlLXJhdGlvJywKICAgICctLXB4LXN0cmlwZS1tb2RlJyAvLyDmlrDlop7vvJrmqKHlvI/pgInmi6kgY2hlY2tlciB8IHN0cmlwZQpdOwpleHBvcnQgY2xhc3MgUGl4ZWxTdHJpcGUgewogICAgc3RhdGljIGdldCBpbnB1dFByb3BlcnRpZXMoKSB7CiAgICAgICAgcmV0dXJuIFBJWEVMX1NUUklQRV9QUk9QUzsKICAgIH0KICAgIHBhaW50KGN0eCwgc2l6ZSwgcHJvcHMpIHsKICAgICAgICBjb25zdCBjb2xvcjEgPSBnZXRTdHIocHJvcHMsICctLXB4LXN0cmlwZS1jb2xvci0xJywgJyNmZmZmZmYnKTsKICAgICAgICBjb25zdCBjb2xvcjIgPSBnZXRTdHIocHJvcHMsICctLXB4LXN0cmlwZS1jb2xvci0yJywgJyMwMDAwMDAnKTsKICAgICAgICBjb25zdCBvZmZzZXQgPSBnZXRGbG9hdChwcm9wcywgJy0tcHgtc3RyaXBlLW9mZnNldCcpOwogICAgICAgIGNvbnN0IHJhdGlvID0gZ2V0RmxvYXQocHJvcHMsICctLXB4LXN0cmlwZS1yYXRpbycsIDAuNSk7CiAgICAgICAgY29uc3QgbW9kZSA9IGdldFN0cihwcm9wcywgJy0tcHgtc3RyaXBlLW1vZGUnLCAnc3RyaXBlJyk7CiAgICAgICAgY29uc3QgdW5pdFNpemUgPSBnZXRJbnQocHJvcHMsICctLXB4LXN0cmlwZS1zaXplJywgNCk7CiAgICAgICAgY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlOwogICAgICAgIGNvbnN0IGNvbHMgPSBNYXRoLmNlaWwoc2l6ZS53aWR0aCAvIHVuaXRTaXplKTsKICAgICAgICBjb25zdCByb3dzID0gTWF0aC5jZWlsKHNpemUuaGVpZ2h0IC8gdW5pdFNpemUpOwogICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgcm93czsgeSsrKSB7CiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgY29sczsgeCsrKSB7CiAgICAgICAgICAgICAgICBjb25zdCBweCA9IHggKiB1bml0U2l6ZTsKICAgICAgICAgICAgICAgIGNvbnN0IHB5ID0geSAqIHVuaXRTaXplOwogICAgICAgICAgICAgICAgbGV0IGlzU3RyaXBlID0gdHJ1ZTsKICAgICAgICAgICAgICAgIGlmIChtb2RlID09PSAnY2hlY2tlcicpIHsKICAgICAgICAgICAgICAgICAgICBjb25zdCBzaGlmdGVkWCA9IHggKyBNYXRoLmZsb29yKG9mZnNldCAvIHVuaXRTaXplKTsKICAgICAgICAgICAgICAgICAgICBpc1N0cmlwZSA9IChzaGlmdGVkWCArIHkpICUgMiA9PT0gMDsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1vZGUgPT09ICdzdHJpcGUnKSB7CiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RyaXBlUGVyaW9kID0gdW5pdFNpemUgKiA0OwogICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0cmlwZVdpZHRoID0gc3RyaXBlUGVyaW9kICogcmF0aW87CiAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgZGlhZyA9IChweCAtIHB5ICsgb2Zmc2V0KSAlIHN0cmlwZVBlcmlvZAogICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpYWcgPSAoKChweCAtIHB5ICsgb2Zmc2V0KSAlIHN0cmlwZVBlcmlvZCkgKyBzdHJpcGVQZXJpb2QpICUgc3RyaXBlUGVyaW9kOwogICAgICAgICAgICAgICAgICAgIGlzU3RyaXBlID0gZGlhZyA8IHN0cmlwZVdpZHRoOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGlzU3RyaXBlID8gY29sb3IxIDogY29sb3IyOwogICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KHB4LCBweSwgdW5pdFNpemUsIHVuaXRTaXplKTsKICAgICAgICAgICAgfQogICAgICAgIH0KICAgIH0KfQpleHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJQaXhlbFN0cmlwZSgpIHsKICAgIGlmICh0eXBlb2YgcmVnaXN0ZXJQYWludCAhPT0gJ3VuZGVmaW5lZCcpIHsKICAgICAgICByZWdpc3RlclBhaW50KCdwaXhlbHN0cmlwZScsIFBpeGVsU3RyaXBlKTsKICAgIH0KfQpyZWdpc3RlclBpeGVsU3RyaXBlKCk7Cg==";
var l4 = "data:text/javascript;base64,Y29uc3QgZ2V0SW50ID0gKHByb3BzLCBuYW1lLCBmYWxsYmFjayA9IDApID0+IHsKICAgIHJldHVybiBwYXJzZUludChwcm9wcy5nZXQobmFtZSk/LnRvU3RyaW5nKCkgfHwgYCR7ZmFsbGJhY2t9YCwgMTApOwp9Owpjb25zdCBnZXRTdHIgPSAocHJvcHMsIG5hbWUsIGZhbGxiYWNrID0gJycpID0+IHsKICAgIHJldHVybiBwcm9wcy5nZXQobmFtZSk/LnRvU3RyaW5nKCkudHJpbSgpIHx8IGZhbGxiYWNrOwp9Owpjb25zdCBQSVhFTF9HUklEX0JBU0lDX1BST1BTID0gWwogICAgJy0tcHgtZ3JpZC1zaXplJywKICAgICctLXB4LWdyaWQtY29sb3ItMScsCiAgICAnLS1weC1ncmlkLWNvbG9yLTInCl07CmV4cG9ydCBjbGFzcyBQaXhlbEdyaWRCYXNpYyB7CiAgICBzdGF0aWMgZ2V0IGlucHV0UHJvcGVydGllcygpIHsKICAgICAgICByZXR1cm4gUElYRUxfR1JJRF9CQVNJQ19QUk9QUzsKICAgIH0KICAgIHBhaW50KGN0eCwgc2l6ZSwgcHJvcHMpIHsKICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHNpemU7CiAgICAgICAgY29uc3QgZ3JpZFNpemUgPSBnZXRJbnQocHJvcHMsICctLXB4LWdyaWQtc2l6ZScsIDQ4KTsKICAgICAgICBjb25zdCBncmlkQ29sb3IxID0gZ2V0U3RyKHByb3BzLCAnLS1weC1ncmlkLWNvbG9yLTEnLCAnIzAwMDAwMDJmJyk7CiAgICAgICAgY29uc3QgZ3JpZENvbG9yMiA9IGdldFN0cihwcm9wcywgJy0tcHgtZ3JpZC1jb2xvci0yJywgJyNmZmZmZmYyZicpOwogICAgICAgIC8vIOa4heepuueUu+W4gwogICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7CiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGdyaWRDb2xvcjE7CiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpOwogICAgICAgIC8vIOeUu+agvOWtkOiDjOaZrwogICAgICAgIGN0eC5maWxsU3R5bGUgPSBncmlkQ29sb3IyOwogICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgaGVpZ2h0OyB5ICs9IGdyaWRTaXplKSB7CiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgd2lkdGg7IHggKz0gZ3JpZFNpemUpIHsKICAgICAgICAgICAgICAgIGNvbnN0IGlzRXZlbiA9ICh4IC8gZ3JpZFNpemUgKyB5IC8gZ3JpZFNpemUpICUgMiA9PT0gMDsKICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBpc0V2ZW4gPyBncmlkQ29sb3IxIDogZ3JpZENvbG9yMjsKICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdCh4LCB5LCBncmlkU2l6ZSwgZ3JpZFNpemUpOwogICAgICAgICAgICB9CiAgICAgICAgfQogICAgfQp9CmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlclBpeGVsR3JpZEJhc2ljKCkgewogICAgaWYgKHR5cGVvZiByZWdpc3RlclBhaW50ICE9PSAndW5kZWZpbmVkJykgewogICAgICAgIHJlZ2lzdGVyUGFpbnQoJ3BpeGVsZ3JpZEJhc2ljJywgUGl4ZWxHcmlkQmFzaWMpOwogICAgfQp9CnJlZ2lzdGVyUGl4ZWxHcmlkQmFzaWMoKTsK";
var b6 = "data:text/javascript;base64,Y29uc3QgZ2V0SW50ID0gKHByb3BzLCBuYW1lLCBmYWxsYmFjayA9IDApID0+IHsKICAgIHJldHVybiBwYXJzZUludChwcm9wcy5nZXQobmFtZSk/LnRvU3RyaW5nKCkgfHwgYCR7ZmFsbGJhY2t9YCwgMTApOwp9Owpjb25zdCBnZXRTdHIgPSAocHJvcHMsIG5hbWUsIGZhbGxiYWNrID0gJycpID0+IHsKICAgIHJldHVybiBwcm9wcy5nZXQobmFtZSk/LnRvU3RyaW5nKCkudHJpbSgpIHx8IGZhbGxiYWNrOwp9Owpjb25zdCBQSVhFTF9HUklEX1BSRVNFVDFfUFJPUFMgPSBbCiAgICAnLS1weC1ncmlkLXNpemUnLAogICAgJy0tcHgtZ3JpZC1jb2xvci0xJywKICAgICctLXB4LWdyaWQtY29sb3ItMicKXTsKZXhwb3J0IGNsYXNzIFBpeGVsR3JpZFByZXNldDEgewogICAgc3RhdGljIGdldCBpbnB1dFByb3BlcnRpZXMoKSB7CiAgICAgICAgcmV0dXJuIFBJWEVMX0dSSURfUFJFU0VUMV9QUk9QUzsKICAgIH0KICAgIHBhaW50KGN0eCwgc2l6ZSwgcHJvcHMpIHsKICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHNpemU7CiAgICAgICAgY29uc3QgZ3JpZFNpemUgPSBnZXRJbnQocHJvcHMsICctLXB4LWdyaWQtc2l6ZScsIDQ4KTsKICAgICAgICBjb25zdCBncmlkQ29sb3IxID0gZ2V0U3RyKHByb3BzLCAnLS1weC1ncmlkLWNvbG9yLTEnLCAnIzAwMDAwMDgwJyk7CiAgICAgICAgY29uc3QgZ3JpZENvbG9yMiA9IGdldFN0cihwcm9wcywgJy0tcHgtZ3JpZC1jb2xvci0yJywgJyNmZmZmZmYyZicpOwogICAgICAgIC8vIOa4heepuueUu+W4gwogICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7CiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGdyaWRDb2xvcjE7CiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpOwogICAgICAgIC8vIOeUu+agvOWtkOiDjOaZrwogICAgICAgIC8vIOijhemlsOaApwogICAgICAgIGNvbnN0IGRyYXdHcmlkUGF0dGVybiA9IChjdHgsIGR4LCBkeSwgc2l6ZSwgY29sb3IpID0+IHsKICAgICAgICAgICAgY29uc3QgYmxvY2tTaXplID0gZ3JpZFNpemUgLyAxNjsKICAgICAgICAgICAgY3R4LnNhdmUoKTsKICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZShkeCwgZHkpOwogICAgICAgICAgICAvLyAxLzQg5Yy65Z+f57uY5Yi26YC76L6RCiAgICAgICAgICAgIGNvbnN0IGRyYXdRdWFydGVyID0gKGZsaXBYLCBmbGlwWSkgPT4gewogICAgICAgICAgICAgICAgY3R4LnNhdmUoKTsKICAgICAgICAgICAgICAgIGN0eC5zY2FsZShmbGlwWCA/IC0xIDogMSwgZmxpcFkgPyAtMSA6IDEpOwogICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yOwogICAgICAgICAgICAgICAgLy8g5Y+q57uY5Yi25q2j5ZCRIHF1YXJ0ZXIKICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBibG9ja1NpemUsIDggKiBibG9ja1NpemUpOwogICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIDggKiBibG9ja1NpemUsIGJsb2NrU2l6ZSk7CiAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QoMiAqIGJsb2NrU2l6ZSwgMiAqIGJsb2NrU2l6ZSwgYmxvY2tTaXplLCA1ICogYmxvY2tTaXplKTsKICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdCgyICogYmxvY2tTaXplLCAyICogYmxvY2tTaXplLCA1ICogYmxvY2tTaXplLCBibG9ja1NpemUpOwogICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KDMgKiBibG9ja1NpemUsIDUgKiBibG9ja1NpemUsIDIgKiBibG9ja1NpemUsIGJsb2NrU2l6ZSk7CiAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QoNSAqIGJsb2NrU2l6ZSwgMyAqIGJsb2NrU2l6ZSwgYmxvY2tTaXplLCAyICogYmxvY2tTaXplKTsKICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdCgzICogYmxvY2tTaXplLCA3ICogYmxvY2tTaXplLCAyICogYmxvY2tTaXplLCBibG9ja1NpemUpOwogICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KDcgKiBibG9ja1NpemUsIDMgKiBibG9ja1NpemUsIGJsb2NrU2l6ZSwgMiAqIGJsb2NrU2l6ZSk7CiAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QoNiAqIGJsb2NrU2l6ZSwgNyAqIGJsb2NrU2l6ZSwgYmxvY2tTaXplLCBibG9ja1NpemUpOwogICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KDcgKiBibG9ja1NpemUsIDYgKiBibG9ja1NpemUsIGJsb2NrU2l6ZSwgYmxvY2tTaXplKTsKICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdCg1ICogYmxvY2tTaXplLCA1ICogYmxvY2tTaXplLCAyICogYmxvY2tTaXplLCAyICogYmxvY2tTaXplKTsKICAgICAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7CiAgICAgICAgICAgIH07CiAgICAgICAgICAgIC8vIOWbm+ixoemZkOe7mOWItgogICAgICAgICAgICBkcmF3UXVhcnRlcihmYWxzZSwgZmFsc2UpOyAvLyDlt6bkuIoKICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZShzaXplLCAwKTsKICAgICAgICAgICAgZHJhd1F1YXJ0ZXIodHJ1ZSwgZmFsc2UpOyAvLyDlj7PkuIoKICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSgtc2l6ZSwgc2l6ZSk7CiAgICAgICAgICAgIGRyYXdRdWFydGVyKGZhbHNlLCB0cnVlKTsgLy8g5bem5LiLCiAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoc2l6ZSwgMCk7CiAgICAgICAgICAgIGRyYXdRdWFydGVyKHRydWUsIHRydWUpOyAvLyDlj7PkuIsKICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTsKICAgICAgICB9OwogICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgaGVpZ2h0OyB5ICs9IGdyaWRTaXplKSB7CiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgd2lkdGg7IHggKz0gZ3JpZFNpemUpIHsKICAgICAgICAgICAgICAgIGNvbnN0IGlzRXZlbiA9ICh4IC8gZ3JpZFNpemUgKyB5IC8gZ3JpZFNpemUpICUgMiA9PT0gMDsKICAgICAgICAgICAgICAgIGlmIChpc0V2ZW4pIHsKICAgICAgICAgICAgICAgICAgICAvLyDoirHnurnmoLzlrZDpooTorr4tMee7mOWItgogICAgICAgICAgICAgICAgICAgIGRyYXdHcmlkUGF0dGVybihjdHgsIHgsIHksIGdyaWRTaXplLCBncmlkQ29sb3IyKTsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQogICAgICAgIH0KICAgIH0KfQpleHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJQaXhlbEdyaWRQcmVzZXQxKCkgewogICAgaWYgKHR5cGVvZiByZWdpc3RlclBhaW50ICE9PSAndW5kZWZpbmVkJykgewogICAgICAgIHJlZ2lzdGVyUGFpbnQoJ3BpeGVsZ3JpZFByZXNldDEnLCBQaXhlbEdyaWRQcmVzZXQxKTsKICAgIH0KfQpyZWdpc3RlclBpeGVsR3JpZFByZXNldDEoKTsK";

// node_modules/.pnpm/@mmt817+pixel-ui@1.6.0_vue@3.5.17_typescript@5.8.3_/node_modules/@mmt817/pixel-ui/dist/es/index.js
function R5() {
  if ("undefined" != typeof CSS && "paintWorklet" in CSS) try {
    CSS.paintWorklet.addModule(g8), CSS.paintWorklet.addModule(I6), CSS.paintWorklet.addModule(C6), CSS.paintWorklet.addModule(A6), CSS.paintWorklet.addModule(G5), CSS.paintWorklet.addModule(m6), CSS.paintWorklet.addModule(Z4), CSS.paintWorklet.addModule(l4), CSS.paintWorklet.addModule(b6);
  } catch (o22) {
    console.warn("[Pixel UI] Error loading paintWorklet: ", o22);
  }
  else console.warn("[Pixel UI] CSS Houdini Paint Worklet API is not supported in this browser.");
}
var V5 = [D3, O3, l3, y3, f2, X3, Y3, j5, v3, $5, F3, E4, P6, R3, A4, c5, d4, _5, P8, me2, tt2, D4, m5, Ie2];
!function() {
  {
    const o22 = "\n____________________________________________________________________________________\n\n\n            ███╗   ███╗███╗   ███╗████████╗     █████╗  ██╗███████╗\n            ████╗ ████║████╗ ████║╚══██╔══╝    ██╔══██╗███║╚════██║\n            ██╔████╔██║██╔████╔██║   ██║       ╚█████╔╝╚██║    ██╔╝\n            ██║╚██╔╝██║██║╚██╔╝██║   ██║       ██╔══██╗ ██║   ██╔╝\n            ██║ ╚═╝ ██║██║ ╚═╝ ██║   ██║       ╚█████╔╝ ██║   ██║\n            ╚═╝     ╚═╝╚═╝     ╚═╝   ╚═╝        ╚════╝  ╚═╝   ╚═╝\n\n____________________________________________________________________________________\n                              author:mmt817🐱\n", _22 = '\n      background: linear-gradient(135deg, orange 60%, cyan);\n      background-clip: text;\n      color: transparent;\n      font-size: 16px; \n      line-height: 1;\n      font-family: "Courier New", ui-monospace, monospace;\n      font-weight: 600;\n    ';
    console.info(`%c${o22}`, _22);
  }
}(), R5();
var X5 = (Y5 = V5, (_22, s2) => {
  Sn(Y5, (o22) => _22.use(o22)), s2 && C5(s2, _22, true);
});
var Y5;
export {
  j5 as PxAlert,
  v3 as PxAnimationFrame,
  $5 as PxBadge,
  D3 as PxButton,
  O3 as PxButtonGroup,
  y3 as PxCard,
  X3 as PxCollapse,
  Y3 as PxCollapseItem,
  P8 as PxConfigProvider,
  R3 as PxDropdown,
  A4 as PxDropdownItem,
  l3 as PxIcon,
  c5 as PxImage,
  D4 as PxInput,
  me2 as PxMessage,
  Ie2 as PxMessageBox,
  tt2 as PxNotification,
  m5 as PxOverlay,
  d4 as PxPixelIt,
  P6 as PxPopconfirm,
  F3 as PxProgress,
  _5 as PxTag,
  f2 as PxText,
  E4 as PxTooltip,
  P4 as alertTypes,
  g3 as animationFrameTypes,
  y4 as badgeTypes,
  w2 as buttonNativeTypes,
  C3 as buttonSizes,
  G3 as buttonTypes,
  X5 as default,
  N4 as effectTypes,
  e3 as en,
  r3 as iconTypes,
  q3 as inputSizes,
  o3 as ja,
  Ce2 as messageBoxActions,
  we2 as messageBoxTypes,
  se2 as messageTypes,
  T6 as notificationPosition,
  H4 as notificationTypes,
  C4 as progressTypes,
  C5 as provideGlobalConfig,
  R5 as registerPaintWorklets,
  y5 as tagEffects,
  x3 as tagSizes,
  g6 as tagTypes,
  u3 as textAligns,
  d3 as textTypes,
  L4 as triggerTypes,
  b5 as useGlobalConfig,
  t as zhCN,
  a3 as zhTW
};
//# sourceMappingURL=@mmt817_pixel-ui.js.map
