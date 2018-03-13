var StringBuilderEx, Control, pm;

(function(n, t) {
    function dt(n) {
        var t = n.length, r = i.type(n);
        return i.isWindow(n) ? !1 : n.nodeType === 1 && t ? !0 : r === "array" || r !== "function" && (t === 0 || typeof t == "number" && t > 0 && t - 1 in n);
    }
    function kf(n) {
        var t = gt[n] = {};
        return i.each(n.match(s) || [], function(n, i) {
            t[i] = !0;
        }), t;
    }
    function ir(n, r, u, f) {
        if (i.acceptData(n)) {
            var s, h, c = i.expando, a = typeof r == "string", l = n.nodeType, o = l ? i.cache : n, e = l ? n[c] : n[c] && c;
            if (e && o[e] && (f || o[e].data) || !a || u !== t) return e || (l ? n[c] = e = b.pop() || i.guid++ : e = c), 
            o[e] || (o[e] = {}, l || (o[e].toJSON = i.noop)), (typeof r == "object" || typeof r == "function") && (f ? o[e] = i.extend(o[e], r) : o[e].data = i.extend(o[e].data, r)), 
            s = o[e], f || (s.data || (s.data = {}), s = s.data), u !== t && (s[i.camelCase(r)] = u), 
            a ? (h = s[r], h == null && (h = s[i.camelCase(r)])) : h = s, h;
        }
    }
    function rr(n, t, r) {
        if (i.acceptData(n)) {
            var o, h, e, s = n.nodeType, u = s ? i.cache : n, f = s ? n[i.expando] : i.expando;
            if (u[f]) {
                if (t && (e = r ? u[f] : u[f].data, e)) {
                    for ((i.isArray(t) ? t = t.concat(i.map(t, i.camelCase)) : t in e ? t = [ t ] : (t = i.camelCase(t), 
                    t = t in e ? [ t ] : t.split(" ")), o = 0, h = t.length); o < h; o++) delete e[t[o]];
                    if (!(r ? ni : i.isEmptyObject)(e)) return;
                }
                (r || (delete u[f].data, ni(u[f]))) && (s ? i.cleanData([ n ], !0) : i.support.deleteExpando || u != u.window ? delete u[f] : u[f] = null);
            }
        }
    }
    function ur(n, r, u) {
        if (u === t && n.nodeType === 1) {
            var f = "data-" + r.replace(tr, "-$1").toLowerCase();
            if (u = n.getAttribute(f), typeof u == "string") {
                try {
                    u = u === "true" ? !0 : u === "false" ? !1 : u === "null" ? null : +u + "" === u ? +u : nr.test(u) ? i.parseJSON(u) : u;
                } catch (e) {}
                i.data(n, r, u);
            } else u = t;
        }
        return u;
    }
    function ni(n) {
        var t;
        for (t in n) if ((t !== "data" || !i.isEmptyObject(n[t])) && t !== "toJSON") return !1;
        return !0;
    }
    function ht() {
        return !0;
    }
    function d() {
        return !1;
    }
    function cr(n, t) {
        do n = n[t]; while (n && n.nodeType !== 1);
        return n;
    }
    function lr(n, t, r) {
        if (t = t || 0, i.isFunction(t)) return i.grep(n, function(n, i) {
            var u = !!t.call(n, i, n);
            return u === r;
        });
        if (t.nodeType) return i.grep(n, function(n) {
            return n === t === r;
        });
        if (typeof t == "string") {
            var u = i.grep(n, function(n) {
                return n.nodeType === 1;
            });
            if (fe.test(t)) return i.filter(t, u, !r);
            t = i.filter(t, u);
        }
        return i.grep(n, function(n) {
            return i.inArray(n, t) >= 0 === r;
        });
    }
    function ar(n) {
        var i = vr.split("|"), t = n.createDocumentFragment();
        if (t.createElement) while (i.length) t.createElement(i.pop());
        return t;
    }
    function ye(n, t) {
        return n.getElementsByTagName(t)[0] || n.appendChild(n.ownerDocument.createElement(t));
    }
    function dr(n) {
        var t = n.getAttributeNode("type");
        return n.type = (t && t.specified) + "/" + n.type, n;
    }
    function gr(n) {
        var t = le.exec(n.type);
        return t ? n.type = t[1] : n.removeAttribute("type"), n;
    }
    function si(n, t) {
        for (var u, r = 0; (u = n[r]) != null; r++) i._data(u, "globalEval", !t || i._data(t[r], "globalEval"));
    }
    function nu(n, t) {
        if (t.nodeType === 1 && i.hasData(n)) {
            var u, f, o, s = i._data(n), r = i._data(t, s), e = s.events;
            if (e) {
                delete r.handle;
                r.events = {};
                for (u in e) for (f = 0, o = e[u].length; f < o; f++) i.event.add(t, u, e[u][f]);
            }
            r.data && (r.data = i.extend({}, r.data));
        }
    }
    function pe(n, t) {
        var r, f, u;
        if (t.nodeType === 1) {
            if (r = t.nodeName.toLowerCase(), !i.support.noCloneEvent && t[i.expando]) {
                u = i._data(t);
                for (f in u.events) i.removeEvent(t, f, u.handle);
                t.removeAttribute(i.expando);
            }
            r === "script" && t.text !== n.text ? (dr(t).text = n.text, gr(t)) : r === "object" ? (t.parentNode && (t.outerHTML = n.outerHTML), 
            i.support.html5Clone && n.innerHTML && !i.trim(t.innerHTML) && (t.innerHTML = n.innerHTML)) : r === "input" && ei.test(n.type) ? (t.defaultChecked = t.checked = n.checked, 
            t.value !== n.value && (t.value = n.value)) : r === "option" ? t.defaultSelected = t.selected = n.defaultSelected : (r === "input" || r === "textarea") && (t.defaultValue = n.defaultValue);
        }
    }
    function u(n, r) {
        var s, e, h = 0, f = typeof n.getElementsByTagName !== o ? n.getElementsByTagName(r || "*") : typeof n.querySelectorAll !== o ? n.querySelectorAll(r || "*") : t;
        if (!f) for (f = [], s = n.childNodes || n; (e = s[h]) != null; h++) !r || i.nodeName(e, r) ? f.push(e) : i.merge(f, u(e, r));
        return r === t || r && i.nodeName(n, r) ? i.merge([ n ], f) : f;
    }
    function we(n) {
        ei.test(n.type) && (n.defaultChecked = n.checked);
    }
    function fu(n, t) {
        if (t in n) return t;
        for (var r = t.charAt(0).toUpperCase() + t.slice(1), u = t, i = uu.length; i--; ) if (t = uu[i] + r, 
        t in n) return t;
        return u;
    }
    function ut(n, t) {
        return n = t || n, i.css(n, "display") === "none" || !i.contains(n.ownerDocument, n);
    }
    function eu(n, t) {
        for (var f, r, o, e = [], u = 0, s = n.length; u < s; u++) (r = n[u], r.style) && (e[u] = i._data(r, "olddisplay"), 
        f = r.style.display, t ? (e[u] || f !== "none" || (r.style.display = ""), r.style.display === "" && ut(r) && (e[u] = i._data(r, "olddisplay", cu(r.nodeName)))) : e[u] || (o = ut(r), 
        (f && f !== "none" || !o) && i._data(r, "olddisplay", o ? f : i.css(r, "display"))));
        for (u = 0; u < s; u++) (r = n[u], r.style) && (t && r.style.display !== "none" && r.style.display !== "" || (r.style.display = t ? e[u] || "" : "none"));
        return n;
    }
    function ou(n, t, i) {
        var r = ge.exec(t);
        return r ? Math.max(0, r[1] - (i || 0)) + (r[2] || "px") : t;
    }
    function su(n, t, r, u, f) {
        for (var e = r === (u ? "border" : "content") ? 4 : t === "width" ? 1 : 0, o = 0; e < 4; e += 2) r === "margin" && (o += i.css(n, r + p[e], !0, f)), 
        u ? (r === "content" && (o -= i.css(n, "padding" + p[e], !0, f)), r !== "margin" && (o -= i.css(n, "border" + p[e] + "Width", !0, f))) : (o += i.css(n, "padding" + p[e], !0, f), 
        r !== "padding" && (o += i.css(n, "border" + p[e] + "Width", !0, f)));
        return o;
    }
    function hu(n, t, r) {
        var e = !0, u = t === "width" ? n.offsetWidth : n.offsetHeight, f = v(n), o = i.support.boxSizing && i.css(n, "boxSizing", !1, f) === "border-box";
        if (u <= 0 || u == null) {
            if (u = y(n, t, f), (u < 0 || u == null) && (u = n.style[t]), ct.test(u)) return u;
            e = o && (i.support.boxSizingReliable || u === n.style[t]);
            u = parseFloat(u) || 0;
        }
        return u + su(n, t, r || (o ? "border" : "content"), e, f) + "px";
    }
    function cu(n) {
        var u = r, t = iu[n];
        return t || (t = lu(n, u), t !== "none" && t || (rt = (rt || i("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(u.documentElement), 
        u = (rt[0].contentWindow || rt[0].contentDocument).document, u.write("<!doctype html><html><body>"), 
        u.close(), t = lu(n, u), rt.detach()), iu[n] = t), t;
    }
    function lu(n, t) {
        var r = i(t.createElement(n)).appendTo(t.body), u = i.css(r[0], "display");
        return r.remove(), u;
    }
    function ci(n, t, r, u) {
        var f;
        if (i.isArray(t)) i.each(t, function(t, i) {
            r || ro.test(n) ? u(n, i) : ci(n + "[" + (typeof i == "object" ? t : "") + "]", i, r, u);
        }); else if (r || i.type(t) !== "object") u(n, t); else for (f in t) ci(n + "[" + f + "]", t[f], r, u);
    }
    function ku(n) {
        return function(t, r) {
            typeof t != "string" && (r = t, t = "*");
            var u, f = 0, e = t.toLowerCase().match(s) || [];
            if (i.isFunction(r)) while (u = e[f++]) u[0] === "+" ? (u = u.slice(1) || "*", (n[u] = n[u] || []).unshift(r)) : (n[u] = n[u] || []).push(r);
        };
    }
    function du(n, t, r, u) {
        function e(s) {
            var h;
            return f[s] = !0, i.each(n[s] || [], function(n, i) {
                var s = i(t, r, u);
                if (typeof s != "string" || o || f[s]) {
                    if (o) return !(h = s);
                } else return t.dataTypes.unshift(s), e(s), !1;
            }), h;
        }
        var f = {}, o = n === vi;
        return e(t.dataTypes[0]) || !f["*"] && e("*");
    }
    function yi(n, r) {
        var f, u, e = i.ajaxSettings.flatOptions || {};
        for (u in r) r[u] !== t && ((e[u] ? n : f || (f = {}))[u] = r[u]);
        return f && i.extend(!0, n, f), n;
    }
    function co(n, i, r) {
        var s, o, e, u, h = n.contents, f = n.dataTypes, c = n.responseFields;
        for (u in c) u in r && (i[c[u]] = r[u]);
        while (f[0] === "*") f.shift(), o === t && (o = n.mimeType || i.getResponseHeader("Content-Type"));
        if (o) for (u in h) if (h[u] && h[u].test(o)) {
            f.unshift(u);
            break;
        }
        if (f[0] in r) e = f[0]; else {
            for (u in r) {
                if (!f[0] || n.converters[u + " " + f[0]]) {
                    e = u;
                    break;
                }
                s || (s = u);
            }
            e = e || s;
        }
        if (e) return e !== f[0] && f.unshift(e), r[e];
    }
    function lo(n, t) {
        var o, r, i, e, u = {}, h = 0, s = n.dataTypes.slice(), f = s[0];
        if (n.dataFilter && (t = n.dataFilter(t, n.dataType)), s[1]) for (i in n.converters) u[i.toLowerCase()] = n.converters[i];
        for (;r = s[++h]; ) if (r !== "*") {
            if (f !== "*" && f !== r) {
                if (i = u[f + " " + r] || u["* " + r], !i) for (o in u) if (e = o.split(" "), e[1] === r && (i = u[f + " " + e[0]] || u["* " + e[0]], 
                i)) {
                    i === !0 ? i = u[o] : u[o] !== !0 && (r = e[0], s.splice(h--, 0, r));
                    break;
                }
                if (i !== !0) if (i && n.throws) t = i(t); else try {
                    t = i(t);
                } catch (c) {
                    return {
                        state: "parsererror",
                        error: i ? c : "No conversion from " + f + " to " + r
                    };
                }
            }
            f = r;
        }
        return {
            state: "success",
            data: t
        };
    }
    function nf() {
        try {
            return new n.XMLHttpRequest();
        } catch (t) {}
    }
    function ao() {
        try {
            return new n.ActiveXObject("Microsoft.XMLHTTP");
        } catch (t) {}
    }
    function tf() {
        return setTimeout(function() {
            tt = t;
        }), tt = i.now();
    }
    function wo(n, t) {
        i.each(t, function(t, i) {
            for (var u = (ft[t] || []).concat(ft["*"]), r = 0, f = u.length; r < f; r++) if (u[r].call(n, t, i)) return;
        });
    }
    function rf(n, t, r) {
        var e, o, s = 0, l = yt.length, f = i.Deferred().always(function() {
            delete c.elem;
        }), c = function() {
            if (o) return !1;
            for (var s = tt || tf(), t = Math.max(0, u.startTime + u.duration - s), h = t / u.duration || 0, i = 1 - h, r = 0, e = u.tweens.length; r < e; r++) u.tweens[r].run(i);
            return f.notifyWith(n, [ u, i, t ]), i < 1 && e ? t : (f.resolveWith(n, [ u ]), 
            !1);
        }, u = f.promise({
            elem: n,
            props: i.extend({}, t),
            opts: i.extend(!0, {
                specialEasing: {}
            }, r),
            originalProperties: t,
            originalOptions: r,
            startTime: tt || tf(),
            duration: r.duration,
            tweens: [],
            createTween: function(t, r) {
                var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(f), f;
            },
            stop: function(t) {
                var i = 0, r = t ? u.tweens.length : 0;
                if (o) return this;
                for (o = !0; i < r; i++) u.tweens[i].run(1);
                return t ? f.resolveWith(n, [ u, t ]) : f.rejectWith(n, [ u, t ]), this;
            }
        }), h = u.props;
        for (bo(h, u.opts.specialEasing); s < l; s++) if (e = yt[s].call(u, n, h, u.opts), 
        e) return e;
        return wo(u, h), i.isFunction(u.opts.start) && u.opts.start.call(n, u), i.fx.timer(i.extend(c, {
            elem: n,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always);
    }
    function bo(n, t) {
        var u, f, r, e, o;
        for (r in n) if (f = i.camelCase(r), e = t[f], u = n[r], i.isArray(u) && (e = u[1], 
        u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), o = i.cssHooks[f], o && "expand" in o) {
            u = o.expand(u);
            delete n[f];
            for (r in u) r in n || (n[r] = u[r], t[r] = e);
        } else t[f] = e;
    }
    function ko(n, t, r) {
        var u, o, v, a, s, y, l, f, b, h = this, e = n.style, p = {}, w = [], c = n.nodeType && ut(n);
        r.queue || (f = i._queueHooks(n, "fx"), f.unqueued == null && (f.unqueued = 0, b = f.empty.fire, 
        f.empty.fire = function() {
            f.unqueued || b();
        }), f.unqueued++, h.always(function() {
            h.always(function() {
                f.unqueued--;
                i.queue(n, "fx").length || f.empty.fire();
            });
        }));
        n.nodeType === 1 && ("height" in t || "width" in t) && (r.overflow = [ e.overflow, e.overflowX, e.overflowY ], 
        i.css(n, "display") === "inline" && i.css(n, "float") === "none" && (i.support.inlineBlockNeedsLayout && cu(n.nodeName) !== "inline" ? e.zoom = 1 : e.display = "inline-block"));
        r.overflow && (e.overflow = "hidden", i.support.shrinkWrapBlocks || h.always(function() {
            e.overflow = r.overflow[0];
            e.overflowX = r.overflow[1];
            e.overflowY = r.overflow[2];
        }));
        for (o in t) if (a = t[o], vo.exec(a)) {
            if (delete t[o], y = y || a === "toggle", a === (c ? "hide" : "show")) continue;
            w.push(o);
        }
        if (v = w.length, v) for ((s = i._data(n, "fxshow") || i._data(n, "fxshow", {}), 
        "hidden" in s && (c = s.hidden), y && (s.hidden = !c), c ? i(n).show() : h.done(function() {
            i(n).hide();
        }), h.done(function() {
            var t;
            i._removeData(n, "fxshow");
            for (t in p) i.style(n, t, p[t]);
        }), o = 0); o < v; o++) u = w[o], l = h.createTween(u, c ? s[u] : 0), p[u] = s[u] || i.style(n, u), 
        u in s || (s[u] = l.start, c && (l.end = l.start, l.start = u === "width" || u === "height" ? 1 : 0));
    }
    function f(n, t, i, r, u) {
        return new f.prototype.init(n, t, i, r, u);
    }
    function pt(n, t) {
        var r, i = {
            height: n
        }, u = 0;
        for (t = t ? 1 : 0; u < 4; u += 2 - t) r = p[u], i["margin" + r] = i["padding" + r] = n;
        return t && (i.opacity = i.width = n), i;
    }
    function uf(n) {
        return i.isWindow(n) ? n : n.nodeType === 9 ? n.defaultView || n.parentWindow : !1;
    }
    var et, wi, o = typeof t, r = n.document, ff = n.location, ef = n.jQuery, of = n.$, ot = {}, b = [], wt = "1.9.1", bi = b.concat, bt = b.push, l = b.slice, ki = b.indexOf, sf = ot.toString, it = ot.hasOwnProperty, kt = wt.trim, i = function(n, t) {
        return new i.fn.init(n, t, wi);
    }, st = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, s = /\S+/g, hf = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, cf = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/, di = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, lf = /^[\],:{}\s]*$/, af = /(?:^|:|,)(?:\s*\[)+/g, vf = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, yf = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, pf = /^-ms-/, wf = /-([\da-z])/gi, bf = function(n, t) {
        return t.toUpperCase();
    }, h = function(n) {
        (r.addEventListener || n.type === "load" || r.readyState === "complete") && (gi(), 
        i.ready());
    }, gi = function() {
        r.addEventListener ? (r.removeEventListener("DOMContentLoaded", h, !1), n.removeEventListener("load", h, !1)) : (r.detachEvent("onreadystatechange", h), 
        n.detachEvent("onload", h));
    }, gt, nr, tr, pi, lt, g, nt, gu, at;
    i.fn = i.prototype = {
        jquery: wt,
        constructor: i,
        init: function(n, u, f) {
            var e, o;
            if (!n) return this;
            if (typeof n == "string") {
                if (e = n.charAt(0) === "<" && n.charAt(n.length - 1) === ">" && n.length >= 3 ? [ null, n, null ] : cf.exec(n), 
                e && (e[1] || !u)) {
                    if (e[1]) {
                        if (u = u instanceof i ? u[0] : u, i.merge(this, i.parseHTML(e[1], u && u.nodeType ? u.ownerDocument || u : r, !0)), 
                        di.test(e[1]) && i.isPlainObject(u)) for (e in u) i.isFunction(this[e]) ? this[e](u[e]) : this.attr(e, u[e]);
                        return this;
                    }
                    if (o = r.getElementById(e[2]), o && o.parentNode) {
                        if (o.id !== e[2]) return f.find(n);
                        this.length = 1;
                        this[0] = o;
                    }
                    return this.context = r, this.selector = n, this;
                }
                return !u || u.jquery ? (u || f).find(n) : this.constructor(u).find(n);
            }
            return n.nodeType ? (this.context = this[0] = n, this.length = 1, this) : i.isFunction(n) ? f.ready(n) : (n.selector !== t && (this.selector = n.selector, 
            this.context = n.context), i.makeArray(n, this));
        },
        selector: "",
        length: 0,
        size: function() {
            return this.length;
        },
        toArray: function() {
            return l.call(this);
        },
        get: function(n) {
            return n == null ? this.toArray() : n < 0 ? this[this.length + n] : this[n];
        },
        pushStack: function(n) {
            var t = i.merge(this.constructor(), n);
            return t.prevObject = this, t.context = this.context, t;
        },
        each: function(n, t) {
            return i.each(this, n, t);
        },
        ready: function(n) {
            return i.ready.promise().done(n), this;
        },
        slice: function() {
            return this.pushStack(l.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(n) {
            var i = this.length, t = +n + (n < 0 ? i : 0);
            return this.pushStack(t >= 0 && t < i ? [ this[t] ] : []);
        },
        map: function(n) {
            return this.pushStack(i.map(this, function(t, i) {
                return n.call(t, i, t);
            }));
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: bt,
        sort: [].sort,
        splice: [].splice
    };
    i.fn.init.prototype = i.fn;
    i.extend = i.fn.extend = function() {
        var u, o, r, e, s, h, n = arguments[0] || {}, f = 1, l = arguments.length, c = !1;
        for (typeof n == "boolean" && (c = n, n = arguments[1] || {}, f = 2), typeof n == "object" || i.isFunction(n) || (n = {}), 
        l === f && (n = this, --f); f < l; f++) if ((s = arguments[f]) != null) for (e in s) (u = n[e], 
        r = s[e], n !== r) && (c && r && (i.isPlainObject(r) || (o = i.isArray(r))) ? (o ? (o = !1, 
        h = u && i.isArray(u) ? u : []) : h = u && i.isPlainObject(u) ? u : {}, n[e] = i.extend(c, h, r)) : r !== t && (n[e] = r));
        return n;
    };
    i.extend({
        noConflict: function(t) {
            return n.$ === i && (n.$ = of), t && n.jQuery === i && (n.jQuery = ef), i;
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(n) {
            n ? i.readyWait++ : i.ready(!0);
        },
        ready: function(n) {
            if (n === !0 ? !--i.readyWait : !i.isReady) {
                if (!r.body) return setTimeout(i.ready);
                (i.isReady = !0, n !== !0 && --i.readyWait > 0) || (et.resolveWith(r, [ i ]), i.fn.trigger && i(r).trigger("ready").off("ready"));
            }
        },
        isFunction: function(n) {
            return i.type(n) === "function";
        },
        isArray: Array.isArray || function(n) {
            return i.type(n) === "array";
        },
        isWindow: function(n) {
            return n != null && n == n.window;
        },
        isNumeric: function(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        },
        type: function(n) {
            return n == null ? String(n) : typeof n == "object" || typeof n == "function" ? ot[sf.call(n)] || "object" : typeof n;
        },
        isPlainObject: function(n) {
            if (!n || i.type(n) !== "object" || n.nodeType || i.isWindow(n)) return !1;
            try {
                if (n.constructor && !it.call(n, "constructor") && !it.call(n.constructor.prototype, "isPrototypeOf")) return !1;
            } catch (u) {
                return !1;
            }
            var r;
            for (r in n) ;
            return r === t || it.call(n, r);
        },
        isEmptyObject: function(n) {
            var t;
            for (t in n) return !1;
            return !0;
        },
        error: function(n) {
            throw new Error(n);
        },
        parseHTML: function(n, t, u) {
            if (!n || typeof n != "string") return null;
            typeof t == "boolean" && (u = t, t = !1);
            t = t || r;
            var f = di.exec(n), e = !u && [];
            return f ? [ t.createElement(f[1]) ] : (f = i.buildFragment([ n ], t, e), e && i(e).remove(), 
            i.merge([], f.childNodes));
        },
        parseJSON: function(t) {
            if (n.JSON && n.JSON.parse) return n.JSON.parse(t);
            if (t === null) return t;
            if (typeof t == "string" && (t = i.trim(t), t && lf.test(t.replace(vf, "@").replace(yf, "]").replace(af, "")))) return new Function("return " + t)();
            i.error("Invalid JSON: " + t);
        },
        parseXML: function(r) {
            var u, f;
            if (!r || typeof r != "string") return null;
            try {
                n.DOMParser ? (f = new DOMParser(), u = f.parseFromString(r, "text/xml")) : (u = new ActiveXObject("Microsoft.XMLDOM"), 
                u.async = "false", u.loadXML(r));
            } catch (e) {
                u = t;
            }
            return u && u.documentElement && !u.getElementsByTagName("parsererror").length || i.error("Invalid XML: " + r), 
            u;
        },
        noop: function() {},
        globalEval: function(t) {
            t && i.trim(t) && (n.execScript || function(t) {
                n.eval.call(n, t);
            })(t);
        },
        camelCase: function(n) {
            return n.replace(pf, "ms-").replace(wf, bf);
        },
        nodeName: function(n, t) {
            return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase();
        },
        each: function(n, t, i) {
            var u, r = 0, f = n.length, e = dt(n);
            if (i) {
                if (e) {
                    for (;r < f; r++) if (u = t.apply(n[r], i), u === !1) break;
                } else for (r in n) if (u = t.apply(n[r], i), u === !1) break;
            } else if (e) {
                for (;r < f; r++) if (u = t.call(n[r], r, n[r]), u === !1) break;
            } else for (r in n) if (u = t.call(n[r], r, n[r]), u === !1) break;
            return n;
        },
        trim: kt && !kt.call(" ") ? function(n) {
            return n == null ? "" : kt.call(n);
        } : function(n) {
            return n == null ? "" : (n + "").replace(hf, "");
        },
        makeArray: function(n, t) {
            var r = t || [];
            return n != null && (dt(Object(n)) ? i.merge(r, typeof n == "string" ? [ n ] : n) : bt.call(r, n)), 
            r;
        },
        inArray: function(n, t, i) {
            var r;
            if (t) {
                if (ki) return ki.call(t, n, i);
                for (r = t.length, i = i ? i < 0 ? Math.max(0, r + i) : i : 0; i < r; i++) if (i in t && t[i] === n) return i;
            }
            return -1;
        },
        merge: function(n, i) {
            var f = i.length, u = n.length, r = 0;
            if (typeof f == "number") for (;r < f; r++) n[u++] = i[r]; else while (i[r] !== t) n[u++] = i[r++];
            return n.length = u, n;
        },
        grep: function(n, t, i) {
            var u, f = [], r = 0, e = n.length;
            for (i = !!i; r < e; r++) u = !!t(n[r], r), i !== u && f.push(n[r]);
            return f;
        },
        map: function(n, t, i) {
            var u, r = 0, e = n.length, o = dt(n), f = [];
            if (o) for (;r < e; r++) u = t(n[r], r, i), u != null && (f[f.length] = u); else for (r in n) u = t(n[r], r, i), 
            u != null && (f[f.length] = u);
            return bi.apply([], f);
        },
        guid: 1,
        proxy: function(n, r) {
            var f, u, e;
            return (typeof r == "string" && (e = n[r], r = n, n = e), !i.isFunction(n)) ? t : (f = l.call(arguments, 2), 
            u = function() {
                return n.apply(r || this, f.concat(l.call(arguments)));
            }, u.guid = n.guid = n.guid || i.guid++, u);
        },
        access: function(n, r, u, f, e, o, s) {
            var h = 0, l = n.length, c = u == null;
            if (i.type(u) === "object") {
                e = !0;
                for (h in u) i.access(n, r, h, u[h], !0, o, s);
            } else if (f !== t && (e = !0, i.isFunction(f) || (s = !0), c && (s ? (r.call(n, f), 
            r = null) : (c = r, r = function(n, t, r) {
                return c.call(i(n), r);
            })), r)) for (;h < l; h++) r(n[h], u, s ? f : f.call(n[h], h, r(n[h], u)));
            return e ? n : c ? r.call(n) : l ? r(n[0], u) : o;
        },
        now: function() {
            return new Date().getTime();
        }
    });
    i.ready.promise = function(t) {
        if (!et) if (et = i.Deferred(), r.readyState === "complete") setTimeout(i.ready); else if (r.addEventListener) r.addEventListener("DOMContentLoaded", h, !1), 
        n.addEventListener("load", h, !1); else {
            r.attachEvent("onreadystatechange", h);
            n.attachEvent("onload", h);
            var u = !1;
            try {
                u = n.frameElement == null && r.documentElement;
            } catch (e) {}
            u && u.doScroll && function f() {
                if (!i.isReady) {
                    try {
                        u.doScroll("left");
                    } catch (n) {
                        return setTimeout(f, 50);
                    }
                    gi();
                    i.ready();
                }
            }();
        }
        return et.promise(t);
    };
    i.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(n, t) {
        ot["[object " + t + "]"] = t.toLowerCase();
    });
    wi = i(r);
    gt = {};
    i.Callbacks = function(n) {
        n = typeof n == "string" ? gt[n] || kf(n) : i.extend({}, n);
        var o, f, c, s, e, l, r = [], u = !n.once && [], a = function(t) {
            for (f = n.memory && t, c = !0, e = l || 0, l = 0, s = r.length, o = !0; r && e < s; e++) if (r[e].apply(t[0], t[1]) === !1 && n.stopOnFalse) {
                f = !1;
                break;
            }
            o = !1;
            r && (u ? u.length && a(u.shift()) : f ? r = [] : h.disable());
        }, h = {
            add: function() {
                if (r) {
                    var t = r.length;
                    (function u(t) {
                        i.each(t, function(t, f) {
                            var e = i.type(f);
                            e === "function" ? n.unique && h.has(f) || r.push(f) : f && f.length && e !== "string" && u(f);
                        });
                    })(arguments);
                    o ? s = r.length : f && (l = t, a(f));
                }
                return this;
            },
            remove: function() {
                return r && i.each(arguments, function(n, t) {
                    for (var u; (u = i.inArray(t, r, u)) > -1; ) r.splice(u, 1), o && (u <= s && s--, 
                    u <= e && e--);
                }), this;
            },
            has: function(n) {
                return n ? i.inArray(n, r) > -1 : !!(r && r.length);
            },
            empty: function() {
                return r = [], this;
            },
            disable: function() {
                return r = u = f = t, this;
            },
            disabled: function() {
                return !r;
            },
            lock: function() {
                return u = t, f || h.disable(), this;
            },
            locked: function() {
                return !u;
            },
            fireWith: function(n, t) {
                return t = t || [], t = [ n, t.slice ? t.slice() : t ], r && (!c || u) && (o ? u.push(t) : a(t)), 
                this;
            },
            fire: function() {
                return h.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!c;
            }
        };
        return h;
    };
    i.extend({
        Deferred: function(n) {
            var u = [ [ "resolve", "done", i.Callbacks("once memory"), "resolved" ], [ "reject", "fail", i.Callbacks("once memory"), "rejected" ], [ "notify", "progress", i.Callbacks("memory") ] ], f = "pending", r = {
                state: function() {
                    return f;
                },
                always: function() {
                    return t.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var n = arguments;
                    return i.Deferred(function(f) {
                        i.each(u, function(u, e) {
                            var s = e[0], o = i.isFunction(n[u]) && n[u];
                            t[e[1]](function() {
                                var n = o && o.apply(this, arguments);
                                n && i.isFunction(n.promise) ? n.promise().done(f.resolve).fail(f.reject).progress(f.notify) : f[s + "With"](this === r ? f.promise() : this, o ? [ n ] : arguments);
                            });
                        });
                        n = null;
                    }).promise();
                },
                promise: function(n) {
                    return n != null ? i.extend(n, r) : r;
                }
            }, t = {};
            return r.pipe = r.then, i.each(u, function(n, i) {
                var e = i[2], o = i[3];
                r[i[1]] = e.add;
                o && e.add(function() {
                    f = o;
                }, u[n ^ 1][2].disable, u[2][2].lock);
                t[i[0]] = function() {
                    return t[i[0] + "With"](this === t ? r : this, arguments), this;
                };
                t[i[0] + "With"] = e.fireWith;
            }), r.promise(t), n && n.call(t, t), t;
        },
        when: function(n) {
            var t = 0, u = l.call(arguments), r = u.length, e = r !== 1 || n && i.isFunction(n.promise) ? r : 0, f = e === 1 ? n : i.Deferred(), h = function(n, t, i) {
                return function(r) {
                    t[n] = this;
                    i[n] = arguments.length > 1 ? l.call(arguments) : r;
                    i === o ? f.notifyWith(t, i) : --e || f.resolveWith(t, i);
                };
            }, o, c, s;
            if (r > 1) for (o = new Array(r), c = new Array(r), s = new Array(r); t < r; t++) u[t] && i.isFunction(u[t].promise) ? u[t].promise().done(h(t, s, u)).fail(f.reject).progress(h(t, c, o)) : --e;
            return e || f.resolveWith(s, u), f.promise();
        }
    });
    i.support = function() {
        var u, s, e, f, h, c, l, a, y, v, t = r.createElement("div");
        if (t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
        s = t.getElementsByTagName("*"), e = t.getElementsByTagName("a")[0], !s || !e || !s.length) return {};
        h = r.createElement("select");
        l = h.appendChild(r.createElement("option"));
        f = t.getElementsByTagName("input")[0];
        e.style.cssText = "top:1px;float:left;opacity:.5";
        u = {
            getSetAttribute: t.className !== "t",
            leadingWhitespace: t.firstChild.nodeType === 3,
            tbody: !t.getElementsByTagName("tbody").length,
            htmlSerialize: !!t.getElementsByTagName("link").length,
            style: /top/.test(e.getAttribute("style")),
            hrefNormalized: e.getAttribute("href") === "/a",
            opacity: /^0.5/.test(e.style.opacity),
            cssFloat: !!e.style.cssFloat,
            checkOn: !!f.value,
            optSelected: l.selected,
            enctype: !!r.createElement("form").enctype,
            html5Clone: r.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            boxModel: r.compatMode === "CSS1Compat",
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        };
        f.checked = !0;
        u.noCloneChecked = f.cloneNode(!0).checked;
        h.disabled = !0;
        u.optDisabled = !l.disabled;
        try {
            delete t.test;
        } catch (p) {
            u.deleteExpando = !1;
        }
        f = r.createElement("input");
        f.setAttribute("value", "");
        u.input = f.getAttribute("value") === "";
        f.value = "t";
        f.setAttribute("type", "radio");
        u.radioValue = f.value === "t";
        f.setAttribute("checked", "t");
        f.setAttribute("name", "t");
        c = r.createDocumentFragment();
        c.appendChild(f);
        u.appendChecked = f.checked;
        u.checkClone = c.cloneNode(!0).cloneNode(!0).lastChild.checked;
        t.attachEvent && (t.attachEvent("onclick", function() {
            u.noCloneEvent = !1;
        }), t.cloneNode(!0).click());
        for (v in {
            submit: !0,
            change: !0,
            focusin: !0
        }) t.setAttribute(a = "on" + v, "t"), u[v + "Bubbles"] = a in n || t.attributes[a].expando === !1;
        return t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", 
        u.clearCloneStyle = t.style.backgroundClip === "content-box", i(function() {
            var e, f, i, h = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", s = r.getElementsByTagName("body")[0];
            s && (e = r.createElement("div"), e.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", 
            s.appendChild(e).appendChild(t), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", 
            i = t.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", 
            y = i[0].offsetHeight === 0, i[0].style.display = "", i[1].style.display = "none", 
            u.reliableHiddenOffsets = y && i[0].offsetHeight === 0, t.innerHTML = "", t.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", 
            u.boxSizing = t.offsetWidth === 4, u.doesNotIncludeMarginInBodyOffset = s.offsetTop !== 1, 
            n.getComputedStyle && (u.pixelPosition = (n.getComputedStyle(t, null) || {}).top !== "1%", 
            u.boxSizingReliable = (n.getComputedStyle(t, null) || {
                width: "4px"
            }).width === "4px", f = t.appendChild(r.createElement("div")), f.style.cssText = t.style.cssText = h, 
            f.style.marginRight = f.style.width = "0", t.style.width = "1px", u.reliableMarginRight = !parseFloat((n.getComputedStyle(f, null) || {}).marginRight)), 
            typeof t.style.zoom !== o && (t.innerHTML = "", t.style.cssText = h + "width:1px;padding:1px;display:inline;zoom:1", 
            u.inlineBlockNeedsLayout = t.offsetWidth === 3, t.style.display = "block", t.innerHTML = "<div></div>", 
            t.firstChild.style.width = "5px", u.shrinkWrapBlocks = t.offsetWidth !== 3, u.inlineBlockNeedsLayout && (s.style.zoom = 1)), 
            s.removeChild(e), e = t = i = f = null);
        }), s = h = c = l = e = f = null, u;
    }();
    nr = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/;
    tr = /([A-Z])/g;
    i.extend({
        cache: {},
        expando: "jQuery" + (wt + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(n) {
            return n = n.nodeType ? i.cache[n[i.expando]] : n[i.expando], !!n && !ni(n);
        },
        data: function(n, t, i) {
            return ir(n, t, i);
        },
        removeData: function(n, t) {
            return rr(n, t);
        },
        _data: function(n, t, i) {
            return ir(n, t, i, !0);
        },
        _removeData: function(n, t) {
            return rr(n, t, !0);
        },
        acceptData: function(n) {
            if (n.nodeType && n.nodeType !== 1 && n.nodeType !== 9) return !1;
            var t = n.nodeName && i.noData[n.nodeName.toLowerCase()];
            return !t || t !== !0 && n.getAttribute("classid") === t;
        }
    });
    i.fn.extend({
        data: function(n, r) {
            var e, f, u = this[0], o = 0, s = null;
            if (n === t) {
                if (this.length && (s = i.data(u), u.nodeType === 1 && !i._data(u, "parsedAttrs"))) {
                    for (e = u.attributes; o < e.length; o++) f = e[o].name, f.indexOf("data-") || (f = i.camelCase(f.slice(5)), 
                    ur(u, f, s[f]));
                    i._data(u, "parsedAttrs", !0);
                }
                return s;
            }
            return typeof n == "object" ? this.each(function() {
                i.data(this, n);
            }) : i.access(this, function(r) {
                if (r === t) return u ? ur(u, n, i.data(u, n)) : null;
                this.each(function() {
                    i.data(this, n, r);
                });
            }, null, r, arguments.length > 1, null, !0);
        },
        removeData: function(n) {
            return this.each(function() {
                i.removeData(this, n);
            });
        }
    });
    i.extend({
        queue: function(n, t, r) {
            var u;
            if (n) return t = (t || "fx") + "queue", u = i._data(n, t), r && (!u || i.isArray(r) ? u = i._data(n, t, i.makeArray(r)) : u.push(r)), 
            u || [];
        },
        dequeue: function(n, t) {
            t = t || "fx";
            var f = i.queue(n, t), e = f.length, r = f.shift(), u = i._queueHooks(n, t), o = function() {
                i.dequeue(n, t);
            };
            r === "inprogress" && (r = f.shift(), e--);
            u.cur = r;
            r && (t === "fx" && f.unshift("inprogress"), delete u.stop, r.call(n, o, u));
            !e && u && u.empty.fire();
        },
        _queueHooks: function(n, t) {
            var r = t + "queueHooks";
            return i._data(n, r) || i._data(n, r, {
                empty: i.Callbacks("once memory").add(function() {
                    i._removeData(n, t + "queue");
                    i._removeData(n, r);
                })
            });
        }
    });
    i.fn.extend({
        queue: function(n, r) {
            var u = 2;
            return (typeof n != "string" && (r = n, n = "fx", u--), arguments.length < u) ? i.queue(this[0], n) : r === t ? this : this.each(function() {
                var t = i.queue(this, n, r);
                i._queueHooks(this, n);
                n === "fx" && t[0] !== "inprogress" && i.dequeue(this, n);
            });
        },
        dequeue: function(n) {
            return this.each(function() {
                i.dequeue(this, n);
            });
        },
        delay: function(n, t) {
            return n = i.fx ? i.fx.speeds[n] || n : n, t = t || "fx", this.queue(t, function(t, i) {
                var r = setTimeout(t, n);
                i.stop = function() {
                    clearTimeout(r);
                };
            });
        },
        clearQueue: function(n) {
            return this.queue(n || "fx", []);
        },
        promise: function(n, r) {
            var u, e = 1, o = i.Deferred(), f = this, s = this.length, h = function() {
                --e || o.resolveWith(f, [ f ]);
            };
            for (typeof n != "string" && (r = n, n = t), n = n || "fx"; s--; ) u = i._data(f[s], n + "queueHooks"), 
            u && u.empty && (e++, u.empty.add(h));
            return h(), o.promise(r);
        }
    });
    var k, fr, ti = /[\t\r\n]/g, df = /\r/g, gf = /^(?:input|select|textarea|button|object)$/i, ne = /^(?:a|area)$/i, er = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i, ii = /^(?:checked|selected)$/i, a = i.support.getSetAttribute, ri = i.support.input;
    i.fn.extend({
        attr: function(n, t) {
            return i.access(this, i.attr, n, t, arguments.length > 1);
        },
        removeAttr: function(n) {
            return this.each(function() {
                i.removeAttr(this, n);
            });
        },
        prop: function(n, t) {
            return i.access(this, i.prop, n, t, arguments.length > 1);
        },
        removeProp: function(n) {
            return n = i.propFix[n] || n, this.each(function() {
                try {
                    this[n] = t;
                    delete this[n];
                } catch (i) {}
            });
        },
        addClass: function(n) {
            var e, t, r, u, o, f = 0, h = this.length, c = typeof n == "string" && n;
            if (i.isFunction(n)) return this.each(function(t) {
                i(this).addClass(n.call(this, t, this.className));
            });
            if (c) for (e = (n || "").match(s) || []; f < h; f++) if (t = this[f], r = t.nodeType === 1 && (t.className ? (" " + t.className + " ").replace(ti, " ") : " "), 
            r) {
                for (o = 0; u = e[o++]; ) r.indexOf(" " + u + " ") < 0 && (r += u + " ");
                t.className = i.trim(r);
            }
            return this;
        },
        removeClass: function(n) {
            var e, r, t, u, o, f = 0, h = this.length, c = arguments.length === 0 || typeof n == "string" && n;
            if (i.isFunction(n)) return this.each(function(t) {
                i(this).removeClass(n.call(this, t, this.className));
            });
            if (c) for (e = (n || "").match(s) || []; f < h; f++) if (r = this[f], t = r.nodeType === 1 && (r.className ? (" " + r.className + " ").replace(ti, " ") : ""), 
            t) {
                for (o = 0; u = e[o++]; ) while (t.indexOf(" " + u + " ") >= 0) t = t.replace(" " + u + " ", " ");
                r.className = n ? i.trim(t) : "";
            }
            return this;
        },
        toggleClass: function(n, t) {
            var r = typeof n, u = typeof t == "boolean";
            return i.isFunction(n) ? this.each(function(r) {
                i(this).toggleClass(n.call(this, r, this.className, t), t);
            }) : this.each(function() {
                if (r === "string") for (var f, c = 0, h = i(this), e = t, l = n.match(s) || []; f = l[c++]; ) e = u ? e : !h.hasClass(f), 
                h[e ? "addClass" : "removeClass"](f); else (r === o || r === "boolean") && (this.className && i._data(this, "__className__", this.className), 
                this.className = this.className || n === !1 ? "" : i._data(this, "__className__") || "");
            });
        },
        hasClass: function(n) {
            for (var i = " " + n + " ", t = 0, r = this.length; t < r; t++) if (this[t].nodeType === 1 && (" " + this[t].className + " ").replace(ti, " ").indexOf(i) >= 0) return !0;
            return !1;
        },
        val: function(n) {
            var u, r, e, f = this[0];
            return arguments.length ? (e = i.isFunction(n), this.each(function(u) {
                var f, o = i(this);
                this.nodeType === 1 && (f = e ? n.call(this, u, o.val()) : n, f == null ? f = "" : typeof f == "number" ? f += "" : i.isArray(f) && (f = i.map(f, function(n) {
                    return n == null ? "" : n + "";
                })), r = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, f, "value") !== t || (this.value = f));
            })) : f ? (r = i.valHooks[f.type] || i.valHooks[f.nodeName.toLowerCase()], r && "get" in r && (u = r.get(f, "value")) !== t) ? u : (u = f.value, 
            typeof u == "string" ? u.replace(df, "") : u == null ? "" : u) : void 0;
        }
    });
    i.extend({
        valHooks: {
            option: {
                get: function(n) {
                    var t = n.attributes.value;
                    return !t || t.specified ? n.value : n.text;
                }
            },
            select: {
                get: function(n) {
                    for (var e, t, o = n.options, r = n.selectedIndex, u = n.type === "select-one" || r < 0, s = u ? null : [], h = u ? r + 1 : o.length, f = r < 0 ? h : u ? r : 0; f < h; f++) if (t = o[f], 
                    (t.selected || f === r) && (i.support.optDisabled ? !t.disabled : t.getAttribute("disabled") === null) && (!t.parentNode.disabled || !i.nodeName(t.parentNode, "optgroup"))) {
                        if (e = i(t).val(), u) return e;
                        s.push(e);
                    }
                    return s;
                },
                set: function(n, t) {
                    var r = i.makeArray(t);
                    return i(n).find("option").each(function() {
                        this.selected = i.inArray(i(this).val(), r) >= 0;
                    }), r.length || (n.selectedIndex = -1), r;
                }
            }
        },
        attr: function(n, r, u) {
            var f, s, e, h = n.nodeType;
            if (n && h !== 3 && h !== 8 && h !== 2) {
                if (typeof n.getAttribute === o) return i.prop(n, r, u);
                if (s = h !== 1 || !i.isXMLDoc(n), s && (r = r.toLowerCase(), f = i.attrHooks[r] || (er.test(r) ? fr : k)), 
                u !== t) if (u === null) i.removeAttr(n, r); else return f && s && "set" in f && (e = f.set(n, u, r)) !== t ? e : (n.setAttribute(r, u + ""), 
                u); else return f && s && "get" in f && (e = f.get(n, r)) !== null ? e : (typeof n.getAttribute !== o && (e = n.getAttribute(r)), 
                e == null ? t : e);
            }
        },
        removeAttr: function(n, t) {
            var r, u, e = 0, f = t && t.match(s);
            if (f && n.nodeType === 1) while (r = f[e++]) u = i.propFix[r] || r, er.test(r) ? !a && ii.test(r) ? n[i.camelCase("default-" + r)] = n[u] = !1 : n[u] = !1 : i.attr(n, r, ""), 
            n.removeAttribute(a ? r : u);
        },
        attrHooks: {
            type: {
                set: function(n, t) {
                    if (!i.support.radioValue && t === "radio" && i.nodeName(n, "input")) {
                        var r = n.value;
                        return n.setAttribute("type", t), r && (n.value = r), t;
                    }
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(n, r, u) {
            var e, f, s, o = n.nodeType;
            if (n && o !== 3 && o !== 8 && o !== 2) return s = o !== 1 || !i.isXMLDoc(n), s && (r = i.propFix[r] || r, 
            f = i.propHooks[r]), u !== t ? f && "set" in f && (e = f.set(n, u, r)) !== t ? e : n[r] = u : f && "get" in f && (e = f.get(n, r)) !== null ? e : n[r];
        },
        propHooks: {
            tabIndex: {
                get: function(n) {
                    var i = n.getAttributeNode("tabindex");
                    return i && i.specified ? parseInt(i.value, 10) : gf.test(n.nodeName) || ne.test(n.nodeName) && n.href ? 0 : t;
                }
            }
        }
    });
    fr = {
        get: function(n, r) {
            var u = i.prop(n, r), f = typeof u == "boolean" && n.getAttribute(r), e = typeof u == "boolean" ? ri && a ? f != null : ii.test(r) ? n[i.camelCase("default-" + r)] : !!f : n.getAttributeNode(r);
            return e && e.value !== !1 ? r.toLowerCase() : t;
        },
        set: function(n, t, r) {
            return t === !1 ? i.removeAttr(n, r) : ri && a || !ii.test(r) ? n.setAttribute(!a && i.propFix[r] || r, r) : n[i.camelCase("default-" + r)] = n[r] = !0, 
            r;
        }
    };
    ri && a || (i.attrHooks.value = {
        get: function(n, r) {
            var u = n.getAttributeNode(r);
            return i.nodeName(n, "input") ? n.defaultValue : u && u.specified ? u.value : t;
        },
        set: function(n, t, r) {
            if (i.nodeName(n, "input")) n.defaultValue = t; else return k && k.set(n, t, r);
        }
    });
    a || (k = i.valHooks.button = {
        get: function(n, i) {
            var r = n.getAttributeNode(i);
            return r && (i === "id" || i === "name" || i === "coords" ? r.value !== "" : r.specified) ? r.value : t;
        },
        set: function(n, i, r) {
            var u = n.getAttributeNode(r);
            return u || n.setAttributeNode(u = n.ownerDocument.createAttribute(r)), u.value = i += "", 
            r === "value" || i === n.getAttribute(r) ? i : t;
        }
    }, i.attrHooks.contenteditable = {
        get: k.get,
        set: function(n, t, i) {
            k.set(n, t === "" ? !1 : t, i);
        }
    }, i.each([ "width", "height" ], function(n, t) {
        i.attrHooks[t] = i.extend(i.attrHooks[t], {
            set: function(n, i) {
                if (i === "") return n.setAttribute(t, "auto"), i;
            }
        });
    }));
    i.support.hrefNormalized || (i.each([ "href", "src", "width", "height" ], function(n, r) {
        i.attrHooks[r] = i.extend(i.attrHooks[r], {
            get: function(n) {
                var i = n.getAttribute(r, 2);
                return i == null ? t : i;
            }
        });
    }), i.each([ "href", "src" ], function(n, t) {
        i.propHooks[t] = {
            get: function(n) {
                return n.getAttribute(t, 4);
            }
        };
    }));
    i.support.style || (i.attrHooks.style = {
        get: function(n) {
            return n.style.cssText || t;
        },
        set: function(n, t) {
            return n.style.cssText = t + "";
        }
    });
    i.support.optSelected || (i.propHooks.selected = i.extend(i.propHooks.selected, {
        get: function(n) {
            var t = n.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
        }
    }));
    i.support.enctype || (i.propFix.enctype = "encoding");
    i.support.checkOn || i.each([ "radio", "checkbox" ], function() {
        i.valHooks[this] = {
            get: function(n) {
                return n.getAttribute("value") === null ? "on" : n.value;
            }
        };
    });
    i.each([ "radio", "checkbox" ], function() {
        i.valHooks[this] = i.extend(i.valHooks[this], {
            set: function(n, t) {
                if (i.isArray(t)) return n.checked = i.inArray(i(n).val(), t) >= 0;
            }
        });
    });
    var ui = /^(?:input|select|textarea)$/i, te = /^key/, ie = /^(?:mouse|contextmenu)|click/, or = /^(?:focusinfocus|focusoutblur)$/, sr = /^([^.]*)(?:\.(.+)|)$/;
    i.event = {
        global: {},
        add: function(n, r, u, f, e) {
            var b, p, k, w, c, l, a, v, h, d, g, y = i._data(n);
            if (y) {
                for (u.handler && (w = u, u = w.handler, e = w.selector), u.guid || (u.guid = i.guid++), 
                (p = y.events) || (p = y.events = {}), (l = y.handle) || (l = y.handle = function(n) {
                    return typeof i !== o && (!n || i.event.triggered !== n.type) ? i.event.dispatch.apply(l.elem, arguments) : t;
                }, l.elem = n), r = (r || "").match(s) || [ "" ], k = r.length; k--; ) b = sr.exec(r[k]) || [], 
                h = g = b[1], d = (b[2] || "").split(".").sort(), c = i.event.special[h] || {}, 
                h = (e ? c.delegateType : c.bindType) || h, c = i.event.special[h] || {}, a = i.extend({
                    type: h,
                    origType: g,
                    data: f,
                    handler: u,
                    guid: u.guid,
                    selector: e,
                    needsContext: e && i.expr.match.needsContext.test(e),
                    namespace: d.join(".")
                }, w), (v = p[h]) || (v = p[h] = [], v.delegateCount = 0, c.setup && c.setup.call(n, f, d, l) !== !1 || (n.addEventListener ? n.addEventListener(h, l, !1) : n.attachEvent && n.attachEvent("on" + h, l))), 
                c.add && (c.add.call(n, a), a.handler.guid || (a.handler.guid = u.guid)), e ? v.splice(v.delegateCount++, 0, a) : v.push(a), 
                i.event.global[h] = !0;
                n = null;
            }
        },
        remove: function(n, t, r, u, f) {
            var y, o, h, b, p, a, c, l, e, w, k, v = i.hasData(n) && i._data(n);
            if (v && (a = v.events)) {
                for (t = (t || "").match(s) || [ "" ], p = t.length; p--; ) {
                    if (h = sr.exec(t[p]) || [], e = k = h[1], w = (h[2] || "").split(".").sort(), !e) {
                        for (e in a) i.event.remove(n, e + t[p], r, u, !0);
                        continue;
                    }
                    for (c = i.event.special[e] || {}, e = (u ? c.delegateType : c.bindType) || e, l = a[e] || [], 
                    h = h[2] && new RegExp("(^|\\.)" + w.join("\\.(?:.*\\.|)") + "(\\.|$)"), b = y = l.length; y--; ) o = l[y], 
                    (f || k === o.origType) && (!r || r.guid === o.guid) && (!h || h.test(o.namespace)) && (!u || u === o.selector || u === "**" && o.selector) && (l.splice(y, 1), 
                    o.selector && l.delegateCount--, c.remove && c.remove.call(n, o));
                    b && !l.length && (c.teardown && c.teardown.call(n, w, v.handle) !== !1 || i.removeEvent(n, e, v.handle), 
                    delete a[e]);
                }
                i.isEmptyObject(a) && (delete v.handle, i._removeData(n, "events"));
            }
        },
        trigger: function(u, f, e, o) {
            var a, v, h, p, l, c, w, b = [ e || r ], s = it.call(u, "type") ? u.type : u, y = it.call(u, "namespace") ? u.namespace.split(".") : [];
            if ((h = c = e = e || r, e.nodeType !== 3 && e.nodeType !== 8) && !or.test(s + i.event.triggered) && (s.indexOf(".") >= 0 && (y = s.split("."), 
            s = y.shift(), y.sort()), v = s.indexOf(":") < 0 && "on" + s, u = u[i.expando] ? u : new i.Event(s, typeof u == "object" && u), 
            u.isTrigger = !0, u.namespace = y.join("."), u.namespace_re = u.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            u.result = t, u.target || (u.target = e), f = f == null ? [ u ] : i.makeArray(f, [ u ]), 
            l = i.event.special[s] || {}, o || !l.trigger || l.trigger.apply(e, f) !== !1)) {
                if (!o && !l.noBubble && !i.isWindow(e)) {
                    for (p = l.delegateType || s, or.test(p + s) || (h = h.parentNode); h; h = h.parentNode) b.push(h), 
                    c = h;
                    c === (e.ownerDocument || r) && b.push(c.defaultView || c.parentWindow || n);
                }
                for (w = 0; (h = b[w++]) && !u.isPropagationStopped(); ) u.type = w > 1 ? p : l.bindType || s, 
                a = (i._data(h, "events") || {})[u.type] && i._data(h, "handle"), a && a.apply(h, f), 
                a = v && h[v], a && i.acceptData(h) && a.apply && a.apply(h, f) === !1 && u.preventDefault();
                if (u.type = s, !o && !u.isDefaultPrevented() && (!l._default || l._default.apply(e.ownerDocument, f) === !1) && !(s === "click" && i.nodeName(e, "a")) && i.acceptData(e) && v && e[s] && !i.isWindow(e)) {
                    c = e[v];
                    c && (e[v] = null);
                    i.event.triggered = s;
                    try {
                        e[s]();
                    } catch (k) {}
                    i.event.triggered = t;
                    c && (e[v] = c);
                }
                return u.result;
            }
        },
        dispatch: function(n) {
            n = i.event.fix(n);
            var o, e, r, u, s, h = [], c = l.call(arguments), a = (i._data(this, "events") || {})[n.type] || [], f = i.event.special[n.type] || {};
            if (c[0] = n, n.delegateTarget = this, !f.preDispatch || f.preDispatch.call(this, n) !== !1) {
                for (h = i.event.handlers.call(this, n, a), o = 0; (u = h[o++]) && !n.isPropagationStopped(); ) for (n.currentTarget = u.elem, 
                s = 0; (r = u.handlers[s++]) && !n.isImmediatePropagationStopped(); ) (!n.namespace_re || n.namespace_re.test(r.namespace)) && (n.handleObj = r, 
                n.data = r.data, e = ((i.event.special[r.origType] || {}).handle || r.handler).apply(u.elem, c), 
                e !== t && (n.result = e) === !1 && (n.preventDefault(), n.stopPropagation()));
                return f.postDispatch && f.postDispatch.call(this, n), n.result;
            }
        },
        handlers: function(n, r) {
            var e, o, f, s, c = [], h = r.delegateCount, u = n.target;
            if (h && u.nodeType && (!n.button || n.type !== "click")) for (;u != this; u = u.parentNode || this) if (u.nodeType === 1 && (u.disabled !== !0 || n.type !== "click")) {
                for (f = [], s = 0; s < h; s++) o = r[s], e = o.selector + " ", f[e] === t && (f[e] = o.needsContext ? i(e, this).index(u) >= 0 : i.find(e, this, null, [ u ]).length), 
                f[e] && f.push(o);
                f.length && c.push({
                    elem: u,
                    handlers: f
                });
            }
            return h < r.length && c.push({
                elem: this,
                handlers: r.slice(h)
            }), c;
        },
        fix: function(n) {
            if (n[i.expando]) return n;
            var e, o, s, u = n.type, f = n, t = this.fixHooks[u];
            for (t || (this.fixHooks[u] = t = ie.test(u) ? this.mouseHooks : te.test(u) ? this.keyHooks : {}), 
            s = t.props ? this.props.concat(t.props) : this.props, n = new i.Event(f), e = s.length; e--; ) o = s[e], 
            n[o] = f[o];
            return n.target || (n.target = f.srcElement || r), n.target.nodeType === 3 && (n.target = n.target.parentNode), 
            n.metaKey = !!n.metaKey, t.filter ? t.filter(n, f) : n;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(n, t) {
                return n.which == null && (n.which = t.charCode != null ? t.charCode : t.keyCode), 
                n;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(n, i) {
                var u, o, f, e = i.button, s = i.fromElement;
                return n.pageX == null && i.clientX != null && (o = n.target.ownerDocument || r, 
                f = o.documentElement, u = o.body, n.pageX = i.clientX + (f && f.scrollLeft || u && u.scrollLeft || 0) - (f && f.clientLeft || u && u.clientLeft || 0), 
                n.pageY = i.clientY + (f && f.scrollTop || u && u.scrollTop || 0) - (f && f.clientTop || u && u.clientTop || 0)), 
                !n.relatedTarget && s && (n.relatedTarget = s === n.target ? i.toElement : s), n.which || e === t || (n.which = e & 1 ? 1 : e & 2 ? 3 : e & 4 ? 2 : 0), 
                n;
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                trigger: function() {
                    if (i.nodeName(this, "input") && this.type === "checkbox" && this.click) return this.click(), 
                    !1;
                }
            },
            focus: {
                trigger: function() {
                    if (this !== r.activeElement && this.focus) try {
                        return this.focus(), !1;
                    } catch (n) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === r.activeElement && this.blur) return this.blur(), !1;
                },
                delegateType: "focusout"
            },
            beforeunload: {
                postDispatch: function(n) {
                    n.result !== t && (n.originalEvent.returnValue = n.result);
                }
            }
        },
        simulate: function(n, t, r, u) {
            var f = i.extend(new i.Event(), r, {
                type: n,
                isSimulated: !0,
                originalEvent: {}
            });
            u ? i.event.trigger(f, null, t) : i.event.dispatch.call(t, f);
            f.isDefaultPrevented() && r.preventDefault();
        }
    };
    i.removeEvent = r.removeEventListener ? function(n, t, i) {
        n.removeEventListener && n.removeEventListener(t, i, !1);
    } : function(n, t, i) {
        var r = "on" + t;
        n.detachEvent && (typeof n[r] === o && (n[r] = null), n.detachEvent(r, i));
    };
    i.Event = function(n, t) {
        if (!(this instanceof i.Event)) return new i.Event(n, t);
        n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || n.returnValue === !1 || n.getPreventDefault && n.getPreventDefault() ? ht : d) : this.type = n;
        t && i.extend(this, t);
        this.timeStamp = n && n.timeStamp || i.now();
        this[i.expando] = !0;
    };
    i.Event.prototype = {
        isDefaultPrevented: d,
        isPropagationStopped: d,
        isImmediatePropagationStopped: d,
        preventDefault: function() {
            var n = this.originalEvent;
            (this.isDefaultPrevented = ht, n) && (n.preventDefault ? n.preventDefault() : n.returnValue = !1);
        },
        stopPropagation: function() {
            var n = this.originalEvent;
            (this.isPropagationStopped = ht, n) && (n.stopPropagation && n.stopPropagation(), 
            n.cancelBubble = !0);
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = ht;
            this.stopPropagation();
        }
    };
    i.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(n, t) {
        i.event.special[n] = {
            delegateType: t,
            bindType: t,
            handle: function(n) {
                var u, f = this, r = n.relatedTarget, e = n.handleObj;
                return r && (r === f || i.contains(f, r)) || (n.type = e.origType, u = e.handler.apply(this, arguments), 
                n.type = t), u;
            }
        };
    });
    i.support.submitBubbles || (i.event.special.submit = {
        setup: function() {
            if (i.nodeName(this, "form")) return !1;
            i.event.add(this, "click._submit keypress._submit", function(n) {
                var u = n.target, r = i.nodeName(u, "input") || i.nodeName(u, "button") ? u.form : t;
                r && !i._data(r, "submitBubbles") && (i.event.add(r, "submit._submit", function(n) {
                    n._submit_bubble = !0;
                }), i._data(r, "submitBubbles", !0));
            });
        },
        postDispatch: function(n) {
            n._submit_bubble && (delete n._submit_bubble, this.parentNode && !n.isTrigger && i.event.simulate("submit", this.parentNode, n, !0));
        },
        teardown: function() {
            if (i.nodeName(this, "form")) return !1;
            i.event.remove(this, "._submit");
        }
    });
    i.support.changeBubbles || (i.event.special.change = {
        setup: function() {
            if (ui.test(this.nodeName)) return (this.type === "checkbox" || this.type === "radio") && (i.event.add(this, "propertychange._change", function(n) {
                n.originalEvent.propertyName === "checked" && (this._just_changed = !0);
            }), i.event.add(this, "click._change", function(n) {
                this._just_changed && !n.isTrigger && (this._just_changed = !1);
                i.event.simulate("change", this, n, !0);
            })), !1;
            i.event.add(this, "beforeactivate._change", function(n) {
                var t = n.target;
                ui.test(t.nodeName) && !i._data(t, "changeBubbles") && (i.event.add(t, "change._change", function(n) {
                    !this.parentNode || n.isSimulated || n.isTrigger || i.event.simulate("change", this.parentNode, n, !0);
                }), i._data(t, "changeBubbles", !0));
            });
        },
        handle: function(n) {
            var t = n.target;
            if (this !== t || n.isSimulated || n.isTrigger || t.type !== "radio" && t.type !== "checkbox") return n.handleObj.handler.apply(this, arguments);
        },
        teardown: function() {
            return i.event.remove(this, "._change"), !ui.test(this.nodeName);
        }
    });
    i.support.focusinBubbles || i.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, t) {
        var u = 0, f = function(n) {
            i.event.simulate(t, n.target, i.event.fix(n), !0);
        };
        i.event.special[t] = {
            setup: function() {
                u++ == 0 && r.addEventListener(n, f, !0);
            },
            teardown: function() {
                --u == 0 && r.removeEventListener(n, f, !0);
            }
        };
    });
    i.fn.extend({
        on: function(n, r, u, f, e) {
            var s, o;
            if (typeof n == "object") {
                typeof r != "string" && (u = u || r, r = t);
                for (s in n) this.on(s, r, u, n[s], e);
                return this;
            }
            if (u == null && f == null ? (f = r, u = r = t) : f == null && (typeof r == "string" ? (f = u, 
            u = t) : (f = u, u = r, r = t)), f === !1) f = d; else if (!f) return this;
            return e === 1 && (o = f, f = function(n) {
                return i().off(n), o.apply(this, arguments);
            }, f.guid = o.guid || (o.guid = i.guid++)), this.each(function() {
                i.event.add(this, n, f, u, r);
            });
        },
        one: function(n, t, i, r) {
            return this.on(n, t, i, r, 1);
        },
        off: function(n, r, u) {
            var f, e;
            if (n && n.preventDefault && n.handleObj) return f = n.handleObj, i(n.delegateTarget).off(f.namespace ? f.origType + "." + f.namespace : f.origType, f.selector, f.handler), 
            this;
            if (typeof n == "object") {
                for (e in n) this.off(e, r, n[e]);
                return this;
            }
            return (r === !1 || typeof r == "function") && (u = r, r = t), u === !1 && (u = d), 
            this.each(function() {
                i.event.remove(this, n, u, r);
            });
        },
        bind: function(n, t, i) {
            return this.on(n, null, t, i);
        },
        unbind: function(n, t) {
            return this.off(n, null, t);
        },
        delegate: function(n, t, i, r) {
            return this.on(t, n, i, r);
        },
        undelegate: function(n, t, i) {
            return arguments.length === 1 ? this.off(n, "**") : this.off(t, n || "**", i);
        },
        trigger: function(n, t) {
            return this.each(function() {
                i.event.trigger(n, t, this);
            });
        },
        triggerHandler: function(n, t) {
            var r = this[0];
            if (r) return i.event.trigger(n, t, r, !0);
        }
    }), function(n, t) {
        function ti(n) {
            return tr.test(n + "");
        }
        function ii() {
            var n, t = [];
            return n = function(i, u) {
                return t.push(i += " ") > r.cacheLength && delete n[t.shift()], n[i] = u;
            };
        }
        function l(n) {
            return n[f] = !0, n;
        }
        function b(n) {
            var t = s.createElement("div");
            try {
                return n(t);
            } catch (i) {
                return !1;
            } finally {
                t = null;
            }
        }
        function u(n, t, i, r) {
            var y, u, e, l, p, v, w, h, d, b;
            if ((t ? t.ownerDocument || t : k) !== s && it(t), t = t || s, i = i || [], !n || typeof n != "string") return i;
            if ((l = t.nodeType) !== 1 && l !== 9) return [];
            if (!c && !r) {
                if (y = ir.exec(n)) if (e = y[1]) {
                    if (l === 9) if (u = t.getElementById(e), u && u.parentNode) {
                        if (u.id === e) return i.push(u), i;
                    } else return i; else if (t.ownerDocument && (u = t.ownerDocument.getElementById(e)) && et(t, u) && u.id === e) return i.push(u), 
                    i;
                } else {
                    if (y[2]) return ut.apply(i, ft.call(t.getElementsByTagName(n), 0)), i;
                    if ((e = y[3]) && o.getByClassName && t.getElementsByClassName) return ut.apply(i, ft.call(t.getElementsByClassName(e), 0)), 
                    i;
                }
                if (o.qsa && !a.test(n)) {
                    if (w = !0, h = f, d = t, b = l === 9 && n, l === 1 && t.nodeName.toLowerCase() !== "object") {
                        for (v = yt(n), (w = t.getAttribute("id")) ? h = w.replace(fr, "\\$&") : t.setAttribute("id", h), 
                        h = "[id='" + h + "'] ", p = v.length; p--; ) v[p] = h + pt(v[p]);
                        d = ni.test(n) && t.parentNode || t;
                        b = v.join(",");
                    }
                    if (b) try {
                        return ut.apply(i, ft.call(d.querySelectorAll(b), 0)), i;
                    } catch (g) {} finally {
                        w || t.removeAttribute("id");
                    }
                }
            }
            return lr(n.replace(at, "$1"), t, i, r);
        }
        function yi(n, t) {
            var i = t && n, r = i && (~t.sourceIndex || li) - (~n.sourceIndex || li);
            if (r) return r;
            if (i) while (i = i.nextSibling) if (i === t) return -1;
            return n ? 1 : -1;
        }
        function or(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return i === "input" && t.type === n;
            };
        }
        function sr(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return (i === "input" || i === "button") && t.type === n;
            };
        }
        function g(n) {
            return l(function(t) {
                return t = +t, l(function(i, r) {
                    for (var u, f = n([], i.length, t), e = f.length; e--; ) i[u = f[e]] && (i[u] = !(r[u] = i[u]));
                });
            });
        }
        function yt(n, t) {
            var e, f, s, o, i, h, c, l = hi[n + " "];
            if (l) return t ? 0 : l.slice(0);
            for (i = n, h = [], c = r.preFilter; i; ) {
                (!e || (f = ki.exec(i))) && (f && (i = i.slice(f[0].length) || i), h.push(s = []));
                e = !1;
                (f = di.exec(i)) && (e = f.shift(), s.push({
                    value: e,
                    type: f[0].replace(at, " ")
                }), i = i.slice(e.length));
                for (o in r.filter) (f = vt[o].exec(i)) && (!c[o] || (f = c[o](f))) && (e = f.shift(), 
                s.push({
                    value: e,
                    type: o,
                    matches: f
                }), i = i.slice(e.length));
                if (!e) break;
            }
            return t ? i.length : i ? u.error(n) : hi(n, h).slice(0);
        }
        function pt(n) {
            for (var t = 0, r = n.length, i = ""; t < r; t++) i += n[t].value;
            return i;
        }
        function ri(n, t, i) {
            var r = t.dir, u = i && r === "parentNode", e = wi++;
            return t.first ? function(t, i, f) {
                while (t = t[r]) if (t.nodeType === 1 || u) return n(t, i, f);
            } : function(t, i, o) {
                var h, s, c, l = v + " " + e;
                if (o) {
                    while (t = t[r]) if ((t.nodeType === 1 || u) && n(t, i, o)) return !0;
                } else while (t = t[r]) if (t.nodeType === 1 || u) if (c = t[f] || (t[f] = {}), 
                (s = c[r]) && s[0] === l) {
                    if ((h = s[1]) === !0 || h === ot) return h === !0;
                } else if (s = c[r] = [ l ], s[1] = n(t, i, o) || ot, s[1] === !0) return !0;
            };
        }
        function ui(n) {
            return n.length > 1 ? function(t, i, r) {
                for (var u = n.length; u--; ) if (!n[u](t, i, r)) return !1;
                return !0;
            } : n[0];
        }
        function wt(n, t, i, r, u) {
            for (var e, o = [], f = 0, s = n.length, h = t != null; f < s; f++) (e = n[f]) && (!i || i(e, r, u)) && (o.push(e), 
            h && t.push(f));
            return o;
        }
        function fi(n, t, i, r, u, e) {
            return r && !r[f] && (r = fi(r)), u && !u[f] && (u = fi(u, e)), l(function(f, e, o, s) {
                var l, c, a, p = [], y = [], w = e.length, b = f || cr(t || "*", o.nodeType ? [ o ] : o, []), v = n && (f || !t) ? wt(b, p, n, o, s) : b, h = i ? u || (f ? n : w || r) ? [] : e : v;
                if (i && i(v, h, o, s), r) for (l = wt(h, y), r(l, [], o, s), c = l.length; c--; ) (a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
                if (f) {
                    if (u || n) {
                        if (u) {
                            for (l = [], c = h.length; c--; ) (a = h[c]) && l.push(v[c] = a);
                            u(null, h = [], l, s);
                        }
                        for (c = h.length; c--; ) (a = h[c]) && (l = u ? dt.call(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a));
                    }
                } else h = wt(h === e ? h.splice(w, h.length) : h), u ? u(null, e, h, s) : ut.apply(e, h);
            });
        }
        function ei(n) {
            for (var s, u, i, o = n.length, h = r.relative[n[0].type], c = h || r.relative[" "], t = h ? 1 : 0, l = ri(function(n) {
                return n === s;
            }, c, !0), a = ri(function(n) {
                return dt.call(s, n) > -1;
            }, c, !0), e = [ function(n, t, i) {
                return !h && (i || t !== ht) || ((s = t).nodeType ? l(n, t, i) : a(n, t, i));
            } ]; t < o; t++) if (u = r.relative[n[t].type]) e = [ ri(ui(e), u) ]; else {
                if (u = r.filter[n[t].type].apply(null, n[t].matches), u[f]) {
                    for (i = ++t; i < o; i++) if (r.relative[n[i].type]) break;
                    return fi(t > 1 && ui(e), t > 1 && pt(n.slice(0, t - 1)).replace(at, "$1"), u, t < i && ei(n.slice(t, i)), i < o && ei(n = n.slice(i)), i < o && pt(n));
                }
                e.push(u);
            }
            return ui(e);
        }
        function hr(n, t) {
            var f = 0, i = t.length > 0, e = n.length > 0, o = function(o, h, c, l, a) {
                var p, d, b, w = [], k = 0, y = "0", g = o && [], nt = a != null, tt = ht, rt = o || e && r.find.TAG("*", a && h.parentNode || h), it = v += tt == null ? 1 : Math.random() || .1;
                for (nt && (ht = h !== s && h, ot = f); (p = rt[y]) != null; y++) {
                    if (e && p) {
                        for (d = 0; b = n[d++]; ) if (b(p, h, c)) {
                            l.push(p);
                            break;
                        }
                        nt && (v = it, ot = ++f);
                    }
                    i && ((p = !b && p) && k--, o && g.push(p));
                }
                if (k += y, i && y !== k) {
                    for (d = 0; b = t[d++]; ) b(g, w, h, c);
                    if (o) {
                        if (k > 0) while (y--) g[y] || w[y] || (w[y] = bi.call(l));
                        w = wt(w);
                    }
                    ut.apply(l, w);
                    nt && !o && w.length > 0 && k + t.length > 1 && u.uniqueSort(l);
                }
                return nt && (v = it, ht = tt), g;
            };
            return i ? l(o) : o;
        }
        function cr(n, t, i) {
            for (var r = 0, f = t.length; r < f; r++) u(n, t[r], i);
            return i;
        }
        function lr(n, t, i, u) {
            var o, f, e, h, l, s = yt(n);
            if (!u && s.length === 1) {
                if (f = s[0] = s[0].slice(0), f.length > 2 && (e = f[0]).type === "ID" && t.nodeType === 9 && !c && r.relative[f[1].type]) {
                    if (t = r.find.ID(e.matches[0].replace(p, w), t)[0], !t) return i;
                    n = n.slice(f.shift().value.length);
                }
                for (o = vt.needsContext.test(n) ? 0 : f.length; o--; ) {
                    if (e = f[o], r.relative[h = e.type]) break;
                    if ((l = r.find[h]) && (u = l(e.matches[0].replace(p, w), ni.test(f[0].type) && t.parentNode || t))) {
                        if (f.splice(o, 1), n = u.length && pt(f), !n) return ut.apply(i, ft.call(u, 0)), 
                        i;
                        break;
                    }
                }
            }
            return bt(n, s)(u, t, c, i, ni.test(n)), i;
        }
        function pi() {}
        var nt, ot, r, st, oi, bt, tt, ht, it, s, h, c, a, rt, ct, et, kt, f = "sizzle" + -new Date(), k = n.document, o = {}, v = 0, wi = 0, si = ii(), hi = ii(), ci = ii(), y = typeof t, li = -2147483648, lt = [], bi = lt.pop, ut = lt.push, ft = lt.slice, dt = lt.indexOf || function(n) {
            for (var t = 0, i = this.length; t < i; t++) if (this[t] === n) return t;
            return -1;
        }, e = "[\\x20\\t\\r\\n\\f]", d = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ai = d.replace("w", "w#"), vi = "\\[" + e + "*(" + d + ")" + e + "*(?:([*^$|!~]?=)" + e + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ai + ")|)|)" + e + "*\\]", gt = ":(" + d + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + vi.replace(3, 8) + ")*)|.*)\\)|)", at = new RegExp("^" + e + "+|((?:^|[^\\\\])(?:\\\\.)*)" + e + "+$", "g"), ki = new RegExp("^" + e + "*," + e + "*"), di = new RegExp("^" + e + "*([\\x20\\t\\r\\n\\f>+~])" + e + "*"), gi = new RegExp(gt), nr = new RegExp("^" + ai + "$"), vt = {
            ID: new RegExp("^#(" + d + ")"),
            CLASS: new RegExp("^\\.(" + d + ")"),
            NAME: new RegExp("^\\[name=['\"]?(" + d + ")['\"]?\\]"),
            TAG: new RegExp("^(" + d.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + vi),
            PSEUDO: new RegExp("^" + gt),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + e + "*(even|odd|(([+-]|)(\\d*)n|)" + e + "*(?:([+-]|)" + e + "*(\\d+)|))" + e + "*\\)|)", "i"),
            needsContext: new RegExp("^" + e + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + e + "*((?:-\\d)?\\d*)" + e + "*\\)|)(?=[^-]|$)", "i")
        }, ni = /[\x20\t\r\n\f]*[+~]/, tr = /^[^{]+\{\s*\[native code/, ir = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rr = /^(?:input|select|textarea|button)$/i, ur = /^h\d$/i, fr = /'|\\/g, er = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, p = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g, w = function(n, t) {
            var i = "0x" + t - 65536;
            return i !== i ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, i & 1023 | 56320);
        };
        try {
            ft.call(k.documentElement.childNodes, 0)[0].nodeType;
        } catch (ar) {
            ft = function(n) {
                for (var t, i = []; t = this[n++]; ) i.push(t);
                return i;
            };
        }
        oi = u.isXML = function(n) {
            var t = n && (n.ownerDocument || n).documentElement;
            return t ? t.nodeName !== "HTML" : !1;
        };
        it = u.setDocument = function(n) {
            var i = n ? n.ownerDocument || n : k;
            return i === s || i.nodeType !== 9 || !i.documentElement ? s : (s = i, h = i.documentElement, 
            c = oi(i), o.tagNameNoComments = b(function(n) {
                return n.appendChild(i.createComment("")), !n.getElementsByTagName("*").length;
            }), o.attributes = b(function(n) {
                n.innerHTML = "<select></select>";
                var t = typeof n.lastChild.getAttribute("multiple");
                return t !== "boolean" && t !== "string";
            }), o.getByClassName = b(function(n) {
                return (n.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", 
                !n.getElementsByClassName || !n.getElementsByClassName("e").length) ? !1 : (n.lastChild.className = "e", 
                n.getElementsByClassName("e").length === 2);
            }), o.getByName = b(function(n) {
                n.id = f + 0;
                n.innerHTML = "<a name='" + f + "'></a><div name='" + f + "'></div>";
                h.insertBefore(n, h.firstChild);
                var t = i.getElementsByName && i.getElementsByName(f).length === 2 + i.getElementsByName(f + 0).length;
                return o.getIdNotName = !i.getElementById(f), h.removeChild(n), t;
            }), r.attrHandle = b(function(n) {
                return n.innerHTML = "<a href='#'></a>", n.firstChild && typeof n.firstChild.getAttribute !== y && n.firstChild.getAttribute("href") === "#";
            }) ? {} : {
                href: function(n) {
                    return n.getAttribute("href", 2);
                },
                type: function(n) {
                    return n.getAttribute("type");
                }
            }, o.getIdNotName ? (r.find.ID = function(n, t) {
                if (typeof t.getElementById !== y && !c) {
                    var i = t.getElementById(n);
                    return i && i.parentNode ? [ i ] : [];
                }
            }, r.filter.ID = function(n) {
                var t = n.replace(p, w);
                return function(n) {
                    return n.getAttribute("id") === t;
                };
            }) : (r.find.ID = function(n, i) {
                if (typeof i.getElementById !== y && !c) {
                    var r = i.getElementById(n);
                    return r ? r.id === n || typeof r.getAttributeNode !== y && r.getAttributeNode("id").value === n ? [ r ] : t : [];
                }
            }, r.filter.ID = function(n) {
                var t = n.replace(p, w);
                return function(n) {
                    var i = typeof n.getAttributeNode !== y && n.getAttributeNode("id");
                    return i && i.value === t;
                };
            }), r.find.TAG = o.tagNameNoComments ? function(n, t) {
                if (typeof t.getElementsByTagName !== y) return t.getElementsByTagName(n);
            } : function(n, t) {
                var i, r = [], f = 0, u = t.getElementsByTagName(n);
                if (n === "*") {
                    while (i = u[f++]) i.nodeType === 1 && r.push(i);
                    return r;
                }
                return u;
            }, r.find.NAME = o.getByName && function(n, t) {
                if (typeof t.getElementsByName !== y) return t.getElementsByName(name);
            }, r.find.CLASS = o.getByClassName && function(n, t) {
                if (typeof t.getElementsByClassName !== y && !c) return t.getElementsByClassName(n);
            }, rt = [], a = [ ":focus" ], (o.qsa = ti(i.querySelectorAll)) && (b(function(n) {
                n.innerHTML = "<select><option selected=''></option></select>";
                n.querySelectorAll("[selected]").length || a.push("\\[" + e + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
                n.querySelectorAll(":checked").length || a.push(":checked");
            }), b(function(n) {
                n.innerHTML = "<input type='hidden' i=''/>";
                n.querySelectorAll("[i^='']").length && a.push("[*^$]=" + e + "*(?:\"\"|'')");
                n.querySelectorAll(":enabled").length || a.push(":enabled", ":disabled");
                n.querySelectorAll("*,:x");
                a.push(",.*:");
            })), (o.matchesSelector = ti(ct = h.matchesSelector || h.mozMatchesSelector || h.webkitMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && b(function(n) {
                o.disconnectedMatch = ct.call(n, "div");
                ct.call(n, "[s!='']:x");
                rt.push("!=", gt);
            }), a = new RegExp(a.join("|")), rt = new RegExp(rt.join("|")), et = ti(h.contains) || h.compareDocumentPosition ? function(n, t) {
                var r = n.nodeType === 9 ? n.documentElement : n, i = t && t.parentNode;
                return n === i || !!(i && i.nodeType === 1 && (r.contains ? r.contains(i) : n.compareDocumentPosition && n.compareDocumentPosition(i) & 16));
            } : function(n, t) {
                if (t) while (t = t.parentNode) if (t === n) return !0;
                return !1;
            }, kt = h.compareDocumentPosition ? function(n, t) {
                var r;
                return n === t ? (tt = !0, 0) : (r = t.compareDocumentPosition && n.compareDocumentPosition && n.compareDocumentPosition(t)) ? r & 1 || n.parentNode && n.parentNode.nodeType === 11 ? n === i || et(k, n) ? -1 : t === i || et(k, t) ? 1 : 0 : r & 4 ? -1 : 1 : n.compareDocumentPosition ? -1 : 1;
            } : function(n, t) {
                var r, u = 0, o = n.parentNode, s = t.parentNode, f = [ n ], e = [ t ];
                if (n === t) return tt = !0, 0;
                if (o && s) {
                    if (o === s) return yi(n, t);
                } else return n === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : 0;
                for (r = n; r = r.parentNode; ) f.unshift(r);
                for (r = t; r = r.parentNode; ) e.unshift(r);
                while (f[u] === e[u]) u++;
                return u ? yi(f[u], e[u]) : f[u] === k ? -1 : e[u] === k ? 1 : 0;
            }, tt = !1, [ 0, 0 ].sort(kt), o.detectDuplicates = tt, s);
        };
        u.matches = function(n, t) {
            return u(n, null, null, t);
        };
        u.matchesSelector = function(n, t) {
            if ((n.ownerDocument || n) !== s && it(n), t = t.replace(er, "='$1']"), o.matchesSelector && !c && (!rt || !rt.test(t)) && !a.test(t)) try {
                var i = ct.call(n, t);
                if (i || o.disconnectedMatch || n.document && n.document.nodeType !== 11) return i;
            } catch (r) {}
            return u(t, s, null, [ n ]).length > 0;
        };
        u.contains = function(n, t) {
            return (n.ownerDocument || n) !== s && it(n), et(n, t);
        };
        u.attr = function(n, t) {
            var i;
            return ((n.ownerDocument || n) !== s && it(n), c || (t = t.toLowerCase()), i = r.attrHandle[t]) ? i(n) : c || o.attributes ? n.getAttribute(t) : ((i = n.getAttributeNode(t)) || n.getAttribute(t)) && n[t] === !0 ? t : i && i.specified ? i.value : null;
        };
        u.error = function(n) {
            throw new Error("Syntax error, unrecognized expression: " + n);
        };
        u.uniqueSort = function(n) {
            var r, u = [], t = 1, i = 0;
            if (tt = !o.detectDuplicates, n.sort(kt), tt) {
                for (;r = n[t]; t++) r === n[t - 1] && (i = u.push(t));
                while (i--) n.splice(u[i], 1);
            }
            return n;
        };
        st = u.getText = function(n) {
            var r, i = "", u = 0, t = n.nodeType;
            if (t) {
                if (t === 1 || t === 9 || t === 11) {
                    if (typeof n.textContent == "string") return n.textContent;
                    for (n = n.firstChild; n; n = n.nextSibling) i += st(n);
                } else if (t === 3 || t === 4) return n.nodeValue;
            } else for (;r = n[u]; u++) i += st(r);
            return i;
        };
        r = u.selectors = {
            cacheLength: 50,
            createPseudo: l,
            match: vt,
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(n) {
                    return n[1] = n[1].replace(p, w), n[3] = (n[4] || n[5] || "").replace(p, w), n[2] === "~=" && (n[3] = " " + n[3] + " "), 
                    n.slice(0, 4);
                },
                CHILD: function(n) {
                    return n[1] = n[1].toLowerCase(), n[1].slice(0, 3) === "nth" ? (n[3] || u.error(n[0]), 
                    n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * (n[3] === "even" || n[3] === "odd")), n[5] = +(n[7] + n[8] || n[3] === "odd")) : n[3] && u.error(n[0]), 
                    n;
                },
                PSEUDO: function(n) {
                    var i, t = !n[5] && n[2];
                    return vt.CHILD.test(n[0]) ? null : (n[4] ? n[2] = n[4] : t && gi.test(t) && (i = yt(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i), 
                    n[2] = t.slice(0, i)), n.slice(0, 3));
                }
            },
            filter: {
                TAG: function(n) {
                    return n === "*" ? function() {
                        return !0;
                    } : (n = n.replace(p, w).toLowerCase(), function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === n;
                    });
                },
                CLASS: function(n) {
                    var t = si[n + " "];
                    return t || (t = new RegExp("(^|" + e + ")" + n + "(" + e + "|$)")) && si(n, function(n) {
                        return t.test(n.className || typeof n.getAttribute !== y && n.getAttribute("class") || "");
                    });
                },
                ATTR: function(n, t, i) {
                    return function(r) {
                        var f = u.attr(r, n);
                        return f == null ? t === "!=" : t ? (f += "", t === "=" ? f === i : t === "!=" ? f !== i : t === "^=" ? i && f.indexOf(i) === 0 : t === "*=" ? i && f.indexOf(i) > -1 : t === "$=" ? i && f.slice(-i.length) === i : t === "~=" ? (" " + f + " ").indexOf(i) > -1 : t === "|=" ? f === i || f.slice(0, i.length + 1) === i + "-" : !1) : !0;
                    };
                },
                CHILD: function(n, t, i, r, u) {
                    var s = n.slice(0, 3) !== "nth", o = n.slice(-4) !== "last", e = t === "of-type";
                    return r === 1 && u === 0 ? function(n) {
                        return !!n.parentNode;
                    } : function(t, i, h) {
                        var a, k, c, l, y, w, b = s !== o ? "nextSibling" : "previousSibling", p = t.parentNode, g = e && t.nodeName.toLowerCase(), d = !h && !e;
                        if (p) {
                            if (s) {
                                while (b) {
                                    for (c = t; c = c[b]; ) if (e ? c.nodeName.toLowerCase() === g : c.nodeType === 1) return !1;
                                    w = b = n === "only" && !w && "nextSibling";
                                }
                                return !0;
                            }
                            if (w = [ o ? p.firstChild : p.lastChild ], o && d) {
                                for (k = p[f] || (p[f] = {}), a = k[n] || [], y = a[0] === v && a[1], l = a[0] === v && a[2], 
                                c = y && p.childNodes[y]; c = ++y && c && c[b] || (l = y = 0) || w.pop(); ) if (c.nodeType === 1 && ++l && c === t) {
                                    k[n] = [ v, y, l ];
                                    break;
                                }
                            } else if (d && (a = (t[f] || (t[f] = {}))[n]) && a[0] === v) l = a[1]; else while (c = ++y && c && c[b] || (l = y = 0) || w.pop()) if ((e ? c.nodeName.toLowerCase() === g : c.nodeType === 1) && ++l && (d && ((c[f] || (c[f] = {}))[n] = [ v, l ]), 
                            c === t)) break;
                            return l -= u, l === r || l % r == 0 && l / r >= 0;
                        }
                    };
                },
                PSEUDO: function(n, t) {
                    var e, i = r.pseudos[n] || r.setFilters[n.toLowerCase()] || u.error("unsupported pseudo: " + n);
                    return i[f] ? i(t) : i.length > 1 ? (e = [ n, n, "", t ], r.setFilters.hasOwnProperty(n.toLowerCase()) ? l(function(n, r) {
                        for (var u, f = i(n, t), e = f.length; e--; ) u = dt.call(n, f[e]), n[u] = !(r[u] = f[e]);
                    }) : function(n) {
                        return i(n, 0, e);
                    }) : i;
                }
            },
            pseudos: {
                not: l(function(n) {
                    var i = [], r = [], t = bt(n.replace(at, "$1"));
                    return t[f] ? l(function(n, i, r, u) {
                        for (var e, o = t(n, null, u, []), f = n.length; f--; ) (e = o[f]) && (n[f] = !(i[f] = e));
                    }) : function(n, u, f) {
                        return i[0] = n, t(i, null, f, r), !r.pop();
                    };
                }),
                has: l(function(n) {
                    return function(t) {
                        return u(n, t).length > 0;
                    };
                }),
                contains: l(function(n) {
                    return function(t) {
                        return (t.textContent || t.innerText || st(t)).indexOf(n) > -1;
                    };
                }),
                lang: l(function(n) {
                    return nr.test(n || "") || u.error("unsupported lang: " + n), n = n.replace(p, w).toLowerCase(), 
                    function(t) {
                        var i;
                        do if (i = c ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return i = i.toLowerCase(), 
                        i === n || i.indexOf(n + "-") === 0; while ((t = t.parentNode) && t.nodeType === 1);
                        return !1;
                    };
                }),
                target: function(t) {
                    var i = n.location && n.location.hash;
                    return i && i.slice(1) === t.id;
                },
                root: function(n) {
                    return n === h;
                },
                focus: function(n) {
                    return n === s.activeElement && (!s.hasFocus || s.hasFocus()) && !!(n.type || n.href || ~n.tabIndex);
                },
                enabled: function(n) {
                    return n.disabled === !1;
                },
                disabled: function(n) {
                    return n.disabled === !0;
                },
                checked: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return t === "input" && !!n.checked || t === "option" && !!n.selected;
                },
                selected: function(n) {
                    return n.parentNode && n.parentNode.selectedIndex, n.selected === !0;
                },
                empty: function(n) {
                    for (n = n.firstChild; n; n = n.nextSibling) if (n.nodeName > "@" || n.nodeType === 3 || n.nodeType === 4) return !1;
                    return !0;
                },
                parent: function(n) {
                    return !r.pseudos.empty(n);
                },
                header: function(n) {
                    return ur.test(n.nodeName);
                },
                input: function(n) {
                    return rr.test(n.nodeName);
                },
                button: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return t === "input" && n.type === "button" || t === "button";
                },
                text: function(n) {
                    var t;
                    return n.nodeName.toLowerCase() === "input" && n.type === "text" && ((t = n.getAttribute("type")) == null || t.toLowerCase() === n.type);
                },
                first: g(function() {
                    return [ 0 ];
                }),
                last: g(function(n, t) {
                    return [ t - 1 ];
                }),
                eq: g(function(n, t, i) {
                    return [ i < 0 ? i + t : i ];
                }),
                even: g(function(n, t) {
                    for (var i = 0; i < t; i += 2) n.push(i);
                    return n;
                }),
                odd: g(function(n, t) {
                    for (var i = 1; i < t; i += 2) n.push(i);
                    return n;
                }),
                lt: g(function(n, t, i) {
                    for (var r = i < 0 ? i + t : i; --r >= 0; ) n.push(r);
                    return n;
                }),
                gt: g(function(n, t, i) {
                    for (var r = i < 0 ? i + t : i; ++r < t; ) n.push(r);
                    return n;
                })
            }
        };
        for (nt in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) r.pseudos[nt] = or(nt);
        for (nt in {
            submit: !0,
            reset: !0
        }) r.pseudos[nt] = sr(nt);
        bt = u.compile = function(n, t) {
            var r, u = [], e = [], i = ci[n + " "];
            if (!i) {
                for (t || (t = yt(n)), r = t.length; r--; ) i = ei(t[r]), i[f] ? u.push(i) : e.push(i);
                i = ci(n, hr(e, u));
            }
            return i;
        };
        r.pseudos.nth = r.pseudos.eq;
        r.filters = pi.prototype = r.pseudos;
        r.setFilters = new pi();
        it();
        u.attr = i.attr;
        i.find = u;
        i.expr = u.selectors;
        i.expr[":"] = i.expr.pseudos;
        i.unique = u.uniqueSort;
        i.text = u.getText;
        i.isXMLDoc = u.isXML;
        i.contains = u.contains;
    }(n);
    var re = /Until$/, ue = /^(?:parents|prev(?:Until|All))/, fe = /^.[^:#\[\.,]*$/, hr = i.expr.match.needsContext, ee = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    i.fn.extend({
        find: function(n) {
            var t, r, f, u = this.length;
            if (typeof n != "string") return f = this, this.pushStack(i(n).filter(function() {
                for (t = 0; t < u; t++) if (i.contains(f[t], this)) return !0;
            }));
            for (r = [], t = 0; t < u; t++) i.find(n, this[t], r);
            return r = this.pushStack(u > 1 ? i.unique(r) : r), r.selector = (this.selector ? this.selector + " " : "") + n, 
            r;
        },
        has: function(n) {
            var t, r = i(n, this), u = r.length;
            return this.filter(function() {
                for (t = 0; t < u; t++) if (i.contains(this, r[t])) return !0;
            });
        },
        not: function(n) {
            return this.pushStack(lr(this, n, !1));
        },
        filter: function(n) {
            return this.pushStack(lr(this, n, !0));
        },
        is: function(n) {
            return !!n && (typeof n == "string" ? hr.test(n) ? i(n, this.context).index(this[0]) >= 0 : i.filter(n, this).length > 0 : this.filter(n).length > 0);
        },
        closest: function(n, t) {
            for (var r, f = 0, o = this.length, u = [], e = hr.test(n) || typeof n != "string" ? i(n, t || this.context) : 0; f < o; f++) for (r = this[f]; r && r.ownerDocument && r !== t && r.nodeType !== 11; ) {
                if (e ? e.index(r) > -1 : i.find.matchesSelector(r, n)) {
                    u.push(r);
                    break;
                }
                r = r.parentNode;
            }
            return this.pushStack(u.length > 1 ? i.unique(u) : u);
        },
        index: function(n) {
            return n ? typeof n == "string" ? i.inArray(this[0], i(n)) : i.inArray(n.jquery ? n[0] : n, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(n, t) {
            var r = typeof n == "string" ? i(n, t) : i.makeArray(n && n.nodeType ? [ n ] : n), u = i.merge(this.get(), r);
            return this.pushStack(i.unique(u));
        },
        addBack: function(n) {
            return this.add(n == null ? this.prevObject : this.prevObject.filter(n));
        }
    });
    i.fn.andSelf = i.fn.addBack;
    i.each({
        parent: function(n) {
            var t = n.parentNode;
            return t && t.nodeType !== 11 ? t : null;
        },
        parents: function(n) {
            return i.dir(n, "parentNode");
        },
        parentsUntil: function(n, t, r) {
            return i.dir(n, "parentNode", r);
        },
        next: function(n) {
            return cr(n, "nextSibling");
        },
        prev: function(n) {
            return cr(n, "previousSibling");
        },
        nextAll: function(n) {
            return i.dir(n, "nextSibling");
        },
        prevAll: function(n) {
            return i.dir(n, "previousSibling");
        },
        nextUntil: function(n, t, r) {
            return i.dir(n, "nextSibling", r);
        },
        prevUntil: function(n, t, r) {
            return i.dir(n, "previousSibling", r);
        },
        siblings: function(n) {
            return i.sibling((n.parentNode || {}).firstChild, n);
        },
        children: function(n) {
            return i.sibling(n.firstChild);
        },
        contents: function(n) {
            return i.nodeName(n, "iframe") ? n.contentDocument || n.contentWindow.document : i.merge([], n.childNodes);
        }
    }, function(n, t) {
        i.fn[n] = function(r, u) {
            var f = i.map(this, t, r);
            return re.test(n) || (u = r), u && typeof u == "string" && (f = i.filter(u, f)), 
            f = this.length > 1 && !ee[n] ? i.unique(f) : f, this.length > 1 && ue.test(n) && (f = f.reverse()), 
            this.pushStack(f);
        };
    });
    i.extend({
        filter: function(n, t, r) {
            return r && (n = ":not(" + n + ")"), t.length === 1 ? i.find.matchesSelector(t[0], n) ? [ t[0] ] : [] : i.find.matches(n, t);
        },
        dir: function(n, r, u) {
            for (var e = [], f = n[r]; f && f.nodeType !== 9 && (u === t || f.nodeType !== 1 || !i(f).is(u)); ) f.nodeType === 1 && e.push(f), 
            f = f[r];
            return e;
        },
        sibling: function(n, t) {
            for (var i = []; n; n = n.nextSibling) n.nodeType === 1 && n !== t && i.push(n);
            return i;
        }
    });
    var vr = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", oe = / jQuery\d+="(?:null|\d+)"/g, yr = new RegExp("<(?:" + vr + ")[\\s/>]", "i"), fi = /^\s+/, pr = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, wr = /<([\w:]+)/, br = /<tbody/i, se = /<|&#?\w+;/, he = /<(?:script|style|link)/i, ei = /^(?:checkbox|radio)$/i, ce = /checked\s*(?:[^=]|=\s*.checked.)/i, kr = /^$|\/(?:java|ecma)script/i, le = /^true\/(.*)/, ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, e = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        legend: [ 1, "<fieldset>", "</fieldset>" ],
        area: [ 1, "<map>", "</map>" ],
        param: [ 1, "<object>", "</object>" ],
        thead: [ 1, "<table>", "</table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: i.support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
    }, ve = ar(r), oi = ve.appendChild(r.createElement("div"));
    e.optgroup = e.option;
    e.tbody = e.tfoot = e.colgroup = e.caption = e.thead;
    e.th = e.td;
    i.fn.extend({
        text: function(n) {
            return i.access(this, function(n) {
                return n === t ? i.text(this) : this.empty().append((this[0] && this[0].ownerDocument || r).createTextNode(n));
            }, null, n, arguments.length);
        },
        wrapAll: function(n) {
            if (i.isFunction(n)) return this.each(function(t) {
                i(this).wrapAll(n.call(this, t));
            });
            if (this[0]) {
                var t = i(n, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]);
                t.map(function() {
                    for (var n = this; n.firstChild && n.firstChild.nodeType === 1; ) n = n.firstChild;
                    return n;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(n) {
            return i.isFunction(n) ? this.each(function(t) {
                i(this).wrapInner(n.call(this, t));
            }) : this.each(function() {
                var t = i(this), r = t.contents();
                r.length ? r.wrapAll(n) : t.append(n);
            });
        },
        wrap: function(n) {
            var t = i.isFunction(n);
            return this.each(function(r) {
                i(this).wrapAll(t ? n.call(this, r) : n);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                i.nodeName(this, "body") || i(this).replaceWith(this.childNodes);
            }).end();
        },
        append: function() {
            return this.domManip(arguments, !0, function(n) {
                (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && this.appendChild(n);
            });
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(n) {
                (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && this.insertBefore(n, this.firstChild);
            });
        },
        before: function() {
            return this.domManip(arguments, !1, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this);
            });
        },
        after: function() {
            return this.domManip(arguments, !1, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this.nextSibling);
            });
        },
        remove: function(n, t) {
            for (var r, f = 0; (r = this[f]) != null; f++) (!n || i.filter(n, [ r ]).length > 0) && (t || r.nodeType !== 1 || i.cleanData(u(r)), 
            r.parentNode && (t && i.contains(r.ownerDocument, r) && si(u(r, "script")), r.parentNode.removeChild(r)));
            return this;
        },
        empty: function() {
            for (var n, t = 0; (n = this[t]) != null; t++) {
                for (n.nodeType === 1 && i.cleanData(u(n, !1)); n.firstChild; ) n.removeChild(n.firstChild);
                n.options && i.nodeName(n, "select") && (n.options.length = 0);
            }
            return this;
        },
        clone: function(n, t) {
            return n = n == null ? !1 : n, t = t == null ? n : t, this.map(function() {
                return i.clone(this, n, t);
            });
        },
        html: function(n) {
            return i.access(this, function(n) {
                var r = this[0] || {}, f = 0, o = this.length;
                if (n === t) return r.nodeType === 1 ? r.innerHTML.replace(oe, "") : t;
                if (typeof n == "string" && !he.test(n) && (i.support.htmlSerialize || !yr.test(n)) && (i.support.leadingWhitespace || !fi.test(n)) && !e[(wr.exec(n) || [ "", "" ])[1].toLowerCase()]) {
                    n = n.replace(pr, "<$1></$2>");
                    try {
                        for (;f < o; f++) r = this[f] || {}, r.nodeType === 1 && (i.cleanData(u(r, !1)), 
                        r.innerHTML = n);
                        r = 0;
                    } catch (s) {}
                }
                r && this.empty().append(n);
            }, null, n, arguments.length);
        },
        replaceWith: function(n) {
            var t = i.isFunction(n);
            return t || typeof n == "string" || (n = i(n).not(this).detach()), this.domManip([ n ], !0, function(n) {
                var r = this.nextSibling, t = this.parentNode;
                t && (i(this).remove(), t.insertBefore(n, r));
            });
        },
        detach: function(n) {
            return this.remove(n, !0);
        },
        domManip: function(n, r, f) {
            n = bi.apply([], n);
            var c, e, l, s, y, h, o = 0, a = this.length, w = this, b = a - 1, v = n[0], p = i.isFunction(v);
            if (p || !(a <= 1 || typeof v != "string" || i.support.checkClone || !ce.test(v))) return this.each(function(i) {
                var u = w.eq(i);
                p && (n[0] = v.call(this, i, r ? u.html() : t));
                u.domManip(n, r, f);
            });
            if (a && (h = i.buildFragment(n, this[0].ownerDocument, !1, this), c = h.firstChild, 
            h.childNodes.length === 1 && (h = c), c)) {
                for (r = r && i.nodeName(c, "tr"), s = i.map(u(h, "script"), dr), l = s.length; o < a; o++) e = h, 
                o !== b && (e = i.clone(e, !0, !0), l && i.merge(s, u(e, "script"))), f.call(r && i.nodeName(this[o], "table") ? ye(this[o], "tbody") : this[o], e, o);
                if (l) for (y = s[s.length - 1].ownerDocument, i.map(s, gr), o = 0; o < l; o++) e = s[o], 
                kr.test(e.type || "") && !i._data(e, "globalEval") && i.contains(y, e) && (e.src ? i.ajax({
                    url: e.src,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    "throws": !0
                }) : i.globalEval((e.text || e.textContent || e.innerHTML || "").replace(ae, "")));
                h = c = null;
            }
            return this;
        }
    });
    i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(n, t) {
        i.fn[n] = function(n) {
            for (var u, r = 0, f = [], e = i(n), o = e.length - 1; r <= o; r++) u = r === o ? this : this.clone(!0), 
            i(e[r])[t](u), bt.apply(f, u.get());
            return this.pushStack(f);
        };
    });
    i.extend({
        clone: function(n, t, r) {
            var f, h, o, e, s, c = i.contains(n.ownerDocument, n);
            if (i.support.html5Clone || i.isXMLDoc(n) || !yr.test("<" + n.nodeName + ">") ? o = n.cloneNode(!0) : (oi.innerHTML = n.outerHTML, 
            oi.removeChild(o = oi.firstChild)), (!i.support.noCloneEvent || !i.support.noCloneChecked) && (n.nodeType === 1 || n.nodeType === 11) && !i.isXMLDoc(n)) for (f = u(o), 
            s = u(n), e = 0; (h = s[e]) != null; ++e) f[e] && pe(h, f[e]);
            if (t) if (r) for (s = s || u(n), f = f || u(o), e = 0; (h = s[e]) != null; e++) nu(h, f[e]); else nu(n, o);
            return f = u(o, "script"), f.length > 0 && si(f, !c && u(n, "script")), f = s = h = null, 
            o;
        },
        buildFragment: function(n, t, r, f) {
            for (var h, o, w, s, y, p, l, b = n.length, a = ar(t), c = [], v = 0; v < b; v++) if (o = n[v], 
            o || o === 0) if (i.type(o) === "object") i.merge(c, o.nodeType ? [ o ] : o); else if (se.test(o)) {
                for (s = s || a.appendChild(t.createElement("div")), y = (wr.exec(o) || [ "", "" ])[1].toLowerCase(), 
                l = e[y] || e._default, s.innerHTML = l[1] + o.replace(pr, "<$1></$2>") + l[2], 
                h = l[0]; h--; ) s = s.lastChild;
                if (!i.support.leadingWhitespace && fi.test(o) && c.push(t.createTextNode(fi.exec(o)[0])), 
                !i.support.tbody) for (o = y === "table" && !br.test(o) ? s.firstChild : l[1] === "<table>" && !br.test(o) ? s : 0, 
                h = o && o.childNodes.length; h--; ) i.nodeName(p = o.childNodes[h], "tbody") && !p.childNodes.length && o.removeChild(p);
                for (i.merge(c, s.childNodes), s.textContent = ""; s.firstChild; ) s.removeChild(s.firstChild);
                s = a.lastChild;
            } else c.push(t.createTextNode(o));
            for (s && a.removeChild(s), i.support.appendChecked || i.grep(u(c, "input"), we), 
            v = 0; o = c[v++]; ) if ((!f || i.inArray(o, f) === -1) && (w = i.contains(o.ownerDocument, o), 
            s = u(a.appendChild(o), "script"), w && si(s), r)) for (h = 0; o = s[h++]; ) kr.test(o.type || "") && r.push(o);
            return s = null, a;
        },
        cleanData: function(n, t) {
            for (var r, e, u, f, c = 0, s = i.expando, h = i.cache, l = i.support.deleteExpando, a = i.event.special; (r = n[c]) != null; c++) if ((t || i.acceptData(r)) && (u = r[s], 
            f = u && h[u], f)) {
                if (f.events) for (e in f.events) a[e] ? i.event.remove(r, e) : i.removeEvent(r, e, f.handle);
                h[u] && (delete h[u], l ? delete r[s] : typeof r.removeAttribute !== o ? r.removeAttribute(s) : r[s] = null, 
                b.push(u));
            }
        }
    });
    var rt, v, y, hi = /alpha\([^)]*\)/i, be = /opacity\s*=\s*([^)]*)/, ke = /^(top|right|bottom|left)$/, de = /^(none|table(?!-c[ea]).+)/, tu = /^margin/, ge = new RegExp("^(" + st + ")(.*)$", "i"), ct = new RegExp("^(" + st + ")(?!px)[a-z%]+$", "i"), no = new RegExp("^([+-])=(" + st + ")", "i"), iu = {
        BODY: "block"
    }, to = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, ru = {
        letterSpacing: 0,
        fontWeight: 400
    }, p = [ "Top", "Right", "Bottom", "Left" ], uu = [ "Webkit", "O", "Moz", "ms" ];
    i.fn.extend({
        css: function(n, r) {
            return i.access(this, function(n, r, u) {
                var e, o, s = {}, f = 0;
                if (i.isArray(r)) {
                    for (o = v(n), e = r.length; f < e; f++) s[r[f]] = i.css(n, r[f], !1, o);
                    return s;
                }
                return u !== t ? i.style(n, r, u) : i.css(n, r);
            }, n, r, arguments.length > 1);
        },
        show: function() {
            return eu(this, !0);
        },
        hide: function() {
            return eu(this);
        },
        toggle: function(n) {
            var t = typeof n == "boolean";
            return this.each(function() {
                (t ? n : ut(this)) ? i(this).show() : i(this).hide();
            });
        }
    });
    i.extend({
        cssHooks: {
            opacity: {
                get: function(n, t) {
                    if (t) {
                        var i = y(n, "opacity");
                        return i === "" ? "1" : i;
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": i.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(n, r, u, f) {
            if (n && n.nodeType !== 3 && n.nodeType !== 8 && n.style) {
                var o, s, e, h = i.camelCase(r), c = n.style;
                if (r = i.cssProps[h] || (i.cssProps[h] = fu(c, h)), e = i.cssHooks[r] || i.cssHooks[h], 
                u !== t) {
                    if (s = typeof u, s === "string" && (o = no.exec(u)) && (u = (o[1] + 1) * o[2] + parseFloat(i.css(n, r)), 
                    s = "number"), u == null || s === "number" && isNaN(u)) return;
                    if (s !== "number" || i.cssNumber[h] || (u += "px"), i.support.clearCloneStyle || u !== "" || r.indexOf("background") !== 0 || (c[r] = "inherit"), 
                    !e || !("set" in e) || (u = e.set(n, u, f)) !== t) try {
                        c[r] = u;
                    } catch (l) {}
                } else return e && "get" in e && (o = e.get(n, !1, f)) !== t ? o : c[r];
            }
        },
        css: function(n, r, u, f) {
            var h, e, o, s = i.camelCase(r);
            return (r = i.cssProps[s] || (i.cssProps[s] = fu(n.style, s)), o = i.cssHooks[r] || i.cssHooks[s], 
            o && "get" in o && (e = o.get(n, !0, u)), e === t && (e = y(n, r, f)), e === "normal" && r in ru && (e = ru[r]), 
            u === "" || u) ? (h = parseFloat(e), u === !0 || i.isNumeric(h) ? h || 0 : e) : e;
        },
        swap: function(n, t, i, r) {
            var f, u, e = {};
            for (u in t) e[u] = n.style[u], n.style[u] = t[u];
            f = i.apply(n, r || []);
            for (u in t) n.style[u] = e[u];
            return f;
        }
    });
    n.getComputedStyle ? (v = function(t) {
        return n.getComputedStyle(t, null);
    }, y = function(n, r, u) {
        var s, h, c, o = u || v(n), e = o ? o.getPropertyValue(r) || o[r] : t, f = n.style;
        return o && (e !== "" || i.contains(n.ownerDocument, n) || (e = i.style(n, r)), 
        ct.test(e) && tu.test(r) && (s = f.width, h = f.minWidth, c = f.maxWidth, f.minWidth = f.maxWidth = f.width = e, 
        e = o.width, f.width = s, f.minWidth = h, f.maxWidth = c)), e;
    }) : r.documentElement.currentStyle && (v = function(n) {
        return n.currentStyle;
    }, y = function(n, i, r) {
        var s, e, o, h = r || v(n), u = h ? h[i] : t, f = n.style;
        return u == null && f && f[i] && (u = f[i]), ct.test(u) && !ke.test(i) && (s = f.left, 
        e = n.runtimeStyle, o = e && e.left, o && (e.left = n.currentStyle.left), f.left = i === "fontSize" ? "1em" : u, 
        u = f.pixelLeft + "px", f.left = s, o && (e.left = o)), u === "" ? "auto" : u;
    });
    i.each([ "height", "width" ], function(n, t) {
        i.cssHooks[t] = {
            get: function(n, r, u) {
                if (r) return n.offsetWidth === 0 && de.test(i.css(n, "display")) ? i.swap(n, to, function() {
                    return hu(n, t, u);
                }) : hu(n, t, u);
            },
            set: function(n, r, u) {
                var f = u && v(n);
                return ou(n, r, u ? su(n, t, u, i.support.boxSizing && i.css(n, "boxSizing", !1, f) === "border-box", f) : 0);
            }
        };
    });
    i.support.opacity || (i.cssHooks.opacity = {
        get: function(n, t) {
            return be.test((t && n.currentStyle ? n.currentStyle.filter : n.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "";
        },
        set: function(n, t) {
            var r = n.style, u = n.currentStyle, e = i.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "", f = u && u.filter || r.filter || "";
            (r.zoom = 1, (t >= 1 || t === "") && i.trim(f.replace(hi, "")) === "" && r.removeAttribute && (r.removeAttribute("filter"), 
            t === "" || u && !u.filter)) || (r.filter = hi.test(f) ? f.replace(hi, e) : f + " " + e);
        }
    });
    i(function() {
        i.support.reliableMarginRight || (i.cssHooks.marginRight = {
            get: function(n, t) {
                if (t) return i.swap(n, {
                    display: "inline-block"
                }, y, [ n, "marginRight" ]);
            }
        });
        !i.support.pixelPosition && i.fn.position && i.each([ "top", "left" ], function(n, t) {
            i.cssHooks[t] = {
                get: function(n, r) {
                    if (r) return r = y(n, t), ct.test(r) ? i(n).position()[t] + "px" : r;
                }
            };
        });
    });
    i.expr && i.expr.filters && (i.expr.filters.hidden = function(n) {
        return n.offsetWidth <= 0 && n.offsetHeight <= 0 || !i.support.reliableHiddenOffsets && (n.style && n.style.display || i.css(n, "display")) === "none";
    }, i.expr.filters.visible = function(n) {
        return !i.expr.filters.hidden(n);
    });
    i.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(n, t) {
        i.cssHooks[n + t] = {
            expand: function(i) {
                for (var r = 0, f = {}, u = typeof i == "string" ? i.split(" ") : [ i ]; r < 4; r++) f[n + p[r] + t] = u[r] || u[r - 2] || u[0];
                return f;
            }
        };
        tu.test(n) || (i.cssHooks[n + t].set = ou);
    });
    var io = /%20/g, ro = /\[\]$/, au = /\r?\n/g, uo = /^(?:submit|button|image|reset|file)$/i, fo = /^(?:input|select|textarea|keygen)/i;
    i.fn.extend({
        serialize: function() {
            return i.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var n = i.prop(this, "elements");
                return n ? i.makeArray(n) : this;
            }).filter(function() {
                var n = this.type;
                return this.name && !i(this).is(":disabled") && fo.test(this.nodeName) && !uo.test(n) && (this.checked || !ei.test(n));
            }).map(function(n, t) {
                var r = i(this).val();
                return r == null ? null : i.isArray(r) ? i.map(r, function(n) {
                    return {
                        name: t.name,
                        value: n.replace(au, "\r\n")
                    };
                }) : {
                    name: t.name,
                    value: r.replace(au, "\r\n")
                };
            }).get();
        }
    });
    i.param = function(n, r) {
        var u, f = [], e = function(n, t) {
            t = i.isFunction(t) ? t() : t == null ? "" : t;
            f[f.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t);
        };
        if (r === t && (r = i.ajaxSettings && i.ajaxSettings.traditional), i.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function() {
            e(this.name, this.value);
        }); else for (u in n) ci(u, n[u], r, e);
        return f.join("&").replace(io, "+");
    };
    i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(n, t) {
        i.fn[t] = function(n, i) {
            return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t);
        };
    });
    i.fn.hover = function(n, t) {
        return this.mouseenter(n).mouseleave(t || n);
    };
    var w, c, li = i.now(), ai = /\?/, eo = /#.*$/, vu = /([?&])_=[^&]*/, oo = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, so = /^(?:GET|HEAD)$/, ho = /^\/\//, yu = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, pu = i.fn.load, wu = {}, vi = {}, bu = "*/".concat("*");
    try {
        c = ff.href;
    } catch (go) {
        c = r.createElement("a");
        c.href = "";
        c = c.href;
    }
    w = yu.exec(c.toLowerCase()) || [];
    i.fn.load = function(n, r, u) {
        if (typeof n != "string" && pu) return pu.apply(this, arguments);
        var f, s, h, e = this, o = n.indexOf(" ");
        return o >= 0 && (f = n.slice(o, n.length), n = n.slice(0, o)), i.isFunction(r) ? (u = r, 
        r = t) : r && typeof r == "object" && (h = "POST"), e.length > 0 && i.ajax({
            url: n,
            type: h,
            dataType: "html",
            data: r
        }).done(function(n) {
            s = arguments;
            e.html(f ? i("<div>").append(i.parseHTML(n)).find(f) : n);
        }).complete(u && function(n, t) {
            e.each(u, s || [ n.responseText, t, n ]);
        }), this;
    };
    i.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(n, t) {
        i.fn[t] = function(n) {
            return this.on(t, n);
        };
    });
    i.each([ "get", "post" ], function(n, r) {
        i[r] = function(n, u, f, e) {
            return i.isFunction(u) && (e = e || f, f = u, u = t), i.ajax({
                url: n,
                type: r,
                dataType: e,
                data: u,
                success: f
            });
        };
    });
    i.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: c,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(w[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": bu,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": n.String,
                "text html": !0,
                "text json": i.parseJSON,
                "text xml": i.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(n, t) {
            return t ? yi(yi(n, i.ajaxSettings), t) : yi(i.ajaxSettings, n);
        },
        ajaxPrefilter: ku(wu),
        ajaxTransport: ku(vi),
        ajax: function(n, r) {
            function k(n, r, s, c) {
                var l, k, w, rt, p, a = r;
                o !== 2 && (o = 2, g && clearTimeout(g), v = t, d = c || "", f.readyState = n > 0 ? 4 : 0, 
                s && (rt = co(u, f, s)), n >= 200 && n < 300 || n === 304 ? (u.ifModified && (p = f.getResponseHeader("Last-Modified"), 
                p && (i.lastModified[e] = p), p = f.getResponseHeader("etag"), p && (i.etag[e] = p)), 
                n === 204 ? (l = !0, a = "nocontent") : n === 304 ? (l = !0, a = "notmodified") : (l = lo(u, rt), 
                a = l.state, k = l.data, w = l.error, l = !w)) : (w = a, (n || !a) && (a = "error", 
                n < 0 && (n = 0))), f.status = n, f.statusText = (r || a) + "", l ? tt.resolveWith(h, [ k, a, f ]) : tt.rejectWith(h, [ f, a, w ]), 
                f.statusCode(b), b = t, y && nt.trigger(l ? "ajaxSuccess" : "ajaxError", [ f, u, l ? k : w ]), 
                it.fireWith(h, [ f, a ]), y && (nt.trigger("ajaxComplete", [ f, u ]), --i.active || i.event.trigger("ajaxStop")));
            }
            typeof n == "object" && (r = n, n = t);
            r = r || {};
            var l, a, e, d, g, y, v, p, u = i.ajaxSetup({}, r), h = u.context || u, nt = u.context && (h.nodeType || h.jquery) ? i(h) : i.event, tt = i.Deferred(), it = i.Callbacks("once memory"), b = u.statusCode || {}, rt = {}, ut = {}, o = 0, ft = "canceled", f = {
                readyState: 0,
                getResponseHeader: function(n) {
                    var t;
                    if (o === 2) {
                        if (!p) for (p = {}; t = oo.exec(d); ) p[t[1].toLowerCase()] = t[2];
                        t = p[n.toLowerCase()];
                    }
                    return t == null ? null : t;
                },
                getAllResponseHeaders: function() {
                    return o === 2 ? d : null;
                },
                setRequestHeader: function(n, t) {
                    var i = n.toLowerCase();
                    return o || (n = ut[i] = ut[i] || n, rt[n] = t), this;
                },
                overrideMimeType: function(n) {
                    return o || (u.mimeType = n), this;
                },
                statusCode: function(n) {
                    var t;
                    if (n) if (o < 2) for (t in n) b[t] = [ b[t], n[t] ]; else f.always(n[f.status]);
                    return this;
                },
                abort: function(n) {
                    var t = n || ft;
                    return v && v.abort(t), k(0, t), this;
                }
            };
            if (tt.promise(f).complete = it.add, f.success = f.done, f.error = f.fail, u.url = ((n || u.url || c) + "").replace(eo, "").replace(ho, w[1] + "//"), 
            u.type = r.method || r.type || u.method || u.type, u.dataTypes = i.trim(u.dataType || "*").toLowerCase().match(s) || [ "" ], 
            u.crossDomain == null && (l = yu.exec(u.url.toLowerCase()), u.crossDomain = !!(l && (l[1] !== w[1] || l[2] !== w[2] || (l[3] || (l[1] === "http:" ? 80 : 443)) != (w[3] || (w[1] === "http:" ? 80 : 443))))), 
            u.data && u.processData && typeof u.data != "string" && (u.data = i.param(u.data, u.traditional)), 
            du(wu, u, r, f), o === 2) return f;
            y = u.global;
            y && i.active++ == 0 && i.event.trigger("ajaxStart");
            u.type = u.type.toUpperCase();
            u.hasContent = !so.test(u.type);
            e = u.url;
            u.hasContent || (u.data && (e = u.url += (ai.test(e) ? "&" : "?") + u.data, delete u.data), 
            u.cache === !1 && (u.url = vu.test(e) ? e.replace(vu, "$1_=" + li++) : e + (ai.test(e) ? "&" : "?") + "_=" + li++));
            u.ifModified && (i.lastModified[e] && f.setRequestHeader("If-Modified-Since", i.lastModified[e]), 
            i.etag[e] && f.setRequestHeader("If-None-Match", i.etag[e]));
            (u.data && u.hasContent && u.contentType !== !1 || r.contentType) && f.setRequestHeader("Content-Type", u.contentType);
            f.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + (u.dataTypes[0] !== "*" ? ", " + bu + "; q=0.01" : "") : u.accepts["*"]);
            for (a in u.headers) f.setRequestHeader(a, u.headers[a]);
            if (u.beforeSend && (u.beforeSend.call(h, f, u) === !1 || o === 2)) return f.abort();
            ft = "abort";
            for (a in {
                success: 1,
                error: 1,
                complete: 1
            }) f[a](u[a]);
            if (v = du(vi, u, r, f), v) {
                f.readyState = 1;
                y && nt.trigger("ajaxSend", [ f, u ]);
                u.async && u.timeout > 0 && (g = setTimeout(function() {
                    f.abort("timeout");
                }, u.timeout));
                try {
                    o = 1;
                    v.send(rt, k);
                } catch (et) {
                    if (o < 2) k(-1, et); else throw et;
                }
            } else k(-1, "No Transport");
            return f;
        },
        getScript: function(n, r) {
            return i.get(n, t, r, "script");
        },
        getJSON: function(n, t, r) {
            return i.get(n, t, r, "json");
        }
    });
    i.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(n) {
                return i.globalEval(n), n;
            }
        }
    });
    i.ajaxPrefilter("script", function(n) {
        n.cache === t && (n.cache = !1);
        n.crossDomain && (n.type = "GET", n.global = !1);
    });
    i.ajaxTransport("script", function(n) {
        if (n.crossDomain) {
            var u, f = r.head || i("head")[0] || r.documentElement;
            return {
                send: function(t, i) {
                    u = r.createElement("script");
                    u.async = !0;
                    n.scriptCharset && (u.charset = n.scriptCharset);
                    u.src = n.url;
                    u.onload = u.onreadystatechange = function(n, t) {
                        (t || !u.readyState || /loaded|complete/.test(u.readyState)) && (u.onload = u.onreadystatechange = null, 
                        u.parentNode && u.parentNode.removeChild(u), u = null, t || i(200, "success"));
                    };
                    f.insertBefore(u, f.firstChild);
                },
                abort: function() {
                    if (u) u.onload(t, !0);
                }
            };
        }
    });
    pi = [];
    lt = /(=)\?(?=&|$)|\?\?/;
    i.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var n = pi.pop() || i.expando + "_" + li++;
            return this[n] = !0, n;
        }
    });
    i.ajaxPrefilter("json jsonp", function(r, u, f) {
        var e, s, o, h = r.jsonp !== !1 && (lt.test(r.url) ? "url" : typeof r.data == "string" && !(r.contentType || "").indexOf("application/x-www-form-urlencoded") && lt.test(r.data) && "data");
        if (h || r.dataTypes[0] === "jsonp") return e = r.jsonpCallback = i.isFunction(r.jsonpCallback) ? r.jsonpCallback() : r.jsonpCallback, 
        h ? r[h] = r[h].replace(lt, "$1" + e) : r.jsonp !== !1 && (r.url += (ai.test(r.url) ? "&" : "?") + r.jsonp + "=" + e), 
        r.converters["script json"] = function() {
            return o || i.error(e + " was not called"), o[0];
        }, r.dataTypes[0] = "json", s = n[e], n[e] = function() {
            o = arguments;
        }, f.always(function() {
            n[e] = s;
            r[e] && (r.jsonpCallback = u.jsonpCallback, pi.push(e));
            o && i.isFunction(s) && s(o[0]);
            o = s = t;
        }), "script";
    });
    gu = 0;
    at = n.ActiveXObject && function() {
        var n;
        for (n in g) g[n](t, !0);
    };
    i.ajaxSettings.xhr = n.ActiveXObject ? function() {
        return !this.isLocal && nf() || ao();
    } : nf;
    nt = i.ajaxSettings.xhr();
    i.support.cors = !!nt && "withCredentials" in nt;
    nt = i.support.ajax = !!nt;
    nt && i.ajaxTransport(function(r) {
        if (!r.crossDomain || i.support.cors) {
            var u;
            return {
                send: function(f, e) {
                    var h, s, o = r.xhr();
                    if (r.username ? o.open(r.type, r.url, r.async, r.username, r.password) : o.open(r.type, r.url, r.async), 
                    r.xhrFields) for (s in r.xhrFields) o[s] = r.xhrFields[s];
                    r.mimeType && o.overrideMimeType && o.overrideMimeType(r.mimeType);
                    r.crossDomain || f["X-Requested-With"] || (f["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in f) o.setRequestHeader(s, f[s]);
                    } catch (c) {}
                    o.send(r.hasContent && r.data || null);
                    u = function(n, f) {
                        var s, a, l, c;
                        try {
                            if (u && (f || o.readyState === 4)) if (u = t, h && (o.onreadystatechange = i.noop, 
                            at && delete g[h]), f) o.readyState !== 4 && o.abort(); else {
                                c = {};
                                s = o.status;
                                a = o.getAllResponseHeaders();
                                typeof o.responseText == "string" && (c.text = o.responseText);
                                try {
                                    l = o.statusText;
                                } catch (y) {
                                    l = "";
                                }
                                s || !r.isLocal || r.crossDomain ? s === 1223 && (s = 204) : s = c.text ? 200 : 404;
                            }
                        } catch (v) {
                            f || e(-1, v);
                        }
                        c && e(s, l, c, a);
                    };
                    r.async ? o.readyState === 4 ? setTimeout(u) : (h = ++gu, at && (g || (g = {}, i(n).unload(at)), 
                    g[h] = u), o.onreadystatechange = u) : u();
                },
                abort: function() {
                    u && u(t, !0);
                }
            };
        }
    });
    var tt, vt, vo = /^(?:toggle|show|hide)$/, yo = new RegExp("^(?:([+-])=|)(" + st + ")([a-z%]*)$", "i"), po = /queueHooks$/, yt = [ ko ], ft = {
        "*": [ function(n, t) {
            var o, s, r = this.createTween(n, t), e = yo.exec(t), h = r.cur(), u = +h || 0, f = 1, c = 20;
            if (e) {
                if (o = +e[2], s = e[3] || (i.cssNumber[n] ? "" : "px"), s !== "px" && u) {
                    u = i.css(r.elem, n, !0) || o || 1;
                    do f = f || ".5", u = u / f, i.style(r.elem, n, u + s); while (f !== (f = r.cur() / h) && f !== 1 && --c);
                }
                r.unit = s;
                r.start = u;
                r.end = e[1] ? u + (e[1] + 1) * o : o;
            }
            return r;
        } ]
    };
    i.Animation = i.extend(rf, {
        tweener: function(n, t) {
            i.isFunction(n) ? (t = n, n = [ "*" ]) : n = n.split(" ");
            for (var r, u = 0, f = n.length; u < f; u++) r = n[u], ft[r] = ft[r] || [], ft[r].unshift(t);
        },
        prefilter: function(n, t) {
            t ? yt.unshift(n) : yt.push(n);
        }
    });
    i.Tween = f;
    f.prototype = {
        constructor: f,
        init: function(n, t, r, u, f, e) {
            this.elem = n;
            this.prop = r;
            this.easing = f || "swing";
            this.options = t;
            this.start = this.now = this.cur();
            this.end = u;
            this.unit = e || (i.cssNumber[r] ? "" : "px");
        },
        cur: function() {
            var n = f.propHooks[this.prop];
            return n && n.get ? n.get(this) : f.propHooks._default.get(this);
        },
        run: function(n) {
            var t, r = f.propHooks[this.prop];
            return this.pos = this.options.duration ? t = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : t = n, 
            this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            r && r.set ? r.set(this) : f.propHooks._default.set(this), this;
        }
    };
    f.prototype.init.prototype = f.prototype;
    f.propHooks = {
        _default: {
            get: function(n) {
                var t;
                return n.elem[n.prop] != null && (!n.elem.style || n.elem.style[n.prop] == null) ? n.elem[n.prop] : (t = i.css(n.elem, n.prop, ""), 
                !t || t === "auto" ? 0 : t);
            },
            set: function(n) {
                i.fx.step[n.prop] ? i.fx.step[n.prop](n) : n.elem.style && (n.elem.style[i.cssProps[n.prop]] != null || i.cssHooks[n.prop]) ? i.style(n.elem, n.prop, n.now + n.unit) : n.elem[n.prop] = n.now;
            }
        }
    };
    f.propHooks.scrollTop = f.propHooks.scrollLeft = {
        set: function(n) {
            n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now);
        }
    };
    i.each([ "toggle", "show", "hide" ], function(n, t) {
        var r = i.fn[t];
        i.fn[t] = function(n, i, u) {
            return n == null || typeof n == "boolean" ? r.apply(this, arguments) : this.animate(pt(t, !0), n, i, u);
        };
    });
    i.fn.extend({
        fadeTo: function(n, t, i, r) {
            return this.filter(ut).css("opacity", 0).show().end().animate({
                opacity: t
            }, n, i, r);
        },
        animate: function(n, t, r, u) {
            var o = i.isEmptyObject(n), e = i.speed(t, r, u), f = function() {
                var t = rf(this, i.extend({}, n), e);
                f.finish = function() {
                    t.stop(!0);
                };
                (o || i._data(this, "finish")) && t.stop(!0);
            };
            return f.finish = f, o || e.queue === !1 ? this.each(f) : this.queue(e.queue, f);
        },
        stop: function(n, r, u) {
            var f = function(n) {
                var t = n.stop;
                delete n.stop;
                t(u);
            };
            return typeof n != "string" && (u = r, r = n, n = t), r && n !== !1 && this.queue(n || "fx", []), 
            this.each(function() {
                var o = !0, t = n != null && n + "queueHooks", e = i.timers, r = i._data(this);
                if (t) r[t] && r[t].stop && f(r[t]); else for (t in r) r[t] && r[t].stop && po.test(t) && f(r[t]);
                for (t = e.length; t--; ) e[t].elem === this && (n == null || e[t].queue === n) && (e[t].anim.stop(u), 
                o = !1, e.splice(t, 1));
                (o || !u) && i.dequeue(this, n);
            });
        },
        finish: function(n) {
            return n !== !1 && (n = n || "fx"), this.each(function() {
                var t, f = i._data(this), r = f[n + "queue"], e = f[n + "queueHooks"], u = i.timers, o = r ? r.length : 0;
                for (f.finish = !0, i.queue(this, n, []), e && e.cur && e.cur.finish && e.cur.finish.call(this), 
                t = u.length; t--; ) u[t].elem === this && u[t].queue === n && (u[t].anim.stop(!0), 
                u.splice(t, 1));
                for (t = 0; t < o; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete f.finish;
            });
        }
    });
    i.each({
        slideDown: pt("show"),
        slideUp: pt("hide"),
        slideToggle: pt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(n, t) {
        i.fn[n] = function(n, i, r) {
            return this.animate(t, n, i, r);
        };
    });
    i.speed = function(n, t, r) {
        var u = n && typeof n == "object" ? i.extend({}, n) : {
            complete: r || !r && t || i.isFunction(n) && n,
            duration: n,
            easing: r && t || t && !i.isFunction(t) && t
        };
        return u.duration = i.fx.off ? 0 : typeof u.duration == "number" ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default, 
        (u.queue == null || u.queue === !0) && (u.queue = "fx"), u.old = u.complete, u.complete = function() {
            i.isFunction(u.old) && u.old.call(this);
            u.queue && i.dequeue(this, u.queue);
        }, u;
    };
    i.easing = {
        linear: function(n) {
            return n;
        },
        swing: function(n) {
            return .5 - Math.cos(n * Math.PI) / 2;
        }
    };
    i.timers = [];
    i.fx = f.prototype.init;
    i.fx.tick = function() {
        var u, n = i.timers, r = 0;
        for (tt = i.now(); r < n.length; r++) u = n[r], u() || n[r] !== u || n.splice(r--, 1);
        n.length || i.fx.stop();
        tt = t;
    };
    i.fx.timer = function(n) {
        n() && i.timers.push(n) && i.fx.start();
    };
    i.fx.interval = 13;
    i.fx.start = function() {
        vt || (vt = setInterval(i.fx.tick, i.fx.interval));
    };
    i.fx.stop = function() {
        clearInterval(vt);
        vt = null;
    };
    i.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    i.fx.step = {};
    i.expr && i.expr.filters && (i.expr.filters.animated = function(n) {
        return i.grep(i.timers, function(t) {
            return n === t.elem;
        }).length;
    });
    i.fn.offset = function(n) {
        if (arguments.length) return n === t ? this : this.each(function(t) {
            i.offset.setOffset(this, n, t);
        });
        var r, e, f = {
            top: 0,
            left: 0
        }, u = this[0], s = u && u.ownerDocument;
        if (s) return (r = s.documentElement, !i.contains(r, u)) ? f : (typeof u.getBoundingClientRect !== o && (f = u.getBoundingClientRect()), 
        e = uf(s), {
            top: f.top + (e.pageYOffset || r.scrollTop) - (r.clientTop || 0),
            left: f.left + (e.pageXOffset || r.scrollLeft) - (r.clientLeft || 0)
        });
    };
    i.offset = {
        setOffset: function(n, t, r) {
            var f = i.css(n, "position");
            f === "static" && (n.style.position = "relative");
            var e = i(n), o = e.offset(), l = i.css(n, "top"), a = i.css(n, "left"), v = (f === "absolute" || f === "fixed") && i.inArray("auto", [ l, a ]) > -1, u = {}, s = {}, h, c;
            v ? (s = e.position(), h = s.top, c = s.left) : (h = parseFloat(l) || 0, c = parseFloat(a) || 0);
            i.isFunction(t) && (t = t.call(n, r, o));
            t.top != null && (u.top = t.top - o.top + h);
            t.left != null && (u.left = t.left - o.left + c);
            "using" in t ? t.using.call(n, u) : e.css(u);
        }
    };
    i.fn.extend({
        position: function() {
            if (this[0]) {
                var n, r, t = {
                    top: 0,
                    left: 0
                }, u = this[0];
                return i.css(u, "position") === "fixed" ? r = u.getBoundingClientRect() : (n = this.offsetParent(), 
                r = this.offset(), i.nodeName(n[0], "html") || (t = n.offset()), t.top += i.css(n[0], "borderTopWidth", !0), 
                t.left += i.css(n[0], "borderLeftWidth", !0)), {
                    top: r.top - t.top - i.css(u, "marginTop", !0),
                    left: r.left - t.left - i.css(u, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var n = this.offsetParent || r.documentElement; n && !i.nodeName(n, "html") && i.css(n, "position") === "static"; ) n = n.offsetParent;
                return n || r.documentElement;
            });
        }
    });
    i.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(n, r) {
        var u = /Y/.test(r);
        i.fn[n] = function(f) {
            return i.access(this, function(n, f, e) {
                var o = uf(n);
                if (e === t) return o ? r in o ? o[r] : o.document.documentElement[f] : n[f];
                o ? o.scrollTo(u ? i(o).scrollLeft() : e, u ? e : i(o).scrollTop()) : n[f] = e;
            }, n, f, arguments.length, null);
        };
    });
    i.each({
        Height: "height",
        Width: "width"
    }, function(n, r) {
        i.each({
            padding: "inner" + n,
            content: r,
            "": "outer" + n
        }, function(u, f) {
            i.fn[f] = function(f, e) {
                var o = arguments.length && (u || typeof f != "boolean"), s = u || (f === !0 || e === !0 ? "margin" : "border");
                return i.access(this, function(r, u, f) {
                    var e;
                    return i.isWindow(r) ? r.document.documentElement["client" + n] : r.nodeType === 9 ? (e = r.documentElement, 
                    Math.max(r.body["scroll" + n], e["scroll" + n], r.body["offset" + n], e["offset" + n], e["client" + n])) : f === t ? i.css(r, u, s) : i.style(r, u, f, s);
                }, r, o ? f : t, o, null);
            };
        });
    });
    n.jQuery = n.$ = i;
    typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return i;
    });
})(window), function(n, t, i) {
    function r(i) {
        e[i] || (e[i] = !0, n.migrateWarnings.push(i), t.console && console.warn && !n.migrateMute && (console.warn("JQMIGRATE: " + i), 
        n.migrateTrace && console.trace && console.trace()));
    }
    function o(t, i, u, f) {
        if (Object.defineProperty) try {
            Object.defineProperty(t, i, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return r(f), u;
                },
                set: function(n) {
                    r(f);
                    u = n;
                }
            });
            return;
        } catch (e) {}
        n._definePropertyBroken = !0;
        t[i] = u;
    }
    var e = {}, l, a, v;
    n.migrateWarnings = [];
    !n.migrateMute && t.console && console.log && console.log("JQMIGRATE: Logging is active");
    n.migrateTrace === i && (n.migrateTrace = !0);
    n.migrateReset = function() {
        e = {};
        n.migrateWarnings.length = 0;
    };
    document.compatMode === "BackCompat" && r("jQuery is not compatible with Quirks Mode");
    var s = n("<input/>", {
        size: 1
    }).attr("size") && n.attrFn, h = n.attr, g = n.attrHooks.value && n.attrHooks.value.get || function() {
        return null;
    }, nt = n.attrHooks.value && n.attrHooks.value.set || function() {
        return i;
    }, tt = /^(?:input|button)$/i, it = /^[238]$/, rt = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, ut = /^(?:checked|selected)$/i;
    o(n, "attrFn", s || {}, "jQuery.attrFn is deprecated");
    n.attr = function(t, u, f, e) {
        var o = u.toLowerCase(), c = t && t.nodeType;
        return e && (h.length < 4 && r("jQuery.fn.attr( props, pass ) is deprecated"), t && !it.test(c) && (s ? u in s : n.isFunction(n.fn[u]))) ? n(t)[u](f) : (u === "type" && f !== i && tt.test(t.nodeName) && t.parentNode && r("Can't change the 'type' of an input or button in IE 6/7/8"), 
        !n.attrHooks[o] && rt.test(o) && (n.attrHooks[o] = {
            get: function(t, r) {
                var u, f = n.prop(t, r);
                return f === !0 || typeof f != "boolean" && (u = t.getAttributeNode(r)) && u.nodeValue !== !1 ? r.toLowerCase() : i;
            },
            set: function(t, i, r) {
                var u;
                return i === !1 ? n.removeAttr(t, r) : (u = n.propFix[r] || r, u in t && (t[u] = !0), 
                t.setAttribute(r, r.toLowerCase())), r;
            }
        }, ut.test(o) && r("jQuery.fn.attr('" + o + "') may use property instead of attribute")), 
        h.call(n, t, u, f));
    };
    n.attrHooks.value = {
        get: function(n, t) {
            var i = (n.nodeName || "").toLowerCase();
            return i === "button" ? g.apply(this, arguments) : (i !== "input" && i !== "option" && r("jQuery.fn.attr('value') no longer gets properties"), 
            t in n ? n.value : null);
        },
        set: function(n, t) {
            var i = (n.nodeName || "").toLowerCase();
            if (i === "button") return nt.apply(this, arguments);
            i !== "input" && i !== "option" && r("jQuery.fn.attr('value', val) no longer sets properties");
            n.value = t;
        }
    };
    var f, u, c = n.fn.init, ft = n.parseJSON, et = /^(?:[^<]*(<[\w\W]+>)[^>]*|#([\w\-]*))$/;
    n.fn.init = function(t, i, u) {
        var f;
        return t && typeof t == "string" && !n.isPlainObject(i) && (f = et.exec(t)) && f[1] && (t.charAt(0) !== "<" && r("$(html) HTML strings must start with '<' character"), 
        i && i.context && (i = i.context), n.parseHTML) ? c.call(this, n.parseHTML(n.trim(t), i, !0), i, u) : c.apply(this, arguments);
    };
    n.fn.init.prototype = n.fn;
    n.parseJSON = function(n) {
        return !n && n !== null ? (r("jQuery.parseJSON requires a valid JSON string"), null) : ft.apply(this, arguments);
    };
    n.uaMatch = function(n) {
        n = n.toLowerCase();
        var t = /(chrome)[ \/]([\w.]+)/.exec(n) || /(webkit)[ \/]([\w.]+)/.exec(n) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(n) || /(msie) ([\w.]+)/.exec(n) || n.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(n) || [];
        return {
            browser: t[1] || "",
            version: t[2] || "0"
        };
    };
    n.browser || (f = n.uaMatch(navigator.userAgent), u = {}, f.browser && (u[f.browser] = !0, 
    u.version = f.version), u.chrome ? u.webkit = !0 : u.webkit && (u.safari = !0), 
    n.browser = u);
    o(n, "browser", n.browser, "jQuery.browser is deprecated");
    n.sub = function() {
        function t(n, i) {
            return new t.fn.init(n, i);
        }
        n.extend(!0, t, this);
        t.superclass = this;
        t.fn = t.prototype = this();
        t.fn.constructor = t;
        t.sub = this.sub;
        t.fn.init = function(r, u) {
            return u && u instanceof n && !(u instanceof t) && (u = t(u)), n.fn.init.call(this, r, u, i);
        };
        t.fn.init.prototype = t.fn;
        var i = t(document);
        return r("jQuery.sub() is deprecated"), t;
    };
    n.ajaxSetup({
        converters: {
            "text json": n.parseJSON
        }
    });
    l = n.fn.data;
    n.fn.data = function(t) {
        var f, u, e = this[0];
        return e && t === "events" && arguments.length === 1 && (f = n.data(e, t), u = n._data(e, t), 
        (f === i || f === u) && u !== i) ? (r("Use of jQuery.fn.data('events') is deprecated"), 
        u) : l.apply(this, arguments);
    };
    a = /\/(java|ecma)script/i;
    v = n.fn.andSelf || n.fn.addBack;
    n.fn.andSelf = function() {
        return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), v.apply(this, arguments);
    };
    n.clean || (n.clean = function(t, i, u, f) {
        i = i || document;
        i = !i.nodeType && i[0] || i;
        i = i.ownerDocument || i;
        r("jQuery.clean() is deprecated");
        var o, e, h, c, s = [];
        if (n.merge(s, n.buildFragment(t, i).childNodes), u) for (h = function(n) {
            if (!n.type || a.test(n.type)) return f ? f.push(n.parentNode ? n.parentNode.removeChild(n) : n) : u.appendChild(n);
        }, o = 0; (e = s[o]) != null; o++) n.nodeName(e, "script") && h(e) || (u.appendChild(e), 
        typeof e.getElementsByTagName != "undefined" && (c = n.grep(n.merge([], e.getElementsByTagName("script")), h), 
        s.splice.apply(s, [ o + 1, 0 ].concat(c)), o += c.length));
        return s;
    });
    var ot = n.event.add, st = n.event.remove, ht = n.event.trigger, ct = n.fn.toggle, y = n.fn.live, p = n.fn.die, w = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess", b = new RegExp("\\b(?:" + w + ")\\b"), k = /(?:^|\s)hover(\.\S+|)\b/, d = function(t) {
        return typeof t != "string" || n.event.special.hover ? t : (k.test(t) && r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), 
        t && t.replace(k, "mouseenter$1 mouseleave$1"));
    };
    n.event.props && n.event.props[0] !== "attrChange" && n.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement");
    n.event.dispatch && o(n.event, "handle", n.event.dispatch, "jQuery.event.handle is undocumented and deprecated");
    n.event.add = function(n, t, i, u, f) {
        n !== document && b.test(t) && r("AJAX events should be attached to document: " + t);
        ot.call(this, n, d(t || ""), i, u, f);
    };
    n.event.remove = function(n, t, i, r, u) {
        st.call(this, n, d(t) || "", i, r, u);
    };
    n.fn.error = function() {
        var n = Array.prototype.slice.call(arguments, 0);
        return (r("jQuery.fn.error() is deprecated"), n.splice(0, 0, "error"), arguments.length) ? this.bind.apply(this, n) : (this.triggerHandler.apply(this, n), 
        this);
    };
    n.fn.toggle = function(t, i) {
        if (!n.isFunction(t) || !n.isFunction(i)) return ct.apply(this, arguments);
        r("jQuery.fn.toggle(handler, handler...) is deprecated");
        var u = arguments, e = t.guid || n.guid++, f = 0, o = function(i) {
            var r = (n._data(this, "lastToggle" + t.guid) || 0) % f;
            return n._data(this, "lastToggle" + t.guid, r + 1), i.preventDefault(), u[r].apply(this, arguments) || !1;
        };
        for (o.guid = e; f < u.length; ) u[f++].guid = e;
        return this.click(o);
    };
    n.fn.live = function(t, i, u) {
        if (r("jQuery.fn.live() is deprecated"), y) return y.apply(this, arguments);
        n(this.context).on(t, this.selector, i, u);
        return this;
    };
    n.fn.die = function(t, i) {
        return (r("jQuery.fn.die() is deprecated"), p) ? p.apply(this, arguments) : (n(this.context).off(t, this.selector || "**", i), 
        this);
    };
    n.event.trigger = function(n, t, i, u) {
        return i || b.test(n) || r("Global events are undocumented and deprecated"), ht.call(this, n, t, i || document, u);
    };
    n.each(w.split("|"), function(t, i) {
        n.event.special[i] = {
            setup: function() {
                var t = this;
                return t !== document && (n.event.add(document, i + "." + n.guid, function() {
                    n.event.trigger(i, null, t, !0);
                }), n._data(this, i, n.guid++)), !1;
            },
            teardown: function() {
                return this !== document && n.event.remove(document, i + "." + n._data(this, i)), 
                !1;
            }
        };
    });
}(jQuery, window);

