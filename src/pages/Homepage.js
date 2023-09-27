import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/SideBar/Sidebar';
import DisplayItems from '../components/DisplayItems/DisplayItems';
const Homepage = () => {
  return (
    <div className='homepage'>
        <div className='Sidebar'>
            <Sidebar/>
        </div>
      <div className='navbar-container'>
        <Navbar/>
      </div>
      <div className='Main-Container'>
        <DisplayItems/>
      </div>
    </div>
  )
}

export default Homepage;
