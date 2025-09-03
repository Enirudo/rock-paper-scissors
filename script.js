function getComputerChoice () {
    let numRandom = Math.random();

    if (numRandom < 0.3) {
        console.log(numRandom);
        return "Scissors";
    } else if (numRandom > 0.7) {
            console.log(numRandom);
            return "Paper";
        } else {
            console.log(numRandom);
            return "Rock";
        }
}

function getHumanChoice () {
    let userChoice = prompt("Pick between Rock, Paper or Scissors: ");
    console.log(userChoice);
    return userChoice;
}

function playRound (computerChoice,humanChoice) {
    stringComputer = computerChoice.toLowerCase();
    stringUser = humanChoice.toLowerCase();

    console.log(stringComputer);
    console.log(stringUser);
//Check for rock versus rock, paper and scissors combination
    if (stringComputer == "rock" && stringUser == "paper") {
        console.log("You win! Paper beats rock.");
    }
    
    if (stringComputer == "rock" && stringUser == "scissors") {
        console.log("You lose! Rock beats scissors.");
    }

    if (stringComputer == "rock" && stringUser == "rock") {
        console.log("Draw!");
    }
    
//Check for paper versus rock, paper and scissors combination

    if (stringComputer == "paper" && stringUser == "rock") {
        console.log("You lose! Paper beats rock.");
    }
    
    if (stringComputer == "paper" && stringUser == "scissors") {
        console.log("You lose! Scissors beats paper.");
    }

    if (stringComputer == "paper" && stringUser == "paper") {
        console.log("Draw!");
    }
//Check for scissors versus rock, paper and scissors combination

    if (stringComputer == "scissors" && stringUser == "paper") {
        console.log("You lose! Scissors beats paper.");
    }
    
    if (stringComputer == "scissors" && stringUser == "rock") {
        console.log("You lose! Rock beats scissors.");
    }

    if (stringComputer == "scissors" && stringUser == "scissors") {
        console.log("Draw!");
    }

}

let computerScore = 0;
let humanScore = 0;

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();
playRound(computerSelection, humanSelection);