const { default: axios } = require("axios");

export default axios.create({
  baseURL: "http://localhost:8080/api/v1",
  headers: {
    "Content-Type": "application/json",
    // "Cache-Control": "no-cache",
  },
});
export const axiosPrivate = axios.create({
  baseURL: "http://localhost:8080/api/v1",
  headers: {
    "Content-Type": "application/json",
    // "Cache-Control": "no-cache",
  },
});

const instanceAddress = axios.create({
  baseURL: "https://vapi.vnappmob.com/api/",
});
// Method address
export const getAddress = async (endPoints, option = {}) => {
  const response = await instanceAddress.get(endPoints, option);
  return response;
};
