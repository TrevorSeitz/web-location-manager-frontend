let axios = require("axios");

let axiosClient = axios.create({
  baseURL: "http://localhost:4000"
});

export default axiosClient;
