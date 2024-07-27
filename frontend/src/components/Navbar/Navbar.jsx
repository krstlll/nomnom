import React, { useState, useContext } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => { // Added the missing curly braces

  const [menu, setMenu] = useState("home");

  const { getTotalCartAmount,token,setToken} = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = () => {

    localStorage.removeItem("token");
    setToken("");
    navigate("/");

  }

  return (
    <div className="navbar">
      <img src={assets.logo} alt="Logo" className="logo"/> 
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
        <img src={assets.search_icon} alt="Search" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="Basket" /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token?<button onClick={() => setShowLogin(true)}>Sign In</button>
        :<div className='navbar-profile'>
            <img src={assets.profile_icon} alt='' />
            <ul className="nav-profile-dropdown">
              <li><img src="{assets.bag_icon.png}" alt="" /><p>Orders</p></li>
              <hr />
              <li onClick={logout}><img src="{assets.logout_icon.png}" alt="" /><p>Logout</p></li>
            </ul>
          </div>}

      </div>
    </div>
  );
}

export default Navbar;
