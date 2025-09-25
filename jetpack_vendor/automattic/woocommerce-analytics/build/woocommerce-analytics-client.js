/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../../node_modules/.pnpm/debug@4.4.3/node_modules/debug/src/browser.js":
/*!*********************************************************************************!*\
  !*** ../../../node_modules/.pnpm/debug@4.4.3/node_modules/debug/src/browser.js ***!
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


/***/ }),

/***/ "../../../node_modules/.pnpm/debug@4.4.3/node_modules/debug/src/common.js":
/*!********************************************************************************!*\
  !*** ../../../node_modules/.pnpm/debug@4.4.3/node_modules/debug/src/common.js ***!
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


/***/ }),

/***/ "../../../node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js":
/*!*********************************************************************!*\
  !*** ../../../node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js ***!
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


/***/ }),

/***/ "./src/client/analytics.ts":
/*!*********************************!*\
  !*** ./src/client/analytics.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Analytics: () => (/* binding */ Analytics)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "../../../node_modules/.pnpm/debug@4.4.3/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api-client */ "./src/client/api-client.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/client/constants.ts");
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


const debug = debug__WEBPACK_IMPORTED_MODULE_0___default()('wc-analytics:analytics');

/**
 * Analytics class for WooCommerce Analytics.
 */
class Analytics {
  constructor(sessionManager, {
    eventQueue = [],
    commonProps = {},
    features = {},
    pages = {}
  }) {
    this.isInitialized = false;
    this.sessionManager = sessionManager;
    this.apiClient = new _api_client__WEBPACK_IMPORTED_MODULE_1__.ApiClient();
    this.eventQueue = eventQueue;
    this.commonProps = commonProps;
    this.features = features;
    this.pages = pages;
  }

  /**
   * Initialize the analytics.
   */
  init = () => {
    if (this.isInitialized) {
      return;
    }

    // Initialize API client if proxy tracking is enabled
    if (this.features.proxy) {
      this.apiClient.init();
    }

    /*
     * Initialize the session manager and record the page_view event
     * only if the ClickHouse (ch) feature is enabled as these events are relevant exclusively when ClickHouse is active.
     */
    if (this.features.sessionTracking) {
      this.sessionManager.init();
      const {
        sessionId,
        landingPage,
        isNewSession
      } = this.sessionManager;

      // Not needed if proxy tracking is enabled.
      if (!this.features.proxy) {
        // Add session ID and landing page to common properties.
        this.commonProps = {
          ...this.commonProps,
          session_id: sessionId,
          landing_page: landingPage
        };
      }
      if (isNewSession) {
        this.maybeRecordSessionStartedEvent();
      } else {
        this.maybeRecordEngagementEvent();
      }
      this.recordEvent('page_view');
    }
    this.processEventQueue();
    this.initListeners();
    this.isInitialized = true;
  };

