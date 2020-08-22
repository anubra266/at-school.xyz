(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./node_modules/copy-to-clipboard/index.js":
/*!*************************************************!*\
  !*** ./node_modules/copy-to-clipboard/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var deselectCurrent = __webpack_require__(/*! toggle-selection */ "./node_modules/toggle-selection/index.js");

var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
}

var defaultMessage = "Copy to clipboard: #{key}, Enter";

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug,
    message,
    reselectPrevious,
    range,
    selection,
    mark,
    success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement("span");
    mark.textContent = text;
    // reset user styles for span element
    mark.style.all = "unset";
    // prevents scrolling to the end of the page
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = "pre";
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") { // IE 11
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"]
          window.clipboardData.setData(format, text);
        } else { // all other browsers
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });

    document.body.appendChild(mark);

    range.selectNodeContents(mark);
    selection.addRange(range);

    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using clipboardData: ", err);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

module.exports = copy;


/***/ }),

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

/***/ "./node_modules/toggle-selection/index.js":
/*!************************************************!*\
  !*** ./node_modules/toggle-selection/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


module.exports = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};


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

/***/ "./resources/js/Pages/Auth/Assets.js":
/*!*******************************************!*\
  !*** ./resources/js/Pages/Auth/Assets.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-use */ "./node_modules/react-use/esm/index.js");
/* harmony import */ var react_top_loading_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-top-loading-bar */ "./node_modules/react-top-loading-bar/dist/index.modern.js");
/* harmony import */ var _Helpers_PageLoad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Helpers/PageLoad */ "./resources/js/Helpers/PageLoad.js");
/* harmony import */ var _assets_auth_css_util_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/auth/css/util.css */ "./resources/js/assets/auth/css/util.css");
/* harmony import */ var _assets_auth_css_util_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_auth_css_util_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_auth_css_main_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/auth/css/main.css */ "./resources/js/assets/auth/css/main.css");
/* harmony import */ var _assets_auth_css_main_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_auth_css_main_css__WEBPACK_IMPORTED_MODULE_5__);







function Assets(_ref) {
  var children = _ref.children,
      pageLoader = _ref.pageLoader;
  Object(_Helpers_PageLoad__WEBPACK_IMPORTED_MODULE_3__["loadPage"])(pageLoader);
  Object(react_use__WEBPACK_IMPORTED_MODULE_1__["useEffectOnce"])(function () {
    //*complete pageLoader loading
    pageLoader && pageLoader.current.complete();
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_top_loading_bar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: "white",
    ref: pageLoader,
    waitingTime: 1000
  }), children);
}

/* harmony default export */ __webpack_exports__["default"] = (Assets);

/***/ })

}]);