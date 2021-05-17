import Level from './level';

const canvas = document.getElementById('canvas-main');
const context = canvas.getContext('2d');

var currLevel = new Level(canvas, context);
canvas.width = currLevel.grid[0].length * 50;
canvas.height = currLevel.grid.length * 50;

document.addEventListener('DOMContentLoaded', () => {
  currLevel.startLevel();
});


