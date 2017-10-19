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
            "beerImage": "assets/images/220px-Dutch_beers.jpg"
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
            "beerImage": "assets/images/craft-beer.jpg"
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
            "beerImage": "assets/images/gettyimages-547626781.jpg"
        },

        {
            "question": "What is the name of the ancient Sumerian Goddess of Brewing?",
            "answers": [
                ["Alesi", "incorrect"],
                ["Leffe", "incorrect"],
                ["Westmalle", "incorrect"],
                ["Krombacher", "incorrect"],
                ["Ninkasi", "correct"]
            ],
            "beerImage": "assets/images/drinkpreneur_2016-01-26-1453821995-8643361-beermain.jpg"
        },

        {
            "question": "In what year did German brewers come up with the Beer Purity Law, or the Reinheitsgebot?",
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
            "beerImage": "assets/images/oktoberfest-34.jpg"
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
            "question": "What is the ideal temperature in which to enjoy an ale??",
            "answers": [
                ["Just above freezing", "incorrect"],
                ["Cellar temperature", "correct"],
                ["Room temperature", "incorrect"],
                ["Just below boiling", "incorrect"],
                ["37 degrees celsius", "incorrect"]
            ],
            "beerImage": "assets/images/2015Simpsons_DuffBeerForMe_060515.jpg"
        }

    ]
}

gameTracker = {
    "correctCntr": 0,
    "wrongCntr": 0,
    "unansweredCntr": 0,
    "triviaIndex": 0,
    "secondsLeft": 30
}


//-------------------//
// global variables
//-------------------//
const totalNumberOfQuestions = 3;
var theInterval = 0;
var isNewGame = true;
var buttonChoice = "";
var answerIndex = 0;
var correctAnswer = '';


//-------------//
// functions
//-------------//



function countDown() {
    gameTracker.secondsLeft--;
    document.getElementById("secondsLeft").innerHTML = gameTracker.secondsLeft;
    // console.log("time left: " + gameTracker.secondsLeft);
}

function timeComplete(theIntervalVar) {
    console.log("time has run out");
    clearInterval(theIntervalVar);
    return theIntervalVar;
}


function resetGame() {
    console.log("im in the resetGame");
    $("#gameComplete").hide();
    $("#totals").hide();
    $("#totals2").hide();
    $("#totals3").hide();
    $("#totals4").hide();
    $("#correct").hide();
    $("#wrong").hide();
    $("#unanswered").hide();
    $("#question").hide();
    $("#radioButtons").hide();
    // $("#answerWrapper").hide();
    $("#correctAnswer").hide();
    $("#beerImg").hide();
    $("#startButton").show();
    gameTracker.correctCntr = 0;
    gameTracker.wrongCntr = 0;
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
    $("#startButton").hide();
    $("#question").show();
    $("#radioButtons").show();
    theInterval = setInterval(countDown, 1000);
    gameTracker.triviaIndex = 0;
    displayNextQuestion();
}


function processRadioButton() {
    clearInterval(theInterval);
    console.log("im in processRadioButton");
    console.log("gameTracker: " + JSON.stringify(gameTracker));
    console.log("is a correct " + trivia[gameTracker.triviaIndex].answers[answerIndex][1]);
    buttonChoice = $("input[name='radioButton']:checked").val();

    for (let i = 0; i < trivia[gameTracker.triviaIndex].answers.length; i++) {
        if (trivia[gameTracker.triviaIndex].answers[i][1] === "correct") {
            correctAnswer = trivia[gameTracker.triviaIndex].answers[i][0];
            if (i == parseInt(buttonChoice)) {
                gameTracker.correctCntr++;
                $("#correctAnswer").html("Correct!");
            } else {
                gameTracker.wrongCntr++;
                $("#correctAnswer").html("Wrong Answer!  The Correct Answer is: " + correctAnswer);

            }

        }

    }

    $("#beerImg").attr("src", trivia[gameTracker.triviaIndex].beerImage);
    // $("#beerImg").attr("width", "500");
    // $("#answerWrapper").show();
    $("#correctAnswer").show();
    $("#beerImg").show();
    $("#question").hide();
    $("#radioButtons").hide();
    $("input[name='radioButton']:checked").prop("checked", false);
    gameTracker.triviaIndex++;
    console.log("gameTracker.triviaIndex " + gameTracker.triviaIndex);
    // gameTracker.secondsLeft = 30;

    if (gameTracker.triviaIndex < totalNumberOfQuestions) {
        console.log("will reset the clock and display the next question");
        theInterval = setInterval(countDown, 1000);
        setTimeout(displayNextQuestion, 3000);
    } else {
        theInterval = timeComplete(theInterval);
        console.log("display correctCntr and wrongCntr");
        setTimeout(displayGameTotals(gameTracker), 3000);
        isNewGame = true;
    }
}


function displayGameTotals() {
    console.log("im in displayGameTotals");
    $("#correct").text(gameTracker.correctCntr);
    $("#wrong").text(gameTracker.wrongCntr);
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
    $("#wrong").show();
    $("#unanswered").show();
    $("#startButton").show();
    isNewGame = true;
}

function displayNextQuestion() {
    console.log("im in displayNextQuestion");
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
}


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

    console.log("gameTracker.triviaIndex" + gameTracker.triviaIndex);
    


    // if (gameTracker.triviaIndex >= totalNumberOfQuestions) {
    //     theInterval = timeComplete(theInterval);
    //     console.log("display correctCntr and wrongCntr");
    //     displayGameTotals(gameTracker);
    //     isNewGame = true;
    // }


});