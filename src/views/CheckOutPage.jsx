import React, { Component } from "react";
import Footer from "../components/menu/Footer";
import SideMenu from "../components/menu/SideMenu";

import "./styles/RequestSamplesPage.css";
import logo from "../images/logo2.jpg";
import { connect } from "react-redux";

import * as storeActions from "../actions/storeActions";
import storeReducers from "../reducers/storeReducers";

class CheckOutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        businessName: "",
        firstName: "",
        lastName: "",
        phone: "",
        fax: "",
        email: "",
        address: "",
        shippingAddress: "",
        state: "",
        zipCode: "",
        country: "",
        numberCard: "",
        cardNameHolder: "",
        numberExpDate: "",
        secCode: "",
        items: this.props.storeReducers.storeItems
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
    this.props.enviarCompra({
      ...this.state.form
    });
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
              <h2 className="principal-title">Checkout</h2>

              <div className="form">
                <label htmlFor="businessName">
                  Practice, Clinic or Business Name:
                </label>
                <input
                  onChange={this.handleChange}
                  name="businessName"
                  type="text"
                  placeholder="Businness Name..."
                />
                <label htmlFor="firstName">First Name:</label>
                <input
                  onChange={this.handleChange}
                  name="firstName"
                  type="text"
                  placeholder="First Name..."
                />
                <label htmlFor="lastName">Last Name:</label>
                <input
                  onChange={this.handleChange}
                  name="lastName"
                  type="text"
                  placeholder="Last Name..."
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
                <label htmlFor="address">Shipping Address</label>
                <textarea
                  name="address"
                  onChange={this.handleChange}
                  placeholder="Shipping Address..."
                  cols="30"
                  rows="10"
                />
                <label htmlFor="altAddress">
                  Alternative Shipping Address
                </label>
                <textarea
                  name="altAddress"
                  onChange={this.handleChange}
                  placeholder="Alternative Shipping Address..."
                  cols="30"
                  rows="10"
                />
                <label htmlFor="state">State:</label>
                <input
                  onChange={this.handleChange}
                  name="state"
                  type="text"
                  placeholder="State..."
                />
                <label htmlFor="zipCode">Zip-Code:</label>
                <input
                  onChange={this.handleChange}
                  name="zipCode"
                  type="text"
                  placeholder="Zip-code..."
                />
                <label htmlFor="country">Country:</label>
                <input
                  onChange={this.handleChange}
                  name="country"
                  type="text"
                  placeholder="Country..."
                />
                <label htmlFor="numberCard">Number Card:</label>
                <input
                  onChange={this.handleChange}
                  name="numberCard"
                  type="text"
                  placeholder="Number card..."
                />
                <label htmlFor="cardNameHolder">Card Name Holder:</label>
                <input
                  onChange={this.handleChange}
                  name="cardNameHolder"
                  type="text"
                  placeholder="Card Name Holder..."
                />
                <label htmlFor="numberExpDate">Expedition Date:</label>
                <input
                  onChange={this.handleChange}
                  name="numberExpDate"
                  type="text"
                  placeholder="Expedition Date..."
                />
                <label htmlFor="secCode">Security Code:</label>
                <input
                  onChange={this.handleChange}
                  name="secCode"
                  type="text"
                  placeholder="Security Code..."
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

export default connect(mapStateToProps, storeActions)(CheckOutPage);
