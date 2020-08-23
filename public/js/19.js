(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/antd/lib/_util/easings.js":
/*!************************************************!*\
  !*** ./node_modules/antd/lib/_util/easings.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.easeInOutCubic = easeInOutCubic;

// eslint-disable-next-line import/prefer-default-export
function easeInOutCubic(t, b, c, d) {
  var cc = c - b;
  t /= d / 2;

  if (t < 1) {
    return cc / 2 * t * t * t + b;
  } // eslint-disable-next-line no-return-assign


  return cc / 2 * ((t -= 2) * t * t + 2) + b;
}

/***/ }),

/***/ "./node_modules/antd/lib/_util/getDataOrAriaProps.js":
/*!***********************************************************!*\
  !*** ./node_modules/antd/lib/_util/getDataOrAriaProps.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getDataOrAriaProps;

function getDataOrAriaProps(props) {
  return Object.keys(props).reduce(function (prev, key) {
    if ((key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-' || key === 'role') && key.substr(0, 7) !== 'data-__') {
      prev[key] = props[key];
    }

    return prev;
  }, {});
}

/***/ }),

/***/ "./node_modules/antd/lib/_util/getScroll.js":
/*!**************************************************!*\
  !*** ./node_modules/antd/lib/_util/getScroll.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isWindow = isWindow;
exports["default"] = getScroll;

function isWindow(obj) {
  return obj !== null && obj !== undefined && obj === obj.window;
}

function getScroll(target, top) {
  if (typeof window === 'undefined') {
    return 0;
  }

  var method = top ? 'scrollTop' : 'scrollLeft';
  var result = 0;

  if (isWindow(target)) {
    result = target[top ? 'pageYOffset' : 'pageXOffset'];
  } else if (target instanceof Document) {
    result = target.documentElement[method];
  } else if (target) {
    result = target[method];
  }

  if (target && !isWindow(target) && typeof result !== 'number') {
    result = (target.ownerDocument || target).documentElement[method];
  }

  return result;
}

/***/ }),

/***/ "./node_modules/antd/lib/_util/scrollTo.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/_util/scrollTo.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = scrollTo;

var _raf = _interopRequireDefault(__webpack_require__(/*! raf */ "./node_modules/raf/index.js"));

var _getScroll = _interopRequireWildcard(__webpack_require__(/*! ./getScroll */ "./node_modules/antd/lib/_util/getScroll.js"));

var _easings = __webpack_require__(/*! ./easings */ "./node_modules/antd/lib/_util/easings.js");

function scrollTo(y) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$getContainer = options.getContainer,
      getContainer = _options$getContainer === void 0 ? function () {
    return window;
  } : _options$getContainer,
      callback = options.callback,
      _options$duration = options.duration,
      duration = _options$duration === void 0 ? 450 : _options$duration;
  var container = getContainer();
  var scrollTop = (0, _getScroll["default"])(container, true);
  var startTime = Date.now();

  var frameFunc = function frameFunc() {
    var timestamp = Date.now();
    var time = timestamp - startTime;
    var nextScrollTop = (0, _easings.easeInOutCubic)(time > duration ? duration : time, scrollTop, y, duration);

    if ((0, _getScroll.isWindow)(container)) {
      container.scrollTo(window.pageXOffset, nextScrollTop);
    } else if (container instanceof HTMLDocument || container.constructor.name === 'HTMLDocument') {
      container.documentElement.scrollTop = nextScrollTop;
    } else {
      container.scrollTop = nextScrollTop;
    }

    if (time < duration) {
      (0, _raf["default"])(frameFunc);
    } else if (typeof callback === 'function') {
      callback();
    }
  };

  (0, _raf["default"])(frameFunc);
}

/***/ }),

/***/ "./node_modules/antd/lib/alert/ErrorBoundary.js":
/*!******************************************************!*\
  !*** ./node_modules/antd/lib/alert/ErrorBoundary.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/@babel/runtime/helpers/createSuper.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _ = _interopRequireDefault(__webpack_require__(/*! . */ "./node_modules/antd/lib/alert/index.js"));

var ErrorBoundary = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(ErrorBoundary, _React$Component);

  var _super = (0, _createSuper2["default"])(ErrorBoundary);

  function ErrorBoundary() {
    var _this;

    (0, _classCallCheck2["default"])(this, ErrorBoundary);
    _this = _super.apply(this, arguments);
    _this.state = {
      error: undefined,
      info: {
        componentStack: ''
      }
    };
    return _this;
  }

  (0, _createClass2["default"])(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      this.setState({
        error: error,
        info: info
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          message = _this$props.message,
          description = _this$props.description,
          children = _this$props.children;
      var _this$state = this.state,
          error = _this$state.error,
          info = _this$state.info;
      var componentStack = info && info.componentStack ? info.componentStack : null;
      var errorMessage = typeof message === 'undefined' ? (error || '').toString() : message;
      var errorDescription = typeof description === 'undefined' ? componentStack : description;

      if (error) {
        return /*#__PURE__*/React.createElement(_["default"], {
          type: "error",
          message: errorMessage,
          description: /*#__PURE__*/React.createElement("pre", null, errorDescription)
        });
      }

      return children;
    }
  }]);
  return ErrorBoundary;
}(React.Component);

exports["default"] = ErrorBoundary;

/***/ }),

/***/ "./node_modules/antd/lib/alert/index.js":
/*!**********************************************!*\
  !*** ./node_modules/antd/lib/alert/index.js ***!
  \**********************************************/
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

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _CloseOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CloseOutlined */ "./node_modules/@ant-design/icons/CloseOutlined.js"));

var _CheckCircleOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CheckCircleOutlined */ "./node_modules/@ant-design/icons/CheckCircleOutlined.js"));

var _ExclamationCircleOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/ExclamationCircleOutlined */ "./node_modules/@ant-design/icons/ExclamationCircleOutlined.js"));

var _InfoCircleOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/InfoCircleOutlined */ "./node_modules/@ant-design/icons/InfoCircleOutlined.js"));

var _CloseCircleOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CloseCircleOutlined */ "./node_modules/@ant-design/icons/CloseCircleOutlined.js"));

var _CheckCircleFilled = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CheckCircleFilled */ "./node_modules/@ant-design/icons/CheckCircleFilled.js"));

var _ExclamationCircleFilled = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/ExclamationCircleFilled */ "./node_modules/@ant-design/icons/ExclamationCircleFilled.js"));

var _InfoCircleFilled = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/InfoCircleFilled */ "./node_modules/@ant-design/icons/InfoCircleFilled.js"));

var _CloseCircleFilled = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CloseCircleFilled */ "./node_modules/@ant-design/icons/CloseCircleFilled.js"));

var _rcMotion = _interopRequireDefault(__webpack_require__(/*! rc-motion */ "./node_modules/rc-motion/es/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _getDataOrAriaProps = _interopRequireDefault(__webpack_require__(/*! ../_util/getDataOrAriaProps */ "./node_modules/antd/lib/_util/getDataOrAriaProps.js"));

var _ErrorBoundary = _interopRequireDefault(__webpack_require__(/*! ./ErrorBoundary */ "./node_modules/antd/lib/alert/ErrorBoundary.js"));

var _reactNode = __webpack_require__(/*! ../_util/reactNode */ "./node_modules/antd/lib/_util/reactNode.js");

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

var iconMapFilled = {
  success: _CheckCircleFilled["default"],
  info: _InfoCircleFilled["default"],
  error: _CloseCircleFilled["default"],
  warning: _ExclamationCircleFilled["default"]
};
var iconMapOutlined = {
  success: _CheckCircleOutlined["default"],
  info: _InfoCircleOutlined["default"],
  error: _CloseCircleOutlined["default"],
  warning: _ExclamationCircleOutlined["default"]
};

var Alert = function Alert(_a) {
  var _classNames2;

  var description = _a.description,
      customizePrefixCls = _a.prefixCls,
      message = _a.message,
      banner = _a.banner,
      _a$className = _a.className,
      className = _a$className === void 0 ? '' : _a$className,
      style = _a.style,
      onMouseEnter = _a.onMouseEnter,
      onMouseLeave = _a.onMouseLeave,
      onClick = _a.onClick,
      afterClose = _a.afterClose,
      showIcon = _a.showIcon,
      closable = _a.closable,
      closeText = _a.closeText,
      props = __rest(_a, ["description", "prefixCls", "message", "banner", "className", "style", "onMouseEnter", "onMouseLeave", "onClick", "afterClose", "showIcon", "closable", "closeText"]);

  var _React$useState = React.useState(false),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      closed = _React$useState2[0],
      setClosed = _React$useState2[1];

  var ref = React.useRef();

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var prefixCls = getPrefixCls('alert', customizePrefixCls);

  var handleClose = function handleClose(e) {
    var _a;

    setClosed(true);
    (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props, e);
  };

  var getType = function getType() {
    var type = props.type;

    if (type !== undefined) {
      return type;
    } // banner 模式默认为警告


    return banner ? 'warning' : 'info';
  }; // closeable when closeText is assigned


  var isClosable = closeText ? true : closable;
  var type = getType();

  var renderIconNode = function renderIconNode() {
    var icon = props.icon; // use outline icon in alert with description

    var iconType = (description ? iconMapOutlined : iconMapFilled)[type] || null;

    if (icon) {
      return (0, _reactNode.replaceElement)(icon, /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-icon")
      }, icon), function () {
        return {
          className: (0, _classnames["default"])("".concat(prefixCls, "-icon"), (0, _defineProperty2["default"])({}, icon.props.className, icon.props.className))
        };
      });
    }

    return /*#__PURE__*/React.createElement(iconType, {
      className: "".concat(prefixCls, "-icon")
    });
  };

  var renderCloseIcon = function renderCloseIcon() {
    return isClosable ? /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: handleClose,
      className: "".concat(prefixCls, "-close-icon"),
      tabIndex: 0
    }, closeText ? /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-close-text")
    }, closeText) : /*#__PURE__*/React.createElement(_CloseOutlined["default"], null)) : null;
  }; // banner 模式默认有 Icon


  var isShowIcon = banner && showIcon === undefined ? true : showIcon;
  var alertCls = (0, _classnames["default"])(prefixCls, "".concat(prefixCls, "-").concat(type), (_classNames2 = {}, (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-with-description"), !!description), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-no-icon"), !isShowIcon), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-banner"), !!banner), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-closable"), isClosable), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames2), className);
  var dataOrAriaProps = (0, _getDataOrAriaProps["default"])(props);
  return /*#__PURE__*/React.createElement(_rcMotion["default"], {
    visible: !closed,
    motionName: "".concat(prefixCls, "-motion"),
    motionAppear: false,
    motionEnter: false,
    onLeaveStart: function onLeaveStart(node) {
      return {
        maxHeight: node.offsetHeight
      };
    },
    onLeaveEnd: afterClose
  }, function (_ref) {
    var motionClassName = _ref.className,
        motionStyle = _ref.style;
    return /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({
      ref: ref,
      "data-show": !closed,
      className: (0, _classnames["default"])(alertCls, motionClassName),
      style: (0, _extends2["default"])((0, _extends2["default"])({}, style), motionStyle),
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      onClick: onClick,
      role: "alert"
    }, dataOrAriaProps), isShowIcon ? renderIconNode() : null, /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-message")
    }, message), /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-description")
    }, description), renderCloseIcon());
  });
};

Alert.ErrorBoundary = _ErrorBoundary["default"];
var _default = Alert;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/checkbox/Checkbox.js":
/*!****************************************************!*\
  !*** ./node_modules/antd/lib/checkbox/Checkbox.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/@babel/runtime/helpers/createSuper.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _rcCheckbox = _interopRequireDefault(__webpack_require__(/*! rc-checkbox */ "./node_modules/rc-checkbox/es/index.js"));

var _Group = __webpack_require__(/*! ./Group */ "./node_modules/antd/lib/checkbox/Group.js");

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _devWarning = _interopRequireDefault(__webpack_require__(/*! ../_util/devWarning */ "./node_modules/antd/lib/_util/devWarning.js"));

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

var Checkbox = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(Checkbox, _React$PureComponent);

  var _super = (0, _createSuper2["default"])(Checkbox);

  function Checkbox() {
    var _this;

    (0, _classCallCheck2["default"])(this, Checkbox);
    _this = _super.apply(this, arguments);

    _this.saveCheckbox = function (node) {
      _this.rcCheckbox = node;
    };

    _this.renderCheckbox = function (_ref) {
      var _classNames;

      var getPrefixCls = _ref.getPrefixCls,
          direction = _ref.direction;

      var _assertThisInitialize = (0, _assertThisInitialized2["default"])(_this),
          props = _assertThisInitialize.props,
          context = _assertThisInitialize.context;

      var customizePrefixCls = props.prefixCls,
          className = props.className,
          children = props.children,
          indeterminate = props.indeterminate,
          style = props.style,
          onMouseEnter = props.onMouseEnter,
          onMouseLeave = props.onMouseLeave,
          restProps = __rest(props, ["prefixCls", "className", "children", "indeterminate", "style", "onMouseEnter", "onMouseLeave"]);

      var checkboxGroup = context;
      var prefixCls = getPrefixCls('checkbox', customizePrefixCls);
      var checkboxProps = (0, _extends2["default"])({}, restProps);

      if (checkboxGroup) {
        checkboxProps.onChange = function () {
          if (restProps.onChange) {
            restProps.onChange.apply(restProps, arguments);
          }

          checkboxGroup.toggleOption({
            label: children,
            value: props.value
          });
        };

        checkboxProps.name = checkboxGroup.name;
        checkboxProps.checked = checkboxGroup.value.indexOf(props.value) !== -1;
        checkboxProps.disabled = props.disabled || checkboxGroup.disabled;
      }

      var classString = (0, _classnames["default"])(className, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-wrapper"), true), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-wrapper-checked"), checkboxProps.checked), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-wrapper-disabled"), checkboxProps.disabled), _classNames));
      var checkboxClass = (0, _classnames["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-indeterminate"), indeterminate));
      return (
        /*#__PURE__*/
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        React.createElement("label", {
          className: classString,
          style: style,
          onMouseEnter: onMouseEnter,
          onMouseLeave: onMouseLeave
        }, /*#__PURE__*/React.createElement(_rcCheckbox["default"], (0, _extends2["default"])({}, checkboxProps, {
          prefixCls: prefixCls,
          className: checkboxClass,
          ref: _this.saveCheckbox
        })), children !== undefined && /*#__PURE__*/React.createElement("span", null, children))
      );
    };

    return _this;
  }

  (0, _createClass2["default"])(Checkbox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _a;

      var value = this.props.value;
      (_a = this.context) === null || _a === void 0 ? void 0 : _a.registerValue(value);
      (0, _devWarning["default"])('checked' in this.props || this.context || !('value' in this.props), 'Checkbox', '`value` is not a valid prop, do you mean `checked`?');
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref2) {
      var prevValue = _ref2.value;

      var _a, _b;

      var value = this.props.value;

      if (value !== prevValue) {
        (_a = this.context) === null || _a === void 0 ? void 0 : _a.cancelValue(prevValue);
        (_b = this.context) === null || _b === void 0 ? void 0 : _b.registerValue(value);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _a;

      var value = this.props.value;
      (_a = this.context) === null || _a === void 0 ? void 0 : _a.cancelValue(value);
    }
  }, {
    key: "focus",
    value: function focus() {
      this.rcCheckbox.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.rcCheckbox.blur();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, this.renderCheckbox);
    }
  }]);
  return Checkbox;
}(React.PureComponent);

Checkbox.__ANT_CHECKBOX = true;
Checkbox.defaultProps = {
  indeterminate: false
};
Checkbox.contextType = _Group.GroupContext;
var _default = Checkbox;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/checkbox/Group.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/checkbox/Group.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.GroupContext = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/@babel/runtime/helpers/createSuper.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _omit = _interopRequireDefault(__webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js"));

var _Checkbox = _interopRequireDefault(__webpack_require__(/*! ./Checkbox */ "./node_modules/antd/lib/checkbox/Checkbox.js"));

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

var GroupContext = /*#__PURE__*/React.createContext(null);
exports.GroupContext = GroupContext;

var CheckboxGroup = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(CheckboxGroup, _React$PureComponent);

  var _super = (0, _createSuper2["default"])(CheckboxGroup);

  function CheckboxGroup(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, CheckboxGroup);
    _this = _super.call(this, props);

    _this.cancelValue = function (value) {
      _this.setState(function (_ref) {
        var registeredValues = _ref.registeredValues;
        return {
          registeredValues: registeredValues.filter(function (val) {
            return val !== value;
          })
        };
      });
    };

    _this.registerValue = function (value) {
      _this.setState(function (_ref2) {
        var registeredValues = _ref2.registeredValues;
        return {
          registeredValues: [].concat((0, _toConsumableArray2["default"])(registeredValues), [value])
        };
      });
    };

    _this.toggleOption = function (option) {
      var registeredValues = _this.state.registeredValues;

      var optionIndex = _this.state.value.indexOf(option.value);

      var value = (0, _toConsumableArray2["default"])(_this.state.value);

      if (optionIndex === -1) {
        value.push(option.value);
      } else {
        value.splice(optionIndex, 1);
      }

      if (!('value' in _this.props)) {
        _this.setState({
          value: value
        });
      }

      var onChange = _this.props.onChange;

      if (onChange) {
        var options = _this.getOptions();

        onChange(value.filter(function (val) {
          return registeredValues.indexOf(val) !== -1;
        }).sort(function (a, b) {
          var indexA = options.findIndex(function (opt) {
            return opt.value === a;
          });
          var indexB = options.findIndex(function (opt) {
            return opt.value === b;
          });
          return indexA - indexB;
        }));
      }
    };

    _this.renderGroup = function (_ref3) {
      var getPrefixCls = _ref3.getPrefixCls,
          direction = _ref3.direction;

      var _assertThisInitialize = (0, _assertThisInitialized2["default"])(_this),
          props = _assertThisInitialize.props,
          state = _assertThisInitialize.state;

      var customizePrefixCls = props.prefixCls,
          className = props.className,
          style = props.style,
          options = props.options,
          restProps = __rest(props, ["prefixCls", "className", "style", "options"]);

      var prefixCls = getPrefixCls('checkbox', customizePrefixCls);
      var groupPrefixCls = "".concat(prefixCls, "-group");
      var domProps = (0, _omit["default"])(restProps, ['children', 'defaultValue', 'value', 'onChange', 'disabled']);
      var children = props.children;

      if (options && options.length > 0) {
        children = _this.getOptions().map(function (option) {
          return /*#__PURE__*/React.createElement(_Checkbox["default"], {
            prefixCls: prefixCls,
            key: option.value.toString(),
            disabled: 'disabled' in option ? option.disabled : props.disabled,
            value: option.value,
            checked: state.value.indexOf(option.value) !== -1,
            onChange: option.onChange,
            className: "".concat(groupPrefixCls, "-item"),
            style: option.style
          }, option.label);
        });
      }

      var context = {
        toggleOption: _this.toggleOption,
        value: _this.state.value,
        disabled: _this.props.disabled,
        name: _this.props.name,
        // https://github.com/ant-design/ant-design/issues/16376
        registerValue: _this.registerValue,
        cancelValue: _this.cancelValue
      };
      var classString = (0, _classnames["default"])(groupPrefixCls, className, (0, _defineProperty2["default"])({}, "".concat(groupPrefixCls, "-rtl"), direction === 'rtl'));
      return /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({
        className: classString,
        style: style
      }, domProps), /*#__PURE__*/React.createElement(GroupContext.Provider, {
        value: context
      }, children));
    };

    _this.state = {
      value: props.value || props.defaultValue || [],
      registeredValues: []
    };
    return _this;
  }

  (0, _createClass2["default"])(CheckboxGroup, [{
    key: "getOptions",
    value: function getOptions() {
      var options = this.props.options; // https://github.com/Microsoft/TypeScript/issues/7960

      return options.map(function (option) {
        if (typeof option === 'string') {
          return {
            label: option,
            value: option
          };
        }

        return option;
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, this.renderGroup);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if ('value' in nextProps) {
        return {
          value: nextProps.value || []
        };
      }

      return null;
    }
  }]);
  return CheckboxGroup;
}(React.PureComponent);

CheckboxGroup.defaultProps = {
  options: []
};
var _default = CheckboxGroup;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/checkbox/index.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/checkbox/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Checkbox = _interopRequireDefault(__webpack_require__(/*! ./Checkbox */ "./node_modules/antd/lib/checkbox/Checkbox.js"));

var _Group = _interopRequireDefault(__webpack_require__(/*! ./Group */ "./node_modules/antd/lib/checkbox/Group.js"));

_Checkbox["default"].Group = _Group["default"];
var _default = _Checkbox["default"];
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/locale/en_US.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/locale/en_US.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default2 = _interopRequireDefault(__webpack_require__(/*! ./default */ "./node_modules/antd/lib/locale/default.js"));

var _default = _default2["default"];
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/pagination/MiniSelect.js":
/*!********************************************************!*\
  !*** ./node_modules/antd/lib/pagination/MiniSelect.js ***!
  \********************************************************/
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

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _select = _interopRequireDefault(__webpack_require__(/*! ../select */ "./node_modules/antd/lib/select/index.js"));

var MiniSelect = function MiniSelect(props) {
  return /*#__PURE__*/React.createElement(_select["default"], (0, _extends2["default"])({
    size: "small"
  }, props));
};

MiniSelect.Option = _select["default"].Option;
var _default = MiniSelect;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/pagination/Pagination.js":
/*!********************************************************!*\
  !*** ./node_modules/antd/lib/pagination/Pagination.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _rcPagination = _interopRequireDefault(__webpack_require__(/*! rc-pagination */ "./node_modules/rc-pagination/es/index.js"));

var _en_US = _interopRequireDefault(__webpack_require__(/*! rc-pagination/lib/locale/en_US */ "./node_modules/rc-pagination/lib/locale/en_US.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _LeftOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/LeftOutlined */ "./node_modules/@ant-design/icons/LeftOutlined.js"));

var _RightOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/RightOutlined */ "./node_modules/@ant-design/icons/RightOutlined.js"));

var _DoubleLeftOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/DoubleLeftOutlined */ "./node_modules/@ant-design/icons/DoubleLeftOutlined.js"));

var _DoubleRightOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/DoubleRightOutlined */ "./node_modules/@ant-design/icons/DoubleRightOutlined.js"));

var _MiniSelect = _interopRequireDefault(__webpack_require__(/*! ./MiniSelect */ "./node_modules/antd/lib/pagination/MiniSelect.js"));

var _select = _interopRequireDefault(__webpack_require__(/*! ../select */ "./node_modules/antd/lib/select/index.js"));

var _LocaleReceiver = _interopRequireDefault(__webpack_require__(/*! ../locale-provider/LocaleReceiver */ "./node_modules/antd/lib/locale-provider/LocaleReceiver.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _useBreakpoint2 = _interopRequireDefault(__webpack_require__(/*! ../grid/hooks/useBreakpoint */ "./node_modules/antd/lib/grid/hooks/useBreakpoint.js"));

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

var Pagination = function Pagination(_a) {
  var customizePrefixCls = _a.prefixCls,
      customizeSelectPrefixCls = _a.selectPrefixCls,
      className = _a.className,
      size = _a.size,
      customLocale = _a.locale,
      restProps = __rest(_a, ["prefixCls", "selectPrefixCls", "className", "size", "locale"]);

  var _useBreakpoint = (0, _useBreakpoint2["default"])(),
      xs = _useBreakpoint.xs;

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var prefixCls = getPrefixCls('pagination', customizePrefixCls);

  var getIconsProps = function getIconsProps() {
    var ellipsis = /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-item-ellipsis")
    }, "\u2022\u2022\u2022");
    var prevIcon = /*#__PURE__*/React.createElement("button", {
      className: "".concat(prefixCls, "-item-link"),
      type: "button",
      tabIndex: -1
    }, /*#__PURE__*/React.createElement(_LeftOutlined["default"], null));
    var nextIcon = /*#__PURE__*/React.createElement("button", {
      className: "".concat(prefixCls, "-item-link"),
      type: "button",
      tabIndex: -1
    }, /*#__PURE__*/React.createElement(_RightOutlined["default"], null));
    var jumpPrevIcon = /*#__PURE__*/React.createElement("a", {
      className: "".concat(prefixCls, "-item-link")
    }, /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-item-container")
    }, /*#__PURE__*/React.createElement(_DoubleLeftOutlined["default"], {
      className: "".concat(prefixCls, "-item-link-icon")
    }), ellipsis));
    var jumpNextIcon = /*#__PURE__*/React.createElement("a", {
      className: "".concat(prefixCls, "-item-link")
    }, /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-item-container")
    }, /*#__PURE__*/React.createElement(_DoubleRightOutlined["default"], {
      className: "".concat(prefixCls, "-item-link-icon")
    }), ellipsis)); // change arrows direction in right-to-left direction

    if (direction === 'rtl') {
      var _ref = [nextIcon, prevIcon];
      prevIcon = _ref[0];
      nextIcon = _ref[1];
      var _ref2 = [jumpNextIcon, jumpPrevIcon];
      jumpPrevIcon = _ref2[0];
      jumpNextIcon = _ref2[1];
    }

    return {
      prevIcon: prevIcon,
      nextIcon: nextIcon,
      jumpPrevIcon: jumpPrevIcon,
      jumpNextIcon: jumpNextIcon
    };
  };

  var renderPagination = function renderPagination(contextLocale) {
    var locale = (0, _extends2["default"])((0, _extends2["default"])({}, contextLocale), customLocale);
    var isSmall = size === 'small' || !!(xs && !size && restProps.responsive);
    var selectPrefixCls = getPrefixCls('select', customizeSelectPrefixCls);
    var extendedClassName = (0, _classnames["default"])(className, (0, _defineProperty2["default"])({
      mini: isSmall
    }, "".concat(prefixCls, "-rtl"), direction === 'rtl'));
    return /*#__PURE__*/React.createElement(_rcPagination["default"], (0, _extends2["default"])({}, restProps, {
      prefixCls: prefixCls,
      selectPrefixCls: selectPrefixCls
    }, getIconsProps(), {
      className: extendedClassName,
      selectComponentClass: isSmall ? _MiniSelect["default"] : _select["default"],
      locale: locale
    }));
  };

  return /*#__PURE__*/React.createElement(_LocaleReceiver["default"], {
    componentName: "Pagination",
    defaultLocale: _en_US["default"]
  }, renderPagination);
};

var _default = Pagination;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/pagination/index.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/pagination/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Pagination = _interopRequireDefault(__webpack_require__(/*! ./Pagination */ "./node_modules/antd/lib/pagination/Pagination.js"));

var _default = _Pagination["default"];
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/popconfirm/index.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/popconfirm/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _ExclamationCircleFilled = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/ExclamationCircleFilled */ "./node_modules/@ant-design/icons/ExclamationCircleFilled.js"));

var _KeyCode = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/KeyCode */ "./node_modules/rc-util/lib/KeyCode.js"));

var _tooltip = _interopRequireDefault(__webpack_require__(/*! ../tooltip */ "./node_modules/antd/lib/tooltip/index.js"));

var _button = _interopRequireDefault(__webpack_require__(/*! ../button */ "./node_modules/antd/lib/button/index.js"));

var _button2 = __webpack_require__(/*! ../button/button */ "./node_modules/antd/lib/button/button.js");

var _LocaleReceiver = _interopRequireDefault(__webpack_require__(/*! ../locale-provider/LocaleReceiver */ "./node_modules/antd/lib/locale-provider/LocaleReceiver.js"));

