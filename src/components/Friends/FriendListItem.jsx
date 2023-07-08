import React from 'react';
import PropTypes from 'prop-types';

export const FriendListItem = props => {
  return (
    <div>
      <div
        className="status"
        style={{ backgroundColor: props.isOnline ? 'green' : 'red' }}
      ></div>
      <img src={props.avatar} alt="User avatar" width="48" />
      <p>{props.name}</p>
    </div>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