  /**
   * Initialize Listeners for pages.
   */
  initListeners = () => {
    if (this.pages.isAccountPage) {
      __webpack_require__.e(/*! import() */ "src_client_listeners_account_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./listeners/account */ "./src/client/listeners/account.ts")).then(({
        initListeners
      }) => {
        initListeners(this.recordEvent);
      });
    }
  };

  /**
   * Process the event queue.
   */
  processEventQueue = () => {
    for (const event of this.eventQueue) {
      this.recordEvent(event.eventName, event.props);
    }
  };

  /**
   * Record an event.
   * @param event      - The name of the event.
   * @param properties - The properties of the event.
   */
  recordEvent = (event, properties = {}) => {
    // Validate event name
    if (typeof event !== 'string' || !_constants__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAME_REGEX.test(event)) {
      debug('Skipping event recording because event name is not valid');
      return;
    }
    const eventProperties = {
      ...this.commonProps,
      ...properties
    };
    // Use API client if enabled, otherwise fall back to _wca.push
    if (this.features.proxy) {
      // Add client specific properties to the event properties. We don't need to do this for direct pixel tracking since it's already done there.
      this.addClientProperties(eventProperties);
      this.apiClient.addEvent(event, eventProperties);
    } else {
      this.fireDirectPixel(event, eventProperties);
    }

    // Post initialization, maybe record engagement event.
    if (this.isInitialized) {
      this.maybeRecordEngagementEvent();
    }
  };

  /**
   * Fire a pixel event.
   * @param event           - The name of the event.
   * @param eventProperties - The properties of the event.
   */
  fireDirectPixel = (event, eventProperties) => {
    // Legacy _wca tracking
    if (!window._wca) {
      debug('Skipping event recording because _wca is not defined');
      return;
    }
    if (this.features.ch && _constants__WEBPACK_IMPORTED_MODULE_2__.CLICK_HOUSE_EVENTS.includes(event)) {
      eventProperties.ch = 1;
    } else {
      delete eventProperties.ch;
    }
    debug('Recording event via _wca: "%s" with props %o', event, eventProperties);
    eventProperties._en = `${_constants__WEBPACK_IMPORTED_MODULE_2__.EVENT_PREFIX}${event}`;
    window._wca.push(eventProperties);
  };

  /**
   * Add client properties to the event properties.
   * @param eventProperties - The properties of the event.
   */
  addClientProperties = eventProperties => {
    const date = new Date();
    eventProperties._ts = date.getTime();
    eventProperties._tz = date.getTimezoneOffset() / 60;
    const nav = window.navigator;
    const screen = window.screen;
    eventProperties._lg = nav.language;
    eventProperties._pf = navigator?.platform;
    eventProperties._ht = screen.height;
    eventProperties._wd = screen.width;
    const sx = window.pageXOffset !== undefined ? window.pageXOffset : (document.documentElement || document.body).scrollLeft;
    const sy = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body).scrollTop;
    eventProperties._sx = sx !== undefined ? sx : 0;
    eventProperties._sy = sy !== undefined ? sy : 0;
    if (document.location !== undefined) {
      eventProperties._dl = document.location.toString();
    }
    if (document.referrer !== undefined) {
      eventProperties._dr = document.referrer;
    }
  };

  /**
   * Record the session started event if it's a new session and session ID is set.
   */
  maybeRecordSessionStartedEvent = () => {
    if (!this.features.sessionTracking) {
      return;
    }
    if (!this.sessionManager.isNewSession || !this.sessionManager.sessionId) {
      return;
    }
    this.recordEvent('session_started');
  };

  /**
   * Record the session engagement event if session is not engaged and session ID is set.
   */
  maybeRecordEngagementEvent = () => {
    if (!this.features.sessionTracking) {
      return;
    }
    if (this.sessionManager.isEngaged || !this.sessionManager.sessionId) {
      return;
    }
    this.sessionManager.setEngaged();
    this.recordEvent('session_engagement');
  };
}

/***/ }),

/***/ "./src/client/api-client.ts":
/*!**********************************!*\
  !*** ./src/client/api-client.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiClient: () => (/* binding */ ApiClient)
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debug */ "../../../node_modules/.pnpm/debug@4.4.3/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/client/constants.ts");
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */

const debug = debug__WEBPACK_IMPORTED_MODULE_1___default()('wc-analytics:api-client');

/**
 * API Client for sending analytics events to the WordPress REST API
 */
class ApiClient {
  eventQueue = [];
  debounceTimer = null;
  isInitialized = false;
  /**
   * Initialize the API client
   */
  init = () => {
    if (this.isInitialized) {
      return;
    }
    debug('API client initialized');
    // Send any pending events when the page is about to unload
    window.addEventListener('beforeunload', this.flush);
    window.addEventListener('pagehide', this.flush);
    this.isInitialized = true;
  };

  /**
   * Add an event to the queue for batch sending
   *
   * @param eventName  - The name of the event.
   * @param properties - The properties of the event.
   */
  addEvent = (eventName, properties = {}) => {
    if (!this.isInitialized) {
      debug('API client not initialized, skipping event: %s', eventName);
      return;
    }
    debug('Recording event via API: "%s" with props %o', eventName, properties);
    const apiEvent = {
      event_name: eventName,
      properties
    };
    this.eventQueue.push(apiEvent);
    debug('Event added to queue: %s (queue size: %d)', eventName, this.eventQueue.length);

    // Schedule debounced send
    this.debouncedSend();

    // If queue is full, send immediately
    if (this.eventQueue.length >= _constants__WEBPACK_IMPORTED_MODULE_2__.BATCH_SIZE) {
      this.flush();
    }
  };

  /**
   * Debounced send function
   */
  debouncedSend = () => {
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }
    this.debounceTimer = window.setTimeout(() => {
      this.flush();
    }, _constants__WEBPACK_IMPORTED_MODULE_2__.DEBOUNCE_DELAY);
  };

  /**
   * Flush all pending events immediately
   */
  flush = () => {
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
      this.debounceTimer = null;
    }
    if (this.eventQueue.length === 0) {
      return;
    }
    const eventsToSend = [...this.eventQueue];
    this.eventQueue = [];
    this.sendEvents(eventsToSend);
  };

  /**
   * Send events to the API
   *
   * @param events - The events to send.
   */
  sendEvents = async events => {
    if (events.length === 0) {
      return;
    }
    try {
      debug('Sending %d events to API', events.length);
      const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
        path: `/${_constants__WEBPACK_IMPORTED_MODULE_2__.API_NAMESPACE}/${_constants__WEBPACK_IMPORTED_MODULE_2__.API_ENDPOINT}`,
        method: 'POST',
        data: events
      });
      debug('API response received: %o', response);
      if (!response.success) {
        debug('Some events failed to send: %o', response.results);
      }
    } catch (error) {
      debug('Failed to send events to API: %o', error);
      // Re-add events to queue for potential retry on next event
      this.eventQueue.unshift(...events);
    }
  };
}

