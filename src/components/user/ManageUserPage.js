import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userAction from '../../actions/userAction';
import UserForm from './UserForm';

class ManageUserPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      user: Object.assign({}, this.props.user),
      errors: {}
    };

    this.updateUserState = this.updateUserState.bind(this);
    this.saveUser = this.saveUser.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.user.id != nextProps.user.id) {
      this.setState({user: Object.assign({}, nextProps.user)});
    }
  }

  updateUserState(event){
    const field = event.target.name;
    let user = this.state.user;
    user[field] = event.target.value;
    return this.setState({user: user});
  }

  saveUser(event){
    event.preventDefault();
    this.props.actions.saveUser(this.state.user);
    this.context.router.push('/users');
  }

  render() {
    return(
        <UserForm
          onChange={this.updateUserState}
          onSave={this.saveUser}
          user={this.state.user}
          errors={this.state.errors}
        />
    );
  }
}

ManageUserPage.PropTypes = {
  user: PropTypes.object.isRequired,
  actions : PropTypes.object.isRequired
};

ManageUserPage.contextTypes = {
  router: PropTypes.object
};

function getUserById(users, id) {
  const user = users.filter(user => user.id == id);
  if(user.length) return user[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const userId = ownProps.params.id; //from the path `/user/:id`

  let user = {id: '', firstName: '', lastName: '', profile: ''};

  if(userId && state.users.length > 0) {
    user = getUserById(state.users, userId);
  }

  return {
    user: user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageUserPage);
