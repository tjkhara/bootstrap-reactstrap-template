import React from "react"
import "./App.css"
import { Button, Modal, ModalBody } from "reactstrap"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.toggleModal = this.toggleModal.bind(this)

    this.state = {
      isModalOpen: false
    }
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    })
  }

  render() {
    return (
      <>
        <h1>Hello World</h1>
        <Button color="primary" onClick={this.toggleModal}>
          primary
        </Button>{" "}
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalBody>
            <p>Hello world</p>
          </ModalBody>
        </Modal>
      </>
    )
  }
}

export default App
