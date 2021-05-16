import Element from './element';

class Level {
    constructor() {
        this.grid = [];
        this.movements = 0;
        this.resets = 0;
        this.time = 0;
        this.populateGridWithElements();
    }

    /**
     * Gets and Sets
     */
    getElementByPosition(position) {
        return grid[position[0]][position[1]];
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
                arrayAuxiliar[j] = new Element(levelMatrix[i][j], [i, j]);
            }
            this.grid.push(arrayAuxiliar);
        }
    }

    startLevel(context, canvas) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        for(let i = 0; i < this.grid[0].length; i++) {
            for(let j = 0; j < this.grid.length; j++) {
                let currElement = this.grid[i][j];
                if (currElement.imgSrc != 'empty') {
                    console.log("Gone to drawElement");
                    this.drawElement(currElement, context);
                }
            }
        }
    }

    drawElement(element, context) {
        let elementImg = new Image();
        elementImg.src = element.imgSrc;
        elementImg.onload = function() {
            context.drawImage(elementImg, element.getY() * 50, element.getX() * 50, 50, 50);
        };
    }
}

export default Level;