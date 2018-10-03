var num1;
var num2;
var numberCorrect = 0;
var incorrect = 0;

function startTimer(duration, display) { //timer function
  var timer = duration, minutes, seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
      alert("Well done! You got " + numberCorrect + " questions right in the allotted time!  Great work! Click OK to try again.");
    }
  }, 1000);
}

function newQuestion() {
  document.getElementById("boxC").focus();
  document.getElementById("boxC").value = "";  
  num1 = Math.floor(Math.random() * 13);
  document.getElementById("boxA").value = num1;

  num2 = Math.floor(Math.random() * 13);
  document.getElementById("boxB").value = num2;
  incorrect = 0; //resets the incorrect var for new question.
}

newQuestion();
var input = document.getElementById("boxC");
input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) { //allowing enter to be used to submit answer.
    document.getElementById("button").click();
  }
});

document.getElementById("resetTimer").onclick = function () {
  location.reload();
};
var twoMinutes = 60 * 2; //how long the timer will last.
var display = document.querySelector('#clockDiv');
startTimer(twoMinutes, display);
document.getElementById("button").onclick = function() {
  document.getElementById("boxC").focus();

  checkAnswer();
};

function checkAnswer() {
  var answer = document.getElementById("boxC").value;
  if (answer == num1 * num2) {
    numberCorrect++;
    document.getElementById("score").innerHTML = "Current score: " + numberCorrect + ".";
    newQuestion();

    document.getElementById("boxC").value = "";
  } else if (answer < num1 * num2) {
    incorrect++;
    alert ("Sorry, try again.  Maybe a little higher...");
    } else if (answer > num1 * num2) {
    alert ("Sorry, try again.  Maybe a little lower...");
    incorrect++;
    }
    if (incorrect == 4) {
    alert ("OK, this was tricky.  The answer was " + num1 * num2 + ". Lets try another question.");
    newQuestion();
  }
}
