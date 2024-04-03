import axios from "axios";
export const login = async (login) => {
    try {
        const res = await axios.post("http://localhost:8080/api/auth/login", login);
        if (res.status === 200) {
            //localStorage.setItem("token", res.data.token);
            //const roles = res.data.roles.map((item) => item.authority);
            localStorage.setItem("token", true);
            const roles = res.data.roles;
            localStorage.setItem("roles", roles);
            localStorage.setItem("username", res.data.username);
            console.log(roles, res.data.username);
            return res.data;
        }
    } catch (e) {
        throw e;
    }
}