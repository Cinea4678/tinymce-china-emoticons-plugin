/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("tinymce"));
	else if(typeof define === 'function' && define.amd)
		define(["tinymce"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("tinymce")) : factory(root["tinymce"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, (__WEBPACK_EXTERNAL_MODULE_tinymce__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data.ts":
/*!*********************!*\
  !*** ./src/data.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.douyinEmoticons = exports.biliEmoticons = exports.tiebaEmoticons = void 0;\nexports.tiebaEmoticons = [\n    { name: \"[真棒]\", id: \"tb-zb\", url: \"https://s2.loli.net/2023/12/01/z4RquOjdMGZPCYl.png\" },\n    { name: \"[疑问]\", id: \"tb-yw\", url: \"https://s2.loli.net/2023/12/01/e5itREHMSPBIFkZ.png\" },\n    { name: \"[汗]\", id: \"tb-han\", url: \"https://s2.loli.net/2023/12/01/ewuYnz4oHbLylOk.png\" },\n    { name: \"[开心]\", id: \"tb-kx\", url: \"https://s2.loli.net/2023/12/01/SmUJlf5baKFzOYC.png\" },\n    { name: \"[呵呵]\", id: \"tb-hh\", url: \"https://s2.loli.net/2023/12/01/SUiN2GzCsILvJwg.png\" },\n    { name: \"[哈哈]\", id: \"tb-haha\", url: \"https://s2.loli.net/2023/12/01/A29B7E8ILsRnl4j.png\" },\n    { name: \"[啊]\", id: \"tb-ah\", url: \"https://s2.loli.net/2023/12/01/bUXjM5QGPZqI7ST.png\" },\n    { name: \"[怒]\", id: \"tb-nu\", url: \"https://s2.loli.net/2023/12/01/sTxcQGyqEkZ3fVO.png\" },\n    { name: \"[泪]\", id: \"tb-lei\", url: \"https://s2.loli.net/2023/12/01/lafLh7or5n6NK9Y.png\" },\n    { name: \"[阴险]\", id: \"tb-yx\", url: \"https://s2.loli.net/2023/12/01/1HvCilpakd5Y6SI.png\" },\n    { name: \"[吐]\", id: \"tb-tu\", url: \"https://s2.loli.net/2023/12/01/RvAiDn9L6yfBPsE.png\" },\n    { name: \"[笑眼]\", id: \"tb-xy\", url: \"https://s2.loli.net/2023/12/01/89noMDfbzjK2FVk.png\" },\n    { name: \"[太开心]\", id: \"tb-tkx\", url: \"https://s2.loli.net/2023/12/01/W2B7hnQXexPpV9t.png\" },\n    { name: \"[乖]\", id: \"tb-g\", url: \"https://s2.loli.net/2023/12/01/D6kuipWSby3jgVY.png\" },\n    { name: \"[惊讶]\", id: \"tb-jy\", url: \"https://s2.loli.net/2023/12/01/oezDLEN49HQuc2q.png\" },\n    { name: \"[喷]\", id: \"tb-pen\", url: \"https://s2.loli.net/2023/12/01/R4YFCWnf5GeM97k.png\" },\n    { name: \"[吃瓜]\", id: \"tb-cg\", url: \"https://s2.loli.net/2023/12/01/9wt7koPDde2xVEW.png\" },\n    { name: \"[喝酒]\", id: \"tb-hj\", url: \"https://s2.loli.net/2023/12/01/Ek6JmVoNwIdODnh.png\" },\n    { name: \"[欢呼]\", id: \"tb-huanhu\", url: \"https://s2.loli.net/2023/12/01/pJ1nKVMIqz27CLs.png\" },\n    { name: \"[滑稽]\", id: \"tb-huaji\", url: \"https://s2.loli.net/2023/12/01/l5F2AbiqhU4yuw6.png\" },\n];\nexports.biliEmoticons = [\n    { name: \"[哦呼]\", id: \"bl-oh\", url: \"https://s2.loli.net/2023/12/01/ylW3BF9ExYjur8f.png\" },\n    { name: \"[喜欢]\", id: \"bl-xh\", url: \"https://s2.loli.net/2023/12/01/YU2izLkKE1QHSAy.png\" },\n    { name: \"[大哭]\", id: \"bl-dk\", url: \"https://s2.loli.net/2023/12/01/F2t1eHDEdTWm4ac.png\" },\n    { name: \"[大笑]\", id: \"bl-dx\", url: \"https://s2.loli.net/2023/12/01/hZAwlnCrfiOVKGy.png\" },\n    { name: \"[doge]\", id: \"bl-doge\", url: \"https://s2.loli.net/2023/12/01/uU7vVeBqDlFJG16.png\" },\n    { name: \"[打call]\", id: \"bl-call\", url: \"https://s2.loli.net/2023/12/01/7ZAnqePk2lyFBtw.png\" },\n    { name: \"[灵魂出窍]\", id: \"bl-cq\", url: \"https://s2.loli.net/2023/12/01/3WclwBEjJI5ybDm.png\" },\n    { name: \"[生气]\", id: \"bl-sq\", url: \"https://s2.loli.net/2023/12/01/voXx1yu74QP3G2w.png\" },\n    { name: \"[微笑]\", id: \"bl-wx\", url: \"https://s2.loli.net/2023/12/01/h5u3RYBSfceisot.png\" },\n    { name: \"[辣眼睛]\", id: \"bl-lyj\", url: \"https://s2.loli.net/2023/12/01/gtXY2HGCDA7vFrE.png\" },\n    { name: \"[阴险]\", id: \"bl-yx\", url: \"https://s2.loli.net/2023/12/01/UG3OyiDqvkSlmxo.png\" },\n    { name: \"[点赞]\", id: \"bl-dz\", url: \"https://s2.loli.net/2023/12/01/gBfy8QTz4klEZLC.png\" },\n    { name: \"[傲娇]\", id: \"bl-aj\", url: \"https://s2.loli.net/2023/12/01/FHYRzW62lqThxfj.png\" },\n    { name: \"[ok]\", id: \"bl-ok\", url: \"https://s2.loli.net/2023/12/01/mkWM6SNurO4jna2.png\" },\n    { name: \"[星星眼]\", id: \"bl-xxy\", url: \"https://s2.loli.net/2023/12/01/FdM1AuQkaXmzoVf.png\" },\n    { name: \"[偷笑]\", id: \"bl-tx\", url: \"https://s2.loli.net/2023/12/01/LwsvBV6PTqGQAyW.png\" },\n    { name: \"[抓狂]\", id: \"bl-zk\", url: \"https://s2.loli.net/2023/12/01/dpivTIZYohxWLq9.png\" },\n    { name: \"[思考]\", id: \"bl-sk\", url: \"https://s2.loli.net/2023/12/01/4G81DmHzesJgpnr.png\" },\n    { name: \"[嘘声]\", id: \"bl-xs\", url: \"https://s2.loli.net/2023/12/01/Dp2BtXlER7jL3dK.png\" },\n    { name: \"[奸笑]\", id: \"bl-jx\", url: \"https://s2.loli.net/2023/12/01/DlUxIg5K4EvmQOo.png\" }\n];\nexports.douyinEmoticons = [\n    { name: \"[舔屏]\", id: \"dy-tp\", url: \"https://s2.loli.net/2023/12/01/O4Mcp61giqDXj9y.png\" },\n    { name: \"[色]\", id: \"dy-se\", url: \"https://s2.loli.net/2023/12/01/GTOgYRlKaFe6XSE.png\" },\n    { name: \"[看]\", id: \"dy-doge\", url: \"https://s2.loli.net/2023/12/01/Tf8ixpAFHlLR35j.png\" },\n    { name: \"[尬笑]\", id: \"dy-gx\", url: \"https://s2.loli.net/2023/12/01/OVgcdmjaQR1tMIy.png\" },\n    { name: \"[泣不成声]\", id: \"dy-qbcs\", url: \"https://s2.loli.net/2023/12/01/onR49wSm5C6h7Oe.png\" },\n    { name: \"[送心]\", id: \"dy-sx\", url: \"https://s2.loli.net/2023/12/01/EZy7F2WgBQlecP8.png\" },\n    { name: \"[快哭了]\", id: \"dy-kkl\", url: \"https://s2.loli.net/2023/12/01/BcAdsiwxMq4UFIZ.png\" },\n    { name: \"[流泪]\", id: \"dy-ll\", url: \"https://s2.loli.net/2023/12/01/b8HxQDhBCgRMPZl.png\" },\n    { name: \"[疑问]\", id: \"dy-yw\", url: \"https://s2.loli.net/2023/12/01/RcnaT4eigrKM8kC.png\" },\n    { name: \"[发呆]\", id: \"dy-fd\", url: \"https://s2.loli.net/2023/12/01/TtFPKRhLCD5pGvn.png\" },\n    { name: \"[绿帽子]\", id: \"dy-lmz\", url: \"https://s2.loli.net/2023/12/01/UnVElI9mgJ2L1HK.png\" },\n    { name: \"[擦汗]\", id: \"dy-ch\", url: \"https://s2.loli.net/2023/12/01/8sCNMKmD9lhVHuY.png\" },\n    { name: \"[微笑]\", id: \"dy-wx\", url: \"https://s2.loli.net/2023/12/01/Ypa2AEUyINZGSXv.png\" },\n    { name: \"[调皮]\", id: \"dy-tiaopi\", url: \"https://s2.loli.net/2023/12/01/ivebdhrT3XLZoam.png\" },\n    { name: \"[晕]\", id: \"dy-yun\", url: \"https://s2.loli.net/2023/12/01/T25qoHlriPjcUhz.png\" },\n    { name: \"[惊恐]\", id: \"dy-jk\", url: \"https://s2.loli.net/2023/12/01/V3CO6B82AiTxSNE.png\" },\n    { name: \"[可怜]\", id: \"dy-kl\", url: \"https://s2.loli.net/2023/12/01/i8tAZoQy6fXFpaN.png\" },\n    { name: \"[得意]\", id: \"dy-dy\", url: \"https://s2.loli.net/2023/12/01/5YOa8LvXDRzPG9o.png\" },\n    { name: \"[绝望的凝视]\", id: \"dy-jw\", url: \"https://s2.loli.net/2023/12/01/VoZytT14WC5nv9s.png\" },\n    { name: \"[大哭]\", id: \"dy-daku\", url: \"https://s2.loli.net/2023/12/01/BeGwrtYL7T8Dny5.png\" },\n];\n\n\n//# sourceURL=webpack://tinymce-china-emoticons-plugin/./src/data.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst tinymce_1 = __importDefault(__webpack_require__(/*! tinymce */ \"tinymce\"));\nconst data_1 = __webpack_require__(/*! ./data */ \"./src/data.ts\");\nconst icon = `<svg class=\"icon\" viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\"><path d=\"M511.488 118.670222a398.222222 398.222222 0 1 0 0 796.444445 398.222222 398.222222 0 0 0 0-796.444445z m0-85.333333a483.555556 483.555556 0 1 1 0 967.111111 483.555556 483.555556 0 0 1 0-967.111111zM292.067556 378.709333a69.063111 69.063111 0 1 1 138.126222 0 69.063111 69.063111 0 0 1-138.126222 0z m300.657777 0a69.063111 69.063111 0 1 1 138.183111 0 69.063111 69.063111 0 0 1-138.183111 0zM275.626667 545.336889h475.249777c0 108.828444-100.067556 239.502222-240.355555 239.502222-140.231111 0-234.894222-130.673778-234.894222-239.502222z\" fill=\"#333333\"></path></svg>`;\nconst emoticonToMceComponent = (e) => {\n    return {\n        type: \"bar\",\n        items: [\n            {\n                type: \"htmlpanel\",\n                html: `<div style=\"height: 40px; width: 40px\"><img alt=\"${e.name}\" src=\"${e.url}\" style=\"height: 40px; width: 40px\"/></div>`,\n            },\n            {\n                type: \"button\",\n                name: e.id,\n                text: \"添加\",\n            },\n        ],\n    };\n};\ntinymce_1.default.PluginManager.add(\"china-emoticons\", function (editor) {\n    const openDialog = () => {\n        return editor.windowManager.open({\n            title: \"常用表情\",\n            body: {\n                type: \"panel\",\n                items: [\n                    {\n                        type: \"label\",\n                        label: \"贴吧表情\",\n                        items: [\n                            {\n                                type: \"grid\",\n                                columns: 4,\n                                items: [...data_1.tiebaEmoticons.map(emoticonToMceComponent)],\n                            },\n                        ],\n                    },\n                    {\n                        type: \"label\",\n                        label: \"B站表情\",\n                        items: [\n                            {\n                                type: \"grid\",\n                                columns: 4,\n                                items: [...data_1.biliEmoticons.map(emoticonToMceComponent)],\n                            },\n                        ],\n                    },\n                    {\n                        type: \"label\",\n                        label: \"抖音表情\",\n                        items: [\n                            {\n                                type: \"grid\",\n                                columns: 4,\n                                items: [...data_1.douyinEmoticons.map(emoticonToMceComponent)],\n                            },\n                        ],\n                    },\n                ],\n            },\n            onAction(d, details) {\n                var _a, _b, _c;\n                let e;\n                switch (details.name.substring(0, 2)) {\n                    case \"tb\":\n                        e = (_a = data_1.tiebaEmoticons.find((e) => e.id === details.name)) !== null && _a !== void 0 ? _a : data_1.tiebaEmoticons[0];\n                        break;\n                    case \"bl\":\n                        e = (_b = data_1.biliEmoticons.find((e) => e.id === details.name)) !== null && _b !== void 0 ? _b : data_1.biliEmoticons[0];\n                        break;\n                    case \"dy\":\n                        e = (_c = data_1.douyinEmoticons.find((e) => e.id === details.name)) !== null && _c !== void 0 ? _c : data_1.douyinEmoticons[0];\n                        break;\n                    default:\n                        return;\n                }\n                const insertSize = editor.options.get(\"china_emoticons_insert_size\");\n                editor.insertContent(`<img alt=\"${e.name}\" src=\"${e.url}\" style=\"height: ${insertSize}px; width: ${insertSize}px\"/>`);\n                d.close();\n            },\n        });\n    };\n    editor.options.register(\"china_emoticons_insert_size\", { processor: 'number', default: 80 });\n    editor.ui.registry.addIcon(\"china-emoticons\", icon);\n    editor.ui.registry.addButton(\"china-emoticons\", {\n        icon: \"china-emoticons\",\n        tooltip: \"常用表情\",\n        onAction: function () {\n            openDialog();\n        },\n    });\n    editor.ui.registry.addMenuItem(\"china-emoticons\", {\n        icon: \"china-emoticons\",\n        text: \"常用表情\",\n        onAction: function () {\n            openDialog();\n        },\n    });\n    return {\n        getMetadata: function () {\n            return {\n                name: \"China Emoticons\",\n                url: \"https://www.cinea.cc/\",\n            };\n        },\n    };\n});\n\n\n//# sourceURL=webpack://tinymce-china-emoticons-plugin/./src/index.ts?");

/***/ }),

/***/ "tinymce":
/*!**************************!*\
  !*** external "tinymce" ***!
  \**************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_tinymce__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});