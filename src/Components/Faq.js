import React, {useState} from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const Faq = () => {

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



  return (
    <div className="faq">

    {/* <h6 className='icon-text'>
          <img src={faq} alt="" />
          <span>FAQ</span>
        </h6> */}

        <h2>Have Questions? </h2>
        <h2 className='answers'>Get Answers</h2>


        <div className="ques">

          <div>
            <h4>How can a personal consultant help me manage my time?</h4>

            {  ans ? (
              <p>How can a personal consultant help me manage my time?</p>
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
            <h4>What strategies can a personal consultant help me develop for growth and success?</h4>

            {  ans1 ? (
              <p>How can a personal consultant help me manage my time?</p>
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
            <h4>What experience should I seek in a personal consultant?</h4>

            {  ans2 ? (
              <p>How can a personal consultant help me manage my time?</p>
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
            <h4>How do I know if a personal consultant is the right fit for me and my business?</h4>

            {  ans3 ? (
              <p>How can a personal consultant help me manage my time?</p>
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




  </div>
  )
}

export default Faq