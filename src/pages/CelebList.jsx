import React from 'react'
import './styles/celebList.css'
import { AiFillEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import data from '../constant/data'
import { motion } from 'framer-motion';

const CelebList = () => {
    return (
        <motion.div 
        whileInView={{ x: [-100, 0], opacity: [0, 1.5] }}
         transition={{ duration: 0.7 }}
        className="celeblist__container"
        >
             <div className="celeblist__title">
                <h1 className="celeblist__h3">Available Celebrities</h1>
                <p className="celeblist__p">Here are all of our available celebrities.</p>

               

                
            </div>
        <div class="celeb__con">
            <div className="card__list">
                {data.map((item) => (
                    <figure class="snip1559">
                        <div class="profile-image"><img src={item.img4} alt="profile-sample2" /></div>
                        <figcaption>
                            <h3>{item.name}</h3>

                            <p>{item.desc}</p>
                            <div class="icons">
                                <p className='price'>
                                    <span>$</span>
                                    {item.amount}
                                </p>
                                <Link to={`/detail/${item.id}`}><AiFillEye class="icon__eye" /></Link>

                            </div>
                        </figcaption>
                    </figure>
                ))}
            </div>
        </div>
        </motion.div>
    )
}

export default CelebList