import React, { Component } from "react";
import SideMenu from "../components/menu/SideMenu";
import Footer from "../components/menu/Footer";
import SkinTable from "../components/SkinTable";
import SideMenuProducts from "../components/menu/SideMenuProducts";
import StoreMenuTitle from "../components/menu/StoreMenuTitle";

import "./styles/ProductsPage.css";
import logo from "../images/logo2.jpg";

// images
import SkinStapler from "../images/store/skin-stapler/skinstapler.jpg";
import StapleRemover from "../images/store/skin-stapler/stapleremover.jpg";

const medicalItems = [
  {
    type: "skin",
    title: "Skin Stapler",
    subtype: "suturesskin",
    items: [
      {
        id: "1",
        title: `Lever Action Disposable Skin Stapler...
        the most popular design on the market.`,
        imageSection: SkinStapler,
        list: [
          { subtitle: `Sterile Packaging` },
          { subtitle: `Short Trigger Stroke & Comfortable Handle` },
          {
            subtitle: `Angled Head allows visibility of incision to ensure precise staple placement`,
          },
          {
            subtitle: `Arrow Indicator to help with accurate alignment and Staple Count Indicator`,
          },
          {
            subtitle: `Quality Construction; Simple Design; Consistent Performance`,
          },
        ],
        codes: [
          {
            code: "OSS-35W",
            ethicon_code: "M657G",
            description: `Lever Action Disposable Skin Stapler with 35 WIDE Staples
            (7.2mm x 4.3mm after closure)`,
            price: 11.9,
          },
        ],
      },
      {
        id: "2",
        title: `Disposable Skin Staple Remover – Tweezer Style`,
        imageSection: StapleRemover,
        list: [
          {
            subtitle: `Removes staples by placing the tips of the remover under each staple for reliable, consistent performance`,
          },
          { subtitle: `Removes all brands of surgical staples` },
          { subtitle: `Fast and easy removal saves time` },
        ],
        codes: [
          {
            code: "S-REM",
            description: `Disposable Skin Staple Remover – Tweezer Style`,
            price: 4.95,
          },
        ],
      },
    ],
  },
];

class SkinPage extends Component {
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
              <SkinTable
                type={medicalItems[0].type}
                items={medicalItems[0].items}
              />
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

export default SkinPage;
