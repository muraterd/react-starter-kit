// Below: Hot Reload fix
import React from "react";
import ReactDOM from "react-dom";
import App from "App";

// import "bootstrap/dist/css/bootstrap.css";
import "./assets/styles/bootstrap/bootstrap-override.scss";

// const render = (Component: any) => {
//   return ReactDOM.render(
//     <Provider store={store}>
//       <BrowserRouter>
//         <Component />
//       </BrowserRouter>
//     </Provider>,
//     document.getElementById('root')
//   );
// };

const render = (Component: any) => {
  return ReactDOM.render(<Component />, document.getElementById("root"));
};

render(App);

if (module.hot) {
  module.hot.accept("./App", () => {
    const NextApp = require("./App").default;
    render(NextApp);
  });
}
