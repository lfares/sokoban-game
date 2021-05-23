import Level from './level';
import firebase from 'firebase/app';
import "firebase/analytics";
import "firebase/database";

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

        this.initializeDB();

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
            this.updateDB();

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
            this.player = null;
        });
    }

    updateFinalLevelPlayerStats() {
        this.player.movementsByLevel[this.currentLevelId] += this.currLevel.movements;
        this.player.timeByLevel[this.currentLevelId][1] = this.time;
        this.player.completedLevels++;

        this.updateDB();
        console.log(this.player);
    }

    initializeDB() {
        const firebaseConfig = {
            apiKey: "AIzaSyD8NLxLYJvo59-Cl8iSFODhEr532EB7ukM",
            authDomain: "sokoban-game-6cb86.firebaseapp.com",
            projectId: "sokoban-game-6cb86",
            storageBucket: "sokoban-game-6cb86.appspot.com",
            messagingSenderId: "250619385583",
            appId: "1:250619385583:web:c832210c79850c31626d1a",
            measurementId: "G-C2WGSZD1FD",
            databaseURL: "https://sokoban-game-6cb86-default-rtdb.firebaseio.com"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        firebase.analytics();

        this.firebaseDB = firebase.database();
    }

    updateDB() {
        const playerRef = 'players/' + this.player.name;
        this.firebaseDB.ref(playerRef).update(this.player.getClassAttributesDict());
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