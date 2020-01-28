import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { AuthService } from "ui/services/auth/AuthService";
import BaseRoute, { BaseRouteProps } from "ui/containers/BaseRoute";

export interface AuthenticatedRouteProps extends BaseRouteProps {
  component: any;
}

function AuthenticatedRoute({ component: Component, ...rest }: AuthenticatedRouteProps) {
  return (
    <BaseRoute
      {...rest}
      render={props =>
        AuthService.isLoggedIn() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

export default AuthenticatedRoute;
