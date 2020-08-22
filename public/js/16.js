(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

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
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _Shared_FlashMessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Shared/FlashMessages */ "./resources/js/Shared/FlashMessages.js");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Shared_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Shared/Loading */ "./resources/js/Shared/Loading.js");
/* harmony import */ var _assets_auth_css_util_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/assets/auth/css/util.css */ "./resources/js/assets/auth/css/util.css");
/* harmony import */ var _assets_auth_css_util_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_auth_css_util_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_auth_css_main_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/assets/auth/css/main.css */ "./resources/js/assets/auth/css/main.css");
/* harmony import */ var _assets_auth_css_main_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_auth_css_main_css__WEBPACK_IMPORTED_MODULE_7__);








var Assets = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(11), __webpack_require__.e(56)]).then(__webpack_require__.bind(null, /*! @/Pages/Auth/Assets */ "./resources/js/Pages/Auth/Assets.js"));
});

function Layout(_ref) {
  var children = _ref.children,
      title = _ref.title;
  var pageLoader = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null); //* Start page Load on Navigator Change

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Loading__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Assets, {
    pageLoader: pageLoader
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "navbar sticky-top text-light",
    style: {
      backgroundColor: "#bd59d4",
      boxShadow: "1px 1px 15px black"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    href: route("landing")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "navbar-brand mb-0 login100-form-title text-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! @/assets/general/images/at-school.png */ "./resources/js/assets/general/images/at-school.png"),
    width: "30",
    height: "30",
    className: "d-inline-block align-top",
    alt: "",
    loading: "lazy"
  }), "at-school"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-login100",
    style: {
      backgroundImage: "url(".concat(__webpack_require__(/*! @/assets/auth/images/bg-01.jpg */ "./resources/js/assets/auth/images/bg-01.jpg"), ")")
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__["Helmet"], {
    title: title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrap-login100 p-l-55 p-r-55 p-t-80 p-b-30"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_FlashMessages__WEBPACK_IMPORTED_MODULE_3__["default"], null), children))));
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

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

/***/ }),

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

/***/ }),

/***/ "./resources/js/Pages/Auth/Register/FormFooter.js":
/*!********************************************************!*\
  !*** ./resources/js/Pages/Auth/Register/FormFooter.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /var/www/html/at-school/resources/js/Pages/Auth/Register/FormFooter.js: Identifier 'DoubleLeftOutlined' has already been declared (5:7)\n\n\u001b[0m \u001b[90m 3 | \u001b[39m\u001b[36mimport\u001b[39m \u001b[33mLoadingButton\u001b[39m from \u001b[32m\"@/Shared/LoadingButton\"\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 4 | \u001b[39m\u001b[36mimport\u001b[39m \u001b[33mDoubleLeftOutlined\u001b[39m from \u001b[32m\"@ant-design/icons/DoubleLeftOutlined\"\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 5 | \u001b[39m\u001b[36mimport\u001b[39m \u001b[33mDoubleLeftOutlined\u001b[39m from \u001b[32m\"@ant-design/icons/DoubleLeftOutlined\"\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m   | \u001b[39m       \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 6 | \u001b[39m\u001b[36mfunction\u001b[39m \u001b[33mFormFooter\u001b[39m({ page\u001b[33m,\u001b[39m setPage\u001b[33m,\u001b[39m lastPage\u001b[33m,\u001b[39m checking }) {\u001b[0m\n\u001b[0m \u001b[90m 7 | \u001b[39m    \u001b[36mreturn\u001b[39m (\u001b[0m\n\u001b[0m \u001b[90m 8 | \u001b[39m        \u001b[33m<\u001b[39m\u001b[33mReact\u001b[39m\u001b[33m.\u001b[39m\u001b[33mFragment\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n    at Object._raise (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:766:17)\n    at Object.raiseWithData (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:759:17)\n    at Object.raise (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:753:17)\n    at ScopeHandler.checkRedeclarationInScope (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:4873:12)\n    at ScopeHandler.declareName (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:4839:12)\n    at Object.checkLVal (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:9422:22)\n    at Object.parseImportSpecifierLocal (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:12828:10)\n    at Object.maybeParseDefaultImportSpecifier (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:12873:12)\n    at Object.parseImport (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:12799:31)\n    at Object.parseStatementContent (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:11530:27)\n    at Object.parseStatement (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:11430:17)\n    at Object.parseBlockOrModuleBlockBody (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:12012:25)\n    at Object.parseBlockBody (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:11998:10)\n    at Object.parseTopLevel (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:11361:10)\n    at Object.parse (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:13044:10)\n    at parse (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:13097:38)\n    at parser (/var/www/html/at-school/node_modules/@babel/core/lib/parser/index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/var/www/html/at-school/node_modules/@babel/core/lib/transformation/normalize-file.js:99:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/var/www/html/at-school/node_modules/@babel/core/lib/transformation/index.js:31:50)\n    at run.next (<anonymous>)\n    at Function.transform (/var/www/html/at-school/node_modules/@babel/core/lib/transform.js:27:41)\n    at transform.next (<anonymous>)\n    at step (/var/www/html/at-school/node_modules/gensync/index.js:254:32)\n    at /var/www/html/at-school/node_modules/gensync/index.js:266:13\n    at async.call.result.err.err (/var/www/html/at-school/node_modules/gensync/index.js:216:11)");

/***/ }),

