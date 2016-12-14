import * as types from './actionTypes';
import userApi from '../api/mockUserApi.js';

export function loadUsersSuccess(users) {
  return {type: types.LOAD_USERS_SUCCESS, users};
}

export function createUserSuccess(user) {
  return {type: types.CREATE_USER_SUCCESS, user};
}

export function updateUserSuccess(user) {
  return {type: types.UPDATE_USER_SUCCESS, user};
}

export function loadUsers() {
  return function(dispatch){
    return userApi.getAllUsers().then(users => {
      dispatch(loadUsersSuccess(users));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveUser(user) {
  return function (dispatch, getState) {
    return userApi.saveUser(user).then(savedUser => {
      user.id ? dispatch(updateUserSuccess(savedUser)) :
        dispatch(createUserSuccess(savedUser));
    }).catch(error => {
      throw(error);
    });
  };
}
