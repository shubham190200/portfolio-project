import React from 'react'
import About from "./About.js"
import Skills from './Skills.js'
import Projects from "./Projects.js"
import Contact from "./Contact.js"
import "./home.css"
const Home = () => {
  return (

    <div id='home'>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    </div>
  )
}

export default Home