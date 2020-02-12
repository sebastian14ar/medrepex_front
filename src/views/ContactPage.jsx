import React from "react";
import Footer from "../components/menu/Footer";
import SideMenu from "../components/menu/SideMenu";

import "./styles/ContactPage.css";

const ContactPage = () => {
  return (
    <React.Fragment>
      <div className="hero">
        <div className="navbar">
          <h1>NavBar</h1>
        </div>
        <div className="menu menu-section">
          <SideMenu />
        </div>
        <div className="main ">
          <div className="main-container">
            <h2 className="principal-title">Contact Us</h2>
            <section className="text-container-contact">
              <p className="text-special">Tool Free Phone: 877-740-9133</p>
              <p className="text-special">Fax: 928-445-6267</p>
              <p className="text-special">E-Mail: Sales@MedRepExpress.com</p>
            </section>
            <div className="form">
              <label htmlFor="name">Your Name:</label>
              <input type="email" placeholder="Your Name..." />
              <label htmlFor="email">Your Email Address:</label>
              <input type="text" placeholder="Your Email..." />
              <label htmlFor="subject">Subject:</label>
              <input type="text" placeholder="Subject..." />
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                placeholder="Write your message"
                cols="30"
                rows="10"
              />
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
        <div className="footer-page">
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactPage;
