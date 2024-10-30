import React, {useState} from 'react'
import arr from '../images/arr.png';
import s1 from '../images/f4.jpeg'
import Header from '../Components/Header';
import { IoIosArrowForward } from "react-icons/io";
import s2 from '../images/s2.png';
import s3 from '../images/s3.png';
import s4 from '../images/s4.png';
import s5 from '../images/s5.png';
import s6 from '../images/serv2-a.png';
import sup from '../images/support.png';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import diff from '../images/dif.png'
import s7 from '../images/s7.png'
import Footer from '../Components/Footer';



const Service = () => {

  const [ans, setAns] = useState(false);
  const [open, setOpen] = useState(true);

  const [ans1, setAns1] = useState(false);
  const [open1, setOpen1] = useState(true);

  const [ans2, setAns2] = useState(false);
  const [open2, setOpen2] = useState(true);

  const [ans3, setAns3] = useState(false);
  const [open3, setOpen3] = useState(true);


  const [ans4, setAns4] = useState(false);
  const [open4, setOpen4] = useState(true);




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

  const click4 = () => {
    setAns4(true);
    setOpen4(false);
  }

  const clickRev4 = () => {
    setAns4(false);
    setOpen4(true);
  }



  return (
    <div>
      <Header/>
      <div className='service1'>
        <div className='s1-l'>
         

          <h2>Services</h2>

        </div>

        <div className='s1-r'>

          <div className='img'></div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique vitae voluptates repellendus sit consequuntur maiores distinctio adipisci accusamus magni commodi. Minus amet facere doloremque velit ratione? Molestiae temporibus cupiditate tenetur.</p>

        </div>
      </div>

      <div className='services'>

        <section className="service2">

          <div className='s-flex'>


            <div className='serv-cards'>
             
              <h2>Professional services i offer</h2>

              <div className='s-card'>
                <h3>Personal Growth Consulting</h3>
                <p>Organizing business strategies allows organizations to track progress, make adjustments, and achieve success.</p>
                <img src={s2} alt="" />

              </div>

            </div>

            <div className='serv-cards'>

            <div className='s-card'>
                <h3>Digital Marketing & Email Marketing</h3>
                <p>To begin, thoroughly understand the business, including its strengths, weaknesses, and challenges.</p>
                <img src={s2} alt="" />

              </div>


              <div className='s-card'>
                <h3>Global Public Speaking</h3>
                <p>Planning and analysis are vital for a successful business strategy. Clear planning and ongoing data analysis keep businesses focused on their goals.</p>
                <img src={s3} alt="" />

              </div>


            </div>

            <div className='serv-cards'> 

            <div className='s-card'>
                <h3>Coaching</h3>
                <p>Marketing plans include a market analysis that identifies the target audience, competition, and market trends.</p>
                <img src={s4} alt="" />

              </div>


              <div className='s-card'>
                <h3>Corporate Training</h3>
                <p>Coaching supports entrepreneurs in developing the skills and knowledge necessary for business success.</p>
                <img src={s5} alt="" />

              </div>


            </div>

          </div>

        </section>

      </div>


      

      <div className="interest">
        <div className='int-l'>
         

          <h3>Interested in connecting With me?</h3>
          <a href="tel:"><button>Call Now</button></a>
        </div>

        <div className='int-r'>
          <img src={s6} alt="" />
        </div>
      </div>


      <div className="support">

          <div className='sup2'>
             
             <h4>Let's Talk</h4>
             <p>Our purpose also informs our company culture andvalues. We strive to create a work fosters creativity</p>
          </div>

          <div className='sup1'>

            <div className="ques">

              <div>
                <h4>Personal Transformation</h4>

                {  ans ? (
                    <p>Prioritize what truly matters, cutting through the tactics clutter. Drive business outcomes and scale with effective processes.</p>
                    ):null
                }

              </div>

              <div>
              {
                  open ? (
                  <MdOutlineKeyboardArrowDown className='arr-icon' onClick={click}/>

                  ):<MdOutlineKeyboardArrowUp className='arr-icon' onClick={clickRev}/>

              }

              </div>

            </div>



            <div className="ques">

                <div>
                  <h4>Leadership</h4>

                  {  ans1 ? (
                      <p>Prioritize what truly matters, cutting through the tactics clutter. Drive business outcomes and scale with effective processes.</p>
                      ):null
                  }
                
                </div>

                <div>
                  {
                      open1 ? (
                      <MdOutlineKeyboardArrowDown className='arr-icon' onClick={click1}/>

                      ):<MdOutlineKeyboardArrowUp className='arr-icon' onClick={clickRev1}/>

                  }
                  
                </div>

            </div>



            <div className="ques">

              <div>
                <h4>Vision</h4>

                {  ans2 ? (
                    <p>Prioritize what truly matters, cutting through the tactics clutter. Drive business outcomes and scale with effective processes.</p>
                    ):null
                }
                
              </div>

              <div>
                {
                    open2 ? (
                    <MdOutlineKeyboardArrowDown className='arr-icon' onClick={click2}/>

                    ):<MdOutlineKeyboardArrowUp className='arr-icon' onClick={clickRev2}/>

                }
                
              </div>

            </div>




            <div className="ques">

              <div>
                <h4>Strategy</h4>

                {  ans3 ? (
                    <p>Prioritize what truly matters, cutting through the tactics clutter. Drive business outcomes and scale with effective processes.</p>
                    ):null
                }
                
              </div>

              <div>
                {
                    open3 ? (
                    <MdOutlineKeyboardArrowDown className='arr-icon' onClick={click3}/>

                    ):<MdOutlineKeyboardArrowUp className='arr-icon' onClick={clickRev3}/>

                }
                
              </div>

            </div>


            <div className="ques">

              <div>
                <h4>Positioning</h4>

                {  ans4 ? (
                    <p>Prioritize what truly matters, cutting through the tactics clutter. Drive business outcomes and scale with effective processes.</p>
                    ):null
                }
                
              </div>

              <div>
                {
                    open4 ? (
                    <MdOutlineKeyboardArrowDown className='arr-icon' onClick={click4}/>

                    ):<MdOutlineKeyboardArrowUp className='arr-icon' onClick={clickRev4}/>

                }
                
              </div>

            </div>

          </div>

          

      </div>


      {/* <div className="difference">
        <div className='diff-l'>
          <h6 className='icon-text'>
            <img src={diff} alt="" />
            <span>SERVING VARIOUS INDUSTRIES</span>
          </h6>

          <h2>Making a difference in different industries</h2>
        </div>

        <div className='diff-r'>
          <img src={s7} alt="" />
        </div>
      </div> */}

      <div className='serv-footer'>
        <Footer/>
      </div>
      

    </div>
  )
}

export default Service