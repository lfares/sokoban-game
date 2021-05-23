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

/***/ "./public/javascripts/modules/element.js":
/*!***********************************************!*\
  !*** ./public/javascripts/modules/element.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Element {\n    constructor(value, position) {\n        this.value = value;\n        this.position = position;\n        this.imgSrcPosition = this.parseValueToImgSrcPosition(this.value);\n        this.name = this.parseValueToName(this.value);\n    }\n\n    /**\n     * Gets and Sets\n     */\n    getX() {\n        return this.position[0];\n    }\n\n    getY() {\n        return this.position[1];\n    }\n\n    setElement(elementName) {\n        this.name = elementName;\n        this.value = this.parseNameToValue(this.name);\n        this.imgSrcPosition = this.parseValueToImgSrcPosition(this.value);\n    }\n\n    /**\n     * \n     *  @param {string} value retrieved from level's grid \n     *  @returns {string} imgSrc  \n     */\n    parseValueToImgSrcPosition(value) {\n        switch (value) {\n            case '#':\n              return {x: 448, y: 384};\n            case '@':\n              return {x: 0, y: 256};\n            case '&':\n              return {x: 0, y: 256}; \n            case '$':\n              return {x: 384, y: 0};\n            case '*':\n              return {x: 576, y: 0};\n            case '.':\n              return {x: 768, y: 256};\n            case ' ':\n              return 'empty';\n        }\n    }\n\n    parseValueToName(value) {\n        switch (value) {\n            case '#':\n              return 'wall';\n            case '@':\n              return 'character';\n            case '&':\n              return 'characterOnGoal'; \n            case '$':\n              return 'box';\n            case '*':\n              return 'boxOnGoal';\n            case '.':\n              return 'goal';\n            case ' ':\n              return 'empty';\n        }\n    }\n\n    parseNameToValue(name) {\n      switch (name) {\n          case 'wall':\n            return '#';\n          case 'character':\n            return '@';\n          case 'characterOnGoal':\n            return '&'; \n          case 'box':\n            return '$';\n          case 'boxOnGoal':\n            return '*';\n          case 'goal':\n            return '.';\n          case 'empty':\n            return ' ';\n      }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Element);\n\n//# sourceURL=webpack://sokoban2.0/./public/javascripts/modules/element.js?");

/***/ }),

/***/ "./public/javascripts/modules/game.js":
/*!********************************************!*\
  !*** ./public/javascripts/modules/game.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level */ \"./public/javascripts/modules/level.js\");\n\n\nclass Game {\n    constructor(levels, player) {\n        this.levels = levels;\n        this.player = player;\n        this.currentLevelId = 1;\n        this.time = window.time;\n    }\n\n    startGame() {\n        clearInterval(this.time);\n        this.startTimer();\n\n        this.selectNewLevel();\n\n        this.addLevelResetListener();\n        this.addNextLevelListener();\n        this.addEndGameListener();\n    }\n\n    selectNewLevel() {\n        this.currLevel = new _level__WEBPACK_IMPORTED_MODULE_0__.default(this.currentLevelId, this.levels[this.currentLevelId.toString()]);\n        // Start time of level for player stats if this is not a reset\n        if (this.player.timeByLevel[this.currentLevelId][0] == null) {\n            this.player.timeByLevel[this.currentLevelId][0] = this.time;\n        }\n\n        this.currLevel.startLevel();\n    }\n\n    addNextLevelListener() {\n        const nextLevelEvent = document.getElementById('next-level-button');\n        nextLevelEvent.addEventListener('click', (e) => {\n            e.preventDefault();\n\n            this.updateFinalLevelPlayerStats();\n\n            this.currentLevelId++;\n            const winModal = document.getElementById('win-div');\n            winModal.className = 'hidden';\n            this.selectNewLevel();\n        });\n    }\n\n    addLevelResetListener() {\n        const nextLevelEvent = document.getElementById('reset-button');\n        nextLevelEvent.addEventListener('click', (e) => {\n            e.preventDefault();\n            this.player.resetsByLevel[this.currentLevelId]++;\n            this.currLevel.resetLevel();\n            this.selectNewLevel();\n        });\n    }\n\n    addEndGameListener() {\n        const endGameEvent = document.getElementById('end-div');\n        endGameEvent.addEventListener('mouseenter', (e) => {\n            e.preventDefault();\n            this.updateFinalLevelPlayerStats();\n        });\n    }\n\n    updateFinalLevelPlayerStats() {\n        this.player.movementsByLevel[this.currentLevelId] += this.currLevel.movements;\n        this.player.timeByLevel[this.currentLevelId][1] = this.time;\n        this.player.completedLevels++;\n        // this.player.savePlayerToJSON();\n        console.log(this.player);\n    }\n\n    startTimer() {\n        this.time = 0;\n        window.timer = setInterval(() => {\n            this.displayTime(this.time);\n            this.time += 1;\n        }, 1000);\n    }\n\n    displayTime() {\n        const minutes = Math.floor(this.time / 60);\n        const seconds = Math.floor(this.time % 60);\n        const minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`;\n        const secondsString = seconds < 10 ? `0${seconds}` : `${seconds}`;\n\n        const timer = document.getElementById('level-time');\n        timer.innerHTML = `${minutesString}:${secondsString}`;\n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n//# sourceURL=webpack://sokoban2.0/./public/javascripts/modules/game.js?");

