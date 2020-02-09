import React from "react";
import Footer from "../components/menu/Footer";
import SideMenu from "../components/menu/SideMenu";

import "./styles/RequestSamplesPage.css";

const RequestProductPage = () => {
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
          <div className="main-container-request">
            <h2 className="principal-title">Request Samples</h2>

            <section className="text-container-request">
              <p>
                We would be happy to provide additional information about any of
                our products. Just call us Toll Free at 877-740-9133 or complete
                the Email request below:
              </p>
            </section>
            <div className="form">
              <label htmlFor="name">Practice, Clinic or Business Name:</label>
              <input type="text" placeholder="Name..." />
              <label htmlFor="email">Requestor’s Name:</label>
              <input type="text" placeholder="Requestor’s Name..." />
              <label htmlFor="subject">Product Inquiry: </label>
              <textarea
                name="message"
                placeholder="Product Application..."
                cols="30"
                rows="5"
              />
              <label htmlFor="name">Phone:</label>
              <input type="text" placeholder="Phone..." />
              <label htmlFor="name">Fax:</label>
              <input type="text" placeholder="Fax..." />
              <label htmlFor="name">Email:</label>
              <input type="email" placeholder="Email..." />
              <label htmlFor="message">Shipping Address</label>
              <textarea
                name="message"
                placeholder="Shipping Address..."
                cols="30"
                rows="5"
              />
              <button class="btn btn-primary">Submit</button>
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

export default RequestProductPage;