var KEY_UP = 38, KEY_DOWN = 40, KEY_ENTER = 13, KEY_A = 65, KEY_Z = 90, KEY_0 = 48, KEY_9 = 57, KEY_NUMPAD_0 = 96, KEY_NUMPAD_9 = 105, timeout = 3e3, lastBalance, amsrefreshTimer, loginCount = 0, retryCount = 3, isReceived = !1, sslTimer, useMCS = navigator.userAgent.match(/Trident.*rv\:11\./) ? !1 : !$.browser.msie, isIE8AndBelow = $.browser.msie && parseInt($.browser.version) <= 8, isIE9AndBelow = $.browser.msie && parseInt($.browser.version) <= 9, $parentDocument, $parentWindow;

String.prototype.startWith = function(n) {
    return this.match("^" + n) == n;
};

String.prototype.trim = function() {
    return this.replace(/^[\s\xA0]+/, "").replace(/[\s\xA0]+$/, "");
};

String.prototype.endWith = function(n) {
    return this.match(n + "$") == n;
};

jQuery.cookie = function(n, t, i) {
    var f, r, e, o, u, s;
    if (typeof t != "undefined") {
        i = i || {};
        t === null && (t = "", i.expires = -1);
        f = "";
        i.expires && (typeof i.expires == "number" || i.expires.toUTCString) && (typeof i.expires == "number" ? (r = new Date(), 
        r.setTime(r.getTime() + i.expires * 864e5)) : r = i.expires, f = "; expires=" + r.toUTCString());
        var h = i.path ? "; path=" + i.path : "", c = i.domain ? "; domain=" + i.domain : "", l = i.secure ? "; secure" : "";
        document.cookie = [ n, "=", encodeURIComponent(t), f, h, c, l ].join("");
    } else {
        if (e = null, document.cookie && document.cookie != "") for (o = document.cookie.split(";"), 
        u = 0; u < o.length; u++) if (s = jQuery.trim(o[u]), s.substring(0, n.length + 1) == n + "=") {
            e = decodeURIComponent(s.substring(n.length + 1));
            break;
        }
        return e;
    }
};

