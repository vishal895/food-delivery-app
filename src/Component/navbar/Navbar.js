import React, { useState } from 'react'
import './Navbar.css'
import useOnlinestatus from '../../utils/useOnlinestatus'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const [btn,SetBtn] = useState("Login")
  const onlinestatusview = useOnlinestatus()

  const cartitems = useSelector((store)=> store.cart.items)
  return (
    <div className='bg-color p-2'>
        <div className='d-flex justify-content-between align-items-center'>
            <div className='logo'>
                <img src='https://icon-library.com/images/food-app-icon/food-app-icon-0.jpg' alt=''/>
            </div>
            <div className='d-flex justify-content-between align-items-center gap-3'>
               <h5>online status:{onlinestatusview ? "🟢" :"🔴"}</h5>
               <Link to="/" className='text-black no-underline' >Home</Link>
               <Link to="/about" className='text-black no-underline'>About</Link>
               <Link to="/cart" className='text-black no-underline font-bold'>Cart ({cartitems.length})</Link>
               
               
               <button className="px-4 py-1 bg-gray-950 text-white" onClick={() => {
           btn === "Login" ? SetBtn("Logout") : SetBtn("Login")
            
          }}>{btn}</button>
        </div>
               
        </div>
    </div>
  )
}

export default Navbar