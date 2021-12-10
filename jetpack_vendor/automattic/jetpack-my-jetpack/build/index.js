/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************************************************************!*\
  !*** ../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/defineProperty.js ***!
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

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************************************************************!*\
  !*** ../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************************************************************/
/***/ ((module) => {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports["default"] = module.exports, module.exports.__esModule = true;

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

/***/ "../../../node_modules/.pnpm/debug@4.3.2/node_modules/debug/src/browser.js":
/*!*********************************************************************************!*\
  !*** ../../../node_modules/.pnpm/debug@4.3.2/node_modules/debug/src/browser.js ***!
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

module.exports = __webpack_require__(/*! ./common */ "../../../node_modules/.pnpm/debug@4.3.2/node_modules/debug/src/common.js")(exports);

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

/***/ "../../../node_modules/.pnpm/debug@4.3.2/node_modules/debug/src/common.js":
/*!********************************************************************************!*\
  !*** ../../../node_modules/.pnpm/debug@4.3.2/node_modules/debug/src/common.js ***!
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
	* @param {String} namespace The namespace string for the for the debug instance to be colored
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
				createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
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

/***/ "../../js-packages/components/components/admin-page/style.module.scss":
/*!****************************************************************************!*\
  !*** ../../js-packages/components/components/admin-page/style.module.scss ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"jp-wrap":"O5NYbFTsxmrm4P2SIdOC","jp-row":"rkV4U_hzC04NwXFQcTHl","sm-col-span-1":"G81E6mesnld_OhhOvz_F","sm-col-span-2":"SfCZpjwiu2F0KDjGIXEA","sm-col-span-3":"qPxwbSu_GTDTz_8jFHJD","sm-col-span-4":"xYAWQ0wk6FPfZOZQgFiw","md-col-span-1":"zwZjA7ofpMucaB_UzG48","md-col-span-2":"YfwKGGBEqiINFYy6ZpKM","md-col-span-3":"pcHQbVFRxA_OvNRQ2OwP","md-col-span-4":"U_LJMBlRZ8ItXZuvCXGg","md-col-span-5":"st_7w_Ja1Gp2AgGaTysO","md-col-span-6":"gQsaHmJo6Gp7Yq9IB9Sg","md-col-span-7":"P0a4FWsiJJmR6bySI8QC","md-col-span-8":"UxSHj7jyDp6sGKHILNRc","lg-col-span-1":"TExt5ebNqUrEn2NzeDDh","lg-col-span-2":"cdwvRRac4c2djSpHfOpF","lg-col-span-3":"hvRpxlyFY9BQIDdEGTjg","lg-col-span-4":"Ev9JGJi3yKkBq6cW3Xge","lg-col-span-5":"mhL__tIHFH_tViX5718D","lg-col-span-6":"X1lGIxHHxsFl_39u4Px6","lg-col-span-7":"pc5UnY_DzsSDkyih78Ti","lg-col-span-8":"QCjBtfnG3u20FwoDd59Z","lg-col-span-9":"MX1aL3BeJpoSE0aXghp0","lg-col-span-10":"h_JAcO8a8ClV2LmTWsMz","lg-col-span-11":"gKlDMi0N7LOd9q8uJHi5","lg-col-span-12":"KZWhYB7r6TG75uJu2LsQ","md-col-span-0":"G6NxfG2gGwvEYb0aGdPJ","sm-col-span-0":"aceZPGfrg7IoR0Vu7ZJg","jp-cut":"MZSHJVi991kNJhn_Xnip","jp-admin-page":"EZ590eIMC5y_t1_gWRua","jp-admin-page-section":"BYzOly4G7Gry9wdRH0AY"});

/***/ }),

/***/ "../../js-packages/components/components/admin-section/basic/style.module.scss":
/*!*************************************************************************************!*\
  !*** ../../js-packages/components/components/admin-section/basic/style.module.scss ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"jp-admin-section":"_UqttTwRJeajPRpRGZPJ"});

/***/ }),

/***/ "../../js-packages/components/components/admin-section/hero/style.module.scss":
/*!************************************************************************************!*\
  !*** ../../js-packages/components/components/admin-section/hero/style.module.scss ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"jp-wrap":"K6gniZequRm1zBi4xa2G","jp-row":"vickZxEIl6kGZp7KkFYF","sm-col-span-1":"U2ZD1antXfCcQlBdFwyw","sm-col-span-2":"caLSPVQ3JP3b2Ia68Seq","sm-col-span-3":"h6FKJdwoY_zIXh6pEj1U","sm-col-span-4":"GkjDOzh_5n5VxKrqEW_I","md-col-span-1":"V2HSxZHesNOXMBWOmdFG","md-col-span-2":"i3fz9zvErDyXYherb6Ew","md-col-span-3":"_3bKcKfanUgurPMcHEiV","md-col-span-4":"U44hqBGsmVA1lI9R2ZnH","md-col-span-5":"AzaRYYQQYJjKUF9D87mw","md-col-span-6":"sag3QKXTxIQXPPjmbrAl","md-col-span-7":"ifY5fUWFNROS_F7Jys9v","md-col-span-8":"nZFgLvw9LsUJnEViXnJZ","lg-col-span-1":"Tqir6CbiyHOgYmsAgY57","lg-col-span-2":"VeVLz3DEagxiXMMPEOCe","lg-col-span-3":"G3R07cw2eP3D3juW3A3l","lg-col-span-4":"eQ3UseyneBNu_ZLuqSzg","lg-col-span-5":"VlgV8xjgkGoOLJShoyNM","lg-col-span-6":"DJCwqamaIDFQoj0jEgBc","lg-col-span-7":"CxtXPQUYJfNUQVn3y2y_","lg-col-span-8":"BroOgbyuFxoSv48H70B5","lg-col-span-9":"KnUcRFDSsxeb_z46ajNY","lg-col-span-10":"bXiAAxiM2mhcI43ET0pp","lg-col-span-11":"ipYVW2jwG2cFjIHpnQk2","lg-col-span-12":"KcREgfiJ4ix9nAvNAXqQ","md-col-span-0":"qSfEJeFAh4WmcPtmo8qe","sm-col-span-0":"_RxxiRFsUS3nYTZhkprA","jp-cut":"RSw9xhnEr8xpkX3hPPaM","jp-admin-section-hero":"kEBaF5NOHtQsQn5jfOEA"});

/***/ }),

/***/ "../../js-packages/components/components/decorative-card/style.scss":
/*!**************************************************************************!*\
  !*** ../../js-packages/components/components/decorative-card/style.scss ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../js-packages/components/components/jetpack-footer/style.scss":
/*!*************************************************************************!*\
  !*** ../../js-packages/components/components/jetpack-footer/style.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../js-packages/components/components/layout/col/style.module.scss":
/*!****************************************************************************!*\
  !*** ../../js-packages/components/components/layout/col/style.module.scss ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"jp-wrap":"WcIPVMUrQMdwzisuVSh7","jp-row":"Nxx7T20LwPUQPXCSDMfA","sm-col-span-1":"mmVmo1nZYrRywmnSKQFx","sm-col-span-2":"UrIp26XpdUSMJft8YxdC","sm-col-span-3":"pMXlFWglEDyK6MbwJ8sX","sm-col-span-4":"P5H1ohz9m5_rEqZFAkFm","md-col-span-1":"ofLUn8LwR3LLeWl8tPdU","md-col-span-2":"fq1Z8JYbcrrXavvSfzKk","md-col-span-3":"jq9gui11HqTDfI7tXH1d","md-col-span-4":"mVYkSRC7j44WiWLZHOnM","md-col-span-5":"S3wOGmx7YLTrqz_bcLth","md-col-span-6":"Y3GW3wokLgm9jnX78Uwk","md-col-span-7":"ShMEdZjpjdYj7mCQzrSO","md-col-span-8":"nfBAID75QGC1VZ8t0RfR","lg-col-span-1":"Vr2EQcrmKOPJtFU72Vv2","lg-col-span-2":"CTS6MNweODFo4ZxcT0iV","lg-col-span-3":"XTISRluUo3o5xxnPNu09","lg-col-span-4":"c_EtRaSOJafAl5r9WkBm","lg-col-span-5":"HcpW_q5aO8Bf_ngIjyjv","lg-col-span-6":"XF3r0hMrFrrmxH5TJee0","lg-col-span-7":"Jl9ognyJ9XOZ6g0BTzLf","lg-col-span-8":"_8w8oD2R9CVt9AU4PvUy","lg-col-span-9":"ltOXxurwUtxy7XIR_loo","lg-col-span-10":"bKUzzGEJ3wCoAOZZvVCK","lg-col-span-11":"GltQVCPa1x4tZ7sWFg1v","lg-col-span-12":"UzWicuFiKrGgMEjmRAFA","md-col-span-0":"CDwHAcVQxDeV2mFXS1Dz","sm-col-span-0":"sr1184KrdJ0UtgNsMQnR","jp-cut":"MnTtKIHRyzXYoesgRCgm"});

/***/ }),

/***/ "../../js-packages/components/components/layout/container/style.module.scss":
/*!**********************************************************************************!*\
  !*** ../../js-packages/components/components/layout/container/style.module.scss ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"jp-container":"O8YnwnZegI89S2Q3k5Qn"});

/***/ }),

/***/ "../../js-packages/components/components/layout/row/style.module.scss":
/*!****************************************************************************!*\
  !*** ../../js-packages/components/components/layout/row/style.module.scss ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"jp-wrap":"iwMEh2CwJ_r23Y9sVcJ1","jp-row":"HwO79godDUI97Xub9ey4","sm-col-span-1":"EC1Yirv2kOgRU77F2XRd","sm-col-span-2":"FHZqFvZXEDJ9mpOm7CeY","sm-col-span-3":"VOmONLKUkcSrIRYmX6YZ","sm-col-span-4":"eECO55N5YGkBB3tKa0If","md-col-span-1":"u3ZB3zRkuglILO6FSIrx","md-col-span-2":"iZnPl6piWO_GqHn16XKi","md-col-span-3":"WWctfqi1wHZDWrue8GIt","md-col-span-4":"p678NN_M0K78Kpprfndu","md-col-span-5":"_6D2TXtGKmepmwrxSf5DW","md-col-span-6":"cWORs5VDjuStXsiVPtiO","md-col-span-7":"yJsc8qt82L9miwDoe2Y2","md-col-span-8":"hD6bXWfNn5elhKCaBFTD","lg-col-span-1":"k9j6XIJdXbQ5YNyU8sNH","lg-col-span-2":"TnVGX0JHm_muRRcmYYwV","lg-col-span-3":"VILIswQXi8XzNJ3BqePc","lg-col-span-4":"h7mXuoRFWMGCiWYH4Ij1","lg-col-span-5":"uHYkk5STnhikqYMIxtE1","lg-col-span-6":"E8zp8nDOvAQ7VHsXKJJw","lg-col-span-7":"jwOhfvvsXGTCtHfB2854","lg-col-span-8":"DmSEZVFn_2XNNKJGgkXw","lg-col-span-9":"RdgOIY1qMZ8eqAeNSGNw","lg-col-span-10":"XBQd6xiLipeHg0O6cf7N","lg-col-span-11":"JyQ6Tbn3FCHfrCEyWrAr","lg-col-span-12":"fzJ_qaXYWs3EWQEupbLD","md-col-span-0":"LE2ZLIt_Y0slsr6TSmqe","sm-col-span-0":"vYxwZbK_covZoLjDe3BM","jp-cut":"fmzqGXmbTSiUblRujgqB"});

/***/ }),

/***/ "../../js-packages/connection/components/connection-status-card/style.scss":
/*!*********************************************************************************!*\
  !*** ../../js-packages/connection/components/connection-status-card/style.scss ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../js-packages/connection/components/disconnect-card/style.scss":
/*!**************************************************************************!*\
  !*** ../../js-packages/connection/components/disconnect-card/style.scss ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../js-packages/connection/components/disconnect-dialog/style.scss":
/*!****************************************************************************!*\
  !*** ../../js-packages/connection/components/disconnect-dialog/style.scss ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../js-packages/connection/components/disconnect-survey/_jp-connect_disconnect-survey-card.scss":
/*!*********************************************************************************************************!*\
  !*** ../../js-packages/connection/components/disconnect-survey/_jp-connect_disconnect-survey-card.scss ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./_inc/components/my-jetpack-screen/style.scss":
/*!******************************************************!*\
  !*** ./_inc/components/my-jetpack-screen/style.scss ***!
  \******************************************************/
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

/***/ "../../../node_modules/.pnpm/object-assign@4.1.1/node_modules/object-assign/index.js":
/*!*******************************************************************************************!*\
  !*** ../../../node_modules/.pnpm/object-assign@4.1.1/node_modules/object-assign/index.js ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "../../../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/checkPropTypes.js":
/*!***********************************************************************************************!*\
  !*** ../../../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/checkPropTypes.js ***!
  \***********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../../../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "../../../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/factoryWithTypeCheckers.js":
/*!********************************************************************************************************!*\
  !*** ../../../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "../../../node_modules/.pnpm/object-assign@4.1.1/node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../../../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "../../../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "../../../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js":
/*!**************************************************************************************!*\
  !*** ../../../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "../../../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "../../../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*********************************************************************************************************!*\
  !*** ../../../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*********************************************************************************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.development.js":
/*!******************************************************************************************************!*\
  !*** ../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.development.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js":
/*!***********************************************************************************!*\
  !*** ../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "../../js-packages/analytics/index.jsx":
/*!*********************************************!*\
  !*** ../../js-packages/analytics/index.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "../../../node_modules/.pnpm/debug@4.3.2/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/**
 * External dependencies
 */


const debug = debug__WEBPACK_IMPORTED_MODULE_0___default()('dops:analytics');

let _superProps, _user; // Load tracking scripts


window._tkq = window._tkq || [];

window.ga = window.ga || function () {
  (window.ga.q = window.ga.q || []).push(arguments);
};

window.ga.l = +new Date(); // loadScript( '//stats.wp.com/w.js?48' );
// loadScript( '//www.google-analytics.com/analytics.js' );

/**
 * Build a query string
 *
 * @param {string} group - the group
 * @param {string} name - the name
 * @returns {string} - the uricomponent
 */

function buildQuerystring(group, name) {
  let uriComponent = '';

  if ('object' === typeof group) {
    for (const key in group) {
      uriComponent += '&x_' + encodeURIComponent(key) + '=' + encodeURIComponent(group[key]);
    }

    debug('Bumping stats %o', group);
  } else {
    uriComponent = '&x_' + encodeURIComponent(group) + '=' + encodeURIComponent(name);
    debug('Bumping stat "%s" in group "%s"', name, group);
  }

  return uriComponent;
}
/**
 * Build a query string with no prefix
 *
 * @param {string} group - the group
 * @param {string} name - the name
 * @returns {string} - the uricomponent
 */


function buildQuerystringNoPrefix(group, name) {
  let uriComponent = '';

  if ('object' === typeof group) {
    for (const key in group) {
      uriComponent += '&' + encodeURIComponent(key) + '=' + encodeURIComponent(group[key]);
    }

    debug('Built stats %o', group);
  } else {
    uriComponent = '&' + encodeURIComponent(group) + '=' + encodeURIComponent(name);
    debug('Built stat "%s" in group "%s"', name, group);
  }

  return uriComponent;
}

