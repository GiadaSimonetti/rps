describe("Feature test", function() {
  var player;

  beforeEach(function() {
    player = new Player();
  });

  it("returns player one move", function() {
    expect(player.move).toBe("paper");
  });
});
