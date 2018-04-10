describe("Feature test", function() {
  var playerOne;

  beforeEach(function() {
    playerOne = new PlayerOne();
  });

  describe("index", function() {
    it("returns the move", function() {
      expect(playerOne.move).toBe("scissor");
    });
  });
});
