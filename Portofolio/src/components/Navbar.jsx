import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {

  const links = [
    {name: "Home", path: "/"},
    {name: "About", path: "/about"},
    {name: "Projects", path: "/projects"},
    {name: "Contact", path: "/contact"},
  ]
  return (
    <div className='flex justify-between items-center px-40 py-7 border-b border-b-brdr-color'>
      <div className="brand flex gap-2 items-center">
        <div className="logo w-10 h-10 flex justify-center items-center bg-tag-bg-2 rounded-xl text-txt-sec-4">am.</div>
        <div className="name">Ammar Meshaal</div>
      </div>
      <div className="links flex gap-10">
        {
          links.map((link, index) => (<NavLink key={index} active to={link.path}>{link.name}</NavLink>))
        }
      </div>
    </div>
  )
}

export default Navbar