document.getElementsByClassName('quizbody')[0].style.visibility = 'hidden';

var questions = [
    {q:"Who is Rico?", c0:"Valter", c1:"Rico", c2:"Tamber", c3:"Eppy", answer:"1"},
    {q:"What is Javascript?", c0:"Pizza", c1:"Vehicle", c2:"Scripting Language", c3:"Boat", answer:"2"}
];

function startQuiz() {
    document.getElementsByClassName('quizhome')[0].style.visibility = 'hidden';
    document.getElementsByClassName('quizbody')[0].style.visibility = 'visible';
    var question = 0;
    // Setup the question layout
    document.getElementById("questiontotal").textContent=questions.length;
    document.getElementById("questionnumber").textContent=question+1;
    document.getElementById("questionheader").textContent=questions[question].q;
    // Render the quiz answer buttons
    document.getElementById("questionBtn0").textContent=questions[question].c0;
    document.getElementById("questionBtn1").textContent=questions[question].c1;
    document.getElementById("questionBtn2").textContent=questions[question].c2;
    document.getElementById("questionBtn3").textContent=questions[question].c3;
    

}

function showScores() {
    // TODO : Setup Highscore list
    alert('Unfinished');
}