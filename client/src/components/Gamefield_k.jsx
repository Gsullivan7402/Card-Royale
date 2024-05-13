import { useEffect, useState } from "react";
import { deck } from "../utils/constants";
import { compareCards, shuffle, } from "../utils/gameLogic_k";
import Card from "./Card";
import Button from "./Button";

export default function Gamefield() {
    const [startGame, setStartGame] = useState(false);
    const [warIndex, setWarIndex] = useState(0);
    const [winner, setWinner] = useState("");
    const [playerCards, setPlayerCards] = useState({ deck: [], inPlay: [], discard: [] });
    const [opponentCards, setOpponentCards] = useState({ deck: [], inPlay: [], discard: [] });

    const handleStart = () => {
        setWinner("");
        const shuffledDeck = shuffle(deck);
        const middle = Math.floor(shuffledDeck.length / 2);
        const playerDeck = shuffledDeck.slice(0, middle);
        const opponentDeck = shuffledDeck.slice(middle);

        setPlayerCards({ deck: playerDeck, inPlay: [], discard: [] });
        setOpponentCards({ deck: opponentDeck, inPlay: [], discard: [] });
        setStartGame(true);
    }

    const handleNext = () => {
        // Copy player/opponent objects into new variables.
        let player = { ...playerCards };
        let opponent = { ...opponentCards };

        const playCard = () => {
            if (player.deck.length === 0) {
                const newDeck = shuffle(player.discard);
                player.deck = newDeck;
                player.discard = [];
            }
            if (opponent.deck.length === 0) {
                const newDeck = shuffle(opponent.discard);
                opponent.deck = newDeck;
                opponent.discard = [];
            }
            // Add card from top of deck to in play
            const playerInPlay = player.deck.splice(0, 1);
            const opponentInPlay = opponent.deck.splice(0, 1);
            player = { ...player, inPlay: playerInPlay };
            opponent = { ...opponent, inPlay: opponentInPlay };
            setPlayerCards(player);
            setOpponentCards(opponent);
        }
        if (player.inPlay.length === 0) {
            // If deck is empty, shuffle discard and add to deck.
            playCard();
            return;
        }

        const comparison = compareCards(player.inPlay[warIndex], opponent.inPlay[warIndex]);
        if (comparison === "player") {
            player.discard = player.discard.concat(player.inPlay).concat(opponent.inPlay);
            player.inPlay = [];
            opponent.inPlay = [];
            playCard();
            setWarIndex(0);
            return;
        } else if (comparison === "opponent") {
            opponent.discard = opponent.discard.concat(player.inPlay).concat(opponent.inPlay);
            player.inPlay = [];
            opponent.inPlay = [];
            playCard();
            setWarIndex(0);
            return;
        } else {
            // War were declared
            if (player.deck.length < 2) {
                const newDeck = shuffle(player.discard);
                player.deck = newDeck;
                player.discard = [];
            }
            if (opponent.deck.length < 2) {
                const newDeck = shuffle(opponent.discard);
                opponent.deck = newDeck;
                opponent.discard = [];
            }
            const cardAmount = (player.deck.length > 1 && opponent.deck.length > 1) ? 2 : 1;
            const playerAddInPlay = player.deck.splice(0, cardAmount);
            const opponentAddInPlay = opponent.deck.splice(0, cardAmount);
            player = { ...player, inPlay: player.inPlay.concat(playerAddInPlay) };
            opponent = { ...opponent, inPlay: opponent.inPlay.concat(opponentAddInPlay) };
            setPlayerCards(player);
            setOpponentCards(opponent);
            setWarIndex(prev => prev + 1);
            return;
        }

    }

    // Watch deck lengths for winner
    useEffect(() => {
        if (startGame) {
            if (playerCards.deck.length === 0 && playerCards.inPlay.length === 0 && playerCards.discard.length === 0) {
                setWinner("Opponent Wins!");
                setStartGame(false);
                setOpponentCards({ deck: [], inPlay: [], discard: [] });
                setPlayerCards({ deck: [], inPlay: [], discard: [] });
            } else if (opponentCards.deck.length === 0 && opponentCards.inPlay.length === 0 && opponentCards.discard.length === 0) {
                setWinner("Player Wins!");
                setStartGame(false);
                setOpponentCards({ deck: [], inPlay: [], discard: [] });
                setPlayerCards({ deck: [], inPlay: [], discard: [] });
            } else {
                return;
            }
        }
    }, [playerCards, opponentCards])


    return (
        <div className="gamefield flex flex-col items-center p-4 bg-green-800">
            {/* Opponent's hand (single face-down card) */}
            <p className="font-bold">Cards left: {opponentCards.deck.length + opponentCards.discard.length}</p>
            <h3 className="text-white font-bold">Opponent Hand</h3>
            <div className="opponent-hand flex items-center mb-4 justify-center">
                <Card suit="" rank="" isFaceUp={false} />
                {opponentCards.inPlay.map((card) => (
                    <Card key={`${card.rank}_of_${card.suit}`} suit={card.suit} rank={card.rank} isFaceUp={true} />
                ))}
            </div>

            {/* Start Game or Next button */}
            <Button
                onClick={() => { !startGame ? handleStart() : handleNext() }}
                className="next-button mb-4 p-2 bg-white hover:bg-gray-400 rounded"
            >
                {startGame ? "Next" : "Start Game"}
            </Button>
            {winner && <div>{winner}</div>}
            {/* Player's hand (single face-down card) */}
            <div className="player-hand flex items-center mt-4 justify-center">
                <Card suit="" rank="" isFaceUp={false} />
                {playerCards.inPlay.map((card) => (
                    <Card key={`${card.rank}_of_${card.suit}`} suit={card.suit} rank={card.rank} isFaceUp={true} />
                ))}

            </div>
            <h3 className="text-white font-bold mb-2">Player Hand</h3>
            <p className="font-bold">Cards left: {playerCards.deck.length + playerCards.discard.length}</p>
        </div>);
}