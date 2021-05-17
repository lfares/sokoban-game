class Movement {
    constructor(level) {
        this.possibleMovements = {
            up: [-1, 0],
            down: [1, 0],
            left: [0, -1],
            right: [0, 1]
        };
        this.level = level;
    }

    checkForMovement(e) {
        e.preventDefault();

        switch (e.key) {
            case 'ArrowLeft':
                this.move('left');
                break;
            case 'ArrowDown':
                this.move('down');
                break;
            case 'ArrowRight':
                this.move('right');
                break;
            case 'ArrowUp':
                this.move('up');
                break;
            default:
                return;
        }

        this.level.drawLevel();
    }

    move(direction) {
        const currPosition = this.level.characterPosition;
        const newPosition = this.getNewCoordinates(currPosition, direction);
        const newPositionElement = this.level.getElementByPosition(newPosition);
        if (this.isPositionAvailable(newPositionElement)) {
            this.moveCharacter(currPosition, newPosition);
        } else if (this.isPositionBox(newPositionElement)) {
            const newBoxPosition = this.getNewCoordinates(newPosition, direction);
            const newBoxPositionElement = this.level.getElementByPosition(newBoxPosition);
            if (this.isPositionAvailable(newBoxPositionElement)) {
                if (newPositionElement.name == 'boxOnGoal') {
                    this.level.boxOutOfGoal++;
                }
                this.moveCharacter(currPosition, newPosition);
                this.pushBox(newBoxPosition);
            }
        }
        this.level.movements++;
    }
      
    getNewCoordinates(currPosition, direction) {
        return [currPosition[0] + this.possibleMovements[direction][0],
                currPosition[1] + this.possibleMovements[direction][1]];
    }

    isPositionAvailable(newPositionElement) {
        return newPositionElement.name == 'empty' || newPositionElement.name == 'goal';
    }

    isPositionBox(newPositionElement) {
        return newPositionElement.name == 'box' || newPositionElement.name == 'boxOnGoal';
    }

    moveCharacter(currPosition, newPosition) {
        // Set current position
        const currPositionElement = this.level.getElementByPosition(currPosition);
        if (currPositionElement.name == 'characterOnGoal') { 
            this.level.setElementByPosition(currPosition, 'goal');
        } else {
            this.level.setElementByPosition(currPosition, 'empty');
        }
        // Set new position
        const newPositionElement = this.level.getElementByPosition(newPosition); 
        if (newPositionElement.name == 'goal' || newPositionElement.name == 'boxOnGoal') {
            this.level.setElementByPosition(newPosition, 'characterOnGoal');
        } else {
            this.level.setElementByPosition(newPosition, 'character');
        }
        this.level.setCharacterPosition(newPosition);
    }

    pushBox(newPosition) {
        const newPositionElement = this.level.getElementByPosition(newPosition); 
        if (newPositionElement.name == 'goal') {
            this.level.setElementByPosition(newPosition, 'boxOnGoal');
            this.level.boxOutOfGoal--;
            this.checkForWin();
        } else {
            this.level.setElementByPosition(newPosition, 'box');
        }
    }

    checkForWin() {
        if (this.level.boxOutOfGoal == 0) {
            this.level.displayWin();
        }
    }
}

export default Movement;