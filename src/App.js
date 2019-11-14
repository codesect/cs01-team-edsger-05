import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarTop from "./components/Navbar";
import SignupForm from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <NavbarTop />
      <Switch>
        <Route path="/signup">
          <SignupForm />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
