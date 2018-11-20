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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-disqus-comments");

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);


/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(4);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./theme/theme.js
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
// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(3);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./components/header.js
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





var header_Container = external_styled_components_default.a.header(_templateObject(), PrimaryText, NavHeight, ""
/* Accommodate bottom border */
, NavHeight - 3);
var Nav = external_styled_components_default.a.nav(_templateObject2(), Container());
var Logo = external_styled_components_default.a.img(_templateObject3());
var HeaderLinkStyled = external_styled_components_default.a.div(_templateObject4(), FontFancy(), Background, Background, PrimaryColor, PrimaryColor);

var header_HeaderLink = function HeaderLink(_ref) {
  var href = _ref.href,
      title = _ref.title;
  return external_react_default.a.createElement(HeaderLinkStyled, null, external_react_default.a.createElement(link_default.a, {
    href: href
  }, external_react_default.a.createElement("a", {
    title: title,
    target: "_blank"
  }, title)));
};

var header_Header = function Header() {
  return external_react_default.a.createElement(header_Container, null, external_react_default.a.createElement(Nav, null, external_react_default.a.createElement(header_HeaderLink, {
    href: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript",
    title: "What is JavaScript?"
  }), external_react_default.a.createElement(Logo, {
    src: "/static/assets/logo.svg",
    alt: "JavaScript is not Java logo"
  }), ";", external_react_default.a.createElement(header_HeaderLink, {
    href: "https://java.com/en/download/faq/whatis_java.xml",
    title: "What is Java?"
  })));
};

