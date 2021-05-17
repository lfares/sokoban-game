import Element from './element';
import Movement from './movement';

class Level {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.context = context;

        this.boxOutOfGoal = 0;
        this.movements = 0;
        this.resets = 0;
        this.time = 0;
        this.grid = [];
        this.populateGridWithElements();
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
        const levelMatrix = [
            ['#', '#', '#', '#', '#', '#', '#'], 
            ['#', '.', '@', ' ', '#', ' ', '#'], 
            ['#', '$', '*', ' ', '$', ' ', '#'], 
            ['#', ' ', ' ', ' ', '$', ' ', '#'], 
            ['#', ' ', '.', '.', ' ', ' ', '#'], 
            ['#', ' ', ' ', '*', ' ', ' ', '#'], 
            ['#', '#', '#', '#', '#', '#', '#']
        ];
        // const levelMatrix = getLevelMatrixById(id); - to be done when there are more levels
        for(let i = 0; i < levelMatrix[0].length; i++) {
            const arrayAuxiliar = [];
            for(let j = 0; j < levelMatrix.length; j++) {
                if (levelMatrix[i][j] == '@') {
                    this.characterPosition = [i, j];
                } else if (levelMatrix[i][j] == '$') {
                    this.boxOutOfGoal++;
                }
                arrayAuxiliar[j] = new Element(levelMatrix[i][j], [i, j]);
            }
            this.grid.push(arrayAuxiliar);
        }
    }

    startLevel() {
        this.drawLevel();
        const movementClass = new Movement(this);
        this.handleKeyDownFunction = movementClass.checkForMovement.bind(movementClass);
        document.addEventListener('keydown', this.handleKeyDownFunction);
    }

    drawLevel() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for(let i = 0; i < this.grid[0].length; i++) {
            for(let j = 0; j < this.grid.length; j++) {
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
            context.drawImage(elementImg, element.getY() * 50, element.getX() * 50, 50, 50);
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

}

export default Level;