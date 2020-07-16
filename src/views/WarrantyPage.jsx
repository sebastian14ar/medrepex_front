import React from "react";
// import Footer from "../components/menu/Footer";
import SideMenu from "../components/menu/SideMenu";

import logo from "../images/logo2.jpg";

const WarrantyPage = () => {
  return (
    <React.Fragment>
      <div className="hero">
        <div className="navbar">
          <div className="navbar-container">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="menu menu-section">
          <SideMenu />
        </div>
        <div className="main">
          <div className="main-container">
            <h2 className="principal-title">
              German Stainless Steel Surgical Instruments
            </h2>
          </div>
          <section className="text-container">
            <p>
              <strong>LIFETIME WARRANTY</strong>
            </p>
            <p>
              We guarantee every surgical instrument to be free of functional
              defects in workmanship and materials. Medrep Express promises to
              replace, free of charge, any surgical instrument that does not
              meet these requirements when used for their intended surgical
              purpose.
            </p>
            <p>
              <strong>CARE AND HANDLING</strong>
            </p>
            <p>
              With proper care and handling, these instruments will last for
              years. Please use these guidelines for all German Stainless Steel
              Instruments.
            </p>
            <ul>
              <li>
                Brand new instruments should be cleaned prior to first
                sterilization.
              </li>
              <li>
                Contaminated instruments should be processed as soon as
                possible.
              </li>
              <li>
                Stubborn protein particles can be removed with a scrub brush.
                Never use steel wool, abrasives or an acid rinse.
              </li>
              <li>Open joints on instruments prior to preparation</li>
              <li>
                Do not use multipurpose detergents to wash or soak instruments.
                Instead, use a low-suds detergent specifically designed for
                instruments. The pH of the product should never be higher than
                8.
              </li>
              <li>
                When using ultrasonics, a detergent with a pH of 6, 7 or 8 must
                be used.
              </li>
              <li>
                Lubrication is vital to a long instrument life. We recommend
                water soluble instrument milk.
              </li>
              <li>
                Avoid silicone lubricants because they tend to build up and mix
                with debris to clog moving parts, which becomes almost
                impossible to remove. Debris buildup can have a “rust-like”
                appearance.
              </li>
              <li>
                Rinse your cleaned instruments in de-mineralized water. Be sure
                to remove all residual cleaning compounds before sterilization,
                as they can cause stains.
              </li>
              <li>Dry the instrument thoroughly after rinsing.</li>
            </ul>
          </section>
        </div>
        {/* <div className="footer-page">
          <Footer />
        </div> */}
      </div>
    </React.Fragment>
  );
};

export default WarrantyPage;
