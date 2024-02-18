function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    const player = playerSelection;
    const bot = computerSelection;
    if (playerSelection === computerSelection) {
        return 0;
    } 
    else if((playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Paper") ||
        (playerSelection === "Paper" && computerSelection === "Rock")) {
            return 1;
    }
    else{
        return -1;
    }
  }
  
  function playGame(action){
    const playerSelection = action;
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection)
    return { result, computerSelection };
  }

  const btns = document.querySelectorAll('button');
  const output = document.querySelector('.output');
  const botChoice = document.querySelector('.bot');
  const score = document.querySelector('.score');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
        action = btn.innerHTML;
        const { result, computerSelection } = playGame(action);
        botChoice.textContent = 'Bot chose: ' + computerSelection;
        score.textContent = parseInt(score.textContent) + result;
        if(result === 1){
            output.textContent = 'You win!';
        }
        else if(result === -1){
            output.textContent = 'You lost!';
        }
        else{
            output.textContent = "It's a tie!";
        }
    })
  })