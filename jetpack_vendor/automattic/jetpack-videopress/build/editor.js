/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../../node_modules/.pnpm/@wordpress+icons@9.3.0/node_modules/@wordpress/icons/build-module/library/image.js":
/*!**********************************************************************************************************************!*\
  !*** ../../../node_modules/.pnpm/@wordpress+icons@9.3.0/node_modules/@wordpress/icons/build-module/library/image.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const image = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.5h14c.3 0 .5.2.5.5v8.4l-3-2.9c-.3-.3-.8-.3-1 0L11.9 14 9 12c-.3-.2-.6-.2-.8 0l-3.6 2.6V5c-.1-.3.1-.5.4-.5zm14 15H5c-.3 0-.5-.2-.5-.5v-2.4l4.1-3 3 1.9c.3.2.7.2.9-.1L16 12l3.5 3.4V19c0 .3-.2.5-.5.5z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (image);
//# sourceMappingURL=image.js.map

/***/ }),

/***/ "../../../node_modules/.pnpm/@wordpress+icons@9.3.0/node_modules/@wordpress/icons/build-module/library/link-off.js":
/*!*************************************************************************************************************************!*\
  !*** ../../../node_modules/.pnpm/@wordpress+icons@9.3.0/node_modules/@wordpress/icons/build-module/library/link-off.js ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const linkOff = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M15.6 7.3h-.7l1.6-3.5-.9-.4-3.9 8.5H9v1.5h2l-1.3 2.8H8.4c-2 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7H10V7.3H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H9l-1.4 3.2.9.4 5.7-12.5h1.4c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.9 0 5.2-2.3 5.2-5.2 0-2.9-2.4-5.2-5.2-5.2z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (linkOff);
//# sourceMappingURL=link-off.js.map

/***/ }),

/***/ "../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js":
/*!*************************************************************************************!*\
  !*** ../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js ***!
  \*************************************************************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js":
/*!*********************************************************************************!*\
  !*** ../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js ***!
  \*********************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (() => {
	let warned = false;

	return () => {
		if (!warned) {
			warned = true;
			console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
		}
	};
})();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
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
 */
exports.log = console.debug || console.log || (() => {});

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
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
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
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
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = __webpack_require__(/*! ./common */ "../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/common.js")(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};


/***/ }),

/***/ "../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/common.js":
/*!********************************************************************************!*\
  !*** ../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/common.js ***!
  \********************************************************************************/
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
	createDebug.humanize = __webpack_require__(/*! ms */ "../../../node_modules/.pnpm/ms@2.1.2/node_modules/ms/index.js");
	createDebug.destroy = destroy;

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
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
	*/
	function createDebug(namespace) {
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

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return '%';
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
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

		Object.defineProperty(debug, 'enabled', {
			enumerable: true,
			configurable: false,
			get: () => {
				if (enableOverride !== null) {
					return enableOverride;
				}
				if (namespacesCache !== createDebug.namespaces) {
					namespacesCache = createDebug.namespaces;
					enabledCache = createDebug.enabled(namespace);
				}

				return enabledCache;
			},
			set: v => {
				enableOverride = v;
			}
		});

		// Env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		return debug;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);
		createDebug.namespaces = namespaces;

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.slice(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
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
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	/**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/
	function destroy() {
		console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

module.exports = setup;


/***/ }),

/***/ "../../../node_modules/.pnpm/filesize@8.0.6/node_modules/filesize/lib/filesize.min.js":
/*!********************************************************************************************!*\
  !*** ../../../node_modules/.pnpm/filesize@8.0.6/node_modules/filesize/lib/filesize.min.js ***!
  \********************************************************************************************/
/***/ (function(module) {

/*!
 2021 Jason Mulligan <jason.mulligan@avoidwork.com>
 @version 8.0.6
*/
!function(i,t){ true?module.exports=t():0}(this,(function(){"use strict";var i=/^(b|B)$/,t={iec:{bits:["bit","Kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],bytes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},jedec:{bits:["bit","Kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],bytes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}},e={iec:["","kibi","mebi","gibi","tebi","pebi","exbi","zebi","yobi"],jedec:["","kilo","mega","giga","tera","peta","exa","zetta","yotta"]},o={floor:Math.floor,ceil:Math.ceil};function n(n){var r,a,b,s,l,c,f,d,p,u,h,B,g,y,M,m,v,x,N,T,j,E=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},w=[],P=0;if(isNaN(n))throw new TypeError("Invalid number");if(b=!0===E.bits,M=!0===E.unix,B=!0===E.pad,a=E.base||10,g=void 0!==E.round?E.round:M?1:2,f=void 0!==E.locale?E.locale:"",d=E.localeOptions||{},m=void 0!==E.separator?E.separator:"",v=void 0!==E.spacer?E.spacer:M?"":" ",N=E.symbols||{},x=2===a?E.standard||"iec":"jedec",h=E.output||"string",l=!0===E.fullform,c=E.fullforms instanceof Array?E.fullforms:[],r=void 0!==E.exponent?E.exponent:-1,T=o[E.roundingMethod]||Math.round,p=(u=Number(n))<0,s=a>2?1e3:1024,j=!1===isNaN(E.precision)?parseInt(E.precision,10):0,p&&(u=-u),(-1===r||isNaN(r))&&(r=Math.floor(Math.log(u)/Math.log(s)))<0&&(r=0),r>8&&(j>0&&(j+=8-r),r=8),"exponent"===h)return r;if(0===u)w[0]=0,y=w[1]=M?"":t[x][b?"bits":"bytes"][r];else{P=u/(2===a?Math.pow(2,10*r):Math.pow(1e3,r)),b&&(P*=8)>=s&&r<8&&(P/=s,r++);var k=Math.pow(10,r>0?g:0);w[0]=T(P*k)/k,w[0]===s&&r<8&&void 0===E.exponent&&(w[0]=1,r++),y=w[1]=10===a&&1===r?b?"kbit":"kB":t[x][b?"bits":"bytes"][r],M&&(w[1]=w[1].charAt(0),i.test(w[1])&&(w[0]=Math.floor(w[0]),w[1]=""))}if(p&&(w[0]=-w[0]),j>0&&(w[0]=w[0].toPrecision(j)),w[1]=N[w[1]]||w[1],!0===f?w[0]=w[0].toLocaleString():f.length>0?w[0]=w[0].toLocaleString(f,d):m.length>0&&(w[0]=w[0].toString().replace(".",m)),B&&!1===Number.isInteger(w[0])&&g>0){var G=m||".",K=w[0].toString().split(G),S=K[1]||"",Y=S.length,Z=g-Y;w[0]="".concat(K[0]).concat(G).concat(S.padEnd(Y+Z,"0"))}return l&&(w[1]=c[r]?c[r]:e[x][r]+(b?"bit":"byte")+(1===w[0]?"":"s")),"array"===h?w:"object"===h?{value:w[0],symbol:w[1],exponent:r,unit:y}:w.join(v)}return n.partial=function(i){return function(t){return n(t,i)}},n}));
//# sourceMappingURL=filesize.min.js.map


/***/ }),

/***/ "../../../node_modules/.pnpm/js-base64@2.6.4/node_modules/js-base64/base64.js":
/*!************************************************************************************!*\
  !*** ../../../node_modules/.pnpm/js-base64@2.6.4/node_modules/js-base64/base64.js ***!
  \************************************************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 *  base64.js
 *
 *  Licensed under the BSD 3-Clause License.
 *    http://opensource.org/licenses/BSD-3-Clause
 *
 *  References:
 *    http://en.wikipedia.org/wiki/Base64
 */
;(function (global, factory) {
     true
        ? module.exports = factory(global)
        : 0
}((
    typeof self !== 'undefined' ? self
        : typeof window !== 'undefined' ? window
        : typeof window !== 'undefined' ? window
: this
), function(global) {
    'use strict';
    // existing version for noConflict()
    global = global || {};
    var _Base64 = global.Base64;
    var version = "2.6.4";
    // constants
    var b64chars
        = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    var b64tab = function(bin) {
        var t = {};
        for (var i = 0, l = bin.length; i < l; i++) t[bin.charAt(i)] = i;
        return t;
    }(b64chars);
    var fromCharCode = String.fromCharCode;
    // encoder stuff
    var cb_utob = function(c) {
        if (c.length < 2) {
            var cc = c.charCodeAt(0);
            return cc < 0x80 ? c
                : cc < 0x800 ? (fromCharCode(0xc0 | (cc >>> 6))
                                + fromCharCode(0x80 | (cc & 0x3f)))
                : (fromCharCode(0xe0 | ((cc >>> 12) & 0x0f))
                    + fromCharCode(0x80 | ((cc >>>  6) & 0x3f))
                    + fromCharCode(0x80 | ( cc         & 0x3f)));
        } else {
            var cc = 0x10000
                + (c.charCodeAt(0) - 0xD800) * 0x400
                + (c.charCodeAt(1) - 0xDC00);
            return (fromCharCode(0xf0 | ((cc >>> 18) & 0x07))
                    + fromCharCode(0x80 | ((cc >>> 12) & 0x3f))
                    + fromCharCode(0x80 | ((cc >>>  6) & 0x3f))
                    + fromCharCode(0x80 | ( cc         & 0x3f)));
        }
    };
    var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
    var utob = function(u) {
        return u.replace(re_utob, cb_utob);
    };
    var cb_encode = function(ccc) {
        var padlen = [0, 2, 1][ccc.length % 3],
        ord = ccc.charCodeAt(0) << 16
            | ((ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8)
            | ((ccc.length > 2 ? ccc.charCodeAt(2) : 0)),
        chars = [
            b64chars.charAt( ord >>> 18),
            b64chars.charAt((ord >>> 12) & 63),
            padlen >= 2 ? '=' : b64chars.charAt((ord >>> 6) & 63),
            padlen >= 1 ? '=' : b64chars.charAt(ord & 63)
        ];
        return chars.join('');
    };
    var btoa = global.btoa && typeof global.btoa == 'function'
        ? function(b){ return global.btoa(b) } : function(b) {
        if (b.match(/[^\x00-\xFF]/)) throw new RangeError(
            'The string contains invalid characters.'
        );
        return b.replace(/[\s\S]{1,3}/g, cb_encode);
    };
    var _encode = function(u) {
        return btoa(utob(String(u)));
    };
    var mkUriSafe = function (b64) {
        return b64.replace(/[+\/]/g, function(m0) {
            return m0 == '+' ? '-' : '_';
        }).replace(/=/g, '');
    };
    var encode = function(u, urisafe) {
        return urisafe ? mkUriSafe(_encode(u)) : _encode(u);
    };
    var encodeURI = function(u) { return encode(u, true) };
    var fromUint8Array;
    if (global.Uint8Array) fromUint8Array = function(a, urisafe) {
        // return btoa(fromCharCode.apply(null, a));
        var b64 = '';
        for (var i = 0, l = a.length; i < l; i += 3) {
            var a0 = a[i], a1 = a[i+1], a2 = a[i+2];
            var ord = a0 << 16 | a1 << 8 | a2;
            b64 +=    b64chars.charAt( ord >>> 18)
                +     b64chars.charAt((ord >>> 12) & 63)
                + ( typeof a1 != 'undefined'
                    ? b64chars.charAt((ord >>>  6) & 63) : '=')
                + ( typeof a2 != 'undefined'
                    ? b64chars.charAt( ord         & 63) : '=');
        }
        return urisafe ? mkUriSafe(b64) : b64;
    };
    // decoder stuff
    var re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
    var cb_btou = function(cccc) {
        switch(cccc.length) {
        case 4:
            var cp = ((0x07 & cccc.charCodeAt(0)) << 18)
                |    ((0x3f & cccc.charCodeAt(1)) << 12)
                |    ((0x3f & cccc.charCodeAt(2)) <<  6)
                |     (0x3f & cccc.charCodeAt(3)),
            offset = cp - 0x10000;
            return (fromCharCode((offset  >>> 10) + 0xD800)
                    + fromCharCode((offset & 0x3FF) + 0xDC00));
        case 3:
            return fromCharCode(
                ((0x0f & cccc.charCodeAt(0)) << 12)
                    | ((0x3f & cccc.charCodeAt(1)) << 6)
                    |  (0x3f & cccc.charCodeAt(2))
            );
        default:
            return  fromCharCode(
                ((0x1f & cccc.charCodeAt(0)) << 6)
                    |  (0x3f & cccc.charCodeAt(1))
            );
        }
    };
    var btou = function(b) {
        return b.replace(re_btou, cb_btou);
    };
    var cb_decode = function(cccc) {
        var len = cccc.length,
        padlen = len % 4,
        n = (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0)
            | (len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0)
            | (len > 2 ? b64tab[cccc.charAt(2)] <<  6 : 0)
            | (len > 3 ? b64tab[cccc.charAt(3)]       : 0),
        chars = [
            fromCharCode( n >>> 16),
            fromCharCode((n >>>  8) & 0xff),
            fromCharCode( n         & 0xff)
        ];
        chars.length -= [0, 0, 2, 1][padlen];
        return chars.join('');
    };
    var _atob = global.atob && typeof global.atob == 'function'
        ? function(a){ return global.atob(a) } : function(a){
        return a.replace(/\S{1,4}/g, cb_decode);
    };
    var atob = function(a) {
        return _atob(String(a).replace(/[^A-Za-z0-9\+\/]/g, ''));
    };
    var _decode = function(a) { return btou(_atob(a)) };
    var _fromURI = function(a) {
        return String(a).replace(/[-_]/g, function(m0) {
            return m0 == '-' ? '+' : '/'
        }).replace(/[^A-Za-z0-9\+\/]/g, '');
    };
    var decode = function(a){
        return _decode(_fromURI(a));
    };
    var toUint8Array;
    if (global.Uint8Array) toUint8Array = function(a) {
        return Uint8Array.from(atob(_fromURI(a)), function(c) {
            return c.charCodeAt(0);
        });
    };
    var noConflict = function() {
        var Base64 = global.Base64;
        global.Base64 = _Base64;
        return Base64;
    };
    // export Base64
    global.Base64 = {
        VERSION: version,
        atob: atob,
        btoa: btoa,
        fromBase64: decode,
        toBase64: encode,
        utob: utob,
        encode: encode,
        encodeURI: encodeURI,
        btou: btou,
        decode: decode,
        noConflict: noConflict,
        fromUint8Array: fromUint8Array,
        toUint8Array: toUint8Array
    };
    // if ES5 is available, make Base64.extendString() available
    if (typeof Object.defineProperty === 'function') {
        var noEnum = function(v){
            return {value:v,enumerable:false,writable:true,configurable:true};
        };
        global.Base64.extendString = function () {
            Object.defineProperty(
                String.prototype, 'fromBase64', noEnum(function () {
                    return decode(this)
                }));
            Object.defineProperty(
                String.prototype, 'toBase64', noEnum(function (urisafe) {
                    return encode(this, urisafe)
                }));
            Object.defineProperty(
                String.prototype, 'toBase64URI', noEnum(function () {
                    return encode(this, true)
                }));
        };
    }
    //
    // export Base64 to the namespace
    //
    if (global['Meteor']) { // Meteor.js
        Base64 = global.Base64;
    }
    // module.exports and AMD are mutually exclusive.
    // module.exports has precedence.
    if ( true && module.exports) {
        module.exports.Base64 = global.Base64;
    }
    else if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){ return global.Base64 }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
    // that's it!
    return {Base64: global.Base64}
}));


/***/ }),

/***/ "./src/client/block-editor/blocks/videopress/components/poster-image-block-control/style.module.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/client/block-editor/blocks/videopress/components/poster-image-block-control/style.module.scss ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"dropdown_content":"bSYn21_MuQ2nA5w8NofP","current_media":"Al49W7929Leiqnk0t4lV"});

/***/ }),

/***/ "./src/client/block-editor/blocks/videopress/components/videopress-uploader/style.scss":
/*!*********************************************************************************************!*\
  !*** ./src/client/block-editor/blocks/videopress/components/videopress-uploader/style.scss ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/client/block-editor/blocks/videopress/editor.scss":
/*!***************************************************************!*\
  !*** ./src/client/block-editor/blocks/videopress/editor.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/client/block-editor/blocks/videopress/style.scss":
/*!**************************************************************!*\
  !*** ./src/client/block-editor/blocks/videopress/style.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../../node_modules/.pnpm/ms@2.1.2/node_modules/ms/index.js":
/*!*********************************************************************!*\
  !*** ../../../node_modules/.pnpm/ms@2.1.2/node_modules/ms/index.js ***!
  \*********************************************************************/
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
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
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
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),

/***/ "../../../node_modules/.pnpm/querystringify@2.2.0/node_modules/querystringify/index.js":
/*!*********************************************************************************************!*\
  !*** ../../../node_modules/.pnpm/querystringify@2.2.0/node_modules/querystringify/index.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


var has = Object.prototype.hasOwnProperty
  , undef;

/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String|Null} The decoded string.
 * @api private
 */
function decode(input) {
  try {
    return decodeURIComponent(input.replace(/\+/g, ' '));
  } catch (e) {
    return null;
  }
}

/**
 * Attempts to encode a given input.
 *
 * @param {String} input The string that needs to be encoded.
 * @returns {String|Null} The encoded string.
 * @api private
 */
function encode(input) {
  try {
    return encodeURIComponent(input);
  } catch (e) {
    return null;
  }
}

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?#&]+)=?([^&]*)/g
    , result = {}
    , part;

  while (part = parser.exec(query)) {
    var key = decode(part[1])
      , value = decode(part[2]);

    //
    // Prevent overriding of existing properties. This ensures that build-in
    // methods like `toString` or __proto__ are not overriden by malicious
    // querystrings.
    //
    // In the case if failed decoding, we want to omit the key/value pairs
    // from the result.
    //
    if (key === null || value === null || key in result) continue;
    result[key] = value;
  }

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = []
    , value
    , key;

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (key in obj) {
    if (has.call(obj, key)) {
      value = obj[key];

      //
      // Edge cases where we actually want to encode the value to an empty
      // string instead of the stringified value.
      //
      if (!value && (value === null || value === undef || isNaN(value))) {
        value = '';
      }

      key = encode(key);
      value = encode(value);

      //
      // If we failed to encode the strings, we should bail out as we don't
      // want to add invalid strings to the query.
      //
      if (key === null || value === null) continue;
      pairs.push(key +'='+ value);
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;


/***/ }),

