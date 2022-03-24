import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';



type Props = {
    size: Size
    bodyModal?: () => any
    headerTitle?: string
}

export enum Size {
    lg,
    sm
}

const ModalComponent: React.FunctionComponent<Props> = (props) => {

    const [showModal, setShowModal] = useState<boolean>();

    ModalComponent.defaultProps = {
        size: Size.sm
    }


    function Method() {

        setShowModal(true);

    }

    function GetModalForm() {


        if (showModal) {
            return <Modal
                size={props.size === Size.lg ? 'lg' : 'sm'}
                show={true} centered
                onHide={() => setShowModal(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{props.headerTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.bodyModal && props?.bodyModal()}

                </Modal.Body>
            </Modal>

        }
    }


    return (
        <React.Fragment>

            <div onClick={Method}>{props.children}</div>

            {GetModalForm()}
        </React.Fragment>
    );
};

export default ModalComponent;