/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/element.js":
/*!*******************************!*\
  !*** ./js/modules/element.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Element {\n    constructor(value, position) {\n        this.value = value;\n        this.position = position;\n        this.imgSrc = this.parseValueToImgSrc(this.value);\n    }\n\n    /**\n     * Gets and Sets\n     */\n    getValue() {\n        return this.value;\n    }\n\n    setValue(value) {\n        this.value = value;\n    }\n\n    getX() {\n        return this.position[0];\n    }\n\n    getY() {\n        return this.position[1];\n    }\n\n    /**\n     * \n     *  @param {string} value retrieved from level's grid \n     *  @returns {string} imgSrc  \n     */\n    parseValueToImgSrc(value) {\n        switch (value) {\n            case '#':\n              return './img/wall.png';\n            case '@':\n              return './img/character.png';\n            case '$':\n              return './img/box.png';\n            case '*':\n              return './img/boxOnGoal.png';\n            case '.':\n              return './img/goal.png';\n            case ' ':\n              return 'empty';\n        }\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Element);\n\n//# sourceURL=webpack://sokoban-game/./js/modules/element.js?");

/***/ }),

/***/ "./js/modules/level.js":
/*!*****************************!*\
  !*** ./js/modules/level.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ \"./js/modules/element.js\");\n\n\nclass Level {\n    constructor() {\n        this.grid = [];\n        this.movements = 0;\n        this.resets = 0;\n        this.time = 0;\n        this.populateGridWithElements();\n    }\n\n    /**\n     * Gets and Sets\n     */\n    getElementByPosition(position) {\n        return grid[position[0]][position[1]];\n    }\n\n    populateGridWithElements() {\n        const levelMatrix = [\n            ['#', '#', '#', '#', '#', '#', '#'], \n            ['#', '.', '@', ' ', '#', ' ', '#'], \n            ['#', '$', '*', ' ', '$', ' ', '#'], \n            ['#', ' ', ' ', ' ', '$', ' ', '#'], \n            ['#', ' ', '.', '.', ' ', ' ', '#'], \n            ['#', ' ', ' ', '*', ' ', ' ', '#'], \n            ['#', '#', '#', '#', '#', '#', '#']\n        ];\n        // const levelMatrix = getLevelMatrixById(id); - to be done when there are more levels\n        for(let i = 0; i < levelMatrix[0].length; i++) {\n            const arrayAuxiliar = [];\n            for(let j = 0; j < levelMatrix.length; j++) {\n                arrayAuxiliar[j] = new _element__WEBPACK_IMPORTED_MODULE_0__.default(levelMatrix[i][j], [i, j]);\n            }\n            this.grid.push(arrayAuxiliar);\n        }\n    }\n\n    startLevel(context, canvas) {\n        context.clearRect(0, 0, canvas.width, canvas.height);\n        for(let i = 0; i < this.grid[0].length; i++) {\n            for(let j = 0; j < this.grid.length; j++) {\n                let currElement = this.grid[i][j];\n                if (currElement.imgSrc != 'empty') {\n                    console.log(\"Gone to drawElement\");\n                    this.drawElement(currElement, context);\n                }\n            }\n        }\n    }\n\n    drawElement(element, context) {\n        let elementImg = new Image();\n        elementImg.src = element.imgSrc;\n        elementImg.onload = function() {\n            context.drawImage(elementImg, element.getY() * 50, element.getX() * 50, 50, 50);\n        };\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Level);\n\n//# sourceURL=webpack://sokoban-game/./js/modules/level.js?");

/***/ }),

/***/ "./js/modules/main.js":
/*!****************************!*\
  !*** ./js/modules/main.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level */ \"./js/modules/level.js\");\n\n\nvar canvas = document.getElementById('canvas-main');\nvar context = canvas.getContext('2d');\n\nvar currLevel = new _level__WEBPACK_IMPORTED_MODULE_0__.default();\ncanvas.width = 7 * 50;\ncanvas.height = 7 * 50;\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  currLevel.startLevel(context, canvas);\n});\n\n\n//# sourceURL=webpack://sokoban-game/./js/modules/main.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/modules/main.js");
/******/ 	
/******/ })()
;