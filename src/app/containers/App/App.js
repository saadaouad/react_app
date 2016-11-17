import React, { Component } from 'react';
import Helmet from 'react-helmet';
import config from '../../config';

class App extends Component {
    render() {
        <div className="app">
            <Helmet {...config.app.head}/>
            
        </div>
    }
}

export default App;

