/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../../node_modules/.pnpm/debug@4.4.3/node_modules/debug/src/browser.js"
/*!*********************************************************************************!*\
  !*** ../../../node_modules/.pnpm/debug@4.4.3/node_modules/debug/src/browser.js ***!
  \*********************************************************************************/
(module, exports, __webpack_require__) {

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

	let m;

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	// eslint-disable-next-line no-return-assign
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31) ||
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
		r = exports.storage.getItem('debug') || exports.storage.getItem('DEBUG') ;
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

module.exports = __webpack_require__(/*! ./common */ "../../../node_modules/.pnpm/debug@4.4.3/node_modules/debug/src/common.js")(exports);

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


/***/ },

/***/ "../../../node_modules/.pnpm/debug@4.4.3/node_modules/debug/src/common.js"
/*!********************************************************************************!*\
  !*** ../../../node_modules/.pnpm/debug@4.4.3/node_modules/debug/src/common.js ***!
  \********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {


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
	createDebug.humanize = __webpack_require__(/*! ms */ "../../../node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js");
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

		const split = (typeof namespaces === 'string' ? namespaces : '')
			.trim()
			.replace(/\s+/g, ',')
			.split(',')
			.filter(Boolean);

		for (const ns of split) {
			if (ns[0] === '-') {
				createDebug.skips.push(ns.slice(1));
			} else {
				createDebug.names.push(ns);
			}
		}
	}

	/**
	 * Checks if the given string matches a namespace template, honoring
	 * asterisks as wildcards.
	 *
	 * @param {String} search
	 * @param {String} template
	 * @return {Boolean}
	 */
	function matchesTemplate(search, template) {
		let searchIndex = 0;
		let templateIndex = 0;
		let starIndex = -1;
		let matchIndex = 0;

		while (searchIndex < search.length) {
			if (templateIndex < template.length && (template[templateIndex] === search[searchIndex] || template[templateIndex] === '*')) {
				// Match character or proceed with wildcard
				if (template[templateIndex] === '*') {
					starIndex = templateIndex;
					matchIndex = searchIndex;
					templateIndex++; // Skip the '*'
				} else {
					searchIndex++;
					templateIndex++;
				}
			} else if (starIndex !== -1) { // eslint-disable-line no-negated-condition
				// Backtrack to the last '*' and try to match more characters
				templateIndex = starIndex + 1;
				matchIndex++;
				searchIndex = matchIndex;
			} else {
				return false; // No match
			}
		}

		// Handle trailing '*' in template
		while (templateIndex < template.length && template[templateIndex] === '*') {
			templateIndex++;
		}

		return templateIndex === template.length;
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names,
			...createDebug.skips.map(namespace => '-' + namespace)
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
		for (const skip of createDebug.skips) {
			if (matchesTemplate(name, skip)) {
				return false;
			}
		}

		for (const ns of createDebug.names) {
			if (matchesTemplate(name, ns)) {
				return true;
			}
		}

		return false;
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


/***/ },

/***/ "../../js-packages/shared-extension-utils/src/with-has-warning-is-interactive-class-names/style.scss"
/*!***********************************************************************************************************!*\
  !*** ../../js-packages/shared-extension-utils/src/with-has-warning-is-interactive-class-names/style.scss ***!
  \***********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/blocks/podcast-episode/editor.scss"
/*!************************************************!*\
  !*** ./src/blocks/podcast-episode/editor.scss ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "../../../node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js"
/*!*********************************************************************!*\
  !*** ../../../node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js ***!
  \*********************************************************************/
(module) {

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

module.exports = function (val, options) {
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


/***/ },

/***/ "../../js-packages/analytics/index.jsx"
/*!*********************************************!*\
  !*** ../../js-packages/analytics/index.jsx ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "../../../node_modules/.pnpm/debug@4.4.3/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);

const debug = debug__WEBPACK_IMPORTED_MODULE_0___default()('dops:analytics');
let _superProps, _user;

// Load tracking scripts
window._tkq = window._tkq || [];
window.ga = window.ga || function () {
  (window.ga.q = window.ga.q || []).push(arguments);
};
window.ga.l = +new Date();

// loadScript( '//stats.wp.com/w.js?48' );
// loadScript( '//www.google-analytics.com/analytics.js' );

/**
 * Build a query string
 *
 * @param {string} group - the group
 * @param {string} name  - the name
 * @return {string} - the uricomponent
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
 * @param {string} name  - the name
 * @return {string} - the uricomponent
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
  setGoogleAnalyticsEnabled: function (googleAnalyticsEnabled, googleAnalyticsKey = null) {
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
  /**
   * Add global properties to be applied to all "tracks" events.
   * This function will add the new properties, overwrite the existing one.
   * Unlike `setSuperProps()`, it will not replace the whole object.
   *
   * @param {object} props - Super props to add.
   */
  assignSuperProps: function (props) {
    _superProps = Object.assign(_superProps || {}, props);
  },
  mc: {
    bumpStat: function (group, name) {
      const uriComponent = buildQuerystring(group, name); // prints debug info
      if (analytics.mcAnalyticsEnabled) {
        new Image().src = document.location.protocol + '//pixel.wp.com/g.gif?v=wpcom-no-pv' + uriComponent + '&t=' + Math.random();
      }
    },
    bumpStatWithPageView: function (group, name) {
      // this function is fairly dangerous, as it bumps page views for wpcom and should only be called in very specific cases.
      const uriComponent = buildQuerystringNoPrefix(group, name); // prints debug info
      if (analytics.mcAnalyticsEnabled) {
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
      if (!eventProperties.blog_id && typeof window.jpTracksContext === 'object' && window.jpTracksContext.blog_id) {
        eventProperties.blog_id = window.jpTracksContext.blog_id;
      }
      if (_superProps) {
        debug('- Super Props: %o', _superProps);
        eventProperties = Object.assign(eventProperties, _superProps);
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

/***/ },

/***/ "../../js-packages/api/index.jsx"
/*!***************************************!*\
  !*** ../../js-packages/api/index.jsx ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Api404AfterRedirectError: () => (/* binding */ Api404AfterRedirectError),
/* harmony export */   Api404Error: () => (/* binding */ Api404Error),
/* harmony export */   FetchNetworkError: () => (/* binding */ FetchNetworkError),
/* harmony export */   JsonParseAfterRedirectError: () => (/* binding */ JsonParseAfterRedirectError),
/* harmony export */   JsonParseError: () => (/* binding */ JsonParseError),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _automattic_jetpack_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @automattic/jetpack-config */ "../../js-packages/config/src/index.js");
/* harmony import */ var _automattic_jetpack_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_automattic_jetpack_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Helps create new custom error classes to better notify upper layers.
 *
 * @param {string} name - the Error name that will be availble in Error.name
 * @return {Error}      a new custom error class.
 */
function createCustomError(name) {
  class CustomError extends Error {
    constructor(...args) {
      super(...args);
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
 * @param {string} root  - The API root
 * @param {string} nonce - The API Nonce
 */
function JetpackRestApiClient(root, nonce) {
  let apiRoot = root,
    wpcomOriginApiUrl = root,
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
      headers: Object.assign({}, headers, {
        'Content-type': 'application/json'
      })
    },
    cacheBusterCallback = addCacheBuster;
  const methods = {
    setApiRoot(newRoot) {
      apiRoot = newRoot;
    },
    /**
     * Sets API root for search endpoints.
     * They are routed through wpcom API for wpcom simple sites,
     * so we add `/wp-json/wpcom-origin/` to this path on wpcom.
     * For non-wpcom sites, this is the same as apiRoot.
     *
     * @param {string} newRoot - API root for search endpoints.
     */
    setWpcomOriginApiUrl(newRoot) {
      wpcomOriginApiUrl = newRoot;
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
        headers: Object.assign({}, headers, {
          'Content-type': 'application/json'
        })
      };
    },
    setCacheBusterCallback: callback => {
      cacheBusterCallback = callback;
    },
    registerSite: (deprecated, redirectUri, from) => {
      const params = {};
      if ((0,_automattic_jetpack_config__WEBPACK_IMPORTED_MODULE_0__.jetpackConfigHas)('consumer_slug')) {
        params.plugin_slug = (0,_automattic_jetpack_config__WEBPACK_IMPORTED_MODULE_0__.jetpackConfigGet)('consumer_slug');
      }
      if (null !== redirectUri) {
        params.redirect_uri = redirectUri;
      }
      if (from) {
        params.from = from;
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
    unlinkUser: (force = false, options = {}) => {
      const params = {
        linked: false,
        force: !!force
      };

      // Add any additional options to the params
      if (options.disconnectAllUsers) {
        params['disconnect-all-users'] = true;
      }
      return postRequest(`${apiRoot}jetpack/v4/connection/user`, postParams, {
        body: JSON.stringify(params)
      }).then(checkStatus).then(parseJsonResponse);
    },
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
    getFeatureTypeStatus: customContentType => getRequest(`${apiRoot}jetpack/v4/feature/${customContentType}`, getParams).then(checkStatus).then(parseJsonResponse),
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
    fetchSiteDiscount: () => getRequest(`${apiRoot}jetpack/v4/site/discount`, getParams).then(checkStatus).then(parseJsonResponse).then(body => body.data),
    fetchSetupQuestionnaire: () => getRequest(`${apiRoot}jetpack/v4/setup/questionnaire`, getParams).then(checkStatus).then(parseJsonResponse),
    fetchRecommendationsData: () => getRequest(`${apiRoot}jetpack/v4/recommendations/data`, getParams).then(checkStatus).then(parseJsonResponse),
    fetchRecommendationsProductSuggestions: () => getRequest(`${apiRoot}jetpack/v4/recommendations/product-suggestions`, getParams).then(checkStatus).then(parseJsonResponse),
    fetchRecommendationsUpsell: () => getRequest(`${apiRoot}jetpack/v4/recommendations/upsell`, getParams).then(checkStatus).then(parseJsonResponse),
    fetchRecommendationsConditional: () => getRequest(`${apiRoot}jetpack/v4/recommendations/conditional`, getParams).then(checkStatus).then(parseJsonResponse),
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
    fetchIntroOffers: () => getRequest(`${apiRoot}jetpack/v4/intro-offers`, getParams).then(checkStatus).then(parseJsonResponse),
    fetchVerifySiteGoogleStatus: keyringId => {
      const request = keyringId !== null ? getRequest(`${apiRoot}jetpack/v4/verify-site/google/${keyringId}`, getParams) : getRequest(`${apiRoot}jetpack/v4/verify-site/google`, getParams);
      return request.then(checkStatus).then(parseJsonResponse);
    },
    verifySiteGoogle: keyringId => postRequest(`${apiRoot}jetpack/v4/verify-site/google`, postParams, {
      body: JSON.stringify({
        keyring_id: keyringId
      })
    }).then(checkStatus).then(parseJsonResponse),
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
    getUserLicenses: () => getRequest(`${apiRoot}jetpack/v4/licensing/user/licenses`, getParams).then(checkStatus).then(parseJsonResponse),
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
    fetchSearchPlanInfo: () => getRequest(`${wpcomOriginApiUrl}jetpack/v4/search/plan`, getParams).then(checkStatus).then(parseJsonResponse),
    fetchSearchSettings: () => getRequest(`${wpcomOriginApiUrl}jetpack/v4/search/settings`, getParams).then(checkStatus).then(parseJsonResponse),
    updateSearchSettings: newSettings => postRequest(`${wpcomOriginApiUrl}jetpack/v4/search/settings`, postParams, {
      body: JSON.stringify(newSettings)
    }).then(checkStatus).then(parseJsonResponse),
    fetchSearchStats: () => getRequest(`${wpcomOriginApiUrl}jetpack/v4/search/stats`, getParams).then(checkStatus).then(parseJsonResponse),
    fetchWafSettings: () => getRequest(`${apiRoot}jetpack/v4/waf`, getParams).then(checkStatus).then(parseJsonResponse),
    updateWafSettings: newSettings => postRequest(`${apiRoot}jetpack/v4/waf`, postParams, {
      body: JSON.stringify(newSettings)
    }).then(checkStatus).then(parseJsonResponse),
    fetchWordAdsSettings: () => getRequest(`${apiRoot}jetpack/v4/wordads/settings`, getParams).then(checkStatus).then(parseJsonResponse),
    updateWordAdsSettings: newSettings => postRequest(`${apiRoot}jetpack/v4/wordads/settings`, postParams, {
      body: JSON.stringify(newSettings)
    }),
    fetchSearchPricing: () => getRequest(`${wpcomOriginApiUrl}jetpack/v4/search/pricing`, getParams).then(checkStatus).then(parseJsonResponse),
    fetchMigrationStatus: () => getRequest(`${apiRoot}jetpack/v4/migration/status`, getParams).then(checkStatus).then(parseJsonResponse),
    fetchBackupUndoEvent: () => getRequest(`${apiRoot}jetpack/v4/site/backup/undo-event`, getParams).then(checkStatus).then(parseJsonResponse),
    fetchBackupPreflightStatus: () => getRequest(`${apiRoot}jetpack/v4/site/backup/preflight`, getParams).then(checkStatus).then(parseJsonResponse)
  };

  /**
   * The default callback to add a cachebuster parameter to route
   *
   * @param {string} route - the route
   * @return {string} - the route with the cachebuster appended
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
   * @param {string} route  - the route
   * @param {object} params - the params
   * @return {Promise<Response>} - the http request promise
   */
  function getRequest(route, params) {
    return fetch(cacheBusterCallback(route), params);
  }

  /**
   * Generate a POST request promise for the route and params. Automatically adds a cachebuster.
   *
   * @param {string} route  - the route
   * @param {object} params - the params
   * @param {string} body   - the body
   * @return {Promise<Response>} - the http response promise
   */
  function postRequest(route, params, body) {
    return fetch(route, Object.assign({}, params, body)).catch(catchNetworkErrors);
  }

  /**
   * Returns the stats data URL for the given date range
   *
   * @param {string} range - the range
   * @return {string} - the stats URL
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
   * @return {object} - the handled stats data
   */
  function handleStatsResponseError(statsData) {
    // If we get a .response property, it means that .com's response is errory.
    // Probably because the site does not have stats yet.
    const responseOk = statsData.general && statsData.general.response === undefined || statsData.week && statsData.week.response === undefined || statsData.month && statsData.month.response === undefined;
    return responseOk ? statsData : {};
  }
  Object.assign(this, methods);
}
const restApi = new JetpackRestApiClient();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (restApi);

/**
 * Check the status of the response. Throw an error if it was not OK
 *
 * @param {Response} response - the API response
 * @return {Promise<object>} - a promise to return the parsed JSON body as an object
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
 * @return {Promise<object>} - promise to return the parsed json object
 */
function parseJsonResponse(response) {
  return response.json().catch(e => catchJsonParseError(e, response.redirected, response.url));
}

/**
 * Throw appropriate exception given an API error
 *
 * @param {Error}   e          - the error
 * @param {boolean} redirected - are we being redirected?
 * @param {string}  url        - the URL that returned the error
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

/***/ },

/***/ "../../js-packages/config/src/index.js"
/*!*********************************************!*\
  !*** ../../js-packages/config/src/index.js ***!
  \*********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

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
  return Object.hasOwn(jetpackConfig, key);
};
const jetpackConfigGet = key => {
  if (!jetpackConfigHas(key)) {
    throw 'This app requires the "' + key + '" Jetpack Config to be defined in your webpack configuration file. See details in @automattic/jetpack-config package docs.';
  }
  return jetpackConfig[key];
};

// Note: For this cjs module to be used with named exports in an mjs context, modules.exports
// needs to contain only simple variables like `a` or `a: b`. Define anything more complex
// as a variable above, then use the variable here.
// @see https://github.com/nodejs/node/blob/master/deps/cjs-module-lexer/README.md#exports-object-assignment
module.exports = {
  jetpackConfigHas,
  jetpackConfigGet
};

/***/ },

/***/ "../../js-packages/connection/components/use-connection/index.ts"
/*!***********************************************************************!*\
  !*** ../../js-packages/connection/components/use-connection/index.ts ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useConnection)
/* harmony export */ });
/* harmony import */ var _automattic_jetpack_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @automattic/jetpack-api */ "../../js-packages/api/index.jsx");
/* harmony import */ var _automattic_jetpack_script_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @automattic/jetpack-script-data */ "@automattic/jetpack-script-data");
/* harmony import */ var _automattic_jetpack_script_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_automattic_jetpack_script_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _state_store_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../state/store.jsx */ "../../js-packages/connection/state/store.jsx");





