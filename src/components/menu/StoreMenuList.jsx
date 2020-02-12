import React from "react";

import "./styles/StoreMenuList.css";

const StoreMenuList = props => {
  const putItem = () =>
    props.category.types.map((item, key) => <li key={item.id}>{item.type}</li>);

  return (
    <div className="list-container">
      <h4 className="list-subtitle">{props.category.title}</h4>
      <hr className="list-line" />
      <ul className="list-types">{putItem()}</ul>
    </div>
  );
};

export default StoreMenuList;
