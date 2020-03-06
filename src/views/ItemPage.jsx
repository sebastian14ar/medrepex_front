import React, { Component } from "react";
import { connect } from "react-redux";

import SideMenu from "../components/menu/SideMenu";
import Footer from "../components/menu/Footer";
import SideMenuProducts from "../components/menu/SideMenuProducts";

import "./styles/ItemPage.css";

import * as storeActions from "../actions/storeActions";
import storeReducers from "../reducers/storeReducers";

import logo from "../images/logo2.jpg";

class ItemPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cant: 1
    };
  }

  handleChange(e) {
    this.setState({ cant: e.target.value });
  }

  handleClick(e, item) {
    this.props.agregar(item, this.state.cant);
  }

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
            <h1>CODE: {this.props.location.state.item.code}</h1>
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
                onChange={e => this.handleChange(e)}
                type="number"
                value={this.state.cant}
                placeholder="1"
              />
              <button
                onClick={e =>
                  this.handleClick(e, this.props.location.state.item)
                }
                className="btn btn-primary"
              >
                Add
              </button>
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

export default connect(mapStateToProps, storeActions)(ItemPage);
