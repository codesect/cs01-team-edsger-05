import React, { Component } from "react";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        style={{
          maxWidth: "350px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: "60px"
        }}
      >
        <div
          className="heading"
          style={{ paddingBottom: "20px", color: "#03a679" }}
        >
          <h2>Signup</h2>
        </div>
        <Form>
          <FormGroup>
            <Label for="username">User Name</Label>
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="Enter Username"
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email Address</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="contact">Contact Number</Label>
            <Input
              type="number"
              name="contact"
              id="contact"
              placeholder="Enter your contact number"
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </FormGroup>
          <FormGroup>
            <Label for="confirm-password">Confirm Password</Label>
            <Input
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="Re-enter Password"
            />
          </FormGroup>
          <Button color="success">Register</Button>{" "}
          <Button
            color="success"
            style={{
              backgroundColor: "white",
              border: "2px solid #03a679",
              color: "#03a679"
            }}
          >
            Reset all
          </Button>
        </Form>
      </div>
    );
  }
}

export default Signup;
