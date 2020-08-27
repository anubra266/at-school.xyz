(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

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
// noprotect




function ProfileimageInfo(_ref) {
  var data = _ref.data,
      handleChange = _ref.handleChange,
      errors = _ref.errors;

  var onCrop = function onCrop(preview) {
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

    if (image.size > 5000000) {
      antd_lib_notification__WEBPACK_IMPORTED_MODULE_2___default.a["error"]({
        message: "Upload Profile Picture",
        description: "Image must be smaller than 5mb.",
        placement: "bottomRight"
      });
      elem.target.value = "";
    } else {
      var reader = new FileReader();
      reader.addEventListener("load", function () {
        // convert image file to base64 string
        var src = reader.result; //add file to input

        handleChange({
          target: {
            name: "initial_profile_image",
            value: src
          }
        });
      }, false);

      if (image) {
        reader.readAsDataURL(image);
      }
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
    src: data.initial_profile_image
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (ProfileimageInfo);

/***/ })

}]);