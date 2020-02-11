import React, { Component } from "react";
import SideMenu from "../components/menu/SideMenu";
import Footer from "../components/menu/Footer";
import SideMenuProducts from "../components/menu/SideMenuProducts";
import StoreTitle from "../components/menu/StoreTitle";
import StoreMenu from "../components/menu/StoreMenu";

import medicalImage from "../images/img-1.jpg";
import "./styles/StoreSurgicalPage.css";

const PAGE = {
  type: "surgical",
  title: "Surgical Supplies"
};

class StoreSurgicalPage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="hero">
          <div className="navbar">
            <h1>NavBar</h1>
          </div>
          <div className="menu menu-section">
            <SideMenu />
            <SideMenuProducts />
          </div>
          <div className="main">
            <StoreTitle title={PAGE.title} />
            <StoreMenu />
          </div>
          <div className="footer-page">
            <Footer />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default StoreSurgicalPage;