/***/ "./resources/js/Pages/Auth/Register/PasswordInfo.js":
/*!**********************************************************!*\
  !*** ./resources/js/Pages/Auth/Register/PasswordInfo.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_space__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/space */ "./node_modules/antd/lib/space/index.js");
/* harmony import */ var antd_lib_space__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_space__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons_EyeInvisibleOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons/EyeInvisibleOutlined */ "./node_modules/@ant-design/icons/EyeInvisibleOutlined.js");
/* harmony import */ var _ant_design_icons_EyeInvisibleOutlined__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_EyeInvisibleOutlined__WEBPACK_IMPORTED_MODULE_3__);






function PasswordInfo(_ref) {
  var data = _ref.data,
      handleChange = _ref.handleChange,
      errors = _ref.errors;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, errors.password && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-danger"
  }, errors.password[0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrap-input100 m-b-20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default.a.Password, {
    placeholder: "input password",
    required: true,
    name: "password",
    onChange: handleChange,
    value: data.password
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "focus-input100"
  })), errors.password_confirmation && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-danger"
  }, errors.password_confirmation[0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrap-input100 m-b-20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default.a.Password, {
    placeholder: "confirm password",
    required: true,
    name: "password_confirmation",
    onChange: handleChange,
    value: data.password_confirmation
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "focus-input100"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (PasswordInfo);

/***/ }),

/***/ "./resources/js/Pages/Auth/Register/PersonalInfo.js":
/*!**********************************************************!*\
  !*** ./resources/js/Pages/Auth/Register/PersonalInfo.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PersonalInfo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/radio */ "./node_modules/antd/lib/radio/index.js");
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_radio__WEBPACK_IMPORTED_MODULE_1__);


function PersonalInfo(_ref) {
  var data = _ref.data,
      handleChange = _ref.handleChange,
      errors = _ref.errors;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, errors.first_name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-danger"
  }, errors.first_name[0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrap-input100 m-b-20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "input100",
    type: "text",
    name: "first_name",
    placeholder: "First Name",
    required: true,
    value: data.first_name,
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "focus-input100"
  })), errors.middle_name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-danger"
  }, errors.middle_name[0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrap-input100 m-b-20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "input100",
    type: "text",
    name: "middle_name",
    placeholder: "Middle Name",
    required: true,
    value: data.middle_name,
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "focus-input100"
  })), errors.last_name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-danger"
  }, errors.last_name[0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrap-input100 m-b-20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "input100",
    type: "text",
    name: "last_name",
    placeholder: "Last Name",
    required: true,
    value: data.last_name,
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "focus-input100"
  })), errors.gender && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-danger"
  }, errors.gender[0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Gender"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrap-input100 m-b-20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_radio__WEBPACK_IMPORTED_MODULE_1___default.a.Group, {
    name: "gender",
    value: data.gender,
    onChange: handleChange,
    optionType: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_radio__WEBPACK_IMPORTED_MODULE_1___default.a, {
    value: "male"
  }, "Male"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_radio__WEBPACK_IMPORTED_MODULE_1___default.a, {
    value: "female"
  }, "Female"))));
}

/***/ }),

/***/ "./resources/js/Pages/Auth/Register/ProfileImageInfo.js":
/*!**************************************************************!*\
  !*** ./resources/js/Pages/Auth/Register/ProfileImageInfo.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_avatar_edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-avatar-edit */ "./node_modules/react-avatar-edit/lib/react-avatar.js");
/* harmony import */ var react_avatar_edit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_avatar_edit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/notification */ "./node_modules/antd/lib/notification/index.js");
/* harmony import */ var antd_lib_notification__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_notification__WEBPACK_IMPORTED_MODULE_2__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// noprotect




function ProfileimageInfo(_ref) {
  var data = _ref.data,
      handleChange = _ref.handleChange,
      errors = _ref.errors;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState2 = _slicedToArray(_useState, 2),
      src = _useState2[0],
      setSrc = _useState2[1];

  var onCrop = function onCrop(preview) {
    setSrc(preview);
    handleChange({
      target: {
        name: "profile_image",
        value: preview
      }
    });
  };

  var onBeforeFileLoad = function onBeforeFileLoad(elem) {
    var image = elem.target.files[0];
    var name = image.name;
    console.log([name]);

    if (image.size > 2000000) {
      antd_lib_notification__WEBPACK_IMPORTED_MODULE_2___default.a["error"]({
        message: "Upload Profile Picture",
        description: "Image must be smaller than 2mb.",
        placement: "bottomRight"
      });
      elem.target.value = "";
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center"
  }, errors.profile_image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-danger"
  }, errors.profile_image[0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "milabel "
  }, "Profile Picture")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row justify-content-center mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_avatar_edit__WEBPACK_IMPORTED_MODULE_1___default.a, {
    width: 200,
    height: 200,
    onCrop: onCrop,
    onBeforeFileLoad: onBeforeFileLoad,
    mimeTypes: "image/jpeg",
    backgroundColor: "white",
    src: src
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (ProfileimageInfo);

/***/ }),

