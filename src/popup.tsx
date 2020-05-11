import * as React from "react";
import * as ReactDOM from "react-dom";

import Wrapper from "./components/wrapper";
import Task from "./containers/task/task";
import Form from "./containers/task/components/form/form";
import Navbar from "./components/navbar";
import "./popup.css";

function App() {  
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Wrapper>
      <main className="flex flex-col w-full">
        <Navbar toggleModal={toggleModal} />
        <Task />
        { isOpen ? <Form toggleModal={toggleModal} /> : ""}
      </main>
    </Wrapper>
  )
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
