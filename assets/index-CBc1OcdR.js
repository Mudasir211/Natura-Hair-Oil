function Bg(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const s = Object.getOwnPropertyDescriptor(r, i);
          s &&
            Object.defineProperty(
              e,
              i,
              s.get ? s : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
var Mh =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Ug(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Rh = { exports: {} },
  Ao = {},
  Nh = { exports: {} },
  F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ni = Symbol.for("react.element"),
  Wg = Symbol.for("react.portal"),
  Hg = Symbol.for("react.fragment"),
  $g = Symbol.for("react.strict_mode"),
  Kg = Symbol.for("react.profiler"),
  Yg = Symbol.for("react.provider"),
  Xg = Symbol.for("react.context"),
  qg = Symbol.for("react.forward_ref"),
  Gg = Symbol.for("react.suspense"),
  Qg = Symbol.for("react.memo"),
  Zg = Symbol.for("react.lazy"),
  Lc = Symbol.iterator;
function Jg(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Lc && e[Lc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Lh = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  jh = Object.assign,
  Dh = {};
function Er(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Dh),
    (this.updater = n || Lh);
}
Er.prototype.isReactComponent = {};
Er.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Er.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ih() {}
Ih.prototype = Er.prototype;
function du(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Dh),
    (this.updater = n || Lh);
}
var fu = (du.prototype = new Ih());
fu.constructor = du;
jh(fu, Er.prototype);
fu.isPureReactComponent = !0;
var jc = Array.isArray,
  Vh = Object.prototype.hasOwnProperty,
  hu = { current: null },
  Fh = { key: !0, ref: !0, __self: !0, __source: !0 };
function zh(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      Vh.call(t, r) && !Fh.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: Ni,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: hu.current,
  };
}
function ey(e, t) {
  return {
    $$typeof: Ni,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function pu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ni;
}
function ty(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Dc = /\/+/g;
function ia(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? ty("" + e.key)
    : t.toString(36);
}
function Os(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ni:
          case Wg:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + ia(o, 0) : r),
      jc(i)
        ? ((n = ""),
          e != null && (n = e.replace(Dc, "$&/") + "/"),
          Os(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (pu(i) &&
            (i = ey(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Dc, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), jc(e)))
    for (var a = 0; a < e.length; a++) {
      s = e[a];
      var l = r + ia(s, a);
      o += Os(s, t, n, l, i);
    }
  else if (((l = Jg(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(s = e.next()).done; )
      (s = s.value), (l = r + ia(s, a++)), (o += Os(s, t, n, l, i));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function Xi(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Os(e, r, "", "", function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function ny(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Le = { current: null },
  _s = { transition: null },
  ry = {
    ReactCurrentDispatcher: Le,
    ReactCurrentBatchConfig: _s,
    ReactCurrentOwner: hu,
  };
F.Children = {
  map: Xi,
  forEach: function (e, t, n) {
    Xi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Xi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Xi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!pu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
F.Component = Er;
F.Fragment = Hg;
F.Profiler = Kg;
F.PureComponent = du;
F.StrictMode = $g;
F.Suspense = Gg;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ry;
F.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = jh({}, e.props),
    i = e.key,
    s = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = hu.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Vh.call(t, l) &&
        !Fh.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Ni, type: e.type, key: i, ref: s, props: r, _owner: o };
};
F.createContext = function (e) {
  return (
    (e = {
      $$typeof: Xg,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Yg, _context: e }),
    (e.Consumer = e)
  );
};
F.createElement = zh;
F.createFactory = function (e) {
  var t = zh.bind(null, e);
  return (t.type = e), t;
};
F.createRef = function () {
  return { current: null };
};
F.forwardRef = function (e) {
  return { $$typeof: qg, render: e };
};
F.isValidElement = pu;
F.lazy = function (e) {
  return { $$typeof: Zg, _payload: { _status: -1, _result: e }, _init: ny };
};
F.memo = function (e, t) {
  return { $$typeof: Qg, type: e, compare: t === void 0 ? null : t };
};
F.startTransition = function (e) {
  var t = _s.transition;
  _s.transition = {};
  try {
    e();
  } finally {
    _s.transition = t;
  }
};
F.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
F.useCallback = function (e, t) {
  return Le.current.useCallback(e, t);
};
F.useContext = function (e) {
  return Le.current.useContext(e);
};
F.useDebugValue = function () {};
F.useDeferredValue = function (e) {
  return Le.current.useDeferredValue(e);
};
F.useEffect = function (e, t) {
  return Le.current.useEffect(e, t);
};
F.useId = function () {
  return Le.current.useId();
};
F.useImperativeHandle = function (e, t, n) {
  return Le.current.useImperativeHandle(e, t, n);
};
F.useInsertionEffect = function (e, t) {
  return Le.current.useInsertionEffect(e, t);
};
F.useLayoutEffect = function (e, t) {
  return Le.current.useLayoutEffect(e, t);
};
F.useMemo = function (e, t) {
  return Le.current.useMemo(e, t);
};
F.useReducer = function (e, t, n) {
  return Le.current.useReducer(e, t, n);
};
F.useRef = function (e) {
  return Le.current.useRef(e);
};
F.useState = function (e) {
  return Le.current.useState(e);
};
F.useSyncExternalStore = function (e, t, n) {
  return Le.current.useSyncExternalStore(e, t, n);
};
F.useTransition = function () {
  return Le.current.useTransition();
};
F.version = "18.2.0";
Nh.exports = F;
var _ = Nh.exports;
const N = Ug(_),
  iy = Bg({ __proto__: null, default: N }, [_]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sy = _,
  oy = Symbol.for("react.element"),
  ay = Symbol.for("react.fragment"),
  ly = Object.prototype.hasOwnProperty,
  uy = sy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  cy = { key: !0, ref: !0, __self: !0, __source: !0 };
function Bh(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) ly.call(t, r) && !cy.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: oy,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: uy.current,
  };
}
Ao.Fragment = ay;
Ao.jsx = Bh;
Ao.jsxs = Bh;
Rh.exports = Ao;
var g = Rh.exports,
  Ya = {},
  Uh = { exports: {} },
  Je = {},
  Wh = { exports: {} },
  Hh = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(A, j) {
    var I = A.length;
    A.push(j);
    e: for (; 0 < I; ) {
      var ie = (I - 1) >>> 1,
        de = A[ie];
      if (0 < i(de, j)) (A[ie] = j), (A[I] = de), (I = ie);
      else break e;
    }
  }
  function n(A) {
    return A.length === 0 ? null : A[0];
  }
  function r(A) {
    if (A.length === 0) return null;
    var j = A[0],
      I = A.pop();
    if (I !== j) {
      A[0] = I;
      e: for (var ie = 0, de = A.length, Ki = de >>> 1; ie < Ki; ) {
        var xn = 2 * (ie + 1) - 1,
          ra = A[xn],
          Pn = xn + 1,
          Yi = A[Pn];
        if (0 > i(ra, I))
          Pn < de && 0 > i(Yi, ra)
            ? ((A[ie] = Yi), (A[Pn] = I), (ie = Pn))
            : ((A[ie] = ra), (A[xn] = I), (ie = xn));
        else if (Pn < de && 0 > i(Yi, I)) (A[ie] = Yi), (A[Pn] = I), (ie = Pn);
        else break e;
      }
    }
    return j;
  }
  function i(A, j) {
    var I = A.sortIndex - j.sortIndex;
    return I !== 0 ? I : A.id - j.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    v = !1,
    y = !1,
    w = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(A) {
    for (var j = n(u); j !== null; ) {
      if (j.callback === null) r(u);
      else if (j.startTime <= A)
        r(u), (j.sortIndex = j.expirationTime), t(l, j);
      else break;
      j = n(u);
    }
  }
  function S(A) {
    if (((w = !1), p(A), !y))
      if (n(l) !== null) (y = !0), _e(P);
      else {
        var j = n(u);
        j !== null && At(S, j.startTime - A);
      }
  }
  function P(A, j) {
    (y = !1), w && ((w = !1), m(T), (T = -1)), (v = !0);
    var I = f;
    try {
      for (
        p(j), d = n(l);
        d !== null && (!(d.expirationTime > j) || (A && !B()));

      ) {
        var ie = d.callback;
        if (typeof ie == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var de = ie(d.expirationTime <= j);
          (j = e.unstable_now()),
            typeof de == "function" ? (d.callback = de) : d === n(l) && r(l),
            p(j);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var Ki = !0;
      else {
        var xn = n(u);
        xn !== null && At(S, xn.startTime - j), (Ki = !1);
      }
      return Ki;
    } finally {
      (d = null), (f = I), (v = !1);
    }
  }
  var C = !1,
    b = null,
    T = -1,
    L = 5,
    M = -1;
  function B() {
    return !(e.unstable_now() - M < L);
  }
  function We() {
    if (b !== null) {
      var A = e.unstable_now();
      M = A;
      var j = !0;
      try {
        j = b(!0, A);
      } finally {
        j ? He() : ((C = !1), (b = null));
      }
    } else C = !1;
  }
  var He;
  if (typeof h == "function")
    He = function () {
      h(We);
    };
  else if (typeof MessageChannel < "u") {
    var wn = new MessageChannel(),
      le = wn.port2;
    (wn.port1.onmessage = We),
      (He = function () {
        le.postMessage(null);
      });
  } else
    He = function () {
      k(We, 0);
    };
  function _e(A) {
    (b = A), C || ((C = !0), He());
  }
  function At(A, j) {
    T = k(function () {
      A(e.unstable_now());
    }, j);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (A) {
      A.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || v || ((y = !0), _e(P));
    }),
    (e.unstable_forceFrameRate = function (A) {
      0 > A || 125 < A
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (L = 0 < A ? Math.floor(1e3 / A) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (A) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = f;
      }
      var I = f;
      f = j;
      try {
        return A();
      } finally {
        f = I;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (A, j) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var I = f;
      f = A;
      try {
        return j();
      } finally {
        f = I;
      }
    }),
    (e.unstable_scheduleCallback = function (A, j, I) {
      var ie = e.unstable_now();
      switch (
        (typeof I == "object" && I !== null
          ? ((I = I.delay), (I = typeof I == "number" && 0 < I ? ie + I : ie))
          : (I = ie),
        A)
      ) {
        case 1:
          var de = -1;
          break;
        case 2:
          de = 250;
          break;
        case 5:
          de = 1073741823;
          break;
        case 4:
          de = 1e4;
          break;
        default:
          de = 5e3;
      }
      return (
        (de = I + de),
        (A = {
          id: c++,
          callback: j,
          priorityLevel: A,
          startTime: I,
          expirationTime: de,
          sortIndex: -1,
        }),
        I > ie
          ? ((A.sortIndex = I),
            t(u, A),
            n(l) === null &&
              A === n(u) &&
              (w ? (m(T), (T = -1)) : (w = !0), At(S, I - ie)))
          : ((A.sortIndex = de), t(l, A), y || v || ((y = !0), _e(P))),
        A
      );
    }),
    (e.unstable_shouldYield = B),
    (e.unstable_wrapCallback = function (A) {
      var j = f;
      return function () {
        var I = f;
        f = j;
        try {
          return A.apply(this, arguments);
        } finally {
          f = I;
        }
      };
    });
})(Hh);
Wh.exports = Hh;
var dy = Wh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $h = _,
  Qe = dy;
function E(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Kh = new Set(),
  ci = {};
function Wn(e, t) {
  gr(e, t), gr(e + "Capture", t);
}
function gr(e, t) {
  for (ci[e] = t, e = 0; e < t.length; e++) Kh.add(t[e]);
}
var Ft = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Xa = Object.prototype.hasOwnProperty,
  fy =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ic = {},
  Vc = {};
function hy(e) {
  return Xa.call(Vc, e)
    ? !0
    : Xa.call(Ic, e)
    ? !1
    : fy.test(e)
    ? (Vc[e] = !0)
    : ((Ic[e] = !0), !1);
}
function py(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function my(e, t, n, r) {
  if (t === null || typeof t > "u" || py(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function je(e, t, n, r, i, s, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var ye = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ye[e] = new je(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ye[t] = new je(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ye[e] = new je(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ye[e] = new je(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ye[e] = new je(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ye[e] = new je(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ye[e] = new je(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ye[e] = new je(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ye[e] = new je(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var mu = /[\-:]([a-z])/g;
function vu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(mu, vu);
    ye[t] = new je(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(mu, vu);
    ye[t] = new je(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(mu, vu);
  ye[t] = new je(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ye[e] = new je(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ye.xlinkHref = new je(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ye[e] = new je(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function gu(e, t, n, r) {
  var i = ye.hasOwnProperty(t) ? ye[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (my(t, n, i, r) && (n = null),
    r || i === null
      ? hy(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ht = $h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  qi = Symbol.for("react.element"),
  Yn = Symbol.for("react.portal"),
  Xn = Symbol.for("react.fragment"),
  yu = Symbol.for("react.strict_mode"),
  qa = Symbol.for("react.profiler"),
  Yh = Symbol.for("react.provider"),
  Xh = Symbol.for("react.context"),
  Su = Symbol.for("react.forward_ref"),
  Ga = Symbol.for("react.suspense"),
  Qa = Symbol.for("react.suspense_list"),
  wu = Symbol.for("react.memo"),
  Xt = Symbol.for("react.lazy"),
  qh = Symbol.for("react.offscreen"),
  Fc = Symbol.iterator;
function Mr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Fc && e[Fc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ne = Object.assign,
  sa;
function Br(e) {
  if (sa === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      sa = (t && t[1]) || "";
    }
  return (
    `
` +
    sa +
    e
  );
}
var oa = !1;
function aa(e, t) {
  if (!e || oa) return "";
  oa = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          a = s.length - 1;
        1 <= o && 0 <= a && i[o] !== s[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (i[o] !== s[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || i[o] !== s[a])) {
                var l =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (oa = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Br(e) : "";
}
function vy(e) {
  switch (e.tag) {
    case 5:
      return Br(e.type);
    case 16:
      return Br("Lazy");
    case 13:
      return Br("Suspense");
    case 19:
      return Br("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = aa(e.type, !1)), e;
    case 11:
      return (e = aa(e.type.render, !1)), e;
    case 1:
      return (e = aa(e.type, !0)), e;
    default:
      return "";
  }
}
function Za(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Xn:
      return "Fragment";
    case Yn:
      return "Portal";
    case qa:
      return "Profiler";
    case yu:
      return "StrictMode";
    case Ga:
      return "Suspense";
    case Qa:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Xh:
        return (e.displayName || "Context") + ".Consumer";
      case Yh:
        return (e._context.displayName || "Context") + ".Provider";
      case Su:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case wu:
        return (
          (t = e.displayName || null), t !== null ? t : Za(e.type) || "Memo"
        );
      case Xt:
        (t = e._payload), (e = e._init);
        try {
          return Za(e(t));
        } catch {}
    }
  return null;
}
function gy(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Za(t);
    case 8:
      return t === yu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function dn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Gh(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function yy(e) {
  var t = Gh(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), s.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Gi(e) {
  e._valueTracker || (e._valueTracker = yy(e));
}
function Qh(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Gh(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ks(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ja(e, t) {
  var n = t.checked;
  return ne({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function zc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = dn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Zh(e, t) {
  (t = t.checked), t != null && gu(e, "checked", t, !1);
}
function el(e, t) {
  Zh(e, t);
  var n = dn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? tl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && tl(e, t.type, dn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Bc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function tl(e, t, n) {
  (t !== "number" || Ks(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ur = Array.isArray;
function dr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + dn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function nl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return ne({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Uc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(E(92));
      if (Ur(n)) {
        if (1 < n.length) throw Error(E(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: dn(n) };
}
function Jh(e, t) {
  var n = dn(t.value),
    r = dn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Wc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ep(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function rl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ep(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Qi,
  tp = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Qi = Qi || document.createElement("div"),
          Qi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Qi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function di(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var qr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Sy = ["Webkit", "ms", "Moz", "O"];
Object.keys(qr).forEach(function (e) {
  Sy.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (qr[t] = qr[e]);
  });
});
function np(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (qr.hasOwnProperty(e) && qr[e])
    ? ("" + t).trim()
    : t + "px";
}
function rp(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = np(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var wy = ne(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function il(e, t) {
  if (t) {
    if (wy[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(E(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(E(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(E(62));
  }
}
function sl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ol = null;
function xu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var al = null,
  fr = null,
  hr = null;
function Hc(e) {
  if ((e = Di(e))) {
    if (typeof al != "function") throw Error(E(280));
    var t = e.stateNode;
    t && ((t = No(t)), al(e.stateNode, e.type, t));
  }
}
function ip(e) {
  fr ? (hr ? hr.push(e) : (hr = [e])) : (fr = e);
}
function sp() {
  if (fr) {
    var e = fr,
      t = hr;
    if (((hr = fr = null), Hc(e), t)) for (e = 0; e < t.length; e++) Hc(t[e]);
  }
}
function op(e, t) {
  return e(t);
}
function ap() {}
var la = !1;
function lp(e, t, n) {
  if (la) return e(t, n);
  la = !0;
  try {
    return op(e, t, n);
  } finally {
    (la = !1), (fr !== null || hr !== null) && (ap(), sp());
  }
}
function fi(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = No(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(E(231, t, typeof n));
  return n;
}
var ll = !1;
if (Ft)
  try {
    var Rr = {};
    Object.defineProperty(Rr, "passive", {
      get: function () {
        ll = !0;
      },
    }),
      window.addEventListener("test", Rr, Rr),
      window.removeEventListener("test", Rr, Rr);
  } catch {
    ll = !1;
  }
function xy(e, t, n, r, i, s, o, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Gr = !1,
  Ys = null,
  Xs = !1,
  ul = null,
  Py = {
    onError: function (e) {
      (Gr = !0), (Ys = e);
    },
  };
function Ty(e, t, n, r, i, s, o, a, l) {
  (Gr = !1), (Ys = null), xy.apply(Py, arguments);
}
function ky(e, t, n, r, i, s, o, a, l) {
  if ((Ty.apply(this, arguments), Gr)) {
    if (Gr) {
      var u = Ys;
      (Gr = !1), (Ys = null);
    } else throw Error(E(198));
    Xs || ((Xs = !0), (ul = u));
  }
}
function Hn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function up(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function $c(e) {
  if (Hn(e) !== e) throw Error(E(188));
}
function Cy(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Hn(e)), t === null)) throw Error(E(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return $c(i), e;
        if (s === r) return $c(i), t;
        s = s.sibling;
      }
      throw Error(E(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var o = !1, a = i.child; a; ) {
        if (a === n) {
          (o = !0), (n = i), (r = s);
          break;
        }
        if (a === r) {
          (o = !0), (r = i), (n = s);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = s.child; a; ) {
          if (a === n) {
            (o = !0), (n = s), (r = i);
            break;
          }
          if (a === r) {
            (o = !0), (r = s), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(E(189));
      }
    }
    if (n.alternate !== r) throw Error(E(190));
  }
  if (n.tag !== 3) throw Error(E(188));
  return n.stateNode.current === n ? e : t;
}
function cp(e) {
  return (e = Cy(e)), e !== null ? dp(e) : null;
}
function dp(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = dp(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var fp = Qe.unstable_scheduleCallback,
  Kc = Qe.unstable_cancelCallback,
  Ey = Qe.unstable_shouldYield,
  by = Qe.unstable_requestPaint,
  oe = Qe.unstable_now,
  Ay = Qe.unstable_getCurrentPriorityLevel,
  Pu = Qe.unstable_ImmediatePriority,
  hp = Qe.unstable_UserBlockingPriority,
  qs = Qe.unstable_NormalPriority,
  Oy = Qe.unstable_LowPriority,
  pp = Qe.unstable_IdlePriority,
  Oo = null,
  Ct = null;
function _y(e) {
  if (Ct && typeof Ct.onCommitFiberRoot == "function")
    try {
      Ct.onCommitFiberRoot(Oo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var mt = Math.clz32 ? Math.clz32 : Ny,
  My = Math.log,
  Ry = Math.LN2;
function Ny(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((My(e) / Ry) | 0)) | 0;
}
var Zi = 64,
  Ji = 4194304;
function Wr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Gs(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~i;
    a !== 0 ? (r = Wr(a)) : ((s &= o), s !== 0 && (r = Wr(s)));
  } else (o = n & ~i), o !== 0 ? (r = Wr(o)) : s !== 0 && (r = Wr(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - mt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Ly(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function jy(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var o = 31 - mt(s),
      a = 1 << o,
      l = i[o];
    l === -1
      ? (!(a & n) || a & r) && (i[o] = Ly(a, t))
      : l <= t && (e.expiredLanes |= a),
      (s &= ~a);
  }
}
function cl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function mp() {
  var e = Zi;
  return (Zi <<= 1), !(Zi & 4194240) && (Zi = 64), e;
}
function ua(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Li(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - mt(t)),
    (e[t] = n);
}
function Dy(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - mt(n),
      s = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s);
  }
}
function Tu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - mt(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var $ = 0;
function vp(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var gp,
  ku,
  yp,
  Sp,
  wp,
  dl = !1,
  es = [],
  en = null,
  tn = null,
  nn = null,
  hi = new Map(),
  pi = new Map(),
  Gt = [],
  Iy =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Yc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      en = null;
      break;
    case "dragenter":
    case "dragleave":
      tn = null;
      break;
    case "mouseover":
    case "mouseout":
      nn = null;
      break;
    case "pointerover":
    case "pointerout":
      hi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      pi.delete(t.pointerId);
  }
}
function Nr(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = Di(t)), t !== null && ku(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Vy(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (en = Nr(en, e, t, n, r, i)), !0;
    case "dragenter":
      return (tn = Nr(tn, e, t, n, r, i)), !0;
    case "mouseover":
      return (nn = Nr(nn, e, t, n, r, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return hi.set(s, Nr(hi.get(s) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (s = i.pointerId), pi.set(s, Nr(pi.get(s) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function xp(e) {
  var t = _n(e.target);
  if (t !== null) {
    var n = Hn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = up(n)), t !== null)) {
          (e.blockedOn = t),
            wp(e.priority, function () {
              yp(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ms(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = fl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ol = r), n.target.dispatchEvent(r), (ol = null);
    } else return (t = Di(n)), t !== null && ku(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Xc(e, t, n) {
  Ms(e) && n.delete(t);
}
function Fy() {
  (dl = !1),
    en !== null && Ms(en) && (en = null),
    tn !== null && Ms(tn) && (tn = null),
    nn !== null && Ms(nn) && (nn = null),
    hi.forEach(Xc),
    pi.forEach(Xc);
}
function Lr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    dl ||
      ((dl = !0),
      Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority, Fy)));
}
function mi(e) {
  function t(i) {
    return Lr(i, e);
  }
  if (0 < es.length) {
    Lr(es[0], e);
    for (var n = 1; n < es.length; n++) {
      var r = es[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    en !== null && Lr(en, e),
      tn !== null && Lr(tn, e),
      nn !== null && Lr(nn, e),
      hi.forEach(t),
      pi.forEach(t),
      n = 0;
    n < Gt.length;
    n++
  )
    (r = Gt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Gt.length && ((n = Gt[0]), n.blockedOn === null); )
    xp(n), n.blockedOn === null && Gt.shift();
}
var pr = Ht.ReactCurrentBatchConfig,
  Qs = !0;
function zy(e, t, n, r) {
  var i = $,
    s = pr.transition;
  pr.transition = null;
  try {
    ($ = 1), Cu(e, t, n, r);
  } finally {
    ($ = i), (pr.transition = s);
  }
}
function By(e, t, n, r) {
  var i = $,
    s = pr.transition;
  pr.transition = null;
  try {
    ($ = 4), Cu(e, t, n, r);
  } finally {
    ($ = i), (pr.transition = s);
  }
}
function Cu(e, t, n, r) {
  if (Qs) {
    var i = fl(e, t, n, r);
    if (i === null) Sa(e, t, r, Zs, n), Yc(e, r);
    else if (Vy(i, e, t, n, r)) r.stopPropagation();
    else if ((Yc(e, r), t & 4 && -1 < Iy.indexOf(e))) {
      for (; i !== null; ) {
        var s = Di(i);
        if (
          (s !== null && gp(s),
          (s = fl(e, t, n, r)),
          s === null && Sa(e, t, r, Zs, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else Sa(e, t, r, null, n);
  }
}
var Zs = null;
function fl(e, t, n, r) {
  if (((Zs = null), (e = xu(r)), (e = _n(e)), e !== null))
    if (((t = Hn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = up(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Zs = e), null;
}
function Pp(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Ay()) {
        case Pu:
          return 1;
        case hp:
          return 4;
        case qs:
        case Oy:
          return 16;
        case pp:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Zt = null,
  Eu = null,
  Rs = null;
function Tp() {
  if (Rs) return Rs;
  var e,
    t = Eu,
    n = t.length,
    r,
    i = "value" in Zt ? Zt.value : Zt.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
  return (Rs = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Ns(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ts() {
  return !0;
}
function qc() {
  return !1;
}
function et(e) {
  function t(n, r, i, s, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(s) : s[a]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? ts
        : qc),
      (this.isPropagationStopped = qc),
      this
    );
  }
  return (
    ne(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ts));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ts));
      },
      persist: function () {},
      isPersistent: ts,
    }),
    t
  );
}
var br = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  bu = et(br),
  ji = ne({}, br, { view: 0, detail: 0 }),
  Uy = et(ji),
  ca,
  da,
  jr,
  _o = ne({}, ji, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Au,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== jr &&
            (jr && e.type === "mousemove"
              ? ((ca = e.screenX - jr.screenX), (da = e.screenY - jr.screenY))
              : (da = ca = 0),
            (jr = e)),
          ca);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : da;
    },
  }),
  Gc = et(_o),
  Wy = ne({}, _o, { dataTransfer: 0 }),
  Hy = et(Wy),
  $y = ne({}, ji, { relatedTarget: 0 }),
  fa = et($y),
  Ky = ne({}, br, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Yy = et(Ky),
  Xy = ne({}, br, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  qy = et(Xy),
  Gy = ne({}, br, { data: 0 }),
  Qc = et(Gy),
  Qy = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Zy = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Jy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function e0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Jy[e]) ? !!t[e] : !1;
}
function Au() {
  return e0;
}
var t0 = ne({}, ji, {
    key: function (e) {
      if (e.key) {
        var t = Qy[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ns(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Zy[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Au,
    charCode: function (e) {
      return e.type === "keypress" ? Ns(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ns(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  n0 = et(t0),
  r0 = ne({}, _o, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Zc = et(r0),
  i0 = ne({}, ji, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Au,
  }),
  s0 = et(i0),
  o0 = ne({}, br, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  a0 = et(o0),
  l0 = ne({}, _o, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  u0 = et(l0),
  c0 = [9, 13, 27, 32],
  Ou = Ft && "CompositionEvent" in window,
  Qr = null;
Ft && "documentMode" in document && (Qr = document.documentMode);
var d0 = Ft && "TextEvent" in window && !Qr,
  kp = Ft && (!Ou || (Qr && 8 < Qr && 11 >= Qr)),
  Jc = " ",
  ed = !1;
function Cp(e, t) {
  switch (e) {
    case "keyup":
      return c0.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ep(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var qn = !1;
function f0(e, t) {
  switch (e) {
    case "compositionend":
      return Ep(t);
    case "keypress":
      return t.which !== 32 ? null : ((ed = !0), Jc);
    case "textInput":
      return (e = t.data), e === Jc && ed ? null : e;
    default:
      return null;
  }
}
function h0(e, t) {
  if (qn)
    return e === "compositionend" || (!Ou && Cp(e, t))
      ? ((e = Tp()), (Rs = Eu = Zt = null), (qn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return kp && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var p0 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function td(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!p0[e.type] : t === "textarea";
}
function bp(e, t, n, r) {
  ip(r),
    (t = Js(t, "onChange")),
    0 < t.length &&
      ((n = new bu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Zr = null,
  vi = null;
function m0(e) {
  Vp(e, 0);
}
function Mo(e) {
  var t = Zn(e);
  if (Qh(t)) return e;
}
function v0(e, t) {
  if (e === "change") return t;
}
var Ap = !1;
if (Ft) {
  var ha;
  if (Ft) {
    var pa = "oninput" in document;
    if (!pa) {
      var nd = document.createElement("div");
      nd.setAttribute("oninput", "return;"),
        (pa = typeof nd.oninput == "function");
    }
    ha = pa;
  } else ha = !1;
  Ap = ha && (!document.documentMode || 9 < document.documentMode);
}
function rd() {
  Zr && (Zr.detachEvent("onpropertychange", Op), (vi = Zr = null));
}
function Op(e) {
  if (e.propertyName === "value" && Mo(vi)) {
    var t = [];
    bp(t, vi, e, xu(e)), lp(m0, t);
  }
}
function g0(e, t, n) {
  e === "focusin"
    ? (rd(), (Zr = t), (vi = n), Zr.attachEvent("onpropertychange", Op))
    : e === "focusout" && rd();
}
function y0(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Mo(vi);
}
function S0(e, t) {
  if (e === "click") return Mo(t);
}
function w0(e, t) {
  if (e === "input" || e === "change") return Mo(t);
}
function x0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var gt = typeof Object.is == "function" ? Object.is : x0;
function gi(e, t) {
  if (gt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Xa.call(t, i) || !gt(e[i], t[i])) return !1;
  }
  return !0;
}
function id(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function sd(e, t) {
  var n = id(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = id(n);
  }
}
function _p(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? _p(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Mp() {
  for (var e = window, t = Ks(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ks(e.document);
  }
  return t;
}
function _u(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function P0(e) {
  var t = Mp(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    _p(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && _u(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = sd(n, s));
        var o = sd(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var T0 = Ft && "documentMode" in document && 11 >= document.documentMode,
  Gn = null,
  hl = null,
  Jr = null,
  pl = !1;
function od(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  pl ||
    Gn == null ||
    Gn !== Ks(r) ||
    ((r = Gn),
    "selectionStart" in r && _u(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Jr && gi(Jr, r)) ||
      ((Jr = r),
      (r = Js(hl, "onSelect")),
      0 < r.length &&
        ((t = new bu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Gn))));
}
function ns(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Qn = {
    animationend: ns("Animation", "AnimationEnd"),
    animationiteration: ns("Animation", "AnimationIteration"),
    animationstart: ns("Animation", "AnimationStart"),
    transitionend: ns("Transition", "TransitionEnd"),
  },
  ma = {},
  Rp = {};
Ft &&
  ((Rp = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Qn.animationend.animation,
    delete Qn.animationiteration.animation,
    delete Qn.animationstart.animation),
  "TransitionEvent" in window || delete Qn.transitionend.transition);
function Ro(e) {
  if (ma[e]) return ma[e];
  if (!Qn[e]) return e;
  var t = Qn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Rp) return (ma[e] = t[n]);
  return e;
}
var Np = Ro("animationend"),
  Lp = Ro("animationiteration"),
  jp = Ro("animationstart"),
  Dp = Ro("transitionend"),
  Ip = new Map(),
  ad =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function mn(e, t) {
  Ip.set(e, t), Wn(t, [e]);
}
for (var va = 0; va < ad.length; va++) {
  var ga = ad[va],
    k0 = ga.toLowerCase(),
    C0 = ga[0].toUpperCase() + ga.slice(1);
  mn(k0, "on" + C0);
}
mn(Np, "onAnimationEnd");
mn(Lp, "onAnimationIteration");
mn(jp, "onAnimationStart");
mn("dblclick", "onDoubleClick");
mn("focusin", "onFocus");
mn("focusout", "onBlur");
mn(Dp, "onTransitionEnd");
gr("onMouseEnter", ["mouseout", "mouseover"]);
gr("onMouseLeave", ["mouseout", "mouseover"]);
gr("onPointerEnter", ["pointerout", "pointerover"]);
gr("onPointerLeave", ["pointerout", "pointerover"]);
Wn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Wn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Wn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Wn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Wn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Wn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Hr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  E0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Hr));
function ld(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), ky(r, t, void 0, e), (e.currentTarget = null);
}
function Vp(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== s && i.isPropagationStopped())) break e;
          ld(i, a, u), (s = l);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== s && i.isPropagationStopped())
          )
            break e;
          ld(i, a, u), (s = l);
        }
    }
  }
  if (Xs) throw ((e = ul), (Xs = !1), (ul = null), e);
}
function X(e, t) {
  var n = t[Sl];
  n === void 0 && (n = t[Sl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Fp(t, e, 2, !1), n.add(r));
}
function ya(e, t, n) {
  var r = 0;
  t && (r |= 4), Fp(n, e, r, t);
}
var rs = "_reactListening" + Math.random().toString(36).slice(2);
function yi(e) {
  if (!e[rs]) {
    (e[rs] = !0),
      Kh.forEach(function (n) {
        n !== "selectionchange" && (E0.has(n) || ya(n, !1, e), ya(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[rs] || ((t[rs] = !0), ya("selectionchange", !1, t));
  }
}
function Fp(e, t, n, r) {
  switch (Pp(t)) {
    case 1:
      var i = zy;
      break;
    case 4:
      i = By;
      break;
    default:
      i = Cu;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !ll ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Sa(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = _n(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            r = s = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  lp(function () {
    var u = s,
      c = xu(n),
      d = [];
    e: {
      var f = Ip.get(e);
      if (f !== void 0) {
        var v = bu,
          y = e;
        switch (e) {
          case "keypress":
            if (Ns(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = n0;
            break;
          case "focusin":
            (y = "focus"), (v = fa);
            break;
          case "focusout":
            (y = "blur"), (v = fa);
            break;
          case "beforeblur":
          case "afterblur":
            v = fa;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Gc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Hy;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = s0;
            break;
          case Np:
          case Lp:
          case jp:
            v = Yy;
            break;
          case Dp:
            v = a0;
            break;
          case "scroll":
            v = Uy;
            break;
          case "wheel":
            v = u0;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = qy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Zc;
        }
        var w = (t & 4) !== 0,
          k = !w && e === "scroll",
          m = w ? (f !== null ? f + "Capture" : null) : f;
        w = [];
        for (var h = u, p; h !== null; ) {
          p = h;
          var S = p.stateNode;
          if (
            (p.tag === 5 &&
              S !== null &&
              ((p = S),
              m !== null && ((S = fi(h, m)), S != null && w.push(Si(h, S, p)))),
            k)
          )
            break;
          h = h.return;
        }
        0 < w.length &&
          ((f = new v(f, y, null, n, c)), d.push({ event: f, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          f &&
            n !== ol &&
            (y = n.relatedTarget || n.fromElement) &&
            (_n(y) || y[zt]))
        )
          break e;
        if (
          (v || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          v
            ? ((y = n.relatedTarget || n.toElement),
              (v = u),
              (y = y ? _n(y) : null),
              y !== null &&
                ((k = Hn(y)), y !== k || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((v = null), (y = u)),
          v !== y)
        ) {
          if (
            ((w = Gc),
            (S = "onMouseLeave"),
            (m = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = Zc),
              (S = "onPointerLeave"),
              (m = "onPointerEnter"),
              (h = "pointer")),
            (k = v == null ? f : Zn(v)),
            (p = y == null ? f : Zn(y)),
            (f = new w(S, h + "leave", v, n, c)),
            (f.target = k),
            (f.relatedTarget = p),
            (S = null),
            _n(c) === u &&
              ((w = new w(m, h + "enter", y, n, c)),
              (w.target = p),
              (w.relatedTarget = k),
              (S = w)),
            (k = S),
            v && y)
          )
            t: {
              for (w = v, m = y, h = 0, p = w; p; p = $n(p)) h++;
              for (p = 0, S = m; S; S = $n(S)) p++;
              for (; 0 < h - p; ) (w = $n(w)), h--;
              for (; 0 < p - h; ) (m = $n(m)), p--;
              for (; h--; ) {
                if (w === m || (m !== null && w === m.alternate)) break t;
                (w = $n(w)), (m = $n(m));
              }
              w = null;
            }
          else w = null;
          v !== null && ud(d, f, v, w, !1),
            y !== null && k !== null && ud(d, k, y, w, !0);
        }
      }
      e: {
        if (
          ((f = u ? Zn(u) : window),
          (v = f.nodeName && f.nodeName.toLowerCase()),
          v === "select" || (v === "input" && f.type === "file"))
        )
          var P = v0;
        else if (td(f))
          if (Ap) P = w0;
          else {
            P = y0;
            var C = g0;
          }
        else
          (v = f.nodeName) &&
            v.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (P = S0);
        if (P && (P = P(e, u))) {
          bp(d, P, n, c);
          break e;
        }
        C && C(e, f, u),
          e === "focusout" &&
            (C = f._wrapperState) &&
            C.controlled &&
            f.type === "number" &&
            tl(f, "number", f.value);
      }
      switch (((C = u ? Zn(u) : window), e)) {
        case "focusin":
          (td(C) || C.contentEditable === "true") &&
            ((Gn = C), (hl = u), (Jr = null));
          break;
        case "focusout":
          Jr = hl = Gn = null;
          break;
        case "mousedown":
          pl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (pl = !1), od(d, n, c);
          break;
        case "selectionchange":
          if (T0) break;
        case "keydown":
        case "keyup":
          od(d, n, c);
      }
      var b;
      if (Ou)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        qn
          ? Cp(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (kp &&
          n.locale !== "ko" &&
          (qn || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && qn && (b = Tp())
            : ((Zt = c),
              (Eu = "value" in Zt ? Zt.value : Zt.textContent),
              (qn = !0))),
        (C = Js(u, T)),
        0 < C.length &&
          ((T = new Qc(T, e, null, n, c)),
          d.push({ event: T, listeners: C }),
          b ? (T.data = b) : ((b = Ep(n)), b !== null && (T.data = b)))),
        (b = d0 ? f0(e, n) : h0(e, n)) &&
          ((u = Js(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Qc("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = b)));
    }
    Vp(d, t);
  });
}
function Si(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Js(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = fi(e, n)),
      s != null && r.unshift(Si(e, s, i)),
      (s = fi(e, t)),
      s != null && r.push(Si(e, s, i))),
      (e = e.return);
  }
  return r;
}
function $n(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ud(e, t, n, r, i) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = fi(n, s)), l != null && o.unshift(Si(n, l, a)))
        : i || ((l = fi(n, s)), l != null && o.push(Si(n, l, a)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var b0 = /\r\n?/g,
  A0 = /\u0000|\uFFFD/g;
function cd(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      b0,
      `
`
    )
    .replace(A0, "");
}
function is(e, t, n) {
  if (((t = cd(t)), cd(e) !== t && n)) throw Error(E(425));
}
function eo() {}
var ml = null,
  vl = null;
function gl(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var yl = typeof setTimeout == "function" ? setTimeout : void 0,
  O0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  dd = typeof Promise == "function" ? Promise : void 0,
  _0 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof dd < "u"
      ? function (e) {
          return dd.resolve(null).then(e).catch(M0);
        }
      : yl;
function M0(e) {
  setTimeout(function () {
    throw e;
  });
}
function wa(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), mi(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  mi(t);
}
function rn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function fd(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Ar = Math.random().toString(36).slice(2),
  Pt = "__reactFiber$" + Ar,
  wi = "__reactProps$" + Ar,
  zt = "__reactContainer$" + Ar,
  Sl = "__reactEvents$" + Ar,
  R0 = "__reactListeners$" + Ar,
  N0 = "__reactHandles$" + Ar;
function _n(e) {
  var t = e[Pt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[zt] || n[Pt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = fd(e); e !== null; ) {
          if ((n = e[Pt])) return n;
          e = fd(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Di(e) {
  return (
    (e = e[Pt] || e[zt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Zn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function No(e) {
  return e[wi] || null;
}
var wl = [],
  Jn = -1;
function vn(e) {
  return { current: e };
}
function q(e) {
  0 > Jn || ((e.current = wl[Jn]), (wl[Jn] = null), Jn--);
}
function Y(e, t) {
  Jn++, (wl[Jn] = e.current), (e.current = t);
}
var fn = {},
  be = vn(fn),
  Ve = vn(!1),
  Vn = fn;
function yr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return fn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Fe(e) {
  return (e = e.childContextTypes), e != null;
}
function to() {
  q(Ve), q(be);
}
function hd(e, t, n) {
  if (be.current !== fn) throw Error(E(168));
  Y(be, t), Y(Ve, n);
}
function zp(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(E(108, gy(e) || "Unknown", i));
  return ne({}, n, r);
}
function no(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || fn),
    (Vn = be.current),
    Y(be, e),
    Y(Ve, Ve.current),
    !0
  );
}
function pd(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(E(169));
  n
    ? ((e = zp(e, t, Vn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      q(Ve),
      q(be),
      Y(be, e))
    : q(Ve),
    Y(Ve, n);
}
var _t = null,
  Lo = !1,
  xa = !1;
function Bp(e) {
  _t === null ? (_t = [e]) : _t.push(e);
}
function L0(e) {
  (Lo = !0), Bp(e);
}
function gn() {
  if (!xa && _t !== null) {
    xa = !0;
    var e = 0,
      t = $;
    try {
      var n = _t;
      for ($ = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (_t = null), (Lo = !1);
    } catch (i) {
      throw (_t !== null && (_t = _t.slice(e + 1)), fp(Pu, gn), i);
    } finally {
      ($ = t), (xa = !1);
    }
  }
  return null;
}
var er = [],
  tr = 0,
  ro = null,
  io = 0,
  rt = [],
  it = 0,
  Fn = null,
  Rt = 1,
  Nt = "";
function Cn(e, t) {
  (er[tr++] = io), (er[tr++] = ro), (ro = e), (io = t);
}
function Up(e, t, n) {
  (rt[it++] = Rt), (rt[it++] = Nt), (rt[it++] = Fn), (Fn = e);
  var r = Rt;
  e = Nt;
  var i = 32 - mt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - mt(t) + i;
  if (30 < s) {
    var o = i - (i % 5);
    (s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (Rt = (1 << (32 - mt(t) + i)) | (n << i) | r),
      (Nt = s + e);
  } else (Rt = (1 << s) | (n << i) | r), (Nt = e);
}
function Mu(e) {
  e.return !== null && (Cn(e, 1), Up(e, 1, 0));
}
function Ru(e) {
  for (; e === ro; )
    (ro = er[--tr]), (er[tr] = null), (io = er[--tr]), (er[tr] = null);
  for (; e === Fn; )
    (Fn = rt[--it]),
      (rt[it] = null),
      (Nt = rt[--it]),
      (rt[it] = null),
      (Rt = rt[--it]),
      (rt[it] = null);
}
var Ge = null,
  qe = null,
  G = !1,
  pt = null;
function Wp(e, t) {
  var n = st(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function md(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ge = e), (qe = rn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ge = e), (qe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Fn !== null ? { id: Rt, overflow: Nt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = st(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ge = e),
            (qe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function xl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Pl(e) {
  if (G) {
    var t = qe;
    if (t) {
      var n = t;
      if (!md(e, t)) {
        if (xl(e)) throw Error(E(418));
        t = rn(n.nextSibling);
        var r = Ge;
        t && md(e, t)
          ? Wp(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (G = !1), (Ge = e));
      }
    } else {
      if (xl(e)) throw Error(E(418));
      (e.flags = (e.flags & -4097) | 2), (G = !1), (Ge = e);
    }
  }
}
function vd(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ge = e;
}
function ss(e) {
  if (e !== Ge) return !1;
  if (!G) return vd(e), (G = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !gl(e.type, e.memoizedProps))),
    t && (t = qe))
  ) {
    if (xl(e)) throw (Hp(), Error(E(418)));
    for (; t; ) Wp(e, t), (t = rn(t.nextSibling));
  }
  if ((vd(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              qe = rn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      qe = null;
    }
  } else qe = Ge ? rn(e.stateNode.nextSibling) : null;
  return !0;
}
function Hp() {
  for (var e = qe; e; ) e = rn(e.nextSibling);
}
function Sr() {
  (qe = Ge = null), (G = !1);
}
function Nu(e) {
  pt === null ? (pt = [e]) : pt.push(e);
}
var j0 = Ht.ReactCurrentBatchConfig;
function ft(e, t) {
  if (e && e.defaultProps) {
    (t = ne({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var so = vn(null),
  oo = null,
  nr = null,
  Lu = null;
function ju() {
  Lu = nr = oo = null;
}
function Du(e) {
  var t = so.current;
  q(so), (e._currentValue = t);
}
function Tl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function mr(e, t) {
  (oo = e),
    (Lu = nr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ie = !0), (e.firstContext = null));
}
function at(e) {
  var t = e._currentValue;
  if (Lu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), nr === null)) {
      if (oo === null) throw Error(E(308));
      (nr = e), (oo.dependencies = { lanes: 0, firstContext: e });
    } else nr = nr.next = e;
  return t;
}
var Mn = null;
function Iu(e) {
  Mn === null ? (Mn = [e]) : Mn.push(e);
}
function $p(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Iu(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Bt(e, r)
  );
}
function Bt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var qt = !1;
function Vu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Kp(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function jt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function sn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), U & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Bt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Iu(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Bt(e, n)
  );
}
function Ls(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Tu(e, n);
  }
}
function gd(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (i = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ao(e, t, n, r) {
  var i = e.updateQueue;
  qt = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), o === null ? (s = u) : (o.next = u), (o = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== o &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (s !== null) {
    var d = i.baseState;
    (o = 0), (c = u = l = null), (a = s);
    do {
      var f = a.lane,
        v = a.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: v,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var y = e,
            w = a;
          switch (((f = t), (v = n), w.tag)) {
            case 1:
              if (((y = w.payload), typeof y == "function")) {
                d = y.call(v, d, f);
                break e;
              }
              d = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = w.payload),
                (f = typeof y == "function" ? y.call(v, d, f) : y),
                f == null)
              )
                break e;
              d = ne({}, d, f);
              break e;
            case 2:
              qt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (f = i.effects),
          f === null ? (i.effects = [a]) : f.push(a));
      } else
        (v = {
          eventTime: v,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = v), (l = d)) : (c = c.next = v),
          (o |= f);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (f = a),
          (a = f.next),
          (f.next = null),
          (i.lastBaseUpdate = f),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = d),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    (Bn |= o), (e.lanes = o), (e.memoizedState = d);
  }
}
function yd(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(E(191, i));
        i.call(r);
      }
    }
}
var Yp = new $h.Component().refs;
function kl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ne({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var jo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Hn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ne(),
      i = an(e),
      s = jt(r, i);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = sn(e, s, i)),
      t !== null && (vt(t, e, i, r), Ls(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ne(),
      i = an(e),
      s = jt(r, i);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = sn(e, s, i)),
      t !== null && (vt(t, e, i, r), Ls(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ne(),
      r = an(e),
      i = jt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = sn(e, i, r)),
      t !== null && (vt(t, e, r, n), Ls(t, e, r));
  },
};
function Sd(e, t, n, r, i, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !gi(n, r) || !gi(i, s)
      : !0
  );
}
function Xp(e, t, n) {
  var r = !1,
    i = fn,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = at(s))
      : ((i = Fe(t) ? Vn : be.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? yr(e, i) : fn)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = jo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function wd(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && jo.enqueueReplaceState(t, t.state, null);
}
function Cl(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = Yp), Vu(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (i.context = at(s))
    : ((s = Fe(t) ? Vn : be.current), (i.context = yr(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (kl(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && jo.enqueueReplaceState(i, i.state, null),
      ao(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Dr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(E(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(E(147, e));
      var i = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var a = i.refs;
            a === Yp && (a = i.refs = {}),
              o === null ? delete a[s] : (a[s] = o);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(E(284));
    if (!n._owner) throw Error(E(290, e));
  }
  return e;
}
function os(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      E(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function xd(e) {
  var t = e._init;
  return t(e._payload);
}
function qp(e) {
  function t(m, h) {
    if (e) {
      var p = m.deletions;
      p === null ? ((m.deletions = [h]), (m.flags |= 16)) : p.push(h);
    }
  }
  function n(m, h) {
    if (!e) return null;
    for (; h !== null; ) t(m, h), (h = h.sibling);
    return null;
  }
  function r(m, h) {
    for (m = new Map(); h !== null; )
      h.key !== null ? m.set(h.key, h) : m.set(h.index, h), (h = h.sibling);
    return m;
  }
  function i(m, h) {
    return (m = ln(m, h)), (m.index = 0), (m.sibling = null), m;
  }
  function s(m, h, p) {
    return (
      (m.index = p),
      e
        ? ((p = m.alternate),
          p !== null
            ? ((p = p.index), p < h ? ((m.flags |= 2), h) : p)
            : ((m.flags |= 2), h))
        : ((m.flags |= 1048576), h)
    );
  }
  function o(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, h, p, S) {
    return h === null || h.tag !== 6
      ? ((h = Aa(p, m.mode, S)), (h.return = m), h)
      : ((h = i(h, p)), (h.return = m), h);
  }
  function l(m, h, p, S) {
    var P = p.type;
    return P === Xn
      ? c(m, h, p.props.children, S, p.key)
      : h !== null &&
        (h.elementType === P ||
          (typeof P == "object" &&
            P !== null &&
            P.$$typeof === Xt &&
            xd(P) === h.type))
      ? ((S = i(h, p.props)), (S.ref = Dr(m, h, p)), (S.return = m), S)
      : ((S = zs(p.type, p.key, p.props, null, m.mode, S)),
        (S.ref = Dr(m, h, p)),
        (S.return = m),
        S);
  }
  function u(m, h, p, S) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== p.containerInfo ||
      h.stateNode.implementation !== p.implementation
      ? ((h = Oa(p, m.mode, S)), (h.return = m), h)
      : ((h = i(h, p.children || [])), (h.return = m), h);
  }
  function c(m, h, p, S, P) {
    return h === null || h.tag !== 7
      ? ((h = Dn(p, m.mode, S, P)), (h.return = m), h)
      : ((h = i(h, p)), (h.return = m), h);
  }
  function d(m, h, p) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = Aa("" + h, m.mode, p)), (h.return = m), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case qi:
          return (
            (p = zs(h.type, h.key, h.props, null, m.mode, p)),
            (p.ref = Dr(m, null, h)),
            (p.return = m),
            p
          );
        case Yn:
          return (h = Oa(h, m.mode, p)), (h.return = m), h;
        case Xt:
          var S = h._init;
          return d(m, S(h._payload), p);
      }
      if (Ur(h) || Mr(h))
        return (h = Dn(h, m.mode, p, null)), (h.return = m), h;
      os(m, h);
    }
    return null;
  }
  function f(m, h, p, S) {
    var P = h !== null ? h.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return P !== null ? null : a(m, h, "" + p, S);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case qi:
          return p.key === P ? l(m, h, p, S) : null;
        case Yn:
          return p.key === P ? u(m, h, p, S) : null;
        case Xt:
          return (P = p._init), f(m, h, P(p._payload), S);
      }
      if (Ur(p) || Mr(p)) return P !== null ? null : c(m, h, p, S, null);
      os(m, p);
    }
    return null;
  }
  function v(m, h, p, S, P) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (m = m.get(p) || null), a(h, m, "" + S, P);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case qi:
          return (m = m.get(S.key === null ? p : S.key) || null), l(h, m, S, P);
        case Yn:
          return (m = m.get(S.key === null ? p : S.key) || null), u(h, m, S, P);
        case Xt:
          var C = S._init;
          return v(m, h, p, C(S._payload), P);
      }
      if (Ur(S) || Mr(S)) return (m = m.get(p) || null), c(h, m, S, P, null);
      os(h, S);
    }
    return null;
  }
  function y(m, h, p, S) {
    for (
      var P = null, C = null, b = h, T = (h = 0), L = null;
      b !== null && T < p.length;
      T++
    ) {
      b.index > T ? ((L = b), (b = null)) : (L = b.sibling);
      var M = f(m, b, p[T], S);
      if (M === null) {
        b === null && (b = L);
        break;
      }
      e && b && M.alternate === null && t(m, b),
        (h = s(M, h, T)),
        C === null ? (P = M) : (C.sibling = M),
        (C = M),
        (b = L);
    }
    if (T === p.length) return n(m, b), G && Cn(m, T), P;
    if (b === null) {
      for (; T < p.length; T++)
        (b = d(m, p[T], S)),
          b !== null &&
            ((h = s(b, h, T)), C === null ? (P = b) : (C.sibling = b), (C = b));
      return G && Cn(m, T), P;
    }
    for (b = r(m, b); T < p.length; T++)
      (L = v(b, m, T, p[T], S)),
        L !== null &&
          (e && L.alternate !== null && b.delete(L.key === null ? T : L.key),
          (h = s(L, h, T)),
          C === null ? (P = L) : (C.sibling = L),
          (C = L));
    return (
      e &&
        b.forEach(function (B) {
          return t(m, B);
        }),
      G && Cn(m, T),
      P
    );
  }
  function w(m, h, p, S) {
    var P = Mr(p);
    if (typeof P != "function") throw Error(E(150));
    if (((p = P.call(p)), p == null)) throw Error(E(151));
    for (
      var C = (P = null), b = h, T = (h = 0), L = null, M = p.next();
      b !== null && !M.done;
      T++, M = p.next()
    ) {
      b.index > T ? ((L = b), (b = null)) : (L = b.sibling);
      var B = f(m, b, M.value, S);
      if (B === null) {
        b === null && (b = L);
        break;
      }
      e && b && B.alternate === null && t(m, b),
        (h = s(B, h, T)),
        C === null ? (P = B) : (C.sibling = B),
        (C = B),
        (b = L);
    }
    if (M.done) return n(m, b), G && Cn(m, T), P;
    if (b === null) {
      for (; !M.done; T++, M = p.next())
        (M = d(m, M.value, S)),
          M !== null &&
            ((h = s(M, h, T)), C === null ? (P = M) : (C.sibling = M), (C = M));
      return G && Cn(m, T), P;
    }
    for (b = r(m, b); !M.done; T++, M = p.next())
      (M = v(b, m, T, M.value, S)),
        M !== null &&
          (e && M.alternate !== null && b.delete(M.key === null ? T : M.key),
          (h = s(M, h, T)),
          C === null ? (P = M) : (C.sibling = M),
          (C = M));
    return (
      e &&
        b.forEach(function (We) {
          return t(m, We);
        }),
      G && Cn(m, T),
      P
    );
  }
  function k(m, h, p, S) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === Xn &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case qi:
          e: {
            for (var P = p.key, C = h; C !== null; ) {
              if (C.key === P) {
                if (((P = p.type), P === Xn)) {
                  if (C.tag === 7) {
                    n(m, C.sibling),
                      (h = i(C, p.props.children)),
                      (h.return = m),
                      (m = h);
                    break e;
                  }
                } else if (
                  C.elementType === P ||
                  (typeof P == "object" &&
                    P !== null &&
                    P.$$typeof === Xt &&
                    xd(P) === C.type)
                ) {
                  n(m, C.sibling),
                    (h = i(C, p.props)),
                    (h.ref = Dr(m, C, p)),
                    (h.return = m),
                    (m = h);
                  break e;
                }
                n(m, C);
                break;
              } else t(m, C);
              C = C.sibling;
            }
            p.type === Xn
              ? ((h = Dn(p.props.children, m.mode, S, p.key)),
                (h.return = m),
                (m = h))
              : ((S = zs(p.type, p.key, p.props, null, m.mode, S)),
                (S.ref = Dr(m, h, p)),
                (S.return = m),
                (m = S));
          }
          return o(m);
        case Yn:
          e: {
            for (C = p.key; h !== null; ) {
              if (h.key === C)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === p.containerInfo &&
                  h.stateNode.implementation === p.implementation
                ) {
                  n(m, h.sibling),
                    (h = i(h, p.children || [])),
                    (h.return = m),
                    (m = h);
                  break e;
                } else {
                  n(m, h);
                  break;
                }
              else t(m, h);
              h = h.sibling;
            }
            (h = Oa(p, m.mode, S)), (h.return = m), (m = h);
          }
          return o(m);
        case Xt:
          return (C = p._init), k(m, h, C(p._payload), S);
      }
      if (Ur(p)) return y(m, h, p, S);
      if (Mr(p)) return w(m, h, p, S);
      os(m, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        h !== null && h.tag === 6
          ? (n(m, h.sibling), (h = i(h, p)), (h.return = m), (m = h))
          : (n(m, h), (h = Aa(p, m.mode, S)), (h.return = m), (m = h)),
        o(m))
      : n(m, h);
  }
  return k;
}
var wr = qp(!0),
  Gp = qp(!1),
  Ii = {},
  Et = vn(Ii),
  xi = vn(Ii),
  Pi = vn(Ii);
function Rn(e) {
  if (e === Ii) throw Error(E(174));
  return e;
}
function Fu(e, t) {
  switch ((Y(Pi, t), Y(xi, e), Y(Et, Ii), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : rl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = rl(t, e));
  }
  q(Et), Y(Et, t);
}
function xr() {
  q(Et), q(xi), q(Pi);
}
function Qp(e) {
  Rn(Pi.current);
  var t = Rn(Et.current),
    n = rl(t, e.type);
  t !== n && (Y(xi, e), Y(Et, n));
}
function zu(e) {
  xi.current === e && (q(Et), q(xi));
}
var Q = vn(0);
function lo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Pa = [];
function Bu() {
  for (var e = 0; e < Pa.length; e++)
    Pa[e]._workInProgressVersionPrimary = null;
  Pa.length = 0;
}
var js = Ht.ReactCurrentDispatcher,
  Ta = Ht.ReactCurrentBatchConfig,
  zn = 0,
  te = null,
  ue = null,
  fe = null,
  uo = !1,
  ei = !1,
  Ti = 0,
  D0 = 0;
function Se() {
  throw Error(E(321));
}
function Uu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!gt(e[n], t[n])) return !1;
  return !0;
}
function Wu(e, t, n, r, i, s) {
  if (
    ((zn = s),
    (te = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (js.current = e === null || e.memoizedState === null ? z0 : B0),
    (e = n(r, i)),
    ei)
  ) {
    s = 0;
    do {
      if (((ei = !1), (Ti = 0), 25 <= s)) throw Error(E(301));
      (s += 1),
        (fe = ue = null),
        (t.updateQueue = null),
        (js.current = U0),
        (e = n(r, i));
    } while (ei);
  }
  if (
    ((js.current = co),
    (t = ue !== null && ue.next !== null),
    (zn = 0),
    (fe = ue = te = null),
    (uo = !1),
    t)
  )
    throw Error(E(300));
  return e;
}
function Hu() {
  var e = Ti !== 0;
  return (Ti = 0), e;
}
function xt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return fe === null ? (te.memoizedState = fe = e) : (fe = fe.next = e), fe;
}
function lt() {
  if (ue === null) {
    var e = te.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ue.next;
  var t = fe === null ? te.memoizedState : fe.next;
  if (t !== null) (fe = t), (ue = e);
  else {
    if (e === null) throw Error(E(310));
    (ue = e),
      (e = {
        memoizedState: ue.memoizedState,
        baseState: ue.baseState,
        baseQueue: ue.baseQueue,
        queue: ue.queue,
        next: null,
      }),
      fe === null ? (te.memoizedState = fe = e) : (fe = fe.next = e);
  }
  return fe;
}
function ki(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ka(e) {
  var t = lt(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = ue,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = s.next), (s.next = o);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var a = (o = null),
      l = null,
      u = s;
    do {
      var c = u.lane;
      if ((zn & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = d), (o = r)) : (l = l.next = d),
          (te.lanes |= c),
          (Bn |= c);
      }
      u = u.next;
    } while (u !== null && u !== s);
    l === null ? (o = r) : (l.next = a),
      gt(r, t.memoizedState) || (Ie = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (s = i.lane), (te.lanes |= s), (Bn |= s), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ca(e) {
  var t = lt(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (s = e(s, o.action)), (o = o.next);
    while (o !== i);
    gt(s, t.memoizedState) || (Ie = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function Zp() {}
function Jp(e, t) {
  var n = te,
    r = lt(),
    i = t(),
    s = !gt(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (Ie = !0)),
    (r = r.queue),
    $u(nm.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (fe !== null && fe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ci(9, tm.bind(null, n, r, i, t), void 0, null),
      he === null)
    )
      throw Error(E(349));
    zn & 30 || em(n, t, i);
  }
  return i;
}
function em(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = te.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (te.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function tm(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), rm(t) && im(e);
}
function nm(e, t, n) {
  return n(function () {
    rm(t) && im(e);
  });
}
function rm(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !gt(e, n);
  } catch {
    return !0;
  }
}
function im(e) {
  var t = Bt(e, 1);
  t !== null && vt(t, e, 1, -1);
}
function Pd(e) {
  var t = xt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ki,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = F0.bind(null, te, e)),
    [t.memoizedState, e]
  );
}
function Ci(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = te.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (te.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function sm() {
  return lt().memoizedState;
}
function Ds(e, t, n, r) {
  var i = xt();
  (te.flags |= e),
    (i.memoizedState = Ci(1 | t, n, void 0, r === void 0 ? null : r));
}
function Do(e, t, n, r) {
  var i = lt();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (ue !== null) {
    var o = ue.memoizedState;
    if (((s = o.destroy), r !== null && Uu(r, o.deps))) {
      i.memoizedState = Ci(t, n, s, r);
      return;
    }
  }
  (te.flags |= e), (i.memoizedState = Ci(1 | t, n, s, r));
}
function Td(e, t) {
  return Ds(8390656, 8, e, t);
}
function $u(e, t) {
  return Do(2048, 8, e, t);
}
function om(e, t) {
  return Do(4, 2, e, t);
}
function am(e, t) {
  return Do(4, 4, e, t);
}
function lm(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function um(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Do(4, 4, lm.bind(null, t, e), n)
  );
}
function Ku() {}
function cm(e, t) {
  var n = lt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Uu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function dm(e, t) {
  var n = lt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Uu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function fm(e, t, n) {
  return zn & 21
    ? (gt(n, t) || ((n = mp()), (te.lanes |= n), (Bn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ie = !0)), (e.memoizedState = n));
}
function I0(e, t) {
  var n = $;
  ($ = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ta.transition;
  Ta.transition = {};
  try {
    e(!1), t();
  } finally {
    ($ = n), (Ta.transition = r);
  }
}
function hm() {
  return lt().memoizedState;
}
function V0(e, t, n) {
  var r = an(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    pm(e))
  )
    mm(t, n);
  else if (((n = $p(e, t, n, r)), n !== null)) {
    var i = Ne();
    vt(n, e, r, i), vm(n, t, r);
  }
}
function F0(e, t, n) {
  var r = an(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (pm(e)) mm(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), gt(a, o))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), Iu(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = $p(e, t, i, r)),
      n !== null && ((i = Ne()), vt(n, e, r, i), vm(n, t, r));
  }
}
function pm(e) {
  var t = e.alternate;
  return e === te || (t !== null && t === te);
}
function mm(e, t) {
  ei = uo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function vm(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Tu(e, n);
  }
}
var co = {
    readContext: at,
    useCallback: Se,
    useContext: Se,
    useEffect: Se,
    useImperativeHandle: Se,
    useInsertionEffect: Se,
    useLayoutEffect: Se,
    useMemo: Se,
    useReducer: Se,
    useRef: Se,
    useState: Se,
    useDebugValue: Se,
    useDeferredValue: Se,
    useTransition: Se,
    useMutableSource: Se,
    useSyncExternalStore: Se,
    useId: Se,
    unstable_isNewReconciler: !1,
  },
  z0 = {
    readContext: at,
    useCallback: function (e, t) {
      return (xt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: at,
    useEffect: Td,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ds(4194308, 4, lm.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ds(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ds(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = xt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = xt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = V0.bind(null, te, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = xt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Pd,
    useDebugValue: Ku,
    useDeferredValue: function (e) {
      return (xt().memoizedState = e);
    },
    useTransition: function () {
      var e = Pd(!1),
        t = e[0];
      return (e = I0.bind(null, e[1])), (xt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = te,
        i = xt();
      if (G) {
        if (n === void 0) throw Error(E(407));
        n = n();
      } else {
        if (((n = t()), he === null)) throw Error(E(349));
        zn & 30 || em(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        Td(nm.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Ci(9, tm.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = xt(),
        t = he.identifierPrefix;
      if (G) {
        var n = Nt,
          r = Rt;
        (n = (r & ~(1 << (32 - mt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Ti++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = D0++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  B0 = {
    readContext: at,
    useCallback: cm,
    useContext: at,
    useEffect: $u,
    useImperativeHandle: um,
    useInsertionEffect: om,
    useLayoutEffect: am,
    useMemo: dm,
    useReducer: ka,
    useRef: sm,
    useState: function () {
      return ka(ki);
    },
    useDebugValue: Ku,
    useDeferredValue: function (e) {
      var t = lt();
      return fm(t, ue.memoizedState, e);
    },
    useTransition: function () {
      var e = ka(ki)[0],
        t = lt().memoizedState;
      return [e, t];
    },
    useMutableSource: Zp,
    useSyncExternalStore: Jp,
    useId: hm,
    unstable_isNewReconciler: !1,
  },
  U0 = {
    readContext: at,
    useCallback: cm,
    useContext: at,
    useEffect: $u,
    useImperativeHandle: um,
    useInsertionEffect: om,
    useLayoutEffect: am,
    useMemo: dm,
    useReducer: Ca,
    useRef: sm,
    useState: function () {
      return Ca(ki);
    },
    useDebugValue: Ku,
    useDeferredValue: function (e) {
      var t = lt();
      return ue === null ? (t.memoizedState = e) : fm(t, ue.memoizedState, e);
    },
    useTransition: function () {
      var e = Ca(ki)[0],
        t = lt().memoizedState;
      return [e, t];
    },
    useMutableSource: Zp,
    useSyncExternalStore: Jp,
    useId: hm,
    unstable_isNewReconciler: !1,
  };
function Pr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += vy(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Ea(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function El(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var W0 = typeof WeakMap == "function" ? WeakMap : Map;
function gm(e, t, n) {
  (n = jt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ho || ((ho = !0), (Dl = r)), El(e, t);
    }),
    n
  );
}
function ym(e, t, n) {
  (n = jt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        El(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        El(e, t),
          typeof r != "function" &&
            (on === null ? (on = new Set([this])) : on.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function kd(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new W0();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = rS.bind(null, e, t, n)), t.then(e, e));
}
function Cd(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ed(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = jt(-1, 1)), (t.tag = 2), sn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var H0 = Ht.ReactCurrentOwner,
  Ie = !1;
function Re(e, t, n, r) {
  t.child = e === null ? Gp(t, null, n, r) : wr(t, e.child, n, r);
}
function bd(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    mr(t, i),
    (r = Wu(e, t, n, r, s, i)),
    (n = Hu()),
    e !== null && !Ie
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Ut(e, t, i))
      : (G && n && Mu(t), (t.flags |= 1), Re(e, t, r, i), t.child)
  );
}
function Ad(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !ec(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), Sm(e, t, s, r, i))
      : ((e = zs(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : gi), n(o, r) && e.ref === t.ref)
    )
      return Ut(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = ln(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Sm(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (gi(s, r) && e.ref === t.ref)
      if (((Ie = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
        e.flags & 131072 && (Ie = !0);
      else return (t.lanes = e.lanes), Ut(e, t, i);
  }
  return bl(e, t, n, r, i);
}
function wm(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Y(ir, Ke),
        (Ke |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Y(ir, Ke),
          (Ke |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        Y(ir, Ke),
        (Ke |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Y(ir, Ke),
      (Ke |= r);
  return Re(e, t, i, n), t.child;
}
function xm(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function bl(e, t, n, r, i) {
  var s = Fe(n) ? Vn : be.current;
  return (
    (s = yr(t, s)),
    mr(t, i),
    (n = Wu(e, t, n, r, s, i)),
    (r = Hu()),
    e !== null && !Ie
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Ut(e, t, i))
      : (G && r && Mu(t), (t.flags |= 1), Re(e, t, n, i), t.child)
  );
}
function Od(e, t, n, r, i) {
  if (Fe(n)) {
    var s = !0;
    no(t);
  } else s = !1;
  if ((mr(t, i), t.stateNode === null))
    Is(e, t), Xp(t, n, r), Cl(t, n, r, i), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var l = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = at(u))
      : ((u = Fe(n) ? Vn : be.current), (u = yr(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && wd(t, o, r, u)),
      (qt = !1);
    var f = t.memoizedState;
    (o.state = f),
      ao(t, r, o, i),
      (l = t.memoizedState),
      a !== r || f !== l || Ve.current || qt
        ? (typeof c == "function" && (kl(t, n, c, r), (l = t.memoizedState)),
          (a = qt || Sd(t, n, a, r, f, l, u))
            ? (d ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (o.props = r),
          (o.state = l),
          (o.context = u),
          (r = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      Kp(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : ft(t.type, a)),
      (o.props = u),
      (d = t.pendingProps),
      (f = o.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = at(l))
        : ((l = Fe(n) ? Vn : be.current), (l = yr(t, l)));
    var v = n.getDerivedStateFromProps;
    (c =
      typeof v == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== d || f !== l) && wd(t, o, r, l)),
      (qt = !1),
      (f = t.memoizedState),
      (o.state = f),
      ao(t, r, o, i);
    var y = t.memoizedState;
    a !== d || f !== y || Ve.current || qt
      ? (typeof v == "function" && (kl(t, n, v, r), (y = t.memoizedState)),
        (u = qt || Sd(t, n, u, r, f, y, l) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, y, l),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, y, l)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (o.props = r),
        (o.state = y),
        (o.context = l),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Al(e, t, n, r, s, i);
}
function Al(e, t, n, r, i, s) {
  xm(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && pd(t, n, !1), Ut(e, t, s);
  (r = t.stateNode), (H0.current = t);
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = wr(t, e.child, null, s)), (t.child = wr(t, null, a, s)))
      : Re(e, t, a, s),
    (t.memoizedState = r.state),
    i && pd(t, n, !0),
    t.child
  );
}
function Pm(e) {
  var t = e.stateNode;
  t.pendingContext
    ? hd(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && hd(e, t.context, !1),
    Fu(e, t.containerInfo);
}
function _d(e, t, n, r, i) {
  return Sr(), Nu(i), (t.flags |= 256), Re(e, t, n, r), t.child;
}
var Ol = { dehydrated: null, treeContext: null, retryLane: 0 };
function _l(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Tm(e, t, n) {
  var r = t.pendingProps,
    i = Q.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    Y(Q, i & 1),
    e === null)
  )
    return (
      Pl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = Fo(o, r, 0, null)),
              (e = Dn(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = _l(n)),
              (t.memoizedState = Ol),
              e)
            : Yu(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return $0(e, t, o, r, a, i, n);
  if (s) {
    (s = r.fallback), (o = t.mode), (i = e.child), (a = i.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = ln(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (s = ln(a, s)) : ((s = Dn(s, o, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? _l(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ol),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = ln(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Yu(e, t) {
  return (
    (t = Fo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function as(e, t, n, r) {
  return (
    r !== null && Nu(r),
    wr(t, e.child, null, n),
    (e = Yu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function $0(e, t, n, r, i, s, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ea(Error(E(422)))), as(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (i = t.mode),
        (r = Fo({ mode: "visible", children: r.children }, i, 0, null)),
        (s = Dn(s, i, o, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && wr(t, e.child, null, o),
        (t.child.memoizedState = _l(o)),
        (t.memoizedState = Ol),
        s);
  if (!(t.mode & 1)) return as(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (s = Error(E(419))), (r = Ea(s, r, void 0)), as(e, t, o, r);
  }
  if (((a = (o & e.childLanes) !== 0), Ie || a)) {
    if (((r = he), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), Bt(e, i), vt(r, e, i, -1));
    }
    return Ju(), (r = Ea(Error(E(421)))), as(e, t, o, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = iS.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (qe = rn(i.nextSibling)),
      (Ge = t),
      (G = !0),
      (pt = null),
      e !== null &&
        ((rt[it++] = Rt),
        (rt[it++] = Nt),
        (rt[it++] = Fn),
        (Rt = e.id),
        (Nt = e.overflow),
        (Fn = t)),
      (t = Yu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Md(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Tl(e.return, t, n);
}
function ba(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function km(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((Re(e, t, r.children, n), (r = Q.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Md(e, n, t);
        else if (e.tag === 19) Md(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Y(Q, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && lo(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          ba(t, !1, i, n, s);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && lo(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        ba(t, !0, n, null, s);
        break;
      case "together":
        ba(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Is(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ut(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Bn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (
      e = t.child, n = ln(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = ln(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function K0(e, t, n) {
  switch (t.tag) {
    case 3:
      Pm(t), Sr();
      break;
    case 5:
      Qp(t);
      break;
    case 1:
      Fe(t.type) && no(t);
      break;
    case 4:
      Fu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      Y(so, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Y(Q, Q.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Tm(e, t, n)
          : (Y(Q, Q.current & 1),
            (e = Ut(e, t, n)),
            e !== null ? e.sibling : null);
      Y(Q, Q.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return km(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        Y(Q, Q.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), wm(e, t, n);
  }
  return Ut(e, t, n);
}
var Cm, Ml, Em, bm;
Cm = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Ml = function () {};
Em = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Rn(Et.current);
    var s = null;
    switch (n) {
      case "input":
        (i = Ja(e, i)), (r = Ja(e, r)), (s = []);
        break;
      case "select":
        (i = ne({}, i, { value: void 0 })),
          (r = ne({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (i = nl(e, i)), (r = nl(e, r)), (s = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = eo);
    }
    il(n, r);
    var o;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (ci.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (l && l.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in l)
              l.hasOwnProperty(o) &&
                a[o] !== l[o] &&
                (n || (n = {}), (n[o] = l[o]));
          } else n || (s || (s = []), s.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (s = s || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (s = s || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (ci.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && X("scroll", e),
                  s || a === l || (s = []))
                : (s = s || []).push(u, l));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
bm = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ir(e, t) {
  if (!G)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function we(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Y0(e, t, n) {
  var r = t.pendingProps;
  switch ((Ru(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return we(t), null;
    case 1:
      return Fe(t.type) && to(), we(t), null;
    case 3:
      return (
        (r = t.stateNode),
        xr(),
        q(Ve),
        q(be),
        Bu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ss(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), pt !== null && (Fl(pt), (pt = null)))),
        Ml(e, t),
        we(t),
        null
      );
    case 5:
      zu(t);
      var i = Rn(Pi.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Em(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(E(166));
          return we(t), null;
        }
        if (((e = Rn(Et.current)), ss(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[Pt] = t), (r[wi] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              X("cancel", r), X("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              X("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Hr.length; i++) X(Hr[i], r);
              break;
            case "source":
              X("error", r);
              break;
            case "img":
            case "image":
            case "link":
              X("error", r), X("load", r);
              break;
            case "details":
              X("toggle", r);
              break;
            case "input":
              zc(r, s), X("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                X("invalid", r);
              break;
            case "textarea":
              Uc(r, s), X("invalid", r);
          }
          il(n, s), (i = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var a = s[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 &&
                      is(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (s.suppressHydrationWarning !== !0 &&
                      is(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : ci.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  X("scroll", r);
            }
          switch (n) {
            case "input":
              Gi(r), Bc(r, s, !0);
              break;
            case "textarea":
              Gi(r), Wc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = eo);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ep(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Pt] = t),
            (e[wi] = r),
            Cm(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = sl(n, r)), n)) {
              case "dialog":
                X("cancel", e), X("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                X("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Hr.length; i++) X(Hr[i], e);
                i = r;
                break;
              case "source":
                X("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                X("error", e), X("load", e), (i = r);
                break;
              case "details":
                X("toggle", e), (i = r);
                break;
              case "input":
                zc(e, r), (i = Ja(e, r)), X("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = ne({}, r, { value: void 0 })),
                  X("invalid", e);
                break;
              case "textarea":
                Uc(e, r), (i = nl(e, r)), X("invalid", e);
                break;
              default:
                i = r;
            }
            il(n, i), (a = i);
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var l = a[s];
                s === "style"
                  ? rp(e, l)
                  : s === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && tp(e, l))
                  : s === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && di(e, l)
                    : typeof l == "number" && di(e, "" + l)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (ci.hasOwnProperty(s)
                      ? l != null && s === "onScroll" && X("scroll", e)
                      : l != null && gu(e, s, l, o));
              }
            switch (n) {
              case "input":
                Gi(e), Bc(e, r, !1);
                break;
              case "textarea":
                Gi(e), Wc(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + dn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? dr(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      dr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = eo);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return we(t), null;
    case 6:
      if (e && t.stateNode != null) bm(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(E(166));
        if (((n = Rn(Pi.current)), Rn(Et.current), ss(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Pt] = t),
            (s = r.nodeValue !== n) && ((e = Ge), e !== null))
          )
            switch (e.tag) {
              case 3:
                is(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  is(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Pt] = t),
            (t.stateNode = r);
      }
      return we(t), null;
    case 13:
      if (
        (q(Q),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (G && qe !== null && t.mode & 1 && !(t.flags & 128))
          Hp(), Sr(), (t.flags |= 98560), (s = !1);
        else if (((s = ss(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(E(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(E(317));
            s[Pt] = t;
          } else
            Sr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          we(t), (s = !1);
        } else pt !== null && (Fl(pt), (pt = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Q.current & 1 ? ce === 0 && (ce = 3) : Ju())),
          t.updateQueue !== null && (t.flags |= 4),
          we(t),
          null);
    case 4:
      return (
        xr(), Ml(e, t), e === null && yi(t.stateNode.containerInfo), we(t), null
      );
    case 10:
      return Du(t.type._context), we(t), null;
    case 17:
      return Fe(t.type) && to(), we(t), null;
    case 19:
      if ((q(Q), (s = t.memoizedState), s === null)) return we(t), null;
      if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) Ir(s, !1);
        else {
          if (ce !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = lo(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Ir(s, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Y(Q, (Q.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            oe() > Tr &&
            ((t.flags |= 128), (r = !0), Ir(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = lo(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Ir(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !G)
            )
              return we(t), null;
          } else
            2 * oe() - s.renderingStartTime > Tr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Ir(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = oe()),
          (t.sibling = null),
          (n = Q.current),
          Y(Q, r ? (n & 1) | 2 : n & 1),
          t)
        : (we(t), null);
    case 22:
    case 23:
      return (
        Zu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ke & 1073741824 && (we(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : we(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function X0(e, t) {
  switch ((Ru(t), t.tag)) {
    case 1:
      return (
        Fe(t.type) && to(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        xr(),
        q(Ve),
        q(be),
        Bu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return zu(t), null;
    case 13:
      if ((q(Q), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(E(340));
        Sr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return q(Q), null;
    case 4:
      return xr(), null;
    case 10:
      return Du(t.type._context), null;
    case 22:
    case 23:
      return Zu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ls = !1,
  Te = !1,
  q0 = typeof WeakSet == "function" ? WeakSet : Set,
  O = null;
function rr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        re(e, t, r);
      }
    else n.current = null;
}
function Rl(e, t, n) {
  try {
    n();
  } catch (r) {
    re(e, t, r);
  }
}
var Rd = !1;
function G0(e, t) {
  if (((ml = Qs), (e = Mp()), _u(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var v;
              d !== n || (i !== 0 && d.nodeType !== 3) || (a = o + i),
                d !== s || (r !== 0 && d.nodeType !== 3) || (l = o + r),
                d.nodeType === 3 && (o += d.nodeValue.length),
                (v = d.firstChild) !== null;

            )
              (f = d), (d = v);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++u === i && (a = o),
                f === s && ++c === r && (l = o),
                (v = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = v;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (vl = { focusedElem: e, selectionRange: n }, Qs = !1, O = t; O !== null; )
    if (((t = O), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (O = e);
    else
      for (; O !== null; ) {
        t = O;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var w = y.memoizedProps,
                    k = y.memoizedState,
                    m = t.stateNode,
                    h = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : ft(t.type, w),
                      k
                    );
                  m.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(E(163));
            }
        } catch (S) {
          re(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (O = e);
          break;
        }
        O = t.return;
      }
  return (y = Rd), (Rd = !1), y;
}
function ti(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && Rl(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Io(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Nl(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Am(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Am(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Pt], delete t[wi], delete t[Sl], delete t[R0], delete t[N0])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Om(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Nd(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Om(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ll(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = eo));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ll(e, t, n), e = e.sibling; e !== null; ) Ll(e, t, n), (e = e.sibling);
}
function jl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (jl(e, t, n), e = e.sibling; e !== null; ) jl(e, t, n), (e = e.sibling);
}
var pe = null,
  ht = !1;
function $t(e, t, n) {
  for (n = n.child; n !== null; ) _m(e, t, n), (n = n.sibling);
}
function _m(e, t, n) {
  if (Ct && typeof Ct.onCommitFiberUnmount == "function")
    try {
      Ct.onCommitFiberUnmount(Oo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Te || rr(n, t);
    case 6:
      var r = pe,
        i = ht;
      (pe = null),
        $t(e, t, n),
        (pe = r),
        (ht = i),
        pe !== null &&
          (ht
            ? ((e = pe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : pe.removeChild(n.stateNode));
      break;
    case 18:
      pe !== null &&
        (ht
          ? ((e = pe),
            (n = n.stateNode),
            e.nodeType === 8
              ? wa(e.parentNode, n)
              : e.nodeType === 1 && wa(e, n),
            mi(e))
          : wa(pe, n.stateNode));
      break;
    case 4:
      (r = pe),
        (i = ht),
        (pe = n.stateNode.containerInfo),
        (ht = !0),
        $t(e, t, n),
        (pe = r),
        (ht = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Te &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          (s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && Rl(n, t, o),
            (i = i.next);
        } while (i !== r);
      }
      $t(e, t, n);
      break;
    case 1:
      if (
        !Te &&
        (rr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          re(n, t, a);
        }
      $t(e, t, n);
      break;
    case 21:
      $t(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Te = (r = Te) || n.memoizedState !== null), $t(e, t, n), (Te = r))
        : $t(e, t, n);
      break;
    default:
      $t(e, t, n);
  }
}
function Ld(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new q0()),
      t.forEach(function (r) {
        var i = sS.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function ut(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (pe = a.stateNode), (ht = !1);
              break e;
            case 3:
              (pe = a.stateNode.containerInfo), (ht = !0);
              break e;
            case 4:
              (pe = a.stateNode.containerInfo), (ht = !0);
              break e;
          }
          a = a.return;
        }
        if (pe === null) throw Error(E(160));
        _m(s, o, i), (pe = null), (ht = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        re(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Mm(t, e), (t = t.sibling);
}
function Mm(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ut(t, e), St(e), r & 4)) {
        try {
          ti(3, e, e.return), Io(3, e);
        } catch (w) {
          re(e, e.return, w);
        }
        try {
          ti(5, e, e.return);
        } catch (w) {
          re(e, e.return, w);
        }
      }
      break;
    case 1:
      ut(t, e), St(e), r & 512 && n !== null && rr(n, n.return);
      break;
    case 5:
      if (
        (ut(t, e),
        St(e),
        r & 512 && n !== null && rr(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          di(i, "");
        } catch (w) {
          re(e, e.return, w);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && s.type === "radio" && s.name != null && Zh(i, s),
              sl(a, o);
            var u = sl(a, s);
            for (o = 0; o < l.length; o += 2) {
              var c = l[o],
                d = l[o + 1];
              c === "style"
                ? rp(i, d)
                : c === "dangerouslySetInnerHTML"
                ? tp(i, d)
                : c === "children"
                ? di(i, d)
                : gu(i, c, d, u);
            }
            switch (a) {
              case "input":
                el(i, s);
                break;
              case "textarea":
                Jh(i, s);
                break;
              case "select":
                var f = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var v = s.value;
                v != null
                  ? dr(i, !!s.multiple, v, !1)
                  : f !== !!s.multiple &&
                    (s.defaultValue != null
                      ? dr(i, !!s.multiple, s.defaultValue, !0)
                      : dr(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[wi] = s;
          } catch (w) {
            re(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((ut(t, e), St(e), r & 4)) {
        if (e.stateNode === null) throw Error(E(162));
        (i = e.stateNode), (s = e.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (w) {
          re(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (ut(t, e), St(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          mi(t.containerInfo);
        } catch (w) {
          re(e, e.return, w);
        }
      break;
    case 4:
      ut(t, e), St(e);
      break;
    case 13:
      ut(t, e),
        St(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Gu = oe())),
        r & 4 && Ld(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Te = (u = Te) || c), ut(t, e), (Te = u)) : ut(t, e),
        St(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (O = e, c = e.child; c !== null; ) {
            for (d = O = c; O !== null; ) {
              switch (((f = O), (v = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ti(4, f, f.return);
                  break;
                case 1:
                  rr(f, f.return);
                  var y = f.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (w) {
                      re(r, n, w);
                    }
                  }
                  break;
                case 5:
                  rr(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Dd(d);
                    continue;
                  }
              }
              v !== null ? ((v.return = f), (O = v)) : Dd(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (i = d.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (o =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = np("display", o)));
              } catch (w) {
                re(e, e.return, w);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (w) {
                re(e, e.return, w);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      ut(t, e), St(e), r & 4 && Ld(e);
      break;
    case 21:
      break;
    default:
      ut(t, e), St(e);
  }
}
function St(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Om(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(E(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (di(i, ""), (r.flags &= -33));
          var s = Nd(e);
          jl(e, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = Nd(e);
          Ll(e, a, o);
          break;
        default:
          throw Error(E(161));
      }
    } catch (l) {
      re(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Q0(e, t, n) {
  (O = e), Rm(e);
}
function Rm(e, t, n) {
  for (var r = (e.mode & 1) !== 0; O !== null; ) {
    var i = O,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || ls;
      if (!o) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || Te;
        a = ls;
        var u = Te;
        if (((ls = o), (Te = l) && !u))
          for (O = i; O !== null; )
            (o = O),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Id(i)
                : l !== null
                ? ((l.return = o), (O = l))
                : Id(i);
        for (; s !== null; ) (O = s), Rm(s), (s = s.sibling);
        (O = i), (ls = a), (Te = u);
      }
      jd(e);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (O = s)) : jd(e);
  }
}
function jd(e) {
  for (; O !== null; ) {
    var t = O;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Te || Io(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Te)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ft(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && yd(t, s, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                yd(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && mi(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(E(163));
          }
        Te || (t.flags & 512 && Nl(t));
      } catch (f) {
        re(t, t.return, f);
      }
    }
    if (t === e) {
      O = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function Dd(e) {
  for (; O !== null; ) {
    var t = O;
    if (t === e) {
      O = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function Id(e) {
  for (; O !== null; ) {
    var t = O;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Io(4, t);
          } catch (l) {
            re(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              re(t, i, l);
            }
          }
          var s = t.return;
          try {
            Nl(t);
          } catch (l) {
            re(t, s, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Nl(t);
          } catch (l) {
            re(t, o, l);
          }
      }
    } catch (l) {
      re(t, t.return, l);
    }
    if (t === e) {
      O = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (O = a);
      break;
    }
    O = t.return;
  }
}
var Z0 = Math.ceil,
  fo = Ht.ReactCurrentDispatcher,
  Xu = Ht.ReactCurrentOwner,
  ot = Ht.ReactCurrentBatchConfig,
  U = 0,
  he = null,
  ae = null,
  ve = 0,
  Ke = 0,
  ir = vn(0),
  ce = 0,
  Ei = null,
  Bn = 0,
  Vo = 0,
  qu = 0,
  ni = null,
  De = null,
  Gu = 0,
  Tr = 1 / 0,
  Ot = null,
  ho = !1,
  Dl = null,
  on = null,
  us = !1,
  Jt = null,
  po = 0,
  ri = 0,
  Il = null,
  Vs = -1,
  Fs = 0;
function Ne() {
  return U & 6 ? oe() : Vs !== -1 ? Vs : (Vs = oe());
}
function an(e) {
  return e.mode & 1
    ? U & 2 && ve !== 0
      ? ve & -ve
      : j0.transition !== null
      ? (Fs === 0 && (Fs = mp()), Fs)
      : ((e = $),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Pp(e.type))),
        e)
    : 1;
}
function vt(e, t, n, r) {
  if (50 < ri) throw ((ri = 0), (Il = null), Error(E(185)));
  Li(e, n, r),
    (!(U & 2) || e !== he) &&
      (e === he && (!(U & 2) && (Vo |= n), ce === 4 && Qt(e, ve)),
      ze(e, r),
      n === 1 && U === 0 && !(t.mode & 1) && ((Tr = oe() + 500), Lo && gn()));
}
function ze(e, t) {
  var n = e.callbackNode;
  jy(e, t);
  var r = Gs(e, e === he ? ve : 0);
  if (r === 0)
    n !== null && Kc(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Kc(n), t === 1))
      e.tag === 0 ? L0(Vd.bind(null, e)) : Bp(Vd.bind(null, e)),
        _0(function () {
          !(U & 6) && gn();
        }),
        (n = null);
    else {
      switch (vp(r)) {
        case 1:
          n = Pu;
          break;
        case 4:
          n = hp;
          break;
        case 16:
          n = qs;
          break;
        case 536870912:
          n = pp;
          break;
        default:
          n = qs;
      }
      n = zm(n, Nm.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Nm(e, t) {
  if (((Vs = -1), (Fs = 0), U & 6)) throw Error(E(327));
  var n = e.callbackNode;
  if (vr() && e.callbackNode !== n) return null;
  var r = Gs(e, e === he ? ve : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = mo(e, r);
  else {
    t = r;
    var i = U;
    U |= 2;
    var s = jm();
    (he !== e || ve !== t) && ((Ot = null), (Tr = oe() + 500), jn(e, t));
    do
      try {
        tS();
        break;
      } catch (a) {
        Lm(e, a);
      }
    while (!0);
    ju(),
      (fo.current = s),
      (U = i),
      ae !== null ? (t = 0) : ((he = null), (ve = 0), (t = ce));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = cl(e)), i !== 0 && ((r = i), (t = Vl(e, i)))), t === 1)
    )
      throw ((n = Ei), jn(e, 0), Qt(e, r), ze(e, oe()), n);
    if (t === 6) Qt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !J0(i) &&
          ((t = mo(e, r)),
          t === 2 && ((s = cl(e)), s !== 0 && ((r = s), (t = Vl(e, s)))),
          t === 1))
      )
        throw ((n = Ei), jn(e, 0), Qt(e, r), ze(e, oe()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          En(e, De, Ot);
          break;
        case 3:
          if (
            (Qt(e, r), (r & 130023424) === r && ((t = Gu + 500 - oe()), 10 < t))
          ) {
            if (Gs(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Ne(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = yl(En.bind(null, e, De, Ot), t);
            break;
          }
          En(e, De, Ot);
          break;
        case 4:
          if ((Qt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - mt(r);
            (s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s);
          }
          if (
            ((r = i),
            (r = oe() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Z0(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = yl(En.bind(null, e, De, Ot), r);
            break;
          }
          En(e, De, Ot);
          break;
        case 5:
          En(e, De, Ot);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return ze(e, oe()), e.callbackNode === n ? Nm.bind(null, e) : null;
}
function Vl(e, t) {
  var n = ni;
  return (
    e.current.memoizedState.isDehydrated && (jn(e, t).flags |= 256),
    (e = mo(e, t)),
    e !== 2 && ((t = De), (De = n), t !== null && Fl(t)),
    e
  );
}
function Fl(e) {
  De === null ? (De = e) : De.push.apply(De, e);
}
function J0(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!gt(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Qt(e, t) {
  for (
    t &= ~qu,
      t &= ~Vo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - mt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Vd(e) {
  if (U & 6) throw Error(E(327));
  vr();
  var t = Gs(e, 0);
  if (!(t & 1)) return ze(e, oe()), null;
  var n = mo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = cl(e);
    r !== 0 && ((t = r), (n = Vl(e, r)));
  }
  if (n === 1) throw ((n = Ei), jn(e, 0), Qt(e, t), ze(e, oe()), n);
  if (n === 6) throw Error(E(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    En(e, De, Ot),
    ze(e, oe()),
    null
  );
}
function Qu(e, t) {
  var n = U;
  U |= 1;
  try {
    return e(t);
  } finally {
    (U = n), U === 0 && ((Tr = oe() + 500), Lo && gn());
  }
}
function Un(e) {
  Jt !== null && Jt.tag === 0 && !(U & 6) && vr();
  var t = U;
  U |= 1;
  var n = ot.transition,
    r = $;
  try {
    if (((ot.transition = null), ($ = 1), e)) return e();
  } finally {
    ($ = r), (ot.transition = n), (U = t), !(U & 6) && gn();
  }
}
function Zu() {
  (Ke = ir.current), q(ir);
}
function jn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), O0(n)), ae !== null))
    for (n = ae.return; n !== null; ) {
      var r = n;
      switch ((Ru(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && to();
          break;
        case 3:
          xr(), q(Ve), q(be), Bu();
          break;
        case 5:
          zu(r);
          break;
        case 4:
          xr();
          break;
        case 13:
          q(Q);
          break;
        case 19:
          q(Q);
          break;
        case 10:
          Du(r.type._context);
          break;
        case 22:
        case 23:
          Zu();
      }
      n = n.return;
    }
  if (
    ((he = e),
    (ae = e = ln(e.current, null)),
    (ve = Ke = t),
    (ce = 0),
    (Ei = null),
    (qu = Vo = Bn = 0),
    (De = ni = null),
    Mn !== null)
  ) {
    for (t = 0; t < Mn.length; t++)
      if (((n = Mn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = i), (r.next = o);
        }
        n.pending = r;
      }
    Mn = null;
  }
  return e;
}
function Lm(e, t) {
  do {
    var n = ae;
    try {
      if ((ju(), (js.current = co), uo)) {
        for (var r = te.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        uo = !1;
      }
      if (
        ((zn = 0),
        (fe = ue = te = null),
        (ei = !1),
        (Ti = 0),
        (Xu.current = null),
        n === null || n.return === null)
      ) {
        (ce = 1), (Ei = t), (ae = null);
        break;
      }
      e: {
        var s = e,
          o = n.return,
          a = n,
          l = t;
        if (
          ((t = ve),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var v = Cd(o);
          if (v !== null) {
            (v.flags &= -257),
              Ed(v, o, a, s, t),
              v.mode & 1 && kd(s, u, t),
              (t = v),
              (l = u);
            var y = t.updateQueue;
            if (y === null) {
              var w = new Set();
              w.add(l), (t.updateQueue = w);
            } else y.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              kd(s, u, t), Ju();
              break e;
            }
            l = Error(E(426));
          }
        } else if (G && a.mode & 1) {
          var k = Cd(o);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256),
              Ed(k, o, a, s, t),
              Nu(Pr(l, a));
            break e;
          }
        }
        (s = l = Pr(l, a)),
          ce !== 4 && (ce = 2),
          ni === null ? (ni = [s]) : ni.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var m = gm(s, l, t);
              gd(s, m);
              break e;
            case 1:
              a = l;
              var h = s.type,
                p = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (on === null || !on.has(p))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var S = ym(s, a, t);
                gd(s, S);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Im(n);
    } catch (P) {
      (t = P), ae === n && n !== null && (ae = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function jm() {
  var e = fo.current;
  return (fo.current = co), e === null ? co : e;
}
function Ju() {
  (ce === 0 || ce === 3 || ce === 2) && (ce = 4),
    he === null || (!(Bn & 268435455) && !(Vo & 268435455)) || Qt(he, ve);
}
function mo(e, t) {
  var n = U;
  U |= 2;
  var r = jm();
  (he !== e || ve !== t) && ((Ot = null), jn(e, t));
  do
    try {
      eS();
      break;
    } catch (i) {
      Lm(e, i);
    }
  while (!0);
  if ((ju(), (U = n), (fo.current = r), ae !== null)) throw Error(E(261));
  return (he = null), (ve = 0), ce;
}
function eS() {
  for (; ae !== null; ) Dm(ae);
}
function tS() {
  for (; ae !== null && !Ey(); ) Dm(ae);
}
function Dm(e) {
  var t = Fm(e.alternate, e, Ke);
  (e.memoizedProps = e.pendingProps),
    t === null ? Im(e) : (ae = t),
    (Xu.current = null);
}
function Im(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = X0(n, t)), n !== null)) {
        (n.flags &= 32767), (ae = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ce = 6), (ae = null);
        return;
      }
    } else if (((n = Y0(n, t, Ke)), n !== null)) {
      ae = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ae = t;
      return;
    }
    ae = t = e;
  } while (t !== null);
  ce === 0 && (ce = 5);
}
function En(e, t, n) {
  var r = $,
    i = ot.transition;
  try {
    (ot.transition = null), ($ = 1), nS(e, t, n, r);
  } finally {
    (ot.transition = i), ($ = r);
  }
  return null;
}
function nS(e, t, n, r) {
  do vr();
  while (Jt !== null);
  if (U & 6) throw Error(E(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(E(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (Dy(e, s),
    e === he && ((ae = he = null), (ve = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      us ||
      ((us = !0),
      zm(qs, function () {
        return vr(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = ot.transition), (ot.transition = null);
    var o = $;
    $ = 1;
    var a = U;
    (U |= 4),
      (Xu.current = null),
      G0(e, n),
      Mm(n, e),
      P0(vl),
      (Qs = !!ml),
      (vl = ml = null),
      (e.current = n),
      Q0(n),
      by(),
      (U = a),
      ($ = o),
      (ot.transition = s);
  } else e.current = n;
  if (
    (us && ((us = !1), (Jt = e), (po = i)),
    (s = e.pendingLanes),
    s === 0 && (on = null),
    _y(n.stateNode),
    ze(e, oe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (ho) throw ((ho = !1), (e = Dl), (Dl = null), e);
  return (
    po & 1 && e.tag !== 0 && vr(),
    (s = e.pendingLanes),
    s & 1 ? (e === Il ? ri++ : ((ri = 0), (Il = e))) : (ri = 0),
    gn(),
    null
  );
}
function vr() {
  if (Jt !== null) {
    var e = vp(po),
      t = ot.transition,
      n = $;
    try {
      if (((ot.transition = null), ($ = 16 > e ? 16 : e), Jt === null))
        var r = !1;
      else {
        if (((e = Jt), (Jt = null), (po = 0), U & 6)) throw Error(E(331));
        var i = U;
        for (U |= 4, O = e.current; O !== null; ) {
          var s = O,
            o = s.child;
          if (O.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (O = u; O !== null; ) {
                  var c = O;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ti(8, c, s);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (O = d);
                  else
                    for (; O !== null; ) {
                      c = O;
                      var f = c.sibling,
                        v = c.return;
                      if ((Am(c), c === u)) {
                        O = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = v), (O = f);
                        break;
                      }
                      O = v;
                    }
                }
              }
              var y = s.alternate;
              if (y !== null) {
                var w = y.child;
                if (w !== null) {
                  y.child = null;
                  do {
                    var k = w.sibling;
                    (w.sibling = null), (w = k);
                  } while (w !== null);
                }
              }
              O = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (O = o);
          else
            e: for (; O !== null; ) {
              if (((s = O), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ti(9, s, s.return);
                }
              var m = s.sibling;
              if (m !== null) {
                (m.return = s.return), (O = m);
                break e;
              }
              O = s.return;
            }
        }
        var h = e.current;
        for (O = h; O !== null; ) {
          o = O;
          var p = o.child;
          if (o.subtreeFlags & 2064 && p !== null) (p.return = o), (O = p);
          else
            e: for (o = h; O !== null; ) {
              if (((a = O), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Io(9, a);
                  }
                } catch (P) {
                  re(a, a.return, P);
                }
              if (a === o) {
                O = null;
                break e;
              }
              var S = a.sibling;
              if (S !== null) {
                (S.return = a.return), (O = S);
                break e;
              }
              O = a.return;
            }
        }
        if (
          ((U = i), gn(), Ct && typeof Ct.onPostCommitFiberRoot == "function")
        )
          try {
            Ct.onPostCommitFiberRoot(Oo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ($ = n), (ot.transition = t);
    }
  }
  return !1;
}
function Fd(e, t, n) {
  (t = Pr(n, t)),
    (t = gm(e, t, 1)),
    (e = sn(e, t, 1)),
    (t = Ne()),
    e !== null && (Li(e, 1, t), ze(e, t));
}
function re(e, t, n) {
  if (e.tag === 3) Fd(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Fd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (on === null || !on.has(r)))
        ) {
          (e = Pr(n, e)),
            (e = ym(t, e, 1)),
            (t = sn(t, e, 1)),
            (e = Ne()),
            t !== null && (Li(t, 1, e), ze(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function rS(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ne()),
    (e.pingedLanes |= e.suspendedLanes & n),
    he === e &&
      (ve & n) === n &&
      (ce === 4 || (ce === 3 && (ve & 130023424) === ve && 500 > oe() - Gu)
        ? jn(e, 0)
        : (qu |= n)),
    ze(e, t);
}
function Vm(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ji), (Ji <<= 1), !(Ji & 130023424) && (Ji = 4194304))
      : (t = 1));
  var n = Ne();
  (e = Bt(e, t)), e !== null && (Li(e, t, n), ze(e, n));
}
function iS(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Vm(e, n);
}
function sS(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(E(314));
  }
  r !== null && r.delete(t), Vm(e, n);
}
var Fm;
Fm = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ve.current) Ie = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ie = !1), K0(e, t, n);
      Ie = !!(e.flags & 131072);
    }
  else (Ie = !1), G && t.flags & 1048576 && Up(t, io, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Is(e, t), (e = t.pendingProps);
      var i = yr(t, be.current);
      mr(t, n), (i = Wu(null, t, r, e, i, n));
      var s = Hu();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Fe(r) ? ((s = !0), no(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Vu(t),
            (i.updater = jo),
            (t.stateNode = i),
            (i._reactInternals = t),
            Cl(t, r, e, n),
            (t = Al(null, t, r, !0, s, n)))
          : ((t.tag = 0), G && s && Mu(t), Re(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Is(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = aS(r)),
          (e = ft(r, e)),
          i)
        ) {
          case 0:
            t = bl(null, t, r, e, n);
            break e;
          case 1:
            t = Od(null, t, r, e, n);
            break e;
          case 11:
            t = bd(null, t, r, e, n);
            break e;
          case 14:
            t = Ad(null, t, r, ft(r.type, e), n);
            break e;
        }
        throw Error(E(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : ft(r, i)),
        bl(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : ft(r, i)),
        Od(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Pm(t), e === null)) throw Error(E(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          Kp(e, t),
          ao(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (i = Pr(Error(E(423)), t)), (t = _d(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Pr(Error(E(424)), t)), (t = _d(e, t, r, n, i));
            break e;
          } else
            for (
              qe = rn(t.stateNode.containerInfo.firstChild),
                Ge = t,
                G = !0,
                pt = null,
                n = Gp(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Sr(), r === i)) {
            t = Ut(e, t, n);
            break e;
          }
          Re(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Qp(t),
        e === null && Pl(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = i.children),
        gl(r, i) ? (o = null) : s !== null && gl(r, s) && (t.flags |= 32),
        xm(e, t),
        Re(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Pl(t), null;
    case 13:
      return Tm(e, t, n);
    case 4:
      return (
        Fu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = wr(t, null, r, n)) : Re(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : ft(r, i)),
        bd(e, t, r, i, n)
      );
    case 7:
      return Re(e, t, t.pendingProps, n), t.child;
    case 8:
      return Re(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Re(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (o = i.value),
          Y(so, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (gt(s.value, o)) {
            if (s.children === i.children && !Ve.current) {
              t = Ut(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var a = s.dependencies;
              if (a !== null) {
                o = s.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (s.tag === 1) {
                      (l = jt(-1, n & -n)), (l.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (s.lanes |= n),
                      (l = s.alternate),
                      l !== null && (l.lanes |= n),
                      Tl(s.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(E(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  Tl(o, n, t),
                  (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        Re(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        mr(t, n),
        (i = at(i)),
        (r = r(i)),
        (t.flags |= 1),
        Re(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = ft(r, t.pendingProps)),
        (i = ft(r.type, i)),
        Ad(e, t, r, i, n)
      );
    case 15:
      return Sm(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : ft(r, i)),
        Is(e, t),
        (t.tag = 1),
        Fe(r) ? ((e = !0), no(t)) : (e = !1),
        mr(t, n),
        Xp(t, r, i),
        Cl(t, r, i, n),
        Al(null, t, r, !0, e, n)
      );
    case 19:
      return km(e, t, n);
    case 22:
      return wm(e, t, n);
  }
  throw Error(E(156, t.tag));
};
function zm(e, t) {
  return fp(e, t);
}
function oS(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function st(e, t, n, r) {
  return new oS(e, t, n, r);
}
function ec(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function aS(e) {
  if (typeof e == "function") return ec(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Su)) return 11;
    if (e === wu) return 14;
  }
  return 2;
}
function ln(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = st(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function zs(e, t, n, r, i, s) {
  var o = 2;
  if (((r = e), typeof e == "function")) ec(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Xn:
        return Dn(n.children, i, s, t);
      case yu:
        (o = 8), (i |= 8);
        break;
      case qa:
        return (
          (e = st(12, n, t, i | 2)), (e.elementType = qa), (e.lanes = s), e
        );
      case Ga:
        return (e = st(13, n, t, i)), (e.elementType = Ga), (e.lanes = s), e;
      case Qa:
        return (e = st(19, n, t, i)), (e.elementType = Qa), (e.lanes = s), e;
      case qh:
        return Fo(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Yh:
              o = 10;
              break e;
            case Xh:
              o = 9;
              break e;
            case Su:
              o = 11;
              break e;
            case wu:
              o = 14;
              break e;
            case Xt:
              (o = 16), (r = null);
              break e;
          }
        throw Error(E(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = st(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function Dn(e, t, n, r) {
  return (e = st(7, e, r, t)), (e.lanes = n), e;
}
function Fo(e, t, n, r) {
  return (
    (e = st(22, e, r, t)),
    (e.elementType = qh),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Aa(e, t, n) {
  return (e = st(6, e, null, t)), (e.lanes = n), e;
}
function Oa(e, t, n) {
  return (
    (t = st(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function lS(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ua(0)),
    (this.expirationTimes = ua(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ua(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function tc(e, t, n, r, i, s, o, a, l) {
  return (
    (e = new lS(e, t, n, a, l)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = st(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Vu(s),
    e
  );
}
function uS(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Yn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Bm(e) {
  if (!e) return fn;
  e = e._reactInternals;
  e: {
    if (Hn(e) !== e || e.tag !== 1) throw Error(E(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Fe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(E(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Fe(n)) return zp(e, n, t);
  }
  return t;
}
function Um(e, t, n, r, i, s, o, a, l) {
  return (
    (e = tc(n, r, !0, e, i, s, o, a, l)),
    (e.context = Bm(null)),
    (n = e.current),
    (r = Ne()),
    (i = an(n)),
    (s = jt(r, i)),
    (s.callback = t ?? null),
    sn(n, s, i),
    (e.current.lanes = i),
    Li(e, i, r),
    ze(e, r),
    e
  );
}
function zo(e, t, n, r) {
  var i = t.current,
    s = Ne(),
    o = an(i);
  return (
    (n = Bm(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = jt(s, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = sn(i, t, o)),
    e !== null && (vt(e, i, o, s), Ls(e, i, o)),
    o
  );
}
function vo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function zd(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function nc(e, t) {
  zd(e, t), (e = e.alternate) && zd(e, t);
}
function cS() {
  return null;
}
var Wm =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function rc(e) {
  this._internalRoot = e;
}
Bo.prototype.render = rc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  zo(e, t, null, null);
};
Bo.prototype.unmount = rc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Un(function () {
      zo(null, e, null, null);
    }),
      (t[zt] = null);
  }
};
function Bo(e) {
  this._internalRoot = e;
}
Bo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Sp();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Gt.length && t !== 0 && t < Gt[n].priority; n++);
    Gt.splice(n, 0, e), n === 0 && xp(e);
  }
};
function ic(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Uo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Bd() {}
function dS(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = vo(o);
        s.call(u);
      };
    }
    var o = Um(t, r, e, 0, null, !1, !1, "", Bd);
    return (
      (e._reactRootContainer = o),
      (e[zt] = o.current),
      yi(e.nodeType === 8 ? e.parentNode : e),
      Un(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = vo(l);
      a.call(u);
    };
  }
  var l = tc(e, 0, !1, null, null, !1, !1, "", Bd);
  return (
    (e._reactRootContainer = l),
    (e[zt] = l.current),
    yi(e.nodeType === 8 ? e.parentNode : e),
    Un(function () {
      zo(t, l, n, r);
    }),
    l
  );
}
function Wo(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = vo(o);
        a.call(l);
      };
    }
    zo(t, o, e, i);
  } else o = dS(n, t, e, i, r);
  return vo(o);
}
gp = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Wr(t.pendingLanes);
        n !== 0 &&
          (Tu(t, n | 1), ze(t, oe()), !(U & 6) && ((Tr = oe() + 500), gn()));
      }
      break;
    case 13:
      Un(function () {
        var r = Bt(e, 1);
        if (r !== null) {
          var i = Ne();
          vt(r, e, 1, i);
        }
      }),
        nc(e, 1);
  }
};
ku = function (e) {
  if (e.tag === 13) {
    var t = Bt(e, 134217728);
    if (t !== null) {
      var n = Ne();
      vt(t, e, 134217728, n);
    }
    nc(e, 134217728);
  }
};
yp = function (e) {
  if (e.tag === 13) {
    var t = an(e),
      n = Bt(e, t);
    if (n !== null) {
      var r = Ne();
      vt(n, e, t, r);
    }
    nc(e, t);
  }
};
Sp = function () {
  return $;
};
wp = function (e, t) {
  var n = $;
  try {
    return ($ = e), t();
  } finally {
    $ = n;
  }
};
al = function (e, t, n) {
  switch (t) {
    case "input":
      if ((el(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = No(r);
            if (!i) throw Error(E(90));
            Qh(r), el(r, i);
          }
        }
      }
      break;
    case "textarea":
      Jh(e, n);
      break;
    case "select":
      (t = n.value), t != null && dr(e, !!n.multiple, t, !1);
  }
};
op = Qu;
ap = Un;
var fS = { usingClientEntryPoint: !1, Events: [Di, Zn, No, ip, sp, Qu] },
  Vr = {
    findFiberByHostInstance: _n,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  hS = {
    bundleType: Vr.bundleType,
    version: Vr.version,
    rendererPackageName: Vr.rendererPackageName,
    rendererConfig: Vr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ht.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = cp(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Vr.findFiberByHostInstance || cS,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var cs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!cs.isDisabled && cs.supportsFiber)
    try {
      (Oo = cs.inject(hS)), (Ct = cs);
    } catch {}
}
Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fS;
Je.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ic(t)) throw Error(E(200));
  return uS(e, t, null, n);
};
Je.createRoot = function (e, t) {
  if (!ic(e)) throw Error(E(299));
  var n = !1,
    r = "",
    i = Wm;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = tc(e, 1, !1, null, null, n, !1, r, i)),
    (e[zt] = t.current),
    yi(e.nodeType === 8 ? e.parentNode : e),
    new rc(t)
  );
};
Je.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(E(188))
      : ((e = Object.keys(e).join(",")), Error(E(268, e)));
  return (e = cp(t)), (e = e === null ? null : e.stateNode), e;
};
Je.flushSync = function (e) {
  return Un(e);
};
Je.hydrate = function (e, t, n) {
  if (!Uo(t)) throw Error(E(200));
  return Wo(null, e, t, !0, n);
};
Je.hydrateRoot = function (e, t, n) {
  if (!ic(e)) throw Error(E(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    o = Wm;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Um(t, null, e, 1, n ?? null, i, !1, s, o)),
    (e[zt] = t.current),
    yi(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Bo(t);
};
Je.render = function (e, t, n) {
  if (!Uo(t)) throw Error(E(200));
  return Wo(null, e, t, !1, n);
};
Je.unmountComponentAtNode = function (e) {
  if (!Uo(e)) throw Error(E(40));
  return e._reactRootContainer
    ? (Un(function () {
        Wo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[zt] = null);
        });
      }),
      !0)
    : !1;
};
Je.unstable_batchedUpdates = Qu;
Je.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Uo(n)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return Wo(e, t, n, !1, r);
};
Je.version = "18.2.0-next-9e3b772b8-20220608";
function Hm() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hm);
    } catch (e) {
      console.error(e);
    }
}
Hm(), (Uh.exports = Je);
var pS = Uh.exports,
  Ud = pS;
(Ya.createRoot = Ud.createRoot), (Ya.hydrateRoot = Ud.hydrateRoot);
const mS = "assets/logo-BbpAYHbF.png",
  vS =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2050%2050'%20width='50px'%20height='50px'%3e%3cpath%20d='M%200%207.5%20L%200%2012.5%20L%2050%2012.5%20L%2050%207.5%20Z%20M%200%2022.5%20L%200%2027.5%20L%2050%2027.5%20L%2050%2022.5%20Z%20M%200%2037.5%20L%200%2042.5%20L%2050%2042.5%20L%2050%2037.5%20Z'/%3e%3c/svg%3e",
  gS = "assets/Contact-D8VHeFEB.png";
/**
 * @remix-run/router v1.15.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function go() {
  return (
    (go = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    go.apply(this, arguments)
  );
}
var Nn;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Nn || (Nn = {}));
const Wd = "popstate";
function yS(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: s, search: o, hash: a } = r.location;
    return zl(
      "",
      { pathname: s, search: o, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : Km(i);
  }
  return wS(t, n, null, e);
}
function $m(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function SS() {
  return Math.random().toString(36).substr(2, 8);
}
function Hd(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function zl(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    go(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Ym(t) : t,
      { state: n, key: (t && t.key) || r || SS() }
    )
  );
}
function Km(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Ym(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function wS(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: s = !1 } = r,
    o = i.history,
    a = Nn.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), o.replaceState(go({}, o.state, { idx: u }), ""));
  function c() {
    return (o.state || { idx: null }).idx;
  }
  function d() {
    a = Nn.Pop;
    let k = c(),
      m = k == null ? null : k - u;
    (u = k), l && l({ action: a, location: w.location, delta: m });
  }
  function f(k, m) {
    a = Nn.Push;
    let h = zl(w.location, k, m);
    n && n(h, k), (u = c() + 1);
    let p = Hd(h, u),
      S = w.createHref(h);
    try {
      o.pushState(p, "", S);
    } catch (P) {
      if (P instanceof DOMException && P.name === "DataCloneError") throw P;
      i.location.assign(S);
    }
    s && l && l({ action: a, location: w.location, delta: 1 });
  }
  function v(k, m) {
    a = Nn.Replace;
    let h = zl(w.location, k, m);
    n && n(h, k), (u = c());
    let p = Hd(h, u),
      S = w.createHref(h);
    o.replaceState(p, "", S),
      s && l && l({ action: a, location: w.location, delta: 0 });
  }
  function y(k) {
    let m = i.location.origin !== "null" ? i.location.origin : i.location.href,
      h = typeof k == "string" ? k : Km(k);
    return (
      (h = h.replace(/ $/, "%20")),
      $m(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          h
      ),
      new URL(h, m)
    );
  }
  let w = {
    get action() {
      return a;
    },
    get location() {
      return e(i, o);
    },
    listen(k) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Wd, d),
        (l = k),
        () => {
          i.removeEventListener(Wd, d), (l = null);
        }
      );
    },
    createHref(k) {
      return t(i, k);
    },
    createURL: y,
    encodeLocation(k) {
      let m = y(k);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: f,
    replace: v,
    go(k) {
      return o.go(k);
    },
  };
  return w;
}
var $d;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})($d || ($d = {}));
function xS(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
const Xm = ["post", "put", "patch", "delete"];
new Set(Xm);
const PS = ["get", ...Xm];
new Set(PS);
/**
 * React Router v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Bl() {
  return (
    (Bl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Bl.apply(this, arguments)
  );
}
const TS = _.createContext(null),
  qm = _.createContext(null);
function kS() {
  return _.useContext(qm) != null;
}
function CS(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Nn.Pop,
    navigator: s,
    static: o = !1,
    future: a,
  } = e;
  kS() && $m(!1);
  let l = t.replace(/^\/*/, "/"),
    u = _.useMemo(
      () => ({
        basename: l,
        navigator: s,
        static: o,
        future: Bl({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, s, o]
    );
  typeof r == "string" && (r = Ym(r));
  let {
      pathname: c = "/",
      search: d = "",
      hash: f = "",
      state: v = null,
      key: y = "default",
    } = r,
    w = _.useMemo(() => {
      let k = xS(c, l);
      return k == null
        ? null
        : {
            location: { pathname: k, search: d, hash: f, state: v, key: y },
            navigationType: i,
          };
    }, [l, c, d, f, v, y, i]);
  return w == null
    ? null
    : _.createElement(
        TS.Provider,
        { value: u },
        _.createElement(qm.Provider, { children: n, value: w })
      );
}
new Promise(() => {});
/**
 * React Router DOM v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const ES = "6";
try {
  window.__reactRouterVersion = ES;
} catch {}
const bS = "startTransition",
  Kd = iy[bS];
function AS(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    s = _.useRef();
  s.current == null && (s.current = yS({ window: i, v5Compat: !0 }));
  let o = s.current,
    [a, l] = _.useState({ action: o.action, location: o.location }),
    { v7_startTransition: u } = r || {},
    c = _.useCallback(
      (d) => {
        u && Kd ? Kd(() => l(d)) : l(d);
      },
      [l, u]
    );
  return (
    _.useLayoutEffect(() => o.listen(c), [o, c]),
    _.createElement(CS, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: o,
      future: r,
    })
  );
}
var Yd;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Yd || (Yd = {}));
var Xd;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Xd || (Xd = {}));
function OS({ setShowMenu: e, showMenu: t }) {
  return g.jsxs("div", {
    className: `h-[15%] absolute w-full top-0 z-10 lg:h-[20%] flex flex-col group px-3 ${
      t ? "bg-black" : "bg-none"
    } transition-all hover:bg-[#282828] duration-[0.5s]`,
    children: [
      g.jsxs("div", {
        className: "relative flex justify-center w-full mt-5",
        children: [
          " ",
          g.jsx("button", {
            className: "absolute left-0 lg:hidden",
            onClick: () => e((n) => !n),
            children: g.jsx("img", {
              src: vS,
              className: "w-5 h-6 group-hover:invert",
              alt: "",
            }),
          }),
          g.jsx("img", { src: mS, className: "h-10 w-18 ", alt: "" }),
          g.jsx("a", {
            className: "absolute right-0 hover:scale-105 w-7 h-7",
            target: "_blank",
            href: "https://wa.link/8o93k2",
            children: g.jsx("img", {
              src: gS,
              alt: "",
              className: "group-hover:invert w-7 h-7 ",
            }),
          }),
        ],
      }),
      g.jsxs("ul", {
        className:
          "justify-center group-hover:[&>*]:text-white text-black [&>*]:font-semibold  [&>*]:text-lg hidden w-full gap-4 lg:flex my-7",
        children: [
          g.jsx("li", {
            className: "hover:scale-105",
            children: g.jsx("a", { href: "/", children: "Home" }),
          }),
          g.jsx("li", {
            className: "hover:scale-105",
            children: g.jsx("a", {
              href: "https://wa.link/8o93k2",
              children: "Contact",
            }),
          }),
          g.jsx("li", {
            className: "hidden hover:scale-105",
            children: g.jsx("a", { href: "#", to: "/", children: " About us" }),
          }),
        ],
      }),
    ],
  });
}
function _S({ positionize: e, setShowMenu: t }) {
  return g.jsxs("div", {
    className: `h-full w-[90%] z-20 top-0 transition-all pt-3 px-6 delay-0 duration-[0.7s] absolute ${e} bg-[#ebdecb]`,
    children: [
      g.jsx("button", {
        onClick: () => t((n) => !n),
        className: "opacity-50",
        children: g.jsx("svg", {
          focusable: "false",
          width: "14",
          height: "14",
          viewBox: "0 0 14 14",
          children: g.jsx("path", {
            d: "M13 13L1 1M13 1L1 13",
            stroke: "currentColor",
            fill: "none",
          }),
        }),
      }),
      g.jsxs("ul", {
        className:
          "flex flex-col gap-2 mt-1 text-xl font-bold opacity-80 [&>*]:py-3",
        children: [
          g.jsx("li", {
            className: "border-b border-[#0000002d]",
            children: g.jsx("a", {
              className: "",
              href: "/",
              children: "Home",
            }),
          }),
          g.jsx("li", {
            className: "border-b hover:scale-105 border-[#0000002d]",
            children: g.jsx("a", {
              href: "https://wa.link/8o93k2",
              children: "Contact",
            }),
          }),
          g.jsx("li", {
            className: "hidden",
            children: g.jsx("a", { href: "#", children: "About us" }),
          }),
        ],
      }),
    ],
  });
}
const MS = "assets/main2-DkRsTMh4.jpg",
  Gm = _.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  Ho = _.createContext({}),
  sc = _.createContext(null),
  oc = typeof window < "u",
  RS = oc ? _.useLayoutEffect : _.useEffect,
  Qm = _.createContext({ strict: !1 }),
  $o = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  NS = "framerAppearId",
  Zm = "data-" + $o(NS),
  LS = { skipAnimations: !1, useManualTiming: !1 };
function jS(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    i = !1;
  const s = new WeakSet();
  let o = { delta: 0, timestamp: 0, isProcessing: !1 };
  function a(u) {
    s.has(u) && (l.schedule(u), e()), u(o);
  }
  const l = {
    schedule: (u, c = !1, d = !1) => {
      const v = d && r ? t : n;
      return c && s.add(u), v.has(u) || v.add(u), u;
    },
    cancel: (u) => {
      n.delete(u), s.delete(u);
    },
    process: (u) => {
      if (((o = u), r)) {
        i = !0;
        return;
      }
      (r = !0),
        ([t, n] = [n, t]),
        n.clear(),
        t.forEach(a),
        (r = !1),
        i && ((i = !1), l.process(u));
    },
  };
  return l;
}
const ds = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  DS = 40;
function Jm(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    s = () => (n = !0),
    o = ds.reduce((m, h) => ((m[h] = jS(s)), m), {}),
    {
      read: a,
      resolveKeyframes: l,
      update: u,
      preRender: c,
      render: d,
      postRender: f,
    } = o,
    v = () => {
      const m = performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(m - i.timestamp, DS), 1)),
        (i.timestamp = m),
        (i.isProcessing = !0),
        a.process(i),
        l.process(i),
        u.process(i),
        c.process(i),
        d.process(i),
        f.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(v));
    },
    y = () => {
      (n = !0), (r = !0), i.isProcessing || e(v);
    };
  return {
    schedule: ds.reduce((m, h) => {
      const p = o[h];
      return (m[h] = (S, P = !1, C = !1) => (n || y(), p.schedule(S, P, C))), m;
    }, {}),
    cancel: (m) => {
      for (let h = 0; h < ds.length; h++) o[ds[h]].cancel(m);
    },
    state: i,
    steps: o,
  };
}
const { schedule: ac, cancel: Ak } = Jm(queueMicrotask, !1);
function sr(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
const ev = _.createContext({});
let qd = !1;
function IS(e, t, n, r, i) {
  const { visualElement: s } = _.useContext(Ho),
    o = _.useContext(Qm),
    a = _.useContext(sc),
    l = _.useContext(Gm).reducedMotion,
    u = _.useRef();
  (r = r || o.renderer),
    !u.current &&
      r &&
      (u.current = r(e, {
        visualState: t,
        parent: s,
        props: n,
        presenceContext: a,
        blockInitialAnimation: a ? a.initial === !1 : !1,
        reducedMotionConfig: l,
      }));
  const c = u.current,
    d = _.useContext(ev);
  c &&
    !c.projection &&
    i &&
    (c.type === "html" || c.type === "svg") &&
    FS(u.current, n, i, d),
    _.useInsertionEffect(() => {
      c && c.update(n, a);
    });
  const f = _.useRef(!!(n[Zm] && !window.HandoffComplete));
  return (
    RS(() => {
      c &&
        (c.updateFeatures(),
        ac.render(c.render),
        f.current && c.animationState && c.animationState.animateChanges());
    }),
    _.useEffect(() => {
      c &&
        (!f.current && c.animationState && c.animationState.animateChanges(),
        f.current && ((f.current = !1), qd || ((qd = !0), queueMicrotask(VS))));
    }),
    c
  );
}
function VS() {
  window.HandoffComplete = !0;
}
function FS(e, t, n, r) {
  const {
    layoutId: i,
    layout: s,
    drag: o,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: u,
  } = t;
  (e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : tv(e.parent)
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: s,
      alwaysMeasureLayout: !!o || (a && sr(a)),
      visualElement: e,
      animationType: typeof s == "string" ? s : "both",
      initialPromotionConfig: r,
      layoutScroll: l,
      layoutRoot: u,
    });
}
function tv(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : tv(e.parent);
}
function zS(e, t, n) {
  return _.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : sr(n) && (n.current = r));
    },
    [t]
  );
}
function bi(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Ai(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const lc = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  uc = ["initial", ...lc];
function Ko(e) {
  return Ai(e.animate) || uc.some((t) => bi(e[t]));
}
function nv(e) {
  return !!(Ko(e) || e.variants);
}
function BS(e, t) {
  if (Ko(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || bi(n) ? n : void 0,
      animate: bi(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function US(e) {
  const { initial: t, animate: n } = BS(e, _.useContext(Ho));
  return _.useMemo(() => ({ initial: t, animate: n }), [Gd(t), Gd(n)]);
}
function Gd(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Qd = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  kr = {};
for (const e in Qd) kr[e] = { isEnabled: (t) => Qd[e].some((n) => !!t[n]) };
function WS(e) {
  for (const t in e) kr[t] = { ...kr[t], ...e[t] };
}
const rv = _.createContext({}),
  HS = Symbol.for("motionComponentSymbol"),
  Ce = (e) => e;
let iv = Ce;
function $S({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && WS(e);
  function s(a, l) {
    let u;
    const c = { ..._.useContext(Gm), ...a, layoutId: KS(a) },
      { isStatic: d } = c,
      f = US(a),
      v = r(a, d);
    if (!d && oc) {
      YS();
      const y = XS(c);
      (u = y.MeasureLayout),
        (f.visualElement = IS(i, v, c, t, y.ProjectionNode));
    }
    return g.jsxs(Ho.Provider, {
      value: f,
      children: [
        u && f.visualElement
          ? g.jsx(u, { visualElement: f.visualElement, ...c })
          : null,
        n(i, a, zS(v, f.visualElement, l), v, d, f.visualElement),
      ],
    });
  }
  const o = _.forwardRef(s);
  return (o[HS] = i), o;
}
function KS({ layoutId: e }) {
  const t = _.useContext(rv).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function YS(e, t) {
  _.useContext(Qm).strict;
}
function XS(e) {
  const { drag: t, layout: n } = kr;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
function qS(e) {
  function t(r, i = {}) {
    return $S(e(r, i));
  }
  if (typeof Proxy > "u") return t;
  const n = new Map();
  return new Proxy(t, {
    get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i)),
  });
}
const GS = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function cc(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(GS.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
const yo = {};
function QS(e) {
  Object.assign(yo, e);
}
const Vi = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  yn = new Set(Vi);
function sv(e, { layout: t, layoutId: n }) {
  return (
    yn.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!yo[e] || e === "opacity"))
  );
}
const ke = (e) => !!(e && e.getVelocity),
  ZS = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  JS = Vi.length;
function e1(e, t, n) {
  let r = "";
  for (let i = 0; i < JS; i++) {
    const s = Vi[i];
    if (e[s] !== void 0) {
      const o = ZS[s] || s;
      r += `${o}(${e[s]}) `;
    }
  }
  return (r = r.trim()), n ? (r = n(e, t ? "" : r)) : t && (r = "none"), r;
}
const ov = (e) => (t) => typeof t == "string" && t.startsWith(e),
  av = ov("--"),
  t1 = ov("var(--"),
  dc = (e) => (t1(e) ? n1.test(e.split("/*")[0].trim()) : !1),
  n1 =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  r1 = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  hn = (e, t, n) => (n > t ? t : n < e ? e : n),
  Or = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  ii = { ...Or, transform: (e) => hn(0, 1, e) },
  fs = { ...Or, default: 1 },
  si = (e) => Math.round(e * 1e5) / 1e5,
  fc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
  i1 =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
  s1 =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
function Fi(e) {
  return typeof e == "string";
}
function o1(e) {
  return e == null;
}
const zi = (e) => ({
    test: (t) => Fi(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Yt = zi("deg"),
  bt = zi("%"),
  R = zi("px"),
  a1 = zi("vh"),
  l1 = zi("vw"),
  Zd = {
    ...bt,
    parse: (e) => bt.parse(e) / 100,
    transform: (e) => bt.transform(e * 100),
  },
  Jd = { ...Or, transform: Math.round },
  lv = {
    borderWidth: R,
    borderTopWidth: R,
    borderRightWidth: R,
    borderBottomWidth: R,
    borderLeftWidth: R,
    borderRadius: R,
    radius: R,
    borderTopLeftRadius: R,
    borderTopRightRadius: R,
    borderBottomRightRadius: R,
    borderBottomLeftRadius: R,
    width: R,
    maxWidth: R,
    height: R,
    maxHeight: R,
    size: R,
    top: R,
    right: R,
    bottom: R,
    left: R,
    padding: R,
    paddingTop: R,
    paddingRight: R,
    paddingBottom: R,
    paddingLeft: R,
    margin: R,
    marginTop: R,
    marginRight: R,
    marginBottom: R,
    marginLeft: R,
    rotate: Yt,
    rotateX: Yt,
    rotateY: Yt,
    rotateZ: Yt,
    scale: fs,
    scaleX: fs,
    scaleY: fs,
    scaleZ: fs,
    skew: Yt,
    skewX: Yt,
    skewY: Yt,
    distance: R,
    translateX: R,
    translateY: R,
    translateZ: R,
    x: R,
    y: R,
    z: R,
    perspective: R,
    transformPerspective: R,
    opacity: ii,
    originX: Zd,
    originY: Zd,
    originZ: R,
    zIndex: Jd,
    backgroundPositionX: R,
    backgroundPositionY: R,
    fillOpacity: ii,
    strokeOpacity: ii,
    numOctaves: Jd,
  };
function hc(e, t, n) {
  const { style: r, vars: i, transform: s, transformOrigin: o } = e;
  let a = !1,
    l = !1,
    u = !0;
  for (const c in t) {
    const d = t[c];
    if (av(c)) {
      i[c] = d;
      continue;
    }
    const f = lv[c],
      v = r1(d, f);
    if (yn.has(c)) {
      if (((a = !0), (s[c] = v), !u)) continue;
      d !== (f.default || 0) && (u = !1);
    } else c.startsWith("origin") ? ((l = !0), (o[c] = v)) : (r[c] = v);
  }
  if (
    (t.transform ||
      (a || n
        ? (r.transform = e1(e.transform, u, n))
        : r.transform && (r.transform = "none")),
    l)
  ) {
    const { originX: c = "50%", originY: d = "50%", originZ: f = 0 } = o;
    r.transformOrigin = `${c} ${d} ${f}`;
  }
}
const pc = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function uv(e, t, n) {
  for (const r in t) !ke(t[r]) && !sv(r, n) && (e[r] = t[r]);
}
function u1({ transformTemplate: e }, t) {
  return _.useMemo(() => {
    const n = pc();
    return hc(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function c1(e, t) {
  const n = e.style || {},
    r = {};
  return uv(r, n, e), Object.assign(r, u1(e, t)), r;
}
function d1(e, t) {
  const n = {},
    r = c1(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
const f1 = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function So(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    f1.has(e)
  );
}
let cv = (e) => !So(e);
function h1(e) {
  e && (cv = (t) => (t.startsWith("on") ? !So(t) : e(t)));
}
try {
  h1(require("@emotion/is-prop-valid").default);
} catch {}
function p1(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((cv(i) ||
        (n === !0 && So(i)) ||
        (!t && !So(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function ef(e, t, n) {
  return typeof e == "string" ? e : R.transform(t + n * e);
}
function m1(e, t, n) {
  const r = ef(t, e.x, e.width),
    i = ef(n, e.y, e.height);
  return `${r} ${i}`;
}
const v1 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  g1 = { offset: "strokeDashoffset", array: "strokeDasharray" };
function y1(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const s = i ? v1 : g1;
  e[s.offset] = R.transform(-r);
  const o = R.transform(t),
    a = R.transform(n);
  e[s.array] = `${o} ${a}`;
}
function mc(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: s,
    pathLength: o,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...u
  },
  c,
  d
) {
  if ((hc(e, u, d), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: f, style: v, dimensions: y } = e;
  f.transform && (y && (v.transform = f.transform), delete f.transform),
    y &&
      (i !== void 0 || s !== void 0 || v.transform) &&
      (v.transformOrigin = m1(
        y,
        i !== void 0 ? i : 0.5,
        s !== void 0 ? s : 0.5
      )),
    t !== void 0 && (f.x = t),
    n !== void 0 && (f.y = n),
    r !== void 0 && (f.scale = r),
    o !== void 0 && y1(f, o, a, l, !1);
}
const dv = () => ({ ...pc(), attrs: {} }),
  vc = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function S1(e, t, n, r) {
  const i = _.useMemo(() => {
    const s = dv();
    return (
      mc(s, t, vc(r), e.transformTemplate),
      { ...s.attrs, style: { ...s.style } }
    );
  }, [t]);
  if (e.style) {
    const s = {};
    uv(s, e.style, e), (i.style = { ...s, ...i.style });
  }
  return i;
}
function w1(e = !1) {
  return (n, r, i, { latestValues: s }, o) => {
    const l = (cc(n) ? S1 : d1)(r, s, o, n),
      u = p1(r, typeof n == "string", e),
      c = n !== _.Fragment ? { ...u, ...l, ref: i } : {},
      { children: d } = r,
      f = _.useMemo(() => (ke(d) ? d.get() : d), [d]);
    return _.createElement(n, { ...c, children: f });
  };
}
function fv(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const s in n) e.style.setProperty(s, n[s]);
}
const hv = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function pv(e, t, n, r) {
  fv(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(hv.has(i) ? i : $o(i), t.attrs[i]);
}
function gc(e, t, n) {
  var r;
  const { style: i } = e,
    s = {};
  for (const o in i)
    (ke(i[o]) ||
      (t.style && ke(t.style[o])) ||
      sv(o, e) ||
      ((r = n == null ? void 0 : n.getValue(o)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (s[o] = i[o]);
  return (
    n && i && typeof i.willChange == "string" && (n.applyWillChange = !1), s
  );
}
function mv(e, t, n) {
  const r = gc(e, t, n);
  for (const i in e)
    if (ke(e[i]) || ke(t[i])) {
      const s =
        Vi.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[s] = e[i];
    }
  return r;
}
function tf(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
      }),
    t
  );
}
function yc(e, t, n, r) {
  if (typeof t == "function") {
    const [i, s] = tf(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [i, s] = tf(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  return t;
}
function x1(e) {
  const t = _.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Ul = (e) => Array.isArray(e),
  P1 = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  T1 = (e) => (Ul(e) ? e[e.length - 1] || 0 : e);
function Bs(e) {
  const t = ke(e) ? e.get() : e;
  return P1(t) ? t.toValue() : t;
}
const vv = new Set(["opacity", "clipPath", "filter", "transform"]);
function gv(e) {
  if (yn.has(e)) return "transform";
  if (vv.has(e)) return $o(e);
}
function Yo(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Xo(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
function k1(
  {
    applyWillChange: e = !1,
    scrapeMotionValuesFromProps: t,
    createRenderState: n,
    onMount: r,
  },
  i,
  s,
  o,
  a
) {
  const l = { latestValues: E1(i, s, o, a ? !1 : e, t), renderState: n() };
  return r && (l.mount = (u) => r(i, u, l)), l;
}
const yv = (e) => (t, n) => {
  const r = _.useContext(Ho),
    i = _.useContext(sc),
    s = () => k1(e, t, r, i, n);
  return n ? s() : x1(s);
};
function C1(e, t) {
  const n = gv(t);
  n && Yo(e, n);
}
function nf(e, t, n) {
  const r = Array.isArray(t) ? t : [t];
  for (let i = 0; i < r.length; i++) {
    const s = yc(e, r[i]);
    if (s) {
      const { transitionEnd: o, transition: a, ...l } = s;
      n(l, o);
    }
  }
}
function E1(e, t, n, r, i) {
  var s;
  const o = {},
    a = [],
    l =
      r &&
      ((s = e.style) === null || s === void 0 ? void 0 : s.willChange) ===
        void 0,
    u = i(e, {});
  for (const k in u) o[k] = Bs(u[k]);
  let { initial: c, animate: d } = e;
  const f = Ko(e),
    v = nv(e);
  t &&
    v &&
    !f &&
    e.inherit !== !1 &&
    (c === void 0 && (c = t.initial), d === void 0 && (d = t.animate));
  let y = n ? n.initial === !1 : !1;
  y = y || c === !1;
  const w = y ? d : c;
  return (
    w &&
      typeof w != "boolean" &&
      !Ai(w) &&
      nf(e, w, (k, m) => {
        for (const h in k) {
          let p = k[h];
          if (Array.isArray(p)) {
            const S = y ? p.length - 1 : 0;
            p = p[S];
          }
          p !== null && (o[h] = p);
        }
        for (const h in m) o[h] = m[h];
      }),
    l &&
      (d &&
        c !== !1 &&
        !Ai(d) &&
        nf(e, d, (k) => {
          for (const m in k) C1(a, m);
        }),
      a.length && (o.willChange = a.join(","))),
    o
  );
}
const {
    schedule: K,
    cancel: Wt,
    state: me,
    steps: _a,
  } = Jm(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ce, !0),
  b1 = {
    useVisualState: yv({
      scrapeMotionValuesFromProps: mv,
      createRenderState: dv,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        K.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          K.render(() => {
            mc(n, r, vc(t.tagName), e.transformTemplate), pv(t, n);
          });
      },
    }),
  },
  A1 = {
    useVisualState: yv({
      applyWillChange: !0,
      scrapeMotionValuesFromProps: gc,
      createRenderState: pc,
    }),
  };
function O1(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(cc(e) ? b1 : A1),
    preloadedFeatures: n,
    useRender: w1(t),
    createVisualElement: r,
    Component: e,
  };
}
function Lt(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const Sv = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function qo(e, t = "page") {
  return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
}
const _1 = (e) => (t) => Sv(t) && e(t, qo(t));
function Dt(e, t, n, r) {
  return Lt(e, t, _1(n), r);
}
const M1 = (e, t) => (n) => t(e(n)),
  It = (...e) => e.reduce(M1);
function wv(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const rf = wv("dragHorizontal"),
  sf = wv("dragVertical");
function xv(e) {
  let t = !1;
  if (e === "y") t = sf();
  else if (e === "x") t = rf();
  else {
    const n = rf(),
      r = sf();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function Pv() {
  const e = xv(!0);
  return e ? (e(), !1) : !0;
}
class Sn {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function of(e, t) {
  const n = t ? "pointerenter" : "pointerleave",
    r = t ? "onHoverStart" : "onHoverEnd",
    i = (s, o) => {
      if (s.pointerType === "touch" || Pv()) return;
      const a = e.getProps();
      e.animationState &&
        a.whileHover &&
        e.animationState.setActive("whileHover", t);
      const l = a[r];
      l && K.postRender(() => l(s, o));
    };
  return Dt(e.current, n, i, { passive: !e.getProps()[r] });
}
class R1 extends Sn {
  mount() {
    this.unmount = It(of(this.node, !0), of(this.node, !1));
  }
  unmount() {}
}
class N1 extends Sn {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = It(
      Lt(this.node.current, "focus", () => this.onFocus()),
      Lt(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const Tv = (e, t) => (t ? (e === t ? !0 : Tv(e, t.parentElement)) : !1);
function Ma(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, qo(n));
}
class L1 extends Sn {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = Ce),
      (this.removeEndListeners = Ce),
      (this.removeAccessibleListeners = Ce),
      (this.startPointerPress = (t, n) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const r = this.node.getProps(),
          s = Dt(
            window,
            "pointerup",
            (a, l) => {
              if (!this.checkPressEnd()) return;
              const {
                  onTap: u,
                  onTapCancel: c,
                  globalTapTarget: d,
                } = this.node.getProps(),
                f = !d && !Tv(this.node.current, a.target) ? c : u;
              f && K.update(() => f(a, l));
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          o = Dt(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = It(s, o)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (s) => {
            if (s.key !== "Enter" || this.isPressing) return;
            const o = (a) => {
              a.key !== "Enter" ||
                !this.checkPressEnd() ||
                Ma("up", (l, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && K.postRender(() => c(l, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = Lt(this.node.current, "keyup", o)),
              Ma("down", (a, l) => {
                this.startPress(a, l);
              });
          },
          n = Lt(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && Ma("cancel", (s, o) => this.cancelPress(s, o));
          },
          i = Lt(this.node.current, "blur", r);
        this.removeAccessibleListeners = It(n, i);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: i } = this.node.getProps();
    i &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && K.postRender(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !Pv()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && K.postRender(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = Dt(
        t.globalTapTarget ? window : this.node.current,
        "pointerdown",
        this.startPointerPress,
        { passive: !(t.onTapStart || t.onPointerStart) }
      ),
      r = Lt(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = It(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const Wl = new WeakMap(),
  Ra = new WeakMap(),
  j1 = (e) => {
    const t = Wl.get(e.target);
    t && t(e);
  },
  D1 = (e) => {
    e.forEach(j1);
  };
function I1({ root: e, ...t }) {
  const n = e || document;
  Ra.has(n) || Ra.set(n, {});
  const r = Ra.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(D1, { root: e, ...t })), r[i];
}
function V1(e, t, n) {
  const r = I1(t);
  return (
    Wl.set(e, n),
    r.observe(e),
    () => {
      Wl.delete(e), r.unobserve(e);
    }
  );
}
const F1 = { some: 0, all: 1 };
class z1 extends Sn {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: s } = t,
      o = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : F1[i],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), s && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
          f = u ? c : d;
        f && f(l);
      };
    return V1(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(B1(t, n)) && this.startObserver();
  }
  unmount() {}
}
function B1({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const U1 = {
  inView: { Feature: z1 },
  tap: { Feature: L1 },
  focus: { Feature: N1 },
  hover: { Feature: R1 },
};
function kv(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function Go(e, t, n) {
  const r = e.getProps();
  return yc(r, t, n !== void 0 ? n : r.custom, e);
}
const un = (e) => e * 1e3,
  Vt = (e) => e / 1e3,
  W1 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  H1 = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  $1 = { type: "keyframes", duration: 0.8 },
  K1 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  Y1 = (e, { keyframes: t }) =>
    t.length > 2
      ? $1
      : yn.has(e)
      ? e.startsWith("scale")
        ? H1(t[1])
        : W1
      : K1;
function X1({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: s,
  repeatType: o,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
function Sc(e, t) {
  return e[t] || e.default || e;
}
const q1 = (e) => e !== null;
function Qo(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(q1),
    s = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !s || r === void 0 ? i[s] : r;
}
let Us;
function G1() {
  Us = void 0;
}
const cn = {
    now: () => (
      Us === void 0 &&
        cn.set(
          me.isProcessing || LS.useManualTiming
            ? me.timestamp
            : performance.now()
        ),
      Us
    ),
    set: (e) => {
      (Us = e), queueMicrotask(G1);
    },
  },
  Cv = (e) => /^0[^.\s]+$/u.test(e);
function Q1(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || Cv(e)
    : !0;
}
const Ev = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  Z1 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function J1(e) {
  const t = Z1.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function bv(e, t, n = 1) {
  const [r, i] = J1(e);
  if (!r) return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const o = s.trim();
    return Ev(o) ? parseFloat(o) : o;
  }
  return dc(i) ? bv(i, t, n + 1) : i;
}
const ew = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  af = (e) => e === Or || e === R,
  lf = (e, t) => parseFloat(e.split(", ")[t]),
  uf =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/u);
      if (i) return lf(i[1], t);
      {
        const s = r.match(/^matrix\((.+)\)$/u);
        return s ? lf(s[1], e) : 0;
      }
    },
  tw = new Set(["x", "y", "z"]),
  nw = Vi.filter((e) => !tw.has(e));
function rw(e) {
  const t = [];
  return (
    nw.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const Cr = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: uf(4, 13),
  y: uf(5, 14),
};
Cr.translateX = Cr.x;
Cr.translateY = Cr.y;
const Av = (e) => (t) => t.test(e),
  iw = { test: (e) => e === "auto", parse: (e) => e },
  Ov = [Or, R, bt, Yt, l1, a1, iw],
  cf = (e) => Ov.find(Av(e)),
  In = new Set();
let Hl = !1,
  $l = !1;
function _v() {
  if ($l) {
    const e = Array.from(In).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const i = rw(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([s, o]) => {
            var a;
            (a = r.getValue(s)) === null || a === void 0 || a.set(o);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  ($l = !1), (Hl = !1), In.forEach((e) => e.complete()), In.clear();
}
function Mv() {
  In.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && ($l = !0);
  });
}
function sw() {
  Mv(), _v();
}
class wc {
  constructor(t, n, r, i, s, o = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = s),
      (this.isAsync = o);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (In.add(this), Hl || ((Hl = !0), K.read(Mv), K.resolveKeyframes(_v)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: i,
    } = this;
    for (let s = 0; s < t.length; s++)
      if (t[s] === null)
        if (s === 0) {
          const o = i == null ? void 0 : i.get(),
            a = t[t.length - 1];
          if (o !== void 0) t[0] = o;
          else if (r && n) {
            const l = r.readValue(n, a);
            l != null && (t[0] = l);
          }
          t[0] === void 0 && (t[0] = a), i && o === void 0 && i.set(t[0]);
        } else t[s] = t[s - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      In.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), In.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const xc = (e, t) => (n) =>
    !!(
      (Fi(n) && s1.test(n) && n.startsWith(e)) ||
      (t && !o1(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Rv = (e, t, n) => (r) => {
    if (!Fi(r)) return r;
    const [i, s, o, a] = r.match(fc);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(s),
      [n]: parseFloat(o),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  ow = (e) => hn(0, 255, e),
  Na = { ...Or, transform: (e) => Math.round(ow(e)) },
  Ln = {
    test: xc("rgb", "red"),
    parse: Rv("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Na.transform(e) +
      ", " +
      Na.transform(t) +
      ", " +
      Na.transform(n) +
      ", " +
      si(ii.transform(r)) +
      ")",
  };
function aw(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const Kl = { test: xc("#"), parse: aw, transform: Ln.transform },
  or = {
    test: xc("hsl", "hue"),
    parse: Rv("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      bt.transform(si(t)) +
      ", " +
      bt.transform(si(n)) +
      ", " +
      si(ii.transform(r)) +
      ")",
  },
  Pe = {
    test: (e) => Ln.test(e) || Kl.test(e) || or.test(e),
    parse: (e) =>
      Ln.test(e) ? Ln.parse(e) : or.test(e) ? or.parse(e) : Kl.parse(e),
    transform: (e) =>
      Fi(e) ? e : e.hasOwnProperty("red") ? Ln.transform(e) : or.transform(e),
  };
function lw(e) {
  var t, n;
  return (
    isNaN(e) &&
    Fi(e) &&
    (((t = e.match(fc)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(i1)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const Nv = "number",
  Lv = "color",
  uw = "var",
  cw = "var(",
  df = "${}",
  dw =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Oi(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let s = 0;
  const a = t
    .replace(
      dw,
      (l) => (
        Pe.test(l)
          ? (r.color.push(s), i.push(Lv), n.push(Pe.parse(l)))
          : l.startsWith(cw)
          ? (r.var.push(s), i.push(uw), n.push(l))
          : (r.number.push(s), i.push(Nv), n.push(parseFloat(l))),
        ++s,
        df
      )
    )
    .split(df);
  return { values: n, split: a, indexes: r, types: i };
}
function jv(e) {
  return Oi(e).values;
}
function Dv(e) {
  const { split: t, types: n } = Oi(e),
    r = t.length;
  return (i) => {
    let s = "";
    for (let o = 0; o < r; o++)
      if (((s += t[o]), i[o] !== void 0)) {
        const a = n[o];
        a === Nv
          ? (s += si(i[o]))
          : a === Lv
          ? (s += Pe.transform(i[o]))
          : (s += i[o]);
      }
    return s;
  };
}
const fw = (e) => (typeof e == "number" ? 0 : e);
function hw(e) {
  const t = jv(e);
  return Dv(e)(t.map(fw));
}
const pn = {
    test: lw,
    parse: jv,
    createTransformer: Dv,
    getAnimatableNone: hw,
  },
  pw = new Set(["brightness", "contrast", "saturate", "opacity"]);
function mw(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(fc) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let s = pw.has(t) ? 1 : 0;
  return r !== n && (s *= 100), t + "(" + s + i + ")";
}
const vw = /\b([a-z-]*)\(.*?\)/gu,
  Yl = {
    ...pn,
    getAnimatableNone: (e) => {
      const t = e.match(vw);
      return t ? t.map(mw).join(" ") : e;
    },
  },
  gw = {
    ...lv,
    color: Pe,
    backgroundColor: Pe,
    outlineColor: Pe,
    fill: Pe,
    stroke: Pe,
    borderColor: Pe,
    borderTopColor: Pe,
    borderRightColor: Pe,
    borderBottomColor: Pe,
    borderLeftColor: Pe,
    filter: Yl,
    WebkitFilter: Yl,
  },
  Pc = (e) => gw[e];
function Iv(e, t) {
  let n = Pc(e);
  return (
    n !== Yl && (n = pn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const yw = new Set(["auto", "none", "0"]);
function Sw(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    const s = e[r];
    typeof s == "string" && !yw.has(s) && Oi(s).values.length && (i = e[r]),
      r++;
  }
  if (i && n) for (const s of t) e[s] = Iv(n, i);
}
class Vv extends wc {
  constructor(t, n, r, i) {
    super(t, n, r, i, i == null ? void 0 : i.owner, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let u = t[l];
      if (typeof u == "string" && ((u = u.trim()), dc(u))) {
        const c = bv(u, n.current);
        c !== void 0 && (t[l] = c),
          l === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if ((this.resolveNoneKeyframes(), !ew.has(r) || t.length !== 2)) return;
    const [i, s] = t,
      o = cf(i),
      a = cf(s);
    if (o !== a)
      if (af(o) && af(a))
        for (let l = 0; l < t.length; l++) {
          const u = t[l];
          typeof u == "string" && (t[l] = parseFloat(u));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) Q1(t[i]) && r.push(i);
    r.length && Sw(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Cr[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (n[0] = this.measuredOrigin);
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: i } = this;
    if (!n.current) return;
    const s = n.getValue(r);
    s && s.jump(this.measuredOrigin, !1);
    const o = i.length - 1,
      a = i[o];
    (i[o] = Cr[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([l, u]) => {
          n.getValue(l).set(u);
        }),
      this.resolveNoneKeyframes();
  }
}
function Fv(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const ff = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (pn.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function ww(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function xw(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const s = e[e.length - 1],
    o = ff(i, t),
    a = ff(s, t);
  return !o || !a ? !1 : ww(e) || (n === "spring" && r);
}
class zv {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: i = 0,
    repeatDelay: s = 0,
    repeatType: o = "loop",
    ...a
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: s,
        repeatType: o,
        ...a,
      }),
      this.updateFinishedPromise();
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && sw(), this._resolved;
  }
  onKeyframesResolved(t, n) {
    this.hasAttemptedResolve = !0;
    const {
      name: r,
      type: i,
      velocity: s,
      delay: o,
      onComplete: a,
      onUpdate: l,
      isGenerator: u,
    } = this.options;
    if (!u && !xw(t, r, i, s))
      if (o) this.options.duration = 0;
      else {
        l == null || l(Qo(t, this.options, n)),
          a == null || a(),
          this.resolveFinishedPromise();
        return;
      }
    const c = this.initPlayback(t, n);
    c !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...c }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
function Bv(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Pw = 5;
function Uv(e, t, n) {
  const r = Math.max(t - Pw, 0);
  return Bv(n - e(r), t - r);
}
const La = 0.001,
  Tw = 0.01,
  kw = 10,
  Cw = 0.05,
  Ew = 1;
function bw({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i,
    s,
    o = 1 - t;
  (o = hn(Cw, Ew, o)),
    (e = hn(Tw, kw, Vt(e))),
    o < 1
      ? ((i = (u) => {
          const c = u * o,
            d = c * e,
            f = c - n,
            v = Xl(u, o),
            y = Math.exp(-d);
          return La - (f / v) * y;
        }),
        (s = (u) => {
          const d = u * o * e,
            f = d * n + n,
            v = Math.pow(o, 2) * Math.pow(u, 2) * e,
            y = Math.exp(-d),
            w = Xl(Math.pow(u, 2), o);
          return ((-i(u) + La > 0 ? -1 : 1) * ((f - v) * y)) / w;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            d = (u - n) * e + 1;
          return -La + c * d;
        }),
        (s = (u) => {
          const c = Math.exp(-u * e),
            d = (n - u) * (e * e);
          return c * d;
        }));
  const a = 5 / e,
    l = Ow(i, s, a);
  if (((e = un(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: o * 2 * Math.sqrt(r * u), duration: e };
  }
}
const Aw = 12;
function Ow(e, t, n) {
  let r = n;
  for (let i = 1; i < Aw; i++) r = r - e(r) / t(r);
  return r;
}
function Xl(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const _w = ["duration", "bounce"],
  Mw = ["stiffness", "damping", "mass"];
function hf(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function Rw(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!hf(e, Mw) && hf(e, _w)) {
    const n = bw(e);
    (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function Wv({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const i = e[0],
    s = e[e.length - 1],
    o = { done: !1, value: i },
    {
      stiffness: a,
      damping: l,
      mass: u,
      duration: c,
      velocity: d,
      isResolvedFromDuration: f,
    } = Rw({ ...r, velocity: -Vt(r.velocity || 0) }),
    v = d || 0,
    y = l / (2 * Math.sqrt(a * u)),
    w = s - i,
    k = Vt(Math.sqrt(a / u)),
    m = Math.abs(w) < 5;
  n || (n = m ? 0.01 : 2), t || (t = m ? 0.005 : 0.5);
  let h;
  if (y < 1) {
    const p = Xl(k, y);
    h = (S) => {
      const P = Math.exp(-y * k * S);
      return (
        s - P * (((v + y * k * w) / p) * Math.sin(p * S) + w * Math.cos(p * S))
      );
    };
  } else if (y === 1) h = (p) => s - Math.exp(-k * p) * (w + (v + k * w) * p);
  else {
    const p = k * Math.sqrt(y * y - 1);
    h = (S) => {
      const P = Math.exp(-y * k * S),
        C = Math.min(p * S, 300);
      return (
        s - (P * ((v + y * k * w) * Math.sinh(C) + p * w * Math.cosh(C))) / p
      );
    };
  }
  return {
    calculatedDuration: (f && c) || null,
    next: (p) => {
      const S = h(p);
      if (f) o.done = p >= c;
      else {
        let P = v;
        p !== 0 && (y < 1 ? (P = Uv(h, p, S)) : (P = 0));
        const C = Math.abs(P) <= n,
          b = Math.abs(s - S) <= t;
        o.done = C && b;
      }
      return (o.value = o.done ? s : S), o;
    },
  };
}
function pf({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: s = 500,
  modifyTarget: o,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const d = e[0],
    f = { done: !1, value: d },
    v = (T) => (a !== void 0 && T < a) || (l !== void 0 && T > l),
    y = (T) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - T) < Math.abs(l - T)
        ? a
        : l;
  let w = n * t;
  const k = d + w,
    m = o === void 0 ? k : o(k);
  m !== k && (w = m - d);
  const h = (T) => -w * Math.exp(-T / r),
    p = (T) => m + h(T),
    S = (T) => {
      const L = h(T),
        M = p(T);
      (f.done = Math.abs(L) <= u), (f.value = f.done ? m : M);
    };
  let P, C;
  const b = (T) => {
    v(f.value) &&
      ((P = T),
      (C = Wv({
        keyframes: [f.value, y(f.value)],
        velocity: Uv(p, T, f.value),
        damping: i,
        stiffness: s,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    b(0),
    {
      calculatedDuration: null,
      next: (T) => {
        let L = !1;
        return (
          !C && P === void 0 && ((L = !0), S(T), b(T)),
          P !== void 0 && T >= P ? C.next(T - P) : (!L && S(T), f)
        );
      },
    }
  );
}
const Hv = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  Nw = 1e-7,
  Lw = 12;
function jw(e, t, n, r, i) {
  let s,
    o,
    a = 0;
  do (o = t + (n - t) / 2), (s = Hv(o, r, i) - e), s > 0 ? (n = o) : (t = o);
  while (Math.abs(s) > Nw && ++a < Lw);
  return o;
}
function Bi(e, t, n, r) {
  if (e === t && n === r) return Ce;
  const i = (s) => jw(s, 0, 1, e, n);
  return (s) => (s === 0 || s === 1 ? s : Hv(i(s), t, r));
}
const Dw = Bi(0.42, 0, 1, 1),
  Iw = Bi(0, 0, 0.58, 1),
  $v = Bi(0.42, 0, 0.58, 1),
  Vw = (e) => Array.isArray(e) && typeof e[0] != "number",
  Kv = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  Yv = (e) => (t) => 1 - e(1 - t),
  Tc = (e) => 1 - Math.sin(Math.acos(e)),
  Xv = Yv(Tc),
  Fw = Kv(Tc),
  qv = Bi(0.33, 1.53, 0.69, 0.99),
  kc = Yv(qv),
  zw = Kv(kc),
  Bw = (e) =>
    (e *= 2) < 1 ? 0.5 * kc(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Uw = {
    linear: Ce,
    easeIn: Dw,
    easeInOut: $v,
    easeOut: Iw,
    circIn: Tc,
    circInOut: Fw,
    circOut: Xv,
    backIn: kc,
    backInOut: zw,
    backOut: qv,
    anticipate: Bw,
  },
  mf = (e) => {
    if (Array.isArray(e)) {
      iv(e.length === 4);
      const [t, n, r, i] = e;
      return Bi(t, n, r, i);
    } else if (typeof e == "string") return Uw[e];
    return e;
  },
  _i = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  Z = (e, t, n) => e + (t - e) * n;
function ja(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function Ww({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    s = 0,
    o = 0;
  if (!t) i = s = o = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (i = ja(l, a, e + 1 / 3)), (s = ja(l, a, e)), (o = ja(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(s * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function wo(e, t) {
  return (n) => (n > 0 ? t : e);
}
const Da = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  Hw = [Kl, Ln, or],
  $w = (e) => Hw.find((t) => t.test(e));
function vf(e) {
  const t = $w(e);
  if (!t) return !1;
  let n = t.parse(e);
  return t === or && (n = Ww(n)), n;
}
const gf = (e, t) => {
    const n = vf(e),
      r = vf(t);
    if (!n || !r) return wo(e, t);
    const i = { ...n };
    return (s) => (
      (i.red = Da(n.red, r.red, s)),
      (i.green = Da(n.green, r.green, s)),
      (i.blue = Da(n.blue, r.blue, s)),
      (i.alpha = Z(n.alpha, r.alpha, s)),
      Ln.transform(i)
    );
  },
  ql = new Set(["none", "hidden"]);
function Kw(e, t) {
  return ql.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function Yw(e, t) {
  return (n) => Z(e, t, n);
}
function Cc(e) {
  return typeof e == "number"
    ? Yw
    : typeof e == "string"
    ? dc(e)
      ? wo
      : Pe.test(e)
      ? gf
      : Gw
    : Array.isArray(e)
    ? Gv
    : typeof e == "object"
    ? Pe.test(e)
      ? gf
      : Xw
    : wo;
}
function Gv(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((s, o) => Cc(s)(s, t[o]));
  return (s) => {
    for (let o = 0; o < r; o++) n[o] = i[o](s);
    return n;
  };
}
function Xw(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = Cc(e[i])(e[i], t[i]));
  return (i) => {
    for (const s in r) n[s] = r[s](i);
    return n;
  };
}
function qw(e, t) {
  var n;
  const r = [],
    i = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < t.values.length; s++) {
    const o = t.types[s],
      a = e.indexes[o][i[o]],
      l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    (r[s] = l), i[o]++;
  }
  return r;
}
const Gw = (e, t) => {
  const n = pn.createTransformer(t),
    r = Oi(e),
    i = Oi(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (ql.has(e) && !i.values.length) || (ql.has(t) && !r.values.length)
      ? Kw(e, t)
      : It(Gv(qw(r, i), i.values), n)
    : wo(e, t);
};
function Qv(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? Z(e, t, n)
    : Cc(e)(e, t);
}
function Qw(e, t, n) {
  const r = [],
    i = n || Qv,
    s = e.length - 1;
  for (let o = 0; o < s; o++) {
    let a = i(e[o], e[o + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[o] || Ce : t;
      a = It(l, a);
    }
    r.push(a);
  }
  return r;
}
function Zw(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const s = e.length;
  if ((iv(s === t.length), s === 1)) return () => t[0];
  if (s === 2 && e[0] === e[1]) return () => t[1];
  e[0] > e[s - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const o = Qw(t, r, i),
    a = o.length,
    l = (u) => {
      let c = 0;
      if (a > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const d = _i(e[c], e[c + 1], u);
      return o[c](d);
    };
  return n ? (u) => l(hn(e[0], e[s - 1], u)) : l;
}
function Jw(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = _i(0, t, r);
    e.push(Z(n, 1, i));
  }
}
function e2(e) {
  const t = [0];
  return Jw(t, e.length - 1), t;
}
function t2(e, t) {
  return e.map((n) => n * t);
}
function n2(e, t) {
  return e.map(() => t || $v).splice(0, e.length - 1);
}
function xo({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = Vw(r) ? r.map(mf) : mf(r),
    s = { done: !1, value: t[0] },
    o = t2(n && n.length === t.length ? n : e2(t), e),
    a = Zw(o, t, { ease: Array.isArray(i) ? i : n2(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((s.value = a(l)), (s.done = l >= e), s),
  };
}
const yf = 2e4;
function r2(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < yf; ) (t += n), (r = e.next(t));
  return t >= yf ? 1 / 0 : t;
}
const i2 = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => K.update(t, !0),
      stop: () => Wt(t),
      now: () => (me.isProcessing ? me.timestamp : cn.now()),
    };
  },
  s2 = { decay: pf, inertia: pf, tween: xo, keyframes: xo, spring: Wv },
  o2 = (e) => e / 100;
class Ec extends zv {
  constructor({ KeyframeResolver: t = wc, ...n }) {
    super(n),
      (this.holdTime = null),
      (this.startTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: a } = this.options;
        a && a();
      });
    const { name: r, motionValue: i, keyframes: s } = this.options,
      o = (a, l) => this.onKeyframesResolved(a, l);
    r && i && i.owner
      ? (this.resolver = i.owner.resolveKeyframes(s, o, r, i))
      : (this.resolver = new t(s, o, r, i)),
      this.resolver.scheduleResolve();
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: i = 0,
        repeatType: s,
        velocity: o = 0,
      } = this.options,
      a = s2[n] || xo;
    let l, u;
    a !== xo &&
      typeof t[0] != "number" &&
      ((l = It(o2, Qv(t[0], t[1]))), (t = [0, 100]));
    const c = a({ ...this.options, keyframes: t });
    s === "mirror" &&
      (u = a({ ...this.options, keyframes: [...t].reverse(), velocity: -o })),
      c.calculatedDuration === null && (c.calculatedDuration = r2(c));
    const { calculatedDuration: d } = c,
      f = d + i,
      v = f * (r + 1) - i;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: l,
      calculatedDuration: d,
      resolvedDuration: f,
      totalDuration: v,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: T } = this.options;
      return { done: !0, value: T[T.length - 1] };
    }
    const {
      finalKeyframe: i,
      generator: s,
      mirroredGenerator: o,
      mapPercentToKeyframes: a,
      keyframes: l,
      calculatedDuration: u,
      totalDuration: c,
      resolvedDuration: d,
    } = r;
    if (this.startTime === null) return s.next(0);
    const {
      delay: f,
      repeat: v,
      repeatType: y,
      repeatDelay: w,
      onUpdate: k,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - c / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const m = this.currentTime - f * (this.speed >= 0 ? 1 : -1),
      h = this.speed >= 0 ? m < 0 : m > c;
    (this.currentTime = Math.max(m, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c);
    let p = this.currentTime,
      S = s;
    if (v) {
      const T = Math.min(this.currentTime, c) / d;
      let L = Math.floor(T),
        M = T % 1;
      !M && T >= 1 && (M = 1),
        M === 1 && L--,
        (L = Math.min(L, v + 1)),
        !!(L % 2) &&
          (y === "reverse"
            ? ((M = 1 - M), w && (M -= w / d))
            : y === "mirror" && (S = o)),
        (p = hn(0, 1, M) * d);
    }
    const P = h ? { done: !1, value: l[0] } : S.next(p);
    a && (P.value = a(P.value));
    let { done: C } = P;
    !h &&
      u !== null &&
      (C = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const b =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && C));
    return (
      b && i !== void 0 && (P.value = Qo(l, this.options, i)),
      k && k(P.value),
      b && this.finish(),
      P
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? Vt(t.calculatedDuration) : 0;
  }
  get time() {
    return Vt(this.currentTime);
  }
  set time(t) {
    (t = un(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = Vt(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = i2, onPlay: n } = this.options;
    this.driver || (this.driver = t((i) => this.tick(i))), n && n();
    const r = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = r - this.holdTime)
      : (!this.startTime || this.state === "finished") && (this.startTime = r),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
const Zv = (e) => Array.isArray(e) && typeof e[0] == "number";
function Jv(e) {
  return !!(
    !e ||
    (typeof e == "string" && e in bc) ||
    Zv(e) ||
    (Array.isArray(e) && e.every(Jv))
  );
}
const $r = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  bc = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: $r([0, 0.65, 0.55, 1]),
    circOut: $r([0.55, 0, 1, 0.45]),
    backIn: $r([0.31, 0.01, 0.66, -0.59]),
    backOut: $r([0.33, 1.53, 0.69, 0.99]),
  };
function a2(e) {
  return eg(e) || bc.easeOut;
}
function eg(e) {
  if (e) return Zv(e) ? $r(e) : Array.isArray(e) ? e.map(a2) : bc[e];
}
function l2(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: s = 0,
    repeatType: o = "loop",
    ease: a,
    times: l,
  } = {}
) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = eg(a);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: s + 1,
      direction: o === "reverse" ? "alternate" : "normal",
    })
  );
}
const u2 = Fv(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  Po = 10,
  c2 = 2e4;
function d2(e) {
  return e.type === "spring" || !Jv(e.ease);
}
function f2(e, t) {
  const n = new Ec({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const i = [];
  let s = 0;
  for (; !r.done && s < c2; ) (r = n.sample(s)), i.push(r.value), (s += Po);
  return { times: void 0, keyframes: i, duration: s - Po, ease: "linear" };
}
class Sf extends zv {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, keyframes: i } = this.options;
    (this.resolver = new Vv(i, (s, o) => this.onKeyframesResolved(s, o), n, r)),
      this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    var r;
    let {
      duration: i = 300,
      times: s,
      ease: o,
      type: a,
      motionValue: l,
      name: u,
    } = this.options;
    if (!(!((r = l.owner) === null || r === void 0) && r.current)) return !1;
    if (d2(this.options)) {
      const { onComplete: d, onUpdate: f, motionValue: v, ...y } = this.options,
        w = f2(t, y);
      (t = w.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (i = w.duration),
        (s = w.times),
        (o = w.ease),
        (a = "keyframes");
    }
    const c = l2(l.owner.current, u, t, {
      ...this.options,
      duration: i,
      times: s,
      ease: o,
    });
    return (
      (c.startTime = cn.now()),
      this.pendingTimeline
        ? ((c.timeline = this.pendingTimeline), (this.pendingTimeline = void 0))
        : (c.onfinish = () => {
            const { onComplete: d } = this.options;
            l.set(Qo(t, this.options, n)),
              d && d(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: c, duration: i, times: s, type: a, ease: o, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return Vt(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return Vt(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = un(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return Ce;
      const { animation: r } = n;
      (r.timeline = t), (r.onfinish = null);
    }
    return Ce;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: n,
      keyframes: r,
      duration: i,
      type: s,
      ease: o,
      times: a,
    } = t;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const { motionValue: u, onUpdate: c, onComplete: d, ...f } = this.options,
        v = new Ec({
          ...f,
          keyframes: r,
          duration: i,
          type: s,
          ease: o,
          times: a,
          isGenerator: !0,
        }),
        y = un(this.time);
      u.setWithVelocity(v.sample(y - Po).value, v.sample(y).value, Po);
    }
    const { onStop: l } = this.options;
    l && l(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: i,
      repeatType: s,
      damping: o,
      type: a,
    } = t;
    return (
      u2() &&
      r &&
      vv.has(r) &&
      n &&
      n.owner &&
      n.owner.current instanceof HTMLElement &&
      !n.owner.getProps().onUpdate &&
      !i &&
      s !== "mirror" &&
      o !== 0 &&
      a !== "inertia"
    );
  }
}
function h2(e, t) {
  let n;
  const r = () => {
    const { currentTime: i } = t,
      o = (i === null ? 0 : i.value) / 100;
    n !== o && e(o), (n = o);
  };
  return K.update(r, !0), () => Wt(r);
}
const p2 = Fv(() => window.ScrollTimeline !== void 0);
class m2 {
  constructor(t) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = t.filter(Boolean));
  }
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
  }
  attachTimeline(t) {
    const n = this.animations.map((r) => {
      if (p2() && r.attachTimeline) r.attachTimeline(t);
      else
        return (
          r.pause(),
          h2((i) => {
            r.time = r.duration * i;
          }, t)
        );
    });
    return () => {
      n.forEach((r, i) => {
        r && r(), this.animations[i].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
const Ac =
  (e, t, n, r = {}, i, s, o) =>
  (a) => {
    const l = Sc(r, e) || {},
      u = l.delay || r.delay || 0;
    let { elapsed: c = 0 } = r;
    c = c - un(u);
    let d = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...l,
      delay: -c,
      onUpdate: (v) => {
        t.set(v), l.onUpdate && l.onUpdate(v);
      },
      onComplete: () => {
        a(), l.onComplete && l.onComplete(), o && o();
      },
      onStop: o,
      name: e,
      motionValue: t,
      element: s ? void 0 : i,
    };
    X1(l) || (d = { ...d, ...Y1(e, d) }),
      d.duration && (d.duration = un(d.duration)),
      d.repeatDelay && (d.repeatDelay = un(d.repeatDelay)),
      d.from !== void 0 && (d.keyframes[0] = d.from);
    let f = !1;
    if (
      ((d.type === !1 || (d.duration === 0 && !d.repeatDelay)) &&
        ((d.duration = 0), d.delay === 0 && (f = !0)),
      f && !s && t.get() !== void 0)
    ) {
      const v = Qo(d.keyframes, l);
      if (v !== void 0)
        return (
          K.update(() => {
            d.onUpdate(v), d.onComplete();
          }),
          new m2([])
        );
    }
    return !s && Sf.supports(d) ? new Sf(d) : new Ec(d);
  };
class Oc {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Yo(this.subscriptions, t), () => Xo(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let s = 0; s < i; s++) {
          const o = this.subscriptions[s];
          o && o(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const wf = 30,
  v2 = (e) => !isNaN(parseFloat(e));
class tg {
  constructor(t, n = {}) {
    (this.version = "11.3.19"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        const s = cn.now();
        this.updatedAt !== s && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = cn.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = v2(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Oc());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            K.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = cn.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > wf
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, wf);
    return Bv(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Mi(e, t) {
  return new tg(e, t);
}
function g2(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Mi(n));
}
function y2(e, t) {
  const n = Go(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const o in s) {
    const a = T1(s[o]);
    g2(e, o, a);
  }
}
function ng(e) {
  return e.getProps()[Zm];
}
class S2 extends tg {
  constructor() {
    super(...arguments), (this.output = []), (this.counts = new Map());
  }
  add(t) {
    const n = gv(t);
    if (!n) return;
    const r = this.counts.get(n) || 0;
    this.counts.set(n, r + 1), r === 0 && (this.output.push(n), this.update());
    let i = !1;
    return () => {
      if (i) return;
      i = !0;
      const s = this.counts.get(n) - 1;
      this.counts.set(n, s), s === 0 && (Xo(this.output, n), this.update());
    };
  }
  update() {
    this.set(this.output.length ? this.output.join(", ") : "auto");
  }
}
function w2(e) {
  return !!(ke(e) && e.add);
}
function Gl(e, t) {
  var n;
  if (!e.applyWillChange) return;
  let r = e.getValue("willChange");
  if (
    (!r &&
      !(!((n = e.props.style) === null || n === void 0) && n.willChange) &&
      ((r = new S2("auto")), e.addValue("willChange", r)),
    w2(r))
  )
    return r.add(t);
}
function x2({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function rg(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var s;
  let { transition: o = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (o = r);
  const u = [],
    c = i && e.animationState && e.animationState.getState()[i];
  for (const d in l) {
    const f = e.getValue(
        d,
        (s = e.latestValues[d]) !== null && s !== void 0 ? s : null
      ),
      v = l[d];
    if (v === void 0 || (c && x2(c, d))) continue;
    const y = { delay: n, elapsed: 0, ...Sc(o || {}, d) };
    let w = !1;
    if (window.HandoffAppearAnimations) {
      const m = ng(e);
      if (m) {
        const h = window.HandoffAppearAnimations(m, d, f, K);
        h !== null && ((y.elapsed = h), (w = !0));
      }
    }
    f.start(
      Ac(
        d,
        f,
        v,
        e.shouldReduceMotion && yn.has(d) ? { type: !1 } : y,
        e,
        w,
        Gl(e, d)
      )
    );
    const k = f.animation;
    k && u.push(k);
  }
  return (
    a &&
      Promise.all(u).then(() => {
        K.update(() => {
          a && y2(e, a);
        });
      }),
    u
  );
}
function Ql(e, t, n = {}) {
  var r;
  const i = Go(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0
  );
  let { transition: s = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (s = n.transitionOverride);
  const o = i ? () => Promise.all(rg(e, i, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: d,
              staggerDirection: f,
            } = s;
            return P2(e, t, c + u, d, f, n);
          }
        : () => Promise.resolve(),
    { when: l } = s;
  if (l) {
    const [u, c] = l === "beforeChildren" ? [o, a] : [a, o];
    return u().then(() => c());
  } else return Promise.all([o(), a(n.delay)]);
}
function P2(e, t, n = 0, r = 0, i = 1, s) {
  const o = [],
    a = (e.variantChildren.size - 1) * r,
    l = i === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(T2)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          o.push(
            Ql(u, t, { ...s, delay: n + l(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(o)
  );
}
function T2(e, t) {
  return e.sortNodePosition(t);
}
function k2(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((s) => Ql(e, s, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = Ql(e, t, n);
  else {
    const i = typeof t == "function" ? Go(e, t, n.custom) : t;
    r = Promise.all(rg(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const C2 = [...lc].reverse(),
  E2 = lc.length;
function b2(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => k2(e, n, r)));
}
function A2(e) {
  let t = b2(e),
    n = xf(),
    r = !0;
  const i = (l) => (u, c) => {
    var d;
    const f = Go(
      e,
      c,
      l === "exit"
        ? (d = e.presenceContext) === null || d === void 0
          ? void 0
          : d.custom
        : void 0
    );
    if (f) {
      const { transition: v, transitionEnd: y, ...w } = f;
      u = { ...u, ...w, ...y };
    }
    return u;
  };
  function s(l) {
    t = l(e);
  }
  function o(l) {
    const u = e.getProps(),
      c = e.getVariantContext(!0) || {},
      d = [],
      f = new Set();
    let v = {},
      y = 1 / 0;
    for (let k = 0; k < E2; k++) {
      const m = C2[k],
        h = n[m],
        p = u[m] !== void 0 ? u[m] : c[m],
        S = bi(p),
        P = m === l ? h.isActive : null;
      P === !1 && (y = k);
      let C = p === c[m] && p !== u[m] && S;
      if (
        (C && r && e.manuallyAnimateOnMount && (C = !1),
        (h.protectedKeys = { ...v }),
        (!h.isActive && P === null) ||
          (!p && !h.prevProp) ||
          Ai(p) ||
          typeof p == "boolean")
      )
        continue;
      let T =
          O2(h.prevProp, p) ||
          (m === l && h.isActive && !C && S) ||
          (k > y && S),
        L = !1;
      const M = Array.isArray(p) ? p : [p];
      let B = M.reduce(i(m), {});
      P === !1 && (B = {});
      const { prevResolvedValues: We = {} } = h,
        He = { ...We, ...B },
        wn = (le) => {
          (T = !0),
            f.has(le) && ((L = !0), f.delete(le)),
            (h.needsAnimating[le] = !0);
          const _e = e.getValue(le);
          _e && (_e.liveStyle = !1);
        };
      for (const le in He) {
        const _e = B[le],
          At = We[le];
        if (v.hasOwnProperty(le)) continue;
        let A = !1;
        Ul(_e) && Ul(At) ? (A = !kv(_e, At)) : (A = _e !== At),
          A
            ? _e != null
              ? wn(le)
              : f.add(le)
            : _e !== void 0 && f.has(le)
            ? wn(le)
            : (h.protectedKeys[le] = !0);
      }
      (h.prevProp = p),
        (h.prevResolvedValues = B),
        h.isActive && (v = { ...v, ...B }),
        r && e.blockInitialAnimation && (T = !1),
        T &&
          (!C || L) &&
          d.push(...M.map((le) => ({ animation: le, options: { type: m } })));
    }
    if (f.size) {
      const k = {};
      f.forEach((m) => {
        const h = e.getBaseTarget(m),
          p = e.getValue(m);
        p && (p.liveStyle = !0), (k[m] = h ?? null);
      }),
        d.push({ animation: k });
    }
    let w = !!d.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (w = !1),
      (r = !1),
      w ? t(d) : Promise.resolve()
    );
  }
  function a(l, u) {
    var c;
    if (n[l].isActive === u) return Promise.resolve();
    (c = e.variantChildren) === null ||
      c === void 0 ||
      c.forEach((f) => {
        var v;
        return (v = f.animationState) === null || v === void 0
          ? void 0
          : v.setActive(l, u);
      }),
      (n[l].isActive = u);
    const d = o(l);
    for (const f in n) n[f].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: o,
    setActive: a,
    setAnimateFunction: s,
    getState: () => n,
    reset: () => {
      (n = xf()), (r = !0);
    },
  };
}
function O2(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !kv(t, e) : !1;
}
function Tn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function xf() {
  return {
    animate: Tn(!0),
    whileInView: Tn(),
    whileHover: Tn(),
    whileTap: Tn(),
    whileDrag: Tn(),
    whileFocus: Tn(),
    exit: Tn(),
  };
}
class _2 extends Sn {
  constructor(t) {
    super(t), t.animationState || (t.animationState = A2(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Ai(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(),
      (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let M2 = 0;
class R2 extends Sn {
  constructor() {
    super(...arguments), (this.id = M2++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const i = this.node.animationState.setActive("exit", !t);
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const N2 = { animation: { Feature: _2 }, exit: { Feature: R2 } },
  Pf = (e, t) => Math.abs(e - t);
function L2(e, t) {
  const n = Pf(e.x, t.x),
    r = Pf(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class ig {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: s = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const d = Va(this.lastMoveEventInfo, this.history),
          f = this.startEvent !== null,
          v = L2(d.offset, { x: 0, y: 0 }) >= 3;
        if (!f && !v) return;
        const { point: y } = d,
          { timestamp: w } = me;
        this.history.push({ ...y, timestamp: w });
        const { onStart: k, onMove: m } = this.handlers;
        f ||
          (k && k(this.lastMoveEvent, d),
          (this.startEvent = this.lastMoveEvent)),
          m && m(this.lastMoveEvent, d);
      }),
      (this.handlePointerMove = (d, f) => {
        (this.lastMoveEvent = d),
          (this.lastMoveEventInfo = Ia(f, this.transformPagePoint)),
          K.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (d, f) => {
        this.end();
        const { onEnd: v, onSessionEnd: y, resumeAnimation: w } = this.handlers;
        if (
          (this.dragSnapToOrigin && w && w(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const k = Va(
          d.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Ia(f, this.transformPagePoint),
          this.history
        );
        this.startEvent && v && v(d, k), y && y(d, k);
      }),
      !Sv(t))
    )
      return;
    (this.dragSnapToOrigin = s),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window);
    const o = qo(t),
      a = Ia(o, this.transformPagePoint),
      { point: l } = a,
      { timestamp: u } = me;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, Va(a, this.history)),
      (this.removeListeners = It(
        Dt(this.contextWindow, "pointermove", this.handlePointerMove),
        Dt(this.contextWindow, "pointerup", this.handlePointerUp),
        Dt(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Wt(this.updatePoint);
  }
}
function Ia(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Tf(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Va({ point: e }, t) {
  return {
    point: e,
    delta: Tf(e, sg(t)),
    offset: Tf(e, j2(t)),
    velocity: D2(t, 0.1),
  };
}
function j2(e) {
  return e[0];
}
function sg(e) {
  return e[e.length - 1];
}
function D2(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = sg(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > un(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const s = Vt(i.timestamp - r.timestamp);
  if (s === 0) return { x: 0, y: 0 };
  const o = { x: (i.x - r.x) / s, y: (i.y - r.y) / s };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
const og = 1e-4,
  I2 = 1 - og,
  V2 = 1 + og,
  ag = 0.01,
  F2 = 0 - ag,
  z2 = 0 + ag;
function Ze(e) {
  return e.max - e.min;
}
function B2(e, t, n) {
  return Math.abs(e - t) <= n;
}
function kf(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = Z(t.min, t.max, e.origin)),
    (e.scale = Ze(n) / Ze(t)),
    (e.translate = Z(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= I2 && e.scale <= V2) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= F2 && e.translate <= z2) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function oi(e, t, n, r) {
  kf(e.x, t.x, n.x, r ? r.originX : void 0),
    kf(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Cf(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + Ze(t));
}
function U2(e, t, n) {
  Cf(e.x, t.x, n.x), Cf(e.y, t.y, n.y);
}
function Ef(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + Ze(t));
}
function ai(e, t, n) {
  Ef(e.x, t.x, n.x), Ef(e.y, t.y, n.y);
}
function W2(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? Z(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? Z(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function bf(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function H2(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: bf(e.x, n, i), y: bf(e.y, t, r) };
}
function Af(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function $2(e, t) {
  return { x: Af(e.x, t.x), y: Af(e.y, t.y) };
}
function K2(e, t) {
  let n = 0.5;
  const r = Ze(e),
    i = Ze(t);
  return (
    i > r
      ? (n = _i(t.min, t.max - r, e.min))
      : r > i && (n = _i(e.min, e.max - i, t.min)),
    hn(0, 1, n)
  );
}
function Y2(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const Zl = 0.35;
function X2(e = Zl) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Zl),
    { x: Of(e, "left", "right"), y: Of(e, "top", "bottom") }
  );
}
function Of(e, t, n) {
  return { min: _f(e, t), max: _f(e, n) };
}
function _f(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Mf = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  ar = () => ({ x: Mf(), y: Mf() }),
  Rf = () => ({ min: 0, max: 0 }),
  se = () => ({ x: Rf(), y: Rf() });
function nt(e) {
  return [e("x"), e("y")];
}
function lg({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function q2({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function G2(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Fa(e) {
  return e === void 0 || e === 1;
}
function Jl({ scale: e, scaleX: t, scaleY: n }) {
  return !Fa(e) || !Fa(t) || !Fa(n);
}
function bn(e) {
  return (
    Jl(e) ||
    ug(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function ug(e) {
  return Nf(e.x) || Nf(e.y);
}
function Nf(e) {
  return e && e !== "0%";
}
function To(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function Lf(e, t, n, r, i) {
  return i !== void 0 && (e = To(e, i, r)), To(e, n, r) + t;
}
function eu(e, t = 0, n = 1, r, i) {
  (e.min = Lf(e.min, t, n, r, i)), (e.max = Lf(e.max, t, n, r, i));
}
function cg(e, { x: t, y: n }) {
  eu(e.x, t.translate, t.scale, t.originPoint),
    eu(e.y, n.translate, n.scale, n.originPoint);
}
const jf = 0.999999999999,
  Df = 1.0000000000001;
function Q2(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let s, o;
  for (let a = 0; a < i; a++) {
    (s = n[a]), (o = s.projectionDelta);
    const { visualElement: l } = s.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (r &&
        s.options.layoutScroll &&
        s.scroll &&
        s !== s.root &&
        ur(e, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), cg(e, o)),
      r && bn(s.latestValues) && ur(e, s.latestValues));
  }
  t.x < Df && t.x > jf && (t.x = 1), t.y < Df && t.y > jf && (t.y = 1);
}
function lr(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function If(e, t, n, r, i = 0.5) {
  const s = Z(e.min, e.max, i);
  eu(e, t, n, s, r);
}
function ur(e, t) {
  If(e.x, t.x, t.scaleX, t.scale, t.originX),
    If(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function dg(e, t) {
  return lg(G2(e.getBoundingClientRect(), t));
}
function Z2(e, t, n) {
  const r = dg(e, n),
    { scroll: i } = t;
  return i && (lr(r.x, i.offset.x), lr(r.y, i.offset.y)), r;
}
const fg = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  J2 = new WeakMap();
class ex {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = se()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (c) => {
        const { dragSnapToOrigin: d } = this.getProps();
        d ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(qo(c, "page").point);
      },
      s = (c, d) => {
        var f;
        const { drag: v, dragPropagation: y, onDragStart: w } = this.getProps();
        if (
          v &&
          !y &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = xv(v)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          nt((m) => {
            let h = this.getAxisMotionValue(m).get() || 0;
            if (bt.test(h)) {
              const { projection: p } = this.visualElement;
              if (p && p.layout) {
                const S = p.layout.layoutBox[m];
                S && (h = Ze(S) * (parseFloat(h) / 100));
              }
            }
            this.originPoint[m] = h;
          }),
          w && K.postRender(() => w(c, d)),
          (f = this.removeWillChange) === null || f === void 0 || f.call(this),
          (this.removeWillChange = Gl(this.visualElement, "transform"));
        const { animationState: k } = this.visualElement;
        k && k.setActive("whileDrag", !0);
      },
      o = (c, d) => {
        const {
          dragPropagation: f,
          dragDirectionLock: v,
          onDirectionLock: y,
          onDrag: w,
        } = this.getProps();
        if (!f && !this.openGlobalLock) return;
        const { offset: k } = d;
        if (v && this.currentDirection === null) {
          (this.currentDirection = tx(k)),
            this.currentDirection !== null && y && y(this.currentDirection);
          return;
        }
        this.updateAxis("x", d.point, k),
          this.updateAxis("y", d.point, k),
          this.visualElement.render(),
          w && w(c, d);
      },
      a = (c, d) => this.stop(c, d),
      l = () =>
        nt((c) => {
          var d;
          return (
            this.getAnimationState(c) === "paused" &&
            ((d = this.getAxisMotionValue(c).animation) === null || d === void 0
              ? void 0
              : d.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new ig(
      t,
      {
        onSessionStart: i,
        onStart: s,
        onMove: o,
        onSessionEnd: a,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: fg(this.visualElement),
      }
    );
  }
  stop(t, n) {
    var r;
    (r = this.removeWillChange) === null || r === void 0 || r.call(this);
    const i = this.isDragging;
    if ((this.cancel(), !i)) return;
    const { velocity: s } = n;
    this.startAnimation(s);
    const { onDragEnd: o } = this.getProps();
    o && K.postRender(() => o(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !hs(t, i, this.currentDirection)) return;
    const s = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (o = W2(o, this.constraints[t], this.elastic[t])),
      s.set(o);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      s = this.constraints;
    n && sr(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
      ? (this.constraints = H2(i.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = X2(r)),
      s !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        nt((o) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = Y2(i.layoutBox[o], this.constraints[o]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !sr(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const s = Z2(r, i.root, this.visualElement.getTransformPagePoint());
    let o = $2(i.layout.layoutBox, s);
    if (n) {
      const a = n(q2(o));
      (this.hasMutatedConstraints = !!a), a && (o = lg(a));
    }
    return o;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: s,
        dragSnapToOrigin: o,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = nt((c) => {
        if (!hs(c, n, this.currentDirection)) return;
        let d = (l && l[c]) || {};
        o && (d = { min: 0, max: 0 });
        const f = i ? 200 : 1e6,
          v = i ? 40 : 1e7,
          y = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: f,
            bounceDamping: v,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...s,
            ...d,
          };
        return this.startAxisValueAnimation(c, y);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(
      Ac(t, r, 0, n, this.visualElement, !1, Gl(this.visualElement, t))
    );
  }
  stopAnimation() {
    nt((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    nt((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    nt((n) => {
      const { drag: r } = this.getProps();
      if (!hs(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        s = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: o, max: a } = i.layout.layoutBox[n];
        s.set(t[n] - Z(o, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!sr(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    nt((o) => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[o] = K2({ min: l, max: l }, this.constraints[o]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = s ? s({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      nt((o) => {
        if (!hs(o, t, null)) return;
        const a = this.getAxisMotionValue(o),
          { min: l, max: u } = this.constraints[o];
        a.set(Z(l, u, i[o]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    J2.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Dt(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        sr(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      s = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
      K.read(r);
    const o = Lt(window, "resize", () => this.scalePositionWithinConstraints()),
      a = i.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (nt((c) => {
              const d = this.getAxisMotionValue(c);
              d &&
                ((this.originPoint[c] += l[c].translate),
                d.set(d.get() + l[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      o(), n(), s(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: s = !1,
        dragElastic: o = Zl,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: s,
      dragElastic: o,
      dragMomentum: a,
    };
  }
}
function hs(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function tx(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class nx extends Sn {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Ce),
      (this.removeListeners = Ce),
      (this.controls = new ex(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Ce);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Vf = (e) => (t, n) => {
  e && K.postRender(() => e(t, n));
};
class rx extends Sn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Ce);
  }
  onPointerDown(t) {
    this.session = new ig(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: fg(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: Vf(t),
      onStart: Vf(n),
      onMove: r,
      onEnd: (s, o) => {
        delete this.session, i && K.postRender(() => i(s, o));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Dt(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function ix() {
  const e = _.useContext(sc);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    i = _.useId();
  _.useEffect(() => r(i), []);
  const s = _.useCallback(() => n && n(i), [i, n]);
  return !t && n ? [!1, s] : [!0];
}
const Ws = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Ff(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Fr = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (R.test(e)) e = parseFloat(e);
        else return e;
      const n = Ff(e, t.target.x),
        r = Ff(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  sx = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = pn.parse(e);
      if (i.length > 5) return r;
      const s = pn.createTransformer(e),
        o = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (i[0 + o] /= a), (i[1 + o] /= l);
      const u = Z(a, l, 0.5);
      return (
        typeof i[2 + o] == "number" && (i[2 + o] /= u),
        typeof i[3 + o] == "number" && (i[3 + o] /= u),
        s(i)
      );
    },
  };
class ox extends _.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: s } = t;
    QS(ax),
      s &&
        (n.group && n.group.add(s),
        r && r.register && i && r.register(s),
        s.root.didUpdate(),
        s.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        s.setOptions({
          ...s.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Ws.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: s,
      } = this.props,
      o = r.projection;
    return (
      o &&
        ((o.isPresent = s),
        i || t.layoutDependency !== n || n === void 0
          ? o.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== s &&
          (s
            ? o.promote()
            : o.relegate() ||
              K.postRender(() => {
                const a = o.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      ac.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function hg(e) {
  const [t, n] = ix(),
    r = _.useContext(rv);
  return g.jsx(ox, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: _.useContext(ev),
    isPresent: t,
    safeToRemove: n,
  });
}
const ax = {
    borderRadius: {
      ...Fr,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: Fr,
    borderTopRightRadius: Fr,
    borderBottomLeftRadius: Fr,
    borderBottomRightRadius: Fr,
    boxShadow: sx,
  },
  pg = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  lx = pg.length,
  zf = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Bf = (e) => typeof e == "number" || R.test(e);
function ux(e, t, n, r, i, s) {
  i
    ? ((e.opacity = Z(0, n.opacity !== void 0 ? n.opacity : 1, cx(r))),
      (e.opacityExit = Z(t.opacity !== void 0 ? t.opacity : 1, 0, dx(r))))
    : s &&
      (e.opacity = Z(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let o = 0; o < lx; o++) {
    const a = `border${pg[o]}Radius`;
    let l = Uf(t, a),
      u = Uf(n, a);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || Bf(l) === Bf(u)
        ? ((e[a] = Math.max(Z(zf(l), zf(u), r), 0)),
          (bt.test(u) || bt.test(l)) && (e[a] += "%"))
        : (e[a] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = Z(t.rotate || 0, n.rotate || 0, r));
}
function Uf(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const cx = mg(0, 0.5, Xv),
  dx = mg(0.5, 0.95, Ce);
function mg(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(_i(e, t, r)));
}
function Wf(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function tt(e, t) {
  Wf(e.x, t.x), Wf(e.y, t.y);
}
function Hf(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function $f(e, t, n, r, i) {
  return (
    (e -= t), (e = To(e, 1 / n, r)), i !== void 0 && (e = To(e, 1 / i, r)), e
  );
}
function fx(e, t = 0, n = 1, r = 0.5, i, s = e, o = e) {
  if (
    (bt.test(t) &&
      ((t = parseFloat(t)), (t = Z(o.min, o.max, t / 100) - o.min)),
    typeof t != "number")
  )
    return;
  let a = Z(s.min, s.max, r);
  e === s && (a -= t),
    (e.min = $f(e.min, t, n, a, i)),
    (e.max = $f(e.max, t, n, a, i));
}
function Kf(e, t, [n, r, i], s, o) {
  fx(e, t[n], t[r], t[i], t.scale, s, o);
}
const hx = ["x", "scaleX", "originX"],
  px = ["y", "scaleY", "originY"];
function Yf(e, t, n, r) {
  Kf(e.x, t, hx, n ? n.x : void 0, r ? r.x : void 0),
    Kf(e.y, t, px, n ? n.y : void 0, r ? r.y : void 0);
}
function Xf(e) {
  return e.translate === 0 && e.scale === 1;
}
function vg(e) {
  return Xf(e.x) && Xf(e.y);
}
function qf(e, t) {
  return e.min === t.min && e.max === t.max;
}
function mx(e, t) {
  return qf(e.x, t.x) && qf(e.y, t.y);
}
function Gf(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function gg(e, t) {
  return Gf(e.x, t.x) && Gf(e.y, t.y);
}
function Qf(e) {
  return Ze(e.x) / Ze(e.y);
}
function Zf(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class vx {
  constructor() {
    this.members = [];
  }
  add(t) {
    Yo(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (Xo(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const s = this.members[i];
      if (s.isPresent !== !1) {
        r = s;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function gx(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    s = e.y.translate / t.y,
    o = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      rotateX: d,
      rotateY: f,
      skewX: v,
      skewY: y,
    } = n;
    u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      d && (r += `rotateX(${d}deg) `),
      f && (r += `rotateY(${f}deg) `),
      v && (r += `skewX(${v}deg) `),
      y && (r += `skewY(${y}deg) `);
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const yx = (e, t) => e.depth - t.depth;
class Sx {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    Yo(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    Xo(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(yx),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function wx(e, t) {
  const n = cn.now(),
    r = ({ timestamp: i }) => {
      const s = i - n;
      s >= t && (Wt(r), e(s - t));
    };
  return K.read(r, !0), () => Wt(r);
}
function xx(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function Px(e, t, n) {
  const r = ke(e) ? e : Mi(e);
  return r.start(Ac("", r, t, n)), r.animation;
}
const An = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  Kr = typeof window < "u" && window.MotionDebug !== void 0,
  za = ["", "X", "Y", "Z"],
  Tx = { visibility: "hidden" },
  Jf = 1e3;
let kx = 0;
function Ba(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function yg(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return !1;
  const { visualElement: t } = e.options;
  return t
    ? ng(t)
      ? !0
      : e.parent && !e.parent.hasCheckedOptimisedAppear
      ? yg(e.parent)
      : !1
    : !1;
}
function Sg({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(o = {}, a = t == null ? void 0 : t()) {
      (this.id = kx++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            Kr &&
              (An.totalNodes =
                An.resolvedTargetDeltas =
                An.recalculatedProjection =
                  0),
            this.nodes.forEach(bx),
            this.nodes.forEach(Rx),
            this.nodes.forEach(Nx),
            this.nodes.forEach(Ax),
            Kr && window.MotionDebug.record(An);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Sx());
    }
    addEventListener(o, a) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new Oc()),
        this.eventHandlers.get(o).add(a)
      );
    }
    notifyListeners(o, ...a) {
      const l = this.eventHandlers.get(o);
      l && l.notify(...a);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = xx(o)), (this.instance = o);
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let d;
        const f = () => (this.root.updateBlockedByResize = !1);
        e(o, () => {
          (this.root.updateBlockedByResize = !0),
            d && d(),
            (d = wx(f, 250)),
            Ws.hasAnimatedSinceResize &&
              ((Ws.hasAnimatedSinceResize = !1), this.nodes.forEach(th));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: d,
              hasLayoutChanged: f,
              hasRelativeTargetChanged: v,
              layout: y,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const w =
                  this.options.transition || c.getDefaultTransition() || Vx,
                { onLayoutAnimationStart: k, onLayoutAnimationComplete: m } =
                  c.getProps(),
                h = !this.targetLayout || !gg(this.targetLayout, y) || v,
                p = !f && v;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                p ||
                (f && (h || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(d, p);
                const S = { ...Sc(w, "layout"), onPlay: k, onComplete: m };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((S.delay = 0), (S.type = !1)),
                  this.startAnimation(S);
              } else
                f || th(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = y;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Wt(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(Lx),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.HandoffCancelAllAnimations &&
          yg(this) &&
          window.HandoffCancelAllAnimations(),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        (d.shouldResetTransform = !0),
          d.updateScroll("snapshot"),
          d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(eh);
        return;
      }
      this.isUpdating || this.nodes.forEach(_x),
        (this.isUpdating = !1),
        this.nodes.forEach(Mx),
        this.nodes.forEach(Cx),
        this.nodes.forEach(Ex),
        this.clearAllSnapshots();
      const a = cn.now();
      (me.delta = hn(0, 1e3 / 60, a - me.timestamp)),
        (me.timestamp = a),
        (me.isProcessing = !0),
        _a.update.process(me),
        _a.preRender.process(me),
        _a.render.process(me),
        (me.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), ac.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Ox), this.sharedNodes.forEach(jx);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        K.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      K.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const o = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = se()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          o ? o.layoutBox : void 0
        );
    }
    updateScroll(o = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === o &&
          (a = !1),
        a)
      ) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const o =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !vg(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      o &&
        (a || bn(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        o && (l = this.removeTransform(l)),
        Fx(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var o;
      const { visualElement: a } = this.options;
      if (!a) return se();
      const l = a.measureViewportBox();
      if (
        !(
          ((o = this.scroll) === null || o === void 0 ? void 0 : o.wasRoot) ||
          this.path.some(zx)
        )
      ) {
        const { scroll: c } = this.root;
        c && (lr(l.x, c.offset.x), lr(l.y, c.offset.y));
      }
      return l;
    }
    removeElementScroll(o) {
      var a;
      const l = se();
      if (
        (tt(l, o), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
      )
        return l;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: d, options: f } = c;
        c !== this.root &&
          d &&
          f.layoutScroll &&
          (d.wasRoot && tt(l, o), lr(l.x, d.offset.x), lr(l.y, d.offset.y));
      }
      return l;
    }
    applyTransform(o, a = !1) {
      const l = se();
      tt(l, o);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          ur(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          bn(c.latestValues) && ur(l, c.latestValues);
      }
      return bn(this.latestValues) && ur(l, this.latestValues), l;
    }
    removeTransform(o) {
      const a = se();
      tt(a, o);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !bn(u.latestValues)) continue;
        Jl(u.latestValues) && u.updateSnapshot();
        const c = se(),
          d = u.measurePageBox();
        tt(c, d),
          Yf(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return bn(this.latestValues) && Yf(a, this.latestValues), a;
    }
    setTargetDelta(o) {
      (this.targetDelta = o),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== me.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          o ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: d, layoutId: f } = this.options;
      if (!(!this.layout || !(d || f))) {
        if (
          ((this.resolvedRelativeTargetAt = me.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const v = this.getClosestProjectingParent();
          v && v.layout && this.animationProgress !== 1
            ? ((this.relativeParent = v),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = se()),
              (this.relativeTargetOrigin = se()),
              ai(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                v.layout.layoutBox
              ),
              tt(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = se()), (this.targetWithTransforms = se())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                U2(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : tt(this.target, this.layout.layoutBox),
                cg(this.target, this.targetDelta))
              : tt(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const v = this.getClosestProjectingParent();
            v &&
            !!v.resumingFrom == !!this.resumingFrom &&
            !v.options.layoutScroll &&
            v.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = v),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = se()),
                (this.relativeTargetOrigin = se()),
                ai(this.relativeTargetOrigin, this.target, v.target),
                tt(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Kr && An.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Jl(this.parent.latestValues) ||
          ug(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var o;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((o = this.parent) === null || o === void 0) &&
            o.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === me.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || d))
      )
        return;
      tt(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        v = this.treeScale.y;
      Q2(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = se()));
      const { target: y } = a;
      if (!y) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Hf(this.prevProjectionDelta.x, this.projectionDelta.x),
          Hf(this.prevProjectionDelta.y, this.projectionDelta.y)),
        oi(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
        (this.treeScale.x !== f ||
          this.treeScale.y !== v ||
          !Zf(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Zf(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", y)),
        Kr && An.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      var a;
      if (
        ((a = this.options.visualElement) === null ||
          a === void 0 ||
          a.scheduleRender(),
        o)
      ) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = ar()),
        (this.projectionDelta = ar()),
        (this.projectionDeltaWithTransform = ar());
    }
    setAnimationOrigin(o, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        d = ar();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const f = se(),
        v = l ? l.source : void 0,
        y = this.layout ? this.layout.source : void 0,
        w = v !== y,
        k = this.getStack(),
        m = !k || k.members.length <= 1,
        h = !!(w && !m && this.options.crossfade === !0 && !this.path.some(Ix));
      this.animationProgress = 0;
      let p;
      (this.mixTargetDelta = (S) => {
        const P = S / 1e3;
        nh(d.x, o.x, P),
          nh(d.y, o.y, P),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (ai(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            Dx(this.relativeTarget, this.relativeTargetOrigin, f, P),
            p && mx(this.relativeTarget, p) && (this.isProjectionDirty = !1),
            p || (p = se()),
            tt(p, this.relativeTarget)),
          w &&
            ((this.animationValues = c), ux(c, u, this.latestValues, P, h, m)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = P);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (Wt(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = K.update(() => {
          (Ws.hasAnimatedSinceResize = !0),
            (this.currentAnimation = Px(0, Jf, {
              ...o,
              onUpdate: (a) => {
                this.mixTargetDelta(a), o.onUpdate && o.onUpdate(a);
              },
              onComplete: () => {
                o.onComplete && o.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const o = this.getStack();
      o && o.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Jf),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: c,
      } = o;
      if (!(!a || !l || !u)) {
        if (
          this !== o &&
          this.layout &&
          u &&
          wg(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || se();
          const d = Ze(this.layout.layoutBox.x);
          (l.x.min = o.target.x.min), (l.x.max = l.x.min + d);
          const f = Ze(this.layout.layoutBox.y);
          (l.y.min = o.target.y.min), (l.y.max = l.y.min + f);
        }
        tt(a, l),
          ur(a, c),
          oi(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(o, a) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new vx()),
        this.sharedNodes.get(o).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var o;
      const { layoutId: a } = this.options;
      return a
        ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var o;
      const { layoutId: a } = this.options;
      return a
        ? (o = this.getStack()) === null || o === void 0
          ? void 0
          : o.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o) return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o) return;
      let a = !1;
      const { latestValues: l } = o;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const u = {};
      l.z && Ba("z", o, u, this.animationValues);
      for (let c = 0; c < za.length; c++)
        Ba(`rotate${za[c]}`, o, u, this.animationValues),
          Ba(`skew${za[c]}`, o, u, this.animationValues);
      o.render();
      for (const c in u)
        o.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]);
      o.scheduleRender();
    }
    getProjectionStyles(o) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return Tx;
      const u = { visibility: "" },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = Bs(o == null ? void 0 : o.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const w = {};
        return (
          this.options.layoutId &&
            ((w.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (w.pointerEvents = Bs(o == null ? void 0 : o.pointerEvents) || "")),
          this.hasProjected &&
            !bn(this.latestValues) &&
            ((w.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          w
        );
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = gx(
          this.projectionDeltaWithTransform,
          this.treeScale,
          f
        )),
        c && (u.transform = c(f, u.transform));
      const { x: v, y } = this.projectionDelta;
      (u.transformOrigin = `${v.origin * 100}% ${y.origin * 100}% 0`),
        d.animationValues
          ? (u.opacity =
              d === this
                ? (l =
                    (a = f.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : f.opacityExit)
          : (u.opacity =
              d === this
                ? f.opacity !== void 0
                  ? f.opacity
                  : ""
                : f.opacityExit !== void 0
                ? f.opacityExit
                : 0);
      for (const w in yo) {
        if (f[w] === void 0) continue;
        const { correct: k, applyTo: m } = yo[w],
          h = u.transform === "none" ? f[w] : k(f[w], d);
        if (m) {
          const p = m.length;
          for (let S = 0; S < p; S++) u[m[S]] = h;
        } else u[w] = h;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            d === this
              ? Bs(o == null ? void 0 : o.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((o) => {
        var a;
        return (a = o.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(eh),
        this.root.sharedNodes.clear();
    }
  };
}
function Cx(e) {
  e.updateLayout();
}
function Ex(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: s } = e.options,
      o = n.source !== e.layout.source;
    s === "size"
      ? nt((d) => {
          const f = o ? n.measuredBox[d] : n.layoutBox[d],
            v = Ze(f);
          (f.min = r[d].min), (f.max = f.min + v);
        })
      : wg(s, n.layoutBox, r) &&
        nt((d) => {
          const f = o ? n.measuredBox[d] : n.layoutBox[d],
            v = Ze(r[d]);
          (f.max = f.min + v),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[d].max = e.relativeTarget[d].min + v));
        });
    const a = ar();
    oi(a, r, n.layoutBox);
    const l = ar();
    o ? oi(l, e.applyTransform(i, !0), n.measuredBox) : oi(l, r, n.layoutBox);
    const u = !vg(a);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: v } = d;
        if (f && v) {
          const y = se();
          ai(y, n.layoutBox, f.layoutBox);
          const w = se();
          ai(w, r, v.layoutBox),
            gg(y, w) || (c = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = w),
              (e.relativeTargetOrigin = y),
              (e.relativeParent = d));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function bx(e) {
  Kr && An.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function Ax(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Ox(e) {
  e.clearSnapshot();
}
function eh(e) {
  e.clearMeasurements();
}
function _x(e) {
  e.isLayoutDirty = !1;
}
function Mx(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function th(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function Rx(e) {
  e.resolveTargetDelta();
}
function Nx(e) {
  e.calcProjection();
}
function Lx(e) {
  e.resetSkewAndRotation();
}
function jx(e) {
  e.removeLeadSnapshot();
}
function nh(e, t, n) {
  (e.translate = Z(t.translate, 0, n)),
    (e.scale = Z(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function rh(e, t, n, r) {
  (e.min = Z(t.min, n.min, r)), (e.max = Z(t.max, n.max, r));
}
function Dx(e, t, n, r) {
  rh(e.x, t.x, n.x, r), rh(e.y, t.y, n.y, r);
}
function Ix(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const Vx = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  ih = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  sh = ih("applewebkit/") && !ih("chrome/") ? Math.round : Ce;
function oh(e) {
  (e.min = sh(e.min)), (e.max = sh(e.max));
}
function Fx(e) {
  oh(e.x), oh(e.y);
}
function wg(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !B2(Qf(t), Qf(n), 0.2))
  );
}
function zx(e) {
  var t;
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  );
}
const Bx = Sg({
    attachResizeListener: (e, t) => Lt(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Ua = { current: void 0 },
  xg = Sg({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Ua.current) {
        const e = new Bx({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Ua.current = e);
      }
      return Ua.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  Ux = {
    pan: { Feature: rx },
    drag: { Feature: nx, ProjectionNode: xg, MeasureLayout: hg },
  },
  tu = { current: null },
  Pg = { current: !1 };
function Wx() {
  if (((Pg.current = !0), !!oc))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (tu.current = e.matches);
      e.addListener(t), t();
    } else tu.current = !1;
}
function Hx(e, t, n) {
  for (const r in t) {
    const i = t[r],
      s = n[r];
    if (ke(i)) e.addValue(r, i);
    else if (ke(s)) e.addValue(r, Mi(i, { owner: e }));
    else if (s !== i)
      if (e.hasValue(r)) {
        const o = e.getValue(r);
        o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i);
      } else {
        const o = e.getStaticValue(r);
        e.addValue(r, Mi(o !== void 0 ? o : i, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const ah = new WeakMap(),
  $x = [...Ov, Pe, pn],
  Kx = (e) => $x.find(Av(e)),
  lh = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  Yx = uc.length;
class Xx {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      blockInitialAnimation: s,
      visualState: o,
    },
    a = {}
  ) {
    (this.applyWillChange = !1),
      (this.resolveKeyframes = (f, v, y, w) =>
        new this.KeyframeResolver(f, v, y, w, this)),
      (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = wc),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        (this.isRenderScheduled = !1),
          this.current &&
            (this.triggerBuild(),
            this.renderInstance(
              this.current,
              this.renderState,
              this.props.style,
              this.projection
            ));
      }),
      (this.isRenderScheduled = !1),
      (this.scheduleRender = () => {
        this.isRenderScheduled ||
          ((this.isRenderScheduled = !0), K.render(this.render, !1, !0));
      });
    const { latestValues: l, renderState: u } = o;
    (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = a),
      (this.blockInitialAnimation = !!s),
      (this.isControllingVariants = Ko(n)),
      (this.isVariantNode = nv(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: c, ...d } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    );
    for (const f in d) {
      const v = d[f];
      l[f] !== void 0 && ke(v) && v.set(l[f], !1);
    }
  }
  mount(t) {
    (this.current = t),
      ah.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      Pg.current || Wx(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : tu.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    ah.delete(this.current),
      this.projection && this.projection.unmount(),
      Wt(this.notifyUpdate),
      Wt(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = yn.has(t),
      i = n.on("change", (o) => {
        (this.latestValues[t] = o),
          this.props.onUpdate && K.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      s = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      i(), s(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in kr) {
      const n = kr[t];
      if (!n) continue;
      const { isEnabled: r, Feature: i } = n;
      if (
        (!this.features[t] &&
          i &&
          r(this.props) &&
          (this.features[t] = new i(this)),
        this.features[t])
      ) {
        const s = this.features[t];
        s.isMounted ? s.update() : (s.mount(), (s.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : se();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < lh.length; r++) {
      const i = lh[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const s = "on" + i,
        o = t[s];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    (this.prevMotionValues = Hx(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (r.initial = this.props.initial), r
      );
    }
    const n = {};
    for (let r = 0; r < Yx; r++) {
      const i = uc[r],
        s = this.props[i];
      (bi(s) || s === !1) && (n[i] = s);
    }
    return n;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = Mi(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let i =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
          r !== void 0
        ? r
        : this.readValueFromInstance(this.current, t, this.options);
    return (
      i != null &&
        (typeof i == "string" && (Ev(i) || Cv(i))
          ? (i = parseFloat(i))
          : !Kx(i) && pn.test(n) && (i = Iv(t, n)),
        this.setBaseTarget(t, ke(i) ? i.get() : i)),
      ke(i) ? i.get() : i
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let i;
    if (typeof r == "string" || typeof r == "object") {
      const o = yc(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom
      );
      o && (i = o[t]);
    }
    if (r && i !== void 0) return i;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !ke(s)
      ? s
      : this.initialValues[t] !== void 0 && i === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Oc()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Tg extends Xx {
  constructor() {
    super(...arguments), (this.KeyframeResolver = Vv);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
}
function qx(e) {
  return window.getComputedStyle(e);
}
class Gx extends Tg {
  constructor() {
    super(...arguments),
      (this.type = "html"),
      (this.applyWillChange = !0),
      (this.renderInstance = fv);
  }
  readValueFromInstance(t, n) {
    if (yn.has(n)) {
      const r = Pc(n);
      return (r && r.default) || 0;
    } else {
      const r = qx(t),
        i = (av(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return dg(t, n);
  }
  build(t, n, r) {
    hc(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return gc(t, n, r);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    ke(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
class Qx extends Tg {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = se);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (yn.has(n)) {
      const r = Pc(n);
      return (r && r.default) || 0;
    }
    return (n = hv.has(n) ? n : $o(n)), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return mv(t, n, r);
  }
  build(t, n, r) {
    mc(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    pv(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = vc(t.tagName)), super.mount(t);
  }
}
const Zx = (e, t) =>
    cc(e) ? new Qx(t) : new Gx(t, { allowProjection: e !== _.Fragment }),
  Jx = { layout: { ProjectionNode: xg, MeasureLayout: hg } },
  eP = { ...N2, ...U1, ...Ux, ...Jx },
  Yr = qS((e, t) => O1(e, t, eP, Zx));
function tP() {
  return g.jsx("div", {
    className:
      "w-full lg:pt-15 text-[#ebd8bf] lg:pt-5 bg-gradient-to-b from-[#282828] via-[#292626] to-[#292626] pt-10 p-7",
    children: g.jsxs("div", {
      className:
        "relative flex flex-col w-full gap-3 overflow-hidden lg:p-6 lg:flex-row-reverse",
      children: [
        g.jsx("div", {
          className: "lg:w-1/2 relative overflow-hidden flex lg:h-[350px]",
          children: g.jsx("img", {
            className: "w-full Hello lg:w-[100%] h-full ",
            src: MS,
            alt: "",
          }),
        }),
        g.jsxs("div", {
          className: " lg:w-[50%] uppercase flex flex-col gap-4",
          children: [
            g.jsx("p", {
              className: "text-xs",
              children: `"Bad Hair Day? Not on Our Watch! Let's Oil Up and Slay!"`,
            }),
            g.jsx("h1", {
              className: "text-2xl normal-case archivo-black-regular",
              children:
                "Strengthen, Nourish, and Say Goodbye to Hair Fall with “NATURA HAIR OIL”",
            }),
            g.jsx("p", {
              className: "text-sm normal-case lg:text-base",
              children:
                "Introducing “Natura Hair Oil”, the ultimate solution for luxurious, healthy hair. Our carefully crafted hair care products are formulated with natural ingredients to nourish, strengthen, and revitalize your locks from root to tip. Say goodbye to hair fall and hello to voluminous, luscious strands. Whether you're dealing with hairfall, dandruff, dryness, frizz, or damage, our products provide the perfect balance of moisture and protection, leaving your hair silky smooth and irresistibly shiny. Transform your hair care routine with “Natura Hair oil” and embrace the beauty of naturally gorgeous hair every day.",
            }),
          ],
        }),
      ],
    }),
  });
}
var kg = {},
  Zo = {},
  _c = {},
  Wa = {},
  Cg = { exports: {} },
  nP = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  rP = nP,
  iP = rP;
function Eg() {}
function bg() {}
bg.resetWarningCache = Eg;
var sP = function () {
  function e(r, i, s, o, a, l) {
    if (l !== iP) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((u.name = "Invariant Violation"), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: bg,
    resetWarningCache: Eg,
  };
  return (n.PropTypes = n), n;
};
Cg.exports = sP();
var oP = Cg.exports,
  uh;
function aP() {
  return (
    uh ||
      ((uh = 1),
      (function (e) {
        (function (t, n) {
          n(e, _, oP);
        })(Mh, function (t, n, r) {
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.setHasSupportToCaptureOption = y);
          var i = o(n),
            s = o(r);
          function o(h) {
            return h && h.__esModule ? h : { default: h };
          }
          var a =
            Object.assign ||
            function (h) {
              for (var p = 1; p < arguments.length; p++) {
                var S = arguments[p];
                for (var P in S)
                  Object.prototype.hasOwnProperty.call(S, P) && (h[P] = S[P]);
              }
              return h;
            };
          function l(h, p) {
            var S = {};
            for (var P in h)
              p.indexOf(P) >= 0 ||
                (Object.prototype.hasOwnProperty.call(h, P) && (S[P] = h[P]));
            return S;
          }
          function u(h, p) {
            if (!(h instanceof p))
              throw new TypeError("Cannot call a class as a function");
          }
          var c = (function () {
            function h(p, S) {
              for (var P = 0; P < S.length; P++) {
                var C = S[P];
                (C.enumerable = C.enumerable || !1),
                  (C.configurable = !0),
                  "value" in C && (C.writable = !0),
                  Object.defineProperty(p, C.key, C);
              }
            }
            return function (p, S, P) {
              return S && h(p.prototype, S), P && h(p, P), p;
            };
          })();
          function d(h, p) {
            if (!h)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return p && (typeof p == "object" || typeof p == "function")
              ? p
              : h;
          }
          function f(h, p) {
            if (typeof p != "function" && p !== null)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof p
              );
            (h.prototype = Object.create(p && p.prototype, {
              constructor: {
                value: h,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              p &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(h, p)
                  : (h.__proto__ = p));
          }
          var v = !1;
          function y(h) {
            v = h;
          }
          try {
            addEventListener(
              "test",
              null,
              Object.defineProperty({}, "capture", {
                get: function () {
                  y(!0);
                },
              })
            );
          } catch {}
          function w() {
            var h =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : { capture: !0 };
            return v ? h : h.capture;
          }
          function k(h) {
            if ("touches" in h) {
              var p = h.touches[0],
                S = p.pageX,
                P = p.pageY;
              return { x: S, y: P };
            }
            var C = h.screenX,
              b = h.screenY;
            return { x: C, y: b };
          }
          var m = (function (h) {
            f(p, h);
            function p() {
              var S;
              u(this, p);
              for (var P = arguments.length, C = Array(P), b = 0; b < P; b++)
                C[b] = arguments[b];
              var T = d(
                this,
                (S = p.__proto__ || Object.getPrototypeOf(p)).call.apply(
                  S,
                  [this].concat(C)
                )
              );
              return (
                (T._handleSwipeStart = T._handleSwipeStart.bind(T)),
                (T._handleSwipeMove = T._handleSwipeMove.bind(T)),
                (T._handleSwipeEnd = T._handleSwipeEnd.bind(T)),
                (T._onMouseDown = T._onMouseDown.bind(T)),
                (T._onMouseMove = T._onMouseMove.bind(T)),
                (T._onMouseUp = T._onMouseUp.bind(T)),
                (T._setSwiperRef = T._setSwiperRef.bind(T)),
                T
              );
            }
            return (
              c(p, [
                {
                  key: "componentDidMount",
                  value: function () {
                    this.swiper &&
                      this.swiper.addEventListener(
                        "touchmove",
                        this._handleSwipeMove,
                        w({ capture: !0, passive: !1 })
                      );
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    this.swiper &&
                      this.swiper.removeEventListener(
                        "touchmove",
                        this._handleSwipeMove,
                        w({ capture: !0, passive: !1 })
                      );
                  },
                },
                {
                  key: "_onMouseDown",
                  value: function (P) {
                    this.props.allowMouseEvents &&
                      ((this.mouseDown = !0),
                      document.addEventListener("mouseup", this._onMouseUp),
                      document.addEventListener("mousemove", this._onMouseMove),
                      this._handleSwipeStart(P));
                  },
                },
                {
                  key: "_onMouseMove",
                  value: function (P) {
                    this.mouseDown && this._handleSwipeMove(P);
                  },
                },
                {
                  key: "_onMouseUp",
                  value: function (P) {
                    (this.mouseDown = !1),
                      document.removeEventListener("mouseup", this._onMouseUp),
                      document.removeEventListener(
                        "mousemove",
                        this._onMouseMove
                      ),
                      this._handleSwipeEnd(P);
                  },
                },
                {
                  key: "_handleSwipeStart",
                  value: function (P) {
                    var C = k(P),
                      b = C.x,
                      T = C.y;
                    (this.moveStart = { x: b, y: T }),
                      this.props.onSwipeStart(P);
                  },
                },
                {
                  key: "_handleSwipeMove",
                  value: function (P) {
                    if (this.moveStart) {
                      var C = k(P),
                        b = C.x,
                        T = C.y,
                        L = b - this.moveStart.x,
                        M = T - this.moveStart.y;
                      this.moving = !0;
                      var B = this.props.onSwipeMove({ x: L, y: M }, P);
                      B && P.cancelable && P.preventDefault(),
                        (this.movePosition = { deltaX: L, deltaY: M });
                    }
                  },
                },
                {
                  key: "_handleSwipeEnd",
                  value: function (P) {
                    this.props.onSwipeEnd(P);
                    var C = this.props.tolerance;
                    this.moving &&
                      this.movePosition &&
                      (this.movePosition.deltaX < -C
                        ? this.props.onSwipeLeft(1, P)
                        : this.movePosition.deltaX > C &&
                          this.props.onSwipeRight(1, P),
                      this.movePosition.deltaY < -C
                        ? this.props.onSwipeUp(1, P)
                        : this.movePosition.deltaY > C &&
                          this.props.onSwipeDown(1, P)),
                      (this.moveStart = null),
                      (this.moving = !1),
                      (this.movePosition = null);
                  },
                },
                {
                  key: "_setSwiperRef",
                  value: function (P) {
                    (this.swiper = P), this.props.innerRef(P);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var P = this.props;
                    P.tagName;
                    var C = P.className,
                      b = P.style,
                      T = P.children;
                    P.allowMouseEvents,
                      P.onSwipeUp,
                      P.onSwipeDown,
                      P.onSwipeLeft,
                      P.onSwipeRight,
                      P.onSwipeStart,
                      P.onSwipeMove,
                      P.onSwipeEnd,
                      P.innerRef,
                      P.tolerance;
                    var L = l(P, [
                      "tagName",
                      "className",
                      "style",
                      "children",
                      "allowMouseEvents",
                      "onSwipeUp",
                      "onSwipeDown",
                      "onSwipeLeft",
                      "onSwipeRight",
                      "onSwipeStart",
                      "onSwipeMove",
                      "onSwipeEnd",
                      "innerRef",
                      "tolerance",
                    ]);
                    return i.default.createElement(
                      this.props.tagName,
                      a(
                        {
                          ref: this._setSwiperRef,
                          onMouseDown: this._onMouseDown,
                          onTouchStart: this._handleSwipeStart,
                          onTouchEnd: this._handleSwipeEnd,
                          className: C,
                          style: b,
                        },
                        L
                      ),
                      T
                    );
                  },
                },
              ]),
              p
            );
          })(n.Component);
          (m.displayName = "ReactSwipe"),
            (m.propTypes = {
              tagName: s.default.string,
              className: s.default.string,
              style: s.default.object,
              children: s.default.node,
              allowMouseEvents: s.default.bool,
              onSwipeUp: s.default.func,
              onSwipeDown: s.default.func,
              onSwipeLeft: s.default.func,
              onSwipeRight: s.default.func,
              onSwipeStart: s.default.func,
              onSwipeMove: s.default.func,
              onSwipeEnd: s.default.func,
              innerRef: s.default.func,
              tolerance: s.default.number.isRequired,
            }),
            (m.defaultProps = {
              tagName: "div",
              allowMouseEvents: !1,
              onSwipeUp: function () {},
              onSwipeDown: function () {},
              onSwipeLeft: function () {},
              onSwipeRight: function () {},
              onSwipeStart: function () {},
              onSwipeMove: function () {},
              onSwipeEnd: function () {},
              innerRef: function () {},
              tolerance: 0,
            }),
            (t.default = m);
        });
      })(Wa)),
    Wa
  );
}
(function (e) {
  (function (t, n) {
    n(e, aP());
  })(Mh, function (t, n) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(n);
    function i(s) {
      return s && s.__esModule ? s : { default: s };
    }
    t.default = r.default;
  });
})(_c);
var Ui = {},
  Ag = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var s = "", o = 0; o < arguments.length; o++) {
        var a = arguments[o];
        a && (s = i(s, r(a)));
      }
      return s;
    }
    function r(s) {
      if (typeof s == "string" || typeof s == "number") return s;
      if (typeof s != "object") return "";
      if (Array.isArray(s)) return n.apply(null, s);
      if (
        s.toString !== Object.prototype.toString &&
        !s.toString.toString().includes("[native code]")
      )
        return s.toString();
      var o = "";
      for (var a in s) t.call(s, a) && s[a] && (o = i(o, a));
      return o;
    }
    function i(s, o) {
      return o ? (s ? s + " " + o : s + o) : s;
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(Ag);
var lP = Ag.exports;
Object.defineProperty(Ui, "__esModule", { value: !0 });
Ui.default = void 0;
var Kt = uP(lP);
function uP(e) {
  return e && e.__esModule ? e : { default: e };
}
function cP(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var dP = {
  ROOT: function (t) {
    return (0, Kt.default)(cP({ "carousel-root": !0 }, t || "", !!t));
  },
  CAROUSEL: function (t) {
    return (0, Kt.default)({ carousel: !0, "carousel-slider": t });
  },
  WRAPPER: function (t, n) {
    return (0, Kt.default)({
      "thumbs-wrapper": !t,
      "slider-wrapper": t,
      "axis-horizontal": n === "horizontal",
      "axis-vertical": n !== "horizontal",
    });
  },
  SLIDER: function (t, n) {
    return (0, Kt.default)({ thumbs: !t, slider: t, animated: !n });
  },
  ITEM: function (t, n, r) {
    return (0, Kt.default)({ thumb: !t, slide: t, selected: n, previous: r });
  },
  ARROW_PREV: function (t) {
    return (0, Kt.default)({
      "control-arrow control-prev": !0,
      "control-disabled": t,
    });
  },
  ARROW_NEXT: function (t) {
    return (0, Kt.default)({
      "control-arrow control-next": !0,
      "control-disabled": t,
    });
  },
  DOT: function (t) {
    return (0, Kt.default)({ dot: !0, selected: t });
  },
};
Ui.default = dP;
var Wi = {},
  Jo = {};
Object.defineProperty(Jo, "__esModule", { value: !0 });
Jo.outerWidth = void 0;
var fP = function (t) {
  var n = t.offsetWidth,
    r = getComputedStyle(t);
  return (n += parseInt(r.marginLeft) + parseInt(r.marginRight)), n;
};
Jo.outerWidth = fP;
var _r = {};
Object.defineProperty(_r, "__esModule", { value: !0 });
_r.default = void 0;
var hP = function (t, n, r) {
  var i = t === 0 ? t : t + n,
    s = r === "horizontal" ? [i, 0, 0] : [0, i, 0],
    o = "translate3d",
    a = "(" + s.join(",") + ")";
  return o + a;
};
_r.default = hP;
var Hi = {};
Object.defineProperty(Hi, "__esModule", { value: !0 });
Hi.default = void 0;
var pP = function () {
  return window;
};
Hi.default = pP;
Object.defineProperty(Wi, "__esModule", { value: !0 });
Wi.default = void 0;
var ct = gP(_),
  kn = ea(Ui),
  mP = Jo,
  ch = ea(_r),
  vP = ea(_c),
  ps = ea(Hi);
function ea(e) {
  return e && e.__esModule ? e : { default: e };
}
function Og() {
  if (typeof WeakMap != "function") return null;
  var e = new WeakMap();
  return (
    (Og = function () {
      return e;
    }),
    e
  );
}
function gP(e) {
  if (e && e.__esModule) return e;
  if (e === null || (li(e) !== "object" && typeof e != "function"))
    return { default: e };
  var t = Og();
  if (t && t.has(e)) return t.get(e);
  var n = {},
    r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (Object.prototype.hasOwnProperty.call(e, i)) {
      var s = r ? Object.getOwnPropertyDescriptor(e, i) : null;
      s && (s.get || s.set) ? Object.defineProperty(n, i, s) : (n[i] = e[i]);
    }
  return (n.default = e), t && t.set(e, n), n;
}
function li(e) {
  "@babel/helpers - typeof";
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (li = function (n) {
          return typeof n;
        })
      : (li = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    li(e)
  );
}
function nu() {
  return (
    (nu =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    nu.apply(this, arguments)
  );
}
function yP(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function dh(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function SP(e, t, n) {
  return t && dh(e.prototype, t), n && dh(e, n), e;
}
function wP(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && ru(e, t);
}
function ru(e, t) {
  return (
    (ru =
      Object.setPrototypeOf ||
      function (r, i) {
        return (r.__proto__ = i), r;
      }),
    ru(e, t)
  );
}
function xP(e) {
  var t = TP();
  return function () {
    var r = ko(e),
      i;
    if (t) {
      var s = ko(this).constructor;
      i = Reflect.construct(r, arguments, s);
    } else i = r.apply(this, arguments);
    return PP(this, i);
  };
}
function PP(e, t) {
  return t && (li(t) === "object" || typeof t == "function") ? t : Me(e);
}
function Me(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function TP() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {})),
      !0
    );
  } catch {
    return !1;
  }
}
function ko(e) {
  return (
    (ko = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    ko(e)
  );
}
function xe(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var kP = function (t) {
    return t.hasOwnProperty("key");
  },
  Mc = (function (e) {
    wP(n, e);
    var t = xP(n);
    function n(r) {
      var i;
      return (
        yP(this, n),
        (i = t.call(this, r)),
        xe(Me(i), "itemsWrapperRef", void 0),
        xe(Me(i), "itemsListRef", void 0),
        xe(Me(i), "thumbsRef", void 0),
        xe(Me(i), "setItemsWrapperRef", function (s) {
          i.itemsWrapperRef = s;
        }),
        xe(Me(i), "setItemsListRef", function (s) {
          i.itemsListRef = s;
        }),
        xe(Me(i), "setThumbsRef", function (s, o) {
          i.thumbsRef || (i.thumbsRef = []), (i.thumbsRef[o] = s);
        }),
        xe(Me(i), "updateSizes", function () {
          if (!(!i.props.children || !i.itemsWrapperRef || !i.thumbsRef)) {
            var s = ct.Children.count(i.props.children),
              o = i.itemsWrapperRef.clientWidth,
              a = i.props.thumbWidth
                ? i.props.thumbWidth
                : (0, mP.outerWidth)(i.thumbsRef[0]),
              l = Math.floor(o / a),
              u = l < s,
              c = u ? s - l : 0;
            i.setState(function (d, f) {
              return {
                itemSize: a,
                visibleItems: l,
                firstItem: u ? i.getFirstItem(f.selectedItem) : 0,
                lastPosition: c,
                showArrows: u,
              };
            });
          }
        }),
        xe(Me(i), "handleClickItem", function (s, o, a) {
          if (!kP(a) || a.key === "Enter") {
            var l = i.props.onSelectItem;
            typeof l == "function" && l(s, o);
          }
        }),
        xe(Me(i), "onSwipeStart", function () {
          i.setState({ swiping: !0 });
        }),
        xe(Me(i), "onSwipeEnd", function () {
          i.setState({ swiping: !1 });
        }),
        xe(Me(i), "onSwipeMove", function (s) {
          var o = s.x;
          if (!i.state.itemSize || !i.itemsWrapperRef || !i.state.visibleItems)
            return !1;
          var a = 0,
            l = ct.Children.count(i.props.children),
            u = -(i.state.firstItem * 100) / i.state.visibleItems,
            c = Math.max(l - i.state.visibleItems, 0),
            d = (-c * 100) / i.state.visibleItems;
          u === a && o > 0 && (o = 0), u === d && o < 0 && (o = 0);
          var f = i.itemsWrapperRef.clientWidth,
            v = u + 100 / (f / o);
          return (
            i.itemsListRef &&
              [
                "WebkitTransform",
                "MozTransform",
                "MsTransform",
                "OTransform",
                "transform",
                "msTransform",
              ].forEach(function (y) {
                i.itemsListRef.style[y] = (0, ch.default)(v, "%", i.props.axis);
              }),
            !0
          );
        }),
        xe(Me(i), "slideRight", function (s) {
          i.moveTo(i.state.firstItem - (typeof s == "number" ? s : 1));
        }),
        xe(Me(i), "slideLeft", function (s) {
          i.moveTo(i.state.firstItem + (typeof s == "number" ? s : 1));
        }),
        xe(Me(i), "moveTo", function (s) {
          (s = s < 0 ? 0 : s),
            (s = s >= i.state.lastPosition ? i.state.lastPosition : s),
            i.setState({ firstItem: s });
        }),
        (i.state = {
          selectedItem: r.selectedItem,
          swiping: !1,
          showArrows: !1,
          firstItem: 0,
          visibleItems: 0,
          lastPosition: 0,
        }),
        i
      );
    }
    return (
      SP(n, [
        {
          key: "componentDidMount",
          value: function () {
            this.setupThumbs();
          },
        },
        {
          key: "componentDidUpdate",
          value: function (i) {
            this.props.selectedItem !== this.state.selectedItem &&
              this.setState({
                selectedItem: this.props.selectedItem,
                firstItem: this.getFirstItem(this.props.selectedItem),
              }),
              this.props.children !== i.children && this.updateSizes();
          },
        },
        {
          key: "componentWillUnmount",
          value: function () {
            this.destroyThumbs();
          },
        },
        {
          key: "setupThumbs",
          value: function () {
            (0, ps.default)().addEventListener("resize", this.updateSizes),
              (0, ps.default)().addEventListener(
                "DOMContentLoaded",
                this.updateSizes
              ),
              this.updateSizes();
          },
        },
        {
          key: "destroyThumbs",
          value: function () {
            (0, ps.default)().removeEventListener("resize", this.updateSizes),
              (0, ps.default)().removeEventListener(
                "DOMContentLoaded",
                this.updateSizes
              );
          },
        },
        {
          key: "getFirstItem",
          value: function (i) {
            var s = i;
            return (
              i >= this.state.lastPosition && (s = this.state.lastPosition),
              i < this.state.firstItem + this.state.visibleItems &&
                (s = this.state.firstItem),
              i < this.state.firstItem && (s = i),
              s
            );
          },
        },
        {
          key: "renderItems",
          value: function () {
            var i = this;
            return this.props.children.map(function (s, o) {
              var a = kn.default.ITEM(!1, o === i.state.selectedItem),
                l = {
                  key: o,
                  ref: function (c) {
                    return i.setThumbsRef(c, o);
                  },
                  className: a,
                  onClick: i.handleClickItem.bind(i, o, i.props.children[o]),
                  onKeyDown: i.handleClickItem.bind(i, o, i.props.children[o]),
                  "aria-label": ""
                    .concat(i.props.labels.item, " ")
                    .concat(o + 1),
                  style: { width: i.props.thumbWidth },
                };
              return ct.default.createElement(
                "li",
                nu({}, l, { role: "button", tabIndex: 0 }),
                s
              );
            });
          },
        },
        {
          key: "render",
          value: function () {
            var i = this;
            if (!this.props.children) return null;
            var s = ct.Children.count(this.props.children) > 1,
              o = this.state.showArrows && this.state.firstItem > 0,
              a =
                this.state.showArrows &&
                this.state.firstItem < this.state.lastPosition,
              l = {},
              u = -this.state.firstItem * (this.state.itemSize || 0),
              c = (0, ch.default)(u, "px", this.props.axis),
              d = this.props.transitionTime + "ms";
            return (
              (l = {
                WebkitTransform: c,
                MozTransform: c,
                MsTransform: c,
                OTransform: c,
                transform: c,
                msTransform: c,
                WebkitTransitionDuration: d,
                MozTransitionDuration: d,
                MsTransitionDuration: d,
                OTransitionDuration: d,
                transitionDuration: d,
                msTransitionDuration: d,
              }),
              ct.default.createElement(
                "div",
                { className: kn.default.CAROUSEL(!1) },
                ct.default.createElement(
                  "div",
                  {
                    className: kn.default.WRAPPER(!1),
                    ref: this.setItemsWrapperRef,
                  },
                  ct.default.createElement("button", {
                    type: "button",
                    className: kn.default.ARROW_PREV(!o),
                    onClick: function () {
                      return i.slideRight();
                    },
                    "aria-label": this.props.labels.leftArrow,
                  }),
                  s
                    ? ct.default.createElement(
                        vP.default,
                        {
                          tagName: "ul",
                          className: kn.default.SLIDER(!1, this.state.swiping),
                          onSwipeLeft: this.slideLeft,
                          onSwipeRight: this.slideRight,
                          onSwipeMove: this.onSwipeMove,
                          onSwipeStart: this.onSwipeStart,
                          onSwipeEnd: this.onSwipeEnd,
                          style: l,
                          innerRef: this.setItemsListRef,
                          allowMouseEvents: this.props.emulateTouch,
                        },
                        this.renderItems()
                      )
                    : ct.default.createElement(
                        "ul",
                        {
                          className: kn.default.SLIDER(!1, this.state.swiping),
                          ref: function (v) {
                            return i.setItemsListRef(v);
                          },
                          style: l,
                        },
                        this.renderItems()
                      ),
                  ct.default.createElement("button", {
                    type: "button",
                    className: kn.default.ARROW_NEXT(!a),
                    onClick: function () {
                      return i.slideLeft();
                    },
                    "aria-label": this.props.labels.rightArrow,
                  })
                )
              )
            );
          },
        },
      ]),
      n
    );
  })(ct.Component);
Wi.default = Mc;
xe(Mc, "displayName", "Thumbs");
xe(Mc, "defaultProps", {
  axis: "horizontal",
  labels: {
    leftArrow: "previous slide / item",
    rightArrow: "next slide / item",
    item: "slide item",
  },
  selectedItem: 0,
  thumbWidth: 80,
  transitionTime: 350,
});
var ta = {};
Object.defineProperty(ta, "__esModule", { value: !0 });
ta.default = void 0;
var CP = function () {
  return document;
};
ta.default = CP;
var Ye = {};
Object.defineProperty(Ye, "__esModule", { value: !0 });
Ye.setPosition =
  Ye.getPosition =
  Ye.isKeyboardEvent =
  Ye.defaultStatusFormatter =
  Ye.noop =
    void 0;
var EP = _,
  bP = AP(_r);
function AP(e) {
  return e && e.__esModule ? e : { default: e };
}
var OP = function () {};
Ye.noop = OP;
var _P = function (t, n) {
  return "".concat(t, " of ").concat(n);
};
Ye.defaultStatusFormatter = _P;
var MP = function (t) {
  return t ? t.hasOwnProperty("key") : !1;
};
Ye.isKeyboardEvent = MP;
var RP = function (t, n) {
  if ((n.infiniteLoop && ++t, t === 0)) return 0;
  var r = EP.Children.count(n.children);
  if (n.centerMode && n.axis === "horizontal") {
    var i = -t * n.centerSlidePercentage,
      s = r - 1;
    return (
      t && (t !== s || n.infiniteLoop)
        ? (i += (100 - n.centerSlidePercentage) / 2)
        : t === s && (i += 100 - n.centerSlidePercentage),
      i
    );
  }
  return -t * 100;
};
Ye.getPosition = RP;
var NP = function (t, n) {
  var r = {};
  return (
    [
      "WebkitTransform",
      "MozTransform",
      "MsTransform",
      "OTransform",
      "transform",
      "msTransform",
    ].forEach(function (i) {
      r[i] = (0, bP.default)(t, "%", n);
    }),
    r
  );
};
Ye.setPosition = NP;
var Tt = {};
Object.defineProperty(Tt, "__esModule", { value: !0 });
Tt.fadeAnimationHandler =
  Tt.slideStopSwipingHandler =
  Tt.slideSwipeAnimationHandler =
  Tt.slideAnimationHandler =
    void 0;
var _g = _,
  LP = jP(_r),
  kt = Ye;
function jP(e) {
  return e && e.__esModule ? e : { default: e };
}
function fh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function On(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? fh(Object(n), !0).forEach(function (r) {
          DP(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : fh(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function DP(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var IP = function (t, n) {
  var r = {},
    i = n.selectedItem,
    s = i,
    o = _g.Children.count(t.children) - 1,
    a = t.infiniteLoop && (i < 0 || i > o);
  if (a)
    return (
      s < 0
        ? t.centerMode && t.centerSlidePercentage && t.axis === "horizontal"
          ? (r.itemListStyle = (0, kt.setPosition)(
              -(o + 2) * t.centerSlidePercentage -
                (100 - t.centerSlidePercentage) / 2,
              t.axis
            ))
          : (r.itemListStyle = (0, kt.setPosition)(-(o + 2) * 100, t.axis))
        : s > o && (r.itemListStyle = (0, kt.setPosition)(0, t.axis)),
      r
    );
  var l = (0, kt.getPosition)(i, t),
    u = (0, LP.default)(l, "%", t.axis),
    c = t.transitionTime + "ms";
  return (
    (r.itemListStyle = {
      WebkitTransform: u,
      msTransform: u,
      OTransform: u,
      transform: u,
    }),
    n.swiping ||
      (r.itemListStyle = On(
        On({}, r.itemListStyle),
        {},
        {
          WebkitTransitionDuration: c,
          MozTransitionDuration: c,
          OTransitionDuration: c,
          transitionDuration: c,
          msTransitionDuration: c,
        }
      )),
    r
  );
};
Tt.slideAnimationHandler = IP;
var VP = function (t, n, r, i) {
  var s = {},
    o = n.axis === "horizontal",
    a = _g.Children.count(n.children),
    l = 0,
    u = (0, kt.getPosition)(r.selectedItem, n),
    c = n.infiniteLoop
      ? (0, kt.getPosition)(a - 1, n) - 100
      : (0, kt.getPosition)(a - 1, n),
    d = o ? t.x : t.y,
    f = d;
  u === l && d > 0 && (f = 0), u === c && d < 0 && (f = 0);
  var v = u + 100 / (r.itemSize / f),
    y = Math.abs(d) > n.swipeScrollTolerance;
  return (
    n.infiniteLoop &&
      y &&
      (r.selectedItem === 0 && v > -100
        ? (v -= a * 100)
        : r.selectedItem === a - 1 && v < -a * 100 && (v += a * 100)),
    (!n.preventMovementUntilSwipeScrollTolerance ||
      y ||
      r.swipeMovementStarted) &&
      (r.swipeMovementStarted || i({ swipeMovementStarted: !0 }),
      (s.itemListStyle = (0, kt.setPosition)(v, n.axis))),
    y && !r.cancelClick && i({ cancelClick: !0 }),
    s
  );
};
Tt.slideSwipeAnimationHandler = VP;
var FP = function (t, n) {
  var r = (0, kt.getPosition)(n.selectedItem, t),
    i = (0, kt.setPosition)(r, t.axis);
  return { itemListStyle: i };
};
Tt.slideStopSwipingHandler = FP;
var zP = function (t, n) {
  var r = t.transitionTime + "ms",
    i = "ease-in-out",
    s = {
      position: "absolute",
      display: "block",
      zIndex: -2,
      minHeight: "100%",
      opacity: 0,
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      transitionTimingFunction: i,
      msTransitionTimingFunction: i,
      MozTransitionTimingFunction: i,
      WebkitTransitionTimingFunction: i,
      OTransitionTimingFunction: i,
    };
  return (
    n.swiping ||
      (s = On(
        On({}, s),
        {},
        {
          WebkitTransitionDuration: r,
          MozTransitionDuration: r,
          OTransitionDuration: r,
          transitionDuration: r,
          msTransitionDuration: r,
        }
      )),
    {
      slideStyle: s,
      selectedStyle: On(On({}, s), {}, { opacity: 1, position: "relative" }),
      prevStyle: On({}, s),
    }
  );
};
Tt.fadeAnimationHandler = zP;
Object.defineProperty(Zo, "__esModule", { value: !0 });
Zo.default = void 0;
var H = WP(_),
  BP = $i(_c),
  Mt = $i(Ui),
  UP = $i(Wi),
  ms = $i(ta),
  vs = $i(Hi),
  Xr = Ye,
  Co = Tt;
function $i(e) {
  return e && e.__esModule ? e : { default: e };
}
function Mg() {
  if (typeof WeakMap != "function") return null;
  var e = new WeakMap();
  return (
    (Mg = function () {
      return e;
    }),
    e
  );
}
function WP(e) {
  if (e && e.__esModule) return e;
  if (e === null || (ui(e) !== "object" && typeof e != "function"))
    return { default: e };
  var t = Mg();
  if (t && t.has(e)) return t.get(e);
  var n = {},
    r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (Object.prototype.hasOwnProperty.call(e, i)) {
      var s = r ? Object.getOwnPropertyDescriptor(e, i) : null;
      s && (s.get || s.set) ? Object.defineProperty(n, i, s) : (n[i] = e[i]);
    }
  return (n.default = e), t && t.set(e, n), n;
}
function ui(e) {
  "@babel/helpers - typeof";
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (ui = function (n) {
          return typeof n;
        })
      : (ui = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    ui(e)
  );
}
function iu() {
  return (
    (iu =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    iu.apply(this, arguments)
  );
}
function hh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function dt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? hh(Object(n), !0).forEach(function (r) {
          D(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : hh(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function HP(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ph(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function $P(e, t, n) {
  return t && ph(e.prototype, t), n && ph(e, n), e;
}
function KP(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && su(e, t);
}
function su(e, t) {
  return (
    (su =
      Object.setPrototypeOf ||
      function (r, i) {
        return (r.__proto__ = i), r;
      }),
    su(e, t)
  );
}
function YP(e) {
  var t = qP();
  return function () {
    var r = Eo(e),
      i;
    if (t) {
      var s = Eo(this).constructor;
      i = Reflect.construct(r, arguments, s);
    } else i = r.apply(this, arguments);
    return XP(this, i);
  };
}
function XP(e, t) {
  return t && (ui(t) === "object" || typeof t == "function") ? t : V(e);
}
function V(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function qP() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {})),
      !0
    );
  } catch {
    return !1;
  }
}
function Eo(e) {
  return (
    (Eo = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    Eo(e)
  );
}
function D(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var Rc = (function (e) {
  KP(n, e);
  var t = YP(n);
  function n(r) {
    var i;
    HP(this, n),
      (i = t.call(this, r)),
      D(V(i), "thumbsRef", void 0),
      D(V(i), "carouselWrapperRef", void 0),
      D(V(i), "listRef", void 0),
      D(V(i), "itemsRef", void 0),
      D(V(i), "timer", void 0),
      D(V(i), "animationHandler", void 0),
      D(V(i), "setThumbsRef", function (o) {
        i.thumbsRef = o;
      }),
      D(V(i), "setCarouselWrapperRef", function (o) {
        i.carouselWrapperRef = o;
      }),
      D(V(i), "setListRef", function (o) {
        i.listRef = o;
      }),
      D(V(i), "setItemsRef", function (o, a) {
        i.itemsRef || (i.itemsRef = []), (i.itemsRef[a] = o);
      }),
      D(V(i), "autoPlay", function () {
        H.Children.count(i.props.children) <= 1 ||
          (i.clearAutoPlay(),
          i.props.autoPlay &&
            (i.timer = setTimeout(function () {
              i.increment();
            }, i.props.interval)));
      }),
      D(V(i), "clearAutoPlay", function () {
        i.timer && clearTimeout(i.timer);
      }),
      D(V(i), "resetAutoPlay", function () {
        i.clearAutoPlay(), i.autoPlay();
      }),
      D(V(i), "stopOnHover", function () {
        i.setState({ isMouseEntered: !0 }, i.clearAutoPlay);
      }),
      D(V(i), "startOnLeave", function () {
        i.setState({ isMouseEntered: !1 }, i.autoPlay);
      }),
      D(V(i), "isFocusWithinTheCarousel", function () {
        return i.carouselWrapperRef
          ? !!(
              (0, ms.default)().activeElement === i.carouselWrapperRef ||
              i.carouselWrapperRef.contains((0, ms.default)().activeElement)
            )
          : !1;
      }),
      D(V(i), "navigateWithKeyboard", function (o) {
        if (i.isFocusWithinTheCarousel()) {
          var a = i.props.axis,
            l = a === "horizontal",
            u = { ArrowUp: 38, ArrowRight: 39, ArrowDown: 40, ArrowLeft: 37 },
            c = l ? u.ArrowRight : u.ArrowDown,
            d = l ? u.ArrowLeft : u.ArrowUp;
          c === o.keyCode ? i.increment() : d === o.keyCode && i.decrement();
        }
      }),
      D(V(i), "updateSizes", function () {
        if (!(!i.state.initialized || !i.itemsRef || i.itemsRef.length === 0)) {
          var o = i.props.axis === "horizontal",
            a = i.itemsRef[0];
          if (a) {
            var l = o ? a.clientWidth : a.clientHeight;
            i.setState({ itemSize: l }),
              i.thumbsRef && i.thumbsRef.updateSizes();
          }
        }
      }),
      D(V(i), "setMountState", function () {
        i.setState({ hasMount: !0 }), i.updateSizes();
      }),
      D(V(i), "handleClickItem", function (o, a) {
        if (H.Children.count(i.props.children) !== 0) {
          if (i.state.cancelClick) {
            i.setState({ cancelClick: !1 });
            return;
          }
          i.props.onClickItem(o, a),
            o !== i.state.selectedItem && i.setState({ selectedItem: o });
        }
      }),
      D(V(i), "handleOnChange", function (o, a) {
        H.Children.count(i.props.children) <= 1 || i.props.onChange(o, a);
      }),
      D(V(i), "handleClickThumb", function (o, a) {
        i.props.onClickThumb(o, a), i.moveTo(o);
      }),
      D(V(i), "onSwipeStart", function (o) {
        i.setState({ swiping: !0 }), i.props.onSwipeStart(o);
      }),
      D(V(i), "onSwipeEnd", function (o) {
        i.setState({ swiping: !1, cancelClick: !1, swipeMovementStarted: !1 }),
          i.props.onSwipeEnd(o),
          i.clearAutoPlay(),
          i.state.autoPlay && i.autoPlay();
      }),
      D(V(i), "onSwipeMove", function (o, a) {
        i.props.onSwipeMove(a);
        var l = i.props.swipeAnimationHandler(
          o,
          i.props,
          i.state,
          i.setState.bind(V(i))
        );
        return i.setState(dt({}, l)), !!Object.keys(l).length;
      }),
      D(V(i), "decrement", function () {
        var o =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
        i.moveTo(i.state.selectedItem - (typeof o == "number" ? o : 1));
      }),
      D(V(i), "increment", function () {
        var o =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
        i.moveTo(i.state.selectedItem + (typeof o == "number" ? o : 1));
      }),
      D(V(i), "moveTo", function (o) {
        if (typeof o == "number") {
          var a = H.Children.count(i.props.children) - 1;
          o < 0 && (o = i.props.infiniteLoop ? a : 0),
            o > a && (o = i.props.infiniteLoop ? 0 : a),
            i.selectItem({ selectedItem: o }),
            i.state.autoPlay &&
              i.state.isMouseEntered === !1 &&
              i.resetAutoPlay();
        }
      }),
      D(V(i), "onClickNext", function () {
        i.increment(1);
      }),
      D(V(i), "onClickPrev", function () {
        i.decrement(1);
      }),
      D(V(i), "onSwipeForward", function () {
        i.increment(1), i.props.emulateTouch && i.setState({ cancelClick: !0 });
      }),
      D(V(i), "onSwipeBackwards", function () {
        i.decrement(1), i.props.emulateTouch && i.setState({ cancelClick: !0 });
      }),
      D(V(i), "changeItem", function (o) {
        return function (a) {
          (!(0, Xr.isKeyboardEvent)(a) || a.key === "Enter") && i.moveTo(o);
        };
      }),
      D(V(i), "selectItem", function (o) {
        i.setState(dt({ previousItem: i.state.selectedItem }, o), function () {
          i.setState(i.animationHandler(i.props, i.state));
        }),
          i.handleOnChange(
            o.selectedItem,
            H.Children.toArray(i.props.children)[o.selectedItem]
          );
      }),
      D(V(i), "getInitialImage", function () {
        var o = i.props.selectedItem,
          a = i.itemsRef && i.itemsRef[o],
          l = (a && a.getElementsByTagName("img")) || [];
        return l[0];
      }),
      D(V(i), "getVariableItemHeight", function (o) {
        var a = i.itemsRef && i.itemsRef[o];
        if (i.state.hasMount && a && a.children.length) {
          var l = a.children[0].getElementsByTagName("img") || [];
          if (l.length > 0) {
            var u = l[0];
            if (!u.complete) {
              var c = function v() {
                i.forceUpdate(), u.removeEventListener("load", v);
              };
              u.addEventListener("load", c);
            }
          }
          var d = l[0] || a.children[0],
            f = d.clientHeight;
          return f > 0 ? f : null;
        }
        return null;
      });
    var s = {
      initialized: !1,
      previousItem: r.selectedItem,
      selectedItem: r.selectedItem,
      hasMount: !1,
      isMouseEntered: !1,
      autoPlay: r.autoPlay,
      swiping: !1,
      swipeMovementStarted: !1,
      cancelClick: !1,
      itemSize: 1,
      itemListStyle: {},
      slideStyle: {},
      selectedStyle: {},
      prevStyle: {},
    };
    return (
      (i.animationHandler =
        (typeof r.animationHandler == "function" && r.animationHandler) ||
        (r.animationHandler === "fade" && Co.fadeAnimationHandler) ||
        Co.slideAnimationHandler),
      (i.state = dt(dt({}, s), i.animationHandler(r, s))),
      i
    );
  }
  return (
    $P(n, [
      {
        key: "componentDidMount",
        value: function () {
          this.props.children && this.setupCarousel();
        },
      },
      {
        key: "componentDidUpdate",
        value: function (i, s) {
          !i.children &&
            this.props.children &&
            !this.state.initialized &&
            this.setupCarousel(),
            !i.autoFocus && this.props.autoFocus && this.forceFocus(),
            s.swiping &&
              !this.state.swiping &&
              this.setState(
                dt({}, this.props.stopSwipingHandler(this.props, this.state))
              ),
            (i.selectedItem !== this.props.selectedItem ||
              i.centerMode !== this.props.centerMode) &&
              (this.updateSizes(), this.moveTo(this.props.selectedItem)),
            i.autoPlay !== this.props.autoPlay &&
              (this.props.autoPlay
                ? this.setupAutoPlay()
                : this.destroyAutoPlay(),
              this.setState({ autoPlay: this.props.autoPlay }));
        },
      },
      {
        key: "componentWillUnmount",
        value: function () {
          this.destroyCarousel();
        },
      },
      {
        key: "setupCarousel",
        value: function () {
          var i = this;
          this.bindEvents(),
            this.state.autoPlay &&
              H.Children.count(this.props.children) > 1 &&
              this.setupAutoPlay(),
            this.props.autoFocus && this.forceFocus(),
            this.setState({ initialized: !0 }, function () {
              var s = i.getInitialImage();
              s && !s.complete
                ? s.addEventListener("load", i.setMountState)
                : i.setMountState();
            });
        },
      },
      {
        key: "destroyCarousel",
        value: function () {
          this.state.initialized &&
            (this.unbindEvents(), this.destroyAutoPlay());
        },
      },
      {
        key: "setupAutoPlay",
        value: function () {
          this.autoPlay();
          var i = this.carouselWrapperRef;
          this.props.stopOnHover &&
            i &&
            (i.addEventListener("mouseenter", this.stopOnHover),
            i.addEventListener("mouseleave", this.startOnLeave));
        },
      },
      {
        key: "destroyAutoPlay",
        value: function () {
          this.clearAutoPlay();
          var i = this.carouselWrapperRef;
          this.props.stopOnHover &&
            i &&
            (i.removeEventListener("mouseenter", this.stopOnHover),
            i.removeEventListener("mouseleave", this.startOnLeave));
        },
      },
      {
        key: "bindEvents",
        value: function () {
          (0, vs.default)().addEventListener("resize", this.updateSizes),
            (0, vs.default)().addEventListener(
              "DOMContentLoaded",
              this.updateSizes
            ),
            this.props.useKeyboardArrows &&
              (0, ms.default)().addEventListener(
                "keydown",
                this.navigateWithKeyboard
              );
        },
      },
      {
        key: "unbindEvents",
        value: function () {
          (0, vs.default)().removeEventListener("resize", this.updateSizes),
            (0, vs.default)().removeEventListener(
              "DOMContentLoaded",
              this.updateSizes
            );
          var i = this.getInitialImage();
          i && i.removeEventListener("load", this.setMountState),
            this.props.useKeyboardArrows &&
              (0, ms.default)().removeEventListener(
                "keydown",
                this.navigateWithKeyboard
              );
        },
      },
      {
        key: "forceFocus",
        value: function () {
          var i;
          (i = this.carouselWrapperRef) === null || i === void 0 || i.focus();
        },
      },
      {
        key: "renderItems",
        value: function (i) {
          var s = this;
          return this.props.children
            ? H.Children.map(this.props.children, function (o, a) {
                var l = a === s.state.selectedItem,
                  u = a === s.state.previousItem,
                  c =
                    (l && s.state.selectedStyle) ||
                    (u && s.state.prevStyle) ||
                    s.state.slideStyle ||
                    {};
                s.props.centerMode &&
                  s.props.axis === "horizontal" &&
                  (c = dt(
                    dt({}, c),
                    {},
                    { minWidth: s.props.centerSlidePercentage + "%" }
                  )),
                  s.state.swiping &&
                    s.state.swipeMovementStarted &&
                    (c = dt(dt({}, c), {}, { pointerEvents: "none" }));
                var d = {
                  ref: function (v) {
                    return s.setItemsRef(v, a);
                  },
                  key: "itemKey" + a + (i ? "clone" : ""),
                  className: Mt.default.ITEM(
                    !0,
                    a === s.state.selectedItem,
                    a === s.state.previousItem
                  ),
                  onClick: s.handleClickItem.bind(s, a, o),
                  style: c,
                };
                return H.default.createElement(
                  "li",
                  d,
                  s.props.renderItem(o, {
                    isSelected: a === s.state.selectedItem,
                    isPrevious: a === s.state.previousItem,
                  })
                );
              })
            : [];
        },
      },
      {
        key: "renderControls",
        value: function () {
          var i = this,
            s = this.props,
            o = s.showIndicators,
            a = s.labels,
            l = s.renderIndicator,
            u = s.children;
          return o
            ? H.default.createElement(
                "ul",
                { className: "control-dots" },
                H.Children.map(u, function (c, d) {
                  return (
                    l &&
                    l(i.changeItem(d), d === i.state.selectedItem, d, a.item)
                  );
                })
              )
            : null;
        },
      },
      {
        key: "renderStatus",
        value: function () {
          return this.props.showStatus
            ? H.default.createElement(
                "p",
                { className: "carousel-status" },
                this.props.statusFormatter(
                  this.state.selectedItem + 1,
                  H.Children.count(this.props.children)
                )
              )
            : null;
        },
      },
      {
        key: "renderThumbs",
        value: function () {
          return !this.props.showThumbs ||
            !this.props.children ||
            H.Children.count(this.props.children) === 0
            ? null
            : H.default.createElement(
                UP.default,
                {
                  ref: this.setThumbsRef,
                  onSelectItem: this.handleClickThumb,
                  selectedItem: this.state.selectedItem,
                  transitionTime: this.props.transitionTime,
                  thumbWidth: this.props.thumbWidth,
                  labels: this.props.labels,
                  emulateTouch: this.props.emulateTouch,
                },
                this.props.renderThumbs(this.props.children)
              );
        },
      },
      {
        key: "render",
        value: function () {
          var i = this;
          if (
            !this.props.children ||
            H.Children.count(this.props.children) === 0
          )
            return null;
          var s =
              this.props.swipeable && H.Children.count(this.props.children) > 1,
            o = this.props.axis === "horizontal",
            a =
              this.props.showArrows &&
              H.Children.count(this.props.children) > 1,
            l =
              (a && (this.state.selectedItem > 0 || this.props.infiniteLoop)) ||
              !1,
            u =
              (a &&
                (this.state.selectedItem <
                  H.Children.count(this.props.children) - 1 ||
                  this.props.infiniteLoop)) ||
              !1,
            c = this.renderItems(!0),
            d = c.shift(),
            f = c.pop(),
            v = {
              className: Mt.default.SLIDER(!0, this.state.swiping),
              onSwipeMove: this.onSwipeMove,
              onSwipeStart: this.onSwipeStart,
              onSwipeEnd: this.onSwipeEnd,
              style: this.state.itemListStyle,
              tolerance: this.props.swipeScrollTolerance,
            },
            y = {};
          if (o) {
            if (
              ((v.onSwipeLeft = this.onSwipeForward),
              (v.onSwipeRight = this.onSwipeBackwards),
              this.props.dynamicHeight)
            ) {
              var w = this.getVariableItemHeight(this.state.selectedItem);
              y.height = w || "auto";
            }
          } else
            (v.onSwipeUp =
              this.props.verticalSwipe === "natural"
                ? this.onSwipeBackwards
                : this.onSwipeForward),
              (v.onSwipeDown =
                this.props.verticalSwipe === "natural"
                  ? this.onSwipeForward
                  : this.onSwipeBackwards),
              (v.style = dt(
                dt({}, v.style),
                {},
                { height: this.state.itemSize }
              )),
              (y.height = this.state.itemSize);
          return H.default.createElement(
            "div",
            {
              "aria-label": this.props.ariaLabel,
              className: Mt.default.ROOT(this.props.className),
              ref: this.setCarouselWrapperRef,
              tabIndex: this.props.useKeyboardArrows ? 0 : void 0,
            },
            H.default.createElement(
              "div",
              {
                className: Mt.default.CAROUSEL(!0),
                style: { width: this.props.width },
              },
              this.renderControls(),
              this.props.renderArrowPrev(
                this.onClickPrev,
                l,
                this.props.labels.leftArrow
              ),
              H.default.createElement(
                "div",
                {
                  className: Mt.default.WRAPPER(!0, this.props.axis),
                  style: y,
                },
                s
                  ? H.default.createElement(
                      BP.default,
                      iu({ tagName: "ul", innerRef: this.setListRef }, v, {
                        allowMouseEvents: this.props.emulateTouch,
                      }),
                      this.props.infiniteLoop && f,
                      this.renderItems(),
                      this.props.infiniteLoop && d
                    )
                  : H.default.createElement(
                      "ul",
                      {
                        className: Mt.default.SLIDER(!0, this.state.swiping),
                        ref: function (m) {
                          return i.setListRef(m);
                        },
                        style: this.state.itemListStyle || {},
                      },
                      this.props.infiniteLoop && f,
                      this.renderItems(),
                      this.props.infiniteLoop && d
                    )
              ),
              this.props.renderArrowNext(
                this.onClickNext,
                u,
                this.props.labels.rightArrow
              ),
              this.renderStatus()
            ),
            this.renderThumbs()
          );
        },
      },
    ]),
    n
  );
})(H.default.Component);
Zo.default = Rc;
D(Rc, "displayName", "Carousel");
D(Rc, "defaultProps", {
  ariaLabel: void 0,
  axis: "horizontal",
  centerSlidePercentage: 80,
  interval: 3e3,
  labels: {
    leftArrow: "previous slide / item",
    rightArrow: "next slide / item",
    item: "slide item",
  },
  onClickItem: Xr.noop,
  onClickThumb: Xr.noop,
  onChange: Xr.noop,
  onSwipeStart: function () {},
  onSwipeEnd: function () {},
  onSwipeMove: function () {
    return !1;
  },
  preventMovementUntilSwipeScrollTolerance: !1,
  renderArrowPrev: function (t, n, r) {
    return H.default.createElement("button", {
      type: "button",
      "aria-label": r,
      className: Mt.default.ARROW_PREV(!n),
      onClick: t,
    });
  },
  renderArrowNext: function (t, n, r) {
    return H.default.createElement("button", {
      type: "button",
      "aria-label": r,
      className: Mt.default.ARROW_NEXT(!n),
      onClick: t,
    });
  },
  renderIndicator: function (t, n, r, i) {
    return H.default.createElement("li", {
      className: Mt.default.DOT(n),
      onClick: t,
      onKeyDown: t,
      value: r,
      key: r,
      role: "button",
      tabIndex: 0,
      "aria-label": "".concat(i, " ").concat(r + 1),
    });
  },
  renderItem: function (t) {
    return t;
  },
  renderThumbs: function (t) {
    var n = H.Children.map(t, function (r) {
      var i = r;
      if (
        (r.type !== "img" &&
          (i = H.Children.toArray(r.props.children).find(function (s) {
            return s.type === "img";
          })),
        !!i)
      )
        return i;
    });
    return n.filter(function (r) {
      return r;
    }).length === 0
      ? (console.warn(
          "No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"
        ),
        [])
      : n;
  },
  statusFormatter: Xr.defaultStatusFormatter,
  selectedItem: 0,
  showArrows: !0,
  showIndicators: !0,
  showStatus: !0,
  showThumbs: !0,
  stopOnHover: !0,
  swipeScrollTolerance: 5,
  swipeable: !0,
  transitionTime: 350,
  verticalSwipe: "standard",
  width: "100%",
  animationHandler: "slide",
  swipeAnimationHandler: Co.slideSwipeAnimationHandler,
  stopSwipingHandler: Co.slideStopSwipingHandler,
});
var GP = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    Object.defineProperty(e, "Carousel", {
      enumerable: !0,
      get: function () {
        return t.default;
      },
    }),
    Object.defineProperty(e, "CarouselProps", {
      enumerable: !0,
      get: function () {
        return n.CarouselProps;
      },
    }),
    Object.defineProperty(e, "Thumbs", {
      enumerable: !0,
      get: function () {
        return r.default;
      },
    });
  var t = i(Zo),
    n = GP,
    r = i(Wi);
  function i(s) {
    return s && s.__esModule ? s : { default: s };
  }
})(kg);
const QP = "assets/show25-C02cLvp0.jpg",
  Rg = "assets/show1-ByY15_3B.jpg",
  ZP = "assets/show19-COq9rJsb.jpg",
  JP = "assets/show30-JjzcZrQE.jpg";
function eT() {
  return g.jsx(g.Fragment, {
    children: g.jsxs("div", {
      className:
        "w-full flex flex-col gap-5 overflow-hidden [&>*]:rounded-lg bg-[white] lg:px-20 lg:py-5  p-6 text-white",
      children: [
        g.jsxs("div", {
          className: "flex flex-col w-full gap-5 lg:flex-row h-1/2",
          children: [
            g.jsx(Yr.div, {
              className: "lg:w-[50%] overflow-hidden",
              initial: { opacity: 0, scale: 1.1 },
              whileInView: { opacity: 1, scale: 1 },
              transition: { duration: 1 },
              children: g.jsx("img", {
                className:
                  "lg:w-full transition-all duration-500 hover:scale-105 lg:h-[450px]",
                src: QP,
                alt: "",
              }),
            }),
            g.jsx(Yr.div, {
              className: "lg:w-[50%] overflow-hidden ",
              initial: { opacity: 0, scale: 1.1 },
              whileInView: { opacity: 1, scale: 1 },
              transition: { duration: 1 },
              children: g.jsx("img", {
                className:
                  "lg:w-full transition-all duration-500 hover:scale-105 lg:h-[450px] ",
                src: Rg,
                alt: "",
              }),
            }),
          ],
        }),
        g.jsxs("div", {
          className:
            "flex flex-col w-full gap-5 overflow-hidden lg:flex-row h-1/2",
          children: [
            g.jsx(Yr.div, {
              className: "overflow-hidden lg:w-1/2 ",
              initial: { opacity: 0, scale: 1.1 },
              whileInView: { opacity: 1, scale: 1 },
              transition: { duration: 1 },
              children: g.jsx("img", {
                className:
                  "lg:w-full transition-all duration-500 hover:scale-105 lg:h-[450px] ",
                src: ZP,
                alt: "",
              }),
            }),
            g.jsx(Yr.div, {
              className: "overflow-hidden lg:w-1/2 ",
              initial: { opacity: 0, scale: 1.1 },
              whileInView: { opacity: 1, scale: 1 },
              transition: { duration: 1 },
              children: g.jsx("img", {
                className:
                  "lg:w-full transition-all duration-500 hover:scale-105 lg:h-[450px] ",
                src: JP,
                alt: "",
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
const mh =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB7UlEQVR4nO3YT6hNURTH8Y/nP+UlQoT0CgMGDKSkSCkpSSmlGChTQ6NXeiNTQwO9kjJRMjFgQErKSzJhQAyI/Mn//3/e0a316vS69/Z679x7zzntb+06nb322nuf3W+vtQ6JRCKR6BFZTZrabaSqZLXdyIDqMdBsI5+wX3XYg/etxD6K0+hTXqbhJP61EvtgrvMK+pWP/lhbFmsdbCX2/HE9xgblYR0eNpFBy1trFUbi3Rcc1Hv24WOs6cG4i6nt9TsHw7m+s5ip+0wPzY7GOi5i/mTiyHH8jv6bWKp7LMK1mPtPCHxKAXE7XoXNc2zReTbhacz5FruKiuwrcCfsfuKYznEY32Kue1hddIoyG2fG6WaW4pgRehjzfx5zO5lrHcH3GHMby02dJbiRO/GGNruSNG7Gsxj3BjtNnm14Gb5eYGu3s9/FuD6BW6UdjS//K3zcwrJepfHj7/kLmDeBcY04da6gOJUVWY8cwtfwcx9r2tiuxN2w/YGjZSus1uNR+HqH3U1sduB12DzBxrJWiAtwOfz9xakoCRqp94nQUqPvKhaWvdTtw1BON5eijdU7QwXXO1mna/a9+JDz/xkHqvrzYW2UBCPx3Amy2v5FqSpZ2kjJyNKJlIwsnUjJyGp7IlnFm9psJJFIJBK6zX+RmLvdeUFJ9AAAAABJRU5ErkJggg==",
  vh =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2050%2050'%20width='50px'%20height='50px'%3e%3cpath%20d='M%2025%203%20C%2018.363281%203%2013%208.363281%2013%2015%20L%2013%2020%20L%209%2020%20C%207.355469%2020%206%2021.355469%206%2023%20L%206%2047%20C%206%2048.644531%207.355469%2050%209%2050%20L%2041%2050%20C%2042.644531%2050%2044%2048.644531%2044%2047%20L%2044%2023%20C%2044%2021.355469%2042.644531%2020%2041%2020%20L%2037%2020%20L%2037%2015%20C%2037%208.363281%2031.636719%203%2025%203%20Z%20M%2025%205%20C%2030.566406%205%2035%209.433594%2035%2015%20L%2035%2020%20L%2015%2020%20L%2015%2015%20C%2015%209.433594%2019.433594%205%2025%205%20Z%20M%209%2022%20L%2041%2022%20C%2041.554688%2022%2042%2022.445313%2042%2023%20L%2042%2047%20C%2042%2047.554688%2041.554688%2048%2041%2048%20L%209%2048%20C%208.445313%2048%208%2047.554688%208%2047%20L%208%2023%20C%208%2022.445313%208.445313%2022%209%2022%20Z%20M%2025%2030%20C%2023.300781%2030%2022%2031.300781%2022%2033%20C%2022%2033.898438%2022.398438%2034.6875%2023%2035.1875%20L%2023%2038%20C%2023%2039.101563%2023.898438%2040%2025%2040%20C%2026.101563%2040%2027%2039.101563%2027%2038%20L%2027%2035.1875%20C%2027.601563%2034.6875%2028%2033.898438%2028%2033%20C%2028%2031.300781%2026.699219%2030%2025%2030%20Z'/%3e%3c/svg%3e",
  gh =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20focusable='false'%20width='24'%20height='24'%20class='icon%20icon--picto-box%20'%20viewBox='0%200%2024%2024'%3e%3cpath%20d='M12%2021L21%2017.1429V6.85714M12%2021L3%2017.1429V6.85714M12%2021V10.7143M21%206.85714L12%203L3%206.85714M21%206.85714L12%2010.7143M3%206.85714L12%2010.7143'%20stroke='currentColor'%20stroke-width='0.8'%3e%3c/path%3e%3c/svg%3e";
function tT() {
  return g.jsxs(g.Fragment, {
    children: [
      g.jsx("div", {
        className: "items-center h-[200px] lg:hidden w-[100%]",
        children: g.jsxs(kg.Carousel, {
          autoPlay: !0,
          interval: 2e3,
          showStatus: !1,
          showArrows: !1,
          showThumbs: !1,
          infiniteLoop: !0,
          children: [
            g.jsxs("div", {
              className: "space-y-2",
              children: [
                g.jsx("div", {
                  className: "w-8 h-8 mx-auto",
                  children: g.jsx("img", { src: gh, alt: "" }),
                }),
                g.jsx("h1", {
                  className: "font-bold",
                  children: "Customer service",
                }),
                g.jsx("p", {
                  children:
                    "We are available from monday to friday to answer your questions.",
                }),
              ],
            }),
            g.jsxs("div", {
              className: "space-y-2",
              children: [
                g.jsx("div", {
                  className: "w-8 h-8 mx-auto",
                  children: g.jsx("img", { src: vh, alt: "" }),
                }),
                g.jsx("h1", {
                  className: "font-bold",
                  children: "Secure payment",
                }),
                g.jsx("p", {
                  children: "Your payment information is processed securely.",
                }),
              ],
            }),
            g.jsxs("div", {
              className: "space-y-2",
              children: [
                g.jsx("div", {
                  className: "w-8 h-8 mx-auto",
                  children: g.jsx("img", { src: mh, alt: "" }),
                }),
                g.jsx("h1", { className: "font-bold", children: "Contact us" }),
                g.jsx("p", {
                  children:
                    "Need to contact us ? Just send us an e-mail at info@yourstore.com",
                }),
              ],
            }),
          ],
        }),
      }),
      g.jsxs("div", {
        className:
          "hidden p-8 justify-center gap-20 py-8 [&>div]:w-[25%] w-full lg:flex",
        children: [
          g.jsxs("div", {
            className: "space-y-2  h-[100%]",
            children: [
              g.jsx("div", {
                className: "w-8 h-8 mx-auto",
                children: g.jsx("img", { src: gh, alt: "" }),
              }),
              g.jsx("h1", {
                className: "font-bold text-center",
                children: "Customer service",
              }),
              g.jsx("p", {
                className: "text-center ",
                children:
                  "We are available from monday to friday to answer your questions.",
              }),
            ],
          }),
          g.jsxs("div", {
            className: "space-y-2  h-[100%]",
            children: [
              g.jsx("div", {
                className: "w-8 h-8 mx-auto",
                children: g.jsx("img", { src: vh, alt: "" }),
              }),
              g.jsx("h1", {
                className: "font-bold text-center",
                children: "Secure payment",
              }),
              g.jsx("p", {
                className: "text-center ",
                children: "Your payment information is processed securely.",
              }),
            ],
          }),
          g.jsxs("div", {
            className: "space-y-2  h-[100%]",
            children: [
              g.jsx("div", {
                className: "w-8 h-8 mx-auto",
                children: g.jsx("img", { src: mh, alt: "" }),
              }),
              g.jsx("h1", {
                className: "font-bold text-center",
                children: "Contact us",
              }),
              g.jsx("p", {
                className: "text-center ",
                children:
                  "Need to contact us ? Just send us an e-mail at info@yourstore.com",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const Ng =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20focusable='false'%20width='9'%20height='17'%20class='icon%20icon--facebook%20'%20viewBox='0%200%209%2017'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M2.486%2016.2084L2.486%208.81845H0L0%205.93845L2.486%205.93845L2.486%203.81845C2.38483%202.79982%202.73793%201.78841%203.45107%201.05407C4.16421%200.319722%205.16485%20-0.0628415%206.186%200.00844868C6.9284%200.00408689%207.67039%200.0441585%208.408%200.128449V2.69845L6.883%202.69845C6.4898%202.61523%206.08104%202.73438%205.79414%203.01585C5.50724%203.29732%205.3803%203.70373%205.456%204.09845L5.456%205.93845H8.308L7.936%208.81845H5.46L5.46%2016.2084H2.486Z'%20fill='currentColor'%3e%3c/path%3e%3c/svg%3e",
  Lg =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20focusable='false'%20width='16'%20height='16'%20class='icon%20icon--instagram%20'%20viewBox='0%200%2016%2016'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8%200C5.827%200%205.555.01%204.702.048%203.85.087%203.269.222%202.76.42a3.921%203.921%200%2000-1.417.923c-.445.444-.719.89-.923%201.417-.198.509-.333%201.09-.372%201.942C.01%205.555%200%205.827%200%208s.01%202.445.048%203.298c.039.852.174%201.433.372%201.942.204.526.478.973.923%201.417.444.445.89.719%201.417.923.509.198%201.09.333%201.942.372C5.555%2015.99%205.827%2016%208%2016s2.445-.01%203.298-.048c.852-.039%201.433-.174%201.942-.372a3.922%203.922%200%20001.417-.923c.445-.444.719-.89.923-1.417.198-.509.333-1.09.372-1.942C15.99%2010.445%2016%2010.173%2016%208s-.01-2.445-.048-3.298c-.039-.852-.174-1.433-.372-1.942a3.922%203.922%200%2000-.923-1.417A3.921%203.921%200%200013.24.42c-.509-.198-1.09-.333-1.942-.372C10.445.01%2010.173%200%208%200zm0%201.441c2.136%200%202.39.009%203.233.047.78.036%201.203.166%201.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276%201.485.038.844.047%201.097.047%203.233s-.009%202.39-.047%203.233c-.036.78-.166%201.203-.276%201.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.479%202.479%200%2001-.92-.598%202.478%202.478%200%2001-.598-.92c-.11-.282-.24-.705-.276-1.485-.038-.844-.047-1.097-.047-3.233s.009-2.39.047-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24%201.485-.276.844-.038%201.097-.047%203.233-.047zm0%209.226a2.667%202.667%200%20110-5.334%202.667%202.667%200%20010%205.334zm0-6.775a4.108%204.108%200%20100%208.216%204.108%204.108%200%20000-8.216zm5.23-.162a.96.96%200%2011-1.92%200%20.96.96%200%20011.92%200z'%20fill='currentColor'%3e%3c/path%3e%3c/svg%3e";
function nT() {
  return g.jsxs("div", {
    className:
      "w-full flex flex-col lg:flex-row gap-2 lg:gap-5 text-white p-3 lg:p-6 lg:h-[40%] bg-[#282828]",
    children: [
      g.jsxs("div", {
        className: "flex flex-col gap-2 lg:gap-5 lg:w-1/3",
        children: [
          g.jsx("h1", {
            className: "font-semibold uppercase",
            children: "About our store",
          }),
          g.jsx("p", {
            className: "text-sm lg:text-base",
            children:
              "We believe in the power of healthy hair to boost your confidence and make you feel your best.",
          }),
          g.jsxs("p", {
            className: "hidden mt-5 text-xs lg:flex lg:text-sm",
            children: [
              "Natura Hair Oil    ",
              g.jsx("div", {
                className: "w-1 h-1 mx-4 my-auto bg-white",
                children: " ",
              }),
              "Self Powered",
            ],
          }),
        ],
      }),
      g.jsx("div", { children: g.jsx("p", {}) }),
      g.jsxs("div", {
        className: "flex flex-col gap-3 lg:ml-auto lg:mr-5",
        children: [
          g.jsx("h1", {
            className: "font-semibold uppercase ",
            children: "Follow us On Instagram",
          }),
          g.jsx("h1", {
            className: "font-semibold uppercase ",
            children: "OUR SOCIALS",
          }),
          g.jsxs("div", {
            className: "flex gap-1",
            children: [
              g.jsx("a", {
                target: "_blank",
                className: "p-1 border border-white rounded-md",
                href: "https://www.facebook.com/profile.php?id=61563258421590&mibextid=ZbWKwL",
                children: g.jsx("img", {
                  className: "w-6 h-6 invert",
                  src: Ng,
                  alt: "",
                }),
              }),
              g.jsx("a", {
                target: "_blank",
                className: "p-1 border border-white rounded-md",
                href: "https://www.instagram.com/thenatura.pk?igsh=d2IwNWx5aXQxemxl",
                children: g.jsx("img", {
                  className: "w-6 h-6 invert",
                  src: Lg,
                  alt: "",
                }),
              }),
            ],
          }),
          g.jsxs("p", {
            className: "flex mt-1 text-xs lg:hidden lg:text-sm",
            children: [
              "Natura Hair Oil    ",
              g.jsx("div", {
                className: "w-1 h-1 mx-4 my-auto bg-white",
                children: " ",
              }),
              "Self Powered",
            ],
          }),
        ],
      }),
    ],
  });
}
const rT =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADZ0lEQVR4nO2ZbWiNYRjHf2wzso2JL15bM6xRLMUHIZ8sHzSaDeWbIkQib0l8GnkbnwhfSMSymnknSt4ZNkNoZWMjCduwiemq/6mn7Zyzs51znvOs9qunTs/9dt3nvu7rue7/DT300INbjAAWALuAYqAceAd80mO/n6hsJ5AHDMcjjAZ2ABVAa4Dnm55A5c+B7erLdaYDl4C/MuYf8AjYBxQAk4CBftrZu2xgIbBfK+SbkPV1EZjmxgTsX7vgGPwNsA4YGUafo4D1wFtHv+eBdKJAL2At8FMDvQBy9T5S9AbmA1UaowlYHckxkoCzjs5tQnFEj3itkO9POyMbwmIQcN+xCmNxj0zgpca+B6R2taMUhVDr6AqQjPskA9dkw+Ou2BCnCOLbeInEjr4OW8o669Zb1dBCan9iT5LDOzaF2mgi0AJ8B9LwDunAD6AZmBBKA59PLsV7LHfs2aDMVMVnUQ6xXSUOqJSNll0EpFiV8vEui2Tj6UAVBmhv1AEJeJc+yqabA4XjPM30MN7nqGyd569wrwptQl4nX7bu9ld4VYVj8D7jZOtlf4W+vCaU/TEHqAVqgBwX6zn3Sasy5XZ8BBoJjRrH2eG9i/WcWCb+AT/UKnXu9hOpUEeWpHVEjga3QWe7WC8k1/Jt9gy8T2awzV6oQvtyep2CYOE3V4WH8D7HZKvZ3A47dzQAX+SDXiUR+Az8DnZiPKGZ2tJ5lcWy8VSwStkS26o8msbHSwRpDUXIO6eKK/AeK2WbqZwdkqa90uSxvCtDmYel71mhNlqmmVcG0HDdJkWnVrNpQ2cbH1HDWzFWUvrpjG62lEpa7RQJDj3JlL7BxGYlbsiGh+FIp4mOc7yp5VNwjyzglca+GwkXj1MqYGH5D7CF6IfYjcAvh8gQtojtZK46ric6mO/bh/i1xmlUuI04QzXA7Qj3m6YVqHacSUqiqXL69KSiAOWbgT3AEsmuqX4uaeyaYrLSjAPA0zZXb6XAVKJMmQac5ceni4JcdjZIRw5UbuL0Nrd05mHa6NVt4rhd/NyUQXW65DQ3OalIU6XjaL2upx/oBqpQmpS5q6sclLH2xTeGSAdrcRw53bzN6hLjZXCj7g9LlO/4XON4pMNjNLBvyB0/fm3flOvADLoJq4CvUjjK5d9ruolA0QOx5D+isClYdLLnzQAAAABJRU5ErkJggg==",
  iT =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADnUlEQVR4nO2aSU8UURDHf0aEMRiRQUBvcjQY9UuooKjIze2m0YtL0KvLGT2ZmPA5NEggUYMrAu6JAsrJ5aLx5ghRM6biv5MKztLd07NI+CedDLyq6nqv6tWrqtewjKWLNNALXAGGgGngG7Cgx36/1ZjR7AeaqRGkgKPAKPAbyEZ8fgEjwBGgoRoTWA2cAz47peaBO8AFWWazVnyVnmb9z8YuAnfFE/B/Avq1OBXBHmDOKTAJHAOaYshaBxwHppy890A3ZYSt1KB74VNgZ4Lyu4DnTv71clhngxS3F3wHTgErk34Jf2WeATLO2u1JCe+QubOKOlsoP7YCM3rnO+lQElqdwAlgPZVDM/BA756TV8RCyrnTI6CRyqMRGHduFmvPDDp3ssOuWmhxXmEBIHKIDTZ2JfZEmD2TkU4W3UIfdsE5YdGpVnDWbf5QLnbenRPlCLFxUQe8kG42qYJoUKpgxDuoPeyWbp+LWeWIixBhcU8pRlsMxdpk+fsh6Ve4SHqoEOGoiCx3CosJ8byOOJk28Rjvkwh8J8QznI8grbR6PmIC6BUKO5k4PP6gtPrmZz49D0jwbeJlAK/cubMxAm2cE3tM/HtzDV7VoNUTcRBmlUuxhMdlyRggB4Y0uI/4KGSZJCyx2HtukAOzGrQqrhTkWvWkLBGgU7KsL/APvmrQcptSsVjxJCeBsnCT94UcWNBgPcnAu1IS7rT44A76BFWZSKFoFgUFJ7JkXGt2qWz2IQ1aBzAuCoXYKIdmMfQVCr/BgWjNs//6QOzVoHULoyLKYZeEZcbE35MvGQuSRusA1mrSmHZJ49p8RCMSbm3MsJhMII23UiAsTornViGiwyKyQiksHpdYWE1JRhhYYfVMOh4sdtB8FOEuag890u1DmGuIfhE/q8Hmw0vpdjoMQ8r1eq2hXCvol04zUS6FusWUUXOs2tgO/JBOka8yrrsVSCL/iotWNeVMl2txBKRcaB2vUhN7jTosQaeloZTVmHax3v6uFNLAQ3cdV/KFT4czrbnZNiqzJ97pnZaVb0pKcLtzs4x6rxYOk0adotMP505J1C//7JkgAGTVUE7q9nWFrjJeOvnXyn333uXMHnTtT8T8iiGt3ClIO7JypSRvi4ta56xLZ7LKSC29vqS+U6fCdr2eFl0a9YlmzPUJgrTjdLW+gGhQV3xYJUA24vNTlenBak0gF5rUi7Wq7aaKpq/uoxr7/Ubl6YBo89YTy+A/xx+3026HVKnF7QAAAABJRU5ErkJggg==",
  jg =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFCUlEQVR4nO2aW4hVZRTHf45Tjs5QzdGxC3Q1uxM9ZBlF9SCWlTUNJRgKFUoXUcMub009lNEFAkmSoJfsZvVQhkWWmmGWWqmFlbeITLEaungbR80Ti/4fLM7Ze5999jl7ToR/2HD4vrXXd1vfWv+19oEj+P+iAHQCTwOLgO+B34E+Pfb7O/WZzE1AO/8RtACTgcXA30CxyucQ8AEwCRjUiAUMBu4HdrhJ7QeWAg/rZM7Vjh+lp11t1tcNLNM74f3twCxtTr/gemCrm8AaYApwbAZdxwFTgS+cvi3AOHKE7dQ8N+CXwNg66r8WWOv0z83jdE7QxG2AvcB0YGC9B+FfnTOBfe60j6+X8tN13EV5nQvIHxcCGzXmZs2hJnQ4hauBYfQf2oEVGnurrCITWpw5rQRa6X+0Ap87M8t0Z+Y5c7Jg1ygMdVZhDqBqFxsudn/ciTR3Zp/mZN4tdbALccK8UxwsuH2oxZrsj8BV5If73OVPZWIPuDgR52JHAr9FUI7t2og80Ays0zi2qES0ONoRF+xscask866L6KvVdif5YZzG+LkSN5vkPEQcbpSMsdshrn2y2o1u5IUBzpPeliS4WELGneKwUDJ3RJzmr+q7lPxwl8Z4P06gIFq9vwIB3ClFp0X0PaG++eQbKPuAg3Hz7NQkjIon4YDkoi71KdqM3bqceeFjzcHMvAzPqNPyiST0SO6siL6x6vsjJ1IZ8KjGeYoILFKnpaBJWCo5u9weZ7tFWoKUJ252XrMMm9RpgS4J0yX3Scxxv53zaRjOd56zDGE3jdskwS7YHsmOce0hy7uX/DFMY1lQLkOfOo9OoehxyW5ydOFWte0CziBfDHJ1gjL0JnijUgxxydazrn2B2r4BjqFBC9mhzpNSKrtErvgwMEFtNvlvpeezCvFolBxLW71Na4M67SKlxUy9YxR7tNpOBX5Q+8aYNGCKNqCowp0F0hPrddkD9eiiOjyv934RKw6Bca1bZLfLMK92J7nGMWcz7bkp8/Pgfm3OZehWp+1ONWgW7wk0/hy12117we18j3QH+j9bchcDb7pK5SHgoVoC4nUpKUoUbLeXuAnbrgdcAXxakrdYIGsq0WHx62X1m3tPwnLJjY+bzB6RseEZFmOe7B0NcEC76gPj5aoDPFZC/z2G6/0/E8YpONIY6xlfl6JpZEOTjjuY0wqZTlp06T1LJ+Jwt2TeI0XStE5JTFZcA2yTrsOiLWMizMnjTFcreDBGxub0lWQmJk2gycWBar1XVIF6tih90aWoTwJXigq1aQF2ef9ym9haobqzLc1niJDurqc+6FBqEEhp0vNGgt03a04mNyPNwCdLeHcFU8iCy4A5wNcqI+1SGelVnVISZrkgm+qj0O1JwaZBuMhxwdSfMmr1XPVGh4pyRZ1mKgx0eckIGo82V0NbVc13xtGuLNloFBwj2FLtB59H9OJzNP5ObHbJW1TpKREr9fINNAbN8k69zpyqpku+QBcXkEaotvuSonVnjQwgYICC3XoXU+Zk/fY+QQo+cm0jlQTNd5Sj9LG09p6MRLMg7hRoR1GmVNPX4helyOj4K8otSidttd23VBKa6uhMyCOWiZbcApynrK9FBY2hyha7dBeXu4JHoB0z6vEPiJ8iJr5TtGGa0stSM2pSTrDAlYiqeQ6qMDixnn/hWKJTeE2mUqlQV4rBsvNu3Z8NKmj0aud7dIILRfXH51xpOQIaiX8Aj4PBez3GiikAAAAASUVORK5CYII=";
function sT({ showWhatsapp: e, setShowWhatsapp: t }) {
  return g.jsxs("div", {
    children: [
      g.jsx("a", {
        href: "https://wa.link/8o93k2",
        target: "_blank",
        className: `fixed rounded-full  bg-[#3faf6c] w-14 h-14 flex items-center ${
          e ? "bottom-32 opacity-100" : "bottom-16 opacity-0"
        } justify-center z-20 transition-all duration-200 right-5`,
        children: g.jsx("img", {
          src: jg,
          className: "invert w-[65%] h-[65%]",
          alt: "",
        }),
      }),
      g.jsx("button", {
        onClick: () => t((n) => !n),
        onMouseOver: () => t(!0),
        className:
          "fixed rounded-full  bg-[#3faf6c] w-14 h-14 flex items-center justify-center z-20 bottom-16 right-5",
        children: g.jsx("img", {
          src: e ? iT : rT,
          className: "invert w-[65%] h-[65%]",
          alt: "",
        }),
      }),
    ],
  });
}
const yh = "assets/main-BSMnSMqv.png";
function oT() {
  return g.jsxs(Yr.div, {
    viewport: { once: !0 },
    className:
      "h-[50%] relative w-full flex flex-col py-4 justify-center bg-[white] overflow-hidden lg:h-[90%]",
    initial: { opacity: 1 },
    whileInView: { opacity: 1 },
    transition: { duration: 3 },
    children: [
      " ",
      g.jsx("img", {
        src: yh,
        className: "w-full bye hidden lg:block h-[100%] ",
        alt: "",
      }),
      " ",
      g.jsx("img", {
        src: yh,
        className: "w-full lg:hidden Tello h-[101#ffe9c1%]",
        alt: "",
      }),
    ],
  });
}
const aT = "assets/Almond-C0gsDfUf.jfif",
  lT = "assets/Olive-FGZjiAfT.jfif",
  uT = "assets/Pumpkin-COutxj73.jfif",
  cT = "assets/Black-Br2MOX2o.jfif",
  dT = "assets/Amla-DXu9QFQZ.jfif",
  fT = "assets/Soap-CLJgKrwi.jfif";
function hT() {
  return g.jsxs("div", {
    className: "w-full bg-[#cecfec] lg:p-10",
    children: [
      g.jsx("h1", {
        className: "px-4 py-6 text-lg font-semibold",
        children: "Ingredients",
      }),
      g.jsxs("div", {
        className: "flex flex-wrap w-full gap-5",
        children: [
          g.jsxs("div", {
            className: "lg:w-[48%] bg-[#e7dddd] p-5 rounded-md flex",
            children: [
              g.jsxs("div", {
                children: [
                  g.jsx("h1", {
                    className: "font-semibold",
                    children: "Almond Oil",
                  }),
                  g.jsx("p", {
                    children:
                      "Almond oil has several benefits for hair, including restoring shine and softness, preventing split ends, protecting against UV light, reducing scalp inflammation, and promoting hair growth and thickness",
                  }),
                ],
              }),
              g.jsx("img", {
                className: "w-32 h-32 rounded-md",
                src: aT,
                alt: "",
              }),
            ],
          }),
          g.jsxs("div", {
            className: "lg:w-[48%] bg-[#e7dddd] p-5 rounded-md flex",
            children: [
              g.jsxs("div", {
                children: [
                  g.jsx("h1", {
                    className: "font-semibold",
                    children: "Olive Oil",
                  }),
                  g.jsx("p", {
                    children:
                      "Olive Oil Contains moisturizing ingredients like squalene and oleic acid. Helps prevent split ends by increasing hair elasticity. Promotes hair growth and overall hair health. Nourishes the scalp and hair. Hydrates dry, brittle hair and prevents breakage.",
                  }),
                ],
              }),
              g.jsx("img", {
                className: "w-32 h-32 rounded-md",
                src: lT,
                alt: "",
              }),
            ],
          }),
          g.jsxs("div", {
            className: "lg:w-[48%] bg-[#e7dddd] p-5 rounded-md flex",
            children: [
              g.jsxs("div", {
                children: [
                  g.jsx("h1", {
                    className: "font-semibold",
                    children: "Pumpkin Oil",
                  }),
                  g.jsx("p", {
                    children:
                      "Pumpkin seed oil has hair nourishing properties and can help prevent hair loss and promote hair growth. The benefits of pumpkin seed oil for hair can be attributed to its rich phytosterol and nutrient composition.",
                  }),
                ],
              }),
              g.jsx("img", {
                className: "w-32 h-32 rounded-md",
                src: uT,
                alt: "",
              }),
            ],
          }),
          g.jsxs("div", {
            className: "lg:w-[48%] bg-[#e7dddd] p-5 rounded-md flex",
            children: [
              g.jsxs("div", {
                children: [
                  g.jsx("h1", {
                    className: "font-semibold",
                    children: "Black Seed Oil",
                  }),
                  g.jsx("p", {
                    children:
                      "Black Seed Oil Helps in fighting scalp inflammation such as psoriasis and eczema, Improving hair texture and adding shine, Promoting hair growth, Combating hair fall, Fighting telogen effluvium.",
                  }),
                ],
              }),
              g.jsx("img", {
                className: "w-32 h-32 rounded-md",
                src: cT,
                alt: "",
              }),
            ],
          }),
          g.jsxs("div", {
            className: "lg:w-[48%] bg-[#e7dddd] p-5 rounded-md flex",
            children: [
              g.jsxs("div", {
                children: [
                  g.jsx("h1", {
                    className: "font-semibold",
                    children: "Gooseberry Oil",
                  }),
                  g.jsx("p", {
                    children:
                      "The vitamins and minerals present in this powerful fruit helps stimulate hair growth when applied to the scalp. The blood circulation allows for healthy nutrients to reach your scalp––the vitamin C content is rich in antioxidants and helps boost collagen production and renews skin cells faster.",
                  }),
                ],
              }),
              g.jsx("img", {
                className: "w-32 h-32 rounded-md",
                src: dT,
                alt: "",
              }),
            ],
          }),
          g.jsxs("div", {
            className: "lg:w-[48%] bg-[#e7dddd] p-5 rounded-md flex",
            children: [
              g.jsxs("div", {
                children: [
                  g.jsx("h1", {
                    className: "font-semibold",
                    children: "Soapnut Oil",
                  }),
                  g.jsx("p", {
                    children:
                      "Soapnut Oil helps in maintaining a healthy scalp environment, reducing dandruff, and soothing irritation, Strengthening roots, reducing hair fall, and preventing premature greying, Imparting vitamins A, D, E, and K to hair roots, nourishing the scalp and hair follicles.",
                  }),
                ],
              }),
              g.jsx("img", {
                className: "w-32 h-32 rounded-md",
                src: fT,
                alt: "",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const pT = "assets/show29-D4gGmv_5.jpg",
  mT = "assets/Pic5-BWm6dj6q.jpg";
function Sh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function cr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Sh(Object(n), !0).forEach(function (r) {
          W(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Sh(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Ae(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function wh(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function Oe(e, t, n) {
  return (
    t && wh(e.prototype, t),
    n && wh(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function W(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function J() {
  return (J = Object.assign
    ? Object.assign.bind()
    : function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }).apply(this, arguments);
}
function Be(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Dg(e, t);
}
function ou(e) {
  return (ou = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      })(e);
}
function Dg(e, t) {
  return (Dg = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function (n, r) {
        return (n.__proto__ = r), n;
      })(e, t);
}
function vT() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function gT(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = {},
    s = Object.keys(e);
  for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i;
}
function ge(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = gT(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++)
      (n = s[r]),
        t.indexOf(n) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
  }
  return i;
}
function z(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function yT(e, t) {
  if (t && (typeof t == "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return z(e);
}
function Ue(e) {
  var t = vT();
  return function () {
    var n,
      r = ou(e);
    if (t) {
      var i = ou(this).constructor;
      n = Reflect.construct(r, arguments, i);
    } else n = r.apply(this, arguments);
    return yT(this, n);
  };
}
function Ha(e) {
  return ST(e) || wT(e) || xT(e) || PT();
}
function ST(e) {
  if (Array.isArray(e)) return au(e);
}
function wT(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function xT(e, t) {
  if (e) {
    if (typeof e == "string") return au(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return (
      n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set"
        ? Array.from(e)
        : n === "Arguments" ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        ? au(e, t)
        : void 0
    );
  }
}
function au(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function PT() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ig(e, t) {
  return (t = { exports: {} }), e(t, t.exports), t.exports;
}
function Vg() {}
function Fg() {}
function ee(e) {
  return e
    .map(function (t) {
      return t === !1 ? null : t;
    })
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}
function xh(e, t) {
  return ((100 / e) * t) / t;
}
function Ph(e, t) {
  return (100 * e) / t;
}
function Xe(e) {
  return "".concat(e, "%");
}
function na(e, t, n) {
  if (e === t) return !0;
  var r = $e[uu(e)],
    i = $e[uu(t)];
  return !(!r || r !== i) && r(e, t, n);
}
function Th(e) {
  return function (t, n, r) {
    if (!r) return e(t, n, []);
    for (var i, s = r.length; (i = r[--s]); )
      if (i[0] === t && i[1] === n) return !0;
    return e(t, n, r);
  };
}
function TT(e, t, n) {
  var r = e.length;
  if (r !== t.length) return !1;
  for (n.push([e, t]); r--; ) if (!na(e[r], t[r], n)) return !1;
  return !0;
}
function kT(e, t, n) {
  if (typeof e.equal == "function") return n.push([e, t]), e.equal(t, n);
  var r = kh(e),
    i = kh(t),
    s = r.length;
  if (s !== i.length) return !1;
  for (r.sort(), i.sort(); s--; ) if (r[s] !== i[s]) return !1;
  for (n.push([e, t]), s = r.length; s--; ) {
    var o = r[s];
    if (!na(e[o], t[o], n)) return !1;
  }
  return !0;
}
function kh(e) {
  var t = [];
  for (var n in e) n !== "constructor" && t.push(n);
  return t;
}
function CT(e) {
  return !!e && typeof e == "object";
}
function ET(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || bT(e);
}
function bT(e) {
  return e.$$typeof === VT;
}
function AT(e) {
  return Array.isArray(e) ? [] : {};
}
function bo(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? Ri(AT(e), e, t) : e;
}
function OT(e, t, n) {
  return e.concat(t).map(function (r) {
    return bo(r, n);
  });
}
function _T(e, t, n) {
  var r = {};
  return (
    n.isMergeableObject(e) &&
      Object.keys(e).forEach(function (i) {
        r[i] = bo(e[i], n);
      }),
    Object.keys(t).forEach(function (i) {
      n.isMergeableObject(t[i]) && e[i]
        ? (r[i] = Ri(e[i], t[i], n))
        : (r[i] = bo(t[i], n));
    }),
    r
  );
}
function Ri(e, t, n) {
  ((n = n || {}).arrayMerge = n.arrayMerge || OT),
    (n.isMergeableObject = n.isMergeableObject || DT);
  var r = Array.isArray(t);
  return r === Array.isArray(e)
    ? r
      ? n.arrayMerge(e, t, n)
      : _T(e, t, n)
    : bo(t, n);
}
function yt(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : function () {
            return {};
          },
    n = (function (r) {
      function i(o, a) {
        var l;
        return (
          Ae(this, i),
          (l = s.call(this, o, a)),
          (l.state = t(cr({}, a.state))),
          (l.updateStateProps = l.updateStateProps.bind(z(l))),
          l
        );
      }
      Be(i, r);
      var s = Ue(i);
      return (
        Oe(i, [
          {
            key: "componentDidMount",
            value: function () {
              this.context.subscribe(this.updateStateProps);
            },
          },
          {
            key: "shouldComponentUpdate",
            value: function (o, a) {
              return !bh(a, this.state) || !bh(o, this.props);
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              this.context.unsubscribe(this.updateStateProps);
            },
          },
          {
            key: "updateStateProps",
            value: function () {
              this.setState(t(cr({}, this.context.state)));
            },
          },
          {
            key: "render",
            value: function () {
              var o = this,
                a = $s(this.state, this.props);
              return N.createElement(
                e,
                J(
                  {
                    ref: function (l) {
                      o.instance = l;
                    },
                  },
                  a,
                  {
                    carouselStore: {
                      getStoreState: this.context.getStoreState,
                      masterSpinnerError: this.context.masterSpinnerError,
                      masterSpinnerSuccess: this.context.masterSpinnerSuccess,
                      setStoreState: this.context.setStoreState,
                      subscribeMasterSpinner:
                        this.context.subscribeMasterSpinner,
                      unsubscribeAllMasterSpinner:
                        this.context.unsubscribeAllMasterSpinner,
                      unsubscribeMasterSpinner:
                        this.context.unsubscribeMasterSpinner,
                    },
                  }
                ),
                this.props.children
              );
            },
          },
        ]),
        i
      );
    })(N.Component);
  return (
    W(n, "contextType", Nc),
    W(n, "propTypes", { children: Ee.children }),
    W(n, "defaultProps", { children: null }),
    n
  );
}
var MT = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  RT = MT;
Fg.resetWarningCache = Vg;
var NT = function () {
    function e(r, i, s, o, a, l) {
      if (l !== RT) {
        var u = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw ((u.name = "Invariant Violation"), u);
      }
    }
    function t() {
      return e;
    }
    e.isRequired = e;
    var n = {
      array: e,
      bigint: e,
      bool: e,
      func: e,
      number: e,
      object: e,
      string: e,
      symbol: e,
      any: e,
      arrayOf: t,
      element: e,
      elementType: e,
      instanceOf: t,
      node: e,
      objectOf: t,
      oneOf: t,
      oneOfType: t,
      shape: t,
      exact: t,
      checkPropTypes: Fg,
      resetWarningCache: Vg,
    };
    return (n.PropTypes = n), n;
  },
  x = Ig(function (e) {
    e.exports = NT();
  }),
  $a = "loading",
  Ch = "success",
  Eh = "error",
  Ee = {
    children: x.oneOfType([x.arrayOf(x.node), x.node]),
    direction: x.oneOf(["forward", "backward"]),
    height: function (e, t) {
      var n = e[t];
      return e.orientation !== "vertical" ||
        (n !== null && typeof n == "number")
        ? null
        : new Error(
            "Missing required property '".concat(
              t,
              "' when orientation is vertical.  You must supply a number representing the height in pixels"
            )
          );
    },
    orientation: x.oneOf(["horizontal", "vertical"]),
    isBgImage: function (e, t) {
      return e[t] === !0 && e.tag === "img"
        ? new Error(
            "HTML img elements should not have a backgroundImage.  Please use ".concat(
              t,
              " for other block-level HTML tags, like div, a, section, etc..."
            )
          )
        : null;
    },
  },
  Hs = function (e) {
    var t = e.min,
      n = e.max,
      r = e.x;
    return Math.min(n, Math.max(t, r));
  },
  LT = { buttonBack: "buttonBack___1mlaL" },
  jT = [
    "carouselStore",
    "className",
    "currentSlide",
    "disabled",
    "onClick",
    "step",
    "totalSlides",
    "visibleSlides",
    "infinite",
  ],
  lu = (function (e) {
    function t(r) {
      var i;
      return (
        Ae(this, t),
        (i = n.call(this, r)),
        (i.handleOnClick = i.handleOnClick.bind(z(i))),
        i
      );
    }
    Be(t, e);
    var n = Ue(t);
    return (
      Oe(
        t,
        [
          {
            key: "handleOnClick",
            value: function (r) {
              var i = this.props,
                s = i.carouselStore,
                o = i.currentSlide,
                a = i.onClick,
                l = i.step,
                u = i.infinite,
                c = i.visibleSlides,
                d = i.totalSlides - c,
                f = Math.max(o - l, 0);
              u && (f = o === 0 ? d : f),
                s.setStoreState(
                  { currentSlide: f, isPlaying: !1 },
                  a !== null && a.call(this, r)
                );
            },
          },
          {
            key: "render",
            value: function () {
              var r = this.props,
                i = (r.carouselStore, r.className),
                s =
                  (r.currentSlide,
                  r.disabled,
                  r.onClick,
                  r.step,
                  r.totalSlides,
                  r.visibleSlides,
                  r.infinite),
                o = ge(r, jT),
                a = ee([LT.buttonBack, "carousel__back-button", i]),
                l = t.setDisabled(
                  this.props.disabled,
                  this.props.currentSlide,
                  s
                );
              return N.createElement(
                "button",
                J(
                  {
                    type: "button",
                    "aria-label": "previous",
                    className: a,
                    onClick: this.handleOnClick,
                    disabled: l,
                  },
                  o
                ),
                this.props.children
              );
            },
          },
        ],
        [
          {
            key: "setDisabled",
            value: function (r, i, s) {
              return r !== null ? r : i === 0 && !s;
            },
          },
        ]
      ),
      t
    );
  })(N.Component);
W(lu, "propTypes", {
  carouselStore: x.object.isRequired,
  children: Ee.children.isRequired,
  className: x.string,
  currentSlide: x.number.isRequired,
  disabled: x.bool,
  onClick: x.func,
  step: x.number.isRequired,
  totalSlides: x.number.isRequired,
  visibleSlides: x.number.isRequired,
  infinite: x.bool,
}),
  W(lu, "defaultProps", {
    className: null,
    disabled: null,
    onClick: null,
    infinite: !1,
  });
var uu = Ig(function (e, t) {
  var n = {}.toString,
    r = typeof window < "u" ? window.Node : Function;
  e.exports = t = function (s) {
    var o = typeof s;
    if (o != "object") return o;
    if (((o = i[n.call(s)]), o == "object"))
      return s instanceof Map ? "map" : s instanceof Set ? "set" : "object";
    if (o) return o;
    if (s instanceof r)
      switch (s.nodeType) {
        case 1:
          return "element";
        case 3:
          return "text-node";
        case 9:
          return "document";
        case 11:
          return "document-fragment";
        default:
          return "dom-node";
      }
  };
  var i = (t.types = {
    "[object Function]": "function",
    "[object Date]": "date",
    "[object RegExp]": "regexp",
    "[object Arguments]": "arguments",
    "[object Array]": "array",
    "[object Set]": "set",
    "[object String]": "string",
    "[object Null]": "null",
    "[object Undefined]": "undefined",
    "[object Number]": "number",
    "[object Boolean]": "boolean",
    "[object Object]": "object",
    "[object Map]": "map",
    "[object Text]": "text-node",
    "[object Uint8Array]": "bit-array",
    "[object Uint16Array]": "bit-array",
    "[object Uint32Array]": "bit-array",
    "[object Uint8ClampedArray]": "bit-array",
    "[object Error]": "error",
    "[object FormData]": "form-data",
    "[object File]": "file",
    "[object Blob]": "blob",
  });
});
uu.types;
var $e = {};
($e.number = function (e, t) {
  return e !== e && t !== t;
}),
  ($e.function = function (e, t, n) {
    return (
      e.toString() === t.toString() &&
      $e.object(e, t, n) &&
      na(e.prototype, t.prototype)
    );
  }),
  ($e.date = function (e, t) {
    return +e == +t;
  }),
  ($e.regexp = function (e, t) {
    return e.toString() === t.toString();
  }),
  ($e.element = function (e, t) {
    return e.outerHTML === t.outerHTML;
  }),
  ($e.textnode = function (e, t) {
    return e.textContent === t.textContent;
  }),
  ($e.arguments = $e["bit-array"] = $e.array = Th(TT)),
  ($e.object = Th(kT));
var bh = na,
  DT = function (e) {
    return CT(e) && !ET(e);
  },
  IT = typeof Symbol == "function" && Symbol.for,
  VT = IT ? Symbol.for("react.element") : 60103;
Ri.all = function (e, t) {
  if (!Array.isArray(e)) throw new Error("first argument should be an array");
  return e.reduce(function (n, r) {
    return Ri(n, r, t);
  }, {});
};
var $s = Ri,
  Nc = N.createContext(),
  Ah = function e(t) {
    return (
      Object.freeze(t),
      Object.getOwnPropertyNames(t).forEach(function (n) {
        !t.hasOwnProperty(n) ||
          t[n] === null ||
          (typeof t[n] != "object" && typeof t[n] != "function") ||
          Object.isFrozen(t[n]) ||
          e(t[n]);
      }),
      t
    );
  },
  FT = { masterSpinnerFinished: !1 },
  zT = (function () {
    function e(t) {
      Ae(this, e),
        (this.state = Ah($s(FT, t))),
        (this.subscriptions = []),
        (this.masterSpinnerSubscriptions = {}),
        (this.setStoreState = this.setStoreState.bind(this)),
        (this.getStoreState = this.getStoreState.bind(this)),
        (this.subscribe = this.subscribe.bind(this)),
        (this.unsubscribe = this.unsubscribe.bind(this)),
        (this.updateSubscribers = this.updateSubscribers.bind(this)),
        (this.subscribeMasterSpinner = this.subscribeMasterSpinner.bind(this)),
        (this.unsubscribeMasterSpinner =
          this.unsubscribeMasterSpinner.bind(this)),
        (this.unsubscribeAllMasterSpinner =
          this.unsubscribeAllMasterSpinner.bind(this)),
        (this.masterSpinnerSuccess = this.masterSpinnerSuccess.bind(this)),
        (this.masterSpinnerError = this.masterSpinnerError.bind(this));
    }
    return (
      Oe(e, [
        {
          key: "setStoreState",
          value: function (t, n) {
            (this.state = Ah($s(this.state, t))), this.updateSubscribers(n);
          },
        },
        {
          key: "getStoreState",
          value: function () {
            return $s({}, this.state);
          },
        },
        {
          key: "subscribe",
          value: function (t) {
            this.subscriptions.push(t);
          },
        },
        {
          key: "unsubscribe",
          value: function (t) {
            var n = this.subscriptions.indexOf(t);
            n !== -1 && this.subscriptions.splice(n, 1);
          },
        },
        {
          key: "updateSubscribers",
          value: function (t) {
            this.subscriptions.forEach(function (n) {
              return n();
            }),
              typeof t == "function" && t(this.getStoreState());
          },
        },
        {
          key: "subscribeMasterSpinner",
          value: function (t) {
            Object.keys(this.masterSpinnerSubscriptions).indexOf(t) === -1 &&
              (this.masterSpinnerSubscriptions[t] = {
                success: !1,
                error: !1,
                complete: !1,
              });
          },
        },
        {
          key: "unsubscribeMasterSpinner",
          value: function (t) {
            return (
              Object.keys(this.masterSpinnerSubscriptions).indexOf(t) !== -1 &&
              (this.setMasterSpinnerFinished(),
              delete this.masterSpinnerSubscriptions[t])
            );
          },
        },
        {
          key: "unsubscribeAllMasterSpinner",
          value: function () {
            (this.masterSpinnerSubscriptions = {}),
              this.setMasterSpinnerFinished();
          },
        },
        {
          key: "masterSpinnerSuccess",
          value: function (t) {
            (this.masterSpinnerSubscriptions[t].success = !0),
              (this.masterSpinnerSubscriptions[t].complete = !0),
              this.setMasterSpinnerFinished();
          },
        },
        {
          key: "masterSpinnerError",
          value: function (t) {
            (this.masterSpinnerSubscriptions[t].error = !0),
              (this.masterSpinnerSubscriptions[t].complete = !0),
              this.setMasterSpinnerFinished();
          },
        },
        {
          key: "setMasterSpinnerFinished",
          value: function () {
            this.setStoreState({
              masterSpinnerFinished: this.isMasterSpinnerFinished(),
            });
          },
        },
        {
          key: "isMasterSpinnerFinished",
          value: function () {
            var t = this;
            return (
              Object.keys(this.masterSpinnerSubscriptions).filter(function (n) {
                return t.masterSpinnerSubscriptions[n].complete !== !0;
              }).length === 0
            );
          },
        },
      ]),
      e
    );
  })(),
  BT = [
    "children",
    "className",
    "currentSlide",
    "disableAnimation",
    "disableKeyboard",
    "hasMasterSpinner",
    "interval",
    "isPageScrollLocked",
    "isPlaying",
    "lockOnWindowScroll",
    "naturalSlideHeight",
    "naturalSlideWidth",
    "orientation",
    "playDirection",
    "step",
    "dragStep",
    "tag",
    "totalSlides",
    "touchEnabled",
    "dragEnabled",
    "visibleSlides",
    "infinite",
    "isIntrinsicHeight",
  ],
  gs,
  UT =
    ((gs = (function (e) {
      function t(r) {
        var i;
        if (
          (Ae(this, t),
          (i = n.call(this, r)),
          r.isIntrinsicHeight && r.orientation !== "horizontal")
        )
          throw Error(
            'isIntrinsicHeight can only be used in "horizontal" orientation. See Readme for more information.'
          );
        var s = {
          currentSlide: r.currentSlide,
          disableAnimation: r.disableAnimation,
          disableKeyboard: r.disableKeyboard,
          hasMasterSpinner: r.hasMasterSpinner,
          imageErrorCount: 0,
          imageSuccessCount: 0,
          interval: r.interval,
          isPageScrollLocked: r.isPageScrollLocked,
          isPlaying: r.isPlaying,
          lockOnWindowScroll: r.lockOnWindowScroll,
          masterSpinnerThreshold: 0,
          naturalSlideHeight: r.naturalSlideHeight,
          naturalSlideWidth: r.naturalSlideWidth,
          orientation: r.orientation,
          playDirection: r.playDirection,
          privateUnDisableAnimation: !1,
          slideSize: xh(r.totalSlides, r.visibleSlides),
          slideTraySize: Ph(r.totalSlides, r.visibleSlides),
          step: r.step,
          dragStep: r.dragStep,
          totalSlides: r.totalSlides,
          touchEnabled: r.touchEnabled,
          dragEnabled: r.dragEnabled,
          visibleSlides: r.visibleSlides,
          infinite: r.infinite,
          isIntrinsicHeight: r.isIntrinsicHeight,
        };
        return (i.carouselStore = new zT(s)), i;
      }
      Be(t, e);
      var n = Ue(t);
      return (
        Oe(t, [
          {
            key: "componentDidUpdate",
            value: function (r) {
              var i = this,
                s = {};
              [
                "currentSlide",
                "disableAnimation",
                "disableKeyboard",
                "hasMasterSpinner",
                "interval",
                "isPlaying",
                "naturalSlideHeight",
                "naturalSlideWidth",
                "lockOnWindowScroll",
                "orientation",
                "playDirection",
                "step",
                "dragStep",
                "totalSlides",
                "touchEnabled",
                "dragEnabled",
                "visibleSlides",
              ].forEach(function (o) {
                r[o] !== i.props[o] && (s[o] = i.props[o]);
              }),
                this.props.currentSlide !== r.currentSlide &&
                  !this.props.disableAnimation &&
                  ((s.disableAnimation = !0),
                  (s.privateUnDisableAnimation = !0)),
                (this.props.totalSlides === r.totalSlides &&
                  this.props.visibleSlides === r.visibleSlides) ||
                  ((s.slideSize = xh(
                    this.props.totalSlides,
                    this.props.visibleSlides
                  )),
                  (s.slideTraySize = Ph(
                    this.props.totalSlides,
                    this.props.visibleSlides
                  ))),
                this.carouselStore.state.currentSlide >=
                  this.props.totalSlides &&
                  (s.currentSlide = Math.max(this.props.totalSlides - 1, 0)),
                Object.keys(s).length > 0 &&
                  this.carouselStore.setStoreState(s);
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              this.carouselStore.unsubscribeAllMasterSpinner();
            },
          },
          {
            key: "getStore",
            value: function () {
              return this.carouselStore;
            },
          },
          {
            key: "render",
            value: function () {
              var r = this.props,
                i =
                  (r.children,
                  r.className,
                  r.currentSlide,
                  r.disableAnimation,
                  r.disableKeyboard,
                  r.hasMasterSpinner,
                  r.interval,
                  r.isPageScrollLocked,
                  r.isPlaying,
                  r.lockOnWindowScroll,
                  r.naturalSlideHeight,
                  r.naturalSlideWidth,
                  r.orientation,
                  r.playDirection,
                  r.step,
                  r.dragStep,
                  r.tag),
                s =
                  (r.totalSlides,
                  r.touchEnabled,
                  r.dragEnabled,
                  r.visibleSlides,
                  r.infinite,
                  r.isIntrinsicHeight,
                  ge(r, BT)),
                o = ee(["carousel", this.props.className]);
              return N.createElement(
                i,
                J({ className: o }, s),
                N.createElement(
                  Nc.Provider,
                  { value: this.carouselStore },
                  this.props.children
                )
              );
            },
          },
        ]),
        t
      );
    })(N.Component)),
    W(gs, "propTypes", {
      children: Ee.children.isRequired,
      className: x.string,
      currentSlide: x.number,
      disableAnimation: x.bool,
      disableKeyboard: x.bool,
      hasMasterSpinner: x.bool,
      interval: x.number,
      isPageScrollLocked: x.bool,
      isPlaying: x.bool,
      lockOnWindowScroll: x.bool,
      naturalSlideHeight: x.number.isRequired,
      naturalSlideWidth: x.number.isRequired,
      orientation: Ee.orientation,
      playDirection: Ee.direction,
      step: x.number,
      dragStep: x.number,
      tag: x.string,
      totalSlides: x.number.isRequired,
      touchEnabled: x.bool,
      dragEnabled: x.bool,
      visibleSlides: x.number,
      infinite: x.bool,
      isIntrinsicHeight: x.bool,
    }),
    W(gs, "defaultProps", {
      className: null,
      currentSlide: 0,
      disableAnimation: !1,
      disableKeyboard: !1,
      hasMasterSpinner: !1,
      interval: 5e3,
      isPageScrollLocked: !1,
      isPlaying: !1,
      lockOnWindowScroll: !1,
      orientation: "horizontal",
      playDirection: "forward",
      step: 1,
      dragStep: 1,
      tag: "div",
      touchEnabled: !0,
      dragEnabled: !0,
      visibleSlides: 1,
      infinite: !1,
      isIntrinsicHeight: !1,
    }),
    gs);
Nc.Consumer;
var WT = yt(lu, function (e) {
    return {
      currentSlide: e.currentSlide,
      step: e.step,
      totalSlides: e.totalSlides,
      visibleSlides: e.visibleSlides,
      infinite: e.infinite,
    };
  }),
  HT = { buttonFirst: "buttonFirst___2rhFr" },
  $T = [
    "carouselStore",
    "className",
    "currentSlide",
    "disabled",
    "onClick",
    "totalSlides",
  ],
  ys,
  KT =
    ((ys = (function (e) {
      function t() {
        var r;
        return (
          Ae(this, t),
          (r = n.call(this)),
          (r.handleOnClick = r.handleOnClick.bind(z(r))),
          r
        );
      }
      Be(t, e);
      var n = Ue(t);
      return (
        Oe(t, [
          {
            key: "handleOnClick",
            value: function (r) {
              var i = this.props,
                s = i.carouselStore,
                o = i.onClick;
              s.setStoreState(
                { currentSlide: 0, isPlaying: !1 },
                o !== null && o.call(this, r)
              );
            },
          },
          {
            key: "render",
            value: function () {
              var r = this.props,
                i = (r.carouselStore, r.className),
                s = r.currentSlide,
                o = r.disabled,
                a = (r.onClick, r.totalSlides, ge(r, $T)),
                l = ee([HT.buttonFirst, "carousel__first-button", i]),
                u = o !== null ? o : s === 0;
              return N.createElement(
                "button",
                J(
                  {
                    type: "button",
                    "aria-label": "first",
                    className: l,
                    onClick: this.handleOnClick,
                    disabled: u,
                  },
                  a
                ),
                this.props.children
              );
            },
          },
        ]),
        t
      );
    })(N.Component)),
    W(ys, "propTypes", {
      carouselStore: x.object.isRequired,
      children: Ee.children.isRequired,
      className: x.string,
      currentSlide: x.number.isRequired,
      disabled: x.bool,
      onClick: x.func,
      totalSlides: x.number.isRequired,
    }),
    W(ys, "defaultProps", { className: null, disabled: null, onClick: null }),
    ys);
yt(KT, function (e) {
  return { currentSlide: e.currentSlide, totalSlides: e.totalSlides };
});
var YT = { buttonNext: "buttonNext___2mOCa" },
  XT = [
    "carouselStore",
    "className",
    "currentSlide",
    "disabled",
    "onClick",
    "step",
    "totalSlides",
    "visibleSlides",
    "infinite",
  ],
  Ss,
  qT =
    ((Ss = (function (e) {
      function t(r) {
        var i;
        return (
          Ae(this, t),
          (i = n.call(this, r)),
          (i.handleOnClick = i.handleOnClick.bind(z(i))),
          i
        );
      }
      Be(t, e);
      var n = Ue(t);
      return (
        Oe(
          t,
          [
            {
              key: "handleOnClick",
              value: function (r) {
                var i = this.props,
                  s = i.currentSlide,
                  o = i.onClick,
                  a = i.step,
                  l = i.carouselStore,
                  u = i.infinite,
                  c = i.totalSlides - i.visibleSlides,
                  d = a + s,
                  f = Math.min(d, c);
                u && (f = c === s ? 0 : f),
                  l.setStoreState(
                    { currentSlide: f, isPlaying: !1 },
                    o !== null && o.call(this, r)
                  );
              },
            },
            {
              key: "render",
              value: function () {
                var r = this.props,
                  i = (r.carouselStore, r.className),
                  s = r.currentSlide,
                  o = r.disabled,
                  a = (r.onClick, r.step, r.totalSlides),
                  l = r.visibleSlides,
                  u = r.infinite,
                  c = ge(r, XT),
                  d = ee([YT.buttonNext, "carousel__next-button", i]),
                  f = t.setDisabled(o, s, l, a, u);
                return N.createElement(
                  "button",
                  J(
                    {
                      type: "button",
                      "aria-label": "next",
                      className: d,
                      onClick: this.handleOnClick,
                      disabled: f,
                    },
                    c
                  ),
                  this.props.children
                );
              },
            },
          ],
          [
            {
              key: "setDisabled",
              value: function (r, i, s, o, a) {
                return r !== null ? r : i >= o - s && !a;
              },
            },
          ]
        ),
        t
      );
    })(N.PureComponent)),
    W(Ss, "propTypes", {
      carouselStore: x.object.isRequired,
      children: Ee.children.isRequired,
      className: x.string,
      currentSlide: x.number.isRequired,
      disabled: x.bool,
      onClick: x.func,
      step: x.number.isRequired,
      totalSlides: x.number.isRequired,
      visibleSlides: x.number.isRequired,
      infinite: x.bool,
    }),
    W(Ss, "defaultProps", {
      className: null,
      disabled: null,
      onClick: null,
      infinite: !1,
    }),
    Ss),
  GT = yt(qT, function (e) {
    return {
      currentSlide: e.currentSlide,
      step: e.step,
      totalSlides: e.totalSlides,
      visibleSlides: e.visibleSlides,
      infinite: e.infinite,
    };
  }),
  QT = { buttonLast: "buttonLast___2yuh0" },
  ZT = [
    "carouselStore",
    "className",
    "currentSlide",
    "disabled",
    "onClick",
    "totalSlides",
    "visibleSlides",
  ],
  ws,
  JT =
    ((ws = (function (e) {
      function t() {
        var r;
        return (
          Ae(this, t),
          (r = n.call(this)),
          (r.handleOnClick = r.handleOnClick.bind(z(r))),
          r
        );
      }
      Be(t, e);
      var n = Ue(t);
      return (
        Oe(t, [
          {
            key: "handleOnClick",
            value: function (r) {
              var i = this.props,
                s = i.carouselStore,
                o = i.onClick,
                a = i.totalSlides,
                l = i.visibleSlides;
              s.setStoreState(
                { currentSlide: a - l, isPlaying: !1 },
                o !== null && o.call(this, r)
              );
            },
          },
          {
            key: "render",
            value: function () {
              var r = this.props,
                i = (r.carouselStore, r.className),
                s = r.currentSlide,
                o = r.disabled,
                a = (r.onClick, r.totalSlides),
                l = r.visibleSlides,
                u = ge(r, ZT),
                c = ee([QT.buttonLast, "carousel__last-button", i]),
                d = o !== null ? o : s >= a - l;
              return N.createElement(
                "button",
                J(
                  {
                    type: "button",
                    "aria-label": "last",
                    className: c,
                    onClick: this.handleOnClick,
                    disabled: d,
                  },
                  u
                ),
                this.props.children
              );
            },
          },
        ]),
        t
      );
    })(N.Component)),
    W(ws, "propTypes", {
      carouselStore: x.object.isRequired,
      children: Ee.children.isRequired,
      className: x.string,
      currentSlide: x.number.isRequired,
      disabled: x.bool,
      onClick: x.func,
      totalSlides: x.number.isRequired,
      visibleSlides: x.number.isRequired,
    }),
    W(ws, "defaultProps", { className: null, disabled: null, onClick: null }),
    ws);
yt(JT, function (e) {
  return {
    currentSlide: e.currentSlide,
    totalSlides: e.totalSlides,
    visibleSlides: e.visibleSlides,
  };
});
var ek = { buttonNext: "buttonNext___3Lm3s" },
  tk = [
    "carouselStore",
    "children",
    "childrenPaused",
    "childrenPlaying",
    "className",
    "isPlaying",
    "onClick",
  ],
  xs,
  nk =
    ((xs = (function (e) {
      function t(r) {
        var i;
        return (
          Ae(this, t),
          (i = n.call(this, r)),
          (i.handleOnClick = i.handleOnClick.bind(z(i))),
          i
        );
      }
      Be(t, e);
      var n = Ue(t);
      return (
        Oe(t, [
          {
            key: "handleOnClick",
            value: function (r) {
              var i = this.props.onClick;
              this.props.carouselStore.setStoreState(
                { isPlaying: !this.props.isPlaying },
                i !== null && i.call(this, r)
              );
            },
          },
          {
            key: "render",
            value: function () {
              var r = this.props,
                i = (r.carouselStore, r.children, r.childrenPaused),
                s = r.childrenPlaying,
                o = r.className,
                a = r.isPlaying,
                l = (r.onClick, ge(r, tk)),
                u = ee([ek.buttonNext, "carousel__play-button", o]);
              return N.createElement(
                "button",
                J(
                  {
                    type: "button",
                    "aria-label": "play",
                    className: u,
                    onClick: this.handleOnClick,
                  },
                  l
                ),
                a && s,
                !a && i,
                this.props.children
              );
            },
          },
        ]),
        t
      );
    })(N.PureComponent)),
    W(xs, "propTypes", {
      carouselStore: x.object.isRequired,
      children: x.node,
      childrenPaused: x.node,
      childrenPlaying: x.node,
      className: x.string,
      isPlaying: x.bool.isRequired,
      onClick: x.func,
    }),
    W(xs, "defaultProps", {
      children: null,
      childrenPaused: null,
      childrenPlaying: null,
      className: null,
      onClick: null,
    }),
    xs);
yt(nk, function (e) {
  return { isPlaying: e.isPlaying };
});
var Oh = { dot: "dot___3c3SI" },
  rk = [
    "carouselStore",
    "children",
    "className",
    "currentSlide",
    "disabled",
    "onClick",
    "selected",
    "slide",
    "totalSlides",
    "visibleSlides",
  ],
  Ps,
  ik =
    ((Ps = (function (e) {
      function t(r) {
        var i;
        return (
          Ae(this, t),
          (i = n.call(this, r)),
          (i.handleOnClick = i.handleOnClick.bind(z(i))),
          i
        );
      }
      Be(t, e);
      var n = Ue(t);
      return (
        Oe(t, [
          {
            key: "handleOnClick",
            value: function (r) {
              var i = this.props,
                s = i.carouselStore,
                o = i.onClick,
                a = i.slide,
                l = i.totalSlides,
                u = i.visibleSlides,
                c = a >= l - u ? l - u : a;
              s.setStoreState(
                { currentSlide: c, isPlaying: !1 },
                o !== null && o.call(this, r)
              );
            },
          },
          {
            key: "render",
            value: function () {
              var r = this.props,
                i = (r.carouselStore, r.children, r.className),
                s = r.currentSlide,
                o = r.disabled,
                a = (r.onClick, r.selected),
                l = r.slide,
                u = (r.totalSlides, r.visibleSlides),
                c = ge(r, rk),
                d = l >= s && l < s + u,
                f = typeof a == "boolean" ? a : d,
                v = d === !0,
                y = typeof o == "boolean" ? o : v,
                w = ee([
                  Oh.dot,
                  f && Oh.dotSelected,
                  "carousel__dot",
                  "carousel__dot--".concat(l),
                  f && "carousel__dot--selected",
                  i,
                ]);
              return N.createElement(
                "button",
                J(
                  {
                    "aria-label": "slide dot",
                    type: "button",
                    onClick: this.handleOnClick,
                    className: w,
                    disabled: y,
                  },
                  c
                ),
                this.props.children
              );
            },
          },
        ]),
        t
      );
    })(N.Component)),
    W(Ps, "propTypes", {
      carouselStore: x.object.isRequired,
      children: Ee.children,
      className: x.string,
      currentSlide: x.number.isRequired,
      disabled: x.bool,
      onClick: x.func,
      selected: x.bool,
      slide: x.number.isRequired,
      totalSlides: x.number.isRequired,
      visibleSlides: x.number.isRequired,
    }),
    W(Ps, "defaultProps", {
      children: null,
      className: null,
      disabled: null,
      onClick: null,
      selected: null,
    }),
    Ps),
  sk = yt(ik, function (e) {
    return {
      currentSlide: e.currentSlide,
      totalSlides: e.totalSlides,
      visibleSlides: e.visibleSlides,
    };
  }),
  ok = {},
  ak = ["renderDots"],
  lk = [
    "carouselStore",
    "children",
    "className",
    "currentSlide",
    "dotNumbers",
    "totalSlides",
    "visibleSlides",
    "disableActiveDots",
    "showAsSelectedForCurrentSlideOnly",
    "renderDots",
  ],
  Ts,
  uk =
    ((Ts = (function (e) {
      function t() {
        return Ae(this, t), n.apply(this, arguments);
      }
      Be(t, e);
      var n = Ue(t);
      return (
        Oe(t, [
          {
            key: "renderDots",
            value: function () {
              var r = this.props,
                i = r.currentSlide,
                s = r.totalSlides,
                o = r.visibleSlides,
                a = r.disableActiveDots,
                l = r.showAsSelectedForCurrentSlideOnly,
                u = r.renderDots;
              if (u) {
                var c = this.props;
                return c.renderDots, u(ge(c, ak));
              }
              for (var d = [], f = 0; f < s; f += 1) {
                var v = f >= i && f < i + o,
                  y = f === i,
                  w = l ? y : v,
                  k = f >= s - o ? s - o : f;
                d.push(
                  N.createElement(
                    sk,
                    { key: f, slide: k, selected: w, disabled: !!a && w },
                    N.createElement(
                      "span",
                      { className: ee["carousel__dot-group-dot"] },
                      this.props.dotNumbers && f + 1
                    )
                  )
                );
              }
              return d;
            },
          },
          {
            key: "render",
            value: function () {
              var r = this.props,
                i = (r.carouselStore, r.children),
                s = r.className,
                o =
                  (r.currentSlide,
                  r.dotNumbers,
                  r.totalSlides,
                  r.visibleSlides,
                  r.disableActiveDots,
                  r.showAsSelectedForCurrentSlideOnly,
                  r.renderDots,
                  ge(r, lk)),
                a = ee([ok.DotGroup, "carousel__dot-group", s]);
              return N.createElement(
                "div",
                J({ className: a }, o),
                this.renderDots(),
                i
              );
            },
          },
        ]),
        t
      );
    })(N.Component)),
    W(Ts, "propTypes", {
      children: Ee.children,
      className: x.string,
      currentSlide: x.number.isRequired,
      carouselStore: x.object.isRequired,
      totalSlides: x.number.isRequired,
      visibleSlides: x.number.isRequired,
      dotNumbers: x.bool,
      disableActiveDots: x.bool,
      showAsSelectedForCurrentSlideOnly: x.bool,
      renderDots: x.func,
    }),
    W(Ts, "defaultProps", {
      children: null,
      className: null,
      dotNumbers: !1,
      disableActiveDots: !0,
      showAsSelectedForCurrentSlideOnly: !1,
      renderDots: null,
    }),
    Ts);
yt(uk, function (e) {
  return {
    currentSlide: e.currentSlide,
    totalSlides: e.totalSlides,
    visibleSlides: e.visibleSlides,
  };
});
var zr = { image: "image___xtQGH" },
  ck = ["src", "alt"],
  dk = [
    "carouselStore",
    "children",
    "className",
    "hasMasterSpinner",
    "isBgImage",
    "onError",
    "onLoad",
    "renderError",
    "renderLoading",
    "style",
    "tag",
  ],
  cu = (function (e) {
    function t(r) {
      var i;
      return (
        Ae(this, t),
        (i = n.call(this, r)),
        (i.state = { imageStatus: $a }),
        (i.handleImageLoad = i.handleImageLoad.bind(z(i))),
        (i.handleImageError = i.handleImageError.bind(z(i))),
        (i.image = null),
        i
      );
    }
    Be(t, e);
    var n = Ue(t);
    return (
      Oe(
        t,
        [
          {
            key: "componentDidMount",
            value: function () {
              t.subscribeMasterSpinner(this.props), this.initImage();
            },
          },
          {
            key: "componentDidUpdate",
            value: function (r) {
              r.src !== this.props.src &&
                (t.unsubscribeMasterSpinner(r),
                t.subscribeMasterSpinner(this.props),
                this.initImage());
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              t.unsubscribeMasterSpinner(this.props),
                this.image.removeEventListener("load", this.handleImageLoad),
                this.image.removeEventListener("error", this.handleImageError),
                (this.image = null);
            },
          },
          {
            key: "initImage",
            value: function () {
              if (
                (this.setState({ imageStatus: $a }),
                (this.image = document.createElement("img")),
                this.image.addEventListener("load", this.handleImageLoad, !1),
                this.image.addEventListener("error", this.handleImageError, !1),
                (this.image.src = this.props.src),
                this.image.readyState || this.image.complete)
              ) {
                var r = this.image.src;
                (this.image.src =
                  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="),
                  (this.image.src = r);
              }
            },
          },
          {
            key: "handleImageLoad",
            value: function (r) {
              this.setState({ imageStatus: Ch }),
                this.props.hasMasterSpinner &&
                  this.props.carouselStore.masterSpinnerSuccess(this.props.src),
                this.props.onLoad && this.props.onLoad(r);
            },
          },
          {
            key: "handleImageError",
            value: function (r) {
              this.setState({ imageStatus: Eh }),
                this.props.hasMasterSpinner &&
                  this.props.carouselStore.masterSpinnerError(this.props.src),
                this.props.onError && this.props.onError(r);
            },
          },
          {
            key: "tempTag",
            value: function () {
              return this.props.tag === "img" ? "div" : this.props.tag;
            },
          },
          {
            key: "customRender",
            value: function (r) {
              return typeof this.props[r] == "function"
                ? this.props[r]()
                : this.props.children;
            },
          },
          {
            key: "renderLoading",
            value: function (r) {
              var i = this.tempTag(),
                s = ee([
                  zr.image,
                  zr.imageLoading,
                  "carousel__image",
                  this.props.isBgImage && "carousel__image--with-background",
                  "carousel__image--loading",
                  this.props.className,
                ]);
              return N.createElement(
                i,
                J({ className: s }, r),
                this.customRender("renderLoading")
              );
            },
          },
          {
            key: "renderError",
            value: function (r) {
              var i = this.tempTag(),
                s = ee([
                  zr.image,
                  zr.imageError,
                  "carousel__image",
                  this.props.isBgImage && "carousel__image--with-background",
                  "carousel__image--error",
                  this.props.className,
                ]);
              return N.createElement(
                i,
                J({ className: s }, r),
                this.customRender("renderError")
              );
            },
          },
          {
            key: "renderSuccess",
            value: function (r) {
              var i = this.props,
                s = i.style,
                o = i.tag,
                a = ee([
                  zr.image,
                  "carousel__image",
                  this.props.isBgImage && "carousel__image--with-background",
                  "carousel__image--success",
                  this.props.className,
                ]),
                l = J({}, s),
                u = r;
              if (o !== "img") {
                var c = r.src;
                r.alt,
                  (u = ge(r, ck)),
                  (l = J({}, s, {
                    backgroundImage: 'url("'.concat(c, '")'),
                    backgroundSize: "cover",
                  }));
              }
              return N.createElement(
                o,
                J({ className: a, style: l }, u),
                this.props.children
              );
            },
          },
          {
            key: "render",
            value: function () {
              var r = this.props,
                i =
                  (r.carouselStore,
                  r.children,
                  r.className,
                  r.hasMasterSpinner,
                  r.isBgImage,
                  r.onError,
                  r.onLoad,
                  r.renderError,
                  r.renderLoading,
                  r.style,
                  r.tag,
                  ge(r, dk));
              switch (this.state.imageStatus) {
                case $a:
                  return this.renderLoading(i);
                case Ch:
                  return this.renderSuccess(i);
                case Eh:
                  return this.renderError(i);
                default:
                  throw new Error("unknown value for this.state.imageStatus");
              }
            },
          },
        ],
        [
          {
            key: "subscribeMasterSpinner",
            value: function (r) {
              r.hasMasterSpinner &&
                r.carouselStore.subscribeMasterSpinner(r.src);
            },
          },
          {
            key: "unsubscribeMasterSpinner",
            value: function (r) {
              r.hasMasterSpinner &&
                r.carouselStore.unsubscribeMasterSpinner(r.src);
            },
          },
        ]
      ),
      t
    );
  })(N.Component);
W(cu, "propTypes", {
  alt: x.string,
  carouselStore: x.object.isRequired,
  children: Ee.children,
  className: x.string,
  hasMasterSpinner: x.bool.isRequired,
  isBgImage: Ee.isBgImage,
  onError: x.func,
  onLoad: x.func,
  renderError: x.func,
  renderLoading: x.func,
  src: x.string.isRequired,
  style: x.object,
  tag: x.string,
}),
  W(cu, "defaultProps", {
    alt: "",
    children: null,
    className: null,
    isBgImage: !1,
    onError: null,
    onLoad: null,
    renderError: null,
    renderLoading: null,
    style: null,
    tag: "img",
  });
var _h = yt(cu, function (e) {
    return { hasMasterSpinner: e.hasMasterSpinner, orientation: e.orientation };
  }),
  fk = { spinner: "spinner___27VUp", spin: "spin___S3UuE" },
  hk = ["className"],
  ks,
  zg =
    ((ks = (function (e) {
      function t() {
        return Ae(this, t), n.apply(this, arguments);
      }
      Be(t, e);
      var n = Ue(t);
      return (
        Oe(t, [
          {
            key: "render",
            value: function () {
              var r = this.props,
                i = r.className,
                s = ge(r, hk),
                o = ee([fk.spinner, "carousel__spinner", i]);
              return N.createElement("div", J({ className: o }, s));
            },
          },
        ]),
        t
      );
    })(N.PureComponent)),
    W(ks, "propTypes", { className: x.string }),
    W(ks, "defaultProps", { className: null }),
    ks),
  Kn = {
    container: "container___2O72F",
    overlay: "overlay___IV4qY",
    hover: "hover___MYy31",
    zoom: "zoom___3kqYk",
    loading: "loading___1pvNI",
    imageLoadingSpinnerContainer: "imageLoadingSpinnerContainer___3UIPD",
  },
  pk = [
    "alt",
    "bgImageProps",
    "bgImageTag",
    "carouselStore",
    "className",
    "imageClassName",
    "overlayClassName",
    "isPinchZoomEnabled",
    "spinner",
    "src",
    "srcZoomed",
    "tag",
  ],
  Cs,
  mk = 2,
  vk = 3,
  gk =
    ((Cs = (function (e) {
      function t(r) {
        var i;
        return (
          Ae(this, t),
          (i = n.call(this, r)),
          (i.state = {
            isImageLoading: !0,
            isHovering: !1,
            isZooming: !1,
            x: null,
            y: null,
            scale: 1,
          }),
          (i.tpCache = {}),
          (i.handleImageComplete = i.handleImageComplete.bind(z(i))),
          (i.handleOnMouseMove = i.handleOnMouseMove.bind(z(i))),
          (i.handleOnMouseOut = i.handleOnMouseOut.bind(z(i))),
          (i.handleOnMouseOver = i.handleOnMouseOver.bind(z(i))),
          (i.handleOnTouchEnd = i.handleOnTouchEnd.bind(z(i))),
          (i.handleOnTouchMove = i.handleOnTouchMove.bind(z(i))),
          (i.handleOnTouchStart = i.handleOnTouchStart.bind(z(i))),
          i
        );
      }
      Be(t, e);
      var n = Ue(t);
      return (
        Oe(
          t,
          [
            {
              key: "componentDidUpdate",
              value: function (r, i) {
                i.isZooming === !1 &&
                  this.state.isZooming === !0 &&
                  this.props.carouselStore.setStoreState({
                    isPageScrollLocked: !0,
                  }),
                  i.isZooming === !0 &&
                    this.state.isZooming === !1 &&
                    this.props.carouselStore.setStoreState({
                      isPageScrollLocked: !1,
                    });
              },
            },
            {
              key: "handleImageComplete",
              value: function () {
                this.setState({ isImageLoading: !1 });
              },
            },
            {
              key: "handleOnMouseOver",
              value: function () {
                this.state.isZooming ||
                  this.setState({ isHovering: !0, scale: mk });
              },
            },
            {
              key: "handleOnMouseOut",
              value: function () {
                this.state.isZooming ||
                  this.setState({ isHovering: !1, scale: 1 });
              },
            },
            {
              key: "handleOnMouseMove",
              value: function (r) {
                if (!this.state.isZooming) {
                  var i = Xe(
                      (r.nativeEvent.offsetX / r.target.offsetWidth) * 100
                    ),
                    s = Xe(
                      (r.nativeEvent.offsetY / r.target.offsetHeight) * 100
                    );
                  this.setState({ x: i, y: s });
                }
              },
            },
            {
              key: "handleOnTouchStart",
              value: function (r) {
                var i = this;
                this.props.isPinchZoomEnabled &&
                  (Ha(r.targetTouches).forEach(function (s) {
                    i.tpCache[s.identifier] = {
                      clientX: s.clientX,
                      clientY: s.clientY,
                    };
                  }),
                  this.setState(function (s) {
                    return {
                      isZooming:
                        s.isZooming || Object.keys(i.tpCache).length > 1,
                    };
                  }));
              },
            },
            {
              key: "handleOnTouchMove",
              value: function (r) {
                var i = this;
                if (this.state.isZooming) {
                  r.persist();
                  var s = Ha(r.targetTouches)
                    .filter(function (k) {
                      return i.tpCache[k.identifier];
                    })
                    .slice(0, 2);
                  if (s.length === 2) {
                    r.stopPropagation();
                    var o = r.target.getBoundingClientRect(),
                      a = s[0].identifier,
                      l = s[1].identifier,
                      u = {
                        x1: this.tpCache[a].clientX,
                        y1: this.tpCache[a].clientY,
                        x2: this.tpCache[l].clientX,
                        y2: this.tpCache[l].clientY,
                      };
                    u.distance = t.distanceBetweenTwoTouches(cr({}, u));
                    var c = t.midpointBetweenTwoTouches(cr({}, u));
                    (u.cx = c.x), (u.cy = c.y);
                    var d = {
                      x1: s[0].clientX,
                      y1: s[0].clientY,
                      x2: s[1].clientX,
                      y2: s[1].clientY,
                    };
                    d.distance = t.distanceBetweenTwoTouches(cr({}, d));
                    var f = t.midpointBetweenTwoTouches(cr({}, d));
                    (d.cx = f.x), (d.cy = f.y);
                    var v = Xe(
                        Hs({
                          min: 0,
                          max: 100,
                          x: ((d.cx - o.left) / o.width) * 100,
                        })
                      ),
                      y = Xe(
                        Hs({
                          min: 0,
                          max: 100,
                          x: ((d.cy - o.top) / o.height) * 100,
                        })
                      ),
                      w = function (k) {
                        return Hs({
                          min: 1,
                          max: vk,
                          x: k.scale + (d.distance - u.distance) / 100,
                        });
                      };
                    this.setState(function (k) {
                      return { isZooming: w(k) !== 1, scale: w(k), x: v, y };
                    });
                  }
                }
              },
            },
            {
              key: "handleOnTouchEnd",
              value: function (r) {
                var i = this;
                this.props.isPinchZoomEnabled &&
                  (Ha(r.changedTouches).forEach(function (s) {
                    delete i.tpCache[s.identifier];
                  }),
                  Object.keys(this.tpCache).length === 0 &&
                    this.setState({ isZooming: !1 }));
              },
            },
            {
              key: "renderLoading",
              value: function () {
                if (this.state.isImageLoading) {
                  var r = this.props.spinner;
                  return N.createElement(
                    "div",
                    {
                      className: ee([
                        Kn.imageLoadingSpinnerContainer,
                        "carousel__image-loading-spinner-container",
                      ]),
                    },
                    r && r(),
                    !r && N.createElement(zg, null)
                  );
                }
                return null;
              },
            },
            {
              key: "render",
              value: function () {
                var r = this.props,
                  i = r.alt,
                  s = r.bgImageProps,
                  o = r.bgImageTag,
                  a = (r.carouselStore, r.className),
                  l = r.imageClassName,
                  u = r.overlayClassName,
                  c = (r.isPinchZoomEnabled, r.spinner, r.src),
                  d = r.srcZoomed,
                  f = r.tag,
                  v = ge(r, pk),
                  y = ee([Kn.container, a]),
                  w = ee([Kn.image, "carousel__zoom-image", l]),
                  k = ee([
                    Kn.overlay,
                    "carousel__zoom-image-overlay",
                    this.state.isHovering && Kn.hover,
                    this.state.isZooming && Kn.zoom,
                    this.state.isHovering &&
                      "carousel__zoom-image-overlay--hovering",
                    this.state.isZooming &&
                      "carousel__zoom-image-overlay--zooming",
                    u,
                  ]),
                  m = {};
                return (
                  (this.state.isHovering || this.state.isZooming) &&
                    ((m.transformOrigin = ""
                      .concat(this.state.x, " ")
                      .concat(this.state.y)),
                    (m.transform = "scale(".concat(this.state.scale, ")"))),
                  N.createElement(
                    f,
                    J({ className: y }, v),
                    N.createElement(
                      _h,
                      J(
                        {
                          alt: i,
                          className: w,
                          tag: o,
                          src: c,
                          onLoad: this.handleImageComplete,
                          onError: this.handleImageComplete,
                        },
                        s
                      )
                    ),
                    N.createElement(_h, {
                      className: k,
                      tag: "div",
                      src: d || c,
                      style: m,
                      isBgImage: !0,
                      onFocus: this.handleOnMouseOver,
                      onMouseOver: this.handleOnMouseOver,
                      onBlur: this.handleOnMouseOut,
                      onMouseOut: this.handleOnMouseOut,
                      onMouseMove: this.handleOnMouseMove,
                      onTouchStart: this.handleOnTouchStart,
                      onTouchEnd: this.handleOnTouchEnd,
                      onTouchMove: this.handleOnTouchMove,
                    }),
                    this.renderLoading()
                  )
                );
              },
            },
          ],
          [
            {
              key: "midpointBetweenTwoTouches",
              value: function (r) {
                var i = r.x1,
                  s = r.y1;
                return { x: (i + r.x2) / 2, y: (s + r.y2) / 2 };
              },
            },
            {
              key: "distanceBetweenTwoTouches",
              value: function (r) {
                var i = r.x1,
                  s = r.y1,
                  o = r.x2,
                  a = r.y2;
                return Math.sqrt(Math.pow(o - i, 2) + Math.pow(a - s, 2));
              },
            },
          ]
        ),
        t
      );
    })(N.Component)),
    W(Cs, "propTypes", {
      alt: x.string,
      bgImageProps: x.object,
      bgImageTag: x.string,
      carouselStore: x.object.isRequired,
      className: x.string,
      imageClassName: x.string,
      overlayClassName: x.string,
      spinner: x.func,
      src: x.string.isRequired,
      srcZoomed: x.string,
      tag: x.string,
      isPinchZoomEnabled: x.bool,
    }),
    W(Cs, "defaultProps", {
      alt: void 0,
      bgImageProps: {},
      bgImageTag: "div",
      className: null,
      imageClassName: null,
      overlayClassName: null,
      isPinchZoomEnabled: !0,
      spinner: null,
      srcZoomed: null,
      tag: "div",
    }),
    Cs);
yt(gk, function () {
  return {};
});
var Es = {
    slide: "slide___3-Nqo",
    slideHorizontal: "slideHorizontal___1NzNV",
    slideInner: "slideInner___2mfX9",
    focusRing: "focusRing___1airF",
  },
  yk = [
    "ariaLabel",
    "carouselStore",
    "children",
    "className",
    "classNameHidden",
    "classNameVisible",
    "currentSlide",
    "index",
    "innerClassName",
    "innerTag",
    "naturalSlideHeight",
    "naturalSlideWidth",
    "onBlur",
    "onFocus",
    "orientation",
    "slideSize",
    "style",
    "tabIndex",
    "tag",
    "totalSlides",
    "visibleSlides",
    "isIntrinsicHeight",
  ],
  bs,
  Sk =
    ((bs = (function (e) {
      function t(r) {
        var i;
        return (
          Ae(this, t),
          (i = n.call(this, r)),
          (i.handleOnFocus = i.handleOnFocus.bind(z(i))),
          (i.handleOnBlur = i.handleOnBlur.bind(z(i))),
          (i.state = { focused: !1 }),
          i
        );
      }
      Be(t, e);
      var n = Ue(t);
      return (
        Oe(t, [
          {
            key: "isVisible",
            value: function () {
              var r = this.props,
                i = r.currentSlide,
                s = r.index,
                o = r.visibleSlides;
              return s >= i && s < i + o;
            },
          },
          {
            key: "handleOnFocus",
            value: function (r) {
              var i = this,
                s = this.props.onFocus;
              this.setState({ focused: !0 }, function () {
                s !== null && s.call(i, r);
              });
            },
          },
          {
            key: "handleOnBlur",
            value: function (r) {
              var i = this,
                s = this.props.onBlur;
              this.setState({ focused: !1 }, function () {
                s !== null && s.call(i, r);
              });
            },
          },
          {
            key: "renderFocusRing",
            value: function () {
              return this.state.focused
                ? N.createElement("div", {
                    className: [
                      Es.focusRing,
                      "carousel__slide-focus-ring",
                    ].join(" "),
                  })
                : null;
            },
          },
          {
            key: "render",
            value: function () {
              var r = this,
                i = this.props,
                s = i.ariaLabel,
                o = (i.carouselStore, i.children, i.className),
                a = i.classNameHidden,
                l = i.classNameVisible,
                u = (i.currentSlide, i.index, i.innerClassName),
                c = i.innerTag,
                d = i.naturalSlideHeight,
                f = i.naturalSlideWidth,
                v = (i.onBlur, i.onFocus, i.orientation),
                y = i.slideSize,
                w = i.style,
                k = i.tabIndex,
                m = i.tag,
                h = i.totalSlides,
                p = (i.visibleSlides, i.isIntrinsicHeight),
                S = ge(i, yk),
                P = {};
              v === "horizontal"
                ? ((P.width = Xe(y)),
                  (P.paddingBottom = Xe((100 * d) / (f * h))))
                : ((P.width = Xe(100)), (P.paddingBottom = Xe((100 * d) / f)));
              var C = {};
              p &&
                (v === "horizontal"
                  ? (P.height = "unset")
                  : (P.width = "unset"),
                (P.paddingBottom = "unset"),
                (C.position = "unset"));
              var b = J({}, P, w),
                T = this.isVisible(),
                L = ee([
                  Es.slide,
                  v === "horizontal" && Es.slideHorizontal,
                  "carousel__slide",
                  this.state.focused && "carousel__slide--focused",
                  T && l,
                  T && "carousel__slide--visible",
                  !T && a,
                  !T && "carousel__slide--hidden",
                  o,
                ]),
                M = ee([Es.slideInner, "carousel__inner-slide", u]),
                B = this.isVisible() ? 0 : -1,
                We = typeof k == "number" ? k : B;
              return N.createElement(
                m,
                J(
                  {
                    ref: function (He) {
                      r.tagRef = He;
                    },
                    tabIndex: We,
                    "aria-selected": this.isVisible(),
                    "aria-label": s,
                    role: "option",
                    onFocus: this.handleOnFocus,
                    onBlur: this.handleOnBlur,
                    className: L,
                    style: b,
                  },
                  S
                ),
                N.createElement(
                  c,
                  {
                    ref: function (He) {
                      r.innerTagRef = He;
                    },
                    className: M,
                    style: C,
                  },
                  this.props.children,
                  this.renderFocusRing()
                )
              );
            },
          },
        ]),
        t
      );
    })(N.PureComponent)),
    W(bs, "propTypes", {
      ariaLabel: x.string,
      carouselStore: x.object,
      children: Ee.children,
      className: x.string,
      classNameHidden: x.string,
      classNameVisible: x.string,
      currentSlide: x.number.isRequired,
      index: x.number.isRequired,
      innerClassName: x.string,
      innerTag: x.string,
      naturalSlideHeight: x.number.isRequired,
      naturalSlideWidth: x.number.isRequired,
      onBlur: x.func,
      onFocus: x.func,
      orientation: Ee.orientation.isRequired,
      slideSize: x.number.isRequired,
      style: x.object,
      tabIndex: x.number,
      tag: x.string,
      totalSlides: x.number.isRequired,
      visibleSlides: x.number.isRequired,
      isIntrinsicHeight: x.bool,
    }),
    W(bs, "defaultProps", {
      ariaLabel: "slide",
      carouselStore: null,
      children: null,
      className: null,
      classNameHidden: null,
      classNameVisible: null,
      innerClassName: null,
      innerTag: "div",
      onBlur: null,
      onFocus: null,
      style: {},
      tabIndex: null,
      tag: "div",
      isIntrinsicHeight: !1,
    }),
    bs),
  Ka = yt(Sk, function (e) {
    return {
      currentSlide: e.currentSlide,
      naturalSlideHeight: e.naturalSlideHeight,
      naturalSlideWidth: e.naturalSlideWidth,
      orientation: e.orientation,
      slideSize: e.slideSize,
      totalSlides: e.totalSlides,
      visibleSlides: e.visibleSlides,
      isIntrinsicHeight: e.isIntrinsicHeight,
    };
  }),
  wk = (function () {
    function e() {
      Ae(this, e);
    }
    return (
      Oe(
        e,
        [
          {
            key: "parents",
            value: function (t, n) {
              return t.parentNode === null
                ? n
                : this.parents(t.parentNode, n.concat([t]));
            },
          },
          {
            key: "scrollParent",
            value: function (t) {
              for (
                var n = this.parents(t.parentNode, []), r = 0;
                r < n.length;
                r += 1
              )
                if (e.scroll(n[r])) return n[r];
              return document.scrollingElement || document.documentElement;
            },
          },
          {
            key: "getScrollParent",
            value: function (t) {
              return e.isNodeValid(t) ? this.scrollParent(t) : null;
            },
          },
        ],
        [
          {
            key: "style",
            value: function (t, n) {
              return getComputedStyle(t, null).getPropertyValue(n);
            },
          },
          {
            key: "overflow",
            value: function (t) {
              return (
                e.style(t, "overflow") +
                e.style(t, "overflow-y") +
                e.style(t, "overflow-x")
              );
            },
          },
          {
            key: "scroll",
            value: function (t) {
              return /(auto|scroll)/.test(e.overflow(t));
            },
          },
          {
            key: "isNodeValid",
            value: function (t) {
              return t instanceof HTMLElement || t instanceof SVGElement;
            },
          },
        ]
      ),
      e
    );
  })(),
  wt = {
    horizontalSlider: "horizontalSlider___281Ls",
    horizontalSliderTray: "horizontalSliderTray___1L-0W",
    verticalSlider: "verticalSlider___34ZFD",
    verticalSliderTray: "verticalSliderTray___267D8",
    verticalTray: "verticalTray___12Key",
    verticalSlideTrayWrap: "verticalSlideTrayWrap___2nO7o",
    sliderTray: "sliderTray___-vHFQ",
    sliderAnimation: "sliderAnimation___300FY",
    masterSpinnerContainer: "masterSpinnerContainer___1Z6hB",
  },
  xk = [
    "ariaLabel",
    "carouselStore",
    "children",
    "className",
    "classNameAnimation",
    "classNameTray",
    "classNameTrayWrap",
    "currentSlide",
    "disableAnimation",
    "disableKeyboard",
    "dragEnabled",
    "hasMasterSpinner",
    "interval",
    "isPageScrollLocked",
    "isPlaying",
    "lockOnWindowScroll",
    "masterSpinnerFinished",
    "moveThreshold",
    "naturalSlideHeight",
    "naturalSlideWidth",
    "onMasterSpinner",
    "orientation",
    "playDirection",
    "privateUnDisableAnimation",
    "slideSize",
    "slideTraySize",
    "spinner",
    "style",
    "tabIndex",
    "totalSlides",
    "touchEnabled",
    "trayProps",
    "trayTag",
    "visibleSlides",
    "isIntrinsicHeight",
  ],
  Pk = [
    "dragStep",
    "step",
    "infinite",
    "preventVerticalScrollOnTouch",
    "preventingVerticalScroll",
    "horizontalPixelThreshold",
    "verticalPixelThreshold",
  ],
  Tk = [
    "className",
    "onClickCapture",
    "onMouseDown",
    "onTouchCancel",
    "onTouchEnd",
    "onTouchMove",
    "onTouchStart",
    "ref",
    "style",
  ],
  As,
  kk =
    ((As = (function (e) {
      function t(r) {
        var i;
        return (
          Ae(this, t),
          (i = n.call(this, r)),
          (i.getSliderRef = i.getSliderRef.bind(z(i))),
          (i.handleDocumentScroll = i.handleDocumentScroll.bind(z(i))),
          (i.handleOnClickCapture = i.handleOnClickCapture.bind(z(i))),
          (i.handleOnKeyDown = i.handleOnKeyDown.bind(z(i))),
          (i.handleOnMouseDown = i.handleOnMouseDown.bind(z(i))),
          (i.handleOnMouseMove = i.handleOnMouseMove.bind(z(i))),
          (i.handleOnMouseUp = i.handleOnMouseUp.bind(z(i))),
          (i.handleOnTouchCancel = i.handleOnTouchCancel.bind(z(i))),
          (i.handleOnTouchEnd = i.handleOnTouchEnd.bind(z(i))),
          (i.handleOnTouchMove = i.handleOnTouchMove.bind(z(i))),
          (i.handleOnTouchStart = i.handleOnTouchStart.bind(z(i))),
          (i.playBackward = i.playBackward.bind(z(i))),
          (i.playForward = i.playForward.bind(z(i))),
          (i.callCallback = i.callCallback.bind(z(i))),
          (i.blockWindowScroll = i.blockWindowScroll.bind(z(i))),
          (i.state = {
            cancelNextClick: !1,
            deltaX: 0,
            deltaY: 0,
            isBeingMouseDragged: !1,
            isBeingTouchDragged: !1,
            preventingVerticalScroll: !1,
            startX: 0,
            startY: 0,
          }),
          (i.interval = null),
          (i.isDocumentScrolling = null),
          (i.moveTimer = null),
          (i.originalOverflow = null),
          (i.scrollParent = null),
          (i.scrollStopTimer = null),
          i
        );
      }
      Be(t, e);
      var n = Ue(t);
      return (
        Oe(
          t,
          [
            {
              key: "componentDidMount",
              value: function () {
                this.props.lockOnWindowScroll &&
                  window.addEventListener(
                    "scroll",
                    this.handleDocumentScroll,
                    !1
                  ),
                  (this.props.touchEnabled ||
                    this.props.preventVerticalScrollOnTouch) &&
                    window.addEventListener(
                      "touchmove",
                      this.blockWindowScroll,
                      !1
                    ),
                  document.documentElement.addEventListener(
                    "mouseleave",
                    this.handleOnMouseUp,
                    !1
                  ),
                  document.documentElement.addEventListener(
                    "mousemove",
                    this.handleOnMouseMove,
                    !1
                  ),
                  document.documentElement.addEventListener(
                    "mouseup",
                    this.handleOnMouseUp,
                    !1
                  ),
                  this.props.isPlaying && this.play();
              },
            },
            {
              key: "componentDidUpdate",
              value: function (r) {
                !r.isPlaying && this.props.isPlaying && this.play(),
                  r.isPlaying && !this.props.isPlaying && this.stop(),
                  !r.isPageScrollLocked &&
                    this.props.isPageScrollLocked &&
                    this.lockScroll(),
                  r.isPageScrollLocked &&
                    !this.props.isPageScrollLocked &&
                    this.unlockScroll(),
                  r.privateUnDisableAnimation === !1 &&
                    this.props.privateUnDisableAnimation === !0 &&
                    this.props.carouselStore.setStoreState({
                      privateUnDisableAnimation: !1,
                      disableAnimation: !1,
                    });
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                document.documentElement.removeEventListener(
                  "mouseleave",
                  this.handleOnMouseUp,
                  !1
                ),
                  document.documentElement.removeEventListener(
                    "mousemove",
                    this.handleOnMouseMove,
                    !1
                  ),
                  document.documentElement.removeEventListener(
                    "mouseup",
                    this.handleOnMouseUp,
                    !1
                  ),
                  window.removeEventListener(
                    "scroll",
                    this.handleDocumentScroll,
                    !1
                  ),
                  window.removeEventListener(
                    "touchmove",
                    this.blockWindowScroll,
                    !1
                  ),
                  this.stop(),
                  window.cancelAnimationFrame.call(window, this.moveTimer),
                  window.clearTimeout(this.scrollStopTimer),
                  (this.isDocumentScrolling = null),
                  (this.moveTimer = null),
                  (this.scrollStopTimer = null);
              },
            },
            {
              key: "getSliderRef",
              value: function (r) {
                this.sliderTrayElement = r;
              },
            },
            {
              key: "fakeOnDragStart",
              value: function (r) {
                var i = r.screenX,
                  s = r.screenY,
                  o = r.touchDrag,
                  a = o !== void 0 && o,
                  l = r.mouseDrag,
                  u = l !== void 0 && l;
                this.props.carouselStore.setStoreState({ isPlaying: !1 }),
                  window.cancelAnimationFrame.call(window, this.moveTimer),
                  this.props.orientation === "vertical" &&
                    this.props.carouselStore.setStoreState({
                      isPageScrollLocked: !0,
                    }),
                  this.setState({
                    isBeingTouchDragged: a,
                    isBeingMouseDragged: u,
                    startX: i,
                    startY: s,
                  });
              },
            },
            {
              key: "fakeOnDragMove",
              value: function (r, i) {
                var s = this;
                this.moveTimer = window.requestAnimationFrame.call(
                  window,
                  function () {
                    s.setState(function (o) {
                      return {
                        deltaX: r - o.startX,
                        deltaY: i - o.startY,
                        preventingVerticalScroll:
                          Math.abs(i - o.startY) <=
                            s.props.verticalPixelThreshold &&
                          Math.abs(r - o.startX) >=
                            s.props.horizontalPixelThreshold,
                      };
                    });
                  }
                );
              },
            },
            {
              key: "fakeOnDragEnd",
              value: function () {
                window.cancelAnimationFrame.call(window, this.moveTimer),
                  this.computeCurrentSlide(),
                  this.props.orientation === "vertical" &&
                    this.props.carouselStore.setStoreState({
                      isPageScrollLocked: !1,
                    }),
                  this.setState({
                    deltaX: 0,
                    deltaY: 0,
                    isBeingTouchDragged: !1,
                    isBeingMouseDragged: !1,
                  }),
                  (this.isDocumentScrolling =
                    !this.props.lockOnWindowScroll && null);
              },
            },
            {
              key: "callCallback",
              value: function (r, i) {
                var s = this.props.trayProps;
                s && typeof s[r] == "function" && (i.persist(), s[r](i));
              },
            },
            {
              key: "handleOnMouseDown",
              value: function (r) {
                if (!this.props.dragEnabled)
                  return void this.callCallback("onMouseDown", r);
                r.preventDefault(),
                  this.fakeOnDragStart({
                    screenX: r.screenX,
                    screenY: r.screenY,
                    mouseDrag: !0,
                  }),
                  this.callCallback("onMouseDown", r);
              },
            },
            {
              key: "handleOnMouseMove",
              value: function (r) {
                this.state.isBeingMouseDragged &&
                  (this.setState({ cancelNextClick: !0 }),
                  r.preventDefault(),
                  this.fakeOnDragMove(r.screenX, r.screenY));
              },
            },
            {
              key: "handleOnMouseUp",
              value: function (r) {
                this.state.isBeingMouseDragged &&
                  (r.preventDefault(), this.fakeOnDragEnd());
              },
            },
            {
              key: "handleOnClickCapture",
              value: function (r) {
                if (!this.state.cancelNextClick)
                  return void this.callCallback("onClickCapture", r);
                r.preventDefault(),
                  this.setState({ cancelNextClick: !1 }),
                  this.callCallback("onClickCapture", r);
              },
            },
            {
              key: "handleOnTouchStart",
              value: function (r) {
                if (!this.props.touchEnabled)
                  return void this.callCallback("onTouchStart", r);
                this.props.orientation === "vertical" && r.preventDefault();
                var i = r.targetTouches[0];
                this.fakeOnDragStart({
                  screenX: i.screenX,
                  screenY: i.screenY,
                  touchDrag: !0,
                }),
                  this.callCallback("onTouchStart", r);
              },
            },
            {
              key: "handleDocumentScroll",
              value: function () {
                var r = this;
                this.props.touchEnabled &&
                  ((this.isDocumentScrolling = !0),
                  window.clearTimeout(this.scrollStopTimer),
                  (this.scrollStopTimer = window.setTimeout(function () {
                    r.isDocumentScrolling = !1;
                  }, 66)));
              },
            },
            {
              key: "handleOnTouchMove",
              value: function (r) {
                if (
                  !this.props.touchEnabled ||
                  (this.props.lockOnWindowScroll && this.isDocumentScrolling)
                )
                  return void this.callCallback("onTouchMove", r);
                window.cancelAnimationFrame.call(window, this.moveTimer);
                var i = r.targetTouches[0];
                i &&
                  (this.fakeOnDragMove(i.screenX, i.screenY),
                  this.callCallback("onTouchMove", r));
              },
            },
            {
              key: "forward",
              value: function () {
                var r = this.props,
                  i = r.currentSlide,
                  s = r.step,
                  o = r.totalSlides,
                  a = r.visibleSlides;
                return Math.min(i + s, o - a);
              },
            },
            {
              key: "backward",
              value: function () {
                var r = this.props,
                  i = r.currentSlide,
                  s = r.step;
                return Math.max(i - s, 0);
              },
            },
            {
              key: "handleOnKeyDown",
              value: function (r) {
                var i = r.keyCode,
                  s = this.props,
                  o = s.carouselStore,
                  a = s.currentSlide,
                  l = s.disableKeyboard,
                  u = s.totalSlides,
                  c = s.visibleSlides,
                  d = {};
                l === !0 ||
                  u <= c ||
                  (i === 37 &&
                    (r.preventDefault(),
                    this.focus(),
                    (d.currentSlide = Math.max(0, a - 1)),
                    (d.isPlaying = !1)),
                  i === 39 &&
                    (r.preventDefault(),
                    this.focus(),
                    (d.currentSlide = Math.min(u - c, a + 1)),
                    (d.isPlaying = !1)),
                  o.setStoreState(d));
              },
            },
            {
              key: "playForward",
              value: function () {
                var r = this.props,
                  i = r.carouselStore,
                  s = r.currentSlide;
                i.setStoreState({
                  currentSlide: this.forward() === s ? 0 : this.forward(),
                });
              },
            },
            {
              key: "playBackward",
              value: function () {
                var r = this.props,
                  i = r.carouselStore,
                  s = r.currentSlide,
                  o = r.totalSlides,
                  a = r.visibleSlides;
                i.setStoreState({
                  currentSlide: this.backward() === s ? o - a : this.backward(),
                });
              },
            },
            {
              key: "play",
              value: function () {
                var r = this.props.playDirection;
                this.interval = setInterval(
                  r === "forward" ? this.playForward : this.playBackward,
                  this.props.interval
                );
              },
            },
            {
              key: "stop",
              value: function () {
                window.clearInterval(this.interval), (this.interval = null);
              },
            },
            {
              key: "lockScroll",
              value: function () {
                var r = new wk();
                (this.scrollParent = r.getScrollParent(this.sliderTrayElement)),
                  this.scrollParent &&
                    ((this.originalOverflow =
                      this.originalOverflow ||
                      this.scrollParent.style.overflow),
                    (this.scrollParent.style.overflow = "hidden"));
              },
            },
            {
              key: "unlockScroll",
              value: function () {
                this.scrollParent &&
                  ((this.scrollParent.style.overflow = this.originalOverflow),
                  (this.originalOverflow = null),
                  (this.scrollParent = null));
              },
            },
            {
              key: "blockWindowScroll",
              value: function (r) {
                this.state.preventingVerticalScroll &&
                  (r.preventDefault(), r.stopImmediatePropagation());
              },
            },
            {
              key: "computeCurrentSlide",
              value: function () {
                var r = t.slideSizeInPx(
                    this.props.orientation,
                    this.sliderTrayElement.clientWidth,
                    this.sliderTrayElement.clientHeight,
                    this.props.totalSlides
                  ),
                  i = t.slidesMoved(
                    this.props.moveThreshold,
                    this.props.orientation,
                    this.state.deltaX,
                    this.state.deltaY,
                    r,
                    this.props.dragStep
                  ),
                  s =
                    this.props.totalSlides -
                    Math.min(this.props.totalSlides, this.props.visibleSlides),
                  o = Hs({ min: 0, max: s, x: this.props.currentSlide + i });
                this.props.infinite &&
                  (this.props.currentSlide >= s && i > 0 && (o = 0),
                  this.props.currentSlide === 0 && i < 0 && (o = s)),
                  this.props.carouselStore.setStoreState({ currentSlide: o });
              },
            },
            {
              key: "focus",
              value: function () {
                this.sliderElement.focus();
              },
            },
            {
              key: "handleOnTouchEnd",
              value: function (r) {
                this.endTouchMove(), this.callCallback("onTouchEnd", r);
              },
            },
            {
              key: "handleOnTouchCancel",
              value: function (r) {
                this.endTouchMove(), this.callCallback("onTouchCancel", r);
              },
            },
            {
              key: "endTouchMove",
              value: function () {
                this.props.touchEnabled && this.fakeOnDragEnd();
              },
            },
            {
              key: "renderMasterSpinner",
              value: function () {
                var r = this.props,
                  i = r.hasMasterSpinner,
                  s = r.masterSpinnerFinished,
                  o = r.spinner;
                return i && !s
                  ? (typeof this.props.onMasterSpinner == "function" &&
                      this.props.onMasterSpinner(),
                    N.createElement(
                      "div",
                      {
                        className: ee([
                          wt.masterSpinnerContainer,
                          "carousel__master-spinner-container",
                        ]),
                      },
                      o && o(),
                      !o && N.createElement(zg, null)
                    ))
                  : null;
              },
            },
            {
              key: "render",
              value: function () {
                var r = this,
                  i = this.props,
                  s = i.ariaLabel,
                  o = (i.carouselStore, i.children),
                  a = i.className,
                  l = i.classNameAnimation,
                  u = i.classNameTray,
                  c = i.classNameTrayWrap,
                  d = i.currentSlide,
                  f = i.disableAnimation,
                  v =
                    (i.disableKeyboard,
                    i.dragEnabled,
                    i.hasMasterSpinner,
                    i.interval,
                    i.isPageScrollLocked,
                    i.isPlaying,
                    i.lockOnWindowScroll,
                    i.masterSpinnerFinished,
                    i.moveThreshold,
                    i.naturalSlideHeight),
                  y = i.naturalSlideWidth,
                  w = (i.onMasterSpinner, i.orientation),
                  k =
                    (i.playDirection, i.privateUnDisableAnimation, i.slideSize),
                  m = i.slideTraySize,
                  h = (i.spinner, i.style),
                  p = i.tabIndex,
                  S = (i.totalSlides, i.touchEnabled, i.trayProps),
                  P = i.trayTag,
                  C = i.visibleSlides,
                  b = i.isIntrinsicHeight,
                  T = ge(i, xk),
                  L = J({}, h),
                  M = {};
                w === "vertical" &&
                  ((M.height = 0),
                  (M.paddingBottom = Xe((100 * v * C) / y)),
                  (M.width = Xe(100)));
                var B = {},
                  We = Xe(k * d * -1);
                (this.state.isBeingTouchDragged ||
                  this.state.isBeingMouseDragged ||
                  f) &&
                  (B.transition = "none"),
                  b && ((B.display = "flex"), (B.alignItems = "stretch")),
                  w === "vertical"
                    ? ((B.transform = "translateY("
                        .concat(We, ") translateY(")
                        .concat(this.state.deltaY, "px)")),
                      (B.width = Xe(100)),
                      (B.flexDirection = "column"))
                    : ((B.width = Xe(m)),
                      (B.transform = "translateX("
                        .concat(We, ") translateX(")
                        .concat(this.state.deltaX, "px)")),
                      (B.flexDirection = "row"));
                var He = ee([
                    w === "vertical" ? wt.verticalSlider : wt.horizontalSlider,
                    "carousel__slider",
                    w === "vertical"
                      ? "carousel__slider--vertical"
                      : "carousel__slider--horizontal",
                    a,
                  ]),
                  wn = ee([
                    wt.sliderTrayWrap,
                    "carousel__slider-tray-wrapper",
                    w === "vertical"
                      ? wt.verticalSlideTrayWrap
                      : wt.horizontalTrayWrap,
                    w === "vertical"
                      ? "carousel__slider-tray-wrap--vertical"
                      : "carousel__slider-tray-wrap--horizontal",
                    c,
                  ]),
                  le = ee([
                    wt.sliderTray,
                    l || wt.sliderAnimation,
                    "carousel__slider-tray",
                    w === "vertical" ? wt.verticalTray : wt.horizontalTray,
                    w === "vertical"
                      ? "carousel__slider-tray--vertical"
                      : "carousel__slider-tray--horizontal",
                    u,
                  ]),
                  _e = p !== null ? p : 0,
                  At =
                    (T.dragStep,
                    T.step,
                    T.infinite,
                    T.preventVerticalScrollOnTouch,
                    T.preventingVerticalScroll,
                    T.horizontalPixelThreshold,
                    T.verticalPixelThreshold,
                    ge(T, Pk)),
                  A =
                    (S.className,
                    S.onClickCapture,
                    S.onMouseDown,
                    S.onTouchCancel,
                    S.onTouchEnd,
                    S.onTouchMove,
                    S.onTouchStart,
                    S.ref,
                    S.style,
                    ge(S, Tk));
                return N.createElement(
                  "div",
                  J(
                    {
                      ref: function (j) {
                        r.sliderElement = j;
                      },
                      className: He,
                      "aria-live": "polite",
                      "aria-label": s,
                      style: L,
                      tabIndex: _e,
                      onKeyDown: this.handleOnKeyDown,
                      role: "listbox",
                    },
                    At
                  ),
                  N.createElement(
                    "div",
                    { className: wn, style: M },
                    N.createElement(
                      P,
                      J(
                        {
                          ref: this.getSliderRef,
                          className: le,
                          style: B,
                          onTouchStart: this.handleOnTouchStart,
                          onTouchMove: this.handleOnTouchMove,
                          onTouchEnd: this.handleOnTouchEnd,
                          onTouchCancel: this.handleOnTouchCancel,
                          onMouseDown: this.handleOnMouseDown,
                          onClickCapture: this.handleOnClickCapture,
                        },
                        A
                      ),
                      o
                    ),
                    this.renderMasterSpinner()
                  )
                );
              },
            },
          ],
          [
            {
              key: "slideSizeInPx",
              value: function (r, i, s, o) {
                return (r === "horizontal" ? i : s) / o;
              },
            },
            {
              key: "slidesMoved",
              value: function (r, i, s, o, a, l) {
                var u = i === "horizontal" ? s : o,
                  c = Math.abs(Math.round(u / a)),
                  d = Math.abs(u) >= a * r ? l : 0,
                  f = Math.max(d, c);
                if (u < 0) return f;
                var v = -f;
                return v === 0 ? 0 : v;
              },
            },
          ]
        ),
        t
      );
    })(N.Component)),
    W(As, "propTypes", {
      ariaLabel: x.string,
      carouselStore: x.object.isRequired,
      children: x.node.isRequired,
      className: x.string,
      classNameAnimation: x.string,
      classNameTray: x.string,
      classNameTrayWrap: x.string,
      currentSlide: x.number.isRequired,
      disableAnimation: x.bool,
      disableKeyboard: x.bool,
      dragEnabled: x.bool.isRequired,
      dragStep: x.number,
      hasMasterSpinner: x.bool.isRequired,
      infinite: x.bool,
      interval: x.number.isRequired,
      isPageScrollLocked: x.bool.isRequired,
      isPlaying: x.bool.isRequired,
      lockOnWindowScroll: x.bool.isRequired,
      preventVerticalScrollOnTouch: x.bool,
      horizontalPixelThreshold: x.number,
      verticalPixelThreshold: x.number,
      masterSpinnerFinished: x.bool.isRequired,
      moveThreshold: x.number,
      naturalSlideHeight: x.number.isRequired,
      naturalSlideWidth: x.number.isRequired,
      onMasterSpinner: x.func,
      orientation: Ee.orientation.isRequired,
      playDirection: Ee.direction.isRequired,
      privateUnDisableAnimation: x.bool,
      slideSize: x.number.isRequired,
      slideTraySize: x.number.isRequired,
      spinner: x.func,
      step: x.number.isRequired,
      style: x.object,
      tabIndex: x.number,
      totalSlides: x.number.isRequired,
      touchEnabled: x.bool.isRequired,
      trayProps: x.shape({
        className: x.string,
        onClickCapture: x.func,
        onMouseDown: x.func,
        onTouchCancel: x.func,
        onTouchEnd: x.func,
        onTouchMove: x.func,
        onTouchStart: x.func,
        ref: x.shape({}),
        style: x.string,
      }),
      trayTag: x.string,
      visibleSlides: x.number,
      isIntrinsicHeight: x.bool,
    }),
    W(As, "defaultProps", {
      ariaLabel: "slider",
      className: null,
      classNameAnimation: null,
      classNameTray: null,
      classNameTrayWrap: null,
      disableAnimation: !1,
      disableKeyboard: !1,
      dragStep: 1,
      infinite: !1,
      preventVerticalScrollOnTouch: !0,
      horizontalPixelThreshold: 15,
      verticalPixelThreshold: 10,
      moveThreshold: 0.1,
      onMasterSpinner: null,
      privateUnDisableAnimation: !1,
      spinner: null,
      style: {},
      tabIndex: null,
      trayProps: {},
      trayTag: "div",
      visibleSlides: 1,
      isIntrinsicHeight: !1,
    }),
    As),
  Ck = yt(kk, function (e) {
    return {
      currentSlide: e.currentSlide,
      disableAnimation: e.disableAnimation,
      privateUnDisableAnimation: e.privateUnDisableAnimation,
      disableKeyboard: e.disableKeyboard,
      dragEnabled: e.dragEnabled,
      hasMasterSpinner: e.hasMasterSpinner,
      infinite: e.infinite,
      interval: e.interval,
      isPageScrollLocked: e.isPageScrollLocked,
      isPlaying: e.isPlaying,
      lockOnWindowScroll: e.lockOnWindowScroll,
      preventingVerticalScroll: e.preventingVerticalScroll,
      masterSpinnerFinished: e.masterSpinnerFinished,
      naturalSlideHeight: e.naturalSlideHeight,
      naturalSlideWidth: e.naturalSlideWidth,
      orientation: e.orientation,
      playDirection: e.playDirection,
      slideSize: e.slideSize,
      slideTraySize: e.slideTraySize,
      step: e.step,
      dragStep: e.dragStep,
      totalSlides: e.totalSlides,
      touchEnabled: e.touchEnabled,
      visibleSlides: e.visibleSlides,
      isIntrinsicHeight: e.isIntrinsicHeight,
    };
  });
function Ek() {
  return g.jsxs(g.Fragment, {
    children: [
      g.jsxs(UT, {
        className: "w-full relative lg:h-[10%] lg:px-80",
        naturalSlideWidth: 100,
        naturalSlideHeight: 125,
        totalSlides: 3,
        children: [
          " ",
          g.jsxs(Ck, {
            children: [
              g.jsxs(Ka, {
                index: 0,
                children: [
                  g.jsx("div", {
                    className:
                      "w-full lg:h-[100%] text-white bg-[#b6b2b2] flex h-[100%]",
                    children: g.jsxs("div", {
                      className: "relative w-full lg:w-[100%] h-full",
                      children: [
                        g.jsx("img", {
                          className: "w-full h-full ",
                          src: pT,
                          alt: "",
                        }),
                        g.jsx("div", {
                          className:
                            "absolute bottom-0 right-0 flex items-center justify-center w-40 h-24 text-lg font-semibold bg-orange-600 rounded-ss-full",
                          children: "Rs. 1200",
                        }),
                        g.jsx("div", {
                          className:
                            "absolute top-0 left-0 flex items-center justify-center w-40 h-24 text-lg font-semibold bg-green-600 rounded-br-full",
                          children: "100ml",
                        }),
                        g.jsx("div", { className: "1/2" }),
                      ],
                    }),
                  }),
                  " ",
                ],
              }),
              g.jsx(Ka, {
                index: 1,
                children: g.jsx("img", {
                  className: "h-full w-full lg:h-[50%] ",
                  src: mT,
                  alt: "",
                }),
              }),
              g.jsx(Ka, {
                index: 2,
                children: g.jsx("img", {
                  className: "h-full w-full lg:h-[50%]",
                  src: Rg,
                  alt: "",
                }),
              }),
            ],
          }),
          g.jsx(WT, {
            className:
              "p-3 absolute cursor-pointer left-0 top-[43%] opacity-30 hover:opacity-100 text-4xl",
            children: "⮜",
          }),
          g.jsx(GT, {
            className:
              "p-3 absolute right-0 top-[43%] opacity-30 hover:opacity-100 text-4xl",
            children: "⮞",
          }),
        ],
      }),
      g.jsxs("div", {
        className: "flex flex-col w-full gap-3 p-5",
        children: [
          g.jsx("h1", { className: "font-semibold", children: "Order Now" }),
          g.jsx("h1", {
            children:
              "To Place Your Order You can directly Contact Us on Whatsapp or on other Platforms Like Instagram and Facebook",
          }),
          g.jsxs("div", {
            className: "flex gap-3",
            children: [
              g.jsx("a", {
                href: "https://wa.link/8o93k2",
                target: "_blank",
                className: "  p-1 border border-black rounded-md",
                children: g.jsx("img", {
                  src: jg,
                  className: "w-6 h-6 ",
                  alt: "",
                }),
              }),
              g.jsx("a", {
                target: "_blank",
                className: "p-1 border border-black rounded-md",
                href: "https://www.facebook.com/profile.php?id=61563258421590&mibextid=ZbWKwL",
                children: g.jsx("img", {
                  className: "w-6 h-6",
                  src: Ng,
                  alt: "",
                }),
              }),
              g.jsx("a", {
                target: "_blank",
                className: "p-1 border border-black rounded-md",
                href: "https://www.instagram.com/thenatura.pk?igsh=d2IwNWx5aXQxemxl",
                children: g.jsx("img", {
                  className: "w-6 h-6",
                  src: Lg,
                  alt: "",
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function bk() {
  const [e, t] = _.useState(!1),
    [n, r] = _.useState(!1);
  return g.jsxs("div", {
    className: "h-[100vh] overflow-x-hidden overflow-y-scroll relative",
    children: [
      g.jsx(OS, { setShowMenu: t, showMenu: e }),
      g.jsx(_S, { setShowMenu: t, positionize: e ? "left-0" : "-left-[100%]" }),
      g.jsx(oT, {}),
      g.jsx(tP, {}),
      g.jsx(hT, {}),
      g.jsx(Ek, {}),
      g.jsx(eT, {}),
      g.jsx(sT, { setShowWhatsapp: r, showWhatsapp: n }),
      g.jsx(tT, {}),
      g.jsx(nT, {}),
    ],
  });
}
Ya.createRoot(document.getElementById("root")).render(
  g.jsx(N.StrictMode, { children: g.jsx(AS, { children: g.jsx(bk, {}) }) })
);
