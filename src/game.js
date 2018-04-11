function Game(player) {}

Game.prototype.matchDraw = function(player1, player2) {
  if (player1 === player2) {
    return "It's a draw!";
  }
};
