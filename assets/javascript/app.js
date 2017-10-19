// javascript and jQuery code

//-----------------//
// json objects
//-----------------//

{
    trivia = [

        {
            "question": "What was the dominant brewery in New Hampshire from its inception in 1859 to the start of Prohibition in 1917?",
            "answers": [
                ["Anheuser-Busch Brewery", "incorrect"],
                ["Sam Adams Brewery", "incorrect"],
                ["Frank Jones Brewery", "correct"],
                ["Smuttynose Brewing", "incorrect"],
                ["Redhook Ale Brewery", "incorrect"]
            ],
            "beerImage": "assets/images/FrankJonesBrewery.jpg"
        },

        {
            "question": "Which U.S. state consumes the most beer per person?",
            "answers": [
                ["New Hampshire", "incorrect"],
                ["Massachusetts", "incorrect"],
                ["North Dakota", "correct"],
                ["Montana", "incorrect"],
                ["Nevada", "incorrect"]
            ],
            "beerImage": "assets/images/2015Simpsons_DuffBeerForMe_060515.jpg"
        },

        {
            "question": "What is the name of the worlds highest selling beer?",
            "answers": [
                ["Budweiser", "incorrect"],
                ["Oettinger", "incorrect"],
                ["Guiness", "incorrect"],
                ["Snow", "correct"],
                ["Verboden Vrucht", "incorrect"]
            ],
            "beerImage": "assets/images/snow.jpg"
        },

        {
            "question": "Beer is the third most highly consumed beverage in the world.  What are the top two?",
            "answers": [
                ["coffee and tea", "incorrect"],
                ["tea and water", "correct"],
                ["water and coffee", "incorrect"],
                ["water and orange juice", "incorrect"],
                ["coca cola and pepsi cola", "incorrect"]
            ],
            "beerImage": "assets/images/drinkpreneur_2016-01-26-1453821995-8643361-beermain.jpg"
        },


        {
            "question": "Beer was first brewed how long ago?",
            "answers": [
                ["10,000 years ago", "incorrect"],
                ["6000 years ago", "correct"],
                ["3000 years ago", "incorrect"],
                ["700 years ago", "incorrect"],
                ["375 years ago", "incorrect"]
            ],
            "beerImage": "assets/images/egyptianBeer.gif"
        },

        {
            "question": "What is the name of the ancient Sumerian Goddess of Brewing?",
            "answers": [
                ["Ostara", "incorrect"],
                ["Leffe", "incorrect"],
                ["Ashnan", "incorrect"],
                ["Inanna", "incorrect"],
                ["Ninkasi", "correct"]
            ],
            "beerImage": "assets/images/ninkasi.jpg"
        },

        {
            "question": "In what year did German brewers come up with the Beer Purity Law, called 'the Reinheitsgebot'?",
            "answers": [
                ["582", "incorrect"],
                ["1516", "correct"],
                ["1866", "incorrect"],
                ["1912", "incorrect"],
                ["1937", "incorrect"]
            ],
            "beerImage": "assets/images/1607_belgianbeertour.jpg"
        },

        {
            "question": "Reinheitsgebot, or the 'German Beer Purity Law', states that only 3 ingredients can be used to brew beer.  What are they?",
            "answers": [
                ["water, yeast, hops", "incorrect"],
                ["water, barley, hops", "correct"],
                ["water, molasses, barley", "incorrect"],
                ["water, yeast, barley", "incorrect"],
                ["water, yeast, hops", "incorrect"]
            ],
            "beerImage": "assets/images/craft-beer.jpg"
        },

        {
            "question": "What is the Vietnamese word for 'beer'?",
            "answers": [
                ["bia", "correct"],
                ["rượu", "incorrect"],
                ["nước", "incorrect"],
                ["chanh", "incorrect"],
                ["cốc-tai", "incorrect"]
            ],
            "beerImage": "assets/images/bière-vietnamienne.jpg"
        },

        {
            "question": "What is the difference between a lager and an ale?",
            "answers": [
                ["lager originated in Germany and ale originated in France", "incorrect"],
                ["lager is best served at room temperature and ale is best served at cellar temperature", "incorrect"],
                ["lager was invented to be part of a religious ceremony, and ale originated in medieval inns", "incorrect"],
                ["a lager is top fermented and an ale is bottom fermented", "correct"],
                ["a lager is dark and creamy and an ale is light and airy", "incorrect"]
            ],
            "beerImage": "assets/images/gettyimages-547626781.jpg"
        }

        // {
        //     "question": "What is the ideal temperature in which to enjoy an ale??",
        //     "answers": [
        //         ["Just above freezing", "incorrect"],
        //         ["Cellar temperature", "correct"],
        //         ["Room temperature", "incorrect"],
        //         ["Just below boiling", "incorrect"],
        //         ["37 degrees celsius", "incorrect"]
        //     ],
        //     "beerImage": "assets/images/2015Simpsons_DuffBeerForMe_060515.jpg"
        // }

    ]
}

