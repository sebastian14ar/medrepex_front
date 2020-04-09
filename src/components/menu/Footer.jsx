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
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="footer-url"
                href="http://www.fda.gov/medwatch/safety.htm"
              >
                FDA
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="footer-url"
                href="http://www.nlm.nih.gov/medlineplus/drugandmedicaldevicesafety.html"
              >
                Medline Plus
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="footer-url"
                href="http://www.medicalsafetyglasses.com/pages/contact%20us%20page/contact%20us%20page.htm"
              >
                Medical Safety Glasses
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="footer-url"
                href="http://www.uhftips.org"
              >
                United Health
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="footer-url"
                href="http://durable-medical-equipment.medical-supplies-equipment-company.com/"
              >
                MSEC
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="footer-url"
                href="http://www.cms.hhs.gov/suppliers/dmepos/"
              >
                CMS
              </a>
            </div>
            <div className="footer-links-sub">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="footer-url"
                href="http://medicalmailorder.com/"
              >
                Medical Mail Order
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="footer-url"
                href="http://www.bettersmile.com/articles/24.html"
              >
                Brush & Floss Dental
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="footer-url"
                href="http://www.scienceinthebox.com/en_UK/research/efficiencyofantibac_en.html"
              >
                Science In The Box
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                className="footer-url"
                href="http://mercury.bio.uaf.edu/~john_blake/bio655/module3/3_suture.htm"
              >
                Sutures, Needles, and Suture Patterns
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="footer-url"
                href="http://www.eMedicine.com"
              >
                For up to date medical information, visit eMedicine.com
              </a>
            </div>
          </div>
        </div>
        <div className="footer-terms">
          {/* <a
            target="_blank"
            rel="noopener noreferrer"
            
            href="https://google.com"
          > */}
          <Link to="/terms-conditions" className="btn-special btn-primary">
            Terms and Conditions
          </Link>
          {/* </a> */}
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