const analytics = {
  initialize: function (userId, username, superProps) {
    analytics.setUser(userId, username);
    analytics.setSuperProps(superProps);
    analytics.identifyUser();
  },
  setGoogleAnalyticsEnabled: function (googleAnalyticsEnabled) {
    let googleAnalyticsKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    this.googleAnalyticsEnabled = googleAnalyticsEnabled;
    this.googleAnalyticsKey = googleAnalyticsKey;
  },
  setMcAnalyticsEnabled: function (mcAnalyticsEnabled) {
    this.mcAnalyticsEnabled = mcAnalyticsEnabled;
  },
  setUser: function (userId, username) {
    _user = {
      ID: userId,
      username: username
    };
  },
  setSuperProps: function (superProps) {
    _superProps = superProps;
  },
  mc: {
    bumpStat: function (group, name) {
      const uriComponent = buildQuerystring(group, name); // prints debug info

      if (this.mcAnalyticsEnabled) {
        new Image().src = document.location.protocol + '//pixel.wp.com/g.gif?v=wpcom-no-pv' + uriComponent + '&t=' + Math.random();
      }
    },
    bumpStatWithPageView: function (group, name) {
      // this function is fairly dangerous, as it bumps page views for wpcom and should only be called in very specific cases.
      const uriComponent = buildQuerystringNoPrefix(group, name); // prints debug info

      if (this.mcAnalyticsEnabled) {
        new Image().src = document.location.protocol + '//pixel.wp.com/g.gif?v=wpcom' + uriComponent + '&t=' + Math.random();
      }
    }
  },
  // pageView is a wrapper for pageview events across Tracks and GA
  pageView: {
    record: function (urlPath, pageTitle) {
      analytics.tracks.recordPageView(urlPath);
      analytics.ga.recordPageView(urlPath, pageTitle);
    }
  },
  purchase: {
    record: function (transactionId, itemName, itemId, revenue, price, qty, currency) {
      analytics.ga.recordPurchase(transactionId, itemName, itemId, revenue, price, qty, currency);
    }
  },
  tracks: {
    recordEvent: function (eventName, eventProperties) {
      eventProperties = eventProperties || {};

      if (eventName.indexOf('akismet_') !== 0 && eventName.indexOf('jetpack_') !== 0) {
        debug('- Event name must be prefixed by "akismet_" or "jetpack_"');
        return;
      }

      if (_superProps) {
        debug('- Super Props: %o', _superProps);
        eventProperties = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.assign)(eventProperties, _superProps);
      }

      debug('Record event "%s" called with props %s', eventName, JSON.stringify(eventProperties));

      window._tkq.push(['recordEvent', eventName, eventProperties]);
    },
    recordJetpackClick: function (target) {
      const props = 'object' === typeof target ? target : {
        target: target
      };
      analytics.tracks.recordEvent('jetpack_wpa_click', props);
    },
    recordPageView: function (urlPath) {
      analytics.tracks.recordEvent('akismet_page_view', {
        path: urlPath
      });
    },
    setOptOut: function (isOptingOut) {
      debug('Pushing setOptOut: %o', isOptingOut);

      window._tkq.push(['setOptOut', isOptingOut]);
    }
  },
  // Google Analytics usage and event stat tracking
  ga: {
    initialized: false,
    initialize: function () {
      let parameters = {};

      if (!analytics.ga.initialized) {
        if (_user) {
          parameters = {
            userId: 'u-' + _user.ID
          };
        }

        window.ga('create', this.googleAnalyticsKey, 'auto', parameters);
        analytics.ga.initialized = true;
      }
    },
    recordPageView: function (urlPath, pageTitle) {
      analytics.ga.initialize();
      debug('Recording Page View ~ [URL: ' + urlPath + '] [Title: ' + pageTitle + ']');

      if (this.googleAnalyticsEnabled) {
        // Set the current page so all GA events are attached to it.
        window.ga('set', 'page', urlPath);
        window.ga('send', {
          hitType: 'pageview',
          page: urlPath,
          title: pageTitle
        });
      }
    },
    recordEvent: function (category, action, label, value) {
      analytics.ga.initialize();
      let debugText = 'Recording Event ~ [Category: ' + category + '] [Action: ' + action + ']';

      if ('undefined' !== typeof label) {
        debugText += ' [Option Label: ' + label + ']';
      }

      if ('undefined' !== typeof value) {
        debugText += ' [Option Value: ' + value + ']';
      }

      debug(debugText);

      if (this.googleAnalyticsEnabled) {
        window.ga('send', 'event', category, action, label, value);
      }
    },
    recordPurchase: function (transactionId, itemName, itemId, revenue, price, qty, currency) {
      window.ga('require', 'ecommerce');
      window.ga('ecommerce:addTransaction', {
        id: transactionId,
        // Transaction ID. Required.
        // 'affiliation': 'Acme Clothing',   // Affiliation or store name.
        revenue: revenue,
        // Grand Total.
        // 'tax': '1.29',                     // Tax.
        currency: currency // local currency code.

      });
      window.ga('ecommerce:addItem', {
        id: transactionId,
        // Transaction ID. Required.
        name: itemName,
        // Product name. Required.
        sku: itemId,
        // SKU/code.
        // 'category': 'Party Toys',         // Category or variation.
        price: price,
        // Unit price.
        quantity: qty // Quantity.

      });
      window.ga('ecommerce:send');
    }
  },
  identifyUser: function () {
    // Don't identify the user if we don't have one
    if (_user) {
      window._tkq.push(['identifyUser', _user.ID, _user.username]);
    }
  },
  setProperties: function (properties) {
    window._tkq.push(['setProperties', properties]);
  },
  clearedIdentity: function () {
    window._tkq.push(['clearIdentity']);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (analytics);

/***/ }),

/***/ "../../js-packages/api/index.jsx":
/*!***************************************!*\
  !*** ../../js-packages/api/index.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JsonParseError": () => (/* binding */ JsonParseError),
/* harmony export */   "JsonParseAfterRedirectError": () => (/* binding */ JsonParseAfterRedirectError),
/* harmony export */   "Api404Error": () => (/* binding */ Api404Error),
/* harmony export */   "Api404AfterRedirectError": () => (/* binding */ Api404AfterRedirectError),
/* harmony export */   "FetchNetworkError": () => (/* binding */ FetchNetworkError),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _automattic_jetpack_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @automattic/jetpack-config */ "../../js-packages/config/src/index.js");
/* harmony import */ var _automattic_jetpack_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_automattic_jetpack_config__WEBPACK_IMPORTED_MODULE_2__);
/**
 * External dependencies
 */



/**
 * Helps create new custom error classes to better notify upper layers.
 *
 * @param {string} name - the Error name that will be availble in Error.name
 * @returns {Error}      a new custom error class.
 */

function createCustomError(name) {
  class CustomError extends Error {
    constructor() {
      super(...arguments);
      this.name = name;
    }

  }

  return CustomError;
}

const JsonParseError = createCustomError('JsonParseError');
const JsonParseAfterRedirectError = createCustomError('JsonParseAfterRedirectError');
const Api404Error = createCustomError('Api404Error');
const Api404AfterRedirectError = createCustomError('Api404AfterRedirectError');
const FetchNetworkError = createCustomError('FetchNetworkError');
/**
 * Create a Jetpack Rest Api Client
 *
 * @param {string} root - The API root
 * @param {string} nonce - The API Nonce
 */

function JetpackRestApiClient(root, nonce) {
  let apiRoot = root,
      headers = {
    'X-WP-Nonce': nonce
  },
      getParams = {
    credentials: 'same-origin',
    headers
  },
      postParams = {
    method: 'post',
    credentials: 'same-origin',
    headers: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.assign)({}, headers, {
      'Content-type': 'application/json'
    })
  },
      cacheBusterCallback = addCacheBuster;
  const methods = {
    setApiRoot(newRoot) {
      apiRoot = newRoot;
    },

    setApiNonce(newNonce) {
      headers = {
        'X-WP-Nonce': newNonce
      };
      getParams = {
        credentials: 'same-origin',
        headers: headers
      };
      postParams = {
        method: 'post',
        credentials: 'same-origin',
        headers: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.assign)({}, headers, {
          'Content-type': 'application/json'
        })
      };
    },

    setCacheBusterCallback: callback => {
      cacheBusterCallback = callback;
    },
    registerSite: (registrationNonce, redirectUri) => {
      const params = {
        registration_nonce: registrationNonce,
        no_iframe: true
      };

      if ((0,_automattic_jetpack_config__WEBPACK_IMPORTED_MODULE_2__.jetpackConfigHas)('consumer_slug')) {
        params.plugin_slug = (0,_automattic_jetpack_config__WEBPACK_IMPORTED_MODULE_2__.jetpackConfigGet)('consumer_slug');
      }

      if (null !== redirectUri) {
        params.redirect_uri = redirectUri;
      }

      return postRequest(`${apiRoot}jetpack/v4/connection/register`, postParams, {
        body: JSON.stringify(params)
      }).then(checkStatus).then(parseJsonResponse);
    },
    fetchAuthorizationUrl: redirectUri => getRequest((0,_wordpress_url__WEBPACK_IMPORTED_MODULE_1__.addQueryArgs)(`${apiRoot}jetpack/v4/connection/authorize_url`, {
      no_iframe: '1',
      redirect_uri: redirectUri
    }), getParams).then(checkStatus).then(parseJsonResponse),
    fetchSiteConnectionData: () => getRequest(`${apiRoot}jetpack/v4/connection/data`, getParams).then(parseJsonResponse),
    fetchSiteConnectionStatus: () => getRequest(`${apiRoot}jetpack/v4/connection`, getParams).then(parseJsonResponse),
    fetchSiteConnectionTest: () => getRequest(`${apiRoot}jetpack/v4/connection/test`, getParams).then(checkStatus).then(parseJsonResponse),
    fetchUserConnectionData: () => getRequest(`${apiRoot}jetpack/v4/connection/data`, getParams).then(parseJsonResponse),
    fetchUserTrackingSettings: () => getRequest(`${apiRoot}jetpack/v4/tracking/settings`, getParams).then(checkStatus).then(parseJsonResponse),
    updateUserTrackingSettings: newSettings => postRequest(`${apiRoot}jetpack/v4/tracking/settings`, postParams, {
      body: JSON.stringify(newSettings)
    }).then(checkStatus).then(parseJsonResponse),
    disconnectSite: () => postRequest(`${apiRoot}jetpack/v4/connection`, postParams, {
      body: JSON.stringify({
        isActive: false
      })
    }).then(checkStatus).then(parseJsonResponse),
    fetchConnectUrl: () => getRequest(`${apiRoot}jetpack/v4/connection/url`, getParams).then(checkStatus).then(parseJsonResponse),
    unlinkUser: () => postRequest(`${apiRoot}jetpack/v4/connection/user`, postParams, {
      body: JSON.stringify({
        linked: false
      })
    }).then(checkStatus).then(parseJsonResponse),
    reconnect: () => postRequest(`${apiRoot}jetpack/v4/connection/reconnect`, postParams).then(checkStatus).then(parseJsonResponse),
    fetchConnectedPlugins: () => getRequest(`${apiRoot}jetpack/v4/connection/plugins`, getParams).then(checkStatus).then(parseJsonResponse),
    setHasSeenWCConnectionModal: () => postRequest(`${apiRoot}jetpack/v4/seen-wc-connection-modal`, postParams).then(checkStatus).then(parseJsonResponse),
    fetchModules: () => getRequest(`${apiRoot}jetpack/v4/module/all`, getParams).then(checkStatus).then(parseJsonResponse),
    fetchModule: slug => getRequest(`${apiRoot}jetpack/v4/module/${slug}`, getParams).then(checkStatus).then(parseJsonResponse),
    activateModule: slug => postRequest(`${apiRoot}jetpack/v4/module/${slug}/active`, postParams, {
      body: JSON.stringify({
        active: true
      })
    }).then(checkStatus).then(parseJsonResponse),
    deactivateModule: slug => postRequest(`${apiRoot}jetpack/v4/module/${slug}/active`, postParams, {
      body: JSON.stringify({
        active: false
      })
    }),
    updateModuleOptions: (slug, newOptionValues) => postRequest(`${apiRoot}jetpack/v4/module/${slug}`, postParams, {
      body: JSON.stringify(newOptionValues)
    }).then(checkStatus).then(parseJsonResponse),
    updateSettings: newOptionValues => postRequest(`${apiRoot}jetpack/v4/settings`, postParams, {
      body: JSON.stringify(newOptionValues)
    }).then(checkStatus).then(parseJsonResponse),
    getProtectCount: () => getRequest(`${apiRoot}jetpack/v4/module/protect/data`, getParams).then(checkStatus).then(parseJsonResponse),
    resetOptions: options => postRequest(`${apiRoot}jetpack/v4/options/${options}`, postParams, {
      body: JSON.stringify({
        reset: true
      })
    }).then(checkStatus).then(parseJsonResponse),
    activateVaultPress: () => postRequest(`${apiRoot}jetpack/v4/plugins`, postParams, {
      body: JSON.stringify({
        slug: 'vaultpress',
        status: 'active'
      })
    }).then(checkStatus).then(parseJsonResponse),
    getVaultPressData: () => getRequest(`${apiRoot}jetpack/v4/module/vaultpress/data`, getParams).then(checkStatus).then(parseJsonResponse),
    installPlugin: (slug, source) => {
      const props = {
        slug,
        status: 'active'
      };

      if (source) {
        props.source = source;
      }

      return postRequest(`${apiRoot}jetpack/v4/plugins`, postParams, {
        body: JSON.stringify(props)
      }).then(checkStatus).then(parseJsonResponse);
    },
    activateAkismet: () => postRequest(`${apiRoot}jetpack/v4/plugins`, postParams, {
      body: JSON.stringify({
        slug: 'akismet',
        status: 'active'
      })
    }).then(checkStatus).then(parseJsonResponse),
    getAkismetData: () => getRequest(`${apiRoot}jetpack/v4/module/akismet/data`, getParams).then(checkStatus).then(parseJsonResponse),
    checkAkismetKey: () => getRequest(`${apiRoot}jetpack/v4/module/akismet/key/check`, getParams).then(checkStatus).then(parseJsonResponse),
    checkAkismetKeyTyped: apiKey => postRequest(`${apiRoot}jetpack/v4/module/akismet/key/check`, postParams, {
      body: JSON.stringify({
        api_key: apiKey
      })
    }).then(checkStatus).then(parseJsonResponse),
    fetchStatsData: range => getRequest(statsDataUrl(range), getParams).then(checkStatus).then(parseJsonResponse).then(handleStatsResponseError),
    getPluginUpdates: () => getRequest(`${apiRoot}jetpack/v4/updates/plugins`, getParams).then(checkStatus).then(parseJsonResponse),
    getPlans: () => getRequest(`${apiRoot}jetpack/v4/plans`, getParams).then(checkStatus).then(parseJsonResponse),
    fetchSettings: () => getRequest(`${apiRoot}jetpack/v4/settings`, getParams).then(checkStatus).then(parseJsonResponse),
    updateSetting: updatedSetting => postRequest(`${apiRoot}jetpack/v4/settings`, postParams, {
      body: JSON.stringify(updatedSetting)
    }).then(checkStatus).then(parseJsonResponse),
    fetchSiteData: () => getRequest(`${apiRoot}jetpack/v4/site`, getParams).then(checkStatus).then(parseJsonResponse).then(body => JSON.parse(body.data)),
    fetchSiteFeatures: () => getRequest(`${apiRoot}jetpack/v4/site/features`, getParams).then(checkStatus).then(parseJsonResponse).then(body => JSON.parse(body.data)),
    fetchSiteProducts: () => getRequest(`${apiRoot}jetpack/v4/site/products`, getParams).then(checkStatus).then(parseJsonResponse),
    fetchSitePurchases: () => getRequest(`${apiRoot}jetpack/v4/site/purchases`, getParams).then(checkStatus).then(parseJsonResponse).then(body => JSON.parse(body.data)),
    fetchSiteBenefits: () => getRequest(`${apiRoot}jetpack/v4/site/benefits`, getParams).then(checkStatus).then(parseJsonResponse).then(body => JSON.parse(body.data)),
    fetchSetupQuestionnaire: () => getRequest(`${apiRoot}jetpack/v4/setup/questionnaire`, getParams).then(checkStatus).then(parseJsonResponse),
    fetchRecommendationsData: () => getRequest(`${apiRoot}jetpack/v4/recommendations/data`, getParams).then(checkStatus).then(parseJsonResponse),
    fetchRecommendationsProductSuggestions: () => getRequest(`${apiRoot}jetpack/v4/recommendations/product-suggestions`, getParams).then(checkStatus).then(parseJsonResponse),
    fetchRecommendationsUpsell: () => getRequest(`${apiRoot}jetpack/v4/recommendations/upsell`, getParams).then(checkStatus).then(parseJsonResponse),
    saveRecommendationsData: data => postRequest(`${apiRoot}jetpack/v4/recommendations/data`, postParams, {
      body: JSON.stringify({
        data
      })
    }).then(checkStatus),
    fetchProducts: () => getRequest(`${apiRoot}jetpack/v4/products`, getParams).then(checkStatus).then(parseJsonResponse),
    fetchRewindStatus: () => getRequest(`${apiRoot}jetpack/v4/rewind`, getParams).then(checkStatus).then(parseJsonResponse).then(body => JSON.parse(body.data)),
    fetchScanStatus: () => getRequest(`${apiRoot}jetpack/v4/scan`, getParams).then(checkStatus).then(parseJsonResponse).then(body => JSON.parse(body.data)),
    dismissJetpackNotice: notice => postRequest(`${apiRoot}jetpack/v4/notice/${notice}`, postParams, {
      body: JSON.stringify({
        dismissed: true
      })
    }).then(checkStatus).then(parseJsonResponse),
    fetchPluginsData: () => getRequest(`${apiRoot}jetpack/v4/plugins`, getParams).then(checkStatus).then(parseJsonResponse),
    fetchVerifySiteGoogleStatus: keyringId => {
      const request = keyringId !== null ? getRequest(`${apiRoot}jetpack/v4/verify-site/google/${keyringId}`, getParams) : getRequest(`${apiRoot}jetpack/v4/verify-site/google`, getParams);
      return request.then(checkStatus).then(parseJsonResponse);
    },
    verifySiteGoogle: keyringId => postRequest(`${apiRoot}jetpack/v4/verify-site/google`, postParams, {
      body: JSON.stringify({
        keyring_id: keyringId
      })
    }).then(checkStatus).then(parseJsonResponse),
    sendMobileLoginEmail: () => postRequest(`${apiRoot}jetpack/v4/mobile/send-login-email`, postParams).then(checkStatus).then(parseJsonResponse),
    submitSurvey: surveyResponse => postRequest(`${apiRoot}jetpack/v4/marketing/survey`, postParams, {
      body: JSON.stringify(surveyResponse)
    }).then(checkStatus).then(parseJsonResponse),
    saveSetupQuestionnaire: props => postRequest(`${apiRoot}jetpack/v4/setup/questionnaire`, postParams, {
      body: JSON.stringify(props)
    }).then(checkStatus).then(parseJsonResponse),
    updateLicensingError: props => postRequest(`${apiRoot}jetpack/v4/licensing/error`, postParams, {
      body: JSON.stringify(props)
    }).then(checkStatus).then(parseJsonResponse),
    updateLicenseKey: license => postRequest(`${apiRoot}jetpack/v4/licensing/set-license`, postParams, {
      body: JSON.stringify({
        license
      })
    }).then(checkStatus).then(parseJsonResponse),
    getUserLicensesCounts: () => getRequest(`${apiRoot}jetpack/v4/licensing/user/counts`, getParams).then(checkStatus).then(parseJsonResponse),
    updateLicensingActivationNoticeDismiss: lastDetachedCount => postRequest(`${apiRoot}jetpack/v4/licensing/user/activation-notice-dismiss`, postParams, {
      body: JSON.stringify({
        last_detached_count: lastDetachedCount
      })
    }).then(checkStatus).then(parseJsonResponse),
    updateRecommendationsStep: step => postRequest(`${apiRoot}jetpack/v4/recommendations/step`, postParams, {
      body: JSON.stringify({
        step
      })
    }).then(checkStatus),
    confirmIDCSafeMode: () => postRequest(`${apiRoot}jetpack/v4/identity-crisis/confirm-safe-mode`, postParams).then(checkStatus),
    startIDCFresh: redirectUri => postRequest(`${apiRoot}jetpack/v4/identity-crisis/start-fresh`, postParams, {
      body: JSON.stringify({
        redirect_uri: redirectUri
      })
    }).then(checkStatus).then(parseJsonResponse),
    migrateIDC: () => postRequest(`${apiRoot}jetpack/v4/identity-crisis/migrate`, postParams).then(checkStatus),
    attachLicenses: licenses => postRequest(`${apiRoot}jetpack/v4/licensing/attach-licenses`, postParams, {
      body: JSON.stringify({
        licenses
      })
    }).then(checkStatus).then(parseJsonResponse),
    fetchSearchPlanInfo: () => getRequest(`${apiRoot}jetpack/v4/search/plan`, getParams).then(checkStatus).then(parseJsonResponse),
    fetchSearchSettings: () => getRequest(`${apiRoot}jetpack/v4/search/settings`, getParams).then(checkStatus).then(parseJsonResponse),
    updateSearchSettings: newSettings => postRequest(`${apiRoot}jetpack/v4/search/settings`, postParams, {
      body: JSON.stringify(newSettings)
    }).then(checkStatus).then(parseJsonResponse)
  };
  /**
   * The default callback to add a cachebuster parameter to route
   *
   * @param {string} route - the route
   * @returns {string} - the route with the cachebuster appended
   */

  function addCacheBuster(route) {
    const parts = route.split('?'),
          query = parts.length > 1 ? parts[1] : '',
          args = query.length ? query.split('&') : [];
    args.push('_cacheBuster=' + new Date().getTime());
    return parts[0] + '?' + args.join('&');
  }
  /**
   * Generate a request promise for the route and params. Automatically adds a cachebuster.
   *
   * @param {string} route - the route
   * @param {object} params - the params
   * @returns {Promise<Response>} - the http request promise
   */


  function getRequest(route, params) {
    return fetch(cacheBusterCallback(route), params);
  }
  /**
   * Generate a POST request promise for the route and params. Automatically adds a cachebuster.
   *
   * @param {string} route - the route
   * @param {object} params - the params
   * @param {string} body - the body
   * @returns {Promise<Response>} - the http response promise
   */


  function postRequest(route, params, body) {
    return fetch(route, (0,lodash__WEBPACK_IMPORTED_MODULE_0__.assign)({}, params, body)).catch(catchNetworkErrors);
  }
  /**
   * Returns the stats data URL for the given date range
   *
   * @param {string} range - the range
   * @returns {string} - the stats URL
   */


  function statsDataUrl(range) {
    let url = `${apiRoot}jetpack/v4/module/stats/data`;

    if (url.indexOf('?') !== -1) {
      url = url + `&range=${encodeURIComponent(range)}`;
    } else {
      url = url + `?range=${encodeURIComponent(range)}`;
    }

    return url;
  }
  /**
   * Returns stats data if possible, otherwise an empty object
   *
   * @param {object} statsData - the stats data or error
   * @returns {object} - the handled stats data
   */


  function handleStatsResponseError(statsData) {
    // If we get a .response property, it means that .com's response is errory.
    // Probably because the site does not have stats yet.
    const responseOk = statsData.general && statsData.general.response === undefined || statsData.week && statsData.week.response === undefined || statsData.month && statsData.month.response === undefined;
    return responseOk ? statsData : {};
  }

  (0,lodash__WEBPACK_IMPORTED_MODULE_0__.assign)(this, methods);
}

