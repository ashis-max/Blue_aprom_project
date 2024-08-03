import React, { useState } from 'react';
import './footer1.css'
const PlanSelection = () => {
  const [selectedPreferences, setSelectedPreferences] = useState([]);
  const [selectedServings, setSelectedServings] = useState(null);
  const [selectedMealsPerWeek, setSelectedMealsPerWeek] = useState(null);

  const handlePreferenceChange = (preference) => {
    if (selectedPreferences.includes(preference)) {
      setSelectedPreferences(selectedPreferences.filter((p) => p !== preference));
    } else {
      setSelectedPreferences([...selectedPreferences, preference]);
    }
  };

  const handleServingsChange = (servings) => {
    setSelectedServings(servings);
  };

  const handleMealsPerWeekChange = (mealsPerWeek) => {
    setSelectedMealsPerWeek(mealsPerWeek);
  };

  const calculatePrice = () => {
    // Logic to calculate price based on selected preferences, servings, and meals per week
    // Replace this with your actual price calculation logic
    const basePrice = selectedPreferences.length * 10;
    const servingsPrice = selectedServings * 2;
    const mealsPerWeekPrice = selectedMealsPerWeek * 5;
    return basePrice + servingsPrice + mealsPerWeekPrice;
  };

  return (
    <div className="container">
      <div className="section1">
        <div className='choose'><h2>Choose your preferences</h2></div>
        <div className="preference-list">
          
          <div className='Chef'><Preference
            preference="Chef Favorites"
            icon={<i className="fas fa-utensils"></i>}
            description="Our Test Kitchen's top picks"
            selected={selectedPreferences.includes('Chef Favorites')}
            onChange={() => handlePreferenceChange('Chef Favorites')}
          /></div><div className='Chef'>
          <Preference
            preference="Wellness"
            icon={<i className="fas fa-heart"></i>}
            description="Nutritionist-approved recipes that don't"
            selected={selectedPreferences.includes('Wellness')}
            onChange={() => handlePreferenceChange('Wellness')}
          /></div><div className='Chef'>
          <Preference
            preference="Family Friendly"
            icon={<i className="fas fa-users"></i>}
            description="Classic flavors the whole family will love"
            selected={selectedPreferences.includes('Family Friendly')}
            onChange={() => handlePreferenceChange('Family Friendly')}
          /></div><div className='Chef'>
          <Preference
            preference="Fast & Easy"
            icon={<i className="fas fa-stopwatch"></i>}
            description="Recipes designed for low prep or quick"
            selected={selectedPreferences.includes('Fast & Easy')}
            onChange={() => handlePreferenceChange('Fast & Easy')}
          /></div><div className='Chef'>
          <Preference
            preference="Veggies"
            icon={<i className="fas fa-leaf"></i>}
            description="Meat-free meals highlighting seasonally"
            selected={selectedPreferences.includes('Veggies')}
            onChange={() => handlePreferenceChange('Veggies')}
          /></div>
        </div>
      </div>

      <div className="section2">
      <div className='choose1'><h2 >Select your plan</h2></div>
        <div className="plan-options">
          <div className="plan-option">
            <h3>Servings per meal</h3>
            <button
              className={`plan-button ${selectedServings === 2 ? 'active' : ''}`}
              onClick={() => handleServingsChange(2)}
            >
              2
            </button>
            <button
              className={`plan-button ${selectedServings === 4 ? 'active' : ''}`}
              onClick={() => handleServingsChange(4)}
            >
              4
            </button>
          </div>
          <div className="plan-option">
            <h3>Meals per week</h3>
            <button
              className={`plan-button ${selectedMealsPerWeek === 2 ? 'active' : ''}`}
              onClick={() => handleMealsPerWeekChange(2)}
            >
              2
            </button>
            <button
              className={`plan-button ${selectedMealsPerWeek === 3 ? 'active' : ''}`}
              onClick={() => handleMealsPerWeekChange(3)}
            >
              3
            </button>
            <button
              className={`plan-button ${selectedMealsPerWeek === 4 ? 'active' : ''}`}
              onClick={() => handleMealsPerWeekChange(4)}
            >
              4
            </button>
            <button
              className={`plan-button ${selectedMealsPerWeek === 5 ? 'active' : ''}`}
              onClick={() => handleMealsPerWeekChange(5)}
            >
              5
            </button>
          
        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="summary-item">
            <span>Price per serving</span>
            <span>${calculatePrice()}</span>
          </div>
          <div className="summary-item">
            <span>Shipping</span>
            <span>FREE</span>
          </div>
          <div className="summary-item total">
            <span>First order subtotal</span>
            <span>${calculatePrice()}</span>
          </div>
        </div>
        <button className="continue-button" disabled={!selectedPreferences.length || !selectedServings || !selectedMealsPerWeek}>
          Continue
        </button>
        <p className="info">You can update your preferences and skip, pause, or cancel at any time. <a href="#">Learn more</a></p>
      </div>
      </div></div>
    </div>
  );
};

const Preference = ({ preference, icon, description, selected, onChange }) => {
  return (
    <div className={`preference-item ${selected ? 'selected' : ''}`} onClick={onChange}>
      <div className="preference-icon">{icon}</div>
      <div className="preference-details">
        <h3>{preference}</h3>
        <p>{description}</p>
      </div>
      <div className="preference-check">
        {selected && <i className="fas fa-check"></i>}
      </div>
    </div>
  );
};

export default PlanSelection;