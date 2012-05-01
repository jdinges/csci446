
if (typeof sessionStorage.guessesLeft == 'undefined'){
  sessionStorage.guessesLeft = 10;
  console.log("Creating guessesLeft variable...");
}

if (typeof sessionStorage.secretNumber == 'undefined'){
  sessionStorage.secretNumber = Math.floor(Math.random()*100) + 1;
}

//var highScores = new Array([9, "HarryJamesPotter"], [3, "ZedCthulhu"], [2, "NearlyDied"]);
if(typeof localStorage.highScores == 'undefined'){
  var ary = new Array([9, "HarryJamesPotter"], [3, "ZedCthulhu"], [2, "NearlyDied"]);
  //var ary = new Array("9","HarryJamesPotter","3","ZedCthulhu","2","NearlyDied");
  localStorage['highScores']=JSON.stringify(ary);
}

$(function() {
  
  populateHighScores(localStorage.highScores);
  if(typeof sessionStorage.previousGuess != 'undefined'){
    // Decrement logic and function

    //sessionStorage.guessesLeft = sessionStorage.guessesLeft - 1;
    var lastGuess = parseInt(sessionStorage.previousGuess);
    var correctAnswer = parseInt(sessionStorage.secretNumber);
    if(lastGuess == correctAnswer){
      //alert("CORRECT!");
      console.log("correct guess ",lastGuess);
      $("div#infoUpdate").append("Correct!");
      $("div#infoUpdate").show("slow");
      // append to array
      var userName = prompt("Enter your name, bitch.","Jon Snow");
      if(userName != null && userName != ""){
        
        //var tempArray = makeArrayFromJSON(localStorage.highScores);
        var tempArray = JSON.parse(localStorage.highScores);
        tempArray.push([parseInt(sessionStorage.guessesLeft.toString())+1, userName.toString()]);
        localStorage['highScores'] = JSON.stringify(tempArray);

        //populateHighScores(localStorage.highScores);
      }
      restart("HOLY FUCKING EXPLODING SEALS, YOU WON! PLAY AGAIN, BITCH.");
    } else if(lastGuess > correctAnswer){
      //alert("Too Damn High!");
      $("div#infoUpdate").append("Too Damn HIGH!");
      $("div#infoUpdate").show("slow");
    } else {
      //alert("Too Damn LOW");
      $("div#infoUpdate").append("Too Damn LOW!");
      $("div#infoUpdate").show("slow");
    }

  }
updateScore(sessionStorage.guessesLeft);
sessionStorage.guessesLeft = sessionStorage.guessesLeft - 1;

});

$(document).ready(function() {
  $('form#guessTheNumber').submit(function(e) {
    var userGuess = parseInt(document.getElementById('guessTheNumber').guess.value.toString());
    console.log("userGuess = ",userGuess);
    if((userGuess < 0) || (userGuess > 100)){
      // $("div#infoUpdate").append("Number must be between 0 and 100!")
      // $("div#infoUpdate").show("slow");
      //alert("Number must be between 0 and 100!");
    }
    sessionStorage.previousGuess = userGuess;

  });
});

function compare(x,y){
  return y[0] - x[0];
}


function populateHighScores(scores) {
  //console.log(localStorage.highScores);
  //console.log(scores);
  scores = JSON.parse(scores);
  scores.sort(compare);
  //scores = makeArrayFromJSON(scores);

  for (var i = 0; i < scores.length; ++i) {
    console.log(scores[i]);
    $('div#highScores').append("<p>" + scores[i][0] + " " + scores[i][1] + "</p>");
  }
}

function makeArrayFromJSON(ary){

  var commaCounter = true;
  var tempNumberStr = "";
  var tempNameStr = "";
  var returnArray = new Array();
  for(var i = 0; i < ary.length; ++i) {
    var element = ary[i];

    if((element == ",") || (i == ary.length - 1)){
      // flip comma bit
      if(commaCounter){
        commaCounter = false;
        tempNumberStr = parseInt(tempNumberStr);
      } else {
        commaCounter = true;
        returnArray.push([tempNumberStr,tempNameStr]);
        console.log("pushing [",tempNumberStr,",",tempNameStr,"]");
        tempNameStr = "";
        tempNumberStr = "";
      }


    } else if(commaCounter){
      tempNumberStr = tempNumberStr + element;
    } else {
      tempNameStr = tempNameStr + element;
    }
  }
  return returnArray;
}

function updateScore(score) {

  if(score > 0){
    $('h2#score span#guessesLeft').append(score);
  } else {
    restart("You have run out of guesses. PLAY AGAIN, MOTHERFUCKER!");
  }
}

function restart(message){
  sessionStorage.clear();
  window.location.reload();
  console.log("restarting...");
  if (typeof sessionStorage.guessesLeft == 'undefined'){
    sessionStorage.guessesLeft = 11;
    console.log("Creating guessesLeft variable...");
  }
  alert(message);
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

// function checkInput(input){
//   if(input < 1 || input > 100){

//   }
// }

function updateRemainingGuesses(){
  //var userGuess = parseInt(document.getElementById('guessTheNumber').guess.value);

  sessionStorage.guessesLeft = sessionStorage.guessesLeft - 1;
  updateScore(sessionStorage.guessesLeft);

}