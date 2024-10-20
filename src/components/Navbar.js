// src/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // Local state to manage authentication status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    // Add your logout logic here (e.g., clearing tokens, etc.)
    setIsLoggedIn(false); // Update the state to reflect user is logged out
  };

  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <a className="logo d-flex align-items-center me-auto">
          <h1 className="sitename">Appland</h1>
        </a>
        
        <nav id="navmenu" className="navmenu">
          <ul>
            <li><Link to="/" className="active">Home</Link></li>
            <Link to="/view">View</Link>

            {isLoggedIn && <li><Link to="/upload" className="active">Upload</Link></li>}
          </ul>
        </nav>
        
        {/* Conditional rendering based on authentication status */}
        {!isLoggedIn ? (
          <>
            <Link className="btn-getstarted" to="/signup">Sign Up</Link>
            <Link className="btn-getstarted" to="/signin">Sign In</Link>
          </>
        ) : (
          <button className="btn-getstarted" onClick={handleLogout}>Sign Out</button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
