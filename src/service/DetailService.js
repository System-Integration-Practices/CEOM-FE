import axios from "axios"
const BASE_URL = "http://localhost:8080/api/";
const API_URL = "integration/";
export const findAllBenefit = async () => {
    const res = await axios.get(BASE_URL + "sqlserver/benefit/list")
    return res.data;
}

export const findAllPayrates = async () => {
    const res = await axios.get(BASE_URL + "mysql/payrate/list")
    return res.data;
}

export const getPersonalById = async (id) => {
    const res = await axios.get(BASE_URL + "sqlserver/personal/getPersonalDTOById/" + id)
    return res.data;
}

export const getEmployeeById = async (id) => {
    const res = await axios.get(BASE_URL + "mysql/employee/getEmployeeDTOById/" + id)
    return res.data;
}
export const getEmploymenyById = async (employmentId) => {
    const res = await axios.get(BASE_URL + "sqlserver/employment/getEmploymentDTOById/" + employmentId)
    return res.data;
}
