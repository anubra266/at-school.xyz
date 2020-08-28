(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/antd/lib/_util/styleChecker.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/_util/styleChecker.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isFlexSupported = void 0;

var isStyleSupport = function isStyleSupport(styleName) {
  if (typeof window !== 'undefined' && window.document && window.document.documentElement) {
    var styleNameList = Array.isArray(styleName) ? styleName : [styleName];
    var documentElement = window.document.documentElement;
    return styleNameList.some(function (name) {
      return name in documentElement.style;
    });
  }

  return false;
};

var isFlexSupported = isStyleSupport(['flex', 'webkitFlex', 'Flex', 'msFlex']);
exports.isFlexSupported = isFlexSupported;
var _default = isStyleSupport;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/typography/Base.js":
/*!**************************************************!*\
  !*** ./node_modules/antd/lib/typography/Base.js ***!
  \**************************************************/
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

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/@babel/runtime/helpers/createSuper.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _toArray = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/Children/toArray */ "./node_modules/rc-util/lib/Children/toArray.js"));

var _findDOMNode = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/Dom/findDOMNode */ "./node_modules/rc-util/lib/Dom/findDOMNode.js"));

var _copyToClipboard = _interopRequireDefault(__webpack_require__(/*! copy-to-clipboard */ "./node_modules/copy-to-clipboard/index.js"));

var _omit = _interopRequireDefault(__webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js"));

var _EditOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/EditOutlined */ "./node_modules/@ant-design/icons/EditOutlined.js"));

var _CheckOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CheckOutlined */ "./node_modules/@ant-design/icons/CheckOutlined.js"));

var _CopyOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CopyOutlined */ "./node_modules/@ant-design/icons/CopyOutlined.js"));

