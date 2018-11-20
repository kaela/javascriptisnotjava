module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/about.js":
/*!*****************************!*\
  !*** ./components/about.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/kaela/Sites/javascriptisnotjava/components/about.js";


var About = function About() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "This may be difficult for some of you to accept, but JavaScript is not Java."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Yes, indeed, both languages belong to the programming world. However, aside from this apparently confusing similarity, the two languages could not be further from the same thing. Back in 2009, web developer Jeremy Keith so", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://adactio.com/journal/1595",
    title: "read this great article on differences between java and javascript",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "poignantly pointed out"), ", \"Java is to JavaScript as ham is to hamster.\"", " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "The confusion on these two words is a widely discussed and bemusing topic. \"Technical\" recruiters seem so confident that the two words are synonymous, they routinely attempt recruiting developers for the wrong field. Perhaps it's because both words utilize \"java\" in their titles."));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./components/anchor.js":
/*!******************************!*\
  !*** ./components/anchor.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme_theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme/theme.js */ "./theme/theme.js");
var _jsxFileName = "/Users/kaela/Sites/javascriptisnotjava/components/anchor.js";

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  color: ", ";\n  font-size: 5rem;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  font-size: 50px;\n  font-weight: 700;\n  margin-bottom: ", "px;\n  position: relative;\n  text-align: center;\n  z-index: 1;\n\n  &:before {\n    box-sizing: border-box;\n    border-top: 5px solid ", ";\n    content: \"\";\n    margin: 5px auto 0;\n    position: absolute;\n    top: 50%;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    z-index: -1;\n  }\n\n  & > span {\n    background: ", ";\n    padding: 0 30px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  padding: 30px 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1(_templateObject(), _theme_theme_js__WEBPACK_IMPORTED_MODULE_2__["Container"]());
var FancyFont = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2(), _theme_theme_js__WEBPACK_IMPORTED_MODULE_2__["FontFancy"](), _theme_theme_js__WEBPACK_IMPORTED_MODULE_2__["Padding"], _theme_theme_js__WEBPACK_IMPORTED_MODULE_2__["PrimaryColor"], _theme_theme_js__WEBPACK_IMPORTED_MODULE_2__["Background"]);
var NormalFont = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject3(), _theme_theme_js__WEBPACK_IMPORTED_MODULE_2__["FontHeader"](), _theme_theme_js__WEBPACK_IMPORTED_MODULE_2__["PrimaryColor"]);

var Anchor = function Anchor() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FancyFont, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "javascript")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NormalFont, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "IS NOT"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FancyFont, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "java")));
};

/* harmony default export */ __webpack_exports__["default"] = (Anchor);

/***/ }),

/***/ "./components/comments.js":
/*!********************************!*\
  !*** ./components/comments.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_disqus_comments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-disqus-comments */ "react-disqus-comments");
/* harmony import */ var react_disqus_comments__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_disqus_comments__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/kaela/Sites/javascriptisnotjava/components/comments.js";



var handleNewComment = function handleNewComment(comment) {
  console.log(comment.text);
};

var Comments = function Comments() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Have any Questions?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_disqus_comments__WEBPACK_IMPORTED_MODULE_1___default.a, {
    shortname: "javascriptisnotjava",
    identifier: "thread",
    title: "Comments",
    url: "http://javascriptisnotjava.io",
    onNewComment: handleNewComment,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Comments);

/***/ }),

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _theme_theme_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme/theme.js */ "./theme/theme.js");
var _jsxFileName = "/Users/kaela/Sites/javascriptisnotjava/components/footer.js";

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  margin-top: ", "px;\n  & img {\n    background-color: ", ";\n    margin: ", "px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-size: 16px;\n  font-style: italic;\n  margin: 0 auto ", "px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  color: ", ";\n  height: ", "px;\n  ", ";\n  line-height: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.header(_templateObject(), _theme_theme_js__WEBPACK_IMPORTED_MODULE_3__["PrimaryText"], _theme_theme_js__WEBPACK_IMPORTED_MODULE_3__["Background"], _theme_theme_js__WEBPACK_IMPORTED_MODULE_3__["NavHeight"], ""
/* Accommodate bottom border */
, _theme_theme_js__WEBPACK_IMPORTED_MODULE_3__["NavHeight"] - 3);
var Content = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2(), _theme_theme_js__WEBPACK_IMPORTED_MODULE_3__["Container"]());
var P = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p(_templateObject3(), _theme_theme_js__WEBPACK_IMPORTED_MODULE_3__["Padding"] * 2);
var SocialIcons = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject4(), _theme_theme_js__WEBPACK_IMPORTED_MODULE_3__["Padding"], _theme_theme_js__WEBPACK_IMPORTED_MODULE_3__["PrimaryColor"], _theme_theme_js__WEBPACK_IMPORTED_MODULE_3__["Padding"] / 2);

var SocialLink = function SocialLink(_ref) {
  var href = _ref.href,
      title = _ref.title,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    title: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, children));
};

var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SocialIcons, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SocialLink, {
    href: "http://linkedin.com/in/kaelanichols",
    title: "linkedin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/assets/linkedin.svg",
    alt: "LinkedIn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SocialLink, {
    href: "http://github.com/kaela",
    title: "github",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/assets/github.svg",
    alt: "github",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(P, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "javascriptisnotjava.io reserves the right to remove any content for any reason at any time. Because it's my site, and I can.")));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
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





var Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.header(_templateObject(), _theme_theme_js__WEBPACK_IMPORTED_MODULE_3__["PrimaryText"], _theme_theme_js__WEBPACK_IMPORTED_MODULE_3__["NavHeight"], ""
/* Accommodate bottom border */
, _theme_theme_js__WEBPACK_IMPORTED_MODULE_3__["NavHeight"] - 3);
var Nav = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.nav(_templateObject2(), _theme_theme_js__WEBPACK_IMPORTED_MODULE_3__["Container"]());
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img(_templateObject3());
var HeaderLinkStyled = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject4(), _theme_theme_js__WEBPACK_IMPORTED_MODULE_3__["FontFancy"](), _theme_theme_js__WEBPACK_IMPORTED_MODULE_3__["Background"], _theme_theme_js__WEBPACK_IMPORTED_MODULE_3__["Background"], _theme_theme_js__WEBPACK_IMPORTED_MODULE_3__["PrimaryColor"], _theme_theme_js__WEBPACK_IMPORTED_MODULE_3__["PrimaryColor"]);

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
    src: "/static/assets/logo.svg",
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

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _theme_theme_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme/theme.js */ "./theme/theme.js");
/* harmony import */ var _components_header_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/header.js */ "./components/header.js");
/* harmony import */ var _components_anchor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/anchor.js */ "./components/anchor.js");
/* harmony import */ var _components_about_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/about.js */ "./components/about.js");
/* harmony import */ var _components_comments_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/comments.js */ "./components/comments.js");
/* harmony import */ var _components_footer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/footer.js */ "./components/footer.js");
var _jsxFileName = "/Users/kaela/Sites/javascriptisnotjava/pages/index.js";


function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  margin-bottom: ", "px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  html {\n    background: ", ";\n  }\n\n  body {\n    ", ";\n    background: ", ";\n    color: ", ";\n    font-size: 20px;\n    margin: 0;\n    min-width: ", "px;\n    text-align: center;\n  }\n\n  img {\n    vertical-align: top;\n  }\n\n  a {\n    color: ", ";\n    text-decoration: none;\n  }\n\n  h2 {\n    ", ";\n    font-size: 24px;\n  }\n\n  p {\n    line-height: normal;\n    margin: 0;\n    padding: 0;\n\n    & + p {\n      margin-top: ", "px;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






 // import Comparisons from "../components/comparisons.js";



var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["createGlobalStyle"])(_templateObject(), _theme_theme_js__WEBPACK_IMPORTED_MODULE_3__["PrimaryText"], _theme_theme_js__WEBPACK_IMPORTED_MODULE_3__["FontFamily"](), _theme_theme_js__WEBPACK_IMPORTED_MODULE_3__["Background"], _theme_theme_js__WEBPACK_IMPORTED_MODULE_3__["PrimaryText"], _theme_theme_js__WEBPACK_IMPORTED_MODULE_3__["PhoneWidth"], _theme_theme_js__WEBPACK_IMPORTED_MODULE_3__["PrimaryColor"], _theme_theme_js__WEBPACK_IMPORTED_MODULE_3__["FontHeader"](), _theme_theme_js__WEBPACK_IMPORTED_MODULE_3__["Padding"] * 3);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject2(), _theme_theme_js__WEBPACK_IMPORTED_MODULE_3__["Container"](), _theme_theme_js__WEBPACK_IMPORTED_MODULE_3__["Padding"] * 6);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GlobalStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "JavaScript is not Java - A funny comparison of JavaScript and Java")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_header_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_anchor_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_about_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_comments_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_footer_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  })));
});

/***/ }),

/***/ "./theme/theme.js":
/*!************************!*\
  !*** ./theme/theme.js ***!
  \************************/
/*! exports provided: FontFamily, FontHeader, FontFancy, PhoneWidth, MaxWidth, Background, PrimaryColor, PrimaryText, SecondaryText, Padding, NavHeight, Touch, Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontFamily", function() { return FontFamily; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontHeader", function() { return FontHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontFancy", function() { return FontFancy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneWidth", function() { return PhoneWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxWidth", function() { return MaxWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Background", function() { return Background; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimaryColor", function() { return PrimaryColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimaryText", function() { return PrimaryText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondaryText", function() { return SecondaryText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Padding", function() { return Padding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavHeight", function() { return NavHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Touch", function() { return Touch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
function FontFamily() {
  return "\n    font-family: 'EB Garamond', serif;\n    font-weight: 400;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  ";
}
function FontHeader() {
  return "\n    font-family: 'Oswald', sans-serif;\n    -webkit-font-smoothing: antialiased;\n\t  -moz-osx-font-smoothing: grayscale;\n    font-weight: 700;\n  ";
}
function FontFancy() {
  return "\n    font-family: 'Dancing Script', cursive;\n    -webkit-font-smoothing: antialiased;\n\t  -moz-osx-font-smoothing: grayscale;\n    font-weight: 400;\n  ";
}
/*-----------------------------------------
  Breakpoint Variables
------------------------------------------*/

var PhoneWidth = 320;
var MaxWidth = 740;
/*-----------------------------------------
  Color Variables
------------------------------------------*/

var Background = "#333333";
var PrimaryColor = "#37BC97";
var PrimaryText = "#FFFFFF";
var SecondaryText = "#999999";
/*-----------------------------------------
  Size Variables
------------------------------------------*/

var Padding = 10;
var NavHeight = 50;
var Touch = 40;
/*-----------------------------------------
  Functions with Variables
------------------------------------------*/

function Container() {
  return "\n    box-sizing: border-box;\n    margin: 0 auto;\n    max-width: ".concat(MaxWidth, "px;\n    padding: 0 ").concat(Padding, "px;\n    overflow: hidden;\n    width: 100%;\n  ");
}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-disqus-comments":
/*!****************************************!*\
  !*** external "react-disqus-comments" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-disqus-comments");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map