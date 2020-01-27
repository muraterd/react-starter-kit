import React from "react";
import { FormikProps } from "formik";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  props: FormikProps<any>;
  label?: string;
  //   secureTextEntry?: boolean;
  //   placeholder?: string;
}

class FormikInput extends React.PureComponent<Props> {
  render() {
    const { props, name, label, ...inputProps } = this.props;

    return (
      <div className="form-group">
        {label && <label htmlFor={name}>{label}</label>}
        <input
          className={`form-control ${props.errors[name] && "is-invalid"}`}
          value={props.values[name]}
          onChange={props.handleChange(name)}
          onBlur={() => props.setFieldTouched(name)}
          {...inputProps}
        />
        {props.touched[name] && props.errors[name] && (
          <span className="help-block text-danger">{props.errors[name]}</span>
        )}
      </div>
    );
  }
}

// const styles = StyleSheet.create({
//   errorText: {
//     fontSize: 13,
//     color: '#b00020',
//     paddingVertical: 3,
//     paddingHorizontal: 8,
//   },
// });

export default FormikInput;
