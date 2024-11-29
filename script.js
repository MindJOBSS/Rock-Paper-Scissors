const btns = document.querySelectorAll(".btns button");
const resetBtn = document.querySelector(".reset");
let scores = {
    player: 0,
    computer: 0
}

let choices = {
    player: "null",
    computer: "null"
}


btns.forEach(function (btn){
    btn.addEventListener("click" , function () {
        if (btn.getAttribute("class") != "reset"){
            choices.player = btn.getAttribute("class");
            computerChoice();
            gameLogic();
        }
    })
})

resetBtn.addEventListener("click" , function (){
    resetScores();
    document.querySelector(".game-op h4").innerText = "Hope you are having a Good Day!."
    resetChoices();
})






function computerChoice() {
    let randomNum = Math.random() * 3;
    let randomChoice = Math.floor(randomNum) + 1;
    switch (randomChoice){
        case 1:
            choices.computer = "rock";
            break;
        case 2:
            choices.computer = "paper";
            break;
        case 3:
            choices.computer = "scissors";
            break;
    }
    console.log(choices.computer);
}

function gameLogic(){
    if ((choices.player == "rock" && choices.computer == "scissors") || (choices.player == "scissors" && choices.computer == "paper") || (choices.player == "paper" && choices.computer == "rock") ){
        playerScore();
        displayChoice("player");
    }else if ((choices.computer == "rock" && choices.player == "scissors") || (choices.computer == "scissors" && choices.player == "paper") || (choices.computer == "paper" && choices.player == "rock") ){
        computerScore();
        displayChoice("computer");
    }else {
        console.log("draw");
        displayChoice("draw");
    }
}

function playerScore(){
    scores.player += 1;
    document.querySelector(".player h3").innerText = `${scores.player}`;
}

function computerScore(){
    scores.computer += 1;
    document.querySelector(".computer h3").innerText = `${scores.computer}`;
}

function displayChoice(winner){
    if (winner === "player"){
        document.querySelector(".game-op h4").innerText = `Computer chose ${choices.computer}, You Won!.`;
    } else if (winner === "draw"){
        document.querySelector(".game-op h4").innerText = `Computer chose ${choices.computer}, Its a draw.`;
    }else {
        document.querySelector(".game-op h4").innerText = `Computer chose ${choices.computer}, You Lost.`;
    }
}

function resetScores(){
    scores.player = 0;
    document.querySelector(".player h3").innerText = `${scores.player}`;
    scores.computer = 0;
    document.querySelector(".computer h3").innerText = `${scores.computer}`;
}

function resetChoices(){
    choices.computer = "null";
    choices.player = "null";
}