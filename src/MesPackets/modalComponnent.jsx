import React from 'react'
//import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Comment from './Commentaire';
import './modal.css'

class PopupModal extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false,
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    render() {
      return (
        <>
          <p id="colorerP" onClick={this.handleShow}>
            Comment
          </p>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
              <Comment/>
            </Modal.Body>
          </Modal>
        </>
      );
    }
  }
  
  export default PopupModal