var _default2 = _interopRequireDefault(__webpack_require__(/*! ../locale/default */ "./node_modules/antd/lib/locale/default.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _getRenderPropValue = __webpack_require__(/*! ../_util/getRenderPropValue */ "./node_modules/antd/lib/_util/getRenderPropValue.js");

var _reactNode = __webpack_require__(/*! ../_util/reactNode */ "./node_modules/antd/lib/_util/reactNode.js");

var _this = void 0;

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

var Popconfirm = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _React$useState = React.useState(props.visible),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      visible = _React$useState2[0],
      setVisible = _React$useState2[1];

  React.useEffect(function () {
    if ('visible' in props) {
      setVisible(props.visible);
    }
  }, [props.visible]);
  React.useEffect(function () {
    if ('defaultVisible' in props) {
      setVisible(props.defaultVisible);
    }
  }, [props.defaultVisible]);

  var settingVisible = function settingVisible(value, e) {
    if (!('visible' in props)) {
      setVisible(value);
    }

    if (props.onVisibleChange) {
      props.onVisibleChange(value, e);
    }
  };

  var onConfirm = function onConfirm(e) {
    settingVisible(false, e);

    if (props.onConfirm) {
      props.onConfirm.call(_this, e);
    }
  };

  var onCancel = function onCancel(e) {
    settingVisible(false, e);

    if (props.onCancel) {
      props.onCancel.call(_this, e);
    }
  };

  var _onKeyDown = function onKeyDown(e) {
    if (e.keyCode === _KeyCode["default"].ESC && visible) {
      settingVisible(false, e);
    }
  };

  var onVisibleChange = function onVisibleChange(value) {
    var disabled = props.disabled;

    if (disabled) {
      return;
    }

    settingVisible(value);
  };

  var renderOverlay = function renderOverlay(prefixCls, popconfirmLocale) {
    var okButtonProps = props.okButtonProps,
        cancelButtonProps = props.cancelButtonProps,
        title = props.title,
        cancelText = props.cancelText,
        okText = props.okText,
        okType = props.okType,
        icon = props.icon;
    return /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-inner-content")
    }, /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-message")
    }, icon, /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-message-title")
    }, (0, _getRenderPropValue.getRenderPropValue)(title))), /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-buttons")
    }, /*#__PURE__*/React.createElement(_button["default"], (0, _extends2["default"])({
      onClick: onCancel,
      size: "small"
    }, cancelButtonProps), cancelText || popconfirmLocale.cancelText), /*#__PURE__*/React.createElement(_button["default"], (0, _extends2["default"])({
      onClick: onConfirm
    }, (0, _button2.convertLegacyProps)(okType), {
      size: "small"
    }, okButtonProps), okText || popconfirmLocale.okText)));
  };

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;

  var customizePrefixCls = props.prefixCls,
      placement = props.placement,
      children = props.children,
      overlayClassName = props.overlayClassName,
      restProps = __rest(props, ["prefixCls", "placement", "children", "overlayClassName"]);

  var prefixCls = getPrefixCls('popover', customizePrefixCls);
  var prefixClsConfirm = getPrefixCls('popconfirm', customizePrefixCls);
  var overlayClassNames = (0, _classnames["default"])(prefixClsConfirm, overlayClassName);
  var overlay = /*#__PURE__*/React.createElement(_LocaleReceiver["default"], {
    componentName: "Popconfirm",
    defaultLocale: _default2["default"].Popconfirm
  }, function (popconfirmLocale) {
    return renderOverlay(prefixCls, popconfirmLocale);
  });
  return /*#__PURE__*/React.createElement(_tooltip["default"], (0, _extends2["default"])({}, restProps, {
    prefixCls: prefixCls,
    placement: placement,
    onVisibleChange: onVisibleChange,
    visible: visible,
    overlay: overlay,
    overlayClassName: overlayClassNames,
    ref: ref
  }), (0, _reactNode.cloneElement)(children, {
    onKeyDown: function onKeyDown(e) {
      var _a, _b;

      (_b = children === null || children === void 0 ? void 0 : (_a = children.props).onKeyDown) === null || _b === void 0 ? void 0 : _b.call(_a, e);

      _onKeyDown(e);
    }
  }));
});
Popconfirm.defaultProps = {
  transitionName: 'zoom-big',
  placement: 'top',
  trigger: 'click',
  okType: 'primary',
  icon: /*#__PURE__*/React.createElement(_ExclamationCircleFilled["default"], null),
  disabled: false
};
var _default = Popconfirm;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/select/index.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/select/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/@babel/runtime/helpers/createSuper.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _omit = _interopRequireDefault(__webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _rcSelect = _interopRequireWildcard(__webpack_require__(/*! rc-select */ "./node_modules/rc-select/es/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _iconUtil = _interopRequireDefault(__webpack_require__(/*! ./utils/iconUtil */ "./node_modules/antd/lib/select/utils/iconUtil.js"));

var _SizeContext = _interopRequireDefault(__webpack_require__(/*! ../config-provider/SizeContext */ "./node_modules/antd/lib/config-provider/SizeContext.js"));

// TODO: 4.0 - codemod should help to change `filterOption` to support node props.
// We still use class here since `forwardRef` not support generic in typescript
var Select = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Select, _React$Component);

  var _super = (0, _createSuper2["default"])(Select);

  function Select() {
    var _this;

    (0, _classCallCheck2["default"])(this, Select);
    _this = _super.apply(this, arguments);
    _this.selectRef = /*#__PURE__*/React.createRef();

    _this.focus = function () {
      if (_this.selectRef.current) {
        _this.selectRef.current.focus();
      }
    };

    _this.blur = function () {
      if (_this.selectRef.current) {
        _this.selectRef.current.blur();
      }
    };

    _this.getMode = function () {
      var mode = _this.props.mode;

      if (mode === 'combobox') {
        return undefined;
      }

      if (mode === Select.SECRET_COMBOBOX_MODE_DO_NOT_USE) {
        return 'combobox';
      }

      return mode;
    };

    _this.renderSelect = function (_ref) {
      var getContextPopupContainer = _ref.getPopupContainer,
          getPrefixCls = _ref.getPrefixCls,
          renderEmpty = _ref.renderEmpty,
          direction = _ref.direction,
          virtual = _ref.virtual,
          dropdownMatchSelectWidth = _ref.dropdownMatchSelectWidth;
      var _this$props = _this.props,
          customizePrefixCls = _this$props.prefixCls,
          notFoundContent = _this$props.notFoundContent,
          className = _this$props.className,
          customizeSize = _this$props.size,
          _this$props$listHeigh = _this$props.listHeight,
          listHeight = _this$props$listHeigh === void 0 ? 256 : _this$props$listHeigh,
          _this$props$listItemH = _this$props.listItemHeight,
          listItemHeight = _this$props$listItemH === void 0 ? 24 : _this$props$listItemH,
          getPopupContainer = _this$props.getPopupContainer,
          dropdownClassName = _this$props.dropdownClassName,
          bordered = _this$props.bordered;
      var prefixCls = getPrefixCls('select', customizePrefixCls);

      var mode = _this.getMode();

      var isMultiple = mode === 'multiple' || mode === 'tags'; // ===================== Empty =====================

      var mergedNotFound;

      if (notFoundContent !== undefined) {
        mergedNotFound = notFoundContent;
      } else if (mode === 'combobox') {
        mergedNotFound = null;
      } else {
        mergedNotFound = renderEmpty('Select');
      } // ===================== Icons =====================


      var _getIcons = (0, _iconUtil["default"])((0, _extends2["default"])((0, _extends2["default"])({}, _this.props), {
        multiple: isMultiple,
        prefixCls: prefixCls
      })),
          suffixIcon = _getIcons.suffixIcon,
          itemIcon = _getIcons.itemIcon,
          removeIcon = _getIcons.removeIcon,
          clearIcon = _getIcons.clearIcon;

      var selectProps = (0, _omit["default"])(_this.props, ['prefixCls', 'suffixIcon', 'itemIcon', 'removeIcon', 'clearIcon', 'size', 'bordered']);
      var rcSelectRtlDropDownClassName = (0, _classnames["default"])(dropdownClassName, (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-dropdown-").concat(direction), direction === 'rtl'));
      return /*#__PURE__*/React.createElement(_SizeContext["default"].Consumer, null, function (size) {
        var _classNames2;

        var mergedSize = customizeSize || size;
        var mergedClassName = (0, _classnames["default"])(className, (_classNames2 = {}, (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-lg"), mergedSize === 'large'), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-sm"), mergedSize === 'small'), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-borderless"), !bordered), _classNames2));
        return /*#__PURE__*/React.createElement(_rcSelect["default"], (0, _extends2["default"])({
          ref: _this.selectRef,
          virtual: virtual,
          dropdownMatchSelectWidth: dropdownMatchSelectWidth
        }, selectProps, {
          listHeight: listHeight,
          listItemHeight: listItemHeight,
          mode: mode,
          prefixCls: prefixCls,
          direction: direction,
          inputIcon: suffixIcon,
          menuItemSelectedIcon: itemIcon,
          removeIcon: removeIcon,
          clearIcon: clearIcon,
          notFoundContent: mergedNotFound,
          className: mergedClassName,
          getPopupContainer: getPopupContainer || getContextPopupContainer,
          dropdownClassName: rcSelectRtlDropDownClassName
        }));
      });
    };

    return _this;
  }

  (0, _createClass2["default"])(Select, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, this.renderSelect);
    }
  }]);
  return Select;
}(React.Component);

Select.Option = _rcSelect.Option;
Select.OptGroup = _rcSelect.OptGroup;
Select.SECRET_COMBOBOX_MODE_DO_NOT_USE = 'SECRET_COMBOBOX_MODE_DO_NOT_USE';
Select.defaultProps = {
  transitionName: 'slide-up',
  choiceTransitionName: '',
  bordered: true
};
var _default = Select;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/select/utils/iconUtil.js":
/*!********************************************************!*\
  !*** ./node_modules/antd/lib/select/utils/iconUtil.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getIcons;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _DownOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/DownOutlined */ "./node_modules/@ant-design/icons/DownOutlined.js"));

var _LoadingOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/LoadingOutlined */ "./node_modules/@ant-design/icons/LoadingOutlined.js"));

var _CheckOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CheckOutlined */ "./node_modules/@ant-design/icons/CheckOutlined.js"));

var _CloseOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CloseOutlined */ "./node_modules/@ant-design/icons/CloseOutlined.js"));

var _CloseCircleFilled = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CloseCircleFilled */ "./node_modules/@ant-design/icons/CloseCircleFilled.js"));

var _SearchOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/SearchOutlined */ "./node_modules/@ant-design/icons/SearchOutlined.js"));

function getIcons(_ref) {
  var suffixIcon = _ref.suffixIcon,
      clearIcon = _ref.clearIcon,
      menuItemSelectedIcon = _ref.menuItemSelectedIcon,
      removeIcon = _ref.removeIcon,
      loading = _ref.loading,
      multiple = _ref.multiple,
      prefixCls = _ref.prefixCls;
  // Clear Icon
  var mergedClearIcon = clearIcon;

  if (!clearIcon) {
    mergedClearIcon = /*#__PURE__*/React.createElement(_CloseCircleFilled["default"], null);
  } // Arrow item icon


  var mergedSuffixIcon = null;

  if (suffixIcon !== undefined) {
    mergedSuffixIcon = suffixIcon;
  } else if (loading) {
    mergedSuffixIcon = /*#__PURE__*/React.createElement(_LoadingOutlined["default"], {
      spin: true
    });
  } else {
    var iconCls = "".concat(prefixCls, "-suffix");

    mergedSuffixIcon = function mergedSuffixIcon(_ref2) {
      var open = _ref2.open,
          showSearch = _ref2.showSearch;

      if (open && showSearch) {
        return /*#__PURE__*/React.createElement(_SearchOutlined["default"], {
          className: iconCls
        });
      }

      return /*#__PURE__*/React.createElement(_DownOutlined["default"], {
        className: iconCls
      });
    };
  } // Checked item icon


  var mergedItemIcon = null;

  if (menuItemSelectedIcon !== undefined) {
    mergedItemIcon = menuItemSelectedIcon;
  } else if (multiple) {
    mergedItemIcon = /*#__PURE__*/React.createElement(_CheckOutlined["default"], null);
  } else {
    mergedItemIcon = null;
  }

  var mergedRemoveIcon = null;

  if (removeIcon !== undefined) {
    mergedRemoveIcon = removeIcon;
  } else {
    mergedRemoveIcon = /*#__PURE__*/React.createElement(_CloseOutlined["default"], null);
  }

  return {
    clearIcon: mergedClearIcon,
    suffixIcon: mergedSuffixIcon,
    itemIcon: mergedItemIcon,
    removeIcon: mergedRemoveIcon
  };
}

/***/ }),

/***/ "./node_modules/antd/lib/space/index.js":
/*!**********************************************!*\
  !*** ./node_modules/antd/lib/space/index.js ***!
  \**********************************************/
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

var _toArray = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/Children/toArray */ "./node_modules/rc-util/lib/Children/toArray.js"));

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

var spaceSize = {
  small: 8,
  middle: 16,
  large: 24
};

var Space = function Space(props) {
  var _classNames;

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      space = _React$useContext.space,
      directionConfig = _React$useContext.direction;

  var _props$size = props.size,
      size = _props$size === void 0 ? (space === null || space === void 0 ? void 0 : space.size) || 'small' : _props$size,
      align = props.align,
      className = props.className,
      children = props.children,
      _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'horizontal' : _props$direction,
      customizePrefixCls = props.prefixCls,
      otherProps = __rest(props, ["size", "align", "className", "children", "direction", "prefixCls"]);

  var items = (0, _toArray["default"])(children);
  var len = items.length;

  if (len === 0) {
    return null;
  }

  var mergedAlign = align === undefined && direction === 'horizontal' ? 'center' : align;
  var prefixCls = getPrefixCls('space', customizePrefixCls);
  var cn = (0, _classnames["default"])(prefixCls, "".concat(prefixCls, "-").concat(direction), (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), directionConfig === 'rtl'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-align-").concat(mergedAlign), mergedAlign), _classNames), className);
  var itemClassName = "".concat(prefixCls, "-item");
  var marginDirection = directionConfig === 'rtl' ? 'marginLeft' : 'marginRight';
  return /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({
    className: cn
  }, otherProps), items.map(function (child, i) {
    return /*#__PURE__*/React.createElement("div", {
      className: itemClassName // eslint-disable-next-line react/no-array-index-key
      ,
      key: "".concat(itemClassName, "-").concat(i),
      style: i === len - 1 ? {} : (0, _defineProperty2["default"])({}, direction === 'vertical' ? 'marginBottom' : marginDirection, typeof size === 'string' ? spaceSize[size] : size)
    }, child);
  }));
};

var _default = Space;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/spin/index.js":
/*!*********************************************!*\
  !*** ./node_modules/antd/lib/spin/index.js ***!
  \*********************************************/
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

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/@babel/runtime/helpers/createSuper.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _omit = _interopRequireDefault(__webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js"));

var _debounce = _interopRequireDefault(__webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _type = __webpack_require__(/*! ../_util/type */ "./node_modules/antd/lib/_util/type.js");

var _reactNode = __webpack_require__(/*! ../_util/reactNode */ "./node_modules/antd/lib/_util/reactNode.js");

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

var SpinSizes = (0, _type.tuple)('small', 'default', 'large'); // Render indicator

var defaultIndicator = null;

function renderIndicator(prefixCls, props) {
  var indicator = props.indicator;
  var dotClassName = "".concat(prefixCls, "-dot"); // should not be render default indicator when indicator value is null

  if (indicator === null) {
    return null;
  }

  if ((0, _reactNode.isValidElement)(indicator)) {
    return (0, _reactNode.cloneElement)(indicator, {
      className: (0, _classnames["default"])(indicator.props.className, dotClassName)
    });
  }

  if ((0, _reactNode.isValidElement)(defaultIndicator)) {
    return (0, _reactNode.cloneElement)(defaultIndicator, {
      className: (0, _classnames["default"])(defaultIndicator.props.className, dotClassName)
    });
  }

  return /*#__PURE__*/React.createElement("span", {
    className: (0, _classnames["default"])(dotClassName, "".concat(prefixCls, "-dot-spin"))
  }, /*#__PURE__*/React.createElement("i", {
    className: "".concat(prefixCls, "-dot-item")
  }), /*#__PURE__*/React.createElement("i", {
    className: "".concat(prefixCls, "-dot-item")
  }), /*#__PURE__*/React.createElement("i", {
    className: "".concat(prefixCls, "-dot-item")
  }), /*#__PURE__*/React.createElement("i", {
    className: "".concat(prefixCls, "-dot-item")
  }));
}

function shouldDelay(spinning, delay) {
  return !!spinning && !!delay && !isNaN(Number(delay));
}

var Spin = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Spin, _React$Component);

  var _super = (0, _createSuper2["default"])(Spin);

  function Spin(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Spin);
    _this = _super.call(this, props);

    _this.debouncifyUpdateSpinning = function (props) {
      var _ref = props || _this.props,
          delay = _ref.delay;

      if (delay) {
        _this.cancelExistingSpin();

        _this.updateSpinning = (0, _debounce["default"])(_this.originalUpdateSpinning, delay);
      }
    };

    _this.updateSpinning = function () {
      var spinning = _this.props.spinning;
      var currentSpinning = _this.state.spinning;

      if (currentSpinning !== spinning) {
        _this.setState({
          spinning: spinning
        });
      }
    };

    _this.renderSpin = function (_ref2) {
      var _classNames;

      var getPrefixCls = _ref2.getPrefixCls,
          direction = _ref2.direction;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          className = _a.className,
          size = _a.size,
          tip = _a.tip,
          wrapperClassName = _a.wrapperClassName,
          style = _a.style,
          restProps = __rest(_a, ["prefixCls", "className", "size", "tip", "wrapperClassName", "style"]);

      var spinning = _this.state.spinning;
      var prefixCls = getPrefixCls('spin', customizePrefixCls);
      var spinClassName = (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-sm"), size === 'small'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-lg"), size === 'large'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-spinning"), spinning), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-show-text"), !!tip), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className); // fix https://fb.me/react-unknown-prop

      var divProps = (0, _omit["default"])(restProps, ['spinning', 'delay', 'indicator']);
      var spinElement = /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({}, divProps, {
        style: style,
        className: spinClassName
      }), renderIndicator(prefixCls, _this.props), tip ? /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-text")
      }, tip) : null);

      if (_this.isNestedPattern()) {
        var containerClassName = (0, _classnames["default"])("".concat(prefixCls, "-container"), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-blur"), spinning));
        return /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({}, divProps, {
          className: (0, _classnames["default"])("".concat(prefixCls, "-nested-loading"), wrapperClassName)
        }), spinning && /*#__PURE__*/React.createElement("div", {
          key: "loading"
        }, spinElement), /*#__PURE__*/React.createElement("div", {
          className: containerClassName,
          key: "container"
        }, _this.props.children));
      }

      return spinElement;
    };

    var spinning = props.spinning,
        delay = props.delay;
    var shouldBeDelayed = shouldDelay(spinning, delay);
    _this.state = {
      spinning: spinning && !shouldBeDelayed
    };
    _this.originalUpdateSpinning = _this.updateSpinning;

    _this.debouncifyUpdateSpinning(props);

    return _this;
  }

  (0, _createClass2["default"])(Spin, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateSpinning();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.debouncifyUpdateSpinning();
      this.updateSpinning();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cancelExistingSpin();
    }
  }, {
    key: "cancelExistingSpin",
    value: function cancelExistingSpin() {
      var updateSpinning = this.updateSpinning;

      if (updateSpinning && updateSpinning.cancel) {
        updateSpinning.cancel();
      }
    }
  }, {
    key: "isNestedPattern",
    value: function isNestedPattern() {
      return !!(this.props && this.props.children);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, this.renderSpin);
    }
  }], [{
    key: "setDefaultIndicator",
    value: function setDefaultIndicator(indicator) {
      defaultIndicator = indicator;
    }
  }]);
  return Spin;
}(React.Component);

Spin.defaultProps = {
  spinning: true,
  size: 'default',
  wrapperClassName: ''
};
var _default = Spin;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/table/Column.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/table/Column.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* istanbul ignore next */

/**
 * This is a syntactic sugar for `columns` prop.
 * So HOC will not work on this.
 */
// eslint-disable-next-line no-unused-vars
function Column(_) {
  return null;
}

var _default = Column;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/table/ColumnGroup.js":
/*!****************************************************!*\
  !*** ./node_modules/antd/lib/table/ColumnGroup.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* istanbul ignore next */

/**
 * This is a syntactic sugar for `columns` prop.
 * So HOC will not work on this.
 */
// eslint-disable-next-line no-unused-vars
function ColumnGroup(_) {
  return null;
}

var _default = ColumnGroup;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/table/ExpandIcon.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/table/ExpandIcon.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

function renderExpandIcon(locale) {
  return function expandIcon(_ref) {
    var _classNames;

    var prefixCls = _ref.prefixCls,
        onExpand = _ref.onExpand,
        record = _ref.record,
        expanded = _ref.expanded,
        expandable = _ref.expandable;
    var iconPrefix = "".concat(prefixCls, "-row-expand-icon");
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: function onClick(e) {
        onExpand(record, e);
        e.stopPropagation();
      },
      className: (0, _classnames["default"])(iconPrefix, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(iconPrefix, "-spaced"), !expandable), (0, _defineProperty2["default"])(_classNames, "".concat(iconPrefix, "-expanded"), expandable && expanded), (0, _defineProperty2["default"])(_classNames, "".concat(iconPrefix, "-collapsed"), expandable && !expanded), _classNames)),
      "aria-label": expanded ? locale.collapse : locale.expand
    });
  };
}

var _default = renderExpandIcon;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/table/Table.js":
/*!**********************************************!*\
  !*** ./node_modules/antd/lib/table/Table.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _omit = _interopRequireDefault(__webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js"));

var _rcTable = _interopRequireWildcard(__webpack_require__(/*! rc-table */ "./node_modules/rc-table/es/index.js"));

var _Table = __webpack_require__(/*! rc-table/lib/Table */ "./node_modules/rc-table/lib/Table.js");

var _useColumns = __webpack_require__(/*! rc-table/lib/hooks/useColumns */ "./node_modules/rc-table/lib/hooks/useColumns.js");

var _spin = _interopRequireDefault(__webpack_require__(/*! ../spin */ "./node_modules/antd/lib/spin/index.js"));

var _pagination = _interopRequireDefault(__webpack_require__(/*! ../pagination */ "./node_modules/antd/lib/pagination/index.js"));

var _context = __webpack_require__(/*! ../config-provider/context */ "./node_modules/antd/lib/config-provider/context.js");

var _usePagination3 = _interopRequireWildcard(__webpack_require__(/*! ./hooks/usePagination */ "./node_modules/antd/lib/table/hooks/usePagination.js"));

var _useLazyKVMap3 = _interopRequireDefault(__webpack_require__(/*! ./hooks/useLazyKVMap */ "./node_modules/antd/lib/table/hooks/useLazyKVMap.js"));

var _useSelection3 = _interopRequireWildcard(__webpack_require__(/*! ./hooks/useSelection */ "./node_modules/antd/lib/table/hooks/useSelection.js"));

var _useSorter3 = _interopRequireWildcard(__webpack_require__(/*! ./hooks/useSorter */ "./node_modules/antd/lib/table/hooks/useSorter.js"));

var _useFilter3 = _interopRequireWildcard(__webpack_require__(/*! ./hooks/useFilter */ "./node_modules/antd/lib/table/hooks/useFilter/index.js"));

var _useTitleColumns3 = _interopRequireDefault(__webpack_require__(/*! ./hooks/useTitleColumns */ "./node_modules/antd/lib/table/hooks/useTitleColumns.js"));

var _ExpandIcon = _interopRequireDefault(__webpack_require__(/*! ./ExpandIcon */ "./node_modules/antd/lib/table/ExpandIcon.js"));

var _scrollTo = _interopRequireDefault(__webpack_require__(/*! ../_util/scrollTo */ "./node_modules/antd/lib/_util/scrollTo.js"));

var _en_US = _interopRequireDefault(__webpack_require__(/*! ../locale/en_US */ "./node_modules/antd/lib/locale/en_US.js"));

var _SizeContext = _interopRequireDefault(__webpack_require__(/*! ../config-provider/SizeContext */ "./node_modules/antd/lib/config-provider/SizeContext.js"));

var _Column = _interopRequireDefault(__webpack_require__(/*! ./Column */ "./node_modules/antd/lib/table/Column.js"));

var _ColumnGroup = _interopRequireDefault(__webpack_require__(/*! ./ColumnGroup */ "./node_modules/antd/lib/table/ColumnGroup.js"));

var _devWarning = _interopRequireDefault(__webpack_require__(/*! ../_util/devWarning */ "./node_modules/antd/lib/_util/devWarning.js"));

var _useBreakpoint = _interopRequireDefault(__webpack_require__(/*! ../grid/hooks/useBreakpoint */ "./node_modules/antd/lib/grid/hooks/useBreakpoint.js"));

var EMPTY_LIST = [];

