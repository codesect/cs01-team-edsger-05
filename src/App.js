import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import NavbarTop from "./components/Navbar";
import SignupForm from "./components/Signup";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <NavbarTop />
      <Switch>
        <Route exact path="/signup">
          <SignupForm />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
