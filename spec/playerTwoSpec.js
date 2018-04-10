describe("Feature test", function() {
  var playerTwo;

  beforeEach(function() {
    playerTwo = new PlayerTwo();
  });

  it("returns player two move", function() {
    expect(playerTwo.move).toBe("rock");
  });
});
