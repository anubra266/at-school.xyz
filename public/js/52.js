(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52],{

/***/ "./resources/js/Pages/Auth/Register/BasicInfo.js":
/*!*******************************************************!*\
  !*** ./resources/js/Pages/Auth/Register/BasicInfo.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_phone_input_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-phone-input-2 */ "./node_modules/react-phone-input-2/lib/lib.js");
/* harmony import */ var react_phone_input_2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_phone_input_2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_phone_input_2_lib_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-phone-input-2/lib/bootstrap.css */ "./node_modules/react-phone-input-2/lib/bootstrap.css");
/* harmony import */ var react_phone_input_2_lib_bootstrap_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_phone_input_2_lib_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__);




function BasicInfo(_ref) {
  var data = _ref.data,
      handleChange = _ref.handleChange,
      errors = _ref.errors;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, errors.email && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-danger"
  }, errors.email[0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrap-input100 m-b-20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "input100",
    type: "text",
    name: "email",
    placeholder: "Email",
    value: data.email,
    onChange: handleChange,
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "focus-input100"
  })), errors.telephone && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-danger"
  }, errors.telephone[0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "milabel"
  }, "Telephone"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrap-input100  m-b-20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_phone_input_2__WEBPACK_IMPORTED_MODULE_1___default.a, {
    country: "ng",
    defaultCountry: "ngn",
    inputProps: {
      name: "telephone",
      required: true
    },
    value: data.telephone,
    onChange: function onChange(phone) {
      return handleChange({
        target: {
          name: "telephone",
          value: phone
        }
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "focus-input100"
  })), errors.date_of_birth && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-danger"
  }, errors.date_of_birth[0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "milabel"
  }, "Date of Birth"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrap-input100 m-b-20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "input100",
    type: "date",
    name: "date_of_birth",
    placeholder: "Date of birth",
    value: data.date_of_birth,
    onChange: handleChange,
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "focus-input100"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (BasicInfo);

/***/ })

}]);