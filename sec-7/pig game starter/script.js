'use strict';

const player1Score = document.querySelector('#score--0');
const player2Score = document.getElementById('score--1');             // getElementById is little bit faster than querySelector
const dice = document.querySelector('.dice');

let currentScore0 = document.querySelector('#current--0');
let currentScore1 = document.querySelector('#current--1');

dice.classList.add('hidden');
const roller = document.querySelector('.btn--roll');

document.querySelector('.player--0').classList.add('player--active');
// if 1 then player 1 else player 2
let activePlayer = 1;

let player1ActualScore = 0;
let player2ActualScore = 0;

let player1CurrentScore = 0;
let player2CurrentScore = 0;

player1Score.textContent = player1ActualScore;
player2Score.textContent = player2ActualScore;

roller.addEventListener('click', () => {
     const diceRoll = Math.ceil(Math.random() * 6);
     dice.src = `dice-${diceRoll}.png`;
     if (diceRoll === 1) {
          activePlayer = !activePlayer;
          alterActivePlayer(activePlayer);
          player1CurrentScore = player2CurrentScore = 0;
          currentScore0.textContent = currentScore1.textContent = 0;
     } else {
          if (activePlayer) {
               player1CurrentScore += diceRoll;
               currentScore0.textContent = player1CurrentScore;
          } else {
               player2CurrentScore += diceRoll;
               currentScore1.textContent = player2CurrentScore;
          }
     }
     dice.classList.remove('hidden');
})

document.querySelector('.btn--new').addEventListener('click', () => {
     player2CurrentScore = player1CurrentScore = player2ActualScore = player1ActualScore = 0;
     player1Score.textContent = player2Score.textContent = currentScore0.textContent = currentScore1.textContent = 0;
     document.querySelector('.player--0').classList.remove('player--winner');
     document.querySelector('.player--1').classList.remove('player--winner');
     activePlayer = 1;
     roller.style.display = 'block';
     alterActivePlayer(activePlayer)
     document.querySelector('.btn--hold').style.display = 'block'
})

function alterActivePlayer(activePlayer) {
     if (activePlayer) {
          document.querySelector('.player--0').classList.add('player--active');
          document.querySelector('.player--1').classList.remove('player--active');
          // document.querySelector('.player--0').classList.toggle('player--active');
          // document.querySelector('.player--1').classList.toggle('player--active');
     } else {
          document.querySelector('.player--1').classList.add('player--active');
          document.querySelector('.player--0').classList.remove('player--active');
     }
}

// setting winner's styles & corresponding settings
function setWinner(player) {
     document.querySelector(`.player--${player}`).classList.add('player--winner');
     roller.style.display = 'none';
     const currentScore = document.querySelector(`#current--${player}`);
     currentScore.textContent = "WON"
     dice.style.display = 'none';
     document.querySelector('.player--0').classList.remove('player--active');
     document.querySelector('.player--1').classList.remove('player--active');
     document.querySelector('.btn--hold').style.display = 'none';
}

document.querySelector('.btn--hold').addEventListener('click', () => {
     activePlayer = !activePlayer;
     alterActivePlayer(activePlayer);
     player1ActualScore += player1CurrentScore;
     player2ActualScore += player2CurrentScore;

     player1Score.textContent = player1ActualScore;
     player2Score.textContent = player2ActualScore;
     player1CurrentScore = player2CurrentScore = 0;
     currentScore0.textContent = currentScore1.textContent = 0;
     if (player1ActualScore >= 100) {
          setWinner(0)
          return;
     }
     if (player2ActualScore >= 100) {
          setWinner(1);
          return;
     }
})