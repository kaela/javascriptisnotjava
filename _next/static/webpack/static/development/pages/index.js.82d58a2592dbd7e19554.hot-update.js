webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _theme_theme_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme/theme.js */ "./theme/theme.js");
var _jsxFileName = "/Users/kaela/Sites/javascriptisnotjava/components/header.js";

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  &:first-of-type {\n    float: left;\n  }\n\n  &:last-of-type {\n    float: right;\n  }\n\n  & a {\n    ", ";\n    color: ", ";\n    font-size: 20px;\n    text-decoration: none;\n    border-bottom: 1px solid ", ";\n    transition: color 150ms ease-in-out, border 150ms ease-in-out;\n\n    &:hover {\n      border-color: ", ";\n      color: ", ";\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 40px;\n  height: 40px;\n\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -20px;\n  margin-left: -20px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  box-sizing: border-box;\n  height: 100%;\n  position: relative;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  height: ", "px;\n  ", ";\n  line-height: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].header(_templateObject(), _theme_theme_js__WEBPACK_IMPORTED_MODULE_3__["PrimaryText"], _theme_theme_js__WEBPACK_IMPORTED_MODULE_3__["NavHeight"], ""
/* Accommodate bottom border */
, _theme_theme_js__WEBPACK_IMPORTED_MODULE_3__["NavHeight"] - 3);
var Nav = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].nav(_templateObject2(), _theme_theme_js__WEBPACK_IMPORTED_MODULE_3__["Container"]());
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img(_templateObject3());
var HeaderLinkStyled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject4(), _theme_theme_js__WEBPACK_IMPORTED_MODULE_3__["FontFancy"](), _theme_theme_js__WEBPACK_IMPORTED_MODULE_3__["Background"], _theme_theme_js__WEBPACK_IMPORTED_MODULE_3__["Background"], _theme_theme_js__WEBPACK_IMPORTED_MODULE_3__["PrimaryColor"], _theme_theme_js__WEBPACK_IMPORTED_MODULE_3__["PrimaryColor"]);

var HeaderLink = function HeaderLink(_ref) {
  var href = _ref.href,
      title = _ref.title;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderLinkStyled, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    title: title,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, title)));
};

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Nav, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderLink, {
    href: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript",
    title: "What is JavaScript?",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Logo, {
    src: "static/assets/logo.svg",
    alt: "JavaScript is not Java logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), ";", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderLink, {
    href: "https://java.com/en/download/faq/whatis_java.xml",
    title: "What is Java?",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.82d58a2592dbd7e19554.hot-update.js.map