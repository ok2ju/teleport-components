webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _teleport_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @teleport/portal */ "../packages/portal/src/index.ts");
var _this = undefined,
    _jsxFileName = "/Users/sundayfunday/Projects/personal/teleport-components/docs/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

 // alias, check tsconfig.json `paths` section

var HomePage = function HomePage() {
  var _usePortal = Object(_teleport_portal__WEBPACK_IMPORTED_MODULE_1__["usePortal"])(),
      Portal = _usePortal.Portal,
      ref = _usePortal.ref,
      isOpen = _usePortal.isOpen,
      close = _usePortal.close,
      toggle = _usePortal.toggle;

  var test = false;
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("button", {
    ref: ref,
    onClick: toggle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, "Open Portal"), isOpen ? __jsx(Portal, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, "Example Test"), __jsx("button", {
    onClick: close,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, "Close Portal")) : null, test ? '1' : '2');
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ })

})
//# sourceMappingURL=index.js.b799f0a834c2fcb474ec.hot-update.js.map