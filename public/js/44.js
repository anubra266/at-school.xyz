(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[44],{

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

/***/ "./node_modules/antd/lib/_util/responsiveObserve.js":
/*!**********************************************************!*\
  !*** ./node_modules/antd/lib/_util/responsiveObserve.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.responsiveMap = exports.responsiveArray = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _extends3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var responsiveArray = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
exports.responsiveArray = responsiveArray;
var responsiveMap = {
  xs: '(max-width: 575px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  xxl: '(min-width: 1600px)'
};
exports.responsiveMap = responsiveMap;
var subscribers = new Map();
var subUid = -1;
var screens = {};
var responsiveObserve = {
  matchHandlers: {},
  dispatch: function dispatch(pointMap) {
    screens = pointMap;
    subscribers.forEach(function (func) {
      return func(screens);
    });
    return subscribers.size >= 1;
  },
  subscribe: function subscribe(func) {
    if (!subscribers.size) this.register();
    subUid += 1;
    subscribers.set(subUid, func);
    func(screens);
    return subUid;
  },
  unsubscribe: function unsubscribe(token) {
    subscribers["delete"](token);
    if (!subscribers.size) this.unregister();
  },
  unregister: function unregister() {
    var _this = this;

    Object.keys(responsiveMap).forEach(function (screen) {
      var matchMediaQuery = responsiveMap[screen];
      var handler = _this.matchHandlers[matchMediaQuery];
      handler === null || handler === void 0 ? void 0 : handler.mql.removeListener(handler === null || handler === void 0 ? void 0 : handler.listener);
    });
    subscribers.clear();
  },
  register: function register() {
    var _this2 = this;

    Object.keys(responsiveMap).forEach(function (screen) {
      var matchMediaQuery = responsiveMap[screen];

      var listener = function listener(_ref) {
        var matches = _ref.matches;

        _this2.dispatch((0, _extends3["default"])((0, _extends3["default"])({}, screens), (0, _defineProperty2["default"])({}, screen, matches)));
      };

      var mql = window.matchMedia(matchMediaQuery);
      mql.addListener(listener);
      _this2.matchHandlers[matchMediaQuery] = {
        mql: mql,
        listener: listener
      };
      listener(mql);
    });
  }
};
var _default = responsiveObserve;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/col/index.js":
/*!********************************************!*\
  !*** ./node_modules/antd/lib/col/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _grid = __webpack_require__(/*! ../grid */ "./node_modules/antd/lib/grid/index.js");

var _default = _grid.Col;
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

/***/ "./node_modules/antd/lib/grid/RowContext.js":
/*!**************************************************!*\
  !*** ./node_modules/antd/lib/grid/RowContext.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var RowContext = /*#__PURE__*/(0, _react.createContext)({});
var _default = RowContext;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/grid/col.js":
/*!*******************************************!*\
  !*** ./node_modules/antd/lib/grid/col.js ***!
  \*******************************************/
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

var _extends3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _RowContext = _interopRequireDefault(__webpack_require__(/*! ./RowContext */ "./node_modules/antd/lib/grid/RowContext.js"));

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

function parseFlex(flex) {
  if (typeof flex === 'number') {
    return "".concat(flex, " ").concat(flex, " auto");
  }

  if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
    return "0 0 ".concat(flex);
  }

  return flex;
}

