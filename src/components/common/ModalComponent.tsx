import React from 'react';
import { Modal } from 'react-bootstrap';

const ModalComponent: React.FunctionComponent = () => {
    return (
            <Modal
                size={"lg"}
                show={true} centered
                // onHide={() => setSmShow(false)}
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>

                </Modal.Body>
            </Modal>
    );
};

export default ModalComponent;