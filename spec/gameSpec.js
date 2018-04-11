describe("Feature test", function() {
  var game;
  var player;

  beforeEach(function() {
    game = new Game();
    player = new Player("paper");
  });

  it("returns player move", function() {
    expect(player.currentMove).toEqual("paper");
  });
});
