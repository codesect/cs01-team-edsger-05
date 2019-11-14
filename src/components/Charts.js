import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";
import Piechart from "./Piechart";
import Barchart from "./Barchart";

class Charts extends Component {
  state = {};
  render() {
    return (
      <Row style={{ paddingTop: "100px" }}>
        <Col md="6">
          <div className="heading" style={{ textAlign: "center" }}>
            <h3>Category wise expense</h3>
          </div>
          <Piechart />
        </Col>
        <Col md="6">
          <div className="heading" style={{ textAlign: "center" }}>
            <h3>per day expense</h3>
          </div>
          <Barchart />
        </Col>
      </Row>
    );
  }
}

export default Charts;
