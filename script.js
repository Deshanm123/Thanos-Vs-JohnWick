//caching the DOM

const userScore = 0;
const computerScore =0;  

const userScoreSpan= document.getElementById("userScore");
const computerScoreSpan = document.getElementById("computerScore");
const resultDiv = document.querySelector(".scoreBoard");
const ScoreBoardSpan = document.querySelector(".result");
const rockDiv=document.getElementById("r");
const paperDiv=document.getElementById("p");
const scissorDiv=document.getElementById("s");

function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNum =(Math.floor(Math.random()*3));
    return choices[randomNum];
    
}

//event listeners
// rockDiv.addEventListener('click',function(){

// });
// paperDiv.addEventListener('click',function(){

// });
// scissorDiv.addEventListener('click',function(){

// });


//function call
 console.log(getComputerChoice());