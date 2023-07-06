import React from 'react';
import PropTypes from 'prop-types';

export const Profile = props => {
  return (
    <div>
      <img alt="props.name" src={props.avatar} width={'50'} />
      <h2>{props.username}</h2>
      <h4>{'@' + props.tag}</h4>
      <h3>{props.location}</h3>
      <ul>
        <li>
          <strong>{props.stats.followers}</strong> Followers
        </li>
        <li>
          <strong>{props.stats.views}</strong> Views
        </li>
        <li>
          <strong>{props.stats.likes}</strong> Likes
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
