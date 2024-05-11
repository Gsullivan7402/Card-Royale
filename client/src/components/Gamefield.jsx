import React, { useState, useEffect } from 'react';
import Button from './Button';
import Card from './Card';
import { deck, suits, ranks } from '../utils/constants';
import { shuffleDeck } from '../components/Deck'; // Assuming shuffleDeck function is moved here

export default function Gamefield() {
    // State variables for the player's and opponent's hands
    const [playerHand, setPlayerHand] = useState([]);
    const [opponentHand, setOpponentHand] = useState([]);

    // State variables for the current top cards for player and opponent
    const [playerTopCard, setPlayerTopCard] = useState(null);
    const [opponentTopCard, setOpponentTopCard] = useState(null);

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

    // Handle the 'Next' button click
    const handleNext = () => {
        if (playerHand.length > 0 && opponentHand.length > 0) {
            // Draw the top card from each hand
            const playerCard = playerHand.pop();
            const opponentCard = opponentHand.pop();

            // Update the state with the drawn cards and remaining hands
            setPlayerTopCard(playerCard);
            setOpponentTopCard(opponentCard);
            setPlayerHand([...playerHand]);
            setOpponentHand([...opponentHand]);

            // Add code here to compare cards or update scores as needed
            console.log('Player card:', playerCard);
            console.log('Opponent card:', opponentCard);
        } else {
            // If either hand is empty, handle the end of the game round
            console.log('No more cards left for one or both players.');
            // Handle end-of-game logic here (e.g., announce winner, reset game)
        }
    };

    return (
        <div className="gamefield flex flex-col items-center p-4 bg-green-800">
            {/* Opponent's hand (single face-down card) */}
            <div className="opponent-hand flex mb-4 justify-center">
                <Card suit="" rank="" isFaceUp={false} />
                {opponentTopCard && (
                    <Card suit={opponentTopCard.suit} rank={opponentTopCard.rank} isFaceUp={true} />
                )}
            </div>

            {/* Next button */}
            <Button actionType="next" onClick={handleNext} className="next-button mb-4 p-2 bg-white hover:bg-gray-400 rounded">
                Next
            </Button>

            {/* Player's hand (single face-down card) */}
            <div className="player-hand flex mt-4 justify-center">
                <Card suit="" rank="" isFaceUp={false} />
                {playerTopCard && (
                    <Card suit={playerTopCard.suit} rank={playerTopCard.rank} isFaceUp={true} />
                )}
            </div>
        </div>
    );
}
