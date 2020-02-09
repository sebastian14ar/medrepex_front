import React from "react";
import { Link } from "react-router-dom";

import "./styles/Footer.css";
import cards from "../../images/cards.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <h3>Related Links</h3>
          <hr />
          <div className="footer-links-menu">
            <div className="footer-links-sub">
              <Link className="footer-url" to="/">
                FDA
              </Link>
              <Link className="footer-url" to="/">
                Medline Plus
              </Link>
              <Link className="footer-url" to="/">
                Medical Safety Glasses
              </Link>
              <Link className="footer-url" to="/">
                United Health
              </Link>
              <Link className="footer-url" to="/">
                MSEC
              </Link>
              <Link className="footer-url" to="/">
                CMS
              </Link>
            </div>
            <div className="footer-links-sub">
              <Link className="footer-url" to="/">
                Medical Mail Order
              </Link>
              <Link className="footer-url" to="/">
                Brush & Floss Dental
              </Link>
              <Link className="footer-url" to="/">
                Science In The Box
              </Link>
              <Link className="footer-url" to="/">
                Science In The Box
              </Link>
              <Link className="footer-url" to="/">
                Sutures, Needles, and Suture Patterns
              </Link>
              <Link className="footer-url" to="/">
                For up to date medical information, visit eMedicine.com
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-terms">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="btn-special btn-primary"
            href="https://google.com"
          >
            Terms and Conditions
          </a>
          <img width="90" src={cards} alt="cards" />
        </div>
      </div>
      <div className="footer-final">
        <hr />
        <div className="footer-final-text">
          <span>2003-2019 MedRep Express</span>
          <span>2003-2019 MedRep Express</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
