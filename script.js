function getComputerChoice () {
    let numRandom = Math.random();
    console.log(numRandom);
    if (numRandom < 0.3) {
        console.log("Scissors");
    } else if (numRandom > 0.6) {
            console.log("Paper");
        } else {
            console.log("Rock");
        }
};

getComputerChoice();