/***/ }),

/***/ "./public/javascripts/modules/level.js":
/*!*********************************************!*\
  !*** ./public/javascripts/modules/level.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ \"./public/javascripts/modules/element.js\");\n/* harmony import */ var _movement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movement */ \"./public/javascripts/modules/movement.js\");\n\n\n\nclass Level {\n    constructor(id, levelMatrix) {\n        this.levelMatrix = levelMatrix;\n        this.id = id;\n\n        this.boxOutOfGoal = 0;\n        this.movements = 0;\n        this.grid = [];\n        this.canvas = document.getElementById('canvas-main');\n        this.context = this.canvas.getContext('2d');\n\n        this.populateGridWithElements();\n        this.canvas.width = this.levelMatrix[0].length * 64;\n        this.canvas.height = this.levelMatrix.length * 64;\n    }\n\n    /**\n     * Gets and Sets\n     */\n    getElementByPosition(position) {\n        return this.grid[position[0]][position[1]];\n    }\n\n    setElementByPosition(position, elementName) {\n        this.grid[position[0]][position[1]].setElement(elementName);\n    }\n\n    setCharacterPosition(position) {\n        this.characterPosition = position;\n    }\n\n    populateGridWithElements() {\n        for(let i = 0; i < this.levelMatrix.length; i++) {\n            const arrayAuxiliar = [];\n            for(let j = 0; j < this.levelMatrix[0].length; j++) {\n                if (this.levelMatrix[i][j] == '@') {\n                    this.characterPosition = [i, j];\n                } else if (this.levelMatrix[i][j] == '$') {\n                    this.boxOutOfGoal++;\n                }\n                arrayAuxiliar[j] = new _element__WEBPACK_IMPORTED_MODULE_0__.default(this.levelMatrix[i][j], [i, j]);\n            }\n            this.grid.push(arrayAuxiliar);\n        }\n    }\n\n    startLevel() {\n        const levelIdShow = document.getElementById('level-id');\n        levelIdShow.innerHTML = this.id;\n        this.drawLevel();\n        this.movementClass = new _movement__WEBPACK_IMPORTED_MODULE_1__.default(this);\n        this.handleKeyDownFunction = this.movementClass.checkForMovement.bind(this.movementClass);\n        document.addEventListener('keydown', this.handleKeyDownFunction);\n    }\n\n    drawLevel() {\n        let elementsSheetImg = new Image();\n        elementsSheetImg.src = './images/elementSheet.png';\n        elementsSheetImg.onload = () => {\n            this.drawElements(elementsSheetImg);\n        };\n    }\n\n    drawElements(elementsSheetImg) {\n        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n        for(let i = 0; i < this.grid.length; i++) {\n            for(let j = 0; j < this.grid[0].length; j++) {\n                let currElement = this.grid[i][j];\n                if (currElement.imgSrc != 'empty') {\n                    this.context.drawImage(elementsSheetImg, currElement.imgSrcPosition.x, currElement.imgSrcPosition.y,\n                        64, 64, j * 64, i * 64, 64, 64);\n                }\n            }\n        }\n        this.updateMoveCount();\n    }\n\n    updateMoveCount() {\n        const counter = document.getElementById('move-counter');\n        counter.innerHTML = this.movements;\n    }\n\n    displayWin() {\n        const winModal = document.getElementById('win-div');\n        winModal.className = 'active';\n        document.removeEventListener('keydown', this.handleKeyDownFunction);\n    }\n\n    displayEndGame() {\n        const endGameModal = document.getElementById('end-div');\n        endGameModal.className = 'active';\n        document.removeEventListener('keydown', this.handleKeyDownFunction);\n    }\n\n    resetLevel() {\n        this.movementClass.level = null;\n        this.movementClass = null;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Level);\n\n//# sourceURL=webpack://sokoban2.0/./public/javascripts/modules/level.js?");

