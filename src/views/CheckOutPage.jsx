import React, { Component } from "react";
import Footer from "../components/menu/Footer";
import SideMenu from "../components/menu/SideMenu";

import "./styles/RequestSamplesPage.css";
import logo from "../images/logo2.jpg";
import { connect } from "react-redux";
import Modal from "../components/Modal";

import * as storeActions from "../actions/storeActions";
import storeReducers from "../reducers/storeReducers";

class CheckOutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      text: "",
      form: {
        businessName: "",
        firstName: "",
        lastName: "",
        phone: "",
        fax: "",
        email: "",
        address: "",
        altAddress: "",
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
    this.props
      .enviarCompra({
        ...this.state.form
      })
      .then(res => {
        this.handleOpenModal(res);
        this.props.eliminarTodo();
      })
      .catch(rej => {
        this.handleOpenModal("Error");
      })
      .finally(() => {
        this.setState({
          form: {
            businessName: "",
            firstName: "",
            lastName: "",
            phone: "",
            fax: "",
            email: "",
            address: "",
            altAddress: "",
            state: "",
            zipCode: "",
            country: "",
            numberCard: "",
            cardNameHolder: "",
            numberExpDate: "",
            secCode: ""
          }
        });
      });
  };

  handleOpenModal = text => {
    this.setState({ modalIsOpen: true, text: text });
  };

  handleCloseModal = e => {
    this.setState({ modalIsOpen: false, text: "" });
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
                  value={this.state.form.businessName}
                  name="businessName"
                  type="text"
                  placeholder="Businness Name..."
                />
                <label htmlFor="firstName">First Name:</label>
                <input
                  onChange={this.handleChange}
                  value={this.state.form.firstName}
                  name="firstName"
                  type="text"
                  placeholder="First Name..."
                />
                <label htmlFor="lastName">Last Name:</label>
                <input
                  onChange={this.handleChange}
                  value={this.state.form.lastName}
                  name="lastName"
                  type="text"
                  placeholder="Last Name..."
                />
                <label htmlFor="phone">Phone:</label>
                <input
                  onChange={this.handleChange}
                  value={this.state.form.phone}
                  name="phone"
                  type="text"
                  placeholder="Phone..."
                />
                <label htmlFor="fax">Fax:</label>
                <input
                  onChange={this.handleChange}
                  value={this.state.form.fax}
                  name="fax"
                  type="text"
                  placeholder="Fax..."
                />
                <label htmlFor="email">Email:</label>
                <input
                  onChange={this.handleChange}
                  value={this.state.form.email}
                  name="email"
                  type="email"
                  placeholder="Email..."
                />
                <label htmlFor="address">Shipping Address</label>
                <textarea
                  name="address"
                  onChange={this.handleChange}
                  value={this.state.form.address}
                  placeholder="Shipping Address..."
                  cols="30"
                  rows="10"
                />
                <label htmlFor="altAddress">Alternative Shipping Address</label>
                <textarea
                  name="altAddress"
                  onChange={this.handleChange}
                  value={this.state.form.altAddress}
                  placeholder="Alternative Shipping Address..."
                  cols="30"
                  rows="10"
                />
                <label htmlFor="state">State:</label>
                <input
                  onChange={this.handleChange}
                  value={this.state.form.state}
                  name="state"
                  type="text"
                  placeholder="State..."
                />
                <label htmlFor="zipCode">Zip-Code:</label>
                <input
                  onChange={this.handleChange}
                  value={this.state.form.zipCode}
                  name="zipCode"
                  type="text"
                  placeholder="Zip-code..."
                />
                <label htmlFor="country">Country:</label>
                <input
                  onChange={this.handleChange}
                  value={this.state.form.country}
                  name="country"
                  type="text"
                  placeholder="Country..."
                />
                <label htmlFor="numberCard">Number Card:</label>
                <input
                  onChange={this.handleChange}
                  value={this.state.form.numberCard}
                  name="numberCard"
                  type="text"
                  placeholder="Number card..."
                />
                <label htmlFor="cardNameHolder">Card Name Holder:</label>
                <input
                  onChange={this.handleChange}
                  value={this.state.form.cardNameHolder}
                  name="cardNameHolder"
                  type="text"
                  placeholder="Card Name Holder..."
                />
                <label htmlFor="numberExpDate">Expedition Date:</label>
                <input
                  onChange={this.handleChange}
                  value={this.state.form.numberExpDate}
                  name="numberExpDate"
                  type="text"
                  placeholder="Expedition Date..."
                />
                <label htmlFor="secCode">Security Code:</label>
                <input
                  onChange={this.handleChange}
                  value={this.state.form.secCode}
                  name="secCode"
                  type="text"
                  placeholder="Security Code..."
                />
                <button onClick={this.handleSubmit} className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
            <Modal
              onClose={this.handleCloseModal}
              isOpen={this.state.modalIsOpen}
            >
              <h1>{this.state.text}</h1>
            </Modal>
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
