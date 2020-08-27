(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

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

/***/ })

}]);