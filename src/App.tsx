import React, { PureComponent } from "react";
import Button2 from "containers/Button2";

import { Button } from "reactstrap";

class App extends PureComponent {
  render() {
    return (
      <div>
        Deneme
        <Button color="primary" onClick={() => alert("324")}>
          Danger!
        </Button>
        <Button2 />
        <div className="murat"> Murat</div>
      </div>
    );
  }
}

export default App;
