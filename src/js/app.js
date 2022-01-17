import renderBoard from './board';

const newBoard = [];
const fieldSize = 4;
// const boardEl = document.getElementById('board');

function fillNewBoard() {
  console.log(newBoard);
  for (let i = 0; i < fieldSize; i += 1) {
    newBoard[i] = [];
    for (let j = 0; j < fieldSize; j += 1) {
      console.log(i);
      console.log(j);
      newBoard[i][j] = '';
      console.log(newBoard);
    }
  }
}

fillNewBoard();
console.log(newBoard);
renderBoard(newBoard);
