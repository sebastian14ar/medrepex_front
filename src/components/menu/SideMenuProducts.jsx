import React from "react";
import { Link } from "react-router-dom";

import "./styles/SideMenuProducts.css";

const SideMenuProducts = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="menu-section">
          <Link className="link-title">SUTURES</Link>
        </div>
        <div className="menu-section">
          <Link to="/" className="link">
            General Surgery
          </Link>
          <Link to="/about" className="link">
            Oral/Maxillofacial
          </Link>
          <Link to="/contact" className="link">
            Plastic/Cosmetic
          </Link>
          <Link to="/free" className="link">
            Cardiac Surgery
          </Link>
          <Link to="/productinquiry" className="link">
            Research
          </Link>
          <Link to="/prefcust" className="link">
            Surgical Steel
          </Link>
          <Link to="/customerservice" className="link">
            Skin Stapler
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="menu-section">
          <Link className="link-title">SUPPLIES</Link>
        </div>
        <div className="menu-section">
          <Link to="/" className="link">
            Instruments
          </Link>
          <Link to="/about" className="link">
            Surgical Blades
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SideMenuProducts;
