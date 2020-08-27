(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/DoubleLeftOutlined.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ant-design/icons-svg/lib/asn/DoubleLeftOutlined.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This icon file is generated automatically.
Object.defineProperty(exports, "__esModule", { value: true });
var DoubleLeftOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z" } }] }, "name": "double-left", "theme": "outlined" };
exports.default = DoubleLeftOutlined;


/***/ }),

/***/ "./node_modules/@ant-design/icons/DoubleLeftOutlined.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ant-design/icons/DoubleLeftOutlined.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  var _DoubleLeftOutlined = _interopRequireDefault(__webpack_require__(/*! ./lib/icons/DoubleLeftOutlined */ "./node_modules/@ant-design/icons/lib/icons/DoubleLeftOutlined.js"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _default = _DoubleLeftOutlined;
  exports.default = _default;
  module.exports = _default;

/***/ }),

/***/ "./node_modules/@ant-design/icons/lib/icons/DoubleLeftOutlined.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ant-design/icons/lib/icons/DoubleLeftOutlined.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _DoubleLeftOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons-svg/lib/asn/DoubleLeftOutlined */ "./node_modules/@ant-design/icons-svg/lib/asn/DoubleLeftOutlined.js"));

var _AntdIcon = _interopRequireDefault(__webpack_require__(/*! ../components/AntdIcon */ "./node_modules/@ant-design/icons/lib/components/AntdIcon.js"));

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var DoubleLeftOutlined = function DoubleLeftOutlined(props, ref) {
  return React.createElement(_AntdIcon.default, Object.assign({}, props, {
    ref: ref,
    icon: _DoubleLeftOutlined.default
  }));
};

DoubleLeftOutlined.displayName = 'DoubleLeftOutlined';

var _default = React.forwardRef(DoubleLeftOutlined);

exports.default = _default;

/***/ }),

/***/ "./resources/js/Pages/Workspace/Routes.js":
/*!************************************************!*\
  !*** ./resources/js/Pages/Workspace/Routes.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons_PieChartOutlined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons/PieChartOutlined */ "./node_modules/@ant-design/icons/PieChartOutlined.js");
/* harmony import */ var _ant_design_icons_PieChartOutlined__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_PieChartOutlined__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons_DoubleLeftOutlined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons/DoubleLeftOutlined */ "./node_modules/@ant-design/icons/DoubleLeftOutlined.js");
/* harmony import */ var _ant_design_icons_DoubleLeftOutlined__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_DoubleLeftOutlined__WEBPACK_IMPORTED_MODULE_2__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Routes = /*#__PURE__*/function () {
  function Routes() {
    _classCallCheck(this, Routes);
  }

  _createClass(Routes, [{
    key: "routes",
    value: function routes(classroom) {
      return [{
        name: "Dashboard",
        route: "/home",
        action: "home",
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons_DoubleLeftOutlined__WEBPACK_IMPORTED_MODULE_2___default.a, null)
      }, {
        name: "Home",
        route: "classroom/".concat(classroom),
        action: "classroom_home",
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons_PieChartOutlined__WEBPACK_IMPORTED_MODULE_1___default.a, null)
      }];
    }
  }]);

  return Routes;
}();

/* harmony default export */ __webpack_exports__["default"] = (new Routes());

/***/ }),

/***/ "./resources/js/Pages/Workspace/Template.js":
/*!**************************************************!*\
  !*** ./resources/js/Pages/Workspace/Template.js ***!
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
/* harmony import */ var _Pages_Workspace_WorkspaceLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Pages/Workspace/WorkspaceLayout */ "./resources/js/Pages/Workspace/WorkspaceLayout.js");





var Content = antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a.Content;

var Template = function Template(_ref) {
  var classroom = _ref.classroom;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_Workspace_WorkspaceLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: classroom.name,
    classroom: classroom
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

/***/ "./resources/js/Pages/Workspace/WorkspaceLayout.js":
/*!*********************************************************!*\
  !*** ./resources/js/Pages/Workspace/WorkspaceLayout.js ***!
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
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Routes */ "./resources/js/Pages/Workspace/Routes.js");





var DashboardLayout = function DashboardLayout(_ref) {
  var title = _ref.title,
      classroom = _ref.classroom,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_SiteLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    routes: _Routes__WEBPACK_IMPORTED_MODULE_3__["default"].routes(classroom),
    title: title
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (DashboardLayout);

/***/ })

}]);