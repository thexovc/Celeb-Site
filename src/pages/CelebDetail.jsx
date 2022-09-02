import React, {useReducer} from 'react'
import { useParams } from 'react-router-dom'
import './styles/celebDetail.css'
import data from '../constant/data'
import { useNavigate } from 'react-router-dom';


import {IoLogoTwitter} from 'react-icons/io'
import { FiInstagram } from 'react-icons/fi';
import { FaFacebook } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
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




const initialState = {
    detailsState: 'openState',
    imagesState: 'closeState',
    socialsState: 'closeState',
    
    activeDetails: 'active1',
    activeImages: '',
    activeSocials: ''
  }
  
  const reducer = ( state, action) => {
    switch(action.type) {
      case 'openDetails':
        return {
          detailsState: 'openState',
          imagesState: 'closeState',
          socialsState: 'closeState',
 
          activeDetails: 'active1',
          activeImages: '',
          activeSocials: ''
        }
  
      case 'openImages':
        return {
          detailsState: 'closeState',
          imagesState: 'openState',
          socialsState: 'closeState',
          activeDetails: '',
          activeImages: 'active1',
          activeSocials: '',
          
        }
  
        case 'openSocials':
          return {
            detailsState: 'closeState',
            imagesState: 'closeState',
            socialsState: 'openState',
            activeDetails: '',
            activeImages: '',
            activeSocials: 'active1',
          }
  
        default:
          return initialState
    }
  }

const CelebDetail = () => {
    const [states, dispatch] = useReducer(reducer, initialState)
    const params = useParams()
    const id = params.id
    console.log(id)

    const celebData = data[id - 1]

    const navigate = useNavigate()

    return (
        <div class="detail__con">
            <div className="detail__main">
                <div class="left-column">
                    <img class="detail-img" src={celebData.img1} alt="" />
                </div>

                <div class="right-column">
                    <img className="dp__img" src={celebData.img2} alt="" />
                    <div class="p__desc">
                        <h1>{celebData.name}</h1>
                        <p>
                            {celebData.desc}
                        </p>
                    </div>

                    <div class="product-price">
                        <span>
                          Live: ${celebData.amount - 5000} - ${celebData.amount}
                          <br />
                          Virtual: ${celebData.amount1 - 5000} - ${celebData.amount1}
                        
                        </span>
                        <a onClick={() => navigate('/contact')} class="cart-btn">Book Now</a>
                    </div>
                </div>
            </div>




        <div className="table__container">
        <table className="table1">
          <thead className="thead">
            <tr className="tr">
              <th className={states.activeDetails} onClick={() => dispatch({type: 'openDetails'})}>
                DETAILS
              </th>
              <th className={states.activeImages} onClick={() => dispatch({type: 'openImages'})}>
                IMAGES
              </th>
              <th className={states.activeSocials} onClick={() => dispatch({type: 'openSocials'})}>
                SOCIALS
              </th>
            </tr>
          </thead>
        </table>
      </div>

      <br />

     <div className={states.detailsState}>
      <div className="details__bio">
        <h1 className='bio__h1'>Biography</h1>
        <p className='bio__p'>{celebData.bio1}</p>
        <br />
        <p className='bio__p'>{celebData.bio2}</p>
      </div>

     </div>


     <div className={states.imagesState}>
      <div className="details__img">
        <img class="images__image" src={celebData.img3} alt="" />
        <img class="images__image" src={celebData.img4} alt="" />  
      </div>
     </div>


     <div className={states.socialsState}>
    
    
<div className="details__icons">

                <motion.div
                 variants={scaleVariants}
                 whileInView={scaleVariants.whileInView}
                 className="details__icon">
                  <a href={celebData.ig}>
                  <div className="services__icon__info">
                        <FiInstagram className='services_icon'/>
                        <p className="icon__p">Instagram</p>
                    </div>
                  </a>
                   
                </motion.div>

                <motion.div 
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className="details__icon">
                  <a href={celebData.tw}>
                  <div className="services__icon__info">
                        <IoLogoTwitter  className='services_icon' />
                        <p className="icon__p">Twitter</p>
                    </div>
                  </a>
                    
                </motion.div>

                <motion.div 
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className="details__icon">
                  <a href={celebData.fa}>
                  <div className="services__icon__info">
                        <FaFacebook  className='services_icon' />
                        <p className="icon__p">Facebook</p>
                    </div>
                  </a>
                   

                </motion.div>
                </div>


   
     </div>

        </div>

        
    )
}

export default CelebDetail