const restApi = new JetpackRestApiClient();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (restApi);
/**
 * Check the status of the response. Throw an error if it was not OK
 *
 * @param {Response} response - the API response
 * @returns {Promise<object>} - a promise to return the parsed JSON body as an object
 */

function checkStatus(response) {
  // Regular success responses
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  if (response.status === 404) {
    return new Promise(() => {
      const err = response.redirected ? new Api404AfterRedirectError(response.redirected) : new Api404Error();
      throw err;
    });
  }

  return response.json().catch(e => catchJsonParseError(e)).then(json => {
    const error = new Error(`${json.message} (Status ${response.status})`);
    error.response = json;
    error.name = 'ApiError';
    throw error;
  });
}
/**
 * Parse the JSON response
 *
 * @param {Response} response - the response object
 * @returns {Promise<object>} - promise to return the parsed json object
 */


function parseJsonResponse(response) {
  return response.json().catch(e => catchJsonParseError(e, response.redirected, response.url));
}
/**
 * Throw appropriate exception given an API error
 *
 * @param {Error} e - the error
 * @param {boolean} redirected - are we being redirected?
 * @param {string} url - the URL that returned the error
 */


function catchJsonParseError(e, redirected, url) {
  const err = redirected ? new JsonParseAfterRedirectError(url) : new JsonParseError();
  throw err;
}
/**
 * Catches TypeError coming from the Fetch API implementation
 */


function catchNetworkErrors() {
  //Either one of:
  // * A preflight error like a redirection to an external site (which results in a CORS)
  // * A preflight error like ERR_TOO_MANY_REDIRECTS
  throw new FetchNetworkError();
}

/***/ }),

/***/ "../../js-packages/components/components/admin-page/footer.jsx":
/*!*********************************************************************!*\
  !*** ../../js-packages/components/components/admin-page/footer.jsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../../../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.module.scss */ "../../js-packages/components/components/admin-page/style.module.scss");
/* harmony import */ var _jetpack_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../jetpack-footer */ "../../js-packages/components/components/jetpack-footer/index.jsx");
/* harmony import */ var _layout_row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layout/row */ "../../js-packages/components/components/layout/row/index.jsx");
/* harmony import */ var _layout_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/container */ "../../js-packages/components/components/layout/container/index.jsx");
/* harmony import */ var _layout_col__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layout/col */ "../../js-packages/components/components/layout/col/index.jsx");
/**
 * External dependencies
 */


const __ = _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__;

/**
 * Internal dependencies
 */






/**
 * Footer for the AdminPage component
 *
 * @param {object} props - Component properties.
 * @returns {React.Component} AdminPage component.
 */

const AdminPageFooter = props => {
  const {
    moduleName,
    a8cLogoHref
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _style_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]["jp-admin-page-section"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layout_container__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layout_row__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layout_col__WEBPACK_IMPORTED_MODULE_6__["default"], {
    lg: 12,
    md: 8,
    sm: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_jetpack_footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    moduleName: moduleName,
    a8cLogoHref: a8cLogoHref
  })))));
};

AdminPageFooter.defaultProps = {
  a8cLogoHref: 'https://jetpack.com',
  moduleName: __('Jetpack', 'jetpack')
};
AdminPageFooter.propTypes = {
  /** Link for 'An Automattic Airline' in the footer. */
  a8cLogoHref: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),

  /** Name of the module, e.g. 'Jetpack Search' that will be displayed in the footer. */
  moduleName: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminPageFooter);

/***/ }),

/***/ "../../js-packages/components/components/admin-page/header.jsx":
/*!*********************************************************************!*\
  !*** ../../js-packages/components/components/admin-page/header.jsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.module.scss */ "../../js-packages/components/components/admin-page/style.module.scss");
/* harmony import */ var _jetpack_logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../jetpack-logo */ "../../js-packages/components/components/jetpack-logo/index.jsx");
/* harmony import */ var _layout_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/row */ "../../js-packages/components/components/layout/row/index.jsx");
/* harmony import */ var _layout_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/container */ "../../js-packages/components/components/layout/container/index.jsx");
/* harmony import */ var _layout_col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/col */ "../../js-packages/components/components/layout/col/index.jsx");
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */






/**
 * Header for the AdminPage component
 *
 * @returns {React.Component} AdminPage component.
 */

const AdminPageHeader = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: _style_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"]["jp-admin-page-section"]
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layout_container__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layout_row__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layout_col__WEBPACK_IMPORTED_MODULE_4__["default"], {
  lg: 12,
  md: 8,
  sm: 4
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_jetpack_logo__WEBPACK_IMPORTED_MODULE_5__["default"], null)))));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminPageHeader);

/***/ }),

/***/ "../../js-packages/components/components/admin-page/index.jsx":
/*!********************************************************************!*\
  !*** ../../js-packages/components/components/admin-page/index.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../../../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.module.scss */ "../../js-packages/components/components/admin-page/style.module.scss");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header */ "../../js-packages/components/components/admin-page/header.jsx");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer */ "../../js-packages/components/components/admin-page/footer.jsx");
/**
 * External dependencies
 */


const __ = _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__;

/**
 * Internal dependencies
 */




/**
 * This is the base structure for any admin page. It comes with Header and Footer.
 *
 * All content must be passed as children wrapped in as many <AdminSection> elements as needed.
 *
 * @param {object} props - Component properties.
 * @returns {React.Component} AdminPage component.
 */

const AdminPage = props => {
  const {
    children,
    moduleName,
    a8cLogoHref,
    showHeader,
    showFooter
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _style_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]["jp-admin-page"]
  }, showHeader && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_header__WEBPACK_IMPORTED_MODULE_4__["default"], null), children, showFooter && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    moduleName: moduleName,
    a8cLogoHref: a8cLogoHref
  }));
};

AdminPage.defaultProps = {
  a8cLogoHref: 'https://jetpack.com',
  moduleName: __('Jetpack', 'jetpack'),
  showHeader: true,
  showFooter: true
};
AdminPage.propTypes = {
  /** Link for 'An Automattic Airline' in the footer. */
  a8cLogoHref: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),

  /** Name of the module, e.g. 'Jetpack Search' that will be displayed in the footer. */
  moduleName: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),

  /** Whether or not to display the Header */
  showHeader: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),

  /** Whether or not to display the Footer */
  showFooter: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminPage);

/***/ }),

/***/ "../../js-packages/components/components/admin-section/basic/index.jsx":
/*!*****************************************************************************!*\
  !*** ../../js-packages/components/components/admin-section/basic/index.jsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.module.scss */ "../../js-packages/components/components/admin-section/basic/style.module.scss");
/* harmony import */ var _layout_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layout/container */ "../../js-packages/components/components/layout/container/index.jsx");
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



/**
 * This is the wrapper component to build sections within your admin page.
 *
 * @param {object} props - Component properties.
 * @returns {React.Component} AdminSection component.
 */

const AdminSection = props => {
  const {
    children
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _style_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"]["jp-admin-section"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layout_container__WEBPACK_IMPORTED_MODULE_2__["default"], null, children));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminSection);

/***/ }),

/***/ "../../js-packages/components/components/admin-section/hero/index.jsx":
/*!****************************************************************************!*\
  !*** ../../js-packages/components/components/admin-section/hero/index.jsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.module.scss */ "../../js-packages/components/components/admin-section/hero/style.module.scss");
/* harmony import */ var _layout_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layout/container */ "../../js-packages/components/components/layout/container/index.jsx");
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



/**
 * The wrapper component for a Hero Section to be used in admin pages.
 *
 * @param {object} props - Component properties.
 * @returns {React.Component} AdminSectionHero component.
 */

const AdminSectionHero = props => {
  const {
    children
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _style_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"]["jp-admin-section-hero"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layout_container__WEBPACK_IMPORTED_MODULE_2__["default"], null, children));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminSectionHero);

/***/ }),

/***/ "../../js-packages/components/components/automattic-byline-logo/index.jsx":
/*!********************************************************************************!*\
  !*** ../../js-packages/components/components/automattic-byline-logo/index.jsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_runner_work_jetpack_jetpack_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_extends_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/extends.js */ "../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _home_runner_work_jetpack_jetpack_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_extends_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_jetpack_jetpack_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_extends_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "../../../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);


/**
 * External dependencies
 */



