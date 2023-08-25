"use strict";
exports.id = 194;
exports.ids = [194];
exports.modules = {

/***/ 8483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SP: () => (/* binding */ getLabListData),
/* harmony export */   qB: () => (/* binding */ getLabData),
/* harmony export */   yf: () => (/* binding */ getLabReadme)
/* harmony export */ });
async function getLabListData() {
    try {
        const res = await fetch(`https://api.github.com/users/GustavoNardino/repos`, {
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
                "accept": "application/vnd.github+json"
            }
        }).then((res)=>res.json()).catch((err)=>err);
        return res;
    } catch (error) {
        console.log(error);
    }
}
async function getLabData(name) {
    try {
        const res = await fetch(`https://api.github.com/repos/gustavonardino/${name}`, {
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
                "accept": "application/vnd.github+json"
            }
        }).then((res)=>res.json()).catch((err)=>err);
        return res;
    } catch (error) {
        console.log(error);
    }
}
async function getLabReadme(name) {
    try {
        const res = await fetch(`https://raw.githubusercontent.com/GustavoNardino/${name}/main/README.md`, {
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
                "accept": "application/vnd.github+json"
            }
        }).then((res)=>res.text()).catch((err)=>err);
        return res;
    } catch (error) {
        console.log(error);
    }
}


/***/ }),

/***/ 6972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ opengraph_image_next_metadata_)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./src/app/labs/opengraph-image.tsx?__next_metadata_image_meta__


// Route segment config
const runtime = "edge";
// Image metadata
const alt = "Laborat\xf3rio | Gustavo Nardino";
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
        children: "Laborat\xf3rio | Gustavo Nardino"
    }));
}

// EXTERNAL MODULE: ./node_modules/next/dist/lib/metadata/get-metadata-route.js
var get_metadata_route = __webpack_require__(85);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-metadata-image-loader.js?type=openGraph&segment=%2Flabs&basePath=&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!./src/app/labs/opengraph-image.tsx?__next_metadata__
    
    

    const imageModule = {
      runtime: runtime,alt: alt,size: size,contentType: contentType
    }

    /* harmony default export */ async function opengraph_image_next_metadata_(props) {
      const { __metadata_id__: _, ...params } = props.params
      const imageUrl = (0,get_metadata_route.fillMetadataSegment)("/labs", params, "opengraph-image")

      const { generateImageMetadata } = imageModule

      function getImageMetadata(imageMetadata, idParam) {
        const data = {
          alt: imageMetadata.alt,
          type: imageMetadata.contentType || 'image/png',
          url: imageUrl + (idParam ? ('/' + idParam) : '') + "?944e2ef0b72fc988",
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

/***/ })

};
;