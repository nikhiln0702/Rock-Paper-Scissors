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
let computerChoice;

function buttonClickEvent(event) {
    if(event.target.id=="reset"){
        reset();
    }
    else{
    const humanChoice = event.target.textContent.toLowerCase();
    computerChoice = getComputerChoice();
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    playRound(humanChoice, computerChoice);
    if (rounds == 5) {
        result();
    }
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
    updateScore();
    console.log("Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
    console.log(rounds);
}

function result() {
    const div = document.createElement("div");
    div.id = "result";

    if (humanScore > computerScore) {
        div.textContent="You win the game !!!. Click on Play Again";

    }
    else if (humanScore < computerScore) {
        div.textContent="You lose :(. Better luck next time. Click on Play Again";
    }
    else {
        div.textContent="Match tied. Click on Play Again";
    }
    document.body.appendChild(div);
}
function reset() {
    rounds = 0;
    computerScore = 0;
    humanScore = 0;
    const resultDiv = document.getElementById("result");
    if (resultDiv) {
        resultDiv.remove(); 
    }
    updateScore();

}
function updateScore(){
    const scoreDiv = document.getElementById("current-score");
    scoreDiv.textContent = `Computer Choice: ${computerChoice}| Human: ${humanScore} | Computer: ${computerScore} | Rounds Played: ${rounds}`;
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", buttonClickEvent);
});
document.querySelectorAll(".choice").forEach((img) => {
    img.addEventListener("click", buttonClickEvent);
});

