import React from 'react';
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
import { Link } from 'react-router-dom';
import s1 from '../images/odia-16-removebg-preview.png'
import s2 from '../images/odia-18-removebg-preview.png';
import s3 from '../images/IMG_-e1d04-removebg-preview.png';



const Slider = () => {
  return (
    <div className='slider'>
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
        <SwiperSlide className='slide'>

          <div className="slide-h">
            <div className='s1'>
                <img src={s1} alt="" />
            </div>

            <div className='s2'>
                <h5>FAVOUR CHIDINMA ODIA</h5>
                <h1>Helping You Become More So You Can Do More</h1>
                <button><Link to='/about'>Learn more</Link></button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide'>

          <div className="slide-h">
            <div className='s1'>
                <img src={s2} alt="" />
            </div>

            <div className='s2'>
                <h5>FAVOUR CHIDINMA ODIA</h5>
                <h1>Helping You Become More So You Can Do More</h1>
                <button><Link to='/about'>Learn more</Link></button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className='slide'>

          <div className="slide-h">
            <div className='s1'>
                <img src={s3} alt="" />
            </div>

            <div className='s2'>
                <h5>FAVOUR CHIDINMA ODIA</h5>
                <h1>Helping You Become More So You Can Do More</h1>
                <button><Link to='/about'>Learn more</Link></button>
            </div>
          </div>
        </SwiperSlide>
        
        
      </Swiper>


      
        

    </div>
  )
}

export default Slider