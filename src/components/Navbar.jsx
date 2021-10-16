import React from 'react'
import './style.css';
import logo from './img/logo.png';
import { NavLink } from 'react-router-dom';



const Navbar = () => {
    return (
        <>
             <nav>
                    <NavLink to="/"><img src={logo} alt='logo' /></NavLink>
                    <div className="nav-links" id="navLinks">
                        <i className="fa fa-times" onclick="hideMenu()"></i>

                        <ul>
                            <li><NavLink to="/">HOME</NavLink></li>
                            <li><NavLink to="/about">ABOUT</NavLink></li>
                            <li><NavLink to="/course">COURSE</NavLink></li>
                            <li><NavLink to="/blog">BLOG</NavLink></li>
                            <li><NavLink to="/contact">CONTACT</NavLink></li>
                        </ul>
                    </div>
                    <i className="fa fa-bars" onclick="showMenu()" ></i>

                </nav>
        </>
    )
}

export default Navbar
