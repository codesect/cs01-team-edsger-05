import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { Button, Form, FormGroup, Label } from "reactstrap";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .min(6, "Minimum 6 characters or less")
    .required("Required user name"),
  password: Yup.string().required("Required password"),
});

class Login extends Component {
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
          <h2>Login</h2>
        </div>
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          validationSchema={LoginSchema}
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
            handleSubmit,
            handleChange,
            handleBlur,
            values,
          }) => (
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="username">User Name</Label>
                <Field
                  type="text"
                  name="username"
                  id="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
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
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`form-control ${
                    touched.password && errors.password ? "is-invalid" : ""
                  }`}
                  placeholder="Password"
                />
                <ErrorMessage
                  component="div"
                  name="password"
                  className="invalid-feedback"
                />
              </FormGroup>
              <Button color="success" type="submit">
                Login
              </Button>{" "}
              <span>Create an account? </span>
              <Link to="/signup">
                <span>SignUp</span>
              </Link>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default Login;
