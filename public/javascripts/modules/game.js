import Level from './level'

class Game {
    constructor(levels, player) {
        this.levels = levels;
        this.player = player;
        this.currentLevelId = 1;
        this.time = window.time;
    }

    startGame() {
        clearInterval(this.time);
        this.startTimer();

        this.selectNewLevel();

        this.addLevelResetListener();
        this.addNextLevelListener();
        this.addEndGameListener();
    }

    selectNewLevel() {
        this.currLevel = new Level(this.currentLevelId, this.levels[this.currentLevelId.toString()]);
        // Start time of level for player stats if this is not a reset
        if (this.player.timeByLevel[this.currentLevelId][0] == null) {
            this.player.timeByLevel[this.currentLevelId][0] = this.time;
        }

        this.currLevel.startLevel();
    }

    addNextLevelListener() {
        const nextLevelEvent = document.getElementById('next-level-button');
        nextLevelEvent.addEventListener('click', (e) => {
            e.preventDefault();

            this.updateFinalLevelPlayerStats();

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
            this.player.resetsByLevel[this.currentLevelId]++;
            this.currLevel.resetLevel();
            this.selectNewLevel();
        });
    }

    addEndGameListener() {
        const endGameEvent = document.getElementById('end-div');
        endGameEvent.addEventListener('mouseenter', (e) => {
            e.preventDefault();
            this.updateFinalLevelPlayerStats();
        });
    }

    updateFinalLevelPlayerStats() {
        this.player.movementsByLevel[this.currentLevelId] += this.currLevel.movements;
        this.player.timeByLevel[this.currentLevelId][1] = this.time;
        this.player.completedLevels++;
        // this.player.savePlayerToJSON();
        console.log(this.player);
    }

    startTimer() {
        this.time = 0;
        window.timer = setInterval(() => {
            this.displayTime(this.time);
            this.time += 1;
        }, 1000);
    }

    displayTime() {
        const minutes = Math.floor(this.time / 60);
        const seconds = Math.floor(this.time % 60);
        const minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const secondsString = seconds < 10 ? `0${seconds}` : `${seconds}`;

        const timer = document.getElementById('level-time');
        timer.innerHTML = `${minutesString}:${secondsString}`;
    }

}

export default Game;