/***/ "../../../node_modules/.pnpm/requires-port@1.0.0/node_modules/requires-port/index.js":
/*!*******************************************************************************************!*\
  !*** ../../../node_modules/.pnpm/requires-port@1.0.0/node_modules/requires-port/index.js ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";


/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */
module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
    return port !== 80;

    case 'https':
    case 'wss':
    return port !== 443;

    case 'ftp':
    return port !== 21;

    case 'gopher':
    return port !== 70;

    case 'file':
    return false;
  }

  return port !== 0;
};


/***/ }),

/***/ "./src/client/block-editor/blocks/videopress/components/icons/index.js":
/*!*****************************************************************************!*\
  !*** ./src/client/block-editor/blocks/videopress/components/icons/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoPressIcon": () => (/* binding */ VideoPressIcon)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

const VideoPressIcon = /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  width: "29",
  height: "21",
  viewBox: "0 0 29 21",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Path, {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M2.79037 0.59375C4.0363 0.59375 5.13102 1.41658 5.47215 2.60947L8.8452 14.4044C8.8486 14.4164 8.85411 14.4273 8.86124 14.4368L12.8572 0.59375H15.0927H21.2721C25.6033 0.59375 28.5066 3.39892 28.5066 7.64565C28.5066 11.9411 25.5272 14.6196 21.0818 14.6196H18.1499H14.3719L13.6379 16.8813C12.9796 18.9095 11.0827 20.2839 8.94152 20.2839C6.80035 20.2839 4.90341 18.9095 4.24517 16.8813L0.137069 4.22276C-0.444671 2.43022 0.898038 0.59375 2.79037 0.59375ZM15.7374 10.4119H20.0156C21.8718 10.4119 22.9856 9.35018 22.9856 7.64565C22.9856 5.93137 21.8718 4.91839 20.0156 4.91839H17.5202L15.7374 10.4119Z",
  fill: "#000000"
}));

/***/ }),

/***/ "./src/client/block-editor/blocks/videopress/components/inspector-controls.js":
/*!************************************************************************************!*\
  !*** ./src/client/block-editor/blocks/videopress/components/inspector-controls.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VideoPressInspectorControls)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _seekbar_color_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./seekbar-color-settings */ "./src/client/block-editor/blocks/videopress/components/seekbar-color-settings.js");
/**
 * WordPress dependencies
 */



const __ = _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__,
      _x = _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x;

/**
 * Internal dependencies
 */


/**
 * VideoPress block - Inspector control
 *
 * @param {object} props                 - Component props.
 * @param {object} props.attributes      - Block attributes.
 * @param {Function} props.setAttributes - Function to set block attributes.
 * @returns {object}                     - React component.
 */

function VideoPressInspectorControls(_ref) {
  let {
    attributes,
    setAttributes
  } = _ref;
  const {
    autoplay,
    loop,
    muted,
    controls,
    playsinline,
    preload,
    useAverageColor
  } = attributes;

  const renderControlLabelWithTooltip = (label, tooltipText) => {
    return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
      text: tooltipText,
      position: "top"
    }, /*#__PURE__*/React.createElement("span", null, label));
  };

  const handleAttributeChange = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(attributeName => {
    return newValue => {
      setAttributes({
        [attributeName]: newValue
      });
    };
  }, [setAttributes]);
  return /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: __('Video Settings', "jetpack-videopress-pkg")
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: renderControlLabelWithTooltip(__('Autoplay', "jetpack-videopress-pkg"),
    /* translators: Tooltip describing the "autoplay" option for the VideoPress player */
    __('Start playing the video as soon as the page loads', "jetpack-videopress-pkg")),
    onChange: handleAttributeChange('autoplay'),
    checked: autoplay,
    help: autoplay ? __('Note: Autoplaying videos may cause usability issues for some visitors.', "jetpack-videopress-pkg") : null
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: renderControlLabelWithTooltip(__('Loop', "jetpack-videopress-pkg"),
    /* translators: Tooltip describing the "loop" option for the VideoPress player */
    __('Restarts the video when it reaches the end', "jetpack-videopress-pkg")),
    onChange: handleAttributeChange('loop'),
    checked: loop
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: __('Muted', "jetpack-videopress-pkg"),
    onChange: handleAttributeChange('muted'),
    checked: muted
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: renderControlLabelWithTooltip(__('Playback Controls', "jetpack-videopress-pkg"),
    /* translators: Tooltip describing the "controls" option for the VideoPress player */
    __('Display the video playback controls', "jetpack-videopress-pkg")),
    onChange: handleAttributeChange('controls'),
    checked: controls
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: renderControlLabelWithTooltip(__('Play Inline', "jetpack-videopress-pkg"),
    /* translators: Tooltip describing the "playsinline" option for the VideoPress player */
    __('Play the video inline instead of full-screen on mobile devices', "jetpack-videopress-pkg")),
    onChange: handleAttributeChange('playsinline'),
    checked: playsinline
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: renderControlLabelWithTooltip(__('Preload', "jetpack-videopress-pkg"),
    /* translators: Tooltip describing the "preload" option for the VideoPress player */
    __('Content to dowload before the video is played', "jetpack-videopress-pkg")),
    value: preload,
    onChange: value => setAttributes({
      preload: value
    }),
    options: [{
      value: 'auto',
      label: _x('Auto', 'VideoPress preload setting', "jetpack-videopress-pkg")
    }, {
      value: 'metadata',
      label: _x('Metadata', 'VideoPress preload setting', "jetpack-videopress-pkg")
    }, {
      value: 'none',
      label: _x('None', 'VideoPress preload setting', "jetpack-videopress-pkg")
    }],
    help: 'auto' === preload ? __('Note: Automatically downloading videos may cause issues if there are many videos displayed on the same page.', "jetpack-videopress-pkg") : null
  })), /*#__PURE__*/React.createElement(_seekbar_color_settings__WEBPACK_IMPORTED_MODULE_4__["default"], {
    attributes,
    setAttributes,
    useAverageColor,
    toggleAttribute: handleAttributeChange
  }));
}

/***/ }),

/***/ "./src/client/block-editor/blocks/videopress/components/poster-image-block-control/index.js":
/*!**************************************************************************************************!*\
  !*** ./src/client/block-editor/blocks/videopress/components/poster-image-block-control/index.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PosterImageBlockControl)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "../../../node_modules/.pnpm/@wordpress+icons@9.3.0/node_modules/@wordpress/icons/build-module/library/image.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "../../../node_modules/.pnpm/@wordpress+icons@9.3.0/node_modules/@wordpress/icons/build-module/library/link-off.js");
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.module.scss */ "./src/client/block-editor/blocks/videopress/components/poster-image-block-control/style.module.scss");
/**
 * WordPress dependencies
 */



const __ = _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__;

/**
 * Internal dependencies
 */


const VIDEO_POSTER_ALLOWED_MEDIA_TYPES = ['image'];
/**
 * Poster image control react component.
 *
 * @param {object} props                 - Component props.
 * @param {object} props.attributes      - Block attributes.
 * @param {Function} props.setAttributes - Function to set block attributes.
 * @param {string} props.clientId        - Block client ID.
 * @returns {object}                     - React component.
 */

function PosterImageBlockControl(_ref) {
  let {
    attributes,
    setAttributes,
    clientId
  } = _ref;
  const {
    poster
  } = attributes;

  const onSelectPoster = image => {
    setAttributes({
      poster: image.url
    });
  };

  const onRemovePoster = () => {
    setAttributes({
      poster: ''
    });
  };

  const currentImage = () => {
    if (poster) {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, __('You are currently overriding the default Poster image. Remove it if you want to use the default image generated by VideoPress.', "jetpack-videopress-pkg")));
    }

    return /*#__PURE__*/React.createElement(React.Fragment, null, __('No custom Poster image selected. You can upload or select an image from your media library to override the default video image', "jetpack-videopress-pkg"));
  };

  return /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.BlockControls, {
    group: "block"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dropdown, {
    contentClassName: _style_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].dropdown_content,
    renderToggle: _ref2 => {
      let {
        isOpen,
        onToggle
      } = _ref2;
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarButton, {
        label: __('Poster image', "jetpack-videopress-pkg"),
        showTooltip: true,
        "aria-expanded": isOpen,
        "aria-haspopup": "true",
        onClick: onToggle,
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"]
      });
    },
    renderContent: _ref3 => {
      let {
        onClose
      } = _ref3;
      const videoPosterDescription = `video-block__poster-image-description-${clientId}`;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.NavigableMenu, {
        className: "block-editor-media-replace-flow__media-upload-menu"
      }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.MediaUploadCheck, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.MediaUpload, {
        title: __('Select Poster Image', "jetpack-videopress-pkg"),
        onSelect: image => {
          onSelectPoster(image);
          onClose();
        },
        allowedTypes: VIDEO_POSTER_ALLOWED_MEDIA_TYPES,
        render: _ref4 => {
          let {
            open
          } = _ref4;
          return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
            icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"],
            onClick: open,
            "aria-describedby": videoPosterDescription
          }, !poster ? __('Select Poster Image', "jetpack-videopress-pkg") : __('Replace Poster image', "jetpack-videopress-pkg",
          /* dummy arg to avoid bad minification */
          0), /*#__PURE__*/React.createElement("p", {
            id: videoPosterDescription,
            hidden: true
          }, poster ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)(
          /* translators: Placeholder is an image URL. */
          __('The current poster image url is %s', "jetpack-videopress-pkg"), poster) : __('There is no poster image currently selected', "jetpack-videopress-pkg")));
        }
      })), !!poster && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
        onClick: () => {
          onRemovePoster();
          onClose();
        },
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"]
      }, __('Remove and use default', "jetpack-videopress-pkg"))), /*#__PURE__*/React.createElement("div", {
        className: _style_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].current_media
      }, currentImage()));
    }
  }));
}

/***/ }),

/***/ "./src/client/block-editor/blocks/videopress/components/seekbar-color-settings.js":
/*!****************************************************************************************!*\
  !*** ./src/client/block-editor/blocks/videopress/components/seekbar-color-settings.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_runner_work_jetpack_jetpack_node_modules_pnpm_babel_runtime_7_18_6_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/defineProperty.js */ "../../../node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _home_runner_work_jetpack_jetpack_node_modules_pnpm_babel_runtime_7_18_6_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_jetpack_jetpack_node_modules_pnpm_babel_runtime_7_18_6_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





const __ = _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__;


class SeekbarColorSettings extends _wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Component {
  constructor() {
    super(...arguments);

    _home_runner_work_jetpack_jetpack_node_modules_pnpm_babel_runtime_7_18_6_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(this, "handleChangeSeekbarColor", newColor => {
      this.setState({
        seekbarColor: newColor
      });
    });

    _home_runner_work_jetpack_jetpack_node_modules_pnpm_babel_runtime_7_18_6_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(this, "handleChangeSeekbarLoadingColor", newColor => {
      this.setState({
        seekbarLoadingColor: newColor
      });
    });

    _home_runner_work_jetpack_jetpack_node_modules_pnpm_babel_runtime_7_18_6_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(this, "handleChangeSeekbarPlayedColor", newColor => {
      this.setState({
        seekbarPlayedColor: newColor
      });
    });

    _home_runner_work_jetpack_jetpack_node_modules_pnpm_babel_runtime_7_18_6_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(this, "saveColors", () => {
      const {
        seekbarColor,
        seekbarLoadingColor,
        seekbarPlayedColor
      } = this.state;
      const {
        setAttributes
      } = this.props;
      setAttributes({
        seekbarColor,
        seekbarLoadingColor,
        seekbarPlayedColor
      });
    });

    const {
      seekbarColor: _seekbarColor,
      seekbarPlayedColor: _seekbarPlayedColor,
      seekbarLoadingColor: _seekbarLoadingColor
    } = this.props.attributes;
    this.state = {
      seekbarColor: _seekbarColor,
      seekbarPlayedColor: _seekbarPlayedColor,
      seekbarLoadingColor: _seekbarLoadingColor
    };
  }

  render() {
    const {
      seekbarColor,
      seekbarPlayedColor,
      seekbarLoadingColor
    } = this.state;
    const {
      toggleAttribute,
      useAverageColor
    } = this.props;
    const showTitle = true;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      className: "seekbar-color-settings__panel",
      title: __('Progress Bar Colors', "jetpack-videopress-pkg"),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
      label: __('Match video', "jetpack-videopress-pkg"),
      help: __('Colors adapt to the video as it plays', "jetpack-videopress-pkg"),
      onChange: toggleAttribute('useAverageColor'),
      checked: useAverageColor
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.PanelColorSettings, {
      opened: !useAverageColor,
      showTitle: false,
      colorSettings: [{
        value: seekbarColor,
        onChange: this.handleChangeSeekbarColor,
        label: __('Main', "jetpack-videopress-pkg"),
        showTitle
      }, {
        value: seekbarLoadingColor,
        onChange: this.handleChangeSeekbarLoadingColor,
        label: __('Loaded', "jetpack-videopress-pkg"),
        showTitle
      }, {
        value: seekbarPlayedColor,
        onChange: this.handleChangeSeekbarPlayedColor,
        label: __('Progress', "jetpack-videopress-pkg"),
        showTitle
      }]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      variant: "secondary",
      onClick: this.saveColors
    }, __('Save colors', "jetpack-videopress-pkg"))));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SeekbarColorSettings);

/***/ }),

/***/ "./src/client/block-editor/blocks/videopress/components/videopress-player/index.js":
/*!*****************************************************************************************!*\
  !*** ./src/client/block-editor/blocks/videopress/components/videopress-player/index.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VideoPressPlayer)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! debug */ "../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _scripts_vp_block_bridge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../scripts/vp-block-bridge */ "./src/client/block-editor/blocks/videopress/scripts/vp-block-bridge/index.js");
/**
 * External dependencies
 */




const __ = _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__;

/**
 * Internal dependencies
 */

 // Global scripts array to be run in the Sandbox context.

const globalScripts = []; // Populate scripts array with videopresAjaxURLBlob blobal var.

if (window.videopressAjax) {
  const videopresAjaxURLBlob = new Blob([`var videopressAjax = ${JSON.stringify(window.videopressAjax)};`], {
    type: 'text/javascript'
  });
  globalScripts.push(URL.createObjectURL(videopresAjaxURLBlob), window.videopressAjax.bridgeUrl);
} // Define a debug instance for block bridge.


window.debugBridgeInstance = debug__WEBPACK_IMPORTED_MODULE_4___default()('jetpack:vp-block:bridge'); // Load VideoPressBlock bridge script.

globalScripts.push(_scripts_vp_block_bridge__WEBPACK_IMPORTED_MODULE_5__["default"]);
/**
 * VideoPlayer react component
 *
 * @param {object} props                 - Component props.
 * @param {object} props.html            - Player html to render in the sandbox.
 * @param {boolean} props.isSelected     - Whether the block is selected.
 * @param {object} props.attributes      - Block attributes.
 * @param {Function} props.setAttributes - Function to set block attributes.
 * @param {Array} props.scripts          - Scripts to pass trough to the sandbox.
 * @param {object} props.preview         - oEmbed preview data.
 * @returns {object}                     - React component.
 */

function VideoPressPlayer(_ref) {
  var _ref$current;

  let {
    html,
    isSelected,
    attributes,
    setAttributes,
    scripts = [],
    preview
  } = _ref;
  const ref = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  const {
    maxWidth,
    caption,
    videoRatio
  } = attributes; // Pick up iFrame and sandbox window references.

  const iFrameDomReference = ref === null || ref === void 0 ? void 0 : (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.querySelector('iframe');
  const sandboxWindow = iFrameDomReference === null || iFrameDomReference === void 0 ? void 0 : iFrameDomReference.contentWindow;
  /*
   * Temporary height is used to set the height of the video
   * as soon as the block is rendered into the canvas,
   * while the preview fetching process is happening,
   * trying to reduce the flicker effects as much as possible
   *
   * Once the preview is fetched, the temporary heihgt is ignored.
   */

  const [temporaryHeight, setTemporaryHeight] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)();
  const [isVideoLoaded, setIsVideoLoaded] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (!(ref !== null && ref !== void 0 && ref.current)) {
      return;
    }

    if (preview) {
      // Once the video is loaded, delegate the height to the player (iFrame)
      return setTemporaryHeight('auto');
    }

    if (!videoRatio) {
      return;
    } // When no preview is available, set the height of the video.


    setTemporaryHeight(ref.current.offsetWidth * videoRatio / 100);
    setTimeout(() => {
      // Recalculated in case the sidebar is opened.
      setTemporaryHeight(ref.current.offsetWidth * videoRatio / 100);
    }, 0);
    /*
     * Also, when no preview, consider the video is no loaded yet.
     * note: videopress API does not provide
     * the event to know when the video is not loaded.
     */

    setIsVideoLoaded(false);
  }, [ref, videoRatio, preview]);
  const onVideoLoadingStateHandler = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(_ref2 => {
    let {
      detail
    } = _ref2;
    setIsVideoLoaded((detail === null || detail === void 0 ? void 0 : detail.state) === 'loaded');
  }, []); // set video is loaded as False, when html is not available.

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (html) {
      return;
    }

    setIsVideoLoaded(false);
  }, [html]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (!sandboxWindow) {
      return;
    }

    sandboxWindow.addEventListener('onVideoPressLoadingState', onVideoLoadingStateHandler);
    return () => sandboxWindow === null || sandboxWindow === void 0 ? void 0 : sandboxWindow.removeEventListener('onVideoPressLoadingState', onVideoLoadingStateHandler);
  }, [onVideoLoadingStateHandler, sandboxWindow, html]);
  const onBlockResize = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)((event, direction, domElement) => {
    let newMaxWidth = getComputedStyle(domElement).width;
    const parentElement = domElement.parentElement;

    if (null !== parentElement) {
      const parentWidth = getComputedStyle(domElement.parentElement).width;

      if (newMaxWidth === parentWidth) {
        newMaxWidth = '100%';
      }
    }

    setAttributes({
      maxWidth: newMaxWidth
    });
  }, [setAttributes]);
  const style = {};

  if (temporaryHeight !== 'auto') {
    style.height = temporaryHeight || 200;
    style.paddingBottom = temporaryHeight ? 12 : 0;
  }

  return /*#__PURE__*/React.createElement("figure", {
    className: "jetpack-videopress-player"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ResizableBox, {
    enable: {
      top: false,
      bottom: false,
      left: true,
      right: true
    },
    maxWidth: "100%",
    size: {
      width: maxWidth
    },
    style: {
      margin: 'auto'
    },
    onResizeStop: onBlockResize
  }, !isSelected && /*#__PURE__*/React.createElement("div", {
    className: "jetpack-videopress-player__overlay"
  }), /*#__PURE__*/React.createElement("div", {
    className: "jetpack-videopress-player__wrapper",
    ref: ref,
    style: style
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SandBox, {
    html: html,
    scripts: [...globalScripts, ...scripts]
  }), !isVideoLoaded && /*#__PURE__*/React.createElement("div", {
    className: "jetpack-videopress-player__loading"
  }, __('Loading…', "jetpack-videopress-pkg")))), (!_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.isEmpty(caption) || isSelected) && /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
    tagName: "figcaption",
    placeholder: __('Write caption…', "jetpack-videopress-pkg"),
    value: caption,
    onChange: value => setAttributes({
      caption: value
    }),
    inlineToolbar: true
  }));
}

