import React, { Component } from "react";
import SideMenu from "../components/menu/SideMenu";
// import Footer from "../components/menu/Footer";
import ProductTable from "../components/CardiacTable";
import SideMenuProducts from "../components/menu/SideMenuProducts";
import StoreMenuTitle from "../components/menu/StoreMenuTitle";

import "./styles/ProductsPage.css";
import logo from "../images/logo2.jpg";

// images
import SteelSut from "../images/store/cardiac/steelsut.gif";

const medicalItems = [
  {
    type: "cardiac",
    title: "Cardiac Sutures",
    subtype: "suturescardiac",
    items: [
      {
        id: "5",
        title: `"Surgical Steel" is Stainless Steel Suture composed of 316L stainless steel conforming to ASTM Standard F138 Grade 2 stainless steel bar and wire for surgical implants.`,
        imageSection: SteelSut,
        list: [
          {
            subtitle: `"Surgical Steel" suture is indicated for use in abdominal wound closure, intestinal anastomosis, hernia repair, sternal closure, and certain orthopedic procedures (cerclage or tendon repair)`,
          },
          {
            subtitle: `"Surgical Steel" suture meets all requirements established by the United States Pharmacopeia (USP) and European Pharmacopeia (EP) for nonabsorbable surgical sutures`,
          },
        ],
        codes: [
          {
            code: "ST435",
            ethicon_code: "M435G",
            description: "STEEL 5",
            size: "5",
            needle: "NV-56",
            length: "4-30 inch",

            price: 368.0,
          },

          {
            code: "ST649",
            ethicon_code: "M649G",
            description: "STEEL 6",
            size: "6",
            needle: "NV-40",
            length: "4-18 inch",

            price: 451.0,
          },

          {
            code: "ST650",
            ethicon_code: "M650G",
            description: "STEEL 5",
            size: "5",
            needle: "NV-40",
            length: "4-18 inch",

            price: 420.0,
          },

          {
            code: "ST653",
            ethicon_code: "M653G",
            description: "STEEL 5",
            size: "5",
            needle: "NCCS",
            length: "4-18 inch",
            price: 405.0,
          },

          {
            code: "ST654",
            ethicon_code: "M654G",
            description: "STEEL 6",
            size: "6",
            needle: "NCCS",
            length: "4-18 inch",
            price: 405.0,
          },

          {
            code: "ST655",
            ethicon_code: "M655G",
            description: "STEEL 7",
            size: "7",
            needle: "NCCS",
            length: "4-18 inch",
            price: 420.0,
          },

          {
            code: "ST657",
            ethicon_code: "M657G",
            description: "STEEL 5",
            size: "5",
            needle: "NCCS",
            length: "2-18 inch",
            price: 211.0,
          },
        ],
      },
    ],
  },
];

class SteelPage extends Component {
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
            <StoreMenuTitle title={medicalItems[0].title} />
            <div className="product-container">
              <ProductTable
                type={medicalItems[0].type}
                items={medicalItems[0].items}
              />
            </div>
          </div>
          {/* <div className="footer-page">
            <Footer />
          </div> */}
        </div>
      </React.Fragment>
    );
  }
}

export default SteelPage;
