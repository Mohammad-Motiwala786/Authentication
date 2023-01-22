import Layout from "../layout";
import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
import axiosHandler from "../axios";
import { useNavigate } from "react-router-dom";

const Reg = () => {

    const navigate = useNavigate();

    const SignupSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too Short!')
            .max(70, 'Too Long!')
            .required('Required'),
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        password: Yup.string()
            .min(2, 'Too Short!')
            .max(70, 'Too Long!')
            .required('Required'),
        confirm_password: Yup.string()
            .min(2, 'Too Short!')
            .max(70, 'Too Long!')
            .required('Required'),
    });
    return (
        <>
            <Layout>
                <h1>Register</h1>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        password: '',
                        confirm_password: '',
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={values => {
                        axiosHandler.post("/register", values)
                            .then((res) => {
                                console.log(res);
                                navigate("/log");
                            })
                            .catch((error) => {
                                console.log(error);
                            })
                    }}
                >
                    {({ errors, touched }) => (
                        <Form className="d-flex justify-content-centers flex-column">
                            <Field name="name" />
                            {errors.name && touched.name ? (
                                <div>{errors.name}</div>
                            ) : null}
                            <br />
                            <Field name="email" type="email" />
                            {errors.email && touched.email ? (
                                <div>{errors.email}</div>
                            ) : null}
                            <br />
                            <Field name="password" type="password" />
                            {errors.password && touched.password ? (
                                <div>{errors.password}</div>
                            ) : null}
                            <br />
                            <Field name="confirm_password" type="password" />
                            {errors.confirm_password && touched.confirm_password ? (
                                <div>{errors.confirm_password}</div>
                            ) : null}
                            <br />
                            <button type="submit">Submit</button>
                        </Form>
                    )}
                </Formik>
            </Layout >
        </>
    )
}
export default Reg;