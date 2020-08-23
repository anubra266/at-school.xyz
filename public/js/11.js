(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/MenuOutlined.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ant-design/icons-svg/lib/asn/MenuOutlined.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This icon file is generated automatically.
Object.defineProperty(exports, "__esModule", { value: true });
var MenuOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" } }] }, "name": "menu", "theme": "outlined" };
exports.default = MenuOutlined;


/***/ }),

/***/ "./node_modules/@ant-design/icons/MenuOutlined.js":
/*!********************************************************!*\
  !*** ./node_modules/@ant-design/icons/MenuOutlined.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  var _MenuOutlined = _interopRequireDefault(__webpack_require__(/*! ./lib/icons/MenuOutlined */ "./node_modules/@ant-design/icons/lib/icons/MenuOutlined.js"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _default = _MenuOutlined;
  exports.default = _default;
  module.exports = _default;

/***/ }),

/***/ "./node_modules/@ant-design/icons/lib/icons/MenuOutlined.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ant-design/icons/lib/icons/MenuOutlined.js ***!
  \******************************************************************/
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

var _MenuOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons-svg/lib/asn/MenuOutlined */ "./node_modules/@ant-design/icons-svg/lib/asn/MenuOutlined.js"));

var _AntdIcon = _interopRequireDefault(__webpack_require__(/*! ../components/AntdIcon */ "./node_modules/@ant-design/icons/lib/components/AntdIcon.js"));

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var MenuOutlined = function MenuOutlined(props, ref) {
  return React.createElement(_AntdIcon.default, Object.assign({}, props, {
    ref: ref,
    icon: _MenuOutlined.default
  }));
};

MenuOutlined.displayName = 'MenuOutlined';

var _default = React.forwardRef(MenuOutlined);

exports.default = _default;

/***/ }),

/***/ "./node_modules/antd/lib/_util/getRenderPropValue.js":
/*!***********************************************************!*\
  !*** ./node_modules/antd/lib/_util/getRenderPropValue.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRenderPropValue = void 0;

var getRenderPropValue = function getRenderPropValue(propValue) {
  if (!propValue) {
    return null;
  }

  var isRenderFunction = typeof propValue === 'function';

  if (isRenderFunction) {
    return propValue();
  }

  return propValue;
};

exports.getRenderPropValue = getRenderPropValue;

/***/ }),

/***/ "./node_modules/antd/lib/_util/ref.js":
/*!********************************************!*\
  !*** ./node_modules/antd/lib/_util/ref.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fillRef = fillRef;
exports.composeRef = composeRef;

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

function fillRef(ref, node) {
  if (typeof ref === 'function') {
    ref(node);
  } else if ((0, _typeof2["default"])(ref) === 'object' && ref && 'current' in ref) {
    ref.current = node;
  }
}

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

/***/ }),

/***/ "./node_modules/antd/lib/_util/transButton.js":
/*!****************************************************!*\
  !*** ./node_modules/antd/lib/_util/transButton.js ***!
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

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/@babel/runtime/helpers/createSuper.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _KeyCode = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/KeyCode */ "./node_modules/rc-util/lib/KeyCode.js"));

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
/**
 * Wrap of sub component which need use as Button capacity (like Icon component).
 * This helps accessibility reader to tread as a interactive button to operation.
 */


var inlineStyle = {
  border: 0,
  background: 'transparent',
  padding: 0,
  lineHeight: 'inherit',
  display: 'inline-block'
};

var TransButton = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(TransButton, _React$Component);

  var _super = (0, _createSuper2["default"])(TransButton);

  function TransButton() {
    var _this;

    (0, _classCallCheck2["default"])(this, TransButton);
    _this = _super.apply(this, arguments);

    _this.onKeyDown = function (event) {
      var keyCode = event.keyCode;

      if (keyCode === _KeyCode["default"].ENTER) {
        event.preventDefault();
      }
    };

    _this.onKeyUp = function (event) {
      var keyCode = event.keyCode;
      var onClick = _this.props.onClick;

      if (keyCode === _KeyCode["default"].ENTER && onClick) {
        onClick();
      }
    };

    _this.setRef = function (btn) {
      _this.div = btn;
    };

    return _this;
  }

  (0, _createClass2["default"])(TransButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var autoFocus = this.props.autoFocus;

      if (autoFocus) {
        this.focus();
      }
    }
  }, {
    key: "focus",
    value: function focus() {
      if (this.div) {
        this.div.focus();
      }
    }
  }, {
    key: "blur",
    value: function blur() {
      if (this.div) {
        this.div.blur();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _a = this.props,
          style = _a.style,
          noStyle = _a.noStyle,
          disabled = _a.disabled,
          restProps = __rest(_a, ["style", "noStyle", "disabled"]);

      var mergedStyle = {};

      if (!noStyle) {
        mergedStyle = (0, _extends2["default"])({}, inlineStyle);
      }

      if (disabled) {
        mergedStyle.pointerEvents = 'none';
      }

      mergedStyle = (0, _extends2["default"])((0, _extends2["default"])({}, mergedStyle), style);
      return /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({
        role: "button",
        tabIndex: 0,
        ref: this.setRef
      }, restProps, {
        onKeyDown: this.onKeyDown,
        onKeyUp: this.onKeyUp,
        style: mergedStyle
      }));
    }
  }]);
  return TransButton;
}(React.Component);

var _default = TransButton;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/avatar/avatar.js":
/*!************************************************!*\
  !*** ./node_modules/antd/lib/avatar/avatar.js ***!
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

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _devWarning = _interopRequireDefault(__webpack_require__(/*! ../_util/devWarning */ "./node_modules/antd/lib/_util/devWarning.js"));

var _ref = __webpack_require__(/*! ../_util/ref */ "./node_modules/antd/lib/_util/ref.js");

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