StringBuilderEx = Array;

Array.prototype.append = Array.prototype.push;

Array.prototype._convertToArray = function(n) {
    if (!n) return [];
    if (n.toArray) return n.toArray();
    for (var t = n.length, i = new Array(t); t--; ) i[t] = n[t];
    return i;
};

Array.prototype.appendFormat = function(n) {
    var t = this._convertToArray(arguments).slice(1);
    this[this.length] = n.replace(/\{(\d+)\}/g, function(n, i) {
        if (t[i] != undefined || t[i] != null) return t[i].toString();
    });
};

Array.prototype.appendFormatEx = function(n) {
    var i, t, r;
    for (this._parameters == null && (this._parameters = []), i = this._convertToArray(arguments).slice(1), 
    t = 0, r = i.length; t < r; t++) this._parameters[this._parameters.length] = i[t];
    this[this.length] = n;
};

Array.prototype.toString = function() {
    var i = this._parameters != null, r, n, t, u;
    if (i = i && this._parameters.length > 0, i) {
        for (r = this.join("").split("?"), n = [], t = 0, u = r.length; t < u; t++) n[n.length] = r[t], 
        n[n.length] = this._parameters[t];
        return n.join("");
    }
    return this.join("");
};

Array.prototype.indexOf = function(n, t) {
    for (var i = t || 0, r = this.length; i < r; i++) if (this[i] === n) return i;
    return -1;
};

