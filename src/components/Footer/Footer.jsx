
import {FaGithubSquare} from "react-icons/fa";
import {FaLinkedin} from 'react-icons/fa'
import {ImMail} from 'react-icons/im'
import './Footer.css'

function Footer() {
    function Mailto({ email, subject, body, ...props }) {
        return (
          <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
            {props.children}
          </a>
        );
      }

    return ( 
        <div className='footer'>
            <a className='footer-link' href='https://github.com/owentashlin'><FaGithubSquare/></a>
            <Mailto email="owentashlin@gmail.com" subject="Hello" body="Hello world!">
            <ImMail/></Mailto>
            <a className='footer-link' href='https://www.linkedin.com/in/owen-tashlin/'><FaLinkedin/></a>
        </div>
     );
}

export default Footer;