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
exports.id = "pages/api/search";
exports.ids = ["pages/api/search"];
exports.modules = {

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("fs/promises");

/***/ }),

/***/ "(api)/./pages/api/search.js":
/*!*****************************!*\
  !*** ./pages/api/search.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _repositories_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../repositories/search */ \"(api)/./repositories/search.js\");\n\nasync function handler(req, res) {\n    const search = req.query.q;\n    const comics = await (0,_repositories_search__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(search);\n    return res.status(200).json(comics);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VhcmNoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXFEO0FBRXRDLGVBQWVDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLE1BQU1DLFNBQVNGLElBQUlHLEtBQUssQ0FBQ0MsQ0FBQztJQUUxQixNQUFNQyxTQUFTLE1BQU1QLGdFQUFZQSxDQUFDSTtJQUVsQyxPQUFPRCxJQUFJSyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDRjtBQUM5QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veGtjZC1mcm9udC8uL3BhZ2VzL2FwaS9zZWFyY2guanM/NWQzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2VhcmNoQ29taWNzIGZyb20gXCIuLi8uLi9yZXBvc2l0b3JpZXMvc2VhcmNoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgY29uc3Qgc2VhcmNoID0gcmVxLnF1ZXJ5LnE7XG5cbiAgY29uc3QgY29taWNzID0gYXdhaXQgc2VhcmNoQ29taWNzKHNlYXJjaCk7XG5cbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKGNvbWljcyk7XG59XG4iXSwibmFtZXMiOlsic2VhcmNoQ29taWNzIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInNlYXJjaCIsInF1ZXJ5IiwicSIsImNvbWljcyIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/search.js\n");

/***/ }),

/***/ "(api)/./repositories/search.js":
/*!********************************!*\
  !*** ./repositories/search.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ searchComics)\n/* harmony export */ });\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_0__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nconst CACHE = {};\nconst USE_CACHE = Boolean(process.env.USE_CACHE === \"true\");\nasync function searchComics(search = \"\") {\n    if (!USE_CACHE || !CACHE[search]) {\n        const comics = await fs_promises__WEBPACK_IMPORTED_MODULE_0___default().readFile(\"./allComics/index.json\", \"utf-8\");\n        const comicsParsed = JSON.parse(comics);\n        const comicsFound = comicsParsed.filter((comic)=>{\n            return comic.title.toLowerCase().includes(search.toLowerCase()) || comic.safe_title.toLowerCase().includes(search.toLowerCase()) || comic.alt.toLowerCase().includes(search.toLowerCase());\n        });\n        CACHE[search] = comicsFound;\n        return comicsFound;\n    }\n    return CACHE[search];\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9yZXBvc2l0b3JpZXMvc2VhcmNoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDZFQUE2RTtBQUNoRDtBQUU3QixNQUFNQyxRQUFRLENBQUM7QUFDZixNQUFNQyxZQUFZQyxRQUFRQyxRQUFRQyxHQUFHLENBQUNILFNBQVMsS0FBSztBQUVyQyxlQUFlSSxhQUFhQyxTQUFTLEVBQUUsRUFBRTtJQUN0RCxJQUFJLENBQUNMLGFBQWEsQ0FBQ0QsS0FBSyxDQUFDTSxPQUFPLEVBQUU7UUFDaEMsTUFBTUMsU0FBUyxNQUFNUiwyREFBVyxDQUFDLDBCQUEwQjtRQUMzRCxNQUFNVSxlQUFlQyxLQUFLQyxLQUFLLENBQUNKO1FBRWhDLE1BQU1LLGNBQWNILGFBQWFJLE1BQU0sQ0FBQyxDQUFDQyxRQUFVO1lBQ2pELE9BQ0VBLE1BQU1DLEtBQUssQ0FBQ0MsV0FBVyxHQUFHQyxRQUFRLENBQUNYLE9BQU9VLFdBQVcsT0FDckRGLE1BQU1JLFVBQVUsQ0FBQ0YsV0FBVyxHQUFHQyxRQUFRLENBQUNYLE9BQU9VLFdBQVcsT0FDMURGLE1BQU1LLEdBQUcsQ0FBQ0gsV0FBVyxHQUFHQyxRQUFRLENBQUNYLE9BQU9VLFdBQVc7UUFFdkQ7UUFFQWhCLEtBQUssQ0FBQ00sT0FBTyxHQUFHTTtRQUVoQixPQUFPQTtJQUNULENBQUM7SUFFRCxPQUFPWixLQUFLLENBQUNNLE9BQU87QUFDdEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3hrY2QtZnJvbnQvLi9yZXBvc2l0b3JpZXMvc2VhcmNoLmpzPzQyYTIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cbmltcG9ydCBmcyBmcm9tIFwiZnMvcHJvbWlzZXNcIjtcblxuY29uc3QgQ0FDSEUgPSB7fTtcbmNvbnN0IFVTRV9DQUNIRSA9IEJvb2xlYW4ocHJvY2Vzcy5lbnYuVVNFX0NBQ0hFID09PSBcInRydWVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHNlYXJjaENvbWljcyhzZWFyY2ggPSBcIlwiKSB7XG4gIGlmICghVVNFX0NBQ0hFIHx8ICFDQUNIRVtzZWFyY2hdKSB7XG4gICAgY29uc3QgY29taWNzID0gYXdhaXQgZnMucmVhZEZpbGUoXCIuL2FsbENvbWljcy9pbmRleC5qc29uXCIsIFwidXRmLThcIik7XG4gICAgY29uc3QgY29taWNzUGFyc2VkID0gSlNPTi5wYXJzZShjb21pY3MpO1xuXG4gICAgY29uc3QgY29taWNzRm91bmQgPSBjb21pY3NQYXJzZWQuZmlsdGVyKChjb21pYykgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgY29taWMudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSkgfHxcbiAgICAgICAgY29taWMuc2FmZV90aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSB8fFxuICAgICAgICBjb21pYy5hbHQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSlcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICBDQUNIRVtzZWFyY2hdID0gY29taWNzRm91bmQ7XG5cbiAgICByZXR1cm4gY29taWNzRm91bmQ7XG4gIH1cblxuICByZXR1cm4gQ0FDSEVbc2VhcmNoXTtcbn1cbiJdLCJuYW1lcyI6WyJmcyIsIkNBQ0hFIiwiVVNFX0NBQ0hFIiwiQm9vbGVhbiIsInByb2Nlc3MiLCJlbnYiLCJzZWFyY2hDb21pY3MiLCJzZWFyY2giLCJjb21pY3MiLCJyZWFkRmlsZSIsImNvbWljc1BhcnNlZCIsIkpTT04iLCJwYXJzZSIsImNvbWljc0ZvdW5kIiwiZmlsdGVyIiwiY29taWMiLCJ0aXRsZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJzYWZlX3RpdGxlIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./repositories/search.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/search.js"));
module.exports = __webpack_exports__;

})();