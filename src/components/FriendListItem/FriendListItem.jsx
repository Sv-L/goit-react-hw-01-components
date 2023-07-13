import PropTypes from 'prop-types';
import {
  Item,
  StatusOnline,
  StatusOffline,
  Avatar,
  Name,
} from './FriendListItem.styled';

const FriendListItem = ({ friends }) => {
  return (
    <>
      {friends.map(friend => (
        <Item key={friend.id}>
          {friend.isOnline ? (
            <StatusOnline></StatusOnline>
          ) : (
            <StatusOffline></StatusOffline>
          )}
          <Avatar src={friend.avatar} alt="User avatar" width="48" />
          <Name>{friend.name}</Name>
        </Item>
      ))}
    </>
  );
};
export default FriendListItem;
FriendListItem.prototype = {
  friends: PropTypes.exact({
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
