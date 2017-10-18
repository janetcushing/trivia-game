// javascript and jQuery code

//-----------------//
// json objects
//-----------------//

{
    trivia = [{
            "question": "What animal has 'bear' attatched to its name, but is  a marsupial and not a bear?",
            "a": ["koala", "correct"],
            "b": ["panda", "incorrect"],
            "c": ["possum", "incorrect"],
            "d": ["black bear", "incorrect"],
            "e": ["none of the above", "incorrect"]
        },

        {
            "question": "Recent DNA analysus confirms that what breed of dog is one of the oldest and one of the least genetically divergent from the wolf?",
            "a": ["pekingese", "correct"],
            "b": ["basenji", "incorrect"],
            "c": ["german shephard", "incorrect"],
            "d": ["alaskan malamute", "incorrect"],
            "e": ["saluki", "incorrect"]
        },

        {
            "question": "Question three?",
            "a": ["pekingese", "correct"],
            "b": ["basenji", "incorrect"],
            "c": ["german shephard", "incorrect"],
            "d": ["alaskan malamute", "incorrect"],
            "e": ["saluki", "incorrect"]
        },

        {
            "question": "Question four?",
            "a": ["pekingese", "correct"],
            "b": ["basenji", "incorrect"],
            "c": ["german shephard", "incorrect"],
            "d": ["alaskan malamute", "incorrect"],
            "e": ["saluki", "incorrect"]
        },

        {
            "question": "Question five?",
            "a": ["pekingese", "correct"],
            "b": ["basenji", "incorrect"],
            "c": ["german shephard", "incorrect"],
            "d": ["alaskan malamute", "incorrect"],
            "e": ["saluki", "incorrect"]
        },

        {
            "question": "Question six?",
            "a": ["pekingese", "correct"],
            "b": ["basenji", "incorrect"],
            "c": ["german shephard", "incorrect"],
            "d": ["alaskan malamute", "incorrect"],
            "e": ["saluki", "incorrect"]
        },

        {
            "question": "Question seven?",
            "a": ["pekingese", "correct"],
            "b": ["basenji", "incorrect"],
            "c": ["german shephard", "incorrect"],
            "d": ["alaskan malamute", "incorrect"],
            "e": ["saluki", "incorrect"]
        },

        {
            "question": "Question eight?",
            "a": ["pekingese", "correct"],
            "b": ["basenji", "incorrect"],
            "c": ["german shephard", "incorrect"],
            "d": ["alaskan malamute", "incorrect"],
            "e": ["saluki", "incorrect"]
        },

        {
            "question": "Question nine?",
            "a": ["pekingese", "correct"],
            "b": ["basenji", "incorrect"],
            "c": ["german shephard", "incorrect"],
            "d": ["alaskan malamute", "incorrect"],
            "e": ["saluki", "incorrect"]
        },

        {
            "question": "Question ten?",
            "a": ["pekingese", "correct"],
            "b": ["basenji", "incorrect"],
            "c": ["german shephard", "incorrect"],
            "d": ["alaskan malamute", "incorrect"],
            "e": ["saluki", "incorrect"]
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
var radioButton;
var isNewGame = true;
var buttonChoice = "";


//-------------//
// functions
//-------------//



function countDown() {
    gameTracker.secondsLeft--;
    document.getElementById("secondsLeft").innerHTML = gameTracker.secondsLeft;
    console.log("time left: " + gameTracker.secondsLeft);
}

function timeComplete(theIntervalVar) {
    console.log("time has run out");
    clearInterval(theIntervalVar);
    return theIntervalVar;
}


function resetGame() {
    console.log("im in the resetGame");
    // $("#gameComplete").hide();
    // $("#question").hide();
    // $("#radioButtons").hide();
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

    // $("#startButton").hide();
    // $("#question").text(trivia[0].question);
    // $("#option1").text(trivia[0].a[0]);
    // $("#option2").text(trivia[0].b[0]);
    // $("#option3").text(trivia[0].c[0]);
    // $("#option4").text(trivia[0].d[0]);
    // $("#option5").text(trivia[0].e[0]);
    // $("#question").show();
    // $("#radioButtons").show();
    console.log("time left before: " + gameTracker.secondsLeft);
    // theInterval = setInterval(countDown, 1000);
    console.log("time left after: " + gameTracker.secondsLeft);
    // do {


    // $("#submit").click(processSubmit);

    // gameTracker.triviaIndex++;
    // }
    // while (gameTracker.secondsLeft > 0 && gameTracker.triviaIndex < totalNumberOfQuestions);
    console.log("totalNumberOfQuestions " + totalNumberOfQuestions);
    // console.log("gameTracker.secondsLeft " + gameTracker.secondsLeft);
    // while (gameTracker.secondsLeft <= 0 || gameTracker.triviaIndex >= totalNumberOfQuestions); {
    //     theInterval = timeComplete(theInterval);
    //     console.log("display correctCntr and wrongCntr");
    // }
}


// // process the radio button click
// function processRadioButtonClick(theCountgameTracker, theTrivia) {
//     console.log("you clicked a radio button");
//     if ($("radioa").checked) {
//         theCountgameTracker = (processRadioButtonA(theCountgameTracker, theTrivia));
//     }else if ($("radiob").checked) {
//         theCountgameTracker = (processRadioButtonB(theCountgameTracker, theTrivia));
//     }else if ($("radioc").checked) {
//         theCountgameTracker = (processRadioButtonC(theCountgameTracker, theTrivia));
//     }else if ($("radiod").checked) {
//         theCountgameTracker = (processRadioButtonD(theCountgameTracker, theTrivia));
//     }else if ($("radioe").checked) {
//         theCountgameTracker = (processRadioButtonE(theCountgameTracker, theTrivia));
//     }
//     return theCountgameTracker;
// }

function processSubmit() {
    console.log("im in processSubmit ");
    radioButton = document.forms[0];

    console.log("radioButton length " + radioButton.length);
    console.log("radioButton[0]  " + radioButton[0].checked);
    var i;
    for (i = 0; i < radioButton.length - 1; i++) {
        if (radioButton[i].checked) {
            console.log("radioButton checked: " + i);
            buttonChoice = radioButton[i].value;
            console.log("buttonChoice: " + buttonChoice);
        }
    }
    console.log("buttonChoice " + buttonChoice);
    if (buttonChoice === "a") {
        console.log("radioA checked: " + buttonChoice);
        thegameTracker = (processRadioButtonA(gameTracker, trivia));
    } else if (buttonChoice === "b") {
        console.log("radiob checked: " + buttonChoice);
        thegameTracker = (processRadioButtonB(gameTracker, trivia));
    } else if (buttonChoice === "c") {
        console.log("radioc checked: " + buttonChoice);
        thegameTracker = (processRadioButtonC(gameTracker, trivia));
    } else if (buttonChoice === "d") {
        console.log("radiod checked: " + buttonChoice);
        thegameTracker = (processRadioButtonD(gameTracker, trivia));
    } else if (buttonChoice === "e") {
        console.log("radioe checked: " + buttonChoice);
        thegameTracker = (processRadioButtonE(gameTracker, trivia));
    } else {
        gameTracker.wrongCntr++;
    }
    console.log("Need to loop in the next question");
   

}

function processRadioButtonA(theAgameTracker, theTrivia) {
    console.log("im in processRadioButtonA");
    console.log("theAgameTracker: " + theAgameTracker);
    console.log("theTrivia: " + theTrivia);
    console.log('theAgameTracker.triviaIndex ' + theAgameTracker.triviaIndex);
    console.log('theTriviaA ' + theTrivia[theAgameTracker.triviaIndex].a[theAgameTracker.triviaIndex][1]);
    if (theTrivia[theAgameTracker.triviaIndex].a[theAgameTracker.triviaIndex][1] === "correct") {
        theAgameTracker.correctCntr++;
    } else {
        theAgameTracker.wrongCntr++;
    }
    return theAgameTracker;
}

function processRadioButtonB(theBgameTracker, theTrivia) {
    if (theTrivia[theBgameTracker.triviaIndex].b[theBgameTracker.triviaIndex][1] === "correct") {
        theBgameTracker.correctCntr++;
    } else {
        theBgameTracker.wrongCntr++;
    }
}

function processRadioButtonC(theCgameTracker, theTrivia) {
    if (theTrivia[theCgameTracker.triviaIndex].c[theCgameTracker.triviaIndex][1] === "correct") {
        theCgameTracker.correctCntr++;
    } else {
        theCgameTracker.wrongCntr++;
    }
}

function processRadioButtonD(theDgameTracker, theTrivia) {
    if (theTrivia[theDgameTracker.triviaIndex].d[theDgameTracker.triviaIndex][1] === "correct") {
        theDgameTracker.correctCntr++;
    } else {
        theDgameTracker.wrongCntr++;
    }
}

function processRadioButtonE(theEgameTracker, theTrivia) {
    if (theTrivia[theEgameTracker.triviaIndex].e[theEgameTracker.triviaIndex][1] === "correct") {
        theEgameTracker.correctCntr++;
    } else {
        theEgameTracker.wrongCntr++;
    }
}

function displayGameTotals() {
    $("#correct").text(gameTracker.correctCntr);
    $("#wrong").text(gameTracker.wrongCntr);
    $("#unanswered").text(gameTracker.unansweredCntr);
    $("#startButton").text("Play Again?");
    // $("#gameComplete").show();
    // $("#startButton").show();
}

function displayNextQuestion() {
    console.log("im in displayNextQuestion");
    $("#question").text(trivia[gameTracker.triviaIndex].question);
    $("#option1").text(trivia[gameTracker.triviaIndex].a[0]);
    $("#option2").text(trivia[gameTracker.triviaIndex].b[0]);
    $("#option3").text(trivia[gameTracker.triviaIndex].c[0]);
    $("#option4").text(trivia[gameTracker.triviaIndex].d[0]);
    $("#option5").text(trivia[gameTracker.triviaIndex].e[0]);
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

    console.log("totalNumberOfQuestions " + totalNumberOfQuestions);
    console.log("gameTracker.triviaIndex" + gameTracker.triviaIndex);

    if (gameTracker.triviaIndex < totalNumberOfQuestions) {
        console.log("im about to enter processSubmit");
        $("#submit").click(processSubmit());
        displayNextQuestion();
        gameTracker.triviaIndex++;
        console.log("gameTracker.triviaIndex " + gameTracker.triviaIndex);

    } else {
        displayGameTotals(gameTracker);
        isNewGame = true;
    }


});