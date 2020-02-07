import React from "react";
import { Link } from "react-router-dom";

import "./styles/SideMenu.css";

const SideMenu = () => {
  return (
    <React.Fragment>
      <div className="menu-section container">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/about" className="link">
          About Us
        </Link>
        <Link to="/contact" className="link">
          Contact Us
        </Link>
        <Link to="/free" className="link">
          Request Samples
        </Link>
        <Link to="/productinquiry" className="link">
          Request Product Info
        </Link>
        <Link to="/prefcust" className="link">
          Preferred Customer
        </Link>
        <Link to="/customerservice" className="link">
          Customer Service
        </Link>
      </div>
    </React.Fragment>
  );
};

export default SideMenu;