var _rcResizeObserver = _interopRequireDefault(__webpack_require__(/*! rc-resize-observer */ "./node_modules/rc-resize-observer/es/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _LocaleReceiver = _interopRequireDefault(__webpack_require__(/*! ../locale-provider/LocaleReceiver */ "./node_modules/antd/lib/locale-provider/LocaleReceiver.js"));

var _devWarning = _interopRequireDefault(__webpack_require__(/*! ../_util/devWarning */ "./node_modules/antd/lib/_util/devWarning.js"));

var _transButton = _interopRequireDefault(__webpack_require__(/*! ../_util/transButton */ "./node_modules/antd/lib/_util/transButton.js"));

var _raf = _interopRequireDefault(__webpack_require__(/*! ../_util/raf */ "./node_modules/antd/lib/_util/raf.js"));

var _styleChecker = _interopRequireDefault(__webpack_require__(/*! ../_util/styleChecker */ "./node_modules/antd/lib/_util/styleChecker.js"));

var _tooltip = _interopRequireDefault(__webpack_require__(/*! ../tooltip */ "./node_modules/antd/lib/tooltip/index.js"));

var _Typography = _interopRequireDefault(__webpack_require__(/*! ./Typography */ "./node_modules/antd/lib/typography/Typography.js"));

var _Editable = _interopRequireDefault(__webpack_require__(/*! ./Editable */ "./node_modules/antd/lib/typography/Editable.js"));

var _util = _interopRequireDefault(__webpack_require__(/*! ./util */ "./node_modules/antd/lib/typography/util.js"));

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

var isLineClampSupport = (0, _styleChecker["default"])('webkitLineClamp');
var isTextOverflowSupport = (0, _styleChecker["default"])('textOverflow');

function wrapperDecorations(_ref, content) {
  var mark = _ref.mark,
      code = _ref.code,
      underline = _ref.underline,
      del = _ref["delete"],
      strong = _ref.strong,
      keyboard = _ref.keyboard;
  var currentContent = content;

  function wrap(needed, tag) {
    if (!needed) return;
    currentContent = /*#__PURE__*/React.createElement(tag, {}, currentContent);
  }

  wrap(strong, 'strong');
  wrap(underline, 'u');
  wrap(del, 'del');
  wrap(code, 'code');
  wrap(mark, 'mark');
  wrap(keyboard, 'kbd');
  return currentContent;
}

var ELLIPSIS_STR = '...';

var Base = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Base, _React$Component);

  var _super = (0, _createSuper2["default"])(Base);

  function Base() {
    var _this;

    (0, _classCallCheck2["default"])(this, Base);
    _this = _super.apply(this, arguments);
    _this.contentRef = /*#__PURE__*/React.createRef();
    _this.state = {
      edit: false,
      copied: false,
      ellipsisText: '',
      ellipsisContent: null,
      isEllipsis: false,
      expanded: false,
      clientRendered: false
    };

    _this.getPrefixCls = function () {
      var customizePrefixCls = _this.props.prefixCls;
      var getPrefixCls = _this.context.getPrefixCls;
      return getPrefixCls('typography', customizePrefixCls);
    }; // =============== Expand ===============


    _this.onExpandClick = function (e) {
      var _this$getEllipsis = _this.getEllipsis(),
          onExpand = _this$getEllipsis.onExpand;

      _this.setState({
        expanded: true
      });

      if (onExpand) {
        onExpand(e);
      }
    }; // ================ Edit ================


    _this.onEditClick = function () {
      _this.triggerEdit(true);
    };

    _this.onEditChange = function (value) {
      var _this$getEditable = _this.getEditable(),
          onChange = _this$getEditable.onChange;

      if (onChange) {
        onChange(value);
      }

      _this.triggerEdit(false);
    };

    _this.onEditCancel = function () {
      _this.triggerEdit(false);
    }; // ================ Copy ================


    _this.onCopyClick = function () {
      var _this$props = _this.props,
          children = _this$props.children,
          copyable = _this$props.copyable;
      var copyConfig = (0, _extends2["default"])({}, (0, _typeof2["default"])(copyable) === 'object' ? copyable : null);

      if (copyConfig.text === undefined) {
        copyConfig.text = String(children);
      }

      (0, _copyToClipboard["default"])(copyConfig.text || '');

      _this.setState({
        copied: true
      }, function () {
        if (copyConfig.onCopy) {
          copyConfig.onCopy();
        }

        _this.copyId = window.setTimeout(function () {
          _this.setState({
            copied: false
          });
        }, 3000);
      });
    };

    _this.setEditRef = function (node) {
      _this.editIcon = node;
    };

    _this.triggerEdit = function (edit) {
      var _this$getEditable2 = _this.getEditable(),
          onStart = _this$getEditable2.onStart;

      if (edit && onStart) {
        onStart();
      }

      _this.setState({
        edit: edit
      }, function () {
        if (!edit && _this.editIcon) {
          _this.editIcon.focus();
        }
      });
    }; // ============== Ellipsis ==============


    _this.resizeOnNextFrame = function () {
      _raf["default"].cancel(_this.rafId);

      _this.rafId = (0, _raf["default"])(function () {
        // Do not bind `syncEllipsis`. It need for test usage on prototype
        _this.syncEllipsis();
      });
    };

    return _this;
  }

  (0, _createClass2["default"])(Base, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        clientRendered: true
      });
      this.resizeOnNextFrame();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var children = this.props.children;
      var ellipsis = this.getEllipsis();
      var prevEllipsis = this.getEllipsis(prevProps);

      if (children !== prevProps.children || ellipsis.rows !== prevEllipsis.rows) {
        this.resizeOnNextFrame();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.clearTimeout(this.copyId);

      _raf["default"].cancel(this.rafId);
    }
  }, {
    key: "getEditable",
    value: function getEditable(props) {
      var edit = this.state.edit;

      var _ref2 = props || this.props,
          editable = _ref2.editable;

      if (!editable) return {
        editing: edit
      };
      return (0, _extends2["default"])({
        editing: edit
      }, (0, _typeof2["default"])(editable) === 'object' ? editable : null);
    }
  }, {
    key: "getEllipsis",
    value: function getEllipsis(props) {
      var _ref3 = props || this.props,
          ellipsis = _ref3.ellipsis;

      if (!ellipsis) return {};
      return (0, _extends2["default"])({
        rows: 1,
        expandable: false
      }, (0, _typeof2["default"])(ellipsis) === 'object' ? ellipsis : null);
    }
  }, {
    key: "canUseCSSEllipsis",
    value: function canUseCSSEllipsis() {
      var clientRendered = this.state.clientRendered;
      var _this$props2 = this.props,
          editable = _this$props2.editable,
          copyable = _this$props2.copyable;

      var _this$getEllipsis2 = this.getEllipsis(),
          rows = _this$getEllipsis2.rows,
          expandable = _this$getEllipsis2.expandable,
          suffix = _this$getEllipsis2.suffix,
          onEllipsis = _this$getEllipsis2.onEllipsis;

      if (suffix) return false; // Can't use css ellipsis since we need to provide the place for button

      if (editable || copyable || expandable || !clientRendered || onEllipsis) {
        return false;
      }

      if (rows === 1) {
        return isTextOverflowSupport;
      }

      return isLineClampSupport;
    }
  }, {
    key: "syncEllipsis",
    value: function syncEllipsis() {
      var _this$state = this.state,
          ellipsisText = _this$state.ellipsisText,
          isEllipsis = _this$state.isEllipsis,
          expanded = _this$state.expanded;

      var _this$getEllipsis3 = this.getEllipsis(),
          rows = _this$getEllipsis3.rows,
          suffix = _this$getEllipsis3.suffix,
          onEllipsis = _this$getEllipsis3.onEllipsis;

      var children = this.props.children;
      if (!rows || rows < 0 || !this.contentRef.current || expanded) return; // Do not measure if css already support ellipsis

      if (this.canUseCSSEllipsis()) return;
      (0, _devWarning["default"])((0, _toArray["default"])(children).every(function (child) {
        return typeof child === 'string';
      }), 'Typography', '`ellipsis` should use string as children only.');

      var _measure = (0, _util["default"])((0, _findDOMNode["default"])(this.contentRef.current), {
        rows: rows,
        suffix: suffix
      }, children, this.renderOperations(true), ELLIPSIS_STR),
          content = _measure.content,
          text = _measure.text,
          ellipsis = _measure.ellipsis;

      if (ellipsisText !== text || isEllipsis !== ellipsis) {
        this.setState({
          ellipsisText: text,
          ellipsisContent: content,
          isEllipsis: ellipsis
        });

        if (isEllipsis !== ellipsis && onEllipsis) {
          onEllipsis(ellipsis);
        }
      }
    }
  }, {
    key: "renderExpand",
    value: function renderExpand(forceRender) {
      var _this$getEllipsis4 = this.getEllipsis(),
          expandable = _this$getEllipsis4.expandable,
          symbol = _this$getEllipsis4.symbol;

      var _this$state2 = this.state,
          expanded = _this$state2.expanded,
          isEllipsis = _this$state2.isEllipsis;
      if (!expandable) return null; // force render expand icon for measure usage or it will cause dead loop

      if (!forceRender && (expanded || !isEllipsis)) return null;
      var expandContent;

      if (symbol) {
        expandContent = symbol;
      } else {
        expandContent = this.expandStr;
      }

      return /*#__PURE__*/React.createElement("a", {
        key: "expand",
        className: "".concat(this.getPrefixCls(), "-expand"),
        onClick: this.onExpandClick,
        "aria-label": this.expandStr
      }, expandContent);
    }
  }, {
    key: "renderEdit",
    value: function renderEdit() {
      var editable = this.props.editable;
      if (!editable) return;
      return /*#__PURE__*/React.createElement(_tooltip["default"], {
        key: "edit",
        title: this.editStr
      }, /*#__PURE__*/React.createElement(_transButton["default"], {
        ref: this.setEditRef,
        className: "".concat(this.getPrefixCls(), "-edit"),
        onClick: this.onEditClick,
        "aria-label": this.editStr
      }, /*#__PURE__*/React.createElement(_EditOutlined["default"], {
        role: "button"
      })));
    }
  }, {
    key: "renderCopy",
    value: function renderCopy() {
      var _a, _b;

      var copied = this.state.copied;
      var copyable = this.props.copyable;
      if (!copyable) return;
      var prefixCls = this.getPrefixCls();
      var title = copied ? ((_a = copyable.tooltips) === null || _a === void 0 ? void 0 : _a[1]) || this.copiedStr : ((_b = copyable.tooltips) === null || _b === void 0 ? void 0 : _b[0]) || this.copyStr;
      var ariaLabel = typeof title === 'string' ? title : '';
      return /*#__PURE__*/React.createElement(_tooltip["default"], {
        key: "copy",
        title: title
      }, /*#__PURE__*/React.createElement(_transButton["default"], {
        className: (0, _classnames["default"])("".concat(prefixCls, "-copy"), copied && "".concat(prefixCls, "-copy-success")),
        onClick: this.onCopyClick,
        "aria-label": ariaLabel
      }, copied ? /*#__PURE__*/React.createElement(_CheckOutlined["default"], null) : copyable.icon || /*#__PURE__*/React.createElement(_CopyOutlined["default"], null)));
    }
  }, {
    key: "renderEditInput",
    value: function renderEditInput() {
      var _this$props3 = this.props,
          children = _this$props3.children,
          className = _this$props3.className,
          style = _this$props3.style;
      var direction = this.context.direction;
      return /*#__PURE__*/React.createElement(_Editable["default"], {
        value: typeof children === 'string' ? children : '',
        onSave: this.onEditChange,
        onCancel: this.onEditCancel,
        prefixCls: this.getPrefixCls(),
        className: className,
        style: style,
        direction: direction
      });
    }
  }, {
    key: "renderOperations",
    value: function renderOperations(forceRenderExpanded) {
      return [this.renderExpand(forceRenderExpanded), this.renderEdit(), this.renderCopy()].filter(function (node) {
        return node;
      });
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var _this2 = this;

      var _this$state3 = this.state,
          ellipsisContent = _this$state3.ellipsisContent,
          isEllipsis = _this$state3.isEllipsis,
          expanded = _this$state3.expanded;

      var _a = this.props,
          component = _a.component,
          children = _a.children,
          className = _a.className,
          type = _a.type,
          disabled = _a.disabled,
          style = _a.style,
          restProps = __rest(_a, ["component", "children", "className", "type", "disabled", "style"]);

      var direction = this.context.direction;

      var _this$getEllipsis5 = this.getEllipsis(),
          rows = _this$getEllipsis5.rows,
          suffix = _this$getEllipsis5.suffix;

      var prefixCls = this.getPrefixCls();
      var textProps = (0, _omit["default"])(restProps, ['prefixCls', 'editable', 'copyable', 'ellipsis', 'mark', 'code', 'delete', 'underline', 'strong', 'keyboard'].concat((0, _toConsumableArray2["default"])(_configProvider.configConsumerProps)));
      var cssEllipsis = this.canUseCSSEllipsis();
      var cssTextOverflow = rows === 1 && cssEllipsis;
      var cssLineClamp = rows && rows > 1 && cssEllipsis;
      var textNode = children;
      var ariaLabel; // Only use js ellipsis when css ellipsis not support

      if (rows && isEllipsis && !expanded && !cssEllipsis) {
        var title = restProps.title;
        ariaLabel = title;

        if (!title && (typeof children === 'string' || typeof children === 'number')) {
          ariaLabel = String(children);
        } // We move full content to outer element to avoid repeat read the content by accessibility


        textNode = /*#__PURE__*/React.createElement("span", {
          title: ariaLabel,
          "aria-hidden": "true"
        }, ellipsisContent, ELLIPSIS_STR, suffix);
      } else {
        textNode = /*#__PURE__*/React.createElement(React.Fragment, null, children, suffix);
      }

      textNode = wrapperDecorations(this.props, textNode);
      return /*#__PURE__*/React.createElement(_LocaleReceiver["default"], {
        componentName: "Text"
      }, function (_ref4) {
        var _classNames;

        var edit = _ref4.edit,
            copyStr = _ref4.copy,
            copied = _ref4.copied,
            expand = _ref4.expand;
        _this2.editStr = edit;
        _this2.copyStr = copyStr;
        _this2.copiedStr = copied;
        _this2.expandStr = expand;
        return /*#__PURE__*/React.createElement(_rcResizeObserver["default"], {
          onResize: _this2.resizeOnNextFrame,
          disabled: !rows
        }, /*#__PURE__*/React.createElement(_Typography["default"], (0, _extends2["default"])({
          className: (0, _classnames["default"])(className, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(type), type), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-disabled"), disabled), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-ellipsis"), rows), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-ellipsis-single-line"), cssTextOverflow), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-ellipsis-multiple-line"), cssLineClamp), _classNames)),
          style: (0, _extends2["default"])((0, _extends2["default"])({}, style), {
            WebkitLineClamp: cssLineClamp ? rows : null
          }),
          component: component,
          ref: _this2.contentRef,
          "aria-label": ariaLabel,
          direction: direction
        }, textProps), textNode, _this2.renderOperations()));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$getEditable3 = this.getEditable(),
          editing = _this$getEditable3.editing;

      if (editing) {
        return this.renderEditInput();
      }

      return this.renderContent();
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      var children = nextProps.children,
          editable = nextProps.editable;
      (0, _devWarning["default"])(!editable || typeof children === 'string', 'Typography', 'When `editable` is enabled, the `children` should use string.');
      return {};
    }
  }]);
  return Base;
}(React.Component);

