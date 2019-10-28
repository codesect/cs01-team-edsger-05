import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class Login extends Component {
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
          <h2>Login</h2>
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
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </FormGroup>
          <Button color="success">Login</Button>{" "}
          <span>Create an account? </span><Link to="/signup"><span>SignUp</span></Link>
        </Form>
      </div>
    );
  }
}

export default Login;
