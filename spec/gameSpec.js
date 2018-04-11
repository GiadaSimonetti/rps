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

  it("returns 'It's a draw!' when player1 is equal player2 ('rock' - 'rock')", function() {
    expect(game.matchDraw("rock", "rock")).toEqual("It's a draw!");
  });

  it("returns 'It's a draw!' when  player1 is equal player2 ('paper'-'paper')", function() {
    expect(game.matchDraw("paper", "paper")).toEqual("It's a draw!");
  });

  it("returns 'It's a draw!' when player1 is equal player2 ('scissors'-'scissors')", function() {
    expect(game.matchDraw("scissors", "scissors")).toEqual("It's a draw!");
  });

  it("returns 'It's a draw!' when player1 is equal player2 ('lizard'-'lizard')", function() {
    expect(game.matchDraw("lizard", "lizard")).toEqual("It's a draw!");
  });

  it("returns 'It's a draw!' when player1 is equal player2 ('Spock'-'Spock')", function() {
    expect(game.matchDraw("Spock", "Spock")).toEqual("It's a draw!");
  });

  // it("returns 'paper wins' when 'rock'-'paper'", function() {
  //   expect(game.match("rock", "paper")).toEqual("paper wins!");
  // });
  //
  // it("returns 'rock wins' when 'rock'-'scissors'", function() {
  //   expect(game.match("rock", "scissors")).toEqual("rock wins!");
  // });
  //
  // it("returns 'rock wins' when 'rock'-'lizard'", function() {
  //   expect(game.match("rock", "scissors")).toEqual("rock wins!");
  // });
  //
  // it("returns 'Spock wins' when 'rock'-'Spock'", function() {
  //   expect(game.match("rock", "Spock")).toEqual("Spock wins!");
  // });
  //
  // it("returns 'paper wins' when 'paper'-'rock'", function() {
  //   expect(game.match("paper", "rock")).toEqual("paper wins!");
  // });
  //
  // it("returns 'scissors wins' when 'paper'-'scissors'", function() {
  //   expect(game.match("paper", "scissors")).toEqual("scissors wins!");
  // });
  //
  // it("returns 'rock wins' when 'scissors'-'rock'", function() {
  //   expect(game.match("scissors", "rock")).toEqual("rock wins!");
  // });
  //
  // it("returns 'scissors wins' when 'scissors'-'paper'", function() {
  //   expect(game.match("scissors", "paper")).toEqual("scissors wins!");
  // });
});
