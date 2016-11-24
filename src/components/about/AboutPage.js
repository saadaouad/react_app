import React from 'react';
import Helmet from 'react-helmet';

class AboutPage extends React.Component {
  render() {
    return (
      <div>
          <h1>About</h1>
          <p>This application uses React, Redux, React Router and a variety of other helpful libraries.</p>
          <Helmet title="About app"/>
      </div>
    );
  }
}

export default AboutPage;
