(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

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

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./resources/js/Pages/Dashboard/environ/EnvironsList.js":
/*!**************************************************************!*\
  !*** ./resources/js/Pages/Dashboard/environ/EnvironsList.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /var/www/html/at-school/resources/js/Pages/Dashboard/environ/EnvironsList.js: Unexpected token (107:62)\n\n\u001b[0m \u001b[90m 105 | \u001b[39m                                        trigger\u001b[33m=\u001b[39m\u001b[32m\"click\"\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 106 | \u001b[39m                                    \u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 107 | \u001b[39m                                        \u001b[33m<\u001b[39m\u001b[33mButton\u001b[39m\u001b[33m>\u001b[39m\u001b[33m<\u001b[39m\u001b[33mEditOutlined\u001b[39m \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mButton\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m     | \u001b[39m                                                              \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 108 | \u001b[39m                                    \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mPopOver\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 109 | \u001b[39m                                    \u001b[33m<\u001b[39m\u001b[33mPopConfirm\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 110 | \u001b[39m                                        placement\u001b[33m=\u001b[39m\u001b[32m\"leftTop\"\u001b[39m\u001b[0m\n    at Object._raise (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:766:17)\n    at Object.raiseWithData (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:759:17)\n    at Object.raise (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:753:17)\n    at Object.unexpected (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:8966:16)\n    at Object.jsxParseIdentifier (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:4492:12)\n    at Object.jsxParseNamespacedName (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:4502:23)\n    at Object.jsxParseAttribute (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:4586:22)\n    at Object.jsxParseOpeningElementAfterName (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:4607:28)\n    at Object.jsxParseOpeningElementAt (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:4600:17)\n    at Object.jsxParseElementAt (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:4632:33)\n    at Object.jsxParseElementAt (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:4648:32)\n    at Object.jsxParseElementAt (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:4648:32)\n    at Object.jsxParseElementAt (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:4648:32)\n    at Object.jsxParseElement (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:4706:17)\n    at Object.parseExprAtom (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:4713:19)\n    at Object.parseExprSubscripts (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:9844:23)\n    at Object.parseUpdate (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:9824:21)\n    at Object.parseMaybeUnary (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:9813:17)\n    at Object.parseExprOps (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:9683:23)\n    at Object.parseMaybeConditional (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:9657:23)\n    at Object.parseMaybeAssign (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:9620:21)\n    at /var/www/html/at-school/node_modules/@babel/parser/lib/index.js:9586:39\n    at Object.allowInAnd (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:11302:12)\n    at Object.parseMaybeAssignAllowIn (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:9586:17)\n    at Object.parseParenAndDistinguishExpression (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:10473:28)\n    at Object.parseExprAtom (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:10177:21)\n    at Object.parseExprAtom (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:4718:20)\n    at Object.parseExprSubscripts (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:9844:23)\n    at Object.parseUpdate (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:9824:21)\n    at Object.parseMaybeUnary (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:9813:17)\n    at Object.parseExprOps (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:9683:23)\n    at Object.parseMaybeConditional (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:9657:23)\n    at Object.parseMaybeAssign (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:9620:21)\n    at /var/www/html/at-school/node_modules/@babel/parser/lib/index.js:9586:39\n    at Object.allowInAnd (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:11302:12)\n    at Object.parseMaybeAssignAllowIn (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:9586:17)");

/***/ }),

/***/ "./resources/js/Pages/Dashboard/organization/OrganizationForm.js":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/Dashboard/organization/OrganizationForm.js ***!
  \***********************************************************************/
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







var OrganizationForm = function OrganizationForm(_ref) {
  var loading = _ref.loading,
      onFinish = _ref.onFinish,
      OrgForm = _ref.OrgForm,
      edit = _ref.edit;

  var _usePage = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["usePage"])(),
      errors = _usePage.errors;

  var _Form$useForm = antd__WEBPACK_IMPORTED_MODULE_4__["Form"].useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  Object(react_use__WEBPACK_IMPORTED_MODULE_2__["useEffectOnce"])(function () {});
  edit && form.setFieldsValue({
    name: edit.name,
    address: edit.address,
    id: edit.id
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    ref: OrgForm,
    name: "normal_login",
    className: "login-form",
    onFinish: onFinish,
    form: form
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
    name: "name",
    rules: [{
      required: true,
      message: "Please input Organization Name!"
    }],
    validateStatus: errors.name && "error",
    help: errors.name && errors.name[0]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    placeholder: "Organization Name"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
    name: "address",
    rules: [{
      required: true,
      message: "Please input Address!"
    }],
    validateStatus: errors.address && "error",
    help: errors.address && errors.address[0]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Input"].TextArea, {
    allowClear: true,
    rows: 3,
    placeholder: "Organization Address"
  })), edit && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
    name: "id",
    hidden: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    type: "primary",
    htmlType: "submit",
    className: "login-form-button",
    loading: loading
  }, "Save")));
};

