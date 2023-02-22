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
exports.id = "pages/api/getPollys";
exports.ids = ["pages/api/getPollys"];
exports.modules = {

/***/ "(api)/./pages/api/getPollys.ts":
/*!********************************!*\
  !*** ./pages/api/getPollys.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nconst pollys = [\n    {\n        title: \"Polly1\",\n        id: \"1\",\n        answers: [\n            {\n                title: \"answer1\",\n                id: \"1\",\n                responses: [\n                    {\n                        id: \"1\",\n                        text: \"response1\"\n                    }\n                ]\n            }\n        ]\n    },\n    {\n        title: \"Polly2\",\n        id: \"2\",\n        answers: [\n            {\n                title: \"answer1\",\n                id: \"1\",\n                responses: [\n                    {\n                        id: \"1\",\n                        text: \"response1\"\n                    }\n                ]\n            }\n        ]\n    },\n    {\n        title: \"Polly3\",\n        id: \"3\",\n        answers: [\n            {\n                title: \"answer1\",\n                id: \"1\",\n                responses: [\n                    {\n                        id: \"1\",\n                        text: \"response1\"\n                    }\n                ]\n            }\n        ]\n    }\n];\nfunction handler(req, res) {\n    res.status(200).json(pollys);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0UG9sbHlzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSw2RUFBNkU7QUF1QjdFLE1BQU1BLFNBQWlCO0lBQ25CO1FBQ0lDLE9BQU87UUFDUEMsSUFBSTtRQUNKQyxTQUFTO1lBQ0w7Z0JBQ0lGLE9BQU87Z0JBQ1BDLElBQUk7Z0JBQ0pFLFdBQVc7b0JBQ1A7d0JBQ0lGLElBQUk7d0JBQ0pHLE1BQU07b0JBQ1Y7aUJBQ0g7WUFDTDtTQUNIO0lBQ0w7SUFDQTtRQUNJSixPQUFPO1FBQ1BDLElBQUk7UUFDSkMsU0FBUztZQUNMO2dCQUNJRixPQUFPO2dCQUNQQyxJQUFJO2dCQUNKRSxXQUFXO29CQUNQO3dCQUNJRixJQUFJO3dCQUNKRyxNQUFNO29CQUNWO2lCQUNIO1lBQ0w7U0FDSDtJQUNMO0lBQ0E7UUFDSUosT0FBTztRQUNQQyxJQUFJO1FBQ0pDLFNBQVM7WUFDTDtnQkFDSUYsT0FBTztnQkFDUEMsSUFBSTtnQkFDSkUsV0FBVztvQkFDUDt3QkFDSUYsSUFBSTt3QkFDSkcsTUFBTTtvQkFDVjtpQkFDSDtZQUNMO1NBQ0g7SUFDTDtDQUNIO0FBR2MsU0FBU0MsUUFDcEJDLEdBQW1CLEVBQ25CQyxHQUE0QixFQUM5QjtJQUNFQSxJQUFJQyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDVjtBQUN6QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9sbHktYXBwLy4vcGFnZXMvYXBpL2dldFBvbGx5cy50cz9kMTZiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xuXG50eXBlIFJlc3BvbnNlID0ge1xuICAgIGlkOiBzdHJpbmcsXG4gICAgdGV4dDogc3RyaW5nXG59XG5cbnR5cGUgQW5zd2VyID0ge1xuICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgaWQ6IHN0cmluZyxcbiAgICByZXNwb25zZXM6IEFycmF5PFJlc3BvbnNlPlxufVxuXG50eXBlIFBvbGx5ID0ge1xuICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgaWQ6IHN0cmluZyxcbiAgICBhbnN3ZXJzOiBBcnJheTxBbnN3ZXI+XG59XG5cbnR5cGUgUG9sbHlzID0gQXJyYXk8UG9sbHk+O1xuXG5cbmNvbnN0IHBvbGx5czogUG9sbHlzID0gW1xuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiUG9sbHkxXCIsXG4gICAgICAgIGlkOiBcIjFcIixcbiAgICAgICAgYW5zd2VyczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcImFuc3dlcjFcIixcbiAgICAgICAgICAgICAgICBpZDogXCIxXCIsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwicmVzcG9uc2UxXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIlBvbGx5MlwiLFxuICAgICAgICBpZDogXCIyXCIsXG4gICAgICAgIGFuc3dlcnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJhbnN3ZXIxXCIsXG4gICAgICAgICAgICAgICAgaWQ6IFwiMVwiLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcInJlc3BvbnNlMVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCJQb2xseTNcIixcbiAgICAgICAgaWQ6IFwiM1wiLFxuICAgICAgICBhbnN3ZXJzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiYW5zd2VyMVwiLFxuICAgICAgICAgICAgICAgIGlkOiBcIjFcIixcbiAgICAgICAgICAgICAgICByZXNwb25zZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJyZXNwb25zZTFcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuXTtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKFxuICAgIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gICAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8UG9sbHlzPlxuKSB7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24ocG9sbHlzKVxufVxuIl0sIm5hbWVzIjpbInBvbGx5cyIsInRpdGxlIiwiaWQiLCJhbnN3ZXJzIiwicmVzcG9uc2VzIiwidGV4dCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/getPollys.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getPollys.ts"));
module.exports = __webpack_exports__;

})();