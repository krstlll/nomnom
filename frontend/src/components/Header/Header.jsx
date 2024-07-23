import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your favorite food here</h2>
        <p>
        Welcome to NomNom, your ultimate destination for
         delicious and speedy food delivery. Satisfy your 
         cravings with just a few clicks and enjoy gourmet
         meals from the comfort of your home.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  )
}

export default Header