/***/ }),

/***/ "./public/javascripts/modules/levels.json":
/*!************************************************!*\
  !*** ./public/javascripts/modules/levels.json ***!
  \************************************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"1\":[[\"#\",\"#\",\"#\",\"#\",\"#\"],[\"#\",\" \",\" \",\".\",\"#\"],[\"#\",\" \",\" \",\"#\",\"#\"],[\"#\",\" \",\" \",\"#\",\"#\"],[\"#\",\"#\",\"$\",\"#\",\"#\"],[\"#\",\"#\",\"@\",\"#\",\"#\"],[\"#\",\"#\",\"#\",\"#\",\"#\"]],\"2\":[[\"#\",\"#\",\"#\",\"#\",\"#\",\"#\",\"#\"],[\"#\",\" \",\" \",\" \",\" \",\" \",\"#\"],[\"#\",\" \",\" \",\" \",\" \",\" \",\"#\"],[\"#\",\" \",\".\",\"#\",\" \",\" \",\"#\"],[\"#\",\"#\",\"#\",\"#\",\" \",\" \",\"#\"],[\"#\",\" \",\"@\",\"#\",\" \",\" \",\"#\"],[\"#\",\" \",\"$\",\" \",\" \",\" \",\"#\"],[\"#\",\" \",\" \",\" \",\" \",\" \",\"#\"],[\"#\",\"#\",\"#\",\"#\",\"#\",\"#\",\"#\"]],\"3\":[[\"#\",\"#\",\"#\",\"#\",\"#\",\"#\",\"#\",\"#\"],[\"#\",\"@\",\"$\",\" \",\"$\",\".\",\".\",\"#\"],[\"#\",\" \",\" \",\" \",\" \",\" \",\" \",\"#\"],[\"#\",\"#\",\"#\",\"#\",\"#\",\"#\",\"#\",\"#\"]],\"4\":[[\"#\",\"#\",\"#\",\"#\",\"#\",\"#\",\"#\"],[\"#\",\"#\",\"#\",\" \",\".\",\" \",\"#\"],[\"#\",\" \",\"$\",\" \",\" \",\".\",\"#\"],[\"#\",\" \",\"$\",\"#\",\" \",\" \",\"#\"],[\"#\",\" \",\"@\",\"#\",\"#\",\"#\",\"#\"],[\"#\",\"#\",\"#\",\"#\",\"#\",\"#\",\"#\"]],\"5\":[[\"#\",\"#\",\"#\",\"#\",\"#\",\"#\",\"#\",\"#\"],[\"#\",\"#\",\" \",\" \",\" \",\" \",\" \",\"#\"],[\"#\",\"#\",\" \",\".\",\"$\",\".\",\" \",\"#\"],[\"#\",\"#\",\" \",\"$\",\"@\",\"$\",\" \",\"#\"],[\"#\",\" \",\" \",\".\",\"$\",\".\",\" \",\"#\"],[\"#\",\" \",\" \",\" \",\" \",\" \",\" \",\"#\"],[\"#\",\"#\",\"#\",\"#\",\"#\",\"#\",\"#\",\"#\"]],\"6\":[[\"#\",\"#\",\"#\",\"#\",\"#\",\"#\",\"#\",\"#\",\"#\",\"#\",\"#\",\"#\"],[\"#\",\" \",\" \",\" \",\"#\",\"#\",\"#\",\"#\",\"#\",\"#\",\"#\",\"#\"],[\"#\",\" \",\" \",\"$\",\" \",\"#\",\"#\",\"#\",\"#\",\"#\",\"#\",\"#\"],[\"#\",\"#\",\" \",\" \",\"$\",\" \",\"#\",\"#\",\"#\",\"#\",\"#\",\"#\"],[\"#\",\"#\",\"#\",\" \",\" \",\"$\",\" \",\"#\",\".\",\".\",\".\",\"#\"],[\"#\",\"#\",\"#\",\"#\",\" \",\" \",\"$\",\"@\",\" \",\" \",\".\",\"#\"],[\"#\",\"#\",\"#\",\"#\",\"#\",\"#\",\"#\",\"#\",\" \",\" \",\" \",\"#\"],[\"#\",\"#\",\"#\",\"#\",\"#\",\"#\",\"#\",\"#\",\"#\",\"#\",\"#\",\"#\"]]}');\n\n//# sourceURL=webpack://sokoban2.0/./public/javascripts/modules/levels.json?");

/***/ }),

