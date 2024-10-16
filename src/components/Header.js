import React from 'react';
import { Link } from 'react-router-dom'; 

const Header = () => {
  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <a href="index.html" className="logo d-flex align-items-center me-auto">
          <h1 className="sitename">Appland</h1>
        </a>
        <nav id="navmenu" className="navmenu">
          <ul>
            <li><a href="#hero" className="active">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#features">Features</a></li>
           
          </ul>
        </nav>
        <Link className="btn-getstarted" to="/signup">Sign Up</Link>
        <Link className="btn-getstarted" to="/signin">Sign In</Link>
      </div>
    </header>
  );
}

export default Header;