gameTracker = {
    "correctCntr": 0,
    "incorrectCntr": 0,
    "unansweredCntr": 0,
    "triviaIndex": 0,
    "secondsLeft": 30
}


//-------------------//
// global variables
//-------------------//
const totalNumberOfQuestions = 10;
var theInterval = 0;
var isNewGame = true;
var buttonChoice = "";
var answerIndex = 0;
var correctAnswer = "";
var timer30Seconds = 0;
var timer3Seconds = 0;


//-------------//
// functions
//-------------//



function countDown() {
    document.getElementById("secondsLeft").innerHTML = gameTracker.secondsLeft;
    // console.log("time left: " + gameTracker.secondsLeft);
    if (gameTracker.secondsLeft === 0) {
        stopCountDown();
        countDownIsZero();
    } else {
        gameTracker.secondsLeft--;
    }
}

function stopCountDown() {
    console.log("clear theInterval");
    clearInterval(theInterval);
}


function resetGame() {
    console.log("im in the resetGame");
    $("#gameComplete").hide();
    $("#totals").hide();
    $("#totals2").hide();
    $("#totals3").hide();
    $("#totals4").hide();
    $("#correct").hide();
    $("#incorrect").hide();
    $("#unanswered").hide();
    $("#question").hide();
    $("#radioButtons").hide();
    // $("#answerWrapper").hide();
    $("#correctAnswer").hide();
    $("#beerImg").hide();
    $("#startButton").show();
    gameTracker.correctCntr = 0;
    gameTracker.incorrectCntr = 0;
    gameTracker.unansweredCntr = 0;
    gameTracker.triviaIndex = 0;
    gameTracker.secondsLeft = 30;
    theInterval = 0;
    radioButton = 0;
    isNewGame = false;
    // processStartButtonClick();

}

// process the start button click
function processStartButtonClick() {
    console.log("in the processStartButtonClick");
    if (isNewGame) {
        resetGame();
    }
    $("#startButton").hide();
    $("#question").show();
    $("#radioButtons").show();
    gameTracker.secondsLeft = 30;
    // theInterval = setInterval(countDown, 1000);
    gameTracker.triviaIndex = 0;
    displayNextQuestion();
}


function processRadioButton() {
    console.log("im in processRadioButton" + gameTracker.secondsLeft);
    stopCountDown();
    // clearTimeout(timer30Seconds);

    console.log("time complete " + gameTracker.secondsLeft);
    console.log("gameTracker: " + JSON.stringify(gameTracker));
    buttonChoice = $("input[name='radioButton']:checked").val();
    console.log("buttonChoice: " + buttonChoice);
    console.log("about to enter the for loop");
    for (let i = 0; i < trivia[gameTracker.triviaIndex].answers.length; i++) {
        console.log("im in the for loop i: " + i);
        if (trivia[gameTracker.triviaIndex].answers[i][1] === "correct") {
            console.log("im in the correct answer if ");
            correctAnswer = trivia[gameTracker.triviaIndex].answers[i][0];
            if (i == parseInt(buttonChoice)) {
                console.log("i = buttonChoice if ");
                gameTracker.correctCntr++;
                $("#correctAnswer").html("Correct!");
            } else {
                console.log("i != buttonChoice if ");
                gameTracker.incorrectCntr++;
                $("#correctAnswer").html("Wrong Answer!  The Correct Answer is: " + correctAnswer);

            }
            console.log("outside the if buttonchoice if");

        }
        console.log("outside the correct answer if ");

    }
    console.log("outside the for loop");

    $("#beerImg").attr("src", trivia[gameTracker.triviaIndex].beerImage);
    // $("#beerImg").attr("width", "500");
    // $("#answerWrapper").show();
    console.log("about to show the correct answer");
    $("#correctAnswer").show();
    $("#beerImg").show();
    $("#question").hide();
    $("#radioButtons").hide();
    // setTimeout(waiting(), 10000);
    console.log("just showed the correct answer ");
    $("input[name='radioButton']:checked").prop("checked", false);
    console.log("gameTracker.triviaIndex " + gameTracker.triviaIndex);

    gameTracker.triviaIndex++;
    console.log("about to display next question ");

    if (gameTracker.triviaIndex < totalNumberOfQuestions) {
        console.log("will reset the clock and display the next question");
        console.log("about to display teh enxt question");
        timer3Seconds = setTimeout(displayNextQuestion, 3000);

    } else {
        console.log("not going to display the next question");
        // theInterval = stopCountDown(theInterval);
        console.log("display correctCntr and incorrectCntr");
        timer3Seconds = setTimeout(displayGameTotals(), 3000);
        isNewGame = true;
    }

}


