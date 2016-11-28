'use strict';
import React , {PropTypes} from 'react';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';
import * as userAction from '../../actions/userAction';

class UserPage extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      user: {title: ""}
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const user = this.state.user;
    user.title = event.target.value;
    this.setState({user: user});
  }

  onClickSave() {
    this.props.dispatch(userAction.createUser(this.state.user));
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
        <h2>Add user</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.user.title} />
        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave} />
      </div>
    );
  }
}

UserPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    users: state.users
  };
}

export default connect(mapStateToProps)(UserPage);
