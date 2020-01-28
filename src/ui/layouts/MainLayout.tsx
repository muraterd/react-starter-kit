import React, { Component, Fragment } from "react";
import AuthenticatedRoute from "ui/containers/AuthenticatedRoute";
import { LayoutProps } from "ui/models/screen/LayoutProps";

const MainLayout = ({ component: Component, ...rest }: LayoutProps) => {
  return (
    <AuthenticatedRoute
      {...rest}
      component={matchProps => (
        <Fragment>
          <div>Header.....</div>
          <div className="container" style={{ paddingTop: 70 }}>
            <Component {...matchProps} />
          </div>
          <div>Footer.....</div>
        </Fragment>
      )}
    />
  );
};

export default MainLayout;
