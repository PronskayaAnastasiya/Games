const squares = document.querySelectorAll('.square');
//console.log(squars);
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');

let timerId=null;
let hitPosition;
let result = 0;
let currentTime = 60;

function randomSquare(){
    squares.forEach(square => {
        square.classList.remove('mole');
    })
    let randomPosition = squares[Math.floor(Math.random()*9)];
    //console.log(randomPosition);
    randomPosition.classList.add('mole');
    hitPosition = randomPosition.id;
}

squares.forEach(square =>{
    square.addEventListener('mousedown',()=>{
        if(square.id == hitPosition){
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    })
})

function moveMole(){
    timerId = setInterval(randomSquare,1000)
}
moveMole();

function countDown(){
    currentTime--;
    timeLeft.textContent = currentTime;
    if(currentTime==0){
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert("GAME OVER! Yor final score is "+ result);
    }
}
let countDownTimerId = setInterval(countDown,1000);