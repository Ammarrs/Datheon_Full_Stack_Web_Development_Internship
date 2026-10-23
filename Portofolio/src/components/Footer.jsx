import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {

  const myLinks = {
    github: "https://github.com/Ammarrs",
    email: "mailto:ammarsmeshaal@gmail.com",
    linkedin: "https://linkedin.com/in/ammar-meshaal",
  }

  return (
    <div className='py-7.5 px-40 flex justify-between items-center border-t-2 border-t-brdr-color'>
      <div className="copyrights">
        <span>&copy; Ammar Meshaal. All rights reserved.</span>
      </div>
      <div className="socials flex items-center gap-5">
        <a href={myLinks.github} target='_blank'>Github</a>
        <a href={myLinks.linkedin} target='_blank'>LinkedIn</a>
        <a href={myLinks.email} target='_blank'>Email</a>
      </div>
    </div>
  )
}

export default Footer