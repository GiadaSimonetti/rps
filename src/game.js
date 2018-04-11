function Game(player) {}

Game.prototype.match = function(player1, player2) {
  if (player1 === "rock") {
    if (player2 === "rock") {
      return "It's a draw!";
    } else if (player2 === "paper") {
      return player1 + " wins!";
    } else if (player2 === "scissors") {
      return player1 + " wins!";
    }
  } else if (player1 === "paper") {
    if (player2 === "rock") {
      return player1 + " wins!";
    } else if (player2 === "paper") {
      return "It's a draw!";
    } else if (player2 === "scissors") {
      return player2 + " wins!";
    }
  } else if (player1 === "scissors") {
    if (player2 === "rock") {
      return player2 + " wins!";
    } else if (player2 === "paper") {
      return player1 + " wins!";
    } else if (player2 === "scissors") {
      return "It's a draw!";
    }
  }
};
