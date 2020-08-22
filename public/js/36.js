(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

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

/***/ "./resources/js/Helpers/PageLoad.js":
/*!******************************************!*\
  !*** ./resources/js/Helpers/PageLoad.js ***!
  \******************************************/
/*! exports provided: loadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPage", function() { return loadPage; });
/**
 * Starts page loader on every page navigation
 * @param {object} pageLoader the progress bar at top of the page
 */
function loadPage(pageLoader) {
  // Select all links
  var allLinks = document.links; // Bind the event handler to each link individually

  for (var i = 0, n = allLinks.length; i < n; i++) {
    allLinks[i].onclick = function () {
      pageLoader && pageLoader.current.continuousStart();
    };
  }
}

/***/ }),

/***/ "./resources/js/Pages/SiteLayout/Navbar.js":
/*!*************************************************!*\
  !*** ./resources/js/Pages/SiteLayout/Navbar.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_use_lib_useEffectOnce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-use/lib/useEffectOnce */ "./node_modules/react-use/lib/useEffectOnce.js");
/* harmony import */ var react_use_lib_useEffectOnce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_use_lib_useEffectOnce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_top_loading_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-top-loading-bar */ "./node_modules/react-top-loading-bar/dist/index.modern.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/layout */ "./node_modules/antd/lib/layout/index.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/menu */ "./node_modules/antd/lib/menu/index.js");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_page_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/page-header */ "./node_modules/antd/lib/page-header/index.js");
/* harmony import */ var antd_lib_page_header__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_page_header__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/dropdown */ "./node_modules/antd/lib/dropdown/index.js");
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/tag */ "./node_modules/antd/lib/tag/index.js");
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tag__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/drawer */ "./node_modules/antd/lib/drawer/index.js");
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ant_design_icons_EllipsisOutlined__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ant-design/icons/EllipsisOutlined */ "./node_modules/@ant-design/icons/EllipsisOutlined.js");
/* harmony import */ var _ant_design_icons_EllipsisOutlined__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_EllipsisOutlined__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ant_design_icons_MenuOutlined__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ant-design/icons/MenuOutlined */ "./node_modules/@ant-design/icons/MenuOutlined.js");
/* harmony import */ var _ant_design_icons_MenuOutlined__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_MenuOutlined__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Helpers_PageLoad__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/Helpers/PageLoad */ "./resources/js/Helpers/PageLoad.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














var Header = antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a.Header;

function Navbar(_ref) {
  var pageLoader = _ref.pageLoader;
  // TODO Notification Drawer
  // TODO Logout
  // TODO Share auth data from backend
  Object(_Helpers_PageLoad__WEBPACK_IMPORTED_MODULE_12__["loadPage"])(pageLoader);
  react_use_lib_useEffectOnce__WEBPACK_IMPORTED_MODULE_1___default()(function () {
    //*complete pageLoader loading
    pageLoader && pageLoader.current.complete();
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var showDrawer = function showDrawer() {
    setVisible(true);
  };

  var onClose = function onClose() {
    setVisible(false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_top_loading_bar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: "rgba(100,100,200,0.4)",
    ref: pageLoader,
    waitingTime: 1000
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, {
    className: "site-layout-background",
    style: {
      padding: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_page_header__WEBPACK_IMPORTED_MODULE_5___default.a, {
    title: "at-School",
    className: "site-page-header",
    subTitle: "This is a subtitle",
    tags: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_tag__WEBPACK_IMPORTED_MODULE_8___default.a, {
      color: "blue"
    }, "Running"),
    extra: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      key: 1
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: showDrawer,
      className: "navbar-toggler",
      style: {
        color: "white"
      },
      type: "button"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons_MenuOutlined__WEBPACK_IMPORTED_MODULE_11___default.a, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_9___default.a, {
      title: "Basic Drawer",
      placement: "right",
      closable: false,
      onClose: onClose,
      visible: visible
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_7___default.a, {
      key: "3"
    }, "Operation")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_7___default.a, {
      key: "2"
    }, "Operation")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_7___default.a, {
      key: "1",
      type: "primary"
    }, "Primary")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownMenu, {
      key: "more"
    }))))],
    avatar: {
      src: __webpack_require__(/*! @/assets/general/images/at-school.png */ "./resources/js/assets/general/images/at-school.png")
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);
var menu = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_4___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_4___default.a.Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  target: "_blank",
  rel: "noopener noreferrer",
  href: "http://www.alipay.com/"
}, "1st menu item")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_4___default.a.Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  target: "_blank",
  rel: "noopener noreferrer",
  href: "http://www.taobao.com/"
}, "2nd menu item")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_4___default.a.Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  target: "_blank",
  rel: "noopener noreferrer",
  href: "http://www.tmall.com/"
}, "3rd menu item")));

var DropdownMenu = function DropdownMenu() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_6___default.a, {
    key: "more",
    overlay: menu
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_7___default.a, {
    style: {
      border: "none",
      padding: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons_EllipsisOutlined__WEBPACK_IMPORTED_MODULE_10___default.a, {
    style: {
      fontSize: 20,
      verticalAlign: "top"
    }
  })));
};

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