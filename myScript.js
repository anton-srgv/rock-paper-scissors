//Rock-paper-scissors game
//Three values: rock, paper, scissor
alert("Rock-paper-scissors Battle Begin! It will continue 5 rounds");

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

//Play 5 rounds
function playGame () {

    //Track score
    let humanScore = 0;
    let computerScore = 0;

    //Play a single round
    function playRound (humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        
        switch (humanChoice) {
            case "rock":
                if (computerChoice === "rock") {
                    alert(`Rock vs Rock, it's a tie!
                        Score: Human ${humanScore} vs Computer ${computerScore}`);
                } else if (computerChoice === "paper") {
                    computerScore += 1;
                    alert(`Rock vs Paper, you lose!
                        Score: Human ${humanScore} vs Computer ${computerScore}`);
                } else if (computerChoice === "scissors") {
                    humanScore += 1;
                    alert(`Rock vs Scissors, you win!
                        Score: Human ${humanScore} vs Computer ${computerScore}`);
                }
                break   

            case "paper":
                if (computerChoice === "rock") {
                    humanScore += 1;
                    alert(`Paper vs Rock, you win!
                        Score: Human ${humanScore} vs Computer ${computerScore}`);
                } else if (computerChoice === "paper") {
                    alert(`Paper vs Paper, it's a tie!
                        Score: Human ${humanScore} vs Computer ${computerScore}`);
                } else if (computerChoice === "scissors") {
                    computerScore += 1;
                    alert(`Paper vs Scissors, you lose!
                        Score: Human ${humanScore} vs Computer ${computerScore}`);
                }
                break

            case "scissors":
                if (computerChoice === "rock") {
                    computerScore += 1;
                    alert(`Scissors vs Rock, you lose!
                        Score: Human ${humanScore} vs Computer ${computerScore}`);
                } else if (computerChoice === "paper") {
                    humanScore += 1;
                    alert(`Scissors vs Paper, you win!
                        Score: Human ${humanScore} vs Computer ${computerScore}`);
                } else if (computerChoice === "scissors") {
                    alert(`Scissors vs Scissors, it's a tie!
                        Score: Human ${humanScore} vs Computer ${computerScore}`);
                }
                break

        }
    }

    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    for (i = 0; i < 5; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();

        playRound (humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log(`Final score: Human ${humanScore} vs Computer ${computerScore}, you win!`);
    } else if (humanScore < computerScore) {
        console.log(`Final score: Human ${humanScore} vs Computer ${computerScore}, you lose!`);
    } else if (humanScore == computerScore) {
        console.log(`Final score: Human ${humanScore} vs Computer ${computerScore}, it's a tie!`);
    }
}