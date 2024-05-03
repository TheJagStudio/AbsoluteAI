/*! For license information please see main.de43596d.js.LICENSE.txt */
!(function () {
	var e = {
			132: function (e) {
				"use strict";
				var t = Object.prototype.hasOwnProperty,
					n = Object.prototype.toString,
					r = Object.defineProperty,
					l = Object.getOwnPropertyDescriptor,
					a = function (e) {
						return "function" === typeof Array.isArray ? Array.isArray(e) : "[object Array]" === n.call(e);
					},
					i = function (e) {
						if (!e || "[object Object]" !== n.call(e)) return !1;
						var r,
							l = t.call(e, "constructor"),
							a = e.constructor && e.constructor.prototype && t.call(e.constructor.prototype, "isPrototypeOf");
						if (e.constructor && !l && !a) return !1;
						for (r in e);
						return "undefined" === typeof r || t.call(e, r);
					},
					o = function (e, t) {
						r && "__proto__" === t.name ? r(e, t.name, { enumerable: !0, configurable: !0, value: t.newValue, writable: !0 }) : (e[t.name] = t.newValue);
					},
					u = function (e, n) {
						if ("__proto__" === n) {
							if (!t.call(e, n)) return;
							if (l) return l(e, n).value;
						}
						return e[n];
					};
				e.exports = function e() {
					var t,
						n,
						r,
						l,
						s,
						c,
						f = arguments[0],
						d = 1,
						p = arguments.length,
						h = !1;
					for ("boolean" === typeof f && ((h = f), (f = arguments[1] || {}), (d = 2)), (null == f || ("object" !== typeof f && "function" !== typeof f)) && (f = {}); d < p; ++d) if (null != (t = arguments[d])) for (n in t) (r = u(f, n)), f !== (l = u(t, n)) && (h && l && (i(l) || (s = a(l))) ? (s ? ((s = !1), (c = r && a(r) ? r : [])) : (c = r && i(r) ? r : {}), o(f, { name: n, newValue: e(h, c, l) })) : "undefined" !== typeof l && o(f, { name: n, newValue: l }));
					return f;
				};
			},
			65: function (e) {
				var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
					n = /\n/g,
					r = /^\s*/,
					l = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
					a = /^:\s*/,
					i = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
					o = /^[;\s]*/,
					u = /^\s+|\s+$/g,
					s = "";
				function c(e) {
					return e ? e.replace(u, s) : s;
				}
				e.exports = function (e, u) {
					if ("string" !== typeof e) throw new TypeError("First argument must be a string");
					if (!e) return [];
					u = u || {};
					var f = 1,
						d = 1;
					function p(e) {
						var t = e.match(n);
						t && (f += t.length);
						var r = e.lastIndexOf("\n");
						d = ~r ? e.length - r : d + e.length;
					}
					function h() {
						var e = { line: f, column: d };
						return function (t) {
							return (t.position = new m(e)), b(), t;
						};
					}
					function m(e) {
						(this.start = e), (this.end = { line: f, column: d }), (this.source = u.source);
					}
					m.prototype.content = e;
					var g = [];
					function v(t) {
						var n = new Error(u.source + ":" + f + ":" + d + ": " + t);
						if (((n.reason = t), (n.filename = u.source), (n.line = f), (n.column = d), (n.source = e), !u.silent)) throw n;
						g.push(n);
					}
					function y(t) {
						var n = t.exec(e);
						if (n) {
							var r = n[0];
							return p(r), (e = e.slice(r.length)), n;
						}
					}
					function b() {
						y(r);
					}
					function x(e) {
						var t;
						for (e = e || []; (t = w()); ) !1 !== t && e.push(t);
						return e;
					}
					function w() {
						var t = h();
						if ("/" == e.charAt(0) && "*" == e.charAt(1)) {
							for (var n = 2; s != e.charAt(n) && ("*" != e.charAt(n) || "/" != e.charAt(n + 1)); ) ++n;
							if (((n += 2), s === e.charAt(n - 1))) return v("End of comment missing");
							var r = e.slice(2, n - 2);
							return (d += 2), p(r), (e = e.slice(n)), (d += 2), t({ type: "comment", comment: r });
						}
					}
					function k() {
						var e = h(),
							n = y(l);
						if (n) {
							if ((w(), !y(a))) return v("property missing ':'");
							var r = y(i),
								u = e({ type: "declaration", property: c(n[0].replace(t, s)), value: r ? c(r[0].replace(t, s)) : s });
							return y(o), u;
						}
					}
					return (
						b(),
						(function () {
							var e,
								t = [];
							for (x(t); (e = k()); ) !1 !== e && (t.push(e), x(t));
							return t;
						})()
					);
				};
			},
			586: function (e) {
				e.exports = function (e) {
					return null != e && null != e.constructor && "function" === typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
				};
			},
			888: function (e, t, n) {
				"use strict";
				var r = n(47);
				function l() {}
				function a() {}
				(a.resetWarningCache = l),
					(e.exports = function () {
						function e(e, t, n, l, a, i) {
							if (i !== r) {
								var o = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
								throw ((o.name = "Invariant Violation"), o);
							}
						}
						function t() {
							return e;
						}
						e.isRequired = e;
						var n = { array: e, bigint: e, bool: e, func: e, number: e, object: e, string: e, symbol: e, any: e, arrayOf: t, element: e, elementType: e, instanceOf: t, node: e, objectOf: t, oneOf: t, oneOfType: t, shape: t, exact: t, checkPropTypes: a, resetWarningCache: l };
						return (n.PropTypes = n), n;
					});
			},
			7: function (e, t, n) {
				e.exports = n(888)();
			},
			47: function (e) {
				"use strict";
				e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
			},
			463: function (e, t, n) {
				"use strict";
				var r = n(791),
					l = n(296);
				function a(e) {
					for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
					return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
				}
				var i = new Set(),
					o = {};
				function u(e, t) {
					s(e, t), s(e + "Capture", t);
				}
				function s(e, t) {
					for (o[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
				}
				var c = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
					f = Object.prototype.hasOwnProperty,
					d = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
					p = {},
					h = {};
				function m(e, t, n, r, l, a, i) {
					(this.acceptsBooleans = 2 === t || 3 === t || 4 === t), (this.attributeName = r), (this.attributeNamespace = l), (this.mustUseProperty = n), (this.propertyName = e), (this.type = t), (this.sanitizeURL = a), (this.removeEmptyString = i);
				}
				var g = {};
				"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
					g[e] = new m(e, 0, !1, e, null, !1, !1);
				}),
					[
						["acceptCharset", "accept-charset"],
						["className", "class"],
						["htmlFor", "for"],
						["httpEquiv", "http-equiv"],
					].forEach(function (e) {
						var t = e[0];
						g[t] = new m(t, 1, !1, e[1], null, !1, !1);
					}),
					["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
						g[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
					}),
					["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
						g[e] = new m(e, 2, !1, e, null, !1, !1);
					}),
					"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
						g[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
					}),
					["checked", "multiple", "muted", "selected"].forEach(function (e) {
						g[e] = new m(e, 3, !0, e, null, !1, !1);
					}),
					["capture", "download"].forEach(function (e) {
						g[e] = new m(e, 4, !1, e, null, !1, !1);
					}),
					["cols", "rows", "size", "span"].forEach(function (e) {
						g[e] = new m(e, 6, !1, e, null, !1, !1);
					}),
					["rowSpan", "start"].forEach(function (e) {
						g[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
					});
				var v = /[\-:]([a-z])/g;
				function y(e) {
					return e[1].toUpperCase();
				}
				function b(e, t, n, r) {
					var l = g.hasOwnProperty(t) ? g[t] : null;
					(null !== l ? 0 !== l.type : r || !(2 < t.length) || ("o" !== t[0] && "O" !== t[0]) || ("n" !== t[1] && "N" !== t[1])) &&
						((function (e, t, n, r) {
							if (
								null === t ||
								"undefined" === typeof t ||
								(function (e, t, n, r) {
									if (null !== n && 0 === n.type) return !1;
									switch (typeof t) {
										case "function":
										case "symbol":
											return !0;
										case "boolean":
											return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
										default:
											return !1;
									}
								})(e, t, n, r)
							)
								return !0;
							if (r) return !1;
							if (null !== n)
								switch (n.type) {
									case 3:
										return !t;
									case 4:
										return !1 === t;
									case 5:
										return isNaN(t);
									case 6:
										return isNaN(t) || 1 > t;
								}
							return !1;
						})(t, n, l, r) && (n = null),
						r || null === l
							? (function (e) {
									return !!f.call(h, e) || (!f.call(p, e) && (d.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)));
							  })(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
							: l.mustUseProperty
							? (e[l.propertyName] = null === n ? 3 !== l.type && "" : n)
							: ((t = l.attributeName), (r = l.attributeNamespace), null === n ? e.removeAttribute(t) : ((n = 3 === (l = l.type) || (4 === l && !0 === n) ? "" : "" + n), r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
				}
				"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
					.split(" ")
					.forEach(function (e) {
						var t = e.replace(v, y);
						g[t] = new m(t, 1, !1, e, null, !1, !1);
					}),
					"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
						var t = e.replace(v, y);
						g[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
					}),
					["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
						var t = e.replace(v, y);
						g[t] = new m(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
					}),
					["tabIndex", "crossOrigin"].forEach(function (e) {
						g[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
					}),
					(g.xlinkHref = new m("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1)),
					["src", "href", "action", "formAction"].forEach(function (e) {
						g[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
					});
				var x = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
					w = Symbol.for("react.element"),
					k = Symbol.for("react.portal"),
					S = Symbol.for("react.fragment"),
					C = Symbol.for("react.strict_mode"),
					E = Symbol.for("react.profiler"),
					j = Symbol.for("react.provider"),
					P = Symbol.for("react.context"),
					N = Symbol.for("react.forward_ref"),
					L = Symbol.for("react.suspense"),
					T = Symbol.for("react.suspense_list"),
					F = Symbol.for("react.memo"),
					_ = Symbol.for("react.lazy");
				Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
				var O = Symbol.for("react.offscreen");
				Symbol.for("react.legacy_hidden"), Symbol.for("react.cache"), Symbol.for("react.tracing_marker");
				var D = Symbol.iterator;
				function z(e) {
					return null === e || "object" !== typeof e ? null : "function" === typeof (e = (D && e[D]) || e["@@iterator"]) ? e : null;
				}
				var A,
					R = Object.assign;
				function I(e) {
					if (void 0 === A)
						try {
							throw Error();
						} catch (n) {
							var t = n.stack.trim().match(/\n( *(at )?)/);
							A = (t && t[1]) || "";
						}
					return "\n" + A + e;
				}
				var M = !1;
				function B(e, t) {
					if (!e || M) return "";
					M = !0;
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
								"object" === typeof Reflect && Reflect.construct)
							) {
								try {
									Reflect.construct(t, []);
								} catch (s) {
									var r = s;
								}
								Reflect.construct(e, [], t);
							} else {
								try {
									t.call();
								} catch (s) {
									r = s;
								}
								e.call(t.prototype);
							}
						else {
							try {
								throw Error();
							} catch (s) {
								r = s;
							}
							e();
						}
					} catch (s) {
						if (s && r && "string" === typeof s.stack) {
							for (var l = s.stack.split("\n"), a = r.stack.split("\n"), i = l.length - 1, o = a.length - 1; 1 <= i && 0 <= o && l[i] !== a[o]; ) o--;
							for (; 1 <= i && 0 <= o; i--, o--)
								if (l[i] !== a[o]) {
									if (1 !== i || 1 !== o)
										do {
											if ((i--, 0 > --o || l[i] !== a[o])) {
												var u = "\n" + l[i].replace(" at new ", " at ");
												return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
											}
										} while (1 <= i && 0 <= o);
									break;
								}
						}
					} finally {
						(M = !1), (Error.prepareStackTrace = n);
					}
					return (e = e ? e.displayName || e.name : "") ? I(e) : "";
				}
				function U(e) {
					switch (e.tag) {
						case 5:
							return I(e.type);
						case 16:
							return I("Lazy");
						case 13:
							return I("Suspense");
						case 19:
							return I("SuspenseList");
						case 0:
						case 2:
						case 15:
							return (e = B(e.type, !1));
						case 11:
							return (e = B(e.type.render, !1));
						case 1:
							return (e = B(e.type, !0));
						default:
							return "";
					}
				}
				function H(e) {
					if (null == e) return null;
					if ("function" === typeof e) return e.displayName || e.name || null;
					if ("string" === typeof e) return e;
					switch (e) {
						case S:
							return "Fragment";
						case k:
							return "Portal";
						case E:
							return "Profiler";
						case C:
							return "StrictMode";
						case L:
							return "Suspense";
						case T:
							return "SuspenseList";
					}
					if ("object" === typeof e)
						switch (e.$$typeof) {
							case P:
								return (e.displayName || "Context") + ".Consumer";
							case j:
								return (e._context.displayName || "Context") + ".Provider";
							case N:
								var t = e.render;
								return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
							case F:
								return null !== (t = e.displayName || null) ? t : H(e.type) || "Memo";
							case _:
								(t = e._payload), (e = e._init);
								try {
									return H(e(t));
								} catch (n) {}
						}
					return null;
				}
				function V(e) {
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
							return (e = (e = t.render).displayName || e.name || ""), t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
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
							return H(t);
						case 8:
							return t === C ? "StrictMode" : "Mode";
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
							if ("function" === typeof t) return t.displayName || t.name || null;
							if ("string" === typeof t) return t;
					}
					return null;
				}
				function $(e) {
					switch (typeof e) {
						case "boolean":
						case "number":
						case "string":
						case "undefined":
						case "object":
							return e;
						default:
							return "";
					}
				}
				function W(e) {
					var t = e.type;
					return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t);
				}
				function q(e) {
					e._valueTracker ||
						(e._valueTracker = (function (e) {
							var t = W(e) ? "checked" : "value",
								n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
								r = "" + e[t];
							if (!e.hasOwnProperty(t) && "undefined" !== typeof n && "function" === typeof n.get && "function" === typeof n.set) {
								var l = n.get,
									a = n.set;
								return (
									Object.defineProperty(e, t, {
										configurable: !0,
										get: function () {
											return l.call(this);
										},
										set: function (e) {
											(r = "" + e), a.call(this, e);
										},
									}),
									Object.defineProperty(e, t, { enumerable: n.enumerable }),
									{
										getValue: function () {
											return r;
										},
										setValue: function (e) {
											r = "" + e;
										},
										stopTracking: function () {
											(e._valueTracker = null), delete e[t];
										},
									}
								);
							}
						})(e));
				}
				function Q(e) {
					if (!e) return !1;
					var t = e._valueTracker;
					if (!t) return !0;
					var n = t.getValue(),
						r = "";
					return e && (r = W(e) ? (e.checked ? "true" : "false") : e.value), (e = r) !== n && (t.setValue(e), !0);
				}
				function K(e) {
					if ("undefined" === typeof (e = e || ("undefined" !== typeof document ? document : void 0))) return null;
					try {
						return e.activeElement || e.body;
					} catch (t) {
						return e.body;
					}
				}
				function Y(e, t) {
					var n = t.checked;
					return R({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != n ? n : e._wrapperState.initialChecked });
				}
				function X(e, t) {
					var n = null == t.defaultValue ? "" : t.defaultValue,
						r = null != t.checked ? t.checked : t.defaultChecked;
					(n = $(null != t.value ? t.value : n)), (e._wrapperState = { initialChecked: r, initialValue: n, controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value });
				}
				function Z(e, t) {
					null != (t = t.checked) && b(e, "checked", t, !1);
				}
				function G(e, t) {
					Z(e, t);
					var n = $(t.value),
						r = t.type;
					if (null != n) "number" === r ? ((0 === n && "" === e.value) || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
					else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
					t.hasOwnProperty("value") ? ee(e, t.type, n) : t.hasOwnProperty("defaultValue") && ee(e, t.type, $(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked);
				}
				function J(e, t, n) {
					if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
						var r = t.type;
						if (!(("submit" !== r && "reset" !== r) || (void 0 !== t.value && null !== t.value))) return;
						(t = "" + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
					}
					"" !== (n = e.name) && (e.name = ""), (e.defaultChecked = !!e._wrapperState.initialChecked), "" !== n && (e.name = n);
				}
				function ee(e, t, n) {
					("number" === t && K(e.ownerDocument) === e) || (null == n ? (e.defaultValue = "" + e._wrapperState.initialValue) : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
				}
				var te = Array.isArray;
				function ne(e, t, n, r) {
					if (((e = e.options), t)) {
						t = {};
						for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
						for (n = 0; n < e.length; n++) (l = t.hasOwnProperty("$" + e[n].value)), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
					} else {
						for (n = "" + $(n), t = null, l = 0; l < e.length; l++) {
							if (e[l].value === n) return (e[l].selected = !0), void (r && (e[l].defaultSelected = !0));
							null !== t || e[l].disabled || (t = e[l]);
						}
						null !== t && (t.selected = !0);
					}
				}
				function re(e, t) {
					if (null != t.dangerouslySetInnerHTML) throw Error(a(91));
					return R({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
				}
				function le(e, t) {
					var n = t.value;
					if (null == n) {
						if (((n = t.children), (t = t.defaultValue), null != n)) {
							if (null != t) throw Error(a(92));
							if (te(n)) {
								if (1 < n.length) throw Error(a(93));
								n = n[0];
							}
							t = n;
						}
						null == t && (t = ""), (n = t);
					}
					e._wrapperState = { initialValue: $(n) };
				}
				function ae(e, t) {
					var n = $(t.value),
						r = $(t.defaultValue);
					null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r);
				}
				function ie(e) {
					var t = e.textContent;
					t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t);
				}
				function oe(e) {
					switch (e) {
						case "svg":
							return "http://www.w3.org/2000/svg";
						case "math":
							return "http://www.w3.org/1998/Math/MathML";
						default:
							return "http://www.w3.org/1999/xhtml";
					}
				}
				function ue(e, t) {
					return null == e || "http://www.w3.org/1999/xhtml" === e ? oe(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e;
				}
				var se,
					ce,
					fe =
						((ce = function (e, t) {
							if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e) e.innerHTML = t;
							else {
								for ((se = se || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = se.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
								for (; t.firstChild; ) e.appendChild(t.firstChild);
							}
						}),
						"undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
							? function (e, t, n, r) {
									MSApp.execUnsafeLocalFunction(function () {
										return ce(e, t);
									});
							  }
							: ce);
				function de(e, t) {
					if (t) {
						var n = e.firstChild;
						if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t);
					}
					e.textContent = t;
				}
				var pe = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 },
					he = ["Webkit", "ms", "Moz", "O"];
				function me(e, t, n) {
					return null == t || "boolean" === typeof t || "" === t ? "" : n || "number" !== typeof t || 0 === t || (pe.hasOwnProperty(e) && pe[e]) ? ("" + t).trim() : t + "px";
				}
				function ge(e, t) {
					for (var n in ((e = e.style), t))
						if (t.hasOwnProperty(n)) {
							var r = 0 === n.indexOf("--"),
								l = me(n, t[n], r);
							"float" === n && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
						}
				}
				Object.keys(pe).forEach(function (e) {
					he.forEach(function (t) {
						(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (pe[t] = pe[e]);
					});
				});
				var ve = R({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
				function ye(e, t) {
					if (t) {
						if (ve[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(a(137, e));
						if (null != t.dangerouslySetInnerHTML) {
							if (null != t.children) throw Error(a(60));
							if ("object" !== typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(a(61));
						}
						if (null != t.style && "object" !== typeof t.style) throw Error(a(62));
					}
				}
				function be(e, t) {
					if (-1 === e.indexOf("-")) return "string" === typeof t.is;
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
				var xe = null;
				function we(e) {
					return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e;
				}
				var ke = null,
					Se = null,
					Ce = null;
				function Ee(e) {
					if ((e = bl(e))) {
						if ("function" !== typeof ke) throw Error(a(280));
						var t = e.stateNode;
						t && ((t = wl(t)), ke(e.stateNode, e.type, t));
					}
				}
				function je(e) {
					Se ? (Ce ? Ce.push(e) : (Ce = [e])) : (Se = e);
				}
				function Pe() {
					if (Se) {
						var e = Se,
							t = Ce;
						if (((Ce = Se = null), Ee(e), t)) for (e = 0; e < t.length; e++) Ee(t[e]);
					}
				}
				function Ne(e, t) {
					return e(t);
				}
				function Le() {}
				var Te = !1;
				function Fe(e, t, n) {
					if (Te) return e(t, n);
					Te = !0;
					try {
						return Ne(e, t, n);
					} finally {
						(Te = !1), (null !== Se || null !== Ce) && (Le(), Pe());
					}
				}
				function _e(e, t) {
					var n = e.stateNode;
					if (null === n) return null;
					var r = wl(n);
					if (null === r) return null;
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
							(r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), (e = !r);
							break e;
						default:
							e = !1;
					}
					if (e) return null;
					if (n && "function" !== typeof n) throw Error(a(231, t, typeof n));
					return n;
				}
				var Oe = !1;
				if (c)
					try {
						var De = {};
						Object.defineProperty(De, "passive", {
							get: function () {
								Oe = !0;
							},
						}),
							window.addEventListener("test", De, De),
							window.removeEventListener("test", De, De);
					} catch (ce) {
						Oe = !1;
					}
				function ze(e, t, n, r, l, a, i, o, u) {
					var s = Array.prototype.slice.call(arguments, 3);
					try {
						t.apply(n, s);
					} catch (c) {
						this.onError(c);
					}
				}
				var Ae = !1,
					Re = null,
					Ie = !1,
					Me = null,
					Be = {
						onError: function (e) {
							(Ae = !0), (Re = e);
						},
					};
				function Ue(e, t, n, r, l, a, i, o, u) {
					(Ae = !1), (Re = null), ze.apply(Be, arguments);
				}
				function He(e) {
					var t = e,
						n = e;
					if (e.alternate) for (; t.return; ) t = t.return;
					else {
						e = t;
						do {
							0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
						} while (e);
					}
					return 3 === t.tag ? n : null;
				}
				function Ve(e) {
					if (13 === e.tag) {
						var t = e.memoizedState;
						if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t)) return t.dehydrated;
					}
					return null;
				}
				function $e(e) {
					if (He(e) !== e) throw Error(a(188));
				}
				function We(e) {
					return null !==
						(e = (function (e) {
							var t = e.alternate;
							if (!t) {
								if (null === (t = He(e))) throw Error(a(188));
								return t !== e ? null : e;
							}
							for (var n = e, r = t; ; ) {
								var l = n.return;
								if (null === l) break;
								var i = l.alternate;
								if (null === i) {
									if (null !== (r = l.return)) {
										n = r;
										continue;
									}
									break;
								}
								if (l.child === i.child) {
									for (i = l.child; i; ) {
										if (i === n) return $e(l), e;
										if (i === r) return $e(l), t;
										i = i.sibling;
									}
									throw Error(a(188));
								}
								if (n.return !== r.return) (n = l), (r = i);
								else {
									for (var o = !1, u = l.child; u; ) {
										if (u === n) {
											(o = !0), (n = l), (r = i);
											break;
										}
										if (u === r) {
											(o = !0), (r = l), (n = i);
											break;
										}
										u = u.sibling;
									}
									if (!o) {
										for (u = i.child; u; ) {
											if (u === n) {
												(o = !0), (n = i), (r = l);
												break;
											}
											if (u === r) {
												(o = !0), (r = i), (n = l);
												break;
											}
											u = u.sibling;
										}
										if (!o) throw Error(a(189));
									}
								}
								if (n.alternate !== r) throw Error(a(190));
							}
							if (3 !== n.tag) throw Error(a(188));
							return n.stateNode.current === n ? e : t;
						})(e))
						? qe(e)
						: null;
				}
				function qe(e) {
					if (5 === e.tag || 6 === e.tag) return e;
					for (e = e.child; null !== e; ) {
						var t = qe(e);
						if (null !== t) return t;
						e = e.sibling;
					}
					return null;
				}
				var Qe = l.unstable_scheduleCallback,
					Ke = l.unstable_cancelCallback,
					Ye = l.unstable_shouldYield,
					Xe = l.unstable_requestPaint,
					Ze = l.unstable_now,
					Ge = l.unstable_getCurrentPriorityLevel,
					Je = l.unstable_ImmediatePriority,
					et = l.unstable_UserBlockingPriority,
					tt = l.unstable_NormalPriority,
					nt = l.unstable_LowPriority,
					rt = l.unstable_IdlePriority,
					lt = null,
					at = null;
				var it = Math.clz32
						? Math.clz32
						: function (e) {
								return (e >>>= 0), 0 === e ? 32 : (31 - ((ot(e) / ut) | 0)) | 0;
						  },
					ot = Math.log,
					ut = Math.LN2;
				var st = 64,
					ct = 4194304;
				function ft(e) {
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
							return 4194240 & e;
						case 4194304:
						case 8388608:
						case 16777216:
						case 33554432:
						case 67108864:
							return 130023424 & e;
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
				function dt(e, t) {
					var n = e.pendingLanes;
					if (0 === n) return 0;
					var r = 0,
						l = e.suspendedLanes,
						a = e.pingedLanes,
						i = 268435455 & n;
					if (0 !== i) {
						var o = i & ~l;
						0 !== o ? (r = ft(o)) : 0 !== (a &= i) && (r = ft(a));
					} else 0 !== (i = n & ~l) ? (r = ft(i)) : 0 !== a && (r = ft(a));
					if (0 === r) return 0;
					if (0 !== t && t !== r && 0 === (t & l) && ((l = r & -r) >= (a = t & -t) || (16 === l && 0 !== (4194240 & a)))) return t;
					if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes))) for (e = e.entanglements, t &= r; 0 < t; ) (l = 1 << (n = 31 - it(t))), (r |= e[n]), (t &= ~l);
					return r;
				}
				function pt(e, t) {
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
						default:
							return -1;
					}
				}
				function ht(e) {
					return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0;
				}
				function mt() {
					var e = st;
					return 0 === (4194240 & (st <<= 1)) && (st = 64), e;
				}
				function gt(e) {
					for (var t = [], n = 0; 31 > n; n++) t.push(e);
					return t;
				}
				function vt(e, t, n) {
					(e.pendingLanes |= t), 536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)), ((e = e.eventTimes)[(t = 31 - it(t))] = n);
				}
				function yt(e, t) {
					var n = (e.entangledLanes |= t);
					for (e = e.entanglements; n; ) {
						var r = 31 - it(n),
							l = 1 << r;
						(l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
					}
				}
				var bt = 0;
				function xt(e) {
					return 1 < (e &= -e) ? (4 < e ? (0 !== (268435455 & e) ? 16 : 536870912) : 4) : 1;
				}
				var wt,
					kt,
					St,
					Ct,
					Et,
					jt = !1,
					Pt = [],
					Nt = null,
					Lt = null,
					Tt = null,
					Ft = new Map(),
					_t = new Map(),
					Ot = [],
					Dt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
				function zt(e, t) {
					switch (e) {
						case "focusin":
						case "focusout":
							Nt = null;
							break;
						case "dragenter":
						case "dragleave":
							Lt = null;
							break;
						case "mouseover":
						case "mouseout":
							Tt = null;
							break;
						case "pointerover":
						case "pointerout":
							Ft.delete(t.pointerId);
							break;
						case "gotpointercapture":
						case "lostpointercapture":
							_t.delete(t.pointerId);
					}
				}
				function At(e, t, n, r, l, a) {
					return null === e || e.nativeEvent !== a ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [l] }), null !== t && null !== (t = bl(t)) && kt(t), e) : ((e.eventSystemFlags |= r), (t = e.targetContainers), null !== l && -1 === t.indexOf(l) && t.push(l), e);
				}
				function Rt(e) {
					var t = yl(e.target);
					if (null !== t) {
						var n = He(t);
						if (null !== n)
							if (13 === (t = n.tag)) {
								if (null !== (t = Ve(n)))
									return (
										(e.blockedOn = t),
										void Et(e.priority, function () {
											St(n);
										})
									);
							} else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
					}
					e.blockedOn = null;
				}
				function It(e) {
					if (null !== e.blockedOn) return !1;
					for (var t = e.targetContainers; 0 < t.length; ) {
						var n = Yt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
						if (null !== n) return null !== (t = bl(n)) && kt(t), (e.blockedOn = n), !1;
						var r = new (n = e.nativeEvent).constructor(n.type, n);
						(xe = r), n.target.dispatchEvent(r), (xe = null), t.shift();
					}
					return !0;
				}
				function Mt(e, t, n) {
					It(e) && n.delete(t);
				}
				function Bt() {
					(jt = !1), null !== Nt && It(Nt) && (Nt = null), null !== Lt && It(Lt) && (Lt = null), null !== Tt && It(Tt) && (Tt = null), Ft.forEach(Mt), _t.forEach(Mt);
				}
				function Ut(e, t) {
					e.blockedOn === t && ((e.blockedOn = null), jt || ((jt = !0), l.unstable_scheduleCallback(l.unstable_NormalPriority, Bt)));
				}
				function Ht(e) {
					function t(t) {
						return Ut(t, e);
					}
					if (0 < Pt.length) {
						Ut(Pt[0], e);
						for (var n = 1; n < Pt.length; n++) {
							var r = Pt[n];
							r.blockedOn === e && (r.blockedOn = null);
						}
					}
					for (null !== Nt && Ut(Nt, e), null !== Lt && Ut(Lt, e), null !== Tt && Ut(Tt, e), Ft.forEach(t), _t.forEach(t), n = 0; n < Ot.length; n++) (r = Ot[n]).blockedOn === e && (r.blockedOn = null);
					for (; 0 < Ot.length && null === (n = Ot[0]).blockedOn; ) Rt(n), null === n.blockedOn && Ot.shift();
				}
				var Vt = x.ReactCurrentBatchConfig,
					$t = !0;
				function Wt(e, t, n, r) {
					var l = bt,
						a = Vt.transition;
					Vt.transition = null;
					try {
						(bt = 1), Qt(e, t, n, r);
					} finally {
						(bt = l), (Vt.transition = a);
					}
				}
				function qt(e, t, n, r) {
					var l = bt,
						a = Vt.transition;
					Vt.transition = null;
					try {
						(bt = 4), Qt(e, t, n, r);
					} finally {
						(bt = l), (Vt.transition = a);
					}
				}
				function Qt(e, t, n, r) {
					if ($t) {
						var l = Yt(e, t, n, r);
						if (null === l) $r(e, t, r, Kt, n), zt(e, r);
						else if (
							(function (e, t, n, r, l) {
								switch (t) {
									case "focusin":
										return (Nt = At(Nt, e, t, n, r, l)), !0;
									case "dragenter":
										return (Lt = At(Lt, e, t, n, r, l)), !0;
									case "mouseover":
										return (Tt = At(Tt, e, t, n, r, l)), !0;
									case "pointerover":
										var a = l.pointerId;
										return Ft.set(a, At(Ft.get(a) || null, e, t, n, r, l)), !0;
									case "gotpointercapture":
										return (a = l.pointerId), _t.set(a, At(_t.get(a) || null, e, t, n, r, l)), !0;
								}
								return !1;
							})(l, e, t, n, r)
						)
							r.stopPropagation();
						else if ((zt(e, r), 4 & t && -1 < Dt.indexOf(e))) {
							for (; null !== l; ) {
								var a = bl(l);
								if ((null !== a && wt(a), null === (a = Yt(e, t, n, r)) && $r(e, t, r, Kt, n), a === l)) break;
								l = a;
							}
							null !== l && r.stopPropagation();
						} else $r(e, t, r, null, n);
					}
				}
				var Kt = null;
				function Yt(e, t, n, r) {
					if (((Kt = null), null !== (e = yl((e = we(r))))))
						if (null === (t = He(e))) e = null;
						else if (13 === (n = t.tag)) {
							if (null !== (e = Ve(t))) return e;
							e = null;
						} else if (3 === n) {
							if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
							e = null;
						} else t !== e && (e = null);
					return (Kt = e), null;
				}
				function Xt(e) {
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
							switch (Ge()) {
								case Je:
									return 1;
								case et:
									return 4;
								case tt:
								case nt:
									return 16;
								case rt:
									return 536870912;
								default:
									return 16;
							}
						default:
							return 16;
					}
				}
				var Zt = null,
					Gt = null,
					Jt = null;
				function en() {
					if (Jt) return Jt;
					var e,
						t,
						n = Gt,
						r = n.length,
						l = "value" in Zt ? Zt.value : Zt.textContent,
						a = l.length;
					for (e = 0; e < r && n[e] === l[e]; e++);
					var i = r - e;
					for (t = 1; t <= i && n[r - t] === l[a - t]; t++);
					return (Jt = l.slice(e, 1 < t ? 1 - t : void 0));
				}
				function tn(e) {
					var t = e.keyCode;
					return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t), 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0;
				}
				function nn() {
					return !0;
				}
				function rn() {
					return !1;
				}
				function ln(e) {
					function t(t, n, r, l, a) {
						for (var i in ((this._reactName = t), (this._targetInst = r), (this.type = n), (this.nativeEvent = l), (this.target = a), (this.currentTarget = null), e)) e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(l) : l[i]));
						return (this.isDefaultPrevented = (null != l.defaultPrevented ? l.defaultPrevented : !1 === l.returnValue) ? nn : rn), (this.isPropagationStopped = rn), this;
					}
					return (
						R(t.prototype, {
							preventDefault: function () {
								this.defaultPrevented = !0;
								var e = this.nativeEvent;
								e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1), (this.isDefaultPrevented = nn));
							},
							stopPropagation: function () {
								var e = this.nativeEvent;
								e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0), (this.isPropagationStopped = nn));
							},
							persist: function () {},
							isPersistent: nn,
						}),
						t
					);
				}
				var an,
					on,
					un,
					sn = {
						eventPhase: 0,
						bubbles: 0,
						cancelable: 0,
						timeStamp: function (e) {
							return e.timeStamp || Date.now();
						},
						defaultPrevented: 0,
						isTrusted: 0,
					},
					cn = ln(sn),
					fn = R({}, sn, { view: 0, detail: 0 }),
					dn = ln(fn),
					pn = R({}, fn, {
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
						getModifierState: En,
						button: 0,
						buttons: 0,
						relatedTarget: function (e) {
							return void 0 === e.relatedTarget ? (e.fromElement === e.srcElement ? e.toElement : e.fromElement) : e.relatedTarget;
						},
						movementX: function (e) {
							return "movementX" in e ? e.movementX : (e !== un && (un && "mousemove" === e.type ? ((an = e.screenX - un.screenX), (on = e.screenY - un.screenY)) : (on = an = 0), (un = e)), an);
						},
						movementY: function (e) {
							return "movementY" in e ? e.movementY : on;
						},
					}),
					hn = ln(pn),
					mn = ln(R({}, pn, { dataTransfer: 0 })),
					gn = ln(R({}, fn, { relatedTarget: 0 })),
					vn = ln(R({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
					yn = R({}, sn, {
						clipboardData: function (e) {
							return "clipboardData" in e ? e.clipboardData : window.clipboardData;
						},
					}),
					bn = ln(yn),
					xn = ln(R({}, sn, { data: 0 })),
					wn = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" },
					kn = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" },
					Sn = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
				function Cn(e) {
					var t = this.nativeEvent;
					return t.getModifierState ? t.getModifierState(e) : !!(e = Sn[e]) && !!t[e];
				}
				function En() {
					return Cn;
				}
				var jn = R({}, fn, {
						key: function (e) {
							if (e.key) {
								var t = wn[e.key] || e.key;
								if ("Unidentified" !== t) return t;
							}
							return "keypress" === e.type ? (13 === (e = tn(e)) ? "Enter" : String.fromCharCode(e)) : "keydown" === e.type || "keyup" === e.type ? kn[e.keyCode] || "Unidentified" : "";
						},
						code: 0,
						location: 0,
						ctrlKey: 0,
						shiftKey: 0,
						altKey: 0,
						metaKey: 0,
						repeat: 0,
						locale: 0,
						getModifierState: En,
						charCode: function (e) {
							return "keypress" === e.type ? tn(e) : 0;
						},
						keyCode: function (e) {
							return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
						},
						which: function (e) {
							return "keypress" === e.type ? tn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
						},
					}),
					Pn = ln(jn),
					Nn = ln(R({}, pn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 })),
					Ln = ln(R({}, fn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: En })),
					Tn = ln(R({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
					Fn = R({}, pn, {
						deltaX: function (e) {
							return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
						},
						deltaY: function (e) {
							return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
						},
						deltaZ: 0,
						deltaMode: 0,
					}),
					_n = ln(Fn),
					On = [9, 13, 27, 32],
					Dn = c && "CompositionEvent" in window,
					zn = null;
				c && "documentMode" in document && (zn = document.documentMode);
				var An = c && "TextEvent" in window && !zn,
					Rn = c && (!Dn || (zn && 8 < zn && 11 >= zn)),
					In = String.fromCharCode(32),
					Mn = !1;
				function Bn(e, t) {
					switch (e) {
						case "keyup":
							return -1 !== On.indexOf(t.keyCode);
						case "keydown":
							return 229 !== t.keyCode;
						case "keypress":
						case "mousedown":
						case "focusout":
							return !0;
						default:
							return !1;
					}
				}
				function Un(e) {
					return "object" === typeof (e = e.detail) && "data" in e ? e.data : null;
				}
				var Hn = !1;
				var Vn = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
				function $n(e) {
					var t = e && e.nodeName && e.nodeName.toLowerCase();
					return "input" === t ? !!Vn[e.type] : "textarea" === t;
				}
				function Wn(e, t, n, r) {
					je(r), 0 < (t = qr(t, "onChange")).length && ((n = new cn("onChange", "change", null, n, r)), e.push({ event: n, listeners: t }));
				}
				var qn = null,
					Qn = null;
				function Kn(e) {
					Ir(e, 0);
				}
				function Yn(e) {
					if (Q(xl(e))) return e;
				}
				function Xn(e, t) {
					if ("change" === e) return t;
				}
				var Zn = !1;
				if (c) {
					var Gn;
					if (c) {
						var Jn = "oninput" in document;
						if (!Jn) {
							var er = document.createElement("div");
							er.setAttribute("oninput", "return;"), (Jn = "function" === typeof er.oninput);
						}
						Gn = Jn;
					} else Gn = !1;
					Zn = Gn && (!document.documentMode || 9 < document.documentMode);
				}
				function tr() {
					qn && (qn.detachEvent("onpropertychange", nr), (Qn = qn = null));
				}
				function nr(e) {
					if ("value" === e.propertyName && Yn(Qn)) {
						var t = [];
						Wn(t, Qn, e, we(e)), Fe(Kn, t);
					}
				}
				function rr(e, t, n) {
					"focusin" === e ? (tr(), (Qn = n), (qn = t).attachEvent("onpropertychange", nr)) : "focusout" === e && tr();
				}
				function lr(e) {
					if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Yn(Qn);
				}
				function ar(e, t) {
					if ("click" === e) return Yn(t);
				}
				function ir(e, t) {
					if ("input" === e || "change" === e) return Yn(t);
				}
				var or =
					"function" === typeof Object.is
						? Object.is
						: function (e, t) {
								return (e === t && (0 !== e || 1 / e === 1 / t)) || (e !== e && t !== t);
						  };
				function ur(e, t) {
					if (or(e, t)) return !0;
					if ("object" !== typeof e || null === e || "object" !== typeof t || null === t) return !1;
					var n = Object.keys(e),
						r = Object.keys(t);
					if (n.length !== r.length) return !1;
					for (r = 0; r < n.length; r++) {
						var l = n[r];
						if (!f.call(t, l) || !or(e[l], t[l])) return !1;
					}
					return !0;
				}
				function sr(e) {
					for (; e && e.firstChild; ) e = e.firstChild;
					return e;
				}
				function cr(e, t) {
					var n,
						r = sr(e);
					for (e = 0; r; ) {
						if (3 === r.nodeType) {
							if (((n = e + r.textContent.length), e <= t && n >= t)) return { node: r, offset: t - e };
							e = n;
						}
						e: {
							for (; r; ) {
								if (r.nextSibling) {
									r = r.nextSibling;
									break e;
								}
								r = r.parentNode;
							}
							r = void 0;
						}
						r = sr(r);
					}
				}
				function fr(e, t) {
					return !(!e || !t) && (e === t || ((!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? fr(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))));
				}
				function dr() {
					for (var e = window, t = K(); t instanceof e.HTMLIFrameElement; ) {
						try {
							var n = "string" === typeof t.contentWindow.location.href;
						} catch (r) {
							n = !1;
						}
						if (!n) break;
						t = K((e = t.contentWindow).document);
					}
					return t;
				}
				function pr(e) {
					var t = e && e.nodeName && e.nodeName.toLowerCase();
					return t && (("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type)) || "textarea" === t || "true" === e.contentEditable);
				}
				function hr(e) {
					var t = dr(),
						n = e.focusedElem,
						r = e.selectionRange;
					if (t !== n && n && n.ownerDocument && fr(n.ownerDocument.documentElement, n)) {
						if (null !== r && pr(n))
							if (((t = r.start), void 0 === (e = r.end) && (e = t), "selectionStart" in n)) (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
							else if ((e = ((t = n.ownerDocument || document) && t.defaultView) || window).getSelection) {
								e = e.getSelection();
								var l = n.textContent.length,
									a = Math.min(r.start, l);
								(r = void 0 === r.end ? a : Math.min(r.end, l)), !e.extend && a > r && ((l = r), (r = a), (a = l)), (l = cr(n, a));
								var i = cr(n, r);
								l && i && (1 !== e.rangeCount || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && ((t = t.createRange()).setStart(l.node, l.offset), e.removeAllRanges(), a > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
							}
						for (t = [], e = n; (e = e.parentNode); ) 1 === e.nodeType && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
						for ("function" === typeof n.focus && n.focus(), n = 0; n < t.length; n++) ((e = t[n]).element.scrollLeft = e.left), (e.element.scrollTop = e.top);
					}
				}
				var mr = c && "documentMode" in document && 11 >= document.documentMode,
					gr = null,
					vr = null,
					yr = null,
					br = !1;
				function xr(e, t, n) {
					var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
					br || null == gr || gr !== K(r) || ("selectionStart" in (r = gr) && pr(r) ? (r = { start: r.selectionStart, end: r.selectionEnd }) : (r = { anchorNode: (r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()).anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), (yr && ur(yr, r)) || ((yr = r), 0 < (r = qr(vr, "onSelect")).length && ((t = new cn("onSelect", "select", null, t, n)), e.push({ event: t, listeners: r }), (t.target = gr))));
				}
				function wr(e, t) {
					var n = {};
					return (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), n;
				}
				var kr = { animationend: wr("Animation", "AnimationEnd"), animationiteration: wr("Animation", "AnimationIteration"), animationstart: wr("Animation", "AnimationStart"), transitionend: wr("Transition", "TransitionEnd") },
					Sr = {},
					Cr = {};
				function Er(e) {
					if (Sr[e]) return Sr[e];
					if (!kr[e]) return e;
					var t,
						n = kr[e];
					for (t in n) if (n.hasOwnProperty(t) && t in Cr) return (Sr[e] = n[t]);
					return e;
				}
				c && ((Cr = document.createElement("div").style), "AnimationEvent" in window || (delete kr.animationend.animation, delete kr.animationiteration.animation, delete kr.animationstart.animation), "TransitionEvent" in window || delete kr.transitionend.transition);
				var jr = Er("animationend"),
					Pr = Er("animationiteration"),
					Nr = Er("animationstart"),
					Lr = Er("transitionend"),
					Tr = new Map(),
					Fr = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
				function _r(e, t) {
					Tr.set(e, t), u(t, [e]);
				}
				for (var Or = 0; Or < Fr.length; Or++) {
					var Dr = Fr[Or];
					_r(Dr.toLowerCase(), "on" + (Dr[0].toUpperCase() + Dr.slice(1)));
				}
				_r(jr, "onAnimationEnd"),
					_r(Pr, "onAnimationIteration"),
					_r(Nr, "onAnimationStart"),
					_r("dblclick", "onDoubleClick"),
					_r("focusin", "onFocus"),
					_r("focusout", "onBlur"),
					_r(Lr, "onTransitionEnd"),
					s("onMouseEnter", ["mouseout", "mouseover"]),
					s("onMouseLeave", ["mouseout", "mouseover"]),
					s("onPointerEnter", ["pointerout", "pointerover"]),
					s("onPointerLeave", ["pointerout", "pointerover"]),
					u("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
					u("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
					u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
					u("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
					u("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
					u("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
				var zr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
					Ar = new Set("cancel close invalid load scroll toggle".split(" ").concat(zr));
				function Rr(e, t, n) {
					var r = e.type || "unknown-event";
					(e.currentTarget = n),
						(function (e, t, n, r, l, i, o, u, s) {
							if ((Ue.apply(this, arguments), Ae)) {
								if (!Ae) throw Error(a(198));
								var c = Re;
								(Ae = !1), (Re = null), Ie || ((Ie = !0), (Me = c));
							}
						})(r, t, void 0, e),
						(e.currentTarget = null);
				}
				function Ir(e, t) {
					t = 0 !== (4 & t);
					for (var n = 0; n < e.length; n++) {
						var r = e[n],
							l = r.event;
						r = r.listeners;
						e: {
							var a = void 0;
							if (t)
								for (var i = r.length - 1; 0 <= i; i--) {
									var o = r[i],
										u = o.instance,
										s = o.currentTarget;
									if (((o = o.listener), u !== a && l.isPropagationStopped())) break e;
									Rr(l, o, s), (a = u);
								}
							else
								for (i = 0; i < r.length; i++) {
									if (((u = (o = r[i]).instance), (s = o.currentTarget), (o = o.listener), u !== a && l.isPropagationStopped())) break e;
									Rr(l, o, s), (a = u);
								}
						}
					}
					if (Ie) throw ((e = Me), (Ie = !1), (Me = null), e);
				}
				function Mr(e, t) {
					var n = t[ml];
					void 0 === n && (n = t[ml] = new Set());
					var r = e + "__bubble";
					n.has(r) || (Vr(t, e, 2, !1), n.add(r));
				}
				function Br(e, t, n) {
					var r = 0;
					t && (r |= 4), Vr(n, e, r, t);
				}
				var Ur = "_reactListening" + Math.random().toString(36).slice(2);
				function Hr(e) {
					if (!e[Ur]) {
						(e[Ur] = !0),
							i.forEach(function (t) {
								"selectionchange" !== t && (Ar.has(t) || Br(t, !1, e), Br(t, !0, e));
							});
						var t = 9 === e.nodeType ? e : e.ownerDocument;
						null === t || t[Ur] || ((t[Ur] = !0), Br("selectionchange", !1, t));
					}
				}
				function Vr(e, t, n, r) {
					switch (Xt(t)) {
						case 1:
							var l = Wt;
							break;
						case 4:
							l = qt;
							break;
						default:
							l = Qt;
					}
					(n = l.bind(null, t, n, e)), (l = void 0), !Oe || ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) || (l = !0), r ? (void 0 !== l ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0)) : void 0 !== l ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
				}
				function $r(e, t, n, r, l) {
					var a = r;
					if (0 === (1 & t) && 0 === (2 & t) && null !== r)
						e: for (;;) {
							if (null === r) return;
							var i = r.tag;
							if (3 === i || 4 === i) {
								var o = r.stateNode.containerInfo;
								if (o === l || (8 === o.nodeType && o.parentNode === l)) break;
								if (4 === i)
									for (i = r.return; null !== i; ) {
										var u = i.tag;
										if ((3 === u || 4 === u) && ((u = i.stateNode.containerInfo) === l || (8 === u.nodeType && u.parentNode === l))) return;
										i = i.return;
									}
								for (; null !== o; ) {
									if (null === (i = yl(o))) return;
									if (5 === (u = i.tag) || 6 === u) {
										r = a = i;
										continue e;
									}
									o = o.parentNode;
								}
							}
							r = r.return;
						}
					Fe(function () {
						var r = a,
							l = we(n),
							i = [];
						e: {
							var o = Tr.get(e);
							if (void 0 !== o) {
								var u = cn,
									s = e;
								switch (e) {
									case "keypress":
										if (0 === tn(n)) break e;
									case "keydown":
									case "keyup":
										u = Pn;
										break;
									case "focusin":
										(s = "focus"), (u = gn);
										break;
									case "focusout":
										(s = "blur"), (u = gn);
										break;
									case "beforeblur":
									case "afterblur":
										u = gn;
										break;
									case "click":
										if (2 === n.button) break e;
									case "auxclick":
									case "dblclick":
									case "mousedown":
									case "mousemove":
									case "mouseup":
									case "mouseout":
									case "mouseover":
									case "contextmenu":
										u = hn;
										break;
									case "drag":
									case "dragend":
									case "dragenter":
									case "dragexit":
									case "dragleave":
									case "dragover":
									case "dragstart":
									case "drop":
										u = mn;
										break;
									case "touchcancel":
									case "touchend":
									case "touchmove":
									case "touchstart":
										u = Ln;
										break;
									case jr:
									case Pr:
									case Nr:
										u = vn;
										break;
									case Lr:
										u = Tn;
										break;
									case "scroll":
										u = dn;
										break;
									case "wheel":
										u = _n;
										break;
									case "copy":
									case "cut":
									case "paste":
										u = bn;
										break;
									case "gotpointercapture":
									case "lostpointercapture":
									case "pointercancel":
									case "pointerdown":
									case "pointermove":
									case "pointerout":
									case "pointerover":
									case "pointerup":
										u = Nn;
								}
								var c = 0 !== (4 & t),
									f = !c && "scroll" === e,
									d = c ? (null !== o ? o + "Capture" : null) : o;
								c = [];
								for (var p, h = r; null !== h; ) {
									var m = (p = h).stateNode;
									if ((5 === p.tag && null !== m && ((p = m), null !== d && null != (m = _e(h, d)) && c.push(Wr(h, m, p))), f)) break;
									h = h.return;
								}
								0 < c.length && ((o = new u(o, s, null, n, l)), i.push({ event: o, listeners: c }));
							}
						}
						if (0 === (7 & t)) {
							if (((u = "mouseout" === e || "pointerout" === e), (!(o = "mouseover" === e || "pointerover" === e) || n === xe || !(s = n.relatedTarget || n.fromElement) || (!yl(s) && !s[hl])) && (u || o) && ((o = l.window === l ? l : (o = l.ownerDocument) ? o.defaultView || o.parentWindow : window), u ? ((u = r), null !== (s = (s = n.relatedTarget || n.toElement) ? yl(s) : null) && (s !== (f = He(s)) || (5 !== s.tag && 6 !== s.tag)) && (s = null)) : ((u = null), (s = r)), u !== s))) {
								if (((c = hn), (m = "onMouseLeave"), (d = "onMouseEnter"), (h = "mouse"), ("pointerout" !== e && "pointerover" !== e) || ((c = Nn), (m = "onPointerLeave"), (d = "onPointerEnter"), (h = "pointer")), (f = null == u ? o : xl(u)), (p = null == s ? o : xl(s)), ((o = new c(m, h + "leave", u, n, l)).target = f), (o.relatedTarget = p), (m = null), yl(l) === r && (((c = new c(d, h + "enter", s, n, l)).target = p), (c.relatedTarget = f), (m = c)), (f = m), u && s))
									e: {
										for (d = s, h = 0, p = c = u; p; p = Qr(p)) h++;
										for (p = 0, m = d; m; m = Qr(m)) p++;
										for (; 0 < h - p; ) (c = Qr(c)), h--;
										for (; 0 < p - h; ) (d = Qr(d)), p--;
										for (; h--; ) {
											if (c === d || (null !== d && c === d.alternate)) break e;
											(c = Qr(c)), (d = Qr(d));
										}
										c = null;
									}
								else c = null;
								null !== u && Kr(i, o, u, c, !1), null !== s && null !== f && Kr(i, f, s, c, !0);
							}
							if ("select" === (u = (o = r ? xl(r) : window).nodeName && o.nodeName.toLowerCase()) || ("input" === u && "file" === o.type)) var g = Xn;
							else if ($n(o))
								if (Zn) g = ir;
								else {
									g = lr;
									var v = rr;
								}
							else (u = o.nodeName) && "input" === u.toLowerCase() && ("checkbox" === o.type || "radio" === o.type) && (g = ar);
							switch ((g && (g = g(e, r)) ? Wn(i, g, n, l) : (v && v(e, o, r), "focusout" === e && (v = o._wrapperState) && v.controlled && "number" === o.type && ee(o, "number", o.value)), (v = r ? xl(r) : window), e)) {
								case "focusin":
									($n(v) || "true" === v.contentEditable) && ((gr = v), (vr = r), (yr = null));
									break;
								case "focusout":
									yr = vr = gr = null;
									break;
								case "mousedown":
									br = !0;
									break;
								case "contextmenu":
								case "mouseup":
								case "dragend":
									(br = !1), xr(i, n, l);
									break;
								case "selectionchange":
									if (mr) break;
								case "keydown":
								case "keyup":
									xr(i, n, l);
							}
							var y;
							if (Dn)
								e: {
									switch (e) {
										case "compositionstart":
											var b = "onCompositionStart";
											break e;
										case "compositionend":
											b = "onCompositionEnd";
											break e;
										case "compositionupdate":
											b = "onCompositionUpdate";
											break e;
									}
									b = void 0;
								}
							else Hn ? Bn(e, n) && (b = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
							b && (Rn && "ko" !== n.locale && (Hn || "onCompositionStart" !== b ? "onCompositionEnd" === b && Hn && (y = en()) : ((Gt = "value" in (Zt = l) ? Zt.value : Zt.textContent), (Hn = !0))), 0 < (v = qr(r, b)).length && ((b = new xn(b, e, null, n, l)), i.push({ event: b, listeners: v }), y ? (b.data = y) : null !== (y = Un(n)) && (b.data = y))),
								(y = An
									? (function (e, t) {
											switch (e) {
												case "compositionend":
													return Un(t);
												case "keypress":
													return 32 !== t.which ? null : ((Mn = !0), In);
												case "textInput":
													return (e = t.data) === In && Mn ? null : e;
												default:
													return null;
											}
									  })(e, n)
									: (function (e, t) {
											if (Hn) return "compositionend" === e || (!Dn && Bn(e, t)) ? ((e = en()), (Jt = Gt = Zt = null), (Hn = !1), e) : null;
											switch (e) {
												case "paste":
												default:
													return null;
												case "keypress":
													if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
														if (t.char && 1 < t.char.length) return t.char;
														if (t.which) return String.fromCharCode(t.which);
													}
													return null;
												case "compositionend":
													return Rn && "ko" !== t.locale ? null : t.data;
											}
									  })(e, n)) &&
									0 < (r = qr(r, "onBeforeInput")).length &&
									((l = new xn("onBeforeInput", "beforeinput", null, n, l)), i.push({ event: l, listeners: r }), (l.data = y));
						}
						Ir(i, t);
					});
				}
				function Wr(e, t, n) {
					return { instance: e, listener: t, currentTarget: n };
				}
				function qr(e, t) {
					for (var n = t + "Capture", r = []; null !== e; ) {
						var l = e,
							a = l.stateNode;
						5 === l.tag && null !== a && ((l = a), null != (a = _e(e, n)) && r.unshift(Wr(e, a, l)), null != (a = _e(e, t)) && r.push(Wr(e, a, l))), (e = e.return);
					}
					return r;
				}
				function Qr(e) {
					if (null === e) return null;
					do {
						e = e.return;
					} while (e && 5 !== e.tag);
					return e || null;
				}
				function Kr(e, t, n, r, l) {
					for (var a = t._reactName, i = []; null !== n && n !== r; ) {
						var o = n,
							u = o.alternate,
							s = o.stateNode;
						if (null !== u && u === r) break;
						5 === o.tag && null !== s && ((o = s), l ? null != (u = _e(n, a)) && i.unshift(Wr(n, u, o)) : l || (null != (u = _e(n, a)) && i.push(Wr(n, u, o)))), (n = n.return);
					}
					0 !== i.length && e.push({ event: t, listeners: i });
				}
				var Yr = /\r\n?/g,
					Xr = /\u0000|\uFFFD/g;
				function Zr(e) {
					return ("string" === typeof e ? e : "" + e).replace(Yr, "\n").replace(Xr, "");
				}
				function Gr(e, t, n) {
					if (((t = Zr(t)), Zr(e) !== t && n)) throw Error(a(425));
				}
				function Jr() {}
				var el = null,
					tl = null;
				function nl(e, t) {
					return "textarea" === e || "noscript" === e || "string" === typeof t.children || "number" === typeof t.children || ("object" === typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html);
				}
				var rl = "function" === typeof setTimeout ? setTimeout : void 0,
					ll = "function" === typeof clearTimeout ? clearTimeout : void 0,
					al = "function" === typeof Promise ? Promise : void 0,
					il =
						"function" === typeof queueMicrotask
							? queueMicrotask
							: "undefined" !== typeof al
							? function (e) {
									return al.resolve(null).then(e).catch(ol);
							  }
							: rl;
				function ol(e) {
					setTimeout(function () {
						throw e;
					});
				}
				function ul(e, t) {
					var n = t,
						r = 0;
					do {
						var l = n.nextSibling;
						if ((e.removeChild(n), l && 8 === l.nodeType))
							if ("/$" === (n = l.data)) {
								if (0 === r) return e.removeChild(l), void Ht(t);
								r--;
							} else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
						n = l;
					} while (n);
					Ht(t);
				}
				function sl(e) {
					for (; null != e; e = e.nextSibling) {
						var t = e.nodeType;
						if (1 === t || 3 === t) break;
						if (8 === t) {
							if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
							if ("/$" === t) return null;
						}
					}
					return e;
				}
				function cl(e) {
					e = e.previousSibling;
					for (var t = 0; e; ) {
						if (8 === e.nodeType) {
							var n = e.data;
							if ("$" === n || "$!" === n || "$?" === n) {
								if (0 === t) return e;
								t--;
							} else "/$" === n && t++;
						}
						e = e.previousSibling;
					}
					return null;
				}
				var fl = Math.random().toString(36).slice(2),
					dl = "__reactFiber$" + fl,
					pl = "__reactProps$" + fl,
					hl = "__reactContainer$" + fl,
					ml = "__reactEvents$" + fl,
					gl = "__reactListeners$" + fl,
					vl = "__reactHandles$" + fl;
				function yl(e) {
					var t = e[dl];
					if (t) return t;
					for (var n = e.parentNode; n; ) {
						if ((t = n[hl] || n[dl])) {
							if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
								for (e = cl(e); null !== e; ) {
									if ((n = e[dl])) return n;
									e = cl(e);
								}
							return t;
						}
						n = (e = n).parentNode;
					}
					return null;
				}
				function bl(e) {
					return !(e = e[dl] || e[hl]) || (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag) ? null : e;
				}
				function xl(e) {
					if (5 === e.tag || 6 === e.tag) return e.stateNode;
					throw Error(a(33));
				}
				function wl(e) {
					return e[pl] || null;
				}
				var kl = [],
					Sl = -1;
				function Cl(e) {
					return { current: e };
				}
				function El(e) {
					0 > Sl || ((e.current = kl[Sl]), (kl[Sl] = null), Sl--);
				}
				function jl(e, t) {
					Sl++, (kl[Sl] = e.current), (e.current = t);
				}
				var Pl = {},
					Nl = Cl(Pl),
					Ll = Cl(!1),
					Tl = Pl;
				function Fl(e, t) {
					var n = e.type.contextTypes;
					if (!n) return Pl;
					var r = e.stateNode;
					if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
					var l,
						a = {};
					for (l in n) a[l] = t[l];
					return r && (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t), (e.__reactInternalMemoizedMaskedChildContext = a)), a;
				}
				function _l(e) {
					return null !== (e = e.childContextTypes) && void 0 !== e;
				}
				function Ol() {
					El(Ll), El(Nl);
				}
				function Dl(e, t, n) {
					if (Nl.current !== Pl) throw Error(a(168));
					jl(Nl, t), jl(Ll, n);
				}
				function zl(e, t, n) {
					var r = e.stateNode;
					if (((t = t.childContextTypes), "function" !== typeof r.getChildContext)) return n;
					for (var l in (r = r.getChildContext())) if (!(l in t)) throw Error(a(108, V(e) || "Unknown", l));
					return R({}, n, r);
				}
				function Al(e) {
					return (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Pl), (Tl = Nl.current), jl(Nl, e), jl(Ll, Ll.current), !0;
				}
				function Rl(e, t, n) {
					var r = e.stateNode;
					if (!r) throw Error(a(169));
					n ? ((e = zl(e, t, Tl)), (r.__reactInternalMemoizedMergedChildContext = e), El(Ll), El(Nl), jl(Nl, e)) : El(Ll), jl(Ll, n);
				}
				var Il = null,
					Ml = !1,
					Bl = !1;
				function Ul(e) {
					null === Il ? (Il = [e]) : Il.push(e);
				}
				function Hl() {
					if (!Bl && null !== Il) {
						Bl = !0;
						var e = 0,
							t = bt;
						try {
							var n = Il;
							for (bt = 1; e < n.length; e++) {
								var r = n[e];
								do {
									r = r(!0);
								} while (null !== r);
							}
							(Il = null), (Ml = !1);
						} catch (l) {
							throw (null !== Il && (Il = Il.slice(e + 1)), Qe(Je, Hl), l);
						} finally {
							(bt = t), (Bl = !1);
						}
					}
					return null;
				}
				var Vl = [],
					$l = 0,
					Wl = null,
					ql = 0,
					Ql = [],
					Kl = 0,
					Yl = null,
					Xl = 1,
					Zl = "";
				function Gl(e, t) {
					(Vl[$l++] = ql), (Vl[$l++] = Wl), (Wl = e), (ql = t);
				}
				function Jl(e, t, n) {
					(Ql[Kl++] = Xl), (Ql[Kl++] = Zl), (Ql[Kl++] = Yl), (Yl = e);
					var r = Xl;
					e = Zl;
					var l = 32 - it(r) - 1;
					(r &= ~(1 << l)), (n += 1);
					var a = 32 - it(t) + l;
					if (30 < a) {
						var i = l - (l % 5);
						(a = (r & ((1 << i) - 1)).toString(32)), (r >>= i), (l -= i), (Xl = (1 << (32 - it(t) + l)) | (n << l) | r), (Zl = a + e);
					} else (Xl = (1 << a) | (n << l) | r), (Zl = e);
				}
				function ea(e) {
					null !== e.return && (Gl(e, 1), Jl(e, 1, 0));
				}
				function ta(e) {
					for (; e === Wl; ) (Wl = Vl[--$l]), (Vl[$l] = null), (ql = Vl[--$l]), (Vl[$l] = null);
					for (; e === Yl; ) (Yl = Ql[--Kl]), (Ql[Kl] = null), (Zl = Ql[--Kl]), (Ql[Kl] = null), (Xl = Ql[--Kl]), (Ql[Kl] = null);
				}
				var na = null,
					ra = null,
					la = !1,
					aa = null;
				function ia(e, t) {
					var n = _s(5, null, null, 0);
					(n.elementType = "DELETED"), (n.stateNode = t), (n.return = e), null === (t = e.deletions) ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
				}
				function oa(e, t) {
					switch (e.tag) {
						case 5:
							var n = e.type;
							return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && ((e.stateNode = t), (na = e), (ra = sl(t.firstChild)), !0);
						case 6:
							return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && ((e.stateNode = t), (na = e), (ra = null), !0);
						case 13:
							return null !== (t = 8 !== t.nodeType ? null : t) && ((n = null !== Yl ? { id: Xl, overflow: Zl } : null), (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }), ((n = _s(18, null, null, 0)).stateNode = t), (n.return = e), (e.child = n), (na = e), (ra = null), !0);
						default:
							return !1;
					}
				}
				function ua(e) {
					return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
				}
				function sa(e) {
					if (la) {
						var t = ra;
						if (t) {
							var n = t;
							if (!oa(e, t)) {
								if (ua(e)) throw Error(a(418));
								t = sl(n.nextSibling);
								var r = na;
								t && oa(e, t) ? ia(r, n) : ((e.flags = (-4097 & e.flags) | 2), (la = !1), (na = e));
							}
						} else {
							if (ua(e)) throw Error(a(418));
							(e.flags = (-4097 & e.flags) | 2), (la = !1), (na = e);
						}
					}
				}
				function ca(e) {
					for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; ) e = e.return;
					na = e;
				}
				function fa(e) {
					if (e !== na) return !1;
					if (!la) return ca(e), (la = !0), !1;
					var t;
					if (((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !nl(e.type, e.memoizedProps)), t && (t = ra))) {
						if (ua(e)) throw (da(), Error(a(418)));
						for (; t; ) ia(e, t), (t = sl(t.nextSibling));
					}
					if ((ca(e), 13 === e.tag)) {
						if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(a(317));
						e: {
							for (e = e.nextSibling, t = 0; e; ) {
								if (8 === e.nodeType) {
									var n = e.data;
									if ("/$" === n) {
										if (0 === t) {
											ra = sl(e.nextSibling);
											break e;
										}
										t--;
									} else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
								}
								e = e.nextSibling;
							}
							ra = null;
						}
					} else ra = na ? sl(e.stateNode.nextSibling) : null;
					return !0;
				}
				function da() {
					for (var e = ra; e; ) e = sl(e.nextSibling);
				}
				function pa() {
					(ra = na = null), (la = !1);
				}
				function ha(e) {
					null === aa ? (aa = [e]) : aa.push(e);
				}
				var ma = x.ReactCurrentBatchConfig;
				function ga(e, t) {
					if (e && e.defaultProps) {
						for (var n in ((t = R({}, t)), (e = e.defaultProps))) void 0 === t[n] && (t[n] = e[n]);
						return t;
					}
					return t;
				}
				var va = Cl(null),
					ya = null,
					ba = null,
					xa = null;
				function wa() {
					xa = ba = ya = null;
				}
				function ka(e) {
					var t = va.current;
					El(va), (e._currentValue = t);
				}
				function Sa(e, t, n) {
					for (; null !== e; ) {
						var r = e.alternate;
						if (((e.childLanes & t) !== t ? ((e.childLanes |= t), null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)) break;
						e = e.return;
					}
				}
				function Ca(e, t) {
					(ya = e), (xa = ba = null), null !== (e = e.dependencies) && null !== e.firstContext && (0 !== (e.lanes & t) && (xo = !0), (e.firstContext = null));
				}
				function Ea(e) {
					var t = e._currentValue;
					if (xa !== e)
						if (((e = { context: e, memoizedValue: t, next: null }), null === ba)) {
							if (null === ya) throw Error(a(308));
							(ba = e), (ya.dependencies = { lanes: 0, firstContext: e });
						} else ba = ba.next = e;
					return t;
				}
				var ja = null;
				function Pa(e) {
					null === ja ? (ja = [e]) : ja.push(e);
				}
				function Na(e, t, n, r) {
					var l = t.interleaved;
					return null === l ? ((n.next = n), Pa(t)) : ((n.next = l.next), (l.next = n)), (t.interleaved = n), La(e, r);
				}
				function La(e, t) {
					e.lanes |= t;
					var n = e.alternate;
					for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; ) (e.childLanes |= t), null !== (n = e.alternate) && (n.childLanes |= t), (n = e), (e = e.return);
					return 3 === n.tag ? n.stateNode : null;
				}
				var Ta = !1;
				function Fa(e) {
					e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
				}
				function _a(e, t) {
					(e = e.updateQueue), t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
				}
				function Oa(e, t) {
					return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
				}
				function Da(e, t, n) {
					var r = e.updateQueue;
					if (null === r) return null;
					if (((r = r.shared), 0 !== (2 & Lu))) {
						var l = r.pending;
						return null === l ? (t.next = t) : ((t.next = l.next), (l.next = t)), (r.pending = t), La(e, n);
					}
					return null === (l = r.interleaved) ? ((t.next = t), Pa(r)) : ((t.next = l.next), (l.next = t)), (r.interleaved = t), La(e, n);
				}
				function za(e, t, n) {
					if (null !== (t = t.updateQueue) && ((t = t.shared), 0 !== (4194240 & n))) {
						var r = t.lanes;
						(n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
					}
				}
				function Aa(e, t) {
					var n = e.updateQueue,
						r = e.alternate;
					if (null !== r && n === (r = r.updateQueue)) {
						var l = null,
							a = null;
						if (null !== (n = n.firstBaseUpdate)) {
							do {
								var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
								null === a ? (l = a = i) : (a = a.next = i), (n = n.next);
							} while (null !== n);
							null === a ? (l = a = t) : (a = a.next = t);
						} else l = a = t;
						return (n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: a, shared: r.shared, effects: r.effects }), void (e.updateQueue = n);
					}
					null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
				}
				function Ra(e, t, n, r) {
					var l = e.updateQueue;
					Ta = !1;
					var a = l.firstBaseUpdate,
						i = l.lastBaseUpdate,
						o = l.shared.pending;
					if (null !== o) {
						l.shared.pending = null;
						var u = o,
							s = u.next;
						(u.next = null), null === i ? (a = s) : (i.next = s), (i = u);
						var c = e.alternate;
						null !== c && (o = (c = c.updateQueue).lastBaseUpdate) !== i && (null === o ? (c.firstBaseUpdate = s) : (o.next = s), (c.lastBaseUpdate = u));
					}
					if (null !== a) {
						var f = l.baseState;
						for (i = 0, c = s = u = null, o = a; ; ) {
							var d = o.lane,
								p = o.eventTime;
							if ((r & d) === d) {
								null !== c && (c = c.next = { eventTime: p, lane: 0, tag: o.tag, payload: o.payload, callback: o.callback, next: null });
								e: {
									var h = e,
										m = o;
									switch (((d = t), (p = n), m.tag)) {
										case 1:
											if ("function" === typeof (h = m.payload)) {
												f = h.call(p, f, d);
												break e;
											}
											f = h;
											break e;
										case 3:
											h.flags = (-65537 & h.flags) | 128;
										case 0:
											if (null === (d = "function" === typeof (h = m.payload) ? h.call(p, f, d) : h) || void 0 === d) break e;
											f = R({}, f, d);
											break e;
										case 2:
											Ta = !0;
									}
								}
								null !== o.callback && 0 !== o.lane && ((e.flags |= 64), null === (d = l.effects) ? (l.effects = [o]) : d.push(o));
							} else (p = { eventTime: p, lane: d, tag: o.tag, payload: o.payload, callback: o.callback, next: null }), null === c ? ((s = c = p), (u = f)) : (c = c.next = p), (i |= d);
							if (null === (o = o.next)) {
								if (null === (o = l.shared.pending)) break;
								(o = (d = o).next), (d.next = null), (l.lastBaseUpdate = d), (l.shared.pending = null);
							}
						}
						if ((null === c && (u = f), (l.baseState = u), (l.firstBaseUpdate = s), (l.lastBaseUpdate = c), null !== (t = l.shared.interleaved))) {
							l = t;
							do {
								(i |= l.lane), (l = l.next);
							} while (l !== t);
						} else null === a && (l.shared.lanes = 0);
						(Ru |= i), (e.lanes = i), (e.memoizedState = f);
					}
				}
				function Ia(e, t, n) {
					if (((e = t.effects), (t.effects = null), null !== e))
						for (t = 0; t < e.length; t++) {
							var r = e[t],
								l = r.callback;
							if (null !== l) {
								if (((r.callback = null), (r = n), "function" !== typeof l)) throw Error(a(191, l));
								l.call(r);
							}
						}
				}
				var Ma = new r.Component().refs;
				function Ba(e, t, n, r) {
					(n = null === (n = n(r, (t = e.memoizedState))) || void 0 === n ? t : R({}, t, n)), (e.memoizedState = n), 0 === e.lanes && (e.updateQueue.baseState = n);
				}
				var Ua = {
					isMounted: function (e) {
						return !!(e = e._reactInternals) && He(e) === e;
					},
					enqueueSetState: function (e, t, n) {
						e = e._reactInternals;
						var r = ts(),
							l = ns(e),
							a = Oa(r, l);
						(a.payload = t), void 0 !== n && null !== n && (a.callback = n), null !== (t = Da(e, a, l)) && (rs(t, e, l, r), za(t, e, l));
					},
					enqueueReplaceState: function (e, t, n) {
						e = e._reactInternals;
						var r = ts(),
							l = ns(e),
							a = Oa(r, l);
						(a.tag = 1), (a.payload = t), void 0 !== n && null !== n && (a.callback = n), null !== (t = Da(e, a, l)) && (rs(t, e, l, r), za(t, e, l));
					},
					enqueueForceUpdate: function (e, t) {
						e = e._reactInternals;
						var n = ts(),
							r = ns(e),
							l = Oa(n, r);
						(l.tag = 2), void 0 !== t && null !== t && (l.callback = t), null !== (t = Da(e, l, r)) && (rs(t, e, r, n), za(t, e, r));
					},
				};
				function Ha(e, t, n, r, l, a, i) {
					return "function" === typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, a, i) : !t.prototype || !t.prototype.isPureReactComponent || !ur(n, r) || !ur(l, a);
				}
				function Va(e, t, n) {
					var r = !1,
						l = Pl,
						a = t.contextType;
					return "object" === typeof a && null !== a ? (a = Ea(a)) : ((l = _l(t) ? Tl : Nl.current), (a = (r = null !== (r = t.contextTypes) && void 0 !== r) ? Fl(e, l) : Pl)), (t = new t(n, a)), (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null), (t.updater = Ua), (e.stateNode = t), (t._reactInternals = e), r && (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = l), (e.__reactInternalMemoizedMaskedChildContext = a)), t;
				}
				function $a(e, t, n, r) {
					(e = t.state), "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ua.enqueueReplaceState(t, t.state, null);
				}
				function Wa(e, t, n, r) {
					var l = e.stateNode;
					(l.props = n), (l.state = e.memoizedState), (l.refs = Ma), Fa(e);
					var a = t.contextType;
					"object" === typeof a && null !== a ? (l.context = Ea(a)) : ((a = _l(t) ? Tl : Nl.current), (l.context = Fl(e, a))),
						(l.state = e.memoizedState),
						"function" === typeof (a = t.getDerivedStateFromProps) && (Ba(e, t, a, n), (l.state = e.memoizedState)),
						"function" === typeof t.getDerivedStateFromProps || "function" === typeof l.getSnapshotBeforeUpdate || ("function" !== typeof l.UNSAFE_componentWillMount && "function" !== typeof l.componentWillMount) || ((t = l.state), "function" === typeof l.componentWillMount && l.componentWillMount(), "function" === typeof l.UNSAFE_componentWillMount && l.UNSAFE_componentWillMount(), t !== l.state && Ua.enqueueReplaceState(l, l.state, null), Ra(e, n, l, r), (l.state = e.memoizedState)),
						"function" === typeof l.componentDidMount && (e.flags |= 4194308);
				}
				function qa(e, t, n) {
					if (null !== (e = n.ref) && "function" !== typeof e && "object" !== typeof e) {
						if (n._owner) {
							if ((n = n._owner)) {
								if (1 !== n.tag) throw Error(a(309));
								var r = n.stateNode;
							}
							if (!r) throw Error(a(147, e));
							var l = r,
								i = "" + e;
							return null !== t && null !== t.ref && "function" === typeof t.ref && t.ref._stringRef === i
								? t.ref
								: ((t = function (e) {
										var t = l.refs;
										t === Ma && (t = l.refs = {}), null === e ? delete t[i] : (t[i] = e);
								  }),
								  (t._stringRef = i),
								  t);
						}
						if ("string" !== typeof e) throw Error(a(284));
						if (!n._owner) throw Error(a(290, e));
					}
					return e;
				}
				function Qa(e, t) {
					throw ((e = Object.prototype.toString.call(t)), Error(a(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
				}
				function Ka(e) {
					return (0, e._init)(e._payload);
				}
				function Ya(e) {
					function t(t, n) {
						if (e) {
							var r = t.deletions;
							null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
						}
					}
					function n(n, r) {
						if (!e) return null;
						for (; null !== r; ) t(n, r), (r = r.sibling);
						return null;
					}
					function r(e, t) {
						for (e = new Map(); null !== t; ) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
						return e;
					}
					function l(e, t) {
						return ((e = Ds(e, t)).index = 0), (e.sibling = null), e;
					}
					function i(t, n, r) {
						return (t.index = r), e ? (null !== (r = t.alternate) ? ((r = r.index) < n ? ((t.flags |= 2), n) : r) : ((t.flags |= 2), n)) : ((t.flags |= 1048576), n);
					}
					function o(t) {
						return e && null === t.alternate && (t.flags |= 2), t;
					}
					function u(e, t, n, r) {
						return null === t || 6 !== t.tag ? (((t = Is(n, e.mode, r)).return = e), t) : (((t = l(t, n)).return = e), t);
					}
					function s(e, t, n, r) {
						var a = n.type;
						return a === S ? f(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === a || ("object" === typeof a && null !== a && a.$$typeof === _ && Ka(a) === t.type)) ? (((r = l(t, n.props)).ref = qa(e, t, n)), (r.return = e), r) : (((r = zs(n.type, n.key, n.props, null, e.mode, r)).ref = qa(e, t, n)), (r.return = e), r);
					}
					function c(e, t, n, r) {
						return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (((t = Ms(n, e.mode, r)).return = e), t) : (((t = l(t, n.children || [])).return = e), t);
					}
					function f(e, t, n, r, a) {
						return null === t || 7 !== t.tag ? (((t = As(n, e.mode, r, a)).return = e), t) : (((t = l(t, n)).return = e), t);
					}
					function d(e, t, n) {
						if (("string" === typeof t && "" !== t) || "number" === typeof t) return ((t = Is("" + t, e.mode, n)).return = e), t;
						if ("object" === typeof t && null !== t) {
							switch (t.$$typeof) {
								case w:
									return ((n = zs(t.type, t.key, t.props, null, e.mode, n)).ref = qa(e, null, t)), (n.return = e), n;
								case k:
									return ((t = Ms(t, e.mode, n)).return = e), t;
								case _:
									return d(e, (0, t._init)(t._payload), n);
							}
							if (te(t) || z(t)) return ((t = As(t, e.mode, n, null)).return = e), t;
							Qa(e, t);
						}
						return null;
					}
					function p(e, t, n, r) {
						var l = null !== t ? t.key : null;
						if (("string" === typeof n && "" !== n) || "number" === typeof n) return null !== l ? null : u(e, t, "" + n, r);
						if ("object" === typeof n && null !== n) {
							switch (n.$$typeof) {
								case w:
									return n.key === l ? s(e, t, n, r) : null;
								case k:
									return n.key === l ? c(e, t, n, r) : null;
								case _:
									return p(e, t, (l = n._init)(n._payload), r);
							}
							if (te(n) || z(n)) return null !== l ? null : f(e, t, n, r, null);
							Qa(e, n);
						}
						return null;
					}
					function h(e, t, n, r, l) {
						if (("string" === typeof r && "" !== r) || "number" === typeof r) return u(t, (e = e.get(n) || null), "" + r, l);
						if ("object" === typeof r && null !== r) {
							switch (r.$$typeof) {
								case w:
									return s(t, (e = e.get(null === r.key ? n : r.key) || null), r, l);
								case k:
									return c(t, (e = e.get(null === r.key ? n : r.key) || null), r, l);
								case _:
									return h(e, t, n, (0, r._init)(r._payload), l);
							}
							if (te(r) || z(r)) return f(t, (e = e.get(n) || null), r, l, null);
							Qa(t, r);
						}
						return null;
					}
					function m(l, a, o, u) {
						for (var s = null, c = null, f = a, m = (a = 0), g = null; null !== f && m < o.length; m++) {
							f.index > m ? ((g = f), (f = null)) : (g = f.sibling);
							var v = p(l, f, o[m], u);
							if (null === v) {
								null === f && (f = g);
								break;
							}
							e && f && null === v.alternate && t(l, f), (a = i(v, a, m)), null === c ? (s = v) : (c.sibling = v), (c = v), (f = g);
						}
						if (m === o.length) return n(l, f), la && Gl(l, m), s;
						if (null === f) {
							for (; m < o.length; m++) null !== (f = d(l, o[m], u)) && ((a = i(f, a, m)), null === c ? (s = f) : (c.sibling = f), (c = f));
							return la && Gl(l, m), s;
						}
						for (f = r(l, f); m < o.length; m++) null !== (g = h(f, l, m, o[m], u)) && (e && null !== g.alternate && f.delete(null === g.key ? m : g.key), (a = i(g, a, m)), null === c ? (s = g) : (c.sibling = g), (c = g));
						return (
							e &&
								f.forEach(function (e) {
									return t(l, e);
								}),
							la && Gl(l, m),
							s
						);
					}
					function g(l, o, u, s) {
						var c = z(u);
						if ("function" !== typeof c) throw Error(a(150));
						if (null == (u = c.call(u))) throw Error(a(151));
						for (var f = (c = null), m = o, g = (o = 0), v = null, y = u.next(); null !== m && !y.done; g++, y = u.next()) {
							m.index > g ? ((v = m), (m = null)) : (v = m.sibling);
							var b = p(l, m, y.value, s);
							if (null === b) {
								null === m && (m = v);
								break;
							}
							e && m && null === b.alternate && t(l, m), (o = i(b, o, g)), null === f ? (c = b) : (f.sibling = b), (f = b), (m = v);
						}
						if (y.done) return n(l, m), la && Gl(l, g), c;
						if (null === m) {
							for (; !y.done; g++, y = u.next()) null !== (y = d(l, y.value, s)) && ((o = i(y, o, g)), null === f ? (c = y) : (f.sibling = y), (f = y));
							return la && Gl(l, g), c;
						}
						for (m = r(l, m); !y.done; g++, y = u.next()) null !== (y = h(m, l, g, y.value, s)) && (e && null !== y.alternate && m.delete(null === y.key ? g : y.key), (o = i(y, o, g)), null === f ? (c = y) : (f.sibling = y), (f = y));
						return (
							e &&
								m.forEach(function (e) {
									return t(l, e);
								}),
							la && Gl(l, g),
							c
						);
					}
					return function e(r, a, i, u) {
						if (("object" === typeof i && null !== i && i.type === S && null === i.key && (i = i.props.children), "object" === typeof i && null !== i)) {
							switch (i.$$typeof) {
								case w:
									e: {
										for (var s = i.key, c = a; null !== c; ) {
											if (c.key === s) {
												if ((s = i.type) === S) {
													if (7 === c.tag) {
														n(r, c.sibling), ((a = l(c, i.props.children)).return = r), (r = a);
														break e;
													}
												} else if (c.elementType === s || ("object" === typeof s && null !== s && s.$$typeof === _ && Ka(s) === c.type)) {
													n(r, c.sibling), ((a = l(c, i.props)).ref = qa(r, c, i)), (a.return = r), (r = a);
													break e;
												}
												n(r, c);
												break;
											}
											t(r, c), (c = c.sibling);
										}
										i.type === S ? (((a = As(i.props.children, r.mode, u, i.key)).return = r), (r = a)) : (((u = zs(i.type, i.key, i.props, null, r.mode, u)).ref = qa(r, a, i)), (u.return = r), (r = u));
									}
									return o(r);
								case k:
									e: {
										for (c = i.key; null !== a; ) {
											if (a.key === c) {
												if (4 === a.tag && a.stateNode.containerInfo === i.containerInfo && a.stateNode.implementation === i.implementation) {
													n(r, a.sibling), ((a = l(a, i.children || [])).return = r), (r = a);
													break e;
												}
												n(r, a);
												break;
											}
											t(r, a), (a = a.sibling);
										}
										((a = Ms(i, r.mode, u)).return = r), (r = a);
									}
									return o(r);
								case _:
									return e(r, a, (c = i._init)(i._payload), u);
							}
							if (te(i)) return m(r, a, i, u);
							if (z(i)) return g(r, a, i, u);
							Qa(r, i);
						}
						return ("string" === typeof i && "" !== i) || "number" === typeof i ? ((i = "" + i), null !== a && 6 === a.tag ? (n(r, a.sibling), ((a = l(a, i)).return = r), (r = a)) : (n(r, a), ((a = Is(i, r.mode, u)).return = r), (r = a)), o(r)) : n(r, a);
					};
				}
				var Xa = Ya(!0),
					Za = Ya(!1),
					Ga = {},
					Ja = Cl(Ga),
					ei = Cl(Ga),
					ti = Cl(Ga);
				function ni(e) {
					if (e === Ga) throw Error(a(174));
					return e;
				}
				function ri(e, t) {
					switch ((jl(ti, t), jl(ei, e), jl(Ja, Ga), (e = t.nodeType))) {
						case 9:
						case 11:
							t = (t = t.documentElement) ? t.namespaceURI : ue(null, "");
							break;
						default:
							t = ue((t = (e = 8 === e ? t.parentNode : t).namespaceURI || null), (e = e.tagName));
					}
					El(Ja), jl(Ja, t);
				}
				function li() {
					El(Ja), El(ei), El(ti);
				}
				function ai(e) {
					ni(ti.current);
					var t = ni(Ja.current),
						n = ue(t, e.type);
					t !== n && (jl(ei, e), jl(Ja, n));
				}
				function ii(e) {
					ei.current === e && (El(Ja), El(ei));
				}
				var oi = Cl(0);
				function ui(e) {
					for (var t = e; null !== t; ) {
						if (13 === t.tag) {
							var n = t.memoizedState;
							if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t;
						} else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
							if (0 !== (128 & t.flags)) return t;
						} else if (null !== t.child) {
							(t.child.return = t), (t = t.child);
							continue;
						}
						if (t === e) break;
						for (; null === t.sibling; ) {
							if (null === t.return || t.return === e) return null;
							t = t.return;
						}
						(t.sibling.return = t.return), (t = t.sibling);
					}
					return null;
				}
				var si = [];
				function ci() {
					for (var e = 0; e < si.length; e++) si[e]._workInProgressVersionPrimary = null;
					si.length = 0;
				}
				var fi = x.ReactCurrentDispatcher,
					di = x.ReactCurrentBatchConfig,
					pi = 0,
					hi = null,
					mi = null,
					gi = null,
					vi = !1,
					yi = !1,
					bi = 0,
					xi = 0;
				function wi() {
					throw Error(a(321));
				}
				function ki(e, t) {
					if (null === t) return !1;
					for (var n = 0; n < t.length && n < e.length; n++) if (!or(e[n], t[n])) return !1;
					return !0;
				}
				function Si(e, t, n, r, l, i) {
					if (((pi = i), (hi = t), (t.memoizedState = null), (t.updateQueue = null), (t.lanes = 0), (fi.current = null === e || null === e.memoizedState ? io : oo), (e = n(r, l)), yi)) {
						i = 0;
						do {
							if (((yi = !1), (bi = 0), 25 <= i)) throw Error(a(301));
							(i += 1), (gi = mi = null), (t.updateQueue = null), (fi.current = uo), (e = n(r, l));
						} while (yi);
					}
					if (((fi.current = ao), (t = null !== mi && null !== mi.next), (pi = 0), (gi = mi = hi = null), (vi = !1), t)) throw Error(a(300));
					return e;
				}
				function Ci() {
					var e = 0 !== bi;
					return (bi = 0), e;
				}
				function Ei() {
					var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
					return null === gi ? (hi.memoizedState = gi = e) : (gi = gi.next = e), gi;
				}
				function ji() {
					if (null === mi) {
						var e = hi.alternate;
						e = null !== e ? e.memoizedState : null;
					} else e = mi.next;
					var t = null === gi ? hi.memoizedState : gi.next;
					if (null !== t) (gi = t), (mi = e);
					else {
						if (null === e) throw Error(a(310));
						(e = { memoizedState: (mi = e).memoizedState, baseState: mi.baseState, baseQueue: mi.baseQueue, queue: mi.queue, next: null }), null === gi ? (hi.memoizedState = gi = e) : (gi = gi.next = e);
					}
					return gi;
				}
				function Pi(e, t) {
					return "function" === typeof t ? t(e) : t;
				}
				function Ni(e) {
					var t = ji(),
						n = t.queue;
					if (null === n) throw Error(a(311));
					n.lastRenderedReducer = e;
					var r = mi,
						l = r.baseQueue,
						i = n.pending;
					if (null !== i) {
						if (null !== l) {
							var o = l.next;
							(l.next = i.next), (i.next = o);
						}
						(r.baseQueue = l = i), (n.pending = null);
					}
					if (null !== l) {
						(i = l.next), (r = r.baseState);
						var u = (o = null),
							s = null,
							c = i;
						do {
							var f = c.lane;
							if ((pi & f) === f) null !== s && (s = s.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), (r = c.hasEagerState ? c.eagerState : e(r, c.action));
							else {
								var d = { lane: f, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null };
								null === s ? ((u = s = d), (o = r)) : (s = s.next = d), (hi.lanes |= f), (Ru |= f);
							}
							c = c.next;
						} while (null !== c && c !== i);
						null === s ? (o = r) : (s.next = u), or(r, t.memoizedState) || (xo = !0), (t.memoizedState = r), (t.baseState = o), (t.baseQueue = s), (n.lastRenderedState = r);
					}
					if (null !== (e = n.interleaved)) {
						l = e;
						do {
							(i = l.lane), (hi.lanes |= i), (Ru |= i), (l = l.next);
						} while (l !== e);
					} else null === l && (n.lanes = 0);
					return [t.memoizedState, n.dispatch];
				}
				function Li(e) {
					var t = ji(),
						n = t.queue;
					if (null === n) throw Error(a(311));
					n.lastRenderedReducer = e;
					var r = n.dispatch,
						l = n.pending,
						i = t.memoizedState;
					if (null !== l) {
						n.pending = null;
						var o = (l = l.next);
						do {
							(i = e(i, o.action)), (o = o.next);
						} while (o !== l);
						or(i, t.memoizedState) || (xo = !0), (t.memoizedState = i), null === t.baseQueue && (t.baseState = i), (n.lastRenderedState = i);
					}
					return [i, r];
				}
				function Ti() {}
				function Fi(e, t) {
					var n = hi,
						r = ji(),
						l = t(),
						i = !or(r.memoizedState, l);
					if ((i && ((r.memoizedState = l), (xo = !0)), (r = r.queue), Vi(Di.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || (null !== gi && 1 & gi.memoizedState.tag))) {
						if (((n.flags |= 2048), Ii(9, Oi.bind(null, n, r, l, t), void 0, null), null === Tu)) throw Error(a(349));
						0 !== (30 & pi) || _i(n, t, l);
					}
					return l;
				}
				function _i(e, t, n) {
					(e.flags |= 16384), (e = { getSnapshot: t, value: n }), null === (t = hi.updateQueue) ? ((t = { lastEffect: null, stores: null }), (hi.updateQueue = t), (t.stores = [e])) : null === (n = t.stores) ? (t.stores = [e]) : n.push(e);
				}
				function Oi(e, t, n, r) {
					(t.value = n), (t.getSnapshot = r), zi(t) && Ai(e);
				}
				function Di(e, t, n) {
					return n(function () {
						zi(t) && Ai(e);
					});
				}
				function zi(e) {
					var t = e.getSnapshot;
					e = e.value;
					try {
						var n = t();
						return !or(e, n);
					} catch (r) {
						return !0;
					}
				}
				function Ai(e) {
					var t = La(e, 1);
					null !== t && rs(t, e, 1, -1);
				}
				function Ri(e) {
					var t = Ei();
					return "function" === typeof e && (e = e()), (t.memoizedState = t.baseState = e), (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Pi, lastRenderedState: e }), (t.queue = e), (e = e.dispatch = to.bind(null, hi, e)), [t.memoizedState, e];
				}
				function Ii(e, t, n, r) {
					return (e = { tag: e, create: t, destroy: n, deps: r, next: null }), null === (t = hi.updateQueue) ? ((t = { lastEffect: null, stores: null }), (hi.updateQueue = t), (t.lastEffect = e.next = e)) : null === (n = t.lastEffect) ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)), e;
				}
				function Mi() {
					return ji().memoizedState;
				}
				function Bi(e, t, n, r) {
					var l = Ei();
					(hi.flags |= e), (l.memoizedState = Ii(1 | t, n, void 0, void 0 === r ? null : r));
				}
				function Ui(e, t, n, r) {
					var l = ji();
					r = void 0 === r ? null : r;
					var a = void 0;
					if (null !== mi) {
						var i = mi.memoizedState;
						if (((a = i.destroy), null !== r && ki(r, i.deps))) return void (l.memoizedState = Ii(t, n, a, r));
					}
					(hi.flags |= e), (l.memoizedState = Ii(1 | t, n, a, r));
				}
				function Hi(e, t) {
					return Bi(8390656, 8, e, t);
				}
				function Vi(e, t) {
					return Ui(2048, 8, e, t);
				}
				function $i(e, t) {
					return Ui(4, 2, e, t);
				}
				function Wi(e, t) {
					return Ui(4, 4, e, t);
				}
				function qi(e, t) {
					return "function" === typeof t
						? ((e = e()),
						  t(e),
						  function () {
								t(null);
						  })
						: null !== t && void 0 !== t
						? ((e = e()),
						  (t.current = e),
						  function () {
								t.current = null;
						  })
						: void 0;
				}
				function Qi(e, t, n) {
					return (n = null !== n && void 0 !== n ? n.concat([e]) : null), Ui(4, 4, qi.bind(null, t, e), n);
				}
				function Ki() {}
				function Yi(e, t) {
					var n = ji();
					t = void 0 === t ? null : t;
					var r = n.memoizedState;
					return null !== r && null !== t && ki(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
				}
				function Xi(e, t) {
					var n = ji();
					t = void 0 === t ? null : t;
					var r = n.memoizedState;
					return null !== r && null !== t && ki(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
				}
				function Zi(e, t, n) {
					return 0 === (21 & pi) ? (e.baseState && ((e.baseState = !1), (xo = !0)), (e.memoizedState = n)) : (or(n, t) || ((n = mt()), (hi.lanes |= n), (Ru |= n), (e.baseState = !0)), t);
				}
				function Gi(e, t) {
					var n = bt;
					(bt = 0 !== n && 4 > n ? n : 4), e(!0);
					var r = di.transition;
					di.transition = {};
					try {
						e(!1), t();
					} finally {
						(bt = n), (di.transition = r);
					}
				}
				function Ji() {
					return ji().memoizedState;
				}
				function eo(e, t, n) {
					var r = ns(e);
					if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), no(e))) ro(t, n);
					else if (null !== (n = Na(e, t, n, r))) {
						rs(n, e, r, ts()), lo(n, t, r);
					}
				}
				function to(e, t, n) {
					var r = ns(e),
						l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
					if (no(e)) ro(t, l);
					else {
						var a = e.alternate;
						if (0 === e.lanes && (null === a || 0 === a.lanes) && null !== (a = t.lastRenderedReducer))
							try {
								var i = t.lastRenderedState,
									o = a(i, n);
								if (((l.hasEagerState = !0), (l.eagerState = o), or(o, i))) {
									var u = t.interleaved;
									return null === u ? ((l.next = l), Pa(t)) : ((l.next = u.next), (u.next = l)), void (t.interleaved = l);
								}
							} catch (s) {}
						null !== (n = Na(e, t, l, r)) && (rs(n, e, r, (l = ts())), lo(n, t, r));
					}
				}
				function no(e) {
					var t = e.alternate;
					return e === hi || (null !== t && t === hi);
				}
				function ro(e, t) {
					yi = vi = !0;
					var n = e.pending;
					null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
				}
				function lo(e, t, n) {
					if (0 !== (4194240 & n)) {
						var r = t.lanes;
						(n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
					}
				}
				var ao = { readContext: Ea, useCallback: wi, useContext: wi, useEffect: wi, useImperativeHandle: wi, useInsertionEffect: wi, useLayoutEffect: wi, useMemo: wi, useReducer: wi, useRef: wi, useState: wi, useDebugValue: wi, useDeferredValue: wi, useTransition: wi, useMutableSource: wi, useSyncExternalStore: wi, useId: wi, unstable_isNewReconciler: !1 },
					io = {
						readContext: Ea,
						useCallback: function (e, t) {
							return (Ei().memoizedState = [e, void 0 === t ? null : t]), e;
						},
						useContext: Ea,
						useEffect: Hi,
						useImperativeHandle: function (e, t, n) {
							return (n = null !== n && void 0 !== n ? n.concat([e]) : null), Bi(4194308, 4, qi.bind(null, t, e), n);
						},
						useLayoutEffect: function (e, t) {
							return Bi(4194308, 4, e, t);
						},
						useInsertionEffect: function (e, t) {
							return Bi(4, 2, e, t);
						},
						useMemo: function (e, t) {
							var n = Ei();
							return (t = void 0 === t ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
						},
						useReducer: function (e, t, n) {
							var r = Ei();
							return (t = void 0 !== n ? n(t) : t), (r.memoizedState = r.baseState = t), (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }), (r.queue = e), (e = e.dispatch = eo.bind(null, hi, e)), [r.memoizedState, e];
						},
						useRef: function (e) {
							return (e = { current: e }), (Ei().memoizedState = e);
						},
						useState: Ri,
						useDebugValue: Ki,
						useDeferredValue: function (e) {
							return (Ei().memoizedState = e);
						},
						useTransition: function () {
							var e = Ri(!1),
								t = e[0];
							return (e = Gi.bind(null, e[1])), (Ei().memoizedState = e), [t, e];
						},
						useMutableSource: function () {},
						useSyncExternalStore: function (e, t, n) {
							var r = hi,
								l = Ei();
							if (la) {
								if (void 0 === n) throw Error(a(407));
								n = n();
							} else {
								if (((n = t()), null === Tu)) throw Error(a(349));
								0 !== (30 & pi) || _i(r, t, n);
							}
							l.memoizedState = n;
							var i = { value: n, getSnapshot: t };
							return (l.queue = i), Hi(Di.bind(null, r, i, e), [e]), (r.flags |= 2048), Ii(9, Oi.bind(null, r, i, n, t), void 0, null), n;
						},
						useId: function () {
							var e = Ei(),
								t = Tu.identifierPrefix;
							if (la) {
								var n = Zl;
								(t = ":" + t + "R" + (n = (Xl & ~(1 << (32 - it(Xl) - 1))).toString(32) + n)), 0 < (n = bi++) && (t += "H" + n.toString(32)), (t += ":");
							} else t = ":" + t + "r" + (n = xi++).toString(32) + ":";
							return (e.memoizedState = t);
						},
						unstable_isNewReconciler: !1,
					},
					oo = {
						readContext: Ea,
						useCallback: Yi,
						useContext: Ea,
						useEffect: Vi,
						useImperativeHandle: Qi,
						useInsertionEffect: $i,
						useLayoutEffect: Wi,
						useMemo: Xi,
						useReducer: Ni,
						useRef: Mi,
						useState: function () {
							return Ni(Pi);
						},
						useDebugValue: Ki,
						useDeferredValue: function (e) {
							return Zi(ji(), mi.memoizedState, e);
						},
						useTransition: function () {
							return [Ni(Pi)[0], ji().memoizedState];
						},
						useMutableSource: Ti,
						useSyncExternalStore: Fi,
						useId: Ji,
						unstable_isNewReconciler: !1,
					},
					uo = {
						readContext: Ea,
						useCallback: Yi,
						useContext: Ea,
						useEffect: Vi,
						useImperativeHandle: Qi,
						useInsertionEffect: $i,
						useLayoutEffect: Wi,
						useMemo: Xi,
						useReducer: Li,
						useRef: Mi,
						useState: function () {
							return Li(Pi);
						},
						useDebugValue: Ki,
						useDeferredValue: function (e) {
							var t = ji();
							return null === mi ? (t.memoizedState = e) : Zi(t, mi.memoizedState, e);
						},
						useTransition: function () {
							return [Li(Pi)[0], ji().memoizedState];
						},
						useMutableSource: Ti,
						useSyncExternalStore: Fi,
						useId: Ji,
						unstable_isNewReconciler: !1,
					};
				function so(e, t) {
					try {
						var n = "",
							r = t;
						do {
							(n += U(r)), (r = r.return);
						} while (r);
						var l = n;
					} catch (a) {
						l = "\nError generating stack: " + a.message + "\n" + a.stack;
					}
					return { value: e, source: t, stack: l, digest: null };
				}
				function co(e, t, n) {
					return { value: e, source: null, stack: null != n ? n : null, digest: null != t ? t : null };
				}
				function fo(e, t) {
					try {
						console.error(t.value);
					} catch (n) {
						setTimeout(function () {
							throw n;
						});
					}
				}
				var po = "function" === typeof WeakMap ? WeakMap : Map;
				function ho(e, t, n) {
					((n = Oa(-1, n)).tag = 3), (n.payload = { element: null });
					var r = t.value;
					return (
						(n.callback = function () {
							Wu || ((Wu = !0), (qu = r)), fo(0, t);
						}),
						n
					);
				}
				function mo(e, t, n) {
					(n = Oa(-1, n)).tag = 3;
					var r = e.type.getDerivedStateFromError;
					if ("function" === typeof r) {
						var l = t.value;
						(n.payload = function () {
							return r(l);
						}),
							(n.callback = function () {
								fo(0, t);
							});
					}
					var a = e.stateNode;
					return (
						null !== a &&
							"function" === typeof a.componentDidCatch &&
							(n.callback = function () {
								fo(0, t), "function" !== typeof r && (null === Qu ? (Qu = new Set([this])) : Qu.add(this));
								var e = t.stack;
								this.componentDidCatch(t.value, { componentStack: null !== e ? e : "" });
							}),
						n
					);
				}
				function go(e, t, n) {
					var r = e.pingCache;
					if (null === r) {
						r = e.pingCache = new po();
						var l = new Set();
						r.set(t, l);
					} else void 0 === (l = r.get(t)) && ((l = new Set()), r.set(t, l));
					l.has(n) || (l.add(n), (e = js.bind(null, e, t, n)), t.then(e, e));
				}
				function vo(e) {
					do {
						var t;
						if (((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t)) return e;
						e = e.return;
					} while (null !== e);
					return null;
				}
				function yo(e, t, n, r, l) {
					return 0 === (1 & e.mode) ? (e === t ? (e.flags |= 65536) : ((e.flags |= 128), (n.flags |= 131072), (n.flags &= -52805), 1 === n.tag && (null === n.alternate ? (n.tag = 17) : (((t = Oa(-1, 1)).tag = 2), Da(n, t, 1))), (n.lanes |= 1)), e) : ((e.flags |= 65536), (e.lanes = l), e);
				}
				var bo = x.ReactCurrentOwner,
					xo = !1;
				function wo(e, t, n, r) {
					t.child = null === e ? Za(t, null, n, r) : Xa(t, e.child, n, r);
				}
				function ko(e, t, n, r, l) {
					n = n.render;
					var a = t.ref;
					return Ca(t, l), (r = Si(e, t, n, r, a, l)), (n = Ci()), null === e || xo ? (la && n && ea(t), (t.flags |= 1), wo(e, t, r, l), t.child) : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Wo(e, t, l));
				}
				function So(e, t, n, r, l) {
					if (null === e) {
						var a = n.type;
						return "function" !== typeof a || Os(a) || void 0 !== a.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? (((e = zs(n.type, null, r, t, t.mode, l)).ref = t.ref), (e.return = t), (t.child = e)) : ((t.tag = 15), (t.type = a), Co(e, t, a, r, l));
					}
					if (((a = e.child), 0 === (e.lanes & l))) {
						var i = a.memoizedProps;
						if ((n = null !== (n = n.compare) ? n : ur)(i, r) && e.ref === t.ref) return Wo(e, t, l);
					}
					return (t.flags |= 1), ((e = Ds(a, r)).ref = t.ref), (e.return = t), (t.child = e);
				}
				function Co(e, t, n, r, l) {
					if (null !== e) {
						var a = e.memoizedProps;
						if (ur(a, r) && e.ref === t.ref) {
							if (((xo = !1), (t.pendingProps = r = a), 0 === (e.lanes & l))) return (t.lanes = e.lanes), Wo(e, t, l);
							0 !== (131072 & e.flags) && (xo = !0);
						}
					}
					return Po(e, t, n, r, l);
				}
				function Eo(e, t, n) {
					var r = t.pendingProps,
						l = r.children,
						a = null !== e ? e.memoizedState : null;
					if ("hidden" === r.mode)
						if (0 === (1 & t.mode)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), jl(Du, Ou), (Ou |= n);
						else {
							if (0 === (1073741824 & n)) return (e = null !== a ? a.baseLanes | n : n), (t.lanes = t.childLanes = 1073741824), (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }), (t.updateQueue = null), jl(Du, Ou), (Ou |= e), null;
							(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), (r = null !== a ? a.baseLanes : n), jl(Du, Ou), (Ou |= r);
						}
					else null !== a ? ((r = a.baseLanes | n), (t.memoizedState = null)) : (r = n), jl(Du, Ou), (Ou |= r);
					return wo(e, t, l, n), t.child;
				}
				function jo(e, t) {
					var n = t.ref;
					((null === e && null !== n) || (null !== e && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
				}
				function Po(e, t, n, r, l) {
					var a = _l(n) ? Tl : Nl.current;
					return (a = Fl(t, a)), Ca(t, l), (n = Si(e, t, n, r, a, l)), (r = Ci()), null === e || xo ? (la && r && ea(t), (t.flags |= 1), wo(e, t, n, l), t.child) : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Wo(e, t, l));
				}
				function No(e, t, n, r, l) {
					if (_l(n)) {
						var a = !0;
						Al(t);
					} else a = !1;
					if ((Ca(t, l), null === t.stateNode)) $o(e, t), Va(t, n, r), Wa(t, n, r, l), (r = !0);
					else if (null === e) {
						var i = t.stateNode,
							o = t.memoizedProps;
						i.props = o;
						var u = i.context,
							s = n.contextType;
						"object" === typeof s && null !== s ? (s = Ea(s)) : (s = Fl(t, (s = _l(n) ? Tl : Nl.current)));
						var c = n.getDerivedStateFromProps,
							f = "function" === typeof c || "function" === typeof i.getSnapshotBeforeUpdate;
						f || ("function" !== typeof i.UNSAFE_componentWillReceiveProps && "function" !== typeof i.componentWillReceiveProps) || ((o !== r || u !== s) && $a(t, i, r, s)), (Ta = !1);
						var d = t.memoizedState;
						(i.state = d),
							Ra(t, r, i, l),
							(u = t.memoizedState),
							o !== r || d !== u || Ll.current || Ta ? ("function" === typeof c && (Ba(t, n, c, r), (u = t.memoizedState)), (o = Ta || Ha(t, n, o, r, d, u, s)) ? (f || ("function" !== typeof i.UNSAFE_componentWillMount && "function" !== typeof i.componentWillMount) || ("function" === typeof i.componentWillMount && i.componentWillMount(), "function" === typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount()), "function" === typeof i.componentDidMount && (t.flags |= 4194308)) : ("function" === typeof i.componentDidMount && (t.flags |= 4194308), (t.memoizedProps = r), (t.memoizedState = u)), (i.props = r), (i.state = u), (i.context = s), (r = o)) : ("function" === typeof i.componentDidMount && (t.flags |= 4194308), (r = !1));
					} else {
						(i = t.stateNode), _a(e, t), (o = t.memoizedProps), (s = t.type === t.elementType ? o : ga(t.type, o)), (i.props = s), (f = t.pendingProps), (d = i.context), "object" === typeof (u = n.contextType) && null !== u ? (u = Ea(u)) : (u = Fl(t, (u = _l(n) ? Tl : Nl.current)));
						var p = n.getDerivedStateFromProps;
						(c = "function" === typeof p || "function" === typeof i.getSnapshotBeforeUpdate) || ("function" !== typeof i.UNSAFE_componentWillReceiveProps && "function" !== typeof i.componentWillReceiveProps) || ((o !== f || d !== u) && $a(t, i, r, u)), (Ta = !1), (d = t.memoizedState), (i.state = d), Ra(t, r, i, l);
						var h = t.memoizedState;
						o !== f || d !== h || Ll.current || Ta
							? ("function" === typeof p && (Ba(t, n, p, r), (h = t.memoizedState)),
							  (s = Ta || Ha(t, n, s, r, d, h, u) || !1) ? (c || ("function" !== typeof i.UNSAFE_componentWillUpdate && "function" !== typeof i.componentWillUpdate) || ("function" === typeof i.componentWillUpdate && i.componentWillUpdate(r, h, u), "function" === typeof i.UNSAFE_componentWillUpdate && i.UNSAFE_componentWillUpdate(r, h, u)), "function" === typeof i.componentDidUpdate && (t.flags |= 4), "function" === typeof i.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" !== typeof i.componentDidUpdate || (o === e.memoizedProps && d === e.memoizedState) || (t.flags |= 4), "function" !== typeof i.getSnapshotBeforeUpdate || (o === e.memoizedProps && d === e.memoizedState) || (t.flags |= 1024), (t.memoizedProps = r), (t.memoizedState = h)),
							  (i.props = r),
							  (i.state = h),
							  (i.context = u),
							  (r = s))
							: ("function" !== typeof i.componentDidUpdate || (o === e.memoizedProps && d === e.memoizedState) || (t.flags |= 4), "function" !== typeof i.getSnapshotBeforeUpdate || (o === e.memoizedProps && d === e.memoizedState) || (t.flags |= 1024), (r = !1));
					}
					return Lo(e, t, n, r, a, l);
				}
				function Lo(e, t, n, r, l, a) {
					jo(e, t);
					var i = 0 !== (128 & t.flags);
					if (!r && !i) return l && Rl(t, n, !1), Wo(e, t, a);
					(r = t.stateNode), (bo.current = t);
					var o = i && "function" !== typeof n.getDerivedStateFromError ? null : r.render();
					return (t.flags |= 1), null !== e && i ? ((t.child = Xa(t, e.child, null, a)), (t.child = Xa(t, null, o, a))) : wo(e, t, o, a), (t.memoizedState = r.state), l && Rl(t, n, !0), t.child;
				}
				function To(e) {
					var t = e.stateNode;
					t.pendingContext ? Dl(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Dl(0, t.context, !1), ri(e, t.containerInfo);
				}
				function Fo(e, t, n, r, l) {
					return pa(), ha(l), (t.flags |= 256), wo(e, t, n, r), t.child;
				}
				var _o,
					Oo,
					Do,
					zo,
					Ao = { dehydrated: null, treeContext: null, retryLane: 0 };
				function Ro(e) {
					return { baseLanes: e, cachePool: null, transitions: null };
				}
				function Io(e, t, n) {
					var r,
						l = t.pendingProps,
						i = oi.current,
						o = !1,
						u = 0 !== (128 & t.flags);
					if (((r = u) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)), r ? ((o = !0), (t.flags &= -129)) : (null !== e && null === e.memoizedState) || (i |= 1), jl(oi, 1 & i), null === e)) return sa(t), null !== (e = t.memoizedState) && null !== (e = e.dehydrated) ? (0 === (1 & t.mode) ? (t.lanes = 1) : "$!" === e.data ? (t.lanes = 8) : (t.lanes = 1073741824), null) : ((u = l.children), (e = l.fallback), o ? ((l = t.mode), (o = t.child), (u = { mode: "hidden", children: u }), 0 === (1 & l) && null !== o ? ((o.childLanes = 0), (o.pendingProps = u)) : (o = Rs(u, l, 0, null)), (e = As(e, l, n, null)), (o.return = t), (e.return = t), (o.sibling = e), (t.child = o), (t.child.memoizedState = Ro(n)), (t.memoizedState = Ao), e) : Mo(t, u));
					if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
						return (function (e, t, n, r, l, i, o) {
							if (n) return 256 & t.flags ? ((t.flags &= -257), Bo(e, t, o, (r = co(Error(a(422)))))) : null !== t.memoizedState ? ((t.child = e.child), (t.flags |= 128), null) : ((i = r.fallback), (l = t.mode), (r = Rs({ mode: "visible", children: r.children }, l, 0, null)), ((i = As(i, l, o, null)).flags |= 2), (r.return = t), (i.return = t), (r.sibling = i), (t.child = r), 0 !== (1 & t.mode) && Xa(t, e.child, null, o), (t.child.memoizedState = Ro(o)), (t.memoizedState = Ao), i);
							if (0 === (1 & t.mode)) return Bo(e, t, o, null);
							if ("$!" === l.data) {
								if ((r = l.nextSibling && l.nextSibling.dataset)) var u = r.dgst;
								return (r = u), Bo(e, t, o, (r = co((i = Error(a(419))), r, void 0)));
							}
							if (((u = 0 !== (o & e.childLanes)), xo || u)) {
								if (null !== (r = Tu)) {
									switch (o & -o) {
										case 4:
											l = 2;
											break;
										case 16:
											l = 8;
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
											l = 32;
											break;
										case 536870912:
											l = 268435456;
											break;
										default:
											l = 0;
									}
									0 !== (l = 0 !== (l & (r.suspendedLanes | o)) ? 0 : l) && l !== i.retryLane && ((i.retryLane = l), La(e, l), rs(r, e, l, -1));
								}
								return gs(), Bo(e, t, o, (r = co(Error(a(421)))));
							}
							return "$?" === l.data ? ((t.flags |= 128), (t.child = e.child), (t = Ns.bind(null, e)), (l._reactRetry = t), null) : ((e = i.treeContext), (ra = sl(l.nextSibling)), (na = t), (la = !0), (aa = null), null !== e && ((Ql[Kl++] = Xl), (Ql[Kl++] = Zl), (Ql[Kl++] = Yl), (Xl = e.id), (Zl = e.overflow), (Yl = t)), (t = Mo(t, r.children)), (t.flags |= 4096), t);
						})(e, t, u, l, r, i, n);
					if (o) {
						(o = l.fallback), (u = t.mode), (r = (i = e.child).sibling);
						var s = { mode: "hidden", children: l.children };
						return 0 === (1 & u) && t.child !== i ? (((l = t.child).childLanes = 0), (l.pendingProps = s), (t.deletions = null)) : ((l = Ds(i, s)).subtreeFlags = 14680064 & i.subtreeFlags), null !== r ? (o = Ds(r, o)) : ((o = As(o, u, n, null)).flags |= 2), (o.return = t), (l.return = t), (l.sibling = o), (t.child = l), (l = o), (o = t.child), (u = null === (u = e.child.memoizedState) ? Ro(n) : { baseLanes: u.baseLanes | n, cachePool: null, transitions: u.transitions }), (o.memoizedState = u), (o.childLanes = e.childLanes & ~n), (t.memoizedState = Ao), l;
					}
					return (e = (o = e.child).sibling), (l = Ds(o, { mode: "visible", children: l.children })), 0 === (1 & t.mode) && (l.lanes = n), (l.return = t), (l.sibling = null), null !== e && (null === (n = t.deletions) ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)), (t.child = l), (t.memoizedState = null), l;
				}
				function Mo(e, t) {
					return ((t = Rs({ mode: "visible", children: t }, e.mode, 0, null)).return = e), (e.child = t);
				}
				function Bo(e, t, n, r) {
					return null !== r && ha(r), Xa(t, e.child, null, n), ((e = Mo(t, t.pendingProps.children)).flags |= 2), (t.memoizedState = null), e;
				}
				function Uo(e, t, n) {
					e.lanes |= t;
					var r = e.alternate;
					null !== r && (r.lanes |= t), Sa(e.return, t, n);
				}
				function Ho(e, t, n, r, l) {
					var a = e.memoizedState;
					null === a ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l }) : ((a.isBackwards = t), (a.rendering = null), (a.renderingStartTime = 0), (a.last = r), (a.tail = n), (a.tailMode = l));
				}
				function Vo(e, t, n) {
					var r = t.pendingProps,
						l = r.revealOrder,
						a = r.tail;
					if ((wo(e, t, r.children, n), 0 !== (2 & (r = oi.current)))) (r = (1 & r) | 2), (t.flags |= 128);
					else {
						if (null !== e && 0 !== (128 & e.flags))
							e: for (e = t.child; null !== e; ) {
								if (13 === e.tag) null !== e.memoizedState && Uo(e, n, t);
								else if (19 === e.tag) Uo(e, n, t);
								else if (null !== e.child) {
									(e.child.return = e), (e = e.child);
									continue;
								}
								if (e === t) break e;
								for (; null === e.sibling; ) {
									if (null === e.return || e.return === t) break e;
									e = e.return;
								}
								(e.sibling.return = e.return), (e = e.sibling);
							}
						r &= 1;
					}
					if ((jl(oi, r), 0 === (1 & t.mode))) t.memoizedState = null;
					else
						switch (l) {
							case "forwards":
								for (n = t.child, l = null; null !== n; ) null !== (e = n.alternate) && null === ui(e) && (l = n), (n = n.sibling);
								null === (n = l) ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)), Ho(t, !1, l, n, a);
								break;
							case "backwards":
								for (n = null, l = t.child, t.child = null; null !== l; ) {
									if (null !== (e = l.alternate) && null === ui(e)) {
										t.child = l;
										break;
									}
									(e = l.sibling), (l.sibling = n), (n = l), (l = e);
								}
								Ho(t, !0, n, null, a);
								break;
							case "together":
								Ho(t, !1, null, null, void 0);
								break;
							default:
								t.memoizedState = null;
						}
					return t.child;
				}
				function $o(e, t) {
					0 === (1 & t.mode) && null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
				}
				function Wo(e, t, n) {
					if ((null !== e && (t.dependencies = e.dependencies), (Ru |= t.lanes), 0 === (n & t.childLanes))) return null;
					if (null !== e && t.child !== e.child) throw Error(a(153));
					if (null !== t.child) {
						for (n = Ds((e = t.child), e.pendingProps), t.child = n, n.return = t; null !== e.sibling; ) (e = e.sibling), ((n = n.sibling = Ds(e, e.pendingProps)).return = t);
						n.sibling = null;
					}
					return t.child;
				}
				function qo(e, t) {
					if (!la)
						switch (e.tailMode) {
							case "hidden":
								t = e.tail;
								for (var n = null; null !== t; ) null !== t.alternate && (n = t), (t = t.sibling);
								null === n ? (e.tail = null) : (n.sibling = null);
								break;
							case "collapsed":
								n = e.tail;
								for (var r = null; null !== n; ) null !== n.alternate && (r = n), (n = n.sibling);
								null === r ? (t || null === e.tail ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
						}
				}
				function Qo(e) {
					var t = null !== e.alternate && e.alternate.child === e.child,
						n = 0,
						r = 0;
					if (t) for (var l = e.child; null !== l; ) (n |= l.lanes | l.childLanes), (r |= 14680064 & l.subtreeFlags), (r |= 14680064 & l.flags), (l.return = e), (l = l.sibling);
					else for (l = e.child; null !== l; ) (n |= l.lanes | l.childLanes), (r |= l.subtreeFlags), (r |= l.flags), (l.return = e), (l = l.sibling);
					return (e.subtreeFlags |= r), (e.childLanes = n), t;
				}
				function Ko(e, t, n) {
					var r = t.pendingProps;
					switch ((ta(t), t.tag)) {
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
							return Qo(t), null;
						case 1:
						case 17:
							return _l(t.type) && Ol(), Qo(t), null;
						case 3:
							return (r = t.stateNode), li(), El(Ll), El(Nl), ci(), r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)), (null !== e && null !== e.child) || (fa(t) ? (t.flags |= 4) : null === e || (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) || ((t.flags |= 1024), null !== aa && (os(aa), (aa = null)))), Oo(e, t), Qo(t), null;
						case 5:
							ii(t);
							var l = ni(ti.current);
							if (((n = t.type), null !== e && null != t.stateNode)) Do(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
							else {
								if (!r) {
									if (null === t.stateNode) throw Error(a(166));
									return Qo(t), null;
								}
								if (((e = ni(Ja.current)), fa(t))) {
									(r = t.stateNode), (n = t.type);
									var i = t.memoizedProps;
									switch (((r[dl] = t), (r[pl] = i), (e = 0 !== (1 & t.mode)), n)) {
										case "dialog":
											Mr("cancel", r), Mr("close", r);
											break;
										case "iframe":
										case "object":
										case "embed":
											Mr("load", r);
											break;
										case "video":
										case "audio":
											for (l = 0; l < zr.length; l++) Mr(zr[l], r);
											break;
										case "source":
											Mr("error", r);
											break;
										case "img":
										case "image":
										case "link":
											Mr("error", r), Mr("load", r);
											break;
										case "details":
											Mr("toggle", r);
											break;
										case "input":
											X(r, i), Mr("invalid", r);
											break;
										case "select":
											(r._wrapperState = { wasMultiple: !!i.multiple }), Mr("invalid", r);
											break;
										case "textarea":
											le(r, i), Mr("invalid", r);
									}
									for (var u in (ye(n, i), (l = null), i))
										if (i.hasOwnProperty(u)) {
											var s = i[u];
											"children" === u ? ("string" === typeof s ? r.textContent !== s && (!0 !== i.suppressHydrationWarning && Gr(r.textContent, s, e), (l = ["children", s])) : "number" === typeof s && r.textContent !== "" + s && (!0 !== i.suppressHydrationWarning && Gr(r.textContent, s, e), (l = ["children", "" + s]))) : o.hasOwnProperty(u) && null != s && "onScroll" === u && Mr("scroll", r);
										}
									switch (n) {
										case "input":
											q(r), J(r, i, !0);
											break;
										case "textarea":
											q(r), ie(r);
											break;
										case "select":
										case "option":
											break;
										default:
											"function" === typeof i.onClick && (r.onclick = Jr);
									}
									(r = l), (t.updateQueue = r), null !== r && (t.flags |= 4);
								} else {
									(u = 9 === l.nodeType ? l : l.ownerDocument), "http://www.w3.org/1999/xhtml" === e && (e = oe(n)), "http://www.w3.org/1999/xhtml" === e ? ("script" === n ? (((e = u.createElement("div")).innerHTML = "<script></script>"), (e = e.removeChild(e.firstChild))) : "string" === typeof r.is ? (e = u.createElement(n, { is: r.is })) : ((e = u.createElement(n)), "select" === n && ((u = e), r.multiple ? (u.multiple = !0) : r.size && (u.size = r.size)))) : (e = u.createElementNS(e, n)), (e[dl] = t), (e[pl] = r), _o(e, t, !1, !1), (t.stateNode = e);
									e: {
										switch (((u = be(n, r)), n)) {
											case "dialog":
												Mr("cancel", e), Mr("close", e), (l = r);
												break;
											case "iframe":
											case "object":
											case "embed":
												Mr("load", e), (l = r);
												break;
											case "video":
											case "audio":
												for (l = 0; l < zr.length; l++) Mr(zr[l], e);
												l = r;
												break;
											case "source":
												Mr("error", e), (l = r);
												break;
											case "img":
											case "image":
											case "link":
												Mr("error", e), Mr("load", e), (l = r);
												break;
											case "details":
												Mr("toggle", e), (l = r);
												break;
											case "input":
												X(e, r), (l = Y(e, r)), Mr("invalid", e);
												break;
											case "option":
											default:
												l = r;
												break;
											case "select":
												(e._wrapperState = { wasMultiple: !!r.multiple }), (l = R({}, r, { value: void 0 })), Mr("invalid", e);
												break;
											case "textarea":
												le(e, r), (l = re(e, r)), Mr("invalid", e);
										}
										for (i in (ye(n, l), (s = l)))
											if (s.hasOwnProperty(i)) {
												var c = s[i];
												"style" === i ? ge(e, c) : "dangerouslySetInnerHTML" === i ? null != (c = c ? c.__html : void 0) && fe(e, c) : "children" === i ? ("string" === typeof c ? ("textarea" !== n || "" !== c) && de(e, c) : "number" === typeof c && de(e, "" + c)) : "suppressContentEditableWarning" !== i && "suppressHydrationWarning" !== i && "autoFocus" !== i && (o.hasOwnProperty(i) ? null != c && "onScroll" === i && Mr("scroll", e) : null != c && b(e, i, c, u));
											}
										switch (n) {
											case "input":
												q(e), J(e, r, !1);
												break;
											case "textarea":
												q(e), ie(e);
												break;
											case "option":
												null != r.value && e.setAttribute("value", "" + $(r.value));
												break;
											case "select":
												(e.multiple = !!r.multiple), null != (i = r.value) ? ne(e, !!r.multiple, i, !1) : null != r.defaultValue && ne(e, !!r.multiple, r.defaultValue, !0);
												break;
											default:
												"function" === typeof l.onClick && (e.onclick = Jr);
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
								null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
							}
							return Qo(t), null;
						case 6:
							if (e && null != t.stateNode) zo(e, t, e.memoizedProps, r);
							else {
								if ("string" !== typeof r && null === t.stateNode) throw Error(a(166));
								if (((n = ni(ti.current)), ni(Ja.current), fa(t))) {
									if (((r = t.stateNode), (n = t.memoizedProps), (r[dl] = t), (i = r.nodeValue !== n) && null !== (e = na)))
										switch (e.tag) {
											case 3:
												Gr(r.nodeValue, n, 0 !== (1 & e.mode));
												break;
											case 5:
												!0 !== e.memoizedProps.suppressHydrationWarning && Gr(r.nodeValue, n, 0 !== (1 & e.mode));
										}
									i && (t.flags |= 4);
								} else ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[dl] = t), (t.stateNode = r);
							}
							return Qo(t), null;
						case 13:
							if ((El(oi), (r = t.memoizedState), null === e || (null !== e.memoizedState && null !== e.memoizedState.dehydrated))) {
								if (la && null !== ra && 0 !== (1 & t.mode) && 0 === (128 & t.flags)) da(), pa(), (t.flags |= 98560), (i = !1);
								else if (((i = fa(t)), null !== r && null !== r.dehydrated)) {
									if (null === e) {
										if (!i) throw Error(a(318));
										if (!(i = null !== (i = t.memoizedState) ? i.dehydrated : null)) throw Error(a(317));
										i[dl] = t;
									} else pa(), 0 === (128 & t.flags) && (t.memoizedState = null), (t.flags |= 4);
									Qo(t), (i = !1);
								} else null !== aa && (os(aa), (aa = null)), (i = !0);
								if (!i) return 65536 & t.flags ? t : null;
							}
							return 0 !== (128 & t.flags) ? ((t.lanes = n), t) : ((r = null !== r) !== (null !== e && null !== e.memoizedState) && r && ((t.child.flags |= 8192), 0 !== (1 & t.mode) && (null === e || 0 !== (1 & oi.current) ? 0 === zu && (zu = 3) : gs())), null !== t.updateQueue && (t.flags |= 4), Qo(t), null);
						case 4:
							return li(), Oo(e, t), null === e && Hr(t.stateNode.containerInfo), Qo(t), null;
						case 10:
							return ka(t.type._context), Qo(t), null;
						case 19:
							if ((El(oi), null === (i = t.memoizedState))) return Qo(t), null;
							if (((r = 0 !== (128 & t.flags)), null === (u = i.rendering)))
								if (r) qo(i, !1);
								else {
									if (0 !== zu || (null !== e && 0 !== (128 & e.flags)))
										for (e = t.child; null !== e; ) {
											if (null !== (u = ui(e))) {
												for (t.flags |= 128, qo(i, !1), null !== (r = u.updateQueue) && ((t.updateQueue = r), (t.flags |= 4)), t.subtreeFlags = 0, r = n, n = t.child; null !== n; )
													(e = r), ((i = n).flags &= 14680066), null === (u = i.alternate) ? ((i.childLanes = 0), (i.lanes = e), (i.child = null), (i.subtreeFlags = 0), (i.memoizedProps = null), (i.memoizedState = null), (i.updateQueue = null), (i.dependencies = null), (i.stateNode = null)) : ((i.childLanes = u.childLanes), (i.lanes = u.lanes), (i.child = u.child), (i.subtreeFlags = 0), (i.deletions = null), (i.memoizedProps = u.memoizedProps), (i.memoizedState = u.memoizedState), (i.updateQueue = u.updateQueue), (i.type = u.type), (e = u.dependencies), (i.dependencies = null === e ? null : { lanes: e.lanes, firstContext: e.firstContext })), (n = n.sibling);
												return jl(oi, (1 & oi.current) | 2), t.child;
											}
											e = e.sibling;
										}
									null !== i.tail && Ze() > Vu && ((t.flags |= 128), (r = !0), qo(i, !1), (t.lanes = 4194304));
								}
							else {
								if (!r)
									if (null !== (e = ui(u))) {
										if (((t.flags |= 128), (r = !0), null !== (n = e.updateQueue) && ((t.updateQueue = n), (t.flags |= 4)), qo(i, !0), null === i.tail && "hidden" === i.tailMode && !u.alternate && !la)) return Qo(t), null;
									} else 2 * Ze() - i.renderingStartTime > Vu && 1073741824 !== n && ((t.flags |= 128), (r = !0), qo(i, !1), (t.lanes = 4194304));
								i.isBackwards ? ((u.sibling = t.child), (t.child = u)) : (null !== (n = i.last) ? (n.sibling = u) : (t.child = u), (i.last = u));
							}
							return null !== i.tail ? ((t = i.tail), (i.rendering = t), (i.tail = t.sibling), (i.renderingStartTime = Ze()), (t.sibling = null), (n = oi.current), jl(oi, r ? (1 & n) | 2 : 1 & n), t) : (Qo(t), null);
						case 22:
						case 23:
							return ds(), (r = null !== t.memoizedState), null !== e && (null !== e.memoizedState) !== r && (t.flags |= 8192), r && 0 !== (1 & t.mode) ? 0 !== (1073741824 & Ou) && (Qo(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : Qo(t), null;
						case 24:
						case 25:
							return null;
					}
					throw Error(a(156, t.tag));
				}
				function Yo(e, t) {
					switch ((ta(t), t.tag)) {
						case 1:
							return _l(t.type) && Ol(), 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
						case 3:
							return li(), El(Ll), El(Nl), ci(), 0 !== (65536 & (e = t.flags)) && 0 === (128 & e) ? ((t.flags = (-65537 & e) | 128), t) : null;
						case 5:
							return ii(t), null;
						case 13:
							if ((El(oi), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
								if (null === t.alternate) throw Error(a(340));
								pa();
							}
							return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
						case 19:
							return El(oi), null;
						case 4:
							return li(), null;
						case 10:
							return ka(t.type._context), null;
						case 22:
						case 23:
							return ds(), null;
						default:
							return null;
					}
				}
				(_o = function (e, t) {
					for (var n = t.child; null !== n; ) {
						if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
						else if (4 !== n.tag && null !== n.child) {
							(n.child.return = n), (n = n.child);
							continue;
						}
						if (n === t) break;
						for (; null === n.sibling; ) {
							if (null === n.return || n.return === t) return;
							n = n.return;
						}
						(n.sibling.return = n.return), (n = n.sibling);
					}
				}),
					(Oo = function () {}),
					(Do = function (e, t, n, r) {
						var l = e.memoizedProps;
						if (l !== r) {
							(e = t.stateNode), ni(Ja.current);
							var a,
								i = null;
							switch (n) {
								case "input":
									(l = Y(e, l)), (r = Y(e, r)), (i = []);
									break;
								case "select":
									(l = R({}, l, { value: void 0 })), (r = R({}, r, { value: void 0 })), (i = []);
									break;
								case "textarea":
									(l = re(e, l)), (r = re(e, r)), (i = []);
									break;
								default:
									"function" !== typeof l.onClick && "function" === typeof r.onClick && (e.onclick = Jr);
							}
							for (c in (ye(n, r), (n = null), l))
								if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && null != l[c])
									if ("style" === c) {
										var u = l[c];
										for (a in u) u.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
									} else "dangerouslySetInnerHTML" !== c && "children" !== c && "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (o.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
							for (c in r) {
								var s = r[c];
								if (((u = null != l ? l[c] : void 0), r.hasOwnProperty(c) && s !== u && (null != s || null != u)))
									if ("style" === c)
										if (u) {
											for (a in u) !u.hasOwnProperty(a) || (s && s.hasOwnProperty(a)) || (n || (n = {}), (n[a] = ""));
											for (a in s) s.hasOwnProperty(a) && u[a] !== s[a] && (n || (n = {}), (n[a] = s[a]));
										} else n || (i || (i = []), i.push(c, n)), (n = s);
									else "dangerouslySetInnerHTML" === c ? ((s = s ? s.__html : void 0), (u = u ? u.__html : void 0), null != s && u !== s && (i = i || []).push(c, s)) : "children" === c ? ("string" !== typeof s && "number" !== typeof s) || (i = i || []).push(c, "" + s) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && (o.hasOwnProperty(c) ? (null != s && "onScroll" === c && Mr("scroll", e), i || u === s || (i = [])) : (i = i || []).push(c, s));
							}
							n && (i = i || []).push("style", n);
							var c = i;
							(t.updateQueue = c) && (t.flags |= 4);
						}
					}),
					(zo = function (e, t, n, r) {
						n !== r && (t.flags |= 4);
					});
				var Xo = !1,
					Zo = !1,
					Go = "function" === typeof WeakSet ? WeakSet : Set,
					Jo = null;
				function eu(e, t) {
					var n = e.ref;
					if (null !== n)
						if ("function" === typeof n)
							try {
								n(null);
							} catch (r) {
								Es(e, t, r);
							}
						else n.current = null;
				}
				function tu(e, t, n) {
					try {
						n();
					} catch (r) {
						Es(e, t, r);
					}
				}
				var nu = !1;
				function ru(e, t, n) {
					var r = t.updateQueue;
					if (null !== (r = null !== r ? r.lastEffect : null)) {
						var l = (r = r.next);
						do {
							if ((l.tag & e) === e) {
								var a = l.destroy;
								(l.destroy = void 0), void 0 !== a && tu(t, n, a);
							}
							l = l.next;
						} while (l !== r);
					}
				}
				function lu(e, t) {
					if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
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
				function au(e) {
					var t = e.ref;
					if (null !== t) {
						var n = e.stateNode;
						e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
					}
				}
				function iu(e) {
					var t = e.alternate;
					null !== t && ((e.alternate = null), iu(t)), (e.child = null), (e.deletions = null), (e.sibling = null), 5 === e.tag && null !== (t = e.stateNode) && (delete t[dl], delete t[pl], delete t[ml], delete t[gl], delete t[vl]), (e.stateNode = null), (e.return = null), (e.dependencies = null), (e.memoizedProps = null), (e.memoizedState = null), (e.pendingProps = null), (e.stateNode = null), (e.updateQueue = null);
				}
				function ou(e) {
					return 5 === e.tag || 3 === e.tag || 4 === e.tag;
				}
				function uu(e) {
					e: for (;;) {
						for (; null === e.sibling; ) {
							if (null === e.return || ou(e.return)) return null;
							e = e.return;
						}
						for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag; ) {
							if (2 & e.flags) continue e;
							if (null === e.child || 4 === e.tag) continue e;
							(e.child.return = e), (e = e.child);
						}
						if (!(2 & e.flags)) return e.stateNode;
					}
				}
				function su(e, t, n) {
					var r = e.tag;
					if (5 === r || 6 === r) (e = e.stateNode), t ? (8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t)) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), (null !== (n = n._reactRootContainer) && void 0 !== n) || null !== t.onclick || (t.onclick = Jr));
					else if (4 !== r && null !== (e = e.child)) for (su(e, t, n), e = e.sibling; null !== e; ) su(e, t, n), (e = e.sibling);
				}
				function cu(e, t, n) {
					var r = e.tag;
					if (5 === r || 6 === r) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
					else if (4 !== r && null !== (e = e.child)) for (cu(e, t, n), e = e.sibling; null !== e; ) cu(e, t, n), (e = e.sibling);
				}
				var fu = null,
					du = !1;
				function pu(e, t, n) {
					for (n = n.child; null !== n; ) hu(e, t, n), (n = n.sibling);
				}
				function hu(e, t, n) {
					if (at && "function" === typeof at.onCommitFiberUnmount)
						try {
							at.onCommitFiberUnmount(lt, n);
						} catch (o) {}
					switch (n.tag) {
						case 5:
							Zo || eu(n, t);
						case 6:
							var r = fu,
								l = du;
							(fu = null), pu(e, t, n), (du = l), null !== (fu = r) && (du ? ((e = fu), (n = n.stateNode), 8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : fu.removeChild(n.stateNode));
							break;
						case 18:
							null !== fu && (du ? ((e = fu), (n = n.stateNode), 8 === e.nodeType ? ul(e.parentNode, n) : 1 === e.nodeType && ul(e, n), Ht(e)) : ul(fu, n.stateNode));
							break;
						case 4:
							(r = fu), (l = du), (fu = n.stateNode.containerInfo), (du = !0), pu(e, t, n), (fu = r), (du = l);
							break;
						case 0:
						case 11:
						case 14:
						case 15:
							if (!Zo && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
								l = r = r.next;
								do {
									var a = l,
										i = a.destroy;
									(a = a.tag), void 0 !== i && (0 !== (2 & a) || 0 !== (4 & a)) && tu(n, t, i), (l = l.next);
								} while (l !== r);
							}
							pu(e, t, n);
							break;
						case 1:
							if (!Zo && (eu(n, t), "function" === typeof (r = n.stateNode).componentWillUnmount))
								try {
									(r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
								} catch (o) {
									Es(n, t, o);
								}
							pu(e, t, n);
							break;
						case 21:
							pu(e, t, n);
							break;
						case 22:
							1 & n.mode ? ((Zo = (r = Zo) || null !== n.memoizedState), pu(e, t, n), (Zo = r)) : pu(e, t, n);
							break;
						default:
							pu(e, t, n);
					}
				}
				function mu(e) {
					var t = e.updateQueue;
					if (null !== t) {
						e.updateQueue = null;
						var n = e.stateNode;
						null === n && (n = e.stateNode = new Go()),
							t.forEach(function (t) {
								var r = Ls.bind(null, e, t);
								n.has(t) || (n.add(t), t.then(r, r));
							});
					}
				}
				function gu(e, t) {
					var n = t.deletions;
					if (null !== n)
						for (var r = 0; r < n.length; r++) {
							var l = n[r];
							try {
								var i = e,
									o = t,
									u = o;
								e: for (; null !== u; ) {
									switch (u.tag) {
										case 5:
											(fu = u.stateNode), (du = !1);
											break e;
										case 3:
										case 4:
											(fu = u.stateNode.containerInfo), (du = !0);
											break e;
									}
									u = u.return;
								}
								if (null === fu) throw Error(a(160));
								hu(i, o, l), (fu = null), (du = !1);
								var s = l.alternate;
								null !== s && (s.return = null), (l.return = null);
							} catch (c) {
								Es(l, t, c);
							}
						}
					if (12854 & t.subtreeFlags) for (t = t.child; null !== t; ) vu(t, e), (t = t.sibling);
				}
				function vu(e, t) {
					var n = e.alternate,
						r = e.flags;
					switch (e.tag) {
						case 0:
						case 11:
						case 14:
						case 15:
							if ((gu(t, e), yu(e), 4 & r)) {
								try {
									ru(3, e, e.return), lu(3, e);
								} catch (g) {
									Es(e, e.return, g);
								}
								try {
									ru(5, e, e.return);
								} catch (g) {
									Es(e, e.return, g);
								}
							}
							break;
						case 1:
							gu(t, e), yu(e), 512 & r && null !== n && eu(n, n.return);
							break;
						case 5:
							if ((gu(t, e), yu(e), 512 & r && null !== n && eu(n, n.return), 32 & e.flags)) {
								var l = e.stateNode;
								try {
									de(l, "");
								} catch (g) {
									Es(e, e.return, g);
								}
							}
							if (4 & r && null != (l = e.stateNode)) {
								var i = e.memoizedProps,
									o = null !== n ? n.memoizedProps : i,
									u = e.type,
									s = e.updateQueue;
								if (((e.updateQueue = null), null !== s))
									try {
										"input" === u && "radio" === i.type && null != i.name && Z(l, i), be(u, o);
										var c = be(u, i);
										for (o = 0; o < s.length; o += 2) {
											var f = s[o],
												d = s[o + 1];
											"style" === f ? ge(l, d) : "dangerouslySetInnerHTML" === f ? fe(l, d) : "children" === f ? de(l, d) : b(l, f, d, c);
										}
										switch (u) {
											case "input":
												G(l, i);
												break;
											case "textarea":
												ae(l, i);
												break;
											case "select":
												var p = l._wrapperState.wasMultiple;
												l._wrapperState.wasMultiple = !!i.multiple;
												var h = i.value;
												null != h ? ne(l, !!i.multiple, h, !1) : p !== !!i.multiple && (null != i.defaultValue ? ne(l, !!i.multiple, i.defaultValue, !0) : ne(l, !!i.multiple, i.multiple ? [] : "", !1));
										}
										l[pl] = i;
									} catch (g) {
										Es(e, e.return, g);
									}
							}
							break;
						case 6:
							if ((gu(t, e), yu(e), 4 & r)) {
								if (null === e.stateNode) throw Error(a(162));
								(l = e.stateNode), (i = e.memoizedProps);
								try {
									l.nodeValue = i;
								} catch (g) {
									Es(e, e.return, g);
								}
							}
							break;
						case 3:
							if ((gu(t, e), yu(e), 4 & r && null !== n && n.memoizedState.isDehydrated))
								try {
									Ht(t.containerInfo);
								} catch (g) {
									Es(e, e.return, g);
								}
							break;
						case 4:
						default:
							gu(t, e), yu(e);
							break;
						case 13:
							gu(t, e), yu(e), 8192 & (l = e.child).flags && ((i = null !== l.memoizedState), (l.stateNode.isHidden = i), !i || (null !== l.alternate && null !== l.alternate.memoizedState) || (Hu = Ze())), 4 & r && mu(e);
							break;
						case 22:
							if (((f = null !== n && null !== n.memoizedState), 1 & e.mode ? ((Zo = (c = Zo) || f), gu(t, e), (Zo = c)) : gu(t, e), yu(e), 8192 & r)) {
								if (((c = null !== e.memoizedState), (e.stateNode.isHidden = c) && !f && 0 !== (1 & e.mode)))
									for (Jo = e, f = e.child; null !== f; ) {
										for (d = Jo = f; null !== Jo; ) {
											switch (((h = (p = Jo).child), p.tag)) {
												case 0:
												case 11:
												case 14:
												case 15:
													ru(4, p, p.return);
													break;
												case 1:
													eu(p, p.return);
													var m = p.stateNode;
													if ("function" === typeof m.componentWillUnmount) {
														(r = p), (n = p.return);
														try {
															(t = r), (m.props = t.memoizedProps), (m.state = t.memoizedState), m.componentWillUnmount();
														} catch (g) {
															Es(r, n, g);
														}
													}
													break;
												case 5:
													eu(p, p.return);
													break;
												case 22:
													if (null !== p.memoizedState) {
														ku(d);
														continue;
													}
											}
											null !== h ? ((h.return = p), (Jo = h)) : ku(d);
										}
										f = f.sibling;
									}
								e: for (f = null, d = e; ; ) {
									if (5 === d.tag) {
										if (null === f) {
											f = d;
											try {
												(l = d.stateNode), c ? ("function" === typeof (i = l.style).setProperty ? i.setProperty("display", "none", "important") : (i.display = "none")) : ((u = d.stateNode), (o = void 0 !== (s = d.memoizedProps.style) && null !== s && s.hasOwnProperty("display") ? s.display : null), (u.style.display = me("display", o)));
											} catch (g) {
												Es(e, e.return, g);
											}
										}
									} else if (6 === d.tag) {
										if (null === f)
											try {
												d.stateNode.nodeValue = c ? "" : d.memoizedProps;
											} catch (g) {
												Es(e, e.return, g);
											}
									} else if (((22 !== d.tag && 23 !== d.tag) || null === d.memoizedState || d === e) && null !== d.child) {
										(d.child.return = d), (d = d.child);
										continue;
									}
									if (d === e) break e;
									for (; null === d.sibling; ) {
										if (null === d.return || d.return === e) break e;
										f === d && (f = null), (d = d.return);
									}
									f === d && (f = null), (d.sibling.return = d.return), (d = d.sibling);
								}
							}
							break;
						case 19:
							gu(t, e), yu(e), 4 & r && mu(e);
						case 21:
					}
				}
				function yu(e) {
					var t = e.flags;
					if (2 & t) {
						try {
							e: {
								for (var n = e.return; null !== n; ) {
									if (ou(n)) {
										var r = n;
										break e;
									}
									n = n.return;
								}
								throw Error(a(160));
							}
							switch (r.tag) {
								case 5:
									var l = r.stateNode;
									32 & r.flags && (de(l, ""), (r.flags &= -33)), cu(e, uu(e), l);
									break;
								case 3:
								case 4:
									var i = r.stateNode.containerInfo;
									su(e, uu(e), i);
									break;
								default:
									throw Error(a(161));
							}
						} catch (o) {
							Es(e, e.return, o);
						}
						e.flags &= -3;
					}
					4096 & t && (e.flags &= -4097);
				}
				function bu(e, t, n) {
					(Jo = e), xu(e, t, n);
				}
				function xu(e, t, n) {
					for (var r = 0 !== (1 & e.mode); null !== Jo; ) {
						var l = Jo,
							a = l.child;
						if (22 === l.tag && r) {
							var i = null !== l.memoizedState || Xo;
							if (!i) {
								var o = l.alternate,
									u = (null !== o && null !== o.memoizedState) || Zo;
								o = Xo;
								var s = Zo;
								if (((Xo = i), (Zo = u) && !s)) for (Jo = l; null !== Jo; ) (u = (i = Jo).child), 22 === i.tag && null !== i.memoizedState ? Su(l) : null !== u ? ((u.return = i), (Jo = u)) : Su(l);
								for (; null !== a; ) (Jo = a), xu(a, t, n), (a = a.sibling);
								(Jo = l), (Xo = o), (Zo = s);
							}
							wu(e);
						} else 0 !== (8772 & l.subtreeFlags) && null !== a ? ((a.return = l), (Jo = a)) : wu(e);
					}
				}
				function wu(e) {
					for (; null !== Jo; ) {
						var t = Jo;
						if (0 !== (8772 & t.flags)) {
							var n = t.alternate;
							try {
								if (0 !== (8772 & t.flags))
									switch (t.tag) {
										case 0:
										case 11:
										case 15:
											Zo || lu(5, t);
											break;
										case 1:
											var r = t.stateNode;
											if (4 & t.flags && !Zo)
												if (null === n) r.componentDidMount();
												else {
													var l = t.elementType === t.type ? n.memoizedProps : ga(t.type, n.memoizedProps);
													r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
												}
											var i = t.updateQueue;
											null !== i && Ia(t, i, r);
											break;
										case 3:
											var o = t.updateQueue;
											if (null !== o) {
												if (((n = null), null !== t.child))
													switch (t.child.tag) {
														case 5:
														case 1:
															n = t.child.stateNode;
													}
												Ia(t, o, n);
											}
											break;
										case 5:
											var u = t.stateNode;
											if (null === n && 4 & t.flags) {
												n = u;
												var s = t.memoizedProps;
												switch (t.type) {
													case "button":
													case "input":
													case "select":
													case "textarea":
														s.autoFocus && n.focus();
														break;
													case "img":
														s.src && (n.src = s.src);
												}
											}
											break;
										case 6:
										case 4:
										case 12:
										case 19:
										case 17:
										case 21:
										case 22:
										case 23:
										case 25:
											break;
										case 13:
											if (null === t.memoizedState) {
												var c = t.alternate;
												if (null !== c) {
													var f = c.memoizedState;
													if (null !== f) {
														var d = f.dehydrated;
														null !== d && Ht(d);
													}
												}
											}
											break;
										default:
											throw Error(a(163));
									}
								Zo || (512 & t.flags && au(t));
							} catch (p) {
								Es(t, t.return, p);
							}
						}
						if (t === e) {
							Jo = null;
							break;
						}
						if (null !== (n = t.sibling)) {
							(n.return = t.return), (Jo = n);
							break;
						}
						Jo = t.return;
					}
				}
				function ku(e) {
					for (; null !== Jo; ) {
						var t = Jo;
						if (t === e) {
							Jo = null;
							break;
						}
						var n = t.sibling;
						if (null !== n) {
							(n.return = t.return), (Jo = n);
							break;
						}
						Jo = t.return;
					}
				}
				function Su(e) {
					for (; null !== Jo; ) {
						var t = Jo;
						try {
							switch (t.tag) {
								case 0:
								case 11:
								case 15:
									var n = t.return;
									try {
										lu(4, t);
									} catch (u) {
										Es(t, n, u);
									}
									break;
								case 1:
									var r = t.stateNode;
									if ("function" === typeof r.componentDidMount) {
										var l = t.return;
										try {
											r.componentDidMount();
										} catch (u) {
											Es(t, l, u);
										}
									}
									var a = t.return;
									try {
										au(t);
									} catch (u) {
										Es(t, a, u);
									}
									break;
								case 5:
									var i = t.return;
									try {
										au(t);
									} catch (u) {
										Es(t, i, u);
									}
							}
						} catch (u) {
							Es(t, t.return, u);
						}
						if (t === e) {
							Jo = null;
							break;
						}
						var o = t.sibling;
						if (null !== o) {
							(o.return = t.return), (Jo = o);
							break;
						}
						Jo = t.return;
					}
				}
				var Cu,
					Eu = Math.ceil,
					ju = x.ReactCurrentDispatcher,
					Pu = x.ReactCurrentOwner,
					Nu = x.ReactCurrentBatchConfig,
					Lu = 0,
					Tu = null,
					Fu = null,
					_u = 0,
					Ou = 0,
					Du = Cl(0),
					zu = 0,
					Au = null,
					Ru = 0,
					Iu = 0,
					Mu = 0,
					Bu = null,
					Uu = null,
					Hu = 0,
					Vu = 1 / 0,
					$u = null,
					Wu = !1,
					qu = null,
					Qu = null,
					Ku = !1,
					Yu = null,
					Xu = 0,
					Zu = 0,
					Gu = null,
					Ju = -1,
					es = 0;
				function ts() {
					return 0 !== (6 & Lu) ? Ze() : -1 !== Ju ? Ju : (Ju = Ze());
				}
				function ns(e) {
					return 0 === (1 & e.mode) ? 1 : 0 !== (2 & Lu) && 0 !== _u ? _u & -_u : null !== ma.transition ? (0 === es && (es = mt()), es) : 0 !== (e = bt) ? e : (e = void 0 === (e = window.event) ? 16 : Xt(e.type));
				}
				function rs(e, t, n, r) {
					if (50 < Zu) throw ((Zu = 0), (Gu = null), Error(a(185)));
					vt(e, n, r), (0 !== (2 & Lu) && e === Tu) || (e === Tu && (0 === (2 & Lu) && (Iu |= n), 4 === zu && us(e, _u)), ls(e, r), 1 === n && 0 === Lu && 0 === (1 & t.mode) && ((Vu = Ze() + 500), Ml && Hl()));
				}
				function ls(e, t) {
					var n = e.callbackNode;
					!(function (e, t) {
						for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
							var i = 31 - it(a),
								o = 1 << i,
								u = l[i];
							-1 === u ? (0 !== (o & n) && 0 === (o & r)) || (l[i] = pt(o, t)) : u <= t && (e.expiredLanes |= o), (a &= ~o);
						}
					})(e, t);
					var r = dt(e, e === Tu ? _u : 0);
					if (0 === r) null !== n && Ke(n), (e.callbackNode = null), (e.callbackPriority = 0);
					else if (((t = r & -r), e.callbackPriority !== t)) {
						if ((null != n && Ke(n), 1 === t))
							0 === e.tag
								? (function (e) {
										(Ml = !0), Ul(e);
								  })(ss.bind(null, e))
								: Ul(ss.bind(null, e)),
								il(function () {
									0 === (6 & Lu) && Hl();
								}),
								(n = null);
						else {
							switch (xt(r)) {
								case 1:
									n = Je;
									break;
								case 4:
									n = et;
									break;
								case 16:
								default:
									n = tt;
									break;
								case 536870912:
									n = rt;
							}
							n = Ts(n, as.bind(null, e));
						}
						(e.callbackPriority = t), (e.callbackNode = n);
					}
				}
				function as(e, t) {
					if (((Ju = -1), (es = 0), 0 !== (6 & Lu))) throw Error(a(327));
					var n = e.callbackNode;
					if (Ss() && e.callbackNode !== n) return null;
					var r = dt(e, e === Tu ? _u : 0);
					if (0 === r) return null;
					if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = vs(e, r);
					else {
						t = r;
						var l = Lu;
						Lu |= 2;
						var i = ms();
						for ((Tu === e && _u === t) || (($u = null), (Vu = Ze() + 500), ps(e, t)); ; )
							try {
								bs();
								break;
							} catch (u) {
								hs(e, u);
							}
						wa(), (ju.current = i), (Lu = l), null !== Fu ? (t = 0) : ((Tu = null), (_u = 0), (t = zu));
					}
					if (0 !== t) {
						if ((2 === t && 0 !== (l = ht(e)) && ((r = l), (t = is(e, l))), 1 === t)) throw ((n = Au), ps(e, 0), us(e, r), ls(e, Ze()), n);
						if (6 === t) us(e, r);
						else {
							if (
								((l = e.current.alternate),
								0 === (30 & r) &&
									!(function (e) {
										for (var t = e; ; ) {
											if (16384 & t.flags) {
												var n = t.updateQueue;
												if (null !== n && null !== (n = n.stores))
													for (var r = 0; r < n.length; r++) {
														var l = n[r],
															a = l.getSnapshot;
														l = l.value;
														try {
															if (!or(a(), l)) return !1;
														} catch (o) {
															return !1;
														}
													}
											}
											if (((n = t.child), 16384 & t.subtreeFlags && null !== n)) (n.return = t), (t = n);
											else {
												if (t === e) break;
												for (; null === t.sibling; ) {
													if (null === t.return || t.return === e) return !0;
													t = t.return;
												}
												(t.sibling.return = t.return), (t = t.sibling);
											}
										}
										return !0;
									})(l) &&
									(2 === (t = vs(e, r)) && 0 !== (i = ht(e)) && ((r = i), (t = is(e, i))), 1 === t))
							)
								throw ((n = Au), ps(e, 0), us(e, r), ls(e, Ze()), n);
							switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
								case 0:
								case 1:
									throw Error(a(345));
								case 2:
								case 5:
									ks(e, Uu, $u);
									break;
								case 3:
									if ((us(e, r), (130023424 & r) === r && 10 < (t = Hu + 500 - Ze()))) {
										if (0 !== dt(e, 0)) break;
										if (((l = e.suspendedLanes) & r) !== r) {
											ts(), (e.pingedLanes |= e.suspendedLanes & l);
											break;
										}
										e.timeoutHandle = rl(ks.bind(null, e, Uu, $u), t);
										break;
									}
									ks(e, Uu, $u);
									break;
								case 4:
									if ((us(e, r), (4194240 & r) === r)) break;
									for (t = e.eventTimes, l = -1; 0 < r; ) {
										var o = 31 - it(r);
										(i = 1 << o), (o = t[o]) > l && (l = o), (r &= ~i);
									}
									if (((r = l), 10 < (r = (120 > (r = Ze() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Eu(r / 1960)) - r))) {
										e.timeoutHandle = rl(ks.bind(null, e, Uu, $u), r);
										break;
									}
									ks(e, Uu, $u);
									break;
								default:
									throw Error(a(329));
							}
						}
					}
					return ls(e, Ze()), e.callbackNode === n ? as.bind(null, e) : null;
				}
				function is(e, t) {
					var n = Bu;
					return e.current.memoizedState.isDehydrated && (ps(e, t).flags |= 256), 2 !== (e = vs(e, t)) && ((t = Uu), (Uu = n), null !== t && os(t)), e;
				}
				function os(e) {
					null === Uu ? (Uu = e) : Uu.push.apply(Uu, e);
				}
				function us(e, t) {
					for (t &= ~Mu, t &= ~Iu, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
						var n = 31 - it(t),
							r = 1 << n;
						(e[n] = -1), (t &= ~r);
					}
				}
				function ss(e) {
					if (0 !== (6 & Lu)) throw Error(a(327));
					Ss();
					var t = dt(e, 0);
					if (0 === (1 & t)) return ls(e, Ze()), null;
					var n = vs(e, t);
					if (0 !== e.tag && 2 === n) {
						var r = ht(e);
						0 !== r && ((t = r), (n = is(e, r)));
					}
					if (1 === n) throw ((n = Au), ps(e, 0), us(e, t), ls(e, Ze()), n);
					if (6 === n) throw Error(a(345));
					return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), ks(e, Uu, $u), ls(e, Ze()), null;
				}
				function cs(e, t) {
					var n = Lu;
					Lu |= 1;
					try {
						return e(t);
					} finally {
						0 === (Lu = n) && ((Vu = Ze() + 500), Ml && Hl());
					}
				}
				function fs(e) {
					null !== Yu && 0 === Yu.tag && 0 === (6 & Lu) && Ss();
					var t = Lu;
					Lu |= 1;
					var n = Nu.transition,
						r = bt;
					try {
						if (((Nu.transition = null), (bt = 1), e)) return e();
					} finally {
						(bt = r), (Nu.transition = n), 0 === (6 & (Lu = t)) && Hl();
					}
				}
				function ds() {
					(Ou = Du.current), El(Du);
				}
				function ps(e, t) {
					(e.finishedWork = null), (e.finishedLanes = 0);
					var n = e.timeoutHandle;
					if ((-1 !== n && ((e.timeoutHandle = -1), ll(n)), null !== Fu))
						for (n = Fu.return; null !== n; ) {
							var r = n;
							switch ((ta(r), r.tag)) {
								case 1:
									null !== (r = r.type.childContextTypes) && void 0 !== r && Ol();
									break;
								case 3:
									li(), El(Ll), El(Nl), ci();
									break;
								case 5:
									ii(r);
									break;
								case 4:
									li();
									break;
								case 13:
								case 19:
									El(oi);
									break;
								case 10:
									ka(r.type._context);
									break;
								case 22:
								case 23:
									ds();
							}
							n = n.return;
						}
					if (((Tu = e), (Fu = e = Ds(e.current, null)), (_u = Ou = t), (zu = 0), (Au = null), (Mu = Iu = Ru = 0), (Uu = Bu = null), null !== ja)) {
						for (t = 0; t < ja.length; t++)
							if (null !== (r = (n = ja[t]).interleaved)) {
								n.interleaved = null;
								var l = r.next,
									a = n.pending;
								if (null !== a) {
									var i = a.next;
									(a.next = l), (r.next = i);
								}
								n.pending = r;
							}
						ja = null;
					}
					return e;
				}
				function hs(e, t) {
					for (;;) {
						var n = Fu;
						try {
							if ((wa(), (fi.current = ao), vi)) {
								for (var r = hi.memoizedState; null !== r; ) {
									var l = r.queue;
									null !== l && (l.pending = null), (r = r.next);
								}
								vi = !1;
							}
							if (((pi = 0), (gi = mi = hi = null), (yi = !1), (bi = 0), (Pu.current = null), null === n || null === n.return)) {
								(zu = 1), (Au = t), (Fu = null);
								break;
							}
							e: {
								var i = e,
									o = n.return,
									u = n,
									s = t;
								if (((t = _u), (u.flags |= 32768), null !== s && "object" === typeof s && "function" === typeof s.then)) {
									var c = s,
										f = u,
										d = f.tag;
									if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
										var p = f.alternate;
										p ? ((f.updateQueue = p.updateQueue), (f.memoizedState = p.memoizedState), (f.lanes = p.lanes)) : ((f.updateQueue = null), (f.memoizedState = null));
									}
									var h = vo(o);
									if (null !== h) {
										(h.flags &= -257), yo(h, o, u, 0, t), 1 & h.mode && go(i, c, t), (s = c);
										var m = (t = h).updateQueue;
										if (null === m) {
											var g = new Set();
											g.add(s), (t.updateQueue = g);
										} else m.add(s);
										break e;
									}
									if (0 === (1 & t)) {
										go(i, c, t), gs();
										break e;
									}
									s = Error(a(426));
								} else if (la && 1 & u.mode) {
									var v = vo(o);
									if (null !== v) {
										0 === (65536 & v.flags) && (v.flags |= 256), yo(v, o, u, 0, t), ha(so(s, u));
										break e;
									}
								}
								(i = s = so(s, u)), 4 !== zu && (zu = 2), null === Bu ? (Bu = [i]) : Bu.push(i), (i = o);
								do {
									switch (i.tag) {
										case 3:
											(i.flags |= 65536), (t &= -t), (i.lanes |= t), Aa(i, ho(0, s, t));
											break e;
										case 1:
											u = s;
											var y = i.type,
												b = i.stateNode;
											if (0 === (128 & i.flags) && ("function" === typeof y.getDerivedStateFromError || (null !== b && "function" === typeof b.componentDidCatch && (null === Qu || !Qu.has(b))))) {
												(i.flags |= 65536), (t &= -t), (i.lanes |= t), Aa(i, mo(i, u, t));
												break e;
											}
									}
									i = i.return;
								} while (null !== i);
							}
							ws(n);
						} catch (x) {
							(t = x), Fu === n && null !== n && (Fu = n = n.return);
							continue;
						}
						break;
					}
				}
				function ms() {
					var e = ju.current;
					return (ju.current = ao), null === e ? ao : e;
				}
				function gs() {
					(0 !== zu && 3 !== zu && 2 !== zu) || (zu = 4), null === Tu || (0 === (268435455 & Ru) && 0 === (268435455 & Iu)) || us(Tu, _u);
				}
				function vs(e, t) {
					var n = Lu;
					Lu |= 2;
					var r = ms();
					for ((Tu === e && _u === t) || (($u = null), ps(e, t)); ; )
						try {
							ys();
							break;
						} catch (l) {
							hs(e, l);
						}
					if ((wa(), (Lu = n), (ju.current = r), null !== Fu)) throw Error(a(261));
					return (Tu = null), (_u = 0), zu;
				}
				function ys() {
					for (; null !== Fu; ) xs(Fu);
				}
				function bs() {
					for (; null !== Fu && !Ye(); ) xs(Fu);
				}
				function xs(e) {
					var t = Cu(e.alternate, e, Ou);
					(e.memoizedProps = e.pendingProps), null === t ? ws(e) : (Fu = t), (Pu.current = null);
				}
				function ws(e) {
					var t = e;
					do {
						var n = t.alternate;
						if (((e = t.return), 0 === (32768 & t.flags))) {
							if (null !== (n = Ko(n, t, Ou))) return void (Fu = n);
						} else {
							if (null !== (n = Yo(n, t))) return (n.flags &= 32767), void (Fu = n);
							if (null === e) return (zu = 6), void (Fu = null);
							(e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
						}
						if (null !== (t = t.sibling)) return void (Fu = t);
						Fu = t = e;
					} while (null !== t);
					0 === zu && (zu = 5);
				}
				function ks(e, t, n) {
					var r = bt,
						l = Nu.transition;
					try {
						(Nu.transition = null),
							(bt = 1),
							(function (e, t, n, r) {
								do {
									Ss();
								} while (null !== Yu);
								if (0 !== (6 & Lu)) throw Error(a(327));
								n = e.finishedWork;
								var l = e.finishedLanes;
								if (null === n) return null;
								if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(a(177));
								(e.callbackNode = null), (e.callbackPriority = 0);
								var i = n.lanes | n.childLanes;
								if (
									((function (e, t) {
										var n = e.pendingLanes & ~t;
										(e.pendingLanes = t), (e.suspendedLanes = 0), (e.pingedLanes = 0), (e.expiredLanes &= t), (e.mutableReadLanes &= t), (e.entangledLanes &= t), (t = e.entanglements);
										var r = e.eventTimes;
										for (e = e.expirationTimes; 0 < n; ) {
											var l = 31 - it(n),
												a = 1 << l;
											(t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~a);
										}
									})(e, i),
									e === Tu && ((Fu = Tu = null), (_u = 0)),
									(0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
										Ku ||
										((Ku = !0),
										Ts(tt, function () {
											return Ss(), null;
										})),
									(i = 0 !== (15990 & n.flags)),
									0 !== (15990 & n.subtreeFlags) || i)
								) {
									(i = Nu.transition), (Nu.transition = null);
									var o = bt;
									bt = 1;
									var u = Lu;
									(Lu |= 4),
										(Pu.current = null),
										(function (e, t) {
											if (((el = $t), pr((e = dr())))) {
												if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
												else
													e: {
														var r = (n = ((n = e.ownerDocument) && n.defaultView) || window).getSelection && n.getSelection();
														if (r && 0 !== r.rangeCount) {
															n = r.anchorNode;
															var l = r.anchorOffset,
																i = r.focusNode;
															r = r.focusOffset;
															try {
																n.nodeType, i.nodeType;
															} catch (w) {
																n = null;
																break e;
															}
															var o = 0,
																u = -1,
																s = -1,
																c = 0,
																f = 0,
																d = e,
																p = null;
															t: for (;;) {
																for (var h; d !== n || (0 !== l && 3 !== d.nodeType) || (u = o + l), d !== i || (0 !== r && 3 !== d.nodeType) || (s = o + r), 3 === d.nodeType && (o += d.nodeValue.length), null !== (h = d.firstChild); ) (p = d), (d = h);
																for (;;) {
																	if (d === e) break t;
																	if ((p === n && ++c === l && (u = o), p === i && ++f === r && (s = o), null !== (h = d.nextSibling))) break;
																	p = (d = p).parentNode;
																}
																d = h;
															}
															n = -1 === u || -1 === s ? null : { start: u, end: s };
														} else n = null;
													}
												n = n || { start: 0, end: 0 };
											} else n = null;
											for (tl = { focusedElem: e, selectionRange: n }, $t = !1, Jo = t; null !== Jo; )
												if (((e = (t = Jo).child), 0 !== (1028 & t.subtreeFlags) && null !== e)) (e.return = t), (Jo = e);
												else
													for (; null !== Jo; ) {
														t = Jo;
														try {
															var m = t.alternate;
															if (0 !== (1024 & t.flags))
																switch (t.tag) {
																	case 0:
																	case 11:
																	case 15:
																	case 5:
																	case 6:
																	case 4:
																	case 17:
																		break;
																	case 1:
																		if (null !== m) {
																			var g = m.memoizedProps,
																				v = m.memoizedState,
																				y = t.stateNode,
																				b = y.getSnapshotBeforeUpdate(t.elementType === t.type ? g : ga(t.type, g), v);
																			y.__reactInternalSnapshotBeforeUpdate = b;
																		}
																		break;
																	case 3:
																		var x = t.stateNode.containerInfo;
																		1 === x.nodeType ? (x.textContent = "") : 9 === x.nodeType && x.documentElement && x.removeChild(x.documentElement);
																		break;
																	default:
																		throw Error(a(163));
																}
														} catch (w) {
															Es(t, t.return, w);
														}
														if (null !== (e = t.sibling)) {
															(e.return = t.return), (Jo = e);
															break;
														}
														Jo = t.return;
													}
											(m = nu), (nu = !1);
										})(e, n),
										vu(n, e),
										hr(tl),
										($t = !!el),
										(tl = el = null),
										(e.current = n),
										bu(n, e, l),
										Xe(),
										(Lu = u),
										(bt = o),
										(Nu.transition = i);
								} else e.current = n;
								if (
									(Ku && ((Ku = !1), (Yu = e), (Xu = l)),
									(i = e.pendingLanes),
									0 === i && (Qu = null),
									(function (e) {
										if (at && "function" === typeof at.onCommitFiberRoot)
											try {
												at.onCommitFiberRoot(lt, e, void 0, 128 === (128 & e.current.flags));
											} catch (t) {}
									})(n.stateNode),
									ls(e, Ze()),
									null !== t)
								)
									for (r = e.onRecoverableError, n = 0; n < t.length; n++) (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
								if (Wu) throw ((Wu = !1), (e = qu), (qu = null), e);
								0 !== (1 & Xu) && 0 !== e.tag && Ss(), (i = e.pendingLanes), 0 !== (1 & i) ? (e === Gu ? Zu++ : ((Zu = 0), (Gu = e))) : (Zu = 0), Hl();
							})(e, t, n, r);
					} finally {
						(Nu.transition = l), (bt = r);
					}
					return null;
				}
				function Ss() {
					if (null !== Yu) {
						var e = xt(Xu),
							t = Nu.transition,
							n = bt;
						try {
							if (((Nu.transition = null), (bt = 16 > e ? 16 : e), null === Yu)) var r = !1;
							else {
								if (((e = Yu), (Yu = null), (Xu = 0), 0 !== (6 & Lu))) throw Error(a(331));
								var l = Lu;
								for (Lu |= 4, Jo = e.current; null !== Jo; ) {
									var i = Jo,
										o = i.child;
									if (0 !== (16 & Jo.flags)) {
										var u = i.deletions;
										if (null !== u) {
											for (var s = 0; s < u.length; s++) {
												var c = u[s];
												for (Jo = c; null !== Jo; ) {
													var f = Jo;
													switch (f.tag) {
														case 0:
														case 11:
														case 15:
															ru(8, f, i);
													}
													var d = f.child;
													if (null !== d) (d.return = f), (Jo = d);
													else
														for (; null !== Jo; ) {
															var p = (f = Jo).sibling,
																h = f.return;
															if ((iu(f), f === c)) {
																Jo = null;
																break;
															}
															if (null !== p) {
																(p.return = h), (Jo = p);
																break;
															}
															Jo = h;
														}
												}
											}
											var m = i.alternate;
											if (null !== m) {
												var g = m.child;
												if (null !== g) {
													m.child = null;
													do {
														var v = g.sibling;
														(g.sibling = null), (g = v);
													} while (null !== g);
												}
											}
											Jo = i;
										}
									}
									if (0 !== (2064 & i.subtreeFlags) && null !== o) (o.return = i), (Jo = o);
									else
										e: for (; null !== Jo; ) {
											if (0 !== (2048 & (i = Jo).flags))
												switch (i.tag) {
													case 0:
													case 11:
													case 15:
														ru(9, i, i.return);
												}
											var y = i.sibling;
											if (null !== y) {
												(y.return = i.return), (Jo = y);
												break e;
											}
											Jo = i.return;
										}
								}
								var b = e.current;
								for (Jo = b; null !== Jo; ) {
									var x = (o = Jo).child;
									if (0 !== (2064 & o.subtreeFlags) && null !== x) (x.return = o), (Jo = x);
									else
										e: for (o = b; null !== Jo; ) {
											if (0 !== (2048 & (u = Jo).flags))
												try {
													switch (u.tag) {
														case 0:
														case 11:
														case 15:
															lu(9, u);
													}
												} catch (k) {
													Es(u, u.return, k);
												}
											if (u === o) {
												Jo = null;
												break e;
											}
											var w = u.sibling;
											if (null !== w) {
												(w.return = u.return), (Jo = w);
												break e;
											}
											Jo = u.return;
										}
								}
								if (((Lu = l), Hl(), at && "function" === typeof at.onPostCommitFiberRoot))
									try {
										at.onPostCommitFiberRoot(lt, e);
									} catch (k) {}
								r = !0;
							}
							return r;
						} finally {
							(bt = n), (Nu.transition = t);
						}
					}
					return !1;
				}
				function Cs(e, t, n) {
					(e = Da(e, (t = ho(0, (t = so(n, t)), 1)), 1)), (t = ts()), null !== e && (vt(e, 1, t), ls(e, t));
				}
				function Es(e, t, n) {
					if (3 === e.tag) Cs(e, e, n);
					else
						for (; null !== t; ) {
							if (3 === t.tag) {
								Cs(t, e, n);
								break;
							}
							if (1 === t.tag) {
								var r = t.stateNode;
								if ("function" === typeof t.type.getDerivedStateFromError || ("function" === typeof r.componentDidCatch && (null === Qu || !Qu.has(r)))) {
									(t = Da(t, (e = mo(t, (e = so(n, e)), 1)), 1)), (e = ts()), null !== t && (vt(t, 1, e), ls(t, e));
									break;
								}
							}
							t = t.return;
						}
				}
				function js(e, t, n) {
					var r = e.pingCache;
					null !== r && r.delete(t), (t = ts()), (e.pingedLanes |= e.suspendedLanes & n), Tu === e && (_u & n) === n && (4 === zu || (3 === zu && (130023424 & _u) === _u && 500 > Ze() - Hu) ? ps(e, 0) : (Mu |= n)), ls(e, t);
				}
				function Ps(e, t) {
					0 === t && (0 === (1 & e.mode) ? (t = 1) : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
					var n = ts();
					null !== (e = La(e, t)) && (vt(e, t, n), ls(e, n));
				}
				function Ns(e) {
					var t = e.memoizedState,
						n = 0;
					null !== t && (n = t.retryLane), Ps(e, n);
				}
				function Ls(e, t) {
					var n = 0;
					switch (e.tag) {
						case 13:
							var r = e.stateNode,
								l = e.memoizedState;
							null !== l && (n = l.retryLane);
							break;
						case 19:
							r = e.stateNode;
							break;
						default:
							throw Error(a(314));
					}
					null !== r && r.delete(t), Ps(e, n);
				}
				function Ts(e, t) {
					return Qe(e, t);
				}
				function Fs(e, t, n, r) {
					(this.tag = e), (this.key = n), (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null), (this.index = 0), (this.ref = null), (this.pendingProps = t), (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null), (this.mode = r), (this.subtreeFlags = this.flags = 0), (this.deletions = null), (this.childLanes = this.lanes = 0), (this.alternate = null);
				}
				function _s(e, t, n, r) {
					return new Fs(e, t, n, r);
				}
				function Os(e) {
					return !(!(e = e.prototype) || !e.isReactComponent);
				}
				function Ds(e, t) {
					var n = e.alternate;
					return null === n ? (((n = _s(e.tag, t, e.key, e.mode)).elementType = e.elementType), (n.type = e.type), (n.stateNode = e.stateNode), (n.alternate = e), (e.alternate = n)) : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)), (n.flags = 14680064 & e.flags), (n.childLanes = e.childLanes), (n.lanes = e.lanes), (n.child = e.child), (n.memoizedProps = e.memoizedProps), (n.memoizedState = e.memoizedState), (n.updateQueue = e.updateQueue), (t = e.dependencies), (n.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }), (n.sibling = e.sibling), (n.index = e.index), (n.ref = e.ref), n;
				}
				function zs(e, t, n, r, l, i) {
					var o = 2;
					if (((r = e), "function" === typeof e)) Os(e) && (o = 1);
					else if ("string" === typeof e) o = 5;
					else
						e: switch (e) {
							case S:
								return As(n.children, l, i, t);
							case C:
								(o = 8), (l |= 8);
								break;
							case E:
								return ((e = _s(12, n, t, 2 | l)).elementType = E), (e.lanes = i), e;
							case L:
								return ((e = _s(13, n, t, l)).elementType = L), (e.lanes = i), e;
							case T:
								return ((e = _s(19, n, t, l)).elementType = T), (e.lanes = i), e;
							case O:
								return Rs(n, l, i, t);
							default:
								if ("object" === typeof e && null !== e)
									switch (e.$$typeof) {
										case j:
											o = 10;
											break e;
										case P:
											o = 9;
											break e;
										case N:
											o = 11;
											break e;
										case F:
											o = 14;
											break e;
										case _:
											(o = 16), (r = null);
											break e;
									}
								throw Error(a(130, null == e ? e : typeof e, ""));
						}
					return ((t = _s(o, n, t, l)).elementType = e), (t.type = r), (t.lanes = i), t;
				}
				function As(e, t, n, r) {
					return ((e = _s(7, e, r, t)).lanes = n), e;
				}
				function Rs(e, t, n, r) {
					return ((e = _s(22, e, r, t)).elementType = O), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
				}
				function Is(e, t, n) {
					return ((e = _s(6, e, null, t)).lanes = n), e;
				}
				function Ms(e, t, n) {
					return ((t = _s(4, null !== e.children ? e.children : [], e.key, t)).lanes = n), (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }), t;
				}
				function Bs(e, t, n, r, l) {
					(this.tag = t), (this.containerInfo = e), (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null), (this.timeoutHandle = -1), (this.callbackNode = this.pendingContext = this.context = null), (this.callbackPriority = 0), (this.eventTimes = gt(0)), (this.expirationTimes = gt(-1)), (this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0), (this.entanglements = gt(0)), (this.identifierPrefix = r), (this.onRecoverableError = l), (this.mutableSourceEagerHydrationData = null);
				}
				function Us(e, t, n, r, l, a, i, o, u) {
					return (e = new Bs(e, t, n, o, u)), 1 === t ? ((t = 1), !0 === a && (t |= 8)) : (t = 0), (a = _s(3, null, null, t)), (e.current = a), (a.stateNode = e), (a.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }), Fa(a), e;
				}
				function Hs(e) {
					if (!e) return Pl;
					e: {
						if (He((e = e._reactInternals)) !== e || 1 !== e.tag) throw Error(a(170));
						var t = e;
						do {
							switch (t.tag) {
								case 3:
									t = t.stateNode.context;
									break e;
								case 1:
									if (_l(t.type)) {
										t = t.stateNode.__reactInternalMemoizedMergedChildContext;
										break e;
									}
							}
							t = t.return;
						} while (null !== t);
						throw Error(a(171));
					}
					if (1 === e.tag) {
						var n = e.type;
						if (_l(n)) return zl(e, n, t);
					}
					return t;
				}
				function Vs(e, t, n, r, l, a, i, o, u) {
					return ((e = Us(n, r, !0, e, 0, a, 0, o, u)).context = Hs(null)), (n = e.current), ((a = Oa((r = ts()), (l = ns(n)))).callback = void 0 !== t && null !== t ? t : null), Da(n, a, l), (e.current.lanes = l), vt(e, l, r), ls(e, r), e;
				}
				function $s(e, t, n, r) {
					var l = t.current,
						a = ts(),
						i = ns(l);
					return (n = Hs(n)), null === t.context ? (t.context = n) : (t.pendingContext = n), ((t = Oa(a, i)).payload = { element: e }), null !== (r = void 0 === r ? null : r) && (t.callback = r), null !== (e = Da(l, t, i)) && (rs(e, l, i, a), za(e, l, i)), i;
				}
				function Ws(e) {
					return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
				}
				function qs(e, t) {
					if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
						var n = e.retryLane;
						e.retryLane = 0 !== n && n < t ? n : t;
					}
				}
				function Qs(e, t) {
					qs(e, t), (e = e.alternate) && qs(e, t);
				}
				Cu = function (e, t, n) {
					if (null !== e)
						if (e.memoizedProps !== t.pendingProps || Ll.current) xo = !0;
						else {
							if (0 === (e.lanes & n) && 0 === (128 & t.flags))
								return (
									(xo = !1),
									(function (e, t, n) {
										switch (t.tag) {
											case 3:
												To(t), pa();
												break;
											case 5:
												ai(t);
												break;
											case 1:
												_l(t.type) && Al(t);
												break;
											case 4:
												ri(t, t.stateNode.containerInfo);
												break;
											case 10:
												var r = t.type._context,
													l = t.memoizedProps.value;
												jl(va, r._currentValue), (r._currentValue = l);
												break;
											case 13:
												if (null !== (r = t.memoizedState)) return null !== r.dehydrated ? (jl(oi, 1 & oi.current), (t.flags |= 128), null) : 0 !== (n & t.child.childLanes) ? Io(e, t, n) : (jl(oi, 1 & oi.current), null !== (e = Wo(e, t, n)) ? e.sibling : null);
												jl(oi, 1 & oi.current);
												break;
											case 19:
												if (((r = 0 !== (n & t.childLanes)), 0 !== (128 & e.flags))) {
													if (r) return Vo(e, t, n);
													t.flags |= 128;
												}
												if ((null !== (l = t.memoizedState) && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)), jl(oi, oi.current), r)) break;
												return null;
											case 22:
											case 23:
												return (t.lanes = 0), Eo(e, t, n);
										}
										return Wo(e, t, n);
									})(e, t, n)
								);
							xo = 0 !== (131072 & e.flags);
						}
					else (xo = !1), la && 0 !== (1048576 & t.flags) && Jl(t, ql, t.index);
					switch (((t.lanes = 0), t.tag)) {
						case 2:
							var r = t.type;
							$o(e, t), (e = t.pendingProps);
							var l = Fl(t, Nl.current);
							Ca(t, n), (l = Si(null, t, r, e, l, n));
							var i = Ci();
							return (t.flags |= 1), "object" === typeof l && null !== l && "function" === typeof l.render && void 0 === l.$$typeof ? ((t.tag = 1), (t.memoizedState = null), (t.updateQueue = null), _l(r) ? ((i = !0), Al(t)) : (i = !1), (t.memoizedState = null !== l.state && void 0 !== l.state ? l.state : null), Fa(t), (l.updater = Ua), (t.stateNode = l), (l._reactInternals = t), Wa(t, r, e, n), (t = Lo(null, t, r, !0, i, n))) : ((t.tag = 0), la && i && ea(t), wo(null, t, l, n), (t = t.child)), t;
						case 16:
							r = t.elementType;
							e: {
								switch (
									($o(e, t),
									(e = t.pendingProps),
									(r = (l = r._init)(r._payload)),
									(t.type = r),
									(l = t.tag =
										(function (e) {
											if ("function" === typeof e) return Os(e) ? 1 : 0;
											if (void 0 !== e && null !== e) {
												if ((e = e.$$typeof) === N) return 11;
												if (e === F) return 14;
											}
											return 2;
										})(r)),
									(e = ga(r, e)),
									l)
								) {
									case 0:
										t = Po(null, t, r, e, n);
										break e;
									case 1:
										t = No(null, t, r, e, n);
										break e;
									case 11:
										t = ko(null, t, r, e, n);
										break e;
									case 14:
										t = So(null, t, r, ga(r.type, e), n);
										break e;
								}
								throw Error(a(306, r, ""));
							}
							return t;
						case 0:
							return (r = t.type), (l = t.pendingProps), Po(e, t, r, (l = t.elementType === r ? l : ga(r, l)), n);
						case 1:
							return (r = t.type), (l = t.pendingProps), No(e, t, r, (l = t.elementType === r ? l : ga(r, l)), n);
						case 3:
							e: {
								if ((To(t), null === e)) throw Error(a(387));
								(r = t.pendingProps), (l = (i = t.memoizedState).element), _a(e, t), Ra(t, r, null, n);
								var o = t.memoizedState;
								if (((r = o.element), i.isDehydrated)) {
									if (((i = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }), (t.updateQueue.baseState = i), (t.memoizedState = i), 256 & t.flags)) {
										t = Fo(e, t, r, n, (l = so(Error(a(423)), t)));
										break e;
									}
									if (r !== l) {
										t = Fo(e, t, r, n, (l = so(Error(a(424)), t)));
										break e;
									}
									for (ra = sl(t.stateNode.containerInfo.firstChild), na = t, la = !0, aa = null, n = Za(t, null, r, n), t.child = n; n; ) (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
								} else {
									if ((pa(), r === l)) {
										t = Wo(e, t, n);
										break e;
									}
									wo(e, t, r, n);
								}
								t = t.child;
							}
							return t;
						case 5:
							return ai(t), null === e && sa(t), (r = t.type), (l = t.pendingProps), (i = null !== e ? e.memoizedProps : null), (o = l.children), nl(r, l) ? (o = null) : null !== i && nl(r, i) && (t.flags |= 32), jo(e, t), wo(e, t, o, n), t.child;
						case 6:
							return null === e && sa(t), null;
						case 13:
							return Io(e, t, n);
						case 4:
							return ri(t, t.stateNode.containerInfo), (r = t.pendingProps), null === e ? (t.child = Xa(t, null, r, n)) : wo(e, t, r, n), t.child;
						case 11:
							return (r = t.type), (l = t.pendingProps), ko(e, t, r, (l = t.elementType === r ? l : ga(r, l)), n);
						case 7:
							return wo(e, t, t.pendingProps, n), t.child;
						case 8:
						case 12:
							return wo(e, t, t.pendingProps.children, n), t.child;
						case 10:
							e: {
								if (((r = t.type._context), (l = t.pendingProps), (i = t.memoizedProps), (o = l.value), jl(va, r._currentValue), (r._currentValue = o), null !== i))
									if (or(i.value, o)) {
										if (i.children === l.children && !Ll.current) {
											t = Wo(e, t, n);
											break e;
										}
									} else
										for (null !== (i = t.child) && (i.return = t); null !== i; ) {
											var u = i.dependencies;
											if (null !== u) {
												o = i.child;
												for (var s = u.firstContext; null !== s; ) {
													if (s.context === r) {
														if (1 === i.tag) {
															(s = Oa(-1, n & -n)).tag = 2;
															var c = i.updateQueue;
															if (null !== c) {
																var f = (c = c.shared).pending;
																null === f ? (s.next = s) : ((s.next = f.next), (f.next = s)), (c.pending = s);
															}
														}
														(i.lanes |= n), null !== (s = i.alternate) && (s.lanes |= n), Sa(i.return, n, t), (u.lanes |= n);
														break;
													}
													s = s.next;
												}
											} else if (10 === i.tag) o = i.type === t.type ? null : i.child;
											else if (18 === i.tag) {
												if (null === (o = i.return)) throw Error(a(341));
												(o.lanes |= n), null !== (u = o.alternate) && (u.lanes |= n), Sa(o, n, t), (o = i.sibling);
											} else o = i.child;
											if (null !== o) o.return = i;
											else
												for (o = i; null !== o; ) {
													if (o === t) {
														o = null;
														break;
													}
													if (null !== (i = o.sibling)) {
														(i.return = o.return), (o = i);
														break;
													}
													o = o.return;
												}
											i = o;
										}
								wo(e, t, l.children, n), (t = t.child);
							}
							return t;
						case 9:
							return (l = t.type), (r = t.pendingProps.children), Ca(t, n), (r = r((l = Ea(l)))), (t.flags |= 1), wo(e, t, r, n), t.child;
						case 14:
							return (l = ga((r = t.type), t.pendingProps)), So(e, t, r, (l = ga(r.type, l)), n);
						case 15:
							return Co(e, t, t.type, t.pendingProps, n);
						case 17:
							return (r = t.type), (l = t.pendingProps), (l = t.elementType === r ? l : ga(r, l)), $o(e, t), (t.tag = 1), _l(r) ? ((e = !0), Al(t)) : (e = !1), Ca(t, n), Va(t, r, l), Wa(t, r, l, n), Lo(null, t, r, !0, e, n);
						case 19:
							return Vo(e, t, n);
						case 22:
							return Eo(e, t, n);
					}
					throw Error(a(156, t.tag));
				};
				var Ks =
					"function" === typeof reportError
						? reportError
						: function (e) {
								console.error(e);
						  };
				function Ys(e) {
					this._internalRoot = e;
				}
				function Xs(e) {
					this._internalRoot = e;
				}
				function Zs(e) {
					return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType));
				}
				function Gs(e) {
					return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue)));
				}
				function Js() {}
				function ec(e, t, n, r, l) {
					var a = n._reactRootContainer;
					if (a) {
						var i = a;
						if ("function" === typeof l) {
							var o = l;
							l = function () {
								var e = Ws(i);
								o.call(e);
							};
						}
						$s(t, i, e, l);
					} else
						i = (function (e, t, n, r, l) {
							if (l) {
								if ("function" === typeof r) {
									var a = r;
									r = function () {
										var e = Ws(i);
										a.call(e);
									};
								}
								var i = Vs(t, r, e, 0, null, !1, 0, "", Js);
								return (e._reactRootContainer = i), (e[hl] = i.current), Hr(8 === e.nodeType ? e.parentNode : e), fs(), i;
							}
							for (; (l = e.lastChild); ) e.removeChild(l);
							if ("function" === typeof r) {
								var o = r;
								r = function () {
									var e = Ws(u);
									o.call(e);
								};
							}
							var u = Us(e, 0, !1, null, 0, !1, 0, "", Js);
							return (
								(e._reactRootContainer = u),
								(e[hl] = u.current),
								Hr(8 === e.nodeType ? e.parentNode : e),
								fs(function () {
									$s(t, u, n, r);
								}),
								u
							);
						})(n, t, e, l, r);
					return Ws(i);
				}
				(Xs.prototype.render = Ys.prototype.render =
					function (e) {
						var t = this._internalRoot;
						if (null === t) throw Error(a(409));
						$s(e, t, null, null);
					}),
					(Xs.prototype.unmount = Ys.prototype.unmount =
						function () {
							var e = this._internalRoot;
							if (null !== e) {
								this._internalRoot = null;
								var t = e.containerInfo;
								fs(function () {
									$s(null, e, null, null);
								}),
									(t[hl] = null);
							}
						}),
					(Xs.prototype.unstable_scheduleHydration = function (e) {
						if (e) {
							var t = Ct();
							e = { blockedOn: null, target: e, priority: t };
							for (var n = 0; n < Ot.length && 0 !== t && t < Ot[n].priority; n++);
							Ot.splice(n, 0, e), 0 === n && Rt(e);
						}
					}),
					(wt = function (e) {
						switch (e.tag) {
							case 3:
								var t = e.stateNode;
								if (t.current.memoizedState.isDehydrated) {
									var n = ft(t.pendingLanes);
									0 !== n && (yt(t, 1 | n), ls(t, Ze()), 0 === (6 & Lu) && ((Vu = Ze() + 500), Hl()));
								}
								break;
							case 13:
								fs(function () {
									var t = La(e, 1);
									if (null !== t) {
										var n = ts();
										rs(t, e, 1, n);
									}
								}),
									Qs(e, 1);
						}
					}),
					(kt = function (e) {
						if (13 === e.tag) {
							var t = La(e, 134217728);
							if (null !== t) rs(t, e, 134217728, ts());
							Qs(e, 134217728);
						}
					}),
					(St = function (e) {
						if (13 === e.tag) {
							var t = ns(e),
								n = La(e, t);
							if (null !== n) rs(n, e, t, ts());
							Qs(e, t);
						}
					}),
					(Ct = function () {
						return bt;
					}),
					(Et = function (e, t) {
						var n = bt;
						try {
							return (bt = e), t();
						} finally {
							bt = n;
						}
					}),
					(ke = function (e, t, n) {
						switch (t) {
							case "input":
								if ((G(e, n), (t = n.name), "radio" === n.type && null != t)) {
									for (n = e; n.parentNode; ) n = n.parentNode;
									for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
										var r = n[t];
										if (r !== e && r.form === e.form) {
											var l = wl(r);
											if (!l) throw Error(a(90));
											Q(r), G(r, l);
										}
									}
								}
								break;
							case "textarea":
								ae(e, n);
								break;
							case "select":
								null != (t = n.value) && ne(e, !!n.multiple, t, !1);
						}
					}),
					(Ne = cs),
					(Le = fs);
				var tc = { usingClientEntryPoint: !1, Events: [bl, xl, wl, je, Pe, cs] },
					nc = { findFiberByHostInstance: yl, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" },
					rc = {
						bundleType: nc.bundleType,
						version: nc.version,
						rendererPackageName: nc.rendererPackageName,
						rendererConfig: nc.rendererConfig,
						overrideHookState: null,
						overrideHookStateDeletePath: null,
						overrideHookStateRenamePath: null,
						overrideProps: null,
						overridePropsDeletePath: null,
						overridePropsRenamePath: null,
						setErrorHandler: null,
						setSuspenseHandler: null,
						scheduleUpdate: null,
						currentDispatcherRef: x.ReactCurrentDispatcher,
						findHostInstanceByFiber: function (e) {
							return null === (e = We(e)) ? null : e.stateNode;
						},
						findFiberByHostInstance:
							nc.findFiberByHostInstance ||
							function () {
								return null;
							},
						findHostInstancesForRefresh: null,
						scheduleRefresh: null,
						scheduleRoot: null,
						setRefreshHandler: null,
						getCurrentFiber: null,
						reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
					};
				if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
					var lc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
					if (!lc.isDisabled && lc.supportsFiber)
						try {
							(lt = lc.inject(rc)), (at = lc);
						} catch (ce) {}
				}
				(t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
					(t.createPortal = function (e, t) {
						var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
						if (!Zs(t)) throw Error(a(200));
						return (function (e, t, n) {
							var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
							return { $$typeof: k, key: null == r ? null : "" + r, children: e, containerInfo: t, implementation: n };
						})(e, t, null, n);
					}),
					(t.createRoot = function (e, t) {
						if (!Zs(e)) throw Error(a(299));
						var n = !1,
							r = "",
							l = Ks;
						return null !== t && void 0 !== t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onRecoverableError && (l = t.onRecoverableError)), (t = Us(e, 1, !1, null, 0, n, 0, r, l)), (e[hl] = t.current), Hr(8 === e.nodeType ? e.parentNode : e), new Ys(t);
					}),
					(t.findDOMNode = function (e) {
						if (null == e) return null;
						if (1 === e.nodeType) return e;
						var t = e._reactInternals;
						if (void 0 === t) {
							if ("function" === typeof e.render) throw Error(a(188));
							throw ((e = Object.keys(e).join(",")), Error(a(268, e)));
						}
						return (e = null === (e = We(t)) ? null : e.stateNode);
					}),
					(t.flushSync = function (e) {
						return fs(e);
					}),
					(t.hydrate = function (e, t, n) {
						if (!Gs(t)) throw Error(a(200));
						return ec(null, e, t, !0, n);
					}),
					(t.hydrateRoot = function (e, t, n) {
						if (!Zs(e)) throw Error(a(405));
						var r = (null != n && n.hydratedSources) || null,
							l = !1,
							i = "",
							o = Ks;
						if ((null !== n && void 0 !== n && (!0 === n.unstable_strictMode && (l = !0), void 0 !== n.identifierPrefix && (i = n.identifierPrefix), void 0 !== n.onRecoverableError && (o = n.onRecoverableError)), (t = Vs(t, null, e, 1, null != n ? n : null, l, 0, i, o)), (e[hl] = t.current), Hr(e), r)) for (e = 0; e < r.length; e++) (l = (l = (n = r[e])._getVersion)(n._source)), null == t.mutableSourceEagerHydrationData ? (t.mutableSourceEagerHydrationData = [n, l]) : t.mutableSourceEagerHydrationData.push(n, l);
						return new Xs(t);
					}),
					(t.render = function (e, t, n) {
						if (!Gs(t)) throw Error(a(200));
						return ec(null, e, t, !1, n);
					}),
					(t.unmountComponentAtNode = function (e) {
						if (!Gs(e)) throw Error(a(40));
						return (
							!!e._reactRootContainer &&
							(fs(function () {
								ec(null, null, e, !1, function () {
									(e._reactRootContainer = null), (e[hl] = null);
								});
							}),
							!0)
						);
					}),
					(t.unstable_batchedUpdates = cs),
					(t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
						if (!Gs(n)) throw Error(a(200));
						if (null == e || void 0 === e._reactInternals) throw Error(a(38));
						return ec(e, t, n, !1, r);
					}),
					(t.version = "18.2.0-next-9e3b772b8-20220608");
			},
			250: function (e, t, n) {
				"use strict";
				var r = n(164);
				(t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
			},
			164: function (e, t, n) {
				"use strict";
				!(function e() {
					if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)
						try {
							__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
						} catch (t) {
							console.error(t);
						}
				})(),
					(e.exports = n(463));
			},
			574: function (e, t) {
				"use strict";
				var n,
					r = Symbol.for("react.element"),
					l = Symbol.for("react.portal"),
					a = Symbol.for("react.fragment"),
					i = Symbol.for("react.strict_mode"),
					o = Symbol.for("react.profiler"),
					u = Symbol.for("react.provider"),
					s = Symbol.for("react.context"),
					c = Symbol.for("react.server_context"),
					f = Symbol.for("react.forward_ref"),
					d = Symbol.for("react.suspense"),
					p = Symbol.for("react.suspense_list"),
					h = Symbol.for("react.memo"),
					m = Symbol.for("react.lazy"),
					g = Symbol.for("react.offscreen");
				function v(e) {
					if ("object" === typeof e && null !== e) {
						var t = e.$$typeof;
						switch (t) {
							case r:
								switch ((e = e.type)) {
									case a:
									case o:
									case i:
									case d:
									case p:
										return e;
									default:
										switch ((e = e && e.$$typeof)) {
											case c:
											case s:
											case f:
											case m:
											case h:
											case u:
												return e;
											default:
												return t;
										}
								}
							case l:
								return t;
						}
					}
				}
				(n = Symbol.for("react.module.reference")),
					(t.ContextConsumer = s),
					(t.ContextProvider = u),
					(t.Element = r),
					(t.ForwardRef = f),
					(t.Fragment = a),
					(t.Lazy = m),
					(t.Memo = h),
					(t.Portal = l),
					(t.Profiler = o),
					(t.StrictMode = i),
					(t.Suspense = d),
					(t.SuspenseList = p),
					(t.isAsyncMode = function () {
						return !1;
					}),
					(t.isConcurrentMode = function () {
						return !1;
					}),
					(t.isContextConsumer = function (e) {
						return v(e) === s;
					}),
					(t.isContextProvider = function (e) {
						return v(e) === u;
					}),
					(t.isElement = function (e) {
						return "object" === typeof e && null !== e && e.$$typeof === r;
					}),
					(t.isForwardRef = function (e) {
						return v(e) === f;
					}),
					(t.isFragment = function (e) {
						return v(e) === a;
					}),
					(t.isLazy = function (e) {
						return v(e) === m;
					}),
					(t.isMemo = function (e) {
						return v(e) === h;
					}),
					(t.isPortal = function (e) {
						return v(e) === l;
					}),
					(t.isProfiler = function (e) {
						return v(e) === o;
					}),
					(t.isStrictMode = function (e) {
						return v(e) === i;
					}),
					(t.isSuspense = function (e) {
						return v(e) === d;
					}),
					(t.isSuspenseList = function (e) {
						return v(e) === p;
					}),
					(t.isValidElementType = function (e) {
						return "string" === typeof e || "function" === typeof e || e === a || e === o || e === i || e === d || e === p || e === g || ("object" === typeof e && null !== e && (e.$$typeof === m || e.$$typeof === h || e.$$typeof === u || e.$$typeof === s || e.$$typeof === f || e.$$typeof === n || void 0 !== e.getModuleId));
					}),
					(t.typeOf = v);
			},
			599: function (e, t, n) {
				"use strict";
				e.exports = n(574);
			},
			374: function (e, t, n) {
				"use strict";
				var r = n(791),
					l = Symbol.for("react.element"),
					a = Symbol.for("react.fragment"),
					i = Object.prototype.hasOwnProperty,
					o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
					u = { key: !0, ref: !0, __self: !0, __source: !0 };
				function s(e, t, n) {
					var r,
						a = {},
						s = null,
						c = null;
					for (r in (void 0 !== n && (s = "" + n), void 0 !== t.key && (s = "" + t.key), void 0 !== t.ref && (c = t.ref), t)) i.call(t, r) && !u.hasOwnProperty(r) && (a[r] = t[r]);
					if (e && e.defaultProps) for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r]);
					return { $$typeof: l, type: e, key: s, ref: c, props: a, _owner: o.current };
				}
				(t.Fragment = a), (t.jsx = s), (t.jsxs = s);
			},
			117: function (e, t) {
				"use strict";
				var n = Symbol.for("react.element"),
					r = Symbol.for("react.portal"),
					l = Symbol.for("react.fragment"),
					a = Symbol.for("react.strict_mode"),
					i = Symbol.for("react.profiler"),
					o = Symbol.for("react.provider"),
					u = Symbol.for("react.context"),
					s = Symbol.for("react.forward_ref"),
					c = Symbol.for("react.suspense"),
					f = Symbol.for("react.memo"),
					d = Symbol.for("react.lazy"),
					p = Symbol.iterator;
				var h = {
						isMounted: function () {
							return !1;
						},
						enqueueForceUpdate: function () {},
						enqueueReplaceState: function () {},
						enqueueSetState: function () {},
					},
					m = Object.assign,
					g = {};
				function v(e, t, n) {
					(this.props = e), (this.context = t), (this.refs = g), (this.updater = n || h);
				}
				function y() {}
				function b(e, t, n) {
					(this.props = e), (this.context = t), (this.refs = g), (this.updater = n || h);
				}
				(v.prototype.isReactComponent = {}),
					(v.prototype.setState = function (e, t) {
						if ("object" !== typeof e && "function" !== typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
						this.updater.enqueueSetState(this, e, t, "setState");
					}),
					(v.prototype.forceUpdate = function (e) {
						this.updater.enqueueForceUpdate(this, e, "forceUpdate");
					}),
					(y.prototype = v.prototype);
				var x = (b.prototype = new y());
				(x.constructor = b), m(x, v.prototype), (x.isPureReactComponent = !0);
				var w = Array.isArray,
					k = Object.prototype.hasOwnProperty,
					S = { current: null },
					C = { key: !0, ref: !0, __self: !0, __source: !0 };
				function E(e, t, r) {
					var l,
						a = {},
						i = null,
						o = null;
					if (null != t) for (l in (void 0 !== t.ref && (o = t.ref), void 0 !== t.key && (i = "" + t.key), t)) k.call(t, l) && !C.hasOwnProperty(l) && (a[l] = t[l]);
					var u = arguments.length - 2;
					if (1 === u) a.children = r;
					else if (1 < u) {
						for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
						a.children = s;
					}
					if (e && e.defaultProps) for (l in (u = e.defaultProps)) void 0 === a[l] && (a[l] = u[l]);
					return { $$typeof: n, type: e, key: i, ref: o, props: a, _owner: S.current };
				}
				function j(e) {
					return "object" === typeof e && null !== e && e.$$typeof === n;
				}
				var P = /\/+/g;
				function N(e, t) {
					return "object" === typeof e && null !== e && null != e.key
						? (function (e) {
								var t = { "=": "=0", ":": "=2" };
								return (
									"$" +
									e.replace(/[=:]/g, function (e) {
										return t[e];
									})
								);
						  })("" + e.key)
						: t.toString(36);
				}
				function L(e, t, l, a, i) {
					var o = typeof e;
					("undefined" !== o && "boolean" !== o) || (e = null);
					var u = !1;
					if (null === e) u = !0;
					else
						switch (o) {
							case "string":
							case "number":
								u = !0;
								break;
							case "object":
								switch (e.$$typeof) {
									case n:
									case r:
										u = !0;
								}
						}
					if (u)
						return (
							(i = i((u = e))),
							(e = "" === a ? "." + N(u, 0) : a),
							w(i)
								? ((l = ""),
								  null != e && (l = e.replace(P, "$&/") + "/"),
								  L(i, t, l, "", function (e) {
										return e;
								  }))
								: null != i &&
								  (j(i) &&
										(i = (function (e, t) {
											return { $$typeof: n, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
										})(i, l + (!i.key || (u && u.key === i.key) ? "" : ("" + i.key).replace(P, "$&/") + "/") + e)),
								  t.push(i)),
							1
						);
					if (((u = 0), (a = "" === a ? "." : a + ":"), w(e)))
						for (var s = 0; s < e.length; s++) {
							var c = a + N((o = e[s]), s);
							u += L(o, t, l, c, i);
						}
					else if (
						((c = (function (e) {
							return null === e || "object" !== typeof e ? null : "function" === typeof (e = (p && e[p]) || e["@@iterator"]) ? e : null;
						})(e)),
						"function" === typeof c)
					)
						for (e = c.call(e), s = 0; !(o = e.next()).done; ) u += L((o = o.value), t, l, (c = a + N(o, s++)), i);
					else if ("object" === o) throw ((t = String(e)), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead."));
					return u;
				}
				function T(e, t, n) {
					if (null == e) return e;
					var r = [],
						l = 0;
					return (
						L(e, r, "", "", function (e) {
							return t.call(n, e, l++);
						}),
						r
					);
				}
				function F(e) {
					if (-1 === e._status) {
						var t = e._result;
						(t = t()).then(
							function (t) {
								(0 !== e._status && -1 !== e._status) || ((e._status = 1), (e._result = t));
							},
							function (t) {
								(0 !== e._status && -1 !== e._status) || ((e._status = 2), (e._result = t));
							}
						),
							-1 === e._status && ((e._status = 0), (e._result = t));
					}
					if (1 === e._status) return e._result.default;
					throw e._result;
				}
				var _ = { current: null },
					O = { transition: null },
					D = { ReactCurrentDispatcher: _, ReactCurrentBatchConfig: O, ReactCurrentOwner: S };
				(t.Children = {
					map: T,
					forEach: function (e, t, n) {
						T(
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
							T(e, function () {
								t++;
							}),
							t
						);
					},
					toArray: function (e) {
						return (
							T(e, function (e) {
								return e;
							}) || []
						);
					},
					only: function (e) {
						if (!j(e)) throw Error("React.Children.only expected to receive a single React element child.");
						return e;
					},
				}),
					(t.Component = v),
					(t.Fragment = l),
					(t.Profiler = i),
					(t.PureComponent = b),
					(t.StrictMode = a),
					(t.Suspense = c),
					(t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = D),
					(t.cloneElement = function (e, t, r) {
						if (null === e || void 0 === e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
						var l = m({}, e.props),
							a = e.key,
							i = e.ref,
							o = e._owner;
						if (null != t) {
							if ((void 0 !== t.ref && ((i = t.ref), (o = S.current)), void 0 !== t.key && (a = "" + t.key), e.type && e.type.defaultProps)) var u = e.type.defaultProps;
							for (s in t) k.call(t, s) && !C.hasOwnProperty(s) && (l[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s]);
						}
						var s = arguments.length - 2;
						if (1 === s) l.children = r;
						else if (1 < s) {
							u = Array(s);
							for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
							l.children = u;
						}
						return { $$typeof: n, type: e.type, key: a, ref: i, props: l, _owner: o };
					}),
					(t.createContext = function (e) {
						return ((e = { $$typeof: u, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }).Provider = { $$typeof: o, _context: e }), (e.Consumer = e);
					}),
					(t.createElement = E),
					(t.createFactory = function (e) {
						var t = E.bind(null, e);
						return (t.type = e), t;
					}),
					(t.createRef = function () {
						return { current: null };
					}),
					(t.forwardRef = function (e) {
						return { $$typeof: s, render: e };
					}),
					(t.isValidElement = j),
					(t.lazy = function (e) {
						return { $$typeof: d, _payload: { _status: -1, _result: e }, _init: F };
					}),
					(t.memo = function (e, t) {
						return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
					}),
					(t.startTransition = function (e) {
						var t = O.transition;
						O.transition = {};
						try {
							e();
						} finally {
							O.transition = t;
						}
					}),
					(t.unstable_act = function () {
						throw Error("act(...) is not supported in production builds of React.");
					}),
					(t.useCallback = function (e, t) {
						return _.current.useCallback(e, t);
					}),
					(t.useContext = function (e) {
						return _.current.useContext(e);
					}),
					(t.useDebugValue = function () {}),
					(t.useDeferredValue = function (e) {
						return _.current.useDeferredValue(e);
					}),
					(t.useEffect = function (e, t) {
						return _.current.useEffect(e, t);
					}),
					(t.useId = function () {
						return _.current.useId();
					}),
					(t.useImperativeHandle = function (e, t, n) {
						return _.current.useImperativeHandle(e, t, n);
					}),
					(t.useInsertionEffect = function (e, t) {
						return _.current.useInsertionEffect(e, t);
					}),
					(t.useLayoutEffect = function (e, t) {
						return _.current.useLayoutEffect(e, t);
					}),
					(t.useMemo = function (e, t) {
						return _.current.useMemo(e, t);
					}),
					(t.useReducer = function (e, t, n) {
						return _.current.useReducer(e, t, n);
					}),
					(t.useRef = function (e) {
						return _.current.useRef(e);
					}),
					(t.useState = function (e) {
						return _.current.useState(e);
					}),
					(t.useSyncExternalStore = function (e, t, n) {
						return _.current.useSyncExternalStore(e, t, n);
					}),
					(t.useTransition = function () {
						return _.current.useTransition();
					}),
					(t.version = "18.2.0");
			},
			791: function (e, t, n) {
				"use strict";
				e.exports = n(117);
			},
			184: function (e, t, n) {
				"use strict";
				e.exports = n(374);
			},
			813: function (e, t) {
				"use strict";
				function n(e, t) {
					var n = e.length;
					e.push(t);
					e: for (; 0 < n; ) {
						var r = (n - 1) >>> 1,
							l = e[r];
						if (!(0 < a(l, t))) break e;
						(e[r] = t), (e[n] = l), (n = r);
					}
				}
				function r(e) {
					return 0 === e.length ? null : e[0];
				}
				function l(e) {
					if (0 === e.length) return null;
					var t = e[0],
						n = e.pop();
					if (n !== t) {
						e[0] = n;
						e: for (var r = 0, l = e.length, i = l >>> 1; r < i; ) {
							var o = 2 * (r + 1) - 1,
								u = e[o],
								s = o + 1,
								c = e[s];
							if (0 > a(u, n)) s < l && 0 > a(c, u) ? ((e[r] = c), (e[s] = n), (r = s)) : ((e[r] = u), (e[o] = n), (r = o));
							else {
								if (!(s < l && 0 > a(c, n))) break e;
								(e[r] = c), (e[s] = n), (r = s);
							}
						}
					}
					return t;
				}
				function a(e, t) {
					var n = e.sortIndex - t.sortIndex;
					return 0 !== n ? n : e.id - t.id;
				}
				if ("object" === typeof performance && "function" === typeof performance.now) {
					var i = performance;
					t.unstable_now = function () {
						return i.now();
					};
				} else {
					var o = Date,
						u = o.now();
					t.unstable_now = function () {
						return o.now() - u;
					};
				}
				var s = [],
					c = [],
					f = 1,
					d = null,
					p = 3,
					h = !1,
					m = !1,
					g = !1,
					v = "function" === typeof setTimeout ? setTimeout : null,
					y = "function" === typeof clearTimeout ? clearTimeout : null,
					b = "undefined" !== typeof setImmediate ? setImmediate : null;
				function x(e) {
					for (var t = r(c); null !== t; ) {
						if (null === t.callback) l(c);
						else {
							if (!(t.startTime <= e)) break;
							l(c), (t.sortIndex = t.expirationTime), n(s, t);
						}
						t = r(c);
					}
				}
				function w(e) {
					if (((g = !1), x(e), !m))
						if (null !== r(s)) (m = !0), O(k);
						else {
							var t = r(c);
							null !== t && D(w, t.startTime - e);
						}
				}
				function k(e, n) {
					(m = !1), g && ((g = !1), y(j), (j = -1)), (h = !0);
					var a = p;
					try {
						for (x(n), d = r(s); null !== d && (!(d.expirationTime > n) || (e && !L())); ) {
							var i = d.callback;
							if ("function" === typeof i) {
								(d.callback = null), (p = d.priorityLevel);
								var o = i(d.expirationTime <= n);
								(n = t.unstable_now()), "function" === typeof o ? (d.callback = o) : d === r(s) && l(s), x(n);
							} else l(s);
							d = r(s);
						}
						if (null !== d) var u = !0;
						else {
							var f = r(c);
							null !== f && D(w, f.startTime - n), (u = !1);
						}
						return u;
					} finally {
						(d = null), (p = a), (h = !1);
					}
				}
				"undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
				var S,
					C = !1,
					E = null,
					j = -1,
					P = 5,
					N = -1;
				function L() {
					return !(t.unstable_now() - N < P);
				}
				function T() {
					if (null !== E) {
						var e = t.unstable_now();
						N = e;
						var n = !0;
						try {
							n = E(!0, e);
						} finally {
							n ? S() : ((C = !1), (E = null));
						}
					} else C = !1;
				}
				if ("function" === typeof b)
					S = function () {
						b(T);
					};
				else if ("undefined" !== typeof MessageChannel) {
					var F = new MessageChannel(),
						_ = F.port2;
					(F.port1.onmessage = T),
						(S = function () {
							_.postMessage(null);
						});
				} else
					S = function () {
						v(T, 0);
					};
				function O(e) {
					(E = e), C || ((C = !0), S());
				}
				function D(e, n) {
					j = v(function () {
						e(t.unstable_now());
					}, n);
				}
				(t.unstable_IdlePriority = 5),
					(t.unstable_ImmediatePriority = 1),
					(t.unstable_LowPriority = 4),
					(t.unstable_NormalPriority = 3),
					(t.unstable_Profiling = null),
					(t.unstable_UserBlockingPriority = 2),
					(t.unstable_cancelCallback = function (e) {
						e.callback = null;
					}),
					(t.unstable_continueExecution = function () {
						m || h || ((m = !0), O(k));
					}),
					(t.unstable_forceFrameRate = function (e) {
						0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : (P = 0 < e ? Math.floor(1e3 / e) : 5);
					}),
					(t.unstable_getCurrentPriorityLevel = function () {
						return p;
					}),
					(t.unstable_getFirstCallbackNode = function () {
						return r(s);
					}),
					(t.unstable_next = function (e) {
						switch (p) {
							case 1:
							case 2:
							case 3:
								var t = 3;
								break;
							default:
								t = p;
						}
						var n = p;
						p = t;
						try {
							return e();
						} finally {
							p = n;
						}
					}),
					(t.unstable_pauseExecution = function () {}),
					(t.unstable_requestPaint = function () {}),
					(t.unstable_runWithPriority = function (e, t) {
						switch (e) {
							case 1:
							case 2:
							case 3:
							case 4:
							case 5:
								break;
							default:
								e = 3;
						}
						var n = p;
						p = e;
						try {
							return t();
						} finally {
							p = n;
						}
					}),
					(t.unstable_scheduleCallback = function (e, l, a) {
						var i = t.unstable_now();
						switch (("object" === typeof a && null !== a ? (a = "number" === typeof (a = a.delay) && 0 < a ? i + a : i) : (a = i), e)) {
							case 1:
								var o = -1;
								break;
							case 2:
								o = 250;
								break;
							case 5:
								o = 1073741823;
								break;
							case 4:
								o = 1e4;
								break;
							default:
								o = 5e3;
						}
						return (e = { id: f++, callback: l, priorityLevel: e, startTime: a, expirationTime: (o = a + o), sortIndex: -1 }), a > i ? ((e.sortIndex = a), n(c, e), null === r(s) && e === r(c) && (g ? (y(j), (j = -1)) : (g = !0), D(w, a - i))) : ((e.sortIndex = o), n(s, e), m || h || ((m = !0), O(k))), e;
					}),
					(t.unstable_shouldYield = L),
					(t.unstable_wrapCallback = function (e) {
						var t = p;
						return function () {
							var n = p;
							p = t;
							try {
								return e.apply(this, arguments);
							} finally {
								p = n;
							}
						};
					});
			},
			296: function (e, t, n) {
				"use strict";
				e.exports = n(813);
			},
			426: function (e, t, n) {
				var r = n(65);
				function l(e, t) {
					var n,
						l = null;
					if (!e || "string" !== typeof e) return l;
					for (var a, i, o = r(e), u = "function" === typeof t, s = 0, c = o.length; s < c; s++) (a = (n = o[s]).property), (i = n.value), u ? t(a, i, n) : i && (l || (l = {}), (l[a] = i));
					return l;
				}
				(e.exports = l), (e.exports.default = l);
			},
		},
		t = {};
	function n(r) {
		var l = t[r];
		if (void 0 !== l) return l.exports;
		var a = (t[r] = { exports: {} });
		return e[r](a, a.exports, n), a.exports;
	}
	(n.m = e),
		(n.d = function (e, t) {
			for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
		}),
		(n.f = {}),
		(n.e = function (e) {
			return Promise.all(
				Object.keys(n.f).reduce(function (t, r) {
					return n.f[r](e, t), t;
				}, [])
			);
		}),
		(n.u = function (e) {
			return "static/js/" + e + ".940ea428.chunk.js";
		}),
		(n.miniCssF = function (e) {}),
		(n.o = function (e, t) {
			return Object.prototype.hasOwnProperty.call(e, t);
		}),
		(function () {
			var e = {},
				t = "pdfai:";
			n.l = function (r, l, a, i) {
				if (e[r]) e[r].push(l);
				else {
					var o, u;
					if (void 0 !== a)
						for (var s = document.getElementsByTagName("script"), c = 0; c < s.length; c++) {
							var f = s[c];
							if (f.getAttribute("src") == r || f.getAttribute("data-webpack") == t + a) {
								o = f;
								break;
							}
						}
					o || ((u = !0), ((o = document.createElement("script")).charset = "utf-8"), (o.timeout = 120), n.nc && o.setAttribute("nonce", n.nc), o.setAttribute("data-webpack", t + a), (o.src = r)), (e[r] = [l]);
					var d = function (t, n) {
							(o.onerror = o.onload = null), clearTimeout(p);
							var l = e[r];
							if (
								(delete e[r],
								o.parentNode && o.parentNode.removeChild(o),
								l &&
									l.forEach(function (e) {
										return e(n);
									}),
								t)
							)
								return t(n);
						},
						p = setTimeout(d.bind(null, void 0, { type: "timeout", target: o }), 12e4);
					(o.onerror = d.bind(null, o.onerror)), (o.onload = d.bind(null, o.onload)), u && document.head.appendChild(o);
				}
			};
		})(),
		(n.r = function (e) {
			"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
		}),
		(n.p = "/"),
		(function () {
			var e = { 179: 0 };
			n.f.j = function (t, r) {
				var l = n.o(e, t) ? e[t] : void 0;
				if (0 !== l)
					if (l) r.push(l[2]);
					else {
						var a = new Promise(function (n, r) {
							l = e[t] = [n, r];
						});
						r.push((l[2] = a));
						var i = n.p + n.u(t),
							o = new Error();
						n.l(
							i,
							function (r) {
								if (n.o(e, t) && (0 !== (l = e[t]) && (e[t] = void 0), l)) {
									var a = r && ("load" === r.type ? "missing" : r.type),
										i = r && r.target && r.target.src;
									(o.message = "Loading chunk " + t + " failed.\n(" + a + ": " + i + ")"), (o.name = "ChunkLoadError"), (o.type = a), (o.request = i), l[1](o);
								}
							},
							"chunk-" + t,
							t
						);
					}
			};
			var t = function (t, r) {
					var l,
						a,
						i = r[0],
						o = r[1],
						u = r[2],
						s = 0;
					if (
						i.some(function (t) {
							return 0 !== e[t];
						})
					) {
						for (l in o) n.o(o, l) && (n.m[l] = o[l]);
						if (u) u(n);
					}
					for (t && t(r); s < i.length; s++) (a = i[s]), n.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
				},
				r = (self.webpackChunkpdfai = self.webpackChunkpdfai || []);
			r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
		})(),
		(function () {
			"use strict";
			var e = {};
			n.r(e),
				n.d(e, {
					attentionMarkers: function () {
						return tr;
					},
					contentInitial: function () {
						return Yn;
					},
					disable: function () {
						return nr;
					},
					document: function () {
						return Kn;
					},
					flow: function () {
						return Zn;
					},
					flowInitial: function () {
						return Xn;
					},
					insideSpan: function () {
						return er;
					},
					string: function () {
						return Gn;
					},
					text: function () {
						return Jn;
					},
				});
			var t = {};
			n.r(t),
				n.d(t, {
					boolean: function () {
						return Zr;
					},
					booleanish: function () {
						return Gr;
					},
					commaOrSpaceSeparated: function () {
						return rl;
					},
					commaSeparated: function () {
						return nl;
					},
					number: function () {
						return el;
					},
					overloadedBoolean: function () {
						return Jr;
					},
					spaceSeparated: function () {
						return tl;
					},
				});
			var r,
				l = n(791),
				a = n(250);
			function i(e) {
				if (Array.isArray(e)) return e;
			}
			function o(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r;
			}
			function u(e, t) {
				if (e) {
					if ("string" === typeof e) return o(e, t);
					var n = Object.prototype.toString.call(e).slice(8, -1);
					return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0;
				}
			}
			function s() {
				throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
			}
			function c(e, t) {
				return (
					i(e) ||
					(function (e, t) {
						var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
						if (null != n) {
							var r,
								l,
								a,
								i,
								o = [],
								u = !0,
								s = !1;
							try {
								if (((a = (n = n.call(e)).next), 0 === t)) {
									if (Object(n) !== n) return;
									u = !1;
								} else for (; !(u = (r = a.call(n)).done) && (o.push(r.value), o.length !== t); u = !0);
							} catch (c) {
								(s = !0), (l = c);
							} finally {
								try {
									if (!u && null != n.return && ((i = n.return()), Object(i) !== i)) return;
								} finally {
									if (s) throw l;
								}
							}
							return o;
						}
					})(e, t) ||
					u(e, t) ||
					s()
				);
			}
			function f(e) {
				if (("undefined" !== typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
			}
			function d(e) {
				return (
					(function (e) {
						if (Array.isArray(e)) return o(e);
					})(e) ||
					f(e) ||
					u(e) ||
					(function () {
						throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
					})()
				);
			}
			function p(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
			}
			function h(e) {
				return (
					(h =
						"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
							? function (e) {
									return typeof e;
							  }
							: function (e) {
									return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
							  }),
					h(e)
				);
			}
			function m(e) {
				var t = (function (e, t) {
					if ("object" !== h(e) || null === e) return e;
					var n = e[Symbol.toPrimitive];
					if (void 0 !== n) {
						var r = n.call(e, t || "default");
						if ("object" !== h(r)) return r;
						throw new TypeError("@@toPrimitive must return a primitive value.");
					}
					return ("string" === t ? String : Number)(e);
				})(e, "string");
				return "symbol" === h(t) ? t : String(t);
			}
			function g(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, m(r.key), r);
				}
			}
			function v(e, t, n) {
				return t && g(e.prototype, t), n && g(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
			}
			function y(e, t) {
				return (
					(y = Object.setPrototypeOf
						? Object.setPrototypeOf.bind()
						: function (e, t) {
								return (e.__proto__ = t), e;
						  }),
					y(e, t)
				);
			}
			function b(e, t) {
				if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
				(e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), Object.defineProperty(e, "prototype", { writable: !1 }), t && y(e, t);
			}
			function x(e) {
				return (
					(x = Object.setPrototypeOf
						? Object.getPrototypeOf.bind()
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					x(e)
				);
			}
			function w() {
				if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" === typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
				} catch (e) {
					return !1;
				}
			}
			function k(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e;
			}
			function S(e) {
				var t = w();
				return function () {
					var n,
						r = x(e);
					if (t) {
						var l = x(this).constructor;
						n = Reflect.construct(r, arguments, l);
					} else n = r.apply(this, arguments);
					return (function (e, t) {
						if (t && ("object" === h(t) || "function" === typeof t)) return t;
						if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
						return k(e);
					})(this, n);
				};
			}
			function C(e, t, n) {
				return (
					(C = w()
						? Reflect.construct.bind()
						: function (e, t, n) {
								var r = [null];
								r.push.apply(r, t);
								var l = new (Function.bind.apply(e, r))();
								return n && y(l, n.prototype), l;
						  }),
					C.apply(null, arguments)
				);
			}
			function E(e) {
				var t = "function" === typeof Map ? new Map() : void 0;
				return (
					(E = function (e) {
						if (null === e || ((n = e), -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
						var n;
						if ("function" !== typeof e) throw new TypeError("Super expression must either be null or a function");
						if ("undefined" !== typeof t) {
							if (t.has(e)) return t.get(e);
							t.set(e, r);
						}
						function r() {
							return C(e, arguments, x(this).constructor);
						}
						return (r.prototype = Object.create(e.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } })), y(r, e);
					}),
					E(e)
				);
			}
			function j(e) {
				return i(e) || f(e) || u(e) || s();
			}
			function P() {
				return (
					(P = Object.assign
						? Object.assign.bind()
						: function (e) {
								for (var t = 1; t < arguments.length; t++) {
									var n = arguments[t];
									for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
								}
								return e;
						  }),
					P.apply(this, arguments)
				);
			}
			!(function (e) {
				(e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
			})(r || (r = {}));
			var N,
				L = "popstate";
			function T(e, t) {
				if (!1 === e || null === e || "undefined" === typeof e) throw new Error(t);
			}
			function F(e, t) {
				if (!e) {
					"undefined" !== typeof console && console.warn(t);
					try {
						throw new Error(t);
					} catch (n) {}
				}
			}
			function _(e, t) {
				return { usr: e.state, key: e.key, idx: t };
			}
			function O(e, t, n, r) {
				return void 0 === n && (n = null), P({ pathname: "string" === typeof e ? e : e.pathname, search: "", hash: "" }, "string" === typeof t ? z(t) : t, { state: n, key: (t && t.key) || r || Math.random().toString(36).substr(2, 8) });
			}
			function D(e) {
				var t = e.pathname,
					n = void 0 === t ? "/" : t,
					r = e.search,
					l = void 0 === r ? "" : r,
					a = e.hash,
					i = void 0 === a ? "" : a;
				return l && "?" !== l && (n += "?" === l.charAt(0) ? l : "?" + l), i && "#" !== i && (n += "#" === i.charAt(0) ? i : "#" + i), n;
			}
			function z(e) {
				var t = {};
				if (e) {
					var n = e.indexOf("#");
					n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
					var r = e.indexOf("?");
					r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
				}
				return t;
			}
			function A(e, t, n, l) {
				void 0 === l && (l = {});
				var a = l,
					i = a.window,
					o = void 0 === i ? document.defaultView : i,
					u = a.v5Compat,
					s = void 0 !== u && u,
					c = o.history,
					f = r.Pop,
					d = null,
					p = h();
				function h() {
					return (c.state || { idx: null }).idx;
				}
				function m() {
					f = r.Pop;
					var e = h(),
						t = null == e ? null : e - p;
					(p = e), d && d({ action: f, location: v.location, delta: t });
				}
				function g(e) {
					var t = "null" !== o.location.origin ? o.location.origin : o.location.href,
						n = "string" === typeof e ? e : D(e);
					return T(t, "No window.location.(origin|href) available to create URL for href: " + n), new URL(n, t);
				}
				null == p && ((p = 0), c.replaceState(P({}, c.state, { idx: p }), ""));
				var v = {
					get action() {
						return f;
					},
					get location() {
						return e(o, c);
					},
					listen: function (e) {
						if (d) throw new Error("A history only accepts one active listener");
						return (
							o.addEventListener(L, m),
							(d = e),
							function () {
								o.removeEventListener(L, m), (d = null);
							}
						);
					},
					createHref: function (e) {
						return t(o, e);
					},
					createURL: g,
					encodeLocation: function (e) {
						var t = g(e);
						return { pathname: t.pathname, search: t.search, hash: t.hash };
					},
					push: function (e, t) {
						f = r.Push;
						var l = O(v.location, e, t);
						n && n(l, e);
						var a = _(l, (p = h() + 1)),
							i = v.createHref(l);
						try {
							c.pushState(a, "", i);
						} catch (u) {
							o.location.assign(i);
						}
						s && d && d({ action: f, location: v.location, delta: 1 });
					},
					replace: function (e, t) {
						f = r.Replace;
						var l = O(v.location, e, t);
						n && n(l, e);
						var a = _(l, (p = h())),
							i = v.createHref(l);
						c.replaceState(a, "", i), s && d && d({ action: f, location: v.location, delta: 0 });
					},
					go: function (e) {
						return c.go(e);
					},
				};
				return v;
			}
			!(function (e) {
				(e.data = "data"), (e.deferred = "deferred"), (e.redirect = "redirect"), (e.error = "error");
			})(N || (N = {}));
			new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
			function R(e, t, n) {
				void 0 === n && (n = "/");
				var r = Z(("string" === typeof t ? z(t) : t).pathname || "/", n);
				if (null == r) return null;
				var l = I(e);
				!(function (e) {
					e.sort(function (e, t) {
						return e.score !== t.score
							? t.score - e.score
							: (function (e, t) {
									var n =
										e.length === t.length &&
										e.slice(0, -1).every(function (e, n) {
											return e === t[n];
										});
									return n ? e[e.length - 1] - t[t.length - 1] : 0;
							  })(
									e.routesMeta.map(function (e) {
										return e.childrenIndex;
									}),
									t.routesMeta.map(function (e) {
										return e.childrenIndex;
									})
							  );
					});
				})(l);
				for (var a = null, i = 0; null == a && i < l.length; ++i) a = K(l[i], X(r));
				return a;
			}
			function I(e, t, n, r) {
				void 0 === t && (t = []), void 0 === n && (n = []), void 0 === r && (r = "");
				var l = function (e, l, a) {
					var i = { relativePath: void 0 === a ? e.path || "" : a, caseSensitive: !0 === e.caseSensitive, childrenIndex: l, route: e };
					i.relativePath.startsWith("/") && (T(i.relativePath.startsWith(r), 'Absolute route path "' + i.relativePath + '" nested under path "' + r + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'), (i.relativePath = i.relativePath.slice(r.length)));
					var o = G([r, i.relativePath]),
						u = n.concat(i);
					e.children && e.children.length > 0 && (T(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + o + '".'), I(e.children, t, u, o)), (null != e.path || e.index) && t.push({ path: o, score: Q(o, e.index), routesMeta: u });
				};
				return (
					e.forEach(function (e, t) {
						var n;
						if ("" !== e.path && null != (n = e.path) && n.includes("?")) {
							var r,
								a = (function (e, t) {
									var n = ("undefined" !== typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
									if (!n) {
										if (Array.isArray(e) || (n = u(e)) || (t && e && "number" === typeof e.length)) {
											n && (e = n);
											var r = 0,
												l = function () {};
											return {
												s: l,
												n: function () {
													return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
												},
												e: function (e) {
													throw e;
												},
												f: l,
											};
										}
										throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
									}
									var a,
										i = !0,
										o = !1;
									return {
										s: function () {
											n = n.call(e);
										},
										n: function () {
											var e = n.next();
											return (i = e.done), e;
										},
										e: function (e) {
											(o = !0), (a = e);
										},
										f: function () {
											try {
												i || null == n.return || n.return();
											} finally {
												if (o) throw a;
											}
										},
									};
								})(M(e.path));
							try {
								for (a.s(); !(r = a.n()).done; ) {
									var i = r.value;
									l(e, t, i);
								}
							} catch (o) {
								a.e(o);
							} finally {
								a.f();
							}
						} else l(e, t);
					}),
					t
				);
			}
			function M(e) {
				var t = e.split("/");
				if (0 === t.length) return [];
				var n = j(t),
					r = n[0],
					l = n.slice(1),
					a = r.endsWith("?"),
					i = r.replace(/\?$/, "");
				if (0 === l.length) return a ? [i, ""] : [i];
				var o = M(l.join("/")),
					u = [];
				return (
					u.push.apply(
						u,
						d(
							o.map(function (e) {
								return "" === e ? i : [i, e].join("/");
							})
						)
					),
					a && u.push.apply(u, d(o)),
					u.map(function (t) {
						return e.startsWith("/") && "" === t ? "/" : t;
					})
				);
			}
			var B = /^:\w+$/,
				U = 3,
				H = 2,
				V = 1,
				$ = 10,
				W = -2,
				q = function (e) {
					return "*" === e;
				};
			function Q(e, t) {
				var n = e.split("/"),
					r = n.length;
				return (
					n.some(q) && (r += W),
					t && (r += H),
					n
						.filter(function (e) {
							return !q(e);
						})
						.reduce(function (e, t) {
							return e + (B.test(t) ? U : "" === t ? V : $);
						}, r)
				);
			}
			function K(e, t) {
				for (var n = e.routesMeta, r = {}, l = "/", a = [], i = 0; i < n.length; ++i) {
					var o = n[i],
						u = i === n.length - 1,
						s = "/" === l ? t : t.slice(l.length) || "/",
						c = Y({ path: o.relativePath, caseSensitive: o.caseSensitive, end: u }, s);
					if (!c) return null;
					Object.assign(r, c.params);
					var f = o.route;
					a.push({ params: r, pathname: G([l, c.pathname]), pathnameBase: J(G([l, c.pathnameBase])), route: f }), "/" !== c.pathnameBase && (l = G([l, c.pathnameBase]));
				}
				return a;
			}
			function Y(e, t) {
				"string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
				var n = (function (e, t, n) {
						void 0 === t && (t = !1);
						void 0 === n && (n = !0);
						F("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were "' + e.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + e.replace(/\*$/, "/*") + '".');
						var r = [],
							l =
								"^" +
								e
									.replace(/\/*\*?$/, "")
									.replace(/^\/*/, "/")
									.replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
									.replace(/\/:(\w+)/g, function (e, t) {
										return r.push(t), "/([^\\/]+)";
									});
						e.endsWith("*") ? (r.push("*"), (l += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$")) : n ? (l += "\\/*$") : "" !== e && "/" !== e && (l += "(?:(?=\\/|$))");
						var a = new RegExp(l, t ? void 0 : "i");
						return [a, r];
					})(e.path, e.caseSensitive, e.end),
					r = c(n, 2),
					l = r[0],
					a = r[1],
					i = t.match(l);
				if (!i) return null;
				var o = i[0],
					u = o.replace(/(.)\/+$/, "$1"),
					s = i.slice(1),
					f = a.reduce(function (e, t, n) {
						if ("*" === t) {
							var r = s[n] || "";
							u = o.slice(0, o.length - r.length).replace(/(.)\/+$/, "$1");
						}
						return (
							(e[t] = (function (e, t) {
								try {
									return decodeURIComponent(e);
								} catch (n) {
									return F(!1, 'The value for the URL param "' + t + '" will not be decoded because the string "' + e + '" is a malformed URL segment. This is probably due to a bad percent encoding (' + n + ")."), e;
								}
							})(s[n] || "", t)),
							e
						);
					}, {});
				return { params: f, pathname: o, pathnameBase: u, pattern: e };
			}
			function X(e) {
				try {
					return decodeURI(e);
				} catch (t) {
					return F(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + t + ")."), e;
				}
			}
			function Z(e, t) {
				if ("/" === t) return e;
				if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
				var n = t.endsWith("/") ? t.length - 1 : t.length,
					r = e.charAt(n);
				return r && "/" !== r ? null : e.slice(n) || "/";
			}
			var G = function (e) {
					return e.join("/").replace(/\/\/+/g, "/");
				},
				J = function (e) {
					return e.replace(/\/+$/, "").replace(/^\/*/, "/");
				},
				ee = (function (e) {
					b(n, e);
					var t = S(n);
					function n() {
						return p(this, n), t.apply(this, arguments);
					}
					return v(n);
				})(E(Error));
			function te(e) {
				return null != e && "number" === typeof e.status && "string" === typeof e.statusText && "boolean" === typeof e.internal && "data" in e;
			}
			var ne = ["post", "put", "patch", "delete"],
				re = (new Set(ne), ["get"].concat(ne));
			new Set(re), new Set([301, 302, 303, 307, 308]), new Set([307, 308]), "undefined" !== typeof window && "undefined" !== typeof window.document && window.document.createElement;
			Symbol("deferred");
			function le() {
				return (
					(le = Object.assign
						? Object.assign.bind()
						: function (e) {
								for (var t = 1; t < arguments.length; t++) {
									var n = arguments[t];
									for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
								}
								return e;
						  }),
					le.apply(this, arguments)
				);
			}
			var ae = l.createContext(null);
			var ie = l.createContext(null);
			var oe = l.createContext(null);
			var ue = l.createContext(null);
			var se = l.createContext(null);
			var ce = l.createContext({ outlet: null, matches: [], isDataRoute: !1 });
			var fe = l.createContext(null);
			function de() {
				return null != l.useContext(se);
			}
			function pe() {
				return de() || T(!1), l.useContext(se).location;
			}
			function he(e, t, n) {
				de() || T(!1);
				var a,
					i = l.useContext(ue).navigator,
					o = l.useContext(ce).matches,
					u = o[o.length - 1],
					s = u ? u.params : {},
					c = (u && u.pathname, u ? u.pathnameBase : "/"),
					f = (u && u.route, pe());
				if (t) {
					var d,
						p = "string" === typeof t ? z(t) : t;
					"/" === c || (null == (d = p.pathname) ? void 0 : d.startsWith(c)) || T(!1), (a = p);
				} else a = f;
				var h = a.pathname || "/",
					m = R(e, { pathname: "/" === c ? h : h.slice(c.length) || "/" });
				var g = we(
					m &&
						m.map(function (e) {
							return Object.assign({}, e, { params: Object.assign({}, s, e.params), pathname: G([c, i.encodeLocation ? i.encodeLocation(e.pathname).pathname : e.pathname]), pathnameBase: "/" === e.pathnameBase ? c : G([c, i.encodeLocation ? i.encodeLocation(e.pathnameBase).pathname : e.pathnameBase]) });
						}),
					o,
					n
				);
				return t && g ? l.createElement(se.Provider, { value: { location: le({ pathname: "/", search: "", hash: "", state: null, key: "default" }, a), navigationType: r.Pop } }, g) : g;
			}
			function me() {
				var e = (function () {
						var e,
							t = l.useContext(fe),
							n = ke(ve.UseRouteError),
							r = Se(ve.UseRouteError);
						if (t) return t;
						return null == (e = n.errors) ? void 0 : e[r];
					})(),
					t = te(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
					n = e instanceof Error ? e.stack : null,
					r = "rgba(200,200,200, 0.5)",
					a = { padding: "0.5rem", backgroundColor: r };
				return l.createElement(l.Fragment, null, l.createElement("h2", null, "Unexpected Application Error!"), l.createElement("h3", { style: { fontStyle: "italic" } }, t), n ? l.createElement("pre", { style: a }, n) : null, null);
			}
			var ge,
				ve,
				ye = l.createElement(me, null),
				be = (function (e) {
					b(n, e);
					var t = S(n);
					function n(e) {
						var r;
						return p(this, n), ((r = t.call(this, e)).state = { location: e.location, revalidation: e.revalidation, error: e.error }), r;
					}
					return (
						v(
							n,
							[
								{
									key: "componentDidCatch",
									value: function (e, t) {
										console.error("React Router caught the following error during render", e, t);
									},
								},
								{
									key: "render",
									value: function () {
										return this.state.error ? l.createElement(ce.Provider, { value: this.props.routeContext }, l.createElement(fe.Provider, { value: this.state.error, children: this.props.component })) : this.props.children;
									},
								},
							],
							[
								{
									key: "getDerivedStateFromError",
									value: function (e) {
										return { error: e };
									},
								},
								{
									key: "getDerivedStateFromProps",
									value: function (e, t) {
										return t.location !== e.location || ("idle" !== t.revalidation && "idle" === e.revalidation) ? { error: e.error, location: e.location, revalidation: e.revalidation } : { error: e.error || t.error, location: t.location, revalidation: e.revalidation || t.revalidation };
									},
								},
							]
						),
						n
					);
				})(l.Component);
			function xe(e) {
				var t = e.routeContext,
					n = e.match,
					r = e.children,
					a = l.useContext(ae);
				return a && a.static && a.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = n.route.id), l.createElement(ce.Provider, { value: t }, r);
			}
			function we(e, t, n) {
				var r;
				if ((void 0 === t && (t = []), void 0 === n && (n = null), null == e)) {
					var a;
					if (null == (a = n) || !a.errors) return null;
					e = n.matches;
				}
				var i = e,
					o = null == (r = n) ? void 0 : r.errors;
				if (null != o) {
					var u = i.findIndex(function (e) {
						return e.route.id && (null == o ? void 0 : o[e.route.id]);
					});
					u >= 0 || T(!1), (i = i.slice(0, Math.min(i.length, u + 1)));
				}
				return i.reduceRight(function (e, r, a) {
					var u = r.route.id ? (null == o ? void 0 : o[r.route.id]) : null,
						s = null;
					n && (s = r.route.errorElement || ye);
					var c = t.concat(i.slice(0, a + 1)),
						f = function () {
							var t;
							return (t = u ? s : r.route.Component ? l.createElement(r.route.Component, null) : r.route.element ? r.route.element : e), l.createElement(xe, { match: r, routeContext: { outlet: e, matches: c, isDataRoute: null != n }, children: t });
						};
					return n && (r.route.ErrorBoundary || r.route.errorElement || 0 === a) ? l.createElement(be, { location: n.location, revalidation: n.revalidation, component: s, error: u, children: f(), routeContext: { outlet: null, matches: c, isDataRoute: !0 } }) : f();
				}, null);
			}
			function ke(e) {
				var t = l.useContext(ie);
				return t || T(!1), t;
			}
			function Se(e) {
				var t = (function (e) {
						var t = l.useContext(ce);
						return t || T(!1), t;
					})(),
					n = t.matches[t.matches.length - 1];
				return n.route.id || T(!1), n.route.id;
			}
			!(function (e) {
				(e.UseBlocker = "useBlocker"), (e.UseRevalidator = "useRevalidator"), (e.UseNavigateStable = "useNavigate");
			})(ge || (ge = {})),
				(function (e) {
					(e.UseBlocker = "useBlocker"), (e.UseLoaderData = "useLoaderData"), (e.UseActionData = "useActionData"), (e.UseRouteError = "useRouteError"), (e.UseNavigation = "useNavigation"), (e.UseRouteLoaderData = "useRouteLoaderData"), (e.UseMatches = "useMatches"), (e.UseRevalidator = "useRevalidator"), (e.UseNavigateStable = "useNavigate"), (e.UseRouteId = "useRouteId");
				})(ve || (ve = {}));
			var Ce;
			function Ee(e) {
				T(!1);
			}
			function je(e) {
				var t = e.basename,
					n = void 0 === t ? "/" : t,
					a = e.children,
					i = void 0 === a ? null : a,
					o = e.location,
					u = e.navigationType,
					s = void 0 === u ? r.Pop : u,
					c = e.navigator,
					f = e.static,
					d = void 0 !== f && f;
				de() && T(!1);
				var p = n.replace(/^\/*/, "/"),
					h = l.useMemo(
						function () {
							return { basename: p, navigator: c, static: d };
						},
						[p, c, d]
					);
				"string" === typeof o && (o = z(o));
				var m = o,
					g = m.pathname,
					v = void 0 === g ? "/" : g,
					y = m.search,
					b = void 0 === y ? "" : y,
					x = m.hash,
					w = void 0 === x ? "" : x,
					k = m.state,
					S = void 0 === k ? null : k,
					C = m.key,
					E = void 0 === C ? "default" : C,
					j = l.useMemo(
						function () {
							var e = Z(v, p);
							return null == e ? null : { location: { pathname: e, search: b, hash: w, state: S, key: E }, navigationType: s };
						},
						[p, v, b, w, S, E, s]
					);
				return null == j ? null : l.createElement(ue.Provider, { value: h }, l.createElement(se.Provider, { children: i, value: j }));
			}
			function Pe(e) {
				var t = e.children,
					n = e.location;
				return he(Le(t), n);
			}
			!(function (e) {
				(e[(e.pending = 0)] = "pending"), (e[(e.success = 1)] = "success"), (e[(e.error = 2)] = "error");
			})(Ce || (Ce = {}));
			var Ne = new Promise(function () {});
			l.Component;
			function Le(e, t) {
				void 0 === t && (t = []);
				var n = [];
				return (
					l.Children.forEach(e, function (e, r) {
						if (l.isValidElement(e)) {
							var a = [].concat(d(t), [r]);
							if (e.type !== l.Fragment) {
								e.type !== Ee && T(!1), e.props.index && e.props.children && T(!1);
								var i = { id: e.props.id || a.join("-"), caseSensitive: e.props.caseSensitive, element: e.props.element, Component: e.props.Component, index: e.props.index, path: e.props.path, loader: e.props.loader, action: e.props.action, errorElement: e.props.errorElement, ErrorBoundary: e.props.ErrorBoundary, hasErrorBoundary: null != e.props.ErrorBoundary || null != e.props.errorElement, shouldRevalidate: e.props.shouldRevalidate, handle: e.props.handle, lazy: e.props.lazy };
								e.props.children && (i.children = Le(e.props.children, a)), n.push(i);
							} else n.push.apply(n, Le(e.props.children, a));
						}
					}),
					n
				);
			}
			function Te(e) {
				var t,
					n = e.basename,
					r = e.children,
					a = e.window,
					i = l.useRef();
				null == i.current &&
					(i.current =
						(void 0 === (t = { window: a, v5Compat: !0 }) && (t = {}),
						A(
							function (e, t) {
								var n = e.location;
								return O("", { pathname: n.pathname, search: n.search, hash: n.hash }, (t.state && t.state.usr) || null, (t.state && t.state.key) || "default");
							},
							function (e, t) {
								return "string" === typeof t ? t : D(t);
							},
							null,
							t
						)));
				var o = i.current,
					u = c(l.useState({ action: o.action, location: o.location }), 2),
					s = u[0],
					f = u[1];
				return (
					l.useLayoutEffect(
						function () {
							return o.listen(f);
						},
						[o]
					),
					l.createElement(je, { basename: n, children: r, location: s.location, navigationType: s.action, navigator: o })
				);
			}
			"undefined" !== typeof window && "undefined" !== typeof window.document && window.document.createElement;
			var Fe, _e;
			(function (e) {
				(e.UseScrollRestoration = "useScrollRestoration"), (e.UseSubmitImpl = "useSubmitImpl"), (e.UseFetcher = "useFetcher");
			})(Fe || (Fe = {})),
				(function (e) {
					(e.UseFetchers = "useFetchers"), (e.UseScrollRestoration = "useScrollRestoration");
				})(_e || (_e = {}));
			var Oe = n(184),
				De = function () {
					return (0, Oe.jsx)("header", {
						id: "navbar",
						className: "sticky top-0 z-50 transition-all duration-300",
						children: (0, Oe.jsx)("div", {
							className: "bg-white/60 border-b shadow-lg backdrop-blur ",
							children: (0, Oe.jsx)("div", {
								className: "px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl",
								children: (0, Oe.jsxs)("div", {
									className: "flex justify-between h-16 lg:h-[72px]",
									children: [
										(0, Oe.jsx)("div", { className: "flex items-center flex-shrink-0", children: (0, Oe.jsxs)("a", { href: "/", title: "", className: "flex flex-nowrap items-center justify-center gap-3", children: [(0, Oe.jsx)("img", { className: "w-8 h-8", src: "/static/images/logo.png", alt: "" }), (0, Oe.jsx)("img", { className: "w-28 h-auto", src: "/static/images/logo.svg", alt: "" })] }) }),
										(0, Oe.jsxs)("div", {
											className: "flex justify-start sm:ml-16 ml-8 sm:space-x-12 space-x-3 ",
											children: [
												(0, Oe.jsxs)("div", {
													className: "relative inline-flex items-center font-sans group text-sm font-medium text-gray-700 transition-all duration-200 border-b-2 border-transparent xl:text-base hover:border-primary-500 hover:text-primary-500 focus:outline-none focus:border-primary-500",
													children: [
														(0, Oe.jsxs)("a", {
															href: "#",
															title: "",
															className: "relative inline-flex items-center font-sans text-sm font-medium text-gray-700 transition-all duration-200  group-hover:text-primary-500",
															children: [(0, Oe.jsx)("svg", { className: "w-4 h-4 mr-1.5", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: (0, Oe.jsx)("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" }) }), "PRODUCTS"],
														}),
														(0, Oe.jsxs)("div", {
															className: "absolute w-max h-0 group-hover:h-44 rounded-b-lg transition-all duration-300 bg-white top-16 overflow-hidden grid grid-cols-3 shadow-xl",
															children: [
																(0, Oe.jsxs)("div", {
																	className: "h-full w-32 sm:w-64  px-2 pt-1",
																	children: [
																		(0, Oe.jsxs)("p", { className: "text-primary-500 font-bold flex flex-nowrap  items-center gap-2", children: ["Automation", (0, Oe.jsx)("svg", { fill: "#00b1de", width: "10px", height: "10px", viewBox: "0 0 15 15", xmlns: "http://www.w3.org/2000/svg", children: (0, Oe.jsx)("path", { d: "M8.29289 2.29289C8.68342 1.90237 9.31658 1.90237 9.70711 2.29289L14.2071 6.79289C14.5976 7.18342 14.5976 7.81658 14.2071 8.20711L9.70711 12.7071C9.31658 13.0976 8.68342 13.0976 8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L11 8.5H1.5C0.947715 8.5 0.5 8.05228 0.5 7.5C0.5 6.94772 0.947715 6.5 1.5 6.5H11L8.29289 3.70711C7.90237 3.31658 7.90237 2.68342 8.29289 2.29289Z" }) })] }),
																		(0, Oe.jsxs)("a", {
																			href: "/pdf2data",
																			className: "w-full h-10 px-1 bg-primary-100 rounded mt-1 flex flex-nowrap items-center justify-between shadow-md hover:scale-105 transition-all duration-300 origin-left",
																			children: [
																				(0, Oe.jsxs)("div", { className: "flex flex-nowrap items-center gap-1", children: [(0, Oe.jsx)("img", { className: " w-7 h-7 rounded overflow-hidden", src: "/static/images/pdf.svg" }), (0, Oe.jsx)("p", { className: "text-gray-700 text-xs sm:text-[15px]", children: "PDF OCR Analysis " })] }),
																				(0, Oe.jsx)("svg", { fill: "#00b1de", width: "10px", height: "10px", viewBox: "0 0 15 15", xmlns: "http://www.w3.org/2000/svg", children: (0, Oe.jsx)("path", { d: "M8.29289 2.29289C8.68342 1.90237 9.31658 1.90237 9.70711 2.29289L14.2071 6.79289C14.5976 7.18342 14.5976 7.81658 14.2071 8.20711L9.70711 12.7071C9.31658 13.0976 8.68342 13.0976 8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L11 8.5H1.5C0.947715 8.5 0.5 8.05228 0.5 7.5C0.5 6.94772 0.947715 6.5 1.5 6.5H11L8.29289 3.70711C7.90237 3.31658 7.90237 2.68342 8.29289 2.29289Z" }) }),
																			],
																		}),
																		(0, Oe.jsxs)("div", {
																			className: "w-full h-10 px-1 bg-primary-100 rounded mt-2 flex flex-nowrap items-center justify-between shadow-md hover:scale-105 transition-all duration-300 origin-left",
																			children: [
																				(0, Oe.jsxs)("div", { className: "flex flex-nowrap items-center gap-1", children: [(0, Oe.jsx)("img", { className: " w-7 h-7 rounded overflow-hidden", src: "/static/images/pdf.svg" }), (0, Oe.jsx)("p", { className: "text-gray-700 text-xs sm:text-[15px]", children: "Image OCR Analysis " })] }),
																				(0, Oe.jsx)("svg", { fill: "#00b1de", width: "10px", height: "10px", viewBox: "0 0 15 15", xmlns: "http://www.w3.org/2000/svg", children: (0, Oe.jsx)("path", { d: "M8.29289 2.29289C8.68342 1.90237 9.31658 1.90237 9.70711 2.29289L14.2071 6.79289C14.5976 7.18342 14.5976 7.81658 14.2071 8.20711L9.70711 12.7071C9.31658 13.0976 8.68342 13.0976 8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L11 8.5H1.5C0.947715 8.5 0.5 8.05228 0.5 7.5C0.5 6.94772 0.947715 6.5 1.5 6.5H11L8.29289 3.70711C7.90237 3.31658 7.90237 2.68342 8.29289 2.29289Z" }) }),
																			],
																		}),
																		(0, Oe.jsxs)("div", {
																			className: "w-full h-10 px-1 bg-primary-100 rounded mt-2 flex flex-nowrap items-center justify-between shadow-md hover:scale-105 transition-all duration-300 origin-left",
																			children: [
																				(0, Oe.jsxs)("div", { className: "flex flex-nowrap items-center gap-1", children: [(0, Oe.jsx)("img", { className: " w-7 h-7 rounded overflow-hidden", src: "/static/images/pdf.svg" }), (0, Oe.jsx)("p", { className: "text-gray-700 text-xs sm:text-[15px]", children: "Tabular OCR Analysis " })] }),
																				(0, Oe.jsx)("svg", { fill: "#00b1de", width: "10px", height: "10px", viewBox: "0 0 15 15", xmlns: "http://www.w3.org/2000/svg", children: (0, Oe.jsx)("path", { d: "M8.29289 2.29289C8.68342 1.90237 9.31658 1.90237 9.70711 2.29289L14.2071 6.79289C14.5976 7.18342 14.5976 7.81658 14.2071 8.20711L9.70711 12.7071C9.31658 13.0976 8.68342 13.0976 8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L11 8.5H1.5C0.947715 8.5 0.5 8.05228 0.5 7.5C0.5 6.94772 0.947715 6.5 1.5 6.5H11L8.29289 3.70711C7.90237 3.31658 7.90237 2.68342 8.29289 2.29289Z" }) }),
																			],
																		}),
																	],
																}),
																(0, Oe.jsxs)("div", {
																	className: "h-full w-32 sm:w-64  px-2 pt-1",
																	children: [
																		(0, Oe.jsxs)("p", { className: "text-primary-500 font-bold flex flex-nowrap  items-center gap-2", children: ["Accounting", (0, Oe.jsx)("svg", { fill: "#00b1de", width: "10px", height: "10px", viewBox: "0 0 15 15", xmlns: "http://www.w3.org/2000/svg", children: (0, Oe.jsx)("path", { d: "M8.29289 2.29289C8.68342 1.90237 9.31658 1.90237 9.70711 2.29289L14.2071 6.79289C14.5976 7.18342 14.5976 7.81658 14.2071 8.20711L9.70711 12.7071C9.31658 13.0976 8.68342 13.0976 8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L11 8.5H1.5C0.947715 8.5 0.5 8.05228 0.5 7.5C0.5 6.94772 0.947715 6.5 1.5 6.5H11L8.29289 3.70711C7.90237 3.31658 7.90237 2.68342 8.29289 2.29289Z" }) })] }),
																		(0, Oe.jsxs)("div", {
																			className: "w-full h-10 px-1 bg-primary-100 rounded mt-1 flex flex-nowrap items-center justify-between shadow-md hover:scale-105 transition-all duration-300 origin-left",
																			children: [
																				(0, Oe.jsxs)("div", { className: "flex flex-nowrap items-center gap-1", children: [(0, Oe.jsx)("img", { className: " w-7 h-7 rounded overflow-hidden", src: "/static/images/pdf.svg" }), (0, Oe.jsx)("p", { className: "text-gray-700 text-xs sm:text-[15px]", children: "Invoice OCR " })] }),
																				(0, Oe.jsx)("svg", { fill: "#00b1de", width: "10px", height: "10px", viewBox: "0 0 15 15", xmlns: "http://www.w3.org/2000/svg", children: (0, Oe.jsx)("path", { d: "M8.29289 2.29289C8.68342 1.90237 9.31658 1.90237 9.70711 2.29289L14.2071 6.79289C14.5976 7.18342 14.5976 7.81658 14.2071 8.20711L9.70711 12.7071C9.31658 13.0976 8.68342 13.0976 8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L11 8.5H1.5C0.947715 8.5 0.5 8.05228 0.5 7.5C0.5 6.94772 0.947715 6.5 1.5 6.5H11L8.29289 3.70711C7.90237 3.31658 7.90237 2.68342 8.29289 2.29289Z" }) }),
																			],
																		}),
																		(0, Oe.jsxs)("div", {
																			className: "w-full h-10 px-1 bg-primary-100 rounded mt-2 flex flex-nowrap items-center justify-between shadow-md hover:scale-105 transition-all duration-300 origin-left",
																			children: [
																				(0, Oe.jsxs)("div", { className: "flex flex-nowrap items-center gap-1", children: [(0, Oe.jsx)("img", { className: " w-7 h-7 rounded overflow-hidden", src: "/static/images/pdf.svg" }), (0, Oe.jsx)("p", { className: "text-gray-700 text-xs sm:text-[15px]", children: "Receipt OCR" })] }),
																				(0, Oe.jsx)("svg", { fill: "#00b1de", width: "10px", height: "10px", viewBox: "0 0 15 15", xmlns: "http://www.w3.org/2000/svg", children: (0, Oe.jsx)("path", { d: "M8.29289 2.29289C8.68342 1.90237 9.31658 1.90237 9.70711 2.29289L14.2071 6.79289C14.5976 7.18342 14.5976 7.81658 14.2071 8.20711L9.70711 12.7071C9.31658 13.0976 8.68342 13.0976 8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L11 8.5H1.5C0.947715 8.5 0.5 8.05228 0.5 7.5C0.5 6.94772 0.947715 6.5 1.5 6.5H11L8.29289 3.70711C7.90237 3.31658 7.90237 2.68342 8.29289 2.29289Z" }) }),
																			],
																		}),
																		(0, Oe.jsxs)("div", {
																			className: "w-full h-10 px-1 bg-primary-100 rounded mt-2 flex flex-nowrap items-center justify-between shadow-md hover:scale-105 transition-all duration-300 origin-left",
																			children: [
																				(0, Oe.jsxs)("div", { className: "flex flex-nowrap items-center gap-1", children: [(0, Oe.jsx)("img", { className: " w-7 h-7 rounded overflow-hidden", src: "/static/images/pdf.svg" }), (0, Oe.jsx)("p", { className: "text-gray-700 text-xs sm:text-[15px]", children: "Purchase Order OCR" })] }),
																				(0, Oe.jsx)("svg", { fill: "#00b1de", width: "10px", height: "10px", viewBox: "0 0 15 15", xmlns: "http://www.w3.org/2000/svg", children: (0, Oe.jsx)("path", { d: "M8.29289 2.29289C8.68342 1.90237 9.31658 1.90237 9.70711 2.29289L14.2071 6.79289C14.5976 7.18342 14.5976 7.81658 14.2071 8.20711L9.70711 12.7071C9.31658 13.0976 8.68342 13.0976 8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L11 8.5H1.5C0.947715 8.5 0.5 8.05228 0.5 7.5C0.5 6.94772 0.947715 6.5 1.5 6.5H11L8.29289 3.70711C7.90237 3.31658 7.90237 2.68342 8.29289 2.29289Z" }) }),
																			],
																		}),
																	],
																}),
																(0, Oe.jsxs)("div", {
																	className: "h-full w-32 sm:w-64  px-2 pt-1",
																	children: [
																		(0, Oe.jsxs)("p", { className: "text-primary-500 font-bold flex flex-nowrap  items-center gap-2", children: ["ID Card Verification", (0, Oe.jsx)("svg", { fill: "#00b1de", width: "10px", height: "10px", viewBox: "0 0 15 15", xmlns: "http://www.w3.org/2000/svg", children: (0, Oe.jsx)("path", { d: "M8.29289 2.29289C8.68342 1.90237 9.31658 1.90237 9.70711 2.29289L14.2071 6.79289C14.5976 7.18342 14.5976 7.81658 14.2071 8.20711L9.70711 12.7071C9.31658 13.0976 8.68342 13.0976 8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L11 8.5H1.5C0.947715 8.5 0.5 8.05228 0.5 7.5C0.5 6.94772 0.947715 6.5 1.5 6.5H11L8.29289 3.70711C7.90237 3.31658 7.90237 2.68342 8.29289 2.29289Z" }) })] }),
																		(0, Oe.jsxs)("div", {
																			className: "w-full h-10 px-1 bg-primary-100 rounded mt-1 flex flex-nowrap items-center justify-between shadow-md hover:scale-105 transition-all duration-300 origin-left",
																			children: [
																				(0, Oe.jsxs)("div", { className: "flex flex-nowrap items-center gap-1", children: [(0, Oe.jsx)("img", { className: " w-7 h-7 rounded overflow-hidden", src: "/static/images/pdf.svg" }), (0, Oe.jsx)("p", { className: "text-gray-700 text-xs sm:text-[15px]", children: "Driver License OCR" })] }),
																				(0, Oe.jsx)("svg", { fill: "#00b1de", width: "10px", height: "10px", viewBox: "0 0 15 15", xmlns: "http://www.w3.org/2000/svg", children: (0, Oe.jsx)("path", { d: "M8.29289 2.29289C8.68342 1.90237 9.31658 1.90237 9.70711 2.29289L14.2071 6.79289C14.5976 7.18342 14.5976 7.81658 14.2071 8.20711L9.70711 12.7071C9.31658 13.0976 8.68342 13.0976 8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L11 8.5H1.5C0.947715 8.5 0.5 8.05228 0.5 7.5C0.5 6.94772 0.947715 6.5 1.5 6.5H11L8.29289 3.70711C7.90237 3.31658 7.90237 2.68342 8.29289 2.29289Z" }) }),
																			],
																		}),
																		(0, Oe.jsxs)("div", {
																			className: "w-full h-10 px-1 bg-primary-100 rounded mt-2 flex flex-nowrap items-center justify-between shadow-md hover:scale-105 transition-all duration-300 origin-left",
																			children: [
																				(0, Oe.jsxs)("div", { className: "flex flex-nowrap items-center gap-1", children: [(0, Oe.jsx)("img", { className: " w-7 h-7 rounded overflow-hidden", src: "/static/images/pdf.svg" }), (0, Oe.jsx)("p", { className: "text-gray-700 text-xs sm:text-[15px]", children: "ID Card OCR" })] }),
																				(0, Oe.jsx)("svg", { fill: "#00b1de", width: "10px", height: "10px", viewBox: "0 0 15 15", xmlns: "http://www.w3.org/2000/svg", children: (0, Oe.jsx)("path", { d: "M8.29289 2.29289C8.68342 1.90237 9.31658 1.90237 9.70711 2.29289L14.2071 6.79289C14.5976 7.18342 14.5976 7.81658 14.2071 8.20711L9.70711 12.7071C9.31658 13.0976 8.68342 13.0976 8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L11 8.5H1.5C0.947715 8.5 0.5 8.05228 0.5 7.5C0.5 6.94772 0.947715 6.5 1.5 6.5H11L8.29289 3.70711C7.90237 3.31658 7.90237 2.68342 8.29289 2.29289Z" }) }),
																			],
																		}),
																		(0, Oe.jsxs)("div", {
																			className: "w-full h-10 px-1 bg-primary-100 rounded mt-2 flex flex-nowrap items-center justify-between shadow-md hover:scale-105 transition-all duration-300 origin-left",
																			children: [
																				(0, Oe.jsxs)("div", { className: "flex flex-nowrap items-center gap-1", children: [(0, Oe.jsx)("img", { className: " w-7 h-7 rounded overflow-hidden", src: "/static/images/pdf.svg" }), (0, Oe.jsx)("p", { className: "text-gray-700 text-xs sm:text-[15px]", children: "Passport OCR" })] }),
																				(0, Oe.jsx)("svg", { fill: "#00b1de", width: "10px", height: "10px", viewBox: "0 0 15 15", xmlns: "http://www.w3.org/2000/svg", children: (0, Oe.jsx)("path", { d: "M8.29289 2.29289C8.68342 1.90237 9.31658 1.90237 9.70711 2.29289L14.2071 6.79289C14.5976 7.18342 14.5976 7.81658 14.2071 8.20711L9.70711 12.7071C9.31658 13.0976 8.68342 13.0976 8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L11 8.5H1.5C0.947715 8.5 0.5 8.05228 0.5 7.5C0.5 6.94772 0.947715 6.5 1.5 6.5H11L8.29289 3.70711C7.90237 3.31658 7.90237 2.68342 8.29289 2.29289Z" }) }),
																			],
																		}),
																	],
																}),
															],
														}),
													],
												}),
												(0, Oe.jsx)("a", { href: "#", title: "", className: "inline-flex items-center font-sans text-sm font-medium text-gray-700 transition-all duration-200 border-b-2 border-transparent xl:text-base hover:border-primary-500 hover:text-primary-500 focus:outline-none focus:border-primary-500", children: "SOLUTIONS" }),
												(0, Oe.jsx)("a", { href: "#", title: "", className: "inline-flex items-center font-sans text-sm font-medium text-gray-700 transition-all duration-200 border-b-2 border-transparent xl:text-base hover:border-primary-500 hover:text-primary-500 focus:outline-none focus:border-primary-500", children: "RESOURCES" }),
												(0, Oe.jsx)("a", { href: "#", title: "", className: "inline-flex items-center font-sans text-sm font-medium text-gray-700 transition-all duration-200 border-b-2 border-transparent xl:text-base hover:border-primary-500 hover:text-primary-500 focus:outline-none focus:border-primary-500", children: "PRICING" }),
											],
										}),
										(0, Oe.jsx)("div", {
											className: "flex items-center justify-end ml-auto space-x-6",
											children: (0, Oe.jsxs)("button", {
												type: "button",
												className: "relative inline-flex items-center justify-center text-white transition-all duration-200 bg-gray-700 rounded-full w-9 h-9 md:w-12 md:h-12 hover:bg-gray-700",
												children: [(0, Oe.jsx)("svg", { fill: "#00b1de", width: "25px", height: "25px", viewBox: "0 0 24 24", "data-name": "Flat Color", xmlns: "http://www.w3.org/2000/svg", className: "icon flat-color", children: (0, Oe.jsx)("path", { id: "primary", d: "M21,20a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2,6,6,0,0,1,6-6h6A6,6,0,0,1,21,20Zm-9-8A5,5,0,1,0,7,7,5,5,0,0,0,12,12Z", style: { fill: "white" } }) }), (0, Oe.jsx)("span", { className: "absolute flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-primary-600 rounded-full -top-1 -left-1", children: " 3 " })],
											}),
										}),
									],
								}),
							}),
						}),
					});
				},
				ze = function () {
					return (0, Oe.jsxs)("div", {
						className: "bg-white flex flex-col sm:flex-row items-center justify-between py-16 lg:w-[75%] mx-auto",
						children: [
							(0, Oe.jsxs)("div", { className: "flex flex-col justify-center h-max w-full p-5", children: [(0, Oe.jsx)("h1", { className: "text-4xl lg:text-5xl text-slate-800 font-bold", children: "Automate Manual Data Entry Using AI" }), (0, Oe.jsx)("p", { className: "text-slate-700", children: "Capture data from documents instantly. Reduce turn around times and the manual effort required." }), (0, Oe.jsx)("button", { className: "border-2 border-primary-500 hover:bg-primary-500 text-primary-500 hover:text-white px-5 py-2 w-32 rounded-md mt-5 transition-all duration-300 shadow hover:shadow-lg", children: "Get Started" })] }),
							(0, Oe.jsx)("div", { className: "w-full sm:max-w-[50%] p-5", children: (0, Oe.jsx)("img", { src: "/static/images/hero.jpeg", className: "" }) }),
						],
					});
				},
				Ae = function () {
					return (0, Oe.jsxs)("div", {
						className: "bg-primary-700/10 w-full p-5 pb-0",
						children: [
							(0, Oe.jsx)("p", { className: "text-center w-full  font-extralight text-slate-700", children: "Trusted by 10,000+ customers across the globe" }),
							(0, Oe.jsxs)("div", {
								className: "grid grid-cols-6 gap-2 lg:w-[75%] mx-auto",
								children: [
									(0, Oe.jsx)("img", { className: "object-contain h-full w-full", src: "https://assets-global.website-files.com/602f5458a0b1d868c6c84d5b/611271625f6ca1eb467661d0_Divvy.png" }),
									(0, Oe.jsx)("img", { className: "object-contain h-full w-full", src: "https://assets-global.website-files.com/602f5458a0b1d868c6c84d5b/60e7e09742981b2497ca3634_EY.svg" }),
									(0, Oe.jsx)("img", { className: "object-contain h-full w-full", src: "https://assets-global.website-files.com/602f5458a0b1d868c6c84d5b/61a776c1f89a832147f42735_Grover-logo.svg" }),
									(0, Oe.jsx)("img", { className: "object-contain h-full w-full", src: "https://assets-global.website-files.com/602f5458a0b1d868c6c84d5b/60e7e0a4e3fb2e559e8e5ece_Hughes.svg" }),
									(0, Oe.jsx)("img", { className: "object-contain h-full w-full", src: "https://assets-global.website-files.com/602f5458a0b1d868c6c84d5b/60e7e0cad2c2b28094b2117a_P%26G.svg" }),
									(0, Oe.jsx)("img", { className: "object-contain h-full w-full", src: "https://assets-global.website-files.com/602f5458a0b1d868c6c84d5b/618cf7d27e8255e6af866c7b_Roche.svg" }),
									(0, Oe.jsx)("img", { className: "object-contain h-full w-full", src: "https://assets-global.website-files.com/602f5458a0b1d868c6c84d5b/60c8c7fd51b02455cb42c1d4_Group.svg" }),
									(0, Oe.jsx)("img", { className: "object-contain h-full w-full", src: "https://assets-global.website-files.com/602f5458a0b1d868c6c84d5b/625ead009bdae43688aa48ad_Veralia.svg" }),
									(0, Oe.jsx)("img", { className: "object-contain h-full w-full", src: "https://assets-global.website-files.com/602f5458a0b1d868c6c84d5b/636e34019f60d893fab95dfc_Toyota%20logo%201.svg" }),
									(0, Oe.jsx)("img", { className: "object-contain h-full w-full", src: "https://assets-global.website-files.com/602f5458a0b1d868c6c84d5b/636e327071bc733ebd893d50_Continental.svg" }),
									(0, Oe.jsx)("img", { className: "object-contain h-full w-full", src: "https://assets-global.website-files.com/602f5458a0b1d868c6c84d5b/636e3286f118df99b57b2155_Henkel.svg" }),
									(0, Oe.jsx)("img", { className: "object-contain h-full w-full", src: "https://assets-global.website-files.com/602f5458a0b1d868c6c84d5b/636e329b0ab43e1dd17f3eaf_AXA.svg" }),
								],
							}),
							(0, Oe.jsx)("img", { className: "rounded-t-xl mt-10 lg:w-[75%] mx-auto", src: "/static/images/demoProduct.png", alt: "" }),
						],
					});
				},
				Re = function (e) {
					var t = e.vidRef,
						n = e.subtitle,
						r = e.title,
						l = e.src,
						a = e.flip;
					return (0, Oe.jsx)("div", {
						className: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 mb-10",
						children: (0, Oe.jsxs)("div", { className: "grid grid-cols-1 gap-y-12 sm:grid-cols-12 sm:gap-x-16 xl:gap-x-24", style: { direction: a ? "rtl" : "ltr" }, children: [(0, Oe.jsxs)("div", { className: "text-center sm:col-span-6 sm:text-left", children: [(0, Oe.jsx)("h2", { className: "text-3xl font-bold text-slate-900 sm:text-4xl xl:text-5xl font-pj", children: r }), (0, Oe.jsx)("p", { className: "mt-8 text-base font-normal text-slate-600", children: n })] }), (0, Oe.jsx)("div", { className: "sm:col-span-6", children: (0, Oe.jsx)("video", { ref: t, className: "object-cover w-full max-h-48 transition-all duration-300 rounded-xl", src: l, alt: "", loop: !0, muted: !0, autoPlay: !0 }) })] }),
					});
				},
				Ie = function () {
					var e = (0, l.useRef)(),
						t = (0, l.useRef)(),
						n = (0, l.useRef)();
					return (
						(0, l.useEffect)(function () {
							e.current.play(), t.current.play(), n.current.play();
						}, []),
						(0, Oe.jsxs)("div", {
							children: [
								(0, Oe.jsx)(ze, {}),
								(0, Oe.jsx)(Ae, {}),
								(0, Oe.jsxs)("section", {
									className: "py-12 bg-white sm:py-16 lg:py-20",
									children: [
										(0, Oe.jsx)(Re, { vidRef: e, src: "/static/images/identifyText.mp4", flip: !1, title: "Capture only what you want", subtitle: "Keep your data clean and crisp \u2013 upload unstructured invoices from multiple customers but only extract fields you need. You can also add new fields if required." }),
										(0, Oe.jsx)(Re, { vidRef: t, src: "/static/images/orderingDocuments.mp4", flip: !0, title: "AI that learns with every new document", subtitle: "As your business grows, the more transactions and the more data you will deal with. The model keeps learning and will be able to understand and capture data with higher accuracy each time new documents are processed." }),
										(0, Oe.jsx)(Re, { vidRef: n, src: "/static/images/transferringData.mp4", flip: !1, title: "Seamlessly upload documents and export data", subtitle: "Customers send you documents only via email? Nanonets supports platforms you can directly import from or export to your existing workflow without disrupting your system." }),
									],
								}),
							],
						})
					);
				};
			function Me(e, t, n) {
				return (t = m(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
			}
			function Be(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t &&
						(r = r.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						n.push.apply(n, r);
				}
				return n;
			}
			function Ue(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? Be(Object(n), !0).forEach(function (t) {
								Me(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: Be(Object(n)).forEach(function (t) {
								Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
						  });
				}
				return e;
			}
			var He = n(586);
			function Ve(e) {
				return e && "object" === typeof e ? ("position" in e || "type" in e ? We(e.position) : "start" in e || "end" in e ? We(e) : "line" in e || "column" in e ? $e(e) : "") : "";
			}
			function $e(e) {
				return qe(e && e.line) + ":" + qe(e && e.column);
			}
			function We(e) {
				return $e(e && e.start) + "-" + $e(e && e.end);
			}
			function qe(e) {
				return e && "number" === typeof e ? e : 1;
			}
			var Qe = (function (e) {
				b(n, e);
				var t = S(n);
				function n(e, r, l) {
					var a;
					p(this, n);
					var i = [null, null],
						o = { start: { line: null, column: null }, end: { line: null, column: null } };
					if (((a = t.call(this)), "string" === typeof r && ((l = r), (r = void 0)), "string" === typeof l)) {
						var u = l.indexOf(":");
						-1 === u ? (i[1] = l) : ((i[0] = l.slice(0, u)), (i[1] = l.slice(u + 1)));
					}
					return r && ("type" in r || "position" in r ? r.position && (o = r.position) : "start" in r || "end" in r ? (o = r) : ("line" in r || "column" in r) && (o.start = r)), (a.name = Ve(r) || "1:1"), (a.message = "object" === typeof e ? e.message : e), (a.stack = ""), "object" === typeof e && e.stack && (a.stack = e.stack), (a.reason = a.message), a.fatal, (a.line = o.start.line), (a.column = o.start.column), (a.position = o), (a.source = i[0]), (a.ruleId = i[1]), a.file, a.actual, a.expected, a.url, a.note, a;
				}
				return v(n);
			})(E(Error));
			(Qe.prototype.file = ""), (Qe.prototype.name = ""), (Qe.prototype.reason = ""), (Qe.prototype.message = ""), (Qe.prototype.stack = ""), (Qe.prototype.fatal = null), (Qe.prototype.column = null), (Qe.prototype.line = null), (Qe.prototype.source = null), (Qe.prototype.ruleId = null), (Qe.prototype.position = null);
			var Ke = {
				basename: function (e, t) {
					if (void 0 !== t && "string" !== typeof t) throw new TypeError('"ext" argument must be a string');
					Ye(e);
					var n,
						r = 0,
						l = -1,
						a = e.length;
					if (void 0 === t || 0 === t.length || t.length > e.length) {
						for (; a--; )
							if (47 === e.charCodeAt(a)) {
								if (n) {
									r = a + 1;
									break;
								}
							} else l < 0 && ((n = !0), (l = a + 1));
						return l < 0 ? "" : e.slice(r, l);
					}
					if (t === e) return "";
					var i = -1,
						o = t.length - 1;
					for (; a--; )
						if (47 === e.charCodeAt(a)) {
							if (n) {
								r = a + 1;
								break;
							}
						} else i < 0 && ((n = !0), (i = a + 1)), o > -1 && (e.charCodeAt(a) === t.charCodeAt(o--) ? o < 0 && (l = a) : ((o = -1), (l = i)));
					r === l ? (l = i) : l < 0 && (l = e.length);
					return e.slice(r, l);
				},
				dirname: function (e) {
					if ((Ye(e), 0 === e.length)) return ".";
					var t,
						n = -1,
						r = e.length;
					for (; --r; )
						if (47 === e.charCodeAt(r)) {
							if (t) {
								n = r;
								break;
							}
						} else t || (t = !0);
					return n < 0 ? (47 === e.charCodeAt(0) ? "/" : ".") : 1 === n && 47 === e.charCodeAt(0) ? "//" : e.slice(0, n);
				},
				extname: function (e) {
					Ye(e);
					var t,
						n = e.length,
						r = -1,
						l = 0,
						a = -1,
						i = 0;
					for (; n--; ) {
						var o = e.charCodeAt(n);
						if (47 !== o) r < 0 && ((t = !0), (r = n + 1)), 46 === o ? (a < 0 ? (a = n) : 1 !== i && (i = 1)) : a > -1 && (i = -1);
						else if (t) {
							l = n + 1;
							break;
						}
					}
					if (a < 0 || r < 0 || 0 === i || (1 === i && a === r - 1 && a === l + 1)) return "";
					return e.slice(a, r);
				},
				join: function () {
					for (var e, t = -1, n = arguments.length, r = new Array(n), l = 0; l < n; l++) r[l] = arguments[l];
					for (; ++t < r.length; ) Ye(r[t]), r[t] && (e = void 0 === e ? r[t] : e + "/" + r[t]);
					return void 0 === e
						? "."
						: (function (e) {
								Ye(e);
								var t = 47 === e.charCodeAt(0),
									n = (function (e, t) {
										var n,
											r,
											l = "",
											a = 0,
											i = -1,
											o = 0,
											u = -1;
										for (; ++u <= e.length; ) {
											if (u < e.length) n = e.charCodeAt(u);
											else {
												if (47 === n) break;
												n = 47;
											}
											if (47 === n) {
												if (i === u - 1 || 1 === o);
												else if (i !== u - 1 && 2 === o) {
													if (l.length < 2 || 2 !== a || 46 !== l.charCodeAt(l.length - 1) || 46 !== l.charCodeAt(l.length - 2))
														if (l.length > 2) {
															if ((r = l.lastIndexOf("/")) !== l.length - 1) {
																r < 0 ? ((l = ""), (a = 0)) : (a = (l = l.slice(0, r)).length - 1 - l.lastIndexOf("/")), (i = u), (o = 0);
																continue;
															}
														} else if (l.length > 0) {
															(l = ""), (a = 0), (i = u), (o = 0);
															continue;
														}
													t && ((l = l.length > 0 ? l + "/.." : ".."), (a = 2));
												} else l.length > 0 ? (l += "/" + e.slice(i + 1, u)) : (l = e.slice(i + 1, u)), (a = u - i - 1);
												(i = u), (o = 0);
											} else 46 === n && o > -1 ? o++ : (o = -1);
										}
										return l;
									})(e, !t);
								0 !== n.length || t || (n = ".");
								n.length > 0 && 47 === e.charCodeAt(e.length - 1) && (n += "/");
								return t ? "/" + n : n;
						  })(e);
				},
				sep: "/",
			};
			function Ye(e) {
				if ("string" !== typeof e) throw new TypeError("Path must be a string. Received " + JSON.stringify(e));
			}
			var Xe = {
				cwd: function () {
					return "/";
				},
			};
			function Ze(e) {
				return null !== e && "object" === typeof e && e.href && e.origin;
			}
			function Ge(e) {
				if ("string" === typeof e) e = new URL(e);
				else if (!Ze(e)) {
					var t = new TypeError('The "path" argument must be of type string or an instance of URL. Received `' + e + "`");
					throw ((t.code = "ERR_INVALID_ARG_TYPE"), t);
				}
				if ("file:" !== e.protocol) {
					var n = new TypeError("The URL must be of scheme file");
					throw ((n.code = "ERR_INVALID_URL_SCHEME"), n);
				}
				return (function (e) {
					if ("" !== e.hostname) {
						var t = new TypeError('File URL host must be "localhost" or empty on darwin');
						throw ((t.code = "ERR_INVALID_FILE_URL_HOST"), t);
					}
					var n = e.pathname,
						r = -1;
					for (; ++r < n.length; )
						if (37 === n.charCodeAt(r) && 50 === n.charCodeAt(r + 1)) {
							var l = n.charCodeAt(r + 2);
							if (70 === l || 102 === l) {
								var a = new TypeError("File URL path must not include encoded / characters");
								throw ((a.code = "ERR_INVALID_FILE_URL_PATH"), a);
							}
						}
					return decodeURIComponent(n);
				})(e);
			}
			var Je = ["history", "path", "basename", "stem", "extname", "dirname"],
				et = (function () {
					function e(t) {
						var n;
						p(this, e),
							(n = t
								? "string" === typeof t ||
								  (function (e) {
										return He(e);
								  })(t)
									? { value: t }
									: Ze(t)
									? { path: t }
									: t
								: {}),
							(this.data = {}),
							(this.messages = []),
							(this.history = []),
							(this.cwd = Xe.cwd()),
							this.value,
							this.stored,
							this.result,
							this.map;
						for (var r, l = -1; ++l < Je.length; ) {
							var a = Je[l];
							a in n && void 0 !== n[a] && null !== n[a] && (this[a] = "history" === a ? d(n[a]) : n[a]);
						}
						for (r in n) Je.includes(r) || (this[r] = n[r]);
					}
					return (
						v(e, [
							{
								key: "path",
								get: function () {
									return this.history[this.history.length - 1];
								},
								set: function (e) {
									Ze(e) && (e = Ge(e)), nt(e, "path"), this.path !== e && this.history.push(e);
								},
							},
							{
								key: "dirname",
								get: function () {
									return "string" === typeof this.path ? Ke.dirname(this.path) : void 0;
								},
								set: function (e) {
									rt(this.basename, "dirname"), (this.path = Ke.join(e || "", this.basename));
								},
							},
							{
								key: "basename",
								get: function () {
									return "string" === typeof this.path ? Ke.basename(this.path) : void 0;
								},
								set: function (e) {
									nt(e, "basename"), tt(e, "basename"), (this.path = Ke.join(this.dirname || "", e));
								},
							},
							{
								key: "extname",
								get: function () {
									return "string" === typeof this.path ? Ke.extname(this.path) : void 0;
								},
								set: function (e) {
									if ((tt(e, "extname"), rt(this.dirname, "extname"), e)) {
										if (46 !== e.charCodeAt(0)) throw new Error("`extname` must start with `.`");
										if (e.includes(".", 1)) throw new Error("`extname` cannot contain multiple dots");
									}
									this.path = Ke.join(this.dirname, this.stem + (e || ""));
								},
							},
							{
								key: "stem",
								get: function () {
									return "string" === typeof this.path ? Ke.basename(this.path, this.extname) : void 0;
								},
								set: function (e) {
									nt(e, "stem"), tt(e, "stem"), (this.path = Ke.join(this.dirname || "", e + (this.extname || "")));
								},
							},
							{
								key: "toString",
								value: function (e) {
									return (this.value || "").toString(e || void 0);
								},
							},
							{
								key: "message",
								value: function (e, t, n) {
									var r = new Qe(e, t, n);
									return this.path && ((r.name = this.path + ":" + r.name), (r.file = this.path)), (r.fatal = !1), this.messages.push(r), r;
								},
							},
							{
								key: "info",
								value: function (e, t, n) {
									var r = this.message(e, t, n);
									return (r.fatal = null), r;
								},
							},
							{
								key: "fail",
								value: function (e, t, n) {
									var r = this.message(e, t, n);
									throw ((r.fatal = !0), r);
								},
							},
						]),
						e
					);
				})();
			function tt(e, t) {
				if (e && e.includes(Ke.sep)) throw new Error("`" + t + "` cannot be a path: did not expect `" + Ke.sep + "`");
			}
			function nt(e, t) {
				if (!e) throw new Error("`" + t + "` cannot be empty");
			}
			function rt(e, t) {
				if (!e) throw new Error("Setting `" + t + "` requires `path` to be set too");
			}
			function lt(e) {
				if (e) throw e;
			}
			var at = n(132);
			function it(e) {
				if ("object" !== typeof e || null === e) return !1;
				var t = Object.getPrototypeOf(e);
				return (null === t || t === Object.prototype || null === Object.getPrototypeOf(t)) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
			}
			function ot() {
				var e = [],
					t = {
						run: function () {
							for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
							var l = -1,
								a = n.pop();
							if ("function" !== typeof a) throw new TypeError("Expected function as last argument, not " + a);
							(function t(r) {
								var i = e[++l],
									o = -1;
								if (r) a(r);
								else {
									for (var u = arguments.length, s = new Array(u > 1 ? u - 1 : 0), c = 1; c < u; c++) s[c - 1] = arguments[c];
									for (; ++o < n.length; ) (null !== s[o] && void 0 !== s[o]) || (s[o] = n[o]);
									(n = s),
										i
											? (function (e, t) {
													var n;
													return l;
													function l() {
														for (var t = arguments.length, l = new Array(t), o = 0; o < t; o++) l[o] = arguments[o];
														var u,
															s = e.length > l.length;
														s && l.push(a);
														try {
															u = e.apply(this, l);
														} catch (r) {
															if (s && n) throw r;
															return a(r);
														}
														s || (u instanceof Promise ? u.then(i, a) : u instanceof Error ? a(u) : i(u));
													}
													function a(e) {
														if (!n) {
															n = !0;
															for (var r = arguments.length, l = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) l[a - 1] = arguments[a];
															t.apply(void 0, [e].concat(l));
														}
													}
													function i(e) {
														a(null, e);
													}
											  })(i, t).apply(void 0, s)
											: a.apply(void 0, [null].concat(s));
								}
							}).apply(void 0, [null].concat(d(n)));
						},
						use: function (n) {
							if ("function" !== typeof n) throw new TypeError("Expected `middelware` to be a function, not " + n);
							return e.push(n), t;
						},
					};
				return t;
			}
			var ut = (function e() {
					var t,
						n = ot(),
						r = [],
						l = {},
						a = -1;
					return (
						(i.data = function (e, n) {
							if ("string" === typeof e) return 2 === arguments.length ? (pt("data", t), (l[e] = n), i) : (st.call(l, e) && l[e]) || null;
							if (e) return pt("data", t), (l = e), i;
							return l;
						}),
						(i.Parser = void 0),
						(i.Compiler = void 0),
						(i.freeze = function () {
							if (t) return i;
							for (; ++a < r.length; ) {
								var e = j(r[a]),
									l = e[0],
									o = e.slice(1);
								if (!1 !== o[0]) {
									!0 === o[0] && (o[0] = void 0);
									var u = l.call.apply(l, [i].concat(d(o)));
									"function" === typeof u && n.use(u);
								}
							}
							return (t = !0), (a = Number.POSITIVE_INFINITY), i;
						}),
						(i.attachers = r),
						(i.use = function (e) {
							for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) a[o - 1] = arguments[o];
							var u;
							if ((pt("use", t), null === e || void 0 === e));
							else if ("function" === typeof e) p.apply(void 0, [e].concat(a));
							else {
								if ("object" !== typeof e) throw new TypeError("Expected usable value, not `" + e + "`");
								Array.isArray(e) ? f(e) : c(e);
							}
							u && (l.settings = Object.assign(l.settings || {}, u));
							return i;
							function s(e) {
								if ("function" === typeof e) p(e);
								else {
									if ("object" !== typeof e) throw new TypeError("Expected usable value, not `" + e + "`");
									if (Array.isArray(e)) {
										var t = j(e),
											n = t[0],
											r = t.slice(1);
										p.apply(void 0, [n].concat(d(r)));
									} else c(e);
								}
							}
							function c(e) {
								f(e.plugins), e.settings && (u = Object.assign(u || {}, e.settings));
							}
							function f(e) {
								var t = -1;
								if (null === e || void 0 === e);
								else {
									if (!Array.isArray(e)) throw new TypeError("Expected a list of plugins, not `" + e + "`");
									for (; ++t < e.length; ) {
										s(e[t]);
									}
								}
							}
							function p(e, t) {
								for (var n, l = -1; ++l < r.length; )
									if (r[l][0] === e) {
										n = r[l];
										break;
									}
								n ? (it(n[1]) && it(t) && (t = at(!0, n[1], t)), (n[1] = t)) : r.push(Array.prototype.slice.call(arguments));
							}
						}),
						(i.parse = function (e) {
							i.freeze();
							var t = gt(e),
								n = i.Parser;
							if ((ft("parse", n), ct(n, "parse"))) return new n(String(t), t).parse();
							return n(String(t), t);
						}),
						(i.stringify = function (e, t) {
							i.freeze();
							var n = gt(t),
								r = i.Compiler;
							if ((dt("stringify", r), ht(e), ct(r, "compile"))) return new r(e, n).compile();
							return r(e, n);
						}),
						(i.run = function (e, t, r) {
							ht(e), i.freeze(), r || "function" !== typeof t || ((r = t), (t = void 0));
							if (!r) return new Promise(l);
							function l(l, a) {
								function i(t, n, i) {
									(n = n || e), t ? a(t) : l ? l(n) : r(null, n, i);
								}
								n.run(e, gt(t), i);
							}
							l(null, r);
						}),
						(i.runSync = function (e, t) {
							var n, r;
							return i.run(e, t, l), mt("runSync", "run", r), n;
							function l(e, t) {
								lt(e), (n = t), (r = !0);
							}
						}),
						(i.process = function (e, t) {
							if ((i.freeze(), ft("process", i.Parser), dt("process", i.Compiler), !t)) return new Promise(n);
							function n(n, r) {
								var l = gt(e);
								function a(e, l) {
									e || !l ? r(e) : n ? n(l) : t(null, l);
								}
								i.run(i.parse(l), l, function (e, t, n) {
									if (!e && t && n) {
										var r = i.stringify(t, n);
										void 0 === r || null === r || ("string" === typeof (l = r) || He(l) ? (n.value = r) : (n.result = r)), a(e, n);
									} else a(e);
									var l;
								});
							}
							n(null, t);
						}),
						(i.processSync = function (e) {
							var t;
							i.freeze(), ft("processSync", i.Parser), dt("processSync", i.Compiler);
							var n = gt(e);
							return i.process(n, r), mt("processSync", "process", t), n;
							function r(e) {
								(t = !0), lt(e);
							}
						}),
						i
					);
					function i() {
						for (var t = e(), n = -1; ++n < r.length; ) t.use.apply(t, d(r[n]));
						return t.data(at(!0, {}, l)), t;
					}
				})().freeze(),
				st = {}.hasOwnProperty;
			function ct(e, t) {
				return (
					"function" === typeof e &&
					e.prototype &&
					((function (e) {
						var t;
						for (t in e) if (st.call(e, t)) return !0;
						return !1;
					})(e.prototype) ||
						t in e.prototype)
				);
			}
			function ft(e, t) {
				if ("function" !== typeof t) throw new TypeError("Cannot `" + e + "` without `Parser`");
			}
			function dt(e, t) {
				if ("function" !== typeof t) throw new TypeError("Cannot `" + e + "` without `Compiler`");
			}
			function pt(e, t) {
				if (t) throw new Error("Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.");
			}
			function ht(e) {
				if (!it(e) || "string" !== typeof e.type) throw new TypeError("Expected node, got `" + e + "`");
			}
			function mt(e, t, n) {
				if (!n) throw new Error("`" + e + "` finished async. Use `" + t + "` instead");
			}
			function gt(e) {
				return (function (e) {
					return Boolean(e && "object" === typeof e && "message" in e && "messages" in e);
				})(e)
					? e
					: new et(e);
			}
			var vt = {};
			function yt(e, t, n) {
				if (
					(function (e) {
						return Boolean(e && "object" === typeof e);
					})(e)
				) {
					if ("value" in e) return "html" !== e.type || n ? e.value : "";
					if (t && "alt" in e && e.alt) return e.alt;
					if ("children" in e) return bt(e.children, t, n);
				}
				return Array.isArray(e) ? bt(e, t, n) : "";
			}
			function bt(e, t, n) {
				for (var r = [], l = -1; ++l < e.length; ) r[l] = yt(e[l], t, n);
				return r.join("");
			}
			function xt(e, t, n, r) {
				var l,
					a = e.length,
					i = 0;
				if (((t = t < 0 ? (-t > a ? 0 : a + t) : t > a ? a : t), (n = n > 0 ? n : 0), r.length < 1e4)) (l = Array.from(r)).unshift(t, n), [].splice.apply(e, l);
				else for (n && [].splice.apply(e, [t, n]); i < r.length; ) (l = r.slice(i, i + 1e4)).unshift(t, 0), [].splice.apply(e, l), (i += 1e4), (t += 1e4);
			}
			function wt(e, t) {
				return e.length > 0 ? (xt(e, e.length, 0, t), e) : t;
			}
			var kt = {}.hasOwnProperty;
			function St(e) {
				for (var t = {}, n = -1; ++n < e.length; ) Ct(t, e[n]);
				return t;
			}
			function Ct(e, t) {
				var n;
				for (n in t) {
					var r = (kt.call(e, n) ? e[n] : void 0) || (e[n] = {}),
						l = t[n],
						a = void 0;
					for (a in l) {
						kt.call(r, a) || (r[a] = []);
						var i = l[a];
						Et(r[a], Array.isArray(i) ? i : i ? [i] : []);
					}
				}
			}
			function Et(e, t) {
				for (var n = -1, r = []; ++n < t.length; ) ("after" === t[n].add ? e : r).push(t[n]);
				xt(e, 0, 0, r);
			}
			var jt = It(/[A-Za-z]/),
				Pt = It(/\d/),
				Nt = It(/[\dA-Fa-f]/),
				Lt = It(/[\dA-Za-z]/),
				Tt = It(/[!-/:-@[-`{-~]/),
				Ft = It(/[#-'*+\--9=?A-Z^-~]/);
			function _t(e) {
				return null !== e && (e < 32 || 127 === e);
			}
			function Ot(e) {
				return null !== e && (e < 0 || 32 === e);
			}
			function Dt(e) {
				return null !== e && e < -2;
			}
			function zt(e) {
				return -2 === e || -1 === e || 32 === e;
			}
			var At = It(/\s/),
				Rt = It(
					/[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/
				);
			function It(e) {
				return function (t) {
					return null !== t && e.test(String.fromCharCode(t));
				};
			}
			function Mt(e, t, n, r) {
				var l = r ? r - 1 : Number.POSITIVE_INFINITY,
					a = 0;
				return function (r) {
					if (zt(r)) return e.enter(n), i(r);
					return t(r);
				};
				function i(r) {
					return zt(r) && a++ < l ? (e.consume(r), i) : (e.exit(n), t(r));
				}
			}
			var Bt = {
				tokenize: function (e) {
					var t,
						n = e.attempt(
							this.parser.constructs.contentInitial,
							function (t) {
								if (null === t) return void e.consume(t);
								return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), Mt(e, n, "linePrefix");
							},
							function (t) {
								return e.enter("paragraph"), r(t);
							}
						);
					return n;
					function r(n) {
						var r = e.enter("chunkText", { contentType: "text", previous: t });
						return t && (t.next = r), (t = r), l(n);
					}
					function l(t) {
						return null === t ? (e.exit("chunkText"), e.exit("paragraph"), void e.consume(t)) : Dt(t) ? (e.consume(t), e.exit("chunkText"), r) : (e.consume(t), l);
					}
				},
			};
			var Ut = {
					tokenize: function (e) {
						var t,
							n,
							r,
							l = this,
							a = [],
							i = 0;
						return o;
						function o(t) {
							if (i < a.length) {
								var n = a[i];
								return (l.containerState = n[1]), e.attempt(n[0].continuation, u, s)(t);
							}
							return s(t);
						}
						function u(e) {
							if ((i++, l.containerState._closeFlow)) {
								(l.containerState._closeFlow = void 0), t && y();
								for (var n, r = l.events.length, a = r; a--; )
									if ("exit" === l.events[a][0] && "chunkFlow" === l.events[a][1].type) {
										n = l.events[a][1].end;
										break;
									}
								v(i);
								for (var u = r; u < l.events.length; ) (l.events[u][1].end = Object.assign({}, n)), u++;
								return xt(l.events, a + 1, 0, l.events.slice(r)), (l.events.length = u), s(e);
							}
							return o(e);
						}
						function s(n) {
							if (i === a.length) {
								if (!t) return d(n);
								if (t.currentConstruct && t.currentConstruct.concrete) return h(n);
								l.interrupt = Boolean(t.currentConstruct && !t._gfmTableDynamicInterruptHack);
							}
							return (l.containerState = {}), e.check(Ht, c, f)(n);
						}
						function c(e) {
							return t && y(), v(i), d(e);
						}
						function f(e) {
							return (l.parser.lazy[l.now().line] = i !== a.length), (r = l.now().offset), h(e);
						}
						function d(t) {
							return (l.containerState = {}), e.attempt(Ht, p, h)(t);
						}
						function p(e) {
							return i++, a.push([l.currentConstruct, l.containerState]), d(e);
						}
						function h(r) {
							return null === r ? (t && y(), v(0), void e.consume(r)) : ((t = t || l.parser.flow(l.now())), e.enter("chunkFlow", { contentType: "flow", previous: n, _tokenizer: t }), m(r));
						}
						function m(t) {
							return null === t ? (g(e.exit("chunkFlow"), !0), v(0), void e.consume(t)) : Dt(t) ? (e.consume(t), g(e.exit("chunkFlow")), (i = 0), (l.interrupt = void 0), o) : (e.consume(t), m);
						}
						function g(e, a) {
							var o = l.sliceStream(e);
							if ((a && o.push(null), (e.previous = n), n && (n.next = e), (n = e), t.defineSkip(e.start), t.write(o), l.parser.lazy[e.start.line])) {
								for (var u = t.events.length; u--; ) if (t.events[u][1].start.offset < r && (!t.events[u][1].end || t.events[u][1].end.offset > r)) return;
								for (var s, c, f = l.events.length, d = f; d--; )
									if ("exit" === l.events[d][0] && "chunkFlow" === l.events[d][1].type) {
										if (s) {
											c = l.events[d][1].end;
											break;
										}
										s = !0;
									}
								for (v(i), u = f; u < l.events.length; ) (l.events[u][1].end = Object.assign({}, c)), u++;
								xt(l.events, d + 1, 0, l.events.slice(f)), (l.events.length = u);
							}
						}
						function v(t) {
							for (var n = a.length; n-- > t; ) {
								var r = a[n];
								(l.containerState = r[1]), r[0].exit.call(l, e);
							}
							a.length = t;
						}
						function y() {
							t.write([null]), (n = void 0), (t = void 0), (l.containerState._closeFlow = void 0);
						}
					},
				},
				Ht = {
					tokenize: function (e, t, n) {
						return Mt(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
					},
				};
			var Vt = {
				tokenize: function (e, t, n) {
					return Mt(
						e,
						function (e) {
							return null === e || Dt(e) ? t(e) : n(e);
						},
						"linePrefix"
					);
				},
				partial: !0,
			};
			function $t(e) {
				for (var t, n, r, l, a, i, o, u = {}, s = -1; ++s < e.length; ) {
					for (; s in u; ) s = u[s];
					if (((t = e[s]), s && "chunkFlow" === t[1].type && "listItemPrefix" === e[s - 1][1].type && ((r = 0) < (i = t[1]._tokenizer.events).length && "lineEndingBlank" === i[r][1].type && (r += 2), r < i.length && "content" === i[r][1].type))) for (; ++r < i.length && "content" !== i[r][1].type; ) "chunkText" === i[r][1].type && ((i[r][1]._isInFirstContentOfListItem = !0), r++);
					if ("enter" === t[0]) t[1].contentType && (Object.assign(u, Wt(e, s)), (s = u[s]), (o = !0));
					else if (t[1]._container) {
						for (r = s, n = void 0; r-- && ("lineEnding" === (l = e[r])[1].type || "lineEndingBlank" === l[1].type); ) "enter" === l[0] && (n && (e[n][1].type = "lineEndingBlank"), (l[1].type = "lineEnding"), (n = r));
						n && ((t[1].end = Object.assign({}, e[n][1].start)), (a = e.slice(n, s)).unshift(t), xt(e, n, s - n + 1, a));
					}
				}
				return !o;
			}
			function Wt(e, t) {
				for (var n, r, l = e[t][1], a = e[t][2], i = t - 1, o = [], u = l._tokenizer || a.parser[l.contentType](l.start), s = u.events, c = [], f = {}, d = -1, p = l, h = 0, m = 0, g = [m]; p; ) {
					for (; e[++i][1] !== p; );
					o.push(i), p._tokenizer || ((n = a.sliceStream(p)), p.next || n.push(null), r && u.defineSkip(p.start), p._isInFirstContentOfListItem && (u._gfmTasklistFirstContentOfListItem = !0), u.write(n), p._isInFirstContentOfListItem && (u._gfmTasklistFirstContentOfListItem = void 0)), (r = p), (p = p.next);
				}
				for (p = l; ++d < s.length; ) "exit" === s[d][0] && "enter" === s[d - 1][0] && s[d][1].type === s[d - 1][1].type && s[d][1].start.line !== s[d][1].end.line && ((m = d + 1), g.push(m), (p._tokenizer = void 0), (p.previous = void 0), (p = p.next));
				for (u.events = [], p ? ((p._tokenizer = void 0), (p.previous = void 0)) : g.pop(), d = g.length; d--; ) {
					var v = s.slice(g[d], g[d + 1]),
						y = o.pop();
					c.unshift([y, y + v.length - 1]), xt(e, y, 2, v);
				}
				for (d = -1; ++d < c.length; ) (f[h + c[d][0]] = h + c[d][1]), (h += c[d][1] - c[d][0] - 1);
				return f;
			}
			var qt = {
					tokenize: function (e, t) {
						var n;
						return function (t) {
							return e.enter("content"), (n = e.enter("chunkContent", { contentType: "content" })), r(t);
						};
						function r(t) {
							return null === t ? l(t) : Dt(t) ? e.check(Qt, a, l)(t) : (e.consume(t), r);
						}
						function l(n) {
							return e.exit("chunkContent"), e.exit("content"), t(n);
						}
						function a(t) {
							return e.consume(t), e.exit("chunkContent"), (n.next = e.enter("chunkContent", { contentType: "content", previous: n })), (n = n.next), r;
						}
					},
					resolve: function (e) {
						return $t(e), e;
					},
				},
				Qt = {
					tokenize: function (e, t, n) {
						var r = this;
						return function (t) {
							return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), Mt(e, l, "linePrefix");
						};
						function l(l) {
							if (null === l || Dt(l)) return n(l);
							var a = r.events[r.events.length - 1];
							return !r.parser.constructs.disable.null.includes("codeIndented") && a && "linePrefix" === a[1].type && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(l) : e.interrupt(r.parser.constructs.flow, n, t)(l);
						}
					},
					partial: !0,
				};
			var Kt = {
				tokenize: function (e) {
					var t = this,
						n = e.attempt(
							Vt,
							function (r) {
								if (null === r) return void e.consume(r);
								return e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), (t.currentConstruct = void 0), n;
							},
							e.attempt(this.parser.constructs.flowInitial, r, Mt(e, e.attempt(this.parser.constructs.flow, r, e.attempt(qt, r)), "linePrefix"))
						);
					return n;
					function r(r) {
						if (null !== r) return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), (t.currentConstruct = void 0), n;
						e.consume(r);
					}
				},
			};
			var Yt = { resolveAll: Jt() },
				Xt = Gt("string"),
				Zt = Gt("text");
			function Gt(e) {
				return {
					tokenize: function (t) {
						var n = this,
							r = this.parser.constructs[e],
							l = t.attempt(r, a, i);
						return a;
						function a(e) {
							return u(e) ? l(e) : i(e);
						}
						function i(e) {
							if (null !== e) return t.enter("data"), t.consume(e), o;
							t.consume(e);
						}
						function o(e) {
							return u(e) ? (t.exit("data"), l(e)) : (t.consume(e), o);
						}
						function u(e) {
							if (null === e) return !0;
							var t = r[e],
								l = -1;
							if (t)
								for (; ++l < t.length; ) {
									var a = t[l];
									if (!a.previous || a.previous.call(n, n.previous)) return !0;
								}
							return !1;
						}
					},
					resolveAll: Jt("text" === e ? en : void 0),
				};
			}
			function Jt(e) {
				return function (t, n) {
					var r,
						l = -1;
					for (; ++l <= t.length; ) void 0 === r ? t[l] && "data" === t[l][1].type && ((r = l), l++) : (t[l] && "data" === t[l][1].type) || (l !== r + 2 && ((t[r][1].end = t[l - 1][1].end), t.splice(r + 2, l - r - 2), (l = r + 2)), (r = void 0));
					return e ? e(t, n) : t;
				};
			}
			function en(e, t) {
				for (var n = 0; ++n <= e.length; )
					if ((n === e.length || "lineEnding" === e[n][1].type) && "data" === e[n - 1][1].type) {
						for (var r = e[n - 1][1], l = t.sliceStream(r), a = l.length, i = -1, o = 0, u = void 0; a--; ) {
							var s = l[a];
							if ("string" === typeof s) {
								for (i = s.length; 32 === s.charCodeAt(i - 1); ) o++, i--;
								if (i) break;
								i = -1;
							} else if (-2 === s) (u = !0), o++;
							else if (-1 !== s) {
								a++;
								break;
							}
						}
						if (o) {
							var c = { type: n === e.length || u || o < 2 ? "lineSuffix" : "hardBreakTrailing", start: { line: r.end.line, column: r.end.column - o, offset: r.end.offset - o, _index: r.start._index + a, _bufferIndex: a ? i : r.start._bufferIndex + i }, end: Object.assign({}, r.end) };
							(r.end = Object.assign({}, c.start)), r.start.offset === r.end.offset ? Object.assign(r, c) : (e.splice(n, 0, ["enter", c, t], ["exit", c, t]), (n += 2));
						}
						n++;
					}
				return e;
			}
			function tn(e, t, n) {
				for (var r = [], l = -1; ++l < e.length; ) {
					var a = e[l].resolveAll;
					a && !r.includes(a) && ((t = a(t, n)), r.push(a));
				}
				return t;
			}
			function nn(e, t, n) {
				var r = Object.assign(n ? Object.assign({}, n) : { line: 1, column: 1, offset: 0 }, { _index: 0, _bufferIndex: -1 }),
					l = {},
					a = [],
					i = [],
					o = [],
					u = {
						consume: function (e) {
							Dt(e) ? (r.line++, (r.column = 1), (r.offset += -3 === e ? 2 : 1), b()) : -1 !== e && (r.column++, r.offset++);
							r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === i[r._index].length && ((r._bufferIndex = -1), r._index++));
							(s.previous = e), !0;
						},
						enter: function (e, t) {
							var n = t || {};
							return (n.type = e), (n.start = p()), s.events.push(["enter", n, s]), o.push(n), n;
						},
						exit: function (e) {
							var t = o.pop();
							return (t.end = p()), s.events.push(["exit", t, s]), t;
						},
						attempt: v(function (e, t) {
							y(e, t.from);
						}),
						check: v(g),
						interrupt: v(g, { interrupt: !0 }),
					},
					s = {
						previous: null,
						code: null,
						containerState: {},
						events: [],
						parser: e,
						sliceStream: f,
						sliceSerialize: function (e, t) {
							return (function (e, t) {
								var n,
									r = -1,
									l = [];
								for (; ++r < e.length; ) {
									var a = e[r],
										i = void 0;
									if ("string" === typeof a) i = a;
									else
										switch (a) {
											case -5:
												i = "\r";
												break;
											case -4:
												i = "\n";
												break;
											case -3:
												i = "\r\n";
												break;
											case -2:
												i = t ? " " : "\t";
												break;
											case -1:
												if (!t && n) continue;
												i = " ";
												break;
											default:
												i = String.fromCharCode(a);
										}
									(n = -2 === a), l.push(i);
								}
								return l.join("");
							})(f(e), t);
						},
						now: p,
						defineSkip: function (e) {
							(l[e.line] = e.column), b();
						},
						write: function (e) {
							if (((i = wt(i, e)), h(), null !== i[i.length - 1])) return [];
							return y(t, 0), (s.events = tn(a, s.events, s)), s.events;
						},
					},
					c = t.tokenize.call(s, u);
				return t.resolveAll && a.push(t), s;
				function f(e) {
					return (function (e, t) {
						var n,
							r = t.start._index,
							l = t.start._bufferIndex,
							a = t.end._index,
							i = t.end._bufferIndex;
						r === a ? (n = [e[r].slice(l, i)]) : ((n = e.slice(r, a)), l > -1 && (n[0] = n[0].slice(l)), i > 0 && n.push(e[a].slice(0, i)));
						return n;
					})(i, e);
				}
				function p() {
					return Object.assign({}, r);
				}
				function h() {
					for (var e; r._index < i.length; ) {
						var t = i[r._index];
						if ("string" === typeof t) for (e = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === e && r._bufferIndex < t.length; ) m(t.charCodeAt(r._bufferIndex));
						else m(t);
					}
				}
				function m(e) {
					void 0, e, (c = c(e));
				}
				function g(e, t) {
					t.restore();
				}
				function v(e, t) {
					return function (n, l, a) {
						var i, c, f, h;
						return Array.isArray(n)
							? m(n)
							: "tokenize" in n
							? m([n])
							: (function (e) {
									return t;
									function t(t) {
										var n = null !== t && e[t],
											r = null !== t && e.null;
										return m([].concat(d(Array.isArray(n) ? n : n ? [n] : []), d(Array.isArray(r) ? r : r ? [r] : [])))(t);
									}
							  })(n);
						function m(e) {
							return (i = e), (c = 0), 0 === e.length ? a : g(e[c]);
						}
						function g(e) {
							return function (n) {
								(h = (function () {
									var e = p(),
										t = s.previous,
										n = s.currentConstruct,
										l = s.events.length,
										a = Array.from(o);
									return { restore: i, from: l };
									function i() {
										(r = e), (s.previous = t), (s.currentConstruct = n), (s.events.length = l), (o = a), b();
									}
								})()),
									(f = e),
									e.partial || (s.currentConstruct = e);
								if (e.name && s.parser.constructs.disable.null.includes(e.name)) return y(n);
								return e.tokenize.call(t ? Object.assign(Object.create(s), t) : s, u, v, y)(n);
							};
						}
						function v(t) {
							return !0, e(f, h), l;
						}
						function y(e) {
							return !0, h.restore(), ++c < i.length ? g(i[c]) : a;
						}
					};
				}
				function y(e, t) {
					e.resolveAll && !a.includes(e) && a.push(e), e.resolve && xt(s.events, t, s.events.length - t, e.resolve(s.events.slice(t), s)), e.resolveTo && (s.events = e.resolveTo(s.events, s));
				}
				function b() {
					r.line in l && r.column < 2 && ((r.column = l[r.line]), (r.offset += l[r.line] - 1));
				}
			}
			var rn = {
				name: "thematicBreak",
				tokenize: function (e, t, n) {
					var r,
						l = 0;
					return function (t) {
						return e.enter("thematicBreak"), (r = t), a(t);
					};
					function a(o) {
						return o === r ? (e.enter("thematicBreakSequence"), i(o)) : zt(o) ? Mt(e, a, "whitespace")(o) : l < 3 || (null !== o && !Dt(o)) ? n(o) : (e.exit("thematicBreak"), t(o));
					}
					function i(t) {
						return t === r ? (e.consume(t), l++, i) : (e.exit("thematicBreakSequence"), a(t));
					}
				},
			};
			var ln = {
					name: "list",
					tokenize: function (e, t, n) {
						var r = this,
							l = r.events[r.events.length - 1],
							a = l && "linePrefix" === l[1].type ? l[2].sliceSerialize(l[1], !0).length : 0,
							i = 0;
						return function (t) {
							var l = r.containerState.type || (42 === t || 43 === t || 45 === t ? "listUnordered" : "listOrdered");
							if ("listUnordered" === l ? !r.containerState.marker || t === r.containerState.marker : Pt(t)) {
								if ((r.containerState.type || ((r.containerState.type = l), e.enter(l, { _container: !0 })), "listUnordered" === l)) return e.enter("listItemPrefix"), 42 === t || 45 === t ? e.check(rn, n, u)(t) : u(t);
								if (!r.interrupt || 49 === t) return e.enter("listItemPrefix"), e.enter("listItemValue"), o(t);
							}
							return n(t);
						};
						function o(t) {
							return Pt(t) && ++i < 10 ? (e.consume(t), o) : (!r.interrupt || i < 2) && (r.containerState.marker ? t === r.containerState.marker : 41 === t || 46 === t) ? (e.exit("listItemValue"), u(t)) : n(t);
						}
						function u(t) {
							return e.enter("listItemMarker"), e.consume(t), e.exit("listItemMarker"), (r.containerState.marker = r.containerState.marker || t), e.check(Vt, r.interrupt ? n : s, e.attempt(an, f, c));
						}
						function s(e) {
							return (r.containerState.initialBlankLine = !0), a++, f(e);
						}
						function c(t) {
							return zt(t) ? (e.enter("listItemPrefixWhitespace"), e.consume(t), e.exit("listItemPrefixWhitespace"), f) : n(t);
						}
						function f(n) {
							return (r.containerState.size = a + r.sliceSerialize(e.exit("listItemPrefix"), !0).length), t(n);
						}
					},
					continuation: {
						tokenize: function (e, t, n) {
							var r = this;
							return (r.containerState._closeFlow = void 0), e.check(Vt, l, a);
							function l(n) {
								return (r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine), Mt(e, t, "listItemIndent", r.containerState.size + 1)(n);
							}
							function a(n) {
								return r.containerState.furtherBlankLines || !zt(n) ? ((r.containerState.furtherBlankLines = void 0), (r.containerState.initialBlankLine = void 0), i(n)) : ((r.containerState.furtherBlankLines = void 0), (r.containerState.initialBlankLine = void 0), e.attempt(on, t, i)(n));
							}
							function i(l) {
								return (r.containerState._closeFlow = !0), (r.interrupt = void 0), Mt(e, e.attempt(ln, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(l);
							}
						},
					},
					exit: function (e) {
						e.exit(this.containerState.type);
					},
				},
				an = {
					tokenize: function (e, t, n) {
						var r = this;
						return Mt(
							e,
							function (e) {
								var l = r.events[r.events.length - 1];
								return !zt(e) && l && "listItemPrefixWhitespace" === l[1].type ? t(e) : n(e);
							},
							"listItemPrefixWhitespace",
							r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5
						);
					},
					partial: !0,
				},
				on = {
					tokenize: function (e, t, n) {
						var r = this;
						return Mt(
							e,
							function (e) {
								var l = r.events[r.events.length - 1];
								return l && "listItemIndent" === l[1].type && l[2].sliceSerialize(l[1], !0).length === r.containerState.size ? t(e) : n(e);
							},
							"listItemIndent",
							r.containerState.size + 1
						);
					},
					partial: !0,
				};
			var un = {
				name: "blockQuote",
				tokenize: function (e, t, n) {
					var r = this;
					return function (t) {
						if (62 === t) {
							var a = r.containerState;
							return a.open || (e.enter("blockQuote", { _container: !0 }), (a.open = !0)), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(t), e.exit("blockQuoteMarker"), l;
						}
						return n(t);
					};
					function l(n) {
						return zt(n) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(n), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(n));
					}
				},
				continuation: {
					tokenize: function (e, t, n) {
						return Mt(e, e.attempt(un, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
					},
				},
				exit: function (e) {
					e.exit("blockQuote");
				},
			};
			function sn(e, t, n, r, l, a, i, o, u) {
				var s = u || Number.POSITIVE_INFINITY,
					c = 0;
				return function (t) {
					if (60 === t) return e.enter(r), e.enter(l), e.enter(a), e.consume(t), e.exit(a), f;
					if (null === t || 41 === t || _t(t)) return n(t);
					return e.enter(r), e.enter(i), e.enter(o), e.enter("chunkString", { contentType: "string" }), h(t);
				};
				function f(n) {
					return 62 === n ? (e.enter(a), e.consume(n), e.exit(a), e.exit(l), e.exit(r), t) : (e.enter(o), e.enter("chunkString", { contentType: "string" }), d(n));
				}
				function d(t) {
					return 62 === t ? (e.exit("chunkString"), e.exit(o), f(t)) : null === t || 60 === t || Dt(t) ? n(t) : (e.consume(t), 92 === t ? p : d);
				}
				function p(t) {
					return 60 === t || 62 === t || 92 === t ? (e.consume(t), d) : d(t);
				}
				function h(l) {
					return 40 === l ? (++c > s ? n(l) : (e.consume(l), h)) : 41 === l ? (c-- ? (e.consume(l), h) : (e.exit("chunkString"), e.exit(o), e.exit(i), e.exit(r), t(l))) : null === l || Ot(l) ? (c ? n(l) : (e.exit("chunkString"), e.exit(o), e.exit(i), e.exit(r), t(l))) : _t(l) ? n(l) : (e.consume(l), 92 === l ? m : h);
				}
				function m(t) {
					return 40 === t || 41 === t || 92 === t ? (e.consume(t), h) : h(t);
				}
			}
			function cn(e, t, n, r, l, a) {
				var i,
					o = this,
					u = 0;
				return function (t) {
					return e.enter(r), e.enter(l), e.consume(t), e.exit(l), e.enter(a), s;
				};
				function s(f) {
					return null === f || 91 === f || (93 === f && !i) || (94 === f && !u && "_hiddenFootnoteSupport" in o.parser.constructs) || u > 999 ? n(f) : 93 === f ? (e.exit(a), e.enter(l), e.consume(f), e.exit(l), e.exit(r), t) : Dt(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), s) : (e.enter("chunkString", { contentType: "string" }), c(f));
				}
				function c(t) {
					return null === t || 91 === t || 93 === t || Dt(t) || u++ > 999 ? (e.exit("chunkString"), s(t)) : (e.consume(t), (i = i || !zt(t)), 92 === t ? f : c);
				}
				function f(t) {
					return 91 === t || 92 === t || 93 === t ? (e.consume(t), u++, c) : c(t);
				}
			}
			function fn(e, t, n, r, l, a) {
				var i;
				return function (t) {
					return e.enter(r), e.enter(l), e.consume(t), e.exit(l), (i = 40 === t ? 41 : t), o;
				};
				function o(n) {
					return n === i ? (e.enter(l), e.consume(n), e.exit(l), e.exit(r), t) : (e.enter(a), u(n));
				}
				function u(t) {
					return t === i ? (e.exit(a), o(i)) : null === t ? n(t) : Dt(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), Mt(e, u, "linePrefix")) : (e.enter("chunkString", { contentType: "string" }), s(t));
				}
				function s(t) {
					return t === i || null === t || Dt(t) ? (e.exit("chunkString"), u(t)) : (e.consume(t), 92 === t ? c : s);
				}
				function c(t) {
					return t === i || 92 === t ? (e.consume(t), s) : s(t);
				}
			}
			function dn(e, t) {
				var n;
				return function r(l) {
					if (Dt(l)) return e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), (n = !0), r;
					if (zt(l)) return Mt(e, r, n ? "linePrefix" : "lineSuffix")(l);
					return t(l);
				};
			}
			function pn(e) {
				return e
					.replace(/[\t\n\r ]+/g, " ")
					.replace(/^ | $/g, "")
					.toLowerCase()
					.toUpperCase();
			}
			var hn = {
					name: "definition",
					tokenize: function (e, t, n) {
						var r,
							l = this;
						return function (t) {
							return e.enter("definition"), cn.call(l, e, a, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(t);
						};
						function a(t) {
							return (r = pn(l.sliceSerialize(l.events[l.events.length - 1][1]).slice(1, -1))), 58 === t ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), dn(e, sn(e, e.attempt(mn, Mt(e, i, "whitespace"), Mt(e, i, "whitespace")), n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString"))) : n(t);
						}
						function i(a) {
							return null === a || Dt(a) ? (e.exit("definition"), l.parser.defined.includes(r) || l.parser.defined.push(r), t(a)) : n(a);
						}
					},
				},
				mn = {
					tokenize: function (e, t, n) {
						return function (t) {
							return Ot(t) ? dn(e, r)(t) : n(t);
						};
						function r(t) {
							return 34 === t || 39 === t || 40 === t ? fn(e, Mt(e, l, "whitespace"), n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(t) : n(t);
						}
						function l(e) {
							return null === e || Dt(e) ? t(e) : n(e);
						}
					},
					partial: !0,
				};
			var gn = {
					name: "codeIndented",
					tokenize: function (e, t, n) {
						var r = this;
						return function (t) {
							return e.enter("codeIndented"), Mt(e, l, "linePrefix", 5)(t);
						};
						function l(e) {
							var t = r.events[r.events.length - 1];
							return t && "linePrefix" === t[1].type && t[2].sliceSerialize(t[1], !0).length >= 4 ? a(e) : n(e);
						}
						function a(t) {
							return null === t ? o(t) : Dt(t) ? e.attempt(vn, a, o)(t) : (e.enter("codeFlowValue"), i(t));
						}
						function i(t) {
							return null === t || Dt(t) ? (e.exit("codeFlowValue"), a(t)) : (e.consume(t), i);
						}
						function o(n) {
							return e.exit("codeIndented"), t(n);
						}
					},
				},
				vn = {
					tokenize: function (e, t, n) {
						var r = this;
						return l;
						function l(t) {
							return r.parser.lazy[r.now().line] ? n(t) : Dt(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), l) : Mt(e, a, "linePrefix", 5)(t);
						}
						function a(e) {
							var a = r.events[r.events.length - 1];
							return a && "linePrefix" === a[1].type && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(e) : Dt(e) ? l(e) : n(e);
						}
					},
					partial: !0,
				};
			var yn = {
				name: "headingAtx",
				tokenize: function (e, t, n) {
					var r = this,
						l = 0;
					return function (t) {
						return e.enter("atxHeading"), e.enter("atxHeadingSequence"), a(t);
					};
					function a(o) {
						return 35 === o && l++ < 6 ? (e.consume(o), a) : null === o || Ot(o) ? (e.exit("atxHeadingSequence"), r.interrupt ? t(o) : i(o)) : n(o);
					}
					function i(n) {
						return 35 === n ? (e.enter("atxHeadingSequence"), o(n)) : null === n || Dt(n) ? (e.exit("atxHeading"), t(n)) : zt(n) ? Mt(e, i, "whitespace")(n) : (e.enter("atxHeadingText"), u(n));
					}
					function o(t) {
						return 35 === t ? (e.consume(t), o) : (e.exit("atxHeadingSequence"), i(t));
					}
					function u(t) {
						return null === t || 35 === t || Ot(t) ? (e.exit("atxHeadingText"), i(t)) : (e.consume(t), u);
					}
				},
				resolve: function (e, t) {
					var n,
						r,
						l = e.length - 2,
						a = 3;
					"whitespace" === e[a][1].type && (a += 2);
					l - 2 > a && "whitespace" === e[l][1].type && (l -= 2);
					"atxHeadingSequence" === e[l][1].type && (a === l - 1 || (l - 4 > a && "whitespace" === e[l - 2][1].type)) && (l -= a + 1 === l ? 2 : 4);
					l > a &&
						xt(e, a, l - a + 1, [
							["enter", (n = { type: "atxHeadingText", start: e[a][1].start, end: e[l][1].end }), t],
							["enter", (r = { type: "chunkText", start: e[a][1].start, end: e[l][1].end, contentType: "text" }), t],
							["exit", r, t],
							["exit", n, t],
						]);
					return e;
				},
			};
			var bn = {
				name: "setextUnderline",
				tokenize: function (e, t, n) {
					var r,
						l,
						a = this,
						i = a.events.length;
					for (; i--; )
						if ("lineEnding" !== a.events[i][1].type && "linePrefix" !== a.events[i][1].type && "content" !== a.events[i][1].type) {
							l = "paragraph" === a.events[i][1].type;
							break;
						}
					return function (t) {
						if (!a.parser.lazy[a.now().line] && (a.interrupt || l)) return e.enter("setextHeadingLine"), e.enter("setextHeadingLineSequence"), (r = t), o(t);
						return n(t);
					};
					function o(t) {
						return t === r ? (e.consume(t), o) : (e.exit("setextHeadingLineSequence"), Mt(e, u, "lineSuffix")(t));
					}
					function u(r) {
						return null === r || Dt(r) ? (e.exit("setextHeadingLine"), t(r)) : n(r);
					}
				},
				resolveTo: function (e, t) {
					var n,
						r,
						l,
						a = e.length;
					for (; a--; )
						if ("enter" === e[a][0]) {
							if ("content" === e[a][1].type) {
								n = a;
								break;
							}
							"paragraph" === e[a][1].type && (r = a);
						} else "content" === e[a][1].type && e.splice(a, 1), l || "definition" !== e[a][1].type || (l = a);
					var i = { type: "setextHeading", start: Object.assign({}, e[r][1].start), end: Object.assign({}, e[e.length - 1][1].end) };
					(e[r][1].type = "setextHeadingText"), l ? (e.splice(r, 0, ["enter", i, t]), e.splice(l + 1, 0, ["exit", e[n][1], t]), (e[n][1].end = Object.assign({}, e[l][1].end))) : (e[n][1] = i);
					return e.push(["exit", i, t]), e;
				},
			};
			var xn = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "section", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"],
				wn = ["pre", "script", "style", "textarea"],
				kn = {
					name: "htmlFlow",
					tokenize: function (e, t, n) {
						var r,
							l,
							a,
							i,
							o,
							u = this;
						return function (t) {
							return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(t), s;
						};
						function s(i) {
							return 33 === i ? (e.consume(i), c) : 47 === i ? (e.consume(i), p) : 63 === i ? (e.consume(i), (r = 3), u.interrupt ? t : D) : jt(i) ? (e.consume(i), (a = String.fromCharCode(i)), (l = !0), h) : n(i);
						}
						function c(l) {
							return 45 === l ? (e.consume(l), (r = 2), f) : 91 === l ? (e.consume(l), (r = 5), (a = "CDATA["), (i = 0), d) : jt(l) ? (e.consume(l), (r = 4), u.interrupt ? t : D) : n(l);
						}
						function f(r) {
							return 45 === r ? (e.consume(r), u.interrupt ? t : D) : n(r);
						}
						function d(r) {
							return r === a.charCodeAt(i++) ? (e.consume(r), i === a.length ? (u.interrupt ? t : j) : d) : n(r);
						}
						function p(t) {
							return jt(t) ? (e.consume(t), (a = String.fromCharCode(t)), h) : n(t);
						}
						function h(i) {
							return null === i || 47 === i || 62 === i || Ot(i) ? (47 !== i && l && wn.includes(a.toLowerCase()) ? ((r = 1), u.interrupt ? t(i) : j(i)) : xn.includes(a.toLowerCase()) ? ((r = 6), 47 === i ? (e.consume(i), m) : u.interrupt ? t(i) : j(i)) : ((r = 7), u.interrupt && !u.parser.lazy[u.now().line] ? n(i) : l ? v(i) : g(i))) : 45 === i || Lt(i) ? (e.consume(i), (a += String.fromCharCode(i)), h) : n(i);
						}
						function m(r) {
							return 62 === r ? (e.consume(r), u.interrupt ? t : j) : n(r);
						}
						function g(t) {
							return zt(t) ? (e.consume(t), g) : C(t);
						}
						function v(t) {
							return 47 === t ? (e.consume(t), C) : 58 === t || 95 === t || jt(t) ? (e.consume(t), y) : zt(t) ? (e.consume(t), v) : C(t);
						}
						function y(t) {
							return 45 === t || 46 === t || 58 === t || 95 === t || Lt(t) ? (e.consume(t), y) : b(t);
						}
						function b(t) {
							return 61 === t ? (e.consume(t), x) : zt(t) ? (e.consume(t), b) : v(t);
						}
						function x(t) {
							return null === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 34 === t || 39 === t ? (e.consume(t), (o = t), w) : zt(t) ? (e.consume(t), x) : ((o = null), k(t));
						}
						function w(t) {
							return null === t || Dt(t) ? n(t) : t === o ? (e.consume(t), S) : (e.consume(t), w);
						}
						function k(t) {
							return null === t || 34 === t || 39 === t || 60 === t || 61 === t || 62 === t || 96 === t || Ot(t) ? b(t) : (e.consume(t), k);
						}
						function S(e) {
							return 47 === e || 62 === e || zt(e) ? v(e) : n(e);
						}
						function C(t) {
							return 62 === t ? (e.consume(t), E) : n(t);
						}
						function E(t) {
							return zt(t) ? (e.consume(t), E) : null === t || Dt(t) ? j(t) : n(t);
						}
						function j(t) {
							return 45 === t && 2 === r ? (e.consume(t), T) : 60 === t && 1 === r ? (e.consume(t), F) : 62 === t && 4 === r ? (e.consume(t), z) : 63 === t && 3 === r ? (e.consume(t), D) : 93 === t && 5 === r ? (e.consume(t), O) : !Dt(t) || (6 !== r && 7 !== r) ? (null === t || Dt(t) ? P(t) : (e.consume(t), j)) : e.check(Sn, z, P)(t);
						}
						function P(t) {
							return e.exit("htmlFlowData"), N(t);
						}
						function N(t) {
							return null === t ? A(t) : Dt(t) ? e.attempt({ tokenize: L, partial: !0 }, N, A)(t) : (e.enter("htmlFlowData"), j(t));
						}
						function L(e, t, n) {
							return function (t) {
								return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), r;
							};
							function r(e) {
								return u.parser.lazy[u.now().line] ? n(e) : t(e);
							}
						}
						function T(t) {
							return 45 === t ? (e.consume(t), D) : j(t);
						}
						function F(t) {
							return 47 === t ? (e.consume(t), (a = ""), _) : j(t);
						}
						function _(t) {
							return 62 === t && wn.includes(a.toLowerCase()) ? (e.consume(t), z) : jt(t) && a.length < 8 ? (e.consume(t), (a += String.fromCharCode(t)), _) : j(t);
						}
						function O(t) {
							return 93 === t ? (e.consume(t), D) : j(t);
						}
						function D(t) {
							return 62 === t ? (e.consume(t), z) : 45 === t && 2 === r ? (e.consume(t), D) : j(t);
						}
						function z(t) {
							return null === t || Dt(t) ? (e.exit("htmlFlowData"), A(t)) : (e.consume(t), z);
						}
						function A(n) {
							return e.exit("htmlFlow"), t(n);
						}
					},
					resolveTo: function (e) {
						var t = e.length;
						for (; t-- && ("enter" !== e[t][0] || "htmlFlow" !== e[t][1].type); );
						t > 1 && "linePrefix" === e[t - 2][1].type && ((e[t][1].start = e[t - 2][1].start), (e[t + 1][1].start = e[t - 2][1].start), e.splice(t - 2, 2));
						return e;
					},
					concrete: !0,
				},
				Sn = {
					tokenize: function (e, t, n) {
						return function (r) {
							return e.exit("htmlFlowData"), e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), e.attempt(Vt, t, n);
						};
					},
					partial: !0,
				};
			var Cn = {
				name: "codeFenced",
				tokenize: function (e, t, n) {
					var r,
						l = this,
						a = {
							tokenize: function (e, t, n) {
								var l = 0;
								return Mt(e, a, "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
								function a(t) {
									return e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), i(t);
								}
								function i(t) {
									return t === r ? (e.consume(t), l++, i) : l < s ? n(t) : (e.exit("codeFencedFenceSequence"), Mt(e, o, "whitespace")(t));
								}
								function o(r) {
									return null === r || Dt(r) ? (e.exit("codeFencedFence"), t(r)) : n(r);
								}
							},
							partial: !0,
						},
						i = {
							tokenize: function (e, t, n) {
								var r = this;
								return l;
								function l(t) {
									return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a;
								}
								function a(e) {
									return r.parser.lazy[r.now().line] ? n(e) : t(e);
								}
							},
							partial: !0,
						},
						o = this.events[this.events.length - 1],
						u = o && "linePrefix" === o[1].type ? o[2].sliceSerialize(o[1], !0).length : 0,
						s = 0;
					return function (t) {
						return e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), (r = t), c(t);
					};
					function c(t) {
						return t === r ? (e.consume(t), s++, c) : (e.exit("codeFencedFenceSequence"), s < 3 ? n(t) : Mt(e, f, "whitespace")(t));
					}
					function f(t) {
						return null === t || Dt(t) ? m(t) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", { contentType: "string" }), d(t));
					}
					function d(t) {
						return null === t || Ot(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), Mt(e, p, "whitespace")(t)) : 96 === t && t === r ? n(t) : (e.consume(t), d);
					}
					function p(t) {
						return null === t || Dt(t) ? m(t) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", { contentType: "string" }), h(t));
					}
					function h(t) {
						return null === t || Dt(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), m(t)) : 96 === t && t === r ? n(t) : (e.consume(t), h);
					}
					function m(n) {
						return e.exit("codeFencedFence"), l.interrupt ? t(n) : g(n);
					}
					function g(t) {
						return null === t ? y(t) : Dt(t) ? e.attempt(i, e.attempt(a, y, u ? Mt(e, g, "linePrefix", u + 1) : g), y)(t) : (e.enter("codeFlowValue"), v(t));
					}
					function v(t) {
						return null === t || Dt(t) ? (e.exit("codeFlowValue"), g(t)) : (e.consume(t), v);
					}
					function y(n) {
						return e.exit("codeFenced"), t(n);
					}
				},
				concrete: !0,
			};
			var En = document.createElement("i");
			function jn(e) {
				var t = "&" + e + ";";
				En.innerHTML = t;
				var n = En.textContent;
				return (59 !== n.charCodeAt(n.length - 1) || "semi" === e) && n !== t && n;
			}
			var Pn = {
				name: "characterReference",
				tokenize: function (e, t, n) {
					var r,
						l,
						a = this,
						i = 0;
					return function (t) {
						return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(t), e.exit("characterReferenceMarker"), o;
					};
					function o(t) {
						return 35 === t ? (e.enter("characterReferenceMarkerNumeric"), e.consume(t), e.exit("characterReferenceMarkerNumeric"), u) : (e.enter("characterReferenceValue"), (r = 31), (l = Lt), s(t));
					}
					function u(t) {
						return 88 === t || 120 === t ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(t), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), (r = 6), (l = Nt), s) : (e.enter("characterReferenceValue"), (r = 7), (l = Pt), s(t));
					}
					function s(o) {
						var u;
						return 59 === o && i ? ((u = e.exit("characterReferenceValue")), l !== Lt || jn(a.sliceSerialize(u)) ? (e.enter("characterReferenceMarker"), e.consume(o), e.exit("characterReferenceMarker"), e.exit("characterReference"), t) : n(o)) : l(o) && i++ < r ? (e.consume(o), s) : n(o);
					}
				},
			};
			var Nn = {
				name: "characterEscape",
				tokenize: function (e, t, n) {
					return function (t) {
						return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(t), e.exit("escapeMarker"), r;
					};
					function r(r) {
						return Tt(r) ? (e.enter("characterEscapeValue"), e.consume(r), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(r);
					}
				},
			};
			var Ln = {
				name: "lineEnding",
				tokenize: function (e, t) {
					return function (n) {
						return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), Mt(e, t, "linePrefix");
					};
				},
			};
			var Tn = {
					name: "labelEnd",
					tokenize: function (e, t, n) {
						var r,
							l,
							a = this,
							i = a.events.length;
						for (; i--; )
							if (("labelImage" === a.events[i][1].type || "labelLink" === a.events[i][1].type) && !a.events[i][1]._balanced) {
								r = a.events[i][1];
								break;
							}
						return function (t) {
							if (!r) return n(t);
							return r._inactive ? u(t) : ((l = a.parser.defined.includes(pn(a.sliceSerialize({ start: r.end, end: a.now() })))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelEnd"), o);
						};
						function o(n) {
							return 40 === n ? e.attempt(Fn, t, l ? t : u)(n) : 91 === n ? e.attempt(_n, t, l ? e.attempt(On, t, u) : u)(n) : l ? t(n) : u(n);
						}
						function u(e) {
							return (r._balanced = !0), n(e);
						}
					},
					resolveTo: function (e, t) {
						var n,
							r,
							l,
							a,
							i = e.length,
							o = 0;
						for (; i--; )
							if (((n = e[i][1]), r)) {
								if ("link" === n.type || ("labelLink" === n.type && n._inactive)) break;
								"enter" === e[i][0] && "labelLink" === n.type && (n._inactive = !0);
							} else if (l) {
								if ("enter" === e[i][0] && ("labelImage" === n.type || "labelLink" === n.type) && !n._balanced && ((r = i), "labelLink" !== n.type)) {
									o = 2;
									break;
								}
							} else "labelEnd" === n.type && (l = i);
						var u = { type: "labelLink" === e[r][1].type ? "link" : "image", start: Object.assign({}, e[r][1].start), end: Object.assign({}, e[e.length - 1][1].end) },
							s = { type: "label", start: Object.assign({}, e[r][1].start), end: Object.assign({}, e[l][1].end) },
							c = { type: "labelText", start: Object.assign({}, e[r + o + 2][1].end), end: Object.assign({}, e[l - 2][1].start) };
						return (
							(a = wt(
								(a = [
									["enter", u, t],
									["enter", s, t],
								]),
								e.slice(r + 1, r + o + 3)
							)),
							(a = wt(a, [["enter", c, t]])),
							(a = wt(a, tn(t.parser.constructs.insideSpan.null, e.slice(r + o + 4, l - 3), t))),
							(a = wt(a, [["exit", c, t], e[l - 2], e[l - 1], ["exit", s, t]])),
							(a = wt(a, e.slice(l + 1))),
							(a = wt(a, [["exit", u, t]])),
							xt(e, r, e.length, a),
							e
						);
					},
					resolveAll: function (e) {
						var t,
							n = -1;
						for (; ++n < e.length; ) ("labelImage" !== (t = e[n][1]).type && "labelLink" !== t.type && "labelEnd" !== t.type) || (e.splice(n + 1, "labelImage" === t.type ? 4 : 2), (t.type = "data"), n++);
						return e;
					},
				},
				Fn = {
					tokenize: function (e, t, n) {
						return function (t) {
							return e.enter("resource"), e.enter("resourceMarker"), e.consume(t), e.exit("resourceMarker"), dn(e, r);
						};
						function r(t) {
							return 41 === t ? i(t) : sn(e, l, n, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(t);
						}
						function l(t) {
							return Ot(t) ? dn(e, a)(t) : i(t);
						}
						function a(t) {
							return 34 === t || 39 === t || 40 === t ? fn(e, dn(e, i), n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(t) : i(t);
						}
						function i(r) {
							return 41 === r ? (e.enter("resourceMarker"), e.consume(r), e.exit("resourceMarker"), e.exit("resource"), t) : n(r);
						}
					},
				},
				_n = {
					tokenize: function (e, t, n) {
						var r = this;
						return function (t) {
							return cn.call(r, e, l, n, "reference", "referenceMarker", "referenceString")(t);
						};
						function l(e) {
							return r.parser.defined.includes(pn(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(e) : n(e);
						}
					},
				},
				On = {
					tokenize: function (e, t, n) {
						return function (t) {
							return e.enter("reference"), e.enter("referenceMarker"), e.consume(t), e.exit("referenceMarker"), r;
						};
						function r(r) {
							return 93 === r ? (e.enter("referenceMarker"), e.consume(r), e.exit("referenceMarker"), e.exit("reference"), t) : n(r);
						}
					},
				};
			var Dn = {
				name: "labelStartImage",
				tokenize: function (e, t, n) {
					var r = this;
					return function (t) {
						return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(t), e.exit("labelImageMarker"), l;
					};
					function l(t) {
						return 91 === t ? (e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelImage"), a) : n(t);
					}
					function a(e) {
						return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e);
					}
				},
				resolveAll: Tn.resolveAll,
			};
			function zn(e) {
				return null === e || Ot(e) || At(e) ? 1 : Rt(e) ? 2 : void 0;
			}
			var An = {
				name: "attention",
				tokenize: function (e, t) {
					var n,
						r = this.parser.constructs.attentionMarkers.null,
						l = this.previous,
						a = zn(l);
					return function (t) {
						return e.enter("attentionSequence"), (n = t), i(t);
					};
					function i(o) {
						if (o === n) return e.consume(o), i;
						var u = e.exit("attentionSequence"),
							s = zn(o),
							c = !s || (2 === s && a) || r.includes(o),
							f = !a || (2 === a && s) || r.includes(l);
						return (u._open = Boolean(42 === n ? c : c && (a || !f))), (u._close = Boolean(42 === n ? f : f && (s || !c))), t(o);
					}
				},
				resolveAll: function (e, t) {
					var n,
						r,
						l,
						a,
						i,
						o,
						u,
						s,
						c = -1;
					for (; ++c < e.length; )
						if ("enter" === e[c][0] && "attentionSequence" === e[c][1].type && e[c][1]._close)
							for (n = c; n--; )
								if ("exit" === e[n][0] && "attentionSequence" === e[n][1].type && e[n][1]._open && t.sliceSerialize(e[n][1]).charCodeAt(0) === t.sliceSerialize(e[c][1]).charCodeAt(0)) {
									if ((e[n][1]._close || e[c][1]._open) && (e[c][1].end.offset - e[c][1].start.offset) % 3 && !((e[n][1].end.offset - e[n][1].start.offset + e[c][1].end.offset - e[c][1].start.offset) % 3)) continue;
									o = e[n][1].end.offset - e[n][1].start.offset > 1 && e[c][1].end.offset - e[c][1].start.offset > 1 ? 2 : 1;
									var f = Object.assign({}, e[n][1].end),
										d = Object.assign({}, e[c][1].start);
									Rn(f, -o),
										Rn(d, o),
										(a = { type: o > 1 ? "strongSequence" : "emphasisSequence", start: f, end: Object.assign({}, e[n][1].end) }),
										(i = { type: o > 1 ? "strongSequence" : "emphasisSequence", start: Object.assign({}, e[c][1].start), end: d }),
										(l = { type: o > 1 ? "strongText" : "emphasisText", start: Object.assign({}, e[n][1].end), end: Object.assign({}, e[c][1].start) }),
										(r = { type: o > 1 ? "strong" : "emphasis", start: Object.assign({}, a.start), end: Object.assign({}, i.end) }),
										(e[n][1].end = Object.assign({}, a.start)),
										(e[c][1].start = Object.assign({}, i.end)),
										(u = []),
										e[n][1].end.offset - e[n][1].start.offset &&
											(u = wt(u, [
												["enter", e[n][1], t],
												["exit", e[n][1], t],
											])),
										(u = wt(u, [
											["enter", r, t],
											["enter", a, t],
											["exit", a, t],
											["enter", l, t],
										])),
										(u = wt(u, tn(t.parser.constructs.insideSpan.null, e.slice(n + 1, c), t))),
										(u = wt(u, [
											["exit", l, t],
											["enter", i, t],
											["exit", i, t],
											["exit", r, t],
										])),
										e[c][1].end.offset - e[c][1].start.offset
											? ((s = 2),
											  (u = wt(u, [
													["enter", e[c][1], t],
													["exit", e[c][1], t],
											  ])))
											: (s = 0),
										xt(e, n - 1, c - n + 3, u),
										(c = n + u.length - s - 2);
									break;
								}
					c = -1;
					for (; ++c < e.length; ) "attentionSequence" === e[c][1].type && (e[c][1].type = "data");
					return e;
				},
			};
			function Rn(e, t) {
				(e.column += t), (e.offset += t), (e._bufferIndex += t);
			}
			var In = {
				name: "autolink",
				tokenize: function (e, t, n) {
					var r = 1;
					return function (t) {
						return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(t), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), l;
					};
					function l(t) {
						return jt(t) ? (e.consume(t), a) : Ft(t) ? u(t) : n(t);
					}
					function a(e) {
						return 43 === e || 45 === e || 46 === e || Lt(e) ? i(e) : u(e);
					}
					function i(t) {
						return 58 === t ? (e.consume(t), o) : (43 === t || 45 === t || 46 === t || Lt(t)) && r++ < 32 ? (e.consume(t), i) : u(t);
					}
					function o(t) {
						return 62 === t ? (e.exit("autolinkProtocol"), d(t)) : null === t || 32 === t || 60 === t || _t(t) ? n(t) : (e.consume(t), o);
					}
					function u(t) {
						return 64 === t ? (e.consume(t), (r = 0), s) : Ft(t) ? (e.consume(t), u) : n(t);
					}
					function s(e) {
						return Lt(e) ? c(e) : n(e);
					}
					function c(t) {
						return 46 === t ? (e.consume(t), (r = 0), s) : 62 === t ? ((e.exit("autolinkProtocol").type = "autolinkEmail"), d(t)) : f(t);
					}
					function f(t) {
						return (45 === t || Lt(t)) && r++ < 63 ? (e.consume(t), 45 === t ? f : c) : n(t);
					}
					function d(n) {
						return e.enter("autolinkMarker"), e.consume(n), e.exit("autolinkMarker"), e.exit("autolink"), t;
					}
				},
			};
			var Mn = {
				name: "htmlText",
				tokenize: function (e, t, n) {
					var r,
						l,
						a,
						i,
						o = this;
					return function (t) {
						return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(t), u;
					};
					function u(t) {
						return 33 === t ? (e.consume(t), s) : 47 === t ? (e.consume(t), k) : 63 === t ? (e.consume(t), x) : jt(t) ? (e.consume(t), E) : n(t);
					}
					function s(t) {
						return 45 === t ? (e.consume(t), c) : 91 === t ? (e.consume(t), (l = "CDATA["), (a = 0), m) : jt(t) ? (e.consume(t), b) : n(t);
					}
					function c(t) {
						return 45 === t ? (e.consume(t), f) : n(t);
					}
					function f(t) {
						return null === t || 62 === t ? n(t) : 45 === t ? (e.consume(t), d) : p(t);
					}
					function d(e) {
						return null === e || 62 === e ? n(e) : p(e);
					}
					function p(t) {
						return null === t ? n(t) : 45 === t ? (e.consume(t), h) : Dt(t) ? ((i = p), O(t)) : (e.consume(t), p);
					}
					function h(t) {
						return 45 === t ? (e.consume(t), z) : p(t);
					}
					function m(t) {
						return t === l.charCodeAt(a++) ? (e.consume(t), a === l.length ? g : m) : n(t);
					}
					function g(t) {
						return null === t ? n(t) : 93 === t ? (e.consume(t), v) : Dt(t) ? ((i = g), O(t)) : (e.consume(t), g);
					}
					function v(t) {
						return 93 === t ? (e.consume(t), y) : g(t);
					}
					function y(t) {
						return 62 === t ? z(t) : 93 === t ? (e.consume(t), y) : g(t);
					}
					function b(t) {
						return null === t || 62 === t ? z(t) : Dt(t) ? ((i = b), O(t)) : (e.consume(t), b);
					}
					function x(t) {
						return null === t ? n(t) : 63 === t ? (e.consume(t), w) : Dt(t) ? ((i = x), O(t)) : (e.consume(t), x);
					}
					function w(e) {
						return 62 === e ? z(e) : x(e);
					}
					function k(t) {
						return jt(t) ? (e.consume(t), S) : n(t);
					}
					function S(t) {
						return 45 === t || Lt(t) ? (e.consume(t), S) : C(t);
					}
					function C(t) {
						return Dt(t) ? ((i = C), O(t)) : zt(t) ? (e.consume(t), C) : z(t);
					}
					function E(t) {
						return 45 === t || Lt(t) ? (e.consume(t), E) : 47 === t || 62 === t || Ot(t) ? j(t) : n(t);
					}
					function j(t) {
						return 47 === t ? (e.consume(t), z) : 58 === t || 95 === t || jt(t) ? (e.consume(t), P) : Dt(t) ? ((i = j), O(t)) : zt(t) ? (e.consume(t), j) : z(t);
					}
					function P(t) {
						return 45 === t || 46 === t || 58 === t || 95 === t || Lt(t) ? (e.consume(t), P) : N(t);
					}
					function N(t) {
						return 61 === t ? (e.consume(t), L) : Dt(t) ? ((i = N), O(t)) : zt(t) ? (e.consume(t), N) : j(t);
					}
					function L(t) {
						return null === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 34 === t || 39 === t ? (e.consume(t), (r = t), T) : Dt(t) ? ((i = L), O(t)) : zt(t) ? (e.consume(t), L) : (e.consume(t), (r = void 0), _);
					}
					function T(t) {
						return t === r ? (e.consume(t), F) : null === t ? n(t) : Dt(t) ? ((i = T), O(t)) : (e.consume(t), T);
					}
					function F(e) {
						return 62 === e || 47 === e || Ot(e) ? j(e) : n(e);
					}
					function _(t) {
						return null === t || 34 === t || 39 === t || 60 === t || 61 === t || 96 === t ? n(t) : 62 === t || Ot(t) ? j(t) : (e.consume(t), _);
					}
					function O(t) {
						return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), Mt(e, D, "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
					}
					function D(t) {
						return e.enter("htmlTextData"), i(t);
					}
					function z(r) {
						return 62 === r ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(r);
					}
				},
			};
			var Bn = {
				name: "labelStartLink",
				tokenize: function (e, t, n) {
					var r = this;
					return function (t) {
						return e.enter("labelLink"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelLink"), l;
					};
					function l(e) {
						return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e);
					}
				},
				resolveAll: Tn.resolveAll,
			};
			var Un = {
				name: "hardBreakEscape",
				tokenize: function (e, t, n) {
					return function (t) {
						return e.enter("hardBreakEscape"), e.enter("escapeMarker"), e.consume(t), r;
					};
					function r(r) {
						return Dt(r) ? (e.exit("escapeMarker"), e.exit("hardBreakEscape"), t(r)) : n(r);
					}
				},
			};
			var Hn,
				Vn,
				$n,
				Wn,
				qn,
				Qn = {
					name: "codeText",
					tokenize: function (e, t, n) {
						var r,
							l,
							a = 0;
						return function (t) {
							return e.enter("codeText"), e.enter("codeTextSequence"), i(t);
						};
						function i(t) {
							return 96 === t ? (e.consume(t), a++, i) : (e.exit("codeTextSequence"), o(t));
						}
						function o(t) {
							return null === t ? n(t) : 96 === t ? ((l = e.enter("codeTextSequence")), (r = 0), s(t)) : 32 === t ? (e.enter("space"), e.consume(t), e.exit("space"), o) : Dt(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), o) : (e.enter("codeTextData"), u(t));
						}
						function u(t) {
							return null === t || 32 === t || 96 === t || Dt(t) ? (e.exit("codeTextData"), o(t)) : (e.consume(t), u);
						}
						function s(n) {
							return 96 === n ? (e.consume(n), r++, s) : r === a ? (e.exit("codeTextSequence"), e.exit("codeText"), t(n)) : ((l.type = "codeTextData"), u(n));
						}
					},
					resolve: function (e) {
						var t,
							n,
							r = e.length - 4,
							l = 3;
						if (("lineEnding" === e[l][1].type || "space" === e[l][1].type) && ("lineEnding" === e[r][1].type || "space" === e[r][1].type))
							for (t = l; ++t < r; )
								if ("codeTextData" === e[t][1].type) {
									(e[l][1].type = "codeTextPadding"), (e[r][1].type = "codeTextPadding"), (l += 2), (r -= 2);
									break;
								}
						(t = l - 1), r++;
						for (; ++t <= r; ) void 0 === n ? t !== r && "lineEnding" !== e[t][1].type && (n = t) : (t !== r && "lineEnding" !== e[t][1].type) || ((e[n][1].type = "codeTextData"), t !== n + 2 && ((e[n][1].end = e[t - 1][1].end), e.splice(n + 2, t - n - 2), (r -= t - n - 2), (t = n + 2)), (n = void 0));
						return e;
					},
					previous: function (e) {
						return 96 !== e || "characterEscape" === this.events[this.events.length - 1][1].type;
					},
				};
			var Kn = (Me((Hn = {}), 42, ln), Me(Hn, 43, ln), Me(Hn, 45, ln), Me(Hn, 48, ln), Me(Hn, 49, ln), Me(Hn, 50, ln), Me(Hn, 51, ln), Me(Hn, 52, ln), Me(Hn, 53, ln), Me(Hn, 54, ln), Me(Hn, 55, ln), Me(Hn, 56, ln), Me(Hn, 57, ln), Me(Hn, 62, un), Hn),
				Yn = Me({}, 91, hn),
				Xn = (Me((Vn = {}), -2, gn), Me(Vn, -1, gn), Me(Vn, 32, gn), Vn),
				Zn = (Me(($n = {}), 35, yn), Me($n, 42, rn), Me($n, 45, [bn, rn]), Me($n, 60, kn), Me($n, 61, bn), Me($n, 95, rn), Me($n, 96, Cn), Me($n, 126, Cn), $n),
				Gn = (Me((Wn = {}), 38, Pn), Me(Wn, 92, Nn), Wn),
				Jn = (Me((qn = {}), -5, Ln), Me(qn, -4, Ln), Me(qn, -3, Ln), Me(qn, 33, Dn), Me(qn, 38, Pn), Me(qn, 42, An), Me(qn, 60, [In, Mn]), Me(qn, 91, Bn), Me(qn, 92, [Un, Nn]), Me(qn, 93, Tn), Me(qn, 95, An), Me(qn, 96, Qn), qn),
				er = { null: [An, Yt] },
				tr = { null: [42, 95] },
				nr = { null: [] };
			var rr = /[\0\t\n\r]/g;
			function lr(e, t) {
				var n = Number.parseInt(e, t);
				return n < 9 || 11 === n || (n > 13 && n < 32) || (n > 126 && n < 160) || (n > 55295 && n < 57344) || (n > 64975 && n < 65008) || 65535 === (65535 & n) || 65534 === (65535 & n) || n > 1114111 ? "\ufffd" : String.fromCharCode(n);
			}
			var ar = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
			function ir(e) {
				return e.replace(ar, or);
			}
			function or(e, t, n) {
				if (t) return t;
				if (35 === n.charCodeAt(0)) {
					var r = n.charCodeAt(1),
						l = 120 === r || 88 === r;
					return lr(n.slice(l ? 2 : 1), l ? 16 : 10);
				}
				return jn(n) || e;
			}
			var ur = {}.hasOwnProperty,
				sr = function (t, n, r) {
					return (
						"string" !== typeof n && ((r = n), (n = void 0)),
						(function (e) {
							var t = {
								transforms: [],
								canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
								enter: {
									autolink: o(ne),
									autolinkProtocol: P,
									autolinkEmail: P,
									atxHeading: o(G),
									blockQuote: o(Q),
									characterEscape: P,
									characterReference: P,
									codeFenced: o(K),
									codeFencedFenceInfo: u,
									codeFencedFenceMeta: u,
									codeIndented: o(K, u),
									codeText: o(Y, u),
									codeTextData: P,
									data: P,
									codeFlowValue: P,
									definition: o(X),
									definitionDestinationString: u,
									definitionLabelString: u,
									definitionTitleString: u,
									emphasis: o(Z),
									hardBreakEscape: o(J),
									hardBreakTrailing: o(J),
									htmlFlow: o(ee, u),
									htmlFlowData: P,
									htmlText: o(ee, u),
									htmlTextData: P,
									image: o(te),
									label: u,
									link: o(ne),
									listItem: o(le),
									listItemValue: h,
									listOrdered: o(re, p),
									listUnordered: o(re),
									paragraph: o(ae),
									reference: U,
									referenceString: u,
									resourceDestinationString: u,
									resourceTitleString: u,
									setextHeading: o(G),
									strong: o(ie),
									thematicBreak: o(ue),
								},
								exit: {
									atxHeading: c(),
									atxHeadingSequence: S,
									autolink: c(),
									autolinkEmail: q,
									autolinkProtocol: W,
									blockQuote: c(),
									characterEscapeValue: N,
									characterReferenceMarkerHexadecimal: V,
									characterReferenceMarkerNumeric: V,
									characterReferenceValue: $,
									codeFenced: c(y),
									codeFencedFence: v,
									codeFencedFenceInfo: m,
									codeFencedFenceMeta: g,
									codeFlowValue: N,
									codeIndented: c(b),
									codeText: c(O),
									codeTextData: N,
									data: N,
									definition: c(),
									definitionDestinationString: k,
									definitionLabelString: x,
									definitionTitleString: w,
									emphasis: c(),
									hardBreakEscape: c(T),
									hardBreakTrailing: c(T),
									htmlFlow: c(F),
									htmlFlowData: N,
									htmlText: c(_),
									htmlTextData: N,
									image: c(z),
									label: R,
									labelText: A,
									lineEnding: L,
									link: c(D),
									listItem: c(),
									listOrdered: c(),
									listUnordered: c(),
									paragraph: c(),
									referenceString: H,
									resourceDestinationString: I,
									resourceTitleString: M,
									resource: B,
									setextHeading: c(j),
									setextHeadingLineSequence: E,
									setextHeadingText: C,
									strong: c(),
									thematicBreak: c(),
								},
							};
							fr(t, (e || {}).mdastExtensions || []);
							var n = {};
							return r;
							function r(e) {
								for (var n = { type: "root", children: [] }, r = { stack: [n], tokenStack: [], config: t, enter: s, exit: f, buffer: u, resume: d, setData: a, getData: i }, o = [], c = -1; ++c < e.length; ) {
									if ("listOrdered" === e[c][1].type || "listUnordered" === e[c][1].type)
										if ("enter" === e[c][0]) o.push(c);
										else c = l(e, o.pop(), c);
								}
								for (c = -1; ++c < e.length; ) {
									var p = t[e[c][0]];
									ur.call(p, e[c][1].type) && p[e[c][1].type].call(Object.assign({ sliceSerialize: e[c][2].sliceSerialize }, r), e[c][1]);
								}
								if (r.tokenStack.length > 0) {
									var h = r.tokenStack[r.tokenStack.length - 1];
									(h[1] || pr).call(r, void 0, h[0]);
								}
								for (n.position = { start: cr(e.length > 0 ? e[0][1].start : { line: 1, column: 1, offset: 0 }), end: cr(e.length > 0 ? e[e.length - 2][1].end : { line: 1, column: 1, offset: 0 }) }, c = -1; ++c < t.transforms.length; ) n = t.transforms[c](n) || n;
								return n;
							}
							function l(e, t, n) {
								for (var r, l, a, i, o = t - 1, u = -1, s = !1; ++o <= n; ) {
									var c = e[o];
									if (("listUnordered" === c[1].type || "listOrdered" === c[1].type || "blockQuote" === c[1].type ? ("enter" === c[0] ? u++ : u--, (i = void 0)) : "lineEndingBlank" === c[1].type ? "enter" === c[0] && (!r || i || u || a || (a = o), (i = void 0)) : "linePrefix" === c[1].type || "listItemValue" === c[1].type || "listItemMarker" === c[1].type || "listItemPrefix" === c[1].type || "listItemPrefixWhitespace" === c[1].type || (i = void 0), (!u && "enter" === c[0] && "listItemPrefix" === c[1].type) || (-1 === u && "exit" === c[0] && ("listUnordered" === c[1].type || "listOrdered" === c[1].type)))) {
										if (r) {
											var f = o;
											for (l = void 0; f--; ) {
												var d = e[f];
												if ("lineEnding" === d[1].type || "lineEndingBlank" === d[1].type) {
													if ("exit" === d[0]) continue;
													l && ((e[l][1].type = "lineEndingBlank"), (s = !0)), (d[1].type = "lineEnding"), (l = f);
												} else if ("linePrefix" !== d[1].type && "blockQuotePrefix" !== d[1].type && "blockQuotePrefixWhitespace" !== d[1].type && "blockQuoteMarker" !== d[1].type && "listItemIndent" !== d[1].type) break;
											}
											a && (!l || a < l) && (r._spread = !0), (r.end = Object.assign({}, l ? e[l][1].start : c[1].end)), e.splice(l || o, 0, ["exit", r, c[2]]), o++, n++;
										}
										"listItemPrefix" === c[1].type && ((r = { type: "listItem", _spread: !1, start: Object.assign({}, c[1].start) }), e.splice(o, 0, ["enter", r, c[2]]), o++, n++, (a = void 0), (i = !0));
									}
								}
								return (e[t][1]._spread = s), n;
							}
							function a(e, t) {
								n[e] = t;
							}
							function i(e) {
								return n[e];
							}
							function o(e, t) {
								return n;
								function n(n) {
									s.call(this, e(n), n), t && t.call(this, n);
								}
							}
							function u() {
								this.stack.push({ type: "fragment", children: [] });
							}
							function s(e, t, n) {
								return this.stack[this.stack.length - 1].children.push(e), this.stack.push(e), this.tokenStack.push([t, n]), (e.position = { start: cr(t.start) }), e;
							}
							function c(e) {
								return t;
								function t(t) {
									e && e.call(this, t), f.call(this, t);
								}
							}
							function f(e, t) {
								var n = this.stack.pop(),
									r = this.tokenStack.pop();
								if (!r) throw new Error("Cannot close `" + e.type + "` (" + Ve({ start: e.start, end: e.end }) + "): it\u2019s not open");
								return r[0].type !== e.type && (t ? t.call(this, e, r[0]) : (r[1] || pr).call(this, e, r[0])), (n.position.end = cr(e.end)), n;
							}
							function d() {
								return (function (e, t) {
									var n = t || vt;
									return yt(e, "boolean" !== typeof n.includeImageAlt || n.includeImageAlt, "boolean" !== typeof n.includeHtml || n.includeHtml);
								})(this.stack.pop());
							}
							function p() {
								a("expectingFirstListItemValue", !0);
							}
							function h(e) {
								i("expectingFirstListItemValue") && ((this.stack[this.stack.length - 2].start = Number.parseInt(this.sliceSerialize(e), 10)), a("expectingFirstListItemValue"));
							}
							function m() {
								var e = this.resume();
								this.stack[this.stack.length - 1].lang = e;
							}
							function g() {
								var e = this.resume();
								this.stack[this.stack.length - 1].meta = e;
							}
							function v() {
								i("flowCodeInside") || (this.buffer(), a("flowCodeInside", !0));
							}
							function y() {
								var e = this.resume();
								(this.stack[this.stack.length - 1].value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "")), a("flowCodeInside");
							}
							function b() {
								var e = this.resume();
								this.stack[this.stack.length - 1].value = e.replace(/(\r?\n|\r)$/g, "");
							}
							function x(e) {
								var t = this.resume(),
									n = this.stack[this.stack.length - 1];
								(n.label = t), (n.identifier = pn(this.sliceSerialize(e)).toLowerCase());
							}
							function w() {
								var e = this.resume();
								this.stack[this.stack.length - 1].title = e;
							}
							function k() {
								var e = this.resume();
								this.stack[this.stack.length - 1].url = e;
							}
							function S(e) {
								var t = this.stack[this.stack.length - 1];
								if (!t.depth) {
									var n = this.sliceSerialize(e).length;
									t.depth = n;
								}
							}
							function C() {
								a("setextHeadingSlurpLineEnding", !0);
							}
							function E(e) {
								this.stack[this.stack.length - 1].depth = 61 === this.sliceSerialize(e).charCodeAt(0) ? 1 : 2;
							}
							function j() {
								a("setextHeadingSlurpLineEnding");
							}
							function P(e) {
								var t = this.stack[this.stack.length - 1],
									n = t.children[t.children.length - 1];
								(n && "text" === n.type) || (((n = oe()).position = { start: cr(e.start) }), t.children.push(n)), this.stack.push(n);
							}
							function N(e) {
								var t = this.stack.pop();
								(t.value += this.sliceSerialize(e)), (t.position.end = cr(e.end));
							}
							function L(e) {
								var n = this.stack[this.stack.length - 1];
								if (i("atHardBreak")) return (n.children[n.children.length - 1].position.end = cr(e.end)), void a("atHardBreak");
								!i("setextHeadingSlurpLineEnding") && t.canContainEols.includes(n.type) && (P.call(this, e), N.call(this, e));
							}
							function T() {
								a("atHardBreak", !0);
							}
							function F() {
								var e = this.resume();
								this.stack[this.stack.length - 1].value = e;
							}
							function _() {
								var e = this.resume();
								this.stack[this.stack.length - 1].value = e;
							}
							function O() {
								var e = this.resume();
								this.stack[this.stack.length - 1].value = e;
							}
							function D() {
								var e = this.stack[this.stack.length - 1];
								if (i("inReference")) {
									var t = i("referenceType") || "shortcut";
									(e.type += "Reference"), (e.referenceType = t), delete e.url, delete e.title;
								} else delete e.identifier, delete e.label;
								a("referenceType");
							}
							function z() {
								var e = this.stack[this.stack.length - 1];
								if (i("inReference")) {
									var t = i("referenceType") || "shortcut";
									(e.type += "Reference"), (e.referenceType = t), delete e.url, delete e.title;
								} else delete e.identifier, delete e.label;
								a("referenceType");
							}
							function A(e) {
								var t = this.sliceSerialize(e),
									n = this.stack[this.stack.length - 2];
								(n.label = ir(t)), (n.identifier = pn(t).toLowerCase());
							}
							function R() {
								var e = this.stack[this.stack.length - 1],
									t = this.resume(),
									n = this.stack[this.stack.length - 1];
								if ((a("inReference", !0), "link" === n.type)) {
									var r = e.children;
									n.children = r;
								} else n.alt = t;
							}
							function I() {
								var e = this.resume();
								this.stack[this.stack.length - 1].url = e;
							}
							function M() {
								var e = this.resume();
								this.stack[this.stack.length - 1].title = e;
							}
							function B() {
								a("inReference");
							}
							function U() {
								a("referenceType", "collapsed");
							}
							function H(e) {
								var t = this.resume(),
									n = this.stack[this.stack.length - 1];
								(n.label = t), (n.identifier = pn(this.sliceSerialize(e)).toLowerCase()), a("referenceType", "full");
							}
							function V(e) {
								a("characterReferenceType", e.type);
							}
							function $(e) {
								var t,
									n = this.sliceSerialize(e),
									r = i("characterReferenceType");
								r ? ((t = lr(n, "characterReferenceMarkerNumeric" === r ? 10 : 16)), a("characterReferenceType")) : (t = jn(n));
								var l = this.stack.pop();
								(l.value += t), (l.position.end = cr(e.end));
							}
							function W(e) {
								N.call(this, e), (this.stack[this.stack.length - 1].url = this.sliceSerialize(e));
							}
							function q(e) {
								N.call(this, e), (this.stack[this.stack.length - 1].url = "mailto:" + this.sliceSerialize(e));
							}
							function Q() {
								return { type: "blockquote", children: [] };
							}
							function K() {
								return { type: "code", lang: null, meta: null, value: "" };
							}
							function Y() {
								return { type: "inlineCode", value: "" };
							}
							function X() {
								return { type: "definition", identifier: "", label: null, title: null, url: "" };
							}
							function Z() {
								return { type: "emphasis", children: [] };
							}
							function G() {
								return { type: "heading", depth: void 0, children: [] };
							}
							function J() {
								return { type: "break" };
							}
							function ee() {
								return { type: "html", value: "" };
							}
							function te() {
								return { type: "image", title: null, url: "", alt: null };
							}
							function ne() {
								return { type: "link", title: null, url: "", children: [] };
							}
							function re(e) {
								return { type: "list", ordered: "listOrdered" === e.type, start: null, spread: e._spread, children: [] };
							}
							function le(e) {
								return { type: "listItem", spread: e._spread, checked: null, children: [] };
							}
							function ae() {
								return { type: "paragraph", children: [] };
							}
							function ie() {
								return { type: "strong", children: [] };
							}
							function oe() {
								return { type: "text", value: "" };
							}
							function ue() {
								return { type: "thematicBreak" };
							}
						})(r)(
							(function (e) {
								for (; !$t(e); );
								return e;
							})(
								(function () {
									var t = { defined: [], lazy: {}, constructs: St([e].concat((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).extensions || [])), content: n(Bt), document: n(Ut), flow: n(Kt), string: n(Xt), text: n(Zt) };
									return t;
									function n(e) {
										return function (n) {
											return nn(t, e, n);
										};
									}
								})(r)
									.document()
									.write(
										(function () {
											var e,
												t = 1,
												n = "",
												r = !0;
											return function (l, a, i) {
												var o,
													u,
													s,
													c,
													f,
													d = [];
												for (l = n + l.toString(a), s = 0, n = "", r && (65279 === l.charCodeAt(0) && s++, (r = void 0)); s < l.length; ) {
													if (((rr.lastIndex = s), (c = (o = rr.exec(l)) && void 0 !== o.index ? o.index : l.length), (f = l.charCodeAt(c)), !o)) {
														n = l.slice(s);
														break;
													}
													if (10 === f && s === c && e) d.push(-3), (e = void 0);
													else
														switch ((e && (d.push(-5), (e = void 0)), s < c && (d.push(l.slice(s, c)), (t += c - s)), f)) {
															case 0:
																d.push(65533), t++;
																break;
															case 9:
																for (u = 4 * Math.ceil(t / 4), d.push(-2); t++ < u; ) d.push(-1);
																break;
															case 10:
																d.push(-4), (t = 1);
																break;
															default:
																(e = !0), (t = 1);
														}
													s = c + 1;
												}
												return i && (e && d.push(-5), n && d.push(n), d.push(null)), d;
											};
										})()(t, n, !0)
									)
							)
						)
					);
				};
			function cr(e) {
				return { line: e.line, column: e.column, offset: e.offset };
			}
			function fr(e, t) {
				for (var n = -1; ++n < t.length; ) {
					var r = t[n];
					Array.isArray(r) ? fr(e, r) : dr(e, r);
				}
			}
			function dr(e, t) {
				var n;
				for (n in t)
					if (ur.call(t, n))
						if ("canContainEols" === n) {
							var r,
								l = t[n];
							if (l) (r = e[n]).push.apply(r, d(l));
						} else if ("transforms" === n) {
							var a,
								i = t[n];
							if (i) (a = e[n]).push.apply(a, d(i));
						} else if ("enter" === n || "exit" === n) {
							var o = t[n];
							o && Object.assign(e[n], o);
						}
			}
			function pr(e, t) {
				throw e ? new Error("Cannot close `" + e.type + "` (" + Ve({ start: e.start, end: e.end }) + "): a different token (`" + t.type + "`, " + Ve({ start: t.start, end: t.end }) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + Ve({ start: t.start, end: t.end }) + ") is still open");
			}
			function hr(e) {
				var t = this;
				Object.assign(this, {
					Parser: function (n) {
						var r = t.data("settings");
						return sr(n, Object.assign({}, r, e, { extensions: t.data("micromarkExtensions") || [], mdastExtensions: t.data("fromMarkdownExtensions") || [] }));
					},
				});
			}
			function mr(e) {
				for (var t = [], n = -1, r = 0, l = 0; ++n < e.length; ) {
					var a = e.charCodeAt(n),
						i = "";
					if (37 === a && Lt(e.charCodeAt(n + 1)) && Lt(e.charCodeAt(n + 2))) l = 2;
					else if (a < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a)) || (i = String.fromCharCode(a));
					else if (a > 55295 && a < 57344) {
						var o = e.charCodeAt(n + 1);
						a < 56320 && o > 56319 && o < 57344 ? ((i = String.fromCharCode(a, o)), (l = 1)) : (i = "\ufffd");
					} else i = String.fromCharCode(a);
					i && (t.push(e.slice(r, n), encodeURIComponent(i)), (r = n + l + 1), (i = "")), l && ((n += l), (l = 0));
				}
				return t.join("") + e.slice(r);
			}
			var gr = function (e) {
				if (void 0 === e || null === e) return br;
				if ("string" === typeof e)
					return (function (e) {
						return yr(t);
						function t(t) {
							return t && t.type === e;
						}
					})(e);
				if ("object" === typeof e)
					return Array.isArray(e)
						? vr(e)
						: (function (e) {
								return yr(t);
								function t(t) {
									var n;
									for (n in e) if (t[n] !== e[n]) return !1;
									return !0;
								}
						  })(e);
				if ("function" === typeof e) return yr(e);
				throw new Error("Expected function, string, or object as test");
			};
			function vr(e) {
				for (var t = [], n = -1; ++n < e.length; ) t[n] = gr(e[n]);
				return yr(function () {
					for (var e = -1, n = arguments.length, r = new Array(n), l = 0; l < n; l++) r[l] = arguments[l];
					for (; ++e < t.length; ) {
						var a;
						if ((a = t[e]).call.apply(a, [this].concat(r))) return !0;
					}
					return !1;
				});
			}
			function yr(e) {
				return function (t) {
					for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++) r[l - 1] = arguments[l];
					return Boolean(t && "object" === typeof t && "type" in t && Boolean(e.call.apply(e, [this, t].concat(r))));
				};
			}
			function br() {
				return !0;
			}
			var xr = function (e, t, n, r) {
				"function" === typeof t && "function" !== typeof n && ((r = n), (n = t), (t = null));
				var l = gr(t),
					a = r ? -1 : 1;
				!(function e(i, o, u) {
					var s = i && "object" === typeof i ? i : {};
					if ("string" === typeof s.type) {
						var c = "string" === typeof s.tagName ? s.tagName : "string" === typeof s.name ? s.name : void 0;
						Object.defineProperty(f, "name", { value: "node (" + i.type + (c ? "<" + c + ">" : "") + ")" });
					}
					return f;
					function f() {
						var s,
							c,
							f,
							d = [];
						if (
							(!t || l(i, o, u[u.length - 1] || null)) &&
							((d = (function (e) {
								if (Array.isArray(e)) return e;
								if ("number" === typeof e) return [true, e];
								return [e];
							})(n(i, u))),
							false === d[0])
						)
							return d;
						if (i.children && "skip" !== d[0])
							for (c = (r ? i.children.length : -1) + a, f = u.concat(i); c > -1 && c < i.children.length; ) {
								if (false === (s = e(i.children[c], c, f)())[0]) return s;
								c = "number" === typeof s[1] ? s[1] : c + a;
							}
						return d;
					}
				})(e, void 0, [])();
			};
			var wr = function (e, t, n, r) {
					"function" === typeof t && "function" !== typeof n && ((r = n), (n = t), (t = null)),
						xr(
							e,
							t,
							function (e, t) {
								var r = t[t.length - 1];
								return n(e, r ? r.children.indexOf(e) : null, r);
							},
							r
						);
				},
				kr = Cr("start"),
				Sr = Cr("end");
			function Cr(e) {
				return function (t) {
					var n = (t && t.position && t.position[e]) || {};
					return { line: n.line || null, column: n.column || null, offset: n.offset > -1 ? n.offset : null };
				};
			}
			var Er = {}.hasOwnProperty;
			function jr(e) {
				return String(e || "").toUpperCase();
			}
			function Pr(e, t) {
				var n,
					r = String(t.identifier).toUpperCase(),
					l = mr(r.toLowerCase()),
					a = e.footnoteOrder.indexOf(r);
				-1 === a ? (e.footnoteOrder.push(r), (e.footnoteCounts[r] = 1), (n = e.footnoteOrder.length)) : (e.footnoteCounts[r]++, (n = a + 1));
				var i = e.footnoteCounts[r],
					o = { type: "element", tagName: "a", properties: { href: "#" + e.clobberPrefix + "fn-" + l, id: e.clobberPrefix + "fnref-" + l + (i > 1 ? "-" + i : ""), dataFootnoteRef: !0, ariaDescribedBy: ["footnote-label"] }, children: [{ type: "text", value: String(n) }] };
				e.patch(t, o);
				var u = { type: "element", tagName: "sup", properties: {}, children: [o] };
				return e.patch(t, u), e.applyData(t, u);
			}
			function Nr(e, t) {
				var n = t.referenceType,
					r = "]";
				if (("collapsed" === n ? (r += "[]") : "full" === n && (r += "[" + (t.label || t.identifier) + "]"), "imageReference" === t.type)) return { type: "text", value: "![" + t.alt + r };
				var l = e.all(t),
					a = l[0];
				a && "text" === a.type ? (a.value = "[" + a.value) : l.unshift({ type: "text", value: "[" });
				var i = l[l.length - 1];
				return i && "text" === i.type ? (i.value += r) : l.push({ type: "text", value: r }), l;
			}
			function Lr(e) {
				var t = e.spread;
				return void 0 === t || null === t ? e.children.length > 1 : t;
			}
			var Tr = 9,
				Fr = 32;
			function _r(e) {
				for (var t = String(e), n = /\r?\n|\r/g, r = n.exec(t), l = 0, a = []; r; ) a.push(Or(t.slice(l, r.index), l > 0, !0), r[0]), (l = r.index + r[0].length), (r = n.exec(t));
				return a.push(Or(t.slice(l), l > 0, !1)), a.join("");
			}
			function Or(e, t, n) {
				var r = 0,
					l = e.length;
				if (t) for (var a = e.codePointAt(r); a === Tr || a === Fr; ) r++, (a = e.codePointAt(r));
				if (n) for (var i = e.codePointAt(l - 1); i === Tr || i === Fr; ) l--, (i = e.codePointAt(l - 1));
				return l > r ? e.slice(r, l) : "";
			}
			var Dr = {
				blockquote: function (e, t) {
					var n = { type: "element", tagName: "blockquote", properties: {}, children: e.wrap(e.all(t), !0) };
					return e.patch(t, n), e.applyData(t, n);
				},
				break: function (e, t) {
					var n = { type: "element", tagName: "br", properties: {}, children: [] };
					return e.patch(t, n), [e.applyData(t, n), { type: "text", value: "\n" }];
				},
				code: function (e, t) {
					var n = t.value ? t.value + "\n" : "",
						r = t.lang ? t.lang.match(/^[^ \t]+(?=[ \t]|$)/) : null,
						l = {};
					r && (l.className = ["language-" + r]);
					var a = { type: "element", tagName: "code", properties: l, children: [{ type: "text", value: n }] };
					return t.meta && (a.data = { meta: t.meta }), e.patch(t, a), (a = { type: "element", tagName: "pre", properties: {}, children: [(a = e.applyData(t, a))] }), e.patch(t, a), a;
				},
				delete: function (e, t) {
					var n = { type: "element", tagName: "del", properties: {}, children: e.all(t) };
					return e.patch(t, n), e.applyData(t, n);
				},
				emphasis: function (e, t) {
					var n = { type: "element", tagName: "em", properties: {}, children: e.all(t) };
					return e.patch(t, n), e.applyData(t, n);
				},
				footnoteReference: Pr,
				footnote: function (e, t) {
					for (var n = e.footnoteById, r = 1; r in n; ) r++;
					var l = String(r);
					return (n[l] = { type: "footnoteDefinition", identifier: l, children: [{ type: "paragraph", children: t.children }], position: t.position }), Pr(e, { type: "footnoteReference", identifier: l, position: t.position });
				},
				heading: function (e, t) {
					var n = { type: "element", tagName: "h" + t.depth, properties: {}, children: e.all(t) };
					return e.patch(t, n), e.applyData(t, n);
				},
				html: function (e, t) {
					if (e.dangerous) {
						var n = { type: "raw", value: t.value };
						return e.patch(t, n), e.applyData(t, n);
					}
					return null;
				},
				imageReference: function (e, t) {
					var n = e.definition(t.identifier);
					if (!n) return Nr(e, t);
					var r = { src: mr(n.url || ""), alt: t.alt };
					null !== n.title && void 0 !== n.title && (r.title = n.title);
					var l = { type: "element", tagName: "img", properties: r, children: [] };
					return e.patch(t, l), e.applyData(t, l);
				},
				image: function (e, t) {
					var n = { src: mr(t.url) };
					null !== t.alt && void 0 !== t.alt && (n.alt = t.alt), null !== t.title && void 0 !== t.title && (n.title = t.title);
					var r = { type: "element", tagName: "img", properties: n, children: [] };
					return e.patch(t, r), e.applyData(t, r);
				},
				inlineCode: function (e, t) {
					var n = { type: "text", value: t.value.replace(/\r?\n|\r/g, " ") };
					e.patch(t, n);
					var r = { type: "element", tagName: "code", properties: {}, children: [n] };
					return e.patch(t, r), e.applyData(t, r);
				},
				linkReference: function (e, t) {
					var n = e.definition(t.identifier);
					if (!n) return Nr(e, t);
					var r = { href: mr(n.url || "") };
					null !== n.title && void 0 !== n.title && (r.title = n.title);
					var l = { type: "element", tagName: "a", properties: r, children: e.all(t) };
					return e.patch(t, l), e.applyData(t, l);
				},
				link: function (e, t) {
					var n = { href: mr(t.url) };
					null !== t.title && void 0 !== t.title && (n.title = t.title);
					var r = { type: "element", tagName: "a", properties: n, children: e.all(t) };
					return e.patch(t, r), e.applyData(t, r);
				},
				listItem: function (e, t, n) {
					var r = e.all(t),
						l = n
							? (function (e) {
									var t = !1;
									if ("list" === e.type) {
										t = e.spread || !1;
										for (var n = e.children, r = -1; !t && ++r < n.length; ) t = Lr(n[r]);
									}
									return t;
							  })(n)
							: Lr(t),
						a = {},
						i = [];
					if ("boolean" === typeof t.checked) {
						var o,
							u = r[0];
						u && "element" === u.type && "p" === u.tagName ? (o = u) : ((o = { type: "element", tagName: "p", properties: {}, children: [] }), r.unshift(o)), o.children.length > 0 && o.children.unshift({ type: "text", value: " " }), o.children.unshift({ type: "element", tagName: "input", properties: { type: "checkbox", checked: t.checked, disabled: !0 }, children: [] }), (a.className = ["task-list-item"]);
					}
					for (var s = -1; ++s < r.length; ) {
						var c = r[s];
						(l || 0 !== s || "element" !== c.type || "p" !== c.tagName) && i.push({ type: "text", value: "\n" }), "element" !== c.type || "p" !== c.tagName || l ? i.push(c) : i.push.apply(i, d(c.children));
					}
					var f = r[r.length - 1];
					f && (l || "element" !== f.type || "p" !== f.tagName) && i.push({ type: "text", value: "\n" });
					var p = { type: "element", tagName: "li", properties: a, children: i };
					return e.patch(t, p), e.applyData(t, p);
				},
				list: function (e, t) {
					var n = {},
						r = e.all(t),
						l = -1;
					for ("number" === typeof t.start && 1 !== t.start && (n.start = t.start); ++l < r.length; ) {
						var a = r[l];
						if ("element" === a.type && "li" === a.tagName && a.properties && Array.isArray(a.properties.className) && a.properties.className.includes("task-list-item")) {
							n.className = ["contains-task-list"];
							break;
						}
					}
					var i = { type: "element", tagName: t.ordered ? "ol" : "ul", properties: n, children: e.wrap(r, !0) };
					return e.patch(t, i), e.applyData(t, i);
				},
				paragraph: function (e, t) {
					var n = { type: "element", tagName: "p", properties: {}, children: e.all(t) };
					return e.patch(t, n), e.applyData(t, n);
				},
				root: function (e, t) {
					var n = { type: "root", children: e.wrap(e.all(t)) };
					return e.patch(t, n), e.applyData(t, n);
				},
				strong: function (e, t) {
					var n = { type: "element", tagName: "strong", properties: {}, children: e.all(t) };
					return e.patch(t, n), e.applyData(t, n);
				},
				table: function (e, t) {
					var n = e.all(t),
						r = n.shift(),
						l = [];
					if (r) {
						var a = { type: "element", tagName: "thead", properties: {}, children: e.wrap([r], !0) };
						e.patch(t.children[0], a), l.push(a);
					}
					if (n.length > 0) {
						var i = { type: "element", tagName: "tbody", properties: {}, children: e.wrap(n, !0) },
							o = kr(t.children[1]),
							u = Sr(t.children[t.children.length - 1]);
						o.line && u.line && (i.position = { start: o, end: u }), l.push(i);
					}
					var s = { type: "element", tagName: "table", properties: {}, children: e.wrap(l, !0) };
					return e.patch(t, s), e.applyData(t, s);
				},
				tableCell: function (e, t) {
					var n = { type: "element", tagName: "td", properties: {}, children: e.all(t) };
					return e.patch(t, n), e.applyData(t, n);
				},
				tableRow: function (e, t, n) {
					for (var r = n ? n.children : void 0, l = 0 === (r ? r.indexOf(t) : 1) ? "th" : "td", a = n && "table" === n.type ? n.align : void 0, i = a ? a.length : t.children.length, o = -1, u = []; ++o < i; ) {
						var s = t.children[o],
							c = {},
							f = a ? a[o] : void 0;
						f && (c.align = f);
						var d = { type: "element", tagName: l, properties: c, children: [] };
						s && ((d.children = e.all(s)), e.patch(s, d), (d = e.applyData(t, d))), u.push(d);
					}
					var p = { type: "element", tagName: "tr", properties: {}, children: e.wrap(u, !0) };
					return e.patch(t, p), e.applyData(t, p);
				},
				text: function (e, t) {
					var n = { type: "text", value: _r(String(t.value)) };
					return e.patch(t, n), e.applyData(t, n);
				},
				thematicBreak: function (e, t) {
					var n = { type: "element", tagName: "hr", properties: {}, children: [] };
					return e.patch(t, n), e.applyData(t, n);
				},
				toml: zr,
				yaml: zr,
				definition: zr,
				footnoteDefinition: zr,
			};
			function zr() {
				return null;
			}
			var Ar = {}.hasOwnProperty;
			function Rr(e, t) {
				var n = t || {},
					r = n.allowDangerousHtml || !1,
					l = {};
				return (
					(i.dangerous = r),
					(i.clobberPrefix = void 0 === n.clobberPrefix || null === n.clobberPrefix ? "user-content-" : n.clobberPrefix),
					(i.footnoteLabel = n.footnoteLabel || "Footnotes"),
					(i.footnoteLabelTagName = n.footnoteLabelTagName || "h2"),
					(i.footnoteLabelProperties = n.footnoteLabelProperties || { className: ["sr-only"] }),
					(i.footnoteBackLabel = n.footnoteBackLabel || "Back to content"),
					(i.unknownHandler = n.unknownHandler),
					(i.passThrough = n.passThrough),
					(i.handlers = Ue(Ue({}, Dr), n.handlers)),
					(i.definition = (function (e) {
						var t = Object.create(null);
						if (!e || !e.type) throw new Error("mdast-util-definitions expected node");
						return (
							wr(e, "definition", function (e) {
								var n = jr(e.identifier);
								n && !Er.call(t, n) && (t[n] = e);
							}),
							function (e) {
								var n = jr(e);
								return n && Er.call(t, n) ? t[n] : null;
							}
						);
					})(e)),
					(i.footnoteById = l),
					(i.footnoteOrder = []),
					(i.footnoteCounts = {}),
					(i.patch = Ir),
					(i.applyData = Mr),
					(i.one = function (e, t) {
						return Br(i, e, t);
					}),
					(i.all = function (e) {
						return Ur(i, e);
					}),
					(i.wrap = Hr),
					(i.augment = a),
					wr(e, "footnoteDefinition", function (e) {
						var t = String(e.identifier).toUpperCase();
						Ar.call(l, t) || (l[t] = e);
					}),
					i
				);
				function a(e, t) {
					if (e && "data" in e && e.data) {
						var n = e.data;
						n.hName && ("element" !== t.type && (t = { type: "element", tagName: "", properties: {}, children: [] }), (t.tagName = n.hName)), "element" === t.type && n.hProperties && (t.properties = Ue(Ue({}, t.properties), n.hProperties)), "children" in t && t.children && n.hChildren && (t.children = n.hChildren);
					}
					if (e) {
						var r = "type" in e ? e : { position: e };
						(function (e) {
							return !e || !e.position || !e.position.start || !e.position.start.line || !e.position.start.column || !e.position.end || !e.position.end.line || !e.position.end.column;
						})(r) || (t.position = { start: kr(r), end: Sr(r) });
					}
					return t;
				}
				function i(e, t, n, r) {
					return Array.isArray(n) && ((r = n), (n = {})), a(e, { type: "element", tagName: t, properties: n || {}, children: r || [] });
				}
			}
			function Ir(e, t) {
				e.position &&
					(t.position = (function (e) {
						return { start: kr(e), end: Sr(e) };
					})(e));
			}
			function Mr(e, t) {
				var n = t;
				if (e && e.data) {
					var r = e.data.hName,
						l = e.data.hChildren,
						a = e.data.hProperties;
					"string" === typeof r && ("element" === n.type ? (n.tagName = r) : (n = { type: "element", tagName: r, properties: {}, children: [] })), "element" === n.type && a && (n.properties = Ue(Ue({}, n.properties), a)), "children" in n && n.children && null !== l && void 0 !== l && (n.children = l);
				}
				return n;
			}
			function Br(e, t, n) {
				var r = t && t.type;
				if (!r) throw new Error("Expected node, got `" + t + "`");
				return Ar.call(e.handlers, r)
					? e.handlers[r](e, t, n)
					: e.passThrough && e.passThrough.includes(r)
					? "children" in t
						? Ue(Ue({}, t), {}, { children: Ur(e, t) })
						: t
					: e.unknownHandler
					? e.unknownHandler(e, t, n)
					: (function (e, t) {
							var n = t.data || {},
								r = !("value" in t) || Ar.call(n, "hProperties") || Ar.call(n, "hChildren") ? { type: "element", tagName: "div", properties: {}, children: Ur(e, t) } : { type: "text", value: t.value };
							return e.patch(t, r), e.applyData(t, r);
					  })(e, t);
			}
			function Ur(e, t) {
				var n = [];
				if ("children" in t)
					for (var r = t.children, l = -1; ++l < r.length; ) {
						var a = Br(e, r[l], t);
						if (a) {
							if (l && "break" === r[l - 1].type && (Array.isArray(a) || "text" !== a.type || (a.value = a.value.replace(/^\s+/, "")), !Array.isArray(a) && "element" === a.type)) {
								var i = a.children[0];
								i && "text" === i.type && (i.value = i.value.replace(/^\s+/, ""));
							}
							Array.isArray(a) ? n.push.apply(n, d(a)) : n.push(a);
						}
					}
				return n;
			}
			function Hr(e, t) {
				var n = [],
					r = -1;
				for (t && n.push({ type: "text", value: "\n" }); ++r < e.length; ) r && n.push({ type: "text", value: "\n" }), n.push(e[r]);
				return t && e.length > 0 && n.push({ type: "text", value: "\n" }), n;
			}
			function Vr(e, t) {
				var n = Rr(e, t),
					r = n.one(e, null),
					l = (function (e) {
						for (var t = [], n = -1; ++n < e.footnoteOrder.length; ) {
							var r = e.footnoteById[e.footnoteOrder[n]];
							if (r) {
								for (var l = e.all(r), a = String(r.identifier).toUpperCase(), i = mr(a.toLowerCase()), o = 0, u = []; ++o <= e.footnoteCounts[a]; ) {
									var s = { type: "element", tagName: "a", properties: { href: "#" + e.clobberPrefix + "fnref-" + i + (o > 1 ? "-" + o : ""), dataFootnoteBackref: !0, className: ["data-footnote-backref"], ariaLabel: e.footnoteBackLabel }, children: [{ type: "text", value: "\u21a9" }] };
									o > 1 && s.children.push({ type: "element", tagName: "sup", children: [{ type: "text", value: String(o) }] }), u.length > 0 && u.push({ type: "text", value: " " }), u.push(s);
								}
								var c = l[l.length - 1];
								if (c && "element" === c.type && "p" === c.tagName) {
									var f,
										d = c.children[c.children.length - 1];
									d && "text" === d.type ? (d.value += " ") : c.children.push({ type: "text", value: " " }), (f = c.children).push.apply(f, u);
								} else l.push.apply(l, u);
								var p = { type: "element", tagName: "li", properties: { id: e.clobberPrefix + "fn-" + i }, children: e.wrap(l, !0) };
								e.patch(r, p), t.push(p);
							}
						}
						if (0 !== t.length)
							return {
								type: "element",
								tagName: "section",
								properties: { dataFootnotes: !0, className: ["footnotes"] },
								children: [
									{ type: "element", tagName: e.footnoteLabelTagName, properties: Ue(Ue({}, JSON.parse(JSON.stringify(e.footnoteLabelProperties))), {}, { id: "footnote-label" }), children: [{ type: "text", value: e.footnoteLabel }] },
									{ type: "text", value: "\n" },
									{ type: "element", tagName: "ol", properties: {}, children: e.wrap(t, !0) },
									{ type: "text", value: "\n" },
								],
							};
					})(n);
				return l && r.children.push({ type: "text", value: "\n" }, l), Array.isArray(r) ? { type: "root", children: r } : r;
			}
			var $r = function (e, t) {
				return e && "run" in e
					? (function (e, t) {
							return function (n, r, l) {
								e.run(Vr(n, t), r, function (e) {
									l(e);
								});
							};
					  })(e, t)
					: (function (e) {
							return function (t) {
								return Vr(t, e);
							};
					  })(e || t);
			};
			var Wr = n(7),
				qr = v(function e(t, n, r) {
					p(this, e), (this.property = t), (this.normal = n), r && (this.space = r);
				});
			function Qr(e, t) {
				for (var n = {}, r = {}, l = -1; ++l < e.length; ) Object.assign(n, e[l].property), Object.assign(r, e[l].normal);
				return new qr(n, r, t);
			}
			function Kr(e) {
				return e.toLowerCase();
			}
			(qr.prototype.property = {}), (qr.prototype.normal = {}), (qr.prototype.space = null);
			var Yr = v(function e(t, n) {
				p(this, e), (this.property = t), (this.attribute = n);
			});
			(Yr.prototype.space = null), (Yr.prototype.boolean = !1), (Yr.prototype.booleanish = !1), (Yr.prototype.overloadedBoolean = !1), (Yr.prototype.number = !1), (Yr.prototype.commaSeparated = !1), (Yr.prototype.spaceSeparated = !1), (Yr.prototype.commaOrSpaceSeparated = !1), (Yr.prototype.mustUseProperty = !1), (Yr.prototype.defined = !1);
			var Xr = 0,
				Zr = ll(),
				Gr = ll(),
				Jr = ll(),
				el = ll(),
				tl = ll(),
				nl = ll(),
				rl = ll();
			function ll() {
				return Math.pow(2, ++Xr);
			}
			var al = Object.keys(t),
				il = (function (e) {
					b(r, e);
					var n = S(r);
					function r(e, l, a, i) {
						var o;
						p(this, r);
						var u = -1;
						if ((ol(k((o = n.call(this, e, l))), "space", i), "number" === typeof a))
							for (; ++u < al.length; ) {
								var s = al[u];
								ol(k(o), al[u], (a & t[s]) === t[s]);
							}
						return o;
					}
					return v(r);
				})(Yr);
			function ol(e, t, n) {
				n && (e[t] = n);
			}
			il.prototype.defined = !0;
			var ul = {}.hasOwnProperty;
			function sl(e) {
				var t,
					n = {},
					r = {};
				for (t in e.properties)
					if (ul.call(e.properties, t)) {
						var l = e.properties[t],
							a = new il(t, e.transform(e.attributes || {}, t), l, e.space);
						e.mustUseProperty && e.mustUseProperty.includes(t) && (a.mustUseProperty = !0), (n[t] = a), (r[Kr(t)] = t), (r[Kr(a.attribute)] = t);
					}
				return new qr(n, r, e.space);
			}
			var cl = sl({
					space: "xlink",
					transform: function (e, t) {
						return "xlink:" + t.slice(5).toLowerCase();
					},
					properties: { xLinkActuate: null, xLinkArcRole: null, xLinkHref: null, xLinkRole: null, xLinkShow: null, xLinkTitle: null, xLinkType: null },
				}),
				fl = sl({
					space: "xml",
					transform: function (e, t) {
						return "xml:" + t.slice(3).toLowerCase();
					},
					properties: { xmlLang: null, xmlBase: null, xmlSpace: null },
				});
			function dl(e, t) {
				return t in e ? e[t] : t;
			}
			function pl(e, t) {
				return dl(e, t.toLowerCase());
			}
			var hl = sl({ space: "xmlns", attributes: { xmlnsxlink: "xmlns:xlink" }, transform: pl, properties: { xmlns: null, xmlnsXLink: null } }),
				ml = sl({
					transform: function (e, t) {
						return "role" === t ? t : "aria-" + t.slice(4).toLowerCase();
					},
					properties: {
						ariaActiveDescendant: null,
						ariaAtomic: Gr,
						ariaAutoComplete: null,
						ariaBusy: Gr,
						ariaChecked: Gr,
						ariaColCount: el,
						ariaColIndex: el,
						ariaColSpan: el,
						ariaControls: tl,
						ariaCurrent: null,
						ariaDescribedBy: tl,
						ariaDetails: null,
						ariaDisabled: Gr,
						ariaDropEffect: tl,
						ariaErrorMessage: null,
						ariaExpanded: Gr,
						ariaFlowTo: tl,
						ariaGrabbed: Gr,
						ariaHasPopup: null,
						ariaHidden: Gr,
						ariaInvalid: null,
						ariaKeyShortcuts: null,
						ariaLabel: null,
						ariaLabelledBy: tl,
						ariaLevel: el,
						ariaLive: null,
						ariaModal: Gr,
						ariaMultiLine: Gr,
						ariaMultiSelectable: Gr,
						ariaOrientation: null,
						ariaOwns: tl,
						ariaPlaceholder: null,
						ariaPosInSet: el,
						ariaPressed: Gr,
						ariaReadOnly: Gr,
						ariaRelevant: null,
						ariaRequired: Gr,
						ariaRoleDescription: tl,
						ariaRowCount: el,
						ariaRowIndex: el,
						ariaRowSpan: el,
						ariaSelected: Gr,
						ariaSetSize: el,
						ariaSort: null,
						ariaValueMax: el,
						ariaValueMin: el,
						ariaValueNow: el,
						ariaValueText: null,
						role: null,
					},
				}),
				gl = sl({
					space: "html",
					attributes: { acceptcharset: "accept-charset", classname: "class", htmlfor: "for", httpequiv: "http-equiv" },
					transform: pl,
					mustUseProperty: ["checked", "multiple", "muted", "selected"],
					properties: {
						abbr: null,
						accept: nl,
						acceptCharset: tl,
						accessKey: tl,
						action: null,
						allow: null,
						allowFullScreen: Zr,
						allowPaymentRequest: Zr,
						allowUserMedia: Zr,
						alt: null,
						as: null,
						async: Zr,
						autoCapitalize: null,
						autoComplete: tl,
						autoFocus: Zr,
						autoPlay: Zr,
						capture: Zr,
						charSet: null,
						checked: Zr,
						cite: null,
						className: tl,
						cols: el,
						colSpan: null,
						content: null,
						contentEditable: Gr,
						controls: Zr,
						controlsList: tl,
						coords: el | nl,
						crossOrigin: null,
						data: null,
						dateTime: null,
						decoding: null,
						default: Zr,
						defer: Zr,
						dir: null,
						dirName: null,
						disabled: Zr,
						download: Jr,
						draggable: Gr,
						encType: null,
						enterKeyHint: null,
						form: null,
						formAction: null,
						formEncType: null,
						formMethod: null,
						formNoValidate: Zr,
						formTarget: null,
						headers: tl,
						height: el,
						hidden: Zr,
						high: el,
						href: null,
						hrefLang: null,
						htmlFor: tl,
						httpEquiv: tl,
						id: null,
						imageSizes: null,
						imageSrcSet: null,
						inputMode: null,
						integrity: null,
						is: null,
						isMap: Zr,
						itemId: null,
						itemProp: tl,
						itemRef: tl,
						itemScope: Zr,
						itemType: tl,
						kind: null,
						label: null,
						lang: null,
						language: null,
						list: null,
						loading: null,
						loop: Zr,
						low: el,
						manifest: null,
						max: null,
						maxLength: el,
						media: null,
						method: null,
						min: null,
						minLength: el,
						multiple: Zr,
						muted: Zr,
						name: null,
						nonce: null,
						noModule: Zr,
						noValidate: Zr,
						onAbort: null,
						onAfterPrint: null,
						onAuxClick: null,
						onBeforeMatch: null,
						onBeforePrint: null,
						onBeforeUnload: null,
						onBlur: null,
						onCancel: null,
						onCanPlay: null,
						onCanPlayThrough: null,
						onChange: null,
						onClick: null,
						onClose: null,
						onContextLost: null,
						onContextMenu: null,
						onContextRestored: null,
						onCopy: null,
						onCueChange: null,
						onCut: null,
						onDblClick: null,
						onDrag: null,
						onDragEnd: null,
						onDragEnter: null,
						onDragExit: null,
						onDragLeave: null,
						onDragOver: null,
						onDragStart: null,
						onDrop: null,
						onDurationChange: null,
						onEmptied: null,
						onEnded: null,
						onError: null,
						onFocus: null,
						onFormData: null,
						onHashChange: null,
						onInput: null,
						onInvalid: null,
						onKeyDown: null,
						onKeyPress: null,
						onKeyUp: null,
						onLanguageChange: null,
						onLoad: null,
						onLoadedData: null,
						onLoadedMetadata: null,
						onLoadEnd: null,
						onLoadStart: null,
						onMessage: null,
						onMessageError: null,
						onMouseDown: null,
						onMouseEnter: null,
						onMouseLeave: null,
						onMouseMove: null,
						onMouseOut: null,
						onMouseOver: null,
						onMouseUp: null,
						onOffline: null,
						onOnline: null,
						onPageHide: null,
						onPageShow: null,
						onPaste: null,
						onPause: null,
						onPlay: null,
						onPlaying: null,
						onPopState: null,
						onProgress: null,
						onRateChange: null,
						onRejectionHandled: null,
						onReset: null,
						onResize: null,
						onScroll: null,
						onScrollEnd: null,
						onSecurityPolicyViolation: null,
						onSeeked: null,
						onSeeking: null,
						onSelect: null,
						onSlotChange: null,
						onStalled: null,
						onStorage: null,
						onSubmit: null,
						onSuspend: null,
						onTimeUpdate: null,
						onToggle: null,
						onUnhandledRejection: null,
						onUnload: null,
						onVolumeChange: null,
						onWaiting: null,
						onWheel: null,
						open: Zr,
						optimum: el,
						pattern: null,
						ping: tl,
						placeholder: null,
						playsInline: Zr,
						poster: null,
						preload: null,
						readOnly: Zr,
						referrerPolicy: null,
						rel: tl,
						required: Zr,
						reversed: Zr,
						rows: el,
						rowSpan: el,
						sandbox: tl,
						scope: null,
						scoped: Zr,
						seamless: Zr,
						selected: Zr,
						shape: null,
						size: el,
						sizes: null,
						slot: null,
						span: el,
						spellCheck: Gr,
						src: null,
						srcDoc: null,
						srcLang: null,
						srcSet: null,
						start: el,
						step: null,
						style: null,
						tabIndex: el,
						target: null,
						title: null,
						translate: null,
						type: null,
						typeMustMatch: Zr,
						useMap: null,
						value: Gr,
						width: el,
						wrap: null,
						align: null,
						aLink: null,
						archive: tl,
						axis: null,
						background: null,
						bgColor: null,
						border: el,
						borderColor: null,
						bottomMargin: el,
						cellPadding: null,
						cellSpacing: null,
						char: null,
						charOff: null,
						classId: null,
						clear: null,
						code: null,
						codeBase: null,
						codeType: null,
						color: null,
						compact: Zr,
						declare: Zr,
						event: null,
						face: null,
						frame: null,
						frameBorder: null,
						hSpace: el,
						leftMargin: el,
						link: null,
						longDesc: null,
						lowSrc: null,
						marginHeight: el,
						marginWidth: el,
						noResize: Zr,
						noHref: Zr,
						noShade: Zr,
						noWrap: Zr,
						object: null,
						profile: null,
						prompt: null,
						rev: null,
						rightMargin: el,
						rules: null,
						scheme: null,
						scrolling: Gr,
						standby: null,
						summary: null,
						text: null,
						topMargin: el,
						valueType: null,
						version: null,
						vAlign: null,
						vLink: null,
						vSpace: el,
						allowTransparency: null,
						autoCorrect: null,
						autoSave: null,
						disablePictureInPicture: Zr,
						disableRemotePlayback: Zr,
						prefix: null,
						property: null,
						results: el,
						security: null,
						unselectable: null,
					},
				}),
				vl = sl({
					space: "svg",
					attributes: {
						accentHeight: "accent-height",
						alignmentBaseline: "alignment-baseline",
						arabicForm: "arabic-form",
						baselineShift: "baseline-shift",
						capHeight: "cap-height",
						className: "class",
						clipPath: "clip-path",
						clipRule: "clip-rule",
						colorInterpolation: "color-interpolation",
						colorInterpolationFilters: "color-interpolation-filters",
						colorProfile: "color-profile",
						colorRendering: "color-rendering",
						crossOrigin: "crossorigin",
						dataType: "datatype",
						dominantBaseline: "dominant-baseline",
						enableBackground: "enable-background",
						fillOpacity: "fill-opacity",
						fillRule: "fill-rule",
						floodColor: "flood-color",
						floodOpacity: "flood-opacity",
						fontFamily: "font-family",
						fontSize: "font-size",
						fontSizeAdjust: "font-size-adjust",
						fontStretch: "font-stretch",
						fontStyle: "font-style",
						fontVariant: "font-variant",
						fontWeight: "font-weight",
						glyphName: "glyph-name",
						glyphOrientationHorizontal: "glyph-orientation-horizontal",
						glyphOrientationVertical: "glyph-orientation-vertical",
						hrefLang: "hreflang",
						horizAdvX: "horiz-adv-x",
						horizOriginX: "horiz-origin-x",
						horizOriginY: "horiz-origin-y",
						imageRendering: "image-rendering",
						letterSpacing: "letter-spacing",
						lightingColor: "lighting-color",
						markerEnd: "marker-end",
						markerMid: "marker-mid",
						markerStart: "marker-start",
						navDown: "nav-down",
						navDownLeft: "nav-down-left",
						navDownRight: "nav-down-right",
						navLeft: "nav-left",
						navNext: "nav-next",
						navPrev: "nav-prev",
						navRight: "nav-right",
						navUp: "nav-up",
						navUpLeft: "nav-up-left",
						navUpRight: "nav-up-right",
						onAbort: "onabort",
						onActivate: "onactivate",
						onAfterPrint: "onafterprint",
						onBeforePrint: "onbeforeprint",
						onBegin: "onbegin",
						onCancel: "oncancel",
						onCanPlay: "oncanplay",
						onCanPlayThrough: "oncanplaythrough",
						onChange: "onchange",
						onClick: "onclick",
						onClose: "onclose",
						onCopy: "oncopy",
						onCueChange: "oncuechange",
						onCut: "oncut",
						onDblClick: "ondblclick",
						onDrag: "ondrag",
						onDragEnd: "ondragend",
						onDragEnter: "ondragenter",
						onDragExit: "ondragexit",
						onDragLeave: "ondragleave",
						onDragOver: "ondragover",
						onDragStart: "ondragstart",
						onDrop: "ondrop",
						onDurationChange: "ondurationchange",
						onEmptied: "onemptied",
						onEnd: "onend",
						onEnded: "onended",
						onError: "onerror",
						onFocus: "onfocus",
						onFocusIn: "onfocusin",
						onFocusOut: "onfocusout",
						onHashChange: "onhashchange",
						onInput: "oninput",
						onInvalid: "oninvalid",
						onKeyDown: "onkeydown",
						onKeyPress: "onkeypress",
						onKeyUp: "onkeyup",
						onLoad: "onload",
						onLoadedData: "onloadeddata",
						onLoadedMetadata: "onloadedmetadata",
						onLoadStart: "onloadstart",
						onMessage: "onmessage",
						onMouseDown: "onmousedown",
						onMouseEnter: "onmouseenter",
						onMouseLeave: "onmouseleave",
						onMouseMove: "onmousemove",
						onMouseOut: "onmouseout",
						onMouseOver: "onmouseover",
						onMouseUp: "onmouseup",
						onMouseWheel: "onmousewheel",
						onOffline: "onoffline",
						onOnline: "ononline",
						onPageHide: "onpagehide",
						onPageShow: "onpageshow",
						onPaste: "onpaste",
						onPause: "onpause",
						onPlay: "onplay",
						onPlaying: "onplaying",
						onPopState: "onpopstate",
						onProgress: "onprogress",
						onRateChange: "onratechange",
						onRepeat: "onrepeat",
						onReset: "onreset",
						onResize: "onresize",
						onScroll: "onscroll",
						onSeeked: "onseeked",
						onSeeking: "onseeking",
						onSelect: "onselect",
						onShow: "onshow",
						onStalled: "onstalled",
						onStorage: "onstorage",
						onSubmit: "onsubmit",
						onSuspend: "onsuspend",
						onTimeUpdate: "ontimeupdate",
						onToggle: "ontoggle",
						onUnload: "onunload",
						onVolumeChange: "onvolumechange",
						onWaiting: "onwaiting",
						onZoom: "onzoom",
						overlinePosition: "overline-position",
						overlineThickness: "overline-thickness",
						paintOrder: "paint-order",
						panose1: "panose-1",
						pointerEvents: "pointer-events",
						referrerPolicy: "referrerpolicy",
						renderingIntent: "rendering-intent",
						shapeRendering: "shape-rendering",
						stopColor: "stop-color",
						stopOpacity: "stop-opacity",
						strikethroughPosition: "strikethrough-position",
						strikethroughThickness: "strikethrough-thickness",
						strokeDashArray: "stroke-dasharray",
						strokeDashOffset: "stroke-dashoffset",
						strokeLineCap: "stroke-linecap",
						strokeLineJoin: "stroke-linejoin",
						strokeMiterLimit: "stroke-miterlimit",
						strokeOpacity: "stroke-opacity",
						strokeWidth: "stroke-width",
						tabIndex: "tabindex",
						textAnchor: "text-anchor",
						textDecoration: "text-decoration",
						textRendering: "text-rendering",
						typeOf: "typeof",
						underlinePosition: "underline-position",
						underlineThickness: "underline-thickness",
						unicodeBidi: "unicode-bidi",
						unicodeRange: "unicode-range",
						unitsPerEm: "units-per-em",
						vAlphabetic: "v-alphabetic",
						vHanging: "v-hanging",
						vIdeographic: "v-ideographic",
						vMathematical: "v-mathematical",
						vectorEffect: "vector-effect",
						vertAdvY: "vert-adv-y",
						vertOriginX: "vert-origin-x",
						vertOriginY: "vert-origin-y",
						wordSpacing: "word-spacing",
						writingMode: "writing-mode",
						xHeight: "x-height",
						playbackOrder: "playbackorder",
						timelineBegin: "timelinebegin",
					},
					transform: dl,
					properties: {
						about: rl,
						accentHeight: el,
						accumulate: null,
						additive: null,
						alignmentBaseline: null,
						alphabetic: el,
						amplitude: el,
						arabicForm: null,
						ascent: el,
						attributeName: null,
						attributeType: null,
						azimuth: el,
						bandwidth: null,
						baselineShift: null,
						baseFrequency: null,
						baseProfile: null,
						bbox: null,
						begin: null,
						bias: el,
						by: null,
						calcMode: null,
						capHeight: el,
						className: tl,
						clip: null,
						clipPath: null,
						clipPathUnits: null,
						clipRule: null,
						color: null,
						colorInterpolation: null,
						colorInterpolationFilters: null,
						colorProfile: null,
						colorRendering: null,
						content: null,
						contentScriptType: null,
						contentStyleType: null,
						crossOrigin: null,
						cursor: null,
						cx: null,
						cy: null,
						d: null,
						dataType: null,
						defaultAction: null,
						descent: el,
						diffuseConstant: el,
						direction: null,
						display: null,
						dur: null,
						divisor: el,
						dominantBaseline: null,
						download: Zr,
						dx: null,
						dy: null,
						edgeMode: null,
						editable: null,
						elevation: el,
						enableBackground: null,
						end: null,
						event: null,
						exponent: el,
						externalResourcesRequired: null,
						fill: null,
						fillOpacity: el,
						fillRule: null,
						filter: null,
						filterRes: null,
						filterUnits: null,
						floodColor: null,
						floodOpacity: null,
						focusable: null,
						focusHighlight: null,
						fontFamily: null,
						fontSize: null,
						fontSizeAdjust: null,
						fontStretch: null,
						fontStyle: null,
						fontVariant: null,
						fontWeight: null,
						format: null,
						fr: null,
						from: null,
						fx: null,
						fy: null,
						g1: nl,
						g2: nl,
						glyphName: nl,
						glyphOrientationHorizontal: null,
						glyphOrientationVertical: null,
						glyphRef: null,
						gradientTransform: null,
						gradientUnits: null,
						handler: null,
						hanging: el,
						hatchContentUnits: null,
						hatchUnits: null,
						height: null,
						href: null,
						hrefLang: null,
						horizAdvX: el,
						horizOriginX: el,
						horizOriginY: el,
						id: null,
						ideographic: el,
						imageRendering: null,
						initialVisibility: null,
						in: null,
						in2: null,
						intercept: el,
						k: el,
						k1: el,
						k2: el,
						k3: el,
						k4: el,
						kernelMatrix: rl,
						kernelUnitLength: null,
						keyPoints: null,
						keySplines: null,
						keyTimes: null,
						kerning: null,
						lang: null,
						lengthAdjust: null,
						letterSpacing: null,
						lightingColor: null,
						limitingConeAngle: el,
						local: null,
						markerEnd: null,
						markerMid: null,
						markerStart: null,
						markerHeight: null,
						markerUnits: null,
						markerWidth: null,
						mask: null,
						maskContentUnits: null,
						maskUnits: null,
						mathematical: null,
						max: null,
						media: null,
						mediaCharacterEncoding: null,
						mediaContentEncodings: null,
						mediaSize: el,
						mediaTime: null,
						method: null,
						min: null,
						mode: null,
						name: null,
						navDown: null,
						navDownLeft: null,
						navDownRight: null,
						navLeft: null,
						navNext: null,
						navPrev: null,
						navRight: null,
						navUp: null,
						navUpLeft: null,
						navUpRight: null,
						numOctaves: null,
						observer: null,
						offset: null,
						onAbort: null,
						onActivate: null,
						onAfterPrint: null,
						onBeforePrint: null,
						onBegin: null,
						onCancel: null,
						onCanPlay: null,
						onCanPlayThrough: null,
						onChange: null,
						onClick: null,
						onClose: null,
						onCopy: null,
						onCueChange: null,
						onCut: null,
						onDblClick: null,
						onDrag: null,
						onDragEnd: null,
						onDragEnter: null,
						onDragExit: null,
						onDragLeave: null,
						onDragOver: null,
						onDragStart: null,
						onDrop: null,
						onDurationChange: null,
						onEmptied: null,
						onEnd: null,
						onEnded: null,
						onError: null,
						onFocus: null,
						onFocusIn: null,
						onFocusOut: null,
						onHashChange: null,
						onInput: null,
						onInvalid: null,
						onKeyDown: null,
						onKeyPress: null,
						onKeyUp: null,
						onLoad: null,
						onLoadedData: null,
						onLoadedMetadata: null,
						onLoadStart: null,
						onMessage: null,
						onMouseDown: null,
						onMouseEnter: null,
						onMouseLeave: null,
						onMouseMove: null,
						onMouseOut: null,
						onMouseOver: null,
						onMouseUp: null,
						onMouseWheel: null,
						onOffline: null,
						onOnline: null,
						onPageHide: null,
						onPageShow: null,
						onPaste: null,
						onPause: null,
						onPlay: null,
						onPlaying: null,
						onPopState: null,
						onProgress: null,
						onRateChange: null,
						onRepeat: null,
						onReset: null,
						onResize: null,
						onScroll: null,
						onSeeked: null,
						onSeeking: null,
						onSelect: null,
						onShow: null,
						onStalled: null,
						onStorage: null,
						onSubmit: null,
						onSuspend: null,
						onTimeUpdate: null,
						onToggle: null,
						onUnload: null,
						onVolumeChange: null,
						onWaiting: null,
						onZoom: null,
						opacity: null,
						operator: null,
						order: null,
						orient: null,
						orientation: null,
						origin: null,
						overflow: null,
						overlay: null,
						overlinePosition: el,
						overlineThickness: el,
						paintOrder: null,
						panose1: null,
						path: null,
						pathLength: el,
						patternContentUnits: null,
						patternTransform: null,
						patternUnits: null,
						phase: null,
						ping: tl,
						pitch: null,
						playbackOrder: null,
						pointerEvents: null,
						points: null,
						pointsAtX: el,
						pointsAtY: el,
						pointsAtZ: el,
						preserveAlpha: null,
						preserveAspectRatio: null,
						primitiveUnits: null,
						propagate: null,
						property: rl,
						r: null,
						radius: null,
						referrerPolicy: null,
						refX: null,
						refY: null,
						rel: rl,
						rev: rl,
						renderingIntent: null,
						repeatCount: null,
						repeatDur: null,
						requiredExtensions: rl,
						requiredFeatures: rl,
						requiredFonts: rl,
						requiredFormats: rl,
						resource: null,
						restart: null,
						result: null,
						rotate: null,
						rx: null,
						ry: null,
						scale: null,
						seed: null,
						shapeRendering: null,
						side: null,
						slope: null,
						snapshotTime: null,
						specularConstant: el,
						specularExponent: el,
						spreadMethod: null,
						spacing: null,
						startOffset: null,
						stdDeviation: null,
						stemh: null,
						stemv: null,
						stitchTiles: null,
						stopColor: null,
						stopOpacity: null,
						strikethroughPosition: el,
						strikethroughThickness: el,
						string: null,
						stroke: null,
						strokeDashArray: rl,
						strokeDashOffset: null,
						strokeLineCap: null,
						strokeLineJoin: null,
						strokeMiterLimit: el,
						strokeOpacity: el,
						strokeWidth: null,
						style: null,
						surfaceScale: el,
						syncBehavior: null,
						syncBehaviorDefault: null,
						syncMaster: null,
						syncTolerance: null,
						syncToleranceDefault: null,
						systemLanguage: rl,
						tabIndex: el,
						tableValues: null,
						target: null,
						targetX: el,
						targetY: el,
						textAnchor: null,
						textDecoration: null,
						textRendering: null,
						textLength: null,
						timelineBegin: null,
						title: null,
						transformBehavior: null,
						type: null,
						typeOf: rl,
						to: null,
						transform: null,
						u1: null,
						u2: null,
						underlinePosition: el,
						underlineThickness: el,
						unicode: null,
						unicodeBidi: null,
						unicodeRange: null,
						unitsPerEm: el,
						values: null,
						vAlphabetic: el,
						vMathematical: el,
						vectorEffect: null,
						vHanging: el,
						vIdeographic: el,
						version: null,
						vertAdvY: el,
						vertOriginX: el,
						vertOriginY: el,
						viewBox: null,
						viewTarget: null,
						visibility: null,
						width: null,
						widths: null,
						wordSpacing: null,
						writingMode: null,
						x: null,
						x1: null,
						x2: null,
						xChannelSelector: null,
						xHeight: el,
						y: null,
						y1: null,
						y2: null,
						yChannelSelector: null,
						z: null,
						zoomAndPan: null,
					},
				}),
				yl = Qr([fl, cl, hl, ml, gl], "html"),
				bl = Qr([fl, cl, hl, ml, vl], "svg");
			function xl(e) {
				if (e.allowedElements && e.disallowedElements) throw new TypeError("Only one of `allowedElements` and `disallowedElements` should be defined");
				if (e.allowedElements || e.disallowedElements || e.allowElement)
					return function (t) {
						wr(t, "element", function (t, n, r) {
							var l,
								a = r;
							if ((e.allowedElements ? (l = !e.allowedElements.includes(t.tagName)) : e.disallowedElements && (l = e.disallowedElements.includes(t.tagName)), !l && e.allowElement && "number" === typeof n && (l = !e.allowElement(t, n, a)), l && "number" === typeof n)) {
								var i;
								if (e.unwrapDisallowed && t.children) (i = a.children).splice.apply(i, [n, 1].concat(d(t.children)));
								else a.children.splice(n, 1);
								return n;
							}
						});
					};
			}
			var wl = n(599);
			function kl(e) {
				var t = e && "object" === typeof e && "text" === e.type ? e.value || "" : e;
				return "string" === typeof t && "" === t.replace(/[ \t\n\f\r]/g, "");
			}
			var Sl = /^data[-\w.:]+$/i,
				Cl = /-[a-z]/g,
				El = /[A-Z]/g;
			function jl(e) {
				return "-" + e.toLowerCase();
			}
			function Pl(e) {
				return e.charAt(1).toUpperCase();
			}
			var Nl = { classId: "classID", dataType: "datatype", itemId: "itemID", strokeDashArray: "strokeDasharray", strokeDashOffset: "strokeDashoffset", strokeLineCap: "strokeLinecap", strokeLineJoin: "strokeLinejoin", strokeMiterLimit: "strokeMiterlimit", typeOf: "typeof", xLinkActuate: "xlinkActuate", xLinkArcRole: "xlinkArcrole", xLinkHref: "xlinkHref", xLinkRole: "xlinkRole", xLinkShow: "xlinkShow", xLinkTitle: "xlinkTitle", xLinkType: "xlinkType", xmlnsXLink: "xmlnsXlink" };
			var Ll = n(426),
				Tl = ["http", "https", "mailto", "tel"];
			function Fl(e) {
				var t = (e || "").trim(),
					n = t.charAt(0);
				if ("#" === n || "/" === n) return t;
				var r = t.indexOf(":");
				if (-1 === r) return t;
				for (var l = -1; ++l < Tl.length; ) {
					var a = Tl[l];
					if (r === a.length && t.slice(0, a.length).toLowerCase() === a) return t;
				}
				return (-1 !== (l = t.indexOf("?")) && r > l) || (-1 !== (l = t.indexOf("#")) && r > l) ? t : "javascript:void(0)";
			}
			var _l = {}.hasOwnProperty,
				Ol = new Set(["table", "thead", "tbody", "tfoot", "tr"]);
			function Dl(e, t) {
				for (var n, r = [], l = -1; ++l < t.children.length; ) "element" === (n = t.children[l]).type ? r.push(zl(e, n, l, t)) : "text" === n.type ? ("element" === t.type && Ol.has(t.tagName) && kl(n)) || r.push(n.value) : "raw" !== n.type || e.options.skipHtml || r.push(n.value);
				return r;
			}
			function zl(e, t, n, r) {
				var a,
					i = e.options,
					o = void 0 === i.transformLinkUri ? Fl : i.transformLinkUri,
					u = e.schema,
					s = t.tagName,
					c = {},
					f = u;
				if (("html" === u.space && "svg" === s && ((f = bl), (e.schema = f)), t.properties)) for (a in t.properties) _l.call(t.properties, a) && Rl(c, a, t.properties[a], e);
				("ol" !== s && "ul" !== s) || e.listDepth++;
				var d = Dl(e, t);
				("ol" !== s && "ul" !== s) || e.listDepth--, (e.schema = u);
				var p,
					h = t.position || { start: { line: null, column: null, offset: null }, end: { line: null, column: null, offset: null } },
					m = i.components && _l.call(i.components, s) ? i.components[s] : s,
					g = "string" === typeof m || m === l.Fragment;
				if (!wl.isValidElementType(m)) throw new TypeError("Component for name `".concat(s, "` not defined or is not renderable"));
				if (((c.key = n), "a" === s && i.linkTarget && (c.target = "function" === typeof i.linkTarget ? i.linkTarget(String(c.href || ""), t.children, "string" === typeof c.title ? c.title : null) : i.linkTarget), "a" === s && o && (c.href = o(String(c.href || ""), t.children, "string" === typeof c.title ? c.title : null)), g || "code" !== s || "element" !== r.type || "pre" === r.tagName || (c.inline = !0), g || ("h1" !== s && "h2" !== s && "h3" !== s && "h4" !== s && "h5" !== s && "h6" !== s) || (c.level = Number.parseInt(s.charAt(1), 10)), "img" === s && i.transformImageUri && (c.src = i.transformImageUri(String(c.src || ""), String(c.alt || ""), "string" === typeof c.title ? c.title : null)), !g && "li" === s && "element" === r.type)) {
					var v = (function (e) {
						var t = -1;
						for (; ++t < e.children.length; ) {
							var n = e.children[t];
							if ("element" === n.type && "input" === n.tagName) return n;
						}
						return null;
					})(t);
					(c.checked = v && v.properties ? Boolean(v.properties.checked) : null), (c.index = Al(r, t)), (c.ordered = "ol" === r.tagName);
				}
				return g || ("ol" !== s && "ul" !== s) || ((c.ordered = "ol" === s), (c.depth = e.listDepth)), ("td" !== s && "th" !== s) || (c.align && (c.style || (c.style = {}), (c.style.textAlign = c.align), delete c.align), g || (c.isHeader = "th" === s)), g || "tr" !== s || "element" !== r.type || (c.isHeader = Boolean("thead" === r.tagName)), i.sourcePos && (c["data-sourcepos"] = [(p = h).start.line, ":", p.start.column, "-", p.end.line, ":", p.end.column].map(String).join("")), !g && i.rawSourcePos && (c.sourcePosition = t.position), !g && i.includeElementIndex && ((c.index = Al(r, t)), (c.siblingCount = Al(r))), g || (c.node = t), d.length > 0 ? l.createElement(m, c, d) : l.createElement(m, c);
			}
			function Al(e, t) {
				for (var n = -1, r = 0; ++n < e.children.length && e.children[n] !== t; ) "element" === e.children[n].type && r++;
				return r;
			}
			function Rl(e, t, n, r) {
				var l = (function (e, t) {
						var n = Kr(t),
							r = t,
							l = Yr;
						if (n in e.normal) return e.property[e.normal[n]];
						if (n.length > 4 && "data" === n.slice(0, 4) && Sl.test(t)) {
							if ("-" === t.charAt(4)) {
								var a = t.slice(5).replace(Cl, Pl);
								r = "data" + a.charAt(0).toUpperCase() + a.slice(1);
							} else {
								var i = t.slice(4);
								if (!Cl.test(i)) {
									var o = i.replace(El, jl);
									"-" !== o.charAt(0) && (o = "-" + o), (t = "data" + o);
								}
							}
							l = il;
						}
						return new l(r, t);
					})(r.schema, t),
					a = n;
				null !== a &&
					void 0 !== a &&
					a === a &&
					(Array.isArray(a) &&
						(a = l.commaSeparated
							? (function (e, t) {
									var n = t || {};
									return ("" === e[e.length - 1] ? [].concat(d(e), [""]) : e).join((n.padRight ? " " : "") + "," + (!1 === n.padLeft ? "" : " ")).trim();
							  })(a)
							: a.join(" ").trim()),
					"style" === l.property &&
						"string" === typeof a &&
						(a = (function (e) {
							var t = {};
							try {
								Ll(e, n);
							} catch (r) {}
							return t;
							function n(e, n) {
								var r = "-ms-" === e.slice(0, 4) ? "ms-".concat(e.slice(4)) : e;
								t[r.replace(/-([a-z])/g, Il)] = n;
							}
						})(a)),
					l.space && l.property ? (e[_l.call(Nl, l.property) ? Nl[l.property] : l.property] = a) : l.attribute && (e[l.attribute] = a));
			}
			function Il(e, t) {
				return t.toUpperCase();
			}
			var Ml = {}.hasOwnProperty,
				Bl = {
					plugins: { to: "remarkPlugins", id: "change-plugins-to-remarkplugins" },
					renderers: { to: "components", id: "change-renderers-to-components" },
					astPlugins: { id: "remove-buggy-html-in-markdown-parser" },
					allowDangerousHtml: { id: "remove-buggy-html-in-markdown-parser" },
					escapeHtml: { id: "remove-buggy-html-in-markdown-parser" },
					source: { to: "children", id: "change-source-to-children" },
					allowNode: { to: "allowElement", id: "replace-allownode-allowedtypes-and-disallowedtypes" },
					allowedTypes: { to: "allowedElements", id: "replace-allownode-allowedtypes-and-disallowedtypes" },
					disallowedTypes: { to: "disallowedElements", id: "replace-allownode-allowedtypes-and-disallowedtypes" },
					includeNodeIndex: { to: "includeElementIndex", id: "change-includenodeindex-to-includeelementindex" },
				};
			function Ul(e) {
				for (var t in Bl)
					if (Ml.call(Bl, t) && Ml.call(e, t)) {
						var n = Bl[t];
						console.warn(
							"[react-markdown] Warning: please "
								.concat(n.to ? "use `".concat(n.to, "` instead of") : "remove", " `")
								.concat(t, "` (see <")
								.concat("https://github.com/remarkjs/react-markdown/blob/main/changelog.md", "#")
								.concat(n.id, "> for more info)")
						),
							delete Bl[t];
					}
				var r = ut()
						.use(hr)
						.use(e.remarkPlugins || [])
						.use($r, Ue(Ue({}, e.remarkRehypeOptions), {}, { allowDangerousHtml: !0 }))
						.use(e.rehypePlugins || [])
						.use(xl, e),
					a = new et();
				"string" === typeof e.children ? (a.value = e.children) : void 0 !== e.children && null !== e.children && console.warn("[react-markdown] Warning: please pass a string as `children` (not: `".concat(e.children, "`)"));
				var i = r.runSync(r.parse(a), a);
				if ("root" !== i.type) throw new TypeError("Expected a `root` node");
				var o = l.createElement(l.Fragment, {}, Dl({ options: e, schema: yl, listDepth: 0 }, i));
				return e.className && (o = l.createElement("div", { className: e.className }, o)), o;
			}
			Ul.propTypes = { children: Wr.string, className: Wr.string, allowElement: Wr.func, allowedElements: Wr.arrayOf(Wr.string), disallowedElements: Wr.arrayOf(Wr.string), unwrapDisallowed: Wr.bool, remarkPlugins: Wr.arrayOf(Wr.oneOfType([Wr.object, Wr.func, Wr.arrayOf(Wr.oneOfType([Wr.bool, Wr.string, Wr.object, Wr.func, Wr.arrayOf(Wr.any)]))])), rehypePlugins: Wr.arrayOf(Wr.oneOfType([Wr.object, Wr.func, Wr.arrayOf(Wr.oneOfType([Wr.bool, Wr.string, Wr.object, Wr.func, Wr.arrayOf(Wr.any)]))])), sourcePos: Wr.bool, rawSourcePos: Wr.bool, skipHtml: Wr.bool, includeElementIndex: Wr.bool, transformLinkUri: Wr.oneOfType([Wr.func, Wr.bool]), linkTarget: Wr.oneOfType([Wr.func, Wr.string]), transformImageUri: Wr.func, components: Wr.object };
			for (
				var Hl = {
						tokenize: function (e, t, n) {
							var r = 0;
							return function t(a) {
								if ((87 === a || 119 === a) && r < 3) return r++, e.consume(a), t;
								if (46 === a && 3 === r) return e.consume(a), l;
								return n(a);
							};
							function l(e) {
								return null === e ? n(e) : t(e);
							}
						},
						partial: !0,
					},
					Vl = {
						tokenize: function (e, t, n) {
							var r, l, a;
							return i;
							function i(t) {
								return 46 === t || 95 === t ? e.check(Wl, u, o)(t) : null === t || Ot(t) || At(t) || (45 !== t && Rt(t)) ? u(t) : ((a = !0), e.consume(t), i);
							}
							function o(t) {
								return 95 === t ? (r = !0) : ((l = r), (r = void 0)), e.consume(t), i;
							}
							function u(e) {
								return l || r || !a ? n(e) : t(e);
							}
						},
						partial: !0,
					},
					$l = {
						tokenize: function (e, t) {
							var n = 0,
								r = 0;
							return l;
							function l(i) {
								return 40 === i ? (n++, e.consume(i), l) : 41 === i && r < n ? a(i) : 33 === i || 34 === i || 38 === i || 39 === i || 41 === i || 42 === i || 44 === i || 46 === i || 58 === i || 59 === i || 60 === i || 63 === i || 93 === i || 95 === i || 126 === i ? e.check(Wl, t, a)(i) : null === i || Ot(i) || At(i) ? t(i) : (e.consume(i), l);
							}
							function a(t) {
								return 41 === t && r++, e.consume(t), l;
							}
						},
						partial: !0,
					},
					Wl = {
						tokenize: function (e, t, n) {
							return r;
							function r(i) {
								return 33 === i || 34 === i || 39 === i || 41 === i || 42 === i || 44 === i || 46 === i || 58 === i || 59 === i || 63 === i || 95 === i || 126 === i ? (e.consume(i), r) : 38 === i ? (e.consume(i), a) : 93 === i ? (e.consume(i), l) : 60 === i || null === i || Ot(i) || At(i) ? t(i) : n(i);
							}
							function l(e) {
								return null === e || 40 === e || 91 === e || Ot(e) || At(e) ? t(e) : r(e);
							}
							function a(e) {
								return jt(e) ? i(e) : n(e);
							}
							function i(t) {
								return 59 === t ? (e.consume(t), r) : jt(t) ? (e.consume(t), i) : n(t);
							}
						},
						partial: !0,
					},
					ql = {
						tokenize: function (e, t, n) {
							return function (t) {
								return e.consume(t), r;
							};
							function r(e) {
								return Lt(e) ? n(e) : t(e);
							}
						},
						partial: !0,
					},
					Ql = {
						tokenize: function (e, t, n) {
							var r = this;
							return function (t) {
								if ((87 !== t && 119 !== t) || !Jl.call(r, r.previous) || ra(r.events)) return n(t);
								return e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(Hl, e.attempt(Vl, e.attempt($l, l), n), n)(t);
							};
							function l(n) {
								return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(n);
							}
						},
						previous: Jl,
					},
					Kl = {
						tokenize: function (e, t, n) {
							var r = this,
								l = "",
								a = !1;
							return function (t) {
								if ((72 === t || 104 === t) && ea.call(r, r.previous) && !ra(r.events)) return e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), (l += String.fromCodePoint(t)), e.consume(t), i;
								return n(t);
							};
							function i(t) {
								if (jt(t) && l.length < 5) return (l += String.fromCodePoint(t)), e.consume(t), i;
								if (58 === t) {
									var r = l.toLowerCase();
									if ("http" === r || "https" === r) return e.consume(t), o;
								}
								return n(t);
							}
							function o(t) {
								return 47 === t ? (e.consume(t), a ? u : ((a = !0), o)) : n(t);
							}
							function u(t) {
								return null === t || _t(t) || Ot(t) || At(t) || Rt(t) ? n(t) : e.attempt(Vl, e.attempt($l, s), n)(t);
							}
							function s(n) {
								return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(n);
							}
						},
						previous: ea,
					},
					Yl = {
						tokenize: function (e, t, n) {
							var r,
								l,
								a = this;
							return function (t) {
								if (!na(t) || !ta.call(a, a.previous) || ra(a.events)) return n(t);
								return e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), i(t);
							};
							function i(t) {
								return na(t) ? (e.consume(t), i) : 64 === t ? (e.consume(t), o) : n(t);
							}
							function o(t) {
								return 46 === t ? e.check(ql, s, u)(t) : 45 === t || 95 === t || Lt(t) ? ((l = !0), e.consume(t), o) : s(t);
							}
							function u(t) {
								return e.consume(t), (r = !0), o;
							}
							function s(i) {
								return l && r && jt(a.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(i)) : n(i);
							}
						},
						previous: ta,
					},
					Xl = {},
					Zl = { text: Xl },
					Gl = 48;
				Gl < 123;

			)
				(Xl[Gl] = Yl), 58 === ++Gl ? (Gl = 65) : 91 === Gl && (Gl = 97);
			function Jl(e) {
				return null === e || 40 === e || 42 === e || 95 === e || 91 === e || 93 === e || 126 === e || Ot(e);
			}
			function ea(e) {
				return !jt(e);
			}
			function ta(e) {
				return !(47 === e || na(e));
			}
			function na(e) {
				return 43 === e || 45 === e || 46 === e || 95 === e || Lt(e);
			}
			function ra(e) {
				for (var t = e.length, n = !1; t--; ) {
					var r = e[t][1];
					if (("labelLink" === r.type || "labelImage" === r.type) && !r._balanced) {
						n = !0;
						break;
					}
					if (r._gfmAutolinkLiteralWalkedInto) {
						n = !1;
						break;
					}
				}
				return e.length > 0 && !n && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), n;
			}
			(Xl[43] = Yl), (Xl[45] = Yl), (Xl[46] = Yl), (Xl[95] = Yl), (Xl[72] = [Yl, Kl]), (Xl[104] = [Yl, Kl]), (Xl[87] = [Yl, Ql]), (Xl[119] = [Yl, Ql]);
			var la = {
				tokenize: function (e, t, n) {
					var r = this;
					return Mt(
						e,
						function (e) {
							var l = r.events[r.events.length - 1];
							return l && "gfmFootnoteDefinitionIndent" === l[1].type && 4 === l[2].sliceSerialize(l[1], !0).length ? t(e) : n(e);
						},
						"gfmFootnoteDefinitionIndent",
						5
					);
				},
				partial: !0,
			};
			function aa() {
				var e;
				return { document: Me({}, 91, { tokenize: sa, continuation: { tokenize: ca }, exit: fa }), text: ((e = {}), Me(e, 91, { tokenize: ua }), Me(e, 93, { add: "after", tokenize: ia, resolveTo: oa }), e) };
			}
			function ia(e, t, n) {
				for (var r, l = this, a = l.events.length, i = l.parser.gfmFootnotes || (l.parser.gfmFootnotes = []); a--; ) {
					var o = l.events[a][1];
					if ("labelImage" === o.type) {
						r = o;
						break;
					}
					if ("gfmFootnoteCall" === o.type || "labelLink" === o.type || "label" === o.type || "image" === o.type || "link" === o.type) break;
				}
				return function (a) {
					if (!r || !r._balanced) return n(a);
					var o = pn(l.sliceSerialize({ start: r.end, end: l.now() }));
					if (94 !== o.codePointAt(0) || !i.includes(o.slice(1))) return n(a);
					return e.enter("gfmFootnoteCallLabelMarker"), e.consume(a), e.exit("gfmFootnoteCallLabelMarker"), t(a);
				};
			}
			function oa(e, t) {
				for (var n = e.length; n--; )
					if ("labelImage" === e[n][1].type && "enter" === e[n][0]) {
						e[n][1];
						break;
					}
				(e[n + 1][1].type = "data"), (e[n + 3][1].type = "gfmFootnoteCallLabelMarker");
				var r = { type: "gfmFootnoteCall", start: Object.assign({}, e[n + 3][1].start), end: Object.assign({}, e[e.length - 1][1].end) },
					l = { type: "gfmFootnoteCallMarker", start: Object.assign({}, e[n + 3][1].end), end: Object.assign({}, e[n + 3][1].end) };
				l.end.column++, l.end.offset++, l.end._bufferIndex++;
				var a = { type: "gfmFootnoteCallString", start: Object.assign({}, l.end), end: Object.assign({}, e[e.length - 1][1].start) },
					i = { type: "chunkString", contentType: "string", start: Object.assign({}, a.start), end: Object.assign({}, a.end) },
					o = [e[n + 1], e[n + 2], ["enter", r, t], e[n + 3], e[n + 4], ["enter", l, t], ["exit", l, t], ["enter", a, t], ["enter", i, t], ["exit", i, t], ["exit", a, t], e[e.length - 2], e[e.length - 1], ["exit", r, t]];
				return e.splice.apply(e, [n, e.length - n + 1].concat(o)), e;
			}
			function ua(e, t, n) {
				var r,
					l = this,
					a = l.parser.gfmFootnotes || (l.parser.gfmFootnotes = []),
					i = 0;
				return function (t) {
					return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(t), e.exit("gfmFootnoteCallLabelMarker"), o;
				};
				function o(t) {
					return 94 !== t ? n(t) : (e.enter("gfmFootnoteCallMarker"), e.consume(t), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), (e.enter("chunkString").contentType = "string"), u);
				}
				function u(o) {
					if (i > 999 || (93 === o && !r) || null === o || 91 === o || Ot(o)) return n(o);
					if (93 === o) {
						e.exit("chunkString");
						var c = e.exit("gfmFootnoteCallString");
						return a.includes(pn(l.sliceSerialize(c))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(o), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(o);
					}
					return Ot(o) || (r = !0), i++, e.consume(o), 92 === o ? s : u;
				}
				function s(t) {
					return 91 === t || 92 === t || 93 === t ? (e.consume(t), i++, u) : u(t);
				}
			}
			function sa(e, t, n) {
				var r,
					l,
					a = this,
					i = a.parser.gfmFootnotes || (a.parser.gfmFootnotes = []),
					o = 0;
				return function (t) {
					return (e.enter("gfmFootnoteDefinition")._container = !0), e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionLabelMarker"), u;
				};
				function u(t) {
					return 94 === t ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), (e.enter("chunkString").contentType = "string"), s) : n(t);
				}
				function s(t) {
					if (o > 999 || (93 === t && !l) || null === t || 91 === t || Ot(t)) return n(t);
					if (93 === t) {
						e.exit("chunkString");
						var i = e.exit("gfmFootnoteDefinitionLabelString");
						return (r = pn(a.sliceSerialize(i))), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), f;
					}
					return Ot(t) || (l = !0), o++, e.consume(t), 92 === t ? c : s;
				}
				function c(t) {
					return 91 === t || 92 === t || 93 === t ? (e.consume(t), o++, s) : s(t);
				}
				function f(t) {
					return 58 === t ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), i.includes(r) || i.push(r), Mt(e, d, "gfmFootnoteDefinitionWhitespace")) : n(t);
				}
				function d(e) {
					return t(e);
				}
			}
			function ca(e, t, n) {
				return e.check(Vt, t, e.attempt(la, t, n));
			}
			function fa(e) {
				e.exit("gfmFootnoteDefinition");
			}
			function da(e) {
				var t = (e || {}).singleTilde,
					n = {
						tokenize: function (e, n, r) {
							var l = this.previous,
								a = this.events,
								i = 0;
							return function (t) {
								if (126 === l && "characterEscape" !== a[a.length - 1][1].type) return r(t);
								return e.enter("strikethroughSequenceTemporary"), o(t);
							};
							function o(a) {
								var u = zn(l);
								if (126 === a) return i > 1 ? r(a) : (e.consume(a), i++, o);
								if (i < 2 && !t) return r(a);
								var s = e.exit("strikethroughSequenceTemporary"),
									c = zn(a);
								return (s._open = !c || (2 === c && Boolean(u))), (s._close = !u || (2 === u && Boolean(c))), n(a);
							}
						},
						resolveAll: function (e, t) {
							var n = -1;
							for (; ++n < e.length; )
								if ("enter" === e[n][0] && "strikethroughSequenceTemporary" === e[n][1].type && e[n][1]._close)
									for (var r = n; r--; )
										if ("exit" === e[r][0] && "strikethroughSequenceTemporary" === e[r][1].type && e[r][1]._open && e[n][1].end.offset - e[n][1].start.offset === e[r][1].end.offset - e[r][1].start.offset) {
											(e[n][1].type = "strikethroughSequence"), (e[r][1].type = "strikethroughSequence");
											var l = { type: "strikethrough", start: Object.assign({}, e[r][1].start), end: Object.assign({}, e[n][1].end) },
												a = { type: "strikethroughText", start: Object.assign({}, e[r][1].end), end: Object.assign({}, e[n][1].start) },
												i = [
													["enter", l, t],
													["enter", e[r][1], t],
													["exit", e[r][1], t],
													["enter", a, t],
												],
												o = t.parser.constructs.insideSpan.null;
											o && xt(i, i.length, 0, tn(o, e.slice(r + 1, n), t)),
												xt(i, i.length, 0, [
													["exit", a, t],
													["enter", e[n][1], t],
													["exit", e[n][1], t],
													["exit", l, t],
												]),
												xt(e, r - 1, n - r + 3, i),
												(n = r + i.length - 2);
											break;
										}
							n = -1;
							for (; ++n < e.length; ) "strikethroughSequenceTemporary" === e[n][1].type && (e[n][1].type = "data");
							return e;
						},
					};
				return (null !== t && void 0 !== t) || (t = !0), { text: Me({}, 126, n), insideSpan: { null: [n] }, attentionMarkers: { null: [126] } };
			}
			var pa = (function () {
				function e() {
					p(this, e), (this.map = []);
				}
				return (
					v(e, [
						{
							key: "add",
							value: function (e, t, n) {
								!(function (e, t, n, r) {
									var l = 0;
									if (0 === n && 0 === r.length) return;
									for (; l < e.map.length; ) {
										var a;
										if (e.map[l][0] === t) return (e.map[l][1] += n), void (a = e.map[l][2]).push.apply(a, d(r));
										l += 1;
									}
									e.map.push([t, n, r]);
								})(this, e, t, n);
							},
						},
						{
							key: "consume",
							value: function (e) {
								if (
									(this.map.sort(function (e, t) {
										return e[0] - t[0];
									}),
									0 !== this.map.length)
								) {
									for (var t = this.map.length, n = []; t > 0; ) (t -= 1), n.push(e.slice(this.map[t][0] + this.map[t][1])), n.push(this.map[t][2]), (e.length = this.map[t][0]);
									n.push(d(e)), (e.length = 0);
									for (var r = n.pop(); r; ) e.push.apply(e, d(r)), (r = n.pop());
									this.map.length = 0;
								}
							},
						},
					]),
					e
				);
			})();
			function ha(e, t) {
				for (var n = !1, r = []; t < e.length; ) {
					var l = e[t];
					if (n) {
						if ("enter" === l[0]) "tableContent" === l[1].type && r.push("tableDelimiterMarker" === e[t + 1][1].type ? "left" : "none");
						else if ("tableContent" === l[1].type) {
							if ("tableDelimiterMarker" === e[t - 1][1].type) {
								var a = r.length - 1;
								r[a] = "left" === r[a] ? "center" : "right";
							}
						} else if ("tableDelimiterRow" === l[1].type) break;
					} else "enter" === l[0] && "tableDelimiterRow" === l[1].type && (n = !0);
					t += 1;
				}
				return r;
			}
			var ma = {
				flow: {
					null: {
						tokenize: function (e, t, n) {
							var r,
								l = this,
								a = 0,
								i = 0;
							return function (e) {
								var t = l.events.length - 1;
								for (; t > -1; ) {
									var r = l.events[t][1].type;
									if ("lineEnding" !== r && "linePrefix" !== r) break;
									t--;
								}
								var a = t > -1 ? l.events[t][1].type : null,
									i = "tableHead" === a || "tableRow" === a ? x : o;
								if (i === x && l.parser.lazy[l.now().line]) return n(e);
								return i(e);
							};
							function o(t) {
								return (
									e.enter("tableHead"),
									e.enter("tableRow"),
									(function (e) {
										if (124 === e) return u(e);
										return (r = !0), (i += 1), u(e);
									})(t)
								);
							}
							function u(t) {
								return null === t ? n(t) : Dt(t) ? (i > 1 ? ((i = 0), (l.interrupt = !0), e.exit("tableRow"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), f) : n(t)) : zt(t) ? Mt(e, u, "whitespace")(t) : ((i += 1), r && ((r = !1), (a += 1)), 124 === t ? (e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), (r = !0), u) : (e.enter("data"), s(t)));
							}
							function s(t) {
								return null === t || 124 === t || Ot(t) ? (e.exit("data"), u(t)) : (e.consume(t), 92 === t ? c : s);
							}
							function c(t) {
								return 92 === t || 124 === t ? (e.consume(t), s) : s(t);
							}
							function f(t) {
								return (l.interrupt = !1), l.parser.lazy[l.now().line] ? n(t) : (e.enter("tableDelimiterRow"), (r = !1), zt(t) ? Mt(e, d, "linePrefix", l.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : d(t));
							}
							function d(t) {
								return 45 === t || 58 === t ? h(t) : 124 === t ? ((r = !0), e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), p) : b(t);
							}
							function p(t) {
								return zt(t) ? Mt(e, h, "whitespace")(t) : h(t);
							}
							function h(t) {
								return 58 === t ? ((i += 1), (r = !0), e.enter("tableDelimiterMarker"), e.consume(t), e.exit("tableDelimiterMarker"), m) : 45 === t ? ((i += 1), m(t)) : null === t || Dt(t) ? y(t) : b(t);
							}
							function m(t) {
								return 45 === t ? (e.enter("tableDelimiterFiller"), g(t)) : b(t);
							}
							function g(t) {
								return 45 === t ? (e.consume(t), g) : 58 === t ? ((r = !0), e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(t), e.exit("tableDelimiterMarker"), v) : (e.exit("tableDelimiterFiller"), v(t));
							}
							function v(t) {
								return zt(t) ? Mt(e, y, "whitespace")(t) : y(t);
							}
							function y(n) {
								return 124 === n ? d(n) : (null === n || Dt(n)) && r && a === i ? (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(n)) : b(n);
							}
							function b(e) {
								return n(e);
							}
							function x(t) {
								return e.enter("tableRow"), w(t);
							}
							function w(n) {
								return 124 === n ? (e.enter("tableCellDivider"), e.consume(n), e.exit("tableCellDivider"), w) : null === n || Dt(n) ? (e.exit("tableRow"), t(n)) : zt(n) ? Mt(e, w, "whitespace")(n) : (e.enter("data"), k(n));
							}
							function k(t) {
								return null === t || 124 === t || Ot(t) ? (e.exit("data"), w(t)) : (e.consume(t), 92 === t ? S : k);
							}
							function S(t) {
								return 92 === t || 124 === t ? (e.consume(t), k) : k(t);
							}
						},
						resolveAll: function (e, t) {
							var n,
								r,
								l,
								a = -1,
								i = !0,
								o = 0,
								u = [0, 0, 0, 0],
								s = [0, 0, 0, 0],
								c = !1,
								f = 0,
								d = new pa();
							for (; ++a < e.length; ) {
								var p = e[a],
									h = p[1];
								"enter" === p[0]
									? "tableHead" === h.type
										? ((c = !1), 0 !== f && (va(d, t, f, n, r), (r = void 0), (f = 0)), (n = { type: "table", start: Object.assign({}, h.start), end: Object.assign({}, h.end) }), d.add(a, 0, [["enter", n, t]]))
										: "tableRow" === h.type || "tableDelimiterRow" === h.type
										? ((i = !0), (l = void 0), (u = [0, 0, 0, 0]), (s = [0, a + 1, 0, 0]), c && ((c = !1), (r = { type: "tableBody", start: Object.assign({}, h.start), end: Object.assign({}, h.end) }), d.add(a, 0, [["enter", r, t]])), (o = "tableDelimiterRow" === h.type ? 2 : r ? 3 : 1))
										: !o || ("data" !== h.type && "tableDelimiterMarker" !== h.type && "tableDelimiterFiller" !== h.type)
										? "tableCellDivider" === h.type && (i ? (i = !1) : (0 !== u[1] && ((s[0] = s[1]), (l = ga(d, t, u, o, void 0, l))), (s = [(u = s)[1], a, 0, 0])))
										: ((i = !1), 0 === s[2] && (0 !== u[1] && ((s[0] = s[1]), (l = ga(d, t, u, o, void 0, l)), (u = [0, 0, 0, 0])), (s[2] = a)))
									: "tableHead" === h.type
									? ((c = !0), (f = a))
									: "tableRow" === h.type || "tableDelimiterRow" === h.type
									? ((f = a), 0 !== u[1] ? ((s[0] = s[1]), (l = ga(d, t, u, o, a, l))) : 0 !== s[1] && (l = ga(d, t, s, o, a, l)), (o = 0))
									: !o || ("data" !== h.type && "tableDelimiterMarker" !== h.type && "tableDelimiterFiller" !== h.type) || (s[3] = a);
							}
							0 !== f && va(d, t, f, n, r);
							d.consume(t.events), (a = -1);
							for (; ++a < t.events.length; ) {
								var m = t.events[a];
								"enter" === m[0] && "table" === m[1].type && (m[1]._align = ha(t.events, a));
							}
							return e;
						},
					},
				},
			};
			function ga(e, t, n, r, l, a) {
				var i = 1 === r ? "tableHeader" : 2 === r ? "tableDelimiter" : "tableData";
				0 !== n[0] && ((a.end = Object.assign({}, ya(t.events, n[0]))), e.add(n[0], 0, [["exit", a, t]]));
				var o = ya(t.events, n[1]);
				if (((a = { type: i, start: Object.assign({}, o), end: Object.assign({}, o) }), e.add(n[1], 0, [["enter", a, t]]), 0 !== n[2])) {
					var u = ya(t.events, n[2]),
						s = ya(t.events, n[3]),
						c = { type: "tableContent", start: Object.assign({}, u), end: Object.assign({}, s) };
					if ((e.add(n[2], 0, [["enter", c, t]]), 2 !== r)) {
						var f = t.events[n[2]],
							d = t.events[n[3]];
						if (((f[1].end = Object.assign({}, d[1].end)), (f[1].type = "chunkText"), (f[1].contentType = "text"), n[3] > n[2] + 1)) {
							var p = n[2] + 1,
								h = n[3] - n[2] - 1;
							e.add(p, h, []);
						}
					}
					e.add(n[3] + 1, 0, [["exit", c, t]]);
				}
				return void 0 !== l && ((a.end = Object.assign({}, ya(t.events, l))), e.add(l, 0, [["exit", a, t]]), (a = void 0)), a;
			}
			function va(e, t, n, r, l) {
				var a = [],
					i = ya(t.events, n);
				l && ((l.end = Object.assign({}, i)), a.push(["exit", l, t])), (r.end = Object.assign({}, i)), a.push(["exit", r, t]), e.add(n + 1, 0, a);
			}
			function ya(e, t) {
				var n = e[t],
					r = "enter" === n[0] ? "start" : "end";
				return n[1][r];
			}
			var ba = {
					tokenize: function (e, t, n) {
						var r = this;
						return function (t) {
							if (null !== r.previous || !r._gfmTasklistFirstContentOfListItem) return n(t);
							return e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(t), e.exit("taskListCheckMarker"), l;
						};
						function l(t) {
							return Ot(t) ? (e.enter("taskListCheckValueUnchecked"), e.consume(t), e.exit("taskListCheckValueUnchecked"), a) : 88 === t || 120 === t ? (e.enter("taskListCheckValueChecked"), e.consume(t), e.exit("taskListCheckValueChecked"), a) : n(t);
						}
						function a(t) {
							return 93 === t ? (e.enter("taskListCheckMarker"), e.consume(t), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), i) : n(t);
						}
						function i(r) {
							return Dt(r) ? t(r) : zt(r) ? e.check({ tokenize: wa }, t, n)(r) : n(r);
						}
					},
				},
				xa = { text: Me({}, 91, ba) };
			function wa(e, t, n) {
				return Mt(
					e,
					function (e) {
						return null === e ? n(e) : t(e);
					},
					"whitespace"
				);
			}
			function ka(e, t) {
				var n = String(e);
				if ("string" !== typeof t) throw new TypeError("Expected character");
				for (var r = 0, l = n.indexOf(t); -1 !== l; ) r++, (l = n.indexOf(t, l + t.length));
				return r;
			}
			var Sa = {}.hasOwnProperty,
				Ca = function (e, t, n, r) {
					var l, a;
					"string" === typeof t || t instanceof RegExp ? ((a = [[t, n]]), (l = r)) : ((a = t), (l = n)), l || (l = {});
					for (
						var i = gr(l.ignore || []),
							o = (function (e) {
								var t = [];
								if ("object" !== typeof e) throw new TypeError("Expected array or object as schema");
								if (Array.isArray(e)) for (var n = -1; ++n < e.length; ) t.push([Ea(e[n][0]), ja(e[n][1])]);
								else {
									var r;
									for (r in e) Sa.call(e, r) && t.push([Ea(r), ja(e[r])]);
								}
								return t;
							})(a),
							u = -1;
						++u < o.length;

					)
						xr(e, "text", s);
					return e;
					function s(e, t) {
						for (var n, r = -1; ++r < t.length; ) {
							var l = t[r];
							if (i(l, n ? n.children.indexOf(l) : void 0, n)) return;
							n = l;
						}
						if (n)
							return (function (e, t) {
								var n = t[t.length - 1],
									r = o[u][0],
									l = o[u][1],
									a = 0,
									i = n.children.indexOf(e),
									s = !1,
									c = [];
								r.lastIndex = 0;
								var f = r.exec(e.value);
								for (; f; ) {
									var p = f.index,
										h = { index: f.index, input: f.input, stack: [].concat(d(t), [e]) },
										m = l.apply(void 0, d(f).concat([h]));
									if (("string" === typeof m && (m = m.length > 0 ? { type: "text", value: m } : void 0), !1 !== m)) {
										var g;
										if ((a !== p && c.push({ type: "text", value: e.value.slice(a, p) }), Array.isArray(m))) (g = c).push.apply(g, d(m));
										else m && c.push(m);
										(a = p + f[0].length), (s = !0);
									}
									if (!r.global) break;
									f = r.exec(e.value);
								}
								if (s) {
									var v;
									a < e.value.length && c.push({ type: "text", value: e.value.slice(a) }), (v = n.children).splice.apply(v, [i, 1].concat(d(c)));
								} else c = [e];
								return i + c.length;
							})(e, t);
					}
				};
			function Ea(e) {
				return "string" === typeof e
					? new RegExp(
							(function (e) {
								if ("string" !== typeof e) throw new TypeError("Expected a string");
								return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
							})(e),
							"g"
					  )
					: e;
			}
			function ja(e) {
				return "function" === typeof e
					? e
					: function () {
							return e;
					  };
			}
			var Pa = "phrasing",
				Na = ["autolink", "link", "image", "label"],
				La = {
					transforms: [
						function (e) {
							Ca(
								e,
								[
									[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, _a],
									[/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g, Oa],
								],
								{ ignore: ["link", "linkReference"] }
							);
						},
					],
					enter: {
						literalAutolink: function (e) {
							this.enter({ type: "link", title: null, url: "", children: [] }, e);
						},
						literalAutolinkEmail: Fa,
						literalAutolinkHttp: Fa,
						literalAutolinkWww: Fa,
					},
					exit: {
						literalAutolink: function (e) {
							this.exit(e);
						},
						literalAutolinkEmail: function (e) {
							this.config.exit.autolinkEmail.call(this, e);
						},
						literalAutolinkHttp: function (e) {
							this.config.exit.autolinkProtocol.call(this, e);
						},
						literalAutolinkWww: function (e) {
							this.config.exit.data.call(this, e);
							var t = this.stack[this.stack.length - 1];
							t.url = "http://" + this.sliceSerialize(e);
						},
					},
				},
				Ta = {
					unsafe: [
						{ character: "@", before: "[+\\-.\\w]", after: "[\\-.\\w]", inConstruct: Pa, notInConstruct: Na },
						{ character: ".", before: "[Ww]", after: "[\\-.\\w]", inConstruct: Pa, notInConstruct: Na },
						{ character: ":", before: "[ps]", after: "\\/", inConstruct: Pa, notInConstruct: Na },
					],
				};
			function Fa(e) {
				this.config.enter.autolinkProtocol.call(this, e);
			}
			function _a(e, t, n, r, l) {
				var a = "";
				if (!Da(l)) return !1;
				if (
					(/^w/i.test(t) && ((n = t + n), (t = ""), (a = "http://")),
					!(function (e) {
						var t = e.split(".");
						if (t.length < 2 || (t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1]))) || (t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])))) return !1;
						return !0;
					})(n))
				)
					return !1;
				var i = (function (e) {
					var t = /[!"&'),.:;<>?\]}]+$/.exec(e);
					if (!t) return [e, void 0];
					e = e.slice(0, t.index);
					var n = t[0],
						r = n.indexOf(")"),
						l = ka(e, "("),
						a = ka(e, ")");
					for (; -1 !== r && l > a; ) (e += n.slice(0, r + 1)), (r = (n = n.slice(r + 1)).indexOf(")")), a++;
					return [e, n];
				})(n + r);
				if (!i[0]) return !1;
				var o = { type: "link", title: null, url: a + t + i[0], children: [{ type: "text", value: t + i[0] }] };
				return i[1] ? [o, { type: "text", value: i[1] }] : o;
			}
			function Oa(e, t, n, r) {
				return !(!Da(r, !0) || /[-\d_]$/.test(n)) && { type: "link", title: null, url: "mailto:" + t + "@" + n, children: [{ type: "text", value: t + "@" + n }] };
			}
			function Da(e, t) {
				var n = e.input.charCodeAt(e.index - 1);
				return (0 === e.index || At(n) || Rt(n)) && (!t || 47 !== n);
			}
			function za(e) {
				return e.label || !e.identifier ? e.label || "" : ir(e.identifier);
			}
			function Aa(e, t, n, r) {
				for (var l = r.join.length; l--; ) {
					var a = r.join[l](e, t, n, r);
					if (!0 === a || 1 === a) break;
					if ("number" === typeof a) return "\n".repeat(1 + a);
					if (!1 === a) return "\n\n\x3c!----\x3e\n\n";
				}
				return "\n\n";
			}
			var Ra = /\r?\n|\r/g;
			function Ia(e) {
				if (!e._compiled) {
					var t = (e.atBreak ? "[\\r\\n][\\t ]*" : "") + (e.before ? "(?:" + e.before + ")" : "");
					e._compiled = new RegExp((t ? "(" + t + ")" : "") + (/[|\\{}()[\]^$+*?.-]/.test(e.character) ? "\\" : "") + e.character + (e.after ? "(?:" + e.after + ")" : ""), "g");
				}
				return e._compiled;
			}
			function Ma(e, t) {
				return Ba(e, t.inConstruct, !0) && !Ba(e, t.notInConstruct, !1);
			}
			function Ba(e, t, n) {
				if (("string" === typeof t && (t = [t]), !t || 0 === t.length)) return n;
				for (var r = -1; ++r < t.length; ) if (e.includes(t[r])) return !0;
				return !1;
			}
			function Ua(e, t, n) {
				for (var r = (n.before || "") + (t || "") + (n.after || ""), l = [], a = [], i = {}, o = -1; ++o < e.unsafe.length; ) {
					var u = e.unsafe[o];
					if (Ma(e.stack, u))
						for (var s = Ia(u), c = void 0; (c = s.exec(r)); ) {
							var f = "before" in u || Boolean(u.atBreak),
								d = "after" in u,
								p = c.index + (f ? c[1].length : 0);
							l.includes(p) ? (i[p].before && !f && (i[p].before = !1), i[p].after && !d && (i[p].after = !1)) : (l.push(p), (i[p] = { before: f, after: d }));
						}
				}
				l.sort(Ha);
				var h = n.before ? n.before.length : 0,
					m = r.length - (n.after ? n.after.length : 0);
				for (o = -1; ++o < l.length; ) {
					var g = l[o];
					g < h || g >= m || (g + 1 < m && l[o + 1] === g + 1 && i[g].after && !i[g + 1].before && !i[g + 1].after) || (l[o - 1] === g - 1 && i[g].before && !i[g - 1].before && !i[g - 1].after) || (h !== g && a.push(Va(r.slice(h, g), "\\")), (h = g), !/[!-/:-@[-`{-~]/.test(r.charAt(g)) || (n.encode && n.encode.includes(r.charAt(g))) ? (a.push("&#x" + r.charCodeAt(g).toString(16).toUpperCase() + ";"), h++) : a.push("\\"));
				}
				return a.push(Va(r.slice(h, m), n.after)), a.join("");
			}
			function Ha(e, t) {
				return e - t;
			}
			function Va(e, t) {
				for (var n, r = /\\(?=[!-/:-@[-`{-~])/g, l = [], a = [], i = e + t, o = -1, u = 0; (n = r.exec(i)); ) l.push(n.index);
				for (; ++o < l.length; ) u !== l[o] && a.push(e.slice(u, l[o])), a.push("\\"), (u = l[o]);
				return a.push(e.slice(u)), a.join("");
			}
			function $a(e) {
				var t = e || {},
					n = t.now || {},
					r = t.lineShift || 0,
					l = n.line || 1,
					a = n.column || 1;
				return {
					move: function (e) {
						var t = e || "",
							n = t.split(/\r?\n|\r/g),
							i = n[n.length - 1];
						return (l += n.length - 1), (a = 1 === n.length ? a + i.length : 1 + i.length + r), t;
					},
					current: function () {
						return { now: { line: l, column: a }, lineShift: r };
					},
					shift: function (e) {
						r += e;
					},
				};
			}
			function Wa(e) {
				this.enter({ type: "footnoteDefinition", identifier: "", label: "", children: [] }, e);
			}
			function qa() {
				this.buffer();
			}
			function Qa(e) {
				var t = this.resume(),
					n = this.stack[this.stack.length - 1];
				(n.label = t), (n.identifier = pn(this.sliceSerialize(e)).toLowerCase());
			}
			function Ka(e) {
				this.exit(e);
			}
			function Ya(e) {
				this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
			}
			function Xa() {
				this.buffer();
			}
			function Za(e) {
				var t = this.resume(),
					n = this.stack[this.stack.length - 1];
				(n.label = t), (n.identifier = pn(this.sliceSerialize(e)).toLowerCase());
			}
			function Ga(e) {
				this.exit(e);
			}
			function Ja(e, t, n, r) {
				var l = $a(r),
					a = l.move("[^"),
					i = n.enter("footnoteReference"),
					o = n.enter("reference");
				return (a += l.move(Ua(n, za(e), Ue(Ue({}, l.current()), {}, { before: a, after: "]" })))), o(), i(), (a += l.move("]"));
			}
			function ei(e, t, n, r) {
				var l = $a(r),
					a = l.move("[^"),
					i = n.enter("footnoteDefinition"),
					o = n.enter("label");
				return (
					(a += l.move(Ua(n, za(e), Ue(Ue({}, l.current()), {}, { before: a, after: "]" })))),
					o(),
					(a += l.move("]:" + (e.children && e.children.length > 0 ? " " : ""))),
					l.shift(4),
					(a += l.move(
						(function (e, t) {
							for (var n, r = [], l = 0, a = 0; (n = Ra.exec(e)); ) i(e.slice(l, n.index)), r.push(n[0]), (l = n.index + n[0].length), a++;
							return i(e.slice(l)), r.join("");
							function i(e) {
								r.push(t(e, a, !e));
							}
						})(
							(function (e, t, n) {
								var r = t.indexStack,
									l = e.children || [],
									a = t.createTracker(n),
									i = [],
									o = -1;
								for (r.push(-1); ++o < l.length; ) {
									var u = l[o];
									(r[r.length - 1] = o), i.push(a.move(t.handle(u, e, t, Ue({ before: "\n", after: "\n" }, a.current())))), "list" !== u.type && (t.bulletLastUsed = void 0), o < l.length - 1 && i.push(a.move(Aa(u, l[o + 1], e, t)));
								}
								return r.pop(), i.join("");
							})(e, n, l.current()),
							ti
						)
					)),
					i(),
					a
				);
			}
			function ti(e, t, n) {
				return 0 === t ? e : (n ? "" : "    ") + e;
			}
			function ni(e, t, n) {
				var r = t.indexStack,
					l = e.children || [],
					a = [],
					i = -1,
					o = n.before;
				r.push(-1);
				for (var u = t.createTracker(n); ++i < l.length; ) {
					var s = l[i],
						c = void 0;
					if (((r[r.length - 1] = i), i + 1 < l.length)) {
						var f = t.handle.handlers[l[i + 1].type];
						f && f.peek && (f = f.peek), (c = f ? f(l[i + 1], e, t, Ue({ before: "", after: "" }, u.current())).charAt(0) : "");
					} else c = n.after;
					a.length > 0 && ("\r" === o || "\n" === o) && "html" === s.type && ((a[a.length - 1] = a[a.length - 1].replace(/(\r?\n|\r)$/, " ")), (o = " "), (u = t.createTracker(n)).move(a.join(""))), a.push(u.move(t.handle(s, e, t, Ue(Ue({}, u.current()), {}, { before: o, after: c })))), (o = a[a.length - 1].slice(-1));
				}
				return r.pop(), a.join("");
			}
			Ja.peek = function () {
				return "[";
			};
			ai.peek = function () {
				return "~";
			};
			var ri = {
					canContainEols: ["delete"],
					enter: {
						strikethrough: function (e) {
							this.enter({ type: "delete", children: [] }, e);
						},
					},
					exit: {
						strikethrough: function (e) {
							this.exit(e);
						},
					},
				},
				li = { unsafe: [{ character: "~", inConstruct: "phrasing", notInConstruct: ["autolink", "destinationLiteral", "destinationRaw", "reference", "titleQuote", "titleApostrophe"] }], handlers: { delete: ai } };
			function ai(e, t, n, r) {
				var l = $a(r),
					a = n.enter("strikethrough"),
					i = l.move("~~");
				return (i += ni(e, n, Ue(Ue({}, l.current()), {}, { before: i, after: "~" }))), (i += l.move("~~")), a(), i;
			}
			function ii(e, t, n) {
				for (var r = e.value || "", l = "`", a = -1; new RegExp("(^|[^`])" + l + "([^`]|$)").test(r); ) l += "`";
				for (/[^ \r\n]/.test(r) && ((/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r)) || /^`|`$/.test(r)) && (r = " " + r + " "); ++a < n.unsafe.length; ) {
					var i = n.unsafe[a],
						o = Ia(i),
						u = void 0;
					if (i.atBreak)
						for (; (u = o.exec(r)); ) {
							var s = u.index;
							10 === r.charCodeAt(s) && 13 === r.charCodeAt(s - 1) && s--, (r = r.slice(0, s) + " " + r.slice(u.index + 1));
						}
				}
				return l + r + l;
			}
			function oi(e) {
				return e.length;
			}
			function ui(e) {
				var t = "string" === typeof e ? e.codePointAt(0) : 0;
				return 67 === t || 99 === t ? 99 : 76 === t || 108 === t ? 108 : 82 === t || 114 === t ? 114 : 0;
			}
			ii.peek = function () {
				return "`";
			};
			var si = {
				enter: {
					table: function (e) {
						var t = e._align;
						this.enter(
							{
								type: "table",
								align: t.map(function (e) {
									return "none" === e ? null : e;
								}),
								children: [],
							},
							e
						),
							this.setData("inTable", !0);
					},
					tableData: fi,
					tableHeader: fi,
					tableRow: function (e) {
						this.enter({ type: "tableRow", children: [] }, e);
					},
				},
				exit: {
					codeText: function (e) {
						var t = this.resume();
						this.getData("inTable") && (t = t.replace(/\\([\\|])/g, di));
						var n = this.stack[this.stack.length - 1];
						(n.value = t), this.exit(e);
					},
					table: function (e) {
						this.exit(e), this.setData("inTable");
					},
					tableData: ci,
					tableHeader: ci,
					tableRow: ci,
				},
			};
			function ci(e) {
				this.exit(e);
			}
			function fi(e) {
				this.enter({ type: "tableCell", children: [] }, e);
			}
			function di(e, t) {
				return "|" === t ? t : e;
			}
			function pi(e) {
				var t = e || {},
					n = t.tableCellPadding,
					r = t.tablePipeAlign,
					l = t.stringLength,
					a = n ? " " : "|";
				return {
					unsafe: [
						{ character: "\r", inConstruct: "tableCell" },
						{ character: "\n", inConstruct: "tableCell" },
						{ atBreak: !0, character: "|", after: "[\t :-]" },
						{ character: "|", inConstruct: "tableCell" },
						{ atBreak: !0, character: ":", after: "-" },
						{ atBreak: !0, character: "-", after: "[:|-]" },
					],
					handlers: {
						table: function (e, t, n, r) {
							return o(
								(function (e, t, n) {
									var r = e.children,
										l = -1,
										a = [],
										i = t.enter("table");
									for (; ++l < r.length; ) a[l] = u(r[l], t, n);
									return i(), a;
								})(e, n, r),
								e.align
							);
						},
						tableRow: function (e, t, n, r) {
							var l = u(e, n, r),
								a = o([l]);
							return a.slice(0, a.indexOf("\n"));
						},
						tableCell: i,
						inlineCode: function (e, t, n) {
							var r = ii(e, 0, n);
							n.stack.includes("tableCell") && (r = r.replace(/\|/g, "\\$&"));
							return r;
						},
					},
				};
				function i(e, t, n, r) {
					var l = n.enter("tableCell"),
						i = n.enter("phrasing"),
						o = ni(e, n, Ue(Ue({}, r), {}, { before: a, after: a }));
					return i(), l(), o;
				}
				function o(e, t) {
					return (function (e) {
						for (var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = (n.align || []).concat(), l = n.stringLength || oi, a = [], i = [], o = [], u = [], s = 0, c = -1; ++c < e.length; ) {
							var f = [],
								d = [],
								p = -1;
							for (e[c].length > s && (s = e[c].length); ++p < e[c].length; ) {
								var h = null === (t = e[c][p]) || void 0 === t ? "" : String(t);
								if (!1 !== n.alignDelimiters) {
									var m = l(h);
									(d[p] = m), (void 0 === u[p] || m > u[p]) && (u[p] = m);
								}
								f.push(h);
							}
							(i[c] = f), (o[c] = d);
						}
						var g = -1;
						if ("object" === typeof r && "length" in r) for (; ++g < s; ) a[g] = ui(r[g]);
						else for (var v = ui(r); ++g < s; ) a[g] = v;
						g = -1;
						for (var y = [], b = []; ++g < s; ) {
							var x = a[g],
								w = "",
								k = "";
							99 === x ? ((w = ":"), (k = ":")) : 108 === x ? (w = ":") : 114 === x && (k = ":");
							var S = !1 === n.alignDelimiters ? 1 : Math.max(1, u[g] - w.length - k.length),
								C = w + "-".repeat(S) + k;
							!1 !== n.alignDelimiters && ((S = w.length + S + k.length) > u[g] && (u[g] = S), (b[g] = S)), (y[g] = C);
						}
						i.splice(1, 0, y), o.splice(1, 0, b), (c = -1);
						for (var E = []; ++c < i.length; ) {
							var j = i[c],
								P = o[c];
							g = -1;
							for (var N = []; ++g < s; ) {
								var L = j[g] || "",
									T = "",
									F = "";
								if (!1 !== n.alignDelimiters) {
									var _ = u[g] - (P[g] || 0),
										O = a[g];
									114 === O ? (T = " ".repeat(_)) : 99 === O ? (_ % 2 ? ((T = " ".repeat(_ / 2 + 0.5)), (F = " ".repeat(_ / 2 - 0.5))) : (F = T = " ".repeat(_ / 2))) : (F = " ".repeat(_));
								}
								!1 === n.delimiterStart || g || N.push("|"), !1 === n.padding || (!1 === n.alignDelimiters && "" === L) || (!1 === n.delimiterStart && !g) || N.push(" "), !1 !== n.alignDelimiters && N.push(T), N.push(L), !1 !== n.alignDelimiters && N.push(F), !1 !== n.padding && N.push(" "), (!1 === n.delimiterEnd && g === s - 1) || N.push("|");
							}
							E.push(!1 === n.delimiterEnd ? N.join("").replace(/ +$/, "") : N.join(""));
						}
						return E.join("\n");
					})(e, { align: t, alignDelimiters: r, padding: n, stringLength: l });
				}
				function u(e, t, n) {
					for (var r = e.children, l = -1, a = [], o = t.enter("tableRow"); ++l < r.length; ) a[l] = i(r[l], 0, t, n);
					return o(), a;
				}
			}
			function hi(e, t, n, r) {
				var l = (function (e) {
						var t = e.options.listItemIndent || "tab";
						if (1 === t || "1" === t) return "one";
						if ("tab" !== t && "one" !== t && "mixed" !== t) throw new Error("Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");
						return t;
					})(n),
					a =
						n.bulletCurrent ||
						(function (e) {
							var t = e.options.bullet || "*";
							if ("*" !== t && "+" !== t && "-" !== t) throw new Error("Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`");
							return t;
						})(n);
				t && "list" === t.type && t.ordered && (a = ("number" === typeof t.start && t.start > -1 ? t.start : 1) + (!1 === n.options.incrementListMarker ? 0 : t.children.indexOf(e)) + a);
				var i = a.length + 1;
				("tab" === l || ("mixed" === l && ((t && "list" === t.type && t.spread) || e.spread))) && (i = 4 * Math.ceil(i / 4));
				var o = n.createTracker(r);
				o.move(a + " ".repeat(i - a.length)), o.shift(i);
				var u = n.enter("listItem"),
					s = n.indentLines(n.containerFlow(e, o.current()), function (e, t, n) {
						if (t) return (n ? "" : " ".repeat(i)) + e;
						return (n ? a : a + " ".repeat(i - a.length)) + e;
					});
				return u(), s;
			}
			var mi = {
					exit: {
						taskListCheckValueChecked: vi,
						taskListCheckValueUnchecked: vi,
						paragraph: function (e) {
							var t = this.stack[this.stack.length - 2];
							if (t && "listItem" === t.type && "boolean" === typeof t.checked) {
								var n = this.stack[this.stack.length - 1],
									r = n.children[0];
								if (r && "text" === r.type) {
									for (var l, a = t.children, i = -1; ++i < a.length; ) {
										var o = a[i];
										if ("paragraph" === o.type) {
											l = o;
											break;
										}
									}
									l === n && ((r.value = r.value.slice(1)), 0 === r.value.length ? n.children.shift() : n.position && r.position && "number" === typeof r.position.start.offset && (r.position.start.column++, r.position.start.offset++, (n.position.start = Object.assign({}, r.position.start))));
								}
							}
							this.exit(e);
						},
					},
				},
				gi = {
					unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
					handlers: {
						listItem: function (e, t, n, r) {
							var l = e.children[0],
								a = "boolean" === typeof e.checked && l && "paragraph" === l.type,
								i = "[" + (e.checked ? "x" : " ") + "] ",
								o = $a(r);
							a && o.move(i);
							var u = hi(e, t, n, Ue(Ue({}, r), o.current()));
							a &&
								(u = u.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, function (e) {
									return e + i;
								}));
							return u;
						},
					},
				};
			function vi(e) {
				this.stack[this.stack.length - 2].checked = "taskListCheckValueChecked" === e.type;
			}
			function yi() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					t = this.data();
				function n(e, n) {
					(t[e] ? t[e] : (t[e] = [])).push(n);
				}
				n(
					"micromarkExtensions",
					(function (e) {
						return St([Zl, aa(), da(e), ma, xa]);
					})(e)
				),
					n("fromMarkdownExtensions", [La, { enter: { gfmFootnoteDefinition: Wa, gfmFootnoteDefinitionLabelString: qa, gfmFootnoteCall: Ya, gfmFootnoteCallString: Xa }, exit: { gfmFootnoteDefinition: Ka, gfmFootnoteDefinitionLabelString: Qa, gfmFootnoteCall: Ga, gfmFootnoteCallString: Za } }, ri, si, mi]),
					n(
						"toMarkdownExtensions",
						(function (e) {
							return { extensions: [Ta, { unsafe: [{ character: "[", inConstruct: ["phrasing", "label", "reference"] }], handlers: { footnoteDefinition: ei, footnoteReference: Ja } }, li, pi(e), gi] };
						})(e)
					);
			}
			var bi = function () {
					var e = c((0, l.useState)(50), 2),
						t = e[0],
						n = e[1],
						r = c((0, l.useState)(0), 2),
						a = r[0],
						i = r[1],
						o = c((0, l.useState)(["/static/pages/fd541482-3bd8-45f3-a93e-20c2067050e1/image0001-1.png", "/static/pages/fd541482-3bd8-45f3-a93e-20c2067050e1/image0001-2.png", "/static/pages/fd541482-3bd8-45f3-a93e-20c2067050e1/image0002-3.png", "/static/pages/fd541482-3bd8-45f3-a93e-20c2067050e1/image0002-4.png", "/static/pages/fd541482-3bd8-45f3-a93e-20c2067050e1/image0003-5.png", "/static/pages/fd541482-3bd8-45f3-a93e-20c2067050e1/image0003-6.png", "/static/pages/fd541482-3bd8-45f3-a93e-20c2067050e1/image0004-7.png", "/static/pages/fd541482-3bd8-45f3-a93e-20c2067050e1/image0005-8.png"]), 2),
						u = o[0],
						s = o[1],
						f = c((0, l.useState)(1), 2),
						d = f[0],
						p = f[1],
						h = c((0, l.useState)([]), 2),
						m = h[0],
						g = h[1],
						v = c((0, l.useState)(["\n| Item | Price | Quantity | Subtotal |\n|---|---|---|---|\n| N/O LF WHEAT BREAD | $2.99 | 1 | $2.99 |\n| PBX THCK L/S BACON | $4.99 | 1 | $4.99 |\n| PUBLIX BROWN GRAVY | $1.99 | 1 | $1.99 |\n| TOP SIRLOIN STEAK | $15.99 | 1 | $15.99 |\n| VITA PRTY SNK WINE | $10.99 | 1 | $10.99 |\n| ORGANIC CARROTS | $0.99 | 1 | $0.99 |\n| BRC FLRT EAT SMART | $1.29 | 1 | $1.29 |"]), 2),
						y = v[0],
						b = v[1];
					return (
						(window.onload = function () {
							var e = document.getElementById("dragMe"),
								r = document.getElementById("mainViewer"),
								l = document.getElementById("tableViewer"),
								o = function (i) {
									var o = i.clientX - a,
										u = (100 * (t + o)) / e.parentNode.getBoundingClientRect().width;
									n(u > 70 ? 70 : u < 45 ? 45 : u), (e.style.cursor = "col-resize"), (document.body.style.cursor = "col-resize"), (r.style.userSelect = "none"), (r.style.pointerEvents = "none"), (l.style.userSelect = "none"), (l.style.pointerEvents = "none");
								},
								u = function t() {
									e.style.removeProperty("cursor"), document.body.style.removeProperty("cursor"), r.style.removeProperty("user-select"), r.style.removeProperty("pointer-events"), l.style.removeProperty("user-select"), l.style.removeProperty("pointer-events"), document.removeEventListener("mousemove", o), document.removeEventListener("mouseup", t);
								};
							e.addEventListener("mousedown", function (e) {
								i(e.clientX), n(t), document.addEventListener("mousemove", o), document.addEventListener("mouseup", u);
							});
						}),
						window.addEventListener("scroll", function () {
							try {
								window.scrollY > 70 ? document.getElementById("navbar").classList.add("-translate-y-full") : document.getElementById("navbar").classList.remove("-translate-y-full");
							} catch (e) {}
						}),
						(0, Oe.jsxs)("div", {
							id: "mainPdfEditor",
							onMouseEnter: function () {
								document.getElementById("mainPdfEditor").scrollIntoView({ behavior: "smooth" }), document.getElementById("navbar").classList.add("-translate-y-full");
							},
							className: "h-screen flex flex-row flex-nowrap scroll-smooth bg-primary-50",
							children: [
								(0, Oe.jsxs)("div", {
									className: "h-full w-[15%] bg-white shadow-xl",
									children: [
										(0, Oe.jsxs)("div", {
											className: "relative h-max border-[3px] border-black border-dashed rounded-[23px] m-3 flex flex-col items-center justify-center overflow-hidden",
											children: [
												(0, Oe.jsx)("input", {
													onChange: function () {
														for (
															var e = document.getElementById("inputFile").files,
																t = function () {
																	var t = e[n],
																		r = new FileReader();
																	(r.onload = function (e) {
																		var n = document.createElement("div");
																		n.classList.add("m-2", "px-2", "flex", "gap-2", "h-10", "rounded-lg", "bg-primary-100", "items-center", "cursor-pointer"),
																			(n.innerHTML =
																				'\n\t\t\t\t\t\t\t\t\t\t<svg width="20px" height="20px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t\t\t\t\t\t\t\t\t\t<rect width="48" height="48" fill="white" fill-opacity="0.01"/>\n\t\t\t\t\t\t\t\t\t\t\t<path d="M8 40C8 36 8 10 8 10C8 6.68629 10.8654 4 14.4 4H40V36C40 36 19.9815 36 14.4 36C9.36225 36 8 36.6842 8 40Z" fill="#00b1de" stroke="#000000" stroke-width="4" stroke-linejoin="round"/>\n\t\t\t\t\t\t\t\t\t\t\t<path fill-rule="evenodd" clip-rule="evenodd" d="M12 44H40V36H12C9.79086 36 8 37.7909 8 40C8 42.2091 9.79086 44 12 44Z" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>\n\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t<p class="text-primary-700 font-bold truncate">'.concat(
																					t.name,
																					"</p>\n\t\t\t\t\t\t\t\t\t"
																				)),
																			n.addEventListener("click", function () {
																				var e = new FormData();
																				e.append("pdf", t, t.name);
																				for (var n = document.getElementsByClassName("box"), r = 0; r < n.length; r++) {
																					n[r].style.opacity = 0;
																				}
																				var l = { method: "POST", body: e, redirect: "follow" };
																				document.getElementById("loaderLeft").classList.remove("hidden"),
																					fetch("http://16.170.244.54/api/pdfToImage/", l)
																						.then(function (e) {
																							return e.json();
																						})
																						.then(function (e) {
																							s(e.images), document.getElementById("loaderLeft").classList.add("hidden"), document.getElementById("loaderRight").classList.remove("hidden");
																							var t = new Headers();
																							t.append("Content-Type", "application/json");
																							var n = JSON.stringify({ images: e.images });
																							fetch("http://16.170.244.54/api/imageToText/", { method: "POST", headers: t, body: n, redirect: "follow" })
																								.then(function (e) {
																									return e.json();
																								})
																								.then(function (e) {
																									b(e.markdown), g(e.box);
																									for (var t = document.getElementsByClassName("box"), n = 0; n < t.length; n++) {
																										t[n].style.opacity = 1;
																									}
																									document.getElementById("loaderRight").classList.add("hidden");
																								})
																								.catch(function (e) {
																									return console.log("error", e);
																								});
																						})
																						.catch(function (e) {
																							return console.log("error", e);
																						});
																			}),
																			document.getElementById("fileList").appendChild(n);
																	}),
																		r.readAsText(t);
																},
																n = 0;
															n < e.length;
															n++
														)
															t();
													},
													id: "inputFile",
													type: "file",
													className: "absolute opacity-0 top-0 left-0 w-full h-full",
												}),
												(0, Oe.jsx)("img", { src: "/static/images/upload.svg", alt: "", className: "h-8 w-8 mt-5 mb-2" }),
												(0, Oe.jsx)("p", { className: "text-black text-[20px] text-center font-normal leading-6", children: "Drag Files to Drop" }),
												(0, Oe.jsx)("p", { className: "text-black text-center", children: "or" }),
												(0, Oe.jsx)("p", { className: "bg-[#E7E4E4] rounded-full px-2 text-[15px]", children: "Browse Files" }),
												(0, Oe.jsxs)("p", { className: "text-[11px] mt-2 mb-5", children: ["Max Files ", (0, Oe.jsx)("b", { children: "10" }), " with Sizes below ", (0, Oe.jsx)("b", { children: "50 MB" })] }),
											],
										}),
										(0, Oe.jsx)("hr", { className: "border border-primary-200" }),
										(0, Oe.jsx)("div", { id: "fileList" }),
									],
								}),
								(0, Oe.jsxs)("div", {
									id: "mainViewer",
									className: "relative h-full overflow-scroll noScroll",
									style: { width: t + "%" },
									children: [
										(0, Oe.jsx)("div", {
											id: "imageContainer",
											className: "relative p-5 overflow-y-scroll noScroll h-auto",
											children: u.map(function (e, t) {
												var n = [],
													r = "",
													l = "";
												try {
													(n = m[t][0].words), (r = m[t][0].height), (l = m[t][0].width);
												} catch (a) {}
												return (0, Oe.jsxs)(
													"div",
													{
														className: "relative",
														children: [
															(0, Oe.jsx)("img", {
																onClick: function () {
																	document.getElementById("data-" + t).scrollIntoView({ behavior: "smooth" });
																},
																id: "image-" + t,
																className: "object-contain h-auto w-full rounded-lg border-2 shadow-lg mt-2 border-black/10",
																src: "http://16.170.244.54" + e,
															}),
															(0, Oe.jsx)("div", {
																className: "box",
																children:
																	n.length > 0
																		? n.map(function (e, t) {
																				var n = e,
																					a = [n.boundingBox.vertices[0].x, n.boundingBox.vertices[0].y],
																					i = [n.boundingBox.vertices[2].x, n.boundingBox.vertices[2].y],
																					o = (100 * (i[1] - a[1])) / r,
																					u = (100 * (i[0] - a[0])) / l;
																				return (0, Oe.jsx)("div", { className: "absolute outline outline-1 outline-primary-500 outline-offset-1 text-[6px] text-transparent overflow-hidden bg-transparent transition-all duration-300 cursor-pointer focus:scale-95", style: { top: (100 * a[1]) / r + "%", left: (100 * a[0]) / l + "%", height: o + "%", width: u + "%" } }, t);
																		  })
																		: (0, Oe.jsx)(Oe.Fragment, {}),
															}),
														],
													},
													t
												);
											}),
										}),
										(0, Oe.jsxs)("div", {
											className: "sticky bottom-3 left-3 bg-primary-500 border-2 border-primary-800 w-10 h-fit rounded-lg flex flex-col items-center justify-between overflow-hidden",
											children: [
												(0, Oe.jsx)("div", {
													onClick: function () {
														var e = document.getElementById("imageContainer");
														(e.style.transform = "scale(" + (d + 0.1) + ")"), p(d + 0.1), (e.style.transformOrigin = "top left");
													},
													className: "hover:scale-110 transition-all duration-300",
													children: (0, Oe.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: 30, height: 30, fill: "white", viewBox: "0 0 16 16", children: (0, Oe.jsx)("path", { d: "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" }) }),
												}),
												(0, Oe.jsx)("hr", { className: "border border-primary-800 w-full" }),
												(0, Oe.jsx)("div", {
													onClick: function () {
														var e = document.getElementById("imageContainer");
														(e.style.transform = "scale(" + (d - 0.1) + ")"), p(d - 0.1), (e.style.transformOrigin = "top left");
													},
													className: "hover:scale-110 transition-all duration-300",
													children: (0, Oe.jsx)("svg", { width: 30, height: 30, viewBox: "0 0 24 24", fill: "white", children: (0, Oe.jsx)("line", { id: "primary", x1: 17, y1: 12, x2: 7, y2: 12, style: { fill: "none", stroke: "white", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2 } }) }),
												}),
											],
										}),
										(0, Oe.jsx)("div", {
											id: "loaderLeft",
											className: "hidden absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/50",
											children: (0, Oe.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", style: { margin: "auto", background: "#ffffff00", display: "block" }, width: "197px", height: "197px", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", children: (0, Oe.jsx)("circle", { cx: 50, cy: 50, fill: "none", stroke: "#00b1de", strokeWidth: 10, r: 36, strokeDasharray: "169.64600329384882 58.548667764616276", children: (0, Oe.jsx)("animateTransform", { attributeName: "transform", type: "rotate", repeatCount: "indefinite", dur: "1.5s", values: "0 50 50;360 50 50", keyTimes: "0;1" }) }) }),
										}),
									],
								}),
								(0, Oe.jsx)("div", { class: "bg-primary-100 hover:bg-primary-500 h-full w-1 cursor-col-resize transition-all duration-300", id: "dragMe" }),
								(0, Oe.jsxs)("div", {
									id: "tableViewer",
									className: "relative h-full bg-white shadow-xl overflow-y-scroll noScroll",
									style: { resize: "horizontal", width: 85 - t + "%" },
									children: [
										(0, Oe.jsx)("div", {
											id: "loaderRight",
											className: "hidden sticky top-0 left-0 w-full h-full flex items-center justify-center bg-black/50",
											children: (0, Oe.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", style: { margin: "auto", background: "#ffffff00", display: "block" }, className: "sticky top-0", width: "197px", height: "197px", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", children: (0, Oe.jsx)("circle", { cx: 50, cy: 50, fill: "none", stroke: "#00b1de", strokeWidth: 10, r: 36, strokeDasharray: "169.64600329384882 58.548667764616276", children: (0, Oe.jsx)("animateTransform", { attributeName: "transform", type: "rotate", repeatCount: "indefinite", dur: "1.5s", values: "0 50 50;360 50 50", keyTimes: "0;1" }) }) }),
										}),
										y.map(function (e, t) {
											return (0, Oe.jsxs)(
												"div",
												{
													className: "mb-8 border-b-2 border-primary-300 p-5 h-max overflow-x-scroll noScroll",
													children: [
														(0, Oe.jsxs)("p", {
															onClick: function () {
																document.getElementById("image-" + t).scrollIntoView({ behavior: "smooth" });
															},
															id: "data-" + t,
															className: "bg-primary-500 text-white text-lg font-bold px-3 py-1 mb-2 rounded-md w-fit hover:scale-105 transition-all duration-300 cursor-pointer",
															children: ["Page ", t + 1, " :"],
														}),
														(0, Oe.jsx)(Ul, { remarkPlugins: [yi], children: e }),
													],
												},
												t
											);
										}),
									],
								}),
							],
						})
					);
				},
				xi = function () {
					return (0, Oe.jsx)("section", {
						className: "py-10 bg-primary-700/10 sm:pt-16 lg:pt-24 z-50 shadow-xl",
						children: (0, Oe.jsxs)("div", {
							className: "px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl",
							children: [
								(0, Oe.jsxs)("div", {
									className: "grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12",
									children: [
										(0, Oe.jsxs)("div", {
											className: "col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8",
											children: [
												(0, Oe.jsxs)("div", { className: "flex flex-nowrap gap-3 items-center", children: [(0, Oe.jsx)("img", { className: "w-auto h-9", src: "/static/images/logo.png", alt: "" }), (0, Oe.jsx)("img", { className: "w-auto h-9", src: "/static/images/logo.svg", alt: "" })] }),
												(0, Oe.jsx)("p", { className: "text-base leading-relaxed text-gray-600 mt-7", children: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit." }),
												(0, Oe.jsxs)("ul", {
													className: "flex items-center space-x-3 mt-9",
													children: [
														(0, Oe.jsx)("li", {
															children: (0, Oe.jsx)("a", {
																href: "#",
																title: "",
																className: "flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-primary-600 focus:bg-primary-600",
																children: (0, Oe.jsx)("svg", {
																	className: "w-4 h-4",
																	xmlns: "http://www.w3.org/2000/svg",
																	viewBox: "0 0 24 24",
																	fill: "currentColor",
																	children: (0, Oe.jsx)("path", { d: "M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z" }),
																}),
															}),
														}),
														(0, Oe.jsx)("li", { children: (0, Oe.jsx)("a", { href: "#", title: "", className: "flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-primary-600 focus:bg-primary-600", children: (0, Oe.jsx)("svg", { className: "w-4 h-4", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", children: (0, Oe.jsx)("path", { d: "M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" }) }) }) }),
														(0, Oe.jsx)("li", {
															children: (0, Oe.jsx)("a", {
																href: "#",
																title: "",
																className: "flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-primary-600 focus:bg-primary-600",
																children: (0, Oe.jsxs)("svg", {
																	className: "w-4 h-4",
																	xmlns: "http://www.w3.org/2000/svg",
																	viewBox: "0 0 24 24",
																	fill: "currentColor",
																	children: [
																		(0, Oe.jsx)("path", { d: "M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z" }),
																		(0, Oe.jsx)("circle", { cx: "16.806", cy: "7.207", r: "1.078" }),
																		(0, Oe.jsx)("path", {
																			d: "M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z",
																		}),
																	],
																}),
															}),
														}),
														(0, Oe.jsx)("li", {
															children: (0, Oe.jsx)("a", {
																href: "#",
																title: "",
																className: "flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-primary-600 focus:bg-primary-600",
																children: (0, Oe.jsx)("svg", {
																	className: "w-4 h-4",
																	xmlns: "http://www.w3.org/2000/svg",
																	viewBox: "0 0 24 24",
																	fill: "currentColor",
																	children: (0, Oe.jsx)("path", {
																		"fill-rule": "evenodd",
																		"clip-rule": "evenodd",
																		d: "M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z",
																	}),
																}),
															}),
														}),
													],
												}),
											],
										}),
										(0, Oe.jsxs)("div", {
											children: [
												(0, Oe.jsx)("p", { className: "text-sm font-semibold tracking-widest text-primary-500 uppercase", children: "Company" }),
												(0, Oe.jsxs)("ul", {
													className: "mt-6 space-y-4",
													children: [
														(0, Oe.jsx)("li", { children: (0, Oe.jsx)("a", { href: "#", title: "", className: "flex text-base text-black transition-all duration-200 hover:text-primary-600 focus:text-primary-600", children: "About" }) }),
														(0, Oe.jsx)("li", { children: (0, Oe.jsx)("a", { href: "#", title: "", className: "flex text-base text-black transition-all duration-200 hover:text-primary-600 focus:text-primary-600", children: "Features" }) }),
														(0, Oe.jsx)("li", { children: (0, Oe.jsx)("a", { href: "#", title: "", className: "flex text-base text-black transition-all duration-200 hover:text-primary-600 focus:text-primary-600", children: "Works" }) }),
														(0, Oe.jsx)("li", { children: (0, Oe.jsx)("a", { href: "#", title: "", className: "flex text-base text-black transition-all duration-200 hover:text-primary-600 focus:text-primary-600", children: "Career" }) }),
													],
												}),
											],
										}),
										(0, Oe.jsxs)("div", {
											children: [
												(0, Oe.jsx)("p", { className: "text-sm font-semibold tracking-widest text-primary-500 uppercase", children: "Help" }),
												(0, Oe.jsxs)("ul", {
													className: "mt-6 space-y-4",
													children: [
														(0, Oe.jsx)("li", { children: (0, Oe.jsx)("a", { href: "#", title: "", className: "flex text-base text-black transition-all duration-200 hover:text-primary-600 focus:text-primary-600", children: "Customer Support" }) }),
														(0, Oe.jsx)("li", { children: (0, Oe.jsx)("a", { href: "#", title: "", className: "flex text-base text-black transition-all duration-200 hover:text-primary-600 focus:text-primary-600", children: "Delivery Details" }) }),
														(0, Oe.jsx)("li", { children: (0, Oe.jsx)("a", { href: "#", title: "", className: "flex text-base text-black transition-all duration-200 hover:text-primary-600 focus:text-primary-600", children: "Terms & Conditions" }) }),
														(0, Oe.jsx)("li", { children: (0, Oe.jsx)("a", { href: "#", title: "", className: "flex text-base text-black transition-all duration-200 hover:text-primary-600 focus:text-primary-600", children: "Privacy Policy" }) }),
													],
												}),
											],
										}),
										(0, Oe.jsxs)("div", {
											className: "col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8",
											children: [
												(0, Oe.jsx)("p", { className: "text-sm font-semibold tracking-widest text-primary-500 uppercase", children: "Subscribe to newsletter" }),
												(0, Oe.jsxs)("form", {
													action: "#",
													method: "POST",
													className: "mt-6",
													children: [(0, Oe.jsxs)("div", { children: [(0, Oe.jsx)("label", { for: "email", className: "sr-only", children: "Email" }), (0, Oe.jsx)("input", { type: "email", name: "email", id: "email", placeholder: "Enter your email", className: "block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-primary-600 caret-primary-600" })] }), (0, Oe.jsx)("button", { type: "submit", className: "inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-primary-600 rounded-md hover:bg-primary-700 focus:bg-primary-700", children: "Subscribe" })],
												}),
											],
										}),
									],
								}),
								(0, Oe.jsx)("hr", { className: "mt-16 mb-10 border-primary-200" }),
								(0, Oe.jsx)("p", { className: "text-sm text-center text-gray-600", children: "\xa9 Copyright 2023, All Rights Reserved by PDFAI" }),
							],
						}),
					});
				};
			function wi() {
				return (0, Oe.jsx)(Te, { children: (0, Oe.jsxs)("div", { className: "flex flex-col h-full", children: [(0, Oe.jsx)(De, {}), (0, Oe.jsxs)(Pe, { children: [(0, Oe.jsx)(Ee, { path: "/", element: (0, Oe.jsx)(Ie, { title: "Home" }) }), (0, Oe.jsx)(Ee, { path: "/pdf2data", element: (0, Oe.jsx)(bi, { title: "Pdf To CSV" }) })] }), (0, Oe.jsx)(xi, {})] }) });
			}
			var ki = function (e) {
				e &&
					e instanceof Function &&
					n
						.e(787)
						.then(n.bind(n, 787))
						.then(function (t) {
							var n = t.getCLS,
								r = t.getFID,
								l = t.getFCP,
								a = t.getLCP,
								i = t.getTTFB;
							n(e), r(e), l(e), a(e), i(e);
						});
			};
			a.createRoot(document.getElementById("root")).render((0, Oe.jsx)(l.StrictMode, { children: (0, Oe.jsx)(wi, {}) })), ki();
		})();
})();
//# sourceMappingURL=main.de43596d.js.map
