
if (typeof sessionStorage.guessesLeft == 'undefined'){
  sessionStorage.guessesLeft = 10;
}

if (typeof sessionStorage.secretNumber == 'undefined'){
  sessionStorage.secretNumber = Math.floor(Math.random()*100) + 1;
}
$(document).ready(function() {
  $('form').submit(function(e) {
    e.preventDefault();
    //alert("Hello world");
    if($("input:first").val() == sessionStorage.secretNumber.toString()){
      // call success function
    } else if($("input:first").val() > sessionStorage.secretNumber.toString()){
      $("div#infoUpdate").append("Too Damn High!");
      $("div#infoUpdate").show("slow");
      return true;
    } else {
      $("div#infoUpdate").append("Too Damn Low!");
      $("div#infoUpdate").show("slow");
      return true;
    }
    
    return false;
  });
});

$('form#guessTheNumber').submit(function(e) {
  e.preventDefault();
  // if($("input:first").val() == sessionStorage.secretNumber.toString()){
  //   $("div#infoUpdate").append("Correct!").show("slow");
  //   return true;
  // } else {
  //   $("div#infoUpdate").append("Incorrect!").show("slow");
  //   return false;
  // }
  alert("testing...");
  $("div#infoUpdate").append("Incorrect");
  $("div#infoUpdate").show("slow");
  return false;
});

var highScores = new Array([9, "HarryJamesPotter"], [3, "ZedCthulhu"], [2, "NearlyDied"]);

$(function() {
  updateScore(sessionStorage.guessesLeft);
  populateHighScores(highScores);
});

function populateHighScores(scores) {
  for (var i = 0; i < scores.length; ++i) {
    $('div#highScores').append("<p>" + scores[i][0] + " " + scores[i][1] + "</p>");
  }
}

function updateScore(score) {
  $('h2#score span#guessesLeft').append(score);
}

function updateHelp(message){
  // if($("div#infoUpdate").is(":hidden")){
  //   $('div#infoUpdate').append(message);
  //   $("div#infoUpdate").slideDown("slow");
  // } else {
  //   $("div#infoUpdate").hide();
  // }

  // $("form#guessTheNumber").submit(function() {
  //   $("div#infoUpdate").show("slow");
  // });
  // alert("pausing...");

  // $("div#infoUpdate").append("Incorrect");
  // $("div#infoUpdate").show("slow");

  $("form#guessTheNumber").submit(function () {
    if($("input:first").val() == sessionStorage.secretNumber.toString()){
      $("div#infoUpdate").append("Correct!").show("slow");
      return true;
    } else {
      $("div#infoUpdate").append("Incorrect!").show("slow");
      return false;
    }
  });

  return false;
}

function updateRemainingGuesses(){
  var userGuess = parseInt(document.getElementById('guessTheNumber').guess.value);
  updateHelp("Incorrect!");
  sessionStorage.guessesLeft = sessionStorage.guessesLeft - 1;
  updateScore(sessionStorage.guessesLeft);
  if(userGuess == parseInt(sessionStorage.secretNumber)){
    alert("You guessed correctly!");
  } else {
    updateHelp("Incorrect!");
  }
  //alert(sessionStorage.guessesLeft);
}