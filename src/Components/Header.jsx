import React from 'react';
import {useState} from 'react';
import { FaBars} from "react-icons/fa";
import { RiCloseFill} from "react-icons/ri";
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpeg'

const Header = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [activeNav, setActiveNav] = useState('/')

  return (
    <div>
        <header>
        
        <nav>

          <div className="logo">
            <img src={logo} alt="" />
            </div>

          <ul className={click ? 'menu active' : 'menu'}>

            <div className='list1'>
              <li><Link to = '/'>Home</Link></li>
              <li><Link to = '/about'>About</Link></li>
              <li><Link to='/service'>Services</Link></li>
              <li><Link to='/events'>Events</Link></li>
              <li><Link to='/resource'>Books</Link></li>
              <li className='btn'><Link to='/contact'>Contact</Link></li>
            </div>

            
            
          </ul>

          <div className='bars' onClick={handleClick}>
          {click ? (<RiCloseFill id='close'/>) : (<FaBars id='bar' />)}
            
        </div>

        </nav>

        {/* <div className={click ? 'cover' : 'cover active'}></div> */}
      
      </header>
    </div>
  )
}

export default Header