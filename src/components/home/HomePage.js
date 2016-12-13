import React from 'react';
import {Link} from 'react-router';
import Helmet from 'react-helmet';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <Helmet title="React app"/>
        <h1>Salam alaykum</h1>
        <p>React, Redux and React Router in ES6 for ultra-responsive web apps.</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}

export default HomePage;
