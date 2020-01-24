import React, { Fragment } from "react";
import { Route } from "react-router";

const LoginLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
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
