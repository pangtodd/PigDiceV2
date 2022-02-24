// business logic

function Player() {
  this.score = 0;
  this.turn = false;
}
function win() {
  if (player1.score || player2.score > 19){
  alert('winner')
  }
}

// Player.score = 0

function rollDice() {
  roll = Math.floor(Math.random() * 6) + 1;

  switch(roll) {
    case('1',1):
      Player.score = 0;
      Player.turn = false;
      break;
    case(roll):
      Player.score=(Player.score + roll)
      break;
  }
  win()
  
  console.log("current roll: "+roll)
  console.log("overall Score: "+Player.score)
}

player1 = new Player();
player2 = new Player();

Player.prototype.playerTurn=function () {
  if (player1.turn === true){
    player1.turn === false;
    player2.turn === true;
  } else {
    player1.turn === true;
    player2.turn === false;
  }
}


function Game() {
  this.playerOne = new Player();
  this.playerTwo = new Player();
  // this.players = playerOne, playerTwo;
  this.totalScore = totalScore;
  this.turn = turn; // roll 1- switch turn and lose points
  // this.winner = winner;
  }



  