var InternalAvatar = function InternalAvatar(props, ref) {
  var _classNames, _classNames2;

  var _React$useState = React.useState(1),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      scale = _React$useState2[0],
      setScale = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
      mounted = _React$useState4[0],
      setMounted = _React$useState4[1];

  var _React$useState5 = React.useState(true),
      _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
      isImgExist = _React$useState6[0],
      setIsImgExist = _React$useState6[1];

  var avatarNodeRef = React.useRef();
  var avatarChildrenRef = React.useRef();
  var avatarNodeMergeRef = (0, _ref.composeRef)(ref, avatarNodeRef);
  var lastChildrenWidth;
  var lastNodeWidth;

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;

  var setScaleParam = function setScaleParam() {
    if (!avatarChildrenRef.current || !avatarNodeRef.current) {
      return;
    }

    var childrenWidth = avatarChildrenRef.current.offsetWidth; // offsetWidth avoid affecting be transform scale

    var nodeWidth = avatarNodeRef.current.offsetWidth;
    var _props$gap = props.gap,
        gap = _props$gap === void 0 ? 4 : _props$gap; // denominator is 0 is no meaning

    if (childrenWidth !== 0 && nodeWidth !== 0 && (lastChildrenWidth !== childrenWidth || lastNodeWidth !== nodeWidth)) {
      lastChildrenWidth = childrenWidth;
      lastNodeWidth = nodeWidth;
    }

    if (gap * 2 < nodeWidth) {
      setScale(nodeWidth - gap * 2 < childrenWidth ? (nodeWidth - gap * 2) / childrenWidth : 1);
    }
  };

  React.useEffect(function () {
    setMounted(true);
  }, []);
  React.useEffect(function () {
    setIsImgExist(true);
    setScale(1);
  }, [props.src]);
  React.useEffect(function () {
    setScaleParam();
  }, [props.children, props.gap, props.size]);
  React.useEffect(function () {
    if (props.children) {
      setScaleParam();
    }
  }, [isImgExist]);

  var handleImgLoadError = function handleImgLoadError() {
    var onError = props.onError;
    var errorFlag = onError ? onError() : undefined;

    if (errorFlag !== false) {
      setIsImgExist(false);
    }
  };

  var customizePrefixCls = props.prefixCls,
      shape = props.shape,
      size = props.size,
      src = props.src,
      srcSet = props.srcSet,
      icon = props.icon,
      className = props.className,
      alt = props.alt,
      draggable = props.draggable,
      children = props.children,
      others = __rest(props, ["prefixCls", "shape", "size", "src", "srcSet", "icon", "className", "alt", "draggable", "children"]);

  (0, _devWarning["default"])(!(typeof icon === 'string' && icon.length > 2), 'Avatar', "`icon` is using ReactNode instead of string naming in v4. Please check `".concat(icon, "` at https://ant.design/components/icon"));
  var prefixCls = getPrefixCls('avatar', customizePrefixCls);
  var sizeCls = (0, _classnames["default"])((_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-lg"), size === 'large'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-sm"), size === 'small'), _classNames));
  var classString = (0, _classnames["default"])(prefixCls, className, sizeCls, (_classNames2 = {}, (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-").concat(shape), shape), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-image"), src && isImgExist), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-icon"), icon), _classNames2));
  var sizeStyle = typeof size === 'number' ? {
    width: size,
    height: size,
    lineHeight: "".concat(size, "px"),
    fontSize: icon ? size / 2 : 18
  } : {};
  var childrenToRender;

  if (src && isImgExist) {
    childrenToRender = /*#__PURE__*/React.createElement("img", {
      src: src,
      draggable: draggable,
      srcSet: srcSet,
      onError: handleImgLoadError,
      alt: alt
    });
  } else if (icon) {
    childrenToRender = icon;
  } else if (mounted || scale !== 1) {
    var transformString = "scale(".concat(scale, ") translateX(-50%)");
    var childrenStyle = {
      msTransform: transformString,
      WebkitTransform: transformString,
      transform: transformString
    };
    var sizeChildrenStyle = typeof size === 'number' ? {
      lineHeight: "".concat(size, "px")
    } : {};
    childrenToRender = /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-string"),
      ref: function ref(node) {
        avatarChildrenRef.current = node;
      },
      style: (0, _extends2["default"])((0, _extends2["default"])({}, sizeChildrenStyle), childrenStyle)
    }, children);
  } else {
    childrenToRender = /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-string"),
      style: {
        opacity: 0
      },
      ref: function ref(node) {
        avatarChildrenRef.current = node;
      }
    }, children);
  } // The event is triggered twice from bubbling up the DOM tree.
  // see https://codesandbox.io/s/kind-snow-9lidz


  delete others.onError;
  delete others.gap;
  return /*#__PURE__*/React.createElement("span", (0, _extends2["default"])({}, others, {
    style: (0, _extends2["default"])((0, _extends2["default"])({}, sizeStyle), others.style),
    className: classString,
    ref: avatarNodeMergeRef
  }), childrenToRender);
};

var Avatar = /*#__PURE__*/React.forwardRef(InternalAvatar);
Avatar.displayName = 'Avatar';
Avatar.defaultProps = {
  shape: 'circle',
  size: 'default'
};
var _default = Avatar;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/avatar/group.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/avatar/group.js ***!
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

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _toArray = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/Children/toArray */ "./node_modules/rc-util/lib/Children/toArray.js"));

var _reactNode = __webpack_require__(/*! ../_util/reactNode */ "./node_modules/antd/lib/_util/reactNode.js");

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _avatar = _interopRequireDefault(__webpack_require__(/*! ./avatar */ "./node_modules/antd/lib/avatar/avatar.js"));

var _popover = _interopRequireDefault(__webpack_require__(/*! ../popover */ "./node_modules/antd/lib/popover/index.js"));

var Group = function Group(props) {
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var customizePrefixCls = props.prefixCls,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      maxCount = props.maxCount,
      maxStyle = props.maxStyle;
  var prefixCls = getPrefixCls('avatar-group', customizePrefixCls);
  var cls = (0, _classnames["default"])(prefixCls, (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'), className);
  var children = props.children,
      _props$maxPopoverPlac = props.maxPopoverPlacement,
      maxPopoverPlacement = _props$maxPopoverPlac === void 0 ? 'top' : _props$maxPopoverPlac;
  var childrenWithProps = (0, _toArray["default"])(children).map(function (child, index) {
    return (0, _reactNode.cloneElement)(child, {
      key: "avatar-key-".concat(index)
    });
  });
  var numOfChildren = childrenWithProps.length;

  if (maxCount && maxCount < numOfChildren) {
    var childrenShow = childrenWithProps.slice(0, maxCount);
    var childrenHidden = childrenWithProps.slice(maxCount, numOfChildren);
    childrenShow.push( /*#__PURE__*/React.createElement(_popover["default"], {
      key: "avatar-popover-key",
      content: childrenHidden,
      trigger: "hover",
      placement: maxPopoverPlacement,
      overlayClassName: "".concat(prefixCls, "-popover")
    }, /*#__PURE__*/React.createElement(_avatar["default"], {
      style: maxStyle
    }, "+".concat(numOfChildren - maxCount))));
    return /*#__PURE__*/React.createElement("div", {
      className: cls,
      style: props.style
    }, childrenShow);
  }

  return /*#__PURE__*/React.createElement("div", {
    className: cls,
    style: props.style
  }, children);
};

var _default = Group;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/avatar/index.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/avatar/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Group", {
  enumerable: true,
  get: function get() {
    return _group["default"];
  }
});
exports["default"] = void 0;

var _avatar = _interopRequireDefault(__webpack_require__(/*! ./avatar */ "./node_modules/antd/lib/avatar/avatar.js"));

var _group = _interopRequireDefault(__webpack_require__(/*! ./group */ "./node_modules/antd/lib/avatar/group.js"));

var Avatar = _avatar["default"];
Avatar.Group = _group["default"];
var _default = Avatar;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/breadcrumb/Breadcrumb.js":
/*!********************************************************!*\
  !*** ./node_modules/antd/lib/breadcrumb/Breadcrumb.js ***!
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

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _toArray = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/Children/toArray */ "./node_modules/rc-util/lib/Children/toArray.js"));

var _BreadcrumbItem = _interopRequireDefault(__webpack_require__(/*! ./BreadcrumbItem */ "./node_modules/antd/lib/breadcrumb/BreadcrumbItem.js"));

var _BreadcrumbSeparator = _interopRequireDefault(__webpack_require__(/*! ./BreadcrumbSeparator */ "./node_modules/antd/lib/breadcrumb/BreadcrumbSeparator.js"));

