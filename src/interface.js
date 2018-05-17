let game = new Game();

document.getElementById("submit-btn").addEventListener("click", () => {
  let move1 = document.getElementById("input-player1").value;
  let move2 = document.getElementById("input-player2").value;
  let response = game.result(move1, move2);

  document.getElementById("player1").innerHTML =
    `<i class="fa fa-hand-` + move1 + `-o" aria-hidden="true"></i> VS `;
  document.getElementById("player2").innerHTML =
    `<i class="fa fa-hand-` + move2 + `-o" aria-hidden="true"></i>`;
  document.getElementById("match-result").innerHTML = response;

});
