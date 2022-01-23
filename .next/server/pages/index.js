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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Home() {\n    const { 0: username , 1: setUsername  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const { 0: loginStatus , 1: setloginStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const handleSubmit = async (e)=>{\n        console.log(username);\n        e.preventDefault();\n        if (!loginStatus) {\n            axios__WEBPACK_IMPORTED_MODULE_1___default().post(\"/api/login\", {\n                username: username\n            }).then(function(response) {\n                console.log(response);\n            }).catch(function(error) {\n                console.log(error);\n            });\n        //If login is successful, prevent further login attempts.\n        // setloginStatus(true);\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mx-auto h-[100vh] flex flex-col justify-center font-libre\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white py-[50px] px-[50px] w-3/4 md:w-3/4 lg:w-1/2 mx-auto rounded-[22px]\",\n            style: {\n                boxShadow: \"5px 8px 25px 10px rgba(0,0,0,0.3)\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"mb-4 text-[33px]\",\n                    children: \"Logga in med ditt anv\\xe4ndarnamn\"\n                }, void 0, false, {\n                    fileName: \"/Users/charliehenriksson/repos/trash/euroaccident/pages/index.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Ange ditt anv\\xe4ndarnamn\",\n                    className: \"rounded-[11px] w-full block border-2 border-solid py-4 pl-4 mb-4 border-gray-300 focus:outline-none focus-within:border-pink-brand placeholder:font-libre\",\n                    onChange: (e)=>{\n                        setUsername(e.target.value);\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/charliehenriksson/repos/trash/euroaccident/pages/index.js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"rounded-[22px] bg-pink-brand py-2 px-7 text-white text-[24px]\",\n                    onClick: handleSubmit,\n                    children: \"Logga in\"\n                }, void 0, false, {\n                    fileName: \"/Users/charliehenriksson/repos/trash/euroaccident/pages/index.js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/charliehenriksson/repos/trash/euroaccident/pages/index.js\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/charliehenriksson/repos/trash/euroaccident/pages/index.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF5QjtBQUNPO0FBRWpCLFFBQVEsQ0FBQ0UsSUFBSSxHQUFHLENBQUM7SUFDOUIsS0FBSyxNQUFFQyxRQUFRLE1BQUVDLFdBQVcsTUFBSUgsK0NBQVEsQ0FBQyxDQUFFO0lBQzNDLEtBQUssTUFBRUksV0FBVyxNQUFFQyxjQUFjLE1BQUlMLCtDQUFRLENBQUMsS0FBSztJQUVwRCxLQUFLLENBQUNNLFlBQVksVUFBVUMsQ0FBQyxHQUFLLENBQUM7UUFDakNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUCxRQUFRO1FBQ3BCSyxDQUFDLENBQUNHLGNBQWM7UUFFaEIsRUFBRSxHQUFHTixXQUFXLEVBQUUsQ0FBQztZQUNqQkwsaURBQ08sQ0FBQyxDQUFZLGFBQUUsQ0FBQztnQkFDbkJHLFFBQVEsRUFBRUEsUUFBUTtZQUNwQixDQUFDLEVBQ0FVLElBQUksQ0FBQyxRQUFRLENBQUVDLFFBQVEsRUFBRSxDQUFDO2dCQUN6QkwsT0FBTyxDQUFDQyxHQUFHLENBQUNJLFFBQVE7WUFDdEIsQ0FBQyxFQUNBQyxLQUFLLENBQUMsUUFBUSxDQUFFQyxLQUFLLEVBQUUsQ0FBQztnQkFDdkJQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTSxLQUFLO1lBQ25CLENBQUM7UUFFSCxFQUF5RDtRQUN6RCxFQUF3QjtRQUMxQixDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sNkVBQ0hDLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQTJEOzhGQUN2RUQsQ0FBRztZQUNGQyxTQUFTLEVBQUMsQ0FBNkU7WUFDdkZDLEtBQUssRUFBRSxDQUFDO2dCQUNOQyxTQUFTLEVBQUUsQ0FBbUM7WUFDaEQsQ0FBQzs7NEZBRUFDLENBQUU7b0JBQUNILFNBQVMsRUFBQyxDQUFrQjs4QkFBQyxDQUE4Qjs7Ozs7OzRGQUM3REksQ0FBSTtvQkFDSkMsSUFBSSxFQUFDLENBQU07b0JBQ1hDLFdBQVcsRUFBQyxDQUF3QjtvQkFDcENOLFNBQVMsRUFBQyxDQUEySjtvQkFDcktPLFFBQVEsR0FBR2pCLENBQUMsR0FBSyxDQUFDO3dCQUNoQkosV0FBVyxDQUFDSSxDQUFDLENBQUNrQixNQUFNLENBQUNDLEtBQUs7b0JBQzVCLENBQUM7Ozs7Ozs0RkFFRkMsQ0FBTTtvQkFDTFYsU0FBUyxFQUFDLENBQStEO29CQUN6RVcsT0FBTyxFQUFFdEIsWUFBWTs4QkFDdEIsQ0FFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJUixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXVyb2FjY2lkZW50Ly4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbG9naW5TdGF0dXMsIHNldGxvZ2luU3RhdHVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHVzZXJuYW1lKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoIWxvZ2luU3RhdHVzKSB7XG4gICAgICBheGlvc1xuICAgICAgICAucG9zdChcIi9hcGkvbG9naW5cIiwge1xuICAgICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcblxuICAgICAgLy9JZiBsb2dpbiBpcyBzdWNjZXNzZnVsLCBwcmV2ZW50IGZ1cnRoZXIgbG9naW4gYXR0ZW1wdHMuXG4gICAgICAvLyBzZXRsb2dpblN0YXR1cyh0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gaC1bMTAwdmhdIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgZm9udC1saWJyZVwiPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSBweS1bNTBweF0gcHgtWzUwcHhdIHctMy80IG1kOnctMy80IGxnOnctMS8yIG14LWF1dG8gcm91bmRlZC1bMjJweF1cIlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGJveFNoYWRvdzogXCI1cHggOHB4IDI1cHggMTBweCByZ2JhKDAsMCwwLDAuMylcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1iLTQgdGV4dC1bMzNweF1cIj5Mb2dnYSBpbiBtZWQgZGl0dCBhbnbDpG5kYXJuYW1uPC9oMj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQW5nZSBkaXR0IGFudsOkbmRhcm5hbW5cIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtWzExcHhdIHctZnVsbCBibG9jayBib3JkZXItMiBib3JkZXItc29saWQgcHktNCBwbC00IG1iLTQgYm9yZGVyLWdyYXktMzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1cy13aXRoaW46Ym9yZGVyLXBpbmstYnJhbmQgcGxhY2Vob2xkZXI6Zm9udC1saWJyZVwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtWzIycHhdIGJnLXBpbmstYnJhbmQgcHktMiBweC03IHRleHQtd2hpdGUgdGV4dC1bMjRweF1cIlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgPlxuICAgICAgICAgIExvZ2dhIGluXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwibG9naW5TdGF0dXMiLCJzZXRsb2dpblN0YXR1cyIsImhhbmRsZVN1Ym1pdCIsImUiLCJjb25zb2xlIiwibG9nIiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiY2F0Y2giLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiYm94U2hhZG93IiwiaDIiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();