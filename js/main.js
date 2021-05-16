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
  var elementImg = new Image();
  elementImg.src = elementImgSrc;
  elementImg.onload = function() {
    context.drawImage(elementImg, xPos * 50, yPos * 50, 50, 50);
  };

}

document.addEventListener('DOMContentLoaded', () => {
  drawLevel();
});
