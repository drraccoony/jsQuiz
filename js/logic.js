document.getElementsByClassName('quizbody')[0].style.visibility = 'hidden';

var question = 0;
var timer = 60;
var score = 0;
var name = '';
var questions = [
    { q: "What is Javascript?", c0: "Pizza", c1: "Vehicle", c2: "Scripting Language", c3: "Boat", answer: "2" },
    { q: "The external JavaScript file must contain the <script> tag.", c0: "True", c1: "False", c2: "", c3: "", answer: "1" },
    { q: "Where is JS mostly used?", c0: "Web", c1: "Pavement", c2: "Vehicle Trip Computers", c3: "Rocket Boosters", answer: "0" },
    { q: "How can you display content to the web console?", c0: "console.write", c1: "writetoconsole.text", c2: "console.log", c3: "You can't", answer: "2" },
    { q: "Inside which HTML element do we put the JavaScript?", c0: "<js>", c1: "<java>", c2: "<scripting>", c3: "<script>", answer: "3" },
    { q: "Where is the correct place to insert a JavaScript?", c0: "<body>", c1: "<head>", c2: "<footer>", c3: "<html>", answer: "0" },
];


function startQuiz() {
    document.getElementsByClassName('quizhome')[0].style.visibility = 'hidden';
    document.getElementsByClassName('quizhome')[0].style.height = "0px";
    document.getElementsByClassName('quizbody')[0].style.visibility = 'visible';
    // Reset some variables
    question = 0;
    timer = 60;
    score = 0;
    // Setup the question layout
    document.getElementById("questiontotal").textContent = questions.length;
    renderQuestion();
}

function renderQuestion() {
    document.getElementById('questionBtn2').style.visibility = 'visible';
    document.getElementById('questionBtn3').style.visibility = 'visible';
    // Setup the header elements
    document.getElementById("questionnumber").textContent = question + 1;
    document.getElementById("questionheader").textContent = questions[question].q;
    // Render the quiz answer buttons
    document.getElementById("questionBtn0").textContent = questions[question].c0;
    document.getElementById("questionBtn1").textContent = questions[question].c1;
    document.getElementById("questionBtn2").textContent = questions[question].c2;
    document.getElementById("questionBtn3").textContent = questions[question].c3;

    // Handle true/false and hide the 
    if (questions[question].c2 === "")
        document.getElementById('questionBtn2').style.visibility = 'hidden';
    if (questions[question].c3 === "")
        document.getElementById('questionBtn3').style.visibility = 'hidden';
}

function answer(a) {

    if (a == questions[question].answer) { score += 250 }
    else { let a = question + 1; console.log('Question ' + a + ' incorrect'); }

    if (question < questions.length - 1) {
        question++
    }
    else {
        endQuiz();
    }
    document.getElementById("scoreDisplay").textContent = score;
    renderQuestion();
}

function endQuiz() {
    alert('Quiz is done!');
    document.getElementsByClassName('quizhome')[0].style.visibility = 'visible';
    document.getElementsByClassName('quizbody')[0].style.visibility = 'hidden';
    document.getElementsByClassName('quizhome')[0].style.height = "";
}

function showScores() {
    // TODO : Setup Highscore list
    alert('Unfinished');
}
