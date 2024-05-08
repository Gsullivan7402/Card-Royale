import React, { useState, useEffect } from 'react';
import Button from './Button'; 
import { deck } from './constants'; 

function Deck() {
    const shuffleDeck = (deck) => {
        const shuffledDeck = [...deck]; // Create a copy of the deck
        for (let i = shuffledDeck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
        }
        return shuffledDeck;
    };

    // Initialize player and opponent hands
    const [playerHand, setPlayerHand] = useState([]);
    const [opponentHand, setOpponentHand] = useState([]);

    useEffect(() => {
        // Shuffle the deck and split into two hands when the component mounts
        const shuffledDeck = shuffleDeck(deck);
        const middle = Math.floor(shuffledDeck.length / 2);
        const playerHand = shuffledDeck.slice(0, middle);
        const opponentHand = shuffledDeck.slice(middle);

        setPlayerHand(playerHand);
        setOpponentHand(opponentHand);
    }, []);

    // Function to draw a card from the player's hand
    const drawPlayerCard = () => {
        if (playerHand.length > 0) {
            const drawnCard = playerHand.pop();
            setPlayerHand([...playerHand]); // Update state
            return drawnCard;
        }
        return null; // Return null if no cards left
    };

    // Function to draw a card from the opponent's hand
    const drawOpponentCard = () => {
        if (opponentHand.length > 0) {
            const drawnCard = opponentHand.pop();
            setOpponentHand([...opponentHand]); // Update state
            return drawnCard;
        }
        return null; // Return null if no cards left
    };

    // Handle the 'Next' button click
    const handleNext = () => {
        const playerCard = drawPlayerCard(); // Draw card for the player
        const opponentCard = drawOpponentCard(); // Draw card for the opponent

        // Add code here to handle the drawn cards (e.g., comparing them, updating scores, etc.)
        console.log('Player card:', playerCard);
        console.log('Opponent card:', opponentCard);
    };

    return (
        <div className="deck-container">
            <div className="player-hand">
                <h3>Player Hand</h3>
                <p>Cards left: {playerHand.length}</p>
                {/* Display drawn cards or other player-specific UI */}
            </div>
            <div className="opponent-hand">
                <h3>Opponent Hand</h3>
                <p>Cards left: {opponentHand.length}</p>
                {/* Display drawn cards or other opponent-specific UI */}
            </div>
            {/* Render the 'Next' button and attach handleNext to onClick */}
            <Button actionType="next" onClick={handleNext}>
                Next
            </Button>
        </div>
    );
}

export default Deck;
