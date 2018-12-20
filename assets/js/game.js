    $(document).ready(function(){

    var correct = 0;
  
  // hide quiz questions
   $("#questions-display").hide();
   $("#submit-button").hide();
  
   function submitAnswers(){
  
    // store response values
    var q1 = document.forms["questions-form"]["q1"].value;
    var q2 = document.forms["questions-form"]["q2"].value;
    var q3 = document.forms["questions-form"]["q3"].value;
    var q4 = document.forms["questions-form"]["q4"].value;
    var q5 = document.forms["questions-form"]["q5"].value;
  
  var correctAnswer = ["a", "b", "a", "b", "d"];
  
  
  // put htis in a loop somehow
  
  if ( q1 == correctAnswer[0]){
  correct++;
  }
  if ( q2 == correctAnswer[1]){
  correct++;
  }
  if ( q3 == correctAnswer[2]){
  correct++;
  }
  if ( q4 == correctAnswer[3]){
  correct++;
  }
  if ( q5 == correctAnswer[4]){
  correct++;
  
  } 
  
  }  
  
  
  // create a timer
  
  
  var seconds = 30;
  var intervalId;
  
      function runTimer() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
       
      }
  
      //  The decrement function to count down seconds.
      function decrement() {
        seconds--;
        $("#count-down").html("<h2>" + seconds + " seconds left </h2>");
        if (seconds === 0) {
          $("#questions-display").hide();
          $("#submit-button").hide();
          stop();
          submitAnswers();
          displayResults();
        }
      }  
  
  
  
//  When the start button gets clicked, run the start function.
$("#start").on("click", start);  
      // what happens when start button is clicked
  function start(){
    // show questions
   $("#questions-display").show();
   $("#submit-button").show();
    // start timer
    runTimer();
    // clear previous answers
    document.getElementById("questions-display").reset();
    // $("#results").hide();
  }
  
     //  The stop function to stop timer from going and display results
      function stop() {
        clearInterval(intervalId);
        $("#questions-display").hide();
        $("#submit-button").hide();
  
      }    
  
  // when subit button is clicked
  $("#submit-button").on("click", submit);  
      // what happens when start button is clicked
  function submit(){
    // show questions
   $("#questions-display").hide();
   $("#submit-button").hide();
   submitAnswers();
   displayResults();
  stop();
  }
  
  // make a function for wrong/correct answers put this function in stop function to display them when the time is up (if statements)
  function displayResults(){
  $("#results").text("You answered correctly " + correct + " questions out of 5.");
  }

      //FIX: results are showing up on start button
  function reset(){
    var correct = 0;
    $("#questions-display").hide();
    $("#submit-button").hide();
    $("#results").hide();
  }

  });
  
