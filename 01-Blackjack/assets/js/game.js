// Variables
let deck = [];
const types = ['C','D','H','S'];
const specials = ['A','J','Q','K'];

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

takeCard();