class Game {
  constructor(){
    this.combinations = [
      { loser: "paper", winner: "scissors" },
      { loser: "rock", winner: "paper" },
      { loser: "lizard", winner: "rock" },
      { loser: "spock", winner: "lizard" },
      { loser: "scissors", winner: "spock" },
      { loser: "lizard", winner: "scissors" },
      { loser: "paper", winner: "lizard" },
      { loser: "spock", winner: "paper" },
      { loser: "rock", winner: "spock" },
      { loser: "scissors", winner: "rock" }
    ];
  }

  result(player1, player2){
    const player1Winner = this.combinations.find(combination => combination.winner === player1 && combination.loser === player2);
    const player2Winner = this.combinations.find(combination => combination.winner === player2 && combination.loser === player1);

    if (player1Winner) {
        return `${player1} wins!`;
      } else if (player2Winner) {
        return `${player2} wins!`;
      }
      return "It's a tie!";
  }
}
