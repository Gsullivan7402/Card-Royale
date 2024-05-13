// In your Gamefield component
import React, { useState, useEffect } from "react";
import Button from "./Button";
import Card from "./Card";
import { deck, suits, ranks } from "../utils/constants";
import { shuffleDeck } from "../components/Deck"; // Assuming shuffleDeck function is moved here
import { playRound, handleWar, compareCards } from "../utils/gameLogic"; 

export default function Gamefield() {
  // State variables for the player's and opponent's hands
  const [playerHand, setPlayerHand] = useState([]);
  const [opponentHand, setOpponentHand] = useState([]);

  // State variables for the current top cards for player and opponent
  const [playerTopCard, setPlayerTopCard] = useState(null);
  const [opponentTopCard, setOpponentTopCard] = useState(null);

  // State variable to track whether a war is happening
  const [isWar, setIsWar] = useState(false);

  // Initialize the game state
  useEffect(() => {
    // Shuffle the deck and split it into two hands
    const shuffledDeck = shuffleDeck(deck);
    const middle = Math.floor(shuffledDeck.length / 2);
    const playerDeck = shuffledDeck.slice(0, middle);
    const opponentDeck = shuffledDeck.slice(middle);

    setPlayerHand(playerDeck);
    setOpponentHand(opponentDeck);
  }, []);

  // Handle the 'Start Game' button click
  const handleStartGame = () => {
    // Set isWar to false when starting a new game
    setIsWar(false);
    // Call playGame function to start the game
    playGame(playerHand, opponentHand);
  };

  // Handle the 'Next' button click
  const handleNext = () => {
    if (playerHand.length > 0 && opponentHand.length > 0) {
      // Play a round of the game
      const { playerDeck, opponentDeck } = playRound(playerHand, opponentHand);

      // Update the state with the new decks
      setPlayerHand(playerDeck);
      setOpponentHand(opponentDeck);

      // Update the top cards
      setPlayerTopCard(playerDeck[0]);
      setOpponentTopCard(opponentDeck[0]);

      // Check if a war is happening
      setIsWar(compareCards(playerTopCard, opponentTopCard) === 'war');
    } else {
      // If either hand is empty, handle the end of the game round
      console.log("No more cards left for one or both players.");
      // Handle end-of-game logic here (e.g., announce winner, reset game)
    }
  };

  return (
    <div className="gamefield flex flex-col items-center p-4 bg-green-800">
      {/* Opponent's hand (single face-down card) */}
      <p className="font-bold">Cards left: {opponentHand.length}</p>
      <h3 className="text-white font-bold">Opponent Hand</h3>
      <div className="opponent-hand flex items-center mb-4 justify-center">
        <Card suit="" rank="" isFaceUp={false} />
        {opponentTopCard && (
          <Card
            suit={opponentTopCard.suit}
            rank={opponentTopCard.rank}
            isFaceUp={true}
          />
        )}
        {isWar && (
           <>
           {/* Render the first additional card */}
           <Card suit={opponentHand[1]?.suit} rank={opponentHand[1]?.rank} isFaceUp={true} />
           {/* Render the second additional card */}
           <Card suit={opponentHand[2]?.suit} rank={opponentHand[2]?.rank} isFaceUp={true} />
         </>
        )}
      </div>

      {/* Start Game or Next button */}
      <Button
        actionType={playerHand.length === 0 || opponentHand.length === 0 ? "start" : "next"}
        onClick={playerHand.length === 0 || opponentHand.length === 0 ? handleStartGame : handleNext}
        className="next-button mb-4 p-2 bg-white hover:bg-gray-400 rounded"
      >
        {playerHand.length === 0 || opponentHand.length === 0 ? "Start Game" : "Next"}
      </Button>

      {/* Player's hand (single face-down card) */}
      <div className="player-hand flex items-center mt-4 justify-center">
        <Card suit="" rank="" isFaceUp={false} />
        {playerTopCard && (
          <Card
            suit={playerTopCard.suit}
            rank={playerTopCard.rank}
            isFaceUp={true}
          />
        )}
          {isWar && (
            <>
            {/* Render the first additional card */}
            <Card suit={playerHand[1]?.suit} rank={playerHand[1]?.rank} isFaceUp={true} />
            {/* Render the second additional card */}
            <Card suit={playerHand[2]?.suit} rank={playerHand[2]?.rank} isFaceUp={true} />
          </>
          )
}
        
      </div>
      <h3 className="text-white font-bold mb-2">Player Hand</h3>
      <p className="font-bold">Cards left: {playerHand.length}</p>
    </div>
  );
}
