import React, { Component } from "react";
import Footer from "../components/menu/Footer";
import SideMenu from "../components/menu/SideMenu";

import "./styles/RequestSamplesPage.css";
import logo from "../images/logo2.jpg";
import { connect } from "react-redux";

import * as storeActions from "../actions/storeActions";
import storeReducers from "../reducers/storeReducers";

class RequestSamplesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        "bussinees-name": "",
        name: "",
        phone: "",
        fax: "",
        email: "",
        "shipping-address": "",
        "product-app": ""
      }
    };
  }

  handleChange = event => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value
      }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.enviarPeticion(this.state.form);
  };

  render() {
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
            <div className="main-container-request">
              <h2 className="principal-title">Request Samples</h2>

              <section className="text-container-request">
                <p>
                  It is not always easy to evaluate the suitability of an
                  unknown product for your application. This is why we offer
                  several Risk Free ways for you to try our products and judge
                  first hand for yourself:
                </p>

                <p className="text-special">
                  1. For Sutures, Surgical Blades, Gloves, Syringes, Cotton
                  Products & “Sani-Cloth” Products... purchase a Box Online or
                  by Phone or Fax and if you are not satisfied with the
                  Product’s Performance, for any reason, we will refund the full
                  purchase price with no return of the product required.
                </p>
                <p className="text-special">
                  2. Or... Provide us with the information below by completing
                  the “Required Information” and clicking “Submit”. We will send
                  a free single unit sample of the product that we believe fits
                  your application best.
                </p>
              </section>
              <div className="form">
                <label htmlFor="bussinees-name">
                  Practice, Clinic or Business Name:
                </label>
                <input
                  onChange={this.handleChange}
                  name="bussinees-name"
                  type="text"
                  placeholder="Name..."
                />
                <label htmlFor="name">Requestor’s Name:</label>
                <input
                  onChange={this.handleChange}
                  name="name"
                  type="text"
                  placeholder="Requestor’s Name..."
                />
                <label htmlFor="product-app">Product Application: </label>
                <textarea
                  name="product-app"
                  onChange={this.handleChange}
                  placeholder="Product Application..."
                  cols="30"
                  rows="10"
                />
                <label htmlFor="phone">Phone:</label>
                <input
                  onChange={this.handleChange}
                  name="phone"
                  type="text"
                  placeholder="Phone..."
                />
                <label htmlFor="fax">Fax:</label>
                <input
                  onChange={this.handleChange}
                  name="fax"
                  type="text"
                  placeholder="Fax..."
                />
                <label htmlFor="email">Email:</label>
                <input
                  onChange={this.handleChange}
                  name="email"
                  type="email"
                  placeholder="Email..."
                />
                <label htmlFor="shipping-address">Shipping Address</label>
                <textarea
                  name="shipping-address"
                  onChange={this.handleChange}
                  placeholder="Shipping Address..."
                  cols="30"
                  rows="10"
                />
                <button onClick={this.handleSubmit} className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="footer-page">
            <Footer />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = reducers => {
  return storeReducers;
};

export default connect(mapStateToProps, storeActions)(RequestSamplesPage);
