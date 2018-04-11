function Game(player) {}

Game.prototype.matchDraw = function(player1, player2) {
  if (player1 === player2) {
    return "It's a draw!";
  }
};

Game.prototype.rockWins = function(player1, player2) {
  if (player1 === "rock") {
  }
  if (player2 === "scissors" || player2 === "lizard") {
    return player1 + " wins!";
  } else if (player2 === "rock") {
    if (player1 === "scissors" || player1 === "lizard") {
      return player2 + " wins!";
    }
  }
};

Game.prototype.paperWins = function(player1, player2) {
  if (player1 === "paper") {
  }
  if (player2 === "rock" || player2 === "Spock") {
    return player1 + " wins!";
  } else if (player2 === "paper") {
    if (player1 === "rock" || player1 === "Spock") {
      return player2 + " wins!";
    }
  }
};

Game.prototype.scissorsWins = function(player1, player2) {
  if (player1 === "scissors") {
  }
  if (player2 === "paper" || player2 === "lizard") {
    return player1 + " wins!";
  } else if (player2 === "scissors") {
    if (player1 === "paper" || player1 === "lizard") {
      return player2 + " wins!";
    }
  }
};

Game.prototype.lizardWins = function(player1, player2) {
  if (player1 === "lizard") {
  }
  if (player2 === "paper" || player2 === "Spock") {
    return player1 + " wins!";
  } else if (player2 === "lizard") {
    if (player1 === "paper" || player1 === "Spock") {
      return player2 + " wins!";
    }
  }
};
