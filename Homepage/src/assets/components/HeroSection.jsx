import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section>
      <div className="hero">
        <g className="hero-content">Enjoy 40% off the first four weeks of a new subscription! <a href='/terms' id="terms">Terms</a></g>
      </div>
      <div className="anth">
      <div className="middle">
        <x>Easy meal kits.</x>
        <br></br>
        <x>Quality ingredients.</x>
        <br></br>
        <x>Delivered to your door.</x>
        <br></br>
        <button className="cta-button">SEE PLANS</button>
      </div>
      </div>
      <div id="body">
      <div className="container">
        <div className="text-section">
            <h1>New! Prepared & Ready</h1>
            <p>Get pre-made meals delivered fresh with top-quality ingredients—<strong>now starting at just $9.99.</strong></p>
            <button>SEE PLANS</button>
        </div>
        <div className="image-section">
             <img width="60%"  id="image"src="https://media.blueapron.com/assets/registration/homepage/marble-variety-prepared.webp?height=500&quality=90" alt='foodie'></img>     
        </div>
        </div>
        </div>
    </section>
  );
}

export default HeroSection;