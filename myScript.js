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
let humanScore = 0;
let computerScore = 0;

//Play a single round
function playRound (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    switch (humanChoice) {
        case "rock":
            if (computerChoice === "rock") {
                console.log("You picked " + humanChoice);
                console.log("Computer picked " + computerChoice);
                console.log("Rock vs Rock, it's a tie!");
            } else if (computerChoice === "paper") {
                computerScore += 1;
                console.log("You picked " + humanChoice);
                console.log("Computer picked " + computerChoice);
                console.log("Rock vs Paper, you lose!");
                console.log(`Score: Human ${humanScore} vs Computer ${computerScore}`);
            } else if (computerChoice === "scissors") {
                humanScore += 1;
                console.log("You picked " + humanChoice);
                console.log("Computer picked " + computerChoice);
                console.log("Rock vs Scissors, you win!");
                console.log(`Score: Human ${humanScore} vs Computer ${computerScore}`);
            }
            break   

        case "paper":
            if (computerChoice === "rock") {
                humanScore += 1;
                console.log("You picked " + humanChoice)
                console.log("Computer picked " + computerChoice)
                console.log("Paper vs Rock, you win!")
                console.log(`Score: Human ${humanScore} vs Computer ${computerScore}`);
            } else if (computerChoice === "paper") {
                console.log("You picked " + humanChoice)
                console.log("Computer picked " + computerChoice)
                console.log("Paper vs Paper, it's a tie!")
            } else if (computerChoice === "scissors") {
                computerScore += 1;
                console.log("You picked " + humanChoice)
                console.log("Computer picked " + computerChoice)
                console.log("Paper vs Scissors, you lose!")
                console.log(`Score: Human ${humanScore} vs Computer ${computerScore}`);
            }
            break

         case "scissors":
            if (computerChoice === "rock") {
                computerScore += 1;
                console.log("You picked " + humanChoice)
                console.log("Computer picked " + computerChoice)
                console.log("Scissors vs Rock, you lose!")
                console.log(`Score: Human ${humanScore} vs Computer ${computerScore}`);
            } else if (computerChoice === "paper") {
                humanScore += 1;
                console.log("You picked " + humanChoice)
                console.log("Computer picked " + computerChoice)
                console.log("Scissors vs Paper, you win!")
                console.log(`Score: Human ${humanScore} vs Computer ${computerScore}`);
            } else if (computerChoice === "scissors") {
                console.log("You picked " + humanChoice)
                console.log("Computer picked " + computerChoice)
                console.log("Scissors vs Scissors, it's a tie!")
            }
            break

    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound (humanSelection, computerSelection);