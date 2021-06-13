import Element from './element';
import Movement from './movement';

class Level {
    constructor(id, levelMatrix) {
        this.levelMatrix = levelMatrix;
        this.id = id;

        this.boxOutOfGoal = 0;
        this.movements = 0;
        this.grid = [];
        this.canvas = document.getElementById('canvas-main');
        this.context = this.canvas.getContext('2d');

        this.populateGridWithElements();
        this.canvas.width = this.levelMatrix[0].length * 50;
        this.canvas.height = this.levelMatrix.length * 50;
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
        let elementsSheetImg = new Image();
        elementsSheetImg.src = './images/elementSheet.png';
        elementsSheetImg.onload = () => {
            this.drawElements(elementsSheetImg);
        };
    }

    drawElements(elementsSheetImg) {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for(let i = 0; i < this.grid.length; i++) {
            for(let j = 0; j < this.grid[0].length; j++) {
                let currElement = this.grid[i][j];
                if (currElement.imgSrc != 'empty') {
                    this.context.drawImage(elementsSheetImg, currElement.imgSrcPosition.x, currElement.imgSrcPosition.y,
                        64, 64, j * 50, i * 50, 50, 50);
                }
            }
        }
        this.updateMoveCount();
    }

    updateMoveCount() {
        const counter = document.getElementById('move-counter');
        counter.innerHTML = this.movements;
    }

    displayWin() {
        setTimeout(() => {
            const winModal = document.getElementById('win-div');
            winModal.className = 'active';
            document.removeEventListener('keydown', this.handleKeyDownFunction);
        }, 100);
    }

    displayEndGame() {
        const endGameModal = document.getElementById('end-levels-div');
        endGameModal.className = 'active';
        document.removeEventListener('keydown', this.handleKeyDownFunction);
    }

    resetLevel() {
        this.movementClass.level = null;
        this.movementClass = null;
    }
}

export default Level;