const initialState = window?.JP_CONNECTION_INITIAL_STATE || (0,_automattic_jetpack_script_data__WEBPACK_IMPORTED_MODULE_1__.getScriptData)()?.connection || {};

/**
 * Hook to handle the connection process.
 *
 * @param {UseConnectionProps} props - The props.
 * @return {UseConnectionReturn} The connection state and handlers.
 */
function useConnection({
  registrationNonce = initialState.registrationNonce,
  apiRoot = initialState.apiRoot,
  apiNonce = initialState.apiNonce,
  redirectUri,
  autoTrigger,
  from,
  skipUserConnection,
  skipPricingPage
} = {}) {
  const {
    registerSite,
    connectUser,
    refreshConnectedPlugins
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_state_store_jsx__WEBPACK_IMPORTED_MODULE_4__.STORE_ID);
  const registrationError = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => select(_state_store_jsx__WEBPACK_IMPORTED_MODULE_4__.STORE_ID).getRegistrationError(), []);
  const {
    siteIsRegistering,
    userIsConnecting,
    userConnectionData,
    connectedPlugins,
    connectionErrors,
    isRegistered,
    isUserConnected,
    hasConnectedOwner,
    isOfflineMode
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    const connectionStatus = select(_state_store_jsx__WEBPACK_IMPORTED_MODULE_4__.STORE_ID).getConnectionStatus();
    return {
      siteIsRegistering: select(_state_store_jsx__WEBPACK_IMPORTED_MODULE_4__.STORE_ID).getSiteIsRegistering(),
      userIsConnecting: select(_state_store_jsx__WEBPACK_IMPORTED_MODULE_4__.STORE_ID).getUserIsConnecting(),
      userConnectionData: select(_state_store_jsx__WEBPACK_IMPORTED_MODULE_4__.STORE_ID).getUserConnectionData() || {},
      connectedPlugins: select(_state_store_jsx__WEBPACK_IMPORTED_MODULE_4__.STORE_ID).getConnectedPlugins(),
      connectionErrors: select(_state_store_jsx__WEBPACK_IMPORTED_MODULE_4__.STORE_ID).getConnectionErrors(),
      isOfflineMode: select(_state_store_jsx__WEBPACK_IMPORTED_MODULE_4__.STORE_ID).getIsOfflineMode(),
      isRegistered: connectionStatus.isRegistered ?? false,
      isUserConnected: connectionStatus.isUserConnected ?? false,
      hasConnectedOwner: connectionStatus.hasConnectedOwner ?? false
    };
  }, []);

  /**
   * User register process handler.
   *
   * @return Promise when running the user connection process. Otherwise, nothing.
   */
  const handleConnectUser = () => {
    if (!skipUserConnection) {
      return connectUser({
        from,
        redirectUri,
        skipPricingPage
      });
    } else if (redirectUri) {
      window.location.href = redirectUri;
      return Promise.resolve(redirectUri);
    }
    return Promise.resolve();
  };

  /**
   * Site register process handler.
   *
   * It handles the process to register the site,
   * considering also the user registration status.
   * When they are registered, it will try to only register the site.
   * Otherwise, will try to register the user right after
   * the site was successfully registered.
   *
   * @param {Event} [e] - Event that dispatched handleRegisterSite
   * @return Promise when running the site connection process. Otherwise, nothing.
   */
  const handleRegisterSite = e => {
    e && e.preventDefault();
    if (isRegistered) {
      return handleConnectUser();
    }
    return registerSite({
      registrationNonce,
      redirectUri,
      from
    }).then(() => {
      return handleConnectUser();
    });
  };

  /**
   * Initialize/Setup the REST API.
   */
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    _automattic_jetpack_api__WEBPACK_IMPORTED_MODULE_0__["default"].setApiRoot(apiRoot);
    _automattic_jetpack_api__WEBPACK_IMPORTED_MODULE_0__["default"].setApiNonce(apiNonce);
  }, [apiRoot, apiNonce]);

  /**
   * Auto-trigger the flow, only do it once.
   */
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (autoTrigger && !siteIsRegistering && !userIsConnecting) {
      handleRegisterSite();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    handleRegisterSite,
    handleConnectUser,
    refreshConnectedPlugins,
    isRegistered,
    isUserConnected,
    siteIsRegistering,
    userIsConnecting,
    registrationError,
    userConnectionData,
    hasConnectedOwner,
    connectedPlugins,
    connectionErrors,
    isOfflineMode
  };
}

/***/ },

/***/ "../../js-packages/connection/state/actions.jsx"
/*!******************************************************!*\
  !*** ../../js-packages/connection/state/actions.jsx ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CLEAR_REGISTRATION_ERROR: () => (/* binding */ CLEAR_REGISTRATION_ERROR),
/* harmony export */   CONNECT_USER: () => (/* binding */ CONNECT_USER),
/* harmony export */   DISCONNECT_USER_SUCCESS: () => (/* binding */ DISCONNECT_USER_SUCCESS),
/* harmony export */   FETCH_AUTHORIZATION_URL: () => (/* binding */ FETCH_AUTHORIZATION_URL),
/* harmony export */   FETCH_CONNECTION_STATUS: () => (/* binding */ FETCH_CONNECTION_STATUS),
/* harmony export */   REFRESH_CONNECTED_PLUGINS: () => (/* binding */ REFRESH_CONNECTED_PLUGINS),
/* harmony export */   REGISTER_SITE: () => (/* binding */ REGISTER_SITE),
/* harmony export */   SET_AUTHORIZATION_URL: () => (/* binding */ SET_AUTHORIZATION_URL),
/* harmony export */   SET_CONNECTED_PLUGINS: () => (/* binding */ SET_CONNECTED_PLUGINS),
/* harmony export */   SET_CONNECTION_ERRORS: () => (/* binding */ SET_CONNECTION_ERRORS),
/* harmony export */   SET_CONNECTION_STATUS: () => (/* binding */ SET_CONNECTION_STATUS),
/* harmony export */   SET_CONNECTION_STATUS_IS_FETCHING: () => (/* binding */ SET_CONNECTION_STATUS_IS_FETCHING),
/* harmony export */   SET_IS_OFFLINE_MODE: () => (/* binding */ SET_IS_OFFLINE_MODE),
/* harmony export */   SET_REGISTRATION_ERROR: () => (/* binding */ SET_REGISTRATION_ERROR),
/* harmony export */   SET_SITE_IS_REGISTERING: () => (/* binding */ SET_SITE_IS_REGISTERING),
/* harmony export */   SET_USER_IS_CONNECTING: () => (/* binding */ SET_USER_IS_CONNECTING),
/* harmony export */   "default": () => (/* binding */ actions)
/* harmony export */ });
/* harmony import */ var _automattic_jetpack_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @automattic/jetpack-api */ "../../js-packages/api/index.jsx");

const SET_CONNECTION_STATUS = 'SET_CONNECTION_STATUS';
const SET_CONNECTION_STATUS_IS_FETCHING = 'SET_CONNECTION_STATUS_IS_FETCHING';
const FETCH_CONNECTION_STATUS = 'FETCH_CONNECTION_STATUS';
const SET_SITE_IS_REGISTERING = 'SET_SITE_IS_REGISTERING';
const SET_USER_IS_CONNECTING = 'SET_USER_IS_CONNECTING';
const SET_REGISTRATION_ERROR = 'SET_REGISTRATION_ERROR';
const CLEAR_REGISTRATION_ERROR = 'CLEAR_REGISTRATION_ERROR';
const REGISTER_SITE = 'REGISTER_SITE';
const SET_AUTHORIZATION_URL = 'SET_AUTHORIZATION_URL';
const CONNECT_USER = 'CONNECT_USER';
const DISCONNECT_USER_SUCCESS = 'DISCONNECT_USER_SUCCESS';
const FETCH_AUTHORIZATION_URL = 'FETCH_AUTHORIZATION_URL';
const SET_CONNECTED_PLUGINS = 'SET_CONNECTED_PLUGINS';
const REFRESH_CONNECTED_PLUGINS = 'REFRESH_CONNECTED_PLUGINS';
const SET_CONNECTION_ERRORS = 'SET_CONNECTION_ERRORS';
const SET_IS_OFFLINE_MODE = 'SET_IS_OFFLINE_MODE';
const setConnectionStatus = connectionStatus => {
  return {
    type: SET_CONNECTION_STATUS,
    connectionStatus
  };
};
const setConnectionStatusIsFetching = isFetching => {
  return {
    type: SET_CONNECTION_STATUS_IS_FETCHING,
    isFetching
  };
};
const fetchConnectionStatus = () => {
  return {
    type: FETCH_CONNECTION_STATUS
  };
};
const setSiteIsRegistering = isRegistering => {
  return {
    type: SET_SITE_IS_REGISTERING,
    isRegistering
  };
};
const setUserIsConnecting = isConnecting => {
  return {
    type: SET_USER_IS_CONNECTING,
    isConnecting
  };
};
const disconnectUserSuccess = () => {
  return {
    type: DISCONNECT_USER_SUCCESS
  };
};
const setRegistrationError = registrationError => {
  return {
    type: SET_REGISTRATION_ERROR,
    registrationError
  };
};
const clearRegistrationError = () => {
  return {
    type: CLEAR_REGISTRATION_ERROR
  };
};
const setAuthorizationUrl = authorizationUrl => {
  return {
    type: SET_AUTHORIZATION_URL,
    authorizationUrl
  };
};
const fetchAuthorizationUrl = redirectUri => {
  return {
    type: FETCH_AUTHORIZATION_URL,
    redirectUri
  };
};
const setConnectedPlugins = connectedPlugins => {
  return {
    type: SET_CONNECTED_PLUGINS,
    connectedPlugins
  };
};
const setConnectionErrors = connectionErrors => {
  return {
    type: SET_CONNECTION_ERRORS,
    connectionErrors
  };
};
const setIsOfflineMode = isOfflineMode => {
  return {
    type: SET_IS_OFFLINE_MODE,
    isOfflineMode
  };
};

/**
 * Connect site with wp.com user
 *
 * @param {object}   Object                   - contains from and redirectFunc
 * @param {string}   Object.from              - Value that represents the redirect origin
 * @param {Function} Object.redirectFunc      - A function to handle the redirect, defaults to location.assign
 * @param {string}   [Object.redirectUri]     - A URI that the user will be redirected to
 * @param {boolean}  [Object.skipPricingPage] - A flag to skip the pricing page in the connection flow
 * @yield {object} Action object that will be yielded
 */
function* connectUser({
  from,
  redirectFunc,
  redirectUri,
  skipPricingPage
} = {}) {
  yield setUserIsConnecting(true);
  yield {
    type: CONNECT_USER,
    from,
    redirectFunc,
    redirectUri,
    skipPricingPage
  };
}

/**
 *
 * Register an site into jetpack
 *
 * @param {object} Object                   - contains registrationNonce and redirectUri
 * @param {string} Object.registrationNonce - Registration nonce
 * @param {string} Object.redirectUri       - URI that user will be redirected
 * @param {string} [Object.from]            - Value that represents the origin of the request (optional)
 * @yield {object} Action object that will be yielded
 * @return {Promise} Resolved or rejected value of registerSite
 */
function* registerSite({
  registrationNonce,
  redirectUri,
  from = ''
}) {
  yield clearRegistrationError();
  yield setSiteIsRegistering(true);
  try {
    const response = yield {
      type: REGISTER_SITE,
      registrationNonce,
      redirectUri,
      from
    };
    yield setConnectionStatus({
      isRegistered: true
    });
    yield setAuthorizationUrl(response.authorizeUrl);
    yield setSiteIsRegistering(false);
    return Promise.resolve(response);
  } catch (error) {
    yield setRegistrationError(error);
    yield setSiteIsRegistering(false);
    return Promise.reject(error);
  }
}

/**
 * Side effect action which will fetch a new list of connectedPlugins from the server
 *
 * @return {Promise} - Promise which resolves when the product status is activated.
 */
const refreshConnectedPlugins = () => async ({
  dispatch
}) => {
  return await new Promise(resolve => {
    return _automattic_jetpack_api__WEBPACK_IMPORTED_MODULE_0__["default"].fetchConnectedPlugins().then(data => {
      dispatch(setConnectedPlugins(data));
      resolve(data);
    });
  });
};
const actions = {
  setConnectionStatus,
  setConnectionStatusIsFetching,
  fetchConnectionStatus,
  fetchAuthorizationUrl,
  setSiteIsRegistering,
  setUserIsConnecting,
  setRegistrationError,
  clearRegistrationError,
  setAuthorizationUrl,
  registerSite,
  connectUser,
  disconnectUserSuccess,
  setConnectedPlugins,
  refreshConnectedPlugins,
  setConnectionErrors,
  setIsOfflineMode
};


/***/ },

/***/ "../../js-packages/connection/state/assignLocation.jsx"
/*!*************************************************************!*\
  !*** ../../js-packages/connection/state/assignLocation.jsx ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assignLocation: () => (/* binding */ assignLocation)
/* harmony export */ });
/* istanbul ignore file */ // This is intended to be mocked in tests, because we can't mock window.location.

/**
 * Wrapper for window.location.assign
 *
 * So we can mock it in tests.
 *
 * @param {string} url - URL to assign.
 * @return {undefined}
 */
function assignLocation(url) {
  return window.location.assign(url);
}

/***/ },

/***/ "../../js-packages/connection/state/controls.jsx"
/*!*******************************************************!*\
  !*** ../../js-packages/connection/state/controls.jsx ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _automattic_jetpack_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @automattic/jetpack-api */ "../../js-packages/api/index.jsx");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assignLocation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assignLocation */ "../../js-packages/connection/state/assignLocation.jsx");
/* harmony import */ var _store_id__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store-id */ "../../js-packages/connection/state/store-id.jsx");




const REGISTER_SITE = ({
  redirectUri,
  from
}) => _automattic_jetpack_api__WEBPACK_IMPORTED_MODULE_0__["default"].registerSite(null, redirectUri, from);
const CONNECT_USER = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.createRegistryControl)(({
  resolveSelect
}) => ({
  from,
  redirectFunc,
  redirectUri,
  skipPricingPage
} = {}) => {
  return new Promise((resolve, reject) => {
    resolveSelect(_store_id__WEBPACK_IMPORTED_MODULE_3__["default"]).getAuthorizationUrl(redirectUri).then(authorizationUrl => {
      const redirect = redirectFunc || (url => (0,_assignLocation__WEBPACK_IMPORTED_MODULE_2__.assignLocation)(url));
      const url = new URL(authorizationUrl);
      if (skipPricingPage) {
        url.searchParams.set('skip_pricing', 'true');
      }
      if (from) {
        url.searchParams.set('from', encodeURIComponent(from));
      }
      const finalUrl = url.toString();
      redirect(finalUrl);
      resolve(finalUrl);
    }).catch(error => {
      reject(error);
    });
  });
});
const FETCH_AUTHORIZATION_URL = ({
  redirectUri
}) => _automattic_jetpack_api__WEBPACK_IMPORTED_MODULE_0__["default"].fetchAuthorizationUrl(redirectUri);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  FETCH_AUTHORIZATION_URL,
  REGISTER_SITE,
  CONNECT_USER
});

/***/ },

