import React from 'react'
import './Navbar.css'
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Navbar from './Navbar'
import Login from './Login'
import Safety from './Safety'
import Emergency from './Emergency'
import Contact from './Contact'
import Tricks from './Tricks'
import Health from './Health'



export default function Navbar1(){
    return(
        <>
       
        <div className='back'>
        {/* <BrowserRouter> */}
        
        
        <header>
        <img className="logo" src="https://img.freepik.com/premium-vector/modern-feminism-concept-with-flat-design_23-2147954719.jpg?semt=ais_hybrid"/>

        <div class="nav-bar">
            <nav>
                <ul className="nav_links">
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Safety">Safety</Link></li>
                    <li><Link to="/Emergency">Emergency</Link></li>
                    <li><Link to="/Tricks">SelfDefence</Link></li>
                    <li><Link to="/Health">Health</Link></li>
                    <li><Link to="/Contact">Contact Us</Link></li>

                    

                </ul>
                

            </nav>
        </div>
        </header>
       
        

        
        </div>
        
      </>
    )
}
