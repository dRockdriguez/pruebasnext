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
exports.id = "pages/api/pollys";
exports.ids = ["pages/api/pollys"];
exports.modules = {

/***/ "(api)/./pages/api/pollys/index.ts":
/*!***********************************!*\
  !*** ./pages/api/pollys/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _pollys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pollys */ \"(api)/./pages/api/pollys/pollys.js\");\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nfunction handler(req, res) {\n    const pollys = _pollys__WEBPACK_IMPORTED_MODULE_0__.POLLYS;\n    res.status(200).json(pollys);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9sbHlzL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsNkVBQTZFO0FBRTNDO0FBd0JuQixTQUFTQyxRQUNwQkMsR0FBbUIsRUFDbkJDLEdBQTRCLEVBQzlCO0lBQ0UsTUFBTUMsU0FBU0osMkNBQU1BO0lBRXJCRyxJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDRjtBQUN6QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9sbHktYXBwLy4vcGFnZXMvYXBpL3BvbGx5cy9pbmRleC50cz9kM2ZjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IHsgUE9MTFlTIH0gZnJvbSAnLi9wb2xseXMnO1xuXG50eXBlIFJlc3BvbnNlID0ge1xuICAgIGlkOiBzdHJpbmcsXG4gICAgdGV4dDogc3RyaW5nXG59XG5cbnR5cGUgUXVlc3Rpb24gPSB7XG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICBpZDogc3RyaW5nLFxuICAgIHJlc3BvbnNlczogQXJyYXk8UmVzcG9uc2U+XG59XG5cbnR5cGUgUG9sbHkgPSB7XG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICBpZDogc3RyaW5nLFxuICAgIHF1ZXN0aW9uczogQXJyYXk8UXVlc3Rpb24+XG59XG5cbnR5cGUgUG9sbHlzID0gQXJyYXk8UG9sbHk+O1xuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKFxuICAgIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gICAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8UG9sbHlzPlxuKSB7XG4gICAgY29uc3QgcG9sbHlzID0gUE9MTFlTO1xuXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24ocG9sbHlzKVxufVxuIl0sIm5hbWVzIjpbIlBPTExZUyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJwb2xseXMiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/pollys/index.ts\n");

/***/ }),

/***/ "(api)/./pages/api/pollys/pollys.js":
/*!************************************!*\
  !*** ./pages/api/pollys/pollys.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"POLLYS\": () => (/* binding */ POLLYS)\n/* harmony export */ });\nconst POLLYS = [\n    {\n        title: \"Polly1\",\n        id: \"1\",\n        questions: [\n            {\n                title: \"question1\",\n                id: \"1\",\n                responses: [\n                    {\n                        id: \"1\",\n                        text: \"response1\"\n                    },\n                    {\n                        id: \"2\",\n                        text: \"response2\"\n                    },\n                    {\n                        id: \"3\",\n                        text: \"response3\"\n                    }\n                ]\n            }\n        ]\n    },\n    {\n        title: \"Polly2\",\n        id: \"2\",\n        questions: [\n            {\n                title: \"question1\",\n                id: \"1\",\n                responses: [\n                    {\n                        id: \"1\",\n                        text: \"response1\"\n                    }\n                ]\n            }\n        ]\n    },\n    {\n        title: \"Polly3\",\n        id: \"3\",\n        questions: [\n            {\n                title: \"question1\",\n                id: \"1\",\n                responses: [\n                    {\n                        id: \"1\",\n                        text: \"response1\"\n                    }\n                ]\n            }\n        ]\n    }\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9sbHlzL3BvbGx5cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsU0FBUztJQUNsQjtRQUNJQyxPQUFPO1FBQ1BDLElBQUk7UUFDSkMsV0FBVztZQUNQO2dCQUNJRixPQUFPO2dCQUNQQyxJQUFJO2dCQUNKRSxXQUFXO29CQUNQO3dCQUNJRixJQUFJO3dCQUNKRyxNQUFNO29CQUNWO29CQUNBO3dCQUNJSCxJQUFJO3dCQUNKRyxNQUFNO29CQUNWO29CQUNBO3dCQUNJSCxJQUFJO3dCQUNKRyxNQUFNO29CQUNWO2lCQUNIO1lBQ0w7U0FDSDtJQUNMO0lBQ0E7UUFDSUosT0FBTztRQUNQQyxJQUFJO1FBQ0pDLFdBQVc7WUFDUDtnQkFDSUYsT0FBTztnQkFDUEMsSUFBSTtnQkFDSkUsV0FBVztvQkFDUDt3QkFDSUYsSUFBSTt3QkFDSkcsTUFBTTtvQkFDVjtpQkFDSDtZQUNMO1NBQ0g7SUFDTDtJQUNBO1FBQ0lKLE9BQU87UUFDUEMsSUFBSTtRQUNKQyxXQUFXO1lBQ1A7Z0JBQ0lGLE9BQU87Z0JBQ1BDLElBQUk7Z0JBQ0pFLFdBQVc7b0JBQ1A7d0JBQ0lGLElBQUk7d0JBQ0pHLE1BQU07b0JBQ1Y7aUJBQ0g7WUFDTDtTQUNIO0lBQ0w7Q0FDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9sbHktYXBwLy4vcGFnZXMvYXBpL3BvbGx5cy9wb2xseXMuanM/YTVlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgUE9MTFlTID0gW1xuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiUG9sbHkxXCIsXG4gICAgICAgIGlkOiBcIjFcIixcbiAgICAgICAgcXVlc3Rpb25zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwicXVlc3Rpb24xXCIsXG4gICAgICAgICAgICAgICAgaWQ6IFwiMVwiLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcInJlc3BvbnNlMVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogXCIyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcInJlc3BvbnNlMlwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogXCIzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcInJlc3BvbnNlM1wiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCJQb2xseTJcIixcbiAgICAgICAgaWQ6IFwiMlwiLFxuICAgICAgICBxdWVzdGlvbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJxdWVzdGlvbjFcIixcbiAgICAgICAgICAgICAgICBpZDogXCIxXCIsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwicmVzcG9uc2UxXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIlBvbGx5M1wiLFxuICAgICAgICBpZDogXCIzXCIsXG4gICAgICAgIHF1ZXN0aW9uczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcInF1ZXN0aW9uMVwiLFxuICAgICAgICAgICAgICAgIGlkOiBcIjFcIixcbiAgICAgICAgICAgICAgICByZXNwb25zZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJyZXNwb25zZTFcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuXTsiXSwibmFtZXMiOlsiUE9MTFlTIiwidGl0bGUiLCJpZCIsInF1ZXN0aW9ucyIsInJlc3BvbnNlcyIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/pollys/pollys.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/pollys/index.ts"));
module.exports = __webpack_exports__;

})();