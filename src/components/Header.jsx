import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    // <div className='bg-black text-white px-5 py-2 flex justify-between flex-wrap' >
    <div className='bg-purple-800 flex justify-between py-4 px-10 text-white items-baseline z-50 sticky top-0  '>
      <NavLink to={'/'}><h1 >WeboLogo</h1></NavLink>
      {/* <h1>WeboLogo</h1> */}
      <nav className='space-x-4'>
        <NavLink to={'/about-page'}>About</NavLink>
        <NavLink to={'/contact-page'}>Contact</NavLink>
      </nav>
    </div>
  )
}

export default Header