import React from "react";
import BaseRoute from "ui/containers/BaseRoute";
import { LayoutProps } from "ui/models/screen/LayoutProps";

const IndexLayout = ({ component: Component, ...rest }: LayoutProps) => {
  return (
    <BaseRoute
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
