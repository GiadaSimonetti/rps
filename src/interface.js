let game = new Game();
let movesArray = ["rock", "paper", "scissors", "lizard", "spock"];
let move2 = movesArray[Math.floor(Math.random()* movesArray.length)];
let userMoves = document.getElementsByClassName("astext");

document.getElementById("reset-btn").style.visibility = "hidden";
document.getElementById("submit-btn2").style.visibility = "hidden";
document.getElementById("second-instruction").style.visibility = "hidden";

[].forEach.call(userMoves, function (move1) {
  move1.addEventListener("click", function () {

    let response = game.result(this.value, move2);
    let p1 = document.getElementById("player1");
    let p2 = document.getElementById("player2");
    let matchResult = document.getElementById("match-result");

    p1.innerHTML =
    `<i class="fa fa-hand-` + this.value + `-o" aria-hidden="true"></i> `;
    p1.style.fontSize= "100px";
    document.getElementById("second-instruction").style.visibility = "visible";
    document.getElementById("submit-btn2").style.visibility = "visible";


    document.getElementById("submit-btn2").addEventListener("click", () => {

      p2.innerHTML =
      `VS <i class="fa fa-hand-` + move2 + `-o" aria-hidden="true"></i>`;
      p2.style.fontSize= "100px";

      matchResult.innerHTML = response;
      matchResult.style.fontSize= "50px";
      document.getElementById("submit-btn2").style.display = "none";
      document.getElementById("player-choices").style.display = "none";
      document.getElementById("second-instruction").style.display = "none";
      document.getElementById("reset-btn").style.visibility = "visible";

    });

  }, false);
});
