"use strict";
exports.id = 480;
exports.ids = [480];
exports.modules = {

/***/ 79107:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
var s = {
    0: 8203,
    1: 8204,
    2: 8205,
    3: 8290,
    4: 8291,
    5: 8288,
    6: 65279,
    7: 8289,
    8: 119155,
    9: 119156,
    a: 119157,
    b: 119158,
    c: 119159,
    d: 119160,
    e: 119161,
    f: 119162
}, c = {
    0: 8203,
    1: 8204,
    2: 8205,
    3: 65279
}, d = new Array(4).fill(String.fromCodePoint(c[0])).join(""), m = String.fromCharCode(0);
function E(t) {
    let e = JSON.stringify(t);
    return `${d}${Array.from(e).map((r)=>{
        let n = r.charCodeAt(0);
        if (n > 255) throw new Error(`Only ASCII edit info can be encoded. Error attempting to encode ${e} on character ${r} (${n})`);
        return Array.from(n.toString(4).padStart(4, "0")).map((o)=>String.fromCodePoint(c[o])).join("");
    }).join("")}`;
}
function P(t) {
    let e = JSON.stringify(t);
    return Array.from(e).map((r)=>{
        let n = r.charCodeAt(0);
        if (n > 255) throw new Error(`Only ASCII edit info can be encoded. Error attempting to encode ${e} on character ${r} (${n})`);
        return Array.from(n.toString(16).padStart(2, "0")).map((o)=>String.fromCodePoint(s[o])).join("");
    }).join("");
}
function I(t) {
    return Number.isNaN(Number(t)) ? Boolean(Date.parse(t)) : !1;
}
function x(t) {
    try {
        new URL(t, t.startsWith("/") ? "https://acme.com" : void 0);
    } catch (e2) {
        return !1;
    }
    return !0;
}
function b(t, e, r = "auto") {
    return r === !0 || r === "auto" && (I(t) || x(t)) ? t : `${t}${E(e)}`;
}
var A = Object.fromEntries(Object.entries(c).map((t)=>t.reverse())), g = Object.fromEntries(Object.entries(s).map((t)=>t.reverse())), S = `${Object.values(s).map((t)=>`\\u{${t.toString(16)}}`).join("")}`, f = __webpack_unused_export__ = new RegExp(`[${S}]{4,}`, "gu");
function R(t) {
    let e = t.match(f);
    if (!!e) return h(e[0], !0)[0];
}
function G(t) {
    let e = t.match(f);
    if (!!e) return e.map((r)=>h(r)).flat();
}
function h(t, e = !1) {
    let r = Array.from(t);
    if (r.length % 2 === 0) {
        if (r.length % 4 || !t.startsWith(d)) return T(r, e);
    } else throw new Error("Encoded data has invalid length");
    let n = [];
    for(let o = r.length * .25; o--;){
        let p = r.slice(o * 4, o * 4 + 4).map((u)=>A[u.codePointAt(0)]).join("");
        n.unshift(String.fromCharCode(parseInt(p, 4)));
    }
    if (e) {
        n.shift();
        let o = n.indexOf(m);
        return o === -1 && (o = n.length), [
            JSON.parse(n.slice(0, o).join(""))
        ];
    }
    return n.join("").split(m).filter(Boolean).map((o)=>JSON.parse(o));
}
function T(t, e) {
    var u;
    let r = [];
    for(let i = t.length * .5; i--;){
        let a = `${g[t[i * 2].codePointAt(0)]}${g[t[i * 2 + 1].codePointAt(0)]}`;
        r.unshift(String.fromCharCode(parseInt(a, 16)));
    }
    let n = [], o = [
        r.join("")
    ], p = 10;
    for(; o.length;){
        let i = o.shift();
        try {
            if (n.push(JSON.parse(i)), e) return n;
        } catch (a) {
            if (!p--) throw a;
            let l = +((u = a.message.match(/\sposition\s(\d+)$/)) == null ? void 0 : u[1]);
            if (!l) throw a;
            o.unshift(i.substring(0, l), i.substring(l));
        }
    }
    return n;
}
function X(t) {
    var e;
    return {
        cleaned: t.replace(f, ""),
        encoded: ((e = t.match(f)) == null ? void 0 : e[0]) || ""
    };
}
__webpack_unused_export__ = f;
__webpack_unused_export__ = P;
exports.n8 = b;
__webpack_unused_export__ = R;
__webpack_unused_export__ = G;
__webpack_unused_export__ = E;
__webpack_unused_export__ = X;


/***/ }),

/***/ 75737:
/***/ ((module, exports, __webpack_require__) => {

/* eslint-env browser */ /**
 * This is the web browser implementation of `debug()`.
 */ 
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (()=>{
    let warned = false;
    return ()=>{
        if (!warned) {
            warned = true;
            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
    };
})();
/**
 * Colors.
 */ exports.colors = [
    "#0000CC",
    "#0000FF",
    "#0033CC",
    "#0033FF",
    "#0066CC",
    "#0066FF",
    "#0099CC",
    "#0099FF",
    "#00CC00",
    "#00CC33",
    "#00CC66",
    "#00CC99",
    "#00CCCC",
    "#00CCFF",
    "#3300CC",
    "#3300FF",
    "#3333CC",
    "#3333FF",
    "#3366CC",
    "#3366FF",
    "#3399CC",
    "#3399FF",
    "#33CC00",
    "#33CC33",
    "#33CC66",
    "#33CC99",
    "#33CCCC",
    "#33CCFF",
    "#6600CC",
    "#6600FF",
    "#6633CC",
    "#6633FF",
    "#66CC00",
    "#66CC33",
    "#9900CC",
    "#9900FF",
    "#9933CC",
    "#9933FF",
    "#99CC00",
    "#99CC33",
    "#CC0000",
    "#CC0033",
    "#CC0066",
    "#CC0099",
    "#CC00CC",
    "#CC00FF",
    "#CC3300",
    "#CC3333",
    "#CC3366",
    "#CC3399",
    "#CC33CC",
    "#CC33FF",
    "#CC6600",
    "#CC6633",
    "#CC9900",
    "#CC9933",
    "#CCCC00",
    "#CCCC33",
    "#FF0000",
    "#FF0033",
    "#FF0066",
    "#FF0099",
    "#FF00CC",
    "#FF00FF",
    "#FF3300",
    "#FF3333",
    "#FF3366",
    "#FF3399",
    "#FF33CC",
    "#FF33FF",
    "#FF6600",
    "#FF6633",
    "#FF9900",
    "#FF9933",
    "#FFCC00",
    "#FFCC33"
];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */ // eslint-disable-next-line complexity
function useColors() {
    // NB: In an Electron preload script, document will be defined but not fully
    // initialized. Since we know we're in Chrome, we'll just detect this case
    // explicitly
    if (false) {}
    // Internet Explorer and Edge do not support colors.
    if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
    }
    // Is webkit? http://stackoverflow.com/a/16459606/376773
    // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
    return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
     false && (0) || // Is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
    typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
    if (!this.useColors) {
        return;
    }
    const c = "color: " + this.color;
    args.splice(1, 0, c, "color: inherit");
    // The final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into
    let index = 0;
    let lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, (match)=>{
        if (match === "%%") {
            return;
        }
        index++;
        if (match === "%c") {
            // We only are interested in the *last* %c
            // (the user may have provided their own)
            lastC = index;
        }
    });
    args.splice(lastC, 0, c);
}
/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */ exports.log = console.debug || console.log || (()=>{});
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    try {
        if (namespaces) {
            exports.storage.setItem("debug", namespaces);
        } else {
            exports.storage.removeItem("debug");
        }
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    let r;
    try {
        r = exports.storage.getItem("debug");
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
    // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
    if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
    }
    return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */ function localstorage() {
    try {
        // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
        // The Browser also has localStorage in the global context.
        return localStorage;
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
module.exports = __webpack_require__(71006)(exports);
const { formatters } = module.exports;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */ formatters.j = function(v) {
    try {
        return JSON.stringify(v);
    } catch (error) {
        return "[UnexpectedJSONParseError]: " + error.message;
    }
};


/***/ }),

/***/ 71006:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */ 
function setup(env) {
    createDebug.debug = createDebug;
    createDebug.default = createDebug;
    createDebug.coerce = coerce;
    createDebug.disable = disable;
    createDebug.enable = enable;
    createDebug.enabled = enabled;
    createDebug.humanize = __webpack_require__(6034);
    createDebug.destroy = destroy;
    Object.keys(env).forEach((key)=>{
        createDebug[key] = env[key];
    });
    /**
	* The currently active debug mode names, and names to skip.
	*/ createDebug.names = [];
    createDebug.skips = [];
    /**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/ createDebug.formatters = {};
    /**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/ function selectColor(namespace) {
        let hash = 0;
        for(let i = 0; i < namespace.length; i++){
            hash = (hash << 5) - hash + namespace.charCodeAt(i);
            hash |= 0; // Convert to 32bit integer
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
    }
    createDebug.selectColor = selectColor;
    /**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/ function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
            // Disabled?
            if (!debug.enabled) {
                return;
            }
            const self = debug;
            // Set `diff` timestamp
            const curr = Number(new Date());
            const ms = curr - (prevTime || curr);
            self.diff = ms;
            self.prev = prevTime;
            self.curr = curr;
            prevTime = curr;
            args[0] = createDebug.coerce(args[0]);
            if (typeof args[0] !== "string") {
                // Anything else let's inspect with %O
                args.unshift("%O");
            }
            // Apply any `formatters` transformations
            let index = 0;
            args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format)=>{
                // If we encounter an escaped % then don't increase the array index
                if (match === "%%") {
                    return "%";
                }
                index++;
                const formatter = createDebug.formatters[format];
                if (typeof formatter === "function") {
                    const val = args[index];
                    match = formatter.call(self, val);
                    // Now we need to remove `args[index]` since it's inlined in the `format`
                    args.splice(index, 1);
                    index--;
                }
                return match;
            });
            // Apply env-specific formatting (colors, etc.)
            createDebug.formatArgs.call(self, args);
            const logFn = self.log || createDebug.log;
            logFn.apply(self, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.
        Object.defineProperty(debug, "enabled", {
            enumerable: true,
            configurable: false,
            get: ()=>{
                if (enableOverride !== null) {
                    return enableOverride;
                }
                if (namespacesCache !== createDebug.namespaces) {
                    namespacesCache = createDebug.namespaces;
                    enabledCache = createDebug.enabled(namespace);
                }
                return enabledCache;
            },
            set: (v)=>{
                enableOverride = v;
            }
        });
        // Env-specific initialization logic for debug instances
        if (typeof createDebug.init === "function") {
            createDebug.init(debug);
        }
        return debug;
    }
    function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
    }
    /**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/ function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        let i;
        const split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
        const len = split.length;
        for(i = 0; i < len; i++){
            if (!split[i]) {
                continue;
            }
            namespaces = split[i].replace(/\*/g, ".*?");
            if (namespaces[0] === "-") {
                createDebug.skips.push(new RegExp("^" + namespaces.slice(1) + "$"));
            } else {
                createDebug.names.push(new RegExp("^" + namespaces + "$"));
            }
        }
    }
    /**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/ function disable() {
        const namespaces = [
            ...createDebug.names.map(toNamespace),
            ...createDebug.skips.map(toNamespace).map((namespace)=>"-" + namespace)
        ].join(",");
        createDebug.enable("");
        return namespaces;
    }
    /**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/ function enabled(name) {
        if (name[name.length - 1] === "*") {
            return true;
        }
        let i;
        let len;
        for(i = 0, len = createDebug.skips.length; i < len; i++){
            if (createDebug.skips[i].test(name)) {
                return false;
            }
        }
        for(i = 0, len = createDebug.names.length; i < len; i++){
            if (createDebug.names[i].test(name)) {
                return true;
            }
        }
        return false;
    }
    /**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/ function toNamespace(regexp) {
        return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, "*");
    }
    /**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/ function coerce(val) {
        if (val instanceof Error) {
            return val.stack || val.message;
        }
        return val;
    }
    /**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/ function destroy() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    createDebug.enable(createDebug.load());
    return createDebug;
}
module.exports = setup;


/***/ }),

/***/ 63694:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */ 
if (typeof process === "undefined" || process.type === "renderer" || false === true || process.__nwjs) {
    /* unused reexport */ __webpack_require__(75737);
} else {
    /* unused reexport */ __webpack_require__(10056);
}


/***/ }),

/***/ 10056:
/***/ ((module, exports, __webpack_require__) => {

/**
 * Module dependencies.
 */ 
const tty = __webpack_require__(76224);
const util = __webpack_require__(73837);
/**
 * This is the Node.js implementation of `debug()`.
 */ exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.destroy = util.deprecate(()=>{}, "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
/**
 * Colors.
 */ exports.colors = [
    6,
    2,
    3,
    4,
    5,
    1
];
try {
    // Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
    // eslint-disable-next-line import/no-extraneous-dependencies
    const supportsColor = __webpack_require__(12662);
    if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
        exports.colors = [
            20,
            21,
            26,
            27,
            32,
            33,
            38,
            39,
            40,
            41,
            42,
            43,
            44,
            45,
            56,
            57,
            62,
            63,
            68,
            69,
            74,
            75,
            76,
            77,
            78,
            79,
            80,
            81,
            92,
            93,
            98,
            99,
            112,
            113,
            128,
            129,
            134,
            135,
            148,
            149,
            160,
            161,
            162,
            163,
            164,
            165,
            166,
            167,
            168,
            169,
            170,
            171,
            172,
            173,
            178,
            179,
            184,
            185,
            196,
            197,
            198,
            199,
            200,
            201,
            202,
            203,
            204,
            205,
            206,
            207,
            208,
            209,
            214,
            215,
            220,
            221
        ];
    }
} catch (error) {
// Swallow - we only care if `supports-color` is available; it doesn't have to be.
}
/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */ exports.inspectOpts = Object.keys(process.env).filter((key)=>{
    return /^debug_/i.test(key);
}).reduce((obj, key)=>{
    // Camel-case
    const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k)=>{
        return k.toUpperCase();
    });
    // Coerce string value into JS value
    let val = process.env[key];
    if (/^(yes|on|true|enabled)$/i.test(val)) {
        val = true;
    } else if (/^(no|off|false|disabled)$/i.test(val)) {
        val = false;
    } else if (val === "null") {
        val = null;
    } else {
        val = Number(val);
    }
    obj[prop] = val;
    return obj;
}, {});
/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */ function useColors() {
    return "colors" in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(process.stderr.fd);
}
/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    const { namespace: name, useColors } = this;
    if (useColors) {
        const c = this.color;
        const colorCode = "\x1b[3" + (c < 8 ? c : "8;5;" + c);
        const prefix = `  ${colorCode};1m${name} \u001B[0m`;
        args[0] = prefix + args[0].split("\n").join("\n" + prefix);
        args.push(colorCode + "m+" + module.exports.humanize(this.diff) + "\x1b[0m");
    } else {
        args[0] = getDate() + name + " " + args[0];
    }
}
function getDate() {
    if (exports.inspectOpts.hideDate) {
        return "";
    }
    return new Date().toISOString() + " ";
}
/**
 * Invokes `util.format()` with the specified arguments and writes to stderr.
 */ function log(...args) {
    return process.stderr.write(util.format(...args) + "\n");
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    if (namespaces) {
        process.env.DEBUG = namespaces;
    } else {
        // If you set a process.env field to null or undefined, it gets cast to the
        // string 'null' or 'undefined'. Just delete instead.
        delete process.env.DEBUG;
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    return process.env.DEBUG;
}
/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */ function init(debug) {
    debug.inspectOpts = {};
    const keys = Object.keys(exports.inspectOpts);
    for(let i = 0; i < keys.length; i++){
        debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
    }
}
module.exports = __webpack_require__(71006)(exports);
const { formatters } = module.exports;
/**
 * Map %o to `util.inspect()`, all on a single line.
 */ formatters.o = function(v) {
    this.inspectOpts.colors = this.useColors;
    return util.inspect(v, this.inspectOpts).split("\n").map((str)=>str.trim()).join(" ");
};
/**
 * Map %O to `util.inspect()`, allowing multiple lines if needed.
 */ formatters.O = function(v) {
    this.inspectOpts.colors = this.useColors;
    return util.inspect(v, this.inspectOpts);
};


/***/ }),

/***/ 52669:
/***/ ((module) => {


function groq(strings) {
    for(var _len = arguments.length, keys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        keys[_key - 1] = arguments[_key];
    }
    const lastIndex = strings.length - 1;
    return strings.slice(0, lastIndex).reduce((acc, str, i)=>{
        return acc + str + keys[i];
    }, "") + strings[lastIndex];
}
module.exports = groq; //# sourceMappingURL=groq.js.map


/***/ }),

/***/ 29864:
/***/ ((module) => {


module.exports = (flag, argv = process.argv)=>{
    const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
    const position = argv.indexOf(prefix + flag);
    const terminatorPosition = argv.indexOf("--");
    return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
};


/***/ }),

/***/ 22557:
/***/ ((module) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ /** `Object#toString` result references. */ 
var objectTag = "[object Object]";
/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */ function isHostObject(value) {
    // Many host objects are `Object` objects that can coerce to strings
    // despite having improperly defined `toString` methods.
    var result = false;
    if (value != null && typeof value.toString != "function") {
        try {
            result = !!(value + "");
        } catch (e) {}
    }
    return result;
}
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */ function overArg(func, transform) {
    return function(arg) {
        return func(transform(arg));
    };
}
/** Used for built-in method references. */ var funcProto = Function.prototype, objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to infer the `Object` constructor. */ var objectCtorString = funcToString.call(Object);
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var objectToString = objectProto.toString;
/** Built-in value references. */ var getPrototype = overArg(Object.getPrototypeOf, Object);
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return !!value && typeof value == "object";
}
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */ function isPlainObject(value) {
    if (!isObjectLike(value) || objectToString.call(value) != objectTag || isHostObject(value)) {
        return false;
    }
    var proto = getPrototype(value);
    if (proto === null) {
        return true;
    }
    var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
    return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
module.exports = isPlainObject;


/***/ }),

/***/ 6034:
/***/ ((module) => {

/**
 * Helpers.
 */ 
var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */ module.exports = function(val, options) {
    options = options || {};
    var type = typeof val;
    if (type === "string" && val.length > 0) {
        return parse(val);
    } else if (type === "number" && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */ function parse(str) {
    str = String(str);
    if (str.length > 100) {
        return;
    }
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
    if (!match) {
        return;
    }
    var n = parseFloat(match[1]);
    var type = (match[2] || "ms").toLowerCase();
    switch(type){
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
            return n * y;
        case "weeks":
        case "week":
        case "w":
            return n * w;
        case "days":
        case "day":
        case "d":
            return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
            return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
            return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
            return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
            return n;
        default:
            return undefined;
    }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtShort(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return Math.round(ms / d) + "d";
    }
    if (msAbs >= h) {
        return Math.round(ms / h) + "h";
    }
    if (msAbs >= m) {
        return Math.round(ms / m) + "m";
    }
    if (msAbs >= s) {
        return Math.round(ms / s) + "s";
    }
    return ms + "ms";
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtLong(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return plural(ms, msAbs, d, "day");
    }
    if (msAbs >= h) {
        return plural(ms, msAbs, h, "hour");
    }
    if (msAbs >= m) {
        return plural(ms, msAbs, m, "minute");
    }
    if (msAbs >= s) {
        return plural(ms, msAbs, s, "second");
    }
    return ms + " ms";
}
/**
 * Pluralization helper.
 */ function plural(ms, msAbs, n, name) {
    var isPlural = msAbs >= n * 1.5;
    return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
}


/***/ }),

/***/ 47597:
/***/ ((module) => {


var trim = function(string) {
    return string.replace(/^\s+|\s+$/g, "");
}, isArray = function(arg) {
    return Object.prototype.toString.call(arg) === "[object Array]";
};
module.exports = function(headers) {
    if (!headers) return {};
    var result = {};
    var headersArr = trim(headers).split("\n");
    for(var i = 0; i < headersArr.length; i++){
        var row = headersArr[i];
        var index = row.indexOf(":"), key = trim(row.slice(0, index)).toLowerCase(), value = trim(row.slice(index + 1));
        if (typeof result[key] === "undefined") {
            result[key] = value;
        } else if (isArray(result[key])) {
            result[key].push(value);
        } else {
            result[key] = [
                result[key],
                value
            ];
        }
    }
    return result;
};


/***/ }),

/***/ 98434:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var __createBinding = (void 0) && (void 0).__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = (void 0) && (void 0).__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.interval = exports.iif = exports.generate = exports.fromEventPattern = exports.fromEvent = exports.from = exports.forkJoin = exports.empty = exports.defer = exports.connectable = exports.concat = exports.combineLatest = exports.bindNodeCallback = exports.bindCallback = exports.UnsubscriptionError = exports.TimeoutError = exports.SequenceError = exports.ObjectUnsubscribedError = exports.NotFoundError = exports.EmptyError = exports.ArgumentOutOfRangeError = exports.firstValueFrom = exports.lastValueFrom = exports.isObservable = exports.identity = exports.noop = exports.pipe = exports.NotificationKind = exports.Notification = exports.Subscriber = exports.Subscription = exports.Scheduler = exports.VirtualAction = exports.VirtualTimeScheduler = exports.animationFrameScheduler = exports.animationFrame = exports.queueScheduler = exports.queue = exports.asyncScheduler = exports.async = exports.asapScheduler = exports.asap = exports.AsyncSubject = exports.ReplaySubject = exports.BehaviorSubject = exports.Subject = exports.animationFrames = exports.observable = exports.ConnectableObservable = exports.Observable = void 0;
exports.filter = exports.expand = exports.exhaustMap = exports.exhaustAll = exports.exhaust = exports.every = exports.endWith = exports.elementAt = exports.distinctUntilKeyChanged = exports.distinctUntilChanged = exports.distinct = exports.dematerialize = exports.delayWhen = exports.delay = exports.defaultIfEmpty = exports.debounceTime = exports.debounce = exports.count = exports.connect = exports.concatWith = exports.concatMapTo = exports.concatMap = exports.concatAll = exports.combineLatestWith = exports.combineLatestAll = exports.combineAll = exports.catchError = exports.bufferWhen = exports.bufferToggle = exports.bufferTime = exports.bufferCount = exports.buffer = exports.auditTime = exports.audit = exports.config = exports.NEVER = exports.EMPTY = exports.scheduled = exports.zip = exports.using = exports.timer = exports.throwError = exports.range = exports.race = exports.partition = exports.pairs = exports.onErrorResumeNext = exports.of = exports.never = exports.merge = void 0;
exports.switchMap = exports.switchAll = exports.subscribeOn = exports.startWith = exports.skipWhile = exports.skipUntil = exports.skipLast = exports.skip = exports.single = exports.shareReplay = exports.share = exports.sequenceEqual = exports.scan = exports.sampleTime = exports.sample = exports.refCount = exports.retryWhen = exports.retry = exports.repeatWhen = exports.repeat = exports.reduce = exports.raceWith = exports.publishReplay = exports.publishLast = exports.publishBehavior = exports.publish = exports.pluck = exports.pairwise = exports.onErrorResumeNextWith = exports.observeOn = exports.multicast = exports.min = exports.mergeWith = exports.mergeScan = exports.mergeMapTo = exports.mergeMap = exports.flatMap = exports.mergeAll = exports.max = exports.materialize = exports.mapTo = exports.map = exports.last = exports.isEmpty = exports.ignoreElements = exports.groupBy = exports.first = exports.findIndex = exports.find = exports.finalize = void 0;
exports.zipWith = exports.zipAll = exports.withLatestFrom = exports.windowWhen = exports.windowToggle = exports.windowTime = exports.windowCount = exports.window = exports.toArray = exports.timestamp = exports.timeoutWith = exports.timeout = exports.timeInterval = exports.throwIfEmpty = exports.throttleTime = exports.throttle = exports.tap = exports.takeWhile = exports.takeUntil = exports.takeLast = exports.take = exports.switchScan = exports.switchMapTo = void 0;
var Observable_1 = __webpack_require__(89043);
Object.defineProperty(exports, "Observable", ({
    enumerable: true,
    get: function() {
        return Observable_1.Observable;
    }
}));
var ConnectableObservable_1 = __webpack_require__(29737);
Object.defineProperty(exports, "ConnectableObservable", ({
    enumerable: true,
    get: function() {
        return ConnectableObservable_1.ConnectableObservable;
    }
}));
var observable_1 = __webpack_require__(65183);
Object.defineProperty(exports, "observable", ({
    enumerable: true,
    get: function() {
        return observable_1.observable;
    }
}));
var animationFrames_1 = __webpack_require__(32526);
Object.defineProperty(exports, "animationFrames", ({
    enumerable: true,
    get: function() {
        return animationFrames_1.animationFrames;
    }
}));
var Subject_1 = __webpack_require__(20833);
Object.defineProperty(exports, "Subject", ({
    enumerable: true,
    get: function() {
        return Subject_1.Subject;
    }
}));
var BehaviorSubject_1 = __webpack_require__(69602);
Object.defineProperty(exports, "BehaviorSubject", ({
    enumerable: true,
    get: function() {
        return BehaviorSubject_1.BehaviorSubject;
    }
}));
var ReplaySubject_1 = __webpack_require__(90022);
Object.defineProperty(exports, "ReplaySubject", ({
    enumerable: true,
    get: function() {
        return ReplaySubject_1.ReplaySubject;
    }
}));
var AsyncSubject_1 = __webpack_require__(44820);
Object.defineProperty(exports, "AsyncSubject", ({
    enumerable: true,
    get: function() {
        return AsyncSubject_1.AsyncSubject;
    }
}));
var asap_1 = __webpack_require__(12126);
Object.defineProperty(exports, "asap", ({
    enumerable: true,
    get: function() {
        return asap_1.asap;
    }
}));
Object.defineProperty(exports, "asapScheduler", ({
    enumerable: true,
    get: function() {
        return asap_1.asapScheduler;
    }
}));
var async_1 = __webpack_require__(83970);
Object.defineProperty(exports, "async", ({
    enumerable: true,
    get: function() {
        return async_1.async;
    }
}));
Object.defineProperty(exports, "asyncScheduler", ({
    enumerable: true,
    get: function() {
        return async_1.asyncScheduler;
    }
}));
var queue_1 = __webpack_require__(46633);
Object.defineProperty(exports, "queue", ({
    enumerable: true,
    get: function() {
        return queue_1.queue;
    }
}));
Object.defineProperty(exports, "queueScheduler", ({
    enumerable: true,
    get: function() {
        return queue_1.queueScheduler;
    }
}));
var animationFrame_1 = __webpack_require__(38090);
Object.defineProperty(exports, "animationFrame", ({
    enumerable: true,
    get: function() {
        return animationFrame_1.animationFrame;
    }
}));
Object.defineProperty(exports, "animationFrameScheduler", ({
    enumerable: true,
    get: function() {
        return animationFrame_1.animationFrameScheduler;
    }
}));
var VirtualTimeScheduler_1 = __webpack_require__(83690);
Object.defineProperty(exports, "VirtualTimeScheduler", ({
    enumerable: true,
    get: function() {
        return VirtualTimeScheduler_1.VirtualTimeScheduler;
    }
}));
Object.defineProperty(exports, "VirtualAction", ({
    enumerable: true,
    get: function() {
        return VirtualTimeScheduler_1.VirtualAction;
    }
}));
var Scheduler_1 = __webpack_require__(15913);
Object.defineProperty(exports, "Scheduler", ({
    enumerable: true,
    get: function() {
        return Scheduler_1.Scheduler;
    }
}));
var Subscription_1 = __webpack_require__(43851);
Object.defineProperty(exports, "Subscription", ({
    enumerable: true,
    get: function() {
        return Subscription_1.Subscription;
    }
}));
var Subscriber_1 = __webpack_require__(40057);
Object.defineProperty(exports, "Subscriber", ({
    enumerable: true,
    get: function() {
        return Subscriber_1.Subscriber;
    }
}));
var Notification_1 = __webpack_require__(33836);
Object.defineProperty(exports, "Notification", ({
    enumerable: true,
    get: function() {
        return Notification_1.Notification;
    }
}));
Object.defineProperty(exports, "NotificationKind", ({
    enumerable: true,
    get: function() {
        return Notification_1.NotificationKind;
    }
}));
var pipe_1 = __webpack_require__(9492);
Object.defineProperty(exports, "pipe", ({
    enumerable: true,
    get: function() {
        return pipe_1.pipe;
    }
}));
var noop_1 = __webpack_require__(81543);
Object.defineProperty(exports, "noop", ({
    enumerable: true,
    get: function() {
        return noop_1.noop;
    }
}));
var identity_1 = __webpack_require__(13893);
Object.defineProperty(exports, "identity", ({
    enumerable: true,
    get: function() {
        return identity_1.identity;
    }
}));
var isObservable_1 = __webpack_require__(44897);
Object.defineProperty(exports, "isObservable", ({
    enumerable: true,
    get: function() {
        return isObservable_1.isObservable;
    }
}));
var lastValueFrom_1 = __webpack_require__(43928);
Object.defineProperty(exports, "lastValueFrom", ({
    enumerable: true,
    get: function() {
        return lastValueFrom_1.lastValueFrom;
    }
}));
var firstValueFrom_1 = __webpack_require__(28034);
Object.defineProperty(exports, "firstValueFrom", ({
    enumerable: true,
    get: function() {
        return firstValueFrom_1.firstValueFrom;
    }
}));
var ArgumentOutOfRangeError_1 = __webpack_require__(15092);
Object.defineProperty(exports, "ArgumentOutOfRangeError", ({
    enumerable: true,
    get: function() {
        return ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
    }
}));
var EmptyError_1 = __webpack_require__(10855);
Object.defineProperty(exports, "EmptyError", ({
    enumerable: true,
    get: function() {
        return EmptyError_1.EmptyError;
    }
}));
var NotFoundError_1 = __webpack_require__(60243);
Object.defineProperty(exports, "NotFoundError", ({
    enumerable: true,
    get: function() {
        return NotFoundError_1.NotFoundError;
    }
}));
var ObjectUnsubscribedError_1 = __webpack_require__(73398);
Object.defineProperty(exports, "ObjectUnsubscribedError", ({
    enumerable: true,
    get: function() {
        return ObjectUnsubscribedError_1.ObjectUnsubscribedError;
    }
}));
var SequenceError_1 = __webpack_require__(15750);
Object.defineProperty(exports, "SequenceError", ({
    enumerable: true,
    get: function() {
        return SequenceError_1.SequenceError;
    }
}));
var timeout_1 = __webpack_require__(47527);
Object.defineProperty(exports, "TimeoutError", ({
    enumerable: true,
    get: function() {
        return timeout_1.TimeoutError;
    }
}));
var UnsubscriptionError_1 = __webpack_require__(4267);
Object.defineProperty(exports, "UnsubscriptionError", ({
    enumerable: true,
    get: function() {
        return UnsubscriptionError_1.UnsubscriptionError;
    }
}));
var bindCallback_1 = __webpack_require__(74750);
Object.defineProperty(exports, "bindCallback", ({
    enumerable: true,
    get: function() {
        return bindCallback_1.bindCallback;
    }
}));
var bindNodeCallback_1 = __webpack_require__(49402);
Object.defineProperty(exports, "bindNodeCallback", ({
    enumerable: true,
    get: function() {
        return bindNodeCallback_1.bindNodeCallback;
    }
}));
var combineLatest_1 = __webpack_require__(93351);
Object.defineProperty(exports, "combineLatest", ({
    enumerable: true,
    get: function() {
        return combineLatest_1.combineLatest;
    }
}));
var concat_1 = __webpack_require__(48545);
Object.defineProperty(exports, "concat", ({
    enumerable: true,
    get: function() {
        return concat_1.concat;
    }
}));
var connectable_1 = __webpack_require__(21571);
Object.defineProperty(exports, "connectable", ({
    enumerable: true,
    get: function() {
        return connectable_1.connectable;
    }
}));
var defer_1 = __webpack_require__(79367);
Object.defineProperty(exports, "defer", ({
    enumerable: true,
    get: function() {
        return defer_1.defer;
    }
}));
var empty_1 = __webpack_require__(7999);
Object.defineProperty(exports, "empty", ({
    enumerable: true,
    get: function() {
        return empty_1.empty;
    }
}));
var forkJoin_1 = __webpack_require__(94270);
Object.defineProperty(exports, "forkJoin", ({
    enumerable: true,
    get: function() {
        return forkJoin_1.forkJoin;
    }
}));
var from_1 = __webpack_require__(51400);
Object.defineProperty(exports, "from", ({
    enumerable: true,
    get: function() {
        return from_1.from;
    }
}));
var fromEvent_1 = __webpack_require__(1814);
Object.defineProperty(exports, "fromEvent", ({
    enumerable: true,
    get: function() {
        return fromEvent_1.fromEvent;
    }
}));
var fromEventPattern_1 = __webpack_require__(51574);
Object.defineProperty(exports, "fromEventPattern", ({
    enumerable: true,
    get: function() {
        return fromEventPattern_1.fromEventPattern;
    }
}));
var generate_1 = __webpack_require__(46292);
Object.defineProperty(exports, "generate", ({
    enumerable: true,
    get: function() {
        return generate_1.generate;
    }
}));
var iif_1 = __webpack_require__(39828);
Object.defineProperty(exports, "iif", ({
    enumerable: true,
    get: function() {
        return iif_1.iif;
    }
}));
var interval_1 = __webpack_require__(22001);
Object.defineProperty(exports, "interval", ({
    enumerable: true,
    get: function() {
        return interval_1.interval;
    }
}));
var merge_1 = __webpack_require__(75057);
Object.defineProperty(exports, "merge", ({
    enumerable: true,
    get: function() {
        return merge_1.merge;
    }
}));
var never_1 = __webpack_require__(18701);
Object.defineProperty(exports, "never", ({
    enumerable: true,
    get: function() {
        return never_1.never;
    }
}));
var of_1 = __webpack_require__(42353);
Object.defineProperty(exports, "of", ({
    enumerable: true,
    get: function() {
        return of_1.of;
    }
}));
var onErrorResumeNext_1 = __webpack_require__(63511);
Object.defineProperty(exports, "onErrorResumeNext", ({
    enumerable: true,
    get: function() {
        return onErrorResumeNext_1.onErrorResumeNext;
    }
}));
var pairs_1 = __webpack_require__(60348);
Object.defineProperty(exports, "pairs", ({
    enumerable: true,
    get: function() {
        return pairs_1.pairs;
    }
}));
var partition_1 = __webpack_require__(34386);
Object.defineProperty(exports, "partition", ({
    enumerable: true,
    get: function() {
        return partition_1.partition;
    }
}));
var race_1 = __webpack_require__(63308);
Object.defineProperty(exports, "race", ({
    enumerable: true,
    get: function() {
        return race_1.race;
    }
}));
var range_1 = __webpack_require__(57629);
Object.defineProperty(exports, "range", ({
    enumerable: true,
    get: function() {
        return range_1.range;
    }
}));
var throwError_1 = __webpack_require__(26791);
Object.defineProperty(exports, "throwError", ({
    enumerable: true,
    get: function() {
        return throwError_1.throwError;
    }
}));
var timer_1 = __webpack_require__(33158);
Object.defineProperty(exports, "timer", ({
    enumerable: true,
    get: function() {
        return timer_1.timer;
    }
}));
var using_1 = __webpack_require__(38226);
Object.defineProperty(exports, "using", ({
    enumerable: true,
    get: function() {
        return using_1.using;
    }
}));
var zip_1 = __webpack_require__(13356);
Object.defineProperty(exports, "zip", ({
    enumerable: true,
    get: function() {
        return zip_1.zip;
    }
}));
var scheduled_1 = __webpack_require__(27188);
Object.defineProperty(exports, "scheduled", ({
    enumerable: true,
    get: function() {
        return scheduled_1.scheduled;
    }
}));
var empty_2 = __webpack_require__(7999);
Object.defineProperty(exports, "EMPTY", ({
    enumerable: true,
    get: function() {
        return empty_2.EMPTY;
    }
}));
var never_2 = __webpack_require__(18701);
Object.defineProperty(exports, "NEVER", ({
    enumerable: true,
    get: function() {
        return never_2.NEVER;
    }
}));
__exportStar(__webpack_require__(51438), exports);
var config_1 = __webpack_require__(17650);
Object.defineProperty(exports, "config", ({
    enumerable: true,
    get: function() {
        return config_1.config;
    }
}));
var audit_1 = __webpack_require__(40685);
Object.defineProperty(exports, "audit", ({
    enumerable: true,
    get: function() {
        return audit_1.audit;
    }
}));
var auditTime_1 = __webpack_require__(79483);
Object.defineProperty(exports, "auditTime", ({
    enumerable: true,
    get: function() {
        return auditTime_1.auditTime;
    }
}));
var buffer_1 = __webpack_require__(43974);
Object.defineProperty(exports, "buffer", ({
    enumerable: true,
    get: function() {
        return buffer_1.buffer;
    }
}));
var bufferCount_1 = __webpack_require__(26530);
Object.defineProperty(exports, "bufferCount", ({
    enumerable: true,
    get: function() {
        return bufferCount_1.bufferCount;
    }
}));
var bufferTime_1 = __webpack_require__(55100);
Object.defineProperty(exports, "bufferTime", ({
    enumerable: true,
    get: function() {
        return bufferTime_1.bufferTime;
    }
}));
var bufferToggle_1 = __webpack_require__(40552);
Object.defineProperty(exports, "bufferToggle", ({
    enumerable: true,
    get: function() {
        return bufferToggle_1.bufferToggle;
    }
}));
var bufferWhen_1 = __webpack_require__(23879);
Object.defineProperty(exports, "bufferWhen", ({
    enumerable: true,
    get: function() {
        return bufferWhen_1.bufferWhen;
    }
}));
var catchError_1 = __webpack_require__(2473);
Object.defineProperty(exports, "catchError", ({
    enumerable: true,
    get: function() {
        return catchError_1.catchError;
    }
}));
var combineAll_1 = __webpack_require__(56641);
Object.defineProperty(exports, "combineAll", ({
    enumerable: true,
    get: function() {
        return combineAll_1.combineAll;
    }
}));
var combineLatestAll_1 = __webpack_require__(76989);
Object.defineProperty(exports, "combineLatestAll", ({
    enumerable: true,
    get: function() {
        return combineLatestAll_1.combineLatestAll;
    }
}));
var combineLatestWith_1 = __webpack_require__(84558);
Object.defineProperty(exports, "combineLatestWith", ({
    enumerable: true,
    get: function() {
        return combineLatestWith_1.combineLatestWith;
    }
}));
var concatAll_1 = __webpack_require__(90319);
Object.defineProperty(exports, "concatAll", ({
    enumerable: true,
    get: function() {
        return concatAll_1.concatAll;
    }
}));
var concatMap_1 = __webpack_require__(55678);
Object.defineProperty(exports, "concatMap", ({
    enumerable: true,
    get: function() {
        return concatMap_1.concatMap;
    }
}));
var concatMapTo_1 = __webpack_require__(64591);
Object.defineProperty(exports, "concatMapTo", ({
    enumerable: true,
    get: function() {
        return concatMapTo_1.concatMapTo;
    }
}));
var concatWith_1 = __webpack_require__(58246);
Object.defineProperty(exports, "concatWith", ({
    enumerable: true,
    get: function() {
        return concatWith_1.concatWith;
    }
}));
var connect_1 = __webpack_require__(77417);
Object.defineProperty(exports, "connect", ({
    enumerable: true,
    get: function() {
        return connect_1.connect;
    }
}));
var count_1 = __webpack_require__(1279);
Object.defineProperty(exports, "count", ({
    enumerable: true,
    get: function() {
        return count_1.count;
    }
}));
var debounce_1 = __webpack_require__(94560);
Object.defineProperty(exports, "debounce", ({
    enumerable: true,
    get: function() {
        return debounce_1.debounce;
    }
}));
var debounceTime_1 = __webpack_require__(4518);
Object.defineProperty(exports, "debounceTime", ({
    enumerable: true,
    get: function() {
        return debounceTime_1.debounceTime;
    }
}));
var defaultIfEmpty_1 = __webpack_require__(9836);
Object.defineProperty(exports, "defaultIfEmpty", ({
    enumerable: true,
    get: function() {
        return defaultIfEmpty_1.defaultIfEmpty;
    }
}));
var delay_1 = __webpack_require__(19162);
Object.defineProperty(exports, "delay", ({
    enumerable: true,
    get: function() {
        return delay_1.delay;
    }
}));
var delayWhen_1 = __webpack_require__(47108);
Object.defineProperty(exports, "delayWhen", ({
    enumerable: true,
    get: function() {
        return delayWhen_1.delayWhen;
    }
}));
var dematerialize_1 = __webpack_require__(14510);
Object.defineProperty(exports, "dematerialize", ({
    enumerable: true,
    get: function() {
        return dematerialize_1.dematerialize;
    }
}));
var distinct_1 = __webpack_require__(84338);
Object.defineProperty(exports, "distinct", ({
    enumerable: true,
    get: function() {
        return distinct_1.distinct;
    }
}));
var distinctUntilChanged_1 = __webpack_require__(3537);
Object.defineProperty(exports, "distinctUntilChanged", ({
    enumerable: true,
    get: function() {
        return distinctUntilChanged_1.distinctUntilChanged;
    }
}));
var distinctUntilKeyChanged_1 = __webpack_require__(82505);
Object.defineProperty(exports, "distinctUntilKeyChanged", ({
    enumerable: true,
    get: function() {
        return distinctUntilKeyChanged_1.distinctUntilKeyChanged;
    }
}));
var elementAt_1 = __webpack_require__(90881);
Object.defineProperty(exports, "elementAt", ({
    enumerable: true,
    get: function() {
        return elementAt_1.elementAt;
    }
}));
var endWith_1 = __webpack_require__(40277);
Object.defineProperty(exports, "endWith", ({
    enumerable: true,
    get: function() {
        return endWith_1.endWith;
    }
}));
var every_1 = __webpack_require__(81498);
Object.defineProperty(exports, "every", ({
    enumerable: true,
    get: function() {
        return every_1.every;
    }
}));
var exhaust_1 = __webpack_require__(32277);
Object.defineProperty(exports, "exhaust", ({
    enumerable: true,
    get: function() {
        return exhaust_1.exhaust;
    }
}));
var exhaustAll_1 = __webpack_require__(22573);
Object.defineProperty(exports, "exhaustAll", ({
    enumerable: true,
    get: function() {
        return exhaustAll_1.exhaustAll;
    }
}));
var exhaustMap_1 = __webpack_require__(18930);
Object.defineProperty(exports, "exhaustMap", ({
    enumerable: true,
    get: function() {
        return exhaustMap_1.exhaustMap;
    }
}));
var expand_1 = __webpack_require__(19901);
Object.defineProperty(exports, "expand", ({
    enumerable: true,
    get: function() {
        return expand_1.expand;
    }
}));
var filter_1 = __webpack_require__(83099);
Object.defineProperty(exports, "filter", ({
    enumerable: true,
    get: function() {
        return filter_1.filter;
    }
}));
var finalize_1 = __webpack_require__(87409);
Object.defineProperty(exports, "finalize", ({
    enumerable: true,
    get: function() {
        return finalize_1.finalize;
    }
}));
var find_1 = __webpack_require__(85395);
Object.defineProperty(exports, "find", ({
    enumerable: true,
    get: function() {
        return find_1.find;
    }
}));
var findIndex_1 = __webpack_require__(42862);
Object.defineProperty(exports, "findIndex", ({
    enumerable: true,
    get: function() {
        return findIndex_1.findIndex;
    }
}));
var first_1 = __webpack_require__(248);
Object.defineProperty(exports, "first", ({
    enumerable: true,
    get: function() {
        return first_1.first;
    }
}));
var groupBy_1 = __webpack_require__(94536);
Object.defineProperty(exports, "groupBy", ({
    enumerable: true,
    get: function() {
        return groupBy_1.groupBy;
    }
}));
var ignoreElements_1 = __webpack_require__(24764);
Object.defineProperty(exports, "ignoreElements", ({
    enumerable: true,
    get: function() {
        return ignoreElements_1.ignoreElements;
    }
}));
var isEmpty_1 = __webpack_require__(48859);
Object.defineProperty(exports, "isEmpty", ({
    enumerable: true,
    get: function() {
        return isEmpty_1.isEmpty;
    }
}));
var last_1 = __webpack_require__(94105);
Object.defineProperty(exports, "last", ({
    enumerable: true,
    get: function() {
        return last_1.last;
    }
}));
var map_1 = __webpack_require__(56414);
Object.defineProperty(exports, "map", ({
    enumerable: true,
    get: function() {
        return map_1.map;
    }
}));
var mapTo_1 = __webpack_require__(36214);
Object.defineProperty(exports, "mapTo", ({
    enumerable: true,
    get: function() {
        return mapTo_1.mapTo;
    }
}));
var materialize_1 = __webpack_require__(98213);
Object.defineProperty(exports, "materialize", ({
    enumerable: true,
    get: function() {
        return materialize_1.materialize;
    }
}));
var max_1 = __webpack_require__(54226);
Object.defineProperty(exports, "max", ({
    enumerable: true,
    get: function() {
        return max_1.max;
    }
}));
var mergeAll_1 = __webpack_require__(63770);
Object.defineProperty(exports, "mergeAll", ({
    enumerable: true,
    get: function() {
        return mergeAll_1.mergeAll;
    }
}));
var flatMap_1 = __webpack_require__(95293);
Object.defineProperty(exports, "flatMap", ({
    enumerable: true,
    get: function() {
        return flatMap_1.flatMap;
    }
}));
var mergeMap_1 = __webpack_require__(49891);
Object.defineProperty(exports, "mergeMap", ({
    enumerable: true,
    get: function() {
        return mergeMap_1.mergeMap;
    }
}));
var mergeMapTo_1 = __webpack_require__(66578);
Object.defineProperty(exports, "mergeMapTo", ({
    enumerable: true,
    get: function() {
        return mergeMapTo_1.mergeMapTo;
    }
}));
var mergeScan_1 = __webpack_require__(33382);
Object.defineProperty(exports, "mergeScan", ({
    enumerable: true,
    get: function() {
        return mergeScan_1.mergeScan;
    }
}));
var mergeWith_1 = __webpack_require__(45046);
Object.defineProperty(exports, "mergeWith", ({
    enumerable: true,
    get: function() {
        return mergeWith_1.mergeWith;
    }
}));
var min_1 = __webpack_require__(1982);
Object.defineProperty(exports, "min", ({
    enumerable: true,
    get: function() {
        return min_1.min;
    }
}));
var multicast_1 = __webpack_require__(39965);
Object.defineProperty(exports, "multicast", ({
    enumerable: true,
    get: function() {
        return multicast_1.multicast;
    }
}));
var observeOn_1 = __webpack_require__(93409);
Object.defineProperty(exports, "observeOn", ({
    enumerable: true,
    get: function() {
        return observeOn_1.observeOn;
    }
}));
var onErrorResumeNextWith_1 = __webpack_require__(20290);
Object.defineProperty(exports, "onErrorResumeNextWith", ({
    enumerable: true,
    get: function() {
        return onErrorResumeNextWith_1.onErrorResumeNextWith;
    }
}));
var pairwise_1 = __webpack_require__(48716);
Object.defineProperty(exports, "pairwise", ({
    enumerable: true,
    get: function() {
        return pairwise_1.pairwise;
    }
}));
var pluck_1 = __webpack_require__(666);
Object.defineProperty(exports, "pluck", ({
    enumerable: true,
    get: function() {
        return pluck_1.pluck;
    }
}));
var publish_1 = __webpack_require__(55138);
Object.defineProperty(exports, "publish", ({
    enumerable: true,
    get: function() {
        return publish_1.publish;
    }
}));
var publishBehavior_1 = __webpack_require__(81167);
Object.defineProperty(exports, "publishBehavior", ({
    enumerable: true,
    get: function() {
        return publishBehavior_1.publishBehavior;
    }
}));
var publishLast_1 = __webpack_require__(54005);
Object.defineProperty(exports, "publishLast", ({
    enumerable: true,
    get: function() {
        return publishLast_1.publishLast;
    }
}));
var publishReplay_1 = __webpack_require__(30492);
Object.defineProperty(exports, "publishReplay", ({
    enumerable: true,
    get: function() {
        return publishReplay_1.publishReplay;
    }
}));
var raceWith_1 = __webpack_require__(58405);
Object.defineProperty(exports, "raceWith", ({
    enumerable: true,
    get: function() {
        return raceWith_1.raceWith;
    }
}));
var reduce_1 = __webpack_require__(5744);
Object.defineProperty(exports, "reduce", ({
    enumerable: true,
    get: function() {
        return reduce_1.reduce;
    }
}));
var repeat_1 = __webpack_require__(18559);
Object.defineProperty(exports, "repeat", ({
    enumerable: true,
    get: function() {
        return repeat_1.repeat;
    }
}));
var repeatWhen_1 = __webpack_require__(22882);
Object.defineProperty(exports, "repeatWhen", ({
    enumerable: true,
    get: function() {
        return repeatWhen_1.repeatWhen;
    }
}));
var retry_1 = __webpack_require__(28604);
Object.defineProperty(exports, "retry", ({
    enumerable: true,
    get: function() {
        return retry_1.retry;
    }
}));
var retryWhen_1 = __webpack_require__(402);
Object.defineProperty(exports, "retryWhen", ({
    enumerable: true,
    get: function() {
        return retryWhen_1.retryWhen;
    }
}));
var refCount_1 = __webpack_require__(42780);
Object.defineProperty(exports, "refCount", ({
    enumerable: true,
    get: function() {
        return refCount_1.refCount;
    }
}));
var sample_1 = __webpack_require__(9237);
Object.defineProperty(exports, "sample", ({
    enumerable: true,
    get: function() {
        return sample_1.sample;
    }
}));
var sampleTime_1 = __webpack_require__(23682);
Object.defineProperty(exports, "sampleTime", ({
    enumerable: true,
    get: function() {
        return sampleTime_1.sampleTime;
    }
}));
var scan_1 = __webpack_require__(66413);
Object.defineProperty(exports, "scan", ({
    enumerable: true,
    get: function() {
        return scan_1.scan;
    }
}));
var sequenceEqual_1 = __webpack_require__(27045);
Object.defineProperty(exports, "sequenceEqual", ({
    enumerable: true,
    get: function() {
        return sequenceEqual_1.sequenceEqual;
    }
}));
var share_1 = __webpack_require__(92090);
Object.defineProperty(exports, "share", ({
    enumerable: true,
    get: function() {
        return share_1.share;
    }
}));
var shareReplay_1 = __webpack_require__(2316);
Object.defineProperty(exports, "shareReplay", ({
    enumerable: true,
    get: function() {
        return shareReplay_1.shareReplay;
    }
}));
var single_1 = __webpack_require__(95678);
Object.defineProperty(exports, "single", ({
    enumerable: true,
    get: function() {
        return single_1.single;
    }
}));
var skip_1 = __webpack_require__(43134);
Object.defineProperty(exports, "skip", ({
    enumerable: true,
    get: function() {
        return skip_1.skip;
    }
}));
var skipLast_1 = __webpack_require__(50181);
Object.defineProperty(exports, "skipLast", ({
    enumerable: true,
    get: function() {
        return skipLast_1.skipLast;
    }
}));
var skipUntil_1 = __webpack_require__(70913);
Object.defineProperty(exports, "skipUntil", ({
    enumerable: true,
    get: function() {
        return skipUntil_1.skipUntil;
    }
}));
var skipWhile_1 = __webpack_require__(87114);
Object.defineProperty(exports, "skipWhile", ({
    enumerable: true,
    get: function() {
        return skipWhile_1.skipWhile;
    }
}));
var startWith_1 = __webpack_require__(89975);
Object.defineProperty(exports, "startWith", ({
    enumerable: true,
    get: function() {
        return startWith_1.startWith;
    }
}));
var subscribeOn_1 = __webpack_require__(66771);
Object.defineProperty(exports, "subscribeOn", ({
    enumerable: true,
    get: function() {
        return subscribeOn_1.subscribeOn;
    }
}));
var switchAll_1 = __webpack_require__(94960);
Object.defineProperty(exports, "switchAll", ({
    enumerable: true,
    get: function() {
        return switchAll_1.switchAll;
    }
}));
var switchMap_1 = __webpack_require__(23506);
Object.defineProperty(exports, "switchMap", ({
    enumerable: true,
    get: function() {
        return switchMap_1.switchMap;
    }
}));
var switchMapTo_1 = __webpack_require__(30048);
Object.defineProperty(exports, "switchMapTo", ({
    enumerable: true,
    get: function() {
        return switchMapTo_1.switchMapTo;
    }
}));
var switchScan_1 = __webpack_require__(32978);
Object.defineProperty(exports, "switchScan", ({
    enumerable: true,
    get: function() {
        return switchScan_1.switchScan;
    }
}));
var take_1 = __webpack_require__(96920);
Object.defineProperty(exports, "take", ({
    enumerable: true,
    get: function() {
        return take_1.take;
    }
}));
var takeLast_1 = __webpack_require__(21030);
Object.defineProperty(exports, "takeLast", ({
    enumerable: true,
    get: function() {
        return takeLast_1.takeLast;
    }
}));
var takeUntil_1 = __webpack_require__(30756);
Object.defineProperty(exports, "takeUntil", ({
    enumerable: true,
    get: function() {
        return takeUntil_1.takeUntil;
    }
}));
var takeWhile_1 = __webpack_require__(86038);
Object.defineProperty(exports, "takeWhile", ({
    enumerable: true,
    get: function() {
        return takeWhile_1.takeWhile;
    }
}));
var tap_1 = __webpack_require__(22004);
Object.defineProperty(exports, "tap", ({
    enumerable: true,
    get: function() {
        return tap_1.tap;
    }
}));
var throttle_1 = __webpack_require__(88142);
Object.defineProperty(exports, "throttle", ({
    enumerable: true,
    get: function() {
        return throttle_1.throttle;
    }
}));
var throttleTime_1 = __webpack_require__(85035);
Object.defineProperty(exports, "throttleTime", ({
    enumerable: true,
    get: function() {
        return throttleTime_1.throttleTime;
    }
}));
var throwIfEmpty_1 = __webpack_require__(54374);
Object.defineProperty(exports, "throwIfEmpty", ({
    enumerable: true,
    get: function() {
        return throwIfEmpty_1.throwIfEmpty;
    }
}));
var timeInterval_1 = __webpack_require__(22512);
Object.defineProperty(exports, "timeInterval", ({
    enumerable: true,
    get: function() {
        return timeInterval_1.timeInterval;
    }
}));
var timeout_2 = __webpack_require__(47527);
Object.defineProperty(exports, "timeout", ({
    enumerable: true,
    get: function() {
        return timeout_2.timeout;
    }
}));
var timeoutWith_1 = __webpack_require__(82091);
Object.defineProperty(exports, "timeoutWith", ({
    enumerable: true,
    get: function() {
        return timeoutWith_1.timeoutWith;
    }
}));
var timestamp_1 = __webpack_require__(51768);
Object.defineProperty(exports, "timestamp", ({
    enumerable: true,
    get: function() {
        return timestamp_1.timestamp;
    }
}));
var toArray_1 = __webpack_require__(81740);
Object.defineProperty(exports, "toArray", ({
    enumerable: true,
    get: function() {
        return toArray_1.toArray;
    }
}));
var window_1 = __webpack_require__(48561);
Object.defineProperty(exports, "window", ({
    enumerable: true,
    get: function() {
        return window_1.window;
    }
}));
var windowCount_1 = __webpack_require__(75090);
Object.defineProperty(exports, "windowCount", ({
    enumerable: true,
    get: function() {
        return windowCount_1.windowCount;
    }
}));
var windowTime_1 = __webpack_require__(55265);
Object.defineProperty(exports, "windowTime", ({
    enumerable: true,
    get: function() {
        return windowTime_1.windowTime;
    }
}));
var windowToggle_1 = __webpack_require__(91972);
Object.defineProperty(exports, "windowToggle", ({
    enumerable: true,
    get: function() {
        return windowToggle_1.windowToggle;
    }
}));
var windowWhen_1 = __webpack_require__(5676);
Object.defineProperty(exports, "windowWhen", ({
    enumerable: true,
    get: function() {
        return windowWhen_1.windowWhen;
    }
}));
var withLatestFrom_1 = __webpack_require__(52126);
Object.defineProperty(exports, "withLatestFrom", ({
    enumerable: true,
    get: function() {
        return withLatestFrom_1.withLatestFrom;
    }
}));
var zipAll_1 = __webpack_require__(49366);
Object.defineProperty(exports, "zipAll", ({
    enumerable: true,
    get: function() {
        return zipAll_1.zipAll;
    }
}));
var zipWith_1 = __webpack_require__(16410);
Object.defineProperty(exports, "zipWith", ({
    enumerable: true,
    get: function() {
        return zipWith_1.zipWith;
    }
})); //# sourceMappingURL=index.js.map


/***/ }),

/***/ 44820:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var __extends = (void 0) && (void 0).__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.AsyncSubject = void 0;
var Subject_1 = __webpack_require__(20833);
var AsyncSubject = function(_super) {
    __extends(AsyncSubject, _super);
    function AsyncSubject() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._value = null;
        _this._hasValue = false;
        _this._isComplete = false;
        return _this;
    }
    AsyncSubject.prototype._checkFinalizedStatuses = function(subscriber) {
        var _a = this, hasError = _a.hasError, _hasValue = _a._hasValue, _value = _a._value, thrownError = _a.thrownError, isStopped = _a.isStopped, _isComplete = _a._isComplete;
        if (hasError) {
            subscriber.error(thrownError);
        } else if (isStopped || _isComplete) {
            _hasValue && subscriber.next(_value);
            subscriber.complete();
        }
    };
    AsyncSubject.prototype.next = function(value) {
        if (!this.isStopped) {
            this._value = value;
            this._hasValue = true;
        }
    };
    AsyncSubject.prototype.complete = function() {
        var _a = this, _hasValue = _a._hasValue, _value = _a._value, _isComplete = _a._isComplete;
        if (!_isComplete) {
            this._isComplete = true;
            _hasValue && _super.prototype.next.call(this, _value);
            _super.prototype.complete.call(this);
        }
    };
    return AsyncSubject;
}(Subject_1.Subject);
exports.AsyncSubject = AsyncSubject; //# sourceMappingURL=AsyncSubject.js.map


/***/ }),

/***/ 69602:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var __extends = (void 0) && (void 0).__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.BehaviorSubject = void 0;
var Subject_1 = __webpack_require__(20833);
var BehaviorSubject = function(_super) {
    __extends(BehaviorSubject, _super);
    function BehaviorSubject(_value) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        return _this;
    }
    Object.defineProperty(BehaviorSubject.prototype, "value", {
        get: function() {
            return this.getValue();
        },
        enumerable: false,
        configurable: true
    });
    BehaviorSubject.prototype._subscribe = function(subscriber) {
        var subscription = _super.prototype._subscribe.call(this, subscriber);
        !subscription.closed && subscriber.next(this._value);
        return subscription;
    };
    BehaviorSubject.prototype.getValue = function() {
        var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, _value = _a._value;
        if (hasError) {
            throw thrownError;
        }
        this._throwIfClosed();
        return _value;
    };
    BehaviorSubject.prototype.next = function(value) {
        _super.prototype.next.call(this, this._value = value);
    };
    return BehaviorSubject;
}(Subject_1.Subject);
exports.BehaviorSubject = BehaviorSubject; //# sourceMappingURL=BehaviorSubject.js.map


/***/ }),

/***/ 33836:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.observeNotification = exports.Notification = exports.NotificationKind = void 0;
var empty_1 = __webpack_require__(7999);
var of_1 = __webpack_require__(42353);
var throwError_1 = __webpack_require__(26791);
var isFunction_1 = __webpack_require__(90422);
var NotificationKind;
(function(NotificationKind) {
    NotificationKind["NEXT"] = "N";
    NotificationKind["ERROR"] = "E";
    NotificationKind["COMPLETE"] = "C";
})(NotificationKind = exports.NotificationKind || (exports.NotificationKind = {}));
var Notification = function() {
    function Notification(kind, value, error) {
        this.kind = kind;
        this.value = value;
        this.error = error;
        this.hasValue = kind === "N";
    }
    Notification.prototype.observe = function(observer) {
        return observeNotification(this, observer);
    };
    Notification.prototype.do = function(nextHandler, errorHandler, completeHandler) {
        var _a = this, kind = _a.kind, value = _a.value, error = _a.error;
        return kind === "N" ? nextHandler === null || nextHandler === void 0 ? void 0 : nextHandler(value) : kind === "E" ? errorHandler === null || errorHandler === void 0 ? void 0 : errorHandler(error) : completeHandler === null || completeHandler === void 0 ? void 0 : completeHandler();
    };
    Notification.prototype.accept = function(nextOrObserver, error, complete) {
        var _a;
        return isFunction_1.isFunction((_a = nextOrObserver) === null || _a === void 0 ? void 0 : _a.next) ? this.observe(nextOrObserver) : this.do(nextOrObserver, error, complete);
    };
    Notification.prototype.toObservable = function() {
        var _a = this, kind = _a.kind, value = _a.value, error = _a.error;
        var result = kind === "N" ? of_1.of(value) : kind === "E" ? throwError_1.throwError(function() {
            return error;
        }) : kind === "C" ? empty_1.EMPTY : 0;
        if (!result) {
            throw new TypeError("Unexpected notification kind " + kind);
        }
        return result;
    };
    Notification.createNext = function(value) {
        return new Notification("N", value);
    };
    Notification.createError = function(err) {
        return new Notification("E", undefined, err);
    };
    Notification.createComplete = function() {
        return Notification.completeNotification;
    };
    Notification.completeNotification = new Notification("C");
    return Notification;
}();
exports.Notification = Notification;
function observeNotification(notification, observer) {
    var _a, _b, _c;
    var _d = notification, kind = _d.kind, value = _d.value, error = _d.error;
    if (typeof kind !== "string") {
        throw new TypeError('Invalid notification, missing "kind"');
    }
    kind === "N" ? (_a = observer.next) === null || _a === void 0 ? void 0 : _a.call(observer, value) : kind === "E" ? (_b = observer.error) === null || _b === void 0 ? void 0 : _b.call(observer, error) : (_c = observer.complete) === null || _c === void 0 ? void 0 : _c.call(observer);
}
exports.observeNotification = observeNotification; //# sourceMappingURL=Notification.js.map


/***/ }),

/***/ 99023:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.createNotification = exports.nextNotification = exports.errorNotification = exports.COMPLETE_NOTIFICATION = void 0;
exports.COMPLETE_NOTIFICATION = function() {
    return createNotification("C", undefined, undefined);
}();
function errorNotification(error) {
    return createNotification("E", undefined, error);
}
exports.errorNotification = errorNotification;
function nextNotification(value) {
    return createNotification("N", value, undefined);
}
exports.nextNotification = nextNotification;
function createNotification(kind, value, error) {
    return {
        kind: kind,
        value: value,
        error: error
    };
}
exports.createNotification = createNotification; //# sourceMappingURL=NotificationFactories.js.map


/***/ }),

/***/ 89043:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Observable = void 0;
var Subscriber_1 = __webpack_require__(40057);
var Subscription_1 = __webpack_require__(43851);
var observable_1 = __webpack_require__(65183);
var pipe_1 = __webpack_require__(9492);
var config_1 = __webpack_require__(17650);
var isFunction_1 = __webpack_require__(90422);
var errorContext_1 = __webpack_require__(95984);
var Observable = function() {
    function Observable(subscribe) {
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function(operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function(observerOrNext, error, complete) {
        var _this = this;
        var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new Subscriber_1.SafeSubscriber(observerOrNext, error, complete);
        errorContext_1.errorContext(function() {
            var _a = _this, operator = _a.operator, source = _a.source;
            subscriber.add(operator ? operator.call(subscriber, source) : source ? _this._subscribe(subscriber) : _this._trySubscribe(subscriber));
        });
        return subscriber;
    };
    Observable.prototype._trySubscribe = function(sink) {
        try {
            return this._subscribe(sink);
        } catch (err) {
            sink.error(err);
        }
    };
    Observable.prototype.forEach = function(next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function(resolve, reject) {
            var subscriber = new Subscriber_1.SafeSubscriber({
                next: function(value) {
                    try {
                        next(value);
                    } catch (err) {
                        reject(err);
                        subscriber.unsubscribe();
                    }
                },
                error: reject,
                complete: resolve
            });
            _this.subscribe(subscriber);
        });
    };
    Observable.prototype._subscribe = function(subscriber) {
        var _a;
        return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
    };
    Observable.prototype[observable_1.observable] = function() {
        return this;
    };
    Observable.prototype.pipe = function() {
        var operations = [];
        for(var _i = 0; _i < arguments.length; _i++){
            operations[_i] = arguments[_i];
        }
        return pipe_1.pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function(promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function(resolve, reject) {
            var value;
            _this.subscribe(function(x) {
                return value = x;
            }, function(err) {
                return reject(err);
            }, function() {
                return resolve(value);
            });
        });
    };
    Observable.create = function(subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}();
exports.Observable = Observable;
function getPromiseCtor(promiseCtor) {
    var _a;
    return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config_1.config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
    return value && isFunction_1.isFunction(value.next) && isFunction_1.isFunction(value.error) && isFunction_1.isFunction(value.complete);
}
function isSubscriber(value) {
    return value && value instanceof Subscriber_1.Subscriber || isObserver(value) && Subscription_1.isSubscription(value);
} //# sourceMappingURL=Observable.js.map


/***/ }),

/***/ 90022:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var __extends = (void 0) && (void 0).__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.ReplaySubject = void 0;
var Subject_1 = __webpack_require__(20833);
var dateTimestampProvider_1 = __webpack_require__(96416);
var ReplaySubject = function(_super) {
    __extends(ReplaySubject, _super);
    function ReplaySubject(_bufferSize, _windowTime, _timestampProvider) {
        if (_bufferSize === void 0) {
            _bufferSize = Infinity;
        }
        if (_windowTime === void 0) {
            _windowTime = Infinity;
        }
        if (_timestampProvider === void 0) {
            _timestampProvider = dateTimestampProvider_1.dateTimestampProvider;
        }
        var _this = _super.call(this) || this;
        _this._bufferSize = _bufferSize;
        _this._windowTime = _windowTime;
        _this._timestampProvider = _timestampProvider;
        _this._buffer = [];
        _this._infiniteTimeWindow = true;
        _this._infiniteTimeWindow = _windowTime === Infinity;
        _this._bufferSize = Math.max(1, _bufferSize);
        _this._windowTime = Math.max(1, _windowTime);
        return _this;
    }
    ReplaySubject.prototype.next = function(value) {
        var _a = this, isStopped = _a.isStopped, _buffer = _a._buffer, _infiniteTimeWindow = _a._infiniteTimeWindow, _timestampProvider = _a._timestampProvider, _windowTime = _a._windowTime;
        if (!isStopped) {
            _buffer.push(value);
            !_infiniteTimeWindow && _buffer.push(_timestampProvider.now() + _windowTime);
        }
        this._trimBuffer();
        _super.prototype.next.call(this, value);
    };
    ReplaySubject.prototype._subscribe = function(subscriber) {
        this._throwIfClosed();
        this._trimBuffer();
        var subscription = this._innerSubscribe(subscriber);
        var _a = this, _infiniteTimeWindow = _a._infiniteTimeWindow, _buffer = _a._buffer;
        var copy = _buffer.slice();
        for(var i = 0; i < copy.length && !subscriber.closed; i += _infiniteTimeWindow ? 1 : 2){
            subscriber.next(copy[i]);
        }
        this._checkFinalizedStatuses(subscriber);
        return subscription;
    };
    ReplaySubject.prototype._trimBuffer = function() {
        var _a = this, _bufferSize = _a._bufferSize, _timestampProvider = _a._timestampProvider, _buffer = _a._buffer, _infiniteTimeWindow = _a._infiniteTimeWindow;
        var adjustedBufferSize = (_infiniteTimeWindow ? 1 : 2) * _bufferSize;
        _bufferSize < Infinity && adjustedBufferSize < _buffer.length && _buffer.splice(0, _buffer.length - adjustedBufferSize);
        if (!_infiniteTimeWindow) {
            var now = _timestampProvider.now();
            var last = 0;
            for(var i = 1; i < _buffer.length && _buffer[i] <= now; i += 2){
                last = i;
            }
            last && _buffer.splice(0, last + 1);
        }
    };
    return ReplaySubject;
}(Subject_1.Subject);
exports.ReplaySubject = ReplaySubject; //# sourceMappingURL=ReplaySubject.js.map


/***/ }),

/***/ 15913:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Scheduler = void 0;
var dateTimestampProvider_1 = __webpack_require__(96416);
var Scheduler = function() {
    function Scheduler(schedulerActionCtor, now) {
        if (now === void 0) {
            now = Scheduler.now;
        }
        this.schedulerActionCtor = schedulerActionCtor;
        this.now = now;
    }
    Scheduler.prototype.schedule = function(work, delay, state) {
        if (delay === void 0) {
            delay = 0;
        }
        return new this.schedulerActionCtor(this, work).schedule(state, delay);
    };
    Scheduler.now = dateTimestampProvider_1.dateTimestampProvider.now;
    return Scheduler;
}();
exports.Scheduler = Scheduler; //# sourceMappingURL=Scheduler.js.map


/***/ }),

/***/ 20833:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var __extends = (void 0) && (void 0).__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __values = (void 0) && (void 0).__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.AnonymousSubject = exports.Subject = void 0;
var Observable_1 = __webpack_require__(89043);
var Subscription_1 = __webpack_require__(43851);
var ObjectUnsubscribedError_1 = __webpack_require__(73398);
var arrRemove_1 = __webpack_require__(86889);
var errorContext_1 = __webpack_require__(95984);
var Subject = function(_super) {
    __extends(Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.closed = false;
        _this.currentObservers = null;
        _this.observers = [];
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject.prototype.lift = function(operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype._throwIfClosed = function() {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
    };
    Subject.prototype.next = function(value) {
        var _this = this;
        errorContext_1.errorContext(function() {
            var e_1, _a;
            _this._throwIfClosed();
            if (!_this.isStopped) {
                if (!_this.currentObservers) {
                    _this.currentObservers = Array.from(_this.observers);
                }
                try {
                    for(var _b = __values(_this.currentObservers), _c = _b.next(); !_c.done; _c = _b.next()){
                        var observer = _c.value;
                        observer.next(value);
                    }
                } catch (e_1_1) {
                    e_1 = {
                        error: e_1_1
                    };
                } finally{
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    } finally{
                        if (e_1) throw e_1.error;
                    }
                }
            }
        });
    };
    Subject.prototype.error = function(err) {
        var _this = this;
        errorContext_1.errorContext(function() {
            _this._throwIfClosed();
            if (!_this.isStopped) {
                _this.hasError = _this.isStopped = true;
                _this.thrownError = err;
                var observers = _this.observers;
                while(observers.length){
                    observers.shift().error(err);
                }
            }
        });
    };
    Subject.prototype.complete = function() {
        var _this = this;
        errorContext_1.errorContext(function() {
            _this._throwIfClosed();
            if (!_this.isStopped) {
                _this.isStopped = true;
                var observers = _this.observers;
                while(observers.length){
                    observers.shift().complete();
                }
            }
        });
    };
    Subject.prototype.unsubscribe = function() {
        this.isStopped = this.closed = true;
        this.observers = this.currentObservers = null;
    };
    Object.defineProperty(Subject.prototype, "observed", {
        get: function() {
            var _a;
            return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
        },
        enumerable: false,
        configurable: true
    });
    Subject.prototype._trySubscribe = function(subscriber) {
        this._throwIfClosed();
        return _super.prototype._trySubscribe.call(this, subscriber);
    };
    Subject.prototype._subscribe = function(subscriber) {
        this._throwIfClosed();
        this._checkFinalizedStatuses(subscriber);
        return this._innerSubscribe(subscriber);
    };
    Subject.prototype._innerSubscribe = function(subscriber) {
        var _this = this;
        var _a = this, hasError = _a.hasError, isStopped = _a.isStopped, observers = _a.observers;
        if (hasError || isStopped) {
            return Subscription_1.EMPTY_SUBSCRIPTION;
        }
        this.currentObservers = null;
        observers.push(subscriber);
        return new Subscription_1.Subscription(function() {
            _this.currentObservers = null;
            arrRemove_1.arrRemove(observers, subscriber);
        });
    };
    Subject.prototype._checkFinalizedStatuses = function(subscriber) {
        var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, isStopped = _a.isStopped;
        if (hasError) {
            subscriber.error(thrownError);
        } else if (isStopped) {
            subscriber.complete();
        }
    };
    Subject.prototype.asObservable = function() {
        var observable = new Observable_1.Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function(destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(Observable_1.Observable);
exports.Subject = Subject;
var AnonymousSubject = function(_super) {
    __extends(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject.prototype.next = function(value) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
    };
    AnonymousSubject.prototype.error = function(err) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
    };
    AnonymousSubject.prototype.complete = function() {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    AnonymousSubject.prototype._subscribe = function(subscriber) {
        var _a, _b;
        return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : Subscription_1.EMPTY_SUBSCRIPTION;
    };
    return AnonymousSubject;
}(Subject);
exports.AnonymousSubject = AnonymousSubject; //# sourceMappingURL=Subject.js.map


/***/ }),

/***/ 40057:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var __extends = (void 0) && (void 0).__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.EMPTY_OBSERVER = exports.SafeSubscriber = exports.Subscriber = void 0;
var isFunction_1 = __webpack_require__(90422);
var Subscription_1 = __webpack_require__(43851);
var config_1 = __webpack_require__(17650);
var reportUnhandledError_1 = __webpack_require__(71411);
var noop_1 = __webpack_require__(81543);
var NotificationFactories_1 = __webpack_require__(99023);
var timeoutProvider_1 = __webpack_require__(57082);
var errorContext_1 = __webpack_require__(95984);
var Subscriber = function(_super) {
    __extends(Subscriber, _super);
    function Subscriber(destination) {
        var _this = _super.call(this) || this;
        _this.isStopped = false;
        if (destination) {
            _this.destination = destination;
            if (Subscription_1.isSubscription(destination)) {
                destination.add(_this);
            }
        } else {
            _this.destination = exports.EMPTY_OBSERVER;
        }
        return _this;
    }
    Subscriber.create = function(next, error, complete) {
        return new SafeSubscriber(next, error, complete);
    };
    Subscriber.prototype.next = function(value) {
        if (this.isStopped) {
            handleStoppedNotification(NotificationFactories_1.nextNotification(value), this);
        } else {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function(err) {
        if (this.isStopped) {
            handleStoppedNotification(NotificationFactories_1.errorNotification(err), this);
        } else {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function() {
        if (this.isStopped) {
            handleStoppedNotification(NotificationFactories_1.COMPLETE_NOTIFICATION, this);
        } else {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function() {
        if (!this.closed) {
            this.isStopped = true;
            _super.prototype.unsubscribe.call(this);
            this.destination = null;
        }
    };
    Subscriber.prototype._next = function(value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function(err) {
        try {
            this.destination.error(err);
        } finally{
            this.unsubscribe();
        }
    };
    Subscriber.prototype._complete = function() {
        try {
            this.destination.complete();
        } finally{
            this.unsubscribe();
        }
    };
    return Subscriber;
}(Subscription_1.Subscription);
exports.Subscriber = Subscriber;
var _bind = Function.prototype.bind;
function bind(fn, thisArg) {
    return _bind.call(fn, thisArg);
}
var ConsumerObserver = function() {
    function ConsumerObserver(partialObserver) {
        this.partialObserver = partialObserver;
    }
    ConsumerObserver.prototype.next = function(value) {
        var partialObserver = this.partialObserver;
        if (partialObserver.next) {
            try {
                partialObserver.next(value);
            } catch (error) {
                handleUnhandledError(error);
            }
        }
    };
    ConsumerObserver.prototype.error = function(err) {
        var partialObserver = this.partialObserver;
        if (partialObserver.error) {
            try {
                partialObserver.error(err);
            } catch (error) {
                handleUnhandledError(error);
            }
        } else {
            handleUnhandledError(err);
        }
    };
    ConsumerObserver.prototype.complete = function() {
        var partialObserver = this.partialObserver;
        if (partialObserver.complete) {
            try {
                partialObserver.complete();
            } catch (error) {
                handleUnhandledError(error);
            }
        }
    };
    return ConsumerObserver;
}();
var SafeSubscriber = function(_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        var partialObserver;
        if (isFunction_1.isFunction(observerOrNext) || !observerOrNext) {
            partialObserver = {
                next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : undefined,
                error: error !== null && error !== void 0 ? error : undefined,
                complete: complete !== null && complete !== void 0 ? complete : undefined
            };
        } else {
            var context_1;
            if (_this && config_1.config.useDeprecatedNextContext) {
                context_1 = Object.create(observerOrNext);
                context_1.unsubscribe = function() {
                    return _this.unsubscribe();
                };
                partialObserver = {
                    next: observerOrNext.next && bind(observerOrNext.next, context_1),
                    error: observerOrNext.error && bind(observerOrNext.error, context_1),
                    complete: observerOrNext.complete && bind(observerOrNext.complete, context_1)
                };
            } else {
                partialObserver = observerOrNext;
            }
        }
        _this.destination = new ConsumerObserver(partialObserver);
        return _this;
    }
    return SafeSubscriber;
}(Subscriber);
exports.SafeSubscriber = SafeSubscriber;
function handleUnhandledError(error) {
    if (config_1.config.useDeprecatedSynchronousErrorHandling) {
        errorContext_1.captureError(error);
    } else {
        reportUnhandledError_1.reportUnhandledError(error);
    }
}
function defaultErrorHandler(err) {
    throw err;
}
function handleStoppedNotification(notification, subscriber) {
    var onStoppedNotification = config_1.config.onStoppedNotification;
    onStoppedNotification && timeoutProvider_1.timeoutProvider.setTimeout(function() {
        return onStoppedNotification(notification, subscriber);
    });
}
exports.EMPTY_OBSERVER = {
    closed: true,
    next: noop_1.noop,
    error: defaultErrorHandler,
    complete: noop_1.noop
}; //# sourceMappingURL=Subscriber.js.map


/***/ }),

/***/ 43851:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var __values = (void 0) && (void 0).__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (void 0) && (void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = (void 0) && (void 0).__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isSubscription = exports.EMPTY_SUBSCRIPTION = exports.Subscription = void 0;
var isFunction_1 = __webpack_require__(90422);
var UnsubscriptionError_1 = __webpack_require__(4267);
var arrRemove_1 = __webpack_require__(86889);
var Subscription = function() {
    function Subscription(initialTeardown) {
        this.initialTeardown = initialTeardown;
        this.closed = false;
        this._parentage = null;
        this._finalizers = null;
    }
    Subscription.prototype.unsubscribe = function() {
        var e_1, _a, e_2, _b;
        var errors;
        if (!this.closed) {
            this.closed = true;
            var _parentage = this._parentage;
            if (_parentage) {
                this._parentage = null;
                if (Array.isArray(_parentage)) {
                    try {
                        for(var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()){
                            var parent_1 = _parentage_1_1.value;
                            parent_1.remove(this);
                        }
                    } catch (e_1_1) {
                        e_1 = {
                            error: e_1_1
                        };
                    } finally{
                        try {
                            if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);
                        } finally{
                            if (e_1) throw e_1.error;
                        }
                    }
                } else {
                    _parentage.remove(this);
                }
            }
            var initialFinalizer = this.initialTeardown;
            if (isFunction_1.isFunction(initialFinalizer)) {
                try {
                    initialFinalizer();
                } catch (e) {
                    errors = e instanceof UnsubscriptionError_1.UnsubscriptionError ? e.errors : [
                        e
                    ];
                }
            }
            var _finalizers = this._finalizers;
            if (_finalizers) {
                this._finalizers = null;
                try {
                    for(var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()){
                        var finalizer = _finalizers_1_1.value;
                        try {
                            execFinalizer(finalizer);
                        } catch (err) {
                            errors = errors !== null && errors !== void 0 ? errors : [];
                            if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
                                errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
                            } else {
                                errors.push(err);
                            }
                        }
                    }
                } catch (e_2_1) {
                    e_2 = {
                        error: e_2_1
                    };
                } finally{
                    try {
                        if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return)) _b.call(_finalizers_1);
                    } finally{
                        if (e_2) throw e_2.error;
                    }
                }
            }
            if (errors) {
                throw new UnsubscriptionError_1.UnsubscriptionError(errors);
            }
        }
    };
    Subscription.prototype.add = function(teardown) {
        var _a;
        if (teardown && teardown !== this) {
            if (this.closed) {
                execFinalizer(teardown);
            } else {
                if (teardown instanceof Subscription) {
                    if (teardown.closed || teardown._hasParent(this)) {
                        return;
                    }
                    teardown._addParent(this);
                }
                (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
            }
        }
    };
    Subscription.prototype._hasParent = function(parent) {
        var _parentage = this._parentage;
        return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
    };
    Subscription.prototype._addParent = function(parent) {
        var _parentage = this._parentage;
        this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [
            _parentage,
            parent
        ] : parent;
    };
    Subscription.prototype._removeParent = function(parent) {
        var _parentage = this._parentage;
        if (_parentage === parent) {
            this._parentage = null;
        } else if (Array.isArray(_parentage)) {
            arrRemove_1.arrRemove(_parentage, parent);
        }
    };
    Subscription.prototype.remove = function(teardown) {
        var _finalizers = this._finalizers;
        _finalizers && arrRemove_1.arrRemove(_finalizers, teardown);
        if (teardown instanceof Subscription) {
            teardown._removeParent(this);
        }
    };
    Subscription.EMPTY = function() {
        var empty = new Subscription();
        empty.closed = true;
        return empty;
    }();
    return Subscription;
}();
exports.Subscription = Subscription;
exports.EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
    return value instanceof Subscription || value && "closed" in value && isFunction_1.isFunction(value.remove) && isFunction_1.isFunction(value.add) && isFunction_1.isFunction(value.unsubscribe);
}
exports.isSubscription = isSubscription;
function execFinalizer(finalizer) {
    if (isFunction_1.isFunction(finalizer)) {
        finalizer();
    } else {
        finalizer.unsubscribe();
    }
} //# sourceMappingURL=Subscription.js.map


/***/ }),

/***/ 17650:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.config = void 0;
exports.config = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: undefined,
    useDeprecatedSynchronousErrorHandling: false,
    useDeprecatedNextContext: false
}; //# sourceMappingURL=config.js.map


/***/ }),

/***/ 28034:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.firstValueFrom = void 0;
var EmptyError_1 = __webpack_require__(10855);
var Subscriber_1 = __webpack_require__(40057);
function firstValueFrom(source, config) {
    var hasConfig = typeof config === "object";
    return new Promise(function(resolve, reject) {
        var subscriber = new Subscriber_1.SafeSubscriber({
            next: function(value) {
                resolve(value);
                subscriber.unsubscribe();
            },
            error: reject,
            complete: function() {
                if (hasConfig) {
                    resolve(config.defaultValue);
                } else {
                    reject(new EmptyError_1.EmptyError());
                }
            }
        });
        source.subscribe(subscriber);
    });
}
exports.firstValueFrom = firstValueFrom; //# sourceMappingURL=firstValueFrom.js.map


/***/ }),

/***/ 43928:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.lastValueFrom = void 0;
var EmptyError_1 = __webpack_require__(10855);
function lastValueFrom(source, config) {
    var hasConfig = typeof config === "object";
    return new Promise(function(resolve, reject) {
        var _hasValue = false;
        var _value;
        source.subscribe({
            next: function(value) {
                _value = value;
                _hasValue = true;
            },
            error: reject,
            complete: function() {
                if (_hasValue) {
                    resolve(_value);
                } else if (hasConfig) {
                    resolve(config.defaultValue);
                } else {
                    reject(new EmptyError_1.EmptyError());
                }
            }
        });
    });
}
exports.lastValueFrom = lastValueFrom; //# sourceMappingURL=lastValueFrom.js.map


/***/ }),

/***/ 29737:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var __extends = (void 0) && (void 0).__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.ConnectableObservable = void 0;
var Observable_1 = __webpack_require__(89043);
var Subscription_1 = __webpack_require__(43851);
var refCount_1 = __webpack_require__(42780);
var OperatorSubscriber_1 = __webpack_require__(57322);
var lift_1 = __webpack_require__(76189);
var ConnectableObservable = function(_super) {
    __extends(ConnectableObservable, _super);
    function ConnectableObservable(source, subjectFactory) {
        var _this = _super.call(this) || this;
        _this.source = source;
        _this.subjectFactory = subjectFactory;
        _this._subject = null;
        _this._refCount = 0;
        _this._connection = null;
        if (lift_1.hasLift(source)) {
            _this.lift = source.lift;
        }
        return _this;
    }
    ConnectableObservable.prototype._subscribe = function(subscriber) {
        return this.getSubject().subscribe(subscriber);
    };
    ConnectableObservable.prototype.getSubject = function() {
        var subject = this._subject;
        if (!subject || subject.isStopped) {
            this._subject = this.subjectFactory();
        }
        return this._subject;
    };
    ConnectableObservable.prototype._teardown = function() {
        this._refCount = 0;
        var _connection = this._connection;
        this._subject = this._connection = null;
        _connection === null || _connection === void 0 ? void 0 : _connection.unsubscribe();
    };
    ConnectableObservable.prototype.connect = function() {
        var _this = this;
        var connection = this._connection;
        if (!connection) {
            connection = this._connection = new Subscription_1.Subscription();
            var subject_1 = this.getSubject();
            connection.add(this.source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subject_1, undefined, function() {
                _this._teardown();
                subject_1.complete();
            }, function(err) {
                _this._teardown();
                subject_1.error(err);
            }, function() {
                return _this._teardown();
            })));
            if (connection.closed) {
                this._connection = null;
                connection = Subscription_1.Subscription.EMPTY;
            }
        }
        return connection;
    };
    ConnectableObservable.prototype.refCount = function() {
        return refCount_1.refCount()(this);
    };
    return ConnectableObservable;
}(Observable_1.Observable);
exports.ConnectableObservable = ConnectableObservable; //# sourceMappingURL=ConnectableObservable.js.map


/***/ }),

/***/ 74750:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.bindCallback = void 0;
var bindCallbackInternals_1 = __webpack_require__(70482);
function bindCallback(callbackFunc, resultSelector, scheduler) {
    return bindCallbackInternals_1.bindCallbackInternals(false, callbackFunc, resultSelector, scheduler);
}
exports.bindCallback = bindCallback; //# sourceMappingURL=bindCallback.js.map


/***/ }),

/***/ 70482:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var __read = (void 0) && (void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = (void 0) && (void 0).__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.bindCallbackInternals = void 0;
var isScheduler_1 = __webpack_require__(50543);
var Observable_1 = __webpack_require__(89043);
var subscribeOn_1 = __webpack_require__(66771);
var mapOneOrManyArgs_1 = __webpack_require__(69661);
var observeOn_1 = __webpack_require__(93409);
var AsyncSubject_1 = __webpack_require__(44820);
function bindCallbackInternals(isNodeStyle, callbackFunc, resultSelector, scheduler) {
    if (resultSelector) {
        if (isScheduler_1.isScheduler(resultSelector)) {
            scheduler = resultSelector;
        } else {
            return function() {
                var args = [];
                for(var _i = 0; _i < arguments.length; _i++){
                    args[_i] = arguments[_i];
                }
                return bindCallbackInternals(isNodeStyle, callbackFunc, scheduler).apply(this, args).pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector));
            };
        }
    }
    if (scheduler) {
        return function() {
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++){
                args[_i] = arguments[_i];
            }
            return bindCallbackInternals(isNodeStyle, callbackFunc).apply(this, args).pipe(subscribeOn_1.subscribeOn(scheduler), observeOn_1.observeOn(scheduler));
        };
    }
    return function() {
        var _this = this;
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++){
            args[_i] = arguments[_i];
        }
        var subject = new AsyncSubject_1.AsyncSubject();
        var uninitialized = true;
        return new Observable_1.Observable(function(subscriber) {
            var subs = subject.subscribe(subscriber);
            if (uninitialized) {
                uninitialized = false;
                var isAsync_1 = false;
                var isComplete_1 = false;
                callbackFunc.apply(_this, __spreadArray(__spreadArray([], __read(args)), [
                    function() {
                        var results = [];
                        for(var _i = 0; _i < arguments.length; _i++){
                            results[_i] = arguments[_i];
                        }
                        if (isNodeStyle) {
                            var err = results.shift();
                            if (err != null) {
                                subject.error(err);
                                return;
                            }
                        }
                        subject.next(1 < results.length ? results : results[0]);
                        isComplete_1 = true;
                        if (isAsync_1) {
                            subject.complete();
                        }
                    }
                ]));
                if (isComplete_1) {
                    subject.complete();
                }
                isAsync_1 = true;
            }
            return subs;
        });
    };
}
exports.bindCallbackInternals = bindCallbackInternals; //# sourceMappingURL=bindCallbackInternals.js.map


/***/ }),

/***/ 49402:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.bindNodeCallback = void 0;
var bindCallbackInternals_1 = __webpack_require__(70482);
function bindNodeCallback(callbackFunc, resultSelector, scheduler) {
    return bindCallbackInternals_1.bindCallbackInternals(true, callbackFunc, resultSelector, scheduler);
}
exports.bindNodeCallback = bindNodeCallback; //# sourceMappingURL=bindNodeCallback.js.map


/***/ }),

/***/ 93351:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.combineLatestInit = exports.combineLatest = void 0;
var Observable_1 = __webpack_require__(89043);
var argsArgArrayOrObject_1 = __webpack_require__(3996);
var from_1 = __webpack_require__(51400);
var identity_1 = __webpack_require__(13893);
var mapOneOrManyArgs_1 = __webpack_require__(69661);
var args_1 = __webpack_require__(3173);
var createObject_1 = __webpack_require__(21743);
var OperatorSubscriber_1 = __webpack_require__(57322);
var executeSchedule_1 = __webpack_require__(72854);
function combineLatest() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++){
        args[_i] = arguments[_i];
    }
    var scheduler = args_1.popScheduler(args);
    var resultSelector = args_1.popResultSelector(args);
    var _a = argsArgArrayOrObject_1.argsArgArrayOrObject(args), observables = _a.args, keys = _a.keys;
    if (observables.length === 0) {
        return from_1.from([], scheduler);
    }
    var result = new Observable_1.Observable(combineLatestInit(observables, scheduler, keys ? function(values) {
        return createObject_1.createObject(keys, values);
    } : identity_1.identity));
    return resultSelector ? result.pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector)) : result;
}
exports.combineLatest = combineLatest;
function combineLatestInit(observables, scheduler, valueTransform) {
    if (valueTransform === void 0) {
        valueTransform = identity_1.identity;
    }
    return function(subscriber) {
        maybeSchedule(scheduler, function() {
            var length = observables.length;
            var values = new Array(length);
            var active = length;
            var remainingFirstValues = length;
            var _loop_1 = function(i) {
                maybeSchedule(scheduler, function() {
                    var source = from_1.from(observables[i], scheduler);
                    var hasFirstValue = false;
                    source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
                        values[i] = value;
                        if (!hasFirstValue) {
                            hasFirstValue = true;
                            remainingFirstValues--;
                        }
                        if (!remainingFirstValues) {
                            subscriber.next(valueTransform(values.slice()));
                        }
                    }, function() {
                        if (!--active) {
                            subscriber.complete();
                        }
                    }));
                }, subscriber);
            };
            for(var i = 0; i < length; i++){
                _loop_1(i);
            }
        }, subscriber);
    };
}
exports.combineLatestInit = combineLatestInit;
function maybeSchedule(scheduler, execute, subscription) {
    if (scheduler) {
        executeSchedule_1.executeSchedule(subscription, scheduler, execute);
    } else {
        execute();
    }
} //# sourceMappingURL=combineLatest.js.map


/***/ }),

/***/ 48545:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.concat = void 0;
var concatAll_1 = __webpack_require__(90319);
var args_1 = __webpack_require__(3173);
var from_1 = __webpack_require__(51400);
function concat() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++){
        args[_i] = arguments[_i];
    }
    return concatAll_1.concatAll()(from_1.from(args, args_1.popScheduler(args)));
}
exports.concat = concat; //# sourceMappingURL=concat.js.map


/***/ }),

/***/ 21571:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.connectable = void 0;
var Subject_1 = __webpack_require__(20833);
var Observable_1 = __webpack_require__(89043);
var defer_1 = __webpack_require__(79367);
var DEFAULT_CONFIG = {
    connector: function() {
        return new Subject_1.Subject();
    },
    resetOnDisconnect: true
};
function connectable(source, config) {
    if (config === void 0) {
        config = DEFAULT_CONFIG;
    }
    var connection = null;
    var connector = config.connector, _a = config.resetOnDisconnect, resetOnDisconnect = _a === void 0 ? true : _a;
    var subject = connector();
    var result = new Observable_1.Observable(function(subscriber) {
        return subject.subscribe(subscriber);
    });
    result.connect = function() {
        if (!connection || connection.closed) {
            connection = defer_1.defer(function() {
                return source;
            }).subscribe(subject);
            if (resetOnDisconnect) {
                connection.add(function() {
                    return subject = connector();
                });
            }
        }
        return connection;
    };
    return result;
}
exports.connectable = connectable; //# sourceMappingURL=connectable.js.map


/***/ }),

/***/ 79367:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.defer = void 0;
var Observable_1 = __webpack_require__(89043);
var innerFrom_1 = __webpack_require__(50711);
function defer(observableFactory) {
    return new Observable_1.Observable(function(subscriber) {
        innerFrom_1.innerFrom(observableFactory()).subscribe(subscriber);
    });
}
exports.defer = defer; //# sourceMappingURL=defer.js.map


/***/ }),

/***/ 32526:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.animationFrames = void 0;
var Observable_1 = __webpack_require__(89043);
var performanceTimestampProvider_1 = __webpack_require__(73924);
var animationFrameProvider_1 = __webpack_require__(46011);
function animationFrames(timestampProvider) {
    return timestampProvider ? animationFramesFactory(timestampProvider) : DEFAULT_ANIMATION_FRAMES;
}
exports.animationFrames = animationFrames;
function animationFramesFactory(timestampProvider) {
    return new Observable_1.Observable(function(subscriber) {
        var provider = timestampProvider || performanceTimestampProvider_1.performanceTimestampProvider;
        var start = provider.now();
        var id = 0;
        var run = function() {
            if (!subscriber.closed) {
                id = animationFrameProvider_1.animationFrameProvider.requestAnimationFrame(function(timestamp) {
                    id = 0;
                    var now = provider.now();
                    subscriber.next({
                        timestamp: timestampProvider ? now : timestamp,
                        elapsed: now - start
                    });
                    run();
                });
            }
        };
        run();
        return function() {
            if (id) {
                animationFrameProvider_1.animationFrameProvider.cancelAnimationFrame(id);
            }
        };
    });
}
var DEFAULT_ANIMATION_FRAMES = animationFramesFactory(); //# sourceMappingURL=animationFrames.js.map


/***/ }),

/***/ 7999:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.empty = exports.EMPTY = void 0;
var Observable_1 = __webpack_require__(89043);
exports.EMPTY = new Observable_1.Observable(function(subscriber) {
    return subscriber.complete();
});
function empty(scheduler) {
    return scheduler ? emptyScheduled(scheduler) : exports.EMPTY;
}
exports.empty = empty;
function emptyScheduled(scheduler) {
    return new Observable_1.Observable(function(subscriber) {
        return scheduler.schedule(function() {
            return subscriber.complete();
        });
    });
} //# sourceMappingURL=empty.js.map


/***/ }),

/***/ 94270:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.forkJoin = void 0;
var Observable_1 = __webpack_require__(89043);
var argsArgArrayOrObject_1 = __webpack_require__(3996);
var innerFrom_1 = __webpack_require__(50711);
var args_1 = __webpack_require__(3173);
var OperatorSubscriber_1 = __webpack_require__(57322);
var mapOneOrManyArgs_1 = __webpack_require__(69661);
var createObject_1 = __webpack_require__(21743);
function forkJoin() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++){
        args[_i] = arguments[_i];
    }
    var resultSelector = args_1.popResultSelector(args);
    var _a = argsArgArrayOrObject_1.argsArgArrayOrObject(args), sources = _a.args, keys = _a.keys;
    var result = new Observable_1.Observable(function(subscriber) {
        var length = sources.length;
        if (!length) {
            subscriber.complete();
            return;
        }
        var values = new Array(length);
        var remainingCompletions = length;
        var remainingEmissions = length;
        var _loop_1 = function(sourceIndex) {
            var hasValue = false;
            innerFrom_1.innerFrom(sources[sourceIndex]).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
                if (!hasValue) {
                    hasValue = true;
                    remainingEmissions--;
                }
                values[sourceIndex] = value;
            }, function() {
                return remainingCompletions--;
            }, undefined, function() {
                if (!remainingCompletions || !hasValue) {
                    if (!remainingEmissions) {
                        subscriber.next(keys ? createObject_1.createObject(keys, values) : values);
                    }
                    subscriber.complete();
                }
            }));
        };
        for(var sourceIndex = 0; sourceIndex < length; sourceIndex++){
            _loop_1(sourceIndex);
        }
    });
    return resultSelector ? result.pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector)) : result;
}
exports.forkJoin = forkJoin; //# sourceMappingURL=forkJoin.js.map


/***/ }),

/***/ 51400:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.from = void 0;
var scheduled_1 = __webpack_require__(27188);
var innerFrom_1 = __webpack_require__(50711);
function from(input, scheduler) {
    return scheduler ? scheduled_1.scheduled(input, scheduler) : innerFrom_1.innerFrom(input);
}
exports.from = from; //# sourceMappingURL=from.js.map


/***/ }),

/***/ 1814:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var __read = (void 0) && (void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.fromEvent = void 0;
var innerFrom_1 = __webpack_require__(50711);
var Observable_1 = __webpack_require__(89043);
var mergeMap_1 = __webpack_require__(49891);
var isArrayLike_1 = __webpack_require__(93669);
var isFunction_1 = __webpack_require__(90422);
var mapOneOrManyArgs_1 = __webpack_require__(69661);
var nodeEventEmitterMethods = [
    "addListener",
    "removeListener"
];
var eventTargetMethods = [
    "addEventListener",
    "removeEventListener"
];
var jqueryMethods = [
    "on",
    "off"
];
function fromEvent(target, eventName, options, resultSelector) {
    if (isFunction_1.isFunction(options)) {
        resultSelector = options;
        options = undefined;
    }
    if (resultSelector) {
        return fromEvent(target, eventName, options).pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector));
    }
    var _a = __read(isEventTarget(target) ? eventTargetMethods.map(function(methodName) {
        return function(handler) {
            return target[methodName](eventName, handler, options);
        };
    }) : isNodeStyleEventEmitter(target) ? nodeEventEmitterMethods.map(toCommonHandlerRegistry(target, eventName)) : isJQueryStyleEventEmitter(target) ? jqueryMethods.map(toCommonHandlerRegistry(target, eventName)) : [], 2), add = _a[0], remove = _a[1];
    if (!add) {
        if (isArrayLike_1.isArrayLike(target)) {
            return mergeMap_1.mergeMap(function(subTarget) {
                return fromEvent(subTarget, eventName, options);
            })(innerFrom_1.innerFrom(target));
        }
    }
    if (!add) {
        throw new TypeError("Invalid event target");
    }
    return new Observable_1.Observable(function(subscriber) {
        var handler = function() {
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++){
                args[_i] = arguments[_i];
            }
            return subscriber.next(1 < args.length ? args : args[0]);
        };
        add(handler);
        return function() {
            return remove(handler);
        };
    });
}
exports.fromEvent = fromEvent;
function toCommonHandlerRegistry(target, eventName) {
    return function(methodName) {
        return function(handler) {
            return target[methodName](eventName, handler);
        };
    };
}
function isNodeStyleEventEmitter(target) {
    return isFunction_1.isFunction(target.addListener) && isFunction_1.isFunction(target.removeListener);
}
function isJQueryStyleEventEmitter(target) {
    return isFunction_1.isFunction(target.on) && isFunction_1.isFunction(target.off);
}
function isEventTarget(target) {
    return isFunction_1.isFunction(target.addEventListener) && isFunction_1.isFunction(target.removeEventListener);
} //# sourceMappingURL=fromEvent.js.map


/***/ }),

/***/ 51574:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.fromEventPattern = void 0;
var Observable_1 = __webpack_require__(89043);
var isFunction_1 = __webpack_require__(90422);
var mapOneOrManyArgs_1 = __webpack_require__(69661);
function fromEventPattern(addHandler, removeHandler, resultSelector) {
    if (resultSelector) {
        return fromEventPattern(addHandler, removeHandler).pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector));
    }
    return new Observable_1.Observable(function(subscriber) {
        var handler = function() {
            var e = [];
            for(var _i = 0; _i < arguments.length; _i++){
                e[_i] = arguments[_i];
            }
            return subscriber.next(e.length === 1 ? e[0] : e);
        };
        var retValue = addHandler(handler);
        return isFunction_1.isFunction(removeHandler) ? function() {
            return removeHandler(handler, retValue);
        } : undefined;
    });
}
exports.fromEventPattern = fromEventPattern; //# sourceMappingURL=fromEventPattern.js.map


/***/ }),

/***/ 36459:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.fromSubscribable = void 0;
var Observable_1 = __webpack_require__(89043);
function fromSubscribable(subscribable) {
    return new Observable_1.Observable(function(subscriber) {
        return subscribable.subscribe(subscriber);
    });
}
exports.fromSubscribable = fromSubscribable; //# sourceMappingURL=fromSubscribable.js.map


/***/ }),

/***/ 46292:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var __generator = (void 0) && (void 0).__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.generate = void 0;
var identity_1 = __webpack_require__(13893);
var isScheduler_1 = __webpack_require__(50543);
var defer_1 = __webpack_require__(79367);
var scheduleIterable_1 = __webpack_require__(61576);
function generate(initialStateOrOptions, condition, iterate, resultSelectorOrScheduler, scheduler) {
    var _a, _b;
    var resultSelector;
    var initialState;
    if (arguments.length === 1) {
        _a = initialStateOrOptions, initialState = _a.initialState, condition = _a.condition, iterate = _a.iterate, _b = _a.resultSelector, resultSelector = _b === void 0 ? identity_1.identity : _b, scheduler = _a.scheduler;
    } else {
        initialState = initialStateOrOptions;
        if (!resultSelectorOrScheduler || isScheduler_1.isScheduler(resultSelectorOrScheduler)) {
            resultSelector = identity_1.identity;
            scheduler = resultSelectorOrScheduler;
        } else {
            resultSelector = resultSelectorOrScheduler;
        }
    }
    function gen() {
        var state;
        return __generator(this, function(_a) {
            switch(_a.label){
                case 0:
                    state = initialState;
                    _a.label = 1;
                case 1:
                    if (!(!condition || condition(state))) return [
                        3,
                        4
                    ];
                    return [
                        4,
                        resultSelector(state)
                    ];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    state = iterate(state);
                    return [
                        3,
                        1
                    ];
                case 4:
                    return [
                        2
                    ];
            }
        });
    }
    return defer_1.defer(scheduler ? function() {
        return scheduleIterable_1.scheduleIterable(gen(), scheduler);
    } : gen);
}
exports.generate = generate; //# sourceMappingURL=generate.js.map


/***/ }),

/***/ 39828:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.iif = void 0;
var defer_1 = __webpack_require__(79367);
function iif(condition, trueResult, falseResult) {
    return defer_1.defer(function() {
        return condition() ? trueResult : falseResult;
    });
}
exports.iif = iif; //# sourceMappingURL=iif.js.map


/***/ }),

/***/ 50711:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var __awaiter = (void 0) && (void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (void 0) && (void 0).__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
var __asyncValues = (void 0) && (void 0).__asyncValues || function(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
};
var __values = (void 0) && (void 0).__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.fromReadableStreamLike = exports.fromAsyncIterable = exports.fromIterable = exports.fromPromise = exports.fromArrayLike = exports.fromInteropObservable = exports.innerFrom = void 0;
var isArrayLike_1 = __webpack_require__(93669);
var isPromise_1 = __webpack_require__(57984);
var Observable_1 = __webpack_require__(89043);
var isInteropObservable_1 = __webpack_require__(32645);
var isAsyncIterable_1 = __webpack_require__(75861);
var throwUnobservableError_1 = __webpack_require__(79308);
var isIterable_1 = __webpack_require__(42203);
var isReadableStreamLike_1 = __webpack_require__(21999);
var isFunction_1 = __webpack_require__(90422);
var reportUnhandledError_1 = __webpack_require__(71411);
var observable_1 = __webpack_require__(65183);
function innerFrom(input) {
    if (input instanceof Observable_1.Observable) {
        return input;
    }
    if (input != null) {
        if (isInteropObservable_1.isInteropObservable(input)) {
            return fromInteropObservable(input);
        }
        if (isArrayLike_1.isArrayLike(input)) {
            return fromArrayLike(input);
        }
        if (isPromise_1.isPromise(input)) {
            return fromPromise(input);
        }
        if (isAsyncIterable_1.isAsyncIterable(input)) {
            return fromAsyncIterable(input);
        }
        if (isIterable_1.isIterable(input)) {
            return fromIterable(input);
        }
        if (isReadableStreamLike_1.isReadableStreamLike(input)) {
            return fromReadableStreamLike(input);
        }
    }
    throw throwUnobservableError_1.createInvalidObservableTypeError(input);
}
exports.innerFrom = innerFrom;
function fromInteropObservable(obj) {
    return new Observable_1.Observable(function(subscriber) {
        var obs = obj[observable_1.observable]();
        if (isFunction_1.isFunction(obs.subscribe)) {
            return obs.subscribe(subscriber);
        }
        throw new TypeError("Provided object does not correctly implement Symbol.observable");
    });
}
exports.fromInteropObservable = fromInteropObservable;
function fromArrayLike(array) {
    return new Observable_1.Observable(function(subscriber) {
        for(var i = 0; i < array.length && !subscriber.closed; i++){
            subscriber.next(array[i]);
        }
        subscriber.complete();
    });
}
exports.fromArrayLike = fromArrayLike;
function fromPromise(promise) {
    return new Observable_1.Observable(function(subscriber) {
        promise.then(function(value) {
            if (!subscriber.closed) {
                subscriber.next(value);
                subscriber.complete();
            }
        }, function(err) {
            return subscriber.error(err);
        }).then(null, reportUnhandledError_1.reportUnhandledError);
    });
}
exports.fromPromise = fromPromise;
function fromIterable(iterable) {
    return new Observable_1.Observable(function(subscriber) {
        var e_1, _a;
        try {
            for(var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()){
                var value = iterable_1_1.value;
                subscriber.next(value);
                if (subscriber.closed) {
                    return;
                }
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return)) _a.call(iterable_1);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
        subscriber.complete();
    });
}
exports.fromIterable = fromIterable;
function fromAsyncIterable(asyncIterable) {
    return new Observable_1.Observable(function(subscriber) {
        process(asyncIterable, subscriber).catch(function(err) {
            return subscriber.error(err);
        });
    });
}
exports.fromAsyncIterable = fromAsyncIterable;
function fromReadableStreamLike(readableStream) {
    return fromAsyncIterable(isReadableStreamLike_1.readableStreamLikeToAsyncGenerator(readableStream));
}
exports.fromReadableStreamLike = fromReadableStreamLike;
function process(asyncIterable, subscriber) {
    var asyncIterable_1, asyncIterable_1_1;
    var e_2, _a;
    return __awaiter(this, void 0, void 0, function() {
        var value, e_2_1;
        return __generator(this, function(_b) {
            switch(_b.label){
                case 0:
                    _b.trys.push([
                        0,
                        5,
                        6,
                        11
                    ]);
                    asyncIterable_1 = __asyncValues(asyncIterable);
                    _b.label = 1;
                case 1:
                    return [
                        4,
                        asyncIterable_1.next()
                    ];
                case 2:
                    if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done)) return [
                        3,
                        4
                    ];
                    value = asyncIterable_1_1.value;
                    subscriber.next(value);
                    if (subscriber.closed) {
                        return [
                            2
                        ];
                    }
                    _b.label = 3;
                case 3:
                    return [
                        3,
                        1
                    ];
                case 4:
                    return [
                        3,
                        11
                    ];
                case 5:
                    e_2_1 = _b.sent();
                    e_2 = {
                        error: e_2_1
                    };
                    return [
                        3,
                        11
                    ];
                case 6:
                    _b.trys.push([
                        6,
                        ,
                        9,
                        10
                    ]);
                    if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return))) return [
                        3,
                        8
                    ];
                    return [
                        4,
                        _a.call(asyncIterable_1)
                    ];
                case 7:
                    _b.sent();
                    _b.label = 8;
                case 8:
                    return [
                        3,
                        10
                    ];
                case 9:
                    if (e_2) throw e_2.error;
                    return [
                        7
                    ];
                case 10:
                    return [
                        7
                    ];
                case 11:
                    subscriber.complete();
                    return [
                        2
                    ];
            }
        });
    });
} //# sourceMappingURL=innerFrom.js.map


/***/ }),

/***/ 22001:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.interval = void 0;
var async_1 = __webpack_require__(83970);
var timer_1 = __webpack_require__(33158);
function interval(period, scheduler) {
    if (period === void 0) {
        period = 0;
    }
    if (scheduler === void 0) {
        scheduler = async_1.asyncScheduler;
    }
    if (period < 0) {
        period = 0;
    }
    return timer_1.timer(period, period, scheduler);
}
exports.interval = interval; //# sourceMappingURL=interval.js.map


/***/ }),

/***/ 75057:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.merge = void 0;
var mergeAll_1 = __webpack_require__(63770);
var innerFrom_1 = __webpack_require__(50711);
var empty_1 = __webpack_require__(7999);
var args_1 = __webpack_require__(3173);
var from_1 = __webpack_require__(51400);
function merge() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++){
        args[_i] = arguments[_i];
    }
    var scheduler = args_1.popScheduler(args);
    var concurrent = args_1.popNumber(args, Infinity);
    var sources = args;
    return !sources.length ? empty_1.EMPTY : sources.length === 1 ? innerFrom_1.innerFrom(sources[0]) : mergeAll_1.mergeAll(concurrent)(from_1.from(sources, scheduler));
}
exports.merge = merge; //# sourceMappingURL=merge.js.map


/***/ }),

/***/ 18701:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.never = exports.NEVER = void 0;
var Observable_1 = __webpack_require__(89043);
var noop_1 = __webpack_require__(81543);
exports.NEVER = new Observable_1.Observable(noop_1.noop);
function never() {
    return exports.NEVER;
}
exports.never = never; //# sourceMappingURL=never.js.map


/***/ }),

/***/ 42353:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.of = void 0;
var args_1 = __webpack_require__(3173);
var from_1 = __webpack_require__(51400);
function of() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++){
        args[_i] = arguments[_i];
    }
    var scheduler = args_1.popScheduler(args);
    return from_1.from(args, scheduler);
}
exports.of = of; //# sourceMappingURL=of.js.map


/***/ }),

/***/ 63511:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.onErrorResumeNext = void 0;
var Observable_1 = __webpack_require__(89043);
var argsOrArgArray_1 = __webpack_require__(1643);
var OperatorSubscriber_1 = __webpack_require__(57322);
var noop_1 = __webpack_require__(81543);
var innerFrom_1 = __webpack_require__(50711);
function onErrorResumeNext() {
    var sources = [];
    for(var _i = 0; _i < arguments.length; _i++){
        sources[_i] = arguments[_i];
    }
    var nextSources = argsOrArgArray_1.argsOrArgArray(sources);
    return new Observable_1.Observable(function(subscriber) {
        var sourceIndex = 0;
        var subscribeNext = function() {
            if (sourceIndex < nextSources.length) {
                var nextSource = void 0;
                try {
                    nextSource = innerFrom_1.innerFrom(nextSources[sourceIndex++]);
                } catch (err) {
                    subscribeNext();
                    return;
                }
                var innerSubscriber = new OperatorSubscriber_1.OperatorSubscriber(subscriber, undefined, noop_1.noop, noop_1.noop);
                nextSource.subscribe(innerSubscriber);
                innerSubscriber.add(subscribeNext);
            } else {
                subscriber.complete();
            }
        };
        subscribeNext();
    });
}
exports.onErrorResumeNext = onErrorResumeNext; //# sourceMappingURL=onErrorResumeNext.js.map


/***/ }),

/***/ 60348:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.pairs = void 0;
var from_1 = __webpack_require__(51400);
function pairs(obj, scheduler) {
    return from_1.from(Object.entries(obj), scheduler);
}
exports.pairs = pairs; //# sourceMappingURL=pairs.js.map


/***/ }),

/***/ 34386:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.partition = void 0;
var not_1 = __webpack_require__(88974);
var filter_1 = __webpack_require__(83099);
var innerFrom_1 = __webpack_require__(50711);
function partition(source, predicate, thisArg) {
    return [
        filter_1.filter(predicate, thisArg)(innerFrom_1.innerFrom(source)),
        filter_1.filter(not_1.not(predicate, thisArg))(innerFrom_1.innerFrom(source))
    ];
}
exports.partition = partition; //# sourceMappingURL=partition.js.map


/***/ }),

/***/ 63308:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.raceInit = exports.race = void 0;
var Observable_1 = __webpack_require__(89043);
var innerFrom_1 = __webpack_require__(50711);
var argsOrArgArray_1 = __webpack_require__(1643);
var OperatorSubscriber_1 = __webpack_require__(57322);
function race() {
    var sources = [];
    for(var _i = 0; _i < arguments.length; _i++){
        sources[_i] = arguments[_i];
    }
    sources = argsOrArgArray_1.argsOrArgArray(sources);
    return sources.length === 1 ? innerFrom_1.innerFrom(sources[0]) : new Observable_1.Observable(raceInit(sources));
}
exports.race = race;
function raceInit(sources) {
    return function(subscriber) {
        var subscriptions = [];
        var _loop_1 = function(i) {
            subscriptions.push(innerFrom_1.innerFrom(sources[i]).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
                if (subscriptions) {
                    for(var s = 0; s < subscriptions.length; s++){
                        s !== i && subscriptions[s].unsubscribe();
                    }
                    subscriptions = null;
                }
                subscriber.next(value);
            })));
        };
        for(var i = 0; subscriptions && !subscriber.closed && i < sources.length; i++){
            _loop_1(i);
        }
    };
}
exports.raceInit = raceInit; //# sourceMappingURL=race.js.map


/***/ }),

/***/ 57629:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.range = void 0;
var Observable_1 = __webpack_require__(89043);
var empty_1 = __webpack_require__(7999);
function range(start, count, scheduler) {
    if (count == null) {
        count = start;
        start = 0;
    }
    if (count <= 0) {
        return empty_1.EMPTY;
    }
    var end = count + start;
    return new Observable_1.Observable(scheduler ? function(subscriber) {
        var n = start;
        return scheduler.schedule(function() {
            if (n < end) {
                subscriber.next(n++);
                this.schedule();
            } else {
                subscriber.complete();
            }
        });
    } : function(subscriber) {
        var n = start;
        while(n < end && !subscriber.closed){
            subscriber.next(n++);
        }
        subscriber.complete();
    });
}
exports.range = range; //# sourceMappingURL=range.js.map


/***/ }),

/***/ 26791:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.throwError = void 0;
var Observable_1 = __webpack_require__(89043);
var isFunction_1 = __webpack_require__(90422);
function throwError(errorOrErrorFactory, scheduler) {
    var errorFactory = isFunction_1.isFunction(errorOrErrorFactory) ? errorOrErrorFactory : function() {
        return errorOrErrorFactory;
    };
    var init = function(subscriber) {
        return subscriber.error(errorFactory());
    };
    return new Observable_1.Observable(scheduler ? function(subscriber) {
        return scheduler.schedule(init, 0, subscriber);
    } : init);
}
exports.throwError = throwError; //# sourceMappingURL=throwError.js.map


/***/ }),

/***/ 33158:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.timer = void 0;
var Observable_1 = __webpack_require__(89043);
var async_1 = __webpack_require__(83970);
var isScheduler_1 = __webpack_require__(50543);
var isDate_1 = __webpack_require__(27169);
function timer(dueTime, intervalOrScheduler, scheduler) {
    if (dueTime === void 0) {
        dueTime = 0;
    }
    if (scheduler === void 0) {
        scheduler = async_1.async;
    }
    var intervalDuration = -1;
    if (intervalOrScheduler != null) {
        if (isScheduler_1.isScheduler(intervalOrScheduler)) {
            scheduler = intervalOrScheduler;
        } else {
            intervalDuration = intervalOrScheduler;
        }
    }
    return new Observable_1.Observable(function(subscriber) {
        var due = isDate_1.isValidDate(dueTime) ? +dueTime - scheduler.now() : dueTime;
        if (due < 0) {
            due = 0;
        }
        var n = 0;
        return scheduler.schedule(function() {
            if (!subscriber.closed) {
                subscriber.next(n++);
                if (0 <= intervalDuration) {
                    this.schedule(undefined, intervalDuration);
                } else {
                    subscriber.complete();
                }
            }
        }, due);
    });
}
exports.timer = timer; //# sourceMappingURL=timer.js.map


/***/ }),

/***/ 38226:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.using = void 0;
var Observable_1 = __webpack_require__(89043);
var innerFrom_1 = __webpack_require__(50711);
var empty_1 = __webpack_require__(7999);
function using(resourceFactory, observableFactory) {
    return new Observable_1.Observable(function(subscriber) {
        var resource = resourceFactory();
        var result = observableFactory(resource);
        var source = result ? innerFrom_1.innerFrom(result) : empty_1.EMPTY;
        source.subscribe(subscriber);
        return function() {
            if (resource) {
                resource.unsubscribe();
            }
        };
    });
}
exports.using = using; //# sourceMappingURL=using.js.map


/***/ }),

/***/ 13356:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var __read = (void 0) && (void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = (void 0) && (void 0).__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.zip = void 0;
var Observable_1 = __webpack_require__(89043);
var innerFrom_1 = __webpack_require__(50711);
var argsOrArgArray_1 = __webpack_require__(1643);
var empty_1 = __webpack_require__(7999);
var OperatorSubscriber_1 = __webpack_require__(57322);
var args_1 = __webpack_require__(3173);
function zip() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++){
        args[_i] = arguments[_i];
    }
    var resultSelector = args_1.popResultSelector(args);
    var sources = argsOrArgArray_1.argsOrArgArray(args);
    return sources.length ? new Observable_1.Observable(function(subscriber) {
        var buffers = sources.map(function() {
            return [];
        });
        var completed = sources.map(function() {
            return false;
        });
        subscriber.add(function() {
            buffers = completed = null;
        });
        var _loop_1 = function(sourceIndex) {
            innerFrom_1.innerFrom(sources[sourceIndex]).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
                buffers[sourceIndex].push(value);
                if (buffers.every(function(buffer) {
                    return buffer.length;
                })) {
                    var result = buffers.map(function(buffer) {
                        return buffer.shift();
                    });
                    subscriber.next(resultSelector ? resultSelector.apply(void 0, __spreadArray([], __read(result))) : result);
                    if (buffers.some(function(buffer, i) {
                        return !buffer.length && completed[i];
                    })) {
                        subscriber.complete();
                    }
                }
            }, function() {
                completed[sourceIndex] = true;
                !buffers[sourceIndex].length && subscriber.complete();
            }));
        };
        for(var sourceIndex = 0; !subscriber.closed && sourceIndex < sources.length; sourceIndex++){
            _loop_1(sourceIndex);
        }
        return function() {
            buffers = completed = null;
        };
    }) : empty_1.EMPTY;
}
exports.zip = zip; //# sourceMappingURL=zip.js.map


/***/ }),

/***/ 57322:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var __extends = (void 0) && (void 0).__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.OperatorSubscriber = exports.createOperatorSubscriber = void 0;
var Subscriber_1 = __webpack_require__(40057);
function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
    return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
exports.createOperatorSubscriber = createOperatorSubscriber;
var OperatorSubscriber = function(_super) {
    __extends(OperatorSubscriber, _super);
    function OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
        var _this = _super.call(this, destination) || this;
        _this.onFinalize = onFinalize;
        _this.shouldUnsubscribe = shouldUnsubscribe;
        _this._next = onNext ? function(value) {
            try {
                onNext(value);
            } catch (err) {
                destination.error(err);
            }
        } : _super.prototype._next;
        _this._error = onError ? function(err) {
            try {
                onError(err);
            } catch (err) {
                destination.error(err);
            } finally{
                this.unsubscribe();
            }
        } : _super.prototype._error;
        _this._complete = onComplete ? function() {
            try {
                onComplete();
            } catch (err) {
                destination.error(err);
            } finally{
                this.unsubscribe();
            }
        } : _super.prototype._complete;
        return _this;
    }
    OperatorSubscriber.prototype.unsubscribe = function() {
        var _a;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            var closed_1 = this.closed;
            _super.prototype.unsubscribe.call(this);
            !closed_1 && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
        }
    };
    return OperatorSubscriber;
}(Subscriber_1.Subscriber);
exports.OperatorSubscriber = OperatorSubscriber; //# sourceMappingURL=OperatorSubscriber.js.map


/***/ }),

/***/ 40685:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.audit = void 0;
var lift_1 = __webpack_require__(76189);
var innerFrom_1 = __webpack_require__(50711);
var OperatorSubscriber_1 = __webpack_require__(57322);
function audit(durationSelector) {
    return lift_1.operate(function(source, subscriber) {
        var hasValue = false;
        var lastValue = null;
        var durationSubscriber = null;
        var isComplete = false;
        var endDuration = function() {
            durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
            durationSubscriber = null;
            if (hasValue) {
                hasValue = false;
                var value = lastValue;
                lastValue = null;
                subscriber.next(value);
            }
            isComplete && subscriber.complete();
        };
        var cleanupDuration = function() {
            durationSubscriber = null;
            isComplete && subscriber.complete();
        };
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            hasValue = true;
            lastValue = value;
            if (!durationSubscriber) {
                innerFrom_1.innerFrom(durationSelector(value)).subscribe(durationSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, endDuration, cleanupDuration));
            }
        }, function() {
            isComplete = true;
            (!hasValue || !durationSubscriber || durationSubscriber.closed) && subscriber.complete();
        }));
    });
}
exports.audit = audit; //# sourceMappingURL=audit.js.map


/***/ }),

/***/ 79483:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.auditTime = void 0;
var async_1 = __webpack_require__(83970);
var audit_1 = __webpack_require__(40685);
var timer_1 = __webpack_require__(33158);
function auditTime(duration, scheduler) {
    if (scheduler === void 0) {
        scheduler = async_1.asyncScheduler;
    }
    return audit_1.audit(function() {
        return timer_1.timer(duration, scheduler);
    });
}
exports.auditTime = auditTime; //# sourceMappingURL=auditTime.js.map


/***/ }),

/***/ 43974:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.buffer = void 0;
var lift_1 = __webpack_require__(76189);
var noop_1 = __webpack_require__(81543);
var OperatorSubscriber_1 = __webpack_require__(57322);
var innerFrom_1 = __webpack_require__(50711);
function buffer(closingNotifier) {
    return lift_1.operate(function(source, subscriber) {
        var currentBuffer = [];
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            return currentBuffer.push(value);
        }, function() {
            subscriber.next(currentBuffer);
            subscriber.complete();
        }));
        innerFrom_1.innerFrom(closingNotifier).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
            var b = currentBuffer;
            currentBuffer = [];
            subscriber.next(b);
        }, noop_1.noop));
        return function() {
            currentBuffer = null;
        };
    });
}
exports.buffer = buffer; //# sourceMappingURL=buffer.js.map


/***/ }),

/***/ 26530:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var __values = (void 0) && (void 0).__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.bufferCount = void 0;
var lift_1 = __webpack_require__(76189);
var OperatorSubscriber_1 = __webpack_require__(57322);
var arrRemove_1 = __webpack_require__(86889);
function bufferCount(bufferSize, startBufferEvery) {
    if (startBufferEvery === void 0) {
        startBufferEvery = null;
    }
    startBufferEvery = startBufferEvery !== null && startBufferEvery !== void 0 ? startBufferEvery : bufferSize;
    return lift_1.operate(function(source, subscriber) {
        var buffers = [];
        var count = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            var e_1, _a, e_2, _b;
            var toEmit = null;
            if (count++ % startBufferEvery === 0) {
                buffers.push([]);
            }
            try {
                for(var buffers_1 = __values(buffers), buffers_1_1 = buffers_1.next(); !buffers_1_1.done; buffers_1_1 = buffers_1.next()){
                    var buffer = buffers_1_1.value;
                    buffer.push(value);
                    if (bufferSize <= buffer.length) {
                        toEmit = toEmit !== null && toEmit !== void 0 ? toEmit : [];
                        toEmit.push(buffer);
                    }
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (buffers_1_1 && !buffers_1_1.done && (_a = buffers_1.return)) _a.call(buffers_1);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
            if (toEmit) {
                try {
                    for(var toEmit_1 = __values(toEmit), toEmit_1_1 = toEmit_1.next(); !toEmit_1_1.done; toEmit_1_1 = toEmit_1.next()){
                        var buffer = toEmit_1_1.value;
                        arrRemove_1.arrRemove(buffers, buffer);
                        subscriber.next(buffer);
                    }
                } catch (e_2_1) {
                    e_2 = {
                        error: e_2_1
                    };
                } finally{
                    try {
                        if (toEmit_1_1 && !toEmit_1_1.done && (_b = toEmit_1.return)) _b.call(toEmit_1);
                    } finally{
                        if (e_2) throw e_2.error;
                    }
                }
            }
        }, function() {
            var e_3, _a;
            try {
                for(var buffers_2 = __values(buffers), buffers_2_1 = buffers_2.next(); !buffers_2_1.done; buffers_2_1 = buffers_2.next()){
                    var buffer = buffers_2_1.value;
                    subscriber.next(buffer);
                }
            } catch (e_3_1) {
                e_3 = {
                    error: e_3_1
                };
            } finally{
                try {
                    if (buffers_2_1 && !buffers_2_1.done && (_a = buffers_2.return)) _a.call(buffers_2);
                } finally{
                    if (e_3) throw e_3.error;
                }
            }
            subscriber.complete();
        }, undefined, function() {
            buffers = null;
        }));
    });
}
exports.bufferCount = bufferCount; //# sourceMappingURL=bufferCount.js.map


/***/ }),

/***/ 55100:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var __values = (void 0) && (void 0).__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.bufferTime = void 0;
var Subscription_1 = __webpack_require__(43851);
var lift_1 = __webpack_require__(76189);
var OperatorSubscriber_1 = __webpack_require__(57322);
var arrRemove_1 = __webpack_require__(86889);
var async_1 = __webpack_require__(83970);
var args_1 = __webpack_require__(3173);
var executeSchedule_1 = __webpack_require__(72854);
function bufferTime(bufferTimeSpan) {
    var _a, _b;
    var otherArgs = [];
    for(var _i = 1; _i < arguments.length; _i++){
        otherArgs[_i - 1] = arguments[_i];
    }
    var scheduler = (_a = args_1.popScheduler(otherArgs)) !== null && _a !== void 0 ? _a : async_1.asyncScheduler;
    var bufferCreationInterval = (_b = otherArgs[0]) !== null && _b !== void 0 ? _b : null;
    var maxBufferSize = otherArgs[1] || Infinity;
    return lift_1.operate(function(source, subscriber) {
        var bufferRecords = [];
        var restartOnEmit = false;
        var emit = function(record) {
            var buffer = record.buffer, subs = record.subs;
            subs.unsubscribe();
            arrRemove_1.arrRemove(bufferRecords, record);
            subscriber.next(buffer);
            restartOnEmit && startBuffer();
        };
        var startBuffer = function() {
            if (bufferRecords) {
                var subs = new Subscription_1.Subscription();
                subscriber.add(subs);
                var buffer = [];
                var record_1 = {
                    buffer: buffer,
                    subs: subs
                };
                bufferRecords.push(record_1);
                executeSchedule_1.executeSchedule(subs, scheduler, function() {
                    return emit(record_1);
                }, bufferTimeSpan);
            }
        };
        if (bufferCreationInterval !== null && bufferCreationInterval >= 0) {
            executeSchedule_1.executeSchedule(subscriber, scheduler, startBuffer, bufferCreationInterval, true);
        } else {
            restartOnEmit = true;
        }
        startBuffer();
        var bufferTimeSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            var e_1, _a;
            var recordsCopy = bufferRecords.slice();
            try {
                for(var recordsCopy_1 = __values(recordsCopy), recordsCopy_1_1 = recordsCopy_1.next(); !recordsCopy_1_1.done; recordsCopy_1_1 = recordsCopy_1.next()){
                    var record = recordsCopy_1_1.value;
                    var buffer = record.buffer;
                    buffer.push(value);
                    maxBufferSize <= buffer.length && emit(record);
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (recordsCopy_1_1 && !recordsCopy_1_1.done && (_a = recordsCopy_1.return)) _a.call(recordsCopy_1);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
        }, function() {
            while(bufferRecords === null || bufferRecords === void 0 ? void 0 : bufferRecords.length){
                subscriber.next(bufferRecords.shift().buffer);
            }
            bufferTimeSubscriber === null || bufferTimeSubscriber === void 0 ? void 0 : bufferTimeSubscriber.unsubscribe();
            subscriber.complete();
            subscriber.unsubscribe();
        }, undefined, function() {
            return bufferRecords = null;
        });
        source.subscribe(bufferTimeSubscriber);
    });
}
exports.bufferTime = bufferTime; //# sourceMappingURL=bufferTime.js.map


/***/ }),

/***/ 40552:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var __values = (void 0) && (void 0).__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.bufferToggle = void 0;
var Subscription_1 = __webpack_require__(43851);
var lift_1 = __webpack_require__(76189);
var innerFrom_1 = __webpack_require__(50711);
var OperatorSubscriber_1 = __webpack_require__(57322);
var noop_1 = __webpack_require__(81543);
var arrRemove_1 = __webpack_require__(86889);
function bufferToggle(openings, closingSelector) {
    return lift_1.operate(function(source, subscriber) {
        var buffers = [];
        innerFrom_1.innerFrom(openings).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(openValue) {
            var buffer = [];
            buffers.push(buffer);
            var closingSubscription = new Subscription_1.Subscription();
            var emitBuffer = function() {
                arrRemove_1.arrRemove(buffers, buffer);
                subscriber.next(buffer);
                closingSubscription.unsubscribe();
            };
            closingSubscription.add(innerFrom_1.innerFrom(closingSelector(openValue)).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, emitBuffer, noop_1.noop)));
        }, noop_1.noop));
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            var e_1, _a;
            try {
                for(var buffers_1 = __values(buffers), buffers_1_1 = buffers_1.next(); !buffers_1_1.done; buffers_1_1 = buffers_1.next()){
                    var buffer = buffers_1_1.value;
                    buffer.push(value);
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (buffers_1_1 && !buffers_1_1.done && (_a = buffers_1.return)) _a.call(buffers_1);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
        }, function() {
            while(buffers.length > 0){
                subscriber.next(buffers.shift());
            }
            subscriber.complete();
        }));
    });
}
exports.bufferToggle = bufferToggle; //# sourceMappingURL=bufferToggle.js.map


/***/ }),

/***/ 23879:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.bufferWhen = void 0;
var lift_1 = __webpack_require__(76189);
var noop_1 = __webpack_require__(81543);
var OperatorSubscriber_1 = __webpack_require__(57322);
var innerFrom_1 = __webpack_require__(50711);
function bufferWhen(closingSelector) {
    return lift_1.operate(function(source, subscriber) {
        var buffer = null;
        var closingSubscriber = null;
        var openBuffer = function() {
            closingSubscriber === null || closingSubscriber === void 0 ? void 0 : closingSubscriber.unsubscribe();
            var b = buffer;
            buffer = [];
            b && subscriber.next(b);
            innerFrom_1.innerFrom(closingSelector()).subscribe(closingSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, openBuffer, noop_1.noop));
        };
        openBuffer();
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            return buffer === null || buffer === void 0 ? void 0 : buffer.push(value);
        }, function() {
            buffer && subscriber.next(buffer);
            subscriber.complete();
        }, undefined, function() {
            return buffer = closingSubscriber = null;
        }));
    });
}
exports.bufferWhen = bufferWhen; //# sourceMappingURL=bufferWhen.js.map


/***/ }),

/***/ 2473:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.catchError = void 0;
var innerFrom_1 = __webpack_require__(50711);
var OperatorSubscriber_1 = __webpack_require__(57322);
var lift_1 = __webpack_require__(76189);
function catchError(selector) {
    return lift_1.operate(function(source, subscriber) {
        var innerSub = null;
        var syncUnsub = false;
        var handledResult;
        innerSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, undefined, undefined, function(err) {
            handledResult = innerFrom_1.innerFrom(selector(err, catchError(selector)(source)));
            if (innerSub) {
                innerSub.unsubscribe();
                innerSub = null;
                handledResult.subscribe(subscriber);
            } else {
                syncUnsub = true;
            }
        }));
        if (syncUnsub) {
            innerSub.unsubscribe();
            innerSub = null;
            handledResult.subscribe(subscriber);
        }
    });
}
exports.catchError = catchError; //# sourceMappingURL=catchError.js.map


/***/ }),

/***/ 56641:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.combineAll = void 0;
var combineLatestAll_1 = __webpack_require__(76989);
exports.combineAll = combineLatestAll_1.combineLatestAll; //# sourceMappingURL=combineAll.js.map


/***/ }),

/***/ 80398:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var __read = (void 0) && (void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = (void 0) && (void 0).__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.combineLatest = void 0;
var combineLatest_1 = __webpack_require__(93351);
var lift_1 = __webpack_require__(76189);
var argsOrArgArray_1 = __webpack_require__(1643);
var mapOneOrManyArgs_1 = __webpack_require__(69661);
var pipe_1 = __webpack_require__(9492);
var args_1 = __webpack_require__(3173);
function combineLatest() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++){
        args[_i] = arguments[_i];
    }
    var resultSelector = args_1.popResultSelector(args);
    return resultSelector ? pipe_1.pipe(combineLatest.apply(void 0, __spreadArray([], __read(args))), mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector)) : lift_1.operate(function(source, subscriber) {
        combineLatest_1.combineLatestInit(__spreadArray([
            source
        ], __read(argsOrArgArray_1.argsOrArgArray(args))))(subscriber);
    });
}
exports.combineLatest = combineLatest; //# sourceMappingURL=combineLatest.js.map


/***/ }),

/***/ 76989:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.combineLatestAll = void 0;
var combineLatest_1 = __webpack_require__(93351);
var joinAllInternals_1 = __webpack_require__(48215);
function combineLatestAll(project) {
    return joinAllInternals_1.joinAllInternals(combineLatest_1.combineLatest, project);
}
exports.combineLatestAll = combineLatestAll; //# sourceMappingURL=combineLatestAll.js.map


/***/ }),

/***/ 84558:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var __read = (void 0) && (void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = (void 0) && (void 0).__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.combineLatestWith = void 0;
var combineLatest_1 = __webpack_require__(80398);
function combineLatestWith() {
    var otherSources = [];
    for(var _i = 0; _i < arguments.length; _i++){
        otherSources[_i] = arguments[_i];
    }
    return combineLatest_1.combineLatest.apply(void 0, __spreadArray([], __read(otherSources)));
}
exports.combineLatestWith = combineLatestWith; //# sourceMappingURL=combineLatestWith.js.map


/***/ }),

/***/ 992:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var __read = (void 0) && (void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = (void 0) && (void 0).__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.concat = void 0;
var lift_1 = __webpack_require__(76189);
var concatAll_1 = __webpack_require__(90319);
var args_1 = __webpack_require__(3173);
var from_1 = __webpack_require__(51400);
function concat() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++){
        args[_i] = arguments[_i];
    }
    var scheduler = args_1.popScheduler(args);
    return lift_1.operate(function(source, subscriber) {
        concatAll_1.concatAll()(from_1.from(__spreadArray([
            source
        ], __read(args)), scheduler)).subscribe(subscriber);
    });
}
exports.concat = concat; //# sourceMappingURL=concat.js.map


/***/ }),

/***/ 90319:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.concatAll = void 0;
var mergeAll_1 = __webpack_require__(63770);
function concatAll() {
    return mergeAll_1.mergeAll(1);
}
exports.concatAll = concatAll; //# sourceMappingURL=concatAll.js.map


/***/ }),

/***/ 55678:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.concatMap = void 0;
var mergeMap_1 = __webpack_require__(49891);
var isFunction_1 = __webpack_require__(90422);
function concatMap(project, resultSelector) {
    return isFunction_1.isFunction(resultSelector) ? mergeMap_1.mergeMap(project, resultSelector, 1) : mergeMap_1.mergeMap(project, 1);
}
exports.concatMap = concatMap; //# sourceMappingURL=concatMap.js.map


/***/ }),

/***/ 64591:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.concatMapTo = void 0;
var concatMap_1 = __webpack_require__(55678);
var isFunction_1 = __webpack_require__(90422);
function concatMapTo(innerObservable, resultSelector) {
    return isFunction_1.isFunction(resultSelector) ? concatMap_1.concatMap(function() {
        return innerObservable;
    }, resultSelector) : concatMap_1.concatMap(function() {
        return innerObservable;
    });
}
exports.concatMapTo = concatMapTo; //# sourceMappingURL=concatMapTo.js.map


/***/ }),

/***/ 58246:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var __read = (void 0) && (void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = (void 0) && (void 0).__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.concatWith = void 0;
var concat_1 = __webpack_require__(992);
function concatWith() {
    var otherSources = [];
    for(var _i = 0; _i < arguments.length; _i++){
        otherSources[_i] = arguments[_i];
    }
    return concat_1.concat.apply(void 0, __spreadArray([], __read(otherSources)));
}
exports.concatWith = concatWith; //# sourceMappingURL=concatWith.js.map


/***/ }),

/***/ 77417:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.connect = void 0;
var Subject_1 = __webpack_require__(20833);
var innerFrom_1 = __webpack_require__(50711);
var lift_1 = __webpack_require__(76189);
var fromSubscribable_1 = __webpack_require__(36459);
var DEFAULT_CONFIG = {
    connector: function() {
        return new Subject_1.Subject();
    }
};
function connect(selector, config) {
    if (config === void 0) {
        config = DEFAULT_CONFIG;
    }
    var connector = config.connector;
    return lift_1.operate(function(source, subscriber) {
        var subject = connector();
        innerFrom_1.innerFrom(selector(fromSubscribable_1.fromSubscribable(subject))).subscribe(subscriber);
        subscriber.add(source.subscribe(subject));
    });
}
exports.connect = connect; //# sourceMappingURL=connect.js.map


/***/ }),

/***/ 1279:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.count = void 0;
var reduce_1 = __webpack_require__(5744);
function count(predicate) {
    return reduce_1.reduce(function(total, value, i) {
        return !predicate || predicate(value, i) ? total + 1 : total;
    }, 0);
}
exports.count = count; //# sourceMappingURL=count.js.map


/***/ }),

/***/ 94560:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.debounce = void 0;
var lift_1 = __webpack_require__(76189);
var noop_1 = __webpack_require__(81543);
var OperatorSubscriber_1 = __webpack_require__(57322);
var innerFrom_1 = __webpack_require__(50711);
function debounce(durationSelector) {
    return lift_1.operate(function(source, subscriber) {
        var hasValue = false;
        var lastValue = null;
        var durationSubscriber = null;
        var emit = function() {
            durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
            durationSubscriber = null;
            if (hasValue) {
                hasValue = false;
                var value = lastValue;
                lastValue = null;
                subscriber.next(value);
            }
        };
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
            hasValue = true;
            lastValue = value;
            durationSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, emit, noop_1.noop);
            innerFrom_1.innerFrom(durationSelector(value)).subscribe(durationSubscriber);
        }, function() {
            emit();
            subscriber.complete();
        }, undefined, function() {
            lastValue = durationSubscriber = null;
        }));
    });
}
exports.debounce = debounce; //# sourceMappingURL=debounce.js.map


/***/ }),

/***/ 4518:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.debounceTime = void 0;
var async_1 = __webpack_require__(83970);
var lift_1 = __webpack_require__(76189);
var OperatorSubscriber_1 = __webpack_require__(57322);
function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) {
        scheduler = async_1.asyncScheduler;
    }
    return lift_1.operate(function(source, subscriber) {
        var activeTask = null;
        var lastValue = null;
        var lastTime = null;
        var emit = function() {
            if (activeTask) {
                activeTask.unsubscribe();
                activeTask = null;
                var value = lastValue;
                lastValue = null;
                subscriber.next(value);
            }
        };
        function emitWhenIdle() {
            var targetTime = lastTime + dueTime;
            var now = scheduler.now();
            if (now < targetTime) {
                activeTask = this.schedule(undefined, targetTime - now);
                subscriber.add(activeTask);
                return;
            }
            emit();
        }
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            lastValue = value;
            lastTime = scheduler.now();
            if (!activeTask) {
                activeTask = scheduler.schedule(emitWhenIdle, dueTime);
                subscriber.add(activeTask);
            }
        }, function() {
            emit();
            subscriber.complete();
        }, undefined, function() {
            lastValue = activeTask = null;
        }));
    });
}
exports.debounceTime = debounceTime; //# sourceMappingURL=debounceTime.js.map


/***/ }),

/***/ 9836:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.defaultIfEmpty = void 0;
var lift_1 = __webpack_require__(76189);
var OperatorSubscriber_1 = __webpack_require__(57322);
function defaultIfEmpty(defaultValue) {
    return lift_1.operate(function(source, subscriber) {
        var hasValue = false;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            hasValue = true;
            subscriber.next(value);
        }, function() {
            if (!hasValue) {
                subscriber.next(defaultValue);
            }
            subscriber.complete();
        }));
    });
}
exports.defaultIfEmpty = defaultIfEmpty; //# sourceMappingURL=defaultIfEmpty.js.map


/***/ }),

/***/ 19162:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.delay = void 0;
var async_1 = __webpack_require__(83970);
var delayWhen_1 = __webpack_require__(47108);
var timer_1 = __webpack_require__(33158);
function delay(due, scheduler) {
    if (scheduler === void 0) {
        scheduler = async_1.asyncScheduler;
    }
    var duration = timer_1.timer(due, scheduler);
    return delayWhen_1.delayWhen(function() {
        return duration;
    });
}
exports.delay = delay; //# sourceMappingURL=delay.js.map


/***/ }),

/***/ 47108:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.delayWhen = void 0;
var concat_1 = __webpack_require__(48545);
var take_1 = __webpack_require__(96920);
var ignoreElements_1 = __webpack_require__(24764);
var mapTo_1 = __webpack_require__(36214);
var mergeMap_1 = __webpack_require__(49891);
var innerFrom_1 = __webpack_require__(50711);
function delayWhen(delayDurationSelector, subscriptionDelay) {
    if (subscriptionDelay) {
        return function(source) {
            return concat_1.concat(subscriptionDelay.pipe(take_1.take(1), ignoreElements_1.ignoreElements()), source.pipe(delayWhen(delayDurationSelector)));
        };
    }
    return mergeMap_1.mergeMap(function(value, index) {
        return innerFrom_1.innerFrom(delayDurationSelector(value, index)).pipe(take_1.take(1), mapTo_1.mapTo(value));
    });
}
exports.delayWhen = delayWhen; //# sourceMappingURL=delayWhen.js.map


/***/ }),

/***/ 14510:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.dematerialize = void 0;
var Notification_1 = __webpack_require__(33836);
var lift_1 = __webpack_require__(76189);
var OperatorSubscriber_1 = __webpack_require__(57322);
function dematerialize() {
    return lift_1.operate(function(source, subscriber) {
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(notification) {
            return Notification_1.observeNotification(notification, subscriber);
        }));
    });
}
exports.dematerialize = dematerialize; //# sourceMappingURL=dematerialize.js.map


/***/ }),

/***/ 84338:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.distinct = void 0;
var lift_1 = __webpack_require__(76189);
var OperatorSubscriber_1 = __webpack_require__(57322);
var noop_1 = __webpack_require__(81543);
var innerFrom_1 = __webpack_require__(50711);
function distinct(keySelector, flushes) {
    return lift_1.operate(function(source, subscriber) {
        var distinctKeys = new Set();
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            var key = keySelector ? keySelector(value) : value;
            if (!distinctKeys.has(key)) {
                distinctKeys.add(key);
                subscriber.next(value);
            }
        }));
        flushes && innerFrom_1.innerFrom(flushes).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
            return distinctKeys.clear();
        }, noop_1.noop));
    });
}
exports.distinct = distinct; //# sourceMappingURL=distinct.js.map


/***/ }),

/***/ 3537:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.distinctUntilChanged = void 0;
var identity_1 = __webpack_require__(13893);
var lift_1 = __webpack_require__(76189);
var OperatorSubscriber_1 = __webpack_require__(57322);
function distinctUntilChanged(comparator, keySelector) {
    if (keySelector === void 0) {
        keySelector = identity_1.identity;
    }
    comparator = comparator !== null && comparator !== void 0 ? comparator : defaultCompare;
    return lift_1.operate(function(source, subscriber) {
        var previousKey;
        var first = true;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            var currentKey = keySelector(value);
            if (first || !comparator(previousKey, currentKey)) {
                first = false;
                previousKey = currentKey;
                subscriber.next(value);
            }
        }));
    });
}
exports.distinctUntilChanged = distinctUntilChanged;
function defaultCompare(a, b) {
    return a === b;
} //# sourceMappingURL=distinctUntilChanged.js.map


/***/ }),

/***/ 82505:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.distinctUntilKeyChanged = void 0;
var distinctUntilChanged_1 = __webpack_require__(3537);
function distinctUntilKeyChanged(key, compare) {
    return distinctUntilChanged_1.distinctUntilChanged(function(x, y) {
        return compare ? compare(x[key], y[key]) : x[key] === y[key];
    });
}
exports.distinctUntilKeyChanged = distinctUntilKeyChanged; //# sourceMappingURL=distinctUntilKeyChanged.js.map


/***/ }),

/***/ 90881:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.elementAt = void 0;
var ArgumentOutOfRangeError_1 = __webpack_require__(15092);
var filter_1 = __webpack_require__(83099);
var throwIfEmpty_1 = __webpack_require__(54374);
var defaultIfEmpty_1 = __webpack_require__(9836);
var take_1 = __webpack_require__(96920);
function elementAt(index, defaultValue) {
    if (index < 0) {
        throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError();
    }
    var hasDefaultValue = arguments.length >= 2;
    return function(source) {
        return source.pipe(filter_1.filter(function(v, i) {
            return i === index;
        }), take_1.take(1), hasDefaultValue ? defaultIfEmpty_1.defaultIfEmpty(defaultValue) : throwIfEmpty_1.throwIfEmpty(function() {
            return new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError();
        }));
    };
}
exports.elementAt = elementAt; //# sourceMappingURL=elementAt.js.map


/***/ }),

/***/ 40277:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var __read = (void 0) && (void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = (void 0) && (void 0).__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.endWith = void 0;
var concat_1 = __webpack_require__(48545);
var of_1 = __webpack_require__(42353);
function endWith() {
    var values = [];
    for(var _i = 0; _i < arguments.length; _i++){
        values[_i] = arguments[_i];
    }
    return function(source) {
        return concat_1.concat(source, of_1.of.apply(void 0, __spreadArray([], __read(values))));
    };
}
exports.endWith = endWith; //# sourceMappingURL=endWith.js.map


/***/ }),

/***/ 81498:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.every = void 0;
var lift_1 = __webpack_require__(76189);
var OperatorSubscriber_1 = __webpack_require__(57322);
function every(predicate, thisArg) {
    return lift_1.operate(function(source, subscriber) {
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            if (!predicate.call(thisArg, value, index++, source)) {
                subscriber.next(false);
                subscriber.complete();
            }
        }, function() {
            subscriber.next(true);
            subscriber.complete();
        }));
    });
}
exports.every = every; //# sourceMappingURL=every.js.map


/***/ }),

/***/ 32277:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.exhaust = void 0;
var exhaustAll_1 = __webpack_require__(22573);
exports.exhaust = exhaustAll_1.exhaustAll; //# sourceMappingURL=exhaust.js.map


/***/ }),

/***/ 22573:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.exhaustAll = void 0;
var exhaustMap_1 = __webpack_require__(18930);
var identity_1 = __webpack_require__(13893);
function exhaustAll() {
    return exhaustMap_1.exhaustMap(identity_1.identity);
}
exports.exhaustAll = exhaustAll; //# sourceMappingURL=exhaustAll.js.map


/***/ }),

/***/ 18930:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.exhaustMap = void 0;
var map_1 = __webpack_require__(56414);
var innerFrom_1 = __webpack_require__(50711);
var lift_1 = __webpack_require__(76189);
var OperatorSubscriber_1 = __webpack_require__(57322);
function exhaustMap(project, resultSelector) {
    if (resultSelector) {
        return function(source) {
            return source.pipe(exhaustMap(function(a, i) {
                return innerFrom_1.innerFrom(project(a, i)).pipe(map_1.map(function(b, ii) {
                    return resultSelector(a, b, i, ii);
                }));
            }));
        };
    }
    return lift_1.operate(function(source, subscriber) {
        var index = 0;
        var innerSub = null;
        var isComplete = false;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(outerValue) {
            if (!innerSub) {
                innerSub = OperatorSubscriber_1.createOperatorSubscriber(subscriber, undefined, function() {
                    innerSub = null;
                    isComplete && subscriber.complete();
                });
                innerFrom_1.innerFrom(project(outerValue, index++)).subscribe(innerSub);
            }
        }, function() {
            isComplete = true;
            !innerSub && subscriber.complete();
        }));
    });
}
exports.exhaustMap = exhaustMap; //# sourceMappingURL=exhaustMap.js.map


/***/ }),

/***/ 19901:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.expand = void 0;
var lift_1 = __webpack_require__(76189);
var mergeInternals_1 = __webpack_require__(88024);
function expand(project, concurrent, scheduler) {
    if (concurrent === void 0) {
        concurrent = Infinity;
    }
    concurrent = (concurrent || 0) < 1 ? Infinity : concurrent;
    return lift_1.operate(function(source, subscriber) {
        return mergeInternals_1.mergeInternals(source, subscriber, project, concurrent, undefined, true, scheduler);
    });
}
exports.expand = expand; //# sourceMappingURL=expand.js.map


/***/ }),

/***/ 83099:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.filter = void 0;
var lift_1 = __webpack_require__(76189);
var OperatorSubscriber_1 = __webpack_require__(57322);
function filter(predicate, thisArg) {
    return lift_1.operate(function(source, subscriber) {
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            return predicate.call(thisArg, value, index++) && subscriber.next(value);
        }));
    });
}
exports.filter = filter; //# sourceMappingURL=filter.js.map


/***/ }),

/***/ 87409:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.finalize = void 0;
var lift_1 = __webpack_require__(76189);
function finalize(callback) {
    return lift_1.operate(function(source, subscriber) {
        try {
            source.subscribe(subscriber);
        } finally{
            subscriber.add(callback);
        }
    });
}
exports.finalize = finalize; //# sourceMappingURL=finalize.js.map


/***/ }),

/***/ 85395:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.createFind = exports.find = void 0;
var lift_1 = __webpack_require__(76189);
var OperatorSubscriber_1 = __webpack_require__(57322);
function find(predicate, thisArg) {
    return lift_1.operate(createFind(predicate, thisArg, "value"));
}
exports.find = find;
function createFind(predicate, thisArg, emit) {
    var findIndex = emit === "index";
    return function(source, subscriber) {
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            var i = index++;
            if (predicate.call(thisArg, value, i, source)) {
                subscriber.next(findIndex ? i : value);
                subscriber.complete();
            }
        }, function() {
            subscriber.next(findIndex ? -1 : undefined);
            subscriber.complete();
        }));
    };
}
exports.createFind = createFind; //# sourceMappingURL=find.js.map


/***/ }),

/***/ 42862:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.findIndex = void 0;
var lift_1 = __webpack_require__(76189);
var find_1 = __webpack_require__(85395);
function findIndex(predicate, thisArg) {
    return lift_1.operate(find_1.createFind(predicate, thisArg, "index"));
}
exports.findIndex = findIndex; //# sourceMappingURL=findIndex.js.map


/***/ }),

/***/ 248:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.first = void 0;
var EmptyError_1 = __webpack_require__(10855);
var filter_1 = __webpack_require__(83099);
var take_1 = __webpack_require__(96920);
var defaultIfEmpty_1 = __webpack_require__(9836);
var throwIfEmpty_1 = __webpack_require__(54374);
var identity_1 = __webpack_require__(13893);
function first(predicate, defaultValue) {
    var hasDefaultValue = arguments.length >= 2;
    return function(source) {
        return source.pipe(predicate ? filter_1.filter(function(v, i) {
            return predicate(v, i, source);
        }) : identity_1.identity, take_1.take(1), hasDefaultValue ? defaultIfEmpty_1.defaultIfEmpty(defaultValue) : throwIfEmpty_1.throwIfEmpty(function() {
            return new EmptyError_1.EmptyError();
        }));
    };
}
exports.first = first; //# sourceMappingURL=first.js.map


/***/ }),

/***/ 95293:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.flatMap = void 0;
var mergeMap_1 = __webpack_require__(49891);
exports.flatMap = mergeMap_1.mergeMap; //# sourceMappingURL=flatMap.js.map


/***/ }),

/***/ 94536:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.groupBy = void 0;
var Observable_1 = __webpack_require__(89043);
var innerFrom_1 = __webpack_require__(50711);
var Subject_1 = __webpack_require__(20833);
var lift_1 = __webpack_require__(76189);
var OperatorSubscriber_1 = __webpack_require__(57322);
function groupBy(keySelector, elementOrOptions, duration, connector) {
    return lift_1.operate(function(source, subscriber) {
        var element;
        if (!elementOrOptions || typeof elementOrOptions === "function") {
            element = elementOrOptions;
        } else {
            duration = elementOrOptions.duration, element = elementOrOptions.element, connector = elementOrOptions.connector;
        }
        var groups = new Map();
        var notify = function(cb) {
            groups.forEach(cb);
            cb(subscriber);
        };
        var handleError = function(err) {
            return notify(function(consumer) {
                return consumer.error(err);
            });
        };
        var activeGroups = 0;
        var teardownAttempted = false;
        var groupBySourceSubscriber = new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            try {
                var key_1 = keySelector(value);
                var group_1 = groups.get(key_1);
                if (!group_1) {
                    groups.set(key_1, group_1 = connector ? connector() : new Subject_1.Subject());
                    var grouped = createGroupedObservable(key_1, group_1);
                    subscriber.next(grouped);
                    if (duration) {
                        var durationSubscriber_1 = OperatorSubscriber_1.createOperatorSubscriber(group_1, function() {
                            group_1.complete();
                            durationSubscriber_1 === null || durationSubscriber_1 === void 0 ? void 0 : durationSubscriber_1.unsubscribe();
                        }, undefined, undefined, function() {
                            return groups.delete(key_1);
                        });
                        groupBySourceSubscriber.add(innerFrom_1.innerFrom(duration(grouped)).subscribe(durationSubscriber_1));
                    }
                }
                group_1.next(element ? element(value) : value);
            } catch (err) {
                handleError(err);
            }
        }, function() {
            return notify(function(consumer) {
                return consumer.complete();
            });
        }, handleError, function() {
            return groups.clear();
        }, function() {
            teardownAttempted = true;
            return activeGroups === 0;
        });
        source.subscribe(groupBySourceSubscriber);
        function createGroupedObservable(key, groupSubject) {
            var result = new Observable_1.Observable(function(groupSubscriber) {
                activeGroups++;
                var innerSub = groupSubject.subscribe(groupSubscriber);
                return function() {
                    innerSub.unsubscribe();
                    --activeGroups === 0 && teardownAttempted && groupBySourceSubscriber.unsubscribe();
                };
            });
            result.key = key;
            return result;
        }
    });
}
exports.groupBy = groupBy; //# sourceMappingURL=groupBy.js.map


/***/ }),

/***/ 24764:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.ignoreElements = void 0;
var lift_1 = __webpack_require__(76189);
var OperatorSubscriber_1 = __webpack_require__(57322);
var noop_1 = __webpack_require__(81543);
function ignoreElements() {
    return lift_1.operate(function(source, subscriber) {
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, noop_1.noop));
    });
}
exports.ignoreElements = ignoreElements; //# sourceMappingURL=ignoreElements.js.map


/***/ }),

/***/ 48859:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isEmpty = void 0;
var lift_1 = __webpack_require__(76189);
var OperatorSubscriber_1 = __webpack_require__(57322);
function isEmpty() {
    return lift_1.operate(function(source, subscriber) {
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
            subscriber.next(false);
            subscriber.complete();
        }, function() {
            subscriber.next(true);
            subscriber.complete();
        }));
    });
}
exports.isEmpty = isEmpty; //# sourceMappingURL=isEmpty.js.map


/***/ }),

/***/ 48215:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.joinAllInternals = void 0;
var identity_1 = __webpack_require__(13893);
var mapOneOrManyArgs_1 = __webpack_require__(69661);
var pipe_1 = __webpack_require__(9492);
var mergeMap_1 = __webpack_require__(49891);
var toArray_1 = __webpack_require__(81740);
function joinAllInternals(joinFn, project) {
    return pipe_1.pipe(toArray_1.toArray(), mergeMap_1.mergeMap(function(sources) {
        return joinFn(sources);
    }), project ? mapOneOrManyArgs_1.mapOneOrManyArgs(project) : identity_1.identity);
}
exports.joinAllInternals = joinAllInternals; //# sourceMappingURL=joinAllInternals.js.map


/***/ }),

/***/ 94105:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.last = void 0;
var EmptyError_1 = __webpack_require__(10855);
var filter_1 = __webpack_require__(83099);
var takeLast_1 = __webpack_require__(21030);
var throwIfEmpty_1 = __webpack_require__(54374);
var defaultIfEmpty_1 = __webpack_require__(9836);
var identity_1 = __webpack_require__(13893);
function last(predicate, defaultValue) {
    var hasDefaultValue = arguments.length >= 2;
    return function(source) {
        return source.pipe(predicate ? filter_1.filter(function(v, i) {
            return predicate(v, i, source);
        }) : identity_1.identity, takeLast_1.takeLast(1), hasDefaultValue ? defaultIfEmpty_1.defaultIfEmpty(defaultValue) : throwIfEmpty_1.throwIfEmpty(function() {
            return new EmptyError_1.EmptyError();
        }));
    };
}
exports.last = last; //# sourceMappingURL=last.js.map


/***/ }),

/***/ 56414:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.map = void 0;
var lift_1 = __webpack_require__(76189);
var OperatorSubscriber_1 = __webpack_require__(57322);
function map(project, thisArg) {
    return lift_1.operate(function(source, subscriber) {
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            subscriber.next(project.call(thisArg, value, index++));
        }));
    });
}
exports.map = map; //# sourceMappingURL=map.js.map


/***/ }),

/***/ 36214:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.mapTo = void 0;
var map_1 = __webpack_require__(56414);
function mapTo(value) {
    return map_1.map(function() {
        return value;
    });
}
exports.mapTo = mapTo; //# sourceMappingURL=mapTo.js.map


/***/ }),

/***/ 98213:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.materialize = void 0;
var Notification_1 = __webpack_require__(33836);
var lift_1 = __webpack_require__(76189);
var OperatorSubscriber_1 = __webpack_require__(57322);
function materialize() {
    return lift_1.operate(function(source, subscriber) {
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            subscriber.next(Notification_1.Notification.createNext(value));
        }, function() {
            subscriber.next(Notification_1.Notification.createComplete());
            subscriber.complete();
        }, function(err) {
            subscriber.next(Notification_1.Notification.createError(err));
            subscriber.complete();
        }));
    });
}
exports.materialize = materialize; //# sourceMappingURL=materialize.js.map


/***/ }),

/***/ 54226:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.max = void 0;
var reduce_1 = __webpack_require__(5744);
var isFunction_1 = __webpack_require__(90422);
function max(comparer) {
    return reduce_1.reduce(isFunction_1.isFunction(comparer) ? function(x, y) {
        return comparer(x, y) > 0 ? x : y;
    } : function(x, y) {
        return x > y ? x : y;
    });
}
exports.max = max; //# sourceMappingURL=max.js.map


/***/ }),

/***/ 79004:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var __read = (void 0) && (void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = (void 0) && (void 0).__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.merge = void 0;
var lift_1 = __webpack_require__(76189);
var argsOrArgArray_1 = __webpack_require__(1643);
var mergeAll_1 = __webpack_require__(63770);
var args_1 = __webpack_require__(3173);
var from_1 = __webpack_require__(51400);
function merge() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++){
        args[_i] = arguments[_i];
    }
    var scheduler = args_1.popScheduler(args);
    var concurrent = args_1.popNumber(args, Infinity);
    args = argsOrArgArray_1.argsOrArgArray(args);
    return lift_1.operate(function(source, subscriber) {
        mergeAll_1.mergeAll(concurrent)(from_1.from(__spreadArray([
            source
        ], __read(args)), scheduler)).subscribe(subscriber);
    });
}
exports.merge = merge; //# sourceMappingURL=merge.js.map


/***/ }),

/***/ 63770:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.mergeAll = void 0;
var mergeMap_1 = __webpack_require__(49891);
var identity_1 = __webpack_require__(13893);
function mergeAll(concurrent) {
    if (concurrent === void 0) {
        concurrent = Infinity;
    }
    return mergeMap_1.mergeMap(identity_1.identity, concurrent);
}
exports.mergeAll = mergeAll; //# sourceMappingURL=mergeAll.js.map


/***/ }),

/***/ 88024:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.mergeInternals = void 0;
var innerFrom_1 = __webpack_require__(50711);
var executeSchedule_1 = __webpack_require__(72854);
var OperatorSubscriber_1 = __webpack_require__(57322);
function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalFinalizer) {
    var buffer = [];
    var active = 0;
    var index = 0;
    var isComplete = false;
    var checkComplete = function() {
        if (isComplete && !buffer.length && !active) {
            subscriber.complete();
        }
    };
    var outerNext = function(value) {
        return active < concurrent ? doInnerSub(value) : buffer.push(value);
    };
    var doInnerSub = function(value) {
        expand && subscriber.next(value);
        active++;
        var innerComplete = false;
        innerFrom_1.innerFrom(project(value, index++)).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(innerValue) {
            onBeforeNext === null || onBeforeNext === void 0 ? void 0 : onBeforeNext(innerValue);
            if (expand) {
                outerNext(innerValue);
            } else {
                subscriber.next(innerValue);
            }
        }, function() {
            innerComplete = true;
        }, undefined, function() {
            if (innerComplete) {
                try {
                    active--;
                    var _loop_1 = function() {
                        var bufferedValue = buffer.shift();
                        if (innerSubScheduler) {
                            executeSchedule_1.executeSchedule(subscriber, innerSubScheduler, function() {
                                return doInnerSub(bufferedValue);
                            });
                        } else {
                            doInnerSub(bufferedValue);
                        }
                    };
                    while(buffer.length && active < concurrent){
                        _loop_1();
                    }
                    checkComplete();
                } catch (err) {
                    subscriber.error(err);
                }
            }
        }));
    };
    source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, outerNext, function() {
        isComplete = true;
        checkComplete();
    }));
    return function() {
        additionalFinalizer === null || additionalFinalizer === void 0 ? void 0 : additionalFinalizer();
    };
}
exports.mergeInternals = mergeInternals; //# sourceMappingURL=mergeInternals.js.map


/***/ }),

/***/ 49891:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.mergeMap = void 0;
var map_1 = __webpack_require__(56414);
var innerFrom_1 = __webpack_require__(50711);
var lift_1 = __webpack_require__(76189);
var mergeInternals_1 = __webpack_require__(88024);
var isFunction_1 = __webpack_require__(90422);
function mergeMap(project, resultSelector, concurrent) {
    if (concurrent === void 0) {
        concurrent = Infinity;
    }
    if (isFunction_1.isFunction(resultSelector)) {
        return mergeMap(function(a, i) {
            return map_1.map(function(b, ii) {
                return resultSelector(a, b, i, ii);
            })(innerFrom_1.innerFrom(project(a, i)));
        }, concurrent);
    } else if (typeof resultSelector === "number") {
        concurrent = resultSelector;
    }
    return lift_1.operate(function(source, subscriber) {
        return mergeInternals_1.mergeInternals(source, subscriber, project, concurrent);
    });
}
exports.mergeMap = mergeMap; //# sourceMappingURL=mergeMap.js.map


/***/ }),

/***/ 66578:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.mergeMapTo = void 0;
var mergeMap_1 = __webpack_require__(49891);
var isFunction_1 = __webpack_require__(90422);
function mergeMapTo(innerObservable, resultSelector, concurrent) {
    if (concurrent === void 0) {
        concurrent = Infinity;
    }
    if (isFunction_1.isFunction(resultSelector)) {
        return mergeMap_1.mergeMap(function() {
            return innerObservable;
        }, resultSelector, concurrent);
    }
    if (typeof resultSelector === "number") {
        concurrent = resultSelector;
    }
    return mergeMap_1.mergeMap(function() {
        return innerObservable;
    }, concurrent);
}
exports.mergeMapTo = mergeMapTo; //# sourceMappingURL=mergeMapTo.js.map


/***/ }),

/***/ 33382:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.mergeScan = void 0;
var lift_1 = __webpack_require__(76189);
var mergeInternals_1 = __webpack_require__(88024);
function mergeScan(accumulator, seed, concurrent) {
    if (concurrent === void 0) {
        concurrent = Infinity;
    }
    return lift_1.operate(function(source, subscriber) {
        var state = seed;
        return mergeInternals_1.mergeInternals(source, subscriber, function(value, index) {
            return accumulator(state, value, index);
        }, concurrent, function(value) {
            state = value;
        }, false, undefined, function() {
            return state = null;
        });
    });
}
exports.mergeScan = mergeScan; //# sourceMappingURL=mergeScan.js.map


/***/ }),

/***/ 45046:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var __read = (void 0) && (void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = (void 0) && (void 0).__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.mergeWith = void 0;
var merge_1 = __webpack_require__(79004);
function mergeWith() {
    var otherSources = [];
    for(var _i = 0; _i < arguments.length; _i++){
        otherSources[_i] = arguments[_i];
    }
    return merge_1.merge.apply(void 0, __spreadArray([], __read(otherSources)));
}
exports.mergeWith = mergeWith; //# sourceMappingURL=mergeWith.js.map


/***/ }),

/***/ 1982:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.min = void 0;
var reduce_1 = __webpack_require__(5744);
var isFunction_1 = __webpack_require__(90422);
function min(comparer) {
    return reduce_1.reduce(isFunction_1.isFunction(comparer) ? function(x, y) {
        return comparer(x, y) < 0 ? x : y;
    } : function(x, y) {
        return x < y ? x : y;
    });
}
exports.min = min; //# sourceMappingURL=min.js.map


/***/ }),

/***/ 39965:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.multicast = void 0;
var ConnectableObservable_1 = __webpack_require__(29737);
var isFunction_1 = __webpack_require__(90422);
var connect_1 = __webpack_require__(77417);
function multicast(subjectOrSubjectFactory, selector) {
    var subjectFactory = isFunction_1.isFunction(subjectOrSubjectFactory) ? subjectOrSubjectFactory : function() {
        return subjectOrSubjectFactory;
    };
    if (isFunction_1.isFunction(selector)) {
        return connect_1.connect(selector, {
            connector: subjectFactory
        });
    }
    return function(source) {
        return new ConnectableObservable_1.ConnectableObservable(source, subjectFactory);
    };
}
exports.multicast = multicast; //# sourceMappingURL=multicast.js.map


/***/ }),

/***/ 93409:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.observeOn = void 0;
var executeSchedule_1 = __webpack_require__(72854);
var lift_1 = __webpack_require__(76189);
var OperatorSubscriber_1 = __webpack_require__(57322);
function observeOn(scheduler, delay) {
    if (delay === void 0) {
        delay = 0;
    }
    return lift_1.operate(function(source, subscriber) {
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            return executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
                return subscriber.next(value);
            }, delay);
        }, function() {
            return executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
                return subscriber.complete();
            }, delay);
        }, function(err) {
            return executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
                return subscriber.error(err);
            }, delay);
        }));
    });
}
exports.observeOn = observeOn; //# sourceMappingURL=observeOn.js.map


/***/ }),

/***/ 20290:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var __read = (void 0) && (void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = (void 0) && (void 0).__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.onErrorResumeNext = exports.onErrorResumeNextWith = void 0;
var argsOrArgArray_1 = __webpack_require__(1643);
var onErrorResumeNext_1 = __webpack_require__(63511);
function onErrorResumeNextWith() {
    var sources = [];
    for(var _i = 0; _i < arguments.length; _i++){
        sources[_i] = arguments[_i];
    }
    var nextSources = argsOrArgArray_1.argsOrArgArray(sources);
    return function(source) {
        return onErrorResumeNext_1.onErrorResumeNext.apply(void 0, __spreadArray([
            source
        ], __read(nextSources)));
    };
}
exports.onErrorResumeNextWith = onErrorResumeNextWith;
exports.onErrorResumeNext = onErrorResumeNextWith; //# sourceMappingURL=onErrorResumeNextWith.js.map


/***/ }),

/***/ 48716:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.pairwise = void 0;
var lift_1 = __webpack_require__(76189);
var OperatorSubscriber_1 = __webpack_require__(57322);
function pairwise() {
    return lift_1.operate(function(source, subscriber) {
        var prev;
        var hasPrev = false;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            var p = prev;
            prev = value;
            hasPrev && subscriber.next([
                p,
                value
            ]);
            hasPrev = true;
        }));
    });
}
exports.pairwise = pairwise; //# sourceMappingURL=pairwise.js.map


/***/ }),

/***/ 38621:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.partition = void 0;
var not_1 = __webpack_require__(88974);
var filter_1 = __webpack_require__(83099);
function partition(predicate, thisArg) {
    return function(source) {
        return [
            filter_1.filter(predicate, thisArg)(source),
            filter_1.filter(not_1.not(predicate, thisArg))(source)
        ];
    };
}
exports.partition = partition; //# sourceMappingURL=partition.js.map


/***/ }),

/***/ 666:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.pluck = void 0;
var map_1 = __webpack_require__(56414);
function pluck() {
    var properties = [];
    for(var _i = 0; _i < arguments.length; _i++){
        properties[_i] = arguments[_i];
    }
    var length = properties.length;
    if (length === 0) {
        throw new Error("list of properties cannot be empty.");
    }
    return map_1.map(function(x) {
        var currentProp = x;
        for(var i = 0; i < length; i++){
            var p = currentProp === null || currentProp === void 0 ? void 0 : currentProp[properties[i]];
            if (typeof p !== "undefined") {
                currentProp = p;
            } else {
                return undefined;
            }
        }
        return currentProp;
    });
}
exports.pluck = pluck; //# sourceMappingURL=pluck.js.map


/***/ }),

/***/ 55138:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.publish = void 0;
var Subject_1 = __webpack_require__(20833);
var multicast_1 = __webpack_require__(39965);
var connect_1 = __webpack_require__(77417);
function publish(selector) {
    return selector ? function(source) {
        return connect_1.connect(selector)(source);
    } : function(source) {
        return multicast_1.multicast(new Subject_1.Subject())(source);
    };
}
exports.publish = publish; //# sourceMappingURL=publish.js.map


/***/ }),

/***/ 81167:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.publishBehavior = void 0;
var BehaviorSubject_1 = __webpack_require__(69602);
var ConnectableObservable_1 = __webpack_require__(29737);
function publishBehavior(initialValue) {
    return function(source) {
        var subject = new BehaviorSubject_1.BehaviorSubject(initialValue);
        return new ConnectableObservable_1.ConnectableObservable(source, function() {
            return subject;
        });
    };
}
exports.publishBehavior = publishBehavior; //# sourceMappingURL=publishBehavior.js.map


/***/ }),

/***/ 54005:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.publishLast = void 0;
var AsyncSubject_1 = __webpack_require__(44820);
var ConnectableObservable_1 = __webpack_require__(29737);
function publishLast() {
    return function(source) {
        var subject = new AsyncSubject_1.AsyncSubject();
        return new ConnectableObservable_1.ConnectableObservable(source, function() {
            return subject;
        });
    };
}
exports.publishLast = publishLast; //# sourceMappingURL=publishLast.js.map


/***/ }),

/***/ 30492:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.publishReplay = void 0;
var ReplaySubject_1 = __webpack_require__(90022);
var multicast_1 = __webpack_require__(39965);
var isFunction_1 = __webpack_require__(90422);
function publishReplay(bufferSize, windowTime, selectorOrScheduler, timestampProvider) {
    if (selectorOrScheduler && !isFunction_1.isFunction(selectorOrScheduler)) {
        timestampProvider = selectorOrScheduler;
    }
    var selector = isFunction_1.isFunction(selectorOrScheduler) ? selectorOrScheduler : undefined;
    return function(source) {
        return multicast_1.multicast(new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, timestampProvider), selector)(source);
    };
}
exports.publishReplay = publishReplay; //# sourceMappingURL=publishReplay.js.map


/***/ }),

/***/ 74415:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var __read = (void 0) && (void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = (void 0) && (void 0).__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.race = void 0;
var argsOrArgArray_1 = __webpack_require__(1643);
var raceWith_1 = __webpack_require__(58405);
function race() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++){
        args[_i] = arguments[_i];
    }
    return raceWith_1.raceWith.apply(void 0, __spreadArray([], __read(argsOrArgArray_1.argsOrArgArray(args))));
}
exports.race = race; //# sourceMappingURL=race.js.map


/***/ }),

/***/ 58405:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var __read = (void 0) && (void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = (void 0) && (void 0).__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.raceWith = void 0;
var race_1 = __webpack_require__(63308);
var lift_1 = __webpack_require__(76189);
var identity_1 = __webpack_require__(13893);
function raceWith() {
    var otherSources = [];
    for(var _i = 0; _i < arguments.length; _i++){
        otherSources[_i] = arguments[_i];
    }
    return !otherSources.length ? identity_1.identity : lift_1.operate(function(source, subscriber) {
        race_1.raceInit(__spreadArray([
            source
        ], __read(otherSources)))(subscriber);
    });
}
exports.raceWith = raceWith; //# sourceMappingURL=raceWith.js.map


/***/ }),

/***/ 5744:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.reduce = void 0;
var scanInternals_1 = __webpack_require__(61689);
var lift_1 = __webpack_require__(76189);
function reduce(accumulator, seed) {
    return lift_1.operate(scanInternals_1.scanInternals(accumulator, seed, arguments.length >= 2, false, true));
}
exports.reduce = reduce; //# sourceMappingURL=reduce.js.map


/***/ }),

/***/ 42780:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.refCount = void 0;
var lift_1 = __webpack_require__(76189);
var OperatorSubscriber_1 = __webpack_require__(57322);
function refCount() {
    return lift_1.operate(function(source, subscriber) {
        var connection = null;
        source._refCount++;
        var refCounter = OperatorSubscriber_1.createOperatorSubscriber(subscriber, undefined, undefined, undefined, function() {
            if (!source || source._refCount <= 0 || 0 < --source._refCount) {
                connection = null;
                return;
            }
            var sharedConnection = source._connection;
            var conn = connection;
            connection = null;
            if (sharedConnection && (!conn || sharedConnection === conn)) {
                sharedConnection.unsubscribe();
            }
            subscriber.unsubscribe();
        });
        source.subscribe(refCounter);
        if (!refCounter.closed) {
            connection = source.connect();
        }
    });
}
exports.refCount = refCount; //# sourceMappingURL=refCount.js.map


/***/ }),

/***/ 18559:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.repeat = void 0;
var empty_1 = __webpack_require__(7999);
var lift_1 = __webpack_require__(76189);
var OperatorSubscriber_1 = __webpack_require__(57322);
var innerFrom_1 = __webpack_require__(50711);
var timer_1 = __webpack_require__(33158);
function repeat(countOrConfig) {
    var _a;
    var count = Infinity;
    var delay;
    if (countOrConfig != null) {
        if (typeof countOrConfig === "object") {
            _a = countOrConfig.count, count = _a === void 0 ? Infinity : _a, delay = countOrConfig.delay;
        } else {
            count = countOrConfig;
        }
    }
    return count <= 0 ? function() {
        return empty_1.EMPTY;
    } : lift_1.operate(function(source, subscriber) {
        var soFar = 0;
        var sourceSub;
        var resubscribe = function() {
            sourceSub === null || sourceSub === void 0 ? void 0 : sourceSub.unsubscribe();
            sourceSub = null;
            if (delay != null) {
                var notifier = typeof delay === "number" ? timer_1.timer(delay) : innerFrom_1.innerFrom(delay(soFar));
                var notifierSubscriber_1 = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
                    notifierSubscriber_1.unsubscribe();
                    subscribeToSource();
                });
                notifier.subscribe(notifierSubscriber_1);
            } else {
                subscribeToSource();
            }
        };
        var subscribeToSource = function() {
            var syncUnsub = false;
            sourceSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, undefined, function() {
                if (++soFar < count) {
                    if (sourceSub) {
                        resubscribe();
                    } else {
                        syncUnsub = true;
                    }
                } else {
                    subscriber.complete();
                }
            }));
            if (syncUnsub) {
                resubscribe();
            }
        };
        subscribeToSource();
    });
}
exports.repeat = repeat; //# sourceMappingURL=repeat.js.map


/***/ }),

/***/ 22882:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.repeatWhen = void 0;
var innerFrom_1 = __webpack_require__(50711);
var Subject_1 = __webpack_require__(20833);
var lift_1 = __webpack_require__(76189);
var OperatorSubscriber_1 = __webpack_require__(57322);
function repeatWhen(notifier) {
    return lift_1.operate(function(source, subscriber) {
        var innerSub;
        var syncResub = false;
        var completions$;
        var isNotifierComplete = false;
        var isMainComplete = false;
        var checkComplete = function() {
            return isMainComplete && isNotifierComplete && (subscriber.complete(), true);
        };
        var getCompletionSubject = function() {
            if (!completions$) {
                completions$ = new Subject_1.Subject();
                innerFrom_1.innerFrom(notifier(completions$)).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
                    if (innerSub) {
                        subscribeForRepeatWhen();
                    } else {
                        syncResub = true;
                    }
                }, function() {
                    isNotifierComplete = true;
                    checkComplete();
                }));
            }
            return completions$;
        };
        var subscribeForRepeatWhen = function() {
            isMainComplete = false;
            innerSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, undefined, function() {
                isMainComplete = true;
                !checkComplete() && getCompletionSubject().next();
            }));
            if (syncResub) {
                innerSub.unsubscribe();
                innerSub = null;
                syncResub = false;
                subscribeForRepeatWhen();
            }
        };
        subscribeForRepeatWhen();
    });
}
exports.repeatWhen = repeatWhen; //# sourceMappingURL=repeatWhen.js.map


/***/ }),

/***/ 28604:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.retry = void 0;
var lift_1 = __webpack_require__(76189);
var OperatorSubscriber_1 = __webpack_require__(57322);
var identity_1 = __webpack_require__(13893);
var timer_1 = __webpack_require__(33158);
var innerFrom_1 = __webpack_require__(50711);
function retry(configOrCount) {
    if (configOrCount === void 0) {
        configOrCount = Infinity;
    }
    var config;
    if (configOrCount && typeof configOrCount === "object") {
        config = configOrCount;
    } else {
        config = {
            count: configOrCount
        };
    }
    var _a = config.count, count = _a === void 0 ? Infinity : _a, delay = config.delay, _b = config.resetOnSuccess, resetOnSuccess = _b === void 0 ? false : _b;
    return count <= 0 ? identity_1.identity : lift_1.operate(function(source, subscriber) {
        var soFar = 0;
        var innerSub;
        var subscribeForRetry = function() {
            var syncUnsub = false;
            innerSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
                if (resetOnSuccess) {
                    soFar = 0;
                }
                subscriber.next(value);
            }, undefined, function(err) {
                if (soFar++ < count) {
                    var resub_1 = function() {
                        if (innerSub) {
                            innerSub.unsubscribe();
                            innerSub = null;
                            subscribeForRetry();
                        } else {
                            syncUnsub = true;
                        }
                    };
                    if (delay != null) {
                        var notifier = typeof delay === "number" ? timer_1.timer(delay) : innerFrom_1.innerFrom(delay(err, soFar));
                        var notifierSubscriber_1 = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
                            notifierSubscriber_1.unsubscribe();
                            resub_1();
                        }, function() {
                            subscriber.complete();
                        });
                        notifier.subscribe(notifierSubscriber_1);
                    } else {
                        resub_1();
                    }
                } else {
                    subscriber.error(err);
                }
            }));
            if (syncUnsub) {
                innerSub.unsubscribe();
                innerSub = null;
                subscribeForRetry();
            }
        };
        subscribeForRetry();
    });
}
exports.retry = retry; //# sourceMappingURL=retry.js.map


/***/ }),

/***/ 402:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.retryWhen = void 0;
var innerFrom_1 = __webpack_require__(50711);
var Subject_1 = __webpack_require__(20833);
var lift_1 = __webpack_require__(76189);
var OperatorSubscriber_1 = __webpack_require__(57322);
function retryWhen(notifier) {
    return lift_1.operate(function(source, subscriber) {
        var innerSub;
        var syncResub = false;
        var errors$;
        var subscribeForRetryWhen = function() {
            innerSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, undefined, undefined, function(err) {
                if (!errors$) {
                    errors$ = new Subject_1.Subject();
                    innerFrom_1.innerFrom(notifier(errors$)).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
                        return innerSub ? subscribeForRetryWhen() : syncResub = true;
                    }));
                }
                if (errors$) {
                    errors$.next(err);
                }
            }));
            if (syncResub) {
                innerSub.unsubscribe();
                innerSub = null;
                syncResub = false;
                subscribeForRetryWhen();
            }
        };
        subscribeForRetryWhen();
    });
}
exports.retryWhen = retryWhen; //# sourceMappingURL=retryWhen.js.map


/***/ }),

/***/ 9237:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.sample = void 0;
var innerFrom_1 = __webpack_require__(50711);
var lift_1 = __webpack_require__(76189);
var noop_1 = __webpack_require__(81543);
var OperatorSubscriber_1 = __webpack_require__(57322);
function sample(notifier) {
    return lift_1.operate(function(source, subscriber) {
        var hasValue = false;
        var lastValue = null;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            hasValue = true;
            lastValue = value;
        }));
        innerFrom_1.innerFrom(notifier).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
            if (hasValue) {
                hasValue = false;
                var value = lastValue;
                lastValue = null;
                subscriber.next(value);
            }
        }, noop_1.noop));
    });
}
exports.sample = sample; //# sourceMappingURL=sample.js.map


/***/ }),

/***/ 23682:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.sampleTime = void 0;
var async_1 = __webpack_require__(83970);
var sample_1 = __webpack_require__(9237);
var interval_1 = __webpack_require__(22001);
function sampleTime(period, scheduler) {
    if (scheduler === void 0) {
        scheduler = async_1.asyncScheduler;
    }
    return sample_1.sample(interval_1.interval(period, scheduler));
}
exports.sampleTime = sampleTime; //# sourceMappingURL=sampleTime.js.map


/***/ }),

/***/ 66413:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.scan = void 0;
var lift_1 = __webpack_require__(76189);
var scanInternals_1 = __webpack_require__(61689);
function scan(accumulator, seed) {
    return lift_1.operate(scanInternals_1.scanInternals(accumulator, seed, arguments.length >= 2, true));
}
exports.scan = scan; //# sourceMappingURL=scan.js.map


/***/ }),

/***/ 61689:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.scanInternals = void 0;
var OperatorSubscriber_1 = __webpack_require__(57322);
function scanInternals(accumulator, seed, hasSeed, emitOnNext, emitBeforeComplete) {
    return function(source, subscriber) {
        var hasState = hasSeed;
        var state = seed;
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            var i = index++;
            state = hasState ? accumulator(state, value, i) : (hasState = true, value);
            emitOnNext && subscriber.next(state);
        }, emitBeforeComplete && function() {
            hasState && subscriber.next(state);
            subscriber.complete();
        }));
    };
}
exports.scanInternals = scanInternals; //# sourceMappingURL=scanInternals.js.map


/***/ }),

/***/ 27045:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.sequenceEqual = void 0;
var lift_1 = __webpack_require__(76189);
var OperatorSubscriber_1 = __webpack_require__(57322);
var innerFrom_1 = __webpack_require__(50711);
function sequenceEqual(compareTo, comparator) {
    if (comparator === void 0) {
        comparator = function(a, b) {
            return a === b;
        };
    }
    return lift_1.operate(function(source, subscriber) {
        var aState = createState();
        var bState = createState();
        var emit = function(isEqual) {
            subscriber.next(isEqual);
            subscriber.complete();
        };
        var createSubscriber = function(selfState, otherState) {
            var sequenceEqualSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(a) {
                var buffer = otherState.buffer, complete = otherState.complete;
                if (buffer.length === 0) {
                    complete ? emit(false) : selfState.buffer.push(a);
                } else {
                    !comparator(a, buffer.shift()) && emit(false);
                }
            }, function() {
                selfState.complete = true;
                var complete = otherState.complete, buffer = otherState.buffer;
                complete && emit(buffer.length === 0);
                sequenceEqualSubscriber === null || sequenceEqualSubscriber === void 0 ? void 0 : sequenceEqualSubscriber.unsubscribe();
            });
            return sequenceEqualSubscriber;
        };
        source.subscribe(createSubscriber(aState, bState));
        innerFrom_1.innerFrom(compareTo).subscribe(createSubscriber(bState, aState));
    });
}
exports.sequenceEqual = sequenceEqual;
function createState() {
    return {
        buffer: [],
        complete: false
    };
} //# sourceMappingURL=sequenceEqual.js.map


/***/ }),

/***/ 92090:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var __read = (void 0) && (void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = (void 0) && (void 0).__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.share = void 0;
var innerFrom_1 = __webpack_require__(50711);
var Subject_1 = __webpack_require__(20833);
var Subscriber_1 = __webpack_require__(40057);
var lift_1 = __webpack_require__(76189);
function share(options) {
    if (options === void 0) {
        options = {};
    }
    var _a = options.connector, connector = _a === void 0 ? function() {
        return new Subject_1.Subject();
    } : _a, _b = options.resetOnError, resetOnError = _b === void 0 ? true : _b, _c = options.resetOnComplete, resetOnComplete = _c === void 0 ? true : _c, _d = options.resetOnRefCountZero, resetOnRefCountZero = _d === void 0 ? true : _d;
    return function(wrapperSource) {
        var connection;
        var resetConnection;
        var subject;
        var refCount = 0;
        var hasCompleted = false;
        var hasErrored = false;
        var cancelReset = function() {
            resetConnection === null || resetConnection === void 0 ? void 0 : resetConnection.unsubscribe();
            resetConnection = undefined;
        };
        var reset = function() {
            cancelReset();
            connection = subject = undefined;
            hasCompleted = hasErrored = false;
        };
        var resetAndUnsubscribe = function() {
            var conn = connection;
            reset();
            conn === null || conn === void 0 ? void 0 : conn.unsubscribe();
        };
        return lift_1.operate(function(source, subscriber) {
            refCount++;
            if (!hasErrored && !hasCompleted) {
                cancelReset();
            }
            var dest = subject = subject !== null && subject !== void 0 ? subject : connector();
            subscriber.add(function() {
                refCount--;
                if (refCount === 0 && !hasErrored && !hasCompleted) {
                    resetConnection = handleReset(resetAndUnsubscribe, resetOnRefCountZero);
                }
            });
            dest.subscribe(subscriber);
            if (!connection && refCount > 0) {
                connection = new Subscriber_1.SafeSubscriber({
                    next: function(value) {
                        return dest.next(value);
                    },
                    error: function(err) {
                        hasErrored = true;
                        cancelReset();
                        resetConnection = handleReset(reset, resetOnError, err);
                        dest.error(err);
                    },
                    complete: function() {
                        hasCompleted = true;
                        cancelReset();
                        resetConnection = handleReset(reset, resetOnComplete);
                        dest.complete();
                    }
                });
                innerFrom_1.innerFrom(source).subscribe(connection);
            }
        })(wrapperSource);
    };
}
exports.share = share;
function handleReset(reset, on) {
    var args = [];
    for(var _i = 2; _i < arguments.length; _i++){
        args[_i - 2] = arguments[_i];
    }
    if (on === true) {
        reset();
        return;
    }
    if (on === false) {
        return;
    }
    var onSubscriber = new Subscriber_1.SafeSubscriber({
        next: function() {
            onSubscriber.unsubscribe();
            reset();
        }
    });
    return innerFrom_1.innerFrom(on.apply(void 0, __spreadArray([], __read(args)))).subscribe(onSubscriber);
} //# sourceMappingURL=share.js.map


/***/ }),

/***/ 2316:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.shareReplay = void 0;
var ReplaySubject_1 = __webpack_require__(90022);
var share_1 = __webpack_require__(92090);
function shareReplay(configOrBufferSize, windowTime, scheduler) {
    var _a, _b, _c;
    var bufferSize;
    var refCount = false;
    if (configOrBufferSize && typeof configOrBufferSize === "object") {
        _a = configOrBufferSize.bufferSize, bufferSize = _a === void 0 ? Infinity : _a, _b = configOrBufferSize.windowTime, windowTime = _b === void 0 ? Infinity : _b, _c = configOrBufferSize.refCount, refCount = _c === void 0 ? false : _c, scheduler = configOrBufferSize.scheduler;
    } else {
        bufferSize = configOrBufferSize !== null && configOrBufferSize !== void 0 ? configOrBufferSize : Infinity;
    }
    return share_1.share({
        connector: function() {
            return new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, scheduler);
        },
        resetOnError: true,
        resetOnComplete: false,
        resetOnRefCountZero: refCount
    });
}
exports.shareReplay = shareReplay; //# sourceMappingURL=shareReplay.js.map


/***/ }),

/***/ 95678:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.single = void 0;
var EmptyError_1 = __webpack_require__(10855);
var SequenceError_1 = __webpack_require__(15750);
var NotFoundError_1 = __webpack_require__(60243);
var lift_1 = __webpack_require__(76189);
var OperatorSubscriber_1 = __webpack_require__(57322);
function single(predicate) {
    return lift_1.operate(function(source, subscriber) {
        var hasValue = false;
        var singleValue;
        var seenValue = false;
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            seenValue = true;
            if (!predicate || predicate(value, index++, source)) {
                hasValue && subscriber.error(new SequenceError_1.SequenceError("Too many matching values"));
                hasValue = true;
                singleValue = value;
            }
        }, function() {
            if (hasValue) {
                subscriber.next(singleValue);
                subscriber.complete();
            } else {
                subscriber.error(seenValue ? new NotFoundError_1.NotFoundError("No matching values") : new EmptyError_1.EmptyError());
            }
        }));
    });
}
exports.single = single; //# sourceMappingURL=single.js.map


/***/ }),

/***/ 43134:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.skip = void 0;
var filter_1 = __webpack_require__(83099);
function skip(count) {
    return filter_1.filter(function(_, index) {
        return count <= index;
    });
}
exports.skip = skip; //# sourceMappingURL=skip.js.map


/***/ }),

/***/ 50181:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.skipLast = void 0;
var identity_1 = __webpack_require__(13893);
var lift_1 = __webpack_require__(76189);
var OperatorSubscriber_1 = __webpack_require__(57322);
function skipLast(skipCount) {
    return skipCount <= 0 ? identity_1.identity : lift_1.operate(function(source, subscriber) {
        var ring = new Array(skipCount);
        var seen = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            var valueIndex = seen++;
            if (valueIndex < skipCount) {
                ring[valueIndex] = value;
            } else {
                var index = valueIndex % skipCount;
                var oldValue = ring[index];
                ring[index] = value;
                subscriber.next(oldValue);
            }
        }));
        return function() {
            ring = null;
        };
    });
}
exports.skipLast = skipLast; //# sourceMappingURL=skipLast.js.map


/***/ }),

/***/ 70913:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.skipUntil = void 0;
var lift_1 = __webpack_require__(76189);
var OperatorSubscriber_1 = __webpack_require__(57322);
var innerFrom_1 = __webpack_require__(50711);
var noop_1 = __webpack_require__(81543);
function skipUntil(notifier) {
    return lift_1.operate(function(source, subscriber) {
        var taking = false;
        var skipSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
            skipSubscriber === null || skipSubscriber === void 0 ? void 0 : skipSubscriber.unsubscribe();
            taking = true;
        }, noop_1.noop);
        innerFrom_1.innerFrom(notifier).subscribe(skipSubscriber);
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            return taking && subscriber.next(value);
        }));
    });
}
exports.skipUntil = skipUntil; //# sourceMappingURL=skipUntil.js.map


/***/ }),

/***/ 87114:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.skipWhile = void 0;
var lift_1 = __webpack_require__(76189);
var OperatorSubscriber_1 = __webpack_require__(57322);
function skipWhile(predicate) {
    return lift_1.operate(function(source, subscriber) {
        var taking = false;
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            return (taking || (taking = !predicate(value, index++))) && subscriber.next(value);
        }));
    });
}
exports.skipWhile = skipWhile; //# sourceMappingURL=skipWhile.js.map


/***/ }),

/***/ 89975:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.startWith = void 0;
var concat_1 = __webpack_require__(48545);
var args_1 = __webpack_require__(3173);
var lift_1 = __webpack_require__(76189);
function startWith() {
    var values = [];
    for(var _i = 0; _i < arguments.length; _i++){
        values[_i] = arguments[_i];
    }
    var scheduler = args_1.popScheduler(values);
    return lift_1.operate(function(source, subscriber) {
        (scheduler ? concat_1.concat(values, source, scheduler) : concat_1.concat(values, source)).subscribe(subscriber);
    });
}
exports.startWith = startWith; //# sourceMappingURL=startWith.js.map


/***/ }),

/***/ 66771:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.subscribeOn = void 0;
var lift_1 = __webpack_require__(76189);
function subscribeOn(scheduler, delay) {
    if (delay === void 0) {
        delay = 0;
    }
    return lift_1.operate(function(source, subscriber) {
        subscriber.add(scheduler.schedule(function() {
            return source.subscribe(subscriber);
        }, delay));
    });
}
exports.subscribeOn = subscribeOn; //# sourceMappingURL=subscribeOn.js.map


/***/ }),

/***/ 94960:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.switchAll = void 0;
var switchMap_1 = __webpack_require__(23506);
var identity_1 = __webpack_require__(13893);
function switchAll() {
    return switchMap_1.switchMap(identity_1.identity);
}
exports.switchAll = switchAll; //# sourceMappingURL=switchAll.js.map


/***/ }),

/***/ 23506:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.switchMap = void 0;
var innerFrom_1 = __webpack_require__(50711);
var lift_1 = __webpack_require__(76189);
var OperatorSubscriber_1 = __webpack_require__(57322);
function switchMap(project, resultSelector) {
    return lift_1.operate(function(source, subscriber) {
        var innerSubscriber = null;
        var index = 0;
        var isComplete = false;
        var checkComplete = function() {
            return isComplete && !innerSubscriber && subscriber.complete();
        };
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            innerSubscriber === null || innerSubscriber === void 0 ? void 0 : innerSubscriber.unsubscribe();
            var innerIndex = 0;
            var outerIndex = index++;
            innerFrom_1.innerFrom(project(value, outerIndex)).subscribe(innerSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(innerValue) {
                return subscriber.next(resultSelector ? resultSelector(value, innerValue, outerIndex, innerIndex++) : innerValue);
            }, function() {
                innerSubscriber = null;
                checkComplete();
            }));
        }, function() {
            isComplete = true;
            checkComplete();
        }));
    });
}
exports.switchMap = switchMap; //# sourceMappingURL=switchMap.js.map


/***/ }),

/***/ 30048:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.switchMapTo = void 0;
var switchMap_1 = __webpack_require__(23506);
var isFunction_1 = __webpack_require__(90422);
function switchMapTo(innerObservable, resultSelector) {
    return isFunction_1.isFunction(resultSelector) ? switchMap_1.switchMap(function() {
        return innerObservable;
    }, resultSelector) : switchMap_1.switchMap(function() {
        return innerObservable;
    });
}
exports.switchMapTo = switchMapTo; //# sourceMappingURL=switchMapTo.js.map


/***/ }),

/***/ 32978:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.switchScan = void 0;
var switchMap_1 = __webpack_require__(23506);
var lift_1 = __webpack_require__(76189);
function switchScan(accumulator, seed) {
    return lift_1.operate(function(source, subscriber) {
        var state = seed;
        switchMap_1.switchMap(function(value, index) {
            return accumulator(state, value, index);
        }, function(_, innerValue) {
            return state = innerValue, innerValue;
        })(source).subscribe(subscriber);
        return function() {
            state = null;
        };
    });
}
exports.switchScan = switchScan; //# sourceMappingURL=switchScan.js.map


/***/ }),

/***/ 96920:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.take = void 0;
var empty_1 = __webpack_require__(7999);
var lift_1 = __webpack_require__(76189);
var OperatorSubscriber_1 = __webpack_require__(57322);
function take(count) {
    return count <= 0 ? function() {
        return empty_1.EMPTY;
    } : lift_1.operate(function(source, subscriber) {
        var seen = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            if (++seen <= count) {
                subscriber.next(value);
                if (count <= seen) {
                    subscriber.complete();
                }
            }
        }));
    });
}
exports.take = take; //# sourceMappingURL=take.js.map


/***/ }),

/***/ 21030:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var __values = (void 0) && (void 0).__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.takeLast = void 0;
var empty_1 = __webpack_require__(7999);
var lift_1 = __webpack_require__(76189);
var OperatorSubscriber_1 = __webpack_require__(57322);
function takeLast(count) {
    return count <= 0 ? function() {
        return empty_1.EMPTY;
    } : lift_1.operate(function(source, subscriber) {
        var buffer = [];
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            buffer.push(value);
            count < buffer.length && buffer.shift();
        }, function() {
            var e_1, _a;
            try {
                for(var buffer_1 = __values(buffer), buffer_1_1 = buffer_1.next(); !buffer_1_1.done; buffer_1_1 = buffer_1.next()){
                    var value = buffer_1_1.value;
                    subscriber.next(value);
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (buffer_1_1 && !buffer_1_1.done && (_a = buffer_1.return)) _a.call(buffer_1);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
            subscriber.complete();
        }, undefined, function() {
            buffer = null;
        }));
    });
}
exports.takeLast = takeLast; //# sourceMappingURL=takeLast.js.map


/***/ }),

/***/ 30756:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.takeUntil = void 0;
var lift_1 = __webpack_require__(76189);
var OperatorSubscriber_1 = __webpack_require__(57322);
var innerFrom_1 = __webpack_require__(50711);
var noop_1 = __webpack_require__(81543);
function takeUntil(notifier) {
    return lift_1.operate(function(source, subscriber) {
        innerFrom_1.innerFrom(notifier).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
            return subscriber.complete();
        }, noop_1.noop));
        !subscriber.closed && source.subscribe(subscriber);
    });
}
exports.takeUntil = takeUntil; //# sourceMappingURL=takeUntil.js.map


/***/ }),

/***/ 86038:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.takeWhile = void 0;
var lift_1 = __webpack_require__(76189);
var OperatorSubscriber_1 = __webpack_require__(57322);
function takeWhile(predicate, inclusive) {
    if (inclusive === void 0) {
        inclusive = false;
    }
    return lift_1.operate(function(source, subscriber) {
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            var result = predicate(value, index++);
            (result || inclusive) && subscriber.next(value);
            !result && subscriber.complete();
        }));
    });
}
exports.takeWhile = takeWhile; //# sourceMappingURL=takeWhile.js.map


/***/ }),

/***/ 22004:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.tap = void 0;
var isFunction_1 = __webpack_require__(90422);
var lift_1 = __webpack_require__(76189);
var OperatorSubscriber_1 = __webpack_require__(57322);
var identity_1 = __webpack_require__(13893);
function tap(observerOrNext, error, complete) {
    var tapObserver = isFunction_1.isFunction(observerOrNext) || error || complete ? {
        next: observerOrNext,
        error: error,
        complete: complete
    } : observerOrNext;
    return tapObserver ? lift_1.operate(function(source, subscriber) {
        var _a;
        (_a = tapObserver.subscribe) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
        var isUnsub = true;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            var _a;
            (_a = tapObserver.next) === null || _a === void 0 ? void 0 : _a.call(tapObserver, value);
            subscriber.next(value);
        }, function() {
            var _a;
            isUnsub = false;
            (_a = tapObserver.complete) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
            subscriber.complete();
        }, function(err) {
            var _a;
            isUnsub = false;
            (_a = tapObserver.error) === null || _a === void 0 ? void 0 : _a.call(tapObserver, err);
            subscriber.error(err);
        }, function() {
            var _a, _b;
            if (isUnsub) {
                (_a = tapObserver.unsubscribe) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
            }
            (_b = tapObserver.finalize) === null || _b === void 0 ? void 0 : _b.call(tapObserver);
        }));
    }) : identity_1.identity;
}
exports.tap = tap; //# sourceMappingURL=tap.js.map


/***/ }),

/***/ 88142:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.throttle = void 0;
var lift_1 = __webpack_require__(76189);
var OperatorSubscriber_1 = __webpack_require__(57322);
var innerFrom_1 = __webpack_require__(50711);
function throttle(durationSelector, config) {
    return lift_1.operate(function(source, subscriber) {
        var _a = config !== null && config !== void 0 ? config : {}, _b = _a.leading, leading = _b === void 0 ? true : _b, _c = _a.trailing, trailing = _c === void 0 ? false : _c;
        var hasValue = false;
        var sendValue = null;
        var throttled = null;
        var isComplete = false;
        var endThrottling = function() {
            throttled === null || throttled === void 0 ? void 0 : throttled.unsubscribe();
            throttled = null;
            if (trailing) {
                send();
                isComplete && subscriber.complete();
            }
        };
        var cleanupThrottling = function() {
            throttled = null;
            isComplete && subscriber.complete();
        };
        var startThrottle = function(value) {
            return throttled = innerFrom_1.innerFrom(durationSelector(value)).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, endThrottling, cleanupThrottling));
        };
        var send = function() {
            if (hasValue) {
                hasValue = false;
                var value = sendValue;
                sendValue = null;
                subscriber.next(value);
                !isComplete && startThrottle(value);
            }
        };
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            hasValue = true;
            sendValue = value;
            !(throttled && !throttled.closed) && (leading ? send() : startThrottle(value));
        }, function() {
            isComplete = true;
            !(trailing && hasValue && throttled && !throttled.closed) && subscriber.complete();
        }));
    });
}
exports.throttle = throttle; //# sourceMappingURL=throttle.js.map


/***/ }),

/***/ 85035:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.throttleTime = void 0;
var async_1 = __webpack_require__(83970);
var throttle_1 = __webpack_require__(88142);
var timer_1 = __webpack_require__(33158);
function throttleTime(duration, scheduler, config) {
    if (scheduler === void 0) {
        scheduler = async_1.asyncScheduler;
    }
    var duration$ = timer_1.timer(duration, scheduler);
    return throttle_1.throttle(function() {
        return duration$;
    }, config);
}
exports.throttleTime = throttleTime; //# sourceMappingURL=throttleTime.js.map


/***/ }),

/***/ 54374:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.throwIfEmpty = void 0;
var EmptyError_1 = __webpack_require__(10855);
var lift_1 = __webpack_require__(76189);
var OperatorSubscriber_1 = __webpack_require__(57322);
function throwIfEmpty(errorFactory) {
    if (errorFactory === void 0) {
        errorFactory = defaultErrorFactory;
    }
    return lift_1.operate(function(source, subscriber) {
        var hasValue = false;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            hasValue = true;
            subscriber.next(value);
        }, function() {
            return hasValue ? subscriber.complete() : subscriber.error(errorFactory());
        }));
    });
}
exports.throwIfEmpty = throwIfEmpty;
function defaultErrorFactory() {
    return new EmptyError_1.EmptyError();
} //# sourceMappingURL=throwIfEmpty.js.map


/***/ }),

/***/ 22512:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.TimeInterval = exports.timeInterval = void 0;
var async_1 = __webpack_require__(83970);
var lift_1 = __webpack_require__(76189);
var OperatorSubscriber_1 = __webpack_require__(57322);
function timeInterval(scheduler) {
    if (scheduler === void 0) {
        scheduler = async_1.asyncScheduler;
    }
    return lift_1.operate(function(source, subscriber) {
        var last = scheduler.now();
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            var now = scheduler.now();
            var interval = now - last;
            last = now;
            subscriber.next(new TimeInterval(value, interval));
        }));
    });
}
exports.timeInterval = timeInterval;
var TimeInterval = function() {
    function TimeInterval(value, interval) {
        this.value = value;
        this.interval = interval;
    }
    return TimeInterval;
}();
exports.TimeInterval = TimeInterval; //# sourceMappingURL=timeInterval.js.map


/***/ }),

/***/ 47527:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.timeout = exports.TimeoutError = void 0;
var async_1 = __webpack_require__(83970);
var isDate_1 = __webpack_require__(27169);
var lift_1 = __webpack_require__(76189);
var innerFrom_1 = __webpack_require__(50711);
var createErrorClass_1 = __webpack_require__(46750);
var OperatorSubscriber_1 = __webpack_require__(57322);
var executeSchedule_1 = __webpack_require__(72854);
exports.TimeoutError = createErrorClass_1.createErrorClass(function(_super) {
    return function TimeoutErrorImpl(info) {
        if (info === void 0) {
            info = null;
        }
        _super(this);
        this.message = "Timeout has occurred";
        this.name = "TimeoutError";
        this.info = info;
    };
});
function timeout(config, schedulerArg) {
    var _a = isDate_1.isValidDate(config) ? {
        first: config
    } : typeof config === "number" ? {
        each: config
    } : config, first = _a.first, each = _a.each, _b = _a.with, _with = _b === void 0 ? timeoutErrorFactory : _b, _c = _a.scheduler, scheduler = _c === void 0 ? schedulerArg !== null && schedulerArg !== void 0 ? schedulerArg : async_1.asyncScheduler : _c, _d = _a.meta, meta = _d === void 0 ? null : _d;
    if (first == null && each == null) {
        throw new TypeError("No timeout provided.");
    }
    return lift_1.operate(function(source, subscriber) {
        var originalSourceSubscription;
        var timerSubscription;
        var lastValue = null;
        var seen = 0;
        var startTimer = function(delay) {
            timerSubscription = executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
                try {
                    originalSourceSubscription.unsubscribe();
                    innerFrom_1.innerFrom(_with({
                        meta: meta,
                        lastValue: lastValue,
                        seen: seen
                    })).subscribe(subscriber);
                } catch (err) {
                    subscriber.error(err);
                }
            }, delay);
        };
        originalSourceSubscription = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.unsubscribe();
            seen++;
            subscriber.next(lastValue = value);
            each > 0 && startTimer(each);
        }, undefined, undefined, function() {
            if (!(timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.closed)) {
                timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.unsubscribe();
            }
            lastValue = null;
        }));
        !seen && startTimer(first != null ? typeof first === "number" ? first : +first - scheduler.now() : each);
    });
}
exports.timeout = timeout;
function timeoutErrorFactory(info) {
    throw new exports.TimeoutError(info);
} //# sourceMappingURL=timeout.js.map


/***/ }),

/***/ 82091:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.timeoutWith = void 0;
var async_1 = __webpack_require__(83970);
var isDate_1 = __webpack_require__(27169);
var timeout_1 = __webpack_require__(47527);
function timeoutWith(due, withObservable, scheduler) {
    var first;
    var each;
    var _with;
    scheduler = scheduler !== null && scheduler !== void 0 ? scheduler : async_1.async;
    if (isDate_1.isValidDate(due)) {
        first = due;
    } else if (typeof due === "number") {
        each = due;
    }
    if (withObservable) {
        _with = function() {
            return withObservable;
        };
    } else {
        throw new TypeError("No observable provided to switch to");
    }
    if (first == null && each == null) {
        throw new TypeError("No timeout provided.");
    }
    return timeout_1.timeout({
        first: first,
        each: each,
        scheduler: scheduler,
        with: _with
    });
}
exports.timeoutWith = timeoutWith; //# sourceMappingURL=timeoutWith.js.map


/***/ }),

/***/ 51768:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.timestamp = void 0;
var dateTimestampProvider_1 = __webpack_require__(96416);
var map_1 = __webpack_require__(56414);
function timestamp(timestampProvider) {
    if (timestampProvider === void 0) {
        timestampProvider = dateTimestampProvider_1.dateTimestampProvider;
    }
    return map_1.map(function(value) {
        return {
            value: value,
            timestamp: timestampProvider.now()
        };
    });
}
exports.timestamp = timestamp; //# sourceMappingURL=timestamp.js.map


/***/ }),

/***/ 81740:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.toArray = void 0;
var reduce_1 = __webpack_require__(5744);
var lift_1 = __webpack_require__(76189);
var arrReducer = function(arr, value) {
    return arr.push(value), arr;
};
function toArray() {
    return lift_1.operate(function(source, subscriber) {
        reduce_1.reduce(arrReducer, [])(source).subscribe(subscriber);
    });
}
exports.toArray = toArray; //# sourceMappingURL=toArray.js.map


/***/ }),

/***/ 48561:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.window = void 0;
var Subject_1 = __webpack_require__(20833);
var lift_1 = __webpack_require__(76189);
var OperatorSubscriber_1 = __webpack_require__(57322);
var noop_1 = __webpack_require__(81543);
var innerFrom_1 = __webpack_require__(50711);
function window(windowBoundaries) {
    return lift_1.operate(function(source, subscriber) {
        var windowSubject = new Subject_1.Subject();
        subscriber.next(windowSubject.asObservable());
        var errorHandler = function(err) {
            windowSubject.error(err);
            subscriber.error(err);
        };
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            return windowSubject === null || windowSubject === void 0 ? void 0 : windowSubject.next(value);
        }, function() {
            windowSubject.complete();
            subscriber.complete();
        }, errorHandler));
        innerFrom_1.innerFrom(windowBoundaries).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
            windowSubject.complete();
            subscriber.next(windowSubject = new Subject_1.Subject());
        }, noop_1.noop, errorHandler));
        return function() {
            windowSubject === null || windowSubject === void 0 ? void 0 : windowSubject.unsubscribe();
            windowSubject = null;
        };
    });
}
exports.window = window; //# sourceMappingURL=window.js.map


/***/ }),

/***/ 75090:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var __values = (void 0) && (void 0).__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.windowCount = void 0;
var Subject_1 = __webpack_require__(20833);
var lift_1 = __webpack_require__(76189);
var OperatorSubscriber_1 = __webpack_require__(57322);
function windowCount(windowSize, startWindowEvery) {
    if (startWindowEvery === void 0) {
        startWindowEvery = 0;
    }
    var startEvery = startWindowEvery > 0 ? startWindowEvery : windowSize;
    return lift_1.operate(function(source, subscriber) {
        var windows = [
            new Subject_1.Subject()
        ];
        var starts = [];
        var count = 0;
        subscriber.next(windows[0].asObservable());
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            var e_1, _a;
            try {
                for(var windows_1 = __values(windows), windows_1_1 = windows_1.next(); !windows_1_1.done; windows_1_1 = windows_1.next()){
                    var window_1 = windows_1_1.value;
                    window_1.next(value);
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (windows_1_1 && !windows_1_1.done && (_a = windows_1.return)) _a.call(windows_1);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
            var c = count - windowSize + 1;
            if (c >= 0 && c % startEvery === 0) {
                windows.shift().complete();
            }
            if (++count % startEvery === 0) {
                var window_2 = new Subject_1.Subject();
                windows.push(window_2);
                subscriber.next(window_2.asObservable());
            }
        }, function() {
            while(windows.length > 0){
                windows.shift().complete();
            }
            subscriber.complete();
        }, function(err) {
            while(windows.length > 0){
                windows.shift().error(err);
            }
            subscriber.error(err);
        }, function() {
            starts = null;
            windows = null;
        }));
    });
}
exports.windowCount = windowCount; //# sourceMappingURL=windowCount.js.map


/***/ }),

/***/ 55265:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.windowTime = void 0;
var Subject_1 = __webpack_require__(20833);
var async_1 = __webpack_require__(83970);
var Subscription_1 = __webpack_require__(43851);
var lift_1 = __webpack_require__(76189);
var OperatorSubscriber_1 = __webpack_require__(57322);
var arrRemove_1 = __webpack_require__(86889);
var args_1 = __webpack_require__(3173);
var executeSchedule_1 = __webpack_require__(72854);
function windowTime(windowTimeSpan) {
    var _a, _b;
    var otherArgs = [];
    for(var _i = 1; _i < arguments.length; _i++){
        otherArgs[_i - 1] = arguments[_i];
    }
    var scheduler = (_a = args_1.popScheduler(otherArgs)) !== null && _a !== void 0 ? _a : async_1.asyncScheduler;
    var windowCreationInterval = (_b = otherArgs[0]) !== null && _b !== void 0 ? _b : null;
    var maxWindowSize = otherArgs[1] || Infinity;
    return lift_1.operate(function(source, subscriber) {
        var windowRecords = [];
        var restartOnClose = false;
        var closeWindow = function(record) {
            var window = record.window, subs = record.subs;
            window.complete();
            subs.unsubscribe();
            arrRemove_1.arrRemove(windowRecords, record);
            restartOnClose && startWindow();
        };
        var startWindow = function() {
            if (windowRecords) {
                var subs = new Subscription_1.Subscription();
                subscriber.add(subs);
                var window_1 = new Subject_1.Subject();
                var record_1 = {
                    window: window_1,
                    subs: subs,
                    seen: 0
                };
                windowRecords.push(record_1);
                subscriber.next(window_1.asObservable());
                executeSchedule_1.executeSchedule(subs, scheduler, function() {
                    return closeWindow(record_1);
                }, windowTimeSpan);
            }
        };
        if (windowCreationInterval !== null && windowCreationInterval >= 0) {
            executeSchedule_1.executeSchedule(subscriber, scheduler, startWindow, windowCreationInterval, true);
        } else {
            restartOnClose = true;
        }
        startWindow();
        var loop = function(cb) {
            return windowRecords.slice().forEach(cb);
        };
        var terminate = function(cb) {
            loop(function(_a) {
                var window = _a.window;
                return cb(window);
            });
            cb(subscriber);
            subscriber.unsubscribe();
        };
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            loop(function(record) {
                record.window.next(value);
                maxWindowSize <= ++record.seen && closeWindow(record);
            });
        }, function() {
            return terminate(function(consumer) {
                return consumer.complete();
            });
        }, function(err) {
            return terminate(function(consumer) {
                return consumer.error(err);
            });
        }));
        return function() {
            windowRecords = null;
        };
    });
}
exports.windowTime = windowTime; //# sourceMappingURL=windowTime.js.map


/***/ }),

/***/ 91972:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var __values = (void 0) && (void 0).__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.windowToggle = void 0;
var Subject_1 = __webpack_require__(20833);
var Subscription_1 = __webpack_require__(43851);
var lift_1 = __webpack_require__(76189);
var innerFrom_1 = __webpack_require__(50711);
var OperatorSubscriber_1 = __webpack_require__(57322);
var noop_1 = __webpack_require__(81543);
var arrRemove_1 = __webpack_require__(86889);
function windowToggle(openings, closingSelector) {
    return lift_1.operate(function(source, subscriber) {
        var windows = [];
        var handleError = function(err) {
            while(0 < windows.length){
                windows.shift().error(err);
            }
            subscriber.error(err);
        };
        innerFrom_1.innerFrom(openings).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(openValue) {
            var window = new Subject_1.Subject();
            windows.push(window);
            var closingSubscription = new Subscription_1.Subscription();
            var closeWindow = function() {
                arrRemove_1.arrRemove(windows, window);
                window.complete();
                closingSubscription.unsubscribe();
            };
            var closingNotifier;
            try {
                closingNotifier = innerFrom_1.innerFrom(closingSelector(openValue));
            } catch (err) {
                handleError(err);
                return;
            }
            subscriber.next(window.asObservable());
            closingSubscription.add(closingNotifier.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, closeWindow, noop_1.noop, handleError)));
        }, noop_1.noop));
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            var e_1, _a;
            var windowsCopy = windows.slice();
            try {
                for(var windowsCopy_1 = __values(windowsCopy), windowsCopy_1_1 = windowsCopy_1.next(); !windowsCopy_1_1.done; windowsCopy_1_1 = windowsCopy_1.next()){
                    var window_1 = windowsCopy_1_1.value;
                    window_1.next(value);
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (windowsCopy_1_1 && !windowsCopy_1_1.done && (_a = windowsCopy_1.return)) _a.call(windowsCopy_1);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
        }, function() {
            while(0 < windows.length){
                windows.shift().complete();
            }
            subscriber.complete();
        }, handleError, function() {
            while(0 < windows.length){
                windows.shift().unsubscribe();
            }
        }));
    });
}
exports.windowToggle = windowToggle; //# sourceMappingURL=windowToggle.js.map


/***/ }),

/***/ 5676:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.windowWhen = void 0;
var Subject_1 = __webpack_require__(20833);
var lift_1 = __webpack_require__(76189);
var OperatorSubscriber_1 = __webpack_require__(57322);
var innerFrom_1 = __webpack_require__(50711);
function windowWhen(closingSelector) {
    return lift_1.operate(function(source, subscriber) {
        var window;
        var closingSubscriber;
        var handleError = function(err) {
            window.error(err);
            subscriber.error(err);
        };
        var openWindow = function() {
            closingSubscriber === null || closingSubscriber === void 0 ? void 0 : closingSubscriber.unsubscribe();
            window === null || window === void 0 ? void 0 : window.complete();
            window = new Subject_1.Subject();
            subscriber.next(window.asObservable());
            var closingNotifier;
            try {
                closingNotifier = innerFrom_1.innerFrom(closingSelector());
            } catch (err) {
                handleError(err);
                return;
            }
            closingNotifier.subscribe(closingSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, openWindow, openWindow, handleError));
        };
        openWindow();
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            return window.next(value);
        }, function() {
            window.complete();
            subscriber.complete();
        }, handleError, function() {
            closingSubscriber === null || closingSubscriber === void 0 ? void 0 : closingSubscriber.unsubscribe();
            window = null;
        }));
    });
}
exports.windowWhen = windowWhen; //# sourceMappingURL=windowWhen.js.map


/***/ }),

/***/ 52126:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var __read = (void 0) && (void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = (void 0) && (void 0).__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.withLatestFrom = void 0;
var lift_1 = __webpack_require__(76189);
var OperatorSubscriber_1 = __webpack_require__(57322);
var innerFrom_1 = __webpack_require__(50711);
var identity_1 = __webpack_require__(13893);
var noop_1 = __webpack_require__(81543);
var args_1 = __webpack_require__(3173);
function withLatestFrom() {
    var inputs = [];
    for(var _i = 0; _i < arguments.length; _i++){
        inputs[_i] = arguments[_i];
    }
    var project = args_1.popResultSelector(inputs);
    return lift_1.operate(function(source, subscriber) {
        var len = inputs.length;
        var otherValues = new Array(len);
        var hasValue = inputs.map(function() {
            return false;
        });
        var ready = false;
        var _loop_1 = function(i) {
            innerFrom_1.innerFrom(inputs[i]).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
                otherValues[i] = value;
                if (!ready && !hasValue[i]) {
                    hasValue[i] = true;
                    (ready = hasValue.every(identity_1.identity)) && (hasValue = null);
                }
            }, noop_1.noop));
        };
        for(var i = 0; i < len; i++){
            _loop_1(i);
        }
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            if (ready) {
                var values = __spreadArray([
                    value
                ], __read(otherValues));
                subscriber.next(project ? project.apply(void 0, __spreadArray([], __read(values))) : values);
            }
        }));
    });
}
exports.withLatestFrom = withLatestFrom; //# sourceMappingURL=withLatestFrom.js.map


/***/ }),

/***/ 14514:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var __read = (void 0) && (void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = (void 0) && (void 0).__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.zip = void 0;
var zip_1 = __webpack_require__(13356);
var lift_1 = __webpack_require__(76189);
function zip() {
    var sources = [];
    for(var _i = 0; _i < arguments.length; _i++){
        sources[_i] = arguments[_i];
    }
    return lift_1.operate(function(source, subscriber) {
        zip_1.zip.apply(void 0, __spreadArray([
            source
        ], __read(sources))).subscribe(subscriber);
    });
}
exports.zip = zip; //# sourceMappingURL=zip.js.map


/***/ }),

/***/ 49366:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.zipAll = void 0;
var zip_1 = __webpack_require__(13356);
var joinAllInternals_1 = __webpack_require__(48215);
function zipAll(project) {
    return joinAllInternals_1.joinAllInternals(zip_1.zip, project);
}
exports.zipAll = zipAll; //# sourceMappingURL=zipAll.js.map


/***/ }),

/***/ 16410:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var __read = (void 0) && (void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = (void 0) && (void 0).__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.zipWith = void 0;
var zip_1 = __webpack_require__(14514);
function zipWith() {
    var otherInputs = [];
    for(var _i = 0; _i < arguments.length; _i++){
        otherInputs[_i] = arguments[_i];
    }
    return zip_1.zip.apply(void 0, __spreadArray([], __read(otherInputs)));
}
exports.zipWith = zipWith; //# sourceMappingURL=zipWith.js.map


/***/ }),

/***/ 10219:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.scheduleArray = void 0;
var Observable_1 = __webpack_require__(89043);
function scheduleArray(input, scheduler) {
    return new Observable_1.Observable(function(subscriber) {
        var i = 0;
        return scheduler.schedule(function() {
            if (i === input.length) {
                subscriber.complete();
            } else {
                subscriber.next(input[i++]);
                if (!subscriber.closed) {
                    this.schedule();
                }
            }
        });
    });
}
exports.scheduleArray = scheduleArray; //# sourceMappingURL=scheduleArray.js.map


/***/ }),

/***/ 94308:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.scheduleAsyncIterable = void 0;
var Observable_1 = __webpack_require__(89043);
var executeSchedule_1 = __webpack_require__(72854);
function scheduleAsyncIterable(input, scheduler) {
    if (!input) {
        throw new Error("Iterable cannot be null");
    }
    return new Observable_1.Observable(function(subscriber) {
        executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
            var iterator = input[Symbol.asyncIterator]();
            executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
                iterator.next().then(function(result) {
                    if (result.done) {
                        subscriber.complete();
                    } else {
                        subscriber.next(result.value);
                    }
                });
            }, 0, true);
        });
    });
}
exports.scheduleAsyncIterable = scheduleAsyncIterable; //# sourceMappingURL=scheduleAsyncIterable.js.map


/***/ }),

/***/ 61576:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.scheduleIterable = void 0;
var Observable_1 = __webpack_require__(89043);
var iterator_1 = __webpack_require__(71159);
var isFunction_1 = __webpack_require__(90422);
var executeSchedule_1 = __webpack_require__(72854);
function scheduleIterable(input, scheduler) {
    return new Observable_1.Observable(function(subscriber) {
        var iterator;
        executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
            iterator = input[iterator_1.iterator]();
            executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
                var _a;
                var value;
                var done;
                try {
                    _a = iterator.next(), value = _a.value, done = _a.done;
                } catch (err) {
                    subscriber.error(err);
                    return;
                }
                if (done) {
                    subscriber.complete();
                } else {
                    subscriber.next(value);
                }
            }, 0, true);
        });
        return function() {
            return isFunction_1.isFunction(iterator === null || iterator === void 0 ? void 0 : iterator.return) && iterator.return();
        };
    });
}
exports.scheduleIterable = scheduleIterable; //# sourceMappingURL=scheduleIterable.js.map


/***/ }),

/***/ 10117:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.scheduleObservable = void 0;
var innerFrom_1 = __webpack_require__(50711);
var observeOn_1 = __webpack_require__(93409);
var subscribeOn_1 = __webpack_require__(66771);
function scheduleObservable(input, scheduler) {
    return innerFrom_1.innerFrom(input).pipe(subscribeOn_1.subscribeOn(scheduler), observeOn_1.observeOn(scheduler));
}
exports.scheduleObservable = scheduleObservable; //# sourceMappingURL=scheduleObservable.js.map


/***/ }),

/***/ 36183:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.schedulePromise = void 0;
var innerFrom_1 = __webpack_require__(50711);
var observeOn_1 = __webpack_require__(93409);
var subscribeOn_1 = __webpack_require__(66771);
function schedulePromise(input, scheduler) {
    return innerFrom_1.innerFrom(input).pipe(subscribeOn_1.subscribeOn(scheduler), observeOn_1.observeOn(scheduler));
}
exports.schedulePromise = schedulePromise; //# sourceMappingURL=schedulePromise.js.map


/***/ }),

/***/ 17039:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.scheduleReadableStreamLike = void 0;
var scheduleAsyncIterable_1 = __webpack_require__(94308);
var isReadableStreamLike_1 = __webpack_require__(21999);
function scheduleReadableStreamLike(input, scheduler) {
    return scheduleAsyncIterable_1.scheduleAsyncIterable(isReadableStreamLike_1.readableStreamLikeToAsyncGenerator(input), scheduler);
}
exports.scheduleReadableStreamLike = scheduleReadableStreamLike; //# sourceMappingURL=scheduleReadableStreamLike.js.map


/***/ }),

/***/ 27188:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.scheduled = void 0;
var scheduleObservable_1 = __webpack_require__(10117);
var schedulePromise_1 = __webpack_require__(36183);
var scheduleArray_1 = __webpack_require__(10219);
var scheduleIterable_1 = __webpack_require__(61576);
var scheduleAsyncIterable_1 = __webpack_require__(94308);
var isInteropObservable_1 = __webpack_require__(32645);
var isPromise_1 = __webpack_require__(57984);
var isArrayLike_1 = __webpack_require__(93669);
var isIterable_1 = __webpack_require__(42203);
var isAsyncIterable_1 = __webpack_require__(75861);
var throwUnobservableError_1 = __webpack_require__(79308);
var isReadableStreamLike_1 = __webpack_require__(21999);
var scheduleReadableStreamLike_1 = __webpack_require__(17039);
function scheduled(input, scheduler) {
    if (input != null) {
        if (isInteropObservable_1.isInteropObservable(input)) {
            return scheduleObservable_1.scheduleObservable(input, scheduler);
        }
        if (isArrayLike_1.isArrayLike(input)) {
            return scheduleArray_1.scheduleArray(input, scheduler);
        }
        if (isPromise_1.isPromise(input)) {
            return schedulePromise_1.schedulePromise(input, scheduler);
        }
        if (isAsyncIterable_1.isAsyncIterable(input)) {
            return scheduleAsyncIterable_1.scheduleAsyncIterable(input, scheduler);
        }
        if (isIterable_1.isIterable(input)) {
            return scheduleIterable_1.scheduleIterable(input, scheduler);
        }
        if (isReadableStreamLike_1.isReadableStreamLike(input)) {
            return scheduleReadableStreamLike_1.scheduleReadableStreamLike(input, scheduler);
        }
    }
    throw throwUnobservableError_1.createInvalidObservableTypeError(input);
}
exports.scheduled = scheduled; //# sourceMappingURL=scheduled.js.map


/***/ }),

/***/ 17992:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var __extends = (void 0) && (void 0).__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Action = void 0;
var Subscription_1 = __webpack_require__(43851);
var Action = function(_super) {
    __extends(Action, _super);
    function Action(scheduler, work) {
        return _super.call(this) || this;
    }
    Action.prototype.schedule = function(state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return this;
    };
    return Action;
}(Subscription_1.Subscription);
exports.Action = Action; //# sourceMappingURL=Action.js.map


/***/ }),

/***/ 79122:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var __extends = (void 0) && (void 0).__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.AnimationFrameAction = void 0;
var AsyncAction_1 = __webpack_require__(79584);
var animationFrameProvider_1 = __webpack_require__(46011);
var AnimationFrameAction = function(_super) {
    __extends(AnimationFrameAction, _super);
    function AnimationFrameAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    AnimationFrameAction.prototype.requestAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler._scheduled || (scheduler._scheduled = animationFrameProvider_1.animationFrameProvider.requestAnimationFrame(function() {
            return scheduler.flush(undefined);
        }));
    };
    AnimationFrameAction.prototype.recycleAsyncId = function(scheduler, id, delay) {
        var _a;
        if (delay === void 0) {
            delay = 0;
        }
        if (delay != null ? delay > 0 : this.delay > 0) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        var actions = scheduler.actions;
        if (id != null && ((_a = actions[actions.length - 1]) === null || _a === void 0 ? void 0 : _a.id) !== id) {
            animationFrameProvider_1.animationFrameProvider.cancelAnimationFrame(id);
            scheduler._scheduled = undefined;
        }
        return undefined;
    };
    return AnimationFrameAction;
}(AsyncAction_1.AsyncAction);
exports.AnimationFrameAction = AnimationFrameAction; //# sourceMappingURL=AnimationFrameAction.js.map


/***/ }),

/***/ 22782:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var __extends = (void 0) && (void 0).__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.AnimationFrameScheduler = void 0;
var AsyncScheduler_1 = __webpack_require__(10049);
var AnimationFrameScheduler = function(_super) {
    __extends(AnimationFrameScheduler, _super);
    function AnimationFrameScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnimationFrameScheduler.prototype.flush = function(action) {
        this._active = true;
        var flushId = this._scheduled;
        this._scheduled = undefined;
        var actions = this.actions;
        var error;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        }while ((action = actions[0]) && action.id === flushId && actions.shift());
        this._active = false;
        if (error) {
            while((action = actions[0]) && action.id === flushId && actions.shift()){
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AnimationFrameScheduler;
}(AsyncScheduler_1.AsyncScheduler);
exports.AnimationFrameScheduler = AnimationFrameScheduler; //# sourceMappingURL=AnimationFrameScheduler.js.map


/***/ }),

/***/ 90516:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var __extends = (void 0) && (void 0).__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.AsapAction = void 0;
var AsyncAction_1 = __webpack_require__(79584);
var immediateProvider_1 = __webpack_require__(69952);
var AsapAction = function(_super) {
    __extends(AsapAction, _super);
    function AsapAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    AsapAction.prototype.requestAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler._scheduled || (scheduler._scheduled = immediateProvider_1.immediateProvider.setImmediate(scheduler.flush.bind(scheduler, undefined)));
    };
    AsapAction.prototype.recycleAsyncId = function(scheduler, id, delay) {
        var _a;
        if (delay === void 0) {
            delay = 0;
        }
        if (delay != null ? delay > 0 : this.delay > 0) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        var actions = scheduler.actions;
        if (id != null && ((_a = actions[actions.length - 1]) === null || _a === void 0 ? void 0 : _a.id) !== id) {
            immediateProvider_1.immediateProvider.clearImmediate(id);
            if (scheduler._scheduled === id) {
                scheduler._scheduled = undefined;
            }
        }
        return undefined;
    };
    return AsapAction;
}(AsyncAction_1.AsyncAction);
exports.AsapAction = AsapAction; //# sourceMappingURL=AsapAction.js.map


/***/ }),

/***/ 31273:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var __extends = (void 0) && (void 0).__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.AsapScheduler = void 0;
var AsyncScheduler_1 = __webpack_require__(10049);
var AsapScheduler = function(_super) {
    __extends(AsapScheduler, _super);
    function AsapScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AsapScheduler.prototype.flush = function(action) {
        this._active = true;
        var flushId = this._scheduled;
        this._scheduled = undefined;
        var actions = this.actions;
        var error;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        }while ((action = actions[0]) && action.id === flushId && actions.shift());
        this._active = false;
        if (error) {
            while((action = actions[0]) && action.id === flushId && actions.shift()){
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsapScheduler;
}(AsyncScheduler_1.AsyncScheduler);
exports.AsapScheduler = AsapScheduler; //# sourceMappingURL=AsapScheduler.js.map


/***/ }),

/***/ 79584:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var __extends = (void 0) && (void 0).__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.AsyncAction = void 0;
var Action_1 = __webpack_require__(17992);
var intervalProvider_1 = __webpack_require__(15759);
var arrRemove_1 = __webpack_require__(86889);
var AsyncAction = function(_super) {
    __extends(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
    }
    AsyncAction.prototype.schedule = function(state, delay) {
        var _a;
        if (delay === void 0) {
            delay = 0;
        }
        if (this.closed) {
            return this;
        }
        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = (_a = this.id) !== null && _a !== void 0 ? _a : this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function(scheduler, _id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return intervalProvider_1.intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function(_scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay != null && this.delay === delay && this.pending === false) {
            return id;
        }
        if (id != null) {
            intervalProvider_1.intervalProvider.clearInterval(id);
        }
        return undefined;
    };
    AsyncAction.prototype.execute = function(state, delay) {
        if (this.closed) {
            return new Error("executing a cancelled action");
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        } else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function(state, _delay) {
        var errored = false;
        var errorValue;
        try {
            this.work(state);
        } catch (e) {
            errored = true;
            errorValue = e ? e : new Error("Scheduled action threw falsy error");
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype.unsubscribe = function() {
        if (!this.closed) {
            var _a = this, id = _a.id, scheduler = _a.scheduler;
            var actions = scheduler.actions;
            this.work = this.state = this.scheduler = null;
            this.pending = false;
            arrRemove_1.arrRemove(actions, this);
            if (id != null) {
                this.id = this.recycleAsyncId(scheduler, id, null);
            }
            this.delay = null;
            _super.prototype.unsubscribe.call(this);
        }
    };
    return AsyncAction;
}(Action_1.Action);
exports.AsyncAction = AsyncAction; //# sourceMappingURL=AsyncAction.js.map


/***/ }),

/***/ 10049:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var __extends = (void 0) && (void 0).__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.AsyncScheduler = void 0;
var Scheduler_1 = __webpack_require__(15913);
var AsyncScheduler = function(_super) {
    __extends(AsyncScheduler, _super);
    function AsyncScheduler(SchedulerAction, now) {
        if (now === void 0) {
            now = Scheduler_1.Scheduler.now;
        }
        var _this = _super.call(this, SchedulerAction, now) || this;
        _this.actions = [];
        _this._active = false;
        return _this;
    }
    AsyncScheduler.prototype.flush = function(action) {
        var actions = this.actions;
        if (this._active) {
            actions.push(action);
            return;
        }
        var error;
        this._active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        }while (action = actions.shift());
        this._active = false;
        if (error) {
            while(action = actions.shift()){
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(Scheduler_1.Scheduler);
exports.AsyncScheduler = AsyncScheduler; //# sourceMappingURL=AsyncScheduler.js.map


/***/ }),

/***/ 56185:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var __extends = (void 0) && (void 0).__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.QueueAction = void 0;
var AsyncAction_1 = __webpack_require__(79584);
var QueueAction = function(_super) {
    __extends(QueueAction, _super);
    function QueueAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    QueueAction.prototype.schedule = function(state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay > 0) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.delay = delay;
        this.state = state;
        this.scheduler.flush(this);
        return this;
    };
    QueueAction.prototype.execute = function(state, delay) {
        return delay > 0 || this.closed ? _super.prototype.execute.call(this, state, delay) : this._execute(state, delay);
    };
    QueueAction.prototype.requestAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay != null && delay > 0 || delay == null && this.delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.flush(this);
        return 0;
    };
    return QueueAction;
}(AsyncAction_1.AsyncAction);
exports.QueueAction = QueueAction; //# sourceMappingURL=QueueAction.js.map


/***/ }),

/***/ 26971:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var __extends = (void 0) && (void 0).__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.QueueScheduler = void 0;
var AsyncScheduler_1 = __webpack_require__(10049);
var QueueScheduler = function(_super) {
    __extends(QueueScheduler, _super);
    function QueueScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return QueueScheduler;
}(AsyncScheduler_1.AsyncScheduler);
exports.QueueScheduler = QueueScheduler; //# sourceMappingURL=QueueScheduler.js.map


/***/ }),

/***/ 83690:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var __extends = (void 0) && (void 0).__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.VirtualAction = exports.VirtualTimeScheduler = void 0;
var AsyncAction_1 = __webpack_require__(79584);
var Subscription_1 = __webpack_require__(43851);
var AsyncScheduler_1 = __webpack_require__(10049);
var VirtualTimeScheduler = function(_super) {
    __extends(VirtualTimeScheduler, _super);
    function VirtualTimeScheduler(schedulerActionCtor, maxFrames) {
        if (schedulerActionCtor === void 0) {
            schedulerActionCtor = VirtualAction;
        }
        if (maxFrames === void 0) {
            maxFrames = Infinity;
        }
        var _this = _super.call(this, schedulerActionCtor, function() {
            return _this.frame;
        }) || this;
        _this.maxFrames = maxFrames;
        _this.frame = 0;
        _this.index = -1;
        return _this;
    }
    VirtualTimeScheduler.prototype.flush = function() {
        var _a = this, actions = _a.actions, maxFrames = _a.maxFrames;
        var error;
        var action;
        while((action = actions[0]) && action.delay <= maxFrames){
            actions.shift();
            this.frame = action.delay;
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        }
        if (error) {
            while(action = actions.shift()){
                action.unsubscribe();
            }
            throw error;
        }
    };
    VirtualTimeScheduler.frameTimeFactor = 10;
    return VirtualTimeScheduler;
}(AsyncScheduler_1.AsyncScheduler);
exports.VirtualTimeScheduler = VirtualTimeScheduler;
var VirtualAction = function(_super) {
    __extends(VirtualAction, _super);
    function VirtualAction(scheduler, work, index) {
        if (index === void 0) {
            index = scheduler.index += 1;
        }
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.index = index;
        _this.active = true;
        _this.index = scheduler.index = index;
        return _this;
    }
    VirtualAction.prototype.schedule = function(state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (Number.isFinite(delay)) {
            if (!this.id) {
                return _super.prototype.schedule.call(this, state, delay);
            }
            this.active = false;
            var action = new VirtualAction(this.scheduler, this.work);
            this.add(action);
            return action.schedule(state, delay);
        } else {
            return Subscription_1.Subscription.EMPTY;
        }
    };
    VirtualAction.prototype.requestAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        this.delay = scheduler.frame + delay;
        var actions = scheduler.actions;
        actions.push(this);
        actions.sort(VirtualAction.sortActions);
        return 1;
    };
    VirtualAction.prototype.recycleAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return undefined;
    };
    VirtualAction.prototype._execute = function(state, delay) {
        if (this.active === true) {
            return _super.prototype._execute.call(this, state, delay);
        }
    };
    VirtualAction.sortActions = function(a, b) {
        if (a.delay === b.delay) {
            if (a.index === b.index) {
                return 0;
            } else if (a.index > b.index) {
                return 1;
            } else {
                return -1;
            }
        } else if (a.delay > b.delay) {
            return 1;
        } else {
            return -1;
        }
    };
    return VirtualAction;
}(AsyncAction_1.AsyncAction);
exports.VirtualAction = VirtualAction; //# sourceMappingURL=VirtualTimeScheduler.js.map


/***/ }),

/***/ 38090:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.animationFrame = exports.animationFrameScheduler = void 0;
var AnimationFrameAction_1 = __webpack_require__(79122);
var AnimationFrameScheduler_1 = __webpack_require__(22782);
exports.animationFrameScheduler = new AnimationFrameScheduler_1.AnimationFrameScheduler(AnimationFrameAction_1.AnimationFrameAction);
exports.animationFrame = exports.animationFrameScheduler; //# sourceMappingURL=animationFrame.js.map


/***/ }),

/***/ 46011:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var __read = (void 0) && (void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = (void 0) && (void 0).__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.animationFrameProvider = void 0;
var Subscription_1 = __webpack_require__(43851);
exports.animationFrameProvider = {
    schedule: function(callback) {
        var request = requestAnimationFrame;
        var cancel = cancelAnimationFrame;
        var delegate = exports.animationFrameProvider.delegate;
        if (delegate) {
            request = delegate.requestAnimationFrame;
            cancel = delegate.cancelAnimationFrame;
        }
        var handle = request(function(timestamp) {
            cancel = undefined;
            callback(timestamp);
        });
        return new Subscription_1.Subscription(function() {
            return cancel === null || cancel === void 0 ? void 0 : cancel(handle);
        });
    },
    requestAnimationFrame: function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++){
            args[_i] = arguments[_i];
        }
        var delegate = exports.animationFrameProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.requestAnimationFrame) || requestAnimationFrame).apply(void 0, __spreadArray([], __read(args)));
    },
    cancelAnimationFrame: function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++){
            args[_i] = arguments[_i];
        }
        var delegate = exports.animationFrameProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.cancelAnimationFrame) || cancelAnimationFrame).apply(void 0, __spreadArray([], __read(args)));
    },
    delegate: undefined
}; //# sourceMappingURL=animationFrameProvider.js.map


/***/ }),

/***/ 12126:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.asap = exports.asapScheduler = void 0;
var AsapAction_1 = __webpack_require__(90516);
var AsapScheduler_1 = __webpack_require__(31273);
exports.asapScheduler = new AsapScheduler_1.AsapScheduler(AsapAction_1.AsapAction);
exports.asap = exports.asapScheduler; //# sourceMappingURL=asap.js.map


/***/ }),

/***/ 83970:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.async = exports.asyncScheduler = void 0;
var AsyncAction_1 = __webpack_require__(79584);
var AsyncScheduler_1 = __webpack_require__(10049);
exports.asyncScheduler = new AsyncScheduler_1.AsyncScheduler(AsyncAction_1.AsyncAction);
exports.async = exports.asyncScheduler; //# sourceMappingURL=async.js.map


/***/ }),

/***/ 96416:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.dateTimestampProvider = void 0;
exports.dateTimestampProvider = {
    now: function() {
        return (exports.dateTimestampProvider.delegate || Date).now();
    },
    delegate: undefined
}; //# sourceMappingURL=dateTimestampProvider.js.map


/***/ }),

/***/ 69952:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var __read = (void 0) && (void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = (void 0) && (void 0).__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.immediateProvider = void 0;
var Immediate_1 = __webpack_require__(7105);
var setImmediate = Immediate_1.Immediate.setImmediate, clearImmediate = Immediate_1.Immediate.clearImmediate;
exports.immediateProvider = {
    setImmediate: function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++){
            args[_i] = arguments[_i];
        }
        var delegate = exports.immediateProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.setImmediate) || setImmediate).apply(void 0, __spreadArray([], __read(args)));
    },
    clearImmediate: function(handle) {
        var delegate = exports.immediateProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearImmediate) || clearImmediate)(handle);
    },
    delegate: undefined
}; //# sourceMappingURL=immediateProvider.js.map


/***/ }),

/***/ 15759:
/***/ ((__unused_webpack_module, exports) => {


var __read = (void 0) && (void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = (void 0) && (void 0).__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.intervalProvider = void 0;
exports.intervalProvider = {
    setInterval: function(handler, timeout) {
        var args = [];
        for(var _i = 2; _i < arguments.length; _i++){
            args[_i - 2] = arguments[_i];
        }
        var delegate = exports.intervalProvider.delegate;
        if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) {
            return delegate.setInterval.apply(delegate, __spreadArray([
                handler,
                timeout
            ], __read(args)));
        }
        return setInterval.apply(void 0, __spreadArray([
            handler,
            timeout
        ], __read(args)));
    },
    clearInterval: function(handle) {
        var delegate = exports.intervalProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
    },
    delegate: undefined
}; //# sourceMappingURL=intervalProvider.js.map


/***/ }),

/***/ 73924:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.performanceTimestampProvider = void 0;
exports.performanceTimestampProvider = {
    now: function() {
        return (exports.performanceTimestampProvider.delegate || performance).now();
    },
    delegate: undefined
}; //# sourceMappingURL=performanceTimestampProvider.js.map


/***/ }),

/***/ 46633:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.queue = exports.queueScheduler = void 0;
var QueueAction_1 = __webpack_require__(56185);
var QueueScheduler_1 = __webpack_require__(26971);
exports.queueScheduler = new QueueScheduler_1.QueueScheduler(QueueAction_1.QueueAction);
exports.queue = exports.queueScheduler; //# sourceMappingURL=queue.js.map


/***/ }),

/***/ 57082:
/***/ ((__unused_webpack_module, exports) => {


var __read = (void 0) && (void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = (void 0) && (void 0).__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.timeoutProvider = void 0;
exports.timeoutProvider = {
    setTimeout: function(handler, timeout) {
        var args = [];
        for(var _i = 2; _i < arguments.length; _i++){
            args[_i - 2] = arguments[_i];
        }
        var delegate = exports.timeoutProvider.delegate;
        if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
            return delegate.setTimeout.apply(delegate, __spreadArray([
                handler,
                timeout
            ], __read(args)));
        }
        return setTimeout.apply(void 0, __spreadArray([
            handler,
            timeout
        ], __read(args)));
    },
    clearTimeout: function(handle) {
        var delegate = exports.timeoutProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
    },
    delegate: undefined
}; //# sourceMappingURL=timeoutProvider.js.map


/***/ }),

/***/ 71159:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.iterator = exports.getSymbolIterator = void 0;
function getSymbolIterator() {
    if (typeof Symbol !== "function" || !Symbol.iterator) {
        return "@@iterator";
    }
    return Symbol.iterator;
}
exports.getSymbolIterator = getSymbolIterator;
exports.iterator = getSymbolIterator(); //# sourceMappingURL=iterator.js.map


/***/ }),

/***/ 65183:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.observable = void 0;
exports.observable = function() {
    return typeof Symbol === "function" && Symbol.observable || "@@observable";
}(); //# sourceMappingURL=observable.js.map


/***/ }),

/***/ 51438:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
})); //# sourceMappingURL=types.js.map


/***/ }),

/***/ 15092:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.ArgumentOutOfRangeError = void 0;
var createErrorClass_1 = __webpack_require__(46750);
exports.ArgumentOutOfRangeError = createErrorClass_1.createErrorClass(function(_super) {
    return function ArgumentOutOfRangeErrorImpl() {
        _super(this);
        this.name = "ArgumentOutOfRangeError";
        this.message = "argument out of range";
    };
}); //# sourceMappingURL=ArgumentOutOfRangeError.js.map


/***/ }),

/***/ 10855:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.EmptyError = void 0;
var createErrorClass_1 = __webpack_require__(46750);
exports.EmptyError = createErrorClass_1.createErrorClass(function(_super) {
    return function EmptyErrorImpl() {
        _super(this);
        this.name = "EmptyError";
        this.message = "no elements in sequence";
    };
}); //# sourceMappingURL=EmptyError.js.map


/***/ }),

/***/ 7105:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.TestTools = exports.Immediate = void 0;
var nextHandle = 1;
var resolved;
var activeHandles = {};
function findAndClearHandle(handle) {
    if (handle in activeHandles) {
        delete activeHandles[handle];
        return true;
    }
    return false;
}
exports.Immediate = {
    setImmediate: function(cb) {
        var handle = nextHandle++;
        activeHandles[handle] = true;
        if (!resolved) {
            resolved = Promise.resolve();
        }
        resolved.then(function() {
            return findAndClearHandle(handle) && cb();
        });
        return handle;
    },
    clearImmediate: function(handle) {
        findAndClearHandle(handle);
    }
};
exports.TestTools = {
    pending: function() {
        return Object.keys(activeHandles).length;
    }
}; //# sourceMappingURL=Immediate.js.map


/***/ }),

/***/ 60243:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.NotFoundError = void 0;
var createErrorClass_1 = __webpack_require__(46750);
exports.NotFoundError = createErrorClass_1.createErrorClass(function(_super) {
    return function NotFoundErrorImpl(message) {
        _super(this);
        this.name = "NotFoundError";
        this.message = message;
    };
}); //# sourceMappingURL=NotFoundError.js.map


/***/ }),

/***/ 73398:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.ObjectUnsubscribedError = void 0;
var createErrorClass_1 = __webpack_require__(46750);
exports.ObjectUnsubscribedError = createErrorClass_1.createErrorClass(function(_super) {
    return function ObjectUnsubscribedErrorImpl() {
        _super(this);
        this.name = "ObjectUnsubscribedError";
        this.message = "object unsubscribed";
    };
}); //# sourceMappingURL=ObjectUnsubscribedError.js.map


/***/ }),

/***/ 15750:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.SequenceError = void 0;
var createErrorClass_1 = __webpack_require__(46750);
exports.SequenceError = createErrorClass_1.createErrorClass(function(_super) {
    return function SequenceErrorImpl(message) {
        _super(this);
        this.name = "SequenceError";
        this.message = message;
    };
}); //# sourceMappingURL=SequenceError.js.map


/***/ }),

/***/ 4267:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.UnsubscriptionError = void 0;
var createErrorClass_1 = __webpack_require__(46750);
exports.UnsubscriptionError = createErrorClass_1.createErrorClass(function(_super) {
    return function UnsubscriptionErrorImpl(errors) {
        _super(this);
        this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i) {
            return i + 1 + ") " + err.toString();
        }).join("\n  ") : "";
        this.name = "UnsubscriptionError";
        this.errors = errors;
    };
}); //# sourceMappingURL=UnsubscriptionError.js.map


/***/ }),

/***/ 3173:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.popNumber = exports.popScheduler = exports.popResultSelector = void 0;
var isFunction_1 = __webpack_require__(90422);
var isScheduler_1 = __webpack_require__(50543);
function last(arr) {
    return arr[arr.length - 1];
}
function popResultSelector(args) {
    return isFunction_1.isFunction(last(args)) ? args.pop() : undefined;
}
exports.popResultSelector = popResultSelector;
function popScheduler(args) {
    return isScheduler_1.isScheduler(last(args)) ? args.pop() : undefined;
}
exports.popScheduler = popScheduler;
function popNumber(args, defaultValue) {
    return typeof last(args) === "number" ? args.pop() : defaultValue;
}
exports.popNumber = popNumber; //# sourceMappingURL=args.js.map


/***/ }),

/***/ 3996:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.argsArgArrayOrObject = void 0;
var isArray = Array.isArray;
var getPrototypeOf = Object.getPrototypeOf, objectProto = Object.prototype, getKeys = Object.keys;
function argsArgArrayOrObject(args) {
    if (args.length === 1) {
        var first_1 = args[0];
        if (isArray(first_1)) {
            return {
                args: first_1,
                keys: null
            };
        }
        if (isPOJO(first_1)) {
            var keys = getKeys(first_1);
            return {
                args: keys.map(function(key) {
                    return first_1[key];
                }),
                keys: keys
            };
        }
    }
    return {
        args: args,
        keys: null
    };
}
exports.argsArgArrayOrObject = argsArgArrayOrObject;
function isPOJO(obj) {
    return obj && typeof obj === "object" && getPrototypeOf(obj) === objectProto;
} //# sourceMappingURL=argsArgArrayOrObject.js.map


/***/ }),

/***/ 1643:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.argsOrArgArray = void 0;
var isArray = Array.isArray;
function argsOrArgArray(args) {
    return args.length === 1 && isArray(args[0]) ? args[0] : args;
}
exports.argsOrArgArray = argsOrArgArray; //# sourceMappingURL=argsOrArgArray.js.map


/***/ }),

/***/ 86889:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.arrRemove = void 0;
function arrRemove(arr, item) {
    if (arr) {
        var index = arr.indexOf(item);
        0 <= index && arr.splice(index, 1);
    }
}
exports.arrRemove = arrRemove; //# sourceMappingURL=arrRemove.js.map


/***/ }),

/***/ 46750:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.createErrorClass = void 0;
function createErrorClass(createImpl) {
    var _super = function(instance) {
        Error.call(instance);
        instance.stack = new Error().stack;
    };
    var ctorFunc = createImpl(_super);
    ctorFunc.prototype = Object.create(Error.prototype);
    ctorFunc.prototype.constructor = ctorFunc;
    return ctorFunc;
}
exports.createErrorClass = createErrorClass; //# sourceMappingURL=createErrorClass.js.map


/***/ }),

/***/ 21743:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.createObject = void 0;
function createObject(keys, values) {
    return keys.reduce(function(result, key, i) {
        return result[key] = values[i], result;
    }, {});
}
exports.createObject = createObject; //# sourceMappingURL=createObject.js.map


/***/ }),

/***/ 95984:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.captureError = exports.errorContext = void 0;
var config_1 = __webpack_require__(17650);
var context = null;
function errorContext(cb) {
    if (config_1.config.useDeprecatedSynchronousErrorHandling) {
        var isRoot = !context;
        if (isRoot) {
            context = {
                errorThrown: false,
                error: null
            };
        }
        cb();
        if (isRoot) {
            var _a = context, errorThrown = _a.errorThrown, error = _a.error;
            context = null;
            if (errorThrown) {
                throw error;
            }
        }
    } else {
        cb();
    }
}
exports.errorContext = errorContext;
function captureError(err) {
    if (config_1.config.useDeprecatedSynchronousErrorHandling && context) {
        context.errorThrown = true;
        context.error = err;
    }
}
exports.captureError = captureError; //# sourceMappingURL=errorContext.js.map


/***/ }),

/***/ 72854:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.executeSchedule = void 0;
function executeSchedule(parentSubscription, scheduler, work, delay, repeat) {
    if (delay === void 0) {
        delay = 0;
    }
    if (repeat === void 0) {
        repeat = false;
    }
    var scheduleSubscription = scheduler.schedule(function() {
        work();
        if (repeat) {
            parentSubscription.add(this.schedule(null, delay));
        } else {
            this.unsubscribe();
        }
    }, delay);
    parentSubscription.add(scheduleSubscription);
    if (!repeat) {
        return scheduleSubscription;
    }
}
exports.executeSchedule = executeSchedule; //# sourceMappingURL=executeSchedule.js.map


/***/ }),

/***/ 13893:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.identity = void 0;
function identity(x) {
    return x;
}
exports.identity = identity; //# sourceMappingURL=identity.js.map


/***/ }),

/***/ 93669:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isArrayLike = void 0;
exports.isArrayLike = function(x) {
    return x && typeof x.length === "number" && typeof x !== "function";
}; //# sourceMappingURL=isArrayLike.js.map


/***/ }),

/***/ 75861:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isAsyncIterable = void 0;
var isFunction_1 = __webpack_require__(90422);
function isAsyncIterable(obj) {
    return Symbol.asyncIterator && isFunction_1.isFunction(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}
exports.isAsyncIterable = isAsyncIterable; //# sourceMappingURL=isAsyncIterable.js.map


/***/ }),

/***/ 27169:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isValidDate = void 0;
function isValidDate(value) {
    return value instanceof Date && !isNaN(value);
}
exports.isValidDate = isValidDate; //# sourceMappingURL=isDate.js.map


/***/ }),

/***/ 90422:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isFunction = void 0;
function isFunction(value) {
    return typeof value === "function";
}
exports.isFunction = isFunction; //# sourceMappingURL=isFunction.js.map


/***/ }),

/***/ 32645:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isInteropObservable = void 0;
var observable_1 = __webpack_require__(65183);
var isFunction_1 = __webpack_require__(90422);
function isInteropObservable(input) {
    return isFunction_1.isFunction(input[observable_1.observable]);
}
exports.isInteropObservable = isInteropObservable; //# sourceMappingURL=isInteropObservable.js.map


/***/ }),

/***/ 42203:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isIterable = void 0;
var iterator_1 = __webpack_require__(71159);
var isFunction_1 = __webpack_require__(90422);
function isIterable(input) {
    return isFunction_1.isFunction(input === null || input === void 0 ? void 0 : input[iterator_1.iterator]);
}
exports.isIterable = isIterable; //# sourceMappingURL=isIterable.js.map


/***/ }),

/***/ 44897:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isObservable = void 0;
var Observable_1 = __webpack_require__(89043);
var isFunction_1 = __webpack_require__(90422);
function isObservable(obj) {
    return !!obj && (obj instanceof Observable_1.Observable || isFunction_1.isFunction(obj.lift) && isFunction_1.isFunction(obj.subscribe));
}
exports.isObservable = isObservable; //# sourceMappingURL=isObservable.js.map


/***/ }),

/***/ 57984:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isPromise = void 0;
var isFunction_1 = __webpack_require__(90422);
function isPromise(value) {
    return isFunction_1.isFunction(value === null || value === void 0 ? void 0 : value.then);
}
exports.isPromise = isPromise; //# sourceMappingURL=isPromise.js.map


/***/ }),

/***/ 21999:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var __generator = (void 0) && (void 0).__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
var __await = (void 0) && (void 0).__await || function(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
};
var __asyncGenerator = (void 0) && (void 0).__asyncGenerator || function(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isReadableStreamLike = exports.readableStreamLikeToAsyncGenerator = void 0;
var isFunction_1 = __webpack_require__(90422);
function readableStreamLikeToAsyncGenerator(readableStream) {
    return __asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
        var reader, _a, value, done;
        return __generator(this, function(_b) {
            switch(_b.label){
                case 0:
                    reader = readableStream.getReader();
                    _b.label = 1;
                case 1:
                    _b.trys.push([
                        1,
                        ,
                        9,
                        10
                    ]);
                    _b.label = 2;
                case 2:
                    if (false) {}
                    return [
                        4,
                        __await(reader.read())
                    ];
                case 3:
                    _a = _b.sent(), value = _a.value, done = _a.done;
                    if (!done) return [
                        3,
                        5
                    ];
                    return [
                        4,
                        __await(void 0)
                    ];
                case 4:
                    return [
                        2,
                        _b.sent()
                    ];
                case 5:
                    return [
                        4,
                        __await(value)
                    ];
                case 6:
                    return [
                        4,
                        _b.sent()
                    ];
                case 7:
                    _b.sent();
                    return [
                        3,
                        2
                    ];
                case 8:
                    return [
                        3,
                        10
                    ];
                case 9:
                    reader.releaseLock();
                    return [
                        7
                    ];
                case 10:
                    return [
                        2
                    ];
            }
        });
    });
}
exports.readableStreamLikeToAsyncGenerator = readableStreamLikeToAsyncGenerator;
function isReadableStreamLike(obj) {
    return isFunction_1.isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
}
exports.isReadableStreamLike = isReadableStreamLike; //# sourceMappingURL=isReadableStreamLike.js.map


/***/ }),

/***/ 50543:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isScheduler = void 0;
var isFunction_1 = __webpack_require__(90422);
function isScheduler(value) {
    return value && isFunction_1.isFunction(value.schedule);
}
exports.isScheduler = isScheduler; //# sourceMappingURL=isScheduler.js.map


/***/ }),

/***/ 76189:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.operate = exports.hasLift = void 0;
var isFunction_1 = __webpack_require__(90422);
function hasLift(source) {
    return isFunction_1.isFunction(source === null || source === void 0 ? void 0 : source.lift);
}
exports.hasLift = hasLift;
function operate(init) {
    return function(source) {
        if (hasLift(source)) {
            return source.lift(function(liftedSource) {
                try {
                    return init(liftedSource, this);
                } catch (err) {
                    this.error(err);
                }
            });
        }
        throw new TypeError("Unable to lift unknown Observable type");
    };
}
exports.operate = operate; //# sourceMappingURL=lift.js.map


/***/ }),

/***/ 69661:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var __read = (void 0) && (void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = (void 0) && (void 0).__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.mapOneOrManyArgs = void 0;
var map_1 = __webpack_require__(56414);
var isArray = Array.isArray;
function callOrApply(fn, args) {
    return isArray(args) ? fn.apply(void 0, __spreadArray([], __read(args))) : fn(args);
}
function mapOneOrManyArgs(fn) {
    return map_1.map(function(args) {
        return callOrApply(fn, args);
    });
}
exports.mapOneOrManyArgs = mapOneOrManyArgs; //# sourceMappingURL=mapOneOrManyArgs.js.map


/***/ }),

/***/ 81543:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.noop = void 0;
function noop() {}
exports.noop = noop; //# sourceMappingURL=noop.js.map


/***/ }),

/***/ 88974:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.not = void 0;
function not(pred, thisArg) {
    return function(value, index) {
        return !pred.call(thisArg, value, index);
    };
}
exports.not = not; //# sourceMappingURL=not.js.map


/***/ }),

/***/ 9492:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.pipeFromArray = exports.pipe = void 0;
var identity_1 = __webpack_require__(13893);
function pipe() {
    var fns = [];
    for(var _i = 0; _i < arguments.length; _i++){
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
exports.pipe = pipe;
function pipeFromArray(fns) {
    if (fns.length === 0) {
        return identity_1.identity;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function(prev, fn) {
            return fn(prev);
        }, input);
    };
}
exports.pipeFromArray = pipeFromArray; //# sourceMappingURL=pipe.js.map


/***/ }),

/***/ 71411:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.reportUnhandledError = void 0;
var config_1 = __webpack_require__(17650);
var timeoutProvider_1 = __webpack_require__(57082);
function reportUnhandledError(err) {
    timeoutProvider_1.timeoutProvider.setTimeout(function() {
        var onUnhandledError = config_1.config.onUnhandledError;
        if (onUnhandledError) {
            onUnhandledError(err);
        } else {
            throw err;
        }
    });
}
exports.reportUnhandledError = reportUnhandledError; //# sourceMappingURL=reportUnhandledError.js.map


/***/ }),

/***/ 79308:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.createInvalidObservableTypeError = void 0;
function createInvalidObservableTypeError(input) {
    return new TypeError("You provided " + (input !== null && typeof input === "object" ? "an invalid object" : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
exports.createInvalidObservableTypeError = createInvalidObservableTypeError; //# sourceMappingURL=throwUnobservableError.js.map


/***/ }),

/***/ 32968:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
__webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = exports.UI = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = exports.hX = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = void 0;
__webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = void 0;
__webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = void 0;
var audit_1 = __webpack_require__(40685);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return audit_1.audit;
    }
});
var auditTime_1 = __webpack_require__(79483);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return auditTime_1.auditTime;
    }
});
var buffer_1 = __webpack_require__(43974);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return buffer_1.buffer;
    }
});
var bufferCount_1 = __webpack_require__(26530);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return bufferCount_1.bufferCount;
    }
});
var bufferTime_1 = __webpack_require__(55100);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return bufferTime_1.bufferTime;
    }
});
var bufferToggle_1 = __webpack_require__(40552);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return bufferToggle_1.bufferToggle;
    }
});
var bufferWhen_1 = __webpack_require__(23879);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return bufferWhen_1.bufferWhen;
    }
});
var catchError_1 = __webpack_require__(2473);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return catchError_1.catchError;
    }
});
var combineAll_1 = __webpack_require__(56641);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return combineAll_1.combineAll;
    }
});
var combineLatestAll_1 = __webpack_require__(76989);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return combineLatestAll_1.combineLatestAll;
    }
});
var combineLatest_1 = __webpack_require__(80398);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return combineLatest_1.combineLatest;
    }
});
var combineLatestWith_1 = __webpack_require__(84558);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return combineLatestWith_1.combineLatestWith;
    }
});
var concat_1 = __webpack_require__(992);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return concat_1.concat;
    }
});
var concatAll_1 = __webpack_require__(90319);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return concatAll_1.concatAll;
    }
});
var concatMap_1 = __webpack_require__(55678);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return concatMap_1.concatMap;
    }
});
var concatMapTo_1 = __webpack_require__(64591);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return concatMapTo_1.concatMapTo;
    }
});
var concatWith_1 = __webpack_require__(58246);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return concatWith_1.concatWith;
    }
});
var connect_1 = __webpack_require__(77417);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return connect_1.connect;
    }
});
var count_1 = __webpack_require__(1279);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return count_1.count;
    }
});
var debounce_1 = __webpack_require__(94560);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return debounce_1.debounce;
    }
});
var debounceTime_1 = __webpack_require__(4518);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return debounceTime_1.debounceTime;
    }
});
var defaultIfEmpty_1 = __webpack_require__(9836);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return defaultIfEmpty_1.defaultIfEmpty;
    }
});
var delay_1 = __webpack_require__(19162);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return delay_1.delay;
    }
});
var delayWhen_1 = __webpack_require__(47108);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return delayWhen_1.delayWhen;
    }
});
var dematerialize_1 = __webpack_require__(14510);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return dematerialize_1.dematerialize;
    }
});
var distinct_1 = __webpack_require__(84338);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return distinct_1.distinct;
    }
});
var distinctUntilChanged_1 = __webpack_require__(3537);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return distinctUntilChanged_1.distinctUntilChanged;
    }
});
var distinctUntilKeyChanged_1 = __webpack_require__(82505);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return distinctUntilKeyChanged_1.distinctUntilKeyChanged;
    }
});
var elementAt_1 = __webpack_require__(90881);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return elementAt_1.elementAt;
    }
});
var endWith_1 = __webpack_require__(40277);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return endWith_1.endWith;
    }
});
var every_1 = __webpack_require__(81498);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return every_1.every;
    }
});
var exhaust_1 = __webpack_require__(32277);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return exhaust_1.exhaust;
    }
});
var exhaustAll_1 = __webpack_require__(22573);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return exhaustAll_1.exhaustAll;
    }
});
var exhaustMap_1 = __webpack_require__(18930);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return exhaustMap_1.exhaustMap;
    }
});
var expand_1 = __webpack_require__(19901);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return expand_1.expand;
    }
});
var filter_1 = __webpack_require__(83099);
Object.defineProperty(exports, "hX", ({
    enumerable: true,
    get: function() {
        return filter_1.filter;
    }
}));
var finalize_1 = __webpack_require__(87409);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return finalize_1.finalize;
    }
});
var find_1 = __webpack_require__(85395);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return find_1.find;
    }
});
var findIndex_1 = __webpack_require__(42862);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return findIndex_1.findIndex;
    }
});
var first_1 = __webpack_require__(248);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return first_1.first;
    }
});
var groupBy_1 = __webpack_require__(94536);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return groupBy_1.groupBy;
    }
});
var ignoreElements_1 = __webpack_require__(24764);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return ignoreElements_1.ignoreElements;
    }
});
var isEmpty_1 = __webpack_require__(48859);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return isEmpty_1.isEmpty;
    }
});
var last_1 = __webpack_require__(94105);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return last_1.last;
    }
});
var map_1 = __webpack_require__(56414);
Object.defineProperty(exports, "UI", ({
    enumerable: true,
    get: function() {
        return map_1.map;
    }
}));
var mapTo_1 = __webpack_require__(36214);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return mapTo_1.mapTo;
    }
});
var materialize_1 = __webpack_require__(98213);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return materialize_1.materialize;
    }
});
var max_1 = __webpack_require__(54226);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return max_1.max;
    }
});
var merge_1 = __webpack_require__(79004);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return merge_1.merge;
    }
});
var mergeAll_1 = __webpack_require__(63770);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return mergeAll_1.mergeAll;
    }
});
var flatMap_1 = __webpack_require__(95293);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return flatMap_1.flatMap;
    }
});
var mergeMap_1 = __webpack_require__(49891);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return mergeMap_1.mergeMap;
    }
});
var mergeMapTo_1 = __webpack_require__(66578);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return mergeMapTo_1.mergeMapTo;
    }
});
var mergeScan_1 = __webpack_require__(33382);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return mergeScan_1.mergeScan;
    }
});
var mergeWith_1 = __webpack_require__(45046);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return mergeWith_1.mergeWith;
    }
});
var min_1 = __webpack_require__(1982);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return min_1.min;
    }
});
var multicast_1 = __webpack_require__(39965);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return multicast_1.multicast;
    }
});
var observeOn_1 = __webpack_require__(93409);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return observeOn_1.observeOn;
    }
});
var onErrorResumeNextWith_1 = __webpack_require__(20290);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return onErrorResumeNextWith_1.onErrorResumeNext;
    }
});
var pairwise_1 = __webpack_require__(48716);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return pairwise_1.pairwise;
    }
});
var partition_1 = __webpack_require__(38621);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return partition_1.partition;
    }
});
var pluck_1 = __webpack_require__(666);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return pluck_1.pluck;
    }
});
var publish_1 = __webpack_require__(55138);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return publish_1.publish;
    }
});
var publishBehavior_1 = __webpack_require__(81167);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return publishBehavior_1.publishBehavior;
    }
});
var publishLast_1 = __webpack_require__(54005);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return publishLast_1.publishLast;
    }
});
var publishReplay_1 = __webpack_require__(30492);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return publishReplay_1.publishReplay;
    }
});
var race_1 = __webpack_require__(74415);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return race_1.race;
    }
});
var raceWith_1 = __webpack_require__(58405);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return raceWith_1.raceWith;
    }
});
var reduce_1 = __webpack_require__(5744);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return reduce_1.reduce;
    }
});
var repeat_1 = __webpack_require__(18559);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return repeat_1.repeat;
    }
});
var repeatWhen_1 = __webpack_require__(22882);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return repeatWhen_1.repeatWhen;
    }
});
var retry_1 = __webpack_require__(28604);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return retry_1.retry;
    }
});
var retryWhen_1 = __webpack_require__(402);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return retryWhen_1.retryWhen;
    }
});
var refCount_1 = __webpack_require__(42780);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return refCount_1.refCount;
    }
});
var sample_1 = __webpack_require__(9237);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return sample_1.sample;
    }
});
var sampleTime_1 = __webpack_require__(23682);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return sampleTime_1.sampleTime;
    }
});
var scan_1 = __webpack_require__(66413);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return scan_1.scan;
    }
});
var sequenceEqual_1 = __webpack_require__(27045);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return sequenceEqual_1.sequenceEqual;
    }
});
var share_1 = __webpack_require__(92090);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return share_1.share;
    }
});
var shareReplay_1 = __webpack_require__(2316);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return shareReplay_1.shareReplay;
    }
});
var single_1 = __webpack_require__(95678);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return single_1.single;
    }
});
var skip_1 = __webpack_require__(43134);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return skip_1.skip;
    }
});
var skipLast_1 = __webpack_require__(50181);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return skipLast_1.skipLast;
    }
});
var skipUntil_1 = __webpack_require__(70913);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return skipUntil_1.skipUntil;
    }
});
var skipWhile_1 = __webpack_require__(87114);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return skipWhile_1.skipWhile;
    }
});
var startWith_1 = __webpack_require__(89975);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return startWith_1.startWith;
    }
});
var subscribeOn_1 = __webpack_require__(66771);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return subscribeOn_1.subscribeOn;
    }
});
var switchAll_1 = __webpack_require__(94960);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return switchAll_1.switchAll;
    }
});
var switchMap_1 = __webpack_require__(23506);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return switchMap_1.switchMap;
    }
});
var switchMapTo_1 = __webpack_require__(30048);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return switchMapTo_1.switchMapTo;
    }
});
var switchScan_1 = __webpack_require__(32978);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return switchScan_1.switchScan;
    }
});
var take_1 = __webpack_require__(96920);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return take_1.take;
    }
});
var takeLast_1 = __webpack_require__(21030);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return takeLast_1.takeLast;
    }
});
var takeUntil_1 = __webpack_require__(30756);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return takeUntil_1.takeUntil;
    }
});
var takeWhile_1 = __webpack_require__(86038);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return takeWhile_1.takeWhile;
    }
});
var tap_1 = __webpack_require__(22004);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return tap_1.tap;
    }
});
var throttle_1 = __webpack_require__(88142);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return throttle_1.throttle;
    }
});
var throttleTime_1 = __webpack_require__(85035);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return throttleTime_1.throttleTime;
    }
});
var throwIfEmpty_1 = __webpack_require__(54374);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return throwIfEmpty_1.throwIfEmpty;
    }
});
var timeInterval_1 = __webpack_require__(22512);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return timeInterval_1.timeInterval;
    }
});
var timeout_1 = __webpack_require__(47527);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return timeout_1.timeout;
    }
});
var timeoutWith_1 = __webpack_require__(82091);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return timeoutWith_1.timeoutWith;
    }
});
var timestamp_1 = __webpack_require__(51768);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return timestamp_1.timestamp;
    }
});
var toArray_1 = __webpack_require__(81740);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return toArray_1.toArray;
    }
});
var window_1 = __webpack_require__(48561);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return window_1.window;
    }
});
var windowCount_1 = __webpack_require__(75090);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return windowCount_1.windowCount;
    }
});
var windowTime_1 = __webpack_require__(55265);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return windowTime_1.windowTime;
    }
});
var windowToggle_1 = __webpack_require__(91972);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return windowToggle_1.windowToggle;
    }
});
var windowWhen_1 = __webpack_require__(5676);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return windowWhen_1.windowWhen;
    }
});
var withLatestFrom_1 = __webpack_require__(52126);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return withLatestFrom_1.withLatestFrom;
    }
});
var zip_1 = __webpack_require__(14514);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return zip_1.zip;
    }
});
var zipAll_1 = __webpack_require__(49366);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return zipAll_1.zipAll;
    }
});
var zipWith_1 = __webpack_require__(16410);
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return zipWith_1.zipWith;
    }
}); //# sourceMappingURL=index.js.map


/***/ }),

/***/ 12662:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const os = __webpack_require__(22037);
const tty = __webpack_require__(76224);
const hasFlag = __webpack_require__(29864);
const { env } = process;
let forceColor;
if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false") || hasFlag("color=never")) {
    forceColor = 0;
} else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
    forceColor = 1;
}
if ("FORCE_COLOR" in env) {
    if (env.FORCE_COLOR === "true") {
        forceColor = 1;
    } else if (env.FORCE_COLOR === "false") {
        forceColor = 0;
    } else {
        forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
    }
}
function translateLevel(level) {
    if (level === 0) {
        return false;
    }
    return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
    };
}
function supportsColor(haveStream, streamIsTTY) {
    if (forceColor === 0) {
        return 0;
    }
    if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
        return 3;
    }
    if (hasFlag("color=256")) {
        return 2;
    }
    if (haveStream && !streamIsTTY && forceColor === undefined) {
        return 0;
    }
    const min = forceColor || 0;
    if (env.TERM === "dumb") {
        return min;
    }
    if (process.platform === "win32") {
        // Windows 10 build 10586 is the first Windows release that supports 256 colors.
        // Windows 10 build 14931 is the first release that supports 16m/TrueColor.
        const osRelease = os.release().split(".");
        if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
            return Number(osRelease[2]) >= 14931 ? 3 : 2;
        }
        return 1;
    }
    if ("CI" in env) {
        if ([
            "TRAVIS",
            "CIRCLECI",
            "APPVEYOR",
            "GITLAB_CI",
            "GITHUB_ACTIONS",
            "BUILDKITE"
        ].some((sign)=>sign in env) || env.CI_NAME === "codeship") {
            return 1;
        }
        return min;
    }
    if ("TEAMCITY_VERSION" in env) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
    }
    if (env.COLORTERM === "truecolor") {
        return 3;
    }
    if ("TERM_PROGRAM" in env) {
        const version = parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch(env.TERM_PROGRAM){
            case "iTerm.app":
                return version >= 3 ? 3 : 2;
            case "Apple_Terminal":
                return 2;
        }
    }
    if (/-256(color)?$/i.test(env.TERM)) {
        return 2;
    }
    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
        return 1;
    }
    if ("COLORTERM" in env) {
        return 1;
    }
    return min;
}
function getSupportLevel(stream) {
    const level = supportsColor(stream, stream && stream.isTTY);
    return translateLevel(level);
}
module.exports = {
    supportsColor: getSupportLevel,
    stdout: translateLevel(supportsColor(true, tty.isatty(1))),
    stderr: translateLevel(supportsColor(true, tty.isatty(2)))
};


/***/ }),

/***/ 85480:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  e: () => (/* binding */ dist_createClient)
});

// UNUSED EXPORTS: groq

;// CONCATENATED MODULE: ./node_modules/get-it/dist/_chunks/defaultOptionsValidator-733a091f.js
const isReactNative = typeof navigator === "undefined" ? false : navigator.product === "ReactNative";
const defaultOptions = {
    timeout: isReactNative ? 6e4 : 12e4
};
const processOptions = function processOptions2(opts) {
    const options = {
        ...defaultOptions,
        ...typeof opts === "string" ? {
            url: opts
        } : opts
    };
    const { searchParams } = new URL(options.url, "http://localhost");
    options.timeout = normalizeTimeout(options.timeout);
    if (options.query) {
        for (const [key, value] of Object.entries(options.query)){
            if (value !== void 0) {
                if (Array.isArray(value)) {
                    for (const v of value){
                        searchParams.append(key, v);
                    }
                } else {
                    searchParams.append(key, value);
                }
            }
        }
    }
    const [url] = options.url.split("?");
    const search = searchParams.toString();
    if (search) {
        options.url = "".concat(url, "?").concat(search);
    }
    options.method = options.body && !options.method ? "POST" : (options.method || "GET").toUpperCase();
    return options;
};
function normalizeTimeout(time) {
    if (time === false || time === 0) {
        return false;
    }
    if (time.connect || time.socket) {
        return time;
    }
    const delay = Number(time);
    if (isNaN(delay)) {
        return normalizeTimeout(defaultOptions.timeout);
    }
    return {
        connect: delay,
        socket: delay
    };
}
const validUrl = /^https?:\/\//i;
const validateOptions = function validateOptions2(options) {
    if (!validUrl.test(options.url)) {
        throw new Error('"'.concat(options.url, '" is not a valid URL'));
    }
};
 //# sourceMappingURL=defaultOptionsValidator-733a091f.js.map

;// CONCATENATED MODULE: ./node_modules/get-it/dist/_chunks/createRequester-99d9f284.js

const middlewareReducer = (middleware)=>function applyMiddleware(hook, defaultValue) {
        const bailEarly = hook === "onError";
        let value = defaultValue;
        for(var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
            args[_key - 2] = arguments[_key];
        }
        for(let i = 0; i < middleware[hook].length; i++){
            const handler = middleware[hook][i];
            value = handler(value, ...args);
            if (bailEarly && !value) {
                break;
            }
        }
        return value;
    };
function createPubSub() {
    const subscribers = /* @__PURE__ */ Object.create(null);
    let nextId = 0;
    function subscribe(subscriber) {
        const id = nextId++;
        subscribers[id] = subscriber;
        return function unsubscribe() {
            delete subscribers[id];
        };
    }
    function publish(event) {
        for(const id in subscribers){
            subscribers[id](event);
        }
    }
    return {
        publish,
        subscribe
    };
}
const channelNames = [
    "request",
    "response",
    "progress",
    "error",
    "abort"
];
const middlehooks = [
    "processOptions",
    "validateOptions",
    "interceptRequest",
    "finalizeOptions",
    "onRequest",
    "onResponse",
    "onError",
    "onReturn",
    "onHeaders"
];
function createRequester(initMiddleware, httpRequest) {
    const loadedMiddleware = [];
    const middleware = middlehooks.reduce((ware, name)=>{
        ware[name] = ware[name] || [];
        return ware;
    }, {
        processOptions: [
            processOptions
        ],
        validateOptions: [
            validateOptions
        ]
    });
    function request(opts) {
        const onResponse = (reqErr, res, ctx)=>{
            let error = reqErr;
            let response = res;
            if (!error) {
                try {
                    response = applyMiddleware("onResponse", res, ctx);
                } catch (err) {
                    response = null;
                    error = err;
                }
            }
            error = error && applyMiddleware("onError", error, ctx);
            if (error) {
                channels.error.publish(error);
            } else if (response) {
                channels.response.publish(response);
            }
        };
        const channels = channelNames.reduce((target, name)=>{
            target[name] = createPubSub();
            return target;
        }, {});
        const applyMiddleware = middlewareReducer(middleware);
        const options = applyMiddleware("processOptions", opts);
        applyMiddleware("validateOptions", options);
        const context = {
            options,
            channels,
            applyMiddleware
        };
        let ongoingRequest;
        const unsubscribe = channels.request.subscribe((ctx)=>{
            ongoingRequest = httpRequest(ctx, (err, res)=>onResponse(err, res, ctx));
        });
        channels.abort.subscribe(()=>{
            unsubscribe();
            if (ongoingRequest) {
                ongoingRequest.abort();
            }
        });
        const returnValue = applyMiddleware("onReturn", channels, context);
        if (returnValue === channels) {
            channels.request.publish(context);
        }
        return returnValue;
    }
    request.use = function use(newMiddleware) {
        if (!newMiddleware) {
            throw new Error("Tried to add middleware that resolved to falsey value");
        }
        if (typeof newMiddleware === "function") {
            throw new Error("Tried to add middleware that was a function. It probably expects you to pass options to it.");
        }
        if (newMiddleware.onReturn && middleware.onReturn.length > 0) {
            throw new Error("Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event");
        }
        middlehooks.forEach((key)=>{
            if (newMiddleware[key]) {
                middleware[key].push(newMiddleware[key]);
            }
        });
        loadedMiddleware.push(newMiddleware);
        return request;
    };
    request.clone = ()=>createRequester(loadedMiddleware, httpRequest);
    initMiddleware.forEach(request.use);
    return request;
}
 //# sourceMappingURL=createRequester-99d9f284.js.map

// EXTERNAL MODULE: ./node_modules/parse-headers/parse-headers.js
var parse_headers = __webpack_require__(47597);
;// CONCATENATED MODULE: ./node_modules/get-it/dist/index.react-server.js


var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField = (obj, key, value)=>{
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
};
var __accessCheck = (obj, member, msg)=>{
    if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter)=>{
    __accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value)=>{
    if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter)=>{
    __accessCheck(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
};
var _method, _url, _resHeaders, _headers, _controller, _init, _useAbortSignal;
class FetchXhr {
    constructor(){
        /**
     * Public interface, interop with real XMLHttpRequest
     */ __publicField(this, "onabort");
        __publicField(this, "onerror");
        __publicField(this, "onreadystatechange");
        __publicField(this, "ontimeout");
        /**
     * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
     */ __publicField(this, "readyState", 0);
        __publicField(this, "response");
        __publicField(this, "responseText");
        __publicField(this, "responseType", "");
        __publicField(this, "status");
        __publicField(this, "statusText");
        __publicField(this, "withCredentials");
        /**
     * Private implementation details
     */ __privateAdd(this, _method, void 0);
        __privateAdd(this, _url, void 0);
        __privateAdd(this, _resHeaders, void 0);
        __privateAdd(this, _headers, {});
        __privateAdd(this, _controller, void 0);
        __privateAdd(this, _init, {});
        __privateAdd(this, _useAbortSignal, void 0);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars -- _async is only declared for typings compatibility
    open(method, url, _async) {
        __privateSet(this, _method, method);
        __privateSet(this, _url, url);
        __privateSet(this, _resHeaders, "");
        this.readyState = 1;
        this.onreadystatechange();
        __privateSet(this, _controller, void 0);
    }
    abort() {
        if (__privateGet(this, _controller)) {
            __privateGet(this, _controller).abort();
        }
    }
    getAllResponseHeaders() {
        return __privateGet(this, _resHeaders);
    }
    setRequestHeader(name, value) {
        __privateGet(this, _headers)[name] = value;
    }
    // Allow setting extra fetch init options, needed for runtimes such as Vercel Edge to set `cache` and other options in React Server Components
    setInit(init) {
        let useAbortSignal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        __privateSet(this, _init, init);
        __privateSet(this, _useAbortSignal, useAbortSignal);
    }
    send(body) {
        const textBody = this.responseType !== "arraybuffer";
        const options = {
            ...__privateGet(this, _init),
            method: __privateGet(this, _method),
            headers: __privateGet(this, _headers),
            body
        };
        if (typeof AbortController === "function" && __privateGet(this, _useAbortSignal)) {
            __privateSet(this, _controller, new AbortController());
            if (typeof EventTarget !== "undefined" && __privateGet(this, _controller).signal instanceof EventTarget) {
                options.signal = __privateGet(this, _controller).signal;
            }
        }
        if (typeof document !== "undefined") {
            options.credentials = this.withCredentials ? "include" : "omit";
        }
        fetch(__privateGet(this, _url), options).then((res)=>{
            res.headers.forEach((value, key)=>{
                __privateSet(this, _resHeaders, __privateGet(this, _resHeaders) + "".concat(key, ": ").concat(value, "\r\n"));
            });
            this.status = res.status;
            this.statusText = res.statusText;
            this.readyState = 3;
            return textBody ? res.text() : res.arrayBuffer();
        }).then((resBody)=>{
            if (typeof resBody === "string") {
                this.responseText = resBody;
            } else {
                this.response = resBody;
            }
            this.readyState = 4;
            this.onreadystatechange();
        }).catch((err)=>{
            var _a;
            if (err.name === "AbortError") {
                this.onabort();
                return;
            }
            (_a = this.onerror) == null ? void 0 : _a.call(this, err);
        });
    }
}
_method = new WeakMap();
_url = new WeakMap();
_resHeaders = new WeakMap();
_headers = new WeakMap();
_controller = new WeakMap();
_init = new WeakMap();
_useAbortSignal = new WeakMap();
const adapter = typeof XMLHttpRequest === "function" ? "xhr" : "fetch";
const XmlHttpRequest = adapter === "xhr" ? XMLHttpRequest : FetchXhr;
const httpRequester = (context, callback)=>{
    var _a;
    const opts = context.options;
    const options = context.applyMiddleware("finalizeOptions", opts);
    const timers = {};
    const injectedResponse = context.applyMiddleware("interceptRequest", void 0, {
        adapter,
        context
    });
    if (injectedResponse) {
        const cbTimer = setTimeout(callback, 0, null, injectedResponse);
        const cancel = ()=>clearTimeout(cbTimer);
        return {
            abort: cancel
        };
    }
    let xhr = new XmlHttpRequest();
    if (xhr instanceof FetchXhr && typeof options.fetch === "object") {
        xhr.setInit(options.fetch, (_a = options.useAbortSignal) != null ? _a : true);
    }
    const headers = options.headers;
    const delays = options.timeout;
    let aborted = false;
    let loaded = false;
    let timedOut = false;
    xhr.onerror = (event)=>{
        onError(new Error("Request error while attempting to reach ".concat(options.url).concat(event.lengthComputable ? "(".concat(event.loaded, " of ").concat(event.total, " bytes transferred)") : "")));
    };
    xhr.ontimeout = (event)=>{
        onError(new Error("Request timeout while attempting to reach ".concat(options.url).concat(event.lengthComputable ? "(".concat(event.loaded, " of ").concat(event.total, " bytes transferred)") : "")));
    };
    xhr.onabort = ()=>{
        stopTimers(true);
        aborted = true;
    };
    xhr.onreadystatechange = ()=>{
        resetTimers();
        if (aborted || xhr.readyState !== 4) {
            return;
        }
        if (xhr.status === 0) {
            return;
        }
        onLoad();
    };
    xhr.open(options.method, options.url, true);
    xhr.withCredentials = !!options.withCredentials;
    if (headers && xhr.setRequestHeader) {
        for(const key in headers){
            if (headers.hasOwnProperty(key)) {
                xhr.setRequestHeader(key, headers[key]);
            }
        }
    }
    if (options.rawBody) {
        xhr.responseType = "arraybuffer";
    }
    context.applyMiddleware("onRequest", {
        options,
        adapter,
        request: xhr,
        context
    });
    xhr.send(options.body || null);
    if (delays) {
        timers.connect = setTimeout(()=>timeoutRequest("ETIMEDOUT"), delays.connect);
    }
    return {
        abort
    };
    function abort() {
        aborted = true;
        if (xhr) {
            xhr.abort();
        }
    }
    function timeoutRequest(code) {
        timedOut = true;
        xhr.abort();
        const error = new Error(code === "ESOCKETTIMEDOUT" ? "Socket timed out on request to ".concat(options.url) : "Connection timed out on request to ".concat(options.url));
        error.code = code;
        context.channels.error.publish(error);
    }
    function resetTimers() {
        if (!delays) {
            return;
        }
        stopTimers();
        timers.socket = setTimeout(()=>timeoutRequest("ESOCKETTIMEDOUT"), delays.socket);
    }
    function stopTimers(force) {
        if (force || aborted || xhr.readyState >= 2 && timers.connect) {
            clearTimeout(timers.connect);
        }
        if (timers.socket) {
            clearTimeout(timers.socket);
        }
    }
    function onError(error) {
        if (loaded) {
            return;
        }
        stopTimers(true);
        loaded = true;
        xhr = null;
        const err = error || new Error("Network error while attempting to reach ".concat(options.url));
        err.isNetworkError = true;
        err.request = options;
        callback(err);
    }
    function reduceResponse() {
        return {
            body: xhr.response || (xhr.responseType === "" || xhr.responseType === "text" ? xhr.responseText : ""),
            url: options.url,
            method: options.method,
            headers: parse_headers(xhr.getAllResponseHeaders()),
            statusCode: xhr.status,
            statusMessage: xhr.statusText
        };
    }
    function onLoad() {
        if (aborted || loaded || timedOut) {
            return;
        }
        if (xhr.status === 0) {
            onError(new Error("Unknown XHR error"));
            return;
        }
        stopTimers();
        loaded = true;
        callback(null, reduceResponse());
    }
};
const getIt = function() {
    let initMiddleware = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    let httpRequest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : httpRequester;
    return createRequester(initMiddleware, httpRequest);
};
const environment = "react-server";
 //# sourceMappingURL=index.react-server.js.map

// EXTERNAL MODULE: ./node_modules/debug/src/index.js
var src = __webpack_require__(63694);
;// CONCATENATED MODULE: ./node_modules/is-plain-object/dist/is-plain-object.mjs
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */ function isObject(o) {
    return Object.prototype.toString.call(o) === "[object Object]";
}
function is_plain_object_isPlainObject(o) {
    var ctor, prot;
    if (isObject(o) === false) return false;
    // If has modified constructor
    ctor = o.constructor;
    if (ctor === undefined) return true;
    // If has modified prototype
    prot = ctor.prototype;
    if (isObject(prot) === false) return false;
    // If constructor does not have an Object-specific method
    if (prot.hasOwnProperty("isPrototypeOf") === false) {
        return false;
    }
    // Most likely a plain Object
    return true;
}


;// CONCATENATED MODULE: ./node_modules/get-it/dist/middleware.browser.js



function agent(opts) {
    return {};
}
const leadingSlash = /^\//;
const trailingSlash = /\/$/;
function base(baseUrl) {
    const baseUri = baseUrl.replace(trailingSlash, "");
    return {
        processOptions: (options)=>{
            if (/^https?:\/\//i.test(options.url)) {
                return options;
            }
            const url = [
                baseUri,
                options.url.replace(leadingSlash, "")
            ].join("/");
            return Object.assign({}, options, {
                url
            });
        }
    };
}
const SENSITIVE_HEADERS = (/* unused pure expression or super */ null && ([
    "cookie",
    "authorization"
]));
const hasOwn = Object.prototype.hasOwnProperty;
const redactKeys = (source, redacted)=>{
    const target = {};
    for(const key in source){
        if (hasOwn.call(source, key)) {
            target[key] = redacted.indexOf(key.toLowerCase()) > -1 ? "<redacted>" : source[key];
        }
    }
    return target;
};
function debug() {
    let opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const verbose = opts.verbose;
    const namespace = opts.namespace || "get-it";
    const defaultLogger = debugIt(namespace);
    const log = opts.log || defaultLogger;
    const shortCircuit = log === defaultLogger && !debugIt.enabled(namespace);
    let requestId = 0;
    return {
        processOptions: (options)=>{
            options.debug = log;
            options.requestId = options.requestId || ++requestId;
            return options;
        },
        onRequest: (event)=>{
            if (shortCircuit || !event) {
                return event;
            }
            const options = event.options;
            log("[%s] HTTP %s %s", options.requestId, options.method, options.url);
            if (verbose && options.body && typeof options.body === "string") {
                log("[%s] Request body: %s", options.requestId, options.body);
            }
            if (verbose && options.headers) {
                const headers = opts.redactSensitiveHeaders === false ? options.headers : redactKeys(options.headers, SENSITIVE_HEADERS);
                log("[%s] Request headers: %s", options.requestId, JSON.stringify(headers, null, 2));
            }
            return event;
        },
        onResponse: (res, context)=>{
            if (shortCircuit || !res) {
                return res;
            }
            const reqId = context.options.requestId;
            log("[%s] Response code: %s %s", reqId, res.statusCode, res.statusMessage);
            if (verbose && res.body) {
                log("[%s] Response body: %s", reqId, stringifyBody(res));
            }
            return res;
        },
        onError: (err, context)=>{
            const reqId = context.options.requestId;
            if (!err) {
                log("[%s] Error encountered, but handled by an earlier middleware", reqId);
                return err;
            }
            log("[%s] ERROR: %s", reqId, err.message);
            return err;
        }
    };
}
function stringifyBody(res) {
    const contentType = (res.headers["content-type"] || "").toLowerCase();
    const isJson = contentType.indexOf("application/json") !== -1;
    return isJson ? tryFormat(res.body) : res.body;
}
function tryFormat(body) {
    try {
        const parsed = typeof body === "string" ? JSON.parse(body) : body;
        return JSON.stringify(parsed, null, 2);
    } catch (err) {
        return body;
    }
}
function headers(_headers) {
    let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return {
        processOptions: (options)=>{
            const existing = options.headers || {};
            options.headers = opts.override ? Object.assign({}, existing, _headers) : Object.assign({}, _headers, existing);
            return options;
        }
    };
}
var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj, key, value)=>key in obj ? __defProp$1(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField$1 = (obj, key, value)=>{
    __defNormalProp$1(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
};
class HttpError extends (/* unused pure expression or super */ null && (Error)) {
    constructor(res, ctx){
        super();
        __publicField$1(this, "response");
        __publicField$1(this, "request");
        const truncatedUrl = res.url.length > 400 ? "".concat(res.url.slice(0, 399), "…") : res.url;
        let msg = "".concat(res.method, "-request to ").concat(truncatedUrl, " resulted in ");
        msg += "HTTP ".concat(res.statusCode, " ").concat(res.statusMessage);
        this.message = msg.trim();
        this.response = res;
        this.request = ctx.options;
    }
}
function httpErrors() {
    return {
        onResponse: (res, ctx)=>{
            const isHttpError = res.statusCode >= 400;
            if (!isHttpError) {
                return res;
            }
            throw new HttpError(res, ctx);
        }
    };
}
function injectResponse() {
    let opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (typeof opts.inject !== "function") {
        throw new Error("`injectResponse` middleware requires a `inject` function");
    }
    const inject = function inject2(prevValue, event) {
        const response = opts.inject(event, prevValue);
        if (!response) {
            return prevValue;
        }
        const options = event.context.options;
        return {
            body: "",
            url: options.url,
            method: options.method,
            headers: {},
            statusCode: 200,
            statusMessage: "OK",
            ...response
        };
    };
    return {
        interceptRequest: inject
    };
}
const isBuffer = typeof Buffer === "undefined" ? ()=>false : (obj)=>Buffer.isBuffer(obj);
const serializeTypes = [
    "boolean",
    "string",
    "number"
];
function jsonRequest() {
    return {
        processOptions: (options)=>{
            const body = options.body;
            if (!body) {
                return options;
            }
            const isStream = typeof body.pipe === "function";
            const shouldSerialize = !isStream && !isBuffer(body) && (serializeTypes.indexOf(typeof body) !== -1 || Array.isArray(body) || is_plain_object_isPlainObject(body));
            if (!shouldSerialize) {
                return options;
            }
            return Object.assign({}, options, {
                body: JSON.stringify(options.body),
                headers: Object.assign({}, options.headers, {
                    "Content-Type": "application/json"
                })
            });
        }
    };
}
function jsonResponse(opts) {
    return {
        onResponse: (response)=>{
            const contentType = response.headers["content-type"] || "";
            const shouldDecode = opts && opts.force || contentType.indexOf("application/json") !== -1;
            if (!response.body || !contentType || !shouldDecode) {
                return response;
            }
            return Object.assign({}, response, {
                body: tryParse(response.body)
            });
        },
        processOptions: (options)=>Object.assign({}, options, {
                headers: Object.assign({
                    Accept: "application/json"
                }, options.headers)
            })
    };
    function tryParse(body) {
        try {
            return JSON.parse(body);
        } catch (err) {
            err.message = "Failed to parsed response body as JSON: ".concat(err.message);
            throw err;
        }
    }
}
function isBrowserOptions(options) {
    return typeof options === "object" && options !== null && !("protocol" in options);
}
function mtls() {
    let config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (!config.ca) {
        throw new Error('Required mtls option "ca" is missing');
    }
    if (!config.cert) {
        throw new Error('Required mtls option "cert" is missing');
    }
    if (!config.key) {
        throw new Error('Required mtls option "key" is missing');
    }
    return {
        finalizeOptions: (options)=>{
            if (isBrowserOptions(options)) {
                return options;
            }
            const mtlsOpts = {
                cert: config.cert,
                key: config.key,
                ca: config.ca
            };
            return Object.assign({}, options, mtlsOpts);
        }
    };
}
let actualGlobal = {};
if (typeof globalThis !== "undefined") {
    actualGlobal = globalThis;
} else if (false) {} else if (typeof global !== "undefined") {
    actualGlobal = global;
} else if (typeof self !== "undefined") {
    actualGlobal = self;
}
var global$1 = actualGlobal;
function observable() {
    let opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const Observable = // eslint-disable-next-line @typescript-eslint/no-explicit-any -- @TODO consider dropping checking for a global Observable since it's not on a standards track
    opts.implementation || global$1.Observable;
    if (!Observable) {
        throw new Error("`Observable` is not available in global scope, and no implementation was passed");
    }
    return {
        onReturn: (channels, context)=>new Observable((observer)=>{
                channels.error.subscribe((err)=>observer.error(err));
                channels.progress.subscribe((event)=>observer.next(Object.assign({
                        type: "progress"
                    }, event)));
                channels.response.subscribe((response)=>{
                    observer.next(Object.assign({
                        type: "response"
                    }, response));
                    observer.complete();
                });
                channels.request.publish(context);
                return ()=>channels.abort.publish();
            })
    };
}
function progress() {
    return {
        onRequest: (evt)=>{
            if (evt.adapter !== "xhr") {
                return;
            }
            const xhr = evt.request;
            const context = evt.context;
            if ("upload" in xhr && "onprogress" in xhr.upload) {
                xhr.upload.onprogress = handleProgress("upload");
            }
            if ("onprogress" in xhr) {
                xhr.onprogress = handleProgress("download");
            }
            function handleProgress(stage) {
                return (event)=>{
                    const percent = event.lengthComputable ? event.loaded / event.total * 100 : -1;
                    context.channels.progress.publish({
                        stage,
                        percent,
                        total: event.total,
                        loaded: event.loaded,
                        lengthComputable: event.lengthComputable
                    });
                };
            }
        }
    };
}
var middleware_browser_defProp = Object.defineProperty;
var middleware_browser_defNormalProp = (obj, key, value)=>key in obj ? middleware_browser_defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var middleware_browser_publicField = (obj, key, value)=>{
    middleware_browser_defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
};
const promise = function() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const PromiseImplementation = options.implementation || Promise;
    if (!PromiseImplementation) {
        throw new Error("`Promise` is not available in global scope, and no implementation was passed");
    }
    return {
        onReturn: (channels, context)=>new PromiseImplementation((resolve, reject)=>{
                const cancel = context.options.cancelToken;
                if (cancel) {
                    cancel.promise.then((reason)=>{
                        channels.abort.publish(reason);
                        reject(reason);
                    });
                }
                channels.error.subscribe(reject);
                channels.response.subscribe((response)=>{
                    resolve(options.onlyBody ? response.body : response);
                });
                setTimeout(()=>{
                    try {
                        channels.request.publish(context);
                    } catch (err) {
                        reject(err);
                    }
                }, 0);
            })
    };
};
class Cancel {
    constructor(message){
        middleware_browser_publicField(this, "__CANCEL__", true);
        middleware_browser_publicField(this, "message");
        this.message = message;
    }
    toString() {
        return "Cancel".concat(this.message ? ": ".concat(this.message) : "");
    }
}
const _CancelToken = class _CancelToken {
    constructor(executor){
        middleware_browser_publicField(this, "promise");
        middleware_browser_publicField(this, "reason");
        if (typeof executor !== "function") {
            throw new TypeError("executor must be a function.");
        }
        let resolvePromise = null;
        this.promise = new Promise((resolve)=>{
            resolvePromise = resolve;
        });
        executor((message)=>{
            if (this.reason) {
                return;
            }
            this.reason = new Cancel(message);
            resolvePromise(this.reason);
        });
    }
};
middleware_browser_publicField(_CancelToken, "source", ()=>{
    let cancel;
    const token = new _CancelToken((can)=>{
        cancel = can;
    });
    return {
        token,
        cancel
    };
});
let CancelToken = _CancelToken;
const isCancel = (value)=>!!(value && (value == null ? void 0 : value.__CANCEL__));
promise.Cancel = Cancel;
promise.CancelToken = CancelToken;
promise.isCancel = isCancel;
function proxy(_proxy) {
    if (_proxy !== false && (!_proxy || !_proxy.host)) {
        throw new Error("Proxy middleware takes an object of host, port and auth properties");
    }
    return {
        processOptions: (options)=>Object.assign({
                proxy: _proxy
            }, options)
    };
}
var defaultShouldRetry = (err, attempt, options)=>{
    if (options.method !== "GET" && options.method !== "HEAD") {
        return false;
    }
    return err.isNetworkError || false;
};
const isStream = (stream)=>stream !== null && typeof stream === "object" && typeof stream.pipe === "function";
var sharedRetry = (opts)=>{
    const maxRetries = opts.maxRetries || 5;
    const retryDelay = opts.retryDelay || getRetryDelay;
    const allowRetry = opts.shouldRetry;
    return {
        onError: (err, context)=>{
            const options = context.options;
            const max = options.maxRetries || maxRetries;
            const shouldRetry = options.shouldRetry || allowRetry;
            const attemptNumber = options.attemptNumber || 0;
            if (isStream(options.body)) {
                return err;
            }
            if (!shouldRetry(err, attemptNumber, options) || attemptNumber >= max) {
                return err;
            }
            const newContext = Object.assign({}, context, {
                options: Object.assign({}, options, {
                    attemptNumber: attemptNumber + 1
                })
            });
            setTimeout(()=>context.channels.request.publish(newContext), retryDelay(attemptNumber));
            return null;
        }
    };
};
function getRetryDelay(attemptNum) {
    return 100 * Math.pow(2, attemptNum) + Math.random() * 100;
}
const retry = function() {
    let opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return sharedRetry({
        shouldRetry: defaultShouldRetry,
        ...opts
    });
};
retry.shouldRetry = defaultShouldRetry;
function encode(data) {
    const query = new URLSearchParams();
    const nest = (name, _value)=>{
        const value = _value instanceof Set ? Array.from(_value) : _value;
        if (Array.isArray(value)) {
            if (value.length) {
                for(const index in value){
                    nest("".concat(name, "[").concat(index, "]"), value[index]);
                }
            } else {
                query.append("".concat(name, "[]"), "");
            }
        } else if (typeof value === "object" && value !== null) {
            for (const [key, obj] of Object.entries(value)){
                nest("".concat(name, "[").concat(key, "]"), obj);
            }
        } else {
            query.append(name, value);
        }
    };
    for (const [key, value] of Object.entries(data)){
        nest(key, value);
    }
    return query.toString();
}
function urlEncoded() {
    return {
        processOptions: (options)=>{
            const body = options.body;
            if (!body) {
                return options;
            }
            const isStream = typeof body.pipe === "function";
            const shouldSerialize = !isStream && !isBuffer(body) && isPlainObject(body);
            if (!shouldSerialize) {
                return options;
            }
            return {
                ...options,
                body: encode(options.body),
                headers: {
                    ...options.headers,
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            };
        }
    };
}
function buildKeepAlive(agent) {
    return function keepAlive() {
        let config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        const ms = config.ms || 1e3;
        const maxFree = config.maxFree || 256;
        const agentOptions = {
            keepAlive: true,
            keepAliveMsecs: ms,
            maxFreeSockets: maxFree
        };
        return agent(agentOptions);
    };
}
const keepAlive = buildKeepAlive(agent);
 //# sourceMappingURL=middleware.browser.js.map

// EXTERNAL MODULE: ./node_modules/rxjs/dist/cjs/index.js
var dist_cjs = __webpack_require__(98434);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/cjs/operators/index.js
var operators = __webpack_require__(32968);
;// CONCATENATED MODULE: ./node_modules/@sanity/client/dist/index.browser.js





var envMiddleware = [];
var __defProp$3 = Object.defineProperty;
var __defNormalProp$3 = (obj, key, value)=>key in obj ? __defProp$3(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField$3 = (obj, key, value)=>{
    __defNormalProp$3(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
};
const MAX_ITEMS_IN_ERROR_MESSAGE = 5;
class ClientError extends Error {
    constructor(res){
        const props = extractErrorProps(res);
        super(props.message);
        __publicField$3(this, "response");
        __publicField$3(this, "statusCode", 400);
        __publicField$3(this, "responseBody");
        __publicField$3(this, "details");
        Object.assign(this, props);
    }
}
class ServerError extends Error {
    constructor(res){
        const props = extractErrorProps(res);
        super(props.message);
        __publicField$3(this, "response");
        __publicField$3(this, "statusCode", 500);
        __publicField$3(this, "responseBody");
        __publicField$3(this, "details");
        Object.assign(this, props);
    }
}
function extractErrorProps(res) {
    const body = res.body;
    const props = {
        response: res,
        statusCode: res.statusCode,
        responseBody: index_browser_stringifyBody(body, res),
        message: "",
        details: void 0
    };
    if (body.error && body.message) {
        props.message = "".concat(body.error, " - ").concat(body.message);
        return props;
    }
    if (isMutationError(body)) {
        const allItems = body.error.items || [];
        const items = allItems.slice(0, MAX_ITEMS_IN_ERROR_MESSAGE).map((item)=>{
            var _a;
            return (_a = item.error) == null ? void 0 : _a.description;
        }).filter(Boolean);
        let itemsStr = items.length ? ":\n- ".concat(items.join("\n- ")) : "";
        if (allItems.length > MAX_ITEMS_IN_ERROR_MESSAGE) {
            itemsStr += "\n...and ".concat(allItems.length - MAX_ITEMS_IN_ERROR_MESSAGE, " more");
        }
        props.message = "".concat(body.error.description).concat(itemsStr);
        props.details = body.error;
        return props;
    }
    if (body.error && body.error.description) {
        props.message = body.error.description;
        props.details = body.error;
        return props;
    }
    props.message = body.error || body.message || httpErrorMessage(res);
    return props;
}
function isMutationError(body) {
    return index_browser_isPlainObject(body) && index_browser_isPlainObject(body.error) && body.error.type === "mutationError" && typeof body.error.description === "string";
}
function index_browser_isPlainObject(obj) {
    return typeof obj === "object" && obj !== null && !Array.isArray(obj);
}
function httpErrorMessage(res) {
    const statusMessage = res.statusMessage ? " ".concat(res.statusMessage) : "";
    return "".concat(res.method, "-request to ").concat(res.url, " resulted in HTTP ").concat(res.statusCode).concat(statusMessage);
}
function index_browser_stringifyBody(body, res) {
    const contentType = (res.headers["content-type"] || "").toLowerCase();
    const isJson = contentType.indexOf("application/json") !== -1;
    return isJson ? JSON.stringify(body, null, 2) : body;
}
const httpError = {
    onResponse: (res)=>{
        if (res.statusCode >= 500) {
            throw new ServerError(res);
        } else if (res.statusCode >= 400) {
            throw new ClientError(res);
        }
        return res;
    }
};
const printWarnings = {
    onResponse: (res)=>{
        const warn = res.headers["x-sanity-warning"];
        const warnings = Array.isArray(warn) ? warn : [
            warn
        ];
        warnings.filter(Boolean).forEach((msg)=>console.warn(msg));
        return res;
    }
};
function defineHttpRequest(envMiddleware, _ref) {
    let { maxRetries = 5, retryDelay } = _ref;
    const request = getIt([
        maxRetries > 0 ? retry({
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            retryDelay,
            // This option is typed incorrectly in get-it.
            maxRetries,
            shouldRetry
        }) : {},
        ...envMiddleware,
        printWarnings,
        jsonRequest(),
        jsonResponse(),
        progress(),
        httpError,
        observable({
            implementation: dist_cjs.Observable
        })
    ]);
    function httpRequest(options) {
        let requester = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : request;
        return requester({
            maxRedirects: 0,
            ...options
        });
    }
    httpRequest.defaultRequester = request;
    return httpRequest;
}
function shouldRetry(err, attempt, options) {
    const isSafe = options.method === "GET" || options.method === "HEAD";
    const uri = options.uri || options.url;
    const isQuery = uri.startsWith("/data/query");
    const isRetriableResponse = err.response && (err.response.statusCode === 429 || err.response.statusCode === 502 || err.response.statusCode === 503);
    if ((isSafe || isQuery) && isRetriableResponse) return true;
    return retry.shouldRetry(err, attempt, options);
}
const BASE_URL = "https://www.sanity.io/help/";
function generateHelpUrl(slug) {
    return BASE_URL + slug;
}
const VALID_ASSET_TYPES = [
    "image",
    "file"
];
const VALID_INSERT_LOCATIONS = [
    "before",
    "after",
    "replace"
];
const dataset = (name)=>{
    if (!/^(~[a-z0-9]{1}[-\w]{0,63}|[a-z0-9]{1}[-\w]{0,63})$/.test(name)) {
        throw new Error("Datasets can only contain lowercase characters, numbers, underscores and dashes, and start with tilde, and be maximum 64 characters");
    }
};
const projectId = (id)=>{
    if (!/^[-a-z0-9]+$/i.test(id)) {
        throw new Error("`projectId` can only contain only a-z, 0-9 and dashes");
    }
};
const validateAssetType = (type)=>{
    if (VALID_ASSET_TYPES.indexOf(type) === -1) {
        throw new Error("Invalid asset type: ".concat(type, ". Must be one of ").concat(VALID_ASSET_TYPES.join(", ")));
    }
};
const validateObject = (op, val)=>{
    if (val === null || typeof val !== "object" || Array.isArray(val)) {
        throw new Error("".concat(op, "() takes an object of properties"));
    }
};
const validateDocumentId = (op, id)=>{
    if (typeof id !== "string" || !/^[a-z0-9_][a-z0-9_.-]{0,127}$/i.test(id) || id.includes("..")) {
        throw new Error("".concat(op, '(): "').concat(id, '" is not a valid document ID'));
    }
};
const requireDocumentId = (op, doc)=>{
    if (!doc._id) {
        throw new Error("".concat(op, '() requires that the document contains an ID ("_id" property)'));
    }
    validateDocumentId(op, doc._id);
};
const validateInsert = (at, selector, items)=>{
    const signature = "insert(at, selector, items)";
    if (VALID_INSERT_LOCATIONS.indexOf(at) === -1) {
        const valid = VALID_INSERT_LOCATIONS.map((loc)=>'"'.concat(loc, '"')).join(", ");
        throw new Error("".concat(signature, ' takes an "at"-argument which is one of: ').concat(valid));
    }
    if (typeof selector !== "string") {
        throw new Error("".concat(signature, ' takes a "selector"-argument which must be a string'));
    }
    if (!Array.isArray(items)) {
        throw new Error("".concat(signature, ' takes an "items"-argument which must be an array'));
    }
};
const hasDataset = (config)=>{
    if (!config.dataset) {
        throw new Error("`dataset` must be provided to perform queries");
    }
    return config.dataset || "";
};
const requestTag = (tag)=>{
    if (typeof tag !== "string" || !/^[a-z0-9._-]{1,75}$/i.test(tag)) {
        throw new Error("Tag can only contain alphanumeric characters, underscores, dashes and dots, and be between one and 75 characters long.");
    }
    return tag;
};
function once(fn) {
    let didCall = false;
    let returnValue;
    return function() {
        if (didCall) {
            return returnValue;
        }
        returnValue = fn(...arguments);
        didCall = true;
        return returnValue;
    };
}
const createWarningPrinter = (message)=>// eslint-disable-next-line no-console
    once(function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return console.warn(message.join(" "), ...args);
    });
const printCdnWarning = createWarningPrinter([
    "Since you haven't set a value for `useCdn`, we will deliver content using our",
    "global, edge-cached API-CDN. If you wish to have content delivered faster, set",
    "`useCdn: false` to use the Live API. Note: You may incur higher costs using the live API."
]);
const printCdnPreviewDraftsWarning = createWarningPrinter([
    "The Sanity client is configured with the `perspective` set to `previewDrafts`, which doesn't support the API-CDN.",
    "The Live API will be used instead. Set `useCdn: false` in your configuration to hide this warning."
]);
const printBrowserTokenWarning = createWarningPrinter([
    "You have configured Sanity client to use a token in the browser. This may cause unintentional security issues.",
    "See ".concat(generateHelpUrl("js-client-browser-token"), " for more information and how to hide this warning.")
]);
const printNoApiVersionSpecifiedWarning = createWarningPrinter([
    "Using the Sanity client without specifying an API version is deprecated.",
    "See ".concat(generateHelpUrl("js-client-api-version"))
]);
const printNoDefaultExport = createWarningPrinter([
    "The default export of @sanity/client has been deprecated. Use the named export `createClient` instead."
]);
const defaultCdnHost = "apicdn.sanity.io";
const defaultConfig = {
    apiHost: "https://api.sanity.io",
    apiVersion: "1",
    useProjectHostname: true
};
const LOCALHOSTS = [
    "localhost",
    "127.0.0.1",
    "0.0.0.0"
];
const isLocal = (host)=>LOCALHOSTS.indexOf(host) !== -1;
const validateApiVersion = function validateApiVersion2(apiVersion) {
    if (apiVersion === "1" || apiVersion === "X") {
        return;
    }
    const apiDate = new Date(apiVersion);
    const apiVersionValid = /^\d{4}-\d{2}-\d{2}$/.test(apiVersion) && apiDate instanceof Date && apiDate.getTime() > 0;
    if (!apiVersionValid) {
        throw new Error("Invalid API version string, expected `1` or date in format `YYYY-MM-DD`");
    }
};
const validateApiPerspective = function validateApiPerspective2(perspective) {
    switch(perspective){
        case "previewDrafts":
        case "published":
        case "raw":
            return;
        default:
            throw new TypeError("Invalid API perspective string, expected `published`, `previewDrafts` or `raw`");
    }
};
const initConfig = (config, prevConfig)=>{
    const specifiedConfig = Object.assign({}, prevConfig, config);
    if (!specifiedConfig.apiVersion) {
        printNoApiVersionSpecifiedWarning();
    }
    const newConfig = Object.assign({}, defaultConfig, specifiedConfig);
    const projectBased = newConfig.useProjectHostname;
    if (typeof Promise === "undefined") {
        const helpUrl = generateHelpUrl("js-client-promise-polyfill");
        throw new Error("No native Promise-implementation found, polyfill needed - see ".concat(helpUrl));
    }
    if (projectBased && !newConfig.projectId) {
        throw new Error("Configuration must contain `projectId`");
    }
    if (typeof newConfig.perspective === "string") {
        validateApiPerspective(newConfig.perspective);
    }
    if ("encodeSourceMapAtPath" in newConfig || "encodeSourceMap" in newConfig || "studioUrl" in newConfig || "logger" in newConfig) {
        throw new Error("It looks like you're using options meant for '@sanity/preview-kit/client', such as 'encodeSourceMapAtPath', 'encodeSourceMap', 'studioUrl' and 'logger'. Make sure you're using the right import.");
    }
    const isBrowser =  false && 0;
    const isLocalhost = isBrowser && isLocal(window.location.hostname);
    if (isBrowser && isLocalhost && newConfig.token && newConfig.ignoreBrowserTokenWarning !== true) {
        printBrowserTokenWarning();
    } else if (typeof newConfig.useCdn === "undefined") {
        printCdnWarning();
    }
    if (projectBased) {
        projectId(newConfig.projectId);
    }
    if (newConfig.dataset) {
        dataset(newConfig.dataset);
    }
    if ("requestTagPrefix" in newConfig) {
        newConfig.requestTagPrefix = newConfig.requestTagPrefix ? requestTag(newConfig.requestTagPrefix).replace(/\.+$/, "") : void 0;
    }
    newConfig.apiVersion = "".concat(newConfig.apiVersion).replace(/^v/, "");
    newConfig.isDefaultApi = newConfig.apiHost === defaultConfig.apiHost;
    newConfig.useCdn = newConfig.useCdn !== false && !newConfig.withCredentials;
    validateApiVersion(newConfig.apiVersion);
    const hostParts = newConfig.apiHost.split("://", 2);
    const protocol = hostParts[0];
    const host = hostParts[1];
    const cdnHost = newConfig.isDefaultApi ? defaultCdnHost : host;
    if (newConfig.useProjectHostname) {
        newConfig.url = "".concat(protocol, "://").concat(newConfig.projectId, ".").concat(host, "/v").concat(newConfig.apiVersion);
        newConfig.cdnUrl = "".concat(protocol, "://").concat(newConfig.projectId, ".").concat(cdnHost, "/v").concat(newConfig.apiVersion);
    } else {
        newConfig.url = "".concat(newConfig.apiHost, "/v").concat(newConfig.apiVersion);
        newConfig.cdnUrl = newConfig.url;
    }
    return newConfig;
};
const projectHeader = "X-Sanity-Project-ID";
function requestOptions(config) {
    let overrides = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const headers = {};
    const token = overrides.token || config.token;
    if (token) {
        headers.Authorization = "Bearer ".concat(token);
    }
    if (!overrides.useGlobalApi && !config.useProjectHostname && config.projectId) {
        headers[projectHeader] = config.projectId;
    }
    const withCredentials = Boolean(typeof overrides.withCredentials === "undefined" ? config.token || config.withCredentials : overrides.withCredentials);
    const timeout = typeof overrides.timeout === "undefined" ? config.timeout : overrides.timeout;
    return Object.assign({}, overrides, {
        headers: Object.assign({}, headers, overrides.headers || {}),
        timeout: typeof timeout === "undefined" ? 5 * 60 * 1e3 : timeout,
        proxy: overrides.proxy || config.proxy,
        json: true,
        withCredentials,
        fetch: typeof overrides.fetch === "object" && typeof config.fetch === "object" ? {
            ...config.fetch,
            ...overrides.fetch
        } : overrides.fetch || config.fetch
    });
}
function getSelection(sel) {
    if (typeof sel === "string" || Array.isArray(sel)) {
        return {
            id: sel
        };
    }
    if (typeof sel === "object" && sel !== null && "query" in sel && typeof sel.query === "string") {
        return "params" in sel && typeof sel.params === "object" && sel.params !== null ? {
            query: sel.query,
            params: sel.params
        } : {
            query: sel.query
        };
    }
    const selectionOpts = [
        "* Document ID (<docId>)",
        "* Array of document IDs",
        "* Object containing `query`"
    ].join("\n");
    throw new Error("Unknown selection - must be one of:\n\n".concat(selectionOpts));
}
const encodeQueryString = (_ref2)=>{
    let { query, params = {}, options = {} } = _ref2;
    const searchParams = new URLSearchParams();
    const { tag, ...opts } = options;
    if (tag) searchParams.append("tag", tag);
    searchParams.append("query", query);
    for (const [key, value] of Object.entries(params)){
        searchParams.append("$".concat(key), JSON.stringify(value));
    }
    for (const [key, value] of Object.entries(opts)){
        if (value) searchParams.append(key, "".concat(value));
    }
    return "?".concat(searchParams);
};
var __defProp$2 = Object.defineProperty;
var __defNormalProp$2 = (obj, key, value)=>key in obj ? __defProp$2(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField$2 = (obj, key, value)=>{
    __defNormalProp$2(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
};
var __accessCheck$6 = (obj, member, msg)=>{
    if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateGet$6 = (obj, member, getter)=>{
    __accessCheck$6(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$6 = (obj, member, value)=>{
    if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$6 = (obj, member, value, setter)=>{
    __accessCheck$6(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
};
var _client$5, _client2$5;
class BasePatch {
    constructor(selection){
        let operations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        __publicField$2(this, "selection");
        __publicField$2(this, "operations");
        this.selection = selection;
        this.operations = operations;
    }
    /**
   * Sets the given attributes to the document. Does NOT merge objects.
   * The operation is added to the current patch, ready to be commited by `commit()`
   *
   * @param attrs - Attributes to set. To set a deep attribute, use JSONMatch, eg: \{"nested.prop": "value"\}
   */ set(attrs) {
        return this._assign("set", attrs);
    }
    /**
   * Sets the given attributes to the document if they are not currently set. Does NOT merge objects.
   * The operation is added to the current patch, ready to be commited by `commit()`
   *
   * @param attrs - Attributes to set. To set a deep attribute, use JSONMatch, eg: \{"nested.prop": "value"\}
   */ setIfMissing(attrs) {
        return this._assign("setIfMissing", attrs);
    }
    /**
   * Performs a "diff-match-patch" operation on the string attributes provided.
   * The operation is added to the current patch, ready to be commited by `commit()`
   *
   * @param attrs - Attributes to perform operation on. To set a deep attribute, use JSONMatch, eg: \{"nested.prop": "dmp"\}
   */ diffMatchPatch(attrs) {
        validateObject("diffMatchPatch", attrs);
        return this._assign("diffMatchPatch", attrs);
    }
    /**
   * Unsets the attribute paths provided.
   * The operation is added to the current patch, ready to be commited by `commit()`
   *
   * @param attrs - Attribute paths to unset.
   */ unset(attrs) {
        if (!Array.isArray(attrs)) {
            throw new Error("unset(attrs) takes an array of attributes to unset, non-array given");
        }
        this.operations = Object.assign({}, this.operations, {
            unset: attrs
        });
        return this;
    }
    /**
   * Increment a numeric value. Each entry in the argument is either an attribute or a JSON path. The value may be a positive or negative integer or floating-point value. The operation will fail if target value is not a numeric value, or doesn't exist.
   *
   * @param attrs - Object of attribute paths to increment, values representing the number to increment by.
   */ inc(attrs) {
        return this._assign("inc", attrs);
    }
    /**
   * Decrement a numeric value. Each entry in the argument is either an attribute or a JSON path. The value may be a positive or negative integer or floating-point value. The operation will fail if target value is not a numeric value, or doesn't exist.
   *
   * @param attrs - Object of attribute paths to decrement, values representing the number to decrement by.
   */ dec(attrs) {
        return this._assign("dec", attrs);
    }
    /**
   * Provides methods for modifying arrays, by inserting, appending and replacing elements via a JSONPath expression.
   *
   * @param at - Location to insert at, relative to the given selector, or 'replace' the matched path
   * @param selector - JSONPath expression, eg `comments[-1]` or `blocks[_key=="abc123"]`
   * @param items - Array of items to insert/replace
   */ insert(at, selector, items) {
        validateInsert(at, selector, items);
        return this._assign("insert", {
            [at]: selector,
            items
        });
    }
    /**
   * Append the given items to the array at the given JSONPath
   *
   * @param selector - Attribute/path to append to, eg `comments` or `person.hobbies`
   * @param items - Array of items to append to the array
   */ append(selector, items) {
        return this.insert("after", "".concat(selector, "[-1]"), items);
    }
    /**
   * Prepend the given items to the array at the given JSONPath
   *
   * @param selector - Attribute/path to prepend to, eg `comments` or `person.hobbies`
   * @param items - Array of items to prepend to the array
   */ prepend(selector, items) {
        return this.insert("before", "".concat(selector, "[0]"), items);
    }
    /**
   * Change the contents of an array by removing existing elements and/or adding new elements.
   *
   * @param selector - Attribute or JSONPath expression for array
   * @param start - Index at which to start changing the array (with origin 0). If greater than the length of the array, actual starting index will be set to the length of the array. If negative, will begin that many elements from the end of the array (with origin -1) and will be set to 0 if absolute value is greater than the length of the array.x
   * @param deleteCount - An integer indicating the number of old array elements to remove.
   * @param items - The elements to add to the array, beginning at the start index. If you don't specify any elements, splice() will only remove elements from the array.
   */ splice(selector, start, deleteCount, items) {
        const delAll = typeof deleteCount === "undefined" || deleteCount === -1;
        const startIndex = start < 0 ? start - 1 : start;
        const delCount = delAll ? -1 : Math.max(0, start + deleteCount);
        const delRange = startIndex < 0 && delCount >= 0 ? "" : delCount;
        const rangeSelector = "".concat(selector, "[").concat(startIndex, ":").concat(delRange, "]");
        return this.insert("replace", rangeSelector, items || []);
    }
    /**
   * Adds a revision clause, preventing the document from being patched if the `_rev` property does not match the given value
   *
   * @param rev - Revision to lock the patch to
   */ ifRevisionId(rev) {
        this.operations.ifRevisionID = rev;
        return this;
    }
    /**
   * Return a plain JSON representation of the patch
   */ serialize() {
        return {
            ...getSelection(this.selection),
            ...this.operations
        };
    }
    /**
   * Return a plain JSON representation of the patch
   */ toJSON() {
        return this.serialize();
    }
    /**
   * Clears the patch of all operations
   */ reset() {
        this.operations = {};
        return this;
    }
    _assign(op, props) {
        let merge = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        validateObject(op, props);
        this.operations = Object.assign({}, this.operations, {
            [op]: Object.assign({}, merge && this.operations[op] || {}, props)
        });
        return this;
    }
    _set(op, props) {
        return this._assign(op, props, false);
    }
}
const _ObservablePatch = class _ObservablePatch extends BasePatch {
    constructor(selection, operations, client){
        super(selection, operations);
        __privateAdd$6(this, _client$5, void 0);
        __privateSet$6(this, _client$5, client);
    }
    /**
   * Clones the patch
   */ clone() {
        return new _ObservablePatch(this.selection, {
            ...this.operations
        }, __privateGet$6(this, _client$5));
    }
    commit(options) {
        if (!__privateGet$6(this, _client$5)) {
            throw new Error("No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method");
        }
        const returnFirst = typeof this.selection === "string";
        const opts = Object.assign({
            returnFirst,
            returnDocuments: true
        }, options);
        return __privateGet$6(this, _client$5).mutate({
            patch: this.serialize()
        }, opts);
    }
};
_client$5 = new WeakMap();
let ObservablePatch = _ObservablePatch;
const _Patch = class _Patch extends BasePatch {
    constructor(selection, operations, client){
        super(selection, operations);
        __privateAdd$6(this, _client2$5, void 0);
        __privateSet$6(this, _client2$5, client);
    }
    /**
   * Clones the patch
   */ clone() {
        return new _Patch(this.selection, {
            ...this.operations
        }, __privateGet$6(this, _client2$5));
    }
    commit(options) {
        if (!__privateGet$6(this, _client2$5)) {
            throw new Error("No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method");
        }
        const returnFirst = typeof this.selection === "string";
        const opts = Object.assign({
            returnFirst,
            returnDocuments: true
        }, options);
        return __privateGet$6(this, _client2$5).mutate({
            patch: this.serialize()
        }, opts);
    }
};
_client2$5 = new WeakMap();
let Patch = _Patch;
var index_browser_defProp$1 = Object.defineProperty;
var index_browser_defNormalProp$1 = (obj, key, value)=>key in obj ? index_browser_defProp$1(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var index_browser_publicField$1 = (obj, key, value)=>{
    index_browser_defNormalProp$1(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
};
var __accessCheck$5 = (obj, member, msg)=>{
    if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateGet$5 = (obj, member, getter)=>{
    __accessCheck$5(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$5 = (obj, member, value)=>{
    if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$5 = (obj, member, value, setter)=>{
    __accessCheck$5(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
};
var _client$4, _client2$4;
const defaultMutateOptions = {
    returnDocuments: false
};
class BaseTransaction {
    constructor(){
        let operations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        let transactionId = arguments.length > 1 ? arguments[1] : undefined;
        index_browser_publicField$1(this, "operations");
        index_browser_publicField$1(this, "trxId");
        this.operations = operations;
        this.trxId = transactionId;
    }
    /**
   * Creates a new Sanity document. If `_id` is provided and already exists, the mutation will fail. If no `_id` is given, one will automatically be generated by the database.
   * The operation is added to the current transaction, ready to be commited by `commit()`
   *
   * @param doc - Document to create. Requires a `_type` property.
   */ create(doc) {
        validateObject("create", doc);
        return this._add({
            create: doc
        });
    }
    /**
   * Creates a new Sanity document. If a document with the same `_id` already exists, the create operation will be ignored.
   * The operation is added to the current transaction, ready to be commited by `commit()`
   *
   * @param doc - Document to create if it does not already exist. Requires `_id` and `_type` properties.
   */ createIfNotExists(doc) {
        const op = "createIfNotExists";
        validateObject(op, doc);
        requireDocumentId(op, doc);
        return this._add({
            [op]: doc
        });
    }
    /**
   * Creates a new Sanity document, or replaces an existing one if the same `_id` is already used.
   * The operation is added to the current transaction, ready to be commited by `commit()`
   *
   * @param doc - Document to create or replace. Requires `_id` and `_type` properties.
   */ createOrReplace(doc) {
        const op = "createOrReplace";
        validateObject(op, doc);
        requireDocumentId(op, doc);
        return this._add({
            [op]: doc
        });
    }
    /**
   * Deletes the document with the given document ID
   * The operation is added to the current transaction, ready to be commited by `commit()`
   *
   * @param documentId - Document ID to delete
   */ delete(documentId) {
        validateDocumentId("delete", documentId);
        return this._add({
            delete: {
                id: documentId
            }
        });
    }
    transactionId(id) {
        if (!id) {
            return this.trxId;
        }
        this.trxId = id;
        return this;
    }
    /**
   * Return a plain JSON representation of the transaction
   */ serialize() {
        return [
            ...this.operations
        ];
    }
    /**
   * Return a plain JSON representation of the transaction
   */ toJSON() {
        return this.serialize();
    }
    /**
   * Clears the transaction of all operations
   */ reset() {
        this.operations = [];
        return this;
    }
    _add(mut) {
        this.operations.push(mut);
        return this;
    }
}
const _Transaction = class _Transaction extends BaseTransaction {
    constructor(operations, client, transactionId){
        super(operations, transactionId);
        __privateAdd$5(this, _client$4, void 0);
        __privateSet$5(this, _client$4, client);
    }
    /**
   * Clones the transaction
   */ clone() {
        return new _Transaction([
            ...this.operations
        ], __privateGet$5(this, _client$4), this.trxId);
    }
    commit(options) {
        if (!__privateGet$5(this, _client$4)) {
            throw new Error("No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method");
        }
        return __privateGet$5(this, _client$4).mutate(this.serialize(), Object.assign({
            transactionId: this.trxId
        }, defaultMutateOptions, options || {}));
    }
    patch(patchOrDocumentId, patchOps) {
        const isBuilder = typeof patchOps === "function";
        const isPatch = typeof patchOrDocumentId !== "string" && patchOrDocumentId instanceof Patch;
        if (isPatch) {
            return this._add({
                patch: patchOrDocumentId.serialize()
            });
        }
        if (isBuilder) {
            const patch = patchOps(new Patch(patchOrDocumentId, {}, __privateGet$5(this, _client$4)));
            if (!(patch instanceof Patch)) {
                throw new Error("function passed to `patch()` must return the patch");
            }
            return this._add({
                patch: patch.serialize()
            });
        }
        return this._add({
            patch: {
                id: patchOrDocumentId,
                ...patchOps
            }
        });
    }
};
_client$4 = new WeakMap();
let Transaction = _Transaction;
const _ObservableTransaction = class _ObservableTransaction extends BaseTransaction {
    constructor(operations, client, transactionId){
        super(operations, transactionId);
        __privateAdd$5(this, _client2$4, void 0);
        __privateSet$5(this, _client2$4, client);
    }
    /**
   * Clones the transaction
   */ clone() {
        return new _ObservableTransaction([
            ...this.operations
        ], __privateGet$5(this, _client2$4), this.trxId);
    }
    commit(options) {
        if (!__privateGet$5(this, _client2$4)) {
            throw new Error("No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method");
        }
        return __privateGet$5(this, _client2$4).mutate(this.serialize(), Object.assign({
            transactionId: this.trxId
        }, defaultMutateOptions, options || {}));
    }
    patch(patchOrDocumentId, patchOps) {
        const isBuilder = typeof patchOps === "function";
        const isPatch = typeof patchOrDocumentId !== "string" && patchOrDocumentId instanceof ObservablePatch;
        if (isPatch) {
            return this._add({
                patch: patchOrDocumentId.serialize()
            });
        }
        if (isBuilder) {
            const patch = patchOps(new ObservablePatch(patchOrDocumentId, {}, __privateGet$5(this, _client2$4)));
            if (!(patch instanceof ObservablePatch)) {
                throw new Error("function passed to `patch()` must return the patch");
            }
            return this._add({
                patch: patch.serialize()
            });
        }
        return this._add({
            patch: {
                id: patchOrDocumentId,
                ...patchOps
            }
        });
    }
};
_client2$4 = new WeakMap();
let ObservableTransaction = _ObservableTransaction;
const excludeFalsey = (param, defValue)=>{
    const value = typeof param === "undefined" ? defValue : param;
    return param === false ? void 0 : value;
};
const getMutationQuery = function() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return {
        dryRun: options.dryRun,
        returnIds: true,
        returnDocuments: excludeFalsey(options.returnDocuments, true),
        visibility: options.visibility || "sync",
        autoGenerateArrayKeys: options.autoGenerateArrayKeys,
        skipCrossDatasetReferenceValidation: options.skipCrossDatasetReferenceValidation
    };
};
const isResponse = (event)=>event.type === "response";
const getBody = (event)=>event.body;
const indexBy = (docs, attr)=>docs.reduce((indexed, doc)=>{
        indexed[attr(doc)] = doc;
        return indexed;
    }, /* @__PURE__ */ Object.create(null));
const getQuerySizeLimit = 11264;
function _fetch(client, httpRequest, query, params) {
    let options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    const mapResponse = options.filterResponse === false ? (res)=>res : (res)=>res.result;
    const { cache, next, ...opts } = {
        // Opt out of setting a `signal` on an internal `fetch` if one isn't provided.
        // This is necessary in React Server Components to avoid opting out of Request Memoization.
        useAbortSignal: typeof options.signal !== "undefined",
        ...options
    };
    const reqOpts = typeof cache !== "undefined" || typeof next !== "undefined" ? {
        ...opts,
        fetch: {
            cache,
            next
        }
    } : opts;
    return _dataRequest(client, httpRequest, "query", {
        query,
        params
    }, reqOpts).pipe((0,operators/* map */.UI)(mapResponse));
}
function _getDocument(client, httpRequest, id) {
    let opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    const options = {
        uri: _getDataUrl(client, "doc", id),
        json: true,
        tag: opts.tag
    };
    return _requestObservable(client, httpRequest, options).pipe((0,operators/* filter */.hX)(isResponse), (0,operators/* map */.UI)((event)=>event.body.documents && event.body.documents[0]));
}
function _getDocuments(client, httpRequest, ids) {
    let opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    const options = {
        uri: _getDataUrl(client, "doc", ids.join(",")),
        json: true,
        tag: opts.tag
    };
    return _requestObservable(client, httpRequest, options).pipe((0,operators/* filter */.hX)(isResponse), (0,operators/* map */.UI)((event)=>{
        const indexed = indexBy(event.body.documents || [], (doc)=>doc._id);
        return ids.map((id)=>indexed[id] || null);
    }));
}
function _createIfNotExists(client, httpRequest, doc, options) {
    requireDocumentId("createIfNotExists", doc);
    return _create(client, httpRequest, doc, "createIfNotExists", options);
}
function _createOrReplace(client, httpRequest, doc, options) {
    requireDocumentId("createOrReplace", doc);
    return _create(client, httpRequest, doc, "createOrReplace", options);
}
function _delete(client, httpRequest, selection, options) {
    return _dataRequest(client, httpRequest, "mutate", {
        mutations: [
            {
                delete: getSelection(selection)
            }
        ]
    }, options);
}
function _mutate(client, httpRequest, mutations, options) {
    let mut;
    if (mutations instanceof Patch || mutations instanceof ObservablePatch) {
        mut = {
            patch: mutations.serialize()
        };
    } else if (mutations instanceof Transaction || mutations instanceof ObservableTransaction) {
        mut = mutations.serialize();
    } else {
        mut = mutations;
    }
    const muts = Array.isArray(mut) ? mut : [
        mut
    ];
    const transactionId = options && options.transactionId || void 0;
    return _dataRequest(client, httpRequest, "mutate", {
        mutations: muts,
        transactionId
    }, options);
}
function _dataRequest(client, httpRequest, endpoint, body) {
    let options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    const isMutation = endpoint === "mutate";
    const isQuery = endpoint === "query";
    const strQuery = isMutation ? "" : encodeQueryString(body);
    const useGet = !isMutation && strQuery.length < getQuerySizeLimit;
    const stringQuery = useGet ? strQuery : "";
    const returnFirst = options.returnFirst;
    const { timeout, token, tag, headers } = options;
    const uri = _getDataUrl(client, endpoint, stringQuery);
    const reqOptions = {
        method: useGet ? "GET" : "POST",
        uri,
        json: true,
        body: useGet ? void 0 : body,
        query: isMutation && getMutationQuery(options),
        timeout,
        headers,
        token,
        tag,
        perspective: options.perspective,
        resultSourceMap: options.resultSourceMap,
        canUseCdn: isQuery,
        signal: options.signal,
        fetch: options.fetch,
        useAbortSignal: options.useAbortSignal
    };
    return _requestObservable(client, httpRequest, reqOptions).pipe((0,operators/* filter */.hX)(isResponse), (0,operators/* map */.UI)(getBody), (0,operators/* map */.UI)((res)=>{
        if (!isMutation) {
            return res;
        }
        const results = res.results || [];
        if (options.returnDocuments) {
            return returnFirst ? results[0] && results[0].document : results.map((mut)=>mut.document);
        }
        const key = returnFirst ? "documentId" : "documentIds";
        const ids = returnFirst ? results[0] && results[0].id : results.map((mut)=>mut.id);
        return {
            transactionId: res.transactionId,
            results,
            [key]: ids
        };
    }));
}
function _create(client, httpRequest, doc, op) {
    let options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    const mutation = {
        [op]: doc
    };
    const opts = Object.assign({
        returnFirst: true,
        returnDocuments: true
    }, options);
    return _dataRequest(client, httpRequest, "mutate", {
        mutations: [
            mutation
        ]
    }, opts);
}
function _requestObservable(client, httpRequest, options) {
    var _a;
    const uri = options.url || options.uri;
    const config = client.config();
    const canUseCdn = typeof options.canUseCdn === "undefined" ? [
        "GET",
        "HEAD"
    ].indexOf(options.method || "GET") >= 0 && uri.indexOf("/data/") === 0 : options.canUseCdn;
    let useCdn = config.useCdn && canUseCdn;
    const tag = options.tag && config.requestTagPrefix ? [
        config.requestTagPrefix,
        options.tag
    ].join(".") : options.tag || config.requestTagPrefix;
    if (tag) {
        options.query = {
            tag: requestTag(tag),
            ...options.query
        };
    }
    if ([
        "GET",
        "HEAD",
        "POST"
    ].indexOf(options.method || "GET") >= 0 && uri.indexOf("/data/query/") === 0) {
        if ((_a = options.resultSourceMap) != null ? _a : config.resultSourceMap) {
            options.query = {
                resultSourceMap: true,
                ...options.query
            };
        }
        const perspective = options.perspective || config.perspective;
        if (typeof perspective === "string" && perspective !== "raw") {
            validateApiPerspective(perspective);
            options.query = {
                perspective,
                ...options.query
            };
            if (perspective === "previewDrafts" && useCdn) {
                useCdn = false;
                printCdnPreviewDraftsWarning();
            }
        }
    }
    const reqOptions = requestOptions(config, Object.assign({}, options, {
        url: _getUrl(client, uri, useCdn)
    }));
    const request = new dist_cjs.Observable((subscriber)=>httpRequest(reqOptions, config.requester).subscribe(subscriber));
    return options.signal ? request.pipe(_withAbortSignal(options.signal)) : request;
}
function _request(client, httpRequest, options) {
    const observable = _requestObservable(client, httpRequest, options).pipe((0,operators/* filter */.hX)((event)=>event.type === "response"), (0,operators/* map */.UI)((event)=>event.body));
    return observable;
}
function _getDataUrl(client, operation, path) {
    const config = client.config();
    const catalog = hasDataset(config);
    const baseUri = "/".concat(operation, "/").concat(catalog);
    const uri = path ? "".concat(baseUri, "/").concat(path) : baseUri;
    return "/data".concat(uri).replace(/\/($|\?)/, "$1");
}
function _getUrl(client, uri) {
    let canUseCdn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    const { url, cdnUrl } = client.config();
    const base = canUseCdn ? cdnUrl : url;
    return "".concat(base, "/").concat(uri.replace(/^\//, ""));
}
function _withAbortSignal(signal) {
    return (input)=>{
        return new dist_cjs.Observable((observer)=>{
            const abort = ()=>observer.error(_createAbortError(signal));
            if (signal && signal.aborted) {
                abort();
                return;
            }
            const subscription = input.subscribe(observer);
            signal.addEventListener("abort", abort);
            return ()=>{
                signal.removeEventListener("abort", abort);
                subscription.unsubscribe();
            };
        });
    };
}
const isDomExceptionSupported = Boolean(globalThis.DOMException);
function _createAbortError(signal) {
    var _a, _b;
    if (isDomExceptionSupported) {
        return new DOMException((_a = signal == null ? void 0 : signal.reason) != null ? _a : "The operation was aborted.", "AbortError");
    }
    const error = new Error((_b = signal == null ? void 0 : signal.reason) != null ? _b : "The operation was aborted.");
    error.name = "AbortError";
    return error;
}
var __accessCheck$4 = (obj, member, msg)=>{
    if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateGet$4 = (obj, member, getter)=>{
    __accessCheck$4(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$4 = (obj, member, value)=>{
    if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$4 = (obj, member, value, setter)=>{
    __accessCheck$4(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
};
var _client$3, _httpRequest$4, _client2$3, _httpRequest2$4;
class ObservableAssetsClient {
    constructor(client, httpRequest){
        __privateAdd$4(this, _client$3, void 0);
        __privateAdd$4(this, _httpRequest$4, void 0);
        __privateSet$4(this, _client$3, client);
        __privateSet$4(this, _httpRequest$4, httpRequest);
    }
    upload(assetType, body, options) {
        return _upload(__privateGet$4(this, _client$3), __privateGet$4(this, _httpRequest$4), assetType, body, options);
    }
}
_client$3 = new WeakMap();
_httpRequest$4 = new WeakMap();
class AssetsClient {
    constructor(client, httpRequest){
        __privateAdd$4(this, _client2$3, void 0);
        __privateAdd$4(this, _httpRequest2$4, void 0);
        __privateSet$4(this, _client2$3, client);
        __privateSet$4(this, _httpRequest2$4, httpRequest);
    }
    upload(assetType, body, options) {
        const observable = _upload(__privateGet$4(this, _client2$3), __privateGet$4(this, _httpRequest2$4), assetType, body, options);
        return (0,dist_cjs.lastValueFrom)(observable.pipe((0,operators/* filter */.hX)((event)=>event.type === "response"), (0,operators/* map */.UI)((event)=>event.body.document)));
    }
}
_client2$3 = new WeakMap();
_httpRequest2$4 = new WeakMap();
function _upload(client, httpRequest, assetType, body) {
    let opts = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    validateAssetType(assetType);
    let meta = opts.extract || void 0;
    if (meta && !meta.length) {
        meta = [
            "none"
        ];
    }
    const dataset = hasDataset(client.config());
    const assetEndpoint = assetType === "image" ? "images" : "files";
    const options = optionsFromFile(opts, body);
    const { tag, label, title, description, creditLine, filename, source } = options;
    const query = {
        label,
        title,
        description,
        filename,
        meta,
        creditLine
    };
    if (source) {
        query.sourceId = source.id;
        query.sourceName = source.name;
        query.sourceUrl = source.url;
    }
    return _requestObservable(client, httpRequest, {
        tag,
        method: "POST",
        timeout: options.timeout || 0,
        uri: "/assets/".concat(assetEndpoint, "/").concat(dataset),
        headers: options.contentType ? {
            "Content-Type": options.contentType
        } : {},
        query,
        body
    });
}
function optionsFromFile(opts, file) {
    if (typeof File === "undefined" || !(file instanceof File)) {
        return opts;
    }
    return Object.assign({
        filename: opts.preserveFilename === false ? void 0 : file.name,
        contentType: file.type
    }, opts);
}
var defaults = (obj, defaults)=>Object.keys(defaults).concat(Object.keys(obj)).reduce((target, prop)=>{
        target[prop] = typeof obj[prop] === "undefined" ? defaults[prop] : obj[prop];
        return target;
    }, {});
const pick = (obj, props)=>props.reduce((selection, prop)=>{
        if (typeof obj[prop] === "undefined") {
            return selection;
        }
        selection[prop] = obj[prop];
        return selection;
    }, {});
const MAX_URL_LENGTH = 16e3 - 1200;
const possibleOptions = [
    "includePreviousRevision",
    "includeResult",
    "visibility",
    "effectFormat",
    "tag"
];
const index_browser_defaultOptions = {
    includeResult: true
};
function _listen(query, params) {
    let opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    const { url, token, withCredentials, requestTagPrefix } = this.config();
    const tag = opts.tag && requestTagPrefix ? [
        requestTagPrefix,
        opts.tag
    ].join(".") : opts.tag;
    const options = {
        ...defaults(opts, index_browser_defaultOptions),
        tag
    };
    const listenOpts = pick(options, possibleOptions);
    const qs = encodeQueryString({
        query,
        params,
        options: {
            tag,
            ...listenOpts
        }
    });
    const uri = "".concat(url).concat(_getDataUrl(this, "listen", qs));
    if (uri.length > MAX_URL_LENGTH) {
        return new dist_cjs.Observable((observer)=>observer.error(new Error("Query too large for listener")));
    }
    const listenFor = options.events ? options.events : [
        "mutation"
    ];
    const shouldEmitReconnect = listenFor.indexOf("reconnect") !== -1;
    const esOptions = {};
    if (token || withCredentials) {
        esOptions.withCredentials = true;
    }
    if (token) {
        esOptions.headers = {
            Authorization: "Bearer ".concat(token)
        };
    }
    return new dist_cjs.Observable((observer)=>{
        let es;
        getEventSource().then((eventSource)=>{
            es = eventSource;
        }).catch((reason)=>{
            observer.error(reason);
            stop();
        });
        let reconnectTimer;
        let stopped = false;
        function onError() {
            if (stopped) {
                return;
            }
            emitReconnect();
            if (stopped) {
                return;
            }
            if (es.readyState === es.CLOSED) {
                unsubscribe();
                clearTimeout(reconnectTimer);
                reconnectTimer = setTimeout(open, 100);
            }
        }
        function onChannelError(err) {
            observer.error(cooerceError(err));
        }
        function onMessage(evt) {
            const event = parseEvent(evt);
            return event instanceof Error ? observer.error(event) : observer.next(event);
        }
        function onDisconnect() {
            stopped = true;
            unsubscribe();
            observer.complete();
        }
        function unsubscribe() {
            if (!es) return;
            es.removeEventListener("error", onError);
            es.removeEventListener("channelError", onChannelError);
            es.removeEventListener("disconnect", onDisconnect);
            listenFor.forEach((type)=>es.removeEventListener(type, onMessage));
            es.close();
        }
        function emitReconnect() {
            if (shouldEmitReconnect) {
                observer.next({
                    type: "reconnect"
                });
            }
        }
        async function getEventSource() {
            const { default: EventSource } = await __webpack_require__.e(/* import() */ 47).then(__webpack_require__.t.bind(__webpack_require__, 43047, 19));
            const evs = new EventSource(uri, esOptions);
            evs.addEventListener("error", onError);
            evs.addEventListener("channelError", onChannelError);
            evs.addEventListener("disconnect", onDisconnect);
            listenFor.forEach((type)=>evs.addEventListener(type, onMessage));
            return evs;
        }
        function open() {
            getEventSource().then((eventSource)=>{
                es = eventSource;
            }).catch((reason)=>{
                observer.error(reason);
                stop();
            });
        }
        function stop() {
            stopped = true;
            unsubscribe();
        }
        return stop;
    });
}
function parseEvent(event) {
    try {
        const data = event.data && JSON.parse(event.data) || {};
        return Object.assign({
            type: event.type
        }, data);
    } catch (err) {
        return err;
    }
}
function cooerceError(err) {
    if (err instanceof Error) {
        return err;
    }
    const evt = parseEvent(err);
    return evt instanceof Error ? evt : new Error(extractErrorMessage(evt));
}
function extractErrorMessage(err) {
    if (!err.error) {
        return err.message || "Unknown listener error";
    }
    if (err.error.description) {
        return err.error.description;
    }
    return typeof err.error === "string" ? err.error : JSON.stringify(err.error, null, 2);
}
var __accessCheck$3 = (obj, member, msg)=>{
    if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateGet$3 = (obj, member, getter)=>{
    __accessCheck$3(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$3 = (obj, member, value)=>{
    if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$3 = (obj, member, value, setter)=>{
    __accessCheck$3(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
};
var _client$2, _httpRequest$3, _client2$2, _httpRequest2$3;
class ObservableDatasetsClient {
    constructor(client, httpRequest){
        __privateAdd$3(this, _client$2, void 0);
        __privateAdd$3(this, _httpRequest$3, void 0);
        __privateSet$3(this, _client$2, client);
        __privateSet$3(this, _httpRequest$3, httpRequest);
    }
    /**
   * Create a new dataset with the given name
   *
   * @param name - Name of the dataset to create
   * @param options - Options for the dataset
   */ create(name, options) {
        return _modify(__privateGet$3(this, _client$2), __privateGet$3(this, _httpRequest$3), "PUT", name, options);
    }
    /**
   * Edit a dataset with the given name
   *
   * @param name - Name of the dataset to edit
   * @param options - New options for the dataset
   */ edit(name, options) {
        return _modify(__privateGet$3(this, _client$2), __privateGet$3(this, _httpRequest$3), "PATCH", name, options);
    }
    /**
   * Delete a dataset with the given name
   *
   * @param name - Name of the dataset to delete
   */ delete(name) {
        return _modify(__privateGet$3(this, _client$2), __privateGet$3(this, _httpRequest$3), "DELETE", name);
    }
    /**
   * Fetch a list of datasets for the configured project
   */ list() {
        return _request(__privateGet$3(this, _client$2), __privateGet$3(this, _httpRequest$3), {
            uri: "/datasets"
        });
    }
}
_client$2 = new WeakMap();
_httpRequest$3 = new WeakMap();
class DatasetsClient {
    constructor(client, httpRequest){
        __privateAdd$3(this, _client2$2, void 0);
        __privateAdd$3(this, _httpRequest2$3, void 0);
        __privateSet$3(this, _client2$2, client);
        __privateSet$3(this, _httpRequest2$3, httpRequest);
    }
    /**
   * Create a new dataset with the given name
   *
   * @param name - Name of the dataset to create
   * @param options - Options for the dataset
   */ create(name, options) {
        return (0,dist_cjs.lastValueFrom)(_modify(__privateGet$3(this, _client2$2), __privateGet$3(this, _httpRequest2$3), "PUT", name, options));
    }
    /**
   * Edit a dataset with the given name
   *
   * @param name - Name of the dataset to edit
   * @param options - New options for the dataset
   */ edit(name, options) {
        return (0,dist_cjs.lastValueFrom)(_modify(__privateGet$3(this, _client2$2), __privateGet$3(this, _httpRequest2$3), "PATCH", name, options));
    }
    /**
   * Delete a dataset with the given name
   *
   * @param name - Name of the dataset to delete
   */ delete(name) {
        return (0,dist_cjs.lastValueFrom)(_modify(__privateGet$3(this, _client2$2), __privateGet$3(this, _httpRequest2$3), "DELETE", name));
    }
    /**
   * Fetch a list of datasets for the configured project
   */ list() {
        return (0,dist_cjs.lastValueFrom)(_request(__privateGet$3(this, _client2$2), __privateGet$3(this, _httpRequest2$3), {
            uri: "/datasets"
        }));
    }
}
_client2$2 = new WeakMap();
_httpRequest2$3 = new WeakMap();
function _modify(client, httpRequest, method, name, options) {
    dataset(name);
    return _request(client, httpRequest, {
        method,
        uri: "/datasets/".concat(name),
        body: options
    });
}
var __accessCheck$2 = (obj, member, msg)=>{
    if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateGet$2 = (obj, member, getter)=>{
    __accessCheck$2(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$2 = (obj, member, value)=>{
    if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$2 = (obj, member, value, setter)=>{
    __accessCheck$2(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
};
var _client$1, _httpRequest$2, _client2$1, _httpRequest2$2;
class ObservableProjectsClient {
    constructor(client, httpRequest){
        __privateAdd$2(this, _client$1, void 0);
        __privateAdd$2(this, _httpRequest$2, void 0);
        __privateSet$2(this, _client$1, client);
        __privateSet$2(this, _httpRequest$2, httpRequest);
    }
    list(options) {
        const uri = (options == null ? void 0 : options.includeMembers) === false ? "/projects?includeMembers=false" : "/projects";
        return _request(__privateGet$2(this, _client$1), __privateGet$2(this, _httpRequest$2), {
            uri
        });
    }
    /**
   * Fetch a project by project ID
   *
   * @param projectId - ID of the project to fetch
   */ getById(projectId) {
        return _request(__privateGet$2(this, _client$1), __privateGet$2(this, _httpRequest$2), {
            uri: "/projects/".concat(projectId)
        });
    }
}
_client$1 = new WeakMap();
_httpRequest$2 = new WeakMap();
class ProjectsClient {
    constructor(client, httpRequest){
        __privateAdd$2(this, _client2$1, void 0);
        __privateAdd$2(this, _httpRequest2$2, void 0);
        __privateSet$2(this, _client2$1, client);
        __privateSet$2(this, _httpRequest2$2, httpRequest);
    }
    list(options) {
        const uri = (options == null ? void 0 : options.includeMembers) === false ? "/projects?includeMembers=false" : "/projects";
        return (0,dist_cjs.lastValueFrom)(_request(__privateGet$2(this, _client2$1), __privateGet$2(this, _httpRequest2$2), {
            uri
        }));
    }
    /**
   * Fetch a project by project ID
   *
   * @param projectId - ID of the project to fetch
   */ getById(projectId) {
        return (0,dist_cjs.lastValueFrom)(_request(__privateGet$2(this, _client2$1), __privateGet$2(this, _httpRequest2$2), {
            uri: "/projects/".concat(projectId)
        }));
    }
}
_client2$1 = new WeakMap();
_httpRequest2$2 = new WeakMap();
var __accessCheck$1 = (obj, member, msg)=>{
    if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateGet$1 = (obj, member, getter)=>{
    __accessCheck$1(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$1 = (obj, member, value)=>{
    if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$1 = (obj, member, value, setter)=>{
    __accessCheck$1(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
};
var _client, _httpRequest$1, _client2, _httpRequest2$1;
class ObservableUsersClient {
    constructor(client, httpRequest){
        __privateAdd$1(this, _client, void 0);
        __privateAdd$1(this, _httpRequest$1, void 0);
        __privateSet$1(this, _client, client);
        __privateSet$1(this, _httpRequest$1, httpRequest);
    }
    /**
   * Fetch a user by user ID
   *
   * @param id - User ID of the user to fetch. If `me` is provided, a minimal response including the users role is returned.
   */ getById(id) {
        return _request(__privateGet$1(this, _client), __privateGet$1(this, _httpRequest$1), {
            uri: "/users/".concat(id)
        });
    }
}
_client = new WeakMap();
_httpRequest$1 = new WeakMap();
class UsersClient {
    constructor(client, httpRequest){
        __privateAdd$1(this, _client2, void 0);
        __privateAdd$1(this, _httpRequest2$1, void 0);
        __privateSet$1(this, _client2, client);
        __privateSet$1(this, _httpRequest2$1, httpRequest);
    }
    /**
   * Fetch a user by user ID
   *
   * @param id - User ID of the user to fetch. If `me` is provided, a minimal response including the users role is returned.
   */ getById(id) {
        return (0,dist_cjs.lastValueFrom)(_request(__privateGet$1(this, _client2), __privateGet$1(this, _httpRequest2$1), {
            uri: "/users/".concat(id)
        }));
    }
}
_client2 = new WeakMap();
_httpRequest2$1 = new WeakMap();
var index_browser_defProp = Object.defineProperty;
var index_browser_defNormalProp = (obj, key, value)=>key in obj ? index_browser_defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var index_browser_publicField = (obj, key, value)=>{
    index_browser_defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
};
var index_browser_accessCheck = (obj, member, msg)=>{
    if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var index_browser_privateGet = (obj, member, getter)=>{
    index_browser_accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
};
var index_browser_privateAdd = (obj, member, value)=>{
    if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var index_browser_privateSet = (obj, member, value, setter)=>{
    index_browser_accessCheck(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
};
var _clientConfig, _httpRequest, _clientConfig2, _httpRequest2;
const _ObservableSanityClient = class _ObservableSanityClient {
    constructor(httpRequest){
        let config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultConfig;
        index_browser_publicField(this, "assets");
        index_browser_publicField(this, "datasets");
        index_browser_publicField(this, "projects");
        index_browser_publicField(this, "users");
        /**
     * Private properties
     */ index_browser_privateAdd(this, _clientConfig, void 0);
        index_browser_privateAdd(this, _httpRequest, void 0);
        /**
     * Instance properties
     */ index_browser_publicField(this, "listen", _listen);
        this.config(config);
        index_browser_privateSet(this, _httpRequest, httpRequest);
        this.assets = new ObservableAssetsClient(this, index_browser_privateGet(this, _httpRequest));
        this.datasets = new ObservableDatasetsClient(this, index_browser_privateGet(this, _httpRequest));
        this.projects = new ObservableProjectsClient(this, index_browser_privateGet(this, _httpRequest));
        this.users = new ObservableUsersClient(this, index_browser_privateGet(this, _httpRequest));
    }
    /**
   * Clone the client - returns a new instance
   */ clone() {
        return new _ObservableSanityClient(index_browser_privateGet(this, _httpRequest), this.config());
    }
    config(newConfig) {
        if (newConfig === void 0) {
            return {
                ...index_browser_privateGet(this, _clientConfig)
            };
        }
        if (index_browser_privateGet(this, _clientConfig) && index_browser_privateGet(this, _clientConfig).allowReconfigure === false) {
            throw new Error("Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client");
        }
        index_browser_privateSet(this, _clientConfig, initConfig(newConfig, index_browser_privateGet(this, _clientConfig) || {}));
        return this;
    }
    /**
   * Clone the client with a new (partial) configuration.
   *
   * @param newConfig - New client configuration properties, shallowly merged with existing configuration
   */ withConfig(newConfig) {
        return new _ObservableSanityClient(index_browser_privateGet(this, _httpRequest), {
            ...this.config(),
            ...newConfig
        });
    }
    fetch(query, params) {
        let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return _fetch(this, index_browser_privateGet(this, _httpRequest), query, params, options);
    }
    /**
   * Fetch a single document with the given ID.
   *
   * @param id - Document ID to fetch
   * @param options - Request options
   */ getDocument(id, options) {
        return _getDocument(this, index_browser_privateGet(this, _httpRequest), id, options);
    }
    /**
   * Fetch multiple documents in one request.
   * Should be used sparingly - performing a query is usually a better option.
   * The order/position of documents is preserved based on the original array of IDs.
   * If any of the documents are missing, they will be replaced by a `null` entry in the returned array
   *
   * @param ids - Document IDs to fetch
   * @param options - Request options
   */ getDocuments(ids, options) {
        return _getDocuments(this, index_browser_privateGet(this, _httpRequest), ids, options);
    }
    create(document, options) {
        return _create(this, index_browser_privateGet(this, _httpRequest), document, "create", options);
    }
    createIfNotExists(document, options) {
        return _createIfNotExists(this, index_browser_privateGet(this, _httpRequest), document, options);
    }
    createOrReplace(document, options) {
        return _createOrReplace(this, index_browser_privateGet(this, _httpRequest), document, options);
    }
    delete(selection, options) {
        return _delete(this, index_browser_privateGet(this, _httpRequest), selection, options);
    }
    mutate(operations, options) {
        return _mutate(this, index_browser_privateGet(this, _httpRequest), operations, options);
    }
    /**
   * Create a new buildable patch of operations to perform
   *
   * @param selection - Document ID, an array of document IDs, or an object with `query` and optional `params`, defining which document(s) to patch
   * @param operations - Optional object of patch operations to initialize the patch instance with
   * @returns Patch instance - call `.commit()` to perform the operations defined
   */ patch(selection, operations) {
        return new ObservablePatch(selection, operations, this);
    }
    /**
   * Create a new transaction of mutations
   *
   * @param operations - Optional array of mutation operations to initialize the transaction instance with
   */ transaction(operations) {
        return new ObservableTransaction(operations, this);
    }
    /**
   * Perform an HTTP request against the Sanity API
   *
   * @param options - Request options
   */ request(options) {
        return _request(this, index_browser_privateGet(this, _httpRequest), options);
    }
    /**
   * Get a Sanity API URL for the URI provided
   *
   * @param uri - URI/path to build URL for
   * @param canUseCdn - Whether or not to allow using the API CDN for this route
   */ getUrl(uri, canUseCdn) {
        return _getUrl(this, uri, canUseCdn);
    }
    /**
   * Get a Sanity API URL for the data operation and path provided
   *
   * @param operation - Data operation (eg `query`, `mutate`, `listen` or similar)
   * @param path - Path to append after the operation
   */ getDataUrl(operation, path) {
        return _getDataUrl(this, operation, path);
    }
};
_clientConfig = new WeakMap();
_httpRequest = new WeakMap();
let ObservableSanityClient = _ObservableSanityClient;
const _SanityClient = class _SanityClient {
    constructor(httpRequest){
        let config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultConfig;
        index_browser_publicField(this, "assets");
        index_browser_publicField(this, "datasets");
        index_browser_publicField(this, "projects");
        index_browser_publicField(this, "users");
        /**
     * Observable version of the Sanity client, with the same configuration as the promise-based one
     */ index_browser_publicField(this, "observable");
        /**
     * Private properties
     */ index_browser_privateAdd(this, _clientConfig2, void 0);
        index_browser_privateAdd(this, _httpRequest2, void 0);
        /**
     * Instance properties
     */ index_browser_publicField(this, "listen", _listen);
        this.config(config);
        index_browser_privateSet(this, _httpRequest2, httpRequest);
        this.assets = new AssetsClient(this, index_browser_privateGet(this, _httpRequest2));
        this.datasets = new DatasetsClient(this, index_browser_privateGet(this, _httpRequest2));
        this.projects = new ProjectsClient(this, index_browser_privateGet(this, _httpRequest2));
        this.users = new UsersClient(this, index_browser_privateGet(this, _httpRequest2));
        this.observable = new ObservableSanityClient(httpRequest, config);
    }
    /**
   * Clone the client - returns a new instance
   */ clone() {
        return new _SanityClient(index_browser_privateGet(this, _httpRequest2), this.config());
    }
    config(newConfig) {
        if (newConfig === void 0) {
            return {
                ...index_browser_privateGet(this, _clientConfig2)
            };
        }
        if (index_browser_privateGet(this, _clientConfig2) && index_browser_privateGet(this, _clientConfig2).allowReconfigure === false) {
            throw new Error("Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client");
        }
        if (this.observable) {
            this.observable.config(newConfig);
        }
        index_browser_privateSet(this, _clientConfig2, initConfig(newConfig, index_browser_privateGet(this, _clientConfig2) || {}));
        return this;
    }
    /**
   * Clone the client with a new (partial) configuration.
   *
   * @param newConfig - New client configuration properties, shallowly merged with existing configuration
   */ withConfig(newConfig) {
        return new _SanityClient(index_browser_privateGet(this, _httpRequest2), {
            ...this.config(),
            ...newConfig
        });
    }
    fetch(query, params) {
        let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return (0,dist_cjs.lastValueFrom)(_fetch(this, index_browser_privateGet(this, _httpRequest2), query, params, options));
    }
    /**
   * Fetch a single document with the given ID.
   *
   * @param id - Document ID to fetch
   * @param options - Request options
   */ getDocument(id, options) {
        return (0,dist_cjs.lastValueFrom)(_getDocument(this, index_browser_privateGet(this, _httpRequest2), id, options));
    }
    /**
   * Fetch multiple documents in one request.
   * Should be used sparingly - performing a query is usually a better option.
   * The order/position of documents is preserved based on the original array of IDs.
   * If any of the documents are missing, they will be replaced by a `null` entry in the returned array
   *
   * @param ids - Document IDs to fetch
   * @param options - Request options
   */ getDocuments(ids, options) {
        return (0,dist_cjs.lastValueFrom)(_getDocuments(this, index_browser_privateGet(this, _httpRequest2), ids, options));
    }
    create(document, options) {
        return (0,dist_cjs.lastValueFrom)(_create(this, index_browser_privateGet(this, _httpRequest2), document, "create", options));
    }
    createIfNotExists(document, options) {
        return (0,dist_cjs.lastValueFrom)(_createIfNotExists(this, index_browser_privateGet(this, _httpRequest2), document, options));
    }
    createOrReplace(document, options) {
        return (0,dist_cjs.lastValueFrom)(_createOrReplace(this, index_browser_privateGet(this, _httpRequest2), document, options));
    }
    delete(selection, options) {
        return (0,dist_cjs.lastValueFrom)(_delete(this, index_browser_privateGet(this, _httpRequest2), selection, options));
    }
    mutate(operations, options) {
        return (0,dist_cjs.lastValueFrom)(_mutate(this, index_browser_privateGet(this, _httpRequest2), operations, options));
    }
    /**
   * Create a new buildable patch of operations to perform
   *
   * @param selection - Document ID, an array of document IDs, or an object with `query` and optional `params`, defining which document(s) to patch
   * @param operations - Optional object of patch operations to initialize the patch instance with
   * @returns Patch instance - call `.commit()` to perform the operations defined
   */ patch(documentId, operations) {
        return new Patch(documentId, operations, this);
    }
    /**
   * Create a new transaction of mutations
   *
   * @param operations - Optional array of mutation operations to initialize the transaction instance with
   */ transaction(operations) {
        return new Transaction(operations, this);
    }
    /**
   * Perform a request against the Sanity API
   * NOTE: Only use this for Sanity API endpoints, not for your own APIs!
   *
   * @param options - Request options
   * @returns Promise resolving to the response body
   */ request(options) {
        return (0,dist_cjs.lastValueFrom)(_request(this, index_browser_privateGet(this, _httpRequest2), options));
    }
    /**
   * Perform an HTTP request a `/data` sub-endpoint
   * NOTE: Considered internal, thus marked as deprecated. Use `request` instead.
   *
   * @deprecated - Use `request()` or your own HTTP library instead
   * @param endpoint - Endpoint to hit (mutate, query etc)
   * @param body - Request body
   * @param options - Request options
   * @internal
   */ dataRequest(endpoint, body, options) {
        return (0,dist_cjs.lastValueFrom)(_dataRequest(this, index_browser_privateGet(this, _httpRequest2), endpoint, body, options));
    }
    /**
   * Get a Sanity API URL for the URI provided
   *
   * @param uri - URI/path to build URL for
   * @param canUseCdn - Whether or not to allow using the API CDN for this route
   */ getUrl(uri, canUseCdn) {
        return _getUrl(this, uri, canUseCdn);
    }
    /**
   * Get a Sanity API URL for the data operation and path provided
   *
   * @param operation - Data operation (eg `query`, `mutate`, `listen` or similar)
   * @param path - Path to append after the operation
   */ getDataUrl(operation, path) {
        return _getDataUrl(this, operation, path);
    }
};
_clientConfig2 = new WeakMap();
_httpRequest2 = new WeakMap();
let SanityClient = _SanityClient;
const httpRequest = defineHttpRequest(envMiddleware, {});
const requester = httpRequest.defaultRequester;
const createClient = (config)=>new SanityClient(defineHttpRequest(envMiddleware, {
        maxRetries: config.maxRetries,
        retryDelay: config.retryDelay
    }), config);
function deprecatedCreateClient(config) {
    printNoDefaultExport();
    return new SanityClient(httpRequest, config);
}
 //# sourceMappingURL=index.browser.js.map

// EXTERNAL MODULE: ./node_modules/lodash.isplainobject/index.js
var lodash_isplainobject = __webpack_require__(22557);
;// CONCATENATED MODULE: ./node_modules/@sanity/preview-kit/dist/_chunks/sourcemap-8ed5be4f.js
const ESCAPE = {
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "	": "\\t",
    "'": "\\'",
    "\\": "\\\\"
};
const UNESCAPE = {
    "\\f": "\f",
    "\\n": "\n",
    "\\r": "\r",
    "\\t": "	",
    "\\'": "'",
    "\\\\": "\\"
};
function normalisedJsonPath(path) {
    return "$".concat(path.map((key)=>{
        if (typeof key === "string") {
            const escapedKey = key.replace(/[\f\n\r\t'\\]/g, (match)=>{
                return ESCAPE[match];
            });
            return "['".concat(escapedKey, "']");
        }
        return "[".concat(key, "]");
    }).join(""));
}
function parseNormalisedJsonPath(path) {
    const parsed = [];
    const parseRe = /\['(.*?)'\]|\[(\d+)\]/g;
    let match;
    while((match = parseRe.exec(path)) !== null){
        if (match[1] !== void 0) {
            const key = match[1].replace(/\\(\\|f|n|r|t|')/g, (m)=>{
                return UNESCAPE[m];
            });
            parsed.push(key);
            continue;
        }
        if (match[2] !== void 0) {
            parsed.push(parseInt(match[2], 10));
            continue;
        }
    }
    return parsed;
}
function isRecord(value) {
    return typeof value === "object" && value !== null;
}
function isArray(value) {
    return value !== null && Array.isArray(value);
}
function sourcemap_8ed5be4f_encode(result, csm, encoder) {
    return sourcemap_8ed5be4f_encodeIntoResult(result, csm, encoder);
}
function sourcemap_8ed5be4f_encodeIntoResult(result, csm, encoder) {
    return walkMap(result, (value, path)=>{
        if (typeof value !== "string") {
            return value;
        }
        const resolveMappingResult = resolveMapping(path, csm);
        if (!resolveMappingResult) {
            return value;
        }
        const [mapping, , pathSuffix] = resolveMappingResult;
        if (mapping.type !== "value") {
            return value;
        }
        if (mapping.source.type !== "documentValue") {
            return value;
        }
        const sourceDocument = // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        csm.documents[mapping.source.document];
        const sourcePath = csm.paths[mapping.source.path];
        return encoder(value, sourceDocument, parseNormalisedJsonPath(sourcePath + pathSuffix));
    });
}
function walkMap(value, mappingFn) {
    let path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    if (isArray(value)) {
        return value.map((v, idx)=>walkMap(v, mappingFn, path.concat(idx)));
    }
    if (isRecord(value)) {
        return Object.fromEntries(Object.entries(value).map((_ref)=>{
            let [k, v] = _ref;
            return [
                k,
                walkMap(v, mappingFn, path.concat(k))
            ];
        }));
    }
    return mappingFn(value, path);
}
function resolveMapping(resultPath, csm, logger) {
    var _a;
    const resultJsonPath = normalisedJsonPath(resultPath);
    if (!csm.mappings) {
        (_a = logger == null ? void 0 : logger.error) == null ? void 0 : _a.call(logger, "Missing mappings", {
            resultSourceMap: csm
        });
        return void 0;
    }
    if (csm.mappings[resultJsonPath] !== void 0) {
        return [
            csm.mappings[resultJsonPath],
            resultJsonPath,
            ""
        ];
    }
    const mappings = Object.entries(csm.mappings).filter((_ref2)=>{
        let [key] = _ref2;
        return resultJsonPath.startsWith(key);
    }).sort((_ref3, _ref4)=>{
        let [key1] = _ref3;
        let [key2] = _ref4;
        return key2.length - key1.length;
    });
    if (mappings.length == 0) {
        return void 0;
    }
    const [matchedPath, mapping] = mappings[0];
    const pathSuffix = resultJsonPath.substring(matchedPath.length);
    return [
        mapping,
        matchedPath,
        pathSuffix
    ];
}
 //# sourceMappingURL=sourcemap-8ed5be4f.js.map

// EXTERNAL MODULE: ./node_modules/@vercel/stega/dist/index.js
var dist = __webpack_require__(79107);
;// CONCATENATED MODULE: ./node_modules/@sanity/preview-kit/dist/csm.js


function defineEditLink(_studioUrl) {
    const studioUrl = _studioUrl.replace(/\/$/, "");
    return (sourceDocument, path)=>"".concat(studioUrl, "/intent/edit/id=").concat(sourceDocument._id, ";path=").concat(encodeJsonPathToUriComponent(path));
}
function encodeJsonPathToUriComponent(path) {
    const sourcePath = Array.isArray(path) ? path : parseNormalisedJsonPath(path);
    return encodeURIComponent(sourcePath.map((key, i)=>// eslint-disable-next-line no-nested-ternary
        typeof key === "number" ? "[".concat(key, "]") : i > 0 ? ".".concat(key) : key).join(""));
}
const filterDefault = (_ref)=>{
    let { path } = _ref;
    const endPath = path.at(-1);
    if (path.at(-2) === "slug" && endPath === "current") {
        return false;
    }
    if (typeof endPath === "string" && endPath.startsWith("_")) {
        return false;
    }
    if (typeof endPath === "number" && path.at(-2) === "marks" && typeof path.at(-3) === "number" && path.at(-4) === "children" && typeof path.at(-5) === "number") {
        return false;
    }
    if (endPath === "href" && typeof path.at(-2) === "number" && path.at(-3) === "markDefs" && typeof path.at(-4) === "number") {
        return false;
    }
    if (typeof endPath === "string" && typeof path.at(-2) === "number") {
        if (endPath === "style" || endPath === "listItem") {
            return false;
        }
    }
    return true;
};
const TRUNCATE_LENGTH = 20;
function createTranscoder(config) {
    const { studioUrl, encodeSourceMapAtPath, logger } = config;
    const createEditLink = defineEditLink(studioUrl);
    const report = {
        encoded: [],
        skipped: []
    };
    const transcode = (input, sourceDocument, sourcePath)=>{
        if ((typeof encodeSourceMapAtPath === "function" ? encodeSourceMapAtPath({
            path: sourcePath,
            filterDefault
        }) : filterDefault({
            path: sourcePath,
            filterDefault
        })) === false) {
            if (logger) {
                report.skipped.push({
                    path: prettyPathForLogging(sourcePath),
                    value: "".concat(input.slice(0, TRUNCATE_LENGTH)).concat(input.length > TRUNCATE_LENGTH ? "..." : ""),
                    length: input.length
                });
            }
            return input;
        }
        if (logger) {
            report.encoded.push({
                path: prettyPathForLogging(sourcePath),
                value: "".concat(input.slice(0, TRUNCATE_LENGTH)).concat(input.length > TRUNCATE_LENGTH ? "..." : ""),
                length: input.length
            });
        }
        return (0,dist/* vercelStegaCombine */.n8)(input, {
            origin: "sanity.io",
            href: createEditLink(sourceDocument, sourcePath)
        }, "auto");
    };
    return (result, csm)=>{
        report.encoded.length = 0;
        report.skipped.length = 0;
        return {
            result: sourcemap_8ed5be4f_encode(result, csm, (value, sourceDocument, path)=>transcode(value, sourceDocument, path)),
            report
        };
    };
}
function prettyPathForLogging(path) {
    return path.map((segment, index)=>typeof segment === "number" ? "[".concat(segment, "]") : index > 0 ? ".".concat(segment) : segment).join("");
}
function mapToEditLinks(result, csm, studioUrl) {
    const createEditLink = defineEditLink(studioUrl);
    return encodeIntoResult(result, csm, (_, sourceDocument, path)=>{
        return createEditLink(sourceDocument, path);
    });
}
 //# sourceMappingURL=csm.js.map

;// CONCATENATED MODULE: ./node_modules/@sanity/preview-kit/dist/client.js



function transcodeResponse(_ref) {
    let { studioUrl, encodeSourceMapAtPath, logger } = _ref;
    const transcoder = createTranscoder({
        studioUrl,
        encodeSourceMapAtPath,
        logger
    });
    return {
        onResponse: (response)=>{
            var _a, _b, _c, _d, _e, _f, _g;
            if (!isBodyResponse(response)) {
                return response;
            }
            if (Array.isArray(response.body) || typeof response.body === "string" || lodash_isplainobject(response.body)) {
                if (!isContentSourceMapBody(response.body)) {
                    if (logger && isResultBody(response.body)) {
                        (_a = logger == null ? void 0 : logger.error) == null ? void 0 : _a.call(logger, "[@sanity/preview-kit]: Missing Content Source Map from response body", response.body);
                    }
                    return response;
                }
                const transcoderResult = transcoder(response.body.result, response.body.resultSourceMap);
                if (logger) {
                    const isSkipping = transcoderResult.report.skipped.length;
                    const isEncoding = transcoderResult.report.encoded.length;
                    if (isSkipping || isEncoding) {
                        (_b = (logger == null ? void 0 : logger.groupCollapsed) || logger.log) == null ? void 0 : _b("[@sanity/preview-kit]: Stega encoding source map into result");
                        (_c = logger.log) == null ? void 0 : _c.call(logger, "[@sanity/preview-kit]: Paths encoded: ".concat(transcoderResult.report.encoded.length, ", skipped: ").concat(transcoderResult.report.skipped.length));
                    }
                    if (transcoderResult.report.encoded.length > 0) {
                        (_d = logger == null ? void 0 : logger.log) == null ? void 0 : _d.call(logger, "[@sanity/preview-kit]: Table of encoded paths");
                        (_e = (logger == null ? void 0 : logger.table) || logger.log) == null ? void 0 : _e(transcoderResult.report.encoded);
                    }
                    if (transcoderResult.report.skipped.length > 0) {
                        const skipped = /* @__PURE__ */ new Set();
                        for (const { path } of transcoderResult.report.skipped){
                            skipped.add(path.replace(/\[\d+\]/g, "[]"));
                        }
                        (_f = logger == null ? void 0 : logger.log) == null ? void 0 : _f.call(logger, "[@sanity/preview-kit]: List of skipped paths", [
                            ...skipped.values()
                        ]);
                    }
                    if (isSkipping || isEncoding) {
                        (_g = logger == null ? void 0 : logger.groupEnd) == null ? void 0 : _g.call(logger);
                    }
                }
                const body = {
                    ...response.body,
                    result: transcoderResult.result
                };
                return {
                    ...response,
                    body
                };
            }
            return response;
        }
    };
}
function createHttpRequest(_ref2) {
    let { studioUrl, encodeSourceMapAtPath, logger } = _ref2;
    const superRequester = requester.clone();
    superRequester.use(// eslint-disable-next-line @typescript-eslint/no-explicit-any -- support the improved get-it typings
    transcodeResponse({
        studioUrl,
        encodeSourceMapAtPath,
        logger
    }));
    function httpRequest(options) {
        let requester = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : superRequester;
        return requester({
            maxRedirects: 0,
            ...options
        });
    }
    httpRequest.defaultRequester = superRequester;
    return httpRequest;
}
function isBodyResponse(response) {
    return typeof response === "object" && response !== null;
}
function isResultBody(body) {
    return typeof body === "object" && body !== null && "result" in body;
}
function isContentSourceMapBody(body) {
    return typeof body === "object" && body !== null && "resultSourceMap" in body;
}
const client_createClient = (config)=>{
    var _a, _b;
    const { encodeSourceMap = detectEnableSourceMap(), encodeSourceMapAtPath, studioUrl = detectStudioUrl(), logger, ...options } = config;
    let shouldEncodeSourceMap = encodeSourceMap === true;
    if (encodeSourceMap === "auto") {
        shouldEncodeSourceMap = isVercelPreviewEnvironment();
    }
    if (typeof encodeSourceMap === "string" && encodeSourceMap !== "auto") {
        throw new Error("Invalid value for encodeSourceMap: ".concat(encodeSourceMap, ". Did you mean 'auto'?"));
    }
    try {
        if (shouldEncodeSourceMap && config.resultSourceMap !== false) {
            if (!studioUrl) {
                (_a = logger == null ? void 0 : logger.error) == null ? void 0 : _a.call(logger, "[@sanity/preview-kit]: Content source map enabled client is enabled, but no studioUrl is provided. Falling back to @sanity/client");
                return createClient(options);
            }
            (_b = logger == null ? void 0 : logger.debug) == null ? void 0 : _b.call(logger, "[@sanity/preview-kit]: Creating source map enabled client");
            const httpRequest = createHttpRequest({
                encodeSourceMapAtPath,
                studioUrl,
                logger
            });
            return new SanityClient(httpRequest, {
                ...options,
                // Source maps by Content Lake are required in order to know where to insert the encoded source maps into strings
                resultSourceMap: true
            });
        }
    } catch (err) {
        console.error("[@sanity/preview-kit]: Error creating client", err, "falling back to non-embedded sourcemap mode");
    }
    return createClient(options);
};
function isVercelPreviewEnvironment() {
    try {
        return /* unsupported import.meta.env.VERCEL_ENV */ undefined.VERCEL_ENV === "preview";
    } catch  {}
    try {
        return process.env.VERCEL_ENV === "preview";
    } catch  {}
    return false;
}
function detectEnableSourceMap() {
    try {
        return /* unsupported import.meta.env.SANITY_SOURCE_MAP */ undefined.SANITY_SOURCE_MAP === "true" || "auto";
    } catch  {}
    try {
        return process.env.SANITY_SOURCE_MAP === "true" || "auto";
    } catch  {}
    return "auto";
}
function detectStudioUrl() {
    try {
        return /* unsupported import.meta.env.SANITY_STUDIO_URL */ undefined.SANITY_STUDIO_URL;
    } catch  {}
    try {
        return process.env.SANITY_STUDIO_URL;
    } catch  {}
}
function client_mapToEditLinks(response, studioUrl) {
    return mapToEditLinks$1(response.result, response.resultSourceMap, studioUrl);
}
 //# sourceMappingURL=client.js.map

// EXTERNAL MODULE: ./node_modules/groq/lib/groq.js
var groq = __webpack_require__(52669);
;// CONCATENATED MODULE: ./node_modules/groq/node/groq.mjs
// eslint-disable-next-line import/extensions

/* harmony default export */ const node_groq = ((/* unused pure expression or super */ null && (cjs)));

;// CONCATENATED MODULE: ./node_modules/next-sanity/dist/index.js


function dist_createClient(config) {
    let { // eslint-disable-next-line prefer-const, no-process-env
    studioUrl = process.env.NEXT_PUBLIC_SANITY_STUDIO_URL, encodeSourceMap = studioUrl ? "auto" : false } = config;
    if (encodeSourceMap === "auto" && process.env.NEXT_PUBLIC_VERCEL_ENV === "preview") {
        encodeSourceMap = true;
    }
    return client_createClient({
        ...config,
        studioUrl,
        encodeSourceMap
    });
}
 //# sourceMappingURL=index.js.map


/***/ })

};
;