/* harmony default export */ __webpack_exports__["default"] = (OrganizationForm);

/***/ }),

/***/ "./resources/js/Pages/Dashboard/organization/OrganizationsList.js":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/Dashboard/organization/OrganizationsList.js ***!
  \************************************************************************/
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
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/divider */ "./node_modules/antd/lib/divider/index.js");
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/typography */ "./node_modules/antd/lib/typography/index.js");
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _OrganizationForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./OrganizationForm */ "./resources/js/Pages/Dashboard/organization/OrganizationForm.js");
/* harmony import */ var _Pages_Dashboard_environ_EnvironsList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/Pages/Dashboard/environ/EnvironsList */ "./resources/js/Pages/Dashboard/environ/EnvironsList.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













var OrganizationsList = function OrganizationsList(_ref) {
  var _React$createElement;

  var organizations = _ref.organizations;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var OrgForm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var onFinish = function onFinish(data) {
    setLoading(true);
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__["Inertia"].patch(route("organization.edit", {
      organization: data.id
    }), data).then(function (res) {
      setLoading(false);
    });
  };

  var formProps = {
    loading: loading,
    onFinish: onFinish,
    OrgForm: OrgForm
  };
  organizations = organizations.map(function (organization, key) {
    organization.key = "org-".concat(key);
    return organization;
  });
  var townfilters = [//TODO Display Environs in collapse menu under Table
  //! in production, get towns entered by students and reduce duplicates to use here.
  {
    text: "Ogun",
    value: "Ogun"
  }, {
    text: "Lagos",
    value: "Lagos"
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, organizations.length !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_table__WEBPACK_IMPORTED_MODULE_2___default.a, {
    scroll: {
      x: 600
    },
    style: {
      marginTop: "10px"
    },
    bordered: true,
    dataSource: organizations,
    size: "small",
    pagination: {
      hideOnSinglePage: true,
      defaultPageSize: 3,
      showQuickJumper: true,
      showSizeChanger: true,
      showTotal: function showTotal(total, range) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, total, " Organization", total !== 1 && "s");
      }
    },
    expandable: {
      expandedRowRender: function expandedRowRender(record) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_divider__WEBPACK_IMPORTED_MODULE_7___default.a, {
          orientation: "left"
        }, record.environs.length, " Environ", record.environs.length !== 1 && "s"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_Dashboard_environ_EnvironsList__WEBPACK_IMPORTED_MODULE_10__["default"], {
          environs: record.environs
        }));
      },
      rowExpandable: function rowExpandable(record) {
        return record.environs && record.environs.length !== 0;
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_table__WEBPACK_IMPORTED_MODULE_2___default.a.Column, {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: function render(text) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, text);
    },
    onFilter: function onFilter(value, record) {
      return record.name.indexOf(value) === 0;
    },
    sorter: function sorter(a, b) {
      return a.name === b.name ? 0 : a.name < b.name ? -1 : 1;
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_table__WEBPACK_IMPORTED_MODULE_2___default.a.Column, (_React$createElement = {
    title: "Address",
    dataIndex: "address",
    key: "address",
    onFilter: function onFilter(value, record) {
      return record.name.indexOf(value) === 0;
    },
    sorter: function sorter(a, b) {
      return a.address === b.address ? 0 : a.address < b.address ? -1 : 1;
    }
  }, _defineProperty(_React$createElement, "onFilter", function onFilter(value, record) {
    return record.address.toLowerCase().includes(value.toLocaleLowerCase());
  }), _defineProperty(_React$createElement, "filterMultiple", false), _defineProperty(_React$createElement, "filters", townfilters), _React$createElement)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_table__WEBPACK_IMPORTED_MODULE_2___default.a.Column, {
    title: "Code",
    dataIndex: "code",
    key: "code",
    render: function render(text, record) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_typography__WEBPACK_IMPORTED_MODULE_8___default.a.Paragraph, {
        copyable: true
      }, text);
    }
  }), window.location.pathname === "/organization" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_table__WEBPACK_IMPORTED_MODULE_2___default.a.Column, {
    width: 200,
    fixed: "right",
    title: "Action",
    key: "action",
    render: function render(text, record) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_space__WEBPACK_IMPORTED_MODULE_5___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_popover__WEBPACK_IMPORTED_MODULE_3___default.a, {
        placement: "leftTop",
        title: "Edit ".concat(record.name),
        content: function content() {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OrganizationForm__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({
            edit: record
          }, formProps));
        },
        trigger: "click"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_6___default.a, null, "Edit")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_4___default.a, {
        placement: "leftTop",
        title: "Generate new ".concat(record.name, " code?"),
        onConfirm: function onConfirm() {
          setLoading(true);
          _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__["Inertia"].patch(route("organization.change_code", {
            organization: record.id
          })).then(function () {
            return setLoading(false);
          });
        },
        okText: "Generate",
        trigger: "click"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_6___default.a, {
        loading: loading
      }, "Change Code")));
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (OrganizationsList);

/***/ })

}]);