const __ = _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__;

/**
 * Automattic "By line" Logo component.
 *
 * @param {object} props - Component properties.
 * @returns {React.Component} AutomatticBylineLogo component.
 */

const AutomatticBylineLogo = props => {
  const {
    title,
    height,
    className,
    ...otherProps
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", _home_runner_work_jetpack_jetpack_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_extends_js__WEBPACK_IMPORTED_MODULE_0___default()({
    role: "img",
    x: "0",
    y: "0",
    viewBox: "0 0 935 38.2",
    enableBackground: "new 0 0 935 38.2",
    "aria-labelledby": "jp-automattic-byline-logo-title",
    height: height,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('jp-automattic-byline-logo', className)
  }, otherProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("title", {
    id: "jp-automattic-byline-logo-title"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", {
    d: "M317.1 38.2c-12.6 0-20.7-9.1-20.7-18.5v-1.2c0-9.6 8.2-18.5 20.7-18.5 12.6 0 20.8 8.9 20.8 18.5v1.2C337.9 29.1 329.7 38.2 317.1 38.2zM331.2 18.6c0-6.9-5-13-14.1-13s-14 6.1-14 13v0.9c0 6.9 5 13.1 14 13.1s14.1-6.2 14.1-13.1V18.6zM175 36.8l-4.7-8.8h-20.9l-4.5 8.8h-7L157 1.3h5.5L182 36.8H175zM159.7 8.2L152 23.1h15.7L159.7 8.2zM212.4 38.2c-12.7 0-18.7-6.9-18.7-16.2V1.3h6.6v20.9c0 6.6 4.3 10.5 12.5 10.5 8.4 0 11.9-3.9 11.9-10.5V1.3h6.7V22C231.4 30.8 225.8 38.2 212.4 38.2zM268.6 6.8v30h-6.7v-30h-15.5V1.3h37.7v5.5H268.6zM397.3 36.8V8.7l-1.8 3.1 -14.9 25h-3.3l-14.7-25 -1.8-3.1v28.1h-6.5V1.3h9.2l14 24.4 1.7 3 1.7-3 13.9-24.4h9.1v35.5H397.3zM454.4 36.8l-4.7-8.8h-20.9l-4.5 8.8h-7l19.2-35.5h5.5l19.5 35.5H454.4zM439.1 8.2l-7.7 14.9h15.7L439.1 8.2zM488.4 6.8v30h-6.7v-30h-15.5V1.3h37.7v5.5H488.4zM537.3 6.8v30h-6.7v-30h-15.5V1.3h37.7v5.5H537.3zM569.3 36.8V4.6c2.7 0 3.7-1.4 3.7-3.4h2.8v35.5L569.3 36.8 569.3 36.8zM628 11.3c-3.2-2.9-7.9-5.7-14.2-5.7 -9.5 0-14.8 6.5-14.8 13.3v0.7c0 6.7 5.4 13 15.3 13 5.9 0 10.8-2.8 13.9-5.7l4 4.2c-3.9 3.8-10.5 7.1-18.3 7.1 -13.4 0-21.6-8.7-21.6-18.3v-1.2c0-9.6 8.9-18.7 21.9-18.7 7.5 0 14.3 3.1 18 7.1L628 11.3zM321.5 12.4c1.2 0.8 1.5 2.4 0.8 3.6l-6.1 9.4c-0.8 1.2-2.4 1.6-3.6 0.8l0 0c-1.2-0.8-1.5-2.4-0.8-3.6l6.1-9.4C318.7 11.9 320.3 11.6 321.5 12.4L321.5 12.4z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", {
    d: "M37.5 36.7l-4.7-8.9H11.7l-4.6 8.9H0L19.4 0.8H25l19.7 35.9H37.5zM22 7.8l-7.8 15.1h15.9L22 7.8zM82.8 36.7l-23.3-24 -2.3-2.5v26.6h-6.7v-36H57l22.6 24 2.3 2.6V0.8h6.7v35.9H82.8z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", {
    d: "M719.9 37l-4.8-8.9H694l-4.6 8.9h-7.1l19.5-36h5.6l19.8 36H719.9zM704.4 8l-7.8 15.1h15.9L704.4 8zM733 37V1h6.8v36H733zM781 37c-1.8 0-2.6-2.5-2.9-5.8l-0.2-3.7c-0.2-3.6-1.7-5.1-8.4-5.1h-12.8V37H750V1h19.6c10.8 0 15.7 4.3 15.7 9.9 0 3.9-2 7.7-9 9 7 0.5 8.5 3.7 8.6 7.9l0.1 3c0.1 2.5 0.5 4.3 2.2 6.1V37H781zM778.5 11.8c0-2.6-2.1-5.1-7.9-5.1h-13.8v10.8h14.4c5 0 7.3-2.4 7.3-5.2V11.8zM794.8 37V1h6.8v30.4h28.2V37H794.8zM836.7 37V1h6.8v36H836.7zM886.2 37l-23.4-24.1 -2.3-2.5V37h-6.8V1h6.5l22.7 24.1 2.3 2.6V1h6.8v36H886.2zM902.3 37V1H935v5.6h-26v9.2h20v5.5h-20v10.1h26V37H902.3z"
  }));
};

AutomatticBylineLogo.defaultProps = {
  title: __('An Automattic Airline', 'jetpack'),
  height: 7,
  className: ''
};
AutomatticBylineLogo.propTypes = {
  /** Title for SVG. */
  title: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),

  /** Height for SVG. */
  height: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),

  /** Additional className for the a wrapper. `jp-automattic-byline-logo` always included */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AutomatticBylineLogo);

/***/ }),

/***/ "../../js-packages/components/components/decorative-card/index.jsx":
/*!*************************************************************************!*\
  !*** ../../js-packages/components/components/decorative-card/index.jsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../../../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "../../js-packages/components/components/decorative-card/style.scss");
/**
 * External Dependencies
 */


/**
 * Internal Dependencies
 */


/**
 * A decorative card used in the disconnection flow.
 *
 * @param {object} props - The properties.
 * @returns {React.Component} - The DecorativeCard component.
 */

const DecorativeCard = props => {
  const {
    format,
    icon,
    imageUrl
  } = props;

  const renderIcon = () => {
    if (icon) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "jp-components__decorative-card__icon-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: 'jp-components__decorative-card__icon jp-components__decorative-card__icon--' + icon
      }));
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'jp-components__decorative-card ' + (format ? 'jp-components__decorative-card--' + format : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "jp-components__decorative-card__image",
    style: {
      backgroundImage: imageUrl ? `url( ${imageUrl} )` : ''
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "jp-components__decorative-card__content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "jp-components__decorative-card__lines"
  })), renderIcon());
};

DecorativeCard.propTypes = {
  /** The format of the card (horizontal or vertical) */
  format: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(['horizontal', 'vertical']),

  /** An icon slug that can be used to show an icon (options are limited to what is in the stylesheet) */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(['unlink']),

  /** URL for an image to show in the card. */
  imageUrl: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
DecorativeCard.defaultProps = {
  format: 'horizontal'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DecorativeCard);

/***/ }),

/***/ "../../js-packages/components/components/jetpack-footer/index.jsx":
/*!************************************************************************!*\
  !*** ../../js-packages/components/components/jetpack-footer/index.jsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_runner_work_jetpack_jetpack_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_extends_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/extends.js */ "../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _home_runner_work_jetpack_jetpack_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_extends_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_jetpack_jetpack_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_extends_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "../../../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _automattic_byline_logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../automattic-byline-logo */ "../../js-packages/components/components/automattic-byline-logo/index.jsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "../../js-packages/components/components/jetpack-footer/style.scss");
/* harmony import */ var _jetpack_logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../jetpack-logo */ "../../js-packages/components/components/jetpack-logo/index.jsx");


/**
 * External dependencies
 */


const __ = _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__;


/**
 * Internal dependencies
 */




/**
 * JetpackFooter component displays a tiny Jetpack logo with the product name on the left and the Automattic Airline "by line" on the right.
 *
 * @param {object} props - Component properties.
 * @returns {React.Component} JetpackFooter component.
 */

const JetpackFooter = props => {
  const {
    a8cLogoHref,
    moduleName,
    className,
    ...otherProps
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", _home_runner_work_jetpack_jetpack_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_extends_js__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('jp-dashboard-footer', className)
  }, otherProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "jp-dashboard-footer__footer-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_jetpack_logo__WEBPACK_IMPORTED_MODULE_6__["default"], {
    logoColor: "#000",
    showText: false,
    height: 16,
    className: "jp-dashboard-footer__jetpack-symbol",
    "aria-label": __('Jetpack logo', 'jetpack')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "jp-dashboard-footer__module-name"
  }, moduleName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "jp-dashboard-footer__footer-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
    href: a8cLogoHref,
    "aria-label": __('An Automattic Airline', 'jetpack')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_automattic_byline_logo__WEBPACK_IMPORTED_MODULE_7__["default"], null))));
};

JetpackFooter.defaultProps = {
  a8cLogoHref: 'https://jetpack.com',
  moduleName: __('Jetpack', 'jetpack'),
  className: ''
};
JetpackFooter.propTypes = {
  /** Link for 'An Automattic Airline'. */
  a8cLogoHref: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),

  /** Name of the module, e.g. 'Jetpack Search'. */
  moduleName: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),

  /** additional className of the wrapper, `jp-dashboard-footer` always included. */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JetpackFooter);

/***/ }),

/***/ "../../js-packages/components/components/jetpack-logo/index.jsx":
/*!**********************************************************************!*\
  !*** ../../js-packages/components/components/jetpack-logo/index.jsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_runner_work_jetpack_jetpack_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_extends_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/extends.js */ "../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _home_runner_work_jetpack_jetpack_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_extends_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_jetpack_jetpack_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_extends_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_jetpack_jetpack_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/defineProperty.js */ "../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _home_runner_work_jetpack_jetpack_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_jetpack_jetpack_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../../../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);



/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */


const __ = _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__;

class JetpackLogo extends (react__WEBPACK_IMPORTED_MODULE_3___default().Component) {
  render() {
    const {
      logoColor,
      showText,
      className,
      ...otherProps
    } = this.props;
    const viewBox = showText ? '0 0 118 32' : '0 0 32 32';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("svg", _home_runner_work_jetpack_jetpack_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_extends_js__WEBPACK_IMPORTED_MODULE_0___default()({
      xmlns: "http://www.w3.org/2000/svg",
      x: "0px",
      y: "0px",
      viewBox: viewBox,
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('jetpack-logo', className),
      "aria-labelledby": "jetpack-logo-title"
    }, otherProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("title", {
      id: "jetpack-logo-title"
    }, __('Jetpack Logo', 'jetpack')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("path", {
      fill: logoColor,
      d: "M16,0C7.2,0,0,7.2,0,16s7.2,16,16,16s16-7.2,16-16S24.8,0,16,0z M15,19H7l8-16V19z M17,29V13h8L17,29z"
    }), showText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("path", {
      d: "M41.3,26.6c-0.5-0.7-0.9-1.4-1.3-2.1c2.3-1.4,3-2.5,3-4.6V8h-3V6h6v13.4C46,22.8,45,24.8,41.3,26.6z"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("path", {
      d: "M65,18.4c0,1.1,0.8,1.3,1.4,1.3c0.5,0,2-0.2,2.6-0.4v2.1c-0.9,0.3-2.5,0.5-3.7,0.5c-1.5,0-3.2-0.5-3.2-3.1V12H60v-2h2.1V7.1 H65V10h4v2h-4V18.4z"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("path", {
      d: "M71,10h3v1.3c1.1-0.8,1.9-1.3,3.3-1.3c2.5,0,4.5,1.8,4.5,5.6s-2.2,6.3-5.8,6.3c-0.9,0-1.3-0.1-2-0.3V28h-3V10z M76.5,12.3 c-0.8,0-1.6,0.4-2.5,1.2v5.9c0.6,0.1,0.9,0.2,1.8,0.2c2,0,3.2-1.3,3.2-3.9C79,13.4,78.1,12.3,76.5,12.3z"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("path", {
      d: "M93,22h-3v-1.5c-0.9,0.7-1.9,1.5-3.5,1.5c-1.5,0-3.1-1.1-3.1-3.2c0-2.9,2.5-3.4,4.2-3.7l2.4-0.3v-0.3c0-1.5-0.5-2.3-2-2.3 c-0.7,0-2.3,0.5-3.7,1.1L84,11c1.2-0.4,3-1,4.4-1c2.7,0,4.6,1.4,4.6,4.7L93,22z M90,16.4l-2.2,0.4c-0.7,0.1-1.4,0.5-1.4,1.6 c0,0.9,0.5,1.4,1.3,1.4s1.5-0.5,2.3-1V16.4z"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("path", {
      d: "M104.5,21.3c-1.1,0.4-2.2,0.6-3.5,0.6c-4.2,0-5.9-2.4-5.9-5.9c0-3.7,2.3-6,6.1-6c1.4,0,2.3,0.2,3.2,0.5V13 c-0.8-0.3-2-0.6-3.2-0.6c-1.7,0-3.2,0.9-3.2,3.6c0,2.9,1.5,3.8,3.3,3.8c0.9,0,1.9-0.2,3.2-0.7V21.3z"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("path", {
      d: "M110,15.2c0.2-0.3,0.2-0.8,3.8-5.2h3.7l-4.6,5.7l5,6.3h-3.7l-4.2-5.8V22h-3V6h3V15.2z"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("path", {
      d: "M58.5,21.3c-1.5,0.5-2.7,0.6-4.2,0.6c-3.6,0-5.8-1.8-5.8-6c0-3.1,1.9-5.9,5.5-5.9s4.9,2.5,4.9,4.9c0,0.8,0,1.5-0.1,2h-7.3 c0.1,2.5,1.5,2.8,3.6,2.8c1.1,0,2.2-0.3,3.4-0.7C58.5,19,58.5,21.3,58.5,21.3z M56,15c0-1.4-0.5-2.9-2-2.9c-1.4,0-2.3,1.3-2.4,2.9 C51.6,15,56,15,56,15z"
    })));
  }

}

_home_runner_work_jetpack_jetpack_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(JetpackLogo, "propTypes", {
  className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  width: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
  height: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
  showText: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  logoColor: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
});

_home_runner_work_jetpack_jetpack_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(JetpackLogo, "defaultProps", {
  className: '',
  height: 32,
  showText: true,
  logoColor: '#069e08'
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JetpackLogo);

/***/ }),

/***/ "../../js-packages/components/components/layout/col/index.jsx":
/*!********************************************************************!*\
  !*** ../../js-packages/components/components/layout/col/index.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../../../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.module.scss */ "../../js-packages/components/components/layout/col/style.module.scss");
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */


/**
 * The basic Col component.
 *
 * @param {object} props - Component properties.
 * @returns {React.Component} Col component.
 */

const Col = props => {
  const {
    children,
    sm,
    md,
    lg
  } = props;
  const small = Number.isInteger(sm) ? sm : 0;
  const medium = Number.isInteger(md) ? md : 0;
  const large = Number.isInteger(lg) ? lg : 0;
  const minimum = [small, medium, large].reduce((prev, curr) => curr > 0 && curr < prev ? curr : prev);
  const className = classnames__WEBPACK_IMPORTED_MODULE_1___default()(small > 0 ? _style_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]['sm-col-span-' + small] : _style_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]['sm-col-span-' + minimum], medium > 0 ? _style_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]['md-col-span-' + medium] : _style_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]['md-col-span-' + minimum], large > 0 ? _style_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]['lg-col-span-' + large] : _style_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]['lg-col-span-' + minimum]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: className
  }, children);
};

Col.proptypes = {
  /** Colspan for small viewport. Needs to be an integer. Defaults to the smallest colspan informed. */
  sm: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),

  /** Colspan for medium viewport. Needs to be an integer. Defaults to the smallest colspan informed. */
  md: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),

  /** Colspan for large viewport. Needs to be an integer. Defaults to the smallest colspan informed. */
  lg: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Col);

/***/ }),

