import React from 'react'
import './Price.css'
import New from'./New.png'
const price = () => {
  return (
    <div>
      
        <div className='logo1'>
            <img src={New} alt="" />
            <p className='enjoy'>Enjoy 40% off the first four weeks of a new subscription!</p>
            <button className='radius'><b>REDEEM OFFERS</b></button>
            <p className='radius2'><b>OFFER DETAILS</b></p>    
        </div>
        <div>
        <h1>Explore our meal delivery menu</h1>
        <div className='serve'>
          <p className='serve2'><b>Meal Kits</b></p>
          <p className='serve2'><b>Meal Kits</b></p>
          <p className='serve2'><b>Preapared & Ready</b></p>
          <p className='serve9'><b>Add-ons</b></p>
        </div>
        <div className='serve'>
          <p className='serve3'>2 servings</p>
          <p className='serve4'>4 servings</p>
          <p className='serve5'>1 serving</p>
          <p className='serve7'> Servings vary</p>
        </div>
        <div>
          <h2>Meal Kits</h2>
          <p>An ever-changing mix of easy-to-follow recipes perfectly portioned for two.</p>
        </div>
      </div>
      <div className='nav'>
        <h3>Week of August 5th</h3>
        <button className='btn1'>SEE PLANS</button>
      </div>
    </div>
  )
}

export default price