/***/ "../../js-packages/connection/state/reducers.jsx"
/*!*******************************************************!*\
  !*** ../../js-packages/connection/state/reducers.jsx ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "../../js-packages/connection/state/actions.jsx");


const connectionStatus = (state = {}, action) => {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__.SET_CONNECTION_STATUS:
      return {
        ...state,
        ...action.connectionStatus
      };
    case _actions__WEBPACK_IMPORTED_MODULE_1__.DISCONNECT_USER_SUCCESS:
      return {
        ...state,
        isUserConnected: false
      };
  }
  return state;
};
const connectedPlugins = (state = {}, action) => {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__.SET_CONNECTED_PLUGINS:
      return action.connectedPlugins;
  }
  return state;
};
const connectionStatusIsFetching = (state = false, action) => {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__.SET_CONNECTION_STATUS_IS_FETCHING:
      return action.isFetching;
  }
  return state;
};
const siteIsRegistering = (state = false, action) => {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__.SET_SITE_IS_REGISTERING:
      return action.isRegistering;
  }
  return state;
};
const userIsConnecting = (state = false, action) => {
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
const userConnectionData = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
const connectionErrors = (state = {}, action) => {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__.SET_CONNECTION_ERRORS:
      return action.connectionErrors;
  }
  return state;
};
const isOfflineMode = (state = false, action) => {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__.SET_IS_OFFLINE_MODE:
      return action.isConnecting;
  }
  return state;
};
const reducers = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  connectionStatus,
  connectionStatusIsFetching,
  siteIsRegistering,
  userIsConnecting,
  registrationError,
  authorizationUrl,
  userConnectionData,
  connectedPlugins,
  connectionErrors,
  isOfflineMode
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducers);

/***/ },

/***/ "../../js-packages/connection/state/resolvers.jsx"
/*!********************************************************!*\
  !*** ../../js-packages/connection/state/resolvers.jsx ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "../../js-packages/connection/state/actions.jsx");
/* harmony import */ var _store_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store-id */ "../../js-packages/connection/state/store-id.jsx");



const connectionResolvers = {
  getAuthorizationUrl: {
    isFulfilled: (state, ...args) => {
      const hasAuthorization = Boolean(state.authorizationUrl);
      const hasFinishedResolution = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)(_store_id__WEBPACK_IMPORTED_MODULE_2__["default"]).hasFinishedResolution('getAuthorizationUrl', args);

      // we need to set finish resolution to fix a problem when using resolveSelect,
      // since it looks for finishResolution to return the value
      // ref: https://github.com/WordPress/gutenberg/blob/5dbf7ca8a285f5cab65ebf7ab87dafeb6118b6aa/packages/data/src/redux-store/index.js#L342
      if (hasAuthorization && !hasFinishedResolution) {
        (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)(_store_id__WEBPACK_IMPORTED_MODULE_2__["default"]).finishResolution('getAuthorizationUrl', args);
      }
      return hasAuthorization;
    },
    *fulfill(redirectUri) {
      const response = yield _actions__WEBPACK_IMPORTED_MODULE_1__["default"].fetchAuthorizationUrl(redirectUri);
      yield _actions__WEBPACK_IMPORTED_MODULE_1__["default"].setAuthorizationUrl(response.authorizeUrl);
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  ...connectionResolvers
});

/***/ },

/***/ "../../js-packages/connection/state/selectors.jsx"
/*!********************************************************!*\
  !*** ../../js-packages/connection/state/selectors.jsx ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getWpcomUser = state => {
  return state?.userConnectionData?.currentUser?.wpcomUser;
};
const getBlogId = state => {
  return state?.userConnectionData?.currentUser?.blogId;
};
const connectionSelectors = {
  getConnectionStatus: state => state.connectionStatus || {},
  /**
   * Checks whether the store is fetching the connection status from the server
   *
   * @deprecated since 0.14.0
   * @return {boolean} Is the store is fetching the connection status from the server?
   */
  getConnectionStatusIsFetching: () => false,
  getSiteIsRegistering: state => state.siteIsRegistering || false,
  getUserIsConnecting: state => state.userIsConnecting || false,
  getRegistrationError: state => state.registrationError || false,
  getAuthorizationUrl: state => state.authorizationUrl || false,
  getUserConnectionData: state => state.userConnectionData || false,
  getConnectedPlugins: state => state.connectedPlugins || [],
  getConnectionErrors: state => state.connectionErrors || [],
  getIsOfflineMode: state => state.isOfflineMode || false,
  getWpcomUser,
  getBlogId
};
const selectors = {
  ...connectionSelectors
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selectors);

/***/ },

/***/ "../../js-packages/connection/state/store-holder.jsx"
/*!***********************************************************!*\
  !*** ../../js-packages/connection/state/store-holder.jsx ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);

class storeHolder {
  static store = null;
  static mayBeInit(storeId, storeConfig) {
    if (null === storeHolder.store) {
      storeHolder.store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createReduxStore)(storeId, storeConfig);
      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register)(storeHolder.store);
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storeHolder);

/***/ },

/***/ "../../js-packages/connection/state/store-id.jsx"
/*!*******************************************************!*\
  !*** ../../js-packages/connection/state/store-id.jsx ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const STORE_ID = 'jetpack-connection';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (STORE_ID);

/***/ },

/***/ "../../js-packages/connection/state/store.jsx"
/*!****************************************************!*\
  !*** ../../js-packages/connection/state/store.jsx ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   STORE_ID: () => (/* reexport safe */ _store_id__WEBPACK_IMPORTED_MODULE_7__["default"])
/* harmony export */ });
/* harmony import */ var _automattic_jetpack_script_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @automattic/jetpack-script-data */ "@automattic/jetpack-script-data");
/* harmony import */ var _automattic_jetpack_script_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_automattic_jetpack_script_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "../../js-packages/connection/state/actions.jsx");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls */ "../../js-packages/connection/state/controls.jsx");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ "../../js-packages/connection/state/reducers.jsx");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resolvers */ "../../js-packages/connection/state/resolvers.jsx");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selectors */ "../../js-packages/connection/state/selectors.jsx");
/* harmony import */ var _store_holder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store-holder */ "../../js-packages/connection/state/store-holder.jsx");
/* harmony import */ var _store_id__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store-id */ "../../js-packages/connection/state/store-id.jsx");
/* eslint-disable no-console */









const initialState = window.JP_CONNECTION_INITIAL_STATE || (0,_automattic_jetpack_script_data__WEBPACK_IMPORTED_MODULE_0__.getScriptData)()?.connection;
if (!initialState) {
  console.error('Jetpack Connection package: Initial state is missing. Check documentation to see how to use the Connection composer package to set up the initial state.');
}
_store_holder__WEBPACK_IMPORTED_MODULE_6__["default"].mayBeInit(_store_id__WEBPACK_IMPORTED_MODULE_7__["default"], {
  __experimentalUseThunks: true,
  reducer: _reducers__WEBPACK_IMPORTED_MODULE_3__["default"],
  actions: _actions__WEBPACK_IMPORTED_MODULE_1__["default"],
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_5__["default"],
  resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_4__["default"],
  controls: _controls__WEBPACK_IMPORTED_MODULE_2__["default"],
  initialState: initialState || {}
});


/***/ },

/***/ "../../js-packages/shared-extension-utils/index.js"
/*!*********************************************************!*\
  !*** ../../js-packages/shared-extension-utils/index.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JETPACK_DATA_PATH: () => (/* reexport safe */ _src_get_jetpack_data__WEBPACK_IMPORTED_MODULE_1__.JETPACK_DATA_PATH),
/* harmony export */   JETPACK_MODULES_STORE_ID: () => (/* reexport safe */ _automattic_jetpack_shared_stores__WEBPACK_IMPORTED_MODULE_17__.JETPACK_MODULES_STORE_ID),
/* harmony export */   PLAN_TYPE_FREE: () => (/* reexport safe */ _src_hooks_use_plan_type__WEBPACK_IMPORTED_MODULE_12__.PLAN_TYPE_FREE),
/* harmony export */   PLAN_TYPE_TIERED: () => (/* reexport safe */ _src_hooks_use_plan_type__WEBPACK_IMPORTED_MODULE_12__.PLAN_TYPE_TIERED),
/* harmony export */   PLAN_TYPE_UNLIMITED: () => (/* reexport safe */ _src_hooks_use_plan_type__WEBPACK_IMPORTED_MODULE_12__.PLAN_TYPE_UNLIMITED),
/* harmony export */   canUserPurchasePlan: () => (/* reexport safe */ _src_libs__WEBPACK_IMPORTED_MODULE_20__.canUserPurchasePlan),
/* harmony export */   getBlockIconComponent: () => (/* reexport safe */ _src_get_block_icon_from_metadata__WEBPACK_IMPORTED_MODULE_15__.getBlockIconComponent),
/* harmony export */   getBlockIconProp: () => (/* reexport safe */ _src_get_block_icon_from_metadata__WEBPACK_IMPORTED_MODULE_15__.getBlockIconProp),
/* harmony export */   getIconColor: () => (/* reexport safe */ _src_block_icons__WEBPACK_IMPORTED_MODULE_0__.getIconColor),
/* harmony export */   getJetpackBlocksVariation: () => (/* reexport safe */ _src_get_jetpack_blocks_variation__WEBPACK_IMPORTED_MODULE_16__["default"]),
/* harmony export */   getJetpackData: () => (/* reexport safe */ _src_get_jetpack_data__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   getJetpackEditorAction: () => (/* reexport safe */ _src_block_editor_actions__WEBPACK_IMPORTED_MODULE_22__.getJetpackEditorAction),
/* harmony export */   getJetpackExtensionAvailability: () => (/* reexport safe */ _src_get_jetpack_extension_availability__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   getRequiredPlan: () => (/* reexport safe */ _src_plan_utils__WEBPACK_IMPORTED_MODULE_8__.getRequiredPlan),
/* harmony export */   getSiteFragment: () => (/* reexport safe */ _src_get_site_fragment__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   getUpgradeUrl: () => (/* reexport safe */ _src_plan_utils__WEBPACK_IMPORTED_MODULE_8__.getUpgradeUrl),
/* harmony export */   getUsableBlockProps: () => (/* reexport safe */ _src_plan_utils__WEBPACK_IMPORTED_MODULE_8__.getUsableBlockProps),
/* harmony export */   handleJetpackEditorAction: () => (/* reexport safe */ _src_block_editor_actions__WEBPACK_IMPORTED_MODULE_22__.handleJetpackEditorAction),
/* harmony export */   hasFeatureFlag: () => (/* reexport safe */ _src_has_feature_flag__WEBPACK_IMPORTED_MODULE_19__["default"]),
/* harmony export */   isComingSoon: () => (/* reexport safe */ _src_site_type_utils__WEBPACK_IMPORTED_MODULE_4__.isComingSoon),
/* harmony export */   isCurrentUserConnected: () => (/* reexport safe */ _src_is_current_user_connected__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   isMyJetpackAvailable: () => (/* reexport safe */ _src_is_my_jetpack_available__WEBPACK_IMPORTED_MODULE_18__["default"]),
/* harmony export */   isPrivateSite: () => (/* reexport safe */ _src_site_type_utils__WEBPACK_IMPORTED_MODULE_4__.isPrivateSite),
/* harmony export */   isStillUsableWithFreePlan: () => (/* reexport safe */ _src_plan_utils__WEBPACK_IMPORTED_MODULE_8__.isStillUsableWithFreePlan),
/* harmony export */   isUpgradable: () => (/* reexport safe */ _src_plan_utils__WEBPACK_IMPORTED_MODULE_8__.isUpgradable),
/* harmony export */   isUpgradeNudgeEnabled: () => (/* reexport safe */ _src_plan_utils__WEBPACK_IMPORTED_MODULE_8__.isUpgradeNudgeEnabled),
/* harmony export */   isUserConnected: () => (/* reexport safe */ _src_libs__WEBPACK_IMPORTED_MODULE_20__.isUserConnected),
/* harmony export */   registerJetpackPlugin: () => (/* reexport safe */ _src_register_jetpack_plugin__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   removeJetpackEditorAction: () => (/* reexport safe */ _src_block_editor_actions__WEBPACK_IMPORTED_MODULE_22__.removeJetpackEditorAction),
/* harmony export */   requiresPaidPlan: () => (/* reexport safe */ _src_plan_utils__WEBPACK_IMPORTED_MODULE_8__.requiresPaidPlan),
/* harmony export */   shouldUseInternalLinks: () => (/* reexport safe */ _src_should_use_internal_links__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   store: () => (/* reexport safe */ _automattic_jetpack_shared_stores__WEBPACK_IMPORTED_MODULE_17__.store),
/* harmony export */   useAnalytics: () => (/* reexport safe */ _src_hooks_use_analytics__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   useAutosaveAndRedirect: () => (/* reexport safe */ _src_hooks_use_autosave_and_redirect__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   useModuleStatus: () => (/* reexport safe */ _src_hooks_use_module_status__WEBPACK_IMPORTED_MODULE_14__["default"]),
/* harmony export */   usePlanType: () => (/* reexport safe */ _src_hooks_use_plan_type__WEBPACK_IMPORTED_MODULE_12__.usePlanType),
/* harmony export */   useRefInterval: () => (/* reexport safe */ _src_hooks_use_ref_interval__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   useUpgradeFlow: () => (/* reexport safe */ _src_hooks_use_upgrade_flow__WEBPACK_IMPORTED_MODULE_21__["default"]),
/* harmony export */   withHasWarningIsInteractiveClassNames: () => (/* reexport safe */ _src_with_has_warning_is_interactive_class_names__WEBPACK_IMPORTED_MODULE_7__["default"])
/* harmony export */ });
/* harmony import */ var _src_block_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/block-icons */ "../../js-packages/shared-extension-utils/src/block-icons.js");
/* harmony import */ var _src_get_jetpack_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/get-jetpack-data */ "../../js-packages/shared-extension-utils/src/get-jetpack-data.js");
/* harmony import */ var _src_get_site_fragment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/get-site-fragment */ "../../js-packages/shared-extension-utils/src/get-site-fragment.js");
/* harmony import */ var _src_should_use_internal_links__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/should-use-internal-links */ "../../js-packages/shared-extension-utils/src/should-use-internal-links.js");
/* harmony import */ var _src_site_type_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/site-type-utils */ "../../js-packages/shared-extension-utils/src/site-type-utils.js");
/* harmony import */ var _src_get_jetpack_extension_availability__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/get-jetpack-extension-availability */ "../../js-packages/shared-extension-utils/src/get-jetpack-extension-availability.ts");
/* harmony import */ var _src_register_jetpack_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/register-jetpack-plugin */ "../../js-packages/shared-extension-utils/src/register-jetpack-plugin.js");
/* harmony import */ var _src_with_has_warning_is_interactive_class_names__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/with-has-warning-is-interactive-class-names */ "../../js-packages/shared-extension-utils/src/with-has-warning-is-interactive-class-names/index.jsx");
/* harmony import */ var _src_plan_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/plan-utils */ "../../js-packages/shared-extension-utils/src/plan-utils.js");
/* harmony import */ var _src_is_current_user_connected__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/is-current-user-connected */ "../../js-packages/shared-extension-utils/src/is-current-user-connected.js");
/* harmony import */ var _src_hooks_use_analytics__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/hooks/use-analytics */ "../../js-packages/shared-extension-utils/src/hooks/use-analytics.js");
/* harmony import */ var _src_hooks_use_autosave_and_redirect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/hooks/use-autosave-and-redirect */ "../../js-packages/shared-extension-utils/src/hooks/use-autosave-and-redirect/index.ts");
/* harmony import */ var _src_hooks_use_plan_type__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./src/hooks/use-plan-type */ "../../js-packages/shared-extension-utils/src/hooks/use-plan-type/index.ts");
/* harmony import */ var _src_hooks_use_ref_interval__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./src/hooks/use-ref-interval */ "../../js-packages/shared-extension-utils/src/hooks/use-ref-interval.ts");
/* harmony import */ var _src_hooks_use_module_status__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./src/hooks/use-module-status */ "../../js-packages/shared-extension-utils/src/hooks/use-module-status/index.js");
/* harmony import */ var _src_get_block_icon_from_metadata__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./src/get-block-icon-from-metadata */ "../../js-packages/shared-extension-utils/src/get-block-icon-from-metadata.js");
/* harmony import */ var _src_get_jetpack_blocks_variation__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./src/get-jetpack-blocks-variation */ "../../js-packages/shared-extension-utils/src/get-jetpack-blocks-variation.js");
/* harmony import */ var _automattic_jetpack_shared_stores__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @automattic/jetpack-shared-stores */ "@automattic/jetpack-shared-stores");
/* harmony import */ var _automattic_jetpack_shared_stores__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_automattic_jetpack_shared_stores__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _src_is_my_jetpack_available__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./src/is-my-jetpack-available */ "../../js-packages/shared-extension-utils/src/is-my-jetpack-available.js");
/* harmony import */ var _src_has_feature_flag__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./src/has-feature-flag */ "../../js-packages/shared-extension-utils/src/has-feature-flag.js");
/* harmony import */ var _src_libs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./src/libs */ "../../js-packages/shared-extension-utils/src/libs/index.js");
/* harmony import */ var _src_hooks_use_upgrade_flow__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./src/hooks/use-upgrade-flow */ "../../js-packages/shared-extension-utils/src/hooks/use-upgrade-flow/index.js");
/* harmony import */ var _src_block_editor_actions__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./src/block-editor-actions */ "../../js-packages/shared-extension-utils/src/block-editor-actions.js");
