/***/ "../../js-packages/components/components/layout/container/index.jsx":
/*!**************************************************************************!*\
  !*** ../../js-packages/components/components/layout/container/index.jsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.module.scss */ "../../js-packages/components/components/layout/container/style.module.scss");
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


/**
 * JP Container
 *
 * @param {object} props - Component properties.
 * @returns {React.Component} Container component.
 */

const Container = props => {
  const {
    children
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _style_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"]["jp-container"]
  }, children);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);

/***/ }),

/***/ "../../js-packages/components/components/layout/row/index.jsx":
/*!********************************************************************!*\
  !*** ../../js-packages/components/components/layout/row/index.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.module.scss */ "../../js-packages/components/components/layout/row/style.module.scss");
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


/**
 * JP Row
 *
 * @param {object} props - Component properties.
 * @returns {React.Component} Row component.
 */

const Row = props => {
  const {
    children
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _style_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"]["jp-row"]
  }, children);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Row);

/***/ }),

/***/ "../../js-packages/components/tools/jp-redirect/index.jsx":
/*!****************************************************************!*\
  !*** ../../js-packages/components/tools/jp-redirect/index.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getRedirectUrl)
/* harmony export */ });
/* global jetpack_redirects */

/**
 * Builds an URL using the jetpack.com/redirect/ service
 *
 * If source is a simple slug, it will be sent using the source query parameter. e.g. jetpack.com/redirect/?source=slug
 *
 * If source is a full URL, starting with https://, it will be sent using the url query parameter. e.g. jetpack.com/redirect/?url=https://wordpress.com
 *
 * Note: if using full URL, query parameters and anchor must be passed in args. Any querystring of url fragment in the URL will be discarded.
 *
 * @since 0.2.0
 * @param {string} source - The URL handler registered in the server or the full destination URL (starting with https://).
 * @param {object} args - Additional arguments to build the url.  This is not a complete list as any argument passed here will be sent to as a query parameter to the Redirect server. These parameters will not necessarily be passed over to the final destination URL. If you want to add a parameter to the final destination URL, use the `query` argument.
 * @param {string} args.site - URL of the current site. Will default to the value of jetpack_redirects.currentSiteRawUrl, if available. Used to fill in the `[site]` placeholder in the target.
 * @param {string} args.path - Additional path to be appended to the URL. Used to fill in the `[path]` placeholder in the target.
 * @param {string} args.query - Query parameters to be added to the final destination URL. should be in query string format (e.g. 'key=value&foo=bar').
 * @param {string} args.anchor - Anchor to be added to the URL. Must be a single string. Example: `section1`.
 * @returns {string} The redirect URL
 */
function getRedirectUrl(source) {
  let args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const queryVars = {};
  let calypsoEnv;

  if (typeof window !== 'undefined') {
    var _window$Initial_State;

    calypsoEnv = (_window$Initial_State = window.Initial_State) === null || _window$Initial_State === void 0 ? void 0 : _window$Initial_State.calypsoEnv;
  }

  if (source.search('https://') === 0) {
    const parsedUrl = new URL(source); // discard any query and fragments.

    source = `https://${parsedUrl.host}${parsedUrl.pathname}`;
    queryVars.url = encodeURIComponent(source);
  } else {
    queryVars.source = encodeURIComponent(source);
  }

  Object.keys(args).map(argName => {
    queryVars[argName] = encodeURIComponent(args[argName]);
  });

  if (!Object.keys(queryVars).includes('site') && typeof jetpack_redirects !== 'undefined' && jetpack_redirects.hasOwnProperty('currentSiteRawUrl')) {
    queryVars.site = jetpack_redirects.currentSiteRawUrl;
  }

  if (calypsoEnv) {
    queryVars.calypso_env = calypsoEnv;
  }

  const queryString = Object.keys(queryVars).map(key => key + '=' + queryVars[key]).join('&');
  return `https://jetpack.com/redirect/?` + queryString;
}

/***/ }),

/***/ "../../js-packages/config/src/index.js":
/*!*********************************************!*\
  !*** ../../js-packages/config/src/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable no-console */
let jetpackConfig = {};

try {
  // Using require allows us to catch the error and provide guidance to developers, as well as test the package.
  jetpackConfig = __webpack_require__(/*! jetpackConfig */ "jetpackConfig");
} catch {
  console.error('jetpackConfig is missing in your webpack config file. See @automattic/jetpack-config');
  jetpackConfig = {
    missingConfig: true
  };
}

const jetpackConfigHas = key => {
  return jetpackConfig.hasOwnProperty(key);
};

const jetpackConfigGet = key => {
  if (!jetpackConfigHas(key)) {
    throw 'This app requires the "' + key + '" Jetpack Config to be defined in your webpack configuration file. See details in @automattic/jetpack-config package docs.';
  }

  return jetpackConfig[key];
}; // Note: For this cjs module to be used with named exports in an mjs context, modules.exports
// needs to contain only simple variables like `a` or `a: b`. Define anything more complex
// as a variable above, then use the variable here.
// @see https://github.com/nodejs/node/blob/master/deps/cjs-module-lexer/README.md#exports-object-assignment


module.exports = {
  jetpackConfigHas,
  jetpackConfigGet
};

/***/ }),

/***/ "../../js-packages/connection/components/connect-user/index.jsx":
/*!**********************************************************************!*\
  !*** ../../js-packages/connection/components/connect-user/index.jsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../../../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _automattic_jetpack_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @automattic/jetpack-api */ "../../js-packages/api/index.jsx");
/**
 * External dependencies
 */



/**
 * The user connection component.
 *
 * @param {object} props -- The properties.
 * @param {Function} props.redirectFunc -- The redirect function (`window.location.assign()` by default).
 * @param {string} props.connectUrl -- The authorization URL (no-iframe).
 * @param {string} props.redirectUri -- The redirect admin URI.
 * @param {string} props.from -- Where the connection request is coming from.
 * @returns {null} -- Nothing to return.
 */

const ConnectUser = props => {
  const {
    redirectFunc,
    connectUrl,
    redirectUri,
    from
  } = props;
  const [authorizationUrl, setAuthorizationUrl] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);

  if (connectUrl && connectUrl !== authorizationUrl) {
    setAuthorizationUrl(connectUrl);
  }
  /**
   * Fetch the authorization URL on the first render.
   * To be only run once.
   */


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!authorizationUrl) {
      _automattic_jetpack_api__WEBPACK_IMPORTED_MODULE_2__["default"].fetchAuthorizationUrl(redirectUri).then(response => setAuthorizationUrl(response.authorizeUrl)).catch(error => {
        throw error;
      });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!authorizationUrl) {
    return null;
  }

  redirectFunc(authorizationUrl + (from ? (authorizationUrl.includes('?') ? '&' : '?') + 'from=' + encodeURIComponent(from) : ''));
  return null;
};

ConnectUser.propTypes = {
  connectUrl: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  redirectUri: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  from: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  redirectFunc: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
ConnectUser.defaultProps = {
  redirectFunc: url => window.location.assign(url),
  redirectUri: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConnectUser);

/***/ }),

/***/ "../../js-packages/connection/components/connected-plugins/index.jsx":
/*!***************************************************************************!*\
  !*** ../../js-packages/connection/components/connected-plugins/index.jsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../../../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _disconnect_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../disconnect-card */ "../../js-packages/connection/components/disconnect-card/index.jsx");
/**
 * External Dependencies
 */



/**
 * Internal Dependencies
 */

const __ = _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__;

/**
 * Render a list of connected plugins.
 *
 * @param {object} props - The properties
 * @returns {React.Component} - The ConnectedPlugins React component
 */

const ConnectedPlugins = props => {
  const {
    connectedPlugins,
    disconnectingPlugin
  } = props;
  /**
   * Add a slug property to each ConnectedPlugins object so they can be converted to an array.
   * This allows the connected plugins to be iterated over more easily for display.
   */

  const connectedPluginsArray = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (connectedPlugins) {
      const keys = Object.keys(connectedPlugins);
      return keys.map(key => {
        return Object.assign({
          slug: key
        }, connectedPlugins[key]);
      }).filter(plugin => {
        return disconnectingPlugin !== plugin.slug;
      });
    } // No connected plugins.


    return [];
  }, [connectedPlugins, disconnectingPlugin]);

  if (connectedPlugins && connectedPluginsArray.length > 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "jp-connection__disconnect-dialog__step-copy"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "jp-connection__disconnect-dialog__large-text"
    }, __('Jetpack is powering other plugins on your site. If you disconnect, these plugins will no longer work.', 'jetpack'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "jp-connection__disconnect-card__group"
    }, connectedPluginsArray.map(plugin => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_disconnect_card__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: plugin.name
      });
    })));
  } // Default to null if there are no connected plugins passed on the props


  return null;
};

ConnectedPlugins.PropTypes = {
  /** Plugins that are using the Jetpack connection. */
  connectedPlugins: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),

  /** Slug of the plugin that has initiated the disconnect. */
  disconnectingPlugin: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConnectedPlugins);

/***/ }),

/***/ "../../js-packages/connection/components/connection-status-card/index.jsx":
/*!********************************************************************************!*\
  !*** ../../js-packages/connection/components/connection-status-card/index.jsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "../../../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _automattic_jetpack_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @automattic/jetpack-api */ "../../js-packages/api/index.jsx");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _connect_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../connect-user */ "../../js-packages/connection/components/connect-user/index.jsx");
/* harmony import */ var _disconnect_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../disconnect-dialog */ "../../js-packages/connection/components/disconnect-dialog/index.jsx");
/* harmony import */ var _state_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../state/store */ "../../js-packages/connection/state/store.jsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ "../../js-packages/connection/components/connection-status-card/style.scss");
/**
 * External dependencies
 */


const __ = _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__;




/**
 * Internal dependencies
 */





/**
 * The RNA Connection Status Card component.
 *
 * @param {object}   props -- The properties.
 * @returns {React.Component} The `ConnectionStatusCard` component.
 */

const ConnectionStatusCard = props => {
  const {
    apiRoot,
    apiNonce,
    isRegistered,
    isUserConnected,
    redirectUri,
    title,
    connectionInfoText,
    onDisconnected,
    connectedPlugins,
    connectedSiteId,
    context
  } = props;
  const [isFetchingConnectionData, setIsFetchingConnectionData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [connectedUserData, setConnectedUserData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [isDisconnectDialogOpen, setIsDisconnectDialogOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const userIsConnecting = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => select(_state_store__WEBPACK_IMPORTED_MODULE_7__.STORE_ID).getUserIsConnecting(), []);
  const {
    setConnectionStatus,
    setUserIsConnecting
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useDispatch)(_state_store__WEBPACK_IMPORTED_MODULE_7__.STORE_ID);
  const avatarRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  /**
   * Initialize the REST API.
   */

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    _automattic_jetpack_api__WEBPACK_IMPORTED_MODULE_4__["default"].setApiRoot(apiRoot);
    _automattic_jetpack_api__WEBPACK_IMPORTED_MODULE_4__["default"].setApiNonce(apiNonce);
  }, [apiRoot, apiNonce]);
  /**
   * Fetch the connection data on the first render.
   * To be only run once.
   */

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIsFetchingConnectionData(true);
    _automattic_jetpack_api__WEBPACK_IMPORTED_MODULE_4__["default"].fetchSiteConnectionData().then(response => {
      var _response$currentUser, _response$currentUser2, _response$currentUser3;

      setIsFetchingConnectionData(false);
      setConnectedUserData((_response$currentUser = response.currentUser) === null || _response$currentUser === void 0 ? void 0 : _response$currentUser.wpcomUser);
      const avatar = (_response$currentUser2 = response.currentUser) === null || _response$currentUser2 === void 0 ? void 0 : (_response$currentUser3 = _response$currentUser2.wpcomUser) === null || _response$currentUser3 === void 0 ? void 0 : _response$currentUser3.avatar;

      if (avatar) {
        avatarRef.current.style.backgroundImage = `url('${avatar}')`;
      }
    }).catch(error => {
      setIsFetchingConnectionData(false);
      throw error;
    });
  }, [setIsFetchingConnectionData, setConnectedUserData]);
  /**
   * Open the Disconnect Dialog.
   */

  const openDisconnectDialog = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    e && e.preventDefault();
    setIsDisconnectDialogOpen(true);
  }, [setIsDisconnectDialogOpen]);
  /**
   * Close the Disconnect Dialog.
   */

  const closeDisconnectDialog = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    e && e.preventDefault();
    setIsDisconnectDialogOpen(false);
  }, [setIsDisconnectDialogOpen]);
  const onDisconnectedCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    e && e.preventDefault();
    setConnectionStatus({
      isActive: false,
      isRegistered: false,
      isUserConnected: false
    });

    if (onDisconnected && {}.toString.call(onDisconnected) === '[object Function]') {
      onDisconnected();
    }
  }, [onDisconnected, setConnectionStatus]); // Prevent component from rendering if site is not connected.

  if (!isRegistered) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "jp-connection-status-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, connectionInfoText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "jp-connection-status-card--status"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "jp-connection-status-card--cloud"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'jp-connection-status-card--line' + (isUserConnected ? '' : ' jp-connection-status-card--site-only')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "jp-connection-status-card--jetpack-logo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "jp-connection-status-card--avatar",
    ref: avatarRef
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "jp-connection-status-card--list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "jp-connection-status-card--list-item-success"
  }, __('Site connected.', 'jetpack'), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "link",
    onClick: openDisconnectDialog,
    className: "jp-connection__disconnect-dialog__link"
  }, __('Disconnect', 'jetpack')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_disconnect_dialog__WEBPACK_IMPORTED_MODULE_8__["default"], {
    apiRoot: apiRoot,
    apiNonce: apiNonce,
    onDisconnected: onDisconnectedCallback,
    connectedPlugins: connectedPlugins,
    connectedSiteId: connectedSiteId,
    connectedUser: connectedUserData,
    isOpen: isDisconnectDialogOpen,
    onClose: closeDisconnectDialog,
    context: context
  })), isUserConnected && !isFetchingConnectionData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "jp-connection-status-card--list-item-success"
  }, __('Logged in as', 'jetpack'), " ", connectedUserData === null || connectedUserData === void 0 ? void 0 : connectedUserData.display_name), !isUserConnected && !isFetchingConnectionData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "jp-connection-status-card--list-item-error"
  }, __('Your WordPress.com account is not connected.', 'jetpack'))), !isUserConnected && !isFetchingConnectionData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    isPrimary: true,
    disabled: userIsConnecting,
    onClick: setUserIsConnecting,
    className: "jp-connection-status-card--btn-connect-user"
  }, __('Connect your WordPress.com account', 'jetpack')), userIsConnecting && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_connect_user__WEBPACK_IMPORTED_MODULE_9__["default"], {
    redirectUri: redirectUri
  }));
};

ConnectionStatusCard.propTypes = {
  /** API root URL, required. */
  apiRoot: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired),

  /** API Nonce, required. */
  apiNonce: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired),

  /** Whether a site level connection has already been established, required. If not, the component will not render. */
  isRegistered: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool.isRequired),

  /** Whether the current user has connected their WordPress.com account, required. */
  isUserConnected: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool.isRequired),

  /** The redirect admin URI after the user has connected their WordPress.com account. */
  redirectUri: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired),

  /** An object of the plugins currently using the Jetpack connection. */
  connectedPlugins: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /** ID of the currently connected site. */
  connectedSiteId: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),

  /** The Card title. */
  title: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /** The text that will be displayed under the title, containing info how to leverage the connection. */
  connectionInfoText: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /** The callback to be called upon disconnection success. */
  onDisconnected: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /** The context in which this component is being used */
  context: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
};
ConnectionStatusCard.defaultProps = {
  title: __('Connection', 'jetpack'),
  connectionInfoText: __('Leverages the Jetpack Cloud for more features on your side.', 'jetpack')
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConnectionStatusCard);