Array.prototype.unique = function() {
    for (var i = [], r = this.length, t, n = 0; n < r; n++) {
        for (t = n + 1; t < r; t++) this[n] === this[t] && (t = ++n);
        i.push(this[n]);
    }
    return i;
};

var utility = {
    securetimeout: 1e4,
    templateCache: {},
    isConsoleLogTemplate: !1,
    stopRequest: !1,
    $error: null,
    $lostConn: null,
    bodyHeight: 0,
    currentRequest: null,
    currentRequestUrl: null,
    abortTimer: null,
    showError: function() {
        utility.$error == null && (utility.$error = $("<a href='javascript:void(0)' id='errMsg'>" + new Date() + ":Error Occur:Please refresh page</a>").click(function() {
            window.location.href = window.location.href;
        }), window.status = new Date());
    },
    showLostConn: function() {
        utility.stopRequest = !0;
        utility.$lostConn == null && (utility.$lostConn = $("<a href='javascript:void(0)' id='errLostConnMsg'>" + new Date() + ":Lost connection,Please refresh page</a>").click(function() {
            window.location.href = window.location.href;
        }), window.status = new Date());
    },
    template: function(n, t, i) {
        var r, u, f, e;
        if (this.isConsoleLogTemplate && console.log("[utility.template] templateUrl = " + n + ", key = " + i), 
        i && (u = this.templateCache[i], u)) {
            r = TrimPath.parseTemplate(u);
            this.isConsoleLogTemplate && console.log("[utility.template] Get from templateCache. key = " + i);
            t(r);
            return;
        }
        (f = window.location.host != "localhost:288" ? "/static/templates/" + n + "?v=" + global.rv : "/static/templates/" + n + "?v=" + new Date().getTime(), 
        e = !0, (n.indexOf("_1024") != -1 || n.indexOf("_1280") != -1) && (e = !1), utility.stopRequest) || $.ajax({
            url: f,
            cache: !0,
            type: "GET",
            success: function(n) {
                r = TrimPath.parseTemplate(n);
                utility.templateCache[i] = n;
                utility.isConsoleLogTemplate && console.log("[utility.template] Ajax get template (" + f + ", key = " + i + ") and store into templateCache");
                t(r);
            },
            error: function() {},
            async: e
        });
    },
    templateFromPage: function(n, t, i) {
        var r, u;
        if (n = n.split("/")[1], n = "tmpl" + n.replace(".html", ""), this.isConsoleLogTemplate && console.log("[utility.template] templateId = " + n + ", key = " + i), 
        i && (r = this.templateCache[i], r)) {
            this.isConsoleLogTemplate && console.log("[utility.template] Get from templateCache. key = " + i);
            t(r);
            return;
        }
        u = $("#" + n).text();
        r = TrimPath.parseTemplate(u);
        u = null;
        utility.templateCache[i] = r;
        utility.isConsoleLogTemplate && console.log("[utility.template] Ajax get template (" + n + ", key = " + i + ") and store into templateCache");
        t(r);
    },
    getValueFromUrl: function(n) {
        var t, r, i;
        if (window.location.search) for (t = [], r = n.toLowerCase(), $.each(window.location.search.substring(1).split("&"), function() {
            $.each(this.split("="), function() {
                t.push(this);
            });
        }), i = 0; i < t.length; i += 2) if (t[i].toLowerCase() == r) return t[i + 1];
        return null;
    },
    getQueryFromUrl: function(n, t) {
        var f = [], u, r, i, e;
        if (n === undefined && (n = window.location.search), u = n.split("?"), u.length >= 2) {
            for (r = u[1].split("&"), i = 0; i < r.length; i++) e = r[i].split("="), e[0].toLowerCase() !== t.toLowerCase() && f.push(r[i]);
            return f.join("&");
        }
    },
    service: function(n, t, i, r, u, f, e) {
        if (!utility.stopRequest) {
            utility.abortTimer && (clearTimeout(utility.abortTimer), utility.abortTimer = !1);

            //获取服务地址
            var o = this.objToPostString(i), s = "/" + global.lan + "/Service/" + n + "?" + t;
            utility.currentRequest = $.ajax({
                url: s,
                cache: !1,
                data: o,
                type: r,
                success: function(n) {
                    utility.currentRequest = null;
                    utility.succeededAction(n, u, e);
                },
                error: function(n) {
                    utility.currentRequest = null;
                    utility.failedAction(n, f);
                },
                beforeSend: function(n, t) {
                    utility.currentRequest && utility.currentRequest.readyState != 4 && utility.currentRequestUrl.indexOf("CentralService?") != -1 && t.url.indexOf("CentralService?") != -1 && (utility.currentRequest.abort(), 
                    utility.currentRequest = null, console.log("Abort previous ajax request!"));
                    utility.currentRequestUrl = t.url;
                }
            });
            utility.currentRequestUrl.indexOf("CentralService?") != -1 && i.IsFirstLoad && (utility.abortTimer = setTimeout(function() {
                utility.currentRequest ? (console.log("Abort current ajax request!"), alert("Request timeout. Issue a new request."), 
                utility.currentRequest.abort(), utility.currentRequest = null, utility.service(n, t, i, r, u, f, e)) : console.log("ajax call completed in time");
            }, 3e4));
        }
    },
    parsePopupInfo: function(n) {
        for (var i = n.split(" "), r, u, f, t = 0; t < i.length; t++) switch (String(i[t]).toLowerCase().charAt(0)) {
          case "w":
            u = String(i[t]).substr(1);
            break;

          case "h":
            f = String(i[t]).substr(1);
            break;

          case "i":
            r = String(i[t]).substr(1);
        }
        return {
            id: r,
            width: u,
            height: f
        };
    },
    replaceTooltipBu: function(n) {
        if (n.indexOf("{0}") != -1) {
            if (global.bu == "188BET") return n.replace("{0}", l.TvNamePrefix188);
            if (global.bu.indexOf("RIO") != -1 || global.bu.indexOf("TT_CASH") != -1) return n.replace("{0}", l.TvNamePrefixTT);
        }
        return n;
    },
    succeededAction: function(response, callBack, excludeLanguage) {
        var data, parsed = !1;
        try {
            response && response != "" ? (typeof response == "object" ? data = response : eval("data =" + response), 
            !excludeLanguage && window.l && (data.$l = window.l), parsed = !0) : parsed = !1;
        } catch (e) {
            utility.showError("parse error: " + response);
        }
        parsed && data && (data.syserror ? console.log(data.syserror) : data.lostConn ? console.log("lost connection occurred...") : data.isAuth == !1 || callBack && callBack(data));
        data = null;
        response = null;
    },
    failedAction: function(n, t) {
        n.status == 404 && (utility.stopRequest = !0, window.status = new Date());
        t && t();
        n = null;
    },
    objToPostString: function(n, t) {
        var r, i, f, u;
        t || (t = "");
        r = [];
        for (i in n) if (n[i] != undefined && n[i] != null) if (n[i] instanceof Array) for (f = n[i], 
        u = 0; u < f.length; u++) r.push(t + i + "=" + f[u]); else typeof n[i] == "object" ? r.push(this.objToPostString(n[i], i + ".")) : r.push(t + i + "=" + encodeURIComponent(n[i]));
        return r.join("&");
    },
    isCookieEnabled: function() {
        return navigator.cookieEnabled ? !0 : !1;
    },
    cookie: {
        write: function(n, t, i) {
            i || (i = 7);
            $.cookie(n, t, {
                expires: i,
                path: "/"
            });
        },
        read: function(n) {
            return $.cookie(n);
        },
        erase: function(n) {
            $.cookie(n, null);
        }
    },
    dialogIndex: 0,
    popupUrl: function(n, t, i, r, u, f, e) {
        var o, s;
        if (!n || n.indexOf("javascript:void") >= 0) return !1;
        i && i != -1 || (i = 800);
        r && r != -1 || (r = 550);
        u || (u = "no");
        t ? (o = $("#" + t), o.length > 0 && (s = o.parent().dialog("destroy"), s.remove())) : t = "dialog" + utility.dialogIndex++;
        $("<div/>").dialog({
            autoOpen: !1,
            modal: !0,
            height: r,
            width: i,
            closeOnEscape: f == null ? !0 : f,
            resizable: !1,
            close: function(n, t) {
                e && $.isFunction(e) && e(n, t);
            }
        }).html('<iframe id="' + t + '" width="100%" height="100%" marginWidth="0" marginHeight="0" frameBorder="0" scrolling="' + u + '" />').dialog("open");
        $("#" + t).attr("src", n);
    },
    haveClass: function(n, t) {
        for (var i = 0; i < n.length; i++) if (!$(n[i]).hasClass(t)) return !1;
        return !0;
    },
    remove: function(n, t) {
        var u = [], i, r;
        if (n) for (i = 0; i < n.length; i++) r = n[i], r && t != r && u.push(r);
        return u;
    },
    parseToSizeInfo: function(n) {
        for (var i = n.split(" "), o, f = -1, e = -1, u, t = 0; t < i.length; t++) switch (String(i[t]).toLowerCase().charAt(0)) {
          case "w":
            f = parseInt(String(i[t]).substr(1));
            break;

          case "h":
            e = parseInt(String(i[t]).substr(1));
            break;

          case "i":
            o = String(i[t]).substr(1);
            break;

          case "s":
            u = String(i[t]).substr(1);
            break;

          case "r":
            r = String(i[t]).substr(1);
        }
        return (typeof u == "undefined" || u.toLowerCase() != "no") && (u = "yes"), (typeof r == "undefined" || r.toLowerCase() != "yes") && (r = "no"), 
        (isNaN(f) || isNaN(e)) && pm.showParentAlert(global.tLogin, "Error:" + n), {
            id: o,
            width: f,
            height: e,
            scroll: u,
            resizable: r
        };
    },
    disableLinks: function(n) {
        $(n).fadeTo(2e3, .3).addClass("disabled_link").removeClass("popup-new").removeAttr("href").unbind("click");
    },
    popupUrlWin: function(n, t, i) {
        var f = 0, e = 0, r = 800, u = 600, o, s;
        t.width != -1 && (r = t.width);
        t.height != -1 && (u = t.height);
        f = (screen.width - r) / 2;
        e = (screen.height - u) / 2;
        o = "resizable=" + t.resizable + ", scrollbars=" + t.scroll + ", left=" + f + ", top=" + e + ", width=" + r + ", height=" + u;
        s = window.open(n, i, o);
        s.focus();
    },
    popupNewWin: function(n, t, i, r) {
        var u = utility.parseToSizeInfo(t.className);
        (i == "_blank" && (i = "188BET"), i || (i = "188BET"), u && u.id && (i = u.id), 
        utility.popupUrlWin(t.href, u, i), r && r == !0) || (n.stopPropagation(), n.preventDefault());
    },
    ttip: function(n) {
        $(n).tt({
            showEvent: "mouseover",
            hideEvent: "mouseout",
            vAlign: "above",
            align: "flushLeft",
            ttClass: "tooltip",
            distanceX: 0,
            distanceY: 0,
            visibleOnScroll: !0
        });
    },
    ttip_st: function(n) {
        $(n).tt({
            showEvent: "mouseover",
            hideEvent: "mouseout",
            vAlign: "above",
            align: "flushLeft",
            ttClass: "tooltip",
            distanceX: 0,
            distanceY: 0,
            visibleOnScroll: !0,
            autoHide: !1
        });
    },
    checkRefresh: function() {
        uv && uv.login && utility.service("HomePageService", "NeedRefresh", {}, "GET", function(n) {
            n && n.ref && parent.location.reload();
        });
    },
    cancelEvent: function(n) {
        return n = n ? n : window.event, n.stopPropagation && n.stopPropagation(), n.preventDefault && n.preventDefault(), 
        n.cancelBubble = !0, n.cancel = !0, n.returnValue = !1, !1;
    },
    getParentScrollTop: function() {
        try {
            return $parentDocument === undefined && ($parentDocument = parent.$(parent.document)), 
            $parentDocument.scrollTop();
        } catch (n) {
            return console.log("Error: utility.getParentScrollTop() - " + n.message), 0;
        }
    },
    getParentWindowHeight: function() {
        try {
            return $parentWindow === undefined && ($parentWindow = parent.$(parent.window)), 
            $parentWindow.height();
        } catch (n) {
            return console.log("Error: utility.getParentWindowHeight() - " + n.message), 0;
        }
    },
    cachedAnnBarHeight: -1,
    getParentAnnBarHeight: function() {
        var n, t;
        if (this.cachedAnnBarHeight == -1) {
            n = 0;
            try {
                t = parent.$("#announcement-box:visible");
                t.length > 0 && (n = t.height());
            } catch (i) {
                console.log("Error: utility.getParentAnnBarHeight() - " + i.message);
            }
            this.cachedAnnBarHeight = n;
        }
        return this.cachedAnnBarHeight;
    },
    getParentHeaderHeight: function() {
        var n;
        return n = global.bu == "188BET" || global.bu == "SB1888" ? "#HeadContainer" : ".header-c", 
        $(parent.document) ? $(parent.document).find(n).first().outerHeight() : 0;
    },
    getParentFooterHeight: function() {
        var n;
        return n = global.bu == "188BET" || global.bu == "SB1888" ? "#footer" : "#footer", 
        $(parent.document) ? $(parent.document).find(n).first().outerHeight() : 0;
    },
    getFooterUrl: function() {
        var n = pm.parentHost();
        return document.domain != "localhost" && n != null && n != "" ? n + "/" + global.lan + "/sports/getfooter" : "";
    },
    getBeforeBetSlipTabHeight: function() {
        var n = utility.getParentAnnBarHeight();
        return 118 + n;
    },
    scrollToTop: function() {
        if (self != window.top) try {
            parent.scrollTo(0, 0);
        } catch (n) {} else window.scrollTo(0, 0);
    },
    setInplayHeightAndFooter: function() {
        if (self != window.top) try {
            if (o.param.Tab == "Inplay" || o.param.IsInplay) {
                var n = parent.$("#container");
                n && n.is(":animated") && n.stop(!0, !0);
                parent.utility.setInplayPage(!0);
            } else parent.utility.setInplayPage(!1);
        } catch (t) {}
    },
    initAllIEScrollbarCss: function() {},
    setSBKFrameUrl: function(n) {
        window.location = n;
    },
    logoutCashSite: function() {
        self != window.top && parent.$("#btnLogout").click();
    }
}, HomeJS = {
    isP: !1,
    Promte: function() {},
    initLogin: function() {
        HomeJS.selectSiteLink();
        HomeJS.checkDisplayItems();
    },
    checkDisplayItems: function() {
        uv.showls && $("li.c-ls,#tvicon").removeClass("hidden");
    },
    selectSiteLink: function() {
        $("a#changeToACM").click(function() {
            window.top.location.href = location.protocol + "//" + window.top.location.hostname + "/" + global.lan + "/asia";
        });
    },
    timeOutId: null,
    ajaxLoading: function(n) {
        var t = $("#ajxldg");
        n ? (HomeJS.isP = !0, t.length <= 0 && ($("#preLogin").addClass("hidden"), $("#TitleForgotPass").addClass("hidden"), 
        $("<div id='ajxldg' class='ajxldg'/>").insertAfter("#preLogin")), HomeJS.timeOutId ? clearTimeout(HomeJS.timeOutId) : HomeJS.timeOutId = setTimeout("document.location.reload()", 12e4)) : ($("#preLogin").removeClass("hidden"), 
        t.remove(), HomeJS.isP = !1, $("#TitleForgotPass").removeClass("hidden"), HomeJS.timeOutId && clearTimeout(HomeJS.timeOutId));
    },
    removeQueryString: function(n) {
        return (n = n.toLowerCase(), n.indexOf("?competitionids") != -1) ? n.substr(0, n.indexOf("?competitionids")) : n;
    },
    logout_ACM: function() {
        $("#acm_iframe").html() != null && logoutACM();
    }
}, TimeZone = {
    userTZOffset: null,
    initTz: function(n) {
        var t = Number(n);
        n && !isNaN(t) && (TimeZone.userTZOffset = t);
        var u = new Date(), i = -u.getTimezoneOffset(), r = utility.cookie.read("timeZone");
        TimeZone.userTZOffset != null && TimeZone.userTZOffset != "" ? TimeZone.userTZOffset != r && utility.cookie.write("timeZone", TimeZone.userTZOffset) : i != r && utility.cookie.write("timeZone", i);
    }
};

