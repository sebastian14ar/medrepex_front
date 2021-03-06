import React, { Component } from "react";
import { connect } from "react-redux";
import shopIcon from "../images/icons/carro-de-la-compra.svg";
import { Link } from "react-router-dom";

import Alert from "../components/Alert";

import "./styles/ProductTable.css";

import * as storeActions from "../actions/storeActions";
import storeReducers from "../reducers/storeReducers";

class ProductsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alertIsOpen: false,
    };
  }
  handleClick(e, item) {
    this.props.agregarUno(item);
    this.handleOpenAlert();
    setTimeout(this.handleCloseAlert, 1000);
  }

  handleOpenAlert = () => {
    this.setState({ alertIsOpen: true });
  };

  handleCloseAlert = () => {
    this.setState({ alertIsOpen: false });
  };

  render() {
    return (
      <React.Fragment>
        {this.props.items.map((table) => {
          return (
            <div key={table.id}>
              {table.subHeader ? (
                <div className="sub-header">
                  <ul>
                    {table.subHeader.subHeaders.map((sub) => {
                      return <li key={sub.name}>{sub.name}</li>;
                    })}
                  </ul>
                  <div className="sub-header-image">
                    <img src={table.subHeader.imageSubHeader} alt="" />
                  </div>
                </div>
              ) : null}

              <div className="header-section">
                <div className="header-section-title">
                  {table.title ? <h2>{table.title}</h2> : null}
                </div>
                <div className="header-section-content">
                  {table.imageSection ? (
                    <img src={table.imageSection} alt={table.title} />
                  ) : null}
                  {table.list.length ? (
                    <ul>
                      {table.list.map((sub) => {
                        return <li key={sub.subtitle}>{sub.subtitle}</li>;
                      })}
                    </ul>
                  ) : null}
                </div>
              </div>
              <table className="custom-width-100 table-products">
                <thead className="table-head">
                  <tr>
                    <th className="custom-th-width-10" scope="col">
                      #ITEM
                    </th>
                    {this.props.type === "" ? null : (
                      <th className="custom-th-width-10" scope="col">
                        ETHICON CODE
                      </th>
                    )}

                    <th className="custom-th-width-30" scope="col">
                      DESCRIPTION
                    </th>
                    {this.props.type === "" ? null : (
                      <th className="custom-th-width-30" scope="col">
                        SIZE
                      </th>
                    )}

                    <th className="custom-th-width-10" scope="col">
                      PRICE/BOX
                    </th>
                    <th className="custom-th-width-10" scope="col">
                      ADD 1 BOX
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {table.codes.map((item) => {
                    return (
                      <React.Fragment key={item.code}>
                        <tr>
                          <td>
                            <Link
                              to={{
                                pathname: `/detail/${item.code}`,
                                state: {
                                  item: item,
                                },
                              }}
                            >
                              {item.code}
                            </Link>
                          </td>
                          {this.props.type === "" ? null : (
                            <td>{item.ethiconCode}</td>
                          )}

                          <td>
                            {item.description} {item.category}
                          </td>
                          {this.props.type === "" ? null : <td>{item.size}</td>}
                          {/* <td>{item.size}</td> */}
                          <td>${item.price}</td>
                          <td className="table-row-center">
                            <button
                              onClick={(e) => this.handleClick(e, item)}
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
          );
        })}
        <Alert
          onClose={this.handleCloseAlert}
          isOpen={this.state.alertIsOpen}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (reducers) => {
  return storeReducers;
};

export default connect(mapStateToProps, storeActions)(ProductsTable);
