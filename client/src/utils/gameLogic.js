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
  // Checks if both decks have enough cards for the "war" scenario
  if (playerDeck.length < 4 || opponentDeck.length < 4) {
    // If either player doesn't have enough cards, the game ends
    return { playerDeck, opponentDeck };
  }

  // Each player places one card face up
  const playerFaceUpCard = playerDeck.shift();
  const opponentFaceUpCard = opponentDeck.shift();

  // Each player places one card face down
  const playerFaceDownCards = playerDeck.shift();
  const opponentFaceDownCards = opponentDeck.shift();

  // Compares the face-up cards
  const result = compareCards(playerFaceUpCard, opponentFaceUpCard);

  if (result === 'player') {
    // Player wins the war
    const warCards = [...playerFaceDownCards, ...opponentFaceDownCards, playerFaceUpCard, opponentFaceUpCard];
    return {
      playerDeck: [...playerDeck, ...warCards],
      opponentDeck,
    };
  } else if (result === 'opponent') {
    // Opponent wins the war
    const warCards = [...playerFaceDownCards, ...opponentFaceDownCards, playerFaceUpCard, opponentFaceUpCard];
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
  // Randomly select a card from each player's deck
  const playerCardIndex = Math.floor(Math.random() * playerDeck.length);
  const opponentCardIndex = Math.floor(Math.random() * opponentDeck.length);
  
  const playerCard = playerDeck[playerCardIndex];
  const opponentCard = opponentDeck[opponentCardIndex];

  // Remove the selected cards from each player's deck
  playerDeck.splice(playerCardIndex, 1);
  opponentDeck.splice(opponentCardIndex, 1);

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

     // Update top cards after war
     const playerTopCard = updatedPlayerDeck[0];
     const opponentTopCard = updatedOpponentDeck[0];

    return { playerDeck: updatedPlayerDeck, opponentDeck: updatedOpponentDeck, playerTopCard, opponentTopCard };
  }
};

export const playGame = (playerDeck, opponentDeck) => {
  while (playerDeck.length > 0 && opponentDeck.length > 0) {
      // Play a round of the game
      const { playerDeck: updatedPlayerDeck, opponentDeck: updatedOpponentDeck } = playRound(playerDeck, opponentDeck);

      // Update the decks after the round
      playerDeck = updatedPlayerDeck;
      opponentDeck = updatedOpponentDeck;
  }

  // Determine the winner based on the remaining cards in the decks
  if (playerDeck.length === 0 && opponentDeck.length > 0) {
      console.log('Opponent wins the game!');
  } else if (opponentDeck.length === 0 && playerDeck.length > 0) {
      console.log('Player wins the game!');
  } else {
      console.log('It\'s a tie!');
  }
};