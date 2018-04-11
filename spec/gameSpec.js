describe("Feature test", function() {
  var game;
  var player;

  beforeEach(function() {
    game = new Game();
    player = new Player(move);
  });

  it("returns player move", function() {
    expect(player.move).toEqual("paper");
  });
});
