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
var isNewGame = true;
var buttonChoice = "";
var selectionMade = false;


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
    selectionMade = false;
    // processStartButtonClick();

}

// process the start button click
function processStartButtonClick() {
    console.log("in the processStartButtonClick");

    // $("#startButton").hide();
    // $("#question").show();
    // $("#radioButtons").show();
    theInterval = setInterval(countDown, 1000);
    gameTracker.triviaIndex = 0;
    selectionMade = true;
    displayNextQuestion();
}



// function processRadioButtonChoice() {
//     console.log("im in processRadioButtonChoice ");
//     // radioButton = document.forms[0];

//     // console.log("radioButton length " + radioButton.length);
//     // console.log("radioButton[0]  " + radioButton[0].checked);
//     // var i = 0;
//     // for (i = 0; i < radioButton.length; i++) {
//     //     if (radioButton[i].checked) {
//     //         console.log("radioButton checked: " + i);
//     //         buttonChoice = radioButton[i].value;
//     //         console.log("radioButton[i]: " + radioButton[i].value);
//     //         console.log("buttonChoice: " + buttonChoice);
//     //         selectionMade = true;
//     //     }
//     // }
//     var selection = document.getElementById("radioa").checked;
//     if(selection){
//         console.log("radioA checked: " + buttonChoice);
//         buttonChoice = "a";
//     }
//     // buttonChoice = $('input[type=radio][name=radioButton]:checked').value();
//     // buttonChoice = $("input:radio[name=radioButton]:checked").val();
//     console.log("buttonChoice " + buttonChoice);
//     if (buttonChoice === "a") {
//         console.log("radioA checked: " + buttonChoice);
//         thegameTracker = (processRadioButtonA(gameTracker, trivia));
//     } else if (buttonChoice === "b") {
//         console.log("radiob checked: " + buttonChoice);
//         thegameTracker = (processRadioButtonB(gameTracker, trivia));
//     } else if (buttonChoice === "c") {
//         console.log("radioc checked: " + buttonChoice);
//         thegameTracker = (processRadioButtonC(gameTracker, trivia));
//     } else if (buttonChoice === "d") {
//         console.log("radiod checked: " + buttonChoice);
//         thegameTracker = (processRadioButtonD(gameTracker, trivia));
//     } else if (buttonChoice === "e") {
//         console.log("radioe checked: " + buttonChoice);
//         thegameTracker = (processRadioButtonE(gameTracker, trivia));
//     } else {
//         gameTracker.wrongCntr++;
//     }
//     console.log("Need to loop in the next question");


// }

function processRadioButtonA() {
    console.log("im in processRadioButtonA");
    console.log("gameTracker: " + JSON.stringify(gameTracker));
    console.log("is a correct " + trivia[gameTracker.triviaIndex].a[gameTracker.triviaIndex][1]);
    if (trivia[gameTracker.triviaIndex].a[gameTracker.triviaIndex][1] === "correct") {
        gameTracker.correctCntr++;
        $("#correctAnswer").html("Correct!");
    } else {
        gameTracker.wrongCntr++;
        $("#correctAnswer").html("The Correct Answer was: " );
    }
    
    gameTracker.triviaIndex++;
    console.log("gameTracker.triviaIndex " + gameTracker.triviaIndex);
    gameTracker.secondsLeft = 30;
    theInterval = setInterval(countDown, 1000);

    $("radioa").prop( "checked", false );
    setTimeout(displayNextQuestion, 5000);
}

function processRadioButtonB() {
    if (trivia[gameTracker.triviaIndex].b[gameTracker.triviaIndex][1] == "correct") {
        gameTracker.correctCntr++;
        $("#correctAnswer").html("Correct!");
    } else {
        gameTracker.wrongCntr++;
        $("#correctAnswer").html("The Correct Answer was: " );
    }
    
    gameTracker.triviaIndex++;
    console.log("gameTracker.triviaIndex " + gameTracker.triviaIndex);
    gameTracker.secondsLeft = 30;
    theInterval = setInterval(countDown, 1000);
    $("radiob").prop( "checked", false );
    setTimeout(displayNextQuestion, 5000);
}

