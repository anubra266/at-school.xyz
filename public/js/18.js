(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./resources/js/Helpers/PageLoad.js":
/*!******************************************!*\
  !*** ./resources/js/Helpers/PageLoad.js ***!
  \******************************************/
/*! exports provided: loadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPage", function() { return loadPage; });
/**
 * Starts page loader on every page navigation
 * @param {object} pageLoader the progress bar at top of the page
 */
function loadPage(pageLoader) {
  // Select all links
  var allLinks = document.links; // Bind the event handler to each link individually

  for (var i = 0, n = allLinks.length; i < n; i++) {
    allLinks[i].onclick = function () {
      pageLoader && pageLoader.current.continuousStart();
    };
  }
}

/***/ }),

/***/ "./resources/js/Pages/Auth/Assets.js":
/*!*******************************************!*\
  !*** ./resources/js/Pages/Auth/Assets.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-use */ "./node_modules/react-use/esm/index.js");
/* harmony import */ var react_top_loading_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-top-loading-bar */ "./node_modules/react-top-loading-bar/dist/index.modern.js");
/* harmony import */ var _Helpers_PageLoad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Helpers/PageLoad */ "./resources/js/Helpers/PageLoad.js");
/* harmony import */ var _assets_auth_css_util_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/auth/css/util.css */ "./resources/js/assets/auth/css/util.css");
/* harmony import */ var _assets_auth_css_util_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_auth_css_util_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_auth_css_main_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/auth/css/main.css */ "./resources/js/assets/auth/css/main.css");
/* harmony import */ var _assets_auth_css_main_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_auth_css_main_css__WEBPACK_IMPORTED_MODULE_5__);







function Assets(_ref) {
  var children = _ref.children,
      pageLoader = _ref.pageLoader;
  Object(_Helpers_PageLoad__WEBPACK_IMPORTED_MODULE_3__["loadPage"])(pageLoader);
  Object(react_use__WEBPACK_IMPORTED_MODULE_1__["useEffectOnce"])(function () {
    //*complete pageLoader loading
    pageLoader && pageLoader.current.complete();
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_top_loading_bar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: "purple",
    ref: pageLoader,
    waitingTime: 1000
  }), children);
}

/* harmony default export */ __webpack_exports__["default"] = (Assets);

/***/ })

}]);