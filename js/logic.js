document.getElementsByClassName('quizbody')[0].style.visibility = 'hidden';

function startQuiz() {
    document.getElementsByClassName('quizhome')[0].style.visibility = 'hidden';
    document.getElementsByClassName('quizbody')[0].style.visibility = 'visible';
    //alert('Hello');
    var question = 1;
    document.getElementById("questionnumber").textContent="1";
    document.getElementById("questionheader").textContent="Lorem Ipsum Question question question.";

    

}

function showScores() {
    alert('Scores Todo');
}