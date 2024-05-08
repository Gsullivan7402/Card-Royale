import { ranks } from './constants';

export const getCardValue = (card) => {
  return ranks.indexOf(card.rank) + 2; // Assigns values from 2 (for '2') to 14 (for 'ace')
};

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

export const handleWar = (playerDeck, opponentDeck) => {
    let playerFaceDownCard, opponentFaceDownCard;
  // Checks if both decks have enough cards for the "war" scenario
  if (playerDeck.length < 4 || opponentDeck.length < 4) {
    // If either player doesn't have enough cards, the game ends
    return { playerDeck, opponentDeck };
  }

  // Each player places one card face up
  const playerFaceUpCard = playerDeck.shift();
  const opponentFaceUpCard = opponentDeck.shift();

  // Compares the face-up cards
  const result = compareCards(playerFaceUpCard, opponentFaceUpCard);

  if (result === 'player') {
    // Player wins the war
    const warCards = [playerFaceDownCard, opponentFaceDownCard, playerFaceUpCard, opponentFaceUpCard];
    return {
      playerDeck: [...playerDeck, ...warCards],
      opponentDeck,
    };
  } else if (result === 'opponent') {
    // Opponent wins the war
    const warCards = [playerFaceDownCard, opponentFaceDownCard, playerFaceUpCard, opponentFaceUpCard];
    return {
      playerDeck,
      opponentDeck: [...opponentDeck, ...warCards],
    };
  } else {
    // If the face-up cards are also equal, recursively handle another "war"
    const { updatedPlayerDeck, updatedOpponentDeck } = handleWar(playerDeck, opponentDeck);
    return { updatedPlayerDeck, updatedOpponentDeck };
  }
};

export const playRound = (playerDeck, opponentDeck) => {
  const playerCard = playerDeck.shift();
  const opponentCard = opponentDeck.shift();

  const result = compareCards(playerCard, opponentCard);

  if (result === 'player') {
    // Updates player's deck and score
    return { playerDeck: [...playerDeck, playerCard, opponentCard], opponentDeck };
  } else if (result === 'opponent') {
    // Updates opponent's deck and score
    return { playerDeck, opponentDeck: [...opponentDeck, playerCard, opponentCard] };
  } else {
    // Handles "war" scenario
    const { updatedPlayerDeck, updatedOpponentDeck } = handleWar(playerDeck, opponentDeck);
    return { playerDeck: updatedPlayerDeck, opponentDeck: updatedOpponentDeck };
  }
};