/* eslint-disable */
import React from 'react';
import './header.css';
import logo from '../../logo.svg'; // лого свое закиньте и юзайте

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Logo" className="logo" />
      <h1 className="title">My Website Title</h1> {/* Add a title element here */}
    </div>
  );
}

export default Header;