/***/ },

/***/ "../../js-packages/shared-extension-utils/src/block-editor-actions.js"
/*!****************************************************************************!*\
  !*** ../../js-packages/shared-extension-utils/src/block-editor-actions.js ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getJetpackEditorAction: () => (/* binding */ getJetpackEditorAction),
/* harmony export */   handleJetpackEditorAction: () => (/* binding */ handleJetpackEditorAction),
/* harmony export */   removeJetpackEditorAction: () => (/* binding */ removeJetpackEditorAction)
/* harmony export */ });
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0__);

const JETPACK_EDITOR_ACTION = 'jetpack-editor-action';

/**
 * Get the Jetpack Editor action from the URL.
 *
 * @return {string | null} The Jetpack Editor action.
 */
function getJetpackEditorAction() {
  const url = new URL(window.location.href);
  return url.searchParams.get(JETPACK_EDITOR_ACTION);
}

/**
 * Remove the Jetpack Editor action from the URL.
 *
 */
function removeJetpackEditorAction() {
  const url = new URL(window.location.href);
  url.searchParams.delete(JETPACK_EDITOR_ACTION);
  window.history.replaceState(null, '', url.toString());
}

/**
 * Handle a particular Jetpack Editor action.
 *
 * If the callback returns true, the Jetpack Editor action will be removed from the URL.
 *
 * @param {string}               action   - The action to handle.
 * @param {() => (void|boolean)} callback - The callback to run when the action is handled.
 */
function handleJetpackEditorAction(action, callback) {
  _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0___default()(() => {
    const actionValue = getJetpackEditorAction();
    if (action !== actionValue) {
      return;
    }
    const removeQueryArg = callback();
    if (removeQueryArg) {
      removeJetpackEditorAction();
    }
  });
}

/***/ },

/***/ "../../js-packages/shared-extension-utils/src/block-icons.js"
/*!*******************************************************************!*\
  !*** ../../js-packages/shared-extension-utils/src/block-icons.js ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getIconColor: () => (/* binding */ getIconColor)
/* harmony export */ });
/**
 * Returns the icon color for Jetpack blocks.
 *
 * Green in the Jetpack context, otherwise black for Simple sites or Atomic sites.
 *
 * @return {null} HEX color for block editor icons
 */
function getIconColor() {
  return null;
}

/***/ },

/***/ "../../js-packages/shared-extension-utils/src/get-block-icon-from-metadata.js"
/*!************************************************************************************!*\
  !*** ../../js-packages/shared-extension-utils/src/get-block-icon-from-metadata.js ***!
  \************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBlockIconComponent: () => (/* binding */ getBlockIconComponent),
/* harmony export */   getBlockIconProp: () => (/* binding */ getBlockIconProp)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* wp:polyfill */
/* wp:polyfill esnext.iterator.constructor */
/* wp:polyfill esnext.iterator.for-each */


/**
 * Generate an icon as a React component from the SVG markup defined in a block.json metadata file.
 * This prevents us from duplicating the markup in various places.
 *
 * Note: using an `img` tag and passing the SVG markup as a data URI doesn't allow us to
 * dynamically set the icon color later on.
 *
 * @param {object} metadata - Block.json content
 * @return {import('react').Component} Icon component
 */
function getBlockIconComponent(metadata) {
  // Set default values
  const attrs = {};
  let tagName = 'span';
  let markup = metadata.icon;

  // Convert SVG from string to HTML element
  const placeholder = document.createElement('div');
  placeholder.innerHTML = metadata.icon;
  const svg = placeholder.querySelector('svg');

  // Get SVG attributes and content
  if (svg) {
    tagName = 'svg';
    markup = svg.innerHTML;
    Array.from(svg.attributes).forEach(({
      nodeName,
      nodeValue
    }) => attrs[nodeName] = nodeValue);
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(tagName, {
    ...attrs,
    dangerouslySetInnerHTML: {
      __html: markup || ''
    }
  });
}

/**
 * A block icon needs to be redefined on the front end as a React component, since a string - even
 * SVG markup - is interpreted as a dashicon. This function returns the object that must be passed
 * to the `icon` attribute when registering the block in the front end. It also sets the color
 * of the icon.
 *
 * @param {object} metadata - Block.json content
 * @return {object} Icon property for client registration
 */
function getBlockIconProp(metadata) {
  return {
    src: getBlockIconComponent(metadata)
  };
}

/***/ },

/***/ "../../js-packages/shared-extension-utils/src/get-jetpack-blocks-variation.js"
/*!************************************************************************************!*\
  !*** ../../js-packages/shared-extension-utils/src/get-jetpack-blocks-variation.js ***!
  \************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getJetpackBlocksVariation)
/* harmony export */ });
/* harmony import */ var _get_jetpack_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-jetpack-data */ "../../js-packages/shared-extension-utils/src/get-jetpack-data.js");

/**
 * Returns the jetpack block variation that is defined on the backend.
 *
 * @return {?string} options are ['production', 'beta', 'experimental']
 */
function getJetpackBlocksVariation() {
  const data = (0,_get_jetpack_data__WEBPACK_IMPORTED_MODULE_0__["default"])();
  return data?.blocks_variation ?? 'production';
}

/***/ },

/***/ "../../js-packages/shared-extension-utils/src/get-jetpack-data.js"
/*!************************************************************************!*\
  !*** ../../js-packages/shared-extension-utils/src/get-jetpack-data.js ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JETPACK_DATA_PATH: () => (/* binding */ JETPACK_DATA_PATH),
/* harmony export */   "default": () => (/* binding */ getJetpackData)
/* harmony export */ });
const JETPACK_DATA_PATH = 'Jetpack_Editor_Initial_State';

/**
 * Retrieves Jetpack editor state
 *
 * @deprecated Use the consolidated initial state using `getScriptData` from `@automattic/jetpack-script-data` instead. Feel free to extend it if needed.
 *
 * @return {object|null} The Jetpack Editor State.
 */
function getJetpackData() {
  return 'object' === typeof window ? window?.[JETPACK_DATA_PATH] ?? null : null;
}

/***/ },

/***/ "../../js-packages/shared-extension-utils/src/get-jetpack-extension-availability.ts"
/*!******************************************************************************************!*\
  !*** ../../js-packages/shared-extension-utils/src/get-jetpack-extension-availability.ts ***!
  \******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getJetpackExtensionAvailability)
/* harmony export */ });
/* harmony import */ var _get_jetpack_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-jetpack-data */ "../../js-packages/shared-extension-utils/src/get-jetpack-data.js");

/**
 * Return whether a Jetpack Gutenberg extension is available or not.
 *
 * @param {string} name - The extension's name (without the `jetpack/` prefix)
 * @return Object indicating if the extension is available and the reason why it is unavailable.
 */
function getJetpackExtensionAvailability(name) {
  const data = (0,_get_jetpack_data__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const available = data?.available_blocks?.[name]?.available ?? false;
  const unavailableReason = data?.available_blocks?.[name]?.unavailable_reason ?? 'unknown';
  const details = data?.available_blocks?.[name]?.details ?? {};
  return {
    available,
    ...(!available && {
      details,
      unavailableReason
    })
  };
}

/***/ },

/***/ "../../js-packages/shared-extension-utils/src/get-site-fragment.js"
/*!*************************************************************************!*\
  !*** ../../js-packages/shared-extension-utils/src/get-site-fragment.js ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getSiteFragment)
/* harmony export */ });
/* harmony import */ var _automattic_jetpack_script_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @automattic/jetpack-script-data */ "@automattic/jetpack-script-data");
/* harmony import */ var _automattic_jetpack_script_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_automattic_jetpack_script_data__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Returns the site fragment (slug) in the environment we're running Gutenberg in.
 *
 * @return {?string} Site fragment (slug)
 */
function getSiteFragment() {
  // Gutenberg in Jetpack adds a site fragment in the initial state
  if (window && window.Jetpack_Editor_Initial_State && window.Jetpack_Editor_Initial_State.siteFragment) {
    return window.Jetpack_Editor_Initial_State.siteFragment;
  }
  return (0,_automattic_jetpack_script_data__WEBPACK_IMPORTED_MODULE_0__.getScriptData)()?.site?.suffix ?? null;
}

/***/ },

/***/ "../../js-packages/shared-extension-utils/src/has-feature-flag.js"
/*!************************************************************************!*\
  !*** ../../js-packages/shared-extension-utils/src/has-feature-flag.js ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ hasFeatureFlag)
/* harmony export */ });
/* harmony import */ var _get_jetpack_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-jetpack-data */ "../../js-packages/shared-extension-utils/src/get-jetpack-data.js");


/**
 * Return the value of the Jetpack feature flag.
 *
 * To add a new feature flag, you need use the `jetpack_block_editor_feature_flags` filter.
 *
 * @param {string} flag - The feature flag to check.
 *
 * @return {boolean} Whether the current user is connected.
 */
function hasFeatureFlag(flag) {
  const jetpackData = (0,_get_jetpack_data__WEBPACK_IMPORTED_MODULE_0__["default"])();
  if (!jetpackData) {
    return false;
  }
  if (!jetpackData?.feature_flags) {
    return false;
  }
  return Boolean(jetpackData.feature_flags?.[flag]);
}

/***/ },

/***/ "../../js-packages/shared-extension-utils/src/hooks/use-analytics.js"
/*!***************************************************************************!*\
  !*** ../../js-packages/shared-extension-utils/src/hooks/use-analytics.js ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _automattic_jetpack_analytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @automattic/jetpack-analytics */ "../../js-packages/analytics/index.jsx");
/* harmony import */ var _automattic_jetpack_connection_use_connection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @automattic/jetpack-connection/use-connection */ "../../js-packages/connection/components/use-connection/index.ts");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);



const {
  tracks
} = _automattic_jetpack_analytics__WEBPACK_IMPORTED_MODULE_0__["default"];
const {
  recordEvent
} = tracks;
const useAnalytics = ({
  pageViewEventName = null,
  pageViewNamespace = 'jetpack',
  pageViewSuffix = 'page_view',
  pageViewEventProperties = {}
} = {}) => {
  const [pageViewRecorded, setPageViewRecorded] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    isUserConnected,
    isRegistered,
    userConnectionData = {}
  } = (0,_automattic_jetpack_connection_use_connection__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const {
    wpcomUser: {
      login,
      ID
    } = {},
    blogId
  } = userConnectionData.currentUser || {};

  /**
   * Record an event async
   * Check to ensure there is a connected user first
   */
  const recordEventAsync = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async (event, properties = {}) => {
    // Do nothing if there is not a connected user.
    if (!(isUserConnected && ID && login)) {
      return;
    }
    recordEvent(event, properties);
  }, [isUserConnected, ID, login]);

  /**
   * Initialize tracks with user and blog data.
   * This will only work if the user is connected.
   */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (!isUserConnected || !ID || !login || !blogId) {
      return;
    }
    _automattic_jetpack_analytics__WEBPACK_IMPORTED_MODULE_0__["default"].initialize(ID, login, {
      blog_id: blogId
    });
  }, [blogId, ID, login, isUserConnected]);

  /**
   * Track a page-view type event.
   * It's considered a page view event when the component is mounted.
   */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const pageViewEvent = pageViewEventName ? `${pageViewNamespace}_${pageViewEventName}_${pageViewSuffix}` : null;

    // Also, only run if the site is registered.
    if (!isRegistered) {
      return;
    }
    if (!pageViewEvent) {
      return;
    }

    // Ensuring we only record the view event once
    if (!pageViewRecorded) {
      recordEventAsync(pageViewEvent, pageViewEventProperties);
      setPageViewRecorded(true);
    }
  }, [pageViewRecorded, pageViewNamespace, pageViewEventName, pageViewSuffix, isRegistered, pageViewEventProperties, recordEventAsync]);
  return {
    recordEvent: recordEventAsync,
    tracks: tracks
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAnalytics);

/***/ },

/***/ "../../js-packages/shared-extension-utils/src/hooks/use-autosave-and-redirect/index.ts"
/*!*********************************************************************************************!*\
  !*** ../../js-packages/shared-extension-utils/src/hooks/use-autosave-and-redirect/index.ts ***!
  \*********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useAutosaveAndRedirect)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);


const noop = () => {};
/**
 * To handle the redirection
 * @param {string}   url                 - The redirect URL.
 * @param {Function} callback            - The callback of the redirection.
 * @param {boolean}  shouldOpenNewWindow - Whether to open the new window.
 * @return {Window | null} - The open window.
 */
function redirect(url, callback, shouldOpenNewWindow = false) {
  if (callback) {
    callback(url);
  }
  return shouldOpenNewWindow ? window.open(url, '_blank') : window.top.location.href = url;
}

/**
 * Hook to get properties for autosave and redirect.
 *
 * @param {string}   redirectUrl - The redirect URL.
 * @param {Function} onRedirect  - To handle the redirection.
 * @return Object containing properties to handle autosave and redirect.
 */
function useAutosaveAndRedirect(redirectUrl = null, onRedirect = noop) {
  const [isRedirecting, setIsRedirecting] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    isAutosaveablePost,
    isDirtyPost,
    currentPost
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const editorSelector = select('core/editor');
    return {
      isAutosaveablePost: editorSelector.isEditedPostAutosaveable(),
      isDirtyPost: editorSelector.isEditedPostDirty(),
      currentPost: editorSelector.getCurrentPost()
    };
  }, []);
  const isPostEditor = Object.keys(currentPost).length > 0;
  const isWidgetEditor = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    if (window.wp?.customize) {
      return true;
    }
    return !!select('core/edit-widgets');
  });

  // Alias. Save post by dispatch.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const savePost = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)('core/editor').savePost;

  // For the site editor, save entities
  const entityRecords = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return select('core').__experimentalGetDirtyEntityRecords();
  });

  // Save
  const saveEntities = async () => {
    for (let i = 0; i < entityRecords.length; i++) {
      // await is needed here due to the loop.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)('core').saveEditedEntityRecord(entityRecords[i].kind, entityRecords[i].name, entityRecords[i].key);
    }
  };
  const autosave = async event => {
    event?.preventDefault();
    if (isPostEditor) {
      /**
       * If there are not unsaved values, return.
       * If the post is not auto-savable, return.
       */
      if (isDirtyPost && isAutosaveablePost) {
        await savePost(event);
      }
    } else {
      // Save entities in the site editor.
      await saveEntities();
    }
  };
  const autosaveAndRedirect = async event => {
    event?.preventDefault();

    // Lock re-redirecting attempts.
    if (isRedirecting) {
      return;
    }
    setIsRedirecting(true);
    autosave(event).then(() => {
      if (redirectUrl) {
        redirect(redirectUrl, onRedirect, isWidgetEditor);
      }
    });
  };
  return {
    autosave,
    autosaveAndRedirect,
    isRedirecting
  };
}