/***/ "./resources/js/Pages/Auth/Register/index.js":
/*!***************************************************!*\
  !*** ./resources/js/Pages/Auth/Register/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Pages_Auth_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Pages/Auth/Layout */ "./resources/js/Pages/Auth/Layout.js");
/* harmony import */ var _Pages_Auth_Register_PersonalInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Pages/Auth/Register/PersonalInfo */ "./resources/js/Pages/Auth/Register/PersonalInfo.js");
/* harmony import */ var _Pages_Auth_Register_BasicInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Pages/Auth/Register/BasicInfo */ "./resources/js/Pages/Auth/Register/BasicInfo.js");
/* harmony import */ var _Pages_Auth_Register_AcademicInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Pages/Auth/Register/AcademicInfo */ "./resources/js/Pages/Auth/Register/AcademicInfo.js");
/* harmony import */ var _Pages_Auth_Register_PasswordInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Pages/Auth/Register/PasswordInfo */ "./resources/js/Pages/Auth/Register/PasswordInfo.js");
/* harmony import */ var _Pages_Auth_Register_ProfileImageInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/Pages/Auth/Register/ProfileImageInfo */ "./resources/js/Pages/Auth/Register/ProfileImageInfo.js");
/* harmony import */ var _Pages_Auth_Register_FormFooter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/Pages/Auth/Register/FormFooter */ "./resources/js/Pages/Auth/Register/FormFooter.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












function Register() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      checking = _useState2[0],
      setChecking = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState4 = _slicedToArray(_useState3, 2),
      page = _useState4[0],
      setPage = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    first_name: "",
    middle_name: "",
    last_name: "",
    gender: "",
    email: "",
    telephone: "",
    date_of_birth: "",
    school: "",
    school_town: "",
    initial_role: "Select your Classification",
    password: "",
    password_confirmation: "",
    profile_image: ""
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      data = _useState6[0],
      setData = _useState6[1];

  var handleChange = function handleChange(e) {
    var key = e.target.name;
    var value = e.target.value;
    setData(function (values) {
      return _objectSpread(_objectSpread({}, values), {}, _defineProperty({}, key, value));
    });
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    setChecking(true);
    data.initial_role === "Select your Classification" ? data.initial_role = "" : "";
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__["Inertia"].post(route("register"), data).then(function () {
      setChecking(false);
    });
  };

  var _usePage = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__["usePage"])(),
      errors = _usePage.errors;

  var lastPage = 4;
  var formprops = {
    data: data,
    handleChange: handleChange,
    errors: errors
  };
  var footerprops = {
    page: page,
    setPage: setPage,
    lastPage: lastPage,
    checking: checking
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_Auth_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Register at-school"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "login100-form validate-form",
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "login100-form-title p-b-37"
  }, "Sign Up"), page === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_Auth_Register_PersonalInfo__WEBPACK_IMPORTED_MODULE_4__["default"], formprops), page === 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_Auth_Register_BasicInfo__WEBPACK_IMPORTED_MODULE_5__["default"], formprops), page === 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_Auth_Register_AcademicInfo__WEBPACK_IMPORTED_MODULE_6__["default"], formprops), page === 3 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_Auth_Register_PasswordInfo__WEBPACK_IMPORTED_MODULE_7__["default"], formprops), page === 4 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_Auth_Register_ProfileImageInfo__WEBPACK_IMPORTED_MODULE_8__["default"], formprops), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_Auth_Register_FormFooter__WEBPACK_IMPORTED_MODULE_9__["default"], footerprops)));
}

/* harmony default export */ __webpack_exports__["default"] = (Register);

/***/ }),

/***/ "./resources/js/Shared/FlashMessages.js":
/*!**********************************************!*\
  !*** ./resources/js/Shared/FlashMessages.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var _usePage = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["usePage"])(),
      flash = _usePage.flash,
      errors = _usePage.errors;

  var numOfErrors = Object.keys(errors).length;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setVisible(true);
  }, [flash, errors]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, flash.success && visible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "alert alert-danger alert-dismissible fade show",
    role: "alert"
  }, flash.success, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return setVisible(false);
    },
    type: "button",
    className: "close",
    "aria-label": "Close"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7"))), (flash.error || numOfErrors > 0) && visible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "alert alert-danger alert-dismissible fade show",
    role: "alert"
  }, flash.error && flash.error, numOfErrors === 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "There's an ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "error"), " in the form."), numOfErrors > 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "There are ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, numOfErrors, " errors"), " ", "in the form."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return setVisible(false);
    },
    type: "button",
    className: "close",
    "aria-label": "Close"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7")))));
});

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