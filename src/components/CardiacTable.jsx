import React, { Component } from "react";
import { connect } from "react-redux";
import shopIcon from "../images/icons/carro-de-la-compra.svg";
import { Link } from "react-router-dom";

import "./styles/ProductTable.css";

import * as storeActions from "../actions/storeActions";
import storeReducers from "../reducers/storeReducers";

class ProductsTable extends Component {
  handleClick(e, item) {
    this.props.agregarUno(item);
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <table className="custom-width-100 table-products">
            <thead className="table-head">
              <tr>
                <th className="custom-th-width-10" scope="col">
                  #ITEM
                </th>

                <th className="custom-th-width-10" scope="col">
                  ETHICON CODE
                </th>

                <th className="custom-th-width-30" scope="col">
                  DESCRIPTION
                </th>

                <th className="custom-th-width-10" scope="col">
                  SIZE
                </th>
                <th className="custom-th-width-10" scope="col">
                  NEEDLE
                </th>
                <th className="custom-th-width-10" scope="col">
                  LENGTH
                </th>

                <th className="custom-th-width-10" scope="col">
                  PRICE/BOX
                </th>
                <th className="custom-th-width-10" scope="col">
                  ADD 1 BOX
                </th>
              </tr>
            </thead>
            <tbody>
              {this.props.items.map(item => {
                return (
                  <React.Fragment key={item.code}>
                    <tr>
                      <td>
                        <Link
                          to={{
                            pathname: `/detail/${item.code}`,
                            state: {
                              item: item
                            }
                          }}
                        >
                          {item.code}
                        </Link>
                      </td>

                      <td>{item.ethicon_code}</td>
                      <td>
                        {item.description} {item.category}
                      </td>
                      <td>{item.size}</td>
                      <td>{item.needle}</td>
                      <td>{item.length}</td>
                      {/* <td>{item.size}</td> */}
                      <td>${item.price}</td>
                      <td className="table-row-center">
                        <button
                          onClick={e => this.handleClick(e, item)}
                          className="btn-shop btn-dark text-bolder"
                        >
                          <img
                            className="shop-icon"
                            src={shopIcon}
                            alt="icon shop"
                          />
                          add to cart
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="8">
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

export default connect(mapStateToProps, storeActions)(ProductsTable);
