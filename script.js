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

const randomNumber = Math.trunc(Math.random() * 20) + 1;

console.log(randomNumber);
console.log(Number(scoreCounter.textContent));

const gameReset = function () {
  secretNumber.textContent = `?`;
  score = 20;
  randomNumber;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
  message.textContent = `Start guessing...`;
  guessInput.value = ``;
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
  } else if (guess > randomNumber) {
    if (score >= 0) {
      message.textContent = `📈 Too High`;
      scoreCounter.textContent = score--;
    } else {
      message.textContent = `😭You lose`;
    }
  } else if (guess < randomNumber) {
    if (score >= 0) {
      message.textContent = `📉 Too Low`;
      scoreCounter.textContent = score--;
    } else {
      message.textContent = `😭You lose`;
    }
  }
};

checkButton.addEventListener(`click`, checkInputValue);
againButton.addEventListener(`click`, gameReset);
