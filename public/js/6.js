(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/antd/lib/_util/isNumeric.js":
/*!**************************************************!*\
  !*** ./node_modules/antd/lib/_util/isNumeric.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var isNumeric = function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
};

var _default = isNumeric;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/layout/Sider.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/layout/Sider.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SiderContext = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/@babel/runtime/helpers/createSuper.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _omit = _interopRequireDefault(__webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js"));

var _BarsOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/BarsOutlined */ "./node_modules/@ant-design/icons/BarsOutlined.js"));

var _RightOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/RightOutlined */ "./node_modules/@ant-design/icons/RightOutlined.js"));

var _LeftOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/LeftOutlined */ "./node_modules/@ant-design/icons/LeftOutlined.js"));

var _layout = __webpack_require__(/*! ./layout */ "./node_modules/antd/lib/layout/layout.js");

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _isNumeric = _interopRequireDefault(__webpack_require__(/*! ../_util/isNumeric */ "./node_modules/antd/lib/_util/isNumeric.js"));

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

var dimensionMaxMap = {
  xs: '479.98px',
  sm: '575.98px',
  md: '767.98px',
  lg: '991.98px',
  xl: '1199.98px',
  xxl: '1599.98px'
};
var SiderContext = /*#__PURE__*/React.createContext({});
exports.SiderContext = SiderContext;

var generateId = function () {
  var i = 0;
  return function () {
    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    i += 1;
    return "".concat(prefix).concat(i);
  };
}();

