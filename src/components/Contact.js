import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section id='contact' className='contact'>
    <div className='main_text'>
    
    <h2>contact me</h2>
    </div>
    <form action="#">
    <input type="text" placeholder='Your name' />
    <input type="text" placeholder='Your email' />
    <input type="text" placeholder='Your address' />
    <input type="text" placeholder='Your Phone no' />
    <textarea name="" id="" cols="30" rows="10" placeholder='type your message...'>Your message</textarea>
    <div className='formbutton'>
    <button type='submit' className='btn'> send message</button>
    </div>
    </form>
    
    </section>
  )
}

export default Contact