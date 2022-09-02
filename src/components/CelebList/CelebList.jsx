import React from 'react'
import './CelebList1.css'
import { AiFillEye } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import datas from '../../constant/data'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


const CelebList = () => {
    const navigate = useNavigate()

    function checkIndex(data) {
        return data.id < 5
    }

    let data1 = datas.filter(checkIndex)
    return (
        <motion.div 
        whileInView={{ x: [-100, 0], opacity: [0, 1.5] }}
         transition={{ duration: 0.7 }}
        className="celeblist__container"
        >
            <div className="celeblist__title">
                <h3 className="celeblist__h3">Celebrities</h3>
                <p className="celeblist__p">Here are some of our top celebrities</p>

               

                
            </div>
            
        <div class="celeb__con">
        <a onClick={() => navigate('/celebrities')} className='seemore__link' >
                <div className="celeblist__seemore">
             
                    <p className="seemore__text">See More</p>
                    <AiOutlineArrowRight className='seemore__icon'/>
                  
                   
                </div>
                </a>
            <div className="card__list1">
                {data1.map((item, index) => (
                    <figure key={index} class="snip1559">
                        <div class="profile-image"><img src={item.img4} alt="profile-sample2" /></div>
                        <figcaption>
                            <h3>{item.name}</h3>
                            <h5>{item.bg}</h5>

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