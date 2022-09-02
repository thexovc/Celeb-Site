import React from 'react'
import './Services.css'
import {FiVideo } from 'react-icons/fi';
import { GiFaceToFace } from 'react-icons/gi';
import { BsCalendar4Event } from 'react-icons/bs';
import { RiChatPrivateFill } from 'react-icons/ri';
import { MdContacts } from 'react-icons/md';
import { motion } from 'framer-motion';



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

const Services = () => {

    
      
  return (
    <motion.div
    whileInView={{ x: [-100, 0], opacity: [0, 1.5] }}
    transition={{ duration: 0.7 }}>
        <div className="services__container">
            <h3 className="services__title">Services</h3>
            <div className="services__text">
                <h1 className="services__h1">What We Offer</h1>
                <p className="services__p">Here are some of the numerous services <br /> we offer to our clients</p>
            </div>
            <div className="services__icons">

                <motion.div
                 variants={scaleVariants}
                 whileInView={scaleVariants.whileInView}
                 className="services__icon">
                    <div className="services__icon__info">
                        <FiVideo className='services_icon'/>
                        <p className="icon__p">Face Time</p>
                    </div>
                </motion.div>

                <motion.div 
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className="services__icon">
                    <div className="services__icon__info">
                        <GiFaceToFace  className='services_icon' />
                        <p className="icon__p">Live Meet</p>
                    </div>
                </motion.div>

                <motion.div 
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className="services__icon">
                    <div className="services__icon__info">
                        <BsCalendar4Event  className='services_icon' />
                        <p className="icon__p">Events</p>
                    </div>

                </motion.div>

                <motion.div 
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className="services__icon">
                    <div className="services__icon__info">
                        <RiChatPrivateFill  className='services_icon'/>
                        <p className="icon__p">Private Meets</p>
                    </div>
                </motion.div>

                <motion.div
                 variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className="services__icon">
                    <div className="services__icon__info">
                        <MdContacts  className='services_icon' />
                        <p className="icon__p">Contact Info</p>
                    </div>
                </motion.div>

            </div>
        </div>
    </motion.div>
  )
}

export default Services