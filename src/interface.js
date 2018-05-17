// let player1 = new Player(move);
// let player2 = new Player(move);
let game = new Game();

document.getElementById('submit1-btn').addEventListener('click', () => {
  let move = document.getElementById('input-player1').value;
  // let response = raindrops.plingPlangPlong(number);
  document.getElementById('player1').innerHTML =
    `<i class="fa fa-hand-` + move + `-o" aria-hidden="true"></i>`;
});

document.getElementById('submit2-btn').addEventListener('click', () => {
  let move = document.getElementById('input-player2').value;
  document.getElementById('player2').innerHTML =
    `<i class="fa fa-hand-` + move + `-o" aria-hidden="true"></i>`;
});

// document.getElementById("rpssl1").addEventListener("change", () => {
//   let playerOneMove = this.value;
//   console.log(this.value);
//   document.getElementById("player1").innerHTML = playerOneMove;
// });
