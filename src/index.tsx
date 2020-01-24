// Below: Hot Reload fix
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";

// import "bootstrap/dist/css/bootstrap.css";
import "./assets/styles/bootstrap/bootstrap-override.scss";
import App from "App";
import stores from "stores";

const render = (Component: any) => {
  return ReactDOM.render(
    <Provider {...stores}>
      <Component />
    </Provider>,
    document.getElementById("root")
  );
};

render(App);

if (module.hot) {
  module.hot.accept("./App", () => {
    const NextApp = require("./App").default;
    render(NextApp);
  });
}
