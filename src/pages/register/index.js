import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import Layout from "../layout";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    // const [isError, setISError] = useState(false);
    const [hasError, setHasError] = useState(false);
    const axiosHandler = axios.create({
        baseURL: "https://api.darwinstech.com/api/",
        headers: {
            "Accept": "application/json"
        }
    })

    const navigate = useNavigate();

    const SignupSchema = Yup.object().shape({
        name: Yup.string()
            .min(4, 'Too Short!')
            .max(15, 'Too Long!')
            .required('Required'),
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        password: Yup.string()
            .min(8, 'Please at least add 8 letters')
            .max(20, 'Too long!')
            .required('Required'),
        confirm_password: Yup.string()
            .min(8, 'Please at least add 8 letters')
            .max(20, 'Too long!')
            .required('Required'),
    });
    return (
        <>
            <Layout>
                <h1>Register Page</h1>
                <div>
                    <Formik
                        initialValues={{ name: '', email: '', password: '', confirm_password: '' }}
                        validationSchema={SignupSchema}

                        onSubmit={(values) => {
                            axiosHandler.post('/register', values).then((response) => {
                                console.log("response", response);
                                setHasError(response.data.message);
                                navigate('/login');
                            }).catch((error) => {
                                setHasError(error.response.data.message)
                                console.log("error", error.response.data.message);
                            });
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form className='d-flex w-100 justify-content-center flex-column align-items-center'>
                                <div className="form-filed mb-4">
                                    <Field type="name" name="name" />
                                    <ErrorMessage name="name" component="div" />
                                </div>
                                <div className='form-filed mb-4'>
                                    <Field type="email" name="email" />
                                    <ErrorMessage name="email" component="div" />
                                </div>
                                <div className='form-filed mb-4'>
                                    <Field type="password" name="password" />
                                    <ErrorMessage name="password" component="div" />
                                </div>
                                <div className='form-filed mb-4'>
                                    <Field type="password" name="confirm_password" />
                                    <ErrorMessage name="confirm_password" component="div" />
                                </div>
                                {/* {!!hasError ? { hasError } : ''} */}
                                {
                                    !!hasError ? <div className='error' severity="error">
                                        {hasError}
                                    </div> : ''
                                }
                                <button type="submit" >
                                    {/* disabled={isSubmitting} */}
                                    Submit
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </Layout>
        </>
    )
}
export default Register;