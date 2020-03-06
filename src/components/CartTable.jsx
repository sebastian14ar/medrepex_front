import React, { Component } from "react";
import { connect } from "react-redux";
import menos from "../images/icons/menos.png";
import mas from "../images/icons/mas.png";

import "./styles/CartTable.css";

import * as storeActions from "../actions/storeActions";
import storeReducers from "../reducers/storeReducers";

class CartTable extends Component {
  handleClick(e, item) {
    this.props.eliminar(item);
  }

  handleClickAdd(e, item) {
    this.props.agregarUno(item);
  }
  handleClickDelete(e, item) {
    this.props.eliminarUno(item);
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <table className="custom-width-100 table-products">
            <thead className="table-head">
              <tr>
                <th className="custom-th-width-10" scope="col">
                  Code Product
                </th>
                <th className="custom-th-width-50" scope="col">
                  Description
                </th>
                <th className="custom-th-width-30" scope="col">
                  Quantity
                </th>
                <th className="custom-th-width-10" scope="col">
                  Price/Ea.
                </th>
                <th className="custom-th-width-10" scope="col">
                  Total
                </th>
                <th className="custom-th-width-30" scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {this.props.storeReducers.storeItems.map(item => {
                return (
                  <React.Fragment key={item.code}>
                    <tr>
                      <td>{item.code}</td>

                      <td>
                        {item.description} {item.category}
                      </td>
                      <td>
                        <img
                          onClick={e => this.handleClickDelete(e, item)}
                          className="icon"
                          src={menos}
                          alt="menos"
                        />{" "}
                        {item.cant}{" "}
                        <img
                          onClick={e => this.handleClickAdd(e, item)}
                          className="icon"
                          src={mas}
                          alt="mas"
                        />
                      </td>
                      <td>${item.price}</td>
                      <td>${(item.price * item.cant).toFixed(2)}</td>
                      <td className="table-row-center">
                        <button
                          onClick={e => this.handleClick(e, item)}
                          className="btn-shop btn-dark text-bolder"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="6">
                        <hr className="custom-width-100 line-table" />
                      </td>
                    </tr>
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = reducers => {
  return storeReducers;
};

export default connect(mapStateToProps, storeActions)(CartTable);
