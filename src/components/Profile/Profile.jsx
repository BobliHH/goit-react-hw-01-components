import React from 'react';
import PropTypes from 'prop-types';

export const Profile = props => {
  return (
    <div className="profileContainer">
      <div className="profile">
        <img
          className="profileImg"
          alt="props.name"
          src={props.avatar}
          width={'50'}
        />
        <h2 className="userName">{props.username}</h2>
        <h4 className="userTag">{'@' + props.tag}</h4>
        <h3 className="userLocation">{props.location}</h3>
      </div>

      <ul className="userStats">
        <li className="userStats__item">
          Followers<strong>{props.stats.followers}</strong>
        </li>
        <li className="userStats__item">
          Views <strong>{props.stats.views}</strong>
        </li>
        <li className="userStats__item">
          Likes<strong>{props.stats.likes}</strong>
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
