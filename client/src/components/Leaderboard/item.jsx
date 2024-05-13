import React from 'react';
import PropTypes from 'prop-types';

function Item({ user }) {
  console.log(user); // Debug to see what each Item receives
  return (
    <li className="item">
      <span className="item__name">{user.displayName}</span>
      <span className="item__wins">{user.wins} Wins</span>
    </li>
  );
}


Item.propTypes = {
  user: PropTypes.shape({
    userID: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    wins: PropTypes.number.isRequired
  }).isRequired
};

export default Item;
