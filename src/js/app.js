import { renderBoard } from './board.js';

let newBoard = [];
let fieldSize = 4;
let boardEl = document.getElementById('board');

function fillNewBoard() {
  console.log(newBoard);
  for (let i = 0; i < fieldSize; i++) {
    newBoard[i] = [];
    for (let j = 0; j < fieldSize; j++) {
      console.log(i);
      console.log(j);
      newBoard[i][j] = "";
      console.log(newBoard);
    }
  }
}

fillNewBoard();
console.log(newBoard);
renderBoard(newBoard);
