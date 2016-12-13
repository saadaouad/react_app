import React, { PropTypes } from 'react';
import UserListRow from './UserListRow';

const UserList = ({users}) => {
  return (
    <table className="table-condensed">
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Profile</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user =>
          <UserListRow key={user.id} user={user} />
        )}
      </tbody>
    </table>
  );
};

UserList.propTypes = {
  users: PropTypes.array.isRequired
};

export default UserList;
