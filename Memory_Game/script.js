const cardArray=[
    {
        name:'барли',
        img:'images/барли.jpg',
    },
    {
        name:'бит',
        img:'images/бит.jpg',
    },
    {
        name:'ворон',
        img:'images/ворон.jpg',
    },
    {
        name:'джесси',
        img:'images/джесси.jpg',
    },
    {
        name:'кольт',
        img:'images/кольт.jpg',
    },
    {
        name:'леон',
        img:'images/леон.jpg',
    },
    {
        name:'макс',
        img:'images/макс.jpg',
    },
    {
        name:'мортис',
        img:'images/мортис.jpg',
    },
    {
        name:'пи',
        img:'images/пи.jpg',
    },
    {
        name:'покко',
        img:'images/покко.jpg',
    },
    {
        name:'шелли',
        img:'images/шелли.jpg',
    },
    {
        name:'эльпримо',
        img:'images/эльпримо.jpg',
    },
    {
        name:'барли',
        img:'images/барли.jpg',
    },
    {
        name:'бит',
        img:'images/бит.jpg',
    },
    {
        name:'ворон',
        img:'images/ворон.jpg',
    },
    {
        name:'джесси',
        img:'images/джесси.jpg',
    },
    {
        name:'кольт',
        img:'images/кольт.jpg',
    },
    {
        name:'леон',
        img:'images/леон.jpg',
    },
    {
        name:'макс',
        img:'images/макс.jpg',
    },
    {
        name:'мортис',
        img:'images/мортис.jpg',
    },
    {
        name:'пи',
        img:'images/пи.jpg',
    },
    {
        name:'покко',
        img:'images/покко.jpg',
    },
    {
        name:'шелли',
        img:'images/шелли.jpg',
    },
    {
        name:'эльпримо',
        img:'images/эльпримо.jpg',
    },
];

cardArray.sort(()=>0.5-Math.random());
console.log(cardArray);

const resultDisplay = document.querySelector('#result');
const gridDisplay = document.querySelector('#grid');
let cardsChosen=[];
let cardsChosenIds=[];
const cardsWon=[];

function createBoard(){
    for(let i=0; i<cardArray.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src','images/фон.jpg');
        card.setAttribute('data-id',i);
        console.log(card, i);
        card.addEventListener('click',flipCard);
        gridDisplay.appendChild(card);
    }
}
createBoard();

function flipCard(){
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if(cardsChosen.length==2){
        setTimeout(checkMatch,500);
    }
}
function checkMatch(){

    console.log(cardsChosen);
    console.log(cardsChosenIds);

    const cards=document.querySelectorAll('img');
    const optionOneId=cardsChosenIds[0];
    const optionTwoId=cardsChosenIds[1];
    if(optionOneId==optionTwoId){
        cards[optionOneId].setAttribute('src','images/фон.jpg');
        cards[optionTwoId].setAttribute('src','images/фон.jpg');
        alert('Ты нажал на одного и того же бравлера!');
    }
    else if(cardsChosen[0]==cardsChosen[1]){
        alert('Ты нашел одинаковых бравлеров!');
        cards[optionOneId].setAttribute('src','images/фон2.jpg');
        cards[optionTwoId].setAttribute('src','images/фон2.jpg');
        cards[optionOneId].removeEventListener('click',flipCard);
        cards[optionTwoId].removeEventListener('click',flipCard);
        cardsWon.push(cardsChosen);

    }
    else{
        cards[optionOneId].setAttribute('src','images/фон.jpg');
        cards[optionTwoId].setAttribute('src','images/фон.jpg');
        alert('Попробуй ещё раз!');
    }
    resultDisplay.innerHTML=cardsWon.length;
    cardsChosen=[];
    cardsChosenIds=[];

    if(cardsWon.length==cardArray.length/2){
        resultDisplay.innerHTML =  'Поздравляю! Ты нашел все пары!'
    }
}
