let game = new Game();
let movesArray = ["rock", "paper", "scissors", "lizard", "spock"];
let move2 = movesArray[Math.floor(Math.random()* movesArray.length)];

document.getElementById("submit-btn1").addEventListener("click", () => {
  let move1 = document.getElementById("input-player1").value;
  let response = game.result(move1, move2);

  document.getElementById("player1").innerHTML =
  `<i class="fa fa-hand-` + move1 + `-o" aria-hidden="true"></i>`;
  document.getElementById("submit-btn2").addEventListener("click", () => {

    document.getElementById("player2").innerHTML =
    `VS <i class="fa fa-hand-` + move2 + `-o" aria-hidden="true"></i>`;
    document.getElementById("match-result").innerHTML = response;

  });
});
