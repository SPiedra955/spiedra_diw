/*! For license information please see index.bundle.js.LICENSE.txt */
(() => {
  var e = {
      919: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => p });
        var r = n(81),
          i = n.n(r),
          o = n(645),
          s = n.n(o),
          a = n(667),
          u = n.n(a),
          c = new URL(n(592), n.b),
          l = s()(i()),
          f = u()(c);
        l.push([
          e.id,
          `*{margin:0;padding:0;box-sizing:border-box}body{background:#eee4da;font-family:"Didact Gothic",sans-serif;margin:0;background-image:url(${f})}a{color:#506f8e}a:hover{color:#aea4ad}.wrapper{margin:0 auto;width:1200px}.subcontent{background:#fff;padding:2em 0 3em}.search{float:right}.list-inline,.footer ul,.header ul{list-style-type:none}.list-inline li,.footer ul li,.header ul li{display:inline-block}.list-inline a,.footer ul a,.header ul a{display:block}.header{background:#aea4ad;border-bottom:10px solid #fff;padding:1em}.header h1{color:#506f8e;font-family:"Ribeye Marrow",cursive;font-size:3em;margin:.25em 0;text-shadow:1px 1px 0px #d9d0cb}.header nav{float:right}.header nav a{background:#506f8e;border-radius:20px;color:#eee4da;margin-right:1em;padding:.5em 1em;text-decoration:none}.header nav a:hover{background-color:#3e566d}.header ul{padding:0}.kittens{overflow:auto;list-style-type:none;padding:0}.kittens li{border-radius:20px;float:left;margin-bottom:2em;text-align:center;width:1200px,4}.kittens img{border:10px solid #fff;border-radius:20px}.kittens label{font-weight:bold}.subcontent{background:#fff;padding:2em 0 3em;overflow:auto}.subcontent section{float:left;width:33%}.subcontent section ul{list-style-type:none;padding:0}.subcontent section li{border-bottom:1px dotted #eee4da;margin-bottom:1em;padding-bottom:1em;padding-right:1em}.subcontent section a{font-size:1.25em;text-decoration:none}.subcontent section .btn{color:#aea4ad;font-size:1em;font-weight:bold;text-decoration:none}.subcontent section .btn:hover{color:#506f8e}.location{padding-right:0;width:33%}.location dt{color:#506f8e;font-weight:bold}.location dd{margin:0}.footer{background:#506f8e;border-top:10px solid #eee4da}.footer nav{float:left}.footer nav a{color:#aea4ad;padding:1em}.footer nav a:hover{color:#d9d0cb}.footer ul{margin:0;padding:0}.copy{color:#d9d0cb;float:right;margin:1em 0}`,
          "",
        ]);
        const p = l;
      },
      645: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = "",
                  r = void 0 !== t[5];
                return (
                  t[4] && (n += "@supports (".concat(t[4], ") {")),
                  t[2] && (n += "@media ".concat(t[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {"
                    )),
                  (n += e(t)),
                  r && (n += "}"),
                  t[2] && (n += "}"),
                  t[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (t.i = function (e, n, r, i, o) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var s = {};
              if (r)
                for (var a = 0; a < this.length; a++) {
                  var u = this[a][0];
                  null != u && (s[u] = !0);
                }
              for (var c = 0; c < e.length; c++) {
                var l = [].concat(e[c]);
                (r && s[l[0]]) ||
                  (void 0 !== o &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = o)),
                  n &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = n))
                      : (l[2] = n)),
                  i &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = i))
                      : (l[4] = "".concat(i))),
                  t.push(l));
              }
            }),
            t
          );
        };
      },
      667: (e) => {
        "use strict";
        e.exports = function (e, t) {
          return (
            t || (t = {}),
            e
              ? ((e = String(e.__esModule ? e.default : e)),
                /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
                t.hash && (e += t.hash),
                /["'() \t\n]|(%20)/.test(e) || t.needQuotes
                  ? '"'.concat(
                      e.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
                      '"'
                    )
                  : e)
              : e
          );
        };
      },
      81: (e) => {
        "use strict";
        e.exports = function (e) {
          return e[1];
        };
      },
      379: (e) => {
        "use strict";
        var t = [];
        function n(e) {
          for (var n = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) {
              n = r;
              break;
            }
          return n;
        }
        function r(e, r) {
          for (var o = {}, s = [], a = 0; a < e.length; a++) {
            var u = e[a],
              c = r.base ? u[0] + r.base : u[0],
              l = o[c] || 0,
              f = "".concat(c, " ").concat(l);
            o[c] = l + 1;
            var p = n(f),
              d = {
                css: u[1],
                media: u[2],
                sourceMap: u[3],
                supports: u[4],
                layer: u[5],
              };
            if (-1 !== p) t[p].references++, t[p].updater(d);
            else {
              var h = i(d, r);
              (r.byIndex = a),
                t.splice(a, 0, { identifier: f, updater: h, references: 1 });
            }
            s.push(f);
          }
          return s;
        }
        function i(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, i) {
          var o = r((e = e || []), (i = i || {}));
          return function (e) {
            e = e || [];
            for (var s = 0; s < o.length; s++) {
              var a = n(o[s]);
              t[a].references--;
            }
            for (var u = r(e, i), c = 0; c < o.length; c++) {
              var l = n(o[c]);
              0 === t[l].references && (t[l].updater(), t.splice(l, 1));
            }
            o = u;
          };
        };
      },
      569: (e) => {
        "use strict";
        var t = {};
        e.exports = function (e, n) {
          var r = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(n);
        };
      },
      216: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      565: (e, t, n) => {
        "use strict";
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      795: (e) => {
        "use strict";
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var i = void 0 !== n.layer;
                i &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {"
                  )),
                  (r += n.css),
                  i && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var o = n.sourceMap;
                o &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
                      " */"
                    )),
                  t.styleTagTransform(r, e, t.options);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      589: (e) => {
        "use strict";
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
      472: function (e, t) {
        var n, r, i;
        (r = "undefined" != typeof window ? window : this),
          (i = function (r, i) {
            var o = [],
              s = o.slice,
              a = o.concat,
              u = o.push,
              c = o.indexOf,
              l = {},
              f = l.toString,
              p = l.hasOwnProperty,
              d = "".trim,
              h = {},
              g = r.document,
              m = "2.1.0",
              v = function (e, t) {
                return new v.fn.init(e, t);
              },
              y = /^-ms-/,
              x = /-([\da-z])/gi,
              b = function (e, t) {
                return t.toUpperCase();
              };
            function w(e) {
              var t = e.length,
                n = v.type(e);
              return (
                "function" !== n &&
                !v.isWindow(e) &&
                (!(1 !== e.nodeType || !t) ||
                  "array" === n ||
                  0 === t ||
                  ("number" == typeof t && t > 0 && t - 1 in e))
              );
            }
            (v.fn = v.prototype =
              {
                jquery: m,
                constructor: v,
                selector: "",
                length: 0,
                toArray: function () {
                  return s.call(this);
                },
                get: function (e) {
                  return null != e
                    ? 0 > e
                      ? this[e + this.length]
                      : this[e]
                    : s.call(this);
                },
                pushStack: function (e) {
                  var t = v.merge(this.constructor(), e);
                  return (t.prevObject = this), (t.context = this.context), t;
                },
                each: function (e, t) {
                  return v.each(this, e, t);
                },
                map: function (e) {
                  return this.pushStack(
                    v.map(this, function (t, n) {
                      return e.call(t, n, t);
                    })
                  );
                },
                slice: function () {
                  return this.pushStack(s.apply(this, arguments));
                },
                first: function () {
                  return this.eq(0);
                },
                last: function () {
                  return this.eq(-1);
                },
                eq: function (e) {
                  var t = this.length,
                    n = +e + (0 > e ? t : 0);
                  return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
                },
                end: function () {
                  return this.prevObject || this.constructor(null);
                },
                push: u,
                sort: o.sort,
                splice: o.splice,
              }),
              (v.extend = v.fn.extend =
                function () {
                  var e,
                    t,
                    n,
                    r,
                    i,
                    o,
                    s = arguments[0] || {},
                    a = 1,
                    u = arguments.length,
                    c = !1;
                  for (
                    "boolean" == typeof s &&
                      ((c = s), (s = arguments[a] || {}), a++),
                      "object" == typeof s || v.isFunction(s) || (s = {}),
                      a === u && ((s = this), a--);
                    u > a;
                    a++
                  )
                    if (null != (e = arguments[a]))
                      for (t in e)
                        (n = s[t]),
                          s !== (r = e[t]) &&
                            (c &&
                            r &&
                            (v.isPlainObject(r) || (i = v.isArray(r)))
                              ? (i
                                  ? ((i = !1), (o = n && v.isArray(n) ? n : []))
                                  : (o = n && v.isPlainObject(n) ? n : {}),
                                (s[t] = v.extend(c, o, r)))
                              : void 0 !== r && (s[t] = r));
                  return s;
                }),
              v.extend({
                expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function (e) {
                  throw new Error(e);
                },
                noop: function () {},
                isFunction: function (e) {
                  return "function" === v.type(e);
                },
                isArray: Array.isArray,
                isWindow: function (e) {
                  return null != e && e === e.window;
                },
                isNumeric: function (e) {
                  return e - parseFloat(e) >= 0;
                },
                isPlainObject: function (e) {
                  if ("object" !== v.type(e) || e.nodeType || v.isWindow(e))
                    return !1;
                  try {
                    if (
                      e.constructor &&
                      !p.call(e.constructor.prototype, "isPrototypeOf")
                    )
                      return !1;
                  } catch (e) {
                    return !1;
                  }
                  return !0;
                },
                isEmptyObject: function (e) {
                  var t;
                  for (t in e) return !1;
                  return !0;
                },
                type: function (e) {
                  return null == e
                    ? e + ""
                    : "object" == typeof e || "function" == typeof e
                    ? l[f.call(e)] || "object"
                    : typeof e;
                },
                globalEval: function (e) {
                  var t,
                    n = eval;
                  (e = v.trim(e)) &&
                    (1 === e.indexOf("use strict")
                      ? (((t = g.createElement("script")).text = e),
                        g.head.appendChild(t).parentNode.removeChild(t))
                      : n(e));
                },
                camelCase: function (e) {
                  return e.replace(y, "ms-").replace(x, b);
                },
                nodeName: function (e, t) {
                  return (
                    e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                  );
                },
                each: function (e, t, n) {
                  var r = 0,
                    i = e.length,
                    o = w(e);
                  if (n) {
                    if (o) for (; i > r && !1 !== t.apply(e[r], n); r++);
                    else for (r in e) if (!1 === t.apply(e[r], n)) break;
                  } else if (o)
                    for (; i > r && !1 !== t.call(e[r], r, e[r]); r++);
                  else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                  return e;
                },
                trim: function (e) {
                  return null == e ? "" : d.call(e);
                },
                makeArray: function (e, t) {
                  var n = t || [];
                  return (
                    null != e &&
                      (w(Object(e))
                        ? v.merge(n, "string" == typeof e ? [e] : e)
                        : u.call(n, e)),
                    n
                  );
                },
                inArray: function (e, t, n) {
                  return null == t ? -1 : c.call(t, e, n);
                },
                merge: function (e, t) {
                  for (var n = +t.length, r = 0, i = e.length; n > r; r++)
                    e[i++] = t[r];
                  return (e.length = i), e;
                },
                grep: function (e, t, n) {
                  for (var r = [], i = 0, o = e.length, s = !n; o > i; i++)
                    !t(e[i], i) !== s && r.push(e[i]);
                  return r;
                },
                map: function (e, t, n) {
                  var r,
                    i = 0,
                    o = e.length,
                    s = [];
                  if (w(e))
                    for (; o > i; i++) null != (r = t(e[i], i, n)) && s.push(r);
                  else for (i in e) null != (r = t(e[i], i, n)) && s.push(r);
                  return a.apply([], s);
                },
                guid: 1,
                proxy: function (e, t) {
                  var n, r, i;
                  return (
                    "string" == typeof t && ((n = e[t]), (t = e), (e = n)),
                    v.isFunction(e)
                      ? ((r = s.call(arguments, 2)),
                        (i = function () {
                          return e.apply(
                            t || this,
                            r.concat(s.call(arguments))
                          );
                        }),
                        (i.guid = e.guid = e.guid || v.guid++),
                        i)
                      : void 0
                  );
                },
                now: Date.now,
                support: h,
              }),
              v.each(
                "Boolean Number String Function Array Date RegExp Object Error".split(
                  " "
                ),
                function (e, t) {
                  l["[object " + t + "]"] = t.toLowerCase();
                }
              );
            var T = (function (e) {
              var t,
                n,
                r,
                i,
                o,
                s,
                a,
                u,
                c,
                l,
                f,
                p,
                d,
                h,
                g,
                m,
                v,
                y = "sizzle" + -new Date(),
                x = e.document,
                b = 0,
                w = 0,
                T = re(),
                C = re(),
                k = re(),
                N = function (e, t) {
                  return e === t && (c = !0), 0;
                },
                E = "undefined",
                S = 1 << 31,
                j = {}.hasOwnProperty,
                D = [],
                A = D.pop,
                L = D.push,
                q = D.push,
                H = D.slice,
                O =
                  D.indexOf ||
                  function (e) {
                    for (var t = 0, n = this.length; n > t; t++)
                      if (this[t] === e) return t;
                    return -1;
                  },
                M =
                  "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                F = "[\\x20\\t\\r\\n\\f]",
                P = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                R = P.replace("w", "w#"),
                W =
                  "\\[" +
                  F +
                  "*(" +
                  P +
                  ")" +
                  F +
                  "*(?:([*^$|!~]?=)" +
                  F +
                  "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" +
                  R +
                  ")|)|)" +
                  F +
                  "*\\]",
                $ =
                  ":(" +
                  P +
                  ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" +
                  W.replace(3, 8) +
                  ")*)|.*)\\)|)",
                I = new RegExp(
                  "^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$",
                  "g"
                ),
                B = new RegExp("^" + F + "*," + F + "*"),
                _ = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"),
                z = new RegExp("=" + F + "*([^\\]'\"]*?)" + F + "*\\]", "g"),
                X = new RegExp($),
                U = new RegExp("^" + R + "$"),
                Y = {
                  ID: new RegExp("^#(" + P + ")"),
                  CLASS: new RegExp("^\\.(" + P + ")"),
                  TAG: new RegExp("^(" + P.replace("w", "w*") + ")"),
                  ATTR: new RegExp("^" + W),
                  PSEUDO: new RegExp("^" + $),
                  CHILD: new RegExp(
                    "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                      F +
                      "*(even|odd|(([+-]|)(\\d*)n|)" +
                      F +
                      "*(?:([+-]|)" +
                      F +
                      "*(\\d+)|))" +
                      F +
                      "*\\)|)",
                    "i"
                  ),
                  bool: new RegExp("^(?:" + M + ")$", "i"),
                  needsContext: new RegExp(
                    "^" +
                      F +
                      "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                      F +
                      "*((?:-\\d)?\\d*)" +
                      F +
                      "*\\)|)(?=[^-]|$)",
                    "i"
                  ),
                },
                V = /^(?:input|select|textarea|button)$/i,
                G = /^h\d$/i,
                Q = /^[^{]+\{\s*\[native \w/,
                J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                Z = /[+~]/,
                K = /'|\\/g,
                ee = new RegExp(
                  "\\\\([\\da-f]{1,6}" + F + "?|(" + F + ")|.)",
                  "ig"
                ),
                te = function (e, t, n) {
                  var r = "0x" + t - 65536;
                  return r != r || n
                    ? t
                    : 0 > r
                    ? String.fromCharCode(r + 65536)
                    : String.fromCharCode(
                        (r >> 10) | 55296,
                        (1023 & r) | 56320
                      );
                };
              try {
                q.apply((D = H.call(x.childNodes)), x.childNodes),
                  D[x.childNodes.length].nodeType;
              } catch (e) {
                q = {
                  apply: D.length
                    ? function (e, t) {
                        L.apply(e, H.call(t));
                      }
                    : function (e, t) {
                        for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                        e.length = n - 1;
                      },
                };
              }
              function ne(e, t, r, i) {
                var o, s, a, u, c, p, g, m, b, w;
                if (
                  ((t ? t.ownerDocument || t : x) !== f && l(t),
                  (r = r || []),
                  !e || "string" != typeof e)
                )
                  return r;
                if (1 !== (u = (t = t || f).nodeType) && 9 !== u) return [];
                if (d && !i) {
                  if ((o = J.exec(e)))
                    if ((a = o[1])) {
                      if (9 === u) {
                        if (!(s = t.getElementById(a)) || !s.parentNode)
                          return r;
                        if (s.id === a) return r.push(s), r;
                      } else if (
                        t.ownerDocument &&
                        (s = t.ownerDocument.getElementById(a)) &&
                        v(t, s) &&
                        s.id === a
                      )
                        return r.push(s), r;
                    } else {
                      if (o[2]) return q.apply(r, t.getElementsByTagName(e)), r;
                      if (
                        (a = o[3]) &&
                        n.getElementsByClassName &&
                        t.getElementsByClassName
                      )
                        return q.apply(r, t.getElementsByClassName(a)), r;
                    }
                  if (n.qsa && (!h || !h.test(e))) {
                    if (
                      ((m = g = y),
                      (b = t),
                      (w = 9 === u && e),
                      1 === u && "object" !== t.nodeName.toLowerCase())
                    ) {
                      for (
                        p = de(e),
                          (g = t.getAttribute("id"))
                            ? (m = g.replace(K, "\\$&"))
                            : t.setAttribute("id", m),
                          m = "[id='" + m + "'] ",
                          c = p.length;
                        c--;

                      )
                        p[c] = m + he(p[c]);
                      (b = (Z.test(e) && fe(t.parentNode)) || t),
                        (w = p.join(","));
                    }
                    if (w)
                      try {
                        return q.apply(r, b.querySelectorAll(w)), r;
                      } catch (e) {
                      } finally {
                        g || t.removeAttribute("id");
                      }
                  }
                }
                return we(e.replace(I, "$1"), t, r, i);
              }
              function re() {
                var e = [];
                return function t(n, i) {
                  return (
                    e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                    (t[n + " "] = i)
                  );
                };
              }
              function ie(e) {
                return (e[y] = !0), e;
              }
              function oe(e) {
                var t = f.createElement("div");
                try {
                  return !!e(t);
                } catch (e) {
                  return !1;
                } finally {
                  t.parentNode && t.parentNode.removeChild(t), (t = null);
                }
              }
              function se(e, t) {
                for (var n = e.split("|"), i = e.length; i--; )
                  r.attrHandle[n[i]] = t;
              }
              function ae(e, t) {
                var n = t && e,
                  r =
                    n &&
                    1 === e.nodeType &&
                    1 === t.nodeType &&
                    (~t.sourceIndex || S) - (~e.sourceIndex || S);
                if (r) return r;
                if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
                return e ? 1 : -1;
              }
              function ue(e) {
                return function (t) {
                  return "input" === t.nodeName.toLowerCase() && t.type === e;
                };
              }
              function ce(e) {
                return function (t) {
                  var n = t.nodeName.toLowerCase();
                  return ("input" === n || "button" === n) && t.type === e;
                };
              }
              function le(e) {
                return ie(function (t) {
                  return (
                    (t = +t),
                    ie(function (n, r) {
                      for (var i, o = e([], n.length, t), s = o.length; s--; )
                        n[(i = o[s])] && (n[i] = !(r[i] = n[i]));
                    })
                  );
                });
              }
              function fe(e) {
                return e && typeof e.getElementsByTagName !== E && e;
              }
              for (t in ((n = ne.support = {}),
              (o = ne.isXML =
                function (e) {
                  var t = e && (e.ownerDocument || e).documentElement;
                  return !!t && "HTML" !== t.nodeName;
                }),
              (l = ne.setDocument =
                function (e) {
                  var t,
                    i = e ? e.ownerDocument || e : x,
                    s = i.defaultView;
                  return i !== f && 9 === i.nodeType && i.documentElement
                    ? ((f = i),
                      (p = i.documentElement),
                      (d = !o(i)),
                      s &&
                        s !== s.top &&
                        (s.addEventListener
                          ? s.addEventListener(
                              "unload",
                              function () {
                                l();
                              },
                              !1
                            )
                          : s.attachEvent &&
                            s.attachEvent("onunload", function () {
                              l();
                            })),
                      (n.attributes = oe(function (e) {
                        return (
                          (e.className = "i"), !e.getAttribute("className")
                        );
                      })),
                      (n.getElementsByTagName = oe(function (e) {
                        return (
                          e.appendChild(i.createComment("")),
                          !e.getElementsByTagName("*").length
                        );
                      })),
                      (n.getElementsByClassName =
                        Q.test(i.getElementsByClassName) &&
                        oe(function (e) {
                          return (
                            (e.innerHTML =
                              "<div class='a'></div><div class='a i'></div>"),
                            (e.firstChild.className = "i"),
                            2 === e.getElementsByClassName("i").length
                          );
                        })),
                      (n.getById = oe(function (e) {
                        return (
                          (p.appendChild(e).id = y),
                          !i.getElementsByName || !i.getElementsByName(y).length
                        );
                      })),
                      n.getById
                        ? ((r.find.ID = function (e, t) {
                            if (typeof t.getElementById !== E && d) {
                              var n = t.getElementById(e);
                              return n && n.parentNode ? [n] : [];
                            }
                          }),
                          (r.filter.ID = function (e) {
                            var t = e.replace(ee, te);
                            return function (e) {
                              return e.getAttribute("id") === t;
                            };
                          }))
                        : (delete r.find.ID,
                          (r.filter.ID = function (e) {
                            var t = e.replace(ee, te);
                            return function (e) {
                              var n =
                                typeof e.getAttributeNode !== E &&
                                e.getAttributeNode("id");
                              return n && n.value === t;
                            };
                          })),
                      (r.find.TAG = n.getElementsByTagName
                        ? function (e, t) {
                            return typeof t.getElementsByTagName !== E
                              ? t.getElementsByTagName(e)
                              : void 0;
                          }
                        : function (e, t) {
                            var n,
                              r = [],
                              i = 0,
                              o = t.getElementsByTagName(e);
                            if ("*" === e) {
                              for (; (n = o[i++]); )
                                1 === n.nodeType && r.push(n);
                              return r;
                            }
                            return o;
                          }),
                      (r.find.CLASS =
                        n.getElementsByClassName &&
                        function (e, t) {
                          return typeof t.getElementsByClassName !== E && d
                            ? t.getElementsByClassName(e)
                            : void 0;
                        }),
                      (g = []),
                      (h = []),
                      (n.qsa = Q.test(i.querySelectorAll)) &&
                        (oe(function (e) {
                          (e.innerHTML =
                            "<select t=''><option selected=''></option></select>"),
                            e.querySelectorAll("[t^='']").length &&
                              h.push("[*^$]=" + F + "*(?:''|\"\")"),
                            e.querySelectorAll("[selected]").length ||
                              h.push("\\[" + F + "*(?:value|" + M + ")"),
                            e.querySelectorAll(":checked").length ||
                              h.push(":checked");
                        }),
                        oe(function (e) {
                          var t = i.createElement("input");
                          t.setAttribute("type", "hidden"),
                            e.appendChild(t).setAttribute("name", "D"),
                            e.querySelectorAll("[name=d]").length &&
                              h.push("name" + F + "*[*^$|!~]?="),
                            e.querySelectorAll(":enabled").length ||
                              h.push(":enabled", ":disabled"),
                            e.querySelectorAll("*,:x"),
                            h.push(",.*:");
                        })),
                      (n.matchesSelector = Q.test(
                        (m =
                          p.webkitMatchesSelector ||
                          p.mozMatchesSelector ||
                          p.oMatchesSelector ||
                          p.msMatchesSelector)
                      )) &&
                        oe(function (e) {
                          (n.disconnectedMatch = m.call(e, "div")),
                            m.call(e, "[s!='']:x"),
                            g.push("!=", $);
                        }),
                      (h = h.length && new RegExp(h.join("|"))),
                      (g = g.length && new RegExp(g.join("|"))),
                      (t = Q.test(p.compareDocumentPosition)),
                      (v =
                        t || Q.test(p.contains)
                          ? function (e, t) {
                              var n = 9 === e.nodeType ? e.documentElement : e,
                                r = t && t.parentNode;
                              return (
                                e === r ||
                                !(
                                  !r ||
                                  1 !== r.nodeType ||
                                  !(n.contains
                                    ? n.contains(r)
                                    : e.compareDocumentPosition &&
                                      16 & e.compareDocumentPosition(r))
                                )
                              );
                            }
                          : function (e, t) {
                              if (t)
                                for (; (t = t.parentNode); )
                                  if (t === e) return !0;
                              return !1;
                            }),
                      (N = t
                        ? function (e, t) {
                            if (e === t) return (c = !0), 0;
                            var r =
                              !e.compareDocumentPosition -
                              !t.compareDocumentPosition;
                            return (
                              r ||
                              (1 &
                                (r =
                                  (e.ownerDocument || e) ===
                                  (t.ownerDocument || t)
                                    ? e.compareDocumentPosition(t)
                                    : 1) ||
                              (!n.sortDetached &&
                                t.compareDocumentPosition(e) === r)
                                ? e === i || (e.ownerDocument === x && v(x, e))
                                  ? -1
                                  : t === i ||
                                    (t.ownerDocument === x && v(x, t))
                                  ? 1
                                  : u
                                  ? O.call(u, e) - O.call(u, t)
                                  : 0
                                : 4 & r
                                ? -1
                                : 1)
                            );
                          }
                        : function (e, t) {
                            if (e === t) return (c = !0), 0;
                            var n,
                              r = 0,
                              o = e.parentNode,
                              s = t.parentNode,
                              a = [e],
                              l = [t];
                            if (!o || !s)
                              return e === i
                                ? -1
                                : t === i
                                ? 1
                                : o
                                ? -1
                                : s
                                ? 1
                                : u
                                ? O.call(u, e) - O.call(u, t)
                                : 0;
                            if (o === s) return ae(e, t);
                            for (n = e; (n = n.parentNode); ) a.unshift(n);
                            for (n = t; (n = n.parentNode); ) l.unshift(n);
                            for (; a[r] === l[r]; ) r++;
                            return r
                              ? ae(a[r], l[r])
                              : a[r] === x
                              ? -1
                              : l[r] === x
                              ? 1
                              : 0;
                          }),
                      i)
                    : f;
                }),
              (ne.matches = function (e, t) {
                return ne(e, null, null, t);
              }),
              (ne.matchesSelector = function (e, t) {
                if (
                  ((e.ownerDocument || e) !== f && l(e),
                  (t = t.replace(z, "='$1']")),
                  !(
                    !n.matchesSelector ||
                    !d ||
                    (g && g.test(t)) ||
                    (h && h.test(t))
                  ))
                )
                  try {
                    var r = m.call(e, t);
                    if (
                      r ||
                      n.disconnectedMatch ||
                      (e.document && 11 !== e.document.nodeType)
                    )
                      return r;
                  } catch (e) {}
                return ne(t, f, null, [e]).length > 0;
              }),
              (ne.contains = function (e, t) {
                return (e.ownerDocument || e) !== f && l(e), v(e, t);
              }),
              (ne.attr = function (e, t) {
                (e.ownerDocument || e) !== f && l(e);
                var i = r.attrHandle[t.toLowerCase()],
                  o =
                    i && j.call(r.attrHandle, t.toLowerCase())
                      ? i(e, t, !d)
                      : void 0;
                return void 0 !== o
                  ? o
                  : n.attributes || !d
                  ? e.getAttribute(t)
                  : (o = e.getAttributeNode(t)) && o.specified
                  ? o.value
                  : null;
              }),
              (ne.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e);
              }),
              (ne.uniqueSort = function (e) {
                var t,
                  r = [],
                  i = 0,
                  o = 0;
                if (
                  ((c = !n.detectDuplicates),
                  (u = !n.sortStable && e.slice(0)),
                  e.sort(N),
                  c)
                ) {
                  for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
                  for (; i--; ) e.splice(r[i], 1);
                }
                return (u = null), e;
              }),
              (i = ne.getText =
                function (e) {
                  var t,
                    n = "",
                    r = 0,
                    o = e.nodeType;
                  if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                      if ("string" == typeof e.textContent)
                        return e.textContent;
                      for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                    } else if (3 === o || 4 === o) return e.nodeValue;
                  } else for (; (t = e[r++]); ) n += i(t);
                  return n;
                }),
              (r = ne.selectors =
                {
                  cacheLength: 50,
                  createPseudo: ie,
                  match: Y,
                  attrHandle: {},
                  find: {},
                  relative: {
                    ">": { dir: "parentNode", first: !0 },
                    " ": { dir: "parentNode" },
                    "+": { dir: "previousSibling", first: !0 },
                    "~": { dir: "previousSibling" },
                  },
                  preFilter: {
                    ATTR: function (e) {
                      return (
                        (e[1] = e[1].replace(ee, te)),
                        (e[3] = (e[4] || e[5] || "").replace(ee, te)),
                        "~=" === e[2] && (e[3] = " " + e[3] + " "),
                        e.slice(0, 4)
                      );
                    },
                    CHILD: function (e) {
                      return (
                        (e[1] = e[1].toLowerCase()),
                        "nth" === e[1].slice(0, 3)
                          ? (e[3] || ne.error(e[0]),
                            (e[4] = +(e[4]
                              ? e[5] + (e[6] || 1)
                              : 2 * ("even" === e[3] || "odd" === e[3]))),
                            (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                          : e[3] && ne.error(e[0]),
                        e
                      );
                    },
                    PSEUDO: function (e) {
                      var t,
                        n = !e[5] && e[2];
                      return Y.CHILD.test(e[0])
                        ? null
                        : (e[3] && void 0 !== e[4]
                            ? (e[2] = e[4])
                            : n &&
                              X.test(n) &&
                              (t = de(n, !0)) &&
                              (t = n.indexOf(")", n.length - t) - n.length) &&
                              ((e[0] = e[0].slice(0, t)),
                              (e[2] = n.slice(0, t))),
                          e.slice(0, 3));
                    },
                  },
                  filter: {
                    TAG: function (e) {
                      var t = e.replace(ee, te).toLowerCase();
                      return "*" === e
                        ? function () {
                            return !0;
                          }
                        : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t;
                          };
                    },
                    CLASS: function (e) {
                      var t = T[e + " "];
                      return (
                        t ||
                        ((t = new RegExp(
                          "(^|" + F + ")" + e + "(" + F + "|$)"
                        )) &&
                          T(e, function (e) {
                            return t.test(
                              ("string" == typeof e.className && e.className) ||
                                (typeof e.getAttribute !== E &&
                                  e.getAttribute("class")) ||
                                ""
                            );
                          }))
                      );
                    },
                    ATTR: function (e, t, n) {
                      return function (r) {
                        var i = ne.attr(r, e);
                        return null == i
                          ? "!=" === t
                          : !t ||
                              ((i += ""),
                              "=" === t
                                ? i === n
                                : "!=" === t
                                ? i !== n
                                : "^=" === t
                                ? n && 0 === i.indexOf(n)
                                : "*=" === t
                                ? n && i.indexOf(n) > -1
                                : "$=" === t
                                ? n && i.slice(-n.length) === n
                                : "~=" === t
                                ? (" " + i + " ").indexOf(n) > -1
                                : "|=" === t &&
                                  (i === n ||
                                    i.slice(0, n.length + 1) === n + "-"));
                      };
                    },
                    CHILD: function (e, t, n, r, i) {
                      var o = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        a = "of-type" === t;
                      return 1 === r && 0 === i
                        ? function (e) {
                            return !!e.parentNode;
                          }
                        : function (t, n, u) {
                            var c,
                              l,
                              f,
                              p,
                              d,
                              h,
                              g = o !== s ? "nextSibling" : "previousSibling",
                              m = t.parentNode,
                              v = a && t.nodeName.toLowerCase(),
                              x = !u && !a;
                            if (m) {
                              if (o) {
                                for (; g; ) {
                                  for (f = t; (f = f[g]); )
                                    if (
                                      a
                                        ? f.nodeName.toLowerCase() === v
                                        : 1 === f.nodeType
                                    )
                                      return !1;
                                  h = g = "only" === e && !h && "nextSibling";
                                }
                                return !0;
                              }
                              if (
                                ((h = [s ? m.firstChild : m.lastChild]), s && x)
                              ) {
                                for (
                                  d =
                                    (c =
                                      (l = m[y] || (m[y] = {}))[e] || [])[0] ===
                                      b && c[1],
                                    p = c[0] === b && c[2],
                                    f = d && m.childNodes[d];
                                  (f =
                                    (++d && f && f[g]) ||
                                    (p = d = 0) ||
                                    h.pop());

                                )
                                  if (1 === f.nodeType && ++p && f === t) {
                                    l[e] = [b, d, p];
                                    break;
                                  }
                              } else if (
                                x &&
                                (c = (t[y] || (t[y] = {}))[e]) &&
                                c[0] === b
                              )
                                p = c[1];
                              else
                                for (
                                  ;
                                  (f =
                                    (++d && f && f[g]) ||
                                    (p = d = 0) ||
                                    h.pop()) &&
                                  ((a
                                    ? f.nodeName.toLowerCase() !== v
                                    : 1 !== f.nodeType) ||
                                    !++p ||
                                    (x && ((f[y] || (f[y] = {}))[e] = [b, p]),
                                    f !== t));

                                );
                              return (
                                (p -= i) === r || (p % r == 0 && p / r >= 0)
                              );
                            }
                          };
                    },
                    PSEUDO: function (e, t) {
                      var n,
                        i =
                          r.pseudos[e] ||
                          r.setFilters[e.toLowerCase()] ||
                          ne.error("unsupported pseudo: " + e);
                      return i[y]
                        ? i(t)
                        : i.length > 1
                        ? ((n = [e, e, "", t]),
                          r.setFilters.hasOwnProperty(e.toLowerCase())
                            ? ie(function (e, n) {
                                for (var r, o = i(e, t), s = o.length; s--; )
                                  e[(r = O.call(e, o[s]))] = !(n[r] = o[s]);
                              })
                            : function (e) {
                                return i(e, 0, n);
                              })
                        : i;
                    },
                  },
                  pseudos: {
                    not: ie(function (e) {
                      var t = [],
                        n = [],
                        r = s(e.replace(I, "$1"));
                      return r[y]
                        ? ie(function (e, t, n, i) {
                            for (
                              var o, s = r(e, null, i, []), a = e.length;
                              a--;

                            )
                              (o = s[a]) && (e[a] = !(t[a] = o));
                          })
                        : function (e, i, o) {
                            return (t[0] = e), r(t, null, o, n), !n.pop();
                          };
                    }),
                    has: ie(function (e) {
                      return function (t) {
                        return ne(e, t).length > 0;
                      };
                    }),
                    contains: ie(function (e) {
                      return function (t) {
                        return (
                          (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                        );
                      };
                    }),
                    lang: ie(function (e) {
                      return (
                        U.test(e || "") || ne.error("unsupported lang: " + e),
                        (e = e.replace(ee, te).toLowerCase()),
                        function (t) {
                          var n;
                          do {
                            if (
                              (n = d
                                ? t.lang
                                : t.getAttribute("xml:lang") ||
                                  t.getAttribute("lang"))
                            )
                              return (
                                (n = n.toLowerCase()) === e ||
                                0 === n.indexOf(e + "-")
                              );
                          } while ((t = t.parentNode) && 1 === t.nodeType);
                          return !1;
                        }
                      );
                    }),
                    target: function (t) {
                      var n = e.location && e.location.hash;
                      return n && n.slice(1) === t.id;
                    },
                    root: function (e) {
                      return e === p;
                    },
                    focus: function (e) {
                      return (
                        e === f.activeElement &&
                        (!f.hasFocus || f.hasFocus()) &&
                        !!(e.type || e.href || ~e.tabIndex)
                      );
                    },
                    enabled: function (e) {
                      return !1 === e.disabled;
                    },
                    disabled: function (e) {
                      return !0 === e.disabled;
                    },
                    checked: function (e) {
                      var t = e.nodeName.toLowerCase();
                      return (
                        ("input" === t && !!e.checked) ||
                        ("option" === t && !!e.selected)
                      );
                    },
                    selected: function (e) {
                      return (
                        e.parentNode && e.parentNode.selectedIndex,
                        !0 === e.selected
                      );
                    },
                    empty: function (e) {
                      for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                      return !0;
                    },
                    parent: function (e) {
                      return !r.pseudos.empty(e);
                    },
                    header: function (e) {
                      return G.test(e.nodeName);
                    },
                    input: function (e) {
                      return V.test(e.nodeName);
                    },
                    button: function (e) {
                      var t = e.nodeName.toLowerCase();
                      return (
                        ("input" === t && "button" === e.type) || "button" === t
                      );
                    },
                    text: function (e) {
                      var t;
                      return (
                        "input" === e.nodeName.toLowerCase() &&
                        "text" === e.type &&
                        (null == (t = e.getAttribute("type")) ||
                          "text" === t.toLowerCase())
                      );
                    },
                    first: le(function () {
                      return [0];
                    }),
                    last: le(function (e, t) {
                      return [t - 1];
                    }),
                    eq: le(function (e, t, n) {
                      return [0 > n ? n + t : n];
                    }),
                    even: le(function (e, t) {
                      for (var n = 0; t > n; n += 2) e.push(n);
                      return e;
                    }),
                    odd: le(function (e, t) {
                      for (var n = 1; t > n; n += 2) e.push(n);
                      return e;
                    }),
                    lt: le(function (e, t, n) {
                      for (var r = 0 > n ? n + t : n; --r >= 0; ) e.push(r);
                      return e;
                    }),
                    gt: le(function (e, t, n) {
                      for (var r = 0 > n ? n + t : n; ++r < t; ) e.push(r);
                      return e;
                    }),
                  },
                }),
              (r.pseudos.nth = r.pseudos.eq),
              { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
                r.pseudos[t] = ue(t);
              for (t in { submit: !0, reset: !0 }) r.pseudos[t] = ce(t);
              function pe() {}
              function de(e, t) {
                var n,
                  i,
                  o,
                  s,
                  a,
                  u,
                  c,
                  l = C[e + " "];
                if (l) return t ? 0 : l.slice(0);
                for (a = e, u = [], c = r.preFilter; a; ) {
                  for (s in ((!n || (i = B.exec(a))) &&
                    (i && (a = a.slice(i[0].length) || a), u.push((o = []))),
                  (n = !1),
                  (i = _.exec(a)) &&
                    ((n = i.shift()),
                    o.push({ value: n, type: i[0].replace(I, " ") }),
                    (a = a.slice(n.length))),
                  r.filter))
                    !(i = Y[s].exec(a)) ||
                      (c[s] && !(i = c[s](i))) ||
                      ((n = i.shift()),
                      o.push({ value: n, type: s, matches: i }),
                      (a = a.slice(n.length)));
                  if (!n) break;
                }
                return t ? a.length : a ? ne.error(e) : C(e, u).slice(0);
              }
              function he(e) {
                for (var t = 0, n = e.length, r = ""; n > t; t++)
                  r += e[t].value;
                return r;
              }
              function ge(e, t, n) {
                var r = t.dir,
                  i = n && "parentNode" === r,
                  o = w++;
                return t.first
                  ? function (t, n, o) {
                      for (; (t = t[r]); )
                        if (1 === t.nodeType || i) return e(t, n, o);
                    }
                  : function (t, n, s) {
                      var a,
                        u,
                        c = [b, o];
                      if (s) {
                        for (; (t = t[r]); )
                          if ((1 === t.nodeType || i) && e(t, n, s)) return !0;
                      } else
                        for (; (t = t[r]); )
                          if (1 === t.nodeType || i) {
                            if (
                              (a = (u = t[y] || (t[y] = {}))[r]) &&
                              a[0] === b &&
                              a[1] === o
                            )
                              return (c[2] = a[2]);
                            if (((u[r] = c), (c[2] = e(t, n, s)))) return !0;
                          }
                    };
              }
              function me(e) {
                return e.length > 1
                  ? function (t, n, r) {
                      for (var i = e.length; i--; )
                        if (!e[i](t, n, r)) return !1;
                      return !0;
                    }
                  : e[0];
              }
              function ve(e, t, n, r, i) {
                for (
                  var o, s = [], a = 0, u = e.length, c = null != t;
                  u > a;
                  a++
                )
                  (o = e[a]) &&
                    (!n || n(o, r, i)) &&
                    (s.push(o), c && t.push(a));
                return s;
              }
              function ye(e, t, n, r, i, o) {
                return (
                  r && !r[y] && (r = ye(r)),
                  i && !i[y] && (i = ye(i, o)),
                  ie(function (o, s, a, u) {
                    var c,
                      l,
                      f,
                      p = [],
                      d = [],
                      h = s.length,
                      g =
                        o ||
                        (function (e, t, n) {
                          for (var r = 0, i = t.length; i > r; r++)
                            ne(e, t[r], n);
                          return n;
                        })(t || "*", a.nodeType ? [a] : a, []),
                      m = !e || (!o && t) ? g : ve(g, p, e, a, u),
                      v = n ? (i || (o ? e : h || r) ? [] : s) : m;
                    if ((n && n(m, v, a, u), r))
                      for (c = ve(v, d), r(c, [], a, u), l = c.length; l--; )
                        (f = c[l]) && (v[d[l]] = !(m[d[l]] = f));
                    if (o) {
                      if (i || e) {
                        if (i) {
                          for (c = [], l = v.length; l--; )
                            (f = v[l]) && c.push((m[l] = f));
                          i(null, (v = []), c, u);
                        }
                        for (l = v.length; l--; )
                          (f = v[l]) &&
                            (c = i ? O.call(o, f) : p[l]) > -1 &&
                            (o[c] = !(s[c] = f));
                      }
                    } else (v = ve(v === s ? v.splice(h, v.length) : v)), i ? i(null, s, v, u) : q.apply(s, v);
                  })
                );
              }
              function xe(e) {
                for (
                  var t,
                    n,
                    i,
                    o = e.length,
                    s = r.relative[e[0].type],
                    u = s || r.relative[" "],
                    c = s ? 1 : 0,
                    l = ge(
                      function (e) {
                        return e === t;
                      },
                      u,
                      !0
                    ),
                    f = ge(
                      function (e) {
                        return O.call(t, e) > -1;
                      },
                      u,
                      !0
                    ),
                    p = [
                      function (e, n, r) {
                        return (
                          (!s && (r || n !== a)) ||
                          ((t = n).nodeType ? l(e, n, r) : f(e, n, r))
                        );
                      },
                    ];
                  o > c;
                  c++
                )
                  if ((n = r.relative[e[c].type])) p = [ge(me(p), n)];
                  else {
                    if (
                      (n = r.filter[e[c].type].apply(null, e[c].matches))[y]
                    ) {
                      for (i = ++c; o > i && !r.relative[e[i].type]; i++);
                      return ye(
                        c > 1 && me(p),
                        c > 1 &&
                          he(
                            e
                              .slice(0, c - 1)
                              .concat({
                                value: " " === e[c - 2].type ? "*" : "",
                              })
                          ).replace(I, "$1"),
                        n,
                        i > c && xe(e.slice(c, i)),
                        o > i && xe((e = e.slice(i))),
                        o > i && he(e)
                      );
                    }
                    p.push(n);
                  }
                return me(p);
              }
              function be(e, t) {
                var n = t.length > 0,
                  i = e.length > 0,
                  o = function (o, s, u, c, l) {
                    var p,
                      d,
                      h,
                      g = 0,
                      m = "0",
                      v = o && [],
                      y = [],
                      x = a,
                      w = o || (i && r.find.TAG("*", l)),
                      T = (b += null == x ? 1 : Math.random() || 0.1),
                      C = w.length;
                    for (
                      l && (a = s !== f && s);
                      m !== C && null != (p = w[m]);
                      m++
                    ) {
                      if (i && p) {
                        for (d = 0; (h = e[d++]); )
                          if (h(p, s, u)) {
                            c.push(p);
                            break;
                          }
                        l && (b = T);
                      }
                      n && ((p = !h && p) && g--, o && v.push(p));
                    }
                    if (((g += m), n && m !== g)) {
                      for (d = 0; (h = t[d++]); ) h(v, y, s, u);
                      if (o) {
                        if (g > 0)
                          for (; m--; ) v[m] || y[m] || (y[m] = A.call(c));
                        y = ve(y);
                      }
                      q.apply(c, y),
                        l &&
                          !o &&
                          y.length > 0 &&
                          g + t.length > 1 &&
                          ne.uniqueSort(c);
                    }
                    return l && ((b = T), (a = x)), v;
                  };
                return n ? ie(o) : o;
              }
              function we(e, t, i, o) {
                var a,
                  u,
                  c,
                  l,
                  f,
                  p = de(e);
                if (!o && 1 === p.length) {
                  if (
                    (u = p[0] = p[0].slice(0)).length > 2 &&
                    "ID" === (c = u[0]).type &&
                    n.getById &&
                    9 === t.nodeType &&
                    d &&
                    r.relative[u[1].type]
                  ) {
                    if (
                      !(t = (r.find.ID(c.matches[0].replace(ee, te), t) ||
                        [])[0])
                    )
                      return i;
                    e = e.slice(u.shift().value.length);
                  }
                  for (
                    a = Y.needsContext.test(e) ? 0 : u.length;
                    a-- && ((c = u[a]), !r.relative[(l = c.type)]);

                  )
                    if (
                      (f = r.find[l]) &&
                      (o = f(
                        c.matches[0].replace(ee, te),
                        (Z.test(u[0].type) && fe(t.parentNode)) || t
                      ))
                    ) {
                      if ((u.splice(a, 1), !(e = o.length && he(u))))
                        return q.apply(i, o), i;
                      break;
                    }
                }
                return (
                  s(e, p)(o, t, !d, i, (Z.test(e) && fe(t.parentNode)) || t), i
                );
              }
              return (
                (pe.prototype = r.filters = r.pseudos),
                (r.setFilters = new pe()),
                (s = ne.compile =
                  function (e, t) {
                    var n,
                      r = [],
                      i = [],
                      o = k[e + " "];
                    if (!o) {
                      for (t || (t = de(e)), n = t.length; n--; )
                        (o = xe(t[n]))[y] ? r.push(o) : i.push(o);
                      o = k(e, be(i, r));
                    }
                    return o;
                  }),
                (n.sortStable = y.split("").sort(N).join("") === y),
                (n.detectDuplicates = !!c),
                l(),
                (n.sortDetached = oe(function (e) {
                  return 1 & e.compareDocumentPosition(f.createElement("div"));
                })),
                oe(function (e) {
                  return (
                    (e.innerHTML = "<a href='#'></a>"),
                    "#" === e.firstChild.getAttribute("href")
                  );
                }) ||
                  se("type|href|height|width", function (e, t, n) {
                    return n
                      ? void 0
                      : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                  }),
                (n.attributes &&
                  oe(function (e) {
                    return (
                      (e.innerHTML = "<input/>"),
                      e.firstChild.setAttribute("value", ""),
                      "" === e.firstChild.getAttribute("value")
                    );
                  })) ||
                  se("value", function (e, t, n) {
                    return n || "input" !== e.nodeName.toLowerCase()
                      ? void 0
                      : e.defaultValue;
                  }),
                oe(function (e) {
                  return null == e.getAttribute("disabled");
                }) ||
                  se(M, function (e, t, n) {
                    var r;
                    return n
                      ? void 0
                      : !0 === e[t]
                      ? t.toLowerCase()
                      : (r = e.getAttributeNode(t)) && r.specified
                      ? r.value
                      : null;
                  }),
                ne
              );
            })(r);
            (v.find = T),
              (v.expr = T.selectors),
              (v.expr[":"] = v.expr.pseudos),
              (v.unique = T.uniqueSort),
              (v.text = T.getText),
              (v.isXMLDoc = T.isXML),
              (v.contains = T.contains);
            var C = v.expr.match.needsContext,
              k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
              N = /^.[^:#\[\.,]*$/;
            function E(e, t, n) {
              if (v.isFunction(t))
                return v.grep(e, function (e, r) {
                  return !!t.call(e, r, e) !== n;
                });
              if (t.nodeType)
                return v.grep(e, function (e) {
                  return (e === t) !== n;
                });
              if ("string" == typeof t) {
                if (N.test(t)) return v.filter(t, e, n);
                t = v.filter(t, e);
              }
              return v.grep(e, function (e) {
                return c.call(t, e) >= 0 !== n;
              });
            }
            (v.filter = function (e, t, n) {
              var r = t[0];
              return (
                n && (e = ":not(" + e + ")"),
                1 === t.length && 1 === r.nodeType
                  ? v.find.matchesSelector(r, e)
                    ? [r]
                    : []
                  : v.find.matches(
                      e,
                      v.grep(t, function (e) {
                        return 1 === e.nodeType;
                      })
                    )
              );
            }),
              v.fn.extend({
                find: function (e) {
                  var t,
                    n = this.length,
                    r = [],
                    i = this;
                  if ("string" != typeof e)
                    return this.pushStack(
                      v(e).filter(function () {
                        for (t = 0; n > t; t++)
                          if (v.contains(i[t], this)) return !0;
                      })
                    );
                  for (t = 0; n > t; t++) v.find(e, i[t], r);
                  return (
                    ((r = this.pushStack(n > 1 ? v.unique(r) : r)).selector =
                      this.selector ? this.selector + " " + e : e),
                    r
                  );
                },
                filter: function (e) {
                  return this.pushStack(E(this, e || [], !1));
                },
                not: function (e) {
                  return this.pushStack(E(this, e || [], !0));
                },
                is: function (e) {
                  return !!E(
                    this,
                    "string" == typeof e && C.test(e) ? v(e) : e || [],
                    !1
                  ).length;
                },
              });
            var S,
              j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
              D = (v.fn.init = function (e, t) {
                var n, r;
                if (!e) return this;
                if ("string" == typeof e) {
                  if (
                    !(n =
                      "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                        ? [null, e, null]
                        : j.exec(e)) ||
                    (!n[1] && t)
                  )
                    return !t || t.jquery
                      ? (t || S).find(e)
                      : this.constructor(t).find(e);
                  if (n[1]) {
                    if (
                      ((t = t instanceof v ? t[0] : t),
                      v.merge(
                        this,
                        v.parseHTML(
                          n[1],
                          t && t.nodeType ? t.ownerDocument || t : g,
                          !0
                        )
                      ),
                      k.test(n[1]) && v.isPlainObject(t))
                    )
                      for (n in t)
                        v.isFunction(this[n])
                          ? this[n](t[n])
                          : this.attr(n, t[n]);
                    return this;
                  }
                  return (
                    (r = g.getElementById(n[2])) &&
                      r.parentNode &&
                      ((this.length = 1), (this[0] = r)),
                    (this.context = g),
                    (this.selector = e),
                    this
                  );
                }
                return e.nodeType
                  ? ((this.context = this[0] = e), (this.length = 1), this)
                  : v.isFunction(e)
                  ? void 0 !== S.ready
                    ? S.ready(e)
                    : e(v)
                  : (void 0 !== e.selector &&
                      ((this.selector = e.selector),
                      (this.context = e.context)),
                    v.makeArray(e, this));
              });
            (D.prototype = v.fn), (S = v(g));
            var A = /^(?:parents|prev(?:Until|All))/,
              L = { children: !0, contents: !0, next: !0, prev: !0 };
            function q(e, t) {
              for (; (e = e[t]) && 1 !== e.nodeType; );
              return e;
            }
            v.extend({
              dir: function (e, t, n) {
                for (
                  var r = [], i = void 0 !== n;
                  (e = e[t]) && 9 !== e.nodeType;

                )
                  if (1 === e.nodeType) {
                    if (i && v(e).is(n)) break;
                    r.push(e);
                  }
                return r;
              },
              sibling: function (e, t) {
                for (var n = []; e; e = e.nextSibling)
                  1 === e.nodeType && e !== t && n.push(e);
                return n;
              },
            }),
              v.fn.extend({
                has: function (e) {
                  var t = v(e, this),
                    n = t.length;
                  return this.filter(function () {
                    for (var e = 0; n > e; e++)
                      if (v.contains(this, t[e])) return !0;
                  });
                },
                closest: function (e, t) {
                  for (
                    var n,
                      r = 0,
                      i = this.length,
                      o = [],
                      s =
                        C.test(e) || "string" != typeof e
                          ? v(e, t || this.context)
                          : 0;
                    i > r;
                    r++
                  )
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                      if (
                        n.nodeType < 11 &&
                        (s
                          ? s.index(n) > -1
                          : 1 === n.nodeType && v.find.matchesSelector(n, e))
                      ) {
                        o.push(n);
                        break;
                      }
                  return this.pushStack(o.length > 1 ? v.unique(o) : o);
                },
                index: function (e) {
                  return e
                    ? "string" == typeof e
                      ? c.call(v(e), this[0])
                      : c.call(this, e.jquery ? e[0] : e)
                    : this[0] && this[0].parentNode
                    ? this.first().prevAll().length
                    : -1;
                },
                add: function (e, t) {
                  return this.pushStack(v.unique(v.merge(this.get(), v(e, t))));
                },
                addBack: function (e) {
                  return this.add(
                    null == e ? this.prevObject : this.prevObject.filter(e)
                  );
                },
              }),
              v.each(
                {
                  parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null;
                  },
                  parents: function (e) {
                    return v.dir(e, "parentNode");
                  },
                  parentsUntil: function (e, t, n) {
                    return v.dir(e, "parentNode", n);
                  },
                  next: function (e) {
                    return q(e, "nextSibling");
                  },
                  prev: function (e) {
                    return q(e, "previousSibling");
                  },
                  nextAll: function (e) {
                    return v.dir(e, "nextSibling");
                  },
                  prevAll: function (e) {
                    return v.dir(e, "previousSibling");
                  },
                  nextUntil: function (e, t, n) {
                    return v.dir(e, "nextSibling", n);
                  },
                  prevUntil: function (e, t, n) {
                    return v.dir(e, "previousSibling", n);
                  },
                  siblings: function (e) {
                    return v.sibling((e.parentNode || {}).firstChild, e);
                  },
                  children: function (e) {
                    return v.sibling(e.firstChild);
                  },
                  contents: function (e) {
                    return e.contentDocument || v.merge([], e.childNodes);
                  },
                },
                function (e, t) {
                  v.fn[e] = function (n, r) {
                    var i = v.map(this, t, n);
                    return (
                      "Until" !== e.slice(-5) && (r = n),
                      r && "string" == typeof r && (i = v.filter(r, i)),
                      this.length > 1 &&
                        (L[e] || v.unique(i), A.test(e) && i.reverse()),
                      this.pushStack(i)
                    );
                  };
                }
              );
            var H,
              O = /\S+/g,
              M = {};
            function F() {
              g.removeEventListener("DOMContentLoaded", F, !1),
                r.removeEventListener("load", F, !1),
                v.ready();
            }
            (v.Callbacks = function (e) {
              e =
                "string" == typeof e
                  ? M[e] ||
                    (function (e) {
                      var t = (M[e] = {});
                      return (
                        v.each(e.match(O) || [], function (e, n) {
                          t[n] = !0;
                        }),
                        t
                      );
                    })(e)
                  : v.extend({}, e);
              var t,
                n,
                r,
                i,
                o,
                s,
                a = [],
                u = !e.once && [],
                c = function (f) {
                  for (
                    t = e.memory && f,
                      n = !0,
                      s = i || 0,
                      i = 0,
                      o = a.length,
                      r = !0;
                    a && o > s;
                    s++
                  )
                    if (!1 === a[s].apply(f[0], f[1]) && e.stopOnFalse) {
                      t = !1;
                      break;
                    }
                  (r = !1),
                    a &&
                      (u
                        ? u.length && c(u.shift())
                        : t
                        ? (a = [])
                        : l.disable());
                },
                l = {
                  add: function () {
                    if (a) {
                      var n = a.length;
                      !(function t(n) {
                        v.each(n, function (n, r) {
                          var i = v.type(r);
                          "function" === i
                            ? (e.unique && l.has(r)) || a.push(r)
                            : r && r.length && "string" !== i && t(r);
                        });
                      })(arguments),
                        r ? (o = a.length) : t && ((i = n), c(t));
                    }
                    return this;
                  },
                  remove: function () {
                    return (
                      a &&
                        v.each(arguments, function (e, t) {
                          for (var n; (n = v.inArray(t, a, n)) > -1; )
                            a.splice(n, 1), r && (o >= n && o--, s >= n && s--);
                        }),
                      this
                    );
                  },
                  has: function (e) {
                    return e ? v.inArray(e, a) > -1 : !(!a || !a.length);
                  },
                  empty: function () {
                    return (a = []), (o = 0), this;
                  },
                  disable: function () {
                    return (a = u = t = void 0), this;
                  },
                  disabled: function () {
                    return !a;
                  },
                  lock: function () {
                    return (u = void 0), t || l.disable(), this;
                  },
                  locked: function () {
                    return !u;
                  },
                  fireWith: function (e, t) {
                    return (
                      !a ||
                        (n && !u) ||
                        ((t = [e, (t = t || []).slice ? t.slice() : t]),
                        r ? u.push(t) : c(t)),
                      this
                    );
                  },
                  fire: function () {
                    return l.fireWith(this, arguments), this;
                  },
                  fired: function () {
                    return !!n;
                  },
                };
              return l;
            }),
              v.extend({
                Deferred: function (e) {
                  var t = [
                      [
                        "resolve",
                        "done",
                        v.Callbacks("once memory"),
                        "resolved",
                      ],
                      [
                        "reject",
                        "fail",
                        v.Callbacks("once memory"),
                        "rejected",
                      ],
                      ["notify", "progress", v.Callbacks("memory")],
                    ],
                    n = "pending",
                    r = {
                      state: function () {
                        return n;
                      },
                      always: function () {
                        return i.done(arguments).fail(arguments), this;
                      },
                      then: function () {
                        var e = arguments;
                        return v
                          .Deferred(function (n) {
                            v.each(t, function (t, o) {
                              var s = v.isFunction(e[t]) && e[t];
                              i[o[1]](function () {
                                var e = s && s.apply(this, arguments);
                                e && v.isFunction(e.promise)
                                  ? e
                                      .promise()
                                      .done(n.resolve)
                                      .fail(n.reject)
                                      .progress(n.notify)
                                  : n[o[0] + "With"](
                                      this === r ? n.promise() : this,
                                      s ? [e] : arguments
                                    );
                              });
                            }),
                              (e = null);
                          })
                          .promise();
                      },
                      promise: function (e) {
                        return null != e ? v.extend(e, r) : r;
                      },
                    },
                    i = {};
                  return (
                    (r.pipe = r.then),
                    v.each(t, function (e, o) {
                      var s = o[2],
                        a = o[3];
                      (r[o[1]] = s.add),
                        a &&
                          s.add(
                            function () {
                              n = a;
                            },
                            t[1 ^ e][2].disable,
                            t[2][2].lock
                          ),
                        (i[o[0]] = function () {
                          return (
                            i[o[0] + "With"](this === i ? r : this, arguments),
                            this
                          );
                        }),
                        (i[o[0] + "With"] = s.fireWith);
                    }),
                    r.promise(i),
                    e && e.call(i, i),
                    i
                  );
                },
                when: function (e) {
                  var t,
                    n,
                    r,
                    i = 0,
                    o = s.call(arguments),
                    a = o.length,
                    u = 1 !== a || (e && v.isFunction(e.promise)) ? a : 0,
                    c = 1 === u ? e : v.Deferred(),
                    l = function (e, n, r) {
                      return function (i) {
                        (n[e] = this),
                          (r[e] = arguments.length > 1 ? s.call(arguments) : i),
                          r === t
                            ? c.notifyWith(n, r)
                            : --u || c.resolveWith(n, r);
                      };
                    };
                  if (a > 1)
                    for (
                      t = new Array(a), n = new Array(a), r = new Array(a);
                      a > i;
                      i++
                    )
                      o[i] && v.isFunction(o[i].promise)
                        ? o[i]
                            .promise()
                            .done(l(i, r, o))
                            .fail(c.reject)
                            .progress(l(i, n, t))
                        : --u;
                  return u || c.resolveWith(r, o), c.promise();
                },
              }),
              (v.fn.ready = function (e) {
                return v.ready.promise().done(e), this;
              }),
              v.extend({
                isReady: !1,
                readyWait: 1,
                holdReady: function (e) {
                  e ? v.readyWait++ : v.ready(!0);
                },
                ready: function (e) {
                  (!0 === e ? --v.readyWait : v.isReady) ||
                    ((v.isReady = !0),
                    (!0 !== e && --v.readyWait > 0) ||
                      (H.resolveWith(g, [v]),
                      v.fn.trigger && v(g).trigger("ready").off("ready")));
                },
              }),
              (v.ready.promise = function (e) {
                return (
                  H ||
                    ((H = v.Deferred()),
                    "complete" === g.readyState
                      ? setTimeout(v.ready)
                      : (g.addEventListener("DOMContentLoaded", F, !1),
                        r.addEventListener("load", F, !1))),
                  H.promise(e)
                );
              }),
              v.ready.promise();
            var P = (v.access = function (e, t, n, r, i, o, s) {
              var a = 0,
                u = e.length,
                c = null == n;
              if ("object" === v.type(n))
                for (a in ((i = !0), n)) v.access(e, t, a, n[a], !0, o, s);
              else if (
                void 0 !== r &&
                ((i = !0),
                v.isFunction(r) || (s = !0),
                c &&
                  (s
                    ? (t.call(e, r), (t = null))
                    : ((c = t),
                      (t = function (e, t, n) {
                        return c.call(v(e), n);
                      }))),
                t)
              )
                for (; u > a; a++)
                  t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
              return i ? e : c ? t.call(e) : u ? t(e[0], n) : o;
            });
            function R() {
              Object.defineProperty((this.cache = {}), 0, {
                get: function () {
                  return {};
                },
              }),
                (this.expando = v.expando + Math.random());
            }
            (v.acceptData = function (e) {
              return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
            }),
              (R.uid = 1),
              (R.accepts = v.acceptData),
              (R.prototype = {
                key: function (e) {
                  if (!R.accepts(e)) return 0;
                  var t = {},
                    n = e[this.expando];
                  if (!n) {
                    n = R.uid++;
                    try {
                      (t[this.expando] = { value: n }),
                        Object.defineProperties(e, t);
                    } catch (r) {
                      (t[this.expando] = n), v.extend(e, t);
                    }
                  }
                  return this.cache[n] || (this.cache[n] = {}), n;
                },
                set: function (e, t, n) {
                  var r,
                    i = this.key(e),
                    o = this.cache[i];
                  if ("string" == typeof t) o[t] = n;
                  else if (v.isEmptyObject(o)) v.extend(this.cache[i], t);
                  else for (r in t) o[r] = t[r];
                  return o;
                },
                get: function (e, t) {
                  var n = this.cache[this.key(e)];
                  return void 0 === t ? n : n[t];
                },
                access: function (e, t, n) {
                  var r;
                  return void 0 === t ||
                    (t && "string" == typeof t && void 0 === n)
                    ? void 0 !== (r = this.get(e, t))
                      ? r
                      : this.get(e, v.camelCase(t))
                    : (this.set(e, t, n), void 0 !== n ? n : t);
                },
                remove: function (e, t) {
                  var n,
                    r,
                    i,
                    o = this.key(e),
                    s = this.cache[o];
                  if (void 0 === t) this.cache[o] = {};
                  else {
                    v.isArray(t)
                      ? (r = t.concat(t.map(v.camelCase)))
                      : ((i = v.camelCase(t)),
                        (r =
                          t in s
                            ? [t, i]
                            : (r = i) in s
                            ? [r]
                            : r.match(O) || [])),
                      (n = r.length);
                    for (; n--; ) delete s[r[n]];
                  }
                },
                hasData: function (e) {
                  return !v.isEmptyObject(this.cache[e[this.expando]] || {});
                },
                discard: function (e) {
                  e[this.expando] && delete this.cache[e[this.expando]];
                },
              });
            var W = new R(),
              $ = new R(),
              I = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
              B = /([A-Z])/g;
            function _(e, t, n) {
              var r;
              if (void 0 === n && 1 === e.nodeType)
                if (
                  ((r = "data-" + t.replace(B, "-$1").toLowerCase()),
                  "string" == typeof (n = e.getAttribute(r)))
                ) {
                  try {
                    n =
                      "true" === n ||
                      ("false" !== n &&
                        ("null" === n
                          ? null
                          : +n + "" === n
                          ? +n
                          : I.test(n)
                          ? v.parseJSON(n)
                          : n));
                  } catch (e) {}
                  $.set(e, t, n);
                } else n = void 0;
              return n;
            }
            v.extend({
              hasData: function (e) {
                return $.hasData(e) || W.hasData(e);
              },
              data: function (e, t, n) {
                return $.access(e, t, n);
              },
              removeData: function (e, t) {
                $.remove(e, t);
              },
              _data: function (e, t, n) {
                return W.access(e, t, n);
              },
              _removeData: function (e, t) {
                W.remove(e, t);
              },
            }),
              v.fn.extend({
                data: function (e, t) {
                  var n,
                    r,
                    i,
                    o = this[0],
                    s = o && o.attributes;
                  if (void 0 === e) {
                    if (
                      this.length &&
                      ((i = $.get(o)),
                      1 === o.nodeType && !W.get(o, "hasDataAttrs"))
                    ) {
                      for (n = s.length; n--; )
                        0 === (r = s[n].name).indexOf("data-") &&
                          ((r = v.camelCase(r.slice(5))), _(o, r, i[r]));
                      W.set(o, "hasDataAttrs", !0);
                    }
                    return i;
                  }
                  return "object" == typeof e
                    ? this.each(function () {
                        $.set(this, e);
                      })
                    : P(
                        this,
                        function (t) {
                          var n,
                            r = v.camelCase(e);
                          if (o && void 0 === t) {
                            if (void 0 !== (n = $.get(o, e))) return n;
                            if (void 0 !== (n = $.get(o, r))) return n;
                            if (void 0 !== (n = _(o, r, void 0))) return n;
                          } else
                            this.each(function () {
                              var n = $.get(this, r);
                              $.set(this, r, t),
                                -1 !== e.indexOf("-") &&
                                  void 0 !== n &&
                                  $.set(this, e, t);
                            });
                        },
                        null,
                        t,
                        arguments.length > 1,
                        null,
                        !0
                      );
                },
                removeData: function (e) {
                  return this.each(function () {
                    $.remove(this, e);
                  });
                },
              }),
              v.extend({
                queue: function (e, t, n) {
                  var r;
                  return e
                    ? ((t = (t || "fx") + "queue"),
                      (r = W.get(e, t)),
                      n &&
                        (!r || v.isArray(n)
                          ? (r = W.access(e, t, v.makeArray(n)))
                          : r.push(n)),
                      r || [])
                    : void 0;
                },
                dequeue: function (e, t) {
                  t = t || "fx";
                  var n = v.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = v._queueHooks(e, t);
                  "inprogress" === i && ((i = n.shift()), r--),
                    i &&
                      ("fx" === t && n.unshift("inprogress"),
                      delete o.stop,
                      i.call(
                        e,
                        function () {
                          v.dequeue(e, t);
                        },
                        o
                      )),
                    !r && o && o.empty.fire();
                },
                _queueHooks: function (e, t) {
                  var n = t + "queueHooks";
                  return (
                    W.get(e, n) ||
                    W.access(e, n, {
                      empty: v.Callbacks("once memory").add(function () {
                        W.remove(e, [t + "queue", n]);
                      }),
                    })
                  );
                },
              }),
              v.fn.extend({
                queue: function (e, t) {
                  var n = 2;
                  return (
                    "string" != typeof e && ((t = e), (e = "fx"), n--),
                    arguments.length < n
                      ? v.queue(this[0], e)
                      : void 0 === t
                      ? this
                      : this.each(function () {
                          var n = v.queue(this, e, t);
                          v._queueHooks(this, e),
                            "fx" === e &&
                              "inprogress" !== n[0] &&
                              v.dequeue(this, e);
                        })
                  );
                },
                dequeue: function (e) {
                  return this.each(function () {
                    v.dequeue(this, e);
                  });
                },
                clearQueue: function (e) {
                  return this.queue(e || "fx", []);
                },
                promise: function (e, t) {
                  var n,
                    r = 1,
                    i = v.Deferred(),
                    o = this,
                    s = this.length,
                    a = function () {
                      --r || i.resolveWith(o, [o]);
                    };
                  for (
                    "string" != typeof e && ((t = e), (e = void 0)),
                      e = e || "fx";
                    s--;

                  )
                    (n = W.get(o[s], e + "queueHooks")) &&
                      n.empty &&
                      (r++, n.empty.add(a));
                  return a(), i.promise(t);
                },
              });
            var z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
              X = ["Top", "Right", "Bottom", "Left"],
              U = function (e, t) {
                return (
                  (e = t || e),
                  "none" === v.css(e, "display") ||
                    !v.contains(e.ownerDocument, e)
                );
              },
              Y = /^(?:checkbox|radio)$/i;
            !(function () {
              var e = g
                .createDocumentFragment()
                .appendChild(g.createElement("div"));
              (e.innerHTML =
                "<input type='radio' checked='checked' name='t'/>"),
                (h.checkClone = e
                  .cloneNode(!0)
                  .cloneNode(!0).lastChild.checked),
                (e.innerHTML = "<textarea>x</textarea>"),
                (h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue);
            })();
            var V = "undefined";
            h.focusinBubbles = "onfocusin" in r;
            var G = /^key/,
              Q = /^(?:mouse|contextmenu)|click/,
              J = /^(?:focusinfocus|focusoutblur)$/,
              Z = /^([^.]*)(?:\.(.+)|)$/;
            function K() {
              return !0;
            }
            function ee() {
              return !1;
            }
            function te() {
              try {
                return g.activeElement;
              } catch (e) {}
            }
            (v.event = {
              global: {},
              add: function (e, t, n, r, i) {
                var o,
                  s,
                  a,
                  u,
                  c,
                  l,
                  f,
                  p,
                  d,
                  h,
                  g,
                  m = W.get(e);
                if (m)
                  for (
                    n.handler && ((n = (o = n).handler), (i = o.selector)),
                      n.guid || (n.guid = v.guid++),
                      (u = m.events) || (u = m.events = {}),
                      (s = m.handle) ||
                        (s = m.handle =
                          function (t) {
                            return typeof v !== V &&
                              v.event.triggered !== t.type
                              ? v.event.dispatch.apply(e, arguments)
                              : void 0;
                          }),
                      c = (t = (t || "").match(O) || [""]).length;
                    c--;

                  )
                    (d = g = (a = Z.exec(t[c]) || [])[1]),
                      (h = (a[2] || "").split(".").sort()),
                      d &&
                        ((f = v.event.special[d] || {}),
                        (d = (i ? f.delegateType : f.bindType) || d),
                        (f = v.event.special[d] || {}),
                        (l = v.extend(
                          {
                            type: d,
                            origType: g,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: i,
                            needsContext:
                              i && v.expr.match.needsContext.test(i),
                            namespace: h.join("."),
                          },
                          o
                        )),
                        (p = u[d]) ||
                          (((p = u[d] = []).delegateCount = 0),
                          (f.setup && !1 !== f.setup.call(e, r, h, s)) ||
                            (e.addEventListener &&
                              e.addEventListener(d, s, !1))),
                        f.add &&
                          (f.add.call(e, l),
                          l.handler.guid || (l.handler.guid = n.guid)),
                        i ? p.splice(p.delegateCount++, 0, l) : p.push(l),
                        (v.event.global[d] = !0));
              },
              remove: function (e, t, n, r, i) {
                var o,
                  s,
                  a,
                  u,
                  c,
                  l,
                  f,
                  p,
                  d,
                  h,
                  g,
                  m = W.hasData(e) && W.get(e);
                if (m && (u = m.events)) {
                  for (c = (t = (t || "").match(O) || [""]).length; c--; )
                    if (
                      ((d = g = (a = Z.exec(t[c]) || [])[1]),
                      (h = (a[2] || "").split(".").sort()),
                      d)
                    ) {
                      for (
                        f = v.event.special[d] || {},
                          p =
                            u[(d = (r ? f.delegateType : f.bindType) || d)] ||
                            [],
                          a =
                            a[2] &&
                            new RegExp(
                              "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                            ),
                          s = o = p.length;
                        o--;

                      )
                        (l = p[o]),
                          (!i && g !== l.origType) ||
                            (n && n.guid !== l.guid) ||
                            (a && !a.test(l.namespace)) ||
                            (r &&
                              r !== l.selector &&
                              ("**" !== r || !l.selector)) ||
                            (p.splice(o, 1),
                            l.selector && p.delegateCount--,
                            f.remove && f.remove.call(e, l));
                      s &&
                        !p.length &&
                        ((f.teardown &&
                          !1 !== f.teardown.call(e, h, m.handle)) ||
                          v.removeEvent(e, d, m.handle),
                        delete u[d]);
                    } else for (d in u) v.event.remove(e, d + t[c], n, r, !0);
                  v.isEmptyObject(u) &&
                    (delete m.handle, W.remove(e, "events"));
                }
              },
              trigger: function (e, t, n, i) {
                var o,
                  s,
                  a,
                  u,
                  c,
                  l,
                  f,
                  d = [n || g],
                  h = p.call(e, "type") ? e.type : e,
                  m = p.call(e, "namespace") ? e.namespace.split(".") : [];
                if (
                  ((s = a = n = n || g),
                  3 !== n.nodeType &&
                    8 !== n.nodeType &&
                    !J.test(h + v.event.triggered) &&
                    (h.indexOf(".") >= 0 &&
                      ((m = h.split(".")), (h = m.shift()), m.sort()),
                    (c = h.indexOf(":") < 0 && "on" + h),
                    ((e = e[v.expando]
                      ? e
                      : new v.Event(h, "object" == typeof e && e)).isTrigger = i
                      ? 2
                      : 3),
                    (e.namespace = m.join(".")),
                    (e.namespace_re = e.namespace
                      ? new RegExp(
                          "(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"
                        )
                      : null),
                    (e.result = void 0),
                    e.target || (e.target = n),
                    (t = null == t ? [e] : v.makeArray(t, [e])),
                    (f = v.event.special[h] || {}),
                    i || !f.trigger || !1 !== f.trigger.apply(n, t)))
                ) {
                  if (!i && !f.noBubble && !v.isWindow(n)) {
                    for (
                      u = f.delegateType || h,
                        J.test(u + h) || (s = s.parentNode);
                      s;
                      s = s.parentNode
                    )
                      d.push(s), (a = s);
                    a === (n.ownerDocument || g) &&
                      d.push(a.defaultView || a.parentWindow || r);
                  }
                  for (o = 0; (s = d[o++]) && !e.isPropagationStopped(); )
                    (e.type = o > 1 ? u : f.bindType || h),
                      (l =
                        (W.get(s, "events") || {})[e.type] &&
                        W.get(s, "handle")) && l.apply(s, t),
                      (l = c && s[c]) &&
                        l.apply &&
                        v.acceptData(s) &&
                        ((e.result = l.apply(s, t)),
                        !1 === e.result && e.preventDefault());
                  return (
                    (e.type = h),
                    i ||
                      e.isDefaultPrevented() ||
                      (f._default && !1 !== f._default.apply(d.pop(), t)) ||
                      !v.acceptData(n) ||
                      (c &&
                        v.isFunction(n[h]) &&
                        !v.isWindow(n) &&
                        ((a = n[c]) && (n[c] = null),
                        (v.event.triggered = h),
                        n[h](),
                        (v.event.triggered = void 0),
                        a && (n[c] = a))),
                    e.result
                  );
                }
              },
              dispatch: function (e) {
                e = v.event.fix(e);
                var t,
                  n,
                  r,
                  i,
                  o,
                  a = [],
                  u = s.call(arguments),
                  c = (W.get(this, "events") || {})[e.type] || [],
                  l = v.event.special[e.type] || {};
                if (
                  ((u[0] = e),
                  (e.delegateTarget = this),
                  !l.preDispatch || !1 !== l.preDispatch.call(this, e))
                ) {
                  for (
                    a = v.event.handlers.call(this, e, c), t = 0;
                    (i = a[t++]) && !e.isPropagationStopped();

                  )
                    for (
                      e.currentTarget = i.elem, n = 0;
                      (o = i.handlers[n++]) &&
                      !e.isImmediatePropagationStopped();

                    )
                      (!e.namespace_re || e.namespace_re.test(o.namespace)) &&
                        ((e.handleObj = o),
                        (e.data = o.data),
                        void 0 !==
                          (r = (
                            (v.event.special[o.origType] || {}).handle ||
                            o.handler
                          ).apply(i.elem, u)) &&
                          !1 === (e.result = r) &&
                          (e.preventDefault(), e.stopPropagation()));
                  return (
                    l.postDispatch && l.postDispatch.call(this, e), e.result
                  );
                }
              },
              handlers: function (e, t) {
                var n,
                  r,
                  i,
                  o,
                  s = [],
                  a = t.delegateCount,
                  u = e.target;
                if (a && u.nodeType && (!e.button || "click" !== e.type))
                  for (; u !== this; u = u.parentNode || this)
                    if (!0 !== u.disabled || "click" !== e.type) {
                      for (r = [], n = 0; a > n; n++)
                        void 0 === r[(i = (o = t[n]).selector + " ")] &&
                          (r[i] = o.needsContext
                            ? v(i, this).index(u) >= 0
                            : v.find(i, this, null, [u]).length),
                          r[i] && r.push(o);
                      r.length && s.push({ elem: u, handlers: r });
                    }
                return (
                  a < t.length && s.push({ elem: this, handlers: t.slice(a) }),
                  s
                );
              },
              props:
                "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
                  " "
                ),
              fixHooks: {},
              keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function (e, t) {
                  return (
                    null == e.which &&
                      (e.which = null != t.charCode ? t.charCode : t.keyCode),
                    e
                  );
                },
              },
              mouseHooks: {
                props:
                  "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(
                    " "
                  ),
                filter: function (e, t) {
                  var n,
                    r,
                    i,
                    o = t.button;
                  return (
                    null == e.pageX &&
                      null != t.clientX &&
                      ((r = (n = e.target.ownerDocument || g).documentElement),
                      (i = n.body),
                      (e.pageX =
                        t.clientX +
                        ((r && r.scrollLeft) || (i && i.scrollLeft) || 0) -
                        ((r && r.clientLeft) || (i && i.clientLeft) || 0)),
                      (e.pageY =
                        t.clientY +
                        ((r && r.scrollTop) || (i && i.scrollTop) || 0) -
                        ((r && r.clientTop) || (i && i.clientTop) || 0))),
                    e.which ||
                      void 0 === o ||
                      (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                    e
                  );
                },
              },
              fix: function (e) {
                if (e[v.expando]) return e;
                var t,
                  n,
                  r,
                  i = e.type,
                  o = e,
                  s = this.fixHooks[i];
                for (
                  s ||
                    (this.fixHooks[i] = s =
                      Q.test(i)
                        ? this.mouseHooks
                        : G.test(i)
                        ? this.keyHooks
                        : {}),
                    r = s.props ? this.props.concat(s.props) : this.props,
                    e = new v.Event(o),
                    t = r.length;
                  t--;

                )
                  e[(n = r[t])] = o[n];
                return (
                  e.target || (e.target = g),
                  3 === e.target.nodeType && (e.target = e.target.parentNode),
                  s.filter ? s.filter(e, o) : e
                );
              },
              special: {
                load: { noBubble: !0 },
                focus: {
                  trigger: function () {
                    return this !== te() && this.focus
                      ? (this.focus(), !1)
                      : void 0;
                  },
                  delegateType: "focusin",
                },
                blur: {
                  trigger: function () {
                    return this === te() && this.blur
                      ? (this.blur(), !1)
                      : void 0;
                  },
                  delegateType: "focusout",
                },
                click: {
                  trigger: function () {
                    return "checkbox" === this.type &&
                      this.click &&
                      v.nodeName(this, "input")
                      ? (this.click(), !1)
                      : void 0;
                  },
                  _default: function (e) {
                    return v.nodeName(e.target, "a");
                  },
                },
                beforeunload: {
                  postDispatch: function (e) {
                    void 0 !== e.result &&
                      (e.originalEvent.returnValue = e.result);
                  },
                },
              },
              simulate: function (e, t, n, r) {
                var i = v.extend(new v.Event(), n, {
                  type: e,
                  isSimulated: !0,
                  originalEvent: {},
                });
                r ? v.event.trigger(i, null, t) : v.event.dispatch.call(t, i),
                  i.isDefaultPrevented() && n.preventDefault();
              },
            }),
              (v.removeEvent = function (e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n, !1);
              }),
              (v.Event = function (e, t) {
                return this instanceof v.Event
                  ? (e && e.type
                      ? ((this.originalEvent = e),
                        (this.type = e.type),
                        (this.isDefaultPrevented =
                          e.defaultPrevented ||
                          (void 0 === e.defaultPrevented &&
                            e.getPreventDefault &&
                            e.getPreventDefault())
                            ? K
                            : ee))
                      : (this.type = e),
                    t && v.extend(this, t),
                    (this.timeStamp = (e && e.timeStamp) || v.now()),
                    void (this[v.expando] = !0))
                  : new v.Event(e, t);
              }),
              (v.Event.prototype = {
                isDefaultPrevented: ee,
                isPropagationStopped: ee,
                isImmediatePropagationStopped: ee,
                preventDefault: function () {
                  var e = this.originalEvent;
                  (this.isDefaultPrevented = K),
                    e && e.preventDefault && e.preventDefault();
                },
                stopPropagation: function () {
                  var e = this.originalEvent;
                  (this.isPropagationStopped = K),
                    e && e.stopPropagation && e.stopPropagation();
                },
                stopImmediatePropagation: function () {
                  (this.isImmediatePropagationStopped = K),
                    this.stopPropagation();
                },
              }),
              v.each(
                { mouseenter: "mouseover", mouseleave: "mouseout" },
                function (e, t) {
                  v.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function (e) {
                      var n,
                        r = e.relatedTarget,
                        i = e.handleObj;
                      return (
                        (!r || (r !== this && !v.contains(this, r))) &&
                          ((e.type = i.origType),
                          (n = i.handler.apply(this, arguments)),
                          (e.type = t)),
                        n
                      );
                    },
                  };
                }
              ),
              h.focusinBubbles ||
                v.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                  var n = function (e) {
                    v.event.simulate(t, e.target, v.event.fix(e), !0);
                  };
                  v.event.special[t] = {
                    setup: function () {
                      var r = this.ownerDocument || this,
                        i = W.access(r, t);
                      i || r.addEventListener(e, n, !0),
                        W.access(r, t, (i || 0) + 1);
                    },
                    teardown: function () {
                      var r = this.ownerDocument || this,
                        i = W.access(r, t) - 1;
                      i
                        ? W.access(r, t, i)
                        : (r.removeEventListener(e, n, !0), W.remove(r, t));
                    },
                  };
                }),
              v.fn.extend({
                on: function (e, t, n, r, i) {
                  var o, s;
                  if ("object" == typeof e) {
                    for (s in ("string" != typeof t &&
                      ((n = n || t), (t = void 0)),
                    e))
                      this.on(s, t, n, e[s], i);
                    return this;
                  }
                  if (
                    (null == n && null == r
                      ? ((r = t), (n = t = void 0))
                      : null == r &&
                        ("string" == typeof t
                          ? ((r = n), (n = void 0))
                          : ((r = n), (n = t), (t = void 0))),
                    !1 === r)
                  )
                    r = ee;
                  else if (!r) return this;
                  return (
                    1 === i &&
                      ((o = r),
                      (r = function (e) {
                        return v().off(e), o.apply(this, arguments);
                      }),
                      (r.guid = o.guid || (o.guid = v.guid++))),
                    this.each(function () {
                      v.event.add(this, e, r, n, t);
                    })
                  );
                },
                one: function (e, t, n, r) {
                  return this.on(e, t, n, r, 1);
                },
                off: function (e, t, n) {
                  var r, i;
                  if (e && e.preventDefault && e.handleObj)
                    return (
                      (r = e.handleObj),
                      v(e.delegateTarget).off(
                        r.namespace
                          ? r.origType + "." + r.namespace
                          : r.origType,
                        r.selector,
                        r.handler
                      ),
                      this
                    );
                  if ("object" == typeof e) {
                    for (i in e) this.off(i, t, e[i]);
                    return this;
                  }
                  return (
                    (!1 === t || "function" == typeof t) &&
                      ((n = t), (t = void 0)),
                    !1 === n && (n = ee),
                    this.each(function () {
                      v.event.remove(this, e, n, t);
                    })
                  );
                },
                trigger: function (e, t) {
                  return this.each(function () {
                    v.event.trigger(e, t, this);
                  });
                },
                triggerHandler: function (e, t) {
                  var n = this[0];
                  return n ? v.event.trigger(e, t, n, !0) : void 0;
                },
              });
            var ne =
                /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
              re = /<([\w:]+)/,
              ie = /<|&#?\w+;/,
              oe = /<(?:script|style|link)/i,
              se = /checked\s*(?:[^=]|=\s*.checked.)/i,
              ae = /^$|\/(?:java|ecma)script/i,
              ue = /^true\/(.*)/,
              ce = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
              le = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""],
              };
            function fe(e, t) {
              return v.nodeName(e, "table") &&
                v.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr")
                ? e.getElementsByTagName("tbody")[0] ||
                    e.appendChild(e.ownerDocument.createElement("tbody"))
                : e;
            }
            function pe(e) {
              return (
                (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e
              );
            }
            function de(e) {
              var t = ue.exec(e.type);
              return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
            }
            function he(e, t) {
              for (var n = 0, r = e.length; r > n; n++)
                W.set(e[n], "globalEval", !t || W.get(t[n], "globalEval"));
            }
            function ge(e, t) {
              var n, r, i, o, s, a, u, c;
              if (1 === t.nodeType) {
                if (
                  W.hasData(e) &&
                  ((o = W.access(e)), (s = W.set(t, o)), (c = o.events))
                )
                  for (i in (delete s.handle, (s.events = {}), c))
                    for (n = 0, r = c[i].length; r > n; n++)
                      v.event.add(t, i, c[i][n]);
                $.hasData(e) &&
                  ((a = $.access(e)), (u = v.extend({}, a)), $.set(t, u));
              }
            }
            function me(e, t) {
              var n = e.getElementsByTagName
                ? e.getElementsByTagName(t || "*")
                : e.querySelectorAll
                ? e.querySelectorAll(t || "*")
                : [];
              return void 0 === t || (t && v.nodeName(e, t))
                ? v.merge([e], n)
                : n;
            }
            function ve(e, t) {
              var n = t.nodeName.toLowerCase();
              "input" === n && Y.test(e.type)
                ? (t.checked = e.checked)
                : ("input" === n || "textarea" === n) &&
                  (t.defaultValue = e.defaultValue);
            }
            (le.optgroup = le.option),
              (le.tbody = le.tfoot = le.colgroup = le.caption = le.thead),
              (le.th = le.td),
              v.extend({
                clone: function (e, t, n) {
                  var r,
                    i,
                    o,
                    s,
                    a = e.cloneNode(!0),
                    u = v.contains(e.ownerDocument, e);
                  if (
                    !(
                      h.noCloneChecked ||
                      (1 !== e.nodeType && 11 !== e.nodeType) ||
                      v.isXMLDoc(e)
                    )
                  )
                    for (s = me(a), r = 0, i = (o = me(e)).length; i > r; r++)
                      ve(o[r], s[r]);
                  if (t)
                    if (n)
                      for (
                        o = o || me(e), s = s || me(a), r = 0, i = o.length;
                        i > r;
                        r++
                      )
                        ge(o[r], s[r]);
                    else ge(e, a);
                  return (
                    (s = me(a, "script")).length > 0 &&
                      he(s, !u && me(e, "script")),
                    a
                  );
                },
                buildFragment: function (e, t, n, r) {
                  for (
                    var i,
                      o,
                      s,
                      a,
                      u,
                      c,
                      l = t.createDocumentFragment(),
                      f = [],
                      p = 0,
                      d = e.length;
                    d > p;
                    p++
                  )
                    if ((i = e[p]) || 0 === i)
                      if ("object" === v.type(i))
                        v.merge(f, i.nodeType ? [i] : i);
                      else if (ie.test(i)) {
                        for (
                          o = o || l.appendChild(t.createElement("div")),
                            s = (re.exec(i) || ["", ""])[1].toLowerCase(),
                            a = le[s] || le._default,
                            o.innerHTML =
                              a[1] + i.replace(ne, "<$1></$2>") + a[2],
                            c = a[0];
                          c--;

                        )
                          o = o.lastChild;
                        v.merge(f, o.childNodes),
                          ((o = l.firstChild).textContent = "");
                      } else f.push(t.createTextNode(i));
                  for (l.textContent = "", p = 0; (i = f[p++]); )
                    if (
                      (!r || -1 === v.inArray(i, r)) &&
                      ((u = v.contains(i.ownerDocument, i)),
                      (o = me(l.appendChild(i), "script")),
                      u && he(o),
                      n)
                    )
                      for (c = 0; (i = o[c++]); )
                        ae.test(i.type || "") && n.push(i);
                  return l;
                },
                cleanData: function (e) {
                  for (
                    var t, n, r, i, o, s, a = v.event.special, u = 0;
                    void 0 !== (n = e[u]);
                    u++
                  ) {
                    if (
                      v.acceptData(n) &&
                      (o = n[W.expando]) &&
                      (t = W.cache[o])
                    ) {
                      if ((r = Object.keys(t.events || {})).length)
                        for (s = 0; void 0 !== (i = r[s]); s++)
                          a[i]
                            ? v.event.remove(n, i)
                            : v.removeEvent(n, i, t.handle);
                      W.cache[o] && delete W.cache[o];
                    }
                    delete $.cache[n[$.expando]];
                  }
                },
              }),
              v.fn.extend({
                text: function (e) {
                  return P(
                    this,
                    function (e) {
                      return void 0 === e
                        ? v.text(this)
                        : this.empty().each(function () {
                            (1 === this.nodeType ||
                              11 === this.nodeType ||
                              9 === this.nodeType) &&
                              (this.textContent = e);
                          });
                    },
                    null,
                    e,
                    arguments.length
                  );
                },
                append: function () {
                  return this.domManip(arguments, function (e) {
                    (1 !== this.nodeType &&
                      11 !== this.nodeType &&
                      9 !== this.nodeType) ||
                      fe(this, e).appendChild(e);
                  });
                },
                prepend: function () {
                  return this.domManip(arguments, function (e) {
                    if (
                      1 === this.nodeType ||
                      11 === this.nodeType ||
                      9 === this.nodeType
                    ) {
                      var t = fe(this, e);
                      t.insertBefore(e, t.firstChild);
                    }
                  });
                },
                before: function () {
                  return this.domManip(arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                  });
                },
                after: function () {
                  return this.domManip(arguments, function (e) {
                    this.parentNode &&
                      this.parentNode.insertBefore(e, this.nextSibling);
                  });
                },
                remove: function (e, t) {
                  for (
                    var n, r = e ? v.filter(e, this) : this, i = 0;
                    null != (n = r[i]);
                    i++
                  )
                    t || 1 !== n.nodeType || v.cleanData(me(n)),
                      n.parentNode &&
                        (t &&
                          v.contains(n.ownerDocument, n) &&
                          he(me(n, "script")),
                        n.parentNode.removeChild(n));
                  return this;
                },
                empty: function () {
                  for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType &&
                      (v.cleanData(me(e, !1)), (e.textContent = ""));
                  return this;
                },
                clone: function (e, t) {
                  return (
                    (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function () {
                      return v.clone(this, e, t);
                    })
                  );
                },
                html: function (e) {
                  return P(
                    this,
                    function (e) {
                      var t = this[0] || {},
                        n = 0,
                        r = this.length;
                      if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                      if (
                        "string" == typeof e &&
                        !oe.test(e) &&
                        !le[(re.exec(e) || ["", ""])[1].toLowerCase()]
                      ) {
                        e = e.replace(ne, "<$1></$2>");
                        try {
                          for (; r > n; n++)
                            1 === (t = this[n] || {}).nodeType &&
                              (v.cleanData(me(t, !1)), (t.innerHTML = e));
                          t = 0;
                        } catch (e) {}
                      }
                      t && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                  );
                },
                replaceWith: function () {
                  var e = arguments[0];
                  return (
                    this.domManip(arguments, function (t) {
                      (e = this.parentNode),
                        v.cleanData(me(this)),
                        e && e.replaceChild(t, this);
                    }),
                    e && (e.length || e.nodeType) ? this : this.remove()
                  );
                },
                detach: function (e) {
                  return this.remove(e, !0);
                },
                domManip: function (e, t) {
                  e = a.apply([], e);
                  var n,
                    r,
                    i,
                    o,
                    s,
                    u,
                    c = 0,
                    l = this.length,
                    f = this,
                    p = l - 1,
                    d = e[0],
                    g = v.isFunction(d);
                  if (
                    g ||
                    (l > 1 &&
                      "string" == typeof d &&
                      !h.checkClone &&
                      se.test(d))
                  )
                    return this.each(function (n) {
                      var r = f.eq(n);
                      g && (e[0] = d.call(this, n, r.html())), r.domManip(e, t);
                    });
                  if (
                    l &&
                    ((r = (n = v.buildFragment(
                      e,
                      this[0].ownerDocument,
                      !1,
                      this
                    )).firstChild),
                    1 === n.childNodes.length && (n = r),
                    r)
                  ) {
                    for (
                      o = (i = v.map(me(n, "script"), pe)).length;
                      l > c;
                      c++
                    )
                      (s = n),
                        c !== p &&
                          ((s = v.clone(s, !0, !0)),
                          o && v.merge(i, me(s, "script"))),
                        t.call(this[c], s, c);
                    if (o)
                      for (
                        u = i[i.length - 1].ownerDocument, v.map(i, de), c = 0;
                        o > c;
                        c++
                      )
                        (s = i[c]),
                          ae.test(s.type || "") &&
                            !W.access(s, "globalEval") &&
                            v.contains(u, s) &&
                            (s.src
                              ? v._evalUrl && v._evalUrl(s.src)
                              : v.globalEval(s.textContent.replace(ce, "")));
                  }
                  return this;
                },
              }),
              v.each(
                {
                  appendTo: "append",
                  prependTo: "prepend",
                  insertBefore: "before",
                  insertAfter: "after",
                  replaceAll: "replaceWith",
                },
                function (e, t) {
                  v.fn[e] = function (e) {
                    for (
                      var n, r = [], i = v(e), o = i.length - 1, s = 0;
                      o >= s;
                      s++
                    )
                      (n = s === o ? this : this.clone(!0)),
                        v(i[s])[t](n),
                        u.apply(r, n.get());
                    return this.pushStack(r);
                  };
                }
              );
            var ye,
              xe = {};
            function be(e, t) {
              var n = v(t.createElement(e)).appendTo(t.body),
                i = r.getDefaultComputedStyle
                  ? r.getDefaultComputedStyle(n[0]).display
                  : v.css(n[0], "display");
              return n.detach(), i;
            }
            function we(e) {
              var t = g,
                n = xe[e];
              return (
                n ||
                  (("none" !== (n = be(e, t)) && n) ||
                    ((t = (ye = (
                      ye || v("<iframe frameborder='0' width='0' height='0'/>")
                    ).appendTo(t.documentElement))[0].contentDocument).write(),
                    t.close(),
                    (n = be(e, t)),
                    ye.detach()),
                  (xe[e] = n)),
                n
              );
            }
            var Te = /^margin/,
              Ce = new RegExp("^(" + z + ")(?!px)[a-z%]+$", "i"),
              ke = function (e) {
                return e.ownerDocument.defaultView.getComputedStyle(e, null);
              };
            function Ne(e, t, n) {
              var r,
                i,
                o,
                s,
                a = e.style;
              return (
                (n = n || ke(e)) && (s = n.getPropertyValue(t) || n[t]),
                n &&
                  ("" !== s ||
                    v.contains(e.ownerDocument, e) ||
                    (s = v.style(e, t)),
                  Ce.test(s) &&
                    Te.test(t) &&
                    ((r = a.width),
                    (i = a.minWidth),
                    (o = a.maxWidth),
                    (a.minWidth = a.maxWidth = a.width = s),
                    (s = n.width),
                    (a.width = r),
                    (a.minWidth = i),
                    (a.maxWidth = o))),
                void 0 !== s ? s + "" : s
              );
            }
            function Ee(e, t) {
              return {
                get: function () {
                  return e()
                    ? void delete this.get
                    : (this.get = t).apply(this, arguments);
                },
              };
            }
            !(function () {
              var e,
                t,
                n = g.documentElement,
                i = g.createElement("div"),
                o = g.createElement("div");
              function s() {
                (o.style.cssText =
                  "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%"),
                  n.appendChild(i);
                var s = r.getComputedStyle(o, null);
                (e = "1%" !== s.top), (t = "4px" === s.width), n.removeChild(i);
              }
              (o.style.backgroundClip = "content-box"),
                (o.cloneNode(!0).style.backgroundClip = ""),
                (h.clearCloneStyle = "content-box" === o.style.backgroundClip),
                (i.style.cssText =
                  "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px"),
                i.appendChild(o),
                r.getComputedStyle &&
                  v.extend(h, {
                    pixelPosition: function () {
                      return s(), e;
                    },
                    boxSizingReliable: function () {
                      return null == t && s(), t;
                    },
                    reliableMarginRight: function () {
                      var e,
                        t = o.appendChild(g.createElement("div"));
                      return (
                        (t.style.cssText = o.style.cssText =
                          "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box"),
                        (t.style.marginRight = t.style.width = "0"),
                        (o.style.width = "1px"),
                        n.appendChild(i),
                        (e = !parseFloat(
                          r.getComputedStyle(t, null).marginRight
                        )),
                        n.removeChild(i),
                        (o.innerHTML = ""),
                        e
                      );
                    },
                  });
            })(),
              (v.swap = function (e, t, n, r) {
                var i,
                  o,
                  s = {};
                for (o in t) (s[o] = e.style[o]), (e.style[o] = t[o]);
                for (o in ((i = n.apply(e, r || [])), t)) e.style[o] = s[o];
                return i;
              });
            var Se = /^(none|table(?!-c[ea]).+)/,
              je = new RegExp("^(" + z + ")(.*)$", "i"),
              De = new RegExp("^([+-])=(" + z + ")", "i"),
              Ae = {
                position: "absolute",
                visibility: "hidden",
                display: "block",
              },
              Le = { letterSpacing: 0, fontWeight: 400 },
              qe = ["Webkit", "O", "Moz", "ms"];
            function He(e, t) {
              if (t in e) return t;
              for (
                var n = t[0].toUpperCase() + t.slice(1), r = t, i = qe.length;
                i--;

              )
                if ((t = qe[i] + n) in e) return t;
              return r;
            }
            function Oe(e, t, n) {
              var r = je.exec(t);
              return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
            }
            function Me(e, t, n, r, i) {
              for (
                var o =
                    n === (r ? "border" : "content")
                      ? 4
                      : "width" === t
                      ? 1
                      : 0,
                  s = 0;
                4 > o;
                o += 2
              )
                "margin" === n && (s += v.css(e, n + X[o], !0, i)),
                  r
                    ? ("content" === n &&
                        (s -= v.css(e, "padding" + X[o], !0, i)),
                      "margin" !== n &&
                        (s -= v.css(e, "border" + X[o] + "Width", !0, i)))
                    : ((s += v.css(e, "padding" + X[o], !0, i)),
                      "padding" !== n &&
                        (s += v.css(e, "border" + X[o] + "Width", !0, i)));
              return s;
            }
            function Fe(e, t, n) {
              var r = !0,
                i = "width" === t ? e.offsetWidth : e.offsetHeight,
                o = ke(e),
                s = "border-box" === v.css(e, "boxSizing", !1, o);
              if (0 >= i || null == i) {
                if (
                  ((0 > (i = Ne(e, t, o)) || null == i) && (i = e.style[t]),
                  Ce.test(i))
                )
                  return i;
                (r = s && (h.boxSizingReliable() || i === e.style[t])),
                  (i = parseFloat(i) || 0);
              }
              return i + Me(e, t, n || (s ? "border" : "content"), r, o) + "px";
            }
            function Pe(e, t) {
              for (var n, r, i, o = [], s = 0, a = e.length; a > s; s++)
                (r = e[s]).style &&
                  ((o[s] = W.get(r, "olddisplay")),
                  (n = r.style.display),
                  t
                    ? (o[s] || "none" !== n || (r.style.display = ""),
                      "" === r.style.display &&
                        U(r) &&
                        (o[s] = W.access(r, "olddisplay", we(r.nodeName))))
                    : o[s] ||
                      ((i = U(r)),
                      ((n && "none" !== n) || !i) &&
                        W.set(r, "olddisplay", i ? n : v.css(r, "display"))));
              for (s = 0; a > s; s++)
                (r = e[s]).style &&
                  ((t &&
                    "none" !== r.style.display &&
                    "" !== r.style.display) ||
                    (r.style.display = t ? o[s] || "" : "none"));
              return e;
            }
            function Re(e, t, n, r, i) {
              return new Re.prototype.init(e, t, n, r, i);
            }
            v.extend({
              cssHooks: {
                opacity: {
                  get: function (e, t) {
                    if (t) {
                      var n = Ne(e, "opacity");
                      return "" === n ? "1" : n;
                    }
                  },
                },
              },
              cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
              },
              cssProps: { float: "cssFloat" },
              style: function (e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                  var i,
                    o,
                    s,
                    a = v.camelCase(t),
                    u = e.style;
                  return (
                    (t = v.cssProps[a] || (v.cssProps[a] = He(u, a))),
                    (s = v.cssHooks[t] || v.cssHooks[a]),
                    void 0 === n
                      ? s && "get" in s && void 0 !== (i = s.get(e, !1, r))
                        ? i
                        : u[t]
                      : ("string" == (o = typeof n) &&
                          (i = De.exec(n)) &&
                          ((n = (i[1] + 1) * i[2] + parseFloat(v.css(e, t))),
                          (o = "number")),
                        void (
                          null != n &&
                          n == n &&
                          ("number" !== o || v.cssNumber[a] || (n += "px"),
                          h.clearCloneStyle ||
                            "" !== n ||
                            0 !== t.indexOf("background") ||
                            (u[t] = "inherit"),
                          (s &&
                            "set" in s &&
                            void 0 === (n = s.set(e, n, r))) ||
                            ((u[t] = ""), (u[t] = n)))
                        ))
                  );
                }
              },
              css: function (e, t, n, r) {
                var i,
                  o,
                  s,
                  a = v.camelCase(t);
                return (
                  (t = v.cssProps[a] || (v.cssProps[a] = He(e.style, a))),
                  (s = v.cssHooks[t] || v.cssHooks[a]) &&
                    "get" in s &&
                    (i = s.get(e, !0, n)),
                  void 0 === i && (i = Ne(e, t, r)),
                  "normal" === i && t in Le && (i = Le[t]),
                  "" === n || n
                    ? ((o = parseFloat(i)),
                      !0 === n || v.isNumeric(o) ? o || 0 : i)
                    : i
                );
              },
            }),
              v.each(["height", "width"], function (e, t) {
                v.cssHooks[t] = {
                  get: function (e, n, r) {
                    return n
                      ? 0 === e.offsetWidth && Se.test(v.css(e, "display"))
                        ? v.swap(e, Ae, function () {
                            return Fe(e, t, r);
                          })
                        : Fe(e, t, r)
                      : void 0;
                  },
                  set: function (e, n, r) {
                    var i = r && ke(e);
                    return Oe(
                      0,
                      n,
                      r
                        ? Me(
                            e,
                            t,
                            r,
                            "border-box" === v.css(e, "boxSizing", !1, i),
                            i
                          )
                        : 0
                    );
                  },
                };
              }),
              (v.cssHooks.marginRight = Ee(
                h.reliableMarginRight,
                function (e, t) {
                  return t
                    ? v.swap(e, { display: "inline-block" }, Ne, [
                        e,
                        "marginRight",
                      ])
                    : void 0;
                }
              )),
              v.each(
                { margin: "", padding: "", border: "Width" },
                function (e, t) {
                  (v.cssHooks[e + t] = {
                    expand: function (n) {
                      for (
                        var r = 0,
                          i = {},
                          o = "string" == typeof n ? n.split(" ") : [n];
                        4 > r;
                        r++
                      )
                        i[e + X[r] + t] = o[r] || o[r - 2] || o[0];
                      return i;
                    },
                  }),
                    Te.test(e) || (v.cssHooks[e + t].set = Oe);
                }
              ),
              v.fn.extend({
                css: function (e, t) {
                  return P(
                    this,
                    function (e, t, n) {
                      var r,
                        i,
                        o = {},
                        s = 0;
                      if (v.isArray(t)) {
                        for (r = ke(e), i = t.length; i > s; s++)
                          o[t[s]] = v.css(e, t[s], !1, r);
                        return o;
                      }
                      return void 0 !== n ? v.style(e, t, n) : v.css(e, t);
                    },
                    e,
                    t,
                    arguments.length > 1
                  );
                },
                show: function () {
                  return Pe(this, !0);
                },
                hide: function () {
                  return Pe(this);
                },
                toggle: function (e) {
                  return "boolean" == typeof e
                    ? e
                      ? this.show()
                      : this.hide()
                    : this.each(function () {
                        U(this) ? v(this).show() : v(this).hide();
                      });
                },
              }),
              (v.Tween = Re),
              (Re.prototype = {
                constructor: Re,
                init: function (e, t, n, r, i, o) {
                  (this.elem = e),
                    (this.prop = n),
                    (this.easing = i || "swing"),
                    (this.options = t),
                    (this.start = this.now = this.cur()),
                    (this.end = r),
                    (this.unit = o || (v.cssNumber[n] ? "" : "px"));
                },
                cur: function () {
                  var e = Re.propHooks[this.prop];
                  return e && e.get
                    ? e.get(this)
                    : Re.propHooks._default.get(this);
                },
                run: function (e) {
                  var t,
                    n = Re.propHooks[this.prop];
                  return (
                    (this.pos = t =
                      this.options.duration
                        ? v.easing[this.easing](
                            e,
                            this.options.duration * e,
                            0,
                            1,
                            this.options.duration
                          )
                        : e),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step &&
                      this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : Re.propHooks._default.set(this),
                    this
                  );
                },
              }),
              (Re.prototype.init.prototype = Re.prototype),
              (Re.propHooks = {
                _default: {
                  get: function (e) {
                    var t;
                    return null == e.elem[e.prop] ||
                      (e.elem.style && null != e.elem.style[e.prop])
                      ? (t = v.css(e.elem, e.prop, "")) && "auto" !== t
                        ? t
                        : 0
                      : e.elem[e.prop];
                  },
                  set: function (e) {
                    v.fx.step[e.prop]
                      ? v.fx.step[e.prop](e)
                      : e.elem.style &&
                        (null != e.elem.style[v.cssProps[e.prop]] ||
                          v.cssHooks[e.prop])
                      ? v.style(e.elem, e.prop, e.now + e.unit)
                      : (e.elem[e.prop] = e.now);
                  },
                },
              }),
              (Re.propHooks.scrollTop = Re.propHooks.scrollLeft =
                {
                  set: function (e) {
                    e.elem.nodeType &&
                      e.elem.parentNode &&
                      (e.elem[e.prop] = e.now);
                  },
                }),
              (v.easing = {
                linear: function (e) {
                  return e;
                },
                swing: function (e) {
                  return 0.5 - Math.cos(e * Math.PI) / 2;
                },
              }),
              (v.fx = Re.prototype.init),
              (v.fx.step = {});
            var We,
              $e,
              Ie = /^(?:toggle|show|hide)$/,
              Be = new RegExp("^(?:([+-])=|)(" + z + ")([a-z%]*)$", "i"),
              _e = /queueHooks$/,
              ze = [
                function (e, t, n) {
                  var r,
                    i,
                    o,
                    s,
                    a,
                    u,
                    c,
                    l = this,
                    f = {},
                    p = e.style,
                    d = e.nodeType && U(e),
                    h = W.get(e, "fxshow");
                  for (r in (n.queue ||
                    (null == (a = v._queueHooks(e, "fx")).unqueued &&
                      ((a.unqueued = 0),
                      (u = a.empty.fire),
                      (a.empty.fire = function () {
                        a.unqueued || u();
                      })),
                    a.unqueued++,
                    l.always(function () {
                      l.always(function () {
                        a.unqueued--, v.queue(e, "fx").length || a.empty.fire();
                      });
                    })),
                  1 === e.nodeType &&
                    ("height" in t || "width" in t) &&
                    ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
                    "none" === (c = v.css(e, "display")) &&
                      (c = we(e.nodeName)),
                    "inline" === c &&
                      "none" === v.css(e, "float") &&
                      (p.display = "inline-block")),
                  n.overflow &&
                    ((p.overflow = "hidden"),
                    l.always(function () {
                      (p.overflow = n.overflow[0]),
                        (p.overflowX = n.overflow[1]),
                        (p.overflowY = n.overflow[2]);
                    })),
                  t))
                    if (((i = t[r]), Ie.exec(i))) {
                      if (
                        (delete t[r],
                        (o = o || "toggle" === i),
                        i === (d ? "hide" : "show"))
                      ) {
                        if ("show" !== i || !h || void 0 === h[r]) continue;
                        d = !0;
                      }
                      f[r] = (h && h[r]) || v.style(e, r);
                    }
                  if (!v.isEmptyObject(f))
                    for (r in (h
                      ? "hidden" in h && (d = h.hidden)
                      : (h = W.access(e, "fxshow", {})),
                    o && (h.hidden = !d),
                    d
                      ? v(e).show()
                      : l.done(function () {
                          v(e).hide();
                        }),
                    l.done(function () {
                      var t;
                      for (t in (W.remove(e, "fxshow"), f)) v.style(e, t, f[t]);
                    }),
                    f))
                      (s = Ve(d ? h[r] : 0, r, l)),
                        r in h ||
                          ((h[r] = s.start),
                          d &&
                            ((s.end = s.start),
                            (s.start =
                              "width" === r || "height" === r ? 1 : 0)));
                },
              ],
              Xe = {
                "*": [
                  function (e, t) {
                    var n = this.createTween(e, t),
                      r = n.cur(),
                      i = Be.exec(t),
                      o = (i && i[3]) || (v.cssNumber[e] ? "" : "px"),
                      s =
                        (v.cssNumber[e] || ("px" !== o && +r)) &&
                        Be.exec(v.css(n.elem, e)),
                      a = 1,
                      u = 20;
                    if (s && s[3] !== o) {
                      (o = o || s[3]), (i = i || []), (s = +r || 1);
                      do {
                        (s /= a = a || ".5"), v.style(n.elem, e, s + o);
                      } while (a !== (a = n.cur() / r) && 1 !== a && --u);
                    }
                    return (
                      i &&
                        ((s = n.start = +s || +r || 0),
                        (n.unit = o),
                        (n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2])),
                      n
                    );
                  },
                ],
              };
            function Ue() {
              return (
                setTimeout(function () {
                  We = void 0;
                }),
                (We = v.now())
              );
            }
            function Ye(e, t) {
              var n,
                r = 0,
                i = { height: e };
              for (t = t ? 1 : 0; 4 > r; r += 2 - t)
                i["margin" + (n = X[r])] = i["padding" + n] = e;
              return t && (i.opacity = i.width = e), i;
            }
            function Ve(e, t, n) {
              for (
                var r, i = (Xe[t] || []).concat(Xe["*"]), o = 0, s = i.length;
                s > o;
                o++
              )
                if ((r = i[o].call(n, t, e))) return r;
            }
            function Ge(e, t, n) {
              var r,
                i,
                o = 0,
                s = ze.length,
                a = v.Deferred().always(function () {
                  delete u.elem;
                }),
                u = function () {
                  if (i) return !1;
                  for (
                    var t = We || Ue(),
                      n = Math.max(0, c.startTime + c.duration - t),
                      r = 1 - (n / c.duration || 0),
                      o = 0,
                      s = c.tweens.length;
                    s > o;
                    o++
                  )
                    c.tweens[o].run(r);
                  return (
                    a.notifyWith(e, [c, r, n]),
                    1 > r && s ? n : (a.resolveWith(e, [c]), !1)
                  );
                },
                c = a.promise({
                  elem: e,
                  props: v.extend({}, t),
                  opts: v.extend(!0, { specialEasing: {} }, n),
                  originalProperties: t,
                  originalOptions: n,
                  startTime: We || Ue(),
                  duration: n.duration,
                  tweens: [],
                  createTween: function (t, n) {
                    var r = v.Tween(
                      e,
                      c.opts,
                      t,
                      n,
                      c.opts.specialEasing[t] || c.opts.easing
                    );
                    return c.tweens.push(r), r;
                  },
                  stop: function (t) {
                    var n = 0,
                      r = t ? c.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) c.tweens[n].run(1);
                    return (
                      t ? a.resolveWith(e, [c, t]) : a.rejectWith(e, [c, t]),
                      this
                    );
                  },
                }),
                l = c.props;
              for (
                (function (e, t) {
                  var n, r, i, o, s;
                  for (n in e)
                    if (
                      ((i = t[(r = v.camelCase(n))]),
                      (o = e[n]),
                      v.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
                      n !== r && ((e[r] = o), delete e[n]),
                      (s = v.cssHooks[r]) && ("expand" in s))
                    )
                      for (n in ((o = s.expand(o)), delete e[r], o))
                        (n in e) || ((e[n] = o[n]), (t[n] = i));
                    else t[r] = i;
                })(l, c.opts.specialEasing);
                s > o;
                o++
              )
                if ((r = ze[o].call(c, e, l, c.opts))) return r;
              return (
                v.map(l, Ve, c),
                v.isFunction(c.opts.start) && c.opts.start.call(e, c),
                v.fx.timer(
                  v.extend(u, { elem: e, anim: c, queue: c.opts.queue })
                ),
                c
                  .progress(c.opts.progress)
                  .done(c.opts.done, c.opts.complete)
                  .fail(c.opts.fail)
                  .always(c.opts.always)
              );
            }
            (v.Animation = v.extend(Ge, {
              tweener: function (e, t) {
                v.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.split(" "));
                for (var n, r = 0, i = e.length; i > r; r++)
                  (n = e[r]), (Xe[n] = Xe[n] || []), Xe[n].unshift(t);
              },
              prefilter: function (e, t) {
                t ? ze.unshift(e) : ze.push(e);
              },
            })),
              (v.speed = function (e, t, n) {
                var r =
                  e && "object" == typeof e
                    ? v.extend({}, e)
                    : {
                        complete: n || (!n && t) || (v.isFunction(e) && e),
                        duration: e,
                        easing: (n && t) || (t && !v.isFunction(t) && t),
                      };
                return (
                  (r.duration = v.fx.off
                    ? 0
                    : "number" == typeof r.duration
                    ? r.duration
                    : r.duration in v.fx.speeds
                    ? v.fx.speeds[r.duration]
                    : v.fx.speeds._default),
                  (null == r.queue || !0 === r.queue) && (r.queue = "fx"),
                  (r.old = r.complete),
                  (r.complete = function () {
                    v.isFunction(r.old) && r.old.call(this),
                      r.queue && v.dequeue(this, r.queue);
                  }),
                  r
                );
              }),
              v.fn.extend({
                fadeTo: function (e, t, n, r) {
                  return this.filter(U)
                    .css("opacity", 0)
                    .show()
                    .end()
                    .animate({ opacity: t }, e, n, r);
                },
                animate: function (e, t, n, r) {
                  var i = v.isEmptyObject(e),
                    o = v.speed(t, n, r),
                    s = function () {
                      var t = Ge(this, v.extend({}, e), o);
                      (i || W.get(this, "finish")) && t.stop(!0);
                    };
                  return (
                    (s.finish = s),
                    i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
                  );
                },
                stop: function (e, t, n) {
                  var r = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n);
                  };
                  return (
                    "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                    t && !1 !== e && this.queue(e || "fx", []),
                    this.each(function () {
                      var t = !0,
                        i = null != e && e + "queueHooks",
                        o = v.timers,
                        s = W.get(this);
                      if (i) s[i] && s[i].stop && r(s[i]);
                      else
                        for (i in s) s[i] && s[i].stop && _e.test(i) && r(s[i]);
                      for (i = o.length; i--; )
                        o[i].elem !== this ||
                          (null != e && o[i].queue !== e) ||
                          (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                      (t || !n) && v.dequeue(this, e);
                    })
                  );
                },
                finish: function (e) {
                  return (
                    !1 !== e && (e = e || "fx"),
                    this.each(function () {
                      var t,
                        n = W.get(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = v.timers,
                        s = r ? r.length : 0;
                      for (
                        n.finish = !0,
                          v.queue(this, e, []),
                          i && i.stop && i.stop.call(this, !0),
                          t = o.length;
                        t--;

                      )
                        o[t].elem === this &&
                          o[t].queue === e &&
                          (o[t].anim.stop(!0), o.splice(t, 1));
                      for (t = 0; s > t; t++)
                        r[t] && r[t].finish && r[t].finish.call(this);
                      delete n.finish;
                    })
                  );
                },
              }),
              v.each(["toggle", "show", "hide"], function (e, t) {
                var n = v.fn[t];
                v.fn[t] = function (e, r, i) {
                  return null == e || "boolean" == typeof e
                    ? n.apply(this, arguments)
                    : this.animate(Ye(t, !0), e, r, i);
                };
              }),
              v.each(
                {
                  slideDown: Ye("show"),
                  slideUp: Ye("hide"),
                  slideToggle: Ye("toggle"),
                  fadeIn: { opacity: "show" },
                  fadeOut: { opacity: "hide" },
                  fadeToggle: { opacity: "toggle" },
                },
                function (e, t) {
                  v.fn[e] = function (e, n, r) {
                    return this.animate(t, e, n, r);
                  };
                }
              ),
              (v.timers = []),
              (v.fx.tick = function () {
                var e,
                  t = 0,
                  n = v.timers;
                for (We = v.now(); t < n.length; t++)
                  (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || v.fx.stop(), (We = void 0);
              }),
              (v.fx.timer = function (e) {
                v.timers.push(e), e() ? v.fx.start() : v.timers.pop();
              }),
              (v.fx.interval = 13),
              (v.fx.start = function () {
                $e || ($e = setInterval(v.fx.tick, v.fx.interval));
              }),
              (v.fx.stop = function () {
                clearInterval($e), ($e = null);
              }),
              (v.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
              (v.fn.delay = function (e, t) {
                return (
                  (e = (v.fx && v.fx.speeds[e]) || e),
                  (t = t || "fx"),
                  this.queue(t, function (t, n) {
                    var r = setTimeout(t, e);
                    n.stop = function () {
                      clearTimeout(r);
                    };
                  })
                );
              }),
              (function () {
                var e = g.createElement("input"),
                  t = g.createElement("select"),
                  n = t.appendChild(g.createElement("option"));
                (e.type = "checkbox"),
                  (h.checkOn = "" !== e.value),
                  (h.optSelected = n.selected),
                  (t.disabled = !0),
                  (h.optDisabled = !n.disabled),
                  ((e = g.createElement("input")).value = "t"),
                  (e.type = "radio"),
                  (h.radioValue = "t" === e.value);
              })();
            var Qe,
              Je = v.expr.attrHandle;
            v.fn.extend({
              attr: function (e, t) {
                return P(this, v.attr, e, t, arguments.length > 1);
              },
              removeAttr: function (e) {
                return this.each(function () {
                  v.removeAttr(this, e);
                });
              },
            }),
              v.extend({
                attr: function (e, t, n) {
                  var r,
                    i,
                    o = e.nodeType;
                  if (e && 3 !== o && 8 !== o && 2 !== o)
                    return typeof e.getAttribute === V
                      ? v.prop(e, t, n)
                      : ((1 === o && v.isXMLDoc(e)) ||
                          ((t = t.toLowerCase()),
                          (r =
                            v.attrHooks[t] ||
                            (v.expr.match.bool.test(t) ? Qe : void 0))),
                        void 0 === n
                          ? r && "get" in r && null !== (i = r.get(e, t))
                            ? i
                            : null == (i = v.find.attr(e, t))
                            ? void 0
                            : i
                          : null !== n
                          ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                            ? i
                            : (e.setAttribute(t, n + ""), n)
                          : void v.removeAttr(e, t));
                },
                removeAttr: function (e, t) {
                  var n,
                    r,
                    i = 0,
                    o = t && t.match(O);
                  if (o && 1 === e.nodeType)
                    for (; (n = o[i++]); )
                      (r = v.propFix[n] || n),
                        v.expr.match.bool.test(n) && (e[r] = !1),
                        e.removeAttribute(n);
                },
                attrHooks: {
                  type: {
                    set: function (e, t) {
                      if (
                        !h.radioValue &&
                        "radio" === t &&
                        v.nodeName(e, "input")
                      ) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t;
                      }
                    },
                  },
                },
              }),
              (Qe = {
                set: function (e, t, n) {
                  return (
                    !1 === t ? v.removeAttr(e, n) : e.setAttribute(n, n), n
                  );
                },
              }),
              v.each(v.expr.match.bool.source.match(/\w+/g), function (e, t) {
                var n = Je[t] || v.find.attr;
                Je[t] = function (e, t, r) {
                  var i, o;
                  return (
                    r ||
                      ((o = Je[t]),
                      (Je[t] = i),
                      (i = null != n(e, t, r) ? t.toLowerCase() : null),
                      (Je[t] = o)),
                    i
                  );
                };
              });
            var Ze = /^(?:input|select|textarea|button)$/i;
            v.fn.extend({
              prop: function (e, t) {
                return P(this, v.prop, e, t, arguments.length > 1);
              },
              removeProp: function (e) {
                return this.each(function () {
                  delete this[v.propFix[e] || e];
                });
              },
            }),
              v.extend({
                propFix: { for: "htmlFor", class: "className" },
                prop: function (e, t, n) {
                  var r,
                    i,
                    o = e.nodeType;
                  if (e && 3 !== o && 8 !== o && 2 !== o)
                    return (
                      (1 !== o || !v.isXMLDoc(e)) &&
                        ((t = v.propFix[t] || t), (i = v.propHooks[t])),
                      void 0 !== n
                        ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                          ? r
                          : (e[t] = n)
                        : i && "get" in i && null !== (r = i.get(e, t))
                        ? r
                        : e[t]
                    );
                },
                propHooks: {
                  tabIndex: {
                    get: function (e) {
                      return e.hasAttribute("tabindex") ||
                        Ze.test(e.nodeName) ||
                        e.href
                        ? e.tabIndex
                        : -1;
                    },
                  },
                },
              }),
              h.optSelected ||
                (v.propHooks.selected = {
                  get: function (e) {
                    var t = e.parentNode;
                    return (
                      t && t.parentNode && t.parentNode.selectedIndex, null
                    );
                  },
                }),
              v.each(
                [
                  "tabIndex",
                  "readOnly",
                  "maxLength",
                  "cellSpacing",
                  "cellPadding",
                  "rowSpan",
                  "colSpan",
                  "useMap",
                  "frameBorder",
                  "contentEditable",
                ],
                function () {
                  v.propFix[this.toLowerCase()] = this;
                }
              );
            var Ke = /[\t\r\n\f]/g;
            v.fn.extend({
              addClass: function (e) {
                var t,
                  n,
                  r,
                  i,
                  o,
                  s,
                  a = "string" == typeof e && e,
                  u = 0,
                  c = this.length;
                if (v.isFunction(e))
                  return this.each(function (t) {
                    v(this).addClass(e.call(this, t, this.className));
                  });
                if (a)
                  for (t = (e || "").match(O) || []; c > u; u++)
                    if (
                      (r =
                        1 === (n = this[u]).nodeType &&
                        (n.className
                          ? (" " + n.className + " ").replace(Ke, " ")
                          : " "))
                    ) {
                      for (o = 0; (i = t[o++]); )
                        r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                      (s = v.trim(r)), n.className !== s && (n.className = s);
                    }
                return this;
              },
              removeClass: function (e) {
                var t,
                  n,
                  r,
                  i,
                  o,
                  s,
                  a = 0 === arguments.length || ("string" == typeof e && e),
                  u = 0,
                  c = this.length;
                if (v.isFunction(e))
                  return this.each(function (t) {
                    v(this).removeClass(e.call(this, t, this.className));
                  });
                if (a)
                  for (t = (e || "").match(O) || []; c > u; u++)
                    if (
                      (r =
                        1 === (n = this[u]).nodeType &&
                        (n.className
                          ? (" " + n.className + " ").replace(Ke, " ")
                          : ""))
                    ) {
                      for (o = 0; (i = t[o++]); )
                        for (; r.indexOf(" " + i + " ") >= 0; )
                          r = r.replace(" " + i + " ", " ");
                      (s = e ? v.trim(r) : ""),
                        n.className !== s && (n.className = s);
                    }
                return this;
              },
              toggleClass: function (e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n
                  ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                  : this.each(
                      v.isFunction(e)
                        ? function (n) {
                            v(this).toggleClass(
                              e.call(this, n, this.className, t),
                              t
                            );
                          }
                        : function () {
                            if ("string" === n)
                              for (
                                var t, r = 0, i = v(this), o = e.match(O) || [];
                                (t = o[r++]);

                              )
                                i.hasClass(t)
                                  ? i.removeClass(t)
                                  : i.addClass(t);
                            else
                              (n === V || "boolean" === n) &&
                                (this.className &&
                                  W.set(this, "__className__", this.className),
                                (this.className =
                                  this.className || !1 === e
                                    ? ""
                                    : W.get(this, "__className__") || ""));
                          }
                    );
              },
              hasClass: function (e) {
                for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                  if (
                    1 === this[n].nodeType &&
                    (" " + this[n].className + " ")
                      .replace(Ke, " ")
                      .indexOf(t) >= 0
                  )
                    return !0;
                return !1;
              },
            });
            var et = /\r/g;
            v.fn.extend({
              val: function (e) {
                var t,
                  n,
                  r,
                  i = this[0];
                return arguments.length
                  ? ((r = v.isFunction(e)),
                    this.each(function (n) {
                      var i;
                      1 === this.nodeType &&
                        (null == (i = r ? e.call(this, n, v(this).val()) : e)
                          ? (i = "")
                          : "number" == typeof i
                          ? (i += "")
                          : v.isArray(i) &&
                            (i = v.map(i, function (e) {
                              return null == e ? "" : e + "";
                            })),
                        ((t =
                          v.valHooks[this.type] ||
                          v.valHooks[this.nodeName.toLowerCase()]) &&
                          "set" in t &&
                          void 0 !== t.set(this, i, "value")) ||
                          (this.value = i));
                    }))
                  : i
                  ? (t =
                      v.valHooks[i.type] ||
                      v.valHooks[i.nodeName.toLowerCase()]) &&
                    "get" in t &&
                    void 0 !== (n = t.get(i, "value"))
                    ? n
                    : "string" == typeof (n = i.value)
                    ? n.replace(et, "")
                    : null == n
                    ? ""
                    : n
                  : void 0;
              },
            }),
              v.extend({
                valHooks: {
                  select: {
                    get: function (e) {
                      for (
                        var t,
                          n,
                          r = e.options,
                          i = e.selectedIndex,
                          o = "select-one" === e.type || 0 > i,
                          s = o ? null : [],
                          a = o ? i + 1 : r.length,
                          u = 0 > i ? a : o ? i : 0;
                        a > u;
                        u++
                      )
                        if (
                          !(
                            (!(n = r[u]).selected && u !== i) ||
                            (h.optDisabled
                              ? n.disabled
                              : null !== n.getAttribute("disabled")) ||
                            (n.parentNode.disabled &&
                              v.nodeName(n.parentNode, "optgroup"))
                          )
                        ) {
                          if (((t = v(n).val()), o)) return t;
                          s.push(t);
                        }
                      return s;
                    },
                    set: function (e, t) {
                      for (
                        var n,
                          r,
                          i = e.options,
                          o = v.makeArray(t),
                          s = i.length;
                        s--;

                      )
                        ((r = i[s]).selected = v.inArray(v(r).val(), o) >= 0) &&
                          (n = !0);
                      return n || (e.selectedIndex = -1), o;
                    },
                  },
                },
              }),
              v.each(["radio", "checkbox"], function () {
                (v.valHooks[this] = {
                  set: function (e, t) {
                    return v.isArray(t)
                      ? (e.checked = v.inArray(v(e).val(), t) >= 0)
                      : void 0;
                  },
                }),
                  h.checkOn ||
                    (v.valHooks[this].get = function (e) {
                      return null === e.getAttribute("value") ? "on" : e.value;
                    });
              }),
              v.each(
                "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
                  " "
                ),
                function (e, t) {
                  v.fn[t] = function (e, n) {
                    return arguments.length > 0
                      ? this.on(t, null, e, n)
                      : this.trigger(t);
                  };
                }
              ),
              v.fn.extend({
                hover: function (e, t) {
                  return this.mouseenter(e).mouseleave(t || e);
                },
                bind: function (e, t, n) {
                  return this.on(e, null, t, n);
                },
                unbind: function (e, t) {
                  return this.off(e, null, t);
                },
                delegate: function (e, t, n, r) {
                  return this.on(t, e, n, r);
                },
                undelegate: function (e, t, n) {
                  return 1 === arguments.length
                    ? this.off(e, "**")
                    : this.off(t, e || "**", n);
                },
              });
            var tt = v.now(),
              nt = /\?/;
            (v.parseJSON = function (e) {
              return JSON.parse(e + "");
            }),
              (v.parseXML = function (e) {
                var t;
                if (!e || "string" != typeof e) return null;
                try {
                  t = new DOMParser().parseFromString(e, "text/xml");
                } catch (e) {
                  t = void 0;
                }
                return (
                  (!t || t.getElementsByTagName("parsererror").length) &&
                    v.error("Invalid XML: " + e),
                  t
                );
              });
            var rt,
              it,
              ot = /#.*$/,
              st = /([?&])_=[^&]*/,
              at = /^(.*?):[ \t]*([^\r\n]*)$/gm,
              ut = /^(?:GET|HEAD)$/,
              ct = /^\/\//,
              lt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
              ft = {},
              pt = {},
              dt = "*/".concat("*");
            try {
              it = location.href;
            } catch (e) {
              ((it = g.createElement("a")).href = ""), (it = it.href);
            }
            function ht(e) {
              return function (t, n) {
                "string" != typeof t && ((n = t), (t = "*"));
                var r,
                  i = 0,
                  o = t.toLowerCase().match(O) || [];
                if (v.isFunction(n))
                  for (; (r = o[i++]); )
                    "+" === r[0]
                      ? ((r = r.slice(1) || "*"),
                        (e[r] = e[r] || []).unshift(n))
                      : (e[r] = e[r] || []).push(n);
              };
            }
            function gt(e, t, n, r) {
              var i = {},
                o = e === pt;
              function s(a) {
                var u;
                return (
                  (i[a] = !0),
                  v.each(e[a] || [], function (e, a) {
                    var c = a(t, n, r);
                    return "string" != typeof c || o || i[c]
                      ? o
                        ? !(u = c)
                        : void 0
                      : (t.dataTypes.unshift(c), s(c), !1);
                  }),
                  u
                );
              }
              return s(t.dataTypes[0]) || (!i["*"] && s("*"));
            }
            function mt(e, t) {
              var n,
                r,
                i = v.ajaxSettings.flatOptions || {};
              for (n in t)
                void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
              return r && v.extend(!0, e, r), e;
            }
            (rt = lt.exec(it.toLowerCase()) || []),
              v.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                  url: it,
                  type: "GET",
                  isLocal:
                    /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                      rt[1]
                    ),
                  global: !0,
                  processData: !0,
                  async: !0,
                  contentType:
                    "application/x-www-form-urlencoded; charset=UTF-8",
                  accepts: {
                    "*": dt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript",
                  },
                  contents: { xml: /xml/, html: /html/, json: /json/ },
                  responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON",
                  },
                  converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": v.parseJSON,
                    "text xml": v.parseXML,
                  },
                  flatOptions: { url: !0, context: !0 },
                },
                ajaxSetup: function (e, t) {
                  return t
                    ? mt(mt(e, v.ajaxSettings), t)
                    : mt(v.ajaxSettings, e);
                },
                ajaxPrefilter: ht(ft),
                ajaxTransport: ht(pt),
                ajax: function (e, t) {
                  "object" == typeof e && ((t = e), (e = void 0)),
                    (t = t || {});
                  var n,
                    r,
                    i,
                    o,
                    s,
                    a,
                    u,
                    c,
                    l = v.ajaxSetup({}, t),
                    f = l.context || l,
                    p = l.context && (f.nodeType || f.jquery) ? v(f) : v.event,
                    d = v.Deferred(),
                    h = v.Callbacks("once memory"),
                    g = l.statusCode || {},
                    m = {},
                    y = {},
                    x = 0,
                    b = "canceled",
                    w = {
                      readyState: 0,
                      getResponseHeader: function (e) {
                        var t;
                        if (2 === x) {
                          if (!o)
                            for (o = {}; (t = at.exec(i)); )
                              o[t[1].toLowerCase()] = t[2];
                          t = o[e.toLowerCase()];
                        }
                        return null == t ? null : t;
                      },
                      getAllResponseHeaders: function () {
                        return 2 === x ? i : null;
                      },
                      setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return x || ((e = y[n] = y[n] || e), (m[e] = t)), this;
                      },
                      overrideMimeType: function (e) {
                        return x || (l.mimeType = e), this;
                      },
                      statusCode: function (e) {
                        var t;
                        if (e)
                          if (2 > x) for (t in e) g[t] = [g[t], e[t]];
                          else w.always(e[w.status]);
                        return this;
                      },
                      abort: function (e) {
                        var t = e || b;
                        return n && n.abort(t), T(0, t), this;
                      },
                    };
                  if (
                    ((d.promise(w).complete = h.add),
                    (w.success = w.done),
                    (w.error = w.fail),
                    (l.url = ((e || l.url || it) + "")
                      .replace(ot, "")
                      .replace(ct, rt[1] + "//")),
                    (l.type = t.method || t.type || l.method || l.type),
                    (l.dataTypes = v
                      .trim(l.dataType || "*")
                      .toLowerCase()
                      .match(O) || [""]),
                    null == l.crossDomain &&
                      ((a = lt.exec(l.url.toLowerCase())),
                      (l.crossDomain = !(
                        !a ||
                        (a[1] === rt[1] &&
                          a[2] === rt[2] &&
                          (a[3] || ("http:" === a[1] ? "80" : "443")) ===
                            (rt[3] || ("http:" === rt[1] ? "80" : "443")))
                      ))),
                    l.data &&
                      l.processData &&
                      "string" != typeof l.data &&
                      (l.data = v.param(l.data, l.traditional)),
                    gt(ft, l, t, w),
                    2 === x)
                  )
                    return w;
                  for (c in ((u = l.global) &&
                    0 == v.active++ &&
                    v.event.trigger("ajaxStart"),
                  (l.type = l.type.toUpperCase()),
                  (l.hasContent = !ut.test(l.type)),
                  (r = l.url),
                  l.hasContent ||
                    (l.data &&
                      ((r = l.url += (nt.test(r) ? "&" : "?") + l.data),
                      delete l.data),
                    !1 === l.cache &&
                      (l.url = st.test(r)
                        ? r.replace(st, "$1_=" + tt++)
                        : r + (nt.test(r) ? "&" : "?") + "_=" + tt++)),
                  l.ifModified &&
                    (v.lastModified[r] &&
                      w.setRequestHeader(
                        "If-Modified-Since",
                        v.lastModified[r]
                      ),
                    v.etag[r] &&
                      w.setRequestHeader("If-None-Match", v.etag[r])),
                  ((l.data && l.hasContent && !1 !== l.contentType) ||
                    t.contentType) &&
                    w.setRequestHeader("Content-Type", l.contentType),
                  w.setRequestHeader(
                    "Accept",
                    l.dataTypes[0] && l.accepts[l.dataTypes[0]]
                      ? l.accepts[l.dataTypes[0]] +
                          ("*" !== l.dataTypes[0] ? ", " + dt + "; q=0.01" : "")
                      : l.accepts["*"]
                  ),
                  l.headers))
                    w.setRequestHeader(c, l.headers[c]);
                  if (
                    l.beforeSend &&
                    (!1 === l.beforeSend.call(f, w, l) || 2 === x)
                  )
                    return w.abort();
                  for (c in ((b = "abort"),
                  { success: 1, error: 1, complete: 1 }))
                    w[c](l[c]);
                  if ((n = gt(pt, l, t, w))) {
                    (w.readyState = 1),
                      u && p.trigger("ajaxSend", [w, l]),
                      l.async &&
                        l.timeout > 0 &&
                        (s = setTimeout(function () {
                          w.abort("timeout");
                        }, l.timeout));
                    try {
                      (x = 1), n.send(m, T);
                    } catch (e) {
                      if (!(2 > x)) throw e;
                      T(-1, e);
                    }
                  } else T(-1, "No Transport");
                  function T(e, t, o, a) {
                    var c,
                      m,
                      y,
                      b,
                      T,
                      C = t;
                    2 !== x &&
                      ((x = 2),
                      s && clearTimeout(s),
                      (n = void 0),
                      (i = a || ""),
                      (w.readyState = e > 0 ? 4 : 0),
                      (c = (e >= 200 && 300 > e) || 304 === e),
                      o &&
                        (b = (function (e, t, n) {
                          for (
                            var r, i, o, s, a = e.contents, u = e.dataTypes;
                            "*" === u[0];

                          )
                            u.shift(),
                              void 0 === r &&
                                (r =
                                  e.mimeType ||
                                  t.getResponseHeader("Content-Type"));
                          if (r)
                            for (i in a)
                              if (a[i] && a[i].test(r)) {
                                u.unshift(i);
                                break;
                              }
                          if (u[0] in n) o = u[0];
                          else {
                            for (i in n) {
                              if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break;
                              }
                              s || (s = i);
                            }
                            o = o || s;
                          }
                          return o
                            ? (o !== u[0] && u.unshift(o), n[o])
                            : void 0;
                        })(l, w, o)),
                      (b = (function (e, t, n, r) {
                        var i,
                          o,
                          s,
                          a,
                          u,
                          c = {},
                          l = e.dataTypes.slice();
                        if (l[1])
                          for (s in e.converters)
                            c[s.toLowerCase()] = e.converters[s];
                        for (o = l.shift(); o; )
                          if (
                            (e.responseFields[o] &&
                              (n[e.responseFields[o]] = t),
                            !u &&
                              r &&
                              e.dataFilter &&
                              (t = e.dataFilter(t, e.dataType)),
                            (u = o),
                            (o = l.shift()))
                          )
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                              if (!(s = c[u + " " + o] || c["* " + o]))
                                for (i in c)
                                  if (
                                    (a = i.split(" "))[1] === o &&
                                    (s = c[u + " " + a[0]] || c["* " + a[0]])
                                  ) {
                                    !0 === s
                                      ? (s = c[i])
                                      : !0 !== c[i] &&
                                        ((o = a[0]), l.unshift(a[1]));
                                    break;
                                  }
                              if (!0 !== s)
                                if (s && e.throws) t = s(t);
                                else
                                  try {
                                    t = s(t);
                                  } catch (e) {
                                    return {
                                      state: "parsererror",
                                      error: s
                                        ? e
                                        : "No conversion from " +
                                          u +
                                          " to " +
                                          o,
                                    };
                                  }
                            }
                        return { state: "success", data: t };
                      })(l, b, w, c)),
                      c
                        ? (l.ifModified &&
                            ((T = w.getResponseHeader("Last-Modified")) &&
                              (v.lastModified[r] = T),
                            (T = w.getResponseHeader("etag")) &&
                              (v.etag[r] = T)),
                          204 === e || "HEAD" === l.type
                            ? (C = "nocontent")
                            : 304 === e
                            ? (C = "notmodified")
                            : ((C = b.state),
                              (m = b.data),
                              (c = !(y = b.error))))
                        : ((y = C),
                          (e || !C) && ((C = "error"), 0 > e && (e = 0))),
                      (w.status = e),
                      (w.statusText = (t || C) + ""),
                      c
                        ? d.resolveWith(f, [m, C, w])
                        : d.rejectWith(f, [w, C, y]),
                      w.statusCode(g),
                      (g = void 0),
                      u &&
                        p.trigger(c ? "ajaxSuccess" : "ajaxError", [
                          w,
                          l,
                          c ? m : y,
                        ]),
                      h.fireWith(f, [w, C]),
                      u &&
                        (p.trigger("ajaxComplete", [w, l]),
                        --v.active || v.event.trigger("ajaxStop")));
                  }
                  return w;
                },
                getJSON: function (e, t, n) {
                  return v.get(e, t, n, "json");
                },
                getScript: function (e, t) {
                  return v.get(e, void 0, t, "script");
                },
              }),
              v.each(["get", "post"], function (e, t) {
                v[t] = function (e, n, r, i) {
                  return (
                    v.isFunction(n) && ((i = i || r), (r = n), (n = void 0)),
                    v.ajax({
                      url: e,
                      type: t,
                      dataType: i,
                      data: n,
                      success: r,
                    })
                  );
                };
              }),
              v.each(
                [
                  "ajaxStart",
                  "ajaxStop",
                  "ajaxComplete",
                  "ajaxError",
                  "ajaxSuccess",
                  "ajaxSend",
                ],
                function (e, t) {
                  v.fn[t] = function (e) {
                    return this.on(t, e);
                  };
                }
              ),
              (v._evalUrl = function (e) {
                return v.ajax({
                  url: e,
                  type: "GET",
                  dataType: "script",
                  async: !1,
                  global: !1,
                  throws: !0,
                });
              }),
              v.fn.extend({
                wrapAll: function (e) {
                  var t;
                  return v.isFunction(e)
                    ? this.each(function (t) {
                        v(this).wrapAll(e.call(this, t));
                      })
                    : (this[0] &&
                        ((t = v(e, this[0].ownerDocument).eq(0).clone(!0)),
                        this[0].parentNode && t.insertBefore(this[0]),
                        t
                          .map(function () {
                            for (var e = this; e.firstElementChild; )
                              e = e.firstElementChild;
                            return e;
                          })
                          .append(this)),
                      this);
                },
                wrapInner: function (e) {
                  return this.each(
                    v.isFunction(e)
                      ? function (t) {
                          v(this).wrapInner(e.call(this, t));
                        }
                      : function () {
                          var t = v(this),
                            n = t.contents();
                          n.length ? n.wrapAll(e) : t.append(e);
                        }
                  );
                },
                wrap: function (e) {
                  var t = v.isFunction(e);
                  return this.each(function (n) {
                    v(this).wrapAll(t ? e.call(this, n) : e);
                  });
                },
                unwrap: function () {
                  return this.parent()
                    .each(function () {
                      v.nodeName(this, "body") ||
                        v(this).replaceWith(this.childNodes);
                    })
                    .end();
                },
              }),
              (v.expr.filters.hidden = function (e) {
                return e.offsetWidth <= 0 && e.offsetHeight <= 0;
              }),
              (v.expr.filters.visible = function (e) {
                return !v.expr.filters.hidden(e);
              });
            var vt = /%20/g,
              yt = /\[\]$/,
              xt = /\r?\n/g,
              bt = /^(?:submit|button|image|reset|file)$/i,
              wt = /^(?:input|select|textarea|keygen)/i;
            function Tt(e, t, n, r) {
              var i;
              if (v.isArray(t))
                v.each(t, function (t, i) {
                  n || yt.test(e)
                    ? r(e, i)
                    : Tt(
                        e + "[" + ("object" == typeof i ? t : "") + "]",
                        i,
                        n,
                        r
                      );
                });
              else if (n || "object" !== v.type(t)) r(e, t);
              else for (i in t) Tt(e + "[" + i + "]", t[i], n, r);
            }
            (v.param = function (e, t) {
              var n,
                r = [],
                i = function (e, t) {
                  (t = v.isFunction(t) ? t() : null == t ? "" : t),
                    (r[r.length] =
                      encodeURIComponent(e) + "=" + encodeURIComponent(t));
                };
              if (
                (void 0 === t &&
                  (t = v.ajaxSettings && v.ajaxSettings.traditional),
                v.isArray(e) || (e.jquery && !v.isPlainObject(e)))
              )
                v.each(e, function () {
                  i(this.name, this.value);
                });
              else for (n in e) Tt(n, e[n], t, i);
              return r.join("&").replace(vt, "+");
            }),
              v.fn.extend({
                serialize: function () {
                  return v.param(this.serializeArray());
                },
                serializeArray: function () {
                  return this.map(function () {
                    var e = v.prop(this, "elements");
                    return e ? v.makeArray(e) : this;
                  })
                    .filter(function () {
                      var e = this.type;
                      return (
                        this.name &&
                        !v(this).is(":disabled") &&
                        wt.test(this.nodeName) &&
                        !bt.test(e) &&
                        (this.checked || !Y.test(e))
                      );
                    })
                    .map(function (e, t) {
                      var n = v(this).val();
                      return null == n
                        ? null
                        : v.isArray(n)
                        ? v.map(n, function (e) {
                            return {
                              name: t.name,
                              value: e.replace(xt, "\r\n"),
                            };
                          })
                        : { name: t.name, value: n.replace(xt, "\r\n") };
                    })
                    .get();
                },
              }),
              (v.ajaxSettings.xhr = function () {
                try {
                  return new XMLHttpRequest();
                } catch (e) {}
              });
            var Ct = 0,
              kt = {},
              Nt = { 0: 200, 1223: 204 },
              Et = v.ajaxSettings.xhr();
            r.ActiveXObject &&
              v(r).on("unload", function () {
                for (var e in kt) kt[e]();
              }),
              (h.cors = !!Et && "withCredentials" in Et),
              (h.ajax = Et = !!Et),
              v.ajaxTransport(function (e) {
                var t;
                return h.cors || (Et && !e.crossDomain)
                  ? {
                      send: function (n, r) {
                        var i,
                          o = e.xhr(),
                          s = ++Ct;
                        if (
                          (o.open(
                            e.type,
                            e.url,
                            e.async,
                            e.username,
                            e.password
                          ),
                          e.xhrFields)
                        )
                          for (i in e.xhrFields) o[i] = e.xhrFields[i];
                        for (i in (e.mimeType &&
                          o.overrideMimeType &&
                          o.overrideMimeType(e.mimeType),
                        e.crossDomain ||
                          n["X-Requested-With"] ||
                          (n["X-Requested-With"] = "XMLHttpRequest"),
                        n))
                          o.setRequestHeader(i, n[i]);
                        (t = function (e) {
                          return function () {
                            t &&
                              (delete kt[s],
                              (t = o.onload = o.onerror = null),
                              "abort" === e
                                ? o.abort()
                                : "error" === e
                                ? r(o.status, o.statusText)
                                : r(
                                    Nt[o.status] || o.status,
                                    o.statusText,
                                    "string" == typeof o.responseText
                                      ? { text: o.responseText }
                                      : void 0,
                                    o.getAllResponseHeaders()
                                  ));
                          };
                        }),
                          (o.onload = t()),
                          (o.onerror = t("error")),
                          (t = kt[s] = t("abort")),
                          o.send((e.hasContent && e.data) || null);
                      },
                      abort: function () {
                        t && t();
                      },
                    }
                  : void 0;
              }),
              v.ajaxSetup({
                accepts: {
                  script:
                    "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
                },
                contents: { script: /(?:java|ecma)script/ },
                converters: {
                  "text script": function (e) {
                    return v.globalEval(e), e;
                  },
                },
              }),
              v.ajaxPrefilter("script", function (e) {
                void 0 === e.cache && (e.cache = !1),
                  e.crossDomain && (e.type = "GET");
              }),
              v.ajaxTransport("script", function (e) {
                var t, n;
                if (e.crossDomain)
                  return {
                    send: function (r, i) {
                      (t = v("<script>")
                        .prop({
                          async: !0,
                          charset: e.scriptCharset,
                          src: e.url,
                        })
                        .on(
                          "load error",
                          (n = function (e) {
                            t.remove(),
                              (n = null),
                              e && i("error" === e.type ? 404 : 200, e.type);
                          })
                        )),
                        g.head.appendChild(t[0]);
                    },
                    abort: function () {
                      n && n();
                    },
                  };
              });
            var St = [],
              jt = /(=)\?(?=&|$)|\?\?/;
            v.ajaxSetup({
              jsonp: "callback",
              jsonpCallback: function () {
                var e = St.pop() || v.expando + "_" + tt++;
                return (this[e] = !0), e;
              },
            }),
              v.ajaxPrefilter("json jsonp", function (e, t, n) {
                var i,
                  o,
                  s,
                  a =
                    !1 !== e.jsonp &&
                    (jt.test(e.url)
                      ? "url"
                      : "string" == typeof e.data &&
                        !(e.contentType || "").indexOf(
                          "application/x-www-form-urlencoded"
                        ) &&
                        jt.test(e.data) &&
                        "data");
                return a || "jsonp" === e.dataTypes[0]
                  ? ((i = e.jsonpCallback =
                      v.isFunction(e.jsonpCallback)
                        ? e.jsonpCallback()
                        : e.jsonpCallback),
                    a
                      ? (e[a] = e[a].replace(jt, "$1" + i))
                      : !1 !== e.jsonp &&
                        (e.url +=
                          (nt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                    (e.converters["script json"] = function () {
                      return s || v.error(i + " was not called"), s[0];
                    }),
                    (e.dataTypes[0] = "json"),
                    (o = r[i]),
                    (r[i] = function () {
                      s = arguments;
                    }),
                    n.always(function () {
                      (r[i] = o),
                        e[i] &&
                          ((e.jsonpCallback = t.jsonpCallback), St.push(i)),
                        s && v.isFunction(o) && o(s[0]),
                        (s = o = void 0);
                    }),
                    "script")
                  : void 0;
              }),
              (v.parseHTML = function (e, t, n) {
                if (!e || "string" != typeof e) return null;
                "boolean" == typeof t && ((n = t), (t = !1)), (t = t || g);
                var r = k.exec(e),
                  i = !n && [];
                return r
                  ? [t.createElement(r[1])]
                  : ((r = v.buildFragment([e], t, i)),
                    i && i.length && v(i).remove(),
                    v.merge([], r.childNodes));
              });
            var Dt = v.fn.load;
            (v.fn.load = function (e, t, n) {
              if ("string" != typeof e && Dt) return Dt.apply(this, arguments);
              var r,
                i,
                o,
                s = this,
                a = e.indexOf(" ");
              return (
                a >= 0 && ((r = e.slice(a)), (e = e.slice(0, a))),
                v.isFunction(t)
                  ? ((n = t), (t = void 0))
                  : t && "object" == typeof t && (i = "POST"),
                s.length > 0 &&
                  v
                    .ajax({ url: e, type: i, dataType: "html", data: t })
                    .done(function (e) {
                      (o = arguments),
                        s.html(
                          r ? v("<div>").append(v.parseHTML(e)).find(r) : e
                        );
                    })
                    .complete(
                      n &&
                        function (e, t) {
                          s.each(n, o || [e.responseText, t, e]);
                        }
                    ),
                this
              );
            }),
              (v.expr.filters.animated = function (e) {
                return v.grep(v.timers, function (t) {
                  return e === t.elem;
                }).length;
              });
            var At = r.document.documentElement;
            function Lt(e) {
              return v.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
            }
            (v.offset = {
              setOffset: function (e, t, n) {
                var r,
                  i,
                  o,
                  s,
                  a,
                  u,
                  c = v.css(e, "position"),
                  l = v(e),
                  f = {};
                "static" === c && (e.style.position = "relative"),
                  (a = l.offset()),
                  (o = v.css(e, "top")),
                  (u = v.css(e, "left")),
                  ("absolute" === c || "fixed" === c) &&
                  (o + u).indexOf("auto") > -1
                    ? ((s = (r = l.position()).top), (i = r.left))
                    : ((s = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
                  v.isFunction(t) && (t = t.call(e, n, a)),
                  null != t.top && (f.top = t.top - a.top + s),
                  null != t.left && (f.left = t.left - a.left + i),
                  "using" in t ? t.using.call(e, f) : l.css(f);
              },
            }),
              v.fn.extend({
                offset: function (e) {
                  if (arguments.length)
                    return void 0 === e
                      ? this
                      : this.each(function (t) {
                          v.offset.setOffset(this, e, t);
                        });
                  var t,
                    n,
                    r = this[0],
                    i = { top: 0, left: 0 },
                    o = r && r.ownerDocument;
                  return o
                    ? ((t = o.documentElement),
                      v.contains(t, r)
                        ? (typeof r.getBoundingClientRect !== V &&
                            (i = r.getBoundingClientRect()),
                          (n = Lt(o)),
                          {
                            top: i.top + n.pageYOffset - t.clientTop,
                            left: i.left + n.pageXOffset - t.clientLeft,
                          })
                        : i)
                    : void 0;
                },
                position: function () {
                  if (this[0]) {
                    var e,
                      t,
                      n = this[0],
                      r = { top: 0, left: 0 };
                    return (
                      "fixed" === v.css(n, "position")
                        ? (t = n.getBoundingClientRect())
                        : ((e = this.offsetParent()),
                          (t = this.offset()),
                          v.nodeName(e[0], "html") || (r = e.offset()),
                          (r.top += v.css(e[0], "borderTopWidth", !0)),
                          (r.left += v.css(e[0], "borderLeftWidth", !0))),
                      {
                        top: t.top - r.top - v.css(n, "marginTop", !0),
                        left: t.left - r.left - v.css(n, "marginLeft", !0),
                      }
                    );
                  }
                },
                offsetParent: function () {
                  return this.map(function () {
                    for (
                      var e = this.offsetParent || At;
                      e &&
                      !v.nodeName(e, "html") &&
                      "static" === v.css(e, "position");

                    )
                      e = e.offsetParent;
                    return e || At;
                  });
                },
              }),
              v.each(
                { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
                function (e, t) {
                  var n = "pageYOffset" === t;
                  v.fn[e] = function (i) {
                    return P(
                      this,
                      function (e, i, o) {
                        var s = Lt(e);
                        return void 0 === o
                          ? s
                            ? s[t]
                            : e[i]
                          : void (s
                              ? s.scrollTo(
                                  n ? r.pageXOffset : o,
                                  n ? o : r.pageYOffset
                                )
                              : (e[i] = o));
                      },
                      e,
                      i,
                      arguments.length,
                      null
                    );
                  };
                }
              ),
              v.each(["top", "left"], function (e, t) {
                v.cssHooks[t] = Ee(h.pixelPosition, function (e, n) {
                  return n
                    ? ((n = Ne(e, t)),
                      Ce.test(n) ? v(e).position()[t] + "px" : n)
                    : void 0;
                });
              }),
              v.each({ Height: "height", Width: "width" }, function (e, t) {
                v.each(
                  { padding: "inner" + e, content: t, "": "outer" + e },
                  function (n, r) {
                    v.fn[r] = function (r, i) {
                      var o = arguments.length && (n || "boolean" != typeof r),
                        s = n || (!0 === r || !0 === i ? "margin" : "border");
                      return P(
                        this,
                        function (t, n, r) {
                          var i;
                          return v.isWindow(t)
                            ? t.document.documentElement["client" + e]
                            : 9 === t.nodeType
                            ? ((i = t.documentElement),
                              Math.max(
                                t.body["scroll" + e],
                                i["scroll" + e],
                                t.body["offset" + e],
                                i["offset" + e],
                                i["client" + e]
                              ))
                            : void 0 === r
                            ? v.css(t, n, s)
                            : v.style(t, n, r, s);
                        },
                        t,
                        o ? r : void 0,
                        o,
                        null
                      );
                    };
                  }
                );
              }),
              (v.fn.size = function () {
                return this.length;
              }),
              (v.fn.andSelf = v.fn.addBack),
              void 0 ===
                (n = function () {
                  return v;
                }.apply(t, [])) || (e.exports = n);
            var qt = r.jQuery,
              Ht = r.$;
            return (
              (v.noConflict = function (e) {
                return (
                  r.$ === v && (r.$ = Ht),
                  e && r.jQuery === v && (r.jQuery = qt),
                  v
                );
              }),
              typeof i === V && (r.jQuery = r.$ = v),
              v
            );
          }),
          "object" == typeof e.exports
            ? (e.exports = r.document
                ? i(r, !0)
                : function (e) {
                    if (!e.document)
                      throw new Error(
                        "jQuery requires a window with a document"
                      );
                    return i(e);
                  })
            : i(r);
      },
      592: (e, t, n) => {
        "use strict";
        e.exports = n.p + "77070b24d9569eebec4d.png";
      },
    },
    t = {};
  function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var o = (t[r] = { id: r, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), o.exports;
  }
  (n.m = e),
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e;
      n.g.importScripts && (e = n.g.location + "");
      var t = n.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var r = t.getElementsByTagName("script");
        if (r.length) for (var i = r.length - 1; i > -1 && !e; ) e = r[i--].src;
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (n.p = e);
    })(),
    (n.b = document.baseURI || self.location.href),
    (n.nc = void 0),
    (() => {
      "use strict";
      var e = n(472),
        t = n.n(e),
        r = n(379),
        i = n.n(r),
        o = n(795),
        s = n.n(o),
        a = n(569),
        u = n.n(a),
        c = n(565),
        l = n.n(c),
        f = n(216),
        p = n.n(f),
        d = n(589),
        h = n.n(d),
        g = n(919),
        m = {};
      (m.styleTagTransform = h()),
        (m.setAttributes = l()),
        (m.insert = u().bind(null, "head")),
        (m.domAPI = s()),
        (m.insertStyleElement = p()),
        i()(g.Z, m),
        g.Z && g.Z.locals && g.Z.locals;
      var v = [
          "Tiger",
          "Samuel",
          "Leeloo",
          "Bella",
          "Mo",
          "Sly",
          "Beezy",
          "Maple",
          "Rodney",
          "Yonce",
          "Reginald",
          "Winifred",
        ],
        y = [
          "9 Weeks",
          "12 Weeks",
          "3 Months",
          "8 Weeks",
          "1 Year",
          "15 Weeks",
          "4 Months",
          "2 Months",
          "14 Weeks",
          "6 Months",
          "10 Weeks",
          "8 Months",
        ];
      t()(".kittens")
        .find("li")
        .each(function (e, n) {
          var r = t()(n).find("img"),
            i = t()(n).find(".name"),
            o = t()(n).find(".age");
          r.attr("src", "http://placekitten.com/250/250?image=" + e),
            i.text(v[e]),
            o.text(y[e]);
        });
    })();
})();