/***/ }),

/***/ "./src/client/block-editor/blocks/videopress/components/videopress-uploader/index.js":
/*!*******************************************************************************************!*\
  !*** ./src/client/block-editor/blocks/videopress/components/videopress-uploader/index.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_escape_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/escape-html */ "@wordpress/escape-html");
/* harmony import */ var _wordpress_escape_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_escape_html__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var filesize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! filesize */ "../../../node_modules/.pnpm/filesize@8.0.6/node_modules/filesize/lib/filesize.min.js");
/* harmony import */ var filesize__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(filesize__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _edit_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../edit.js */ "./src/client/block-editor/blocks/videopress/edit.js");
/* harmony import */ var _hooks_use_uploader_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/use-uploader.js */ "./src/client/block-editor/blocks/videopress/hooks/use-uploader.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../index.js */ "./src/client/block-editor/blocks/videopress/index.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../icons */ "./src/client/block-editor/blocks/videopress/components/icons/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./style.scss */ "./src/client/block-editor/blocks/videopress/components/videopress-uploader/style.scss");
/**
 * External dependencies
 */





const __ = _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__;



/**
 * Internal dependencies
 */





const ALLOWED_MEDIA_TYPES = ['video'];

const UploadProgress = _ref => {
  let {
    progress,
    file,
    paused,
    onPauseOrResume
  } = _ref;
  const roundedProgress = Math.round(progress);
  const cssWidth = {
    width: `${roundedProgress}%`
  };

  const resumeText = __('Resume', "jetpack-videopress-pkg");

  const pauseText = __('Pause', "jetpack-videopress-pkg");

  const fileSizeLabel = filesize__WEBPACK_IMPORTED_MODULE_5___default()(file === null || file === void 0 ? void 0 : file.size);
  const escapedFileName = (0,_wordpress_escape_html__WEBPACK_IMPORTED_MODULE_3__.escapeHTML)(file === null || file === void 0 ? void 0 : file.name);
  const fileNameLabel = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createInterpolateElement)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.sprintf)(
  /* translators: Placeholder is a video file name. */
  __('Uploading <strong>%s</strong>', "jetpack-videopress-pkg"), escapedFileName), {
    strong: /*#__PURE__*/React.createElement("strong", null)
  });
  return /*#__PURE__*/React.createElement(_edit_js__WEBPACK_IMPORTED_MODULE_7__.PlaceholderWrapper, null, /*#__PURE__*/React.createElement("div", {
    className: "videopress-uploader-progress"
  }, /*#__PURE__*/React.createElement("div", {
    className: "videopress-uploader-progress__file-info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "videopress-uploader-progress__file-name"
  }, fileNameLabel), "\xA0\u2014\xA0", /*#__PURE__*/React.createElement("div", {
    className: "videopress-uploader-progress__file-size"
  }, fileSizeLabel)), /*#__PURE__*/React.createElement("div", {
    className: "videopress-uploader-progress__progress"
  }, /*#__PURE__*/React.createElement("div", {
    className: "videopress-uploader-progress__progress-loaded",
    style: cssWidth
  })), /*#__PURE__*/React.createElement("div", {
    className: "videopress-uploader-progress__actions"
  }, /*#__PURE__*/React.createElement("div", {
    className: "videopress-upload__percent-complete"
  }, `${roundedProgress}%`), roundedProgress < 100 && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "link",
    onClick: onPauseOrResume
  }, paused ? resumeText : pauseText))));
};

const UploadError = _ref2 => {
  let {
    message,
    onRetry,
    onCancel
  } = _ref2;
  return /*#__PURE__*/React.createElement(_edit_js__WEBPACK_IMPORTED_MODULE_7__.PlaceholderWrapper, {
    errorMessage: message,
    onNoticeRemove: onCancel
  }, /*#__PURE__*/React.createElement("div", {
    className: "videopress-uploader__error-actions"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "primary",
    onClick: onRetry
  }, __('Try again', "jetpack-videopress-pkg")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "secondary",
    onClick: onCancel
  }, __('Cancel', "jetpack-videopress-pkg"))));
};

const VideoPressUploader = _ref3 => {
  let {
    attributes,
    setAttributes,
    noticeUI,
    noticeOperations
  } = _ref3;
  const [uploadPaused, setUploadPaused] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const tusUploader = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)(null);
  /*
   * Storing the file to get it name and size for progress.
   */

  const [uploadFile, setFile] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  /*
   * Tracking state when uploading the video file.
   * uploadingProgress is an array with two items:
   *  - the first item is the upload progress
   *  - the second item is total
   */

  const [uploadingProgress, setUploadingProgressState] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)([]); // Define a memoized function to register the upload progress.

  const setUploadingProgress = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    setUploadingProgressState(args);
  }, []);
  /*
   * Tracking error data
   */

  const [uploadErrorData, setUploadErrorDataState] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(null); // Define a memoized function to register the error data.

  const setUploadErrorData = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (error) {
    if (error !== null && error !== void 0 && error.originalResponse) {
      try {
        var _error$originalRespon, _error$originalRespon2;

        // parse failed request response message
        const body = error === null || error === void 0 ? void 0 : (_error$originalRespon = error.originalResponse) === null || _error$originalRespon === void 0 ? void 0 : (_error$originalRespon2 = _error$originalRespon.getBody) === null || _error$originalRespon2 === void 0 ? void 0 : _error$originalRespon2.call(_error$originalRespon);
        const parsedBody = JSON.parse(body);
        setUploadErrorDataState(parsedBody);
        return;
      } catch {}
    }

    setUploadErrorDataState(error);
  }, []);
  /*
   * It's considered the file is uploading
   * when the progress value is lower than the total.
   */

  const isUploadingFile = !!(uploadingProgress !== null && uploadingProgress !== void 0 && uploadingProgress.length && uploadingProgress[0] < uploadingProgress[1]); // File has been upload when the progress value is equal to the total.

  const fileHasBeenUploaded = !!(uploadingProgress !== null && uploadingProgress !== void 0 && uploadingProgress.length && uploadingProgress[0] === uploadingProgress[1]); // Helper instance to upload the video to the VideoPress infrastructure.

  const [videoPressUploader] = (0,_hooks_use_uploader_js__WEBPACK_IMPORTED_MODULE_8__.useResumableUploader)({
    onError: setUploadErrorData,
    onProgress: setUploadingProgress,
    onSuccess: setAttributes
  }); // Returns true if the object represents a valid host for a VideoPress video.
  // Private vidoes are hosted under video.wordpress.com

  const isValidVideoPressUrl = urlObject => {
    const validHosts = ['videopress.com', 'video.wordpress.com'];
    return urlObject.protocol === 'https:' && validHosts.includes(urlObject.host);
  };
  /**
   * Helper function to pick up the guid
   * from the VideoPress URL.
   *
   * @param {string} url - VideoPress URL.
   * @returns {void}       The guid picked up from the URL. Otherwise, False.
   */


  const getGuidFromVideoUrl = url => {
    try {
      const urlObject = new URL(url);

      if (isValidVideoPressUrl(urlObject)) {
        const videoGuid = urlObject.pathname.match(/^\/v\/([a-zA-Z0-9]+)$/);
        return videoGuid.length === 2 ? videoGuid[1] : false;
      }
    } catch (e) {
      return false;
    }
  };
  /**
   * Handler to add a video via an URL.
   *
   * @param {string} videoUrl - URL of the video to attach
   */


  function onSelectURL(videoUrl) {
    const videoGuid = getGuidFromVideoUrl(videoUrl);

    if (!videoGuid) {
      setUploadErrorDataState({
        data: {
          message: __('Invalid VideoPress URL', "jetpack-videopress-pkg")
        }
      });
      return;
    } // Update guid based on the URL.


    setAttributes({
      guid: videoGuid,
      src: videoUrl
    });
  }

  const startUpload = file => {
    // reset error
    if (uploadErrorData) {
      setUploadErrorData(null);
    }

    setFile(file);
    setUploadingProgress(0, file.size); // Upload file to VideoPress infrastructure.

    tusUploader.current = videoPressUploader(file);
  };

  const pauseOrResumeUpload = () => {
    const uploader = tusUploader === null || tusUploader === void 0 ? void 0 : tusUploader.current;

    if (uploader) {
      const uploaderCall = uploadPaused ? 'start' : 'abort';
      uploader[uploaderCall]();
      setUploadPaused(!uploadPaused);
    }
  };
  /**
   * Uploading file handler.
   *
   * @param {File} media - media file to upload
   * @returns {void}
   */


  function onSelectVideo(media) {
    const isFileUploading = null !== media && media instanceof FileList; // Handle upload by selecting a File

    if (isFileUploading) {
      const file = media[0];
      startUpload(file);
      return;
    } // Handle selection of Media Library VideoPress attachment


    if (media.videopress_guid) {
      const videoGuid = media.videopress_guid[0];
      const videoUrl = `https://videopress.com/v/${videoGuid}`;

      if (getGuidFromVideoUrl(videoUrl)) {
        return onSelectURL(videoUrl);
      }
    }

    setUploadErrorDataState({
      data: {
        message: __('Please select a VideoPress video from Library or upload a new one', "jetpack-videopress-pkg")
      }
    });
  }

  const getErrorMessage = () => {
    var _uploadErrorData$data;

    if (!uploadErrorData) {
      return '';
    }

    let errorMessage = (uploadErrorData === null || uploadErrorData === void 0 ? void 0 : (_uploadErrorData$data = uploadErrorData.data) === null || _uploadErrorData$data === void 0 ? void 0 : _uploadErrorData$data.message) || __('Failed to upload your video. Please try again.', "jetpack-videopress-pkg"); // Let's give this error a better message.


    if (errorMessage === 'Invalid Mime') {
      errorMessage = /*#__PURE__*/React.createElement(React.Fragment, null, __('The format of the video you uploaded is not supported.', "jetpack-videopress-pkg"), "\xA0", /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ExternalLink, {
        href: "https://wordpress.com/support/videopress/recommended-video-settings/",
        target: "_blank",
        rel: "noreferrer"
      }, __('Check the recommended video settings.', "jetpack-videopress-pkg")));
    }

    return errorMessage;
  }; // Showing error if upload fails


  if (uploadErrorData) {
    const onRetry = () => {
      startUpload(uploadFile);
    };

    const onCancel = () => {
      setFile(null);
      setUploadingProgress([]);
      setUploadErrorData(null);
    };

    return /*#__PURE__*/React.createElement(UploadError, {
      onRetry: onRetry,
      onCancel: onCancel,
      message: getErrorMessage()
    });
  } // Uploading file to backend


  if (isUploadingFile || fileHasBeenUploaded) {
    const progress = uploadingProgress[0] / uploadingProgress[1] * 100;
    return /*#__PURE__*/React.createElement(UploadProgress, {
      file: uploadFile,
      progress: progress,
      paused: uploadPaused,
      onPauseOrResume: pauseOrResumeUpload
    });
  } // Default view to select file to upload


  return /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.MediaPlaceholder, {
    handleUpload: false,
    className: "is-videopress-placeholder",
    icon: /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.BlockIcon, {
      icon: _icons__WEBPACK_IMPORTED_MODULE_10__.VideoPressIcon
    }),
    labels: {
      title: _index_js__WEBPACK_IMPORTED_MODULE_9__.title,
      instructions: _index_js__WEBPACK_IMPORTED_MODULE_9__.description
    },
    onSelect: onSelectVideo,
    onSelectURL: onSelectURL,
    accept: "video/*",
    allowedTypes: ALLOWED_MEDIA_TYPES,
    value: attributes,
    notices: noticeUI,
    onError: function (error) {
      noticeOperations.removeAllNotices();
      noticeOperations.createErrorNotice(error);
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.withNotices)(VideoPressUploader));

/***/ }),

/***/ "./src/client/block-editor/blocks/videopress/edit.js":
/*!***********************************************************!*\
  !*** ./src/client/block-editor/blocks/videopress/edit.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaceholderWrapper": () => (/* binding */ PlaceholderWrapper),
/* harmony export */   "default": () => (/* binding */ VideoPressEdit)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/icons */ "./src/client/block-editor/blocks/videopress/components/icons/index.js");
/* harmony import */ var _components_inspector_controls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/inspector-controls */ "./src/client/block-editor/blocks/videopress/components/inspector-controls.js");
/* harmony import */ var _components_poster_image_block_control__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/poster-image-block-control */ "./src/client/block-editor/blocks/videopress/components/poster-image-block-control/index.js");
/* harmony import */ var _components_videopress_player__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/videopress-player */ "./src/client/block-editor/blocks/videopress/components/videopress-player/index.js");
/* harmony import */ var _components_videopress_uploader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/videopress-uploader */ "./src/client/block-editor/blocks/videopress/components/videopress-uploader/index.js");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/url */ "./src/client/block-editor/blocks/videopress/utils/url.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! . */ "./src/client/block-editor/blocks/videopress/index.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./editor.scss */ "./src/client/block-editor/blocks/videopress/editor.scss");
/**
 * WordPress dependencies
 */






const __ = _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__;

/**
 * Internal dependencies
 */









const VIDEO_PREVIEW_ATTEMPTS_LIMIT = 10;
const PlaceholderWrapper = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.withNotices)(function (_ref) {
  let {
    children,
    errorMessage,
    noticeUI,
    noticeOperations
  } = _ref;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (!errorMessage) {
      return;
    }

    noticeOperations.removeAllNotices();
    noticeOperations.createErrorNotice(errorMessage);
  }, [errorMessage, noticeOperations]);
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Placeholder, {
    icon: /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.BlockIcon, {
      icon: _components_icons__WEBPACK_IMPORTED_MODULE_7__.VideoPressIcon
    }),
    label: ___WEBPACK_IMPORTED_MODULE_13__.title,
    instructions: ___WEBPACK_IMPORTED_MODULE_13__.description,
    className: "videopress-uploader is-videopress-placeholder",
    notices: noticeUI
  }, children);
});
/**
 * VideoPress block Edit react components
 *
 * @param {object} props                 - Component props.
 * @param {object} props.attributes      - Block attributes.
 * @param {Function} props.setAttributes - Function to set block attributes.
 * @param {boolean} props.isSelected     - Whether the block is selected.
 * @param {string} props.clientId        - Block client ID.
 * @returns {object}                     - React component.
 */

