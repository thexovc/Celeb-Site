import React from 'react'
import { motion } from 'framer-motion';
import aboutusimage from '../../assets/aboutus.jpg'
import './AboutUs.css'
import { useNavigate } from 'react-router-dom';

const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut'
      }
  
    }
  }

const AboutUs = () => {
  const navigate = useNavigate()
  return (
    <motion.div 
   whileInView={{ x: [-100, 0], opacity: [0, 1.5] }}
   transition={{ duration: 0.7 }}
    className='aboutus__container'>

        <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='aboutus__image'>
    
            <img className="about__image" src={aboutusimage} alt="aboutusImage" />
        </motion.div>


      <div className='aboutus__info'>
        <div className="aboutus__text">
            <h3 className="aboutus__h3">About us</h3>
          <h1 className='aboutus__h1'>Get to know us 
         
          </h1>
          <p className="aboutus__p">
            We are an international company that partner with  well know celebrities  <br />   We do this in other to procure thier services for majority of the masses <br /> 
            
          </p>
        </div>
        <span className='aboutus__button'>
          <a onClick={() => navigate('/about')} className='about__button' >Discover More</a>
        </span>
       
      </div>

    
    </motion.div>
  )
}

export default AboutUs