import * as React from "react";
import * as ReactDOM from "react-dom";

import Wrapper from "./components/wrapper";
import Modal from "./components/modal";
import Task from "./containers/task/task";
import Password from "./containers/password_keeper/password";
import Form from "./containers/task/components/form/form";
import View from "./containers/task/components/view/view";
import Navbar from "./components/navbar";
import "./popup.css";

function App() {
  const [currentApp, setCurrentApp] = React.useState<string>("Password Keeper")
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
        return <Form toggleModal={toggleModal} data={data}/>;
      case "view": 
        return <View toggleModal={toggleModal} data={data}/>;
    }
  }

  const renderCurrentApp = (current: string) => {
    switch(current) {
      case "Task Manager":
        return <Task toggleModal={toggleModal} />
      case "Password Keeper":
        return <Password />
      default:
        return <Task toggleModal={toggleModal} />
    }
  }

  return (
    <Wrapper currentApp={currentApp} setCurrentApp={setCurrentApp}>
      <main className="flex flex-col w-full">
        <Navbar toggleModal={toggleModal} currentApp={currentApp} />
        { renderCurrentApp(currentApp) }
        { 
          isOpen ?
            <Modal toggleModal={toggleModal}>
              {renderModalContent(modalContent, modalData)}
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
