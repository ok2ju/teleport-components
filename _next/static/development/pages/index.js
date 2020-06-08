(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "../node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fsundayfunday%2FProjects%2Fpersonal%2Fteleport-components%2Fdocs%2Fpages%2Findex.tsx&hotRouterUpdates=true!./":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fsundayfunday%2FProjects%2Fpersonal%2Fteleport-components%2Fdocs%2Fpages%2Findex.tsx&hotRouterUpdates=true ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/",
      function () {
        var mod = __webpack_require__(/*! ./pages/index.tsx */ "./pages/index.tsx");
        if (true) {
          module.hot.accept(/*! ./pages/index.tsx */ "./pages/index.tsx", function () {
            if (!next.router.components["/"]) return;
            var updatedPage = __webpack_require__(/*! ./pages/index.tsx */ "./pages/index.tsx");
            next.router.update("/", updatedPage);
          });
        }
        return mod;
      }
    ]);
  

/***/ }),

/***/ "../node_modules/react-dom/index.js":
/*!************************************************************************************************!*\
  !*** delegated ../node_modules/react-dom/index.js from dll-reference dll_e6a94776c4176f860599 ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_e6a94776c4176f860599 */ "dll-reference dll_e6a94776c4176f860599"))("../node_modules/react-dom/index.js");

/***/ }),

/***/ "../node_modules/react/index.js":
/*!********************************************************************************************!*\
  !*** delegated ../node_modules/react/index.js from dll-reference dll_e6a94776c4176f860599 ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_e6a94776c4176f860599 */ "dll-reference dll_e6a94776c4176f860599"))("../node_modules/react/index.js");

/***/ }),

/***/ "../packages/portal/src/index.ts":
/*!***************************************!*\
  !*** ../packages/portal/src/index.ts ***!
  \***************************************/
/*! exports provided: usePortal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _usePortal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usePortal */ "../packages/portal/src/usePortal.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePortal", function() { return _usePortal__WEBPACK_IMPORTED_MODULE_0__["usePortal"]; });



/***/ }),

/***/ "../packages/portal/src/useOnClickOutside.ts":
/*!***************************************************!*\
  !*** ../packages/portal/src/useOnClickOutside.ts ***!
  \***************************************************/
/*! exports provided: useOnClickOutside */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useOnClickOutside", function() { return useOnClickOutside; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var containsTarget = function containsTarget(target, event) {
  return target === null || target === void 0 ? void 0 : target.current.contains(event.target);
};

var useOnClickOutside = function useOnClickOutside(container, ref, handler) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var listener = function listener(event) {
      if (containsTarget(container, event) || containsTarget(ref, event)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return function () {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [container, ref, handler]);
};

/***/ }),

/***/ "../packages/portal/src/usePortal.ts":
/*!*******************************************!*\
  !*** ../packages/portal/src/usePortal.ts ***!
  \*******************************************/
/*! exports provided: usePortal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePortal", function() { return usePortal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useOnClickOutside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useOnClickOutside */ "../packages/portal/src/useOnClickOutside.ts");



var defaultOptions = {
  closeOnOutsideClick: true
};
var usePortal = function usePortal() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultOptions;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isOpen = _useState[0],
      setOpen = _useState[1];

  var latestIsOpen = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(isOpen);
  var refNode = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var syncronizeAndSetOpen = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (value) {
    latestIsOpen.current = value;
    setOpen(value);
  }, []);
  var open = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (event) {
    syncronizeAndSetOpen(true);
  }, [syncronizeAndSetOpen]);
  var close = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (event) {
    if (latestIsOpen.current) {
      syncronizeAndSetOpen(false);
    }
  }, [syncronizeAndSetOpen]);
  var toggle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (event) {
    if (latestIsOpen.current) {
      close(event);
    } else {
      open(event);
    }
  }, [open, close]);

  var Portal = function Portal(props) {
    var portalNode = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(document.createElement('div'));
    Object(_useOnClickOutside__WEBPACK_IMPORTED_MODULE_2__["useOnClickOutside"])(portalNode, refNode, function (event) {
      if (options.closeOnOutsideClick) {
        close(event);
      }
    });
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
      var element = portalNode.current;
      document.body.appendChild(element);
      return function () {
        document.body.removeChild(element);
      };
    }, []);
    return Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["createPortal"])(props.children, portalNode.current);
  };

  return {
    open: open,
    close: close,
    toggle: toggle,
    Portal: Portal,
    isOpen: isOpen,
    ref: refNode
  };
};

/***/ }),

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

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("button", {
    ref: ref,
    onClick: toggle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, "Open Portal"), isOpen === true ? __jsx(Portal, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, "Example Test"), __jsx("button", {
    onClick: close,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, "Close Portal")) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ 2:
/*!*************************************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fsundayfunday%2FProjects%2Fpersonal%2Fteleport-components%2Fdocs%2Fpages%2Findex.tsx&hotRouterUpdates=true ***!
  \*************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fsundayfunday%2FProjects%2Fpersonal%2Fteleport-components%2Fdocs%2Fpages%2Findex.tsx&hotRouterUpdates=true! */"../node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fsundayfunday%2FProjects%2Fpersonal%2Fteleport-components%2Fdocs%2Fpages%2Findex.tsx&hotRouterUpdates=true!./");


/***/ }),

/***/ "dll-reference dll_e6a94776c4176f860599":
/*!*******************************************!*\
  !*** external "dll_e6a94776c4176f860599" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_e6a94776c4176f860599;

/***/ })

},[[2,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map