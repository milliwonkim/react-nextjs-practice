module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/last-sales.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/last-sales.js":
/*!*****************************!*\
  !*** ./pages/last-sales.js ***!
  \*****************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/kiwonkim/Desktop/nextjs-section5/nextjs-course-code/pages/last-sales.js\";\n\n\n\nfunction LastSalesPage(props) {\n  const {\n    0: sales,\n    1: setSales\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(props.sales); // const [isLoading, setIsLoading] = useState(false);\n\n  const {\n    data,\n    error\n  } = swr__WEBPACK_IMPORTED_MODULE_2___default()('https://nextjs-course-d53cd-default-rtdb.firebaseio.com/sales.json');\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    if (data) {\n      const transformedSales = [];\n\n      for (const key in data) {\n        transformedSales.push({\n          id: key,\n          username: data[key].username,\n          volume: data[key].volume\n        });\n      }\n\n      setSales(transformedSales);\n    }\n  }, [data]);\n\n  if (!data && !sales) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 16\n    }, this);\n  }\n\n  if (error) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"Failed to load.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 16\n    }, this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n    children: sales.map(sale => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n      children: [sale.username, \" - $\", sale.volume]\n    }, sale.id, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 17\n    }, this))\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 9\n  }, this);\n}\n\nasync function getStaticProps() {\n  const response = await fetch('https://nextjs-course-d53cd-default-rtdb.firebaseio.com/sales.json');\n  const data = await response.json();\n  const transformedSales = [];\n\n  for (const key in data) {\n    transformedSales.push({\n      id: key,\n      username: data[key].username,\n      volume: data[key].volume\n    });\n  }\n\n  return {\n    props: {\n      sales: transformedSales\n    },\n    revalidate: 10\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (LastSalesPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sYXN0LXNhbGVzLmpzPzA1MWQiXSwibmFtZXMiOlsiTGFzdFNhbGVzUGFnZSIsInByb3BzIiwic2FsZXMiLCJzZXRTYWxlcyIsInVzZVN0YXRlIiwiZGF0YSIsImVycm9yIiwidXNlU1dSIiwidXNlRWZmZWN0IiwidHJhbnNmb3JtZWRTYWxlcyIsImtleSIsInB1c2giLCJpZCIsInVzZXJuYW1lIiwidm9sdW1lIiwibWFwIiwic2FsZSIsImdldFN0YXRpY1Byb3BzIiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb24iLCJyZXZhbGlkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxhQUFULENBQXVCQyxLQUF2QixFQUE4QjtBQUMxQixRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLHNEQUFRLENBQUNILEtBQUssQ0FBQ0MsS0FBUCxDQUFsQyxDQUQwQixDQUUxQjs7QUFFQSxRQUFNO0FBQUVHLFFBQUY7QUFBUUM7QUFBUixNQUFrQkMsMENBQU0sQ0FDMUIsb0VBRDBCLENBQTlCO0FBSUFDLHlEQUFTLENBQUMsTUFBTTtBQUNaLFFBQUlILElBQUosRUFBVTtBQUNOLFlBQU1JLGdCQUFnQixHQUFHLEVBQXpCOztBQUNBLFdBQUssTUFBTUMsR0FBWCxJQUFrQkwsSUFBbEIsRUFBd0I7QUFDcEJJLHdCQUFnQixDQUFDRSxJQUFqQixDQUFzQjtBQUNsQkMsWUFBRSxFQUFFRixHQURjO0FBRWxCRyxrQkFBUSxFQUFFUixJQUFJLENBQUNLLEdBQUQsQ0FBSixDQUFVRyxRQUZGO0FBR2xCQyxnQkFBTSxFQUFFVCxJQUFJLENBQUNLLEdBQUQsQ0FBSixDQUFVSTtBQUhBLFNBQXRCO0FBS0g7O0FBQ0RYLGNBQVEsQ0FBQ00sZ0JBQUQsQ0FBUjtBQUNIO0FBQ0osR0FaUSxFQVlOLENBQUNKLElBQUQsQ0FaTSxDQUFUOztBQWNBLE1BQUksQ0FBQ0EsSUFBRCxJQUFTLENBQUNILEtBQWQsRUFBcUI7QUFDakIsd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNIOztBQUVELE1BQUlJLEtBQUosRUFBVztBQUNQLHdCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDSDs7QUFFRCxzQkFDSTtBQUFBLGNBQ0tKLEtBQUssQ0FBQ2EsR0FBTixDQUFXQyxJQUFELGlCQUNQO0FBQUEsaUJBQ0tBLElBQUksQ0FBQ0gsUUFEVixVQUN3QkcsSUFBSSxDQUFDRixNQUQ3QjtBQUFBLE9BQVNFLElBQUksQ0FBQ0osRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREg7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFTSDs7QUFFTSxlQUFlSyxjQUFmLEdBQWdDO0FBQ25DLFFBQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQ3hCLG9FQUR3QixDQUE1QjtBQUdBLFFBQU1kLElBQUksR0FBRyxNQUFNYSxRQUFRLENBQUNFLElBQVQsRUFBbkI7QUFFQSxRQUFNWCxnQkFBZ0IsR0FBRyxFQUF6Qjs7QUFDQSxPQUFLLE1BQU1DLEdBQVgsSUFBa0JMLElBQWxCLEVBQXdCO0FBQ3BCSSxvQkFBZ0IsQ0FBQ0UsSUFBakIsQ0FBc0I7QUFDbEJDLFFBQUUsRUFBRUYsR0FEYztBQUVsQkcsY0FBUSxFQUFFUixJQUFJLENBQUNLLEdBQUQsQ0FBSixDQUFVRyxRQUZGO0FBR2xCQyxZQUFNLEVBQUVULElBQUksQ0FBQ0ssR0FBRCxDQUFKLENBQVVJO0FBSEEsS0FBdEI7QUFLSDs7QUFDRCxTQUFPO0FBQ0hiLFNBQUssRUFBRTtBQUNIQyxXQUFLLEVBQUVPO0FBREosS0FESjtBQUlIWSxjQUFVLEVBQUU7QUFKVCxHQUFQO0FBTUg7QUFFY3JCLDRFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvbGFzdC1zYWxlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuXG5mdW5jdGlvbiBMYXN0U2FsZXNQYWdlKHByb3BzKSB7XG4gICAgY29uc3QgW3NhbGVzLCBzZXRTYWxlc10gPSB1c2VTdGF0ZShwcm9wcy5zYWxlcyk7XG4gICAgLy8gY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcbiAgICAgICAgJ2h0dHBzOi8vbmV4dGpzLWNvdXJzZS1kNTNjZC1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb20vc2FsZXMuanNvbidcbiAgICApO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zZm9ybWVkU2FsZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1lZFNhbGVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBpZDoga2V5LFxuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogZGF0YVtrZXldLnVzZXJuYW1lLFxuICAgICAgICAgICAgICAgICAgICB2b2x1bWU6IGRhdGFba2V5XS52b2x1bWUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRTYWxlcyh0cmFuc2Zvcm1lZFNhbGVzKTtcbiAgICAgICAgfVxuICAgIH0sIFtkYXRhXSk7XG5cbiAgICBpZiAoIWRhdGEgJiYgIXNhbGVzKSB7XG4gICAgICAgIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgICB9XG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIDxwPkZhaWxlZCB0byBsb2FkLjwvcD47XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHVsPlxuICAgICAgICAgICAge3NhbGVzLm1hcCgoc2FsZSkgPT4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e3NhbGUuaWR9PlxuICAgICAgICAgICAgICAgICAgICB7c2FsZS51c2VybmFtZX0gLSAke3NhbGUudm9sdW1lfVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgJ2h0dHBzOi8vbmV4dGpzLWNvdXJzZS1kNTNjZC1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb20vc2FsZXMuanNvbidcbiAgICApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBjb25zdCB0cmFuc2Zvcm1lZFNhbGVzID0gW107XG4gICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xuICAgICAgICB0cmFuc2Zvcm1lZFNhbGVzLnB1c2goe1xuICAgICAgICAgICAgaWQ6IGtleSxcbiAgICAgICAgICAgIHVzZXJuYW1lOiBkYXRhW2tleV0udXNlcm5hbWUsXG4gICAgICAgICAgICB2b2x1bWU6IGRhdGFba2V5XS52b2x1bWUsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgc2FsZXM6IHRyYW5zZm9ybWVkU2FsZXMsXG4gICAgICAgIH0sXG4gICAgICAgIHJldmFsaWRhdGU6IDEwLFxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IExhc3RTYWxlc1BhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/last-sales.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"swr\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzd3JcIj9jMjg5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InN3ci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3clwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///swr\n");

/***/ })

/******/ });