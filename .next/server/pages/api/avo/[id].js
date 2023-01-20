"use strict";
(() => {
var exports = {};
exports.id = 633;
exports.ids = [633];
exports.modules = {

/***/ 2656:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_)
});

;// CONCATENATED MODULE: external "next/dist/lib/import-next-warning"
const import_next_warning_namespaceObject = require("next/dist/lib/import-next-warning");
// EXTERNAL MODULE: ./database/db.js + 1 modules
var database_db = __webpack_require__(9679);
;// CONCATENATED MODULE: ./pages/api/avo/[id].js


// import enablePublicAccess from '@cors'
const AvoDetail = async (req, res)=>{
    try {
        // Generally, you would not want this in your apps.
        // See more in 'cors.js'
        //await enablePublicAccess(req, res)
        const db = new database_db/* default */.Z();
        const avoId = req.query.id;
        const avo = await db.getById(avoId);
        // Notice: We're using Next.JS response helpers here :)
        // https://nextjs.org/docs/api-routes/response-helpers
        res.status(200).json(avo);
    } catch (e) {
        console.error(e);
        res.status(404).end();
    }
};
/* harmony default export */ const _id_ = (AvoDetail);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [679], () => (__webpack_exec__(2656)));
module.exports = __webpack_exports__;

})();