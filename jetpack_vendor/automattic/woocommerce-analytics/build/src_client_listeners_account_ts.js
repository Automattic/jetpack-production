"use strict";
(self["webpackChunk_automattic_woocommerce_analytics"] = self["webpackChunk_automattic_woocommerce_analytics"] || []).push([["src_client_listeners_account_ts"],{

/***/ "./src/client/listeners/account.ts":
/*!*****************************************!*\
  !*** ./src/client/listeners/account.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initListeners: () => (/* binding */ initListeners)
/* harmony export */ });
/* global jQuery */

/**
 * Attach event listeners for my account page
 *
 * @param recordEvent - Record event function
 */
function initListeners(recordEvent) {
  jQuery('.woocommerce-MyAccount-navigation-link--customer-logout').on('click', function () {
    recordEvent('my_account_tab_click', {
      tab: 'logout'
    });
  });
}

/***/ })

}]);
//# sourceMappingURL=src_client_listeners_account_ts.js.map?minify=false&ver=c7475cdc5fc320ae94c7