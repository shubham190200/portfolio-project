import React from 'react'
import tictac from "../assets/tictac.png"
import weather from "../assets/weather.png"
import ecommerce from "../assets/ecommerce.jpg"
import "./project.css"

const Projects = () => {
  return (
    <section id='project'>
      <h2 className='workstitle'>My Portfolio</h2>
      <div className='projects-container'>
        <div className='project-row'>
          <div className='project-card'>
            <img src={tictac} alt="Tic Tac Toe game" className='projectimg' />
            <div className='project-buttons'>
              <button className='button'>View Code</button>
              <button className='button'>View Demo</button>
            </div>
          </div>

          <div className='project-card'>
            <img src={weather} alt="Weather app" className='projectimg' />
            <div className='project-buttons'>
              <button className='button'>View Code</button>
              <button className='button'>View Demo</button>
            </div>
          </div>

          <div className='project-card'>
            <img src={ecommerce} alt="E-commerce site" className='projectimg' />
            <div className='project-buttons'>
              <button className='button'>View Code</button>
              <button className='button'>View Demo</button>
            </div>
          </div>

          <div className='project-card'>
            <img src={tictac} alt="Tic Tac Toe game again" className='projectimg' />
            <div className='project-buttons'>
              <button className='button'>View Code</button>
              <button className='button'>View Demo</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects;
