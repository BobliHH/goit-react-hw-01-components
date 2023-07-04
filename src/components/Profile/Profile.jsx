import PropTypes from 'prop-types';
import user from './user.json';

export { Profile };
<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>;
