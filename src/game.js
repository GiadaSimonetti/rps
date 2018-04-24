function Game(player1 = new Player(), player2 = new Player()) {}

Game.prototype.result = function(player1, player2) {
  if (this.matchDraw(player1, player2)) {
    return this.matchDraw(player1, player2);
  } else if (this.rockWins(player1, player2)) {
    return this.rockWins(player1, player2);
  } else if (this.paperWins(player1, player2)) {
    return this.paperWins(player1, player2);
  } else if (this.scissorsWins(player1, player2)) {
    return this.scissorsWins(player1, player2);
  } else if (this.lizardWins(player1, player2)) {
    return this.lizardWins(player1, player2);
  } else if (this.spockWins(player1, player2)) {
    return this.spockWins(player1, player2);
  }
};

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

Game.prototype.spockWins = function(player1, player2) {
  if (player1 === "Spock") {
  }
  if (player2 === "rock" || player2 === "scissors") {
    return player1 + " wins!";
  } else if (player2 === "Spock") {
    if (player1 === "rock" || player1 === "scissors") {
      return player2 + " wins!";
    }
  }
};
