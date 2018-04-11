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

  it("returns 'rock wins' when 'rock'-'scissors'", function() {
    expect(game.rockWins("rock", "scissors")).toEqual("rock wins!");
  });

  it("returns 'rock wins' when 'rock'-'lizard'", function() {
    expect(game.rockWins("rock", "lizard")).toEqual("rock wins!");
  });

  it("returns 'rock wins' when 'scissors'-'rock'", function() {
    expect(game.rockWins("scissors", "rock")).toEqual("rock wins!");
  });

  it("returns 'rock wins' when 'lizard'-'rock'", function() {
    expect(game.rockWins("lizard", "rock")).toEqual("rock wins!");
  });

  it("returns 'paper wins' when 'paper'-'rock'", function() {
    expect(game.paperWins("paper", "rock")).toEqual("paper wins!");
  });

  it("returns 'paper wins' when 'paper'-'Spock'", function() {
    expect(game.paperWins("paper", "Spock")).toEqual("paper wins!");
  });

  it("returns 'paper wins' when 'rock'-'paper'", function() {
    expect(game.paperWins("rock", "paper")).toEqual("paper wins!");
  });

  it("returns 'paper wins' when 'Spock'-'paper'", function() {
    expect(game.paperWins("Spock", "paper")).toEqual("paper wins!");
  });

  it("returns 'scissors wins' when 'scissors'-'paper'", function() {
    expect(game.scissorsWins("scissors", "paper")).toEqual("scissors wins!");
  });

  it("returns 'scissors wins' when 'scissors'-'lizard'", function() {
    expect(game.scissorsWins("scissors", "lizard")).toEqual("scissors wins!");
  });

  it("returns 'scissors wins' when 'paper'-'scissors'", function() {
    expect(game.scissorsWins("paper", "scissors")).toEqual("scissors wins!");
  });

  it("returns 'scissors wins' when 'lizard'-'scissors'", function() {
    expect(game.scissorsWins("lizard", "scissors")).toEqual("scissors wins!");
  });

  it("returns 'lizard wins' when 'lizard'-'paper'", function() {
    expect(game.lizardWins("lizard", "paper")).toEqual("lizard wins!");
  });

  it("returns 'lizard wins' when 'lizard'-'Spock'", function() {
    expect(game.lizardWins("lizard", "Spock")).toEqual("lizard wins!");
  });

  it("returns 'lizard wins' when 'paper'-'lizard'", function() {
    expect(game.lizardWins("paper", "lizard")).toEqual("lizard wins!");
  });

  it("returns 'lizard wins' when 'lizard'-'Spock'", function() {
    expect(game.lizardWins("lizard", "Spock")).toEqual("lizard wins!");
  });

  it("returns 'Spock wins' when 'Spock'-'rock'", function() {
    expect(game.spockWins("Spock", "rock")).toEqual("Spock wins!");
  });

  it("returns 'Spock wins' when 'Spock'-'scissors'", function() {
    expect(game.spockWins("Spock", "scissors")).toEqual("Spock wins!");
  });

  it("returns 'Spock wins' when 'rock'-'Spock'", function() {
    expect(game.spockWins("rock", "Spock")).toEqual("Spock wins!");
  });

  it("returns 'Spock wins' when 'Spock'-'scissors'", function() {
    expect(game.spockWins("Spock", "scissors")).toEqual("Spock wins!");
  });
});
