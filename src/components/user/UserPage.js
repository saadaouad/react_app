import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userAction from '../../actions/userAction';
import UserList from './UserList';
import {browserHistory} from 'react-router';

class UserPage extends React.Component {
  constructor(props, context){
    super(props, context);
    this.redirectToAddUserPage = this.redirectToAddUserPage.bind(this);
  }

  userRow(user, index) {
    return <div key={index}>{user.id}</div>;
  }

  redirectToAddUserPage() {
    browserHistory.push('/user');
  }

  render() {
    const {users} = this.props;

    return (
      <div>
        <Helmet title="User"/>
        <h1>Users</h1>
        <input type="submit"
               value="Add User"
               className="btn btn-primary"
               onClick={this.redirectToAddUserPage}/>
        <UserList users={users}/>
      </div>
    );
  }
}

UserPage.propTypes = {
  users: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
