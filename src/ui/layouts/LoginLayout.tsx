import React, { Fragment } from "react";
import BaseRoute from "ui/containers/BaseRoute";
import { LayoutProps } from "ui/models/screen/LayoutProps";

const LoginLayout = ({ component: Component, ...rest }: LayoutProps) => {
  return (
    <BaseRoute
      {...rest}
      component={matchProps => (
        <Fragment>
          <div>Header</div>
          <Component {...matchProps} />
          <div>Footer</div>
        </Fragment>
      )}
    />
  );
};

export default LoginLayout;