/***/ }),

/***/ "../../js-packages/connection/components/disconnect-card/index.jsx":
/*!*************************************************************************!*\
  !*** ../../js-packages/connection/components/disconnect-card/index.jsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../../../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "../../js-packages/connection/components/disconnect-card/style.scss");
/**
 * External Dependencies
 */


/**
 * Internal Dependencies
 */


/**
 * Show a card with a title, value and description.
 * Used in the disconnection flow.
 *
 * @param {object} props - The Properties.
 * @returns {React.Component} DisconnectCard - The disconnect card component.
 */

const DisconnectCard = props => {
  const {
    title,
    value,
    description
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "jp-connection__disconnect-card card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "jp-connection__disconnect-card__card-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "jp-connection__disconnect-card__card-headline"
  }, title), (value || description) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "jp-connection__disconnect-card__card-stat-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "jp-connection__disconnect-card__card-stat"
  }, value), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "jp-connection__disconnect-card__card-description"
  }, description))));
};

DisconnectCard.propTypes = {
  /** The title to show on the disconnect card. */
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),

  /** Optional value/ statistic to show. */
  value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string) | (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),

  /** Description to go with the stat value. */
  description: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisconnectCard);

/***/ }),

/***/ "../../js-packages/connection/components/disconnect-dialog/index.jsx":
/*!***************************************************************************!*\
  !*** ../../js-packages/connection/components/disconnect-dialog/index.jsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../../../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _automattic_jetpack_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @automattic/jetpack-api */ "../../js-packages/api/index.jsx");
/* harmony import */ var _automattic_jetpack_analytics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @automattic/jetpack-analytics */ "../../js-packages/analytics/index.jsx");
/* harmony import */ var _automattic_jetpack_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @automattic/jetpack-config */ "../../js-packages/config/src/index.js");
/* harmony import */ var _automattic_jetpack_config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_automattic_jetpack_config__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.scss */ "../../js-packages/connection/components/disconnect-dialog/style.scss");
/* harmony import */ var _steps_step_disconnect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./steps/step-disconnect */ "../../js-packages/connection/components/disconnect-dialog/steps/step-disconnect.jsx");
/* harmony import */ var _steps_step_disconnect_confirm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./steps/step-disconnect-confirm */ "../../js-packages/connection/components/disconnect-dialog/steps/step-disconnect-confirm.jsx");
/* harmony import */ var _steps_step_survey__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./steps/step-survey */ "../../js-packages/connection/components/disconnect-dialog/steps/step-survey.jsx");
/* harmony import */ var _steps_step_thank_you__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./steps/step-thank-you */ "../../js-packages/connection/components/disconnect-dialog/steps/step-thank-you.jsx");
/**
 * External dependencies
 */



const __ = _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__;




/**
 * Internal dependencies
 */






/**
 * The RNA Disconnect Dialog component.
 *
 * @param {object} props -- The properties.
 * @returns {React.Component} The `DisconnectDialog` component.
 */

const DisconnectDialog = props => {
  const [isDisconnecting, setIsDisconnecting] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isDisconnected, setIsDisconnected] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [disconnectError, setDisconnectError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isProvidingFeedback, setIsProvidingFeedback] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isFeedbackProvided, setIsFeedbackProvided] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isSubmittingFeedback, setIsSubmittingFeedback] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    apiRoot,
    apiNonce,
    connectedPlugins,
    title,
    pluginScreenDisconnectCallback,
    onDisconnected,
    onError,
    disconnectStepComponent,
    context,
    connectedUser,
    connectedSiteId,
    isOpen,
    onClose
  } = props;
  let disconnectingPlugin = '';

  if ((0,_automattic_jetpack_config__WEBPACK_IMPORTED_MODULE_6__.jetpackConfigHas)('consumer_slug')) {
    disconnectingPlugin = (0,_automattic_jetpack_config__WEBPACK_IMPORTED_MODULE_6__.jetpackConfigGet)('consumer_slug');
  }

  const defaultTracksArgs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return {
      context: context,
      plugin: disconnectingPlugin
    };
  }, [context, disconnectingPlugin]);
  /**
   * Initialize the REST API.
   */

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    _automattic_jetpack_api__WEBPACK_IMPORTED_MODULE_4__["default"].setApiRoot(apiRoot);
    _automattic_jetpack_api__WEBPACK_IMPORTED_MODULE_4__["default"].setApiNonce(apiNonce);
  }, [apiRoot, apiNonce]);
  /**
   * Initialize tracks with user data.
   * Should run when we have a connected user.
   */

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (connectedUser && connectedUser.ID && connectedUser.login) {
      _automattic_jetpack_analytics__WEBPACK_IMPORTED_MODULE_5__["default"].initialize(connectedUser.ID, connectedUser.login);
    }
  }, [connectedUser, connectedUser.ID, connectedUser.login]);
  /**
   * Run when the disconnect dialog is opened
   */

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isOpen) {
      _automattic_jetpack_analytics__WEBPACK_IMPORTED_MODULE_5__["default"].tracks.recordEvent('jetpack_disconnect_dialog_open', defaultTracksArgs);
    }
  }, [isOpen, defaultTracksArgs]);
  /**
   * Keep track of the steps that are presented
   */

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Don't do anything if the dialog is not open.
    if (!isOpen) {
      return;
    }

    if (!isDisconnected) {
      _automattic_jetpack_analytics__WEBPACK_IMPORTED_MODULE_5__["default"].tracks.recordEvent('jetpack_disconnect_dialog_step', Object.assign({}, {
        step: 'disconnect'
      }, defaultTracksArgs));
    } else if (isDisconnected && !isProvidingFeedback && !isFeedbackProvided) {
      _automattic_jetpack_analytics__WEBPACK_IMPORTED_MODULE_5__["default"].tracks.recordEvent('jetpack_disconnect_dialog_step', Object.assign({}, {
        step: 'disconnect_confirm'
      }, defaultTracksArgs));
    } else if (isProvidingFeedback && !isFeedbackProvided) {
      _automattic_jetpack_analytics__WEBPACK_IMPORTED_MODULE_5__["default"].tracks.recordEvent('jetpack_disconnect_dialog_step', Object.assign({}, {
        step: 'survey'
      }, defaultTracksArgs));
    } else if (isFeedbackProvided) {
      _automattic_jetpack_analytics__WEBPACK_IMPORTED_MODULE_5__["default"].tracks.recordEvent('jetpack_disconnect_dialog_step', Object.assign({}, {
        step: 'thank_you'
      }, defaultTracksArgs));
    }
  }, [isOpen, isDisconnected, isProvidingFeedback, isFeedbackProvided, defaultTracksArgs]);
  /**
   * Disconnect the site.
   * Uses the rest API to remove the Jetpack connection.
   */

  const _disconnect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    _automattic_jetpack_api__WEBPACK_IMPORTED_MODULE_4__["default"].disconnectSite().then(() => {
      setIsDisconnecting(false);
      setIsDisconnected(true);
    }).catch(error => {
      setIsDisconnecting(false);
      setDisconnectError(error);

      if (onError) {
        onError(error);
      }
    });
  }, [setIsDisconnecting, setIsDisconnected, setDisconnectError, onError]);
  /**
   * Submit the optional survey following disconnection.
   */


  const _submitSurvey = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((surveyData, tracksSurveyData) => {
    // Send survey response to wpcom
    const base = 'https://public-api.wordpress.com';
    const path = '/wpcom/v2/marketing/feedback-survey';
    const method = 'POST';
    setIsSubmittingFeedback(true); // We cannot use `@wordpress/api-fetch` here since it unconditionally sends
    // the `X-WP-Nonce` header, which is disallowed by WordPress.com.
    // If the submission receives an error, there's not really anything the user is able to do to fix it.
    // In these cases, just go ahead and show the last survey step.

    fetch(base + path, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(surveyData)
    }).then(result => result.json()).then(jsonResponse => {
      // response received
      if (true === jsonResponse.success) {
        // Send a tracks event for survey submission.
        _automattic_jetpack_analytics__WEBPACK_IMPORTED_MODULE_5__["default"].tracks.recordEvent('jetpack_disconnect_survey_submit', tracksSurveyData);
        setIsFeedbackProvided(true);
        setIsSubmittingFeedback(false);
      } else {
        throw new Error('Survey endpoint returned error code ' + jsonResponse.code);
      }
    }).catch(error => {
      _automattic_jetpack_analytics__WEBPACK_IMPORTED_MODULE_5__["default"].tracks.recordEvent('jetpack_disconnect_survey_error', Object.assign({}, {
        error: error.message
      }, tracksSurveyData));
      setIsFeedbackProvided(true);
      setIsSubmittingFeedback(false);
    });
  }, [setIsSubmittingFeedback, setIsFeedbackProvided]);
  /**
   * Disconnect - Triggered upon clicking the 'Disconnect' button.
   */


  const handleDisconnect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    e && e.preventDefault();
    setDisconnectError(false);
    setIsDisconnecting(true); // Detect the plugin context, where the plugin needs to be deactivated.

    if (context === 'plugins') {
      // Use a callback function to handle deactivating the plugin.
      // This should effectively short-circuit the disconnect flow by redirecting to deactivate the plugin.
      if (pluginScreenDisconnectCallback) {
        pluginScreenDisconnectCallback(e);
      } // Do not disconnect if context is the plugin screen, the plugin deactivation routine will handle disconnection.


      return;
    } // Default to making the disconnect API call here.


    _disconnect();
  }, [setDisconnectError, setIsDisconnecting, pluginScreenDisconnectCallback, context, _disconnect]);
  /**
   * Do we have the necessary data to be able to submit a survey?
   * Need to have the ID of the connected user and the ID of the connected site.
   */

  const canProvideFeedback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    return connectedUser.ID && connectedSiteId;
  }, [connectedUser, connectedSiteId]);
  /**
   * Submit Survey - triggered by clicking on the "Submit Feedback" button.
   * Assembles the survey response.
   */

  const handleSubmitSurvey = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((surveyAnswerId, surveyAnswerText, e) => {
    e && e.preventDefault(); // We do not have the information needed to record the response.
    // return early and move to the last step in the flow anyway.

    if (!canProvideFeedback()) {
      setIsFeedbackProvided(true);
      return;
    } // Format the survey data for submission.


    const surveyData = {
      site_id: connectedSiteId,
      user_id: connectedUser.ID,
      survey_id: 'jetpack-plugin-disconnect',
      survey_responses: {
        'why-cancel': {
          response: surveyAnswerId,
          text: surveyAnswerText ? surveyAnswerText : null
        }
      }
    }; // Additional data for analytics to see where disconnections happened from.

    const tracksSurveyData = Object.assign({}, defaultTracksArgs, {
      disconnect_reason: surveyAnswerId
    });

    _submitSurvey(surveyData, tracksSurveyData);
  }, [_submitSurvey, setIsFeedbackProvided, canProvideFeedback, connectedSiteId, connectedUser, defaultTracksArgs]);
  /**
   * Close modal and fire 'onDisconnected' callback if exists.
   * Triggered upon clicking the 'Back To WordPress' button.
   */

  const backToWordpress = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    e && e.preventDefault();

    if (onDisconnected) {
      onDisconnected();
    }

    onClose();
  }, [onDisconnected, onClose]);
  /**
   * Update the local state to show the survey step.
   */

  const handleProvideFeedback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    e && e.preventDefault();
    setIsProvidingFeedback(true);
  }, [setIsProvidingFeedback]);
  /**
   * Determine what step to show based on the current state
   *
   * @returns { React.Component } - component for current step
   */

  const getCurrentStep = () => {
    if (!isDisconnected) {
      // Disconnection screen.
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_steps_step_disconnect__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: title,
        connectedPlugins: connectedPlugins // Component that renders as part of the disconnect step, if passed.
        ,
        disconnectStepComponent: disconnectStepComponent,
        isDisconnecting: isDisconnecting,
        closeModal: onClose,
        onDisconnect: handleDisconnect,
        disconnectError: disconnectError,
        context: context // Where is the modal showing? ( most important for when it loads on the plugins page )
        ,
        disconnectingPlugin: disconnectingPlugin // Which plugin is initiating the disconnect.

      });
    } else if (isDisconnected && !isProvidingFeedback && !isFeedbackProvided) {
      // Confirm the disconnection, ask user about providing feedback.
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_steps_step_disconnect_confirm__WEBPACK_IMPORTED_MODULE_9__["default"], {
        canProvideFeedback: canProvideFeedback(),
        onProvideFeedback: handleProvideFeedback,
        onExit: backToWordpress
      });
    } else if (isProvidingFeedback && !isFeedbackProvided) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_steps_step_survey__WEBPACK_IMPORTED_MODULE_10__["default"], {
        isSubmittingFeedback: isSubmittingFeedback,
        onFeedBackProvided: handleSubmitSurvey,
        onExit: backToWordpress
      });
    } else if (isFeedbackProvided) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_steps_step_thank_you__WEBPACK_IMPORTED_MODULE_11__["default"], {
        onExit: backToWordpress
      });
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, isOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Modal, {
    title: "",
    contentLabel: title,
    aria: {
      labelledby: 'jp-connection__disconnect-dialog__heading'
    },
    onRequestClose: onClose,
    shouldCloseOnClickOutside: false,
    shouldCloseOnEsc: false,
    isDismissible: false,
    className: 'jp-connection__disconnect-dialog' + (isDisconnected ? ' jp-connection__disconnect-dialog__success' : '')
  }, getCurrentStep()));
};

DisconnectDialog.propTypes = {
  /** API root URL, required. */
  apiRoot: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),

  /** API Nonce, required. */
  apiNonce: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),

  /** The modal title. */
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),

  /** The callback to be called upon disconnection success. */
  onDisconnected: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),

  /** The callback to be called upon disconnection failure. */
  onError: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),

  /** The context in which this component is being used. */
  context: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),

  /** Plugins that are using the Jetpack connection. */
  connectedPlugins: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),

  /** Callback function that is called just before the request to disconnect is made when the context is "plugins". */
  pluginScreenDisconnectCallback: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),

  /** A component to render as part of the disconnect step. */
  disconnectStepComponent: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element),

  /** An object representing the connected user. */
  connectedUser: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),

  /** ID of the currently connected site. */
  connectedSiteId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),

  /** Whether or not the dialog modal should be open. */
  isOpen: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),

  /** Callback function for when the modal closes. */
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
DisconnectDialog.defaultProps = {
  title: __('Are you sure you want to disconnect?', 'jetpack'),
  context: 'jetpack-dashboard',
  connectedUser: {} // Pass empty object to avoid undefined errors.

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisconnectDialog);

/***/ }),

/***/ "../../js-packages/connection/components/disconnect-dialog/steps/step-disconnect-confirm.jsx":
/*!***************************************************************************************************!*\
  !*** ../../js-packages/connection/components/disconnect-dialog/steps/step-disconnect-confirm.jsx ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../../../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _automattic_jetpack_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @automattic/jetpack-components */ "../../js-packages/components/components/decorative-card/index.jsx");
/* harmony import */ var _images_disconnect_confirm_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/disconnect-confirm.jpg */ "../../js-packages/connection/components/disconnect-dialog/images/disconnect-confirm.jpg");
/**
 * External Dependencies
 */


/**
 * Internal Dependencies
 */



const __ = _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__;



/**
 * Shows the step that confirms the site has been disconnected, asks if user would like to provide feedback.
 * Will only show option to provide feedback if the canProvideFeedback prop is true.
 *
 * @param {object} props - The properties.
 * @returns {React.Component} - StepDisconnectConfirm Component
 */

