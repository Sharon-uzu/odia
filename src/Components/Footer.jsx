import React from 'react';
import {FaFacebook} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import logo from '../images/logo.jpeg'
import { Link } from 'react-router-dom';



const Footer = () => {
  return (
    <footer>
        <div className="foot">

            <div className='foot1'>
                <img src={logo} alt="" />
                <p>Trained by Dr. Mike Oladipo, leadership and management consultant, global speaker, John Maxwell coach</p>
            </div>

            <div className="foot2">

                <h4>Quick Links</h4>

                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/service'>Services</Link></li>
                    
                </ul>

            </div>

            <div className="foot3">

                <h4>Resources</h4>

                <ul>
                    <li><Link to='/events'>Events</Link></li>
                    <li><Link to='/resource'>Books</Link></li>
                </ul>


            </div>

            <div className="foot4">
                <h4>Contact</h4>

                <li>
                5007 Ocean Avenue, Charlotte, NC
                </li>
                <li>Bakersfield</li>
                <li><a href="tel:">(610) 945-7986</a></li>
                <li><a href="mailto">real.danieljackson@hotmail.com</a></li>

            </div>
               

        </div>

        <div className='foot5'>
            <div className="foot-icons">
                <FaLinkedin/>
                <FaTwitter/>
                <FaFacebook/>
                <FaInstagram/>
            </div>

           
            
        </div>

    </footer>
  )
}

export default Footer