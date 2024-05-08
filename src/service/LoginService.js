import axios from "axios";
import { jwtDecode } from "jwt-decode";
export const login = async (login) => {
    try {
        const res = await axios.post("http://localhost:8080/api/auth/login", login);
        if (res.status === 200) {
            const token = JSON.stringify(res.data.jwtCookie.value);
            const decoded = jwtDecode(token);
            localStorage.setItem("token", token);
            localStorage.setItem("roles", decoded.roles);
            localStorage.setItem("username", decoded.name);
            // console.log(decoded.roles, decoded.name, token, decoded);
            return res.data;
        }
    } catch (e) {
        throw e;
    }
}