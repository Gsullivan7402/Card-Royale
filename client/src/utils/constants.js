export const suits = ['hearts', 'diamonds', 'clubs','spades'];
export const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
export const deck = suits.flatMap(suit => ranks.map(rank => ({ suit, rank })));