
import './styles/Home.css';

import HeroArea from '../components/HeroArea/HeroArea';
import Services from '../components/Services/Services';
import AboutUs from '../components/AboutUs/AboutUs';
import CelebList from '../components/CelebList/CelebList';
import Testimonial from '../components/Testimonial/Testimonial';


function App() {
  
  return (
    
      <div className="App">
    
      <HeroArea  />
      <Services />
      <AboutUs />
      <CelebList />
      <Testimonial />
     
    
      

    </div>

  
  );
}

export default App;
