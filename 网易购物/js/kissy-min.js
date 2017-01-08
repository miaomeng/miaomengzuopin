/*
Copyright 2013, KISSY UI Library v1.30
MIT Licensed
build time: Jun 21 17:38
*/
var KISSY = function(a) {
	var b = this,
		i, k = 0;
	i = {
		__BUILD_TIME: "20130621173819",
		Env: {
			host: b,
			nodejs: "function" == typeof require && "object" == typeof exports
		},
		Config: {
			debug: "",
			fns: {}
		},
		version: "1.30",
		config: function(b, j) {
			var l, e, f = this,
				d, h = i.Config,
				c = h.fns;
			i.isObject(b) ? i.each(b, function(m, a) {
				(d = c[a]) ? d.call(f, m): h[a] = m
			}) : (l = c[b], j === a ? e = l ? l.call(f) : h[b] : l ? e = l.call(f, j) : h[b] = j);
			return e
		},
		log: function(g, j, l) {
			if(i.Config.debug && (l && (g = l + ": " + g), b.console !== a && console.log)) console[j && console[j] ? j : "log"](g)
		},
		error: function(a) {
			if(i.Config.debug) throw a instanceof Error ? a : Error(a);
		},
		guid: function(a) {
			return(a || "") + k++
		}
	};
	i.Env.nodejs && (i.KISSY = i, module.exports = i);
	return i
}();
(function(a, b) {
	function i() {}

	function k(c, a) {
		var b;
		d ? b = d(c) : (i.prototype = c, b = new i);
		b.constructor = a;
		return b
	}

	function g(c, d, h, e, g, i) {
		if(!d || !c) return c;
		h === b && (h = f);
		var k = 0,
			s, u, v;
		d[l] = c;
		i.push(d);
		if(e) {
			v = e.length;
			for(k = 0; k < v; k++) s = e[k], s in d && j(s, c, d, h, e, g, i)
		} else {
			u = a.keys(d);
			v = u.length;
			for(k = 0; k < v; k++) s = u[k], s != l && j(s, c, d, h, e, g, i)
		}
		return c
	}

	function j(c, d, h, e, j, i, k) {
		if(e || !(c in d) || i) {
			var s = d[c],
				h = h[c];
			if(s === h) s === b && (d[c] = s);
			else if(i && h && (a.isArray(h) || a.isPlainObject(h))) h[l] ? d[c] = h[l] : (i = s &&
				(a.isArray(s) || a.isPlainObject(s)) ? s : a.isArray(h) ? [] : {}, d[c] = i, g(i, h, e, j, f, k));
			else if(h !== b && (e || !(c in d))) d[c] = h
		}
	}
	var l = "__MIX_CIRCULAR",
		e = this,
		f = !0,
		d = Object.create,
		h = !{
			toString: 1
		}.propertyIsEnumerable("toString"),
		c = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toString,toLocaleString,valueOf".split(",");
	(function(c, a) {
		for(var d in a) c[d] = a[d]
	})(a, {
		stamp: function(c, d, h) {
			if(!c) return c;
			var h = h || "__~ks_stamped",
				f = c[h];
			if(!f && !d) try {
				f = c[h] = a.guid(h)
			} catch(e) {
				f = b
			}
			return f
		},
		keys: function(a) {
			var d = [],
				b, f;
			for(b in a) d.push(b);
			if(h)
				for(f = c.length - 1; 0 <= f; f--) b = c[f], a.hasOwnProperty(b) && d.push(b);
			return d
		},
		mix: function(c, a, d, b, h) {
			"object" === typeof d && (b = d.whitelist, h = d.deep, d = d.overwrite);
			var f = [],
				e = 0;
			for(g(c, a, d, b, h, f); a = f[e++];) delete a[l];
			return c
		},
		merge: function(c) {
			var c = a.makeArray(arguments),
				d = {},
				b, h = c.length;
			for(b = 0; b < h; b++) a.mix(d, c[b]);
			return d
		},
		augment: function(c, d) {
			var h = a.makeArray(arguments),
				f = h.length - 2,
				e = 1,
				j = h[f],
				g = h[f + 1];
			a.isArray(g) || (j = g, g = b, f++);
			a.isBoolean(j) || (j = b, f++);
			for(; e <
				f; e++) a.mix(c.prototype, h[e].prototype || h[e], j, g);
			return c
		},
		extend: function(c, d, b, h) {
			if(!d || !c) return c;
			var f = d.prototype,
				e;
			e = k(f, c);
			c.prototype = a.mix(e, c.prototype);
			c.superclass = k(f, d);
			b && a.mix(e, b);
			h && a.mix(c, h);
			return c
		},
		namespace: function() {
			var c = a.makeArray(arguments),
				d = c.length,
				b = null,
				h, j, g, i = c[d - 1] === f && d--;
			for(h = 0; h < d; h++) {
				g = ("" + c[h]).split(".");
				b = i ? e : this;
				for(j = e[g[0]] === b ? 1 : 0; j < g.length; ++j) b = b[g[j]] = b[g[j]] || {}
			}
			return b
		}
	})
})(KISSY);
(function(a, b) {
	var i = Array.prototype,
		k = i.indexOf,
		g = i.lastIndexOf,
		j = i.filter,
		l = i.every,
		e = i.some,
		f = i.map;
	a.mix(a, {
		each: function(d, h, c) {
			if(d) {
				var m, f, e = 0;
				m = d && d.length;
				f = m === b || "function" === a.type(d);
				c = c || null;
				if(f)
					for(f = a.keys(d); e < f.length && !(m = f[e], !1 === h.call(c, d[m], m, d)); e++);
				else
					for(f = d[0]; e < m && !1 !== h.call(c, f, e, d); f = d[++e]);
			}
			return d
		},
		indexOf: k ? function(d, a) {
			return k.call(a, d)
		} : function(d, a) {
			for(var c = 0, b = a.length; c < b; ++c)
				if(a[c] === d) return c;
			return -1
		},
		lastIndexOf: g ? function(d, a) {
			return g.call(a,
				d)
		} : function(d, a) {
			for(var c = a.length - 1; 0 <= c && a[c] !== d; c--);
			return c
		},
		unique: function(d, b) {
			var c = d.slice();
			b && c.reverse();
			for(var m = 0, f, e; m < c.length;) {
				for(e = c[m];
					(f = a.lastIndexOf(e, c)) !== m;) c.splice(f, 1);
				m += 1
			}
			b && c.reverse();
			return c
		},
		inArray: function(d, b) {
			return -1 < a.indexOf(d, b)
		},
		filter: j ? function(d, a, c) {
			return j.call(d, a, c || this)
		} : function(d, b, c) {
			var m = [];
			a.each(d, function(d, a, f) {
				b.call(c || this, d, a, f) && m.push(d)
			});
			return m
		},
		map: f ? function(d, a, c) {
			return f.call(d, a, c || this)
		} : function(d, a, c) {
			for(var b =
					d.length, f = Array(b), e = 0; e < b; e++) {
				var j = "string" == typeof d ? d.charAt(e) : d[e];
				if(j || e in d) f[e] = a.call(c || this, j, e, d)
			}
			return f
		},
		reduce: function(a, f, c) {
			var m = a.length;
			if("function" !== typeof f) throw new TypeError("callback is not function!");
			if(0 === m && 2 == arguments.length) throw new TypeError("arguments invalid");
			var e = 0,
				j;
			if(3 <= arguments.length) j = arguments[2];
			else {
				do {
					if(e in a) {
						j = a[e++];
						break
					}
					e += 1;
					if(e >= m) throw new TypeError;
				} while (1)
			}
			for(; e < m;) e in a && (j = f.call(b, j, a[e], e, a)), e++;
			return j
		},
		every: l ? function(a,
			b, c) {
			return l.call(a, b, c || this)
		} : function(a, b, c) {
			for(var f = a && a.length || 0, e = 0; e < f; e++)
				if(e in a && !b.call(c, a[e], e, a)) return !1;
			return !0
		},
		some: e ? function(a, b, c) {
			return e.call(a, b, c || this)
		} : function(a, b, c) {
			for(var f = a && a.length || 0, e = 0; e < f; e++)
				if(e in a && b.call(c, a[e], e, a)) return !0;
			return !1
		},
		makeArray: function(d) {
			if(null == d) return [];
			if(a.isArray(d)) return d;
			if("number" !== typeof d.length || d.alert || "string" == typeof d || a.isFunction(d)) return [d];
			for(var b = [], c = 0, f = d.length; c < f; c++) b[c] = d[c];
			return b
		}
	})
})(KISSY);
(function(a, b) {
	function i(c) {
		var a = typeof c;
		return null == c || "object" !== a && "function" !== a
	}

	function k() {
		if(f) return f;
		var c = j;
		a.each(l, function(a) {
			c += a + "|"
		});
		c = c.slice(0, -1);
		return f = RegExp(c, "g")
	}

	function g() {
		if(d) return d;
		var c = j;
		a.each(e, function(a) {
			c += a + "|"
		});
		c += "&#(\\d{1,5});";
		return d = RegExp(c, "g")
	}
	var j = "",
		l = {
			"&amp;": "&",
			"&gt;": ">",
			"&lt;": "<",
			"&#x60;": "`",
			"&#x2F;": "/",
			"&quot;": '"',
			"&#x27;": "'"
		},
		e = {},
		f, d, h = /[\-#$\^*()+\[\]{}|\\,.?\s]/g;
	(function() {
		for(var c in l) e[l[c]] = c
	})();
	a.mix(a, {
		urlEncode: function(c) {
			return encodeURIComponent("" +
				c)
		},
		urlDecode: function(c) {
			return decodeURIComponent(c.replace(/\+/g, " "))
		},
		fromUnicode: function(c) {
			return c.replace(/\\u([a-f\d]{4})/ig, function(c, a) {
				return String.fromCharCode(parseInt(a, 16))
			})
		},
		escapeHTML: function(c) {
			return(c + "").replace(k(), function(c) {
				return e[c]
			})
		},
		escapeRegExp: function(c) {
			return c.replace(h, "\\$&")
		},
		unEscapeHTML: function(c) {
			return c.replace(g(), function(c, a) {
				return l[c] || String.fromCharCode(+a)
			})
		},
		param: function(c, d, f, e) {
			if(!a.isPlainObject(c)) return j;
			d = d || "&";
			f = f || "=";
			a.isUndefined(e) &&
				(e = !0);
			var h = [],
				g, l, k, s, u, v = a.urlEncode;
			for(g in c)
				if(u = c[g], g = v(g), i(u)) h.push(g), u !== b && h.push(f, v(u + j)), h.push(d);
				else if(a.isArray(u) && u.length) {
				l = 0;
				for(s = u.length; l < s; ++l) k = u[l], i(k) && (h.push(g, e ? v("[]") : j), k !== b && h.push(f, v(k + j)), h.push(d))
			}
			h.pop();
			return h.join(j)
		},
		unparam: function(c, d, f) {
			if("string" != typeof c || !(c = a.trim(c))) return {};
			for(var f = f || "=", e = {}, h, j = a.urlDecode, c = c.split(d || "&"), g = 0, i = c.length; g < i; ++g) {
				h = c[g].indexOf(f);
				if(-1 == h) d = j(c[g]), h = b;
				else {
					d = j(c[g].substring(0, h));
					h = c[g].substring(h +
						1);
					try {
						h = j(h)
					} catch(l) {}
					a.endsWith(d, "[]") && (d = d.substring(0, d.length - 2))
				}
				d in e ? a.isArray(e[d]) ? e[d].push(h) : e[d] = [e[d], h] : e[d] = h
			}
			return e
		}
	})
})(KISSY);
(function(a) {
	function b(a, b, g) {
		var j = [].slice,
			l = j.call(arguments, 3),
			e = function() {},
			f = function() {
				var d = j.call(arguments);
				return b.apply(this instanceof e ? this : g, a ? d.concat(l) : l.concat(d))
			};
		e.prototype = b.prototype;
		f.prototype = new e;
		return f
	}
	a.mix(a, {
		noop: function() {},
		bind: b(0, b, null, 0),
		rbind: b(0, b, null, 1),
		later: function(b, k, g, j, l) {
			var k = k || 0,
				e = b,
				f = a.makeArray(l),
				d;
			"string" == typeof b && (e = j[b]);
			b = function() {
				e.apply(j, f)
			};
			d = g ? setInterval(b, k) : setTimeout(b, k);
			return {
				id: d,
				interval: g,
				cancel: function() {
					this.interval ?
						clearInterval(d) : clearTimeout(d)
				}
			}
		},
		throttle: function(b, k, g) {
			k = k || 150;
			if(-1 === k) return function() {
				b.apply(g || this, arguments)
			};
			var j = a.now();
			return function() {
				var l = a.now();
				l - j > k && (j = l, b.apply(g || this, arguments))
			}
		},
		buffer: function(b, k, g) {
			function j() {
				j.stop();
				l = a.later(b, k, 0, g || this, arguments)
			}
			k = k || 150;
			if(-1 === k) return function() {
				b.apply(g || this, arguments)
			};
			var l = null;
			j.stop = function() {
				l && (l.cancel(), l = 0)
			};
			return j
		}
	})
})(KISSY);
(function(a, b) {
	function i(b, d, e) {
		var c = b,
			m, n, g, o;
		if(!b) return c;
		if(b[l]) return e[b[l]].destination;
		if("object" === typeof b) {
			o = b.constructor;
			if(a.inArray(o, [Boolean, String, Number, Date, RegExp])) c = new o(b.valueOf());
			else if(m = a.isArray(b)) c = d ? a.filter(b, d) : b.concat();
			else if(n = a.isPlainObject(b)) c = {};
			b[l] = o = a.guid();
			e[o] = {
				destination: c,
				input: b
			}
		}
		if(m)
			for(b = 0; b < c.length; b++) c[b] = i(c[b], d, e);
		else if(n)
			for(g in b)
				if(g !== l && (!d || d.call(b, b[g], g, b) !== j)) c[g] = i(b[g], d, e);
		return c
	}

	function k(f, d, h, c) {
		if(f[e] ===
			d && d[e] === f) return g;
		f[e] = d;
		d[e] = f;
		var m = function(c, a) {
				return null !== c && c !== b && c[a] !== b
			},
			n;
		for(n in d) !m(f, n) && m(d, n) && h.push("expected has key '" + n + "', but missing from actual.");
		for(n in f) !m(d, n) && m(f, n) && h.push("expected missing key '" + n + "', but present in actual.");
		for(n in d) n != e && (a.equals(f[n], d[n], h, c) || c.push("'" + n + "' was '" + (d[n] ? d[n].toString() : d[n]) + "' in expected, but was '" + (f[n] ? f[n].toString() : f[n]) + "' in actual."));
		a.isArray(f) && a.isArray(d) && f.length != d.length && c.push("arrays were not the same length");
		delete f[e];
		delete d[e];
		return 0 === h.length && 0 === c.length
	}
	var g = !0,
		j = !1,
		l = "__~ks_cloned",
		e = "__~ks_compared";
	a.mix(a, {
		equals: function(e, d, h, c) {
			h = h || [];
			c = c || [];
			return e === d ? g : e === b || null === e || d === b || null === d ? null == e && null == d : e instanceof Date && d instanceof Date ? e.getTime() == d.getTime() : "string" == typeof e && "string" == typeof d || a.isNumber(e) && a.isNumber(d) ? e == d : "object" === typeof e && "object" === typeof d ? k(e, d, h, c) : e === d
		},
		clone: function(e, d) {
			var h = {},
				c = i(e, d, h);
			a.each(h, function(c) {
				c = c.input;
				if(c[l]) try {
					delete c[l]
				} catch(a) {
					c[l] =
						b
				}
			});
			h = null;
			return c
		},
		now: Date.now || function() {
			return +new Date
		}
	})
})(KISSY);
(function(a, b) {
	var i = /^[\s\xa0]+|[\s\xa0]+$/g,
		k = String.prototype.trim,
		g = /\\?\{([^{}]+)\}/g;
	a.mix(a, {
		trim: k ? function(a) {
			return null == a ? "" : k.call(a)
		} : function(a) {
			return null == a ? "" : (a + "").replace(i, "")
		},
		substitute: function(a, i, e) {
			return "string" != typeof a || !i ? a : a.replace(e || g, function(a, d) {
				return "\\" === a.charAt(0) ? a.slice(1) : i[d] === b ? "" : i[d]
			})
		},
		ucfirst: function(a) {
			a += "";
			return a.charAt(0).toUpperCase() + a.substring(1)
		},
		startsWith: function(a, b) {
			return 0 === a.lastIndexOf(b, 0)
		},
		endsWith: function(a, b) {
			var e =
				a.length - b.length;
			return 0 <= e && a.indexOf(b, e) == e
		}
	})
})(KISSY);
(function(a, b) {
	var i = {},
		k = Object.prototype.toString;
	a.mix(a, {
		isBoolean: 0,
		isNumber: 0,
		isString: 0,
		isFunction: 0,
		isArray: 0,
		isDate: 0,
		isRegExp: 0,
		isObject: 0,
		type: function(a) {
			return null == a ? "" + a : i[k.call(a)] || "object"
		},
		isNull: function(a) {
			return null === a
		},
		isUndefined: function(a) {
			return a === b
		},
		isEmptyObject: function(a) {
			for(var j in a)
				if(j !== b) return !1;
			return !0
		},
		isPlainObject: function(g) {
			if(!g || "object" !== a.type(g) || g.nodeType || g.window == g) return !1;
			try {
				if(g.constructor && !Object.prototype.hasOwnProperty.call(g,
						"constructor") && !Object.prototype.hasOwnProperty.call(g.constructor.prototype, "isPrototypeOf")) return !1
			} catch(j) {
				return !1
			}
			for(var i in g);
			return i === b || Object.prototype.hasOwnProperty.call(g, i)
		}
	});
	a.each("Boolean,Number,String,Function,Array,Date,RegExp,Object".split(","), function(b, j) {
		i["[object " + b + "]"] = j = b.toLowerCase();
		a["is" + b] = function(b) {
			return a.type(b) == j
		}
	})
})(KISSY);
(function(a, b) {
	function i(a, d, e) {
		if(a instanceof l) return e(a[h]);
		var f = a[h];
		if(a = a[c]) a.push([d, e]);
		else if(g(f)) i(f, d, e);
		else return d && d(f);
		return b
	}

	function k(a) {
		if(!(this instanceof k)) return new k(a);
		this.promise = a || new j
	}

	function g(a) {
		return a && a instanceof j
	}

	function j(a) {
		this[h] = a;
		a === b && (this[c] = [])
	}

	function l(a) {
		if(a instanceof l) return a;
		j.apply(this, arguments);
		return b
	}

	function e(a, c, b) {
		function d(a) {
			try {
				return c ? c(a) : a
			} catch(b) {
				return new l(b)
			}
		}

		function e(a) {
			try {
				return b ? b(a) : new l(a)
			} catch(c) {
				return new l(c)
			}
		}

		function h(a) {
			g || (g = 1, f.resolve(d(a)))
		}
		var f = new k,
			g = 0;
		a instanceof j ? i(a, h, function(a) {
			g || (g = 1, f.resolve(e(a)))
		}) : h(a);
		return f.promise
	}

	function f(a) {
		return !d(a) && g(a) && a[c] === b && (!g(a[h]) || f(a[h]))
	}

	function d(a) {
		return g(a) && a[c] === b && a[h] instanceof l
	}
	var h = "__promise_value",
		c = "__promise_pendings";
	k.prototype = {
		constructor: k,
		resolve: function(d) {
			var e = this.promise,
				f;
			if(!(f = e[c])) return b;
			e[h] = d;
			f = [].concat(f);
			e[c] = b;
			a.each(f, function(a) {
				i(e, a[0], a[1])
			});
			return d
		},
		reject: function(a) {
			return this.resolve(new l(a))
		}
	};
	j.prototype = {
		constructor: j,
		then: function(a, c) {
			return e(this, a, c)
		},
		fail: function(a) {
			return e(this, 0, a)
		},
		fin: function(a) {
			return e(this, function(c) {
				return a(c, !0)
			}, function(c) {
				return a(c, !1)
			})
		},
		isResolved: function() {
			return f(this)
		},
		isRejected: function() {
			return d(this)
		}
	};
	a.extend(l, j);
	KISSY.Defer = k;
	KISSY.Promise = j;
	j.Defer = k;
	a.mix(j, {
		when: e,
		isPromise: g,
		isResolved: f,
		isRejected: d,
		all: function(a) {
			var c = a.length;
			if(!c) return a;
			for(var b = k(), d = 0; d < a.length; d++)(function(d, h) {
				e(d, function(d) {
					a[h] = d;
					0 === --c &&
						b.resolve(a)
				}, function(a) {
					b.reject(a)
				})
			})(a[d], d);
			return b.promise
		}
	})
})(KISSY);
(function(a) {
	function b(a, b) {
		for(var i = 0, e = a.length - 1, f = [], d; 0 <= e; e--) d = a[e], "." != d && (".." === d ? i++ : i ? i-- : f[f.length] = d);
		if(b)
			for(; i--; i) f[f.length] = "..";
		return f = f.reverse()
	}
	var i = /^(\/?)([\s\S]+\/(?!$)|\/)?((?:\.{1,2}$|[\s\S]+?)?(\.[^.\/]*)?)$/,
		k = {
			resolve: function() {
				var g = "",
					j, i = arguments,
					e, f = 0;
				for(j = i.length - 1; 0 <= j && !f; j--) e = i[j], "string" == typeof e && e && (g = e + "/" + g, f = "/" == e.charAt(0));
				g = b(a.filter(g.split("/"), function(a) {
					return !!a
				}), !f).join("/");
				return(f ? "/" : "") + g || "."
			},
			normalize: function(g) {
				var j =
					"/" == g.charAt(0),
					i = "/" == g.slice(-1),
					g = b(a.filter(g.split("/"), function(a) {
						return !!a
					}), !j).join("/");
				!g && !j && (g = ".");
				g && i && (g += "/");
				return(j ? "/" : "") + g
			},
			join: function() {
				var b = a.makeArray(arguments);
				return k.normalize(a.filter(b, function(a) {
					return a && "string" == typeof a
				}).join("/"))
			},
			relative: function(b, j) {
				var b = k.normalize(b),
					j = k.normalize(j),
					i = a.filter(b.split("/"), function(a) {
						return !!a
					}),
					e = [],
					f, d, h = a.filter(j.split("/"), function(a) {
						return !!a
					});
				d = Math.min(i.length, h.length);
				for(f = 0; f < d && i[f] == h[f]; f++);
				for(d = f; f < i.length;) e.push(".."), f++;
				e = e.concat(h.slice(d));
				return e = e.join("/")
			},
			basename: function(a, b) {
				var k;
				k = (a.match(i) || [])[3] || "";
				b && k && k.slice(-1 * b.length) == b && (k = k.slice(0, -1 * b.length));
				return k
			},
			dirname: function(a) {
				var b = a.match(i) || [],
					a = b[1] || "",
					b = b[2] || "";
				if(!a && !b) return ".";
				b && (b = b.substring(0, b.length - 1));
				return a + b
			},
			extname: function(a) {
				return(a.match(i) || [])[4] || ""
			}
		};
	a.Path = k
})(KISSY);
(function(a, b) {
	function i(c) {
		c._queryMap || (c._queryMap = a.unparam(c._query))
	}

	function k(a) {
		this._query = a || ""
	}

	function g(a, c) {
		return encodeURI(a).replace(c, function(a) {
			a = a.charCodeAt(0).toString(16);
			return "%" + (1 == a.length ? "0" + a : a)
		})
	}

	function j(c) {
		if(c instanceof j) return c.clone();
		var b = this;
		a.mix(b, {
			scheme: "",
			userInfo: "",
			hostname: "",
			port: "",
			path: "",
			query: "",
			fragment: ""
		});
		c = j.getComponents(c);
		a.each(c, function(c, d) {
			c = c || "";
			if("query" == d) b.query = new k(c);
			else {
				try {
					c = a.urlDecode(c)
				} catch(e) {}
				b[d] = c
			}
		});
		return b
	}
	var l = /[#\/\?@]/g,
		e = /[#\?]/g,
		f = /[#@]/g,
		d = /#/g,
		h = RegExp("^(?:([\\w\\d+.-]+):)?(?://(?:([^/?#@]*)@)?([\\w\\d\\-\\u0100-\\uffff.+%]*|\\[[^\\]]+\\])(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),
		c = a.Path,
		m = {
			scheme: 1,
			userInfo: 2,
			hostname: 3,
			port: 4,
			path: 5,
			query: 6,
			fragment: 7
		};
	k.prototype = {
		constructor: k,
		clone: function() {
			return new k(this.toString())
		},
		reset: function(a) {
			this._query = a || "";
			this._queryMap = null;
			return this
		},
		count: function() {
			var c, b = 0,
				d;
			i(this);
			c = this._queryMap;
			for(d in c) a.isArray(c[d]) ?
				b += c[d].length : b++;
			return b
		},
		has: function(c) {
			var b;
			i(this);
			b = this._queryMap;
			return c ? c in b : !a.isEmptyObject(b)
		},
		get: function(a) {
			var c;
			i(this);
			c = this._queryMap;
			return a ? c[a] : c
		},
		keys: function() {
			i(this);
			return a.keys(this._queryMap)
		},
		set: function(c, b) {
			var d;
			i(this);
			d = this._queryMap;
			"string" == typeof c ? this._queryMap[c] = b : (c instanceof k && (c = c.get()), a.each(c, function(a, c) {
				d[c] = a
			}));
			return this
		},
		remove: function(a) {
			i(this);
			a ? delete this._queryMap[a] : this._queryMap = {};
			return this
		},
		add: function(c, d) {
			var e =
				this,
				h, f;
			a.isObject(c) ? (c instanceof k && (c = c.get()), a.each(c, function(a, c) {
				e.add(c, a)
			})) : (i(e), h = e._queryMap, f = h[c], f = f === b ? d : [].concat(f).concat(d), h[c] = f);
			return e
		},
		toString: function(c) {
			i(this);
			return a.param(this._queryMap, b, b, c)
		}
	};
	j.prototype = {
		constructor: j,
		clone: function() {
			var c = new j,
				b = this;
			a.each(m, function(a, d) {
				c[d] = b[d]
			});
			c.query = c.query.clone();
			return c
		},
		resolve: function(b) {
			"string" == typeof b && (b = new j(b));
			var d = 0,
				e, h = this.clone();
			a.each("scheme,userInfo,hostname,port,path,query,fragment".split(","),
				function(f) {
					if(f == "path")
						if(d) h[f] = b[f];
						else {
							if(f = b.path) {
								d = 1;
								if(!a.startsWith(f, "/"))
									if(h.hostname && !h.path) f = "/" + f;
									else if(h.path) {
									e = h.path.lastIndexOf("/");
									e != -1 && (f = h.path.slice(0, e + 1) + f)
								}
								h.path = c.normalize(f)
							}
						}
					else if(f == "query") {
						if(d || b.query.toString()) {
							h.query = b.query.clone();
							d = 1
						}
					} else if(d || b[f]) {
						h[f] = b[f];
						d = 1
					}
				});
			return h
		},
		getScheme: function() {
			return this.scheme
		},
		setScheme: function(a) {
			this.scheme = a;
			return this
		},
		getHostname: function() {
			return this.hostname
		},
		setHostname: function(a) {
			this.hostname =
				a;
			return this
		},
		setUserInfo: function(a) {
			this.userInfo = a;
			return this
		},
		getUserInfo: function() {
			return this.userInfo
		},
		setPort: function(a) {
			this.port = a;
			return this
		},
		getPort: function() {
			return this.port
		},
		setPath: function(a) {
			this.path = a;
			return this
		},
		getPath: function() {
			return this.path
		},
		setQuery: function(c) {
			"string" == typeof c && (a.startsWith(c, "?") && (c = c.slice(1)), c = new k(g(c, f)));
			this.query = c;
			return this
		},
		getQuery: function() {
			return this.query
		},
		getFragment: function() {
			return this.fragment
		},
		setFragment: function(c) {
			a.startsWith(c,
				"#") && (c = c.slice(1));
			this.fragment = c;
			return this
		},
		isSameOriginAs: function(a) {
			return this.hostname.toLowerCase() == a.hostname.toLowerCase() && this.scheme.toLowerCase() == a.scheme.toLowerCase() && this.port.toLowerCase() == a.port.toLowerCase()
		},
		toString: function(b) {
			var h = [],
				f, m;
			if(f = this.scheme) h.push(g(f, l)), h.push(":");
			if(f = this.hostname) {
				h.push("//");
				if(m = this.userInfo) h.push(g(m, l)), h.push("@");
				h.push(encodeURIComponent(f));
				if(m = this.port) h.push(":"), h.push(m)
			}
			if(m = this.path) f && !a.startsWith(m, "/") &&
				(m = "/" + m), m = c.normalize(m), h.push(g(m, e));
			if(b = this.query.toString.call(this.query, b)) h.push("?"), h.push(b);
			if(b = this.fragment) h.push("#"), h.push(g(b, d));
			return h.join("")
		}
	};
	j.Query = k;
	j.getComponents = function(c) {
		var b = (c || "").match(h) || [],
			d = {};
		a.each(m, function(a, c) {
			d[c] = b[a]
		});
		return d
	};
	a.Uri = j
})(KISSY);
(function(a, b) {
	function i(a) {
		var c;
		return(c = a.match(/MSIE\s([^;]*)/)) && c[1] ? n(c[1]) : 0
	}
	var k = a.Env.host,
		g = k.document,
		k = (k = k.navigator) && k.userAgent || "",
		j, l = "",
		e = "",
		f, d = [6, 9],
		h = g && g.createElement("div"),
		c = [],
		m = KISSY.UA = {
			webkit: b,
			trident: b,
			gecko: b,
			presto: b,
			chrome: b,
			safari: b,
			firefox: b,
			ie: b,
			opera: b,
			mobile: b,
			core: b,
			shell: b,
			phantomjs: b,
			os: b,
			ipad: b,
			iphone: b,
			ipod: b,
			ios: b,
			android: b,
			nodejs: b
		},
		n = function(a) {
			var c = 0;
			return parseFloat(a.replace(/\./g, function() {
				return 0 === c++ ? "." : ""
			}))
		};
	h && (h.innerHTML = "<\!--[if IE {{version}}]><s></s><![endif]--\>".replace("{{version}}",
		""), c = h.getElementsByTagName("s"));
	if(0 < c.length) {
		e = "ie";
		m[l = "trident"] = 0.1;
		if((f = k.match(/Trident\/([\d.]*)/)) && f[1]) m[l] = n(f[1]);
		f = d[0];
		for(d = d[1]; f <= d; f++)
			if(h.innerHTML = "<\!--[if IE {{version}}]><s></s><![endif]--\>".replace("{{version}}", f), 0 < c.length) {
				m[e] = f;
				break
			}
		var p;
		if(!m.ie && (p = i(k))) m[e = "ie"] = p
	} else if((f = k.match(/AppleWebKit\/([\d.]*)/)) && f[1]) {
		m[l = "webkit"] = n(f[1]);
		if((f = k.match(/Chrome\/([\d.]*)/)) && f[1]) m[e = "chrome"] = n(f[1]);
		else if((f = k.match(/\/([\d.]*) Safari/)) && f[1]) m[e = "safari"] =
			n(f[1]);
		if(/ Mobile\//.test(k) && k.match(/iPad|iPod|iPhone/)) {
			m.mobile = "apple";
			if((f = k.match(/OS ([^\s]*)/)) && f[1]) m.ios = n(f[1].replace("_", "."));
			j = "ios";
			if((f = k.match(/iPad|iPod|iPhone/)) && f[0]) m[f[0].toLowerCase()] = m.ios
		} else if(/ Android/.test(k)) {
			if(/Mobile/.test(k) && (j = m.mobile = "android"), (f = k.match(/Android ([^\s]*);/)) && f[1]) m.android = n(f[1])
		} else if(f = k.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/)) m.mobile = f[0].toLowerCase();
		if((f = k.match(/PhantomJS\/([^\s]*)/)) && f[1]) m.phantomjs = n(f[1])
	} else if((f =
			k.match(/Presto\/([\d.]*)/)) && f[1]) {
		if(m[l = "presto"] = n(f[1]), (f = k.match(/Opera\/([\d.]*)/)) && f[1]) {
			m[e = "opera"] = n(f[1]);
			if((f = k.match(/Opera\/.* Version\/([\d.]*)/)) && f[1]) m[e] = n(f[1]);
			if((f = k.match(/Opera Mini[^;]*/)) && f) m.mobile = f[0].toLowerCase();
			else if((f = k.match(/Opera Mobi[^;]*/)) && f) m.mobile = f[0]
		}
	} else if((f = k.match(/MSIE\s([^;]*)/)) && f[1]) {
		if(m[l = "trident"] = 0.1, m[e = "ie"] = n(f[1]), (f = k.match(/Trident\/([\d.]*)/)) && f[1]) m[l] = n(f[1])
	} else if(f = k.match(/Gecko/)) {
		m[l = "gecko"] = 0.1;
		if((f = k.match(/rv:([\d.]*)/)) &&
			f[1]) m[l] = n(f[1]);
		if((f = k.match(/Firefox\/([\d.]*)/)) && f[1]) m[e = "firefox"] = n(f[1])
	}
	j || (/windows|win32/i.test(k) ? j = "windows" : /macintosh|mac_powerpc/i.test(k) ? j = "macintosh" : /linux/i.test(k) ? j = "linux" : /rhino/i.test(k) && (j = "rhino"));
	if("object" === typeof process) {
		var o, q;
		if((o = process.versions) && (q = o.node)) j = process.platform, m.nodejs = n(q)
	}
	m.os = j;
	m.core = l;
	m.shell = e;
	m._numberify = n;
	j = "webkit,trident,gecko,presto,chrome,safari,firefox,ie,opera".split(",");
	var g = g && g.documentElement,
		r = "";
	g && (a.each(j, function(a) {
		var c =
			m[a];
		if(c) {
			r = r + (" ks-" + a + (parseInt(c) + ""));
			r = r + (" ks-" + a)
		}
	}), a.trim(r) && (g.className = a.trim(g.className + r)))
})(KISSY);
(function(a) {
	var b = a.Env,
		i = b.host,
		k = a.UA,
		g = i.document || {},
		j = "ontouchstart" in g && !k.phantomjs,
		l = (g = g.documentMode) || k.ie,
		e = (b.nodejs && "object" === typeof global ? global : i).JSON;
	g && 9 > g && (e = 0);
	a.Features = {
		isTouchSupported: function() {
			return j
		},
		isDeviceMotionSupported: function() {
			return !!i.DeviceMotionEvent
		},
		isHashChangeSupported: function() {
			return "onhashchange" in i && (!l || 7 < l)
		},
		isNativeJSONSupported: function() {
			return e
		}
	}
})(KISSY);
(function(a) {
	function b(a) {
		this.runtime = a
	}
	b.Status = {
		INIT: 0,
		LOADING: 1,
		LOADED: 2,
		ERROR: 3,
		ATTACHED: 4
	};
	a.Loader = b;
	a.Loader.Status = b.Status
})(KISSY);
(function(a) {
	function b(a, b, j) {
		a = a[i] || (a[i] = {});
		j && (a[b] = a[b] || []);
		return a[b]
	}
	a.namespace("Loader");
	var i = "__events__" + a.now();
	KISSY.Loader.Target = {
		on: function(a, g) {
			b(this, a, 1).push(g)
		},
		detach: function(k, g) {
			var j, l;
			if(k) {
				if(j = b(this, k)) g && (l = a.indexOf(g, j), -1 != l && j.splice(l, 1)), (!g || !j.length) && delete(this[i] || (this[i] = {}))[k]
			} else delete this[i]
		},
		fire: function(a, g) {
			var j = b(this, a) || [],
				i, e = j.length;
			for(i = 0; i < e; i++) j[i].call(null, g)
		}
	}
})(KISSY);
(function(a) {
	function b(a) {
		if("string" == typeof a) return i(a);
		for(var c = [], b = 0, d = a.length; b < d; b++) c[b] = i(a[b]);
		return c
	}

	function i(a) {
		"/" == a.charAt(a.length - 1) && (a += "index");
		return a
	}

	function k(c, b, d) {
		var c = c.Env.mods,
			e, h, b = a.makeArray(b);
		for(h = 0; h < b.length; h++)
			if(e = c[b[h]], !e || e.status !== d) return 0;
		return 1
	}
	var g = a.Loader,
		j = a.Path,
		l = a.Env.host,
		e = a.startsWith,
		f = g.Status,
		d = f.ATTACHED,
		h = f.LOADED,
		c = a.Loader.Utils = {},
		m = l.document;
	a.mix(c, {
		docHead: function() {
			return m.getElementsByTagName("head")[0] || m.documentElement
		},
		normalDepModuleName: function(a, b) {
			var d = 0,
				h;
			if(!b) return b;
			if("string" == typeof b) return e(b, "../") || e(b, "./") ? j.resolve(j.dirname(a), b) : j.normalize(b);
			for(h = b.length; d < h; d++) b[d] = c.normalDepModuleName(a, b[d]);
			return b
		},
		createModulesInfo: function(b, d) {
			a.each(d, function(a) {
				c.createModuleInfo(b, a)
			})
		},
		createModuleInfo: function(c, b, d) {
			var b = i(b),
				e = c.Env.mods,
				h = e[b];
			return h ? h : e[b] = h = new g.Module(a.mix({
				name: b,
				runtime: c
			}, d))
		},
		isAttached: function(a, c) {
			return k(a, c, d)
		},
		isLoaded: function(a, c) {
			return k(a, c,
				h)
		},
		getModules: function(b, e) {
			var h = [b],
				f, m, g, j, i = b.Env.mods;
			a.each(e, function(e) {
				f = i[e];
				if(!f || "css" != f.getType()) m = c.unalias(b, e), (g = a.reduce(m, function(a, c) {
					j = i[c];
					return a && j && j.status == d
				}, !0)) ? h.push(i[m[0]].value) : h.push(null)
			});
			return h
		},
		attachModsRecursively: function(a, b, d) {
			var d = d || [],
				e, h = 1,
				f = a.length,
				m = d.length;
			for(e = 0; e < f; e++) h = c.attachModRecursively(a[e], b, d) && h, d.length = m;
			return h
		},
		attachModRecursively: function(b, e, f) {
			var m, g = e.Env.mods[b];
			if(!g) return 0;
			m = g.status;
			if(m == d) return 1;
			if(m !=
				h) return 0;
			if(a.Config.debug) {
				if(a.inArray(b, f)) return f.push(b), 0;
				f.push(b)
			}
			return c.attachModsRecursively(g.getNormalizedRequires(), e, f) ? (c.attachMod(e, g), 1) : 0
		},
		attachMod: function(a, b) {
			if(b.status == h) {
				var e = b.fn;
				e && (b.value = e.apply(b, c.getModules(a, b.getRequiresWithAlias())));
				b.status = d;
				a.getLoader().fire("afterModAttached", {
					mod: b
				})
			}
		},
		getModNamesAsArray: function(a) {
			"string" == typeof a && (a = a.replace(/\s+/g, "").split(","));
			return a
		},
		normalizeModNames: function(a, b, d) {
			return c.unalias(a, c.normalizeModNamesWithAlias(a,
				b, d))
		},
		unalias: function(a, c) {
			for(var d = [].concat(c), e, h, f, m = 0, g, j = a.Env.mods; !m;) {
				m = 1;
				for(e = d.length - 1; 0 <= e; e--)
					if((h = j[d[e]]) && (f = h.alias)) {
						m = 0;
						for(g = f.length - 1; 0 <= g; g--) f[g] || f.splice(g, 1);
						d.splice.apply(d, [e, 1].concat(b(f)))
					}
			}
			return d
		},
		normalizeModNamesWithAlias: function(a, d, e) {
			var a = [],
				h, f;
			if(d) {
				h = 0;
				for(f = d.length; h < f; h++) d[h] && a.push(b(d[h]))
			}
			e && (a = c.normalDepModuleName(e, a));
			return a
		},
		registerModule: function(b, d, e, f) {
			var m = b.Env.mods,
				g = m[d];
			if(!g || !g.fn) c.createModuleInfo(b, d), g = m[d], a.mix(g, {
				name: d,
				status: h,
				fn: e
			}), a.mix(g, f)
		},
		getMappedPath: function(a, c, b) {
			for(var a = b || a.Config.mappedRules || [], d, b = 0; b < a.length; b++)
				if(d = a[b], c.match(d[0])) return c.replace(d[0], d[1]);
			return c
		}
	})
})(KISSY);
(function(a) {
	function b(a, b) {
		return b in a ? a[b] : a.runtime.Config[b]
	}

	function i(b) {
		a.mix(this, b)
	}

	function k(b) {
		this.status = j.Status.INIT;
		a.mix(this, b)
	}
	var g = a.Path,
		j = a.Loader,
		l = j.Utils;
	a.augment(i, {
		getTag: function() {
			return b(this, "tag")
		},
		getName: function() {
			return this.name
		},
		getBase: function() {
			return b(this, "base")
		},
		getPrefixUriForCombo: function() {
			var a = this.getName();
			return this.getBase() + (a && !this.isIgnorePackageNameInUri() ? a + "/" : "")
		},
		getBaseUri: function() {
			return b(this, "baseUri")
		},
		isDebug: function() {
			return b(this,
				"debug")
		},
		isIgnorePackageNameInUri: function() {
			return b(this, "ignorePackageNameInUri")
		},
		getCharset: function() {
			return b(this, "charset")
		},
		isCombine: function() {
			return b(this, "combine")
		}
	});
	j.Package = i;
	a.augment(k, {
		setValue: function(a) {
			this.value = a
		},
		getType: function() {
			var a = this.type;
			a || (this.type = a = ".css" == g.extname(this.name).toLowerCase() ? "css" : "js");
			return a
		},
		getFullPath: function() {
			var a, b, d, h, c;
			if(!this.fullpath) {
				d = this.getPackage();
				b = d.getBaseUri();
				c = this.getPath();
				if(d.isIgnorePackageNameInUri() &&
					(h = d.getName())) c = g.relative(h, c);
				b = b.resolve(c);
				(a = this.getTag()) && b.query.set("t", a);
				this.fullpath = l.getMappedPath(this.runtime, b.toString())
			}
			return this.fullpath
		},
		getPath: function() {
			var a;
			if(!(a = this.path)) {
				a = this.name;
				var b = "." + this.getType(),
					d = "-min";
				a = g.join(g.dirname(a), g.basename(a, b));
				this.getPackage().isDebug() && (d = "");
				a = this.path = a + d + b
			}
			return a
		},
		getValue: function() {
			return this.value
		},
		getName: function() {
			return this.name
		},
		getPackage: function() {
			var b;
			if(!(b = this.packageInfo)) {
				b = this.runtime;
				var f = this.name,
					d = b.config("packages"),
					h = "",
					c;
				for(c in d) a.startsWith(f, c) && c.length > h.length && (h = c);
				b = this.packageInfo = d[h] || b.config("systemPackage")
			}
			return b
		},
		getTag: function() {
			return this.tag || this.getPackage().getTag()
		},
		getCharset: function() {
			return this.charset || this.getPackage().getCharset()
		},
		getRequiredMods: function() {
			var b = this.runtime;
			return a.map(this.getNormalizedRequires(), function(a) {
				return l.createModuleInfo(b, a)
			})
		},
		getRequiresWithAlias: function() {
			var a = this.requiresWithAlias,
				b = this.requires;
			if(!b || 0 == b.length) return b || [];
			a || (this.requiresWithAlias = a = l.normalizeModNamesWithAlias(this.runtime, b, this.name));
			return a
		},
		getNormalizedRequires: function() {
			var a, b = this.normalizedRequiresStatus,
				d = this.status,
				h = this.requires;
			if(!h || 0 == h.length) return h || [];
			if((a = this.normalizedRequires) && b == d) return a;
			this.normalizedRequiresStatus = d;
			return this.normalizedRequires = l.normalizeModNames(this.runtime, h, this.name)
		}
	});
	j.Module = k
})(KISSY);
(function(a) {
	function b() {
		for(var l in j) {
			var e = j[l],
				f = e.node,
				d, h = 0;
			if(k.webkit) f.sheet && (h = 1);
			else if(f.sheet) try {
				f.sheet.cssRules && (h = 1)
			} catch(c) {
				d = c.name, "NS_ERROR_DOM_SECURITY_ERR" == d && (h = 1)
			}
			h && (e.callback && e.callback.call(f), delete j[l])
		}
		g = a.isEmptyObject(j) ? 0 : setTimeout(b, i)
	}
	var i = 30,
		k = a.UA,
		g = 0,
		j = {};
	a.mix(a.Loader.Utils, {
		pollCss: function(a, e) {
			var f;
			f = j[a.href] = {};
			f.node = a;
			f.callback = e;
			g || b()
		}
	})
})(KISSY);
(function(a) {
	var b = a.Env.host.document,
		i = a.Loader.Utils,
		k = a.Path,
		g = {},
		j = 536 > a.UA.webkit;
	a.mix(a, {
		getScript: function(l, e, f) {
			var d = e,
				h = 0,
				c, m, n, p;
			a.startsWith(k.extname(l).toLowerCase(), ".css") && (h = 1);
			a.isPlainObject(d) && (e = d.success, c = d.error, m = d.timeout, f = d.charset, n = d.attrs);
			d = g[l] = g[l] || [];
			d.push([e, c]);
			if(1 < d.length) return d.node;
			var e = i.docHead(),
				o = b.createElement(h ? "link" : "script");
			n && a.each(n, function(a, b) {
				o.setAttribute(b, a)
			});
			h ? (o.href = l, o.rel = "stylesheet") : (o.src = l, o.async = !0);
			d.node = o;
			f &&
				(o.charset = f);
			var q = function(b) {
					var c;
					if(p) {
						p.cancel();
						p = void 0
					}
					a.each(g[l], function(a) {
						(c = a[b]) && c.call(o)
					});
					delete g[l]
				},
				f = !h;
			h && (f = j ? !1 : "onload" in o);
			f ? (o.onload = o.onreadystatechange = function() {
				var a = o.readyState;
				if(!a || a == "loaded" || a == "complete") {
					o.onreadystatechange = o.onload = null;
					q(0)
				}
			}, o.onerror = function() {
				o.onerror = null;
				q(1)
			}) : i.pollCss(o, function() {
				q(0)
			});
			m && (p = a.later(function() {
				q(1)
			}, 1E3 * m));
			h ? e.appendChild(o) : e.insertBefore(o, e.firstChild);
			return o
		}
	})
})(KISSY);
(function(a, b) {
	function i(b) {
		"/" != b.charAt(b.length - 1) && (b += "/");
		l ? b = l.resolve(b) : (a.startsWith(b, "file:") || (b = "file:" + b), b = new a.Uri(b));
		return b
	}
	var k = a.Loader,
		g = k.Utils,
		j = a.Env.host.location,
		l, e, f = a.Config.fns;
	if(!a.Env.nodejs && j && (e = j.href)) l = new a.Uri(e);
	f.map = function(a) {
		var b = this.Config;
		return !1 === a ? b.mappedRules = [] : b.mappedRules = (b.mappedRules || []).concat(a || [])
	};
	f.mapCombo = function(a) {
		var b = this.Config;
		return !1 === a ? b.mappedComboRules = [] : b.mappedComboRules = (b.mappedComboRules || []).concat(a || [])
	};
	f.packages = function(d) {
		var h, c = this.Config,
			e = c.packages = c.packages || {};
		return d ? (a.each(d, function(b, c) {
			h = b.name || c;
			var d = i(b.base || b.path);
			b.name = h;
			b.base = d.toString();
			b.baseUri = d;
			b.runtime = a;
			delete b.path;
			e[h] = new k.Package(b)
		}), b) : !1 === d ? (c.packages = {}, b) : e
	};
	f.modules = function(b) {
		var h = this,
			c = h.Env;
		b && a.each(b, function(b, d) {
			g.createModuleInfo(h, d, b);
			a.mix(c.mods[d], b)
		})
	};
	f.base = function(a) {
		var h = this.Config;
		if(!a) return h.base;
		a = i(a);
		h.base = a.toString();
		h.baseUri = a;
		return b
	}
})(KISSY);
(function(a) {
	var b = a.Loader,
		i = a.UA,
		k = b.Utils;
	a.augment(b, b.Target, {
		__currentMod: null,
		__startLoadTime: 0,
		__startLoadModName: null,
		add: function(b, j, l) {
			var e = this.runtime;
			if("string" == typeof b) k.registerModule(e, b, j, l);
			else if(a.isFunction(b))
				if(l = j, j = b, i.ie) {
					var b = a.Env.host.document.getElementsByTagName("script"),
						f, d, h;
					for(d = b.length - 1; 0 <= d; d--)
						if(h = b[d], "interactive" == h.readyState) {
							f = h;
							break
						}
					b = f ? f.getAttribute("data-mod-name") : this.__startLoadModName;
					k.registerModule(e, b, j, l);
					this.__startLoadModName =
						null;
					this.__startLoadTime = 0
				} else this.__currentMod = {
					fn: j,
					config: l
				}
		}
	})
})(KISSY);
(function(a, b) {
	function i(b) {
		a.mix(this, {
			fn: b,
			waitMods: {},
			requireLoadedMods: {}
		})
	}

	function k(a, b, d) {
		var f, m = b.length;
		for(f = 0; f < m; f++) {
			var j = a,
				i = b[f],
				k = d,
				l = j.runtime,
				w = void 0,
				A = void 0,
				w = l.Env.mods,
				y = w[i];
			y || (e.createModuleInfo(l, i), y = w[i]);
			w = y.status;
			w != n && (w === c ? k.loadModRequires(j, y) : (A = k.isModWait(i), A || (k.addWaitMod(i), w <= h && g(j, y, k))))
		}
	}

	function g(c, g, j) {
		function i() {
			g.fn ? (d[l] || (d[l] = 1), j.loadModRequires(c, g), j.removeWaitMod(l), j.check()) : g.status = m
		}
		var k = c.runtime,
			l = g.getName(),
			n = g.getCharset(),
			v = g.getFullPath(),
			x = 0,
			w = f.ie,
			A = "css" == g.getType();
		g.status = h;
		w && !A && (c.__startLoadModName = l, c.__startLoadTime = Number(+new Date));
		a.getScript(v, {
			attrs: w ? {
				"data-mod-name": l
			} : b,
			success: function() {
				if(g.status == h)
					if(A) e.registerModule(k, l, a.noop);
					else if(x = c.__currentMod) {
					e.registerModule(k, l, x.fn, x.config);
					c.__currentMod = null
				}
				a.later(i)
			},
			error: i,
			charset: n
		})
	}
	var j, l, e, f, d = {},
		h, c, m, n;
	j = a.Loader;
	l = j.Status;
	e = j.Utils;
	f = a.UA;
	h = l.LOADING;
	c = l.LOADED;
	m = l.ERROR;
	n = l.ATTACHED;
	i.prototype = {
		check: function() {
			var b =
				this.fn;
			b && a.isEmptyObject(this.waitMods) && (b(), this.fn = null)
		},
		addWaitMod: function(a) {
			this.waitMods[a] = 1
		},
		removeWaitMod: function(a) {
			delete this.waitMods[a]
		},
		isModWait: function(a) {
			return this.waitMods[a]
		},
		loadModRequires: function(a, b) {
			var c = this.requireLoadedMods,
				d = b.name;
			c[d] || (c[d] = 1, c = b.getNormalizedRequires(), k(a, c, this))
		}
	};
	a.augment(j, {
		use: function(a, b, c) {
			var d, h = new i(function() {
					e.attachModsRecursively(d, f);
					b && b.apply(f, e.getModules(f, a))
				}),
				f = this.runtime,
				a = e.getModNamesAsArray(a),
				a = e.normalizeModNamesWithAlias(f,
					a);
			d = e.unalias(f, a);
			k(this, d, h);
			c ? h.check() : setTimeout(function() {
				h.check()
			}, 0);
			return this
		}
	})
})(KISSY);
(function(a, b) {
	function i(b, c, d) {
		var h = b && b.length;
		h ? a.each(b, function(b) {
			a.getScript(b, function() {
				--h || c()
			}, d)
		}) : c()
	}

	function k(b) {
		a.mix(this, {
			runtime: b,
			queue: [],
			loading: 0
		})
	}

	function g(a) {
		if(a.queue.length) {
			var b = a.queue.shift();
			l(a, b)
		}
	}

	function j(a, b) {
		a.queue.push(b)
	}

	function l(b, c) {
		function d() {
			w && x && (m.attachModsRecursively(g, B) ? j.apply(null, m.getModules(B, h)) : l(b, c))
		}
		var h = c.modNames,
			g = c.unaliasModNames,
			j = c.fn,
			k, u, v, x, w, A, y, B = b.runtime;
		b.loading = 1;
		k = b.calculate(g);
		m.createModulesInfo(B, k);
		k =
			b.getComboUrls(k);
		u = k.css;
		A = 0;
		for(y in u) A++;
		x = 0;
		w = !A;
		for(y in u) i(u[y], function() {
			if(!--A) {
				for(y in u) a.each(u[y].mods, function(b) {
					m.registerModule(B, b.name, a.noop)
				});
				e(u);
				w = 1;
				d()
			}
		}, u[y].charset);
		v = k.js;
		f(v, function(a) {
			(x = a) && e(v);
			d()
		})
	}

	function e(b) {
		if(a.Config.debug) {
			var c = [],
				d, h = [];
			for(d in b) h.push.apply(h, b[d]), a.each(b[d].mods, function(a) {
				c.push(a.name)
			})
		}
	}

	function f(d, h) {
		var e, f, m = 0;
		for(e in d) m++;
		if(m)
			for(e in f = 1, d)(function(e) {
				i(d[e], function() {
					a.each(d[e].mods, function(a) {
						return !a.fn ?
							(a.status = c.ERROR, f = 0, !1) : b
					});
					f && !--m && h(1)
				}, d[e].charset)
			})(e);
		else h(1)
	}

	function d(b, c, h) {
		var e = b.runtime,
			f, g;
		f = b.runtime.Env.mods[c];
		var j = h[c];
		if(j) return j;
		h[c] = j = {};
		if(f && !m.isAttached(e, c)) {
			c = f.getNormalizedRequires();
			for(f = 0; f < c.length; f++) g = c[f], !m.isLoaded(e, g) && !m.isAttached(e, g) && (j[g] = 1), g = d(b, g, h), a.mix(j, g)
		}
		return j
	}
	var h = a.Loader,
		c = h.Status,
		m = h.Utils;
	a.augment(k, h.Target);
	a.augment(k, {
		clear: function() {
			this.loading = 0
		},
		use: function(a, b, c) {
			var d = this,
				h = d.runtime,
				a = m.getModNamesAsArray(a),
				a = m.normalizeModNamesWithAlias(h, a),
				e = m.unalias(h, a);
			m.isAttached(h, e) ? b && (c ? b.apply(null, m.getModules(h, a)) : setTimeout(function() {
				b.apply(null, m.getModules(h, a))
			}, 0)) : (j(d, {
				modNames: a,
				unaliasModNames: e,
				fn: function() {
					setTimeout(function() {
						d.loading = 0;
						g(d)
					}, 0);
					b && b.apply(this, arguments)
				}
			}), d.loading || g(d))
		},
		add: function(a, b, c) {
			m.registerModule(this.runtime, a, b, c)
		},
		calculate: function(b) {
			var c = {},
				h, e, f, g = this.runtime,
				j = {};
			for(h = 0; h < b.length; h++) e = b[h], m.isAttached(g, e) || (m.isLoaded(g, e) || (c[e] = 1), a.mix(c,
				d(this, e, j)));
			b = [];
			for(f in c) b.push(f);
			return b
		},
		getComboUrls: function(b) {
			var c = this,
				d, h = c.runtime,
				e = h.Config,
				f = {};
			a.each(b, function(a) {
				var a = c.runtime.Env.mods[a],
					b = a.getPackage(),
					d = a.getType(),
					h, e = b.getName();
				f[e] = f[e] || {};
				if(!(h = f[e][d])) h = f[e][d] = f[e][d] || [], h.packageInfo = b;
				h.push(a)
			});
			var g = {
					js: {},
					css: {}
				},
				j, i, k, b = e.comboPrefix,
				l = e.comboSep,
				A = e.comboMaxFileNum,
				y = e.comboMaxUrlLength;
			for(i in f)
				for(k in f[i]) {
					j = [];
					var B = f[i][k],
						D = B.packageInfo,
						C = (d = D.getTag()) ? "?t=" + encodeURIComponent(d) : "",
						I =
						C.length,
						z, F, K, J = D.getPrefixUriForCombo();
					g[k][i] = [];
					g[k][i].charset = D.getCharset();
					g[k][i].mods = [];
					z = J + b;
					K = z.length;
					var L = function() {
						g[k][i].push(m.getMappedPath(h, z + j.join(l) + C, e.mappedComboRules))
					};
					for(d = 0; d < B.length; d++)
						if(F = B[d].getFullPath(), g[k][i].mods.push(B[d]), !D.isCombine() || !a.startsWith(F, J)) g[k][i].push(F);
						else if(F = F.slice(J.length).replace(/\?.*$/, ""), j.push(F), j.length > A || K + j.join(l).length + I > y) j.pop(), L(), j = [], d--;
					j.length && L()
				}
			return g
		}
	});
	h.Combo = k
})(KISSY);
(function(a, b) {
	function i() {
		var e = /^(.*)(seed|kissy)(?:-min)?\.js[^/]*/i,
			f = /(seed|kissy)(?:-min)?\.js/i,
			d, h, c = g.host.document.getElementsByTagName("script"),
			m = c[c.length - 1],
			c = m.src,
			m = (m = m.getAttribute("data-config")) ? (new Function("return " + m))() : {};
		d = m.comboPrefix = m.comboPrefix || "??";
		h = m.comboSep = m.comboSep || ",";
		var j, i = c.indexOf(d); - 1 == i ? j = c.replace(e, "$1") : (j = c.substring(0, i), "/" != j.charAt(j.length - 1) && (j += "/"), c = c.substring(i + d.length).split(h), a.each(c, function(a) {
			return a.match(f) ? (j += a.replace(e,
				"$1"), !1) : b
		}));
		return a.mix({
			base: j
		}, m)
	}
	a.mix(a, {
		add: function(a, b, d) {
			this.getLoader().add(a, b, d)
		},
		use: function(a, b) {
			var d = this.getLoader();
			d.use.apply(d, arguments)
		},
		getLoader: function() {
			var a = this.Env;
			return this.Config.combine && !a.nodejs ? a._comboLoader : a._loader
		},
		require: function(a) {
			return j.getModules(this, [a])[1]
		}
	});
	var k = a.Loader,
		g = a.Env,
		j = k.Utils,
		l = a.Loader.Combo;
	a.Env.nodejs ? a.config({
		charset: "utf-8",
		base: __dirname.replace(/\\/g, "/").replace(/\/$/, "") + "/"
	}) : a.config(a.mix({
		comboMaxUrlLength: 2E3,
		comboMaxFileNum: 40,
		charset: "utf-8",
		tag: "20130621173819"
	}, i()));
	a.config("systemPackage", new k.Package({
		name: "",
		runtime: a
	}));
	g.mods = {};
	g._loader = new k(a);
	l && (g._comboLoader = new l(a))
})(KISSY);
(function(a, b) {
	function i() {
		j && o(k, n, i);
		f.resolve(a)
	}
	var k = a.Env.host,
		g = a.UA,
		j = k.document,
		l = j && j.documentElement,
		e = k.location,
		f = new a.Defer,
		d = f.promise,
		h = /^#?([\w-]+)$/,
		c = /\S/,
		m = !(!j || !j.addEventListener),
		n = "load",
		p = m ? function(a, b, c) {
			a.addEventListener(b, c, !1)
		} : function(a, b, c) {
			a.attachEvent("on" + b, c)
		},
		o = m ? function(a, b, c) {
			a.removeEventListener(b, c, !1)
		} : function(a, b, c) {
			a.detachEvent("on" + b, c)
		};
	a.mix(a, {
		isWindow: function(a) {
			return null != a && a == a.window
		},
		parseXML: function(a) {
			if(a.documentElement) return a;
			var c;
			try {
				k.DOMParser ? c = (new DOMParser).parseFromString(a, "text/xml") : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = !1, c.loadXML(a))
			} catch(d) {
				c = b
			}!c || !c.documentElement || c.getElementsByTagName("parsererror");
			return c
		},
		globalEval: function(a) {
			a && c.test(a) && (k.execScript || function(a) {
				k.eval.call(k, a)
			})(a)
		},
		ready: function(a) {
			d.then(a);
			return this
		},
		available: function(b, c) {
			var b = (b + "").match(h)[1],
				d = 1,
				e, f = a.later(function() {
					((e = j.getElementById(b)) && (c(e) || 1) || 500 < ++d) && f.cancel()
				}, 40, !0)
		}
	});
	if(e && -1 !==
		(e.search || "").indexOf("ks-debug")) a.Config.debug = !0;
	(function() {
		if(!j || "complete" === j.readyState) i();
		else if(p(k, n, i), m) {
			var a = function() {
				o(j, "DOMContentLoaded", a);
				i()
			};
			p(j, "DOMContentLoaded", a)
		} else {
			var b = function() {
				"complete" === j.readyState && (o(j, "readystatechange", b), i())
			};
			p(j, "readystatechange", b);
			var c, d = l && l.doScroll;
			try {
				c = null === k.frameElement
			} catch(h) {
				c = !1
			}
			if(d && c) {
				var e = function() {
					try {
						d("left"), i()
					} catch(a) {
						setTimeout(e, 40)
					}
				};
				e()
			}
		}
	})();
	if(g.ie) try {
		j.execCommand("BackgroundImageCache", !1, !0)
	} catch(q) {}
})(KISSY, void 0);
(function(a) {
	var b = a.Config.baseUri.resolve("../").toString();
	a.config({
		packages: {
			gallery: {
				base: b
			},
			mobile: {
				base: b
			}
		},
		modules: {
			core: {
				alias: "dom,event,ajax,anim,base,node,json,ua,cookie".split(",")
			}
		}
	})
})(KISSY);
(function(a, b, i) {
	a({
		ajax: {
			requires: ["dom", "json", "event"]
		}
	});
	a({
		anim: {
			requires: ["dom", "event"]
		}
	});
	a({
		base: {
			requires: ["event/custom"]
		}
	});
	a({
		button: {
			requires: ["component/base", "event"]
		}
	});
	a({
		calendar: {
			requires: ["node", "event"]
		}
	});
	a({
		color: {
			requires: ["base"]
		}
	});
	a({
		combobox: {
			requires: ["dom", "component/base", "node", "menu", "ajax"]
		}
	});
	a({
		"component/base": {
			requires: ["rich-base", "node", "event"]
		}
	});
	a({
		"component/extension": {
			requires: ["dom", "node"]
		}
	});
	a({
		"component/plugin/drag": {
			requires: ["rich-base", "dd/base"]
		}
	});
	a({
		"component/plugin/resize": {
			requires: ["resizable"]
		}
	});
	a({
		datalazyload: {
			requires: ["dom", "event", "base"]
		}
	});
	a({
		dd: {
			alias: ["dd/base", "dd/droppable"]
		}
	});
	a({
		"dd/base": {
			requires: ["dom", "node", "event", "rich-base", "base"]
		}
	});
	a({
		"dd/droppable": {
			requires: ["dd/base", "dom", "node", "rich-base"]
		}
	});
	a({
		"dd/plugin/constrain": {
			requires: ["base", "node"]
		}
	});
	a({
		"dd/plugin/proxy": {
			requires: ["node", "base", "dd/base"]
		}
	});
	a({
		"dd/plugin/scroll": {
			requires: ["dd/base", "base", "node", "dom"]
		}
	});
	a({
		dom: {
			alias: ["dom/base", i.ie && (9 >
				i.ie || 9 > document.documentMode) ? "dom/ie" : ""]
		}
	});
	a({
		"dom/ie": {
			requires: ["dom/base"]
		}
	});
	a({
		editor: {
			requires: ["htmlparser", "component/base", "core"]
		}
	});
	a({
		event: {
			alias: ["event/base", "event/dom", "event/custom"]
		}
	});
	a({
		"event/custom": {
			requires: ["event/base"]
		}
	});
	a({
		"event/dom": {
			alias: ["event/dom/base", b.isTouchSupported() ? "event/dom/touch" : "", b.isDeviceMotionSupported() ? "event/dom/shake" : "", b.isHashChangeSupported() ? "" : "event/dom/hashchange", 9 > i.ie ? "event/dom/ie" : "", i.ie ? "" : "event/dom/focusin"]
		}
	});
	a({
		"event/dom/base": {
			requires: ["dom",
				"event/base"
			]
		}
	});
	a({
		"event/dom/focusin": {
			requires: ["event/dom/base"]
		}
	});
	a({
		"event/dom/hashchange": {
			requires: ["event/dom/base", "dom"]
		}
	});
	a({
		"event/dom/ie": {
			requires: ["event/dom/base", "dom"]
		}
	});
	a({
		"event/dom/shake": {
			requires: ["event/dom/base"]
		}
	});
	a({
		"event/dom/touch": {
			requires: ["event/dom/base", "dom"]
		}
	});
	a({
		imagezoom: {
			requires: ["node", "overlay"]
		}
	});
	a({
		json: {
			requires: [KISSY.Features.isNativeJSONSupported() ? "" : "json/json2"]
		}
	});
	a({
		kison: {
			requires: ["base"]
		}
	});
	a({
		menu: {
			requires: ["component/extension", "node",
				"component/base", "event"
			]
		}
	});
	a({
		menubutton: {
			requires: ["node", "menu", "button", "component/base"]
		}
	});
	a({
		mvc: {
			requires: ["event", "base", "ajax", "json", "node"]
		}
	});
	a({
		node: {
			requires: ["dom", "event/dom", "anim"]
		}
	});
	a({
		overlay: {
			requires: ["node", "component/base", "component/extension", "event"]
		}
	});
	a({
		resizable: {
			requires: ["node", "rich-base", "dd/base"]
		}
	});
	a({
		"rich-base": {
			requires: ["base"]
		}
	});
	a({
		separator: {
			requires: ["component/base"]
		}
	});
	a({
		"split-button": {
			requires: ["component/base", "button", "menubutton"]
		}
	});
	a({
		stylesheet: {
			requires: ["dom"]
		}
	});
	a({
		swf: {
			requires: ["dom", "json", "base"]
		}
	});
	a({
		switchable: {
			requires: ["dom", "event", "anim", KISSY.Features.isTouchSupported() ? "dd/base" : ""]
		}
	});
	a({
		tabs: {
			requires: ["button", "toolbar", "component/base"]
		}
	});
	a({
		toolbar: {
			requires: ["component/base", "node"]
		}
	});
	a({
		tree: {
			requires: ["node", "component/base", "event"]
		}
	});
	a({
		waterfall: {
			requires: ["node", "base"]
		}
	});
	a({
		xtemplate: {
			alias: ["xtemplate/facade"]
		}
	});
	a({
		"xtemplate/compiler": {
			requires: ["xtemplate/runtime"]
		}
	});
	a({
		"xtemplate/facade": {
			requires: ["xtemplate/runtime",
				"xtemplate/compiler"
			]
		}
	})
})(function(a) {
	KISSY.config("modules", a)
}, KISSY.Features, KISSY.UA);
(function(a) {
	a.add("empty", a.noop);
	a.add("promise", function() {
		return a.Promise
	});
	a.add("ua", function() {
		return a.UA
	});
	a.add("uri", function() {
		return a.Uri
	});
	a.add("path", function() {
		return a.Path
	})
})(KISSY);
KISSY.add("dom/base/api", function(a) {
	var b = a.Env.host,
		i = a.UA,
		k = {
			ELEMENT_NODE: 1,
			ATTRIBUTE_NODE: 2,
			TEXT_NODE: 3,
			CDATA_SECTION_NODE: 4,
			ENTITY_REFERENCE_NODE: 5,
			ENTITY_NODE: 6,
			PROCESSING_INSTRUCTION_NODE: 7,
			COMMENT_NODE: 8,
			DOCUMENT_NODE: 9,
			DOCUMENT_TYPE_NODE: 10,
			DOCUMENT_FRAGMENT_NODE: 11,
			NOTATION_NODE: 12
		},
		g = {
			isCustomDomain: function(a) {
				var a = a || b,
					g = a.document.domain,
					a = a.location.hostname;
				return g != a && g != "[" + a + "]"
			},
			getEmptyIframeSrc: function(a) {
				a = a || b;
				return i.ie && g.isCustomDomain(a) ? "javascript:void(function(){" +
					encodeURIComponent("document.open();document.domain='" + a.document.domain + "';document.close();") + "}())" : ""
			},
			NodeType: k,
			getWindow: function(a) {
				return !a ? b : "scrollTo" in a && a.document ? a : a.nodeType == k.DOCUMENT_NODE ? a.defaultView || a.parentWindow : !1
			},
			_isNodeList: function(a) {
				return a && !a.nodeType && a.item && !a.setTimeout
			},
			nodeName: function(a) {
				var b = g.get(a),
					a = b.nodeName.toLowerCase();
				i.ie && (b = b.scopeName) && "HTML" != b && (a = b.toLowerCase() + ":" + a);
				return a
			},
			_RE_NUM_NO_PX: RegExp("^(" + /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source +
				")(?!px)[a-z%]+$", "i")
		};
	a.mix(g, k);
	return g
});
KISSY.add("dom/base/attr", function(a, b, i) {
	function k(a, b) {
		var b = q[b] || b,
			c = t[b];
		return c && c.get ? c.get(a, b) : a[b]
	}
	var g = a.Env.host.document,
		j = b.NodeType,
		l = (g = g && g.documentElement) && g.textContent === i ? "innerText" : "textContent",
		e = b.nodeName,
		f = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
		d = /^(?:button|input|object|select|textarea)$/i,
		h = /^a(?:rea)?$/i,
		c = /:|^on/,
		m = /\r/g,
		n = {},
		p = {
			val: 1,
			css: 1,
			html: 1,
			text: 1,
			data: 1,
			width: 1,
			height: 1,
			offset: 1,
			scrollTop: 1,
			scrollLeft: 1
		},
		o = {
			tabindex: {
				get: function(a) {
					var b = a.getAttributeNode("tabindex");
					return b && b.specified ? parseInt(b.value, 10) : d.test(a.nodeName) || h.test(a.nodeName) && a.href ? 0 : i
				}
			}
		},
		q = {
			hidefocus: "hideFocus",
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
		r = {
			get: function(a,
				c) {
				return b.prop(a, c) ? c.toLowerCase() : i
			},
			set: function(a, c, d) {
				!1 === c ? b.removeAttr(a, d) : (c = q[d] || d, c in a && (a[c] = !0), a.setAttribute(d, d.toLowerCase()));
				return d
			}
		},
		t = {},
		s = {},
		u = {
			select: {
				get: function(a) {
					var c = a.selectedIndex,
						d = a.options,
						h;
					if(0 > c) return null;
					if("select-one" === a.type) return b.val(d[c]);
					a = [];
					c = 0;
					for(h = d.length; c < h; ++c) d[c].selected && a.push(b.val(d[c]));
					return a
				},
				set: function(c, d) {
					var h = a.makeArray(d);
					a.each(c.options, function(c) {
						c.selected = a.inArray(b.val(c), h)
					});
					h.length || (c.selectedIndex = -1);
					return h
				}
			}
		};
	a.each(["radio", "checkbox"], function(c) {
		u[c] = {
			get: function(a) {
				return null === a.getAttribute("value") ? "on" : a.value
			},
			set: function(c, d) {
				if(a.isArray(d)) return c.checked = a.inArray(b.val(c), d)
			}
		}
	});
	o.style = {
		get: function(a) {
			return a.style.cssText
		}
	};
	a.mix(b, {
		_valHooks: u,
		_propFix: q,
		_attrHooks: o,
		_propHooks: t,
		_attrNodeHook: s,
		_attrFix: n,
		prop: function(c, d, h) {
			var e = b.query(c),
				f, m;
			if(a.isPlainObject(d)) return a.each(d, function(a, c) {
				b.prop(e, c, a)
			}), i;
			d = q[d] || d;
			m = t[d];
			if(h !== i)
				for(c = e.length - 1; 0 <= c; c--) f =
					e[c], m && m.set ? m.set(f, h, d) : f[d] = h;
			else if(e.length) return k(e[0], d);
			return i
		},
		hasProp: function(a, c) {
			var d = b.query(a),
				h, e = d.length,
				f;
			for(h = 0; h < e; h++)
				if(f = d[h], k(f, c) !== i) return !0;
			return !1
		},
		removeProp: function(a, c) {
			var c = q[c] || c,
				d = b.query(a),
				h, e;
			for(h = d.length - 1; 0 <= h; h--) {
				e = d[h];
				try {
					e[c] = i, delete e[c]
				} catch(f) {}
			}
		},
		attr: function(d, h, m, g) {
			var k = b.query(d),
				l = k[0];
			if(a.isPlainObject(h)) {
				var g = m,
					q;
				for(q in h) b.attr(k, q, h[q], g);
				return i
			}
			if(!(h = a.trim(h))) return i;
			if(g && p[h]) return b[h](d, m);
			h = h.toLowerCase();
			if(g && p[h]) return b[h](d, m);
			h = n[h] || h;
			d = f.test(h) ? r : c.test(h) ? s : o[h];
			if(m === i) {
				if(l && l.nodeType === j.ELEMENT_NODE) {
					"form" == e(l) && (d = s);
					if(d && d.get) return d.get(l, h);
					h = l.getAttribute(h);
					return null === h ? i : h
				}
			} else
				for(g = k.length - 1; 0 <= g; g--)
					if((l = k[g]) && l.nodeType === j.ELEMENT_NODE) "form" == e(l) && (d = s), d && d.set ? d.set(l, m, h) : l.setAttribute(h, "" + m); return i
		},
		removeAttr: function(a, c) {
			var c = c.toLowerCase(),
				c = n[c] || c,
				d = b.query(a),
				h, e, m;
			for(m = d.length - 1; 0 <= m; m--)
				if(e = d[m], e.nodeType == j.ELEMENT_NODE && (e.removeAttribute(c),
						f.test(c) && (h = q[c] || c) in e)) e[h] = !1
		},
		hasAttr: g && !g.hasAttribute ? function(a, c) {
			var c = c.toLowerCase(),
				d = b.query(a),
				h, e;
			for(h = 0; h < d.length; h++)
				if(e = d[h], (e = e.getAttributeNode(c)) && e.specified) return !0;
			return !1
		} : function(a, c) {
			var d = b.query(a),
				h, e = d.length;
			for(h = 0; h < e; h++)
				if(d[h].hasAttribute(c)) return !0;
			return !1
		},
		val: function(c, d) {
			var h, f, g, j, k;
			if(d === i) {
				if(g = b.get(c)) {
					if((h = u[e(g)] || u[g.type]) && "get" in h && (f = h.get(g, "value")) !== i) return f;
					f = g.value;
					return "string" === typeof f ? f.replace(m, "") : null == f ? "" :
						f
				}
				return i
			}
			f = b.query(c);
			for(j = f.length - 1; 0 <= j; j--) {
				g = f[j];
				if(1 !== g.nodeType) break;
				k = d;
				null == k ? k = "" : "number" === typeof k ? k += "" : a.isArray(k) && (k = a.map(k, function(a) {
					return a == null ? "" : a + ""
				}));
				h = u[e(g)] || u[g.type];
				if(!h || !("set" in h) || h.set(g, k, "value") === i) g.value = k
			}
			return i
		},
		text: function(a, c) {
			var d, h, e;
			if(c === i) {
				d = b.get(a);
				if(d.nodeType == j.ELEMENT_NODE) return d[l] || "";
				if(d.nodeType == j.TEXT_NODE) return d.nodeValue
			} else {
				h = b.query(a);
				for(e = h.length - 1; 0 <= e; e--) d = h[e], d.nodeType == j.ELEMENT_NODE ? d[l] = c : d.nodeType ==
					j.TEXT_NODE && (d.nodeValue = c)
			}
			return i
		}
	});
	return b
}, {
	requires: ["./api"]
});
KISSY.add("dom/base", function(a, b) {
	a.mix(a, {
		DOM: b,
		get: b.get,
		query: b.query
	});
	return b
}, {
	requires: "./base/api,./base/attr,./base/class,./base/create,./base/data,./base/insertion,./base/offset,./base/style,./base/selector,./base/traversal".split(",")
});
KISSY.add("dom/base/class", function(a, b, i) {
	function k(e, f, d, h) {
		if(!(f = a.trim(f))) return h ? !1 : i;
		var e = b.query(e),
			c = e.length,
			m = f.split(j),
			f = [],
			k, l;
		for(l = 0; l < m.length; l++)(k = a.trim(m[l])) && f.push(k);
		for(l = 0; l < c; l++)
			if(m = e[l], m.nodeType == g.ELEMENT_NODE && (m = d(m, f, f.length), m !== i)) return m;
		return h ? !1 : i
	}
	var g = b.NodeType,
		j = /[\.\s]\s*\.?/,
		l = /[\n\t]/g;
	a.mix(b, {
		hasClass: function(a, b) {
			return k(a, b, function(a, b, c) {
				var a = a.className,
					e, f;
				if(a) {
					a = (" " + a + " ").replace(l, " ");
					e = 0;
					for(f = !0; e < c; e++)
						if(0 > a.indexOf(" " +
								b[e] + " ")) {
							f = !1;
							break
						}
					if(f) return !0
				}
			}, !0)
		},
		addClass: function(b, f) {
			k(b, f, function(b, h, c) {
				var e = b.className,
					g, i;
				if(e) {
					g = (" " + e + " ").replace(l, " ");
					for(i = 0; i < c; i++) 0 > g.indexOf(" " + h[i] + " ") && (e += " " + h[i]);
					b.className = a.trim(e)
				} else b.className = f
			}, i)
		},
		removeClass: function(b, f) {
			k(b, f, function(b, h, c) {
				var e = b.className,
					f, g;
				if(e)
					if(c) {
						e = (" " + e + " ").replace(l, " ");
						for(f = 0; f < c; f++)
							for(g = " " + h[f] + " "; 0 <= e.indexOf(g);) e = e.replace(g, " ");
						b.className = a.trim(e)
					} else b.className = ""
			}, i)
		},
		replaceClass: function(a, f,
			d) {
			b.removeClass(a, f);
			b.addClass(a, d)
		},
		toggleClass: function(e, f, d) {
			var h = a.isBoolean(d),
				c, g;
			k(e, f, function(a, e, i) {
				for(g = 0; g < i; g++) f = e[g], c = h ? !d : b.hasClass(a, f), b[c ? "removeClass" : "addClass"](a, f)
			}, i)
		}
	});
	return b
}, {
	requires: ["./api"]
});
KISSY.add("dom/base/create", function(a, b, i) {
	function k(c) {
		var d = a.require("event/dom");
		d && d.detach(c);
		b.removeData(c)
	}

	function g(a, b) {
		var d = b && b != f ? b.createElement(c) : m;
		d.innerHTML = "m<div>" + a + "</div>";
		return d.lastChild
	}

	function j(a, b, c) {
		var h = b.nodeType;
		if(h == d.DOCUMENT_FRAGMENT_NODE) {
			b = b.childNodes;
			c = c.childNodes;
			for(h = 0; b[h];) c[h] && j(a, b[h], c[h]), h++
		} else if(h == d.ELEMENT_NODE) {
			b = b.getElementsByTagName("*");
			c = c.getElementsByTagName("*");
			for(h = 0; b[h];) c[h] && a(b[h], c[h]), h++
		}
	}

	function l(c, h) {
		var e =
			a.require("event/dom"),
			f, g;
		if(h.nodeType != d.ELEMENT_NODE || b.hasData(c)) {
			f = b.data(c);
			for(g in f) b.data(h, g, f[g]);
			e && (e._DOMUtils.removeData(h), e._clone(c, h))
		}
	}

	function e(b) {
		var c = null,
			d, h;
		if(b && (b.push || b.item) && b[0]) {
			c = b[0].ownerDocument;
			c = c.createDocumentFragment();
			b = a.makeArray(b);
			d = 0;
			for(h = b.length; d < h; d++) c.appendChild(b[d])
		}
		return c
	}
	var f = a.Env.host.document,
		d = b.NodeType,
		h = a.UA.ie,
		c = "div",
		m = f && f.createElement(c),
		n = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
		p = /<([\w:]+)/,
		o = /^\s+/,
		q = h && 9 > h,
		r = /<|&#?\w+;/,
		t = f && "outerHTML" in f.documentElement,
		s = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
	a.mix(b, {
		create: function(h, m, j, k) {
			var l = null;
			if(!h) return l;
			if(h.nodeType) return b.clone(h);
			if("string" != typeof h) return l;
			k === i && (k = !0);
			k && (h = a.trim(h));
			var k = b._creators,
				t, u, j = j || f,
				w, v = c;
			if(r.test(h))
				if(w = s.exec(h)) l = j.createElement(w[1]);
				else {
					h = h.replace(n, "<$1></$2>");
					if((w = p.exec(h)) && (t = w[1])) v = t.toLowerCase();
					t = (k[v] || g)(h, j);
					q && (u = h.match(o)) && t.insertBefore(j.createTextNode(u[0]), t.firstChild);
					h = t.childNodes;
					1 === h.length ? l = h[0].parentNode.removeChild(h[0]) : h.length && (l = e(h))
				}
			else l = j.createTextNode(h);
			a.isPlainObject(m) && (l.nodeType == d.ELEMENT_NODE ? b.attr(l, m, !0) : l.nodeType == d.DOCUMENT_FRAGMENT_NODE && b.attr(l.childNodes, m, !0));
			return l
		},
		_fixCloneAttributes: null,
		_creators: {
			div: g
		},
		_defaultCreator: g,
		html: function(a, c, h, e) {
			var a = b.query(a),
				f = a[0],
				g = !1,
				m, j;
			if(f) {
				if(c === i) return f.nodeType == d.ELEMENT_NODE ? f.innerHTML : null;
				c += "";
				if(!c.match(/<(?:script|style|link)/i) && (!q || !c.match(o)) && !x[(c.match(p) || ["", ""])[1].toLowerCase()]) try {
					for(m = a.length - 1; 0 <= m; m--) j = a[m], j.nodeType == d.ELEMENT_NODE && (k(j.getElementsByTagName("*")), j.innerHTML = c);
					g = !0
				} catch(l) {}
				g || (c = b.create(c, 0, f.ownerDocument, 0), b.empty(a), b.append(c, a, h));
				e && e()
			}
		},
		outerHTML: function(a, h, e) {
			var g = b.query(a),
				j = g.length;
			if(a = g[0]) {
				if(h === i) {
					if(t) return a.outerHTML;
					h = (h = a.ownerDocument) && h != f ? h.createElement(c) : m;
					h.innerHTML = "";
					h.appendChild(b.clone(a, !0));
					return h.innerHTML
				}
				h += "";
				if(!h.match(/<(?:script|style|link)/i) && t)
					for(e = j - 1; 0 <=
						e; e--) a = g[e], a.nodeType == d.ELEMENT_NODE && (k(a), k(a.getElementsByTagName("*")), a.outerHTML = h);
				else a = b.create(h, 0, a.ownerDocument, 0), b.insertBefore(a, g, e), b.remove(g)
			}
		},
		remove: function(a, c) {
			var h, e = b.query(a),
				f, g;
			for(g = e.length - 1; 0 <= g; g--) h = e[g], !c && h.nodeType == d.ELEMENT_NODE && (f = h.getElementsByTagName("*"), k(f), k(h)), h.parentNode && h.parentNode.removeChild(h)
		},
		clone: function(a, c, h, e) {
			"object" === typeof c && (e = c.deepWithDataAndEvent, h = c.withDataAndEvent, c = c.deep);
			var a = b.get(a),
				f, g = b._fixCloneAttributes,
				m;
			if(!a) return null;
			m = a.nodeType;
			f = a.cloneNode(c);
			if(m == d.ELEMENT_NODE || m == d.DOCUMENT_FRAGMENT_NODE) g && m == d.ELEMENT_NODE && g(a, f), c && g && j(g, a, f);
			h && (l(a, f), c && e && j(l, a, f));
			return f
		},
		empty: function(a) {
			var a = b.query(a),
				c, d;
			for(d = a.length - 1; 0 <= d; d--) c = a[d], b.remove(c.childNodes)
		},
		_nodeListToFragment: e
	});
	var u = b._creators,
		v = b.create,
		x = {
			option: "select",
			optgroup: "select",
			area: "map",
			thead: "table",
			td: "tr",
			th: "tr",
			tr: "tbody",
			tbody: "table",
			tfoot: "table",
			caption: "table",
			colgroup: "table",
			col: "colgroup",
			legend: "fieldset"
		},
		w;
	for(w in x)(function(a) {
		u[w] = function(b, c) {
			return v("<" + a + ">" + b + "</" + a + ">", null, c)
		}
	})(x[w]);
	return b
}, {
	requires: ["./api"]
});
KISSY.add("dom/base/data", function(a, b, i) {
	var k = a.Env.host,
		g = "__ks_data_" + a.now(),
		j = {},
		l = {},
		e = {
			applet: 1,
			object: 1,
			embed: 1
		},
		f = {
			hasData: function(b, d) {
				if(b)
					if(d !== i) {
						if(d in b) return !0
					} else if(!a.isEmptyObject(b)) return !0;
				return !1
			}
		},
		d = {
			hasData: function(a, b) {
				return a == k ? d.hasData(l, b) : f.hasData(a[g], b)
			},
			data: function(a, b, h) {
				if(a == k) return d.data(l, b, h);
				var e = a[g];
				if(h !== i) e = a[g] = a[g] || {}, e[b] = h;
				else return b !== i ? e && e[b] : e = a[g] = a[g] || {}
			},
			removeData: function(b, h) {
				if(b == k) return d.removeData(l, h);
				var e = b[g];
				if(h !== i) delete e[h], a.isEmptyObject(e) && d.removeData(b);
				else try {
					delete b[g]
				} catch(f) {
					b[g] = i
				}
			}
		},
		h = {
			hasData: function(a, b) {
				var d = a[g];
				return !d ? !1 : f.hasData(j[d], b)
			},
			data: function(b, d, h) {
				if(e[b.nodeName.toLowerCase()]) return i;
				var f = b[g];
				if(!f) {
					if(d !== i && h === i) return i;
					f = b[g] = a.guid()
				}
				b = j[f];
				if(h !== i) b = j[f] = j[f] || {}, b[d] = h;
				else return d !== i ? b && b[d] : b = j[f] = j[f] || {}
			},
			removeData: function(b, d) {
				var e = b[g],
					f;
				if(e)
					if(f = j[e], d !== i) delete f[d], a.isEmptyObject(f) && h.removeData(b);
					else {
						delete j[e];
						try {
							delete b[g]
						} catch(k) {
							b[g] =
								i
						}
						b.removeAttribute && b.removeAttribute(g)
					}
			}
		};
	a.mix(b, {
		__EXPANDO: g,
		hasData: function(a, e) {
			for(var f = !1, g = b.query(a), j = 0; j < g.length && !(f = g[j], f = f.nodeType ? h.hasData(f, e) : d.hasData(f, e)); j++);
			return f
		},
		data: function(c, e, f) {
			var c = b.query(c),
				g = c[0];
			if(a.isPlainObject(e)) {
				for(var j in e) b.data(c, j, e[j]);
				return i
			}
			if(f === i) {
				if(g) return g.nodeType ? h.data(g, e) : d.data(g, e)
			} else
				for(j = c.length - 1; 0 <= j; j--) g = c[j], g.nodeType ? h.data(g, e, f) : d.data(g, e, f);
			return i
		},
		removeData: function(a, e) {
			var f = b.query(a),
				g, j;
			for(j =
				f.length - 1; 0 <= j; j--) g = f[j], g.nodeType ? h.removeData(g, e) : d.removeData(g, e)
		}
	});
	return b
}, {
	requires: ["./api"]
});
KISSY.add("dom/base/insertion", function(a, b) {
	function i(a, b) {
		var g = [],
			k, o, q;
		for(k = 0; a[k]; k++)
			if(o = a[k], q = e(o), o.nodeType == j.DOCUMENT_FRAGMENT_NODE) g.push.apply(g, i(f(o.childNodes), b));
			else if("script" === q && (!o.type || h.test(o.type))) o.parentNode && o.parentNode.removeChild(o), b && b.push(o);
		else {
			if(o.nodeType == j.ELEMENT_NODE && !l.test(q)) {
				q = [];
				var r, t, s = o.getElementsByTagName("script");
				for(t = 0; t < s.length; t++) r = s[t], (!r.type || h.test(r.type)) && q.push(r);
				d.apply(a, [k + 1, 0].concat(q))
			}
			g.push(o)
		}
		return g
	}

	function k(b) {
		b.src ?
			a.getScript(b.src) : (b = a.trim(b.text || b.textContent || b.innerHTML || "")) && a.globalEval(b)
	}

	function g(c, d, h, e) {
		c = b.query(c);
		e && (e = []);
		c = i(c, e);
		b._fixInsertionChecked && b._fixInsertionChecked(c);
		var d = b.query(d),
			f, g, j, l, s = d.length;
		if((c.length || e && e.length) && s) {
			c = b._nodeListToFragment(c);
			1 < s && (l = b.clone(c, !0), d = a.makeArray(d));
			for(f = 0; f < s; f++) g = d[f], c && (j = 0 < f ? b.clone(l, !0) : c, h(j, g)), e && e.length && a.each(e, k)
		}
	}
	var j = b.NodeType,
		l = /^(?:button|input|object|select|textarea)$/i,
		e = b.nodeName,
		f = a.makeArray,
		d = [].splice,
		h = /\/(java|ecma)script/i;
	a.mix(b, {
		_fixInsertionChecked: null,
		insertBefore: function(a, b, d) {
			g(a, b, function(a, b) {
				b.parentNode && b.parentNode.insertBefore(a, b)
			}, d)
		},
		insertAfter: function(a, b, d) {
			g(a, b, function(a, b) {
				b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
			}, d)
		},
		appendTo: function(a, b, d) {
			g(a, b, function(a, b) {
				b.appendChild(a)
			}, d)
		},
		prependTo: function(a, b, d) {
			g(a, b, function(a, b) {
				b.insertBefore(a, b.firstChild)
			}, d)
		},
		wrapAll: function(a, d) {
			d = b.clone(b.get(d), !0);
			a = b.query(a);
			a[0].parentNode && b.insertBefore(d,
				a[0]);
			for(var h;
				(h = d.firstChild) && 1 == h.nodeType;) d = h;
			b.appendTo(a, d)
		},
		wrap: function(c, d) {
			c = b.query(c);
			d = b.get(d);
			a.each(c, function(a) {
				b.wrapAll(a, d)
			})
		},
		wrapInner: function(c, d) {
			c = b.query(c);
			d = b.get(d);
			a.each(c, function(a) {
				var c = a.childNodes;
				c.length ? b.wrapAll(c, d) : a.appendChild(d)
			})
		},
		unwrap: function(c) {
			c = b.query(c);
			a.each(c, function(a) {
				a = a.parentNode;
				b.replaceWith(a, a.childNodes)
			})
		},
		replaceWith: function(a, d) {
			var h = b.query(a),
				d = b.query(d);
			b.remove(d, !0);
			b.insertBefore(d, h);
			b.remove(h)
		}
	});
	a.each({
		prepend: "prependTo",
		append: "appendTo",
		before: "insertBefore",
		after: "insertAfter"
	}, function(a, d) {
		b[d] = b[a]
	});
	return b
}, {
	requires: ["./api"]
});
KISSY.add("dom/base/offset", function(a, b, i) {
	function k(a) {
		var b, c = a.ownerDocument.body;
		if(!a.getBoundingClientRect) return {
			left: 0,
			top: 0
		};
		b = a.getBoundingClientRect();
		a = b[n];
		b = b[p];
		a -= f.clientLeft || c.clientLeft || 0;
		b -= f.clientTop || c.clientTop || 0;
		return {
			left: a,
			top: b
		}
	}

	function g(a, c) {
		var h = {
				left: 0,
				top: 0
			},
			e = d(a[m]),
			f, g = a,
			c = c || e;
		do {
			if(e == c) {
				var j = g;
				f = k(j);
				j = d(j[m]);
				f.left += b[q](j);
				f.top += b[r](j)
			} else f = k(g);
			h.left += f.left;
			h.top += f.top
		} while (e && e != c && (g = e.frameElement) && (e = e.parent));
		return h
	}
	var j = a.Env.host,
		l = j.document,
		e = b.NodeType,
		f = l && l.documentElement,
		d = b.getWindow,
		h = Math.max,
		c = parseFloat,
		m = "ownerDocument",
		n = "left",
		p = "top",
		o = a.isNumber,
		q = "scrollLeft",
		r = "scrollTop";
	a.mix(b, {
		offset: function(a, d, h) {
			if(d === i) {
				var a = b.get(a),
					e;
				a && (e = g(a, h));
				return e
			}
			h = b.query(a);
			for(e = h.length - 1; 0 <= e; e--) {
				var a = h[e],
					f = d;
				"static" === b.css(a, "position") && (a.style.position = "relative");
				var j = g(a),
					k = {},
					m = void 0,
					l = void 0;
				for(l in f) m = c(b.css(a, l)) || 0, k[l] = c(m + f[l] - j[l]);
				b.css(a, k)
			}
			return i
		},
		scrollIntoView: function(h, f, g, j) {
			var k,
				m, l, o;
			if(l = b.get(h)) {
				f && (f = b.get(f));
				f || (f = l.ownerDocument);
				f.nodeType == e.DOCUMENT_NODE && (f = d(f));
				a.isPlainObject(g) && (j = g.allowHorizontalScroll, o = g.onlyScrollIfNeeded, g = g.alignWithTop);
				j = j === i ? !0 : j;
				m = !!d(f);
				var h = b.offset(l),
					q = b.outerHeight(l);
				k = b.outerWidth(l);
				var r, C, I, z;
				m ? (m = f, r = b.height(m), C = b.width(m), z = {
					left: b.scrollLeft(m),
					top: b.scrollTop(m)
				}, m = h[n] - z[n], l = h[p] - z[p], k = h[n] + k - (z[n] + C), h = h[p] + q - (z[p] + r)) : (r = b.offset(f), C = f.clientHeight, I = f.clientWidth, z = {
						left: b.scrollLeft(f),
						top: b.scrollTop(f)
					},
					m = h[n] - (r[n] + (c(b.css(f, "borderLeftWidth")) || 0)), l = h[p] - (r[p] + (c(b.css(f, "borderTopWidth")) || 0)), k = h[n] + k - (r[n] + I + (c(b.css(f, "borderRightWidth")) || 0)), h = h[p] + q - (r[p] + C + (c(b.css(f, "borderBottomWidth")) || 0)));
				if(o) {
					if(0 > l || 0 < h) !0 === g ? b.scrollTop(f, z.top + l) : !1 === g ? b.scrollTop(f, z.top + h) : 0 > l ? b.scrollTop(f, z.top + l) : b.scrollTop(f, z.top + h)
				} else(g = g === i ? !0 : !!g) ? b.scrollTop(f, z.top + l) : b.scrollTop(f, z.top + h);
				if(j)
					if(o) {
						if(0 > m || 0 < k) !0 === g ? b.scrollLeft(f, z.left + m) : !1 === g ? b.scrollLeft(f, z.left + k) : 0 > m ? b.scrollLeft(f,
							z.left + m) : b.scrollLeft(f, z.left + k)
					} else(g = g === i ? !0 : !!g) ? b.scrollLeft(f, z.left + m) : b.scrollLeft(f, z.left + k)
			}
		},
		docWidth: 0,
		docHeight: 0,
		viewportHeight: 0,
		viewportWidth: 0,
		scrollTop: 0,
		scrollLeft: 0
	});
	a.each(["Left", "Top"], function(a, c) {
		var h = "scroll" + a;
		b[h] = function(f, g) {
			if(o(f)) return arguments.callee(j, f);
			var f = b.get(f),
				m, k, l, n = d(f);
			n ? g !== i ? (g = parseFloat(g), k = "Left" == a ? g : b.scrollLeft(n), l = "Top" == a ? g : b.scrollTop(n), n.scrollTo(k, l)) : (m = n["page" + (c ? "Y" : "X") + "Offset"], o(m) || (k = n.document, m = k.documentElement[h],
				o(m) || (m = k.body[h]))) : f.nodeType == e.ELEMENT_NODE && (g !== i ? f[h] = parseFloat(g) : m = f[h]);
			return m
		}
	});
	a.each(["Width", "Height"], function(a) {
		b["doc" + a] = function(c) {
			c = b.get(c);
			c = d(c).document;
			return h(c.documentElement["scroll" + a], c.body["scroll" + a], b["viewport" + a](c))
		};
		b["viewport" + a] = function(c) {
			var c = b.get(c),
				h = "client" + a,
				c = d(c).document,
				e = c.body,
				f = c.documentElement[h];
			return "CSS1Compat" === c.compatMode && f || e && e[h] || f
		}
	});
	return b
}, {
	requires: ["./api"]
});
KISSY.add("dom/base/selector", function(a, b, i) {
	function k(a) {
		var b, c;
		for(c = 0; c < this.length && !(b = this[c], !1 === a(b, c)); c++);
	}

	function g(d, h) {
		var e, f, m = "string" == typeof d,
			o = h === i && (f = 1) ? [c] : g(h);
		d ? m ? (d = v(d), f && "body" == d ? e = [c.body] : 1 == o.length && d && (e = l(d, o[0]))) : f && (e = d.nodeType || d.setTimeout ? [d] : d.getDOMNodes ? d.getDOMNodes() : p(d) ? d : q(d) ? a.makeArray(d) : [d]) : e = [];
		if(!e && (e = [], d)) {
			for(f = 0; f < o.length; f++) t.apply(e, j(d, o[f]));
			1 < e.length && (1 < o.length || m && -1 < d.indexOf(u)) && b.unique(e)
		}
		e.each = k;
		return e
	}

	function j(b,
		c) {
		var d = "string" == typeof b;
		if(d && b.match(w) || !d) d = e(b, c);
		else if(d && -1 < b.replace(/"(?:(?:\\.)|[^"])*"/g, "").replace(/'(?:(?:\\.)|[^'])*'/g, "").indexOf(u)) {
			var d = [],
				h, f = b.split(/\s*,\s*/);
			for(h = 0; h < f.length; h++) t.apply(d, j(f[h], c))
		} else d = [], (h = a.require("sizzle")) && h(b, c, d);
		return d
	}

	function l(a, c) {
		var h, e, g, j;
		if(x.test(a)) h = (e = f(a.slice(1), c)) ? [e] : [];
		else if(g = w.exec(a)) {
			e = g[1];
			j = g[2];
			g = g[3];
			if(c = e ? f(e, c) : c) g ? !e || -1 != a.indexOf(s) ? h = [].concat(b._getElementsByClassName(g, j, c)) : (e = f(e, c), d(e, g) && (h = [e])) : j && (h = o(b._getElementsByTagName(j, c)));
			h = h || []
		}
		return h
	}

	function e(a, d) {
		var h;
		"string" == typeof a ? h = l(a, d) || [] : p(a) || q(a) ? h = n(a, function(a) {
			return !a ? !1 : d == c ? !0 : b._contains(d, a)
		}) : (!a ? 0 : d == c || b._contains(d, a)) && (h = [a]);
		return h
	}

	function f(a, c) {
		var d = c.nodeType == m.DOCUMENT_NODE;
		return b._getElementById(a, c, d ? c : c.ownerDocument, d)
	}

	function d(a, b) {
		var c = a && a.className;
		return c && -1 < (s + c + s).indexOf(s + b + s)
	}

	function h(a, b) {
		var c = a && a.getAttributeNode(b);
		return c && c.nodeValue
	}
	var c = a.Env.host.document,
		m = b.NodeType,
		n = a.filter,
		p = a.isArray,
		o = a.makeArray,
		q = b._isNodeList,
		r = b.nodeName,
		t = Array.prototype.push,
		s = " ",
		u = ",",
		v = a.trim,
		x = /^#[\w-]+$/,
		w = /^(?:#([\w-]+))?\s*([\w-]+|\*)?\.?([\w-]+)?$/;
	a.mix(b, {
		_getAttr: h,
		_hasSingleClass: d,
		_getElementById: function(a, c, d, h) {
			var e = d.getElementById(a),
				f = b._getAttr(e, "id");
			return !e && !h && !b._contains(d, c) || e && f != a ? b.filter("*", "#" + a, c)[0] || null : h || e && b._contains(c, e) ? e : null
		},
		_getElementsByTagName: function(a, b) {
			return b.getElementsByTagName(a)
		},
		_getElementsByClassName: function(a,
			b, c) {
			return o(c.querySelectorAll((b || "") + "." + a))
		},
		_compareNodeOrder: function(a, b) {
			return !a.compareDocumentPosition || !b.compareDocumentPosition ? a.compareDocumentPosition ? -1 : 1 : a.compareDocumentPosition(b) & 4 ? -1 : 1
		},
		query: g,
		get: function(a, b) {
			return g(a, b)[0] || null
		},
		unique: function() {
			function a(d, h) {
				return d == h ? (c = !0, 0) : b._compareNodeOrder(d, h)
			}
			var c, d = !0;
			[0, 0].sort(function() {
				d = !1;
				return 0
			});
			return function(b) {
				c = d;
				b.sort(a);
				if(c)
					for(var h = 1, e = b.length; h < e;) b[h] === b[h - 1] ? b.splice(h, 1) : h++;
				return b
			}
		}(),
		filter: function(b, c, e) {
			var b = g(b, e),
				e = a.require("sizzle"),
				f, j, i, m, k = [];
			if("string" == typeof c && (c = v(c)) && (f = w.exec(c))) i = f[1], j = f[2], m = f[3], i ? i && !j && !m && (c = function(a) {
				return h(a, "id") == i
			}) : c = function(a) {
				var b = !0,
					c = !0;
				j && (b = r(a) == j.toLowerCase());
				m && (c = d(a, m));
				return c && b
			};
			a.isFunction(c) ? k = a.filter(b, c) : c && e && (k = e.matches(c, b));
			return k
		},
		test: function(a, c, d) {
			a = g(a, d);
			return a.length && b.filter(a, c, d).length === a.length
		}
	});
	return b
}, {
	requires: ["./api"]
});
KISSY.add("dom/base/style", function(a, b, i) {
	function k(a) {
		return a.replace(t, "ms-").replace(s, u)
	}

	function g(a, b, c) {
		var d = {},
			h;
		for(h in b) d[h] = a[m][h], a[m][h] = b[h];
		c.call(a);
		for(h in b) a[m][h] = d[h]
	}

	function j(a, b, c) {
		var d, h, e;
		if(3 === a.nodeType || 8 === a.nodeType || !(d = a[m])) return i;
		b = k(b);
		e = A[b];
		b = y[b] || b;
		if(c !== i) {
			null === c || c === x ? c = x : !isNaN(Number(c)) && !r[b] && (c += w);
			e && e.set && (c = e.set(a, c));
			if(c !== i) {
				try {
					d[b] = c
				} catch(f) {}
				c === x && d.removeAttribute && d.removeAttribute(b)
			}
			d.cssText || a.removeAttribute("style");
			return i
		}
		if(!e || !("get" in e && (h = e.get(a, !1)) !== i)) h = d[b];
		return h === i ? "" : h
	}

	function l(a) {
		var b, c = arguments;
		0 !== a.offsetWidth ? b = e.apply(i, c) : g(a, D, function() {
			b = e.apply(i, c)
		});
		return b
	}

	function e(c, d, h) {
		if(a.isWindow(c)) return d == p ? b.viewportWidth(c) : b.viewportHeight(c);
		if(9 == c.nodeType) return d == p ? b.docWidth(c) : b.docHeight(c);
		var e = d === p ? ["Left", "Right"] : ["Top", "Bottom"],
			f = d === p ? c.offsetWidth : c.offsetHeight;
		if(0 < f) return "border" !== h && a.each(e, function(a) {
			h || (f -= parseFloat(b.css(c, "padding" + a)) || 0);
			f = "margin" === h ? f + (parseFloat(b.css(c, h + a)) || 0) : f - (parseFloat(b.css(c, "border" + a + "Width")) || 0)
		}), f;
		f = b._getComputedStyle(c, d);
		if(null == f || 0 > Number(f)) f = c.style[d] || 0;
		f = parseFloat(f) || 0;
		h && a.each(e, function(a) {
			f += parseFloat(b.css(c, "padding" + a)) || 0;
			"padding" !== h && (f += parseFloat(b.css(c, "border" + a + "Width")) || 0);
			"margin" === h && (f += parseFloat(b.css(c, h + a)) || 0)
		});
		return f
	}
	var f = a.Env.host,
		d = a.UA,
		h = b.nodeName,
		c = f.document,
		m = "style",
		n = /^margin/,
		p = "width",
		o = "display" + a.now(),
		q = parseInt,
		r = {
			fillOpacity: 1,
			fontWeight: 1,
			lineHeight: 1,
			opacity: 1,
			orphans: 1,
			widows: 1,
			zIndex: 1,
			zoom: 1
		},
		t = /^-ms-/,
		s = /-([a-z])/ig,
		u = function(a, b) {
			return b.toUpperCase()
		},
		v = /([A-Z]|^ms)/g,
		x = "",
		w = "px",
		A = {},
		y = {},
		B = {};
	y["float"] = "cssFloat";
	a.mix(b, {
		_camelCase: k,
		_CUSTOM_STYLES: A,
		_cssProps: y,
		_getComputedStyle: function(a, c) {
			var d = "",
				h, e, f, g, j;
			e = a.ownerDocument;
			c = c.replace(v, "-$1").toLowerCase();
			if(h = e.defaultView.getComputedStyle(a, null)) d = h.getPropertyValue(c) || h[c];
			"" === d && !b.contains(e, a) && (c = y[c] || c, d = a[m][c]);
			b._RE_NUM_NO_PX.test(d) && n.test(c) &&
				(j = a.style, e = j.width, f = j.minWidth, g = j.maxWidth, j.minWidth = j.maxWidth = j.width = d, d = h.width, j.width = e, j.minWidth = f, j.maxWidth = g);
			return d
		},
		style: function(c, d, h) {
			var c = b.query(c),
				e, f = c[0];
			if(a.isPlainObject(d)) {
				for(e in d)
					for(f = c.length - 1; 0 <= f; f--) j(c[f], e, d[e]);
				return i
			}
			if(h === i) return e = "", f && (e = j(f, d, h)), e;
			for(f = c.length - 1; 0 <= f; f--) j(c[f], d, h);
			return i
		},
		css: function(c, d, h) {
			var c = b.query(c),
				e = c[0],
				f;
			if(a.isPlainObject(d)) {
				for(f in d)
					for(e = c.length - 1; 0 <= e; e--) j(c[e], f, d[f]);
				return i
			}
			d = k(d);
			f = A[d];
			if(h ===
				i) {
				h = "";
				if(e && (!f || !("get" in f && (h = f.get(e, !0)) !== i))) h = b._getComputedStyle(e, d);
				return h === i ? "" : h
			}
			for(e = c.length - 1; 0 <= e; e--) j(c[e], d, h);
			return i
		},
		show: function(a) {
			var a = b.query(a),
				d, h, e;
			for(e = a.length - 1; 0 <= e; e--)
				if(h = a[e], h[m].display = b.data(h, o) || x, "none" === b.css(h, "display")) {
					d = h.tagName.toLowerCase();
					var f = void 0,
						g = B[d],
						j = void 0;
					B[d] || (f = c.body || c.documentElement, j = c.createElement(d), b.prepend(j, f), g = b.css(j, "display"), f.removeChild(j), B[d] = g);
					d = g;
					b.data(h, o, d);
					h[m].display = d
				}
		},
		hide: function(a) {
			var a =
				b.query(a),
				c, d;
			for(d = a.length - 1; 0 <= d; d--) {
				c = a[d];
				var h = c[m],
					e = h.display;
				"none" !== e && (e && b.data(c, o, e), h.display = "none")
			}
		},
		toggle: function(a) {
			var a = b.query(a),
				c, d;
			for(d = a.length - 1; 0 <= d; d--) c = a[d], "none" === b.css(c, "display") ? b.show(c) : b.hide(c)
		},
		addStyleSheet: function(a, c, d) {
			a = a || f;
			"string" == typeof a && (d = c, c = a, a = f);
			var a = b.get(a),
				a = b.getWindow(a).document,
				h;
			if(d && (d = d.replace("#", x))) h = b.get("#" + d, a);
			h || (h = b.create("<style>", {
					id: d
				}, a), b.get("head", a).appendChild(h), h.styleSheet ? h.styleSheet.cssText =
				c : h.appendChild(a.createTextNode(c)))
		},
		unselectable: function(c) {
			var c = b.query(c),
				e, f, g = 0,
				j, i;
			for(f = c.length - 1; 0 <= f; f--)
				if(e = c[f], d.gecko) e[m].MozUserSelect = "none";
				else if(d.webkit) e[m].KhtmlUserSelect = "none";
			else if(d.ie || d.opera) {
				i = e.getElementsByTagName("*");
				e.setAttribute("unselectable", "on");
				for(j = ["iframe", "textarea", "input", "select"]; e = i[g++];) a.inArray(h(e), j) || e.setAttribute("unselectable", "on")
			}
		},
		innerWidth: 0,
		innerHeight: 0,
		outerWidth: 0,
		outerHeight: 0,
		width: 0,
		height: 0
	});
	a.each([p, "height"],
		function(c) {
			b["inner" + a.ucfirst(c)] = function(a) {
				return(a = b.get(a)) && l(a, c, "padding")
			};
			b["outer" + a.ucfirst(c)] = function(a, d) {
				var h = b.get(a);
				return h && l(h, c, d ? "margin" : "border")
			};
			b[c] = function(a, d) {
				var h = b.css(a, c, d);
				h && (h = parseFloat(h));
				return h
			}
		});
	var D = {
		position: "absolute",
		visibility: "hidden",
		display: "block"
	};
	a.each(["height", "width"], function(a) {
		A[a] = {
			get: function(b, c) {
				return c ? l(b, a) + "px" : i
			}
		}
	});
	a.each(["left", "top"], function(h) {
		A[h] = {
			get: function(e, f) {
				var g;
				if(f && (g = b._getComputedStyle(e, h), "auto" ===
						g)) {
					g = 0;
					if(a.inArray(b.css(e, "position"), ["absolute", "fixed"])) {
						g = e["left" === h ? "offsetLeft" : "offsetTop"];
						if(d.ie && 9 > (c.documentMode || 0) || d.opera) g -= e.offsetParent && e.offsetParent["client" + ("left" == h ? "Left" : "Top")] || 0;
						g -= q(b.css(e, "margin-" + h)) || 0
					}
					g += "px"
				}
				return g
			}
		}
	});
	return b
}, {
	requires: ["./api"]
});
KISSY.add("dom/base/traversal", function(a, b, i) {
	function k(e, f, d, h, c, j, k) {
		if(!(e = b.get(e))) return null;
		if(0 === f) return e;
		j || (e = e[d]);
		if(!e) return null;
		c = c && b.get(c) || null;
		f === i && (f = 1);
		var j = [],
			p = a.isArray(f),
			o, q;
		a.isNumber(f) && (o = 0, q = f, f = function() {
			return ++o === q
		});
		for(; e && e != c;) {
			if((e.nodeType == l.ELEMENT_NODE || e.nodeType == l.TEXT_NODE && k) && g(e, f) && (!h || h(e)))
				if(j.push(e), !p) break;
			e = e[d]
		}
		return p ? j : j[0] || null
	}

	function g(e, f) {
		if(!f) return !0;
		if(a.isArray(f)) {
			var d, h = f.length;
			if(!h) return !0;
			for(d = 0; d < h; d++)
				if(b.test(e,
						f[d])) return !0
		} else if(b.test(e, f)) return !0;
		return !1
	}

	function j(e, f, d, h) {
		var c = [],
			g, j;
		if((g = e = b.get(e)) && d) g = e.parentNode;
		if(g) {
			d = a.makeArray(g.childNodes);
			for(g = 0; g < d.length; g++) j = d[g], (h || j.nodeType == l.ELEMENT_NODE) && j != e && c.push(j);
			f && (c = b.filter(c, f))
		}
		return c
	}
	var l = b.NodeType;
	a.mix(b, {
		_contains: function(a, b) {
			return !!(a.compareDocumentPosition(b) & 16)
		},
		closest: function(a, b, d, h) {
			return k(a, b, "parentNode", function(a) {
				return a.nodeType != l.DOCUMENT_FRAGMENT_NODE
			}, d, !0, h)
		},
		parent: function(a, b, d) {
			return k(a,
				b, "parentNode",
				function(a) {
					return a.nodeType != l.DOCUMENT_FRAGMENT_NODE
				}, d, i)
		},
		first: function(a, f, d) {
			a = b.get(a);
			return k(a && a.firstChild, f, "nextSibling", i, i, !0, d)
		},
		last: function(a, f, d) {
			a = b.get(a);
			return k(a && a.lastChild, f, "previousSibling", i, i, !0, d)
		},
		next: function(a, b, d) {
			return k(a, b, "nextSibling", i, i, i, d)
		},
		prev: function(a, b, d) {
			return k(a, b, "previousSibling", i, i, i, d)
		},
		siblings: function(a, b, d) {
			return j(a, b, !0, d)
		},
		children: function(a, b) {
			return j(a, b, i)
		},
		contents: function(a, b) {
			return j(a, b, i, 1)
		},
		contains: function(a,
			f) {
			a = b.get(a);
			f = b.get(f);
			return a && f ? b._contains(a, f) : !1
		},
		index: function(e, f) {
			var d = b.query(e),
				h, c = 0;
			h = d[0];
			if(!f) {
				d = h && h.parentNode;
				if(!d) return -1;
				for(; h = h.previousSibling;) h.nodeType == l.ELEMENT_NODE && c++;
				return c
			}
			c = b.query(f);
			return "string" === typeof f ? a.indexOf(h, c) : a.indexOf(c[0], d)
		},
		equals: function(a, f) {
			a = b.query(a);
			f = b.query(f);
			if(a.length != f.length) return !1;
			for(var d = a.length; 0 <= d; d--)
				if(a[d] != f[d]) return !1;
			return !0
		}
	});
	return b
}, {
	requires: ["./api"]
});
KISSY.add("dom/ie/attr", function(a, b) {
	var i = b._attrHooks,
		k = b._attrNodeHook,
		g = b.NodeType,
		j = b._valHooks,
		l = b._propFix;
	if(8 > (document.documentMode || a.UA.ie)) i.style.set = function(a, b) {
		a.style.cssText = b
	}, a.mix(k, {
		get: function(a, b) {
			var d = a.getAttributeNode(b);
			return d && (d.specified || d.nodeValue) ? d.nodeValue : void 0
		},
		set: function(a, b, d) {
			var h = a.getAttributeNode(d),
				c;
			if(h) h.nodeValue = b;
			else try {
				c = a.ownerDocument.createAttribute(d), c.value = b, a.setAttributeNode(c)
			} catch(g) {
				return a.setAttribute(d, b, 0)
			}
		}
	}), a.mix(b._attrFix,
		l), i.tabIndex = i.tabindex, a.each("href,src,width,height,colSpan,rowSpan".split(","), function(a) {
		i[a] = {
			get: function(b) {
				b = b.getAttribute(a, 2);
				return b === null ? void 0 : b
			}
		}
	}), j.button = i.value = k, j.option = {
		get: function(a) {
			var b = a.attributes.value;
			return !b || b.specified ? a.value : a.text
		}
	};
	(i.href = i.href || {}).set = function(a, b, d) {
		for(var h = a.childNodes, c, j = h.length, i = 0 < j, j = j - 1; 0 <= j; j--) h[j].nodeType != g.TEXT_NODE && (i = 0);
		i && (c = a.ownerDocument.createElement("b"), c.style.display = "none", a.appendChild(c));
		a.setAttribute(d,
			"" + b);
		c && a.removeChild(c)
	};
	return b
}, {
	requires: ["dom/base"]
});
KISSY.add("dom/ie/create", function(a, b) {
	var i = document.documentMode || a.UA.ie;
	b._fixCloneAttributes = function(a, e) {
		e.clearAttributes && e.clearAttributes();
		e.mergeAttributes && e.mergeAttributes(a);
		var f = e.nodeName.toLowerCase(),
			d = a.childNodes;
		if("object" === f && !e.childNodes.length)
			for(f = 0; f < d.length; f++) e.appendChild(d[f].cloneNode(!0));
		else if("input" === f && ("checkbox" === a.type || "radio" === a.type)) {
			if(a.checked && (e.defaultChecked = e.checked = a.checked), e.value !== a.value) e.value = a.value
		} else if("option" ===
			f) e.selected = a.defaultSelected;
		else if("input" === f || "textarea" === f) e.defaultValue = a.defaultValue;
		e.removeAttribute(b.__EXPANDO)
	};
	var k = b._creators,
		g = b._defaultCreator,
		j = /<tbody/i;
	8 > i && (k.table = function(i, e) {
		var f = g(i, e);
		if(j.test(i)) return f;
		var d = f.firstChild,
			h = a.makeArray(d.childNodes);
		a.each(h, function(a) {
			"tbody" == b.nodeName(a) && !a.childNodes.length && d.removeChild(a)
		});
		return f
	})
}, {
	requires: ["dom/base"]
});
KISSY.add("dom/ie", function(a, b) {
	return b
}, {
	requires: "./ie/attr,./ie/create,./ie/insertion,./ie/selector,./ie/style,./ie/traversal,./ie/input-selection".split(",")
});
KISSY.add("dom/ie/input-selection", function(a, b) {
	function i(a, b) {
		var d = 0,
			h = 0,
			c = a.ownerDocument.selection.createRange(),
			g = k(a);
		g.inRange(c) && (g.setEndPoint("EndToStart", c), d = j(a, g).length, b && (h = d + j(a, c).length));
		return [d, h]
	}

	function k(a) {
		if("textarea" == a.type) {
			var b = a.document.body.createTextRange();
			b.moveToElementText(a);
			return b
		}
		return a.createTextRange()
	}

	function g(a, b, d) {
		var h = Math.min(b, d),
			c = Math.max(b, d);
		return h == c ? 0 : "textarea" == a.type ? (a = a.value.substring(h, c).replace(/\r\n/g, "\n").length,
			b > d && (a = -a), a) : d - b
	}

	function j(a, b) {
		if("textarea" == a.type) {
			var d = b.text,
				h = b.duplicate();
			if(0 == h.compareEndPoints("StartToEnd", h)) return d;
			h.moveEnd("character", -1);
			h.text == d && (d += "\r\n");
			return d
		}
		return b.text
	}
	var l = b._propHooks;
	l.selectionStart = {
		set: function(a, b) {
			var d = a.ownerDocument.selection.createRange();
			if(k(a).inRange(d)) {
				var h = i(a, 1)[1],
					c = g(a, b, h);
				d.collapse(!1);
				d.moveStart("character", -c);
				b > h && d.collapse(!0);
				d.select()
			}
		},
		get: function(a) {
			return i(a)[0]
		}
	};
	l.selectionEnd = {
		set: function(a, b) {
			var d =
				a.ownerDocument.selection.createRange();
			if(k(a).inRange(d)) {
				var h = i(a)[0],
					c = g(a, h, b);
				d.collapse(!0);
				d.moveEnd("character", c);
				h > b && d.collapse(!1);
				d.select()
			}
		},
		get: function(a) {
			return i(a, 1)[1]
		}
	}
}, {
	requires: ["dom/base"]
});
KISSY.add("dom/ie/insertion", function(a, b) {
	if(8 > (document.documentMode || a.UA.ie)) b._fixInsertionChecked = function k(a) {
		for(var j = 0; j < a.length; j++) {
			var l = a[j];
			if(l.nodeType == b.NodeType.DOCUMENT_FRAGMENT_NODE) k(l.childNodes);
			else if("input" == b.nodeName(l)) {
				if("checkbox" === l.type || "radio" === l.type) l.defaultChecked = l.checked
			} else if(l.nodeType == b.NodeType.ELEMENT_NODE)
				for(var l = l.getElementsByTagName("input"), e = 0; e < l.length; e++) k(l[e])
		}
	}
}, {
	requires: ["dom/base"]
});
KISSY.add("dom/ie/selector", function(a, b) {
	var i = a.Env.host.document;
	b._compareNodeOrder = function(a, b) {
		return a.sourceIndex - b.sourceIndex
	};
	i.querySelectorAll || (b._getElementsByClassName = function(a, g, j) {
		if(!j) return [];
		for(var g = j.getElementsByTagName(g || "*"), j = [], i = 0, e = 0, f = g.length, d; i < f; ++i) d = g[i], b._hasSingleClass(d, a) && (j[e++] = d);
		return j
	});
	b._getElementsByTagName = function(b, g) {
		var j = a.makeArray(g.getElementsByTagName(b)),
			i, e, f, d;
		if(b === "*") {
			i = [];
			for(f = e = 0; d = j[e++];) d.nodeType === 1 && (i[f++] = d);
			j =
				i
		}
		return j
	}
}, {
	requires: ["dom/base"]
});
KISSY.add("dom/ie/style", function(a, b) {
	var i = b._cssProps,
		k = document.documentMode || a.UA.ie,
		g = a.Env.host.document,
		g = g && g.documentElement,
		j = /^(top|right|bottom|left)$/,
		l = b._CUSTOM_STYLES,
		e = /opacity\s*=\s*([^)]*)/,
		f = /alpha\([^)]*\)/i;
	i["float"] = "styleFloat";
	l.backgroundPosition = {
		get: function(a, b) {
			return b ? a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY : a.style.backgroundPosition
		}
	};
	try {
		null == g.style.opacity && (l.opacity = {
			get: function(a, b) {
				return e.test((b && a.currentStyle ? a.currentStyle.filter :
					a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
			},
			set: function(b, d) {
				var d = parseFloat(d),
					h = b.style,
					e = b.currentStyle,
					g = isNaN(d) ? "" : "alpha(opacity=" + 100 * d + ")",
					j = a.trim(e && e.filter || h.filter || "");
				h.zoom = 1;
				if((1 <= d || !g) && !a.trim(j.replace(f, "")))
					if(h.removeAttribute("filter"), !g || e && !e.filter) return;
				h.filter = f.test(j) ? j.replace(f, g) : j + (j ? ", " : "") + g
			}
		})
	} catch(d) {}
	var k = 8 == k,
		h = {};
	h.thin = k ? "1px" : "2px";
	h.medium = k ? "3px" : "4px";
	h.thick = k ? "5px" : "6px";
	a.each(["", "Top", "Left", "Right", "Bottom"], function(a) {
		var b =
			"border" + a + "Width",
			d = "border" + a + "Style";
		l[b] = {
			get: function(a, c) {
				var f = c ? a.currentStyle : 0,
					e = f && "" + f[b] || void 0;
				e && 0 > e.indexOf("px") && (e = h[e] && "none" !== f[d] ? h[e] : 0);
				return e
			}
		}
	});
	b._getComputedStyle = function(a, d) {
		var d = i[d] || d,
			h = a.currentStyle && a.currentStyle[d];
		if(b._RE_NUM_NO_PX.test(h) && !j.test(d)) {
			var e = a.style,
				f = e.left,
				g = a.runtimeStyle.left;
			a.runtimeStyle.left = a.currentStyle.left;
			e.left = "fontSize" === d ? "1em" : h || 0;
			h = e.pixelLeft + "px";
			e.left = f;
			a.runtimeStyle.left = g
		}
		return "" === h ? "auto" : h
	}
}, {
	requires: ["dom/base"]
});
KISSY.add("dom/ie/traversal", function(a, b) {
	b._contains = function(a, k) {
		a.nodeType == b.NodeType.DOCUMENT_NODE && (a = a.documentElement);
		k = k.parentNode;
		return a == k ? !0 : k && k.nodeType == b.NodeType.ELEMENT_NODE ? a.contains && a.contains(k) : !1
	}
}, {
	requires: ["dom/base"]
});
KISSY.add("event/base", function(a, b, i, k, g) {
	return a.Event = {
		_Utils: b,
		_Object: i,
		_Observer: k,
		_ObservableEvent: g
	}
}, {
	requires: ["./base/utils", "./base/object", "./base/observer", "./base/observable"]
});
KISSY.add("event/base/object", function(a) {
	function b() {
		this.timeStamp = a.now()
	}
	var i = function() {
			return !1
		},
		k = function() {
			return !0
		};
	b.prototype = {
		constructor: b,
		isDefaultPrevented: i,
		isPropagationStopped: i,
		isImmediatePropagationStopped: i,
		preventDefault: function() {
			this.isDefaultPrevented = k
		},
		stopPropagation: function() {
			this.isPropagationStopped = k
		},
		stopImmediatePropagation: function() {
			this.isImmediatePropagationStopped = k;
			this.stopPropagation()
		},
		halt: function(a) {
			a ? this.stopImmediatePropagation() : this.stopPropagation();
			this.preventDefault()
		}
	};
	return b
});
KISSY.add("event/base/observable", function(a) {
	function b(b) {
		a.mix(this, b);
		this.reset()
	}
	b.prototype = {
		constructor: b,
		hasObserver: function() {
			return !!this.observers.length
		},
		reset: function() {
			this.observers = []
		},
		removeObserver: function(a) {
			var b, g = this.observers,
				j = g.length;
			for(b = 0; b < j; b++)
				if(g[b] == a) {
					g.splice(b, 1);
					break
				}
			this.checkMemory()
		},
		checkMemory: function() {},
		findObserver: function(a) {
			var b = this.observers,
				g;
			for(g = b.length - 1; 0 <= g; --g)
				if(a.equals(b[g])) return g;
			return -1
		}
	};
	return b
});
KISSY.add("event/base/observer", function(a) {
	function b(b) {
		a.mix(this, b)
	}
	b.prototype = {
		constructor: b,
		equals: function(b) {
			var k = this;
			return !!a.reduce(k.keys, function(a, j) {
				return a && k[j] === b[j]
			}, 1)
		},
		simpleNotify: function(a, b) {
			var g;
			g = this.fn.call(this.context || b.currentTarget, a, this.data);
			this.once && b.removeObserver(this);
			return g
		},
		notifyInternal: function(a, b) {
			return this.simpleNotify(a, b)
		},
		notify: function(a, b) {
			var g;
			g = a._ks_groups;
			if(!g || this.groups && this.groups.match(g)) return g = this.notifyInternal(a,
				b), !1 === g && a.halt(), g
		}
	};
	return b
});
KISSY.add("event/base/utils", function(a) {
	var b, i;
	return {
		splitAndRun: i = function(b, g) {
			b = a.trim(b); - 1 == b.indexOf(" ") ? g(b) : a.each(b.split(/\s+/), g)
		},
		normalizeParam: function(i, g, j) {
			var l = g || {},
				l = a.isFunction(g) ? {
					fn: g,
					context: j
				} : a.merge(l),
				g = b(i),
				i = g[0];
			l.groups = g[1];
			l.type = i;
			return l
		},
		batchForType: function(b, g) {
			var j = a.makeArray(arguments);
			i(j[2 + g], function(a) {
				var e = [].concat(j);
				e.splice(0, 2);
				e[g] = a;
				b.apply(null, e)
			})
		},
		getTypedGroups: b = function(a) {
			if(0 > a.indexOf(".")) return [a, ""];
			var b = a.match(/([^.]+)?(\..+)?$/),
				a = [b[1]];
			(b = b[2]) ? (b = b.split(".").sort(), a.push(b.join("."))) : a.push("");
			return a
		},
		getGroupsRe: function(a) {
			return RegExp(a.split(".").join(".*\\.") + "(?:\\.|$)")
		}
	}
});
KISSY.add("event/custom/api-impl", function(a, b, i, k) {
	var g = a.trim,
		j = i._Utils,
		l = j.splitAndRun;
	return a.mix(b, {
		fire: function(a, b, d) {
			var h = void 0,
				d = d || {};
			l(b, function(b) {
				var f, b = j.getTypedGroups(b);
				f = b[1];
				b = b[0];
				f && (f = j.getGroupsRe(f), d._ks_groups = f);
				f = (k.getCustomEvent(a, b) || new k({
					currentTarget: a,
					type: b
				})).fire(d);
				!1 !== h && (h = f)
			});
			return h
		},
		publish: function(b, f, d) {
			var h;
			l(f, function(c) {
				h = k.getCustomEvent(b, c, 1);
				a.mix(h, d)
			});
			return b
		},
		addTarget: function(e, f) {
			var d = b.getTargets(e);
			a.inArray(f, d) || d.push(f);
			return e
		},
		removeTarget: function(e, f) {
			var d = b.getTargets(e),
				h = a.indexOf(f, d); - 1 != h && d.splice(h, 1);
			return e
		},
		getTargets: function(a) {
			a["__~ks_bubble_targets"] = a["__~ks_bubble_targets"] || [];
			return a["__~ks_bubble_targets"]
		},
		on: function(a, b, d, h) {
			b = g(b);
			j.batchForType(function(b, d, h) {
				d = j.normalizeParam(b, d, h);
				b = d.type;
				if(b = k.getCustomEvent(a, b, 1)) b.on(d)
			}, 0, b, d, h);
			return a
		},
		detach: function(b, f, d, h) {
			f = g(f);
			j.batchForType(function(c, d, h) {
				var f = j.normalizeParam(c, d, h);
				(c = f.type) ? (c = k.getCustomEvent(b, c, 1)) &&
				c.detach(f): (c = k.getCustomEvents(b), a.each(c, function(a) {
					a.detach(f)
				}))
			}, 0, f, d, h);
			return b
		}
	})
}, {
	requires: ["./api", "event/base", "./observable"]
});
KISSY.add("event/custom/api", function() {
	return {}
});
KISSY.add("event/custom", function(a, b, i, k) {
	var g = {};
	a.each(i, function(b, i) {
		g[i] = function() {
			var e = a.makeArray(arguments);
			e.unshift(this);
			return b.apply(null, e)
		}
	});
	i = a.mix({
		_ObservableCustomEvent: k,
		Target: g
	}, i);
	a.mix(b, {
		Target: g,
		custom: i
	});
	a.EventTarget = g;
	return i
}, {
	requires: ["./base", "./custom/api-impl", "./custom/observable"]
});
KISSY.add("event/custom/object", function(a, b) {
	function i(b) {
		i.superclass.constructor.call(this);
		a.mix(this, b)
	}
	a.extend(i, b._Object);
	return i
}, {
	requires: ["event/base"]
});
KISSY.add("event/custom/observable", function(a, b, i, k, g) {
	function j() {
		j.superclass.constructor.apply(this, arguments);
		this.defaultFn = null;
		this.defaultTargetOnly = !1;
		this.bubbles = !0
	}
	var l = g._Utils;
	a.extend(j, g._ObservableEvent, {
		constructor: j,
		on: function(a) {
			a = new i(a); - 1 == this.findObserver(a) && this.observers.push(a)
		},
		checkMemory: function() {
			var b = this.currentTarget,
				d = j.getCustomEvents(b);
			d && (this.hasObserver() || delete d[this.type], a.isEmptyObject(d) && delete b[e])
		},
		fire: function(a) {
			if(this.hasObserver() ||
				this.bubbles) {
				var a = a || {},
					d = this.type,
					h = this.defaultFn,
					c, e, g;
				c = this.currentTarget;
				var i = a,
					l;
				a.type = d;
				i instanceof k || (i.target = c, i = new k(i));
				i.currentTarget = c;
				a = this.notify(i);
				!1 !== l && (l = a);
				if(this.bubbles) {
					g = (e = b.getTargets(c)) && e.length || 0;
					for(c = 0; c < g && !i.isPropagationStopped(); c++) a = b.fire(e[c], d, i), !1 !== l && (l = a)
				}
				h && !i.isDefaultPrevented() && (d = j.getCustomEvent(i.target, i.type), (!this.defaultTargetOnly && !d.defaultTargetOnly || this == i.target) && h.call(this));
				return l
			}
		},
		notify: function(a) {
			var b = this.observers,
				h, c, e = b.length,
				g;
			for(g = 0; g < e && !a.isImmediatePropagationStopped(); g++) h = b[g].notify(a, this), !1 !== c && (c = h), !1 === h && a.halt();
			return c
		},
		detach: function(a) {
			var b, h = a.fn,
				c = a.context,
				e = this.currentTarget,
				g = this.observers,
				a = a.groups;
			if(g.length) {
				a && (b = l.getGroupsRe(a));
				var j, i, k, r, t = g.length;
				if(h || b) {
					c = c || e;
					j = a = 0;
					for(i = []; a < t; ++a)
						if(k = g[a], r = k.context || e, c != r || h && h != k.fn || b && !k.groups.match(b)) i[j++] = k;
					this.observers = i
				} else this.reset();
				this.checkMemory()
			}
		}
	});
	var e = "__~ks_custom_events";
	j.getCustomEvent =
		function(a, b, h) {
			var c, e = j.getCustomEvents(a, h);
			c = e && e[b];
			!c && h && (c = e[b] = new j({
				currentTarget: a,
				type: b
			}));
			return c
		};
	j.getCustomEvents = function(a, b) {
		!a[e] && b && (a[e] = {});
		return a[e]
	};
	return j
}, {
	requires: ["./api", "./observer", "./object", "event/base"]
});
KISSY.add("event/custom/observer", function(a, b) {
	function i() {
		i.superclass.constructor.apply(this, arguments)
	}
	a.extend(i, b._Observer, {
		keys: ["fn", "context", "groups"]
	});
	return i
}, {
	requires: ["event/base"]
});
KISSY.add("event/dom/base/api", function(a, b, i, k, g, j, l) {
	function e(a, b) {
		var d = k[b] || {};
		a.originalType || (a.selector ? d.delegateFix && (a.originalType = b, b = d.delegateFix) : d.onFix && (a.originalType = b, b = d.onFix));
		return b
	}

	function f(b, c, d) {
		var f, g, i, d = a.merge(d),
			c = e(d, c);
		f = j.getCustomEvents(b, 1);
		if(!(i = f.handle)) i = f.handle = function(a) {
				var b = a.type,
					c = i.currentTarget;
				if(!(j.triggeredEvent == b || "undefined" == typeof KISSY))
					if(b = j.getCustomEvent(c, b)) return a.currentTarget = c, a = new l(a), b.notify(a)
			}, i.currentTarget =
			b;
		if(!(g = f.events)) g = f.events = {};
		f = g[c];
		f || (f = g[c] = new j({
			type: c,
			fn: i,
			currentTarget: b
		}), f.setup());
		f.on(d);
		b = null
	}
	var d = b._Utils;
	a.mix(b, {
		add: function(b, c, e, g) {
			c = a.trim(c);
			b = i.query(b);
			d.batchForType(function(a, b, c, h) {
				c = d.normalizeParam(b, c, h);
				b = c.type;
				for(h = a.length - 1; 0 <= h; h--) f(a[h], b, c)
			}, 1, b, c, e, g);
			return b
		},
		remove: function(b, c, f, g) {
			c = a.trim(c);
			b = i.query(b);
			d.batchForType(function(b, c, h, f) {
				h = d.normalizeParam(c, h, f);
				c = h.type;
				for(f = b.length - 1; 0 <= f; f--) {
					var g = b[f],
						i = c,
						k = h,
						k = a.merge(k),
						l = void 0,
						i =
						e(k, i),
						g = j.getCustomEvents(g),
						l = (g || {}).events;
					if(g && l)
						if(i)(l = l[i]) && l.detach(k);
						else
							for(i in l) l[i].detach(k)
				}
			}, 1, b, c, f, g);
			return b
		},
		delegate: function(a, c, d, e, f) {
			return b.add(a, c, {
				fn: e,
				context: f,
				selector: d
			})
		},
		undelegate: function(a, c, d, e, f) {
			return b.remove(a, c, {
				fn: e,
				context: f,
				selector: d
			})
		},
		fire: function(b, c, e, f) {
			var g = void 0,
				e = e || {};
			e.synthetic = 1;
			d.splitAndRun(c, function(c) {
				e.type = c;
				var k, l, t, c = d.getTypedGroups(c);
				(l = c[1]) && (l = d.getGroupsRe(l));
				c = c[0];
				a.mix(e, {
					type: c,
					_ks_groups: l
				});
				b = i.query(b);
				for(l = b.length - 1; 0 <= l; l--) k = b[l], t = j.getCustomEvent(k, c), !f && !t && (t = new j({
					type: c,
					currentTarget: k
				})), t && (k = t.fire(e, f), !1 !== g && (g = k))
			});
			return g
		},
		fireHandler: function(a, c, d) {
			return b.fire(a, c, d, 1)
		},
		_clone: function(b, c) {
			var d;
			(d = j.getCustomEvents(b)) && a.each(d.events, function(b, d) {
				a.each(b.observers, function(a) {
					f(c, d, a)
				})
			})
		},
		_ObservableDOMEvent: j
	});
	b.on = b.add;
	b.detach = b.remove;
	return b
}, {
	requires: "event/base,dom,./special,./utils,./observable,./object".split(",")
});
KISSY.add("event/dom/base", function(a, b, i, k, g, j) {
	a.mix(b, {
		KeyCodes: i,
		_DOMUtils: k,
		Gesture: g,
		_Special: j
	});
	return b
}, {
	requires: "event/base,./base/key-codes,./base/utils,./base/gesture,./base/special,./base/api,./base/mouseenter,./base/mousewheel,./base/valuechange".split(",")
});
KISSY.add("event/dom/base/gesture", function() {
	return {
		start: "mousedown",
		move: "mousemove",
		end: "mouseup",
		tap: "click",
		doubleTap: "dblclick"
	}
});
KISSY.add("event/dom/base/key-codes", function(a) {
	var b = a.UA,
		i = {
			MAC_ENTER: 3,
			BACKSPACE: 8,
			TAB: 9,
			NUM_CENTER: 12,
			ENTER: 13,
			SHIFT: 16,
			CTRL: 17,
			ALT: 18,
			PAUSE: 19,
			CAPS_LOCK: 20,
			ESC: 27,
			SPACE: 32,
			PAGE_UP: 33,
			PAGE_DOWN: 34,
			END: 35,
			HOME: 36,
			LEFT: 37,
			UP: 38,
			RIGHT: 39,
			DOWN: 40,
			PRINT_SCREEN: 44,
			INSERT: 45,
			DELETE: 46,
			ZERO: 48,
			ONE: 49,
			TWO: 50,
			THREE: 51,
			FOUR: 52,
			FIVE: 53,
			SIX: 54,
			SEVEN: 55,
			EIGHT: 56,
			NINE: 57,
			QUESTION_MARK: 63,
			A: 65,
			B: 66,
			C: 67,
			D: 68,
			E: 69,
			F: 70,
			G: 71,
			H: 72,
			I: 73,
			J: 74,
			K: 75,
			L: 76,
			M: 77,
			N: 78,
			O: 79,
			P: 80,
			Q: 81,
			R: 82,
			S: 83,
			T: 84,
			U: 85,
			V: 86,
			W: 87,
			X: 88,
			Y: 89,
			Z: 90,
			META: 91,
			WIN_KEY_RIGHT: 92,
			CONTEXT_MENU: 93,
			NUM_ZERO: 96,
			NUM_ONE: 97,
			NUM_TWO: 98,
			NUM_THREE: 99,
			NUM_FOUR: 100,
			NUM_FIVE: 101,
			NUM_SIX: 102,
			NUM_SEVEN: 103,
			NUM_EIGHT: 104,
			NUM_NINE: 105,
			NUM_MULTIPLY: 106,
			NUM_PLUS: 107,
			NUM_MINUS: 109,
			NUM_PERIOD: 110,
			NUM_DIVISION: 111,
			F1: 112,
			F2: 113,
			F3: 114,
			F4: 115,
			F5: 116,
			F6: 117,
			F7: 118,
			F8: 119,
			F9: 120,
			F10: 121,
			F11: 122,
			F12: 123,
			NUMLOCK: 144,
			SEMICOLON: 186,
			DASH: 189,
			EQUALS: 187,
			COMMA: 188,
			PERIOD: 190,
			SLASH: 191,
			APOSTROPHE: 192,
			SINGLE_QUOTE: 222,
			OPEN_SQUARE_BRACKET: 219,
			BACKSLASH: 220,
			CLOSE_SQUARE_BRACKET: 221,
			WIN_KEY: 224,
			MAC_FF_META: 224,
			WIN_IME: 229,
			isTextModifyingKeyEvent: function(a) {
				if(a.altKey && !a.ctrlKey || a.metaKey || a.keyCode >= i.F1 && a.keyCode <= i.F12) return !1;
				switch(a.keyCode) {
					case i.ALT:
					case i.CAPS_LOCK:
					case i.CONTEXT_MENU:
					case i.CTRL:
					case i.DOWN:
					case i.END:
					case i.ESC:
					case i.HOME:
					case i.INSERT:
					case i.LEFT:
					case i.MAC_FF_META:
					case i.META:
					case i.NUMLOCK:
					case i.NUM_CENTER:
					case i.PAGE_DOWN:
					case i.PAGE_UP:
					case i.PAUSE:
					case i.PRINT_SCREEN:
					case i.RIGHT:
					case i.SHIFT:
					case i.UP:
					case i.WIN_KEY:
					case i.WIN_KEY_RIGHT:
						return !1;
					default:
						return !0
				}
			},
			isCharacterKey: function(a) {
				if(a >= i.ZERO && a <= i.NINE || a >= i.NUM_ZERO && a <= i.NUM_MULTIPLY || a >= i.A && a <= i.Z || b.webkit && 0 == a) return !0;
				switch(a) {
					case i.SPACE:
					case i.QUESTION_MARK:
					case i.NUM_PLUS:
					case i.NUM_MINUS:
					case i.NUM_PERIOD:
					case i.NUM_DIVISION:
					case i.SEMICOLON:
					case i.DASH:
					case i.EQUALS:
					case i.COMMA:
					case i.PERIOD:
					case i.SLASH:
					case i.APOSTROPHE:
					case i.SINGLE_QUOTE:
					case i.OPEN_SQUARE_BRACKET:
					case i.BACKSLASH:
					case i.CLOSE_SQUARE_BRACKET:
						return !0;
					default:
						return !1
				}
			}
		};
	return i
});
KISSY.add("event/dom/base/mouseenter", function(a, b, i, k) {
	a.each([{
		name: "mouseenter",
		fix: "mouseover"
	}, {
		name: "mouseleave",
		fix: "mouseout"
	}], function(a) {
		k[a.name] = {
			onFix: a.fix,
			delegateFix: a.fix,
			handle: function(a, b, e) {
				var f = a.currentTarget,
					d = a.relatedTarget;
				if(!d || d !== f && !i.contains(f, d)) return [b.simpleNotify(a, e)]
			}
		}
	});
	return b
}, {
	requires: ["./api", "dom", "./special"]
});
KISSY.add("event/dom/base/mousewheel", function(a, b) {
	var i = a.UA.gecko ? "DOMMouseScroll" : "mousewheel";
	b.mousewheel = {
		onFix: i,
		delegateFix: i
	}
}, {
	requires: ["./special"]
});
KISSY.add("event/dom/base/object", function(a, b, i) {
	function k(a) {
		this.scale = this.rotation = this.targetTouches = this.touches = this.changedTouches = this.which = this.wheelDelta = this.view = this.toElement = this.srcElement = this.shiftKey = this.screenY = this.screenX = this.relatedTarget = this.relatedNode = this.prevValue = this.pageY = this.pageX = this.offsetY = this.offsetX = this.newValue = this.metaKey = this.keyCode = this.handler = this.fromElement = this.eventPhase = this.detail = this.data = this.ctrlKey = this.clientY = this.clientX = this.charCode =
			this.cancelable = this.button = this.bubbles = this.attrName = this.attrChange = this.altKey = i;
		k.superclass.constructor.call(this);
		this.originalEvent = a;
		this.isDefaultPrevented = a.defaultPrevented || a.returnValue === f || a.getPreventDefault && a.getPreventDefault() ? function() {
			return e
		} : function() {
			return f
		};
		g(this);
		j(this)
	}

	function g(a) {
		for(var b = a.originalEvent, e = d.length, f, g = b.currentTarget, g = 9 === g.nodeType ? g : g.ownerDocument || l; e;) f = d[--e], a[f] = b[f];
		a.target || (a.target = a.srcElement || g);
		3 === a.target.nodeType && (a.target =
			a.target.parentNode);
		!a.relatedTarget && a.fromElement && (a.relatedTarget = a.fromElement === a.target ? a.toElement : a.fromElement);
		a.pageX === i && a.clientX !== i && (b = g.documentElement, e = g.body, a.pageX = a.clientX + (b && b.scrollLeft || e && e.scrollLeft || 0) - (b && b.clientLeft || e && e.clientLeft || 0), a.pageY = a.clientY + (b && b.scrollTop || e && e.scrollTop || 0) - (b && b.clientTop || e && e.clientTop || 0));
		a.which === i && (a.which = a.charCode === i ? a.keyCode : a.charCode);
		a.metaKey === i && (a.metaKey = a.ctrlKey);
		!a.which && a.button !== i && (a.which = a.button &
			1 ? 1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0)
	}

	function j(b) {
		var c, d, e, f = b.detail;
		b.wheelDelta && (e = b.wheelDelta / 120);
		b.detail && (e = -(0 == f % 3 ? f / 3 : f));
		b.axis !== i && (b.axis === b.HORIZONTAL_AXIS ? (d = 0, c = -1 * e) : b.axis === b.VERTICAL_AXIS && (c = 0, d = e));
		b.wheelDeltaY !== i && (d = b.wheelDeltaY / 120);
		b.wheelDeltaX !== i && (c = -1 * b.wheelDeltaX / 120);
		!c && !d && (d = e);
		(c !== i || d !== i || e !== i) && a.mix(b, {
			deltaY: d,
			delta: e,
			deltaX: c
		})
	}
	var l = a.Env.host.document,
		e = !0,
		f = !1,
		d = "type,altKey,attrChange,attrName,bubbles,button,cancelable,charCode,clientX,clientY,ctrlKey,currentTarget,data,detail,eventPhase,fromElement,handler,keyCode,metaKey,newValue,offsetX,offsetY,pageX,pageY,prevValue,relatedNode,relatedTarget,screenX,screenY,shiftKey,srcElement,target,toElement,view,wheelDelta,which,axis,changedTouches,touches,targetTouches,rotation,scale".split(",");
	a.extend(k, b._Object, {
		constructor: k,
		preventDefault: function() {
			var a = this.originalEvent;
			a.preventDefault ? a.preventDefault() : a.returnValue = f;
			k.superclass.preventDefault.call(this)
		},
		stopPropagation: function() {
			var a = this.originalEvent;
			a.stopPropagation ? a.stopPropagation() : a.cancelBubble = e;
			k.superclass.stopPropagation.call(this)
		}
	});
	return b.DOMEventObject = k
}, {
	requires: ["event/base"]
});
KISSY.add("event/dom/base/observable", function(a, b, i, k, g, j, l) {
	function e(b) {
		a.mix(this, b);
		this.reset()
	}
	var f = l._Utils;
	a.extend(e, l._ObservableEvent, {
		setup: function() {
			var a = this.type,
				b = i[a] || {},
				c = this.currentTarget,
				e = k.data(c).handle;
			(!b.setup || !1 === b.setup.call(c, a)) && k.simpleAdd(c, a, e)
		},
		constructor: e,
		reset: function() {
			e.superclass.reset.call(this);
			this.lastCount = this.delegateCount = 0
		},
		notify: function(a) {
			var h = a.target,
				c = this.currentTarget,
				e = this.observers,
				f = [],
				g, j, i = this.delegateCount || 0,
				l, k;
			if(i &&
				!h.disabled)
				for(; h != c;) {
					l = [];
					for(j = 0; j < i; j++) k = e[j], b.test(h, k.selector) && l.push(k);
					l.length && f.push({
						currentTarget: h,
						currentTargetObservers: l
					});
					h = h.parentNode || c
				}
			f.push({
				currentTarget: c,
				currentTargetObservers: e.slice(i)
			});
			j = 0;
			for(h = f.length; !a.isPropagationStopped() && j < h; ++j) {
				c = f[j];
				l = c.currentTargetObservers;
				c = c.currentTarget;
				a.currentTarget = c;
				for(c = 0; !a.isImmediatePropagationStopped() && c < l.length; c++) e = l[c], e = e.notify(a, this), !1 !== g && (g = e)
			}
			return g
		},
		fire: function(d, h) {
			var d = d || {},
				c = this.type,
				f =
				i[c];
			f && f.onFix && (c = f.onFix);
			var g, l, f = this.currentTarget,
				k = !0;
			d.type = c;
			d instanceof j || (l = d, d = new j({
				currentTarget: f,
				target: f
			}), a.mix(d, l));
			l = f;
			g = b.getWindow(l.ownerDocument || l);
			var q = g.document,
				r = [],
				t = 0,
				s = "on" + c;
			do r.push(l), l = l.parentNode || l.ownerDocument || l === q && g; while (l);
			l = r[t];
			do {
				d.currentTarget = l;
				if(g = e.getCustomEvent(l, c)) g = g.notify(d), !1 !== k && (k = g);
				l[s] && !1 === l[s].call(l) && d.preventDefault();
				l = r[++t]
			} while (!h && l && !d.isPropagationStopped());
			if(!h && !d.isDefaultPrevented()) {
				var u;
				try {
					if(s &&
						f[c] && ("focus" !== c && "blur" !== c || 0 !== f.offsetWidth) && !a.isWindow(f))(u = f[s]) && (f[s] = null), e.triggeredEvent = c, f[c]()
				} catch(v) {}
				u && (f[s] = u);
				e.triggeredEvent = ""
			}
			return k
		},
		on: function(a) {
			var b = this.observers,
				c = i[this.type] || {},
				a = a instanceof g ? a : new g(a); - 1 == this.findObserver(a) && (a.selector ? (b.splice(this.delegateCount, 0, a), this.delegateCount++) : a.last ? (b.push(a), this.lastCount++) : b.splice(b.length - this.lastCount, 0, a), c.add && c.add.call(this.currentTarget, a))
		},
		detach: function(a) {
			var b, c = i[this.type] || {},
				e = "selector" in a,
				g = a.selector,
				j = a.context,
				l = a.fn,
				k = this.currentTarget,
				r = this.observers,
				a = a.groups;
			if(r.length) {
				a && (b = f.getGroupsRe(a));
				var t, s, u, v, x = r.length;
				if(l || e || b) {
					j = j || k;
					t = a = 0;
					for(s = []; a < x; ++a) u = r[a], v = u.context || k, j != v || l && l != u.fn || e && (g && g != u.selector || !g && !u.selector) || b && !u.groups.match(b) ? s[t++] = u : (u.selector && this.delegateCount && this.delegateCount--, u.last && this.lastCount && this.lastCount--, c.remove && c.remove.call(k, u));
					this.observers = s
				} else this.reset();
				this.checkMemory()
			}
		},
		checkMemory: function() {
			var b =
				this.type,
				h, c, e = i[b] || {},
				f = this.currentTarget,
				g = k.data(f);
			if(g && (h = g.events, this.hasObserver() || (c = g.handle, (!e.tearDown || !1 === e.tearDown.call(f, b)) && k.simpleRemove(f, b, c), delete h[b]), a.isEmptyObject(h))) g.handle = null, k.removeData(f)
		}
	});
	e.triggeredEvent = "";
	e.getCustomEvent = function(a, b) {
		var c = k.data(a),
			e;
		c && (e = c.events);
		if(e) return e[b]
	};
	e.getCustomEvents = function(a, b) {
		var c = k.data(a);
		!c && b && k.data(a, c = {});
		return c
	};
	return e
}, {
	requires: "dom,./special,./utils,./observer,./object,event/base".split(",")
});
KISSY.add("event/dom/base/observer", function(a, b, i) {
	function k(a) {
		k.superclass.constructor.apply(this, arguments)
	}
	a.extend(k, i._Observer, {
		keys: "fn,selector,data,context,originalType,groups,last".split(","),
		notifyInternal: function(a, j) {
			var i, e, f = a.type;
			this.originalType && (a.type = this.originalType);
			(i = b[a.type]) && i.handle ? (i = i.handle(a, this, j)) && 0 < i.length && (e = i[0]) : e = this.simpleNotify(a, j);
			a.type = f;
			return e
		}
	});
	return k
}, {
	requires: ["./special", "event/base"]
});
KISSY.add("event/dom/base/special", function() {
	return {}
});
KISSY.add("event/dom/base/utils", function(a, b) {
	var i = a.Env.host.document;
	return {
		simpleAdd: i && i.addEventListener ? function(a, b, j, i) {
			a.addEventListener && a.addEventListener(b, j, !!i)
		} : function(a, b, j) {
			a.attachEvent && a.attachEvent("on" + b, j)
		},
		simpleRemove: i && i.removeEventListener ? function(a, b, j, i) {
			a.removeEventListener && a.removeEventListener(b, j, !!i)
		} : function(a, b, j) {
			a.detachEvent && a.detachEvent("on" + b, j)
		},
		data: function(a, g) {
			return b.data(a, "ksEventTargetId_1.30", g)
		},
		removeData: function(a) {
			return b.removeData(a,
				"ksEventTargetId_1.30")
		}
	}
}, {
	requires: ["dom"]
});
KISSY.add("event/dom/base/valuechange", function(a, b, i, k) {
	function g(a) {
		if(i.hasData(a, p)) {
			var b = i.data(a, p);
			clearTimeout(b);
			i.removeData(a, p)
		}
	}

	function j(a) {
		g(a.target)
	}

	function l(a) {
		var d = a.value,
			h = i.data(a, n);
		d !== h && (b.fireHandler(a, c, {
			prevVal: h,
			newVal: d
		}), i.data(a, n, d))
	}

	function e(a) {
		i.hasData(a, p) || i.data(a, p, setTimeout(function() {
			l(a);
			i.data(a, p, setTimeout(arguments.callee, o))
		}, o))
	}

	function f(a) {
		var b = a.target;
		"focus" == a.type && i.data(b, n, b.value);
		e(b)
	}

	function d(a) {
		l(a.target)
	}

	function h(a) {
		i.removeData(a,
			n);
		g(a);
		b.remove(a, "blur", j);
		b.remove(a, "webkitspeechchange", d);
		b.remove(a, "mousedown keyup keydown focus", f)
	}
	var c = "valuechange",
		m = i.nodeName,
		n = "event/valuechange/history",
		p = "event/valuechange/poll",
		o = 50;
	k[c] = {
		setup: function() {
			var a = m(this);
			if("input" == a || "textarea" == a) h(this), b.on(this, "blur", j), b.on(this, "webkitspeechchange", d), b.on(this, "mousedown keyup keydown focus", f)
		},
		tearDown: function() {
			h(this)
		}
	};
	return b
}, {
	requires: ["./api", "dom", "./special"]
});
KISSY.add("event/dom/focusin", function(a, b) {
	var i = b._Special;
	a.each([{
		name: "focusin",
		fix: "focus"
	}, {
		name: "focusout",
		fix: "blur"
	}], function(k) {
		function g(a) {
			return b.fire(a.target, k.name)
		}
		var j = a.guid("attaches_" + a.now() + "_");
		i[k.name] = {
			setup: function() {
				var a = this.ownerDocument || this;
				j in a || (a[j] = 0);
				a[j] += 1;
				1 === a[j] && a.addEventListener(k.fix, g, !0)
			},
			tearDown: function() {
				var a = this.ownerDocument || this;
				a[j] -= 1;
				0 === a[j] && a.removeEventListener(k.fix, g, !0)
			}
		}
	});
	return b
}, {
	requires: ["event/dom/base"]
});
KISSY.add("event/dom/hashchange", function(a, b, i) {
	var k = a.UA,
		g = b._Special,
		j = a.Env.host,
		l = j.document,
		e = l && l.documentMode,
		f = "__replace_history_" + a.now(),
		k = e || k.ie;
	b.REPLACE_HISTORY = f;
	var d = "<html><head><title>" + (l && l.title || "") + " - {hash}</title>{head}</head><body>{hash}</body></html>",
		h = function() {
			return "#" + (new a.Uri(location.href)).getFragment()
		},
		c, m, n = function() {
			var b = h(),
				d;
			if(d = a.endsWith(b, f)) b = b.slice(0, -f.length), location.hash = b;
			b !== m && (m = b, p(b, d));
			c = setTimeout(n, 50)
		},
		p = k && 8 > k ? function(b, c) {
			var h =
				a.substitute(d, {
					hash: a.escapeHTML(b),
					head: i.isCustomDomain() ? "<script>document.domain = '" + l.domain + "';<\/script>" : ""
				}),
				e = r.contentWindow.document;
			try {
				c ? e.open("text/html", "replace") : e.open(), e.write(h), e.close()
			} catch(f) {}
		} : function() {
			b.fireHandler(j, "hashchange")
		},
		o = function() {
			c || n()
		},
		q = function() {
			c && clearTimeout(c);
			c = 0
		},
		r;
	k && 8 > k && (o = function() {
		if(!r) {
			var c = i.getEmptyIframeSrc();
			r = i.create("<iframe " + (c ? 'src="' + c + '"' : "") + ' style="display: none" height="0" width="0" tabindex="-1" title="empty"/>');
			i.prepend(r, l.documentElement);
			b.add(r, "load", function() {
				b.remove(r, "load");
				p(h());
				b.add(r, "load", d);
				n()
			});
			l.onpropertychange = function() {
				try {
					"title" === event.propertyName && (r.contentWindow.document.title = l.title + " - " + h())
				} catch(a) {}
			};
			var d = function() {
				var c = a.trim(r.contentWindow.document.body.innerText),
					d = h();
				c != d && (m = location.hash = c);
				b.fireHandler(j, "hashchange")
			}
		}
	}, q = function() {
		c && clearTimeout(c);
		c = 0;
		b.detach(r);
		i.remove(r);
		r = 0
	});
	g.hashchange = {
		setup: function() {
			if(this === j) {
				m = h();
				o()
			}
		},
		tearDown: function() {
			this ===
				j && q()
		}
	}
}, {
	requires: ["event/dom/base", "dom"]
});
KISSY.add("event/dom/ie/change", function(a, b, i) {
	function k(a) {
		a = a.type;
		return "checkbox" == a || "radio" == a
	}

	function g(a) {
		"checked" == a.originalEvent.propertyName && (this.__changed = 1)
	}

	function j(a) {
		this.__changed && (this.__changed = 0, b.fire(this, "change", a))
	}

	function l(a) {
		a = a.target;
		f.test(a.nodeName) && !a.__changeHandler && (a.__changeHandler = 1, b.on(a, "change", {
			fn: e,
			last: 1
		}))
	}

	function e(a) {
		if(!a.isPropagationStopped() && !k(this)) {
			var h;
			(h = this.parentNode) && b.fire(h, "change", a)
		}
	}
	var f = /^(?:textarea|input|select)$/i;
	b._Special.change = {
		setup: function() {
			if(f.test(this.nodeName))
				if(k(this)) b.on(this, "propertychange", g), b.on(this, "click", j);
				else return !1;
			else b.on(this, "beforeactivate", l)
		},
		tearDown: function() {
			if(f.test(this.nodeName))
				if(k(this)) b.remove(this, "propertychange", g), b.remove(this, "click", j);
				else return !1;
			else b.remove(this, "beforeactivate", l), a.each(i.query("textarea,input,select", this), function(a) {
				a.__changeHandler && (a.__changeHandler = 0, b.remove(a, "change", {
					fn: e,
					last: 1
				}))
			})
		}
	}
}, {
	requires: ["event/dom/base",
		"dom"
	]
});
KISSY.add("event/dom/ie", function() {}, {
	requires: ["./ie/change", "./ie/submit"]
});
KISSY.add("event/dom/ie/submit", function(a, b, i) {
	function k(a) {
		var a = a.target,
			e = j(a);
		if((a = "input" == e || "button" == e ? a.form : null) && !a.__submit__fix) a.__submit__fix = 1, b.on(a, "submit", {
			fn: g,
			last: 1
		})
	}

	function g(a) {
		this.parentNode && !a.isPropagationStopped() && !a.synthetic && b.fire(this.parentNode, "submit", a)
	}
	var j = i.nodeName;
	b._Special.submit = {
		setup: function() {
			if("form" == j(this)) return !1;
			b.on(this, "click keypress", k)
		},
		tearDown: function() {
			if("form" == j(this)) return !1;
			b.remove(this, "click keypress", k);
			a.each(i.query("form",
				this), function(a) {
				a.__submit__fix && (a.__submit__fix = 0, b.remove(a, "submit", {
					fn: g,
					last: 1
				}))
			})
		}
	}
}, {
	requires: ["event/dom/base", "dom"]
});
KISSY.add("event/dom/shake", function(a, b, i) {
	function k(a) {
		var b = a.accelerationIncludingGravity,
			a = b.x,
			g = b.y,
			b = b.z,
			k;
		f !== i && (k = c(m(a - f), m(g - d), m(b - h)), k > j && p(), k > l && (e = 1));
		f = a;
		d = g;
		h = b
	}
	var g = b._Special,
		j = 5,
		l = 20,
		e = 0,
		f, d, h, c = Math.max,
		m = Math.abs,
		n = a.Env.host,
		p = a.buffer(function() {
			e && (b.fireHandler(n, "shake", {
				accelerationIncludingGravity: {
					x: f,
					y: d,
					z: h
				}
			}), f = i, e = 0)
		}, 250);
	g.shake = {
		setup: function() {
			this == n && n.addEventListener("devicemotion", k, !1)
		},
		tearDown: function() {
			this == n && (p.stop(), f = i, e = 0, n.removeEventListener("devicemotion",
				k, !1))
		}
	}
}, {
	requires: ["event/dom/base"]
});
KISSY.add("event/dom/touch/double-tap", function(a, b, i, k) {
	function g() {}
	a.extend(g, k, {
		onTouchStart: function(a) {
			if(!1 === g.superclass.onTouchStart.apply(this, arguments)) return !1;
			this.startTime = a.timeStamp;
			this.singleTapTimer && (clearTimeout(this.singleTapTimer), this.singleTapTimer = 0)
		},
		onTouchMove: function() {
			return !1
		},
		onTouchEnd: function(a) {
			var b = this.lastEndTime,
				e = a.timeStamp,
				f = a.target,
				d = a.changedTouches[0],
				h = e - this.startTime;
			this.lastEndTime = e;
			if(b && (h = e - b, 300 > h)) {
				this.lastEndTime = 0;
				i.fire(f, "doubleTap", {
					touch: d,
					duration: h / 1E3
				});
				return
			}
			h = e - this.startTime;
			300 < h ? i.fire(f, "singleTap", {
				touch: d,
				duration: h / 1E3
			}) : this.singleTapTimer = setTimeout(function() {
				i.fire(f, "singleTap", {
					touch: d,
					duration: h / 1E3
				})
			}, 300)
		}
	});
	b.singleTap = b.doubleTap = {
		handle: new g
	};
	return g
}, {
	requires: ["./handle-map", "event/dom/base", "./single-touch"]
});
KISSY.add("event/dom/touch/gesture", function(a, b) {
	var i = b.Gesture,
		k, g, j;
	a.Features.isTouchSupported() && (k = "touchstart", g = "touchmove", j = "touchend");
	k && (i.start = k, i.move = g, i.end = j, i.tap = "tap", i.doubleTap = "doubleTap");
	return i
}, {
	requires: ["event/dom/base"]
});
KISSY.add("event/dom/touch/handle-map", function() {
	return {}
});
KISSY.add("event/dom/touch/handle", function(a, b, i, k, g) {
	function j(a) {
		this.doc = a;
		this.eventHandle = {};
		this.init()
	}
	var l = a.guid("touch-handle"),
		e = a.Features,
		f = {};
	f[g.start] = "onTouchStart";
	f[g.move] = "onTouchMove";
	f[g.end] = "onTouchEnd";
	"mousedown" !== g.start && (f.touchcancel = "onTouchEnd");
	var d = a.throttle(function(a) {
		this.callEventHandle("onTouchMove", a)
	}, 30);
	j.prototype = {
		init: function() {
			var a = this.doc,
				b, d;
			for(b in f) {
				d = f[b];
				k.on(a, b, this[d], this)
			}
		},
		normalize: function(a) {
			var b = a.type,
				d;
			if(!e.isTouchSupported()) {
				if(b.indexOf("mouse") !=
					-1 && a.which != 1) return;
				d = [a];
				b = !b.match(/up$/i);
				a.touches = b ? d : [];
				a.targetTouches = b ? d : [];
				a.changedTouches = d
			}
			return a
		},
		onTouchMove: function(a) {
			d.call(this, a)
		},
		onTouchStart: function(a) {
			var b, d, e = this.eventHandle;
			for(b in e) {
				d = e[b].handle;
				d.isActive = 1
			}
			this.callEventHandle("onTouchStart", a)
		},
		onTouchEnd: function(a) {
			this.callEventHandle("onTouchEnd", a)
		},
		callEventHandle: function(a, b) {
			var d = this.eventHandle,
				e, f;
			if(b = this.normalize(b)) {
				for(e in d) {
					f = d[e].handle;
					if(!f.processed) {
						f.processed = 1;
						if(f.isActive &&
							f[a](b) === false) f.isActive = 0
					}
				}
				for(e in d) {
					f = d[e].handle;
					f.processed = 0
				}
			}
		},
		addEventHandle: function(a) {
			var b = this.eventHandle,
				d = i[a].handle;
			b[a] ? b[a].count++ : b[a] = {
				count: 1,
				handle: d
			}
		},
		removeEventHandle: function(a) {
			var b = this.eventHandle;
			if(b[a]) {
				b[a].count--;
				b[a].count || delete b[a]
			}
		},
		destroy: function() {
			var a = this.doc,
				b, d;
			for(b in f) {
				d = f[b];
				k.detach(a, b, this[d], this)
			}
		}
	};
	return {
		addDocumentHandle: function(a, c) {
			var d = b.getWindow(a.ownerDocument || a).document,
				e = i[c].setup,
				f = b.data(d, l);
			f || b.data(d, l, f = new j(d));
			e && e.call(a, c);
			f.addEventHandle(c)
		},
		removeDocumentHandle: function(d, c) {
			var e = b.getWindow(d.ownerDocument || d).document,
				f = i[c].tearDown,
				g = b.data(e, l);
			f && f.call(d, c);
			if(g) {
				g.removeEventHandle(c);
				if(a.isEmptyObject(g.eventHandle)) {
					g.destroy();
					b.removeData(e, l)
				}
			}
		}
	}
}, {
	requires: "dom,./handle-map,event/dom/base,./gesture,./tap,./swipe,./double-tap,./pinch,./tap-hold,./rotate".split(",")
});
KISSY.add("event/dom/touch/multi-touch", function(a, b) {
	function i() {}
	i.prototype = {
		requiredTouchCount: 2,
		onTouchStart: function(a) {
			var b = this.requiredTouchCount,
				j = a.touches.length;
			j === b ? this.start() : j > b && this.end(a)
		},
		onTouchEnd: function(a) {
			this.end(a)
		},
		start: function() {
			this.isTracking || (this.isTracking = !0, this.isStarted = !1)
		},
		fireEnd: a.noop,
		getCommonTarget: function(a) {
			var g = a.touches,
				a = g[0].target,
				g = g[1].target;
			if(a == g || b.contains(a, g)) return a;
			for(;;) {
				if(b.contains(g, a)) return g;
				g = g.parentNode
			}
		},
		end: function(a) {
			this.isTracking &&
				(this.isTracking = !1, this.isStarted && (this.isStarted = !1, this.fireEnd(a)))
		}
	};
	return i
}, {
	requires: ["dom"]
});
KISSY.add("event/dom/touch/pinch", function(a, b, i, k, g) {
	function j() {}

	function l(a) {
		(!a.touches || 2 == a.touches.length) && a.preventDefault()
	}
	a.extend(j, k, {
		onTouchMove: function(b) {
			if(this.isTracking) {
				var f = b.touches,
					d, h = f[0],
					c = f[1];
				d = h.pageX - c.pageX;
				h = h.pageY - c.pageY;
				d = Math.sqrt(d * d + h * h);
				this.lastTouches = f;
				this.isStarted ? i.fire(this.target, "pinch", a.mix(b, {
					distance: d,
					scale: d / this.startDistance
				})) : (this.isStarted = !0, this.startDistance = d, f = this.target = this.getCommonTarget(b), i.fire(f, "pinchStart", a.mix(b, {
					distance: d,
					scale: 1
				})))
			}
		},
		fireEnd: function(b) {
			i.fire(this.target, "pinchEnd", a.mix(b, {
				touches: this.lastTouches
			}))
		}
	});
	k = new j;
	b.pinchStart = b.pinchEnd = {
		handle: k
	};
	b.pinch = {
		handle: k,
		setup: function() {
			i.on(this, g.move, l)
		},
		tearDown: function() {
			i.detach(this, g.move, l)
		}
	};
	return j
}, {
	requires: ["./handle-map", "event/dom/base", "./multi-touch", "./gesture"]
});
KISSY.add("event/dom/touch/rotate", function(a, b, i, k, g, j) {
	function l() {}

	function e(a) {
		(!a.touches || 2 == a.touches.length) && a.preventDefault()
	}
	var f = 180 / Math.PI;
	a.extend(l, i, {
		onTouchMove: function(b) {
			if(this.isTracking) {
				var e = b.touches,
					c = e[0],
					g = e[1],
					i = this.lastAngle,
					c = Math.atan2(g.pageY - c.pageY, g.pageX - c.pageX) * f;
				if(i !== j) {
					var g = Math.abs(c - i),
						l = (c + 360) % 360,
						o = (c - 360) % 360;
					Math.abs(l - i) < g ? c = l : Math.abs(o - i) < g && (c = o)
				}
				this.lastTouches = e;
				this.lastAngle = c;
				this.isStarted ? k.fire(this.target, "rotate", a.mix(b, {
					angle: c,
					rotation: c - this.startAngle
				})) : (this.isStarted = !0, this.startAngle = c, this.target = this.getCommonTarget(b), k.fire(this.target, "rotateStart", a.mix(b, {
					angle: c,
					rotation: 0
				})))
			}
		},
		end: function() {
			this.lastAngle = j;
			l.superclass.end.apply(this, arguments)
		},
		fireEnd: function(b) {
			k.fire(this.target, "rotateEnd", a.mix(b, {
				touches: this.lastTouches
			}))
		}
	});
	i = new l;
	b.rotateEnd = b.rotateStart = {
		handle: i
	};
	b.rotate = {
		handle: i,
		setup: function() {
			k.on(this, g.move, e)
		},
		tearDown: function() {
			k.detach(this, g.move, e)
		}
	};
	return l
}, {
	requires: ["./handle-map",
		"./multi-touch", "event/dom/base", "./gesture"
	]
});
KISSY.add("event/dom/touch/single-touch", function(a) {
	function b() {}
	b.prototype = {
		requiredTouchCount: 1,
		onTouchStart: function(a) {
			if(a.touches.length != this.requiredTouchCount) return !1;
			this.lastTouches = a.touches
		},
		onTouchMove: a.noop,
		onTouchEnd: a.noop
	};
	return b
});
KISSY.add("event/dom/touch/swipe", function(a, b, i, k) {
	function g(a, b, c) {
		var g = b.changedTouches[0],
			j = g.pageX - a.startX,
			k = g.pageY - a.startY,
			o = Math.abs(j),
			q = Math.abs(k);
		if(c) a.isVertical && a.isHorizontal && (q > o ? a.isHorizontal = 0 : a.isVertical = 0);
		else if(a.isVertical && q < f && (a.isVertical = 0), a.isHorizontal && o < f) a.isHorizontal = 0;
		if(a.isHorizontal) j = 0 > j ? "left" : "right";
		else if(a.isVertical) j = 0 > k ? "up" : "down", o = q;
		else return !1;
		i.fire(b.target, c ? e : l, {
			originalEvent: b.originalEvent,
			touch: g,
			direction: j,
			distance: o,
			duration: (b.timeStamp -
				a.startTime) / 1E3
		})
	}

	function j() {}
	var l = "swipe",
		e = "swiping",
		f = 50;
	a.extend(j, k, {
		onTouchStart: function(a) {
			if(!1 === j.superclass.onTouchStart.apply(this, arguments)) return !1;
			var b = a.touches[0];
			this.startTime = a.timeStamp;
			this.isVertical = this.isHorizontal = 1;
			this.startX = b.pageX;
			this.startY = b.pageY; - 1 != a.type.indexOf("mouse") && a.preventDefault()
		},
		onTouchMove: function(a) {
			var b = a.changedTouches[0],
				c = b.pageY - this.startY,
				b = Math.abs(b.pageX - this.startX),
				c = Math.abs(c);
			if(1E3 < a.timeStamp - this.startTime) return !1;
			this.isVertical &&
				35 < b && (this.isVertical = 0);
			this.isHorizontal && 35 < c && (this.isHorizontal = 0);
			return g(this, a, 1)
		},
		onTouchEnd: function(a) {
			return !1 === this.onTouchMove(a) ? !1 : g(this, a, 0)
		}
	});
	b[l] = b[e] = {
		handle: new j
	};
	return j
}, {
	requires: ["./handle-map", "event/dom/base", "./single-touch"]
});
KISSY.add("event/dom/touch/tap-hold", function(a, b, i, k, g) {
	function j() {}

	function l(a) {
		(!a.touches || 1 == a.touches.length) && a.preventDefault()
	}
	a.extend(j, i, {
		onTouchStart: function(b) {
			if(!1 === j.superclass.onTouchStart.call(this, b)) return !1;
			this.timer = setTimeout(function() {
				k.fire(b.target, "tapHold", {
					touch: b.touches[0],
					duration: (a.now() - b.timeStamp) / 1E3
				})
			}, 1E3)
		},
		onTouchMove: function() {
			clearTimeout(this.timer);
			return !1
		},
		onTouchEnd: function() {
			clearTimeout(this.timer)
		}
	});
	b.tapHold = {
		setup: function() {
			k.on(this,
				g.start, l)
		},
		tearDown: function() {
			k.detach(this, g.start, l)
		},
		handle: new j
	};
	return j
}, {
	requires: ["./handle-map", "./single-touch", "event/dom/base", "./gesture"]
});
KISSY.add("event/dom/touch/tap", function(a, b, i, k) {
	function g() {}
	a.extend(g, k, {
		onTouchMove: function() {
			return !1
		},
		onTouchEnd: function(a) {
			i.fire(a.target, "tap", {
				touch: a.changedTouches[0]
			})
		}
	});
	b.tap = {
		handle: new g
	};
	return g
}, {
	requires: ["./handle-map", "event/dom/base", "./single-touch"]
});
KISSY.add("event/dom/touch", function(a, b, i, k) {
	var a = b._Special,
		b = {
			setup: function(a) {
				k.addDocumentHandle(this, a)
			},
			tearDown: function(a) {
				k.removeDocumentHandle(this, a)
			}
		},
		g;
	for(g in i) a[g] = b
}, {
	requires: ["event/dom/base", "./touch/handle-map", "./touch/handle"]
});
KISSY.add("json/json2", function() {
	function a(a) {
		return 10 > a ? "0" + a : a
	}

	function b(a) {
		j.lastIndex = 0;
		return j.test(a) ? '"' + a.replace(j, function(a) {
			var b = f[a];
			return "string" === typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
		}) + '"' : '"' + a + '"'
	}

	function i(a, c) {
		var f, g, j, k, q = l,
			r, t = c[a];
		t && "object" === typeof t && "function" === typeof t.toJSON && (t = t.toJSON(a));
		"function" === typeof d && (t = d.call(c, a, t));
		switch(typeof t) {
			case "string":
				return b(t);
			case "number":
				return isFinite(t) ? "" + t : "null";
			case "boolean":
			case "null":
				return "" +
					t;
			case "object":
				if(!t) return "null";
				l += e;
				r = [];
				if("[object Array]" === Object.prototype.toString.apply(t)) {
					k = t.length;
					for(f = 0; f < k; f += 1) r[f] = i(f, t) || "null";
					j = 0 === r.length ? "[]" : l ? "[\n" + l + r.join(",\n" + l) + "\n" + q + "]" : "[" + r.join(",") + "]";
					l = q;
					return j
				}
				if(d && "object" === typeof d) {
					k = d.length;
					for(f = 0; f < k; f += 1) g = d[f], "string" === typeof g && (j = i(g, t)) && r.push(b(g) + (l ? ": " : ":") + j)
				} else
					for(g in t) Object.hasOwnProperty.call(t, g) && (j = i(g, t)) && r.push(b(g) + (l ? ": " : ":") + j);
				j = 0 === r.length ? "{}" : l ? "{\n" + l + r.join(",\n" + l) + "\n" +
					q + "}" : "{" + r.join(",") + "}";
				l = q;
				return j
		}
	}
	var k = {};
	"function" !== typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
		return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + a(this.getUTCMonth() + 1) + "-" + a(this.getUTCDate()) + "T" + a(this.getUTCHours()) + ":" + a(this.getUTCMinutes()) + ":" + a(this.getUTCSeconds()) + "Z" : null
	}, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
		return this.valueOf()
	});
	var g = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
		j = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
		l, e, f = {
			"": "\\b",
			"\t": "\\t",
			"\n": "\\n",
			"": "\\f",
			"\r": "\\r",
			'"': '\\"',
			"\\": "\\\\"
		},
		d;
	k.stringify = function(a, b, f) {
		var g;
		e = l = "";
		if(typeof f === "number")
			for(g = 0; g < f; g = g + 1) e = e + " ";
		else typeof f === "string" && (e = f);
		if((d = b) && typeof b !== "function" && (typeof b !== "object" || typeof b.length !== "number")) throw Error("JSON.stringify");
		return i("", {
			"": a
		})
	};
	k.parse = function(a, b) {
		function d(a,
			f) {
			var e, h, g = a[f];
			if(g && typeof g === "object")
				for(e in g)
					if(Object.hasOwnProperty.call(g, e)) {
						h = d(g, e);
						h !== void 0 ? g[e] = h : delete g[e]
					}
			return b.call(a, f, g)
		}
		var f, a = "" + a;
		g.lastIndex = 0;
		g.test(a) && (a = a.replace(g, function(a) {
			return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
		}));
		if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
			f = eval("(" + a + ")");
			return typeof b ===
				"function" ? d({
					"": f
				}, "") : f
		}
		throw new SyntaxError("JSON.parse");
	};
	return k
});
KISSY.add("json", function(a, b) {
	b || (b = JSON);
	return a.JSON = {
		parse: function(a) {
			return null == a || "" === a ? null : b.parse(a)
		},
		stringify: b.stringify
	}
}, {
	requires: [KISSY.Features.isNativeJSONSupported() ? "" : "json/json2"]
});
KISSY.add("ajax", function(a, b, i) {
	function k(b, l, e, f, d) {
		a.isFunction(l) && (f = e, e = l, l = g);
		return i({
			type: d || "get",
			url: b,
			data: l,
			success: e,
			dataType: f
		})
	}
	var g = void 0;
	a.mix(i, {
		serialize: b.serialize,
		get: k,
		post: function(b, i, e, f) {
			a.isFunction(i) && (f = e, e = i, i = g);
			return k(b, i, e, f, "post")
		},
		jsonp: function(b, i, e) {
			a.isFunction(i) && (e = i, i = g);
			return k(b, i, e, "jsonp")
		},
		getScript: a.getScript,
		getJSON: function(b, i, e) {
			a.isFunction(i) && (e = i, i = g);
			return k(b, i, e, "json")
		},
		upload: function(b, k, e, f, d) {
			a.isFunction(e) && (d = f, f = e, e =
				g);
			return i({
				url: b,
				type: "post",
				dataType: d,
				form: k,
				data: e,
				success: f
			})
		}
	});
	a.mix(a, {
		Ajax: i,
		IO: i,
		ajax: i,
		io: i,
		jsonp: i.jsonp
	});
	return i
}, {
	requires: "ajax/form-serializer,ajax/base,ajax/xhr-transport,ajax/script-transport,ajax/jsonp,ajax/form,ajax/iframe-transport,ajax/methods".split(",")
});
KISSY.add("ajax/base", function(a, b, i, k) {
	function g(b) {
		var d = b.context;
		delete b.context;
		b = a.mix(a.clone(p), b, {
			deep: !0
		});
		b.context = d || b;
		var e, h = b.type,
			g = b.dataType,
			d = b.uri = m.resolve(b.url);
		b.uri.setQuery("");
		"crossDomain" in b || (b.crossDomain = !b.uri.isSameOriginAs(m));
		h = b.type = h.toUpperCase();
		b.hasContent = !c.test(h);
		if(b.processData && (e = b.data) && "string" != typeof e) b.data = a.param(e, k, k, b.serializeArray);
		g = b.dataType = a.trim(g || "*").split(f);
		!("cache" in b) && a.inArray(g[0], ["script", "jsonp"]) && (b.cache = !1);
		b.hasContent || (b.data && d.query.add(a.unparam(b.data)), !1 === b.cache && d.query.set("_ksTS", a.now() + "_" + a.guid()));
		return b
	}

	function j(a, b) {
		l.fire(a, {
			ajaxConfig: b.config,
			io: b
		})
	}

	function l(b) {
		function c(a) {
			return function(c) {
				if(i = d.timeoutTimer) clearTimeout(i), d.timeoutTimer = 0;
				var f = b[a];
				f && f.apply(w, c);
				j(a, d)
			}
		}
		var d = this;
		if(!(d instanceof l)) return new l(b);
		h.call(d);
		b = g(b);
		a.mix(d, {
			responseData: null,
			config: b || {},
			timeoutTimer: null,
			responseText: null,
			responseXML: null,
			responseHeadersString: "",
			responseHeaders: null,
			requestHeaders: {},
			readyState: 0,
			state: 0,
			statusText: null,
			status: 0,
			transport: null,
			_defer: new a.Defer(this)
		});
		var f;
		j("start", d);
		f = new(n[b.dataType[0]] || n["*"])(d);
		d.transport = f;
		b.contentType && d.setRequestHeader("Content-Type", b.contentType);
		var e = b.dataType[0],
			i, k, m = b.timeout,
			w = b.context,
			p = b.headers,
			y = b.accepts;
		d.setRequestHeader("Accept", e && y[e] ? y[e] + ("*" === e ? "" : ", */*; q=0.01") : y["*"]);
		for(k in p) d.setRequestHeader(k, p[k]);
		if(b.beforeSend && !1 === b.beforeSend.call(w, d, b)) return d;
		d.then(c("success"),
			c("error"));
		d.fin(c("complete"));
		d.readyState = 1;
		j("send", d);
		b.async && 0 < m && (d.timeoutTimer = setTimeout(function() {
			d.abort("timeout")
		}, 1E3 * m));
		try {
			d.state = 1, f.send()
		} catch(B) {
			2 > d.state && d._ioReady(-1, B.message)
		}
		return d
	}
	var e = /^(?:about|app|app\-storage|.+\-extension|file|widget)$/,
		f = /\s+/,
		d = function(a) {
			return a
		},
		h = a.Promise,
		c = /^(?:GET|HEAD)$/,
		m = new a.Uri((a.Env.host.location || {}).href),
		e = m && e.test(m.getScheme()),
		n = {},
		p = {
			type: "GET",
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			async: !0,
			serializeArray: !0,
			processData: !0,
			accepts: {
				xml: "application/xml, text/xml",
				html: "text/html",
				text: "text/plain",
				json: "application/json, text/javascript",
				"*": "*/*"
			},
			converters: {
				text: {
					json: b.parse,
					html: d,
					text: d,
					xml: a.parseXML
				}
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			}
		};
	p.converters.html = p.converters.text;
	a.mix(l, i.Target);
	a.mix(l, {
		isLocal: e,
		setupConfig: function(b) {
			a.mix(p, b, {
				deep: !0
			})
		},
		setupTransport: function(a, b) {
			n[a] = b
		},
		getTransport: function(a) {
			return n[a]
		},
		getConfig: function() {
			return p
		}
	});
	return l
}, {
	requires: ["json", "event"]
});
KISSY.add("ajax/form-serializer", function(a, b) {
	function i(a) {
		return a.replace(g, "\r\n")
	}
	var k = /^(?:select|textarea)/i,
		g = /\r?\n/g,
		j, l = /^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i;
	return j = {
		serialize: function(b, f) {
			return a.param(j.getFormData(b), void 0, void 0, f || !1)
		},
		getFormData: function(e) {
			var f = [],
				d = {};
			a.each(b.query(e), function(b) {
				b = b.elements ? a.makeArray(b.elements) : [b];
				f.push.apply(f, b)
			});
			f = a.filter(f, function(a) {
				return a.name && !a.disabled &&
					(a.checked || k.test(a.nodeName) || l.test(a.type))
			});
			a.each(f, function(f) {
				var c = b.val(f),
					e;
				null !== c && (c = a.isArray(c) ? a.map(c, i) : i(c), (e = d[f.name]) ? (e && !a.isArray(e) && (e = d[f.name] = [e]), e.push.apply(e, a.makeArray(c))) : d[f.name] = c)
			});
			return d
		}
	}
}, {
	requires: ["dom"]
});
KISSY.add("ajax/form", function(a, b, i, k) {
	b.on("start", function(b) {
		var j, l, e, b = b.io.config;
		if(e = b.form) j = i.get(e), l = j.encoding || j.enctype, e = b.data, "multipart/form-data" != l.toLowerCase() ? (j = k.getFormData(j), b.hasContent ? (j = a.param(j, void 0, void 0, b.serializeArray), b.data = e ? b.data + ("&" + j) : j) : b.uri.query.add(j)) : (e = b.dataType, b = e[0], "*" == b && (b = "text"), e.length = 2, e[0] = "iframe", e[1] = b)
	});
	return b
}, {
	requires: ["./base", "dom", "./form-serializer"]
});
KISSY.add("ajax/iframe-transport", function(a, b, i, k) {
	function g(f) {
		var d = a.guid("io-iframe"),
			h = b.getEmptyIframeSrc(),
			f = f.iframe = b.create("<iframe " + (h ? ' src="' + h + '" ' : "") + ' id="' + d + '" name="' + d + '" style="position:absolute;left:-9999px;top:-9999px;"/>');
		b.prepend(f, e.body || e.documentElement);
		return f
	}

	function j(f, d, h) {
		var c = [],
			g, j, i, k;
		a.each(f, function(f, l) {
			g = a.isArray(f);
			j = a.makeArray(f);
			for(i = 0; i < j.length; i++) k = e.createElement("input"), k.type = "hidden", k.name = l + (g && h ? "[]" : ""), k.value = j[i], b.append(k,
				d), c.push(k)
		});
		return c
	}

	function l(a) {
		this.io = a
	}
	var e = a.Env.host.document;
	k.setupConfig({
		converters: {
			iframe: k.getConfig().converters.text,
			text: {
				iframe: function(a) {
					return a
				}
			},
			xml: {
				iframe: function(a) {
					return a
				}
			}
		}
	});
	a.augment(l, {
		send: function() {
			function f() {
				i.on(l, "load error", d._callback, d);
				q.submit()
			}
			var d = this,
				e = d.io,
				c = e.config,
				k, l, p, o = c.data,
				q = b.get(c.form);
			d.attrs = {
				target: b.attr(q, "target") || "",
				action: b.attr(q, "action") || "",
				method: b.attr(q, "method")
			};
			d.form = q;
			l = g(e);
			b.attr(q, {
				target: l.id,
				action: e._getUrlForSend(),
				method: "post"
			});
			o && (p = a.unparam(o));
			p && (k = j(p, q, c.serializeArray));
			d.fields = k;
			6 == a.UA.ie ? setTimeout(f, 0) : f()
		},
		_callback: function(e) {
			var d = this,
				h = d.form,
				c = d.io,
				e = e.type,
				g, j = c.iframe;
			if(j)
				if("abort" == e && 6 == a.UA.ie ? setTimeout(function() {
						b.attr(h, d.attrs)
					}, 0) : b.attr(h, d.attrs), b.remove(this.fields), i.detach(j), setTimeout(function() {
						b.remove(j)
					}, 30), c.iframe = null, "load" == e) try {
					if((g = j.contentWindow.document) && g.body) c.responseText = a.trim(b.text(g.body)), a.startsWith(c.responseText, "<?xml") && (c.responseText =
						void 0);
					c.responseXML = g && g.XMLDocument ? g.XMLDocument : g;
					g ? c._ioReady(200, "success") : c._ioReady(500, "parser error")
				} catch(k) {
					c._ioReady(500, "parser error")
				} else "error" == e && c._ioReady(500, "error")
		},
		abort: function() {
			this._callback({
				type: "abort"
			})
		}
	});
	k.setupTransport("iframe", l);
	return k
}, {
	requires: ["dom", "event", "./base"]
});
KISSY.add("ajax/jsonp", function(a, b) {
	var i = a.Env.host;
	b.setupConfig({
		jsonp: "callback",
		jsonpCallback: function() {
			return a.guid("jsonp")
		}
	});
	b.on("start", function(b) {
		var g = b.io,
			j = g.config,
			b = j.dataType;
		if("jsonp" == b[0]) {
			var l, e = j.jsonpCallback,
				f = a.isFunction(e) ? e() : e,
				d = i[f];
			j.uri.query.set(j.jsonp, f);
			i[f] = function(b) {
				1 < arguments.length && (b = a.makeArray(arguments));
				l = [b]
			};
			g.fin(function() {
				i[f] = d;
				if(void 0 === d) try {
					delete i[f]
				} catch(a) {} else l && d(l[0])
			});
			g = g.converters = g.converters || {};
			g.script = g.script || {};
			g.script.json = function() {
				return l[0]
			};
			b.length = 2;
			b[0] = "script";
			b[1] = "json"
		}
	});
	return b
}, {
	requires: ["./base"]
});
KISSY.add("ajax/methods", function(a, b, i) {
	function k(b) {
		var g = b.responseText,
			e = b.responseXML,
			f = b.config,
			d = f.converters,
			h = b.converters || {},
			c, k, n = f.contents,
			p = f.dataType;
		if(g || e) {
			for(f = b.mimeType || b.getResponseHeader("Content-Type");
				"*" == p[0];) p.shift();
			if(!p.length)
				for(c in n)
					if(n[c].test(f)) {
						p[0] != c && p.unshift(c);
						break
					}
			p[0] = p[0] || "text";
			if("text" == p[0] && g !== i) k = g;
			else if("xml" == p[0] && e !== i) k = e;
			else {
				var o = {
					text: g,
					xml: e
				};
				a.each(["text", "xml"], function(a) {
					var b = p[0];
					return(h[a] && h[a][b] || d[a] && d[a][b]) &&
						o[a] ? (p.unshift(a), k = "text" == a ? g : e, !1) : i
				})
			}
		}
		n = p[0];
		for(f = 1; f < p.length; f++) {
			c = p[f];
			var q = h[n] && h[n][c] || d[n] && d[n][c];
			if(!q) throw "no covert for " + n + " => " + c;
			k = q(k);
			n = c
		}
		b.responseData = k
	}
	var g = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg;
	a.extend(b, a.Promise, {
		setRequestHeader: function(a, b) {
			this.requestHeaders[a] = b;
			return this
		},
		getAllResponseHeaders: function() {
			return 2 === this.state ? this.responseHeadersString : null
		},
		getResponseHeader: function(a) {
			var b, e;
			if(2 === this.state) {
				if(!(e = this.responseHeaders))
					for(e = this.responseHeaders = {}; b = g.exec(this.responseHeadersString);) e[b[1]] = b[2];
				b = e[a]
			}
			return b === i ? null : b
		},
		overrideMimeType: function(a) {
			this.state || (this.mimeType = a);
			return this
		},
		abort: function(a) {
			a = a || "abort";
			this.transport && this.transport.abort(a);
			this._ioReady(0, a);
			return this
		},
		getNativeXhr: function() {
			var a;
			return(a = this.transport) ? a.nativeXhr : null
		},
		_ioReady: function(a, b) {
			if(2 != this.state) {
				this.state = 2;
				this.readyState = 4;
				var e;
				if(200 <= a && 300 > a || 304 == a)
					if(304 == a) b = "not modified", e = !0;
					else try {
						k(this), b = "success", e = !0
					} catch(f) {
						b =
							"parser error"
					} else 0 > a && (a = 0);
				this.status = a;
				this.statusText = b;
				this._defer[e ? "resolve" : "reject"]([this.responseData, b, this])
			}
		},
		_getUrlForSend: function() {
			var b = this.config,
				g = b.uri,
				e = a.Uri.getComponents(b.url).query || "";
			return g.toString(b.serializeArray) + (e ? (g.query.has() ? "&" : "?") + e : e)
		}
	})
}, {
	requires: ["./base"]
});
KISSY.add("ajax/script-transport", function(a, b, i, k) {
	function g(a) {
		if(!a.config.crossDomain) return new(b.getTransport("*"))(a);
		this.io = a;
		return this
	}
	var j = a.Env.host,
		l = j.document;
	b.setupConfig({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /javascript|ecmascript/
		},
		converters: {
			text: {
				script: function(b) {
					a.globalEval(b);
					return b
				}
			}
		}
	});
	a.augment(g, {
		send: function() {
			var a = this,
				b, d = a.io,
				h = d.config,
				c = l.head || l.getElementsByTagName("head")[0] ||
				l.documentElement;
			a.head = c;
			b = l.createElement("script");
			a.script = b;
			b.async = !0;
			h.scriptCharset && (b.charset = h.scriptCharset);
			b.src = d._getUrlForSend();
			b.onerror = b.onload = b.onreadystatechange = function(b) {
				b = b || j.event;
				a._callback((b.type || "error").toLowerCase())
			};
			c.insertBefore(b, c.firstChild)
		},
		_callback: function(a, b) {
			var d = this.script,
				h = this.io,
				c = this.head;
			if(d && (b || !d.readyState || /loaded|complete/.test(d.readyState) || "error" == a)) d.onerror = d.onload = d.onreadystatechange = null, c && d.parentNode && c.removeChild(d),
				this.head = this.script = k, !b && "error" != a ? h._ioReady(200, "success") : "error" == a && h._ioReady(500, "script error")
		},
		abort: function() {
			this._callback(0, 1)
		}
	});
	b.setupTransport("script", g);
	return b
}, {
	requires: ["./base", "./xhr-transport"]
});
KISSY.add("ajax/sub-domain-transport", function(a, b, i, k) {
	function g(a) {
		var b = a.config;
		this.io = a;
		b.crossDomain = !1
	}

	function j() {
		var a = this.io.config.uri.getHostname(),
			a = e[a];
		a.ready = 1;
		i.detach(a.iframe, "load", j, this);
		this.send()
	}
	var l = a.Env.host.document,
		e = {};
	a.augment(g, b.proto, {
		send: function() {
			var f = this.io.config,
				d = f.uri,
				h = d.getHostname(),
				c;
			c = e[h];
			var g = "/sub_domain_proxy.html";
			f.xdr && f.xdr.subDomain && f.xdr.subDomain.proxy && (g = f.xdr.subDomain.proxy);
			c && c.ready ? (this.nativeXhr = b.nativeXhr(0, c.iframe.contentWindow)) &&
				this.sendInternal() : (c ? f = c.iframe : (c = e[h] = {}, f = c.iframe = l.createElement("iframe"), k.css(f, {
					position: "absolute",
					left: "-9999px",
					top: "-9999px"
				}), k.prepend(f, l.body || l.documentElement), c = new a.Uri, c.setScheme(d.getScheme()), c.setPort(d.getPort()), c.setHostname(h), c.setPath(g), f.src = c.toString()), i.on(f, "load", j, this))
		}
	});
	return g
}, {
	requires: ["./xhr-transport-base", "event", "dom"]
});
KISSY.add("ajax/xdr-flash-transport", function(a, b, i) {
	function k(a, b, e) {
		d || (d = !0, a = '<object id="' + l + '" type="application/x-shockwave-flash" data="' + a + '" width="0" height="0"><param name="movie" value="' + a + '" /><param name="FlashVars" value="yid=' + b + "&uid=" + e + '&host=KISSY.IO" /><param name="allowScriptAccess" value="always" /></object>', b = f.createElement("div"), i.prepend(b, f.body || f.documentElement), b.innerHTML = a)
	}

	function g(a) {
		this.io = a
	}
	var j = {},
		l = "io_swf",
		e, f = a.Env.host.document,
		d = !1;
	a.augment(g, {
		send: function() {
			var b = this,
				c = b.io,
				d = c.config;
			k((d.xdr || {}).src || a.Config.base + "ajax/io.swf", 1, 1);
			e ? (b._uid = a.guid(), j[b._uid] = b, e.send(c._getUrlForSend(), {
				id: b._uid,
				uid: b._uid,
				method: d.type,
				data: d.hasContent && d.data || {}
			})) : setTimeout(function() {
				b.send()
			}, 200)
		},
		abort: function() {
			e.abort(this._uid)
		},
		_xdrResponse: function(a, b) {
			var d, e = b.id,
				f, g = b.c,
				i = this.io;
			if(g && (f = g.responseText)) i.responseText = decodeURI(f);
			switch(a) {
				case "success":
					d = {
						status: 200,
						statusText: "success"
					};
					delete j[e];
					break;
				case "abort":
					delete j[e];
					break;
				case "timeout":
				case "transport error":
				case "failure":
					delete j[e], d = {
						status: "status" in g ? g.status : 500,
						statusText: g.statusText || a
					}
			}
			d && i._ioReady(d.status, d.statusText)
		}
	});
	b.applyTo = function(d, c, e) {
		var d = c.split(".").slice(1),
			f = b;
		a.each(d, function(a) {
			f = f[a]
		});
		f.apply(null, e)
	};
	b.xdrReady = function() {
		e = f.getElementById(l)
	};
	b.xdrResponse = function(a, b) {
		var d = j[b.uid];
		d && d._xdrResponse(a, b)
	};
	return g
}, {
	requires: ["./base", "dom"]
});
KISSY.add("ajax/xhr-transport-base", function(a, b) {
	function i(a, b) {
		try {
			return new(b || g).XMLHttpRequest
		} catch(c) {}
	}

	function k(a) {
		var b;
		a.ifModified && (b = a.uri, !1 === a.cache && (b = b.clone(), b.query.remove("_ksTS")), b = b.toString());
		return b
	}
	var g = a.Env.host,
		j = 7 < a.UA.ie && g.XDomainRequest,
		l = {
			proto: {}
		},
		e = {},
		f = {};
	b.__lastModifiedCached = e;
	b.__eTagCached = f;
	l.nativeXhr = g.ActiveXObject ? function(a, e) {
		var c;
		if(!l.supportCORS && a && j) c = new j;
		else if(!(c = !b.isLocal && i(a, e))) a: {
			try {
				c = new(e || g).ActiveXObject("Microsoft.XMLHTTP");
				break a
			} catch(f) {}
			c = void 0
		}
		return c
	} : i;
	l._XDomainRequest = j;
	l.supportCORS = "withCredentials" in l.nativeXhr();
	a.mix(l.proto, {
		sendInternal: function() {
			var a = this,
				b = a.io,
				c = b.config,
				g = a.nativeXhr,
				i = c.type,
				l = c.async,
				o, q = b.mimeType,
				r = b.requestHeaders || {},
				b = b._getUrlForSend(),
				t = k(c),
				s, u;
			if(t) {
				if(s = e[t]) r["If-Modified-Since"] = s;
				if(s = f[t]) r["If-None-Match"] = s
			}(o = c.username) ? g.open(i, b, l, o, c.password): g.open(i, b, l);
			if(i = c.xhrFields)
				for(u in i) g[u] = i[u];
			q && g.overrideMimeType && g.overrideMimeType(q);
			r["X-Requested-With"] ||
				(r["X-Requested-With"] = "XMLHttpRequest");
			if("undefined" !== typeof g.setRequestHeader)
				for(u in r) g.setRequestHeader(u, r[u]);
			g.send(c.hasContent && c.data || null);
			!l || 4 == g.readyState ? a._callback() : j && g instanceof j ? (g.onload = function() {
				g.readyState = 4;
				g.status = 200;
				a._callback()
			}, g.onerror = function() {
				g.readyState = 4;
				g.status = 500;
				a._callback()
			}) : g.onreadystatechange = function() {
				a._callback()
			}
		},
		abort: function() {
			this._callback(0, 1)
		},
		_callback: function(d, g) {
			var c = this.nativeXhr,
				i = this.io,
				l, p, o, q, r, t = i.config;
			try {
				if(g ||
					4 == c.readyState)
					if(j && c instanceof j ? (c.onerror = a.noop, c.onload = a.noop) : c.onreadystatechange = a.noop, g) 4 !== c.readyState && c.abort();
					else {
						l = k(t);
						var s = c.status;
						j && c instanceof j || (i.responseHeadersString = c.getAllResponseHeaders());
						l && (p = c.getResponseHeader("Last-Modified"), o = c.getResponseHeader("ETag"), p && (e[l] = p), o && (f[o] = o));
						if((r = c.responseXML) && r.documentElement) i.responseXML = r;
						i.responseText = c.responseText;
						try {
							q = c.statusText
						} catch(u) {
							q = ""
						}!s && b.isLocal && !t.crossDomain ? s = i.responseText ? 200 : 404 : 1223 ===
							s && (s = 204);
						i._ioReady(s, q)
					}
			} catch(v) {
				c.onreadystatechange = a.noop, g || i._ioReady(-1, v)
			}
		}
	});
	return l
}, {
	requires: ["./base"]
});
KISSY.add("ajax/xhr-transport", function(a, b, i, k, g) {
	function j(b) {
		var d = b.config,
			h = d.crossDomain,
			c = d.xdr || {},
			j = c.subDomain = c.subDomain || {};
		this.io = b;
		if(h) {
			d = d.uri.getHostname();
			if(l.domain && a.endsWith(d, l.domain) && !1 !== j.proxy) return new k(b);
			if(!i.supportCORS && ("flash" === "" + c.use || !e)) return new g(b)
		}
		this.nativeXhr = i.nativeXhr(h);
		return this
	}
	var l = a.Env.host.document,
		e = i._XDomainRequest;
	a.augment(j, i.proto, {
		send: function() {
			this.sendInternal()
		}
	});
	b.setupTransport("*", j);
	return b
}, {
	requires: ["./base",
		"./xhr-transport-base", "./sub-domain-transport", "./xdr-flash-transport"
	]
});
KISSY.add("cookie", function(a) {
	function b(a) {
		return "string" == typeof a && "" !== a
	}
	var i = a.Env.host.document,
		k = encodeURIComponent,
		g = a.urlDecode;
	return a.Cookie = {
		get: function(a) {
			var k, e;
			if(b(a) && (e = ("" + i.cookie).match(RegExp("(?:^| )" + a + "(?:(?:=([^;]*))|;|$)")))) k = e[1] ? g(e[1]) : "";
			return k
		},
		set: function(a, g, e, f, d, h) {
			var g = "" + k(g),
				c = e;
			"number" === typeof c && (c = new Date, c.setTime(c.getTime() + 864E5 * e));
			c instanceof Date && (g += "; expires=" + c.toUTCString());
			b(f) && (g += "; domain=" + f);
			b(d) && (g += "; path=" + d);
			h && (g +=
				"; secure");
			i.cookie = a + "=" + g
		},
		remove: function(a, b, e, f) {
			this.set(a, "", -1, b, e, f)
		}
	}
});
KISSY.add("base/attribute", function(a, b) {
	function i(a, b) {
		return "string" == typeof b ? a[b] : b
	}

	function k(b, c, d, e, f, g, h) {
		h = h || d;
		return b.fire(c + a.ucfirst(d) + "Change", {
			attrName: h,
			subAttrName: g,
			prevVal: e,
			newVal: f
		})
	}

	function g(a, b, c) {
		var d = a[b] || {};
		c && (a[b] = d);
		return d
	}

	function j(a) {
		return g(a, "__attrs", !0)
	}

	function l(a) {
		return g(a, "__attrVals", !0)
	}

	function e(a, c) {
		for(var d = 0, e = c.length; a != b && d < e; d++) a = a[c[d]];
		return a
	}

	function f(a, b) {
		var c;
		!a.hasAttr(b) && -1 !== b.indexOf(".") && (c = b.split("."), b = c.shift());
		return {
			path: c,
			name: b
		}
	}

	function d(c, d, e) {
		var f = e;
		if(d) {
			var c = f = c === b ? {} : a.clone(c),
				g = d.length - 1;
			if(0 <= g) {
				for(var h = 0; h < g; h++) c = c[d[h]];
				c != b && (c[d[h]] = e)
			}
		}
		return f
	}

	function h(a, c, g, h, i) {
		var h = h || {},
			j, m, n;
		n = f(a, c);
		var w = c,
			c = n.name;
		j = n.path;
		n = a.get(c);
		j && (m = e(n, j));
		if(!j && n === g || j && m === g) return b;
		g = d(n, j, g);
		if(!h.silent && !1 === k(a, "before", c, n, g, w)) return !1;
		g = a.setInternal(c, g, h);
		if(!1 === g) return g;
		h.silent || (g = l(a)[c], k(a, "after", c, n, g, w), i ? i.push({
			prevVal: n,
			newVal: g,
			attrName: c,
			subAttrName: w
		}) : k(a, "",
			"*", [n], [g], [w], [c]));
		return a
	}

	function c() {}

	function m(a, c) {
		var d = j(a),
			e = g(d, c),
			f = e.valueFn;
		if(f && (f = i(a, f))) f = f.call(a), f !== b && (e.value = f), delete e.valueFn, d[c] = e;
		return e.value
	}

	function n(a, c, e, h) {
		var k, l;
		k = f(a, c);
		c = k.name;
		if(k = k.path) l = a.get(c), e = d(l, k, e);
		if((k = g(j(a), c, !0).validator) && (k = i(a, k)))
			if(a = k.call(a, e, c, h), a !== b && !0 !== a) return a;
		return b
	}
	c.INVALID = {};
	var p = c.INVALID;
	c.prototype = {
		getAttrs: function() {
			return j(this)
		},
		getAttrVals: function() {
			var a = {},
				b, c = j(this);
			for(b in c) a[b] = this.get(b);
			return a
		},
		addAttr: function(b, c, d) {
			var e = j(this),
				c = a.clone(c);
			e[b] ? a.mix(e[b], c, d) : e[b] = c;
			return this
		},
		addAttrs: function(b, c) {
			var d = this;
			a.each(b, function(a, b) {
				d.addAttr(b, a)
			});
			c && d.set(c);
			return d
		},
		hasAttr: function(a) {
			return j(this).hasOwnProperty(a)
		},
		removeAttr: function(a) {
			this.hasAttr(a) && (delete j(this)[a], delete l(this)[a]);
			return this
		},
		set: function(c, d, e) {
			if(a.isPlainObject(c)) {
				var e = d,
					d = Object(c),
					f = [],
					g, i = [];
				for(c in d)(g = n(this, c, d[c], d)) !== b && i.push(g);
				if(i.length) return e && e.error && e.error(i), !1;
				for(c in d) h(this, c, d[c], e, f);
				var j = [],
					l = [],
					m = [],
					p = [];
				a.each(f, function(a) {
					l.push(a.prevVal);
					m.push(a.newVal);
					j.push(a.attrName);
					p.push(a.subAttrName)
				});
				j.length && k(this, "", "*", l, m, p, j);
				return this
			}
			return h(this, c, d, e)
		},
		setInternal: function(a, c, d) {
			var e, f, h = g(j(this), a, !0).setter;
			f = n(this, a, c);
			if(f !== b) return d.error && d.error(f), !1;
			if(h && (h = i(this, h))) e = h.call(this, c, a);
			if(e === p) return !1;
			e !== b && (c = e);
			l(this)[a] = c
		},
		get: function(a) {
			var c, d = this.hasAttr(a),
				f = l(this),
				h;
			!d && -1 !== a.indexOf(".") && (c =
				a.split("."), a = c.shift());
			d = g(j(this), a).getter;
			h = a in f ? f[a] : m(this, a);
			if(d && (d = i(this, d))) h = d.call(this, h, a);
			!(a in f) && h !== b && (f[a] = h);
			c && (h = e(h, c));
			return h
		},
		reset: function(a, b) {
			if("string" == typeof a) return this.hasAttr(a) ? this.set(a, m(this, a), b) : this;
			var b = a,
				c = j(this),
				d = {};
			for(a in c) d[a] = m(this, a);
			this.set(d, b);
			return this
		}
	};
	return c
});
KISSY.add("base", function(a, b, i) {
	function k(a) {
		var b = this.constructor;
		for(this.userConfig = a; b;) {
			var i = b.ATTRS;
			if(i) {
				var e = void 0;
				for(e in i) this.addAttr(e, i[e], !1)
			}
			b = b.superclass ? b.superclass.constructor : null
		}
		if(a)
			for(var f in a) this.setInternal(f, a[f])
	}
	a.augment(k, i.Target, b);
	k.Attribute = b;
	return a.Base = k
}, {
	requires: ["base/attribute", "event/custom"]
});
KISSY.add("anim", function(a, b, i) {
	b.Easing = i;
	a.mix(a, {
		Anim: b,
		Easing: b.Easing
	});
	return b
}, {
	requires: ["anim/base", "anim/easing", "anim/color", "anim/background-position"]
});
KISSY.add("anim/background-position", function(a, b, i, k) {
	function g(a) {
		a = a.replace(/left|top/g, "0px").replace(/right|bottom/g, "100%").replace(/([0-9\.]+)(\s|\)|$)/g, "$1px$2");
		a = a.match(/(-?[0-9\.]+)(px|%|em|pt)\s(-?[0-9\.]+)(px|%|em|pt)/);
		return [parseFloat(a[1]), a[2], parseFloat(a[3]), a[4]]
	}

	function j() {
		j.superclass.constructor.apply(this, arguments)
	}
	a.extend(j, k, {
		load: function() {
			j.superclass.load.apply(this, arguments);
			this.unit = ["px", "px"];
			if(this.from) {
				var a = g(this.from);
				this.from = [a[0], a[2]]
			} else this.from = [0, 0];
			this.to ? (a = g(this.to), this.to = [a[0], a[2]], this.unit = [a[1], a[3]]) : this.to = [0, 0]
		},
		interpolate: function(a, b, f) {
			var d = this.unit,
				g = j.superclass.interpolate;
			return g(a[0], b[0], f) + d[0] + " " + g(a[1], b[1], f) + d[1]
		},
		cur: function() {
			return b.css(this.anim.config.el, "backgroundPosition")
		},
		update: function() {
			var a = this.prop,
				e = this.anim.config.el,
				f = this.interpolate(this.from, this.to, this.pos);
			b.css(e, a, f)
		}
	});
	return k.Factories.backgroundPosition = j
}, {
	requires: ["dom", "./base", "./fx"]
});
KISSY.add("anim/base", function(a, b, i, k, g, j, l) {
	function e(c, d, g, h, i) {
		if(c.el) return g = c.el, d = c.props, delete c.el, delete c.props, new e(g, d, c);
		if(c = b.get(c)) {
			if(!(this instanceof e)) return new e(c, d, g, h, i);
			d = "string" == typeof d ? a.unparam("" + d, ";", ":") : a.clone(d);
			a.each(d, function(b, c) {
				var e = a.trim(o(c));
				e ? c != e && (d[e] = d[c], delete d[c]) : delete d[c]
			});
			g = a.isPlainObject(g) ? a.clone(g) : {
				duration: parseFloat(g) || void 0,
				easing: h,
				complete: i
			};
			g = a.merge(s, g);
			g.el = c;
			g.props = d;
			this.config = g;
			this._duration = 1E3 * g.duration;
			this.domEl = c;
			this._backupProps = {};
			this._fxs = {};
			this.on("complete", f)
		}
	}

	function f(c) {
		var d, e, f = this.config;
		a.isEmptyObject(d = this._backupProps) || b.css(f.el, d);
		(e = f.complete) && e.call(this, c)
	}

	function d() {
		var c = this.config,
			d = this._backupProps,
			e = c.el,
			f, i, l, m = c.specialEasing || {},
			n = this._fxs,
			o = c.props;
		h(this);
		if(!1 === this.fire("beforeStart")) this.stop(0);
		else {
			if(e.nodeType == q.ELEMENT_NODE)
				for(l in i = "none" === b.css(e, "display"), o)
					if(f = o[l], "hide" == f && i || "show" == f && !i) {
						this.stop(1);
						return
					}
			if(e.nodeType ==
				q.ELEMENT_NODE && (o.width || o.height)) f = e.style, a.mix(d, {
				overflow: f.overflow,
				"overflow-x": f.overflowX,
				"overflow-y": f.overflowY
			}), f.overflow = "hidden", "inline" === b.css(e, "display") && "none" === b.css(e, "float") && (p.ie ? f.zoom = 1 : f.display = "inline-block");
			a.each(o, function(b, d) {
				var e;
				a.isArray(b) ? (e = m[d] = b[1], o[d] = b[0]) : e = m[d] = m[d] || c.easing;
				"string" == typeof e && (e = m[d] = k[e]);
				m[d] = e || k.easeNone
			});
			a.each(t, function(c, d) {
				var f, g;
				if(g = o[d]) f = {}, a.each(c, function(a) {
					f[a] = b.css(e, a);
					m[a] = m[d]
				}), b.css(e, d, g), a.each(f,
					function(a, c) {
						o[c] = b.css(e, c);
						b.css(e, c, a)
					}), delete o[d]
			});
			for(l in o) {
				f = a.trim(o[l]);
				var s, v, x = {
						prop: l,
						anim: this,
						easing: m[l]
					},
					E = j.getFx(x);
				a.inArray(f, r) ? (d[l] = b.style(e, l), "toggle" == f && (f = i ? "show" : "hide"), "hide" == f ? (s = 0, v = E.cur(), d.display = "none") : (v = 0, s = E.cur(), b.css(e, l, v), b.show(e)), f = s) : (s = f, v = E.cur());
				f += "";
				var H = "",
					G = f.match(u);
				if(G) {
					s = parseFloat(G[2]);
					if((H = G[3]) && "px" !== H) b.css(e, l, f), v *= s / E.cur(), b.css(e, l, v + H);
					G[1] && (s = ("-=" === G[1] ? -1 : 1) * s + v)
				}
				x.from = v;
				x.to = s;
				x.unit = H;
				E.load(x);
				n[l] = E
			}
			this._startTime =
				a.now();
			g.start(this)
		}
	}

	function h(c) {
		var d = c.config.el,
			e = b.data(d, v);
		e || b.data(d, v, e = {});
		e[a.stamp(c)] = c
	}

	function c(c) {
		var d = c.config.el,
			e = b.data(d, v);
		e && (delete e[a.stamp(c)], a.isEmptyObject(e) && b.removeData(d, v))
	}

	function m(c, d, e) {
		c = b.data(c, "resume" == e ? x : v);
		c = a.merge(c);
		a.each(c, function(a) {
			if(void 0 === d || a.config.queue == d) a[e]()
		})
	}

	function n(c, d, e, f) {
		e && !1 !== f && l.removeQueue(c, f);
		c = b.data(c, v);
		c = a.merge(c);
		a.each(c, function(a) {
			a.config.queue == f && a.stop(d)
		})
	}
	var p = a.UA,
		o = b._camelCase,
		q = b.NodeType,
		r = ["hide", "show", "toggle"],
		t = {
			background: ["backgroundPosition"],
			border: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
			borderBottom: ["borderBottomWidth"],
			borderLeft: ["borderLeftWidth"],
			borderTop: ["borderTopWidth"],
			borderRight: ["borderRightWidth"],
			font: ["fontSize", "fontWeight"],
			margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
			padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"]
		},
		s = {
			duration: 1,
			easing: "easeNone"
		},
		u = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i;
	e.SHORT_HANDS = t;
	e.prototype = {
		constructor: e,
		isRunning: function() {
			var c = b.data(this.config.el, v);
			return c ? !!c[a.stamp(this)] : 0
		},
		isPaused: function() {
			var c = b.data(this.config.el, x);
			return c ? !!c[a.stamp(this)] : 0
		},
		pause: function() {
			if(this.isRunning()) {
				this._pauseDiff = a.now() - this._startTime;
				g.stop(this);
				c(this);
				var d = this.config.el,
					e = b.data(d, x);
				e || b.data(d, x, e = {});
				e[a.stamp(this)] = this
			}
			return this
		},
		resume: function() {
			if(this.isPaused()) {
				this._startTime = a.now() - this._pauseDiff;
				var c = this.config.el,
					d = b.data(c,
						x);
				d && (delete d[a.stamp(this)], a.isEmptyObject(d) && b.removeData(c, x));
				h(this);
				g.start(this)
			}
			return this
		},
		_runInternal: d,
		run: function() {
			!1 === this.config.queue ? d.call(this) : l.queue(this);
			return this
		},
		_frame: function() {
			var a, b = this.config,
				c = 1,
				d, e, f = this._fxs;
			for(a in f)
				if(!(e = f[a]).finished) b.frame && (d = b.frame(e)), 1 == d || 0 == d ? (e.finished = d, c &= d) : (c &= e.frame()) && b.frame && b.frame(e);
				(!1 === this.fire("step") || c) && this.stop(c)
		},
		stop: function(a) {
			var b = this.config,
				d = b.queue,
				e, f = this._fxs;
			if(!this.isRunning()) return !1 !==
				d && l.remove(this), this;
			if(a) {
				for(e in f)
					if(!(a = f[e]).finished) b.frame ? b.frame(a, 1) : a.frame(1);
				this.fire("complete")
			}
			g.stop(this);
			c(this);
			!1 !== d && l.dequeue(this);
			return this
		}
	};
	a.augment(e, i.Target);
	var v = a.guid("ks-anim-unqueued-" + a.now() + "-"),
		x = a.guid("ks-anim-paused-" + a.now() + "-");
	e.stop = function(c, d, e, f) {
		if(null === f || "string" == typeof f || !1 === f) return n.apply(void 0, arguments);
		e && l.removeQueues(c);
		var g = b.data(c, v),
			g = a.merge(g);
		a.each(g, function(a) {
			a.stop(d)
		})
	};
	a.each(["pause", "resume"], function(a) {
		e[a] =
			function(b, c) {
				if(null === c || "string" == typeof c || !1 === c) return m(b, c, a);
				m(b, void 0, a)
			}
	});
	e.isRunning = function(c) {
		return(c = b.data(c, v)) && !a.isEmptyObject(c)
	};
	e.isPaused = function(c) {
		return(c = b.data(c, x)) && !a.isEmptyObject(c)
	};
	e.Q = l;
	return e
}, {
	requires: "dom,event,./easing,./manager,./fx,./queue".split(",")
});
KISSY.add("anim/color", function(a, b, i, k) {
	function g(a) {
		var a = a + "",
			b;
		if(b = a.match(d)) return [parseInt(b[1]), parseInt(b[2]), parseInt(b[3])];
		if(b = a.match(h)) return [parseInt(b[1]), parseInt(b[2]), parseInt(b[3]), parseInt(b[4])];
		if(b = a.match(c)) {
			for(a = 1; a < b.length; a++) 2 > b[a].length && (b[a] += b[a]);
			return [parseInt(b[1], l), parseInt(b[2], l), parseInt(b[3], l)]
		}
		return f[a = a.toLowerCase()] ? f[a] : [255, 255, 255]
	}

	function j() {
		j.superclass.constructor.apply(this, arguments)
	}
	var l = 16,
		e = Math.floor,
		f = {
			black: [0, 0, 0],
			silver: [192,
				192, 192
			],
			gray: [128, 128, 128],
			white: [255, 255, 255],
			maroon: [128, 0, 0],
			red: [255, 0, 0],
			purple: [128, 0, 128],
			fuchsia: [255, 0, 255],
			green: [0, 128, 0],
			lime: [0, 255, 0],
			olive: [128, 128, 0],
			yellow: [255, 255, 0],
			navy: [0, 0, 128],
			blue: [0, 0, 255],
			teal: [0, 128, 128],
			aqua: [0, 255, 255]
		},
		d = /^rgb\(([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\)$/i,
		h = /^rgba\(([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+),\s*([0-9]+)\)$/i,
		c = /^#?([0-9A-F]{1,2})([0-9A-F]{1,2})([0-9A-F]{1,2})$/i,
		b = i.SHORT_HANDS;
	b.background = b.background || [];
	b.background.push("backgroundColor");
	b.borderColor = ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"];
	b.border.push("borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor");
	b.borderBottom.push("borderBottomColor");
	b.borderLeft.push("borderLeftColor");
	b.borderRight.push("borderRightColor");
	b.borderTop.push("borderTopColor");
	a.extend(j, k, {
		load: function() {
			j.superclass.load.apply(this, arguments);
			this.from && (this.from = g(this.from));
			this.to && (this.to = g(this.to))
		},
		interpolate: function(a, b, c) {
			var d =
				j.superclass.interpolate;
			if(3 == a.length && 3 == b.length) return "rgb(" + [e(d(a[0], b[0], c)), e(d(a[1], b[1], c)), e(d(a[2], b[2], c))].join(", ") + ")";
			if(4 == a.length || 4 == b.length) return "rgba(" + [e(d(a[0], b[0], c)), e(d(a[1], b[1], c)), e(d(a[2], b[2], c)), e(d(a[3] || 1, b[3] || 1, c))].join(", ") + ")"
		}
	});
	a.each("backgroundColor,borderBottomColor,borderLeftColor,borderRightColor,borderTopColor,color,outlineColor".split(","), function(a) {
		k.Factories[a] = j
	});
	return j
}, {
	requires: ["dom", "./base", "./fx"]
});
KISSY.add("anim/easing", function() {
	var a = Math.PI,
		b = Math.pow,
		i = Math.sin,
		k = {
			swing: function(b) {
				return -Math.cos(b * a) / 2 + 0.5
			},
			easeNone: function(a) {
				return a
			},
			easeIn: function(a) {
				return a * a
			},
			easeOut: function(a) {
				return(2 - a) * a
			},
			easeBoth: function(a) {
				return 1 > (a *= 2) ? 0.5 * a * a : 0.5 * (1 - --a * (a - 2))
			},
			easeInStrong: function(a) {
				return a * a * a * a
			},
			easeOutStrong: function(a) {
				return 1 - --a * a * a * a
			},
			easeBothStrong: function(a) {
				return 1 > (a *= 2) ? 0.5 * a * a * a * a : 0.5 * (2 - (a -= 2) * a * a * a)
			},
			elasticIn: function(g) {
				return 0 === g || 1 === g ? g : -(b(2, 10 * (g -=
					1)) * i((g - 0.075) * 2 * a / 0.3))
			},
			elasticOut: function(g) {
				return 0 === g || 1 === g ? g : b(2, -10 * g) * i((g - 0.075) * 2 * a / 0.3) + 1
			},
			elasticBoth: function(g) {
				return 0 === g || 2 === (g *= 2) ? g : 1 > g ? -0.5 * b(2, 10 * (g -= 1)) * i((g - 0.1125) * 2 * a / 0.45) : 0.5 * b(2, -10 * (g -= 1)) * i((g - 0.1125) * 2 * a / 0.45) + 1
			},
			backIn: function(a) {
				1 === a && (a -= 0.001);
				return a * a * (2.70158 * a - 1.70158)
			},
			backOut: function(a) {
				return(a -= 1) * a * (2.70158 * a + 1.70158) + 1
			},
			backBoth: function(a) {
				var b, i = (b = 2.5949095) + 1;
				return 1 > (a *= 2) ? 0.5 * a * a * (i * a - b) : 0.5 * ((a -= 2) * a * (i * a + b) + 2)
			},
			bounceIn: function(a) {
				return 1 -
					k.bounceOut(1 - a)
			},
			bounceOut: function(a) {
				return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375
			},
			bounceBoth: function(a) {
				return 0.5 > a ? 0.5 * k.bounceIn(2 * a) : 0.5 * k.bounceOut(2 * a - 1) + 0.5
			}
		};
	return k
});
KISSY.add("anim/fx", function(a, b, i) {
	function k(a) {
		this.load(a)
	}

	function g(a, g) {
		return(!a.style || null == a.style[g]) && null != b.attr(a, g, i, 1) ? 1 : 0
	}
	k.prototype = {
		constructor: k,
		load: function(b) {
			a.mix(this, b);
			this.pos = 0;
			this.unit = this.unit || ""
		},
		frame: function(b) {
			var g = this.anim,
				e = 0;
			if(this.finished) return 1;
			var f = a.now(),
				d = g._startTime,
				g = g._duration;
			b || f >= g + d ? e = this.pos = 1 : this.pos = this.easing((f - d) / g);
			this.update();
			this.finished = this.finished || e;
			return e
		},
		interpolate: function(b, g, e) {
			return a.isNumber(b) && a.isNumber(g) ?
				(b + (g - b) * e).toFixed(3) : i
		},
		update: function() {
			var a = this.prop,
				k = this.anim.config.el,
				e = this.to,
				f = this.interpolate(this.from, e, this.pos);
			f === i ? this.finished || (this.finished = 1, b.css(k, a, e)) : (f += this.unit, g(k, a) ? b.attr(k, a, f, 1) : b.css(k, a, f))
		},
		cur: function() {
			var a = this.prop,
				k = this.anim.config.el;
			if(g(k, a)) return b.attr(k, a, i, 1);
			var e, a = b.css(k, a);
			return isNaN(e = parseFloat(a)) ? !a || "auto" === a ? 0 : a : e
		}
	};
	k.Factories = {};
	k.getFx = function(a) {
		return new(k.Factories[a.prop] || k)(a)
	};
	return k
}, {
	requires: ["dom"]
});
KISSY.add("anim/manager", function(a) {
	var b = a.stamp;
	return {
		interval: 15,
		runnings: {},
		timer: null,
		start: function(a) {
			var k = b(a);
			this.runnings[k] || (this.runnings[k] = a, this.startTimer())
		},
		stop: function(a) {
			this.notRun(a)
		},
		notRun: function(i) {
			delete this.runnings[b(i)];
			a.isEmptyObject(this.runnings) && this.stopTimer()
		},
		pause: function(a) {
			this.notRun(a)
		},
		resume: function(a) {
			this.start(a)
		},
		startTimer: function() {
			var a = this;
			a.timer || (a.timer = setTimeout(function() {
					a.runFrames() ? a.stopTimer() : (a.timer = 0, a.startTimer())
				},
				a.interval))
		},
		stopTimer: function() {
			var a = this.timer;
			a && (clearTimeout(a), this.timer = 0)
		},
		runFrames: function() {
			var a = 1,
				b, g = this.runnings;
			for(b in g) a = 0, g[b]._frame();
			return a
		}
	}
});
KISSY.add("anim/queue", function(a, b) {
	function i(a, f, d) {
		var f = f || j,
			h, c = b.data(a, g);
		!c && !d && b.data(a, g, c = {});
		c && (h = c[f], !h && !d && (h = c[f] = []));
		return h
	}

	function k(e, f) {
		var f = f || j,
			d = b.data(e, g);
		d && delete d[f];
		a.isEmptyObject(d) && b.removeData(e, g)
	}
	var g = a.guid("ks-queue-" + a.now() + "-"),
		j = a.guid("ks-queue-" + a.now() + "-"),
		l = {
			queueCollectionKey: g,
			queue: function(a) {
				var b = i(a.config.el, a.config.queue);
				b.push(a);
				"..." !== b[0] && l.dequeue(a);
				return b
			},
			remove: function(b) {
				var f = i(b.config.el, b.config.queue, 1);
				f && (b =
					a.indexOf(b, f), -1 < b && f.splice(b, 1))
			},
			removeQueues: function(a) {
				b.removeData(a, g)
			},
			removeQueue: k,
			dequeue: function(a) {
				var b = a.config.el,
					a = a.config.queue,
					d = i(b, a, 1),
					h = d && d.shift();
				"..." == h && (h = d.shift());
				h ? (d.unshift("..."), h._runInternal()) : k(b, a)
			}
		};
	return l
}, {
	requires: ["dom"]
});
KISSY.add("node/anim", function(a, b, i, k, g) {
	function j(a, b, d) {
		for(var h = [], c = {}, d = d || 0; d < b; d++) h.push.apply(h, l[d]);
		for(d = 0; d < h.length; d++) c[h[d]] = a;
		return c
	}
	var l = [
		["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
		["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
		["opacity"]
	];
	a.augment(k, {
		animate: function(b) {
			var f = a.makeArray(arguments);
			a.each(this, function(b) {
				var e = a.clone(f),
					c = e[0];
				c.props ? (c.el = b, i(c).run()) : i.apply(g, [b].concat(e)).run()
			});
			return this
		},
		stop: function(b,
			f, d) {
			a.each(this, function(a) {
				i.stop(a, b, f, d)
			});
			return this
		},
		pause: function(b, f) {
			a.each(this, function(a) {
				i.pause(a, f)
			});
			return this
		},
		resume: function(b, f) {
			a.each(this, function(a) {
				i.resume(a, f)
			});
			return this
		},
		isRunning: function() {
			for(var a = 0; a < this.length; a++)
				if(i.isRunning(this[a])) return !0;
			return !1
		},
		isPaused: function() {
			for(var a = 0; a < this.length; a++)
				if(i.isPaused(this[a])) return 1;
			return 0
		}
	});
	a.each({
		show: j("show", 3),
		hide: j("hide", 3),
		toggle: j("toggle", 3),
		fadeIn: j("show", 3, 2),
		fadeOut: j("hide", 3, 2),
		fadeToggle: j("toggle",
			3, 2),
		slideDown: j("show", 1),
		slideUp: j("hide", 1),
		slideToggle: j("toggle", 1)
	}, function(e, f) {
		k.prototype[f] = function(d, h, c) {
			if(b[f] && !d) b[f](this);
			else a.each(this, function(a) {
				i(a, e, d, c || "easeOut", h).run()
			});
			return this
		}
	})
}, {
	requires: ["dom", "anim", "./base"]
});
KISSY.add("node/attach", function(a, b, i, k, g) {
	function j(a, d, e) {
		e.unshift(d);
		a = b[a].apply(b, e);
		return a === g ? d : a
	}
	var l = k.prototype,
		e = a.makeArray;
	k.KeyCodes = i.KeyCodes;
	a.each("nodeName,equals,contains,index,scrollTop,scrollLeft,height,width,innerHeight,innerWidth,outerHeight,outerWidth,addStyleSheet,appendTo,prependTo,insertBefore,before,after,insertAfter,test,hasClass,addClass,removeClass,replaceClass,toggleClass,removeAttr,hasAttr,hasProp,scrollIntoView,remove,empty,removeData,hasData,unselectable,wrap,wrapAll,replaceWith,wrapInner,unwrap".split(","), function(a) {
		l[a] =
			function() {
				var b = e(arguments);
				return j(a, this, b)
			}
	});
	a.each("filter,first,last,parent,closest,next,prev,clone,siblings,contents,children".split(","), function(a) {
		l[a] = function() {
			var d = e(arguments);
			d.unshift(this);
			d = b[a].apply(b, d);
			return d === g ? this : d === null ? null : new k(d)
		}
	});
	a.each({
		attr: 1,
		text: 0,
		css: 1,
		style: 1,
		val: 0,
		prop: 1,
		offset: 0,
		html: 0,
		outerHTML: 0,
		data: 1
	}, function(f, d) {
		l[d] = function() {
			var h;
			h = e(arguments);
			h[f] === g && !a.isObject(h[0]) ? (h.unshift(this), h = b[d].apply(b, h)) : h = j(d, this, h);
			return h
		}
	});
	a.each("on,detach,fire,fireHandler,delegate,undelegate".split(","),
		function(a) {
			l[a] = function() {
				var b = e(arguments);
				b.unshift(this);
				i[a].apply(i, b);
				return this
			}
		})
}, {
	requires: ["dom", "event/dom", "./base"]
});
KISSY.add("node/base", function(a, b, i) {
	function k(h, c, g) {
		if(!(this instanceof k)) return new k(h, c, g);
		if(h)
			if("string" == typeof h) {
				if(h = b.create(h, c, g), h.nodeType === l.DOCUMENT_FRAGMENT_NODE) return e.apply(this, f(h.childNodes)), this
			} else {
				if(a.isArray(h) || d(h)) return e.apply(this, f(h)), this
			}
		else return this;
		this[0] = h;
		this.length = 1;
		return this
	}
	var g = Array.prototype,
		j = g.slice,
		l = b.NodeType,
		e = g.push,
		f = a.makeArray,
		d = b._isNodeList;
	k.prototype = {
		constructor: k,
		length: 0,
		item: function(b) {
			return a.isNumber(b) ? b >=
				this.length ? null : new k(this[b]) : new k(b)
		},
		add: function(b, c, d) {
			a.isNumber(c) && (d = c, c = i);
			b = k.all(b, c).getDOMNodes();
			c = new k(this);
			d === i ? e.apply(c, b) : (d = [d, 0], d.push.apply(d, b), g.splice.apply(c, d));
			return c
		},
		slice: function(a, b) {
			return new k(j.apply(this, arguments))
		},
		getDOMNodes: function() {
			return j.call(this)
		},
		each: function(b, c) {
			var d = this;
			a.each(d, function(a, e) {
				a = new k(a);
				return b.call(c || a, a, e, d)
			});
			return d
		},
		getDOMNode: function() {
			return this[0]
		},
		end: function() {
			return this.__parent || this
		},
		all: function(a) {
			a =
				0 < this.length ? k.all(a, this) : new k;
			a.__parent = this;
			return a
		},
		one: function(a) {
			a = this.all(a);
			if(a = a.length ? a.slice(0, 1) : null) a.__parent = this;
			return a
		}
	};
	a.mix(k, {
		all: function(d, c) {
			return "string" == typeof d && (d = a.trim(d)) && 3 <= d.length && a.startsWith(d, "<") && a.endsWith(d, ">") ? (c && (c.getDOMNode && (c = c[0]), c = c.ownerDocument || c), new k(d, i, c)) : new k(b.query(d, c))
		},
		one: function(a, b) {
			var d = k.all(a, b);
			return d.length ? d.slice(0, 1) : null
		}
	});
	k.NodeType = l;
	return k
}, {
	requires: ["dom"]
});
KISSY.add("node", function(a, b) {
	a.mix(a, {
		Node: b,
		NodeList: b,
		one: b.one,
		all: b.all
	});
	return b
}, {
	requires: ["node/base", "node/attach", "node/override", "node/anim"]
});
KISSY.add("node/override", function(a, b, i) {
	var k = i.prototype;
	a.each(["append", "prepend", "before", "after"], function(a) {
		k[a] = function(i) {
			"string" == typeof i && (i = b.create(i));
			if(i) b[a](i, this);
			return this
		}
	});
	a.each(["wrap", "wrapAll", "replaceWith", "wrapInner"], function(a) {
		var b = k[a];
		k[a] = function(a) {
			"string" == typeof a && (a = i.all(a, this[0].ownerDocument));
			return b.call(this, a)
		}
	})
}, {
	requires: ["dom", "./base"]
});
KISSY.use("ua,dom,event,node,json,ajax,anim,base,cookie", 0, 1);