/***/ }),

/***/ "./src/client/constants.ts":
/*!*********************************!*\
  !*** ./src/client/constants.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   API_ENDPOINT: () => (/* binding */ API_ENDPOINT),
/* harmony export */   API_NAMESPACE: () => (/* binding */ API_NAMESPACE),
/* harmony export */   BATCH_SIZE: () => (/* binding */ BATCH_SIZE),
/* harmony export */   CLICK_HOUSE_EVENTS: () => (/* binding */ CLICK_HOUSE_EVENTS),
/* harmony export */   COOKIE_NAME: () => (/* binding */ COOKIE_NAME),
/* harmony export */   DEBOUNCE_DELAY: () => (/* binding */ DEBOUNCE_DELAY),
/* harmony export */   EVENT_NAME_REGEX: () => (/* binding */ EVENT_NAME_REGEX),
/* harmony export */   EVENT_PREFIX: () => (/* binding */ EVENT_PREFIX)
/* harmony export */ });
const COOKIE_NAME = 'woocommerceanalytics_session';
const EVENT_PREFIX = 'woocommerceanalytics_';
const EVENT_NAME_REGEX = /^[a-z_][a-z0-9_]*$/;

// API Configuration
const API_NAMESPACE = 'woocommerce-analytics/v1';
const API_ENDPOINT = 'track';
const BATCH_SIZE = 10;
const DEBOUNCE_DELAY = 1000; // 1 second

const CLICK_HOUSE_EVENTS = ['session_started', 'session_engagement', 'product_view', 'cart_view', 'add_to_cart', 'remove_from_cart', 'checkout_view', 'product_checkout', 'product_purchase', 'order_confirmation_view', 'search', 'page_view'];

/***/ }),

/***/ "./src/client/session-manager.ts":
/*!***************************************!*\
  !*** ./src/client/session-manager.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SessionManager)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/client/constants.ts");
/* wp:polyfill */
/* wp:polyfill es.array-buffer.detached */
/* wp:polyfill es.array-buffer.transfer */
/* wp:polyfill es.array-buffer.transfer-to-fixed-length */
/* wp:polyfill es.typed-array.with */
/* wp:polyfill esnext.uint8-array.set-from-base64 */
/* wp:polyfill esnext.uint8-array.set-from-hex */
/* wp:polyfill esnext.uint8-array.to-base64 */
/* wp:polyfill esnext.uint8-array.to-hex */
/**
 * Internal dependencies
 */

/**
 * Session Manager for WooCommerce Analytics
 *
 */
class SessionManager {
  sessionId = null;
  landingPage = null;
  isEngaged = false;
  isNewSession = false;
  isInitialized = false;

  /**
   * Initialize the session manager
   */
  init = () => {
    if (this.isInitialized) {
      return;
    }
    this.loadOrCreateSession();
    this.isInitialized = true;
  };

  /**
   * Load existing session or create new one
   */
  loadOrCreateSession() {
    const cookie = this.getSessionCookie();
    if (cookie && cookie.session_id) {
      // Load existing session
      this.sessionId = cookie.session_id;
      this.landingPage = cookie.landing_page || null;
      this.isEngaged = cookie.is_engaged || false;
      this.isNewSession = false;
    } else {
      this.createNewSession();
    }
  }

  /**
   * Create a new session
   */
  createNewSession() {
    this.isNewSession = true;
    const sessionData = {
      session_id: this.generateRandomUuid(),
      landing_page: JSON.stringify(window.wcAnalytics?.breadcrumbs || []),
      expires: this.getSessionExpirationTime()
    };
    if (this.setSessionCookie(sessionData)) {
      // Only set session data if cookie was set successfully
      this.sessionId = sessionData.session_id;
      this.landingPage = sessionData.landing_page;
      this.isEngaged = false;
    }
  }

  /**
   * Get session cookie data
   *
   * @return SessionCookieData | null
   */
  getSessionCookie() {
    const rawCookie = this.getCookie(_constants__WEBPACK_IMPORTED_MODULE_0__.COOKIE_NAME);
    if (!rawCookie) {
      return null;
    }
    try {
      return JSON.parse(decodeURIComponent(rawCookie));
    } catch (_error) {
      // eslint-disable-next-line no-console
      console.error('Error parsing session cookie', _error);
      return null;
    }
  }

