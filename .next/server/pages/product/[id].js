"use strict";
(() => {
var exports = {};
exports.id = 360;
exports.ids = [360];
exports.modules = {

/***/ 7273:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _objectWithoutPropertiesLoose;
    }
}));
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}


/***/ }),

/***/ 7310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 5952:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./actions/types.js
var types = __webpack_require__(7310);
;// CONCATENATED MODULE: ./actions/index.js

const setAvocados = (payload)=>({
        type: types/* SET_AVOCADOS */.vw,
        payload
    });
const deleteAvocados = (payload)=>({
        type: DELETE_AVOCADOS,
        payload
    });
const setLoading = (payload)=>({
        type: SET_LOADING,
        payload
    });
const setFavorite = (payload)=>({
        type: SET_FAVORITE,
        payload
    });
const getAvocados = (payload)=>({
        type: GET_AVOCADOS,
        payload
    });

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./components/card/index.js
var card = __webpack_require__(8680);
;// CONCATENATED MODULE: ./pages/product/[id].js







const getStaticPaths = async ()=>{
    const response = await fetch("https://platzi-avo.vercel.app/api/avo");
    const { data  } = await response.json();
    const paths = data.map(({ id  })=>({
            params: {
                id
            }
        }));
    return {
        // Statically generate all paths
        paths,
        // Display 404 for everything else
        fallback: false
    };
};
// This also gets called at build time
const getStaticProps = async ({ params  })=>{
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const response = await fetch(`https://platzi-avo.vercel.app/api/avo/${params?.id}`);
    const product = await response.json();
    // Pass post data to the page via props
    return {
        props: {
            product
        }
    };
};
function ProductItem() {
    const data = (0,external_react_redux_.useSelector)((state)=>{
        //console.log(state);
        return state;
    });
    const dispatch = (0,external_react_redux_.useDispatch)();
    //const router = useRouter();
    const [product, setProduct] = (0,external_react_.useState)();
    const [catidadItemsCarrito, setItemCarrito] = (0,external_react_.useState)(0);
    const [productCarrito, setProductCarrito] = (0,external_react_.useState)([]);
    const handleOnCarrito = ()=>{
        dispatch(setAvocados(product));
    };
    // const handleOnDelete = (producto) => {
    //   dispatch(deleteAvocados(producto));
    // };
    const { query: { id  }  } = (0,router_.useRouter)();
    const getProduct = async (id)=>{
        try {
            const res = await fetch(`/api/avo/${id}`);
            const data = await res.json();
            //console.log(data);
            setProduct(data);
        } catch (error) {
            console.error(error);
        }
    };
    (0,external_react_.useEffect)(()=>{
        getProduct(id);
        setItemCarrito(data.avocados.length);
        setProductCarrito(data.avocados);
        console.log("productos agregados:", productCarrito);
    }, [
        data,
        id
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "d-flex g-5 row m-0",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "text-center",
                children: "Detalle del Avocado:"
            }),
            product !== undefined && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-xl-4 col-sm-12 p-0 d-flex justify-content-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(card/* default */.Z, {
                            ...product
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-xl-4 col-sm-12 p-0",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "TitledetailAvocado",
                                children: "Descripti\xf3n"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "detailAvocado",
                                children: product?.attributes.description
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "contenedorBotones",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: `btnCentral ${""}`,
                                    onClick: handleOnCarrito,
                                    children: "Agregar al carrito"
                                })
                            })
                        ]
                    }),
                    productCarrito.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col-xl-4 col-sm-12 carrito",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "titleCarrito",
                                    children: `Tu carrito ${catidadItemsCarrito ? `tiene ${catidadItemsCarrito} avocados` : "esta vac\xedo"}`
                                }),
                                productCarrito.map((item, index)=>{
                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "itemCrrito",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                className: "m-0 p-0",
                                                children: item.name
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                className: "m-0 p-0",
                                                children: [
                                                    "$",
                                                    item.price
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: "btnEliminar",
                                                children: "➖"
                                            })
                                        ]
                                    }, item.name + index);
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const _id_ = (ProductItem);


/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,121,675,680], () => (__webpack_exec__(5952)));
module.exports = __webpack_exports__;

})();