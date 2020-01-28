import React from "react";
import { FormikProps } from "formik";
import { Input } from "ui/components/bootstrap/base";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  formikProps: FormikProps<any>;
  label?: string;
}

class FormikInput extends React.PureComponent<Props> {
  render() {
    const { formikProps, name, label, ...inputProps } = this.props;

    return (
      <div className="form-group">
        {label && <label htmlFor={name}>{label}</label>}
        <Input
          hasError={!!formikProps.errors[name]}
          value={formikProps.values[name]}
          onChange={formikProps.handleChange(name)}
          onBlur={() => formikProps.setFieldTouched(name)}
          {...inputProps}
        />
        {formikProps.touched[name] && formikProps.errors[name] && (
          <span className="help-block text-danger">{formikProps.errors[name]}</span>
        )}
      </div>
    );
  }
}

export default FormikInput;
