function Game() {}

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
  if (player1 === "rock" && (player2 === "scissors" || player2 === "lizard")) {
    return player1 + " wins!";
  } else if (
    player2 === "rock" &&
    (player1 === "scissors" || player1 === "lizard")
  ) {
    return player2 + " wins!";
  }
};

Game.prototype.paperWins = function(player1, player2) {
  if (player1 === "paper" && (player2 === "rock" || player2 === "spock")) {
    return player1 + " wins!";
  } else if (
    player2 === "paper" &&
    (player1 === "rock" || player1 === "spock")
  ) {
    return player2 + " wins!";
  }
};

Game.prototype.scissorsWins = function(player1, player2) {
  if (player1 === "scissors" && (player2 === "paper" || player2 === "lizard")) {
    return player1 + " wins!";
  } else if (
    player2 === "scissors" &&
    (player1 === "paper" || player1 === "lizard")
  ) {
    return player2 + " wins!";
  }
};

Game.prototype.lizardWins = function(player1, player2) {
  if (player1 === "lizard" && (player2 === "paper" || player2 === "spock")) {
    return player1 + " wins!";
  } else if (
    player2 === "lizard" &&
    (player1 === "paper" || player1 === "spock")
  ) {
    return player2 + " wins!";
  }
};

Game.prototype.spockWins = function(player1, player2) {
  if (player1 === "spock" && (player2 === "rock" || player2 === "scissors")) {
    return player1 + " wins!";
  } else if (
    player2 === "spock" &&
    (player1 === "rock" || player1 === "scissors")
  ) {
    return player2 + " wins!";
  }
};

// class Game{
//   constructor(){
//     this.moves = [
//       { paper: scissors },
//       { rock: paper },
//       { lizard: rock },
//       { spock: lizard },
//       { scissors: spock },
//       { lizard: scissors },
//       { paper: lizard },
//       { spock: paper },
//       { rock: spock },
//       { scissors: rock }
//     ];
//   }
//
//   result(){
//   for (var i = 0; i < this.moves.length; i++) {
//       if (this.outcomes[i].player1 == player1 && this.outcomes[i].player2 == player2) {
//         return 'Player ' + this.outcomes[i].winner + ' wins!'
//       }
//     }
//   return 'Its a draw!'
//   }
// };
