let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget ()
{
  return Math.floor(Math.random()*10);
}

function compareGuesses (humanGuess, computerGuess, target) {
    if (getAbsoluteDistance(humanGuess, target) <= getAbsoluteDistance(computerGuess, target)) {
        return true;
    } else {
        return false;
    }
}

function updateScore (winner) {
    if (winner === 'human') {
        humanScore++;
    } else {
        computerScore++;
    }
}

function advanceRound () {
    currentRoundNumber++;
}

function getAbsoluteDistance (number1, number2) {
    return Math.abs(number1 - number2);
}