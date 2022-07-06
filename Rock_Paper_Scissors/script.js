const computerChoiseDisplay=document.getElementById('computer-choise');
const userChoiseDisplay=document.getElementById('user-choise');
const resultDisplay=document.getElementById('result');
const possibleChoices=document.querySelectorAll('button');
let userChoise;
let computerChoise;
let result;

possibleChoices.forEach(possibleChoice=>possibleChoice.addEventListener('click',(e)=>{
    userChoise=e.target.id;
    userChoiseDisplay.innerHTML=userChoise;
    generateComputerChoice();
    getResult();

}));

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random()*possibleChoices.length)+1;
    if(randomNumber===1){
        computerChoise='rock';
    }
    if(randomNumber===2){
        computerChoise='scissors';
    }
    if(randomNumber===3){
        computerChoise='paper';
    }
    computerChoiseDisplay.innerHTML=computerChoise;
}

function getResult(){
    if(computerChoise===userChoise){
        result='its a draw!'
    }
    if(computerChoise==='rock'&&userChoise==='paper'){
        result='you win!'
    }
    if(computerChoise==='rock'&&userChoise==='scissors'){
        result='you lost!'
    }

    if(computerChoise==='paper'&&userChoise==='scissors'){
        result='you win!'
    }
    if(computerChoise==='paper'&&userChoise==='rock'){
        result='you lost!'
    }

    if(computerChoise==='scissors'&&userChoise==='rock'){
        result='you win!'
    }
    if(computerChoise==='scissors'&&userChoise==='paper'){
        result='you lost!'
    }
    resultDisplay.innerHTML=result;
}