import React, { Component } from "react";
import AddExpence from "./AddExpense";
import Charts from "./Charts";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <h3>Dashboard</h3>
        <AddExpence />
        <Charts />
      </div>
    );
  }
}

export default Dashboard;