var InternalSider = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(InternalSider, _React$Component);

  var _super = (0, _createSuper2["default"])(InternalSider);

  function InternalSider(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, InternalSider);
    _this = _super.call(this, props);

    _this.responsiveHandler = function (mql) {
      _this.setState({
        below: mql.matches
      });

      var onBreakpoint = _this.props.onBreakpoint;

      if (onBreakpoint) {
        onBreakpoint(mql.matches);
      }

      if (_this.state.collapsed !== mql.matches) {
        _this.setCollapsed(mql.matches, 'responsive');
      }
    };

    _this.setCollapsed = function (collapsed, type) {
      if (!('collapsed' in _this.props)) {
        _this.setState({
          collapsed: collapsed
        });
      }

      var onCollapse = _this.props.onCollapse;

      if (onCollapse) {
        onCollapse(collapsed, type);
      }
    };

    _this.toggle = function () {
      var collapsed = !_this.state.collapsed;

      _this.setCollapsed(collapsed, 'clickTrigger');
    };

    _this.renderSider = function (_ref) {
      var _classNames;

      var getPrefixCls = _ref.getPrefixCls;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          className = _a.className,
          theme = _a.theme,
          collapsible = _a.collapsible,
          reverseArrow = _a.reverseArrow,
          trigger = _a.trigger,
          style = _a.style,
          width = _a.width,
          collapsedWidth = _a.collapsedWidth,
          zeroWidthTriggerStyle = _a.zeroWidthTriggerStyle,
          children = _a.children,
          others = __rest(_a, ["prefixCls", "className", "theme", "collapsible", "reverseArrow", "trigger", "style", "width", "collapsedWidth", "zeroWidthTriggerStyle", "children"]);

      var _this$state = _this.state,
          collapsed = _this$state.collapsed,
          below = _this$state.below;
      var prefixCls = getPrefixCls('layout-sider', customizePrefixCls);
      var divProps = (0, _omit["default"])(others, ['collapsed', 'defaultCollapsed', 'onCollapse', 'breakpoint', 'onBreakpoint', 'siderHook', 'zeroWidthTriggerStyle']);
      var rawWidth = collapsed ? collapsedWidth : width; // use "px" as fallback unit for width

      var siderWidth = (0, _isNumeric["default"])(rawWidth) ? "".concat(rawWidth, "px") : String(rawWidth); // special trigger when collapsedWidth == 0

      var zeroWidthTrigger = parseFloat(String(collapsedWidth || 0)) === 0 ? /*#__PURE__*/React.createElement("span", {
        onClick: _this.toggle,
        className: (0, _classnames["default"])("".concat(prefixCls, "-zero-width-trigger"), "".concat(prefixCls, "-zero-width-trigger-").concat(reverseArrow ? 'right' : 'left')),
        style: zeroWidthTriggerStyle
      }, trigger || /*#__PURE__*/React.createElement(_BarsOutlined["default"], null)) : null;
      var iconObj = {
        expanded: reverseArrow ? /*#__PURE__*/React.createElement(_RightOutlined["default"], null) : /*#__PURE__*/React.createElement(_LeftOutlined["default"], null),
        collapsed: reverseArrow ? /*#__PURE__*/React.createElement(_LeftOutlined["default"], null) : /*#__PURE__*/React.createElement(_RightOutlined["default"], null)
      };
      var status = collapsed ? 'collapsed' : 'expanded';
      var defaultTrigger = iconObj[status];
      var triggerDom = trigger !== null ? zeroWidthTrigger || /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-trigger"),
        onClick: _this.toggle,
        style: {
          width: siderWidth
        }
      }, trigger || defaultTrigger) : null;
      var divStyle = (0, _extends2["default"])((0, _extends2["default"])({}, style), {
        flex: "0 0 ".concat(siderWidth),
        maxWidth: siderWidth,
        minWidth: siderWidth,
        width: siderWidth
      });
      var siderCls = (0, _classnames["default"])(className, prefixCls, "".concat(prefixCls, "-").concat(theme), (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-collapsed"), !!collapsed), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-has-trigger"), collapsible && trigger !== null && !zeroWidthTrigger), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-below"), !!below), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-zero-width"), parseFloat(siderWidth) === 0), _classNames));
      return /*#__PURE__*/React.createElement("aside", (0, _extends2["default"])({
        className: siderCls
      }, divProps, {
        style: divStyle
      }), /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-children")
      }, children), collapsible || below && zeroWidthTrigger ? triggerDom : null);
    };

    _this.uniqueId = generateId('ant-sider-');
    var matchMedia;

    if (typeof window !== 'undefined') {
      matchMedia = window.matchMedia;
    }

    if (matchMedia && props.breakpoint && props.breakpoint in dimensionMaxMap) {
      _this.mql = matchMedia("(max-width: ".concat(dimensionMaxMap[props.breakpoint], ")"));
    }

    var collapsed;

    if ('collapsed' in props) {
      collapsed = props.collapsed;
    } else {
      collapsed = props.defaultCollapsed;
    }

    _this.state = {
      collapsed: collapsed,
      below: false
    };
    return _this;
  }

  (0, _createClass2["default"])(InternalSider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.mql) {
        this.mql.addListener(this.responsiveHandler);
        this.responsiveHandler(this.mql);
      }

      if (this.props.siderHook) {
        this.props.siderHook.addSider(this.uniqueId);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.mql) {
        this.mql.removeListener(this.responsiveHandler);
      }

      if (this.props.siderHook) {
        this.props.siderHook.removeSider(this.uniqueId);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var collapsed = this.state.collapsed;
      var collapsedWidth = this.props.collapsedWidth;
      return /*#__PURE__*/React.createElement(SiderContext.Provider, {
        value: {
          siderCollapsed: collapsed,
          collapsedWidth: collapsedWidth
        }
      }, /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, this.renderSider));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if ('collapsed' in nextProps) {
        return {
          collapsed: nextProps.collapsed
        };
      }

      return null;
    }
  }]);
  return InternalSider;
}(React.Component);

InternalSider.defaultProps = {
  collapsible: false,
  defaultCollapsed: false,
  reverseArrow: false,
  width: 200,
  collapsedWidth: 80,
  style: {},
  theme: 'dark'
}; // eslint-disable-next-line react/prefer-stateless-function

var Sider = /*#__PURE__*/function (_React$Component2) {
  (0, _inherits2["default"])(Sider, _React$Component2);

  var _super2 = (0, _createSuper2["default"])(Sider);

  function Sider() {
    (0, _classCallCheck2["default"])(this, Sider);
    return _super2.apply(this, arguments);
  }

  (0, _createClass2["default"])(Sider, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/React.createElement(_layout.LayoutContext.Consumer, null, function (context) {
        return /*#__PURE__*/React.createElement(InternalSider, (0, _extends2["default"])({}, context, _this2.props));
      });
    }
  }]);
  return Sider;
}(React.Component);

exports["default"] = Sider;

/***/ }),

/***/ "./node_modules/antd/lib/layout/layout.js":
/*!************************************************!*\
  !*** ./node_modules/antd/lib/layout/layout.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.LayoutContext = void 0;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/@babel/runtime/helpers/createSuper.js"));

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

var LayoutContext = /*#__PURE__*/React.createContext({
  siderHook: {
    addSider: function addSider() {
      return null;
    },
    removeSider: function removeSider() {
      return null;
    }
  }
});
exports.LayoutContext = LayoutContext;

