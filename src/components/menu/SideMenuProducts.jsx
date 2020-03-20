import React from "react";
import { Link } from "react-router-dom";

import "./styles/SideMenuProducts.css";

const SideMenuProducts = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="menu-section">
          <Link to="/store/surgical" className="link-title">
            SUTURES
          </Link>
        </div>
        <div className="menu-section">
          <Link to="/store/surgical" className="link">
            General Surgery
          </Link>
          <Link to="/store/oral" className="link">
            Oral/Maxillofacial
          </Link>
          <Link to="/store/cosmetic" className="link">
            Plastic/Cosmetic
          </Link>
          <Link to="/cardiac" className="link">
            Cardiac Surgery
          </Link>
          <Link to="/store/vet" className="link">
            Research
          </Link>

          <Link to="/steel" className="link">
            Surgical Steel
          </Link>
          <Link to="/skin" className="link">
            Skin Stapler
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="menu-section">
          <Link to="/store/surgical" className="link-title">
            SUPPLIES
          </Link>
        </div>
        <div className="menu-section">
          <Link to="/store/surgical" className="link">
            Instruments
          </Link>
          <Link to="/store/instruments/blades/surgical" className="link">
            Surgical Blades
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SideMenuProducts;
