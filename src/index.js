import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import {loadUsers} from './actions/userAction';
import './styles/main.scss';
import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore();
store.dispatch(loadUsers());

render(
  <Provider store={store}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
