import { Link } from 'react-router-dom'
import {GiAnvilImpact} from 'react-icons/gi'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'

import './NavBar.css'

function NavBar() {
  
    return (
    <>
      <nav> 
        <div className='nav-list'>
          <div><a className='nav-link' id='simon' href='https://owentashlin.github.io/GA--project-1-Simon/'><IoIosArrowBack size='30px'/><GiAnvilImpact size='35px'/><IoIosArrowForward size='30px'/></a></div>
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