class Game {
  constructor(){
    this.combinations = [
      { looser: "paper", winner: "scissors" },
      { looser: "rock", winner: "paper" },
      { looser: "lizard", winner: "rock" },
      { looser: "spock", winner: "lizard" },
      { looser: "scissors", winner: "spock" },
      { looser: "lizard", winner: "scissors" },
      { looser: "paper", winner: "lizard" },
      { looser: "spock", winner: "paper" },
      { looser: "rock", winner: "spock" },
      { looser: "scissors", winner: "rock" }
    ];
  }

  result(player1, player2){

    const player1Winner = this.combinations.find(combination => combination.winner === player1 );
    const player1Looser = this.combinations.find(combination => combination.looser === player1 );
    const player2Winner = this.combinations.find(combination => combination.winner === player2 );
    const player2Looser = this.combinations.find(combination => combination.looser === player2 );
    if (player1 === player2) return "It's a tie!";
    if (player1Winner && player2Looser) return `${player1} wins!`;
    if (player1Winner && player2Looser) return `${player2} wins!`;

  }
}
