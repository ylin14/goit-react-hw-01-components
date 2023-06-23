import Profile from './Profile/Profile.jsx';
import Statistic from './Statistics/Statistics.jsx';
import FriendsList from './FriendsList/FriendsList.jsx';
import Transactions from './Transactions/Transactions.jsx';

import user from '../json/user';
import data from '../json/data';
import friends from '../json/friends';
import transaction from '../json/transactions';

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
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="Upload stats" stats={data} />
      <Statistic stats={data} />
      <FriendsList friends={friends} />
      <Transactions transaction={transaction} />
    </div>
  );
};
