(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[51],{

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./resources/js/Pages/Auth/Register/AcademicInfo.js":
/*!**********************************************************!*\
  !*** ./resources/js/Pages/Auth/Register/AcademicInfo.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/select */ "./node_modules/antd/lib/select/index.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_1__);


var Option = antd_lib_select__WEBPACK_IMPORTED_MODULE_1___default.a.Option,
    OptGroup = antd_lib_select__WEBPACK_IMPORTED_MODULE_1___default.a.OptGroup;

function AcademicInfo(_ref) {
  var data = _ref.data,
      handleChange = _ref.handleChange,
      errors = _ref.errors;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, errors.school && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-danger"
  }, errors.school[0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrap-input100 m-b-20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "input100",
    type: "text",
    name: "school",
    placeholder: "School",
    required: true,
    value: data.school,
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "focus-input100"
  })), errors.school_town && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-danger"
  }, errors.school_town[0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrap-input100 m-b-20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "input100",
    required: true,
    type: "text",
    name: "school_town",
    placeholder: "School's Town",
    value: data.school_town,
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "focus-input100"
  })), errors.initial_role && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-danger"
  }, errors.initial_role[0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrap-input100 m-b-20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_1___default.a, {
    required: true,
    name: "initial_role",
    placeholder: "Select your classification",
    value: data.initial_role,
    className: "input100Select",
    onChange: function onChange(value) {
      handleChange({
        target: {
          name: "initial_role",
          value: value
        }
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OptGroup, {
    label: "Student"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
    value: "practicist"
  }, "Personal Practice"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
    value: "student"
  }, "Join a Classroom")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OptGroup, {
    label: "Educator - Join Organization"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
    value: "educator"
  }, "Create Classroom"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
    value: "department_head"
  }, "Create Environ / Department")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OptGroup, {
    label: "Organization Admin"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
    value: "organization_admin"
  }, "Register Organization"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "focus-input100"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (AcademicInfo);

/***/ })

}]);