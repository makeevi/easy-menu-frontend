import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import PencilSvg from './svg/PencilSvg';
import { Formik } from 'formik';
import * as yup from "yup"
import lodash from 'lodash';
import YupValidationNumberComponent from './YupValidationNumberComponent';
import YupValidationStringComponent from './YupValidationStringComponent';

type Props = {
    value: string | number | undefined;
    action?: (value: string | number) => void;
    contentType: ContentType;
    role?: Role;
    style?: React.CSSProperties;
    titleAdd?: string;
}

export enum ContentType {
    Float,
    String,
    Int,
    Textarea
}

export enum Role{
    EditValue,
    AddValue
}

const EditValueComponent: React.FunctionComponent<Props> = (props) => {

    EditValueComponent.defaultProps={
        role: Role.EditValue
    }

    const [isShowEdit, setShowEdit] = useState<boolean>();
    const [smShow, setSmShow] = useState(false);

    function PostNewValue(value: string | number) {

        setSmShow(false);
        if (props.action !== undefined)
            props.action(value);
    }



    return (

        <>
        {
            props.role == Role.EditValue &&
            <div style={props.style}
                onMouseLeave={() => { setShowEdit(false) }}
                onMouseEnter={() => { setShowEdit(true) }}

                className="d-flex justify-content-between align-items-start">
                <div>{props.value}</div>
                {
                    isShowEdit ?
                        <a className="link outline-primary" style={{ cursor: 'pointer', marginLeft: 10 }} onClick={() => setSmShow(true)}>
                            <PencilSvg />
                        </a>
                        : <div />
                }
            </div>
        }

        {
            props.role == Role.AddValue &&
            <Button  style={props.style} variant="link" size="sm" onClick={() => setSmShow(true)}>{props.titleAdd??"Добавить"}</Button>                      
        }
            


            <Modal
                size={props.contentType == ContentType.Textarea ? "lg" : "sm"}
                show={smShow} centered
                onHide={() => setSmShow(false)}
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    {lodash.isNumber(props.value) && props.contentType == ContentType.Float &&
                        <YupValidationNumberComponent initial_value={Number(props.value)} buttonText='Изменить' postAction={PostNewValue} />
                    }

                    {lodash.isString(props.value) && props.contentType == ContentType.String &&
                        <YupValidationStringComponent initial_value={String(props.value)} buttonText='Изменить' isTextarea={false} postAction={PostNewValue} />
                    }

                    {lodash.isString(props.value) && props.contentType == ContentType.Textarea &&
                        <YupValidationStringComponent initial_value={String(props.value)} buttonText='Изменить' isTextarea={true} postAction={PostNewValue} />
                    }

                </Modal.Body>
            </Modal>
        </>



    );
}

export default EditValueComponent;