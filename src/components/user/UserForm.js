import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';

const UserForm = ({user, onSave, onChange, loading, errors}) => {
  return (
    <form>
      <h1>Manage User</h1>
      <TextInput
        name="id"
        label="Id"
        value={user.id}
        onChange={onChange}
        error={errors.id}/>
      <TextInput
        name="firstName"
        label="First Name"
        value={user.firstName}
        onChange={onChange}
        error={errors.firstName}/>
      <TextInput
        name="lastName"
        label="Last Name"
        value={user.lastName}
        onChange={onChange}
        error={errors.lastName}/>
      <TextInput
        name="profile"
        label="Profile"
        value={user.profile}
        onChange={onChange}
        error={errors.profile}/>
      <input
        type="submit"
        disabled={loading}
        value={loading ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

UserForm.propTypes = {
  user: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  loading: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default UserForm;