function VideoPressEdit(_ref2) {
  let {
    attributes,
    setAttributes,
    isSelected,
    clientId
  } = _ref2;
  const {
    autoplay,
    loop,
    muted,
    controls,
    playsinline,
    preload,
    useAverageColor,
    seekbarColor,
    seekbarLoadingColor,
    seekbarPlayedColor,
    guid,
    cacheHtml,
    poster,
    align,
    videoRatio
  } = attributes;
  const videoPressUrl = (0,_utils_url__WEBPACK_IMPORTED_MODULE_12__.getVideoPressUrl)(guid, {
    autoplay,
    controls,
    loop,
    muted,
    playsinline,
    preload,
    seekbarColor,
    seekbarLoadingColor,
    seekbarPlayedColor,
    useAverageColor,
    poster
  }); // Get video preview status.

  const {
    preview,
    isRequestingEmbedPreview
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    return {
      preview: select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store).getEmbedPreview(videoPressUrl) || false,
      isRequestingEmbedPreview: select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store).isRequestingEmbedPreview(videoPressUrl) || false
    };
  }, [videoPressUrl]); // Pick video properties from preview.

  const {
    html: previewHtml,
    scripts,
    width: previewWidth,
    height: previewHeight
  } = preview ? preview : {
    html: null,
    scripts: []
  };
  /*
   * Store the preview markup and video thumbnail image
   * into a block `html` and `thumbnail` attributes respectively.
   *
   * `html` will be used to render the player asap,
   * while a fresh preview is geing fetched from the server,
   * via the core store selectors.
   *
   * `thumbnail` will be shown as a fallback image
   * until the fetching preview process finishes.
   */

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (!previewHtml || previewHtml === cacheHtml) {
      return;
    }

    setAttributes({
      cacheHtml: previewHtml
    });
  }, [previewHtml, cacheHtml, setAttributes]);
  const html = previewHtml || cacheHtml; // Store the video ratio to define the initial height of the video.

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (!previewWidth || !previewHeight) {
      return;
    }

    const ratio = previewHeight / previewWidth * 100;

    if (ratio === videoRatio) {
      return;
    }

    setAttributes({
      videoRatio: ratio
    });
  }, [videoRatio, previewWidth, previewHeight, setAttributes]); // Helper to invalidate the preview cache.

  const invalidateResolution = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store).invalidateResolution;
  const invalidateCachedEmbedPreview = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useCallback)(() => {
    invalidateResolution('getEmbedPreview', [videoPressUrl]);
  }, [videoPressUrl, invalidateResolution]);
  /*
   * Getting VideoPress preview.
   * The following code tries to handle issues
   * when the preview is not available even when
   * the VideoPress URL is gotten.
   * It attempts every two seconds to get the so desired video preview.
   */

  const [generatingPreviewCounter, setGeneratingPreviewCounter] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(0);
  const rePreviewAttemptTimer = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useRef)();
  /**
   * Clean the generating process timer.
   *
   * @todo improve doc
   */

  function cleanRegeneratingProcessTimer() {
    if (!(rePreviewAttemptTimer !== null && rePreviewAttemptTimer !== void 0 && rePreviewAttemptTimer.current)) {
      return;
    }

    rePreviewAttemptTimer.current = clearInterval(rePreviewAttemptTimer.current);
  }

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    // Attempts limit achieved. Bail early.
    if (generatingPreviewCounter >= VIDEO_PREVIEW_ATTEMPTS_LIMIT) {
      return cleanRegeneratingProcessTimer();
    } // VideoPress URL is not defined. Bail early and cleans the time.


    if (!videoPressUrl) {
      return cleanRegeneratingProcessTimer();
    } // Bail early (clean the timer) if the preview is already being requested.


    if (isRequestingEmbedPreview) {
      return cleanRegeneratingProcessTimer();
    } // Bail early (clean the timer) when preview is defined.


    if (preview) {
      setGeneratingPreviewCounter(0); // reset counter.

      return cleanRegeneratingProcessTimer();
    } // Bail early when it has been already started.


    if (rePreviewAttemptTimer !== null && rePreviewAttemptTimer !== void 0 && rePreviewAttemptTimer.current) {
      return;
    }

    rePreviewAttemptTimer.current = setTimeout(() => {
      // Abort whether the preview is already defined.
      if (preview) {
        setGeneratingPreviewCounter(0); // reset counter.

        return;
      }

      setGeneratingPreviewCounter(v => v + 1);
      invalidateCachedEmbedPreview();
    }, 2000);
    return cleanRegeneratingProcessTimer;
  }, [generatingPreviewCounter, rePreviewAttemptTimer, invalidateCachedEmbedPreview, preview, videoPressUrl, isRequestingEmbedPreview]);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()('wp-block-jetpack-videopress', {
      [`align${align}`]: align,
      'is-updating-preview': !previewHtml
    })
  });

  if (!isRequestingEmbedPreview && !videoPressUrl) {
    return /*#__PURE__*/React.createElement(_components_videopress_uploader__WEBPACK_IMPORTED_MODULE_11__["default"], {
      setAttributes: setAttributes,
      attributes: attributes
    });
  } // Generating video preview.


  if ((isRequestingEmbedPreview || !preview) && generatingPreviewCounter > 0 && generatingPreviewCounter < VIDEO_PREVIEW_ATTEMPTS_LIMIT) {
    return /*#__PURE__*/React.createElement(PlaceholderWrapper, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null), __('Generating preview…', "jetpack-videopress-pkg"), /*#__PURE__*/React.createElement("strong", null, " ", generatingPreviewCounter));
  } // 5 - Generating video preview failed.


  if (generatingPreviewCounter >= VIDEO_PREVIEW_ATTEMPTS_LIMIT && !preview) {
    return /*#__PURE__*/React.createElement(PlaceholderWrapper, {
      errorMessage: __('Impossible to get a video preview after ten attempts.', "jetpack-videopress-pkg"),
      onNoticeRemove: invalidateResolution
    }, /*#__PURE__*/React.createElement("div", {
      className: "videopress-uploader__error-actions"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      variant: "primary",
      onClick: invalidateResolution
    }, __('Try again', "jetpack-videopress-pkg")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      variant: "secondary",
      onClick: () => {
        setAttributes({
          src: undefined,
          id: undefined,
          guid: undefined
        });
      }
    }, __('Cancel', "jetpack-videopress-pkg"))));
  } // X - Show VideoPress player. @todo: finish


  return /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement(_components_inspector_controls__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), /*#__PURE__*/React.createElement(_components_poster_image_block_control__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attributes: attributes,
    setAttributes: setAttributes,
    clientId: clientId
  }), /*#__PURE__*/React.createElement(_components_videopress_player__WEBPACK_IMPORTED_MODULE_10__["default"], {
    html: html,
    isUpdatingPreview: !previewHtml,
    scripts: scripts,
    attributes: attributes,
    setAttributes: setAttributes,
    isSelected: isSelected,
    className: "wp-block-jetpack-videopress",
    preview: preview
  }));
}

/***/ }),

/***/ "./src/client/block-editor/blocks/videopress/hooks/use-uploader.js":
/*!*************************************************************************!*\
  !*** ./src/client/block-editor/blocks/videopress/hooks/use-uploader.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getJWT": () => (/* binding */ getJWT),
/* harmony export */   "useResumableUploader": () => (/* binding */ useResumableUploader)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tus_js_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tus-js-client */ "../../../node_modules/.pnpm/tus-js-client@2.3.0/node_modules/tus-js-client/lib.esm/browser/index.js");
/**
 * External dependencies
 */


const jwtsForKeys = {};
const getJWT = function (key) {
  return new Promise(function (resolve, reject) {
    const extras = key ? {
      data: {
        key
      }
    } : {}; // eslint-disable-next-line no-undef

    wp.media.ajax('videopress-get-upload-jwt', {
      async: true,
      ...extras
    }).done(function (response) {
      resolve({
        token: response.upload_token,
        blogId: response.upload_blog_id,
        url: response.upload_action_url
      });
    }).fail(function (reason) {
      reject(reason);
    });
  });
};
const useResumableUploader = _ref => {
  let {
    onError,
    onProgress,
    onSuccess,
    key
  } = _ref;
  const [data, setData] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [error, setError] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null); // collect the jwt for the key

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getJWT(key).then(setData).catch(setError);
  }, [key]);

  const uploaded = file => {
    const upload = new tus_js_client__WEBPACK_IMPORTED_MODULE_1__.Upload(file, {
      onError: onError,
      onProgress: onProgress,
      endpoint: data.url,
      removeFingerprintOnSuccess: true,
      withCredentials: false,
      autoRetry: true,
      overridePatchMethod: false,
      chunkSize: 10000000,
      // 10 Mb.
      allowedFileTypes: ['video/*'],
      metadata: {
        filename: file.name,
        filetype: file.type
      },
      retryDelays: [0, 1000, 3000, 5000, 10000],
      onAfterResponse: function (req, res) {
        // Why is this not showing the x-headers?
        if (res.getStatus() >= 400) {
          return;
        }

        const GUID_HEADER = 'x-videopress-upload-guid';
        const MEDIA_ID_HEADER = 'x-videopress-upload-media-id';
        const SRC_URL_HEADER = 'x-videopress-upload-src-url';
        const guid = res.getHeader(GUID_HEADER);
        const mediaId = res.getHeader(MEDIA_ID_HEADER);
        const src = res.getHeader(SRC_URL_HEADER);

        if (guid && mediaId && src) {
          onSuccess && onSuccess({
            id: Number(mediaId),
            guid,
            src
          });
          return;
        }

        const headerMap = {
          'x-videopress-upload-key-token': 'token',
          'x-videopress-upload-key': 'key'
        };
        const tokenData = {};
        Object.keys(headerMap).forEach(function (header) {
          const value = res.getHeader(header);

          if (!value) {
            return;
          }

          tokenData[headerMap[header]] = value;
        });

        if (tokenData.key && tokenData.token) {
          jwtsForKeys[tokenData.key] = tokenData.token;
        }
      },
      onBeforeRequest: function (req) {
        // make ALL requests be either POST or GET to honor the public-api.wordpress.com "contract".
        const method = req._method;

        if (['HEAD', 'OPTIONS'].indexOf(method) >= 0) {
          req._method = 'GET';
          req.setHeader('X-HTTP-Method-Override', method);
        }

        if (['DELETE', 'PUT', 'PATCH'].indexOf(method) >= 0) {
          req._method = 'POST';
          req.setHeader('X-HTTP-Method-Override', method);
        }

        req._xhr.open(req._method, req._url, true); // Set the headers again, reopening the xhr resets them.


        Object.keys(req._headers).map(function (headerName) {
          req.setHeader(headerName, req._headers[headerName]);
        });

        if ('POST' === method) {
          const hasJWT = !!data.token;

          if (hasJWT) {
            req.setHeader('x-videopress-upload-token', data.token);
          } else {
            throw 'should never happen';
          }
        }

        if (['OPTIONS', 'GET', 'HEAD', 'DELETE', 'PUT', 'PATCH'].indexOf(method) >= 0) {
          const url = new URL(req._url);
          const path = url.pathname;
          const parts = path.split('/');
          const maybeUploadkey = parts[parts.length - 1];

          if (jwtsForKeys[maybeUploadkey]) {
            req.setHeader('x-videopress-upload-token', jwtsForKeys[maybeUploadkey]);
          } else if ('HEAD' === method) {
            return getJWT(maybeUploadkey).then(responseData => {
              jwtsForKeys[maybeUploadkey] = responseData.token;
              req.setHeader('x-videopress-upload-token', responseData.token);
              return req;
            });
          }
        }

        return Promise.resolve(req);
      }
    });
    upload.findPreviousUploads().then(function (previousUploads) {
      if (previousUploads.length) {
        upload.resumeFromPreviousUpload(previousUploads[0]);
      }

      upload.start();
    });
    return upload;
  };

  return [uploaded, data, error];
};

/***/ }),

/***/ "./src/client/block-editor/blocks/videopress/index.js":
/*!************************************************************!*\
  !*** ./src/client/block-editor/blocks/videopress/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "description": () => (/* binding */ description),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "title": () => (/* binding */ title)
/* harmony export */ });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/client/block-editor/blocks/videopress/block.json");
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/icons */ "./src/client/block-editor/blocks/videopress/components/icons/index.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/client/block-editor/blocks/videopress/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/client/block-editor/blocks/videopress/save.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/client/block-editor/blocks/videopress/style.scss");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */






const {
  name,
  title,
  description
} = _block_json__WEBPACK_IMPORTED_MODULE_1__;
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"],
  icon: _components_icons__WEBPACK_IMPORTED_MODULE_2__.VideoPressIcon,
  transforms: {
    from: [{
      type: 'block',
      blocks: ['core/video'],
      transform: attrs => (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('jetpack/videopress-block', attrs)
    }],
    to: [{
      type: 'block',
      blocks: ['core/video'],
      transform: attrs => (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('core/video', attrs)
    }]
  }
});

/***/ }),

/***/ "./src/client/block-editor/blocks/videopress/save.js":
/*!***********************************************************!*\
  !*** ./src/client/block-editor/blocks/videopress/save.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _home_runner_work_jetpack_jetpack_node_modules_pnpm_babel_runtime_7_18_6_node_modules_babel_runtime_helpers_extends_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/extends.js */ "../../../node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _home_runner_work_jetpack_jetpack_node_modules_pnpm_babel_runtime_7_18_6_node_modules_babel_runtime_helpers_extends_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_jetpack_jetpack_node_modules_pnpm_babel_runtime_7_18_6_node_modules_babel_runtime_helpers_extends_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/url */ "./src/client/block-editor/blocks/videopress/utils/url.js");


/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


/**
 * VideoPress block save function
 *
 * @param {object} props             - Component props.
 * @param {object} props.attributes  - Block attributes.
 * @returns {object}                 - React component.
 */

function save(_ref) {
  let {
    attributes
  } = _ref;
  const {
    align,
    autoplay,
    caption,
    loop,
    muted,
    controls,
    playsinline,
    preload,
    useAverageColor,
    seekbarColor,
    seekbarLoadingColor,
    seekbarPlayedColor,
    guid,
    maxWidth,
    poster
  } = attributes;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('wp-block-jetpack-videopress', 'jetpack-videopress-player', {
      [`align${align}`]: align
    })
  });
  const videoPressUrl = (0,_utils_url__WEBPACK_IMPORTED_MODULE_3__.getVideoPressUrl)(guid, {
    autoplay,
    controls,
    loop,
    muted,
    playsinline,
    preload,
    seekbarColor,
    seekbarLoadingColor,
    seekbarPlayedColor,
    useAverageColor,
    poster
  }); // Adjust block with based on custom maxWidth.

  const style = {};

  if (maxWidth && maxWidth.length > 0 && '100%' !== maxWidth) {
    style.maxWidth = maxWidth;
    style.margin = 'auto';
  }

  return /*#__PURE__*/React.createElement("figure", _home_runner_work_jetpack_jetpack_node_modules_pnpm_babel_runtime_7_18_6_node_modules_babel_runtime_helpers_extends_js__WEBPACK_IMPORTED_MODULE_0___default()({}, blockProps, {
    style: style
  }), /*#__PURE__*/React.createElement("div", {
    className: "jetpack-videopress-player__wrapper"
  }, `\n${videoPressUrl}\n`
  /* URL needs to be on its own line. */
  ), !_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.isEmpty(caption) && /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "figcaption",
    value: caption
  }));
}

/***/ }),

/***/ "./src/client/block-editor/blocks/videopress/scripts/vp-block-bridge/index.js":
/*!************************************************************************************!*\
  !*** ./src/client/block-editor/blocks/videopress/scripts/vp-block-bridge/index.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const rawScript = `
	if ( ! window?.debug ) {
		window.debug = window.parent?.debugBridgeInstance ?? ( () => {} );
	}

	function initWPBlockBridge() {
		debug( '🌉 🛠 building the bridge' );

		const videoPressIFrame = document.querySelector('iframe');
		if ( ! videoPressIFrame?.contentWindow ) {
			return;
		}

		const videoPressWindow = videoPressIFrame.contentWindow;

		// Allowed events emitted by the videopress API.
		const videoPressEventsMap = {
			'videopress_playing': {
				name: 'onVideoPressPlaying',
				type: 'event',
			},
			'videopress_pause': {
				name: 'onVideoPressPause',
				type: 'event',
			},
			'videopress_seeking': {
				name: 'onVideoPressSeeking',
				type: 'event',
			},
			'videopress_resize': {
				name: 'onVideoPressResize',
				type: 'event',
			},
			'videopress_volumechange': {
				name: 'onVideoPressVolumeChange',
				type: 'event',
			},
			'videopress_ended': {
				name: 'onVideoPressEnded',
				type: 'event',
			},
			'videopress_timeupdate': {
				name: 'onVideoPressTimeUpdate',
				type: 'event',
			},
			'videopress_durationchange': {
				name: 'onVideoPressDurationChange',
				type: 'event',
			},
			'videopress_progress': {
				name: 'onVideoPressProgress',
				type: 'event',
			},
			'videopress_loading_state': {
				name: 'onVideoPressLoadingState',
				type: 'event',
			},
			videopress_toggle_fullscreen: {
				name: 'onVideoPressToggleFullscreen',
				type: 'event',
			},
			'vpBlockActionPlay': {
				name: 'vpBlockActionPlay',
				type: 'action',
				videoPressAction: 'videopress_action_play',
			},
			'vpBlockActionPause': {
				name: 'vpBlockActionPause',
				type: 'action',
				videoPressAction: 'videopress_action_pause',
			},
			'vpBlockActionSetCurrentTime': {
				name: 'vpBlockActionPause',
				type: 'action',
				videoPressAction: 'videopress_action_set_currenttime',
			},
		};

		const allowedVideoPressEvents = Object.keys( videoPressEventsMap );

		window.addEventListener( 'message', ( ev ) => {
			const { data } = ev;
			const eventName = data.event;
			if ( ! allowedVideoPressEvents.includes( eventName ) ) {
				return;
			}
			
			// Rename event with the 'onVideoPress' prefix.
			const vpEvent = videoPressEventsMap[ eventName ];
			const { name: vpEventName, type: vpEventType, videoPressAction } = vpEvent;

			// Dispatch event to top when it's an event
			if ( vpEventType === 'event' ) {
				// It preferrs to use the guid instead of the id.
				const guid = data.id;
				const originalEventName = data.event;
	
				// clean event data object
				delete data.event;
				delete data.id;
	
				// Emite custom event with the event data.
				const videoPressBlockEvent = new CustomEvent( vpEventName, {
					detail: {
						...data,
						originalEventName,
						guid,
					},
				} );

				debug( '🌉 %o [%s] ➜ %o', originalEventName, guid, vpEventName );

				// Dispatch custom event in iFrame window...
				window.dispatchEvent( videoPressBlockEvent );

				// ...and also dipatch to the parent window,
				// in case it exists.
				if ( window?.parent && window.parent !== window ) {
					window.parent.dispatchEvent( videoPressBlockEvent );
				}
			}

			if ( vpEventType === 'action' ) {
				// Overwrite event from -> to
				data.event = videoPressAction;

				debug( '🌉 recieve %o -> dispatching %o [%o]', eventName, videoPressAction, data );
				videoPressWindow.postMessage( data, '*' );
			}
		} );
	}

	initWPBlockBridge();
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (URL.createObjectURL(new Blob([rawScript], {
  type: 'text/javascript'
})));

/***/ }),

/***/ "./src/client/block-editor/blocks/videopress/utils/url.js":
/*!****************************************************************!*\
  !*** ./src/client/block-editor/blocks/videopress/utils/url.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getVideoPressUrl": () => (/* binding */ getVideoPressUrl)
/* harmony export */ });
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_0__);

