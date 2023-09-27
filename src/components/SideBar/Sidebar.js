import React, { useState } from 'react'
import styles from './Sidebar.module.css';
const Sidebar = () => {
  const[minPrice,setMinPrice]=useState(0);
  const[maxPrice,setMaxPrice]=useState(100);
  const handlePriceChange = (event)=>{
    const { name, value } = event.target;
    if (name === 'minPrice') {
      setMinPrice(Number(value));
    } else if (name === 'maxPrice') {
      setMaxPrice(Number(value));
    }
  }
  return (
    <div className={styles['main-container']}>
      <div>Filter</div>
      <div>
      <label>Min Price: {minPrice} Rs</label>
        <input
          type="range"
          name="minPrice"
          value={minPrice}
          min={0}
          max={1000} // Adjust the maximum value as needed
          step={10}  // Adjust the step value as needed
          onChange={handlePriceChange}
        />
      </div>
    </div>
  )
}

export default Sidebar;
