'use strict';
import React from 'react';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';
import * as userAction from '../actions/userAction';

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
    //console.log(this.state.user.title);
    this.props.dispatch(userAction.createUser(this.state.user));
  }

  render() {
    return (
      <div>
        <Helmet title="User"/>
        <h1>User</h1>
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

function mapStateToProps(state, ownProps) {
  return {
    users: state.users
  };
}

export default connect(mapStateToProps)(UserPage);