const getVideoPressUrl = (guid, _ref) => {
  let {
    autoplay,
    controls,
    loop,
    muted,
    playsinline,
    poster,
    preload,
    seekbarColor,
    seekbarPlayedColor,
    seekbarLoadingColor,
    useAverageColor
  } = _ref;

  if (!guid) {
    return null;
  } // In order to have a cleaner URL, we only set the options differing from the default VideoPress player settings:
  // - Autoplay: Turned off by default.
  // - Controls: Turned on by default.
  // - Loop: Turned off by default.
  // - Muted: Turned off by default.
  // - Plays Inline: Turned off by default.
  // - Poster: No image by default.
  // - Preload: None by default.


  const options = {
    resizeToParent: true,
    cover: true,
    ...(autoplay && {
      autoPlay: true
    }),
    ...(!controls && {
      controls: false
    }),
    ...(loop && {
      loop: true
    }),
    ...(muted && {
      muted: true,
      persistVolume: false
    }),
    ...(playsinline && {
      playsinline: true
    }),
    ...(poster && {
      posterUrl: poster
    }),
    ...(preload !== 'none' && {
      preloadContent: preload
    }),
    ...(seekbarColor !== '' && {
      sbc: seekbarColor
    }),
    ...(seekbarPlayedColor !== '' && {
      sbpc: seekbarPlayedColor
    }),
    ...(seekbarLoadingColor !== '' && {
      sblc: seekbarLoadingColor
    }),
    ...(useAverageColor && {
      useAverageColor: true
    })
  };
  return (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_0__.addQueryArgs)(`https://videopress.com/v/${guid}`, options);
};

/***/ }),

/***/ "../../../node_modules/.pnpm/tus-js-client@2.3.0/node_modules/tus-js-client/lib.esm/browser/fileReader.js":
/*!****************************************************************************************************************!*\
  !*** ../../../node_modules/.pnpm/tus-js-client@2.3.0/node_modules/tus-js-client/lib.esm/browser/fileReader.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FileReader)
/* harmony export */ });
/* harmony import */ var _isReactNative__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isReactNative */ "../../../node_modules/.pnpm/tus-js-client@2.3.0/node_modules/tus-js-client/lib.esm/browser/isReactNative.js");
/* harmony import */ var _uriToBlob__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uriToBlob */ "../../../node_modules/.pnpm/tus-js-client@2.3.0/node_modules/tus-js-client/lib.esm/browser/uriToBlob.js");
/* harmony import */ var _isCordova__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isCordova */ "../../../node_modules/.pnpm/tus-js-client@2.3.0/node_modules/tus-js-client/lib.esm/browser/isCordova.js");
/* harmony import */ var _readAsByteArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./readAsByteArray */ "../../../node_modules/.pnpm/tus-js-client@2.3.0/node_modules/tus-js-client/lib.esm/browser/readAsByteArray.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var FileSource = /*#__PURE__*/function () {
  // Make this.size a method
  function FileSource(file) {
    _classCallCheck(this, FileSource);

    this._file = file;
    this.size = file.size;
  }

  _createClass(FileSource, [{
    key: "slice",
    value: function slice(start, end) {
      // In Apache Cordova applications, a File must be resolved using
      // FileReader instances, see
      // https://cordova.apache.org/docs/en/8.x/reference/cordova-plugin-file/index.html#read-a-file
      if ((0,_isCordova__WEBPACK_IMPORTED_MODULE_2__["default"])()) {
        return (0,_readAsByteArray__WEBPACK_IMPORTED_MODULE_3__["default"])(this._file.slice(start, end));
      }

      var value = this._file.slice(start, end);

      return Promise.resolve({
        value: value
      });
    }
  }, {
    key: "close",
    value: function close() {// Nothing to do here since we don't need to release any resources.
    }
  }]);

  return FileSource;
}();

var StreamSource = /*#__PURE__*/function () {
  function StreamSource(reader, chunkSize) {
    _classCallCheck(this, StreamSource);

    this._chunkSize = chunkSize;
    this._buffer = undefined;
    this._bufferOffset = 0;
    this._reader = reader;
    this._done = false;
  }

  _createClass(StreamSource, [{
    key: "slice",
    value: function slice(start, end) {
      if (start < this._bufferOffset) {
        return Promise.reject(new Error("Requested data is before the reader's current offset"));
      }

      return this._readUntilEnoughDataOrDone(start, end);
    }
  }, {
    key: "_readUntilEnoughDataOrDone",
    value: function _readUntilEnoughDataOrDone(start, end) {
      var _this = this;

      var hasEnoughData = end <= this._bufferOffset + len(this._buffer);

      if (this._done || hasEnoughData) {
        var value = this._getDataFromBuffer(start, end);

        var done = value == null ? this._done : false;
        return Promise.resolve({
          value: value,
          done: done
        });
      }

      return this._reader.read().then(function (_ref) {
        var value = _ref.value,
            done = _ref.done;

        if (done) {
          _this._done = true;
        } else if (_this._buffer === undefined) {
          _this._buffer = value;
        } else {
          _this._buffer = concat(_this._buffer, value);
        }

        return _this._readUntilEnoughDataOrDone(start, end);
      });
    }
  }, {
    key: "_getDataFromBuffer",
    value: function _getDataFromBuffer(start, end) {
      // Remove data from buffer before `start`.
      // Data might be reread from the buffer if an upload fails, so we can only
      // safely delete data when it comes *before* what is currently being read.
      if (start > this._bufferOffset) {
        this._buffer = this._buffer.slice(start - this._bufferOffset);
        this._bufferOffset = start;
      } // If the buffer is empty after removing old data, all data has been read.


      var hasAllDataBeenRead = len(this._buffer) === 0;

      if (this._done && hasAllDataBeenRead) {
        return null;
      } // We already removed data before `start`, so we just return the first
      // chunk from the buffer.


      return this._buffer.slice(0, end - start);
    }
  }, {
    key: "close",
    value: function close() {
      if (this._reader.cancel) {
        this._reader.cancel();
      }
    }
  }]);

  return StreamSource;
}();

function len(blobOrArray) {
  if (blobOrArray === undefined) return 0;
  if (blobOrArray.size !== undefined) return blobOrArray.size;
  return blobOrArray.length;
}
/*
  Typed arrays and blobs don't have a concat method.
  This function helps StreamSource accumulate data to reach chunkSize.
*/


function concat(a, b) {
  if (a.concat) {
    // Is `a` an Array?
    return a.concat(b);
  }

  if (a instanceof Blob) {
    return new Blob([a, b], {
      type: a.type
    });
  }

  if (a.set) {
    // Is `a` a typed array?
    var c = new a.constructor(a.length + b.length);
    c.set(a);
    c.set(b, a.length);
    return c;
  }

  throw new Error('Unknown data type');
}

var FileReader = /*#__PURE__*/function () {
  function FileReader() {
    _classCallCheck(this, FileReader);
  }

  _createClass(FileReader, [{
    key: "openFile",
    value: function openFile(input, chunkSize) {
      // In React Native, when user selects a file, instead of a File or Blob,
      // you usually get a file object {} with a uri property that contains
      // a local path to the file. We use XMLHttpRequest to fetch
      // the file blob, before uploading with tus.
      if ((0,_isReactNative__WEBPACK_IMPORTED_MODULE_0__["default"])() && input && typeof input.uri !== 'undefined') {
        return (0,_uriToBlob__WEBPACK_IMPORTED_MODULE_1__["default"])(input.uri).then(function (blob) {
          return new FileSource(blob);
        })["catch"](function (err) {
          throw new Error("tus: cannot fetch `file.uri` as Blob, make sure the uri is correct and accessible. ".concat(err));
        });
      } // Since we emulate the Blob type in our tests (not all target browsers
      // support it), we cannot use `instanceof` for testing whether the input value
      // can be handled. Instead, we simply check is the slice() function and the
      // size property are available.


      if (typeof input.slice === 'function' && typeof input.size !== 'undefined') {
        return Promise.resolve(new FileSource(input));
      }

      if (typeof input.read === 'function') {
        chunkSize = +chunkSize;

        if (!isFinite(chunkSize)) {
          return Promise.reject(new Error('cannot create source for stream without a finite value for the `chunkSize` option'));
        }

        return Promise.resolve(new StreamSource(input, chunkSize));
      }

      return Promise.reject(new Error('source object may only be an instance of File, Blob, or Reader in this environment'));
    }
  }]);

  return FileReader;
}();



/***/ }),

/***/ "../../../node_modules/.pnpm/tus-js-client@2.3.0/node_modules/tus-js-client/lib.esm/browser/fingerprint.js":
/*!*****************************************************************************************************************!*\
  !*** ../../../node_modules/.pnpm/tus-js-client@2.3.0/node_modules/tus-js-client/lib.esm/browser/fingerprint.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ fingerprint)
/* harmony export */ });
/* harmony import */ var _isReactNative__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isReactNative */ "../../../node_modules/.pnpm/tus-js-client@2.3.0/node_modules/tus-js-client/lib.esm/browser/isReactNative.js");
 // TODO: Differenciate between input types

/**
 * Generate a fingerprint for a file which will be used the store the endpoint
 *
 * @param {File} file
 * @param {Object} options
 * @param {Function} callback
 */

function fingerprint(file, options) {
  if ((0,_isReactNative__WEBPACK_IMPORTED_MODULE_0__["default"])()) {
    return Promise.resolve(reactNativeFingerprint(file, options));
  }

  return Promise.resolve(['tus-br', file.name, file.type, file.size, file.lastModified, options.endpoint].join('-'));
}

function reactNativeFingerprint(file, options) {
  var exifHash = file.exif ? hashCode(JSON.stringify(file.exif)) : 'noexif';
  return ['tus-rn', file.name || 'noname', file.size || 'nosize', exifHash, options.endpoint].join('/');
}

function hashCode(str) {
  // from https://stackoverflow.com/a/8831937/151666
  var hash = 0;

  if (str.length === 0) {
    return hash;
  }

  for (var i = 0; i < str.length; i++) {
    var _char = str.charCodeAt(i);

    hash = (hash << 5) - hash + _char;
    hash &= hash; // Convert to 32bit integer
  }

  return hash;
}

/***/ }),

/***/ "../../../node_modules/.pnpm/tus-js-client@2.3.0/node_modules/tus-js-client/lib.esm/browser/httpStack.js":
/*!***************************************************************************************************************!*\
  !*** ../../../node_modules/.pnpm/tus-js-client@2.3.0/node_modules/tus-js-client/lib.esm/browser/httpStack.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ XHRHttpStack)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* global window */
var XHRHttpStack = /*#__PURE__*/function () {
  function XHRHttpStack() {
    _classCallCheck(this, XHRHttpStack);
  }

  _createClass(XHRHttpStack, [{
    key: "createRequest",
    value: function createRequest(method, url) {
      return new Request(method, url);
    }
  }, {
    key: "getName",
    value: function getName() {
      return 'XHRHttpStack';
    }
  }]);

  return XHRHttpStack;
}();



var Request = /*#__PURE__*/function () {
  function Request(method, url) {
    _classCallCheck(this, Request);

    this._xhr = new XMLHttpRequest();

    this._xhr.open(method, url, true);

    this._method = method;
    this._url = url;
    this._headers = {};
  }

  _createClass(Request, [{
    key: "getMethod",
    value: function getMethod() {
      return this._method;
    }
  }, {
    key: "getURL",
    value: function getURL() {
      return this._url;
    }
  }, {
    key: "setHeader",
    value: function setHeader(header, value) {
      this._xhr.setRequestHeader(header, value);

      this._headers[header] = value;
    }
  }, {
    key: "getHeader",
    value: function getHeader(header) {
      return this._headers[header];
    }
  }, {
    key: "setProgressHandler",
    value: function setProgressHandler(progressHandler) {
      // Test support for progress events before attaching an event listener
      if (!('upload' in this._xhr)) {
        return;
      }

      this._xhr.upload.onprogress = function (e) {
        if (!e.lengthComputable) {
          return;
        }

        progressHandler(e.loaded);
      };
    }
  }, {
    key: "send",
    value: function send() {
      var _this = this;

      var body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return new Promise(function (resolve, reject) {
        _this._xhr.onload = function () {
          resolve(new Response(_this._xhr));
        };

        _this._xhr.onerror = function (err) {
          reject(err);
        };

        _this._xhr.send(body);
      });
    }
  }, {
    key: "abort",
    value: function abort() {
      this._xhr.abort();

      return Promise.resolve();
    }
  }, {
    key: "getUnderlyingObject",
    value: function getUnderlyingObject() {
      return this._xhr;
    }
  }]);

  return Request;
}();

var Response = /*#__PURE__*/function () {
  function Response(xhr) {
    _classCallCheck(this, Response);

    this._xhr = xhr;
  }

  _createClass(Response, [{
    key: "getStatus",
    value: function getStatus() {
      return this._xhr.status;
    }
  }, {
    key: "getHeader",
    value: function getHeader(header) {
      return this._xhr.getResponseHeader(header);
    }
  }, {
    key: "getBody",
    value: function getBody() {
      return this._xhr.responseText;
    }
  }, {
    key: "getUnderlyingObject",
    value: function getUnderlyingObject() {
      return this._xhr;
    }
  }]);

  return Response;
}();

/***/ }),

/***/ "../../../node_modules/.pnpm/tus-js-client@2.3.0/node_modules/tus-js-client/lib.esm/browser/index.js":
/*!***********************************************************************************************************!*\
  !*** ../../../node_modules/.pnpm/tus-js-client@2.3.0/node_modules/tus-js-client/lib.esm/browser/index.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpStack": () => (/* reexport safe */ _httpStack__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "Upload": () => (/* binding */ Upload),
/* harmony export */   "canStoreURLs": () => (/* reexport safe */ _urlStorage__WEBPACK_IMPORTED_MODULE_3__.canStoreURLs),
/* harmony export */   "defaultOptions": () => (/* binding */ defaultOptions),
/* harmony export */   "enableDebugLog": () => (/* reexport safe */ _logger__WEBPACK_IMPORTED_MODULE_2__.enableDebugLog),
/* harmony export */   "isSupported": () => (/* binding */ isSupported)
/* harmony export */ });
/* harmony import */ var _upload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../upload */ "../../../node_modules/.pnpm/tus-js-client@2.3.0/node_modules/tus-js-client/lib.esm/upload.js");
/* harmony import */ var _noopUrlStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../noopUrlStorage */ "../../../node_modules/.pnpm/tus-js-client@2.3.0/node_modules/tus-js-client/lib.esm/noopUrlStorage.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logger */ "../../../node_modules/.pnpm/tus-js-client@2.3.0/node_modules/tus-js-client/lib.esm/logger.js");
/* harmony import */ var _urlStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./urlStorage */ "../../../node_modules/.pnpm/tus-js-client@2.3.0/node_modules/tus-js-client/lib.esm/browser/urlStorage.js");
/* harmony import */ var _httpStack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./httpStack */ "../../../node_modules/.pnpm/tus-js-client@2.3.0/node_modules/tus-js-client/lib.esm/browser/httpStack.js");
/* harmony import */ var _fileReader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fileReader */ "../../../node_modules/.pnpm/tus-js-client@2.3.0/node_modules/tus-js-client/lib.esm/browser/fileReader.js");
/* harmony import */ var _fingerprint__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fingerprint */ "../../../node_modules/.pnpm/tus-js-client@2.3.0/node_modules/tus-js-client/lib.esm/browser/fingerprint.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* global window */








var defaultOptions = _objectSpread({}, _upload__WEBPACK_IMPORTED_MODULE_0__["default"].defaultOptions, {
  httpStack: new _httpStack__WEBPACK_IMPORTED_MODULE_4__["default"](),
  fileReader: new _fileReader__WEBPACK_IMPORTED_MODULE_5__["default"](),
  urlStorage: _urlStorage__WEBPACK_IMPORTED_MODULE_3__.canStoreURLs ? new _urlStorage__WEBPACK_IMPORTED_MODULE_3__.WebStorageUrlStorage() : new _noopUrlStorage__WEBPACK_IMPORTED_MODULE_1__["default"](),
  fingerprint: _fingerprint__WEBPACK_IMPORTED_MODULE_6__["default"]
});

var Upload = /*#__PURE__*/function (_BaseUpload) {
  _inherits(Upload, _BaseUpload);

  var _super = _createSuper(Upload);

  function Upload() {
    var file = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Upload);

    options = _objectSpread({}, defaultOptions, {}, options);
    return _super.call(this, file, options);
  }

  _createClass(Upload, null, [{
    key: "terminate",
    value: function terminate(url, options, cb) {
      options = _objectSpread({}, defaultOptions, {}, options);
      return _upload__WEBPACK_IMPORTED_MODULE_0__["default"].terminate(url, options, cb);
    }
  }]);

  return Upload;
}(_upload__WEBPACK_IMPORTED_MODULE_0__["default"]);

var _window = window,
    XMLHttpRequest = _window.XMLHttpRequest,
    Blob = _window.Blob;
var isSupported = XMLHttpRequest && Blob && typeof Blob.prototype.slice === 'function';


/***/ }),

/***/ "../../../node_modules/.pnpm/tus-js-client@2.3.0/node_modules/tus-js-client/lib.esm/browser/isCordova.js":
/*!***************************************************************************************************************!*\
  !*** ../../../node_modules/.pnpm/tus-js-client@2.3.0/node_modules/tus-js-client/lib.esm/browser/isCordova.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var isCordova = function isCordova() {
  return typeof window != 'undefined' && (typeof window.PhoneGap != 'undefined' || typeof window.Cordova != 'undefined' || typeof window.cordova != 'undefined');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isCordova);

/***/ }),

/***/ "../../../node_modules/.pnpm/tus-js-client@2.3.0/node_modules/tus-js-client/lib.esm/browser/isReactNative.js":
/*!*******************************************************************************************************************!*\
  !*** ../../../node_modules/.pnpm/tus-js-client@2.3.0/node_modules/tus-js-client/lib.esm/browser/isReactNative.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var isReactNative = function isReactNative() {
  return typeof navigator !== 'undefined' && typeof navigator.product === 'string' && navigator.product.toLowerCase() === 'reactnative';
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isReactNative);

/***/ }),

