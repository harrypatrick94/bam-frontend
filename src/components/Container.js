import React from 'react';
import LandingPage from './landingPage/LandingPage'
import OurStory from './ourStory/OurStory'
import Contact from './contact/Contact'
import Footer from './footer/Footer'
import NavBar from './navBar/NavBar'
import Wines from './wines/Wines'
import Us from './us/Us'
import '../App.css';

const Container = () => {
  return (
    <div className="App">
      <div className="landingNav">
        <LandingPage/>
        <NavBar/>
        <h2 className="ourStoryHeading">Our Story</h2>
      </div>
      <div className="usAndStory">
        <Us/>
        <OurStory/>
      </div>
      <h2 id="wineHeading">Wines</h2>
      <div className="winesLanding">
        <Wines/>
      </div>
      <div className="contactLanding">
        <Contact/>
      </div>
      <div className="footerLanding">
        <Footer />
      </div>
    </div>
  );
}

export default Container
