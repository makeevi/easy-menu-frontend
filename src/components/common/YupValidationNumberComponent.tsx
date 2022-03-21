import React from 'react';
import { Formik, Field, ErrorMessage, } from 'formik';
import * as yup from "yup"
import { values } from 'lodash';
import { Button, Col,  Row, Form } from 'react-bootstrap';

type Props = {
    style?: {};
    postAction?: (props: number) => void;
    initial_value?: number;
    label?: string;
    desc?: string;
    placeholder?: string;
    buttonText: string;
}


const YupValidationNumberUi: React.FunctionComponent<Props> = (props) => {

    const schema = yup.object().shape({
        input_value: yup
            .number()
            .required()
            .min(0)
            .max(50000),
    });

    const renderError = (message: string) => <p style={{ color: "red" }}>{message}</p>;


    return (
        <Formik
        validationSchema={schema}
        initialValues={{
            input_value: props.initial_value,
        }}
        onSubmit={(values, { resetForm }) => {

            if(props.postAction !== undefined && values.input_value !== undefined)
            {
                props.postAction(values.input_value);
                resetForm();
            }
            
        }}
    >

        {({ handleChange, handleBlur, values, handleSubmit, errors, touched, isValid }) => (

            <Form style={props.style} onSubmit={handleSubmit} >
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    {props.label !== undefined && <Form.Label>{props.label}</Form.Label>}
                    
                    <Form.Control type="number"
                        placeholder={props.placeholder?props.placeholder:''} 
                        name='input_value'
                        value={values.input_value}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isValid={touched.input_value && !errors.input_value}
                    />

                <ErrorMessage name="input_value" render={renderError} />

                {props.desc !== undefined && <Form.Text className="text-muted">{props.desc}</Form.Text>}

                </Form.Group>
                <Button variant="primary" type="submit" >
                    {props.buttonText}
                </Button>
            </Form>

        )}


    </Formik>




    );
};

export default YupValidationNumberUi;