function Table(props) {
  var _classNames3;

  var customizePrefixCls = props.prefixCls,
      className = props.className,
      style = props.style,
      customizeSize = props.size,
      bordered = props.bordered,
      customizeDropdownPrefixCls = props.dropdownPrefixCls,
      dataSource = props.dataSource,
      pagination = props.pagination,
      rowSelection = props.rowSelection,
      rowKey = props.rowKey,
      rowClassName = props.rowClassName,
      columns = props.columns,
      children = props.children,
      legacyChildrenColumnName = props.childrenColumnName,
      onChange = props.onChange,
      getPopupContainer = props.getPopupContainer,
      loading = props.loading,
      expandIcon = props.expandIcon,
      expandable = props.expandable,
      expandedRowRender = props.expandedRowRender,
      expandIconColumnIndex = props.expandIconColumnIndex,
      indentSize = props.indentSize,
      scroll = props.scroll,
      sortDirections = props.sortDirections,
      locale = props.locale,
      _props$showSorterTool = props.showSorterTooltip,
      showSorterTooltip = _props$showSorterTool === void 0 ? true : _props$showSorterTool;
  (0, _devWarning["default"])(!(typeof rowKey === 'function' && rowKey.length > 1), 'Table', '`index` parameter of `rowKey` function is deprecated. There is no guarantee that it will work as expected.');
  var screens = (0, _useBreakpoint["default"])();
  var mergedColumns = React.useMemo(function () {
    var matched = new Set(Object.keys(screens).filter(function (m) {
      return screens[m];
    }));
    return (columns || (0, _useColumns.convertChildrenToColumns)(children)).filter(function (c) {
      return !c.responsive || c.responsive.some(function (r) {
        return matched.has(r);
      });
    });
  }, [children, columns, screens]);
  var tableProps = (0, _omit["default"])(props, ['className', 'style', 'columns']);
  var size = React.useContext(_SizeContext["default"]);

  var _React$useContext = React.useContext(_context.ConfigContext),
      _React$useContext$loc = _React$useContext.locale,
      contextLocale = _React$useContext$loc === void 0 ? _en_US["default"] : _React$useContext$loc,
      renderEmpty = _React$useContext.renderEmpty,
      direction = _React$useContext.direction;

  var mergedSize = customizeSize || size;
  var tableLocale = (0, _extends2["default"])((0, _extends2["default"])({}, contextLocale.Table), locale);
  var rawData = dataSource || EMPTY_LIST;

  var _React$useContext2 = React.useContext(_context.ConfigContext),
      getPrefixCls = _React$useContext2.getPrefixCls;

  var prefixCls = getPrefixCls('table', customizePrefixCls);
  var dropdownPrefixCls = getPrefixCls('dropdown', customizeDropdownPrefixCls);
  var mergedExpandable = (0, _extends2["default"])({
    childrenColumnName: legacyChildrenColumnName,
    expandIconColumnIndex: expandIconColumnIndex
  }, expandable);
  var _mergedExpandable$chi = mergedExpandable.childrenColumnName,
      childrenColumnName = _mergedExpandable$chi === void 0 ? 'children' : _mergedExpandable$chi;
  var expandType = React.useMemo(function () {
    if (rawData.some(function (item) {
      var _a;

      return (_a = item) === null || _a === void 0 ? void 0 : _a[childrenColumnName];
    })) {
      return 'nest';
    }

    if (expandedRowRender || expandable && expandable.expandedRowRender) {
      return 'row';
    }

    return null;
  }, [rawData]);
  var internalRefs = {
    body: React.useRef()
  }; // ============================ RowKey ============================

  var getRowKey = React.useMemo(function () {
    if (typeof rowKey === 'function') {
      return rowKey;
    }

    return function (record) {
      var _a;

      return (_a = record) === null || _a === void 0 ? void 0 : _a[rowKey];
    };
  }, [rowKey]);

  var _useLazyKVMap = (0, _useLazyKVMap3["default"])(rawData, childrenColumnName, getRowKey),
      _useLazyKVMap2 = (0, _slicedToArray2["default"])(_useLazyKVMap, 1),
      getRecordByKey = _useLazyKVMap2[0]; // ============================ Events =============================


  var changeEventInfo = {};

  var triggerOnChange = function triggerOnChange(info, action) {
    var reset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var changeInfo = (0, _extends2["default"])((0, _extends2["default"])({}, changeEventInfo), info);

    if (reset) {
      changeEventInfo.resetPagination(); // Reset event param

      if (changeInfo.pagination.current) {
        changeInfo.pagination.current = 1;
      } // Trigger pagination events


      if (pagination && pagination.onChange) {
        pagination.onChange(1, changeInfo.pagination.pageSize);
      }
    }

    if (scroll && scroll.scrollToFirstRowOnChange !== false && internalRefs.body.current) {
      (0, _scrollTo["default"])(0, {
        getContainer: function getContainer() {
          return internalRefs.body.current;
        }
      });
    }

    if (onChange) {
      onChange(changeInfo.pagination, changeInfo.filters, changeInfo.sorter, {
        currentDataSource: (0, _useFilter3.getFilterData)((0, _useSorter3.getSortData)(rawData, changeInfo.sorterStates, childrenColumnName), changeInfo.filterStates),
        action: action
      });
    }
  };
  /**
   * Controlled state in `columns` is not a good idea that makes too many code (1000+ line?)
   * to read state out and then put it back to title render.
   * Move these code into `hooks` but still too complex.
   * We should provides Table props like `sorter` & `filter` to handle control in next big version.
   */
  // ============================ Sorter =============================


  var onSorterChange = function onSorterChange(sorter, sorterStates) {
    triggerOnChange({
      sorter: sorter,
      sorterStates: sorterStates
    }, 'sort', false);
  };

  var _useSorter = (0, _useSorter3["default"])({
    prefixCls: prefixCls,
    mergedColumns: mergedColumns,
    onSorterChange: onSorterChange,
    sortDirections: sortDirections || ['ascend', 'descend'],
    tableLocale: tableLocale,
    showSorterTooltip: showSorterTooltip
  }),
      _useSorter2 = (0, _slicedToArray2["default"])(_useSorter, 4),
      transformSorterColumns = _useSorter2[0],
      sortStates = _useSorter2[1],
      sorterTitleProps = _useSorter2[2],
      getSorters = _useSorter2[3];

  var sortedData = React.useMemo(function () {
    return (0, _useSorter3.getSortData)(rawData, sortStates, childrenColumnName);
  }, [rawData, sortStates]);
  changeEventInfo.sorter = getSorters();
  changeEventInfo.sorterStates = sortStates; // ============================ Filter ============================

  var onFilterChange = function onFilterChange(filters, filterStates) {
    triggerOnChange({
      filters: filters,
      filterStates: filterStates
    }, 'filter', true);
  };

  var _useFilter = (0, _useFilter3["default"])({
    prefixCls: prefixCls,
    locale: tableLocale,
    dropdownPrefixCls: dropdownPrefixCls,
    mergedColumns: mergedColumns,
    onFilterChange: onFilterChange,
    getPopupContainer: getPopupContainer
  }),
      _useFilter2 = (0, _slicedToArray2["default"])(_useFilter, 3),
      transformFilterColumns = _useFilter2[0],
      filterStates = _useFilter2[1],
      getFilters = _useFilter2[2];

  var mergedData = (0, _useFilter3.getFilterData)(sortedData, filterStates);
  changeEventInfo.filters = getFilters();
  changeEventInfo.filterStates = filterStates; // ============================ Column ============================

  var columnTitleProps = React.useMemo(function () {
    return (0, _extends2["default"])({}, sorterTitleProps);
  }, [sorterTitleProps]);

  var _useTitleColumns = (0, _useTitleColumns3["default"])(columnTitleProps),
      _useTitleColumns2 = (0, _slicedToArray2["default"])(_useTitleColumns, 1),
      transformTitleColumns = _useTitleColumns2[0]; // ========================== Pagination ==========================


  var onPaginationChange = function onPaginationChange(current, pageSize) {
    triggerOnChange({
      pagination: (0, _extends2["default"])((0, _extends2["default"])({}, changeEventInfo.pagination), {
        current: current,
        pageSize: pageSize
      })
    }, 'paginate');
  };

  var _usePagination = (0, _usePagination3["default"])(mergedData.length, pagination, onPaginationChange),
      _usePagination2 = (0, _slicedToArray2["default"])(_usePagination, 2),
      mergedPagination = _usePagination2[0],
      resetPagination = _usePagination2[1];

  changeEventInfo.pagination = pagination === false ? {} : (0, _usePagination3.getPaginationParam)(pagination, mergedPagination);
  changeEventInfo.resetPagination = resetPagination; // ============================= Data =============================

  var pageData = React.useMemo(function () {
    if (pagination === false || !mergedPagination.pageSize) {
      return mergedData;
    }

    var _mergedPagination$cur = mergedPagination.current,
        current = _mergedPagination$cur === void 0 ? 1 : _mergedPagination$cur,
        total = mergedPagination.total,
        _mergedPagination$pag = mergedPagination.pageSize,
        pageSize = _mergedPagination$pag === void 0 ? _usePagination3.DEFAULT_PAGE_SIZE : _mergedPagination$pag; // Dynamic table data

    if (mergedData.length < total) {
      if (mergedData.length > pageSize) {
        (0, _devWarning["default"])(false, 'Table', '`dataSource` length is less than `pagination.total` but large than `pagination.pageSize`. Please make sure your config correct data with async mode.');
        return mergedData.slice((current - 1) * pageSize, current * pageSize);
      }

      return mergedData;
    }

    return mergedData.slice((current - 1) * pageSize, current * pageSize);
  }, [!!pagination, mergedData, mergedPagination && mergedPagination.current, mergedPagination && mergedPagination.pageSize, mergedPagination && mergedPagination.total]); // ========================== Selections ==========================

  var _useSelection = (0, _useSelection3["default"])(rowSelection, {
    prefixCls: prefixCls,
    data: mergedData,
    pageData: pageData,
    getRowKey: getRowKey,
    getRecordByKey: getRecordByKey,
    expandType: expandType,
    childrenColumnName: childrenColumnName,
    locale: tableLocale,
    expandIconColumnIndex: mergedExpandable.expandIconColumnIndex,
    getPopupContainer: getPopupContainer
  }),
      _useSelection2 = (0, _slicedToArray2["default"])(_useSelection, 2),
      transformSelectionColumns = _useSelection2[0],
      selectedKeySet = _useSelection2[1];

  var internalRowClassName = function internalRowClassName(record, index, indent) {
    var mergedRowClassName;

    if (typeof rowClassName === 'function') {
      mergedRowClassName = (0, _classnames["default"])(rowClassName(record, index, indent));
    } else {
      mergedRowClassName = (0, _classnames["default"])(rowClassName);
    }

    return (0, _classnames["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-row-selected"), selectedKeySet.has(getRowKey(record, index))), mergedRowClassName);
  }; // ========================== Expandable ==========================
  // Pass origin render status into `rc-table`, this can be removed when refactor with `rc-table`


  mergedExpandable.__PARENT_RENDER_ICON__ = mergedExpandable.expandIcon; // Customize expandable icon

  mergedExpandable.expandIcon = mergedExpandable.expandIcon || expandIcon || (0, _ExpandIcon["default"])(tableLocale); // Adjust expand icon index, no overwrite expandIconColumnIndex if set.

  if (expandType === 'nest' && mergedExpandable.expandIconColumnIndex === undefined) {
    mergedExpandable.expandIconColumnIndex = rowSelection ? 1 : 0;
  } else if (mergedExpandable.expandIconColumnIndex > 0 && rowSelection) {
    mergedExpandable.expandIconColumnIndex -= 1;
  } // Indent size


  if (typeof mergedExpandable.indentSize !== 'number') {
    mergedExpandable.indentSize = typeof indentSize === 'number' ? indentSize : 15;
  } // ============================ Render ============================


  var transformColumns = React.useCallback(function (innerColumns) {
    return transformTitleColumns(transformSelectionColumns(transformFilterColumns(transformSorterColumns(innerColumns))));
  }, [transformSorterColumns, transformFilterColumns, transformSelectionColumns]);
  var topPaginationNode;
  var bottomPaginationNode;

  if (pagination !== false) {
    var paginationSize;

    if (mergedPagination.size) {
      paginationSize = mergedPagination.size;
    } else {
      paginationSize = mergedSize === 'small' || mergedSize === 'middle' ? 'small' : undefined;
    }

    var renderPagination = function renderPagination(position) {
      return /*#__PURE__*/React.createElement(_pagination["default"], (0, _extends2["default"])({
        className: "".concat(prefixCls, "-pagination ").concat(prefixCls, "-pagination-").concat(position)
      }, mergedPagination, {
        size: paginationSize
      }));
    };

    var defaultPosition = direction === 'rtl' ? 'left' : 'right';

    if (mergedPagination.position !== null && Array.isArray(mergedPagination.position)) {
      var topPos = mergedPagination.position.find(function (p) {
        return p.indexOf('top') !== -1;
      });
      var bottomPos = mergedPagination.position.find(function (p) {
        return p.indexOf('bottom') !== -1;
      });

      if (!topPos && !bottomPos) {
        bottomPaginationNode = renderPagination(defaultPosition);
      } else {
        if (topPos) {
          topPaginationNode = renderPagination(topPos.toLowerCase().replace('top', ''));
        }

        if (bottomPos) {
          bottomPaginationNode = renderPagination(bottomPos.toLowerCase().replace('bottom', ''));
        }
      }
    } else {
      bottomPaginationNode = renderPagination(defaultPosition);
    }
  } // >>>>>>>>> Spinning


  var spinProps;

  if (typeof loading === 'boolean') {
    spinProps = {
      spinning: loading
    };
  } else if ((0, _typeof2["default"])(loading) === 'object') {
    spinProps = (0, _extends2["default"])({
      spinning: true
    }, loading);
  }

  var wrapperClassNames = (0, _classnames["default"])("".concat(prefixCls, "-wrapper"), className, (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-wrapper-rtl"), direction === 'rtl'));
  return /*#__PURE__*/React.createElement("div", {
    className: wrapperClassNames,
    style: style
  }, /*#__PURE__*/React.createElement(_spin["default"], (0, _extends2["default"])({
    spinning: false
  }, spinProps), topPaginationNode, /*#__PURE__*/React.createElement(_rcTable["default"], (0, _extends2["default"])({}, tableProps, {
    columns: mergedColumns,
    direction: direction,
    expandable: mergedExpandable,
    prefixCls: prefixCls,
    className: (0, _classnames["default"])((_classNames3 = {}, (0, _defineProperty2["default"])(_classNames3, "".concat(prefixCls, "-middle"), mergedSize === 'middle'), (0, _defineProperty2["default"])(_classNames3, "".concat(prefixCls, "-small"), mergedSize === 'small'), (0, _defineProperty2["default"])(_classNames3, "".concat(prefixCls, "-bordered"), bordered), (0, _defineProperty2["default"])(_classNames3, "".concat(prefixCls, "-empty"), rawData.length === 0), _classNames3)),
    data: pageData,
    rowKey: getRowKey,
    rowClassName: internalRowClassName,
    emptyText: locale && locale.emptyText || renderEmpty('Table') // Internal
    ,
    internalHooks: _Table.INTERNAL_HOOKS,
    internalRefs: internalRefs,
    transformColumns: transformColumns
  })), mergedData && mergedData.length > 0 && bottomPaginationNode));
}

Table.defaultProps = {
  rowKey: 'key'
};
Table.SELECTION_ALL = _useSelection3.SELECTION_ALL;
Table.SELECTION_INVERT = _useSelection3.SELECTION_INVERT;
Table.Column = _Column["default"];
Table.ColumnGroup = _ColumnGroup["default"];
Table.Summary = _rcTable.Summary;
var _default = Table;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/table/hooks/useFilter/FilterDropdown.js":
/*!***********************************************************************!*\
  !*** ./node_modules/antd/lib/table/hooks/useFilter/FilterDropdown.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _isEqual = _interopRequireDefault(__webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js"));

var _FilterFilled = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/FilterFilled */ "./node_modules/@ant-design/icons/FilterFilled.js"));

var _button = _interopRequireDefault(__webpack_require__(/*! ../../../button */ "./node_modules/antd/lib/button/index.js"));

var _menu = _interopRequireDefault(__webpack_require__(/*! ../../../menu */ "./node_modules/antd/lib/menu/index.js"));

var _checkbox = _interopRequireDefault(__webpack_require__(/*! ../../../checkbox */ "./node_modules/antd/lib/checkbox/index.js"));

var _radio = _interopRequireDefault(__webpack_require__(/*! ../../../radio */ "./node_modules/antd/lib/radio/index.js"));

var _dropdown = _interopRequireDefault(__webpack_require__(/*! ../../../dropdown */ "./node_modules/antd/lib/dropdown/index.js"));

var _empty = _interopRequireDefault(__webpack_require__(/*! ../../../empty */ "./node_modules/antd/lib/empty/index.js"));

var _FilterWrapper = _interopRequireDefault(__webpack_require__(/*! ./FilterWrapper */ "./node_modules/antd/lib/table/hooks/useFilter/FilterWrapper.js"));

var _useSyncState3 = _interopRequireDefault(__webpack_require__(/*! ../useSyncState */ "./node_modules/antd/lib/table/hooks/useSyncState.js"));

var _context = __webpack_require__(/*! ../../../config-provider/context */ "./node_modules/antd/lib/config-provider/context.js");

var SubMenu = _menu["default"].SubMenu,
    MenuItem = _menu["default"].Item;

function hasSubMenu(filters) {
  return filters.some(function (_ref) {
    var children = _ref.children;
    return children;
  });
}

function renderFilterItems(_ref2) {
  var filters = _ref2.filters,
      prefixCls = _ref2.prefixCls,
      filteredKeys = _ref2.filteredKeys,
      filterMultiple = _ref2.filterMultiple,
      locale = _ref2.locale;

  if (filters.length === 0) {
    // wrapped with <></> to avoid react warning
    // https://github.com/ant-design/ant-design/issues/25979
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_empty["default"], {
      image: _empty["default"].PRESENTED_IMAGE_SIMPLE,
      description: locale.filterEmptyText,
      style: {
        margin: '16px 0'
      },
      imageStyle: {
        height: 24
      }
    }));
  }

  return filters.map(function (filter, index) {
    var key = String(filter.value);

    if (filter.children) {
      return /*#__PURE__*/React.createElement(SubMenu, {
        key: key || index,
        title: filter.text,
        popupClassName: "".concat(prefixCls, "-dropdown-submenu")
      }, renderFilterItems({
        filters: filter.children,
        prefixCls: prefixCls,
        filteredKeys: filteredKeys,
        filterMultiple: filterMultiple,
        locale: locale
      }));
    }

    var Component = filterMultiple ? _checkbox["default"] : _radio["default"];
    return /*#__PURE__*/React.createElement(MenuItem, {
      key: filter.value !== undefined ? key : index
    }, /*#__PURE__*/React.createElement(Component, {
      checked: filteredKeys.includes(key)
    }), /*#__PURE__*/React.createElement("span", null, filter.text));
  });
}

function FilterDropdown(props) {
  var _a;

  var prefixCls = props.prefixCls,
      column = props.column,
      dropdownPrefixCls = props.dropdownPrefixCls,
      columnKey = props.columnKey,
      filterMultiple = props.filterMultiple,
      filterState = props.filterState,
      triggerFilter = props.triggerFilter,
      locale = props.locale,
      children = props.children,
      getPopupContainer = props.getPopupContainer;
  var filterDropdownVisible = column.filterDropdownVisible,
      onFilterDropdownVisibleChange = column.onFilterDropdownVisibleChange;

  var _React$useState = React.useState(false),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      visible = _React$useState2[0],
      setVisible = _React$useState2[1];

  var filtered = !!(filterState && (((_a = filterState.filteredKeys) === null || _a === void 0 ? void 0 : _a.length) || filterState.forceFiltered));

  var triggerVisible = function triggerVisible(newVisible) {
    setVisible(newVisible);

    if (onFilterDropdownVisibleChange) {
      onFilterDropdownVisibleChange(newVisible);
    }
  };

  var mergedVisible = typeof filterDropdownVisible === 'boolean' ? filterDropdownVisible : visible; // ===================== Select Keys =====================

  var propFilteredKeys = filterState && filterState.filteredKeys;

  var _useSyncState = (0, _useSyncState3["default"])(propFilteredKeys || []),
      _useSyncState2 = (0, _slicedToArray2["default"])(_useSyncState, 2),
      getFilteredKeysSync = _useSyncState2[0],
      setFilteredKeysSync = _useSyncState2[1];

  var onSelectKeys = function onSelectKeys(_ref3) {
    var selectedKeys = _ref3.selectedKeys;
    setFilteredKeysSync(selectedKeys);
  };

  React.useEffect(function () {
    onSelectKeys({
      selectedKeys: propFilteredKeys || []
    });
  }, [propFilteredKeys]); // ====================== Open Keys ======================

  var _React$useState3 = React.useState([]),
      _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
      openKeys = _React$useState4[0],
      setOpenKeys = _React$useState4[1];

  var openRef = React.useRef();

  var onOpenChange = function onOpenChange(keys) {
    openRef.current = window.setTimeout(function () {
      setOpenKeys(keys);
    });
  };

  var onMenuClick = function onMenuClick() {
    window.clearTimeout(openRef.current);
  };

  React.useEffect(function () {
    return function () {
      window.clearTimeout(openRef.current);
    };
  }, []); // ======================= Submit ========================

  var internalTriggerFilter = function internalTriggerFilter(keys) {
    triggerVisible(false);
    var mergedKeys = keys && keys.length ? keys : null;

    if (mergedKeys === null && (!filterState || !filterState.filteredKeys)) {
      return null;
    }

    if ((0, _isEqual["default"])(mergedKeys, filterState === null || filterState === void 0 ? void 0 : filterState.filteredKeys)) {
      return null;
    }

    triggerFilter({
      column: column,
      key: columnKey,
      filteredKeys: mergedKeys
    });
  };

  var onConfirm = function onConfirm() {
    internalTriggerFilter(getFilteredKeysSync());
  };

  var onReset = function onReset() {
    setFilteredKeysSync([]);
    internalTriggerFilter([]);
  };

  var onVisibleChange = function onVisibleChange(newVisible) {
    if (newVisible && propFilteredKeys !== undefined) {
      // Sync filteredKeys on appear in controlled mode (propFilteredKeys !== undefiend)
      setFilteredKeysSync(propFilteredKeys || []);
    }

    triggerVisible(newVisible); // Default will filter when closed

    if (!newVisible && !column.filterDropdown) {
      onConfirm();
    }
  }; // ======================== Style ========================


  var dropdownMenuClass = (0, _classnames["default"])((0, _defineProperty2["default"])({}, "".concat(dropdownPrefixCls, "-menu-without-submenu"), !hasSubMenu(column.filters || [])));
  var dropdownContent;

  if (typeof column.filterDropdown === 'function') {
    dropdownContent = column.filterDropdown({
      prefixCls: "".concat(dropdownPrefixCls, "-custom"),
      setSelectedKeys: function setSelectedKeys(selectedKeys) {
        return onSelectKeys({
          selectedKeys: selectedKeys
        });
      },
      selectedKeys: getFilteredKeysSync(),
      confirm: onConfirm,
      clearFilters: onReset,
      filters: column.filters,
      visible: mergedVisible
    });
  } else if (column.filterDropdown) {
    dropdownContent = column.filterDropdown;
  } else {
    var selectedKeys = getFilteredKeysSync() || [];
    dropdownContent = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_menu["default"], {
      multiple: filterMultiple,
      prefixCls: "".concat(dropdownPrefixCls, "-menu"),
      className: dropdownMenuClass,
      onClick: onMenuClick,
      onSelect: onSelectKeys,
      onDeselect: onSelectKeys,
      selectedKeys: selectedKeys,
      getPopupContainer: getPopupContainer,
      openKeys: openKeys,
      onOpenChange: onOpenChange
    }, renderFilterItems({
      filters: column.filters || [],
      prefixCls: prefixCls,
      filteredKeys: getFilteredKeysSync(),
      filterMultiple: filterMultiple,
      locale: locale
    })), /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-dropdown-btns")
    }, /*#__PURE__*/React.createElement(_button["default"], {
      type: "link",
      size: "small",
      disabled: selectedKeys.length === 0,
      onClick: onReset
    }, locale.filterReset), /*#__PURE__*/React.createElement(_button["default"], {
      type: "primary",
      size: "small",
      onClick: onConfirm
    }, locale.filterConfirm)));
  }

  var menu = /*#__PURE__*/React.createElement(_FilterWrapper["default"], {
    className: "".concat(prefixCls, "-dropdown")
  }, dropdownContent);
  var filterIcon;

  if (typeof column.filterIcon === 'function') {
    filterIcon = column.filterIcon(filtered);
  } else if (column.filterIcon) {
    filterIcon = column.filterIcon;
  } else {
    filterIcon = /*#__PURE__*/React.createElement(_FilterFilled["default"], null);
  }

  var _React$useContext = React.useContext(_context.ConfigContext),
      direction = _React$useContext.direction;

  return /*#__PURE__*/React.createElement("div", {
    className: (0, _classnames["default"])("".concat(prefixCls, "-column"))
  }, /*#__PURE__*/React.createElement("span", {
    className: "".concat(prefixCls, "-column-title")
  }, children), /*#__PURE__*/React.createElement("span", {
    className: (0, _classnames["default"])("".concat(prefixCls, "-trigger-container"), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-trigger-container-open"), mergedVisible)),
    onClick: function onClick(e) {
      e.stopPropagation();
    }
  }, /*#__PURE__*/React.createElement(_dropdown["default"], {
    overlay: menu,
    trigger: ['click'],
    visible: mergedVisible,
    onVisibleChange: onVisibleChange,
    getPopupContainer: getPopupContainer,
    placement: direction === 'rtl' ? 'bottomLeft' : 'bottomRight'
  }, /*#__PURE__*/React.createElement("span", {
    role: "button",
    tabIndex: -1,
    className: (0, _classnames["default"])("".concat(prefixCls, "-trigger"), {
      active: filtered
    })
  }, filterIcon))));
}

var _default = FilterDropdown;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/table/hooks/useFilter/FilterWrapper.js":
/*!**********************************************************************!*\
  !*** ./node_modules/antd/lib/table/hooks/useFilter/FilterWrapper.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var FilterDropdownMenuWrapper = function FilterDropdownMenuWrapper(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, props.children);
};

var _default = FilterDropdownMenuWrapper;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/table/hooks/useFilter/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/antd/lib/table/hooks/useFilter/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFilterData = getFilterData;
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _util = __webpack_require__(/*! ../../util */ "./node_modules/antd/lib/table/util.js");

var _FilterDropdown = _interopRequireDefault(__webpack_require__(/*! ./FilterDropdown */ "./node_modules/antd/lib/table/hooks/useFilter/FilterDropdown.js"));

function collectFilterStates(columns, init, pos) {
  var filterStates = [];
  (columns || []).forEach(function (column, index) {
    var columnPos = (0, _util.getColumnPos)(index, pos);

    if ('children' in column) {
      filterStates = [].concat((0, _toConsumableArray2["default"])(filterStates), (0, _toConsumableArray2["default"])(collectFilterStates(column.children, init, columnPos)));
    } else if (column.filters || 'filterDropdown' in column || 'onFilter' in column) {
      if ('filteredValue' in column) {
        // Controlled
        filterStates.push({
          column: column,
          key: (0, _util.getColumnKey)(column, columnPos),
          filteredKeys: column.filteredValue,
          forceFiltered: column.filtered
        });
      } else {
        // Uncontrolled
        filterStates.push({
          column: column,
          key: (0, _util.getColumnKey)(column, columnPos),
          filteredKeys: init && column.defaultFilteredValue ? column.defaultFilteredValue : undefined,
          forceFiltered: column.filtered
        });
      }
    }
  });
  return filterStates;
}

function injectFilter(prefixCls, dropdownPrefixCls, columns, filterStates, triggerFilter, getPopupContainer, locale, pos) {
  return columns.map(function (column, index) {
    var columnPos = (0, _util.getColumnPos)(index, pos);
    var _column$filterMultipl = column.filterMultiple,
        filterMultiple = _column$filterMultipl === void 0 ? true : _column$filterMultipl;

    if (column.filters || 'filterDropdown' in column) {
      var columnKey = (0, _util.getColumnKey)(column, columnPos);
      var filterState = filterStates.find(function (_ref) {
        var key = _ref.key;
        return columnKey === key;
      });
      return (0, _extends2["default"])((0, _extends2["default"])({}, column), {
        title: function title(renderProps) {
          return /*#__PURE__*/React.createElement(_FilterDropdown["default"], {
            prefixCls: "".concat(prefixCls, "-filter"),
            dropdownPrefixCls: dropdownPrefixCls,
            column: column,
            columnKey: columnKey,
            filterState: filterState,
            filterMultiple: filterMultiple,
            triggerFilter: triggerFilter,
            locale: locale,
            getPopupContainer: getPopupContainer
          }, (0, _util.renderColumnTitle)(column.title, renderProps));
        }
      });
    }

    if ('children' in column) {
      return (0, _extends2["default"])((0, _extends2["default"])({}, column), {
        children: injectFilter(prefixCls, dropdownPrefixCls, column.children, filterStates, triggerFilter, getPopupContainer, locale, columnPos)
      });
    }

    return column;
  });
}

function generateFilterInfo(filterStates) {
  var currentFilters = {};
  filterStates.forEach(function (_ref2) {
    var key = _ref2.key,
        filteredKeys = _ref2.filteredKeys;
    currentFilters[key] = filteredKeys || null;
  });
  return currentFilters;
}

function flattenKeys(filters) {
  var keys = [];
  (filters || []).forEach(function (_ref3) {
    var value = _ref3.value,
        children = _ref3.children;
    keys.push(value);

    if (children) {
      keys = [].concat((0, _toConsumableArray2["default"])(keys), (0, _toConsumableArray2["default"])(flattenKeys(children)));
    }
  });
  return keys;
}

function getFilterData(data, filterStates) {
  return filterStates.reduce(function (currentData, filterState) {
    var _filterState$column = filterState.column,
        onFilter = _filterState$column.onFilter,
        filters = _filterState$column.filters,
        filteredKeys = filterState.filteredKeys;

    if (onFilter && filteredKeys && filteredKeys.length) {
      return currentData.filter(function (record) {
        return filteredKeys.some(function (key) {
          var keys = flattenKeys(filters);
          var keyIndex = keys.findIndex(function (k) {
            return String(k) === String(key);
          });
          var realKey = keyIndex !== -1 ? keys[keyIndex] : key;
          return onFilter(realKey, record);
        });
      });
    }

    return currentData;
  }, data);
}

function useFilter(_ref4) {
  var prefixCls = _ref4.prefixCls,
      dropdownPrefixCls = _ref4.dropdownPrefixCls,
      mergedColumns = _ref4.mergedColumns,
      onFilterChange = _ref4.onFilterChange,
      getPopupContainer = _ref4.getPopupContainer,
      tableLocale = _ref4.locale;

  var _React$useState = React.useState(collectFilterStates(mergedColumns, true)),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      filterStates = _React$useState2[0],
      setFilterStates = _React$useState2[1];

  var mergedFilterStates = React.useMemo(function () {
    var collectedStates = collectFilterStates(mergedColumns, false); // Return if not controlled

    if (collectedStates.every(function (_ref5) {
      var filteredKeys = _ref5.filteredKeys;
      return filteredKeys === undefined;
    })) {
      return filterStates;
    }

    return collectedStates;
  }, [mergedColumns, filterStates]);
  var getFilters = React.useCallback(function () {
    return generateFilterInfo(mergedFilterStates);
  }, [mergedFilterStates]);

  var triggerFilter = function triggerFilter(filterState) {
    var newFilterStates = mergedFilterStates.filter(function (_ref6) {
      var key = _ref6.key;
      return key !== filterState.key;
    });
    newFilterStates.push(filterState);
    setFilterStates(newFilterStates);
    onFilterChange(generateFilterInfo(newFilterStates), newFilterStates);
  };

  var transformColumns = function transformColumns(innerColumns) {
    return injectFilter(prefixCls, dropdownPrefixCls, innerColumns, mergedFilterStates, triggerFilter, getPopupContainer, tableLocale);
  };

  return [transformColumns, mergedFilterStates, getFilters];
}

var _default = useFilter;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/table/hooks/useLazyKVMap.js":
/*!***********************************************************!*\
  !*** ./node_modules/antd/lib/table/hooks/useLazyKVMap.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useLazyKVMap;

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function useLazyKVMap(data, childrenColumnName, getRowKey) {
  var mapCacheRef = React.useRef({});

  function getRecordByKey(key) {
    if (!mapCacheRef.current || mapCacheRef.current.data !== data || mapCacheRef.current.childrenColumnName !== childrenColumnName || mapCacheRef.current.getRowKey !== getRowKey) {
      /* eslint-disable no-inner-declarations */
      var dig = function dig(records) {
        records.forEach(function (record, index) {
          var rowKey = getRowKey(record, index);
          kvMap.set(rowKey, record);

          if (record && (0, _typeof2["default"])(record) === 'object' && childrenColumnName in record) {
            dig(record[childrenColumnName] || []);
          }
        });
      };
      /* eslint-enable */


      var kvMap = new Map();
      dig(data);
      mapCacheRef.current = {
        data: data,
        childrenColumnName: childrenColumnName,
        kvMap: kvMap,
        getRowKey: getRowKey
      };
    }

    return mapCacheRef.current.kvMap.get(key);
  }

  return [getRecordByKey];
}

/***/ }),

/***/ "./node_modules/antd/lib/table/hooks/usePagination.js":
/*!************************************************************!*\
  !*** ./node_modules/antd/lib/table/hooks/usePagination.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPaginationParam = getPaginationParam;
exports["default"] = usePagination;
exports.DEFAULT_PAGE_SIZE = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

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

var DEFAULT_PAGE_SIZE = 10;
exports.DEFAULT_PAGE_SIZE = DEFAULT_PAGE_SIZE;

function getPaginationParam(pagination, mergedPagination) {
  var param = {
    current: mergedPagination.current,
    pageSize: mergedPagination.pageSize
  };
  var paginationObj = pagination && (0, _typeof2["default"])(pagination) === 'object' ? pagination : {};
  Object.keys(paginationObj).forEach(function (pageProp) {
    var value = mergedPagination[pageProp];

    if (typeof value !== 'function') {
      param[pageProp] = value;
    }
  });
  return param;
}

function extendsObject() {
  var result = {};

  for (var _len = arguments.length, list = new Array(_len), _key = 0; _key < _len; _key++) {
    list[_key] = arguments[_key];
  }

  list.forEach(function (obj) {
    if (obj) {
      Object.keys(obj).forEach(function (key) {
        var val = obj[key];

        if (val !== undefined) {
          result[key] = val;
        }
      });
    }
  });
  return result;
}

function usePagination(total, pagination, onChange) {
  var _a = pagination && (0, _typeof2["default"])(pagination) === 'object' ? pagination : {},
      _a$total = _a.total,
      paginationTotal = _a$total === void 0 ? 0 : _a$total,
      paginationObj = __rest(_a, ["total"]);

  var _useState = (0, _react.useState)(function () {
    return {
      current: 'defaultCurrent' in paginationObj ? paginationObj.defaultCurrent : 1,
      pageSize: 'defaultPageSize' in paginationObj ? paginationObj.defaultPageSize : DEFAULT_PAGE_SIZE
    };
  }),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      innerPagination = _useState2[0],
      setInnerPagination = _useState2[1]; // ============ Basic Pagination Config ============


  var mergedPagination = extendsObject(innerPagination, paginationObj, {
    total: paginationTotal > 0 ? paginationTotal : total
  });

  if (!paginationTotal) {
    // Reset `current` if data length changed. Only reset when paginationObj do not have total
    var maxPage = Math.ceil(total / mergedPagination.pageSize);

    if (maxPage < mergedPagination.current) {
      mergedPagination.current = 1;
    }
  }

  var refreshPagination = function refreshPagination() {
    var current = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var pageSize = arguments.length > 1 ? arguments[1] : undefined;
    setInnerPagination((0, _extends2["default"])((0, _extends2["default"])({}, mergedPagination), {
      current: current,
      pageSize: pageSize || mergedPagination.pageSize
    }));
  };

  var onInternalChange = function onInternalChange(current, pageSize) {
    var paginationPageSize = mergedPagination === null || mergedPagination === void 0 ? void 0 : mergedPagination.pageSize;

    if (pageSize && pageSize !== paginationPageSize) {
      current = 1;
      if (pagination && pagination.onShowSizeChange) pagination.onShowSizeChange(current, pageSize);
    }

    if (pagination && pagination.onChange) pagination.onChange(current, pageSize);
    refreshPagination(current, pageSize);
    onChange(current, pageSize || paginationPageSize);
  };

  if (pagination === false) {
    return [{}, function () {}];
  }

  return [(0, _extends2["default"])((0, _extends2["default"])({}, mergedPagination), {
    onChange: onInternalChange
  }), refreshPagination];
}

/***/ }),

