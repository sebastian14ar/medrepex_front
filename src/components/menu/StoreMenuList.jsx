import React from "react";
import { Link } from "react-router-dom";

import "./styles/StoreMenuList.css";

const StoreMenuList = props => {
  const putItem = () =>
    props.category.types.map((item, key) => {
      return (
        <li key={item.id}>
          <Link to={`${item.path}/${props.type}`} className="link-li">
            {item.type}
          </Link>
        </li>
      );
    });

  return (
    <div className="list-container">
      <h4 className="list-subtitle">{props.category.title}</h4>
      <hr className="list-line" />
      <ul className="list-types">{putItem()}</ul>
    </div>
  );
};

export default StoreMenuList;
