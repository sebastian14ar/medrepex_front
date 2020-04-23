import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Pages
import Home from "./views/HomePage";
import About from "./views/AboutPage";
import Contact from "./views/ContactPage";
import Customer from "./views/CustomerPage";
import Preferred from "./views/PreferredCustomerPage";
import RequestProduct from "./views/RequestProductPage";
import RequestSamples from "./views/RequestSamplesPage";
import StoreSurgical from "./views/StoreSurgicalPage";
import Products from "./views/ProductsPage";
import Cart from "./views/CartPage";
import Item from "./views/ItemPage";
import CheckOut from "./views/CheckOutPage";
import Cardiac from "./views/CardiacPage";
import Steel from "./views/SteelPage";
import Skin from "./views/SkinPage";
import Terms from "./views/TermsPage";
import Warranty from "./views/WarrantyPage";
import Search from "./views/SearchPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/free" component={RequestSamples} />
        <Route exact path="/prefcust" component={Preferred} />
        <Route exact path="/productinquiry" component={RequestProduct} />
        <Route exact path="/customerservice" component={Customer} />
        <Route exact path="/store/:type" component={StoreSurgical} />
        <Route exact path="/detail/:id" component={Item} />
        <Route exact path="/checkout" component={CheckOut} />
        <Route exact path="/cardiac" component={Cardiac} />
        <Route exact path="/steel" component={Steel} />
        <Route exact path="/skin" component={Skin} />
        <Route exact path="/terms-conditions" component={Terms} />
        <Route exact path="/warranty" component={Warranty} />
        <Route exact path="/search" component={Search} />
        <Route
          exact
          path="/store/:category/:subtype/:type"
          component={Products}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
