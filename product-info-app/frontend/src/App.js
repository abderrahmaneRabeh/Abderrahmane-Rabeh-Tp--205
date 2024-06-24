import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/add-product" component={AddProduct} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
