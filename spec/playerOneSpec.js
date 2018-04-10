describe("Feature test", function() {
  var playerOne;

  beforeEach(function() {
    playerOne = new PlayerOne();
  });

  it("returns player one move", function() {
    expect(playerOne.move).toBe("scissor");
  });
});
