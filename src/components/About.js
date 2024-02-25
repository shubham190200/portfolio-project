import React from 'react'
import bg from "../assets/bg.avif"
import './about.css'

const About = () => {
  return (
    <section id='intro'>
    <div className='introContent'>
    <span className='hello'>Hello</span>
    <span className='introText'>I'm <span className='introName'> Shubham <br />Mern Developer</span></span>
    <p className='introPara'>I'm a MERN Stack Developer passionate about building responsive and <br /> efficient web applications from back-end operations to interactive front-end interfaces</p>
    </div>
  <img src={bg} alt="Profile" className='bg' />
    
    
    </section>
  )
}

export default About