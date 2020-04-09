import React, { Component } from "react";
import Footer from "../components/menu/Footer";
import SideMenu from "../components/menu/SideMenu";

import "./styles/CheckOutPage.css";
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
        phone: "",
        email: "",
        address: "",
        state: "",
        zipCode: "",
        country: "",
        numberCard: "",
        cardNameHolder: "",
        numberExpDate: "",
        items: this.props.storeReducers.storeItems,
      },
    };
  }

  handleChange = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props
      .enviarCompra({
        ...this.state.form,
      })
      .then((res) => {
        this.handleOpenModal(res);
        this.props.eliminarTodo();
      })
      .catch((rej) => {
        this.handleOpenModal("Error");
      })
      .finally(() => {
        this.setState({
          form: {
            //Bill
            businessName: "",
            address: "",
            city: "",
            state: "",
            zipCode: "",
            phone: "",
            email: "",
            //PAYMENT
            cardNameHolder: "",
            numberCard: "",
            numberExpDate: "",
            // SHIP
            businessName_ship: "",
            address_ship: "",
            city_ship: "",
            state_ship: "",
            zipCode_ship: "",
            phone_ship: "",
            email_ship: "",
          },
        });
      });
  };

  handleOpenModal = (text) => {
    this.setState({ modalIsOpen: true, text: text });
  };

  handleCloseModal = (e) => {
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
            <h2 className="principal-title">Checkout</h2>
            <div className="main-container-request">
              <div className="form-ck">
                <h3>Bill To</h3>
                <label htmlFor="businessName">Name or Practice:</label>
                <input
                  onChange={this.handleChange}
                  value={this.state.form.businessName}
                  name="businessName"
                  type="text"
                  placeholder="Businness Name..."
                />
                <label htmlFor="address">Address</label>
                <textarea
                  name="address"
                  onChange={this.handleChange}
                  value={this.state.form.address}
                  placeholder="Shipping Address..."
                  cols="30"
                  rows="6"
                />
                <label htmlFor="city">City :</label>
                <input
                  onChange={this.handleChange}
                  value={this.state.form.city}
                  name="city"
                  type="text"
                  placeholder="City..."
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

                <label htmlFor="phone">Phone:</label>
                <input
                  onChange={this.handleChange}
                  value={this.state.form.phone}
                  name="phone"
                  type="text"
                  placeholder="Phone..."
                />

                <label htmlFor="email">Email:</label>
                <input
                  onChange={this.handleChange}
                  value={this.state.form.email}
                  name="email"
                  type="email"
                  placeholder="Email..."
                />

                <h3>Payment</h3>
                <h3>Option 1: Credit Card Information</h3>

                <label htmlFor="cardNameHolder">Card Name Holder:</label>
                <input
                  onChange={this.handleChange}
                  value={this.state.form.cardNameHolder}
                  name="cardNameHolder"
                  type="text"
                  placeholder="Card Name Holder..."
                />
                <label htmlFor="numberCard">Number Card:</label>
                <input
                  onChange={this.handleChange}
                  value={this.state.form.numberCard}
                  name="numberCard"
                  type="text"
                  placeholder="Number card..."
                />
                <label htmlFor="numberExpDate">Expedition Date:</label>
                <input
                  onChange={this.handleChange}
                  value={this.state.form.numberExpDate}
                  name="numberExpDate"
                  type="text"
                  placeholder="Expedition Date..."
                />

                <button
                  onClick={this.handleSubmit}
                  className="btn-final btn-final-primary"
                >
                  Place Purchase Order
                </button>
              </div>
              <div className="form-ck">
                <h3>Ship To</h3>
                <label htmlFor="businessName_ship">Name or Practice:</label>
                <input
                  onChange={this.handleChange}
                  value={this.state.form.businessName_ship}
                  name="businessName_ship"
                  type="text"
                  placeholder="Businness Name..."
                />
                <label htmlFor="address">Address</label>
                <textarea
                  name="address_ship"
                  onChange={this.handleChange}
                  value={this.state.form.address_ship}
                  placeholder="Shipping Address..."
                  cols="30"
                  rows="6"
                />
                <label htmlFor="city_ship">City:</label>
                <input
                  onChange={this.handleChange}
                  value={this.state.form.city_ship}
                  name="city_ship"
                  type="text"
                  placeholder="City..."
                />
                <label htmlFor="state_ship">State:</label>
                <input
                  onChange={this.handleChange}
                  value={this.state.form.state_ship}
                  name="state_ship"
                  type="text"
                  placeholder="State..."
                />
                <label htmlFor="zipCode_ship">Zip-Code:</label>
                <input
                  onChange={this.handleChange}
                  value={this.state.form.zipCode_ship}
                  name="zipCode_ship"
                  type="text"
                  placeholder="Zip-code..."
                />

                <label htmlFor="phone_ship">Phone:</label>
                <input
                  onChange={this.handleChange}
                  value={this.state.form.phone_ship}
                  name="phone_ship"
                  type="text"
                  placeholder="Phone..."
                />

                <label htmlFor="email_ship">Email:</label>
                <input
                  onChange={this.handleChange}
                  value={this.state.form.email_ship}
                  name="email_ship"
                  type="email"
                  placeholder="Email..."
                />
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

const mapStateToProps = (reducers) => {
  return storeReducers;
};

export default connect(mapStateToProps, storeActions)(CheckOutPage);
