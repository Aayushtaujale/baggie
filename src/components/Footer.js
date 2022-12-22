import React from 'react';
import '../styles/Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { fontSize } from '@mui/system';

function Footer() {
  return (
    <div className='footer-container'>
      <video src='/videos/Baggie.mp4' autoPlay loop muted />
        
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join Us and View Our Trending and Favorite Bags!!!
          
        </p>
        <p className='footer-subscription-text'>
          You can visit us at any time.
        </p>
        
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button className="connect" buttonStyle='btn--outline'>Connect</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
         
          <div class='footer-link-items'>
            <h3>Contact Us</h3>
            <Link to='/contact'>Contact</Link>
          
            <Link to='/viewadded_bags'>Bags</Link>
            
          </div>
        </div>
        <div className='footer-link-wrapper'>
         
          <div class='footer-link-items'>
            <h3>Social Media</h3>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/Home' className='social-logo'>
              @Baggie
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>Baggie © 2022</small>
      
           
        </div>
      </section>
    </div>
  );
}

export default Footer;