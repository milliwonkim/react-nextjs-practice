webpackHotUpdate_N_E("pages/last-sales",{

/***/ "./pages/last-sales.js":
/*!*****************************!*\
  !*** ./pages/last-sales.js ***!
  \*****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n\n\nvar _jsxFileName = \"/Users/kiwonkim/Desktop/nextjs-section5/nextjs-course-code/pages/last-sales.js\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction LastSalesPage(props) {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(props.sales),\n      sales = _useState[0],\n      setSales = _useState[1]; // const [isLoading, setIsLoading] = useState(false);\n\n\n  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('https://nextjs-course-d53cd-default-rtdb.firebaseio.com/sales.json'),\n      data = _useSWR.data,\n      error = _useSWR.error;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (data) {\n      var transformedSales = [];\n\n      for (var key in data) {\n        transformedSales.push({\n          id: key,\n          username: data[key].username,\n          volume: data[key].volume\n        });\n      }\n\n      setSales(transformedSales);\n    }\n  }, [data]);\n\n  if (!data && !sales) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 16\n    }, this);\n  }\n\n  if (error) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"Failed to load.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 16\n    }, this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n    children: sales.map(function (sale) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: [sale.username, \" - $\", sale.volume]\n      }, sale.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 17\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 9\n  }, this);\n}\n\n_s(LastSalesPage, \"lghZNGWenZyG6yG7jPC9/EhXHmw=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n\n_c = LastSalesPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LastSalesPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"LastSalesPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGFzdC1zYWxlcy5qcz8wNTFkIl0sIm5hbWVzIjpbIkxhc3RTYWxlc1BhZ2UiLCJwcm9wcyIsInVzZVN0YXRlIiwic2FsZXMiLCJzZXRTYWxlcyIsInVzZVNXUiIsImRhdGEiLCJlcnJvciIsInVzZUVmZmVjdCIsInRyYW5zZm9ybWVkU2FsZXMiLCJrZXkiLCJwdXNoIiwiaWQiLCJ1c2VybmFtZSIsInZvbHVtZSIsIm1hcCIsInNhbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFBQTs7QUFBQTs7QUFBQSxrQkFDQUMsc0RBQVEsQ0FBQ0QsS0FBSyxDQUFDRSxLQUFQLENBRFI7QUFBQSxNQUNuQkEsS0FEbUI7QUFBQSxNQUNaQyxRQURZLGlCQUUxQjs7O0FBRjBCLGdCQUlGQyxtREFBTSxDQUMxQixvRUFEMEIsQ0FKSjtBQUFBLE1BSWxCQyxJQUprQixXQUlsQkEsSUFKa0I7QUFBQSxNQUlaQyxLQUpZLFdBSVpBLEtBSlk7O0FBUTFCQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFJRixJQUFKLEVBQVU7QUFDTixVQUFNRyxnQkFBZ0IsR0FBRyxFQUF6Qjs7QUFDQSxXQUFLLElBQU1DLEdBQVgsSUFBa0JKLElBQWxCLEVBQXdCO0FBQ3BCRyx3QkFBZ0IsQ0FBQ0UsSUFBakIsQ0FBc0I7QUFDbEJDLFlBQUUsRUFBRUYsR0FEYztBQUVsQkcsa0JBQVEsRUFBRVAsSUFBSSxDQUFDSSxHQUFELENBQUosQ0FBVUcsUUFGRjtBQUdsQkMsZ0JBQU0sRUFBRVIsSUFBSSxDQUFDSSxHQUFELENBQUosQ0FBVUk7QUFIQSxTQUF0QjtBQUtIOztBQUNEVixjQUFRLENBQUNLLGdCQUFELENBQVI7QUFDSDtBQUNKLEdBWlEsRUFZTixDQUFDSCxJQUFELENBWk0sQ0FBVDs7QUFjQSxNQUFJLENBQUNBLElBQUQsSUFBUyxDQUFDSCxLQUFkLEVBQXFCO0FBQ2pCLHdCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDSDs7QUFFRCxNQUFJSSxLQUFKLEVBQVc7QUFDUCx3QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0g7O0FBRUQsc0JBQ0k7QUFBQSxjQUNLSixLQUFLLENBQUNZLEdBQU4sQ0FBVSxVQUFDQyxJQUFEO0FBQUEsMEJBQ1A7QUFBQSxtQkFDS0EsSUFBSSxDQUFDSCxRQURWLFVBQ3dCRyxJQUFJLENBQUNGLE1BRDdCO0FBQUEsU0FBU0UsSUFBSSxDQUFDSixFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFETztBQUFBLEtBQVY7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFTSDs7R0F2Q1FaLGE7VUFJbUJLLDJDOzs7S0FKbkJMLGE7O0FBK0RNQSw0RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2xhc3Qtc2FsZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcblxuZnVuY3Rpb24gTGFzdFNhbGVzUGFnZShwcm9wcykge1xuICAgIGNvbnN0IFtzYWxlcywgc2V0U2FsZXNdID0gdXNlU3RhdGUocHJvcHMuc2FsZXMpO1xuICAgIC8vIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXG4gICAgICAgICdodHRwczovL25leHRqcy1jb3Vyc2UtZDUzY2QtZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tL3NhbGVzLmpzb24nXG4gICAgKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICBjb25zdCB0cmFuc2Zvcm1lZFNhbGVzID0gW107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtZWRTYWxlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IGRhdGFba2V5XS51c2VybmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdm9sdW1lOiBkYXRhW2tleV0udm9sdW1lLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0U2FsZXModHJhbnNmb3JtZWRTYWxlcyk7XG4gICAgICAgIH1cbiAgICB9LCBbZGF0YV0pO1xuXG4gICAgaWYgKCFkYXRhICYmICFzYWxlcykge1xuICAgICAgICByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gICAgfVxuXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICAgIHJldHVybiA8cD5GYWlsZWQgdG8gbG9hZC48L3A+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtzYWxlcy5tYXAoKHNhbGUpID0+IChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtzYWxlLmlkfT5cbiAgICAgICAgICAgICAgICAgICAge3NhbGUudXNlcm5hbWV9IC0gJHtzYWxlLnZvbHVtZX1cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICdodHRwczovL25leHRqcy1jb3Vyc2UtZDUzY2QtZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tL3NhbGVzLmpzb24nXG4gICAgKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgY29uc3QgdHJhbnNmb3JtZWRTYWxlcyA9IFtdO1xuICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcbiAgICAgICAgdHJhbnNmb3JtZWRTYWxlcy5wdXNoKHtcbiAgICAgICAgICAgIGlkOiBrZXksXG4gICAgICAgICAgICB1c2VybmFtZTogZGF0YVtrZXldLnVzZXJuYW1lLFxuICAgICAgICAgICAgdm9sdW1lOiBkYXRhW2tleV0udm9sdW1lLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHNhbGVzOiB0cmFuc2Zvcm1lZFNhbGVzLFxuICAgICAgICB9LFxuICAgICAgICByZXZhbGlkYXRlOiAxMCxcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBMYXN0U2FsZXNQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/last-sales.js\n");

/***/ })

})