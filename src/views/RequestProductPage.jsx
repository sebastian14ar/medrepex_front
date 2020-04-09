import React, { Component } from "react";
import Footer from "../components/menu/Footer";
import SideMenu from "../components/menu/SideMenu";
import Modal from "../components/Modal";

import "./styles/RequestSamplesPage.css";
import logo from "../images/logo2.jpg";
import { connect } from "react-redux";

import * as storeActions from "../actions/storeActions";
import storeReducers from "../reducers/storeReducers";

class RequestProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      text: "",
      form: {
        businessName: "",
        name: "",
        productInq: "",
        phone: "",
        fax: "",
        email: "",
        shippingAddress: "",
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
      .enviarInformacion(this.state.form)
      .then((res) => {
        this.handleOpenModal(res);
      })
      .catch((rej) => {
        this.handleOpenModal("Error");
      })
      .finally(() => {
        this.setState({
          form: {
            businessName: "",
            name: "",
            productInq: "",
            phone: "",
            fax: "",
            email: "",
            shippingAddress: "",
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
            <div className="main-container-request-sample">
              <h2 className="principal-title">Request Samples</h2>

              <section className="text-container-request">
                <p>
                  We would be happy to provide additional information about any
                  of our products. Just call us Toll Free at 877-740-9133 or
                  complete the Email request below:
                </p>
              </section>
              <div className="form">
                <label htmlFor="businessName">
                  Practice, Clinic or Business Name:
                </label>
                <input
                  onChange={this.handleChange}
                  value={this.state.form.businessName}
                  name="businessName"
                  type="text"
                  placeholder="Name..."
                />
                <label htmlFor="name">Requestor’s Name:</label>
                <input
                  onChange={this.handleChange}
                  value={this.state.form.name}
                  name="name"
                  type="text"
                  placeholder="Requestor’s Name..."
                />
                <label htmlFor="productInq">Product Inquiry: </label>
                <textarea
                  name="productInq"
                  onChange={this.handleChange}
                  value={this.state.form.productInq}
                  placeholder="Product Application..."
                  cols="30"
                  rows="5"
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
                <label htmlFor="shippingAddress">Shipping Address</label>
                <textarea
                  name="shippingAddress"
                  onChange={this.handleChange}
                  value={this.state.form.shippingAddress}
                  placeholder="Shipping Address..."
                  cols="30"
                  rows="5"
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

const mapStateToProps = (reducers) => {
  return storeReducers;
};

export default connect(mapStateToProps, storeActions)(RequestProductPage);
