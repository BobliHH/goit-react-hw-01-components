import { Profile } from "./Profile/Profile";
import profileData from "./Profile/user.json";
import { Stats } from "./Statistics/Statistics";
import statsData from "./Statistics/data.json";
import { FriendList } from './Friends/FriendList';
import friendsData from "./Friends/friends.json"; 


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile {...profileData} />
      <Stats {...statsData} />
      <FriendList {...friendsData} />
    </div>
  );
};
