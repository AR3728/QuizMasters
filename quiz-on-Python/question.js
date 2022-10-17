function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score += 10;
    }

    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}


function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}


function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<br><br><br><br><br><h1 align=center>Result</h1>";
    gameOverHTML += "<h1 id='score'> Your scores: " + quiz.score + "</h1>";
    gameOverHTML += "<a href='home.html'><button align=center class='bt'>Reattempt Quiz</button></a>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions here
var questions = [
    new Question("What is the method inside the class in python language?", ["Object", "Function","Attribute", "Argument"], "Function"),
    new Question("Which of the following is not a keyword in Python language?", ["val", "raise", "try", "with"], "val"),
    new Question("How can we generate random numbers in python using methods?", ["random.uniform ()", "random.randint()","random.random()", "All of the above"], "All of the above"),
    new Question("What command is used to shuffle a list ‘L’?", ["L.shuffle()", "random.shufflelist(L)", "shuffle(L)", " random.Shuffle(L)"], " random.Shuffle(L)"),
    new Question("Which method is used to convert raw byte data to a string?", ["Encode()", "Decode()", "Convert()", "tostring()"], "Decode()"),
    new Question("How many keywords present in the python programming language?", ["32", "61", "33", "27"], "33"),
    new Question("Which of the following arithmetic operators cannot be used with strings in python?", ["+", "*", "-", "none of these"], "-"),
    new Question("Which of the following keywords is not reversed keyword in python?", ["None", "class", "goto", "and"], "goto"),
    new Question("PVM is often called _________.", ["Python interpreter", "Python compiler", "Python volatile machine", "Portable virtual machine"], "Python interpreter"),
    new Question("Which of the following statements is not valid regarding the variable in python?", ["The variable_name can begin with alphabets", "The variable_name can begin with an underscore", "The variable_name can begin with a number", "None of the these"], "The variable_name can begin with a number")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();