import React from "react";
// import Footer from "../components/menu/Footer";
import SideMenu from "../components/menu/SideMenu";

import "./styles/AboutPage.css";
import logo from "../images/logo2.jpg";

const AboutPage = () => {
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
            <h2 className="principal-title">About Us</h2>
          </div>
          <section className="text-container">
            <p>
              MedRep Express Inc. is headquartered in Hurricane Utah.  The
              Company Founders have an extensive background in providing
              Products & Services to 
              <strong>
                Medical, Dental & Veterinary Practices as well as Surgical
                Centers and Research Centers.
              </strong>
            </p>
            <p>
              The Mission of MedRep Express is simple: Quality equal to the
              better known larger Corporate Brands; at a price savings of 30% or
              more.  CP Medical Sutures, are made in the USA with over 25 years
              of continued research and development producing high quality, low
              cost Surgical Sutures.  We are proud to have been part of this
              success as the Master Distributor for 15 years.
            </p>
            {/* <h5 className="text-subtitle">
              PROVIDE PRODUCT ALTERNATIVES THAT SAVE YOU MONEY.
            </h5> */}
            <p>
              Our <strong>SAMPLING PROGRAM</strong>  makes it possible for you
              to verify your product choices before placing an order. Just click
              on "Free Samples" in the Menu for further details. Our{" "}
              <strong>PREFERRED CUSTOMER PROGRAM</strong>   provides you with:
              Low Flat Rate Shipping, Preferred Customer Specials & Priority
              Service. Just click on "Preferred Customer" in the Menu for
              further details.
            </p>
            <p>
              We believe our <strong>VALUE ADDED</strong> approach to serving
              your needs sets us apart from other Distributors. Please give us a
              try and we think you will agree.
            </p>
          </section>
        </div>
        {/* <div className="footer-page">
          <Footer />
        </div> */}
      </div>
    </React.Fragment>
  );
};

export default AboutPage;
