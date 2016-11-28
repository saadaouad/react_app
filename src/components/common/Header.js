'use strict';
import React from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
        {" | "}
      <Link to="/about" activeClassName="active">About</Link>
        {" | "}
      <Link to="/user" activeClassName="active">User</Link>
        {" | "}
      <Link to="/contact" activeClassName="active">Contact</Link>
    </nav>
  );
};

export default Header;
