(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aB": () => (/* binding */ DELETE_AVOCADOS),
/* harmony export */   "ie": () => (/* binding */ SET_FAVORITE),
/* harmony export */   "vw": () => (/* binding */ SET_AVOCADOS)
/* harmony export */ });
/* unused harmony exports SET_LOADING, GET_AVOCADOS */
const SET_AVOCADOS = "SET_AVOCADOS";
const DELETE_AVOCADOS = "DELETE_AVOCADOS";
const SET_LOADING = "SET_LOADING";
const SET_FAVORITE = "SET_FAVORITE";
const GET_AVOCADOS = "GET_AVOCADOS";


/***/ }),

/***/ 4019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app),
  "reportWebVitals": () => (/* binding */ reportWebVitals)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: ./components/NavBar/index.js




function index() {
    const [productCarrito, setProductCarrito] = (0,external_react_.useState)(0);
    const data = (0,external_react_redux_.useSelector)((state)=>{
        return state;
    });
    (0,external_react_.useEffect)(()=>{
        setProductCarrito(data.avocados.length);
    //console.log('nav store',data.avocados.length);
    }, [
        data
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            className: "navMain",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    legacyBehavior: true,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "linkNav",
                        children: "Home \uD83C\uDFE0"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/about",
                    legacyBehavior: true,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "linkNav",
                        children: "About \uD83C\uDF0E"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/carrito",
                    legacyBehavior: true,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: "apanCarrito",
                            children: [
                                `Carrito ${productCarrito}`,
                                " \uD83D\uDED2"
                            ]
                        })
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const NavBar = (index);

;// CONCATENATED MODULE: external "styled-components"
const external_styled_components_namespaceObject = require("styled-components");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_namespaceObject);
;// CONCATENATED MODULE: ./components/Footer/styles.js

const Footer = (external_styled_components_default()).footer`
    background: radial-gradient(circle at 0% 0%, rgb(0, 67, 122) 0%, rgb(0, 30, 80) 100%);
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 220px;
    color: white;
`;
const Ul = (external_styled_components_default()).ul`
    list-style: none;
    font-size: 22px;
    padding: 0;
    margin: 0;
`;
const Arcon = (external_styled_components_default()).a`
    text-decoration: none;
    cursor: pointer;
`;

;// CONCATENATED MODULE: ./components/Footer/index.js




function Footer_index() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("footer", {
            className: "footer",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: "ulFooter",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: "Github"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "https://github.com/castanedaLuis",
                            legacyBehavior: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: "Repositorios"
                            })
                        })
                    ]
                })
            })
        })
    });
}
/* harmony default export */ const components_Footer = (Footer_index);

;// CONCATENATED MODULE: ./components/Layout/index.js


//Path alias


function Layout_index({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(NavBar, {}),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
        ]
    });
}
/* harmony default export */ const Layout = (Layout_index);

// EXTERNAL MODULE: ./actions/types.js
var types = __webpack_require__(7310);
;// CONCATENATED MODULE: ./reducers/avocados.js

const avocadosReducer = (state, action)=>{
    //console.log('state',state);
    switch(action.type){
        case types/* SET_AVOCADOS */.vw:
            return {
                ...state,
                avocados: [
                    ...state.avocados,
                    action.payload
                ]
            };
        case types/* DELETE_AVOCADOS */.aB:
            return {
                ...state,
                avocados: state.avocados.filter((item)=>{
                    item.id !== action.payload.id;
                })
            };
        case types/* SET_FAVORITE */.ie:
            const currentPokemonIndex = state.get("pokemons").findIndex((pokemon)=>{
                return pokemon.get("id") === action.payload.pokemonId;
            });
            if (currentPokemonIndex < 0) {
                return state;
            }
            //agregamos favorite al estado
            const isFavorite = state.get("pokemons").get(currentPokemonIndex).get("favorite");
            return state.setIn([
                "pokemons",
                currentPokemonIndex,
                "favorite"
            ], !isFavorite);
        // case SET_LOADING:
        //   return { ...state, loading: action.payload };
        default:
            return state;
    }
};

;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
// EXTERNAL MODULE: ./styleGlobales.css
var styleGlobales = __webpack_require__(6741);
;// CONCATENATED MODULE: ./pages/_app.js






function reportWebVitals(metric) {
//console.log(metric)
// analytics - calibre
// serverAnulicts.log(metric)
}
const MyApp = ({ Component , pageProps  })=>{
    // Aditional props
    // Aditional layout
    // Manejar errores - componentDidCatch
    const initialState = {
        favorites: [],
        avocados: []
    };
    const store = (0,external_redux_namespaceObject.legacy_createStore)(avocadosReducer, initialState);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
        store: store,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
};
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 6741:
/***/ (() => {



/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664], () => (__webpack_exec__(4019)));
module.exports = __webpack_exports__;

})();