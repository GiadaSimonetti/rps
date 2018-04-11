describe("Feature test", function() {
  var player;

  beforeEach(function() {
    player = new Player("paper");
  });

  it("returns player one move", function() {
    expect(player.currentMove).toBe("paper");
  });
});