$(function() {
    typeof console == "undefined" && (window.console = {
        log: function() {}
    });
    $.fx.speeds._default = 300;
    isIE8AndBelow && ($.fx.off = !0);
    document.oncontextmenu = function(n) {
        if ($.browser.safari || $.browser.opera) return !1;
        var t = n ? n.target : event.srcElement, i = t.nodeName;
        return i == "A" ? !1 : t.parentNode.nodeName == "A" ? !1 : void 0;
    };
    uv.ov == 3 ? $("#sbody").addClass("malayOdds") : uv.ov == 4 && $("#sbody").addClass("indoOdds");
});

window.Modernizr = function(n, t, i) {
    function k(n) {
        d.cssText = n;
    }
    function s(n, t) {
        return typeof n === t;
    }
    var r = {}, c = !0, u = t.documentElement, f = "modernizr", w = t.createElement(f), d = w.style, g, nt = {}.toString, l = " -webkit- -moz- -o- -ms- ".split(" "), e = {}, a = [], v = a.slice, o, b = function(n, i, r, e) {
        var l, a, c, v, o = t.createElement("div"), h = t.body, s = h || t.createElement("body");
        if (parseInt(r, 10)) while (r--) c = t.createElement("div"), c.id = e ? e[r] : f + (r + 1), 
        o.appendChild(c);
        return l = [ "&#173;", '<style id="s', f, '">', n, "</style>" ].join(""), o.id = f, 
        (h ? o : s).innerHTML += l, s.appendChild(o), h || (s.style.background = "", s.style.overflow = "hidden", 
        v = u.style.overflow, u.style.overflow = "hidden", u.appendChild(s)), a = i(o, n), 
        h ? o.parentNode.removeChild(o) : (s.parentNode.removeChild(s), u.style.overflow = v), 
        !!a;
    }, y = {}.hasOwnProperty, p, h;
    p = s(y, "undefined") || s(y.call, "undefined") ? function(n, t) {
        return t in n && s(n.constructor.prototype[t], "undefined");
    } : function(n, t) {
        return y.call(n, t);
    };
    Function.prototype.bind || (Function.prototype.bind = function(n) {
        var t = this, i, r;
        if (typeof t != "function") throw new TypeError();
        return i = v.call(arguments, 1), r = function() {
            var f, e, u;
            return this instanceof r ? (f = function() {}, f.prototype = t.prototype, e = new f(), 
            u = t.apply(e, i.concat(v.call(arguments))), Object(u) === u) ? u : e : t.apply(n, i.concat(v.call(arguments)));
        }, r;
    });
    e.touch = function() {
        var i;
        return "ontouchstart" in n || n.DocumentTouch && t instanceof DocumentTouch ? i = !0 : b([ "@media (", l.join("touch-enabled),("), f, ")", "{#modernizr{top:9px;position:absolute}}" ].join(""), function(n) {
            i = n.offsetTop === 9;
        }), i;
    };
    for (h in e) p(e, h) && (o = h.toLowerCase(), r[o] = e[h](), a.push((r[o] ? "" : "no-") + o));
    return r.addTest = function(n, t) {
        if (typeof n == "object") for (var f in n) p(n, f) && r.addTest(f, n[f]); else {
            if (n = n.toLowerCase(), r[n] !== i) return r;
            t = typeof t == "function" ? t() : t;
            typeof c != "undefined" && c && (u.className += " " + (t ? "" : "no-") + n);
            r[n] = t;
        }
        return r;
    }, k(""), w = g = null, r._version = "2.6.2", r._prefixes = l, r.testStyles = b, 
    u.className = u.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (c ? " js " + a.join(" ") : ""), 
    r;
}(this, this.document);

