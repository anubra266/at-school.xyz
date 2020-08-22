(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./resources/js/Helpers/Translate.js":
/*!*******************************************!*\
  !*** ./resources/js/Helpers/Translate.js ***!
  \*******************************************/
/*! exports provided: trans_roles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trans_roles", function() { return trans_roles; });
/**
 * Takes raw role and returns User Friendly Text
 * @param {string} role the raw role to be translated
 */
function trans_roles(role) {
  var activity;

  switch (role) {
    case "practicist":
      role = "Personal Practice";
      activity = "Start Practicing";
      break;

    case "student":
      role = "Student";
      activity = "Join a Classroom";
      break;

    case "educator":
      role = "Educator";
      activity = "Create Classroom";
      break;

    case "department_head":
      role = "Educator";
      activity = "Create Environ / Department";
      break;

    case "organization_admin":
      role = "Organization Admin";
      activity = "Register Organization";
      break;

    default:
      break;
  }

  return [role, activity];
}

/***/ }),

/***/ "./resources/js/Pages/Register.Finish/index.js":
/*!*****************************************************!*\
  !*** ./resources/js/Pages/Register.Finish/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/layout */ "./node_modules/antd/lib/layout/index.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_page_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/page-header */ "./node_modules/antd/lib/page-header/index.js");
/* harmony import */ var antd_lib_page_header__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_page_header__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Pages_SiteLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Pages/SiteLayout */ "./resources/js/Pages/SiteLayout/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Helpers_Translate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Helpers/Translate.js */ "./resources/js/Helpers/Translate.js");







var Content = antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a.Content;

var Register = function Register() {
  var _usePage = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5__["usePage"])(),
      auth = _usePage.auth;

  var trans_role = Object(_Helpers_Translate_js__WEBPACK_IMPORTED_MODULE_6__["trans_roles"])(auth.user.initial_role);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_SiteLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: trans_role[1],
    noSidebar: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, {
    style: {
      margin: "0 16px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "site-page-header-ghost-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_page_header__WEBPACK_IMPORTED_MODULE_2___default.a, {
    ghost: false,
    onBack: function onBack() {
      return window.history.back();
    },
    title: "Finish Registration",
    subTitle: trans_role[0]
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Register);

/***/ })

}]);