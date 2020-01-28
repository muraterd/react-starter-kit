import React, { PureComponent } from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
  isSuccess?: boolean;
}

export default class Input extends PureComponent<InputProps> {
  get cssClass() {
    const { className, hasError, isSuccess } = this.props;
    const classArray = ["form-control"];
    className && classArray.push(className);
    hasError && classArray.push("is-invalid");
    isSuccess && classArray.push("is-valid");

    return classArray.join(" ");
  }

  render() {
    const { className, hasError, isSuccess, ...props } = this.props;

    return <input className={this.cssClass} {...props} />;
  }
}
