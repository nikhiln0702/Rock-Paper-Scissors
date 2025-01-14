function getComputerChoice() {

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    let num = getRandomInt(3);
    let computerChoice;
    if (num == 0) {
        computerChoice = "rock";
    }
    else if (num == 1) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }
    console.log(computerChoice);
    return computerChoice;
}

function buttonClickEvent(event) {
    const humanChoice = event.target.textContent.toLowerCase();
    const computerChoice = getComputerChoice();
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    playRound(humanChoice, computerChoice);
    if (rounds == 5) {
        result();
        reset();
    }
}

let humanScore = 0;
let computerScore = 0;
let rounds = 0;
function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("It's a tie!!!");
    }
    else if ((humanChoice == "rock") && (computerChoice == "scissors") || (humanChoice == "scissors") && (computerChoice == "paper") || (humanChoice == "paper") && (computerChoice == "rock")) {
        humanScore++;
        console.log("You win!!!");
    }
    else {
        computerScore++;
        console.log("Computer wins");
    }
    rounds++;
    console.log("Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
    console.log(rounds);
}

function result() {
    if (humanScore > computerScore) {
        console.log("You win the game !!!");

    }
    else if (humanScore < computerScore) {
        console.log("You lose :(. Better luck next time")
    }
    else {
        console.log("Match tied");
    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", buttonClickEvent);
});
function reset() {
    rounds = 0;
    computerScore = 0;
    humanScore = 0;
}
