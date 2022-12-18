import {Route, Routes} from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import Footer from "../../components/Footer/Footer"
import Home from '../Home/Home'
import About from '../About/About'
import Portfolio from '../portfolio/Portfolio'
import Contact from '../Contact/Contact'
import './App.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='portfolio' element={<Portfolio/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
      </Routes>  
      <Footer/>
    </div>
  )
}

export default App;
