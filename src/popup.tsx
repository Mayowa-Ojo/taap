import * as React from "react";
import * as ReactDOM from "react-dom";

import Wrapper from "./components/wrapper";
import "./popup.css";

function App() {
  const [counter, setCounter] = React.useState(0)

  const handleClick = () => {
    setCounter(counter + 1)
  }

  return (
    <Wrapper>
      <main>
        <h1>Click to increase counter: <strong>{counter}</strong></h1>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>Increment Counter +</button>
      </main>
    </Wrapper>
  )
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
