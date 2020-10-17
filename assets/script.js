const interval = 1000;
const startButton = document.getElementById("start-button");
const quizDiv = document.getElementById("quiz");
const startingTime = 100;
const quizObject = {
    questions :[ 
    {
        question : "Which of these is a valid Markup language?",
        multipleChoice : ["python", "C++", "HTML", "Microsoft"],
        correctChoice : "HTML"
    }, 
    {
        question : "What does 'bit' mean?",
        multipleChoice : ["a little bit", "itty bitty", "Ribbit", "binary digit"],
        correctChoice : "binary digit"
    },
    {
        question : "What is the home page of a website usually called?",
        multipleChoice : ["index.html", "index[1]", "home.com", "None of the above"],
        correctChoice : "index.html"
    },
    {
        question : "Where in our HTML file to we link to stylesheets and libraries that the page will access?",
        multipleChoice : ["the JS File", "the <head> element", "the <html> element", "the <header> element"],
        correctChoice : "the <head> element"
    },
    {
        question : "How many <div> elements can you use in an HTML file?",
        multipleChoice : ["1 for each letter of the alphabet", "2^n, where n is the size fo your RAM in bytes", "as many as you need", "128"],
        correctChoice : "as many as you need"
    },
    {
        question : "Which of these isn't a valid command in Javascript?",
        multipleChoice : ["Math.floor(2.62);", "document.write('Hello World');", "var temperature = 98.6;", "for(each): run{foo};"],
        correctChoice : "for(each): run{foo};"
    },
    {
        question : "What doees CSS stand for?",
        multipleChoice : ["Central Styling Symbols", "Create Small Sponges", "Cascading Style Sheet", "Cest Son Sac"],
        correctChoice : "Cascading Style Sheet"
    },
    {
        question : "What is the unsyntaxed code you may use to plan your program called?",
        multipleChoice : ["psudocode", "precode", "library", "object-oriented programming"],
        correctChoice : "psudocode"
    },
    {
        question : "Which of these lines of JS code will set the variable 'input' to a value given by the user?",
        multipleChoice : ["var num = input;", "var prompt = input('Give me a number!');", "var input === 'Give me a number!'", "var input = prompt('Give me a number!);"],
        correctChoice : "var input = prompt('Give me a number!);"
    },
    {
        question : "How many times will the given loop run: for(var i = 0; i < 9; i++)",
        multipleChoice : ["10", "3^2", "i", "2^i"],
        correctChoice : "3^2"
    }],
    count : 0
}

startButton.addEventListener("click", function(){

    startButton.innerHTML = "";
    let timerDiv = document.getElementById("quizTimer");
    timerDiv.setAttribute( "class", "row justify-content-center border rounded-pill");
    let timeLeft = startingTime;
    timerDiv.innerHTML = "Go!";
    let timer = setInterval( function(){
        timerDiv.innerHTML = timeLeft;
        if (timeLeft < 10){
            timerDiv.innerHTML = "0" + timeLeft;
        }
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(timer);
            // endQuiz();
            //document.getElementById("countdown").innerHTML = "It's over"; //if there's no time left, programm in this 2 lines is clearing interval (nothing is counting now) 
            //and you see "It's over" instead of time left
          }
    }, interval)

    const count = quizObject.count;
    quizDiv.innerHTML = "<h1>"+ quizObject.questions[count].question + "</h1>" + "<ul id = 'multChoiceDiv' class = '' ></ul>";
    for (let i = 0; i < 4; i++){
        const multChoiceli = document.createElement("li");
        multChoiceli.setAttribute("class", "badge");
        multChoiceli.setAttribute("data-choice", i);
        multChoiceli.innerHTML = "<p>" + quizObject.questions[count].multipleChoice[i] + "</p>"
        multChoiceli.addEventListener("mouseover",  function(event){
            event.target.setAttribute("class", "badge badge-info");
        }, true);
        multChoiceli.addEventListener("mouseout", function(event){
            event.target.setAttribute("class", "badge");
        }, true);
        // multChoiceli.addEventListener("click", nextQuestion());
        document.getElementById("multChoiceDiv").append(multChoiceli);
    }
    
    // if (count >= quizQuestions.length){
    //     endQuiz();
    // }

});

// function nextQuestion(){
//     console.log(this);
// }

// function timerFunction() {
//     let timeLeft = startingTime;
//     let timer = setInterval( function(){
//         let timerDiv = document.getElementById("quizTimer");
//         timerDiv.innerHTML = "" + timeLeft;
//         if (timeLeft < 10){
//             timerDiv.innerHTML = "0" + timeLeft;
//         }
//         timeLeft--;
//         if (timeLeft < 0) {
//             clearInterval(timer);
//             // endQuiz();
//             //document.getElementById("countdown").innerHTML = "It's over"; //if there's no time left, programm in this 2 lines is clearing interval (nothing is counting now) 
//             //and you see "It's over" instead of time left
//           }
//     }, interval)
// }

