"use strict";
exports.id = 979;
exports.ids = [979];
exports.modules = {

/***/ 979:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledTimeline": () => (/* binding */ StyledTimeline),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const StyledTimeline = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-4d39ec3c-0"
})`
  flex: 1;
  width: 100%;
  padding: 16px;
  overflow: hidden;
  h3 {
    font-size: 1.25rem;
    margin-bottom: .8rem;
    text-transform: capitalize;
  }
  img {
    aspect-ratio: 16/9;
    object-fit: cover;
    width: 100%;
    max-width: 250px;
    height: auto;
    border-radius: .5rem;
  }
  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px;
    div {      
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px,1fr);
      overflow-x: scroll;
      /* scroll-snap-type: x mandatory; */
      a {
        scroll-snap-align: start;
        p {
          position: relative;
          display: inline-block;
          margin-top: .5rem;
        }
      }
    }
  }
`;
const Timeline = ({ searchValue , ...props })=>{
    const nomeListas = Object.keys(props.lista);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledTimeline, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: nomeListas.map((nome)=>{
                const videos = props.lista[nome];
                console.log(videos);
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            children: nome
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: videos.filter((video)=>{
                                const tituloEmCaixaBaixa = video.title.toLowerCase();
                                const resultadoBuscaCaixaBaixa = searchValue.toLowerCase();
                                return tituloEmCaixaBaixa.includes(resultadoBuscaCaixaBaixa);
                            }).map((video)=>{
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    href: video.url,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: video.thumb,
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: video.title
                                        })
                                    ]
                                });
                            })
                        })
                    ]
                });
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Timeline);


/***/ })

};
;