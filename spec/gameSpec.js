describe("Feature test", function() {
  var game;
  var player;

  beforeEach(function() {
    game = new Game();
  });

  it("returns 'It's a draw!' when player1 is equal player2 ('rock' - 'rock')", function() {
    player1 = jasmine.createSpyObj("player1", { move: "rock" });
    player2 = jasmine.createSpyObj("player2", { move: "rock" });
    expect(game.result(player1.move(), player2.move())).toEqual("It's a draw!");
  });

  it("returns 'It's a draw!' when player1 is equal player2 ('paper' - 'paper')", function() {
    player1 = jasmine.createSpyObj("player1", { move: "paper" });
    player2 = jasmine.createSpyObj("player2", { move: "paper" });
    expect(game.result(player1.move(), player2.move())).toEqual("It's a draw!");
  });

  it("returns 'It's a draw!' when player1 is equal player2 ('scissors' - 'scissors')", function() {
    player1 = jasmine.createSpyObj("player1", { move: "scissors" });
    player2 = jasmine.createSpyObj("player2", { move: "scissors" });
    expect(game.result(player1.move(), player2.move())).toEqual("It's a draw!");
  });

  it("returns 'It's a draw!' when player1 is equal player2 ('lizard' - 'lizard')", function() {
    player1 = jasmine.createSpyObj("player1", { move: "lizard" });
    player2 = jasmine.createSpyObj("player2", { move: "lizard" });
    expect(game.result(player1.move(), player2.move())).toEqual("It's a draw!");
  });

  it("returns 'It's a draw!' when player1 is equal player2 ('Spock' - 'Spock')", function() {
    player1 = jasmine.createSpyObj("player1", { move: "Spock" });
    player2 = jasmine.createSpyObj("player2", { move: "Spock" });
    expect(game.result(player1.move(), player2.move())).toEqual("It's a draw!");
  });

  it("returns 'rock wins!' when 'rock'-'scissors' ('rock' - 'scissors')", function() {
    player1 = jasmine.createSpyObj("player1", { move: "rock" });
    player2 = jasmine.createSpyObj("player2", { move: "scissors" });
    expect(game.result(player1.move(), player2.move())).toEqual("rock wins!");
  });

  it("returns 'rock wins!' when 'rock'-'lizard' ('rock' - 'lizard')", function() {
    player1 = jasmine.createSpyObj("player1", { move: "rock" });
    player2 = jasmine.createSpyObj("player2", { move: "lizard" });
    expect(game.result(player1.move(), player2.move())).toEqual("rock wins!");
  });

  it("returns 'rock wins!' when 'scissors'-'rock' ('rock' - 'scissors')", function() {
    player1 = jasmine.createSpyObj("player1", { move: "scissors" });
    player2 = jasmine.createSpyObj("player2", { move: "rock" });
    expect(game.result(player1.move(), player2.move())).toEqual("rock wins!");
  });

  it("returns 'rock wins!' when 'lizard'-'rock' ('rock' - 'lizard')", function() {
    player1 = jasmine.createSpyObj("player1", { move: "lizard" });
    player2 = jasmine.createSpyObj("player2", { move: "rock" });
    expect(game.result(player1.move(), player2.move())).toEqual("rock wins!");
  });

  // it("returns 'rock wins' when 'scissors'-'rock'", function() {
  //   spyOn(game, "rockWins").and.returnValue("rock wins!");
  //   expect(game.rockWins("scissors", "rock")).toEqual("rock wins!");
  // });
  //
  // it("returns 'rock wins' when 'lizard'-'rock'", function() {
  //   spyOn(game, "rockWins").and.returnValue("rock wins!");
  //   expect(game.rockWins("lizard", "rock")).toEqual("rock wins!");
  // });

  it("returns 'paper wins' when 'paper'-'rock'", function() {
    spyOn(game, "paperWins").and.returnValue("paper wins!");
    expect(game.paperWins("paper", "rock")).toEqual("paper wins!");
  });

  it("returns 'paper wins' when 'paper'-'Spock'", function() {
    spyOn(game, "paperWins").and.returnValue("paper wins!");
    expect(game.paperWins("paper", "Spock")).toEqual("paper wins!");
  });

  it("returns 'paper wins' when 'rock'-'paper'", function() {
    spyOn(game, "paperWins").and.returnValue("paper wins!");
    expect(game.paperWins("rock", "paper")).toEqual("paper wins!");
  });

  it("returns 'paper wins' when 'Spock'-'paper'", function() {
    spyOn(game, "paperWins").and.returnValue("paper wins!");
    expect(game.paperWins("Spock", "paper")).toEqual("paper wins!");
  });

  it("returns 'scissors wins' when 'scissors'-'paper'", function() {
    spyOn(game, "scissorsWins").and.returnValue("scissors wins!");
    expect(game.scissorsWins("scissors", "paper")).toEqual("scissors wins!");
  });

  it("returns 'scissors wins' when 'scissors'-'lizard'", function() {
    spyOn(game, "scissorsWins").and.returnValue("scissors wins!");
    expect(game.scissorsWins("scissors", "lizard")).toEqual("scissors wins!");
  });

  it("returns 'scissors wins' when 'paper'-'scissors'", function() {
    spyOn(game, "scissorsWins").and.returnValue("scissors wins!");
    expect(game.scissorsWins("paper", "scissors")).toEqual("scissors wins!");
  });

  it("returns 'scissors wins' when 'lizard'-'scissors'", function() {
    spyOn(game, "scissorsWins").and.returnValue("scissors wins!");
    expect(game.scissorsWins("lizard", "scissors")).toEqual("scissors wins!");
  });

  it("returns 'lizard wins' when 'lizard'-'paper'", function() {
    spyOn(game, "lizardWins").and.returnValue("lizard wins!");
    expect(game.lizardWins("lizard", "paper")).toEqual("lizard wins!");
  });

  it("returns 'lizard wins' when 'lizard'-'Spock'", function() {
    spyOn(game, "lizardWins").and.returnValue("lizard wins!");
    expect(game.lizardWins("lizard", "Spock")).toEqual("lizard wins!");
  });

  it("returns 'lizard wins' when 'paper'-'lizard'", function() {
    spyOn(game, "lizardWins").and.returnValue("lizard wins!");
    expect(game.lizardWins("paper", "lizard")).toEqual("lizard wins!");
  });

  it("returns 'lizard wins' when 'lizard'-'Spock'", function() {
    spyOn(game, "lizardWins").and.returnValue("lizard wins!");
    expect(game.lizardWins("lizard", "Spock")).toEqual("lizard wins!");
  });

  it("returns 'Spock wins' when 'Spock'-'rock'", function() {
    spyOn(game, "spockWins").and.returnValue("Spock wins!");
    expect(game.spockWins("Spock", "rock")).toEqual("Spock wins!");
  });

  it("returns 'Spock wins' when 'Spock'-'scissors'", function() {
    spyOn(game, "spockWins").and.returnValue("Spock wins!");
    expect(game.spockWins("Spock", "scissors")).toEqual("Spock wins!");
  });

  it("returns 'Spock wins' when 'rock'-'Spock'", function() {
    spyOn(game, "spockWins").and.returnValue("Spock wins!");
    expect(game.spockWins("rock", "Spock")).toEqual("Spock wins!");
  });

  it("returns 'Spock wins' when 'Spock'-'scissors'", function() {
    spyOn(game, "spockWins").and.returnValue("Spock wins!");
    expect(game.spockWins("Spock", "scissors")).toEqual("Spock wins!");
  });
});
