console.log("Rock-paper-scissors Battle Begin!");

//Rock-paper-scissors game:
//Three values: rock, paper, scissor
//System randomly picks one of three values
function getComputerChoice () {
    const choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random()*choice.length)];
}

//User inputs one of three values
function getHumanChoice () {
    const choice = prompt("Enter your choice: rock, paper, scissors");
    return choice;
}

//Track score
const humanScore = 0;
const computerScore = 0;

//Play a single round
function playRound (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    switch (humanChoice) {
        case "rock":
            if (computerChoice === "rock") {
                console.log("Rock vs Rock, it's a tie! Try again")
            } else if (computerChoice === "paper") {
                console.log("Rock vs Paper, you lose!")
            } else if (computerChoice === "scissors") {
                console.log("Rock vs Scissors, you won!")
            } else {
                console.log("Please type one of options")
            }
            break
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound (humanSelection, computerSelection);


//System compares user's value with it's own:
// IF Rock > Scissor and Rock < Paper
// IF Scissor > Paper and Scissor < Rock
// IF Paper > Rock and Paper < Scissor
//IF user wins – congrats
//If system wins – sad
//If tie – funny
//After each game offer another one