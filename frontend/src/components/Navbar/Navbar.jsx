import React, { useState,useContext } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin })
  const [menu, setMenu] = useState("home");

  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo"/> 
      <ul className="navbar-menu">
        <li className={menu === "home" ? "active" : ""}>
          <Link to="/" onClick={() => setMenu("home")}>home</Link>
        </li>
        <li className={menu === "menu" ? "active" : ""}>
          <a href="#explore-menu" onClick={() => setMenu("menu")}>menu</a>
        </li>
        <li className={menu === "contact-us" ? "active" : ""}>
          <a href="#footer" onClick={() => setMenu("contact-us")}>contact us</a>
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
}

export default Navbar;
