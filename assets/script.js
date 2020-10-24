const interval = 1000;
const quizButtonDiv = document.getElementById("quiz-button");
const startButton = document.getElementById("start-button");
const quizDiv = document.getElementById("quiz");
let timerDiv = document.getElementById("quizTimer");
const startingTime = 50;
let score = 0;
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
        multipleChoice : ["the JS File", "the head element", "the html element", "the header element"],
        correctChoice : "the head element"
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
        multipleChoice : ["var num = input;", "var prompt = input('Give me a number!');", "var input === 'Give me a number!'", "var input = prompt('Give me a number!');"],
        correctChoice : "var input = prompt('Give me a number!');"
    },
    {
        question : "How many times will the given loop run: for(var i = 0; i < 9; i++)",
        multipleChoice : ["10", "3^2", "i", "2^i"],
        correctChoice : "3^2"
    }]
}

startButton.addEventListener("click", function(){

    for (let i = 0; i < quizObject.questions.length; i++){
        localStorage.setItem("q" + i, JSON.stringify(quizObject.questions[i]));
    }
    localStorage.setItem("quizCount", "0");
    localStorage.setItem("score", JSON.stringify(score));

    quizButtonDiv.innerHTML = "";
    timerDiv.setAttribute( "class", "row justify-content-center border rounded-pill");

    timerDiv.innerHTML = startingTime;
    let timer = setInterval( function(){
        let timeLeft = timerDiv.innerHTML

        
        
        timeLeft--;
        timerDiv.innerHTML = timeLeft;
        if (timeLeft < 10  && timeLeft > 0){
            timerDiv.innerHTML = "0" + timeLeft;
        }else if (timeLeft <= 0) {
            timeLeft = 0
            timerDiv.innerHTML = timeLeft;
            
            endQuiz(timer);
        }
        
    }, interval)

    quizDiv.innerHTML = "<h1 id = 'qTitle'></h1>" + "<ul id = 'multChoiceDiv' class = '' ></ul>";
    for (let i = 0; i < 4; i++){
        const multChoiceli = document.createElement("li");
        multChoiceli.setAttribute("class", "badge font-size display-4 m-3");
        multChoiceli.setAttribute("id", "mc" + i);
        multChoiceli.addEventListener("mouseover",  event => {
            event.target.setAttribute("class", "badge badge-info display-4 m-3");
        }, true);
        multChoiceli.addEventListener("mouseout", event => {
            event.target.setAttribute("class", "badge display-4 m-3");
        }, true);
        multChoiceli.addEventListener("click", event => {

            let quizCount = JSON.parse(localStorage.getItem("quizCount"));
            let qOb = JSON.parse(localStorage.getItem("q" + quizCount));
            if (event.target.innerHTML === qOb.correctChoice) {
                let newScore = JSON.parse(localStorage.getItem("score"));
                newScore++;
                localStorage.setItem("score", JSON.stringify(newScore));
            }
            else {
                let timeLeft = timerDiv.innerHTML
                timeLeft -= 5;
                if (timeLeft < 0){
                    timerDiv.innerHTML = 0;
                    
                    
                    endQuiz(timer);
                }else{
                    timerDiv.innerHTML = timeLeft
                }
            }
            quizCount++;
            if (quizCount < quizObject.questions.length){
                localStorage.setItem("quizCount", quizCount);
                qOb = JSON.parse(localStorage.getItem("q" + quizCount));
                renderQuiz(qOb);
            }else{
                
                
                endQuiz(timer);
            }
        });
        document.getElementById("multChoiceDiv").append(multChoiceli);
    }

    renderQuiz(JSON.parse(localStorage.getItem("q" + JSON.parse(localStorage.getItem("quizCount")))));
});

function renderQuiz(qOb){
    document.getElementById("qTitle").innerHTML = qOb.question;
    for (let i = 0; i < qOb.multipleChoice.length; i++){
        document.getElementById("mc" + i).innerHTML = qOb.multipleChoice[i];
    }
}

function endQuiz(timer){

    timerDiv.innerHTML = "Quiz Over!";
    clearInterval(timer);
    quizDiv.innerHTML = "<h1>Quiz Over</h1><p class = 'lead'>You scored " + localStorage.getItem("score") + " out of 10</p><form id = 'initials'><label for= 'initials'>Enter your initials</label><div class='row justify-content-center'><div class='col-2 form-group'><input id = 'first' type = 'text' class = 'form-control text-center' placeholder = '-' maxlength = '1'></div><div class='col-2 form-group'><input id = 'second' type = 'text' class='form-control text-center' placeholder = '-' maxlength = '1'></div><div class = 'col-2 form-group'><input id = 'third' type = 'text' class = 'form-control text-center' placeholder = '-' maxlength = '1'></div></div></form>";
    const endButton = document.createElement("button");
    endButton.setAttribute("class", "btn btn-outline-secondary");
    endButton.innerHTML = "<a href = './highscores.html'>ENTER HIGHSCORE</a>"
    endButton.addEventListener("click", function (){
        const newScore = {
            initials : document.getElementById("first").value + document.getElementById("second").value + document.getElementById("third").value,
            score : JSON.parse(localStorage.getItem("score"))
        }
        if (!localStorage.getItem("highscores")){
            localStorage.setItem("highscores", "[]")
        }
        let highscores = JSON.parse(localStorage.getItem("highscores"));
        highscores.push(newScore);
        localStorage.setItem("highscores", JSON.stringify(highscores));
    });
    quizButtonDiv.append(endButton);

}