import React, { Component } from 'react';
import Helmet from 'react-helmet';

class About extends Component {
    render() {
        const style = require('./About.scss');
        return (
            <div className='about container'>
                <h1>Obytes, a strong commitment</h1>
                <Helmet title="About Us"/>
            </div>
        )
    }
}

export default About;
