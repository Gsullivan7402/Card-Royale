import React from 'react';
import Deck from './Deck';


const Gamefield = () => {

      return (
    <div className="game-field">
      <div className="left-deck">
        <Deck cards={leftDeckCards} />
      </div>
      <div className="right-deck">
        <Deck cards={rightDeckCards} />
      </div>
    </div>
  );
};

export default GameField;