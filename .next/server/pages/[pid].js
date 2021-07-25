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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[pid].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/[pid].js":
/*!************************!*\
  !*** ./pages/[pid].js ***!
  \************************/
/*! exports provided: getStaticProps, getStaticPaths, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/kiwonkim/Desktop/nextjs-section5/nextjs-course-code/pages/[pid].js\";\n\n\n\n\nfunction ProductDetailPage(props) {\n  const {\n    loadedProduct\n  } = props;\n\n  if (!loadedProduct) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 16\n    }, this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: loadedProduct.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: loadedProduct.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 9\n  }, this);\n}\n\nasync function getData() {\n  const filePath = path__WEBPACK_IMPORTED_MODULE_2___default.a.join(process.cwd(), 'data', 'dummy-backend.json');\n  const jsonData = await fs_promises__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(filePath);\n  const data = JSON.parse(jsonData);\n  return data;\n}\n\nasync function getStaticProps(context) {\n  const {\n    params\n  } = context;\n  const productId = params.pid;\n  const data = await getData();\n  const product = data.products.find(product => product.id === productId);\n\n  if (!product) {\n    return {\n      notFound: true\n    };\n  }\n\n  return {\n    props: {\n      loadedProduct: product\n    }\n  };\n}\nasync function getStaticPaths() {\n  const data = await getData();\n  const ids = data.products.map(product => product.id);\n  const pathsWithParams = ids.map(id => ({\n    params: {\n      pid: id\n    }\n  }));\n  return {\n    paths: pathsWithParams,\n    fallback: true\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetailPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9bcGlkXS5qcz84OGJkIl0sIm5hbWVzIjpbIlByb2R1Y3REZXRhaWxQYWdlIiwicHJvcHMiLCJsb2FkZWRQcm9kdWN0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImdldERhdGEiLCJmaWxlUGF0aCIsInBhdGgiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImpzb25EYXRhIiwiZnMiLCJyZWFkRmlsZSIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJwYXJhbXMiLCJwcm9kdWN0SWQiLCJwaWQiLCJwcm9kdWN0IiwicHJvZHVjdHMiLCJmaW5kIiwiaWQiLCJub3RGb3VuZCIsImdldFN0YXRpY1BhdGhzIiwiaWRzIiwibWFwIiwicGF0aHNXaXRoUGFyYW1zIiwicGF0aHMiLCJmYWxsYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxpQkFBVCxDQUEyQkMsS0FBM0IsRUFBa0M7QUFDOUIsUUFBTTtBQUFFQztBQUFGLE1BQW9CRCxLQUExQjs7QUFFQSxNQUFJLENBQUNDLGFBQUwsRUFBb0I7QUFDaEIsd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNIOztBQUVELHNCQUNJLHFFQUFDLDhDQUFEO0FBQUEsNEJBQ0k7QUFBQSxnQkFBS0EsYUFBYSxDQUFDQztBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFBLGdCQUFJRCxhQUFhLENBQUNFO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQU1IOztBQUVELGVBQWVDLE9BQWYsR0FBeUI7QUFDckIsUUFBTUMsUUFBUSxHQUFHQywyQ0FBSSxDQUFDQyxJQUFMLENBQVVDLE9BQU8sQ0FBQ0MsR0FBUixFQUFWLEVBQXlCLE1BQXpCLEVBQWlDLG9CQUFqQyxDQUFqQjtBQUNBLFFBQU1DLFFBQVEsR0FBRyxNQUFNQyxrREFBRSxDQUFDQyxRQUFILENBQVlQLFFBQVosQ0FBdkI7QUFDQSxRQUFNUSxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxRQUFYLENBQWI7QUFFQSxTQUFPRyxJQUFQO0FBQ0g7O0FBRU0sZUFBZUcsY0FBZixDQUE4QkMsT0FBOUIsRUFBdUM7QUFDMUMsUUFBTTtBQUFFQztBQUFGLE1BQWFELE9BQW5CO0FBRUEsUUFBTUUsU0FBUyxHQUFHRCxNQUFNLENBQUNFLEdBQXpCO0FBRUEsUUFBTVAsSUFBSSxHQUFHLE1BQU1ULE9BQU8sRUFBMUI7QUFFQSxRQUFNaUIsT0FBTyxHQUFHUixJQUFJLENBQUNTLFFBQUwsQ0FBY0MsSUFBZCxDQUFvQkYsT0FBRCxJQUFhQSxPQUFPLENBQUNHLEVBQVIsS0FBZUwsU0FBL0MsQ0FBaEI7O0FBRUEsTUFBSSxDQUFDRSxPQUFMLEVBQWM7QUFDVixXQUFPO0FBQ0hJLGNBQVEsRUFBRTtBQURQLEtBQVA7QUFHSDs7QUFFRCxTQUFPO0FBQ0h6QixTQUFLLEVBQUU7QUFDSEMsbUJBQWEsRUFBRW9CO0FBRFo7QUFESixHQUFQO0FBS0g7QUFFTSxlQUFlSyxjQUFmLEdBQWdDO0FBQ25DLFFBQU1iLElBQUksR0FBRyxNQUFNVCxPQUFPLEVBQTFCO0FBRUEsUUFBTXVCLEdBQUcsR0FBR2QsSUFBSSxDQUFDUyxRQUFMLENBQWNNLEdBQWQsQ0FBbUJQLE9BQUQsSUFBYUEsT0FBTyxDQUFDRyxFQUF2QyxDQUFaO0FBQ0EsUUFBTUssZUFBZSxHQUFHRixHQUFHLENBQUNDLEdBQUosQ0FBU0osRUFBRCxLQUFTO0FBQ3JDTixVQUFNLEVBQUU7QUFDSkUsU0FBRyxFQUFFSTtBQUREO0FBRDZCLEdBQVQsQ0FBUixDQUF4QjtBQU1BLFNBQU87QUFDSE0sU0FBSyxFQUFFRCxlQURKO0FBRUhFLFlBQVEsRUFBRTtBQUZQLEdBQVA7QUFJSDtBQUVjaEMsZ0ZBQWYiLCJmaWxlIjoiLi9wYWdlcy9bcGlkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tICdmcy9wcm9taXNlcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBQcm9kdWN0RGV0YWlsUGFnZShwcm9wcykge1xuICAgIGNvbnN0IHsgbG9hZGVkUHJvZHVjdCB9ID0gcHJvcHM7XG5cbiAgICBpZiAoIWxvYWRlZFByb2R1Y3QpIHtcbiAgICAgICAgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgIDxoMT57bG9hZGVkUHJvZHVjdC50aXRsZX08L2gxPlxuICAgICAgICAgICAgPHA+e2xvYWRlZFByb2R1Y3QuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8L0ZyYWdtZW50PlxuICAgICk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKSB7XG4gICAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2RhdGEnLCAnZHVtbXktYmFja2VuZC5qc29uJyk7XG4gICAgY29uc3QganNvbkRhdGEgPSBhd2FpdCBmcy5yZWFkRmlsZShmaWxlUGF0aCk7XG4gICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoanNvbkRhdGEpO1xuXG4gICAgcmV0dXJuIGRhdGE7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gICAgY29uc3QgeyBwYXJhbXMgfSA9IGNvbnRleHQ7XG5cbiAgICBjb25zdCBwcm9kdWN0SWQgPSBwYXJhbXMucGlkO1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldERhdGEoKTtcblxuICAgIGNvbnN0IHByb2R1Y3QgPSBkYXRhLnByb2R1Y3RzLmZpbmQoKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgPT09IHByb2R1Y3RJZCk7XG5cbiAgICBpZiAoIXByb2R1Y3QpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5vdEZvdW5kOiB0cnVlLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBsb2FkZWRQcm9kdWN0OiBwcm9kdWN0LFxuICAgICAgICB9LFxuICAgIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RGF0YSgpO1xuXG4gICAgY29uc3QgaWRzID0gZGF0YS5wcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQpO1xuICAgIGNvbnN0IHBhdGhzV2l0aFBhcmFtcyA9IGlkcy5tYXAoKGlkKSA9PiAoe1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIHBpZDogaWQsXG4gICAgICAgIH0sXG4gICAgfSkpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGF0aHM6IHBhdGhzV2l0aFBhcmFtcyxcbiAgICAgICAgZmFsbGJhY2s6IHRydWUsXG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdERldGFpbFBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[pid].js\n");

/***/ }),

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs/promises\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmcy9wcm9taXNlc1wiP2VkODkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZnMvcHJvbWlzZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcy9wcm9taXNlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///fs/promises\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NzRiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///path\n");

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

/***/ })

/******/ });