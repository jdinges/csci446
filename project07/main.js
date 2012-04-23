guessesLeft = 10;
//localStorage.guessesLeft=10;
var highScores = new Array([9, "HarryJamesPotter"], [3, "ZedCthulhu"], [2, "NearlyDied"]);

$(function() {
  updateScore(guessesLeft);
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
  guessesLeft = guessesLeft - 1;
  updateScore(guessesLeft);
  alert(guessesLeft);
}