var _menu = _interopRequireDefault(__webpack_require__(/*! ../menu */ "./node_modules/antd/lib/menu/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _devWarning = _interopRequireDefault(__webpack_require__(/*! ../_util/devWarning */ "./node_modules/antd/lib/_util/devWarning.js"));

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

function getBreadcrumbName(route, params) {
  if (!route.breadcrumbName) {
    return null;
  }

  var paramsKeys = Object.keys(params).join('|');
  var name = route.breadcrumbName.replace(new RegExp(":(".concat(paramsKeys, ")"), 'g'), function (replacement, key) {
    return params[key] || replacement;
  });
  return name;
}

function defaultItemRender(route, params, routes, paths) {
  var isLastItem = routes.indexOf(route) === routes.length - 1;
  var name = getBreadcrumbName(route, params);
  return isLastItem ? /*#__PURE__*/React.createElement("span", null, name) : /*#__PURE__*/React.createElement("a", {
    href: "#/".concat(paths.join('/'))
  }, name);
}

var getPath = function getPath(path, params) {
  path = (path || '').replace(/^\//, '');
  Object.keys(params).forEach(function (key) {
    path = path.replace(":".concat(key), params[key]);
  });
  return path;
};

var addChildPath = function addChildPath(paths) {
  var childPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var params = arguments.length > 2 ? arguments[2] : undefined;
  var originalPaths = (0, _toConsumableArray2["default"])(paths);
  var path = getPath(childPath, params);

  if (path) {
    originalPaths.push(path);
  }

  return originalPaths;
};

var Breadcrumb = function Breadcrumb(_a) {
  var customizePrefixCls = _a.prefixCls,
      _a$separator = _a.separator,
      separator = _a$separator === void 0 ? '/' : _a$separator,
      style = _a.style,
      className = _a.className,
      routes = _a.routes,
      children = _a.children,
      _a$itemRender = _a.itemRender,
      itemRender = _a$itemRender === void 0 ? defaultItemRender : _a$itemRender,
      _a$params = _a.params,
      params = _a$params === void 0 ? {} : _a$params,
      restProps = __rest(_a, ["prefixCls", "separator", "style", "className", "routes", "children", "itemRender", "params"]);

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var crumbs;
  var prefixCls = getPrefixCls('breadcrumb', customizePrefixCls);

  if (routes && routes.length > 0) {
    // generated by route
    var paths = [];
    crumbs = routes.map(function (route) {
      var path = getPath(route.path, params);

      if (path) {
        paths.push(path);
      } // generated overlay by route.children


      var overlay;

      if (route.children && route.children.length) {
        overlay = /*#__PURE__*/React.createElement(_menu["default"], null, route.children.map(function (child) {
          return /*#__PURE__*/React.createElement(_menu["default"].Item, {
            key: child.path || child.breadcrumbName
          }, itemRender(child, params, routes, addChildPath(paths, child.path, params)));
        }));
      }

      return /*#__PURE__*/React.createElement(_BreadcrumbItem["default"], {
        overlay: overlay,
        separator: separator,
        key: path || route.breadcrumbName
      }, itemRender(route, params, routes, paths));
    });
  } else if (children) {
    crumbs = (0, _toArray["default"])(children).map(function (element, index) {
      if (!element) {
        return element;
      }

      (0, _devWarning["default"])(element.type && (element.type.__ANT_BREADCRUMB_ITEM === true || element.type.__ANT_BREADCRUMB_SEPARATOR === true), 'Breadcrumb', "Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children");
      return (0, _reactNode.cloneElement)(element, {
        separator: separator,
        key: index
      });
    });
  }

  var breadcrumbClassName = (0, _classnames["default"])(className, prefixCls, (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'));
  return /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({
    className: breadcrumbClassName,
    style: style
  }, restProps), crumbs);
};

Breadcrumb.Item = _BreadcrumbItem["default"];
Breadcrumb.Separator = _BreadcrumbSeparator["default"];
var _default = Breadcrumb;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/breadcrumb/BreadcrumbItem.js":
/*!************************************************************!*\
  !*** ./node_modules/antd/lib/breadcrumb/BreadcrumbItem.js ***!
  \************************************************************/
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

var _DownOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/DownOutlined */ "./node_modules/@ant-design/icons/DownOutlined.js"));

var _dropdown = _interopRequireDefault(__webpack_require__(/*! ../dropdown/dropdown */ "./node_modules/antd/lib/dropdown/dropdown.js"));

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

var BreadcrumbItem = function BreadcrumbItem(_a) {
  var customizePrefixCls = _a.prefixCls,
      _a$separator = _a.separator,
      separator = _a$separator === void 0 ? '/' : _a$separator,
      children = _a.children,
      overlay = _a.overlay,
      dropdownProps = _a.dropdownProps,
      restProps = __rest(_a, ["prefixCls", "separator", "children", "overlay", "dropdownProps"]);

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;

  var prefixCls = getPrefixCls('breadcrumb', customizePrefixCls);
  /**
   * if overlay is have
   * Wrap a DropDown
   */

  var renderBreadcrumbNode = function renderBreadcrumbNode(breadcrumbItem) {
    if (overlay) {
      return /*#__PURE__*/React.createElement(_dropdown["default"], (0, _extends2["default"])({
        overlay: overlay,
        placement: "bottomCenter"
      }, dropdownProps), /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-overlay-link")
      }, breadcrumbItem, /*#__PURE__*/React.createElement(_DownOutlined["default"], null)));
    }

    return breadcrumbItem;
  };

  var link;

  if ('href' in restProps) {
    link = /*#__PURE__*/React.createElement("a", (0, _extends2["default"])({
      className: "".concat(prefixCls, "-link")
    }, restProps), children);
  } else {
    link = /*#__PURE__*/React.createElement("span", (0, _extends2["default"])({
      className: "".concat(prefixCls, "-link")
    }, restProps), children);
  } // wrap to dropDown


  link = renderBreadcrumbNode(link);

  if (children) {
    return /*#__PURE__*/React.createElement("span", null, link, separator && separator !== '' && /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-separator")
    }, separator));
  }

  return null;
};

BreadcrumbItem.__ANT_BREADCRUMB_ITEM = true;
var _default = BreadcrumbItem;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/breadcrumb/BreadcrumbSeparator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/antd/lib/breadcrumb/BreadcrumbSeparator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var BreadcrumbSeparator = function BreadcrumbSeparator(_ref) {
  var children = _ref.children;

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;

  var prefixCls = getPrefixCls('breadcrumb');
  return /*#__PURE__*/React.createElement("span", {
    className: "".concat(prefixCls, "-separator")
  }, children || '/');
};

BreadcrumbSeparator.__ANT_BREADCRUMB_SEPARATOR = true;
var _default = BreadcrumbSeparator;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/breadcrumb/index.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/breadcrumb/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Breadcrumb = _interopRequireDefault(__webpack_require__(/*! ./Breadcrumb */ "./node_modules/antd/lib/breadcrumb/Breadcrumb.js"));

var _default = _Breadcrumb["default"];
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/drawer/index.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/drawer/index.js ***!
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

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/@babel/runtime/helpers/createSuper.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _rcDrawer = _interopRequireDefault(__webpack_require__(/*! rc-drawer */ "./node_modules/rc-drawer/es/index.js"));

var _getScrollBarSize = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/getScrollBarSize */ "./node_modules/rc-util/lib/getScrollBarSize.js"));

var _CloseOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CloseOutlined */ "./node_modules/@ant-design/icons/CloseOutlined.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _omit = _interopRequireDefault(__webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js"));

var _context = __webpack_require__(/*! ../config-provider/context */ "./node_modules/antd/lib/config-provider/context.js");

var _type = __webpack_require__(/*! ../_util/type */ "./node_modules/antd/lib/_util/type.js");

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

var DrawerContext = /*#__PURE__*/React.createContext(null);
var PlacementTypes = (0, _type.tuple)('top', 'right', 'bottom', 'left');
var defaultPushState = {
  distance: 180
};

