import React, { Component } from "react";
import Login from "./Login";
import AddExpense from "./AddExpense";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <Login/>
        <AddExpense/>
      </div>
    );
  }
}

export default Home;
