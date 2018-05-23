let game = new Game();
let movesArray = ["rock", "paper", "scissors", "lizard", "spock"];
let move2 = movesArray[Math.floor(Math.random()* movesArray.length)];

document.getElementById("submit-btn1").addEventListener("click", () => {
  let move1 = document.getElementById("input-player1").value;
  let response = game.result(move1, move2);
  let p1 = document.getElementById("player1");
  let p2 = document.getElementById("player2");
  let matchResult = document.getElementById("match-result");

  p1.innerHTML =
  `<i class="fa fa-hand-` + move1 + `-o" aria-hidden="true"></i> `;
  p1.style.fontSize= "100px";

  document.getElementById("submit-btn2").addEventListener("click", () => {

    p2.innerHTML =
    `VS <i class="fa fa-hand-` + move2 + `-o" aria-hidden="true"></i>`;
    p2.style.fontSize= "100px";
    matchResult.innerHTML = response;
    matchResult.style.fontSize= "50px";
    document.getElementById("submit-btn2").style.visibility = "hidden";
    document.getElementById("submit-btn1").style.visibility = "hidden";
    document.getElementById("input-player1").style.visibility = "hidden";

  });
});