/***/ "./node_modules/antd/lib/table/hooks/useSelection.js":
/*!***********************************************************!*\
  !*** ./node_modules/antd/lib/table/hooks/useSelection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useSelection;
exports.SELECTION_INVERT = exports.SELECTION_ALL = void 0;

var _toArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toArray */ "./node_modules/@babel/runtime/helpers/toArray.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _DownOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/DownOutlined */ "./node_modules/@ant-design/icons/DownOutlined.js"));

var _treeUtil = __webpack_require__(/*! rc-tree/lib/utils/treeUtil */ "./node_modules/rc-tree/lib/utils/treeUtil.js");

var _conductUtil = __webpack_require__(/*! rc-tree/lib/utils/conductUtil */ "./node_modules/rc-tree/lib/utils/conductUtil.js");

var _util = __webpack_require__(/*! rc-tree/lib/util */ "./node_modules/rc-tree/lib/util.js");

var _rcTable = __webpack_require__(/*! rc-table */ "./node_modules/rc-table/es/index.js");

var _useMergedState3 = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/hooks/useMergedState */ "./node_modules/rc-util/lib/hooks/useMergedState.js"));

var _checkbox = _interopRequireDefault(__webpack_require__(/*! ../../checkbox */ "./node_modules/antd/lib/checkbox/index.js"));

var _dropdown = _interopRequireDefault(__webpack_require__(/*! ../../dropdown */ "./node_modules/antd/lib/dropdown/index.js"));

var _menu = _interopRequireDefault(__webpack_require__(/*! ../../menu */ "./node_modules/antd/lib/menu/index.js"));

var _radio = _interopRequireDefault(__webpack_require__(/*! ../../radio */ "./node_modules/antd/lib/radio/index.js"));

var _devWarning = _interopRequireDefault(__webpack_require__(/*! ../../_util/devWarning */ "./node_modules/antd/lib/_util/devWarning.js"));

// TODO: warning if use ajax!!!
var SELECTION_ALL = 'SELECT_ALL';
exports.SELECTION_ALL = SELECTION_ALL;
var SELECTION_INVERT = 'SELECT_INVERT';
exports.SELECTION_INVERT = SELECTION_INVERT;

function getFixedType(column) {
  return column && column.fixed;
}

function flattenData(data, childrenColumnName) {
  var list = [];
  (data || []).forEach(function (record) {
    list.push(record);

    if (record && (0, _typeof2["default"])(record) === 'object' && childrenColumnName in record) {
      list = [].concat((0, _toConsumableArray2["default"])(list), (0, _toConsumableArray2["default"])(flattenData(record[childrenColumnName], childrenColumnName)));
    }
  });
  return list;
}

function useSelection(rowSelection, config) {
  var _ref = rowSelection || {},
      preserveSelectedRowKeys = _ref.preserveSelectedRowKeys,
      selectedRowKeys = _ref.selectedRowKeys,
      getCheckboxProps = _ref.getCheckboxProps,
      onSelectionChange = _ref.onChange,
      onSelect = _ref.onSelect,
      onSelectAll = _ref.onSelectAll,
      onSelectInvert = _ref.onSelectInvert,
      onSelectMultiple = _ref.onSelectMultiple,
      selectionColWidth = _ref.columnWidth,
      selectionType = _ref.type,
      selections = _ref.selections,
      fixed = _ref.fixed,
      customizeRenderCell = _ref.renderCell,
      hideSelectAll = _ref.hideSelectAll,
      _ref$checkStrictly = _ref.checkStrictly,
      checkStrictly = _ref$checkStrictly === void 0 ? true : _ref$checkStrictly;

  var prefixCls = config.prefixCls,
      data = config.data,
      pageData = config.pageData,
      getRecordByKey = config.getRecordByKey,
      getRowKey = config.getRowKey,
      expandType = config.expandType,
      childrenColumnName = config.childrenColumnName,
      tableLocale = config.locale,
      expandIconColumnIndex = config.expandIconColumnIndex,
      getPopupContainer = config.getPopupContainer; // ======================== Caches ========================

  var preserveRecordsRef = React.useRef(new Map()); // ========================= Keys =========================

  var _useMergedState = (0, _useMergedState3["default"])(selectedRowKeys || [], {
    value: selectedRowKeys
  }),
      _useMergedState2 = (0, _slicedToArray2["default"])(_useMergedState, 2),
      mergedSelectedKeys = _useMergedState2[0],
      setMergedSelectedKeys = _useMergedState2[1];

  var _useMemo = (0, React.useMemo)(function () {
    return checkStrictly ? {
      keyEntities: null
    } : (0, _treeUtil.convertDataToEntities)(data, undefined, getRowKey);
  }, [data, getRowKey, checkStrictly]),
      keyEntities = _useMemo.keyEntities; // Get flatten data


  var flattedData = (0, React.useMemo)(function () {
    return flattenData(pageData, childrenColumnName);
  }, [pageData, childrenColumnName]); // Get all checkbox props

  var checkboxPropsMap = (0, React.useMemo)(function () {
    var map = new Map();
    flattedData.forEach(function (record, index) {
      var key = getRowKey(record, index);
      var checkboxProps = (getCheckboxProps ? getCheckboxProps(record) : null) || {};
      map.set(key, checkboxProps);

      if ( true && ('checked' in checkboxProps || 'defaultChecked' in checkboxProps)) {
        (0, _devWarning["default"])(false, 'Table', 'Do not set `checked` or `defaultChecked` in `getCheckboxProps`. Please use `selectedRowKeys` instead.');
      }
    });
    return map;
  }, [flattedData, getRowKey, getCheckboxProps]);
  var isCheckboxDisabled = (0, React.useCallback)(function (r) {
    var _a;

    return !!((_a = checkboxPropsMap.get(getRowKey(r))) === null || _a === void 0 ? void 0 : _a.disabled);
  }, [checkboxPropsMap, getRowKey]);

  var _useMemo2 = (0, React.useMemo)(function () {
    if (checkStrictly) {
      return [mergedSelectedKeys, []];
    }

    var _conductCheck = (0, _conductUtil.conductCheck)(mergedSelectedKeys, true, keyEntities, isCheckboxDisabled),
        checkedKeys = _conductCheck.checkedKeys,
        halfCheckedKeys = _conductCheck.halfCheckedKeys;

    return [checkedKeys, halfCheckedKeys];
  }, [mergedSelectedKeys, checkStrictly, keyEntities, isCheckboxDisabled]),
      _useMemo3 = (0, _slicedToArray2["default"])(_useMemo2, 2),
      derivedSelectedKeys = _useMemo3[0],
      derivedHalfSelectedKeys = _useMemo3[1];

  var derivedSelectedKeySet = (0, React.useMemo)(function () {
    var keys = selectionType === 'radio' ? derivedSelectedKeys.slice(0, 1) : derivedSelectedKeys;
    return new Set(keys);
  }, [derivedSelectedKeys, selectionType]);
  var derivedHalfSelectedKeySet = (0, React.useMemo)(function () {
    return selectionType === 'radio' ? new Set() : new Set(derivedHalfSelectedKeys);
  }, [derivedHalfSelectedKeys, selectionType]); // Save last selected key to enable range selection

  var _useState = (0, React.useState)(null),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      lastSelectedKey = _useState2[0],
      setLastSelectedKey = _useState2[1]; // Reset if rowSelection reset


  React.useEffect(function () {
    if (!rowSelection) {
      setMergedSelectedKeys([]);
    }
  }, [!!rowSelection]);
  var setSelectedKeys = (0, React.useCallback)(function (keys) {
    var availableKeys;
    var records;

    if (preserveSelectedRowKeys) {
      // Keep key if mark as preserveSelectedRowKeys
      var newCache = new Map();
      availableKeys = keys;
      records = keys.map(function (key) {
        var record = getRecordByKey(key);

        if (!record && preserveRecordsRef.current.has(key)) {
          record = preserveRecordsRef.current.get(key);
        }

        newCache.set(key, record);
        return record;
      }); // Refresh to new cache

      preserveRecordsRef.current = newCache;
    } else {
      // Filter key which not exist in the `dataSource`
      availableKeys = [];
      records = [];
      keys.forEach(function (key) {
        var record = getRecordByKey(key);

        if (record !== undefined) {
          availableKeys.push(key);
          records.push(record);
        }
      });
    }

    setMergedSelectedKeys(availableKeys);

    if (onSelectionChange) {
      onSelectionChange(availableKeys, records);
    }
  }, [setMergedSelectedKeys, getRecordByKey, onSelectionChange, preserveSelectedRowKeys]); // ====================== Selections ======================
  // Trigger single `onSelect` event

  var triggerSingleSelection = (0, React.useCallback)(function (key, selected, keys, event) {
    if (onSelect) {
      var rows = keys.map(function (k) {
        return getRecordByKey(k);
      });
      onSelect(getRecordByKey(key), selected, rows, event);
    }

    setSelectedKeys(keys);
  }, [onSelect, getRecordByKey, setSelectedKeys]);
  var mergedSelections = (0, React.useMemo)(function () {
    if (!selections || hideSelectAll) {
      return null;
    }

    var selectionList = selections === true ? [SELECTION_ALL, SELECTION_INVERT] : selections;
    return selectionList.map(function (selection) {
      if (selection === SELECTION_ALL) {
        return {
          key: 'all',
          text: tableLocale.selectionAll,
          onSelect: function onSelect() {
            setSelectedKeys(data.map(function (record, index) {
              return getRowKey(record, index);
            }));
          }
        };
      }

      if (selection === SELECTION_INVERT) {
        return {
          key: 'invert',
          text: tableLocale.selectInvert,
          onSelect: function onSelect() {
            var keySet = new Set(derivedSelectedKeySet);
            pageData.forEach(function (record, index) {
              var key = getRowKey(record, index);

              if (keySet.has(key)) {
                keySet["delete"](key);
              } else {
                keySet.add(key);
              }
            });
            var keys = Array.from(keySet);
            setSelectedKeys(keys);

            if (onSelectInvert) {
              (0, _devWarning["default"])(false, 'Table', '`onSelectInvert` will be removed in future. Please use `onChange` instead.');
              onSelectInvert(keys);
            }
          }
        };
      }

      return selection;
    });
  }, [selections, derivedSelectedKeySet, pageData, getRowKey, onSelectInvert, setSelectedKeys]); // ======================= Columns ========================

  var transformColumns = (0, React.useCallback)(function (columns) {
    if (!rowSelection) {
      return columns;
    } // Support selection


    var keySet = new Set(derivedSelectedKeySet); // Record key only need check with enabled

    var recordKeys = flattedData.map(getRowKey).filter(function (key) {
      return !checkboxPropsMap.get(key).disabled;
    });
    var checkedCurrentAll = recordKeys.every(function (key) {
      return keySet.has(key);
    });
    var checkedCurrentSome = recordKeys.some(function (key) {
      return keySet.has(key);
    });

    var onSelectAllChange = function onSelectAllChange() {
      var changeKeys = [];

      if (checkedCurrentAll) {
        recordKeys.forEach(function (key) {
          keySet["delete"](key);
          changeKeys.push(key);
        });
      } else {
        recordKeys.forEach(function (key) {
          if (!keySet.has(key)) {
            keySet.add(key);
            changeKeys.push(key);
          }
        });
      }

      var keys = Array.from(keySet);
      setSelectedKeys(keys);

      if (onSelectAll) {
        onSelectAll(!checkedCurrentAll, keys.map(function (k) {
          return getRecordByKey(k);
        }), changeKeys.map(function (k) {
          return getRecordByKey(k);
        }));
      }
    }; // ===================== Render =====================
    // Title Cell


    var title;

    if (selectionType !== 'radio') {
      var customizeSelections;

      if (mergedSelections) {
        var menu = /*#__PURE__*/React.createElement(_menu["default"], {
          getPopupContainer: getPopupContainer
        }, mergedSelections.map(function (selection, index) {
          var key = selection.key,
              text = selection.text,
              onSelectionClick = selection.onSelect;
          return /*#__PURE__*/React.createElement(_menu["default"].Item, {
            key: key || index,
            onClick: function onClick() {
              if (onSelectionClick) {
                onSelectionClick(recordKeys);
              }
            }
          }, text);
        }));
        customizeSelections = /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-selection-extra")
        }, /*#__PURE__*/React.createElement(_dropdown["default"], {
          overlay: menu,
          getPopupContainer: getPopupContainer
        }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(_DownOutlined["default"], null))));
      }

      var allDisabled = flattedData.every(function (record, index) {
        var key = getRowKey(record, index);
        var checkboxProps = checkboxPropsMap.get(key) || {};
        return checkboxProps.disabled;
      });
      title = !hideSelectAll && /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-selection")
      }, /*#__PURE__*/React.createElement(_checkbox["default"], {
        checked: !allDisabled && !!flattedData.length && checkedCurrentAll,
        indeterminate: !checkedCurrentAll && checkedCurrentSome,
        onChange: onSelectAllChange,
        disabled: flattedData.length === 0 || allDisabled
      }), customizeSelections);
    } // Body Cell


    var renderCell;

    if (selectionType === 'radio') {
      renderCell = function renderCell(_, record, index) {
        var key = getRowKey(record, index);
        var checked = keySet.has(key);
        return {
          node: /*#__PURE__*/React.createElement(_radio["default"], (0, _extends2["default"])({}, checkboxPropsMap.get(key), {
            checked: checked,
            onClick: function onClick(e) {
              return e.stopPropagation();
            },
            onChange: function onChange(event) {
              if (!keySet.has(key)) {
                triggerSingleSelection(key, true, [key], event.nativeEvent);
              }
            }
          })),
          checked: checked
        };
      };
    } else {
      renderCell = function renderCell(_, record, index) {
        var _a;

        var key = getRowKey(record, index);
        var checked = keySet.has(key);
        var indeterminate = derivedHalfSelectedKeySet.has(key);
        var checkboxProps = checkboxPropsMap.get(key);
        var mergedIndeterminate;

        if (expandType === 'nest') {
          mergedIndeterminate = indeterminate;
          (0, _devWarning["default"])(!(typeof (checkboxProps === null || checkboxProps === void 0 ? void 0 : checkboxProps.indeterminate) === 'boolean'), 'Table', 'set `indeterminate` using `rowSelection.getCheckboxProps` is not allowed with tree structured dataSource.');
        } else {
          mergedIndeterminate = (_a = checkboxProps === null || checkboxProps === void 0 ? void 0 : checkboxProps.indeterminate) !== null && _a !== void 0 ? _a : indeterminate;
        } // Record checked


        return {
          node: /*#__PURE__*/React.createElement(_checkbox["default"], (0, _extends2["default"])({}, checkboxProps, {
            indeterminate: mergedIndeterminate,
            checked: checked,
            onClick: function onClick(e) {
              return e.stopPropagation();
            },
            onChange: function onChange(_ref2) {
              var nativeEvent = _ref2.nativeEvent;
              var shiftKey = nativeEvent.shiftKey;
              var startIndex = -1;
              var endIndex = -1; // Get range of this

              if (shiftKey && checkStrictly) {
                var pointKeys = new Set([lastSelectedKey, key]);
                recordKeys.some(function (recordKey, recordIndex) {
                  if (pointKeys.has(recordKey)) {
                    if (startIndex === -1) {
                      startIndex = recordIndex;
                    } else {
                      endIndex = recordIndex;
                      return true;
                    }
                  }

                  return false;
                });
              }

              if (endIndex !== -1 && startIndex !== endIndex && checkStrictly) {
                // Batch update selections
                var rangeKeys = recordKeys.slice(startIndex, endIndex + 1);
                var changedKeys = [];

                if (checked) {
                  rangeKeys.forEach(function (recordKey) {
                    if (keySet.has(recordKey)) {
                      changedKeys.push(recordKey);
                      keySet["delete"](recordKey);
                    }
                  });
                } else {
                  rangeKeys.forEach(function (recordKey) {
                    if (!keySet.has(recordKey)) {
                      changedKeys.push(recordKey);
                      keySet.add(recordKey);
                    }
                  });
                }

                var keys = Array.from(keySet);
                setSelectedKeys(keys);

                if (onSelectMultiple) {
                  onSelectMultiple(!checked, keys.map(function (recordKey) {
                    return getRecordByKey(recordKey);
                  }), changedKeys.map(function (recordKey) {
                    return getRecordByKey(recordKey);
                  }));
                }
              } else {
                // Single record selected
                var originCheckedKeys = derivedSelectedKeys;

                if (checkStrictly) {
                  var checkedKeys = checked ? (0, _util.arrDel)(originCheckedKeys, key) : (0, _util.arrAdd)(originCheckedKeys, key);
                  triggerSingleSelection(key, !checked, checkedKeys, nativeEvent);
                } else {
                  // Always fill first
                  var result = (0, _conductUtil.conductCheck)([].concat((0, _toConsumableArray2["default"])(originCheckedKeys), [key]), true, keyEntities, isCheckboxDisabled);
                  var _checkedKeys = result.checkedKeys,
                      halfCheckedKeys = result.halfCheckedKeys;
                  var nextCheckedKeys = _checkedKeys; // If remove, we do it again to correction

                  if (checked) {
                    var tempKeySet = new Set(_checkedKeys);
                    tempKeySet["delete"](key);
                    nextCheckedKeys = (0, _conductUtil.conductCheck)(Array.from(tempKeySet), {
                      checked: false,
                      halfCheckedKeys: halfCheckedKeys
                    }, keyEntities, isCheckboxDisabled).checkedKeys;
                  }

                  triggerSingleSelection(key, !checked, nextCheckedKeys, nativeEvent);
                }
              }

              setLastSelectedKey(key);
            }
          })),
          checked: checked
        };
      };
    }

    var renderSelectionCell = function renderSelectionCell(_, record, index) {
      var _renderCell = renderCell(_, record, index),
          node = _renderCell.node,
          checked = _renderCell.checked;

      if (customizeRenderCell) {
        return customizeRenderCell(checked, record, index, node);
      }

      return node;
    }; // Columns


    var selectionColumn = (0, _defineProperty2["default"])({
      width: selectionColWidth,
      className: "".concat(prefixCls, "-selection-column"),
      title: rowSelection.columnTitle || title,
      render: renderSelectionCell
    }, _rcTable.INTERNAL_COL_DEFINE, {
      className: "".concat(prefixCls, "-selection-col")
    });

    if (expandType === 'row' && columns.length && !expandIconColumnIndex) {
      var _columns = (0, _toArray2["default"])(columns),
          expandColumn = _columns[0],
          restColumns = _columns.slice(1);

      var selectionFixed = fixed || getFixedType(restColumns[0]);

      if (selectionFixed) {
        expandColumn.fixed = selectionFixed;
      }

      return [expandColumn, (0, _extends2["default"])((0, _extends2["default"])({}, selectionColumn), {
        fixed: selectionFixed
      })].concat((0, _toConsumableArray2["default"])(restColumns));
    }

    return [(0, _extends2["default"])((0, _extends2["default"])({}, selectionColumn), {
      fixed: fixed || getFixedType(columns[0])
    })].concat((0, _toConsumableArray2["default"])(columns));
  }, [getRowKey, flattedData, rowSelection, derivedSelectedKeys, derivedSelectedKeySet, derivedHalfSelectedKeySet, selectionColWidth, mergedSelections, expandType, lastSelectedKey, checkboxPropsMap, onSelectMultiple, triggerSingleSelection, isCheckboxDisabled]);
  return [transformColumns, derivedSelectedKeySet];
}

/***/ }),

/***/ "./node_modules/antd/lib/table/hooks/useSorter.js":
/*!********************************************************!*\
  !*** ./node_modules/antd/lib/table/hooks/useSorter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSortData = getSortData;
exports["default"] = useFilterSorter;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _extends3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _CaretDownOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CaretDownOutlined */ "./node_modules/@ant-design/icons/CaretDownOutlined.js"));

var _CaretUpOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CaretUpOutlined */ "./node_modules/@ant-design/icons/CaretUpOutlined.js"));

var _tooltip = _interopRequireDefault(__webpack_require__(/*! ../../tooltip */ "./node_modules/antd/lib/tooltip/index.js"));

var _util = __webpack_require__(/*! ../util */ "./node_modules/antd/lib/table/util.js");

var ASCEND = 'ascend';
var DESCEND = 'descend';

function getMultiplePriority(column) {
  if ((0, _typeof2["default"])(column.sorter) === 'object' && typeof column.sorter.multiple === 'number') {
    return column.sorter.multiple;
  }

  return false;
}

function getSortFunction(sorter) {
  if (typeof sorter === 'function') {
    return sorter;
  }

  if (sorter && (0, _typeof2["default"])(sorter) === 'object' && sorter.compare) {
    return sorter.compare;
  }

  return false;
}

function nextSortDirection(sortDirections, current) {
  if (!current) {
    return sortDirections[0];
  }

  return sortDirections[sortDirections.indexOf(current) + 1];
}

function collectSortStates(columns, init, pos) {
  var sortStates = [];

  function pushState(column, columnPos) {
    sortStates.push({
      column: column,
      key: (0, _util.getColumnKey)(column, columnPos),
      multiplePriority: getMultiplePriority(column),
      sortOrder: column.sortOrder
    });
  }

  (columns || []).forEach(function (column, index) {
    var columnPos = (0, _util.getColumnPos)(index, pos);

    if (column.children) {
      if ('sortOrder' in column) {
        // Controlled
        pushState(column, columnPos);
      }

      sortStates = [].concat((0, _toConsumableArray2["default"])(sortStates), (0, _toConsumableArray2["default"])(collectSortStates(column.children, init, columnPos)));
    } else if (column.sorter) {
      if ('sortOrder' in column) {
        // Controlled
        pushState(column, columnPos);
      } else if (init && column.defaultSortOrder) {
        // Default sorter
        sortStates.push({
          column: column,
          key: (0, _util.getColumnKey)(column, columnPos),
          multiplePriority: getMultiplePriority(column),
          sortOrder: column.defaultSortOrder
        });
      }
    }
  });
  return sortStates;
}

function injectSorter(prefixCls, columns, sorterSates, triggerSorter, defaultSortDirections, tableLocale, tableShowSorterTooltip, pos) {
  return (columns || []).map(function (column, index) {
    var columnPos = (0, _util.getColumnPos)(index, pos);
    var newColumn = column;

    if (newColumn.sorter) {
      var sortDirections = newColumn.sortDirections || defaultSortDirections;
      var showSorterTooltip = newColumn.showSorterTooltip === undefined ? tableShowSorterTooltip : newColumn.showSorterTooltip;
      var columnKey = (0, _util.getColumnKey)(newColumn, columnPos);
      var sorterState = sorterSates.find(function (_ref) {
        var key = _ref.key;
        return key === columnKey;
      });
      var sorterOrder = sorterState ? sorterState.sortOrder : null;
      var nextSortOrder = nextSortDirection(sortDirections, sorterOrder);
      var upNode = sortDirections.includes(ASCEND) && /*#__PURE__*/React.createElement(_CaretUpOutlined["default"], {
        className: (0, _classnames["default"])("".concat(prefixCls, "-column-sorter-up"), {
          active: sorterOrder === ASCEND
        })
      });
      var downNode = sortDirections.includes(DESCEND) && /*#__PURE__*/React.createElement(_CaretDownOutlined["default"], {
        className: (0, _classnames["default"])("".concat(prefixCls, "-column-sorter-down"), {
          active: sorterOrder === DESCEND
        })
      });

      var _ref2 = tableLocale || {},
          cancelSort = _ref2.cancelSort,
          triggerAsc = _ref2.triggerAsc,
          triggerDesc = _ref2.triggerDesc;

      var sortTip = cancelSort;

      if (nextSortOrder === DESCEND) {
        sortTip = triggerDesc;
      } else if (nextSortOrder === ASCEND) {
        sortTip = triggerAsc;
      }

      newColumn = (0, _extends3["default"])((0, _extends3["default"])({}, newColumn), {
        className: (0, _classnames["default"])(newColumn.className, (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-column-sort"), sorterOrder)),
        title: function title(renderProps) {
          var renderSortTitle = /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-column-sorters")
          }, /*#__PURE__*/React.createElement("span", null, (0, _util.renderColumnTitle)(column.title, renderProps)), /*#__PURE__*/React.createElement("span", {
            className: (0, _classnames["default"])("".concat(prefixCls, "-column-sorter"), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-column-sorter-full"), upNode && downNode))
          }, /*#__PURE__*/React.createElement("span", {
            className: "".concat(prefixCls, "-column-sorter-inner")
          }, upNode, downNode)));
          return showSorterTooltip ? /*#__PURE__*/React.createElement(_tooltip["default"], {
            title: sortTip
          }, /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-column-sorters-with-tooltip")
          }, renderSortTitle)) : renderSortTitle;
        },
        onHeaderCell: function onHeaderCell(col) {
          var cell = column.onHeaderCell && column.onHeaderCell(col) || {};
          var originOnClick = cell.onClick;

          cell.onClick = function (event) {
            triggerSorter({
              column: column,
              key: columnKey,
              sortOrder: nextSortOrder,
              multiplePriority: getMultiplePriority(column)
            });

            if (originOnClick) {
              originOnClick(event);
            }
          };

          cell.className = (0, _classnames["default"])(cell.className, "".concat(prefixCls, "-column-has-sorters"));
          return cell;
        }
      });
    }

    if ('children' in newColumn) {
      newColumn = (0, _extends3["default"])((0, _extends3["default"])({}, newColumn), {
        children: injectSorter(prefixCls, newColumn.children, sorterSates, triggerSorter, defaultSortDirections, tableLocale, tableShowSorterTooltip, columnPos)
      });
    }

    return newColumn;
  });
}

function stateToInfo(sorterStates) {
  var column = sorterStates.column,
      sortOrder = sorterStates.sortOrder;
  return {
    column: column,
    order: sortOrder,
    field: column.dataIndex,
    columnKey: column.key
  };
}

function generateSorterInfo(sorterStates) {
  var list = sorterStates.filter(function (_ref3) {
    var sortOrder = _ref3.sortOrder;
    return sortOrder;
  }).map(stateToInfo); // =========== Legacy compatible support ===========
  // https://github.com/ant-design/ant-design/pull/19226

  if (list.length === 0 && sorterStates.length) {
    return (0, _extends3["default"])((0, _extends3["default"])({}, stateToInfo(sorterStates[sorterStates.length - 1])), {
      column: undefined
    });
  }

  if (list.length <= 1) {
    return list[0] || {};
  }

  return list;
}

function getSortData(data, sortStates, childrenColumnName) {
  var innerSorterStates = sortStates.slice().sort(function (a, b) {
    return b.multiplePriority - a.multiplePriority;
  });
  var cloneData = data.slice();
  var runningSorters = innerSorterStates.filter(function (_ref4) {
    var sorter = _ref4.column.sorter,
        sortOrder = _ref4.sortOrder;
    return getSortFunction(sorter) && sortOrder;
  }); // Skip if no sorter needed

  if (!runningSorters.length) {
    return cloneData;
  }

  return cloneData.sort(function (record1, record2) {
    for (var i = 0; i < runningSorters.length; i += 1) {
      var sorterState = runningSorters[i];
      var sorter = sorterState.column.sorter,
          sortOrder = sorterState.sortOrder;
      var compareFn = getSortFunction(sorter);

      if (compareFn && sortOrder) {
        var compareResult = compareFn(record1, record2, sortOrder);

        if (compareResult !== 0) {
          return sortOrder === ASCEND ? compareResult : -compareResult;
        }
      }
    }

    return 0;
  }).map(function (record) {
    var subRecords = record[childrenColumnName];

    if (subRecords) {
      return (0, _extends3["default"])((0, _extends3["default"])({}, record), (0, _defineProperty2["default"])({}, childrenColumnName, getSortData(subRecords, sortStates, childrenColumnName)));
    }

    return record;
  });
}

function useFilterSorter(_ref5) {
  var prefixCls = _ref5.prefixCls,
      mergedColumns = _ref5.mergedColumns,
      onSorterChange = _ref5.onSorterChange,
      sortDirections = _ref5.sortDirections,
      tableLocale = _ref5.tableLocale,
      showSorterTooltip = _ref5.showSorterTooltip;

  var _React$useState = React.useState(collectSortStates(mergedColumns, true)),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      sortStates = _React$useState2[0],
      setSortStates = _React$useState2[1];

  var mergedSorterStates = React.useMemo(function () {
    var validate = true;
    var collectedStates = collectSortStates(mergedColumns, false); // Return if not controlled

    if (!collectedStates.length) {
      return sortStates;
    }

    var validateStates = [];

    function patchStates(state) {
      if (validate) {
        validateStates.push(state);
      } else {
        validateStates.push((0, _extends3["default"])((0, _extends3["default"])({}, state), {
          sortOrder: null
        }));
      }
    }

    var multipleMode = null;
    collectedStates.forEach(function (state) {
      if (multipleMode === null) {
        patchStates(state);

        if (state.sortOrder) {
          if (state.multiplePriority === false) {
            validate = false;
          } else {
            multipleMode = true;
          }
        }
      } else if (multipleMode && state.multiplePriority !== false) {
        patchStates(state);
      } else {
        validate = false;
        patchStates(state);
      }
    });
    return validateStates;
  }, [mergedColumns, sortStates]); // Get render columns title required props

  var columnTitleSorterProps = React.useMemo(function () {
    var sortColumns = mergedSorterStates.map(function (_ref6) {
      var column = _ref6.column,
          sortOrder = _ref6.sortOrder;
      return {
        column: column,
        order: sortOrder
      };
    });
    return {
      sortColumns: sortColumns,
      // Legacy
      sortColumn: sortColumns[0] && sortColumns[0].column,
      sortOrder: sortColumns[0] && sortColumns[0].order
    };
  }, [mergedSorterStates]);

  function triggerSorter(sortState) {
    var newSorterStates;

    if (sortState.multiplePriority === false || !mergedSorterStates.length || mergedSorterStates[0].multiplePriority === false) {
      newSorterStates = [sortState];
    } else {
      newSorterStates = [].concat((0, _toConsumableArray2["default"])(mergedSorterStates.filter(function (_ref7) {
        var key = _ref7.key;
        return key !== sortState.key;
      })), [sortState]);
    }

    setSortStates(newSorterStates);
    onSorterChange(generateSorterInfo(newSorterStates), newSorterStates);
  }

  var transformColumns = function transformColumns(innerColumns) {
    return injectSorter(prefixCls, innerColumns, mergedSorterStates, triggerSorter, sortDirections, tableLocale, showSorterTooltip);
  };

  var getSorters = function getSorters() {
    return generateSorterInfo(mergedSorterStates);
  };

  return [transformColumns, mergedSorterStates, columnTitleSorterProps, getSorters];
}

