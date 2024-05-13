import React from 'react';
import PropTypes from 'prop-types';
import Item from './item'; // Adjust the import path as needed

function List({ users }) {
  return (
    <ul className="item-wrapper">
      {users.map(user => (
        <Item key={user.userID} user={user} />
      ))}
    </ul>
  );
}

List.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    userID: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    wins: PropTypes.number.isRequired
  })).isRequired
};

export default List;
