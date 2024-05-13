import { ranks } from './constants';

const getCardValue = (card) => {
    return ranks.indexOf(card.rank) + 2; // Assigns values from 2 (for '2') to 14 (for 'ace')
};

export function shuffle(array) {
    let newArray = [...array];
    let currentIndex = newArray.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [newArray[currentIndex], newArray[randomIndex]] = [
            newArray[randomIndex], newArray[currentIndex]];
    }

    return newArray;
}

export const compareCards = (playerCard, opponentCard) => {
    const playerCardValue = getCardValue(playerCard);
    const opponentCardValue = getCardValue(opponentCard);

    if (playerCardValue > opponentCardValue) {
        return 'player';
    } else if (playerCardValue < opponentCardValue) {
        return 'opponent';
    } else {
        return 'war';
    }
};