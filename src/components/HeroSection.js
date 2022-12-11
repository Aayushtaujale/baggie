import React from 'react'
import '../styles/HeroSection.css'
import '../App.css'
import { Button } from './Button'
import Rotate from 'react-reveal/Rotate';


const HeroSection=(e)=>{
  return (
    <div className='hero-container'>
      <video src='/videos/Untitled.mp4' autoPlay loop muted />
      <Rotate>

      <h1>BAGGIE</h1>
      </Rotate>
      <p>BUY YOUR FAVORITE CUSTOMIZED BAG</p>
      <div className='hero-btns'>
      
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={'/login'}
        >
          GET STARTED
        </Button>
        

        
        
        
      </div>
    </div>
  );
}

export default HeroSection;