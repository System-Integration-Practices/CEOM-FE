import axios from "axios";
const URL_API = "http://localhost:8080/api/sqlserver/personal"

export const findAll = async (find, page) => {
    try {
        const res = await axios.get(`${URL_API}/list-pagination?find=${find}&page=${page}`)

        const data = Object.keys(res.data.personDTOMap).map(key => res.data.personDTOMap[key]);
        const totalPage = res.data.totalPage;
        localStorage.setItem('totalPage', totalPage);
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}