/***/ },

/***/ "../../js-packages/shared-extension-utils/src/hooks/use-module-status/index.js"
/*!*************************************************************************************!*\
  !*** ../../js-packages/shared-extension-utils/src/hooks/use-module-status/index.js ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _automattic_jetpack_shared_stores__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @automattic/jetpack-shared-stores */ "@automattic/jetpack-shared-stores");
/* harmony import */ var _automattic_jetpack_shared_stores__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_automattic_jetpack_shared_stores__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);




/**
 * @typedef {object} ModuleStatus
 * @property {boolean}  isModuleActive   - Whether the module is active.
 * @property {boolean}  isChangingStatus - Whether the module's status is currently being changed.
 * @property {boolean}  isLoadingModules - Whether the modules are currently being loaded.
 * @property {Function} changeStatus     - Function to change the module's status.
 */

/**
 * Manage a Jetpack module's status (get and set).
 *
 * @param {string} name - The module's name.
 * @return {ModuleStatus} Module status/control object.
 */
const useModuleStatus = name => {
  const {
    isModuleActive,
    isChangingStatus,
    isLoadingModules
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(selectData => {
    const data = selectData(_automattic_jetpack_shared_stores__WEBPACK_IMPORTED_MODULE_0__.JETPACK_MODULES_STORE_ID);
    return {
      isModuleActive: data.isModuleActive(name),
      isChangingStatus: data.isModuleUpdating(name),
      isLoadingModules: data.areModulesLoading(name)
    };
  }, [name]);
  const {
    updateJetpackModuleStatus
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_automattic_jetpack_shared_stores__WEBPACK_IMPORTED_MODULE_0__.JETPACK_MODULES_STORE_ID);
  const changeStatus = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(value => updateJetpackModuleStatus({
    name,
    active: value
  }), [name, updateJetpackModuleStatus]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => ({
    isLoadingModules,
    isChangingStatus,
    isModuleActive,
    changeStatus
  }), [isLoadingModules, isChangingStatus, isModuleActive, changeStatus]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useModuleStatus);

/***/ },

/***/ "../../js-packages/shared-extension-utils/src/hooks/use-plan-type/index.ts"
/*!*********************************************************************************!*\
  !*** ../../js-packages/shared-extension-utils/src/hooks/use-plan-type/index.ts ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PLAN_TYPE_FREE: () => (/* binding */ PLAN_TYPE_FREE),
/* harmony export */   PLAN_TYPE_TIERED: () => (/* binding */ PLAN_TYPE_TIERED),
/* harmony export */   PLAN_TYPE_UNLIMITED: () => (/* binding */ PLAN_TYPE_UNLIMITED),
/* harmony export */   usePlanType: () => (/* binding */ usePlanType)
/* harmony export */ });
const PLAN_TYPE_FREE = 'free';
const PLAN_TYPE_TIERED = 'tiered';
const PLAN_TYPE_UNLIMITED = 'unlimited';
/**
 * Simple hook to get the plan type from the current tier
 *
 * @param {object} currentTier - the current tier from the AI Feature data
 * @return {PlanType} the plan type
 */
const usePlanType = currentTier => {
  if (!currentTier) {
    return null;
  }
  if (currentTier?.value === 0) {
    return PLAN_TYPE_FREE;
  }
  if (currentTier?.value === 1) {
    return PLAN_TYPE_UNLIMITED;
  }
  return PLAN_TYPE_TIERED;
};

/***/ },

/***/ "../../js-packages/shared-extension-utils/src/hooks/use-ref-interval.ts"
/*!******************************************************************************!*\
  !*** ../../js-packages/shared-extension-utils/src/hooks/use-ref-interval.ts ***!
  \******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const setRafInterval = (callback, timeout = 0) => {
  const interval = timeout < 0 ? 0 : timeout;
  const handle = {
    id: 0
  };
  let startTime = Date.now();
  const loop = () => {
    const nowTime = Date.now();
    if (nowTime - startTime >= interval) {
      startTime = nowTime;
      callback();
    }
    handle.id = requestAnimationFrame(loop);
  };
  handle.id = requestAnimationFrame(loop);
  return handle;
};
const clearRafInterval = handle => {
  if (handle) {
    cancelAnimationFrame(handle.id);
  }
};

/**
 * Invoke a function on an interval that uses requestAnimationFrame.
 *
 * @param {Function} callback - Function to invoke
 * @param {number}   timeout  - Interval timout in MS.
 *
 * @return {Function} Function to clear the interval.
 */
const useRafInterval = (callback, timeout = 0) => {
  const timerRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const callbackRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(callback);
  callbackRef.current = callback;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    timerRef.current = setRafInterval(() => {
      callbackRef.current();
    }, timeout);
    return () => {
      clearRafInterval(timerRef.current);
    };
  }, [timeout]);
  const clear = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    clearRafInterval(timerRef.current);
  }, []);
  return clear;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useRafInterval);

/***/ },

/***/ "../../js-packages/shared-extension-utils/src/hooks/use-upgrade-flow/index.js"
/*!************************************************************************************!*\
  !*** ../../js-packages/shared-extension-utils/src/hooks/use-upgrade-flow/index.js ***!
  \************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useUpgradeFlow)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _plan_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../plan-utils */ "../../js-packages/shared-extension-utils/src/plan-utils.js");
/* harmony import */ var _use_autosave_and_redirect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../use-autosave-and-redirect */ "../../js-packages/shared-extension-utils/src/hooks/use-autosave-and-redirect/index.ts");




const noop = () => {};
const HOOK_OPEN_CHECKOUT_MODAL = 'a8c.wpcom-block-editor.openCheckoutModal';

/**
 * Use this hook when you need to implement a component that leads the user to the checkout page.
 * @param {string}   planSlug   - The plan slug to upgrade to.
 * @param {Function} onRedirect - A callback function to be called when the user is redirected to the checkout page.
 *
 * @return {Array} - An array with the following elements:
 */
function useUpgradeFlow(planSlug, onRedirect = noop) {
  const {
    checkoutUrl,
    planData
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    const editorSelector = select('core/editor');
    const planSelector = select('wordpress-com/plans');
    const {
      id: postId,
      type: postType
    } = editorSelector.getCurrentPost();
    const plan = planSelector && planSelector.getPlan(planSlug);
    return {
      checkoutUrl: (0,_plan_utils__WEBPACK_IMPORTED_MODULE_2__.getUpgradeUrl)({
        plan,
        planSlug,
        postId,
        postType
      }),
      planData: plan
    };
  }, [planSlug]);
  const {
    autosave,
    autosaveAndRedirect,
    isRedirecting
  } = (0,_use_autosave_and_redirect__WEBPACK_IMPORTED_MODULE_3__["default"])(checkoutUrl, onRedirect);
  const goToCheckoutPage = async event => {
    event.preventDefault();

    // If this action is available, the feature is enabled to open the checkout
    // in a modal rather than redirect the user there, away from the editor.
    if ((0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.hasAction)(HOOK_OPEN_CHECKOUT_MODAL)) {
      event.preventDefault();
      autosave(event);
      (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.doAction)(HOOK_OPEN_CHECKOUT_MODAL, {
        products: [planData]
      });
      return;
    }
    autosaveAndRedirect(event);
  };
  return [checkoutUrl, goToCheckoutPage, isRedirecting, planData];
}

/***/ },

/***/ "../../js-packages/shared-extension-utils/src/is-current-user-connected.js"
/*!*********************************************************************************!*\
  !*** ../../js-packages/shared-extension-utils/src/is-current-user-connected.js ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isCurrentUserConnected)
/* harmony export */ });
/* harmony import */ var _get_jetpack_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-jetpack-data */ "../../js-packages/shared-extension-utils/src/get-jetpack-data.js");


/**
 * Return whether the current user is connected to WP.com.
 *
 * @return {boolean} Whether the current user is connected.
 */
function isCurrentUserConnected() {
  if ((0,_get_jetpack_data__WEBPACK_IMPORTED_MODULE_0__["default"])()?.jetpack?.is_current_user_connected || window?.JP_CONNECTION_INITIAL_STATE?.connectionStatus?.isUserConnected) {
    return true;
  }
  return false;
}

/***/ },

/***/ "../../js-packages/shared-extension-utils/src/is-my-jetpack-available.js"
/*!*******************************************************************************!*\
  !*** ../../js-packages/shared-extension-utils/src/is-my-jetpack-available.js ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isMyJetpackAvailable)
/* harmony export */ });
/* harmony import */ var _get_jetpack_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-jetpack-data */ "../../js-packages/shared-extension-utils/src/get-jetpack-data.js");


/**
 * Return whether My Jetpack is available or not while in editor context.
 *
 * @see https://github.com/Automattic/jetpack/pull/38500 introduced the is_my_jetpack_available flag
 * The value is the same that can be found on Initial_State.siteData.showMyJetpack (dashboard context)
 *
 * @return {boolean} Object indicating if My Jetpack is available (so to navigate to interstitials and product pages)
 */
function isMyJetpackAvailable() {
  return (0,_get_jetpack_data__WEBPACK_IMPORTED_MODULE_0__["default"])()?.jetpack?.is_my_jetpack_available === true;
}

/***/ },

/***/ "../../js-packages/shared-extension-utils/src/libs/connection/index.ts"
/*!*****************************************************************************!*\
  !*** ../../js-packages/shared-extension-utils/src/libs/connection/index.ts ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   canUserPurchasePlan: () => (/* binding */ canUserPurchasePlan),
/* harmony export */   isUserConnected: () => (/* binding */ isUserConnected)
/* harmony export */ });
/* harmony import */ var _automattic_jetpack_script_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @automattic/jetpack-script-data */ "@automattic/jetpack-script-data");
/* harmony import */ var _automattic_jetpack_script_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_automattic_jetpack_script_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debug */ "../../../node_modules/.pnpm/debug@4.4.3/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_1__);
/**
 * External dependencies
 */


const initialState = window?.JP_CONNECTION_INITIAL_STATE;
const debug = debug__WEBPACK_IMPORTED_MODULE_1___default()('shared-extension-utils:connection');
let hasCheckedConnection = false;
const debugOnce = content => {
  if (!hasCheckedConnection) {
    debug(content);
    hasCheckedConnection = true;
  }
};

/**
 * Return the initial connection status.
 *
 * @return {boolean} true if the user is connected, false otherwise.
 */
function isUserConnected() {
  if ((0,_automattic_jetpack_script_data__WEBPACK_IMPORTED_MODULE_0__.isSimpleSite)()) {
    debugOnce('Simple site connected ✅');
    return true;
  }
  if ((0,_automattic_jetpack_script_data__WEBPACK_IMPORTED_MODULE_0__.isWoASite)()) {
    debugOnce('Atomic site connected ✅');
    return true;
  }
  if (initialState?.connectionStatus?.isUserConnected) {
    debugOnce('Jetpack user is connected ✅');
    return true;
  }
  debugOnce('User is not connected ❌');
  return false;
}

/**
 * Return whether the user can purchase plan.
 *
 * @return {boolean} true if the user can purchase plan, false otherwise.
 */
function canUserPurchasePlan() {
  if ((0,_automattic_jetpack_script_data__WEBPACK_IMPORTED_MODULE_0__.isSimpleSite)()) {
    // Roles on simple sites can't be inferred from the connection status.
    return true;
  }
  const permissions = initialState?.userConnectionData?.currentUser?.permissions ?? {};
  return !permissions.manage_options === false;
}

/***/ },

/***/ "../../js-packages/shared-extension-utils/src/libs/index.js"
/*!******************************************************************!*\
  !*** ../../js-packages/shared-extension-utils/src/libs/index.js ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   canUserPurchasePlan: () => (/* reexport safe */ _connection__WEBPACK_IMPORTED_MODULE_0__.canUserPurchasePlan),
/* harmony export */   isUserConnected: () => (/* reexport safe */ _connection__WEBPACK_IMPORTED_MODULE_0__.isUserConnected)
/* harmony export */ });
/* harmony import */ var _connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connection */ "../../js-packages/shared-extension-utils/src/libs/connection/index.ts");


/***/ },

/***/ "../../js-packages/shared-extension-utils/src/plan-utils.js"
/*!******************************************************************!*\
  !*** ../../js-packages/shared-extension-utils/src/plan-utils.js ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRequiredPlan: () => (/* binding */ getRequiredPlan),
/* harmony export */   getUpgradeUrl: () => (/* binding */ getUpgradeUrl),
/* harmony export */   getUsableBlockProps: () => (/* binding */ getUsableBlockProps),
/* harmony export */   isStillUsableWithFreePlan: () => (/* binding */ isStillUsableWithFreePlan),
/* harmony export */   isUpgradable: () => (/* binding */ isUpgradable),
/* harmony export */   isUpgradeNudgeEnabled: () => (/* binding */ isUpgradeNudgeEnabled),
/* harmony export */   requiresPaidPlan: () => (/* binding */ requiresPaidPlan)
/* harmony export */ });
/* harmony import */ var _automattic_jetpack_script_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @automattic/jetpack-script-data */ "@automattic/jetpack-script-data");
/* harmony import */ var _automattic_jetpack_script_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_automattic_jetpack_script_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _get_jetpack_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-jetpack-data */ "../../js-packages/shared-extension-utils/src/get-jetpack-data.js");
/* harmony import */ var _get_jetpack_extension_availability__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-jetpack-extension-availability */ "../../js-packages/shared-extension-utils/src/get-jetpack-extension-availability.ts");
/* harmony import */ var _get_site_fragment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./get-site-fragment */ "../../js-packages/shared-extension-utils/src/get-site-fragment.js");
/* wp:polyfill */
/* wp:polyfill es.array.includes */


const __ = _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__;





/**
 * Return the checkout URL to upgrade the site plan,
 * depending on the plan, postId, and postType site values.
 *
 * @param {object} siteParams          - Site params used to build the URL.
 * @param {string} siteParams.planSlug - Plan slug.
 * @param {object} siteParams.plan     - An object with details about the plan.
 * @param {number} siteParams.postId   - Post id.
 * @param {string} siteParams.postType - Post type.
 * @return {string}                     Upgrade URL.
 */
function getUpgradeUrl({
  planSlug,
  plan,
  postId,
  postType
}) {
  // WP.com plan objects have a dedicated `path_slug` field, Jetpack plan objects don't.
  const planPathSlug = planSlug.startsWith('jetpack_') ? planSlug : plan?.path_slug;

  // The full site editor has no set post type.
  const redirect_to = (undefined === postType ? () => {
    const queryParams = new URLSearchParams(window.location.search);
    return (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_2__.addQueryArgs)(window.location.protocol + `//${(0,_get_site_fragment__WEBPACK_IMPORTED_MODULE_5__["default"])().replace('::', '/')}/wp-admin/site-editor.php`, {
      postId: queryParams.get('postId'),
      postType: queryParams.get('postType'),
      plan_upgraded: 1
    });
  } : () => {
    // The editor for CPTs has an `edit/` route fragment prefixed.
    const postTypeEditorRoutePrefix = ['page', 'post'].includes(postType) ? '' : 'edit';

    // Post-checkout: redirect back here.
    return (0,_automattic_jetpack_script_data__WEBPACK_IMPORTED_MODULE_0__.isSimpleSite)() ? (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_2__.addQueryArgs)('/' + [postTypeEditorRoutePrefix, postType, (0,_get_site_fragment__WEBPACK_IMPORTED_MODULE_5__["default"])(), postId].filter(Boolean).join('/'), {
      plan_upgraded: 1
    }) : (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_2__.addQueryArgs)(window.location.protocol + `//${(0,_get_site_fragment__WEBPACK_IMPORTED_MODULE_5__["default"])().replace('::', '/')}/wp-admin/post.php`, {
      action: 'edit',
      post: postId,
      plan_upgraded: 1
    });
  })();

  // Redirect to calypso plans page for WoC sites.
  if ((0,_automattic_jetpack_script_data__WEBPACK_IMPORTED_MODULE_0__.isWoASite)()) {
    return (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_2__.addQueryArgs)(`https://wordpress.com/plans/${(0,_get_site_fragment__WEBPACK_IMPORTED_MODULE_5__["default"])()}`, {
      redirect_to,
      customerType: 'business'
    });
  }
  return planPathSlug && (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_2__.addQueryArgs)(`https://wordpress.com/checkout/${(0,_get_site_fragment__WEBPACK_IMPORTED_MODULE_5__["default"])()}/${planPathSlug}`, {
    redirect_to
  });
}

