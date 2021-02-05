import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//components
import Home from "./screens/Home";
import Checkout from "./screens/Checkout";
import Header from "./layout/Header";

const App = () => {
  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