Base.contextType = _configProvider.ConfigContext;
Base.defaultProps = {
  children: ''
};
var _default = Base;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/typography/Editable.js":
/*!******************************************************!*\
  !*** ./node_modules/antd/lib/typography/Editable.js ***!
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

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/@babel/runtime/helpers/createSuper.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _KeyCode = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/KeyCode */ "./node_modules/rc-util/lib/KeyCode.js"));

var _EnterOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/EnterOutlined */ "./node_modules/@ant-design/icons/EnterOutlined.js"));

var _TextArea = _interopRequireDefault(__webpack_require__(/*! ../input/TextArea */ "./node_modules/antd/lib/input/TextArea.js"));

var Editable = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Editable, _React$Component);

  var _super = (0, _createSuper2["default"])(Editable);

  function Editable() {
    var _this;

    (0, _classCallCheck2["default"])(this, Editable);
    _this = _super.apply(this, arguments);
    _this.inComposition = false;
    _this.state = {
      current: ''
    };

    _this.onChange = function (_ref) {
      var value = _ref.target.value;

      _this.setState({
        current: value.replace(/[\n\r]/g, '')
      });
    };

    _this.onCompositionStart = function () {
      _this.inComposition = true;
    };

    _this.onCompositionEnd = function () {
      _this.inComposition = false;
    };

    _this.onKeyDown = function (_ref2) {
      var keyCode = _ref2.keyCode;
      // We don't record keyCode when IME is using
      if (_this.inComposition) return;
      _this.lastKeyCode = keyCode;
    };

    _this.onKeyUp = function (_ref3) {
      var keyCode = _ref3.keyCode,
          ctrlKey = _ref3.ctrlKey,
          altKey = _ref3.altKey,
          metaKey = _ref3.metaKey,
          shiftKey = _ref3.shiftKey;
      var onCancel = _this.props.onCancel; // Check if it's a real key

      if (_this.lastKeyCode === keyCode && !_this.inComposition && !ctrlKey && !altKey && !metaKey && !shiftKey) {
        if (keyCode === _KeyCode["default"].ENTER) {
          _this.confirmChange();
        } else if (keyCode === _KeyCode["default"].ESC) {
          onCancel();
        }
      }
    };

    _this.onBlur = function () {
      _this.confirmChange();
    };

    _this.confirmChange = function () {
      var current = _this.state.current;
      var onSave = _this.props.onSave;
      onSave(current.trim());
    };

    _this.setTextarea = function (textarea) {
      _this.textarea = textarea;
    };

    return _this;
  }

  (0, _createClass2["default"])(Editable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.textarea && this.textarea.resizableTextArea) {
        var textArea = this.textarea.resizableTextArea.textArea;
        textArea.focus();
        var length = textArea.value.length;
        textArea.setSelectionRange(length, length);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var current = this.state.current;
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          ariaLabel = _this$props['aria-label'],
          className = _this$props.className,
          style = _this$props.style,
          direction = _this$props.direction;
      var textAreaClassName = (0, _classnames["default"])(prefixCls, className, "".concat(prefixCls, "-edit-content"), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'));
      return /*#__PURE__*/React.createElement("div", {
        className: textAreaClassName,
        style: style
      }, /*#__PURE__*/React.createElement(_TextArea["default"], {
        ref: this.setTextarea,
        value: current,
        onChange: this.onChange,
        onKeyDown: this.onKeyDown,
        onKeyUp: this.onKeyUp,
        onCompositionStart: this.onCompositionStart,
        onCompositionEnd: this.onCompositionEnd,
        onBlur: this.onBlur,
        "aria-label": ariaLabel,
        autoSize: true
      }), /*#__PURE__*/React.createElement(_EnterOutlined["default"], {
        className: "".concat(prefixCls, "-edit-content-confirm")
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var prevValue = prevState.prevValue;
      var value = nextProps.value;
      var newState = {
        prevValue: value
      };

      if (prevValue !== value) {
        newState.current = value;
      }

      return newState;
    }
  }]);
  return Editable;
}(React.Component);