/***/ }),

/***/ "./node_modules/antd/lib/table/hooks/useSyncState.js":
/*!***********************************************************!*\
  !*** ./node_modules/antd/lib/table/hooks/useSyncState.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useSyncState;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function useSyncState(filteredKeys) {
  var filteredKeysRef = React.useRef(filteredKeys);

  var _React$useState = React.useState(null),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      forceUpdate = _React$useState2[1];

  return [function () {
    return filteredKeysRef.current;
  }, function (newValue) {
    filteredKeysRef.current = newValue; // re-render

    forceUpdate({});
  }];
}

/***/ }),

/***/ "./node_modules/antd/lib/table/hooks/useTitleColumns.js":
/*!**************************************************************!*\
  !*** ./node_modules/antd/lib/table/hooks/useTitleColumns.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useTitleColumns;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _util = __webpack_require__(/*! ../util */ "./node_modules/antd/lib/table/util.js");

function fillTitle(columns, columnTitleProps) {
  return columns.map(function (column) {
    var cloneColumn = (0, _extends2["default"])({}, column);
    cloneColumn.title = (0, _util.renderColumnTitle)(column.title, columnTitleProps);

    if ('children' in cloneColumn) {
      cloneColumn.children = fillTitle(cloneColumn.children, columnTitleProps);
    }

    return cloneColumn;
  });
}

function useTitleColumns(columnTitleProps) {
  var filledColumns = React.useCallback(function (columns) {
    return fillTitle(columns, columnTitleProps);
  }, [columnTitleProps]);
  return [filledColumns];
}

/***/ }),

/***/ "./node_modules/antd/lib/table/index.js":
/*!**********************************************!*\
  !*** ./node_modules/antd/lib/table/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Table = _interopRequireDefault(__webpack_require__(/*! ./Table */ "./node_modules/antd/lib/table/Table.js"));

var _default = _Table["default"];
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/table/util.js":
/*!*********************************************!*\
  !*** ./node_modules/antd/lib/table/util.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getColumnKey = getColumnKey;
exports.getColumnPos = getColumnPos;
exports.renderColumnTitle = renderColumnTitle;

function getColumnKey(column, defaultKey) {
  if ('key' in column && column.key !== undefined && column.key !== null) {
    return column.key;
  }

  if (column.dataIndex) {
    return Array.isArray(column.dataIndex) ? column.dataIndex.join('.') : column.dataIndex;
  }

  return defaultKey;
}

function getColumnPos(index, pos) {
  return pos ? "".concat(pos, "-").concat(index) : "".concat(index);
}

function renderColumnTitle(title, props) {
  if (typeof title === 'function') {
    return title(props);
  }

  return title;
}

/***/ }),

/***/ "./node_modules/rc-table/lib/Body/BodyRow.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-table/lib/Body/BodyRow.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _Cell = _interopRequireDefault(__webpack_require__(/*! ../Cell */ "./node_modules/rc-table/lib/Cell/index.js"));

var _TableContext = _interopRequireDefault(__webpack_require__(/*! ../context/TableContext */ "./node_modules/rc-table/lib/context/TableContext.js"));

var _BodyContext = _interopRequireDefault(__webpack_require__(/*! ../context/BodyContext */ "./node_modules/rc-table/lib/context/BodyContext.js"));

var _valueUtil = __webpack_require__(/*! ../utils/valueUtil */ "./node_modules/rc-table/lib/utils/valueUtil.js");

var _ExpandedRow = _interopRequireDefault(__webpack_require__(/*! ./ExpandedRow */ "./node_modules/rc-table/lib/Body/ExpandedRow.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function BodyRow(props) {
  var className = props.className,
      style = props.style,
      record = props.record,
      index = props.index,
      rowKey = props.rowKey,
      getRowKey = props.getRowKey,
      rowExpandable = props.rowExpandable,
      expandedKeys = props.expandedKeys,
      onRow = props.onRow,
      _props$indent = props.indent,
      indent = _props$indent === void 0 ? 0 : _props$indent,
      RowComponent = props.rowComponent,
      cellComponent = props.cellComponent,
      childrenColumnName = props.childrenColumnName;

  var _React$useContext = React.useContext(_TableContext.default),
      prefixCls = _React$useContext.prefixCls,
      fixedInfoList = _React$useContext.fixedInfoList;

  var _React$useContext2 = React.useContext(_BodyContext.default),
      fixHeader = _React$useContext2.fixHeader,
      fixColumn = _React$useContext2.fixColumn,
      horizonScroll = _React$useContext2.horizonScroll,
      componentWidth = _React$useContext2.componentWidth,
      flattenColumns = _React$useContext2.flattenColumns,
      expandableType = _React$useContext2.expandableType,
      expandRowByClick = _React$useContext2.expandRowByClick,
      onTriggerExpand = _React$useContext2.onTriggerExpand,
      rowClassName = _React$useContext2.rowClassName,
      expandedRowClassName = _React$useContext2.expandedRowClassName,
      indentSize = _React$useContext2.indentSize,
      expandIcon = _React$useContext2.expandIcon,
      expandedRowRender = _React$useContext2.expandedRowRender,
      expandIconColumnIndex = _React$useContext2.expandIconColumnIndex;

  var _React$useState = React.useState(false),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      expandRended = _React$useState2[0],
      setExpandRended = _React$useState2[1];

  var expanded = expandedKeys && expandedKeys.has(props.recordKey);
  React.useEffect(function () {
    if (expanded) {
      setExpandRended(true);
    }
  }, [expanded]);
  var rowSupportExpand = expandableType === 'row' && (!rowExpandable || rowExpandable(record)); // Only when row is not expandable and `children` exist in record

  var nestExpandable = expandableType === 'nest';
  var hasNestChildren = childrenColumnName && record && record[childrenColumnName];
  var mergedExpandable = rowSupportExpand || nestExpandable; // =========================== onRow ===========================

  var additionalProps;

  if (onRow) {
    additionalProps = onRow(record, index);
  }

  var onClick = function onClick(event) {
    if (expandRowByClick && mergedExpandable) {
      onTriggerExpand(record, event);
    }

    if (additionalProps && additionalProps.onClick) {
      var _additionalProps;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      (_additionalProps = additionalProps).onClick.apply(_additionalProps, [event].concat(args));
    }
  }; // ======================== Base tr row ========================


  var computeRowClassName;

  if (typeof rowClassName === 'string') {
    computeRowClassName = rowClassName;
  } else if (typeof rowClassName === 'function') {
    computeRowClassName = rowClassName(record, index, indent);
  }

  var columnsKey = (0, _valueUtil.getColumnsKey)(flattenColumns);
  var baseRowNode = React.createElement(RowComponent, Object.assign({}, additionalProps, {
    "data-row-key": rowKey,
    className: (0, _classnames.default)(className, "".concat(prefixCls, "-row"), "".concat(prefixCls, "-row-level-").concat(indent), computeRowClassName, additionalProps && additionalProps.className),
    style: _objectSpread(_objectSpread({}, style), additionalProps ? additionalProps.style : null),
    onClick: onClick
  }), flattenColumns.map(function (column, colIndex) {
    var render = column.render,
        dataIndex = column.dataIndex,
        columnClassName = column.className;
    var key = columnsKey[colIndex];
    var fixedInfo = fixedInfoList[colIndex]; // ============= Used for nest expandable =============

    var appendCellNode;

    if (colIndex === (expandIconColumnIndex || 0) && nestExpandable) {
      appendCellNode = React.createElement(React.Fragment, null, React.createElement("span", {
        style: {
          paddingLeft: "".concat(indentSize * indent, "px")
        },
        className: "".concat(prefixCls, "-row-indent indent-level-").concat(indent)
      }), expandIcon({
        prefixCls: prefixCls,
        expanded: expanded,
        expandable: hasNestChildren,
        record: record,
        onExpand: onTriggerExpand
      }));
    }

    var additionalCellProps;

    if (column.onCell) {
      additionalCellProps = column.onCell(record, index);
    }

    return React.createElement(_Cell.default, Object.assign({
      className: columnClassName,
      ellipsis: column.ellipsis,
      align: column.align,
      component: cellComponent,
      prefixCls: prefixCls,
      key: key,
      record: record,
      index: index,
      dataIndex: dataIndex,
      render: render,
      shouldCellUpdate: column.shouldCellUpdate
    }, fixedInfo, {
      appendNode: appendCellNode,
      additionalProps: additionalCellProps
    }));
  })); // ======================== Expand Row =========================

  var expandRowNode;

  if (rowSupportExpand && (expandRended || expanded)) {
    var expandContent = expandedRowRender(record, index, indent + 1, expanded);
    var computedExpandedRowClassName = expandedRowClassName && expandedRowClassName(record, index, indent);
    expandRowNode = React.createElement(_ExpandedRow.default, {
      expanded: expanded,
      className: (0, _classnames.default)("".concat(prefixCls, "-expanded-row"), "".concat(prefixCls, "-expanded-row-level-").concat(indent + 1), computedExpandedRowClassName),
      prefixCls: prefixCls,
      fixHeader: fixHeader,
      fixColumn: fixColumn,
      horizonScroll: horizonScroll,
      component: RowComponent,
      componentWidth: componentWidth,
      cellComponent: cellComponent,
      colSpan: flattenColumns.length
    }, expandContent);
  } // ========================= Nest Row ==========================


  var nestRowNode;

  if (hasNestChildren && expanded) {
    nestRowNode = (record[childrenColumnName] || []).map(function (subRecord, subIndex) {
      var subKey = getRowKey(subRecord, subIndex);
      return React.createElement(BodyRow, Object.assign({}, props, {
        key: subKey,
        rowKey: subKey,
        record: subRecord,
        recordKey: subKey,
        index: subIndex,
        indent: indent + 1
      }));
    });
  }

  return React.createElement(React.Fragment, null, baseRowNode, expandRowNode, nestRowNode);
}

BodyRow.displayName = 'BodyRow';
var _default = BodyRow;
exports.default = _default;

/***/ }),

/***/ "./node_modules/rc-table/lib/Body/ExpandedRow.js":
/*!*******************************************************!*\
  !*** ./node_modules/rc-table/lib/Body/ExpandedRow.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Cell = _interopRequireDefault(__webpack_require__(/*! ../Cell */ "./node_modules/rc-table/lib/Cell/index.js"));

var _TableContext = _interopRequireDefault(__webpack_require__(/*! ../context/TableContext */ "./node_modules/rc-table/lib/context/TableContext.js"));

function ExpandedRow(_ref) {
  var prefixCls = _ref.prefixCls,
      children = _ref.children,
      Component = _ref.component,
      cellComponent = _ref.cellComponent,
      fixHeader = _ref.fixHeader,
      fixColumn = _ref.fixColumn,
      horizonScroll = _ref.horizonScroll,
      className = _ref.className,
      expanded = _ref.expanded,
      componentWidth = _ref.componentWidth,
      colSpan = _ref.colSpan;

  var _React$useContext = React.useContext(_TableContext.default),
      scrollbarSize = _React$useContext.scrollbarSize; // Cache render node


  return React.useMemo(function () {
    var contentNode = children;

    if (fixColumn) {
      contentNode = React.createElement("div", {
        style: {
          width: componentWidth - (fixHeader ? scrollbarSize : 0),
          position: 'sticky',
          left: 0,
          overflow: 'hidden'
        },
        className: "".concat(prefixCls, "-expanded-row-fixed")
      }, contentNode);
    }

    return React.createElement(Component, {
      className: className,
      style: {
        display: expanded ? null : 'none'
      }
    }, React.createElement(_Cell.default, {
      component: cellComponent,
      prefixCls: prefixCls,
      colSpan: colSpan
    }, contentNode));
  }, [children, Component, fixHeader, horizonScroll, className, expanded, componentWidth, colSpan, scrollbarSize]);
}

var _default = ExpandedRow;
exports.default = _default;

/***/ }),

/***/ "./node_modules/rc-table/lib/Body/index.js":
/*!*************************************************!*\
  !*** ./node_modules/rc-table/lib/Body/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _rcResizeObserver = _interopRequireDefault(__webpack_require__(/*! rc-resize-observer */ "./node_modules/rc-resize-observer/es/index.js"));

var _BodyRow = _interopRequireDefault(__webpack_require__(/*! ./BodyRow */ "./node_modules/rc-table/lib/Body/BodyRow.js"));

var _TableContext = _interopRequireDefault(__webpack_require__(/*! ../context/TableContext */ "./node_modules/rc-table/lib/context/TableContext.js"));

var _ExpandedRow = _interopRequireDefault(__webpack_require__(/*! ./ExpandedRow */ "./node_modules/rc-table/lib/Body/ExpandedRow.js"));

var _BodyContext = _interopRequireDefault(__webpack_require__(/*! ../context/BodyContext */ "./node_modules/rc-table/lib/context/BodyContext.js"));

var _valueUtil = __webpack_require__(/*! ../utils/valueUtil */ "./node_modules/rc-table/lib/utils/valueUtil.js");

var _ResizeContext = _interopRequireDefault(__webpack_require__(/*! ../context/ResizeContext */ "./node_modules/rc-table/lib/context/ResizeContext.js"));

function Body(_ref) {
  var data = _ref.data,
      getRowKey = _ref.getRowKey,
      measureColumnWidth = _ref.measureColumnWidth,
      expandedKeys = _ref.expandedKeys,
      onRow = _ref.onRow,
      rowExpandable = _ref.rowExpandable,
      emptyNode = _ref.emptyNode,
      childrenColumnName = _ref.childrenColumnName;

  var _React$useContext = React.useContext(_ResizeContext.default),
      onColumnResize = _React$useContext.onColumnResize;

  var _React$useContext2 = React.useContext(_TableContext.default),
      prefixCls = _React$useContext2.prefixCls,
      getComponent = _React$useContext2.getComponent;

  var _React$useContext3 = React.useContext(_BodyContext.default),
      fixHeader = _React$useContext3.fixHeader,
      horizonScroll = _React$useContext3.horizonScroll,
      flattenColumns = _React$useContext3.flattenColumns,
      componentWidth = _React$useContext3.componentWidth;

  return React.useMemo(function () {
    var WrapperComponent = getComponent(['body', 'wrapper'], 'tbody');
    var trComponent = getComponent(['body', 'row'], 'tr');
    var tdComponent = getComponent(['body', 'cell'], 'td');
    var rows;

    if (data.length) {
      rows = data.map(function (record, index) {
        var key = getRowKey(record, index);
        return React.createElement(_BodyRow.default, {
          key: key,
          rowKey: key,
          record: record,
          recordKey: key,
          index: index,
          rowComponent: trComponent,
          cellComponent: tdComponent,
          expandedKeys: expandedKeys,
          onRow: onRow,
          getRowKey: getRowKey,
          rowExpandable: rowExpandable,
          childrenColumnName: childrenColumnName
        });
      });
    } else {
      rows = React.createElement(_ExpandedRow.default, {
        expanded: true,
        className: "".concat(prefixCls, "-placeholder"),
        prefixCls: prefixCls,
        fixHeader: fixHeader,
        fixColumn: horizonScroll,
        horizonScroll: horizonScroll,
        component: trComponent,
        componentWidth: componentWidth,
        cellComponent: tdComponent,
        colSpan: flattenColumns.length
      }, emptyNode);
    }

    var columnsKey = (0, _valueUtil.getColumnsKey)(flattenColumns);
    return React.createElement(WrapperComponent, {
      className: "".concat(prefixCls, "-tbody")
    }, measureColumnWidth && React.createElement("tr", {
      "aria-hidden": "true",
      className: "".concat(prefixCls, "-measure-row"),
      style: {
        height: 0
      }
    }, columnsKey.map(function (columnKey) {
      return React.createElement(_rcResizeObserver.default, {
        key: columnKey,
        onResize: function onResize(_ref2) {
          var offsetWidth = _ref2.offsetWidth;
          onColumnResize(columnKey, offsetWidth);
        }
      }, React.createElement("td", {
        style: {
          padding: 0,
          border: 0,
          height: 0
        }
      }));
    })), rows);
  }, [data, prefixCls, onRow, measureColumnWidth, expandedKeys, getRowKey, getComponent, componentWidth, emptyNode, flattenColumns]);
}

var MemoBody = React.memo(Body);
MemoBody.displayName = 'Body';
var _default = MemoBody;
exports.default = _default;

/***/ }),

/***/ "./node_modules/rc-table/lib/Cell/index.js":
/*!*************************************************!*\
  !*** ./node_modules/rc-table/lib/Cell/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _ref3 = __webpack_require__(/*! rc-util/lib/ref */ "./node_modules/rc-util/lib/ref.js");

var _valueUtil = __webpack_require__(/*! ../utils/valueUtil */ "./node_modules/rc-table/lib/utils/valueUtil.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function isRenderCell(data) {
  return data && (0, _typeof2.default)(data) === 'object' && !Array.isArray(data) && !React.isValidElement(data);
}

function isRefComponent(component) {
  // String tag component also support ref
  if (typeof component === 'string') {
    return true;
  }

  return (0, _ref3.supportRef)(component);
}

function Cell(_ref, ref) {
  var _classNames;

  var prefixCls = _ref.prefixCls,
      className = _ref.className,
      record = _ref.record,
      index = _ref.index,
      dataIndex = _ref.dataIndex,
      render = _ref.render,
      children = _ref.children,
      _ref$component = _ref.component,
      Component = _ref$component === void 0 ? 'td' : _ref$component,
      colSpan = _ref.colSpan,
      rowSpan = _ref.rowSpan,
      fixLeft = _ref.fixLeft,
      fixRight = _ref.fixRight,
      firstFixLeft = _ref.firstFixLeft,
      lastFixLeft = _ref.lastFixLeft,
      firstFixRight = _ref.firstFixRight,
      lastFixRight = _ref.lastFixRight,
      appendNode = _ref.appendNode,
      _ref$additionalProps = _ref.additionalProps,
      additionalProps = _ref$additionalProps === void 0 ? {} : _ref$additionalProps,
      ellipsis = _ref.ellipsis,
      align = _ref.align,
      rowType = _ref.rowType;
  var cellPrefixCls = "".concat(prefixCls, "-cell"); // ==================== Child Node ====================

  var cellProps;
  var childNode;

  if (children) {
    childNode = children;
  } else {
    var value = (0, _valueUtil.getPathValue)(record, dataIndex); // Customize render node

    childNode = value;

    if (render) {
      var renderData = render(value, record, index);

      if (isRenderCell(renderData)) {
        childNode = renderData.children;
        cellProps = renderData.props;
      } else {
        childNode = renderData;
      }
    }
  } // Not crash if final `childNode` is not validate ReactNode


  if ((0, _typeof2.default)(childNode) === 'object' && !Array.isArray(childNode) && !React.isValidElement(childNode)) {
    childNode = null;
  }

  if (ellipsis && (lastFixLeft || firstFixRight)) {
    childNode = React.createElement("span", {
      className: "".concat(cellPrefixCls, "-content")
    }, childNode);
  }

  var _ref2 = cellProps || {},
      cellColSpan = _ref2.colSpan,
      cellRowSpan = _ref2.rowSpan,
      cellStyle = _ref2.style,
      cellClassName = _ref2.className,
      restCellProps = (0, _objectWithoutProperties2.default)(_ref2, ["colSpan", "rowSpan", "style", "className"]);

  var mergedColSpan = cellColSpan !== undefined ? cellColSpan : colSpan;
  var mergedRowSpan = cellRowSpan !== undefined ? cellRowSpan : rowSpan;

  if (mergedColSpan === 0 || mergedRowSpan === 0) {
    return null;
  } // ====================== Fixed =======================


  var fixedStyle = {};
  var isFixLeft = typeof fixLeft === 'number';
  var isFixRight = typeof fixRight === 'number';

  if (isFixLeft) {
    fixedStyle.position = 'sticky';
    fixedStyle.left = fixLeft;
  }

  if (isFixRight) {
    fixedStyle.position = 'sticky';
    fixedStyle.right = fixRight;
  } // ====================== Align =======================


  var alignStyle = {};

  if (align) {
    alignStyle.textAlign = align;
  } // ====================== Render ======================


  var title;
  var ellipsisConfig = ellipsis === true ? {
    showTitle: true
  } : ellipsis;

  if (ellipsisConfig && (ellipsisConfig.showTitle || rowType === 'header')) {
    if (typeof childNode === 'string' || typeof childNode === 'number') {
      title = childNode.toString();
    } else if (React.isValidElement(childNode) && typeof childNode.props.children === 'string') {
      title = childNode.props.children;
    }
  }

  var componentProps = _objectSpread(_objectSpread(_objectSpread({
    title: title
  }, restCellProps), additionalProps), {}, {
    colSpan: mergedColSpan && mergedColSpan !== 1 ? mergedColSpan : null,
    rowSpan: mergedRowSpan && mergedRowSpan !== 1 ? mergedRowSpan : null,
    className: (0, _classnames.default)(cellPrefixCls, className, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(cellPrefixCls, "-fix-left"), isFixLeft), (0, _defineProperty2.default)(_classNames, "".concat(cellPrefixCls, "-fix-left-first"), firstFixLeft), (0, _defineProperty2.default)(_classNames, "".concat(cellPrefixCls, "-fix-left-last"), lastFixLeft), (0, _defineProperty2.default)(_classNames, "".concat(cellPrefixCls, "-fix-right"), isFixRight), (0, _defineProperty2.default)(_classNames, "".concat(cellPrefixCls, "-fix-right-first"), firstFixRight), (0, _defineProperty2.default)(_classNames, "".concat(cellPrefixCls, "-fix-right-last"), lastFixRight), (0, _defineProperty2.default)(_classNames, "".concat(cellPrefixCls, "-ellipsis"), ellipsis), (0, _defineProperty2.default)(_classNames, "".concat(cellPrefixCls, "-with-append"), appendNode), _classNames), additionalProps.className, cellClassName),
    style: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, additionalProps.style), alignStyle), fixedStyle), cellStyle),
    ref: isRefComponent(Component) ? ref : null
  });

  return React.createElement(Component, Object.assign({}, componentProps), appendNode, childNode);
}

var RefCell = React.forwardRef(Cell);
RefCell.displayName = 'Cell';
var MemoCell = React.memo(RefCell, function (prev, next) {
  if (next.shouldCellUpdate) {
    return !next.shouldCellUpdate(next.record, prev.record);
  }

  return false;
});
var _default = MemoCell;
exports.default = _default;

/***/ }),

/***/ "./node_modules/rc-table/lib/ColGroup.js":
/*!***********************************************!*\
  !*** ./node_modules/rc-table/lib/ColGroup.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _legacyUtil = __webpack_require__(/*! ./utils/legacyUtil */ "./node_modules/rc-table/lib/utils/legacyUtil.js");

function ColGroup(_ref) {
  var colWidths = _ref.colWidths,
      columns = _ref.columns,
      columCount = _ref.columCount;
  var cols = [];
  var len = columCount || columns.length; // Only insert col with width & additional props
  // Skip if rest col do not have any useful info

  var mustInsert = false;

  for (var i = len - 1; i >= 0; i -= 1) {
    var width = colWidths[i];
    var column = columns && columns[i];
    var additionalProps = column && column[_legacyUtil.INTERNAL_COL_DEFINE];

    if (width || additionalProps || mustInsert) {
      cols.unshift(React.createElement("col", Object.assign({
        key: i,
        style: {
          width: width,
          minWidth: width
        }
      }, additionalProps)));
      mustInsert = true;
    }
  }

  return React.createElement("colgroup", null, cols);
}

var _default = ColGroup;
exports.default = _default;

/***/ }),

/***/ "./node_modules/rc-table/lib/Footer/Cell.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-table/lib/Footer/Cell.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SummaryCell;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Cell = _interopRequireDefault(__webpack_require__(/*! ../Cell */ "./node_modules/rc-table/lib/Cell/index.js"));

var _TableContext = _interopRequireDefault(__webpack_require__(/*! ../context/TableContext */ "./node_modules/rc-table/lib/context/TableContext.js"));

function SummaryCell(_ref) {
  var className = _ref.className,
      index = _ref.index,
      children = _ref.children,
      colSpan = _ref.colSpan,
      rowSpan = _ref.rowSpan;

  var _React$useContext = React.useContext(_TableContext.default),
      prefixCls = _React$useContext.prefixCls,
      fixedInfoList = _React$useContext.fixedInfoList;

  var fixedInfo = fixedInfoList[index];
  return React.createElement(_Cell.default, Object.assign({
    className: className,
    index: index,
    component: "td",
    prefixCls: prefixCls,
    record: null,
    dataIndex: null,
    render: function render() {
      return {
        children: children,
        props: {
          colSpan: colSpan,
          rowSpan: rowSpan
        }
      };
    }
  }, fixedInfo));
}

/***/ }),

/***/ "./node_modules/rc-table/lib/Footer/Row.js":
/*!*************************************************!*\
  !*** ./node_modules/rc-table/lib/Footer/Row.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FooterRow;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function FooterRow(props) {
  return React.createElement("tr", Object.assign({}, props));
}

/***/ }),

/***/ "./node_modules/rc-table/lib/Footer/index.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-table/lib/Footer/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FooterComponents = exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _TableContext = _interopRequireDefault(__webpack_require__(/*! ../context/TableContext */ "./node_modules/rc-table/lib/context/TableContext.js"));

var _Cell = _interopRequireDefault(__webpack_require__(/*! ./Cell */ "./node_modules/rc-table/lib/Footer/Cell.js"));

var _Row = _interopRequireDefault(__webpack_require__(/*! ./Row */ "./node_modules/rc-table/lib/Footer/Row.js"));

function Footer(_ref) {
  var children = _ref.children;

  var _React$useContext = React.useContext(_TableContext.default),
      prefixCls = _React$useContext.prefixCls;

  return React.createElement("tfoot", {
    className: "".concat(prefixCls, "-summary")
  }, children);
}

var _default = Footer;
exports.default = _default;
var FooterComponents = {
  Cell: _Cell.default,
  Row: _Row.default
};
exports.FooterComponents = FooterComponents;

/***/ }),

/***/ "./node_modules/rc-table/lib/Header/FixedHeader.js":
/*!*********************************************************!*\
  !*** ./node_modules/rc-table/lib/Header/FixedHeader.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Header = _interopRequireDefault(__webpack_require__(/*! ./Header */ "./node_modules/rc-table/lib/Header/Header.js"));

var _ColGroup = _interopRequireDefault(__webpack_require__(/*! ../ColGroup */ "./node_modules/rc-table/lib/ColGroup.js"));

