'use strict';
// Elements
const message = document.querySelector(`.message`);
const scoreCounter = document.querySelector(`.score`);
const highscoresCounter = document.querySelector(`.highscore`);
const secretNumber = document.querySelector(`.number`);
const guessInput = document.querySelector(`.guess`);
const checkButton = document.querySelector(`.check`);
const againButton = document.querySelector(`.again`);

const randomNumberGenerator = function () {
  const number = Math.trunc(Math.random() * 20) + 1;
  return number;
};

let score = 20;
let highscore = 0;
let randomNumber = randomNumberGenerator();
const displayMessage = function (msg) {
  message.textContent = msg;
};
scoreCounter.textContent = score;

const gameReset = function () {
  secretNumber.textContent = `?`;
  score = 20;
  randomNumber = randomNumberGenerator();
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
  displayMessage(`Start guessing...`);
  scoreCounter.textContent = `20`;
  guessInput.value = ``;
};

const checkInputValue = function () {
  const guess = Number(guessInput.value);

  if (!guess) {
    displayMessage(`⛔ No Number!`);
  } else if (guess === randomNumber) {
    displayMessage(`🥳 Correct number`);
    secretNumber.textContent = randomNumber;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
    if (score > highscore) {
      highscore = score;
      highscoresCounter.textContent = highscore;
    }
  } else if (guess !== randomNumber) {
    if (score > 1) {
      displayMessage(guess > randomNumber ? `📈 Too High` : `📉Too Low`);
      score--;
      scoreCounter.textContent = score;
    } else {
      displayMessage(`😭YOU LOSE!`);
      secretNumber.textContent = randomNumber;
    }
  }
};

checkButton.addEventListener(`click`, checkInputValue);
againButton.addEventListener(`click`, gameReset);
