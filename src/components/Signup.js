import React, { Component } from "react";
import { Button, FormGroup, Label } from "reactstrap";
import { Redirect } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
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
      "Pasword can only contain at least one uppercase letter, one lowercase letter and one number:",
    )
    .required("Required"),
  confirmPassword: Yup.string()
    .min(8, "Must be 8 characters or long")
    .test("passwords-match", "Passwords must match", function(value) {
      return this.parent.password === value;
    })
    .required("Required"),
});

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }
  render() {
    if (this.state.isLoggedIn) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div
        style={{
          maxWidth: "350px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: "60px",
        }}
      >
        <div
          className="heading"
          style={{ paddingBottom: "20px", color: "#03a679" }}
        >
          <h2>Signup</h2>
        </div>
        <Formik
          initialValues={{
            username: "",
            contact: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={({ setSubmitting }) => {
            // we will call API for login and on successfull login,
            // we will update isLoggedIn state to true
            // in below function we are updating state after 2 sec
            // which means user successfully loggedin

            setTimeout(() => {
              // update state after 2 sec
              this.setState({ isLoggedIn: !this.state.isLoggedIn });
              console.log(this.state.isLoggedIn);
            }, 2000);
          }}
        >
          {({
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            values,
          }) => (
            <Form>
              <div className="form-group">
                <Label htmlFor="username">User Name</Label>
                <Field
                  type="text"
                  name="username"
                  id="username"
                  className={`form-control ${
                    touched.username && errors.username ? "is-invalid" : ""
                  }`}
                  placeholder="Enter Username"
                />
                <ErrorMessage
                  component="div"
                  name="username"
                  className="invalid-feedback"
                />
              </div>
              <FormGroup>
                <Label htmlFor="email">Email Address</Label>
                <Field
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className={`form-control ${
                    touched.email && errors.email ? "is-invalid" : ""
                  }`}
                  id="email"
                  placeholder="Enter Email"
                />
                <ErrorMessage
                  component="div"
                  name="email"
                  className="invalid-feedback"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="contact">Contact Number</Label>
                <Field
                  type="number"
                  name="contact"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.contact}
                  id="contact"
                  className={`form-control ${
                    touched.contact && errors.contact ? "is-invalid" : ""
                  }`}
                  placeholder="Enter your contact number"
                />
                <ErrorMessage
                  component="div"
                  name="contact"
                  className="invalid-feedback"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Field
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className={`form-control ${
                    touched.password && errors.password ? "is-invalid" : ""
                  }`}
                  id="password"
                  placeholder="Password"
                />
                <ErrorMessage
                  component="div"
                  name="password"
                  className="invalid-feedback"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Field
                  type="password"
                  name="confirmPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                  id="confirmPassword"
                  className={`form-control ${
                    touched.confirmPassword && errors.confirmPassword
                      ? "is-invalid"
                      : ""
                  }`}
                  placeholder="Re-enter Password"
                />
                <ErrorMessage
                  component="div"
                  name="confirmPassword"
                  className="invalid-feedback"
                />
              </FormGroup>
              <Button color="success" type="submit">
                Register
              </Button>{" "}
              <Button
                color="success"
                style={{
                  backgroundColor: "white",
                  border: "2px solid #03a679",
                  color: "#03a679",
                }}
              >
                Reset all
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default SignupForm;
