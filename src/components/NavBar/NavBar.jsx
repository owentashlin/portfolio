import { Link } from 'react-router-dom'

import './NavBar.css'

function NavBar() {
  
    return (
    <>
      <nav> 
        <div className='nav-list'>
          <a className='nav-link' id='simon' href='https://owentashlin.github.io/GA--project-1-Simon/'><img src="https://i.imgur.com/pFyGLKg.png" alt='logo'/></a>
          <Link className='nav-link' to='/'>Home</Link>
          <Link className='nav-link' to='/about'>About</Link>
          <Link className='nav-link' to='/portfolio'>Portfolio</Link>
          <Link className='nav-link' to='/contact'>Contact</Link>
        </div>
      </nav> 
    </> 
  )
}
export default NavBar