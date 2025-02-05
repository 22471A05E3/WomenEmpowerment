// Sidenav.js
import React, { useState } from 'react';
import './Sidenav.css';
import { Link } from 'react-router-dom';

export default function Sidenav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidenav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Menu Icon */}
      <div className="hamburger" onClick={toggleSidenav}>
        <i className="fa fa-bars"></i>
      </div>

      {/* Sidenav */}
      <div className={`sidenav ${isOpen ? 'active' : ''}`}>
        <div className="close-btn" onClick={toggleSidenav}>
          <i className="fa fa-times"></i> {/* Close icon */}
        </div>
        <ul className="sidenav-links">
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Safety">Safety</Link></li>
          <li><Link to="/Emergency">Emergency</Link></li>
          <li><Link to="/Tricks">SelfDefence</Link></li>
          <li><Link to="/Health">Health</Link></li>
          <li><Link to="/Contact">Contact Us</Link></li>
        </ul>
      </div>
    </>
  );
}