var _default = Editable;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/typography/Link.js":
/*!**************************************************!*\
  !*** ./node_modules/antd/lib/typography/Link.js ***!
  \**************************************************/
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

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _devWarning = _interopRequireDefault(__webpack_require__(/*! ../_util/devWarning */ "./node_modules/antd/lib/_util/devWarning.js"));

var _Base = _interopRequireDefault(__webpack_require__(/*! ./Base */ "./node_modules/antd/lib/typography/Base.js"));

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

var Link = function Link(_a, ref) {
  var ellipsis = _a.ellipsis,
      rel = _a.rel,
      restProps = __rest(_a, ["ellipsis", "rel"]);

  (0, _devWarning["default"])((0, _typeof2["default"])(ellipsis) !== 'object', 'Typography.Link', '`ellipsis` only supports boolean value.');
  var baseRef = React.useRef(null);
  React.useImperativeHandle(ref, function () {
    var _a;

    return (_a = baseRef.current) === null || _a === void 0 ? void 0 : _a.contentRef.current;
  });
  var mergedProps = (0, _extends2["default"])((0, _extends2["default"])({}, restProps), {
    rel: rel === undefined && restProps.target === '_blank' ? 'noopener noreferrer' : rel
  });
  return /*#__PURE__*/React.createElement(_Base["default"], (0, _extends2["default"])({}, mergedProps, {
    ref: baseRef,
    ellipsis: !!ellipsis,
    component: "a"
  }));
};

