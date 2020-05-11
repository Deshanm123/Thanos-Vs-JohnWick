//caching the DOM

let userScore = 0;
let computerScore = 0;  

const userScoreSpan= document.getElementById("userScore");
const computerScoreSpan = document.getElementById("computerScore");
const resultDiv = document.querySelector(".scoreBoard");
let matchstatus = document.querySelector("#result");
const rockDiv=document.getElementById("r");
const paperDiv=document.getElementById("p");
const scissorDiv=document.getElementById("s");


function letterToWeapon(letter){
    if(letter === "p") 
    return "Paper";
    else if(letter==="r") 
    return "Rock";
    else
    return "Scissor";
}

function win(thanos_input,wick_input){
 userScore++;
 userScoreSpan.innerHTML = userScore;
 matchstatus.innerHTML = `Wick Wins😁.<br>
 Thanos picked ${letterToWeapon(thanos_input)} 🤠 wick picked ${letterToWeapon(wick_input)}`;
}
function lost(thanos_input,wick_input){
 computerScore++;
 computerScoreSpan.innerHTML = computerScore;
 matchstatus.innerHTML=`Wick loses🤕.<br>Thanos Picked ${letterToWeapon(thanos_input)} 🤠 Wick picked  ${letterToWeapon(wick_input)}`;
}

function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNum =(Math.floor(Math.random()*3));
    return choices[randomNum];
} 

function game(wick_input){
let thanos_input= getComputerChoice();
switch(thanos_input+wick_input){
    case "rp":
    case "ps":
    case "sr":
        win(thanos_input,wick_input);
        break;
    case "pr":
    case "sp":
    case "rs":
       lost(thanos_input,wick_input);
        break;
    case "rr":
    case "ss":
    case "pp":
        matchstatus.innerHTML=`Thanos Escaped😱.<br> Thanos Picked ${letterToWeapon(thanos_input)} 🤠 Wick picked ${letterToWeapon(wick_input)}`;
        break;
}
}

//event listeners
 rockDiv.addEventListener('click',function(){
 game("r");
 });
paperDiv.addEventListener('click',function(){
game("p");
});
scissorDiv.addEventListener('click',function(){
game("s");
});



