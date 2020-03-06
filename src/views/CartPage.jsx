import React, { Component } from "react";
import SideMenu from "../components/menu/SideMenu";
import Footer from "../components/menu/Footer";
import SideMenuProducts from "../components/menu/SideMenuProducts";
import StoreTitle from "../components/menu/StoreTitle";
import CartTable from "../components/CartTable";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./styles/CartPage.css";
import logo from "../images/logo2.jpg";

import * as storeActions from "../actions/storeActions";
import storeReducers from "../reducers/storeReducers";

class CartPage extends Component {
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
            <SideMenuProducts />
          </div>
          <div className="main">
            <div className="store-title-container">
              <div className="title">
                <h2>Your Shopping Cart</h2>
              </div>
              <div className="buttons">
                <Link to="/checkout">
                  <button className="btn-gn btn-dark text-bolder">
                    Checkout
                  </button>
                </Link>
              </div>
              <br />
            </div>
            <div className="product-container">
              <CartTable />
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

export default connect(mapStateToProps, storeActions)(CartPage);
