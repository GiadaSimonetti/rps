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
  if (player1.currentMove === player2.currentMove) {
    return "It's a draw!";
  }
};

Game.prototype.rockWins = function(player1, player2) {
  if (player1.currentMove === "rock") {
  }
  if (player2.currentMove === "scissors" || player2.currentMove === "lizard") {
    return player1.currentMove + " wins!";
  } else if (player2.currentMove === "rock") {
    if (
      player1.currentMove === "scissors" ||
      player1.currentMove === "lizard"
    ) {
      return player2.currentMove + " wins!";
    }
  }
};

Game.prototype.paperWins = function(player1, player2) {
  if (player1.currentMove === "paper") {
  }
  if (player2.currentMove === "rock" || player2.currentMove === "Spock") {
    return player1.currentMove + " wins!";
  } else if (player2.currentMove === "paper") {
    if (player1.currentMove === "rock" || player1.currentMove === "Spock") {
      return player2.currentMove + " wins!";
    }
  }
};

Game.prototype.scissorsWins = function(player1, player2) {
  if (player1.currentMove === "scissors") {
  }
  if (player2.currentMove === "paper" || player2.currentMove === "lizard") {
    return player1.currentMove + " wins!";
  } else if (player2.currentMove === "scissors") {
    if (player1.currentMove === "paper" || player1.currentMove === "lizard") {
      return player2.currentMove + " wins!";
    }
  }
};

Game.prototype.lizardWins = function(player1, player2) {
  if (player1.currentMove === "lizard") {
  }
  if (player2.currentMove === "paper" || player2.currentMove === "Spock") {
    return player1.currentMove + " wins!";
  } else if (player2.currentMove === "lizard") {
    if (player1.currentMove === "paper" || player1.currentMove === "Spock") {
      return player2.currentMove + " wins!";
    }
  }
};

Game.prototype.spockWins = function(player1, player2) {
  if (player1.currentMove === "Spock") {
  }
  if (player2.currentMove === "rock" || player2.currentMove === "scissors") {
    return player1.currentMove + " wins!";
  } else if (player2.currentMove === "Spock") {
    if (player1.currentMove === "rock" || player1.currentMove === "scissors") {
      return player2.currentMove + " wins!";
    }
  }
};
