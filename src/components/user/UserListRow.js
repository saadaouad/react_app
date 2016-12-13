import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const UserListRow = ({user}) => {
  return (
    <tr>
      <td><Link to={'/user/' + user.id}>{user.id}</Link></td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.profile}</td>
    </tr>
  );
};

UserListRow.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserListRow;
