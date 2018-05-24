class Game {
  constructor(){
    this.combinations = [
      ["paper", "scissors"],
      ["rock", "paper"],
      ["lizard", "rock"],
      ["spock", "lizard"],
      ["scissors", "spock"],
      ["lizard", "scissors"],
      ["paper", "lizard"],
      ["spock", "paper"],
      ["rock", "spock"],
      ["scissors", "rock"]
    ];
  }

  result(player1, player2){
    for (var i = 0; i < this.combinations.length; i++) {
        if (player1 === this.combinations[i][0] && player2 === this.combinations[i][1]) {
          return player2 + " wins!";
        } else if (player1 === this.combinations[i][1] && player2 === this.combinations[i][0]){
          return player1 + " wins!";
        }
      }
      return "It's a tie!";
    }
}
