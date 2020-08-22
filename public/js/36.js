(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "./resources/js/Pages/Landing/Intro.js":
/*!*********************************************!*\
  !*** ./resources/js/Pages/Landing/Intro.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Login */ "./resources/js/Pages/Landing/Login.js");




function Intro() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "intro-section",
    id: "home-section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "slide-1",
    style: {
      backgroundImage: "url(".concat(__webpack_require__(/*! @/assets/landing/images/hero_1.jpg */ "./resources/js/assets/landing/images/hero_1.jpg"), ")")
    },
    "data-stellar-background-ratio": "0.5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-6 mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    "data-aos": "fade-up",
    "data-aos-delay": "100"
  }, "Let the learning flow"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mb-4",
    "data-aos": "fade-up",
    "data-aos-delay": "200"
  }, "We help you keep up with the flow of knowledge. Anywhere and anytime."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    "data-aos": "fade-up",
    "data-aos-delay": "300"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    className: "btn prpbut py-3 px-5 btn-pill",
    href: route("register")
  }, "Sign Up"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-5 ml-auto",
    "data-aos": "fade-up",
    "data-aos-delay": "500"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Login__WEBPACK_IMPORTED_MODULE_2__["default"], null))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Intro);

/***/ }),

/***/ "./resources/js/Pages/Landing/Login.js":
/*!*********************************************!*\
  !*** ./resources/js/Pages/Landing/Login.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Shared_LoadingButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Shared/LoadingButton */ "./resources/js/Shared/LoadingButton.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function Login() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      checking = _useState2[0],
      setChecking = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    email: "",
    password: ""
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      data = _useState4[0],
      setdata = _useState4[1];

  var handleChange = function handleChange(e) {
    var key = e.target.name;
    var value = e.target.value;
    setdata(function (values) {
      return _objectSpread(_objectSpread({}, values), {}, _defineProperty({}, key, value));
    });
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    setChecking(true);
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__["Inertia"].post(route("login"), data);
  };

  var _usePage = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["usePage"])(),
      errors = _usePage.errors;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    action: "",
    method: "post",
    className: "form-box",
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "h4 text-black mb-4"
  }, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "email",
    name: "email",
    className: "form-control",
    placeholder: "Email Addresss",
    required: true,
    value: data.email,
    onChange: handleChange
  }), errors.email && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-danger font-weight-lighter small"
  }, errors.email[0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-danger font-weight-lighter small"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "password",
    name: "password",
    className: "form-control",
    placeholder: "Password",
    required: true,
    value: data.password,
    onChange: handleChange
  }), errors.password && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-danger font-weight-lighter small"
  }, errors.password[0])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_LoadingButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "submit",
    className: "btn prpbut btn-pill",
    loading: checking
  }, "Login")));
}

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./resources/js/Shared/LoadingButton.js":
/*!**********************************************!*\
  !*** ./resources/js/Shared/LoadingButton.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function Spinner(_ref) {
  var children = _ref.children,
      type = _ref.type,
      className = _ref.className,
      loading = _ref.loading;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: className,
    type: type,
    disabled: loading
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "spinner-border",
    role: "status"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "sr-only"
  }, "Loading...")) : children);
}

/* harmony default export */ __webpack_exports__["default"] = (Spinner);

/***/ }),

/***/ "./resources/js/assets/landing/images/hero_1.jpg":
/*!*******************************************************!*\
  !*** ./resources/js/assets/landing/images/hero_1.jpg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/hero_1.jpg?ab80f89895baea4b6dbb96f4b4dc451c";

/***/ })

}]);