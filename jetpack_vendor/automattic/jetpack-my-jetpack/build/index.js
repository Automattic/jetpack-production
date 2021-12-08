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

/***/ "./_inc/components/my-jetpack-screen/style.scss":
/*!******************************************************!*\
  !*** ./_inc/components/my-jetpack-screen/style.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/* harmony import */ var _automattic_jetpack_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @automattic/jetpack-components */ "../../js-packages/components/components/admin-page/index.jsx");
/* harmony import */ var _automattic_jetpack_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @automattic/jetpack-components */ "../../js-packages/components/components/admin-section/hero/index.jsx");
/* harmony import */ var _automattic_jetpack_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @automattic/jetpack-components */ "../../js-packages/components/components/layout/row/index.jsx");
/* harmony import */ var _automattic_jetpack_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @automattic/jetpack-components */ "../../js-packages/components/components/layout/col/index.jsx");
/* harmony import */ var _automattic_jetpack_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @automattic/jetpack-components */ "../../js-packages/components/components/admin-section/basic/index.jsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./_inc/components/my-jetpack-screen/style.scss");
/**
 * External dependencies
 */



/**
 * The My Jetpack App Main Screen.
 *
 * @returns {object} The MyJetpackScreen component.
 */

function MyJetpackScreen() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "jp-my-jetpack-screen"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_automattic_jetpack_components__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_automattic_jetpack_components__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_automattic_jetpack_components__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_automattic_jetpack_components__WEBPACK_IMPORTED_MODULE_5__["default"], {
    lg: 12,
    md: 8,
    sm: 4
  }, "Lorem Ipsum"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_automattic_jetpack_components__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_automattic_jetpack_components__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_automattic_jetpack_components__WEBPACK_IMPORTED_MODULE_5__["default"], {
    lg: 12,
    md: 8,
    sm: 4
  }, "Lorem Ipsum")))));
}

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

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

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