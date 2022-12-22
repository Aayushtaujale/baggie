import React from 'react';
import '../../src/App.css';
import Header from './Header';
// import Cards from './Cards';
import HeroSection from './HeroSection';

// import Footer from './Footer';
import Cards from './Cards';
import ContactUs from './Contact';
import AboutUs from './AboutUs';




const Home=(e)=> {
  return (
    <>
    {/* <Header></Header> */}
      <HeroSection />
      
      
      <Cards/>
      <AboutUs/>
      <ContactUs/>
      {/* <Contact/> */}
      
    </>
  );
}

export default Home;