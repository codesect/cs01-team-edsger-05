import React, { Component } from "react";
import Login from "./Login";
import ExpenseForm from "./ExpenseForm";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <Login/>
        <ExpenseForm buttonVal="Add" title="Add expense"/>
        <ExpenseForm buttonVal="Update" title="Update expense"/>
      </div>
    );
  }
}

export default Home;