/***/ "./public/javascripts/modules/main.js":
/*!********************************************!*\
  !*** ./public/javascripts/modules/main.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./public/javascripts/modules/game.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./public/javascripts/modules/player.js\");\n\n\n\nconst levels = __webpack_require__(/*! ./levels.json */ \"./public/javascripts/modules/levels.json\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const playerModal = document.getElementById('player-div');\n  playerModal.className = 'active';\n  const startGame = document.getElementById('start-game');\n    startGame.addEventListener('click', (e) => {\n      e.preventDefault();\n      const player = new _player__WEBPACK_IMPORTED_MODULE_1__.default(document.getElementById('player-name').value);\n      playerModal.className = 'hidden';\n\n      const game = new _game__WEBPACK_IMPORTED_MODULE_0__.default(levels, player);\n      playerModal.className = 'hidden';\n      game.startGame();\n  });\n});\n\n\n\n\n\n\n//# sourceURL=webpack://sokoban2.0/./public/javascripts/modules/main.js?");

/***/ }),

/***/ "./public/javascripts/modules/movement.js":
/*!************************************************!*\
  !*** ./public/javascripts/modules/movement.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Movement {\n    constructor(level) {\n        this.possibleMovements = {\n            up: [-1, 0],\n            down: [1, 0],\n            left: [0, -1],\n            right: [0, 1]\n        };\n        this.level = level;\n    }\n\n    checkForMovement(e) {\n        e.preventDefault();\n\n        switch (e.key) {\n            case 'ArrowLeft':\n                this.move('left');\n                break;\n            case 'ArrowDown':\n                this.move('down');\n                break;\n            case 'ArrowRight':\n                this.move('right');\n                break;\n            case 'ArrowUp':\n                this.move('up');\n                break;\n            default:\n                return;\n        }\n\n        this.level.drawLevel();\n    }\n\n    move(direction) {\n        const currPosition = this.level.characterPosition;\n        const newPosition = this.getNewCoordinates(currPosition, direction);\n        const newPositionElement = this.level.getElementByPosition(newPosition);\n        if (this.isPositionAvailable(newPositionElement)) {\n            this.moveCharacter(currPosition, newPosition);\n        } else if (this.isPositionBox(newPositionElement)) {\n            const newBoxPosition = this.getNewCoordinates(newPosition, direction);\n            const newBoxPositionElement = this.level.getElementByPosition(newBoxPosition);\n            if (this.isPositionAvailable(newBoxPositionElement)) {\n                if (newPositionElement.name == 'boxOnGoal') {\n                    this.level.boxOutOfGoal++;\n                }\n                this.moveCharacter(currPosition, newPosition);\n                this.pushBox(newBoxPosition);\n            }\n        }\n        this.level.movements++;\n    }\n      \n    getNewCoordinates(currPosition, direction) {\n        return [currPosition[0] + this.possibleMovements[direction][0],\n                currPosition[1] + this.possibleMovements[direction][1]];\n    }\n\n    isPositionAvailable(newPositionElement) {\n        return newPositionElement.name == 'empty' || newPositionElement.name == 'goal';\n    }\n\n    isPositionBox(newPositionElement) {\n        return newPositionElement.name == 'box' || newPositionElement.name == 'boxOnGoal';\n    }\n\n    moveCharacter(currPosition, newPosition) {\n        // Set current position\n        const currPositionElement = this.level.getElementByPosition(currPosition);\n        if (currPositionElement.name == 'characterOnGoal') { \n            this.level.setElementByPosition(currPosition, 'goal');\n        } else {\n            this.level.setElementByPosition(currPosition, 'empty');\n        }\n        // Set new position\n        const newPositionElement = this.level.getElementByPosition(newPosition); \n        if (newPositionElement.name == 'goal' || newPositionElement.name == 'boxOnGoal') {\n            this.level.setElementByPosition(newPosition, 'characterOnGoal');\n        } else {\n            this.level.setElementByPosition(newPosition, 'character');\n        }\n        this.level.setCharacterPosition(newPosition);\n    }\n\n    pushBox(newPosition) {\n        const newPositionElement = this.level.getElementByPosition(newPosition); \n        if (newPositionElement.name == 'goal') {\n            this.level.setElementByPosition(newPosition, 'boxOnGoal');\n            this.level.boxOutOfGoal--;\n            this.checkForWin();\n        } else {\n            this.level.setElementByPosition(newPosition, 'box');\n        }\n    }\n\n    checkForWin() {\n        if (this.level.boxOutOfGoal == 0) {\n            if (this.level.id == \"6\") { // last level\n                this.level.displayEndGame();\n            }\n            this.level.displayWin();\n        }\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Movement);\n\n//# sourceURL=webpack://sokoban2.0/./public/javascripts/modules/movement.js?");

/***/ }),