/**
 * Check if the block is upgradable, based on whether
 * the block requires a paid plan.
 *
 * @param {string} name - Block name.
 * @return {boolean} True if the block is upgradable, false otherwise.
 */
function isUpgradable(name) {
  if (!name) {
    return false;
  }
  const blockName = /^jetpack\//.test(name) ? name.substr(8, name.length) : name;
  const {
    available,
    unavailableReason
  } = (0,_get_jetpack_extension_availability__WEBPACK_IMPORTED_MODULE_4__["default"])(blockName);
  return !available && 'missing_plan' === unavailableReason;
}

/**
 * Checks whether the block requires a paid plan or not.
 *
 * @param {string} unavailableReason - The reason why block is unavailable
 * @param {object} details           - The block details
 * @return {string|boolean} Either false if the block doesn't require a paid plan, or the actual plan name it requires.
 */
function requiresPaidPlan(unavailableReason, details) {
  if (unavailableReason === 'missing_plan') {
    return details.required_plan;
  }
  return false;
}

/**
 * Returns the required plan slug for a passed block name.
 *
 * @param {string} name - Block name.
 * @return {string|boolean} Plan name if the block is upgradable, false otherwise.
 */
function getRequiredPlan(name) {
  if (!name) {
    return false;
  }
  const blockName = /^jetpack\//.test(name) ? name.substr(8, name.length) : name;
  const {
    details,
    unavailableReason
  } = (0,_get_jetpack_extension_availability__WEBPACK_IMPORTED_MODULE_4__["default"])(blockName);
  return requiresPaidPlan(unavailableReason, details);
}

/*
 * Usable blocks list with a free plan.
 * This array contains blocks that can be usable
 * even with a free plan, as well as properties
 * used to handle specific behaviour.
 */
const usableBlockWithFreePlan = [{
  name: 'core/cover',
  mediaPlaceholder: true,
  mediaReplaceFlow: true,
  fileType: 'video',
  description: __('Upgrade your plan to use video covers', "jetpack-podcast")
}, {
  name: 'core/audio',
  mediaPlaceholder: true,
  mediaReplaceFlow: true,
  fileType: 'audio',
  description: __('Upgrade your plan to upload audio', "jetpack-podcast")
}];

/**
 * Return whether upgrade nudges are enabled or not.
 *
 * @return {boolean} True if the Upgrade Nudge is enable. Otherwise, False.
 */
function isUpgradeNudgeEnabled() {
  return (0,_get_jetpack_data__WEBPACK_IMPORTED_MODULE_3__["default"])()?.jetpack?.enable_upgrade_nudge ?? false;
}

/*
 * Some blocks are still usable with a free plan.
 * We can handle their dual behavior defining specifically
 * when to show the upgrade banner
 * through or the Paid Block context.
 *
 * @param {string} name - Block name to check.
 * @returns {boolean} True is the block is usable with a Free plan. Otherwise, False.
 */
const isStillUsableWithFreePlan = name => usableBlockWithFreePlan.some(v => v.name === name);
const getUsableBlockProps = blockName => usableBlockWithFreePlan.filter(({
  name
}) => name === blockName)[0];

/***/ },

/***/ "../../js-packages/shared-extension-utils/src/register-jetpack-plugin.js"
/*!*******************************************************************************!*\
  !*** ../../js-packages/shared-extension-utils/src/register-jetpack-plugin.js ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ registerJetpackPlugin)
/* harmony export */ });
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _get_jetpack_extension_availability__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-jetpack-extension-availability */ "../../js-packages/shared-extension-utils/src/get-jetpack-extension-availability.ts");



/**
 * Registers a Gutenberg block if the availability requirements are met.
 *
 * @param {string} name     - The plugin's name
 * @param {object} settings - The plugin's settings.
 * @return {object|boolean} Either false if the plugin is not available, or the results of `registerPlugin`
 */
function registerJetpackPlugin(name, settings) {
  const {
    available,
    unavailableReason
  } = (0,_get_jetpack_extension_availability__WEBPACK_IMPORTED_MODULE_1__["default"])(name);
  const unavailable = !available;
  if (unavailable) {
    // eslint-disable-next-line no-undef -- webpack defines it
    if (true) {
      // eslint-disable-next-line no-console
      console.warn(`Plugin ${name} couldn't be registered because it is unavailable (${unavailableReason}).`);
    }
    return false;
  }
  return (0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)(`jetpack-${name}`, settings);
}

/***/ },

/***/ "../../js-packages/shared-extension-utils/src/should-use-internal-links.js"
/*!*********************************************************************************!*\
  !*** ../../js-packages/shared-extension-utils/src/should-use-internal-links.js ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ shouldUseInternalLinks)
/* harmony export */ });
/* harmony import */ var _automattic_jetpack_script_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @automattic/jetpack-script-data */ "@automattic/jetpack-script-data");
/* harmony import */ var _automattic_jetpack_script_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_automattic_jetpack_script_data__WEBPACK_IMPORTED_MODULE_0__);
/* wp:polyfill */
/* wp:polyfill esnext.iterator.constructor */
/* wp:polyfill esnext.iterator.some */


/**
 * Return whether to use internal Jetpack admin links or not.
 *
 * @return {boolean} True if Jetpack admin links are available and should be used, false otherwise.
 */
function shouldUseInternalLinks() {
  const {
    connectedPlugins,
    connectionStatus
  } = (0,_automattic_jetpack_script_data__WEBPACK_IMPORTED_MODULE_0__.getScriptData)()?.connection ?? {};
  return (
    // Some admin pages require the site to be connected (e.g. Privacy)
    connectionStatus?.isActive &&
    // Admin pages are part of the Jetpack plugin and require it to be installed
    connectedPlugins?.some(({
      slug
    }) => 'jetpack' === slug)
  );
}

/***/ },

/***/ "../../js-packages/shared-extension-utils/src/site-type-utils.js"
/*!***********************************************************************!*\
  !*** ../../js-packages/shared-extension-utils/src/site-type-utils.js ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isComingSoon: () => (/* binding */ isComingSoon),
/* harmony export */   isPrivateSite: () => (/* binding */ isPrivateSite)
/* harmony export */ });
/* harmony import */ var _get_jetpack_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-jetpack-data */ "../../js-packages/shared-extension-utils/src/get-jetpack-data.js");


/**
 * Return whether the current blog is set to private. (if blog_public option is -1)
 *
 * @return {boolean} whether the current blog is set to private.
 */
function isPrivateSite() {
  const jetpackData = (0,_get_jetpack_data__WEBPACK_IMPORTED_MODULE_0__["default"])();
  return jetpackData?.jetpack?.is_private_site ?? false;
}

/**
 * Return whether the current site is coming soon (i.e. not launched yet).
 * This is only available for WordPress.com sites so far.
 *
 * @return {boolean} whether the current site is coming soon.
 */
function isComingSoon() {
  const jetpackData = (0,_get_jetpack_data__WEBPACK_IMPORTED_MODULE_0__["default"])();
  return jetpackData?.jetpack?.is_coming_soon ?? false;
}

/***/ },

/***/ "../../js-packages/shared-extension-utils/src/with-has-warning-is-interactive-class-names/index.jsx"
/*!**********************************************************************************************************!*\
  !*** ../../js-packages/shared-extension-utils/src/with-has-warning-is-interactive-class-names/index.jsx ***!
  \**********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "../../js-packages/shared-extension-utils/src/with-has-warning-is-interactive-class-names/style.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



// Injecting the `has-warning` class into the block wrapper component gives us
// the right kind of borders around the block, both visually and conceptually.
// However, it also adds styling to prevent user interaction with that block.
// We thus add a new `is-interactive` class to be able to override that behavior.

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (name => (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__.createHigherOrderComponent)(BlockListBlock => props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(BlockListBlock, {
  ...props,
  className: props.name === name ? 'has-warning is-interactive' : props.className
}), 'withHasWarningIsInteractiveClassNames'));
__webpack_require__.dn(__WEBPACK_DEFAULT_EXPORT__);

/***/ },

/***/ "./src/blocks/podcast-episode/edit.tsx"
/*!*********************************************!*\
  !*** ./src/blocks/podcast-episode/edit.tsx ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PodcastEpisodeEdit)
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/date */ "@wordpress/date");
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_date__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! clsx */ "../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _dashboard_hooks_use_podcast_settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../dashboard/hooks/use-podcast-settings */ "./src/dashboard/hooks/use-podcast-settings.ts");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./block.json */ "./src/blocks/podcast-episode/block.json");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./icons */ "./src/blocks/podcast-episode/icons/index.ts");
/* harmony import */ var _util_get_validated_attributes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./util/get-validated-attributes */ "./src/blocks/podcast-episode/util/get-validated-attributes.ts");
/* harmony import */ var _util_time_code__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./util/time-code */ "./src/blocks/podcast-episode/util/time-code.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__);
/* wp:polyfill */
/* wp:polyfill esnext.iterator.constructor */
/* wp:polyfill esnext.iterator.filter */
/* wp:polyfill esnext.iterator.map */









const __ = _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__,
  _x = _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__._x;







