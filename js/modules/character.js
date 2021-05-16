import Element from './element'

class Character extends Element {
    constructor() {
        this.possibleMovements = {
            up: [-1, 0],
            down: [1, 0],
            left: [0, -1],
            right: [0, 1]
        };
    }

    move(level, direction) {
        let newPositionCoordinates = getNewCoordinates(this.position, direction);
        let newPositionElement = level.getElementByPosition(newPositionCoordinates[0], newPositionCoordinates[1]);
        makeMovement();
    }
      
    getNewCoordinates(currPosition, direction) {
        return [currPosition[0] + possibleMovements[direction][0],
                currPosition[1] + possibleMovements[direction][1]];
    }
      
    makeMovement() {
        
    }
}

export default Character;