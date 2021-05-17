import Level from './level';
import Movement from './movement';

const canvas = document.getElementById('canvas-main');
const context = canvas.getContext('2d');

var currLevel = new Level(canvas, context);
canvas.width = currLevel.grid[0].length * 50;
canvas.height = currLevel.grid.length * 50;

document.addEventListener('DOMContentLoaded', () => {
  currLevel.drawLevel();
});

var movementClass = new Movement(currLevel);
var handleKeyDownFunction = movementClass.checkForMovement.bind(movementClass);
document.addEventListener('keydown', handleKeyDownFunction);
