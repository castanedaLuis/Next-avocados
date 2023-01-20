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

/***/ "./reducers/avocados.js":
/*!******************************!*\
  !*** ./reducers/avocados.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"avocadosReducer\": function() { return /* binding */ avocadosReducer; }\n/* harmony export */ });\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ \"./actions/types.js\");\n\nconst avocadosReducer = (state, action)=>{\n    //console.log('state',state);\n    switch(action.type){\n        case _actions_types__WEBPACK_IMPORTED_MODULE_0__.SET_AVOCADOS:\n            return {\n                ...state,\n                avocados: [\n                    ...state.avocados,\n                    action.payload\n                ]\n            };\n        case _actions_types__WEBPACK_IMPORTED_MODULE_0__.GET_AVOCADOS:\n        case _actions_types__WEBPACK_IMPORTED_MODULE_0__.SET_FAVORITE:\n            const currentPokemonIndex = state.get(\"pokemons\").findIndex((pokemon)=>{\n                return pokemon.get(\"id\") === action.payload.pokemonId;\n            });\n            if (currentPokemonIndex < 0) {\n                return state;\n            }\n            //agregamos favorite al estado\n            const isFavorite = state.get(\"pokemons\").get(currentPokemonIndex).get(\"favorite\");\n            return state.setIn([\n                \"pokemons\",\n                currentPokemonIndex,\n                \"favorite\"\n            ], !isFavorite);\n        // case SET_LOADING:\n        //   return { ...state, loading: action.payload };\n        default:\n            return state;\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy9hdm9jYWRvcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE0RTtBQUluRSxNQUFNRyxrQkFBa0IsQ0FBQ0MsT0FBT0MsU0FBVztJQUNoRCw2QkFBNkI7SUFDN0IsT0FBUUEsT0FBT0MsSUFBSTtRQUNqQixLQUFLTix3REFBWUE7WUFDZixPQUFPO2dCQUFFLEdBQUdJLEtBQUs7Z0JBQUNHLFVBQVU7dUJBQUlILE1BQU1HLFFBQVE7b0JBQUNGLE9BQU9HLE9BQU87aUJBQUM7WUFBQztRQUVqRSxLQUFLTix3REFBWUE7UUFFakIsS0FBS0Qsd0RBQVlBO1lBQ2YsTUFBTVEsc0JBQXNCTCxNQUFNTSxHQUFHLENBQUMsWUFBWUMsU0FBUyxDQUFDLENBQUNDLFVBQVk7Z0JBQ3ZFLE9BQU9BLFFBQVFGLEdBQUcsQ0FBQyxVQUFVTCxPQUFPRyxPQUFPLENBQUNLLFNBQVM7WUFDdkQ7WUFFQSxJQUFJSixzQkFBc0IsR0FBRztnQkFDM0IsT0FBT0w7WUFDVCxDQUFDO1lBRUQsOEJBQThCO1lBQzlCLE1BQU1VLGFBQWFWLE1BQU1NLEdBQUcsQ0FBQyxZQUFZQSxHQUFHLENBQUNELHFCQUFxQkMsR0FBRyxDQUFDO1lBQ3RFLE9BQU9OLE1BQU1XLEtBQUssQ0FBQztnQkFBQztnQkFBWU47Z0JBQW9CO2FBQVcsRUFBQyxDQUFDSztRQUVuRSxvQkFBb0I7UUFDcEIsa0RBQWtEO1FBQ2xEO1lBQ0UsT0FBT1Y7SUFDWDtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvYXZvY2Fkb3MuanM/Yzk3NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTRVRfQVZPQ0FET1MsIFNFVF9GQVZPUklURSwgR0VUX0FWT0NBRE9TIH0gZnJvbSAnLi4vYWN0aW9ucy90eXBlcyc7XG5cblxuXG4gIGV4cG9ydCBjb25zdCBhdm9jYWRvc1JlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIC8vY29uc29sZS5sb2coJ3N0YXRlJyxzdGF0ZSk7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSBTRVRfQVZPQ0FET1M6XG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLGF2b2NhZG9zOiBbLi4uc3RhdGUuYXZvY2Fkb3MsYWN0aW9uLnBheWxvYWRdIH07XG5cbiAgICAgIGNhc2UgR0VUX0FWT0NBRE9TOlxuICAgICAgICBcbiAgICAgIGNhc2UgU0VUX0ZBVk9SSVRFOlxuICAgICAgICBjb25zdCBjdXJyZW50UG9rZW1vbkluZGV4ID0gc3RhdGUuZ2V0KCdwb2tlbW9ucycpLmZpbmRJbmRleCgocG9rZW1vbikgPT4ge1xuICAgICAgICAgIHJldHVybiBwb2tlbW9uLmdldCgnaWQnKSA9PT0gYWN0aW9uLnBheWxvYWQucG9rZW1vbklkO1xuICAgICAgICB9KTtcbiAgXG4gICAgICAgIGlmIChjdXJyZW50UG9rZW1vbkluZGV4IDwgMCkge1xuICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgfVxuICBcbiAgICAgICAgLy9hZ3JlZ2Ftb3MgZmF2b3JpdGUgYWwgZXN0YWRvXG4gICAgICAgIGNvbnN0IGlzRmF2b3JpdGUgPSBzdGF0ZS5nZXQoJ3Bva2Vtb25zJykuZ2V0KGN1cnJlbnRQb2tlbW9uSW5kZXgpLmdldCgnZmF2b3JpdGUnKVxuICAgICAgICByZXR1cm4gc3RhdGUuc2V0SW4oWydwb2tlbW9ucycsIGN1cnJlbnRQb2tlbW9uSW5kZXgsJ2Zhdm9yaXRlJ10sIWlzRmF2b3JpdGUpXG4gIFxuICAgICAgLy8gY2FzZSBTRVRfTE9BRElORzpcbiAgICAgIC8vICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IGFjdGlvbi5wYXlsb2FkIH07XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9OyJdLCJuYW1lcyI6WyJTRVRfQVZPQ0FET1MiLCJTRVRfRkFWT1JJVEUiLCJHRVRfQVZPQ0FET1MiLCJhdm9jYWRvc1JlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJhdm9jYWRvcyIsInBheWxvYWQiLCJjdXJyZW50UG9rZW1vbkluZGV4IiwiZ2V0IiwiZmluZEluZGV4IiwicG9rZW1vbiIsInBva2Vtb25JZCIsImlzRmF2b3JpdGUiLCJzZXRJbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/avocados.js\n"));

/***/ })

});