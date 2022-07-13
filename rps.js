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

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
let myTimeout;
function showResults(result){    
    clearTimeout(myTimeout);
    results.classList.remove("hideResult");
    results.classList.add("results");
    //results.textContent = " ";
    sleep(500);
    switch(result){
        case 0:
            results.textContent = ("You win this round!");
            break;
        case 1:
            results.textContent = ("The computer won this round!");
            break;
        case 2:
            results.textContent = ("It's a tie!");
            break;
    }
    
    myTimeout = setTimeout(function(){
        results.classList.add("hideResult");
        results.textContent = " ";
        results.classList.remove("results");
        
        
    }, 2000);
    
}

function playRound(playerSelection){
    rock.classList.remove("buttonSelected");
    paper.classList.remove("buttonSelected");
    scissors.classList.remove("buttonSelected");
    if (playerSelection == "rock") rock.classList.add("buttonSelected");
    else if (playerSelection == "paper") paper.classList.add("buttonSelected");
    else  scissors.classList.add("buttonSelected");
    let computerSelection = computerPlay().toLowerCase();
    let responseVal;
    if (playerSelection == computerSelection) responseVal = 2;
    else{
        switch(playerSelection){
            case "rock":
                if(computerSelection == "paper") responseVal = 1;
                else responseVal = 0;
                break;
            case "paper":
                if(computerSelection == "scissors") responseVal = 1;
                else responseVal = 0;
                break;
            case "scissors":
                if(computerSelection == "rock") responseVal = 1;
                else responseVal = 0;
                break;
        }
    }
    showResults(responseVal);
    return responseVal;

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



//game();

const container = document.querySelector("#container");

const title = document.createElement("h1");
title.setAttribute("id", "title");
title.textContent = 'Rock Paper Scissors!';
container.appendChild(title);

const results = document.createElement('div');
results.setAttribute("id","results");
container.appendChild(results);
results.classList.add("results");

const buttonBox = document.createElement('div');
buttonBox.setAttribute("id","buttonBox");


const rock = document.createElement('div');
rock.classList.add("mainButton");
rock.addEventListener("click", () => playRound("rock"));
rock.textContent = "ROCK";

const paper = document.createElement('div');
paper.classList.add("mainButton");
paper.addEventListener("click", () => playRound("paper"));
paper.textContent = "PAPER";

const scissors = document.createElement('div');
scissors.classList.add("mainButton");
scissors.addEventListener("click", () => playRound("scissors"));
scissors.textContent = "SCISSORS";

buttonBox.appendChild(rock);
buttonBox.appendChild(paper);
buttonBox.appendChild(scissors);

container.appendChild(buttonBox);
container.appendChild(results);
