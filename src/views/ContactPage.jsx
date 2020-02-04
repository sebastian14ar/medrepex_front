import React from "react";
import SideMenu from "../components/menu/SideMenu";

const ContactPage = () => {
  return (
    <React.Fragment>
      <div className="hero">
        <div className="navbar">
          <h1>NavBar</h1>
        </div>
        <div className="menu menu-section">
          <SideMenu />
        </div>
        <div className="main ">
          <h1>Main</h1>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactPage;
