"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/i18n.js":
/*!*************************!*\
  !*** ./context/i18n.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"I18nProvider\": () => (/* binding */ I18nProvider),\n/* harmony export */   \"useI18n\": () => (/* binding */ useI18n)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _translations_es_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../translations/es.json */ \"./translations/es.json\");\n/* harmony import */ var _translations_en_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../translations/en.json */ \"./translations/en.json\");\n\n\n\n\n\nconst I18nContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();\nconst languages = {\n    es: _translations_es_json__WEBPACK_IMPORTED_MODULE_3__,\n    en: _translations_en_json__WEBPACK_IMPORTED_MODULE_4__\n};\nfunction I18nProvider({ children  }) {\n    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const t = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((key, ...args)=>{\n        let translation = languages[locale][key];\n        if (args.length === 0) return translation;\n        args.forEach((arg, i)=>translation = translation.replace(`\\${${i + 1}}`, arg));\n        return translation;\n    }, [\n        locale\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(I18nContext.Provider, {\n        value: {\n            t\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/O002684/Desktop/Cursos/xkcd/xkcd-front/context/i18n.js\",\n        lineNumber: 31,\n        columnNumber: 10\n    }, this);\n}\nfunction useI18n() {\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(I18nContext);\n    if (context === undefined) {\n        throw new Error(\"useI18n must be used within a I18nProvider\");\n    }\n    return context;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2kxOG4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXdDO0FBQ3VCO0FBRXRCO0FBQ0E7QUFFekMsTUFBTU0sNEJBQWNMLG9EQUFhQTtBQUVqQyxNQUFNTSxZQUFZO0lBQ2hCSCxFQUFFQSxvREFBQUE7SUFDRkMsRUFBRUEsb0RBQUFBO0FBQ0o7QUFFTyxTQUFTRyxhQUFhLEVBQUVDLFNBQVEsRUFBRSxFQUFFO0lBQ3pDLE1BQU0sRUFBRUMsT0FBTSxFQUFFLEdBQUdWLHNEQUFTQTtJQUU1QixNQUFNVyxJQUFJVCxrREFBV0EsQ0FDbkIsQ0FBQ1UsS0FBSyxHQUFHQyxPQUFTO1FBQ2hCLElBQUlDLGNBQWNQLFNBQVMsQ0FBQ0csT0FBTyxDQUFDRSxJQUFJO1FBRXhDLElBQUlDLEtBQUtFLE1BQU0sS0FBSyxHQUFHLE9BQU9EO1FBQzlCRCxLQUFLRyxPQUFPLENBQ1YsQ0FBQ0MsS0FBS0MsSUFBT0osY0FBY0EsWUFBWUssT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFRCxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUVEO1FBR2pFLE9BQU9IO0lBQ1QsR0FDQTtRQUFDSjtLQUFPO0lBR1YscUJBQU8sOERBQUNKLFlBQVljLFFBQVE7UUFBQ0MsT0FBTztZQUFFVjtRQUFFO2tCQUFJRjs7Ozs7O0FBQzlDLENBQUM7QUFFTSxTQUFTYSxVQUFVO0lBQ3hCLE1BQU1DLFVBQVVwQixpREFBVUEsQ0FBQ0c7SUFFM0IsSUFBSWlCLFlBQVlDLFdBQVc7UUFDekIsTUFBTSxJQUFJQyxNQUFNLDhDQUE4QztJQUNoRSxDQUFDO0lBRUQsT0FBT0Y7QUFDVCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veGtjZC1mcm9udC8uL2NvbnRleHQvaTE4bi5qcz82N2EwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ2FsbGJhY2ssIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IGVzIGZyb20gXCIuLi90cmFuc2xhdGlvbnMvZXMuanNvblwiO1xuaW1wb3J0IGVuIGZyb20gXCIuLi90cmFuc2xhdGlvbnMvZW4uanNvblwiO1xuXG5jb25zdCBJMThuQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuY29uc3QgbGFuZ3VhZ2VzID0ge1xuICBlcyxcbiAgZW4sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gSTE4blByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCB7IGxvY2FsZSB9ID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgdCA9IHVzZUNhbGxiYWNrKFxuICAgIChrZXksIC4uLmFyZ3MpID0+IHtcbiAgICAgIGxldCB0cmFuc2xhdGlvbiA9IGxhbmd1YWdlc1tsb2NhbGVdW2tleV07XG5cbiAgICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHRyYW5zbGF0aW9uO1xuICAgICAgYXJncy5mb3JFYWNoKFxuICAgICAgICAoYXJnLCBpKSA9PiAodHJhbnNsYXRpb24gPSB0cmFuc2xhdGlvbi5yZXBsYWNlKGBcXCR7JHtpICsgMX19YCwgYXJnKSlcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiB0cmFuc2xhdGlvbjtcbiAgICB9LFxuICAgIFtsb2NhbGVdXG4gICk7XG5cbiAgcmV0dXJuIDxJMThuQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB0IH19PntjaGlsZHJlbn08L0kxOG5Db250ZXh0LlByb3ZpZGVyPjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUkxOG4oKSB7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KEkxOG5Db250ZXh0KTtcblxuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwidXNlSTE4biBtdXN0IGJlIHVzZWQgd2l0aGluIGEgSTE4blByb3ZpZGVyXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiY3JlYXRlQ29udGV4dCIsInVzZUNhbGxiYWNrIiwidXNlQ29udGV4dCIsImVzIiwiZW4iLCJJMThuQ29udGV4dCIsImxhbmd1YWdlcyIsIkkxOG5Qcm92aWRlciIsImNoaWxkcmVuIiwibG9jYWxlIiwidCIsImtleSIsImFyZ3MiLCJ0cmFuc2xhdGlvbiIsImxlbmd0aCIsImZvckVhY2giLCJhcmciLCJpIiwicmVwbGFjZSIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VJMThuIiwiY29udGV4dCIsInVuZGVmaW5lZCIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/i18n.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextui-org/react */ \"@nextui-org/react\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var context_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! context/i18n */ \"./context/i18n.js\");\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(context_i18n__WEBPACK_IMPORTED_MODULE_3__.I18nProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.NextUIProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/O002684/Desktop/Cursos/xkcd/xkcd-front/pages/_app.js\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/O002684/Desktop/Cursos/xkcd/xkcd-front/pages/_app.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/O002684/Desktop/Cursos/xkcd/xkcd-front/pages/_app.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBK0I7QUFFb0I7QUFDUDtBQUU3QixTQUFTRyxJQUFJLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFFLEVBQUU7SUFDcEQscUJBQ0UsOERBQUNILHNEQUFZQTtrQkFDWCw0RUFBQ0QsNkRBQWNBO3NCQUNiLDRFQUFDRztnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7O0FBSWhDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly94a2NkLWZyb250Ly4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBOZXh0VUlQcm92aWRlciB9IGZyb20gXCJAbmV4dHVpLW9yZy9yZWFjdFwiO1xuaW1wb3J0IHsgSTE4blByb3ZpZGVyIH0gZnJvbSBcImNvbnRleHQvaTE4blwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPEkxOG5Qcm92aWRlcj5cbiAgICAgIDxOZXh0VUlQcm92aWRlcj5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9OZXh0VUlQcm92aWRlcj5cbiAgICA8L0kxOG5Qcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIk5leHRVSVByb3ZpZGVyIiwiSTE4blByb3ZpZGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "@nextui-org/react":
/*!************************************!*\
  !*** external "@nextui-org/react" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@nextui-org/react");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "./translations/en.json":
/*!******************************!*\
  !*** ./translations/en.json ***!
  \******************************/
/***/ ((module) => {

module.exports = JSON.parse('{"latestComics":"Latest comics"}');

/***/ }),

/***/ "./translations/es.json":
/*!******************************!*\
  !*** ./translations/es.json ***!
  \******************************/
/***/ ((module) => {

module.exports = JSON.parse('{"latestComics":"Últimos comics"}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();