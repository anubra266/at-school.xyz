(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./resources/js/Helpers/CatchError.js":
/*!********************************************!*\
  !*** ./resources/js/Helpers/CatchError.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CatchError; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var CatchError = /*#__PURE__*/function (_React$Component) {
  _inherits(CatchError, _React$Component);

  var _super = _createSuper(CatchError);

  function CatchError(props) {
    var _this;

    _classCallCheck(this, CatchError);

    _this = _super.call(this, props);
    _this.state = {
      error: null,
      errorInfo: null
    };
    return _this;
  }

  _createClass(CatchError, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      // Catch errors in any components below and re-render with error message
      this.setState({
        error: error,
        errorInfo: errorInfo
      }); // You can also log error messages to an error reporting service here
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.errorInfo) {
        // Error path
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            background: "white",
            position: "fixed",
            height: "100%",
            width: "100%"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "container-fluid"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row justify-content-md-center mt-3"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "col-9"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "col"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
          style: {
            color: "red"
          }
        }, "Failed to compile"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "col"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", {
          className: "pt-2 pl-3 pb-2 alert alert-danger"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", {
          className: "text-danger"
        }, this.state.error && this.state.error.toString()), this.state.errorInfo.componentStack), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
          className: "text-muted text-sm"
        }, "This error occurred during the build time and cannot be dismissed. -", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "https://github.com/anubra266"
        }, "anubra266", " "), "Error Analyzer")))))));
      } // Normally, just render children


      return this.props.children;
    }
  }]);

  return CatchError;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./resources/js/Pages/Auth/Layout.js":
/*!*******************************************!*\
  !*** ./resources/js/Pages/Auth/Layout.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /var/www/html/at-school/resources/js/Pages/Auth/Layout.js: JSX attributes must only be assigned a non-empty expression (31:36)\n\n\u001b[0m \u001b[90m 29 | \u001b[39m                        \u001b[33m<\u001b[39m\u001b[33mspan\u001b[39m className\u001b[33m=\u001b[39m\u001b[32m\"navbar-brand mb-0 login100-form-title text-white\"\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 30 | \u001b[39m                            \u001b[33m<\u001b[39m\u001b[33mimg\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 31 | \u001b[39m                                src\u001b[33m=\u001b[39m{}\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m                                    \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 32 | \u001b[39m                                width\u001b[33m=\u001b[39m\u001b[32m\"30\"\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 33 | \u001b[39m                                height\u001b[33m=\u001b[39m\u001b[32m\"30\"\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 34 | \u001b[39m                                className\u001b[33m=\u001b[39m\u001b[32m\"d-inline-block align-top\"\u001b[39m\u001b[0m\n    at Object._raise (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:764:17)\n    at Object.raiseWithData (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:757:17)\n    at Object.raise (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:751:17)\n    at Object.jsxParseAttributeValue (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:4507:16)\n    at Object.jsxParseAttribute (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:4555:44)\n    at Object.jsxParseOpeningElementAfterName (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:4575:28)\n    at Object.jsxParseOpeningElementAt (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:4568:17)\n    at Object.jsxParseElementAt (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:4600:33)\n    at Object.jsxParseElementAt (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:4616:32)\n    at Object.jsxParseElementAt (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:4616:32)\n    at Object.jsxParseElementAt (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:4616:32)\n    at Object.jsxParseElementAt (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:4616:32)\n    at Object.jsxParseElementAt (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:4616:32)\n    at Object.jsxParseElement (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:4674:17)\n    at Object.parseExprAtom (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:4681:19)\n    at Object.parseExprSubscripts (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:9789:23)\n    at Object.parseUpdate (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:9769:21)\n    at Object.parseMaybeUnary (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:9758:17)\n    at Object.parseExprOps (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:9628:23)\n    at Object.parseMaybeConditional (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:9602:23)\n    at Object.parseMaybeAssign (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:9565:21)\n    at Object.parseParenAndDistinguishExpression (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:10418:28)\n    at Object.parseExprAtom (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:10122:21)\n    at Object.parseExprAtom (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:4686:20)\n    at Object.parseExprSubscripts (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:9789:23)\n    at Object.parseUpdate (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:9769:21)\n    at Object.parseMaybeUnary (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:9758:17)\n    at Object.parseExprOps (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:9628:23)\n    at Object.parseMaybeConditional (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:9602:23)\n    at Object.parseMaybeAssign (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:9565:21)\n    at Object.parseExpression (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:9517:23)\n    at Object.parseReturnStatement (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:11700:28)\n    at Object.parseStatementContent (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:11379:21)\n    at Object.parseStatement (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:11331:17)\n    at Object.parseBlockOrModuleBlockBody (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:11913:25)\n    at Object.parseBlockBody (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:11899:10)");

/***/ }),

/***/ "./resources/js/Pages/Auth/Register.js":
/*!*********************************************!*\
  !*** ./resources/js/Pages/Auth/Register.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Helpers_CatchError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Helpers/CatchError */ "./resources/js/Helpers/CatchError.js");
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Layout */ "./resources/js/Pages/Auth/Layout.js");





function Register() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Helpers_CatchError__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "at-school Register"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "login100-form validate-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "login100-form-title p-b-37"
  }, "Sign Up"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrap-input100 m-b-20",
    "data-validate": "Enter email"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "input100",
    type: "email",
    name: "email",
    placeholder: "email",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "focus-input100"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrap-input100 m-b-25",
    "data-validate": "Enter password"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "input100",
    type: "password",
    name: "password",
    placeholder: "password",
    minLength: "6",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "focus-input100"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-login100-form-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "login100-form-btn"
  }, "Sign Up")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row justify-content-between mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    className: "txt2 hov1",
    href: route("password.request")
  }, "Forgot Password?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-6 text-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    className: "txt2 hov1",
    href: route("login.form")
  }, "Sign In"))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Register);

/***/ })

}]);