const AUDIO_VIDEO_MIME_TYPES = ['audio', 'video'];
const EPISODE_TYPE_OPTIONS = [{
  label: __('Full', "jetpack-podcast"),
  value: 'full'
}, {
  label: __('Trailer', "jetpack-podcast"),
  value: 'trailer'
}, {
  label: __('Bonus', "jetpack-podcast"),
  value: 'bonus'
}];
const TRANSCRIPT_TYPE_OPTIONS = [{
  label: __('WebVTT (text/vtt)', "jetpack-podcast"),
  value: 'text/vtt'
}, {
  label: __('HTML (text/html)', "jetpack-podcast"),
  value: 'text/html'
}, {
  label: __('SRT (application/srt)', "jetpack-podcast"),
  value: 'application/srt'
}, {
  label: __('JSON (application/json)', "jetpack-podcast"),
  value: 'application/json'
}];
function PeopleEditor({
  people,
  onChange
}) {
  const updatePerson = (index, patch) => {
    const next = people.map((person, i) => i === index ? {
      ...person,
      ...patch
    } : person);
    onChange(next);
  };
  const removePerson = index => onChange(people.filter((_, i) => i !== index));
  const addPerson = () => onChange([...people, {
    name: '',
    role: '',
    href: '',
    img: ''
  }]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
    children: [people.map((person, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_9__["default"])('jetpack-podcast-episode__person-editor', {
        'jetpack-podcast-episode__person-editor--alt': index % 2 === 1
      }),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
        label: __('Name', "jetpack-podcast"),
        value: person.name || '',
        onChange: name => updatePerson(index, {
          name
        }),
        __nextHasNoMarginBottom: true,
        __next40pxDefaultSize: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
        label: __('Role', "jetpack-podcast"),
        help: __('e.g. host, guest, producer.', "jetpack-podcast"),
        value: person.role || '',
        onChange: role => updatePerson(index, {
          role
        }),
        __nextHasNoMarginBottom: true,
        __next40pxDefaultSize: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
        label: __('Profile URL', "jetpack-podcast"),
        type: "url",
        value: person.href || '',
        onChange: href => updatePerson(index, {
          href
        }),
        __nextHasNoMarginBottom: true,
        __next40pxDefaultSize: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
        label: __('Image URL', "jetpack-podcast"),
        type: "url",
        value: person.img || '',
        onChange: img => updatePerson(index, {
          img
        }),
        __nextHasNoMarginBottom: true,
        __next40pxDefaultSize: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: "link",
        isDestructive: true,
        onClick: () => removePerson(index),
        children: __('Remove person', "jetpack-podcast")
      })]
    }, index)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      variant: "secondary",
      onClick: addPerson,
      children: __('Add person', "jetpack-podcast")
    })]
  });
}
function PodcastEpisodeEdit({
  attributes,
  setAttributes,
  context
}) {
  const validated = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useMemo)(() => (0,_util_get_validated_attributes__WEBPACK_IMPORTED_MODULE_13__.getValidatedAttributes)(_block_json__WEBPACK_IMPORTED_MODULE_11__.attributes, attributes), [attributes]);
  const {
    mediaId,
    mediaUrl,
    mediaType,
    mediaMimeType,
    episodeNumber,
    seasonNumber,
    episodeType,
    explicit,
    duration,
    transcriptUrl,
    transcriptType,
    chaptersUrl,
    chaptersType,
    locationName,
    license,
    licenseUrl,
    people = [],
    showPoster,
    coverArt
  } = validated;
  const {
    postId,
    postType
  } = context || {};
  const [postTitle] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.useEntityProp)('postType', postType, 'title', postId);
  const [postDate] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.useEntityProp)('postType', postType, 'date', postId);
  const [authorId] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.useEntityProp)('postType', postType, 'author', postId);
  const [featuredImageId] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.useEntityProp)('postType', postType, 'featured_media', postId);
  // `post_excerpt` is the show notes — feed `<description>` / `<itunes:summary>`
  // read from here. Bound to the same REST field as the sidebar Excerpt panel
  // so the two controls stay in sync.
  const [postExcerpt, setPostExcerpt] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.useEntityProp)('postType', postType, 'excerpt', postId);
  const {
    data: podcastSettings
  } = (0,_dashboard_hooks_use_podcast_settings__WEBPACK_IMPORTED_MODULE_10__.usePodcastSettings)();
  const showCoverUrl = podcastSettings?.podcasting_image || '';
  const postAuthor = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    const author = authorId ? select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.store).getUser(authorId) : null;
    return author?.name || '';
  }, [authorId]);
  const featuredImageUrl = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    if (!featuredImageId) {
      return '';
    }
    const media = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.store).getMedia(featuredImageId);
    return media?.source_url || '';
  }, [featuredImageId]);

  // Editor preview mirrors the PHP chain: episode override → featured image → show cover.
  const coverArtUrl = coverArt?.url || featuredImageUrl || showCoverUrl;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
  const [uploadError, setUploadError] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useState)(null);
  const onSelectMedia = async media => {
    if (!media || !media.url) {
      return;
    }
    const type = media.type === 'video' ? 'video' : 'audio';

    // `fileLength` on the attachment shim is the ID3 `length_formatted` string
    // (e.g. "12:00"); fall back to computing from seconds if only a number is
    // available.
    const nextDuration = duration || typeof media.fileLength === 'string' && media.fileLength || (media.duration ? (0,_util_time_code__WEBPACK_IMPORTED_MODULE_14__.convertSecondsToTimeCode)(media.duration) : '');
    const immediate = {
      mediaId: media.id,
      mediaUrl: media.url,
      mediaType: type,
      mediaMimeType: media.mime || media.mime_type || '',
      duration: nextDuration || ''
    };
    setAttributes(immediate);
    if (!media.id) {
      return;
    }

    // Backfill empty audio metadata from the attachment's ID3 data
    // (parsed by WordPress via wp_read_audio_metadata on upload).
    try {
      const attachment = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
        path: `/wp/v2/media/${media.id}`
      });
      const details = attachment?.media_details || {};
      const patch = {};
      if (!immediate.duration && details.length_formatted) {
        patch.duration = details.length_formatted;
      } else if (!immediate.duration && details.length) {
        patch.duration = (0,_util_time_code__WEBPACK_IMPORTED_MODULE_14__.convertSecondsToTimeCode)(details.length);
      }
      if (!immediate.mediaMimeType && attachment?.mime_type) {
        patch.mediaMimeType = attachment.mime_type;
      }
      if (Object.keys(patch).length) {
        setAttributes(patch);
      }
    } catch {
      // Non-fatal: media metadata is a nice-to-have, the user can fill fields manually.
    }
  };
  if (!postId || !postType) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
      ...blockProps,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Placeholder, {
        icon: _icons__WEBPACK_IMPORTED_MODULE_12__.microphone,
        label: __('Podcast Episode', "jetpack-podcast"),
        instructions: __('This block reads the title, author, and date from the post it lives in. Drop it inside a podcast post or singular template.', "jetpack-podcast")
      })
    });
  }
  if (!mediaUrl) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
      ...blockProps,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaPlaceholder, {
        icon: _icons__WEBPACK_IMPORTED_MODULE_12__.microphone,
        labels: {
          title: __('Podcast Episode', "jetpack-podcast"),
          instructions: __('Upload an audio or video file, or pick one from the media library, to use as the episode audio.', "jetpack-podcast")
        },
        accept: "audio/*,video/*",
        allowedTypes: AUDIO_VIDEO_MIME_TYPES,
        onSelect: onSelectMedia,
        onError: message => setUploadError(message),
        notices: uploadError ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
          className: "components-notice is-error",
          children: uploadError
        }) : null
      })
    });
  }
  const dateSettings = (0,_wordpress_date__WEBPACK_IMPORTED_MODULE_5__.getSettings)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
    ...blockProps,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaReplaceFlow, {
          mediaId: mediaId,
          mediaURL: mediaUrl,
          allowedTypes: AUDIO_VIDEO_MIME_TYPES,
          accept: "audio/*,video/*",
          onSelect: onSelectMedia,
          onError: message => setUploadError(message),
          name: __('Replace audio/video', "jetpack-podcast")
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: __('Episode', "jetpack-podcast"),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextareaControl, {
          __nextHasNoMarginBottom: true,
          label: __('Show notes', "jetpack-podcast"),
          help: __('Episode description shown in Apple Podcasts, Spotify, and Pocket Casts. Synced with the post’s Excerpt.', "jetpack-podcast"),
          value: postExcerpt || '',
          onChange: setPostExcerpt,
          rows: 4
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: __('Season number', "jetpack-podcast"),
          type: "number",
          min: 1,
          value: seasonNumber ?? '',
          onChange: value => setAttributes({
            seasonNumber: value === '' ? undefined : Number(value)
          }),
          __nextHasNoMarginBottom: true,
          __next40pxDefaultSize: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: __('Episode number', "jetpack-podcast"),
          type: "number",
          min: 1,
          value: episodeNumber ?? '',
          onChange: value => setAttributes({
            episodeNumber: value === '' ? undefined : Number(value)
          }),
          __nextHasNoMarginBottom: true,
          __next40pxDefaultSize: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: __('Episode type', "jetpack-podcast"),
          value: episodeType,
          options: EPISODE_TYPE_OPTIONS,
          onChange: value => setAttributes({
            episodeType: value
          }),
          __nextHasNoMarginBottom: true,
          __next40pxDefaultSize: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: __('Explicit content', "jetpack-podcast"),
          checked: !!explicit,
          onChange: value => setAttributes({
            explicit: value
          }),
          __nextHasNoMarginBottom: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: __('Show cover art', "jetpack-podcast"),
          help: __('Display cover art alongside the player on the post page. Cover art stays in schema metadata either way.', "jetpack-podcast"),
          checked: !!showPoster,
          onChange: value => setAttributes({
            showPoster: value
          }),
          __nextHasNoMarginBottom: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
          __nextHasNoMarginBottom: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl.VisualLabel, {
            children: __('Cover art', "jetpack-podcast")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
              onSelect: media => setAttributes({
                coverArt: media?.url ? {
                  id: media.id,
                  url: media.url
                } : {}
              }),
              allowedTypes: ['image'],
              value: coverArt?.id,
              render: ({
                open
              }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                className: "jetpack-podcast-episode__cover-picker",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                  variant: "secondary",
                  className: (0,clsx__WEBPACK_IMPORTED_MODULE_9__["default"])('jetpack-podcast-episode__cover-button', {
                    'jetpack-podcast-episode__cover-button--empty': !coverArtUrl
                  }),
                  onClick: open,
                  "aria-label": coverArt?.url ? __('Replace cover art', "jetpack-podcast") : __('Set episode cover art', "jetpack-podcast"),
                  children: coverArtUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("img", {
                    src: coverArtUrl,
                    alt: ""
                  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
                    children: __('Set episode cover art', "jetpack-podcast")
                  })
                }), coverArt?.url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                  className: "jetpack-podcast-episode__cover-actions",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                    variant: "link",
                    onClick: open,
                    children: __('Replace', "jetpack-podcast")
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                    variant: "link",
                    isDestructive: true,
                    onClick: () => setAttributes({
                      coverArt: {}
                    }),
                    children: __('Remove', "jetpack-podcast")
                  })]
                })]
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
            className: "components-base-control__help",
            children: __('Defaults to the post’s featured image, then the show cover art from Settings → Writing → Podcasting.', "jetpack-podcast")
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: __('Audio', "jetpack-podcast"),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: __('Duration', "jetpack-podcast"),
          help: __('Formatted as HH:MM:SS or MM:SS.', "jetpack-podcast"),
          value: duration,
          onChange: value => setAttributes({
            duration: value
          }),
          __nextHasNoMarginBottom: true,
          __next40pxDefaultSize: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: __('Transcript URL', "jetpack-podcast"),
          type: "url",
          value: transcriptUrl,
          onChange: value => setAttributes({
            transcriptUrl: value
          }),
          __nextHasNoMarginBottom: true,
          __next40pxDefaultSize: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: __('Transcript format', "jetpack-podcast"),
          value: transcriptType,
          options: TRANSCRIPT_TYPE_OPTIONS,
          onChange: value => setAttributes({
            transcriptType: value
          }),
          __nextHasNoMarginBottom: true,
          __next40pxDefaultSize: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
          __nextHasNoMarginBottom: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl.VisualLabel, {
            children: __('Chapters', "jetpack-podcast")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
            className: "components-base-control__help",
            children: __('Link to a chapters JSON file hosted on a public URL. Podcasting 2.0 players fetch the file directly and display chapter markers in their UI.', "jetpack-podcast")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: __('Chapters file URL', "jetpack-podcast"),
            type: "url",
            value: chaptersUrl || '',
            onChange: value => setAttributes({
              chaptersUrl: value
            }),
            __nextHasNoMarginBottom: true,
            __next40pxDefaultSize: true
          }), chaptersUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            variant: "link",
            isDestructive: true,
            onClick: () => setAttributes({
              chaptersUrl: '',
              chaptersType: 'application/json+chapters'
            }),
            children: __('Remove chapters URL', "jetpack-podcast")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
            label: __('Chapters file format', "jetpack-podcast"),
            value: chaptersType || 'application/json+chapters',
            options: [{
              label: __('JSON Chapters (application/json+chapters)', "jetpack-podcast"),
              value: 'application/json+chapters'
            }, {
              label: __('JSON (application/json)', "jetpack-podcast"),
              value: 'application/json'
            }],
            onChange: value => setAttributes({
              chaptersType: value
            }),
            __nextHasNoMarginBottom: true,
            __next40pxDefaultSize: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ExternalLink, {
            href: "https://github.com/Podcastindex-org/podcast-namespace/blob/main/chapters/jsonChapters.md",
            children: __('Learn about the chapters JSON format', "jetpack-podcast")
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: __('Metadata', "jetpack-podcast"),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: __('Location', "jetpack-podcast"),
          help: __('Human-readable location associated with this episode.', "jetpack-podcast"),
          value: locationName,
          onChange: value => setAttributes({
            locationName: value
          }),
          __nextHasNoMarginBottom: true,
          __next40pxDefaultSize: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: __('License', "jetpack-podcast"),
          help: __('e.g. CC-BY-4.0 or all rights reserved.', "jetpack-podcast"),
          value: license,
          onChange: value => setAttributes({
            license: value
          }),
          __nextHasNoMarginBottom: true,
          __next40pxDefaultSize: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: __('License URL', "jetpack-podcast"),
          type: "url",
          value: licenseUrl,
          onChange: value => setAttributes({
            licenseUrl: value
          }),
          __nextHasNoMarginBottom: true,
          __next40pxDefaultSize: true
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: __('Podcasting 2.0', "jetpack-podcast"),
        initialOpen: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
          __nextHasNoMarginBottom: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl.VisualLabel, {
            children: __('Guests & credits', "jetpack-podcast")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
            className: "components-base-control__help",
            children: __('Credit hosts, guests, and producers. Read by Podcasting 2.0 apps (Podverse, Fountain, Podcast Addict) and rendered as a credits list on the post page.', "jetpack-podcast")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(PeopleEditor, {
            people: people,
            onChange: value => setAttributes({
              people: value
            })
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("article", {
      className: "jetpack-podcast-episode",
      children: [showPoster && coverArtUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("figure", {
        className: "jetpack-podcast-episode__poster",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("img", {
          src: coverArtUrl,
          alt: ""
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
        className: "jetpack-podcast-episode__body",
        children: [(seasonNumber || episodeNumber || episodeType !== 'full' || explicit) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("p", {
          className: "jetpack-podcast-episode__meta-line",
          children: [seasonNumber ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
            className: "jetpack-podcast-episode__season",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.sprintf)(/* translators: %d: season number. */
            __('Season %d', "jetpack-podcast"), seasonNumber)
          }) : null, episodeNumber ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
            className: "jetpack-podcast-episode__episode-number",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.sprintf)(/* translators: %d: episode number. */
            __('Episode %d', "jetpack-podcast"), episodeNumber)
          }) : null, episodeType === 'trailer' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
            className: "jetpack-podcast-episode__badge jetpack-podcast-episode__badge--trailer",
            children: __('Trailer', "jetpack-podcast")
          }), episodeType === 'bonus' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
            className: "jetpack-podcast-episode__badge jetpack-podcast-episode__badge--bonus",
            children: __('Bonus', "jetpack-podcast")
          }), explicit && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
            className: "jetpack-podcast-episode__badge jetpack-podcast-episode__badge--explicit",
            title: __('Explicit content', "jetpack-podcast"),
            children: _x('E', 'short label for explicit content', "jetpack-podcast")
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("h3", {
          className: "jetpack-podcast-episode__title",
          children: postTitle ? (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_7__.decodeEntities)(postTitle) : __('Untitled episode', "jetpack-podcast")
        }), (postAuthor || postDate || duration) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("p", {
          className: "jetpack-podcast-episode__byline",
          children: [postAuthor && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
            className: "jetpack-podcast-episode__author",
            children: postAuthor
          }), postDate && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("time", {
            className: "jetpack-podcast-episode__date",
            children: (0,_wordpress_date__WEBPACK_IMPORTED_MODULE_5__.dateI18n)(dateSettings.formats.date, postDate)
          }), duration && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
            className: "jetpack-podcast-episode__duration",
            children: duration
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
          className: "jetpack-podcast-episode__player",
          children: mediaType === 'video' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("video", {
            src: mediaUrl,
            controls: true,
            preload: "none",
            poster: showPoster ? coverArtUrl : undefined,
            "data-mime": mediaMimeType || undefined
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("audio", {
            src: mediaUrl,
            controls: true,
            preload: "none"
          })
        })]
      })]
    })]
  });
}

/***/ },

/***/ "./src/blocks/podcast-episode/icons/index.ts"
/*!***************************************************!*\
  !*** ./src/blocks/podcast-episode/icons/index.ts ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   microphone: () => (/* reexport safe */ _microphone__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _microphone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./microphone */ "./src/blocks/podcast-episode/icons/microphone.tsx");


/***/ },

/***/ "./src/blocks/podcast-episode/icons/microphone.tsx"
/*!*********************************************************!*\
  !*** ./src/blocks/podcast-episode/icons/microphone.tsx ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "24",
  height: "24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M12 2a5 5 0 0 0-5 5v5a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5zm0 2a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0V7a3 3 0 0 1 3-3zm-7 8a1 1 0 0 1 1 1 6 6 0 0 0 12 0 1 1 0 1 1 2 0 8 8 0 0 1-7 7.93V22h3v2H8v-2h3v-1.07A8 8 0 0 1 4 13a1 1 0 0 1 1-1z"
  })
}));

/***/ },

/***/ "./src/blocks/podcast-episode/save.tsx"
/*!*********************************************!*\
  !*** ./src/blocks/podcast-episode/save.tsx ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function save({
  attributes
}) {
  const {
    mediaUrl
  } = attributes;
  if (!mediaUrl) {
    return null;
  }
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
    ...blockProps,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(blockProps.className, 'jetpack-podcast-episode__direct-link'),
    href: mediaUrl,
    children: mediaUrl
  });
}

/***/ },

/***/ "./src/blocks/podcast-episode/util/get-validated-attributes.ts"
/*!*********************************************************************!*\
  !*** ./src/blocks/podcast-episode/util/get-validated-attributes.ts ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getValidatedAttributes: () => (/* binding */ getValidatedAttributes)
/* harmony export */ });
/* wp:polyfill */
/* wp:polyfill es.array.includes */
/* wp:polyfill esnext.iterator.constructor */
/* wp:polyfill esnext.iterator.reduce */
/**
 * Local copy of getValidatedAttributes from the Jetpack plugin's shared utils.
 *
 * Coerces user-supplied block attributes against the metadata definition so a
 * persisted typo (string `"true"`, out-of-range enum value, etc.) doesn't crash
 * the editor.
 */

const getValidatedAttributes = (attributeDetails, attributesToValidate) => Object.entries(attributesToValidate).reduce((ret, [attributeKey, attribute]) => {
  if (undefined === attributeDetails[attributeKey]) {
    return ret;
  }
  const {
    type,
    validator,
    validValues,
    default: defaultVal
  } = attributeDetails[attributeKey];
  if ('boolean' === type) {
    ret[attributeKey] = attribute === 'false' ? false : !!attribute;
  } else if (validator) {
    ret[attributeKey] = validator(attribute) ? attribute : defaultVal;
  } else if (validValues) {
    ret[attributeKey] = validValues.includes(attribute) ? attribute : defaultVal;
  } else {
    ret[attributeKey] = attribute;
  }
  return ret;
}, {});

/***/ },

/***/ "./src/blocks/podcast-episode/util/register-jetpack-block.ts"
/*!*******************************************************************!*\
  !*** ./src/blocks/podcast-episode/util/register-jetpack-block.ts ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerJetpackBlockFromMetadata: () => (/* binding */ registerJetpackBlockFromMetadata)
/* harmony export */ });
/* harmony import */ var _automattic_jetpack_shared_extension_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @automattic/jetpack-shared-extension-utils */ "../../js-packages/shared-extension-utils/index.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Lightweight `registerJetpackBlock` for this package.
 *
 * Bridges Jetpack's extension-availability gate (via `Jetpack_Gutenberg`) to
 * `registerBlockType`. Strips paid-plan / child-block / prefix branches that
 * the full shared helper carries — this block has none of those.
 *
 * @todo Replace with `@automattic/jetpack-shared-extension-utils` export when one lands.
 */



function registerJetpackBlockFromMetadata(metadata, settings) {
  const rawName = metadata.name.replace(/^jetpack\//, '');
  const {
    available,
    unavailableReason
  } = (0,_automattic_jetpack_shared_extension_utils__WEBPACK_IMPORTED_MODULE_0__.getJetpackExtensionAvailability)(rawName);
  if (!available) {
    if (true) {
      // eslint-disable-next-line no-console
      console.warn(`Block ${rawName} couldn't be registered because it is unavailable (${unavailableReason}).`);
    }
    return false;
  }
  return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(metadata, {
    ...settings,
    icon: (0,_automattic_jetpack_shared_extension_utils__WEBPACK_IMPORTED_MODULE_0__.getBlockIconProp)(metadata),
    attributes: metadata.attributes || {}
  });
}

/***/ },

