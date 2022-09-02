
import Home from './pages/Home'



import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import CelebList from './pages/CelebList';

import Pp from './pages/pp';
import Tc from './pages/tc';
import Faq from './pages/faq';
import Footer from './components/Footer/Footer';
import CelebDetail from './pages/CelebDetail';
import TestimonialsFull from './pages/TestimonialsFull';



function App() {
 
  return (
  
      <>
      <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='celebrities' element={<CelebList />} />
         
          <Route path='contact' element={< Contact/>} />
          <Route path='detail/:id' element={<CelebDetail />} />
          <Route path='testimonialsFull' element={<TestimonialsFull />} />
     
          <Route path='pp' element={< Pp />} />
          <Route path='tc' element={< Tc />} />
          <Route path='faq' element={< Faq />} />
              
          


       
      </Routes>
      <Footer />
      
  </>
    )

}

export default App;
