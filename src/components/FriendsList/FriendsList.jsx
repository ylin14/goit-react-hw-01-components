import PropTypes from 'prop-types';

import FriendsListItem from '../FrieandsListItem/FriendsListItem.jsx';

import style from './firendsList.module.css';

function FriendsList({ friends }) {
  return (
    <ul className={style.friendList}>
      {friends.map(i => (
        <FriendsListItem
          key={i.id}
          isOnline={i.isOnline}
          avatar={i.avatar}
          name={i.name}
        />
      ))}
    </ul>
  );
}
FriendsList.defaultProps = {
  friends: [],
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendsList;