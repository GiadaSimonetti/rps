describe("Feature test", function() {
  var game;
  var playerOne;
  var playerTwo;

  beforeEach(function() {
    game = new Game();
    playerOne = new PlayerOne();
    playerTwo = new PlayerTwo();
  });

  it("returns player one move", function() {
    expect(playerOne.move).toEqual("paper");
  });
});
