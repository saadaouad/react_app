import React from 'react';
import {IndexRoute, Route, hashHistory, Router } from 'react-router';
import {About, Services, Work} from './containers';
import Header from './Header';


class Routes extends React.Component {
  render() {
    return (
      <Router history={ hashHistory }>
        <Header/>
        <Route path="/" component={ Services }></Route>
        <Route path="/work" component={ Work }></Route>
        <Route path="/about" component={ About }></Route>
      </Router>
    )
  }
}

export default Routes;
