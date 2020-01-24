// Below: Hot Reload fix
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";

// import "bootstrap/dist/css/bootstrap.css";
import "./app/assets/styles/bootstrap/bootstrap-override.scss";
import Startup from "Startup";
import stores from "app/stores";

const render = (Component: any) => {
  return ReactDOM.render(
    <Provider {...stores}>
      <Component />
    </Provider>,
    document.getElementById("root")
  );
};

render(Startup);

if (module.hot) {
  module.hot.accept("./Startup", () => {
    const NextApp = require("./Startup").default;
    render(NextApp);
  });
}
