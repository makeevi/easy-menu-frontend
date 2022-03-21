import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { ErrorMessage, Formik } from 'formik';
import * as yup from "yup"


type NewGroupProps = {
    style?: {};
    postAction?: (use_value: string) => void;
    initial_value?: string
    label?: string;
    desc?: string;
    placeholder?: string;
    buttonText: string;
    isTextarea: boolean;

}

const YupValidationStringComponent: React.FunctionComponent<NewGroupProps> = (props) => {

    const schema = yup.object().shape({
        input_value: yup
        .string()
        .required().label("Является обязательным полем")
        .max(255).label("Максимальное значение меньше допустимого")
        .min(3).label("Минимальное значение меньше допустимого")
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
                    
                    <Form.Control type="text"
                        placeholder={props.placeholder?props.placeholder:''} 
                        name='input_value'
                        value={values.input_value}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isValid={touched.input_value && !errors.input_value} 
                        as={props.isTextarea?"textarea":undefined}
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

export default YupValidationStringComponent;