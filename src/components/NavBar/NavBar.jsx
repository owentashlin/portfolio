import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {

    return (
    <div>
      <div className='nav'>
        <input type="checkbox" id="nav-check"></input>
          <div class="nav-btn">
            <label for="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
          
        <div className='nav-list'>
          <Link className='nav-link' to='/'>Home</Link>
          <Link className='nav-link' to='/about'>About</Link>
          <Link className='nav-link' to='/portfolio'>Portfolio</Link>
          <Link className='nav-link' to='/contact'>Contact</Link>
        </div>
      </div> 
    </div> 
  )
}

export default NavBar