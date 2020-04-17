import React from "react";
import { Link } from "react-router-dom";

import "./styles/StoreTitle.css";

const StoreTitle = (props) => {
  return (
    <React.Fragment>
      <div className="store-title-container">
        <div className="title">
          <h2>{props.title}</h2>
        </div>
        <div className="buttons">
          <Link to="/cart">
            <button className="btn-gn btn-dark text-bolder">CART</button>
          </Link>
          <Link to="/search">
            <button className="btn-gn btn-dark text-bolder">SEARCH</button>
          </Link>
        </div>
        <h4>
          SHOP by selecting a Product Category below for EASY ON-LINE ORDERING
        </h4>
      </div>
    </React.Fragment>
  );
};

export default StoreTitle;
