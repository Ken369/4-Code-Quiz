function populate() {
    if(quiz.isEnded()) {
       showScores();
    }
    
    else {
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        //show choices
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i< choices.length; i++)  {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
        }
    }
}
var questions = [
    new Questions("Which one is your fac color", ["Blue", "Red", "Yellow", "Black"], "C"),
    new Questions("Which one is your fac color", ["Blue", "Red", "Yellow", "Black"], "C"),
];

var quiz = new Quiz(questions);

populate();
