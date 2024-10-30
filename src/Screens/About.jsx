import React, {useState} from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer';

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
import odia from '../images/f1.jpeg'
import prof from '../images/IMG_-e1d04.jpg'
import g1 from '../images/fayy.jpeg'
import g2 from '../images/fayy1.jpeg'


const About = () => {

  const [ans, setAns] = useState(false);
  const [open, setOpen] = useState(true);

  const [ans1, setAns1] = useState(false);
  const [open1, setOpen1] = useState(true);

  const [ans2, setAns2] = useState(false);
  const [open2, setOpen2] = useState(true);

  const [ans3, setAns3] = useState(false);
  const [open3, setOpen3] = useState(true);


  const click = () => {
    setAns(true);
    setOpen(false);
  }

  const clickRev = () => {
    setAns(false);
    setOpen(true);
  }

  const click1 = () => {
    setAns1(true);
    setOpen1(false);
  }

  const clickRev1 = () => {
    setAns1(false);
    setOpen1(true);
  }

  const click2 = () => {
    setAns2(true);
    setOpen2(false);
  }

  const clickRev2 = () => {
    setAns2(false);
    setOpen2(true);
  }

  const click3 = () => {
    setAns3(true);
    setOpen3(false);
  }

  const clickRev3 = () => {
    setAns3(false);
    setOpen3(true);
  }

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
    <div>
        <Header/>

        <div className='abt1'>
            <h1>About Me</h1>
            <div>
                <div className='img'></div>
                <p>We provide personal consulting for tech entrepreneurs, assisting them with time management, growth strategies, and emotional support.</p>
                <p>Tech entrepreneurs seeking support and guidance can benefit from our experience. Partner with Rotatus for valuable insights today</p>
                <p>We provide personal consulting for tech entrepreneurs, assisting them with time management, growth strategies, and emotional support.</p>
                <p>We provide personal consulting for tech entrepreneurs, assisting them with time management, growth strategies, and emotional support.</p>
            </div>
        </div>


        <div className="intro abtt">

            <div className='intro-r'>
                <img src={odia} alt="" />
            </div>

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

       

      </div>


    <div className="accomplish">

        <div className='acc-l'>
            <h2>Professional Accomplishments</h2>
            <p>1. Sommy Wonder has worked directly with various individuals to help them step into a life of meaning and significance</p>
            <p>2. She has designed and is building a global coaching community for personal transformation.</p>
            <p>3. Written and published books that serve as guides to becoming and then doing more.</p>
        </div>

        <div className='acc-r'>
            <img src={prof} alt="" />
        </div>
        
    </div>

        

        {/* <section className='abt2'>
            

            <div className='tst'>
                <Testimonial/>

            </div>

        </section> */}

        <div className="gallery">
            <h1>Gallery</h1>

            <img src={g1} alt="" />
            <img src={g2} alt="" />
            <img src={g1} alt="" />
            <img src={g2} alt="" />
            <img src={g1} alt="" />
            <img src={g2} alt="" />
            <img src={g1} alt="" />
            <img src={g2} alt="" />
            <img src={g1} alt="" />
            <img src={g2} alt="" />
            <img src={g1} alt="" />
            <img src={g2} alt="" />
        </div>


        <Footer/>
    </div>
  )
}

export default About