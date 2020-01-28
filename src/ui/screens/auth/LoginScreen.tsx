import React, { Component } from "react";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import FormikInput from "ui/components/formik/FormikInput/FormikInput";
import HttpClient from "infrastructure/HttpClient/HttpClient";
import { ValidationException } from "data/exceptions/ValidationException";
import { ScreenProps } from "ui/models/screen/ScreenProps";
import { HttpException } from "data/exceptions/HttpException";
import HttpStatusCode from "data/definitions/HttpStatusCode";

const loginFormValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Bu ne aq..")
    .required("Email alanı zorunlu"),
  password: Yup.string().required()
});

type LoginFormValues = { email: string; password: string };
interface Props extends ScreenProps {}

export default class LoginScreen extends Component<Props> {
  login = async (email, password) => {
    await HttpClient.post("api/auth/login", { email, password });
  };

  onSubmit = async (values: LoginFormValues, { setErrors, setSubmitting }: FormikHelpers<LoginFormValues>) => {
    try {
      await this.login(values.email, values.password);
    } catch (error) {
      if (error instanceof ValidationException) {
        setErrors(error.validationErrors);
      } else if (error instanceof HttpException) {
        if (error.statusCode == HttpStatusCode.UNAUTHORIZED) {
          alert("Haat göster");
        }
      }

      setSubmitting(false);
    }
  };

  render() {
    return (
      <div>
        Login Screen<br></br>
        <Formik
          initialValues={{ email: "stormwr@gmail.com", password: "Deneme" }}
          validationSchema={loginFormValidationSchema}
          // validateOnMount={true}
          onSubmit={this.onSubmit}
        >
          {formikProps => (
            <Form>
              <FormikInput label="Email" name="email" formikProps={formikProps} />
              <FormikInput label="Password" name="password" type="password" formikProps={formikProps} />
              <button type="submit" disabled={formikProps.isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}
