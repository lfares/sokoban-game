import Game from './game';

const levels = require('./levels.json');
const game = new Game(levels);

document.addEventListener('DOMContentLoaded', () => {
  game.startGame();
});




