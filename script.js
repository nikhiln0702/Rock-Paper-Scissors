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
    const humanChoice = event.target.alt.toLowerCase();
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
    const popup = document.querySelector(".popup");
    const overlay = document.querySelector(".popup-overlay");
    const resultMessage = document.getElementById("resultMessage");

    if (humanScore > computerScore) {
        resultMessage.textContent="You win the game !!!.";

    }
    else if (humanScore < computerScore) {
       resultMessage.textContent="You lose :(. Better luck next time.";
    }
    else {
        resultMessage.textContent="Match tied.";
    }
     popup.style.display = "block";
     overlay.style.display = "block";

    document.getElementById("reset").addEventListener("click", reset);
    
}
function reset() {
    document.querySelector(".popup").style.display = "none";
    document.querySelector(".popup-overlay").style.display = "none";
    rounds = 0;
    computerScore = 0;
    humanScore = 0;
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

