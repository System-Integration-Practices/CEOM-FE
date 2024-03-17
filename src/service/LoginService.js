import axios from "axios";
export const login = async (login) => {
    try {
        // const res = await axios.post("/api/auth/sign-in", login);
        // if (res.status === 200) {
        //     localStorage.setItem("token", res.data.token);
        //     const roles = res.data.roles.map((item) => item.authority);
        //     localStorage.setItem("roles", "roles");
        //     localStorage.setItem("username", res.data.userName);
        //     return res.data;
        // }

        const res = {
            status: 200,
            roles: "ROLE_ADMIN"
        };
        if (res.status === 200) {
            localStorage.setItem("roles", res.roles);
            // localStorage.setItem("token", res.token);
            return res.data;
        }
    } catch (e) {
        throw e;
    }
}