import React from 'react';
import { Modal, Button } from 'react-bootstrap';

class CenteredModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  render() {
    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          Open Modal
        </Button>

        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          centered // This will center the modal vertically and horizontally
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal Title</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{width:"1200px"}}>
            Modal Content Goes Here 
            lorem 1000
            Modal Content Goes Here 
            lorem 1000 Modal Content Goes Here 
            lorem 1000 Modal Content Goes Here 
            lorem 1000 Modal Content Goes Here 
            lorem 1000 Modal Content Goes Here 
            lorem 1000 Modal Content Goes Here 
            lorem 1000 Modal Content Goes Here 
            lorem 1000 Modal Content Goes Here 
            lorem 1000 Modal Content Goes Here 
            lorem 1000 Modal Content Goes Here 
            lorem 1000 Modal Content Goes Here 
            lorem 1000 Modal Content Goes Here 
            lorem 1000 Modal Content Goes Here 
            lorem 1000 Modal Content Goes Here 
            lorem 1000 Modal Content Goes Here 
            lorem 1000 Modal Content Goes Here 
            lorem 1000 Modal Content Goes Here 
            lorem 1000 Modal Content Goes Here 
            lorem 1000 Modal Content Goes Here 
            lorem 1000 Modal Content Goes Here 
            lorem 1000

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            {/* You can add more buttons here */}
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default CenteredModal;
