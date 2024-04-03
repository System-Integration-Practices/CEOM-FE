import { useNavigate } from "react-router-dom";
export const Home = () => {
    const navigate = useNavigate();
    let logout = () => {
        localStorage.removeItem('token')
        navigate("/login")
    }
    return (
        <>
            <h1>TRANG CHỦ</h1>
            <button onClick={logout}>Logout</button>
        </>
    )
}