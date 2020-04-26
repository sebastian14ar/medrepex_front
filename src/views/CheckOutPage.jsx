import React, { Component } from "react";
// import Footer from "../components/menu/Footer";
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
      paymentMode: false,
      shipCheck: false,
      text: "",
      form: {
        businessName: "",
        phone: "",
        email: "",
        address: "",
        state: "",
        zipCode: "",
        country: "",
        purchase_order: "",
        numberCard: "",
        cardNameHolder: "",
        numberExpDate: "",
        businessName_ship: "",
        address_ship: "",
        city_ship: "",
        state_ship: "",
        zipCode_ship: "",
        phone_ship: "",
        email_ship: "",
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

  handleCheck = () => {
    // let newValues = this.state.form.businessName ;
    const clones = JSON.parse(JSON.stringify(this.state.form));
    this.setState({
      shipCheck: !this.state.shipCheck,
    });
    // console.log(!this.state.shipCheck);

    !this.state.shipCheck
      ? this.setState({
          form: {
            ...this.state.form,
            businessName: clones.businessName_ship,
            address: clones.address_ship,
            city: clones.city_ship,
            state: clones.state_ship,
            zipCode: clones.zipCode_ship,
            phone: clones.phone_ship,
            email: clones.email_ship,
          },
        })
      : this.setState({
          form: {
            ...this.state.form,
            businessName: "",
            address: "",
            city: "",
            state: "",
            zipCode: "",
            phone: "",
            email: "",
          },
        });
  };
  handlePayment1 = (event) => {
    this.setState({
      paymentMode: false,
    });
    this.setState({
      form: {
        ...this.state.form,
        purchase_order: "",
      },
    });
  };
  handlePayment2 = (event) => {
    this.setState({
      paymentMode: true,
    });
    this.setState({
      form: {
        ...this.state.form,
        numberCard: "",
        cardNameHolder: "",
        numberExpDate: "",
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.form.businessName_ship) {
      this.handleOpenModal("The field Name is required");
      return;
    }
    if (!this.state.form.address_ship) {
      this.handleOpenModal("The field Address is required");
      return;
    }
    if (!this.state.form.city_ship) {
      this.handleOpenModal("The field City is required");
      return;
    }
    if (!this.state.form.state_ship) {
      this.handleOpenModal("The field State is required");
      return;
    }
    if (!this.state.form.zipCode_ship) {
      this.handleOpenModal("The field Zip-Code is required");
      return;
    }
    if (!this.state.form.phone_ship) {
      this.handleOpenModal("The field Phone is required");
      return;
    }

    if (!this.state.form.email_ship) {
      this.handleOpenModal("The field Email is required");
      return;
    }
    if (this.state.paymentMode) {
      if (!this.state.form.purchase_order) {
        this.handleOpenModal("The field Purchase Order is required");
        return;
      }
    } else {
      if (!this.state.form.cardNameHolder) {
        this.handleOpenModal("The field Card Name Holder is required");
        return;
      }
      if (!this.state.form.numberCard) {
        this.handleOpenModal("The field Number Card is required");
        return;
      }
      if (!this.state.form.numberExpDate) {
        this.handleOpenModal("The field Expedition Date is required");
        return;
      }
    }

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
            purchase_order: "",
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
                <h3>Ship To</h3>
                <label htmlFor="businessName_ship">Name or Practice:</label>
                <input
                  onChange={this.handleChange}
                  defaultValue={this.state.form.businessName_ship}
                  name="businessName_ship"
                  type="text"
                  placeholder="Businness Name..."
                />
                <label htmlFor="address">Address</label>
                <textarea
                  name="address_ship"
                  onChange={this.handleChange}
                  defaultValue={this.state.form.address_ship}
                  placeholder="Shipping Address..."
                  cols="30"
                  rows="3"
                />
                <label htmlFor="city_ship">City:</label>
                <input
                  onChange={this.handleChange}
                  defaultValue={this.state.form.city_ship}
                  name="city_ship"
                  type="text"
                  placeholder="City..."
                />
                <label htmlFor="state_ship">State:</label>
                <input
                  onChange={this.handleChange}
                  defaultValue={this.state.form.state_ship}
                  name="state_ship"
                  type="text"
                  placeholder="State..."
                />
                <label htmlFor="zipCode_ship">Zip-Code:</label>
                <input
                  onChange={this.handleChange}
                  defaultValue={this.state.form.zipCode_ship}
                  name="zipCode_ship"
                  type="text"
                  placeholder="Zip-code..."
                />

                <label htmlFor="phone_ship">Phone:</label>
                <input
                  onChange={this.handleChange}
                  defaultValue={this.state.form.phone_ship}
                  name="phone_ship"
                  type="text"
                  placeholder="Phone..."
                />

                <label htmlFor="email_ship">Email:</label>
                <input
                  onChange={this.handleChange}
                  defaultValue={this.state.form.email_ship}
                  name="email_ship"
                  type="email"
                  placeholder="Email..."
                />

                <h3>Payment</h3>
                <div className="option-payment">
                  <button
                    onClick={this.handlePayment1}
                    className="btn-check btn-primary"
                  >
                    Option 1 <br />
                    <span className="special-text-btn">Credit Card Info</span>
                  </button>
                  <button
                    onClick={this.handlePayment2}
                    className="btn-check btn-primary"
                  >
                    Option 2<br />
                    <span className="special-text-btn">
                      Only if pre-approved
                    </span>
                  </button>
                </div>
                {!this.state.paymentMode ? (
                  <React.Fragment>
                    {/* <h3>Option 1: Credit Card Information</h3> */}
                    <label htmlFor="cardNameHolder">Card Name Holder:</label>
                    <input
                      onChange={this.handleChange}
                      defaultValue={this.state.form.cardNameHolder}
                      name="cardNameHolder"
                      type="text"
                      placeholder="Card Name Holder..."
                    />
                    <label htmlFor="numberCard">Card Number:</label>
                    <input
                      onChange={this.handleChange}
                      defaultValue={this.state.form.numberCard}
                      name="numberCard"
                      type="text"
                      placeholder="Card number..."
                    />
                    <label htmlFor="numberExpDate">Expiration Date:</label>
                    <input
                      onChange={this.handleChange}
                      defaultValue={this.state.form.numberExpDate}
                      name="numberExpDate"
                      type="text"
                      placeholder="Expiration Date..."
                    />
                  </React.Fragment>
                ) : null}

                {this.state.paymentMode ? (
                  <React.Fragment>
                    <h3>Invoice Net 30 Day Payment Terms</h3>
                    {/* <label htmlFor="purchase_order">Purchase order:</label> */}
                    <input
                      disabled={this.paymentMode}
                      onChange={this.handleChange}
                      value={this.state.form.purchase_order}
                      name="purchase_order"
                      type="number"
                      placeholder="Purchase order #..."
                    />
                  </React.Fragment>
                ) : null}

                <button
                  onClick={this.handleSubmit}
                  className="btn-final btn-final-primary"
                >
                  Place Order
                </button>
              </div>
              <div className="form-ck">
                <h3>
                  Bill To{" "}
                  <label className="special-label">
                    <input
                      name="ship_check"
                      type="checkbox"
                      onChange={this.handleCheck}
                      checked={this.state.shipCheck}
                    />
                    <small>Check if same as Ship To </small>
                  </label>
                </h3>
                {/* <label>
                  <input
                    name="ship_check"
                    type="checkbox"
                    onChange={this.handleCheck}
                    checked={this.state.shipCheck}
                  />{" "}
                  Check if same as Ship to{" "}
                </label> */}
                <label htmlFor="businessName">Name or Practice:</label>
                <input
                  onChange={this.handleChange}
                  defaultValue={this.state.form.businessName}
                  name="businessName"
                  type="text"
                  placeholder="Businness Name..."
                />
                <label htmlFor="address">Address</label>
                <textarea
                  name="address"
                  onChange={this.handleChange}
                  defaultValue={this.state.form.address}
                  placeholder="Shipping Address..."
                  cols="30"
                  rows="3"
                />
                <label htmlFor="city">City :</label>
                <input
                  onChange={this.handleChange}
                  defaultValue={this.state.form.city}
                  name="city"
                  type="text"
                  placeholder="City..."
                />

                <label htmlFor="state">State:</label>
                <input
                  onChange={this.handleChange}
                  defaultValue={this.state.form.state}
                  name="state"
                  type="text"
                  placeholder="State..."
                />
                <label htmlFor="zipCode">Zip-Code:</label>
                <input
                  onChange={this.handleChange}
                  defaultValue={this.state.form.zipCode}
                  name="zipCode"
                  type="text"
                  placeholder="Zip-code..."
                />

                <label htmlFor="phone">Phone:</label>
                <input
                  onChange={this.handleChange}
                  defaultValue={this.state.form.phone}
                  name="phone"
                  type="text"
                  placeholder="Phone..."
                />

                <label htmlFor="email">Email:</label>
                <input
                  onChange={this.handleChange}
                  defaultValue={this.state.form.email}
                  name="email"
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

          {/* <div className="footer-page">
            <Footer />
          </div> */}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (reducers) => {
  return storeReducers;
};

export default connect(mapStateToProps, storeActions)(CheckOutPage);
