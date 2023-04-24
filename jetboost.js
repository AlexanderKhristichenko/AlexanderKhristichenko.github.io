var JetboostBootstrap = (function () {
  "use strict";
  var t = "URLSearchParams" in self,
    e = "Symbol" in self && "iterator" in Symbol,
    r =
      "FileReader" in self &&
      "Blob" in self &&
      (function () {
        try {
          return new Blob(), !0;
        } catch (t) {
          return !1;
        }
      })(),
    o = "FormData" in self,
    n = "ArrayBuffer" in self;
  if (n)
    var s = [
        "[object Int8Array]",
        "[object Uint8Array]",
        "[object Uint8ClampedArray]",
        "[object Int16Array]",
        "[object Uint16Array]",
        "[object Int32Array]",
        "[object Uint32Array]",
        "[object Float32Array]",
        "[object Float64Array]",
      ],
      i =
        ArrayBuffer.isView ||
        function (t) {
          return t && s.indexOf(Object.prototype.toString.call(t)) > -1;
        };
  function a(t) {
    if (
      ("string" != typeof t && (t = String(t)),
      /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))
    )
      throw new TypeError("Invalid character in header field name");
    return t.toLowerCase();
  }
  function u(t) {
    return "string" != typeof t && (t = String(t)), t;
  }
  function c(t) {
    var r = {
      next: function () {
        var e = t.shift();
        return { done: void 0 === e, value: e };
      },
    };
    return (
      e &&
        (r[Symbol.iterator] = function () {
          return r;
        }),
      r
    );
  }
  function d(t) {
    (this.map = {}),
      t instanceof d
        ? t.forEach(function (t, e) {
            this.append(e, t);
          }, this)
        : Array.isArray(t)
        ? t.forEach(function (t) {
            this.append(t[0], t[1]);
          }, this)
        : t &&
          Object.getOwnPropertyNames(t).forEach(function (e) {
            this.append(e, t[e]);
          }, this);
  }
  function h(t) {
    if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
    t.bodyUsed = !0;
  }
  function l(t) {
    return new Promise(function (e, r) {
      (t.onload = function () {
        e(t.result);
      }),
        (t.onerror = function () {
          r(t.error);
        });
    });
  }
  function f(t) {
    var e = new FileReader(),
      r = l(e);
    return e.readAsArrayBuffer(t), r;
  }
  function p(t) {
    if (t.slice) return t.slice(0);
    var e = new Uint8Array(t.byteLength);
    return e.set(new Uint8Array(t)), e.buffer;
  }
  function y() {
    return (
      (this.bodyUsed = !1),
      (this._initBody = function (e) {
        var s;
        (this._bodyInit = e),
          e
            ? "string" == typeof e
              ? (this._bodyText = e)
              : r && Blob.prototype.isPrototypeOf(e)
              ? (this._bodyBlob = e)
              : o && FormData.prototype.isPrototypeOf(e)
              ? (this._bodyFormData = e)
              : t && URLSearchParams.prototype.isPrototypeOf(e)
              ? (this._bodyText = e.toString())
              : n && r && (s = e) && DataView.prototype.isPrototypeOf(s)
              ? ((this._bodyArrayBuffer = p(e.buffer)),
                (this._bodyInit = new Blob([this._bodyArrayBuffer])))
              : n && (ArrayBuffer.prototype.isPrototypeOf(e) || i(e))
              ? (this._bodyArrayBuffer = p(e))
              : (this._bodyText = e = Object.prototype.toString.call(e))
            : (this._bodyText = ""),
          this.headers.get("content-type") ||
            ("string" == typeof e
              ? this.headers.set("content-type", "text/plain;charset=UTF-8")
              : this._bodyBlob && this._bodyBlob.type
              ? this.headers.set("content-type", this._bodyBlob.type)
              : t &&
                URLSearchParams.prototype.isPrototypeOf(e) &&
                this.headers.set(
                  "content-type",
                  "application/x-www-form-urlencoded;charset=UTF-8"
                ));
      }),
      r &&
        ((this.blob = function () {
          var t = h(this);
          if (t) return t;
          if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
          if (this._bodyArrayBuffer)
            return Promise.resolve(new Blob([this._bodyArrayBuffer]));
          if (this._bodyFormData)
            throw new Error("could not read FormData body as blob");
          return Promise.resolve(new Blob([this._bodyText]));
        }),
        (this.arrayBuffer = function () {
          return this._bodyArrayBuffer
            ? h(this) || Promise.resolve(this._bodyArrayBuffer)
            : this.blob().then(f);
        })),
      (this.text = function () {
        var t,
          e,
          r,
          o = h(this);
        if (o) return o;
        if (this._bodyBlob)
          return (
            (t = this._bodyBlob),
            (e = new FileReader()),
            (r = l(e)),
            e.readAsText(t),
            r
          );
        if (this._bodyArrayBuffer)
          return Promise.resolve(
            (function (t) {
              for (
                var e = new Uint8Array(t), r = new Array(e.length), o = 0;
                o < e.length;
                o++
              )
                r[o] = String.fromCharCode(e[o]);
              return r.join("");
            })(this._bodyArrayBuffer)
          );
        if (this._bodyFormData)
          throw new Error("could not read FormData body as text");
        return Promise.resolve(this._bodyText);
      }),
      o &&
        (this.formData = function () {
          return this.text().then(w);
        }),
      (this.json = function () {
        return this.text().then(JSON.parse);
      }),
      this
    );
  }
  (d.prototype.append = function (t, e) {
    (t = a(t)), (e = u(e));
    var r = this.map[t];
    this.map[t] = r ? r + ", " + e : e;
  }),
    (d.prototype.delete = function (t) {
      delete this.map[a(t)];
    }),
    (d.prototype.get = function (t) {
      return (t = a(t)), this.has(t) ? this.map[t] : null;
    }),
    (d.prototype.has = function (t) {
      return this.map.hasOwnProperty(a(t));
    }),
    (d.prototype.set = function (t, e) {
      this.map[a(t)] = u(e);
    }),
    (d.prototype.forEach = function (t, e) {
      for (var r in this.map)
        this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this);
    }),
    (d.prototype.keys = function () {
      var t = [];
      return (
        this.forEach(function (e, r) {
          t.push(r);
        }),
        c(t)
      );
    }),
    (d.prototype.values = function () {
      var t = [];
      return (
        this.forEach(function (e) {
          t.push(e);
        }),
        c(t)
      );
    }),
    (d.prototype.entries = function () {
      var t = [];
      return (
        this.forEach(function (e, r) {
          t.push([r, e]);
        }),
        c(t)
      );
    }),
    e && (d.prototype[Symbol.iterator] = d.prototype.entries);
  var b = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
  function m(t, e) {
    var r,
      o,
      n = (e = e || {}).body;
    if (t instanceof m) {
      if (t.bodyUsed) throw new TypeError("Already read");
      (this.url = t.url),
        (this.credentials = t.credentials),
        e.headers || (this.headers = new d(t.headers)),
        (this.method = t.method),
        (this.mode = t.mode),
        (this.signal = t.signal),
        n || null == t._bodyInit || ((n = t._bodyInit), (t.bodyUsed = !0));
    } else this.url = String(t);
    if (
      ((this.credentials = e.credentials || this.credentials || "same-origin"),
      (!e.headers && this.headers) || (this.headers = new d(e.headers)),
      (this.method =
        ((r = e.method || this.method || "GET"),
        (o = r.toUpperCase()),
        b.indexOf(o) > -1 ? o : r)),
      (this.mode = e.mode || this.mode || null),
      (this.signal = e.signal || this.signal),
      (this.referrer = null),
      ("GET" === this.method || "HEAD" === this.method) && n)
    )
      throw new TypeError("Body not allowed for GET or HEAD requests");
    this._initBody(n);
  }
  function w(t) {
    var e = new FormData();
    return (
      t
        .trim()
        .split("&")
        .forEach(function (t) {
          if (t) {
            var r = t.split("="),
              o = r.shift().replace(/\+/g, " "),
              n = r.join("=").replace(/\+/g, " ");
            e.append(decodeURIComponent(o), decodeURIComponent(n));
          }
        }),
      e
    );
  }
  function v(t, e) {
    e || (e = {}),
      (this.type = "default"),
      (this.status = void 0 === e.status ? 200 : e.status),
      (this.ok = this.status >= 200 && this.status < 300),
      (this.statusText = "statusText" in e ? e.statusText : "OK"),
      (this.headers = new d(e.headers)),
      (this.url = e.url || ""),
      this._initBody(t);
  }
  (m.prototype.clone = function () {
    return new m(this, { body: this._bodyInit });
  }),
    y.call(m.prototype),
    y.call(v.prototype),
    (v.prototype.clone = function () {
      return new v(this._bodyInit, {
        status: this.status,
        statusText: this.statusText,
        headers: new d(this.headers),
        url: this.url,
      });
    }),
    (v.error = function () {
      var t = new v(null, { status: 0, statusText: "" });
      return (t.type = "error"), t;
    });
  var g = [301, 302, 303, 307, 308];
  v.redirect = function (t, e) {
    if (-1 === g.indexOf(e)) throw new RangeError("Invalid status code");
    return new v(null, { status: e, headers: { location: t } });
  };
  var E = self.DOMException;
  try {
    new E();
  } catch (t) {
    ((E = function (t, e) {
      (this.message = t), (this.name = e);
      var r = Error(t);
      this.stack = r.stack;
    }).prototype = Object.create(Error.prototype)),
      (E.prototype.constructor = E);
  }
  function T(t, e) {
    return new Promise(function (o, n) {
      var s = new m(t, e);
      if (s.signal && s.signal.aborted)
        return n(new E("Aborted", "AbortError"));
      var i = new XMLHttpRequest();
      function a() {
        i.abort();
      }
      (i.onload = function () {
        var t,
          e,
          r = {
            status: i.status,
            statusText: i.statusText,
            headers:
              ((t = i.getAllResponseHeaders() || ""),
              (e = new d()),
              t
                .replace(/\r?\n[\t ]+/g, " ")
                .split(/\r?\n/)
                .forEach(function (t) {
                  var r = t.split(":"),
                    o = r.shift().trim();
                  if (o) {
                    var n = r.join(":").trim();
                    e.append(o, n);
                  }
                }),
              e),
          };
        r.url =
          "responseURL" in i ? i.responseURL : r.headers.get("X-Request-URL");
        var n = "response" in i ? i.response : i.responseText;
        o(new v(n, r));
      }),
        (i.onerror = function () {
          n(new TypeError("Network request failed"));
        }),
        (i.ontimeout = function () {
          n(new TypeError("Network request failed"));
        }),
        (i.onabort = function () {
          n(new E("Aborted", "AbortError"));
        }),
        i.open(s.method, s.url, !0),
        "include" === s.credentials
          ? (i.withCredentials = !0)
          : "omit" === s.credentials && (i.withCredentials = !1),
        "responseType" in i && r && (i.responseType = "blob"),
        s.headers.forEach(function (t, e) {
          i.setRequestHeader(e, t);
        }),
        s.signal &&
          (s.signal.addEventListener("abort", a),
          (i.onreadystatechange = function () {
            4 === i.readyState && s.signal.removeEventListener("abort", a);
          })),
        i.send(void 0 === s._bodyInit ? null : s._bodyInit);
    });
  }
  (T.polyfill = !0),
    self.fetch ||
      ((self.fetch = T),
      (self.Headers = d),
      (self.Request = m),
      (self.Response = v));
  var _ = "jetboost-list-item-hide",
    A = "jetboost-filter-active",
    S = "jetboost-filter-none-",
    B = "jetboost-hidden",
    j = {
      SORT_ASC: "jetboost-sort-asc-",
      SORT_DESC: "jetboost-sort-desc-",
      SORT_RESET: "jetboost-sort-reset-",
      SORT_ACTIVE: "jetboost-sort-active",
    },
    O = function (t, e) {
      return "." + t + (e ? e.shortId : "");
    };
  var x = function (t) {
    var e = document.createElement("script");
    (e.src = t),
      (e.async = 1),
      document.getElementsByTagName("head")[0].appendChild(e);
  };
  return function (t) {
    var e;
    (window.Jetboost = window.Jetboost || {}),
      window.Jetboost.loaded
        ? console.log("Ignoring extra Jetboost script")
        : ((window.Jetboost.loaded = !0),
          (e = function () {
            if (!document.querySelector("[class*='jetboost']")) return !1;
            !(function () {
              var t = "jetboost-list-search-styles";
              if (!document.getElementById(t)) {
                var e = document.createElement("style");
                (e.id = t),
                  (e.type = "text/css"),
                  (e.innerHTML =
                    "." +
                    _ +
                    " { display: none !important; } ." +
                    B +
                    " { visibility: hidden !important; }  @keyframes jetboost-fadeout-animation { 0% { opacity: 1; } 100% { opacity: 0.5; } } @keyframes jetboost-fadein-animation { 0% { opacity: 0.5; } 100% { opacity: 1; } }"),
                  document.getElementsByTagName("head")[0].appendChild(e);
              }
            })(),
              (function () {
                for (
                  var t = document.querySelectorAll(O(A)), e = 0;
                  e < t.length;
                  e++
                )
                  t[e].className.includes(S) || t[e].classList.remove(A);
                document
                  .querySelectorAll(O(j.SORT_ACTIVE))
                  .forEach(function (t) {
                    t.className.includes(j.SORT_RESET) ||
                      t.classList.remove(j.SORT_ACTIVE);
                  });
              })();
            var e = window.JETBOOST_SITE_ID,
              r = window.location.hostname.endsWith("demo-wizard.com");
            if (!r && "ckafk0rmgqmeq0704lwprjww7" === e) return !1;
            (function (t, e, r) {
              var o = t + "sites/" + e;
              return r && (o += "?staging=1"), fetch(o);
            })(t, e, r)
              .then(function (t) {
                200 === t.status
                  ? t
                      .json()
                      .then(function (t) {
                        var e = t.boosters;
                        (window.Jetboost.boosters = e),
                          t.majorVersion &&
                            (window.Jetboost.version =
                              t.branchVersion ||
                              "v" +
                                t.majorVersion +
                                "." +
                                t.minorVersion +
                                "." +
                                t.patchVersion);
                        var r = (function (t) {
                          return !(
                            !(1 === t.majorVersion && t.minorVersion >= 6) ||
                            t.branchVersion ||
                            (!window.JetboostListSearchComplete &&
                              !window.JetboostPaginationComplete)
                          );
                        })(t);
                        r
                          ? (console.error(
                              "The " +
                                (window.JetboostListSearchComplete
                                  ? "JetboostListSearchComplete"
                                  : "JetboostPaginationComplete") +
                                " function isn't supported by newer versions of Jetboost. Please contact our support team if you'd like to upgrade to the latest version! support@jetboost.io"
                            ),
                            x(t.backwardsCompatScriptUrl))
                          : x(t.mainScriptUrl),
                          t.plugins &&
                            t.plugins.length > 0 &&
                            t.plugins.forEach(function (t) {
                              "markjs" === t.name &&
                                (window.Mark || x(t.scriptUrl));
                            });
                      })
                      .catch(function (t) {
                        console.error(t);
                      })
                  : console.error("Jetboost - Couldn't load Boosters");
              })
              .catch(function (t) {
                console.error(t);
              });
          }),
          "loading" != document.readyState
            ? e()
            : document.addEventListener("DOMContentLoaded", e));
  };
})();
JetboostBootstrap("https://api.jetboost.io/");
