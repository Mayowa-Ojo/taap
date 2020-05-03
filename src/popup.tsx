import * as React from "react";
import * as ReactDOM from "react-dom";

import Wrapper from "./components/wrapper";
import Task from "./containers/task/task";
import Navbar from "./components/navbar";
import "./popup.css";

function App() {  

  return (
    <Wrapper>
      <main className="flex flex-col w-full">
        <Navbar />
        <Task />
      </main>
    </Wrapper>
  )
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
