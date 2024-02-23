import React from 'react'
import './navbar.css'
import {Link} from "react-scroll"
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <div className="navbar">
    
    <img src={logo} alt="" className='logo'/>
    <div className="desktopmenu">
    <Link className='navbarList'> Home</Link>
    <Link className='navbarList'> About</Link>
    <Link className='navbarList'> Skills</Link>
    <Link className='navbarList'> Project</Link>
    
    </div>
    <button className='desktopbutton'>
    Contact me
    </button>
    </div>
  )
}

export default Navbar