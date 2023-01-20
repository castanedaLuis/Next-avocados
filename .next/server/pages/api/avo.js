"use strict";
(() => {
var exports = {};
exports.id = 614;
exports.ids = [614];
exports.modules = {

/***/ 3844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ avo)
});

;// CONCATENATED MODULE: external "http"
const external_http_namespaceObject = require("http");
// EXTERNAL MODULE: ./database/db.js + 1 modules
var database_db = __webpack_require__(9679);
;// CONCATENATED MODULE: ./pages/api/avo/index.js


const allAvos = async (req, res)=>{
    try {
        const db = new database_db/* default */.Z();
        const allEntries = await db.getAll();
        const length = allEntries.length;
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        // res.setHeader('Access-Control-Allow-Origin', '*')
        //res.setHeader('Access-Control-Allow-Methods', 'GET')
        res.end(JSON.stringify({
            data: allEntries,
            length
        }));
    } catch (e) {
        console.error(e);
        res.statusCode = 500;
        res.end(JSON.stringify({
            length: 0,
            data: [],
            error: "Something went wrong"
        }));
    }
};
/* harmony default export */ const avo = (allAvos);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [679], () => (__webpack_exec__(3844)));
module.exports = __webpack_exports__;

})();