function processRadioButtonC() {
    if (trivia[gameTracker.triviaIndex].c[gameTracker.triviaIndex][1] == "correct") {
        gameTracker.correctCntr++;
        $("#correctAnswer").html("Correct!");
    } else {
        gameTracker.wrongCntr++;
        $("#correctAnswer").html("The Correct Answer was: " );
    }
    
    gameTracker.triviaIndex++;
    $("#correctAnswer").html("Correct!");
    console.log("gameTracker.triviaIndex " + gameTracker.triviaIndex);
    gameTracker.secondsLeft = 30;
    theInterval = setInterval(countDown, 1000);
    // $("radioc").off('click', );
    $("radioc").prop( "checked", false );
    setTimeout(displayNextQuestion, 5000);
}

function processRadioButtonD() {
    if (trivia[gameTracker.triviaIndex].d[gameTracker.triviaIndex][1] == "correct") {
        gameTracker.correctCntr++;
        $("#correctAnswer").html("Correct!");
    } else {
        gameTracker.wrongCntr++;
        $("#correctAnswer").html("The Correct Answer was: " );
    }
    
    gameTracker.triviaIndex++;
    console.log("gameTracker.triviaIndex " + gameTracker.triviaIndex);
    gameTracker.secondsLeft = 30;
    theInterval = setInterval(countDown, 1000);
    $("radioc").prop( "checked", false );
    setTimeout(displayNextQuestion, 5000);
}

function processRadioButtonE() {
    if (trivia[gameTracker.triviaIndex].e[gameTracker.triviaIndex][1] == "correct") {
        gameTracker.correctCntr++;
        $("#correctAnswer").html("Correct!");
    } else {
        gameTracker.wrongCntr++;
        $("#correctAnswer").html("The Correct Answer was: " );
    }
    
    gameTracker.triviaIndex++;
    console.log("gameTracker.triviaIndex " + gameTracker.triviaIndex);
    gameTracker.secondsLeft = 30;
    theInterval = setInterval(countDown, 1000);
    $("radioc").prop( "checked", false );
    setTimeout(displayNextQuestion, 5000);
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

// function displayCorrectAnswer() {
//     console.log("im in displayCorrectAnswer");
//     if (trivia[gameTracker.triviaIndex].a[1] == "correct") {
//         console.log("a is the correct answer");
//         console.log(trivia[gameTracker.triviaIndex].a[0]);
//         $("#correctAnswer").html("Correct!");
//     } else if (trivia[gameTracker.triviaIndex].b[1] == "correct") {
//         console.log("b is the correct answer");
//         console.log(trivia[gameTracker.triviaIndex].b[0]);
//     } else if (trivia[gameTracker.triviaIndex].c[1] == "correct") {
//         console.log("c is the correct answer");
//         console.log(trivia[gameTracker.triviaIndex].c[0]);
//     } else if (trivia[gameTracker.triviaIndex].d[1] == "correct") {
//         console.log("d is the correct answer");
//         console.log(trivia[gameTracker.triviaIndex].d[0]);
//     } else if (triviagameTracker.triviaIndex.e[1] == "correct") {
//         console.log("e is the correct answer");
//         console.log(trivia[gameTracker.triviaIndex].e[0]);

//     }
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

    console.log("gameTracker.triviaIndex" + gameTracker.triviaIndex);
    // processRadioButtonChoice();

    // if (selectionMade || gameTracker.secondsLeft <= 0) { 
    //     displayCorrectAnswer();
    //     gameTracker.triviaIndex++;
    //     console.log("gameTracker.triviaIndex " + gameTracker.triviaIndex);
    //     gameTracker.secondsLeft = 30;
    //     theInterval = setInterval(countDown, 1000);
    //     displayNextQuestion();
    // }




    if (gameTracker.triviaIndex >= totalNumberOfQuestions) {
        theInterval = timeComplete(theInterval);
        console.log("display correctCntr and wrongCntr");
        displayGameTotals(gameTracker);
        isNewGame = true;
    }


});