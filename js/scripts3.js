'strict mode';
// business logic

function Player() {
  this.score = 0;
  this.turn = false;  
}

player1 = new Player(0,true);
player2 = new Player();

Player.prototype.highlight = function(){
  if (player1.turn === true){
    $("#p1up").show();
    $("#p2up").hide();
  } else {
    $("#p2up").show();
    $("#p1up").hide();
  }
}

function win() {
  if (player1.score > 99){
    alert('winner')
  }
  else if (player2.score >99){
    alert("winner")
  }
}

Player.prototype.rollDice=function() {
  roll = Math.floor(Math.random() * 6) + 1;
  if (roll===1){
    this.score = 0;
    this.playerTurn();
  } else {
    this.score += roll;
  }
  document.getElementById('p1Score').innerHTML = "Score: " + player1.score;
  document.getElementById('p2Score').innerHTML = "Score: " + player2.score;
  player1.highlight();
  win();
  console.log("current roll: "+roll)
  console.log("overall Score: "+ this.score)
}

Player.prototype.playerTurn=function () {
  if (player1.turn === true){
    player1.turn = false;
    player2.turn = true;
    player1.highlight();

  } else {
    player1.turn = true;
    player2.turn = false;
    player1.highlight();
  }
}

player1.highlight();

//UI

$(document).ready(function() {
  
  player1.highlight();

  $("button.throwDice").click(function(){
    if (player1.turn===true){
      player1.rollDice();
    } else {
      player2.rollDice();
    }
  });

  $("button.switchPlayer").click(function() {
    if (player1.turn===true){
      player1.playerTurn();
    } else {
      player2.playerTurn();
    }
  });

  $("button.refresh").click(function() {
    location.reload(true);
  });

});