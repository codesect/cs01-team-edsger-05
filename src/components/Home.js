import React, { Component } from "react";
import NavbarTop from "./Navbar";
import Signup from "./signup";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <NavbarTop />
        <Signup />
      </div>
    );
  }
}

export default Home;
