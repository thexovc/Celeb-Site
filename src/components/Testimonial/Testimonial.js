import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import datas1 from '../../constant/data1'
import { useNavigate } from 'react-router-dom';

import './Testimonial.css';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);


  function checkIndex(datas) {
    return datas.id < 4
  }
    let datas2 = datas1.filter(checkIndex)
 
 

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    setTestimonials(datas2)
  }, []);
  const navigate = useNavigate()

  return (
    <div id='Testimonial'>

      <div className='top__titles'>
              <h5 className=''>Reviews From Clients</h5>
            
              <h2 className="head-text">Testimonials</h2>
        
      </div>
      


      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={testimonials[currentIndex].img} alt={testimonials[currentIndex].name} />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].desc}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].amount}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>
            <a onClick={() => navigate('/testimonialsFull')} className='testimonial__button' >More Testimonials</a>
        

            <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

        

    </div>
  );
};

export default Testimonial
