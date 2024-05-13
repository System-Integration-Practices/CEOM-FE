import axios from "axios"
const BASE_URL = "http://localhost:8080/api/";
const API_URL = "integration/";

export const deletePersonal = async (id) => {
    try {
        const response = await axios.delete(BASE_URL + API_URL + "delete/personal/" + id + "/employment/" + id);
        return response.data;
    } catch (error) {
        throw new Error("Error deleting personal: " + error.message);
    }
}