function PlayerOne(move) {
  this.move = "scissor";
}

PlayerOne.prototype.showMove = function(move) {
  return move;
};
