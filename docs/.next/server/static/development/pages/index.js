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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const containsTarget = (target, event) => target === null || target === void 0 ? void 0 : target.current.contains(event.target);

const useOnClickOutside = (container, ref, handler) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const listener = event => {
      if (containsTarget(container, event) || containsTarget(ref, event)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useOnClickOutside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useOnClickOutside */ "../packages/portal/src/useOnClickOutside.ts");



const defaultOptions = {
  closeOnOutsideClick: true
};
const usePortal = (options = defaultOptions) => {
  const {
    0: isOpen,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const latestIsOpen = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(isOpen);
  const refNode = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const syncronizeAndSetOpen = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(value => {
    latestIsOpen.current = value;
    setOpen(value);
  }, []);
  const open = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
    syncronizeAndSetOpen(true);
  }, [syncronizeAndSetOpen]);
  const close = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
    if (latestIsOpen.current) {
      syncronizeAndSetOpen(false);
    }
  }, [syncronizeAndSetOpen]);
  const toggle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
    if (latestIsOpen.current) {
      close(event);
    } else {
      open(event);
    }
  }, [open, close]);

  const Portal = props => {
    const portalNode = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(document.createElement('div'));
    Object(_useOnClickOutside__WEBPACK_IMPORTED_MODULE_2__["useOnClickOutside"])(portalNode, refNode, event => {
      if (options.closeOnOutsideClick) {
        close(event);
      }
    });
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
      const element = portalNode.current;
      document.body.appendChild(element);
      return () => {
        document.body.removeChild(element);
      };
    }, []);
    return Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["createPortal"])(props.children, portalNode.current);
  };

  return {
    open,
    close,
    toggle,
    Portal,
    isOpen,
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _teleport_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @teleport/portal */ "../packages/portal/src/index.ts");
var _jsxFileName = "/Users/sundayfunday/Projects/personal/teleport-components/docs/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

 // alias, check tsconfig.json `paths` section

const HomePage = () => {
  const {
    Portal,
    ref,
    isOpen,
    close,
    toggle
  } = Object(_teleport_portal__WEBPACK_IMPORTED_MODULE_1__["usePortal"])();
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("button", {
    ref: ref,
    onClick: toggle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, "Open Portal"), isOpen === true ? __jsx(Portal, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, "Example Test"), __jsx("button", {
    onClick: close,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, "Close Portal")) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sundayfunday/Projects/personal/teleport-components/docs/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map