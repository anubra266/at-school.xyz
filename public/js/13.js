(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

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