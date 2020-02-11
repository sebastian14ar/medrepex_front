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

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/free" component={RequestSamples} />
        <Route exact path="/prefcust" component={Preferred} />
        <Route exact path="/productinquiry" component={RequestProduct} />
        <Route exact path="/customerservice" component={Customer} />
        <Route exact path="/store/surgical" component={StoreSurgical} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
