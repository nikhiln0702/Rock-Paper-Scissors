function getComputerChoice(){

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
    let num=getRandomInt(3);
    let choice;
    if(num==0){
        choice="rock";
    }
    else if(num==1){
        choice="paper";
    }
    else{
        choice="scissors";
    }
    console.log(choice);
    return choice;
}
getComputerChoice();
function getHumanChoice(humanChoice){
    humanChoice=humanChoice.toLowerCase();
    if(humanChoice=="rock"){
        
    }
}