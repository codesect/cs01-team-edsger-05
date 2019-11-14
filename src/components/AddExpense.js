import React, { Component } from "react";
import { Button, Form, FormGroup, Label,  Input } from "reactstrap";

import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const AddExpenseSchema = Yup.object().shape({
  title: Yup.string().required("Required title"),
  amount: Yup.string().required("Required Amount"),
  category: Yup.string().required("Required category")
});
class AddExpence extends Component {
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
          <h2>Add Expense</h2>
        </div>
        <Formik
          initialValues={{
            username: "",
            password: ""
          }}
          validationSchema={AddExpenseSchema}
          onSubmit={() => {
            alert("Form is validated! Submitting the form...");
          }}
        >
          {({
            touched,
            errors,
            handleSubmit,
            handleChange,
            handleBlur,
            values
          }) => (
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="title">Title</Label>
                <Field
                  type="text"
                  name="title"
                  id="title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                  className={`form-control ${
                    touched.title && errors.title ? "is-invalid" : ""
                  }`}
                  placeholder="Enter Title"
                />
                <ErrorMessage
                  component="div"
                  name="title"
                  className="invalid-feedback"
                />
              </FormGroup>
              <FormGroup>
                <Label for="amount">Amount</Label>
                <Field
                  type="number"
                  name="amount"
                  id="amount"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.amount}
                  className={`form-control ${
                    touched.amount && errors.amount ? "is-invalid" : ""
                  }`}
                  placeholder="00.00"
                />
               
                <ErrorMessage
                  component="div"
                  name="category"
                  className="invalid-feedback"
                />
              </FormGroup>
              <FormGroup>
        <Label for="category">Category</Label>
        <Input 
        type="select" name="select" id="category"
        onChange={handleChange}
        onBlur={handleBlur}
        className={`form-control ${
            touched.category && errors.category ? "is-invalid" : ""
          }`}
        >
        <option value="" label="Select a category" />
        <option value="Food" label="Food" />
        <option value="Cloths" label="Cloths" />
        <option value="Medical" label="Medical" />
        
        </Input>
        
        <ErrorMessage
                  component="div"
                  name="amount"
                  className="invalid-feedback"
                />
      </FormGroup>
      <FormGroup>
        <Label for="notes">Notes if any</Label>
        <Input type="textarea" name="text" id="notes" />
      </FormGroup>
              <Button color="success">Add</Button>{" "}
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
          )}
        </Formik>
      </div>
    );
  }
}

export default AddExpence;
