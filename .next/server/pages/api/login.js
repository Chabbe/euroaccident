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
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst axios = __webpack_require__(/*! axios */ \"axios\");\nasync function handler(req, res) {\n    console.log(req.body.username);\n    axios.get(\"https://my-json-server.typicode.com/proactivehealth/work-test-sample/users\").then(function(response) {\n        response.data.map((user)=>{\n            if (user.login === req.body.username) {\n                res.send();\n            }\n        });\n    }).catch(function(error) {\n        // handle error\n        console.log(error);\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvbG9naW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLEtBQUssQ0FBQ0EsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLG9CQUFPO0FBRWQsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQy9DQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsR0FBRyxDQUFDSSxJQUFJLENBQUNDLFFBQVE7SUFFN0JSLEtBQUssQ0FDRlMsR0FBRyxDQUNGLENBQTRFLDZFQUU3RUMsSUFBSSxDQUFDLFFBQVEsQ0FBRUMsUUFBUSxFQUFFLENBQUM7UUFDekJBLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLEVBQUVDLElBQUksR0FBSyxDQUFDO1lBQzNCLEVBQUUsRUFBRUEsSUFBSSxDQUFDQyxLQUFLLEtBQUtaLEdBQUcsQ0FBQ0ksSUFBSSxDQUFDQyxRQUFRLEVBQUUsQ0FBQztnQkFDckNKLEdBQUcsQ0FBQ1ksSUFBSTtZQUNWLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQyxFQUNBQyxLQUFLLENBQUMsUUFBUSxDQUFFQyxLQUFLLEVBQUUsQ0FBQztRQUN2QixFQUFlO1FBQ2ZiLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDWSxLQUFLO0lBQ25CLENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXVyb2FjY2lkZW50Ly4vcGFnZXMvYXBpL2xvZ2luLmpzP2FlODgiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXhpb3MgPSByZXF1aXJlKFwiYXhpb3NcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgY29uc29sZS5sb2cocmVxLmJvZHkudXNlcm5hbWUpO1xuXG4gIGF4aW9zXG4gICAgLmdldChcbiAgICAgIFwiaHR0cHM6Ly9teS1qc29uLXNlcnZlci50eXBpY29kZS5jb20vcHJvYWN0aXZlaGVhbHRoL3dvcmstdGVzdC1zYW1wbGUvdXNlcnNcIlxuICAgIClcbiAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIHJlc3BvbnNlLmRhdGEubWFwKCh1c2VyKSA9PiB7XG4gICAgICAgIGlmICh1c2VyLmxvZ2luID09PSByZXEuYm9keS51c2VybmFtZSkge1xuICAgICAgICAgIHJlcy5zZW5kKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgLy8gaGFuZGxlIGVycm9yXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSk7XG59XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJyZXF1aXJlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJib2R5IiwidXNlcm5hbWUiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwibWFwIiwidXNlciIsImxvZ2luIiwic2VuZCIsImNhdGNoIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/login.js"));
module.exports = __webpack_exports__;

})();