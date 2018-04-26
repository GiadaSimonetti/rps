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

  it("returns 'paper wins' when 'paper'-'rock'", function() {
    player1 = jasmine.createSpyObj("player1", { move: "paper" });
    player2 = jasmine.createSpyObj("player2", { move: "rock" });
    expect(game.result(player1.move(), player2.move())).toEqual("paper wins!");
  });

  it("returns 'paper wins' when 'paper'-'Spock'", function() {
    player1 = jasmine.createSpyObj("player1", { move: "paper" });
    player2 = jasmine.createSpyObj("player2", { move: "Spock" });
    expect(game.result(player1.move(), player2.move())).toEqual("paper wins!");
  });

  it("returns 'paper wins' when 'rock'-'paper'", function() {
    player1 = jasmine.createSpyObj("player1", { move: "rock" });
    player2 = jasmine.createSpyObj("player2", { move: "paper" });
    expect(game.result(player1.move(), player2.move())).toEqual("paper wins!");
  });

  it("returns 'paper wins' when 'Spock'-'paper'", function() {
    player1 = jasmine.createSpyObj("player1", { move: "Spock" });
    player2 = jasmine.createSpyObj("player2", { move: "paper" });
    expect(game.result(player1.move(), player2.move())).toEqual("paper wins!");
  });

  it("returns 'scissors wins' when 'scissors'-'paper'", function() {
    player1 = jasmine.createSpyObj("player1", { move: "scissors" });
    player2 = jasmine.createSpyObj("player2", { move: "paper" });
    expect(game.result(player1.move(), player2.move())).toEqual(
      "scissors wins!"
    );
  });

  it("returns 'scissors wins' when 'scissors'-'lizard'", function() {
    player1 = jasmine.createSpyObj("player1", { move: "scissors" });
    player2 = jasmine.createSpyObj("player2", { move: "lizard" });
    expect(game.result(player1.move(), player2.move())).toEqual(
      "scissors wins!"
    );
  });

  it("returns 'scissors wins' when 'paper'-'scissors'", function() {
    player1 = jasmine.createSpyObj("player1", { move: "paper" });
    player2 = jasmine.createSpyObj("player2", { move: "scissors" });
    expect(game.result(player1.move(), player2.move())).toEqual(
      "scissors wins!"
    );
  });

  it("returns 'scissors wins' when 'lizard'-'scissors'", function() {
    player1 = jasmine.createSpyObj("player1", { move: "lizard" });
    player2 = jasmine.createSpyObj("player2", { move: "scissors" });
    expect(game.result(player1.move(), player2.move())).toEqual(
      "scissors wins!"
    );
  });

  it("returns 'lizard wins' when 'lizard'-'paper'", function() {
    player1 = jasmine.createSpyObj("player1", { move: "lizard" });
    player2 = jasmine.createSpyObj("player2", { move: "paper" });
    expect(game.result(player1.move(), player2.move())).toEqual("lizard wins!");
  });

  it("returns 'lizard wins' when 'lizard'-'Spock'", function() {
    player1 = jasmine.createSpyObj("player1", { move: "lizard" });
    player2 = jasmine.createSpyObj("player2", { move: "Spock" });
    expect(game.result(player1.move(), player2.move())).toEqual("lizard wins!");
  });

  it("returns 'lizard wins' when 'paper'-'lizard'", function() {
    player1 = jasmine.createSpyObj("player1", { move: "paper" });
    player2 = jasmine.createSpyObj("player2", { move: "lizard" });
    expect(game.result(player1.move(), player2.move())).toEqual("lizard wins!");
  });

  it("returns 'lizard wins' when 'Spock'-'lizard'", function() {
    player1 = jasmine.createSpyObj("player1", { move: "Spock" });
    player2 = jasmine.createSpyObj("player2", { move: "lizard" });
    expect(game.result(player1.move(), player2.move())).toEqual("lizard wins!");
  });

  it("returns 'Spock wins' when 'Spock'-'rock'", function() {
    player1 = jasmine.createSpyObj("player1", { move: "Spock" });
    player2 = jasmine.createSpyObj("player2", { move: "rock" });
    expect(game.result(player1.move(), player2.move())).toEqual("Spock wins!");
  });

  it("returns 'Spock wins' when 'Spock'-'scissors'", function() {
    player1 = jasmine.createSpyObj("player1", { move: "Spock" });
    player2 = jasmine.createSpyObj("player2", { move: "scissors" });
    expect(game.result(player1.move(), player2.move())).toEqual("Spock wins!");
  });

  // it("returns 'Spock wins' when 'rock'-'Spock'", function() {
  //   player1 = jasmine.createSpyObj("player1", { move: "rock" });
  //   player2 = jasmine.createSpyObj("player2", { move: "Spock" });
  //   expect(game.result(player1.move(), player2.move())).toEqual("Spock wins!");
  // });
  //
  // it("returns 'Spock wins' when 'scissors'-'Spock'", function() {
  //   player1 = jasmine.createSpyObj("player1", { move: "scissors" });
  //   player2 = jasmine.createSpyObj("player2", { move: "Spock" });
  //   expect(game.result(player1.move(), player2.move())).toEqual("Spock wins!");
  // });
});
