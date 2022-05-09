"use strict";
(self["webpackChunkvirtual_keyboard"] = self["webpackChunkvirtual_keyboard"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".page-container {\n  width: 795px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  padding: 40px;\n  gap: 10px;\n  font-family: \"Trebuchet MS\", \"Helvetica\", sans-serif;\n}\n.page-container .title {\n  text-align: center;\n  margin-bottom: 20px;\n}\n.page-container .textarea {\n  height: 200px;\n  padding: 10px;\n  font-size: 18px;\n}\n.page-container .textarea:focus {\n  outline: 0;\n}\n.page-container .keyboard-container {\n  height: 251px;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  padding: 6px;\n  gap: 8px;\n  background: #888888;\n  border: 2px solid #222222;\n  border-radius: 5px;\n  align-self: center;\n}\n.page-container .keyboard-container .row {\n  display: flex;\n  gap: 6px;\n}\n.page-container .keyboard-container .row .key {\n  height: 40px;\n  color: #ffffff;\n  background: #444444;\n  border-radius: 3px;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  user-select: none;\n  transition: 0.3s;\n}\n.page-container .keyboard-container .row .key:hover {\n  background-color: rgb(240, 213, 124);\n}\n.page-container .keyboard-container .row .key:active {\n  background-color: rgb(223, 182, 50);\n  transform: scale(0.9);\n  border-radius: 8px;\n}\n.page-container .keyboard-container .row .key-dark {\n  font-weight: 600;\n  background-color: #222222;\n}\n.page-container .keyboard-container .row .highlighted {\n  background-color: rgb(223, 182, 50);\n  transform: scale(0.9);\n  border-radius: 8px;\n}\n.page-container .text-container {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n}\n.page-container .text-container p {\n  text-align: center;\n}", "",{"version":3,"sources":["webpack://./src/styles/style.scss"],"names":[],"mappings":"AAAA;EACI,YAAA;EACA,cAAA;EACA,aAAA;EACA,sBAAA;EACA,qBAAA;EACA,aAAA;EACA,SAAA;EACA,oDAAA;AACJ;AACI;EACI,kBAAA;EACA,mBAAA;AACR;AAEI;EACI,aAAA;EACA,aAAA;EACA,eAAA;AAAR;AAEQ;EACI,UAAA;AAAZ;AAKI;EACI,aAAA;EACA,aAAA;EACA,sBAAA;EACA,eAAA;EACA,YAAA;EACA,QAAA;EACA,mBAAA;EACA,yBAAA;EACA,kBAAA;EACA,kBAAA;AAHR;AAKQ;EACI,aAAA;EACA,QAAA;AAHZ;AAKY;EACI,YAAA;EACA,cAAA;EACA,mBAAA;EACA,kBAAA;EACA,eAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,iBAAA;EACA,gBAAA;AAHhB;AAKgB;EACI,oCAAA;AAHpB;AAMgB;EACI,mCAAA;EACA,qBAAA;EACA,kBAAA;AAJpB;AAOY;EACI,gBAAA;EACA,yBAAA;AALhB;AAOY;EACI,mCAAA;EACA,qBAAA;EACA,kBAAA;AALhB;AAUI;EACI,aAAA;EACA,sBAAA;EACA,qBAAA;AARR;AAUQ;EACI,kBAAA;AARZ","sourcesContent":[".page-container {\n    width: 795px;\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column;\n    align-content: center;\n    padding: 40px;\n    gap: 10px;\n    font-family: \"Trebuchet MS\", \"Helvetica\", sans-serif;\n\n    .title {\n        text-align: center;\n        margin-bottom: 20px;\n    }\n\n    .textarea {\n        height: 200px;\n        padding: 10px;\n        font-size: 18px;\n\n        &:focus {\n            outline: 0;\n           \n        }\n    }\n\n    .keyboard-container {\n        height: 251px;\n        display: flex;\n        flex-direction: column;\n        flex-wrap: wrap;\n        padding: 6px;\n        gap: 8px;\n        background: #888888;\n        border: 2px solid #222222;\n        border-radius: 5px;\n        align-self: center;\n\n        .row {\n            display: flex;\n            gap: 6px;\n\n            .key {\n                height: 40px;\n                color: #ffffff;\n                background: #444444;\n                border-radius: 3px;\n                cursor: pointer;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                user-select: none;\n                transition: 0.3s;\n\n                &:hover {\n                    background-color: rgb(240, 213, 124);\n                }\n\n                &:active {\n                    background-color: rgb(223, 182, 50);\n                    transform: scale(0.9);\n                    border-radius: 8px;\n                }\n            }\n            .key-dark {\n                font-weight: 600;\n                background-color: #222222;\n            }\n            .highlighted {\n                background-color: rgb(223, 182, 50);\n                transform: scale(0.9);\n                border-radius: 8px;\n            }\n        }\n    }\n\n    .text-container {\n        display: flex;\n        flex-direction: column;\n        align-content: center;\n\n        p {\n            text-align: center;\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/normalize.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/normalize.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Указываем box sizing */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Убираем внутренние отступы */\nul[class],\nol[class] {\n  padding: 0;\n}\n\n/* Убираем внешние отступы */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nul[class],\nol[class],\nli,\nfigure,\nfigcaption,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n/* Выставляем основные настройки по-умолчанию для body */\nbody {\n  min-height: 100vh;\n  scroll-behavior: smooth;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\n/* Удаляем стандартную стилизацию для всех ul и il, у которых есть атрибут class*/\nul[class],\nol[class] {\n  list-style: none;\n}\n\n/* Элементы a, у которых нет класса, сбрасываем до дефолтных стилей */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Упрощаем работу с изображениями */\nimg {\n  max-width: 100%;\n  display: block;\n}\n\n/* Указываем понятную периодичность в потоке данных у article*/\narticle > * + * {\n  margin-top: 1em;\n}\n\n/* Наследуем шрифты для инпутов и кнопок */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* Удаляем все анимации и переходы для людей, которые предпочитай их не использовать */\n@media (prefers-reduced-motion: reduce) {\n  * {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/normalize.css"],"names":[],"mappings":"AAAA,yBAAyB;AACzB;;;EAGE,sBAAsB;AACxB;;AAEA,+BAA+B;AAC/B;;EAEE,UAAU;AACZ;;AAEA,4BAA4B;AAC5B;;;;;;;;;;;;;;EAcE,SAAS;AACX;;AAEA,wDAAwD;AACxD;EACE,iBAAiB;EACjB,uBAAuB;EACvB,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA,iFAAiF;AACjF;;EAEE,gBAAgB;AAClB;;AAEA,qEAAqE;AACrE;EACE,8BAA8B;AAChC;;AAEA,oCAAoC;AACpC;EACE,eAAe;EACf,cAAc;AAChB;;AAEA,8DAA8D;AAC9D;EACE,eAAe;AACjB;;AAEA,0CAA0C;AAC1C;;;;EAIE,aAAa;AACf;;AAEA,sFAAsF;AACtF;EACE;IACE,qCAAqC;IACrC,uCAAuC;IACvC,sCAAsC;IACtC,gCAAgC;EAClC;AACF","sourcesContent":["/* Указываем box sizing */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Убираем внутренние отступы */\nul[class],\nol[class] {\n  padding: 0;\n}\n\n/* Убираем внешние отступы */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nul[class],\nol[class],\nli,\nfigure,\nfigcaption,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n/* Выставляем основные настройки по-умолчанию для body */\nbody {\n  min-height: 100vh;\n  scroll-behavior: smooth;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\n/* Удаляем стандартную стилизацию для всех ul и il, у которых есть атрибут class*/\nul[class],\nol[class] {\n  list-style: none;\n}\n\n/* Элементы a, у которых нет класса, сбрасываем до дефолтных стилей */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Упрощаем работу с изображениями */\nimg {\n  max-width: 100%;\n  display: block;\n}\n\n/* Указываем понятную периодичность в потоке данных у article*/\narticle > * + * {\n  margin-top: 1em;\n}\n\n/* Наследуем шрифты для инпутов и кнопок */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* Удаляем все анимации и переходы для людей, которые предпочитай их не использовать */\n@media (prefers-reduced-motion: reduce) {\n  * {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/normalize.css":
/*!**********************************!*\
  !*** ./src/styles/normalize.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/normalize.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/normalize.css */ "./src/styles/normalize.css");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _render_main_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render-main-page */ "./src/scripts/render-main-page.js");




(0,_render_main_page__WEBPACK_IMPORTED_MODULE_2__.renderMainPage)(document.body);


/***/ }),

/***/ "./src/scripts/insert-in-textarea.js":
/*!*******************************************!*\
  !*** ./src/scripts/insert-in-textarea.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "insertInTextarea": () => (/* binding */ insertInTextarea)
/* harmony export */ });
/* eslint-disable no-param-reassign */
const insertInTextarea = (textarea, text) => {
  const cursorStart = textarea.selectionStart;
  textarea.value = textarea.value.slice(0, textarea.selectionStart)
            + text
            + textarea.value.slice(textarea.selectionStart);
  textarea.selectionStart = cursorStart + 1;
  textarea.selectionEnd = textarea.selectionStart;
};


/***/ }),

/***/ "./src/scripts/key.js":
/*!****************************!*\
  !*** ./src/scripts/key.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Key": () => (/* binding */ Key)
/* harmony export */ });
/* harmony import */ var _insert_in_textarea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./insert-in-textarea */ "./src/scripts/insert-in-textarea.js");


class Key {
  constructor({
    text = 'q/й', width = '40px', code, dark = false, textArea, highlighted = false, handleMouseDown = () => {
      (0,_insert_in_textarea__WEBPACK_IMPORTED_MODULE_0__.insertInTextarea)(this.textArea, this.getText(this.lang, this.shift, this.caps));
    }, handleMouseUp,
  }) {
    this.text = text;
    this.textArea = textArea;
    this.width = width;
    this.code = code;
    this.dark = dark;
    this.highlighted = highlighted;
    this.handleMouseDown = handleMouseDown;
    this.handleMouseUp = handleMouseUp;
    this.keyContainer = document.createElement('div');
    this.keyContainer.addEventListener('mousedown', (event) => {
      this.handleMouseDown(event);
      const handler = (ievent) => {
        if (this.handleMouseUp) { this.handleMouseUp(ievent); }
        document.removeEventListener('mouseup', handler);
      };
      document.addEventListener('mouseup', handler);
    });
    this.keyContainer.addEventListener('mouseup', this.handleMouseUp);
  }

  setHighlighted(value) {
    this.highlighted = value;
    this.render(this.lang, this.shift, this.caps);
  }

  getText(lang, shift, caps) {
    if (this.dark) return this.text;
    const letters = this.text.split('');
    const [lowerEN, upperEN, lowerRU, upperRU, capsEN, capsRU, capsShiftEN, capsShiftRU] = letters;
    if (lang === 'en' && !shift && !caps) { return lowerEN; }
    if (lang === 'en' && shift && !caps) { return upperEN; }
    if (lang === 'ru' && !shift && !caps) { return lowerRU; }
    if (lang === 'ru' && shift && !caps) { return upperRU; }
    if (lang === 'en' && caps && !shift) { return capsEN; }
    if (lang === 'ru' && caps && !shift) { return capsRU; }
    if (lang === 'en' && caps && shift) { return capsShiftEN; }
    if (lang === 'ru' && caps && shift) { return capsShiftRU; }
    return '';
  }