var _default = /*#__PURE__*/React.forwardRef(Link);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/typography/Paragraph.js":
/*!*******************************************************!*\
  !*** ./node_modules/antd/lib/typography/Paragraph.js ***!
  \*******************************************************/
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

var _Base = _interopRequireDefault(__webpack_require__(/*! ./Base */ "./node_modules/antd/lib/typography/Base.js"));

var Paragraph = function Paragraph(props) {
  return /*#__PURE__*/React.createElement(_Base["default"], (0, _extends2["default"])({}, props, {
    component: "div"
  }));
};

var _default = Paragraph;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/typography/Text.js":
/*!**************************************************!*\
  !*** ./node_modules/antd/lib/typography/Text.js ***!
  \**************************************************/
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

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _devWarning = _interopRequireDefault(__webpack_require__(/*! ../_util/devWarning */ "./node_modules/antd/lib/_util/devWarning.js"));

var _Base = _interopRequireDefault(__webpack_require__(/*! ./Base */ "./node_modules/antd/lib/typography/Base.js"));

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

var Text = function Text(_a) {
  var ellipsis = _a.ellipsis,
      restProps = __rest(_a, ["ellipsis"]);

  (0, _devWarning["default"])((0, _typeof2["default"])(ellipsis) !== 'object', 'Typography.Text', '`ellipsis` only supports boolean value.');
  return /*#__PURE__*/React.createElement(_Base["default"], (0, _extends2["default"])({}, restProps, {
    ellipsis: !!ellipsis,
    component: "span"
  }));
};

