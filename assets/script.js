/*
    This code will:
        1]display questions one at a time
        2]display counter, count down
        3]evaluate question responses
            a.keep track of correct:incorrect responses
            b.subract time from counter for incorrect answers
        4]at end of quiz, get user initials
        5]display high scores

*/

/*

    step 01 (X):create array of question objects
        questions will have properties:
            -question
            -a
            -b
            -c
            -d
    step 02 ():create a function that renders questions to the page one at a time
    step 03 ():create a function that renders the high score list
    step 04 ():create a function that adds to the high scores
    step 05 ():create event listeners for user to select answer
    step 06 ():create event listeners for user input of initials/delet high schores
    step 07 ():create event listener to retake quiz/reset page
    step 08 ():create timer for quiz
    step 09 ():create function that evaluates user input

*/

//this is the variable that will hold the question being used by the page
var currentQuestion = questions[0];

//this array holds all the questions
var questions = [
    questionOne = {
        question = "Which of these is a valid Markup language?",

    },
    questionTwo = {
        question = "What does 'bit' mean?"

    },
    questionThree = {
        question = "What is the home page of a website usually called?"

    },
    questionFour = {
        question = "Where in our HTML file to we link to stylesheets and libraries that the page will access?"
    
    },
    questionFive = {
        question = "How many <div> elements can you use in an HTML file?"
    
        
    },
    questionSix = {
        question = "Which of these isn't a valid command in Javascript?"

    },
    questionSeven = {
        question = "What doees CSS stand for?"

    },
    questionEight = {
        question = "What is the unsyntaxed code you may use to plan your program called?"
    },
    questionNine = {
        question = "Which of these lines of JS code will set the variable 'input' to a value given by the user?"
    
    },
    questionTen = {
        question = "How many times will the given loop run: for(var i = 0; i < 9; i++)"
    
    }
];