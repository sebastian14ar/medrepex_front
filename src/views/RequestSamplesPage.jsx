import React from "react";
import SideMenu from "../components/menu/SideMenu";

import "./styles/RequestSamplesPage.css";

const RequestSamplesPage = () => {
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
            <h2 className="principal-title">Request Samples</h2>
          </div>
          <section className="text-container-request">
            <p>
              It is not always easy to evaluate the suitability of an unknown
              product for your application. This is why we offer several Risk
              Free ways for you to try our products and judge first hand for
              yourself:
            </p>

            <p className="text-special">
              1. For Sutures, Surgical Blades, Gloves, Syringes, Cotton Products
              & “Sani-Cloth” Products... purchase a Box Online or by Phone or
              Fax and if you are not satisfied with the Product’s Performance,
              for any reason, we will refund the full purchase price with no
              return of the product required.
            </p>
            <p className="text-special">
              {" "}
              2. Or... Provide us with the information below by completing the
              “Required Information” and clicking “Submit”. We will send a free
              single unit sample of the product that we believe fits your
              application best.
            </p>
          </section>
          <div className="form">
            <label htmlFor="name">Practice, Clinic or Business Name:</label>
            <input type="text" placeholder="Name..." />
            <label htmlFor="email">Requestor’s Name:</label>
            <input type="text" placeholder="Requestor’s Name..." />
            <label htmlFor="subject">Product Application: </label>
            <textarea
              name="message"
              placeholder="Product Application..."
              cols="30"
              rows="10"
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
              rows="10"
            />
            <button class="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RequestSamplesPage;
