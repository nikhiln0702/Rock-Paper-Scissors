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
function getHumanChoice() {
    let humanChoice = prompt("enter your Choice");
    humanChoice = humanChoice.toLowerCase();
    console.log(humanChoice);
    return humanChoice;

}
let a;
let humanScore = 0;
let computerScore = 0;
function playGame() {
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
    }
    console.log("Score: "+humanScore);
    console.log("Computer Score: "+computerScore);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}
for (let i = 0; i < 5; i++) {
    playGame();
}
if (humanScore > computerScore) {
    console.log("You win the game !!!");

}
else if(humanScore<computerScore){
    console.log("You lose :(. Better luck next time")
}
else{
    console.log("Match tied");
}

