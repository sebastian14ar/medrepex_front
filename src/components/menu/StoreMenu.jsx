import React from "react";

import "./styles/StoreMenu.css";

const StoreMenu = props => {
  return (
    <React.Fragment>
      <div className="store-menu-container">
        <div className="table-section-1">
          <div className="section-1">
            <h3>SUTURES: Select Type to Compare</h3>
          </div>
          <div className="section-1">
            <h3>High Quality German Stainless Steel</h3>
          </div>
        </div>
        <div className="table-section-2">
          <div className="section-2">
            <h3>Other Supplies:</h3>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default StoreMenu;