var Drawer = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Drawer, _React$Component);

  var _super = (0, _createSuper2["default"])(Drawer);

  function Drawer() {
    var _this;

    (0, _classCallCheck2["default"])(this, Drawer);
    _this = _super.apply(this, arguments);
    _this.state = {
      push: false
    };

    _this.push = function () {
      if (_this.props.push) {
        _this.setState({
          push: true
        });
      }
    };

    _this.pull = function () {
      if (_this.props.push) {
        _this.setState({
          push: false
        });
      }
    };

    _this.onDestroyTransitionEnd = function () {
      var isDestroyOnClose = _this.getDestroyOnClose();

      if (!isDestroyOnClose) {
        return;
      }

      if (!_this.props.visible) {
        _this.destroyClose = true;

        _this.forceUpdate();
      }
    };

    _this.getDestroyOnClose = function () {
      return _this.props.destroyOnClose && !_this.props.visible;
    };

    _this.getPushDistance = function () {
      var push = _this.props.push;
      var distance;

      if (typeof push === 'boolean') {
        distance = push ? defaultPushState.distance : 0;
      } else {
        distance = push.distance;
      }

      return parseFloat(String(distance || 0));
    }; // get drawer push width or height


    _this.getPushTransform = function (placement) {
      var distance = _this.getPushDistance();

      if (placement === 'left' || placement === 'right') {
        return "translateX(".concat(placement === 'left' ? distance : -distance, "px)");
      }

      if (placement === 'top' || placement === 'bottom') {
        return "translateY(".concat(placement === 'top' ? distance : -distance, "px)");
      }
    };

    _this.getRcDrawerStyle = function () {
      var _this$props = _this.props,
          zIndex = _this$props.zIndex,
          placement = _this$props.placement,
          mask = _this$props.mask,
          style = _this$props.style;
      var push = _this.state.push; // 当无 mask 时，将 width 应用到外层容器上
      // 解决 https://github.com/ant-design/ant-design/issues/12401 的问题

      var offsetStyle = mask ? {} : _this.getOffsetStyle();
      return (0, _extends2["default"])((0, _extends2["default"])({
        zIndex: zIndex,
        transform: push ? _this.getPushTransform(placement) : undefined
      }, offsetStyle), style);
    }; // render drawer body dom


    _this.renderBody = function () {
      var _this$props2 = _this.props,
          bodyStyle = _this$props2.bodyStyle,
          drawerStyle = _this$props2.drawerStyle,
          prefixCls = _this$props2.prefixCls,
          visible = _this$props2.visible;

      if (_this.destroyClose && !visible) {
        return null;
      }

      _this.destroyClose = false;
      var containerStyle = {};

      var isDestroyOnClose = _this.getDestroyOnClose();

      if (isDestroyOnClose) {
        // Increase the opacity transition, delete children after closing.
        containerStyle.opacity = 0;
        containerStyle.transition = 'opacity .3s';
      }

      return /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-wrapper-body"),
        style: (0, _extends2["default"])((0, _extends2["default"])({}, containerStyle), drawerStyle),
        onTransitionEnd: _this.onDestroyTransitionEnd
      }, _this.renderHeader(), /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-body"),
        style: bodyStyle
      }, _this.props.children), _this.renderFooter());
    }; // render Provider for Multi-level drawer


    _this.renderProvider = function (value) {
      _this.parentDrawer = value;
      return /*#__PURE__*/React.createElement(_context.ConfigConsumer, null, function (_ref) {
        var getPopupContainer = _ref.getPopupContainer,
            getPrefixCls = _ref.getPrefixCls;

        var _a = _this.props,
            customizePrefixCls = _a.prefixCls,
            placement = _a.placement,
            className = _a.className,
            mask = _a.mask,
            direction = _a.direction,
            visible = _a.visible,
            rest = __rest(_a, ["prefixCls", "placement", "className", "mask", "direction", "visible"]);

        var prefixCls = getPrefixCls('select', customizePrefixCls);
        var drawerClassName = (0, _classnames["default"])(className, (0, _defineProperty2["default"])({
          'no-mask': !mask
        }, "".concat(prefixCls, "-rtl"), direction === 'rtl'));
        var offsetStyle = mask ? _this.getOffsetStyle() : {};
        return /*#__PURE__*/React.createElement(DrawerContext.Provider, {
          value: (0, _assertThisInitialized2["default"])(_this)
        }, /*#__PURE__*/React.createElement(_rcDrawer["default"], (0, _extends2["default"])({
          handler: false
        }, (0, _omit["default"])(rest, ['zIndex', 'style', 'closable', 'closeIcon', 'destroyOnClose', 'drawerStyle', 'headerStyle', 'bodyStyle', 'footerStyle', 'footer', 'locale', 'title', 'push', 'visible', 'getPopupContainer', 'rootPrefixCls', 'getPrefixCls', 'renderEmpty', 'csp', 'pageHeader', 'autoInsertSpaceInButton', 'width', 'height', 'dropdownMatchSelectWidth', 'getTargetContainer']), {
          getContainer: // 有可能为 false，所以不能直接判断
          rest.getContainer === undefined && getPopupContainer ? function () {
            return getPopupContainer(document.body);
          } : rest.getContainer
        }, offsetStyle, {
          prefixCls: prefixCls,
          open: visible,
          showMask: mask,
          placement: placement,
          style: _this.getRcDrawerStyle(),
          className: drawerClassName
        }), _this.renderBody()));
      });
    };

    return _this;
  }

  (0, _createClass2["default"])(Drawer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // fix: delete drawer in child and re-render, no push started.
      // <Drawer>{show && <Drawer />}</Drawer>
      var visible = this.props.visible;

      if (visible && this.parentDrawer) {
        this.parentDrawer.push();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(preProps) {
      var visible = this.props.visible;

      if (preProps.visible !== visible && this.parentDrawer) {
        if (visible) {
          this.parentDrawer.push();
        } else {
          this.parentDrawer.pull();
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // unmount drawer in child, clear push.
      if (this.parentDrawer) {
        this.parentDrawer.pull();
        this.parentDrawer = null;
      }
    }
  }, {
    key: "getOffsetStyle",
    value: function getOffsetStyle() {
      var _this$props3 = this.props,
          placement = _this$props3.placement,
          width = _this$props3.width,
          height = _this$props3.height,
          visible = _this$props3.visible,
          mask = _this$props3.mask; // https://github.com/ant-design/ant-design/issues/24287

      if (!visible && !mask) {
        return {};
      }

      var offsetStyle = {};

      if (placement === 'left' || placement === 'right') {
        offsetStyle.width = width;
      } else {
        offsetStyle.height = height;
      }

      return offsetStyle;
    }
  }, {
    key: "renderHeader",
    value: function renderHeader() {
      var _this$props4 = this.props,
          title = _this$props4.title,
          prefixCls = _this$props4.prefixCls,
          closable = _this$props4.closable,
          headerStyle = _this$props4.headerStyle;

      if (!title && !closable) {
        return null;
      }

      var headerClassName = title ? "".concat(prefixCls, "-header") : "".concat(prefixCls, "-header-no-title");
      return /*#__PURE__*/React.createElement("div", {
        className: headerClassName,
        style: headerStyle
      }, title && /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-title")
      }, title), closable && this.renderCloseIcon());
    }
  }, {
    key: "renderFooter",
    value: function renderFooter() {
      var _this$props5 = this.props,
          footer = _this$props5.footer,
          footerStyle = _this$props5.footerStyle,
          prefixCls = _this$props5.prefixCls;

      if (!footer) {
        return null;
      }

      var footerClassName = "".concat(prefixCls, "-footer");
      return /*#__PURE__*/React.createElement("div", {
        className: footerClassName,
        style: footerStyle
      }, footer);
    }
  }, {
    key: "renderCloseIcon",
    value: function renderCloseIcon() {
      var _this$props6 = this.props,
          closable = _this$props6.closable,
          _this$props6$closeIco = _this$props6.closeIcon,
          closeIcon = _this$props6$closeIco === void 0 ? /*#__PURE__*/React.createElement(_CloseOutlined["default"], null) : _this$props6$closeIco,
          prefixCls = _this$props6.prefixCls,
          onClose = _this$props6.onClose;
      return closable &&
      /*#__PURE__*/
      // eslint-disable-next-line react/button-has-type
      React.createElement("button", {
        onClick: onClose,
        "aria-label": "Close",
        className: "".concat(prefixCls, "-close"),
        style: {
          '--scroll-bar': "".concat((0, _getScrollBarSize["default"])(), "px")
        }
      }, closeIcon);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(DrawerContext.Consumer, null, this.renderProvider);
    }
  }]);
  return Drawer;
}(React.Component);

