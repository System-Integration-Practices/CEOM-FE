import axios from "axios"
const API_URL = "http://localhost:8080/api/integration/";
const BASE_URL = "/api/integration/";
export const save = async (values) => {
    try {
        await axios.post("http://localhost:8080/api/integration/create", values)
        return null;
    } catch (e) {
        return e;
    }
}

export const findAllBenefit = async () => {
    const res = await axios.get("http://localhost:8080/api/sqlserver/benefit/list")
    return res.data;
}

export const findAllPayrates = async () => {
    const res = await axios.get("http://localhost:8080/api/mysql/payrate/list")
    return res.data;
}