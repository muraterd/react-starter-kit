import React, { PureComponent } from "react";
import Routes from "app/Routes";

class App extends PureComponent {
  // constructor(props) {
  //   super(props);

  //   if (AuthService.isLoggedIn()) {
  //     const token = AuthService.getAuthToken();
  //     HttpClient.defaults.headers["x-access-token"] = token;
  //   }
  // }

  render() {
    return <Routes />;
  }
}

export default App;
