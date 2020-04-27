import * as React from "react";
import * as ReactDOM from "react-dom";

import "./popup.css";

function App() {
  return (
    <h1>Welcome to taap. *grin*</h1>
  )
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
