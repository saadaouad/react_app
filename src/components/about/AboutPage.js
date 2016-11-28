import React from 'react';
import Helmet from 'react-helmet';

class AboutPage extends React.Component {
  render() {
    return (
      <div>
          <h1>About</h1>
          <Helmet title="About app"/>
          <p>This application uses React, Redux, React Router and a variety of other helpful libraries.</p>
      </div>
    );
  }
}

export default AboutPage;
