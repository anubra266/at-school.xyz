(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/antd/lib/divider/index.js":
/*!************************************************!*\
  !*** ./node_modules/antd/lib/divider/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var Divider = function Divider(props) {
  return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, function (_ref) {
    var _classNames;

    var getPrefixCls = _ref.getPrefixCls,
        direction = _ref.direction;

    var customizePrefixCls = props.prefixCls,
        _props$type = props.type,
        type = _props$type === void 0 ? 'horizontal' : _props$type,
        _props$orientation = props.orientation,
        orientation = _props$orientation === void 0 ? 'center' : _props$orientation,
        className = props.className,
        children = props.children,
        dashed = props.dashed,
        plain = props.plain,
        restProps = __rest(props, ["prefixCls", "type", "orientation", "className", "children", "dashed", "plain"]);

    var prefixCls = getPrefixCls('divider', customizePrefixCls);
    var orientationPrefix = orientation.length > 0 ? "-".concat(orientation) : orientation;
    var hasChildren = !!children;
    var classString = (0, _classnames["default"])(className, prefixCls, "".concat(prefixCls, "-").concat(type), (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-with-text"), hasChildren), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-with-text").concat(orientationPrefix), hasChildren), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-dashed"), !!dashed), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-plain"), !!plain), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames));
    return /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({
      className: classString
    }, restProps, {
      role: "separator"
    }), children && /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-inner-text")
    }, children));
  });
};

var _default = Divider;
exports["default"] = _default;

/***/ }),

/***/ "./resources/js/Pages/Dashboard/environ/EnvironForm.js":
/*!*************************************************************!*\
  !*** ./resources/js/Pages/Dashboard/environ/EnvironForm.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-use */ "./node_modules/react-use/esm/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var EnvironForm = function EnvironForm(_ref) {
  var loading = _ref.loading,
      onFinish = _ref.onFinish,
      EnvForm = _ref.EnvForm,
      edit = _ref.edit;

  var _usePage = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["usePage"])(),
      errors = _usePage.errors;

  var _Form$useForm = antd__WEBPACK_IMPORTED_MODULE_4__["Form"].useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  Object(react_use__WEBPACK_IMPORTED_MODULE_2__["useEffectOnce"])(function () {
    edit && form.setFieldsValue({
      name: edit.name,
      id: edit.id
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    ref: EnvForm,
    name: "normal_login",
    className: "login-form",
    onFinish: onFinish,
    form: form
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
    name: "name",
    rules: [{
      required: true,
      message: "Please input Environ / Department Name!"
    }],
    validateStatus: errors.name && "error",
    help: errors.name && errors.name[0]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    placeholder: "Environ / Department Name"
  })), edit ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
    name: "id",
    hidden: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
    name: "code",
    rules: [{
      required: true,
      message: "Please input Organization Code!"
    }],
    validateStatus: errors.code && "error",
    help: errors.code && errors.code[0]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    placeholder: "Organization Code"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    type: "primary",
    htmlType: "submit",
    className: "login-form-button",
    loading: loading
  }, "Save")));
};

/* harmony default export */ __webpack_exports__["default"] = (EnvironForm);

/***/ }),

/***/ "./resources/js/Pages/Dashboard/environ/EnvironsList.js":
/*!**************************************************************!*\
  !*** ./resources/js/Pages/Dashboard/environ/EnvironsList.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/table */ "./node_modules/antd/lib/table/index.js");
/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_table__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/popover */ "./node_modules/antd/lib/popover/index.js");
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popover__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/popconfirm */ "./node_modules/antd/lib/popconfirm/index.js");
/* harmony import */ var antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_space__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/space */ "./node_modules/antd/lib/space/index.js");
/* harmony import */ var antd_lib_space__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_space__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/divider */ "./node_modules/antd/lib/divider/index.js");
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/typography */ "./node_modules/antd/lib/typography/index.js");
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _EnvironForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./EnvironForm */ "./resources/js/Pages/Dashboard/environ/EnvironForm.js");
/* harmony import */ var _Pages_Dashboard_classroom_ClassroomsList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/Pages/Dashboard/classroom/ClassroomsList */ "./resources/js/Pages/Dashboard/classroom/ClassroomsList.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













var EnvironsList = function EnvironsList(_ref) {
  var environs = _ref.environs;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var EnvForm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var onFinish = function onFinish(data) {
    setLoading(true);
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__["Inertia"].patch(route("environ.edit", {
      environ: data.id
    }), data).then(function (res) {
      setLoading(false);
    });
  };

  var formProps = {
    loading: loading,
    onFinish: onFinish,
    EnvForm: EnvForm
  };
  environs = environs.map(function (environ, key) {
    environ.key = "env-".concat(key);
    return environ;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, environs.length !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_table__WEBPACK_IMPORTED_MODULE_2___default.a, {
    scroll: {
      x: 600
    },
    style: {
      marginTop: "10px"
    },
    bordered: true,
    dataSource: environs,
    size: "small",
    pagination: {
      hideOnSinglePage: true,
      defaultPageSize: 3,
      showQuickJumper: true,
      showSizeChanger: true,
      showTotal: function showTotal(total, range) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, total, " Environ", total !== 1 && "s");
      }
    },
    expandable: {
      expandedRowRender: function expandedRowRender(record) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_divider__WEBPACK_IMPORTED_MODULE_6___default.a, {
          orientation: "left"
        }, record.classrooms.length, " Classroom", record.classrooms.length !== 1 && "s"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_Dashboard_classroom_ClassroomsList__WEBPACK_IMPORTED_MODULE_10__["default"], {
          classrooms: record.classrooms
        }));
      },
      rowExpandable: function rowExpandable(record) {
        return record.classrooms && record.classrooms.length !== 0;
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_table__WEBPACK_IMPORTED_MODULE_2___default.a.Column, {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: function render(text) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, text);
    },
    sorter: function sorter(a, b) {
      return a.name === b.name ? 0 : a.name < b.name ? -1 : 1;
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_table__WEBPACK_IMPORTED_MODULE_2___default.a.Column, {
    title: "Code",
    dataIndex: "code",
    key: "code",
    render: function render(text, record) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_typography__WEBPACK_IMPORTED_MODULE_8___default.a.Paragraph, {
        copyable: true
      }, text);
    }
  }), window.location.pathname === "/environ" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_table__WEBPACK_IMPORTED_MODULE_2___default.a.Column, {
    width: 200,
    fixed: "right",
    title: "Action",
    key: "action",
    render: function render(text, record) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_space__WEBPACK_IMPORTED_MODULE_5___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_popover__WEBPACK_IMPORTED_MODULE_3___default.a, {
        placement: "leftTop",
        title: "Edit ".concat(record.name),
        content: function content() {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EnvironForm__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({
            edit: record
          }, formProps));
        },
        trigger: "click"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_7___default.a, null, "Edit")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_4___default.a, {
        placement: "leftTop",
        title: "Generate new ".concat(record.name, " code?"),
        onConfirm: function onConfirm() {
          setLoading(true);
          _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__["Inertia"].patch(route("environ.change_code", {
            environ: record.id
          })).then(function () {
            return setLoading(false);
          });
        },
        okText: "Generate",
        trigger: "click"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_7___default.a, {
        loading: loading
      }, "Change Code")));
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (EnvironsList);

/***/ })

}]);