import { Formik, Form, ErrorMessage, Field } from 'formik'
import * as Yup from 'yup'
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import * as LoginService from '../../service/LoginService'
import "../login/Login.css"
export const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const previousPath = location.state?.from?.pathname;

    const redirectToPrevious = () => {
        if (previousPath && previousPath !== "/") {
            navigate(previousPath);
        } else {
            navigate("/");
        }
    };
    return (
        <>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}

                validationSchema={Yup.object({
                    email: Yup.string().required('Vui lòng nhập email!').email('Email không đúng định dạng!'),
                    password: Yup.string().required('Vui lòng nhập mật khẩu!').min(8, 'Mật khẩu ít nhất 8 ký tự!')
                })}

                onSubmit={(async (values) => {
                    try {
                        await LoginService.login(values);
                        toast.success("Đăng nhập thành công", { autoClose: 1500 });
                        redirectToPrevious();
                    } catch (error) {
                        const errorMessage = error.response && error.response.status === 401
                            ? error.response.data : "Có lỗi xảy ra khi đăng nhập";
                        toast.error(errorMessage, { autoClose: 1500 });
                    }
                })}
            >
                <div>
                    <Form>
                        <div class="login-form">
                            <h2>CEO MEMO</h2>
                            <h2 style={{marginTop: "20px"}}>Login</h2>
                            <p style={{textAlign: "center"}}>Enter your email and password below</p>
                            <label>Email</label>
                            <Field name="email" id="email" className="input-email"></Field>
                            <ErrorMessage component="span" name="email" style={{color: "red"}}></ErrorMessage>
                            <label>Password</label>
                            <Field name="password" id="password" className="input-password"></Field>
                            <ErrorMessage component="span" name="password" style={{color: "red"}}></ErrorMessage>
                            <button type='submit' className='btn-login'>Log In</button>
                        </div>
                    </Form>
                </div>
            </Formik>
        </>
    )
}
