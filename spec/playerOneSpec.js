describe("Feature test", function() {
  var playerOne;

  beforeEach(function() {
    playerOne = new PlayerOne();
  });

  it("sets player one move", function() {
    expect(playerOne.move).toEqual("scissor");
  });

  // it("returns player one move", function() {
  //   expect(playerOne.showMove(move)).toEqual("scissor");
  // });
});
