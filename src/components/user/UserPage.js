'use strict';
import React , {PropTypes} from 'react';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userAction from '../../actions/userAction';

class UserPage extends React.Component {
  constructor(props, context){
    super(props, context);
  }

  userRow(user, index) {
    return <div key={index}>{user.title}</div>;
  }

  render() {
    return (
      <div>
        <Helmet title="User"/>
        <h1>User</h1>
        {this.props.users.map(this.userRow)}
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