var Col = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var renderCol = function renderCol(_ref) {
    var _classNames;

    var getPrefixCls = _ref.getPrefixCls,
        direction = _ref.direction;

    var customizePrefixCls = props.prefixCls,
        span = props.span,
        order = props.order,
        offset = props.offset,
        push = props.push,
        pull = props.pull,
        className = props.className,
        children = props.children,
        flex = props.flex,
        style = props.style,
        others = __rest(props, ["prefixCls", "span", "order", "offset", "push", "pull", "className", "children", "flex", "style"]);

    var prefixCls = getPrefixCls('col', customizePrefixCls);
    var sizeClassObj = {};
    ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].forEach(function (size) {
      var _extends2;

      var sizeProps = {};
      var propSize = props[size];

      if (typeof propSize === 'number') {
        sizeProps.span = propSize;
      } else if ((0, _typeof2["default"])(propSize) === 'object') {
        sizeProps = propSize || {};
      }

      delete others[size];
      sizeClassObj = (0, _extends3["default"])((0, _extends3["default"])({}, sizeClassObj), (_extends2 = {}, (0, _defineProperty2["default"])(_extends2, "".concat(prefixCls, "-").concat(size, "-").concat(sizeProps.span), sizeProps.span !== undefined), (0, _defineProperty2["default"])(_extends2, "".concat(prefixCls, "-").concat(size, "-order-").concat(sizeProps.order), sizeProps.order || sizeProps.order === 0), (0, _defineProperty2["default"])(_extends2, "".concat(prefixCls, "-").concat(size, "-offset-").concat(sizeProps.offset), sizeProps.offset || sizeProps.offset === 0), (0, _defineProperty2["default"])(_extends2, "".concat(prefixCls, "-").concat(size, "-push-").concat(sizeProps.push), sizeProps.push || sizeProps.push === 0), (0, _defineProperty2["default"])(_extends2, "".concat(prefixCls, "-").concat(size, "-pull-").concat(sizeProps.pull), sizeProps.pull || sizeProps.pull === 0), (0, _defineProperty2["default"])(_extends2, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _extends2));
    });
    var classes = (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(span), span !== undefined), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-order-").concat(order), order), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-offset-").concat(offset), offset), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-push-").concat(push), push), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-pull-").concat(pull), pull), _classNames), className, sizeClassObj);
    return /*#__PURE__*/React.createElement(_RowContext["default"].Consumer, null, function (_ref2) {
      var gutter = _ref2.gutter;
      var mergedStyle = (0, _extends3["default"])({}, style);

      if (gutter) {
        mergedStyle = (0, _extends3["default"])((0, _extends3["default"])((0, _extends3["default"])({}, gutter[0] > 0 ? {
          paddingLeft: gutter[0] / 2,
          paddingRight: gutter[0] / 2
        } : {}), gutter[1] > 0 ? {
          paddingTop: gutter[1] / 2,
          paddingBottom: gutter[1] / 2
        } : {}), mergedStyle);
      }

      if (flex) {
        mergedStyle.flex = parseFlex(flex);
      }

      return /*#__PURE__*/React.createElement("div", (0, _extends3["default"])({}, others, {
        style: mergedStyle,
        className: classes,
        ref: ref
      }), children);
    });
  };

  return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, renderCol);
});
Col.displayName = 'Col';
var _default = Col;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/grid/hooks/useBreakpoint.js":
/*!***********************************************************!*\
  !*** ./node_modules/antd/lib/grid/hooks/useBreakpoint.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _responsiveObserve = _interopRequireDefault(__webpack_require__(/*! ../../_util/responsiveObserve */ "./node_modules/antd/lib/_util/responsiveObserve.js"));

function useBreakpoint() {
  var _useState = (0, _react.useState)({}),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      screens = _useState2[0],
      setScreens = _useState2[1];

  (0, _react.useEffect)(function () {
    var token = _responsiveObserve["default"].subscribe(function (supportScreens) {
      setScreens(supportScreens);
    });

    return function () {
      return _responsiveObserve["default"].unsubscribe(token);
    };
  }, []);
  return screens;
}

var _default = useBreakpoint;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/grid/index.js":
/*!*********************************************!*\
  !*** ./node_modules/antd/lib/grid/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Row", {
  enumerable: true,
  get: function get() {
    return _row["default"];
  }
});
Object.defineProperty(exports, "Col", {
  enumerable: true,
  get: function get() {
    return _col["default"];
  }
});
exports["default"] = void 0;

var _row = _interopRequireDefault(__webpack_require__(/*! ./row */ "./node_modules/antd/lib/grid/row.js"));

var _col = _interopRequireDefault(__webpack_require__(/*! ./col */ "./node_modules/antd/lib/grid/col.js"));

var _useBreakpoint = _interopRequireDefault(__webpack_require__(/*! ./hooks/useBreakpoint */ "./node_modules/antd/lib/grid/hooks/useBreakpoint.js"));

var _default = {
  useBreakpoint: _useBreakpoint["default"]
};
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/grid/row.js":
/*!*******************************************!*\
  !*** ./node_modules/antd/lib/grid/row.js ***!
  \*******************************************/
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

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _RowContext = _interopRequireDefault(__webpack_require__(/*! ./RowContext */ "./node_modules/antd/lib/grid/RowContext.js"));

