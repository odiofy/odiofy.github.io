! function e(t, i, n) {
    function o(r, s) {
        if (!i[r]) {
            if (!t[r]) {
                var l = "function" == typeof require && require;
                if (!s && l) return l(r, !0);
                if (a) return a(r, !0);
                throw new Error("Cannot find module '" + r + "'")
            }
            var p = i[r] = {
                exports: {}
            };
            t[r][0].call(p.exports, function(e) {
                var i = t[r][1][e];
                return o(i || e)
            }, p, p.exports, e, t, i, n)
        }
        return i[r].exports
    }
    for (var a = "function" == typeof require && require, r = 0; r < n.length; r++) o(n[r]);
    return o
}({
    1: [function(e, t, i) {
        "use strict";
        var n, o;
        n = this, o = function() {
            return function(e) {
                function t(n) {
                    if (i[n]) return i[n].exports;
                    var o = i[n] = {
                        exports: {},
                        id: n,
                        loaded: !1
                    };
                    return e[n].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
                }
                var i = {};
                return t.m = e, t.c = i, t.p = "", t(0)
            }([function(e, t, i) {
                function n() {
                    var e = new r.HandlebarsEnvironment;
                    return p.extend(e, r), e.SafeString = s["default"], e.Exception = l["default"], e.Utils = p, e.escapeExpression = p.escapeExpression, e.VM = d, e.template = function(t) {
                        return d.template(t, e)
                    }, e
                }
                var o = i(1)["default"],
                    a = i(2)["default"];
                t.__esModule = !0;
                var r = o(i(3)),
                    s = a(i(9)),
                    l = a(i(5)),
                    p = o(i(4)),
                    d = o(i(10)),
                    c = a(i(11)),
                    u = n();
                u.create = n, c["default"](u), u["default"] = u, t["default"] = u, e.exports = t["default"]
            }, function(e, t) {
                t["default"] = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t["default"] = e, t
                }, t.__esModule = !0
            }, function(e, t) {
                t["default"] = function(e) {
                    return e && e.__esModule ? e : {
                        "default": e
                    }
                }, t.__esModule = !0
            }, function(e, t, i) {
                function n(e, t) {
                    var i;
                    this.helpers = e || {}, this.partials = t || {}, (i = this).registerHelper("helperMissing", function() {
                        if (1 !== arguments.length) throw new l["default"]('Missing helper: "' + arguments[arguments.length - 1].name + '"')
                    }), i.registerHelper("blockHelperMissing", function(e, t) {
                        var n = t.inverse,
                            a = t.fn;
                        if (!0 === e) return a(this);
                        if (!1 === e || null == e) return n(this);
                        if (p(e)) return 0 < e.length ? (t.ids && (t.ids = [t.name]), i.helpers.each(e, t)) : n(this);
                        if (t.data && t.ids) {
                            var r = o(t.data);
                            r.contextPath = s.appendContextPath(t.data.contextPath, t.name), t = {
                                data: r
                            }
                        }
                        return a(e, t)
                    }), i.registerHelper("each", function(e, t) {
                        function i(t, i, o) {
                            u && (u.key = t, u.index = i, u.first = 0 === i, u.last = !!o, m && (u.contextPath = m + t)), c += n(e[t], {
                                data: u,
                                blockParams: s.blockParams([e[t], t], [m + t, null])
                            })
                        }
                        if (!t) throw new l["default"]("Must pass iterator to #each");
                        var n = t.fn,
                            a = t.inverse,
                            r = 0,
                            c = "",
                            u = void 0,
                            m = void 0;
                        if (t.data && t.ids && (m = s.appendContextPath(t.data.contextPath, t.ids[0]) + "."), d(e) && (e = e.call(this)), t.data && (u = o(t.data)), e && "object" == typeof e)
                            if (p(e))
                                for (var h = e.length; r < h; r++) i(r, r, r === e.length - 1);
                            else {
                                var g = void 0;
                                for (var f in e) e.hasOwnProperty(f) && (g && i(g, r - 1), g = f, r++);
                                g && i(g, r - 1, !0)
                            } return 0 === r && (c = a(this)), c
                    }), i.registerHelper("if", function(e, t) {
                        return d(e) && (e = e.call(this)), !t.hash.includeZero && !e || s.isEmpty(e) ? t.inverse(this) : t.fn(this)
                    }), i.registerHelper("unless", function(e, t) {
                        return i.helpers["if"].call(this, e, {
                            fn: t.inverse,
                            inverse: t.fn,
                            hash: t.hash
                        })
                    }), i.registerHelper("with", function(e, t) {
                        d(e) && (e = e.call(this));
                        var i = t.fn;
                        if (s.isEmpty(e)) return t.inverse(this);
                        if (t.data && t.ids) {
                            var n = o(t.data);
                            n.contextPath = s.appendContextPath(t.data.contextPath, t.ids[0]), t = {
                                data: n
                            }
                        }
                        return i(e, t)
                    }), i.registerHelper("log", function(e, t) {
                        var n = t.data && null != t.data.level ? parseInt(t.data.level, 10) : 1;
                        i.log(n, e)
                    }), i.registerHelper("lookup", function(e, t) {
                        return e ? "constructor" !== t || e.propertyIsEnumerable(t) ? e[t] : void 0 : e
                    })
                }

                function o(e) {
                    var t = s.extend({}, e);
                    return t._parent = e, t
                }
                var a = i(1)["default"],
                    r = i(2)["default"];
                t.__esModule = !0, t.HandlebarsEnvironment = n, t.createFrame = o;
                var s = a(i(4)),
                    l = r(i(5));
                t.VERSION = "3.0.1", t.COMPILER_REVISION = 6, t.REVISION_CHANGES = {
                    1: "<= 1.0.rc.2",
                    2: "== 1.0.0-rc.3",
                    3: "== 1.0.0-rc.4",
                    4: "== 1.x.x",
                    5: "== 2.0.0-alpha.x",
                    6: ">= 2.0.0-beta.1"
                };
                var p = s.isArray,
                    d = s.isFunction,
                    c = s.toString,
                    u = "[object Object]";
                n.prototype = {
                    constructor: n,
                    logger: m,
                    log: h,
                    registerHelper: function(e, t) {
                        if (c.call(e) === u) {
                            if (t) throw new l["default"]("Arg not supported with multiple helpers");
                            s.extend(this.helpers, e)
                        } else this.helpers[e] = t
                    },
                    unregisterHelper: function(e) {
                        delete this.helpers[e]
                    },
                    registerPartial: function(e, t) {
                        if (c.call(e) === u) s.extend(this.partials, e);
                        else {
                            if (void 0 === t) throw new l["default"]("Attempting to register a partial as undefined");
                            this.partials[e] = t
                        }
                    },
                    unregisterPartial: function(e) {
                        delete this.partials[e]
                    }
                };
                var m = {
                        methodMap: {
                            0: "debug",
                            1: "info",
                            2: "warn",
                            3: "error"
                        },
                        DEBUG: 0,
                        INFO: 1,
                        WARN: 2,
                        ERROR: 3,
                        level: 1,
                        log: function(e, t) {
                            if ("undefined" != typeof console && m.level <= e) {
                                var i = m.methodMap[e];
                                (console[i] || console.log).call(console, t)
                            }
                        }
                    },
                    h = (t.logger = m).log;
                t.log = h
            }, function(e, t) {
                function i(e) {
                    return o[e]
                }
                t.__esModule = !0, t.extend = function(e) {
                    for (var t = 1; t < arguments.length; t++)
                        for (var i in arguments[t]) Object.prototype.hasOwnProperty.call(arguments[t], i) && (e[i] = arguments[t][i]);
                    return e
                }, t.indexOf = function(e, t) {
                    for (var i = 0, n = e.length; i < n; i++)
                        if (e[i] === t) return i;
                    return -1
                }, t.escapeExpression = function(e) {
                    if ("string" != typeof e) {
                        if (e && e.toHTML) return e.toHTML();
                        if (null == e) return "";
                        if (!e) return e + "";
                        e = "" + e
                    }
                    return r.test(e) ? e.replace(a, i) : e
                }, t.isEmpty = function(e) {
                    return !e && 0 !== e || !(!l(e) || 0 !== e.length)
                }, t.blockParams = function(e, t) {
                    return e.path = t, e
                }, t.appendContextPath = function(e, t) {
                    return (e ? e + "." : "") + t
                };
                var n, o = {
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#x27;",
                        "`": "&#x60;"
                    },
                    a = /[&<>"'`]/g,
                    r = /[&<>"'`]/,
                    s = Object.prototype.toString;
                t.toString = s, (n = function(e) {
                    return "function" == typeof e
                })(/x/) && (t.isFunction = n = function(e) {
                    return "function" == typeof e && "[object Function]" === s.call(e)
                }), t.isFunction = n;
                var l = Array.isArray || function(e) {
                    return !(!e || "object" != typeof e) && "[object Array]" === s.call(e)
                };
                t.isArray = l
            }, function(e, t, i) {
                function n(e, t) {
                    var i = t && t.loc,
                        r = void 0,
                        s = void 0;
                    i && (e += " - " + (r = i.start.line) + ":" + (s = i.start.column));
                    for (var l = Error.prototype.constructor.call(this, e), p = 0; p < a.length; p++) this[a[p]] = l[a[p]];
                    Error.captureStackTrace && Error.captureStackTrace(this, n);
                    try {
                        i && (this.lineNumber = r, o ? Object.defineProperty(this, "column", {
                            value: s,
                            enumerable: !0
                        }) : this.column = s)
                    } catch (e) {}
                }
                var o = i(6)["default"];
                t.__esModule = !0;
                var a = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
                n.prototype = new Error, t["default"] = n, e.exports = t["default"]
            }, function(e, t, i) {
                e.exports = {
                    "default": i(7),
                    __esModule: !0
                }
            }, function(e, t, i) {
                var n = i(8);
                e.exports = function(e, t, i) {
                    return n.setDesc(e, t, i)
                }
            }, function(e, t) {
                var i = Object;
                e.exports = {
                    create: i.create,
                    getProto: i.getPrototypeOf,
                    isEnum: {}.propertyIsEnumerable,
                    getDesc: i.getOwnPropertyDescriptor,
                    setDesc: i.defineProperty,
                    setDescs: i.defineProperties,
                    getKeys: i.keys,
                    getNames: i.getOwnPropertyNames,
                    getSymbols: i.getOwnPropertySymbols,
                    each: [].forEach
                }
            }, function(e, t) {
                function i(e) {
                    this.string = e
                }
                t.__esModule = !0, i.prototype.toString = i.prototype.toHTML = function() {
                    return "" + this.string
                }, t["default"] = i, e.exports = t["default"]
            }, function(e, t, i) {
                function n(e, t, i, n, o, a, r) {
                    function s(t) {
                        var o = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                        return i.call(e, t, e.helpers, e.partials, o.data || n, a && [o.blockParams].concat(a), r && [t].concat(r))
                    }
                    return s.program = t, s.depth = r ? r.length : 0, s.blockParams = o || 0, s
                }
                var o = i(1)["default"],
                    a = i(2)["default"];
                t.__esModule = !0, t.checkRevision = function(e) {
                    var t = e && e[0] || 1,
                        i = l.COMPILER_REVISION;
                    if (t !== i) {
                        if (t < i) {
                            var n = l.REVISION_CHANGES[i],
                                o = l.REVISION_CHANGES[t];
                            throw new s["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + n + ") or downgrade your runtime to an older version (" + o + ").")
                        }
                        throw new s["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + e[1] + ").")
                    }
                }, t.template = function(e, t) {
                    function i(t) {
                        var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                            a = n.data;
                        i._setup(n), !n.partial && e.useData && (a = function(e, t) {
                            return t && "root" in t || ((t = t ? l.createFrame(t) : {}).root = e), t
                        }(t, a));
                        var r = void 0,
                            s = e.useBlockParams ? [] : void 0;
                        return e.useDepths && (r = n.depths ? [t].concat(n.depths) : [t]), e.main.call(o, t, o.helpers, o.partials, a, s, r)
                    }
                    if (!t) throw new s["default"]("No environment passed to template");
                    if (!e || !e.main) throw new s["default"]("Unknown template object: " + typeof e);
                    t.VM.checkRevision(e.compiler);
                    var o = {
                        strict: function(e, t) {
                            if (!(t in e)) throw new s["default"]('"' + t + '" not defined in ' + e);
                            return e[t]
                        },
                        lookup: function(e, t) {
                            for (var i = e.length, n = 0; n < i; n++)
                                if (e[n] && null != e[n][t]) return e[n][t]
                        },
                        lambda: function(e, t) {
                            return "function" == typeof e ? e.call(t) : e
                        },
                        escapeExpression: r.escapeExpression,
                        invokePartial: function(i, n, o) {
                            o.hash && (n = r.extend({}, n, o.hash)), i = t.VM.resolvePartial.call(this, i, n, o);
                            var a = t.VM.invokePartial.call(this, i, n, o);
                            if (null == a && t.compile && (o.partials[o.name] = t.compile(i, e.compilerOptions, t), a = o.partials[o.name](n, o)), null == a) throw new s["default"]("The partial " + o.name + " could not be compiled when running in runtime-only mode");
                            if (o.indent) {
                                for (var l = a.split("\n"), p = 0, d = l.length; p < d && (l[p] || p + 1 !== d); p++) l[p] = o.indent + l[p];
                                a = l.join("\n")
                            }
                            return a
                        },
                        fn: function(t) {
                            return e[t]
                        },
                        programs: [],
                        program: function(e, t, i, o, a) {
                            var r = this.programs[e],
                                s = this.fn(e);
                            return t || a || o || i ? r = n(this, e, s, t, i, o, a) : r || (r = this.programs[e] = n(this, e, s)), r
                        },
                        data: function(e, t) {
                            for (; e && t--;) e = e._parent;
                            return e
                        },
                        merge: function(e, t) {
                            var i = e || t;
                            return e && t && e !== t && (i = r.extend({}, t, e)), i
                        },
                        noop: t.VM.noop,
                        compilerInfo: e.compiler
                    };
                    return i.isTop = !0, i._setup = function(i) {
                        i.partial ? (o.helpers = i.helpers, o.partials = i.partials) : (o.helpers = o.merge(i.helpers, t.helpers), e.usePartial && (o.partials = o.merge(i.partials, t.partials)))
                    }, i._child = function(t, i, a, r) {
                        if (e.useBlockParams && !a) throw new s["default"]("must pass block params");
                        if (e.useDepths && !r) throw new s["default"]("must pass parent depths");
                        return n(o, t, e[t], i, 0, a, r)
                    }, i
                }, t.wrapProgram = n, t.resolvePartial = function(e, t, i) {
                    return e ? e.call || i.name || (i.name = e, e = i.partials[e]) : e = i.partials[i.name], e
                }, t.invokePartial = function(e, t, i) {
                    if (i.partial = !0, void 0 === e) throw new s["default"]("The partial " + i.name + " could not be found");
                    if (e instanceof Function) return e(t, i)
                }, t.noop = function() {
                    return ""
                };
                var r = o(i(4)),
                    s = a(i(5)),
                    l = i(3)
            }, function(e, t) {
                (function(i) {
                    t.__esModule = !0, t["default"] = function(e) {
                        var t = void 0 !== i ? i : window,
                            n = t.Handlebars;
                        e.noConflict = function() {
                            t.Handlebars === e && (t.Handlebars = n)
                        }
                    }, e.exports = t["default"]
                }).call(t, function() {
                    return this
                }())
            }])
        }, "object" == typeof i && "object" == typeof t ? t.exports = o() : "function" == typeof define && define.amd ? define([], o) : "object" == typeof i ? i.Handlebars = o() : n.Handlebars = o()
    }, {}],
    2: [function(e, t, i) {
        "use strict";
        t.exports = ".swiper-slide,.swiper-wrapper{width:100%;height:100%;position:relative}.swiper-container{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;z-index:1}.swiper-container-no-flexbox .swiper-slide{float:left}.swiper-container-vertical>.swiper-wrapper{-webkit-box-orient:vertical;-moz-box-orient:vertical;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column}.swiper-wrapper{z-index:1;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-transition-property:-webkit-transform;-moz-transition-property:-moz-transform;-o-transition-property:-o-transform;-ms-transition-property:-ms-transform;transition-property:transform;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-o-transform:translate(0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.swiper-container-multirow>.swiper-wrapper{-webkit-box-lines:multiple;-moz-box-lines:multiple;-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap}.swiper-container-free-mode>.swiper-wrapper{-webkit-transition-timing-function:ease-out;-moz-transition-timing-function:ease-out;-ms-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out;margin:0 auto}.swiper-slide{-webkit-flex-shrink:0;-ms-flex:0 0 auto;flex-shrink:0}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{-webkit-box-align:start;-ms-flex-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-transition-property:-webkit-transform,height;-moz-transition-property:-moz-transform;-o-transition-property:-o-transform;-ms-transition-property:-ms-transform;transition-property:transform,height}.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-wp8-horizontal{-ms-touch-action:pan-y;touch-action:pan-y}.swiper-wp8-vertical{-ms-touch-action:pan-x;touch-action:pan-x}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:27px;height:44px;margin-top:-22px;z-index:10;cursor:pointer;-moz-background-size:27px 44px;-webkit-background-size:27px 44px;background-size:27px 44px;background-position:center;background-repeat:no-repeat}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{background-image:url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E');left:10px;right:auto}.swiper-button-prev.swiper-button-black,.swiper-container-rtl .swiper-button-next.swiper-button-black{background-image:url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E')}.swiper-button-prev.swiper-button-white,.swiper-container-rtl .swiper-button-next.swiper-button-white{background-image:url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E')}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{background-image:url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E');right:10px;left:auto}.swiper-button-next.swiper-button-black,.swiper-container-rtl .swiper-button-prev.swiper-button-black{background-image:url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E')}.swiper-button-next.swiper-button-white,.swiper-container-rtl .swiper-button-prev.swiper-button-white{background-image:url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E')}.swiper-pagination{position:absolute;text-align:center;-webkit-transition:.3s;-moz-transition:.3s;-o-transition:.3s;transition:.3s;-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-o-transform:translate3d(0,0,0);transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-moz-appearance:none;-ms-appearance:none;-webkit-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-white .swiper-pagination-bullet{background:#fff}.swiper-pagination-bullet-active{opacity:1;background:#007aff}.swiper-pagination-white .swiper-pagination-bullet-active{background:#fff}.swiper-pagination-black .swiper-pagination-bullet-active{background:#000}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;-webkit-transform:translate3d(0,-50%,0);-moz-transform:translate3d(0,-50%,0);-o-transform:translate(0,-50%);-ms-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:5px 0;display:block}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 5px}.swiper-pagination-progress{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progress .swiper-pagination-progressbar{background:#007aff;position:absolute;left:0;top:0;width:100%;height:100%;-webkit-transform:scale(0);-ms-transform:scale(0);-o-transform:scale(0);transform:scale(0);-webkit-transform-origin:left top;-moz-transform-origin:left top;-ms-transform-origin:left top;-o-transform-origin:left top;transform-origin:left top}.swiper-container-rtl .swiper-pagination-progress .swiper-pagination-progressbar{-webkit-transform-origin:right top;-moz-transform-origin:right top;-ms-transform-origin:right top;-o-transform-origin:right top;transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progress{width:100%;height:4px;left:0;top:0}.swiper-container-vertical>.swiper-pagination-progress{width:4px;height:100%;left:0;top:0}.swiper-pagination-progress.swiper-pagination-white{background:rgba(255,255,255,.5)}.swiper-pagination-progress.swiper-pagination-white .swiper-pagination-progressbar{background:#fff}.swiper-pagination-progress.swiper-pagination-black .swiper-pagination-progressbar{background:#000}.swiper-container-3d{-webkit-perspective:1200px;-moz-perspective:1200px;-o-perspective:1200px;perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(right,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-moz-linear-gradient(right,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-o-linear-gradient(right,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-right{background-image:-webkit-gradient(linear,right top,left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(left,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-moz-linear-gradient(left,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-o-linear-gradient(left,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-top{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(bottom,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-moz-linear-gradient(bottom,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-o-linear-gradient(bottom,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:-webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(top,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-moz-linear-gradient(top,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-o-linear-gradient(top,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-coverflow .swiper-wrapper,.swiper-container-flip .swiper-wrapper{-ms-perspective:1200px}.swiper-container-cube,.swiper-container-flip{overflow:visible}.swiper-container-cube .swiper-slide,.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-ms-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-cube .swiper-slide .swiper-slide,.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active,.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top,.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-ms-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-slide{visibility:hidden;-webkit-transform-origin:0 0;-moz-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube.swiper-container-rtl .swiper-slide{-webkit-transform-origin:100% 0;-moz-transform-origin:100% 0;-ms-transform-origin:100% 0;transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;background:#000;opacity:.6;-webkit-filter:blur(50px);filter:blur(50px);z-index:0}.swiper-container-fade.swiper-container-free-mode .swiper-slide{-webkit-transition-timing-function:ease-out;-moz-transition-timing-function:ease-out;-ms-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;-webkit-transition-property:opacity;-moz-transition-property:opacity;-o-transition-property:opacity;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-zoom-container{width:100%;height:100%;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-pack:center;-moz-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-moz-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;object-fit:contain}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;-webkit-transform-origin:50%;-moz-transform-origin:50%;transform-origin:50%;-webkit-animation:swiper-preloader-spin 1s steps(12,end) infinite;-moz-animation:swiper-preloader-spin 1s steps(12,end) infinite;animation:swiper-preloader-spin 1s steps(12,end) infinite}.swiper-lazy-preloader:after{display:block;content:'';width:100%;height:100%;background-image:url('data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');background-position:50%;-webkit-background-size:100%;background-size:100%;background-repeat:no-repeat}.swiper-lazy-preloader-white:after{background-image:url('data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')}@-webkit-keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg)}}@keyframes swiper-preloader-spin{100%{transform:rotate(360deg)}}.odiofyapp-root,.eui-reset,.odiofy-widget{-ms-flex-line-pack:initial;align-content:initial;-webkit-box-align:initial;-ms-flex-align:initial;align-items:initial;align-self:initial;-webkit-animation-delay:initial;animation-delay:initial;-webkit-animation-direction:initial;animation-direction:initial;-webkit-animation-duration:initial;animation-duration:initial;-webkit-animation-fill-mode:initial;animation-fill-mode:initial;-webkit-animation-iteration-count:initial;animation-iteration-count:initial;-webkit-animation-name:initial;animation-name:initial;-webkit-animation-play-state:initial;animation-play-state:initial;-webkit-animation-timing-function:initial;animation-timing-function:initial;-webkit-backface-visibility:initial;backface-visibility:initial;background-attachment:initial;background-blend-mode:initial;background-clip:initial;background-color:initial;background-image:initial;background-origin:initial;background-position-x:initial;background-position-y:initial;background-repeat:initial;background-size:initial;block-size:initial;border-block-end-color:initial;border-block-end-style:initial;border-block-end-width:initial;border-block-start-color:initial;border-block-start-style:initial;border-block-start-width:initial;border-bottom-left-radius:initial;border-bottom-right-radius:initial;border-bottom-width:initial;border-collapse:initial;border-image-outset:initial;border-image-repeat:initial;border-image-slice:initial;border-image-source:initial;border-image-width:initial;border-inline-end-color:initial;border-inline-end-style:initial;border-inline-end-width:initial;border-inline-start-color:initial;border-inline-start-style:initial;border-inline-start-width:initial;border-left-width:initial;border-right-width:initial;border-spacing:initial;border-top-left-radius:initial;border-top-right-radius:initial;border-top-width:initial;bottom:initial;-webkit-box-decoration-break:initial;box-decoration-break:initial;-webkit-box-shadow:initial;box-shadow:initial;-webkit-box-sizing:initial;box-sizing:initial;caption-side:initial;caret-color:initial;clear:initial;clip:initial;-webkit-clip-path:initial;clip-path:initial;clip-rule:initial;color:inherit;-webkit-print-color-adjust:initial;color-adjust:initial;color-interpolation:initial;color-interpolation-filters:initial;-webkit-column-count:initial;column-count:initial;-webkit-column-fill:initial;column-fill:initial;-webkit-column-gap:initial;column-gap:initial;-webkit-column-rule-color:initial;column-rule-color:initial;-webkit-column-rule-style:initial;column-rule-style:initial;-webkit-column-rule-width:initial;column-rule-width:initial;-webkit-column-width:initial;column-width:initial;content:initial;counter-increment:initial;counter-reset:initial;cursor:initial;dominant-baseline:initial;empty-cells:initial;fill:initial;fill-opacity:initial;fill-rule:initial;-webkit-filter:initial;filter:initial;-ms-flex-preferred-size:initial;flex-basis:initial;-webkit-box-orient:initial;-webkit-box-direction:initial;-ms-flex-direction:initial;flex-direction:initial;-webkit-box-flex:initial;-ms-flex-positive:initial;flex-grow:initial;-ms-flex-negative:initial;flex-shrink:initial;-ms-flex-wrap:initial;flex-wrap:initial;float:initial;flood-color:initial;flood-opacity:initial;-webkit-font-feature-settings:initial;font-feature-settings:initial;-webkit-font-kerning:initial;font-kerning:initial;-webkit-font-language-override:initial;font-language-override:initial;font-size:initial;font-size-adjust:initial;font-stretch:initial;font-style:initial;font-synthesis:initial;font-variant-alternates:initial;font-variant-caps:initial;font-variant-east-asian:initial;-webkit-font-variant-ligatures:initial;font-variant-ligatures:initial;font-variant-numeric:initial;font-variant-position:initial;font-weight:initial;grid-auto-columns:initial;grid-auto-flow:initial;grid-auto-rows:initial;grid-column-end:initial;grid-column-gap:initial;grid-column-start:initial;grid-row-end:initial;grid-row-gap:initial;grid-row-start:initial;grid-template-areas:initial;grid-template-columns:initial;grid-template-rows:initial;height:initial;-webkit-hyphens:initial;-ms-hyphens:initial;hyphens:initial;image-orientation:initial;image-rendering:initial;ime-mode:initial;inline-size:initial;isolation:initial;-webkit-box-pack:initial;-ms-flex-pack:initial;justify-content:initial;justify-items:initial;justify-self:initial;left:initial;letter-spacing:initial;lighting-color:initial;line-height:initial;-webkit-margin-after:initial;margin-block-end:initial;-webkit-margin-before:initial;margin-block-start:initial;margin-bottom:initial;-webkit-margin-end:initial;margin-inline-end:initial;-webkit-margin-start:initial;margin-inline-start:initial;margin-left:initial;margin-right:initial;margin-top:initial;marker-end:initial;marker-mid:initial;marker-start:initial;-webkit-mask-clip:initial;mask-clip:initial;-webkit-mask-composite:initial;mask-composite:initial;-webkit-mask-image:initial;mask-image:initial;mask-mode:initial;-webkit-mask-origin:initial;mask-origin:initial;mask-position-x:initial;mask-position-y:initial;-webkit-mask-repeat:initial;mask-repeat:initial;-webkit-mask-size:initial;mask-size:initial;mask-type:initial;max-block-size:initial;max-height:initial;max-inline-size:initial;max-width:initial;min-block-size:initial;min-height:initial;min-inline-size:initial;min-width:initial;mix-blend-mode:initial;-o-object-fit:initial;object-fit:initial;-o-object-position:initial;object-position:initial;offset-block-end:initial;offset-block-start:initial;offset-inline-end:initial;offset-inline-start:initial;opacity:initial;-webkit-box-ordinal-group:initial;-ms-flex-order:initial;order:initial;outline-color:initial;outline-offset:initial;outline-style:initial;outline-width:initial;overflow-x:initial;overflow-y:initial;-webkit-padding-after:initial;padding-block-end:initial;-webkit-padding-before:initial;padding-block-start:initial;padding-bottom:initial;-webkit-padding-end:initial;padding-inline-end:initial;-webkit-padding-start:initial;padding-inline-start:initial;padding-left:initial;padding-right:initial;padding-top:initial;page-break-after:initial;page-break-before:initial;page-break-inside:initial;paint-order:initial;-webkit-perspective:initial;perspective:initial;-webkit-perspective-origin:initial;perspective-origin:initial;pointer-events:initial;position:initial;quotes:initial;resize:initial;right:initial;ruby-align:initial;ruby-position:initial;scroll-behavior:initial;-webkit-scroll-snap-coordinate:initial;-ms-scroll-snap-coordinate:initial;scroll-snap-coordinate:initial;-webkit-scroll-snap-destination:initial;-ms-scroll-snap-destination:initial;scroll-snap-destination:initial;-webkit-scroll-snap-points-x:initial;-ms-scroll-snap-points-x:initial;scroll-snap-points-x:initial;-webkit-scroll-snap-points-y:initial;-ms-scroll-snap-points-y:initial;scroll-snap-points-y:initial;scroll-snap-type-x:initial;scroll-snap-type-y:initial;shape-rendering:initial;stop-color:initial;stop-opacity:initial;stroke:initial;stroke-dasharray:initial;stroke-dashoffset:initial;stroke-linecap:initial;stroke-linejoin:initial;stroke-miterlimit:initial;stroke-opacity:initial;stroke-width:initial;table-layout:initial;text-align:initial;text-align-last:initial;text-anchor:initial;text-combine-upright:initial;-webkit-text-decoration-color:initial;text-decoration-color:initial;-webkit-text-decoration-line:initial;text-decoration-line:initial;-webkit-text-decoration-style:initial;text-decoration-style:initial;-webkit-text-emphasis-color:initial;text-emphasis-color:initial;-webkit-text-emphasis-position:initial;text-emphasis-position:initial;-webkit-text-emphasis-style:initial;text-emphasis-style:initial;text-indent:initial;text-justify:initial;text-orientation:initial;-o-text-overflow:initial;text-overflow:initial;text-rendering:initial;text-shadow:initial;text-transform:initial;top:initial;-ms-touch-action:initial;touch-action:initial;-webkit-transform:initial;-ms-transform:initial;transform:initial;transform-box:initial;-webkit-transform-origin:initial;-ms-transform-origin:initial;transform-origin:initial;-webkit-transform-style:initial;transform-style:initial;-webkit-transition-delay:initial;-o-transition-delay:initial;transition-delay:initial;-webkit-transition-duration:initial;-o-transition-duration:initial;transition-duration:initial;-webkit-transition-property:initial;-o-transition-property:initial;transition-property:initial;-webkit-transition-timing-function:initial;-o-transition-timing-function:initial;transition-timing-function:initial;vector-effect:initial;vertical-align:initial;visibility:initial;white-space:initial;width:initial;will-change:initial;word-break:initial;word-spacing:initial;overflow-wrap:initial;-webkit-writing-mode:initial;-ms-writing-mode:initial;writing-mode:initial;z-index:initial;border-color:initial;border-style:initial;list-style:initial initial initial}.odiofy-widget-header-channel-caption,.odiofy-widget-header-channel-title{-o-text-overflow:ellipsis;text-overflow:ellipsis;-webkit-box-orient:vertical}.odiofyapp-root,.odiofy-widget{direction:ltr;unicode-bidi:normal;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased}.odiofyapp-root,.odiofyapp-root *,.odiofy-widget,.odiofy-widget *{-webkit-box-sizing:border-box;box-sizing:border-box}.odiofy-widget{width:100%;position:relative;direction:ltr!important;min-height:100px}.odiofy-widget .adsbygoogle{display:inline-block}.odiofy-widget a,.odiofy-widget a:hover{text-decoration:none}.odiofy-widget-header-channel-title a:hover,.odiofy-widget-video-classic:hover .odiofy-widget-video-info-title,.odiofy-widget-video-horizontal:hover .odiofy-widget-video-info-title{text-decoration:underline}.odiofy-widget-inner{border-radius:10px;overflow:hidden}.odiofy-widget-contents{z-index:2}.odiofy-spinner{position:absolute;width:50px;height:50px;top:50%;left:50%;-webkit-transform:translateX(-50%) translateY(-50%);-ms-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.odiofy-spinner::before{display:block;width:100%;height:100%;border:3px solid rgba(255,255,255,.6);border-radius:50%;-webkit-animation:odiofy-spinner 1.2s infinite;animation:odiofy-spinner 1.2s infinite;content:''}@-webkit-keyframes odiofy-spinner{0%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}75%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}100%{opacity:0;-webkit-transform:scale(1.2);transform:scale(1.2)}}@keyframes odiofy-spinner{0%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}75%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}100%{opacity:0;-webkit-transform:scale(1.2);transform:scale(1.2)}}.odiofy-widget-header{display:none!important;z-index:1;position:relative;background:#fafafa}.odiofy-widget-header.odiofy-visible{display:block!important}.odiofy-widget-header-banner{background-position:center center}.odiofy-widget-header-overlay{position:absolute;z-index:1;top:0;right:0;left:0;bottom:0;background:rgba(255,255,255,.92)}.odiofy-widget-header-inner{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:nowrap;flex-wrap:nowrap;padding:16px 20px;position:relative;z-index:2}.odiofy-mw-640 .odiofy-widget-header-inner{text-align:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.odiofy-widget-header-info{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.odiofy-widget-header-logo{display:block;-webkit-box-flex:1;-ms-flex:auto 0 0px;flex:auto 0 0;margin-right:16px;width:80px;height:80px;background:#fff;border-radius:50%;overflow:hidden}.odiofy-mw-640 .odiofy-widget-header-logo{margin:0 0 16px;width:40px;height:40px}.odiofy-widget-header-logo img{display:block;width:80px;height:80px}.odiofy-mw-640 .odiofy-widget-header-logo img{width:40px;height:40px}.odiofy-widget-header-channel-title{display:block!important;display:-webkit-box!important;overflow:hidden;line-height:28px;max-height:28px;font-size:20px;-webkit-line-clamp:1}.odiofy-widget-header-channel-title+*{margin-top:6px}.odiofy-widget-header-channel-properties{overflow:hidden;max-height:16px;font-size:12px;font-weight:400;line-height:16px;color:rgba(17,17,17,.7)}.odiofy-widget-header-channel-properties-item{display:inline-block}.odiofy-widget-header-channel-properties-item-divider{margin:0 4px}.odiofy-widget-header-channel-properties-item:first-child .odiofy-widget-header-channel-properties-item-divider{display:none}.odiofy-widget-header-channel-properties+*{margin-top:6px}.odiofy-widget-header-channel-caption{display:block!important;display:-webkit-box!important;overflow:hidden;text-align:left;line-height:21px;font-size:14px;font-weight:400;-webkit-line-clamp:2;max-height:42px}.odiofy-widget-header-classic{text-align:left}.odiofy-widget-header-classic .odiofy-widget-header-banner{height:175px;background-size:100% auto}.odiofy-widget-header-classic .odiofy-widget-header-overlay{display:none}.odiofy-widget-header-classic .odiofy-widget-header-logo{margin-right:16px}.odiofy-widget-header-classic .odiofy-widget-header-subscribe{margin-left:16px}.odiofy-mw-1056 .odiofy-widget-header-classic .odiofy-widget-header-banner{background-size:auto 100%}.odiofy-mw-640 .odiofy-widget-header-classic .odiofy-widget-header-banner{position:absolute;top:0;left:0;right:0;bottom:0;height:auto}.odiofy-mw-640 .odiofy-widget-header-classic .odiofy-widget-header-subscribe{margin:16px 0 0}.odiofy-mw-640 .odiofy-widget-header-classic .odiofy-widget-header-overlay{display:block}.odiofy-widget-header-minimal{color:#fff;text-align:left;overflow:hidden}.odiofy-widget-header-minimal .odiofy-widget-header-subscribe{margin:16px 0 10px 16px}.odiofy-widget-header-minimal .odiofy-widget-header-banner{position:absolute;top:0;left:0;right:0;bottom:0;-webkit-filter:blur(4px);filter:blur(4px);-webkit-transform:scale(1.03);-ms-transform:scale(1.03);transform:scale(1.03)}.odiofy-widget-header-accent{max-height:268px;overflow:hidden}.odiofy-widget-header-accent .odiofy-widget-header-logo{margin:0 0 16px}.odiofy-widget-header-accent .odiofy-widget-header-inner{text-align:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.odiofy-widget-header-accent .odiofy-widget-header-channel-caption{max-width:600px;text-align:center}.odiofy-widget-video-info-title,li.odiofy-widget-nav-list-item{max-width:100%;-o-text-overflow:ellipsis;text-overflow:ellipsis}.odiofy-widget-header-accent .odiofy-widget-header-banner{position:absolute;top:0;left:0;right:0;bottom:0;background-size:100% auto;-webkit-filter:blur(4px);filter:blur(4px);-webkit-transform:scale(1.03);-ms-transform:scale(1.03);transform:scale(1.03)}.odiofy-widget-header-accent .odiofy-widget-header-subscribe{margin:16px 0 0}.odiofy-widget-header-accent .odiofy-widget-header-brandingless.odiofy-widget-header-accent .odiofy-widget-header{height:150px}.odiofy-mw-1354 .odiofy-widget-header-accent .odiofy-widget-header-banner{background-size:auto 100%}.odiofy-widget-nav{position:relative;overflow:hidden;z-index:1;background:#fafafa}.odiofy-widget-nav.odiofy-disabled{display:none}.odiofy-widget-nav-inner{height:46px}.odiofy-widget-nav-list{position:relative;z-index:2;-webkit-transition:all .1s ease;-o-transition:all .1s ease;transition:all .1s ease}ul.odiofy-widget-nav-list{overflow-x:auto;overflow-y:hidden;margin:0;padding:0 16px;white-space:nowrap;-webkit-overflow-scrolling:touch}li.odiofy-widget-nav-list-item{display:inline-block;position:relative;overflow:hidden}li.odiofy-widget-nav-list-item::after{display:block;position:absolute;left:50%;right:50%;bottom:0;height:2px;opacity:.6;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transition:all .3s cubic-bezier(.4,0,.2,1);-o-transition:all .3s cubic-bezier(.4,0,.2,1);transition:all .3s cubic-bezier(.4,0,.2,1);content:''}li.odiofy-widget-nav-list-item.odiofy-active::after,li.odiofy-widget-nav-list-item:focus::after{right:0;left:0;opacity:1}li.odiofy-widget-nav-list-item a{display:block;padding:14px 16px;outline:0!important;line-height:18px;font-weight:700;font-size:14px;-webkit-transition:color .3s ease;-o-transition:color .3s ease;transition:color .3s ease}.odiofy-widget-nav-control,.odiofy-widget-nav-control span{-webkit-transition:all .3s ease;-o-transition:all .3s ease;position:absolute}.odiofy-widget-nav-control{z-index:3;top:0;bottom:0;width:35px;cursor:pointer;transition:all .3s ease}.odiofy-widget-nav-control::before{content:'';display:block;position:absolute;top:0;bottom:0;width:60px;pointer-events:none}.odiofy-widget-nav-control span{display:block;width:9px;height:15px;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);transition:all .3s ease}.odiofy-widget-nav-control span::after,.odiofy-widget-nav-control span::before{content:'';display:block;position:absolute;width:10px;height:2px;top:7px;-webkit-transition:all .3s ease;-o-transition:all .3s ease;transition:all .3s ease}.odiofy-widget-nav-control-left,.odiofy-widget-nav-control-left::before{left:0}.odiofy-widget-nav-control-left span{left:17px}.odiofy-widget-nav-control-left span::after,.odiofy-widget-nav-control-left span::before{left:0}.odiofy-widget-nav-control-left span::before{-webkit-transform-origin:0 110%;-ms-transform-origin:0 110%;transform-origin:0 110%;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}.odiofy-widget-nav-control-left span::after{-webkit-transform-origin:0 -10%;-ms-transform-origin:0 -10%;transform-origin:0 -10%;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.odiofy-widget-nav-control-right,.odiofy-widget-nav-control-right::before{right:0}.odiofy-widget-nav-control-right span{right:17px}.odiofy-widget-nav-control-right span::after,.odiofy-widget-nav-control-right span::before{right:0}.odiofy-widget-nav-control-right span::before{-webkit-transform-origin:100% 110%;-ms-transform-origin:100% 110%;transform-origin:100% 110%;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.odiofy-widget-nav-control-right span::after{-webkit-transform-origin:100% -10%;-ms-transform-origin:100% -10%;transform-origin:100% -10%;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}.odiofy-widget-nav-control:active.odiofy-widget-nav-control-left span{-webkit-transform:translateY(-50%) scaleY(.8) translateX(-30%);-ms-transform:translateY(-50%) scaleY(.8) translateX(-30%);transform:translateY(-50%) scaleY(.8) translateX(-30%)}.odiofy-widget-nav-control:active.odiofy-widget-nav-control-right span{-webkit-transform:translateY(-50%) scaleY(.8) translateX(30%);-ms-transform:translateY(-50%) scaleY(.8) translateX(30%);transform:translateY(-50%) scaleY(.8) translateX(30%)}.odiofy-widget-nav-control-disabled{visibility:hidden;opacity:0}.odiofy-widget-feed-ads{text-align:center}.odiofy-widget-feed-ads .adsbygoogle{margin:10px 0}.odiofy-widget-feed-section-pagination{position:relative!important;padding:20px!important}span.odiofy-widget-feed-section-pagination-bullet{text-align:center;min-width:18px;font-size:11px;padding:5px 7px;margin:0 3px;width:auto;height:auto;border-radius:2px;color:#aaa;line-height:1;background:rgba(175,175,175,.1);opacity:1;-webkit-transition:color .3s ease;-o-transition:color .3s ease;transition:color .3s ease}span.odiofy-widget-feed-section-pagination-bullet:hover{background:#eee}span.odiofy-widget-feed-section-pagination-bullet-more{position:relative;padding:5px 9px}span.odiofy-widget-feed-section-pagination-bullet-more::after,span.odiofy-widget-feed-section-pagination-bullet-more::before{position:absolute;top:11px;right:40%;width:5px;height:1px;content:'';background:#aaa;-webkit-transition:background .3s;-o-transition:background .3s;transition:background .3s}span.odiofy-widget-feed-section-pagination-bullet-more::before{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);-webkit-transform-origin:100% 100%;-ms-transform-origin:100% 100%;transform-origin:100% 100%}span.odiofy-widget-feed-section-pagination-bullet-more::after{-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:100% 0;-ms-transform-origin:100% 0;transform-origin:100% 0}.odiofy-widget-feed-section-pagination .swiper-pagination-bullet-active{color:#111;background:#eee}.odiofy-widget-feed-section-search{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;padding:20px!important}.odiofy-widget-feed-section-search-selector{height:33px;line-height:33px;margin-left:20px!important}.odiofy-widget-feed-section-search-selector-label{color:#aaa;cursor:pointer}.odiofy-widget-feed-section-search-selector-label-input{position:relative;top:2px;margin-right:5px;outline:0;cursor:pointer}.odiofy-widget-feed-section-search-form{position:relative;width:33%;margin-bottom:0}@media only screen and (max-width:640px){span.odiofy-widget-feed-section-pagination-bullet{min-width:14px}.odiofy-widget-feed-section-search-form{width:50%}}@media only screen and (max-width:500px){.odiofy-widget-feed-section-search-form{width:100%}}.odiofy-widget-feed-section-search-form-input{border-radius:2px;border:1px solid rgba(175,175,175,.3);outline:0;padding:6px 11px;width:100%;color:#aaa;line-height:1;font-size:13px;-webkit-box-sizing:border-box;box-sizing:border-box;background:0 0}.odiofy-widget-feed-section-search-form-input::-ms-clear{display:none}.odiofy-widget-feed-section-search-form-button{position:absolute;right:0;top:0;padding:9px 10px 8px;width:12px;height:12px;display:inline-block;cursor:pointer;-webkit-box-sizing:content-box;box-sizing:content-box}.odiofy-widget-feed-section-search-form-button-icon{display:block;height:12px;width:12px;fill:rgba(175,175,175,.3);-webkit-transition:fill .5s;-o-transition:fill .5s;transition:fill .5s}.odiofy-widget-feed-section-search-form-button:hover .odiofy-widget-feed-section-search-form-button-icon{fill:red}div.odiofy-widget-feed-section{display:none;position:relative;min-height:150px}div.odiofy-widget-feed-section.odiofy-active{display:block}div.odiofy-widget-feed-section-novideos{position:absolute;top:50%;right:0;left:0;text-align:center;color:#aaa;height:32px;line-height:32px;margin-top:-16px;font-size:14px}div.odiofy-widget-feed-section-scrollbar{position:absolute;z-index:5;right:10px;bottom:10px;left:10px;height:3px;border-radius:0}div.odiofy-widget-feed-section-scrollbar .swiper-scrollbar-drag{border-radius:0}div.odiofy-widget-feed-section-arrow{position:absolute;z-index:3;top:50%;height:40px;width:40px;margin-top:-20px;border-radius:50%;-webkit-box-shadow:0 0 6px rgba(0,0,0,.2);box-shadow:0 0 6px rgba(0,0,0,.2);-webkit-transition:all .2s ease;-o-transition:all .2s ease;transition:all .2s ease;cursor:pointer}div.odiofy-widget-feed-section-arrow:active{-webkit-transform:scale(.9);-ms-transform:scale(.9);transform:scale(.9)}div.odiofy-widget-feed-section-arrow::before{display:block;position:absolute;visibility:hidden;top:8px;left:8px;width:3px;height:3px;border-radius:50%;opacity:0;-webkit-transform-origin:12px 12px;-ms-transform-origin:12px 12px;transform-origin:12px 12px;-webkit-transition:all .4s ease;-o-transition:all .4s ease;transition:all .4s ease;-webkit-animation:odiofy-arrow-orbit-loader .8s linear 0s infinite;animation:odiofy-arrow-orbit-loader .8s linear 0s infinite;content:''}div.odiofy-widget-feed-section-arrow.swiper-button-disabled{opacity:0;-webkit-transform:scale(.2);-ms-transform:scale(.2);transform:scale(.2);-webkit-transition:all .1s ease;-o-transition:all .1s ease;transition:all .1s ease}div.odiofy-widget-feed-section-arrow.swiper-button-disabled.odiofy-widget-feed-section-arrow-has-next{opacity:1;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}div.odiofy-widget-feed-section-arrow.swiper-button-disabled.odiofy-widget-feed-section-arrow-has-next::before{visibility:visible;opacity:1}div.odiofy-widget-feed-section-arrow span{display:block;position:relative;width:7px;height:15px;margin:13px 16px}div.odiofy-widget-feed-section-arrow span::after,div.odiofy-widget-feed-section-arrow span::before{position:absolute;border-radius:2px;top:6px;width:8px;height:2px;-webkit-transition:background .2s ease,width .2s ease;-o-transition:background .2s ease,width .2s ease;transition:background .2s ease,width .2s ease;content:''}div.odiofy-widget-feed-section-arrow-prev span::before{left:0;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 100%;-ms-transform-origin:0 100%;transform-origin:0 100%}div.odiofy-widget-feed-section-arrow-prev span::after{left:0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0}div.odiofy-widget-feed-section-arrow-next span::before{right:0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);-webkit-transform-origin:100% 100%;-ms-transform-origin:100% 100%;transform-origin:100% 100%}div.odiofy-widget-feed-section-arrow-next span::after{right:0;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:100% 0;-ms-transform-origin:100% 0;transform-origin:100% 0}div.odiofy-widget-feed-section-arrow-prev{left:2px}div.odiofy-widget-feed-section-arrow-next{right:2px}div.odiofy-widget-feed-section-vertical .odiofy-widget-feed-section-scrollbar{top:10px;left:auto;width:3px;height:auto}div.odiofy-widget-feed-section-vertical .odiofy-widget-feed-section-arrow-prev{top:2px;left:50%;margin-top:0;margin-left:-21px;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}div.odiofy-widget-feed-section-vertical .odiofy-widget-feed-section-arrow-prev:active{-webkit-transform:rotate(90deg) scale(.9);-ms-transform:rotate(90deg) scale(.9);transform:rotate(90deg) scale(.9)}div.odiofy-widget-feed-section-vertical .odiofy-widget-feed-section-arrow-prev.swiper-button-disabled{opacity:0;-webkit-transform:rotate(90deg) scale(.2);-ms-transform:rotate(90deg) scale(.2);transform:rotate(90deg) scale(.2)}div.odiofy-widget-feed-section-vertical .odiofy-widget-feed-section-arrow-next{top:auto;right:auto;bottom:2px;left:50%;margin-top:0;margin-left:-21px;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}div.odiofy-widget-feed-section-vertical .odiofy-widget-feed-section-arrow-next:active{-webkit-transform:rotate(90deg) scale(.9);-ms-transform:rotate(90deg) scale(.9);transform:rotate(90deg) scale(.9)}div.odiofy-widget-feed-section-vertical .odiofy-widget-feed-section-arrow-next.swiper-button-disabled{opacity:0;-webkit-transform:rotate(90deg) scale(.2);-ms-transform:rotate(90deg) scale(.2);transform:rotate(90deg) scale(.2)}div.odiofy-widget-feed-section-vertical .odiofy-widget-feed-section-arrow-next.swiper-button-disabled.odiofy-widget-feed-section-arrow-has-next{opacity:1;-webkit-transform:rotate(90deg) scale(1);-ms-transform:rotate(90deg) scale(1);transform:rotate(90deg) scale(1)}div.odiofy-widget-feed-section-loader{position:absolute;visibility:hidden;z-index:4;top:0;right:0;bottom:0;left:0;opacity:0;background:rgba(0,0,0,.6);-webkit-transition:all .4s ease;-o-transition:all .4s ease;transition:all .4s ease}div.odiofy-widget-feed-section-loader.odiofy-visible{visibility:visible;opacity:1}.odiofy-widget-feed .swiper-wrapper{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}.odiofy-widget-feed .swiper-container,.odiofy-widget-feed .swiper-slide{-webkit-box-sizing:border-box;box-sizing:border-box}.odiofy-widget-feed .swiper-container.swiper-slide-visible,.odiofy-widget-feed .swiper-slide.swiper-slide-visible{z-index:4}@-webkit-keyframes odiofy-arrow-orbit-loader{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes odiofy-arrow-orbit-loader{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.odiofy-widget-video{position:relative;overflow:hidden;float:left;-webkit-backface-visibility:hidden;backface-visibility:hidden}.odiofy-widget-video-player{display:block;position:absolute;z-index:4}.odiofy-widget-video-preview{display:block!important;position:relative;z-index:1;min-height:1px}.odiofy-widget-video-preview-thumbnail{display:block;overflow:hidden}.odiofy-widget-video-preview-thumbnail img{position:relative;top:50%;width:100%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}span.odiofy-widget-video-preview-marker{display:block;position:absolute;padding:5px 7px 6px;border-radius:2px;background:#fff;line-height:1;font-size:12px;-webkit-transition:all .3s ease;-o-transition:all .3s ease;transition:all .3s ease}span.odiofy-widget-video-preview-marker-hd{top:4px;left:4px}span.odiofy-widget-video-preview-marker-duration{right:4px;bottom:4px}.odiofy-mw-130 span.odiofy-widget-video-preview-marker{display:none}span.odiofy-widget-video-preview-play{display:block;position:absolute;z-index:3;top:50%;left:50%;width:0;height:0;border-style:solid;border-width:18px 0 18px 28px;border-color:transparent transparent transparent rgba(255,255,255,.5);-webkit-transform:translateX(-50%) translateY(-50%);-ms-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);-webkit-transition:all .2s ease;-o-transition:all .2s ease;transition:all .2s ease}.odiofy-widget-video:hover span.odiofy-widget-video-preview-play{border-color:transparent transparent transparent rgba(255,255,255,.8)}.odiofy-mw-180 span.odiofy-widget-video-preview-play{border-width:15px 0 15px 20px}.odiofy-widget-video-info{position:relative;z-index:3;-webkit-box-sizing:border-box;box-sizing:border-box}div.odiofy-widget-video-info{padding:16px 0 14px}.odiofy-widget-video-info-title{display:inline-block;overflow:hidden;white-space:nowrap;line-height:18px;font-weight:700;font-size:14px}div.odiofy-widget-video-info-passed-time{margin-top:4px;line-height:16px;font-size:12px}div.odiofy-widget-video-info-caption{display:-webkit-box!important;overflow:hidden;margin-top:8px;word-wrap:break-word;-o-text-overflow:ellipsis;text-overflow:ellipsis;line-height:1.4;font-size:13px;-webkit-line-clamp:2;-webkit-box-orient:vertical;height:36.4px}.odiofy-widget-video-info-properties{height:14px;overflow:hidden}div.odiofy-widget-video-info-properties{margin-top:8px}div.odiofy-widget-video-info-properties-inner{font-size:12px}.odiofy-widget-video-info-properties-item{display:inline-block}.odiofy-widget-video-info-properties-item-divider{margin:0 2px}.odiofy-widget-video-info-properties-item:first-child .odiofy-widget-video-info-properties-item-divider{display:none}div.odiofy-widget-video-overlay{position:absolute;display:none;visibility:hidden;z-index:2;top:0;right:0;bottom:0;left:0;opacity:0;-webkit-transition:all .35s ease;-o-transition:all .35s ease;transition:all .35s ease;background:rgba(255,255,255,.95)}.odiofy-widget-video-cinema{-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-perspective:900px;perspective:900px}.odiofy-widget-video-cinema *{-webkit-backface-visibility:hidden;backface-visibility:hidden}.odiofy-widget-video-cinema div.odiofy-widget-video-overlay{display:block}.odiofy-widget-video-cinema .odiofy-widget-video-preview{-webkit-transition:all .3s ease;-o-transition:all .3s ease;transition:all .3s ease}.odiofy-widget-video-cinema .odiofy-widget-video-info{visibility:hidden;position:absolute;top:0;right:0;bottom:0;left:0;padding:12px;-webkit-transition:all .3s ease;-o-transition:all .3s ease;transition:all .3s ease;cursor:pointer;opacity:0}.odiofy-widget-video-cinema:hover .odiofy-widget-video-info{visibility:visible;opacity:1}.odiofy-widget-video-cinema:hover .odiofy-widget-video-overlay{visibility:visible;opacity:1;-webkit-transition-duration:.3s;-o-transition-duration:.3s;transition-duration:.3s;-webkit-transition-delay:0s;-o-transition-delay:0s;transition-delay:0s}.odiofy-widget-video-cinema:hover .odiofy-widget-video-preview{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05)}.odiofy-widget-video-horizontal{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;cursor:pointer}.odiofy-widget-video-horizontal .odiofy-widget-video-preview{width:50%;max-width:256px}.odiofy-widget-video-horizontal .odiofy-widget-video-info{-webkit-box-flex:1;-ms-flex:1;flex:1;width:50%;padding:0 12px 14px;height:100%}.odiofy-widget-video-horizontal.odiofy-mw-370{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.odiofy-widget-video-horizontal.odiofy-mw-370 .odiofy-widget-video-preview{width:auto;max-width:none}.odiofy-widget-video-horizontal.odiofy-mw-370 .odiofy-widget-video-info{width:auto;height:auto;padding:16px 0 14px}.odiofy-widget-video-classic{cursor:pointer}.odiofy-widget-video-classic .odiofy-widget-video-info{padding:16px 0 14px}.odiofy-error{display:none!important;position:absolute;top:0;right:0;bottom:0;left:0}.odiofy-error.odiofy-visible{display:block!important}.odiofy-error-overlay{position:absolute;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.6)}div.odiofy-error-content{position:absolute;top:50%;left:50%;padding:22px;-webkit-transform:translateX(-50%) translateY(-50%);-ms-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);background:#fff;font-size:12px;color:#232323}div.odiofy-error-content-title{font-weight:700;line-height:1.6}.odiofy.odiofy-popup{position:fixed;visibility:hidden;z-index:9999;top:0;right:0;bottom:0;left:0}.odiofy-popup a{color:#1a89de;-webkit-transition:all .2s ease;-o-transition:all .2s ease;transition:all .2s ease}.odiofy-popup a:hover{color:#2fa5ff}.odiofy-popup.odiofy-popup-show{visibility:visible}.odiofy-popup .odiofy-popup-overlay{position:absolute;visibility:hidden;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.7);-webkit-transition:.25s ease;-o-transition:.25s ease;transition:.25s ease}.odiofy-popup-show.odiofy-popup .odiofy-popup-overlay{visibility:visible;opacity:1}.odiofy-popup .odiofy-popup-wrapper{position:absolute;overflow-x:hidden;overflow-y:scroll;-webkit-overflow-scrolling:touch;max-height:100%;top:0;right:0;bottom:0;left:0;padding:50px 0}@media only screen and (max-width:854px){.odiofy-popup .odiofy-popup-wrapper{padding-bottom:0}}.odiofy-popup .odiofy-popup-loader{position:absolute;padding-bottom:56.25%;width:100%;height:0;background:#000}.odiofy-popup .odiofy-popup-loader .odiofy-spinner{visibility:hidden;-webkit-transition:all .4s ease;-o-transition:all .4s ease;transition:all .4s ease}.odiofy-popup-loading.odiofy-popup .odiofy-popup-loader .odiofy-spinner{visibility:visible}.odiofy-popup .odiofy-popup-inner{position:relative;visibility:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;left:50%;width:854px;background:#fff;opacity:0;-webkit-transform:translateX(-50%) scale(.9);-ms-transform:translateX(-50%) scale(.9);transform:translateX(-50%) scale(.9);-webkit-transform-origin:center 0;-ms-transform-origin:center 0;transform-origin:center 0;-webkit-transition:all .25s ease;-o-transition:all .25s ease;transition:all .25s ease}@media only screen and (max-width:854px){.odiofy-popup .odiofy-popup-inner{width:100%}}.odiofy-popup-show.odiofy-popup .odiofy-popup-inner{visibility:visible;opacity:1;-webkit-transform:translateX(-50%) scale(1);-ms-transform:translateX(-50%) scale(1);transform:translateX(-50%) scale(1);-webkit-transition:all .35s ease;-o-transition:all .35s ease;transition:all .35s ease}.odiofy-popup .odiofy-popup-control-close{position:absolute;z-index:12;width:36px;height:36px;top:-12px;right:-36px;cursor:pointer;-webkit-transition:all .3s ease;-o-transition:all .3s ease;transition:all .3s ease}.odiofy-popup .odiofy-popup-control-close::after,.odiofy-popup .odiofy-popup-control-close::before{display:block;position:absolute;width:20px;height:2px;top:50%;left:50%;margin:-1px 0 0 -10px;border-radius:10px;background:#a0a0a0;-webkit-transition:all .3s ease;-o-transition:all .3s ease;transition:all .3s ease;-webkit-transform-origin:50% 50%;-ms-transform-origin:50% 50%;transform-origin:50% 50%;content:''}.odiofy-popup .odiofy-popup-control-close::before{-webkit-transform:rotate3d(0,0,1,45deg);transform:rotate3d(0,0,1,45deg)}.odiofy-popup .odiofy-popup-control-close::after{-webkit-transform:rotate3d(0,0,1,-45deg);transform:rotate3d(0,0,1,-45deg)}.odiofy-popup .odiofy-popup-control-close:hover::after,.odiofy-popup .odiofy-popup-control-close:hover::before{background:#dcdcdc}.odiofy-popup .odiofy-popup-control-close:active{-webkit-transform:scale(.8);-ms-transform:scale(.8);transform:scale(.8)}@media only screen and (max-width:936px){.odiofy-popup .odiofy-popup-control-close{top:-43px;right:0}}@media only screen and (max-width:768px){.odiofy-popup .odiofy-popup-inner{-webkit-box-shadow:0 -3px 35px rgba(0,0,0,.4);box-shadow:0 -3px 35px rgba(0,0,0,.4)}.odiofy-popup .odiofy-popup-control-close{top:-50px;right:0;left:0;width:auto;height:50px;background:rgba(255,255,255,0)}.odiofy-popup .odiofy-popup-control-close::after,.odiofy-popup .odiofy-popup-control-close::before{background:#dcdcdc}}.odiofy-popup .odiofy-popup-control-arrow{position:absolute;z-index:10;top:20px;bottom:20px;width:100px;cursor:pointer}.odiofy-popup .odiofy-popup-control-arrow-next span,.odiofy-popup .odiofy-popup-control-arrow-previous span{display:block;position:absolute;width:43px;height:63px;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);-webkit-transition:all .3s ease;-o-transition:all .3s ease;transition:all .3s ease}.odiofy-popup .odiofy-popup-control-arrow-next span::after,.odiofy-popup .odiofy-popup-control-arrow-next span::before,.odiofy-popup .odiofy-popup-control-arrow-previous span::after,.odiofy-popup .odiofy-popup-control-arrow-previous span::before{display:block;position:absolute;width:43px;height:2px;top:20px;border-radius:10px 0 0 10px;-webkit-transition:all .3s ease;-o-transition:all .3s ease;transition:all .3s ease;content:'';background:#656565}.odiofy-popup .odiofy-popup-control-arrow-previous{left:0}.odiofy-popup .odiofy-popup-control-arrow-previous span{left:24px}.odiofy-popup .odiofy-popup-control-arrow-previous span::before{-webkit-transform-origin:0 110%;-ms-transform-origin:0 110%;transform-origin:0 110%;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}.odiofy-popup .odiofy-popup-control-arrow-previous span::after{-webkit-transform-origin:0 -10%;-ms-transform-origin:0 -10%;transform-origin:0 -10%;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.odiofy-popup .odiofy-popup-control-arrow-next{right:0}.odiofy-popup .odiofy-popup-control-arrow-next span{right:24px}.odiofy-popup .odiofy-popup-control-arrow-next span::before{-webkit-transform-origin:100% 110%;-ms-transform-origin:100% 110%;transform-origin:100% 110%;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.odiofy-popup .odiofy-popup-control-arrow-next span::after{-webkit-transform-origin:100% -10%;-ms-transform-origin:100% -10%;transform-origin:100% -10%;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}.odiofy-popup .odiofy-popup-video{-webkit-box-sizing:border-box;box-sizing:border-box}.odiofy-popup .odiofy-popup-video-player{position:relative;padding-bottom:56.25%;height:0}.odiofy-popup .odiofy-popup-video-player iframe{display:block;position:absolute;top:0;left:0;width:100%;height:100%}.odiofy-popup .odiofy-popup-video-info,.odiofy-popup .odiofy-popup-video-rating{display:-webkit-box;display:-ms-flexbox;-webkit-box-orient:horizontal;-webkit-box-direction:normal}.odiofy-popup .odiofy-popup-video-content{padding:20px}.odiofy-popup .odiofy-popup-video-content-ads{text-align:center}.odiofy-popup .odiofy-popup-video-content-ads .adsbygoogle{margin:10px 0}@media only screen and (max-width:768px){.odiofy-popup .odiofy-popup-video-content{padding:15px 20px}}.odiofy-popup .odiofy-popup-video-title{margin:10px 0 16px;line-height:28px;font-size:20px;color:#111}.odiofy-popup .odiofy-popup-video-info{display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.odiofy-popup .odiofy-popup-video-views{-webkit-box-flex:1;-ms-flex:1;flex:1;font-size:14px;line-height:22px;color:rgba(17,17,17,.7)}.odiofy-popup .odiofy-popup-video-rating-dislikes span,.odiofy-popup .odiofy-popup-video-rating-likes span,.odiofy-popup .odiofy-popup-video-share{line-height:20px;font-size:12px;color:rgba(17,17,17,.5)}@media only screen and (max-width:640px){.odiofy-popup .odiofy-popup-video-views{-webkit-box-flex:1;-ms-flex:1 100%;flex:1 100%}}.odiofy-popup .odiofy-popup-video-rating{position:relative;display:flex;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:120px}.odiofy-popup .odiofy-popup-video-rating-dislikes,.odiofy-popup .odiofy-popup-video-rating-likes{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:10px 0}.odiofy-popup .odiofy-popup-video-rating-dislikes-icon,.odiofy-popup .odiofy-popup-video-rating-likes-icon{margin-right:8px;width:12px;height:11px;fill:rgba(17,17,17,.5)}.odiofy-popup .odiofy-popup-video-rating-ratio{position:absolute;bottom:0;width:100%;height:2px;background:#cfcfcf}.odiofy-popup .odiofy-popup-video-rating-ratio span{display:block;height:100%;background:#2fa5ff}@media only screen and (max-width:640px){.odiofy-popup .odiofy-popup-video-rating-ratio::before{content:'';display:block;position:absolute;right:0;left:0;height:1px;background:rgba(0,0,0,.1)}}.odiofy-popup .odiofy-popup-video-share{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:10px;margin-left:28px;font-weight:700;text-transform:uppercase;fill:rgba(17,17,17,.5);cursor:pointer}.odiofy-popup .odiofy-popup-video-share:last-child{margin-left:auto}.odiofy-popup .odiofy-popup-video-share::hover{color:rgba(17,17,17,.9);fill:rgba(17,17,17,.9)}.odiofy-popup .odiofy-popup-video-share-icon{margin-right:8px;width:14px;height:12px}.odiofy-popup .odiofy-popup-video-share-popover{opacity:0;visibility:hidden}.odiofy-popup .odiofy-popup-video-share-popover-content{position:absolute;bottom:100%;right:0;padding-bottom:11px;width:192px;z-index:6}.odiofy-popup .odiofy-popup-video-share-popover-content-inner{position:relative;background:#2f353a;border-radius:4px;-webkit-box-shadow:0 4px 16px rgba(0,0,0,.2);box-shadow:0 4px 16px rgba(0,0,0,.2)}.odiofy-popup .odiofy-popup-video-share-popover-content-inner::before{content:'';position:absolute;display:block;bottom:-5px;right:20px;width:10px;height:10px;-webkit-transform:rotateZ(-45deg);-ms-transform:rotate(-45deg);transform:rotateZ(-45deg);background:#2f353a}.odiofy-popup .odiofy-popup-video-share-popover-content-item{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#17191a;font-size:13px;font-weight:400;line-height:1;border-top:1px solid rgba(255,255,255,.2);padding:12px 0;cursor:pointer;-webkit-transition:all .2s ease;-o-transition:all .2s ease;transition:all .2s ease;position:relative;text-align:left}.odiofy-popup .odiofy-popup-video-share-popover-content-item:first-child{border:none}.odiofy-popup .odiofy-popup-video-share-popover-content-item:hover{background:#42474c;border-radius:4px}.odiofy-popup .odiofy-popup-video-share-popover-content-item-icon{height:100%;width:12px;float:left;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;margin-left:12px}.odiofy-popup .odiofy-popup-video-share-popover-content-item-icon img{width:100%;height:100%}.odiofy-popup .odiofy-popup-video-share-popover-content-item-title{display:inline-block;text-transform:none;margin-left:12px;font-size:13px;color:#fff}.odiofy-popup .odiofy-popup-video-share-popover-open{opacity:1;visibility:visible}.odiofy-popup .odiofy-popup-video-share-popover-left .odiofy-popup-video-share-popover-content-inner:before{right:40px;left:auto;margin-left:auto}.odiofy-popup .odiofy-popup-video-share-popover-bottom .odiofy-popup-video-share-popover-content{top:100%;padding-top:11px}.odiofy-popup .odiofy-popup-video-share-popover-bottom .odiofy-popup-video-share-popover-content-inner:before{top:-5px}.odiofy-popup .odiofy-popup-video-meta{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;margin-top:-1px;padding:20px 0}.odiofy-popup .odiofy-popup-video-meta::after,.odiofy-popup .odiofy-popup-video-meta::before{content:'';position:absolute;display:block;left:0;right:0;height:1px;background:#111;opacity:.1}.odiofy-popup .odiofy-popup-video-meta::before{top:0}.odiofy-popup .odiofy-popup-video-meta::after{bottom:0}@media only screen and (max-width:640px){.odiofy-popup .odiofy-popup-video-meta{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.odiofy-popup .odiofy-popup-video-meta-channel-logo{margin-bottom:12px}}.odiofy-popup .odiofy-popup-video-meta-channel-logo{display:block;-webkit-box-flex:1;-ms-flex:auto 0 0px;flex:auto 0 0;margin-right:16px;width:44px;height:44px;background:#fff;border-radius:50%;overflow:hidden}.odiofy-popup .odiofy-popup-video-meta-channel-logo img{width:44px;height:44px}.odiofy-popup .odiofy-popup-video-meta-channel-name{display:inline-block;margin-bottom:4px;line-height:18px;text-decoration:none;font-weight:700;font-size:14px;color:#111}.odiofy-popup .odiofy-popup-video-meta-channel-name:hover{text-decoration:underline}.odiofy-popup .odiofy-popup-video-meta-date{margin-bottom:12px;line-height:16px;font-size:12px;color:rgba(17,17,17,.7)}.odiofy-popup .odiofy-popup-video-meta-text{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.odiofy-popup .odiofy-popup-video-meta-description{overflow:hidden;max-height:40px;line-height:20px;font-size:14px;color:#111}.odiofy-popup .odiofy-popup-video-meta-description-more{-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;cursor:pointer;padding:8px 0;margin:6px 0 -14px;text-transform:uppercase;line-height:16px;font-weight:700;font-size:12px;-webkit-transition:.2s ease;-o-transition:.2s ease;transition:.2s ease;color:rgba(17,17,17,.5)}.odiofy-popup .odiofy-popup-video-meta-description-more:hover{color:rgba(17,17,17,.7)}.odiofy-popup .odiofy-popup-video-meta-description-show-full{overflow:auto;max-height:none}@media only screen and (max-width:640px){.odiofy-popup .odiofy-popup-video-meta-subscribe-container{margin-top:32px}}.odiofy-popup .odiofy-popup-video-comments{padding:8px 0}.odiofy-popup .odiofy-popup-video-comments-item{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;padding:12px 0}.odiofy-popup .odiofy-popup-video-comments-item:last-child{margin-bottom:0}.odiofy-popup .odiofy-popup-video-comments-item-profile-image{display:block;position:relative;-webkit-box-flex:1;-ms-flex:auto 0 0px;flex:auto 0 0;margin-right:12px;width:44px;height:44px;background:#fff;border-radius:50%;overflow:hidden;-webkit-box-shadow:inset 0 0 0 1px rgba(0,0,0,.1);box-shadow:inset 0 0 0 1px rgba(0,0,0,.1)}.odiofy-popup .odiofy-popup-video-comments-item-profile-image img{-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:50%;width:100%;padding:1px;-webkit-transition:all .2s ease;-o-transition:all .2s ease;transition:all .2s ease;-webkit-backface-visibility:hidden;backface-visibility:hidden}.odiofy-popup .odiofy-popup-video-comments-item-profile-image:hover img{opacity:.9}.odiofy-popup .odiofy-popup-video-comments-item-name{display:inline-block;margin:0 8px 2px 0;line-height:16px;font-size:13px;font-weight:700}.odiofy-popup .odiofy-popup-video-comments-item-name a{text-decoration:none;color:#111}.odiofy-popup .odiofy-popup-video-comments-item-name a:hover{text-decoration:underline;color:#2fa5ff}.odiofy-popup .odiofy-popup-video-comments-item-passed-time{display:inline-block;font-size:12px;color:rgba(17,17,17,.7)}.odiofy-popup .odiofy-popup-video-comments-item-likes{margin-top:2px;font-size:12px;line-height:16px;color:rgba(17,17,17,.5)}.odiofy-popup .odiofy-popup-video-comments-item-likes-icon{margin-right:4px;width:12px;height:11px;fill:rgba(17,17,17,.5)}.odiofy-popup .odiofy-popup-video-comments-item-text{line-height:21px;font-size:14px;color:#222;margin-top:1px}";
    }, {}],
    3: [function(e, t, i) {
        "use strict";
        t.exports = function(t, i) {
            ! function n(t, i, o) {
                function a(s, l) {
                    if (!i[s]) {
                        if (!t[s]) {
                            var p = "function" == typeof e && e;
                            if (!l && p) return p(s, !0);
                            if (r) return r(s, !0);
                            throw new Error("Cannot find module '" + s + "'")
                        }
                        var d = i[s] = {
                            exports: {}
                        };
                        t[s][0].call(d.exports, function(e) {
                            return a(t[s][1][e] || e)
                        }, d, d.exports, n, t, i, o)
                    }
                    return i[s].exports
                }
                for (var r = "function" == typeof e && e, s = 0; s < o.length; s++) a(o[s]);
                return a
            }({
                1: [function(e, t, i) {
                    (function(e) {
                        var i;
                        if (e.crypto && crypto.getRandomValues) {
                            var n = new Uint8Array(16);
                            i = function() {
                                return crypto.getRandomValues(n), n
                            }
                        }
                        if (!i) {
                            var o = new Array(16);
                            i = function() {
                                for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), o[t] = e >>> ((3 & t) << 3) & 255;
                                return o
                            }
                        }
                        t.exports = i
                    }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                }, {}],
                2: [function(e, t, i) {
                    function n(e, t) {
                        var i = t || 0,
                            n = r;
                        return n[e[i++]] + n[e[i++]] + n[e[i++]] + n[e[i++]] + "-" + n[e[i++]] + n[e[i++]] + "-" + n[e[i++]] + n[e[i++]] + "-" + n[e[i++]] + n[e[i++]] + "-" + n[e[i++]] + n[e[i++]] + n[e[i++]] + n[e[i++]] + n[e[i++]] + n[e[i++]]
                    }

                    function o(e, t, i) {
                        var o = t && i || 0;
                        "string" == typeof e && (t = "binary" == e ? new Array(16) : null, e = null);
                        var r = (e = e || {}).random || (e.rng || a)();
                        if (r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, t)
                            for (var s = 0; s < 16; s++) t[o + s] = r[s];
                        return t || n(r)
                    }
                    for (var a = e("./rng"), r = [], s = {}, l = 0; l < 256; l++) r[l] = (l + 256).toString(16).substr(1), s[r[l]] = l;
                    var p = a(),
                        d = [1 | p[0], p[1], p[2], p[3], p[4], p[5]],
                        c = 16383 & (p[6] << 8 | p[7]),
                        u = 0,
                        m = 0,
                        h = o;
                    h.v1 = function(e, t, i) {
                        var o = t && i || 0,
                            a = t || [],
                            r = void 0 !== (e = e || {}).clockseq ? e.clockseq : c,
                            s = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
                            l = void 0 !== e.nsecs ? e.nsecs : m + 1,
                            p = s - u + (l - m) / 1e4;
                        if (p < 0 && void 0 === e.clockseq && (r = r + 1 & 16383), (p < 0 || u < s) && void 0 === e.nsecs && (l = 0), 1e4 <= l) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
                        u = s, c = r;
                        var h = (1e4 * (268435455 & (s += 122192928e5)) + (m = l)) % 4294967296;
                        a[o++] = h >>> 24 & 255, a[o++] = h >>> 16 & 255, a[o++] = h >>> 8 & 255, a[o++] = 255 & h;
                        var g = s / 4294967296 * 1e4 & 268435455;
                        a[o++] = g >>> 8 & 255, a[o++] = 255 & g, a[o++] = g >>> 24 & 15 | 16, a[o++] = g >>> 16 & 255, a[o++] = r >>> 8 | 128, a[o++] = 255 & r;
                        for (var f = e.node || d, v = 0; v < 6; v++) a[o + v] = f[v];
                        return t || n(a)
                    }, h.v4 = o, h.parse = function(e, t, i) {
                        var n = t && i || 0,
                            o = 0;
                        for (t = t || [], e.toLowerCase().replace(/[0-9a-f]{2}/g, function(e) {
                                o < 16 && (t[n + o++] = s[e])
                            }); o < 16;) t[n + o++] = 0;
                        return t
                    }, h.unparse = n, t.exports = h
                }, {
                    "./rng": 1
                }],
                3: [function(e, t, i) {
                    var n = e("./jquery"),
                        o = function() {
                            this.components = {}
                        };
                    n.extend(o, {
                        id: "Application"
                    }), o.prototype = function() {}, n.extend(o.prototype, {
                        constructor: o,
                        components: null,
                        component: function(e) {
                            if (this.hasComponent(e)) return this.components[e]
                        },
                        registerComponent: function(e, t) {
                            if (!this.hasComponent(t)) return e.register(this), t = t || e.constructor.getId(), this.components[t] = e
                        },
                        hasComponent: function(e) {
                            return !!this.components[e]
                        }
                    }), t.exports = o
                }, {
                    "./jquery": 7
                }],
                4: [function(e, t, i) {
                    var n = e("./jquery"),
                        o = e("./utils"),
                        a = function() {};
                    n.extend(a, {
                        id: "Cl"
                    }), a.prototype = function() {}, n.extend(a.prototype, {
                        constructor: a,
                        getParent: function(e) {
                            return this.constructor.inheritance[e]
                        },
                        set: function(e, t) {
                            return o.setProperty(this, e, t)
                        },
                        get: function(e, t) {
                            return o.getProperty(this, e, t)
                        }
                    }), t.exports = a
                }, {
                    "./jquery": 7,
                    "./utils": 15
                }],
                5: [function(e, t, i) {
                    var n = e("./jquery"),
                        o = function() {};
                    n.extend(o, {
                        id: "Component",
                        getId: function() {
                            return this.id.substr(0, 1).toLowerCase() + this.id.substr(1)
                        }
                    }), o.prototype = function() {}, n.extend(o.prototype, {
                        constructor: o,
                        inject: function() {
                            var e = this;
                            e.constructor.dependencies && n.each(e.constructor.dependencies, function(t, i) {
                                e[i] = e.app.component(i)
                            })
                        },
                        register: function(e) {
                            this.app = e, this.inject()
                        },
                        trigger: function() {
                            this.$e.trigger.apply(this.$e, arguments)
                        },
                        on: function() {
                            this.$e.on.apply(this.$e, arguments)
                        }
                    }), t.exports = o
                }, {
                    "./jquery": 7
                }],
                6: [function(e, t, i) {
                    t.exports = function(e, t, i, n) {
                        e = (e + "").replace(/[^0-9+\-Ee.]/g, "");
                        var o, a, r, s = isFinite(+e) ? +e : 0,
                            l = isFinite(+t) ? Math.abs(t) : 0,
                            p = void 0 === n ? "," : n,
                            d = void 0 === i ? "." : i,
                            c = "";
                        return 3 < (c = (l ? (o = s, a = l, r = Math.pow(10, a), "" + (Math.round(o * r) / r).toFixed(a)) : "" + Math.round(s)).split("."))[0].length && (c[0] = c[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, p)), (c[1] || "").length < l && (c[1] = c[1] || "", c[1] += new Array(l - c[1].length + 1).join("0")), c.join(d)
                    }
                }, {}],
                7: [function(e, t, i) {
                    t.exports = window.jQuery
                }, {}],
                8: [function(e, t, i) {
                    var n = e("./../../jquery"),
                        o = e("./../../olivie");
                    t.exports = o.component("Colorizer", function(e, t, i, n) {
                        var o = this;
                        o.schemes = e, o.schemeId = t, o.tplId = n, o.overwrites = i || {}, o.setBaseScheme(t)
                    }, {
                        dependencies: ["renderer"]
                    }, {
                        schemes: null,
                        schemeId: null,
                        baseScheme: null,
                        scheme: null,
                        overwrites: null,
                        $element: null,
                        setBaseScheme: function(e) {
                            this.baseScheme = this.schemes[this.schemeId] || {}
                        },
                        applyScheme: function() {
                            var e = this;
                            e.$element || (e.$element = n('<style type="text/css"></style>'), e.app.$element.before(e.$element)), e.overwrites = o.utils.filterNulls(e.overwrites), e.scheme = n.extend(!0, {}, e.baseScheme, e.overwrites);
                            var t = {
                                scheme: e.scheme,
                                id: e.app.getId()
                            };
                            e.$element.html(e.renderer.render(e.tplId, t))
                        },
                        run: function() {
                            this.applyScheme(), this.$element.insertBefore(this.app.$element)
                        }
                    })
                }, {
                    "./../../jquery": 7,
                    "./../../olivie": 14
                }],
                9: [function(e, t, i) {
                    var n = e("./../../jquery"),
                        o = e("./../../olivie");
                    t.exports = o.component("I18n", function(e, t) {
                        var i = this;
                        i.lang = t, i.dictionary = e, i.langDictionary = i.dictionary[i.lang] || i.dictionary[i.constructor.DEFAULT_LANG]
                    }, {
                        DEFAULT_LANG: "en"
                    }, {
                        lang: null,
                        dictionary: null,
                        langDictionary: null,
                        lexemes: [{
                            id: "interpolation",
                            regex: /\{\{([a-zA-Z]+)\}\}/,
                            func: function(e, t) {
                                return t[e[1]] || "[[Unknown variable " + e[1] + "]]"
                            }
                        }, {
                            id: "modified_interpolation",
                            regex: /\{\{([a-zA-Z]+)\s*\|\s*([a-zA-Z]+)\(([^)]*)\)\}\}/,
                            func: function(e, t, i) {
                                var n = e[1],
                                    o = e[2],
                                    a = e[3];
                                if (!i.modifiers[o]) return '[[Unknown modifier "' + o + '"]]';
                                var r = a ? a.split(/\s*,\s*/) : [];
                                return i.modifiers[o].apply(t[n], r)
                            }
                        }],
                        modifiers: {},
                        hasTranslation: function(e) {
                            return !!this.langDictionary[e]
                        },
                        getTranslation: function(e) {
                            return this.langDictionary[e]
                        },
                        parse: function(e, t) {
                            var i = this;
                            return n.each(i.lexemes, function(n, o) {
                                e = e.replace(o.regex, function() {
                                    return o.func.call(void 0, arguments, t, i)
                                })
                            }), e
                        },
                        t: function(e, t) {
                            return t = t || {}, this.parse(this.getTranslation(e) || e, t)
                        }
                    })
                }, {
                    "./../../jquery": 7,
                    "./../../olivie": 14
                }],
                10: [function(e, t, i) {
                    var n = e("./../../jquery"),
                        o = e("./../../olivie");
                    t.exports = o.component("Renderer", function(e) {
                        this.views = e
                    }, {}, {
                        views: null,
                        getTemplate: function(e) {
                            var t = o.utils.getProperty(this.views, e);
                            if ("function" === n.type(t)) return t
                        },
                        render: function(e, t) {
                            return this.getTemplate(e)(t)
                        }
                    })
                }, {
                    "./../../jquery": 7,
                    "./../../olivie": 14
                }],
                11: [function(e, t, i) {
                    var n = e("./../../jquery"),
                        o = e("./../../olivie");
                    t.exports = o["class"]("Cache", [], function(e, t) {
                        this.client = t, e = e.substr(0, 1).toUpperCase() + e.substr(1), this.cacheBaseId = "OlivieClientCache" + e
                    }, {}, {
                        indexedDB: window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB,
                        cacheStoreId: null,
                        db: null,
                        isSupported: function() {
                            return !!this.indexedDB
                        },
                        isReady: function() {
                            return !!this.db
                        },
                        connect: function(e) {
                            var t, i = this;
                            if (e = e || n.Deferred(), i.isSupported()) try {
                                (t = i.indexedDB.open(i.cacheBaseId, 1)).onsuccess = function() {
                                    i.db = t.result, e.resolve()
                                }, t.onerror = function() {
                                    e.reject()
                                }, t.onupgradeneeded = function(t) {
                                    t.currentTarget.result.createObjectStore("Requests", {
                                        keyPath: "url"
                                    }).createIndex("url", "url", {
                                        unique: !0
                                    }), i.connect(e)
                                }
                            } catch (t) {
                                e.reject()
                            } else e.reject();
                            return e.promise()
                        },
                        save: function(e, t) {
                            if (this.isReady()) {
                                var i = this.db.transaction("Requests", "readwrite"),
                                    n = {
                                        url: e,
                                        result: t,
                                        date: Math.floor(Date.now() / 1e3)
                                    };
                                i.objectStore("Requests").put(n)
                            }
                        },
                        getSaved: function(e, t, i) {
                            var o = this;
                            i = i || n.Deferred();
                            try {
                                var a, r;
                                o.isReady() && t ? (a = o.db.transaction(["Requests"], "readonly"), (r = a.objectStore("Requests").get(e)).onsuccess = function() {
                                    var n = r.result;
                                    n && n.date + t > Math.floor(Date.now() / 1e3) ? i.resolve(n.result) : (o["delete"](e), i.reject())
                                }, r.onerror = function() {
                                    i.reject()
                                }) : i.reject()
                            } catch (a) {
                                i.reject()
                            }
                            return i.promise()
                        },
                        "delete": function(e, t) {
                            var i;
                            return t = t || n.Deferred(), this.isReady() ? ((i = this.db.transaction(["Requests"], "readwrite").objectStore("Requests")["delete"](e)).onsuccess = function() {
                                t.resolve()
                            }, i.onerror = function() {
                                t.reject()
                            }) : t.reject(), t.promise()
                        }
                    })
                }, {
                    "./../../jquery": 7,
                    "./../../olivie": 14
                }],
                12: [function(e, t, i) {
                    var n = e("./../../jquery"),
                        o = e("./../../olivie"),
                        a = e("./cache"),
                        r = e("./ga");
                    t.exports = o.component("Client", function(e, t, i, o) {
                        var s = this;
                        s.requestModifiers = [], s.responseModifiers = [], t && n.isPlainObject(t) && s.attachRequestModifier(function(e) {
                            e.data = n.extend(!1, {}, e.data, t)
                        }), "https://www.googleapis.com/youtube/v3" !== e ? s.attachRequestModifier(function(t) {
                            t.url = e + "?q=" + encodeURIComponent(t.url)
                        }) : s.attachRequestModifier(function(t) {
                            t.url = e + t.url
                        }), s.cache = new a(i, s), s.ga = new r("UA-33920597-29"), s.defaultCacheTime = parseInt(o, 10)
                    }, {
                        parseQuery: function(e) {
                            var t = e.match(/\?([^#]+)/),
                                i = {};
                            return t && t[1] && t[1].split("&").map(function(e) {
                                var t = e.split("=");
                                i[t[0]] = t[1] || ""
                            }), i
                        }
                    }, {
                        cache: null,
                        requestModifiers: null,
                        responseModifiers: null,
                        defaultCacheTime: null,
                        run: function() {
                            var e = n.Deferred(),
                                t = this.cache.connect();
                            return t.done(function() {
                                e.resolve()
                            }), t.fail(function() {
                                e.resolve(-1)
                            }), e.promise()
                        },
                        attachRequestModifier: function(e) {
                            return "function" === n.type(e) && !!this.requestModifiers.push(e)
                        },
                        attachResponseModifier: function(e) {
                            return "function" === n.type(e) && !!this.responseModifiers.push(e)
                        },
                        send: function(e, t, i, o) {
                            var a = this;
                            "undefined" === n.type(o) && (o = a.defaultCacheTime), t = t || {}, i = i || {};
                            var r = n.Deferred();
                            t = n.extend(!1, {}, a.constructor.parseQuery(e), t), e = e.replace(/(\?\|#).*/, "") + "?" + n.param(t), t.callback && (t.callback = null), i = n.extend(!1, {}, i, {
                                url: e,
                                dataType: "jsonp",
                                type: i.type || "get"
                            }), n.each(a.requestModifiers, function(e, t) {
                                t.call(a, i)
                            });
                            var s = JSON.stringify(i),
                                l = function(e, t) {
                                    o && "success" === t && a.cache.save(s, e), n.each(a.responseModifiers, function(t, i) {
                                        "pending" === r.state() && i.call(a, e, r)
                                    }), "pending" === r.state() && r.resolve(e)
                                },
                                p = function(e) {
                                    a.ga.collect(e.status + " " + e.statusText)
                                };
                            return a.cache.getSaved(s, o).done(l).fail(function() {
                                n.ajax(i).done(l).fail(p)
                            }), r.promise()
                        },
                        get: function(e, t, i) {
                            return (i = i || {}).type = "get", this.send(e, t, i)
                        }
                    })
                }, {
                    "./../../jquery": 7,
                    "./../../olivie": 14,
                    "./cache": 11,
                    "./ga": 13
                }],
                13: [function(e, t, i) {
                    var n = e("./../../jquery"),
                        o = e("./../../olivie"),
                        a = e("../../../../../bower_components/uuid");
                    t.exports = o["class"]("Ga", [], function(e) {
                        this.tid = e, this.cid = this.getCid()
                    }, {
                        BASE_URL: "https://www.google-analytics.com/collect"
                    }, {
                        tid: null,
                        cid: null,
                        getCid: function() {
                            var e;
                            try {
                                return (e = localStorage.getItem("yt_cid")) || (e = a(), localStorage.setItem("yt_cid", e)), e
                            } catch (e) {
                                return a()
                            }
                        },
                        collect: function(e, t) {
                            if (t = t || "ApiRequestError", e) {
                                var i = (new Date).getTime(),
                                    o = {
                                        tid: this.tid,
                                        cid: this.cid,
                                        v: 1,
                                        ds: "web",
                                        an: "Yottie",
                                        t: "event",
                                        ec: t,
                                        ea: e,
                                        z: i
                                    },
                                    a = n.param(o),
                                    r = this.constructor.BASE_URL + "?" + a,
                                    s = new Image;
                                s.src = r, s.style.position = "absolute", s.style.zIndex = "-1", s.style.left = "-9999px", s.onload = function() {
                                    document.body.removeChild(s)
                                }, document.body.appendChild(s)
                            }
                        }
                    })
                }, {
                    "../../../../../bower_components/uuid": 2,
                    "./../../jquery": 7,
                    "./../../olivie": 14
                }],
                14: [function(e, t, i) {
                    var n = e("./jquery"),
                        o = e("./utils"),
                        a = e("./cl"),
                        r = e("./application"),
                        s = e("./component"),
                        l = {
                            $: n,
                            utils: o,
                            plugin: function(e, t, i) {
                                return n.fn[e] ? null : (n.fn[e] = function(e) {
                                    return this.each(function(i, n) {
                                        t.call(void 0, n, e)
                                    })
                                }, i && (n[e] = i), n.fn[e])
                            },
                            application: function(e, t, i, n) {
                                return this["class"](e, [r], t, i, n)
                            },
                            component: function(e, t, i, n) {
                                return n = n || {}, this["class"](e, [s], t, i, n)
                            },
                            "class": function(e, t, i, o, r) {
                                o = o || {}, r = r || {}, (t = t || []).unshift(a), o.id = e, o.inheritance = {}, n.each(t, function(e, t) {
                                    t.id && (o.inheritance[t.id] = t)
                                });
                                var s = function() {
                                    i.apply(this, arguments)
                                };
                                return s.prototype = function() {}, r.constructor = s, n.extend.apply(self.$, [s].concat(t.concat([o]))), n.extend.apply(self.$, [s.prototype].concat(t.map(function(e) {
                                    return e.prototype
                                })).concat(r)), s
                            }
                        };
                    t.exports = l
                }, {
                    "./application": 3,
                    "./cl": 4,
                    "./component": 5,
                    "./jquery": 7,
                    "./utils": 15
                }],
                15: [function(e, t, i) {
                    var n = e("./jquery"),
                        o = e("./external/number_format");
                    t.exports = {
                        unifyMultipleOption: function(e) {
                            var t = n.type(e);
                            return "array" === t ? e : "string" === t ? e.split(/[\s,;\|]+/).filter(function(e) {
                                return !!e
                            }) : null
                        },
                        applyModifier: function(e, t) {
                            return "array" !== n.type(t) && (t = [t]), n.each(t, function(t, i) {
                                "function" === n.type(i) && (e = i.call(i, e))
                            }), e
                        },
                        getProperty: function(e, t, i) {
                            if (e && t && "string" === n.type(t)) {
                                var o = e;
                                return n.each(t.split("."), function(e, t) {
                                    if (!(o = o[t])) return !1
                                }), o && i && (o = this.applyModifier(o, i)), o
                            }
                        },
                        setProperty: function(e, t, i) {
                            if (e && t && "string" === n.type(t)) {
                                var o = e,
                                    a = t.split(".");
                                return n.each(a, function(e, t) {
                                    e == a.length - 1 ? o[t] = i : "undefined" === n.type(o[t]) && (o[t] = {}), o = o[t]
                                }), e
                            }
                        },
                        formatBigNumber: function(e, t) {
                            if (e = parseFloat(e), t = t || 1, "number" !== n.type(e)) return NaN;
                            var i, o, a = "";
                            return 1e9 <= e ? (i = e / 1e9, a = "B") : 1e6 <= e ? (i = e / 1e6, a = "M") : 1e3 <= e ? (i = e / 1e3, a = "K") : i = e, ((i = i.toFixed(t)) - (o = parseInt(i, 10)) == 0 || 10 <= i) && (i = o), i + a
                        },
                        parseInt: function(e) {
                            return parseInt(e, 10)
                        },
                        formatNumberWithCommas: function(e) {
                            return e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
                        },
                        formatPassedTime: function(e) {
                            e instanceof Date || (e = Math.round(new Date(Date.parse(e)).getTime() / 1e3));
                            var t, i, n = Math.round((new Date).getTime() / 1e3),
                                o = Math.abs(n - e);
                            return i = 604800 <= o ? (t = o / 604800, "w") : 86400 <= o ? (t = o / 86400, "d") : 3600 <= o ? (t = o / 3600, "h") : 60 <= o ? (t = o / 60, "m") : (t = o, "s"), (t = Math.round(t)) + i
                        },
                        filterNulls: function(e) {
                            var t = this,
                                i = {};
                            return n.each(e, function(e, o) {
                                "object" === n.type(o) ? i[e] = t.filterNulls(o) : null !== o && (i[e] = o)
                            }), i
                        },
                        nl2br: function(e) {
                            return e.replace(/\n/g, "<br>")
                        },
                        formatAnchors: function(e) {
                            return e.replace(/(https?|ftp):\/\/[^\s\t<]+/g, function(e) {
                                return '<a href="' + e + '" target="_blank" rel="nofollow">' + e + "</a>"
                            })
                        },
                        numberFormat: function() {
                            return o.apply(o, arguments)
                        },
                        shuffle: function(e) {
                            var t, i;
                            for (t = e.length - 1; 0 <= t; --t) e[i = Math.floor(Math.random() * t)] = [e[t], e[t] = e[i]][0]
                        },
                        inViewPort: function(e, t) {
                            var i = e.getBoundingClientRect(),
                                n = i.width / 100 * (100 - t),
                                o = i.height / 100 * (100 - t);
                            return i.top >= 0 - o && i.left >= 0 - n && i.bottom <= window.innerHeight + o && i.right <= window.innerWidth + n
                        },
                        css: function(e, t) {
                            for (var i in e)
                                if (e.hasOwnProperty(i)) {
                                    var n = e[i];
                                    if (n instanceof HTMLElement)
                                        for (var o in t)
                                            if (t.hasOwnProperty(o)) {
                                                var a = t[o];
                                                n.style[o] = a
                                            }
                                }
                        }
                    }
                }, {
                    "./external/number_format": 6,
                    "./jquery": 7
                }],
                16: [function(e, t, i) {
                    var n = function(e, t) {
                        this.initialized = !1, this.app = e, this.widgetId = t, this.analytics = window.odiofyapp && window.odiofyapp.analytics ? window.odiofyapp.analytics : null, this.app && this.widgetId && this.analytics && (this.initialized = !0)
                    };
                    n.prototype.store = function(e, t, i) {
                        if (t = t || 1, i = i || null, this.initialized) {
                            var n = {
                                app: this.app,
                                widgetId: this.widgetId,
                                event: e,
                                count: t,
                                lifetime: i
                            };
                            this.analytics.store(n)
                        }
                    }, n.prototype.available = function() {
                        return !!this.initialized
                    }, t.exports = n
                }, {}],
                17: [function(e, t, i) {
                    t.exports = function(e, t) {
                        var i = this;
                        i.customStyle = document.createElement("style"), i.customStyle.innerHTML = t, e.app.$element[0].appendChild(i.customStyle);
                        var n = [];
                        i.customStyle && i.customStyle.sheet && i.customStyle.sheet.cssRules && (jQuery.each(i.customStyle.sheet.cssRules, function(t, i) {
                            "object" === jQuery.type(i) && n.push("div#odiofy_" + e.app.id + " " + i.cssText)
                        }), n = n.join("\n"), i.customStyle.innerHTML = n)
                    }
                }, {}],
                18: [function(e, t, i) {
                    t.exports = function(e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {
                                selector: "",
                                text: "Widget is deactivated<br>Visit Elfsight Apps",
                                link: "https://apps.elfsight.com/",
                                tpl: null
                            },
                            i = this;
                        i.view = t.tpl ? t.tpl : jQuery('<a href="' + t.link + '" class="" target="_blank">' + t.text + "</a>"), i.view[0].setAttribute("style", ["align-content:center!important", "align-items:center!important", "animation:none!important", "background:rgba(251, 251, 251, 0.9)!important", "border:none!important", "border-radius:2px!important", "bottom:0!important", "box-sizing:border-box!important", "color:#333333!important", "display:flex!important", "float:none!important", "font-family:Roboto,Arial,Sans-serif!important", "font-size:13px!important", "height:auto!important", "left:0!important", "line-height:16px!important", "margin:0!important", "opacity:1!important", "padding:0!important", "position:absolute!important", "right:0!important", "text-align:center!important", "text-decoration:none!important", "text-indent:0!important", "top:0!important", "transform:none!important", "justify-content:center!important", "visibility:visible!important", "width:auto!important", "z-index:99998!important", "zoom:1!important"].join(";")), ["blur", "change", "click", "focus", "focusin", "focusout", "hover", "keydown", "keypress", "keyup", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseout", "mouseover", "mouseup", "resize", "scroll", "select", "submit"].forEach(function(e) {
                            i.view[0].addEventListener(e, function(e) {
                                "odiofyapp-remove-link" !== e.target.className && e.stopPropagation()
                            })
                        }), ["blur", "change", "click", "focus", "focusin", "focusout", "hover", "keydown", "keypress", "keyup", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseout", "mouseover", "mouseup", "resize", "scroll", "select", "submit"].forEach(function(e) {
                            i.view[0].addEventListener(e, function(e) {
                                e.stopPropagation()
                            })
                        }), i.view.appendTo(e.app.$element.find(t.selector))
                    }
                }, {}],
                19: [function(e, t, i) {
                    t.exports = {
                        apiUrl: "https://www.googleapis.com/youtube/v3",
                        key: ["AIzaSyAL2rT2DDe6sA_aZ-le6k7NiU0SJCmIqWM"],
                        debug: !1,
                        channel: null,
                        sourceGroups: null,
                        order: null,
                        cacheTime: 3600,
                        width: "auto",
                        lang: "en",
                        header: {
                            visible: !0,
                            layout: "classic",
                            channelName: null,
                            channelDescription: null,
                            channelLogo: null,
                            channelBanner: null,
                            info: "logo banner channelName videosCounter subscribersCounter viewsCounter subscribeButton"
                        },
                        content: {
                            columns: 3,
                            rows: 1,
                            gutter: 20,
                            arrowsControl: !0,
                            scrollControl: !1,
                            dragControl: !0,
                            paginationControl: !0,
                            search: !0,
                            direction: "horizontal",
                            freeMode: !1,
                            scrollbar: !1,
                            transitionEffect: "slide",
                            transitionSpeed: 600,
                            auto: 0,
                            autoPauseOnHover: !1,
                            responsive: null
                        },
                        video: {
                            layout: "classic",
                            info: "playIcon duration title date description viewsCounter likesCounter commentsCounter",
                            playMode: "popup"
                        },
                        popup: {
                            info: "title channelLogo channelName subscribeButton viewsCounter likesRatio likesCounter dislikesCounter share date description descriptionMoreButton comments",
                            autoplay: !0
                        },
                        color: {
                            scheme: "default",
                            header: {
                                bg: null,
                                bannerOverlay: null,
                                channelName: null,
                                channelNameHover: null,
                                channelDescription: null,
                                anchor: null,
                                anchorHover: null,
                                counters: null
                            },
                            groups: {
                                bg: null,
                                link: null,
                                linkHover: null,
                                linkActive: null,
                                highlight: null,
                                highlightHover: null,
                                highlightActive: null
                            },
                            content: {
                                bg: null,
                                arrows: null,
                                arrowsHover: null,
                                arrowsBg: null,
                                arrowsBgHover: null,
                                scrollbarBg: null,
                                scrollbarSliderBg: null
                            },
                            video: {
                                bg: null,
                                overlay: null,
                                playIcon: null,
                                playIconHover: null,
                                duration: null,
                                durationBg: null,
                                title: null,
                                titleHover: null,
                                date: null,
                                description: null,
                                anchor: null,
                                anchorHover: null,
                                counters: null
                            },
                            popup: {
                                bg: null,
                                overlay: null,
                                title: null,
                                channelName: null,
                                channelNameHover: null,
                                viewsCounter: null,
                                likesRatio: null,
                                dislikesRatio: null,
                                likesCounter: null,
                                dislikesCounter: null,
                                share: null,
                                date: null,
                                description: null,
                                anchor: null,
                                anchorHover: null,
                                descriptionMoreButton: null,
                                descriptionMoreButtonHover: null,
                                commentsUsername: null,
                                commentsUsernameHover: null,
                                commentsPassedTime: null,
                                commentsText: null,
                                commentsLikes: null,
                                controls: null,
                                controlsHover: null,
                                controlsMobile: null,
                                controlsMobileBg: null
                            }
                        },
                        ads: {
                            client: null,
                            slots: {
                                content: null,
                                popup: null
                            }
                        },
                        noCookies: !1
                    }
                }, {}],
                20: [function(e, t, i) {
                    t.exports = {
                        en: {},
                        de: {
                            w: "Wo.",
                            d: "Tag",
                            h: "Std.",
                            min: "min",
                            s: "Sek",
                            "Show more": "Mehr anzeigen",
                            "Show less": "Weniger anzeigen",
                            Videos: "Videos",
                            Subscribers: "Abonnenten",
                            Views: "Aufrufe",
                            Uploads: "Uploads",
                            "Published at": "Veröffentlicht am",
                            "All comments": "Alle Kommentare",
                            Comments: "Kommentare",
                            Likes: "Likes",
                            Dislikes: "Dislikes",
                            Search: "Suche",
                            "There are no videos by this request": "Leider wurden keine Videos gefunden",
                            Share: "Teilen",
                            "Share on Facebook": "Auf Facebook teilen",
                            "Share on Twitter": "Auf Twitter teilen",
                            "Share on Google+": "Auf Google+ teilen"
                        },
                        hr: {
                            w: "tj",
                            d: "d",
                            h: "s",
                            min: "m",
                            s: "s",
                            "Show more": "Prikaži više",
                            "Show less": "Prikaži manje",
                            Videos: "Video",
                            Subscribers: "Pretplatnici",
                            Views: "Pregleda",
                            Uploads: "Upload",
                            "Published at": "Objavljeno",
                            "All comments": "Svi komentari",
                            Comments: "Komentari",
                            Likes: "Lajkova",
                            Dislikes: "Dislajkova",
                            Search: "Traži",
                            "There are no videos by this request": "",
                            Share: "Podjeli",
                            "Share on Facebook": "Podjeli na Facebooku",
                            "Share on Twitter": "Podjeli na Twitteru",
                            "Share on Google+": "Podjeli na Google+"
                        },
                        es: {
                            w: "sem",
                            d: "día",
                            h: "h",
                            min: "min",
                            s: "s",
                            "Show more": "Mostrar más",
                            "Show less": "Mostrar menos",
                            Videos: "Vídeos",
                            Subscribers: "Suscriptores",
                            Views: "Visualizaciones",
                            Uploads: "Vídeos subidos",
                            "Published at": "Publicado el",
                            "All comments": "Todos los comentarios",
                            Comments: "Comentarios",
                            Likes: "Similaĵoj",
                            Dislikes: "Antipatioj",
                            Search: "Buscar",
                            "There are no videos by this request": "",
                            Share: "Compartir",
                            "Share on Facebook": "Compartir en Facebook",
                            "Share on Twitter": "Compartir en Twitter",
                            "Share on Google+": "Compartir en Google+"
                        },
                        fr: {
                            w: "sem",
                            d: "j",
                            h: "h",
                            min: "min",
                            s: "s",
                            "Show more": "Plus",
                            "Show less": "Moins",
                            Videos: "Vidéos",
                            Subscribers: "Abonnés",
                            Views: "Vues",
                            Uploads: "Vidéos ajoutées",
                            "Published at": "Ajoutée le",
                            "All comments": "Tous les commentaires",
                            Comments: "Commentaires",
                            Likes: "Goûts",
                            Dislikes: "Dégoûts",
                            Search: "Chercher",
                            "There are no videos by this request": "",
                            Share: "Partager",
                            "Share on Facebook": "Partager sur Facebook",
                            "Share on Twitter": "Partager sur Twitter",
                            "Share on Google+": "Partager sur Google+"
                        },
                        it: {
                            w: "sett.",
                            d: "g",
                            h: "h",
                            min: "m",
                            s: "s",
                            "Show more": "Mostra altro",
                            "Show less": "Mostra meno",
                            Videos: "Video",
                            Subscribers: "Iscritti",
                            Views: "Visualizzazioni",
                            Uploads: "Video caricati",
                            "Published at": "Pubblicato il",
                            "All comments": "Tutti i commenti",
                            Comments: "Commenti",
                            Likes: "Piace",
                            Dislikes: "Non piace",
                            Search: "Ricerca",
                            "There are no videos by this request": "",
                            Share: "Condividi",
                            "Share on Facebook": "Condividi su Facebook",
                            "Share on Twitter": "Condividi su Twitter",
                            "Share on Google+": "Condividi su Google+"
                        },
                        nl: {
                            w: "w.",
                            d: "d.",
                            h: "u.",
                            min: "m.",
                            s: "s.",
                            "Show more": "Meer weergeven",
                            "Show less": "Minder weergeven",
                            Videos: "Video`s",
                            Subscribers: "Abonnees",
                            Views: "Weergaven",
                            Uploads: "Uploads",
                            "Published at": "Gepubliceerd op",
                            "All comments": "Alle reacties",
                            Comments: "Reacties",
                            Likes: "Sympathieën",
                            Dislikes: "Antipathieën",
                            Search: "Zoeken",
                            "There are no videos by this request": "",
                            Share: "Delen",
                            "Share on Facebook": "Delen op Facebook",
                            "Share on Twitter": "Delen op Twitter",
                            "Share on Google+": "Delen op Google+"
                        },
                        no: {
                            w: "u",
                            d: "d",
                            h: "t",
                            min: "m",
                            s: "s",
                            "Show more": "Vis mer",
                            "Show less": "Vis mindre",
                            Videos: "Videoer",
                            Subscribers: "Abonnenter",
                            Views: "Avspillinger",
                            Uploads: "Opplastinger",
                            "Published at": "Publisert",
                            "All comments": "Alle kommentarer",
                            Comments: "Kommentarer",
                            Likes: "Liker",
                            Dislikes: "Misliker",
                            Search: "Søke",
                            "There are no videos by this request": "",
                            Share: "Delen",
                            "Share on Facebook": "Del på Facebook",
                            "Share on Twitter": "Del på Twitter",
                            "Share on Google+": "Del på Google+"
                        },
                        pl: {
                            w: "w",
                            d: "dzień",
                            h: "godz.",
                            min: "min",
                            s: "s",
                            "Show more": "Pokaż więcej",
                            "Show less": "Pokaż mniej",
                            Videos: "Wideo",
                            Subscribers: "Subskrypcji",
                            Views: "Wyświetlenia",
                            Uploads: "Przesłane filmy",
                            "Published at": "Opublikowany",
                            "All comments": "Wszystkie komentarze",
                            Comments: "Komentarzy",
                            Likes: "Upodobania",
                            Dislikes: "Antypatie",
                            Search: "Szukaj",
                            "There are no videos by this request": "",
                            Share: "Dzielić",
                            "Share on Facebook": "Udostępnij na Facebooku",
                            "Share on Twitter": "Udostępnij na Twitterze",
                            "Share on Google+": "Udostępnij w Google+"
                        },
                        "pt-BR": {
                            w: "sem",
                            d: "d",
                            h: "h",
                            min: "min",
                            s: "s",
                            "Show more": "Mostrar mais",
                            "Show less": "Mostrar menos",
                            Videos: "Vídeos",
                            Subscribers: "Inscritos",
                            Views: "Visualizações",
                            Uploads: "Uploads",
                            "Published at": "Publicado em",
                            "All comments": "Todos os comentarios",
                            Comments: "Comentários",
                            Likes: "Gostos",
                            Dislikes: "Desgostos",
                            Search: "Procurar",
                            "There are no videos by this request": "",
                            Share: "Compartilhar",
                            "Share on Facebook": "Compartilhar no Facebook",
                            "Share on Twitter": "Compartilhar no Twitter",
                            "Share on Google+": "Compartilhar no Google+"
                        },
                        sv: {
                            w: "v",
                            d: "d",
                            h: "h",
                            min: "min",
                            s: "sek",
                            "Show more": "Visa mer",
                            "Show less": "Visa mindre",
                            Videos: "Videoklipp",
                            Subscribers: "Prenumeranter",
                            Views: "Visningar",
                            Uploads: "Uppladdningar",
                            "Published at": "Publicerades den",
                            "All comments": "Alla kommentarer",
                            Comments: "Kommentarer",
                            Likes: "Gillar",
                            Dislikes: "Ogillar",
                            Search: "Sök",
                            "There are no videos by this request": "",
                            Share: "Dela med sig",
                            "Share on Facebook": "Dela på Facebook",
                            "Share on Twitter": "Dela på Twitter",
                            "Share on Google+": "Dela på Google+"
                        },
                        tr: {
                            w: "h",
                            d: "g",
                            h: "s",
                            min: "d",
                            s: "sn",
                            "Show more": "Daha fazla göster",
                            "Show less": "Daha az göster",
                            Videos: "Videolar",
                            Subscribers: "Abone",
                            Views: "Görüntüleme",
                            Uploads: "Yüklenenler",
                            "Published at": "Tarihinde yayınlandı",
                            "All comments": "Tüm yorumlar",
                            Comments: "Yorumlar",
                            Likes: "Seviyor",
                            Dislikes: "Sevmediği",
                            Search: "Arama",
                            "There are no videos by this request": "",
                            Share: "Pay",
                            "Share on Facebook": "Facebook'ta Paylaş",
                            "Share on Twitter": "Twitter'da Paylaş",
                            "Share on Google+": "Google + 'da Paylaş"
                        },
                        ru: {
                            w: "нед.",
                            d: "дн.",
                            h: "ч",
                            min: "мин",
                            s: "с",
                            "Show more": "Ещё",
                            "Show less": "Свернуть",
                            Videos: "Видео",
                            Subscribers: "Подписчиков",
                            Views: "Просмотров",
                            Uploads: "Загрузки",
                            "Published at": "Опубликовано",
                            "All comments": "Все комментарии",
                            Comments: "Комментариев",
                            Likes: "Нравится",
                            Dislikes: "Не понравилось",
                            Search: "Поиск",
                            "There are no videos by this request": "",
                            Share: "Поделиться",
                            "Share on Facebook": "Поделиться на Facebook",
                            "Share on Twitter": "Поделиться на Twitter",
                            "Share on Google+": "Поделиться на Google+"
                        },
                        hi: {
                            w: "सप्ताह",
                            d: "दिन",
                            h: "घंटे",
                            min: "मिनट",
                            s: "सेकंड",
                            "Show more": "और दिखाएं",
                            "Show less": "कम दिखाएं",
                            Videos: "वीडियो",
                            Subscribers: "सदस्य",
                            Views: "बार देखा गया",
                            Uploads: "अपलोड",
                            "Published at": "को प्रकाशित",
                            "All comments": "सभी टिप्पणियां",
                            Comments: "टिप्पणियाँ",
                            Likes: "पसंद",
                            Dislikes: "नापसंद",
                            Search: "खोज",
                            "There are no videos by this request": "",
                            Share: "शेयर",
                            "Share on Facebook": "फेसबुक पर सांझा करें",
                            "Share on Twitter": "ट्विटर पर साझा करें",
                            "Share on Google+": "Google+ पर साझा करें"
                        },
                        "zh-HK": {
                            w: "周",
                            d: "天",
                            h: "小时",
                            min: "分钟",
                            s: "秒",
                            "Show more": "展开",
                            "Show less": "收起",
                            Videos: "视频",
                            Subscribers: "位订阅者",
                            Views: "次观看",
                            Uploads: "上传的视频",
                            "Published at": "发表于",
                            "All comments": "所有评论",
                            Comments: "评论",
                            Likes: "喜欢",
                            Dislikes: "不喜欢",
                            Search: "搜索",
                            "There are no videos by this request": "",
                            Share: "分享",
                            "Share on Facebook": "分享到Facebook",
                            "Share on Twitter": "分享到Twitter",
                            "Share on Google+": "分享到Google+"
                        },
                        ja: {
                            w: "週間前",
                            d: "日前",
                            h: "時間前",
                            min: "分前",
                            s: "秒前",
                            "Show more": "もっと見る",
                            "Show less": "一部を表示",
                            Videos: "動画",
                            Subscribers: "人",
                            Views: "回",
                            Uploads: "アップロード済み",
                            "Published at": "に公開",
                            "All comments": "すべてのコメント",
                            Comments: "コメント",
                            Likes: "好き",
                            Dislikes: "嫌い",
                            Search: "サーチ",
                            "There are no videos by this request": "",
                            Share: "シェア",
                            "Share on Facebook": "Facebookでシェア",
                            "Share on Twitter": "Twitterでシェアする",
                            "Share on Google+": "Google+でシェアする"
                        },
                        sk: {
                            w: "t",
                            d: "d",
                            h: "h",
                            min: "m",
                            s: "s",
                            "Show more": "Zobraziť viac",
                            "Show less": "Zobraziť menej",
                            Videos: "Videí",
                            Subscribers: "Odberateľov",
                            Views: "Zhliadnutí",
                            Uploads: "Nahrané videá",
                            "Published at": "Zverejnené",
                            "All comments": "Všetky komentáre",
                            Comments: "Komentárov",
                            Likes: "Záľuby",
                            Dislikes: "Nepáči",
                            Search: "Vyhľadávanie",
                            "There are no videos by this request": "",
                            Share: "Zdieľať",
                            "Share on Facebook": "Zdieľať na Facebook",
                            "Share on Twitter": "Zdieľať na Twitter",
                            "Share on Google+": "Zdieľať na Google+"
                        },
                        cs: {
                            w: "t",
                            d: "d",
                            h: "h",
                            min: "m",
                            s: "s",
                            "Show more": "Zobrazit více",
                            "Show less": "Zobrazit méně",
                            Videos: "Videí",
                            Subscribers: "Odběratelů",
                            Views: "Zhlédnutí",
                            Uploads: "Nahraná videa",
                            "Published at": "Publikováno",
                            "All comments": "Všechny komentáře",
                            Comments: "Komentářů",
                            Likes: "Líbí se",
                            Dislikes: "Nemá ráda",
                            Search: "Vyhledávání",
                            "There are no videos by this request": "",
                            Share: "Sdílet",
                            "Share on Facebook": "Sdílet na Facebooku",
                            "Share on Twitter": "Sdílet na Twitteru",
                            "Share on Google+": "Sdílet na Google+"
                        },
                        ko: {
                            w: "t",
                            d: "d",
                            h: "h",
                            min: "m",
                            s: "s",
                            "Show more": "더보기",
                            "Show less": "덜보기",
                            Videos: "비디오",
                            Subscribers: "구독자",
                            Views: "조회수",
                            Uploads: "업로드",
                            "Published at": "게재하기",
                            "All comments": "모든 커멘트",
                            Comments: "댓글",
                            Likes: "좋아요",
                            Dislikes: "싫어요",
                            Search: "수색",
                            "There are no videos by this request": "",
                            Share: "몫",
                            "Share on Facebook": "Facebook에서 공유",
                            "Share on Twitter": "Twitter에서 공유",
                            "Share on Google+": "Google+에서 공유"
                        },
                        ro: {
                            w: "s",
                            d: "z",
                            h: "o",
                            min: "m",
                            s: "s",
                            "Show more": "Arată mai multe",
                            "Show less": "Arată mai puține",
                            Videos: "Video-uri",
                            Subscribers: "Abonați",
                            Views: "Vizualizări",
                            Uploads: "Urcări",
                            "Published at": "Publicat pe",
                            "All comments": "Toate comentariile",
                            Comments: "Comentarii",
                            Likes: "Aprecieri",
                            Dislikes: "Dislike-uri",
                            Search: "Caută",
                            "There are no videos by this request": "Nu sunt video-uri pentru această cerere",
                            Share: "Distribuie",
                            "Share on Facebook": "Distribuie pe Facebook",
                            "Share on Twitter": "Distribuie pe Twitter",
                            "Share on Google+": "Distribuie pe Google+"
                        },
                        he: {
                            w: "שבוע",
                            d: "יום",
                            h: "שעה",
                            min: "דקה",
                            s: "שניה",
                            "Show more": "הצג עוד",
                            "Show less": "הצג פחות",
                            Videos: "סרטונים",
                            Subscribers: "מנויים",
                            Views: "צפיות",
                            Uploads: "העלאות",
                            "Published at": "פורסם ב",
                            "All comments": "כל התגובות",
                            Comments: "תגובות",
                            Likes: "לייקים",
                            Dislikes: "דיסלייקים",
                            Search: "חיפוש",
                            "There are no videos by this request": "לא מצאנו",
                            Share: "שיתוף",
                            "Share on Facebook": "שיתוף בפייסבוק",
                            "Share on Twitter": "שיתוף בטוויטר",
                            "Share on Google+": "שיתוף בגוגל+"
                        },
                        hu: {
                            w: "h",
                            d: "n",
                            h: "ó",
                            min: "p",
                            s: "m",
                            "Show more": "Több megjelenítése",
                            "Show less": "Kevesebb megjelenítése",
                            Videos: "Videók",
                            Subscribers: "Feliratkozó",
                            Views: "Megtekintés",
                            Uploads: "Feltöltések",
                            "Published at": "Bemutatva",
                            "All comments": "Megjegyzések",
                            Comments: "Megjegyzések",
                            Likes: "Tetszik",
                            Dislikes: "Nem-Tetszik",
                            Search: "Keresés",
                            "There are no videos by this request": "Nem található ilyen videó",
                            Share: "Megosztás",
                            "Share on Facebook": "Megosztás Facebookon",
                            "Share on Twitter": "Megosztás Twitteren",
                            "Share on Google+": "Megosztás Google+ -on"
                        }
                    }
                }, {}],
                21: [function(e, t, i) {
                    var n = e("./../../olivie/src/js/olivie"),
                        o = e("./../../olivie/src/js/jquery"),
                        a = e("./odiofy"),
                        r = e("./odiofy-facade"),
                        s = e("./defaults"),
                        l = e("./schemes"),
                        p = 0;
                    n.plugin("odiofy", function(e, t) {
                        if (s = o.data(e, "odiofy")) return s;
                        var i = o.odiofy.generateAttributesMap();
                        o.each(i, function(e, i) {
                            if ((i = i.replace(/-([a-z])/g, function(e) {
                                    return e[1].toUpperCase()
                                })) in t) {
                                var n = t,
                                    a = e.split("."),
                                    r = t[i];
                                o.each(a, function(e, t) {
                                    e == a.length - 1 ? n[t] = r : "undefined" === o.type(n[t]) && (n[t] = {}), n = n[t]
                                })
                            }
                        });
                        var n = new a((++p), e, t),
                            s = new r(n);
                        o.data(e, "odiofy", s), n.run()
                    }, {
                        defaults: s,
                        schemes: l,
                        orderFunctions: {
                            date: function(e, t) {
                                var i = Date.parse(e.snippet.publishedAt),
                                    n = Date.parse(t.snippet.publishedAt);
                                return i < n ? -1 : n < i ? 1 : 0
                            }
                        },
                        generateAttributesMap: function(e, t, i) {
                            return e = e || "", t = t || s, i = i || {}, o.each(t, function(t, n) {
                                var a;
                                "object" === o.type(n) ? o.odiofy.generateAttributesMap(e ? e + "." + t : t, n, i) : i[a = e ? e + "." + t : t] = a.replace(/\.|[A-Z]/g, function(e) {
                                    return "." === e ? "-" : "-" + e.toLowerCase()
                                })
                            }), i
                        },
                        init: function(e) {
                            e = e || document.body;
                            var t = o.odiofy.generateAttributesMap();
                            o("[data-yt]", e).each(function(e, i) {
                                var a = o(i),
                                    r = {};
                                o.each(t, function(e, t) {
                                    var i = a.attr("data-yt-" + t);
                                    "true" === i ? i = !0 : "false" === i && (i = !1), n.utils.setProperty(r, e, i)
                                }), a.odiofy(r)
                            })
                        },
                        addOrderFunction: function(e, t) {
                            "function" === o.type(t) && (this.orderFunctions[e] = t)
                        }
                    }), o(function() {
                        var e = window.onYottieReady;
                        e && "function" === o.type(e) && e(), o(window).trigger("odiofyReady"), o.odiofy.init()
                    })
                }, {
                    "./../../olivie/src/js/jquery": 7,
                    "./../../olivie/src/js/olivie": 14,
                    "./defaults": 19,
                    "./schemes": 45,
                    "./odiofy": 48,
                    "./odiofy-facade": 47
                }],
                22: [function(){}],
                23: [function(e, t, i) {
                    var n = e("./../../../../olivie/src/js/jquery"),
                        o = e("./../../../../olivie/src/js/olivie"),
                        a = n(window);
                    t.exports = o.component("Popup", function() {}, {
                        AVAILABLE_INFO: ["duration", "title", "channelLogo", "channelName", "subscribeButton", "viewsCounter", "likesCounter", "dislikesCounter", "likesRatio", "share", "date", "description", "descriptionMoreButton", "comments"],
                        dependencies: ["youtube", "i18n", "renderer", "ads", ""]
                    }, {
                        $e: n("<div></div>"),
                        videoPlayer: null,
                        open: function(e) {
                            var t = this;
                            return !t.showing && (t.analytics = t.get("app.analytics"), t.showVideo(e), t.showing = !0, t.$popup.addClass("odiofy-popup-show"), void 0)
                        },
                        close: function() {
                            var e = this;
                            setTimeout(function() {
                                e.videoPlayer.destroy(), e.$video.remove()
                            }, 350), e.showing = !1, e.$popup.removeClass("odiofy-popup-show")
                        },
                        showVideo: function(e) {
                            var t = this,
                                i = t.youtube.parseSource(e);
                            i && "youtube#video" === i.kind && (t.$popup.addClass("odiofy-popup-loading"), t.youtube.model(i.kind).find(i.criteria, "contentDetails,statistics,snippet").done(function(e) {
                                if (e) {
                                    t.video = e;
                                    var i = [];
                                    i.push(t.getVideoChannel()), i.push(t.getVideoCommentThreads()), n.when.apply(n, i).done(function() {
                                        t.$popup.removeClass("odiofy-popup-loading"), t.$video = t.createVideoElement();
                                        var e = {
                                            videoId: t.video.id,
                                            playerVars: {
                                                autoplay: t.app.options.popup.autoplay,
                                                showinfo: !1,
                                                rel: 0
                                            },
                                            events: {
                                                onStateChange: function(e) {
                                                    switch (t.analytics && t.analytics.available() && t.analytics.store("click"), e.data) {
                                                        case YT.PlayerState.ENDED:
                                                            e.target.pauseVideo(), e.target.seekTo(0)
                                                    }
                                                }
                                            }
                                        };
                                        t.app.options.noCookies && (e.host = "http://www.youtube-nocookie.com");
                                        var i = new YT.Player(t.$video.find(".odiofy-popup-video-player span").get(0), e);
                                        t.videoPlayer = i, !t.app.options.noCookies && t.channel && t.channel.renderButton(t.$video.find(".odiofy-popup-video-meta-subscribe").get(0)), t.$video.appendTo(t.$inner), t.$videoPlayer = t.$video.find(".odiofy-popup-video-source iframe"), t.fit(), setTimeout(function() {
                                            t.ads.init(t.$inner)
                                        }, 17)
                                    })
                                }
                            }))
                        },
                        getVideoChannel: function() {
                            var e = this;
                            e.video;
                            var t = n.Deferred();
                            return e.youtube.model("youtube#channel").find({
                                id: e.video.snippet.channelId
                            }, "snippet").done(function(i) {
                                e.channel = i, t.resolve()
                            }).fail(function() {
                                e.channel = null, t.resolve()
                            }), t
                        },
                        getVideoCommentThreads: function() {
                            var e = this;
                            e.video;
                            var t = n.Deferred();
                            return e.youtube.model("youtube#commentThread").findAll({
                                videoId: e.video.id,
                                textFormat: "plainText"
                            }, "snippet").done(function(i) {
                                e.commentThreads = i, t.resolve()
                            }).fail(function() {
                                e.commentThreads = null, t.resolve()
                            }), t
                        },
                        createPopupElement: function() {
                            var e = this,
                                t = {};
                            return t.loader = e.renderer.render("popup.loader", {
                                parts: t
                            }), t.controlClose = e.renderer.render("popup.control.close", {
                                parts: t
                            }), t.controlArrows = e.renderer.render("popup.control.arrows", {
                                parts: t
                            }), t.inner = e.renderer.render("popup.inner", {
                                parts: t
                            }), t.overlay = e.renderer.render("popup.overlay", {
                                parts: t
                            }), t.wrapper = e.renderer.render("popup.wrapper", {
                                parts: t
                            }), n(e.renderer.render("popup.container", {
                                parts: t
                            }))
                        },
                        createVideoElement: function() {
                            var e = this,
                                t = {},
                                i = {},
                                a = e.i18n.t("Published at") + " " + new Date(Date.parse(e.video.snippet.publishedAt)).toLocaleDateString(),
                                r = [];
                            if (e.commentThreads && e.commentThreads.length)
                                for (var s = 0, l = e.commentThreads.length; s < l; s++) {
                                    var p = e.commentThreads[s].getText();
                                    r.push({
                                        authorProfileImageUrl: e.commentThreads[s].snippet.topLevelComment.snippet.authorProfileImageUrl,
                                        authorName: e.commentThreads[s].snippet.topLevelComment.snippet.authorDisplayName,
                                        authorChannelUrl: e.commentThreads[s].snippet.topLevelComment.snippet.authorChannelUrl,
                                        text: p,
                                        passedTime: e.commentThreads[s].get("snippet.topLevelComment.snippet.publishedAt", o.utils.formatPassedTime),
                                        likesCount: e.commentThreads[s].get("snippet.topLevelComment.snippet.likeCount", o.utils.formatBigNumber),
                                        displayLikesCount: 0 < parseInt(e.commentThreads[s].snippet.topLevelComment.snippet.likeCount, 10),
                                        likesTitle: e.i18n.t("Likes") + ": " + e.commentThreads[s].get("snippet.topLevelComment.snippet.likeCount", o.utils.formatNumberDigits)
                                    })
                                }
                            return e.activeInfo = o.utils.unifyMultipleOption(e.app.options.popup.info) || [], e.activeInfo = e.activeInfo.filter(function(t) {
                                return !!~e.constructor.AVAILABLE_INFO.indexOf(t)
                            }), n.each(e.activeInfo, function(e, i) {
                                t[i] = !0
                            }), t.viewsCounter = !!e.video.get("statistics.viewCount") && t.viewsCounter, t.dislikesCounter = !!e.video.get("statistics.dislikeCount") && t.dislikesCounter, t.likesCounter = !!e.video.get("statistics.likeCount") && t.likesCounter, t.channel = e.channel && t.channelName || t.channelLogo || t.subscribeButton, t.ratingCounters = t.likesCounter || t.dislikesCounter, t.rating = t.ratingCounters || t.likesRatio, t.properties = t.viewsCounter || t.rating, t.infoHeader = t.title || t.properties, t.infoMeta = t.channel || t.share, t.description = t.description && e.video.snippet.description, t.infoMain = t.description || t.date, t.info = t.infoHeader || t.infoMain || t.infoMeta, t.comments = e.commentThreads && t.comments, t.content = t.info || t.comments, t.descriptionMoreButton = t.description && t.descriptionMoreButton, t.meta = e.channelLogo || t.channelName || t.date || t.description || t.subscribeButton, i.videoPlayer = e.renderer.render("popup.video.player", {
                                displaying: t,
                                parts: i
                            }), i.videoContent = e.renderer.render("popup.video.content", {
                                displaying: t,
                                parts: i,
                                logo: e.channel.get("snippet.thumbnails.default.url"),
                                name: e.channel.get("snippet.title"),
                                link: "//www.youtube.com/channel/" + e.channel.id,
                                viewsCount: e.video.get("statistics.viewCount", o.utils.formatNumberWithCommas) + " " + e.i18n.t("Views"),
                                likesCount: e.video.get("statistics.likeCount", o.utils.formatBigNumber),
                                dislikesCount: e.video.get("statistics.dislikeCount", o.utils.formatBigNumber),
                                likesRatio: parseInt(100 * e.video.get("statistics.likeCount") / (parseInt(e.video.get("statistics.likeCount"), 10) + parseInt(e.video.get("statistics.dislikeCount"), 10)), 10),
                                titles: {
                                    views: e.i18n.t("Views") + ": " + e.video.get("statistics.viewCount", e.youtube.constructor.formatNumberDigits),
                                    likes: e.i18n.t("Likes") + ": " + e.video.get("statistics.likeCount", e.youtube.constructor.formatNumberDigits),
                                    dislikes: e.i18n.t("Dislikes") + ": " + e.video.get("statistics.dislikeCount", e.youtube.constructor.formatNumberDigits),
                                    share: e.i18n.t("Share")
                                },
                                date: a,
                                text: e.video.get("snippet.description", [o.utils.nl2br, o.utils.formatAnchors]),
                                showMoreLabel: e.i18n.t("Show more"),
                                title: e.video.get("snippet.title"),
                                comments: e.commentThreads ? r : null,
                                shareButtons: e.getShareButtons()
                            }), n(e.renderer.render("popup.video.container", {
                                displaying: t,
                                parts: i
                            }))
                        },
                        getShareButtons: function() {
                            var e = this,
                                t = {
                                    facebook: e.i18n.t("Share on Facebook"),
                                    twitter: e.i18n.t("Share on Twitter"),
                                    google: e.i18n.t("Share on Google+")
                                };
                            return {
                                facebook: {
                                    id: "facebook",
                                    title: t.facebook,
                                    icon: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMS4wLjIsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjQgMjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNNS43LDEzVjguMWgzLjZWNi4yYzAtMy4zLDIuNS02LjIsNS41LTYuMmgzLjl2NC45aC0zLjljLTAuNCwwLTAuOSwwLjUtMC45LDEuM3YxLjloNC45VjEzaC00Ljl2MTENCgkJSDkuM1YxM0g1Ljd6Ii8+DQo8L2c+DQo8L3N2Zz4NCg==",
                                    handler: function() {
                                        window.open("http://www.facebook.com/sharer.php?u=" + encodeURIComponent("https://www.youtube.com/watch?v=" + e.video.get("id")), "facebook", "width=600px,height=600px,menubar=no,toolbar=no,resizable=yes,scrollbars=yes")
                                    }
                                },
                                twitter: {
                                    id: "twitter",
                                    title: t.twitter,
                                    icon: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMS4wLjIsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjQgMjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGlkPSJ0d2l0dGVyLTQtaWNvbl8xXyIgc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0yMS41LDcuMWMwLjMsNi45LTQuOSwxNC42LTE0LDE0LjZjLTIuOCwwLTUuNC0wLjgtNy41LTIuMg0KCQljMi42LDAuMyw1LjItMC40LDcuMy0yYy0yLjIsMC00LTEuNS00LjYtMy40YzAuOCwwLjEsMS41LDAuMSwyLjItMC4xYy0yLjQtMC41LTQtMi42LTMuOS00LjljMC43LDAuNCwxLjQsMC42LDIuMiwwLjYNCgkJQzEsOC4yLDAuNCw1LjMsMS43LDMuMWMyLjQsMyw2LjEsNC45LDEwLjEsNS4xYy0wLjctMy4xLDEuNi02LDQuOC02YzEuNCwwLDIuNywwLjYsMy42LDEuNmMxLjEtMC4yLDIuMi0wLjYsMy4xLTEuMg0KCQljLTAuNCwxLjEtMS4xLDIuMS0yLjIsMi43YzEtMC4xLDEuOS0wLjQsMi44LTAuOEMyMy4zLDUuNSwyMi41LDYuNCwyMS41LDcuMXoiLz4NCjwvZz4NCjwvc3ZnPg0K",
                                    handler: function() {
                                        window.open("https://twitter.com/share?url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + e.video.get("id")) + "&text=" + encodeURIComponent(e.video.get("snippet.title")), "facebook", "width=600px,height=600px,menubar=no,toolbar=no,resizable=yes,scrollbars=yes")
                                    }
                                },
                                google: {
                                    id: "google",
                                    title: t.google,
                                    icon: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMS4wLjIsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjQgMjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNNy42LDEwLjl2Mi42SDEyYy0wLjIsMS4xLTEuMywzLjItNC4zLDMuMmMtMi42LDAtNC43LTIuMS00LjctNC43UzUsNy4zLDcuNiw3LjMNCgkJYzEuNSwwLDIuNSwwLjYsMywxLjJsMi4xLTJjLTEuMy0xLjItMy4xLTItNS4xLTJDMy40LDQuNSwwLDcuOSwwLDEyczMuNCw3LjUsNy42LDcuNWM0LjQsMCw3LjMtMyw3LjMtNy4zYzAtMC41LTAuMS0wLjktMC4xLTEuMg0KCQlMNy42LDEwLjlMNy42LDEwLjl6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0yMS44LDEwLjlWOC44aC0yLjJ2Mi4xaC0yLjJ2Mi4xaDIuMnYyLjFoMi4ydi0yLjFIMjRjMCwwLDAtMi4xLDAtMi4xSDIxLjh6Ii8+DQo8L2c+DQo8L3N2Zz4NCg==",
                                    handler: function() {
                                        window.open("https://plus.google.com/share?url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + e.video.get("id")), "facebook", "width=600px,height=600px,menubar=no,toolbar=no,resizable=yes,scrollbars=yes")
                                    }
                                }
                            }
                        },
                        watch: function() {
                            var e = this;
                            e.$wrapper.click(function(t) {
                                e.analytics && e.analytics.available() && e.analytics.store("click"), t.target === e.$wrapper.get(0) && e.close()
                            }), e.$controlClose.click(function(t) {
                                t.preventDefault(), e.close()
                            }), e.$popup.on("click", ".odiofy-popup-video-meta-description-more", function() {
                                n(this).text(function(t, i) {
                                    return i === e.i18n.t("Show more") ? e.i18n.t("Show less") : e.i18n.t("Show more")
                                }).siblings(".odiofy-popup-video-meta-description").toggleClass("odiofy-popup-video-meta-description-show-full")
                            }), e.$popup.on("click", ".odiofy-popup-video-share", function(t) {
                                e.$popup.find(".odiofy-popup-video-share-popover").addClass("odiofy-popup-video-share-popover-open"), t.stopPropagation()
                            }), e.$popup.on("click", ".odiofy-popup-video-share-popover-content-item", function(t) {
                                var i = e.getShareButtons(),
                                    o = n(this).attr("data-type");
                                if (o) {
                                    var a = i[o];
                                    a && "function" == typeof a.handler && a.handler()
                                }
                                t.stopPropagation()
                            }), n("body").on("click touchend", function(t) {
                                n(t.target).closest(".odiofy-popup-video-share-popover").length || e.$popup.find(".odiofy-popup-video-share-popover").removeClass("odiofy-popup-video-share-popover-open")
                            })
                        },
                        fit: function() {
                            var e = a.innerHeight(),
                                t = this.$inner.innerHeight(),
                                i = 0;
                            t < e && (i = e / 2 - t / 2 - 50), this.$inner.css("top", i)
                        },
                        run: function() {
                            var e = this;
                            return "popup" == e.get("app.options.video.playMode") && (e.$popup = e.createPopupElement(), e.$popup.appendTo(document.body), e.$popup.attr("id", "odiofy_popup_" + e.app.getId()), e.$wrapper = e.$popup.find(".odiofy-popup-wrapper"), e.$inner = e.$popup.find(".odiofy-popup-inner"), e.$controlClose = e.$popup.find(".odiofy-popup-control-close"), e.watch(), a.resize(function() {
                                e.fit()
                            })), e
                        }
                    })
                }, {
                    "./../../../../olivie/src/js/jquery": 7,
                    "./../../../../olivie/src/js/olivie": 14
                }],
                24: [function(e, t, i) {
                    var n = e("./../../../../olivie/src/js/jquery"),
                        o = e("./../../../../olivie/src/js/olivie");
                    t.exports = o.component("Ads", function(e) {
                        this.client = e.client, this.slots = e.slots
                    }, {
                        dependencies: ["renderer"],
                        SIZES: [{
                            width: 728,
                            height: 90
                        }, {
                            width: 320,
                            height: 50
                        }]
                    }, {
                        client: null,
                        slots: null,
                        isActive: function() {
                            return window.adsbygoogle && this.client
                        },
                        run: function() {
                            (this.slots.content || this.slots.popup) && n.getScript("//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js")
                        },
                        showAt: function(e) {
                            return !!this.slots[e]
                        },
                        init: function(e) {
                            var t = this;
                            if (t.isActive()) {
                                var i = n("[data-yt-ads-place]", e);
                                i = i.filter(function() {
                                    var e = n(this).attr("data-yt-ads-place");
                                    return t.showAt(e)
                                }), t.processSlots(i)
                            }
                        },
                        createAdsElement: function(e, t) {
                            return n(this.renderer.render("ads", n.extend(!1, {
                                pubId: this.client,
                                slotId: t
                            }, e)))
                        },
                        processSlots: function(e) {
                            var t = this;
                            e.each(function() {
                                var e = n(this),
                                    i = e.attr("data-yt-ads-place"),
                                    o = t.slots[i],
                                    a = null,
                                    r = e.width();
                                r > t.constructor.SIZES[1].width && r < t.constructor.SIZES[0].width ? a = t.constructor.SIZES[1] : r > t.constructor.SIZES[0].width && (a = t.constructor.SIZES[0]), e.empty(), a && t.createAdsElement(a, o).appendTo(e)
                            }), adsbygoogle.push({})
                        }
                    })
                }, {
                    "./../../../../olivie/src/js/jquery": 7,
                    "./../../../../olivie/src/js/olivie": 14
                }],
                25: [function(e, t, i) {
                    var n = e("./../../../../olivie/src/js/jquery"),
                        o = e("./../../../../olivie/src/js/olivie"),
                        a = e("./grid"),
                        r = e("./../youtube/proxy-storage"),
                        s = (e("./../../defaults"), n(window));
                    t.exports = o["class"]("FeedSection", [], function(e, t) {
                        var i = this;
                        if (n.isPlainObject(t)) {
                            n.isArray(t.sources) || (t.sources = [t.sources]), i.controller = e, i.title = t.name || i.controller.i18n.t("Untitled"), i.videoPlayMode = i.get("controller.app.options.video.playMode"), i.analytics = i.get("controller.app.analytics"), i.videos = [], i.source = [], n.each(t.sources, function(e, t) {
                                var o;
                                if ("string" === n.type(t)) {
                                    if (!(o = i.controller.youtube.parseSource(t))) return
                                } else {
                                    if (!(n.isPlainObject(t) && t.kind && t.criteria)) return;
                                    o = t
                                }
                                i.source.push(o)
                            }), i.hasSource = i.source && i.source.length, i.$element = i.createFeedSectionElement(), i.hasSource || (i.$novideos = n(i.controller.renderer.render("feed.section.novideos", {
                                message: i.controller.i18n.t("There are no videos in this group")
                            })), i.$novideos.appendTo(i.$element)), i.$inner = i.$element.find(".odiofy-widget-feed-section-inner"), i.$loader = n(i.controller.renderer.render("feed.loader")), i.get("controller.app.options.content.search") && (i.$filter = n(i.controller.renderer.render("feed.filter", {
                                placeholder: i.controller.i18n.t("Search")
                            })), i.$filter.find(".odiofy-widget-feed-section-search-selector-label-input").attr("name", "filterField_" + i.title), i.$filter.prependTo(i.$element)), i.hasSource && i.get("controller.app.options.content.arrowsControl") && (i.$inner.append(i.controller.renderer.render("feed.arrows")), i.$arrowPrev = i.$element.find(".odiofy-widget-feed-section-arrow-prev"), i.$arrowNext = i.$element.find(".odiofy-widget-feed-section-arrow-next")), i.hasSource && i.get("controller.app.options.content.scrollbar") && (i.$scrollbar = n(i.controller.renderer.render("feed.scrollbar")), i.$scrollbar.appendTo(i.$element)), i.get("controller.app.options.content.paginationControl") && (i.$pagination = n(i.controller.renderer.render("feed.pagination")), i.$pagination.appendTo(i.$element)), i.$loader.appendTo(i.$element), i.fetcher = i.createFetcher(), i.inlinePlayers = {}, i.defaultBreakpoint = {
                                columns: i.get("controller.app.options.content.columns", o.utils.parseInt),
                                rows: i.get("controller.app.options.content.rows", o.utils.parseInt),
                                gutter: i.get("controller.app.options.content.gutter", o.utils.parseInt)
                            }, i.currentBreakpoint = i.defaultBreakpoint, i.grid = new a(i.$inner, i.defaultBreakpoint);
                            var r = [],
                                s = i.get("controller.app.options.content.responsive");
                            s && (n.each(s, function(e, t) {
                                t.mw = parseInt(t.minWidth ? t.minWidth : e, 10), r.push(t)
                            }), r.sort(function(e, t) {
                                return e.mw < t.mw ? -1 : e.mw > t.mw ? 1 : 0
                            }), i.breakpoints = r), i.auto = i.get("controller.app.options.content.auto", o.utils.parseInt), i.autoPauseOnHover = i.get("controller.app.options.content.autoPauseOnHover"), i.$element.addClass("odiofy-widget-feed-section-" + i.get("controller.app.options.content.direction"))
                        }
                    }, {
                        VIDEO_AVAILABLE_INFO: ["playIcon", "duration", "title", "date", "description", "viewsCounter", "likesCounter", "commentsCounter"],
                        AVAILABLE_EFFECTS: ["slide", "fade", "cube", "coverflow", "flip"],
                        AVAILABLE_DIRECTIONS: ["horizontal"],
                        VIDEO_BREAKPOINTS: [560, 490, 440, 370, 280, 230, 180, 130, 70],
                        SWIPER_OPTIONS_ALIASES: {
                            columns: "slidesPerView",
                            gutter: "spaceBetween"
                        },
                        prepareSwiperBreakpoints: function(e) {
                            var t = this;
                            if (!e) return null;
                            var i = {};
                            return n.each(e, function(e, o) {
                                i[e] = {}, n.each(o, function(n, o) {
                                    var a = t.SWIPER_OPTIONS_ALIASES[n];
                                    a && (i[e][a] = o)
                                })
                            }), i
                        }
                    }, {
                        virgin: !0,
                        redistributing: !1,
                        fetcher: null,
                        videoStorage: null,
                        controller: null,
                        title: null,
                        source: null,
                        grid: null,
                        swiper: null,
                        auto: null,
                        videoActiveInfo: null,
                        videoPlayMode: null,
                        inlinePlayers: null,
                        breakpoints: null,
                        currentBreakpoint: null,
                        prevBreakpoint: null,
                        defaultBreakpoint: null,
                        hover: null,
                        $element: null,
                        $inner: null,
                        $arrowPrev: null,
                        $arrowNext: null,
                        $scrollbar: null,
                        $loader: null,
                        $pagination: null,
                        isPlaying: null,
                        filterStr: "",
                        filterField: "title&description",
                        allFetched: !1,
                        noCookies: !1,
                        createFeedSectionElement: function() {
                            return n(this.controller.renderer.render("feed.section"))
                        },
                        createFetcher: function() {
                            var e, t = this,
                                i = t.get("controller.app.options.order"),
                                n = (t.get("controller.app.options.content.search"), t.controller.youtube.createUniversalVideoFetcher(t.source, "snippet,contentDetails,statistics"));
                            return i ? (e = new r(n, i), t.allFetched = !0) : e = n, e
                        },
                        activate: function() {
                            var e = this;
                            return e.$element.addClass("odiofy-active"), !!e.hasSource && void(e.virgin ? (e.virgin = !1, e.fit(), e.showLoader(500), e.fetcher.prepare().done(function() {
                                e.appendSlide(!0).done(function() {
                                    e.fit(), e.auto && setTimeout(function() {
                                        e.isPlaying || !e.swiper.autoplaying || e.hover || e.swiper.slideNext()
                                    }, e.auto)
                                })
                            })) : e.fit())
                        },
                        deactivate: function() {
                            this.$element.removeClass("odiofy-active"), n.each(this.inlinePlayers, function(e, t) {
                                t.pauseVideo()
                            })
                        },
                        createVideoElement: function(e) {
                            var t = this,
                                i = {};
                            n.each(t.videoActiveInfo, function(e, t) {
                                i[t] = !0
                            }), i.viewsCounter = !!e.get("statistics.viewCount") && i.viewsCounter, i.likesCounter = !!e.get("statistics.likeCount") && i.likesCounter, i.commentsCounter = !!e.get("statistics.commentCount") && i.commentsCounter, i.properties = i.viewsCounter || i.likesCounter || i.commentsCounter, i.info = i.properties || i.title || i.date || i.description, i.videoPlayer = "inline" === t.videoPlayMode;
                            var a = {};
                            return a.player = t.controller.renderer.render("video.player", {
                                displaying: i
                            }), a.preview = t.controller.renderer.render("video.preview", {
                                displaying: i,
                                id: e.id,
                                thumbnail: e.get("snippet.thumbnails.high.url"),
                                maxresThumbnail: e.get("snippet.thumbnails.maxres.url"),
                                title: e.get("snippet.title"),
                                duration: e.parseDuration()
                            }), a.overlay = t.controller.renderer.render("video.overlay"), a.info = t.controller.renderer.render("video.info", {
                                displaying: i,
                                id: e.id,
                                title: e.get("snippet.title"),
                                description: e.get("snippet.description", [o.utils.nl2br, o.utils.formatAnchors]),
                                viewsCount: e.get("statistics.viewCount", o.utils.formatBigNumber) + " " + t.controller.i18n.t("Views"),
                                likesCount: e.get("statistics.likeCount", o.utils.formatBigNumber) + " " + t.controller.i18n.t("Likes"),
                                commentsCount: e.get("statistics.commentCount", o.utils.formatBigNumber) + " " + t.controller.i18n.t("Comments"),
                                date: new Date(e.getPublishedTimestamp()).toLocaleDateString(),
                                titles: {
                                    views: t.controller.i18n.t("Views") + ": " + e.get("statistics.viewCount", t.controller.youtube.constructor.formatNumberDigits),
                                    likes: t.controller.i18n.t("Likes") + ": " + e.get("statistics.likeCount", t.controller.youtube.constructor.formatNumberDigits),
                                    comments: t.controller.i18n.t("Comments") + ": " + e.get("statistics.commentCount", t.controller.youtube.constructor.formatNumberDigits)
                                }
                            }), n(t.controller.renderer.render("video.container", {
                                id: e.id,
                                displaying: i,
                                parts: a,
                                layout: t.videoLayout
                            }))
                        },
                        appendSlide: function(e) {
                            var t = this,
                                i = t.grid.getItemsCount(),
                                o = n.Deferred();
                            return t.fetcher.hasNext() ? (e || t.showLoader(), t.fetcher.fetch(i, t.filterStr, t.filterField).done(function(e) {
                                var i = n(),
                                    a = n(t.controller.renderer.render("feed.slide"));
                                n.each(e, function(e, n) {
                                    var o = t.createVideoElement(n);
                                    i = i.add(o)
                                }), i.appendTo(a), t.swiper.appendSlide(a.get(0)), t.fitSlides(a), t.hideLoader(), o.resolve()
                            }).fail(function() {
                                if (t.swiper.autoplay && t.swiper.autoplay.stop(), !t.fetcher.hasNext() && 0 === t.$element.find(".odiofy-widget-feed-section-slide").length) {
                                    var e = n(t.controller.renderer.render("feed.slide"));
                                    t.$novideos = n(t.controller.renderer.render("feed.section.novideos", {
                                        message: t.controller.i18n.t("There are no videos by this request") + ': "' + t.filterStr + '".'
                                    })), t.$novideos.appendTo(e), t.swiper.appendSlide(e)
                                }
                                t.hideLoader(), t.$arrowNext.toggleClass("odiofy-widget-feed-section-arrow-has-next", !1), o.reject()
                            })) : o.reject(), o.promise()
                        },
                        isHorizontal: function() {
                            return "horizontal" === this.get("controller.app.options.content.direction")
                        },
                        run: function() {
                            var e = this;
                            e.noCookies = e.get("controller.app.options.noCookies"), e.videoLayout = e.get("controller.app.options.video.layout"), e.videoActiveInfo = o.utils.unifyMultipleOption(e.get("controller.app.options.video.info")) || [], e.videoActiveInfo = e.videoActiveInfo.filter(function(t) {
                                return !!~e.constructor.VIDEO_AVAILABLE_INFO.indexOf(t)
                            });
                            var t = e.get("controller.app.options.content.transitionEffect", function(t) {
                                    return ~e.constructor.AVAILABLE_EFFECTS.indexOf(t) ? t : "slide"
                                }),
                                i = e.get("controller.app.options.content.direction", function(t) {
                                    return ~e.constructor.AVAILABLE_DIRECTIONS.indexOf(t) ? t : "vertical"
                                }),
                                a = e.get("controller.app.options.content.dragControl"),
                                r = e.get("controller.app.options.content.scrollControl"),
                                s = e.get("controller.app.options.content.paginationControl"),
                                l = !a && !r && !s,
                                p = window.SwiperNoConflict || window.Swiper;
                            e.swiper = new p(e.$inner, {
                                direction: i,
                                effect: t,
                                speed: e.get("controller.app.options.content.transitionSpeed", o.utils.parseInt),
                                fade: {
                                    crossFade: !0
                                },
                                cube: {
                                    shadowScale: .1,
                                    shadowOffset: 15
                                },
                                coverflow: {
                                    rotate: 60
                                },
                                slidesPerView: 1,
                                slidesPerColumn: 1,
                                freeMode: e.get("controller.app.options.content.freeMode"),
                                mousewheelControl: r,
                                simulateTouch: a,
                                scrollbar: e.$scrollbar ? e.$scrollbar.get() : null,
                                scrollbarDraggable: !1,
                                scrollbarHide: !0,
                                prevButton: e.$arrowPrev ? e.$arrowPrev.get() : null,
                                nextButton: e.$arrowNext ? e.$arrowNext.get() : null,
                                autoplay: e.auto,
                                autoplayDisableOnInteraction: !1,
                                watchSlidesProgress: !0,
                                watchSlidesVisibility: !0,
                                onlyExternal: l,
                                pagination: e.$pagination ? e.$pagination.get() : null,
                                paginationClickable: !0,
                                paginationBulletRender: function(e, t, i) {
                                    return '<span class="odiofy-widget-feed-section-pagination-bullet ' + i + '">' + (t + 1) + "</span>"
                                },
                                onTouchStart: function(e, t) {
                                    l && t.preventDefault()
                                }
                            }), s && (e.swiper.on("onPaginationRendered", function() {
                                if (e.fetcher.hasNext()) {
                                    var t = n('<span class="odiofy-widget-feed-section-pagination-bullet odiofy-widget-feed-section-pagination-bullet-more swiper-pagination-bullet">&nbsp;</span>').get(0);
                                    n(e.swiper.paginationContainer).append(t)
                                }
                                e.rebuildPagination()
                            }), e.swiper.on("onSlideChangeEnd", function() {
                                e.rebuildPagination()
                            })), e.swiper.on("reachEnd", function() {
                                var t = e.fetcher.hasNext();
                                e.swiper.stopAutoplay(), t && !e.redistributing && setTimeout(function() {
                                    e.appendSlide(!0).done(function() {
                                        e.hover || e.swiper.startAutoplay()
                                    })
                                }, 17), e.$arrowNext && e.$arrowNext.toggleClass("odiofy-widget-feed-section-arrow-has-next", t)
                            }), e.$element.on("click", ".odiofy-widget-video", function(t) {
                                var i;
                                t.preventDefault(), t.stopPropagation();
                                var o = n(this).closest(".odiofy-widget-video"),
                                    a = n(t.target),
                                    r = o.attr("data-yt-id"),
                                    s = o.find(".odiofy-widget-video-preview").attr("href");
                                if (a.is("a") && a.parent().is(".odiofy-widget-video-info-caption")) return window.open(a.attr("href"));
                                if ("youtube" !== e.videoPlayMode) {
                                    if (e.swiper.stopAutoplay(), e.isPlaying = !0, "popup" === e.videoPlayMode) e.controller.popup.open("https://www.youtube.com/watch?v=" + r);
                                    else if (i = e.inlinePlayers[r]) i.getPlayerState() === YT.PlayerState.PLAYING ? i.pauseVideo() : i.playVideo();
                                    else {
                                        var l = {
                                            videoId: r,
                                            playerVars: {
                                                autoplay: !0,
                                                showinfo: !1,
                                                rel: 0
                                            },
                                            events: {
                                                onStateChange: function(t) {
                                                    switch (t.data) {
                                                        case YT.PlayerState.ENDED:
                                                            t.target.pauseVideo(), t.target.seekTo(0), e.isPlaying = !1, e.swiper.startAutoplay();
                                                            break;
                                                        case YT.PlayerState.PLAYING:
                                                            n.each(e.inlinePlayers, function(t, i) {
                                                                t !== r && (e.isPlaying = !0, e.swiper.stopAutoplay(), i.pauseVideo())
                                                            });
                                                            break;
                                                        case YT.PlayerState.PAUSED:
                                                            setTimeout(function() {
                                                                var t = !1;
                                                                n.each(e.inlinePlayers, function(e, i) {
                                                                    e !== r && i.getPlayerState() === YT.PlayerState.PLAYING && (t = !0)
                                                                }), t || (e.isPlaying = !1, !e.hover && e.auto && e.swiper.startAutoplay())
                                                            }, 2e3)
                                                    }
                                                }
                                            }
                                        };
                                        e.noCookies && (l.host = "http://www.youtube-nocookie.com"), i = new YT.Player(o.find(".odiofy-widget-video-player span").get(0), l), e.fitVideos(o), e.inlinePlayers[r] = i
                                    }
                                    e.analytics && e.analytics.available() && e.analytics.store("click")
                                } else a.is(".odiofy-widget-video-info-caption") || a.parent().is(".odiofy-widget-video-info-caption") || window.open(s)
                            }), e.autoPauseOnHover && (e.$element.on("mouseenter", function() {
                                e.hover = !0, e.swiper.stopAutoplay()
                            }), e.$element.on("mouseleave", function() {
                                e.isPlaying || (e.hover = !1, e.swiper.startAutoplay())
                            })), n(window).resize(function() {
                                e.fit()
                            }), e.$element.on("submit", ".odiofy-widget-feed-section-search-form", function(t) {
                                t.preventDefault(), e.searching || e.$element.find(".odiofy-widget-feed-section-search-form-input").trigger("change")
                            }), e.$element.on("click", ".odiofy-widget-feed-section-search-form-button", function() {
                                e.searching || e.$element.find(".odiofy-widget-feed-section-search-form-input").trigger("change")
                            }), e.$element.on("change", ".odiofy-widget-feed-section-search-form-input", function() {
                                e.searching = !0, e.filterStr = e.$element.find(".odiofy-widget-feed-section-search-form-input").val(), e.showLoader(), e.swiper.isEnd = !0, e.swiper.removeAllSlides(), e.fetcher = e.createFetcher(), e.fetcher.prepare().done(function() {
                                    e.swiper.isEnd = !1, e.appendSlide().done(function() {
                                        e.fit(), e.searching = !1, e.auto && setTimeout(function() {
                                            e.isPlaying || !e.swiper.autoplaying || e.hover || e.swiper.slideNext()
                                        }, e.auto)
                                    })
                                })
                            })
                        },
                        fit: function() {
                            this.fitGrid(), this.fitSlides()
                        },
                        fitInner: function() {
                            var e = this.$element.find(".odiofy-widget-video:first").outerHeight(!0),
                                t = parseInt(this.$element.find(".odiofy-widget-feed-section-slide:first").css("padding-top"), 10),
                                i = this.grid.rows;
                            this.$inner.innerHeight(e * i + t)
                        },
                        fitSlides: function(e) {
                            var t = this;
                            e = e || t.$element.find(".odiofy-widget-feed-section-slide"), setTimeout(function() {
                                e.css({
                                    paddingTop: t.grid.gutter,
                                    paddingLeft: t.grid.gutter,
                                    height: "100%"
                                })
                            }), t.fitVideos(e.find(".odiofy-widget-video"))
                        },
                        fitGrid: function() {
                            var e = this;
                            if (e.breakpoints && e.breakpoints.length) {
                                var t;
                                e.prevBreakpoint = e.currentBreakpoint;
                                var i = s.width();
                                if (n.each(e.breakpoints, function(e, n) {
                                        if (i <= n.mw) return t = n, !1
                                    }), t || (t = e.defaultBreakpoint), t !== e.currentBreakpoint) {
                                    e.currentBreakpoint = t, e.grid.setOptions(e.currentBreakpoint), e.redistributeVideos();
                                    var o = e.$element.find(".odiofy-widget-video"),
                                        a = e.grid.getItemsCount();
                                    0 !== o.length && o.length < a && e.fetcher.hasNext() && (e.swiper.removeAllSlides(), e.appendSlide(!0).done(function() {
                                        e.appendSlide(!0).done(function() {
                                            e.grid.setOptions(e.currentBreakpoint), e.redistributeVideos(), e.fitSlides()
                                        })
                                    }))
                                }
                            }
                        },
                        fitVideos: function(e) {
                            var t = this;
                            setTimeout(function() {
                                e = e || t.$element.find(".odiofy-widget-video"), t.grid.calculate(), o.utils.css(e, {
                                    marginBottom: t.grid.gutter + "px",
                                    marginRight: t.grid.gutter + "px",
                                    width: t.grid.itemWidth + "px"
                                });
                                var i, a = e.find(".odiofy-widget-video-preview"),
                                    r = e.find(".odiofy-widget-video-player iframe"),
                                    s = a.find(".odiofy-widget-video-preview-thumbnail"),
                                    l = a.innerWidth(),
                                    p = t.controller.widget.constructor.updateBreakpoints(e, t.constructor.VIDEO_BREAKPOINTS, "odiofy-mw-");
                                i = (l = a.innerWidth()) / 16 * 9 - .6, s.find("img").each(function(t, i) {
                                    var o = n(i),
                                        a = o.attr("data-src"),
                                        r = o.attr("data-maxres-src");
                                    r && 480 < e.width() ? o.attr("src", r) : o.attr("src", a)
                                }), s.css({
                                    width: l,
                                    height: i
                                }), "horizontal" === t.videoLayout && 370 < p && e.find(".odiofy-widget-video-info").innerHeight(i), r.length && r.width(l).height(i), t.fitInner()
                            })
                        },
                        redistributeVideos: function() {
                            var e = this,
                                t = [],
                                i = e.$element.find(".odiofy-widget-video"),
                                o = e.grid.getItemsCount(),
                                a = Math.ceil(i.length / o);
                            if (i.length) {
                                e.redistributing = !0, e.swiper.lockSwipes(), e.swiper.removeAllSlides();
                                for (var r = 0; r < a; ++r) s = r, l = void 0, l = n(e.controller.renderer.render("feed.slide")), i.slice(s * o, (s + 1) * o).appendTo(l), t.push(l.get(0));
                                var s, l;
                                e.swiper.prependSlide(t.reverse()), e.swiper.update(!0), e.swiper.unlockSwipes(), e.redistributing = !1
                            }
                        },
                        showLoader: function(e) {
                            var t = this;
                            t.$loader && !t.$loader.is(".odiofy-visible") && (t.loaderTimeout && (clearTimeout(t.loaderTimeout), t.loaderTimeout = null), t.loaderTimeout = setTimeout(function() {
                                t.$loader.addClass("odiofy-visible")
                            }, parseInt(e, 10)))
                        },
                        hideLoader: function() {
                            var e = this;
                            e.$loader && (e.loaderTimeout && (clearTimeout(e.loaderTimeout), e.loaderTimeout = null), e.$loader.removeClass("odiofy-visible"))
                        },
                        rebuildPagination: function() {
                            var e = this.$element.find(".odiofy-widget-feed-section-pagination-bullet"),
                                t = this.swiper.activeIndex,
                                i = [
                                    [],
                                    []
                                ],
                                o = 0;
                            n.map(e, function(a, r) {
                                r < e.length - 1 && (r < 1 || t - 1.5 < r && r < t + 1.5 || r > e.length - 3 ? (r === t && (o = 1), n(a).css("display", "inline-block").text(r + 1)) : (i[o].push(r), n(a).css("display", "none").text("...")))
                            });
                            var a = i.map(function(e) {
                                return parseInt(e[0]) + parseInt((e[e.length - 1] - e[0]) / 2)
                            });
                            n.map(e, function(e, t) {
                                t !== a[0] && t !== a[1] || n(e).css("display", "inline-block")
                            }), n(this.swiper.paginationContainer).html(e)
                        }
                    })
                }, {
                    "./../../../../olivie/src/js/jquery": 7,
                    "./../../../../olivie/src/js/olivie": 14,
                    "./../../defaults": 19,
                    "./../youtube/proxy-storage": 40,
                    "./grid": 27
                }],
                26: [function(e, t, i) {
                    var n = e("./../../../../olivie/src/js/jquery"),
                        o = e("./../../../../olivie/src/js/olivie"),
                        a = e("./feed-section");
                    t.exports = o.component("Feed", function() {
                        this.sections = [], this.$e = n("<div></div>")
                    }, {
                        dependencies: ["renderer", "i18n", "youtube", "popup", "widget", "ads"]
                    }, {
                        sections: null,
                        activeSectionId: null,
                        $element: null,
                        $inner: null,
                        $e: null,
                        createFeedElement: function() {
                            return n(this.renderer.render("feed.container"))
                        },
                        getSection: function(e) {
                            if (this.hasSection(e)) return this.sections[e]
                        },
                        hasSection: function(e) {
                            return !!this.sections[e]
                        },
                        setActiveSection: function(e) {
                            this.hasSection(e) && (n.each(this.sections, function(e, t) {
                                t.deactivate()
                            }), this.getSection(e).activate(), this.activeSectionId = e)
                        },
                        getActiveSection: function() {
                            return this.getSection(this.activeSectionId)
                        },
                        run: function(e) {
                            var t = this;
                            t.$element = t.createFeedElement(), t.$inner = t.$element.find(".odiofy-widget-feed-inner"), n.each(e, function(e, i) {
                                var n = new a(t, i);
                                n.$element.appendTo(t.$inner), n.run(), t.sections.push(n)
                            }), setTimeout(function() {
                                t.app.component("groups").fit(), t.ads.init(t.$element)
                            }, 100)
                        }
                    })
                }, {
                    "./../../../../olivie/src/js/jquery": 7,
                    "./../../../../olivie/src/js/olivie": 14,
                    "./feed-section": 25
                }],
                27: [function(e, t, i) {
                    e("./../../../../olivie/src/js/jquery");
                    var n = e("./../../../../olivie/src/js/olivie");
                    t.exports = n["class"]("Grid", [], function(e, t) {
                        var i = this;
                        i.$element = e, i.options = t, i.columns = i.options.columns, i.rows = i.options.rows, i.gutter = i.options.gutter
                    }, {}, {
                        options: null,
                        columns: null,
                        rows: null,
                        gutter: null,
                        $element: null,
                        setOptions: function(e, t) {
                            var i = this;
                            i.columns = e.hasOwnProperty("columns") ? n.utils.parseInt(e.columns) : i.columns,
                                i.rows = e.hasOwnProperty("rows") ? n.utils.parseInt(e.rows) : i.rows, i.gutter = e.hasOwnProperty("gutter") ? n.utils.parseInt(e.gutter) : i.gutter, i.columns || (i.columns = 1), i.rows || (i.rows = 1), i.gutter || (i.gutter = 0), t && i.calculate()
                        },
                        calculate: function() {
                            var e = this,
                                t = e.$element.innerWidth(),
                                i = e.gutter * (e.columns + 1);
                            e.itemWidth = parseInt((t - i) / e.columns, 10)
                        },
                        getItemsCount: function() {
                            return this.columns * this.rows
                        }
                    })
                }, {
                    "./../../../../olivie/src/js/jquery": 7,
                    "./../../../../olivie/src/js/olivie": 14
                }],
                28: [function(e, t, i) {
                    var n = e("./../../../../olivie/src/js/jquery"),
                        o = e("./../../../../olivie/src/js/olivie"),
                        a = n(window);
                    t.exports = o.component("Groups", function() {
                        this.$e = n("<div></div>")
                    }, {
                        dependencies: ["renderer", "i18n", "feed"]
                    }, {
                        sourceGroups: null,
                        $element: null,
                        $inner: null,
                        $list: null,
                        $items: null,
                        $e: null,
                        createGroupsElement: function() {
                            var e = this;
                            return n(e.renderer.render("groups.container", {
                                visible: !!(e.app.options.sourceGroups && 1 < e.app.options.sourceGroups.length),
                                list: e.renderer.render("groups.list", {
                                    groups: e.sourceGroups
                                }),
                                controls: e.renderer.render("groups.controls")
                            }))
                        },
                        fit: function() {
                            var e = this,
                                t = e.$list.scrollLeft(),
                                i = e.$list.get(0).scrollWidth - e.$list.innerWidth();
                            e.$controlLeft.toggleClass("odiofy-widget-nav-control-disabled", t < 10), e.$controlRight.toggleClass("odiofy-widget-nav-control-disabled", i - t < 10)
                        },
                        run: function(e) {
                            var t = this;
                            t.sourceGroups = e.slice(), n.each(t.sourceGroups, function(e, i) {
                                i.name || i.title || (i.title = t.i18n.t("Untitled")), i.title || (i.title = i.name)
                            }), t.$element = t.createGroupsElement(), t.$inner = t.$element.children().first(), t.$list = t.$inner.children().first(), t.$items = t.$list.children(), t.$controlLeft = t.$element.find(".odiofy-widget-nav-control-left"), t.$controlRight = t.$element.find(".odiofy-widget-nav-control-right"), t.$items.on("click", function() {
                                var e = n(this),
                                    i = e.children().first().attr("data-yt-id");
                                t.$items.removeClass("odiofy-active"), e.addClass("odiofy-active"), t.feed.setActiveSection(i);
                                var o = e.position().left;
                                o < 20 && t.$list.animate({
                                    scrollLeft: "-=" + e.innerWidth()
                                }), o + e.innerWidth() + 20 > t.$list.innerWidth() && t.$list.animate({
                                    scrollLeft: "+=" + e.innerWidth()
                                })
                            }), a.resize(function() {
                                t.fit()
                            }), t.$list.scroll(function() {
                                t.fit()
                            }), t.$controlLeft.on("touchstart click", function() {
                                var e = t.$items.filter(function() {
                                    return n(this).innerWidth() - 20 - n(this).position().left < t.$list.innerWidth()
                                }).first();
                                t.$list.animate({
                                    scrollLeft: e.length ? t.$list.scrollLeft() + e.position().left - 30 : 0
                                }, 300)
                            }), t.$controlRight.on("touchstart click", function() {
                                var e = t.$items.filter(function() {
                                    return n(this).position().left + n(this).innerWidth() + 20 >= t.$list.innerWidth()
                                }).first();
                                t.$list.animate({
                                    scrollLeft: e.length ? t.$list.scrollLeft() + e.position().left - 30 : t.$list.get(0).scrollWidth
                                }, 300)
                            })
                        }
                    })
                }, {
                    "./../../../../olivie/src/js/jquery": 7,
                    "./../../../../olivie/src/js/olivie": 14
                }],
                29: [function(e, t, i) {
                    var n = e("./../../../../olivie/src/js/jquery"),
                        o = e("./../../../../olivie/src/js/olivie");
                    t.exports = o.component("Header", function() {
                        this.$e = n("<div></div>")
                    }, {
                        AVAILABLE_INFO: ["logo", "banner", "channelName", "channelDescription", "videosCounter", "subscribersCounter", "viewsCounter", "subscribeButton"],
                        dependencies: ["error", "youtube", "i18n", "renderer"]
                    }, {
                        visible: null,
                        channel: null,
                        activeInfo: null,
                        $element: null,
                        $e: null,
                        createHeaderElement: function() {
                            var e = this;
                            e.activeInfo = o.utils.unifyMultipleOption(e.app.options.header.info) || [], e.activeInfo = e.activeInfo.filter(function(t) {
                                return !!~e.constructor.AVAILABLE_INFO.indexOf(t)
                            });
                            var t = {};
                            n.each(e.activeInfo, function(e, i) {
                                t[i] = !0
                            }), t.properties = e.channel.id && (t.videosCounter || t.subscribersCounter || t.viewsCounter), t.channel = t.channelName || t.channelDescription, t.logo = t.logo && e.channel.get("snippet.thumbnails.default.url"), t.banner = t.banner && e.channel.get("brandingSettings.image.bannerTabletHdImageUrl"), t.inner = t.logo || t.channel || t.properties || t.banner, t.branding = t.logo || t.banner, t.subscribeButton = e.channel.id && t.subscribeButton;
                            var i = {};
                            return i.logo = e.renderer.render("header.logo", {
                                displaying: t,
                                id: e.channel.id,
                                url: e.channel.get("snippet.thumbnails.default.url"),
                                title: e.channel.get("snippet.title")
                            }), i.channel = e.renderer.render("header.channel", {
                                displaying: t,
                                id: e.channel.id,
                                name: e.channel.get("snippet.title"),
                                description: e.channel.get("snippet.description", o.utils.formatAnchors),
                                videoCount: e.channel.get("statistics.videoCount", o.utils.formatBigNumber) + " " + e.i18n.t("Videos"),
                                subscriberCount: e.channel.get("statistics.subscriberCount", o.utils.formatBigNumber) + " " + e.i18n.t("Subscribers"),
                                viewCount: e.channel.get("statistics.viewCount", o.utils.formatBigNumber) + " " + e.i18n.t("Views")
                            }), i.overlay = e.renderer.render("header.overlay", {
                                displaying: t
                            }), i.banner = e.renderer.render("header.banner", {
                                displaying: t,
                                url: e.channel.get("brandingSettings.image.bannerTabletHdImageUrl")
                            }), i.subscribe = e.renderer.render("header.subscribe", {
                                displaying: t
                            }), i.inner = e.renderer.render("header.inner", {
                                displaying: t,
                                parts: i
                            }), n(e.renderer.render("header.container", {
                                visible: e.visible,
                                layout: e.app.options.header.layout,
                                displaying: t,
                                parts: i
                            }))
                        },
                        run: function() {
                            var e, t = this,
                                i = n.Deferred();
                            if (t.visible = t.app.options.header.visible, t.app.options.channel) {
                                if ("string" !== n.type(t.app.options.channel)) return t;
                                if (!(e = t.youtube.parseSource(t.app.options.channel)) || "youtube#channel" !== e.kind) return t.error["throw"]('Option "channel" contents invalid channel or user url.'), t;
                                t.youtube.model(e.kind).find(e.criteria, "snippet,brandingSettings,statistics,contentDetails").done(function(e) {
                                    t.channel = e, i.resolve()
                                }).fail(function(e) {
                                    e = e || 'Option "channel" contents invalid channel or user url.', t.error["throw"](e)
                                })
                            } else t.channel = t.youtube.model("youtube#channel").create(), i.resolve();
                            return i.done(function() {
                                t.channel && (t.app.options.header.channelName && t.channel.set("snippet.title", t.app.options.header.channelName), t.app.options.header.channelDescription && t.channel.set("snippet.description", t.app.options.header.channelDescription), t.app.options.header.channelLogo ? t.channel.set("snippet.thumbnails.default.url", t.app.options.header.channelLogo) : t.channel.id && t.channel.set("snippet.thumbnails.default.url", t.youtube.resizeLogo(t.channel.get("snippet.thumbnails.default.url"), 100)), t.app.options.header.channelBanner && t.channel.set("brandingSettings.image.bannerTabletHdImageUrl", t.app.options.header.channelBanner), t.visible = t.visible && (t.channel.get("snippet.title") || t.channel.get("snippet.description") || t.channel.get("snippet.thumbnails.default.url") || t.channel.get("brandingSettings.image.bannerImageUrl")), t.$element = t.createHeaderElement(), t.app.options.noCookies || t.channel.renderButton(t.$element.find(".odiofy-widget-header-subscribe-button").get(0))), setTimeout(function() {
                                    t.trigger("ready", [t])
                                })
                            }), t
                        }
                    })
                }, {
                    "./../../../../olivie/src/js/jquery": 7,
                    "./../../../../olivie/src/js/olivie": 14
                }],
                30: [function(e, t, i) {
                    var n = e("./../../../../olivie/src/js/jquery"),
                        o = e("./../../../../olivie/src/js/olivie"),
                        a = e("./../../free-link"),
                        r = e("./../../deactivation"),
                        s = e("./../../custom-css");
                    t.exports = o.component("Widget", function() {
                        this.$e = n("<div></div>")
                    }, {
                        dependencies: ["renderer"],
                        BREAKPOINTS: [1354, 1056, 780, 640, 460, 410],
                        updateBreakpoints: function(e, t, i) {
                            var o = {},
                                a = e.innerWidth(),
                                r = a;
                            return n.each(t, function(e, t) {
                                a <= t ? (o[i + t] = !0, r = t) : o[i + t] = !1
                            }), e.removeClass(Object.keys(o).join(" ")), e.addClass(Object.keys(o).filter(function(e) {
                                return o[e]
                            }).join(" ")), r
                        }
                    }, {
                        $e: null,
                        run: function() {
                            var e = this,
                                t = n(e.renderer.render("widget"));
                            o.utils.css(e.app.$element, {
                                clear: "both"
                            }), t.find("odiofy[data-part]").each(function(t, i) {
                                var o = n(i),
                                    a = o.attr("data-part"),
                                    r = e.app.component(a);
                                r && r.$element ? o.replaceWith(r.$element) : o.remove()
                            }), t.appendTo(e.app.$element), e.app.$element.attr("id", "odiofy_" + e.app.getId()), e.app.$element.css({
                                maxWidth: e.app.options.width
                            }), e.fit(), n(window).resize(function() {
                                e.fit()
                            }), e.app.$element.css({
                                position: "relative"
                            }), e.app.options.customCSS && (e.app.customCss = new s(e, e.app.options.customCSS))
                        },
                        fit: function() {
                            this.constructor.updateBreakpoints(this.app.$element, this.constructor.BREAKPOINTS, "odiofy-mw-")
                        }
                    })
                }, {
                    "./../../../../olivie/src/js/jquery": 7,
                    "./../../../../olivie/src/js/olivie": 14,
                    "./../../custom-css": 17,
                    "./../../deactivation": 18,
                    "./../../free-link": 22
                }],
                31: [function(e, t, i) {
                    var n = e("./../../../../olivie/src/js/jquery"),
                        o = e("./../../../../olivie/src/js/olivie");
                    t.exports = o.component("Error", function() {}, {
                        dependencies: ["renderer"]
                    }, {
                        $element: null,
                        $content: null,
                        $msg: null,
                        createErrorElement: function() {
                            return n(this.renderer.render("error.container"))
                        },
                        run: function() {
                            var e = this;
                            e.$element = e.createErrorElement(), e.$content = e.$element.find(".odiofy-error-content"), e.$element.appendTo(e.app.$element)
                        },
                        "throw": function(e) {
                            var t = this;
                            t.app.get("options.debug") || t.app.$element.hide(), t.$element.addClass("odiofy-visible");
                            var i = n(t.renderer.render("error.content", {
                                message: e
                            }));
                            t.$msg ? t.$msg = t.$msg.replaceWith(i) : (t.$msg = i, t.$msg.appendTo(t.$content))
                        }
                    })
                }, {
                    "./../../../../olivie/src/js/jquery": 7,
                    "./../../../../olivie/src/js/olivie": 14
                }],
                32: [function(e, t, i) {
                    e("./../../../../olivie/src/js/jquery");
                    var n = e("./../../../../olivie/src/js/olivie"),
                        o = e("./model");
                    t.exports = function(e) {
                        return n["class"]("Channel", [o], function(e) {
                            this.getParent("Model").call(this, e)
                        }, {
                            client: e,
                            path: "/channels"
                        }, {
                            renderButton: function(e) {
                                var t = this;
                                setTimeout(function() {
                                    if (window.gapi) gapi.ytsubscribe.render(e, {
                                        channelId: t.id
                                    });
                                    else {
                                        var i = document.createElement("script");
                                        i.src = "https://apis.google.com/js/platform.js", i.onload = function() {
                                            gapi.ytsubscribe.render(e, {
                                                channelId: t.id
                                            })
                                        }, document.head.appendChild(i)
                                    }
                                }, 300)
                            }
                        })
                    }
                }, {
                    "./../../../../olivie/src/js/jquery": 7,
                    "./../../../../olivie/src/js/olivie": 14,
                    "./model": 35
                }],
                33: [function(e, t, i) {
                    e("./../../../../olivie/src/js/jquery");
                    var n = e("./../../../../olivie/src/js/olivie"),
                        o = e("./model");
                    t.exports = function(e) {
                        return n["class"]("CommentThread", [o], function(e) {
                            this.getParent("Model").call(this, e)
                        }, {
                            client: e,
                            path: "/commentThreads"
                        }, {
                            getText: function() {
                                var e = this.get("snippet.topLevelComment.snippet.textDisplay");
                                return e ? e.replace(/<a([^>]+)>/, '<a$1 target="_blank" rel="nofollow">') : null
                            }
                        })
                    }
                }, {
                    "./../../../../olivie/src/js/jquery": 7,
                    "./../../../../olivie/src/js/olivie": 14,
                    "./model": 35
                }],
                34: [function(e, t, i) {
                    var n = e("./../../../../olivie/src/js/jquery"),
                        o = e("./../../../../olivie/src/js/olivie");
                    t.exports = o["class"]("Fetcher", [], function(e, t) {
                        e && t && (this.params = e, this.part = t)
                    }, {
                        create: function(e, t) {
                            return new this(e, t)
                        },
                        fetchDone: function(e, t, i, n, o) {
                            var a = this;
                            Array.prototype.push.apply(n, e.items), t.nextPageToken = e.nextPageToken || null, t.hasNextPage = !!t.nextPageToken;
                            var r = o - n.length;
                            t.hasNextPage && n.length < o ? t.fetch(r, i, n, o) : (n = n.map(function(e) {
                                return a.model.create(e)
                            }), i.resolve(n, t))
                        }
                    }, {
                        params: null,
                        part: null,
                        nextPageToken: null,
                        hasNextPage: !0,
                        hasNext: function() {
                            return this.hasNextPage
                        },
                        fetch: function(e, t, i, o) {
                            var a = this;
                            o = o || e, e = e <= a.constructor.model.MAX_RESULTS_MAX ? e : a.constructor.model.MAX_RESULTS_MAX, t = t || n.Deferred(), i = i || [];
                            var r = n.extend({}, a.params, {
                                part: a.part,
                                maxResults: e
                            });
                            return a.nextPageToken && (r.pageToken = a.nextPageToken), a.hasNextPage ? a.constructor.model.client.get(a.constructor.model.path, r).done(function(e) {
                                a.constructor.fetchDone(e, a, t, i, o)
                            }) : t.reject(), t.promise()
                        },
                        fetchAll: function(e) {
                            var t = this;
                            e = e || n.Deferred();
                            var i = n.extend({}, t.params, {
                                part: t.part,
                                maxResults: t.constructor.model.MAX_RESULTS_MAX
                            });
                            return t.hasNextPage && t.constructor.model.client.get(t.constructor.model.path, i).done(function(i) {
                                t.constructor.fetchDone(i, t, e, [], i.pageInfo.totalResults)
                            }), e.promise()
                        }
                    })
                }, {
                    "./../../../../olivie/src/js/jquery": 7,
                    "./../../../../olivie/src/js/olivie": 14
                }],
                35: [function(e, t, i) {
                    var n = e("./../../../../olivie/src/js/jquery"),
                        o = e("./../../../../olivie/src/js/olivie");
                    t.exports = o["class"]("Model", [], function(e) {
                        e && this.fill(e)
                    }, {
                        MAX_RESULTS_MIN: 0,
                        MAX_RESULTS_MAX: 49,
                        find: function(e, t, i) {
                            var o = this;
                            if (e && t) return i = i || n.Deferred(), e.maxResults = 1, e.part = t, o.client.get(o.path, e).done(function(e) {
                                e.items && e.items.length ? i.resolve(o.create(e.items[0])) : i.reject(e.error ? e.error.message : null)
                            }), i.promise()
                        },
                        findAll: function(e, t, i, o) {
                            var a = this;
                            if (e && t) return o = o || n.Deferred(), e.part = t, i && (e.maxResults = i), a.client.get(a.path, e).done(function(e) {
                                var t = [];
                                e.items && e.items.length ? (n.each(e.items, function(e, i) {
                                    t.push(a.create(i))
                                }), o.resolve(t)) : e.items && !e.items.length ? o.resolve(e.items) : o.reject(e.error ? e.error.message : null)
                            }), o.promise()
                        },
                        create: function(e) {
                            return new this(e)
                        }
                    }, {
                        fill: function(e) {
                            n.extend(this, e)
                        }
                    })
                }, {
                    "./../../../../olivie/src/js/jquery": 7,
                    "./../../../../olivie/src/js/olivie": 14
                }],
                36: [function(e, t, i) {
                    e("./../../../../olivie/src/js/jquery");
                    var n = e("./../../../../olivie/src/js/olivie"),
                        o = e("./model");
                    t.exports = function(e) {
                        return n["class"]("PlaylistItem", [o], function(e) {
                            this.getParent("Model").call(this, e)
                        }, {
                            client: e,
                            path: "/playlistItems"
                        }, {})
                    }
                }, {
                    "./../../../../olivie/src/js/jquery": 7,
                    "./../../../../olivie/src/js/olivie": 14,
                    "./model": 35
                }],
                37: [function(e, t, i) {
                    e("./../../../../olivie/src/js/jquery");
                    var n = e("./../../../../olivie/src/js/olivie"),
                        o = e("./fetcher");
                    t.exports = function(e) {
                        return n["class"]("PlaylistItemsFetcher", [o], function(e, t) {
                            this.getParent("Fetcher").call(this, e, t)
                        }, {
                            model: e
                        }, {})
                    }
                }, {
                    "./../../../../olivie/src/js/jquery": 7,
                    "./../../../../olivie/src/js/olivie": 14,
                    "./fetcher": 34
                }],
                38: [function(e, t, i) {
                    e("./../../../../olivie/src/js/jquery");
                    var n = e("./../../../../olivie/src/js/olivie"),
                        o = e("./model");
                    t.exports = function(e) {
                        return n["class"]("Playlist", [o], function(e) {
                            this.getParent("Model").call(this, e)
                        }, {
                            client: e,
                            path: "/playlists"
                        }, {})
                    }
                }, {
                    "./../../../../olivie/src/js/jquery": 7,
                    "./../../../../olivie/src/js/olivie": 14,
                    "./model": 35
                }],
                39: [function(e, t, i) {
                    e("./../../../../olivie/src/js/jquery");
                    var n = e("./../../../../olivie/src/js/olivie"),
                        o = e("./fetcher");
                    t.exports = function(e) {
                        return n["class"]("PlaylistsFetcher", [o], function(e, t) {
                            this.getParent("Fetcher").call(this, e, t)
                        }, {
                            model: e
                        }, {})
                    }
                }, {
                    "./../../../../olivie/src/js/jquery": 7,
                    "./../../../../olivie/src/js/olivie": 14,
                    "./fetcher": 34
                }],
                40: [function(e, t, i) {
                    var n = e("./../../../../olivie/src/js/jquery"),
                        o = e("./../../../../olivie/src/js/olivie");
                    t.exports = o["class"]("ProxyStorage", [], function(e, t) {
                        var i = this;
                        i.fetcher = e, i.orderingRules = [], t = o.utils.unifyMultipleOption(t) || [], n.each(t, function(e, t) {
                            t = t.split("#");
                            var n = i.constructor.ORDER_FIELD_ALIASES[t[0]] || t[0],
                                o = t[1] || "asc";
                            i.orderingRules.push({
                                field: n,
                                direction: o
                            })
                        })
                    }, {
                        ORDER_FIELD_ALIASES: {
                            likes: "statistics.likeCount",
                            dislikes: "statistics.dislikeCount",
                            views: "statistics.viewCount",
                            comments: "statistics.commentCount",
                            position: "__relatedPlaylistItem.snippet.position"
                        }
                    }, {
                        fetcher: null,
                        result: null,
                        orderingRules: null,
                        pointer: 0,
                        prepare: function() {
                            var e = this,
                                t = n.Deferred();
                            return e.fetcher.prepare().done(function() {
                                e.fetcher.fetchAll().done(function(i) {
                                    e.result = i, e.sortResult(), t.resolve()
                                })
                            }), t.promise()
                        },
                        sortResult: function() {
                            var e = this;
                            n.each(e.orderingRules, function(t, i) {
                                var n;
                                "random" === i.field ? o.utils.shuffle(e.result) : ((n = jQuery.odiofy.orderFunctions[i.field]) || (n = function(e, t) {
                                    var n = o.utils.getProperty(e, i.field, o.utils.parseInt),
                                        a = o.utils.getProperty(t, i.field, o.utils.parseInt);
                                    return n < a ? -1 : a < n ? 1 : 0
                                }), e.result.sort(n), "desc" === i.direction && e.result.reverse())
                            })
                        },
                        isReady: function() {
                            return this.fetcher.isReady()
                        },
                        hasNext: function() {
                            return this.result.length > this.pointer
                        },
                        fetch: function(e, t, i, o) {
                            var a, r, s, l, p = this;
                            return o = o || n.Deferred(), p.isReady() && p.hasNext() ? (p.pointer += e, "" !== t && (p.result = (r = p.result, l = (s = function(e) {
                                return e.toLowerCase().trim().replace(/[_+-.,!@#$%^&*();\/|<>"':?\d]/g, "")
                            })(t), r = r.filter(function(e) {
                                var t = e.snippet,
                                    n = s(t.title),
                                    o = s(t.description);
                                return "title&description" === i ? -1 !== n.indexOf(l) || -1 !== o.indexOf(l) : -1 !== n.indexOf(l)
                            }))), a = p.result.slice(p.pointer - e, p.pointer), o.resolve(a)) : o.reject(), o.promise()
                        }
                    })
                }, {
                    "./../../../../olivie/src/js/jquery": 7,
                    "./../../../../olivie/src/js/olivie": 14
                }],
                41: [function(e, t, i) {
                    var n = e("./../../../../olivie/src/js/jquery"),
                        o = e("./../../../../olivie/src/js/olivie");
                    t.exports = o["class"]("UniversalVideoFetcher", [], function(e, t, i) {
                        var n = this;
                        n.rawSource = e, n.part = t, n.youtube = i, n.preparedSource = [], n.fetchers = [], n.stack = [], n.videoPlaylistItemRelations = {}
                    }, {
                        stackSortingFunc: function(e, t) {
                            var i = e.getPublishedTimestamp(),
                                n = t.getPublishedTimestamp();
                            return n < i ? -1 : i < n ? 1 : 0
                        }
                    }, {
                        youtube: null,
                        rawSource: null,
                        preparedSource: null,
                        fetchers: null,
                        stack: null,
                        part: null,
                        videoPlaylistItemRelations: null,
                        isReady: function() {
                            return !!this.fetchers.length
                        },
                        sortStack: function() {
                            this.stack.sort(this.constructor.stackSortingFunc)
                        },
                        hasNext: function() {
                            return this.stack && this.stack.length || this.fetchers.some(function(e) {
                                return e.hasNext()
                            })
                        },
                        prepare: function() {
                            var e = this,
                                t = n.Deferred(),
                                i = [];
                            return n.each(e.rawSource, function(t, a) {
                                var r = n.Deferred();
                                "youtube#channel" === a.kind ? e.youtube.model(a.kind).find(a.criteria, "contentDetails").done(function(e) {
                                    var t = o.utils.getProperty(e, "contentDetails.relatedPlaylists.uploads");
                                    t && r.resolve({
                                        kind: "youtube#playlist",
                                        criteria: {
                                            id: t
                                        }
                                    })
                                }) : r.resolve(a), i.push(r)
                            }), n.when.apply(n, i).done(function() {
                                var i = [],
                                    o = [];
                                n.each(arguments, function(e, t) {
                                    "youtube#playlist" === t.kind ? i.push(t) : o.push(t.criteria.id)
                                }), e.preparedSource = i, o.length && e.preparedSource.push({
                                    kind: "youtube#video",
                                    criteria: {
                                        id: o
                                    }
                                }), n.each(e.preparedSource, function(t, i) {
                                    var n, o, a, r;
                                    r = "youtube#playlist" === i.kind ? (a = "youtube#playlistItem", o = {
                                        playlistId: i.criteria.id
                                    }, "contentDetails,snippet") : (a = i.kind, o = {
                                        id: i.criteria.id.join(",")
                                    }, e.part), n = e.youtube.fetcher(a).create(o, r), e.fetchers.push(n)
                                }), t.resolve()
                            }), t.promise()
                        },
                        fetch: function(e, t, i, o) {
                            t = t || "", i = i || "title";
                            var a, r, s = this;
                            o = o || n.Deferred();
                            var l = [],
                                p = s.hasNext();
                            return s.isReady() ? s.stack.length >= e || !p && s.stack.length ? (a = s.stack.slice(0, e), s.stack.splice(0, e), o.resolve(a)) : p ? (n.each(s.fetchers, function(i, n) {
                                n.hasNext() && !l.length && l.push(n.fetch("" !== t ? 49 : e))
                            }), !l.length && s.stack && s.stack.length && (r = s.stack.slice(), s.stack = [], o.resolve(r)), n.when.apply(n, l).done(function() {
                                var a = [],
                                    r = "object" === n.type(arguments[1]) ? [arguments] : arguments;
                                n.each(r, function(e, n) {
                                    if (n) {
                                        var o, r, l, p = n[0],
                                            d = n[1];
                                        "" !== t && (o = p, l = (r = function(e) {
                                            return e.toLowerCase().trim().replace(/[_+-.,!@#$%^&*();\/|<>"':?\d]/g, "")
                                        })(t), p = o = o.filter(function(e) {
                                            var t = e.snippet,
                                                n = r(t.title),
                                                o = r(t.description);
                                            return "title&description" === i ? -1 !== n.indexOf(l) || -1 !== o.indexOf(l) : -1 !== n.indexOf(l)
                                        })), "VideoFetcher" === d.constructor.id ? Array.prototype.push.apply(s.stack, p) : Array.prototype.push.apply(a, p.map(function(e) {
                                            return (s.videoPlaylistItemRelations[e.contentDetails.videoId] = e).contentDetails.videoId
                                        }))
                                    }
                                });
                                var l = n.Deferred();
                                a.length ? s.youtube.model("youtube#video").findAllVideos({
                                    id: a.join(",")
                                }, s.part).done(function(e) {
                                    Array.prototype.push.apply(s.stack, e), n.each(s.stack, function(e, t) {
                                        t.__relatedPlaylistItem = s.videoPlaylistItemRelations[t.id]
                                    }), l.resolve()
                                }) : s.fetch(e, t, i, o), l.done(function() {
                                    s.fetch(e, t, i, o)
                                })
                            })) : o.reject(1) : o.reject(0), o.promise()
                        },
                        fetchAll: function(e, t) {
                            var i = this;
                            return e = e || n.Deferred(), t = t || [], i.fetch(49).done(function(n) {
                                Array.prototype.push.apply(t, n), i.fetchAll(e, t)
                            }).fail(function() {
                                e.resolve(t)
                            }), e.promise()
                        }
                    })
                }, {
                    "./../../../../olivie/src/js/jquery": 7,
                    "./../../../../olivie/src/js/olivie": 14
                }],
                42: [function(e, t, i) {
                    var n = e("./../../../../olivie/src/js/jquery"),
                        o = e("./../../../../olivie/src/js/olivie"),
                        a = e("./fetcher");
                    t.exports = function(e) {
                        return o["class"]("VideoFetcher", [a], function(e, t) {
                            this.getParent("Fetcher").call(this, e, t), this.stack = []
                        }, {
                            model: e
                        }, {
                            stack: null,
                            hasNext: function() {
                                return this.hasNextPage || this.stack.length
                            },
                            fetch: function(e, t, i, o) {
                                var a = this;
                                o = o || e, t = t || n.Deferred(), i = i || [];
                                var r = n.Deferred();
                                return a.hasNext() ? (a.stack.length ? r.resolve() : (a.hasNextPage = !1, a.constructor.model.findAllVideos({
                                    id: a.params.id
                                }, a.part).done(function(e) {
                                    a.stack = e, r.resolve()
                                }).fail(function() {
                                    t.reject()
                                })), r.done(function() {
                                    var i = a.stack.slice(0, e);
                                    a.stack.splice(0, e), i.length ? t.resolve(i, a) : t.reject()
                                })) : t.reject(), t.promise()
                            }
                        })
                    }
                }, {
                    "./../../../../olivie/src/js/jquery": 7,
                    "./../../../../olivie/src/js/olivie": 14,
                    "./fetcher": 34
                }],
                43: [function(e, t, i) {
                    var n = e("./../../../../olivie/src/js/jquery"),
                        o = e("./../../../../olivie/src/js/olivie"),
                        a = e("./model");
                    t.exports = function(e) {
                        return o["class"]("Video", [a], function(e) {
                            this.getParent("Model").call(this, e)
                        }, {
                            DURATION_REGEX: /\d+[A-Z]/g,
                            client: e,
                            path: "/videos",
                            findAllVideos: function(e, t, i, o, a) {
                                var r, s = this;
                                return o = o || n.Deferred(), e && e.id ? (e.id = "string" === n.type(e.id) ? e.id.split(",") : e.id, e.id = i ? e.id.slice(0, i) : e.id, a || e.id.length > s.MAX_RESULTS_MAX ? (a = a || [], r = n.extend(!1, {}, e, {
                                    id: e.id.slice(0, s.MAX_RESULTS_MAX).join(",")
                                }), s.findAll(r, t).done(function(i) {
                                    Array.prototype.push.apply(a, i);
                                    var r, l = e.id.slice(s.MAX_RESULTS_MAX);
                                    l.length ? (r = n.extend(!1, {}, e, {
                                        id: l
                                    }), s.findAllVideos(r, t, null, o, a)) : o.resolve(a)
                                }).fail(function(e) {
                                    e && console.error(e)
                                })) : (e.id = e.id.join(","), s.findAll(e, t, i, o))) : s.findAll(e, t, i, o), o.promise()
                            }
                        }, {
                            getPublishedTimestamp: function() {
                                return this.get("snippet.publishedAt", Date.parse)
                            },
                            parseDuration: function() {
                                var e = {},
                                    t = this.get("contentDetails.duration");
                                if (t) {
                                    var i = t.match(this.constructor.DURATION_REGEX);
                                    return n.each(i, function(t, i) {
                                        var n = i.substr(i.length - 1).toLowerCase(),
                                            o = "0" + parseInt(i.substr(0, i.length - 1), 10);
                                        o = o.substr(-2), e[n] = o
                                    }), e
                                }
                            }
                        })
                    }
                }, {
                    "./../../../../olivie/src/js/jquery": 7,
                    "./../../../../olivie/src/js/olivie": 14,
                    "./model": 35
                }],
                44: [function(e, t, i) {
                    var n = e("./../../../../olivie/src/js/jquery"),
                        o = e("./../../../../olivie/src/js/olivie"),
                        a = e("./universal-video-fetcher"),
                        r = e("./channel"),
                        s = e("./playlist"),
                        l = e("./playlist-item"),
                        p = e("./video"),
                        d = e("./comment-thread"),
                        c = e("./playlists-fetcher"),
                        u = e("./playlist-items-fetcher"),
                        m = e("./video-fetcher");
                    t.exports = o.component("Youtube", function() {}, {
                        dependencies: ["client"],
                        SOURCE_DETERMINANTS: [{
                            kind: "youtube#channel",
                            regex: /^https?:\/\/(www\.)?youtube\.com\/channel\/([^\/]+)\/?$/,
                            func: function(e) {
                                return {
                                    criteria: {
                                        id: e[2]
                                    }
                                }
                            }
                        }, {
                            kind: "youtube#channel",
                            regex: /^https?:\/\/(www\.)?youtube\.com\/user\/([^\/]+)\/?$/,
                            func: function(e) {
                                return {
                                    criteria: {
                                        forUsername: e[2]
                                    }
                                }
                            }
                        }, {
                            kind: "youtube#playlist",
                            regex: /^https?:\/\/(www\.)?youtube\.com\/playlist\/?\?list=([^$]+)$/,
                            func: function(e) {
                                return {
                                    criteria: {
                                        id: e[2]
                                    }
                                }
                            }
                        }, {
                            kind: "youtube#video",
                            regex: /^https?:\/\/(www\.)?youtube\.com\/watch\/?\?v=([^$&]+)/,
                            func: function(e) {
                                return {
                                    criteria: {
                                        id: e[2]
                                    }
                                }
                            }
                        }],
                        formatNumberDigits: function(e) {
                            return o.utils.numberFormat(e, 0, null, " ")
                        }
                    }, {
                        models: null,
                        register: function(e) {
                            var t = this;
                            t.getParent("Component").prototype.register.call(t, e), t.models = {
                                "youtube#channel": r(t.client),
                                "youtube#playlist": s(t.client),
                                "youtube#playlistItem": l(t.client),
                                "youtube#video": p(t.client),
                                "youtube#commentThread": d(t.client)
                            }, t.fetchers = {
                                "youtube#playlist": c(t.model("youtube#playlist")),
                                "youtube#playlistItem": u(t.model("youtube#playlistItem")),
                                "youtube#video": m(t.model("youtube#video"))
                            }
                        },
                        hasModel: function(e) {
                            return !!this.models[e]
                        },
                        model: function(e) {
                            if (this.hasModel(e)) return this.models[e]
                        },
                        hasFetcher: function(e) {
                            return !!this.fetchers[e]
                        },
                        fetcher: function(e) {
                            if (this.hasFetcher(e)) return this.fetchers[e]
                        },
                        createUniversalVideoFetcher: function(e, t) {
                            return new a(e, t, this)
                        },
                        parseSource: function(e) {
                            var t = null;
                            return n.each(this.constructor.SOURCE_DETERMINANTS, function(i, o) {
                                var a = e.match(o.regex);
                                if (a) return t = n.extend({
                                    kind: o.kind
                                }, o.func(a)), !1
                            }), t
                        },
                        resizeLogo: function(e, t) {
                            return e.replace(/\/s\d+-c-k-no/, "/s" + parseInt(t, 10) + "-c-k-no")
                        }
                    })
                }, {
                    "./../../../../olivie/src/js/jquery": 7,
                    "./../../../../olivie/src/js/olivie": 14,
                    "./channel": 32,
                    "./comment-thread": 33,
                    "./playlist": 38,
                    "./playlist-item": 36,
                    "./playlist-items-fetcher": 37,
                    "./playlists-fetcher": 39,
                    "./universal-video-fetcher": 41,
                    "./video": 43,
                    "./video-fetcher": 42
                }],
                45: [function(e, t, i) {
                    t.exports = {
                        "default": {
                            header: {
                                bg: "rgb(250, 250, 250)",
                                bannerOverlay: "rgba(255, 255, 255, 0.92)",
                                channelName: "rgb(17, 17, 17)",
                                channelNameHover: "rgb(17, 17, 17)",
                                channelDescription: "rgb(17, 17, 17)",
                                anchor: "rgb(17, 17, 17)",
                                anchorHover: "rgb(17, 17, 17)",
                                counters: "rgba(17, 17, 17, 0.7)"
                            },
                            groups: {
                                bg: "rgb(250, 250, 250)",
                                link: "rgba(17, 17, 17, 0.5)",
                                linkHover: "rgb(17, 17, 17)",
                                linkActive: "rgb(17, 17, 17)",
                                highlightHover: "rgb(17, 17, 17)",
                                highlightActive: "rgb(17, 17, 17)"
                            },
                            content: {
                                bg: "rgb(255, 255, 255)",
                                arrows: "rgb(0, 0, 0)",
                                arrowsHover: "rgb(0, 0, 0)",
                                arrowsBg: "rgba(255, 255, 255, 0.8)",
                                arrowsBgHover: "rgba(255, 255, 255, 1)",
                                scrollbarBg: "rgb(204, 204, 204)",
                                scrollbarSliderBg: "rgba(0, 0, 0, 0.4)"
                            },
                            video: {
                                bg: "rgb(255, 255, 255)",
                                overlay: "rgba(255, 255, 255, 0.95)",
                                playIcon: "rgba(255, 255, 255, 0.4)",
                                playIconHover: "rgba(255, 255, 255, 0.8)",
                                duration: "rgb(255, 255, 255)",
                                durationBg: "rgba(34, 34, 34, 0.81)",
                                title: "rgb(17, 17, 17)",
                                titleHover: "rgb(17, 17, 17)",
                                date: "rgba(17, 17, 17, 0.7)",
                                description: "rgb(17, 17, 17)",
                                anchor: "rgb(26, 137, 222)",
                                anchorHover: "rgb(47, 165, 255)",
                                counters: "rgba(17, 17, 17, 0.7)"
                            },
                            popup: {
                                bg: "rgb(255, 255, 255)",
                                overlay: "rgba(0, 0, 0, 0.7)",
                                title: "rgb(17, 17, 17)",
                                channelName: "rgb(17, 17, 17)",
                                channelNameHover: "rgb(17, 17, 17)",
                                viewsCounter: "rgba(17, 17, 17, 0.7)",
                                likesRatio: "rgb(47, 165, 255)",
                                dislikesRatio: "rgb(207, 207, 207)",
                                likesCounter: "rgba(17, 17, 17, 0.5)",
                                dislikesCounter: "rgba(17, 17, 17, 0.5)",
                                share: "rgba(17, 17, 17, 0.5)",
                                date: "rgba(17, 17, 17, 0.7)",
                                description: "rgb(17, 17, 17)",
                                anchor: "rgb(26, 137, 222)",
                                anchorHover: "rgb(47, 165, 255)",
                                descriptionMoreButton: "rgba(17, 17, 17, 0.5)",
                                descriptionMoreButtonHover: "rgba(17, 17, 17, 0.7)",
                                commentsUsername: "rgb(17, 17, 17)",
                                commentsUsernameHover: "rgb(17, 17, 17)",
                                commentsPassedTime: "rgba(17, 17, 17, 0.7)",
                                commentsText: "rgb(17, 17, 17)",
                                commentsLikes: "rgba(17, 17, 17, 0.5)",
                                controls: "rgb(160, 160, 160)",
                                controlsHover: "rgb(220, 220, 220)",
                                controlsMobile: "rgb(220, 220, 220)",
                                controlsMobileBg: "rgba(255, 255, 255, 0)"
                            }
                        },
                        dark: {
                            header: {
                                bg: "rgb(51, 51, 51)",
                                bannerOverlay: "rgba(51, 51, 51, 0.81)",
                                channelName: "rgb(255, 255, 255)",
                                channelNameHover: "rgb(77, 178, 255)",
                                channelDescription: "rgb(255, 255, 255)",
                                anchor: "rgb(77, 178, 255)",
                                anchorHover: "rgb(255, 255, 255)",
                                counters: "rgb(160, 160, 160)"
                            },
                            groups: {
                                bg: "rgb(51, 51, 51)",
                                link: "rgba(255, 255, 255, 0.5)",
                                linkHover: "rgb(255, 66, 66)",
                                linkActive: "rgb(255, 66, 66)",
                                highlight: "rgb(85, 85, 85)",
                                highlightHover: "rgb(255, 66, 66)",
                                highlightActive: "rgb(255, 66, 66)"
                            },
                            content: {
                                bg: "rgb(51, 51, 51)",
                                arrows: "rgb(34, 34, 34)",
                                arrowsHover: "rgb(255, 0, 0)",
                                arrowsBg: "rgba(255, 255, 255, 0.4)",
                                arrowsBgHover: "rgba(255, 255, 255, 0.8)",
                                scrollbarBg: "rgb(85, 85, 85)",
                                scrollbarSliderBg: "rgba(255, 255, 255, 0.4)"
                            },
                            video: {
                                bg: "rgb(28, 28, 28)",
                                overlay: "rgba(28, 28, 28, 0.9)",
                                playIcon: "rgba(255, 255, 255, 0.4)",
                                playIconHover: "rgba(255, 255, 255, 0.8)",
                                duration: "rgb(255, 255, 255)",
                                durationBg: "rgba(28, 28, 28, 0.81)",
                                title: "rgb(200, 200, 200)",
                                titleHover: "rgb(77, 178, 255)",
                                date: "rgb(116, 116, 116)",
                                description: "rgb(200, 200, 200)",
                                anchor: "rgb(42, 163, 255)",
                                anchorHover: "rgb(77, 178, 255)",
                                counters: "rgb(112, 112, 112)"
                            },
                            popup: {
                                bg: "rgb(51, 51, 51)",
                                overlay: "rgba(0, 0, 0, 0.7)",
                                title: "rgb(255, 255, 255)",
                                channelName: "rgb(255, 255, 255)",
                                channelNameHover: "rgb(77, 178, 255)",
                                viewsCounter: "rgb(255, 255, 255)",
                                likesRatio: "rgb(47, 165, 255)",
                                dislikesRatio: "rgb(100, 100, 100)",
                                likesCounter: "rgb(144, 144, 144)",
                                dislikesCounter: "rgb(144, 144, 144)",
                                share: "rgb(144, 144, 144)",
                                date: "rgb(255, 255, 255)",
                                description: "rgb(255, 255, 255)",
                                anchor: "rgb(42, 163, 255)",
                                anchorHover: "rgb(77, 178, 255)",
                                descriptionMoreButton: "rgb(120, 120, 120)",
                                descriptionMoreButtonHover: "rgb(255, 255, 255)",
                                commentsUsername: "rgb(255, 255, 255)",
                                commentsUsernameHover: "rgb(77, 178, 255)",
                                commentsPassedTime: "rgb(116, 116, 116)",
                                commentsText: "rgb(255, 255, 255)",
                                commentsLikes: "rgb(116, 116, 116)",
                                controls: "rgb(160, 160, 160)",
                                controlsHover: "rgb(220, 220, 220)",
                                controlsMobile: "rgb(220, 220, 220)",
                                controlsMobileBg: "rgba(255, 255, 255, 0)"
                            }
                        },
                        red: {
                            header: {
                                bg: "rgb(197, 17, 9)",
                                bannerOverlay: "rgb(197, 17, 9)",
                                channelName: "rgb(255, 255, 255)",
                                channelNameHover: "rgba(255, 255, 255, 0.9)",
                                channelDescription: "rgb(255, 255, 255)",
                                anchor: "rgba(255, 255, 255, 0.9)",
                                anchorHover: "rgb(255, 255, 255)",
                                counters: "rgba(255, 255, 255, 0.6)"
                            },
                            groups: {
                                bg: "rgb(230, 33, 23)",
                                link: "rgba(255, 255, 255, 0.6)",
                                linkHover: "rgb(255, 255, 255)",
                                linkActive: "rgb(255, 255, 255)",
                                highlight: "rgba(255, 255, 255, 0.4)",
                                highlightHover: "rgb(255, 255, 255)",
                                highlightActive: "rgb(255, 255, 255)"
                            },
                            content: {
                                bg: "rgb(255, 255, 255)",
                                arrows: "rgb(255, 255, 255)",
                                arrowsHover: "rgb(0, 198, 255)",
                                arrowsBg: "rgba(0, 0, 0, 0.7)",
                                arrowsBgHover: "rgba(0, 0, 0, 0.95)",
                                scrollbarBg: "rgb(223, 223, 223)",
                                scrollbarSliderBg: "rgba(133, 133, 133, 0.4)"
                            },
                            video: {
                                bg: "rgb(255, 255, 255)",
                                overlay: "rgba(255, 255, 255, 0.95)",
                                playIcon: "rgba(255, 255, 255, 0.4)",
                                playIconHover: "rgba(255, 255, 255, 0.8)",
                                duration: "rgb(209, 238, 246)",
                                durationBg: "rgba(5, 25, 43, 0.81)",
                                title: "rgb(0, 0, 0)",
                                titleHover: "rgb(255, 26, 54)",
                                date: "rgb(177, 177, 177)",
                                description: "rgb(80, 80, 80)",
                                anchor: "rgb(255, 26, 54)",
                                anchorHover: "rgb(0, 0, 0)",
                                counters: "rgb(177, 177, 177)"
                            },
                            popup: {
                                bg: "rgb(255, 255, 255)",
                                overlay: "rgba(12, 2, 2, 0.8)",
                                title: "rgb(0, 0, 0)",
                                channelName: "rgb(0, 0, 0)",
                                channelNameHover: "rgb(255, 26, 54)",
                                viewsCounter: "rgb(85, 85, 85)",
                                likesRatio: "rgb(47, 165, 255)",
                                dislikesRatio: "rgb(207, 207, 207)",
                                likesCounter: "rgb(144, 144, 144)",
                                dislikesCounter: "rgb(144, 144, 144)",
                                share: "rgb(144, 144, 144)",
                                date: "rgb(80, 80, 80)",
                                description: "rgb(80, 80, 80)",
                                anchor: "rgb(255, 26, 54)",
                                anchorHover: "rgb(0, 0, 0)",
                                descriptionMoreButton: "rgb(177, 177, 177)",
                                descriptionMoreButtonHover: "rgb(80, 80, 80)",
                                commentsUsername: "rgb(0, 0, 0)",
                                commentsUsernameHover: "rgb(255, 26, 54)",
                                commentsPassedTime: "rgb(177, 177, 177)",
                                commentsText: "rgb(80, 80, 80)",
                                commentsLikes: "rgb(180, 180, 180)",
                                controls: "rgb(160, 160, 160)",
                                controlsHover: "rgb(220, 220, 220)",
                                controlsMobile: "rgb(220, 220, 220)",
                                controlsMobileBg: "rgba(255, 255, 255, 0)"
                            }
                        },
                        "deep blue": {
                            header: {
                                bg: "rgb(50, 81, 108)",
                                bannerOverlay: "rgba(50, 81, 108, 0.81)",
                                channelName: "rgb(255, 255, 255)",
                                channelNameHover: "rgb(98, 220, 255)",
                                channelDescription: "rgb(209, 238, 246)",
                                anchor: "rgb(98, 220, 255)",
                                anchorHover: "rgb(255, 255, 255)",
                                counters: "rgb(140, 170, 197)"
                            },
                            groups: {
                                bg: "rgb(33, 56, 75)",
                                link: "rgb(255, 255, 255, 0.5)",
                                linkHover: "rgb(98, 220, 255)",
                                linkActive: "rgb(98, 220, 255)",
                                highlight: "rgb(50, 81, 108)",
                                highlightHover: "rgb(0, 198, 255)",
                                highlightActive: "rgb(0, 198, 255)"
                            },
                            content: {
                                bg: "rgb(33, 56, 75)",
                                arrows: "rgb(255, 255, 255)",
                                arrowsHover: "rgb(0, 198, 255)",
                                arrowsBg: "rgba(0, 0, 0, 0.7)",
                                arrowsBgHover: "rgba(0, 0, 0, 0.95)",
                                scrollbarBg: "rgb(50, 81, 108)",
                                scrollbarSliderBg: "rgb(66, 114, 156)"
                            },
                            video: {
                                bg: "rgb(33, 56, 75)",
                                overlay: "rgba(5, 25, 43, 0.9)",
                                playIcon: "rgba(255, 255, 255, 0.4)",
                                playIconHover: "rgba(255, 255, 255, 0.8)",
                                duration: "rgb(209, 238, 246)",
                                durationBg: "rgba(5, 25, 43, 0.81)",
                                title: "rgb(0, 198, 255)",
                                titleHover: "rgb(255, 255, 255)",
                                date: "rgba(90, 130, 165, 1)",
                                description: "rgb(209, 238, 246)",
                                anchor: "rgb(0, 198, 255)",
                                anchorHover: "rgb(255, 255, 255)",
                                counters: "rgba(90, 130, 165, 1)"
                            },
                            popup: {
                                bg: "rgb(33, 56, 75)",
                                overlay: "rgba(4, 17, 28, 0.8)",
                                title: "rgb(255, 255, 255)",
                                channelName: "rgb(255, 255, 255)",
                                channelNameHover: "rgb(0, 198, 255)",
                                viewsCounter: "rgb(255, 255, 255)",
                                likesRatio: "rgb(44, 138, 218)",
                                dislikesRatio: "rgb(51, 79, 102)",
                                likesCounter: "rgba(90, 130, 165, 1)",
                                dislikesCounter: "rgba(90, 130, 165, 1)",
                                share: "rgba(90, 130, 165, 1)",
                                date: "rgba(90, 130, 165, 1)",
                                description: "rgb(209, 238, 246)",
                                anchor: "rgb(0, 198, 255)",
                                anchorHover: "rgb(255, 255, 255)",
                                descriptionMoreButton: "rgba(90, 130, 165, 1)",
                                descriptionMoreButtonHover: "rgb(209, 238, 246)",
                                commentsUsername: "rgb(255, 255, 255)",
                                commentsUsernameHover: "rgb(0, 198, 255)",
                                commentsPassedTime: "rgba(90, 130, 165, 1)",
                                commentsText: "rgb(209, 238, 246)",
                                commentsLikes: "rgba(90, 130, 165, 1)",
                                controls: "rgb(68, 107, 140)",
                                controlsHover: "rgb(0, 198, 255)",
                                controlsMobile: "rgb(68, 107, 140)",
                                controlsMobileBg: "rgb(33, 56, 75)"
                            }
                        }
                    }
                }, {}],
                46: [function(e, i, n) {
                    var o = {};
                    o.ads = t.template({
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            var o, a = t.helperMissing,
                                r = "function",
                                s = this.escapeExpression;
                            return '<ins class="adsbygoogle" style="width:' + s(typeof(o = null != (o = t.width || (null != e ? e.width : e)) ? o : a) === r ? o.call(e, {
                                name: "width",
                                hash: {},
                                data: n
                            }) : o) + "px;height:" + s(typeof(o = null != (o = t.height || (null != e ? e.height : e)) ? o : a) === r ? o.call(e, {
                                name: "height",
                                hash: {},
                                data: n
                            }) : o) + 'px" data-ad-client="' + s(typeof(o = null != (o = t.pubId || (null != e ? e.pubId : e)) ? o : a) === r ? o.call(e, {
                                name: "pubId",
                                hash: {},
                                data: n
                            }) : o) + '" data-ad-slot="' + s(typeof(o = null != (o = t.slotId || (null != e ? e.slotId : e)) ? o : a) === r ? o.call(e, {
                                name: "slotId",
                                hash: {},
                                data: n
                            }) : o) + '"></ins>'
                        },
                        useData: !0
                    }), o.colorizer = t.template({
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            var o, a, r = t.helperMissing,
                                s = "function",
                                l = this.escapeExpression,
                                p = this.lambda;
                            return " #odiofy_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-widget-header { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.header : o) ? o.bg : o, e)) + "; } #odiofy_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-widget-header-overlay { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.header : o) ? o.bannerOverlay : o, e)) + "; } #odiofy_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-widget-header-channel-title, #odiofy_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-widget-header-channel-title a { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.header : o) ? o.channelName : o, e)) + "; } #odiofy_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-widget-header-channel-title:hover, #odiofy_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-widget-header-channel-title a:hover { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.header : o) ? o.channelNameHover : o, e)) + "; } #odiofy_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-widget-header-channel-caption { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.header : o) ? o.channelDescription : o, e)) + "; } #odiofy_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-widget-header-channel-caption a { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.header : o) ? o.anchor : o, e)) + "; } #odiofy_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-widget-header-channel-caption a:hover { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.header : o) ? o.anchorHover : o, e)) + "; } #odiofy_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-widget-header-channel-properties-item { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.header : o) ? o.counters : o, e)) + "; }  #odiofy_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-widget-nav { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.groups : o) ? o.bg : o, e)) + "; } #odiofy_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-widget-nav-list-item a { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.groups : o) ? o.link : o, e)) + "; } #odiofy_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-widget-nav-list-item:hover a { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.groups : o) ? o.linkHover : o, e)) + "; } #odiofy_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-widget-nav-list-item.odiofy-active a, #odiofy_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-widget-nav-list-item.odiofy-active:hover a { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.groups : o) ? o.linkActive : o, e)) + "; } #odiofy_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-widget-nav-list-item:hover::after { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.groups : o) ? o.highlightHover : o, e)) + "; } #odiofy_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-widget-nav-list-item.odiofy-active:hover::after, #odiofy_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-widget-nav-list-item.odiofy-active::after { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.groups : o) ? o.highlightActive : o, e)) + "; } #odiofy_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-widget-nav-control-left::before { background: linear-gradient(to left, rgba(255, 255, 255, 0), " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.groups : o) ? o.bg : o, e)) + " 60%); } #odiofy_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-widget-nav-control-right::before { background: linear-gradient(to right, rgba(255, 255, 255, 0), " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.groups : o) ? o.bg : o, e)) + " 60%); } #odiofy_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-widget-nav-control span::before, #odiofy_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-widget-nav-control span::after { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.groups : o) ? o.link : o, e)) + "; } #odiofy_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-widget-nav-control:hover span::before, #odiofy_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-widget-nav-control:hover span::after { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.groups : o) ? o.linkActive : o, e)) + "; }  #odiofy_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-widget-feed { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.content : o) ? o.bg : o, e)) + "; } #odiofy_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-widget-feed-section-arrow { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.content : o) ? o.arrowsBg : o, e)) + "; } #odiofy_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-widget-feed-section-arrow:hover { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.content : o) ? o.arrowsBgHover : o, e)) + "; } #odiofy_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-widget-feed-section-arrow span::before, #odiofy_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-widget-feed-section-arrow span::after, #odiofy_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-widget-feed-section-arrow::before { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.content : o) ? o.arrows : o, e)) + "; } #odiofy_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-widget-feed-section-arrow:hover span::before, #odiofy_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-widget-feed-section-arrow:hover span::after, #odiofy_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-widget-feed-section-arrow:hover::before { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.content : o) ? o.arrowsHover : o, e)) + "; } #odiofy_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-widget-feed-section-scrollbar { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.content : o) ? o.scrollbarBg : o, e)) + "; } #odiofy_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-widget-feed-section-scrollbar .swiper-scrollbar-drag { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.content : o) ? o.scrollbarSliderBg : o, e)) + "; }  #odiofy_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-widget-video { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.video : o) ? o.bg : o, e)) + "; } #odiofy_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-widget-feed-section-slide { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.video : o) ? o.bg : o, e)) + "; } #odiofy_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-widget-video-overlay { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.video : o) ? o.overlay : o, e)) + "; } #odiofy_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-widget-video-preview-play { border-left-color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.video : o) ? o.playIcon : o, e)) + "; } #odiofy_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-widget-video:hover .odiofy-widget-video-preview-play { border-left-color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.video : o) ? o.playIconHover : o, e)) + "; } #odiofy_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-widget-video-preview-marker-duration { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.video : o) ? o.durationBg : o, e)) + "; color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.video : o) ? o.duration : o, e)) + "; } #odiofy_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-widget-video-info-title { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.video : o) ? o.title : o, e)) + "; } #odiofy_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-widget-video-info-title:hover { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.video : o) ? o.titleHover : o, e)) + "; } #odiofy_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-widget-video-info-passed-time { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.video : o) ? o.date : o, e)) + "; } #odiofy_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-widget-video-info-caption { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.video : o) ? o.description : o, e)) + "; } #odiofy_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-widget-video-info-properties-item { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.video : o) ? o.counters : o, e)) + "; } #odiofy_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-widget-video-info-caption a { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.video : o) ? o.anchor : o, e)) + "; } #odiofy_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-widget-video-info-caption a:hover { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.video : o) ? o.anchorHover : o, e)) + "; }  #odiofy_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-popup-inner { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.bg : o, e)) + "; } #odiofy_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-popup-inner a { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.anchor : o, e)) + "; } #odiofy_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-popup-inner a:hover { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.anchorHover : o, e)) + "; } #odiofy_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-popup-overlay { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.overlay : o, e)) + "; } #odiofy_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-popup-video-title { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.title : o, e)) + "; } #odiofy_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-popup-inner .odiofy-popup-video-meta-channel-name { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.channelName : o, e)) + "; } #odiofy_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-popup-inner .odiofy-popup-video-meta-channel-name:hover { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.channelNameHover : o, e)) + "; } #odiofy_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-popup-video-views { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.viewsCounter : o, e)) + "; } #odiofy_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-popup-video-rating-ratio { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.dislikesRatio : o, e)) + "; } #odiofy_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-popup-video-rating-ratio span { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.likesRatio : o, e)) + "; } #odiofy_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-popup-video-rating-likes span { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.likesCounter : o, e)) + "; } #odiofy_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-popup-video-rating-dislikes span { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.dislikesCounter : o, e)) + "; } #odiofy_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-popup-video-rating-likes svg { fill: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.likesCounter : o, e)) + "; } #odiofy_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-popup-video-rating-dislikes svg { fill: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.dislikesCounter : o, e)) + "; } #odiofy_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-popup-video-share svg { fill: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.share : o, e)) + "; } #odiofy_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-popup-video-share span { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.share : o, e)) + "; } #odiofy_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-popup-video-meta-date { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.date : o, e)) + "; } #odiofy_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-popup-video-meta-description { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.description : o, e)) + "; } #odiofy_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-popup-video-meta::after, #odiofy_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-popup-video-meta::before { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.description : o, e)) + "; } #odiofy_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-popup-video-meta-description-more { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.descriptionMoreButton : o, e)) + "; } #odiofy_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-popup-video-meta-description-more:hover { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.descriptionMoreButtonHover : o, e)) + "; } #odiofy_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-popup-video-comments-item-name a { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.commentsUsername : o, e)) + "; } #odiofy_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-popup-video-comments-item-name a:hover { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.commentsUsernameHover : o, e)) + "; } #odiofy_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-popup-video-comments-item-passed-time { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.commentsPassedTime : o, e)) + "; } #odiofy_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-popup-video-comments-item-text { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.commentsText : o, e)) + "; } #odiofy_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-popup-video-comments-item-likes { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.commentsLikes : o, e)) + "; } #odiofy_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-popup-video-comments-item-likes-icon { fill: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.commentsLikes : o, e)) + "; } #odiofy_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-popup-control-close::before, #odiofy_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-popup-control-close::after { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.controls : o, e)) + "; } #odiofy_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-popup-control-close:hover::before, #odiofy_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-popup-control-close:hover::after { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.controlsHover : o, e)) + "; } @media only screen and (max-width: 768px) { #odiofy_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-popup-control-close { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.controlsMobileBg : o, e)) + "; } #odiofy_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-popup-control-close::before, #odiofy_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + " .odiofy-popup-control-close::after { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.controlsMobile : o, e)) + "; } }"
                        },
                        useData: !0
                    }), o.error = o.error || {}, o.error.container = t.template({
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            return '<div class="odiofy-error"><div class="odiofy-error-overlay"></div><div class="odiofy-error-content"><div class="odiofy-error-content-title">Unfortunately, an error occurred:</div></div></div>'
                        },
                        useData: !0
                    }), o.error.content = t.template({
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            var o;
                            return '<div class="odiofy-error-content-msg">' + this.escapeExpression("function" == typeof(o = null != (o = t.message || (null != e ? e.message : e)) ? o : t.helperMissing) ? o.call(e, {
                                name: "message",
                                hash: {},
                                data: n
                            }) : o) + "</div>"
                        },
                        useData: !0
                    }), o.feed = o.feed || {}, o.feed.arrows = t.template({
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            return '<div class="odiofy-widget-feed-section-arrow odiofy-widget-feed-section-arrow-prev"><span></span></div><div class="odiofy-widget-feed-section-arrow odiofy-widget-feed-section-arrow-next"><span></span></div>'
                        },
                        useData: !0
                    }), o.feed.container = t.template({
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            return '<div class="odiofy-widget-feed"><div class="odiofy-widget-feed-inner"></div><div class="odiofy-widget-feed-ads" data-yt-ads-place="content"></div></div>'
                        },
                        useData: !0
                    }), o.feed.filter = t.template({
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            var o;
                            return '<div style="display: none"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="12" viewBox="0 0 12 12"><symbol viewBox="0 0 12 12" id="icon-search"><path id="u9qra" d="M1988.46 1576.54a3.07 3.07 0 0 1-3.09-3.08 3.07 3.07 0 0 1 3.09-3.09 3.07 3.07 0 0 1 3.08 3.09 3.07 3.07 0 0 1-3.08 3.08zm4.11 0h-.55l-.2-.2a4.3 4.3 0 0 0 1.1-2.88 4.45 4.45 0 1 0-8.92 0 4.45 4.45 0 0 0 4.46 4.45 4.3 4.3 0 0 0 2.88-1.1l.2.21v.55l3.43 3.43 1.03-1.03z"/><g><g transform="translate(-1984 -1569)"><use xlink:href="#u9qra"/></g></g></symbol></svg></div><div class="odiofy-widget-feed-section-search"><form class="odiofy-widget-feed-section-search-form"> <input class="odiofy-widget-feed-section-search-form-input" placeholder="' + this.escapeExpression("function" == typeof(o = null != (o = t.placeholder || (null != e ? e.placeholder : e)) ? o : t.helperMissing) ? o.call(e, {
                                name: "placeholder",
                                hash: {},
                                data: n
                            }) : o) + '..."> <a class="odiofy-widget-feed-section-search-form-button"><svg class="odiofy-widget-feed-section-search-form-button-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-search"></use></svg></a></form></div>'
                        },
                        useData: !0
                    }), o.feed.loader = t.template({
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            return '<div class="odiofy-widget-feed-section-loader"><div class="odiofy-spinner"></div></div>'
                        },
                        useData: !0
                    }), o.feed.pagination = t.template({
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            return '<div class="odiofy-widget-feed-section-pagination swiper-pagination"></div>'
                        },
                        useData: !0
                    }), o.feed.scrollbar = t.template({
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            return '<div class="odiofy-widget-feed-section-scrollbar swiper-scrollbar"></div>'
                        },
                        useData: !0
                    }), o.feed.section = t.template({
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            return '<div class="odiofy-widget-feed-section"><div class="odiofy-widget-feed-section-inner swiper-container"><div class="swiper-wrapper"></div></div></div>'
                        },
                        useData: !0
                    }), o.feed.section = o.feed.section || {}, o.feed.section.novideos = t.template({
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            var o;
                            return '<div class="odiofy-widget-feed-section-novideos">' + this.escapeExpression("function" == typeof(o = null != (o = t.message || (null != e ? e.message : e)) ? o : t.helperMissing) ? o.call(e, {
                                name: "message",
                                hash: {},
                                data: n
                            }) : o) + "</div>"
                        },
                        useData: !0
                    }), o.feed.slide = t.template({
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            return '<div class="odiofy-widget-feed-section-slide swiper-slide"></div>'
                        },
                        useData: !0
                    }), o.groups = o.groups || {}, o.groups.container = t.template({
                        1: function(e, t, i, n) {
                            return " odiofy-disabled"
                        },
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            var o, a, r = t.helperMissing,
                                s = "function";
                            return '<div class="odiofy-widget-nav' + (null != (o = t.unless.call(e, null != e ? e.visible : e, {
                                name: "unless",
                                hash: {},
                                fn: this.program(1, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + '"><div class="odiofy-widget-nav-inner"> ' + (null != (o = typeof(a = null != (a = t.list || (null != e ? e.list : e)) ? a : r) === s ? a.call(e, {
                                name: "list",
                                hash: {},
                                data: n
                            }) : a) ? o : "") + " " + (null != (o = typeof(a = null != (a = t.controls || (null != e ? e.controls : e)) ? a : r) === s ? a.call(e, {
                                name: "controls",
                                hash: {},
                                data: n
                            }) : a) ? o : "") + "</div></div>"
                        },
                        useData: !0
                    }), o.groups.controls = t.template({
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            return '<div class="odiofy-widget-nav-control odiofy-widget-nav-control-left odiofy-widget-nav-control-disabled"><span></span></div><div class="odiofy-widget-nav-control odiofy-widget-nav-control-right odiofy-widget-nav-control-disabled"><span></span></div>'
                        },
                        useData: !0
                    }), o.groups.list = t.template({
                        1: function(e, t, i, n) {
                            var o, a, r = t.helperMissing,
                                s = "function",
                                l = this.escapeExpression;
                            return '<li class="odiofy-widget-nav-list-item' + (null != (o = t.unless.call(e, n && n.index, {
                                name: "unless",
                                hash: {},
                                fn: this.program(2, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + '"> <a href="javascript:void(0)" data-yt-id="' + l(typeof(a = null != (a = t.index || n && n.index) ? a : r) === s ? a.call(e, {
                                name: "index",
                                hash: {},
                                data: n
                            }) : a) + '">' + l(typeof(a = null != (a = t.title || (null != e ? e.title : e)) ? a : r) === s ? a.call(e, {
                                name: "title",
                                hash: {},
                                data: n
                            }) : a) + "</a></li> "
                        },
                        2: function(e, t, i, n) {
                            return " odiofy-active"
                        },
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            var o;
                            return '<ul class="odiofy-widget-nav-list"> ' + (null != (o = t.each.call(e, null != e ? e.groups : e, {
                                name: "each",
                                hash: {},
                                fn: this.program(1, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + "</ul>"
                        },
                        useData: !0
                    }), o.header = o.header || {}, o.header.banner = t.template({
                        1: function(e, t, i, n) {
                            var o;
                            return '<div class="odiofy-widget-header-banner" style="background-image: url(\'' + this.escapeExpression("function" == typeof(o = null != (o = t.url || (null != e ? e.url : e)) ? o : t.helperMissing) ? o.call(e, {
                                name: "url",
                                hash: {},
                                data: n
                            }) : o) + "');\"></div> "
                        },
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            var o;
                            return null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.banner : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(1, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : ""
                        },
                        useData: !0
                    }), o.header.channel = t.template({
                        1: function(e, t, i, n) {
                            var o;
                            return '<div class="odiofy-widget-header-channel"> ' + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.channelName : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(2, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + " " + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.properties : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(7, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + " " + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.channelDescription : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(14, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + "</div> "
                        },
                        2: function(e, t, i, n) {
                            var o;
                            return " " + (null != (o = t["if"].call(e, null != e ? e.id : e, {
                                name: "if",
                                hash: {},
                                fn: this.program(3, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + " " + (null != (o = t.unless.call(e, null != e ? e.id : e, {
                                name: "unless",
                                hash: {},
                                fn: this.program(5, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + " "
                        },
                        3: function(e, t, i, n) {
                            var o, a = t.helperMissing,
                                r = "function",
                                s = this.escapeExpression;
                            return '<div class="odiofy-widget-header-channel-title"> <a href="https://www.youtube.com/channel/' + s(typeof(o = null != (o = t.id || (null != e ? e.id : e)) ? o : a) === r ? o.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : o) + '/" title="' + s(typeof(o = null != (o = t.name || (null != e ? e.name : e)) ? o : a) === r ? o.call(e, {
                                name: "name",
                                hash: {},
                                data: n
                            }) : o) + '" target="_blank">' + s(typeof(o = null != (o = t.name || (null != e ? e.name : e)) ? o : a) === r ? o.call(e, {
                                name: "name",
                                hash: {},
                                data: n
                            }) : o) + "</a></div> "
                        },
                        5: function(e, t, i, n) {
                            var o;
                            return '<div class="odiofy-widget-header-channel-title">' + this.escapeExpression("function" == typeof(o = null != (o = t.name || (null != e ? e.name : e)) ? o : t.helperMissing) ? o.call(e, {
                                name: "name",
                                hash: {},
                                data: n
                            }) : o) + "</div> "
                        },
                        7: function(e, t, i, n) {
                            var o;
                            return '<div class="odiofy-widget-header-channel-properties"> ' + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.subscribersCounter : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(8, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + " " + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.videosCounter : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(10, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + " " + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.viewsCounter : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(12, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + "</div> "
                        },
                        8: function(e, t, i, n) {
                            var o;
                            return ' <span class="odiofy-widget-header-channel-properties-item"><span class="odiofy-widget-header-channel-properties-item-divider">•</span> <span class="odiofy-widget-header-channel-properties-item-text">' + this.escapeExpression("function" == typeof(o = null != (o = t.subscriberCount || (null != e ? e.subscriberCount : e)) ? o : t.helperMissing) ? o.call(e, {
                                name: "subscriberCount",
                                hash: {},
                                data: n
                            }) : o) + "</span></span> "
                        },
                        10: function(e, t, i, n) {
                            var o;
                            return ' <span class="odiofy-widget-header-channel-properties-item"><span class="odiofy-widget-header-channel-properties-item-divider">•</span> <span class="odiofy-widget-header-channel-properties-item-text">' + this.escapeExpression("function" == typeof(o = null != (o = t.videoCount || (null != e ? e.videoCount : e)) ? o : t.helperMissing) ? o.call(e, {
                                name: "videoCount",
                                hash: {},
                                data: n
                            }) : o) + "</span></span> "
                        },
                        12: function(e, t, i, n) {
                            var o;
                            return ' <span class="odiofy-widget-header-channel-properties-item"><span class="odiofy-widget-header-channel-properties-item-divider">•</span> <span class="odiofy-widget-header-channel-properties-item-text">' + this.escapeExpression("function" == typeof(o = null != (o = t.viewCount || (null != e ? e.viewCount : e)) ? o : t.helperMissing) ? o.call(e, {
                                name: "viewCount",
                                hash: {},
                                data: n
                            }) : o) + "</span></span> "
                        },
                        14: function(e, t, i, n) {
                            var o, a;
                            return '<div class="odiofy-widget-header-channel-caption">' + (null != (o = "function" == typeof(a = null != (a = t.description || (null != e ? e.description : e)) ? a : t.helperMissing) ? a.call(e, {
                                name: "description",
                                hash: {},
                                data: n
                            }) : a) ? o : "") + "</div> "
                        },
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            var o;
                            return null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.channel : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(1, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : ""
                        },
                        useData: !0
                    }), o.header.container = t.template({
                        1: function(e, t, i, n) {
                            return " odiofy-visible"
                        },
                        3: function(e, t, i, n) {
                            return " odiofy-widget-header-brandingless"
                        },
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            var o, a, r = this.lambda;
                            return '<div class="odiofy-widget-header odiofy-widget-header-' + this.escapeExpression("function" == typeof(a = null != (a = t.layout || (null != e ? e.layout : e)) ? a : t.helperMissing) ? a.call(e, {
                                name: "layout",
                                hash: {},
                                data: n
                            }) : a) + (null != (o = t["if"].call(e, null != e ? e.visible : e, {
                                name: "if",
                                hash: {},
                                fn: this.program(1, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + (null != (o = t.unless.call(e, null != (o = null != e ? e.displaying : e) ? o.branding : o, {
                                name: "unless",
                                hash: {},
                                fn: this.program(3, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + '"> ' + (null != (o = r(null != (o = null != e ? e.parts : e) ? o.overlay : o, e)) ? o : "") + " " + (null != (o = r(null != (o = null != e ? e.parts : e) ? o.banner : o, e)) ? o : "") + " " + (null != (o = r(null != (o = null != e ? e.parts : e) ? o.inner : o, e)) ? o : "") + "</div>"
                        },
                        useData: !0
                    }), o.header.inner = t.template({
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            var o, a = this.lambda;
                            return '<div class="odiofy-widget-header-inner"> ' + (null != (o = a(null != (o = null != e ? e.parts : e) ? o.logo : o, e)) ? o : "") + '<div class="odiofy-widget-header-info"> ' + (null != (o = a(null != (o = null != e ? e.parts : e) ? o.channel : o, e)) ? o : "") + "</div> " + (null != (o = a(null != (o = null != e ? e.parts : e) ? o.subscribe : o, e)) ? o : "") + "</div>"
                        },
                        useData: !0
                    }), o.header.logo = t.template({
                        1: function(e, t, i, n) {
                            var o;
                            return " " + (null != (o = t["if"].call(e, null != e ? e.id : e, {
                                name: "if",
                                hash: {},
                                fn: this.program(2, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + " " + (null != (o = t.unless.call(e, null != e ? e.id : e, {
                                name: "unless",
                                hash: {},
                                fn: this.program(4, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + " "
                        },
                        2: function(e, t, i, n) {
                            var o, a = t.helperMissing,
                                r = "function",
                                s = this.escapeExpression;
                            return ' <a class="odiofy-widget-header-logo" href="https://www.youtube.com/channel/' + s(typeof(o = null != (o = t.id || (null != e ? e.id : e)) ? o : a) === r ? o.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : o) + '/" title="' + s(typeof(o = null != (o = t.title || (null != e ? e.title : e)) ? o : a) === r ? o.call(e, {
                                name: "title",
                                hash: {},
                                data: n
                            }) : o) + '" target="_blank" rel="nofollow"><img src="' + s(typeof(o = null != (o = t.url || (null != e ? e.url : e)) ? o : a) === r ? o.call(e, {
                                name: "url",
                                hash: {},
                                data: n
                            }) : o) + '" alt="' + s(typeof(o = null != (o = t.title || (null != e ? e.title : e)) ? o : a) === r ? o.call(e, {
                                name: "title",
                                hash: {},
                                data: n
                            }) : o) + '"/></a> '
                        },
                        4: function(e, t, i, n) {
                            var o, a = t.helperMissing,
                                r = "function",
                                s = this.escapeExpression;
                            return '<div class="odiofy-widget-header-logo"> <img src="' + s(typeof(o = null != (o = t.url || (null != e ? e.url : e)) ? o : a) === r ? o.call(e, {
                                name: "url",
                                hash: {},
                                data: n
                            }) : o) + '" alt="' + s(typeof(o = null != (o = t.title || (null != e ? e.title : e)) ? o : a) === r ? o.call(e, {
                                name: "title",
                                hash: {},
                                data: n
                            }) : o) + '"/></div> '
                        },
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            var o;
                            return null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.logo : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(1, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : ""
                        },
                        useData: !0
                    }), o.header.overlay = t.template({
                        1: function(e, t, i, n) {
                            return '<div class="odiofy-widget-header-overlay"></div> '
                        },
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            var o;
                            return null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.banner : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(1, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : ""
                        },
                        useData: !0
                    }), o.header.subscribe = t.template({
                        1: function(e, t, i, n) {
                            return '<div class="odiofy-widget-header-subscribe"><div class="odiofy-widget-header-subscribe-button"></div></div> '
                        },
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            var o;
                            return null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.subscribeButton : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(1, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : ""
                        },
                        useData: !0
                    }), o.popup = o.popup || {}, o.popup.container = t.template({
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            var o, a = this.lambda;
                            return '<div class="odiofyapp-root odiofy-popup odiofy"> ' + (null != (o = a(null != (o = null != e ? e.parts : e) ? o.overlay : o, e)) ? o : "") + " " + (null != (o = a(null != (o = null != e ? e.parts : e) ? o.wrapper : o, e)) ? o : "") + "</div>"
                        },
                        useData: !0
                    }), o.popup.control = o.popup.control || {}, o.popup.control.arrows = t.template({
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            return '<div class="odiofy-popup-control-arrow-previous odiofy-popup-control-arrow"><span></span></div><div class="odiofy-popup-control-arrow-next odiofy-popup-control-arrow"><span></span></div>'
                        },
                        useData: !0
                    }), o.popup.control.close = t.template({
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            return '<div class="odiofy-popup-control-close"></div>'
                        },
                        useData: !0
                    }), o.popup.inner = t.template({
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            var o, a = this.lambda;
                            return '<div class="odiofy-popup-inner"> ' + (null != (o = a(null != (o = null != e ? e.parts : e) ? o.loader : o, e)) ? o : "") + " " + (null != (o = a(null != (o = null != e ? e.parts : e) ? o.controlClose : o, e)) ? o : "") + "  " + (null != (o = a(null != (o = null != e ? e.parts : e) ? o.video : o, e)) ? o : "") + "</div>"
                        },
                        useData: !0
                    }), o.popup.loader = t.template({
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            return '<div class="odiofy-popup-loader"><div class="odiofy-spinner"></div></div>'
                        },
                        useData: !0
                    }), o.popup.overlay = t.template({
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            return '<div class="odiofy-popup-overlay"></div>'
                        },
                        useData: !0
                    }), o.popup.video = o.popup.video || {}, o.popup.video.container = t.template({
                        1: function(e, t, i, n) {
                            var o;
                            return " " + (null != (o = this.lambda(null != (o = null != e ? e.parts : e) ? o.videoContent : o, e)) ? o : "") + " "
                        },
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            var o;
                            return '<div class="odiofy-popup-video"> ' + (null != (o = this.lambda(null != (o = null != e ? e.parts : e) ? o.videoPlayer : o, e)) ? o : "") + " " + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.content : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(1, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + "</div>"
                        },
                        useData: !0
                    }), o.popup.video.content = t.template({
                        1: function(e, t, i, n) {
                            var o, a, r = this.escapeExpression;
                            return '<div class="odiofy-popup-video-views" title="' + r(this.lambda(null != (o = null != e ? e.titles : e) ? o.views : o, e)) + '">' + r("function" == typeof(a = null != (a = t.viewsCount || (null != e ? e.viewsCount : e)) ? a : t.helperMissing) ? a.call(e, {
                                name: "viewsCount",
                                hash: {},
                                data: n
                            }) : a) + "</div> "
                        },
                        3: function(e, t, i, n) {
                            var o;
                            return '<div class="odiofy-popup-video-rating"> ' + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.likesCounter : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(4, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + " " + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.dislikesCounter : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(6, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + " " + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.likesRatio : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(8, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + "</div> "
                        },
                        4: function(e, t, i, n) {
                            var o, a, r = this.escapeExpression;
                            return '<div class="odiofy-popup-video-rating-likes" title="' + r(this.lambda(null != (o = null != e ? e.titles : e) ? o.likes : o, e)) + '"><svg class="odiofy-popup-video-rating-likes-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-likes"></use></svg><span>' + r("function" == typeof(a = null != (a = t.likesCount || (null != e ? e.likesCount : e)) ? a : t.helperMissing) ? a.call(e, {
                                name: "likesCount",
                                hash: {},
                                data: n
                            }) : a) + "</span></div> "
                        },
                        6: function(e, t, i, n) {
                            var o, a, r = this.escapeExpression;
                            return '<div class="odiofy-popup-video-rating-dislikes" title="' + r(this.lambda(null != (o = null != e ? e.titles : e) ? o.dislikes : o, e)) + '"><svg class="odiofy-popup-video-rating-dislikes-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-dislikes"></use></svg><span>' + r("function" == typeof(a = null != (a = t.dislikesCount || (null != e ? e.dislikesCount : e)) ? a : t.helperMissing) ? a.call(e, {
                                name: "dislikesCount",
                                hash: {},
                                data: n
                            }) : a) + "</span></div> "
                        },
                        8: function(e, t, i, n) {
                            var o;
                            return '<div class="odiofy-popup-video-rating-ratio"><span style="width: ' + this.escapeExpression("function" == typeof(o = null != (o = t.likesRatio || (null != e ? e.likesRatio : e)) ? o : t.helperMissing) ? o.call(e, {
                                name: "likesRatio",
                                hash: {},
                                data: n
                            }) : o) + '%"></span></div> '
                        },
                        10: function(e, t, i, n) {
                            var o;
                            return '<div class="odiofy-popup-video-share"><svg class="odiofy-popup-video-share-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-share"></use></svg><span>' + this.escapeExpression(this.lambda(null != (o = null != e ? e.titles : e) ? o.share : o, e)) + '</span><div class="odiofy-popup-video-share-popover odiofy-popup-video-share-popover-left"><div class="odiofy-popup-video-share-popover-content"><div class="odiofy-popup-video-share-popover-content-inner"> ' + (null != (o = t.each.call(e, null != e ? e.shareButtons : e, {
                                name: "each",
                                hash: {},
                                fn: this.program(11, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + "</div></div></div></div> "
                        },
                        11: function(e, t, i, n) {
                            var o, a = t.helperMissing,
                                r = "function",
                                s = this.escapeExpression;
                            return '<div class="odiofy-popup-video-share-popover-content-item" data-type="' + s(typeof(o = null != (o = t.key || n && n.key) ? o : a) === r ? o.call(e, {
                                name: "key",
                                hash: {},
                                data: n
                            }) : o) + '"><div class="odiofy-popup-video-share-popover-content-item-icon"> <img src="' + s(typeof(o = null != (o = t.icon || (null != e ? e.icon : e)) ? o : a) === r ? o.call(e, {
                                name: "icon",
                                hash: {},
                                data: n
                            }) : o) + '"></div><div class="odiofy-popup-video-share-popover-content-item-title"> ' + s(typeof(o = null != (o = t.title || (null != e ? e.title : e)) ? o : a) === r ? o.call(e, {
                                name: "title",
                                hash: {},
                                data: n
                            }) : o) + "</div></div> "
                        },
                        13: function(e, t, i, n) {
                            var o;
                            return '<div class="odiofy-popup-video-meta"> ' + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.channelLogo : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(14, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + '<div class="odiofy-popup-video-meta-text"> ' + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.channelName : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(16, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + " " + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.date : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(18, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + " " + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.description : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(20, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + " " + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.descriptionMoreButton : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(23, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + "</div> " + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.subscribeButton : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(25, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + "</div> "
                        },
                        14: function(e, t, i, n) {
                            var o, a = t.helperMissing,
                                r = "function",
                                s = this.escapeExpression;
                            return '<div class="odiofy-popup-video-meta-channel-logo"> <a href="' + s(typeof(o = null != (o = t.link || (null != e ? e.link : e)) ? o : a) === r ? o.call(e, {
                                name: "link",
                                hash: {},
                                data: n
                            }) : o) + '" target="_blank" rel="nofollow" title="' + s(typeof(o = null != (o = t.name || (null != e ? e.name : e)) ? o : a) === r ? o.call(e, {
                                name: "name",
                                hash: {},
                                data: n
                            }) : o) + '"><img src="' + s(typeof(o = null != (o = t.logo || (null != e ? e.logo : e)) ? o : a) === r ? o.call(e, {
                                name: "logo",
                                hash: {},
                                data: n
                            }) : o) + '" alt="' + s(typeof(o = null != (o = t.name || (null != e ? e.name : e)) ? o : a) === r ? o.call(e, {
                                name: "name",
                                hash: {},
                                data: n
                            }) : o) + '"></a></div> '
                        },
                        16: function(e, t, i, n) {
                            var o, a = t.helperMissing,
                                r = "function",
                                s = this.escapeExpression;
                            return ' <a href="' + s(typeof(o = null != (o = t.link || (null != e ? e.link : e)) ? o : a) === r ? o.call(e, {
                                name: "link",
                                hash: {},
                                data: n
                            }) : o) + '" class="odiofy-popup-video-meta-channel-name" target="_blank" rel="nofollow">' + s(typeof(o = null != (o = t.name || (null != e ? e.name : e)) ? o : a) === r ? o.call(e, {
                                name: "name",
                                hash: {},
                                data: n
                            }) : o) + "</a> "
                        },
                        18: function(e, t, i, n) {
                            var o;
                            return '<div class="odiofy-popup-video-meta-date">' + this.escapeExpression("function" == typeof(o = null != (o = t.date || (null != e ? e.date : e)) ? o : t.helperMissing) ? o.call(e, {
                                name: "date",
                                hash: {},
                                data: n
                            }) : o) + "</div> "
                        },
                        20: function(e, t, i, n) {
                            var o, a;
                            return '<div class="odiofy-popup-video-meta-description' + (null != (o = t.unless.call(e, null != (o = null != e ? e.displaying : e) ? o.descriptionMoreButton : o, {
                                name: "unless",
                                hash: {},
                                fn: this.program(21, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + '"> ' + (null != (o = "function" == typeof(a = null != (a = t.text || (null != e ? e.text : e)) ? a : t.helperMissing) ? a.call(e, {
                                name: "text",
                                hash: {},
                                data: n
                            }) : a) ? o : "") + "</div> "
                        },
                        21: function(e, t, i, n) {
                            return " odiofy-popup-video-meta-description-show-full"
                        },
                        23: function(e, t, i, n) {
                            var o;
                            return '<div class="odiofy-popup-video-meta-description-more"><span>' + this.escapeExpression("function" == typeof(o = null != (o = t.showMoreLabel || (null != e ? e.showMoreLabel : e)) ? o : t.helperMissing) ? o.call(e, {
                                name: "showMoreLabel",
                                hash: {},
                                data: n
                            }) : o) + "</span></div> "
                        },
                        25: function(e, t, i, n) {
                            return '<div class="odiofy-popup-video-meta-subscribe-container"><div class="odiofy-popup-video-meta-subscribe"></div></div> '
                        },
                        27: function(e, t, i, n) {
                            var o;
                            return '<div class="odiofy-popup-video-comments"> ' + (null != (o = t.each.call(e, null != e ? e.comments : e, {
                                name: "each",
                                hash: {},
                                fn: this.program(28, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + "</div> "
                        },
                        28: function(e, t, i, n) {
                            var o, a, r = t.helperMissing,
                                s = "function",
                                l = this.escapeExpression;
                            return '<div class="odiofy-popup-video-comments-item"><div class="odiofy-popup-video-comments-item-profile-image"> <a href="' + l(typeof(a = null != (a = t.authorChannelUrl || (null != e ? e.authorChannelUrl : e)) ? a : r) === s ? a.call(e, {
                                name: "authorChannelUrl",
                                hash: {},
                                data: n
                            }) : a) + '" target="_blank" rel="nofollow"><img src="' + l(typeof(a = null != (a = t.authorProfileImageUrl || (null != e ? e.authorProfileImageUrl : e)) ? a : r) === s ? a.call(e, {
                                name: "authorProfileImageUrl",
                                hash: {},
                                data: n
                            }) : a) + '"></a></div><div class="odiofy-popup-video-comments-item-info"><div class="odiofy-popup-video-comments-item-header"><div class="odiofy-popup-video-comments-item-name"> <a href="' + l(typeof(a = null != (a = t.authorChannelUrl || (null != e ? e.authorChannelUrl : e)) ? a : r) === s ? a.call(e, {
                                name: "authorChannelUrl",
                                hash: {},
                                data: n
                            }) : a) + '" target="_blank" rel="nofollow">' + l(typeof(a = null != (a = t.authorName || (null != e ? e.authorName : e)) ? a : r) === s ? a.call(e, {
                                name: "authorName",
                                hash: {},
                                data: n
                            }) : a) + '</a></div><div class="odiofy-popup-video-comments-item-passed-time">' + l(typeof(a = null != (a = t.passedTime || (null != e ? e.passedTime : e)) ? a : r) === s ? a.call(e, {
                                name: "passedTime",
                                hash: {},
                                data: n
                            }) : a) + '</div></div><div class="odiofy-popup-video-comments-item-text"> ' + (null != (o = typeof(a = null != (a = t.text || (null != e ? e.text : e)) ? a : r) === s ? a.call(e, {
                                name: "text",
                                hash: {},
                                data: n
                            }) : a) ? o : "") + "</div> " + (null != (o = t["if"].call(e, null != e ? e.displayLikesCount : e, {
                                name: "if",
                                hash: {},
                                fn: this.program(29, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + "</div></div> "
                        },
                        29: function(e, t, i, n) {
                            var o, a, r = this.escapeExpression;
                            return '<div class="odiofy-popup-video-comments-item-likes" title="' + r(this.lambda(null != (o = null != e ? e.titles : e) ? o.likes : o, e)) + '"><svg class="odiofy-popup-video-comments-item-likes-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-likes"></use></svg><span>' + r("function" == typeof(a = null != (a = t.likesCount || (null != e ? e.likesCount : e)) ? a : t.helperMissing) ? a.call(e, {
                                name: "likesCount",
                                hash: {},
                                data: n
                            }) : a) + "</span></div> "
                        },
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            var o, a;
                            return '<div style="display: none"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="11" viewBox="0 0 12 11"><symbol viewBox="0 0 12 11" id="icon-likes"><defs><path id="jfk8a" d="M2631 867.95c0-.6-.5-1.1-1.1-1.1h-3.43l.55-2.53v-.17c0-.21-.11-.43-.22-.6l-.6-.55-3.6 3.63c-.22.17-.33.44-.33.77v5.5c0 .6.5 1.1 1.1 1.1h4.9c.44 0 .82-.27.98-.66l1.64-3.9c.06-.12.06-.28.06-.39v-1.1h.05c0 .06 0 0 0 0zm-12 6.05h2.18v-6.6H2619z"/></defs><g><g transform="translate(-2619 -863)"><use xlink:href="#jfk8a"/></g></g></symbol></svg><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="11" viewBox="0 0 12 11"><symbol viewBox="0 0 12 11" id="icon-dislikes"><defs><path id="w9axa" d="M2698 871.05c0 .6.46 1.1 1.03 1.1h3.24l-.52 2.53v.17c0 .21.1.43.21.6l.57.55 3.39-3.63c.2-.17.3-.44.3-.77v-5.5c0-.6-.45-1.1-1.02-1.1h-4.63c-.41 0-.77.27-.92.66l-1.55 3.9c-.05.12-.05.28-.05.39v1.1h-.05c0-.06 0 0 0 0zm12-5.65h-2.06v6.6h2.06z"/></defs><g><g transform="translate(-2698 -865)"><use xlink:href="#w9axa"/></g></g></symbol></svg><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="12" viewBox="0 0 14 12"><symbol viewBox="0 0 14 12" id="icon-share"><defs><path id="dka3a" d="M2786 868.92l-5.93-5.91v3.94A8.06 8.06 0 0 0 2772 875a8.08 8.08 0 0 1 8.07-4.12v3.96z"/></defs><g><g transform="translate(-2772 -863)"><use xlink:href="#dka3a"/></g></g></symbol></svg></div><div class="odiofy-popup-video-content"><div class="odiofy-popup-video-title"> ' + this.escapeExpression("function" == typeof(a = null != (a = t.title || (null != e ? e.title : e)) ? a : t.helperMissing) ? a.call(e, {
                                name: "title",
                                hash: {},
                                data: n
                            }) : a) + '</div><div class="odiofy-popup-video-info"> ' + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.viewsCounter : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(1, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + " " + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.ratingCounters : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(3, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + " " + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.share : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(10, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + "</div> " + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.meta : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(13, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + '<div class="odiofy-popup-video-content-ads" data-yt-ads-place="popup"></div> ' + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.comments : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(27, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + "</div>"
                        },
                        useData: !0
                    }), o.popup.video.player = t.template({
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            return '<div class="odiofy-popup-video-player"><span></span></div>'
                        },
                        useData: !0
                    }), o.popup.wrapper = t.template({
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            var o;
                            return '<div class="odiofy-popup-wrapper"> ' + (null != (o = this.lambda(null != (o = null != e ? e.parts : e) ? o.inner : o, e)) ? o : "") + "</div>"
                        },
                        useData: !0
                    }), o.video = o.video || {}, o.video.container = t.template({
                        1: function(e, t, i, n) {
                            var o, a = this.lambda;
                            return " " + (null != (o = a(null != (o = null != e ? e.parts : e) ? o.overlay : o, e)) ? o : "") + " " + (null != (o = a(null != (o = null != e ? e.parts : e) ? o.info : o, e)) ? o : "") + " "
                        },
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            var o, a, r = t.helperMissing,
                                s = "function",
                                l = this.escapeExpression,
                                p = this.lambda;
                            return '<div class="odiofy-widget-video odiofy-widget-video-' + l(typeof(a = null != (a = t.layout || (null != e ? e.layout : e)) ? a : r) === s ? a.call(e, {
                                name: "layout",
                                hash: {},
                                data: n
                            }) : a) + '" data-yt-id="' + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + '"> ' + (null != (o = p(null != (o = null != e ? e.parts : e) ? o.player : o, e)) ? o : "") + " " + (null != (o = p(null != (o = null != e ? e.parts : e) ? o.preview : o, e)) ? o : "") + " " + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.info : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(1, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + "</div>"
                        },
                        useData: !0
                    }), o.video.info = t.template({
                        1: function(e, t, i, n) {
                            var o, a = t.helperMissing,
                                r = "function",
                                s = this.escapeExpression;
                            return ' <a href="https://www.youtube.com/watch?v=' + s(typeof(o = null != (o = t.id || (null != e ? e.id : e)) ? o : a) === r ? o.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : o) + '" title="' + s(typeof(o = null != (o = t.title || (null != e ? e.title : e)) ? o : a) === r ? o.call(e, {
                                name: "title",
                                hash: {},
                                data: n
                            }) : o) + '" target="_blank" class="odiofy-widget-video-info-title">' + s(typeof(o = null != (o = t.title || (null != e ? e.title : e)) ? o : a) === r ? o.call(e, {
                                name: "title",
                                hash: {},
                                data: n
                            }) : o) + "</a> "
                        },
                        3: function(e, t, i, n) {
                            var o;
                            return '<div class="odiofy-widget-video-info-passed-time">' + this.escapeExpression("function" == typeof(o = null != (o = t.date || (null != e ? e.date : e)) ? o : t.helperMissing) ? o.call(e, {
                                name: "date",
                                hash: {},
                                data: n
                            }) : o) + "</div> "
                        },
                        5: function(e, t, i, n) {
                            var o, a;
                            return '<div class="odiofy-widget-video-info-caption"> ' + (null != (o = "function" == typeof(a = null != (a = t.description || (null != e ? e.description : e)) ? a : t.helperMissing) ? a.call(e, {
                                name: "description",
                                hash: {},
                                data: n
                            }) : a) ? o : "") + "</div> "
                        },
                        7: function(e, t, i, n) {
                            var o;
                            return '<div class="odiofy-widget-video-info-properties"><div class="odiofy-widget-video-info-properties-inner"> ' + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.viewsCounter : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(8, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + " " + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.likesCounter : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(10, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + " " + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.commentsCounter : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(12, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + "</div></div> "
                        },
                        8: function(e, t, i, n) {
                            var o;
                            return ' <span class="odiofy-widget-video-info-properties-item"><span class="odiofy-widget-video-info-properties-item-divider">•</span> <span>' + this.escapeExpression("function" == typeof(o = null != (o = t.viewsCount || (null != e ? e.viewsCount : e)) ? o : t.helperMissing) ? o.call(e, {
                                name: "viewsCount",
                                hash: {},
                                data: n
                            }) : o) + "</span></span> "
                        },
                        10: function(e, t, i, n) {
                            var o;
                            return ' <span class="odiofy-widget-video-info-properties-item"><span class="odiofy-widget-video-info-properties-item-divider">•</span> <span>' + this.escapeExpression("function" == typeof(o = null != (o = t.likesCount || (null != e ? e.likesCount : e)) ? o : t.helperMissing) ? o.call(e, {
                                name: "likesCount",
                                hash: {},
                                data: n
                            }) : o) + "</span></span> "
                        },
                        12: function(e, t, i, n) {
                            var o;
                            return ' <span class="odiofy-widget-video-info-properties-item"><span class="odiofy-widget-video-info-properties-item-divider">•</span> <span>' + this.escapeExpression("function" == typeof(o = null != (o = t.commentsCount || (null != e ? e.commentsCount : e)) ? o : t.helperMissing) ? o.call(e, {
                                name: "commentsCount",
                                hash: {},
                                data: n
                            }) : o) + "</span></span> "
                        },
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            var o;
                            return '<div class="odiofy-widget-video-info"> ' + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.title : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(1, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + " " + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.date : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(3, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + " " + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.description : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(5, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + " " + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.properties : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(7, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + "</div>"
                        },
                        useData: !0
                    }), o.video.overlay = t.template({
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            return '<div class="odiofy-widget-video-overlay"></div>'
                        },
                        useData: !0
                    }), o.video.player = t.template({
                        1: function(e, t, i, n) {
                            return '<span class="odiofy-widget-video-player"><span></span></span> '
                        },
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            var o;
                            return null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.videoPlayer : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(1, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : ""
                        },
                        useData: !0
                    }), o.video.preview = t.template({
                        1: function(e, t, i, n) {
                            var o;
                            return 'data-maxres-src="' + this.escapeExpression("function" == typeof(o = null != (o = t.maxresThumbnail || (null != e ? e.maxresThumbnail : e)) ? o : t.helperMissing) ? o.call(e, {
                                name: "maxresThumbnail",
                                hash: {},
                                data: n
                            }) : o) + '"'
                        },
                        3: function(e, t, i, n) {
                            var o;
                            return ' <span class="odiofy-widget-video-preview-marker odiofy-widget-video-preview-marker-duration">' + (null != (o = t["if"].call(e, null != (o = null != e ? e.duration : e) ? o.h : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(4, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + (null != (o = t["if"].call(e, null != (o = null != e ? e.duration : e) ? o.m : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(6, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + (null != (o = t.unless.call(e, null != (o = null != e ? e.duration : e) ? o.m : o, {
                                name: "unless",
                                hash: {},
                                fn: this.program(8, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + (null != (o = t["if"].call(e, null != (o = null != e ? e.duration : e) ? o.s : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(10, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + (null != (o = t.unless.call(e, null != (o = null != e ? e.duration : e) ? o.s : o, {
                                name: "unless",
                                hash: {},
                                fn: this.program(12, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + "</span> "
                        },
                        4: function(e, t, i, n) {
                            var o;
                            return this.escapeExpression(this.lambda(null != (o = null != e ? e.duration : e) ? o.h : o, e)) + ":"
                        },
                        6: function(e, t, i, n) {
                            var o;
                            return this.escapeExpression(this.lambda(null != (o = null != e ? e.duration : e) ? o.m : o, e)) + ":"
                        },
                        8: function(e, t, i, n) {
                            return "00:"
                        },
                        10: function(e, t, i, n) {
                            var o;
                            return this.escapeExpression(this.lambda(null != (o = null != e ? e.duration : e) ? o.s : o, e))
                        },
                        12: function(e, t, i, n) {
                            return "00"
                        },
                        14: function(e, t, i, n) {
                            return '<span class="odiofy-widget-video-preview-play"></span> '
                        },
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            var o, a, r = t.helperMissing,
                                s = "function",
                                l = this.escapeExpression;
                            return ' <a href="https://www.youtube.com/watch?v=' + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : a) + '" title="' + l(typeof(a = null != (a = t.title || (null != e ? e.title : e)) ? a : r) === s ? a.call(e, {
                                name: "title",
                                hash: {},
                                data: n
                            }) : a) + '" target="_blank" class="odiofy-widget-video-preview"><span class="odiofy-widget-video-preview-thumbnail"><img alt="' + l(typeof(a = null != (a = t.title || (null != e ? e.title : e)) ? a : r) === s ? a.call(e, {
                                name: "title",
                                hash: {},
                                data: n
                            }) : a) + '" data-src="' + l(typeof(a = null != (a = t.thumbnail || (null != e ? e.thumbnail : e)) ? a : r) === s ? a.call(e, {
                                name: "thumbnail",
                                hash: {},
                                data: n
                            }) : a) + '" ' + (null != (o = t["if"].call(e, null != e ? e.maxresThumbnail : e, {
                                name: "if",
                                hash: {},
                                fn: this.program(1, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + "/></span> " + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.duration : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(3, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + " " + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.playIcon : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(14, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + "</a>"
                        },
                        useData: !0
                    }), o.widget = t.template({
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            return '<div class="odiofy-widget-inner"><odiofy data-part="header"></odiofy><div class="odiofy-widget-contents"><odiofy data-part="groups"></odiofy><odiofy data-part="feed"></odiofy></div></div>'
                        },
                        useData: !0
                    }), i.exports = o
                }, {}],
                47: [function(e, t, i) {
                    e("./../../olivie/src/js/jquery");
                    var n = e("./../../olivie/src/js/olivie");
                    t.exports = n["class"]("YottieFacade", [], function(e) {
                        this.app = e
                    }, {}, {
                        app: null
                    })
                }, {
                    "./../../olivie/src/js/jquery": 7,
                    "./../../olivie/src/js/olivie": 14
                }],
                48: [function(e, t, i) {
                    var n = e("./../../olivie/src/js/jquery"),
                        o = e("./../../olivie/src/js/olivie"),
                        a = e("./../../olivie/src/js/modules/mies/client"),
                        r = e("./../../olivie/src/js/modules/appearance/i18n"),
                        s = e("./../../olivie/src/js/modules/appearance/renderer"),
                        l = e("./../../olivie/src/js/modules/appearance/colorizer"),
                        p = e("./../../olivie/src/js/utils"),
                        d = e("./modules/widget/yt-error"),
                        c = e("./modules/youtube/youtube"),
                        u = e("./modules/widget/widget"),
                        m = e("./modules/widget/header"),
                        h = e("./modules/widget/groups"),
                        g = e("./modules/widget/feed"),
                        f = e("./modules/widget/ads"),
                        v = e("./modules/popup/popup"),
                        w = e("./dictionary"),
                        y = e("./views"),
                        b = e("./schemes"),
                        x = e("./defaults"),
                        k = e("./analytics");
                    t.exports = o.application("Yottie", function(e, t, i) {
                        var o, C = this;
                        C.getParent("Application").call(C), C.id = e, C.$element = n(t), i.key || delete i.key, C.options = n.extend(!0, {}, x, i), C.analytics = new k("odiofy", C.options.widgetId || null);
                        var S = C.options.key;
                        o = n.isArray(S) ? S[Math.floor(Math.random() * S.length)] : S, C.registerComponent(new a(C.options.apiUrl, {
                            key: o
                        }, "Yottie", C.options.cacheTime)), C.registerComponent(new r(w, C.options.lang)), C.registerComponent(new s(y)), C.registerComponent(new l(b, C.options.color.scheme, C.options.color, "colorizer")), C.registerComponent(new d), C.registerComponent(new c), C.registerComponent(new f(C.options.ads)), C.registerComponent(new u), C.registerComponent(new m), C.registerComponent(new v), C.registerComponent(new g), C.registerComponent(new h);
                        var T = C.component("client");
                        T.attachResponseModifier(function(e) {
                            var t;
                            e.error && (t = e.error.code + " " + e.error.message + " " + JSON.stringify(e.error.errors) + " (" + document.location.href + ")", T.ga.collect(t))
                        }), C.analytics.available() && setTimeout(function() {
                            var e, t = function(e) {
                                var t = e.height() ? window.innerHeight / e.height() * 50 : 50;
                                p.inViewPort(e[0], t) && C.analytics.store("view", 1, 86400)
                            };
                            C.$element.click(function() {
                                C.analytics.store("click")
                            }), jQuery(window).on("scroll resize", function() {
                                clearTimeout(e), e = setTimeout(function() {
                                    t(C.$element)
                                }, 100)
                            }), t(C.$element)
                        }, 1e3)
                    }, {
                        VERSION: "3.2.0"
                    }, {
                        id: null,
                        $element: null,
                        options: null,
                        run: function() {
                            var e = this;
                            if (e.$element.addClass("odiofy odiofy-widget"), e.component("error").run(), "string" === n.type(e.options.sourceGroups) && e.options.sourceGroups.length) try {
                                e.options.sourceGroups = n.parseJSON(decodeURIComponent(e.options.sourceGroups))
                            } catch (t) {
                                e.options.sourceGroups = null
                            }
                            if ("string" === n.type(e.options.content.responsive) && e.options.content.responsive.length) try {
                                e.options.content.responsive = n.parseJSON(decodeURIComponent(e.options.content.responsive))
                            } catch (t) {
                                e.options.content.responsive = null
                            }
                            e.component("colorizer").run(), e.component("ads").run(), e.component("client").run().done(function() {
                                e.component("header").run().on("ready", function(t, i) {
                                    var n;
                                    if (jQuery.isArray(e.options.sourceGroups) && e.options.sourceGroups.length) n = e.options.sourceGroups;
                                    else {
                                        if (!e.options.channel) return void e.component("error")["throw"]("Channel and sourceGroups are not specified.");
                                        n = [{
                                            title: e.component("i18n").t("Uploads"),
                                            sources: [{
                                                kind: "youtube#playlist",
                                                criteria: {
                                                    id: i.channel.contentDetails.relatedPlaylists.uploads
                                                }
                                            }]
                                        }]
                                    }
                                    e.component("groups").run(n), e.component("feed").run(n), e.component("widget").run(), e.component("popup").run(), e.component("feed").setActiveSection(0)
                                })
                            })
                        },
                        getId: function() {
                            return this.id
                        }
                    })
                }, {
                    "./../../olivie/src/js/jquery": 7,
                    "./../../olivie/src/js/modules/appearance/colorizer": 8,
                    "./../../olivie/src/js/modules/appearance/i18n": 9,
                    "./../../olivie/src/js/modules/appearance/renderer": 10,
                    "./../../olivie/src/js/modules/mies/client": 12,
                    "./../../olivie/src/js/olivie": 14,
                    "./../../olivie/src/js/utils": 15,
                    "./analytics": 16,
                    "./defaults": 19,
                    "./dictionary": 20,
                    "./modules/popup/popup": 23,
                    "./modules/widget/ads": 24,
                    "./modules/widget/feed": 26,
                    "./modules/widget/groups": 28,
                    "./modules/widget/header": 29,
                    "./modules/widget/widget": 30,
                    "./modules/widget/yt-error": 31,
                    "./modules/youtube/youtube": 44,
                    "./schemes": 45,
                    "./views": 46
                }]
            }, {}, [21])
        }
    }, {}],
    4: [function(e, t, i) {
        "use strict";
        var n = e("./__packaged-css"),
            o = e("./__packaged-js"),
            a = e("../../bower_components/handlebars/handlebars.runtime"),
            r = e("./swiper/swiper.js"),
            s = [{
                src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.3/jquery.min.js",
                test: function() {
                    return !!window.jQuery
                }
            }, {
                src: "https://www.youtube.com/iframe_api",
                test: function() {
                    return !!window.YT
                }
            }],
            l = function() {
                o(a, r)
            },
            p = document.createElement("style");
        p.type = "text/css", p.innerHTML = n, document.head.appendChild(p);
        for (var d = 0, c = 0, u = 0; u < s.length; ++u)(function(e, t) {
            if (!t.test.call()) {
                ++d;
                var i = document.createElement("script");
                i.src = t.src, i.onload = function() {
                    ++c === d && l(), document.head.removeChild(i)
                }, document.head.appendChild(i)
            }
        }).call(s[u], u, s[u]);
        d || l()
    }, {
        "../../bower_components/handlebars/handlebars.runtime": 1,
        "./__packaged-css": 2,
        "./__packaged-js": 3,
        "./swiper/swiper.js": 5
    }],
    5: [function(e, t, i) {
        "use strict";
        ! function() {
            function e(e) {
                e.fn.swiper = function(t) {
                    var i;
                    return e(this).each(function() {
                        var e = new d(this, t);
                        i || (i = e)
                    }), i
                }
            }
            var t, i, n, o, a, r, s, l, p, d = function(e, i) {
                function n(e) {
                    return Math.floor(e)
                }

                function o() {
                    var e = b.params.autoplay,
                        t = b.slides.eq(b.activeIndex);
                    t.attr("data-swiper-autoplay") && (e = t.attr("data-swiper-autoplay") || b.params.autoplay), b.autoplayTimeoutId = setTimeout(function() {
                        b.params.loop ? (b.fixLoop(), b._slideNext(), b.emit("onAutoplay", b)) : b.isEnd ? i.autoplayStopOnLast ? b.stopAutoplay() : (b._slideTo(0), b.emit("onAutoplay", b)) : (b._slideNext(), b.emit("onAutoplay", b))
                    }, e)
                }

                function a(e, i) {
                    var n = t(e.target);
                    if (!n.is(i))
                        if ("string" == typeof i) n = n.parents(i);
                        else if (i.nodeType) {
                        var o;
                        return n.parents().each(function(e, t) {
                            t === i && (o = i)
                        }), o ? i : void 0
                    }
                    if (0 !== n.length) return n[0]
                }

                function r(e, t) {
                    t = t || {};
                    var i = new(window.MutationObserver || window.WebkitMutationObserver)(function(e) {
                        e.forEach(function(e) {
                            b.onResize(!0), b.emit("onObserverUpdate", b, e)
                        })
                    });
                    i.observe(e, {
                        attributes: void 0 === t.attributes || t.attributes,
                        childList: void 0 === t.childList || t.childList,
                        characterData: void 0 === t.characterData || t.characterData
                    }), b.observers.push(i)
                }

                function s(e) {
                    e.originalEvent && (e = e.originalEvent);
                    var t = e.keyCode || e.charCode;
                    if (!b.params.allowSwipeToNext && (b.isHorizontal() && 39 === t || !b.isHorizontal() && 40 === t)) return !1;
                    if (!b.params.allowSwipeToPrev && (b.isHorizontal() && 37 === t || !b.isHorizontal() && 38 === t)) return !1;
                    if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                        if (37 === t || 39 === t || 38 === t || 40 === t) {
                            var i = !1;
                            if (0 < b.container.parents("." + b.params.slideClass).length && 0 === b.container.parents("." + b.params.slideActiveClass).length) return;
                            var n = window.pageXOffset,
                                o = window.pageYOffset,
                                a = window.innerWidth,
                                r = window.innerHeight,
                                s = b.container.offset();
                            b.rtl && (s.left = s.left - b.container[0].scrollLeft);
                            for (var l = [
                                    [s.left, s.top],
                                    [s.left + b.width, s.top],
                                    [s.left, s.top + b.height],
                                    [s.left + b.width, s.top + b.height]
                                ], p = 0; p < l.length; p++) {
                                var d = l[p];
                                d[0] >= n && d[0] <= n + a && d[1] >= o && d[1] <= o + r && (i = !0)
                            }
                            if (!i) return
                        }
                        b.isHorizontal() ? (37 !== t && 39 !== t || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), (39 === t && !b.rtl || 37 === t && b.rtl) && b.slideNext(), (37 === t && !b.rtl || 39 === t && b.rtl) && b.slidePrev()) : (38 !== t && 40 !== t || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === t && b.slideNext(), 38 === t && b.slidePrev()), b.emit("onKeyPress", b, t)
                    }
                }

                function l(e) {
                    e.originalEvent && (e = e.originalEvent);
                    var t, i, n, o, a, r = 0,
                        s = b.rtl ? -1 : 1,
                        l = (a = o = n = i = 0, "detail" in (t = e) && (n = t.detail), "wheelDelta" in t && (n = -t.wheelDelta / 120), "wheelDeltaY" in t && (n = -t.wheelDeltaY / 120), "wheelDeltaX" in t && (i = -t.wheelDeltaX / 120), "axis" in t && t.axis === t.HORIZONTAL_AXIS && (i = n, n = 0), o = 10 * i, a = 10 * n, "deltaY" in t && (a = t.deltaY), "deltaX" in t && (o = t.deltaX), (o || a) && t.deltaMode && (1 === t.deltaMode ? (o *= 40, a *= 40) : (o *= 800, a *= 800)), o && !i && (i = o < 1 ? -1 : 1), a && !n && (n = a < 1 ? -1 : 1), {
                            spinX: i,
                            spinY: n,
                            pixelX: o,
                            pixelY: a
                        });
                    if (b.params.mousewheelForceToAxis)
                        if (b.isHorizontal()) {
                            if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return;
                            r = l.pixelX * s
                        } else {
                            if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return;
                            r = l.pixelY
                        }
                    else r = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * s : -l.pixelY;
                    if (0 !== r) {
                        if (b.params.mousewheelInvert && (r = -r), b.params.freeMode) {
                            var p = b.getWrapperTranslate() + r * b.params.mousewheelSensitivity,
                                d = b.isBeginning,
                                c = b.isEnd;
                            if (p >= b.minTranslate() && (p = b.minTranslate()), p <= b.maxTranslate() && (p = b.maxTranslate()), b.setWrapperTransition(0), b.setWrapperTranslate(p), b.updateProgress(), b.updateActiveIndex(), (!d && b.isBeginning || !c && b.isEnd) && b.updateClasses(), b.params.freeModeSticky ? (clearTimeout(b.mousewheel.timeout), b.mousewheel.timeout = setTimeout(function() {
                                    b.slideReset()
                                }, 300)) : b.params.lazyLoading && b.lazy && b.lazy.load(), b.emit("onScroll", b, e), b.params.autoplay && b.params.autoplayDisableOnInteraction && b.stopAutoplay(), 0 === p || p === b.maxTranslate()) return
                        } else {
                            if (60 < (new window.Date).getTime() - b.mousewheel.lastScrollTime)
                                if (r < 0)
                                    if (b.isEnd && !b.params.loop || b.animating) {
                                        if (b.params.mousewheelReleaseOnEdges) return !0
                                    } else b.slideNext(), b.emit("onScroll", b, e);
                            else if (b.isBeginning && !b.params.loop || b.animating) {
                                if (b.params.mousewheelReleaseOnEdges) return !0
                            } else b.slidePrev(), b.emit("onScroll", b, e);
                            b.mousewheel.lastScrollTime = (new window.Date).getTime()
                        }
                        return e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1
                    }
                }

                function p(e, i) {
                    var n, o, a;
                    e = t(e);
                    var r = b.rtl ? -1 : 1;
                    n = e.attr("data-swiper-parallax") || "0", o = e.attr("data-swiper-parallax-x"), a = e.attr("data-swiper-parallax-y"), o || a ? (o = o || "0", a = a || "0") : b.isHorizontal() ? (o = n, a = "0") : (a = n, o = "0"), o = 0 <= o.indexOf("%") ? parseInt(o, 10) * i * r + "%" : o * i * r + "px", a = 0 <= a.indexOf("%") ? parseInt(a, 10) * i + "%" : a * i + "px", e.transform("translate3d(" + o + ", " + a + ",0px)")
                }

                function c(e) {
                    return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e), e
                }
                if (!(this instanceof d)) return new d(e, i);
                var u = {
                        direction: "horizontal",
                        touchEventsTarget: "container",
                        initialSlide: 0,
                        speed: 300,
                        autoplay: !1,
                        autoplayDisableOnInteraction: !0,
                        autoplayStopOnLast: !1,
                        iOSEdgeSwipeDetection: !1,
                        iOSEdgeSwipeThreshold: 20,
                        freeMode: !1,
                        freeModeMomentum: !0,
                        freeModeMomentumRatio: 1,
                        freeModeMomentumBounce: !0,
                        freeModeMomentumBounceRatio: 1,
                        freeModeMomentumVelocityRatio: 1,
                        freeModeSticky: !1,
                        freeModeMinimumVelocity: .02,
                        autoHeight: !1,
                        setWrapperSize: !1,
                        virtualTranslate: !1,
                        effect: "slide",
                        coverflow: {
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: !0
                        },
                        flip: {
                            slideShadows: !0,
                            limitRotation: !0
                        },
                        cube: {
                            slideShadows: !0,
                            shadow: !0,
                            shadowOffset: 20,
                            shadowScale: .94
                        },
                        fade: {
                            crossFade: !1
                        },
                        parallax: !1,
                        zoom: !1,
                        zoomMax: 3,
                        zoomMin: 1,
                        zoomToggle: !0,
                        scrollbar: null,
                        scrollbarHide: !0,
                        scrollbarDraggable: !1,
                        scrollbarSnapOnRelease: !1,
                        keyboardControl: !1,
                        mousewheelControl: !1,
                        mousewheelReleaseOnEdges: !1,
                        mousewheelInvert: !1,
                        mousewheelForceToAxis: !1,
                        mousewheelSensitivity: 1,
                        mousewheelEventsTarged: "container",
                        hashnav: !1,
                        hashnavWatchState: !1,
                        history: !1,
                        replaceState: !1,
                        breakpoints: void 0,
                        spaceBetween: 0,
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerColumnFill: "column",
                        slidesPerGroup: 1,
                        centeredSlides: !1,
                        slidesOffsetBefore: 0,
                        slidesOffsetAfter: 0,
                        roundLengths: !1,
                        touchRatio: 1,
                        touchAngle: 45,
                        simulateTouch: !0,
                        shortSwipes: !0,
                        longSwipes: !0,
                        longSwipesRatio: .5,
                        longSwipesMs: 300,
                        followFinger: !0,
                        onlyExternal: !1,
                        threshold: 0,
                        touchMoveStopPropagation: !0,
                        touchReleaseOnEdges: !1,
                        uniqueNavElements: !0,
                        pagination: null,
                        paginationElement: "span",
                        paginationClickable: !1,
                        paginationHide: !1,
                        paginationBulletRender: null,
                        paginationProgressRender: null,
                        paginationFractionRender: null,
                        paginationCustomRender: null,
                        paginationType: "bullets",
                        resistance: !0,
                        resistanceRatio: .85,
                        nextButton: null,
                        prevButton: null,
                        watchSlidesProgress: !1,
                        watchSlidesVisibility: !1,
                        grabCursor: !1,
                        preventClicks: !0,
                        preventClicksPropagation: !0,
                        slideToClickedSlide: !1,
                        lazyLoading: !1,
                        lazyLoadingInPrevNext: !1,
                        lazyLoadingInPrevNextAmount: 1,
                        lazyLoadingOnTransitionStart: !1,
                        preloadImages: !0,
                        updateOnImagesReady: !0,
                        loop: !1,
                        loopAdditionalSlides: 0,
                        loopedSlides: null,
                        control: void 0,
                        controlInverse: !1,
                        controlBy: "slide",
                        normalizeSlideIndex: !0,
                        allowSwipeToPrev: !0,
                        allowSwipeToNext: !0,
                        swipeHandler: null,
                        noSwiping: !0,
                        noSwipingClass: "swiper-no-swiping",
                        passiveListeners: !0,
                        containerModifierClass: "swiper-container-",
                        slideClass: "swiper-slide",
                        slideActiveClass: "swiper-slide-active",
                        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                        slideVisibleClass: "swiper-slide-visible",
                        slideDuplicateClass: "swiper-slide-duplicate",
                        slideNextClass: "swiper-slide-next",
                        slideDuplicateNextClass: "swiper-slide-duplicate-next",
                        slidePrevClass: "swiper-slide-prev",
                        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                        wrapperClass: "swiper-wrapper",
                        bulletClass: "swiper-pagination-bullet",
                        bulletActiveClass: "swiper-pagination-bullet-active",
                        buttonDisabledClass: "swiper-button-disabled",
                        paginationCurrentClass: "swiper-pagination-current",
                        paginationTotalClass: "swiper-pagination-total",
                        paginationHiddenClass: "swiper-pagination-hidden",
                        paginationProgressbarClass: "swiper-pagination-progressbar",
                        paginationClickableClass: "swiper-pagination-clickable",
                        paginationModifierClass: "swiper-pagination-",
                        lazyLoadingClass: "swiper-lazy",
                        lazyStatusLoadingClass: "swiper-lazy-loading",
                        lazyStatusLoadedClass: "swiper-lazy-loaded",
                        lazyPreloaderClass: "swiper-lazy-preloader",
                        notificationClass: "swiper-notification",
                        preloaderClass: "preloader",
                        zoomContainerClass: "swiper-zoom-container",
                        observer: !1,
                        observeParents: !1,
                        a11y: !1,
                        prevSlideMessage: "Previous slide",
                        nextSlideMessage: "Next slide",
                        firstSlideMessage: "This is the first slide",
                        lastSlideMessage: "This is the last slide",
                        paginationBulletMessage: "Go to slide {{index}}",
                        runCallbacksOnInit: !0
                    },
                    m = i && i.virtualTranslate;
                i = i || {};
                var g = {};
                for (var f in i)
                    if ("object" != typeof i[f] || null === i[f] || i[f].nodeType || i[f] === window || i[f] === document || void 0 !== h && i[f] instanceof h || "undefined" != typeof jQuery && i[f] instanceof jQuery) g[f] = i[f];
                    else
                        for (var v in g[f] = {}, i[f]) g[f][v] = i[f][v];
                for (var w in u)
                    if (void 0 === i[w]) i[w] = u[w];
                    else if ("object" == typeof i[w])
                    for (var y in u[w]) void 0 === i[w][y] && (i[w][y] = u[w][y]);
                var b = this;
                if (b.params = i, b.originalParams = g, b.classNames = [], void 0 !== t && void 0 !== h && (t = h), (void 0 !== t || (t = void 0 === h ? window.Dom7 || window.Zepto || window.jQuery : h)) && (b.$ = t, b.currentBreakpoint = void 0, b.getActiveBreakpoint = function() {
                        if (!b.params.breakpoints) return !1;
                        var e, t = !1,
                            i = [];
                        for (e in b.params.breakpoints) b.params.breakpoints.hasOwnProperty(e) && i.push(e);
                        i.sort(function(e, t) {
                            return parseInt(e, 10) > parseInt(t, 10)
                        });
                        for (var n = 0; n < i.length; n++)(e = i[n]) >= window.innerWidth && !t && (t = e);
                        return t || "max"
                    }, b.setBreakpoint = function() {
                        var e = b.getActiveBreakpoint();
                        if (e && b.currentBreakpoint !== e) {
                            var t = e in b.params.breakpoints ? b.params.breakpoints[e] : b.originalParams,
                                i = b.params.loop && t.slidesPerView !== b.params.slidesPerView;
                            for (var n in t) b.params[n] = t[n];
                            b.currentBreakpoint = e, i && b.destroyLoop && b.reLoop(!0)
                        }
                    }, b.params.breakpoints && b.setBreakpoint(), b.container = t(e), 0 !== b.container.length)) {
                    if (1 < b.container.length) {
                        var x = [];
                        return b.container.each(function() {
                            x.push(new d(this, i))
                        }), x
                    }(b.container[0].swiper = b).container.data("swiper", b), b.classNames.push(b.params.containerModifierClass + b.params.direction), b.params.freeMode && b.classNames.push(b.params.containerModifierClass + "free-mode"), b.support.flexbox || (b.classNames.push(b.params.containerModifierClass + "no-flexbox"), b.params.slidesPerColumn = 1), b.params.autoHeight && b.classNames.push(b.params.containerModifierClass + "autoheight"), (b.params.parallax || b.params.watchSlidesVisibility) && (b.params.watchSlidesProgress = !0), b.params.touchReleaseOnEdges && (b.params.resistanceRatio = 0), 0 <= ["cube", "coverflow", "flip"].indexOf(b.params.effect) && (b.support.transforms3d ? (b.params.watchSlidesProgress = !0, b.classNames.push(b.params.containerModifierClass + "3d")) : b.params.effect = "slide"), "slide" !== b.params.effect && b.classNames.push(b.params.containerModifierClass + b.params.effect), "cube" === b.params.effect && (b.params.resistanceRatio = 0, b.params.slidesPerView = 1, b.params.slidesPerColumn = 1, b.params.slidesPerGroup = 1, b.params.centeredSlides = !1, b.params.spaceBetween = 0, b.params.virtualTranslate = !0), "fade" !== b.params.effect && "flip" !== b.params.effect || (b.params.slidesPerView = 1, b.params.slidesPerColumn = 1, b.params.slidesPerGroup = 1, b.params.watchSlidesProgress = !0, void(b.params.spaceBetween = 0) === m && (b.params.virtualTranslate = !0)), b.params.grabCursor && b.support.touch && (b.params.grabCursor = !1), b.wrapper = b.container.children("." + b.params.wrapperClass), b.params.pagination && (b.paginationContainer = t(b.params.pagination), b.params.uniqueNavElements && "string" == typeof b.params.pagination && 1 < b.paginationContainer.length && 1 === b.container.find(b.params.pagination).length && (b.paginationContainer = b.container.find(b.params.pagination)), "bullets" === b.params.paginationType && b.params.paginationClickable ? b.paginationContainer.addClass(b.params.paginationModifierClass + "clickable") : b.params.paginationClickable = !1, b.paginationContainer.addClass(b.params.paginationModifierClass + b.params.paginationType)), (b.params.nextButton || b.params.prevButton) && (b.params.nextButton && (b.nextButton = t(b.params.nextButton), b.params.uniqueNavElements && "string" == typeof b.params.nextButton && 1 < b.nextButton.length && 1 === b.container.find(b.params.nextButton).length && (b.nextButton = b.container.find(b.params.nextButton))), b.params.prevButton && (b.prevButton = t(b.params.prevButton), b.params.uniqueNavElements && "string" == typeof b.params.prevButton && 1 < b.prevButton.length && 1 === b.container.find(b.params.prevButton).length && (b.prevButton = b.container.find(b.params.prevButton)))), b.isHorizontal = function() {
                        return "horizontal" === b.params.direction
                    }, b.rtl = b.isHorizontal() && ("rtl" === b.container[0].dir.toLowerCase() || "rtl" === b.container.css("direction")), b.rtl && b.classNames.push(b.params.containerModifierClass + "rtl"), b.rtl && (b.wrongRTL = "-webkit-box" === b.wrapper.css("display")), 1 < b.params.slidesPerColumn && b.classNames.push(b.params.containerModifierClass + "multirow"), b.device.android && b.classNames.push(b.params.containerModifierClass + "android"), b.container.addClass(b.classNames.join(" ")), b.translate = 0, b.progress = 0, b.velocity = 0, b.lockSwipeToNext = function() {
                        (b.params.allowSwipeToNext = !1) === b.params.allowSwipeToPrev && b.params.grabCursor && b.unsetGrabCursor()
                    }, b.lockSwipeToPrev = function() {
                        (b.params.allowSwipeToPrev = !1) === b.params.allowSwipeToNext && b.params.grabCursor && b.unsetGrabCursor()
                    }, b.lockSwipes = function() {
                        b.params.allowSwipeToNext = b.params.allowSwipeToPrev = !1, b.params.grabCursor && b.unsetGrabCursor()
                    }, b.unlockSwipeToNext = function() {
                        (b.params.allowSwipeToNext = !0) === b.params.allowSwipeToPrev && b.params.grabCursor && b.setGrabCursor()
                    }, b.unlockSwipeToPrev = function() {
                        (b.params.allowSwipeToPrev = !0) === b.params.allowSwipeToNext && b.params.grabCursor && b.setGrabCursor()
                    }, b.unlockSwipes = function() {
                        b.params.allowSwipeToNext = b.params.allowSwipeToPrev = !0, b.params.grabCursor && b.setGrabCursor()
                    }, b.setGrabCursor = function(e) {
                        b.container[0].style.cursor = "move", b.container[0].style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", b.container[0].style.cursor = e ? "-moz-grabbin" : "-moz-grab", b.container[0].style.cursor = e ? "grabbing" : "grab"
                    }, b.unsetGrabCursor = function() {
                        b.container[0].style.cursor = ""
                    }, b.params.grabCursor && b.setGrabCursor(), b.imagesToLoad = [], b.imagesLoaded = 0, b.loadImage = function(e, t, i, n, o, a) {
                        function r() {
                            a && a()
                        }
                        var s;
                        e.complete && o ? r() : t ? ((s = new window.Image).onload = r, s.onerror = r, n && (s.sizes = n), i && (s.srcset = i), t && (s.src = t)) : r()
                    }, b.preloadImages = function() {
                        function e() {
                            null != b && b && (void 0 !== b.imagesLoaded && b.imagesLoaded++, b.imagesLoaded === b.imagesToLoad.length && (b.params.updateOnImagesReady && b.update(), b.emit("onImagesReady", b)))
                        }
                        b.imagesToLoad = b.container.find("img");
                        for (var t = 0; t < b.imagesToLoad.length; t++) b.loadImage(b.imagesToLoad[t], b.imagesToLoad[t].currentSrc || b.imagesToLoad[t].getAttribute("src"), b.imagesToLoad[t].srcset || b.imagesToLoad[t].getAttribute("srcset"), b.imagesToLoad[t].sizes || b.imagesToLoad[t].getAttribute("sizes"), !0, e)
                    }, b.autoplayTimeoutId = void 0, b.autoplaying = !1, b.autoplayPaused = !1, b.startAutoplay = function() {
                        return void 0 === b.autoplayTimeoutId && !!b.params.autoplay && !b.autoplaying && (b.autoplaying = !0, b.emit("onAutoplayStart", b), void o())
                    }, b.stopAutoplay = function(e) {
                        b.autoplayTimeoutId && (b.autoplayTimeoutId && clearTimeout(b.autoplayTimeoutId), b.autoplaying = !1, b.autoplayTimeoutId = void 0, b.emit("onAutoplayStop", b))
                    }, b.pauseAutoplay = function(e) {
                        b.autoplayPaused || (b.autoplayTimeoutId && clearTimeout(b.autoplayTimeoutId), b.autoplayPaused = !0, 0 === e ? (b.autoplayPaused = !1, o()) : b.wrapper.transitionEnd(function() {
                            b && (b.autoplayPaused = !1, b.autoplaying ? o() : b.stopAutoplay())
                        }))
                    }, b.minTranslate = function() {
                        return -b.snapGrid[0]
                    }, b.maxTranslate = function() {
                        return -b.snapGrid[b.snapGrid.length - 1]
                    }, b.updateAutoHeight = function() {
                        var e, t = [],
                            i = 0;
                        if ("auto" !== b.params.slidesPerView && 1 < b.params.slidesPerView)
                            for (e = 0; e < Math.ceil(b.params.slidesPerView); e++) {
                                var n = b.activeIndex + e;
                                if (n > b.slides.length) break;
                                t.push(b.slides.eq(n)[0])
                            } else t.push(b.slides.eq(b.activeIndex)[0]);
                        for (e = 0; e < t.length; e++)
                            if (void 0 !== t[e]) {
                                var o = t[e].offsetHeight;
                                i = i < o ? o : i
                            } i && b.wrapper.css("height", i + "px")
                    }, b.updateContainerSize = function() {
                        var e, t;
                        e = void 0 !== b.params.width ? b.params.width : b.container[0].clientWidth, t = void 0 !== b.params.height ? b.params.height : b.container[0].clientHeight, 0 === e && b.isHorizontal() || 0 === t && !b.isHorizontal() || (e = e - parseInt(b.container.css("padding-left"), 10) - parseInt(b.container.css("padding-right"), 10), t = t - parseInt(b.container.css("padding-top"), 10) - parseInt(b.container.css("padding-bottom"), 10), b.width = e, b.height = t, b.size = b.isHorizontal() ? b.width : b.height)
                    }, b.updateSlidesSize = function() {
                        b.slides = b.wrapper.children("." + b.params.slideClass), b.snapGrid = [], b.slidesGrid = [], b.slidesSizesGrid = [];
                        var e, t = b.params.spaceBetween,
                            i = -b.params.slidesOffsetBefore,
                            o = 0,
                            a = 0;
                        if (void 0 !== b.size) {
                            var r, s;
                            "string" == typeof t && 0 <= t.indexOf("%") && (t = parseFloat(t.replace("%", "")) / 100 * b.size), b.virtualSize = -t, b.rtl ? b.slides.css({
                                marginLeft: "",
                                marginTop: ""
                            }) : b.slides.css({
                                marginRight: "",
                                marginBottom: ""
                            }), 1 < b.params.slidesPerColumn && (r = Math.floor(b.slides.length / b.params.slidesPerColumn) === b.slides.length / b.params.slidesPerColumn ? b.slides.length : Math.ceil(b.slides.length / b.params.slidesPerColumn) * b.params.slidesPerColumn, "auto" !== b.params.slidesPerView && "row" === b.params.slidesPerColumnFill && (r = Math.max(r, b.params.slidesPerView * b.params.slidesPerColumn)));
                            var l, p = b.params.slidesPerColumn,
                                d = r / p,
                                c = d - (b.params.slidesPerColumn * d - b.slides.length);
                            for (e = 0; e < b.slides.length; e++) {
                                s = 0;
                                var u, m, h, g = b.slides.eq(e);
                                1 < b.params.slidesPerColumn && ("column" === b.params.slidesPerColumnFill ? (h = e - (m = Math.floor(e / p)) * p, (c < m || m === c && h === p - 1) && ++h >= p && (h = 0, m++), u = m + h * r / p, g.css({
                                    "-webkit-box-ordinal-group": u,
                                    "-moz-box-ordinal-group": u,
                                    "-ms-flex-order": u,
                                    "-webkit-order": u,
                                    order: u
                                })) : m = e - (h = Math.floor(e / d)) * d, g.css("margin-" + (b.isHorizontal() ? "top" : "left"), 0 !== h && b.params.spaceBetween && b.params.spaceBetween + "px").attr("data-swiper-column", m).attr("data-swiper-row", h)), "none" !== g.css("display") && ("auto" === b.params.slidesPerView ? (s = b.isHorizontal() ? g.outerWidth(!0) : g.outerHeight(!0), b.params.roundLengths && (s = n(s))) : (s = (b.size - (b.params.slidesPerView - 1) * t) / b.params.slidesPerView, b.params.roundLengths && (s = n(s)), b.isHorizontal() ? b.slides[e].style.width = s + "px" : b.slides[e].style.height = s + "px"), b.slides[e].swiperSlideSize = s, b.slidesSizesGrid.push(s), b.params.centeredSlides ? (i = i + s / 2 + o / 2 + t, 0 === o && 0 !== e && (i = i - b.size / 2 - t), 0 === e && (i = i - b.size / 2 - t), Math.abs(i) < .001 && (i = 0), a % b.params.slidesPerGroup == 0 && b.snapGrid.push(i), b.slidesGrid.push(i)) : (a % b.params.slidesPerGroup == 0 && b.snapGrid.push(i), b.slidesGrid.push(i), i = i + s + t), b.virtualSize += s + t, o = s, a++)
                            }
                            if (b.virtualSize = Math.max(b.virtualSize, b.size) + b.params.slidesOffsetAfter, b.rtl && b.wrongRTL && ("slide" === b.params.effect || "coverflow" === b.params.effect) && b.wrapper.css({
                                    width: b.virtualSize + b.params.spaceBetween + "px"
                                }), b.support.flexbox && !b.params.setWrapperSize || (b.isHorizontal() ? b.wrapper.css({
                                    width: b.virtualSize + b.params.spaceBetween + "px"
                                }) : b.wrapper.css({
                                    height: b.virtualSize + b.params.spaceBetween + "px"
                                })), 1 < b.params.slidesPerColumn && (b.virtualSize = (s + b.params.spaceBetween) * r, b.virtualSize = Math.ceil(b.virtualSize / b.params.slidesPerColumn) - b.params.spaceBetween, b.isHorizontal() ? b.wrapper.css({
                                    width: b.virtualSize + b.params.spaceBetween + "px"
                                }) : b.wrapper.css({
                                    height: b.virtualSize + b.params.spaceBetween + "px"
                                }), b.params.centeredSlides)) {
                                for (l = [], e = 0; e < b.snapGrid.length; e++) b.snapGrid[e] < b.virtualSize + b.snapGrid[0] && l.push(b.snapGrid[e]);
                                b.snapGrid = l
                            }
                            if (!b.params.centeredSlides) {
                                for (l = [], e = 0; e < b.snapGrid.length; e++) b.snapGrid[e] <= b.virtualSize - b.size && l.push(b.snapGrid[e]);
                                b.snapGrid = l, 1 < Math.floor(b.virtualSize - b.size) - Math.floor(b.snapGrid[b.snapGrid.length - 1]) && b.snapGrid.push(b.virtualSize - b.size)
                            }
                            0 === b.snapGrid.length && (b.snapGrid = [0]), 0 !== b.params.spaceBetween && (b.isHorizontal() ? b.rtl ? b.slides.css({
                                marginLeft: t + "px"
                            }) : b.slides.css({
                                marginRight: t + "px"
                            }) : b.slides.css({
                                marginBottom: t + "px"
                            })), b.params.watchSlidesProgress && b.updateSlidesOffset()
                        }
                    }, b.updateSlidesOffset = function() {
                        for (var e = 0; e < b.slides.length; e++) b.slides[e].swiperSlideOffset = b.isHorizontal() ? b.slides[e].offsetLeft : b.slides[e].offsetTop
                    }, b.currentSlidesPerView = function() {
                        var e, t, i = 1;
                        if (b.params.centeredSlides) {
                            var n, o = b.slides[b.activeIndex].swiperSlideSize;
                            for (e = b.activeIndex + 1; e < b.slides.length; e++) b.slides[e] && !n && (i++, (o += b.slides[e].swiperSlideSize) > b.size && (n = !0));
                            for (t = b.activeIndex - 1; 0 <= t; t--) b.slides[t] && !n && (i++, (o += b.slides[t].swiperSlideSize) > b.size && (n = !0))
                        } else
                            for (e = b.activeIndex + 1; e < b.slides.length; e++) b.slidesGrid[e] - b.slidesGrid[b.activeIndex] < b.size && i++;
                        return i
                    }, b.updateSlidesProgress = function(e) {
                        if (void 0 === e && (e = b.translate || 0), 0 !== b.slides.length) {
                            void 0 === b.slides[0].swiperSlideOffset && b.updateSlidesOffset();
                            var t = -e;
                            b.rtl && (t = e), b.slides.removeClass(b.params.slideVisibleClass);
                            for (var i = 0; i < b.slides.length; i++) {
                                var n = b.slides[i],
                                    o = (t + (b.params.centeredSlides ? b.minTranslate() : 0) - n.swiperSlideOffset) / (n.swiperSlideSize + b.params.spaceBetween);
                                if (b.params.watchSlidesVisibility) {
                                    var a = -(t - n.swiperSlideOffset),
                                        r = a + b.slidesSizesGrid[i];
                                    (0 <= a && a < b.size || 0 < r && r <= b.size || a <= 0 && r >= b.size) && b.slides.eq(i).addClass(b.params.slideVisibleClass)
                                }
                                n.progress = b.rtl ? -o : o
                            }
                        }
                    }, b.updateProgress = function(e) {
                        void 0 === e && (e = b.translate || 0);
                        var t = b.maxTranslate() - b.minTranslate(),
                            i = b.isBeginning,
                            n = b.isEnd;
                        0 === t ? (b.progress = 0, b.isBeginning = b.isEnd = !0) : (b.progress = (e - b.minTranslate()) / t, b.isBeginning = b.progress <= 0, b.isEnd = 1 <= b.progress), b.isBeginning && !i && b.emit("onReachBeginning", b), b.isEnd && !n && b.emit("onReachEnd", b), b.params.watchSlidesProgress && b.updateSlidesProgress(e), b.emit("onProgress", b, b.progress)
                    }, b.updateActiveIndex = function() {
                        var e, t, i, n = b.rtl ? b.translate : -b.translate;
                        for (t = 0; t < b.slidesGrid.length; t++) void 0 !== b.slidesGrid[t + 1] ? n >= b.slidesGrid[t] && n < b.slidesGrid[t + 1] - (b.slidesGrid[t + 1] - b.slidesGrid[t]) / 2 ? e = t : n >= b.slidesGrid[t] && n < b.slidesGrid[t + 1] && (e = t + 1) : n >= b.slidesGrid[t] && (e = t);
                        b.params.normalizeSlideIndex && (e < 0 || void 0 === e) && (e = 0), (i = Math.floor(e / b.params.slidesPerGroup)) >= b.snapGrid.length && (i = b.snapGrid.length - 1), e !== b.activeIndex && (b.snapIndex = i, b.previousIndex = b.activeIndex, b.activeIndex = e, b.updateClasses(), b.updateRealIndex())
                    }, b.updateRealIndex = function() {
                        b.realIndex = parseInt(b.slides.eq(b.activeIndex).attr("data-swiper-slide-index") || b.activeIndex, 10)
                    }, b.updateClasses = function() {
                        b.slides.removeClass(b.params.slideActiveClass + " " + b.params.slideNextClass + " " + b.params.slidePrevClass + " " + b.params.slideDuplicateActiveClass + " " + b.params.slideDuplicateNextClass + " " + b.params.slideDuplicatePrevClass);
                        var e = b.slides.eq(b.activeIndex);
                        e.addClass(b.params.slideActiveClass), i.loop && (e.hasClass(b.params.slideDuplicateClass) ? b.wrapper.children("." + b.params.slideClass + ":not(." + b.params.slideDuplicateClass + ')[data-swiper-slide-index="' + b.realIndex + '"]').addClass(b.params.slideDuplicateActiveClass) : b.wrapper.children("." + b.params.slideClass + "." + b.params.slideDuplicateClass + '[data-swiper-slide-index="' + b.realIndex + '"]').addClass(b.params.slideDuplicateActiveClass));
                        var n = e.next("." + b.params.slideClass).addClass(b.params.slideNextClass);
                        b.params.loop && 0 === n.length && (n = b.slides.eq(0)).addClass(b.params.slideNextClass);
                        var o = e.prev("." + b.params.slideClass).addClass(b.params.slidePrevClass);
                        if (b.params.loop && 0 === o.length && (o = b.slides.eq(-1)).addClass(b.params.slidePrevClass), i.loop && (n.hasClass(b.params.slideDuplicateClass) ? b.wrapper.children("." + b.params.slideClass + ":not(." + b.params.slideDuplicateClass + ')[data-swiper-slide-index="' + n.attr("data-swiper-slide-index") + '"]').addClass(b.params.slideDuplicateNextClass) : b.wrapper.children("." + b.params.slideClass + "." + b.params.slideDuplicateClass + '[data-swiper-slide-index="' + n.attr("data-swiper-slide-index") + '"]').addClass(b.params.slideDuplicateNextClass), o.hasClass(b.params.slideDuplicateClass) ? b.wrapper.children("." + b.params.slideClass + ":not(." + b.params.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(b.params.slideDuplicatePrevClass) : b.wrapper.children("." + b.params.slideClass + "." + b.params.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(b.params.slideDuplicatePrevClass)), b.paginationContainer && 0 < b.paginationContainer.length) {
                            var a, r = b.params.loop ? Math.ceil((b.slides.length - 2 * b.loopedSlides) / b.params.slidesPerGroup) : b.snapGrid.length;
                            if (b.params.loop ? ((a = Math.ceil((b.activeIndex - b.loopedSlides) / b.params.slidesPerGroup)) > b.slides.length - 1 - 2 * b.loopedSlides && (a -= b.slides.length - 2 * b.loopedSlides), r - 1 < a && (a -= r), a < 0 && "bullets" !== b.params.paginationType && (a = r + a)) : a = void 0 !== b.snapIndex ? b.snapIndex : b.activeIndex || 0, "bullets" === b.params.paginationType && b.bullets && 0 < b.bullets.length && (b.bullets.removeClass(b.params.bulletActiveClass), 1 < b.paginationContainer.length ? b.bullets.each(function() {
                                    t(this).index() === a && t(this).addClass(b.params.bulletActiveClass)
                                }) : b.bullets.eq(a).addClass(b.params.bulletActiveClass)), "fraction" === b.params.paginationType && (b.paginationContainer.find("." + b.params.paginationCurrentClass).text(a + 1), b.paginationContainer.find("." + b.params.paginationTotalClass).text(r)), "progress" === b.params.paginationType) {
                                var s = (a + 1) / r,
                                    l = s,
                                    p = 1;
                                b.isHorizontal() || (p = s, l = 1), b.paginationContainer.find("." + b.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + l + ") scaleY(" + p + ")").transition(b.params.speed)
                            }
                            "custom" === b.params.paginationType && b.params.paginationCustomRender && (b.paginationContainer.html(b.params.paginationCustomRender(b, a + 1, r)), b.emit("onPaginationRendered", b, b.paginationContainer[0]))
                        }
                        b.params.loop || (b.params.prevButton && b.prevButton && 0 < b.prevButton.length && (b.isBeginning ? (b.prevButton.addClass(b.params.buttonDisabledClass), b.params.a11y && b.a11y && b.a11y.disable(b.prevButton)) : (b.prevButton.removeClass(b.params.buttonDisabledClass), b.params.a11y && b.a11y && b.a11y.enable(b.prevButton))), b.params.nextButton && b.nextButton && 0 < b.nextButton.length && (b.isEnd ? (b.nextButton.addClass(b.params.buttonDisabledClass), b.params.a11y && b.a11y && b.a11y.disable(b.nextButton)) : (b.nextButton.removeClass(b.params.buttonDisabledClass), b.params.a11y && b.a11y && b.a11y.enable(b.nextButton))))
                    }, b.updatePagination = function() {
                        if (b.params.pagination && b.paginationContainer && 0 < b.paginationContainer.length) {
                            var e = "";
                            if ("bullets" === b.params.paginationType) {
                                for (var t = b.params.loop ? Math.ceil((b.slides.length - 2 * b.loopedSlides) / b.params.slidesPerGroup) : b.snapGrid.length, i = 0; i < t; i++) e += b.params.paginationBulletRender ? b.params.paginationBulletRender(b, i, b.params.bulletClass) : "<" + b.params.paginationElement + ' class="' + b.params.bulletClass + '"></' + b.params.paginationElement + ">";
                                b.paginationContainer.html(e), b.bullets = b.paginationContainer.find("." + b.params.bulletClass), b.params.paginationClickable && b.params.a11y && b.a11y && b.a11y.initPagination()
                            }
                            "fraction" === b.params.paginationType && (e = b.params.paginationFractionRender ? b.params.paginationFractionRender(b, b.params.paginationCurrentClass, b.params.paginationTotalClass) : '<span class="' + b.params.paginationCurrentClass + '"></span> / <span class="' + b.params.paginationTotalClass + '"></span>', b.paginationContainer.html(e)), "progress" === b.params.paginationType && (e = b.params.paginationProgressRender ? b.params.paginationProgressRender(b, b.params.paginationProgressbarClass) : '<span class="' + b.params.paginationProgressbarClass + '"></span>', b.paginationContainer.html(e)), "custom" !== b.params.paginationType && b.emit("onPaginationRendered", b, b.paginationContainer[0])
                        }
                    }, b.update = function(e) {
                        function t() {
                            b.rtl, b.translate, i = Math.min(Math.max(b.translate, b.maxTranslate()), b.minTranslate()), b.setWrapperTranslate(i), b.updateActiveIndex(), b.updateClasses()
                        }
                        var i;
                        b && (b.updateContainerSize(), b.updateSlidesSize(), b.updateProgress(), b.updatePagination(), b.updateClasses(), b.params.scrollbar && b.scrollbar && b.scrollbar.set(), e ? (b.controller && b.controller.spline && (b.controller.spline = void 0), b.params.freeMode ? (t(), b.params.autoHeight && b.updateAutoHeight()) : (("auto" === b.params.slidesPerView || 1 < b.params.slidesPerView) && b.isEnd && !b.params.centeredSlides ? b.slideTo(b.slides.length - 1, 0, !1, !0) : b.slideTo(b.activeIndex, 0, !1, !0)) || t()) : b.params.autoHeight && b.updateAutoHeight())
                    }, b.onResize = function(e) {
                        b.params.onBeforeResize && b.params.onBeforeResize(b), b.params.breakpoints && b.setBreakpoint();
                        var t = b.params.allowSwipeToPrev,
                            i = b.params.allowSwipeToNext;
                        b.params.allowSwipeToPrev = b.params.allowSwipeToNext = !0, b.updateContainerSize(), b.updateSlidesSize(), ("auto" === b.params.slidesPerView || b.params.freeMode || e) && b.updatePagination(), b.params.scrollbar && b.scrollbar && b.scrollbar.set(), b.controller && b.controller.spline && (b.controller.spline = void 0);
                        var n = !1;
                        if (b.params.freeMode) {
                            var o = Math.min(Math.max(b.translate, b.maxTranslate()), b.minTranslate());
                            b.setWrapperTranslate(o), b.updateActiveIndex(), b.updateClasses(), b.params.autoHeight && b.updateAutoHeight()
                        } else b.updateClasses(), n = ("auto" === b.params.slidesPerView || 1 < b.params.slidesPerView) && b.isEnd && !b.params.centeredSlides ? b.slideTo(b.slides.length - 1, 0, !1, !0) : b.slideTo(b.activeIndex, 0, !1, !0);
                        b.params.lazyLoading && !n && b.lazy && b.lazy.load(), b.params.allowSwipeToPrev = t, b.params.allowSwipeToNext = i, b.params.onAfterResize && b.params.onAfterResize(b)
                    }, b.touchEventsDesktop = {
                        start: "mousedown",
                        move: "mousemove",
                        end: "mouseup"
                    }, window.navigator.pointerEnabled ? b.touchEventsDesktop = {
                        start: "pointerdown",
                        move: "pointermove",
                        end: "pointerup"
                    } : window.navigator.msPointerEnabled && (b.touchEventsDesktop = {
                        start: "MSPointerDown",
                        move: "MSPointerMove",
                        end: "MSPointerUp"
                    }), b.touchEvents = {
                        start: b.support.touch || !b.params.simulateTouch ? "touchstart" : b.touchEventsDesktop.start,
                        move: b.support.touch || !b.params.simulateTouch ? "touchmove" : b.touchEventsDesktop.move,
                        end: b.support.touch || !b.params.simulateTouch ? "touchend" : b.touchEventsDesktop.end
                    }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === b.params.touchEventsTarget ? b.container : b.wrapper).addClass("swiper-wp8-" + b.params.direction), b.initEvents = function(e) {
                        var t = e ? "off" : "on",
                            n = e ? "removeEventListener" : "addEventListener",
                            o = "container" === b.params.touchEventsTarget ? b.container[0] : b.wrapper[0],
                            a = b.support.touch ? o : document,
                            r = !!b.params.nested;
                        if (b.browser.ie) o[n](b.touchEvents.start, b.onTouchStart, !1), a[n](b.touchEvents.move, b.onTouchMove, r), a[n](b.touchEvents.end, b.onTouchEnd, !1);
                        else {
                            if (b.support.touch) {
                                var s = !("touchstart" !== b.touchEvents.start || !b.support.passiveListener || !b.params.passiveListeners) && {
                                    passive: !0,
                                    capture: !1
                                };
                                o[n](b.touchEvents.start, b.onTouchStart, s), o[n](b.touchEvents.move, b.onTouchMove, r), o[n](b.touchEvents.end, b.onTouchEnd, s)
                            }(i.simulateTouch && !b.device.ios && !b.device.android || i.simulateTouch && !b.support.touch && b.device.ios) && (o[n]("mousedown", b.onTouchStart, !1), document[n]("mousemove", b.onTouchMove, r), document[n]("mouseup", b.onTouchEnd, !1))
                        }
                        window[n]("resize", b.onResize), b.params.nextButton && b.nextButton && 0 < b.nextButton.length && (b.nextButton[t]("click", b.onClickNext), b.params.a11y && b.a11y && b.nextButton[t]("keydown", b.a11y.onEnterKey)), b.params.prevButton && b.prevButton && 0 < b.prevButton.length && (b.prevButton[t]("click", b.onClickPrev), b.params.a11y && b.a11y && b.prevButton[t]("keydown", b.a11y.onEnterKey)), b.params.pagination && b.params.paginationClickable && (b.paginationContainer[t]("click", "." + b.params.bulletClass, b.onClickIndex), b.params.a11y && b.a11y && b.paginationContainer[t]("keydown", "." + b.params.bulletClass, b.a11y.onEnterKey)), (b.params.preventClicks || b.params.preventClicksPropagation) && o[n]("click", b.preventClicks, !0)
                    }, b.attachEvents = function() {
                        b.initEvents()
                    }, b.detachEvents = function() {
                        b.initEvents(!0)
                    }, b.allowClick = !0, b.preventClicks = function(e) {
                        b.allowClick || (b.params.preventClicks && e.preventDefault(), b.params.preventClicksPropagation && b.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
                    }, b.onClickNext = function(e) {
                        e.preventDefault(), b.isEnd && !b.params.loop || b.slideNext()
                    }, b.onClickPrev = function(e) {
                        e.preventDefault(), b.isBeginning && !b.params.loop || b.slidePrev()
                    }, b.onClickIndex = function(e) {
                        e.preventDefault();
                        var i = t(this).index() * b.params.slidesPerGroup;
                        b.params.loop && (i += b.loopedSlides), b.slideTo(i)
                    }, b.updateClickedSlide = function(e) {
                        var i = a(e, "." + b.params.slideClass),
                            n = !1;
                        if (i)
                            for (var o = 0; o < b.slides.length; o++) b.slides[o] === i && (n = !0);
                        if (!i || !n) return b.clickedSlide = void 0, void(b.clickedIndex = void 0);
                        if (b.clickedSlide = i, b.clickedIndex = t(i).index(), b.params.slideToClickedSlide && void 0 !== b.clickedIndex && b.clickedIndex !== b.activeIndex) {
                            var r, s = b.clickedIndex,
                                l = "auto" === b.params.slidesPerView ? b.currentSlidesPerView() : b.params.slidesPerView;
                            if (b.params.loop) {
                                if (b.animating) return;
                                r = parseInt(t(b.clickedSlide).attr("data-swiper-slide-index"), 10), b.params.centeredSlides ? s < b.loopedSlides - l / 2 || s > b.slides.length - b.loopedSlides + l / 2 ? (b.fixLoop(), s = b.wrapper.children("." + b.params.slideClass + '[data-swiper-slide-index="' + r + '"]:not(.' + b.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function() {
                                    b.slideTo(s)
                                }, 0)) : b.slideTo(s) : s > b.slides.length - l ? (b.fixLoop(), s = b.wrapper.children("." + b.params.slideClass + '[data-swiper-slide-index="' + r + '"]:not(.' + b.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function() {
                                    b.slideTo(s)
                                }, 0)) : b.slideTo(s)
                            } else b.slideTo(s)
                        }
                    };
                    var k, C, S, T, M, z, D, I, E, L, P, A, j = "input, select, textarea, button, video",
                        N = Date.now(),
                        B = [];
                    for (var H in b.animating = !1, b.touches = {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        }, b.onTouchStart = function(e) {
                            if (e.originalEvent && (e = e.originalEvent), (P = "touchstart" === e.type) || !("which" in e) || 3 !== e.which)
                                if (b.params.noSwiping && a(e, "." + b.params.noSwipingClass)) b.allowClick = !0;
                                else if (!b.params.swipeHandler || a(e, b.params.swipeHandler)) {
                                var i = b.touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
                                    n = b.touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY;
                                if (!(b.device.ios && b.params.iOSEdgeSwipeDetection && i <= b.params.iOSEdgeSwipeThreshold)) {
                                    if (S = !(C = !(k = !0)), A = M = void 0, b.touches.startX = i, b.touches.startY = n, T = Date.now(), b.allowClick = !0, b.updateContainerSize(), b.swipeDirection = void 0, 0 < b.params.threshold && (I = !1), "touchstart" !== e.type) {
                                        var o = !0;
                                        t(e.target).is(j) && (o = !1), document.activeElement && t(document.activeElement).is(j) && document.activeElement.blur(), o && e.preventDefault()
                                    }
                                    b.emit("onTouchStart", b, e)
                                }
                            }
                        }, b.onTouchMove = function(e) {
                            if (e.originalEvent && (e = e.originalEvent), !P || "mousemove" !== e.type) {
                                if (e.preventedByNestedSwiper) return b.touches.startX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, void(b.touches.startY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY);
                                if (b.params.onlyExternal) return b.allowClick = !1, void(k && (b.touches.startX = b.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, b.touches.startY = b.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, T = Date.now()));
                                if (P && b.params.touchReleaseOnEdges && !b.params.loop)
                                    if (b.isHorizontal()) {
                                        if (b.touches.currentX < b.touches.startX && b.translate <= b.maxTranslate() || b.touches.currentX > b.touches.startX && b.translate >= b.minTranslate()) return
                                    } else if (b.touches.currentY < b.touches.startY && b.translate <= b.maxTranslate() || b.touches.currentY > b.touches.startY && b.translate >= b.minTranslate()) return;
                                if (P && document.activeElement && e.target === document.activeElement && t(e.target).is(j)) return C = !0, void(b.allowClick = !1);
                                if (S && b.emit("onTouchMove", b, e), !(e.targetTouches && 1 < e.targetTouches.length)) {
                                    var n;
                                    if (b.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                                        b.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, void 0 === M && (M = !(b.isHorizontal() && b.touches.currentY === b.touches.startY || !b.isHorizontal() && b.touches.currentX === b.touches.startX) && (n = 180 * Math.atan2(Math.abs(b.touches.currentY - b.touches.startY), Math.abs(b.touches.currentX - b.touches.startX)) / Math.PI, b.isHorizontal() ? n > b.params.touchAngle : 90 - n > b.params.touchAngle)), M && b.emit("onTouchMoveOpposite", b, e), void 0 === A && (b.touches.currentX === b.touches.startX && b.touches.currentY === b.touches.startY || (A = !0)), k)
                                        if (M) k = !1;
                                        else if (A) {
                                        b.allowClick = !1, b.emit("onSliderMove", b, e), e.preventDefault(), b.params.touchMoveStopPropagation && !b.params.nested && e.stopPropagation(), C || (i.loop && b.fixLoop(), D = b.getWrapperTranslate(), b.setWrapperTransition(0), b.animating && b.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), b.params.autoplay && b.autoplaying && (b.params.autoplayDisableOnInteraction ? b.stopAutoplay() : b.pauseAutoplay()), L = !1, !b.params.grabCursor || !0 !== b.params.allowSwipeToNext && !0 !== b.params.allowSwipeToPrev || b.setGrabCursor(!0)), C = !0;
                                        var o = b.touches.diff = b.isHorizontal() ? b.touches.currentX - b.touches.startX : b.touches.currentY - b.touches.startY;
                                        o *= b.params.touchRatio, b.rtl && (o = -o), b.swipeDirection = 0 < o ? "prev" : "next", z = o + D;
                                        var a = !0;
                                        if (0 < o && z > b.minTranslate() ? (a = !1, b.params.resistance && (z = b.minTranslate() - 1 + Math.pow(-b.minTranslate() + D + o, b.params.resistanceRatio))) : o < 0 && z < b.maxTranslate() && (a = !1, b.params.resistance && (z = b.maxTranslate() + 1 - Math.pow(b.maxTranslate() - D - o, b.params.resistanceRatio))), a && (e.preventedByNestedSwiper = !0), !b.params.allowSwipeToNext && "next" === b.swipeDirection && z < D && (z = D), !b.params.allowSwipeToPrev && "prev" === b.swipeDirection && D < z && (z = D), 0 < b.params.threshold) {
                                            if (!(Math.abs(o) > b.params.threshold || I)) return void(z = D);
                                            if (!I) return I = !0, b.touches.startX = b.touches.currentX, b.touches.startY = b.touches.currentY, z = D, void(b.touches.diff = b.isHorizontal() ? b.touches.currentX - b.touches.startX : b.touches.currentY - b.touches.startY)
                                        }
                                        b.params.followFinger && ((b.params.freeMode || b.params.watchSlidesProgress) && b.updateActiveIndex(), b.params.freeMode && (0 === B.length && B.push({
                                            position: b.touches[b.isHorizontal() ? "startX" : "startY"],
                                            time: T
                                        }), B.push({
                                            position: b.touches[b.isHorizontal() ? "currentX" : "currentY"],
                                            time: (new window.Date).getTime()
                                        })), b.updateProgress(z), b.setWrapperTranslate(z))
                                    }
                                }
                            }
                        }, b.onTouchEnd = function(e) {
                            if (e.originalEvent && (e = e.originalEvent), S && b.emit("onTouchEnd", b, e), S = !1, k) {
                                b.params.grabCursor && C && k && (!0 === b.params.allowSwipeToNext || !0 === b.params.allowSwipeToPrev) && b.setGrabCursor(!1);
                                var i, n = Date.now(),
                                    o = n - T;
                                if (b.allowClick && (b.updateClickedSlide(e), b.emit("onTap", b, e), o < 300 && 300 < n - N && (E && clearTimeout(E), E = setTimeout(function() {
                                        b && (b.params.paginationHide && 0 < b.paginationContainer.length && !t(e.target).hasClass(b.params.bulletClass) && b.paginationContainer.toggleClass(b.params.paginationHiddenClass), b.emit("onClick", b, e))
                                    }, 300)), o < 300 && n - N < 300 && (E && clearTimeout(E), b.emit("onDoubleTap", b, e))), N = Date.now(), setTimeout(function() {
                                        b && (b.allowClick = !0)
                                    }, 0), k && C && b.swipeDirection && 0 !== b.touches.diff && z !== D)
                                    if (k = C = !1, i = b.params.followFinger ? b.rtl ? b.translate : -b.translate : -z, b.params.freeMode) {
                                        if (i < -b.minTranslate()) return void b.slideTo(b.activeIndex);
                                        if (i > -b.maxTranslate()) return void(b.slides.length < b.snapGrid.length ? b.slideTo(b.snapGrid.length - 1) : b.slideTo(b.slides.length - 1));
                                        if (b.params.freeModeMomentum) {
                                            if (1 < B.length) {
                                                var a = B.pop(),
                                                    r = B.pop(),
                                                    s = a.position - r.position,
                                                    l = a.time - r.time;
                                                b.velocity = s / l, b.velocity = b.velocity / 2, Math.abs(b.velocity) < b.params.freeModeMinimumVelocity && (b.velocity = 0), (150 < l || 300 < (new window.Date).getTime() - a.time) && (b.velocity = 0)
                                            } else b.velocity = 0;
                                            b.velocity = b.velocity * b.params.freeModeMomentumVelocityRatio, B.length = 0;
                                            var p = 1e3 * b.params.freeModeMomentumRatio,
                                                d = b.velocity * p,
                                                c = b.translate + d;
                                            b.rtl && (c = -c);
                                            var u, m = !1,
                                                h = 20 * Math.abs(b.velocity) * b.params.freeModeMomentumBounceRatio;
                                            if (c < b.maxTranslate()) b.params.freeModeMomentumBounce ? (c + b.maxTranslate() < -h && (c = b.maxTranslate() - h), u = b.maxTranslate(), L = m = !0) : c = b.maxTranslate();
                                            else if (c > b.minTranslate()) b.params.freeModeMomentumBounce ? (c - b.minTranslate() > h && (c = b.minTranslate() + h), u = b.minTranslate(), L = m = !0) : c = b.minTranslate();
                                            else if (b.params.freeModeSticky) {
                                                var g, f = 0;
                                                for (f = 0; f < b.snapGrid.length; f += 1)
                                                    if (b.snapGrid[f] > -c) {
                                                        g = f;
                                                        break
                                                    } c = Math.abs(b.snapGrid[g] - c) < Math.abs(b.snapGrid[g - 1] - c) || "next" === b.swipeDirection ? b.snapGrid[g] : b.snapGrid[g - 1], b.rtl || (c = -c)
                                            }
                                            if (0 !== b.velocity) p = b.rtl ? Math.abs((-c - b.translate) / b.velocity) : Math.abs((c - b.translate) / b.velocity);
                                            else if (b.params.freeModeSticky) return void b.slideReset();
                                            b.params.freeModeMomentumBounce && m ? (b.updateProgress(u), b.setWrapperTransition(p), b.setWrapperTranslate(c), b.onTransitionStart(), b.animating = !0, b.wrapper.transitionEnd(function() {
                                                b && L && (b.emit("onMomentumBounce", b), b.setWrapperTransition(b.params.speed), b.setWrapperTranslate(u), b.wrapper.transitionEnd(function() {
                                                    b && b.onTransitionEnd()
                                                }))
                                            })) : b.velocity ? (b.updateProgress(c), b.setWrapperTransition(p), b.setWrapperTranslate(c), b.onTransitionStart(), b.animating || (b.animating = !0, b.wrapper.transitionEnd(function() {
                                                b && b.onTransitionEnd()
                                            }))) : b.updateProgress(c), b.updateActiveIndex()
                                        }(!b.params.freeModeMomentum || o >= b.params.longSwipesMs) && (b.updateProgress(), b.updateActiveIndex())
                                    } else {
                                        var v, w = 0,
                                            y = b.slidesSizesGrid[0];
                                        for (v = 0; v < b.slidesGrid.length; v += b.params.slidesPerGroup) void 0 !== b.slidesGrid[v + b.params.slidesPerGroup] ? i >= b.slidesGrid[v] && i < b.slidesGrid[v + b.params.slidesPerGroup] && (w = v, y = b.slidesGrid[v + b.params.slidesPerGroup] - b.slidesGrid[v]) : i >= b.slidesGrid[v] && (w = v, y = b.slidesGrid[b.slidesGrid.length - 1] - b.slidesGrid[b.slidesGrid.length - 2]);
                                        var x = (i - b.slidesGrid[w]) / y;
                                        if (o > b.params.longSwipesMs) {
                                            if (!b.params.longSwipes) return void b.slideTo(b.activeIndex);
                                            "next" === b.swipeDirection && (x >= b.params.longSwipesRatio ? b.slideTo(w + b.params.slidesPerGroup) : b.slideTo(w)), "prev" === b.swipeDirection && (x > 1 - b.params.longSwipesRatio ? b.slideTo(w + b.params.slidesPerGroup) : b.slideTo(w))
                                        } else {
                                            if (!b.params.shortSwipes) return void b.slideTo(b.activeIndex);
                                            "next" === b.swipeDirection && b.slideTo(w + b.params.slidesPerGroup), "prev" === b.swipeDirection && b.slideTo(w)
                                        }
                                    }
                                else k = C = !1
                            }
                        }, b._slideTo = function(e, t) {
                            return b.slideTo(e, t, !0, !0)
                        }, b.slideTo = function(e, t, i, n) {
                            void 0 === i && (i = !0), void 0 === e && (e = 0), e < 0 && (e = 0), b.snapIndex = Math.floor(e / b.params.slidesPerGroup), b.snapIndex >= b.snapGrid.length && (b.snapIndex = b.snapGrid.length - 1);
                            var o = -b.snapGrid[b.snapIndex];
                            if (b.params.autoplay && b.autoplaying && (n || !b.params.autoplayDisableOnInteraction ? b.pauseAutoplay(t) : b.stopAutoplay()), b.updateProgress(o), b.params.normalizeSlideIndex)
                                for (var a = 0; a < b.slidesGrid.length; a++) - Math.floor(100 * o) >= Math.floor(100 * b.slidesGrid[a]) && (e = a);
                            return !(!b.params.allowSwipeToNext && o < b.translate && o < b.minTranslate() || !b.params.allowSwipeToPrev && o > b.translate && o > b.maxTranslate() && (b.activeIndex || 0) !== e || (void 0 === t && (t = b.params.speed), b.previousIndex = b.activeIndex || 0, b.activeIndex = e, b.updateRealIndex(), b.rtl && -o === b.translate || !b.rtl && o === b.translate ? (b.params.autoHeight && b.updateAutoHeight(), b.updateClasses(), "slide" !== b.params.effect && b.setWrapperTranslate(o), 1) : (b.updateClasses(), b.onTransitionStart(i), 0 === t || b.browser.lteIE9 ? (b.setWrapperTranslate(o), b.setWrapperTransition(0), b.onTransitionEnd(i)) : (b.setWrapperTranslate(o), b.setWrapperTransition(t), b.animating || (b.animating = !0, b.wrapper.transitionEnd(function() {
                                b && b.onTransitionEnd(i)
                            }))), 0)))
                        }, b.onTransitionStart = function(e) {
                            void 0 === e && (e = !0), b.params.autoHeight && b.updateAutoHeight(), b.lazy && b.lazy.onTransitionStart(), e && (b.emit("onTransitionStart", b), b.activeIndex !== b.previousIndex && (b.emit("onSlideChangeStart", b), b.activeIndex > b.previousIndex ? b.emit("onSlideNextStart", b) : b.emit("onSlidePrevStart", b)))
                        }, b.onTransitionEnd = function(e) {
                            b.animating = !1, b.setWrapperTransition(0), void 0 === e && (e = !0), b.lazy && b.lazy.onTransitionEnd(), e && (b.emit("onTransitionEnd", b), b.activeIndex !== b.previousIndex && (b.emit("onSlideChangeEnd", b), b.activeIndex > b.previousIndex ? b.emit("onSlideNextEnd", b) : b.emit("onSlidePrevEnd", b))), b.params.history && b.history && b.history.setHistory(b.params.history, b.activeIndex), b.params.hashnav && b.hashnav && b.hashnav.setHash()
                        }, b.slideNext = function(e, t, i) {
                            return b.params.loop ? !b.animating && (b.fixLoop(), b.container[0].clientLeft, b.slideTo(b.activeIndex + b.params.slidesPerGroup, t, e, i)) : b.slideTo(b.activeIndex + b.params.slidesPerGroup, t, e, i)
                        }, b._slideNext = function(e) {
                            return b.slideNext(!0, e, !0)
                        }, b.slidePrev = function(e, t, i) {
                            return b.params.loop ? !b.animating && (b.fixLoop(), b.container[0].clientLeft, b.slideTo(b.activeIndex - 1, t, e, i)) : b.slideTo(b.activeIndex - 1, t, e, i)
                        }, b._slidePrev = function(e) {
                            return b.slidePrev(!0, e, !0)
                        }, b.slideReset = function(e, t, i) {
                            return b.slideTo(b.activeIndex, t, e)
                        }, b.disableTouchControl = function() {
                            return b.params.onlyExternal = !0
                        }, b.enableTouchControl = function() {
                            return !(b.params.onlyExternal = !1)
                        }, b.setWrapperTransition = function(e, t) {
                            b.wrapper.transition(e), "slide" !== b.params.effect && b.effects[b.params.effect] && b.effects[b.params.effect].setTransition(e), b.params.parallax && b.parallax && b.parallax.setTransition(e), b.params.scrollbar && b.scrollbar && b.scrollbar.setTransition(e), b.params.control && b.controller && b.controller.setTransition(e, t), b.emit("onSetTransition", b, e)
                        }, b.setWrapperTranslate = function(e, t, i) {
                            var o = 0,
                                a = 0;
                            b.isHorizontal() ? o = b.rtl ? -e : e : a = e, b.params.roundLengths && (o = n(o), a = n(a)), b.params.virtualTranslate || (b.support.transforms3d ? b.wrapper.transform("translate3d(" + o + "px, " + a + "px, 0px)") : b.wrapper.transform("translate(" + o + "px, " + a + "px)")), b.translate = b.isHorizontal() ? o : a;
                            var r = b.maxTranslate() - b.minTranslate();
                            (0 === r ? 0 : (e - b.minTranslate()) / r) !== b.progress && b.updateProgress(e), t && b.updateActiveIndex(), "slide" !== b.params.effect && b.effects[b.params.effect] && b.effects[b.params.effect].setTranslate(b.translate), b.params.parallax && b.parallax && b.parallax.setTranslate(b.translate), b.params.scrollbar && b.scrollbar && b.scrollbar.setTranslate(b.translate), b.params.control && b.controller && b.controller.setTranslate(b.translate, i), b.emit("onSetTranslate", b, b.translate)
                        }, b.getTranslate = function(e, t) {
                            var i, n, o, a;
                            return void 0 === t && (t = "x"), b.params.virtualTranslate ? b.rtl ? -b.translate : b.translate : (o = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? (6 < (n = o.transform || o.webkitTransform).split(",").length && (n = n.split(", ").map(function(e) {
                                return e.replace(",", ".")
                            }).join(", ")), a = new window.WebKitCSSMatrix("none" === n ? "" : n)) : i = (a = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (n = window.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (n = window.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), b.rtl && n && (n = -n), n || 0)
                        }, b.getWrapperTranslate = function(e) {
                            return void 0 === e && (e = b.isHorizontal() ? "x" : "y"), b.getTranslate(b.wrapper[0], e)
                        }, b.observers = [], b.initObservers = function() {
                            if (b.params.observeParents)
                                for (var e = b.container.parents(), t = 0; t < e.length; t++) r(e[t]);
                            r(b.container[0], {
                                childList: !1
                            }), r(b.wrapper[0], {
                                attributes: !1
                            })
                        }, b.disconnectObservers = function() {
                            for (var e = 0; e < b.observers.length; e++) b.observers[e].disconnect();
                            b.observers = []
                        }, b.createLoop = function() {
                            b.wrapper.children("." + b.params.slideClass + "." + b.params.slideDuplicateClass).remove();
                            var e = b.wrapper.children("." + b.params.slideClass);
                            "auto" !== b.params.slidesPerView || b.params.loopedSlides || (b.params.loopedSlides = e.length), b.loopedSlides = parseInt(b.params.loopedSlides || b.params.slidesPerView, 10), b.loopedSlides = b.loopedSlides + b.params.loopAdditionalSlides, b.loopedSlides > e.length && (b.loopedSlides = e.length);
                            var i, n = [],
                                o = [];
                            for (e.each(function(i, a) {
                                    var r = t(this);
                                    i < b.loopedSlides && o.push(a), i < e.length && i >= e.length - b.loopedSlides && n.push(a), r.attr("data-swiper-slide-index", i)
                                }), i = 0; i < o.length; i++) b.wrapper.append(t(o[i].cloneNode(!0)).addClass(b.params.slideDuplicateClass));
                            for (i = n.length - 1; 0 <= i; i--) b.wrapper.prepend(t(n[i].cloneNode(!0)).addClass(b.params.slideDuplicateClass))
                        }, b.destroyLoop = function() {
                            b.wrapper.children("." + b.params.slideClass + "." + b.params.slideDuplicateClass).remove(), b.slides.removeAttr("data-swiper-slide-index")
                        }, b.reLoop = function(e) {
                            var t = b.activeIndex - b.loopedSlides;
                            b.destroyLoop(), b.createLoop(), b.updateSlidesSize(), e && b.slideTo(t + b.loopedSlides, 0, !1)
                        }, b.fixLoop = function() {
                            var e;
                            b.activeIndex < b.loopedSlides ? (e = b.slides.length - 3 * b.loopedSlides + b.activeIndex, e += b.loopedSlides, b.slideTo(e, 0, !1, !0)) : ("auto" === b.params.slidesPerView && b.activeIndex >= 2 * b.loopedSlides || b.activeIndex > b.slides.length - 2 * b.params.slidesPerView) && (e = -b.slides.length + b.activeIndex + b.loopedSlides, e += b.loopedSlides, b.slideTo(e, 0, !1, !0))
                        }, b.appendSlide = function(e) {
                            if (b.params.loop && b.destroyLoop(), "object" == typeof e && e.length)
                                for (var t = 0; t < e.length; t++) e[t] && b.wrapper.append(e[t]);
                            else b.wrapper.append(e);
                            b.params.loop && b.createLoop(), b.params.observer && b.support.observer || b.update(!0)
                        }, b.prependSlide = function(e) {
                            b.params.loop && b.destroyLoop();
                            var t = b.activeIndex + 1;
                            if ("object" == typeof e && e.length) {
                                for (var i = 0; i < e.length; i++) e[i] && b.wrapper.prepend(e[i]);
                                t = b.activeIndex + e.length
                            } else b.wrapper.prepend(e);
                            b.params.loop && b.createLoop(), b.params.observer && b.support.observer || b.update(!0), b.slideTo(t, 0, !1)
                        }, b.removeSlide = function(e) {
                            b.params.loop && (b.destroyLoop(), b.slides = b.wrapper.children("." + b.params.slideClass));
                            var t, i = b.activeIndex;
                            if ("object" == typeof e && e.length) {
                                for (var n = 0; n < e.length; n++) t = e[n], b.slides[t] && b.slides.eq(t).remove(), t < i && i--;
                                i = Math.max(i, 0)
                            } else t = e, b.slides[t] && b.slides.eq(t).remove(), t < i && i--, i = Math.max(i, 0);
                            b.params.loop && b.createLoop(), b.params.observer && b.support.observer || b.update(!0), b.params.loop ? b.slideTo(i + b.loopedSlides, 0, !1) : b.slideTo(i, 0, !1)
                        }, b.removeAllSlides = function() {
                            for (var e = [], t = 0; t < b.slides.length; t++) e.push(t);
                            b.removeSlide(e)
                        }, b.effects = {
                            fade: {
                                setTranslate: function() {
                                    for (var e = 0; e < b.slides.length; e++) {
                                        var t = b.slides.eq(e),
                                            i = -t[0].swiperSlideOffset;
                                        b.params.virtualTranslate || (i -= b.translate);
                                        var n = 0;
                                        b.isHorizontal() || (n = i, i = 0);
                                        var o = b.params.fade.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                                        t.css({
                                            opacity: o
                                        }).transform("translate3d(" + i + "px, " + n + "px, 0px)")
                                    }
                                },
                                setTransition: function(e) {
                                    if (b.slides.transition(e), b.params.virtualTranslate && 0 !== e) {
                                        var t = !1;
                                        b.slides.transitionEnd(function() {
                                            if (!t && b) {
                                                t = !0, b.animating = !1;
                                                for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], i = 0; i < e.length; i++) b.wrapper.trigger(e[i])
                                            }
                                        })
                                    }
                                }
                            },
                            flip: {
                                setTranslate: function() {
                                    for (var e = 0; e < b.slides.length; e++) {
                                        var i = b.slides.eq(e),
                                            n = i[0].progress;
                                        b.params.flip.limitRotation && (n = Math.max(Math.min(i[0].progress, 1), -1));
                                        var o = -180 * n,
                                            a = 0,
                                            r = -i[0].swiperSlideOffset,
                                            s = 0;
                                        if (b.isHorizontal() ? b.rtl && (o = -o) : (s = r, a = -o, o = r = 0), i[0].style.zIndex = -Math.abs(Math.round(n)) + b.slides.length, b.params.flip.slideShadows) {
                                            var l = b.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top"),
                                                p = b.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom");
                                            0 === l.length && (l = t('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "left" : "top") + '"></div>'), i.append(l)), 0 === p.length && (p = t('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "right" : "bottom") + '"></div>'), i.append(p)), l.length && (l[0].style.opacity = Math.max(-n, 0)), p.length && (p[0].style.opacity = Math.max(n, 0))
                                        }
                                        i.transform("translate3d(" + r + "px, " + s + "px, 0px) rotateX(" + a + "deg) rotateY(" + o + "deg)")
                                    }
                                },
                                setTransition: function(e) {
                                    if (b.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), b.params.virtualTranslate && 0 !== e) {
                                        var i = !1;
                                        b.slides.eq(b.activeIndex).transitionEnd(function() {
                                            if (!i && b && t(this).hasClass(b.params.slideActiveClass)) {
                                                i = !0, b.animating = !1;
                                                for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], n = 0; n < e.length; n++) b.wrapper.trigger(e[n])
                                            }
                                        })
                                    }
                                }
                            },
                            cube: {
                                setTranslate: function() {
                                    var e, i = 0;
                                    b.params.cube.shadow && (b.isHorizontal() ? (0 === (e = b.wrapper.find(".swiper-cube-shadow")).length && (e = t('<div class="swiper-cube-shadow"></div>'), b.wrapper.append(e)), e.css({
                                        height: b.width + "px"
                                    })) : 0 === (e = b.container.find(".swiper-cube-shadow")).length && (e = t('<div class="swiper-cube-shadow"></div>'), b.container.append(e)));
                                    for (var n = 0; n < b.slides.length; n++) {
                                        var o = b.slides.eq(n),
                                            a = 90 * n,
                                            r = Math.floor(a / 360);
                                        b.rtl && (a = -a, r = Math.floor(-a / 360));
                                        var s = Math.max(Math.min(o[0].progress, 1), -1),
                                            l = 0,
                                            p = 0,
                                            d = 0;
                                        n % 4 == 0 ? (l = 4 * -r * b.size, d = 0) : (n - 1) % 4 == 0 ? (l = 0, d = 4 * -r * b.size) : (n - 2) % 4 == 0 ? (l = b.size + 4 * r * b.size, d = b.size) : (n - 3) % 4 == 0 && (l = -b.size, d = 3 * b.size + 4 * b.size * r), b.rtl && (l = -l), b.isHorizontal() || (p = l, l = 0);
                                        var c = "rotateX(" + (b.isHorizontal() ? 0 : -a) + "deg) rotateY(" + (b.isHorizontal() ? a : 0) + "deg) translate3d(" + l + "px, " + p + "px, " + d + "px)";
                                        if (s <= 1 && -1 < s && (i = 90 * n + 90 * s, b.rtl && (i = 90 * -n - 90 * s)), o.transform(c), b.params.cube.slideShadows) {
                                            var u = b.isHorizontal() ? o.find(".swiper-slide-shadow-left") : o.find(".swiper-slide-shadow-top"),
                                                m = b.isHorizontal() ? o.find(".swiper-slide-shadow-right") : o.find(".swiper-slide-shadow-bottom");
                                            0 === u.length && (u = t('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "left" : "top") + '"></div>'), o.append(u)), 0 === m.length && (m = t('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "right" : "bottom") + '"></div>'), o.append(m)), u.length && (u[0].style.opacity = Math.max(-s, 0)), m.length && (m[0].style.opacity = Math.max(s, 0))
                                        }
                                    }
                                    if (b.wrapper.css({
                                            "-webkit-transform-origin": "50% 50% -" + b.size / 2 + "px",
                                            "-moz-transform-origin": "50% 50% -" + b.size / 2 + "px",
                                            "-ms-transform-origin": "50% 50% -" + b.size / 2 + "px",
                                            "transform-origin": "50% 50% -" + b.size / 2 + "px"
                                        }), b.params.cube.shadow)
                                        if (b.isHorizontal()) e.transform("translate3d(0px, " + (b.width / 2 + b.params.cube.shadowOffset) + "px, " + -b.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + b.params.cube.shadowScale + ")");
                                        else {
                                            var h = Math.abs(i) - 90 * Math.floor(Math.abs(i) / 90),
                                                g = 1.5 - (Math.sin(2 * h * Math.PI / 360) / 2 + Math.cos(2 * h * Math.PI / 360) / 2),
                                                f = b.params.cube.shadowScale,
                                                v = b.params.cube.shadowScale / g,
                                                w = b.params.cube.shadowOffset;
                                            e.transform("scale3d(" + f + ", 1, " + v + ") translate3d(0px, " + (b.height / 2 + w) + "px, " + -b.height / 2 / v + "px) rotateX(-90deg)")
                                        } var y = b.isSafari || b.isUiWebView ? -b.size / 2 : 0;
                                    b.wrapper.transform("translate3d(0px,0," + y + "px) rotateX(" + (b.isHorizontal() ? 0 : i) + "deg) rotateY(" + (b.isHorizontal() ? -i : 0) + "deg)")
                                },
                                setTransition: function(e) {
                                    b.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), b.params.cube.shadow && !b.isHorizontal() && b.container.find(".swiper-cube-shadow").transition(e)
                                }
                            },
                            coverflow: {
                                setTranslate: function() {
                                    for (var e = b.translate, i = b.isHorizontal() ? -e + b.width / 2 : -e + b.height / 2, n = b.isHorizontal() ? b.params.coverflow.rotate : -b.params.coverflow.rotate, o = b.params.coverflow.depth, a = 0, r = b.slides.length; a < r; a++) {
                                        var s = b.slides.eq(a),
                                            l = b.slidesSizesGrid[a],
                                            p = (i - s[0].swiperSlideOffset - l / 2) / l * b.params.coverflow.modifier,
                                            d = b.isHorizontal() ? n * p : 0,
                                            c = b.isHorizontal() ? 0 : n * p,
                                            u = -o * Math.abs(p),
                                            m = b.isHorizontal() ? 0 : b.params.coverflow.stretch * p,
                                            h = b.isHorizontal() ? b.params.coverflow.stretch * p : 0;
                                        Math.abs(h) < .001 && (h = 0), Math.abs(m) < .001 && (m = 0), Math.abs(u) < .001 && (u = 0), Math.abs(d) < .001 && (d = 0), Math.abs(c) < .001 && (c = 0);
                                        var g = "translate3d(" + h + "px," + m + "px," + u + "px)  rotateX(" + c + "deg) rotateY(" + d + "deg)";
                                        if (s.transform(g), s[0].style.zIndex = 1 - Math.abs(Math.round(p)), b.params.coverflow.slideShadows) {
                                            var f = b.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
                                                v = b.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                                            0 === f.length && (f = t('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "left" : "top") + '"></div>'), s.append(f)), 0 === v.length && (v = t('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(v)), f.length && (f[0].style.opacity = 0 < p ? p : 0), v.length && (v[0].style.opacity = 0 < -p ? -p : 0)
                                        }
                                    }
                                    b.browser.ie && (b.wrapper[0].style.perspectiveOrigin = i + "px 50%")
                                },
                                setTransition: function(e) {
                                    b.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                                }
                            }
                        }, b.lazy = {
                            initialImageLoaded: !1,
                            loadImageInSlide: function(e, i) {
                                if (void 0 !== e && (void 0 === i && (i = !0), 0 !== b.slides.length)) {
                                    var n = b.slides.eq(e),
                                        o = n.find("." + b.params.lazyLoadingClass + ":not(." + b.params.lazyStatusLoadedClass + "):not(." + b.params.lazyStatusLoadingClass + ")");
                                    !n.hasClass(b.params.lazyLoadingClass) || n.hasClass(b.params.lazyStatusLoadedClass) || n.hasClass(b.params.lazyStatusLoadingClass) || (o = o.add(n[0])), 0 !== o.length && o.each(function() {
                                        var e = t(this);
                                        e.addClass(b.params.lazyStatusLoadingClass);
                                        var o = e.attr("data-background"),
                                            a = e.attr("data-src"),
                                            r = e.attr("data-srcset"),
                                            s = e.attr("data-sizes");
                                        b.loadImage(e[0], a || o, r, s, !1, function() {
                                            if (null != b && b) {
                                                if (o ? (e.css("background-image", 'url("' + o + '")'), e.removeAttr("data-background")) : (r && (e.attr("srcset", r), e.removeAttr("data-srcset")), s && (e.attr("sizes", s), e.removeAttr("data-sizes")), a && (e.attr("src", a), e.removeAttr("data-src"))), e.addClass(b.params.lazyStatusLoadedClass).removeClass(b.params.lazyStatusLoadingClass), n.find("." + b.params.lazyPreloaderClass + ", ." + b.params.preloaderClass).remove(), b.params.loop && i) {
                                                    var t = n.attr("data-swiper-slide-index");
                                                    if (n.hasClass(b.params.slideDuplicateClass)) {
                                                        var l = b.wrapper.children('[data-swiper-slide-index="' + t + '"]:not(.' + b.params.slideDuplicateClass + ")");
                                                        b.lazy.loadImageInSlide(l.index(), !1)
                                                    } else {
                                                        var p = b.wrapper.children("." + b.params.slideDuplicateClass + '[data-swiper-slide-index="' + t + '"]');
                                                        b.lazy.loadImageInSlide(p.index(), !1)
                                                    }
                                                }
                                                b.emit("onLazyImageReady", b, n[0], e[0])
                                            }
                                        }), b.emit("onLazyImageLoad", b, n[0], e[0])
                                    })
                                }
                            },
                            load: function() {
                                var e, i = b.params.slidesPerView;
                                if ("auto" === i && (i = 0), b.lazy.initialImageLoaded || (b.lazy.initialImageLoaded = !0), b.params.watchSlidesVisibility) b.wrapper.children("." + b.params.slideVisibleClass).each(function() {
                                    b.lazy.loadImageInSlide(t(this).index())
                                });
                                else if (1 < i)
                                    for (e = b.activeIndex; e < b.activeIndex + i; e++) b.slides[e] && b.lazy.loadImageInSlide(e);
                                else b.lazy.loadImageInSlide(b.activeIndex);
                                if (b.params.lazyLoadingInPrevNext)
                                    if (1 < i || b.params.lazyLoadingInPrevNextAmount && 1 < b.params.lazyLoadingInPrevNextAmount) {
                                        var n = b.params.lazyLoadingInPrevNextAmount,
                                            o = i,
                                            a = Math.min(b.activeIndex + o + Math.max(n, o), b.slides.length),
                                            r = Math.max(b.activeIndex - Math.max(o, n), 0);
                                        for (e = b.activeIndex + i; e < a; e++) b.slides[e] && b.lazy.loadImageInSlide(e);
                                        for (e = r; e < b.activeIndex; e++) b.slides[e] && b.lazy.loadImageInSlide(e)
                                    } else {
                                        var s = b.wrapper.children("." + b.params.slideNextClass);
                                        0 < s.length && b.lazy.loadImageInSlide(s.index());
                                        var l = b.wrapper.children("." + b.params.slidePrevClass);
                                        0 < l.length && b.lazy.loadImageInSlide(l.index())
                                    }
                            },
                            onTransitionStart: function() {
                                b.params.lazyLoading && (b.params.lazyLoadingOnTransitionStart || !b.params.lazyLoadingOnTransitionStart && !b.lazy.initialImageLoaded) && b.lazy.load()
                            },
                            onTransitionEnd: function() {
                                b.params.lazyLoading && !b.params.lazyLoadingOnTransitionStart && b.lazy.load()
                            }
                        }, b.scrollbar = {
                            isTouched: !1,
                            setDragPosition: function(e) {
                                var t = b.scrollbar,
                                    i = (b.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - t.track.offset()[b.isHorizontal() ? "left" : "top"] - t.dragSize / 2,
                                    n = -b.minTranslate() * t.moveDivider,
                                    o = -b.maxTranslate() * t.moveDivider;
                                i < n ? i = n : o < i && (i = o), i = -i / t.moveDivider, b.updateProgress(i), b.setWrapperTranslate(i, !0)
                            },
                            dragStart: function(e) {
                                var t = b.scrollbar;
                                t.isTouched = !0, e.preventDefault(), e.stopPropagation(), t.setDragPosition(e), clearTimeout(t.dragTimeout), t.track.transition(0), b.params.scrollbarHide && t.track.css("opacity", 1), b.wrapper.transition(100), t.drag.transition(100), b.emit("onScrollbarDragStart", b)
                            },
                            dragMove: function(e) {
                                var t = b.scrollbar;
                                t.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), b.wrapper.transition(0), t.track.transition(0), t.drag.transition(0), b.emit("onScrollbarDragMove", b))
                            },
                            dragEnd: function(e) {
                                var t = b.scrollbar;
                                t.isTouched && (t.isTouched = !1, b.params.scrollbarHide && (clearTimeout(t.dragTimeout), t.dragTimeout = setTimeout(function() {
                                    t.track.css("opacity", 0), t.track.transition(400)
                                }, 1e3)), b.emit("onScrollbarDragEnd", b), b.params.scrollbarSnapOnRelease && b.slideReset())
                            },
                            draggableEvents: !1 !== b.params.simulateTouch || b.support.touch ? b.touchEvents : b.touchEventsDesktop,
                            enableDraggable: function() {
                                var e = b.scrollbar,
                                    i = b.support.touch ? e.track : document;
                                t(e.track).on(e.draggableEvents.start, e.dragStart), t(i).on(e.draggableEvents.move, e.dragMove), t(i).on(e.draggableEvents.end, e.dragEnd)
                            },
                            disableDraggable: function() {
                                var e = b.scrollbar,
                                    i = b.support.touch ? e.track : document;
                                t(e.track).off(e.draggableEvents.start, e.dragStart), t(i).off(e.draggableEvents.move, e.dragMove), t(i).off(e.draggableEvents.end, e.dragEnd)
                            },
                            set: function() {
                                if (b.params.scrollbar) {
                                    var e = b.scrollbar;
                                    e.track = t(b.params.scrollbar), b.params.uniqueNavElements && "string" == typeof b.params.scrollbar && 1 < e.track.length && 1 === b.container.find(b.params.scrollbar).length && (e.track = b.container.find(b.params.scrollbar)), e.drag = e.track.find(".swiper-scrollbar-drag"), 0 === e.drag.length && (e.drag = t('<div class="swiper-scrollbar-drag"></div>'), e.track.append(e.drag)), e.drag[0].style.width = "", e.drag[0].style.height = "", e.trackSize = b.isHorizontal() ? e.track[0].offsetWidth : e.track[0].offsetHeight, e.divider = b.size / b.virtualSize, e.moveDivider = e.divider * (e.trackSize / b.size), e.dragSize = e.trackSize * e.divider, b.isHorizontal() ? e.drag[0].style.width = e.dragSize + "px" : e.drag[0].style.height = e.dragSize + "px", 1 <= e.divider ? e.track[0].style.display = "none" : e.track[0].style.display = "", b.params.scrollbarHide && (e.track[0].style.opacity = 0)
                                }
                            },
                            setTranslate: function() {
                                if (b.params.scrollbar) {
                                    var e, t = b.scrollbar,
                                        i = (b.translate, t.dragSize);
                                    e = (t.trackSize - t.dragSize) * b.progress, b.rtl && b.isHorizontal() ? 0 < (e = -e) ? (i = t.dragSize - e, e = 0) : -e + t.dragSize > t.trackSize && (i = t.trackSize + e) : e < 0 ? (i = t.dragSize + e, e = 0) : e + t.dragSize > t.trackSize && (i = t.trackSize - e), b.isHorizontal() ? (b.support.transforms3d ? t.drag.transform("translate3d(" + e + "px, 0, 0)") : t.drag.transform("translateX(" + e + "px)"), t.drag[0].style.width = i + "px") : (b.support.transforms3d ? t.drag.transform("translate3d(0px, " + e + "px, 0)") : t.drag.transform("translateY(" + e + "px)"), t.drag[0].style.height = i + "px"), b.params.scrollbarHide && (clearTimeout(t.timeout), t.track[0].style.opacity = 1, t.timeout = setTimeout(function() {
                                        t.track[0].style.opacity = 0, t.track.transition(400)
                                    }, 1e3))
                                }
                            },
                            setTransition: function(e) {
                                b.params.scrollbar && b.scrollbar.drag.transition(e)
                            }
                        }, b.controller = {
                            LinearSpline: function(e, t) {
                                var i, n, o, a, r, s = function(e, t) {
                                    for (n = -1, i = e.length; 1 < i - n;) e[o = i + n >> 1] <= t ? n = o : i = o;
                                    return i
                                };
                                this.x = e, this.y = t, this.lastIndex = e.length - 1, this.x.length, this.interpolate = function(e) {
                                    return e ? (r = s(this.x, e), a = r - 1, (e - this.x[a]) * (this.y[r] - this.y[a]) / (this.x[r] - this.x[a]) + this.y[a]) : 0
                                }
                            },
                            getInterpolateFunction: function(e) {
                                b.controller.spline || (b.controller.spline = b.params.loop ? new b.controller.LinearSpline(b.slidesGrid, e.slidesGrid) : new b.controller.LinearSpline(b.snapGrid, e.snapGrid))
                            },
                            setTranslate: function(e, t) {
                                function i(t) {
                                    e = t.rtl && "horizontal" === t.params.direction ? -b.translate : b.translate, "slide" === b.params.controlBy && (b.controller.getInterpolateFunction(t), o = -b.controller.spline.interpolate(-e)), o && "container" !== b.params.controlBy || (n = (t.maxTranslate() - t.minTranslate()) / (b.maxTranslate() - b.minTranslate()), o = (e - b.minTranslate()) * n + t.minTranslate()), b.params.controlInverse && (o = t.maxTranslate() - o), t.updateProgress(o), t.setWrapperTranslate(o, !1, b), t.updateActiveIndex()
                                }
                                var n, o, a = b.params.control;
                                if (Array.isArray(a))
                                    for (var r = 0; r < a.length; r++) a[r] !== t && a[r] instanceof d && i(a[r]);
                                else a instanceof d && t !== a && i(a)
                            },
                            setTransition: function(e, t) {
                                function i(t) {
                                    t.setWrapperTransition(e, b), 0 !== e && (t.onTransitionStart(), t.wrapper.transitionEnd(function() {
                                        o && (t.params.loop && "slide" === b.params.controlBy && t.fixLoop(), t.onTransitionEnd())
                                    }))
                                }
                                var n, o = b.params.control;
                                if (Array.isArray(o))
                                    for (n = 0; n < o.length; n++) o[n] !== t && o[n] instanceof d && i(o[n]);
                                else o instanceof d && t !== o && i(o)
                            }
                        }, b.hashnav = {
                            onHashCange: function(e, t) {
                                var i = document.location.hash.replace("#", "");
                                i !== b.slides.eq(b.activeIndex).attr("data-hash") && b.slideTo(b.wrapper.children("." + b.params.slideClass + '[data-hash="' + i + '"]').index())
                            },
                            attachEvents: function(e) {
                                var i = e ? "off" : "on";
                                t(window)[i]("hashchange", b.hashnav.onHashCange)
                            },
                            setHash: function() {
                                if (b.hashnav.initialized && b.params.hashnav)
                                    if (b.params.replaceState && window.history && window.history.replaceState) window.history.replaceState(null, null, "#" + b.slides.eq(b.activeIndex).attr("data-hash") || "");
                                    else {
                                        var e = b.slides.eq(b.activeIndex),
                                            t = e.attr("data-hash") || e.attr("data-history");
                                        document.location.hash = t || ""
                                    }
                            },
                            init: function() {
                                if (b.params.hashnav && !b.params.history) {
                                    b.hashnav.initialized = !0;
                                    var e = document.location.hash.replace("#", "");
                                    if (e)
                                        for (var t = 0, i = b.slides.length; t < i; t++) {
                                            var n = b.slides.eq(t);
                                            if ((n.attr("data-hash") || n.attr("data-history")) === e && !n.hasClass(b.params.slideDuplicateClass)) {
                                                var o = n.index();
                                                b.slideTo(o, 0, b.params.runCallbacksOnInit, !0)
                                            }
                                        }
                                    b.params.hashnavWatchState && b.hashnav.attachEvents()
                                }
                            },
                            destroy: function() {
                                b.params.hashnavWatchState && b.hashnav.attachEvents(!0)
                            }
                        }, b.history = {
                            init: function() {
                                if (b.params.history) {
                                    if (!window.history || !window.history.pushState) return b.params.history = !1, void(b.params.hashnav = !0);
                                    b.history.initialized = !0, this.paths = this.getPathValues(), (this.paths.key || this.paths.value) && (this.scrollToSlide(0, this.paths.value, b.params.runCallbacksOnInit), b.params.replaceState || window.addEventListener("popstate", this.setHistoryPopState))
                                }
                            },
                            setHistoryPopState: function() {
                                b.history.paths = b.history.getPathValues(), b.history.scrollToSlide(b.params.speed, b.history.paths.value, !1)
                            },
                            getPathValues: function() {
                                var e = window.location.pathname.slice(1).split("/"),
                                    t = e.length;
                                return {
                                    key: e[t - 2],
                                    value: e[t - 1]
                                }
                            },
                            setHistory: function(e, t) {
                                if (b.history.initialized && b.params.history) {
                                    var i = b.slides.eq(t),
                                        n = this.slugify(i.attr("data-history"));
                                    window.location.pathname.includes(e) || (n = e + "/" + n), b.params.replaceState ? window.history.replaceState(null, null, n) : window.history.pushState(null, null, n)
                                }
                            },
                            slugify: function(e) {
                                return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                            },
                            scrollToSlide: function(e, t, i) {
                                if (t)
                                    for (var n = 0, o = b.slides.length; n < o; n++) {
                                        var a = b.slides.eq(n);
                                        if (this.slugify(a.attr("data-history")) === t && !a.hasClass(b.params.slideDuplicateClass)) {
                                            var r = a.index();
                                            b.slideTo(r, e, i)
                                        }
                                    } else b.slideTo(0, e, i)
                            }
                        }, b.disableKeyboardControl = function() {
                            b.params.keyboardControl = !1, t(document).off("keydown", s)
                        }, b.enableKeyboardControl = function() {
                            b.params.keyboardControl = !0, t(document).on("keydown", s)
                        }, b.mousewheel = {
                            event: !1,
                            lastScrollTime: (new window.Date).getTime()
                        }, b.params.mousewheelControl && (b.mousewheel.event = -1 < navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function() {
                            var e = "onwheel",
                                t = e in document;
                            if (!t) {
                                var i = document.createElement("div");
                                i.setAttribute(e, "return;"), t = "function" == typeof i[e]
                            }
                            return !t && document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature("", "") && (t = document.implementation.hasFeature("Events.wheel", "3.0")), t
                        }() ? "wheel" : "mousewheel"), b.disableMousewheelControl = function() {
                            if (!b.mousewheel.event) return !1;
                            var e = b.container;
                            return "container" !== b.params.mousewheelEventsTarged && (e = t(b.params.mousewheelEventsTarged)), e.off(b.mousewheel.event, l), !(b.params.mousewheelControl = !1)
                        }, b.enableMousewheelControl = function() {
                            if (!b.mousewheel.event) return !1;
                            var e = b.container;
                            return "container" !== b.params.mousewheelEventsTarged && (e = t(b.params.mousewheelEventsTarged)), e.on(b.mousewheel.event, l), b.params.mousewheelControl = !0
                        }, b.parallax = {
                            setTranslate: function() {
                                b.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                                    p(this, b.progress)
                                }), b.slides.each(function() {
                                    var e = t(this);
                                    e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                                        p(this, Math.min(Math.max(e[0].progress, -1), 1))
                                    })
                                })
                            },
                            setTransition: function(e) {
                                void 0 === e && (e = b.params.speed), b.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                                    var i = t(this),
                                        n = parseInt(i.attr("data-swiper-parallax-duration"), 10) || e;
                                    0 === e && (n = 0), i.transition(n)
                                })
                            }
                        }, b.zoom = {
                            scale: 1,
                            currentScale: 1,
                            isScaling: !1,
                            gesture: {
                                slide: void 0,
                                slideWidth: void 0,
                                slideHeight: void 0,
                                image: void 0,
                                imageWrap: void 0,
                                zoomMax: b.params.zoomMax
                            },
                            image: {
                                isTouched: void 0,
                                isMoved: void 0,
                                currentX: void 0,
                                currentY: void 0,
                                minX: void 0,
                                minY: void 0,
                                maxX: void 0,
                                maxY: void 0,
                                width: void 0,
                                height: void 0,
                                startX: void 0,
                                startY: void 0,
                                touchesStart: {},
                                touchesCurrent: {}
                            },
                            velocity: {
                                x: void 0,
                                y: void 0,
                                prevPositionX: void 0,
                                prevPositionY: void 0,
                                prevTime: void 0
                            },
                            getDistanceBetweenTouches: function(e) {
                                if (e.targetTouches.length < 2) return 1;
                                var t = e.targetTouches[0].pageX,
                                    i = e.targetTouches[0].pageY,
                                    n = e.targetTouches[1].pageX,
                                    o = e.targetTouches[1].pageY;
                                return Math.sqrt(Math.pow(n - t, 2) + Math.pow(o - i, 2))
                            },
                            onGestureStart: function(e) {
                                var i = b.zoom;
                                if (!b.support.gestures) {
                                    if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                                    i.gesture.scaleStart = i.getDistanceBetweenTouches(e)
                                }
                                i.gesture.slide && i.gesture.slide.length || (i.gesture.slide = t(this), 0 === i.gesture.slide.length && (i.gesture.slide = b.slides.eq(b.activeIndex)), i.gesture.image = i.gesture.slide.find("img, svg, canvas"), i.gesture.imageWrap = i.gesture.image.parent("." + b.params.zoomContainerClass), i.gesture.zoomMax = i.gesture.imageWrap.attr("data-swiper-zoom") || b.params.zoomMax, 0 !== i.gesture.imageWrap.length) ? (i.gesture.image.transition(0), i.isScaling = !0) : i.gesture.image = void 0
                            },
                            onGestureChange: function(e) {
                                var t = b.zoom;
                                if (!b.support.gestures) {
                                    if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                                    t.gesture.scaleMove = t.getDistanceBetweenTouches(e)
                                }
                                t.gesture.image && 0 !== t.gesture.image.length && (b.support.gestures ? t.scale = e.scale * t.currentScale : t.scale = t.gesture.scaleMove / t.gesture.scaleStart * t.currentScale, t.scale > t.gesture.zoomMax && (t.scale = t.gesture.zoomMax - 1 + Math.pow(t.scale - t.gesture.zoomMax + 1, .5)), t.scale < b.params.zoomMin && (t.scale = b.params.zoomMin + 1 - Math.pow(b.params.zoomMin - t.scale + 1, .5)), t.gesture.image.transform("translate3d(0,0,0) scale(" + t.scale + ")"))
                            },
                            onGestureEnd: function(e) {
                                var t = b.zoom;
                                !b.support.gestures && ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2) || t.gesture.image && 0 !== t.gesture.image.length && (t.scale = Math.max(Math.min(t.scale, t.gesture.zoomMax), b.params.zoomMin), t.gesture.image.transition(b.params.speed).transform("translate3d(0,0,0) scale(" + t.scale + ")"), t.currentScale = t.scale, t.isScaling = !1, 1 === t.scale && (t.gesture.slide = void 0))
                            },
                            onTouchStart: function(e, t) {
                                var i = e.zoom;
                                i.gesture.image && 0 !== i.gesture.image.length && (i.image.isTouched || ("android" === e.device.os && t.preventDefault(), i.image.isTouched = !0, i.image.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX, i.image.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY))
                            },
                            onTouchMove: function(e) {
                                var t = b.zoom;
                                if (t.gesture.image && 0 !== t.gesture.image.length && (b.allowClick = !1, t.image.isTouched && t.gesture.slide)) {
                                    t.image.isMoved || (t.image.width = t.gesture.image[0].offsetWidth, t.image.height = t.gesture.image[0].offsetHeight, t.image.startX = b.getTranslate(t.gesture.imageWrap[0], "x") || 0, t.image.startY = b.getTranslate(t.gesture.imageWrap[0], "y") || 0, t.gesture.slideWidth = t.gesture.slide[0].offsetWidth, t.gesture.slideHeight = t.gesture.slide[0].offsetHeight, t.gesture.imageWrap.transition(0), b.rtl && (t.image.startX = -t.image.startX), b.rtl && (t.image.startY = -t.image.startY));
                                    var i = t.image.width * t.scale,
                                        n = t.image.height * t.scale;
                                    if (!(i < t.gesture.slideWidth && n < t.gesture.slideHeight)) {
                                        if (t.image.minX = Math.min(t.gesture.slideWidth / 2 - i / 2, 0), t.image.maxX = -t.image.minX, t.image.minY = Math.min(t.gesture.slideHeight / 2 - n / 2, 0), t.image.maxY = -t.image.minY, t.image.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, t.image.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !t.image.isMoved && !t.isScaling) {
                                            if (b.isHorizontal() && Math.floor(t.image.minX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x < t.image.touchesStart.x || Math.floor(t.image.maxX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x > t.image.touchesStart.x) return void(t.image.isTouched = !1);
                                            if (!b.isHorizontal() && Math.floor(t.image.minY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y < t.image.touchesStart.y || Math.floor(t.image.maxY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y > t.image.touchesStart.y) return void(t.image.isTouched = !1)
                                        }
                                        e.preventDefault(), e.stopPropagation(), t.image.isMoved = !0, t.image.currentX = t.image.touchesCurrent.x - t.image.touchesStart.x + t.image.startX, t.image.currentY = t.image.touchesCurrent.y - t.image.touchesStart.y + t.image.startY, t.image.currentX < t.image.minX && (t.image.currentX = t.image.minX + 1 - Math.pow(t.image.minX - t.image.currentX + 1, .8)), t.image.currentX > t.image.maxX && (t.image.currentX = t.image.maxX - 1 + Math.pow(t.image.currentX - t.image.maxX + 1, .8)), t.image.currentY < t.image.minY && (t.image.currentY = t.image.minY + 1 - Math.pow(t.image.minY - t.image.currentY + 1, .8)), t.image.currentY > t.image.maxY && (t.image.currentY = t.image.maxY - 1 + Math.pow(t.image.currentY - t.image.maxY + 1, .8)), t.velocity.prevPositionX || (t.velocity.prevPositionX = t.image.touchesCurrent.x), t.velocity.prevPositionY || (t.velocity.prevPositionY = t.image.touchesCurrent.y), t.velocity.prevTime || (t.velocity.prevTime = Date.now()), t.velocity.x = (t.image.touchesCurrent.x - t.velocity.prevPositionX) / (Date.now() - t.velocity.prevTime) / 2, t.velocity.y = (t.image.touchesCurrent.y - t.velocity.prevPositionY) / (Date.now() - t.velocity.prevTime) / 2, Math.abs(t.image.touchesCurrent.x - t.velocity.prevPositionX) < 2 && (t.velocity.x = 0), Math.abs(t.image.touchesCurrent.y - t.velocity.prevPositionY) < 2 && (t.velocity.y = 0), t.velocity.prevPositionX = t.image.touchesCurrent.x, t.velocity.prevPositionY = t.image.touchesCurrent.y, t.velocity.prevTime = Date.now(), t.gesture.imageWrap.transform("translate3d(" + t.image.currentX + "px, " + t.image.currentY + "px,0)")
                                    }
                                }
                            },
                            onTouchEnd: function(e, t) {
                                var i = e.zoom;
                                if (i.gesture.image && 0 !== i.gesture.image.length) {
                                    if (!i.image.isTouched || !i.image.isMoved) return i.image.isTouched = !1, void(i.image.isMoved = !1);
                                    i.image.isTouched = !1, i.image.isMoved = !1;
                                    var n = 300,
                                        o = 300,
                                        a = i.velocity.x * n,
                                        r = i.image.currentX + a,
                                        s = i.velocity.y * o,
                                        l = i.image.currentY + s;
                                    0 !== i.velocity.x && (n = Math.abs((r - i.image.currentX) / i.velocity.x)), 0 !== i.velocity.y && (o = Math.abs((l - i.image.currentY) / i.velocity.y));
                                    var p = Math.max(n, o);
                                    i.image.currentX = r, i.image.currentY = l;
                                    var d = i.image.width * i.scale,
                                        c = i.image.height * i.scale;
                                    i.image.minX = Math.min(i.gesture.slideWidth / 2 - d / 2, 0), i.image.maxX = -i.image.minX, i.image.minY = Math.min(i.gesture.slideHeight / 2 - c / 2, 0), i.image.maxY = -i.image.minY, i.image.currentX = Math.max(Math.min(i.image.currentX, i.image.maxX), i.image.minX), i.image.currentY = Math.max(Math.min(i.image.currentY, i.image.maxY), i.image.minY), i.gesture.imageWrap.transition(p).transform("translate3d(" + i.image.currentX + "px, " + i.image.currentY + "px,0)")
                                }
                            },
                            onTransitionEnd: function(e) {
                                var t = e.zoom;
                                t.gesture.slide && e.previousIndex !== e.activeIndex && (t.gesture.image.transform("translate3d(0,0,0) scale(1)"), t.gesture.imageWrap.transform("translate3d(0,0,0)"), t.gesture.slide = t.gesture.image = t.gesture.imageWrap = void 0, t.scale = t.currentScale = 1)
                            },
                            toggleZoom: function(e, i) {
                                var n, o, a, r, s, l, p, d, c, u, m, h, g, f, v, w, y = e.zoom;
                                y.gesture.slide || (y.gesture.slide = e.clickedSlide ? t(e.clickedSlide) : e.slides.eq(e.activeIndex), y.gesture.image = y.gesture.slide.find("img, svg, canvas"), y.gesture.imageWrap = y.gesture.image.parent("." + e.params.zoomContainerClass)), y.gesture.image && 0 !== y.gesture.image.length && (o = void 0 === y.image.touchesStart.x && i ? (n = "touchend" === i.type ? i.changedTouches[0].pageX : i.pageX, "touchend" === i.type ? i.changedTouches[0].pageY : i.pageY) : (n = y.image.touchesStart.x, y.image.touchesStart.y), y.scale && 1 !== y.scale ? (y.scale = y.currentScale = 1, y.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"), y.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"), y.gesture.slide = void 0) : (y.scale = y.currentScale = y.gesture.imageWrap.attr("data-swiper-zoom") || e.params.zoomMax, i ? (v = y.gesture.slide[0].offsetWidth, w = y.gesture.slide[0].offsetHeight, a = y.gesture.slide.offset().left + v / 2 - n, r = y.gesture.slide.offset().top + w / 2 - o, p = y.gesture.image[0].offsetWidth, d = y.gesture.image[0].offsetHeight, c = p * y.scale, u = d * y.scale, g = -(m = Math.min(v / 2 - c / 2, 0)), f = -(h = Math.min(w / 2 - u / 2, 0)), (s = a * y.scale) < m && (s = m), g < s && (s = g), (l = r * y.scale) < h && (l = h), f < l && (l = f)) : l = s = 0, y.gesture.imageWrap.transition(300).transform("translate3d(" + s + "px, " + l + "px,0)"), y.gesture.image.transition(300).transform("translate3d(0,0,0) scale(" + y.scale + ")")))
                            },
                            attachEvents: function(e) {
                                var i = e ? "off" : "on";
                                if (b.params.zoom) {
                                    b.slides;
                                    var n = !("touchstart" !== b.touchEvents.start || !b.support.passiveListener || !b.params.passiveListeners) && {
                                        passive: !0,
                                        capture: !1
                                    };
                                    b.support.gestures ? (b.slides[i]("gesturestart", b.zoom.onGestureStart, n), b.slides[i]("gesturechange", b.zoom.onGestureChange, n), b.slides[i]("gestureend", b.zoom.onGestureEnd, n)) : "touchstart" === b.touchEvents.start && (b.slides[i](b.touchEvents.start, b.zoom.onGestureStart, n), b.slides[i](b.touchEvents.move, b.zoom.onGestureChange, n), b.slides[i](b.touchEvents.end, b.zoom.onGestureEnd, n)), b[i]("touchStart", b.zoom.onTouchStart), b.slides.each(function(e, n) {
                                        0 < t(n).find("." + b.params.zoomContainerClass).length && t(n)[i](b.touchEvents.move, b.zoom.onTouchMove)
                                    }), b[i]("touchEnd", b.zoom.onTouchEnd), b[i]("transitionEnd", b.zoom.onTransitionEnd), b.params.zoomToggle && b.on("doubleTap", b.zoom.toggleZoom)
                                }
                            },
                            init: function() {
                                b.zoom.attachEvents()
                            },
                            destroy: function() {
                                b.zoom.attachEvents(!0)
                            }
                        }, b._plugins = [], b.plugins) {
                        var R = b.plugins[H](b, b.params[H]);
                        R && b._plugins.push(R)
                    }
                    return b.callPlugins = function(e) {
                        for (var t = 0; t < b._plugins.length; t++) e in b._plugins[t] && b._plugins[t][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                    }, b.emitterEventListeners = {}, b.emit = function(e) {
                        var t;
                        if (b.params[e] && b.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]), b.emitterEventListeners[e])
                            for (t = 0; t < b.emitterEventListeners[e].length; t++) b.emitterEventListeners[e][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                        b.callPlugins && b.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                    }, b.on = function(e, t) {
                        return e = c(e), b.emitterEventListeners[e] || (b.emitterEventListeners[e] = []), b.emitterEventListeners[e].push(t), b
                    }, b.off = function(e, t) {
                        var i;
                        if (e = c(e), void 0 === t) return b.emitterEventListeners[e] = [], b;
                        if (b.emitterEventListeners[e] && 0 !== b.emitterEventListeners[e].length) {
                            for (i = 0; i < b.emitterEventListeners[e].length; i++) b.emitterEventListeners[e][i] === t && b.emitterEventListeners[e].splice(i, 1);
                            return b
                        }
                    }, b.once = function(e, t) {
                        e = c(e);
                        var i = function() {
                            t(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), b.off(e, i)
                        };
                        return b.on(e, i), b
                    }, b.a11y = {
                        makeFocusable: function(e) {
                            return e.attr("tabIndex", "0"), e
                        },
                        addRole: function(e, t) {
                            return e.attr("role", t), e
                        },
                        addLabel: function(e, t) {
                            return e.attr("aria-label", t), e
                        },
                        disable: function(e) {
                            return e.attr("aria-disabled", !0), e
                        },
                        enable: function(e) {
                            return e.attr("aria-disabled", !1), e
                        },
                        onEnterKey: function(e) {
                            13 === e.keyCode && (t(e.target).is(b.params.nextButton) ? (b.onClickNext(e), b.isEnd ? b.a11y.notify(b.params.lastSlideMessage) : b.a11y.notify(b.params.nextSlideMessage)) : t(e.target).is(b.params.prevButton) && (b.onClickPrev(e), b.isBeginning ? b.a11y.notify(b.params.firstSlideMessage) : b.a11y.notify(b.params.prevSlideMessage)), t(e.target).is("." + b.params.bulletClass) && t(e.target)[0].click())
                        },
                        liveRegion: t('<span class="' + b.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'),
                        notify: function(e) {
                            var t = b.a11y.liveRegion;
                            0 !== t.length && (t.html(""), t.html(e))
                        },
                        init: function() {
                            b.params.nextButton && b.nextButton && 0 < b.nextButton.length && (b.a11y.makeFocusable(b.nextButton), b.a11y.addRole(b.nextButton, "button"), b.a11y.addLabel(b.nextButton, b.params.nextSlideMessage)), b.params.prevButton && b.prevButton && 0 < b.prevButton.length && (b.a11y.makeFocusable(b.prevButton), b.a11y.addRole(b.prevButton, "button"), b.a11y.addLabel(b.prevButton, b.params.prevSlideMessage)), t(b.container).append(b.a11y.liveRegion)
                        },
                        initPagination: function() {
                            b.params.pagination && b.params.paginationClickable && b.bullets && b.bullets.length && b.bullets.each(function() {
                                var e = t(this);
                                b.a11y.makeFocusable(e), b.a11y.addRole(e, "button"), b.a11y.addLabel(e, b.params.paginationBulletMessage.replace(/{{index}}/, e.index() + 1))
                            })
                        },
                        destroy: function() {
                            b.a11y.liveRegion && 0 < b.a11y.liveRegion.length && b.a11y.liveRegion.remove()
                        }
                    }, b.init = function() {
                        b.params.loop && b.createLoop(), b.updateContainerSize(), b.updateSlidesSize(), b.updatePagination(), b.params.scrollbar && b.scrollbar && (b.scrollbar.set(), b.params.scrollbarDraggable && b.scrollbar.enableDraggable()), "slide" !== b.params.effect && b.effects[b.params.effect] && (b.params.loop || b.updateProgress(), b.effects[b.params.effect].setTranslate()), b.params.loop ? b.slideTo(b.params.initialSlide + b.loopedSlides, 0, b.params.runCallbacksOnInit) : (b.slideTo(b.params.initialSlide, 0, b.params.runCallbacksOnInit), 0 === b.params.initialSlide && (b.parallax && b.params.parallax && b.parallax.setTranslate(), b.lazy && b.params.lazyLoading && (b.lazy.load(), b.lazy.initialImageLoaded = !0))), b.attachEvents(), b.params.observer && b.support.observer && b.initObservers(), b.params.preloadImages && !b.params.lazyLoading && b.preloadImages(), b.params.zoom && b.zoom && b.zoom.init(), b.params.autoplay && b.startAutoplay(), b.params.keyboardControl && b.enableKeyboardControl && b.enableKeyboardControl(), b.params.mousewheelControl && b.enableMousewheelControl && b.enableMousewheelControl(), b.params.hashnavReplaceState && (b.params.replaceState = b.params.hashnavReplaceState), b.params.history && b.history && b.history.init(), b.params.hashnav && b.hashnav && b.hashnav.init(), b.params.a11y && b.a11y && b.a11y.init(), b.emit("onInit", b)
                    }, b.cleanupStyles = function() {
                        b.container.removeClass(b.classNames.join(" ")).removeAttr("style"), b.wrapper.removeAttr("style"), b.slides && b.slides.length && b.slides.removeClass([b.params.slideVisibleClass, b.params.slideActiveClass, b.params.slideNextClass, b.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), b.paginationContainer && b.paginationContainer.length && b.paginationContainer.removeClass(b.params.paginationHiddenClass), b.bullets && b.bullets.length && b.bullets.removeClass(b.params.bulletActiveClass), b.params.prevButton && t(b.params.prevButton).removeClass(b.params.buttonDisabledClass), b.params.nextButton && t(b.params.nextButton).removeClass(b.params.buttonDisabledClass), b.params.scrollbar && b.scrollbar && (b.scrollbar.track && b.scrollbar.track.length && b.scrollbar.track.removeAttr("style"), b.scrollbar.drag && b.scrollbar.drag.length && b.scrollbar.drag.removeAttr("style"))
                    }, b.destroy = function(e, t) {
                        b.detachEvents(), b.stopAutoplay(), b.params.scrollbar && b.scrollbar && b.params.scrollbarDraggable && b.scrollbar.disableDraggable(), b.params.loop && b.destroyLoop(), t && b.cleanupStyles(), b.disconnectObservers(), b.params.zoom && b.zoom && b.zoom.destroy(), b.params.keyboardControl && b.disableKeyboardControl && b.disableKeyboardControl(), b.params.mousewheelControl && b.disableMousewheelControl && b.disableMousewheelControl(), b.params.a11y && b.a11y && b.a11y.destroy(), b.params.history && !b.params.replaceState && window.removeEventListener("popstate", b.history.setHistoryPopState), b.params.hashnav && b.hashnav && b.hashnav.destroy(), b.emit("onDestroy"), !1 !== e && (b = null)
                    }, b.init(), b
                }
            };
            d.prototype = {
                isSafari: (p = window.navigator.userAgent.toLowerCase(), 0 <= p.indexOf("safari") && p.indexOf("chrome") < 0 && p.indexOf("android") < 0),
                isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
                isArray: function(e) {
                    return "[object Array]" === Object.prototype.toString.apply(e)
                },
                browser: {
                    ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
                    ieTouch: window.navigator.msPointerEnabled && 1 < window.navigator.msMaxTouchPoints || window.navigator.pointerEnabled && 1 < window.navigator.maxTouchPoints,
                    lteIE9: (l = document.createElement("div"), l.innerHTML = "<!--[if lte IE 9]><i></i><![endif]-->", 1 === l.getElementsByTagName("i").length)
                },
                device: (n = window.navigator.userAgent, o = n.match(/(Android);?[\s\/]+([\d.]+)?/), a = n.match(/(iPad).*OS\s([\d_]+)/), r = n.match(/(iPod)(.*OS\s([\d_]+))?/), s = !a && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/), {
                    ios: a || s || r,
                    android: o
                }),
                support: {
                    touch: window.Modernizr && !0 === Modernizr.touch || !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch),
                    transforms3d: window.Modernizr && !0 === Modernizr.csstransforms3d || (i = document.createElement("div").style, "webkitPerspective" in i || "MozPerspective" in i || "OPerspective" in i || "MsPerspective" in i || "perspective" in i),
                    flexbox: function() {
                        for (var e = document.createElement("div").style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < t.length; i++)
                            if (t[i] in e) return !0
                    }(),
                    observer: "MutationObserver" in window || "WebkitMutationObserver" in window,
                    passiveListener: function() {
                        var e = !1;
                        try {
                            var t = Object.defineProperty({}, "passive", {
                                get: function() {
                                    e = !0
                                }
                            });
                            window.addEventListener("testPassiveListener", null, t)
                        } catch (e) {}
                        return e
                    }(),
                    gestures: "ongesturestart" in window
                },
                plugins: {}
            };
            for (var c, u, m, h = (u = function(e, t) {
                    var i = [],
                        n = 0;
                    if (e && !t && e instanceof c) return e;
                    if (e)
                        if ("string" == typeof e) {
                            var o, a, r = e.trim();
                            if (0 <= r.indexOf("<") && 0 <= r.indexOf(">")) {
                                var s = "div";
                                for (0 === r.indexOf("<li") && (s = "ul"), 0 === r.indexOf("<tr") && (s = "tbody"), 0 !== r.indexOf("<td") && 0 !== r.indexOf("<th") || (s = "tr"), 0 === r.indexOf("<tbody") && (s = "table"), 0 === r.indexOf("<option") && (s = "select"), (a = document.createElement(s)).innerHTML = e, n = 0; n < a.childNodes.length; n++) i.push(a.childNodes[n])
                            } else
                                for (o = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || document).querySelectorAll(e) : [document.getElementById(e.split("#")[1])], n = 0; n < o.length; n++) o[n] && i.push(o[n])
                        } else if (e.nodeType || e === window || e === document) i.push(e);
                    else if (0 < e.length && e[0].nodeType)
                        for (n = 0; n < e.length; n++) i.push(e[n]);
                    return new c(i)
                }, (c = function(e) {
                    var t = 0;
                    for (t = 0; t < e.length; t++) this[t] = e[t];
                    return this.length = e.length, this
                }).prototype = {
                    addClass: function(e) {
                        if (void 0 === e) return this;
                        for (var t = e.split(" "), i = 0; i < t.length; i++)
                            for (var n = 0; n < this.length; n++) this[n].classList.add(t[i]);
                        return this
                    },
                    removeClass: function(e) {
                        for (var t = e.split(" "), i = 0; i < t.length; i++)
                            for (var n = 0; n < this.length; n++) this[n].classList.remove(t[i]);
                        return this
                    },
                    hasClass: function(e) {
                        return !!this[0] && this[0].classList.contains(e)
                    },
                    toggleClass: function(e) {
                        for (var t = e.split(" "), i = 0; i < t.length; i++)
                            for (var n = 0; n < this.length; n++) this[n].classList.toggle(t[i]);
                        return this
                    },
                    attr: function(e, t) {
                        if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                        for (var i = 0; i < this.length; i++)
                            if (2 === arguments.length) this[i].setAttribute(e, t);
                            else
                                for (var n in e) this[i][n] = e[n], this[i].setAttribute(n, e[n]);
                        return this
                    },
                    removeAttr: function(e) {
                        for (var t = 0; t < this.length; t++) this[t].removeAttribute(e);
                        return this
                    },
                    data: function(e, t) {
                        if (void 0 !== t) {
                            for (var i = 0; i < this.length; i++) {
                                var n = this[i];
                                n.dom7ElementDataStorage || (n.dom7ElementDataStorage = {}), n.dom7ElementDataStorage[e] = t
                            }
                            return this
                        }
                        if (this[0]) {
                            var o = this[0].getAttribute("data-" + e);
                            return o || (this[0].dom7ElementDataStorage && e in this[0].dom7ElementDataStorage ? this[0].dom7ElementDataStorage[e] : void 0)
                        }
                    },
                    transform: function(e) {
                        for (var t = 0; t < this.length; t++) {
                            var i = this[t].style;
                            i.webkitTransform = i.MsTransform = i.msTransform = i.MozTransform = i.OTransform = i.transform = e
                        }
                        return this
                    },
                    transition: function(e) {
                        "string" != typeof e && (e += "ms");
                        for (var t = 0; t < this.length; t++) {
                            var i = this[t].style;
                            i.webkitTransitionDuration = i.MsTransitionDuration = i.msTransitionDuration = i.MozTransitionDuration = i.OTransitionDuration = i.transitionDuration = e
                        }
                        return this
                    },
                    on: function(e, t, i, n) {
                        function o(e) {
                            var n = e.target;
                            if (u(n).is(t)) i.call(n, e);
                            else
                                for (var o = u(n).parents(), a = 0; a < o.length; a++) u(o[a]).is(t) && i.call(o[a], e)
                        }
                        var a, r, s = e.split(" ");
                        for (a = 0; a < this.length; a++)
                            if ("function" == typeof t || !1 === t)
                                for ("function" == typeof t && (i = t, n = arguments[2] || !1), r = 0; r < s.length; r++) this[a].addEventListener(s[r], i, n);
                            else
                                for (r = 0; r < s.length; r++) this[a].dom7LiveListeners || (this[a].dom7LiveListeners = []), this[a].dom7LiveListeners.push({
                                    listener: i,
                                    liveListener: o
                                }), this[a].addEventListener(s[r], o, n);
                        return this
                    },
                    off: function(e, t, i, n) {
                        for (var o = e.split(" "), a = 0; a < o.length; a++)
                            for (var r = 0; r < this.length; r++)
                                if ("function" == typeof t || !1 === t) "function" == typeof t && (i = t, n = arguments[2] || !1), this[r].removeEventListener(o[a], i, n);
                                else if (this[r].dom7LiveListeners)
                            for (var s = 0; s < this[r].dom7LiveListeners.length; s++) this[r].dom7LiveListeners[s].listener === i && this[r].removeEventListener(o[a], this[r].dom7LiveListeners[s].liveListener, n);
                        return this
                    },
                    once: function(e, t, i, n) {
                        var o = this;
                        "function" == typeof t && (t = !1, i = arguments[1], n = arguments[2]), o.on(e, t, function a(r) {
                            i(r), o.off(e, t, a, n)
                        }, n)
                    },
                    trigger: function(e, t) {
                        for (var i = 0; i < this.length; i++) {
                            var n;
                            try {
                                n = new window.CustomEvent(e, {
                                    detail: t,
                                    bubbles: !0,
                                    cancelable: !0
                                })
                            } catch (i) {
                                (n = document.createEvent("Event")).initEvent(e, !0, !0), n.detail = t
                            }
                            this[i].dispatchEvent(n)
                        }
                        return this
                    },
                    transitionEnd: function(e) {
                        function t(a) {
                            if (a.target === this)
                                for (e.call(this, a), i = 0; i < n.length; i++) o.off(n[i], t)
                        }
                        var i, n = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                            o = this;
                        if (e)
                            for (i = 0; i < n.length; i++) o.on(n[i], t);
                        return this
                    },
                    width: function() {
                        return this[0] === window ? window.innerWidth : 0 < this.length ? parseFloat(this.css("width")) : null
                    },
                    outerWidth: function(e) {
                        return 0 < this.length ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
                    },
                    height: function() {
                        return this[0] === window ? window.innerHeight : 0 < this.length ? parseFloat(this.css("height")) : null
                    },
                    outerHeight: function(e) {
                        return 0 < this.length ? e ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight : null
                    },
                    offset: function() {
                        if (0 < this.length) {
                            var e = this[0],
                                t = e.getBoundingClientRect(),
                                i = document.body,
                                n = e.clientTop || i.clientTop || 0,
                                o = e.clientLeft || i.clientLeft || 0,
                                a = window.pageYOffset || e.scrollTop,
                                r = window.pageXOffset || e.scrollLeft;
                            return {
                                top: t.top + a - n,
                                left: t.left + r - o
                            }
                        }
                        return null
                    },
                    css: function(e, t) {
                        var i;
                        if (1 === arguments.length) {
                            if ("string" != typeof e) {
                                for (i = 0; i < this.length; i++)
                                    for (var n in e) this[i].style[n] = e[n];
                                return this
                            }
                            if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(e)
                        }
                        if (2 !== arguments.length || "string" != typeof e) return this;
                        for (i = 0; i < this.length; i++) this[i].style[e] = t;
                        return this
                    },
                    each: function(e) {
                        for (var t = 0; t < this.length; t++) e.call(this[t], t, this[t]);
                        return this
                    },
                    html: function(e) {
                        if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
                        for (var t = 0; t < this.length; t++) this[t].innerHTML = e;
                        return this
                    },
                    text: function(e) {
                        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
                        for (var t = 0; t < this.length; t++) this[t].textContent = e;
                        return this
                    },
                    is: function(e) {
                        if (!this[0]) return !1;
                        var t, i;
                        if ("string" == typeof e) {
                            var n = this[0];
                            if (n === document) return e === document;
                            if (n === window) return e === window;
                            if (n.matches) return n.matches(e);
                            if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
                            if (n.mozMatchesSelector) return n.mozMatchesSelector(e);
                            if (n.msMatchesSelector) return n.msMatchesSelector(e);
                            for (t = u(e), i = 0; i < t.length; i++)
                                if (t[i] === this[0]) return !0;
                            return !1
                        }
                        if (e === document) return this[0] === document;
                        if (e === window) return this[0] === window;
                        if (e.nodeType || e instanceof c) {
                            for (t = e.nodeType ? [e] : e, i = 0; i < t.length; i++)
                                if (t[i] === this[0]) return !0;
                            return !1
                        }
                        return !1
                    },
                    index: function() {
                        if (this[0]) {
                            for (var e = this[0], t = 0; null !== (e = e.previousSibling);) 1 === e.nodeType && t++;
                            return t
                        }
                    },
                    eq: function(e) {
                        if (void 0 === e) return this;
                        var t, i = this.length;
                        return new c(i - 1 < e ? [] : e < 0 ? (t = i + e) < 0 ? [] : [this[t]] : [this[e]])
                    },
                    append: function(e) {
                        var t, i;
                        for (t = 0; t < this.length; t++)
                            if ("string" == typeof e) {
                                var n = document.createElement("div");
                                for (n.innerHTML = e; n.firstChild;) this[t].appendChild(n.firstChild)
                            } else if (e instanceof c)
                            for (i = 0; i < e.length; i++) this[t].appendChild(e[i]);
                        else this[t].appendChild(e);
                        return this
                    },
                    prepend: function(e) {
                        var t, i;
                        for (t = 0; t < this.length; t++)
                            if ("string" == typeof e) {
                                var n = document.createElement("div");
                                for (n.innerHTML = e, i = n.childNodes.length - 1; 0 <= i; i--) this[t].insertBefore(n.childNodes[i], this[t].childNodes[0])
                            } else if (e instanceof c)
                            for (i = 0; i < e.length; i++) this[t].insertBefore(e[i], this[t].childNodes[0]);
                        else this[t].insertBefore(e, this[t].childNodes[0]);
                        return this
                    },
                    insertBefore: function(e) {
                        for (var t = u(e), i = 0; i < this.length; i++)
                            if (1 === t.length) t[0].parentNode.insertBefore(this[i], t[0]);
                            else if (1 < t.length)
                            for (var n = 0; n < t.length; n++) t[n].parentNode.insertBefore(this[i].cloneNode(!0), t[n])
                    },
                    insertAfter: function(e) {
                        for (var t = u(e), i = 0; i < this.length; i++)
                            if (1 === t.length) t[0].parentNode.insertBefore(this[i], t[0].nextSibling);
                            else if (1 < t.length)
                            for (var n = 0; n < t.length; n++) t[n].parentNode.insertBefore(this[i].cloneNode(!0), t[n].nextSibling)
                    },
                    next: function(e) {
                        return new c(0 < this.length ? e ? this[0].nextElementSibling && u(this[0].nextElementSibling).is(e) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
                    },
                    nextAll: function(e) {
                        var t = [],
                            i = this[0];
                        if (!i) return new c([]);
                        for (; i.nextElementSibling;) {
                            var n = i.nextElementSibling;
                            e ? u(n).is(e) && t.push(n) : t.push(n), i = n
                        }
                        return new c(t)
                    },
                    prev: function(e) {
                        return new c(0 < this.length ? e ? this[0].previousElementSibling && u(this[0].previousElementSibling).is(e) ? [this[0].previousElementSibling] : [] : this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : [])
                    },
                    prevAll: function(e) {
                        var t = [],
                            i = this[0];
                        if (!i) return new c([]);
                        for (; i.previousElementSibling;) {
                            var n = i.previousElementSibling;
                            e ? u(n).is(e) && t.push(n) : t.push(n), i = n
                        }
                        return new c(t)
                    },
                    parent: function(e) {
                        for (var t = [], i = 0; i < this.length; i++) e ? u(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode);
                        return u(u.unique(t))
                    },
                    parents: function(e) {
                        for (var t = [], i = 0; i < this.length; i++)
                            for (var n = this[i].parentNode; n;) e ? u(n).is(e) && t.push(n) : t.push(n), n = n.parentNode;
                        return u(u.unique(t))
                    },
                    find: function(e) {
                        for (var t = [], i = 0; i < this.length; i++)
                            for (var n = this[i].querySelectorAll(e), o = 0; o < n.length; o++) t.push(n[o]);
                        return new c(t)
                    },
                    children: function(e) {
                        for (var t = [], i = 0; i < this.length; i++)
                            for (var n = this[i].childNodes, o = 0; o < n.length; o++) e ? 1 === n[o].nodeType && u(n[o]).is(e) && t.push(n[o]) : 1 === n[o].nodeType && t.push(n[o]);
                        return new c(u.unique(t))
                    },
                    remove: function() {
                        for (var e = 0; e < this.length; e++) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                        return this
                    },
                    add: function() {
                        var e, t;
                        for (e = 0; e < arguments.length; e++) {
                            var i = u(arguments[e]);
                            for (t = 0; t < i.length; t++) this[this.length] = i[t], this.length++
                        }
                        return this
                    }
                }, u.fn = c.prototype, u.unique = function(e) {
                    for (var t = [], i = 0; i < e.length; i++) - 1 === t.indexOf(e[i]) && t.push(e[i]);
                    return t
                }, u), g = ["jQuery", "Zepto", "Dom7"], f = 0; f < g.length; f++) window[g[f]] && e(window[g[f]]);
            (m = void 0 === h ? window.Dom7 || window.Zepto || window.jQuery : h) && ("transitionEnd" in m.fn || (m.fn.transitionEnd = function(e) {
                function t(a) {
                    if (a.target === this)
                        for (e.call(this, a), i = 0; i < n.length; i++) o.off(n[i], t)
                }
                var i, n = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                    o = this;
                if (e)
                    for (i = 0; i < n.length; i++) o.on(n[i], t);
                return this
            }), "transform" in m.fn || (m.fn.transform = function(e) {
                for (var t = 0; t < this.length; t++) {
                    var i = this[t].style;
                    i.webkitTransform = i.MsTransform = i.msTransform = i.MozTransform = i.OTransform = i.transform = e
                }
                return this
            }), "transition" in m.fn || (m.fn.transition = function(e) {
                "string" != typeof e && (e += "ms");
                for (var t = 0; t < this.length; t++) {
                    var i = this[t].style;
                    i.webkitTransitionDuration = i.MsTransitionDuration = i.msTransitionDuration = i.MozTransitionDuration = i.OTransitionDuration = i.transitionDuration = e
                }
                return this
            }), "outerWidth" in m.fn || (m.fn.outerWidth = function(e) {
                return 0 < this.length ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
            })), window.SwiperNoConflict = d
        }(), void 0 !== t ? t.exports = window.SwiperNoConflict : "function" == typeof define && define.amd && define([], function() {
            return window.SwiperNoConflict
        })
    }, {}]
}, {}, [4]), window.odiofyapp && odiofyapp.apps.register("odiofy", function() {
    var e = this;
    e.whenReady = function(e) {
        window.jQuery && window.jQuery.fn.odiofy ? e() : window.onYottieReady = e
    }, e.initWidget = function(e, t) {
        t.apiUrl = "https://storage.elfsight.com/api/youtube", jQuery(e).odiofy(t)
    }
});