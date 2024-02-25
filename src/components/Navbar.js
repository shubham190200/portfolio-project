import React from 'react';
import './navbar.css';
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" className='logo'/>
      <div className="desktopmenu">
        <Link to ="/" className='navbarList'>Home</Link>
        <Link to="/about" className='navbarList'>About</Link>
        <Link to="/skills" className='navbarList'>Skills</Link>
        <Link to="/projects" className='navbarList'>Projects</Link>
      </div>
      <Link to="/contact" className='desktopbutton'>Contact me</Link>
    </div>
  )
}

export default Navbar;
