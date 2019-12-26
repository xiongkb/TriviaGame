var seconds;
var startTime;
var right = 0;
var wrong = 0;
var missed = 0;
// the show screen where start needs to be pressed
function start() {
    $(".start").on("click", function(){
        $(this).hide();
        startTime = 30;
        timer();
        seconds = setInterval(timer, 1000);
    });
}
start();

// timer start
function timer() {
    console.log(startTime)
    $(".timer").text(startTime);
    startTime = startTime - 1;
    if (startTime < 0) {
        clearInterval(seconds);
    }
}

// questions
var theQuestions = [
    {
        question: "What is a tabbie?",
        choices: {
            a: "A cat breed",
            b: "A cat coat pattern",
            c: "A cat color",
            d: "A cat personality"
        },
        answer: "b"
    },
    {
        question: "A cat wagging their tail means",
        choices: {
            a: "They are happy",
            b: "They are getting upset",
            c: "They are shooing away flies",
            d: "They want to play"
        },
        answer: "b"
    },
    {
        question: "A female cat is also called",
        choices: {
            a: "A Queen",
            b: "An Alpha",
            c: "A Ewe",
            d: "A Heifer"
        },
        answer: "a"
    },
    {
        question: "A cat can rotate their ears to ",
        choices: {
            a: "60 degrees",
            b: "100 degrees",
            c: "140 degrees",
            d: "180 degrees"
        },
        answer: "d"
    },
    {
        question: "A cat has how many eyelids?",
        choices: {
            a: "1",
            b: "2",
            c: "3",
            d: "4"
        },
        answer: "c"
    },
    {
        question: "Cats with extra toes are called",
        choices: {
            a: "Teratactyle Cats",
            b: "Polydactyle Cats",
            c: "Manidactyle Cats",
            d: "Binarytactyle Cats"
        },
        answer: "b"
    }
]

// showing questions to html

