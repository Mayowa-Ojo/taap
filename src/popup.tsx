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
  const [modalData, setModalData] = React.useState<any>({})

  const toggleModal: ToggleModal = (content, data) => {
    if(!isOpen) {
      setModalContent(content)
      setModalData(data)
      setIsOpen(!isOpen)
      return
    }
    setModalContent("")
    setIsOpen(!isOpen)
  }

  const renderModalContent = (modalContent: string, data?: Task) => {
    switch (modalContent) {
      case "form":
        return <Form toggleModal={toggleModal} data={modalData}/>;
      case "view": 
        return <View toggleModal={toggleModal} data={modalData}/>;
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
