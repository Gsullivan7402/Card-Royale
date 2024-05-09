import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Import the back of the card image
import cardBackSrc from '../assets/cards/card_back.png';

export default function Card({ suit, rank, isFaceUp = true }) {
    const [imgSrc, setImgSrc] = useState(null);

    useEffect(() => {
        if (isFaceUp) {
            // Load the front of the card image if the card is face up
            import(`../assets/cards/${rank}_of_${suit}.png`).then((module) => {
                setImgSrc(module.default);
            });
        }
    }, [rank, suit, isFaceUp]);

    return (
        <div className="w-24 h-34 m-2 p-1 border border-black rounded">
            {/* Conditional rendering based on whether the card is face up */}
            <img
                src={isFaceUp ? imgSrc : cardBackSrc}
                alt={isFaceUp ? `${suit} of ${rank}` : 'Card Back'}
                className="w-full h-full"
            />
        </div>
    );
}

Card.propTypes = {
    suit: PropTypes.string.isRequired,
    rank: PropTypes.string.isRequired,
    isFaceUp: PropTypes.bool, // Define isFaceUp prop type as a boolean
};

Card.defaultProps = {
    isFaceUp: true, // Default value for isFaceUp is true (card face-up)
};