/***/ "./public/javascripts/modules/player.js":
/*!**********************************************!*\
  !*** ./public/javascripts/modules/player.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Player {\n    constructor(name) {\n        this.name = name;\n        this.completedLevels = 0;\n        this.movementsByLevel = {\n            \"1\": 0,\n            \"2\": 0,\n            \"3\": 0,\n            \"4\": 0,\n            \"5\": 0,\n            \"6\": 0\n        };\n        this.resetsByLevel = {\n            \"1\": 0,\n            \"2\": 0,\n            \"3\": 0,\n            \"4\": 0,\n            \"5\": 0,\n            \"6\": 0\n        };\n        this.timeByLevel = {\n            \"1\": [null, null],\n            \"2\": [null, null],\n            \"3\": [null, null],\n            \"4\": [null, null],\n            \"5\": [null, null],\n            \"6\": [null, null]\n        };\n    }\n\n    // savePlayerToJSON() {\n    //     const fs = require('fs');\n    //     const path = `./players/${this.name}.json`;\n    //     const jsonString = JSON.stringify(this.getClassAttributesDict());\n    //     fs.writeFile(path, jsonString);\n    // }\n\n    // getClassAttributesDict() {\n    //     return {\n    //         \"name\": this.name,\n    //         \"completedLevels\": this.completedLevels,\n    //         \"movementsByLevel\": this.movementsByLevel,\n    //         \"resetsByLevel\": this.resetsByLevel,\n    //         \"timeByLevel\": this.timeByLevel\n    //     } \n    // }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://sokoban2.0/./public/javascripts/modules/player.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./public/javascripts/modules/main.js");
/******/ 	
/******/ })()
;