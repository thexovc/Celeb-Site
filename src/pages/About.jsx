import React from 'react'
import './styles/about.css'
import hero from '../assets/herd.png'

import { GiAchievement } from 'react-icons/gi';
import { motion } from 'framer-motion';
import { BiWallet } from 'react-icons/bi';
import { MdPayment } from 'react-icons/md';

const About = () => {
    return (
        <motion.div
            whileInView={{ x: [300, 0], opacity: [0, 1] }}
            transition={{ duration: 0.7 }}
        >
            <div className='about'>
                <div className='main'>
                    <img src={hero} />
                    <div className='about-text'>
                        <h1>About Us</h1>
                        <h5>CelebLand <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, libero? </span> </h5>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident laborum at repellendus expedita?
                            <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio obcaecati eius porro alias, eaque iure.
                        </p>
                        <button type='button'>Lorem.</button>
                    </div>
                </div>
                <div className='service'>
                    <h1>Why Choose Us</h1>
                    <div className='block'>
                        <motion.div
                            whileHover={{ scale: 0.97 }}
                        >
                            <div className='card'>
                                <span className="icon-block">
                                    <GiAchievement className='icon' />
                                </span>
                                <h1>Reliable Services</h1>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et impedit ea hic assumenda vitae nihil.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 0.97 }}
                        >
                            <div className='card'>
                                <span className="icon-block">
                                    <BiWallet className='icon' />
                                </span>
                                <h1>Professional Expert</h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis necessitatibus commodi molestias quae a iste?
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 0.97 }}
                        >
                            <div className='card'>
                                <span className="icon-block">
                                    <MdPayment className='icon' />
                                </span>
                                <h1>Quick Response</h1>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, eveniet? Ipsam libero molestiae omnis quia.
                                </p>
                            </div>
                        </motion.div>

                    </div>
                </div>

            </div>
        </motion.div>
    )
}

export default About