const StepDisconnectConfirm = props => {
  const {
    onExit,
    canProvideFeedback,
    onProvideFeedback
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "jp-connection__disconnect-dialog__content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_automattic_jetpack_components__WEBPACK_IMPORTED_MODULE_5__["default"], {
    icon: "unlink",
    imageUrl: _images_disconnect_confirm_jpg__WEBPACK_IMPORTED_MODULE_6__
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "jp-connection__disconnect-dialog__step-copy jp-connection__disconnect-dialog__step-copy--narrow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createInterpolateElement)(__('Jetpack has been <br/>successfully disconnected.', 'jetpack'), {
    br: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null)
  })), canProvideFeedback && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, __('We’re sorry to see you go. Here at Jetpack, we’re always striving to provide the best experience for our customers. Please take our short survey (2 minutes, promise).', 'jetpack')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    isPrimary: true,
    onClick: onProvideFeedback,
    className: "jp-connection__disconnect-dialog__btn-back-to-wp"
  }, __('Help us improve', 'jetpack'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "jp-connection__disconnect-dialog__link jp-connection__disconnect-dialog__link--bold",
    href: "#",
    onClick: onExit
  }, __('No thank you', 'jetpack'))), !canProvideFeedback && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    isPrimary: true,
    onClick: onExit,
    className: "jp-connection__disconnect-dialog__btn-back-to-wp"
  }, __('Back to my website', 'jetpack'))))));
};

StepDisconnectConfirm.PropTypes = {
  /** Callback used to close the modal. */
  onExit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),

  /** Callback used to change the state if user would like to provide feedback. */
  onProvideFeedback: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),

  /** Does the app have the necessary information to collect a survey response? */
  canProvideFeedback: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StepDisconnectConfirm);

/***/ }),

/***/ "../../js-packages/connection/components/disconnect-dialog/steps/step-disconnect.jsx":
/*!*******************************************************************************************!*\
  !*** ../../js-packages/connection/components/disconnect-dialog/steps/step-disconnect.jsx ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _automattic_jetpack_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @automattic/jetpack-components */ "../../js-packages/components/tools/jp-redirect/index.jsx");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "../../../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _connected_plugins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../connected-plugins */ "../../js-packages/connection/components/connected-plugins/index.jsx");
/**
 * External Dependencies
 */

/**
 * Internal Dependencies
 */



const __ = _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__;




/**
 * Disconnect step in disconnection flow.
 *
 * @param {object} props - The properties.
 * @returns {React.Component} - The StepDisconnect component
 */

const StepDisconnect = props => {
  const {
    title,
    isDisconnecting,
    onDisconnect,
    disconnectError,
    disconnectStepComponent,
    connectedPlugins,
    disconnectingPlugin,
    closeModal,
    context
  } = props;
  /**
   * Render the disconnect button, allows for some variance based on context.
   *
   * @returns {React.Component} - Button used for disconnect.
   */

  const renderDisconnectButton = () => {
    let buttonText = __('Disconnect', 'jetpack'); // When showing on the plugins page, this button should deactivate the plugin as well.


    if (isDisconnecting) {
      buttonText = __('Disconnecting…', 'jetpack');
    } else if (context === 'plugins') {
      buttonText = __('Disconnect and Deactivate', 'jetpack');
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      isPrimary: true,
      disabled: isDisconnecting,
      onClick: onDisconnect,
      className: "jp-connection__disconnect-dialog__btn-disconnect"
    }, buttonText);
  };
  /**
   * Show some fallback output if there are no connected plugins to show and no passed disconnect component.
   * This is a more generic message about disconnecting Jetpack.
   *
   * @returns {React.ElementType} - Fallback message for when there are no connected plugins or passed components to show.
   */


  const renderFallbackOutput = () => {
    if (!connectedPlugins && !disconnectStepComponent) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "jp-connection__disconnect-dialog__step-copy"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "jp-connection__disconnect-dialog__large-text"
      }, __('Jetpack is currently powering multiple products on your site.', 'jetpack'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), __('Once you disconnect Jetpack, these will no longer work.', 'jetpack')));
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "jp-connection__disconnect-dialog__content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    id: "jp-connection__disconnect-dialog__heading"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_connected_plugins__WEBPACK_IMPORTED_MODULE_5__["default"], {
    connectedPlugins: connectedPlugins,
    disconnectingPlugin: disconnectingPlugin
  }), disconnectStepComponent, renderFallbackOutput()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "jp-connection__disconnect-dialog__actions"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "jp-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "lg-col-span-7 md-col-span-8 sm-col-span-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createInterpolateElement)(__('<strong>Need help?</strong> Learn more about the <jpConnectionInfoLink>Jetpack connection</jpConnectionInfoLink> or <jpSupportLink>contact Jetpack support</jpSupportLink>.', 'jetpack'), {
    strong: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null),
    jpConnectionInfoLink: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: (0,_automattic_jetpack_components__WEBPACK_IMPORTED_MODULE_6__["default"])('why-the-wordpress-com-connection-is-important-for-jetpack'),
      rel: "noopener noreferrer",
      target: "_blank",
      className: "jp-connection__disconnect-dialog__link"
    }),
    jpSupportLink: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: (0,_automattic_jetpack_components__WEBPACK_IMPORTED_MODULE_6__["default"])('jetpack-support'),
      rel: "noopener noreferrer",
      target: "_blank",
      className: "jp-connection__disconnect-dialog__link"
    })
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "jp-connection__disconnect-dialog__button-wrap lg-col-span-5 md-col-span-8 sm-col-span-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    isPrimary: true,
    disabled: isDisconnecting,
    onClick: closeModal,
    className: "jp-connection__disconnect-dialog__btn-dismiss"
  }, __('Stay connected', 'jetpack')), renderDisconnectButton())), disconnectError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "jp-connection__disconnect-dialog__error"
  }, disconnectError)));
};

StepDisconnect.propTypes = {
  /** The title to show for this section. */
  title: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),

  /** Whether or not a request to disconnect is in progress. */
  isDisconnecting: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /** Callback function that is triggered by clicking the "Disconnect" button. */
  onDisconnect: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /** An error that occurred during a request to disconnect. */
  disconnectError: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /** A component to be rendered as part of this step */
  disconnectStepComponent: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().elementType),

  /** Plugins that are using the Jetpack connection. */
  connectedPlugins: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().array),

  /** The slug of the plugin that is initiating the disconnection. */
  disconnectingPlugin: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),

  /** Callback function that closes the modal. */
  closeModal: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /** Where this modal is being rendered. */
  context: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StepDisconnect);

/***/ }),

/***/ "../../js-packages/connection/components/disconnect-dialog/steps/step-survey.jsx":
/*!***************************************************************************************!*\
  !*** ../../js-packages/connection/components/disconnect-dialog/steps/step-survey.jsx ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../../../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _disconnect_survey_jp_connect_disconnect_survey_card_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../disconnect-survey/_jp-connect_disconnect-survey-card.scss */ "../../js-packages/connection/components/disconnect-survey/_jp-connect_disconnect-survey-card.scss");
/* harmony import */ var _disconnect_survey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../disconnect-survey */ "../../js-packages/connection/components/disconnect-survey/index.jsx");
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */

/**
 * External Dependencies
 */


/**
 * Internal Dependencies
 */


const __ = _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__;


/**
 * Show the survey step and allow the user to select a response.
 *
 * @param {object} props - The properties.
 * @returns {React.Component} The StepSurvey Component
 */

const StepSurvey = props => {
  const {
    onExit,
    onFeedBackProvided,
    isSubmittingFeedback
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "jp-connection__disconnect-dialog__content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, __('Before you go, help us improve Jetpack')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "jp-connection__disconnect-dialog__large-text"
  }, __('Let us know what didn‘t work for you', 'jetpack')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_disconnect_survey__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onSubmit: onFeedBackProvided,
    isSubmittingFeedback: isSubmittingFeedback
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "jp-connection__disconnect-dialog__link jp-connection__disconnect-dialog__link--bold",
    href: "#",
    onClick: onExit
  }, __('Skip for now', 'jetpack')));
};

StepSurvey.PropTypes = {
  /** Callback function used to close the modal and leave the disconnect flow. */
  onExit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),

  /** Callback function to handle submission of survey response. */
  onFeedBackProvided: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),

  /** If the survey feedback is currently being saved/ submitted */
  isSubmittingFeedback: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StepSurvey);

/***/ }),

/***/ "../../js-packages/connection/components/disconnect-dialog/steps/step-thank-you.jsx":
/*!******************************************************************************************!*\
  !*** ../../js-packages/connection/components/disconnect-dialog/steps/step-thank-you.jsx ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../../../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _automattic_jetpack_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @automattic/jetpack-components */ "../../js-packages/components/components/decorative-card/index.jsx");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_disconnect_thanks_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/disconnect-thanks.jpg */ "../../js-packages/connection/components/disconnect-dialog/images/disconnect-thanks.jpg");
/**
 * External Dependencies
 */


/**
 * Internal Dependencies
 */



const __ = _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__;



/**
 * Show the "thank you" step following survey submission
 *
 * @param {object} props - The properties.
 * @returns {React.Component} - The StepThankYou Component
 */

const StepThankYou = props => {
  const {
    onExit
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "jp-connection__disconnect-dialog__content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_automattic_jetpack_components__WEBPACK_IMPORTED_MODULE_5__["default"], {
    format: "vertical",
    imageUrl: _images_disconnect_thanks_jpg__WEBPACK_IMPORTED_MODULE_6__
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "jp-connection__disconnect-dialog__copy"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, __('Thank you!', 'jetpack')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "jp-connection__disconnect-dialog__large-text"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.createInterpolateElement)(__('Your answer has been submitted. <br/>Thanks for your input on how we can improve Jetpack.', 'jetpack'), {
    br: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    isPrimary: true,
    onClick: onExit,
    className: "jp-connection__disconnect-dialog__btn-back-to-wp"
  }, __('Back to my website', 'jetpack'))));
};

StepThankYou.PropTypes = {
  /** Callback function to close the disconnect modal. */
  onExit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),

  /** Base URL for where webpack-ed images will be stored for the consumer of this component. */
  assetBaseUrl: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StepThankYou);

/***/ }),

/***/ "../../js-packages/connection/components/disconnect-survey/index.jsx":
/*!***************************************************************************!*\
  !*** ../../js-packages/connection/components/disconnect-survey/index.jsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../../../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _survey_choice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./survey-choice */ "../../js-packages/connection/components/disconnect-survey/survey-choice.jsx");
/**
 * External Dependencies
 */


/**
 * Internal Dependencies
 */



const __ = _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__;

/**
 * Handles showing the disconnect survey.
 *
 * @param {object} props - The component props.
 * @returns {React.Component} - DisconnectSurvey component.
 */

const DisconnectSurvey = props => {
  const {
    onSubmit,
    isSubmittingFeedback
  } = props;
  const [selectedAnswer, setSelectedAnswer] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [customResponse, setCustomResponse] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const options = [{
    id: 'troubleshooting',
    answerText: __("Troubleshooting - I'll be reconnecting afterwards.", 'jetpack')
  }, {
    id: 'not-working',
    answerText: __("I can't get it to work.", 'jetpack')
  }, {
    id: 'slowed-down-site',
    answerText: __('It slowed down my site.', 'jetpack')
  }, {
    id: 'buggy',
    answerText: __("It's buggy.", 'jetpack')
  }, {
    id: 'what-does-it-do',
    answerText: __("I don't know what it does.", 'jetpack')
  }];
  const customOption = {
    id: 'another-reason'
  };
  /**
   * Handle Submission of the survey.
   * Will send the survey response to the collection endpoint.
   */

  const handleSurveySubmit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    const answerText = selectedAnswer === customOption.id ? customResponse : '';
    onSubmit(selectedAnswer, answerText);
  }, [onSubmit, customOption.id, customResponse, selectedAnswer]);
  /**
   * Handle input into the custom response field.
   *
   * @param {object} e - onChange event for the custom input
   */

  const handleCustomResponse = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    const value = e.target.value;
    e.stopPropagation();
    setCustomResponse(value);
  }, [setCustomResponse]);
  /**
   * Checks to see if an option is the currently selected option, returns a css class name if it matches.
   *
   * @param {string} optionId   - ID of the option to check for.
   * @returns {string} - The "selected" class if this option is currently selected.
   */

  const selectedClass = optionId => {
    if (optionId === selectedAnswer) {
      return 'jp-connect__disconnect-survey-card--selected';
    }

    return '';
  };
  /**
   * Event handler for keyboard events on the answer blocks.
   *
   * @param {string} answerId - The slug of the answer that has been selected.
   * @param {object} e - Keydown event.
   */


  const handleAnswerKeyDown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((answerId, e) => {
    switch (e.key) {
      case 'Enter':
      case 'Space':
      case 'Spacebar':
      case ' ':
        setSelectedAnswer(answerId);
        break;
    }
  }, [setSelectedAnswer]);
  /**
   * Show all the survey options from the options array.
   *
   * @returns {React.ElementType []} - Mapped array of rendered survey options.
   */

  const renderOptions = () => {
    return options.map(option => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_survey_choice__WEBPACK_IMPORTED_MODULE_4__["default"], {
        id: option.id,
        onClick: setSelectedAnswer,
        onKeyDown: handleAnswerKeyDown,
        className: 'card jp-connect__disconnect-survey-card ' + selectedClass(option.id)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "jp-connect__disconnect-survey-card__answer"
      }, option.answerText));
    });
  };
  /**
   * Show the custom input survey option.
   * Contains an input field for a custom response.
   *
   * @returns {React.ElementType} - The custom survey option with an input field.
   */


  const renderCustomOption = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_survey_choice__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: customOption.id,
      onClick: setSelectedAnswer,
      onKeyDown: handleAnswerKeyDown,
      className: 'card jp-connect__disconnect-survey-card ' + selectedClass(customOption.id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "jp-connect__disconnect-survey-card__answer"
    }, __('Other:', 'jetpack'), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      placeholder: __('share your experience', 'jetpack'),
      className: "jp-connect__disconnect-survey-card__input",
      type: "text",
      value: customResponse,
      onChange: handleCustomResponse,
      maxLength: 1000 // Limit response length.

    })));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "jp-connection__disconnect-dialog__survey"
  }, renderOptions(), renderCustomOption()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    disabled: !selectedAnswer || isSubmittingFeedback,
    isPrimary: true,
    onClick: handleSurveySubmit,
    className: "jp-connection__disconnect-dialog__btn-back-to-wp"
  }, isSubmittingFeedback ? __('Submitting…', 'jetpack') : __('Submit Feedback', 'jetpack'))));
};

DisconnectSurvey.PropTypes = {
  /** Callback handler function for when the survey response is submitted. */
  onSubmit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),

  /** If the survey feedback is currently being saved/ submitted */
  isSubmittingFeedback: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisconnectSurvey);

/***/ }),

/***/ "../../js-packages/connection/components/disconnect-survey/survey-choice.jsx":
/*!***********************************************************************************!*\
  !*** ../../js-packages/connection/components/disconnect-survey/survey-choice.jsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jp_connect_disconnect_survey_card_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_jp-connect_disconnect-survey-card.scss */ "../../js-packages/connection/components/disconnect-survey/_jp-connect_disconnect-survey-card.scss");
/**
 * External Dependencies
 */

/**
 * Internal Dependencies
 */


/**
 * SurveyChoice - Present one choice in the survey.
 *
 * @param {string} props.id - The ID/slug string of the survey option
 * @param {Function} props.onClick - Event handler for clicking on the survey option.
 * @param {Function} props.onKeydown - Event handler for pressing a key on the survey option.
 * @param {React.ElementType} props.children - Any passed elements as children to this component.
 * @param {string} props.className - A class name to apply to the survey choice.
 * @returns {React.Component} SurveyChoice - The SurveyChoice component.
 */

