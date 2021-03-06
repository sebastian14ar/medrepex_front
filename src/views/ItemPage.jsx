import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import SideMenu from "../components/menu/SideMenu";
// import Footer from "../components/menu/Footer";
import SideMenuProducts from "../components/menu/SideMenuProducts";

import "./styles/ItemPage.css";
import Alert from "../components/Alert";

import * as storeActions from "../actions/storeActions";
import storeReducers from "../reducers/storeReducers";

import logo from "../images/logo2.jpg";

class ItemPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cant: 1,
      alertIsOpen: false,
    };
  }

  handleChange(e) {
    let newCant = e.target.value.replace(/[^\d]/g, "");

    this.setState({ cant: newCant });
  }

  handleClick(e, item) {
    if (this.state.cant) {
      this.props.agregar(item, this.state.cant);
      this.handleOpenAlert();
      setTimeout(this.handleCloseAlert, 1000);
    }
  }
  handleOpenAlert = () => {
    this.setState({ alertIsOpen: true });
  };

  handleCloseAlert = () => {
    this.setState({ alertIsOpen: false });
  };

  render() {
    console.log(this.props.location.state.item);

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
            <div className="cart-section">
              <Link to="/cart">
                <button className="btn-gn btn-dark text-bolder">CART</button>
              </Link>
            </div>
            <h1>CODE: {this.props.location.state.item.code}</h1>
            {this.props.location.state.item.imageItem ? (
              <div>
                <img
                  src={this.props.location.state.item.imageItem}
                  alt={this.props.location.state.item.code}
                />
              </div>
            ) : null}
            <div>
              <h4>
                Description: {this.props.location.state.item.description}{" "}
                {this.props.location.state.item.category}
              </h4>
              <h5>Size: {this.props.location.state.item.size}</h5>
              <h4>{}</h4>
              <h4>Price: {this.props.location.state.item.price}</h4>
            </div>
            <div className="form-item">
              <label htmlFor="">Quantity</label>
              <input
                onChange={(e) => this.handleChange(e)}
                type="number"
                value={this.state.cant}
                placeholder="1"
              />
              <button
                onClick={(e) =>
                  this.handleClick(e, this.props.location.state.item)
                }
                className="btn btn-primary"
              >
                Add
              </button>
            </div>
          </div>
          <Alert
            onClose={this.handleCloseAlert}
            isOpen={this.state.alertIsOpen}
          />
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

export default connect(mapStateToProps, storeActions)(ItemPage);
