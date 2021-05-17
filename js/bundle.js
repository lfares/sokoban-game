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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Element {\n    constructor(value, position) {\n        this.value = value;\n        this.position = position;\n        this.imgSrc = this.parseValueToImgSrc(this.value);\n        this.name = this.parseValueToName(this.value);\n    }\n\n    /**\n     * Gets and Sets\n     */\n    getX() {\n        return this.position[0];\n    }\n\n    getY() {\n        return this.position[1];\n    }\n\n    setElement(elementName) {\n        this.name = elementName;\n        this.value = this.parseNameToValue(this.name);\n        this.imgSrc = this.parseValueToImgSrc(this.value);\n    }\n\n    /**\n     * \n     *  @param {string} value retrieved from level's grid \n     *  @returns {string} imgSrc  \n     */\n    parseValueToImgSrc(value) {\n        switch (value) {\n            case '#':\n              return './img/wall.png';\n            case '@':\n              return './img/character.png';\n            case '&':\n              return './img/character.png'; // character on goal\n            case '$':\n              return './img/box.png';\n            case '*':\n              return './img/boxOnGoal.png';\n            case '.':\n              return './img/goal.png';\n            case ' ':\n              return 'empty';\n        }\n    }\n\n    parseValueToName(value) {\n        switch (value) {\n            case '#':\n              return 'wall';\n            case '@':\n              return 'character';\n            case '&':\n              return 'characterOnGoal'; \n            case '$':\n              return 'box';\n            case '*':\n              return 'boxOnGoal';\n            case '.':\n              return 'goal';\n            case ' ':\n              return 'empty';\n        }\n    }\n\n    parseNameToValue(name) {\n      switch (name) {\n          case 'wall':\n            return '#';\n          case 'character':\n            return '@';\n          case 'characterOnGoal':\n            return '&'; \n          case 'box':\n            return '$';\n          case 'boxOnGoal':\n            return '*';\n          case 'goal':\n            return '.';\n          case 'empty':\n            return ' ';\n      }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Element);\n\n//# sourceURL=webpack://sokoban-game/./js/modules/element.js?");

/***/ }),

/***/ "./js/modules/level.js":
/*!*****************************!*\
  !*** ./js/modules/level.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ \"./js/modules/element.js\");\n\n\nclass Level {\n    constructor(canvas, context) {\n        this.canvas = canvas;\n        this.context = context;\n\n        this.movements = 0;\n        this.resets = 0;\n        this.time = 0;\n        this.grid = [];\n        this.populateGridWithElements();\n    }\n\n    /**\n     * Gets and Sets\n     */\n    getElementByPosition(position) {\n        return this.grid[position[0]][position[1]];\n    }\n\n    setElementByPosition(position, elementName) {\n        this.grid[position[0]][position[1]].setElement(elementName);\n    }\n\n    setCharacterPosition(position) {\n        this.characterPosition = position;\n    }\n\n    populateGridWithElements() {\n        const levelMatrix = [\n            ['#', '#', '#', '#', '#', '#', '#'], \n            ['#', '.', '@', ' ', '#', ' ', '#'], \n            ['#', '$', '*', ' ', '$', ' ', '#'], \n            ['#', ' ', ' ', ' ', '$', ' ', '#'], \n            ['#', ' ', '.', '.', ' ', ' ', '#'], \n            ['#', ' ', ' ', '*', ' ', ' ', '#'], \n            ['#', '#', '#', '#', '#', '#', '#']\n        ];\n        // const levelMatrix = getLevelMatrixById(id); - to be done when there are more levels\n        for(let i = 0; i < levelMatrix[0].length; i++) {\n            const arrayAuxiliar = [];\n            for(let j = 0; j < levelMatrix.length; j++) {\n                if (levelMatrix[i][j] == '@') {\n                    this.characterPosition = [i, j];\n                }\n                arrayAuxiliar[j] = new _element__WEBPACK_IMPORTED_MODULE_0__.default(levelMatrix[i][j], [i, j]);\n            }\n            this.grid.push(arrayAuxiliar);\n        }\n    }\n\n    drawLevel() {\n        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n        for(let i = 0; i < this.grid[0].length; i++) {\n            for(let j = 0; j < this.grid.length; j++) {\n                let currElement = this.grid[i][j];\n                if (currElement.imgSrc != 'empty') {\n                    this.drawElement(currElement, this.context);\n                }\n            }\n        }\n    }\n\n    drawElement(element, context) {\n        let elementImg = new Image();\n        elementImg.src = element.imgSrc;\n        elementImg.onload = function() {\n            context.drawImage(elementImg, element.getY() * 50, element.getX() * 50, 50, 50);\n        };\n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Level);\n\n//# sourceURL=webpack://sokoban-game/./js/modules/level.js?");

/***/ }),

