import React from 'react'
import "../styles/Navbar.css"

const Navbar = () => {
  return (
    <nav className='navbar'>
        <h2>Ritesh Kumar</h2>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
    </nav>
  );
}

export default Navbar