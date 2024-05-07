import react from 'react';
import PropTypes from 'prop-types';

function Item({ user }) {
  return (
    <li className="item">
      <div className="item__avatar">
        <img className="item__avatar__img" src={user.picture} alt={user.displayName} />
      </div>
      <span className="item__name">{user.displayName}</span>
      <span className="item__wins">{user.wins} Wins</span>
    </li>
  );
}

Item.propTypes = {
  user: PropTypes.shape({
    userID: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    wins: PropTypes.number.isRequired,
    picture: PropTypes.string.isRequired
  }).isRequired
};

export default Item;
