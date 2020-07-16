import React from "react";
import { Link } from "react-router-dom";
import "./styles/StoreMenuTitle.css";

const StoreMenuTitleInstruments = (props) => {
  console.log(props.paramType);

  return (
    <React.Fragment>
      <div className="store-title-menu-container">
        <div className="title-menu-prod-inst">
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
      </div>
    </React.Fragment>
  );
};

export default StoreMenuTitleInstruments;
