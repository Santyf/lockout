var correctAnswers = 0;
var clockRunning = false;
var intervalId;
var counter = 25;

$("#start-button").on("click", start);
$(".choice").on("click", correctCount);
$("#submit-button").on("click", stop);
$(".content-container").hide();
$("#time-remaining").hide();

function correctCount() {
    if (!clockRunning) {
        var userInput = $(this).attr("value");
        if (userInput === "correct") {
            correctAnswers++
        }

    }
}

function start() {
$(".content-container").show();
$("#time-remaining").show();
$("#start-button").hide();
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);

}

function decrement() {

    counter--;

    $("#time-remaining").html("<p>" + counter + "</p>");
    if (counter === 0) {
        stop();
    }
}

function stop() {
    clearInterval(intervalId);
    $("#time-remaining").html("Score:" + correctAnswers + "/5");

};



  