// function endQuiz(){
//     return 0;
// };



























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
            -aswers[a,b,c,d]
            -correct answer = anwers[i]
    step 02 (X):create a function that renders questions to the page one at a time
    step 03 ():create a function that renders the high score list
    step 04 ():create a function that adds to the high scores
    step 05 ():create event listeners for user to select answer
    step 06 ():create event listeners for user input of initials/delet high schores
    step 07 ():create event listener to retake quiz/reset page
    step 08 ():create timer for quiz
    step 09 ():create function that evaluates user input

*/
//variables that will hold the questions and answers
// var quizQuestion = document.querySelector(".question");
// var multipleChoiceList = document.querySelector("#mulitple-choice");
// var startButton = document.querySelector(".start-button");

// console.log(quizQuestion);
// console.log(multipleChoiceList);
// //variable that holds the user's score
// var score;

// //variable that holds the time remaining for the quiz
// var timeLeft;

// //this array holds all the questions. each array element is an object with 3 parameters
// var questions = [
//     q1 = {
//         question : "Which of these is a valid Markup language?",
//         multipleChoice : ["python", "C++", "HTML", "Microsoft"],
//         correctChoice : "HTML"
//     },
//     q2 = {
//         question : "What does 'bit' mean?",
//         multipleChoice : ["a little bit", "itty bitty", "Ribbit", "binary digit"],
//         correctChoice : "binary digit"
//     },
//     q3 = {
//         question : "What is the home page of a website usually called?",
//         multipleChoice : ["index.html", "index[1]", "home.com", "None of the above"],
//         correctChoice : "index.html"
//     },
//     q4 = {
//         question : "Where in our HTML file to we link to stylesheets and libraries that the page will access?",
//         multipleChoice : ["the JS File", "the <head> element", "the <html> element", "the <header> element"],
//         correctChoice : "the <head> element"
//     },
//     q5 = {
//         question : "How many <div> elements can you use in an HTML file?",
//         multipleChoice : ["1 for each letter of the alphabet", "2^n, where n is the size fo your RAM in bytes", "as many as you need", "128"],
//         correctChoice : "as many as you need"
//     },
//     q6 = {
//         question : "Which of these isn't a valid command in Javascript?",
//         multipleChoice : ["Math.floor(2.62);", "document.write('Hello World');", "var temperature = 98.6;", "for(each): run{foo};"],
//         correctChoice : "for(each): run{foo};"
//     },
//     q7 = {
//         question : "What doees CSS stand for?",
//         multipleChoice : ["Central Styling Symbols", "Create Small Sponges", "Cascading Style Sheet", "Cest Son Sac"],
//         correctChoice : "Cascading Style Sheet"
//     },
//     q8 = {
//         question : "What is the unsyntaxed code you may use to plan your program called?",
//         multipleChoice : ["psudocode", "precode", "library", "object-oriented programming"],
//         correctChoice : "psudocode"
//     },
//     q9 = {
//         question : "Which of these lines of JS code will set the variable 'input' to a value given by the user?",
//         multipleChoice : ["var num = input;", "var prompt = input('Give me a number!');", "var input === 'Give me a number!'", "var input = prompt('Give me a number!);"],
//         correctChoice : "var input = prompt('Give me a number!);"
//     },
//     q10 = {
//         question : "How many times will the given loop run: for(var i = 0; i < 9; i++)",
//         multipleChoice : ["10", "3^2", "i", "2^i"],
//         correctChoice : "3^2"
//     }
// ];

// //This is the function that renders the question to the page
// function renderQuiz(questionNum){

//     //first clear the elements
//     quizQuestion.textContent = "";
//     multipleChoiceList.innerHTML = "";

//     //creates an easily accesible object containing the current question
//     var questionObject = questions[questionNum];

//     //next display the question and create the answers in a list
//     quizQuestion.textContent = questionObject.question;
//     for(var i = 0; i < questionObject.multipleChoice.length; i ++){
//         var multChoiceli = document.createElement("li");
//         multChoiceli.setAttribute("id", "possible-answer")
//         multChoiceli.setAttribute("class", "row m-1")
//         multChoiceli.textContent = questionObject.multipleChoice[i];
//         var selectButton = document.createElement("button");
//         selectButton.setAttribute("class", "button rounded-button float-right m-1");
//         selectButton.textContent = "SELECT";

//         multChoiceli.appendChild(selectButton);
//         multipleChoiceList.appendChild(multChoiceli);
//         selectButton.addEventListener("click", function(event){
//             //next questino function
//         })
//     }

// }

// function renderScores(){
//     var containerEl = document.querySelector(".container");
//     var btnEl = document.querySelector("#btn");
//     var colClass = "col-md-4 text-center border bg-light";


// }

// startButton.addEventListener("click", function(){
//     var questionsIndex = 0;
//     renderQuiz(questionsIndex);
// });