  render(lang, shift, caps) {
    this.lang = lang;
    this.shift = shift;
    this.caps = caps;
    this.keyContainer.innerHTML = this.getText(lang, shift, caps);
    this.keyContainer.style.width = this.width;
    this.keyContainer.classList.add('key');
    if (this.dark === true) {
      this.keyContainer.classList.add('key-dark');
    }
    if (this.highlighted === true) {
      this.keyContainer.classList.add('highlighted');
    } else {
      this.keyContainer.classList.remove('highlighted');
    }

    return this.keyContainer;
  }
}


/***/ }),

/***/ "./src/scripts/keyboard.js":
/*!*********************************!*\
  !*** ./src/scripts/keyboard.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Keyboard": () => (/* binding */ Keyboard)
/* harmony export */ });
/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./key */ "./src/scripts/key.js");
/* harmony import */ var _insert_in_textarea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insert-in-textarea */ "./src/scripts/insert-in-textarea.js");



class Keyboard {
  constructor(element, textArea) {
    this.element = element;
    this.textArea = textArea;
    this.caps = false;
    this.lang = localStorage.getItem('lang') || 'en';
    this.shift = false;
    this.capsPressed = false;

    const KEYS = {
      Backquote: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: '`~ёЁ`Ё~ё', code: 'Backquote', textArea: this.textArea,
      }),
      Digit1: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: '1!1!11!!', code: 'Digit1', textArea: this.textArea,
      }),
      Digit2: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: '2@2"22@"', code: 'Digit2', textArea: this.textArea,
      }),
      Digit3: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: '3#3№33#№', code: 'Digit3', textArea: this.textArea,
      }),
      Digit4: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: '4$4;44$;', code: 'Digit4', textArea: this.textArea,
      }),
      Digit5: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: '5%5%55%%', code: 'Digit5', textArea: this.textArea,
      }),
      Digit6: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: '6^6:66^:', code: 'Digit6', textArea: this.textArea,
      }),
      Digit7: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: '7&7?77&?', code: 'Digit7', textArea: this.textArea,
      }),
      Digit8: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: '8*8*88**', code: 'Digit8', textArea: this.textArea,
      }),
      Digit9: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: '9(9(99((', code: 'Digit9', textArea: this.textArea,
      }),
      Digit0: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: '0)0)00))', code: 'Digit0', textArea: this.textArea,
      }),
      Minus: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: '-_-_--__', code: 'Minus', textArea: this.textArea,
      }),
      Equal: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: '=+=+==++', code: 'Equal', textArea: this.textArea,
      }),
      Backspace: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: 'Backspace',
        width: '100px',
        code: 'Backspace',
        dark: true,
        textArea: this.textArea,
        handleMouseDown: () => {
          const cursorStart = this.textArea.selectionStart;
          this.textArea.value = this.textArea.value.slice(0, this.textArea.selectionStart - 1)
            + this.textArea.value.slice(this.textArea.selectionStart);

          this.textArea.selectionStart = cursorStart - 1;
          this.textArea.selectionEnd = this.textArea.selectionStart;
        },
      }),
      Tab: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: 'Tab',
        width: '50px',
        code: 'Tab',
        dark: true,
        textArea: this.textArea,
        handleMouseDown: () => {
          // eslint-disable-next-line no-tabs
          (0,_insert_in_textarea__WEBPACK_IMPORTED_MODULE_1__.insertInTextarea)(this.textArea, '	');
        },
      }),
      KeyQ: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: 'qQйЙQЙqй', code: 'KeyQ', textArea: this.textArea,
      }),
      KeyW: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: 'wWцЦWЦwц', code: 'KeyW', textArea: this.textArea,
      }),
      KeyE: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: 'eEуУEУeу', code: 'KeyE', textArea: this.textArea,
      }),
      KeyR: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: 'rRкКRКrк', code: 'KeyR', textArea: this.textArea,
      }),
      KeyT: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: 'tTеЕTЕtе', code: 'KeyT', textArea: this.textArea,
      }),
      KeyY: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: 'yYнНYНyн', code: 'KeyY', textArea: this.textArea,
      }),
      KeyU: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: 'uUгГUГuг', code: 'KeyU', textArea: this.textArea,
      }),
      KeyI: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: 'iIшШIШiш', code: 'KeyI', textArea: this.textArea,
      }),
      KeyO: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: 'oOщЩOЩoщ', code: 'KeyO', textArea: this.textArea,
      }),
      KeyP: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: 'pPзЗPЗpз', code: 'KeyP', textArea: this.textArea,
      }),
      BracketLeft: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: '[{хХ[Х{х', code: 'BracketLeft', textArea: this.textArea,
      }),
      BracketRight: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: ']}ъЪ]Ъ}ъ', code: 'BracketRight', textArea: this.textArea,
      }),
      Backslash: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: '\\|\\/\\\\|/', code: 'Backslash', textArea: this.textArea,
      }),
      Delete: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: 'Del',
        width: '44px',
        code: 'Delete',
        dark: true,
        textArea: this.textArea,
        handleMouseDown: () => {
          if (this.textArea.selectionStart <= this.textArea.value.length) {
            const cursorStart = this.textArea.selectionStart;
            this.textArea.value = this.textArea.value.slice(0, this.textArea.selectionStart)
              + this.textArea.value.slice(this.textArea.selectionStart + 1);

            this.textArea.selectionStart = cursorStart;
            this.textArea.selectionEnd = this.textArea.selectionStart;
          }
        },
      }),
      CapsLock: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: 'Capslock',
        width: '100px',
        code: 'CapsLock',
        dark: true,
        textArea: this.textArea,
        handleMouseDown: () => {
          if (!this.capsPressed) {
            this.caps = true;
            this.capsPressed = true;
            KEYS.CapsLock.setHighlighted(true);
            this.render();
          } else {
            this.caps = false;
            this.capsPressed = false;
            KEYS.CapsLock.setHighlighted(false);
            this.render();
          }
        },
      }),
      KeyA: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: 'aAфФAФaф', code: 'KeyA', textArea: this.textArea,
      }),
      KeyS: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: 'sSыЫSЫsы', code: 'KeyS', textArea: this.textArea,
      }),
      KeyD: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: 'dDвВDВdв', code: 'KeyD', textArea: this.textArea,
      }),
      KeyF: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: 'fFаАFАfа', code: 'KeyF', textArea: this.textArea,
      }),
      KeyG: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: 'gGпПGПgп', code: 'KeyG', textArea: this.textArea,
      }),
      KeyH: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: 'hHрРHРhр', code: 'KeyH', textArea: this.textArea,
      }),
      KeyJ: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: 'jJоОJОjо', code: 'KeyJ', textArea: this.textArea,
      }),
      KeyK: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: 'kKлЛKЛkл', code: 'KeyK', textArea: this.textArea,
      }),
      KeyL: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: 'lLдДLДlд', code: 'KeyL', textArea: this.textArea,
      }),
      Semicolon: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: ';:жЖ;Ж:ж', code: 'Semicolon', textArea: this.textArea,
      }),
      Quote: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: '\'"эЭ\'Э"э', code: 'Quote', textArea: this.textArea,
      }),
      Enter: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: 'Enter',
        width: '86px',
        code: 'Enter',
        dark: true,
        textArea: this.textArea,
        handleMouseDown: () => { this.textArea.value += '\n'; },
      }),
      ShiftLeft: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: 'Shift',
        width: '100px',
        code: 'ShiftLeft',
        dark: true,
        textArea: this.textArea,
        handleMouseDown: () => {
          this.shift = true;
          this.render();
        },
        handleMouseUp: () => {
          this.shift = false;
          this.render();
        },
      }),
      KeyZ: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: 'zZяЯZЯzя', code: 'KeyZ', textArea: this.textArea,
      }),
      KeyX: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: 'xXчЧXЧxч', code: 'KeyX', textArea: this.textArea,
      }),
      KeyC: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: 'cCсСCCcс', code: 'KeyC', textArea: this.textArea,
      }),
      KeyV: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: 'vVмМVМvм', code: 'KeyV', textArea: this.textArea,
      }),
      KeyB: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: 'bBиИBИbи', code: 'KeyB', textArea: this.textArea,
      }),
      KeyN: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: 'nNтТNТnт', code: 'KeyN', textArea: this.textArea,
      }),
      KeyM: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: 'mMьЬMЬmь', code: 'KeyM', textArea: this.textArea,
      }),
      Comma: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: ',<бБ,Б<б', code: 'Comma', textArea: this.textArea,
      }),
      Period: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: '.>юЮ.Ю>ю', code: 'Period', textArea: this.textArea,
      }),
      Slash: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: '/?.,/.?,', code: 'Slash', textArea: this.textArea,
      }),
      ArrowUp: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: '&#9650;',
        code: 'ArrowUp',
        dark: true,
        textArea: this.textArea,
        handleMouseDown: () => {
          (0,_insert_in_textarea__WEBPACK_IMPORTED_MODULE_1__.insertInTextarea)(this.textArea, '▲');
        },
      }),
      ShiftRight: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: 'Shift',
        width: '86px',
        code: 'ShiftRight',
        dark: true,
        textArea: this.textArea,
        handleMouseDown: () => {
          this.shift = true;
          this.render();
        },
        handleMouseUp: () => {
          this.shift = false;
          this.render();
        },
      }),
      ControlLeft: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: 'Ctrl',
        code: 'ControlLeft',
        dark: true,
        textArea: this.textArea,
        handleMouseDown: () => {
          this.textArea.value += '';
        },
      }),
      MetaLeft: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: 'Win',
        dark: true,
        code: 'MetaLeft',
        textArea: this.textArea,
        handleMouseDown: () => {
          this.textArea.value += '';
        },
      }),
      AltLeft: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: 'Alt',
        code: 'AltLeft',
        dark: true,
        textArea: this.textArea,
        handleMouseDown: () => {
          this.textArea.value += '';
        },
      }),
      Space: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: '&mdash;', width: '330px', code: 'Space', dark: true, textArea: this.textArea, handleMouseDown: () => { this.textArea.value += ' '; },
      }),
      AltRight: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: 'Alt',
        code: 'AltRight',
        dark: true,
        textArea: this.textArea,
        handleMouseDown: () => {
          this.textArea.value += '';
        },
      }),
      ArrowLeft: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: '&#9668;',
        code: 'ArrowLeft',
        dark: true,
        textArea: this.textArea,
        handleMouseDown: () => {
          if (this.textArea.selectionStart > 0) {
            this.textArea.selectionStart += -1;
          }
          this.textArea.selectionEnd = this.textArea.selectionStart;
        },
      }),
      ArrowDown: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: '&#9660;',
        code: 'ArrowDown',
        dark: true,
        textArea: this.textArea,
        handleMouseDown: () => {
          (0,_insert_in_textarea__WEBPACK_IMPORTED_MODULE_1__.insertInTextarea)(this.textArea, '▼');
        },
      }),
      ArrowRight: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: '&#9658;',
        code: 'ArrowRight',
        dark: true,
        textArea: this.textArea,
        handleMouseDown: () => {
          if (this.textArea.selectionStart < this.textArea.value.length) {
            this.textArea.selectionStart += +1;
          }
          this.textArea.selectionEnd = this.textArea.selectionStart;
        },
      }),
      ControlRight: new _key__WEBPACK_IMPORTED_MODULE_0__.Key({
        text: 'Ctrl',
        code: 'ControlRight',
        dark: true,
        textArea: this.textArea,
        handleMouseDown: () => {
          this.textArea.value += '';
        },
      }),
    };

    const DIGITS = [KEYS.Digit1, KEYS.Digit2, KEYS.Digit3, KEYS.Digit4, KEYS.Digit5,
      KEYS.Digit6, KEYS.Digit7, KEYS.Digit8, KEYS.Digit9, KEYS.Digit0];
    const LETERS_R1 = [KEYS.KeyQ, KEYS.KeyW, KEYS.KeyE, KEYS.KeyR, KEYS.KeyT, KEYS.KeyY,
      KEYS.KeyU, KEYS.KeyI, KEYS.KeyO, KEYS.KeyP, KEYS.BracketLeft, KEYS.BracketRight];
    const LETERS_R2 = [KEYS.KeyA, KEYS.KeyS, KEYS.KeyD, KEYS.KeyF, KEYS.KeyG, KEYS.KeyH,
      KEYS.KeyJ, KEYS.KeyK, KEYS.KeyL, KEYS.Semicolon, KEYS.Quote];
    const LETERS_R3 = [KEYS.KeyZ, KEYS.KeyX, KEYS.KeyC, KEYS.KeyV, KEYS.KeyB, KEYS.KeyN,
      KEYS.KeyM, KEYS.Comma, KEYS.Period, KEYS.Slash];

    this.keysLayout = [
      [KEYS.Backquote, ...DIGITS, KEYS.Minus, KEYS.Equal, KEYS.Backspace],
      [KEYS.Tab, ...LETERS_R1, KEYS.Backslash, KEYS.Delete],
      [KEYS.CapsLock, ...LETERS_R2, KEYS.Enter],
      [KEYS.ShiftLeft, ...LETERS_R3, KEYS.ArrowUp, KEYS.ShiftRight],
      [KEYS.ControlLeft, KEYS.MetaLeft, KEYS.AltLeft, KEYS.Space,
        KEYS.AltRight, KEYS.ArrowLeft, KEYS.ArrowDown, KEYS.ArrowRight, KEYS.ControlRight],
    ];

    this.keysLayout.forEach((row) => {
      const rowContainer = document.createElement('div');
      rowContainer.classList.add('row');
      row.forEach((key) => {
        rowContainer.appendChild(key.render(this.lang));
      });
      this.element.appendChild(rowContainer);
    });

    this.textArea.addEventListener('keydown', (event) => {
      if (KEYS[event.code]) {
        KEYS[event.code].setHighlighted(true);

        if (KEYS[event.code].code === 'Tab') {
          event.preventDefault();
          this.textArea.value += '    ';
        }
        if (KEYS[event.code].code === 'CapsLock' && !event.repeat) {
          if (!this.capsPressed) {
            this.caps = true;
            this.capsPressed = true;
            this.render();
          } else {
            this.caps = false;
            this.capsPressed = false;
            this.render();
          }
        }
        if (KEYS[event.code].code === 'ShiftLeft' || KEYS[event.code].code === 'ShiftRight') {
          this.shift = true;
          this.render();
        }
        if (event.ctrlKey && event.altKey) {
          if (this.lang === 'en') {
            this.lang = 'ru';
          } else {
            this.lang = 'en';
          }
          localStorage.setItem('lang', this.lang);
          this.render();
        }
        if (KEYS[event.code].code === 'ArrowUp') {
          event.preventDefault();
          (0,_insert_in_textarea__WEBPACK_IMPORTED_MODULE_1__.insertInTextarea)(this.textArea, '▲');
        }
        if (KEYS[event.code].code === 'ArrowDown') {
          event.preventDefault();
          (0,_insert_in_textarea__WEBPACK_IMPORTED_MODULE_1__.insertInTextarea)(this.textArea, '▼');
        }
      }
    });

    this.textArea.addEventListener('keyup', (event) => {
      if (KEYS[event.code]) {
        KEYS[event.code].setHighlighted(false);
        if (KEYS[event.code].code === 'ShiftLeft' || KEYS[event.code].code === 'ShiftRight') {
          this.shift = false;
          this.render();
        }
        if (KEYS[event.code].code === 'CapsLock' && this.capsPressed) {
          KEYS[event.code].setHighlighted(true);
        }
      }
    });
  }

  render() {
    this.keysLayout.forEach((row) => {
      row.forEach((key) => key.render(this.lang, this.shift, this.caps));
    });
  }
}


