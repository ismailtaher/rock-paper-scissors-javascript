// My First Interactive Game

let playGame = confirm("Shall we play rock, paper, scissors?");
if (playGame) {
  //play

  let playerChoice = prompt("Please enter rock, paper or scissors");
  if (playerChoice) {
    let playOne = playerChoice.trim().toLowerCase();
    if (playOne === "rock" || playOne === "paper" || playOne === "scissors") {
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer =
        computerChoice === 1
          ? "rock"
          : computerChoice === 2
          ? "paper"
          : "scissors";

      let result =
        playOne === computer
          ? "Tie Game!"
          : playOne === "rock" && computer === "paper"
          ? `PlayerOne: ${playOne}\nComputer: ${computer}\nComputer Wins!`
          : playOne === "paper" && computer === "scissors"
          ? `PlayerOne: ${playOne}\nComputer: ${computer}\nComputer Wins!`
          : playOne === "scissors" && computer === "rock"
          ? `PlayerOne: ${playOne}\nComputer: ${computer}\nComputer Wins!`
          : `PlayerOne: ${playOne}\nComputer: ${computer}\nPlayerOne Wins!`;
      alert(result);
      let playAgain = confirm("Play again?");
      playAgain ? location.reload() : alert("Ok, thanks for playing!");
    } else {
      alert("You didn't enter rock, paper or scissors");
    }
  } else {
    alert("I guess you changed your mind. Maybe next time");
  }
} else {
  alert("Ok, maybe next time");
}
