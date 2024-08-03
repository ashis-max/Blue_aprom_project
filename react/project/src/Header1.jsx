import React from 'react';
import "./Header1.css"
function MealSubscription() {
  return (
    <div className='main1'>
          <div className="navigation">
            <a href="#" className='a'><img className="logo" src="https://th.bing.com/th/id/OIP.1mdIGWbduah2qA9TJ4G8TQHaKl?rs=1&pid=ImgDetMain" alt="Meal Kits" /></a>
            <a href="#" className='a'><b> Plan     </b></a>
            <span>&gt;</span>
            <a href="#" className='a'>  Account  </a>
            <span>&gt;</span>
            <a href="#" className='a'> Checkout </a>
            <span>&gt;</span>
            <a href="#" className='a'> Choose Meals </a>
            
            <div className='personalise'>
        <h2>Personalize your meal subscription</h2></div>
        <p className='new'>Get excited—your choice of 80+ weekly options is just a few steps away!</p>
      </div>
      <div className='ch1'>
        <div className='ab'>
        <h2>1. Choose a type of meal</h2>
          </div>
          <div className='btnname'><button className='btn1'>
          <div className='img'>
            <img  className='img2' src="https://media.blueapron.com/assets/registration/pricing/meal-kits-thumbnail.webp?width=300&quality=90" alt="Meal Kits" />
            <div>
              <p className='meal'>Meal Kits</p>
              <p className='meal1'>Ingredients and easy-to-follow recipes for home-cooked meals</p>
              
              </div>
          </div>
          </button>
          <button className='btn2'>
             <div className='img1'>
            <div>
            <img className='img3' src="https://media.blueapron.com/assets/registration/pricing/prepared-and-ready-thumbnail.webp?width=300&quality=90" alt="Prepared & Ready" />
            
            </div>
            <div className='prepare'>
              <p className='meal'>Prepared & Ready</p>
              <p className='meal1'>Pre-made meals delivered fresh and ready in as little as 2 minutes. Starting at just $9.99.</p>
            </div>
          </div>
        </button>
        </div>
       <p className='italic'><i>Want both? Select Prepared & Ready meals can be added to meal kit orders as Add-ons each week.</i></p>
      </div>
    </div>
  );
}

export default MealSubscription;
/*
import React from 'react';

function MealSubscription() {
  return (
    <div>
      <div className="header">
        <div className="logo">
          { Add your logo image here }
          </div>
          <div className="navigation">
            <a href="#">Plan</a>
            <span>&gt;</span>
            <a href="#">Account</a>
            <span>&gt;</span>
            <a href="#">Checkout</a>
            <span>&gt;</span>
            <a href="#">Choose Meals</a>
          </div>
        </div>
        <div className="content">
          <h1>Personalize your meal subscription</h1>
          <p>Get excited—your choice of 80+ weekly options is just a few steps away!</p>
          <div className="section">
            <h2>1. Choose a type of meal</h2>
            <div className="meal-option">
              <div className="image">
                { Add your Meal Kit image here }
              </div>
              <div className="description">
                <h3>Meal Kits</h3>
                <p>Ingredients and easy-to-follow recipes for home-cooked meals</p>
              </div>
              <div className="check">
                { Add a checkmark icon if Meal Kits is selected }
              </div>
            </div>
            <div className="meal-option">
              <div className="image">
                { Add your Prepared & Ready image here }
              </div>
              <div className="description">
                <h3>Prepared & Ready</h3>
                <p>Pre-made meals delivered fresh and ready in as little as 2 minutes. Starting at just $9.99.</p>
              </div>
              { Add a checkmark icon if Prepared & Ready is selected }
            </div>
          </div>
          <p>Want both? Select Prepared & Ready meals can be added to meal kit orders as Add-ons each week.</p>
        </div>
      </div>
    );
  }
  
  export default MealSubscription;
  */