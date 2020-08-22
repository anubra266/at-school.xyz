(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

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
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_13__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















var Header = antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a.Header;

function Navbar(_ref) {
  var pageLoader = _ref.pageLoader;

  // TODO Logout
  var _usePage = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_13__["usePage"])(),
      auth = _usePage.auth;

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
    subTitle: "".concat(auth.user.first_name, " ").concat(auth.user.last_name),
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
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/layout */ "./node_modules/antd/lib/layout/index.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/menu */ "./node_modules/antd/lib/menu/index.js");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons_PoweroffOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons/PoweroffOutlined */ "./node_modules/@ant-design/icons/PoweroffOutlined.js");
/* harmony import */ var _ant_design_icons_PoweroffOutlined__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_PoweroffOutlined__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ant_design_icons_DesktopOutlined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons/DesktopOutlined */ "./node_modules/@ant-design/icons/DesktopOutlined.js");
/* harmony import */ var _ant_design_icons_DesktopOutlined__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_DesktopOutlined__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ant_design_icons_PieChartOutlined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons/PieChartOutlined */ "./node_modules/@ant-design/icons/PieChartOutlined.js");
/* harmony import */ var _ant_design_icons_PieChartOutlined__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_PieChartOutlined__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ant_design_icons_TeamOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons/TeamOutlined */ "./node_modules/@ant-design/icons/TeamOutlined.js");
/* harmony import */ var _ant_design_icons_TeamOutlined__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_TeamOutlined__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ant_design_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons/UserOutlined */ "./node_modules/@ant-design/icons/UserOutlined.js");
/* harmony import */ var _ant_design_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_8__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









 //  TODO Dynamic JSON Routing

var Sider = antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a.Sider;
var SubMenu = antd_lib_menu__WEBPACK_IMPORTED_MODULE_2___default.a.SubMenu;

function Sidebar() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      collapsed = _useState2[0],
      setCollapsed = _useState2[1];

  var onCollapse = function onCollapse(collapsed) {
    setCollapsed(collapsed);
  };

  var handleClick = function handleClick(e) {
    console.log("click ", e.key, e.keyPath);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Sider, {
    collapsible: true,
    collapsed: collapsed,
    breakpoint: "lg",
    collapsedWidth: "0",
    onCollapse: onCollapse
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "logo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_2___default.a, {
    onClick: handleClick,
    theme: "dark",
    defaultSelectedKeys: ["3"],
    defaultOpenKeys: ["sub1"],
    mode: "inline"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
    key: "1",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons_PieChartOutlined__WEBPACK_IMPORTED_MODULE_5___default.a, null)
  }, "Dashboard"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
    key: "2",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons_DesktopOutlined__WEBPACK_IMPORTED_MODULE_4___default.a, null)
  }, "Option 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubMenu, {
    key: "sub1",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_7___default.a, null),
    title: "User"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
    key: "3"
  }, "Tom"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
    key: "4"
  }, "Bill"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
    key: "5"
  }, "Alex")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubMenu, {
    key: "sub2",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons_TeamOutlined__WEBPACK_IMPORTED_MODULE_6___default.a, null),
    title: "Team"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
    key: "6"
  }, "Team 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
    key: "8"
  }, "Team 2")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
    key: "1",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons_PoweroffOutlined__WEBPACK_IMPORTED_MODULE_3___default.a, null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_8__["InertiaLink"], {
    href: route("logout"),
    method: "POST"
  }, "Logout")))));
}

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./resources/js/Pages/SiteLayout/SiteFooter.js":
/*!*****************************************************!*\
  !*** ./resources/js/Pages/SiteLayout/SiteFooter.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/layout */ "./node_modules/antd/lib/layout/index.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/menu */ "./node_modules/antd/lib/menu/index.js");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons_HeartOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons/HeartOutlined */ "./node_modules/@ant-design/icons/HeartOutlined.js");
/* harmony import */ var _ant_design_icons_HeartOutlined__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_HeartOutlined__WEBPACK_IMPORTED_MODULE_3__);




var Footer = antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a.Footer;

function SiteFooter() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Footer, {
    style: {
      textAlign: "center"
    }
  }, "at-School \xA9", new Date().getFullYear(), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.linkedin.com/in/anubra266",
    target: "_blank"
  }, "Anubra")));
}

/* harmony default export */ __webpack_exports__["default"] = (SiteFooter);

/***/ }),

/***/ "./resources/js/Pages/SiteLayout/index.js":
/*!************************************************!*\
  !*** ./resources/js/Pages/SiteLayout/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/layout */ "./node_modules/antd/lib/layout/index.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar */ "./resources/js/Pages/SiteLayout/Navbar.js");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Sidebar */ "./resources/js/Pages/SiteLayout/Sidebar.js");
/* harmony import */ var _SiteFooter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SiteFooter */ "./resources/js/Pages/SiteLayout/SiteFooter.js");







function index(_ref) {
  var title = _ref.title,
      noSidebar = _ref.noSidebar,
      children = _ref.children;
  var pageLoader = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var mode = "dark";

  switch (mode) {
    case "light":
      __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");

      break;

    case "dark":
      __webpack_require__(/*! antd/dist/antd.dark.css */ "./node_modules/antd/dist/antd.dark.css");

      break;

    case "compact":
      __webpack_require__(/*! antd/dist/antd.compact.css */ "./node_modules/antd/dist/antd.compact.css");

      break;

    default:
      __webpack_require__(/*! antd/dist/antd.dark.css */ "./node_modules/antd/dist/antd.dark.css");

      break;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__["Helmet"], {
    title: "".concat(title, " - at-School")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      minHeight: "100vh"
    }
  }, noSidebar !== true && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "site-layout"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    pageLoader: pageLoader
  }), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SiteFooter__WEBPACK_IMPORTED_MODULE_5__["default"], null))));
}

/* harmony default export */ __webpack_exports__["default"] = (index);

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