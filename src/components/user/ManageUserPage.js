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
  }

  updateUserState(event){
    const field = event.target.name;
    let user = this.state.user;
    user[field] = event.target.value;
    return this.setState({user: user});
  }

  render() {
    return(
        <UserForm
          onChange={this.updateUserState}
          user={this.state.user}
          errors={this.state.errors}
        />
    );
  }
}

ManageUserPage.PropTypes = {
  myProp : PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  let user = {id: '', firstName: '', lastName: '', profile: ''};
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
