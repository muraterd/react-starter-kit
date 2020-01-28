import React from "react";
import { Route, RouteProps, useHistory } from "react-router-dom";
import RouteManager from "infrastructure/Managers/RouteManager";

export interface BaseRouteProps extends RouteProps {}

function BaseRoute({ ...props }: BaseRouteProps) {
  RouteManager.history = useHistory();
  return <Route {...props} />;
}

export default BaseRoute;
