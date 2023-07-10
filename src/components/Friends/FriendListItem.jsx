import React from 'react';
import PropTypes from 'prop-types';

export const FriendListItem = props => {
  return (
    <div className='friendsItem'>
      <div
        className="status"
        style={{ backgroundColor: props.isOnline ? 'green' : 'red' }}
      ></div>
      <img className='friendsImg' src={props.avatar} alt="User avatar" width="48" />
      <p className='friendsName'>{props.name}</p>
    </div>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
