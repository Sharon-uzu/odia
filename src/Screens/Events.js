import React from 'react'
import Header from '../Components/Header'
import { IoIosArrowForward } from "react-icons/io";
import str from '../images/jpi.jpeg'
import card1 from '../images/jpi.jpeg'
import card2 from '../images/release.jpeg'
import card3 from  '../images/jpi.jpeg'
import Faq from '../Components/Faq';
import Testimonial from '../Components/Testimonial';
import Footer from '../Components/Footer';

const Events = () => {
  return (
    <div>
        <Header/>

        <div className='strategy'>

          <h1>UPCOMING EVENTS</h1>

          <div className='str1'>

            <div className='str-c'>
              <h2>JPI Youth Conference</h2>
              <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis dapibus nunc.</p>
              <a href=""><span>Learn More</span><IoIosArrowForward /></a>
            </div>

            <div className='str-c'>
              <h2>Finding Your Path</h2>
              <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis dapibus nunc.</p>
              <a href=""><span>Learn More</span><IoIosArrowForward /></a>
            </div>

            <div className='str-c'>
              <h2>JPI Youth Conference</h2>
              <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis dapibus nunc.</p>
              <a href=""><span>Learn More</span><IoIosArrowForward /></a>
            </div>
          </div>



          <div className='str2'>
            <img src={str} alt="" />
          </div>

        </div>

        <div className="community">
        <div className='top'>
          <div className='top1'>
            
            <h1>Programmes Held</h1>

          </div>
          <div className='top2'>
            {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit natus dolore aut quam nihil nemo officiis repellendus odit. Debitis quis eaque reprehenderit rem dolorum quas atque, itaque cupiditate iste quo. </p> */}
          </div>
        </div>


        <div className='bottom'>
          <div className='card'>

            <img src={card1} alt="" />
            <h2>Ryan White</h2>
            <p>Proident incididunt aute excepteur sint elit magna sint qui aute.</p>

          </div>

          <div className='card'>

            <img src={card2} alt="" />
            <h2>Mark Taylor</h2>
            <p>Ex quis ex labore non sit culpa enim proident voluptate incididunt.</p>

          </div>

          <div className='card'>

            <img src={card3} alt="" />
            <h2>Emma Wilson</h2>
            <p>Proident enim velit laboris ea velit Lorem excepteur ipsum. </p>

          </div>

        </div> 


      </div>

        <Testimonial/>

        <Faq/>


        <Footer/>

    </div>
  )
}

export default Events