var _TableContext = _interopRequireDefault(__webpack_require__(/*! ../context/TableContext */ "./node_modules/rc-table/lib/context/TableContext.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function useColumnWidth(colWidths, columCount) {
  return (0, React.useMemo)(function () {
    var cloneColumns = [];

    for (var i = 0; i < columCount; i += 1) {
      var val = colWidths[i];

      if (val) {
        cloneColumns[i] = val;
      } else {
        return null;
      }
    }

    return cloneColumns;
  }, [colWidths.join('_'), columCount]);
}

function FixedHeader(_ref) {
  var columns = _ref.columns,
      flattenColumns = _ref.flattenColumns,
      colWidths = _ref.colWidths,
      columCount = _ref.columCount,
      stickyOffsets = _ref.stickyOffsets,
      direction = _ref.direction,
      props = (0, _objectWithoutProperties2.default)(_ref, ["columns", "flattenColumns", "colWidths", "columCount", "stickyOffsets", "direction"]);

  var _React$useContext = React.useContext(_TableContext.default),
      prefixCls = _React$useContext.prefixCls,
      scrollbarSize = _React$useContext.scrollbarSize; // Add scrollbar column


  var lastColumn = flattenColumns[flattenColumns.length - 1];
  var ScrollBarColumn = {
    fixed: lastColumn ? lastColumn.fixed : null,
    onHeaderCell: function onHeaderCell() {
      return {
        className: "".concat(prefixCls, "-cell-scrollbar")
      };
    }
  };
  var columnsWithScrollbar = (0, React.useMemo)(function () {
    return scrollbarSize ? [].concat((0, _toConsumableArray2.default)(columns), [ScrollBarColumn]) : columns;
  }, [scrollbarSize, columns]);
  var flattenColumnsWithScrollbar = (0, React.useMemo)(function () {
    return scrollbarSize ? [].concat((0, _toConsumableArray2.default)(flattenColumns), [ScrollBarColumn]) : flattenColumns;
  }, [scrollbarSize, flattenColumns]); // Calculate the sticky offsets

  var headerStickyOffsets = (0, React.useMemo)(function () {
    var right = stickyOffsets.right,
        left = stickyOffsets.left;
    return _objectSpread(_objectSpread({}, stickyOffsets), {}, {
      left: direction === 'rtl' ? [].concat((0, _toConsumableArray2.default)(left.map(function (width) {
        return width + scrollbarSize;
      })), [0]) : left,
      right: direction === 'rtl' ? right : [].concat((0, _toConsumableArray2.default)(right.map(function (width) {
        return width + scrollbarSize;
      })), [0])
    });
  }, [scrollbarSize, stickyOffsets]);
  var mergedColumnWidth = useColumnWidth(colWidths, columCount);
  return React.createElement("table", {
    style: {
      tableLayout: 'fixed',
      visibility: mergedColumnWidth ? null : 'hidden'
    }
  }, React.createElement(_ColGroup.default, {
    colWidths: mergedColumnWidth ? [].concat((0, _toConsumableArray2.default)(mergedColumnWidth), [scrollbarSize]) : [],
    columCount: columCount + 1,
    columns: flattenColumnsWithScrollbar
  }), React.createElement(_Header.default, Object.assign({}, props, {
    stickyOffsets: headerStickyOffsets,
    columns: columnsWithScrollbar,
    flattenColumns: flattenColumnsWithScrollbar
  })));
}

var _default = FixedHeader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/rc-table/lib/Header/Header.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-table/lib/Header/Header.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _HeaderRow = _interopRequireDefault(__webpack_require__(/*! ./HeaderRow */ "./node_modules/rc-table/lib/Header/HeaderRow.js"));

var _TableContext = _interopRequireDefault(__webpack_require__(/*! ../context/TableContext */ "./node_modules/rc-table/lib/context/TableContext.js"));

function parseHeaderRows(rootColumns) {
  var rows = [];

  function fillRowCells(columns, colIndex) {
    var rowIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    // Init rows
    rows[rowIndex] = rows[rowIndex] || [];
    var currentColIndex = colIndex;
    var colSpans = columns.map(function (column) {
      var cell = {
        key: column.key,
        className: column.className || '',
        children: column.title,
        column: column,
        colStart: currentColIndex
      };
      var colSpan = 1;
      var subColumns = column.children;

      if (subColumns && subColumns.length > 0) {
        colSpan = fillRowCells(subColumns, currentColIndex, rowIndex + 1).reduce(function (total, count) {
          return total + count;
        }, 0);
        cell.hasSubColumns = true;
      }

      if ('colSpan' in column) {
        colSpan = column.colSpan;
      }

      if ('rowSpan' in column) {
        cell.rowSpan = column.rowSpan;
      }

      cell.colSpan = colSpan;
      cell.colEnd = cell.colStart + colSpan - 1;
      rows[rowIndex].push(cell);
      currentColIndex += colSpan;
      return colSpan;
    });
    return colSpans;
  } // Generate `rows` cell data


  fillRowCells(rootColumns, 0); // Handle `rowSpan`

  var rowCount = rows.length;

  var _loop = function _loop(rowIndex) {
    rows[rowIndex].forEach(function (cell) {
      if (!('rowSpan' in cell) && !cell.hasSubColumns) {
        // eslint-disable-next-line no-param-reassign
        cell.rowSpan = rowCount - rowIndex;
      }
    });
  };

  for (var rowIndex = 0; rowIndex < rowCount; rowIndex += 1) {
    _loop(rowIndex);
  }

  return rows;
}

function Header(_ref) {
  var stickyOffsets = _ref.stickyOffsets,
      columns = _ref.columns,
      flattenColumns = _ref.flattenColumns,
      onHeaderRow = _ref.onHeaderRow;

  var _React$useContext = React.useContext(_TableContext.default),
      prefixCls = _React$useContext.prefixCls,
      getComponent = _React$useContext.getComponent;

  var rows = React.useMemo(function () {
    return parseHeaderRows(columns);
  }, [columns]);
  var WrapperComponent = getComponent(['header', 'wrapper'], 'thead');
  var trComponent = getComponent(['header', 'row'], 'tr');
  var thComponent = getComponent(['header', 'cell'], 'th');
  return React.createElement(WrapperComponent, {
    className: "".concat(prefixCls, "-thead")
  }, rows.map(function (row, rowIndex) {
    var rowNode = React.createElement(_HeaderRow.default, {
      key: rowIndex,
      flattenColumns: flattenColumns,
      cells: row,
      stickyOffsets: stickyOffsets,
      rowComponent: trComponent,
      cellComponent: thComponent,
      onHeaderRow: onHeaderRow,
      index: rowIndex
    });
    return rowNode;
  }));
}

var _default = Header;
exports.default = _default;

/***/ }),

/***/ "./node_modules/rc-table/lib/Header/HeaderRow.js":
/*!*******************************************************!*\
  !*** ./node_modules/rc-table/lib/Header/HeaderRow.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Cell = _interopRequireDefault(__webpack_require__(/*! ../Cell */ "./node_modules/rc-table/lib/Cell/index.js"));

var _TableContext = _interopRequireDefault(__webpack_require__(/*! ../context/TableContext */ "./node_modules/rc-table/lib/context/TableContext.js"));

var _fixUtil = __webpack_require__(/*! ../utils/fixUtil */ "./node_modules/rc-table/lib/utils/fixUtil.js");

var _valueUtil = __webpack_require__(/*! ../utils/valueUtil */ "./node_modules/rc-table/lib/utils/valueUtil.js");

function HeaderRow(_ref) {
  var cells = _ref.cells,
      stickyOffsets = _ref.stickyOffsets,
      flattenColumns = _ref.flattenColumns,
      RowComponent = _ref.rowComponent,
      CellComponent = _ref.cellComponent,
      onHeaderRow = _ref.onHeaderRow,
      index = _ref.index;

  var _React$useContext = React.useContext(_TableContext.default),
      prefixCls = _React$useContext.prefixCls,
      direction = _React$useContext.direction;

  var rowProps;

  if (onHeaderRow) {
    rowProps = onHeaderRow(cells.map(function (cell) {
      return cell.column;
    }), index);
  }

  var columnsKey = (0, _valueUtil.getColumnsKey)(cells.map(function (cell) {
    return cell.column;
  }));
  return React.createElement(RowComponent, Object.assign({}, rowProps), cells.map(function (cell, cellIndex) {
    var column = cell.column;
    var fixedInfo = (0, _fixUtil.getCellFixedInfo)(cell.colStart, cell.colEnd, flattenColumns, stickyOffsets, direction);
    var additionalProps;

    if (column && column.onHeaderCell) {
      additionalProps = cell.column.onHeaderCell(column);
    }

    return React.createElement(_Cell.default, Object.assign({}, cell, {
      ellipsis: column.ellipsis,
      align: column.align,
      component: CellComponent,
      prefixCls: prefixCls,
      key: columnsKey[cellIndex]
    }, fixedInfo, {
      additionalProps: additionalProps,
      rowType: "header"
    }));
  }));
}

HeaderRow.displayName = 'HeaderRow';
var _default = HeaderRow;
exports.default = _default;

/***/ }),

/***/ "./node_modules/rc-table/lib/Panel/index.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-table/lib/Panel/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function Panel(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return React.createElement("div", {
    className: className
  }, children);
}

var _default = Panel;
exports.default = _default;

/***/ }),

/***/ "./node_modules/rc-table/lib/Table.js":
/*!********************************************!*\
  !*** ./node_modules/rc-table/lib/Table.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.INTERNAL_HOOKS = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _shallowequal = _interopRequireDefault(__webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js"));

var _warning = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/warning */ "./node_modules/rc-util/lib/warning.js"));

var _rcResizeObserver = _interopRequireDefault(__webpack_require__(/*! rc-resize-observer */ "./node_modules/rc-resize-observer/es/index.js"));

var _getScrollBarSize = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/getScrollBarSize */ "./node_modules/rc-util/lib/getScrollBarSize.js"));

var _ColumnGroup = _interopRequireDefault(__webpack_require__(/*! ./sugar/ColumnGroup */ "./node_modules/rc-table/lib/sugar/ColumnGroup.js"));

var _Column = _interopRequireDefault(__webpack_require__(/*! ./sugar/Column */ "./node_modules/rc-table/lib/sugar/Column.js"));

var _FixedHeader = _interopRequireDefault(__webpack_require__(/*! ./Header/FixedHeader */ "./node_modules/rc-table/lib/Header/FixedHeader.js"));

var _Header = _interopRequireDefault(__webpack_require__(/*! ./Header/Header */ "./node_modules/rc-table/lib/Header/Header.js"));

var _TableContext = _interopRequireDefault(__webpack_require__(/*! ./context/TableContext */ "./node_modules/rc-table/lib/context/TableContext.js"));

var _BodyContext = _interopRequireDefault(__webpack_require__(/*! ./context/BodyContext */ "./node_modules/rc-table/lib/context/BodyContext.js"));

var _Body = _interopRequireDefault(__webpack_require__(/*! ./Body */ "./node_modules/rc-table/lib/Body/index.js"));

var _useColumns3 = _interopRequireDefault(__webpack_require__(/*! ./hooks/useColumns */ "./node_modules/rc-table/lib/hooks/useColumns.js"));

var _useFrame = __webpack_require__(/*! ./hooks/useFrame */ "./node_modules/rc-table/lib/hooks/useFrame.js");

var _valueUtil = __webpack_require__(/*! ./utils/valueUtil */ "./node_modules/rc-table/lib/utils/valueUtil.js");

var _ResizeContext = _interopRequireDefault(__webpack_require__(/*! ./context/ResizeContext */ "./node_modules/rc-table/lib/context/ResizeContext.js"));

var _useStickyOffsets = _interopRequireDefault(__webpack_require__(/*! ./hooks/useStickyOffsets */ "./node_modules/rc-table/lib/hooks/useStickyOffsets.js"));

var _ColGroup = _interopRequireDefault(__webpack_require__(/*! ./ColGroup */ "./node_modules/rc-table/lib/ColGroup.js"));

var _legacyUtil = __webpack_require__(/*! ./utils/legacyUtil */ "./node_modules/rc-table/lib/utils/legacyUtil.js");

var _Panel = _interopRequireDefault(__webpack_require__(/*! ./Panel */ "./node_modules/rc-table/lib/Panel/index.js"));

var _Footer = _interopRequireWildcard(__webpack_require__(/*! ./Footer */ "./node_modules/rc-table/lib/Footer/index.js"));

var _expandUtil = __webpack_require__(/*! ./utils/expandUtil */ "./node_modules/rc-table/lib/utils/expandUtil.js");

var _fixUtil = __webpack_require__(/*! ./utils/fixUtil */ "./node_modules/rc-table/lib/utils/fixUtil.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Used for conditions cache
var EMPTY_DATA = []; // Used for customize scroll

var EMPTY_SCROLL_TARGET = {};
var INTERNAL_HOOKS = 'rc-table-internal-hook';
exports.INTERNAL_HOOKS = INTERNAL_HOOKS;
var MemoTableContent = React.memo(function (_ref) {
  var children = _ref.children;
  return children;
}, function (prev, next) {
  if (!(0, _shallowequal.default)(prev.props, next.props)) {
    return false;
  } // No additional render when pinged status change.
  // This is not a bug.


  return prev.pingLeft !== next.pingLeft || prev.pingRight !== next.pingRight;
});

function Table(props) {
  var _classNames;

  var prefixCls = props.prefixCls,
      className = props.className,
      rowClassName = props.rowClassName,
      style = props.style,
      data = props.data,
      rowKey = props.rowKey,
      scroll = props.scroll,
      tableLayout = props.tableLayout,
      direction = props.direction,
      title = props.title,
      footer = props.footer,
      summary = props.summary,
      id = props.id,
      showHeader = props.showHeader,
      components = props.components,
      emptyText = props.emptyText,
      onRow = props.onRow,
      onHeaderRow = props.onHeaderRow,
      internalHooks = props.internalHooks,
      transformColumns = props.transformColumns,
      internalRefs = props.internalRefs;
  var mergedData = data || EMPTY_DATA;
  var hasData = !!mergedData.length; // ===================== Effects ======================

  var _React$useState = React.useState(0),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      scrollbarSize = _React$useState2[0],
      setScrollbarSize = _React$useState2[1];

  React.useEffect(function () {
    setScrollbarSize((0, _getScrollBarSize.default)());
  }); // ===================== Warning ======================

  if (true) {
    ['onRowClick', 'onRowDoubleClick', 'onRowContextMenu', 'onRowMouseEnter', 'onRowMouseLeave'].forEach(function (name) {
      (0, _warning.default)(props[name] === undefined, "`".concat(name, "` is removed, please use `onRow` instead."));
    });
    (0, _warning.default)(!('getBodyWrapper' in props), '`getBodyWrapper` is deprecated, please use custom `components` instead.');
  } // ==================== Customize =====================


  var mergedComponents = React.useMemo(function () {
    return (0, _valueUtil.mergeObject)(components, {});
  }, [components]);
  var getComponent = React.useCallback(function (path, defaultComponent) {
    return (0, _valueUtil.getPathValue)(mergedComponents, path) || defaultComponent;
  }, [mergedComponents]);
  var getRowKey = React.useMemo(function () {
    if (typeof rowKey === 'function') {
      return rowKey;
    }

    return function (record) {
      var key = record && record[rowKey];

      if (true) {
        (0, _warning.default)(key !== undefined, 'Each record in table should have a unique `key` prop, or set `rowKey` to an unique primary key.');
      }

      return key;
    };
  }, [rowKey]); // ====================== Expand ======================

  var expandableConfig = (0, _legacyUtil.getExpandableProps)(props);
  var expandIcon = expandableConfig.expandIcon,
      expandedRowKeys = expandableConfig.expandedRowKeys,
      defaultExpandedRowKeys = expandableConfig.defaultExpandedRowKeys,
      defaultExpandAllRows = expandableConfig.defaultExpandAllRows,
      expandedRowRender = expandableConfig.expandedRowRender,
      onExpand = expandableConfig.onExpand,
      onExpandedRowsChange = expandableConfig.onExpandedRowsChange,
      expandRowByClick = expandableConfig.expandRowByClick,
      rowExpandable = expandableConfig.rowExpandable,
      expandIconColumnIndex = expandableConfig.expandIconColumnIndex,
      expandedRowClassName = expandableConfig.expandedRowClassName,
      childrenColumnName = expandableConfig.childrenColumnName,
      indentSize = expandableConfig.indentSize;
  var mergedExpandIcon = expandIcon || _expandUtil.renderExpandIcon;
  var mergedChildrenColumnName = childrenColumnName || 'children';
  var expandableType = React.useMemo(function () {
    if (expandedRowRender) {
      return 'row';
    }
    /* eslint-disable no-underscore-dangle */

    /**
     * Fix https://github.com/ant-design/ant-design/issues/21154
     * This is a workaround to not to break current behavior.
     * We can remove follow code after final release.
     *
     * To other developer:
     *  Do not use `__PARENT_RENDER_ICON__` in prod since we will remove this when refactor
     */


    if (props.expandable && internalHooks === INTERNAL_HOOKS && props.expandable.__PARENT_RENDER_ICON__ || mergedData.some(function (record) {
      return record && (0, _typeof2.default)(record) === 'object' && record[mergedChildrenColumnName];
    })) {
      return 'nest';
    }
    /* eslint-enable */


    return false;
  }, [!!expandedRowRender, mergedData]);

  var _React$useState3 = React.useState(function () {
    if (defaultExpandedRowKeys) {
      return defaultExpandedRowKeys;
    }

    if (defaultExpandAllRows) {
      return (0, _expandUtil.findAllChildrenKeys)(mergedData, getRowKey, mergedChildrenColumnName);
    }

    return [];
  }),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      innerExpandedKeys = _React$useState4[0],
      setInnerExpandedKeys = _React$useState4[1];

  var mergedExpandedKeys = React.useMemo(function () {
    return new Set(expandedRowKeys || innerExpandedKeys || []);
  }, [expandedRowKeys, innerExpandedKeys]);
  var onTriggerExpand = React.useCallback(function (record) {
    var key = getRowKey(record, mergedData.indexOf(record));
    var newExpandedKeys;
    var hasKey = mergedExpandedKeys.has(key);

    if (hasKey) {
      mergedExpandedKeys.delete(key);
      newExpandedKeys = (0, _toConsumableArray2.default)(mergedExpandedKeys);
    } else {
      newExpandedKeys = [].concat((0, _toConsumableArray2.default)(mergedExpandedKeys), [key]);
    }

    setInnerExpandedKeys(newExpandedKeys);

    if (onExpand) {
      onExpand(!hasKey, record);
    }

    if (onExpandedRowsChange) {
      onExpandedRowsChange(newExpandedKeys);
    }
  }, [getRowKey, mergedExpandedKeys, mergedData, onExpand, onExpandedRowsChange]); // ====================== Column ======================

  var _React$useState5 = React.useState(0),
      _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
      componentWidth = _React$useState6[0],
      setComponentWidth = _React$useState6[1];

  var _useColumns = (0, _useColumns3.default)(_objectSpread(_objectSpread(_objectSpread({}, props), expandableConfig), {}, {
    expandable: !!expandedRowRender,
    expandedKeys: mergedExpandedKeys,
    getRowKey: getRowKey,
    // https://github.com/ant-design/ant-design/issues/23894
    onTriggerExpand: onTriggerExpand,
    expandIcon: mergedExpandIcon,
    expandIconColumnIndex: expandIconColumnIndex,
    direction: direction
  }), internalHooks === INTERNAL_HOOKS ? transformColumns : null),
      _useColumns2 = (0, _slicedToArray2.default)(_useColumns, 2),
      columns = _useColumns2[0],
      flattenColumns = _useColumns2[1];

  var columnContext = React.useMemo(function () {
    return {
      columns: columns,
      flattenColumns: flattenColumns
    };
  }, [columns, flattenColumns]); // ====================== Scroll ======================

  var fullTableRef = React.useRef();
  var scrollHeaderRef = React.useRef();
  var scrollBodyRef = React.useRef();

  var _React$useState7 = React.useState(false),
      _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
      pingedLeft = _React$useState8[0],
      setPingedLeft = _React$useState8[1];

  var _React$useState9 = React.useState(false),
      _React$useState10 = (0, _slicedToArray2.default)(_React$useState9, 2),
      pingedRight = _React$useState10[0],
      setPingedRight = _React$useState10[1];

  var _useFrameState = (0, _useFrame.useFrameState)(new Map()),
      _useFrameState2 = (0, _slicedToArray2.default)(_useFrameState, 2),
      colsWidths = _useFrameState2[0],
      updateColsWidths = _useFrameState2[1]; // Convert map to number width


  var colsKeys = (0, _valueUtil.getColumnsKey)(flattenColumns);
  var pureColWidths = colsKeys.map(function (columnKey) {
    return colsWidths.get(columnKey);
  });
  var colWidths = React.useMemo(function () {
    return pureColWidths;
  }, [pureColWidths.join('_')]);
  var stickyOffsets = (0, _useStickyOffsets.default)(colWidths, flattenColumns.length, direction);
  var fixHeader = scroll && (0, _valueUtil.validateValue)(scroll.y);
  var horizonScroll = scroll && (0, _valueUtil.validateValue)(scroll.x);
  var fixColumn = horizonScroll && flattenColumns.some(function (_ref2) {
    var fixed = _ref2.fixed;
    return fixed;
  });
  var scrollXStyle;
  var scrollYStyle;
  var scrollTableStyle;

  if (fixHeader) {
    scrollYStyle = {
      overflowY: 'scroll',
      maxHeight: scroll.y
    };
  }

  if (horizonScroll) {
    scrollXStyle = {
      overflowX: 'auto'
    }; // When no vertical scrollbar, should hide it
    // https://github.com/ant-design/ant-design/pull/20705
    // https://github.com/ant-design/ant-design/issues/21879

    if (!fixHeader) {
      scrollYStyle = {
        overflowY: 'hidden'
      };
    }

    scrollTableStyle = {
      width: scroll.x === true ? 'auto' : scroll.x,
      minWidth: '100%'
    };
  }

  var onColumnResize = React.useCallback(function (columnKey, width) {
    updateColsWidths(function (widths) {
      var newWidths = new Map(widths);
      newWidths.set(columnKey, width);
      return newWidths;
    });
  }, []);

  var _useTimeoutLock = (0, _useFrame.useTimeoutLock)(null),
      _useTimeoutLock2 = (0, _slicedToArray2.default)(_useTimeoutLock, 2),
      setScrollTarget = _useTimeoutLock2[0],
      getScrollTarget = _useTimeoutLock2[1];

  function forceScroll(scrollLeft, target) {
    /* eslint-disable no-param-reassign */
    if (target && target.scrollLeft !== scrollLeft) {
      target.scrollLeft = scrollLeft;
    }
    /* eslint-enable */

  }

  var onScroll = function onScroll(_ref3) {
    var currentTarget = _ref3.currentTarget,
        scrollLeft = _ref3.scrollLeft;
    var mergedScrollLeft = typeof scrollLeft === 'number' ? scrollLeft : currentTarget.scrollLeft;
    var compareTarget = currentTarget || EMPTY_SCROLL_TARGET;

    if (!getScrollTarget() || getScrollTarget() === compareTarget) {
      setScrollTarget(compareTarget);
      forceScroll(mergedScrollLeft, scrollHeaderRef.current);
      forceScroll(mergedScrollLeft, scrollBodyRef.current);
    }

    if (currentTarget) {
      var scrollWidth = currentTarget.scrollWidth,
          clientWidth = currentTarget.clientWidth;
      setPingedLeft(mergedScrollLeft > 0);
      setPingedRight(mergedScrollLeft < scrollWidth - clientWidth);
    }
  };

  var triggerOnScroll = function triggerOnScroll() {
    if (scrollBodyRef.current) {
      onScroll({
        currentTarget: scrollBodyRef.current
      });
    }
  };

  var onFullTableResize = function onFullTableResize(_ref4) {
    var width = _ref4.width;
    triggerOnScroll();
    setComponentWidth(fullTableRef.current ? fullTableRef.current.offsetWidth : width);
  }; // Sync scroll bar when init or `horizonScroll` changed


  React.useEffect(function () {
    return triggerOnScroll;
  }, []);
  React.useEffect(function () {
    if (horizonScroll) {
      triggerOnScroll();
    }
  }, [horizonScroll]); // ================== INTERNAL HOOKS ==================

  React.useEffect(function () {
    if (internalHooks === INTERNAL_HOOKS && internalRefs) {
      internalRefs.body.current = scrollBodyRef.current;
    }
  }); // ====================== Render ======================

  var TableComponent = getComponent(['table'], 'table'); // Table layout

  var mergedTableLayout = React.useMemo(function () {
    if (tableLayout) {
      return tableLayout;
    } // https://github.com/ant-design/ant-design/issues/25227
    // When scroll.x is max-content, no need to fix table layout
    // it's width should stretch out to fit content


    if (fixColumn) {
      return scroll.x === 'max-content' ? 'auto' : 'fixed';
    }

    if (fixHeader || flattenColumns.some(function (_ref5) {
      var ellipsis = _ref5.ellipsis;
      return ellipsis;
    })) {
      return 'fixed';
    }

    return 'auto';
  }, [fixHeader, fixColumn, flattenColumns, tableLayout]);
  var groupTableNode; // Header props

  var headerProps = {
    colWidths: colWidths,
    columCount: flattenColumns.length,
    stickyOffsets: stickyOffsets,
    onHeaderRow: onHeaderRow
  }; // Empty

  var emptyNode = React.useMemo(function () {
    if (hasData) {
      return null;
    }

    if (typeof emptyText === 'function') {
      return emptyText();
    }

    return emptyText;
  }, [hasData, emptyText]); // Body

  var bodyTable = React.createElement(_Body.default, {
    data: mergedData,
    measureColumnWidth: fixHeader || horizonScroll,
    expandedKeys: mergedExpandedKeys,
    rowExpandable: rowExpandable,
    getRowKey: getRowKey,
    onRow: onRow,
    emptyNode: emptyNode,
    childrenColumnName: mergedChildrenColumnName
  });
  var bodyColGroup = React.createElement(_ColGroup.default, {
    colWidths: flattenColumns.map(function (_ref6) {
      var width = _ref6.width;
      return width;
    }),
    columns: flattenColumns
  });
  var footerTable = summary && React.createElement(_Footer.default, null, summary(mergedData));
  var customizeScrollBody = getComponent(['body']);

  if ( true && typeof customizeScrollBody === 'function' && hasData && !fixHeader) {
    (0, _warning.default)(false, '`components.body` with render props is only work on `scroll.y`.');
  }

  if (fixHeader) {
    var bodyContent;

    if (typeof customizeScrollBody === 'function') {
      bodyContent = customizeScrollBody(mergedData, {
        scrollbarSize: scrollbarSize,
        ref: scrollBodyRef,
        onScroll: onScroll
      });
      headerProps.colWidths = flattenColumns.map(function (_ref7, index) {
        var width = _ref7.width;
        var colWidth = index === columns.length - 1 ? width - scrollbarSize : width;

        if (typeof colWidth === 'number' && !Number.isNaN(colWidth)) {
          return colWidth;
        }

        (0, _warning.default)(false, 'When use `components.body` with render props. Each column should have a fixed value.');
        return 0;
      });
    } else {
      bodyContent = React.createElement("div", {
        style: _objectSpread(_objectSpread({}, scrollXStyle), scrollYStyle),
        onScroll: onScroll,
        ref: scrollBodyRef,
        className: (0, _classnames.default)("".concat(prefixCls, "-body"))
      }, React.createElement(TableComponent, {
        style: _objectSpread(_objectSpread({}, scrollTableStyle), {}, {
          tableLayout: mergedTableLayout
        })
      }, bodyColGroup, bodyTable, footerTable));
    }

    groupTableNode = React.createElement(React.Fragment, null, showHeader !== false && React.createElement("div", {
      style: {
        overflow: 'hidden'
      },
      onScroll: onScroll,
      ref: scrollHeaderRef,
      className: (0, _classnames.default)("".concat(prefixCls, "-header"))
    }, React.createElement(_FixedHeader.default, Object.assign({}, headerProps, columnContext, {
      direction: direction
    }))), bodyContent);
  } else {
    groupTableNode = React.createElement("div", {
      style: _objectSpread(_objectSpread({}, scrollXStyle), scrollYStyle),
      className: (0, _classnames.default)("".concat(prefixCls, "-content")),
      onScroll: onScroll,
      ref: scrollBodyRef
    }, React.createElement(TableComponent, {
      style: _objectSpread(_objectSpread({}, scrollTableStyle), {}, {
        tableLayout: mergedTableLayout
      })
    }, bodyColGroup, showHeader !== false && React.createElement(_Header.default, Object.assign({}, headerProps, columnContext)), bodyTable, footerTable));
  }

  var ariaProps = (0, _legacyUtil.getDataAndAriaProps)(props);
  var fullTable = React.createElement("div", Object.assign({
    className: (0, _classnames.default)(prefixCls, className, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-ping-left"), pingedLeft), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-ping-right"), pingedRight), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-layout-fixed"), tableLayout === 'fixed'), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-fixed-header"), fixHeader), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-fixed-column"), fixColumn), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-scroll-horizontal"), horizonScroll), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-has-fix-left"), flattenColumns[0] && flattenColumns[0].fixed), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-has-fix-right"), flattenColumns[flattenColumns.length - 1] && flattenColumns[flattenColumns.length - 1].fixed === 'right'), _classNames)),
    style: style,
    id: id,
    ref: fullTableRef
  }, ariaProps), React.createElement(MemoTableContent, {
    pingLeft: pingedLeft,
    pingRight: pingedRight,
    props: _objectSpread(_objectSpread({}, props), {}, {
      stickyOffsets: stickyOffsets,
      mergedExpandedKeys: mergedExpandedKeys
    })
  }, title && React.createElement(_Panel.default, {
    className: "".concat(prefixCls, "-title")
  }, title(mergedData)), React.createElement("div", {
    className: "".concat(prefixCls, "-container")
  }, groupTableNode), footer && React.createElement(_Panel.default, {
    className: "".concat(prefixCls, "-footer")
  }, footer(mergedData))));

  if (horizonScroll) {
    fullTable = React.createElement(_rcResizeObserver.default, {
      onResize: onFullTableResize
    }, fullTable);
  }

  var TableContextValue = React.useMemo(function () {
    return {
      prefixCls: prefixCls,
      getComponent: getComponent,
      scrollbarSize: scrollbarSize,
      direction: direction,
      fixedInfoList: flattenColumns.map(function (_, colIndex) {
        return (0, _fixUtil.getCellFixedInfo)(colIndex, colIndex, flattenColumns, stickyOffsets, direction);
      })
    };
  }, [prefixCls, getComponent, scrollbarSize, direction, flattenColumns, stickyOffsets, direction]);
  var BodyContextValue = React.useMemo(function () {
    return _objectSpread(_objectSpread({}, columnContext), {}, {
      tableLayout: mergedTableLayout,
      rowClassName: rowClassName,
      expandedRowClassName: expandedRowClassName,
      componentWidth: componentWidth,
      fixHeader: fixHeader,
      fixColumn: fixColumn,
      horizonScroll: horizonScroll,
      expandIcon: mergedExpandIcon,
      expandableType: expandableType,
      expandRowByClick: expandRowByClick,
      expandedRowRender: expandedRowRender,
      onTriggerExpand: onTriggerExpand,
      expandIconColumnIndex: expandIconColumnIndex,
      indentSize: indentSize
    });
  }, [columnContext, mergedTableLayout, rowClassName, expandedRowClassName, componentWidth, fixHeader, fixColumn, horizonScroll, mergedExpandIcon, expandableType, expandRowByClick, expandedRowRender, onTriggerExpand, expandIconColumnIndex, indentSize]);
  var ResizeContextValue = React.useMemo(function () {
    return {
      onColumnResize: onColumnResize
    };
  }, [onColumnResize]);
  return React.createElement(_TableContext.default.Provider, {
    value: TableContextValue
  }, React.createElement(_BodyContext.default.Provider, {
    value: BodyContextValue
  }, React.createElement(_ResizeContext.default.Provider, {
    value: ResizeContextValue
  }, fullTable)));
}

