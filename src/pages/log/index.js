import Layout from "../layout";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import axiosHandler from "../axios";
import { useNavigate } from "react-router-dom";

const Log = () => {
    const navigate = useNavigate();
    const SignupSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        password: Yup.string()
            .min(8, 'Too Short!')
            .max(10, 'Too Long!')
            .required('Required'),
    });
    return (
        <>
            <Layout>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={values => {
                        axiosHandler.post("/login", values)
                            .then((res) => {
                                console.log("res", res);
                                localStorage.setItem("token", "Bearer" + res.data.data.token);
                                navigate("/dash");
                            })
                            .catch((error) => {
                                console.log("error", error);
                            })
                    }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <Field name="email" type="email" />
                            {errors.email && touched.email ? (
                                <div>{errors.email}</div>
                            ) : null}
                            <ErrorMessage name="email" />
                            <br />
                            <Field name="password" type="password" />
                            {errors.password && touched.password ? (
                                <div>{errors.password}</div>
                            ) : null}
                            <ErrorMessage name="password" />
                            <br />
                            <button type="submit">Submit</button>
                        </Form>
                    )}
                </Formik>
            </Layout>
        </>
    )
}
export default Log;