import React, { Component } from "react";
import SideMenu from "../components/menu/SideMenu";
import Footer from "../components/menu/Footer";
import SideMenuProducts from "../components/menu/SideMenuProducts";
import StoreTitle from "../components/menu/StoreTitle";
import StoreMenu from "../components/menu/StoreMenu";

import "./styles/StoreSurgicalPage.css";
import logo from "../images/logo2.jpg";

const page = [
  {
    id: 1,
    type: "surgical",
    title: "Surgical Supplies"
  },
  {
    id: 2,
    type: "oral",
    title: "Oral/Maxilofacial"
  },
  {
    id: 3,
    type: "cosmetic",
    title: "Plastic/Cosmetic/Dermatology"
  },
  {
    id: 4,
    type: "vet",
    title: "Research/Veterinary"
  }
];

class StoreSurgicalPage extends Component {
  render() {
    const paramType = this.props.match.params.type;
    const actualPage = page.filter(ap =>
      ap.type.toLowerCase().includes(paramType.toLowerCase())
    );

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
            <StoreTitle title={actualPage[0].title} />
            <StoreMenu typePage={actualPage[0].type} />
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
