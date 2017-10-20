// javascript and jQuery code for trivia game

//-----------------//
// json objects
//-----------------//

//--------------------------------//
// trivia question json object
//--------------------------------//
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
            "beerImage": "assets/images/north-dakota.svg"
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
                ["water, malt, barley", "incorrect"],
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
            "beerImage": "assets/images/biere-vietnamienne.jpg"
        },

        {
            "question": "What is the difference between a lager and an ale?",
            "answers": [
                ["lager originated in Germany; ale originated in France", "incorrect"],
                ["lager is best served warm; ale is best served cold", "incorrect"],
                ["lager originated in medieval castles; ale originated in medieval inns", "incorrect"],
                ["lager is top fermented; ale is bottom fermented", "correct"],
                ["lager is dark and creamy; ale is light and airy", "incorrect"]
            ],
            "beerImage": "assets/images/gettyimages-547626781.jpg"
        }


    ]
}

//------------------------------------------------------------//
// game tracker json object - keeps track of game variables
//------------------------------------------------------------//
tracker = {
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
var timeDelay = 0;


//-------------//
// functions
//-------------//

//---------------------------------------//
// count down the seconds of the timer
//---------------------------------------//
function countDown() {
    $("#secondsLeft").html(tracker.secondsLeft);
    if (tracker.secondsLeft === 0) {
        countDownIsZero();
    } else {
        tracker.secondsLeft--;
    }
}

//---------------------------------------//
// stop the timer
//---------------------------------------//
function stopCountDown() {
    clearInterval(theInterval);
}

//-------------------------------------------------------//
// process the start button click to begin the game
// reset variables and display the first question
//-------------------------------------------------------//
function beginGame() {
    if (isNewGame) {
        resetGame();
    }
    $("#startButton").hide();
    $("#question").show();
    $("#radioButtons").show();
    displayNextQuestion();
}

//-------------------------------------------------------//
// reset the html page and the variables for a new game
// if the player chooses to play again
//-------------------------------------------------------//
function resetGame() {
    $("#gameComplete").hide();
    $("#question").hide();
    $("#radioButtons").hide();
    $("#correctAnswer").hide();
    $("#beerImg").attr("height", "250px");
    $("#startButton").show();
    tracker.correctCntr = 0;
    tracker.incorrectCntr = 0;
    tracker.unansweredCntr = 0;
    tracker.triviaIndex = 0;
    tracker.secondsLeft = 30;
    theInterval = 0;
    radioButton = 0;
    isNewGame = false;
}


//--------------------------------------------------------------//
// process the radio button click - determine whether it
// is the right answer or not and write the results to the dom
// then write the next question to the DOM, and if its the end
// of the game, display the game totals
//--------------------------------------------------------------//
function processRadioButtonClick() {
    stopCountDown();
    buttonChoice = $("input[name='radioButton']:checked").val();
    for (let i = 0; i < trivia[tracker.triviaIndex].answers.length; i++) {
        if (trivia[tracker.triviaIndex].answers[i][1] === "correct") {
            correctAnswer = trivia[tracker.triviaIndex].answers[i][0];
            if (i == parseInt(buttonChoice)) {
                tracker.correctCntr++;
                $("#correctAnswer").html("Correct!");
            } else {
                tracker.incorrectCntr++;
                $("#correctAnswer").html("Wrong Answer!  The Correct Answer is: " + correctAnswer);
            }
        }
    }
    $("input[name='radioButton']:checked").prop("checked", false);
    displayAnswer();
}

//--------------------------------------------------------------//
// if the time runs out before a radio button is clicked,
// write the correct answer to the dom and add to the 
// unanswered question counter
//--------------------------------------------------------------//
function countDownIsZero() {
    stopCountDown();
    for (let i = 0; i < trivia[tracker.triviaIndex].answers.length; i++) {
        if (trivia[tracker.triviaIndex].answers[i][1] === "correct") {
            correctAnswer = trivia[tracker.triviaIndex].answers[i][0];
        }
    }
    tracker.unansweredCntr++;
    $("#correctAnswer").html("Too Slow!  The Correct Answer is: " + correctAnswer);
    displayAnswer();
}


//--------------------------------------------------------------//
// display the answer to the dom
//--------------------------------------------------------------//
function displayAnswer() {
    $("#beerImg").attr("src", trivia[tracker.triviaIndex].beerImage);
    $("#correctAnswer").show();
    $("#beerImg").show();
    $("#question").hide();
    $("#radioButtons").hide();
    tracker.triviaIndex++;
    if (tracker.triviaIndex < totalNumberOfQuestions) {
        timeDelay = setTimeout(displayNextQuestion, 6000);
    } else {
        timeDelay = setTimeout(displayGameTotals, 6000);
        isNewGame = true;
    }

}

//--------------------------------------------------------------//
// write the next question from the trivia array to the DOM
// and reset the count down timer
//--------------------------------------------------------------//
function displayNextQuestion() {
    tracker.secondsLeft = 30;
    document.getElementById("secondsLeft").innerHTML = tracker.secondsLeft;
    theInterval = setInterval(countDown, 1000);
    $("#question").text(trivia[tracker.triviaIndex].question);
    $("#option1").text(trivia[tracker.triviaIndex].answers[0][0]);
    $("#option2").text(trivia[tracker.triviaIndex].answers[1][0]);
    $("#option3").text(trivia[tracker.triviaIndex].answers[2][0]);
    $("#option4").text(trivia[tracker.triviaIndex].answers[3][0]);
    $("#option5").text(trivia[tracker.triviaIndex].answers[4][0]);
    $("#correctAnswer").hide();
    $("#beerImg").hide();
    $("#question").show();
    $("#radioButtons").show();
}

//--------------------------------------------------------------//
// write the end of game totals to the dom
// and reset the isNewGame flag to be ready for the next game
//--------------------------------------------------------------//
function displayGameTotals() {
    console.log("im in displayGameTotals");
    stopCountDown();
    $("#correct").text(tracker.correctCntr);
    $("#incorrect").text(tracker.incorrectCntr);
    $("#unanswered").text(tracker.unansweredCntr);
    $("#beerImg").attr("src", "assets/images/beer4.gif");
    $("#beerImg").attr("height", "100px");
    $("#startButton").text("Play Again?");
    $("#correctAnswer").hide();
    $("#gameComplete").show();
    $("#startButton").show();
    isNewGame = true;
}





//----------------------//
// main processing
//----------------------//
$(document).ready(function () {

    //---------------------------------------//
    // if its a new game,
    // reset the game variables and the dom
    // show the start button in the dom
    //---------------------------------------//
    if (isNewGame) {
        resetGame();
    }

    //---------------------------------------//
    // process button clicks
    //---------------------------------------//
    $("#startButton").click(beginGame);
    $("#radioa").click(processRadioButtonClick);
    $("#radiob").click(processRadioButtonClick);
    $("#radioc").click(processRadioButtonClick);
    $("#radiod").click(processRadioButtonClick);
    $("#radioe").click(processRadioButtonClick);


});