/***/ "../../../node_modules/.pnpm/tus-js-client@2.3.0/node_modules/tus-js-client/lib.esm/browser/readAsByteArray.js":
/*!*********************************************************************************************************************!*\
  !*** ../../../node_modules/.pnpm/tus-js-client@2.3.0/node_modules/tus-js-client/lib.esm/browser/readAsByteArray.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ readAsByteArray)
/* harmony export */ });
/**
 * readAsByteArray converts a File object to a Uint8Array.
 * This function is only used on the Apache Cordova platform.
 * See https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-file/index.html#read-a-file
 */
function readAsByteArray(chunk) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();

    reader.onload = function () {
      var value = new Uint8Array(reader.result);
      resolve({
        value: value
      });
    };

    reader.onerror = function (err) {
      reject(err);
    };

    reader.readAsArrayBuffer(chunk);
  });
}

/***/ }),

/***/ "../../../node_modules/.pnpm/tus-js-client@2.3.0/node_modules/tus-js-client/lib.esm/browser/uriToBlob.js":
/*!***************************************************************************************************************!*\
  !*** ../../../node_modules/.pnpm/tus-js-client@2.3.0/node_modules/tus-js-client/lib.esm/browser/uriToBlob.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ uriToBlob)
/* harmony export */ });
/**
 * uriToBlob resolves a URI to a Blob object. This is used for
 * React Native to retrieve a file (identified by a file://
 * URI) as a blob.
 */
function uriToBlob(uri) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';

    xhr.onload = function () {
      var blob = xhr.response;
      resolve(blob);
    };

    xhr.onerror = function (err) {
      reject(err);
    };

    xhr.open('GET', uri);
    xhr.send();
  });
}

/***/ }),

/***/ "../../../node_modules/.pnpm/tus-js-client@2.3.0/node_modules/tus-js-client/lib.esm/browser/urlStorage.js":
/*!****************************************************************************************************************!*\
  !*** ../../../node_modules/.pnpm/tus-js-client@2.3.0/node_modules/tus-js-client/lib.esm/browser/urlStorage.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebStorageUrlStorage": () => (/* binding */ WebStorageUrlStorage),
/* harmony export */   "canStoreURLs": () => (/* binding */ canStoreURLs)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* global window, localStorage */
var hasStorage = false;

try {
  hasStorage = 'localStorage' in window; // Attempt to store and read entries from the local storage to detect Private
  // Mode on Safari on iOS (see #49)

  var key = 'tusSupport';
  localStorage.setItem(key, localStorage.getItem(key));
} catch (e) {
  // If we try to access localStorage inside a sandboxed iframe, a SecurityError
  // is thrown. When in private mode on iOS Safari, a QuotaExceededError is
  // thrown (see #49)
  if (e.code === e.SECURITY_ERR || e.code === e.QUOTA_EXCEEDED_ERR) {
    hasStorage = false;
  } else {
    throw e;
  }
}

var canStoreURLs = hasStorage;
var WebStorageUrlStorage = /*#__PURE__*/function () {
  function WebStorageUrlStorage() {
    _classCallCheck(this, WebStorageUrlStorage);
  }

  _createClass(WebStorageUrlStorage, [{
    key: "findAllUploads",
    value: function findAllUploads() {
      var results = this._findEntries('tus::');

      return Promise.resolve(results);
    }
  }, {
    key: "findUploadsByFingerprint",
    value: function findUploadsByFingerprint(fingerprint) {
      var results = this._findEntries("tus::".concat(fingerprint, "::"));

      return Promise.resolve(results);
    }
  }, {
    key: "removeUpload",
    value: function removeUpload(urlStorageKey) {
      localStorage.removeItem(urlStorageKey);
      return Promise.resolve();
    }
  }, {
    key: "addUpload",
    value: function addUpload(fingerprint, upload) {
      var id = Math.round(Math.random() * 1e12);
      var key = "tus::".concat(fingerprint, "::").concat(id);
      localStorage.setItem(key, JSON.stringify(upload));
      return Promise.resolve(key);
    }
  }, {
    key: "_findEntries",
    value: function _findEntries(prefix) {
      var results = [];

      for (var i = 0; i < localStorage.length; i++) {
        var _key = localStorage.key(i);

        if (_key.indexOf(prefix) !== 0) continue;

        try {
          var upload = JSON.parse(localStorage.getItem(_key));
          upload.urlStorageKey = _key;
          results.push(upload);
        } catch (e) {// The JSON parse error is intentionally ignored here, so a malformed
          // entry in the storage cannot prevent an upload.
        }
      }

      return results;
    }
  }]);

  return WebStorageUrlStorage;
}();

/***/ }),

/***/ "../../../node_modules/.pnpm/tus-js-client@2.3.0/node_modules/tus-js-client/lib.esm/error.js":
/*!***************************************************************************************************!*\
  !*** ../../../node_modules/.pnpm/tus-js-client@2.3.0/node_modules/tus-js-client/lib.esm/error.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var DetailedError = /*#__PURE__*/function (_Error) {
  _inherits(DetailedError, _Error);

  var _super = _createSuper(DetailedError);

  function DetailedError(message) {
    var _this;

    var causingErr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var req = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var res = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    _classCallCheck(this, DetailedError);

    _this = _super.call(this, message);
    _this.originalRequest = req;
    _this.originalResponse = res;
    _this.causingError = causingErr;

    if (causingErr != null) {
      message += ", caused by ".concat(causingErr.toString());
    }

    if (req != null) {
      var requestId = req.getHeader('X-Request-ID') || 'n/a';
      var method = req.getMethod();
      var url = req.getURL();
      var status = res ? res.getStatus() : 'n/a';
      var body = res ? res.getBody() || '' : 'n/a';
      message += ", originated from request (method: ".concat(method, ", url: ").concat(url, ", response code: ").concat(status, ", response text: ").concat(body, ", request id: ").concat(requestId, ")");
    }

    _this.message = message;
    return _this;
  }

  return DetailedError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DetailedError);

/***/ }),

/***/ "../../../node_modules/.pnpm/tus-js-client@2.3.0/node_modules/tus-js-client/lib.esm/logger.js":
/*!****************************************************************************************************!*\
  !*** ../../../node_modules/.pnpm/tus-js-client@2.3.0/node_modules/tus-js-client/lib.esm/logger.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "enableDebugLog": () => (/* binding */ enableDebugLog),
/* harmony export */   "log": () => (/* binding */ log)
/* harmony export */ });
/* eslint no-console: "off" */
var isEnabled = false;
function enableDebugLog() {
  isEnabled = true;
}
function log(msg) {
  if (!isEnabled) return;
  console.log(msg);
}

/***/ }),

/***/ "../../../node_modules/.pnpm/tus-js-client@2.3.0/node_modules/tus-js-client/lib.esm/noopUrlStorage.js":
/*!************************************************************************************************************!*\
  !*** ../../../node_modules/.pnpm/tus-js-client@2.3.0/node_modules/tus-js-client/lib.esm/noopUrlStorage.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NoopUrlStorage)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint no-unused-vars: "off" */
var NoopUrlStorage = /*#__PURE__*/function () {
  function NoopUrlStorage() {
    _classCallCheck(this, NoopUrlStorage);
  }

  _createClass(NoopUrlStorage, [{
    key: "listAllUploads",
    value: function listAllUploads() {
      return Promise.resolve([]);
    }
  }, {
    key: "findUploadsByFingerprint",
    value: function findUploadsByFingerprint(fingerprint) {
      return Promise.resolve([]);
    }
  }, {
    key: "removeUpload",
    value: function removeUpload(urlStorageKey) {
      return Promise.resolve();
    }
  }, {
    key: "addUpload",
    value: function addUpload(fingerprint, upload) {
      return Promise.resolve(null);
    }
  }]);

  return NoopUrlStorage;
}();



/***/ }),

/***/ "../../../node_modules/.pnpm/tus-js-client@2.3.0/node_modules/tus-js-client/lib.esm/upload.js":
/*!****************************************************************************************************!*\
  !*** ../../../node_modules/.pnpm/tus-js-client@2.3.0/node_modules/tus-js-client/lib.esm/upload.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-base64 */ "../../../node_modules/.pnpm/js-base64@2.6.4/node_modules/js-base64/base64.js");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_base64__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var url_parse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! url-parse */ "../../../node_modules/.pnpm/url-parse@1.5.10/node_modules/url-parse/index.js");
