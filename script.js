function getComputerChoice(){

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
    let num=getRandomInt(3);
    let computerChoice;
    if(num==0){
        computerChoice="rock";
    }
    else if(num==1){
        computerChoice="paper";
    }
    else{
        computerChoice="scissors";
    }
    console.log(computerChoice);
    return computerChoice;
}
function getHumanChoice(){
    let humanChoice=prompt("enter your computerChoice");
    humanChoice=humanChoice.toLowerCase();
    console.log(humanChoice);

}

function playRound(humanChoice,computerChoice){
     
}

let humanScore=0;
let computerScore=0;
const humanSelection=getHumanChoice();
const computerSelection=getComputerChoice();
playRound(humanSelection,computerSelection);