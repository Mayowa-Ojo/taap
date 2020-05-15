import * as React from "react";
import * as ReactDOM from "react-dom";

import Wrapper from "./components/wrapper";
import Modal from "./components/modal";
import Task from "./containers/task/task";
import Form from "./containers/task/components/form/form";
import View from "./containers/task/components/view/view";
import Navbar from "./components/navbar";
import "./popup.css";

function App() {  
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const [modalContent, setModalContent] = React.useState<string>("")

  const toggleModal = (content?: string) => {
    if(!isOpen) {
      setModalContent(content)
      setIsOpen(!isOpen)
      return
    }
    setModalContent("")
    setIsOpen(!isOpen)
  }

  const renderModalContent = (modalContent: string) => {
    switch (modalContent) {
      case "form":
        return <Form toggleModal={toggleModal} />;
      case "view": 
        return <View toggleModal={toggleModal} />;
    }
  }

  return (
    <Wrapper>
      <main className="flex flex-col w-full">
        <Navbar toggleModal={toggleModal} />
        <Task toggleModal={toggleModal} />
        { 
          isOpen ?
            <Modal toggleModal={toggleModal}>
              {renderModalContent(modalContent)}
            </Modal>
          : 
            ""
        }
      </main>
    </Wrapper>
  )
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
