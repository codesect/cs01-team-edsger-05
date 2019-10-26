import React, { Component } from "react";
import Signup from "./Signup";
import Login from "./Login"

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <Login/>
        <Signup />
      </div>
    );
  }
}

export default Home;
