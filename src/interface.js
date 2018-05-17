let game = new Game();
let movesArray = ["rock", "paper", "scissors", "lizard", "spock"];
let move1 = movesArray[Math.floor(Math.random()* movesArray.length)];
let move2 = movesArray[Math.floor(Math.random()* movesArray.length)];
let response = game.result(move1, move2);

document.getElementById("submit-btn").addEventListener("click", () => {

  document.getElementById("player1").innerHTML =
    `<i class="fa fa-hand-` + move1 + `-o" aria-hidden="true"></i> VS `;
  document.getElementById("player2").innerHTML =
    `<i class="fa fa-hand-` + move2 + `-o" aria-hidden="true"></i>`;
  document.getElementById("match-result").innerHTML = response;

});
