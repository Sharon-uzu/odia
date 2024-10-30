import React, {useState} from 'react';

import img1 from '../images/scripture.jpeg'
import img2 from '../images/prayer.jpeg'
import img3 from '../images/salvation.png'
import img4 from '../images/church.avif'
import img5 from '../images/humanity.jpeg';
import 'react-multi-carousel/lib/styles.css';

import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Testimonial from './Testimonial';
import Slider from './Slider';

import { Autoplay, Navigation, Pagination, Scrollbar, A11y, EffectFade } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import 'swiper/css/effect-fade';
import 'swiper/swiper.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import odia from '../images/fayy.jpeg'
import Faq from './Faq';




const Hero = () => {

  
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 710 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 710, min: 0 },
      items: 1
    }
  };

  return (
    <>

      <Header/>
        
      <Slider/>

      <div className="intro">
       <div className='intro-l'>

        <Swiper
          // install Swiper modules
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          // pagination={{ clickable: true }}
          // navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          style={{ zIndex: 1 }}
        >
            <SwiperSlide className='intro-slide'>

            <h2> "One of the greatest gifts you will ever have is the ability to see (through the eyes of faith) and believe in your inherent worth and value even if the world around you decides to stand on its head". <br /><br />
              - Favour Odia</h2>

            </SwiperSlide>

            <SwiperSlide className='intro-slide'>

              <h2> "One of the greatest gifts you will ever have is the ability to see (through the eyes of faith) and believe in your inherent worth and value even if the world around you decides to stand on its head". <br /><br />
              - Favour Odia</h2>

            </SwiperSlide>

            <SwiperSlide className='intro-slide'>

              <h2> "One of the greatest gifts you will ever have is the ability to see (through the eyes of faith) and believe in your inherent worth and value even if the world around you decides to stand on its head". <br /><br />
              - Favour Odia</h2>

            </SwiperSlide>
          
          
          </Swiper>

       </div>

       <div className='intro-r'>
          <img src={odia} alt="" />
       </div>

      </div>


      <div className='border'>


        <section className='commit'>

          <div className='commit-l'>

            
            <h1>WHAT SHE BELIEVES IN</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, nulla, repellat optio omnis odit deleniti, sequi excepturi placeat delectus consectetur iure nostrum cumque similique adipisci hic accusantium reiciendis nihil corporis?</p>

            

          </div>




          <div className='commit-r'>

            <div className='commit-c-r'>
              <p>SCRIPTURES</p>
              <img src={img1} alt="" />
            </div>

            <div className='commit-c-r'>
              <p>PRAYER</p>
              <img src={img2} alt="" />
            </div>

            <div className='commit-c-r'>
              <p>SALVATION</p>
              <img src={img3} alt="" />
            </div>

            <div className='commit-c-r'>
              <p>THE CHURCH</p>
              <img src={img4} alt="" />
            </div>


            <div className='commit-c-r'>
              <p>HUMANITY</p>
              <img src={img5} alt="" />
            </div>


          </div>
        
        </section>

        

      

      
      <div className='reviews'>

        <h2>Testimonial</h2>    

        <Testimonial/>
      </div>


      <Faq/>


      {/* <div className="blogs">
        <h2>Recent Blog Posts & Update</h2>

        <div className='blog-cards'>

          <div>
            <img src={blog1} alt="" />
            <h3>Equity</h3>
            <p>In aliquip reprehenderit consectetur do ad in. Voluptate occaecat est est</p>

            <span>
              <span className='one'>Skills</span>
              <span className='two'>Learn More <IoIosArrowForward className='forward'/></span>
            </span>
          </div>

          <div>
            <img src={blog2} alt="" />
            <h3>Diversity</h3>
            <p>Amet eu excepteur deserunt ullamco enim ullamco Lorem in fugiat aliquip cupidatat </p>

            <span>
              <span className='one'>Skills</span>
              <span className='two'>Learn More <IoIosArrowForward className='forward'/></span>
            </span>
          </div>


          <div>
            <img src={blog3} alt="" />
            <h3>Financial</h3>
            <p>Elit ea excepteur ea laboris incididunt in pariatur sint reprehenderit magna officia</p>

            <span>
              <span className='one'>Finance</span>
              <span className='two'>Learn More <IoIosArrowForward className='forward'/></span>
            </span>
          </div>
          
        </div>





      </div> */}



      <Footer/>

    </div>

      </>
    
  )
}

export default Hero