var _default = Text;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/typography/Title.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/typography/Title.js ***!
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

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _devWarning = _interopRequireDefault(__webpack_require__(/*! ../_util/devWarning */ "./node_modules/antd/lib/_util/devWarning.js"));

var _Base = _interopRequireDefault(__webpack_require__(/*! ./Base */ "./node_modules/antd/lib/typography/Base.js"));

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

var TITLE_ELE_LIST = (0, _type.tupleNum)(1, 2, 3, 4);

var Title = function Title(props) {
  var _props$level = props.level,
      level = _props$level === void 0 ? 1 : _props$level,
      restProps = __rest(props, ["level"]);

  var component;

  if (TITLE_ELE_LIST.indexOf(level) !== -1) {
    component = "h".concat(level);
  } else {
    (0, _devWarning["default"])(false, 'Typography.Title', 'Title only accept `1 | 2 | 3 | 4` as `level` value.');
    component = 'h1';
  }

  return /*#__PURE__*/React.createElement(_Base["default"], (0, _extends2["default"])({}, restProps, {
    component: component
  }));
};

var _default = Title;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/typography/Typography.js":
/*!********************************************************!*\
  !*** ./node_modules/antd/lib/typography/Typography.js ***!
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

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _devWarning = _interopRequireDefault(__webpack_require__(/*! ../_util/devWarning */ "./node_modules/antd/lib/_util/devWarning.js"));

var _ref2 = __webpack_require__(/*! ../_util/ref */ "./node_modules/antd/lib/_util/ref.js");

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