Drawer.defaultProps = {
  width: 256,
  height: 256,
  closable: true,
  placement: 'right',
  maskClosable: true,
  mask: true,
  level: null,
  keyboard: true,
  push: defaultPushState
};

var _default = (0, _context.withConfigConsumer)({
  prefixCls: 'drawer'
})(Drawer);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/dropdown/dropdown-button.js":
/*!***********************************************************!*\
  !*** ./node_modules/antd/lib/dropdown/dropdown-button.js ***!
  \***********************************************************/
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

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _EllipsisOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/EllipsisOutlined */ "./node_modules/@ant-design/icons/EllipsisOutlined.js"));

var _button = _interopRequireDefault(__webpack_require__(/*! ../button */ "./node_modules/antd/lib/button/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _dropdown = _interopRequireDefault(__webpack_require__(/*! ./dropdown */ "./node_modules/antd/lib/dropdown/dropdown.js"));

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

var ButtonGroup = _button["default"].Group;

var DropdownButton = function DropdownButton(props) {
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getContextPopupContainer = _React$useContext.getPopupContainer,
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var customizePrefixCls = props.prefixCls,
      type = props.type,
      disabled = props.disabled,
      onClick = props.onClick,
      htmlType = props.htmlType,
      children = props.children,
      className = props.className,
      overlay = props.overlay,
      trigger = props.trigger,
      align = props.align,
      visible = props.visible,
      onVisibleChange = props.onVisibleChange,
      placement = props.placement,
      getPopupContainer = props.getPopupContainer,
      href = props.href,
      _props$icon = props.icon,
      icon = _props$icon === void 0 ? /*#__PURE__*/React.createElement(_EllipsisOutlined["default"], null) : _props$icon,
      title = props.title,
      buttonsRender = props.buttonsRender,
      restProps = __rest(props, ["prefixCls", "type", "disabled", "onClick", "htmlType", "children", "className", "overlay", "trigger", "align", "visible", "onVisibleChange", "placement", "getPopupContainer", "href", "icon", "title", "buttonsRender"]);

  var prefixCls = getPrefixCls('dropdown-button', customizePrefixCls);
  var dropdownProps = {
    align: align,
    overlay: overlay,
    disabled: disabled,
    trigger: disabled ? [] : trigger,
    onVisibleChange: onVisibleChange,
    getPopupContainer: getPopupContainer || getContextPopupContainer
  };

  if ('visible' in props) {
    dropdownProps.visible = visible;
  }

  if ('placement' in props) {
    dropdownProps.placement = placement;
  } else {
    dropdownProps.placement = direction === 'rtl' ? 'bottomLeft' : 'bottomRight';
  }

  var leftButton = /*#__PURE__*/React.createElement(_button["default"], {
    type: type,
    disabled: disabled,
    onClick: onClick,
    htmlType: htmlType,
    href: href,
    title: title
  }, children);
  var rightButton = /*#__PURE__*/React.createElement(_button["default"], {
    type: type,
    icon: icon
  });

  var _buttonsRender = buttonsRender([leftButton, rightButton]),
      _buttonsRender2 = (0, _slicedToArray2["default"])(_buttonsRender, 2),
      leftButtonToRender = _buttonsRender2[0],
      rightButtonToRender = _buttonsRender2[1];

  return /*#__PURE__*/React.createElement(ButtonGroup, (0, _extends2["default"])({}, restProps, {
    className: (0, _classnames["default"])(prefixCls, className)
  }), leftButtonToRender, /*#__PURE__*/React.createElement(_dropdown["default"], dropdownProps, rightButtonToRender));
};

DropdownButton.__ANT_BUTTON = true;
DropdownButton.defaultProps = {
  type: 'default',
  buttonsRender: function buttonsRender(buttons) {
    return buttons;
  }
};
var _default = DropdownButton;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/dropdown/dropdown.js":
/*!****************************************************!*\
  !*** ./node_modules/antd/lib/dropdown/dropdown.js ***!
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

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _rcDropdown = _interopRequireDefault(__webpack_require__(/*! rc-dropdown */ "./node_modules/rc-dropdown/es/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _RightOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/RightOutlined */ "./node_modules/@ant-design/icons/RightOutlined.js"));

var _dropdownButton = _interopRequireDefault(__webpack_require__(/*! ./dropdown-button */ "./node_modules/antd/lib/dropdown/dropdown-button.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _devWarning = _interopRequireDefault(__webpack_require__(/*! ../_util/devWarning */ "./node_modules/antd/lib/_util/devWarning.js"));

var _type = __webpack_require__(/*! ../_util/type */ "./node_modules/antd/lib/_util/type.js");

var _reactNode = __webpack_require__(/*! ../_util/reactNode */ "./node_modules/antd/lib/_util/reactNode.js");

var Placements = (0, _type.tuple)('topLeft', 'topCenter', 'topRight', 'bottomLeft', 'bottomCenter', 'bottomRight');

var Dropdown = function Dropdown(props) {
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getContextPopupContainer = _React$useContext.getPopupContainer,
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var getTransitionName = function getTransitionName() {
    var _props$placement = props.placement,
        placement = _props$placement === void 0 ? '' : _props$placement,
        transitionName = props.transitionName;

    if (transitionName !== undefined) {
      return transitionName;
    }

    if (placement.indexOf('top') >= 0) {
      return 'slide-down';
    }

    return 'slide-up';
  };

  var renderOverlay = function renderOverlay(prefixCls) {
    // rc-dropdown already can process the function of overlay, but we have check logic here.
    // So we need render the element to check and pass back to rc-dropdown.
    var overlay = props.overlay;
    var overlayNode;

    if (typeof overlay === 'function') {
      overlayNode = overlay();
    } else {
      overlayNode = overlay;
    }

    overlayNode = React.Children.only(typeof overlayNode === 'string' ? /*#__PURE__*/React.createElement("span", null, overlayNode) : overlayNode);
    var overlayProps = overlayNode.props; // Warning if use other mode

    (0, _devWarning["default"])(!overlayProps.mode || overlayProps.mode === 'vertical', 'Dropdown', "mode=\"".concat(overlayProps.mode, "\" is not supported for Dropdown's Menu.")); // menu cannot be selectable in dropdown defaultly
    // menu should be focusable in dropdown defaultly

    var _overlayProps$selecta = overlayProps.selectable,
        selectable = _overlayProps$selecta === void 0 ? false : _overlayProps$selecta,
        _overlayProps$focusab = overlayProps.focusable,
        focusable = _overlayProps$focusab === void 0 ? true : _overlayProps$focusab;
    var expandIcon = /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-menu-submenu-arrow")
    }, /*#__PURE__*/React.createElement(_RightOutlined["default"], {
      className: "".concat(prefixCls, "-menu-submenu-arrow-icon")
    }));
    var fixedModeOverlay = typeof overlayNode.type === 'string' ? overlayNode : (0, _reactNode.cloneElement)(overlayNode, {
      mode: 'vertical',
      selectable: selectable,
      focusable: focusable,
      expandIcon: expandIcon
    });
    return fixedModeOverlay;
  };

  var getPlacement = function getPlacement() {
    var placement = props.placement;

    if (placement !== undefined) {
      return placement;
    }

    return direction === 'rtl' ? 'bottomRight' : 'bottomLeft';
  };

  var arrow = props.arrow,
      customizePrefixCls = props.prefixCls,
      children = props.children,
      trigger = props.trigger,
      disabled = props.disabled,
      getPopupContainer = props.getPopupContainer,
      overlayClassName = props.overlayClassName;
  var prefixCls = getPrefixCls('dropdown', customizePrefixCls);
  var child = React.Children.only(children);
  var dropdownTrigger = (0, _reactNode.cloneElement)(child, {
    className: (0, _classnames["default"])(child.props.className, "".concat(prefixCls, "-trigger"), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-rtl"), direction === 'rtl')),
    disabled: disabled
  });
  var overlayClassNameCustomized = (0, _classnames["default"])(overlayClassName, (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'));
  var triggerActions = disabled ? [] : trigger;
  var alignPoint;

  if (triggerActions && triggerActions.indexOf('contextMenu') !== -1) {
    alignPoint = true;
  }

  return /*#__PURE__*/React.createElement(_rcDropdown["default"], (0, _extends2["default"])({
    arrow: arrow,
    alignPoint: alignPoint
  }, props, {
    overlayClassName: overlayClassNameCustomized,
    prefixCls: prefixCls,
    getPopupContainer: getPopupContainer || getContextPopupContainer,
    transitionName: getTransitionName(),
    trigger: triggerActions,
    overlay: function overlay() {
      return renderOverlay(prefixCls);
    },
    placement: getPlacement()
  }), dropdownTrigger);
};

Dropdown.Button = _dropdownButton["default"];
Dropdown.defaultProps = {
  mouseEnterDelay: 0.15,
  mouseLeaveDelay: 0.1
};
var _default = Dropdown;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/dropdown/index.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/dropdown/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dropdown = _interopRequireDefault(__webpack_require__(/*! ./dropdown */ "./node_modules/antd/lib/dropdown/dropdown.js"));

var _default = _dropdown["default"];
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/page-header/index.js":
/*!****************************************************!*\
  !*** ./node_modules/antd/lib/page-header/index.js ***!
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

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _ArrowLeftOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/ArrowLeftOutlined */ "./node_modules/@ant-design/icons/ArrowLeftOutlined.js"));

var _ArrowRightOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/ArrowRightOutlined */ "./node_modules/@ant-design/icons/ArrowRightOutlined.js"));

var _rcResizeObserver = _interopRequireDefault(__webpack_require__(/*! rc-resize-observer */ "./node_modules/rc-resize-observer/es/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _breadcrumb = _interopRequireDefault(__webpack_require__(/*! ../breadcrumb */ "./node_modules/antd/lib/breadcrumb/index.js"));

var _avatar = _interopRequireDefault(__webpack_require__(/*! ../avatar */ "./node_modules/antd/lib/avatar/index.js"));

var _transButton = _interopRequireDefault(__webpack_require__(/*! ../_util/transButton */ "./node_modules/antd/lib/_util/transButton.js"));

var _LocaleReceiver = _interopRequireDefault(__webpack_require__(/*! ../locale-provider/LocaleReceiver */ "./node_modules/antd/lib/locale-provider/LocaleReceiver.js"));

var renderBack = function renderBack(prefixCls, backIcon, onBack) {
  if (!backIcon || !onBack) {
    return null;
  }

  return /*#__PURE__*/React.createElement(_LocaleReceiver["default"], {
    componentName: "PageHeader"
  }, function (_ref) {
    var back = _ref.back;
    return /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-back")
    }, /*#__PURE__*/React.createElement(_transButton["default"], {
      onClick: function onClick(e) {
        if (onBack) {
          onBack(e);
        }
      },
      className: "".concat(prefixCls, "-back-button"),
      "aria-label": back
    }, backIcon));
  });
};

var renderBreadcrumb = function renderBreadcrumb(breadcrumb) {
  return /*#__PURE__*/React.createElement(_breadcrumb["default"], breadcrumb);
};

var getBackIcon = function getBackIcon(props) {
  var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ltr';

  if (props.backIcon !== undefined) {
    return props.backIcon;
  }

  return direction === 'rtl' ? /*#__PURE__*/React.createElement(_ArrowRightOutlined["default"], null) : /*#__PURE__*/React.createElement(_ArrowLeftOutlined["default"], null);
};

var renderTitle = function renderTitle(prefixCls, props) {
  var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'ltr';
  var title = props.title,
      avatar = props.avatar,
      subTitle = props.subTitle,
      tags = props.tags,
      extra = props.extra,
      onBack = props.onBack;
  var headingPrefixCls = "".concat(prefixCls, "-heading");

  if (title || subTitle || tags || extra) {
    var backIcon = getBackIcon(props, direction);
    var backIconDom = renderBack(prefixCls, backIcon, onBack);
    return /*#__PURE__*/React.createElement("div", {
      className: headingPrefixCls
    }, /*#__PURE__*/React.createElement("div", {
      className: "".concat(headingPrefixCls, "-left")
    }, backIconDom, avatar && /*#__PURE__*/React.createElement(_avatar["default"], avatar), title && /*#__PURE__*/React.createElement("span", {
      className: "".concat(headingPrefixCls, "-title"),
      title: typeof title === 'string' ? title : undefined
    }, title), subTitle && /*#__PURE__*/React.createElement("span", {
      className: "".concat(headingPrefixCls, "-sub-title"),
      title: typeof subTitle === 'string' ? subTitle : undefined
    }, subTitle), tags && /*#__PURE__*/React.createElement("span", {
      className: "".concat(headingPrefixCls, "-tags")
    }, tags)), extra && /*#__PURE__*/React.createElement("span", {
      className: "".concat(headingPrefixCls, "-extra")
    }, extra));
  }

  return null;
};

var renderFooter = function renderFooter(prefixCls, footer) {
  if (footer) {
    return /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-footer")
    }, footer);
  }

  return null;
};

