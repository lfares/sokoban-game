var canvas = document.getElementById('canvas-main');
var context = canvas.getContext('2d');

var levelMatrix = [
    ['#', '#', '#', '#', '#', '#', '#'], 
    ['#', '.', '@', ' ', '#', ' ', '#'], 
    ['#', '$', '*', ' ', '$', ' ', '#'], 
    ['#', ' ', ' ', ' ', '$', ' ', '#'], 
    ['#', ' ', '.', '.', ' ', ' ', '#'], 
    ['#', ' ', ' ', '*', ' ', ' ', '#'], 
    ['#', '#', '#', '#', '#', '#', '#']
];
canvas.width = levelMatrix[0].length * 50;
canvas.height = levelMatrix.length * 50;

function parseLevelToImageSrc(element) {
    switch (element) {
      case '#':
        return './img/wall.png';
      case '@':
        return './img/character.png';
      case '$':
        return './img/box.png';
      case '*':
        return './img/boxOnGoal.png';
      case '.':
        return './img/goal.png';
      case ' ':
        return 'empty';
    }
}

function drawLevel() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    levelMatrix.forEach(function (row, yPos) {
      row.forEach(function (gameElement, xPos) {
        var elementImgSrc = parseLevelToImageSrc(gameElement)
        if (elementImgSrc != 'empty') {
          drawGameElement(elementImgSrc, xPos, yPos);
        }
      })
    });
}

function drawGameElement(elementImgSrc, xPos, yPos) {
  let elementImg = new Image();
  elementImg.src = elementImgSrc;
  elementImg.onload = function() {
    context.drawImage(elementImg, xPos * 50, yPos * 50, 50, 50);
  };
}

var possibleMovements = {
  up: [-1, 0],
  down: [1, 0],
  left: [0, -1],
  right: [0, 1]
};

function move(currPosition, direction) {
  let newPositionCoordinates = getNewCoordinates(currPosition, direction);
  let newPositionElement = getElement(newPositionCoordinates[0], newPositionCoordinates[1]);
  makeMovement();
}

function getNewCoordinates(currPosition, direction) {
  return [currPosition[0] + possibleMovements[direction][0],
          currPosition[1] + possibleMovements[direction][1]];
}

function getElement(x, y) {
  return levelMatrix[x][y];
}

function makeMovement() {
  
}

document.addEventListener('DOMContentLoaded', () => {
  drawLevel();
});
