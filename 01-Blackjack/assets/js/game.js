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
}

createDeck();