var _type = __webpack_require__(/*! ../_util/type */ "./node_modules/antd/lib/_util/type.js");

var _responsiveObserve = _interopRequireWildcard(__webpack_require__(/*! ../_util/responsiveObserve */ "./node_modules/antd/lib/_util/responsiveObserve.js"));

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

var RowAligns = (0, _type.tuple)('top', 'middle', 'bottom', 'stretch');
var RowJustify = (0, _type.tuple)('start', 'end', 'center', 'space-around', 'space-between');
var Row = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _React$useState = React.useState({
    xs: true,
    sm: true,
    md: true,
    lg: true,
    xl: true,
    xxl: true
  }),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      screens = _React$useState2[0],
      setScreens = _React$useState2[1];

  var gutterRef = React.useRef();
  gutterRef.current = props.gutter;
  React.useEffect(function () {
    var token = _responsiveObserve["default"].subscribe(function (screen) {
      var currentGutter = gutterRef.current || 0;

      if (!Array.isArray(currentGutter) && (0, _typeof2["default"])(currentGutter) === 'object' || Array.isArray(currentGutter) && ((0, _typeof2["default"])(currentGutter[0]) === 'object' || (0, _typeof2["default"])(currentGutter[1]) === 'object')) {
        setScreens(screen);
      }
    });

    return function () {
      _responsiveObserve["default"].unsubscribe(token);
    };
  }, []);

  var getGutter = function getGutter() {
    var results = [0, 0];
    var _props$gutter = props.gutter,
        gutter = _props$gutter === void 0 ? 0 : _props$gutter;
    var normalizedGutter = Array.isArray(gutter) ? gutter : [gutter, 0];
    normalizedGutter.forEach(function (g, index) {
      if ((0, _typeof2["default"])(g) === 'object') {
        for (var i = 0; i < _responsiveObserve.responsiveArray.length; i++) {
          var breakpoint = _responsiveObserve.responsiveArray[i];

          if (screens[breakpoint] && g[breakpoint] !== undefined) {
            results[index] = g[breakpoint];
            break;
          }
        }
      } else {
        results[index] = g || 0;
      }
    });
    return results;
  };

  var renderRow = function renderRow(_ref) {
    var _classNames;

    var getPrefixCls = _ref.getPrefixCls,
        direction = _ref.direction;

    var customizePrefixCls = props.prefixCls,
        justify = props.justify,
        align = props.align,
        className = props.className,
        style = props.style,
        children = props.children,
        others = __rest(props, ["prefixCls", "justify", "align", "className", "style", "children"]);

    var prefixCls = getPrefixCls('row', customizePrefixCls);
    var gutter = getGutter();
    var classes = (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(justify), justify), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(align), align), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
    var rowStyle = (0, _extends2["default"])((0, _extends2["default"])((0, _extends2["default"])({}, gutter[0] > 0 ? {
      marginLeft: gutter[0] / -2,
      marginRight: gutter[0] / -2
    } : {}), gutter[1] > 0 ? {
      marginTop: gutter[1] / -2,
      marginBottom: gutter[1] / 2
    } : {}), style);
    var otherProps = (0, _extends2["default"])({}, others);
    delete otherProps.gutter;
    return /*#__PURE__*/React.createElement(_RowContext["default"].Provider, {
      value: {
        gutter: gutter
      }
    }, /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({}, otherProps, {
      className: classes,
      style: rowStyle,
      ref: ref
    }), children));
  };

  return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, renderRow);
});
Row.displayName = 'Row';
var _default = Row;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/layout/index.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/layout/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _layout = _interopRequireDefault(__webpack_require__(/*! ./layout */ "./node_modules/antd/lib/layout/layout.js"));

var _Sider = _interopRequireDefault(__webpack_require__(/*! ./Sider */ "./node_modules/antd/lib/layout/Sider.js"));

_layout["default"].Sider = _Sider["default"];
var _default = _layout["default"];
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/row/index.js":
/*!********************************************!*\
  !*** ./node_modules/antd/lib/row/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _grid = __webpack_require__(/*! ../grid */ "./node_modules/antd/lib/grid/index.js");

var _default = _grid.Row;
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