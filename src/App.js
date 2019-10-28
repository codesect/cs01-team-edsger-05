import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import NavbarTop from "./components/Navbar";
import Signup from "./components/Signup"

function App() {
  return (
    <Router>
      <NavbarTop />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route  path="/signup">
          <Signup />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
