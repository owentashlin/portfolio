import React from 'react'
import { Link } from 'react-router-dom'
import {FaGithubSquare} from "react-icons/fa";
import {FaLinkedin} from 'react-icons/fa'
import './NavBar.css'

function NavBar() {

    return (
    <div className='nav'>
    <ul className='nav-list'>
      <li className='nav-button'>
      <Link className='a' to='/'>Home</Link>
      </li>
      <li>
      <Link className='a' to='/about'>About</Link>
      </li>
      <li>
      <Link className='a' to='/portfolio'>Portfolio</Link>
      </li>
      <li>
      <Link className='a' to='/contact'>Contact</Link>
      </li>
    </ul>
    </div>
  )
}

export default NavBar