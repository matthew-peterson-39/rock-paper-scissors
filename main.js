var playerChoice;
var playerScore = parseInt(document.getElementById("player-score").innerText);
var computerScore = parseInt(document.getElementById("cpu-score").innerText);


const playButton = document.querySelector(".play-button");
const pRock = document.querySelector(".rock-user");
const pPaper = document.querySelector(".paper-user");
const pScissor = document.querySelector(".scissor-user");

const pScore = document.querySelector(".player-counter");
const cScore = document.querySelector(".computer-counter");

pRock.addEventListener("click", e => {
    setPlayerChoice(0);
});

function setPlayerChoice(choice) {
    playerChoice = choice;
    return;
};

pPaper.addEventListener("click", e => {
    setPlayerChoice(1);
});

pScissor.addEventListener("click", e => {
    setPlayerChoice(2);
});

playButton.addEventListener("click", e =>  {   
    let winner = getWinner(getPlayerChoice());
    updateScore(winner);
});

function computerChoice() {
    return Math.floor(Math.random() * 3);
};

function getPlayerChoice() {
    return playerChoice;
};

function getComputerChoice() {
    return computerChoice;
};

function getWinner(playerChoice) {
    let rock = 0;
    let paper = 1;
    let scissor = 2;
    let compChoice = computerChoice();
    if (playerChoice === rock) {
        switch (compChoice) {
            case rock: return tie();    
            case paper: return compWin();
            case scissor: return playerWin();
        };
    }
    else if (playerChoice === paper) {
        switch (compChoice) {
            case rock: return playerWin(); 
            case paper: return tie(); 
            case scissor: return compWin();
        };
    }
    else if (playerChoice === scissor){
        switch (compChoice) {
            case rock: return tie();
            case paper: return compWin();
            case scissor:return playerWin();
        };
    }
    else {
        console.log("Idk what happened there was an error i guess")
    }
};

function updateScore(winner) {
    if (winner === "player") {
        playerScore++;
    }
    if (winner === "computer") {
        computerScore++; 
    }
    resetPlayerChoice();
};

function resetPlayerChoice() {
    playerChoice = -1;
    return;
};

function compWin() {
    updateScore("computer");
    return;
};

function playerWin() {
    updateScore("player");
    return;
};

function tie() {
    updateScore("tie");
    return;
};

setInterval(function(){ 
    document.getElementById("player-score").innerText = playerScore;
    document.getElementById("cpu-score").innerText = computerScore;
    }, 500);