function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function capitalize(string) {
    return string.slice(0,1).toUpperCase()+string.slice(1).toLowerCase();
  }

function playRound(playerSelection, computerSelection) {
    const player = playerSelection;
    const bot = computerSelection;
    if (player==bot){
        return "It's a tie!";
    }
    else if(player=='Rock'){
        if( bot=='Paper')
            return "You Lose! Paper beats Rock";
        else
            return "You Win! Rock beats Scissors";
    }
    else if(player=='Paper'){
        if( bot=='Scissors')
            return "You Lose! Scissors beats Paper";
        else
            return "You Win! Paper beats Rock";
    }
    else{
        if(bot=='Rock')
            return "You Lose! Rock beats Scissors";
        else
            return "You Win! Scissors beats Paper";
    }
  }
  
  function playGame(count){
    for(let i = 1; i <= count; i++){
        const choices = ["Rock", "Paper", "Scissors"];
        const playerSelection = capitalize(prompt("Choose your action: "));
        if (choices.includes(playerSelection)){
            const computerSelection = getComputerChoice();
            console.log(playRound(playerSelection, computerSelection));
        }
        else{
            console.log("Invalid Input");
            i--;
        }
    }
  }
  let rounds = parseInt(prompt("How many rounds do you want to play?: "));
  playGame(rounds);