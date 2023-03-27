'use strict';
// Elements
const message = document.querySelector(`.message`);
const scoreCounter = document.querySelector(`.score`);
const highscoresCounter = document.querySelector(`.highscore`);
const secretNumber = document.querySelector(`.number`);
const guessInput = document.querySelector(`.guess`);
const checkButton = document.querySelector(`.check`);
const againButton = document.querySelector(`.again`);

let score = 20;
let highscore = 0;
scoreCounter.textContent = score;
let randomNumber = Math.trunc(Math.random() * 20) + 1;

console.log(Number(scoreCounter.textContent));

const gameReset = function () {
  secretNumber.textContent = `?`;
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
  message.textContent = `Start guessing...`;
  scoreCounter.textContent = `20`;
  guessInput.value = ``;
  console.log(randomNumber);
};

const checkInputValue = function () {
  const guess = Number(guessInput.value);

  if (!guess) {
    message.textContent = `⛔ No Number!`;
  } else if (guess === randomNumber) {
    message.textContent = `🥳 Correct number`;
    secretNumber.textContent = randomNumber;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
    if (score > highscore) {
      highscore = score;
      highscoresCounter.textContent = highscore++;
    }
  } else if (guess > randomNumber) {
    if (score > 0) {
      scoreCounter.textContent = score--;
      message.textContent = `📈 Too High`;
    } else {
      message.textContent = `😭You lose`;
    }
  } else if (guess < randomNumber) {
    if (score > 0) {
      scoreCounter.textContent = score--;
      message.textContent = `📉 Too Low`;
    } else {
      message.textContent = `😭You lose`;
    }
  }
};

checkButton.addEventListener(`click`, checkInputValue);
againButton.addEventListener(`click`, gameReset);
console.log(randomNumber);
