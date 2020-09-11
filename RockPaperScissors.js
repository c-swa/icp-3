// Copyright (c) 2020 - Christopher Aram Swayne
// Rock Paper Chroma (A variation of Rock Paper Scissors)
// Built in HTML, JavaScript, and CSS
// For questions/comments - reach out to me on Keybase.io @c.swa

let playerWins = 0
let computerWins = 0

const rock_paper_scissor = ["Rock", "Paper", "Scissor"]

let playerHand = {
    selection:rock_paper_scissor[null]
}

let computerHand = {
    selection:rock_paper_scissor[null]
}

function reset(){
    playerWins = 0
    computerWins = 0
    document.getElementById("player_count").innerHTML = playerWins;
    document.getElementById("computer_count").innerHTML = computerWins;
}

// Computer logic
function computerSelect(){
    computerHand.selection = rock_paper_scissor[Math.floor(Math.random()*3)];
}

function selectRock(){
    playerHand.selection = rock_paper_scissor[0]
    computerSelect();
    switch (checkHand()){
        case 1:
            playerWins += 1
            document.getElementById("player_count").innerHTML = playerWins;
            break;
        case 2:
            // draw, nothing happens
            break;
        case 3:
            computerWins += 1
            document.getElementById("computer_count").innerHTML = computerWins;
            break;
        case 101:
            // error
            break;
    }
}

function selectPaper(){
    playerHand.selection = rock_paper_scissor[1]
    computerSelect();
    switch (checkHand()){
        case 1:
            playerWins += 1
            document.getElementById("player_count").innerHTML = playerWins;
            break;
        case 2:
            // draw, nothing happens
            break;
        case 3:
            computerWins += 1
            document.getElementById("computer_count").innerHTML = computerWins;
            break;
        case 101:
            // error
            break;
    }
}

function selectScissor(){
    playerHand.selection = rock_paper_scissor[2]
    computerSelect()
    switch (checkHand()){
        case 1:
            playerWins += 1
            document.getElementById("player_count").innerHTML = playerWins;
            break;
        case 2:
            // draw, nothing happens
            break;
        case 3:
            computerWins += 1
            document.getElementById("computer_count").innerHTML = computerWins;
            break;
        case 101:
            // error
            break;
    }
}


// game logic
function checkHand() {
// rock, paper, scissors logic
// Player / Computer
// Rock / Rock
    if (playerHand.selection === rock_paper_scissor[0] && computerHand.selection === rock_paper_scissor[0]) {
        return 2
    }
// Rock / Scissor
    else if (playerHand.selection === rock_paper_scissor[0] && computerHand.selection === rock_paper_scissor[2]) {
        return 1
    }
// Rock / Paper
    else if (playerHand.selection === rock_paper_scissor[0] && computerHand.selection === rock_paper_scissor[1]) {
        return 3
    }
// Paper / Rock
    else if (playerHand.selection === rock_paper_scissor[1] && computerHand.selection === rock_paper_scissor[0]){
        return 1
    }
// Paper / Paper
    else if (playerHand.selection === rock_paper_scissor[1] && computerHand.selection === rock_paper_scissor[1]){
        return 2
    }
// Paper / Scissor
    else if (playerHand.selection === rock_paper_scissor[1] && computerHand.selection === rock_paper_scissor[2]){
        return 3
    }
// Scissor / Rock
    else if (playerHand.selection === rock_paper_scissor[2] && computerHand.selection === rock_paper_scissor[0]){
        return 3
    }
// Scissor / Paper
    else if (playerHand.selection === rock_paper_scissor[2] && computerHand.selection === rock_paper_scissor[1]){
        return 1
    }
// Scissor / Scissor
    else if (playerHand.selection === rock_paper_scissor[2] && computerHand.selection === rock_paper_scissor[2]){
        return 2
    }
// If anything except the standard rules of the game have been entered:
    else {
        return 101
    }
}