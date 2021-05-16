import Level from './level';

var canvas = document.getElementById('canvas-main');
var context = canvas.getContext('2d');

var currLevel = new Level();
canvas.width = 7 * 50;
canvas.height = 7 * 50;

document.addEventListener('DOMContentLoaded', () => {
  currLevel.startLevel(context, canvas);
});
