import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userAction from '../../actions/userAction';

class ManageUserPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return(
      <h1>Manage User</h1>
    );
  }
}

ManageUserPage.PropTypes = {
  //myProp : PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    state: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageUserPage);