Table.Column = _Column.default;
Table.ColumnGroup = _ColumnGroup.default;
Table.Summary = _Footer.FooterComponents;
Table.defaultProps = {
  rowKey: 'key',
  prefixCls: 'rc-table',
  emptyText: function emptyText() {
    return 'No Data';
  }
};
var _default = Table;
exports.default = _default;

/***/ }),

/***/ "./node_modules/rc-table/lib/context/BodyContext.js":
/*!**********************************************************!*\
  !*** ./node_modules/rc-table/lib/context/BodyContext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var BodyContext = React.createContext(null);
var _default = BodyContext;
exports.default = _default;

/***/ }),

/***/ "./node_modules/rc-table/lib/context/ResizeContext.js":
/*!************************************************************!*\
  !*** ./node_modules/rc-table/lib/context/ResizeContext.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var ResizeContext = React.createContext(null);
var _default = ResizeContext;
exports.default = _default;

/***/ }),

/***/ "./node_modules/rc-table/lib/context/TableContext.js":
/*!***********************************************************!*\
  !*** ./node_modules/rc-table/lib/context/TableContext.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var TableContext = React.createContext(null);
var _default = TableContext;
exports.default = _default;

/***/ }),

/***/ "./node_modules/rc-table/lib/hooks/useColumns.js":
/*!*******************************************************!*\
  !*** ./node_modules/rc-table/lib/hooks/useColumns.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertChildrenToColumns = convertChildrenToColumns;
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _warning = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/warning */ "./node_modules/rc-util/lib/warning.js"));

var _toArray = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/Children/toArray */ "./node_modules/rc-util/lib/Children/toArray.js"));

var _legacyUtil = __webpack_require__(/*! ../utils/legacyUtil */ "./node_modules/rc-table/lib/utils/legacyUtil.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function convertChildrenToColumns(children) {
  return (0, _toArray.default)(children).filter(function (node) {
    return React.isValidElement(node);
  }).map(function (_ref) {
    var key = _ref.key,
        props = _ref.props;
    var nodeChildren = props.children,
        restProps = (0, _objectWithoutProperties2.default)(props, ["children"]);

    var column = _objectSpread({
      key: key
    }, restProps);

    if (nodeChildren) {
      column.children = convertChildrenToColumns(nodeChildren);
    }

    return column;
  });
}

function flatColumns(columns) {
  return columns.reduce(function (list, column) {
    var fixed = column.fixed; // Convert `fixed='true'` to `fixed='left'` instead

    var parsedFixed = fixed === true ? 'left' : fixed;
    var subColumns = column.children;

    if (subColumns && subColumns.length > 0) {
      return [].concat((0, _toConsumableArray2.default)(list), (0, _toConsumableArray2.default)(flatColumns(subColumns).map(function (subColum) {
        return _objectSpread({
          fixed: parsedFixed
        }, subColum);
      })));
    }

    return [].concat((0, _toConsumableArray2.default)(list), [_objectSpread(_objectSpread({}, column), {}, {
      fixed: parsedFixed
    })]);
  }, []);
}

function warningFixed(flattenColumns) {
  var allFixLeft = true;

  for (var i = 0; i < flattenColumns.length; i += 1) {
    var col = flattenColumns[i];

    if (allFixLeft && col.fixed !== 'left') {
      allFixLeft = false;
    } else if (!allFixLeft && col.fixed === 'left') {
      (0, _warning.default)(false, "Index ".concat(i - 1, " of `columns` missing `fixed='left'` prop."));
      break;
    }
  }

  var allFixRight = true;

  for (var _i = flattenColumns.length - 1; _i >= 0; _i -= 1) {
    var _col = flattenColumns[_i];

    if (allFixRight && _col.fixed !== 'right') {
      allFixRight = false;
    } else if (!allFixRight && _col.fixed === 'right') {
      (0, _warning.default)(false, "Index ".concat(_i + 1, " of `columns` missing `fixed='right'` prop."));
      break;
    }
  }
}

function revertForRtl(columns) {
  return columns.map(function (column) {
    var fixed = column.fixed,
        restProps = (0, _objectWithoutProperties2.default)(column, ["fixed"]); // Convert `fixed='left'` to `fixed='right'` instead

    var parsedFixed = fixed;

    if (fixed === 'left') {
      parsedFixed = 'right';
    } else if (fixed === 'right') {
      parsedFixed = 'left';
    }

    return _objectSpread({
      fixed: parsedFixed
    }, restProps);
  });
}
/**
 * Parse `columns` & `children` into `columns`.
 */


function useColumns(_ref2, transformColumns) {
  var prefixCls = _ref2.prefixCls,
      columns = _ref2.columns,
      children = _ref2.children,
      expandable = _ref2.expandable,
      expandedKeys = _ref2.expandedKeys,
      getRowKey = _ref2.getRowKey,
      onTriggerExpand = _ref2.onTriggerExpand,
      expandIcon = _ref2.expandIcon,
      rowExpandable = _ref2.rowExpandable,
      expandIconColumnIndex = _ref2.expandIconColumnIndex,
      direction = _ref2.direction,
      expandRowByClick = _ref2.expandRowByClick;
  var baseColumns = React.useMemo(function () {
    return columns || convertChildrenToColumns(children);
  }, [columns, children]); // Add expand column

  var withExpandColumns = React.useMemo(function () {
    if (expandable) {
      var _expandColumn;

      var expandColIndex = expandIconColumnIndex || 0;
      var prevColumn = baseColumns[expandColIndex];
      var expandColumn = (_expandColumn = {}, (0, _defineProperty2.default)(_expandColumn, _legacyUtil.INTERNAL_COL_DEFINE, {
        className: "".concat(prefixCls, "-expand-icon-col")
      }), (0, _defineProperty2.default)(_expandColumn, "title", ''), (0, _defineProperty2.default)(_expandColumn, "fixed", prevColumn ? prevColumn.fixed : null), (0, _defineProperty2.default)(_expandColumn, "className", "".concat(prefixCls, "-row-expand-icon-cell")), (0, _defineProperty2.default)(_expandColumn, "render", function render(_, record, index) {
        var rowKey = getRowKey(record, index);
        var expanded = expandedKeys.has(rowKey);
        var recordExpandable = rowExpandable ? rowExpandable(record) : true;
        var icon = expandIcon({
          prefixCls: prefixCls,
          expanded: expanded,
          expandable: recordExpandable,
          record: record,
          onExpand: onTriggerExpand
        });

        if (expandRowByClick) {
          return React.createElement("span", {
            onClick: function onClick(e) {
              return e.stopPropagation();
            }
          }, icon);
        }

        return icon;
      }), _expandColumn); // Insert expand column in the target position

      var cloneColumns = baseColumns.slice();

      if (expandColIndex >= 0) {
        cloneColumns.splice(expandColIndex, 0, expandColumn);
      }

      return cloneColumns;
    }

    return baseColumns;
  }, [expandable, baseColumns, getRowKey, expandedKeys, expandIcon, direction]);
  var mergedColumns = React.useMemo(function () {
    var finalColumns = withExpandColumns;

    if (transformColumns) {
      finalColumns = transformColumns(finalColumns);
    } // Always provides at least one column for table display


    if (!finalColumns.length) {
      finalColumns = [{
        render: function render() {
          return null;
        }
      }];
    }

    return finalColumns;
  }, [transformColumns, withExpandColumns, direction]);
  var flattenColumns = React.useMemo(function () {
    if (direction === 'rtl') {
      return revertForRtl(flatColumns(mergedColumns));
    }

    return flatColumns(mergedColumns);
  }, [mergedColumns, direction]); // Only check out of production since it's waste for each render

  if (true) {
    warningFixed(flattenColumns);
  }

  return [mergedColumns, flattenColumns];
}

var _default = useColumns;
exports.default = _default;

/***/ }),

/***/ "./node_modules/rc-table/lib/hooks/useFrame.js":
/*!*****************************************************!*\
  !*** ./node_modules/rc-table/lib/hooks/useFrame.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useFrameState = useFrameState;
exports.useTimeoutLock = useTimeoutLock;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _raf = _interopRequireDefault(__webpack_require__(/*! raf */ "./node_modules/raf/index.js"));

function useFrameState(defaultState) {
  var stateRef = (0, _react.useRef)(defaultState);

  var _useState = (0, _react.useState)({}),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      forceUpdate = _useState2[1];

  var timeoutRef = (0, _react.useRef)(null);
  var updateBatchRef = (0, _react.useRef)([]);

  function setFrameState(updater) {
    if (timeoutRef.current === null) {
      updateBatchRef.current = [];
      timeoutRef.current = (0, _raf.default)(function () {
        updateBatchRef.current.forEach(function (batchUpdater) {
          stateRef.current = batchUpdater(stateRef.current);
        });
        timeoutRef.current = null;
        forceUpdate({});
      });
    }

    updateBatchRef.current.push(updater);
  }

  (0, _react.useEffect)(function () {
    return function () {
      _raf.default.cancel(timeoutRef.current);
    };
  }, []);
  return [stateRef.current, setFrameState];
}
/** Lock frame, when frame pass reset the lock. */


function useTimeoutLock(defaultState) {
  var frameRef = (0, _react.useRef)(defaultState);
  var timeoutRef = (0, _react.useRef)(null);

  function cleanUp() {
    window.clearTimeout(timeoutRef.current);
  }

  function setState(newState) {
    frameRef.current = newState;
    cleanUp();
    timeoutRef.current = window.setTimeout(function () {
      frameRef.current = null;
      timeoutRef.current = null;
    }, 100);
  }

  function getState() {
    return frameRef.current;
  }

  (0, _react.useEffect)(function () {
    return cleanUp;
  }, []);
  return [setState, getState];
}

/***/ }),

/***/ "./node_modules/rc-table/lib/hooks/useStickyOffsets.js":
/*!*************************************************************!*\
  !*** ./node_modules/rc-table/lib/hooks/useStickyOffsets.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

/**
 * Get sticky column offset width
 */
function useStickyOffsets(colWidths, columCount, direction) {
  var stickyOffsets = (0, _react.useMemo)(function () {
    var leftOffsets = [];
    var rightOffsets = [];
    var left = 0;
    var right = 0;

    for (var start = 0; start < columCount; start += 1) {
      if (direction === 'rtl') {
        // Left offset
        rightOffsets[start] = right;
        right += colWidths[start] || 0; // Right offset

        var end = columCount - start - 1;
        leftOffsets[end] = left;
        left += colWidths[end] || 0;
      } else {
        // Left offset
        leftOffsets[start] = left;
        left += colWidths[start] || 0; // Right offset

        var _end = columCount - start - 1;

        rightOffsets[_end] = right;
        right += colWidths[_end] || 0;
      }
    }

    return {
      left: leftOffsets,
      right: rightOffsets
    };
  }, [colWidths, columCount, direction]);
  return stickyOffsets;
}

var _default = useStickyOffsets;
exports.default = _default;

/***/ }),

/***/ "./node_modules/rc-table/lib/sugar/Column.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-table/lib/sugar/Column.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* istanbul ignore next */

/**
 * This is a syntactic sugar for `columns` prop.
 * So HOC will not work on this.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Column(_) {
  return null;
}

var _default = Column;
exports.default = _default;

/***/ }),

/***/ "./node_modules/rc-table/lib/sugar/ColumnGroup.js":
/*!********************************************************!*\
  !*** ./node_modules/rc-table/lib/sugar/ColumnGroup.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* istanbul ignore next */

/**
 * This is a syntactic sugar for `columns` prop.
 * So HOC will not work on this.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ColumnGroup(_) {
  return null;
}

var _default = ColumnGroup;
exports.default = _default;

/***/ }),

/***/ "./node_modules/rc-table/lib/utils/expandUtil.js":
/*!*******************************************************!*\
  !*** ./node_modules/rc-table/lib/utils/expandUtil.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderExpandIcon = renderExpandIcon;
exports.findAllChildrenKeys = findAllChildrenKeys;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

function renderExpandIcon(_ref) {
  var _classNames;

  var prefixCls = _ref.prefixCls,
      record = _ref.record,
      onExpand = _ref.onExpand,
      expanded = _ref.expanded,
      expandable = _ref.expandable;
  var expandClassName = "".concat(prefixCls, "-row-expand-icon");

  if (!expandable) {
    return React.createElement("span", {
      className: (0, _classnames.default)(expandClassName, "".concat(prefixCls, "-row-spaced"))
    });
  }

  var onClick = function onClick(event) {
    onExpand(record, event);
    event.stopPropagation();
  };

  return React.createElement("span", {
    className: (0, _classnames.default)(expandClassName, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-row-expanded"), expanded), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-row-collapsed"), !expanded), _classNames)),
    onClick: onClick
  });
}

function findAllChildrenKeys(data, getRowKey, childrenColumnName) {
  var keys = [];

  function dig(list) {
    (list || []).forEach(function (item, index) {
      keys.push(getRowKey(item, index));
      dig(item[childrenColumnName]);
    });
  }

  dig(data);
  return keys;
}

/***/ }),

/***/ "./node_modules/rc-table/lib/utils/fixUtil.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-table/lib/utils/fixUtil.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCellFixedInfo = getCellFixedInfo;

function getCellFixedInfo(colStart, colEnd, columns, stickyOffsets, direction) {
  var startColumn = columns[colStart] || {};
  var endColumn = columns[colEnd] || {};
  var fixLeft;
  var fixRight;

  if (startColumn.fixed === 'left') {
    fixLeft = stickyOffsets.left[colStart];
  } else if (endColumn.fixed === 'right') {
    fixRight = stickyOffsets.right[colEnd];
  }

  var lastFixLeft = false;
  var firstFixRight = false;
  var lastFixRight = false;
  var firstFixLeft = false;
  var nextColumn = columns[colEnd + 1];
  var prevColumn = columns[colStart - 1];

  if (direction === 'rtl') {
    if (fixLeft !== undefined) {
      var prevFixLeft = prevColumn && prevColumn.fixed === 'left';
      firstFixLeft = !prevFixLeft;
    } else if (fixRight !== undefined) {
      var nextFixRight = nextColumn && nextColumn.fixed === 'right';
      lastFixRight = !nextFixRight;
    }
  } else if (fixLeft !== undefined) {
    var nextFixLeft = nextColumn && nextColumn.fixed === 'left';
    lastFixLeft = !nextFixLeft;
  } else if (fixRight !== undefined) {
    var prevFixRight = prevColumn && prevColumn.fixed === 'right';
    firstFixRight = !prevFixRight;
  }

  return {
    fixLeft: fixLeft,
    fixRight: fixRight,
    lastFixLeft: lastFixLeft,
    firstFixRight: firstFixRight,
    lastFixRight: lastFixRight,
    firstFixLeft: firstFixLeft
  };
}

/***/ }),

/***/ "./node_modules/rc-table/lib/utils/legacyUtil.js":
/*!*******************************************************!*\
  !*** ./node_modules/rc-table/lib/utils/legacyUtil.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getExpandableProps = getExpandableProps;
exports.getDataAndAriaProps = getDataAndAriaProps;
exports.INTERNAL_COL_DEFINE = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _warning = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/warning */ "./node_modules/rc-util/lib/warning.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var INTERNAL_COL_DEFINE = 'RC_TABLE_INTERNAL_COL_DEFINE';
exports.INTERNAL_COL_DEFINE = INTERNAL_COL_DEFINE;

function getExpandableProps(props) {
  var expandable = props.expandable,
      legacyExpandableConfig = (0, _objectWithoutProperties2.default)(props, ["expandable"]);

  if ('expandable' in props) {
    return _objectSpread(_objectSpread({}, legacyExpandableConfig), expandable);
  }

  if ( true && ['indentSize', 'expandedRowKeys', 'defaultExpandedRowKeys', 'defaultExpandAllRows', 'expandedRowRender', 'expandRowByClick', 'expandIcon', 'onExpand', 'onExpandedRowsChange', 'expandedRowClassName', 'expandIconColumnIndex'].some(function (prop) {
    return prop in props;
  })) {
    (0, _warning.default)(false, 'expanded related props have been moved into `expandable`.');
  }

  return legacyExpandableConfig;
}
/**
 * Returns only data- and aria- key/value pairs
 * @param {object} props
 */


function getDataAndAriaProps(props) {
  /* eslint-disable no-param-reassign */
  return Object.keys(props).reduce(function (memo, key) {
    if (key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-') {
      memo[key] = props[key];
    }

    return memo;
  }, {});
  /* eslint-enable */
}

/***/ }),

/***/ "./node_modules/rc-table/lib/utils/valueUtil.js":
/*!******************************************************!*\
  !*** ./node_modules/rc-table/lib/utils/valueUtil.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPathValue = getPathValue;
exports.getColumnsKey = getColumnsKey;
exports.mergeObject = mergeObject;
exports.validateValue = validateValue;

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var INTERNAL_KEY_PREFIX = 'RC_TABLE_KEY';

function toArray(arr) {
  if (arr === undefined || arr === null) {
    return [];
  }

  return Array.isArray(arr) ? arr : [arr];
}

function getPathValue(record, path) {
  // Skip if path is empty
  if (!path && typeof path !== 'number') {
    return record;
  }

  var pathList = toArray(path);
  var current = record;

  for (var i = 0; i < pathList.length; i += 1) {
    if (!current) {
      return null;
    }

    var prop = pathList[i];
    current = current[prop];
  }

  return current;
}

function getColumnsKey(columns) {
  var columnKeys = [];
  var keys = {};
  columns.forEach(function (column) {
    var _ref = column || {},
        key = _ref.key,
        dataIndex = _ref.dataIndex;

    var mergedKey = key || toArray(dataIndex).join('-') || INTERNAL_KEY_PREFIX;

    while (keys[mergedKey]) {
      mergedKey = "".concat(mergedKey, "_next");
    }

    keys[mergedKey] = true;
    columnKeys.push(mergedKey);
  });
  return columnKeys;
}

function mergeObject() {
  var merged = {};
  /* eslint-disable no-param-reassign */

  function fillProps(obj, clone) {
    if (clone) {
      Object.keys(clone).forEach(function (key) {
        var value = clone[key];

        if (value && (0, _typeof2.default)(value) === 'object') {
          obj[key] = obj[key] || {};
          fillProps(obj[key], value);
        } else {
          obj[key] = value;
        }
      });
    }
  }
  /* eslint-enable */


  for (var _len = arguments.length, objects = new Array(_len), _key = 0; _key < _len; _key++) {
    objects[_key] = arguments[_key];
  }

  objects.forEach(function (clone) {
    fillProps(merged, clone);
  });
  return merged;
}

function validateValue(val) {
  return val !== null && val !== undefined;
}

/***/ }),

/***/ "./node_modules/rc-tree/lib/Indent.js":
/*!********************************************!*\
  !*** ./node_modules/rc-tree/lib/Indent.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var Indent = function Indent(_ref) {
  var prefixCls = _ref.prefixCls,
      level = _ref.level,
      isStart = _ref.isStart,
      isEnd = _ref.isEnd;

  if (!level) {
    return null;
  }

  var baseClassName = "".concat(prefixCls, "-indent-unit");
  var list = [];

  for (var i = 0; i < level; i += 1) {
    var _classNames;

    list.push(React.createElement("span", {
      key: i,
      className: (0, _classnames.default)(baseClassName, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(baseClassName, "-start"), isStart[i + 1]), (0, _defineProperty2.default)(_classNames, "".concat(baseClassName, "-end"), isEnd[i + 1]), (0, _defineProperty2.default)(_classNames, "".concat(baseClassName, "-end-first-level"), !i && isEnd[0]), _classNames))
    }));
  }

  return React.createElement("span", {
    "aria-hidden": "true",
    className: "".concat(prefixCls, "-indent")
  }, list);
};

var _default = Indent;
exports.default = _default;

/***/ }),

/***/ "./node_modules/rc-tree/lib/TreeNode.js":
/*!**********************************************!*\
  !*** ./node_modules/rc-tree/lib/TreeNode.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.InternalTreeNode = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ "./node_modules/@babel/runtime/helpers/objectSpread2.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/@babel/runtime/helpers/createSuper.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _contextTypes = __webpack_require__(/*! ./contextTypes */ "./node_modules/rc-tree/lib/contextTypes.js");

var _util = __webpack_require__(/*! ./util */ "./node_modules/rc-tree/lib/util.js");

var _Indent = _interopRequireDefault(__webpack_require__(/*! ./Indent */ "./node_modules/rc-tree/lib/Indent.js"));

var _treeUtil = __webpack_require__(/*! ./utils/treeUtil */ "./node_modules/rc-tree/lib/utils/treeUtil.js");

// @ts-ignore
var ICON_OPEN = 'open';
var ICON_CLOSE = 'close';
var defaultTitle = '---';

var InternalTreeNode = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(InternalTreeNode, _React$Component);

  var _super = (0, _createSuper2.default)(InternalTreeNode);

  function InternalTreeNode() {
    var _this;

    (0, _classCallCheck2.default)(this, InternalTreeNode);
    _this = _super.apply(this, arguments);
    _this.state = {
      dragNodeHighlight: false
    };

    _this.onSelectorClick = function (e) {
      // Click trigger before select/check operation
      var onNodeClick = _this.props.context.onNodeClick;
      onNodeClick(e, (0, _treeUtil.convertNodePropsToEventData)(_this.props));

      if (_this.isSelectable()) {
        _this.onSelect(e);
      } else {
        _this.onCheck(e);
      }
    };

    _this.onSelectorDoubleClick = function (e) {
      var onNodeDoubleClick = _this.props.context.onNodeDoubleClick;
      onNodeDoubleClick(e, (0, _treeUtil.convertNodePropsToEventData)(_this.props));
    };

    _this.onSelect = function (e) {
      if (_this.isDisabled()) return;
      var onNodeSelect = _this.props.context.onNodeSelect;
      e.preventDefault();
      onNodeSelect(e, (0, _treeUtil.convertNodePropsToEventData)(_this.props));
    };

    _this.onCheck = function (e) {
      if (_this.isDisabled()) return;
      var _this$props = _this.props,
          disableCheckbox = _this$props.disableCheckbox,
          checked = _this$props.checked;
      var onNodeCheck = _this.props.context.onNodeCheck;
      if (!_this.isCheckable() || disableCheckbox) return;
      e.preventDefault();
      var targetChecked = !checked;
      onNodeCheck(e, (0, _treeUtil.convertNodePropsToEventData)(_this.props), targetChecked);
    };

    _this.onMouseEnter = function (e) {
      var onNodeMouseEnter = _this.props.context.onNodeMouseEnter;
      onNodeMouseEnter(e, (0, _treeUtil.convertNodePropsToEventData)(_this.props));
    };

    _this.onMouseLeave = function (e) {
      var onNodeMouseLeave = _this.props.context.onNodeMouseLeave;
      onNodeMouseLeave(e, (0, _treeUtil.convertNodePropsToEventData)(_this.props));
    };

    _this.onContextMenu = function (e) {
      var onNodeContextMenu = _this.props.context.onNodeContextMenu;
      onNodeContextMenu(e, (0, _treeUtil.convertNodePropsToEventData)(_this.props));
    };

    _this.onDragStart = function (e) {
      var onNodeDragStart = _this.props.context.onNodeDragStart;
      e.stopPropagation();

      _this.setState({
        dragNodeHighlight: true
      });

      onNodeDragStart(e, (0, _assertThisInitialized2.default)(_this));

      try {
        // ie throw error
        // firefox-need-it
        e.dataTransfer.setData('text/plain', '');
      } catch (error) {// empty
      }
    };

    _this.onDragEnter = function (e) {
      var onNodeDragEnter = _this.props.context.onNodeDragEnter;
      e.preventDefault();
      e.stopPropagation();
      onNodeDragEnter(e, (0, _assertThisInitialized2.default)(_this));
    };

    _this.onDragOver = function (e) {
      var onNodeDragOver = _this.props.context.onNodeDragOver;
      e.preventDefault();
      e.stopPropagation();
      onNodeDragOver(e, (0, _assertThisInitialized2.default)(_this));
    };

    _this.onDragLeave = function (e) {
      var onNodeDragLeave = _this.props.context.onNodeDragLeave;
      e.stopPropagation();
      onNodeDragLeave(e, (0, _assertThisInitialized2.default)(_this));
    };

    _this.onDragEnd = function (e) {
      var onNodeDragEnd = _this.props.context.onNodeDragEnd;
      e.stopPropagation();

      _this.setState({
        dragNodeHighlight: false
      });

      onNodeDragEnd(e, (0, _assertThisInitialized2.default)(_this));
    };

    _this.onDrop = function (e) {
      var onNodeDrop = _this.props.context.onNodeDrop;
      e.preventDefault();
      e.stopPropagation();

      _this.setState({
        dragNodeHighlight: false
      });

      onNodeDrop(e, (0, _assertThisInitialized2.default)(_this));
    }; // Disabled item still can be switch


    _this.onExpand = function (e) {
      var onNodeExpand = _this.props.context.onNodeExpand;
      onNodeExpand(e, (0, _treeUtil.convertNodePropsToEventData)(_this.props));
    }; // Drag usage


    _this.setSelectHandle = function (node) {
      _this.selectHandle = node;
    };

    _this.getNodeState = function () {
      var expanded = _this.props.expanded;

      if (_this.isLeaf()) {
        return null;
      }

      return expanded ? ICON_OPEN : ICON_CLOSE;
    };

    _this.hasChildren = function () {
      var eventKey = _this.props.eventKey;
      var keyEntities = _this.props.context.keyEntities;

      var _ref = keyEntities[eventKey] || {},
          children = _ref.children;

      return !!(children || []).length;
    };

    _this.isLeaf = function () {
      var _this$props2 = _this.props,
          isLeaf = _this$props2.isLeaf,
          loaded = _this$props2.loaded;
      var loadData = _this.props.context.loadData;

      var hasChildren = _this.hasChildren();

      if (isLeaf === false) {
        return false;
      }

      return isLeaf || !loadData && !hasChildren || loadData && loaded && !hasChildren;
    };

    _this.isDisabled = function () {
      var disabled = _this.props.disabled;
      var treeDisabled = _this.props.context.disabled;
      return !!(treeDisabled || disabled);
    };

    _this.isCheckable = function () {
      var checkable = _this.props.checkable;
      var treeCheckable = _this.props.context.checkable; // Return false if tree or treeNode is not checkable

      if (!treeCheckable || checkable === false) return false;
      return treeCheckable;
    }; // Load data to avoid default expanded tree without data


    _this.syncLoadData = function (props) {
      var expanded = props.expanded,
          loading = props.loading,
          loaded = props.loaded;
      var _this$props$context = _this.props.context,
          loadData = _this$props$context.loadData,
          onNodeLoad = _this$props$context.onNodeLoad;
      if (loading) return; // read from state to avoid loadData at same time

      if (loadData && expanded && !_this.isLeaf()) {
        // We needn't reload data when has children in sync logic
        // It's only needed in node expanded
        if (!_this.hasChildren() && !loaded) {
          onNodeLoad((0, _treeUtil.convertNodePropsToEventData)(_this.props));
        }
      }
    }; // Switcher


    _this.renderSwitcher = function () {
      var _this$props3 = _this.props,
          expanded = _this$props3.expanded,
          switcherIconFromProps = _this$props3.switcherIcon;
      var _this$props$context2 = _this.props.context,
          prefixCls = _this$props$context2.prefixCls,
          switcherIconFromCtx = _this$props$context2.switcherIcon;
      var switcherIcon = switcherIconFromProps || switcherIconFromCtx;

      if (_this.isLeaf()) {
        return React.createElement("span", {
          className: (0, _classnames.default)("".concat(prefixCls, "-switcher"), "".concat(prefixCls, "-switcher-noop"))
        }, typeof switcherIcon === 'function' ? switcherIcon((0, _objectSpread2.default)((0, _objectSpread2.default)({}, _this.props), {}, {
          isLeaf: true
        })) : switcherIcon);
      }

      var switcherCls = (0, _classnames.default)("".concat(prefixCls, "-switcher"), "".concat(prefixCls, "-switcher_").concat(expanded ? ICON_OPEN : ICON_CLOSE));
      return React.createElement("span", {
        onClick: _this.onExpand,
        className: switcherCls
      }, typeof switcherIcon === 'function' ? switcherIcon((0, _objectSpread2.default)((0, _objectSpread2.default)({}, _this.props), {}, {
        isLeaf: false
      })) : switcherIcon);
    }; // Checkbox


    _this.renderCheckbox = function () {
      var _this$props4 = _this.props,
          checked = _this$props4.checked,
          halfChecked = _this$props4.halfChecked,
          disableCheckbox = _this$props4.disableCheckbox;
      var prefixCls = _this.props.context.prefixCls;

      var disabled = _this.isDisabled();

      var checkable = _this.isCheckable();

      if (!checkable) return null; // [Legacy] Custom element should be separate with `checkable` in future

      var $custom = typeof checkable !== 'boolean' ? checkable : null;
      return React.createElement("span", {
        className: (0, _classnames.default)("".concat(prefixCls, "-checkbox"), checked && "".concat(prefixCls, "-checkbox-checked"), !checked && halfChecked && "".concat(prefixCls, "-checkbox-indeterminate"), (disabled || disableCheckbox) && "".concat(prefixCls, "-checkbox-disabled")),
        onClick: _this.onCheck
      }, $custom);
    };

    _this.renderIcon = function () {
      var loading = _this.props.loading;
      var prefixCls = _this.props.context.prefixCls;
      return React.createElement("span", {
        className: (0, _classnames.default)("".concat(prefixCls, "-iconEle"), "".concat(prefixCls, "-icon__").concat(_this.getNodeState() || 'docu'), loading && "".concat(prefixCls, "-icon_loading"))
      });
    }; // Icon + Title


    _this.renderSelector = function () {
      var dragNodeHighlight = _this.state.dragNodeHighlight;
      var _this$props5 = _this.props,
          title = _this$props5.title,
          selected = _this$props5.selected,
          icon = _this$props5.icon,
          loading = _this$props5.loading,
          data = _this$props5.data;
      var _this$props$context3 = _this.props.context,
          prefixCls = _this$props$context3.prefixCls,
          showIcon = _this$props$context3.showIcon,
          treeIcon = _this$props$context3.icon,
          draggable = _this$props$context3.draggable,
          loadData = _this$props$context3.loadData,
          titleRender = _this$props$context3.titleRender;

      var disabled = _this.isDisabled();

      var wrapClass = "".concat(prefixCls, "-node-content-wrapper"); // Icon - Still show loading icon when loading without showIcon

      var $icon;

      if (showIcon) {
        var currentIcon = icon || treeIcon;
        $icon = currentIcon ? React.createElement("span", {
          className: (0, _classnames.default)("".concat(prefixCls, "-iconEle"), "".concat(prefixCls, "-icon__customize"))
        }, typeof currentIcon === 'function' ? currentIcon(_this.props) : currentIcon) : _this.renderIcon();
      } else if (loadData && loading) {
        $icon = _this.renderIcon();
      } // Title


      var titleNode;

      if (typeof title === 'function') {
        titleNode = title(data);
      } else if (titleRender) {
        titleNode = titleRender(data);
      } else {
        titleNode = title;
      }

      var $title = React.createElement("span", {
        className: "".concat(prefixCls, "-title")
      }, titleNode);
      return React.createElement("span", {
        ref: _this.setSelectHandle,
        title: typeof title === 'string' ? title : '',
        className: (0, _classnames.default)("".concat(wrapClass), "".concat(wrapClass, "-").concat(_this.getNodeState() || 'normal'), !disabled && (selected || dragNodeHighlight) && "".concat(prefixCls, "-node-selected"), !disabled && draggable && 'draggable'),
        draggable: !disabled && draggable || undefined,
        "aria-grabbed": !disabled && draggable || undefined,
        onMouseEnter: _this.onMouseEnter,
        onMouseLeave: _this.onMouseLeave,
        onContextMenu: _this.onContextMenu,
        onClick: _this.onSelectorClick,
        onDoubleClick: _this.onSelectorDoubleClick,
        onDragStart: draggable ? _this.onDragStart : undefined
      }, $icon, $title);
    };

    return _this;
  } // Isomorphic needn't load data in server side


  (0, _createClass2.default)(InternalTreeNode, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.syncLoadData(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.syncLoadData(this.props);
    }
  }, {
    key: "isSelectable",
    value: function isSelectable() {
      var selectable = this.props.selectable;
      var treeSelectable = this.props.context.selectable; // Ignore when selectable is undefined or null

      if (typeof selectable === 'boolean') {
        return selectable;
      }

      return treeSelectable;
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props6 = this.props,
          eventKey = _this$props6.eventKey,
          className = _this$props6.className,
          style = _this$props6.style,
          dragOver = _this$props6.dragOver,
          dragOverGapTop = _this$props6.dragOverGapTop,
          dragOverGapBottom = _this$props6.dragOverGapBottom,
          isLeaf = _this$props6.isLeaf,
          isStart = _this$props6.isStart,
          isEnd = _this$props6.isEnd,
          expanded = _this$props6.expanded,
          selected = _this$props6.selected,
          checked = _this$props6.checked,
          halfChecked = _this$props6.halfChecked,
          loading = _this$props6.loading,
          domRef = _this$props6.domRef,
          active = _this$props6.active,
          onMouseMove = _this$props6.onMouseMove,
          otherProps = (0, _objectWithoutProperties2.default)(_this$props6, ["eventKey", "className", "style", "dragOver", "dragOverGapTop", "dragOverGapBottom", "isLeaf", "isStart", "isEnd", "expanded", "selected", "checked", "halfChecked", "loading", "domRef", "active", "onMouseMove"]);
      var _this$props$context4 = this.props.context,
          prefixCls = _this$props$context4.prefixCls,
          filterTreeNode = _this$props$context4.filterTreeNode,
          draggable = _this$props$context4.draggable,
          keyEntities = _this$props$context4.keyEntities;
      var disabled = this.isDisabled();
      var dataOrAriaAttributeProps = (0, _util.getDataAndAria)(otherProps);

      var _ref2 = keyEntities[eventKey] || {},
          level = _ref2.level;

      var isEndNode = isEnd[isEnd.length - 1];
      return React.createElement("div", Object.assign({
        ref: domRef,
        className: (0, _classnames.default)(className, "".concat(prefixCls, "-treenode"), (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-treenode-disabled"), disabled), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-treenode-switcher-").concat(expanded ? 'open' : 'close'), !isLeaf), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-treenode-checkbox-checked"), checked), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-treenode-checkbox-indeterminate"), halfChecked), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-treenode-selected"), selected), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-treenode-loading"), loading), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-treenode-active"), active), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-treenode-leaf-last"), isEndNode), (0, _defineProperty2.default)(_classNames, 'drag-over', !disabled && dragOver), (0, _defineProperty2.default)(_classNames, 'drag-over-gap-top', !disabled && dragOverGapTop), (0, _defineProperty2.default)(_classNames, 'drag-over-gap-bottom', !disabled && dragOverGapBottom), (0, _defineProperty2.default)(_classNames, 'filter-node', filterTreeNode && filterTreeNode((0, _treeUtil.convertNodePropsToEventData)(this.props))), _classNames)),
        style: style,
        onDragEnter: draggable ? this.onDragEnter : undefined,
        onDragOver: draggable ? this.onDragOver : undefined,
        onDragLeave: draggable ? this.onDragLeave : undefined,
        onDrop: draggable ? this.onDrop : undefined,
        onDragEnd: draggable ? this.onDragEnd : undefined,
        onMouseMove: onMouseMove
      }, dataOrAriaAttributeProps), React.createElement(_Indent.default, {
        prefixCls: prefixCls,
        level: level,
        isStart: isStart,
        isEnd: isEnd
      }), this.renderSwitcher(), this.renderCheckbox(), this.renderSelector());
    }
  }]);
  return InternalTreeNode;
}(React.Component);

