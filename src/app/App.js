'use strict';
import React from 'react';
import style from '../styles/main.scss';
import Routes from './routes';
import Header from './Header';
class App extends React.Component {
  render() {
      return (
        <div>
          <Header />
          <Routes />
        </div>
      )
  }
}

export default App;
