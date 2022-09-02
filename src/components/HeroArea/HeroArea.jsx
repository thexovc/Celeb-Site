import React from 'react'
import heroimage from '../../assets/hero.jpg'
import './HeroArea.css'
import { motion } from 'framer-motion';

const HeroArea = () => {

  
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


  return (
    
  <motion.div 
   whileInView={{ x: [-100, 0], opacity: [0, 1.5] }}
   transition={{ duration: 0.7 }}
    className='heroarea__container'>
      <div className='heroarea__info'>
        <div className="heroarea__text">
          <h1 className='heroarea__h1'>Meet, chat, and interact with your favourite celebrities
         
          </h1>
          <p className="heroarea__p">
            Get to acquire the services of different popular celebrities for your events, occasions and even private needs all in one place .<br />
            Choose your celebrity and get in touch with us now!!
          </p>
        </div>
        <span className='heroarea__button'>
          <a className='hero__button' href="#">Book Now</a>
        </span>
       
      </div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='heroarea__image'>
    
      <img className="hero__image" src={heroimage} alt="heroareaImage" />
      </motion.div>
    </motion.div>
  )
}

export default HeroArea