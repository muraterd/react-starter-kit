import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import LoginLayout from "layouts/LoginLayout";
import LoginScreen from "screens/auth/LoginScreen";
import IndexLayout from "layouts/IndexLayout";
import HomeScreen from "screens/auth/HomeScreen";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <IndexLayout exact path="/" component={HomeScreen} />
          <LoginLayout exact path="/login" component={LoginScreen} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
