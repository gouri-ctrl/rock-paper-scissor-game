// Step 1: Test console
console.log("Hello World");

// Step 2: Get computer choice
function getComputerChoice() {
    const randomNumber = Math.random(); // 0 <= randomNumber < 1
    if (randomNumber < 1/3) return "rock";
    else if (randomNumber < 2/3) return "paper";
    else return "scissors";
}

// Step 3: Get human choice
function getHumanChoice() {
    const choice = prompt("Enter rock, paper, or scissors: ");
    return choice.toLowerCase(); // make it case-insensitive
}

// Step 4: Score variables
let humanScore = 0;
let computerScore = 0;

// Step 5: Play single round
function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }

    console.log(`Score: You ${humanScore} - ${computerScore} Computer`);
}

// Step 6: Play entire game (5 rounds)
function playGame() {
    humanScore = 0;
    computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        console.log(`--- Round ${i} ---`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    // Declare final winner
    console.log("--- Game Over ---");
    if (humanScore > computerScore) {
        console.log(`You won the game! Final Score: You ${humanScore} - ${computerScore} Computer`);
    } else if (computerScore > humanScore) {
        console.log(`You lost the game! Final Score: You ${humanScore} - ${computerScore} Computer`);
    } else {
        console.log(`The game is a tie! Final Score: You ${humanScore} - ${computerScore} Computer`);
    }
}

// Start the game
playGame();
