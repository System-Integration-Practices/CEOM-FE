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
    return (
        <>
            <Formik
                initialValues={{
                    username: '',
                    password: ''
                }}

                validationSchema={Yup.object({
                    username: Yup.string().required('Vui lòng nhập username!').min(5, 'Username ít nhất 5 ký tự!').max(30, 'Username tối đa 30 ký tự!'),
                    password: Yup.string().required('Vui lòng nhập mật khẩu!').min(6, 'Mật khẩu ít nhất 6 ký tự!')
                })}

                onSubmit={(async (values) => {
                    try {
                        await LoginService.login(values);
                        toast.success("Đăng nhập thành công", { autoClose: 1500 });
                        navigate('/home')
                    } catch (error) {
                        const errorMessage = error.response && error.response.status === 401
                            ? "Có lỗi xảy ra khi đăng nhập" : error.response.data ;
                            console.log(error.response.data);
                        toast.error(errorMessage, { autoClose: 1500 });
                    }
                })}
            >
                <div>
                    <Form>
                        <div class="login-form">
                            <h2>CEO MEMO</h2>
                            <h2 style={{marginTop: "20px"}}>Login</h2>
                            <p style={{textAlign: "center"}}>Enter your username and password below</p>
                            <label>Username</label>
                            <Field name="username" id="username" className="input-username"></Field>
                            <ErrorMessage component="span" name="username" style={{color: "red"}}></ErrorMessage>
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
