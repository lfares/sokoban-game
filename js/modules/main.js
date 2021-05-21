import Game from './game';
import Player from './player';

const levels = require('./levels.json');

document.addEventListener('DOMContentLoaded', () => {
  const playerModal = document.getElementById('player-div');
  playerModal.className = 'active';
  const startGame = document.getElementById('start-game');
    startGame.addEventListener('click', (e) => {
      e.preventDefault();
      const player = new Player(document.getElementById('player-name').value);
      playerModal.className = 'hidden';

      const game = new Game(levels, player);
      playerModal.className = 'hidden';
      game.startGame();
  });
});




