$(document).ready(function() {
    var targetScore = 0;
    var userScore = 0;
    var wins = 0;
    var losses = 0;
    var crystal1 = 0;
    var crystal2 = 0;
    var crystal3 = 0;
    var crystal4 = 0;

    function resetScore() {
    targetScore = 19 + Math.floor(Math.random() * 101);
    userScore = 0
    crystal1 = 0
    crystal2 = 0
    crystal3 = 0
    crystal4 = 0
    }
    resetScore();

    function updateScore() {
    $(".targetNumber").text(targetScore);
    $(".wins").text(wins);
    $(".losses").text(losses);
    $(".userScore").text(userScore);
    }
    updateScore();


    function crystalNumber() {
       crystal1 = 1 + Math.floor(Math.random() * 11);
       $(".crystal1").data("value", crystal1);
       crystal2 = 1 +Math.floor(Math.random() * 11);
       $(".crystal2").data("value", crystal2);
       crystal3 = 1 + Math.floor(Math.random() * 11);
       $(".crystal3").data("value", crystal3);
       crystal4 = 1 + Math.floor(Math.random() * 11);
       $(".crystal4").data("value", crystal4);
    }
    crystalNumber();

    function scoreCheck() {
    if (userScore === targetScore) {
        wins += 1;
        resetScore();
        updateScore();
        crystalNumber();
    }
    if (userScore > targetScore) {
        losses += 1;
        resetScore();
        updateScore();
        crystalNumber();
    }
    }

    $(".crystal1").on("click", function() {
        userScore += $(".crystal1").data("value");
        updateScore();
        scoreCheck();
    })
    $(".crystal2").on("click", function() {
        userScore += $(".crystal2").data("value");
        updateScore();
        scoreCheck();
    })
    $(".crystal3").on("click", function() {
        userScore += $(".crystal3").data("value");
        updateScore();
        scoreCheck();
    })
    $(".crystal4").on("click", function() {
        userScore += $(".crystal4").data("value");
        updateScore();
        scoreCheck();
    })


})