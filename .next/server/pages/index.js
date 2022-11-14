"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,810,847,245,346,485];
exports.modules = {

/***/ 369:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(181);
/* harmony import */ var _components_Favoritos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(771);
/* harmony import */ var _components_Menu_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76);
/* harmony import */ var _components_Perfil_Profile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48);
/* harmony import */ var _components_Timeline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(979);








const HomePage = ()=>{
    const [valorDaBusca, setValorDaBusca] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    flex: 1
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Menu_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
                searchValue: valorDaBusca,
                setSearchValue: setValorDaBusca
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Perfil_Profile__WEBPACK_IMPORTED_MODULE_6__["default"], {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Timeline__WEBPACK_IMPORTED_MODULE_7__["default"], {
                searchValue: valorDaBusca,
                lista: _config_json__WEBPACK_IMPORTED_MODULE_3__/* .playlists */ .IL
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Favoritos__WEBPACK_IMPORTED_MODULE_4__["default"], {
                favs: _config_json__WEBPACK_IMPORTED_MODULE_3__/* .favoritos */ .vH
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [181,833,76,979,771,48], () => (__webpack_exec__(369)));
module.exports = __webpack_exports__;

})();