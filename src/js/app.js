import renderBoard from './board';

const newBoard = [];
const fieldSize = 4;
const imgEl = document.createElement('img');
imgEl.src = 'E:/0-Web-учеба/0-блок8-js-move/ahj2-dom/src/img/goblin.png';
imgEl.alt = 'Текущее положение';
console.log(imgEl);
// imgEl.textContent = 'Click me';
// const boardEl = document.getElementById('board');

function fillNewBoard() {
  console.log(newBoard);
  for (let i = 0; i < fieldSize; i += 1) {
    newBoard[i] = [];
    for (let j = 0; j < fieldSize; j += 1) {
      // console.log(i);
      // console.log(j);
      newBoard[i][j] = '';
      // console.log(newBoard);
    }
  }
}

fillNewBoard();
console.log(newBoard);
renderBoard(newBoard);
