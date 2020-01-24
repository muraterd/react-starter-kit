import React from "react";
import { Route } from "react-router-dom";

const IndexLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <div className="DefaultLayout">
          <div>Header...</div>
          <Component {...matchProps} />
          <div>Footer...</div>
        </div>
      )}
    />
  );
};

export default IndexLayout;
