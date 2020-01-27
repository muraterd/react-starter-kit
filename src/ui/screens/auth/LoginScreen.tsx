import React, { Component } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikInput from "ui/components/formik/FormikInput/FormikInput";
import HttpClient from "infrastructure/HttpClient/HttpClient";
import { ValidationException } from "data/exceptions/ValidationException";

const loginFormValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Bu ne aq..")
    .required("Email alanı zorunlu"),
  password: Yup.string().required()
});

export default class LoginScreen extends Component {
  login = async (email, password) => {
    await HttpClient.post("api/auth/login", { email, password });
  };

  render() {
    return (
      <div>
        Login Screen<br></br>
        <Formik
          initialValues={{ email: "test", password: "Deneme" }}
          validationSchema={loginFormValidationSchema}
          // validateOnMount={true}
          onSubmit={async (values, { setErrors, setSubmitting }) => {
            try {
              await this.login(values.email, values.password);
            } catch (error) {
              if (error instanceof ValidationException) {
                setErrors(error.validationErrors);
                console.log("Errors", error.validationErrors);
              }
            }
            // setErrors({ email: "Sesss!" });
            setSubmitting(false);
          }}
        >
          {props => (
            <Form>
              <FormikInput label="Email" name="email" props={props} />
              <FormikInput label="Password" name="password" type="password" props={props} />
              <button type="submit" disabled={props.isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}
