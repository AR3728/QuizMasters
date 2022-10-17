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
    new Question("Which of the following option leads to the portability and security of Java?", ["Bytecode is executed by JVM", "The applet makes the Java code secure.","Use of exception handling", "Dynamic binding between objects"], "Bytecode is executed by JVM"),
    new Question("Which of the following is not a Java features?", ["Dynamic", "Architecture Neutral", "Use of pointers", "Object-oriented"], "Use of pointers"),
    new Question("The u0021 article referred to as a", ["Unicode escape sequence", "Octal escape","Hexadecimal", "Line feed"], "Unicode escape sequence"),
    new Question("_____ is used to find and fix bugs in the Java programs.", ["JVM", "JRE", "JDK", "JDB"], "JDB"),
    new Question("What is the return type of the hashCode() method in the Object class?", ["Object", "int", "long", "void"], "int"),
    new Question("Which of the following is a valid long literal?", ["ABH8097", "L990023", "904423", "0xnf029L"], "0xnf029L"),
    new Question("Which of the following creates a List of 3 visible items and multiple selections abled?", ["new List(false, 3)", "new List(3, true)", "new List(true, 3)", "new List(3, false)"], "new List(3, true)"),
    new Question("Which of the following is true about the anonymous inner class?", ["It has only methods", "Objects can't be created", "It has a fixed class name", "It has no class name"], "It has no class name"),
    new Question("Which package contains the Random class?", ["java.util package", "java.lang package", "java.awt package", "java.io package"], "java.util package"),
    new Question("An interface with no fields or methods is known as a ______.", ["Runnable Interface", "Marker Interface", "Abstract Interface", "CharSequence Interface"], "Marker Interface")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();