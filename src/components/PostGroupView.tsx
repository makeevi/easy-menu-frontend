import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from "yup"
import { values } from 'lodash';
import { FoodGroupPostModel } from '../api/models/PostModel';

type NewGroupProps = {
    style?: {};
    postAction: (props: FoodGroupPostModel) => void;
}

const PostGroupView: React.FunctionComponent<NewGroupProps> = (props) => {


    const schema = yup.object().shape({
        nameGroup: yup.string().required().length(4),
    });


    //const [group, setGroup] = useState({nameGroup: ''})
    // const [validated, setValidated] = useState(false);

    const addNewGroup = (e: any) => {
        // if(!validated) return;

        //e.preventDefault();

        //const model: PostFoodGroupModel = { 
        //    Name: group.nameGroup             
        //} 

        //props.postAction(model);
        // setGroup({nameGroup:''});
    }

    const handleSubmit = (event: any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        // setValidated(true);
    };

    return (

        <Formik
            validationSchema={schema}
            initialValues={{
                nameGroup: '',
            }}
            onSubmit={(values, { resetForm }) => {
                console.log(values.nameGroup)
                resetForm();
            }}
        >

            {({ handleChange, handleBlur, values, handleSubmit, errors, touched, isValid }) => (

                <Form style={props.style} onSubmit={handleSubmit} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Наименование группы</Form.Label>
                        <Form.Control type="text"
                            placeholder="Новая группа" name='nameGroup'
                            value={values.nameGroup}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isValid={touched.nameGroup && !errors.nameGroup}
                        />

                        <Form.Control.Feedback type="invalid">
                            {errors.nameGroup}
                        </Form.Control.Feedback>
                        {/*             {errors.nameGroup && touched.nameGroup && (
            <p style={{ color: "red" }}> {errors.nameGroup} </p>
            )} */}

                        <Form.Text className="text-muted">
                            Укажите наименование группы.
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Создать
                    </Button>
                </Form>

            )}


        </Formik>

    );
};

export default PostGroupView;