var renderChildren = function renderChildren(prefixCls, children) {
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-content")
  }, children);
};

var PageHeader = function PageHeader(props) {
  var _React$useState = React.useState(false),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      compact = _React$useState2[0],
      updateCompact = _React$useState2[1];

  var onResize = function onResize(_ref2) {
    var width = _ref2.width;
    updateCompact(width < 768);
  };

  return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, function (_ref3) {
    var _classNames;

    var getPrefixCls = _ref3.getPrefixCls,
        pageHeader = _ref3.pageHeader,
        direction = _ref3.direction;
    var customizePrefixCls = props.prefixCls,
        style = props.style,
        footer = props.footer,
        children = props.children,
        breadcrumb = props.breadcrumb,
        customizeClassName = props.className;
    var ghost = true; // Use `ghost` from `props` or from `ConfigProvider` instead.

    if ('ghost' in props) {
      ghost = props.ghost;
    } else if (pageHeader && 'ghost' in pageHeader) {
      ghost = pageHeader.ghost;
    }

    var prefixCls = getPrefixCls('page-header', customizePrefixCls);
    var breadcrumbDom = breadcrumb && breadcrumb.routes ? renderBreadcrumb(breadcrumb) : null;
    var className = (0, _classnames["default"])(prefixCls, customizeClassName, (_classNames = {
      'has-breadcrumb': breadcrumbDom,
      'has-footer': footer
    }, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-ghost"), ghost), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-compact"), compact), _classNames));
    return /*#__PURE__*/React.createElement(_rcResizeObserver["default"], {
      onResize: onResize
    }, /*#__PURE__*/React.createElement("div", {
      className: className,
      style: style
    }, breadcrumbDom, renderTitle(prefixCls, props, direction), children && renderChildren(prefixCls, children), renderFooter(prefixCls, footer)));
  });
};

