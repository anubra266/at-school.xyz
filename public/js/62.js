(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[62],{

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

/***/ })

}]);