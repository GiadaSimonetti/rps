describe("Feature test", function() {
  var game;
  var player;

  beforeEach(function() {
    game = new Game();
    player = new Player("paper");
  });

  it("returns player's move", function() {
    expect(player.currentMove).toEqual("paper");
  });

  it("returns 'It's a draw!' when 'rock'-'rock'", function() {
    // console.log(game.match("rock", "rock"));
    expect(game.match("rock", "rock")).toEqual("It's a draw!");
  });
});