var Typography = function Typography(_a, ref) {
  var customizePrefixCls = _a.prefixCls,
      _a$component = _a.component,
      component = _a$component === void 0 ? 'article' : _a$component,
      className = _a.className,
      ariaLabel = _a['aria-label'],
      setContentRef = _a.setContentRef,
      children = _a.children,
      restProps = __rest(_a, ["prefixCls", "component", "className", 'aria-label', "setContentRef", "children"]);

  var mergedRef = ref;

  if (setContentRef) {
    (0, _devWarning["default"])(false, 'Typography', '`setContentRef` is deprecated. Please use `ref` instead.');
    mergedRef = (0, _ref2.composeRef)(ref, setContentRef);
  }

  return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, function (_ref) {
    var getPrefixCls = _ref.getPrefixCls,
        direction = _ref.direction;
    var Component = component;
    var prefixCls = getPrefixCls('typography', customizePrefixCls);
    var componentClassName = (0, _classnames["default"])(prefixCls, className, (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'));
    return /*#__PURE__*/React.createElement(Component, (0, _extends2["default"])({
      className: componentClassName,
      "aria-label": ariaLabel,
      ref: mergedRef
    }, restProps), children);
  });
};

var RefTypography = /*#__PURE__*/React.forwardRef(Typography);
RefTypography.displayName = 'Typography'; // es default export should use const instead of let

var ExportTypography = RefTypography;
var _default = ExportTypography;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/typography/index.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/typography/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Typography = _interopRequireDefault(__webpack_require__(/*! ./Typography */ "./node_modules/antd/lib/typography/Typography.js"));

var _Text = _interopRequireDefault(__webpack_require__(/*! ./Text */ "./node_modules/antd/lib/typography/Text.js"));

var _Link = _interopRequireDefault(__webpack_require__(/*! ./Link */ "./node_modules/antd/lib/typography/Link.js"));

var _Title = _interopRequireDefault(__webpack_require__(/*! ./Title */ "./node_modules/antd/lib/typography/Title.js"));

var _Paragraph = _interopRequireDefault(__webpack_require__(/*! ./Paragraph */ "./node_modules/antd/lib/typography/Paragraph.js"));

var Typography = _Typography["default"];
Typography.Text = _Text["default"];
Typography.Link = _Link["default"];
Typography.Title = _Title["default"];
Typography.Paragraph = _Paragraph["default"];
var _default = Typography;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/typography/util.js":
/*!**************************************************!*\
  !*** ./node_modules/antd/lib/typography/util.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _toArray = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/Children/toArray */ "./node_modules/rc-util/lib/Children/toArray.js"));

// We only handle element & text node.
var ELEMENT_NODE = 1;
var TEXT_NODE = 3;
var COMMENT_NODE = 8;
var ellipsisContainer;
var wrapperStyle = {
  padding: 0,
  margin: 0,
  display: 'inline',
  lineHeight: 'inherit'
};

function pxToNumber(value) {
  if (!value) return 0;
  var match = value.match(/^\d*(\.\d*)?/);
  return match ? Number(match[0]) : 0;
}

function styleToString(style) {
  // There are some different behavior between Firefox & Chrome.
  // We have to handle this ourself.
  var styleNames = Array.prototype.slice.apply(style);
  return styleNames.map(function (name) {
    return "".concat(name, ": ").concat(style.getPropertyValue(name), ";");
  }).join('');
}

function mergeChildren(children) {
  var childList = [];
  children.forEach(function (child) {
    var prevChild = childList[childList.length - 1];

    if (typeof child === 'string' && typeof prevChild === 'string') {
      childList[childList.length - 1] += child;
    } else {
      childList.push(child);
    }
  });
  return childList;
}

