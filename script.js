function getComputerChoice () {
    let numRandom = Math.random();
    if (numRandom < 0.3) {
        console.log("Scissors");
    } else if (numRandom > 0.6) {
            console.log("Paper");
        } else {
            console.log("Rock");
        }
}

function getHumanChoice () {
    let userChoice = prompt("Pick between Rock, Paper or Scissors: ");
    console.log(userChoice);
}

let computerScore = 0;
let humanScore = 0;

getComputerChoice();
getHumanChoice();