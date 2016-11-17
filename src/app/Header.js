import React from 'react';

import {Link } from 'react-router';

class Header extends React.Component {
  render() {
    return (
        <header>
            <ul className="p-20px nav">
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/work">Case studies</Link></li>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/blog">Blog</Link></li>
            </ul>
        </header>
    )
  }
}
export default Header;
