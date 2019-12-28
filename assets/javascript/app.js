var seconds;
var startTime;
var right = 0;
var wrong = 0;
var missed = 0;
var counter = 0;
var i;
// the show screen where start needs to be pressed
function start() {
    $(".start").on("click", clock);
}
start();

function clock(){
    $(this).hide();
    startTime = 15;
    timer();
    seconds = setInterval(timer, 1000);
    quiz();
}

// timer start
function timer() {
    $(".body").show();
    $(".timer").text(startTime);
    startTime = startTime - 1;
    if (startTime < 0) {
        clearInterval(seconds);
        counter ++;
        missed ++;
        clock();
    }
}

$(".a").on("click", function (){clicker("a")});
$(".b").on("click", function (){clicker("b")});
$(".c").on("click", function (){clicker("c")});
$(".d").on("click", function (){clicker("d")});

function clicker(picked){
    if (picked === theQuestions[i].answer) {
        $(".body").hide();
        $(".screen").html("<img alt='cat is right' src='./assets/images/rightcat.jpeg'>");
        right ++;
        counter ++;
        clearInterval(seconds)
        setTimeout(quiz, 5000);
        setTimeout(timer, 5000);
        setTimeout(clock, 5000);
    } else {
        $(".body").hide();
        $(".screen").html("<p>NO!! You are wrong!</p><img alt='cat meme' src='./assets/images/womenyellingcat.jpg'><p>The answer is " + theQuestions[i].answer);
        wrong ++;
        counter ++;
        clearInterval(seconds);
        setTimeout(quiz, 5000);
        setTimeout(clock, 5000);
    }
}

// questions
var theQuestions = [
    {
        question: "What is a tabbie?",
        choices: {
            a: "a. A cat breed",
            b: "b. A cat coat pattern",
            c: "c. A cat color",
            d: "d. A cat personality"
        },
        answer: "b"
    },
    {
        question: "A cat wagging their tail means: ",
        choices: {
            a: "a. They are happy",
            b: "b. They are getting upset",
            c: "c. They are shooing away flies",
            d: "d. They want to play"
        },
        answer: "b"
    },
    {
        question: "A female cat is also called: ",
        choices: {
            a: "a. A Queen",
            b: "b. An Alpha",
            c: "c. A Ewe",
            d: "d. A Heifer"
        },
        answer: "a"
    },
    {
        question: "A cat can rotate their ears to: ",
        choices: {
            a: "a. 60 degrees",
            b: "b. 100 degrees",
            c: "c. 140 degrees",
            d: "d. 180 degrees"
        },
        answer: "d"
    },
    {
        question: "A cat has how many eyelids?",
        choices: {
            a: "a. 1",
            b: "b. 2",
            c: "c. 3",
            d: "d. 4"
        },
        answer: "c"
    },
    {
        question: "Cats with extra toes are called: ",
        choices: {
            a: "a. Teratactyle Cats",
            b: "b. Polydactyle Cats",
            c: "c. Manidactyle Cats",
            d: "d. Binarytactyle Cats"
        },
        answer: "b"
    }
]

// showing questions to html
function quiz() {
    $(".screen").html("");
    i = counter; //picking the question
    
    console.log(counter)
    if (counter > 5) {
        console.log("test")
        $(".game-contents").hide();
        $(".result").html("<p>RESULTS</p><p>Answered Right: "+right+"<p>Answered Wrong:"+wrong+"<p>Missed: "+missed);
        $(".reset").html("Click here to RESTART")
    } else {
        $(".question").text(theQuestions[i].question);
    $(".a").text(theQuestions[i].choices.a);
    $(".b").text(theQuestions[i].choices.b);
    $(".c").text(theQuestions[i].choices.c);
    $(".d").text(theQuestions[i].choices.d);
    }
}