/* harmony import */ var url_parse__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(url_parse__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error */ "../../../node_modules/.pnpm/tus-js-client@2.3.0/node_modules/tus-js-client/lib.esm/error.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logger */ "../../../node_modules/.pnpm/tus-js-client@2.3.0/node_modules/tus-js-client/lib.esm/logger.js");
/* harmony import */ var _uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./uuid */ "../../../node_modules/.pnpm/tus-js-client@2.3.0/node_modules/tus-js-client/lib.esm/uuid.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* global window */





var defaultOptions = {
  endpoint: null,
  uploadUrl: null,
  metadata: {},
  fingerprint: null,
  uploadSize: null,
  onProgress: null,
  onChunkComplete: null,
  onSuccess: null,
  onError: null,
  _onUploadUrlAvailable: null,
  overridePatchMethod: false,
  headers: {},
  addRequestId: false,
  onBeforeRequest: null,
  onAfterResponse: null,
  onShouldRetry: null,
  chunkSize: Infinity,
  retryDelays: [0, 1000, 3000, 5000],
  parallelUploads: 1,
  storeFingerprintForResuming: true,
  removeFingerprintOnSuccess: false,
  uploadLengthDeferred: false,
  uploadDataDuringCreation: false,
  urlStorage: null,
  fileReader: null,
  httpStack: null
};

var BaseUpload = /*#__PURE__*/function () {
  function BaseUpload(file, options) {
    _classCallCheck(this, BaseUpload);

    // Warn about removed options from previous versions
    if ('resume' in options) {
      console.log('tus: The `resume` option has been removed in tus-js-client v2. Please use the URL storage API instead.'); // eslint-disable-line no-console
    } // The default options will already be added from the wrapper classes.


    this.options = options; // The storage module used to store URLs

    this._urlStorage = this.options.urlStorage; // The underlying File/Blob object

    this.file = file; // The URL against which the file will be uploaded

    this.url = null; // The underlying request object for the current PATCH request

    this._req = null; // The fingerpinrt for the current file (set after start())

    this._fingerprint = null; // The key that the URL storage returned when saving an URL with a fingerprint,

    this._urlStorageKey = null; // The offset used in the current PATCH request

    this._offset = null; // True if the current PATCH request has been aborted

    this._aborted = false; // The file's size in bytes

    this._size = null; // The Source object which will wrap around the given file and provides us
    // with a unified interface for getting its size and slice chunks from its
    // content allowing us to easily handle Files, Blobs, Buffers and Streams.

    this._source = null; // The current count of attempts which have been made. Zero indicates none.

    this._retryAttempt = 0; // The timeout's ID which is used to delay the next retry

    this._retryTimeout = null; // The offset of the remote upload before the latest attempt was started.

    this._offsetBeforeRetry = 0; // An array of BaseUpload instances which are used for uploading the different
    // parts, if the parallelUploads option is used.

    this._parallelUploads = null; // An array of upload URLs which are used for uploading the different
    // parts, if the parallelUploads option is used.

    this._parallelUploadUrls = null;
  }
  /**
   * Use the Termination extension to delete an upload from the server by sending a DELETE
   * request to the specified upload URL. This is only possible if the server supports the
   * Termination extension. If the `options.retryDelays` property is set, the method will
   * also retry if an error ocurrs.
   *
   * @param {String} url The upload's URL which will be terminated.
   * @param {object} options Optional options for influencing HTTP requests.
   * @return {Promise} The Promise will be resolved/rejected when the requests finish.
   */


  _createClass(BaseUpload, [{
    key: "findPreviousUploads",
    value: function findPreviousUploads() {
      var _this = this;

      return this.options.fingerprint(this.file, this.options).then(function (fingerprint) {
        return _this._urlStorage.findUploadsByFingerprint(fingerprint);
      });
    }
  }, {
    key: "resumeFromPreviousUpload",
    value: function resumeFromPreviousUpload(previousUpload) {
      this.url = previousUpload.uploadUrl || null;
      this._parallelUploadUrls = previousUpload.parallelUploadUrls || null;
      this._urlStorageKey = previousUpload.urlStorageKey;
    }
  }, {
    key: "start",
    value: function start() {
      var _this2 = this;

      var file = this.file;

      if (!file) {
        this._emitError(new Error('tus: no file or stream to upload provided'));

        return;
      }

      if (!this.options.endpoint && !this.options.uploadUrl) {
        this._emitError(new Error('tus: neither an endpoint or an upload URL is provided'));

        return;
      }

      var retryDelays = this.options.retryDelays;

      if (retryDelays != null && Object.prototype.toString.call(retryDelays) !== '[object Array]') {
        this._emitError(new Error('tus: the `retryDelays` option must either be an array or null'));

        return;
      }

      if (this.options.parallelUploads > 1) {
        // Test which options are incompatible with parallel uploads.
        ['uploadUrl', 'uploadSize', 'uploadLengthDeferred'].forEach(function (optionName) {
          if (_this2.options[optionName]) {
            _this2._emitError(new Error("tus: cannot use the ".concat(optionName, " option when parallelUploads is enabled")));
          }
        });
      }

      this.options.fingerprint(file, this.options).then(function (fingerprint) {
        if (fingerprint == null) {
          (0,_logger__WEBPACK_IMPORTED_MODULE_3__.log)('No fingerprint was calculated meaning that the upload cannot be stored in the URL storage.');
        } else {
          (0,_logger__WEBPACK_IMPORTED_MODULE_3__.log)("Calculated fingerprint: ".concat(fingerprint));
        }

        _this2._fingerprint = fingerprint;

        if (_this2._source) {
          return _this2._source;
        }

        return _this2.options.fileReader.openFile(file, _this2.options.chunkSize);
      }).then(function (source) {
        _this2._source = source; // If the upload was configured to use multiple requests or if we resume from
        // an upload which used multiple requests, we start a parallel upload.

        if (_this2.options.parallelUploads > 1 || _this2._parallelUploadUrls != null) {
          _this2._startParallelUpload();
        } else {
          _this2._startSingleUpload();
        }
      })["catch"](function (err) {
        _this2._emitError(err);
      });
    }
    /**
     * Initiate the uploading procedure for a parallelized upload, where one file is split into
     * multiple request which are run in parallel.
     *
     * @api private
     */

  }, {
    key: "_startParallelUpload",
    value: function _startParallelUpload() {
      var _this3 = this;

      var totalSize = this._size = this._source.size;
      var totalProgress = 0;
      this._parallelUploads = [];
      var partCount = this._parallelUploadUrls != null ? this._parallelUploadUrls.length : this.options.parallelUploads; // The input file will be split into multiple slices which are uploaded in separate
      // requests. Here we generate the start and end position for the slices.

      var parts = splitSizeIntoParts(this._source.size, partCount, this._parallelUploadUrls); // Create an empty list for storing the upload URLs

      this._parallelUploadUrls = new Array(parts.length); // Generate a promise for each slice that will be resolve if the respective
      // upload is completed.

      var uploads = parts.map(function (part, index) {
        var lastPartProgress = 0;
        return _this3._source.slice(part.start, part.end).then(function (_ref) {
          var value = _ref.value;
          return new Promise(function (resolve, reject) {
            // Merge with the user supplied options but overwrite some values.
            var options = _objectSpread({}, _this3.options, {
              // If available, the partial upload should be resumed from a previous URL.
              uploadUrl: part.uploadUrl || null,
              // We take manually care of resuming for partial uploads, so they should
              // not be stored in the URL storage.
              storeFingerprintForResuming: false,
              removeFingerprintOnSuccess: false,
              // Reset the parallelUploads option to not cause recursion.
              parallelUploads: 1,
              metadata: {},
              // Add the header to indicate the this is a partial upload.
              headers: _objectSpread({}, _this3.options.headers, {
                'Upload-Concat': 'partial'
              }),
              // Reject or resolve the promise if the upload errors or completes.
              onSuccess: resolve,
              onError: reject,
              // Based in the progress for this partial upload, calculate the progress
              // for the entire final upload.
              onProgress: function onProgress(newPartProgress) {
                totalProgress = totalProgress - lastPartProgress + newPartProgress;
                lastPartProgress = newPartProgress;

                _this3._emitProgress(totalProgress, totalSize);
              },
              // Wait until every partial upload has an upload URL, so we can add
              // them to the URL storage.
              _onUploadUrlAvailable: function _onUploadUrlAvailable() {
                _this3._parallelUploadUrls[index] = upload.url; // Test if all uploads have received an URL

                if (_this3._parallelUploadUrls.filter(function (u) {
                  return !!u;
                }).length === parts.length) {
                  _this3._saveUploadInUrlStorage();
                }
              }
            });

            var upload = new BaseUpload(value, options);
            upload.start(); // Store the upload in an array, so we can later abort them if necessary.

            _this3._parallelUploads.push(upload);
          });
        });
      });
      var req; // Wait until all partial uploads are finished and we can send the POST request for
      // creating the final upload.

      Promise.all(uploads).then(function () {
        req = _this3._openRequest('POST', _this3.options.endpoint);
        req.setHeader('Upload-Concat', "final;".concat(_this3._parallelUploadUrls.join(' '))); // Add metadata if values have been added

        var metadata = encodeMetadata(_this3.options.metadata);

        if (metadata !== '') {
          req.setHeader('Upload-Metadata', metadata);
        }

        return _this3._sendRequest(req, null);
      }).then(function (res) {
        if (!inStatusCategory(res.getStatus(), 200)) {
          _this3._emitHttpError(req, res, 'tus: unexpected response while creating upload');

          return;
        }

        var location = res.getHeader('Location');

        if (location == null) {
          _this3._emitHttpError(req, res, 'tus: invalid or missing Location header');

          return;
        }

        _this3.url = resolveUrl(_this3.options.endpoint, location);
        (0,_logger__WEBPACK_IMPORTED_MODULE_3__.log)("Created upload at ".concat(_this3.url));

        _this3._emitSuccess();
      })["catch"](function (err) {
        _this3._emitError(err);
      });
    }
    /**
     * Initiate the uploading procedure for a non-parallel upload. Here the entire file is
     * uploaded in a sequential matter.
     *
     * @api private
     */

  }, {
    key: "_startSingleUpload",
    value: function _startSingleUpload() {
      // First, we look at the uploadLengthDeferred option.
      // Next, we check if the caller has supplied a manual upload size.
      // Finally, we try to use the calculated size from the source object.
      if (this.options.uploadLengthDeferred) {
        this._size = null;
      } else if (this.options.uploadSize != null) {
        this._size = +this.options.uploadSize;

        if (isNaN(this._size)) {
          this._emitError(new Error('tus: cannot convert `uploadSize` option into a number'));

          return;
        }
      } else {
        this._size = this._source.size;

        if (this._size == null) {
          this._emitError(new Error("tus: cannot automatically derive upload's size from input and must be specified manually using the `uploadSize` option"));

          return;
        }
      } // Reset the aborted flag when the upload is started or else the
      // _performUpload will stop before sending a request if the upload has been
      // aborted previously.


      this._aborted = false; // The upload had been started previously and we should reuse this URL.

      if (this.url != null) {
        (0,_logger__WEBPACK_IMPORTED_MODULE_3__.log)("Resuming upload from previous URL: ".concat(this.url));

        this._resumeUpload();

        return;
      } // A URL has manually been specified, so we try to resume


      if (this.options.uploadUrl != null) {
        (0,_logger__WEBPACK_IMPORTED_MODULE_3__.log)("Resuming upload from provided URL: ".concat(this.options.url));
        this.url = this.options.uploadUrl;

        this._resumeUpload();

        return;
      } // An upload has not started for the file yet, so we start a new one


      (0,_logger__WEBPACK_IMPORTED_MODULE_3__.log)('Creating a new upload');

      this._createUpload();
    }
    /**
     * Abort any running request and stop the current upload. After abort is called, no event
     * handler will be invoked anymore. You can use the `start` method to resume the upload
     * again.
     * If `shouldTerminate` is true, the `terminate` function will be called to remove the
     * current upload from the server.
     *
     * @param {boolean} shouldTerminate True if the upload should be deleted from the server.
     * @return {Promise} The Promise will be resolved/rejected when the requests finish.
     */

  }, {
    key: "abort",
    value: function abort(shouldTerminate) {
      var _this4 = this;

      // Count the number of arguments to see if a callback is being provided in the old style required by tus-js-client 1.x, then throw an error if it is.
      // `arguments` is a JavaScript built-in variable that contains all of the function's arguments.
      if (arguments.length > 1 && typeof arguments[1] === 'function') {
        throw new Error('tus: the abort function does not accept a callback since v2 anymore; please use the returned Promise instead');
      } // Stop any parallel partial uploads, that have been started in _startParallelUploads.


      if (this._parallelUploads != null) {
        this._parallelUploads.forEach(function (upload) {
          upload.abort(shouldTerminate);
        });
      } // Stop any current running request.


      if (this._req !== null) {
        this._req.abort();

        this._source.close();
      }

      this._aborted = true; // Stop any timeout used for initiating a retry.

      if (this._retryTimeout != null) {
        clearTimeout(this._retryTimeout);
        this._retryTimeout = null;
      }

      if (!shouldTerminate || this.url == null) {
        return Promise.resolve();
      }

      return BaseUpload.terminate(this.url, this.options) // Remove entry from the URL storage since the upload URL is no longer valid.
      .then(function () {
        return _this4._removeFromUrlStorage();
      });
    }
  }, {
    key: "_emitHttpError",
    value: function _emitHttpError(req, res, message, causingErr) {
      this._emitError(new _error__WEBPACK_IMPORTED_MODULE_2__["default"](message, causingErr, req, res));
    }
  }, {
    key: "_emitError",
    value: function _emitError(err) {
      var _this5 = this;

      // Do not emit errors, e.g. from aborted HTTP requests, if the upload has been stopped.
      if (this._aborted) return; // Check if we should retry, when enabled, before sending the error to the user.

      if (this.options.retryDelays != null) {
        // We will reset the attempt counter if
        // - we were already able to connect to the server (offset != null) and
        // - we were able to upload a small chunk of data to the server
        var shouldResetDelays = this._offset != null && this._offset > this._offsetBeforeRetry;

        if (shouldResetDelays) {
          this._retryAttempt = 0;
        }

        if (shouldRetry(err, this._retryAttempt, this.options)) {
          var delay = this.options.retryDelays[this._retryAttempt++];
          this._offsetBeforeRetry = this._offset;
          this._retryTimeout = setTimeout(function () {
            _this5.start();
          }, delay);
          return;
        }
      }

      if (typeof this.options.onError === 'function') {
        this.options.onError(err);
      } else {
        throw err;
      }
    }
    /**
     * Publishes notification if the upload has been successfully completed.
     *
     * @api private
     */

  }, {
    key: "_emitSuccess",
    value: function _emitSuccess() {
      if (this.options.removeFingerprintOnSuccess) {
        // Remove stored fingerprint and corresponding endpoint. This causes
        // new uploads of the same file to be treated as a different file.
        this._removeFromUrlStorage();
      }

      if (typeof this.options.onSuccess === 'function') {
        this.options.onSuccess();
      }
    }
    /**
     * Publishes notification when data has been sent to the server. This
     * data may not have been accepted by the server yet.
     *
     * @param {number} bytesSent  Number of bytes sent to the server.
     * @param {number} bytesTotal Total number of bytes to be sent to the server.
     * @api private
     */

  }, {
    key: "_emitProgress",
    value: function _emitProgress(bytesSent, bytesTotal) {
      if (typeof this.options.onProgress === 'function') {
        this.options.onProgress(bytesSent, bytesTotal);
      }
    }
    /**
     * Publishes notification when a chunk of data has been sent to the server
     * and accepted by the server.
     * @param {number} chunkSize  Size of the chunk that was accepted by the server.
     * @param {number} bytesAccepted Total number of bytes that have been
     *                                accepted by the server.
     * @param {number} bytesTotal Total number of bytes to be sent to the server.
     * @api private
     */

  }, {
    key: "_emitChunkComplete",
    value: function _emitChunkComplete(chunkSize, bytesAccepted, bytesTotal) {
      if (typeof this.options.onChunkComplete === 'function') {
        this.options.onChunkComplete(chunkSize, bytesAccepted, bytesTotal);
      }
    }
    /**
     * Create a new upload using the creation extension by sending a POST
     * request to the endpoint. After successful creation the file will be
     * uploaded
     *
     * @api private
     */

  }, {
    key: "_createUpload",
    value: function _createUpload() {
      var _this6 = this;

      if (!this.options.endpoint) {
        this._emitError(new Error('tus: unable to create upload because no endpoint is provided'));

        return;
      }

      var req = this._openRequest('POST', this.options.endpoint);

      if (this.options.uploadLengthDeferred) {
        req.setHeader('Upload-Defer-Length', 1);
      } else {
        req.setHeader('Upload-Length', this._size);
      } // Add metadata if values have been added


      var metadata = encodeMetadata(this.options.metadata);

      if (metadata !== '') {
        req.setHeader('Upload-Metadata', metadata);
      }

      var promise;

      if (this.options.uploadDataDuringCreation && !this.options.uploadLengthDeferred) {
        this._offset = 0;
        promise = this._addChunkToRequest(req);
      } else {
        promise = this._sendRequest(req, null);
      }

      promise.then(function (res) {
        if (!inStatusCategory(res.getStatus(), 200)) {
          _this6._emitHttpError(req, res, 'tus: unexpected response while creating upload');

          return;
        }

        var location = res.getHeader('Location');

        if (location == null) {
          _this6._emitHttpError(req, res, 'tus: invalid or missing Location header');

          return;
        }

        _this6.url = resolveUrl(_this6.options.endpoint, location);
        (0,_logger__WEBPACK_IMPORTED_MODULE_3__.log)("Created upload at ".concat(_this6.url));

        if (typeof _this6.options._onUploadUrlAvailable === 'function') {
          _this6.options._onUploadUrlAvailable();
        }

        if (_this6._size === 0) {
          // Nothing to upload and file was successfully created
          _this6._emitSuccess();

          _this6._source.close();

          return;
        }

        _this6._saveUploadInUrlStorage();

        if (_this6.options.uploadDataDuringCreation) {
          _this6._handleUploadResponse(req, res);
        } else {
          _this6._offset = 0;

          _this6._performUpload();
        }
      })["catch"](function (err) {
        _this6._emitHttpError(req, null, 'tus: failed to create upload', err);
      });
    }
    /*
     * Try to resume an existing upload. First a HEAD request will be sent
     * to retrieve the offset. If the request fails a new upload will be
     * created. In the case of a successful response the file will be uploaded.
     *
     * @api private
     */

  }, {
    key: "_resumeUpload",
    value: function _resumeUpload() {
      var _this7 = this;

      var req = this._openRequest('HEAD', this.url);

      var promise = this._sendRequest(req, null);

      promise.then(function (res) {
        var status = res.getStatus();

        if (!inStatusCategory(status, 200)) {
          if (inStatusCategory(status, 400)) {
            // Remove stored fingerprint and corresponding endpoint,
            // on client errors since the file can not be found
            _this7._removeFromUrlStorage();
          } // If the upload is locked (indicated by the 423 Locked status code), we
          // emit an error instead of directly starting a new upload. This way the
          // retry logic can catch the error and will retry the upload. An upload
          // is usually locked for a short period of time and will be available
          // afterwards.


          if (status === 423) {
            _this7._emitHttpError(req, res, 'tus: upload is currently locked; retry later');

            return;
          }

          if (!_this7.options.endpoint) {
            // Don't attempt to create a new upload if no endpoint is provided.
            _this7._emitHttpError(req, res, 'tus: unable to resume upload (new upload cannot be created without an endpoint)');

            return;
          } // Try to create a new upload


          _this7.url = null;

          _this7._createUpload();

          return;
        }

        var offset = parseInt(res.getHeader('Upload-Offset'), 10);

        if (isNaN(offset)) {
          _this7._emitHttpError(req, res, 'tus: invalid or missing offset value');

          return;
        }

        var length = parseInt(res.getHeader('Upload-Length'), 10);

        if (isNaN(length) && !_this7.options.uploadLengthDeferred) {
          _this7._emitHttpError(req, res, 'tus: invalid or missing length value');

          return;
        }

        if (typeof _this7.options._onUploadUrlAvailable === 'function') {
          _this7.options._onUploadUrlAvailable();
        } // Upload has already been completed and we do not need to send additional
        // data to the server


        if (offset === length) {
          _this7._emitProgress(length, length);

          _this7._emitSuccess();

          return;
        }

        _this7._offset = offset;

        _this7._performUpload();
      })["catch"](function (err) {
        _this7._emitHttpError(req, null, 'tus: failed to resume upload', err);
      });
    }
    /**
     * Start uploading the file using PATCH requests. The file will be divided
     * into chunks as specified in the chunkSize option. During the upload
     * the onProgress event handler may be invoked multiple times.
     *
     * @api private
     */

  }, {
    key: "_performUpload",
    value: function _performUpload() {
      var _this8 = this;

      // If the upload has been aborted, we will not send the next PATCH request.
      // This is important if the abort method was called during a callback, such
      // as onChunkComplete or onProgress.
      if (this._aborted) {
        return;
      }

      var req; // Some browser and servers may not support the PATCH method. For those
      // cases, you can tell tus-js-client to use a POST request with the
      // X-HTTP-Method-Override header for simulating a PATCH request.

      if (this.options.overridePatchMethod) {
        req = this._openRequest('POST', this.url);
        req.setHeader('X-HTTP-Method-Override', 'PATCH');
      } else {
        req = this._openRequest('PATCH', this.url);
      }

      req.setHeader('Upload-Offset', this._offset);

      var promise = this._addChunkToRequest(req);

      promise.then(function (res) {
        if (!inStatusCategory(res.getStatus(), 200)) {
          _this8._emitHttpError(req, res, 'tus: unexpected response while uploading chunk');

          return;
        }

        _this8._handleUploadResponse(req, res);
      })["catch"](function (err) {
        // Don't emit an error if the upload was aborted manually
        if (_this8._aborted) {
          return;
        }

        _this8._emitHttpError(req, null, "tus: failed to upload chunk at offset ".concat(_this8._offset), err);
      });
    }
    /**
     * _addChunktoRequest reads a chunk from the source and sends it using the
     * supplied request object. It will not handle the response.
     *
     * @api private
     */

  }, {
    key: "_addChunkToRequest",
    value: function _addChunkToRequest(req) {
      var _this9 = this;

      var start = this._offset;
      var end = this._offset + this.options.chunkSize;
      req.setProgressHandler(function (bytesSent) {
        _this9._emitProgress(start + bytesSent, _this9._size);
      });
      req.setHeader('Content-Type', 'application/offset+octet-stream'); // The specified chunkSize may be Infinity or the calcluated end position
      // may exceed the file's size. In both cases, we limit the end position to
      // the input's total size for simpler calculations and correctness.

      if ((end === Infinity || end > this._size) && !this.options.uploadLengthDeferred) {
        end = this._size;
      }

      return this._source.slice(start, end).then(function (_ref2) {
        var value = _ref2.value,
            done = _ref2.done;

        // If the upload length is deferred, the upload size was not specified during
        // upload creation. So, if the file reader is done reading, we know the total
        // upload size and can tell the tus server.
        if (_this9.options.uploadLengthDeferred && done) {
          _this9._size = _this9._offset + (value && value.size ? value.size : 0);
          req.setHeader('Upload-Length', _this9._size);
        }

        if (value === null) {
          return _this9._sendRequest(req);
        }

        _this9._emitProgress(_this9._offset, _this9._size);

        return _this9._sendRequest(req, value);
      });
    }
    /**
     * _handleUploadResponse is used by requests that haven been sent using _addChunkToRequest
     * and already have received a response.
     *
     * @api private
     */

  }, {
    key: "_handleUploadResponse",
    value: function _handleUploadResponse(req, res) {
      var offset = parseInt(res.getHeader('Upload-Offset'), 10);

      if (isNaN(offset)) {
        this._emitHttpError(req, res, 'tus: invalid or missing offset value');

        return;
      }

      this._emitProgress(offset, this._size);

      this._emitChunkComplete(offset - this._offset, offset, this._size);

      this._offset = offset;

      if (offset == this._size) {
        // Yay, finally done :)
        this._emitSuccess();

        this._source.close();

        return;
      }

      this._performUpload();
    }
    /**
     * Create a new HTTP request object with the given method and URL.
     *
     * @api private
     */

  }, {
    key: "_openRequest",
    value: function _openRequest(method, url) {
      var req = openRequest(method, url, this.options);
      this._req = req;
      return req;
    }
    /**
     * Remove the entry in the URL storage, if it has been saved before.
     *
     * @api private
     */

  }, {
    key: "_removeFromUrlStorage",
    value: function _removeFromUrlStorage() {
      var _this10 = this;

      if (!this._urlStorageKey) return;

      this._urlStorage.removeUpload(this._urlStorageKey)["catch"](function (err) {
        _this10._emitError(err);
      });

      this._urlStorageKey = null;
    }
    /**
     * Add the upload URL to the URL storage, if possible.
     *
     * @api private
     */

  }, {
    key: "_saveUploadInUrlStorage",
    value: function _saveUploadInUrlStorage() {
      var _this11 = this;

      // Only if a fingerprint was calculated for the input (i.e. not a stream), we can store the upload URL.
      if (!this.options.storeFingerprintForResuming || !this._fingerprint) {
        return;
      }

      var storedUpload = {
        size: this._size,
        metadata: this.options.metadata,
        creationTime: new Date().toString()
      };

      if (this._parallelUploads) {
        // Save multiple URLs if the parallelUploads option is used ...
        storedUpload.parallelUploadUrls = this._parallelUploadUrls;
      } else {
        // ... otherwise we just save the one available URL.
        storedUpload.uploadUrl = this.url;
      }

      this._urlStorage.addUpload(this._fingerprint, storedUpload).then(function (urlStorageKey) {
        return _this11._urlStorageKey = urlStorageKey;
      })["catch"](function (err) {
        _this11._emitError(err);
      });
    }
    /**
     * Send a request with the provided body.
     *
     * @api private
     */

  }, {
    key: "_sendRequest",
    value: function _sendRequest(req) {
      var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return sendRequest(req, body, this.options);
    }
  }], [{
    key: "terminate",
    value: function terminate(url, options) {
      // Count the number of arguments to see if a callback is being provided as the last
      // argument in the old style required by tus-js-client 1.x, then throw an error if it is.
      // `arguments` is a JavaScript built-in variable that contains all of the function's arguments.
      if (arguments.length > 1 && typeof arguments[arguments.length - 1] === 'function') {
        throw new Error('tus: the terminate function does not accept a callback since v2 anymore; please use the returned Promise instead');
      } // Note that in order for the trick above to work, a default value cannot be set for `options`,
      // so the check below replaces the old default `{}`.


      if (options === undefined) {
        options = {};
      }

      var req = openRequest('DELETE', url, options);
      return sendRequest(req, null, options).then(function (res) {
        // A 204 response indicates a successfull request
        if (res.getStatus() === 204) {
          return;
        }

        throw new _error__WEBPACK_IMPORTED_MODULE_2__["default"]('tus: unexpected response while terminating upload', null, req, res);
      })["catch"](function (err) {
        if (!(err instanceof _error__WEBPACK_IMPORTED_MODULE_2__["default"])) {
          err = new _error__WEBPACK_IMPORTED_MODULE_2__["default"]('tus: failed to terminate upload', err, req, null);
        }

        if (!shouldRetry(err, 0, options)) {
          throw err;
        } // Instead of keeping track of the retry attempts, we remove the first element from the delays
        // array. If the array is empty, all retry attempts are used up and we will bubble up the error.
        // We recursively call the terminate function will removing elements from the retryDelays array.


        var delay = options.retryDelays[0];
        var remainingDelays = options.retryDelays.slice(1);

        var newOptions = _objectSpread({}, options, {
          retryDelays: remainingDelays
        });

        return new Promise(function (resolve) {
          return setTimeout(resolve, delay);
        }).then(function () {
          return BaseUpload.terminate(url, newOptions);
        });
      });
    }
  }]);

  return BaseUpload;
}();

function encodeMetadata(metadata) {
  var encoded = [];

  for (var key in metadata) {
    encoded.push("".concat(key, " ").concat(js_base64__WEBPACK_IMPORTED_MODULE_0__.Base64.encode(metadata[key])));
  }

  return encoded.join(',');
}
/**
 * Checks whether a given status is in the range of the expected category.
 * For example, only a status between 200 and 299 will satisfy the category 200.
 *
 * @api private
 */


function inStatusCategory(status, category) {
  return status >= category && status < category + 100;
}
/**
 * Create a new HTTP request with the specified method and URL.
 * The necessary headers that are included in every request
 * will be added, including the request ID.
 *
 * @api private
 */


function openRequest(method, url, options) {
  var req = options.httpStack.createRequest(method, url);
  req.setHeader('Tus-Resumable', '1.0.0');
  var headers = options.headers || {};

  for (var name in headers) {
    req.setHeader(name, headers[name]);
  }

  if (options.addRequestId) {
    var requestId = (0,_uuid__WEBPACK_IMPORTED_MODULE_4__["default"])();
    req.setHeader('X-Request-ID', requestId);
  }

  return req;
}
/**
 * Send a request with the provided body while invoking the onBeforeRequest
 * and onAfterResponse callbacks.
 *
 * @api private
 */


function sendRequest(req, body, options) {
  var onBeforeRequestPromise = typeof options.onBeforeRequest === 'function' ? Promise.resolve(options.onBeforeRequest(req)) : Promise.resolve();
  return onBeforeRequestPromise.then(function () {
    return req.send(body).then(function (res) {
      var onAfterResponsePromise = typeof options.onAfterResponse === 'function' ? Promise.resolve(options.onAfterResponse(req, res)) : Promise.resolve();
      return onAfterResponsePromise.then(function () {
        return res;
      });
    });
  });
}
/**
 * Checks whether the browser running this code has internet access.
 * This function will always return true in the node.js environment
 *
 * @api private
 */


function isOnline() {
  var online = true;

  if (typeof window !== 'undefined' && 'navigator' in window && window.navigator.onLine === false) {
    online = false;
  }

  return online;
}
/**
 * Checks whether or not it is ok to retry a request.
 * @param {Error} err the error returned from the last request
 * @param {number} retryAttempt the number of times the request has already been retried
 * @param {object} options tus Upload options
 *
 * @api private
 */


function shouldRetry(err, retryAttempt, options) {
  // We only attempt a retry if
  // - retryDelays option is set
  // - we didn't exceed the maxium number of retries, yet, and
  // - this error was caused by a request or it's response and
  // - the error is server error (i.e. not a status 4xx except a 409 or 423) or
  // a onShouldRetry is specified and returns true
  // - the browser does not indicate that we are offline
  if (options.retryDelays == null || retryAttempt >= options.retryDelays.length || err.originalRequest == null) {
    return false;
  }

  if (options && typeof options.onShouldRetry === 'function') {
    return options.onShouldRetry(err, retryAttempt, options);
  }

  var status = err.originalResponse ? err.originalResponse.getStatus() : 0;
  return (!inStatusCategory(status, 400) || status === 409 || status === 423) && isOnline();
}
/**
 * Resolve a relative link given the origin as source. For example,
 * if a HTTP request to http://example.com/files/ returns a Location
 * header with the value /upload/abc, the resolved URL will be:
 * http://example.com/upload/abc
 */


function resolveUrl(origin, link) {
  return new (url_parse__WEBPACK_IMPORTED_MODULE_1___default())(link, origin).toString();
}
/**
 * Calculate the start and end positions for the parts if an upload
 * is split into multiple parallel requests.
 *
 * @param {number} totalSize The byte size of the upload, which will be split.
 * @param {number} partCount The number in how many parts the upload will be split.
 * @param {string[]} previousUrls The upload URLs for previous parts.
 * @return {object[]}
 * @api private
 */


function splitSizeIntoParts(totalSize, partCount, previousUrls) {
  var partSize = Math.floor(totalSize / partCount);
  var parts = [];

  for (var i = 0; i < partCount; i++) {
    parts.push({
      start: partSize * i,
      end: partSize * (i + 1)
    });
  }

  parts[partCount - 1].end = totalSize; // Attach URLs from previous uploads, if available.

  if (previousUrls) {
    parts.forEach(function (part, index) {
      part.uploadUrl = previousUrls[index] || null;
    });
  }

  return parts;
}

BaseUpload.defaultOptions = defaultOptions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseUpload);

