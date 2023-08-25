exports.id = 454;
exports.ids = [454];
exports.modules = {

/***/ 5975:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23))

/***/ }),

/***/ 769:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7267));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 954, 23))

/***/ }),

/***/ 7267:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Navbar_Navbar)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var index_esm = __webpack_require__(3500);
;// CONCATENATED MODULE: ./src/components/ThemeButton/ThemeButton.tsx



const ThemeButton = ()=>{
    const [themeScheme, setThemeScheme] = (0,react_.useState)("dark");
    (0,react_.useEffect)(()=>{
        if (localStorage.getItem("theme") === "dark") {
            setThemeScheme("dark");
            localStorage.setItem("theme", "dark");
            document.documentElement.setAttribute("data-theme", "dark");
        } else if (localStorage.getItem("theme") === "light") {
            setThemeScheme("light");
            localStorage.setItem("theme", "light");
            document.documentElement.setAttribute("data-theme", "light");
        }
    }, []);
    function handleClick() {
        if (themeScheme === "light") {
            setThemeScheme("dark");
            localStorage.setItem("theme", "dark");
            document.documentElement.setAttribute("data-theme", "dark");
        } else if (themeScheme === "dark") {
            setThemeScheme("light");
            localStorage.setItem("theme", "light");
            document.documentElement.setAttribute("data-theme", "light");
        }
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            themeScheme === "light" && /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* FaLightbulb */.iih, {
                className: "mx-2 cursor-pointer text-indigo-800 hover:text-indigo-700",
                size: "26",
                onClick: handleClick
            }),
            themeScheme === "dark" && /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* FaLightbulb */.iih, {
                className: "mx-2 cursor-pointer text-indigo-50 hover:text-indigo-100",
                size: "26",
                onClick: handleClick
            })
        ]
    });
};
/* harmony default export */ const ThemeButton_ThemeButton = (ThemeButton);

// EXTERNAL MODULE: ./node_modules/react-icons/gi/index.esm.js
var gi_index_esm = __webpack_require__(6149);
;// CONCATENATED MODULE: ./src/components/Navbar/Navbar.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




const Navbar = (props)=>{
    const [mobileMenu, setMobileMenu] = (0,react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: " justify-between  px-2 md:px-8 relative  flex  flex-row-reverse md:flex-row items-center  h-16  shadow-md  shadow-indigo-500/50",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: " md:hidden cursor-pointer  w-11  h-11  mr-2  flex  items-center  justify-center  border  border-customLink  text-customLink hover:border-customLink/50  hover:text-customLink/50",
                onClick: ()=>setMobileMenu((state)=>!state),
                children: /*#__PURE__*/ jsx_runtime_.jsx(gi_index_esm/* GiHamburgerMenu */.vHB, {})
            }),
            mobileMenu && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: " absolute z-50 bg-customNavbarBackground border border-indigo-900 flex flex-col items-center justify-evenly top-full right-0 w-full ",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        onClick: ()=>setMobileMenu(false),
                        className: " text-customLink hover:text-customLink  hover:underline p-6",
                        href: "/",
                        children: "Apresenta\xe7\xe3o"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        onClick: ()=>setMobileMenu(false),
                        className: " text-customLink hover:text-customLink  hover:underline p-6",
                        href: "/experiences",
                        children: "Experi\xeancias"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        onClick: ()=>setMobileMenu(false),
                        className: " text-customLink hover:text-customLink  hover:underline p-6",
                        href: "/labs",
                        children: "Laborat\xf3rio"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "hidden md:flex",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        className: " text-customLink  hover:text-customLink hover:underline p-6",
                        href: "/",
                        children: "Apresenta\xe7\xe3o"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        className: " text-customLink  hover:text-customLink hover:underline p-6",
                        href: "/experiences",
                        children: "Experi\xeancias"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        className: " text-customLink  hover:text-customLink hover:underline p-6",
                        href: "/labs",
                        children: "Laborat\xf3rio"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ThemeButton_ThemeButton, {})
        ]
    });
};
/* harmony default export */ const Navbar_Navbar = (Navbar);


/***/ }),

