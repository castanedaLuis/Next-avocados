"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Navbar/index.js":
/*!************************************!*\
  !*** ./components/Navbar/index.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction index() {\n    _s();\n    const [productCarrito, setProductCarrito] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>{\n        return state;\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setProductCarrito(data.avocados.length);\n        console.log(\"nav store\", data.avocados.length);\n    }, [\n        data\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"navMain\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/\",\n                    legacyBehavior: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"linkNav\",\n                        children: \"Home \\uD83C\\uDFE0\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alten_mx/Documents/Platzi/Next/next-aguacates/components/Navbar/index.js\",\n                        lineNumber: 21,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/alten_mx/Documents/Platzi/Next/next-aguacates/components/Navbar/index.js\",\n                    lineNumber: 20,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/about\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"linkNav\",\n                        children: \"About \\uD83C\\uDF0E\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alten_mx/Documents/Platzi/Next/next-aguacates/components/Navbar/index.js\",\n                        lineNumber: 24,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/alten_mx/Documents/Platzi/Next/next-aguacates/components/Navbar/index.js\",\n                    lineNumber: 23,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/carrito\",\n                    legacyBehavior: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"apanCarrito\",\n                            children: [\n                                \"Carrito \".concat(productCarrito),\n                                \" \\uD83D\\uDED2\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alten_mx/Documents/Platzi/Next/next-aguacates/components/Navbar/index.js\",\n                            lineNumber: 29,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/alten_mx/Documents/Platzi/Next/next-aguacates/components/Navbar/index.js\",\n                        lineNumber: 28,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/alten_mx/Documents/Platzi/Next/next-aguacates/components/Navbar/index.js\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/alten_mx/Documents/Platzi/Next/next-aguacates/components/Navbar/index.js\",\n            lineNumber: 18,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(index, \"NaI/oc5i28mVmpdahcrrV2Isk0E=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUErQztBQUNsQjtBQUMwQjtBQUV2RCxTQUFTTSxRQUFROztJQUNiLE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR1AsK0NBQVFBLENBQUM7SUFFckQsTUFBTVEsT0FBT0osd0RBQVdBLENBQUNLLENBQUFBLFFBQVE7UUFDekIsT0FBT0E7SUFDYjtJQUVBUixnREFBU0EsQ0FBQyxJQUFJO1FBQ1pNLGtCQUFrQkMsS0FBS0UsUUFBUSxDQUFDQyxNQUFNO1FBQ3RDQyxRQUFRQyxHQUFHLENBQUMsYUFBWUwsS0FBS0UsUUFBUSxDQUFDQyxNQUFNO0lBQzlDLEdBQUU7UUFBQ0g7S0FBSztJQUNWLHFCQUNJO2tCQUNJLDRFQUFDTTtZQUFJQyxXQUFVOzs4QkFFWCw4REFBQ2Isa0RBQUlBO29CQUFDYyxNQUFNO29CQUFLQyxjQUFjOzhCQUMzQiw0RUFBQ0M7d0JBQUVILFdBQVU7a0NBQVU7Ozs7Ozs7Ozs7OzhCQUUzQiw4REFBQ2Isa0RBQUlBO29CQUFDYyxNQUFNOzhCQUNSLDRFQUFDRTt3QkFBRUgsV0FBVTtrQ0FBVTs7Ozs7Ozs7Ozs7OEJBRzNCLDhEQUFDYixrREFBSUE7b0JBQUNjLE1BQU07b0JBQVlDLGNBQWM7OEJBQ2xDLDRFQUFDRTtrQ0FDRyw0RUFBQ0M7NEJBQUtMLFdBQVU7O2dDQUFnQixXQUF5QixPQUFmVDtnQ0FBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFuRjtHQWhDU0Q7O1FBR1FELG9EQUFXQTs7O0FBK0I1QiwrREFBZUMsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdmJhci9pbmRleC5qcz9hOGFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5mdW5jdGlvbiBpbmRleCgpIHtcbiAgICBjb25zdCBbcHJvZHVjdENhcnJpdG8sIHNldFByb2R1Y3RDYXJyaXRvXSA9IHVzZVN0YXRlKDApXG5cbiAgICBjb25zdCBkYXRhID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT57XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgIH0pXG4gICAgXG4gICAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgc2V0UHJvZHVjdENhcnJpdG8oZGF0YS5hdm9jYWRvcy5sZW5ndGgpXG4gICAgICAgIGNvbnNvbGUubG9nKCduYXYgc3RvcmUnLGRhdGEuYXZvY2Fkb3MubGVuZ3RoKTtcbiAgICAgIH0sW2RhdGFdKVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT0nbmF2TWFpbic+XG5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnLyd9IGxlZ2FjeUJlaGF2aW9yPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2xpbmtOYXYnPkhvbWUg8J+PoDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9hYm91dCd9ID5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdsaW5rTmF2Jz5BYm91dCDwn4yOPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvY2Fycml0byd9IGxlZ2FjeUJlaGF2aW9yPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdhcGFuQ2Fycml0byc+e2BDYXJyaXRvICR7cHJvZHVjdENhcnJpdG99YH0g8J+bkjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICA8L25hdj5cblxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaW5rIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImluZGV4IiwicHJvZHVjdENhcnJpdG8iLCJzZXRQcm9kdWN0Q2Fycml0byIsImRhdGEiLCJzdGF0ZSIsImF2b2NhZG9zIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsIm5hdiIsImNsYXNzTmFtZSIsImhyZWYiLCJsZWdhY3lCZWhhdmlvciIsImEiLCJkaXYiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navbar/index.js\n"));

/***/ })

});