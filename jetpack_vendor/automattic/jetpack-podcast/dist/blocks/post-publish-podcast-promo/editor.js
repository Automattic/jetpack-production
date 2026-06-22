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

/***/ "./src/editor/post-publish-podcast-promo/style.scss"
/*!**********************************************************!*\
  !*** ./src/editor/post-publish-podcast-promo/style.scss ***!
  \**********************************************************/
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

/***/ "@wordpress/data"
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
(module) {

"use strict";
module.exports = window["wp"]["data"];

/***/ },

/***/ "@wordpress/editor"
/*!********************************!*\
  !*** external ["wp","editor"] ***!
  \********************************/
(module) {

"use strict";
module.exports = window["wp"]["editor"];

/***/ },

/***/ "@wordpress/element"
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ },

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ },

/***/ "@wordpress/plugins"
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
(module) {

"use strict";
module.exports = window["wp"]["plugins"];

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*********************************************************!*\
  !*** ./src/editor/post-publish-podcast-promo/index.tsx ***!
  \*********************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _automattic_jetpack_analytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @automattic/jetpack-analytics */ "../../js-packages/analytics/index.jsx");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.scss */ "./src/editor/post-publish-podcast-promo/style.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);








const __ = _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__;



const recordPromoEvent = (eventName, properties = {}) => {
  try {
    _automattic_jetpack_analytics__WEBPACK_IMPORTED_MODULE_0__["default"].tracks.recordEvent(eventName, properties);
  } catch {
    // Tracks is best-effort — never let it break the editor.
  }
};
const getPromoData = () => window.jetpackPostPublishPodcastPromo;

