
if (typeof sessionStorage.guessesLeft == 'undefined'){
  sessionStorage.guessesLeft = 10;
}

if (typeof sessionStorage.secretNumber == 'undefined'){
  sessionStorage.secretNumber = Math.floor(Math.random()*100) + 1;
}

var highScores = new Array([9, "HarryJamesPotter"], [3, "ZedCthulhu"], [2, "NearlyDied"]);

$(function() {
  //sessionStorage.guessesLeft = 10;
  updateScore(sessionStorage.guessesLeft);
  populateHighScores(highScores);
  //guessesLeft--;

  //alert(guessesLeft);
});

function populateHighScores(scores) {
  for (var i = 0; i < scores.length; ++i) {
    $('div#highScores').append("<p>" + scores[i][0] + " " + scores[i][1] + "</p>");
  }
}

function updateScore(score) {
  $('h2#score span#guessesLeft').append(score);
}

function updateRemainingGuesses(){
  var userGuess = document.getElementById('guessTheNumber').guess.value;
  console.log(userGuess);

  if(userGuess == parseInt(sessionStorage.secretNumber)){
    alert("You guessed correctly!");
  }
  sessionStorage.guessesLeft = sessionStorage.guessesLeft - 1;
  updateScore(sessionStorage.guessesLeft);
  //alert(sessionStorage.guessesLeft);
}