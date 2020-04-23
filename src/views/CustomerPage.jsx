import React from "react";
// import Footer from "../components/menu/Footer";
import SideMenu from "../components/menu/SideMenu";

import logo from "../images/logo2.jpg";

const CustomerPage = () => {
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
        <div className="main ">
          <div className="main-container">
            <h2 className="principal-title">Customer Service</h2>
          </div>
          <section className="text-container">
            <p>
              Our "Customer Service Manager", Patricia Brafford, will be happy
              to help you with questions about our Products, On-Line Ordering,
              Sending you an Order Form, Samples, Preferred Customer Program,
              Terms & Conditions or whatever questions or comments you may have.
              Just click on "Contact Us" in the Menu for contact information to
              reach Patricia.
            </p>
            <p>
              Patricia received her training as a Nurse from the California
              State Occupational Program and worked for five years at "Loma
              Linda University Medical Center" Patient Care and Outpatient Care
              Services. She subsequently held administrative positions utilizing
              her special training in Medical Terminology and Transcription.
              Patricia is also a "Certified Medical Coder" trained by the
              "International Academy of Medical Coding".
            </p>

            <p>
              One of the primary goals of our Customer Service Department is to
              get your orders shipped the next Business Day after receipt. If we
              fail to do this, we waive the already minimal, flat rate shipping
              and handling fee. For more details on our Shipping Policy, please
              click on "Terms & Conditions" found on the right hand side of our
              Home Page. You will also find our "MONEY BACK GUARANTEE" and easy
              "Return Policy" detailed on the "Terms & Conditions" page.
            </p>
            <p>
              Lots of Companies talk about "Customer Service"; but it is not
              easily found these days. We are certain you will find it at MedRep
              Express.
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

export default CustomerPage;