var _default = function _default(originEle, option, content, fixedContent, ellipsisStr) {
  if (!ellipsisContainer) {
    ellipsisContainer = document.createElement('div');
    ellipsisContainer.setAttribute('aria-hidden', 'true');
    document.body.appendChild(ellipsisContainer);
  }

  var rows = option.rows,
      _option$suffix = option.suffix,
      suffix = _option$suffix === void 0 ? '' : _option$suffix; // Get origin style

  var originStyle = window.getComputedStyle(originEle);
  var originCSS = styleToString(originStyle);
  var lineHeight = pxToNumber(originStyle.lineHeight);
  var maxHeight = Math.round(lineHeight * (rows + 1) + pxToNumber(originStyle.paddingTop) + pxToNumber(originStyle.paddingBottom)); // Set shadow

  ellipsisContainer.setAttribute('style', originCSS);
  ellipsisContainer.style.position = 'fixed';
  ellipsisContainer.style.left = '0';
  ellipsisContainer.style.height = 'auto';
  ellipsisContainer.style.minHeight = 'auto';
  ellipsisContainer.style.maxHeight = 'auto';
  ellipsisContainer.style.top = '-999999px';
  ellipsisContainer.style.zIndex = '-1000'; // clean up css overflow

  ellipsisContainer.style.textOverflow = 'clip';
  ellipsisContainer.style.whiteSpace = 'normal';
  ellipsisContainer.style.webkitLineClamp = 'none'; // Render in the fake container

  var contentList = mergeChildren((0, _toArray["default"])(content));
  (0, _reactDom.render)( /*#__PURE__*/React.createElement("div", {
    style: wrapperStyle
  }, /*#__PURE__*/React.createElement("span", {
    style: wrapperStyle
  }, contentList, suffix), /*#__PURE__*/React.createElement("span", {
    style: wrapperStyle
  }, fixedContent)), ellipsisContainer); // wrap in an div for old version react
  // Check if ellipsis in measure div is height enough for content

  function inRange() {
    return ellipsisContainer.offsetHeight < maxHeight;
  } // Skip ellipsis if already match


  if (inRange()) {
    (0, _reactDom.unmountComponentAtNode)(ellipsisContainer);
    return {
      content: content,
      text: ellipsisContainer.innerHTML,
      ellipsis: false
    };
  } // We should clone the childNode since they're controlled by React and we can't reuse it without warning


  var childNodes = Array.prototype.slice.apply(ellipsisContainer.childNodes[0].childNodes[0].cloneNode(true).childNodes).filter(function (_ref) {
    var nodeType = _ref.nodeType;
    return nodeType !== COMMENT_NODE;
  });
  var fixedNodes = Array.prototype.slice.apply(ellipsisContainer.childNodes[0].childNodes[1].cloneNode(true).childNodes);
  (0, _reactDom.unmountComponentAtNode)(ellipsisContainer); // ========================= Find match ellipsis content =========================

  var ellipsisChildren = [];
  ellipsisContainer.innerHTML = ''; // Create origin content holder

  var ellipsisContentHolder = document.createElement('span');
  ellipsisContainer.appendChild(ellipsisContentHolder);
  var ellipsisTextNode = document.createTextNode(ellipsisStr + suffix);
  ellipsisContentHolder.appendChild(ellipsisTextNode);
  fixedNodes.forEach(function (childNode) {
    ellipsisContainer.appendChild(childNode);
  }); // Append before fixed nodes

  function appendChildNode(node) {
    ellipsisContentHolder.insertBefore(node, ellipsisTextNode);
  } // Get maximum text


  function measureText(textNode, fullText) {
    var startLoc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var endLoc = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : fullText.length;
    var lastSuccessLoc = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var midLoc = Math.floor((startLoc + endLoc) / 2);
    var currentText = fullText.slice(0, midLoc);
    textNode.textContent = currentText;

    if (startLoc >= endLoc - 1) {
      // Loop when step is small
      for (var step = endLoc; step >= startLoc; step -= 1) {
        var currentStepText = fullText.slice(0, step);
        textNode.textContent = currentStepText;

        if (inRange() || !currentStepText) {
          return step === fullText.length ? {
            finished: false,
            reactNode: fullText
          } : {
            finished: true,
            reactNode: currentStepText
          };
        }
      }
    }

    if (inRange()) {
      return measureText(textNode, fullText, midLoc, endLoc, midLoc);
    }

    return measureText(textNode, fullText, startLoc, midLoc, lastSuccessLoc);
  }

  function measureNode(childNode, index) {
    var type = childNode.nodeType;

    if (type === ELEMENT_NODE) {
      // We don't split element, it will keep if whole element can be displayed.
      appendChildNode(childNode);

      if (inRange()) {
        return {
          finished: false,
          reactNode: contentList[index]
        };
      } // Clean up if can not pull in


      ellipsisContentHolder.removeChild(childNode);
      return {
        finished: true,
        reactNode: null
      };
    }

    if (type === TEXT_NODE) {
      var fullText = childNode.textContent || '';
      var textNode = document.createTextNode(fullText);
      appendChildNode(textNode);
      return measureText(textNode, fullText);
    } // Not handle other type of content
    // PS: This code should not be attached after react 16


    return {
      finished: false,
      reactNode: null
    };
  }

  childNodes.some(function (childNode, index) {
    var _measureNode = measureNode(childNode, index),
        finished = _measureNode.finished,
        reactNode = _measureNode.reactNode;

    if (reactNode) {
      ellipsisChildren.push(reactNode);
    }

    return finished;
  });
  return {
    content: ellipsisChildren,
    text: ellipsisContainer.innerHTML,
    ellipsis: true
  };
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/rc-util/lib/Dom/findDOMNode.js":
/*!*****************************************************!*\
  !*** ./node_modules/rc-util/lib/Dom/findDOMNode.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = findDOMNode;

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Return if a node is a DOM node. Else will return by `findDOMNode`
 */
function findDOMNode(node) {
  if (node instanceof HTMLElement) {
    return node;
  }

  return _reactDom.default.findDOMNode(node);
}

/***/ })

}]);