
if (typeof localStorage.guessesLeft == 'undefined'){
  localStorage.guessesLeft = 10;
}

var highScores = new Array([9, "HarryJamesPotter"], [3, "ZedCthulhu"], [2, "NearlyDied"]);

$(function() {
  //localStorage.guessesLeft = 10;
  updateScore(localStorage.guessesLeft);
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
	//guessesLeft = 9;
	//updateScore(guessesLeft);
	//guessesLeft - 1;
	//$();
  localStorage.guessesLeft = localStorage.guessesLeft - 1;
  updateScore(localStorage.guessesLeft);
  alert(localStorage.guessesLeft);
}