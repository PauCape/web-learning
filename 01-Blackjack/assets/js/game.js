// Variables
let deck = [];
const types = ['C','D','H','S'];
const specials = ['A','J','Q','K'];

let playerPoints = 0;
let computerPoints = 0;

// HTML references
const btnNewGame = document.querySelector('#btnNewGame');
const btnTakeCard = document.querySelector('#btnTakeCard');
const btnEndGame = document.querySelector('#btnEndGame');

const playerPointsHTML = document.querySelector('#playerPoints');
const computerPointsHTML = document.getElementById('#computerPoints'); 

const playerCards = document.querySelector('#playerCards');
const computerCards = document.querySelector('#computerCards');


// Functions
const createDeck = () => {

    for (let i = 2; i <= 10; i++) {
        for (let type of types) {
            deck.push(i + type);
        }
    }

    for (let type of types) {
        for (let special of specials) {
            deck.push(special + type);
        }
    }

    console.log(deck);
    deck = _.shuffle(deck);
    console.log(deck);
}

createDeck();

const takeCard = () => {

    if (deck.length === 0) {
        throw 'There is no cards in the deck';
    }

    const card = deck.pop();

    console.log(card);
    console.log(deck);

    return card;
}

const cardValue = (card) => {

    const value = card.substring(0, card.length-1);
    let points = 0;

    if (isNaN(value)) {

        return points = (value === 'A') ? 11 : 10;
        
    } else {

        return points = value * 1;
    }
}

cardValue('2D');

// Events
btnTakeCard.addEventListener('click', () => {

    const card = takeCard();

    playerPoints = playerPoints + cardValue(card);

    playerPointsHTML.innerText = playerPoints;

    const imageCard = document.createElement('img');
    imageCard.src = `assets/cards/${card}.png`;
    imageCard.classList.add('card-style');

    playerCards.append(imageCard);

    console.log(card);

});