var _default = PageHeader;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/popover/index.js":
/*!************************************************!*\
  !*** ./node_modules/antd/lib/popover/index.js ***!
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

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _tooltip = _interopRequireDefault(__webpack_require__(/*! ../tooltip */ "./node_modules/antd/lib/tooltip/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _getRenderPropValue = __webpack_require__(/*! ../_util/getRenderPropValue */ "./node_modules/antd/lib/_util/getRenderPropValue.js");

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

var Popover = /*#__PURE__*/React.forwardRef(function (_a, ref) {
  var customizePrefixCls = _a.prefixCls,
      title = _a.title,
      content = _a.content,
      otherProps = __rest(_a, ["prefixCls", "title", "content"]);

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;

  var getOverlay = function getOverlay(prefixCls) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, title && /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-title")
    }, (0, _getRenderPropValue.getRenderPropValue)(title)), /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-inner-content")
    }, (0, _getRenderPropValue.getRenderPropValue)(content)));
  };

  var prefixCls = getPrefixCls('popover', customizePrefixCls);
  return /*#__PURE__*/React.createElement(_tooltip["default"], (0, _extends2["default"])({}, otherProps, {
    prefixCls: prefixCls,
    ref: ref,
    overlay: getOverlay(prefixCls)
  }));
});
Popover.displayName = 'Popover';
Popover.defaultProps = {
  placement: 'top',
  transitionName: 'zoom-big',
  trigger: 'hover',
  mouseEnterDelay: 0.1,
  mouseLeaveDelay: 0.1,
  overlayStyle: {}
};
var _default = Popover;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/tag/CheckableTag.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/tag/CheckableTag.js ***!
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

var CheckableTag = function CheckableTag(props) {
  var _classNames;

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;

  var handleClick = function handleClick(e) {
    var checked = props.checked,
        onChange = props.onChange,
        onClick = props.onClick;

    if (onChange) {
      onChange(!checked);
    }

    if (onClick) {
      onClick(e);
    }
  };

  var customizePrefixCls = props.prefixCls,
      className = props.className,
      checked = props.checked,
      restProps = __rest(props, ["prefixCls", "className", "checked"]);

  var prefixCls = getPrefixCls('tag', customizePrefixCls);
  var cls = (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-checkable"), true), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-checkable-checked"), checked), _classNames), className);
  delete restProps.onChange; // TypeScript cannot check delete now.

  return /*#__PURE__*/React.createElement("span", (0, _extends2["default"])({}, restProps, {
    className: cls,
    onClick: handleClick
  }));
};

var _default = CheckableTag;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/tag/index.js":
/*!********************************************!*\
  !*** ./node_modules/antd/lib/tag/index.js ***!
  \********************************************/
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

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _omit = _interopRequireDefault(__webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js"));

var _CloseOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CloseOutlined */ "./node_modules/@ant-design/icons/CloseOutlined.js"));

var _CheckableTag = _interopRequireDefault(__webpack_require__(/*! ./CheckableTag */ "./node_modules/antd/lib/tag/CheckableTag.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _colors = __webpack_require__(/*! ../_util/colors */ "./node_modules/antd/lib/_util/colors.js");

var _wave = _interopRequireDefault(__webpack_require__(/*! ../_util/wave */ "./node_modules/antd/lib/_util/wave.js"));

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

var PresetColorRegex = new RegExp("^(".concat(_colors.PresetColorTypes.join('|'), ")(-inverse)?$"));
var PresetStatusColorRegex = new RegExp("^(".concat(_colors.PresetStatusColorTypes.join('|'), ")$"));

var InternalTag = function InternalTag(_a, ref) {
  var _classNames;

  var customizePrefixCls = _a.prefixCls,
      className = _a.className,
      style = _a.style,
      children = _a.children,
      icon = _a.icon,
      color = _a.color,
      onClose = _a.onClose,
      closeIcon = _a.closeIcon,
      _a$closable = _a.closable,
      closable = _a$closable === void 0 ? false : _a$closable,
      props = __rest(_a, ["prefixCls", "className", "style", "children", "icon", "color", "onClose", "closeIcon", "closable"]);

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var _React$useState = React.useState(true),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      visible = _React$useState2[0],
      setVisible = _React$useState2[1];

  React.useEffect(function () {
    if ('visible' in props) {
      setVisible(props.visible);
    }
  }, [props.visible]);

  var isPresetColor = function isPresetColor() {
    if (!color) {
      return false;
    }

    return PresetColorRegex.test(color) || PresetStatusColorRegex.test(color);
  };

  var tagStyle = (0, _extends2["default"])({
    backgroundColor: color && !isPresetColor() ? color : undefined
  }, style);
  var presetColor = isPresetColor();
  var prefixCls = getPrefixCls('tag', customizePrefixCls);
  var tagClassName = (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(color), presetColor), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-has-color"), color && !presetColor), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-hidden"), !visible), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);

  var handleCloseClick = function handleCloseClick(e) {
    e.stopPropagation();

    if (onClose) {
      onClose(e);
    }

    if (e.defaultPrevented) {
      return;
    }

    if (!('visible' in props)) {
      setVisible(false);
    }
  };

  var renderCloseIcon = function renderCloseIcon() {
    if (closable) {
      return closeIcon ? /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-close-icon"),
        onClick: handleCloseClick
      }, closeIcon) : /*#__PURE__*/React.createElement(_CloseOutlined["default"], {
        className: "".concat(prefixCls, "-close-icon"),
        onClick: handleCloseClick
      });
    }

    return null;
  };

  var isNeedWave = 'onClick' in props || children && children.type === 'a';
  var tagProps = (0, _omit["default"])(props, ['visible']);
  var iconNode = icon || null;
  var kids = iconNode ? /*#__PURE__*/React.createElement(React.Fragment, null, iconNode, /*#__PURE__*/React.createElement("span", null, children)) : children;
  var tagNode = /*#__PURE__*/React.createElement("span", (0, _extends2["default"])({}, tagProps, {
    ref: ref,
    className: tagClassName,
    style: tagStyle
  }), kids, renderCloseIcon());
  return isNeedWave ? /*#__PURE__*/React.createElement(_wave["default"], null, tagNode) : tagNode;
};

var Tag = /*#__PURE__*/React.forwardRef(InternalTag);
Tag.displayName = 'Tag';
Tag.CheckableTag = _CheckableTag["default"];
var _default = Tag;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/rc-util/lib/KeyCode.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-util/lib/KeyCode.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @ignore
 * some key-codes definition and utils from closure-library
 * @author yiminghe@gmail.com
 */
var KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,

  /**
   * BACKSPACE
   */
  BACKSPACE: 8,

  /**
   * TAB
   */
  TAB: 9,

  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,

  /**
   * ENTER
   */
  ENTER: 13,

  /**
   * SHIFT
   */
  SHIFT: 16,

  /**
   * CTRL
   */
  CTRL: 17,

  /**
   * ALT
   */
  ALT: 18,

  /**
   * PAUSE
   */
  PAUSE: 19,

  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,

  /**
   * ESC
   */
  ESC: 27,

  /**
   * SPACE
   */
  SPACE: 32,

  /**
   * PAGE_UP
   */
  PAGE_UP: 33,

  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,

  /**
   * END
   */
  END: 35,

  /**
   * HOME
   */
  HOME: 36,

  /**
   * LEFT
   */
  LEFT: 37,

  /**
   * UP
   */
  UP: 38,

  /**
   * RIGHT
   */
  RIGHT: 39,

  /**
   * DOWN
   */
  DOWN: 40,

  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,

  /**
   * INSERT
   */
  INSERT: 45,

  /**
   * DELETE
   */
  DELETE: 46,

  /**
   * ZERO
   */
  ZERO: 48,

  /**
   * ONE
   */
  ONE: 49,

  /**
   * TWO
   */
  TWO: 50,

  /**
   * THREE
   */
  THREE: 51,

  /**
   * FOUR
   */
  FOUR: 52,

  /**
   * FIVE
   */
  FIVE: 53,

  /**
   * SIX
   */
  SIX: 54,

  /**
   * SEVEN
   */
  SEVEN: 55,

  /**
   * EIGHT
   */
  EIGHT: 56,

  /**
   * NINE
   */
  NINE: 57,

  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,

  /**
   * A
   */
  A: 65,

  /**
   * B
   */
  B: 66,

  /**
   * C
   */
  C: 67,

  /**
   * D
   */
  D: 68,

  /**
   * E
   */
  E: 69,

  /**
   * F
   */
  F: 70,

  /**
   * G
   */
  G: 71,

  /**
   * H
   */
  H: 72,

  /**
   * I
   */
  I: 73,

  /**
   * J
   */
  J: 74,

  /**
   * K
   */
  K: 75,

  /**
   * L
   */
  L: 76,

  /**
   * M
   */
  M: 77,

  /**
   * N
   */
  N: 78,

  /**
   * O
   */
  O: 79,

  /**
   * P
   */
  P: 80,

  /**
   * Q
   */
  Q: 81,

  /**
   * R
   */
  R: 82,

  /**
   * S
   */
  S: 83,

  /**
   * T
   */
  T: 84,

  /**
   * U
   */
  U: 85,

  /**
   * V
   */
  V: 86,

  /**
   * W
   */
  W: 87,

  /**
   * X
   */
  X: 88,

  /**
   * Y
   */
  Y: 89,

  /**
   * Z
   */
  Z: 90,

  /**
   * META
   */
  META: 91,

  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,

  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,

  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,

  /**
   * NUM_ONE
   */
  NUM_ONE: 97,

  /**
   * NUM_TWO
   */
  NUM_TWO: 98,

  /**
   * NUM_THREE
   */
  NUM_THREE: 99,

  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,

  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,

  /**
   * NUM_SIX
   */
  NUM_SIX: 102,

  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,

  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,

  /**
   * NUM_NINE
   */
  NUM_NINE: 105,

  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,

  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,

  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,

  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,

  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,

  /**
   * F1
   */
  F1: 112,

  /**
   * F2
   */
  F2: 113,

  /**
   * F3
   */
  F3: 114,

  /**
   * F4
   */
  F4: 115,

  /**
   * F5
   */
  F5: 116,

  /**
   * F6
   */
  F6: 117,

  /**
   * F7
   */
  F7: 118,

  /**
   * F8
   */
  F8: 119,

  /**
   * F9
   */
  F9: 120,

  /**
   * F10
   */
  F10: 121,

  /**
   * F11
   */
  F11: 122,

  /**
   * F12
   */
  F12: 123,

  /**
   * NUMLOCK
   */
  NUMLOCK: 144,

  /**
   * SEMICOLON
   */
  SEMICOLON: 186,

  /**
   * DASH
   */
  DASH: 189,

  /**
   * EQUALS
   */
  EQUALS: 187,

  /**
   * COMMA
   */
  COMMA: 188,

  /**
   * PERIOD
   */
  PERIOD: 190,

  /**
   * SLASH
   */
  SLASH: 191,

  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,

  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,

  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,

  /**
   * BACKSLASH
   */
  BACKSLASH: 220,

  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,

  /**
   * WIN_KEY
   */
  WIN_KEY: 224,

  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,

  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================

  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function isTextModifyingKeyEvent(e) {
    var keyCode = e.keyCode;

    if (e.altKey && !e.ctrlKey || e.metaKey || // Function keys don't generate text
    keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
      return false;
    } // The following keys are quite harmless, even in combination with
    // CTRL, ALT or SHIFT.


    switch (keyCode) {
      case KeyCode.ALT:
      case KeyCode.CAPS_LOCK:
      case KeyCode.CONTEXT_MENU:
      case KeyCode.CTRL:
      case KeyCode.DOWN:
      case KeyCode.END:
      case KeyCode.ESC:
      case KeyCode.HOME:
      case KeyCode.INSERT:
      case KeyCode.LEFT:
      case KeyCode.MAC_FF_META:
      case KeyCode.META:
      case KeyCode.NUMLOCK:
      case KeyCode.NUM_CENTER:
      case KeyCode.PAGE_DOWN:
      case KeyCode.PAGE_UP:
      case KeyCode.PAUSE:
      case KeyCode.PRINT_SCREEN:
      case KeyCode.RIGHT:
      case KeyCode.SHIFT:
      case KeyCode.UP:
      case KeyCode.WIN_KEY:
      case KeyCode.WIN_KEY_RIGHT:
        return false;

      default:
        return true;
    }
  },

  /**
   * whether character is entered.
   */
  isCharacterKey: function isCharacterKey(keyCode) {
    if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
      return true;
    }

    if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
      return true;
    }

    if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
      return true;
    } // Safari sends zero key code for non-latin characters.


    if (window.navigator.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
      return true;
    }

    switch (keyCode) {
      case KeyCode.SPACE:
      case KeyCode.QUESTION_MARK:
      case KeyCode.NUM_PLUS:
      case KeyCode.NUM_MINUS:
      case KeyCode.NUM_PERIOD:
      case KeyCode.NUM_DIVISION:
      case KeyCode.SEMICOLON:
      case KeyCode.DASH:
      case KeyCode.EQUALS:
      case KeyCode.COMMA:
      case KeyCode.PERIOD:
      case KeyCode.SLASH:
      case KeyCode.APOSTROPHE:
      case KeyCode.SINGLE_QUOTE:
      case KeyCode.OPEN_SQUARE_BRACKET:
      case KeyCode.BACKSLASH:
      case KeyCode.CLOSE_SQUARE_BRACKET:
        return true;

      default:
        return false;
    }
  }
};
var _default = KeyCode;
exports.default = _default;

/***/ }),

/***/ "./node_modules/rc-util/lib/getScrollBarSize.js":
/*!******************************************************!*\
  !*** ./node_modules/rc-util/lib/getScrollBarSize.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getScrollBarSize;
var cached;

function getScrollBarSize(fresh) {
  if (typeof document === 'undefined') {
    return 0;
  }

  if (fresh || cached === undefined) {
    var inner = document.createElement('div');
    inner.style.width = '100%';
    inner.style.height = '200px';
    var outer = document.createElement('div');
    var outerStyle = outer.style;
    outerStyle.position = 'absolute';
    outerStyle.top = 0;
    outerStyle.left = 0;
    outerStyle.pointerEvents = 'none';
    outerStyle.visibility = 'hidden';
    outerStyle.width = '200px';
    outerStyle.height = '150px';
    outerStyle.overflow = 'hidden';
    outer.appendChild(inner);
    document.body.appendChild(outer);
    var widthContained = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var widthScroll = inner.offsetWidth;

    if (widthContained === widthScroll) {
      widthScroll = outer.clientWidth;
    }

    document.body.removeChild(outer);
    cached = widthContained - widthScroll;
  }

  return cached;
}

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

/***/ "./node_modules/react-use/lib/useEffectOnce.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-use/lib/useEffectOnce.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var useEffectOnce = function (effect) {
    react_1.useEffect(effect, []);
};
exports.default = useEffectOnce;


/***/ })

}]);