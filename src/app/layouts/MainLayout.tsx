import React, { Component, Fragment } from "react";
import AuthenticatedRoute from "app/containers/AuthenticatedRoute";

const MainLayout = ({ component: Component, ...rest }) => {
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
