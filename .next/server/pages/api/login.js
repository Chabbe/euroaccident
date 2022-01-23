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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst axios = __webpack_require__(/*! axios */ \"axios\");\nasync function handler(req, res) {\n    console.log(req.body.username);\n    axios.get(\"https://my-json-server.typicode.com/proactivehealth/work-test-sample/users\").then(function(response) {\n        const exist = response.data.find((user)=>user.login == req.body.username\n        );\n        console.log(exist);\n        if (exist) {\n            res.json({\n                status: 200,\n                user: exist\n            });\n        } else {\n            res.json({\n                status: 401\n            });\n        }\n    }).catch(function(error) {\n        console.log(error);\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvbG9naW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLEtBQUssQ0FBQ0EsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLG9CQUFPO0FBRWQsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQy9DQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsR0FBRyxDQUFDSSxJQUFJLENBQUNDLFFBQVE7SUFDN0JSLEtBQUssQ0FDRlMsR0FBRyxDQUNGLENBQTRFLDZFQUU3RUMsSUFBSSxDQUFDLFFBQVEsQ0FBRUMsUUFBUSxFQUFFLENBQUM7UUFDekIsS0FBSyxDQUFDQyxLQUFLLEdBQUdELFFBQVEsQ0FBQ0UsSUFBSSxDQUFDQyxJQUFJLEVBQzdCQyxJQUFJLEdBQUtBLElBQUksQ0FBQ0MsS0FBSyxJQUFJYixHQUFHLENBQUNJLElBQUksQ0FBQ0MsUUFBUTs7UUFFM0NILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTSxLQUFLO1FBQ2pCLEVBQUUsRUFBRUEsS0FBSyxFQUFFLENBQUM7WUFDVlIsR0FBRyxDQUFDYSxJQUFJLENBQUMsQ0FBQztnQkFBQ0MsTUFBTSxFQUFFLEdBQUc7Z0JBQUVILElBQUksRUFBRUgsS0FBSztZQUFDLENBQUM7UUFDdkMsQ0FBQyxNQUFNLENBQUM7WUFDTlIsR0FBRyxDQUFDYSxJQUFJLENBQUMsQ0FBQztnQkFBQ0MsTUFBTSxFQUFFLEdBQUc7WUFBQyxDQUFDO1FBQzFCLENBQUM7SUFDSCxDQUFDLEVBQ0FDLEtBQUssQ0FBQyxRQUFRLENBQUVDLEtBQUssRUFBRSxDQUFDO1FBQ3ZCZixPQUFPLENBQUNDLEdBQUcsQ0FBQ2MsS0FBSztJQUNuQixDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V1cm9hY2NpZGVudC8uL3BhZ2VzL2FwaS9sb2dpbi5qcz9hZTg4Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGF4aW9zID0gcmVxdWlyZShcImF4aW9zXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnNvbGUubG9nKHJlcS5ib2R5LnVzZXJuYW1lKTtcbiAgYXhpb3NcbiAgICAuZ2V0KFxuICAgICAgXCJodHRwczovL215LWpzb24tc2VydmVyLnR5cGljb2RlLmNvbS9wcm9hY3RpdmVoZWFsdGgvd29yay10ZXN0LXNhbXBsZS91c2Vyc1wiXG4gICAgKVxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgY29uc3QgZXhpc3QgPSByZXNwb25zZS5kYXRhLmZpbmQoXG4gICAgICAgICh1c2VyKSA9PiB1c2VyLmxvZ2luID09IHJlcS5ib2R5LnVzZXJuYW1lXG4gICAgICApO1xuICAgICAgY29uc29sZS5sb2coZXhpc3QpO1xuICAgICAgaWYgKGV4aXN0KSB7XG4gICAgICAgIHJlcy5qc29uKHsgc3RhdHVzOiAyMDAsIHVzZXI6IGV4aXN0IH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzLmpzb24oeyBzdGF0dXM6IDQwMSB9KTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsImJvZHkiLCJ1c2VybmFtZSIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImV4aXN0IiwiZGF0YSIsImZpbmQiLCJ1c2VyIiwibG9naW4iLCJqc29uIiwic3RhdHVzIiwiY2F0Y2giLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/login.js\n");

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