// The editor can emit an immediate request-close from the publish click/focus transition.
const requestCloseGracePeriod = 1000;
const PostPublishPodcastPromo = () => {
  const data = getPromoData();
  const [isOpen, setIsOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
  const [isClosedForSession, setIsClosedForSession] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
  const openedAt = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useRef)(0);
  const {
    isPostPublished,
    isPublishingPost,
    postType,
    postId
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    const editor = select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__.store);
    return {
      isPostPublished: editor.isCurrentPostPublished(),
      isPublishingPost: editor.isPublishingPost(),
      postType: editor.getCurrentPostType(),
      postId: editor.getCurrentPostId()
    };
  }, []);
  const wasPublishingPost = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.usePrevious)(isPublishingPost);
  const wasPostPublished = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.usePrevious)(isPostPublished);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
    if (!data || isClosedForSession) {
      return;
    }
    if (postType === 'post' && wasPublishingPost && !isPublishingPost && !wasPostPublished && isPostPublished) {
      window.setTimeout(() => {
        openedAt.current = Date.now();
        setIsOpen(true);
        recordPromoEvent('wpcom_post_publish_podcast_promo_shown', {
          post_id: Number(postId) || 0
        });
      });
    }
  }, [data, isClosedForSession, isPostPublished, isPublishingPost, postId, postType, wasPostPublished, wasPublishingPost]);
  const closeModal = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useCallback)((force = false) => {
    if (!force && Date.now() - openedAt.current < requestCloseGracePeriod) {
      return;
    }
    recordPromoEvent('wpcom_post_publish_podcast_promo_dismissed', {
      post_id: Number(postId) || 0,
      time_to_dismiss_ms: openedAt.current ? Date.now() - openedAt.current : 0
    });
    if (data) {
      _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
        path: data.dismissPath,
        method: 'POST'
      }).catch(() => {});
    }
    setIsClosedForSession(true);
    setIsOpen(false);
  }, [data, postId]);
  const handleRequestClose = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useCallback)(() => closeModal(), [closeModal]);
  const goToCreatePodcast = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useCallback)(() => {
    if (!data) {
      return;
    }
    recordPromoEvent('wpcom_post_publish_podcast_promo_clicked', {
      post_id: Number(postId) || 0,
      time_to_click_ms: openedAt.current ? Date.now() - openedAt.current : 0
    });
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      path: data.dismissPath,
      method: 'POST'
    }).catch(() => {}).finally(() => {
      (window.top || window).location.href = data.createUrl;
    });
  }, [data, postId]);
  if (!data || !isOpen) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    className: "jetpack-post-publish-podcast-promo-modal",
    title: "",
    aria: {
      labelledby: 'jetpack-post-publish-podcast-promo-modal-title'
    },
    onRequestClose: handleRequestClose,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: "jetpack-post-publish-podcast-promo-modal__hero",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("svg", {
        className: "jetpack-post-publish-podcast-promo-modal__soundwave",
        viewBox: "0 0 320 96",
        preserveAspectRatio: "none",
        "aria-hidden": "true",
        focusable: "false",
        xmlns: "http://www.w3.org/2000/svg",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("rect", {
          x: "8",
          y: "34",
          width: "5",
          height: "28",
          rx: "2.5"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("rect", {
          x: "24",
          y: "26",
          width: "5",
          height: "44",
          rx: "2.5"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("rect", {
          x: "40",
          y: "16",
          width: "5",
          height: "64",
          rx: "2.5"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("rect", {
          x: "56",
          y: "30",
          width: "5",
          height: "36",
          rx: "2.5"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("rect", {
          x: "72",
          y: "24",
          width: "5",
          height: "48",
          rx: "2.5"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("rect", {
          x: "88",
          y: "34",
          width: "5",
          height: "28",
          rx: "2.5"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("rect", {
          x: "104",
          y: "26",
          width: "5",
          height: "44",
          rx: "2.5"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("rect", {
          x: "120",
          y: "30",
          width: "5",
          height: "36",
          rx: "2.5"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("rect", {
          x: "136",
          y: "40",
          width: "5",
          height: "16",
          rx: "2.5"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("rect", {
          x: "179",
          y: "40",
          width: "5",
          height: "16",
          rx: "2.5"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("rect", {
          x: "195",
          y: "30",
          width: "5",
          height: "36",
          rx: "2.5"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("rect", {
          x: "211",
          y: "26",
          width: "5",
          height: "44",
          rx: "2.5"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("rect", {
          x: "227",
          y: "34",
          width: "5",
          height: "28",
          rx: "2.5"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("rect", {
          x: "243",
          y: "24",
          width: "5",
          height: "48",
          rx: "2.5"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("rect", {
          x: "259",
          y: "30",
          width: "5",
          height: "36",
          rx: "2.5"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("rect", {
          x: "275",
          y: "16",
          width: "5",
          height: "64",
          rx: "2.5"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("rect", {
          x: "291",
          y: "26",
          width: "5",
          height: "44",
          rx: "2.5"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("rect", {
          x: "307",
          y: "34",
          width: "5",
          height: "28",
          rx: "2.5"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        className: "jetpack-post-publish-podcast-promo-modal__hero-art",
        "aria-hidden": "true",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("svg", {
          viewBox: "0 0 64 64",
          width: "88",
          height: "88",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("defs", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("linearGradient", {
              id: "jetpack-post-publish-podcast-promo-grad",
              x1: "0",
              y1: "0",
              x2: "1",
              y2: "1",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("stop", {
                offset: "0%",
                stopColor: "#ffffff",
                stopOpacity: "0.35"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("stop", {
                offset: "100%",
                stopColor: "#ffffff",
                stopOpacity: "0"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("circle", {
            cx: "32",
            cy: "32",
            r: "28",
            fill: "url(#jetpack-post-publish-podcast-promo-grad)"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("path", {
            fill: "#fff",
            d: "M32 14a8 8 0 0 0-8 8v10a8 8 0 0 0 16 0V22a8 8 0 0 0-8-8zm-12 18a1.5 1.5 0 0 1 3 0 9 9 0 0 0 18 0 1.5 1.5 0 0 1 3 0 12 12 0 0 1-10.5 11.9V48h4.5v3h-12v-3H30v-2.1A12 12 0 0 1 20 32z"
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: "jetpack-post-publish-podcast-promo-modal__body",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("h1", {
        id: "jetpack-post-publish-podcast-promo-modal-title",
        className: "jetpack-post-publish-podcast-promo-modal__title",
        children: __('Your post is live. Ready for the podcast version?', "jetpack-podcast")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
        className: "jetpack-post-publish-podcast-promo-modal__description",
        children: __('Give your audience another way to enjoy your content. Pick a date range or a few posts, and we’ll turn them into a two-host podcast episode.', "jetpack-podcast")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        className: "jetpack-post-publish-podcast-promo-modal__actions",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          className: "jetpack-post-publish-podcast-promo-modal__primary-action",
          variant: "primary",
          onClick: goToCreatePodcast,
          children: __('Create podcast episode', "jetpack-podcast")
        })
      })]
    })]
  });
};
if (!(0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_8__.getPlugin)('jetpack-post-publish-podcast-promo')) {
  (0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_8__.registerPlugin)('jetpack-post-publish-podcast-promo', {
    render: PostPublishPodcastPromo
  });
}
})();

/******/ })()
;
//# sourceMappingURL=editor.js.map