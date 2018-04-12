alert("Hey");

$(document).ready(function() {
  var player1 = new Player
  var player2 = new Player1
  var game = new Game

  $("#btnMovePlayer1").click(function() {
  event.preventDefault();
  var movePlayer1 = $("#rpsls1").val();
  displayMovePlayer1(movePlayer1);
});

    function displayMovePlayer1(move) {
      if (move === "rock") {
        $("#player1").html("<i class='fa fa-hand-rock-o' aria-hidden="true"></i>");
      } else if (move === "paper"){
        $("#player1").html("<i class='fa fa-hand-paper-o' aria-hidden="true"></i>");
      } else if (move === "scissors"){
        $("#player1").html("<i class='fa fa-hand-scissors-o' aria-hidden="true"></i>")
      } else if (move === "lizard"){
        $("#player1").html("<i class='fa-hand-lizard-o' aria-hidden="true"></i>");
      } else {
        $("#player1").html("<i class='fa-hand-spock-o' aria-hidden="true"></i>");
      };

      };
    };

});
