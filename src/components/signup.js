import React, { Component } from "react";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import { withFormik } from "formik";
import * as Yup from "yup";

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      values,
      touched,
      errors,
      handleChange,
      handleBlur,
      handleSubmit
    } = this.props;
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
        <Form onSubmit={handleSubmit} autoComplete="off">
          <FormGroup>
            <Label htmlFor="username">User Name</Label>
            <Input
              type="text"
              name="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
              id="username"
              placeholder="Enter Username"
            />
          </FormGroup>
          {errors.username && touched.username && (
            <div
              id="feedback"
              style={{ color: "red", marginTop: "-15px", marginBottom: "5px" }}
            >
              {errors.username}
            </div>
          )}
          <FormGroup>
            <Label htmlFor="email">Email Address</Label>
            <Input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              id="email"
              placeholder="Enter Email"
            />
          </FormGroup>
          {errors.email && touched.email && (
            <div
              id="feedback"
              style={{ color: "red", marginTop: "-15px", marginBottom: "5px" }}
            >
              {errors.email}
            </div>
          )}
          <FormGroup>
            <Label htmlFor="contact">Contact Number</Label>
            <Input
              type="number"
              name="contact"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.contact}
              id="contact"
              placeholder="Enter your contact number"
            />
          </FormGroup>
          {errors.contact && touched.contact && (
            <div
              id="feedback"
              style={{ color: "red", marginTop: "-15px", marginBottom: "5px" }}
            >
              {errors.contact}
            </div>
          )}
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              id="password"
              placeholder="Password"
            />
          </FormGroup>
          {errors.password && touched.password && (
            <div
              id="feedback"
              style={{ color: "red", marginTop: "-15px", marginBottom: "5px" }}
            >
              {errors.password}
            </div>
          )}
          <FormGroup>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
              id="confirmPassword"
              placeholder="Re-enter Password"
            />
          </FormGroup>
          {errors.confirmPassword && touched.confirmPassword && (
            <div
              id="feedback"
              style={{ color: "red", marginTop: "-15px", marginBottom: "5px" }}
            >
              {errors.confirmPassword}
            </div>
          )}
          <Button color="success" type="submit">
            Register
          </Button>{" "}
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

export const Signup = withFormik({
  mapPropsToValues: () => ({
    username: "",
    email: "",
    contact: "",
    password: "",
    confirmPassword: ""
  }),

  // Custom sync validation
  validationSchema: Yup.object({
    username: Yup.string()
      .min(6, "Must be 6 characters or less")
      .required("Required"),
    email: Yup.string()
      .email("Invalid email addresss`")
      .required("Required"),
    contact: Yup.string()
      .min(11, "Must be 11 characters or less")
      .required("Required"),
    password: Yup.string()
      .min(8, "Must be 8 characters or long")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        "Pasword can only contain at least one uppercase letter, one lowercase letter and one number:"
      )
      .required("Required"),
    confirmPassword: Yup.string()
      .min(8, "Must be 8 characters or long")
      .test("passwords-match", "Passwords must match", function(value) {
        return this.parent.password === value;
      })
      .required("Required")
  }),

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: "BasicForm"
})(SignupForm);