Control = {};

Control.Dialog = {
    _dialogID: "custom-dialog",
    type: {
        Information: "info",
        Alert: "alert",
        Question: "confirm",
        Prompt: "promte",
        Splash: "splash"
    },
    showMessage: function(n, t, i) {
        this._showDialog(this.type.Information, n, t, [ {
            Text: l.Dlg_OK,
            Callback: i
        } ]);
    },
    showParentMessage: function(n, t, i) {
        self == top ? Control.Dialog.showMessage(t) : parent.Control && parent.Control.Dialog ? parent.Control.Dialog.showAlert(n, t, i) : Control.Dialog.showMessage(t);
    },
    showAlert: function(n, t, i) {
        this._showDialog(this.type.Alert, n, t, [ {
            Text: l.Dlg_OK,
            Callback: i
        } ]);
    },
    showConfirm: function(n, t, i, r) {
        this._showDialog(this.type.Question, n, t, [ {
            Text: l.Dlg_Yes,
            Callback: i
        }, {
            Text: l.Dlg_NO,
            Callback: r
        } ]);
    },
    showParentConfirm: function(n, t) {
        self == top ? confirm(t) : parent.Control && parent.Control.Dialog ? parent.Control.Dialog.showConfirm(n, t, okFunction) : confirm(t);
    },
    showPromptMessage: function(n, t, i, r, u) {
        this._showDialog(this.type.Prompt, n, t, [ {
            Text: i[0],
            Callback: r
        }, {
            Text: i[1],
            Callback: u
        }, {
            Text: i[2],
            Callback: function() {}
        } ]);
    },
    showSplashMessage: function(n, t) {
        this._showDialog(this.type.Splash, n, t);
    },
    _render: function(n, t, i) {
        var r = [];
        return r.push('<div id="' + this._dialogID + '" title="' + t + '">'), r.push("<table id='_dlgct'><tr><td valign='top'>"), 
        r.push('<span class="' + n + ' ui-icon ui-icon-circle-check"></span>'), r.push("</td><td valign='middle'>"), 
        r.push(i), r.push("</td></tr></table>"), r.push("</div>"), $(r.join(""));
    },
    _render_Splash: function(n, t, i) {
        var r = [];
        return r.push('<div id="' + this._dialogID + '" title="' + t + "\" style='margin:5px 10px'>"), 
        r.push(i), r.push("</div>"), $(r.join(""));
    },
    _showDialog: function(n, t, i, r) {
        var h = function() {
            var n = ($(window).width() - u.outerWidth()) / 2, t = $(window).height() > u.outerHeight() ? ($(window).height() - u.outerHeight()) / 2 : 10;
            u.css({
                top: t,
                left: n
            });
        }, c = n && n.toString().length > 0 ? "icon-" + n : "icon-" + this.type.Information, l = {}, e, s;
        $.isArray(r) && $(r).each(function(n) {
            l[r[n].Text] = function() {
                r[n].Callback && $.isFunction(r[n].Callback) && r[n].Callback();
                $(this).dialog("close");
            };
        });
        var a = n == Control.Dialog.type.Splash ? this._render_Splash(c, t, i) : this._render(c, t, i), f = n == Control.Dialog.type.Prompt ? 785 : n == Control.Dialog.type.Splash ? 840 : 260, o = $(window).height();
        a.dialog({
            modal: !0,
            resizable: !1,
            width: f,
            minHeight: 66,
            maxHeight: o,
            buttons: l,
            draggable: !1,
            open: function() {
                $(window).resize(h);
            },
            close: function(n) {
                $(window).unbind("resize", h);
                $(n.target || n.srcElement).remove();
            }
        });
        var u = a.parent("div.ui-dialog"), v = o > u.outerHeight() ? (o - u.outerHeight()) / 2 : 10, y = $(window).width() > f ? ($(window).width() - f) / 2 : 10;
        u.addClass("c-dlg").css({
            width: f,
            top: n == Control.Dialog.type.Splash ? 10 : v,
            left: y
        });
        n == Control.Dialog.type.Splash && u.addClass("splash-dlg");
        (n == Control.Dialog.type.Alert || n == Control.Dialog.type.Splash) && $("a.ui-dialog-titlebar-close", u).remove();
        n == Control.Dialog.type.Prompt && (u.find("table#_dlgct tr td:eq(0)").remove(), 
        e = u.find("div.ui-dialog-buttonpane"), s = e.find("button:eq(2)"), e.append("<span class='btnright'>" + s.text() + "<input type='checkbox' id='ckbDontShow' /input></span>"), 
        e.find("button").css({
            "float": "left"
        }), s.remove(), $("#custom-dialog").css("margin", "3px 15px"));
    }
};

