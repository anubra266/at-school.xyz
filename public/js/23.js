(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./resources/js/Pages/Auth/Layout.js":
/*!*******************************************!*\
  !*** ./resources/js/Pages/Auth/Layout.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _Shared_Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/Loading */ "./resources/js/Shared/Loading.js");
/* harmony import */ var _assets_auth_css_util_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/auth/css/util.css */ "./resources/js/assets/auth/css/util.css");
/* harmony import */ var _assets_auth_css_util_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_auth_css_util_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_auth_css_main_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/auth/css/main.css */ "./resources/js/assets/auth/css/main.css");
/* harmony import */ var _assets_auth_css_main_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_auth_css_main_css__WEBPACK_IMPORTED_MODULE_4__);





var Assets = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(18)]).then(__webpack_require__.bind(null, /*! ./Assets */ "./resources/js/Pages/Auth/Assets.js"));
});

function Layout(_ref) {
  var children = _ref.children,
      title = _ref.title;
  var pageLoader = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null); //* Start page Load on Navigator Change

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Loading__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Assets, {
    pageLoader: pageLoader
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-login100",
    style: {
      backgroundImage: "url(".concat(__webpack_require__(/*! @/assets/auth/images/bg-01.jpg */ "./resources/js/assets/auth/images/bg-01.jpg"), ")")
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], {
    title: title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "navbar fixed-top text-light",
    style: {
      backgroundColor: "#9e0a9e31"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "navbar-brand mb-0 login100-form-title text-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! @/assets/general/images/at-school.png */ "./resources/js/assets/general/images/at-school.png"),
    width: "30",
    height: "30",
    className: "d-inline-block align-top",
    alt: "",
    loading: "lazy"
  }), "at-school")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrap-login100 p-l-55 p-r-55 p-t-80 p-b-30"
  }, children))));
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./resources/js/Shared/Loading.js":
/*!****************************************!*\
  !*** ./resources/js/Shared/Loading.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Loading = function Loading() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "preloader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "status"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "spinner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "double-bounce1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "double-bounce2"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./resources/js/assets/auth/images/bg-01.jpg":
/*!***************************************************!*\
  !*** ./resources/js/assets/auth/images/bg-01.jpg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/bg-01.jpg?9ecd694a097fd59efe471c43ae4c17e9";

/***/ }),

/***/ "./resources/js/assets/general/images/at-school.png":
/*!**********************************************************!*\
  !*** ./resources/js/assets/general/images/at-school.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/at-school.png?15f72add27c183615e4bd0bdba2f72a4";

/***/ })

}]);