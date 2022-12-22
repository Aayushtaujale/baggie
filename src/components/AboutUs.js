import React from 'react';

import '../styles/AboutUs.css';
import { Link } from 'react-router-dom';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';

function AboutUs () {
  return(
    <div className='Aboutsection'>
      
    <div className='About-container'>
    {/* <video src='/videos/footer.mp4' autoPlay loop muted /> */}
      {/* <image url='/images/img-home.jpg'></image> */}
    <section className='About-subscription'>
    <Bounce top>
      <h1 className='About-subscription-heading'>
        Hi! Welcome to <br/>Baggie
        
      </h1>
      </Bounce>
      <Zoom right>
      <p className='About-subscription-text'>
        You can visit us at any time. Use a new reality experience with us!
      </p>
      
      <div className='card-body'>
  
        <img url=''></img>
        </div>  
        </Zoom>
        <Bounce top>
        <div className='card-bodytwo'>
    
        <img url=''></img>
        </div>
        </Bounce>
       
              
    </section>
    <div class='About-links'>
      <div className='About-link-wrapper'>
      <Zoom right>
       
        <div class='About-link-items'>
        
          <h5>Are you not finding the preferred design of your choice?</h5>

          <h3>  Baggie, we provide you all in one platform <br/> for buying your favorite bag of your favorite color.
          </h3>

          
        </div>
        </Zoom>
      
      </div>
    </div>
    
   
  </div>
 
  </div>
  )
  };

export default AboutUs;