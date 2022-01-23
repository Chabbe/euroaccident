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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Home() {\n    const { 0: username , 1: setUsername  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: loginStatus , 1: setloginStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSubmit = async (e)=>{\n        console.log(username);\n        e.preventDefault();\n        if (!loginStatus) {\n            const res = await fetch(\"/api/login\", {\n                method: \"POST\",\n                headers: {\n                    Accept: \"application/json, text/plain, */*\",\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    username\n                })\n            });\n            if (res.status === 200) {\n                //If login is successful, prevent further login attempts.\n                // setloginStatus(true);\n                console.log(res);\n            }\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mx-auto h-[100vh] flex flex-col justify-center font-libre\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white py-[50px] px-[50px] w-3/4 md:w-3/4 lg:w-1/2 mx-auto rounded-[22px]\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"mb-4 text-[33px]\",\n                    children: \"Logga in med ditt anv\\xe4ndarnamn\"\n                }, void 0, false, {\n                    fileName: \"/Users/charliehenriksson/repos/trash/euroaccident/pages/index.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Ange ditt anv\\xe4ndarnamn\",\n                    className: \"rounded-[11px] w-full block border-2 border-solid py-4 pl-4 mb-4 border-gray-300 focus:outline-none focus-within:border-pink-brand placeholder:font-libre\",\n                    onChange: (e)=>{\n                        setUsername(e.target.value);\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/charliehenriksson/repos/trash/euroaccident/pages/index.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"rounded-[22px] bg-pink-brand py-2 px-7 text-white text-[24px]\",\n                    onClick: handleSubmit,\n                    children: \"Logga in\"\n                }, void 0, false, {\n                    fileName: \"/Users/charliehenriksson/repos/trash/euroaccident/pages/index.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/charliehenriksson/repos/trash/euroaccident/pages/index.js\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/charliehenriksson/repos/trash/euroaccident/pages/index.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBZ0M7QUFFakIsUUFBUSxDQUFDQyxJQUFJLEdBQUcsQ0FBQztJQUM5QixLQUFLLE1BQUVDLFFBQVEsTUFBRUMsV0FBVyxNQUFJSCwrQ0FBUSxDQUFDLENBQUU7SUFDM0MsS0FBSyxNQUFFSSxXQUFXLE1BQUVDLGNBQWMsTUFBSUwsK0NBQVEsQ0FBQyxLQUFLO0lBRXBELEtBQUssQ0FBQ00sWUFBWSxVQUFVQyxDQUFDLEdBQUssQ0FBQztRQUNqQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNQLFFBQVE7UUFDcEJLLENBQUMsQ0FBQ0csY0FBYztRQUVoQixFQUFFLEdBQUdOLFdBQVcsRUFBRSxDQUFDO1lBQ2pCLEtBQUssQ0FBQ08sR0FBRyxHQUFHLEtBQUssQ0FBQ0MsS0FBSyxDQUFDLENBQVksYUFBRSxDQUFDO2dCQUNyQ0MsTUFBTSxFQUFFLENBQU07Z0JBQ2RDLE9BQU8sRUFBRSxDQUFDO29CQUNSQyxNQUFNLEVBQUUsQ0FBbUM7b0JBQzNDLENBQWMsZUFBRSxDQUFrQjtnQkFDcEMsQ0FBQztnQkFDREMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQyxDQUFDO29CQUFDaEIsUUFBUTtnQkFBQyxDQUFDO1lBQ25DLENBQUM7WUFFRCxFQUFFLEVBQUVTLEdBQUcsQ0FBQ1EsTUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDO2dCQUN2QixFQUF5RDtnQkFDekQsRUFBd0I7Z0JBQ3hCWCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0UsR0FBRztZQUNqQixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLDZFQUNIUyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUEyRDs4RkFDdkVELENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQTZFOzs0RkFDekZDLENBQUU7b0JBQUNELFNBQVMsRUFBQyxDQUFrQjs4QkFBQyxDQUE4Qjs7Ozs7OzRGQUM3REUsQ0FBSTtvQkFDSkMsSUFBSSxFQUFDLENBQU07b0JBQ1hDLFdBQVcsRUFBQyxDQUF3QjtvQkFDcENKLFNBQVMsRUFBQyxDQUEySjtvQkFDcktLLFFBQVEsR0FBR25CLENBQUMsR0FBSyxDQUFDO3dCQUNoQkosV0FBVyxDQUFDSSxDQUFDLENBQUNvQixNQUFNLENBQUNDLEtBQUs7b0JBQzVCLENBQUM7Ozs7Ozs0RkFFRkMsQ0FBTTtvQkFDTFIsU0FBUyxFQUFDLENBQStEO29CQUN6RVMsT0FBTyxFQUFFeEIsWUFBWTs4QkFDdEIsQ0FFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJUixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXVyb2FjY2lkZW50Ly4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbG9naW5TdGF0dXMsIHNldGxvZ2luU3RhdHVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHVzZXJuYW1lKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoIWxvZ2luU3RhdHVzKSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcIi9hcGkvbG9naW5cIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKlwiLFxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHVzZXJuYW1lIH0pLFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgLy9JZiBsb2dpbiBpcyBzdWNjZXNzZnVsLCBwcmV2ZW50IGZ1cnRoZXIgbG9naW4gYXR0ZW1wdHMuXG4gICAgICAgIC8vIHNldGxvZ2luU3RhdHVzKHRydWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBoLVsxMDB2aF0gZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBmb250LWxpYnJlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHB5LVs1MHB4XSBweC1bNTBweF0gdy0zLzQgbWQ6dy0zLzQgbGc6dy0xLzIgbXgtYXV0byByb3VuZGVkLVsyMnB4XVwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWItNCB0ZXh0LVszM3B4XVwiPkxvZ2dhIGluIG1lZCBkaXR0IGFudsOkbmRhcm5hbW48L2gyPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJBbmdlIGRpdHQgYW52w6RuZGFybmFtblwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1bMTFweF0gdy1mdWxsIGJsb2NrIGJvcmRlci0yIGJvcmRlci1zb2xpZCBweS00IHBsLTQgbWItNCBib3JkZXItZ3JheS0zMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzLXdpdGhpbjpib3JkZXItcGluay1icmFuZCBwbGFjZWhvbGRlcjpmb250LWxpYnJlXCJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgIHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1bMjJweF0gYmctcGluay1icmFuZCBweS0yIHB4LTcgdGV4dC13aGl0ZSB0ZXh0LVsyNHB4XVwiXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fVxuICAgICAgICA+XG4gICAgICAgICAgTG9nZ2EgaW5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkhvbWUiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwibG9naW5TdGF0dXMiLCJzZXRsb2dpblN0YXR1cyIsImhhbmRsZVN1Ym1pdCIsImUiLCJjb25zb2xlIiwibG9nIiwicHJldmVudERlZmF1bHQiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInN0YXR1cyIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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