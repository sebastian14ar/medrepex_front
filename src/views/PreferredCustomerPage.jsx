import React from "react";
import Footer from "../components/menu/Footer";
import SideMenu from "../components/menu/SideMenu";

import logo from "../images/logo2.jpg";

const PreferredCustomerPage = () => {
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
            <h2 className="principal-title">PREFERRED CUSTOMER PROGRAM</h2>
          </div>
          <section className="text-container">
            <p>
              CUSTOMER LOYALTY has long been a key contributor to the success of
              MedRep Express. Our business continues to grow on the strength of
              customers returning with repeat orders for their Disposable
              Product needs. This in turn allows us to keep our overhead cost
              related to marketing and advertising low which is why you will
              find our prices, even on well known brands, lower than the
              competition.
            </p>
            <p>
              One way we strive to build Customer Loyalty is through our
              "Preferred Customer Program". Eligibility for this Program is
              easy.... when your cumulative purchases from the day you begin
              ordering from us, reach $1000.00.... you become a "Preferred
              Customer". You never need to qualify again, from that day forward
              you will always be a "Preferred Customer" of MedRep Express.
            </p>

            <p>
              A "Preferred Customer" receives special benefits announced from
              time to time and is always entitled to the following special
              benefits:
            </p>
            <p className="text-special">
              1. Free Shipping on any size order to anywhere. No minimum order,
              and no handling fees of $6.90 to $9.90 for small orders...... one
              low flat rate, nominal handling fee of $4.90 applies to all of
              your orders no matter what size.
            </p>
            <p className="text-special">
              2. Preferred Customer Specials which are published each month only
              to "Preferred Customers".
            </p>
            <p className="text-special">
              3. Priority Service 24/7 contact information available only to
              "Preferred Customers".
            </p>
            <p>
              For those of you who are already "Preferred Customers", we thank
              you for your loyalty and support; and for all others, we hope to
              welcome you to "Preferred Customer" status soon.
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

export default PreferredCustomerPage;
