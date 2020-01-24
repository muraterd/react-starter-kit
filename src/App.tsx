import React, { PureComponent } from "react";

import { AuthService } from "services/auth/AuthService";
import HttpClient from "helpers/HttpClient";
import Routes from "Routes";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends PureComponent {
  // constructor(props) {
  //   super(props);

  //   if (AuthService.isLoggedIn()) {
  //     const token = AuthService.getAuthToken();
  //     HttpClient.defaults.headers["x-access-token"] = token;
  //   }
  // }

  render() {
    return (
      <div>
        <Routes />
      </div>
    );
  }
}

export default App;
