(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[56],{

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

/***/ "./resources/js/Helpers/PresentRoute.js":
/*!**********************************************!*\
  !*** ./resources/js/Helpers/PresentRoute.js ***!
  \**********************************************/
/*! exports provided: returnRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "returnRoute", function() { return returnRoute; });
function returnRoute(routes) {
  var presentRoute = routes.reduce(function (proutes, nxt) {
    if ("/".concat(nxt.route) == window.location.pathname) {
      proutes.push("menu-".concat(nxt.name));
    } else {
      nxt.items && nxt.items.forEach(function (item) {
        if ("/".concat(item.route) == window.location.pathname) {
          proutes.push("menu-".concat(item.name));
        }
      });
    }

    return proutes;
  }, []);
  var presentmenu;
  var dpresentroute = presentRoute[0].split("-")[1];
  routes.forEach(function (route) {
    route.items && route.items.forEach(function (item) {
      if (item.name === dpresentroute) {
        presentmenu = ["menu-".concat(route.name)];
      }
    });
  });
  return [presentRoute, presentmenu];
}

/***/ }),

/***/ "./resources/js/Pages/SiteLayout/Sidebar.js":
/*!**************************************************!*\
  !*** ./resources/js/Pages/SiteLayout/Sidebar.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Helpers_PresentRoute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Helpers/PresentRoute */ "./resources/js/Helpers/PresentRoute.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/layout */ "./node_modules/antd/lib/layout/index.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/menu */ "./node_modules/antd/lib/menu/index.js");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ant_design_icons_PoweroffOutlined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons/PoweroffOutlined */ "./node_modules/@ant-design/icons/PoweroffOutlined.js");
/* harmony import */ var _ant_design_icons_PoweroffOutlined__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_PoweroffOutlined__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ant_design_icons_DesktopOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons/DesktopOutlined */ "./node_modules/@ant-design/icons/DesktopOutlined.js");
/* harmony import */ var _ant_design_icons_DesktopOutlined__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_DesktopOutlined__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ant_design_icons_PieChartOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons/PieChartOutlined */ "./node_modules/@ant-design/icons/PieChartOutlined.js");
/* harmony import */ var _ant_design_icons_PieChartOutlined__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_PieChartOutlined__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ant_design_icons_TeamOutlined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons/TeamOutlined */ "./node_modules/@ant-design/icons/TeamOutlined.js");
/* harmony import */ var _ant_design_icons_TeamOutlined__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_TeamOutlined__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ant_design_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ant-design/icons/UserOutlined */ "./node_modules/@ant-design/icons/UserOutlined.js");
/* harmony import */ var _ant_design_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_9__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










 //  TODO Dynamic JSON Routing

var Sider = antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a.Sider;
var SubMenu = antd_lib_menu__WEBPACK_IMPORTED_MODULE_4___default.a.SubMenu;

function Sidebar(_ref) {
  var routes = _ref.routes;

  var getRoute = function getRoute() {
    return Object(_Helpers_PresentRoute__WEBPACK_IMPORTED_MODULE_2__["returnRoute"])(routes);
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      collapsed = _useState2[0],
      setCollapsed = _useState2[1];

  var onCollapse = function onCollapse(collapsed) {
    setCollapsed(collapsed);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Sider, {
    collapsible: true,
    collapsed: collapsed,
    breakpoint: "md",
    collapsedWidth: "0",
    onCollapse: onCollapse
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "logo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_4___default.a, {
    theme: "dark",
    defaultSelectedKeys: getRoute()[0],
    defaultOpenKeys: getRoute()[1],
    mode: "inline"
  }, routes.map(function (menu) {
    return menu.items ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubMenu, {
      key: "menu-".concat(menu.name),
      icon: menu.icon,
      title: menu.name
    }, menu.items.map(function (item) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
        key: "menu-".concat(item.name)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
        href: "menu-".concat(item.name) == getRoute()[0][0] ? "#" : route(menu.route)
      }, item.name));
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
      key: "menu-".concat(menu.name),
      icon: menu.icon
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
      href: "menu-".concat(menu.name) == getRoute()[0][0] ? "#" : route(menu.route)
    }, menu.name));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    key: "logout",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons_PoweroffOutlined__WEBPACK_IMPORTED_MODULE_5___default.a, null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    href: route("logout"),
    method: "POST"
  }, "Logout")))));
}

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ })

}]);