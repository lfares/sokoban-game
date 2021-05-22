class Player {
    constructor(name) {
        this.name = name;
        this.movementsByLevel = {
            "1": 0,
            "2": 0,
            "3": 0,
            "4": 0
        };
        this.completedLevels = 0
        this.resetsByLevel = {
            "1": 0,
            "2": 0,
            "3": 0,
            "4": 0
        };
        this.timeByLevel = {
            "1": [null, null],
            "2": [null, null],
            "3": [null, null],
            "4": [null, null]
        }
    }
}

export default Player;