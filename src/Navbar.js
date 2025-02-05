import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar1() {
    const [isSideNavActive, setSideNavActive] = useState(false);

    const toggleSideNav = () => {
        setSideNavActive(!isSideNavActive);
    };

    return (
        <div className='back'>
            <header>
                <img className="logo" src="https://img.freepik.com/premium-vector/modern-feminism-concept-with-flat-design_23-2147954719.jpg?semt=ais_hybrid" alt="Logo"/>

                <div className="nav-bar">
                    <nav>
                        <ul className="nav_links">
                            <li><Link to="/Home">Home</Link></li>
                            <li><Link to="/About">About</Link></li>
                            <li><Link to="/Safety">Safety</Link></li>
                            <li><Link to="/Emergency">Emergency</Link></li>
                            <li><Link to="/Tricks">SelfDefence</Link></li>
                            <li><Link to="/Health">Health</Link></li>
                            <li><Link to="/Contact">Contact Us</Link></li>
                            <li><Link to="/Logout">Logout</Link></li>
                        </ul>
                    </nav>
                    <div className="hamburger" onClick={toggleSideNav}>
                        &#9776;
                    </div>
                </div>
            </header>

            <div className={`side-nav ${isSideNavActive ? 'active' : ''}`}>
                <ul>
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Safety">Safety</Link></li>
                    <li><Link to="/Emergency">Emergency</Link></li>
                    <li><Link to="/Tricks">SelfDefence</Link></li>
                    <li><Link to="/Health">Health</Link></li>
                    <li><Link to="/Contact">Contact Us</Link></li>
                    <li><Link to="/Logout">Logout</Link></li>
                </ul>
            </div>
        </div>
    );
}
