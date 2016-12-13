import * as types from './actionTypes';
import userApi from '../api/mockUserApi.js';

export function loadUsersSuccess(user) {
  return {type: types.LOAD_USERS_SUCCESS, user};
}

export function loadUsers() {
  return function(dispath){
    return userApi.getAllUsers().then(users => {
      dispatch(loadUsersSuccess(users));
    }).catch(error => {
      throw(error);
    });
  }
}
