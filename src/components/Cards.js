import React from 'react';
import '../styles/Cards.css';
import CardItem from './CardItem';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

function Cards() {
  return (
    <div className='cardss'>
        <Bounce top cascade>
      <h1>Our Trendings</h1>
      </Bounce>
      <Fade left>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/baggs.jpg'
              text='Small Boxed Side Bag'

              

              label='Trending'
              path='/'
            />
            <CardItem
              src='images/logo2.jpg'
              text='Luxury Bag'
              label='Luxury'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/sling.jpg'
              text='Most Selling'
              label='Most Selling'
              path='/'
            />
            <CardItem
              src='images/design.jpg'
              text='Cross Bag'
              label='Designer Bag'
              path='/'
            />
            <CardItem
              src='images/shoulder.jpg'
              text='Shoulder Bag'
              label='Best Scenery'
              path='/'
            />
          </ul>
        </div>
      </div>
      </Fade>
    </div>
  );
}

export default Cards;





