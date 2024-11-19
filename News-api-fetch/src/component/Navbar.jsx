import React from "react";
import "../App.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <h2>NewsDotCom</h2>
        </div>
        <div className="menu">
          <li>Entertainment</li>
          <li>Sports</li>
          <li>Fashion</li>
          <li>India 24*7</li>
        </div>
        <div className="register">
          <input className="input" type="email" placeholder="Email ID to register" />
          <button className="submit">Register</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;