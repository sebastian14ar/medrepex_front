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
        "businees-name": "",
        "first-name": "",
        "last-name": "",
        phone: "",
        fax: "",
        email: "",
        address: "",
        "alt-address": "",
        state: "",
        "zip-code": "",
        country: "",
        "number-card": "",
        "card-name-holder": "",
        "number-exp-date": "",
        "sec-code": ""
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
    this.props.enviarContacto({
      ...this.state.form,
      items: this.props.storeReducers.storeItems
    });
    console.log({
      ...this.state.form,
      items: this.props.storeReducers.storeItems
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
                <label htmlFor="businees-name">
                  Practice, Clinic or Business Name:
                </label>
                <input
                  onChange={this.handleChange}
                  name="businees-name"
                  type="text"
                  placeholder="Businness Name..."
                />
                <label htmlFor="first-name">First Name:</label>
                <input
                  onChange={this.handleChange}
                  name="first-name"
                  type="text"
                  placeholder="First Name..."
                />
                <label htmlFor="last-name">Last Name:</label>
                <input
                  onChange={this.handleChange}
                  name="last-name"
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
                <label htmlFor="alt-address">
                  Alternative Shipping Address
                </label>
                <textarea
                  name="alt-address"
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
                <label htmlFor="zip-code">Zip-Code:</label>
                <input
                  onChange={this.handleChange}
                  name="zip-code"
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
                <label htmlFor="number-card">Number Card:</label>
                <input
                  onChange={this.handleChange}
                  name="number-card"
                  type="text"
                  placeholder="Number card..."
                />
                <label htmlFor="card-name-holder">Card Name Holder:</label>
                <input
                  onChange={this.handleChange}
                  name="card-name-holder"
                  type="text"
                  placeholder="Card Name Holder..."
                />
                <label htmlFor="number-exp-date">Expedition Date:</label>
                <input
                  onChange={this.handleChange}
                  name="number-exp-date"
                  type="text"
                  placeholder="Expedition Date..."
                />
                <label htmlFor="sec-code">Security Code:</label>
                <input
                  onChange={this.handleChange}
                  name="sec-code"
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
