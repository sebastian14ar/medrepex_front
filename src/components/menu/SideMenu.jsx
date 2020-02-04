import React from "react";
import { Link } from "react-router-dom";

import "./styles/SideMenu.css";

const SideMenu = () => {
  return (
    <React.Fragment>
      <div className="menu-section">
        <Link to="/" className="btn btn-grey">
          Home
        </Link>
        <Link to="/about" className="btn btn-grey">
          About Us
        </Link>
        <Link to="/contact" className="btn btn-grey">
          Contact Us
        </Link>
        <Link to="/free" className="btn btn-grey">
          Request Samples
        </Link>
        <Link to="/productinquiry" className="btn btn-grey">
          Request Product Info
        </Link>
        <Link to="/prefcust" className="btn btn-grey">
          Preferred Customer
        </Link>
        <Link to="/customerservice" className="btn btn-grey">
          Customer Service
        </Link>
      </div>
    </React.Fragment>
  );
};

export default SideMenu;
