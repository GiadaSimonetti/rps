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
    expect(game.match("rock", "rock")).toEqual("It's a draw!");
  });

  it("returns 'paper wins' when 'rock'-'paper'", function() {
    expect(game.match("rock", "paper")).toEqual("paper wins!");
  });

  it("returns 'rock wins' when 'rock'-'scissors'", function() {
    expect(game.match("rock", "scissors")).toEqual("rock wins!");
  });

  it("returns 'paper wins' when 'paper'-'rock'", function() {
    expect(game.match("paper", "rock")).toEqual("paper wins!");
  });

  it("returns 'It's a draw!' when 'paper'-'paper'", function() {
    expect(game.match("paper", "paper")).toEqual("It's a draw!");
  });

  it("returns 'scissors wins' when 'paper'-'scissors'", function() {
    expect(game.match("paper", "scissors")).toEqual("scissors wins!");
  });

  it("returns 'rock wins' when 'scissors'-'rock'", function() {
    expect(game.match("scissors", "rock")).toEqual("rock wins!");
  });

  it("returns 'scissors wins' when 'scissors'-'paper'", function() {
    expect(game.match("scissors", "paper")).toEqual("scissors wins!");
  });

  it("returns 'It's a draw!' when 'scissors'-'scissors'", function() {
    expect(game.match("scissors", "scissors")).toEqual("It's a draw!");
  });
});
