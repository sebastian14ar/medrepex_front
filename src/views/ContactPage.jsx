import React, { Component } from "react";
import Footer from "../components/menu/Footer";
import SideMenu from "../components/menu/SideMenu";

import "./styles/ContactPage.css";
import logo from "../images/logo2.jpg";
import { connect } from "react-redux";

import * as storeActions from "../actions/storeActions";
import storeReducers from "../reducers/storeReducers";

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: "",
        email: "",
        subject: "",
        message: ""
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
    this.props.enviarContacto(this.state.form);
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
            <div className="main-container">
              <h2 className="principal-title">Contact Us</h2>
              <section className="text-container-contact">
                <p className="text-special">Tool Free Phone: 877-740-9133</p>
                <p className="text-special">Fax: 928-445-6267</p>
                <p className="text-special">E-Mail: Sales@MedRepExpress.com</p>
              </section>
              <div className="form">
                <label htmlFor="name">Your Name:</label>
                <input
                  name="name"
                  onChange={this.handleChange}
                  value={this.state.form.name}
                  type="text"
                  placeholder="Your Name..."
                />
                <label htmlFor="email">Your Email Address:</label>
                <input
                  name="email"
                  onChange={this.handleChange}
                  value={this.state.form.email}
                  type="email"
                  placeholder="Your Email..."
                />
                <label htmlFor="subject">Subject:</label>
                <input
                  name="subject"
                  onChange={this.handleChange}
                  value={this.state.form.subject}
                  type="text"
                  placeholder="Subject..."
                />
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  onChange={this.handleChange}
                  value={this.state.form.message}
                  placeholder="Write your message"
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

export default connect(mapStateToProps, storeActions)(ContactPage);