/* harmony default export */ var header = (header_Header);
// CONCATENATED MODULE: ./components/anchor.js
function anchor_templateObject3() {
  var data = anchor_taggedTemplateLiteral(["\n  ", ";\n  color: ", ";\n  font-size: 5rem;\n"]);

  anchor_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function anchor_templateObject2() {
  var data = anchor_taggedTemplateLiteral(["\n  ", ";\n  font-size: 50px;\n  font-weight: 700;\n  margin-bottom: ", "px;\n  position: relative;\n  text-align: center;\n  z-index: 1;\n\n  &:before {\n    box-sizing: border-box;\n    border-top: 5px solid ", ";\n    content: \"\";\n    margin: 5px auto 0;\n    position: absolute;\n    top: 50%;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    z-index: -1;\n  }\n\n  & > span {\n    background: ", ";\n    padding: 0 30px;\n  }\n"]);

  anchor_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function anchor_templateObject() {
  var data = anchor_taggedTemplateLiteral(["\n  ", ";\n  padding: 30px 0;\n"]);

  anchor_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function anchor_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var anchor_Container = external_styled_components_default.a.h1(anchor_templateObject(), Container());
var FancyFont = external_styled_components_default.a.div(anchor_templateObject2(), FontFancy(), Padding, PrimaryColor, Background);
var NormalFont = external_styled_components_default.a.div(anchor_templateObject3(), FontHeader(), PrimaryColor);

var anchor_Anchor = function Anchor() {
  return external_react_default.a.createElement(anchor_Container, null, external_react_default.a.createElement(FancyFont, null, external_react_default.a.createElement("span", null, "javascript")), external_react_default.a.createElement(NormalFont, null, "IS NOT"), external_react_default.a.createElement(FancyFont, null, external_react_default.a.createElement("span", null, "java")));
};

/* harmony default export */ var components_anchor = (anchor_Anchor);
// CONCATENATED MODULE: ./components/about.js


var about_About = function About() {
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("p", null, "This may be difficult for some of you to accept, but JavaScript is not Java."), external_react_default.a.createElement("p", null, "Yes, indeed, both languages belong to the programming world. However, aside from this apparently confusing similarity, the two languages could not be further from the same thing. Back in 2009, web developer Jeremy Keith so", " ", external_react_default.a.createElement("a", {
    href: "http://adactio.com/journal/1595",
    title: "read this great article on differences between java and javascript"
  }, "poignantly pointed out"), ", \"Java is to JavaScript as ham is to hamster.\"", " "), external_react_default.a.createElement("p", null, "The confusion on these two words is a widely discussed and bemusing topic. \"Technical\" recruiters seem so confident that the two words are synonymous, they routinely attempt recruiting developers for the wrong field. Perhaps it's because both words utilize \"java\" in their titles."));
};

/* harmony default export */ var about = (about_About);
// EXTERNAL MODULE: external "react-disqus-comments"
var external_react_disqus_comments_ = __webpack_require__(5);
var external_react_disqus_comments_default = /*#__PURE__*/__webpack_require__.n(external_react_disqus_comments_);

// CONCATENATED MODULE: ./components/comments.js



var handleNewComment = function handleNewComment(comment) {
  console.log(comment.text);
};

var comments_Comments = function Comments() {
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("h2", null, "Have any Questions?"), external_react_default.a.createElement(external_react_disqus_comments_default.a, {
    shortname: "javascriptisnotjava",
    identifier: "thread",
    title: "Comments",
    url: "http://javascriptisnotjava.io",
    onNewComment: handleNewComment
  }));
};

/* harmony default export */ var comments = (comments_Comments);
// CONCATENATED MODULE: ./components/footer.js
function footer_templateObject4() {
  var data = footer_taggedTemplateLiteral(["\n  margin-top: ", "px;\n  & img {\n    background-color: ", ";\n    margin: ", "px;\n  }\n"]);

  footer_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function footer_templateObject3() {
  var data = footer_taggedTemplateLiteral(["\n  font-size: 16px;\n  font-style: italic;\n  margin: 0 auto ", "px;\n"]);

  footer_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function footer_templateObject2() {
  var data = footer_taggedTemplateLiteral(["\n  ", ";\n"]);

  footer_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function footer_templateObject() {
  var data = footer_taggedTemplateLiteral(["\n  background: ", ";\n  color: ", ";\n  height: ", "px;\n  ", ";\n  line-height: ", "px;\n"]);

  footer_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function footer_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var footer_Container = external_styled_components_default.a.header(footer_templateObject(), PrimaryText, Background, NavHeight, ""
/* Accommodate bottom border */
, NavHeight - 3);
var Content = external_styled_components_default.a.div(footer_templateObject2(), Container());
var P = external_styled_components_default.a.p(footer_templateObject3(), Padding * 2);
var SocialIcons = external_styled_components_default.a.div(footer_templateObject4(), Padding, PrimaryColor, Padding / 2);

var footer_SocialLink = function SocialLink(_ref) {
  var href = _ref.href,
      title = _ref.title,
      children = _ref.children;
  return external_react_default.a.createElement(link_default.a, {
    href: href
  }, external_react_default.a.createElement("a", {
    title: title
  }, children));
};

var footer_Footer = function Footer() {
  return external_react_default.a.createElement(footer_Container, null, external_react_default.a.createElement(Content, null, external_react_default.a.createElement(SocialIcons, null, external_react_default.a.createElement(footer_SocialLink, {
    href: "http://linkedin.com/in/kaelanichols",
    title: "linkedin"
  }, external_react_default.a.createElement("img", {
    src: "/static/assets/linkedin.svg",
    alt: "LinkedIn"
  })), external_react_default.a.createElement(footer_SocialLink, {
    href: "http://github.com/kaela",
    title: "github"
  }, external_react_default.a.createElement("img", {
    src: "/static/assets/github.svg",
    alt: "github"
  }))), external_react_default.a.createElement(P, null, "javascriptisnotjava.io reserves the right to remove any content for any reason at any time. Because it's my site, and I can.")));
};

/* harmony default export */ var footer = (footer_Footer);
// CONCATENATED MODULE: ./pages/index.js


function pages_templateObject2() {
  var data = pages_taggedTemplateLiteral(["\n  ", ";\n  margin-bottom: ", "px;\n"]);

  pages_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function pages_templateObject() {
  var data = pages_taggedTemplateLiteral(["\n  html {\n    background: ", ";\n  }\n\n  body {\n    ", ";\n    background: ", ";\n    color: ", ";\n    font-size: 20px;\n    margin: 0;\n    min-width: ", "px;\n    text-align: center;\n  }\n\n  img {\n    vertical-align: top;\n  }\n\n  a {\n    color: ", ";\n    text-decoration: none;\n  }\n\n  h2 {\n    ", ";\n    font-size: 24px;\n  }\n\n  p {\n    line-height: normal;\n    margin: 0;\n    padding: 0;\n\n    & + p {\n      margin-top: ", "px;\n    }\n  }\n"]);

  pages_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function pages_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






 // import Comparisons from "../components/comparisons.js";



var GlobalStyle = Object(external_styled_components_["createGlobalStyle"])(pages_templateObject(), PrimaryText, FontFamily(), Background, PrimaryText, PhoneWidth, PrimaryColor, FontHeader(), Padding * 3);
var pages_Container = external_styled_components_default.a.div(pages_templateObject2(), Container(), Padding * 6);
/* harmony default export */ var pages = __webpack_exports__["default"] = (function () {
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(GlobalStyle, null), external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, "JavaScript is not Java - A funny comparison of JavaScript and Java")), external_react_default.a.createElement("div", null, external_react_default.a.createElement(header, null), external_react_default.a.createElement(pages_Container, null, external_react_default.a.createElement(components_anchor, null), external_react_default.a.createElement(about, null), external_react_default.a.createElement(comments, null)), external_react_default.a.createElement(footer, null)));
});

/***/ })
/******/ ]);