import React from "react";
import Footer from "../components/menu/Footer";
import SideMenu from "../components/menu/SideMenu";

import "./styles/AboutPage.css";

const AboutPage = () => {
  return (
    <React.Fragment>
      <div className="hero">
        <div className="navbar">
          <h1>NavBar</h1>
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
              MedRep Express, a division of "Business Equity Services Inc.", is
              headquartered in Prescott, Arizona. The Company Founders have an
              extensive background in providing Products & Services to MEDICAL,
              DENTAL & VETERINARY Providers, as well as SAFETY products for Home
              & Work.
            </p>
            <p>The Mission of MedRep Express is simple:</p>
            <h5 className="text-subtitle">
              PROVIDE PRODUCT ALTERNATIVES THAT SAVE YOU MONEY.
            </h5>
            <p>
              We specialize in Disposable Products and represent many of the
              world's leading manufacturers. But at MedRep Express, we realize
              that just Buying, Stocking and Selling well known products is not
              enough. We must earn your business by ADDING VALUE to the process.
              We do this by focusing our resources on searching-out lesser known
              products that provide you additional choices at BELOW MARKET
              PRICES. You match the product with the level of quality and
              functionality required in your application and SAVE MONEY.
            </p>
            <p>
              Our SAMPLING PROGRAM makes it possible for you to verify your
              product choices before placing an order. Just click on "Free
              Samples" in the Menu for further details. Our PREFERRED CUSTOMER
              PROGRAM provides you with: Free Shipping, Preferred Customer
              Specials & Priority Service. Just click on "Preferred Customer" in
              the Menu for further details.
            </p>
            <p>
              We believe our VALUE ADDED approach to serving your needs sets us
              apart from other Distributors. Please give us a try and we think
              you will agree.
            </p>
          </section>
        </div>
        <div className="footer-page">
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutPage;
