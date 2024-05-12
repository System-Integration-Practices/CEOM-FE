import axios from "axios"
const API_URL = "http://localhost:8080/api/integration/";
export const save = async (value) => {
    try {
        await axios.post(API_URL + "create", value)
        return null;
    } catch (e) {
        return e.response.data;
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