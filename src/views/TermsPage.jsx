import React from "react";
import Footer from "../components/menu/Footer";
import SideMenu from "../components/menu/SideMenu";

import logo from "../images/logo2.jpg";

const TermsPage = () => {
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
            <h2 className="principal-title">TERMS & CONDITIONS</h2>
          </div>
          <section className="text-container">
            <p>
              Our payment terms are net 30 days (due 30 days from Invoice Date).
              It is requested that payment be made within the terms of the
              agreement to maintain open account privileges.  A 1.5% charge may
              be applied to all past due balances.
            </p>
            <p>
              <strong>Shipping & Handling</strong>
            </p>
            <p>
              The Shipping Cost "Flat Fee" quoted at checkout will apply to most
              orders.  However if special handling or expedited shipping is
              required, the shipping charge will be at our cost with no extra
              handling or other fee applied.
            </p>
            <p>
              Shipping & Handling terms outlined above apply only to shipments
              within the Continental United States. Shipping & Handling charges
              will be quoted separately for any Orders shipped outside of the
              Continental United States. All orders will be delivered via an
              insured ground service carrier. Next Day Air and Second Day Air
              are available for an additional charge.
            </p>
            <p>
              <strong className="sp-strong">Lead Time:</strong>
            </p>
            <p>
              Most orders ship the next Business Day. If the products ordered
              are out of stock, we will contact you immediately and ship a
              partial if available and advise you of the delivery date for the
              back-order.
            </p>
            <p>
              <strong>We offer a 30-day Money Back Guarantee!</strong>
            </p>
            <p>
              Every effort is made to ensure complete satisfaction. Each order
              is picked, packed, and double-checked for accuracy. Every product
              is tested to ensure only the highest quality products are sent
              out. If any of the products purchased do not meet your
              satisfaction, simply call us to arrange for a return authorization
              within 30 days of receipt.
            </p>
            <p>
              <strong>Return Policy</strong>
            </p>
            <p>
              All returns require a Return Authorization Number. All returns
              must be made in the original package, undamaged. Certain other
              restrictions may apply.
            </p>
            <p>
              <strong>REGULATIONS:</strong>
            </p>
            <p>
              The sale of the items on our website may be subject to strict
              regulation by the U.S. FDA, and state & local regulatory agencies.
              Do not order these items unless you are a licensed purchaser. In
              the event this item is regulated, MedRep Express will verify your
              status as a licensed purchaser of this item before shipping. It is
              our opinion that the items listed on our website are not
              restricted for purchase.
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

export default TermsPage;
