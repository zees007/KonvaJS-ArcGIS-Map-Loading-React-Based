import React, { Component } from 'react';
import {Modal} from 'react-bootstrap';

class MapModel extends React.Component {
    constructor(props, context){
        super(props, context);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            show: false
        }
    }

    handleShow() {
        console.log(this.state)
        this.setState({ show: true })
    }
    handleClose(){
        this.setState({ show: false })
    }
    render() {

        return (
            <div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal Heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h1>This is modal body</h1>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}
export default MapModel