/***/ }),

/***/ "../../../node_modules/.pnpm/tus-js-client@2.3.0/node_modules/tus-js-client/lib.esm/uuid.js":
/*!**************************************************************************************************!*\
  !*** ../../../node_modules/.pnpm/tus-js-client@2.3.0/node_modules/tus-js-client/lib.esm/uuid.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ uuid)
/* harmony export */ });
/**
 * Generate a UUID v4 based on random numbers. We intentioanlly use the less
 * secure Math.random function here since the more secure crypto.getRandomNumbers
 * is not available on all platforms.
 * This is not a problem for us since we use the UUID only for generating a
 * request ID, so we can correlate server logs to client errors.
 *
 * This function is taken from following site:
 * https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
 *
 * @return {string} The generate UUID
 */
function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
}

/***/ }),

/***/ "../../../node_modules/.pnpm/url-parse@1.5.10/node_modules/url-parse/index.js":
/*!************************************************************************************!*\
  !*** ../../../node_modules/.pnpm/url-parse@1.5.10/node_modules/url-parse/index.js ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var required = __webpack_require__(/*! requires-port */ "../../../node_modules/.pnpm/requires-port@1.0.0/node_modules/requires-port/index.js")
  , qs = __webpack_require__(/*! querystringify */ "../../../node_modules/.pnpm/querystringify@2.2.0/node_modules/querystringify/index.js")
  , controlOrWhitespace = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/
  , CRHTLF = /[\n\r\t]/g
  , slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//
  , port = /:\d+$/
  , protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i
  , windowsDriveLetter = /^[a-zA-Z]:/;

/**
 * Remove control characters and whitespace from the beginning of a string.
 *
 * @param {Object|String} str String to trim.
 * @returns {String} A new string representing `str` stripped of control
 *     characters and whitespace from its beginning.
 * @public
 */
function trimLeft(str) {
  return (str ? str : '').toString().replace(controlOrWhitespace, '');
}

/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */
var rules = [
  ['#', 'hash'],                        // Extract from the back.
  ['?', 'query'],                       // Extract from the back.
  function sanitize(address, url) {     // Sanitize what is left of the address
    return isSpecial(url.protocol) ? address.replace(/\\/g, '/') : address;
  },
  ['/', 'pathname'],                    // Extract from the back.
  ['@', 'auth', 1],                     // Extract from the front.
  [NaN, 'host', undefined, 1, 1],       // Set left over value.
  [/:(\d*)$/, 'port', undefined, 1],    // RegExp the back.
  [NaN, 'hostname', undefined, 1, 1]    // Set left over.
];

/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */
var ignore = { hash: 1, query: 1 };

/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @public
 */
function lolcation(loc) {
  var globalVar;

  if (typeof window !== 'undefined') globalVar = window;
  else if (typeof window !== 'undefined') globalVar = window;
  else if (typeof self !== 'undefined') globalVar = self;
  else globalVar = {};

  var location = globalVar.location || {};
  loc = loc || location;

  var finaldestination = {}
    , type = typeof loc
    , key;

  if ('blob:' === loc.protocol) {
    finaldestination = new Url(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new Url(loc, {});
    for (key in ignore) delete finaldestination[key];
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}

/**
 * Check whether a protocol scheme is special.
 *
 * @param {String} The protocol scheme of the URL
 * @return {Boolean} `true` if the protocol scheme is special, else `false`
 * @private
 */
function isSpecial(scheme) {
  return (
    scheme === 'file:' ||
    scheme === 'ftp:' ||
    scheme === 'http:' ||
    scheme === 'https:' ||
    scheme === 'ws:' ||
    scheme === 'wss:'
  );
}

/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @param {Object} location
 * @return {ProtocolExtract} Extracted information.
 * @private
 */
function extractProtocol(address, location) {
  address = trimLeft(address);
  address = address.replace(CRHTLF, '');
  location = location || {};

  var match = protocolre.exec(address);
  var protocol = match[1] ? match[1].toLowerCase() : '';
  var forwardSlashes = !!match[2];
  var otherSlashes = !!match[3];
  var slashesCount = 0;
  var rest;

  if (forwardSlashes) {
    if (otherSlashes) {
      rest = match[2] + match[3] + match[4];
      slashesCount = match[2].length + match[3].length;
    } else {
      rest = match[2] + match[4];
      slashesCount = match[2].length;
    }
  } else {
    if (otherSlashes) {
      rest = match[3] + match[4];
      slashesCount = match[3].length;
    } else {
      rest = match[4]
    }
  }

  if (protocol === 'file:') {
    if (slashesCount >= 2) {
      rest = rest.slice(2);
    }
  } else if (isSpecial(protocol)) {
    rest = match[4];
  } else if (protocol) {
    if (forwardSlashes) {
      rest = rest.slice(2);
    }
  } else if (slashesCount >= 2 && isSpecial(location.protocol)) {
    rest = match[4];
  }

  return {
    protocol: protocol,
    slashes: forwardSlashes || isSpecial(protocol),
    slashesCount: slashesCount,
    rest: rest
  };
}

/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @private
 */
function resolve(relative, base) {
  if (relative === '') return base;

  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/'))
    , i = path.length
    , last = path[i - 1]
    , unshift = false
    , up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');

  return path.join('/');
}

/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * It is worth noting that we should not use `URL` as class name to prevent
 * clashes with the global URL instance that got introduced in browsers.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} [location] Location defaults for relative paths.
 * @param {Boolean|Function} [parser] Parser for the query string.
 * @private
 */
function Url(address, location, parser) {
  address = trimLeft(address);
  address = address.replace(CRHTLF, '');

  if (!(this instanceof Url)) {
    return new Url(address, location, parser);
  }

  var relative, extracted, parse, instruction, index, key
    , instructions = rules.slice()
    , type = typeof location
    , url = this
    , i = 0;

  //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //
  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = qs.parse;

  location = lolcation(location);

  //
  // Extract protocol information before running the instructions.
  //
  extracted = extractProtocol(address || '', location);
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest;

  //
  // When the authority component is absent the URL starts with a path
  // component.
  //
  if (
    extracted.protocol === 'file:' && (
      extracted.slashesCount !== 2 || windowsDriveLetter.test(address)) ||
    (!extracted.slashes &&
      (extracted.protocol ||
        extracted.slashesCount < 2 ||
        !isSpecial(url.protocol)))
  ) {
    instructions[3] = [/(.*)/, 'pathname'];
  }

  for (; i < instructions.length; i++) {
    instruction = instructions[i];

    if (typeof instruction === 'function') {
      address = instruction(address, url);
      continue;
    }

    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      index = parse === '@'
        ? address.lastIndexOf(parse)
        : address.indexOf(parse);

      if (~index) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if ((index = parse.exec(address))) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (
      relative && instruction[3] ? location[key] || '' : ''
    );

    //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //
    if (instruction[4]) url[key] = url[key].toLowerCase();
  }

  //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //
  if (parser) url.query = parser(url.query);

  //
  // If the URL is relative, resolve the pathname against the base URL.
  //
  if (
      relative
    && location.slashes
    && url.pathname.charAt(0) !== '/'
    && (url.pathname !== '' || location.pathname !== '')
  ) {
    url.pathname = resolve(url.pathname, location.pathname);
  }

  //
  // Default to a / for pathname if none exists. This normalizes the URL
  // to always have a /
  //
  if (url.pathname.charAt(0) !== '/' && isSpecial(url.protocol)) {
    url.pathname = '/' + url.pathname;
  }

  //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //
  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  }

  //
  // Parse down the `auth` for the username and password.
  //
  url.username = url.password = '';

  if (url.auth) {
    index = url.auth.indexOf(':');

    if (~index) {
      url.username = url.auth.slice(0, index);
      url.username = encodeURIComponent(decodeURIComponent(url.username));

      url.password = url.auth.slice(index + 1);
      url.password = encodeURIComponent(decodeURIComponent(url.password))
    } else {
      url.username = encodeURIComponent(decodeURIComponent(url.auth));
    }

    url.auth = url.password ? url.username +':'+ url.password : url.username;
  }

  url.origin = url.protocol !== 'file:' && isSpecial(url.protocol) && url.host
    ? url.protocol +'//'+ url.host
    : 'null';

  //
  // The href is just the compiled result.
  //
  url.href = url.toString();
}

/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL} URL instance for chaining.
 * @public
 */
function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname +':'+ value;
      }

      break;

    case 'hostname':
      url[part] = value;

      if (url.port) value += ':'+ url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (port.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== char ? char + value : value;
      } else {
        url[part] = value;
      }
      break;

    case 'username':
    case 'password':
      url[part] = encodeURIComponent(value);
      break;

    case 'auth':
      var index = value.indexOf(':');

      if (~index) {
        url.username = value.slice(0, index);
        url.username = encodeURIComponent(decodeURIComponent(url.username));

        url.password = value.slice(index + 1);
        url.password = encodeURIComponent(decodeURIComponent(url.password));
      } else {
        url.username = encodeURIComponent(decodeURIComponent(value));
      }
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];

    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.auth = url.password ? url.username +':'+ url.password : url.username;

  url.origin = url.protocol !== 'file:' && isSpecial(url.protocol) && url.host
    ? url.protocol +'//'+ url.host
    : 'null';

  url.href = url.toString();

  return url;
}

/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String} Compiled version of the URL.
 * @public
 */
function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

  var query
    , url = this
    , host = url.host
    , protocol = url.protocol;

  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

  var result =
    protocol +
    ((url.protocol && url.slashes) || isSpecial(url.protocol) ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':'+ url.password;
    result += '@';
  } else if (url.password) {
    result += ':'+ url.password;
    result += '@';
  } else if (
    url.protocol !== 'file:' &&
    isSpecial(url.protocol) &&
    !host &&
    url.pathname !== '/'
  ) {
    //
    // Add back the empty userinfo, otherwise the original invalid URL
    // might be transformed into a valid one with `url.pathname` as host.
    //
    result += '@';
  }

  //
  // Trailing colon is removed from `url.host` when it is parsed. If it still
  // ends with a colon, then add back the trailing colon that was removed. This
  // prevents an invalid URL from being transformed into a valid one.
  //
  if (host[host.length - 1] === ':' || (port.test(url.hostname) && !url.port)) {
    host += ':';
  }

  result += host + url.pathname;

  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?'+ query : query;

  if (url.hash) result += url.hash;

  return result;
}

Url.prototype = { set: set, toString: toString };

//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
Url.extractProtocol = extractProtocol;
Url.location = lolcation;
Url.trimLeft = trimLeft;
Url.qs = qs;

module.exports = Url;


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/escape-html":
/*!************************************!*\
  !*** external ["wp","escapeHtml"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["escapeHtml"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "@wordpress/url":
/*!*****************************!*\
  !*** external ["wp","url"] ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["url"];

/***/ }),

/***/ "../../../node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************************************************************!*\
  !*** ../../../node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************************************************************/
/***/ ((module) => {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../../../node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************************************************************!*\
  !*** ../../../node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************************************************************/
/***/ ((module) => {

function _extends() {
  module.exports = _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _extends.apply(this, arguments);
}

module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./src/client/block-editor/blocks/videopress/block.json":
/*!**************************************************************!*\
  !*** ./src/client/block-editor/blocks/videopress/block.json ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"jetpack/videopress","version":"0.1.0","title":"VideoPress","category":"media","icon":"smiley","description":"Embed a video from your media library or upload a new one with VideoPress.","supports":{"align":true},"attributes":{"autoplay":{"type":"boolean"},"caption":{"type":"string","source":"html","selector":"figcaption"},"controls":{"type":"boolean","default":true},"loop":{"type":"boolean"},"maxWidth":{"type":"string","default":"100%"},"muted":{"type":"boolean"},"playsinline":{"type":"boolean"},"preload":{"type":"string","default":"metadata"},"seekbarPlayedColor":{"type":"string","default":""},"seekbarLoadingColor":{"type":"string","default":""},"seekbarColor":{"type":"string","default":""},"useAverageColor":{"type":"boolean","default":true},"id":{"type":"number"},"guid":{"type":"string"},"src":{"type":"string"},"cacheHtml":{"type":"string","default":""},"poster":{"type":"string"},"videoRatio":{"type":"number"}},"textdomain":"jetpack-videopress","editorScript":"file:../../../../../build/editor.js","editorStyle":"file:../../../../../build/editor.css","style":"file:../../../../../build/style-editor.css","viewScript":"file:../../../../../build/view.js"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************************************!*\
  !*** ./src/client/block-editor/index.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_videopress___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/videopress/ */ "./src/client/block-editor/blocks/videopress/index.js");
/**
 * Internal dependencies
 */

})();

/******/ })()
;
//# sourceMappingURL=editor.js.map