function generator(_ref) {
  var suffixCls = _ref.suffixCls,
      tagName = _ref.tagName,
      displayName = _ref.displayName;
  return function (BasicComponent) {
    var _a;

    return _a = /*#__PURE__*/function (_React$Component) {
      (0, _inherits2["default"])(Adapter, _React$Component);

      var _super = (0, _createSuper2["default"])(Adapter);

      function Adapter() {
        var _this;

        (0, _classCallCheck2["default"])(this, Adapter);
        _this = _super.apply(this, arguments);

        _this.renderComponent = function (_ref2) {
          var getPrefixCls = _ref2.getPrefixCls;
          var customizePrefixCls = _this.props.prefixCls;
          var prefixCls = getPrefixCls(suffixCls, customizePrefixCls);
          return /*#__PURE__*/React.createElement(BasicComponent, (0, _extends2["default"])({
            prefixCls: prefixCls,
            tagName: tagName
          }, _this.props));
        };

        return _this;
      }

      (0, _createClass2["default"])(Adapter, [{
        key: "render",
        value: function render() {
          return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, this.renderComponent);
        }
      }]);
      return Adapter;
    }(React.Component), _a.displayName = displayName, _a;
  };
}

var Basic = function Basic(props) {
  var prefixCls = props.prefixCls,
      className = props.className,
      children = props.children,
      tagName = props.tagName,
      others = __rest(props, ["prefixCls", "className", "children", "tagName"]);

  var classString = (0, _classnames["default"])(prefixCls, className);
  return /*#__PURE__*/React.createElement(tagName, (0, _extends2["default"])({
    className: classString
  }, others), children);
};

var BasicLayout = /*#__PURE__*/function (_React$Component2) {
  (0, _inherits2["default"])(BasicLayout, _React$Component2);

  var _super2 = (0, _createSuper2["default"])(BasicLayout);

  function BasicLayout() {
    var _this2;

    (0, _classCallCheck2["default"])(this, BasicLayout);
    _this2 = _super2.apply(this, arguments);
    _this2.state = {
      siders: []
    };

    _this2.renderComponent = function (_ref3) {
      var _classNames;

      var direction = _ref3.direction;

      var _a = _this2.props,
          prefixCls = _a.prefixCls,
          className = _a.className,
          children = _a.children,
          hasSider = _a.hasSider,
          Tag = _a.tagName,
          others = __rest(_a, ["prefixCls", "className", "children", "hasSider", "tagName"]);

      var classString = (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-has-sider"), typeof hasSider === 'boolean' ? hasSider : _this2.state.siders.length > 0), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
      return /*#__PURE__*/React.createElement(LayoutContext.Provider, {
        value: {
          siderHook: _this2.getSiderHook()
        }
      }, /*#__PURE__*/React.createElement(Tag, (0, _extends2["default"])({
        className: classString
      }, others), children));
    };

    return _this2;
  }

  (0, _createClass2["default"])(BasicLayout, [{
    key: "getSiderHook",
    value: function getSiderHook() {
      var _this3 = this;

      return {
        addSider: function addSider(id) {
          _this3.setState(function (state) {
            return {
              siders: [].concat((0, _toConsumableArray2["default"])(state.siders), [id])
            };
          });
        },
        removeSider: function removeSider(id) {
          _this3.setState(function (state) {
            return {
              siders: state.siders.filter(function (currentId) {
                return currentId !== id;
              })
            };
          });
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, this.renderComponent);
    }
  }]);
  return BasicLayout;
}(React.Component);

var Layout = generator({
  suffixCls: 'layout',
  tagName: 'section',
  displayName: 'Layout'
})(BasicLayout);
var Header = generator({
  suffixCls: 'layout-header',
  tagName: 'header',
  displayName: 'Header'
})(Basic);
var Footer = generator({
  suffixCls: 'layout-footer',
  tagName: 'footer',
  displayName: 'Footer'
})(Basic);
var Content = generator({
  suffixCls: 'layout-content',
  tagName: 'main',
  displayName: 'Content'
})(Basic);
Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;
var _default = Layout;
exports["default"] = _default;

/***/ })

}]);