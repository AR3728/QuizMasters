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
    new Question("The ____ attribute is used to identify the values of variables.", ["text", "http-equiv","name", "content"], "content"),
    new Question("Which of the following statements is true", ["The web designer shouldn’t just be concerned about the looks but also about user interface", "Usability is very important in web design", "a and b", "None of the above"], "a and b"),
    new Question("Which tag is used to identify the keywords describing the site?", ["Title tag", "Comment tag","Meta tag", " Anchor tag"], "Meta tag"),
    new Question("Which are used with a tag to modify its function?", ["Attributes", "Files", "Functions", "Documents"], "Attributes"),
    new Question("Which form of event propagation handles the registered container elements?", ["Event Propagation", "Event Registration", "Event Capturing", "Default Actions"], "Event Capturing"),
    new Question("Which method receives the return value of setInterval() to cancel future invocations?", ["clearInvocation()", "cancelInvocation()", "clearInterval()", "clear()"], "clearInterval()"),
    new Question("Which is the method that operates on the return value of $()", [" show()", "css()", "click()", "done()"], "css()"),
    new Question("How can you access the state of a component from inside of a member function?", ["this.getState()", "this.prototype.stateValue", "this.state", "this.values"], "this.values"),
    new Question(" Props are _____into other components", ["Injected", "Methods", "Both A and B", "All of these"], "Methods"),
    new Question("Which of the following API is a MUST for every ReactJS component?", ["render", "getInitialState", "renderComponent", "None"], "renderComponent")
];
// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();

