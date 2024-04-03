import { useNavigate } from "react-router-dom";

export const NotFound = () => {
    const navigate = useNavigate();
    let logout = () => {
        localStorage.removeItem('token')
        navigate("/login")
    }
    return (
        <>
            <h1>404 NOT FOUND</h1>
            <button onClick={logout}>Logout</button>
        </>
    )
}