function displayGameTotals() {
    console.log("im in displayGameTotals");
    stopCountDown();
    $("#correct").text(gameTracker.correctCntr);
    $("#incorrect").text(gameTracker.incorrectCntr);
    $("#unanswered").text(gameTracker.unansweredCntr);
    $("#startButton").text("Play Again?");
    $("#correctAnswer").hide();
    $("#beerImg").hide();
    $("#gameComplete").show();
    $("#totals").show();
    $("#totals2").show();
    $("#totals3").show();
    $("#totals4").show();
    $("#correct").show();
    $("#incorrect").show();
    $("#unanswered").show();
    $("#startButton").show();
    isNewGame = true;
}

function displayNextQuestion() {
    console.log("im in displayNextQuestion");
    gameTracker.secondsLeft = 30;
    $("#question").text(trivia[gameTracker.triviaIndex].question);
    $("#option1").text(trivia[gameTracker.triviaIndex].answers[0][0]);
    $("#option2").text(trivia[gameTracker.triviaIndex].answers[1][0]);
    $("#option3").text(trivia[gameTracker.triviaIndex].answers[2][0]);
    $("#option4").text(trivia[gameTracker.triviaIndex].answers[3][0]);
    $("#option5").text(trivia[gameTracker.triviaIndex].answers[4][0]);
    // $("#answerWrapper").show();
    $("#correctAnswer").hide();
    $("#beerImg").hide();
    $("#question").show();
    $("#radioButtons").show();
    theInterval = setInterval(countDown, 1000);
    // timer30Seconds = setTimeout(countDownIsZero(), 30000);
}


function countDownIsZero() {
    // clearTimeout(timer30Seconds);
    console.log("im in countDownIsZero" + gameTracker.secondsLeft);
    stopCountDown();
    console.log("time complete " + gameTracker.secondsLeft);
    console.log("gameTracker: " + JSON.stringify(gameTracker));
    // buttonChoice = $("input[name='radioButton']:checked").val();
    // console.log("buttonChoice: " + buttonChoice);
    console.log("about to enter the for loop");
    for (let i = 0; i < trivia[gameTracker.triviaIndex].answers.length; i++) {
        console.log("im in the for loop i: " + i);
        if (trivia[gameTracker.triviaIndex].answers[i][1] === "correct") {
            console.log("im in the correct answer if ");
            correctAnswer = trivia[gameTracker.triviaIndex].answers[i][0];
        }
        console.log("outside the correct answer if ");
    }
    console.log("outside the for loop");
    gameTracker.unansweredCntr++;
    $("#correctAnswer").html("Too Slow!  The Correct Answer is: " + correctAnswer);
    $("#beerImg").attr("src", trivia[gameTracker.triviaIndex].beerImage);
    // $("#beerImg").attr("width", "500");
    // $("#answerWrapper").show();
    console.log("about to show the correct answer");
    $("#correctAnswer").show();
    $("#beerImg").show();
    $("#question").hide();
    $("#radioButtons").hide();
    // setTimeout(waiting(), 10000);
    console.log("just showed the correct answer ");
    console.log("gameTracker.triviaIndex " + gameTracker.triviaIndex);
    gameTracker.triviaIndex++;
    console.log("about to display next question ");

    if (gameTracker.triviaIndex < totalNumberOfQuestions) {
        console.log("will reset the clock and display the next question");
        console.log("about to display teh enxt question");
        timer3Seconds = setTimeout(displayNextQuestion, 3000);

    } else {
        console.log("not going to display the next question");
        // theInterval = stopCountDown(theInterval);
        console.log("display correctCntr and incorrectCntr");
        timer3Seconds = setTimeout(displayGameTotals(gameTracker), 3000);
        isNewGame = true;
    }

}


// function waiting() {
//     console.log("waiting");

// }


//----------------------//
// main processing
//----------------------//
$(document).ready(function () {

    console.log("im ready ");
    console.log("isNewGame " + isNewGame);
    if (isNewGame) {
        resetGame();
    }

    $("#startButton").click(processStartButtonClick);

    console.log("gameTracker.secondsLeft " + gameTracker.secondsLeft);
    // if(gameTracker.secondsLeft == 0){
    //     console.log("im in the if - gameTracker.secondsLeft " + gameTracker.secondsLeft);
    //     countDownIsZero();
    // }   

    $("#radioa").click(processRadioButton);
    $("#radiob").click(processRadioButton);
    $("#radioc").click(processRadioButton);
    $("#radiod").click(processRadioButton);
    $("#radioe").click(processRadioButton);





    console.log("gameTracker.triviaIndex" + gameTracker.triviaIndex);



    // if (gameTracker.triviaIndex >= totalNumberOfQuestions) {
    //     theInterval = stopCountDown(theInterval);
    //     console.log("display correctCntr and incorrectCntr");
    //     displayGameTotals(gameTracker);
    //     isNewGame = true;
    // }


});