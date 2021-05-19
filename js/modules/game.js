import Level from './level'

class Game {
    constructor(levels) {
        this.levels = levels;
        this.currentLevelId = 1;
    }

    startGame() {
        this.selectNewLevel();
        this.addLevelResetListener();
        this.addNextLevelListener();
    }

    selectNewLevel() {
        console.log(this.levels[this.currentLevelId.toString()])
        this.currLevel = new Level(this.currentLevelId, this.levels[this.currentLevelId.toString()]);
        this.currLevel.startLevel();
    }

    addNextLevelListener() {
        const nextLevelEvent = document.getElementById('next-level-button');
        nextLevelEvent.addEventListener('click', (e) => {
            e.preventDefault();
            this.currentLevelId++;
            const winModal = document.getElementById('win-div');
            winModal.className = 'hidden';
            this.selectNewLevel();
        });
    }

    addLevelResetListener() {
        const nextLevelEvent = document.getElementById('reset-button');
        nextLevelEvent.addEventListener('click', (e) => {
            e.preventDefault();
            this.currLevel.resetLevel();
            this.selectNewLevel();
        });
    }

}

export default Game;