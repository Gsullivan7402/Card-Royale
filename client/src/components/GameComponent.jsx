import React, { useState, useEffect } from 'react';
import { getCardValue, compareCards, handleWar, playRound } from '../utils/gameLogic';
import Card from './Card';
import Hand from './Hand';
import OpponentHand from './OpponentHand';
import GameField from './GameField';
import useGameState from '../utils/score';
import { deck } from '../utils/constants';
import displayleaderboard from "./displayleaderboard"

const GameComponent = () => {
  const [playerDeck, setPlayerDeck] = useState([]);
  const [opponentDeck, setOpponentDeck] = useState([]);
  const [playerCard, setPlayerCard] = useState(null);
  const [opponentCard, setOpponentCard] = useState(null);
  const { playerScore, opponentScore, incrementPlayerScore, incrementOpponentScore, resetScores } = useGameState();

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const shuffledDeck = shuffleDeck(deck);
    const midPoint = Math.floor(shuffledDeck.length / 2);
    setPlayerDeck(shuffledDeck.slice(0, midPoint));
    setOpponentDeck(shuffledDeck.slice(midPoint));
  };

  const shuffleDeck = (deck) => {

  };

  const handlePlayRound = () => {
    const playerTopCard = playerDeck.shift();
    const opponentTopCard = opponentDeck.shift();

    setPlayerCard(playerTopCard);
    setOpponentCard(opponentTopCard);

    const { updatedPlayerDeck, updatedOpponentDeck } = playRound(playerDeck, opponentDeck);
    setPlayerDeck(updatedPlayerDeck);
    setOpponentDeck(updatedOpponentDeck);

    // Updates scores or other game state based on the round outcome
  };

  return (
    <div>
      <Hand deck={playerDeck} />
      <OpponentHand deck={opponentDeck} />
      <GameField playerCard={playerCard} opponentCard={opponentCard} />
      <button onClick={handlePlayRound}>Play Round</button>
      <p>Player Score: {playerScore}</p>
      <p>Opponent Score: {opponentScore}</p>
    </div>
  );
};

export default GameComponent;