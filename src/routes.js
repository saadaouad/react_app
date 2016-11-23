'use strict';
import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import ContactPage from './components/contact/ContactPage';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="about" component={AboutPage} />
      <Route path="contact" component={ContactPage} />
    </Route>
  </Router>
);
