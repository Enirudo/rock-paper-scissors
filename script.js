function getComputerChoice () {
    let numRandom = Math.random();

    if (numRandom < 0.3) {
        return "Scissors";
    } else if (numRandom > 0.6) {
            return "Paper";
        } else {
            return "Rock";
        }
}

function getHumanChoice () {
    let userChoice = prompt("Pick between Rock, Paper or Scissors: ");
    return userChoice;
}

function playRound (computerChoice,humanChoice) {
    stringComputer = computerChoice.tolowercase();
    stringUser = humanChoice.tolowercase();
//Check for rock versus rock, paper and scissors combination
    if (stringComputer == "" || stringUser == "") {
        return "";
    } else if (stringComputer == "" || stringUser == "") {
        return "";
    } else {
        return "";
    }
//Check for paper versus rock, paper and scissors combination

    if (stringComputer == "" || stringUser == "") {
        return "";
    } else if (stringComputer == "" || stringUser == "") {
        return "";
    } else {
        return "";
    }
//Check for scissors versus rock, paper and scissors combination

    if (stringComputer == "" || stringUser == "") {
        return "";
    } else if (stringComputer == "" || stringUser == "") {
        return "";
    } else {
        return "";
    }

}

let computerScore = 0;
let humanScore = 0;

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();