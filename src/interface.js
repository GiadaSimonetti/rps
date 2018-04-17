alert("Hey");

$(document).ready(function() {
  var player1 = new Player();
  var player2 = new Player();
  var game = new Game();

  $("#btnMovePlayer1").click(function() {
  event.preventDefault();
  var movePlayer1 = $("#rpsls1").val();
  displayMovePlayer1(movePlayer1);
});

    function displayMovePlayer1(movePlayer1) {
      if (movePlayer1 === "rock") {
        $("#player1").html("<i class='fa fa-hand-rock-o' aria-hidden="true"></i>");
      } else if (movePlayer1 === "paper"){
        $("#player1").html("<i class='fa fa-hand-paper-o' aria-hidden="true"></i>");
      } else if (movePlayer1 === "scissors"){
        $("#player1").html("<i class='fa fa-hand-scissors-o' aria-hidden="true"></i>");
      } else if (movePlayer1 === "lizard"){
        $("#player1").html("<i class='fa-hand-lizard-o' aria-hidden="true"></i>");
      } else {
        $("#player1").html("<i class='fa-hand-spock-o' aria-hidden="true"></i>");
      };

      };
    };

});