/***/ 807:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./src/components/Navbar/Navbar.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/home/gustavo/developer/personal/portfolio/para_deploy/completo/portfolio/src/components/Navbar/Navbar.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Navbar = (__default__);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(5023);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(2947);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(5124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/Subtitle/Subtitle.tsx
var Subtitle = __webpack_require__(6815);
// EXTERNAL MODULE: ./src/components/Text/Text.tsx
var Text = __webpack_require__(5418);
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var index_esm = __webpack_require__(2215);
// EXTERNAL MODULE: ./node_modules/react-icons/si/index.esm.js
var si_index_esm = __webpack_require__(5994);
;// CONCATENATED MODULE: ./src/components/Footer/Footer.tsx







const Footer = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
            className: "bg-customFooterBackground flex flex-col md:flex-row min-h-52 w-full py-8 px-4 md:p-6",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "w-full md:w-1/2 flex flex-col mb-6 md:mb-0",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Subtitle/* default */.Z, {
                            children: "Contato"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            target: "_blank",
                            className: "mb-2 text-customLink hover:text-customLink hover:underline",
                            href: "https://api.whatsapp.com/send?phone=5541991998161",
                            children: "Phone / Whatsapp: 41 991998161"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            target: "_blank",
                            className: "mb-2 text-customLink hover:text-customLink hover:underline",
                            href: "https://www.linkedin.com/in/gustavo-nardino/",
                            children: "Linkedin"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "mb-2 text-customLink hover:text-customLink hover:underline",
                            children: "E-mail: fgustavo.n@gmail.com"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "w-full md:w-1/2 flex md:items-end md:justify-end mb-6 md:mb-0",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center md:justify-end w-full",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Text/* default */.Z, {
                                children: "Desenvolvido com: "
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                target: "_blank",
                                href: "https://nextjs.org/docs",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(si_index_esm/* SiNextdotjs */.Xou, {
                                    size: "32",
                                    className: "text-customText hover:opacity-50 mx-1 cursor-pointer"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                target: "_blank",
                                href: "https://tailwindcss.com/docs/installation",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(si_index_esm/* SiTailwindcss */.YnA, {
                                    size: "32",
                                    className: "text-customText hover:opacity-50 mx-1 cursor-pointer"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                target: "_blank",
                                href: "http://nginx.org/en/docs/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(si_index_esm/* SiNginx */.vUE, {
                                    size: "32",
                                    className: "text-customText hover:opacity-50 mx-1 cursor-pointer"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                target: "_blank",
                                href: "https://aws.amazon.com",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* FaAws */.UC$, {
                                    size: "36",
                                    className: "text-customText hover:opacity-50 mx-1 cursor-pointer"
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const Footer_Footer = (Footer);

;// CONCATENATED MODULE: ./src/app/layout.tsx




const metadata = {
    metadataBase: new URL("https://www.gustavonardino.com.br"),
    title: {
        default: "Gustavo Nardino",
        template: `%s | Gustavo Nardino`
    },
    description: "Portf\xf3lio e estudos de diversas ferramentas",
    verification: {
        google: `google-site-verification=${"G-BR2VWDZZDW"}`
    },
    category: "tecnologia"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        className: "bg-customGeneralBackground",
        lang: "pt-BR",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
                        children
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Footer_Footer, {})
            ]
        })
    });
}


/***/ }),

/***/ 2031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const PagesLayout = ({ children, title, className })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "p-6 md:px-32 md:py-12",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "mb-8 text-customTitle text-3xl",
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: className,
                children: children
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PagesLayout);


/***/ }),

/***/ 6815:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2947);


const Subtitle = ({ children, className })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
        className: `text-customSubtitle text-xl mb-4 underline ${className}`,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Subtitle);


/***/ }),

/***/ 5418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2947);


const Text = ({ children, className, title })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        title: title,
        className: `text-customText ${className}`,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Text);


/***/ }),

/***/ 3881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 1253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ opengraph_image_next_metadata_)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./src/app/opengraph-image.tsx?__next_metadata_image_meta__


// Route segment config
const runtime = "edge";
// Image metadata
const alt = "P\xe1gina inicial | Gustavo Nardino";
const size = {
    width: 1200,
    height: 630
};
const contentType = "image/png";
async function Image() {
    return new ImageResponse(/*#__PURE__*/ _jsx("div", {
        style: {
            fontSize: 45,
            fontFamily: "monospace",
            background: "wheat",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        children: "Portf\xf3lio | Gustavo Nardino"
    }));
}

// EXTERNAL MODULE: ./node_modules/next/dist/lib/metadata/get-metadata-route.js
var get_metadata_route = __webpack_require__(85);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-metadata-image-loader.js?type=openGraph&segment=&basePath=&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!./src/app/opengraph-image.tsx?__next_metadata__
    
    

    const imageModule = {
      runtime: runtime,alt: alt,size: size,contentType: contentType
    }

    /* harmony default export */ async function opengraph_image_next_metadata_(props) {
      const { __metadata_id__: _, ...params } = props.params
      const imageUrl = (0,get_metadata_route.fillMetadataSegment)(".", params, "opengraph-image")

      const { generateImageMetadata } = imageModule

      function getImageMetadata(imageMetadata, idParam) {
        const data = {
          alt: imageMetadata.alt,
          type: imageMetadata.contentType || 'image/png',
          url: imageUrl + (idParam ? ('/' + idParam) : '') + "?437ee836e13ec215",
        }
        const { size } = imageMetadata
        if (size) {
          data.width = size.width; data.height = size.height;
        }
        return data
      }

      if (generateImageMetadata) {
        const imageMetadataArray = await generateImageMetadata({ params })
        return imageMetadataArray.map((imageMetadata, index) => {
          const idParam = (imageMetadata.id || index) + ''
          return getImageMetadata(imageMetadata, idParam)
        })
      } else {
        return [getImageMetadata(imageModule, '')]
      }
    }

/***/ }),

/***/ 5023:
/***/ (() => {



/***/ })

};
;