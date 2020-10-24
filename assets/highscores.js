if (!localStorage.getItem("highscores")){
    localStorage.setItem("highscores", "[]")
}
let highscores = JSON.parse(localStorage.getItem("highscores"));
for (let i = 0; i < highscores.length; i ++){
    const scoreDiv = document.createElement("li");
    scoreDiv.setAttribute("class", "list-group-item list-group-item-info d-flex justify-content-between align-items-center");
    scoreDiv.innerHTML = highscores[i].initials + "<span class='badge  badge-pill'>" + highscores[i].score + "/10</span>";
    document.getElementById("highscores").append(scoreDiv);
}
