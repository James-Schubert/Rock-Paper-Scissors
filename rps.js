"use strict"

function computerPlay(){
    let randNum;
    randNum =  Math.floor((Math.random()*3))+1;
    console.log(randNum);
    let phrase;
    switch(randNum){
        case 1:
            phrase = "rock";
            break;
        case 2:
            phrase = "paper";
            break;
        case 3:
            phrase = "scissors";
    }
    return phrase;
}



function playRound(playerSelection, computerSelection){
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    let responseVal;
    if (player == computer) return(null);
    
    switch(player){
        case "rock":
            if(computer == "paper") responseVal = false;
            else responseVal = true;
            break;
        case "paper":
            if(computer == "scissors") responseVal = false;
            else responseVal = true;
            break;
        default:
            if(computer == "rock") responseVal = false;
            else responseVal = true;
            break;
    }
    return responseVal;

}


function takeInput(){
    let validInput = false;
    let userInput;
    while (!validInput){
        userInput = prompt("Choose rock, paper, or scissors: ");
        userInput = userInput.toLowerCase();
        if (userInput == "rock" || userInput=="paper" || userInput=="scissors"){
            validInput = true;
        }
    }
    return userInput;
}

function game(){
    console.log("Welcome to rock, paper, scissors!\n");
    let playerScore = 0;
    let computerScore = 0;
    let responseVal;
    let player;
    let computer;
    for (let i =0; i <5; i++){
        player = takeInput();
        computer = computerPlay();
        responseVal = playRound(player, computer);
        if (responseVal == null){
            console.log(`Tie! You both played ${player}`);
        }
        else if (responseVal){
              console.log(`You win this round! ${player} beats ${computer}`);
              playerScore++;
        }
        else{
            console.log(`You lose this round! ${computer} beats ${player}`);
            computerScore++;
        }
    }
    console.log("\n\n\n");
    if (playerScore > computerScore) console.log("Nice job, you won the match!");
    else console.log("You suck, that computer totally pawned you");
}

game();