  /**
   * Get cookie value by name
   *
   * @param name - Cookie name
   * @return string | null
   */
  getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop()?.split(';').shift() || null;
    }
    return null;
  }

  /**
   * Set session cookie
   *
   * @param sessionData - Session data
   * @return boolean
   */
  setSessionCookie(sessionData) {
    const encoded = encodeURIComponent(JSON.stringify(sessionData));
    const expires = sessionData.expires || this.getSessionExpirationTime();
    document.cookie = `${_constants__WEBPACK_IMPORTED_MODULE_0__.COOKIE_NAME}=${encoded}; expires=${expires}; path=/; secure; samesite=strict`;
    const isCookieSet = this.getCookie(_constants__WEBPACK_IMPORTED_MODULE_0__.COOKIE_NAME) === encoded;
    return isCookieSet;
  }

  /**
   * Generate session expiration time
   * 30 minutes from now or at midnight UTC, whichever comes first
   *
   * @return string
   */
  getSessionExpirationTime() {
    const thirtyMinutesFromNow = Date.now() + 30 * 60 * 1000;
    const midnightUTC = new Date();
    midnightUTC.setUTCDate(midnightUTC.getUTCDate() + 1);
    midnightUTC.setUTCHours(0, 0, 0, 0);
    const expirationTime = Math.min(thirtyMinutesFromNow, midnightUTC.getTime());
    return new Date(expirationTime).toUTCString();
  }

  /**
   * Generate a random UUID v4 token
   *
   * @return string
   */
  generateRandomUuid() {
    // Use modern crypto.randomUUID() if available (most efficient)
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
      return crypto.randomUUID();
    }

    // Use crypto.getRandomValues for better security
    if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
      const bytes = new Uint8Array(16);
      crypto.getRandomValues(bytes);

      // Set version (4) and variant bits according to RFC 4122
      // Set version (4) and variant bits according to RFC 4122 without using bitwise operators
      // eslint-disable-next-line no-bitwise
      bytes[6] = bytes[6] & 0x0f | 0x40; // Version 4
      // eslint-disable-next-line no-bitwise
      bytes[8] = bytes[8] & 0x3f | 0x80; // Variant 10

      // Convert to hex string with proper formatting
      const hex = Array.from(bytes, b => b.toString(16).padStart(2, '0')).join('');
      return [hex.slice(0, 8), hex.slice(8, 12), hex.slice(12, 16), hex.slice(16, 20), hex.slice(20, 32)].join('-');
    }

    // Fallback for older browsers (Math.random - less secure)
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = Math.floor(Math.random() * 16);
      const v = c === 'x' ? r : r % 4 + 8;
      return v.toString(16);
    });
  }

  /**
   * Set engaged and update session cookie
   *
   */
  setEngaged() {
    if (this.isEngaged) {
      // Engagement already recorded
      return;
    }
    const sessionData = this.getSessionCookie();
    if (sessionData && sessionData.session_id) {
      sessionData.is_engaged = true;
      this.setSessionCookie(sessionData);
    }
    this.isEngaged = true;
  }
}

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["apiFetch"];

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js?minify=false&ver=" + "c7475cdc5fc320ae94c7" + "";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename with rtl */
/******/ 	(() => {
/******/ 		if ( ! __webpack_require__.miniCssF ) throw new Error( 'MiniCSSWithRTLPlugin was loaded before MiniCSSExtractPlugin' );
/******/ 		__webpack_require__.miniCssF = (
/******/ 			(originalFn) => ((chunkId) => {
/******/ 				var isRtl = document.dir === 'rtl';
/******/ 				var originalUrl = originalFn( chunkId );
/******/ 				return isRtl ? originalUrl.replace( /\.css(?:$|\?)/, '.rtl$&' ) : originalUrl;
/******/ 			})
/******/ 		)( __webpack_require__.miniCssF );
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
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "@automattic/woocommerce-analytics:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"woocommerce-analytics-client": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk_automattic_woocommerce_analytics"] = self["webpackChunk_automattic_woocommerce_analytics"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*****************************!*\
  !*** ./src/client/index.ts ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _analytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./analytics */ "./src/client/analytics.ts");
/* harmony import */ var _session_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session-manager */ "./src/client/session-manager.ts");
/* global jQuery */

/**
 * Internal dependencies
 */


jQuery(() => {
  if (!window.wcAnalytics) {
    return;
  }
  const sessionManager = new _session_manager__WEBPACK_IMPORTED_MODULE_1__["default"]();
  const analytics = new _analytics__WEBPACK_IMPORTED_MODULE_0__.Analytics(sessionManager, {
    eventQueue: window.wcAnalytics.eventQueue,
    commonProps: window.wcAnalytics.commonProps,
    features: window.wcAnalytics.features,
    pages: window.wcAnalytics.pages
  });
  analytics.init();
});
})();

/******/ })()
;
//# sourceMappingURL=woocommerce-analytics-client.js.map