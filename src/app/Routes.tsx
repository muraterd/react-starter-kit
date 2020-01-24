import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import IndexLayout from "app/layouts/IndexLayout";
import HomeScreen from "app/screens/auth/HomeScreen";
import LoginScreen from "app/screens/auth/LoginScreen";
import LoginLayout from "app/layouts/LoginLayout";
import IndexScreen from "app/screens/auth/IndexScreen";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <IndexLayout exact path="/" component={IndexScreen} />
          <IndexLayout exact path="/home" component={HomeScreen} />
          <LoginLayout exact path="/login" component={LoginScreen} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
