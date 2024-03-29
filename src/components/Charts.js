import React from "react";
import { Row, Col } from "reactstrap";

import Piechart from "./Piechart";
import Barchart from "./Barchart";

export default function Charts() {
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
