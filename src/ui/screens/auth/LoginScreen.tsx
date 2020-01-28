import React, { Component } from "react";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import FormikInput from "ui/components/formik/FormikInput/FormikInput";
import HttpClient from "infrastructure/HttpClient/HttpClient";
import { ValidationException } from "data/exceptions/ValidationException";
import { ScreenProps } from "ui/models/screen/ScreenProps";
import { UncontrolledAlert } from "reactstrap";
import { UnauthorizedException } from "data/exceptions/UnauthorizedException";

const loginFormValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Lütfen geçerli bir eposta adresi girin.")
    .required("Eposta alanı zorunlu"),
  password: Yup.string().required()
});

type LoginFormValues = { email: string; password: string };
interface Props extends ScreenProps {}
interface State {
  errorMessage?: string;
}

export default class LoginScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  login = async (email, password) => {
    await HttpClient.post("api/auth/login", { email, password });
  };

  onSubmit = async (values: LoginFormValues, { setErrors, setSubmitting }: FormikHelpers<LoginFormValues>) => {
    this.setState({ errorMessage: undefined });
    try {
      await this.login(values.email, values.password);
    } catch (error) {
      if (error instanceof ValidationException) {
        setErrors(error.validationErrors);
      } else if (error instanceof UnauthorizedException) {
        this.setState({ errorMessage: "Kullanıcı adı veya şifre hatalı" });
      } else {
        this.setState({ errorMessage: "Bilinmeyen bir hata oldu. Lütfen tekrar deneyin." });
      }

      setSubmitting(false);
    }
  };

  render() {
    const { errorMessage } = this.state;

    return (
      <div>
        Login Screen<br></br>
        {errorMessage && <UncontrolledAlert color="danger">{errorMessage}</UncontrolledAlert>}
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
              <button type="submit" disabled={formikProps.isSubmitting || !formikProps.isValid}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}
