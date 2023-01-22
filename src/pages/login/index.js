import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import Layout from "../layout";

const Login = () => {
    const navigate = useNavigate();

    const axiosHandler = axios.create({
        baseURL: "https://api.darwinstech.com/api/",
        headers: {
            "Accept": "Application/json",
            "Authorization": localStorage.getItem("token")
        }
    })

    const SignupSchema = Yup.object().shape({
        email: Yup
            .string('Enter your email')
            .email('Enter a valid email')
            .required('Email is required'),
        password: Yup
            .string('Enter your password')
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Password is required'),
    });
    return (
        <>
            <Layout>
                <h1>Login Page</h1>
                <div className="container d-flex justify-content-center align-center">
                    <Formik
                        initialValues={{ email: "", password: "" }}
                        validationSchema={SignupSchema}
                        onSubmit={values => {
                            axiosHandler.post("/login", values)
                                .then((res) => {
                                    console.log(res.data.data.token);
                                    localStorage.setItem("token", "Beared" + res.data.data.token);
                                    navigate("/dashboard");
                                })
                                .catch((error) => {
                                    console.log(error);
                                })
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form>


                                <Field name="email" type="email" />
                                {errors.email && touched.email ? (
                                    <div>{errors.email}</div>
                                ) : null}
                                {/* <ErrorMessage name="email" /> */}

                                <br />
                                <Field name="password" type="password" />
                                {errors.password && touched.password ? (
                                    <div>{errors.password}</div>
                                ) : null}
                                {/* <ErrorMessage name="name" /> */}
                                <br />
                                <button type="submit">Submit</button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </Layout>
        </>
    )
}
export default Login;