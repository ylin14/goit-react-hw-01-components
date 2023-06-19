import PropTypes from 'prop-types';
import style from './friendsListItem.module.css';

function FriendsListItem({ avatar, isOnline, name }) {
  return (
    <li className={style.item}>
      <span
        className={isOnline ? `${style.status}` : `${style.statusOff}`}
      ></span>
      <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={style.name}>{name}</p>
    </li>
  );
}

FriendsListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};

export default FriendsListItem;
