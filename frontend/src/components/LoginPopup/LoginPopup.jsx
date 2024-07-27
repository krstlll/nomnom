import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Login");

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
        </div>
        <div className="login-popup-inputs">
          {currentState === "Sign Up" && <input type="text" placeholder='Name' required />}
          <input type="email" placeholder='Email' required />
          <input type="password" placeholder='Password' required />
        </div>
        <button>{currentState === "Sign Up" ? "Create account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use and privacy policy.</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Don't have an account yet? <span onClick={() => setCurrentState("Sign Up")} className="link">Sign up here</span>
          </p>
        ) : (
          <p>
            Already have an account? <span onClick={() => setCurrentState("Login")} className="link">Login here</span>
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPopup;
