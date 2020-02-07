import React from "react";
import SideMenu from "../components/menu/SideMenu";
import SideMenuProducts from "../components/menu/SideMenuProducts";

import medicalImage from "../images/img-1.jpg";
import "./styles/HomePage.css";

const HomePage = () => {
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
          <div className="main-container">
            <h2 className="principal-title">Shop by Category</h2>
            <div className="images-container">
              <div className="images-row-container">
                <img src={medicalImage} alt="medical" />
                <img src={medicalImage} alt="medical" />
              </div>
              <div className="images-row-container">
                <img src={medicalImage} alt="medical" />
                <img src={medicalImage} alt="medical" />
              </div>
            </div>
          </div>
          <section className="text-container">
            <p>
              Surgical Sutures, Antibacterial Wipes & other Medical Disposable
              Supplies are an essential part of the everyday important business
              of providing Quality Healthcare and promoting Safety. With the
              many demands placed upon you and your practice every day, we aim
              to make the purchase of your Sutures, Antibacterial Wipes and
              other Supplies quick, easy and reliable.
            </p>
            <p>
              We feature three leading Producers of Surgical Sutures with
              equivalent quality at half the cost of "Name Brand" Sutures. In
              addition to Sutures, we have a complete line of the highest
              quality Surgical Blades & Surgical Gloves. We are constantly
              researching the marketplace to find new quality, low cost
              alternative Disposable Surgical Supplies. We have added two new
              low cost Sutures to our Product Line: equivalents to "Monocryl"
              and "Vicryl Rapide". Part of our continuing effort to save you
              money and time that can be devoted to the important work of your
              Practice.
            </p>
            <p>
              Please take a moment to review our product pages. Our Surgical
              Sutures, Antibacterial Wipes and other Supplies come with the full
              Manufacturer's Warranty and our "Money Back" Guarantee. If you
              have any questions or comments, please click on "Customer Service"
              in the Menu and contact us by any one of the means listed there.
            </p>
            <p className="text-special">
              Patricia Brafford, MA, CMC MedRep Express
            </p>
            <p className="text-special">Manager - Customer Service</p>
            <p className="text-special">MedRep Express</p>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