/***/ }),

/***/ "./src/scripts/render-main-page.js":
/*!*****************************************!*\
  !*** ./src/scripts/render-main-page.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderMainPage": () => (/* binding */ renderMainPage)
/* harmony export */ });
/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyboard */ "./src/scripts/keyboard.js");


const renderMainPage = (element) => {
  const divContainer = document.createElement('div');
  const header1 = document.createElement('h1');
  const textArea = document.createElement('textarea');
  const divKeyboardContainer = document.createElement('div');
  const divTextContainer = document.createElement('div');
  const textOS = document.createElement('p');
  const textLangSwitch = document.createElement('p');

  divContainer.classList.add('page-container');

  header1.innerText = 'Виртуальная Клавиатура';
  header1.classList.add('title');
  divContainer.appendChild(header1);

  textArea.classList.add('textarea');
  textArea.setAttribute('autofocus', '');
  textArea.addEventListener('focusout', () => textArea.focus());
  divContainer.appendChild(textArea);

  divKeyboardContainer.classList.add('keyboard-container');
  const keyboard = new _keyboard__WEBPACK_IMPORTED_MODULE_0__.Keyboard(divKeyboardContainer, textArea);
  keyboard.render('en');
  divContainer.appendChild(divKeyboardContainer);

  divTextContainer.classList.add('text-container');
  textOS.innerText = 'Клавиатура создана в операционной системе Windows';
  textLangSwitch.innerText = 'Для переключения языка комбинация: левыe ctrl + alt';
  divTextContainer.appendChild(textOS);
  divTextContainer.appendChild(textLangSwitch);
  divContainer.appendChild(divTextContainer);

  element.appendChild(divContainer);
};


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/scripts/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxxRUFBZ0I7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsVUFBVSxxRUFBZ0I7QUFDMUI7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3Bic0M7O0FBRS9CO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLCtDQUFRO0FBQy9CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aXJ0dWFsLWtleWJvYXJkLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzIiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvLi9zcmMvc3R5bGVzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vdmlydHVhbC1rZXlib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdmlydHVhbC1rZXlib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3M/ZTVkOCIsIndlYnBhY2s6Ly92aXJ0dWFsLWtleWJvYXJkLy4vc3JjL3N0eWxlcy9ub3JtYWxpemUuY3NzPzQzZjQiLCJ3ZWJwYWNrOi8vdmlydHVhbC1rZXlib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly92aXJ0dWFsLWtleWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly92aXJ0dWFsLWtleWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdmlydHVhbC1rZXlib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly92aXJ0dWFsLWtleWJvYXJkLy4vc3JjL3NjcmlwdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdmlydHVhbC1rZXlib2FyZC8uL3NyYy9zY3JpcHRzL2luc2VydC1pbi10ZXh0YXJlYS5qcyIsIndlYnBhY2s6Ly92aXJ0dWFsLWtleWJvYXJkLy4vc3JjL3NjcmlwdHMva2V5LmpzIiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvLi9zcmMvc2NyaXB0cy9rZXlib2FyZC5qcyIsIndlYnBhY2s6Ly92aXJ0dWFsLWtleWJvYXJkLy4vc3JjL3NjcmlwdHMvcmVuZGVyLW1haW4tcGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5wYWdlLWNvbnRhaW5lciB7XFxuICB3aWR0aDogNzk1cHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogNDBweDtcXG4gIGdhcDogMTBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVHJlYnVjaGV0IE1TXFxcIiwgXFxcIkhlbHZldGljYVxcXCIsIHNhbnMtc2VyaWY7XFxufVxcbi5wYWdlLWNvbnRhaW5lciAudGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLnBhZ2UtY29udGFpbmVyIC50ZXh0YXJlYSB7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuLnBhZ2UtY29udGFpbmVyIC50ZXh0YXJlYTpmb2N1cyB7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG4ucGFnZS1jb250YWluZXIgLmtleWJvYXJkLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDI1MXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBwYWRkaW5nOiA2cHg7XFxuICBnYXA6IDhweDtcXG4gIGJhY2tncm91bmQ6ICM4ODg4ODg7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMjIyMjIyO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG4ucGFnZS1jb250YWluZXIgLmtleWJvYXJkLWNvbnRhaW5lciAucm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDZweDtcXG59XFxuLnBhZ2UtY29udGFpbmVyIC5rZXlib2FyZC1jb250YWluZXIgLnJvdyAua2V5IHtcXG4gIGhlaWdodDogNDBweDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgYmFja2dyb3VuZDogIzQ0NDQ0NDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcbi5wYWdlLWNvbnRhaW5lciAua2V5Ym9hcmQtY29udGFpbmVyIC5yb3cgLmtleTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyMTMsIDEyNCk7XFxufVxcbi5wYWdlLWNvbnRhaW5lciAua2V5Ym9hcmQtY29udGFpbmVyIC5yb3cgLmtleTphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMywgMTgyLCA1MCk7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcbi5wYWdlLWNvbnRhaW5lciAua2V5Ym9hcmQtY29udGFpbmVyIC5yb3cgLmtleS1kYXJrIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyO1xcbn1cXG4ucGFnZS1jb250YWluZXIgLmtleWJvYXJkLWNvbnRhaW5lciAucm93IC5oaWdobGlnaHRlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIzLCAxODIsIDUwKTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuLnBhZ2UtY29udGFpbmVyIC50ZXh0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnBhZ2UtY29udGFpbmVyIC50ZXh0LWNvbnRhaW5lciBwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0Esb0RBQUE7QUFDSjtBQUNJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQUNSO0FBRUk7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFBUjtBQUVRO0VBQ0ksVUFBQTtBQUFaO0FBS0k7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFIUjtBQUtRO0VBQ0ksYUFBQTtFQUNBLFFBQUE7QUFIWjtBQUtZO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUhoQjtBQUtnQjtFQUNJLG9DQUFBO0FBSHBCO0FBTWdCO0VBQ0ksbUNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBSnBCO0FBT1k7RUFDSSxnQkFBQTtFQUNBLHlCQUFBO0FBTGhCO0FBT1k7RUFDSSxtQ0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFMaEI7QUFVSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FBUlI7QUFVUTtFQUNJLGtCQUFBO0FBUlpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnBhZ2UtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDc5NXB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA0MHB4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiVHJlYnVjaGV0IE1TXFxcIiwgXFxcIkhlbHZldGljYVxcXCIsIHNhbnMtc2VyaWY7XFxuXFxuICAgIC50aXRsZSB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICB9XFxuXFxuICAgIC50ZXh0YXJlYSB7XFxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG5cXG4gICAgICAgICY6Zm9jdXMge1xcbiAgICAgICAgICAgIG91dGxpbmU6IDA7XFxuICAgICAgICAgICBcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAua2V5Ym9hcmQtY29udGFpbmVyIHtcXG4gICAgICAgIGhlaWdodDogMjUxcHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgICAgIHBhZGRpbmc6IDZweDtcXG4gICAgICAgIGdhcDogOHB4O1xcbiAgICAgICAgYmFja2dyb3VuZDogIzg4ODg4ODtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMyMjIyMjI7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFxuICAgICAgICAucm93IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGdhcDogNnB4O1xcblxcbiAgICAgICAgICAgIC5rZXkge1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNDQ0NDQ0O1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xcblxcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDIxMywgMTI0KTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAmOmFjdGl2ZSB7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIzLCAxODIsIDUwKTtcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAua2V5LWRhcmsge1xcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAuaGlnaGxpZ2h0ZWQge1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIzLCAxODIsIDUwKTtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC50ZXh0LWNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgICAgIHAge1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiDQo9C60LDQt9GL0LLQsNC10LwgYm94IHNpemluZyAqL1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qINCj0LHQuNGA0LDQtdC8INCy0L3Rg9GC0YDQtdC90L3QuNC1INC+0YLRgdGC0YPQv9GLICovXFxudWxbY2xhc3NdLFxcbm9sW2NsYXNzXSB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKiDQo9Cx0LjRgNCw0LXQvCDQstC90LXRiNC90LjQtSDQvtGC0YHRgtGD0L/RiyAqL1xcbmJvZHksXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxucCxcXG51bFtjbGFzc10sXFxub2xbY2xhc3NdLFxcbmxpLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiDQktGL0YHRgtCw0LLQu9GP0LXQvCDQvtGB0L3QvtCy0L3Ri9C1INC90LDRgdGC0YDQvtC50LrQuCDQv9C+LdGD0LzQvtC70YfQsNC90LjRjiDQtNC70Y8gYm9keSAqL1xcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZVNwZWVkO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuLyog0KPQtNCw0LvRj9C10Lwg0YHRgtCw0L3QtNCw0YDRgtC90YPRjiDRgdGC0LjQu9C40LfQsNGG0LjRjiDQtNC70Y8g0LLRgdC10YUgdWwg0LggaWwsINGDINC60L7RgtC+0YDRi9GFINC10YHRgtGMINCw0YLRgNC40LHRg9GCIGNsYXNzKi9cXG51bFtjbGFzc10sXFxub2xbY2xhc3NdIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qINCt0LvQtdC80LXQvdGC0YsgYSwg0YMg0LrQvtGC0L7RgNGL0YUg0L3QtdGCINC60LvQsNGB0YHQsCwg0YHQsdGA0LDRgdGL0LLQsNC10Lwg0LTQviDQtNC10YTQvtC70YLQvdGL0YUg0YHRgtC40LvQtdC5ICovXFxuYTpub3QoW2NsYXNzXSkge1xcbiAgdGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBhdXRvO1xcbn1cXG5cXG4vKiDQo9C/0YDQvtGJ0LDQtdC8INGA0LDQsdC+0YLRgyDRgSDQuNC30L7QsdGA0LDQttC10L3QuNGP0LzQuCAqL1xcbmltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyog0KPQutCw0LfRi9Cy0LDQtdC8INC/0L7QvdGP0YLQvdGD0Y4g0L/QtdGA0LjQvtC00LjRh9C90L7RgdGC0Ywg0LIg0L/QvtGC0L7QutC1INC00LDQvdC90YvRhSDRgyBhcnRpY2xlKi9cXG5hcnRpY2xlID4gKiArICoge1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbn1cXG5cXG4vKiDQndCw0YHQu9C10LTRg9C10Lwg0YjRgNC40YTRgtGLINC00LvRjyDQuNC90L/Rg9GC0L7QsiDQuCDQutC90L7Qv9C+0LogKi9cXG5pbnB1dCxcXG5idXR0b24sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbi8qINCj0LTQsNC70Y/QtdC8INCy0YHQtSDQsNC90LjQvNCw0YbQuNC4INC4INC/0LXRgNC10YXQvtC00Ysg0LTQu9GPINC70Y7QtNC10LksINC60L7RgtC+0YDRi9C1INC/0YDQtdC00L/QvtGH0LjRgtCw0Lkg0LjRhSDQvdC1INC40YHQv9C+0LvRjNC30L7QstCw0YLRjCAqL1xcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XFxuICAqIHtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50O1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvICFpbXBvcnRhbnQ7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbm9ybWFsaXplLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSx5QkFBeUI7QUFDekI7OztFQUdFLHNCQUFzQjtBQUN4Qjs7QUFFQSwrQkFBK0I7QUFDL0I7O0VBRUUsVUFBVTtBQUNaOztBQUVBLDRCQUE0QjtBQUM1Qjs7Ozs7Ozs7Ozs7Ozs7RUFjRSxTQUFTO0FBQ1g7O0FBRUEsd0RBQXdEO0FBQ3hEO0VBQ0UsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2Qiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0FBQ2xCOztBQUVBLGlGQUFpRjtBQUNqRjs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUEscUVBQXFFO0FBQ3JFO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBLG9DQUFvQztBQUNwQztFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBLDhEQUE4RDtBQUM5RDtFQUNFLGVBQWU7QUFDakI7O0FBRUEsMENBQTBDO0FBQzFDOzs7O0VBSUUsYUFBYTtBQUNmOztBQUVBLHNGQUFzRjtBQUN0RjtFQUNFO0lBQ0UscUNBQXFDO0lBQ3JDLHVDQUF1QztJQUN2QyxzQ0FBc0M7SUFDdEMsZ0NBQWdDO0VBQ2xDO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyog0KPQutCw0LfRi9Cy0LDQtdC8IGJveCBzaXppbmcgKi9cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiDQo9Cx0LjRgNCw0LXQvCDQstC90YPRgtGA0LXQvdC90LjQtSDQvtGC0YHRgtGD0L/RiyAqL1xcbnVsW2NsYXNzXSxcXG5vbFtjbGFzc10ge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyog0KPQsdC40YDQsNC10Lwg0LLQvdC10YjQvdC40LUg0L7RgtGB0YLRg9C/0YsgKi9cXG5ib2R5LFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbnAsXFxudWxbY2xhc3NdLFxcbm9sW2NsYXNzXSxcXG5saSxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5ibG9ja3F1b3RlLFxcbmRsLFxcbmRkIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyog0JLRi9GB0YLQsNCy0LvRj9C10Lwg0L7RgdC90L7QstC90YvQtSDQvdCw0YHRgtGA0L7QudC60Lgg0L/Qvi3Rg9C80L7Qu9GH0LDQvdC40Y4g0LTQu9GPIGJvZHkgKi9cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbi8qINCj0LTQsNC70Y/QtdC8INGB0YLQsNC90LTQsNGA0YLQvdGD0Y4g0YHRgtC40LvQuNC30LDRhtC40Y4g0LTQu9GPINCy0YHQtdGFIHVsINC4IGlsLCDRgyDQutC+0YLQvtGA0YvRhSDQtdGB0YLRjCDQsNGC0YDQuNCx0YPRgiBjbGFzcyovXFxudWxbY2xhc3NdLFxcbm9sW2NsYXNzXSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiDQrdC70LXQvNC10L3RgtGLIGEsINGDINC60L7RgtC+0YDRi9GFINC90LXRgiDQutC70LDRgdGB0LAsINGB0LHRgNCw0YHRi9Cy0LDQtdC8INC00L4g0LTQtdGE0L7Qu9GC0L3Ri9GFINGB0YLQuNC70LXQuSAqL1xcbmE6bm90KFtjbGFzc10pIHtcXG4gIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcXG59XFxuXFxuLyog0KPQv9GA0L7RidCw0LXQvCDRgNCw0LHQvtGC0YMg0YEg0LjQt9C+0LHRgNCw0LbQtdC90LjRj9C80LggKi9cXG5pbWcge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qINCj0LrQsNC30YvQstCw0LXQvCDQv9C+0L3Rj9GC0L3Rg9GOINC/0LXRgNC40L7QtNC40YfQvdC+0YHRgtGMINCyINC/0L7RgtC+0LrQtSDQtNCw0L3QvdGL0YUg0YMgYXJ0aWNsZSovXFxuYXJ0aWNsZSA+ICogKyAqIHtcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG59XFxuXFxuLyog0J3QsNGB0LvQtdC00YPQtdC8INGI0YDQuNGE0YLRiyDQtNC70Y8g0LjQvdC/0YPRgtC+0LIg0Lgg0LrQvdC+0L/QvtC6ICovXFxuaW5wdXQsXFxuYnV0dG9uLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5cXG4vKiDQo9C00LDQu9GP0LXQvCDQstGB0LUg0LDQvdC40LzQsNGG0LjQuCDQuCDQv9C10YDQtdGF0L7QtNGLINC00LvRjyDQu9GO0LTQtdC5LCDQutC+0YLQvtGA0YvQtSDQv9GA0LXQtNC/0L7Rh9C40YLQsNC5INC40YUg0L3QtSDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0YwgKi9cXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xcbiAgKiB7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi4vc3R5bGVzL25vcm1hbGl6ZS5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGUuc2Nzcyc7XG5pbXBvcnQgeyByZW5kZXJNYWluUGFnZSB9IGZyb20gJy4vcmVuZGVyLW1haW4tcGFnZSc7XG5cbnJlbmRlck1haW5QYWdlKGRvY3VtZW50LmJvZHkpO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmV4cG9ydCBjb25zdCBpbnNlcnRJblRleHRhcmVhID0gKHRleHRhcmVhLCB0ZXh0KSA9PiB7XG4gIGNvbnN0IGN1cnNvclN0YXJ0ID0gdGV4dGFyZWEuc2VsZWN0aW9uU3RhcnQ7XG4gIHRleHRhcmVhLnZhbHVlID0gdGV4dGFyZWEudmFsdWUuc2xpY2UoMCwgdGV4dGFyZWEuc2VsZWN0aW9uU3RhcnQpXG4gICAgICAgICAgICArIHRleHRcbiAgICAgICAgICAgICsgdGV4dGFyZWEudmFsdWUuc2xpY2UodGV4dGFyZWEuc2VsZWN0aW9uU3RhcnQpO1xuICB0ZXh0YXJlYS5zZWxlY3Rpb25TdGFydCA9IGN1cnNvclN0YXJ0ICsgMTtcbiAgdGV4dGFyZWEuc2VsZWN0aW9uRW5kID0gdGV4dGFyZWEuc2VsZWN0aW9uU3RhcnQ7XG59O1xuIiwiaW1wb3J0IHsgaW5zZXJ0SW5UZXh0YXJlYSB9IGZyb20gJy4vaW5zZXJ0LWluLXRleHRhcmVhJztcblxuZXhwb3J0IGNsYXNzIEtleSB7XG4gIGNvbnN0cnVjdG9yKHtcbiAgICB0ZXh0ID0gJ3Ev0LknLCB3aWR0aCA9ICc0MHB4JywgY29kZSwgZGFyayA9IGZhbHNlLCB0ZXh0QXJlYSwgaGlnaGxpZ2h0ZWQgPSBmYWxzZSwgaGFuZGxlTW91c2VEb3duID0gKCkgPT4ge1xuICAgICAgaW5zZXJ0SW5UZXh0YXJlYSh0aGlzLnRleHRBcmVhLCB0aGlzLmdldFRleHQodGhpcy5sYW5nLCB0aGlzLnNoaWZ0LCB0aGlzLmNhcHMpKTtcbiAgICB9LCBoYW5kbGVNb3VzZVVwLFxuICB9KSB7XG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICB0aGlzLnRleHRBcmVhID0gdGV4dEFyZWE7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuY29kZSA9IGNvZGU7XG4gICAgdGhpcy5kYXJrID0gZGFyaztcbiAgICB0aGlzLmhpZ2hsaWdodGVkID0gaGlnaGxpZ2h0ZWQ7XG4gICAgdGhpcy5oYW5kbGVNb3VzZURvd24gPSBoYW5kbGVNb3VzZURvd247XG4gICAgdGhpcy5oYW5kbGVNb3VzZVVwID0gaGFuZGxlTW91c2VVcDtcbiAgICB0aGlzLmtleUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMua2V5Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVNb3VzZURvd24oZXZlbnQpO1xuICAgICAgY29uc3QgaGFuZGxlciA9IChpZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuaGFuZGxlTW91c2VVcCkgeyB0aGlzLmhhbmRsZU1vdXNlVXAoaWV2ZW50KTsgfVxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgaGFuZGxlcik7XG4gICAgICB9O1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGhhbmRsZXIpO1xuICAgIH0pO1xuICAgIHRoaXMua2V5Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmhhbmRsZU1vdXNlVXApO1xuICB9XG5cbiAgc2V0SGlnaGxpZ2h0ZWQodmFsdWUpIHtcbiAgICB0aGlzLmhpZ2hsaWdodGVkID0gdmFsdWU7XG4gICAgdGhpcy5yZW5kZXIodGhpcy5sYW5nLCB0aGlzLnNoaWZ0LCB0aGlzLmNhcHMpO1xuICB9XG5cbiAgZ2V0VGV4dChsYW5nLCBzaGlmdCwgY2Fwcykge1xuICAgIGlmICh0aGlzLmRhcmspIHJldHVybiB0aGlzLnRleHQ7XG4gICAgY29uc3QgbGV0dGVycyA9IHRoaXMudGV4dC5zcGxpdCgnJyk7XG4gICAgY29uc3QgW2xvd2VyRU4sIHVwcGVyRU4sIGxvd2VyUlUsIHVwcGVyUlUsIGNhcHNFTiwgY2Fwc1JVLCBjYXBzU2hpZnRFTiwgY2Fwc1NoaWZ0UlVdID0gbGV0dGVycztcbiAgICBpZiAobGFuZyA9PT0gJ2VuJyAmJiAhc2hpZnQgJiYgIWNhcHMpIHsgcmV0dXJuIGxvd2VyRU47IH1cbiAgICBpZiAobGFuZyA9PT0gJ2VuJyAmJiBzaGlmdCAmJiAhY2FwcykgeyByZXR1cm4gdXBwZXJFTjsgfVxuICAgIGlmIChsYW5nID09PSAncnUnICYmICFzaGlmdCAmJiAhY2FwcykgeyByZXR1cm4gbG93ZXJSVTsgfVxuICAgIGlmIChsYW5nID09PSAncnUnICYmIHNoaWZ0ICYmICFjYXBzKSB7IHJldHVybiB1cHBlclJVOyB9XG4gICAgaWYgKGxhbmcgPT09ICdlbicgJiYgY2FwcyAmJiAhc2hpZnQpIHsgcmV0dXJuIGNhcHNFTjsgfVxuICAgIGlmIChsYW5nID09PSAncnUnICYmIGNhcHMgJiYgIXNoaWZ0KSB7IHJldHVybiBjYXBzUlU7IH1cbiAgICBpZiAobGFuZyA9PT0gJ2VuJyAmJiBjYXBzICYmIHNoaWZ0KSB7IHJldHVybiBjYXBzU2hpZnRFTjsgfVxuICAgIGlmIChsYW5nID09PSAncnUnICYmIGNhcHMgJiYgc2hpZnQpIHsgcmV0dXJuIGNhcHNTaGlmdFJVOyB9XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgcmVuZGVyKGxhbmcsIHNoaWZ0LCBjYXBzKSB7XG4gICAgdGhpcy5sYW5nID0gbGFuZztcbiAgICB0aGlzLnNoaWZ0ID0gc2hpZnQ7XG4gICAgdGhpcy5jYXBzID0gY2FwcztcbiAgICB0aGlzLmtleUNvbnRhaW5lci5pbm5lckhUTUwgPSB0aGlzLmdldFRleHQobGFuZywgc2hpZnQsIGNhcHMpO1xuICAgIHRoaXMua2V5Q29udGFpbmVyLnN0eWxlLndpZHRoID0gdGhpcy53aWR0aDtcbiAgICB0aGlzLmtleUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdrZXknKTtcbiAgICBpZiAodGhpcy5kYXJrID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmtleUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdrZXktZGFyaycpO1xuICAgIH1cbiAgICBpZiAodGhpcy5oaWdobGlnaHRlZCA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5rZXlDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0ZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5rZXlDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0ZWQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5rZXlDb250YWluZXI7XG4gIH1cbn1cbiIsImltcG9ydCB7IEtleSB9IGZyb20gJy4va2V5JztcbmltcG9ydCB7IGluc2VydEluVGV4dGFyZWEgfSBmcm9tICcuL2luc2VydC1pbi10ZXh0YXJlYSc7XG5cbmV4cG9ydCBjbGFzcyBLZXlib2FyZCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHRleHRBcmVhKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLnRleHRBcmVhID0gdGV4dEFyZWE7XG4gICAgdGhpcy5jYXBzID0gZmFsc2U7XG4gICAgdGhpcy5sYW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmcnKSB8fCAnZW4nO1xuICAgIHRoaXMuc2hpZnQgPSBmYWxzZTtcbiAgICB0aGlzLmNhcHNQcmVzc2VkID0gZmFsc2U7XG5cbiAgICBjb25zdCBLRVlTID0ge1xuICAgICAgQmFja3F1b3RlOiBuZXcgS2V5KHtcbiAgICAgICAgdGV4dDogJ2B+0ZHQgWDQgX7RkScsIGNvZGU6ICdCYWNrcXVvdGUnLCB0ZXh0QXJlYTogdGhpcy50ZXh0QXJlYSxcbiAgICAgIH0pLFxuICAgICAgRGlnaXQxOiBuZXcgS2V5KHtcbiAgICAgICAgdGV4dDogJzEhMSExMSEhJywgY29kZTogJ0RpZ2l0MScsIHRleHRBcmVhOiB0aGlzLnRleHRBcmVhLFxuICAgICAgfSksXG4gICAgICBEaWdpdDI6IG5ldyBLZXkoe1xuICAgICAgICB0ZXh0OiAnMkAyXCIyMkBcIicsIGNvZGU6ICdEaWdpdDInLCB0ZXh0QXJlYTogdGhpcy50ZXh0QXJlYSxcbiAgICAgIH0pLFxuICAgICAgRGlnaXQzOiBuZXcgS2V5KHtcbiAgICAgICAgdGV4dDogJzMjM+KEljMzI+KElicsIGNvZGU6ICdEaWdpdDMnLCB0ZXh0QXJlYTogdGhpcy50ZXh0QXJlYSxcbiAgICAgIH0pLFxuICAgICAgRGlnaXQ0OiBuZXcgS2V5KHtcbiAgICAgICAgdGV4dDogJzQkNDs0NCQ7JywgY29kZTogJ0RpZ2l0NCcsIHRleHRBcmVhOiB0aGlzLnRleHRBcmVhLFxuICAgICAgfSksXG4gICAgICBEaWdpdDU6IG5ldyBLZXkoe1xuICAgICAgICB0ZXh0OiAnNSU1JTU1JSUnLCBjb2RlOiAnRGlnaXQ1JywgdGV4dEFyZWE6IHRoaXMudGV4dEFyZWEsXG4gICAgICB9KSxcbiAgICAgIERpZ2l0NjogbmV3IEtleSh7XG4gICAgICAgIHRleHQ6ICc2XjY6NjZeOicsIGNvZGU6ICdEaWdpdDYnLCB0ZXh0QXJlYTogdGhpcy50ZXh0QXJlYSxcbiAgICAgIH0pLFxuICAgICAgRGlnaXQ3OiBuZXcgS2V5KHtcbiAgICAgICAgdGV4dDogJzcmNz83NyY/JywgY29kZTogJ0RpZ2l0NycsIHRleHRBcmVhOiB0aGlzLnRleHRBcmVhLFxuICAgICAgfSksXG4gICAgICBEaWdpdDg6IG5ldyBLZXkoe1xuICAgICAgICB0ZXh0OiAnOCo4Kjg4KionLCBjb2RlOiAnRGlnaXQ4JywgdGV4dEFyZWE6IHRoaXMudGV4dEFyZWEsXG4gICAgICB9KSxcbiAgICAgIERpZ2l0OTogbmV3IEtleSh7XG4gICAgICAgIHRleHQ6ICc5KDkoOTkoKCcsIGNvZGU6ICdEaWdpdDknLCB0ZXh0QXJlYTogdGhpcy50ZXh0QXJlYSxcbiAgICAgIH0pLFxuICAgICAgRGlnaXQwOiBuZXcgS2V5KHtcbiAgICAgICAgdGV4dDogJzApMCkwMCkpJywgY29kZTogJ0RpZ2l0MCcsIHRleHRBcmVhOiB0aGlzLnRleHRBcmVhLFxuICAgICAgfSksXG4gICAgICBNaW51czogbmV3IEtleSh7XG4gICAgICAgIHRleHQ6ICctXy1fLS1fXycsIGNvZGU6ICdNaW51cycsIHRleHRBcmVhOiB0aGlzLnRleHRBcmVhLFxuICAgICAgfSksXG4gICAgICBFcXVhbDogbmV3IEtleSh7XG4gICAgICAgIHRleHQ6ICc9Kz0rPT0rKycsIGNvZGU6ICdFcXVhbCcsIHRleHRBcmVhOiB0aGlzLnRleHRBcmVhLFxuICAgICAgfSksXG4gICAgICBCYWNrc3BhY2U6IG5ldyBLZXkoe1xuICAgICAgICB0ZXh0OiAnQmFja3NwYWNlJyxcbiAgICAgICAgd2lkdGg6ICcxMDBweCcsXG4gICAgICAgIGNvZGU6ICdCYWNrc3BhY2UnLFxuICAgICAgICBkYXJrOiB0cnVlLFxuICAgICAgICB0ZXh0QXJlYTogdGhpcy50ZXh0QXJlYSxcbiAgICAgICAgaGFuZGxlTW91c2VEb3duOiAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgY3Vyc29yU3RhcnQgPSB0aGlzLnRleHRBcmVhLnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICAgIHRoaXMudGV4dEFyZWEudmFsdWUgPSB0aGlzLnRleHRBcmVhLnZhbHVlLnNsaWNlKDAsIHRoaXMudGV4dEFyZWEuc2VsZWN0aW9uU3RhcnQgLSAxKVxuICAgICAgICAgICAgKyB0aGlzLnRleHRBcmVhLnZhbHVlLnNsaWNlKHRoaXMudGV4dEFyZWEuc2VsZWN0aW9uU3RhcnQpO1xuXG4gICAgICAgICAgdGhpcy50ZXh0QXJlYS5zZWxlY3Rpb25TdGFydCA9IGN1cnNvclN0YXJ0IC0gMTtcbiAgICAgICAgICB0aGlzLnRleHRBcmVhLnNlbGVjdGlvbkVuZCA9IHRoaXMudGV4dEFyZWEuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIFRhYjogbmV3IEtleSh7XG4gICAgICAgIHRleHQ6ICdUYWInLFxuICAgICAgICB3aWR0aDogJzUwcHgnLFxuICAgICAgICBjb2RlOiAnVGFiJyxcbiAgICAgICAgZGFyazogdHJ1ZSxcbiAgICAgICAgdGV4dEFyZWE6IHRoaXMudGV4dEFyZWEsXG4gICAgICAgIGhhbmRsZU1vdXNlRG93bjogKCkgPT4ge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10YWJzXG4gICAgICAgICAgaW5zZXJ0SW5UZXh0YXJlYSh0aGlzLnRleHRBcmVhLCAnXHQnKTtcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgS2V5UTogbmV3IEtleSh7XG4gICAgICAgIHRleHQ6ICdxUdC50JlR0Jlx0LknLCBjb2RlOiAnS2V5UScsIHRleHRBcmVhOiB0aGlzLnRleHRBcmVhLFxuICAgICAgfSksXG4gICAgICBLZXlXOiBuZXcgS2V5KHtcbiAgICAgICAgdGV4dDogJ3dX0YbQplfQpnfRhicsIGNvZGU6ICdLZXlXJywgdGV4dEFyZWE6IHRoaXMudGV4dEFyZWEsXG4gICAgICB9KSxcbiAgICAgIEtleUU6IG5ldyBLZXkoe1xuICAgICAgICB0ZXh0OiAnZUXRg9CjRdCjZdGDJywgY29kZTogJ0tleUUnLCB0ZXh0QXJlYTogdGhpcy50ZXh0QXJlYSxcbiAgICAgIH0pLFxuICAgICAgS2V5UjogbmV3IEtleSh7XG4gICAgICAgIHRleHQ6ICdyUtC60JpS0Jpy0LonLCBjb2RlOiAnS2V5UicsIHRleHRBcmVhOiB0aGlzLnRleHRBcmVhLFxuICAgICAgfSksXG4gICAgICBLZXlUOiBuZXcgS2V5KHtcbiAgICAgICAgdGV4dDogJ3RU0LXQlVTQlXTQtScsIGNvZGU6ICdLZXlUJywgdGV4dEFyZWE6IHRoaXMudGV4dEFyZWEsXG4gICAgICB9KSxcbiAgICAgIEtleVk6IG5ldyBLZXkoe1xuICAgICAgICB0ZXh0OiAneVnQvdCdWdCdedC9JywgY29kZTogJ0tleVknLCB0ZXh0QXJlYTogdGhpcy50ZXh0QXJlYSxcbiAgICAgIH0pLFxuICAgICAgS2V5VTogbmV3IEtleSh7XG4gICAgICAgIHRleHQ6ICd1VdCz0JNV0JN10LMnLCBjb2RlOiAnS2V5VScsIHRleHRBcmVhOiB0aGlzLnRleHRBcmVhLFxuICAgICAgfSksXG4gICAgICBLZXlJOiBuZXcgS2V5KHtcbiAgICAgICAgdGV4dDogJ2lJ0YjQqEnQqGnRiCcsIGNvZGU6ICdLZXlJJywgdGV4dEFyZWE6IHRoaXMudGV4dEFyZWEsXG4gICAgICB9KSxcbiAgICAgIEtleU86IG5ldyBLZXkoe1xuICAgICAgICB0ZXh0OiAnb0/RidCpT9Cpb9GJJywgY29kZTogJ0tleU8nLCB0ZXh0QXJlYTogdGhpcy50ZXh0QXJlYSxcbiAgICAgIH0pLFxuICAgICAgS2V5UDogbmV3IEtleSh7XG4gICAgICAgIHRleHQ6ICdwUNC30JdQ0Jdw0LcnLCBjb2RlOiAnS2V5UCcsIHRleHRBcmVhOiB0aGlzLnRleHRBcmVhLFxuICAgICAgfSksXG4gICAgICBCcmFja2V0TGVmdDogbmV3IEtleSh7XG4gICAgICAgIHRleHQ6ICdbe9GF0KVb0KV70YUnLCBjb2RlOiAnQnJhY2tldExlZnQnLCB0ZXh0QXJlYTogdGhpcy50ZXh0QXJlYSxcbiAgICAgIH0pLFxuICAgICAgQnJhY2tldFJpZ2h0OiBuZXcgS2V5KHtcbiAgICAgICAgdGV4dDogJ1190YrQql3Qqn3RiicsIGNvZGU6ICdCcmFja2V0UmlnaHQnLCB0ZXh0QXJlYTogdGhpcy50ZXh0QXJlYSxcbiAgICAgIH0pLFxuICAgICAgQmFja3NsYXNoOiBuZXcgS2V5KHtcbiAgICAgICAgdGV4dDogJ1xcXFx8XFxcXC9cXFxcXFxcXHwvJywgY29kZTogJ0JhY2tzbGFzaCcsIHRleHRBcmVhOiB0aGlzLnRleHRBcmVhLFxuICAgICAgfSksXG4gICAgICBEZWxldGU6IG5ldyBLZXkoe1xuICAgICAgICB0ZXh0OiAnRGVsJyxcbiAgICAgICAgd2lkdGg6ICc0NHB4JyxcbiAgICAgICAgY29kZTogJ0RlbGV0ZScsXG4gICAgICAgIGRhcms6IHRydWUsXG4gICAgICAgIHRleHRBcmVhOiB0aGlzLnRleHRBcmVhLFxuICAgICAgICBoYW5kbGVNb3VzZURvd246ICgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy50ZXh0QXJlYS5zZWxlY3Rpb25TdGFydCA8PSB0aGlzLnRleHRBcmVhLnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgY3Vyc29yU3RhcnQgPSB0aGlzLnRleHRBcmVhLnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICAgICAgdGhpcy50ZXh0QXJlYS52YWx1ZSA9IHRoaXMudGV4dEFyZWEudmFsdWUuc2xpY2UoMCwgdGhpcy50ZXh0QXJlYS5zZWxlY3Rpb25TdGFydClcbiAgICAgICAgICAgICAgKyB0aGlzLnRleHRBcmVhLnZhbHVlLnNsaWNlKHRoaXMudGV4dEFyZWEuc2VsZWN0aW9uU3RhcnQgKyAxKTtcblxuICAgICAgICAgICAgdGhpcy50ZXh0QXJlYS5zZWxlY3Rpb25TdGFydCA9IGN1cnNvclN0YXJ0O1xuICAgICAgICAgICAgdGhpcy50ZXh0QXJlYS5zZWxlY3Rpb25FbmQgPSB0aGlzLnRleHRBcmVhLnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgQ2Fwc0xvY2s6IG5ldyBLZXkoe1xuICAgICAgICB0ZXh0OiAnQ2Fwc2xvY2snLFxuICAgICAgICB3aWR0aDogJzEwMHB4JyxcbiAgICAgICAgY29kZTogJ0NhcHNMb2NrJyxcbiAgICAgICAgZGFyazogdHJ1ZSxcbiAgICAgICAgdGV4dEFyZWE6IHRoaXMudGV4dEFyZWEsXG4gICAgICAgIGhhbmRsZU1vdXNlRG93bjogKCkgPT4ge1xuICAgICAgICAgIGlmICghdGhpcy5jYXBzUHJlc3NlZCkge1xuICAgICAgICAgICAgdGhpcy5jYXBzID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY2Fwc1ByZXNzZWQgPSB0cnVlO1xuICAgICAgICAgICAgS0VZUy5DYXBzTG9jay5zZXRIaWdobGlnaHRlZCh0cnVlKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2FwcyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jYXBzUHJlc3NlZCA9IGZhbHNlO1xuICAgICAgICAgICAgS0VZUy5DYXBzTG9jay5zZXRIaWdobGlnaHRlZChmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgS2V5QTogbmV3IEtleSh7XG4gICAgICAgIHRleHQ6ICdhQdGE0KRB0KRh0YQnLCBjb2RlOiAnS2V5QScsIHRleHRBcmVhOiB0aGlzLnRleHRBcmVhLFxuICAgICAgfSksXG4gICAgICBLZXlTOiBuZXcgS2V5KHtcbiAgICAgICAgdGV4dDogJ3NT0YvQq1PQq3PRiycsIGNvZGU6ICdLZXlTJywgdGV4dEFyZWE6IHRoaXMudGV4dEFyZWEsXG4gICAgICB9KSxcbiAgICAgIEtleUQ6IG5ldyBLZXkoe1xuICAgICAgICB0ZXh0OiAnZETQstCSRNCSZNCyJywgY29kZTogJ0tleUQnLCB0ZXh0QXJlYTogdGhpcy50ZXh0QXJlYSxcbiAgICAgIH0pLFxuICAgICAgS2V5RjogbmV3IEtleSh7XG4gICAgICAgIHRleHQ6ICdmRtCw0JBG0JBm0LAnLCBjb2RlOiAnS2V5RicsIHRleHRBcmVhOiB0aGlzLnRleHRBcmVhLFxuICAgICAgfSksXG4gICAgICBLZXlHOiBuZXcgS2V5KHtcbiAgICAgICAgdGV4dDogJ2dH0L/Qn0fQn2fQvycsIGNvZGU6ICdLZXlHJywgdGV4dEFyZWE6IHRoaXMudGV4dEFyZWEsXG4gICAgICB9KSxcbiAgICAgIEtleUg6IG5ldyBLZXkoe1xuICAgICAgICB0ZXh0OiAnaEjRgNCgSNCgaNGAJywgY29kZTogJ0tleUgnLCB0ZXh0QXJlYTogdGhpcy50ZXh0QXJlYSxcbiAgICAgIH0pLFxuICAgICAgS2V5SjogbmV3IEtleSh7XG4gICAgICAgIHRleHQ6ICdqStC+0J5K0J5q0L4nLCBjb2RlOiAnS2V5SicsIHRleHRBcmVhOiB0aGlzLnRleHRBcmVhLFxuICAgICAgfSksXG4gICAgICBLZXlLOiBuZXcgS2V5KHtcbiAgICAgICAgdGV4dDogJ2tL0LvQm0vQm2vQuycsIGNvZGU6ICdLZXlLJywgdGV4dEFyZWE6IHRoaXMudGV4dEFyZWEsXG4gICAgICB9KSxcbiAgICAgIEtleUw6IG5ldyBLZXkoe1xuICAgICAgICB0ZXh0OiAnbEzQtNCUTNCUbNC0JywgY29kZTogJ0tleUwnLCB0ZXh0QXJlYTogdGhpcy50ZXh0QXJlYSxcbiAgICAgIH0pLFxuICAgICAgU2VtaWNvbG9uOiBuZXcgS2V5KHtcbiAgICAgICAgdGV4dDogJzs60LbQljvQljrQticsIGNvZGU6ICdTZW1pY29sb24nLCB0ZXh0QXJlYTogdGhpcy50ZXh0QXJlYSxcbiAgICAgIH0pLFxuICAgICAgUXVvdGU6IG5ldyBLZXkoe1xuICAgICAgICB0ZXh0OiAnXFwnXCLRjdCtXFwn0K1cItGNJywgY29kZTogJ1F1b3RlJywgdGV4dEFyZWE6IHRoaXMudGV4dEFyZWEsXG4gICAgICB9KSxcbiAgICAgIEVudGVyOiBuZXcgS2V5KHtcbiAgICAgICAgdGV4dDogJ0VudGVyJyxcbiAgICAgICAgd2lkdGg6ICc4NnB4JyxcbiAgICAgICAgY29kZTogJ0VudGVyJyxcbiAgICAgICAgZGFyazogdHJ1ZSxcbiAgICAgICAgdGV4dEFyZWE6IHRoaXMudGV4dEFyZWEsXG4gICAgICAgIGhhbmRsZU1vdXNlRG93bjogKCkgPT4geyB0aGlzLnRleHRBcmVhLnZhbHVlICs9ICdcXG4nOyB9LFxuICAgICAgfSksXG4gICAgICBTaGlmdExlZnQ6IG5ldyBLZXkoe1xuICAgICAgICB0ZXh0OiAnU2hpZnQnLFxuICAgICAgICB3aWR0aDogJzEwMHB4JyxcbiAgICAgICAgY29kZTogJ1NoaWZ0TGVmdCcsXG4gICAgICAgIGRhcms6IHRydWUsXG4gICAgICAgIHRleHRBcmVhOiB0aGlzLnRleHRBcmVhLFxuICAgICAgICBoYW5kbGVNb3VzZURvd246ICgpID0+IHtcbiAgICAgICAgICB0aGlzLnNoaWZ0ID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9LFxuICAgICAgICBoYW5kbGVNb3VzZVVwOiAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zaGlmdCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIEtleVo6IG5ldyBLZXkoe1xuICAgICAgICB0ZXh0OiAnelrRj9CvWtCvetGPJywgY29kZTogJ0tleVonLCB0ZXh0QXJlYTogdGhpcy50ZXh0QXJlYSxcbiAgICAgIH0pLFxuICAgICAgS2V5WDogbmV3IEtleSh7XG4gICAgICAgIHRleHQ6ICd4WNGH0KdY0Kd40YcnLCBjb2RlOiAnS2V5WCcsIHRleHRBcmVhOiB0aGlzLnRleHRBcmVhLFxuICAgICAgfSksXG4gICAgICBLZXlDOiBuZXcgS2V5KHtcbiAgICAgICAgdGV4dDogJ2ND0YHQoUNDY9GBJywgY29kZTogJ0tleUMnLCB0ZXh0QXJlYTogdGhpcy50ZXh0QXJlYSxcbiAgICAgIH0pLFxuICAgICAgS2V5VjogbmV3IEtleSh7XG4gICAgICAgIHRleHQ6ICd2VtC80JxW0Jx20LwnLCBjb2RlOiAnS2V5VicsIHRleHRBcmVhOiB0aGlzLnRleHRBcmVhLFxuICAgICAgfSksXG4gICAgICBLZXlCOiBuZXcgS2V5KHtcbiAgICAgICAgdGV4dDogJ2JC0LjQmELQmGLQuCcsIGNvZGU6ICdLZXlCJywgdGV4dEFyZWE6IHRoaXMudGV4dEFyZWEsXG4gICAgICB9KSxcbiAgICAgIEtleU46IG5ldyBLZXkoe1xuICAgICAgICB0ZXh0OiAnbk7RgtCiTtCibtGCJywgY29kZTogJ0tleU4nLCB0ZXh0QXJlYTogdGhpcy50ZXh0QXJlYSxcbiAgICAgIH0pLFxuICAgICAgS2V5TTogbmV3IEtleSh7XG4gICAgICAgIHRleHQ6ICdtTdGM0KxN0Kxt0YwnLCBjb2RlOiAnS2V5TScsIHRleHRBcmVhOiB0aGlzLnRleHRBcmVhLFxuICAgICAgfSksXG4gICAgICBDb21tYTogbmV3IEtleSh7XG4gICAgICAgIHRleHQ6ICcsPNCx0JEs0JE80LEnLCBjb2RlOiAnQ29tbWEnLCB0ZXh0QXJlYTogdGhpcy50ZXh0QXJlYSxcbiAgICAgIH0pLFxuICAgICAgUGVyaW9kOiBuZXcgS2V5KHtcbiAgICAgICAgdGV4dDogJy4+0Y7Qri7Qrj7RjicsIGNvZGU6ICdQZXJpb2QnLCB0ZXh0QXJlYTogdGhpcy50ZXh0QXJlYSxcbiAgICAgIH0pLFxuICAgICAgU2xhc2g6IG5ldyBLZXkoe1xuICAgICAgICB0ZXh0OiAnLz8uLC8uPywnLCBjb2RlOiAnU2xhc2gnLCB0ZXh0QXJlYTogdGhpcy50ZXh0QXJlYSxcbiAgICAgIH0pLFxuICAgICAgQXJyb3dVcDogbmV3IEtleSh7XG4gICAgICAgIHRleHQ6ICcmIzk2NTA7JyxcbiAgICAgICAgY29kZTogJ0Fycm93VXAnLFxuICAgICAgICBkYXJrOiB0cnVlLFxuICAgICAgICB0ZXh0QXJlYTogdGhpcy50ZXh0QXJlYSxcbiAgICAgICAgaGFuZGxlTW91c2VEb3duOiAoKSA9PiB7XG4gICAgICAgICAgaW5zZXJ0SW5UZXh0YXJlYSh0aGlzLnRleHRBcmVhLCAn4payJyk7XG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIFNoaWZ0UmlnaHQ6IG5ldyBLZXkoe1xuICAgICAgICB0ZXh0OiAnU2hpZnQnLFxuICAgICAgICB3aWR0aDogJzg2cHgnLFxuICAgICAgICBjb2RlOiAnU2hpZnRSaWdodCcsXG4gICAgICAgIGRhcms6IHRydWUsXG4gICAgICAgIHRleHRBcmVhOiB0aGlzLnRleHRBcmVhLFxuICAgICAgICBoYW5kbGVNb3VzZURvd246ICgpID0+IHtcbiAgICAgICAgICB0aGlzLnNoaWZ0ID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9LFxuICAgICAgICBoYW5kbGVNb3VzZVVwOiAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zaGlmdCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIENvbnRyb2xMZWZ0OiBuZXcgS2V5KHtcbiAgICAgICAgdGV4dDogJ0N0cmwnLFxuICAgICAgICBjb2RlOiAnQ29udHJvbExlZnQnLFxuICAgICAgICBkYXJrOiB0cnVlLFxuICAgICAgICB0ZXh0QXJlYTogdGhpcy50ZXh0QXJlYSxcbiAgICAgICAgaGFuZGxlTW91c2VEb3duOiAoKSA9PiB7XG4gICAgICAgICAgdGhpcy50ZXh0QXJlYS52YWx1ZSArPSAnJztcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgTWV0YUxlZnQ6IG5ldyBLZXkoe1xuICAgICAgICB0ZXh0OiAnV2luJyxcbiAgICAgICAgZGFyazogdHJ1ZSxcbiAgICAgICAgY29kZTogJ01ldGFMZWZ0JyxcbiAgICAgICAgdGV4dEFyZWE6IHRoaXMudGV4dEFyZWEsXG4gICAgICAgIGhhbmRsZU1vdXNlRG93bjogKCkgPT4ge1xuICAgICAgICAgIHRoaXMudGV4dEFyZWEudmFsdWUgKz0gJyc7XG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIEFsdExlZnQ6IG5ldyBLZXkoe1xuICAgICAgICB0ZXh0OiAnQWx0JyxcbiAgICAgICAgY29kZTogJ0FsdExlZnQnLFxuICAgICAgICBkYXJrOiB0cnVlLFxuICAgICAgICB0ZXh0QXJlYTogdGhpcy50ZXh0QXJlYSxcbiAgICAgICAgaGFuZGxlTW91c2VEb3duOiAoKSA9PiB7XG4gICAgICAgICAgdGhpcy50ZXh0QXJlYS52YWx1ZSArPSAnJztcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgU3BhY2U6IG5ldyBLZXkoe1xuICAgICAgICB0ZXh0OiAnJm1kYXNoOycsIHdpZHRoOiAnMzMwcHgnLCBjb2RlOiAnU3BhY2UnLCBkYXJrOiB0cnVlLCB0ZXh0QXJlYTogdGhpcy50ZXh0QXJlYSwgaGFuZGxlTW91c2VEb3duOiAoKSA9PiB7IHRoaXMudGV4dEFyZWEudmFsdWUgKz0gJyAnOyB9LFxuICAgICAgfSksXG4gICAgICBBbHRSaWdodDogbmV3IEtleSh7XG4gICAgICAgIHRleHQ6ICdBbHQnLFxuICAgICAgICBjb2RlOiAnQWx0UmlnaHQnLFxuICAgICAgICBkYXJrOiB0cnVlLFxuICAgICAgICB0ZXh0QXJlYTogdGhpcy50ZXh0QXJlYSxcbiAgICAgICAgaGFuZGxlTW91c2VEb3duOiAoKSA9PiB7XG4gICAgICAgICAgdGhpcy50ZXh0QXJlYS52YWx1ZSArPSAnJztcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgQXJyb3dMZWZ0OiBuZXcgS2V5KHtcbiAgICAgICAgdGV4dDogJyYjOTY2ODsnLFxuICAgICAgICBjb2RlOiAnQXJyb3dMZWZ0JyxcbiAgICAgICAgZGFyazogdHJ1ZSxcbiAgICAgICAgdGV4dEFyZWE6IHRoaXMudGV4dEFyZWEsXG4gICAgICAgIGhhbmRsZU1vdXNlRG93bjogKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLnRleHRBcmVhLnNlbGVjdGlvblN0YXJ0ID4gMCkge1xuICAgICAgICAgICAgdGhpcy50ZXh0QXJlYS5zZWxlY3Rpb25TdGFydCArPSAtMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy50ZXh0QXJlYS5zZWxlY3Rpb25FbmQgPSB0aGlzLnRleHRBcmVhLnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBBcnJvd0Rvd246IG5ldyBLZXkoe1xuICAgICAgICB0ZXh0OiAnJiM5NjYwOycsXG4gICAgICAgIGNvZGU6ICdBcnJvd0Rvd24nLFxuICAgICAgICBkYXJrOiB0cnVlLFxuICAgICAgICB0ZXh0QXJlYTogdGhpcy50ZXh0QXJlYSxcbiAgICAgICAgaGFuZGxlTW91c2VEb3duOiAoKSA9PiB7XG4gICAgICAgICAgaW5zZXJ0SW5UZXh0YXJlYSh0aGlzLnRleHRBcmVhLCAn4pa8Jyk7XG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIEFycm93UmlnaHQ6IG5ldyBLZXkoe1xuICAgICAgICB0ZXh0OiAnJiM5NjU4OycsXG4gICAgICAgIGNvZGU6ICdBcnJvd1JpZ2h0JyxcbiAgICAgICAgZGFyazogdHJ1ZSxcbiAgICAgICAgdGV4dEFyZWE6IHRoaXMudGV4dEFyZWEsXG4gICAgICAgIGhhbmRsZU1vdXNlRG93bjogKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLnRleHRBcmVhLnNlbGVjdGlvblN0YXJ0IDwgdGhpcy50ZXh0QXJlYS52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMudGV4dEFyZWEuc2VsZWN0aW9uU3RhcnQgKz0gKzE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMudGV4dEFyZWEuc2VsZWN0aW9uRW5kID0gdGhpcy50ZXh0QXJlYS5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgQ29udHJvbFJpZ2h0OiBuZXcgS2V5KHtcbiAgICAgICAgdGV4dDogJ0N0cmwnLFxuICAgICAgICBjb2RlOiAnQ29udHJvbFJpZ2h0JyxcbiAgICAgICAgZGFyazogdHJ1ZSxcbiAgICAgICAgdGV4dEFyZWE6IHRoaXMudGV4dEFyZWEsXG4gICAgICAgIGhhbmRsZU1vdXNlRG93bjogKCkgPT4ge1xuICAgICAgICAgIHRoaXMudGV4dEFyZWEudmFsdWUgKz0gJyc7XG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICB9O1xuXG4gICAgY29uc3QgRElHSVRTID0gW0tFWVMuRGlnaXQxLCBLRVlTLkRpZ2l0MiwgS0VZUy5EaWdpdDMsIEtFWVMuRGlnaXQ0LCBLRVlTLkRpZ2l0NSxcbiAgICAgIEtFWVMuRGlnaXQ2LCBLRVlTLkRpZ2l0NywgS0VZUy5EaWdpdDgsIEtFWVMuRGlnaXQ5LCBLRVlTLkRpZ2l0MF07XG4gICAgY29uc3QgTEVURVJTX1IxID0gW0tFWVMuS2V5USwgS0VZUy5LZXlXLCBLRVlTLktleUUsIEtFWVMuS2V5UiwgS0VZUy5LZXlULCBLRVlTLktleVksXG4gICAgICBLRVlTLktleVUsIEtFWVMuS2V5SSwgS0VZUy5LZXlPLCBLRVlTLktleVAsIEtFWVMuQnJhY2tldExlZnQsIEtFWVMuQnJhY2tldFJpZ2h0XTtcbiAgICBjb25zdCBMRVRFUlNfUjIgPSBbS0VZUy5LZXlBLCBLRVlTLktleVMsIEtFWVMuS2V5RCwgS0VZUy5LZXlGLCBLRVlTLktleUcsIEtFWVMuS2V5SCxcbiAgICAgIEtFWVMuS2V5SiwgS0VZUy5LZXlLLCBLRVlTLktleUwsIEtFWVMuU2VtaWNvbG9uLCBLRVlTLlF1b3RlXTtcbiAgICBjb25zdCBMRVRFUlNfUjMgPSBbS0VZUy5LZXlaLCBLRVlTLktleVgsIEtFWVMuS2V5QywgS0VZUy5LZXlWLCBLRVlTLktleUIsIEtFWVMuS2V5TixcbiAgICAgIEtFWVMuS2V5TSwgS0VZUy5Db21tYSwgS0VZUy5QZXJpb2QsIEtFWVMuU2xhc2hdO1xuXG4gICAgdGhpcy5rZXlzTGF5b3V0ID0gW1xuICAgICAgW0tFWVMuQmFja3F1b3RlLCAuLi5ESUdJVFMsIEtFWVMuTWludXMsIEtFWVMuRXF1YWwsIEtFWVMuQmFja3NwYWNlXSxcbiAgICAgIFtLRVlTLlRhYiwgLi4uTEVURVJTX1IxLCBLRVlTLkJhY2tzbGFzaCwgS0VZUy5EZWxldGVdLFxuICAgICAgW0tFWVMuQ2Fwc0xvY2ssIC4uLkxFVEVSU19SMiwgS0VZUy5FbnRlcl0sXG4gICAgICBbS0VZUy5TaGlmdExlZnQsIC4uLkxFVEVSU19SMywgS0VZUy5BcnJvd1VwLCBLRVlTLlNoaWZ0UmlnaHRdLFxuICAgICAgW0tFWVMuQ29udHJvbExlZnQsIEtFWVMuTWV0YUxlZnQsIEtFWVMuQWx0TGVmdCwgS0VZUy5TcGFjZSxcbiAgICAgICAgS0VZUy5BbHRSaWdodCwgS0VZUy5BcnJvd0xlZnQsIEtFWVMuQXJyb3dEb3duLCBLRVlTLkFycm93UmlnaHQsIEtFWVMuQ29udHJvbFJpZ2h0XSxcbiAgICBdO1xuXG4gICAgdGhpcy5rZXlzTGF5b3V0LmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgY29uc3Qgcm93Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICByb3dDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG4gICAgICByb3cuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIHJvd0NvbnRhaW5lci5hcHBlbmRDaGlsZChrZXkucmVuZGVyKHRoaXMubGFuZykpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQocm93Q29udGFpbmVyKTtcbiAgICB9KTtcblxuICAgIHRoaXMudGV4dEFyZWEuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgaWYgKEtFWVNbZXZlbnQuY29kZV0pIHtcbiAgICAgICAgS0VZU1tldmVudC5jb2RlXS5zZXRIaWdobGlnaHRlZCh0cnVlKTtcblxuICAgICAgICBpZiAoS0VZU1tldmVudC5jb2RlXS5jb2RlID09PSAnVGFiJykge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy50ZXh0QXJlYS52YWx1ZSArPSAnICAgICc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEtFWVNbZXZlbnQuY29kZV0uY29kZSA9PT0gJ0NhcHNMb2NrJyAmJiAhZXZlbnQucmVwZWF0KSB7XG4gICAgICAgICAgaWYgKCF0aGlzLmNhcHNQcmVzc2VkKSB7XG4gICAgICAgICAgICB0aGlzLmNhcHMgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jYXBzUHJlc3NlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNhcHMgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuY2Fwc1ByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChLRVlTW2V2ZW50LmNvZGVdLmNvZGUgPT09ICdTaGlmdExlZnQnIHx8IEtFWVNbZXZlbnQuY29kZV0uY29kZSA9PT0gJ1NoaWZ0UmlnaHQnKSB7XG4gICAgICAgICAgdGhpcy5zaGlmdCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQuY3RybEtleSAmJiBldmVudC5hbHRLZXkpIHtcbiAgICAgICAgICBpZiAodGhpcy5sYW5nID09PSAnZW4nKSB7XG4gICAgICAgICAgICB0aGlzLmxhbmcgPSAncnUnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxhbmcgPSAnZW4nO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGFuZycsIHRoaXMubGFuZyk7XG4gICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoS0VZU1tldmVudC5jb2RlXS5jb2RlID09PSAnQXJyb3dVcCcpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGluc2VydEluVGV4dGFyZWEodGhpcy50ZXh0QXJlYSwgJ+KWsicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChLRVlTW2V2ZW50LmNvZGVdLmNvZGUgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBpbnNlcnRJblRleHRhcmVhKHRoaXMudGV4dEFyZWEsICfilrwnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy50ZXh0QXJlYS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4ge1xuICAgICAgaWYgKEtFWVNbZXZlbnQuY29kZV0pIHtcbiAgICAgICAgS0VZU1tldmVudC5jb2RlXS5zZXRIaWdobGlnaHRlZChmYWxzZSk7XG4gICAgICAgIGlmIChLRVlTW2V2ZW50LmNvZGVdLmNvZGUgPT09ICdTaGlmdExlZnQnIHx8IEtFWVNbZXZlbnQuY29kZV0uY29kZSA9PT0gJ1NoaWZ0UmlnaHQnKSB7XG4gICAgICAgICAgdGhpcy5zaGlmdCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEtFWVNbZXZlbnQuY29kZV0uY29kZSA9PT0gJ0NhcHNMb2NrJyAmJiB0aGlzLmNhcHNQcmVzc2VkKSB7XG4gICAgICAgICAgS0VZU1tldmVudC5jb2RlXS5zZXRIaWdobGlnaHRlZCh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMua2V5c0xheW91dC5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgIHJvdy5mb3JFYWNoKChrZXkpID0+IGtleS5yZW5kZXIodGhpcy5sYW5nLCB0aGlzLnNoaWZ0LCB0aGlzLmNhcHMpKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgS2V5Ym9hcmQgfSBmcm9tICcuL2tleWJvYXJkJztcblxuZXhwb3J0IGNvbnN0IHJlbmRlck1haW5QYWdlID0gKGVsZW1lbnQpID0+IHtcbiAgY29uc3QgZGl2Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGhlYWRlcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBjb25zdCB0ZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIGNvbnN0IGRpdktleWJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGRpdlRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgdGV4dE9TID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCB0ZXh0TGFuZ1N3aXRjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICBkaXZDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncGFnZS1jb250YWluZXInKTtcblxuICBoZWFkZXIxLmlubmVyVGV4dCA9ICfQktC40YDRgtGD0LDQu9GM0L3QsNGPINCa0LvQsNCy0LjQsNGC0YPRgNCwJztcbiAgaGVhZGVyMS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICBkaXZDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyMSk7XG5cbiAgdGV4dEFyZWEuY2xhc3NMaXN0LmFkZCgndGV4dGFyZWEnKTtcbiAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKCdhdXRvZm9jdXMnLCAnJyk7XG4gIHRleHRBcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgKCkgPT4gdGV4dEFyZWEuZm9jdXMoKSk7XG4gIGRpdkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0QXJlYSk7XG5cbiAgZGl2S2V5Ym9hcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgna2V5Ym9hcmQtY29udGFpbmVyJyk7XG4gIGNvbnN0IGtleWJvYXJkID0gbmV3IEtleWJvYXJkKGRpdktleWJvYXJkQ29udGFpbmVyLCB0ZXh0QXJlYSk7XG4gIGtleWJvYXJkLnJlbmRlcignZW4nKTtcbiAgZGl2Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpdktleWJvYXJkQ29udGFpbmVyKTtcblxuICBkaXZUZXh0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RleHQtY29udGFpbmVyJyk7XG4gIHRleHRPUy5pbm5lclRleHQgPSAn0JrQu9Cw0LLQuNCw0YLRg9GA0LAg0YHQvtC30LTQsNC90LAg0LIg0L7Qv9C10YDQsNGG0LjQvtC90L3QvtC5INGB0LjRgdGC0LXQvNC1IFdpbmRvd3MnO1xuICB0ZXh0TGFuZ1N3aXRjaC5pbm5lclRleHQgPSAn0JTQu9GPINC/0LXRgNC10LrQu9GO0YfQtdC90LjRjyDRj9C30YvQutCwINC60L7QvNCx0LjQvdCw0YbQuNGPOiDQu9C10LLRi2UgY3RybCArIGFsdCc7XG4gIGRpdlRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dE9TKTtcbiAgZGl2VGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0TGFuZ1N3aXRjaCk7XG4gIGRpdkNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXZUZXh0Q29udGFpbmVyKTtcblxuICBlbGVtZW50LmFwcGVuZENoaWxkKGRpdkNvbnRhaW5lcik7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9