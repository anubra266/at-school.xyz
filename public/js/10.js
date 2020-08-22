(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/react-top-loading-bar/dist/index.modern.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-top-loading-bar/dist/index.modern.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function i(){return(i=Object.assign||function(t){for(var o=1;o<arguments.length;o++){var e=arguments[o];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t}).apply(this,arguments)}var l=function(){};function c(t,o){return Math.floor(Math.random()*(o-t+1)+t)}var s=Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function(e,s){var u=e.progress,d=e.height,f=void 0===d?2:d,v=e.className,p=void 0===v?"":v,h=e.color,b=void 0===h?"red":h,g=e.background,m=void 0===g?"transparent":g,w=e.onLoaderFinished,y=e.transitionTime,x=void 0===y?300:y,S=e.loaderSpeed,k=void 0===S?500:S,R=e.waitingTime,T=void 0===R?1e3:R,Y=e.shadow,I=void 0===Y||Y,O=Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),j=O[0],M=O[1],N=Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({active:!1,startingValue:20,refreshRate:1e3}),P=N[0],V=N[1],z=Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!1),F=z[0],L=z[1],q=Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({active:!1,value:20}),A=q[0],B=q[1],C={position:"fixed",top:0,left:0,height:f,background:m,zIndex:99999999999,width:"100%"},D={boxShadow:"0 0 10px "+b+", 0 0 10px "+b,width:"5%",opacity:1,position:"absolute",height:"100%",transition:"all "+k+"ms ease",transform:"rotate(3deg) translate(0px, -4px)",left:"-10rem"},E=Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({height:"100%",background:b,transition:"all "+k+"ms ease",width:"0%"}),G=E[0],H=E[1],J=Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(D),K=J[0],Q=J[1];Object(react__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"])(s,function(){return{continuousStart:function(t,o){if(void 0===o&&(o=1e3),!A.active)if(F)console.warn("react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!");else{var e=t||c(10,20);V({active:!0,refreshRate:o,startingValue:t}),M(e),Z(e)}},staticStart:function(t){if(!P.active)if(F)console.warn("react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!");else{var o=t||c(30,50);B({active:!0,value:o}),M(o),Z(o)}},complete:function(){F?console.warn("react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!"):(M(100),Z(100))}}}),Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function(){H(i({},G,{background:b})),Q(i({},K,{boxShadow:"0 0 10px "+b+", 0 0 5px "+b}))},[b]),Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function(){if(s){if(s&&void 0!==u)return void console.warn('react-top-loading-bar: You can\'t use both controlling by props and ref methods to control the bar! Please use only props or only ref methods! Ref methods will override props if "ref" property is available.');Z(j),L(!1)}else u&&Z(u),L(!0)},[u]);var U,W,X,Z=function t(o){o>=100?(H(i({},G,{width:"100%"})),I&&Q(i({},K,{left:o-10+"%"})),setTimeout(function(){H(i({},G,{opacity:0,width:"100%",transition:"all "+x+"ms ease-out",color:b})),setTimeout(function(){P.active&&(V(i({},P,{active:!1})),M(0),t(0)),A.active&&(B(i({},A,{active:!1})),M(0),t(0)),w&&w(),M(0),t(0)},x)},T)):(H(function(t){return i({},t,{width:o+"%",opacity:1,transition:o>0?"all "+k+"ms ease":""})}),I&&Q(i({},K,{left:o-5.5+"%",transition:o>0?"all "+k+"ms ease":""})))};return U=function(){var t=c(10,20);j+t<90&&(M(j+t),Z(j+t))},W=P.active?P.refreshRate:null,X=Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(l),Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function(){X.current=U}),Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function(){},[void 0]),Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function(){if(null!==W&&!1!==W){var t=setInterval(function(){return X.current()},W);return function(){return clearInterval(t)}}},[W]),Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div",{className:p,style:C},Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div",{style:G},I?Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div",{style:K}):null))});/* harmony default export */ __webpack_exports__["default"] = (s);
//# sourceMappingURL=index.modern.js.map


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

