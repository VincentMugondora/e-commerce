import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='nvabar'>
      <img src="#" alt="Logo.png" />
      <ul className='links'>
        <li><a href="Home">Home</a></li>
        < li><a href="Products">Products</a></li>
        <li><a href="About">About</a></li>
        <li><a href="Contact">Contact</a></li>
        <li><a href="Login">Login</a></li>
        <li><a href="Signup">Signup</a></li>
        </ul>
    </div>
  )
}

export default Navbar
