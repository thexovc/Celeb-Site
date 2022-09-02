import React, { useState } from "react";
import { AiFillCloseCircle } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';
import { NavLink } from "react-router-dom";



import "./Header.css";

const Header = () => {

  const [isOpen, setisOpen] = useState(false)

  return (
    <div className="header">
      <nav className="navbar">
        <span className="nav__logo">
          {/* <img className="logo-img" src={rlogo} alt="logo" /> */}
          <p>logo</p>
        </span>
        <div className={`nav__items  ${isOpen && 'open'}`}>
          <NavLink className='links' to='/'>Home</NavLink>
          <NavLink className='links' to='/about'>About Us</NavLink>
          <NavLink className='links' to='/Celebrities'>Celebrities</NavLink>
          <NavLink  className='links' to='/contact'>Contact Us</NavLink>

        </div>

      
       <div onClick={() => setisOpen(!isOpen)} className={`nav__toggle ${isOpen && 'open'}`}>
          <div className="bar"></div>
        </div>
      </nav>
           
      
    </div>

  );
};

export default Header;