/***/ "./src/blocks/podcast-episode/util/time-code.ts"
/*!******************************************************!*\
  !*** ./src/blocks/podcast-episode/util/time-code.ts ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertSecondsToTimeCode: () => (/* binding */ convertSecondsToTimeCode)
/* harmony export */ });
const convertSecondsToTimeCode = seconds => {
  const total = Math.max(0, Math.floor(Number(seconds) || 0));
  const h = Math.floor(total / 3600);
  const m = Math.floor(total % 3600 / 60);
  const s = total % 60;
  const mm = String(m).padStart(2, '0');
  const ss = String(s).padStart(2, '0');
  return h > 0 ? `${String(h).padStart(2, '0')}:${mm}:${ss}` : `${mm}:${ss}`;
};

/***/ },

/***/ "./src/dashboard/hooks/use-podcast-settings.ts"
/*!*****************************************************!*\
  !*** ./src/dashboard/hooks/use-podcast-settings.ts ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   refreshPodcastSettings: () => (/* binding */ refreshPodcastSettings),
/* harmony export */   usePodcastSettings: () => (/* binding */ usePodcastSettings),
/* harmony export */   useUpdatePodcastSettings: () => (/* binding */ useUpdatePodcastSettings)
/* harmony export */ });
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _podcatchers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../podcatchers */ "./src/dashboard/podcatchers.ts");
/* wp:polyfill */
/* wp:polyfill es.array.includes */
/* wp:polyfill es.set.difference.v2 */
/* wp:polyfill es.set.intersection.v2 */
/* wp:polyfill es.set.is-disjoint-from.v2 */
/* wp:polyfill es.set.is-subset-of.v2 */
/* wp:polyfill es.set.is-superset-of.v2 */
/* wp:polyfill es.set.symmetric-difference.v2 */
/* wp:polyfill es.set.union.v2 */
/* wp:polyfill esnext.iterator.constructor */
/* wp:polyfill esnext.iterator.some */





const __ = _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__;


const ENTITY_KIND = 'wpcom/v2';
const ENTITY_NAME = 'podcast/settings';
if (!(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.select)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_0__.store).getEntitiesConfig(ENTITY_KIND).some(({
  name
}) => name === ENTITY_NAME)) {
  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.dispatch)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_0__.store).addEntities([{
    kind: ENTITY_KIND,
    name: ENTITY_NAME,
    baseURL: `/${ENTITY_KIND}/${ENTITY_NAME}`,
    label: __('Podcast settings', "jetpack-podcast")
  }]);
}
const PODCAST_KEYS = ['podcasting_category_id', 'podcasting_title', 'podcasting_talent_name', 'podcasting_summary', 'podcasting_copyright', 'podcasting_explicit', 'podcasting_image', 'podcasting_image_id', 'podcasting_category_1', 'podcasting_category_2', 'podcasting_category_3', 'podcasting_email', 'podcasting_show_urls', 'podcasting_show_states'];

// Ids from the injected map, plus the record's own keys, so a missing map never
// drops stored values.
const podcatcherIds = source => [...new Set([...(0,_podcatchers__WEBPACK_IMPORTED_MODULE_6__.getPodcatcherIds)(), ...Object.keys(source)])];
const normalizeShowUrls = raw => {
  const source = raw && typeof raw === 'object' ? raw : {};
  const out = {};
  for (const id of podcatcherIds(source)) {
    const value = source[id];
    out[id] = typeof value === 'string' ? value : '';
  }
  return out;
};
const SHOW_STATES = ['', 'pending', 'active'];
const normalizeShowStates = raw => {
  const source = raw && typeof raw === 'object' ? raw : {};
  const out = {};
  for (const id of podcatcherIds(source)) {
    const value = source[id];
    out[id] = typeof value === 'string' && SHOW_STATES.includes(value) ? value : '';
  }
  return out;
};
const pickPodcastFields = raw => {
  const numericKey = key => key === 'podcasting_category_id' || key === 'podcasting_image_id';
  const toString = value => {
    if (typeof value === 'string') {
      return value;
    }
    if (value == null) {
      return '';
    }
    return String(value);
  };
  const out = {};
  for (const key of PODCAST_KEYS) {
    const value = raw[key];
    if (numericKey(key)) {
      out[key] = typeof value === 'number' ? value : Number(value ?? 0) || 0;
    } else if (key === 'podcasting_explicit') {
      out[key] = Boolean(value);
    } else if (key === 'podcasting_show_urls') {
      out[key] = normalizeShowUrls(value);
    } else if (key === 'podcasting_show_states') {
      out[key] = normalizeShowStates(value);
    } else if (key === 'podcasting_category_1' || key === 'podcasting_category_2' || key === 'podcasting_category_3') {
      // Legacy WPCOM stored Apple categories HTML-entity encoded
      // ("Fashion &amp; Beauty"); decode so the value matches the raw
      // catalog keys in topics.ts.
      out[key] = (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__.decodeEntities)(toString(value));
    } else {
      out[key] = toString(value);
    }
  }
  return out;
};
const refreshPodcastSettings = () => {
  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.dispatch)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_0__.store).invalidateResolution('getEntityRecord', [ENTITY_KIND, ENTITY_NAME]);
};
/**
 * Read the settings off the core-data entity, resolving on first use.
 *
 * @return `{ data, isLoading }`.
 */
function usePodcastSettings() {
  const record = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_0__.store).getEntityRecord(ENTITY_KIND, ENTITY_NAME), []);
  const hasResolved = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_0__.store).hasFinishedResolution('getEntityRecord', [ENTITY_KIND, ENTITY_NAME]), []);
  // Memoised so the derived object identity is stable across renders. Without
  // this, every render builds a new `data` object, breaking reference checks
  // downstream (Settings' isDirty was permanently true on `podcasting_show_urls`).
  const data = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => record ? pickPodcastFields(record) : undefined, [record]);
  return {
    data,
    isLoading: !hasResolved
  };
}

/**
 * Save a partial update through the entity; the server returns the full merged
 * record. Snackbars dispatch here unless `silent`.
 *
 * @return `{ mutate, mutateAsync, isPending }`.
 */
function useUpdatePodcastSettings() {
  const {
    saveEntityRecord
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_0__.store);
  const {
    createSuccessNotice,
    createErrorNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_5__.store);
  const isPending = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => !!select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_0__.store).isSavingEntityRecord(ENTITY_KIND, ENTITY_NAME, undefined), []);
  const mutateAsync = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async (updates, {
    silent = false
  } = {}) => {
    try {
      const record = await saveEntityRecord(ENTITY_KIND, ENTITY_NAME, updates);
      if (!record) {
        throw new Error('save returned no record');
      }
      if (!silent) {
        createSuccessNotice(__('Settings saved.', "jetpack-podcast"), {
          type: 'snackbar'
        });
      }
      return pickPodcastFields(record);
    } catch (error) {
      if (!silent) {
        createErrorNotice(__('Could not save your podcast settings. Please try again.', "jetpack-podcast"), {
          type: 'snackbar'
        });
      }
      throw error;
    }
  }, [saveEntityRecord, createSuccessNotice, createErrorNotice]);
  const mutate = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)((updates, {
    onSuccess,
    onError,
    silent = false
  } = {}) => {
    // Default no-op keeps the rejection from going uncaught when no `onError` is passed.
    mutateAsync(updates, {
      silent
    }).then(onSuccess, onError ?? (() => {}));
  }, [mutateAsync]);
  return {
    mutate,
    mutateAsync,
    isPending
  };
}

/***/ },

/***/ "./src/dashboard/podcatchers.ts"
/*!**************************************!*\
  !*** ./src/dashboard/podcatchers.ts ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPodcatcherIds: () => (/* binding */ getPodcatcherIds),
/* harmony export */   getShowHostsFor: () => (/* binding */ getShowHostsFor),
/* harmony export */   getShowUrlHosts: () => (/* binding */ getShowUrlHosts),
/* harmony export */   getShowUrlMaxLength: () => (/* binding */ getShowUrlMaxLength)
/* harmony export */ });
/* harmony import */ var _automattic_jetpack_script_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @automattic/jetpack-script-data */ "@automattic/jetpack-script-data");
/* harmony import */ var _automattic_jetpack_script_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_automattic_jetpack_script_data__WEBPACK_IMPORTED_MODULE_0__);

const DEFAULT_MAX_LENGTH = 2048;

/**
 * The directory→allowed-hosts map PHP sent us.
 *
 * @return The map, or `{}` if missing.
 */
const getShowUrlHosts = () => (0,_automattic_jetpack_script_data__WEBPACK_IMPORTED_MODULE_0__.getScriptData)()?.podcast?.show_url_hosts ?? {};

/**
 * Hosts allowed for one directory.
 *
 * @param id - Which directory.
 * @return Its hosts, or `[]` if missing.
 */
const getShowHostsFor = id => getShowUrlHosts()[id] ?? [];

/**
 * The directories PHP knows about.
 *
 * @return Their ids.
 */
const getPodcatcherIds = () => Object.keys(getShowUrlHosts());

/**
 * Longest show URL we accept.
 *
 * @return The limit.
 */
const getShowUrlMaxLength = () => (0,_automattic_jetpack_script_data__WEBPACK_IMPORTED_MODULE_0__.getScriptData)()?.podcast?.show_url_max_length ?? DEFAULT_MAX_LENGTH;

/***/ },

/***/ "jetpackConfig"
/*!**********************************************************!*\
  !*** external "{\"consumer_slug\":\"jetpack-podcast\"}" ***!
  \**********************************************************/
(module) {

"use strict";
if(typeof {"consumer_slug":"jetpack-podcast"} === 'undefined') { var e = new Error("Cannot find module '{\"consumer_slug\":\"jetpack-podcast\"}'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = {"consumer_slug":"jetpack-podcast"};

/***/ },

/***/ "@automattic/jetpack-script-data"
/*!******************************************!*\
  !*** external "JetpackScriptDataModule" ***!
  \******************************************/
(module) {

"use strict";
module.exports = window["JetpackScriptDataModule"];

/***/ },

/***/ "@automattic/jetpack-shared-stores"
/*!**************************************!*\
  !*** external "JetpackSharedStores" ***!
  \**************************************/
(module) {

"use strict";
module.exports = window["JetpackSharedStores"];

/***/ },

/***/ "react"
/*!************************!*\
  !*** external "React" ***!
  \************************/
(module) {

"use strict";
module.exports = window["React"];

/***/ },

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

"use strict";
module.exports = window["ReactJSXRuntime"];

/***/ },

/***/ "@wordpress/api-fetch"
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
(module) {

"use strict";
module.exports = window["wp"]["apiFetch"];

/***/ },

/***/ "@wordpress/block-editor"
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ },

/***/ "@wordpress/blocks"
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ },

/***/ "@wordpress/components"
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ },

/***/ "@wordpress/compose"
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
(module) {

"use strict";
module.exports = window["wp"]["compose"];

/***/ },

/***/ "@wordpress/core-data"
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
(module) {

"use strict";
module.exports = window["wp"]["coreData"];

/***/ },

/***/ "@wordpress/data"
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
(module) {

"use strict";
module.exports = window["wp"]["data"];

/***/ },

/***/ "@wordpress/date"
/*!******************************!*\
  !*** external ["wp","date"] ***!
  \******************************/
(module) {

"use strict";
module.exports = window["wp"]["date"];

/***/ },

/***/ "@wordpress/dom-ready"
/*!**********************************!*\
  !*** external ["wp","domReady"] ***!
  \**********************************/
(module) {

"use strict";
module.exports = window["wp"]["domReady"];

/***/ },

/***/ "@wordpress/element"
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ },

/***/ "@wordpress/hooks"
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
(module) {

"use strict";
module.exports = window["wp"]["hooks"];

/***/ },

/***/ "@wordpress/html-entities"
/*!**************************************!*\
  !*** external ["wp","htmlEntities"] ***!
  \**************************************/
(module) {

"use strict";
module.exports = window["wp"]["htmlEntities"];

/***/ },

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ },

/***/ "@wordpress/notices"
/*!*********************************!*\
  !*** external ["wp","notices"] ***!
  \*********************************/
(module) {

"use strict";
module.exports = window["wp"]["notices"];

/***/ },

/***/ "@wordpress/plugins"
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
(module) {

"use strict";
module.exports = window["wp"]["plugins"];

/***/ },

/***/ "@wordpress/primitives"
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
(module) {

"use strict";
module.exports = window["wp"]["primitives"];

/***/ },

/***/ "@wordpress/url"
/*!*****************************!*\
  !*** external ["wp","url"] ***!
  \*****************************/
(module) {

"use strict";
module.exports = window["wp"]["url"];

/***/ },

/***/ "../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"
/*!******************************************************************************!*\
  !*** ../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs ***!
  \******************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clsx: () => (/* binding */ clsx),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);

/***/ },

/***/ "./src/blocks/podcast-episode/block.json"
/*!***********************************************!*\
  !*** ./src/blocks/podcast-episode/block.json ***!
  \***********************************************/
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"jetpack/podcast-episode","title":"Podcast Episode","description":"Embed a single podcast episode from an audio or video file, with Podcasting 2.0 metadata.","keywords":["audio","podcast","episode"],"version":"1.0.0","textdomain":"jetpack-podcast","category":"embed","icon":"<svg viewBox=\'0 0 24 24\' width=\'24\' height=\'24\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M12 2a5 5 0 0 0-5 5v5a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5zm0 2a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0V7a3 3 0 0 1 3-3zm-7 8a1 1 0 0 1 1 1 6 6 0 0 0 12 0 1 1 0 1 1 2 0 8 8 0 0 1-7 7.93V22h3v2H8v-2h3v-1.07A8 8 0 0 1 4 13a1 1 0 0 1 1-1z\'/></svg>","usesContext":["postId","postType"],"supports":{"spacing":{"padding":true,"margin":true},"anchor":true,"customClassName":true,"className":true,"html":false,"multiple":true,"reusable":true},"attributes":{"mediaId":{"type":"integer"},"mediaUrl":{"type":"string"},"mediaType":{"type":"string","enum":["audio","video"]},"mediaMimeType":{"type":"string"},"episodeNumber":{"type":"integer"},"seasonNumber":{"type":"integer"},"episodeType":{"type":"string","enum":["full","trailer","bonus"],"default":"full"},"explicit":{"type":"boolean","default":false},"duration":{"type":"string","default":""},"transcriptUrl":{"type":"string","default":""},"transcriptType":{"type":"string","enum":["text/vtt","text/html","application/srt","application/json"],"default":"text/vtt"},"chaptersUrl":{"type":"string","default":""},"chaptersType":{"type":"string","default":"application/json+chapters"},"locationName":{"type":"string","default":""},"license":{"type":"string","default":""},"licenseUrl":{"type":"string","default":""},"people":{"type":"array","default":[]},"showPoster":{"type":"boolean","default":true},"coverArt":{"type":"object","default":{}},"soundbites":{"type":"array","default":[]},"alternateEnclosures":{"type":"array","default":[]}},"example":{"attributes":{"episodeNumber":1,"seasonNumber":1,"episodeType":"full","duration":"11:25"}}}');

/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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
/******/ 	/* webpack/runtime/set anonymous default export name */
/******/ 	(() => {
/******/ 		// set .name for anonymous default exports per ES spec
/******/ 		__webpack_require__.dn = (x) => {
/******/ 			(Object.getOwnPropertyDescriptor(x, "name") || {}).writable || Object.defineProperty(x, "name", { value: "default", configurable: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**********************************************!*\
  !*** ./src/blocks/podcast-episode/editor.ts ***!
  \**********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./src/blocks/podcast-episode/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/podcast-episode/edit.tsx");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/podcast-episode/save.tsx");
/* harmony import */ var _util_register_jetpack_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/register-jetpack-block */ "./src/blocks/podcast-episode/util/register-jetpack-block.ts");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/podcast-episode/editor.scss");





(0,_util_register_jetpack_block__WEBPACK_IMPORTED_MODULE_3__.registerJetpackBlockFromMetadata)(_block_json__WEBPACK_IMPORTED_MODULE_0__, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=editor.js.map