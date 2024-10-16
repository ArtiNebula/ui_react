import React from 'react';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
       <a  className="logo d-flex align-items-center me-auto">
          <h1 className="sitename">Appland</h1>
        </a>
        
        <nav id="navmenu" className="navmenu">
          <ul>
            <li><Link  to="/"><a  className="active">Home</a></Link></li>
           
          </ul>
        </nav>
        <Link className="btn-getstarted" to="/signup">Sign Up</Link>
        <Link className="btn-getstarted" to="/signin">Sign In</Link>
      </div>
    </header>
  );
}

export default Navbar;