/***/ "./js/modules/main.js":
/*!****************************!*\
  !*** ./js/modules/main.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level */ \"./js/modules/level.js\");\n/* harmony import */ var _movement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movement */ \"./js/modules/movement.js\");\n\n\n\nconst canvas = document.getElementById('canvas-main');\nconst context = canvas.getContext('2d');\n\nvar currLevel = new _level__WEBPACK_IMPORTED_MODULE_0__.default(canvas, context);\ncanvas.width = currLevel.grid[0].length * 50;\ncanvas.height = currLevel.grid.length * 50;\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  currLevel.drawLevel();\n});\n\nvar movementClass = new _movement__WEBPACK_IMPORTED_MODULE_1__.default(currLevel);\nvar handleKeyDownFunction = movementClass.checkForMovement.bind(movementClass);\ndocument.addEventListener('keydown', handleKeyDownFunction);\n\n\n//# sourceURL=webpack://sokoban-game/./js/modules/main.js?");

/***/ }),

/***/ "./js/modules/movement.js":
/*!********************************!*\
  !*** ./js/modules/movement.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Movement {\n    constructor(level) {\n        this.possibleMovements = {\n            up: [-1, 0],\n            down: [1, 0],\n            left: [0, -1],\n            right: [0, 1]\n        };\n        this.level = level;\n    }\n\n    checkForMovement(e) {\n        e.preventDefault();\n\n        switch (e.key) {\n            case 'ArrowLeft':\n                this.move('left');\n                break;\n            case 'ArrowDown':\n                this.move('down');\n                break;\n            case 'ArrowRight':\n                this.move('right');\n                break;\n            case 'ArrowUp':\n                this.move('up');\n                break;\n            default:\n                return;\n        }\n\n        this.level.drawLevel();\n    }\n\n    move(direction) {\n        const currPosition = this.level.characterPosition;\n        const newPosition = this.getNewCoordinates(currPosition, direction);\n        const newPositionElement = this.level.getElementByPosition(newPosition);\n        if (this.isPositionAvailable(newPositionElement)) {\n            this.moveCharacter(currPosition, newPosition);\n        } else if (this.isPositionBox(newPositionElement)) {\n            const newBoxPosition = this.getNewCoordinates(newPosition, direction);\n            const newBoxPositionElement = this.level.getElementByPosition(newBoxPosition);\n            if (this.isPositionAvailable(newBoxPositionElement)) {\n                console.log(\"passou aqui2\");\n                this.moveCharacter(currPosition, newPosition);\n                this.pushBox(newBoxPosition);\n            }\n        }\n        this.level.movements++;\n    }\n      \n    getNewCoordinates(currPosition, direction) {\n        return [currPosition[0] + this.possibleMovements[direction][0],\n                currPosition[1] + this.possibleMovements[direction][1]];\n    }\n\n    isPositionAvailable(newPositionElement) {\n        return newPositionElement.name == 'empty' || newPositionElement.name == 'goal';\n    }\n\n    isPositionBox(newPositionElement) {\n        return newPositionElement.name == 'box' || newPositionElement.name == 'boxOnGoal';\n    }\n\n    moveCharacter(currPosition, newPosition) {\n        // Set current position\n        const currPositionElement = this.level.getElementByPosition(currPosition);\n        if (currPositionElement.name == 'characterOnGoal') { \n            this.level.setElementByPosition(currPosition, 'goal');\n        } else {\n            this.level.setElementByPosition(currPosition, 'empty');\n        }\n        // Set new position\n        const newPositionElement = this.level.getElementByPosition(newPosition); \n        if (newPositionElement.name == 'goal' || newPositionElement.name == 'boxOnGoal') {\n            this.level.setElementByPosition(newPosition, 'characterOnGoal');\n        } else {\n            this.level.setElementByPosition(newPosition, 'character');\n        }\n        this.level.setCharacterPosition(newPosition);\n    }\n\n    pushBox(newPosition) {\n        const newPositionElement = this.level.getElementByPosition(newPosition); \n        if (newPositionElement.name == 'goal') {\n            this.level.setElementByPosition(newPosition, 'boxOnGoal');\n        } else {\n            this.level.setElementByPosition(newPosition, 'box');\n        }\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Movement);\n\n//# sourceURL=webpack://sokoban-game/./js/modules/movement.js?");

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