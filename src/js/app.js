import renderBoard from './board.js';

// block отрисовки
// const id;
// const time = 1000;

const newBoard = [];
const fieldSize = 4;

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

// ynew blocl logic
const arrField = Array.from(document.getElementsByClassName('field')); // все поля
console.log('field array', arrField);

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createImg() {
  const imgEl = document.createElement('img');
  imgEl.src = 'E:/0-Web-учеба/0-блок8-js-move/ahj2-dom/src/img/goblin.png';
  imgEl.alt = 'Текущее положение';
  imgEl.classList.add('style-img');
  console.log(imgEl);
  return imgEl;
  // imgEl.textContent = 'Click me';
  // const boardEl = document.getElementById('board');
}

function isActive() {
  return (arrField.findIndex((item) => (item.classList.contains('busy'))));
}

function changeField() {
  const t = isActive.call(arrField);
  const deletable = arrField[t].firstElementChild;
  console.log('удаляем -', deletable);
  // deletable.remove();

  arrField[t].classList.remove('busy');
  arrField[t].classList.add('.free');
  deletable.remove();

  const colRandom = getRandomInt(0, 3);
  const rowRandow = getRandomInt(0, 3);
  console.log('ran new Random', colRandom, rowRandow);
  const element = arrField.find((item) => item.dataset.col === `${colRandom}`
  && item.dataset.row === `${rowRandow}`);
  element.classList.remove('free');
  element.classList.add('busy');
  console.log('field busy new', element);
  const imgNew = createImg();
  element.insertAdjacentElement('afterBegin', imgNew);
}

/*
function toggleField() {
}
*/

function onRun() {
  setInterval(() => changeField.call(arrField), 1000);
}

const colRandom = getRandomInt(0, 3);
const rowRandow = getRandomInt(0, 3);
console.log('rann', colRandom, rowRandow);

const element = arrField.find((item) => item.dataset.col === `${colRandom}`
  && item.dataset.row === `${rowRandow}`);
element.classList.remove('free');
element.classList.add('busy');
console.log('field busy', element);
const imgNew = createImg();
element.insertAdjacentElement('afterBegin', imgNew);

onRun();
