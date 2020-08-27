(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ "./resources/js/Pages/Dashboard/DashboardLayout.js":
/*!*********************************************************!*\
  !*** ./resources/js/Pages/Dashboard/DashboardLayout.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/layout */ "./node_modules/antd/lib/layout/index.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Pages_SiteLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Pages/SiteLayout */ "./resources/js/Pages/SiteLayout/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ "./resources/js/Pages/Dashboard/routes.js");





var DashboardLayout = function DashboardLayout(_ref) {
  var title = _ref.title,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_SiteLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    routes: _routes__WEBPACK_IMPORTED_MODULE_3__["default"],
    title: title
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (DashboardLayout);

/***/ }),

/***/ "./resources/js/Pages/Dashboard/Template.js":
/*!**************************************************!*\
  !*** ./resources/js/Pages/Dashboard/Template.js ***!
  \**************************************************/
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
/* harmony import */ var _Pages_Dashboard_DashboardLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Pages/Dashboard/DashboardLayout */ "./resources/js/Pages/Dashboard/DashboardLayout.js");





var Content = antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a.Content;

var Template = function Template() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_Dashboard_DashboardLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Template"
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
    title: "Title",
    subTitle: "This is a subtitle",
    extra: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
      key: "3"
    }, "Operation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
      key: "2"
    }, "Operation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
      key: "1",
      type: "primary"
    }, "Primary")]
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Template);

/***/ }),

/***/ "./resources/js/Pages/Dashboard/routes.js":
/*!************************************************!*\
  !*** ./resources/js/Pages/Dashboard/routes.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons_PieChartOutlined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons/PieChartOutlined */ "./node_modules/@ant-design/icons/PieChartOutlined.js");
/* harmony import */ var _ant_design_icons_PieChartOutlined__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_PieChartOutlined__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons_BankOutlined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons/BankOutlined */ "./node_modules/@ant-design/icons/BankOutlined.js");
/* harmony import */ var _ant_design_icons_BankOutlined__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_BankOutlined__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons_ApartmentOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons/ApartmentOutlined */ "./node_modules/@ant-design/icons/ApartmentOutlined.js");
/* harmony import */ var _ant_design_icons_ApartmentOutlined__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_ApartmentOutlined__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ant_design_icons_DeploymentUnitOutlined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons/DeploymentUnitOutlined */ "./node_modules/@ant-design/icons/DeploymentUnitOutlined.js");
/* harmony import */ var _ant_design_icons_DeploymentUnitOutlined__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_DeploymentUnitOutlined__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ant_design_icons_TeamOutlined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons/TeamOutlined */ "./node_modules/@ant-design/icons/TeamOutlined.js");
/* harmony import */ var _ant_design_icons_TeamOutlined__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_TeamOutlined__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ant_design_icons_SettingOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons/SettingOutlined */ "./node_modules/@ant-design/icons/SettingOutlined.js");
/* harmony import */ var _ant_design_icons_SettingOutlined__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_SettingOutlined__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ant_design_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons/UserOutlined */ "./node_modules/@ant-design/icons/UserOutlined.js");
/* harmony import */ var _ant_design_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ant_design_icons_HighlightOutlined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons/HighlightOutlined */ "./node_modules/@ant-design/icons/HighlightOutlined.js");
/* harmony import */ var _ant_design_icons_HighlightOutlined__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_HighlightOutlined__WEBPACK_IMPORTED_MODULE_8__);









/* harmony default export */ __webpack_exports__["default"] = ([{
  name: "Dashboard",
  route: "home",
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons_PieChartOutlined__WEBPACK_IMPORTED_MODULE_1___default.a, null)
}, {
  name: "Organizations",
  route: "organization",
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons_BankOutlined__WEBPACK_IMPORTED_MODULE_2___default.a, null)
}, {
  name: "Environs",
  route: "environ",
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons_ApartmentOutlined__WEBPACK_IMPORTED_MODULE_3___default.a, null)
}, {
  name: "Classrooms",
  route: "classroom",
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons_DeploymentUnitOutlined__WEBPACK_IMPORTED_MODULE_4___default.a, null)
}, {
  name: "Classes",
  route: "class",
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons_TeamOutlined__WEBPACK_IMPORTED_MODULE_5___default.a, null)
}, {
  name: "Practice",
  route: "practice",
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons_TeamOutlined__WEBPACK_IMPORTED_MODULE_5___default.a, null)
}, {
  name: "Settings",
  route: "settings",
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons_SettingOutlined__WEBPACK_IMPORTED_MODULE_6___default.a, null),
  items: [{
    name: "Profile Settings",
    route: "settings/profile",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_7___default.a, null)
  }, {
    name: "Theme Settings",
    route: "settings/theme",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons_HighlightOutlined__WEBPACK_IMPORTED_MODULE_8___default.a, null)
  }]
}]);

/***/ })

}]);