exports.InternalTreeNode = InternalTreeNode;

var ContextTreeNode = function ContextTreeNode(props) {
  return React.createElement(_contextTypes.TreeContext.Consumer, null, function (context) {
    return React.createElement(InternalTreeNode, Object.assign({}, props, {
      context: context
    }));
  });
};

ContextTreeNode.displayName = 'TreeNode';
ContextTreeNode.defaultProps = {
  title: defaultTitle
};
ContextTreeNode.isTreeNode = 1;
var _default = ContextTreeNode;
exports.default = _default;

/***/ }),

/***/ "./node_modules/rc-tree/lib/contextTypes.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-tree/lib/contextTypes.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TreeContext = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

/**
 * Webpack has bug for import loop, which is not the same behavior as ES module.
 * When util.js imports the TreeNode for tree generate will cause treeContextTypes be empty.
 */
var TreeContext = React.createContext(null);
exports.TreeContext = TreeContext;

/***/ }),

/***/ "./node_modules/rc-tree/lib/util.js":
/*!******************************************!*\
  !*** ./node_modules/rc-tree/lib/util.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrDel = arrDel;
exports.arrAdd = arrAdd;
exports.posToArr = posToArr;
exports.getPosition = getPosition;
exports.isTreeNode = isTreeNode;
exports.getDragNodesKeys = getDragNodesKeys;
exports.calcDropPosition = calcDropPosition;
exports.calcSelectedKeys = calcSelectedKeys;
exports.convertDataToTree = convertDataToTree;
exports.parseCheckedKeys = parseCheckedKeys;
exports.conductExpandParent = conductExpandParent;
exports.getDataAndAria = getDataAndAria;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _warning = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/warning */ "./node_modules/rc-util/lib/warning.js"));

var _TreeNode = _interopRequireDefault(__webpack_require__(/*! ./TreeNode */ "./node_modules/rc-tree/lib/TreeNode.js"));

/**
 * Legacy code. Should avoid to use if you are new to import these code.
 */
var DRAG_SIDE_RANGE = 0.25;
var DRAG_MIN_GAP = 2;

function arrDel(list, value) {
  var clone = list.slice();
  var index = clone.indexOf(value);

  if (index >= 0) {
    clone.splice(index, 1);
  }

  return clone;
}

function arrAdd(list, value) {
  var clone = list.slice();

  if (clone.indexOf(value) === -1) {
    clone.push(value);
  }

  return clone;
}

function posToArr(pos) {
  return pos.split('-');
}

function getPosition(level, index) {
  return "".concat(level, "-").concat(index);
}

function isTreeNode(node) {
  return node && node.type && node.type.isTreeNode;
}

function getDragNodesKeys(dragNodeKey, keyEntities) {
  var dragNodesKeys = [dragNodeKey];
  var entity = keyEntities[dragNodeKey];

  function dig() {
    var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    list.forEach(function (_ref) {
      var key = _ref.key,
          children = _ref.children;
      dragNodesKeys.push(key);
      dig(children);
    });
  }

  dig(entity.children);
  return dragNodesKeys;
} // Only used when drag, not affect SSR.


function calcDropPosition(event, treeNode) {
  var clientY = event.clientY;

  var _treeNode$selectHandl = treeNode.selectHandle.getBoundingClientRect(),
      top = _treeNode$selectHandl.top,
      bottom = _treeNode$selectHandl.bottom,
      height = _treeNode$selectHandl.height;

  var des = Math.max(height * DRAG_SIDE_RANGE, DRAG_MIN_GAP);

  if (clientY <= top + des) {
    return -1;
  }

  if (clientY >= bottom - des) {
    return 1;
  }

  return 0;
}
/**
 * Return selectedKeys according with multiple prop
 * @param selectedKeys
 * @param props
 * @returns [string]
 */


function calcSelectedKeys(selectedKeys, props) {
  if (!selectedKeys) return undefined;
  var multiple = props.multiple;

  if (multiple) {
    return selectedKeys.slice();
  }

  if (selectedKeys.length) {
    return [selectedKeys[0]];
  }

  return selectedKeys;
}

var internalProcessProps = function internalProcessProps(props) {
  return props;
};

function convertDataToTree(treeData, processor) {
  if (!treeData) return [];

  var _ref2 = processor || {},
      _ref2$processProps = _ref2.processProps,
      processProps = _ref2$processProps === void 0 ? internalProcessProps : _ref2$processProps;

  var list = Array.isArray(treeData) ? treeData : [treeData];
  return list.map(function (_ref3) {
    var children = _ref3.children,
        props = (0, _objectWithoutProperties2.default)(_ref3, ["children"]);
    var childrenNodes = convertDataToTree(children, processor);
    return _react.default.createElement(_TreeNode.default, Object.assign({}, processProps(props)), childrenNodes);
  });
}
/**
 * Parse `checkedKeys` to { checkedKeys, halfCheckedKeys } style
 */


function parseCheckedKeys(keys) {
  if (!keys) {
    return null;
  } // Convert keys to object format


  var keyProps;

  if (Array.isArray(keys)) {
    // [Legacy] Follow the api doc
    keyProps = {
      checkedKeys: keys,
      halfCheckedKeys: undefined
    };
  } else if ((0, _typeof2.default)(keys) === 'object') {
    keyProps = {
      checkedKeys: keys.checked || undefined,
      halfCheckedKeys: keys.halfChecked || undefined
    };
  } else {
    (0, _warning.default)(false, '`checkedKeys` is not an array or an object');
    return null;
  }

  return keyProps;
}
/**
 * If user use `autoExpandParent` we should get the list of parent node
 * @param keyList
 * @param keyEntities
 */


function conductExpandParent(keyList, keyEntities) {
  var expandedKeys = new Set();

  function conductUp(key) {
    if (expandedKeys.has(key)) return;
    var entity = keyEntities[key];
    if (!entity) return;
    expandedKeys.add(key);
    var parent = entity.parent,
        node = entity.node;
    if (node.disabled) return;

    if (parent) {
      conductUp(parent.key);
    }
  }

  (keyList || []).forEach(function (key) {
    conductUp(key);
  });
  return (0, _toConsumableArray2.default)(expandedKeys);
}
/**
 * Returns only the data- and aria- key/value pairs
 */


function getDataAndAria(props) {
  var omitProps = {};
  Object.keys(props).forEach(function (key) {
    if (key.startsWith('data-') || key.startsWith('aria-')) {
      omitProps[key] = props[key];
    }
  });
  return omitProps;
}

/***/ }),

/***/ "./node_modules/rc-tree/lib/utils/conductUtil.js":
/*!*******************************************************!*\
  !*** ./node_modules/rc-tree/lib/utils/conductUtil.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isCheckDisabled = isCheckDisabled;
exports.conductCheck = conductCheck;

var _warning = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/warning */ "./node_modules/rc-util/lib/warning.js"));

function removeFromCheckedKeys(halfCheckedKeys, checkedKeys) {
  var filteredKeys = new Set();
  halfCheckedKeys.forEach(function (key) {
    if (!checkedKeys.has(key)) {
      filteredKeys.add(key);
    }
  });
  return filteredKeys;
}

function isCheckDisabled(node) {
  var _ref = node || {},
      disabled = _ref.disabled,
      disableCheckbox = _ref.disableCheckbox,
      checkable = _ref.checkable;

  return !!(disabled || disableCheckbox) || checkable === false;
} // Fill miss keys


function fillConductCheck(keys, levelEntities, maxLevel, syntheticGetCheckDisabled) {
  var checkedKeys = new Set(keys);
  var halfCheckedKeys = new Set(); // Add checked keys top to bottom

  for (var level = 0; level <= maxLevel; level += 1) {
    var entities = levelEntities.get(level) || new Set();
    entities.forEach(function (entity) {
      var key = entity.key,
          node = entity.node,
          _entity$children = entity.children,
          children = _entity$children === void 0 ? [] : _entity$children;

      if (checkedKeys.has(key) && !syntheticGetCheckDisabled(node)) {
        children.filter(function (childEntity) {
          return !syntheticGetCheckDisabled(childEntity.node);
        }).forEach(function (childEntity) {
          checkedKeys.add(childEntity.key);
        });
      }
    });
  } // Add checked keys from bottom to top


  var visitedKeys = new Set();

  for (var _level = maxLevel; _level >= 0; _level -= 1) {
    var _entities = levelEntities.get(_level) || new Set();

    _entities.forEach(function (entity) {
      var parent = entity.parent,
          node = entity.node; // Skip if no need to check

      if (syntheticGetCheckDisabled(node) || !entity.parent || visitedKeys.has(entity.parent.key)) {
        return;
      } // Skip if parent is disabled


      if (syntheticGetCheckDisabled(entity.parent.node)) {
        visitedKeys.add(parent.key);
        return;
      }

      var allChecked = true;
      var partialChecked = false;
      (parent.children || []).filter(function (childEntity) {
        return !syntheticGetCheckDisabled(childEntity.node);
      }).forEach(function (_ref2) {
        var key = _ref2.key;
        var checked = checkedKeys.has(key);

        if (allChecked && !checked) {
          allChecked = false;
        }

        if (!partialChecked && (checked || halfCheckedKeys.has(key))) {
          partialChecked = true;
        }
      });

      if (allChecked) {
        checkedKeys.add(parent.key);
      }

      if (partialChecked) {
        halfCheckedKeys.add(parent.key);
      }

      visitedKeys.add(parent.key);
    });
  }

  return {
    checkedKeys: Array.from(checkedKeys),
    halfCheckedKeys: Array.from(removeFromCheckedKeys(halfCheckedKeys, checkedKeys))
  };
} // Remove useless key


function cleanConductCheck(keys, halfKeys, levelEntities, maxLevel, syntheticGetCheckDisabled) {
  var checkedKeys = new Set(keys);
  var halfCheckedKeys = new Set(halfKeys); // Remove checked keys from top to bottom

  for (var level = 0; level <= maxLevel; level += 1) {
    var entities = levelEntities.get(level) || new Set();
    entities.forEach(function (entity) {
      var key = entity.key,
          node = entity.node,
          _entity$children2 = entity.children,
          children = _entity$children2 === void 0 ? [] : _entity$children2;

      if (!checkedKeys.has(key) && !halfCheckedKeys.has(key) && !syntheticGetCheckDisabled(node)) {
        children.filter(function (childEntity) {
          return !syntheticGetCheckDisabled(childEntity.node);
        }).forEach(function (childEntity) {
          checkedKeys.delete(childEntity.key);
        });
      }
    });
  } // Remove checked keys form bottom to top


  halfCheckedKeys = new Set();
  var visitedKeys = new Set();

  for (var _level2 = maxLevel; _level2 >= 0; _level2 -= 1) {
    var _entities2 = levelEntities.get(_level2) || new Set();

    _entities2.forEach(function (entity) {
      var parent = entity.parent,
          node = entity.node; // Skip if no need to check

      if (syntheticGetCheckDisabled(node) || !entity.parent || visitedKeys.has(entity.parent.key)) {
        return;
      } // Skip if parent is disabled


      if (syntheticGetCheckDisabled(entity.parent.node)) {
        visitedKeys.add(parent.key);
        return;
      }

      var allChecked = true;
      var partialChecked = false;
      (parent.children || []).filter(function (childEntity) {
        return !syntheticGetCheckDisabled(childEntity.node);
      }).forEach(function (_ref3) {
        var key = _ref3.key;
        var checked = checkedKeys.has(key);

        if (allChecked && !checked) {
          allChecked = false;
        }

        if (!partialChecked && (checked || halfCheckedKeys.has(key))) {
          partialChecked = true;
        }
      });

      if (!allChecked) {
        checkedKeys.delete(parent.key);
      }

      if (partialChecked) {
        halfCheckedKeys.add(parent.key);
      }

      visitedKeys.add(parent.key);
    });
  }

  return {
    checkedKeys: Array.from(checkedKeys),
    halfCheckedKeys: Array.from(removeFromCheckedKeys(halfCheckedKeys, checkedKeys))
  };
}
/**
 * Conduct with keys.
 * @param keyList current key list
 * @param keyEntities key - dataEntity map
 * @param mode `fill` to fill missing key, `clean` to remove useless key
 */


function conductCheck(keyList, checked, keyEntities, getCheckDisabled) {
  var warningMissKeys = [];
  var syntheticGetCheckDisabled;

  if (getCheckDisabled) {
    syntheticGetCheckDisabled = getCheckDisabled;
  } else {
    syntheticGetCheckDisabled = isCheckDisabled;
  } // We only handle exist keys


  var keys = new Set(keyList.filter(function (key) {
    var hasEntity = !!keyEntities[key];

    if (!hasEntity) {
      warningMissKeys.push(key);
    }

    return hasEntity;
  }));
  var levelEntities = new Map();
  var maxLevel = 0; // Convert entities by level for calculation

  Object.keys(keyEntities).forEach(function (key) {
    var entity = keyEntities[key];
    var level = entity.level;
    var levelSet = levelEntities.get(level);

    if (!levelSet) {
      levelSet = new Set();
      levelEntities.set(level, levelSet);
    }

    levelSet.add(entity);
    maxLevel = Math.max(maxLevel, level);
  });
  (0, _warning.default)(!warningMissKeys.length, "Tree missing follow keys: ".concat(warningMissKeys.slice(0, 100).map(function (key) {
    return "'".concat(key, "'");
  }).join(', ')));
  var result;

  if (checked === true) {
    result = fillConductCheck(keys, levelEntities, maxLevel, syntheticGetCheckDisabled);
  } else {
    result = cleanConductCheck(keys, checked.halfCheckedKeys, levelEntities, maxLevel, syntheticGetCheckDisabled);
  }

  return result;
}

/***/ }),

/***/ "./node_modules/rc-tree/lib/utils/treeUtil.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-tree/lib/utils/treeUtil.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getKey = getKey;
exports.warningWithoutKey = warningWithoutKey;
exports.convertTreeToData = convertTreeToData;
exports.flattenTreeData = flattenTreeData;
exports.traverseDataNodes = traverseDataNodes;
exports.convertDataToEntities = convertDataToEntities;
exports.getTreeNodeProps = getTreeNodeProps;
exports.convertNodePropsToEventData = convertNodePropsToEventData;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ "./node_modules/@babel/runtime/helpers/objectSpread2.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _toArray = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/Children/toArray */ "./node_modules/rc-util/lib/Children/toArray.js"));

var _warning = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/warning */ "./node_modules/rc-util/lib/warning.js"));

var _util = __webpack_require__(/*! ../util */ "./node_modules/rc-tree/lib/util.js");

function getKey(key, pos) {
  if (key !== null && key !== undefined) {
    return key;
  }

  return pos;
}
/**
 * Warning if TreeNode do not provides key
 */


function warningWithoutKey() {
  var treeData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var keys = new Map();

  function dig(list) {
    var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    (list || []).forEach(function (treeNode) {
      var key = treeNode.key,
          children = treeNode.children;
      (0, _warning.default)(key !== null && key !== undefined, "Tree node must have a certain key: [".concat(path).concat(key, "]"));
      var recordKey = String(key);
      (0, _warning.default)(!keys.has(recordKey) || key === null || key === undefined, "Same 'key' exist in the Tree: ".concat(recordKey));
      keys.set(recordKey, true);
      dig(children, "".concat(path).concat(recordKey, " > "));
    });
  }

  dig(treeData);
}
/**
 * Convert `children` of Tree into `treeData` structure.
 */


function convertTreeToData(rootNodes) {
  function dig(node) {
    var treeNodes = (0, _toArray.default)(node);
    return treeNodes.map(function (treeNode) {
      // Filter invalidate node
      if (!(0, _util.isTreeNode)(treeNode)) {
        (0, _warning.default)(!treeNode, 'Tree/TreeNode can only accept TreeNode as children.');
        return null;
      }

      var key = treeNode.key;
      var _treeNode$props = treeNode.props,
          children = _treeNode$props.children,
          rest = (0, _objectWithoutProperties2.default)(_treeNode$props, ["children"]);
      var dataNode = (0, _objectSpread2.default)({
        key: key
      }, rest);
      var parsedChildren = dig(children);

      if (parsedChildren.length) {
        dataNode.children = parsedChildren;
      }

      return dataNode;
    }).filter(function (dataNode) {
      return dataNode;
    });
  }

  return dig(rootNodes);
}
/**
 * Flat nest tree data into flatten list. This is used for virtual list render.
 * @param treeNodeList Origin data node list
 * @param expandedKeys
 * need expanded keys, provides `true` means all expanded (used in `rc-tree-select`).
 */


function flattenTreeData() {
  var treeNodeList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var expandedKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var expandedKeySet = new Set(expandedKeys === true ? [] : expandedKeys);
  var flattenList = [];

  function dig(list) {
    var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return list.map(function (treeNode, index) {
      var pos = (0, _util.getPosition)(parent ? parent.pos : '0', index);
      var mergedKey = getKey(treeNode.key, pos); // Add FlattenDataNode into list

      var flattenNode = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, treeNode), {}, {
        parent: parent,
        pos: pos,
        children: null,
        data: treeNode,
        isStart: [].concat((0, _toConsumableArray2.default)(parent ? parent.isStart : []), [index === 0]),
        isEnd: [].concat((0, _toConsumableArray2.default)(parent ? parent.isEnd : []), [index === list.length - 1])
      });
      flattenList.push(flattenNode); // Loop treeNode children

      if (expandedKeys === true || expandedKeySet.has(mergedKey)) {
        flattenNode.children = dig(treeNode.children || [], flattenNode);
      } else {
        flattenNode.children = [];
      }

      return flattenNode;
    });
  }

  dig(treeNodeList);
  return flattenList;
}
/**
 * Traverse all the data by `treeData`.
 * Please not use it out of the `rc-tree` since we may refactor this code.
 */


function traverseDataNodes(dataNodes, callback, externalGetKey) {
  var syntheticGetKey;

  if (externalGetKey) {
    if (typeof externalGetKey === 'string') {
      syntheticGetKey = function syntheticGetKey(node) {
        return node[externalGetKey];
      };
    } else if (typeof externalGetKey === 'function') {
      syntheticGetKey = function syntheticGetKey(node) {
        return externalGetKey(node);
      };
    }
  } else {
    syntheticGetKey = function syntheticGetKey(node, pos) {
      return getKey(node.key, pos);
    };
  }

  function processNode(node, index, parent) {
    var children = node ? node.children : dataNodes;
    var pos = node ? (0, _util.getPosition)(parent.pos, index) : '0'; // Process node if is not root

    if (node) {
      var key = syntheticGetKey(node, pos);
      var data = {
        node: node,
        index: index,
        pos: pos,
        key: key,
        parentPos: parent.node ? parent.pos : null,
        level: parent.level + 1
      };
      callback(data);
    } // Process children node


    if (children) {
      children.forEach(function (subNode, subIndex) {
        processNode(subNode, subIndex, {
          node: node,
          pos: pos,
          level: parent ? parent.level + 1 : -1
        });
      });
    }
  }

  processNode(null);
}
/**
 * Convert `treeData` into entity records.
 */


function convertDataToEntities(dataNodes) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      initWrapper = _ref.initWrapper,
      processEntity = _ref.processEntity,
      onProcessFinished = _ref.onProcessFinished;

  var externalGetKey = arguments.length > 2 ? arguments[2] : undefined;
  var posEntities = {};
  var keyEntities = {};
  var wrapper = {
    posEntities: posEntities,
    keyEntities: keyEntities
  };

  if (initWrapper) {
    wrapper = initWrapper(wrapper) || wrapper;
  }

  traverseDataNodes(dataNodes, function (item) {
    var node = item.node,
        index = item.index,
        pos = item.pos,
        key = item.key,
        parentPos = item.parentPos,
        level = item.level;
    var entity = {
      node: node,
      index: index,
      key: key,
      pos: pos,
      level: level
    };
    var mergedKey = getKey(key, pos);
    posEntities[pos] = entity;
    keyEntities[mergedKey] = entity; // Fill children

    entity.parent = posEntities[parentPos];

    if (entity.parent) {
      entity.parent.children = entity.parent.children || [];
      entity.parent.children.push(entity);
    }

    if (processEntity) {
      processEntity(entity, wrapper);
    }
  }, externalGetKey);

  if (onProcessFinished) {
    onProcessFinished(wrapper);
  }

  return wrapper;
}
/**
 * Get TreeNode props with Tree props.
 */


function getTreeNodeProps(key, _ref2) {
  var expandedKeys = _ref2.expandedKeys,
      selectedKeys = _ref2.selectedKeys,
      loadedKeys = _ref2.loadedKeys,
      loadingKeys = _ref2.loadingKeys,
      checkedKeys = _ref2.checkedKeys,
      halfCheckedKeys = _ref2.halfCheckedKeys,
      dragOverNodeKey = _ref2.dragOverNodeKey,
      dropPosition = _ref2.dropPosition,
      keyEntities = _ref2.keyEntities;
  var entity = keyEntities[key];
  var treeNodeProps = {
    eventKey: key,
    expanded: expandedKeys.indexOf(key) !== -1,
    selected: selectedKeys.indexOf(key) !== -1,
    loaded: loadedKeys.indexOf(key) !== -1,
    loading: loadingKeys.indexOf(key) !== -1,
    checked: checkedKeys.indexOf(key) !== -1,
    halfChecked: halfCheckedKeys.indexOf(key) !== -1,
    pos: String(entity ? entity.pos : ''),
    // [Legacy] Drag props
    dragOver: dragOverNodeKey === key && dropPosition === 0,
    dragOverGapTop: dragOverNodeKey === key && dropPosition === -1,
    dragOverGapBottom: dragOverNodeKey === key && dropPosition === 1
  };
  return treeNodeProps;
}

function convertNodePropsToEventData(props) {
  var data = props.data,
      expanded = props.expanded,
      selected = props.selected,
      checked = props.checked,
      loaded = props.loaded,
      loading = props.loading,
      halfChecked = props.halfChecked,
      dragOver = props.dragOver,
      dragOverGapTop = props.dragOverGapTop,
      dragOverGapBottom = props.dragOverGapBottom,
      pos = props.pos,
      active = props.active;
  var eventData = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, data), {}, {
    expanded: expanded,
    selected: selected,
    checked: checked,
    loaded: loaded,
    loading: loading,
    halfChecked: halfChecked,
    dragOver: dragOver,
    dragOverGapTop: dragOverGapTop,
    dragOverGapBottom: dragOverGapBottom,
    pos: pos,
    active: active
  });

  if (!('props' in eventData)) {
    Object.defineProperty(eventData, 'props', {
      get: function get() {
        (0, _warning.default)(false, 'Second param return from event is node data instead of TreeNode instance. Please read value directly instead of reading from `props`.');
        return props;
      }
    });
  }

  return eventData;
}

/***/ }),

/***/ "./node_modules/rc-util/lib/ref.js":
/*!*****************************************!*\
  !*** ./node_modules/rc-util/lib/ref.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fillRef = fillRef;
exports.composeRef = composeRef;
exports.supportRef = supportRef;

var _reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function fillRef(ref, node) {
  if (typeof ref === 'function') {
    ref(node);
  } else if (_typeof(ref) === 'object' && ref && 'current' in ref) {
    ref.current = node;
  }
}
/**
 * Merge refs into one ref function to support ref passing.
 */


function composeRef() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }

  return function (node) {
    refs.forEach(function (ref) {
      fillRef(ref, node);
    });
  };
}

function supportRef(nodeOrComponent) {
  var _type$prototype, _nodeOrComponent$prot;

  var type = (0, _reactIs.isMemo)(nodeOrComponent) ? nodeOrComponent.type.type : nodeOrComponent.type; // Function component node

  if (typeof type === 'function' && !((_type$prototype = type.prototype) === null || _type$prototype === void 0 ? void 0 : _type$prototype.render)) {
    return false;
  } // Class component


  if (typeof nodeOrComponent === 'function' && !((_nodeOrComponent$prot = nodeOrComponent.prototype) === null || _nodeOrComponent$prot === void 0 ? void 0 : _nodeOrComponent$prot.render)) {
    return false;
  }

  return true;
}
/* eslint-enable */

/***/ })

}]);