import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import IndexLayout from "ui/layouts/IndexLayout";
import HomeScreen from "ui/screens/auth/HomeScreen";
import LoginScreen from "ui/screens/auth/LoginScreen";
import LoginLayout from "ui/layouts/LoginLayout";
import IndexScreen from "ui/screens/auth/IndexScreen";

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
