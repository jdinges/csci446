
if (typeof sessionStorage.guessesLeft == 'undefined'){
  sessionStorage.guessesLeft = 10;
}

if (typeof sessionStorage.secretNumber == 'undefined'){
  sessionStorage.secretNumber = Math.floor(Math.random()*100) + 1;
}
// $(document).ready(function() {
//   $('form').submit(function(e) {
//     e.preventDefault();
//     //alert("Hello world");
//     if($("input:first").val() == sessionStorage.secretNumber.toString()){
//       // call success function
//     } else if($("input:first").val() > sessionStorage.secretNumber.toString()){
//       $("div#infoUpdate").append("Too Damn High!");
//       $("div#infoUpdate").show("slow");
//       updateRemainingGuesses();
//       return true;
//     } else {
//       $("div#infoUpdate").append("Too Damn Low!");
//       $("div#infoUpdate").show("slow");
//       updateRemainingGuesses();
//       return true;
//     }
    
//     return false;
//   });
// });

// $('form#guessTheNumber').submit(function(e) {
//   e.preventDefault();
//   // if($("input:first").val() == sessionStorage.secretNumber.toString()){
//   //   $("div#infoUpdate").append("Correct!").show("slow");
//   //   return true;
//   // } else {
//   //   $("div#infoUpdate").append("Incorrect!").show("slow");
//   //   return false;
//   // }
//   alert("testing...");
//   $("div#infoUpdate").append("Incorrect");
//   $("div#infoUpdate").show("slow");
//   return false;
// });

var highScores = new Array([9, "HarryJamesPotter"], [3, "ZedCthulhu"], [2, "NearlyDied"]);

$(function() {
  if(typeof sessionStorage.previousGuess != 'undefined'){
    // Decrement logic and function
    sessionStorage.guessesLeft = sessionStorage.guessesLeft - 1;
    var lastGuess = parseInt(sessionStorage.previousGuess);
    var correctAnswer = parseInt(sessionStorage.secretNumber);
    if(lastGuess == correctAnswer){
      alert("CORRECT!");
    } else if(lastGuess > correctAnswer){
      alert("Too Damn High!");
    } else {
      alert("Too Damn LOW");
    }
  }
  updateScore(sessionStorage.guessesLeft);
  populateHighScores(highScores);

});

$(document).ready(function() {
  $('form#guessTheNumber').submit(function(e) {
    var userGuess = parseInt(document.getElementById('guessTheNumber').guess.value);
    sessionStorage.previousGuess = userGuess;
    // if(userGuess == sessionStorage.secretNumber.toString()){
    //   // Call success function
    // } else {
      
    // }
  });
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
  //var userGuess = parseInt(document.getElementById('guessTheNumber').guess.value);

  sessionStorage.guessesLeft = sessionStorage.guessesLeft - 1;
  updateScore(sessionStorage.guessesLeft);

}