import { Profile } from "./Profile/Profile";
import profileData from "./Profile/user.json";
import { Stats } from "./Statistics/Statistics";
import statsData from "./Statistics/data.json";
import { FriendList } from './Friends/FriendList';
import friendsData from "./Friends/friends.json"; 

import transactions from './Transactions/transactions.json';
import { TransactionHistory } from './Transactions/TransactionHistory';



export const App = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
        margin: '10px',
        paddingTop: '20px',
      }}
    >
      <Profile {...profileData} />
      <Stats {...statsData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
