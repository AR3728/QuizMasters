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
    new Question("Which one of the below is not divide and conquer approach?", ["Insertion Sort", "Merge Sort","Shell Sort", "Heap Sort"], "Merge Sort"),
    new Question(" A circular linked list can be used for", ["Stack", "Queue", "Both Stack & Queue", "Neither Stack or Queue"], "Both Stack & Queue"),
    new Question("Which of the following is example of in-place algorithm?", ["Bubble Sort", "Merge Sort","Insertion Sort", "All of the above"], "Merge Sort"),
    new Question("Which of the below mentioned sorting algorithms are not stable?", ["Selection Sort", "Bubble Sort", "Merge Sort", "Insertion Sort"], "Selection Sort"),
    new Question("Index of arrays in C programming langauge starts from", ["0", "1", "either 0 or 1", "Undefined"], "0"),
    new Question("Heap is an example of", ["complete binary tree", "spanning tree", "sparse tree", "binary search tree"], "complete binary tree"),
    new Question("If we choose Prim's Algorithm for uniquely weighted spanning tree instead of Kruskal's Algorithm, then", ["we'll get a different spanning tree.", "we'll get the same spanning tree.", "spanning will have less edges.", "spanning will not cover all vertices."], "we'll get the same spanning tree."),
    new Question("Which of the following keywords is not reversed keyword in python?", ["None", "class", "goto", "and"], "goto"),
    new Question("The worst case complexity of binary search matches with −", ["interpolation search", "linear search", "merge sort", "none of the above"], "linear search"),
    new Question("What will be the minimum number of jumps required to reach the end of the array arr[] ={0,1,3,6,3,6,8,5}?", ["1", "2", "3", "not possible to reach the end"], "not possible to reach the end")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();