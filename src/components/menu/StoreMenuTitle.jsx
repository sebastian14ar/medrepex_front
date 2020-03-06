import React from "react";
import { Link } from "react-router-dom";
import "./styles/StoreMenuTitle.css";

import stickerSamples from "../../images/menufree.gif";

const StoreMenuTitle = props => {
  return (
    <React.Fragment>
      <div className="store-title-menu-container">
        <div className="title-menu-prod">
          <h2>{props.title}</h2>
          <img src={stickerSamples} alt="Free samples" />
        </div>
        <div className="buttons">
          <Link to="/cart">
            <button className="btn-gn btn-dark text-bolder">CART</button>
          </Link>
          <button className="btn-gn btn-dark text-bolder">SEARCH</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default StoreMenuTitle;
