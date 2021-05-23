class Player {
    constructor(name) {
        this.name = name;
        this.completedLevels = 0;
        this.movementsByLevel = {
            "1": 0,
            "2": 0,
            "3": 0,
            "4": 0,
            "5": 0,
            "6": 0
        };
        this.resetsByLevel = {
            "1": 0,
            "2": 0,
            "3": 0,
            "4": 0,
            "5": 0,
            "6": 0
        };
        this.timeByLevel = {
            "1": [null, null],
            "2": [null, null],
            "3": [null, null],
            "4": [null, null],
            "5": [null, null],
            "6": [null, null]
        };

        this.dbId = null;
    }

    // savePlayerToJSON() {
    //     const fs = require('fs');
    //     const path = `./players/${this.name}.json`;
    //     const jsonString = JSON.stringify(this.getClassAttributesDict());
    //     fs.writeFile(path, jsonString);
    // }

    getClassAttributesDict() {
        return {
            "name": this.name,
            "completedLevels": this.completedLevels,
            "movementsByLevel": this.movementsByLevel,
            "resetsByLevel": this.resetsByLevel,
            "timeByLevel": this.timeByLevel
        } 
    }
}

export default Player;