Control.Select = {
    List_Prefix: "list_",
    Text_Prefix: "text_",
    selectCache: [],
    init: function(n, t) {
        function v() {
            i.text.dropdown({
                contentId: i.list[0].id,
                show: "auto",
                hide: "auto",
                position: t.position,
                triggerEvent: "click",
                dropShadow: t.dropShadow == !0,
                onShowed: function() {
                    i.isAnimating = !1;
                    i.list.is(":visible") && ((typeof i._selectedIndex == "undefined" || i._selectedIndex < 0) && (i._selectedIndex = parseInt(i.attr("selectedIndex"))), 
                    i._selectedIndex >= 0 && i._allLinks.removeClass("focus").eq(i._selectedIndex).addClass("focus"), 
                    i.text.focus(), y(), s(i._selectedLink));
                }
            });
            i.text.keydown(function(n) {
                if (!$(this).attr("disabled")) {
                    var r = n.keyCode, t = i.list.is(":visible");
                    h(n, t);
                }
            });
            $.browser.msie ? (i.list.keydown(function(n) {
                var t = n.keyCode;
                h(n, !0);
            }), $("ul", i.list).bind("mousewheel", function(n) {
                n.stopPropagation();
            })) : $("ul", i.list).scroll(function() {
                window.setTimeout(function() {
                    i.text.focus();
                }, 1e3);
            });
        }
        function y() {
            i._allLinks.unbind("click").bind("click", function() {
                if (t.type != "link") {
                    var n = $(this);
                    return i._selectedIndex = i._allLinks.index(n), o(n), i.text.dropdown("hide"), !1;
                }
            }).hover(function() {
                var n = $(this);
                i._allLinks.eq(i._selectedIndex).removeClass("focus");
                n.addClass("focus");
                r = i._allLinks.index(n);
            }, function() {
                $(this).removeClass("focus");
            });
        }
        function p(n) {
            var t = n.attr("value"), r;
            t != i.val() && (r = n.html(), i.text.html(r), i.val(t).trigger("change"));
        }
        function f(n) {
            return Math.max(0, Math.min(n, i._allLinks ? i._allLinks.length - 1 : 0));
        }
        function o(n) {
            if (t.type == "link") {
                n.get(0).click();
                return;
            }
            r = i._selectedIndex;
            i._allLinks.removeClass();
            n.addClass("focus");
            i._selectedLink = n;
            p(n);
        }
        function u(n) {
            var n = f(n);
            n != i._selectedIndex && (i._selectedIndex = n, i._selectedLink = i._allLinks.eq(i._selectedIndex), 
            r = i._selectedIndex, o(i._selectedLink));
        }
        function e(n) {
            var n = f(n), t;
            n != r && (r = n, t = i._allLinks.eq(r), i._allLinks.removeClass("focus"), t.addClass("focus"), 
            s(t));
        }
        function w() {
            e(r - 1);
        }
        function b() {
            u(i._selectedIndex - 1);
        }
        function k() {
            e(r + 1);
        }
        function d() {
            u(i._selectedIndex + 1);
        }
        function s(n) {
            var t = $("ul", i.list), u = t.scrollTop(), r = (n.offset() ? n.offset().top : 0) + t.scrollTop() - t.offset().top;
            (r < u || r > u - 15 + t.height()) && t.scrollTop(-15 + r);
        }
        function h(n, t) {
            var f = n.keyCode, e;
            switch (f) {
              case KEY_UP:
                t ? w() : b();
                n.preventDefault();
                break;

              case KEY_DOWN:
                t ? k() : d();
                n.preventDefault();
                break;

              case KEY_ENTER:
                t && (u(r), i.text.dropdown("hide"));
                break;

              case $.ui.keyCode.TAB:
                t && i.text.dropdown("hide");
                break;

              default:
                g(f) && (e = tt(f), nt(e, t));
            }
        }
        function g(n) {
            return n >= KEY_A && n <= KEY_Z || n >= KEY_0 && n <= KEY_9 || n >= KEY_NUMPAD_0 && n <= KEY_NUMPAD_9;
        }
        function c(n, t) {
            return n.charAt(0) == "+" ? n.charAt(1).toUpperCase() == t : n.charAt(0).toUpperCase() == t;
        }
        function nt(n, t) {
            var o = r;
            o < 0 && (o = i._selectedIndex);
            o < 0 && (o = 0);
            var h = i._allLinks, s = -1, f = -1;
            i._allLinks.each(function(t) {
                var i = $(this).text();
                s < 0 && t <= o ? c(i, n) && (s = t) : f < 0 && t > o && c(i, n) && (f = t);
            });
            f < 0 && (f = s);
            f >= 0 && (t ? e(f) : u(f));
        }
        function tt(n) {
            return n >= KEY_NUMPAD_0 && n <= KEY_NUMPAD_9 ? (n - KEY_NUMPAD_0).toString() : String.fromCharCode(n);
        }
        var l, i, r, a;
        return t = $.extend({
            type: "single",
            position: "auto",
            disabled: !1,
            dropShadow: !0
        }, t), l = n.id, i = Control.Select._build.apply(n, [ t ]), i._allLinks = $("li > a", i.list), 
        i._selectedIndex = f(i._selectedIndex), i._selectedLink = i._allLinks.eq(i._selectedIndex), 
        r = i._selectedIndex, a = i._selectedLink, v(), i;
    },
    select: function(n, t) {
        var i = Control.Select.selectCache[n], r = i.text, u = i.list, f = $("a", u).each(function(n) {
            var u = $(this).attr("value");
            if (t(u)) {
                i._selectedIndex = n;
                i._selectedLink = $(this);
                r.html($(this).html());
                return;
            }
        });
    },
    _buildLinkItem: function() {
        return this.text ? '<li><a href="' + this.value + '"' + (this.selected ? ' class="focus">' : ">") + this.text + "</a></li>" : "";
    },
    _buildBreak: function() {
        return "<li class='break-line'>" + this.text + "</li>";
    },
    _buildItem: function() {
        return this.text ? "<li><a href='javascript:void(0)' value=\"" + this.value + '"' + (this.selected ? ' class="focus">' : ">") + this.text + "</a></li>" : "";
    },
    _buildHeader: function(n, t) {
        return $this = $(this), "<a id='" + Control.Select.Text_Prefix + n + "' href='javascript:void(0)' class='ddl-text'" + (t ? " disabled='disabled'" : "") + ">" + $this.text() + "</a><input name='" + ($(this).attr("name") ? $(this).attr("name") : n) + "' id='" + n + "' value=\"" + $this.val() + "\" type='hidden' />";
    },
    _build: function(n) {
        var c = "", e = [], u = this.id, l = 0, s, t, h, f, r, i, o;
        if (e.push("<div class='ddl-list' id='" + Control.Select.List_Prefix + u + "'><ul>"), 
        this.options.length == 0 ? c = Control.Select._buildHeader.apply(this, [ u, n.disabled ]) : (s = 0, 
        $("option", $(this)).each(function() {
            $(this).is(":selected") && (c = Control.Select._buildHeader.apply(this, [ u, n.disabled ]), 
            l = s);
            this.value == "ignore" ? (e.push(Control.Select._buildBreak.apply(this)), s--) : n.type == "link" ? e.push(Control.Select._buildLinkItem.apply(this)) : e.push(Control.Select._buildItem.apply(this));
            s++;
        })), e.push("</ul></div>"), $(this).after(c), $(document.body).append(e.join("")), 
        this.id = "fake_" + u, t = $("#" + u), t._selectedIndex = l, t.text = $("#" + Control.Select.Text_Prefix + u), 
        t.list = $("#" + Control.Select.List_Prefix + u), t.options = n, t._allLinks = $("li > a", t.list), 
        Control.Select.selectCache[u] = t, this.className && t.text.addClass(this.className), 
        $(this).attr("title") && t.text.attr("title", $(this).attr("title")), this.onfocus && t.text.bind("focus", this.onfocus), 
        this.onclick && t.text.bind("click", this.onclick), this.onchange && t.bind("change", this.onchange), 
        h = $.data(this, "events"), h) {
            for (f = [ "click", "focus" ], r = [], i = 0; i < f.length; i++) {
                r = h[f[i]];
                for (o in r) $.event.add(t.text[0], f[i], r[o], r[o].data);
            }
            for (f = [ "change" ], i = 0; i < f.length; i++) {
                r = h[f[i]];
                for (o in r) $.event.add(t.get(0), f[i], r[o], r[o].data);
            }
        }
        return $(this).remove(), t;
    },
    remove: function(n, t) {
        var i = Control.Select.selectCache[n], r;
        i != null && ((r = $("ul > li", i.list), t < 0 || t > r.length - 1) || (t == i._selectedIndex && (i.text.text(" - "), 
        i.val("").trigger("change"), i._selectedIndex = -1), r.eq(t).remove()));
    },
    removeAll: function(n) {
        var t = Control.Select.selectCache[n], i;
        t != null && (i = $("ul > li", t.list).remove(), t._selectedIndex >= 0 && (t.text.text(" - "), 
        t._selectedIndex = -1));
    },
    addItem: function(n, t, i) {
        Control.Select.addItems(n, [ t ], i);
    },
    addItems: function(n, t, i) {
        var r, o, u, e, f, s;
        if (t != null && t.length != 0 && (r = Control.Select.selectCache[n], r != null)) if (o = r.options, 
        u = "Control.Select._buildItem.apply(this)", o && o.type == "link" && (u = "Control.Select._buildLinkItem.apply(this)"), 
        e = $("ul > li", r.list), f = null, i) if (e.length == 0 && i == 0) f = $("ul", r.list), 
        $(t).each(function() {
            f.append(eval(u));
        }); else if (i < e.length && i >= 0) s = e.eq(i), $(t).each(function() {
            s.before(eval(u));
        }); else return; else f = $("ul", r.list), $(t).each(function() {
            f.append(eval(u));
        });
    },
    refresh: function(n) {
        var t = Control.Select.selectCache[n], i;
        t != null && (t.list = $("#" + Control.Select.List_Prefix + n), t._allLinks = $("li > a", t.list), 
        i = $("li > a.focus", t.list), i.length > 0 && (t.text = $("#" + Control.Select.Text_Prefix + n), 
        t.text.html(i.text()), t.val(i.val()), t.attr("selectedIndex", $("li > a", t.list).index(i))), 
        Control.Select.selectCache[n] = t);
    },
    disabled: function(n, t) {
        t ? $("#" + Control.Select.Text_Prefix + n).attr("disabled", "disabled").addClass("ddl-dsd") : $("#" + Control.Select.Text_Prefix + n).removeAttr("disabled").removeClass("ddl-dsd");
    }
};