/***/ "./resources/js/Pages/Contact/index.js":
/*!*********************************************!*\
  !*** ./resources/js/Pages/Contact/index.js ***!
  \*********************************************/
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
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _Shared_FlashMessages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Shared/FlashMessages */ "./resources/js/Shared/FlashMessages.js");
/* harmony import */ var _Shared_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Shared/Navbar */ "./resources/js/Shared/Navbar.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function Contact() {
  var pageLoader = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var _usePage = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__["usePage"])(),
      errors = _usePage.errors;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    first_name: "",
    last_name: "",
    email: ""
  }),
      _useState2 = _slicedToArray(_useState, 2),
      values = _useState2[0],
      setValues = _useState2[1];

  function handleChange(e) {
    var key = e.target.id;
    var value = e.target.value;
    setValues(function (values) {
      return _objectSpread(_objectSpread({}, values), {}, _defineProperty({}, key, value));
    });
  }

  function handleSubmit(e) {
    e.preventDefault(); //*If it was an edit form

    values._method = "PUT";
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__["Inertia"].post("/submit", values);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3__["Helmet"], {
    title: "Contact"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Navbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    pageLoader: pageLoader
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_FlashMessages__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Contact Us! "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "first_name"
  }, "First name:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "form-control ".concat(errors.first_name && "is-invalid"),
    id: "first_name",
    value: values.first_name,
    onChange: handleChange
  }), errors.first_name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "invalid-feedback"
  }, errors.first_name[0])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "last_name"
  }, "Last name:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "form-control ".concat(errors.last_name && "is-invalid"),
    id: "last_name",
    value: values.last_name,
    onChange: handleChange
  }), errors.last_name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "invalid-feedback"
  }, errors.last_name[0])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "email"
  }, "Email:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "form-control ".concat(errors.email && "is-invalid"),
    id: "email",
    value: values.email,
    onChange: handleChange
  }), errors.email && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "invalid-feedback"
  }, errors.email[0])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-primary",
    type: "submit"
  }, "Submit")))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Contact);

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

/***/ "./resources/js/Shared/Navbar.js":
/*!***************************************!*\
  !*** ./resources/js/Shared/Navbar.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_top_loading_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-top-loading-bar */ "./node_modules/react-top-loading-bar/dist/index.modern.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-use */ "./node_modules/react-use/esm/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Helpers_PageLoad__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Helpers/PageLoad */ "./resources/js/Helpers/PageLoad.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Routes */ "./resources/js/Shared/Routes.js");







function Navbar(_ref) {
  var pageLoader = _ref.pageLoader;
  //* load battery State
  var batteryState = Object(react_use__WEBPACK_IMPORTED_MODULE_2__["useBattery"])(); //* Start page Load on Navigator Change

  Object(_Helpers_PageLoad__WEBPACK_IMPORTED_MODULE_4__["loadPage"])(pageLoader);
  Object(react_use__WEBPACK_IMPORTED_MODULE_2__["useEffectOnce"])(function () {
    //*complete pageLoader loading
    pageLoader && pageLoader.current.complete();
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "navbar navbar-expand-lg navbar-dark bg-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_top_loading_bar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    color: "black",
    ref: pageLoader,
    waitingTime: 0
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navbar-brand",
    href: "#"
  }, "InertiaApp"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "navbar-toggler collapsed",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarText",
    "aria-controls": "navbarText",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "navbar-toggler-icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "collapse navbar-collapse",
    id: "navbarText"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "navbar-nav mr-auto"
  }, _Routes__WEBPACK_IMPORTED_MODULE_5__["default"].general.routes.map(function (NavItem, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: "nav-".concat(key),
      className: "nav-item ".concat("active")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__["InertiaLink"], {
      className: "nav-link",
      href: route(NavItem.route)
    }, NavItem.name));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__["InertiaLink"], {
    className: "nav-link",
    href: route("logout"),
    method: "POST"
  }, "Logout")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-info navbar-text"
  }, (batteryState.level * 100).toFixed(0), "%", " ", batteryState.charging ? "Charging" : "")));
}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./resources/js/Shared/Routes.js":
/*!***************************************!*\
  !*** ./resources/js/Shared/Routes.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  //role name as a key.
  general: {
    routes: [{
      name: 'Home',
      route: 'home'
    }, {
      name: 'About',
      route: 'about'
    }, {
      name: 'Contact',
      route: 'contact'
    }]
  }
});

/***/ })

}]);