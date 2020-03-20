import React, { Component } from "react";
import SideMenu from "../components/menu/SideMenu";
import Footer from "../components/menu/Footer";
import SideMenuProducts from "../components/menu/SideMenuProducts";
import Modal from "../components/Modal";

import oral from "../images/oral.jpg";
import cosmetic from "../images/cosmetic_1.jpg";
import surgical from "../images/surgical.jpg";
import reserch from "../images/research.jpg";
import logo from "../images/logo2.jpg";
import "./styles/HomePage.css";
import { Link } from "react-router-dom";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: true,
      text:
        "Our Website is temporarily closed for Maintenance.  Please call: 877-740-9133 or email: Sales@MedRepExpress.com to place an order or inquiry.  We apologize for the inconvenience."
    };
  }

  handleOpenModal = text => {
    this.setState({ modalIsOpen: true, text: text });
  };

  handleCloseModal = e => {
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
            <SideMenuProducts />
          </div>
          <div className="main">
            <div className="main-container">
              <h2 className="principal-title">Surgical Sutures</h2>
              {/* <h2 className="principal-title"></h2> */}
              <div className="images-container">
                <div className="images-row-container">
                  <Link to="/store/surgical">
                    <img src={surgical} alt="medical" />
                    <h5>General Surgery</h5>
                  </Link>
                  <Link to="/store/oral">
                    <img src={oral} alt="medical" />
                    <h5>Oral/Maxillofacial</h5>
                  </Link>
                </div>
                <div className="images-row-container">
                  <Link to="/store/cosmetic">
                    <img src={cosmetic} alt="medical" />
                    <h5>Plastic/Cosmetic</h5>
                  </Link>
                  <Link to="/store/vet">
                    <img src={reserch} alt="medical" />
                    <h5>Research</h5>
                  </Link>
                </div>
              </div>
            </div>
            <section className="text-container">
              <p>
                Surgical Sutures, Blades and Instruments are essential supplies
                for every Surgical Practice. With the many demands placed upon
                you and your practice every day, we aim to make the purchase of
                your Sutures, Blades and Instruments easy and readily available.
              </p>
              <p>
                As the "Master Distributor" for CP Medical Surgical Sutures, we
                are proud to provide the highest quality Sutures available at a
                price considerably below other "Name Brands". We have added two
                new low cost Sutures to our Product Line: equivalents to
                "Monocryl" and "Vicryl Rapide". Part of our continuing effort to
                save you money and time that can be devoted to the important
                work of your Practice.
              </p>
              <p>
                Please take a moment to review our product pages. Our Surgical
                Sutures Blades and Instruments come with the full Manufacturer's
                Warranty and our "Money Back" Guarantee. If you have any
                questions or comments, please click on "Customer Service" in the
                Menu and contact us by any one of the means listed there.
              </p>
              <p className="text-special">Patricia Brafford, MA, CMC</p>
              <p className="text-special">Manager - Customer Service</p>
              <p className="text-special">MedRep Express</p>
            </section>
            <Modal
              onClose={this.handleCloseModal}
              isOpen={this.state.modalIsOpen}
            >
              <p>{this.state.text}</p>
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

export default HomePage;
