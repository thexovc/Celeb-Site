import React, { useState, useEffect } from 'react';

import { motion } from 'framer-motion';
import datas1 from '../constant/data1'


import './styles/TestimonialFull.css';

const TestimonialsFull = () => {

  const [testimonials, setTestimonials] = useState([]);
 

 
  useEffect(() => {
    setTestimonials(datas1)
  }, []);


  return (
    <div id='Testimonial'>

      <div className='top__titles1'>
              
              <h2 className="head-text1">Testimonials</h2>
              <p>At All Celeb, we strive to provide our event planner clients with the best possible service and assist them every step of the booking process.
                 We highly value our customer feedback and we are thrilled that more than 97% of our clients recommends us to others.
                We have had the privilege to work with the most amazing speakers and event professionals over the last 10 years, and we are happy to share their experiences with you.</p>
        
      </div>
      


      {testimonials.length && (
        <>
         {testimonials.map((testimonial, index) => (
            
          <div key={index} className="app__testimonial-item app__flex">
            <img src={testimonial.img} alt={testimonial.name} />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonial.desc}</p>
              <div>
                <h4 className="bold-text">{testimonial.name}</h4>
                <h5 className="p-text">{testimonial.amount}</h5>
              </div>
            </div>
          </div>

          ))}
        </>
      )}

        

    </div>
  );
};

export default TestimonialsFull
