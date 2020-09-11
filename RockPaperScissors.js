// Copyright (c) 2020 - Christopher Aram Swayne
// Rock Paper Chroma (A variation of Rock Paper Scissors)
// Built in HTML, JavaScript, and CSS
// For questions/comments - reach out to me on Keybase.io @c.swa


const rock_paper_scissor = ["Rock", "Paper", "Scissor"]

let playerHand = {
    selection:rock_paper_scissor[null]
}

let computerHand = {
    selection:rock_paper_scissor[null]
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