const SurveyChoice = props => {
  const {
    id,
    onClick,
    onKeyDown,
    children,
    className
  } = props;
  const handleClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    onClick(id);
  }, [id, onClick]);
  const handleKeyDown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    onKeyDown(id, e);
  }, [id, onKeyDown]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    tabIndex: "0",
    role: "button",
    onClick: handleClick,
    onKeyDown: handleKeyDown,
    className: 'card jp-connect__disconnect-survey-card ' + className
  }, children);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SurveyChoice);

/***/ }),

/***/ "../../js-packages/connection/state/actions.jsx":
/*!******************************************************!*\
  !*** ../../js-packages/connection/state/actions.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SET_CONNECTION_STATUS": () => (/* binding */ SET_CONNECTION_STATUS),
/* harmony export */   "SET_CONNECTION_STATUS_IS_FETCHING": () => (/* binding */ SET_CONNECTION_STATUS_IS_FETCHING),
/* harmony export */   "FETCH_CONNECTION_STATUS": () => (/* binding */ FETCH_CONNECTION_STATUS),
/* harmony export */   "SET_SITE_IS_REGISTERING": () => (/* binding */ SET_SITE_IS_REGISTERING),
/* harmony export */   "SET_USER_IS_CONNECTING": () => (/* binding */ SET_USER_IS_CONNECTING),
/* harmony export */   "SET_REGISTRATION_ERROR": () => (/* binding */ SET_REGISTRATION_ERROR),
/* harmony export */   "CLEAR_REGISTRATION_ERROR": () => (/* binding */ CLEAR_REGISTRATION_ERROR),
/* harmony export */   "REGISTER_SITE": () => (/* binding */ REGISTER_SITE),
/* harmony export */   "SET_AUTHORIZATION_URL": () => (/* binding */ SET_AUTHORIZATION_URL),
/* harmony export */   "default": () => (/* binding */ actions)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _automattic_jetpack_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @automattic/jetpack-api */ "../../js-packages/api/index.jsx");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ "../../js-packages/connection/state/store.jsx");
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


const SET_CONNECTION_STATUS = 'SET_CONNECTION_STATUS';
const SET_CONNECTION_STATUS_IS_FETCHING = 'SET_CONNECTION_STATUS_IS_FETCHING';
const FETCH_CONNECTION_STATUS = 'FETCH_CONNECTION_STATUS';
const SET_SITE_IS_REGISTERING = 'SET_SITE_IS_REGISTERING';
const SET_USER_IS_CONNECTING = 'SET_USER_IS_CONNECTING';
const SET_REGISTRATION_ERROR = 'SET_REGISTRATION_ERROR';
const CLEAR_REGISTRATION_ERROR = 'CLEAR_REGISTRATION_ERROR';
const REGISTER_SITE = 'REGISTER_SITE';
const SET_AUTHORIZATION_URL = 'SET_AUTHORIZATION_URL';
const connectionStatusActions = {
  setConnectionStatus: connectionStatus => {
    return {
      type: SET_CONNECTION_STATUS,
      connectionStatus
    };
  },
  setConnectionStatusIsFetching: isFetching => {
    return {
      type: SET_CONNECTION_STATUS_IS_FETCHING,
      isFetching
    };
  },
  fetchConnectionStatus: () => {
    return {
      type: FETCH_CONNECTION_STATUS
    };
  },
  setSiteIsRegistering: isRegistering => {
    return {
      type: SET_SITE_IS_REGISTERING,
      isRegistering
    };
  },
  setUserIsConnecting: isConnecting => {
    return {
      type: SET_USER_IS_CONNECTING,
      isConnecting
    };
  },
  setRegistrationError: registrationError => {
    return {
      type: SET_REGISTRATION_ERROR,
      registrationError
    };
  },
  clearRegistrationError: () => {
    return {
      type: CLEAR_REGISTRATION_ERROR
    };
  },
  setAuthorizationUrl: authorizationUrl => {
    return {
      type: SET_AUTHORIZATION_URL,
      authorizationUrl
    };
  },

  *registerSite(registrationNonce, redirectUri) {
    yield (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)(_store__WEBPACK_IMPORTED_MODULE_2__.STORE_ID).clearRegistrationError();
    yield (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)(_store__WEBPACK_IMPORTED_MODULE_2__.STORE_ID).setSiteIsRegistering(true);
    yield _automattic_jetpack_api__WEBPACK_IMPORTED_MODULE_1__["default"].registerSite(registrationNonce, redirectUri).then(response => {
      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)(_store__WEBPACK_IMPORTED_MODULE_2__.STORE_ID).setSiteIsRegistering(false);
      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)(_store__WEBPACK_IMPORTED_MODULE_2__.STORE_ID).setConnectionStatus({
        isRegistered: true
      });
      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)(_store__WEBPACK_IMPORTED_MODULE_2__.STORE_ID).setAuthorizationUrl(response.authorizeUrl);
      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)(_store__WEBPACK_IMPORTED_MODULE_2__.STORE_ID).setUserIsConnecting(true);
    }).catch(error => {
      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)(_store__WEBPACK_IMPORTED_MODULE_2__.STORE_ID).setSiteIsRegistering(false);
      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)(_store__WEBPACK_IMPORTED_MODULE_2__.STORE_ID).setRegistrationError(error);
    }).finally(() => {
      return {
        type: REGISTER_SITE
      };
    });
  }

};
const actions = { ...connectionStatusActions
};


/***/ }),

/***/ "../../js-packages/connection/state/controls.jsx":
/*!*******************************************************!*\
  !*** ../../js-packages/connection/state/controls.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _automattic_jetpack_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @automattic/jetpack-api */ "../../js-packages/api/index.jsx");
/**
 * External dependencies
 */


const FETCH_CONNECTION_STATUS = () => {
  return new Promise((resolve, reject) => {
    _automattic_jetpack_api__WEBPACK_IMPORTED_MODULE_0__["default"].fetchSiteConnectionStatus().then(result => resolve(result)).catch(error => reject(error));
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  FETCH_CONNECTION_STATUS
});

/***/ }),

/***/ "../../js-packages/connection/state/reducers.jsx":
/*!*******************************************************!*\
  !*** ../../js-packages/connection/state/reducers.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "../../js-packages/connection/state/actions.jsx");
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



const connectionStatus = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__.SET_CONNECTION_STATUS:
      return { ...state,
        ...action.connectionStatus
      };
  }

  return state;
};

const connectionStatusIsFetching = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__.SET_CONNECTION_STATUS_IS_FETCHING:
      return action.isFetching;
  }

  return state;
};

const siteIsRegistering = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__.SET_SITE_IS_REGISTERING:
      return action.isRegistering;
  }

  return state;
};

const userIsConnecting = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__.SET_USER_IS_CONNECTING:
      return action.isConnecting;
  }

  return state;
};

const registrationError = (state, action) => {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__.CLEAR_REGISTRATION_ERROR:
      return false;

    case _actions__WEBPACK_IMPORTED_MODULE_1__.SET_REGISTRATION_ERROR:
      return action.registrationError;

    default:
      return state;
  }
};

const authorizationUrl = (state, action) => {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__.SET_AUTHORIZATION_URL:
      return action.authorizationUrl;

    default:
      return state;
  }
};

const reducers = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  connectionStatus,
  connectionStatusIsFetching,
  siteIsRegistering,
  userIsConnecting,
  registrationError,
  authorizationUrl
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducers);

/***/ }),

/***/ "../../js-packages/connection/state/resolvers.jsx":
/*!********************************************************!*\
  !*** ../../js-packages/connection/state/resolvers.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "../../js-packages/connection/state/actions.jsx");
/**
 * Internal dependencies
 */

const connectionResolvers = {
  *getConnectionStatus() {
    yield _actions__WEBPACK_IMPORTED_MODULE_0__["default"].setConnectionStatusIsFetching(true);
    const result = yield _actions__WEBPACK_IMPORTED_MODULE_0__["default"].fetchConnectionStatus();
    yield _actions__WEBPACK_IMPORTED_MODULE_0__["default"].setConnectionStatusIsFetching(false);
    return _actions__WEBPACK_IMPORTED_MODULE_0__["default"].setConnectionStatus(result);
  }

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ ...connectionResolvers
});

/***/ }),

/***/ "../../js-packages/connection/state/selectors.jsx":
/*!********************************************************!*\
  !*** ../../js-packages/connection/state/selectors.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const connectionSelectors = {
  getConnectionStatus: state => state.connectionStatus || {},
  getConnectionStatusIsFetching: state => state.connectionStatusIsFetching || false,
  getSiteIsRegistering: state => state.siteIsRegistering || false,
  getUserIsConnecting: state => state.userIsConnecting || false,
  getRegistrationError: state => state.registrationError || false,
  getAuthorizationUrl: state => state.authorizationUrl || false
};
const selectors = { ...connectionSelectors
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selectors);

/***/ }),

/***/ "../../js-packages/connection/state/store-holder.jsx":
/*!***********************************************************!*\
  !*** ../../js-packages/connection/state/store-holder.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_runner_work_jetpack_jetpack_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/defineProperty.js */ "../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _home_runner_work_jetpack_jetpack_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_jetpack_jetpack_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);


/**
 * External dependencies
 */


class storeHolder {
  static mayBeInit(storeId, storeConfig) {
    if (null === storeHolder.store) {
      storeHolder.store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.createReduxStore)(storeId, storeConfig);
      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.register)(storeHolder.store);
      storeHolder.resolveResolvers(storeId, storeConfig.initialState);
    }
  }

  static resolveResolvers(storeId, initialState) {
    if (initialState.connectionStatus && initialState.connectionStatus.hasOwnProperty('isRegistered')) {
      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.dispatch)(storeId).finishResolution('getConnectionStatus', []);
    }
  }

}

_home_runner_work_jetpack_jetpack_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(storeHolder, "store", null);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storeHolder);

/***/ }),

/***/ "../../js-packages/connection/state/store.jsx":
/*!****************************************************!*\
  !*** ../../js-packages/connection/state/store.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STORE_ID": () => (/* binding */ STORE_ID)
/* harmony export */ });
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ "../../js-packages/connection/state/reducers.jsx");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "../../js-packages/connection/state/actions.jsx");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors */ "../../js-packages/connection/state/selectors.jsx");
/* harmony import */ var _store_holder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store-holder */ "../../js-packages/connection/state/store-holder.jsx");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resolvers */ "../../js-packages/connection/state/resolvers.jsx");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controls */ "../../js-packages/connection/state/controls.jsx");
/**
 * Internal dependencies
 */






const STORE_ID = 'jetpack-connection';
_store_holder__WEBPACK_IMPORTED_MODULE_0__["default"].mayBeInit(STORE_ID, {
  reducer: _reducers__WEBPACK_IMPORTED_MODULE_1__["default"],
  actions: _actions__WEBPACK_IMPORTED_MODULE_2__["default"],
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_3__["default"],
  resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_4__["default"],
  controls: _controls__WEBPACK_IMPORTED_MODULE_5__["default"],
  initialState: window.JP_CONNECTION_INITIAL_STATE || {}
});


/***/ }),

/***/ "./_inc/components/my-jetpack-screen/index.jsx":
/*!*****************************************************!*\
  !*** ./_inc/components/my-jetpack-screen/index.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyJetpackScreen)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _automattic_jetpack_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @automattic/jetpack-components */ "../../js-packages/components/components/admin-page/index.jsx");
/* harmony import */ var _automattic_jetpack_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @automattic/jetpack-components */ "../../js-packages/components/components/admin-section/hero/index.jsx");
/* harmony import */ var _automattic_jetpack_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @automattic/jetpack-components */ "../../js-packages/components/components/layout/row/index.jsx");
/* harmony import */ var _automattic_jetpack_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @automattic/jetpack-components */ "../../js-packages/components/components/layout/col/index.jsx");
/* harmony import */ var _automattic_jetpack_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @automattic/jetpack-components */ "../../js-packages/components/components/admin-section/basic/index.jsx");
/* harmony import */ var _automattic_jetpack_connection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @automattic/jetpack-connection */ "../../js-packages/connection/state/store.jsx");
/* harmony import */ var _automattic_jetpack_connection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @automattic/jetpack-connection */ "../../js-packages/connection/components/connection-status-card/index.jsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./_inc/components/my-jetpack-screen/style.scss");
/* global myJetpackInitialState */

/**
 * External dependencies
 */


const __ = _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__;




/**
 * The My Jetpack App Main Screen.
 *
 * @returns {object} The MyJetpackScreen component.
 */

function MyJetpackScreen() {
  const connectionStatus = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => select(_automattic_jetpack_connection__WEBPACK_IMPORTED_MODULE_4__.STORE_ID).getConnectionStatus(), []);
  const redirectAfterDisconnect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    window.location = myJetpackInitialState.topJetpackMenuItemUrl;
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "jp-my-jetpack-screen"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_automattic_jetpack_components__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_automattic_jetpack_components__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_automattic_jetpack_components__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_automattic_jetpack_components__WEBPACK_IMPORTED_MODULE_8__["default"], {
    lg: 12,
    md: 8,
    sm: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, __('Manage your Jetpack plan and products all in one place', 'jetpack'))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_automattic_jetpack_components__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_automattic_jetpack_components__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_automattic_jetpack_components__WEBPACK_IMPORTED_MODULE_8__["default"], {
    lg: 6,
    sm: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, __('My Plan'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_automattic_jetpack_components__WEBPACK_IMPORTED_MODULE_8__["default"], {
    lg: 6,
    sm: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_automattic_jetpack_connection__WEBPACK_IMPORTED_MODULE_10__["default"], {
    apiRoot: myJetpackInitialState.apiRoot,
    apiNonce: myJetpackInitialState.apiNonce,
    isRegistered: connectionStatus.isRegistered,
    isUserConnected: connectionStatus.isUserConnected,
    redirectUri: myJetpackInitialState.redirectUri,
    onDisconnected: redirectAfterDisconnect
  }))))));
}

/***/ }),

/***/ "../../js-packages/connection/components/disconnect-dialog/images/disconnect-confirm.jpg":
/*!***********************************************************************************************!*\
  !*** ../../js-packages/connection/components/disconnect-dialog/images/disconnect-confirm.jpg ***!
  \***********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/disconnect-confirm-dc9fe8f5c68cfd1320e0.jpg";

/***/ }),

/***/ "../../js-packages/connection/components/disconnect-dialog/images/disconnect-thanks.jpg":
/*!**********************************************************************************************!*\
  !*** ../../js-packages/connection/components/disconnect-dialog/images/disconnect-thanks.jpg ***!
  \**********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/disconnect-thanks-5873bfac56a9bd7322cd.jpg";

/***/ }),

/***/ "jetpackConfig":
/*!*****************************************************!*\
  !*** external "{\"consumer_slug\":\"my_jetpack\"}" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
if(typeof {"consumer_slug":"my_jetpack"} === 'undefined') { var e = new Error("Cannot find module '{\"consumer_slug\":\"my_jetpack\"}'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = {"consumer_slug":"my_jetpack"};

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactDOM"];

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

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

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/url":
/*!*****************************!*\
  !*** external ["wp","url"] ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["url"];

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./_inc/admin.jsx ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_my_jetpack_screen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/my-jetpack-screen */ "./_inc/components/my-jetpack-screen/index.jsx");
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


/**
 * The initial renderer function.
 */

function render() {
  const container = document.getElementById('my-jetpack-container');

  if (null === container) {
    return;
  }

  react_dom__WEBPACK_IMPORTED_MODULE_0___default().render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_my_jetpack_screen__WEBPACK_IMPORTED_MODULE_2__["default"], null), container);
}

render();
})();

/******/ })()
;
//# sourceMappingURL=index.js.map