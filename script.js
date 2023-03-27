'use strict';
// Elements
const message = document.querySelector(`.message`)
const score = document.querySelector(`.score`)
const highscore = document.querySelector(`.highscore`)
const secretNumber = document.querySelector(`.number`)
const guess = document.querySelector(`.guess`)
const checkButton = document.querySelector(`.check`)

const checkInputValue = function(){
 Number(guess.value)
}


checkButton.addEventListener(`click`, checkInputValue)