Control.DDL = {
    buildItem: function(n, t, i) {
        var r = new StringBuilderEx(), u = i ? "data-sel" : "";
        return r.appendFormat('<li><a href="javascript:void(0)" data-val="{0}" {2}>{1}</a></li>', t, n, u), 
        r.toString();
    },
    buildItem2: function(n, t, i) {
        var r = new StringBuilderEx(), u = i ? "data-sel" : "";
        return r.appendFormat('<li><span data-val="{0}" {2}>{1}</span></li>', t, n, u), 
        r.toString();
    }
};

pm = {
    createNew: function() {
        var t = document.referrer.match(/(?:[(http|https)\:\/\/])*[^\/]*/)[0], n = function(n) {
            window.top.postMessage(n, t);
        }, r = function(n) {
            switch (n.topic) {
              case "setBannerHeight":
                f(n.data);
            }
        }, u = function() {
            var n = window.addEventListener ? "addEventListener" : "attachEvent", t = window[n], i = n == "attachEvent" ? "onmessage" : "message";
            t(i, function(n) {
                r(n.data);
            }, !1);
        }, f = function(n) {
            var i = n.t, t = n.h, r;
            console.log("target:" + i + ", height:" + t);
            switch (i) {
              case "t":
                Action.Homepage.setTopBannerHeight(t);
                break;

              case "b":
                r = $("#ftbanner");
                r.attr("height", t);
                ScrollerBar.initScrollbarStatus();
                break;

              case "r":
                t == 0 ? Action.RightPanel.Banner.hide() : Action.RightPanel.Banner.setBannerHeight(t);
            }
        }, e = function() {
            var r, u, t, f, e;
            try {
                r = i(window.location.search);
                self != window.top && (u = "", isIE9AndBelow ? (t = window.location.hash, t != "" ? (f = t.indexOf("?"), 
                r = f > -1 ? i(t.substr(f)) : "", e = f == -1 ? t.substr(1, t.length) : t.substr(1, f - 1), 
                u = e + r) : u = window.location.pathname + r) : u = window.location.pathname + r, 
                n({
                    topic: "setHistory",
                    data: {
                        title: "",
                        url: u
                    }
                }));
            } catch (o) {
                console.log(o);
            }
        }, i = function(n) {
            var e, r, u, f, t = "", i;
            if (n.length > 0) for (u = n.slice(1).split("&"), i = 0; i < u.length; i++) r = u[i].split("="), 
            f = r[0].toLowerCase(), /(theme|q|country|currency|tzoff|PartnerId|IsSingleWallet|mc|allowracing|reg)/i.test(f) || (e = t === "" ? "?" : "&", 
            t = t + e + f + "=" + r[1]);
            return t;
        }, o = function(t, i) {
            n({
                topic: "showDialog",
                data: {
                    title: t,
                    message: i
                }
            });
        }, s = function() {
            n({
                topic: "updateBalance",
                data: null
            });
        }, h = function(t) {
            document.domain != "localhost" && n({
                topic: "resize",
                data: {
                    height: t,
                    windowName: window.name
                }
            });
        }, c = function() {
            document.domain != "localhost" && n({
                topic: "resetBetSlip",
                data: {}
            });
        }, l = function(t, i) {
            document.domain != "localhost" && n({
                topic: "updateWinSize",
                data: {
                    width: t,
                    height: i
                }
            });
        };
        return {
            init: u,
            parentHost: function() {
                return self != top ? t : null;
            },
            parentOrLocalHost: function() {
                var n = this.parentHost();
                return n ? n : location.origin;
            },
            tellCashWhereSBKIs: e,
            showParentAlert: o,
            refreshBalance: s,
            resizeFrame: h,
            resetBetSlip: c,
            resizeWindow: l
        };
    }
}.createNew();