import Element from './element';
import Movement from './movement';

class Level {
    constructor(id, levelMatrix) {
        this.levelMatrix = levelMatrix;
        this.id = id;

        this.boxOutOfGoal = 0;
        this.movements = 0;
        this.resets = 0;
        this.time = 0;
        this.grid = [];
        this.canvas = document.getElementById('canvas-main');
        this.context = this.canvas.getContext('2d');

        this.populateGridWithElements();
        this.canvas.width = this.levelMatrix[0].length * 64;
        this.canvas.height = this.levelMatrix.length * 64;
    }

    /**
     * Gets and Sets
     */
    getElementByPosition(position) {
        return this.grid[position[0]][position[1]];
    }

    setElementByPosition(position, elementName) {
        this.grid[position[0]][position[1]].setElement(elementName);
    }

    setCharacterPosition(position) {
        this.characterPosition = position;
    }

    populateGridWithElements() {
        console.log(this.levelMatrix);
        for(let i = 0; i < this.levelMatrix.length; i++) {
            const arrayAuxiliar = [];
            for(let j = 0; j < this.levelMatrix[0].length; j++) {
                if (this.levelMatrix[i][j] == '@') {
                    this.characterPosition = [i, j];
                } else if (this.levelMatrix[i][j] == '$') {
                    this.boxOutOfGoal++;
                }
                arrayAuxiliar[j] = new Element(this.levelMatrix[i][j], [i, j]);
            }
            this.grid.push(arrayAuxiliar);
        }
    }

    startLevel() {
        const levelIdShow = document.getElementById('level-id');
        levelIdShow.innerHTML = this.id;
        this.drawLevel();
        this.movementClass = new Movement(this);
        this.handleKeyDownFunction = this.movementClass.checkForMovement.bind(this.movementClass);
        document.addEventListener('keydown', this.handleKeyDownFunction);
    }

    drawLevel() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for(let i = 0; i < this.grid.length; i++) {
            for(let j = 0; j < this.grid[0].length; j++) {
                let currElement = this.grid[i][j];
                if (currElement.imgSrc != 'empty') {
                    this.drawElement(currElement, this.context);
                }
            }
        }
        this.updateMoveCount();
    }

    drawElement(element, context) {
        let elementImg = new Image();
        elementImg.src = element.imgSrc;
        elementImg.onload = function() {
            context.drawImage(elementImg, element.getY() * 64, element.getX() * 64, 64, 64);
        };
    }

    updateMoveCount() {
        const counter = document.getElementById('move-counter');
        counter.innerHTML = this.movements;
    }

    displayWin() {
        const winModal = document.getElementById('win-div');
        winModal.className = 'active';
        document.removeEventListener('keydown', this.handleKeyDownFunction);
    }

    resetLevel() {
        this.movementClass.level = null;
        this.movementClass = null;
    }
}

export default Level;